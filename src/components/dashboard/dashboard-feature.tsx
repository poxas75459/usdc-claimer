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
    "4uGuCHdgVXktdE2QUxAa9qzeKVNiwom1ttZTrDePZjXyrRgjvQj4HREQQTSUt9it8Aeg4BEb4f2M9vKKBBFWckC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDPTuJnRToJ99ggNUmGeyrKpkWrLFiiY8gvKraGquKsrNX3HrRHUucLddAogDBQqZeBor4aNFEeVbTWGtSVMEQ9",
  "key1": "5MAEhvTNG8VtWurn3e4KBDab3wmcETtonnDq88utFzoa2YNw1u8h7dQVexZPt6Hp3fPWZ6dT7BowCgnW6qVhoNSH",
  "key2": "45PVQZ5MNhzoheTvHfmUeWEnFPZmYqEdP3Eth12RpEAFJdaywJrz63AyWMzVrkqgH8kVnNExM8mxaWx5DP9d3Bje",
  "key3": "4hcwGEcu4ZfHUD7RDZPV5e5iV1LeFAshNJ8Tb621WGXk4haxNQKaKNpYYEQwG5BAyExvkKr36geEDw65fX53Fkqu",
  "key4": "55fgf1hhWogj4FxtawDCq7aQGTbKTWJHhsEecmPMPfW2TJEFQsxy5KuEGzFJGEaJ1y6bJNkXBAYgGeTdm3o6m2Sm",
  "key5": "3tNgSvX9zF2BvyYJATBsjtuKRpQmeAngJaiJFVwmdhCfwkFhgy52ScXpRz8M4fEWGHSGbFdyNtusKfrgxpiXUjZ7",
  "key6": "4siFFXDqqvmhmS1dUxYpJnnnjBF7EfpP2LZEjS8RqEkvHAGKuYgLSY17jQ4JEbjH8Cz9pypgKTSD6u6VKUg2NrdJ",
  "key7": "3bNwskvVedpVkvbcsBxG4J2B7KDv6MpbY9rpTUbN9m168oMxsShDrvvuQkgxtwcUFewQDq4CQg2GprDUMz7MxbMb",
  "key8": "qug9UpRicyzcYNPU6jhQoT46uWbrvJjJGK4gjV6JCqqS1gR4F8TAeBVwJDmWwb3L8SLx5v4T4HHDNqH3DH3EGUD",
  "key9": "28Uo2AF88A33bP6oiE7xxQYWdJChESkVxt39qwN1VfHu2Pb13XtUVM9TVXrTp2mtfaxGkELbKwvmgY5gMvXfZAPf",
  "key10": "22ZUJ2KqJwXj5DMJftRqauNA5F7v529NhEDpgqGNYC1xcaHtmw3gbuBokr7Xp6BFxqwq4z8TUaijvfpk6HPaed8T",
  "key11": "NtDwuuTKSTtrYT33nqvWPwL6qmZe2agvhXyFSQk2gknDcos6TQkJTQzr1gcz6eHNyjTiNFRd8eF9zzf6JP3Wc3K",
  "key12": "4eYbCnCwEMw4ZzCD9WZhXRzBtsD35x1imfws23jNuYkcyAvCWpV5Za663HBp6PGhKvit7ryQw1JaeUDWJJWJPRDz",
  "key13": "5nQJZkPA2NYvhcUAKKAFjPmR1kch2dpZ7j7X3yBcHKD4QKigiLTSnV5e2sb679khFGMFM1NPTfcNrJkWLmiJiGxS",
  "key14": "5grckZQ1yKEo9QwvvSnMJUrj98djcJnuURLU4BigxY5HtqbtfBU6dk7QMu8f3uHpJmqbyTRGKq7YrHTaPhLYAewS",
  "key15": "3e3gQ4AQzhiDZJ1npA7EzZx7BHa2veTU3oL16SvLhNv3RcgKeMaLDm71CBgXXazq5DtsR8GD5UEyfSctZmDYvuHx",
  "key16": "2PzxbpyUYtr9zFmwBiD2V5Umcca4GwFs3BEVyqJ65si2WnFezZzjVHDG5LWxd8SDmjdmzsq8RRcuzeG6888Z1DBE",
  "key17": "5G5qBkpS3EXVixyrRvmYEH9pW6BivdB8wngz997Z4y5raDbnQSfqwAJdwLp41b4W8ExBYb13Gp9stqzw3FUc57Hb",
  "key18": "2FC7ob69i6k9Mcz3cXZRGYn56evWspxXjrQ694nZbVrCacemsCER9aHVPzPKTg7F4u6cd36z7JqqNf4P4wQqsGjH",
  "key19": "3r2ty8iYJ6P3JmMQDsWViBkWsjsR1SmcXimmwy55Qx1WmHCPSP9CkWe5WNT4iQsbmPda7vCgeuCWVG7hzetkF75e",
  "key20": "3PmA6nWdbFm8xy9deh4erQ6cyLgRFNymVXfN4ewkLs2f4ScvJKSi7UYpDyDrdrbstGn7fa3XqV7ycJs414STWDF2",
  "key21": "2uZDCJaG1wGsJZUwdLzrjqUdwBJSEDn7DsuUcoo14unD2Eh3qaLcj6G1Z3qytX8gS77V4uxNCc7Wt5MGtF3zpiBY",
  "key22": "2GFM7c5LPYgehYXNtUoaBCpWCyTerzKBW4CNWdD6CZzLbbSDLsnnBr49gLJmbe9Ke5YgohoWpaZuYphJf5VTaKLF",
  "key23": "47qZKKPm9NKY7jFvqqFSTUg9Wr1D3AE1TPbc2AXg2ALqFufrKT1CpNjgyouEBfqKtb1JVc49JTwesndbniUFVGwz",
  "key24": "3nk6amoA7s1qLgkL3qppdUGJBavw8dQ7pAQfsTJ69mCBBZx27R6jUS1ZQjznXYi5jYtLCa3Rt5TtZWFcfCAArQKL",
  "key25": "oBJ2bStUFeVRrGRB6vGjE2rT5P6XYRDnKbzrgvPD7JMnxMky2wCgWhG2xcH2FD1qyWDgQrU6C3NiL2M6SvFNFF3",
  "key26": "pjPVo1JcpGSSiZmQSV9uiNiuKWUW5FQm1LdC523jpnFT3A3VMFVCPXQHEjEuB4zmGMSiBoMKgw3EkPvffVsNr5Z",
  "key27": "3fwSLJYwZ96DqwjHmY7twdkQGpfxdSLjeocE2bs1RSHMdsiEbXJ958DBxdWPEKBXuU867vXEYoyFU8FjtjEXrkba",
  "key28": "5EN1BewLWfhC1XMukFTWSDKvhkSPyTzdjZZmACyyBikxDZouMTPQW5LnvoZAURLBrRMRf9sdpT1k85qRJ8aNUkMM",
  "key29": "3tVobUWJ5ZQWYStE3t3xXXLbLc8s8faovAJ2dCZCmmsTt9w2W3QePCrzbZ7HyQDQfgjjfiEUDaBg2uJ7SiG3ezhz",
  "key30": "5XLJWyng1n2wD8Sx6PPZeEvaotAJY5aKtKguqCm8WrcGN2UMZcC5TJkJDpDAW2Fa6bo5hPRsSGhf5kjWdnCqiPXi",
  "key31": "3ZFenruxZZNkEP1dM6FBxHosooHa3nfs5e6GkwvzUddvf6ku1dPVe4vkMjWH3ov3beJ5xotJ1WJZTe9pwSRa4zEo",
  "key32": "3M1Z8CGtsSNXLgLUEejGoo47A8pxDMFiCLK7dWjppfjC7596Kzo6CnmJe6Q7ZbCwfJp8TXyBHeGBTyyNL7Se6rg6",
  "key33": "2ncgf5n3hyXehG34RhtdNNjUSqsTBQ4qXYocykbbKUqR89W588WDnDyia14o6ofYZMiRHJejBxtZeXRYXXu4nFeE",
  "key34": "4xjRKS4nMgGD4i17zfWoUbZPNecdmzgH3GQ6EkKquGvfZG8wGX1zvAGJCohUYek53ogc2bx42ehJzZhGbaeT93Qu",
  "key35": "1y2PbBgrvwY6dCiPoyfAiA1EFLS2NsRHuTvtpkPz7TesDkMqTh2XtW6AsFvRRdNQKRNco6BLi2mgc8SU81U88WX",
  "key36": "5wszehdGY3KxPhLz7jy6D1dMipMdn72Vno4UedaQhuqUGzgkBrW66fqQ3z4NtR17tzLpFsfNXRWJ8FosKuq9fsaH",
  "key37": "Cvze9WMWom8EtHwYbdDeGN44JV6jCDsKWuAEbQvd2qpiyTVLeVC78mHHZX4CtaPbDzngUQw81VeQZW44bHSu1Zv",
  "key38": "5QCHS96PxksPC44TjrjD23BMir9EoMYyJo6n9Rc41xz5XA38bK9TgpRtUkZB6Auv1dSTV8yKgqzkkJ1iT3P2MCZz",
  "key39": "GBqyqHgsw6QeLDXt3PAkFMAGvtyiHS5NJSNLNqVW5rxg3EGyG1Xk4PgB49sQcXGVaB6aw8xJNLAAWZwtjaamhNp",
  "key40": "3Ubi9TeEa5h8iab2qe8wydi4e1u3ucABGkf2NW5tqjVmFRhFiL9tnXuvc23s8KaL9kfBgedxpnPBntVui2xKbar2",
  "key41": "2GaxBjT6QMtBwwmBuXxHeWJPKG5wxfPwiTtqyq7f3RNPys3mpNjMusD15tHp5XPSnZ66J8Bv3qc7CYRqJj6oXFY8",
  "key42": "3Ngei74GFV27brWUrsg71C1P47okr94rFeZ2EU9Zp2o1vPXh2rLzb74kRwWGhMP7t84ZMbQejf34FfRXTyQ3xm3Q",
  "key43": "5FTrZdn6CDmeSviBWXE3iCxSASxuPWUTGYSqxyVuZr1E1nsJjkKBJHKZqnbxQcEB4xYzsZEm8n15iMPFwYXgXw87",
  "key44": "4QZc6ADcJoVtC6h1soaYdb3Zx8iPSdW2fsrPTHf3cYvEMUZbQiaX9bSt3GgNRrFTKuoaJKXvBnniTDtabBHBAx4M",
  "key45": "64vkQS4uHEpjj6yvNT1oHAu1ZwGqoBF26n3HgS1nZ6LZRwU1QtoAhSHBYpR6XggUWwy4xwUCXsh61yZVBBYFJT1T",
  "key46": "54FTdcehJkvWP4AJK2L5UnHVtqsh6eev941fvJdEHvhWijZLrdbQQiiq9oCdLjNkKBoEtYcx6qjLdVPytZqA1bhJ",
  "key47": "2VM7fx8sxRSyw48HJfzzcVGXf1Z9WPTM3XVCPzCU26tbkXHqUgLJtfjhYQQrboDKfc3YiLRhLRdKrogWEygNHKhp",
  "key48": "4u1hnh5rMdvfXSB6qkZQAJRvZd9vxUEM2RyaMVXV7uuzrCNBwatYa7SEFhmqMqvcSRojAxfQ1dnnYDmA7WsGwYVa",
  "key49": "4s4ZWmnQz7YEZLM721JhJAK7Cc26NN5LAN6rFBm3VU9cLF2aLq4mdPXPMvgG32SXCm4JzUtnU2y4CS8sdr1wMGa5"
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
