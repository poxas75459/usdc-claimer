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
    "3jvJcL36rjfty4uKVLqNheDTEiRdUyoxJx9hJYG7vG3hnghLXNrkMfGZa8KkbS2WdDRmp1GPuv6biaD2Rikqan4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63DUJWbetuUQ8iGM13ZLWp5Jkyv2o15YH2tiHC2epPtgUPJNpQzry58kFNjiY5YCLdA6HwMBcr7ctZXFVCUDikBA",
  "key1": "3Sv7X3A4ChH2pjY2pocBYP9X18yVchAJuPQ3XY6ScMqX2V5RtXjX7N83XVEXF26HzxNEc37DmJ1cGuD5ggLW3j4m",
  "key2": "4vkvQ8a5sEvsF91ubMUHu7Ps4DNLEfDv62XHYgamwnBgTUjspBSyxCwKxLSLiJC74uMP4NbJMB5EwdvXDD42ML4j",
  "key3": "2igg4q8HtszkeeV6ghEeGBYJesgv378TwAWqLofUtNBagXyLiW5ArQ55RSQnhyS3K2DqJGww28d7Bm4SZxrk4ZnP",
  "key4": "4cDdLudYatFcFv54gQcAzAHKYo2zCXTJyXosUCdQNSMtYTCgbuJDA5rebPh3BmCEuaMBw19ef82kqozKBkgpLXtT",
  "key5": "wbFKsLinDhqNifANcTaRkwfLhGcbE6sAKCcX73DxQ2hTryfKAx1QqeBC41nZ2aUPnHpmQHs2pzrXuC2qbHsYPom",
  "key6": "2RJCfm5t1i4Js5Q5dRxhuNpJpSrFt7f7cVn9smo9o4LD1sJJ3ehfSF4yuWhJ3ZtQW8s97QoRqLmTpFHz6YZmdQ9Y",
  "key7": "STPs6nku1rBhFFP9vz3wPxSVAa9LvwjQJE6YBw4xfsFaa548TLzaSC62uQXbx8k92XwKSa5srinxudBpyBqtwwB",
  "key8": "9QTUJvEhkyvLhRLU7HyMkziRT7KfDq4MEN2168DVvNpSCteaKy3w5oxEmZysojGKSyCNYKNijDfnSzbZu6mtaZW",
  "key9": "48Pfv1eF1ZPXUq7V5kpmSgMF1CscaJUtAu4ar4jDRgnR2VuFse1SRaqoT54DbCCavvAD62YiioKJUCGcVsYS6Gke",
  "key10": "5aqj9Q7PdN7aSjHSZzw5maiEh2ju2wR6kYaasYKj5L6tenf5iLiy9mXfzYBDXfG3xv4CCcurbh9KR3wW5B9xBmFg",
  "key11": "4DF162HnwMFNjajFLtD5aYk2u4PoUcLW1cYGfyXEiNkX9tMx4C1qCqbhXoGnyfJpByXwi94cuEGx4rbnN98154Ld",
  "key12": "PB5EyPu1aEcEkSC1wcSmNC7pR5kcshsZF7vPHtAFC2eENTYEkKpm2XGzmzUS6qtnLk8MCZ6DTGsjAAQWC7XgNbb",
  "key13": "58aJkMadciZW5dRKjLcveRAEyoxDRj6b1LzRgoSWdCBFfYux1zueoTSZ1uN5DmySfbsPmNodQh38wCDzrg5X29j7",
  "key14": "YPtenyxhuvcYNzHtigRXtunSVsf3cm6kJnPAJGiknXvC2zqPUpGkfFPebNUfCSeN1VZpqtmxT1LtiuXQ8SSniey",
  "key15": "2geBSQfTxbqLvqeXcjFiGxEHrNADHmrRHCA5EGw7DH9GwSY9E4E6sFSuWPZ1HTpF7PDD15ysgiRoJBBQ5qLfrCT1",
  "key16": "44QZm3D3zMPqhwprqEX2436MTrnVMaCGnJBoDwMYT3vja9nRRfndofmgHYNgxKY3KVYe22wh1JEk3AVjCnrnsrEV",
  "key17": "iZLmmw64Nv1t7D4xgFiCNCpQjMpptatm29BmjjQHquZzWHmsDe29ENVuURWQuw3g8jr5moPm1KjuQ9E8ryQX5P3",
  "key18": "2sghqfvtVAnopH8w3ZdkuaAQi1zaR8dTr6ypNRV3gLpdqE3kPY419DZJSu9SKrt2Dcw5ihgYFugpT8Ebgkg7jYng",
  "key19": "3pK2PhQXUbqAX7uzDCrsAEKLfVnNXype22GpScjfDivboQigg33Mm9jqUbiSjgFN28mw93hi1H7UgUBieF5Keg7Y",
  "key20": "2txA9RP8b71yZrxv53tkVHNMqjUatT2aGBtjHSMGEUi9xmPqSsGVD3BnM23iD6Z9HzknH9LecPDgfBgWkoACFi8g",
  "key21": "2AMnB4p8pQpGFuKdFSLAo2W9GBp7d8W3wPiWnYPeGaScU97HsEkPWWWue5YDHKXupNVB4BGGpRDzQpfLwSEPbs6u",
  "key22": "q2jM7h4mPkMjNzWuiUDpFo76r5oUZebqZrYyx2b5es1VropE261XvmjzVMSaeDsPmqd7Ftq58QkaZwk8cNDZbAJ",
  "key23": "3E55NfmjK8uPZkMJELjDHazmSwfpReqj8yfkveMiaLQtRQTvAu7efY4r5fArkeooVxnaA8rhAcZPssBzaGeMrXvM",
  "key24": "54so1W6hoLwCGQQYPkSgq8HksToMrQF6FsfpS7iVAcyRreQa6baT8Jecd76ggCoQ9JaKgXWmPZuWxa1Rsq36UhTh",
  "key25": "2tVBzC4XLmjiHXSQTyKD4BimcZL3FFyA8bDNyVW56fUKVniSbR7amfAqQgVjZ1uKe34DNaPSKLx21SgqtnFrrzJY",
  "key26": "5j1fDTVWZQetqrU444MyZF3cA67VKG8FzCb4MReUSifv4Qh2iaxeKyod91fbYPfCCKKHyYTt4WYhU946uZf3SJ7Q",
  "key27": "2RoEvENx3xzawdELVbQqJGDBKLDKawLnc4fm5uDLwbjLvW6tNry6nFBEowhsxy5dKVZ6zu6cNjjFdm59qDdxW8G4",
  "key28": "3JJV5R6e3HdUXLXKSNFvv3M6D9dmisUxFShoYHg9qu6J4foXUw4SGushdUJ9PJGtzqQhjCjX8PLvhFxo5bXMQrKt"
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
