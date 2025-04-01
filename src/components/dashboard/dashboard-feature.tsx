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
    "nJMAF2qw6aS35xVXNYLGF7AUGQFoSSiuucLmmQw7ZJV66dM4kVJKksuFY1VzMYiXU3JaiRNam9CR62mDFgBHyBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGayJdLUQYDVc2ioezEjJ7AU7im9AiJAjauNJ7adpTGgWpfzFobmfLuzUeJxaiWHbZaKLsxo4ZJQgF2TF9y8HQG",
  "key1": "4VfzR5VbZ9GerCmD6Bb1FBCJvADPehRpQqgc9jb3XrRabuq7J3MKMzKaDwcT6vkxiNFK53bs7T9LCRzBTbQVzbLC",
  "key2": "urcvEWzMAGfzEMRQhWgbF35ihgfGGakZ93P43H7QPt6fD6aTaNsTyKRZRvcGfjnYQwTVaWL3AThwmQyphkjcRvu",
  "key3": "5Cbwx7S6jNoensnm7AWR3rKa5oJk6TWk6yNss1nL9qcXRJaNRb4euEkCphnDgEcFZ5t6jx3uEbirZT2ZaKdJGKxo",
  "key4": "nCfKiJNXXddbwfP2J5h6THNbyah96FpmKsk3gXRk4pURHiQr9Jx9Ywv1zS1vhRmGWq1DRgZbVUfcAsLrba3XvH2",
  "key5": "TFqEJw1ESB9rgPW8qQTVFdQEChUt4uH98vA9o4rUvkxMSNzXe1Es1QwU8BZXrzFmsm1E2TqmNB1CnQQ2AXouY51",
  "key6": "3aBYEsqm2udCtTnaVsvfrxABGfw9EZqdoNGLQagz5p8vTkNqTGwBkQzxZg2k5ojU7GQJstz8wET7Wm5gZanhW5LQ",
  "key7": "4V2ufp5YXv7ZHw1m1HxGQmkmjLeB9tRsYyLbwNEepXnfzyBKfP8zByR3BSVS99CS5r6RrmRHQbJxE2wAJ6AVdjLN",
  "key8": "2uYG626A3m3zbD67YJrnZxyZNSL5ctMfFFPku6SCZszUepD1GdorLz7qGyZcUPncDGEVbEroiLfgwtb55QydGJtC",
  "key9": "tErPoH9j6VfEG2dTTHPon5QiCasvLGjTX8DVwyYs8ZhhnL2tmLPg14cHaGK42tqfRJmNmvkgWG75eB6dE9dyrS3",
  "key10": "61uL3Ad3HUHz3vxoREj7xR3VQskoNCNudbEgZSWuJFxMenDycuYgRMAFoAD7EXzEc7Y5G9XMjbSprQfqCykd4mmY",
  "key11": "4kmugCU94spkAXPLnto76t3FCJZghZUvCcPLSwkuFevmNXNEqnZfhrGweskHny4tbjLEaiPaMD7znUUUbAz2g55i",
  "key12": "4rUBJFU5qZWvGTyWe6fNU3XkevETmyBKtiiuLa5Vf2jLVTD7E6CGmuesQyLfjK2TvErW6PNF5MYV14CFwjaoPtLm",
  "key13": "fZopLUEZbcshBr7jHssb73hXTSMvnJAeDxP4hA2QjX76RKt6kztUXn8aRGLtSSsHECo7yL3cDGDShbRBRc6ahgL",
  "key14": "3oBBx4CAqGXsAMj1LbsB8g5BVEA9npx75pVY4jtENZysBx3kYZkwrkyA62G51kAsXLKtZ7yZi3xhRy3gNc6sohxr",
  "key15": "5ghQ5veHGDhc3Xb6dCvSd1UDwbGZ8UdN28YxXKbg5uZ2UWKsnKdmsL7vSGB85C3sMoTYRgqEN7bfHzj1UiiNHbKv",
  "key16": "5NRhnvg6D8qJ9WgzycnsmaHCbxmS5fVsGFnpfZRH4SEYMEWyokbu59yVWj7MW9oGZHzSAg6b5L1gs6g2cD5SdUAp",
  "key17": "6553ePfN5jSoFbQ3z65vdtDDiYTS1PASHWdBocZqJfmrS9CmNa1qY7RA8jtAcDuA7g5rfUh7y383g3FRcHoucN2h",
  "key18": "2cUEa2AAMhEc9xGa2jA6GVtwHPdx1jNqnMpeuEC2bWLJmkeBvkr1rgtreH3jhqkMrpskogwq23e6zXYWePLiXpiP",
  "key19": "2tvbC9cbcdyxmpgHiYqvttKjv13LJK1qBkfPG6bPxV2f5XbFDvE7hfPS87wgZVDikQafRBX59XhyB3aTgGnn5VaW",
  "key20": "uUyn1RvyWeeo7z4obyhk7PujJ7XkSFRE28rnbpD1QoLT1Dir3YphdPjhE2tVGvDrh96C1WoBRKMh9iZJ9N9xzjP",
  "key21": "5E7k7XFknN7uWKLcq3NqcKcghmJ7yB8EbYbZkWw99h5hbDyGFdfBi6pdfawam7zSfUPLt2BxfhP3u1BJUkEJayJC",
  "key22": "43JjqLRgdkjFr4EP1Kpv7XYfVvtyDxAGEK7rPN56c6QSvHraz9LRSdXqi7qqehN7S8kBhgBeWK5ewZ5SUBrjeepY",
  "key23": "2rVNiF9nFDWTrPDzBqAEr36ibbBHSYKr8hxW55tCDfTr6ezKm4r3Ey8VgWHNYDaxbQvjeVoJ3T3WZdvE87DyVEvf",
  "key24": "3Qx3FqHWSjuney66Wi8GP6FZxHNv57qbaLVPU6VJkgYzpdhxvzq55VZd8Yerk676opdXDsqWjpCkmFbEabccqkaY",
  "key25": "5CpdX9QfYkkgYj7eqChkEg6jDXoqfCD5PCbF9tekhi14yEZmTEVE2a55LXRgEGwY6GWwFsHN7SbzyKgtpVFRuAoh",
  "key26": "2wEBXx23uhSfZCWS1HvVUhYzmEtu4CdUEYNDzFTADgsKgNjc3NsdxNDjLYZpT6nDkAkFBwug3z9XDjUhDRY5LXD3",
  "key27": "3vEi9J6ibkRgjrqq38Q53agxxZiQ9pBz9y8WbkxRPQhhJGMSSv17uejmBnFPU2HsvebaJzPZp7anTviPPXsyxZuu",
  "key28": "5AKgkdsfiikG3SufkBQWTnY63JFdjQ4vKFgExtnJsgmoHdjThGq8HhQCttBZBTwCpFXmxQbYnQX6UuFBDBUW5RXK",
  "key29": "o5WFQSCKW8Mj5dRDUvviMMFL7JxtJtxmhLUhdrJHcjgQiHCtVskNRpWHf5yCSf6zb6X7D3BjRjUA11PKTo8x9tU",
  "key30": "2SRfykg2xZoHmLWHWZzrpZBCX3cLLRWwLWThoqV8w26AD2hvZusWEEiQUcMrbo4LG6dUBLtuJ59RFJomfDAjQyfy",
  "key31": "2fNC7KCWoxQZ9afmzHJv29zmPTUjrH2dEceNFzaU3amTRGZPYizNSEnniAjTBW2SJ8NtYWe8yegknA26xtdg1guT",
  "key32": "rSa8xn3tWXMuKFvwePUR5JGjw4GLwUZTneT6j6zAcmYfrkxv5zLFf2wgh3Hbbrvwspg9KVKroyJzRt9iMMVTX2Q",
  "key33": "4CHyfZeFkdECA4bx6EvigVkaTTdXDU1atfKbgYch9Xt76coUsBf9XqM7rL1hyWiuCXtYmK3dFCZP3piC1fjnr5jK",
  "key34": "bZstMeXvZTQPpeLoBkRSki6CGkuYJzYE1FdqCLfA4X9Uh9haSPoKivinLbRA2ciSve2pJb5jEhVVfAjA4bHMCs1",
  "key35": "5qE8Vgy7yJheYJcjtiGeHrQAvSXPeTMnJppeMuKH3k5JnERpvqsdLufqkkNdkYnE6XaetbfZtowgF2S6zFJusAxt",
  "key36": "4ADAT287C8DjpDthjbdpZBrcDPNgYAug1Pg9RNZFvi5XpKySGJ1X5V6WGPgG5DGMNAjuQh4PeKKv3JxFCWf7hnBL",
  "key37": "3NyLaKgkWVskWc9eGxWLsi7M5N97kLUhCa9t1vHPPNac856WB8XRLknXC55zE4oB8LbeRyJMgCd8QxfZBtT1vE6s",
  "key38": "2uYrf3hbdNGeJTqX3zdtyxjV3nZwL3JZfuECpbdkjFfDfYV1vBSxxGBJjLXgvhRAjc4YUyf4couRXYzjVWA13AFo",
  "key39": "WEqzDMai75cwgNxMjbeSXkWXt9vNhVyBzD5kjLfA3D8ztDm3Y5W18nQJqTjhmcLomprSrAwRq59kq5QWhyK5pcA",
  "key40": "21yfCEKV1MkYNEr52uJUdqHXAfKbY6SvM1dFUQHDaFDax1PT32WY1TM9uFUuzX24RYsGd82n7c3nGJAkuTxQgzqM",
  "key41": "5j3CtubHt6M5F6nihTVBmUuV9JhYPfHbwBvPKzqWvaj94uZ1u6yfVTeH645C7CEnReqnHfHabtm5xJzqWQ9kCGmt",
  "key42": "5KzXDMXKa8G7QENemHHd3dNE2z5CpCs57dmcqRyPso9pmgw23o5yv5DLFhwND8s6caGTb8oZsjBBV5CX5v4BfhL4",
  "key43": "2EtzU4UwaKmESkM427Qjrzu6GiBHZ4QYoKHcDwDpnRexwDwWCCouffy8UZi6vrj65bCT6LvsDVr8qU1f1eq9CJ8f",
  "key44": "5kWe84DJzrhvFyffnmhe8VKE6tZvz1dPFB9xXmzj5WJMXLK774J4gBcfDewaBE44DzqXnqxE5Ej3GuGYPPcwMmhX",
  "key45": "2VJ1vmis9w3npAFPF19DGFBsdNQFYMYGsNPdm9y4fX3teQ1oJbPxuihCNWBPwwgdd8yqh8RnDQiyt7YW9jX8t1ua"
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
