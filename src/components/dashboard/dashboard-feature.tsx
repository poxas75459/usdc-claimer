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
    "47wyxURLT9p2NWQrhozsnESmV9keRCg8G9xZP5ErMBAzBsL521JWdENeLP5xQSicGn2soRhdGMnnkpswheB51TJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chWqLZ4qQ1A3eeXzoipvF1Qd3WSHEgw8RTBVBbBi7U4v1sFxmY9yyrXmUBMCMCikDp973XBbsLSAB9FAzNZ3o2m",
  "key1": "1ao4441D3Lf4ZSQjL1s3vtfGY9FsJudrpkcoxNKhHt962NYvSUncoJTqqF8Liqj3mSQg6xQK6d81gguYQpzoz3R",
  "key2": "5YbcmXmjRiURgtcgqoPGUXEWgVNiBWYFSqXtXsTWUGEACWTbY8GqRir1dREacWYh5aqWBzkhgMe4VFrXERbncxjD",
  "key3": "5MNB9p2Cdrp5JYSTnnoWk49TnQSXEc7kDodwdjfFSAY2nQHrRt5sJNpSh7JwEvSeD97A1bRaZk8GPpGS9PznbfBN",
  "key4": "3CPQ14a6bwAH1bJ5bXDRXNoVQHsSocVkUvRLA6FA3fMQ9xFmRD4eL6pmmZfHfHDQJjWJm1W83QYeSmmgyT9zsuoe",
  "key5": "5sQuqHzhnZjCtbPvFm8Bk387fu9FPJSYchegGYZtiaUKNTSSkg547ns48nh9tgbUKWSPWFxjbgYWSaojTfLDp9pg",
  "key6": "macnC7JNNpVnXNCqiaGD2txsS6oVXkqxotgtcikq7WHzsmSR8Xt8uRvv3p6zhU2CqhCZaEVs4tYbzf5dEAopK3r",
  "key7": "3PqRTa2UfWQwRxtLn9fGTcbjPWEJkNqGHE1i1Bn6QUSiSAnjo3xc6R8y5mZcWuowmmVSXCaUbgCKvnC7RjBVxYbk",
  "key8": "2MEKzQmn8YZisL68ruUVV1LHLM1268QKvNkL2pdepCCr5sRVydMZaGETiWVaL5jBbeCuTwJKuwRkzroy2i3Rw9Xi",
  "key9": "2Av8FA8Ndparpz8u6eFLKCtjRxXqHvgp6MpMukh9cWT4xVjbTn5KpjAzhSLGuMcozEngxVrrRxwvgpYMLrkvJhwt",
  "key10": "3TDiY12NkmRWAbxFyKgXufN5z6ADQjBMBFV3vQTc8vGE3ruHxwH59kxZLhz1eQLHNnJ77nnumGkTUTVgxyygkKUP",
  "key11": "5xjuivV1WmXSH5YuFGWmhYH3mzb7D8u2iXaBkd6NFg9v88CDeSBDcPPdx5hvs2xndnHs3T4d1AGESK9L8BKzLVjL",
  "key12": "g3k7M9z1Q6ZLGGRPJ3tfiF6nLumHVK2QgAfEQWE52TCk5Dr6WTna59uNtNVEYUHdXrdQF998EcbcmEcCpF266t4",
  "key13": "2s6PCaSNycpupZgGH9MJfkCkVEWaZLAswzsMUt47zdN1WMtcMHah85k3Lmtr6txnqpt2F4WXx25yKpdhdzoeA3S6",
  "key14": "KuF4ryiK8v3PsYjoBC5cy2jfZbESSbYWM6Cm2MoBBYntUFA8pJD3jWYH4MSmq2L6T9QB5VkEUB4NKjUrS37cW57",
  "key15": "bqoz9dnKiXSgXzQWBimfAJQBv1nu69z2foCaTwhF6LKdmdpzJLSvabsGGR1s5MZwdBWmgiZshvLZQ23spU5Hp4J",
  "key16": "kbhhbUVkFw7EzPgDyp8SESrx5XQtwdkdDWGHYz7bn7F9kSpaWV3P4iEjNg8ydqgG1SeFTPy2PQFbfUV14BNYeLo",
  "key17": "Q3yk2oPkQ7DhJKxuTUhDLNBJHoosrAazEfAVVBRHTzApajxWG7A1zYLZnoFnB7YqDjYprQzpLNoxUL2oPMGB73Q",
  "key18": "4e2fztuiBjm2QQ57udnUWb2jKveRdDzQ2wNXaQPDtA8nAeT98UcoEHv1qtUNiPF7yy4yUkf4phE7EuhWA5CjGQVv",
  "key19": "3P3PP4q1dFrEozrRtYgtUbDE2iWFP1eYvPvh43SC3TSuFvcRHJSRyrstd2pEM2UPxqZpypGiWjzymUPqnCwiio12",
  "key20": "4fFTXLhaLeUPEJC1ozP64Vm8hubMwZvK7Ms7J7nRoUyAGZSxTmJJXz1KXpenn1ifCBvR8EnqmUhWc7tj7w1YcGkb",
  "key21": "51h8qVjZmmT6BMm4e2Vc4p25VPdko8DmBJYH1HyhLuaD9CUTGbbzHk1TwVbcPEkrWS6BVG7GRhRbs59jhqaTvB4h",
  "key22": "oJfMyK3zLrwVHGwFJZmA6cdjvnB4zgTW8w7b1UKFcmfoTs5pfH35cJL5VntmZJtrbM14QVrDKyivUwwP3vKuKZE",
  "key23": "3zGWDT86LcfqM1ShZvak4eGDrVYF5tFLANoXWCMsYLuShvY7zqoozJ9fM2EzCSbfHMxXSRqqYSDWAe8JL2ZdtzPy",
  "key24": "4F1fnP25bxFJE6PYFe9BCPzEjDkYYP3ZQs2GcQj7G2pTFyj8wpFHmqw6A5kHZTCbpde4hAtD5Z7ZGEwwgyUJPQvG",
  "key25": "3Wxqyda3UnGf14bR5RjYDzZNoCBtDmCH8GhGg1LYNypw52z9QijvyfB9qVgmSPUYW7UpYBKtLUjG35NWXED14UuN",
  "key26": "3TE7FrcFPsvorwGXmf8C6mcYnJLmANcEdQtCpaLdpRunSWnDrHAzZaSiBmUWkadsJLocKFPuY74rGC2hbEGUQSYz"
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
