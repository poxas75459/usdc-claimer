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
    "5NoYceatp7Y1RbKdXDs56ihRSRugCuvGYe5kNGJfchijJXWSk3g5uti6EjSCHVCc7kvNXKo2HbMty3km2rNymiRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pEHcTUEyYGq5dtHrN7fgPiz5zzn9SyBSoFy1JfGep1u4UcUMJam5w3tTgeGkJXYRXU9dMThzuVRmmyeZq6DGi8Z",
  "key1": "47gxrEYYpezp3zjdkQQPDLQLk3DpEBYNRbRSz6apD4k5LzWCQLUqhGw1E7sS9JwsWcx22hHryfKRnZ5DnkuoEBfb",
  "key2": "3atuw3WcGLgVFGDnpq5LQc6KMpvnRUn8kvZhjoAqkZriB1WXo8x43LnwqPnDVRu3fpSrXXvAbazrMkJhFf2hdnVs",
  "key3": "4r6T1pVSm3oHQv4vx2WZ225M5RZF2pdivdJy7RYFTdzZKavxpMi9B19cr2zv9YQMghYq5B2AJtUcLZHTT6vm4ApS",
  "key4": "2mwMtVcNnt8t2GwG5nND34srWTMS4HMb7W5TFDjkjhefU32y7EvzbFrwphfy2rBQAb3xyEvUUYPiavox7Mx13Egf",
  "key5": "64Dqfmici352WuUbUk3BxwoxjRpQN26pHmAh1Ptj9zrjY8tDK7vWozvVBQybrjzx8dRyTsoPVFZiKz2XUoYdGWxK",
  "key6": "Mj53bz2Z47e3y2431Qtn8ijBgsn58sGyEbZqnYfwMdVirvbSJ4YEuQnGW4zXwQbzA3fC8t1iqQ9Fmym1eQjuLuv",
  "key7": "bpGwEGruTBKzsZsSpLJCpTorye2N2AzPaKvTe6hLDzPiGBAHEYjxh7TvZzkVtDxE3rAwhqqWnf9SvwrJjwQnBHg",
  "key8": "9ZVNUeNbt8p4HctybEeBPNNbrr4RGtLjDgDmho2brRdurYuFzcRtCTyg353FnDLmfbPkr8r3znBGBaU3vUPqvak",
  "key9": "4mLeE1cChpqUPb776Nif3GhteTrMgkMWM5FBwwiQQJJ1ovj7BihyYzyDCBBS6oEtvo6b8sT9zDdDr53HPaicWTJE",
  "key10": "2dS6ZWheFTRa4oEPHM3GzwCeZtb6A8N9KnM4YoYNPtYHyrQdSKvYFC2Hpzgzdgna86yUbLMtYXfoSekYQGr57eu2",
  "key11": "5LbRfqARVKJwfappZwAGbUTpiJt1g9PLfesxmFbmoDR1g8c9t16N4B9Kpoa2BmPbotdzF5KhyH2LQU3o1uz5k6mX",
  "key12": "2LS3jkqramfTPZ6e3YhuMy2cUVrJbpUFQxT2eW8cTpDLbbaQi6QerNj5Dc2ZV6wKztn8YLdkugy1HXRSPM33VvZW",
  "key13": "3bKn4SFiE2Dn1Y9DVZvBbDvGAcZ6qPJEDJE75Y2ziCu4ZPpbDfijW5k3KCJZZcz4Fwdt18T8aC1XaNKTV5P34J7B",
  "key14": "2AjkoxjadBsHDsmBwt3w3W4wgU2vPwDQ5QZsPvKApwHM86czNwuPQvYE5HvB32ZMhqrwYFFhQUKeUVnsFZnY1fEb",
  "key15": "5MBchoaxp4yztrYEyFLFKXCohqY9jABgAJNHGZZEugMzWF1KXgspDgrofjcybUbkcxV8jtdFNZfqqqHReLcA9AcZ",
  "key16": "4oNN6PDQRsVRnuXckdSDHf6Mi1VUyoyhfCyFWBkzm7GN5uWGi3zzoVFaEevniB1zezG1o4Q3gBhg82McV4aBkJgi",
  "key17": "5jGXsywMC4Qnpo9tG4cxBkBSqc4aXzbCczhQcVxwEGpQxeetBKaVS4aPmCMpSU5wKGhimWzWTtK3GBmc2RRxo11U",
  "key18": "PNissPBbPtZYazrjpiCSZBWZL4YtwT9cCknupLPtXbYCXqfZSgFk7W8BcKFq52KCru7PhSwTnAprEKkdy6w421E",
  "key19": "4PLbnEeNqUtqPnedM6dGnFTy8eNhVcriigzLWKLsQtbQrY7zdD46s9176qaQh2XwTCN7d3dtfFUq27x145HEbxPi",
  "key20": "4TSxNx9Z2kZSsLm25j9QZ5LnJheuPec7Z82A55rndAhdoHWBMp5CiMasjH6BpCW7NKaBrdqxhyjuYFAuFuotQqz1",
  "key21": "uhin5f9AGrsfZKTN2a1nRguUu6HaRKwFRDCLn4QjMxKYobmSNQrBHkTpW7CHYjiDEMbVJeKV9tzUG5RJ7fVVy8M",
  "key22": "4bBoMks3JafmZTHWfvAPoBN7F4hwMP2qTXXAphMtn6v3ejEMdECADc3uPmCTH2BjAYWiUC9XgwrTqNpwtoCREqwj",
  "key23": "65UjmqXLuG2poAQxZ9CtudwZGqquEH23opg8u53zrNR3CSEX97iYJSnuXEaiFjtYrpKHDGoDVZwvxwnoDUc8swwU",
  "key24": "58q6UX6H4zXWFGWWZfWEUDYHZigqkWD7uvz1nVLwsnNw4wC4ayGKbBw6MzPgMu48TiBuM4opQrGeG64MnE57Uri7",
  "key25": "2aMYKnVHZtghr2wWS5ysjiZTrHtNw7wtEhDAoxkEMYV63UNaovAGShXvtcwvoHhUbYxYdjGLZqLaLPpUS55jZrkg"
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
