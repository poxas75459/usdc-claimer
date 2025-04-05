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
    "44e8fsjjAkNrp8366Le8D1FJN9mC7jTbwZP3J2HiFwBkeUyjRDyhmTuAxzoPc6ypuDYvVP48p4pge5C5zQMCYCSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oZkybN5eAhwZF5VV8EbraCcL3A8f6RADEeiS2ySoGEzzjaAEfgGEuJYsaQLdSqdvZ42ShPoU5SXLJsGu14o8wqc",
  "key1": "5sz4PrfnLwLa1DiVy9r4VuX2ZXH8UttzSYu6UmoidGQeZC1MmCtp73ykXtkZE7hZjEjSDkP3zCS3yzPfgUyJBgLF",
  "key2": "HNZrtmD5dfbxmCH9qr1DDcPe2BJ1QUWiTRZJ5nZwTL5gZrrZdbY1LkPaY2AcTZVM2EgipJSnV4ySkB74BxoxvNg",
  "key3": "4nVAxPaPsCjCyKPA26w4iuaEPmEMNdRywkJNshNoEQYr9HHbeQY1FJf6ra7HYHih8tvo2tERMtGQdPGKJJpcjEc8",
  "key4": "2eHRTxxiPNLyHch8Myq5pUMeD5hujiViVyAoWw5cLudh1fbDUmfra6uhWdGzC7BgbGDuFXMzyCCEcLUaKv2iVVbS",
  "key5": "3V6YQSZauhWBEJQFk1y9B9ovh9a4gQ3oQezj887pz73Xtozp83K2dG634bvsGavd1WXMePuBs387hjLjLqf8vkiu",
  "key6": "PsPobkgRPTUikrHNdFjmfUnyG6QnNcQ83j7h63gFDatuhRsUsCvqjR75Ynsux61PenPPcALnBrPVvJENqsXKYGv",
  "key7": "3PpBcDiQaujmCHXDiiqd9ZF9iC5M17uUqvVG8QWEf4g7KRrHinPbz6amQPY9DNsKVBMSPAjT9Zre46b6mo3pNE3B",
  "key8": "5wqox9vBEoJoEgekq56NVkv6KdFo751VGXAiM97KZKafcyqxK8dwGn8jGPtcbakqKCB34kn9Am1yjv5fzy9oZQ5X",
  "key9": "58k1VU7NBrRSJFr2EVbZHrbERsxKbNZoLxQ6nJToqAFdKbuqjuXV3oaGB4Z4FbpSyK44SSRQjtjDRBm2BT4rNMgh",
  "key10": "27iocExCNw8vHFsqRv497WfL4ixbjAv4N7nidJRgcq4JanzGWAdmPTEmKkwQRMNRgPxxZB5TX2r69oENKHwBpqRC",
  "key11": "4izQ3P72xGijbxyTWhc352bQ65TjrGkdiQYCHnNv7rsEzF5UThhv91SLT2GQS7NxDxfunhmkG3HDmCwegEhxMK7w",
  "key12": "JYqpmd4ArjPpk6zNk2yznFKgH9PMRkLVYjsPqToMPs7FyS295fi2GuRTqfA4NvYYFegyGnyvScFRsvrrJtKe1C7",
  "key13": "4T6w3h1iG5XQefbEvBN92YyvRoqnK8Dk1bYq5NHtgmUEnbT4b6NPdS9yvBfBmuCkAAeZumYzcKGM7GzukZCQMz3a",
  "key14": "3USrVLggEejbAXRDJ8MvPwHMG8vPtwtwTtKS4zjSApvPidUd54x4KPp4RpVCfkvrEc3Cr82TzikEPUG6XH2dyYUa",
  "key15": "2wuySYXXF6LUVvsUeX3tUX6yF9QRGNw2bcra4JcVEEzpsYNcpjMD71bsChW5377Cru9jJZg2T8sZ9wGQiKuH4NUF",
  "key16": "5NXBMe8dGqn8WzxVNuRXKjXFcLjgFeykQw9r3VE6JqkrM1Rwz3C2aninNaY8LFfyDJutY51HznfGxmfdQfpCqF3Z",
  "key17": "5Arx4mJYYUzNko1NiL7UzfxfadGssirKwhmoszhTxbR9sWDhcsTvazbufAVgEyfg1ZTofrhCnsSJM2nXrfZGCYGT",
  "key18": "2jBhRbahvytitZZgPfmaPQ6EgFuKQTksbUDCTRxVYAhxkgZGcoSnfpH731YrSWW94TM8KfrgpZq43cXGzkqd1qFL",
  "key19": "2Q8dbycCeKWJsiJ3A4qovjzujwA7Pc5JwBFoyWRZQohC8ZX74kaAX3xok6iartfgz2mUiKjx3pceFpDETBsJFVEF",
  "key20": "4UA14doZWWUmiYyezrbWReWhEWBunKoxJc5XUdtiwAwsUsRivASeMnA9uLLSv7zbXsDq2KwUpVD8jRm6zqhFWiJD",
  "key21": "2VddgXAoSBctJVHzEJKQjnjWwdmSG5WDEFtGfRTfRFa7gHjBQHccRKunnUtg7UsmE9EEhULNYQpy1nFVxBxpixhY",
  "key22": "4uxfYMmtx22RzXP3e4ifm9jL5KTMdnQUHW2e4QX5PzDeimwcb37KEx8adxWJkusMVv4mVL54NDttXnEpmE2Jug52",
  "key23": "6JtLKdZdDjTkN2jGKW9TRJcCREm2DLMpZSDWfPez9BoZps3a8zjspJwK8T7AFUCfwLP5cXaXMjPPA3NgfMATEd2",
  "key24": "5Fniu2NuHs5mWmsR396wFdQWZtx38KaypxrxGm8Z1Qx34TAJPTpWG6naJiNPX1vVZw2imp9LRZeuNrzvHaGbiHnx",
  "key25": "3rdrjUMd5xatumwB9nM2xkobqwwsd51t8sFCgDmxojKUYBH5E82mvfoZm6pbg39Y2y3FxjcUEuFThp7z1zd98taJ",
  "key26": "3GKnaUTu8gnwfxWJ4Np9VAFwsQihiSXqqrHdApmrvS9DeSDBs2QgpzU92m9wThrnfizP3cMnzYmhZUqB5jnKK6Lg",
  "key27": "5sfW1SP5PW1pRgiN4RDBe4dzoAoiq1xJmM94ztiX6wzazgLQ5M8Vbmro6McvfvUK1TArJiYhE5Uq3gxHLW1ShekB",
  "key28": "2WZTVynbocg2BBbyggtVCmr7Y336YE5rSTsamWnQek4dRgU6UzUHqgFpwe4NAFtSJZQfJZtrtNZ9Yfy6oiMnrVe",
  "key29": "4YkSKmtMWB9NwVdgyWMiMKN6xuPsa41ZAuoyqed5ZfaAgPS3YYfsmx7dKBQ9oGBsdZaYrjQHQcyUmGbXVk3YTTzX",
  "key30": "44Lww1cRxKA6K7wBKtvNx5HnaqbUf1mSk4j7RjEdnc5CT25YHzCBpBTerasq5irNspKKdSqKdczqkZk336bvbQyH",
  "key31": "5d5EuNfDip7EVe7p1u1mpkF5uwMGPDhd92YwrUR6ExGagvoMZXQdTCGuEzpM96KiyrAo5RixXEUkqjsE74rWbdEd",
  "key32": "3r9UfXdtGXqKLvApUZMhnn4mBy5oYrvWDnzPMrbYBT2F1jxcRhqG5Tyh9ff8Eu48wh8jAEd1bgXNTSKcpZ9BVoz8",
  "key33": "BdgZecNKRn9rxBTLB2UeCkdxTGVaKXy8ffU6aX5bnCSgQ7G452NpLysVjDvziY9yeL98ph8YGopEAY4o7zN8wwT",
  "key34": "3JrxLqzSQNFx1oLCXhpZzDP6j8N3U5urvnRAfMfvyNmC5Y18H3QkgoTfZSvd9Ebt7wkmGtdTNT3Tu5EY6z8vUFhG",
  "key35": "4WBKw8Rj8wkMsqAenSNQ8kxAgp3JPoButKNnY7U4a5uNvF2CtqvtgP8XaUZtq3mzfJPKDJtvS6KhNevcwUPX32Qj",
  "key36": "3uEuuGTm4YMS95hKYL5iyUWiSVe4mVMp3oDXEbLsLEhKBozM3iDRdYjFf3A8GUPEmvDyHdKLqJ4vuk4DebcB5KAq",
  "key37": "49WEpyssXc5KS2GEZrSDZw1u32LywYTTUWqZ4i76R7PXQxpN9qeP4Cq5WBPBNnw2SJbNULjByQpMZqHduTbQFUxt",
  "key38": "3Yqwa1kzf1ZWU73WnxrFeQguGgCRHLBicEj7W9BJ7t7qHu66NUFY3ncFjT9AeMfHj2txtegGxLaXbbaWRGoUSD9v",
  "key39": "5UorSzHA6ZGh7dgcKLAYa1sgcRoXtUFgZQJEo37j1kXxLKjYxk9fzXQNhPR9Hfe9xmoMtGD5vFFmyiA85sJMmV2D",
  "key40": "4G1pFgE5Hkf3DkgSmWXZYm5r9wohUbysq5ud2MkPxDmEBftNHysm2iXHmHYKfKQxW2zPkjUd2j6Vf4et3joiQ9bP",
  "key41": "2p4HTwC9ZQsDjdWzhoiqHTwix4HWNgttuwmks4y6LMB6ULQjktc6VzC2DuWJvDsR5Lbs2dgonzxnkmCaZ8en3rkU"
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
