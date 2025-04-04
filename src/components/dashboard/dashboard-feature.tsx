/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4nmytD7cvcQUQv3zicfNts1hqvN2T6ro2ciuhKaGf2bhJF7QXmReUSd9xvPTUgvfLQ1pegLwkTCdXVM1iK1Vq3FT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWZWqwBx1PoiEYuhAjwDXAPgwCy8pGEqiTCWFNh4bsycb7nK9jRA73wxz6r4K81n5LDLRccPyAyCpoyxUpCQfEo",
  "key1": "2DYrzGK2PhXmYw9mJXess42GGsUnuknz54KnYZoBdQSPDzMhQrTtPrkeVskgyPSPP6FKuonxBFEwrdtjDd4rKtpa",
  "key2": "3P6YXnaBR116eQ4Z2pEUk2XGEedXtCZhwMw5kzb65gF5DyEeHEjgu1hXrhz5E6JuhhWwjNQSiBb5EQuWr6drTLC3",
  "key3": "28vFpjJrqB3hYoeE8MwVE8sAvWyzVApcWZq9iiUMqHw7FMmVD2erf8Bnn5gjpuAuwH2CukjdW2pUKo1Vyo2QzYdU",
  "key4": "4pFKzTHnEBkjFqJo34gMmK3fWCSzBuTArhJe3yAfSPSg68PtRqDDTsct5Jx7cRhXDPQC7bhPKeLeJGxsJhS5q7TY",
  "key5": "3QT7pHNbrU8pcKj2jptapC3BeKaLwDyWyYMdaZyHVn8775d5BG4HRSNQwfnMDRP2Z2Nh37GoEyUcPcCMQTfwscJp",
  "key6": "42NUhQHR3477wNqDaaaCEMG1vqE63F5ZUK7RCFj9qBf4uSeA6cMGonXbM6GJyKfwJjgMaUFWeud3dQS4Tonv3wZJ",
  "key7": "5TFNkkTmtJvyXEgd4aXNRXLt5W8hCJYsrZZnxpr3nCYKfcMUkWMvTX2irx3UsFmsWQDGvbFGPn8k7m9PHWbbADdg",
  "key8": "yroXkzBpGYquFxbJHK984fRNDnWsCtTo9TFuM3utpsm9Nf8GYnewuYMYXB9i68j7CUCn5UafuNPk1hc1BzSo9Y2",
  "key9": "sLm5vJqxkUGktB8U8cJfaKkxaqSEcRK24Su7DEDg4moxkc9GdWmm58yy6RYLyoTQHqwLibuPPRE8VDzDJRFa182",
  "key10": "4CVV8vfee4Xnv4woxhLeerVPXxeENUBam8yL4z64iaLUU2NCK7jeB7iV25AnKq75iLfR3nqeU9EthB4NUFD89y2h",
  "key11": "3wGDF7itFwps1k6KHBSY7pU5BqtKZYFDVzdkkWuagMFKuWe3mqQ3thERbxBtHkxxSjQ1bgyBoFKqPFbsG4UVyiay",
  "key12": "2yzeeipYjmFCUfXo9qddr33Ua5V5Z2X3RATPxrEnkgzCqoGqXD5xLMTgre2GoXrP17hDhDfx6TQ5bqVtrPuc1Yqm",
  "key13": "51BTVTetxZSrECeGnhJJZJQED9xCfSdPkTh5dM1HpNnMGjf5jLmzg4k41gzD44XbQF9WniEioLaKKsgAWrfBu9NH",
  "key14": "2FLZW13u4dKBTgzJhTdzGWW537C3DCmSFHdQyvzBPHMgDUmXkgjH1jJbpoVfeB3YoBzb8Naxor5kcnBgCBCJgy48",
  "key15": "33JpQR84pcMyiXuS7oGfn9cePza8Le5FzpebfpzdCgPcaVHSedebwAbLhT1Gj4vxHfSSFwiT1mfGy4B8e7TqvxHH",
  "key16": "whiwi5JDVZ1MGpri4dVafM9vQ9Eo9qqjN91BYhU22Fb6GxbZdJigan2yWZ4CGt3ecc5NcNJBn9LC2Ki2TdoSnns",
  "key17": "r94X7agC1FQyxhVMgH877L2UDewvf2V7tAYrnsQRLFHmSFp5akFTjJUv3woRsfLWWv1rvpAPYBXYpb3VEyRf9Fq",
  "key18": "653z4S6SUd6KxpSHc37KQXEPkDgdMG8emNUaLSAzvKbsQf1WRCASmGM38BwEuqWgd2UzaBUVeANAFCLqYYEeUieg",
  "key19": "kBcHSEfeUK6XexKUJiVqeXzuvRsxF8KJeyLcGQgQnrMyVt1GVctYV3u8aSatGD9xcbSpenZA7MArXq3SdULQHEj",
  "key20": "3WjSHXneX2BxdYj7wd6pUPGomnV7adj7crVkuKjA3JbfdqsJh8wyUvFwykdUk9z1GPmFZMmwXo2i2ZxzyvmoPPqP",
  "key21": "4j8w7njBFkwSZ1ZeprPGCJMw9a1xxuHohLAQ3yojxkSBEQhrs8qx9QQ1iXRkynYmRvFHRBxkoBj6fDp8f8mMruW4",
  "key22": "3aQaKthRL2NpjEgm2EsK8GWNLZ8FvQdxNMsKvJD9jgjD3Tzwbhd6Lwj6oT2xxzrPKnEyyXRXmXirZSwBbYSrEk3X",
  "key23": "3Z9pdNdN3tm5zJJrYtE53UDFxpMKB4ajdG3cV2Uau622KgUbHjH5ri7oq1F58j5HH3xryKsTuruwfdYzHK9agEd3",
  "key24": "2HBZvNBBVUb9dGjRXMdSKwtsFjsu7THubE6sAnoTRfUeXjQWks7qSAgfqQQbRrn2Q5oDtk2h1fFyrQLuoeuFdauy",
  "key25": "3L3AfpMC98mpm1x7jFn89caUhRMLDzUSXsNar9vvj5JD7qBDMYX1HvpSMXHDGQ5YEx4oKDXxz8vNasrPkAAsCVN6",
  "key26": "64hks9geuKiS7mcemnVQzk4TcXFF26bDP6HVDVCDtvNQng2Cs2fxSKEADjsLhCLaMDG7fVF8p5fjVmSHE4JUX1uw",
  "key27": "5jWhX9U5zBgqv9WThDd4iKYYPPw6sswpvGRYapEnonbiWorhXkvVWtufYa2LA7B4oBjT9VvnZ8iFBJv4Cz2fNKCe",
  "key28": "L1tvqVJGBjGuQn1nufHWxRD2Z3WNDxCmGt8E6rzwFagrBNUdXszWnn8aMk1uAW9jNUPdWvwUaDyX5kmz8gqqZAh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
