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
    "nSRLA4tjHYWD4vWDhNT7JymXrmEv4bHLD8brqQfGdP76yZAmpxYP7GxzzSEdhwazqEgJCKF7YAkpnxGnFHom517"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yitToMoLt9A4eob5rZBiSk8U9uTU74xhnCUaGYAryiz4tiKvizbasFhGGngECU71dcD5RPZqJNhfDpyNLAtM2eV",
  "key1": "4XAhSKJQSpaiHHvXyVyXTc5XWgjjP44F5o6gbBwvapfkQwDQgsKPFt9seeowm5bcLaSBoC5Y7p6EgRp4en693oiG",
  "key2": "3Lz2UZrzz3Y3XKnrKJZ1AhEWKawdxQ66vZ9EV1pBcWTAXKVmdaPUgrgUBgfnbnkFPoE6cajWqfRwNmQ4SmXcJXxe",
  "key3": "zsmzRqwTGwosbWk1LoNkpx7uVrPRNs8LcpQLHjtxSn42KpzFQpnRPHfd1YNQtfBf24wK8Z3psC2wPxZmopAL7dh",
  "key4": "2CzP8SQirdBEwJGttjnc9wRNMZsNc3h1H6SGDM2VpXaMSkHjQGcEbVY6NDFABHYu9C8bSdq9T9EUuY7Pqdoj2t8n",
  "key5": "4J5ZUso1rdE5B9mFxqXfT6EPzK4Te75XHBJHLN8WuysE8xzBPpCRouuNuxNJatXtRgsbbscGffqGyuH4MEARPErA",
  "key6": "2GFwg8182p8EiakjdaSmM5khAk9Sn9EZeUHAvra1gaDerBMaYkS93o89vn1VdNpY3K1F71hiKJwHpek8Bduiap4W",
  "key7": "P1y6ugoaNz3nmKvdd816sPzn4VgAazdvJ4vLNry78st3SzJ7hxuNyc664tFY9fPawNWm9jjk1uP6G4ynnueERNV",
  "key8": "2NDWYvMcxErxkgNnfqUNQ3TD8xdsrmoE9iXBHQRL4N6sFqRKiJRR5AMMZszA5g8q8XNHVdAxoES3g74oE5GT1Lqx",
  "key9": "2XdoQnkwUR1TXc6KdjETPgbrsb76qR4qRSD87w5ZSDziqRgrkdxXFkr7LQosDzacogD8XZrERM1A12ppoxJtjfBv",
  "key10": "4QQve3jzQSp1uFHSVfmB25KxbmoEWQuRAYjBBDC9tfxgGTCGLjRmVyLu9Cy2GuD2UJ1tFWA9kaQSFgJ6xxrVbsrW",
  "key11": "2JB6s28xmLezkdYom18SKj2Pic2ADj8TBD9Ghton4xwC7uyzTENh2SxYq3DqJSp9oBiz1aaCuvLQwudLexbDuAat",
  "key12": "2fiXtZMfKMmTnLe4ZPVD7xq8yX1miXFzf9APRcAiFBcbqMDXvVQTFcgX4HmhQrZt998Fox1bJBF3s6vek7vddhuk",
  "key13": "NMDt2CVz6VkZGUbUDvs3e1fPJLu6iS9kiRna4ngkipZUU8huckjXHnXpB32kzS3DgxrwgKwoGpSR1QMEULkPcVf",
  "key14": "4dmeGj2dQvc7Hsi6HSZM2pJm2apXQ4mw4wyeknzMjt1enwnkPnMLVszFStzjsVBCN8LzwKcvmJTHjp3uiwah5QAZ",
  "key15": "4BJ3zDuitzrAHG8kBM5NHDdzeTpi6ifwWnDXWhQ7wz62zsecgMKfAv3eBCa5f4pqaF7DLM39MsBLNANk4pyFnBhd",
  "key16": "3wYLd8vLy9SYFgEyipugYzZkHPQrukbLXiuGc3VNnLUDkAFwi2HREb9s9r1Z1daxTtfim2RWjkApW4Nspv716LFE",
  "key17": "5TXXKEcWptHHEUVLvRrwQypsVSC2JmTjQf1EoHtw4PrggSm4hK5VLJSL6YinGUT35DkoYhLBbaCZFCDxjYDD4QP2",
  "key18": "4SpCaetaqkEPSNppeMvu6dEyG5EPupvEaQuumbbSv8aaJEX2yjmtCq8V6B57KZM69JaWKi7A7awMr6ctbqAKaj8h",
  "key19": "53JrVvsQ1iSduCXLkuQSyfGFq7bpsPCaZJQ6SFpLqpNTy3bzUDiRDzbw6qK972Jnh5HfUrCUx9VWkuzkzW48YW21",
  "key20": "4nRhGb1yyeHtKCxB99yRFaZvb5xaQs9564ULsYzJnoE5QebG4zZjLhJtujZKWMr5e87jU8vqGkAyS8E4LekaHcNt",
  "key21": "2A45da9cx4RM9gECy9DvCUy1hsqEeZzc53CjeTCU5Bnsu1EYQaUA5KGYgvvEoqACAVZ7xMmJeUDiA8VacbP3thFb",
  "key22": "4pRj4Y4o1WxQmQiX1BTyWZdoh2mreASXXY5NCrkM6qtXxZKLeBW3BUCwPXqV4nEQAFCzMsZ5jyx8szBS1re29yfr",
  "key23": "4RKeGghgHkXXwBCbRZXJA1HRJGY9doNPM7wgySZahw57dvvsXBxTyfU6ACEytDFqFdwj3YiLKRm6xuZsd4jvcUnP",
  "key24": "ucYzaCkK8r1gyRAKLmeywmw9DwiYWAyTksJhPKfws7icJHSng9tf9mJy3B6Y5Z2WzAp8eZaspasgxtUpZNrFUJx",
  "key25": "2BQ3fXXNknxPABgs6TdRMpDjZPt6VdzTpKWRsXgAYgbmtKT9P4P57FFiCo1rnPwFMCzkQuDGrUEFPDahEoDpEU2v",
  "key26": "4A2Qxe2GreMAuNjatdLQueMViwwD1ibNUdpoJekgBfSa3y8Fu7jTpCn4JNBHT2vCMNN24MrFeyVNqNz8A7k4PQEw",
  "key27": "2ZwygVCq2Q7VgNETLkrcNkM2NEdkmmhE2zJadGPgueK2Lvu3wVWo1N1tWzm9kup7p3PgRJJnA1nDwCAFm6s2FmP4",
  "key28": "335sZ7tGEB3DJPV1wtzwH9ve4XHcLub3JZiaqAeECWU3PnQi3qPmB6f2RCCNZ6uQesPsTZMredAbtV85j83bPo3R",
  "key29": "4en2YCcNc1E9mPyo7KxjHwSTXnJpziKRUVz6KbjL9mEaUj5hXytj1Dqmdq7jy2GQ6VM1ssS1LxUjuYMoVYyDRieG",
  "key30": "3TpTRaFCP8pUuxGrRLeAYHLCvHKxcXE9yYELzVcP9rFPvuor5MwCAWLANzPHQLQtr3K4s28TV76YMYYUTakXXU4Q",
  "key31": "1kxSEoAiNrzhMQRGmasdVHBKnLopQLaemuojCT5TqKnRqXzK3prRmVm1ZspnrQqJVPnBUJYENX3d7JqfZTnLsz4",
  "key32": "66udgDHzA8EyRqjBjgKrLYpBQPAeP1rwJ3yV8s4uddAaM6BHC16LfzQVLH1Vy3SBMdopQtaTkeKbdrFhb9gyVitN",
  "key33": "he2LeJBAgbd9rgy3S6uT4TyxxbPHaC3FPTmacKYC4cLYd9TQLgYrz5PpPE7UPLgMCgVYjxPvmQFiBkf61DkWzm6",
  "key34": "25BKG4bkudhmhdurdH15Q9kSTvzWvZQ4uxVoiREudnRns2W6MV5dX58vjT9Ye5Vf3u33JJPUuypWPe5b7VVenGt9",
  "key35": "2RPopjzBGKwnqNxKHqXmMxMsLzaRP4PzQ47JwPtzaytN1etFpcWvDqtzPYNuhLsxexChJEvdNjiPWbCDEaipSTNY",
  "key36": "4P5t9TE7Ut1ZLkkyJvftUxuvEzFekccsiRE15VmwxWXRjPvNja4EJqQ33KDFixFV1y11sky6k2xi8aQ1bPHAwvk9",
  "key37": "4KowLpf3zEVh6Rc5EQBzk1c2HGAuU3wssUjwm1NXC2X1Nsh81snjn7RapyPwCVLS7hAzYDe3gjCswr4wDyMeAvrn",
  "key38": "4sBk1tZqeEAfyk4gFRuA5ximDzefUHWixSWAENjMZLBqrC6fBsRde6P1xk9nu15US4pzWBSVxVUNzAWaz5cxSaLg",
  "key39": "3UE8oxp2ecJxaKXSw6UimoiUaNDeP82jwMXYPDma5ZYwaxKD6BQkEAErgBRSYNJRzC1BsSmTpynjzmr2RNbhxGGm",
  "key40": "251K4nWXC61Z5pyJh9RihUPvTbeNEsDxRy3fbDGDsihMPR5vbP2nEmCn5CgLFu3K5hRZ8NtDGr3yGY3BDWbsnFbv",
  "key41": "21LFRFhkLsvRBbavX9aC3F6TAMeK9mrBdTY7d8smSKVrfUbYuTZ6LtVQW2nxvLjDbC6yohNPPyziF2sYRgTE2yfe",
  "key42": "iLw3ogdX3LYCJtjjJq66LuRcFTquPWmyNF2jr5yFbJZ22uQDeEAuVXCG34zk4HCKi8xSGEdefb53FKd2kRY6SFT",
  "key43": "2sHSXCwrbu2A9GEABSNXdXwk3ACv1Gf3Sij8CU3QJsiARNtKtVrU4SRpQNfxpY3ZFSY3hU41m63R5py8QG3YnM8C",
  "key44": "4MtaZgJ1jBRzuGayM2oPcaKzumeLqa6TAtLyqndJvqVWFDww7tHU4Z8TgEw3GsSrprVZqmJx8fLphsKq3o9hnR9R",
  "key45": "voYcdWFwNFADxqRqctiwqwM9Av6qEhdGv45Dgx4YWSu7Z2sVUsUPKzS1CwadfH7GDQtUYEvExAS8AjG6LPwXuWH",
  "key46": "RuqHrCnRHbzBtHKQpnQ4E8WumUwbLpv8E1wS3CwFo42FYXEqAsxBm5ixDXvwDmiekDBNr9BX9XtUmavrkZYdXK1"
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
