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
    "4KT81yghuGYWW8bUEqS3yDWvUThqPvfZRQM4nLi8y3KbNr69jp6tAzrBj3cVxUQfkmCygsrU6XqQNQqCNYyMfgZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yq7jKZkubji9g6scXeFpDFxY1e25m2jdtFryMFWkxbU5T87Xfsz77KKzydX79Se82YFZ4MdascBkf6DER4Ao6t8",
  "key1": "5UTdU75YkYHpdxsgLwcgdjCngUeoxeTvYbcoPnFPE9KFPWZGrTmr7mQhbci2aaLGA4g3o95HdQZocoQ1jy2oWUo6",
  "key2": "3qpjk3s9sour97EWm8Nss1GriSqYgY3Wpr2TYUdadpUa1LJMeE19DeREBpBAAviNfS4tnZPxMY988aDALBjPF8z7",
  "key3": "5VTqJGNdQqtkTNpbCztHtu1EVzCzv1FkfjGW86Z2f6N47saqRfcBfMM2Pv4rL9YywMZynnsqVMwHBM7mkgGHUWNm",
  "key4": "4tZahMtN79BQAa9qBq3eyyqCFHovLH8wTLZRhzzQj9StSFQcVpv8LnWfFtuFSzeCQhmgsRrppLXjRp5RhnZCyQkV",
  "key5": "4epYrbcMwy9G5VzUwWpw6cJoTeRsZjZR9r5hbESnMwzzzh1XyErFrMtSsmJ6t9qo8n343aX5S86cAVxZsUkb7gz4",
  "key6": "2nNEvdLcXMdVaDHFWKq1QZoQAoDKG2PvwzdpGZGGxqxp3RFgFZfSyQHNJKyvRnyTio4mH8bynPrcHqyShpL1ZhxW",
  "key7": "2yY61Zh7goY4itESto7VjR72W5s9q29bXNYFM19vnRrjpsf1A5LitJyiHRwEnJ38xEcjxFranH1gbwnDQuezwWB8",
  "key8": "gJSsVaZsSXEg2hcxdWmFfp77kuN2yqfzbVqK9B5pmiZzMpueJkyPRgxpKFqK2otPTMMA6m9J1HqPLbzkgs6vYpe",
  "key9": "67pCrSVv3nrokk5adFp4jSYhsTbAVXzuncdGcPM8mbCu7aah1grNpTxDQJh4HE9KEVN5m51MoNNcBLvgsR4xEf3V",
  "key10": "3wwukb36HBJoM5WDHSVXJ37nSiVLrSZBKCjvhk9VRVbVFWiUGLAPJ9JtfwHdRiaPz1ZqxH4SJ5RMjjCRMFSZBt1k",
  "key11": "4E3DxbFkmCfT9RYJZZ3mCMnXceLdTvfptJTQL28Ja1LPVRFKD9JK6D1sGJGZX1U6kmAsNDwz7MveipgLh2PBP396",
  "key12": "4WaisZnrpJYqjbQGhi6FCDXduZVM2pWtxfuUksoa3CMysP7JJPhxT8yjkdPCPDn3eB765kkgiJJPwdmbWwD7JjSp",
  "key13": "5VkEoAkN2qc53szXfkupejUeH54Ex3RXcnxKSxDVt5M7TJeu8AdATK7qXbBK7xpW2fPJV2wwFg8TdkyGdQCe7rKW",
  "key14": "2M39RUH24saaLbuH2UcSXicU9EZoxGrDZNbHreY7r3i4AJeUHmYwEnTC23TtoBWopVmoDR6unLJzs8aVK3aS9oC3",
  "key15": "4oicdiAcgrCSWVwqVG3VUMguYV1ap9sJw34nofMk7QcTjoC5WdmXo8xfyZ7xdyKj7VXHoyf9gu8wLPV65ivRYyRB",
  "key16": "7i7XBxrBm5FqmBw13AouULdZQXb3P1XUM1WP7aADehNQzUkJhQippiXehaGt4JDAntWkbqmFzHMe57ktH8TC84w",
  "key17": "2MCuWqhWciyCbpNLvDNccSziKVrWV5eDHyJsZCGFCCz6yoZ83BAZ1oNmGLVX43RBViRu2m6L9vAHMnvUeW6jwviv",
  "key18": "52RgR1r6vn68WGpvNL8xoS3K3YcbcKAAnxWd3UWHmjnTkuNqL4if2XN7Uk7rbswacME1osZzcRyDmZkBaazKDxZT",
  "key19": "2atSmFWW2nARufYW4NK2PoEQeyK3FebDN7mcEx8JWT4wxD63VCopsLGKfPgeehUgv85cjTJ7HPqnDKcANkQ6d39i",
  "key20": "5SSCnn77B9ZbLpB2yRkQvExbHdGPbEKyaNr8fi9ZxbXyL9r3MLk6CxErhsgyc72pqQLvtpjUKnVRShFE4myoSLrK",
  "key21": "4JRzEfsG5Yo7NdAV8Nzv7eKPub8kwowaFkyyeP6hbgULXpkFyYkeH16UGwWWwn2WBLPx9CbfyXUnEr8awXixZU3h",
  "key22": "K5MrXfryghRiFsm9aH6eER7dRthKidmejF8vggp2bYJXjmLF1uo3K9L3ddciT7EAhZsrc7nFWxFu8xUPDrdZK2G",
  "key23": "3h12HjyfzHqWX4ZvKF3MZudiy68h3ndaXeCbAz5bh1Pvv8jwrdKzoopPnNHJ1e7NCW7cFEhhFu5857JPXWkg5JUy",
  "key24": "2WoAX548toPRyVpS8BjKgJ5stDg7t5XsHcVX9iD8fbbwShrFjqW3Rm8oLHaXDxL1ffeSTKmfA1uDqNMBSV4QBWEL",
  "key25": "3TLvguRHCZn8zknX82m7seXC2RBMSdjwqefddM8pHUgaxFSkR1rYYiifa4mhkYLbw3fyqLaaFouzVaL8XzxGjhiW",
  "key26": "3hsX5KTtpPRdoNDLTnWrqVaMGzvmEbez2s5cXmsYKzeUA8bfrjHNh4Ch5kQZiDBdYnwT2NSM9HswCVFpGisrYttS",
  "key27": "AcKm2R9LA4weqjEWDfqw6Nd6HYta1ChDm1wyVXpio3zvW5ukbN9Nye3JLb5zesHJn5JoT6fHThrWk9neeHdvk4m",
  "key28": "4zzR74JGJ1EVzujmQrQgWLLYsgyUwJj8PB6mCkdCNTTaHrnKPQ8Jq2V3bUfzfHX4SGv5zU1H3jCvLXk2nqzdBz45",
  "key29": "3FYFM427HQp8sfqjP1KwjadFVT2D3PszPsqqupLi2mzeYYe4Ti7LrZLgYApgbaLR2w6rYKebYjTUCxxoc5fvxxqm",
  "key30": "3ssqwDZggkkNWcEgaa1wXxta4QswoYA2KUswDReyMgJqxwz9PzkEA6kNy3cMuaLVGNVa1KLs7Wg1omaP6wmHhGo"
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
