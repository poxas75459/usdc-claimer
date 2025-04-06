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
    "3Tbf2AKN1RMjcSoAjZABXxexdkMpRLDGszUzh2UX7HRshnA7FLqAbdyY6t2N5bxqffXHdEMMbLzst9pfA9UPtnbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23614XU9PZmTaybUkeXhnSphWjK9H58v3h5WrMPeT1TzSBVAcU4tWdaAnb6fwR3WsKgMMmJTERWtskeQEMLaAJEd",
  "key1": "4SrgCY4caXGXF8G9jcSjX9vvv3LdXWbuxz92Js7dkWDHwinzREsCJZ738wSjrnA3sSWcrx2Pe63fSHJeKkDYvTwc",
  "key2": "4Z7YkPbviwaapGnALNJg6qxkawGyi1n8TckKrXvghnU5K2wcrmaUCwY8f9g5r7w6DvWPbSSouT1J8pen5eimk1Fg",
  "key3": "47abWLpbUgzR1ySsM27cU38zs4uAo1wL56wduCSna78L3KNyZKJUSXDi9aqdR3j8zEyu457dR9d8Pyu2H5BwYJr3",
  "key4": "Kfk93BydC6w9vxV7S2on23pLo1eUSxHdhmUSkZxKLyQSj9L9y4tZMWfky1LSWuXEhqp3xRgtNBB5HeipdjUps5A",
  "key5": "2xaAJ6RvLWsardGPECGBiJUdCTVhFf9AcciwNNqYhkSKUXSGYuoNyWmyPEpGAwwc5JXBqseEfKWLuNhNLVB4L1Cq",
  "key6": "2ngXB4oCVujLBoAsyET9DjjNwt8FJirHbc6JjoHRXxyRZp9DXSwVD89qsXjupHAzmETKbxhfpq7bh17wurg4Hai9",
  "key7": "61DKQJsnxCiCrdt1wvVNAHMapXRqEaWn9xhcQNd5GgjWv2zgSmrPRfguydHuS3MwyfgLzQMBkgLVZ4JHRVQJW3vG",
  "key8": "QjqXoWgLiM75hhc8dCs5jaBTYK4qVZ22ot5bBJ3gS1kGEaAe2KhvPvVHbw2sHRkJR533gYfMoYpv3W83iZVic8z",
  "key9": "2wc79UjFAp4K5fQPZ2aquPYckehXphH5VYvqZAtAaSFw55E4HpgaiJZ6RH35YQ8WxUXtjjfkBKnWE7kJzjVfNxVP",
  "key10": "32idh6TyssLtpSoyai8Bo3vbE9rvSHnPswToonFzkfPhqJwQks4KxrigUPbKYP6pSqVu7HcxjKdgJhstM2VKVAsp",
  "key11": "3mXw2hFkKMS1rSkkBJGp4GFxcQnNvLQVtR9bT5nbu2Uc3NXiek2KW1coMV4NZ4jTbSkwjro6UDCMWP1zWJaXTzyg",
  "key12": "vJP1mGdK3FKF7m2DwBSpBpLJQAh9KhrSN6GFEzJZhJaHPdrSpcHgo4paTz5v1XYtb8QD78mY2Sw49R7REPzTRJL",
  "key13": "ymHyYsKbk9j8gTfnxAZ2KoHcy4czNpDsmZmeTsj7SS48MP2w3hXapSdM3w5Y4W4cGUSfu8XF28usjjNNegjdy23",
  "key14": "4pZawmX3Ky6JGhRB2xcpw8VhvXYg1wtFMtkcNXuF5vGSQsaPdgHSiNAj9XdS16AztH4YngwguPPogG1hFEvJCCBp",
  "key15": "5RkUJ7v3UBgY6bMPSGT1fDP8mVMUokEsM4f34b8Lr7HkfZSgCCzyTZ4rQw87ZCLNtK6Jr24w7UcVqZHaLKTwPFZZ",
  "key16": "4MyU9g3omFeACEfF4vxbfSRjN9GbWM3KKtWdMPvyVXp23KF97JWwm7XDEbnWTWhhMEctYDN8FSqyFzhm8jrCCwbM",
  "key17": "63TvkXPUmUyesdbC2ZRwmmvxgrcxW1U5nS7g77GkSk8ByeNkHmPYDH41aa9avP2nVfFWXCSkPeTNu6YSauWKc1Ue",
  "key18": "4B16kfSZ6PHshqioshkkcHxPD5FBmHBie6N9sdityAsKBBbfbNgsvjDX5YGFEMtXb5bLyX3Tok4nbG2BPnp6trPU",
  "key19": "58YtbtH2Eqoksj9NvX2UggPFbQvmDm1EY2YYR7w6HuhQBXDU6sZ3jjxqrNWrD5LjhzVuWiCaCpHnr3o59BrFFS5q",
  "key20": "2zY6TVeuJp1VErs1byTK6gmqUDcR27PwbkeHyoeujwHTg1dM2SeAPv9PuiksQzBhFCgN4XZ7r6TNvLRGA9u1pBAp",
  "key21": "233WgpF6jKPeUFWKW9YDvYta3bFHkBvtxWo9GqNMSg8qwCaZCzd4Fzo9eebwe1TjYPdTs5hgN5wnTLtPQekWoks9",
  "key22": "2x2oQDLQLUGacvXn3wtxj55hJXTynVn6Hh2abtqtbEEav8CjB4ozAqaobPfUThDiGHakmACQzaVbRUidQKQMFgWx",
  "key23": "3YSRPDBPqYwNQM49n3j5ahw82n4r1MUfYfFKhiopoXiNvJ7FqvEsuPdPufB569d2uNazt2mSev6XQF24wR3ife36",
  "key24": "2ksMyyHDeMB4S3zWFTptrH6kEyq1Xo1U8Rsr8SPGm8BP6TorC7vs1XxFKBANgCaJFBvbVpvxcotPaaMZCrdBhe7e",
  "key25": "5taJZNHYnHY7CrRAo3Z1jobgL83gryUUzYq6b8waz3U9k6usWpGXKcQDGVPKKSYjFAYmBeKoGJ3KC6zScm9E4eR9",
  "key26": "1Fe2XUtZBpaL12vV6ZVNXD2MvgPv5yS3Aneyc4CEqrcVZbP75gxPu5FBWg3dQb249EG8fQXJqPEdBaM4viuRdiv",
  "key27": "26HR6RWuv3s9aV6Er9oC53LsfvBbytu17Cr6ge96amQhGYEbasWMieFewEmpTft1rJQhtR1ou6smJ2HTGBPZHXBy"
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
