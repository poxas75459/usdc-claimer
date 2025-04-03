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
    "5xdujiNjCDYpk9WhzoSXMCmCKep3vUby6J93UmBiiwiv3xMLFx9oo5VuRQJsN8vsxxnf5k7Y7eANZKcAYbtgYy7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48wjtDNnUnU4q2R5WEGTunPYpDJC2PjD4z3v82pz58PzP4MsBTkA5dyaHPu8K1hHc9xHXCexVk5QeiPUH3PyfRx6",
  "key1": "RsQAyZRDcmZ2UMPstVPiYesN6zX38WyCweB4rdKDmiVLKjXokSrFD6hYnkyhB1FVri67PDhWBaYwgiB1C73dcqz",
  "key2": "2uVvSuyYELaHa68sngMRTf8AF1HRUrogckN3UgiyoEfBiGvq7oTtz9vYEWF9DJySLJAwNNrihds5og1qUwhc585n",
  "key3": "XuEg8Ecrc6bt3Lk8sVxrMiZTNhgzBQUTxhH3VuF2n43nr4a9nkhDbSjzSFEVsZgtUuwnPtUtZNaejG6wpmGa2ww",
  "key4": "5GuVTkhxqt4sTeNySg9uXMaNGdr14j125w4K4DV9S3aDAgU65jkEiQUUv7Hofkau4bJtV4k17pXvSYqHTVpTV3S6",
  "key5": "fHfqmPdyQEVhjXtNRYGwxGk8HXxCs1HGWm5M3t4oL29GbhsVVXVUPe2jwWkKXqqHxCngzLZW8oaMuLxoCsxRzhE",
  "key6": "3vt5rrtVePBk7hV7PGWpsB4DbuSmqxPGSvNS2BCTKXbjnUb1NYva2Hh8DAWxBcY5cmzk4NB7Y7ppEocz9JwPtV3J",
  "key7": "2ehCa3WLSJGh4GCmCWzTDiMAdAJ6Vr7x81NzPZtdqrpmEkrKM4AnqYqZmPePPUte7UBedhVaeF9PhVqeKmvoALS6",
  "key8": "n5uGpVz9vPkrLmmQqEZR9WXUQFkzD2hTKxbCMy6bkME8jd2Hn9GSPJKaAg92vHEP9qPPuJrnhUa625qXwUEk9AW",
  "key9": "3915yHGifSkXFTxAAqUJjVxAQfZvvGGMFxgHWYcZ8JmmbUShrx7dZ8DBqGZjen88pCNYYKgY2kQ39Zi9v8eCmVGQ",
  "key10": "34JTQsms25socj4NimNAoEbR4xQAuSCoQ9tdpPPZD8rMhF4BskoLbbdzpoCjU7ZCiJiQX1gYZzNEp9pDDKCzEGET",
  "key11": "4yn7gzqtjHBgjfosf436AcScuyGjKDrWWiqzJpVgpSLfNjrtXWuHVCZ5mGLxBTFg54ALTMwtZzpLWHK7fpyt9aJs",
  "key12": "5kwjwYzPv6Um3cjHAfzUbBsnMUbNc7aMiDFBoUSYBZv4yzqAFSwMM5uhXFhi2UyvU68ikfmyWUJ2MpPLoqrRaaEy",
  "key13": "4UcHB3LQ3qsPssVYcpHd7HYAowzsG1vUvmXLcWS8D24APPRVDJruPy8Ud8uE8jTpDJ8CTeJ8WAwiSDGNwnWLXE2k",
  "key14": "3t1DgaGLDmcEkE1BWZrNZeNyz9YGySW7dxCshQ12TdQQQp5B8e3zUpYXn5EwTf7hYM6Khs5KMbRsHYYkLzR6BEn8",
  "key15": "3KdnaCYk1oGLNnLqg1zNNJ5EMhstJFDsDdPXvcqhESQANtY7jvrm1Fq2cTzaXu4DufGJW9Uv9gnBmGG37ri1b4sm",
  "key16": "xZ1mveZvRPsVvJ4cruP5V8TZQD8jdNTJwg4fS6fVq8ggzeqDvh2t7pEgPSt7k6NaGde1n6jzDqbAu61xCAjfw1G",
  "key17": "2BgA199Ah8h17pKYjUVsdqnUXtckDg4uYcw2gG9iXxkiCr29q7ok6eqpA9sXtXizmdV6if6a4H1mv6whgqiq6Miv",
  "key18": "47eY25WKDW92a3pKDveFPQ2ZZ3XXb4WDwtpXxdTpNJuxXPQCffMEqM3z7eWV4xMovYPcSGkcxM2ZKLbQmpeiquNX",
  "key19": "4fFw7oUMLt6tZUGUXrwz9nehtbzjBGfx8zw19qhKzM4GGcxaWWeEN8yCwcytjSB9fVaQuC1iQme8mp2dA1C2gg3m",
  "key20": "cxiCwV63PVrMAYep2bZW2hbCB4A65Dz2Yirf5Y4hQKUPnvzDfGk8HGv9JYi3HFq4MsaGwrFy1qCczVcS48F24Dd",
  "key21": "2wRPVVC9nvXwK5VFAhsZiKaifxBHMDs89MbUH2nq6iRfGCz2CzFeKAHSZL8ppUZsu2fjv51VPChtfow2HEm5gmhv",
  "key22": "2YAzg19cHaFmqtCLtZHLN2h1yXayif9agyXTmebiimK63cei1UggQPS6kVybgJ1ZbRxZTTvbkBp5haUm3bJtwXoD",
  "key23": "RhMGHQFFVEH5kwxuxaWuf5r7fiM5z6HqcBo8xWWwc8vJbJoxA68v8uoh91ZpGFKZttZCvxJMfCdp43ZYc8Smeqe",
  "key24": "2fQysnzKP3jxgoXYcLPHjC83d8E96L6u1ZVSCoZyY3TotEoLAU5mthVTuQ1pAQaYHotfae4CakVEM8ricPKEehi5",
  "key25": "3TCckmGeSKRtT8WsCP6gV4Ao59yJmqdFNtTsGUnn5rVyoraVP7vzhg8YFUvCNKRXyui5RNXAkE3jLaXW3L9MKeAQ",
  "key26": "4kujAbtnX6QG8epwT1bedyVJNMckm9KYbaPpjLbjM2EBLzUxrWGB7GH3EJuZxs2GySEyVc3phvCtAhviYPBap8m6",
  "key27": "4ZLGST38ZuFjiSHCEmJRphsRijPHtZMYgohS872PVjGBU2Ns4eEkooewrTwXByEgUj5krEJ9rHxZvLQaZ9bfNq1",
  "key28": "4b3jnp9ENQqAL7txsbfj8zdY1g5RkyKxfVcZ1Y7Ji3brbgbkUUKti5D769zKo4wMhbh8WwLpU7gNsAvzShBdKJRP",
  "key29": "2NNsNm8eD31bfRd4MkeRf5YtCp4Eraf2ipHC5zd3b8yCzANBupYcKycF3uJcUY2GdPdqgYcahPXe7a4YgvzgCAin",
  "key30": "8TkkKkYFYHwfmhZtg6qxDdBrrWDqMnW2igMUSN8SHryZXwbKf431pNUvAMsxnnswChHYxuhfvBtfJXDY6kq6Wmt",
  "key31": "MszRuT1525aH4Lzrk8gHGLZ5hBkKq7wsW1aSuJhTT1ntSW1gPMukSgTYBSkiNXGLS8Zsf5wUPS8QzLB6LWBqidw",
  "key32": "3o3WgzNWQSJ57rjEgSrRPXXSV4tHCcM9UwuqWxgRFej8FxrjbtcYbPJzXSKPFCLGRE6XkkBapXyGqch3cHhdFhAj",
  "key33": "3rifnJrXwWSdPQgx21wCyNiLKGgNhe8oqZmwuJtjvmb3YDmCRsnLKfwDHWd1uvE3rLz5hmXzAyXnroKWVD5GYhRZ",
  "key34": "5rPVkgS3dNLRxQjgrQWJDobuNHxcsGszfRhTruKM4yecdejL46SWxeTUPTbSgWRSxcah2dYgiYkzZXhQCeQTyX5M",
  "key35": "2D7CqNJD2jSPwi6f2ki92SonxcaKDW6WKP7im2M8cJ1A8gvbLtJdXBVBhe2f8jWiiFqkutJppDhkhBerC46jvzT7",
  "key36": "4NtDZFnxsBsfFA12PYa9qSEKauVTMamGKpa7zJLLMRZ8zMG3XD6RJvoEsN3ZW2sdsmmhzXF3JwuZA2toDSaSbUNy",
  "key37": "5Qd2ZFPgFiVWBzZd8qxPyDGzqDiMCpP8kKroPCJsiaBaYGtqUyM8ptRxMe6AB8nhn721UpHs7FtquaCehP2F5vfQ",
  "key38": "uDariMG1USyxr6J9M4th4XyJHt86wPq6cWDBUe5AtgsqYR48U1394YQJ8XUmkT1T1SzpeUh2y6oVno4WBMBhQ63",
  "key39": "22e25nXDPXsZQ8cGe5uEtVPMPoHPUdm6p6dY6NCsQiutkvmi14V7tWnRqk7g74BmmnkDNJ8mcaa56L5Ds2dFZPAz",
  "key40": "4XccqrESK2tQZHuDVyjsy7DbocHRnwEKzAGexXKVx6WB57AEn49ZueDDPHT36YDmGHksavMTbZN5sdzuB2e782Ak",
  "key41": "4SVFBoZ4NLzdbPvpcn7MdAg4r4vFkAL6FE4oWnmLYama5qPpvtSujdRjvL6BsuywCFURpKeeP8BW3YzZHQ3rYupj",
  "key42": "3mvU3K7vusE29P4wsUs44Am3Ep8ErnXMcDijRnqUziXdxMMKSnKLenER5ZL3DpDxCr4qikqELpVsoLjnaQR5BdLL",
  "key43": "mkzjePCXvUFBJUYyVnH5fY2P39xzwKTDB4MALcfgCvif658Uz9FJ4XJ5JpXthGzwGHUyY6ToKg7Xz3jX4kv8aeJ",
  "key44": "5WLZenRkyxviCsDv7BP3PtUnhq7keh4pMr1xrcjbysHbL1uxJZScLAGT5ABnSg3q8hxqJAn3VUp2C47FpCLNhcKQ",
  "key45": "2wywVjig6w1BonJCCEycjoy4cTDZNQyoy1snFQ6JU1LdQTokas1j57ACaeZRjPBM3mwsTgNUSknhcHvFNPHvMNqE",
  "key46": "2SbH29q8od6pFzjqpGLUc9uAQWXYKEFcu8ivzTwT26gCYKWxRpr73Ceaa1P3L8m8a9NPRD7gKfHpd6XyVhrcvwX9"
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
