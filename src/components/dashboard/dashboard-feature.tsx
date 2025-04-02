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
    "2BzzwiMTMe9jxxfMCgV1tfHFoyMPPqFMcdjroJHhSpGrzd2f8TRDa4PYBXbCvE3wNojfx2irwQCs4YPEDRKcTRMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "499as3e7UPW1iN4hUtG1TefsHTgG1CZSoE6gRt1LMN8aq1bcD9pCWzTa7DwJiiFvV9wTtPr75sQHvsMid5B57GiY",
  "key1": "3wbM7jeodbt6jGmnNz8URU6A64bAej979ahE5aUCwHkTzkbJNbGC7J7k888VHx3xNJJ1LwY8StghorHJV18bgn5p",
  "key2": "59jTF1BeXwSuNkQAUDrDha1KjDfxfVV5qSYdWroms9eUnDPKrY7vhSgLfVsfPzbJJa7DhTvkRybEm7LcYDw2P4Py",
  "key3": "5U6JH233twRCKefaHX1gHUSsV2Nd88wbUAXgcp4igctoB9k5h9F5pmAZLy25t4gJcyxDdaL4tLrjzR7pjZLb2AYk",
  "key4": "3MR8KqtwXL6ZPP1U3So3pyjZUZvVos3HTHtZzxKVd2DctBuCYzg5m6J12Fkfg4Nk8uej8crWYcF1mfgyySwcgigA",
  "key5": "28RCcCczsF5V4TiUFgmrkhpF8QhCmwcFiinrL7mEhpSFh5B2T7xvcvm7Q7yAkDfDGGxa1SS3H9KCBUomVmexWBo8",
  "key6": "3qxAzYA9buLRzQAAFJBak71zgGXSsfPms3Toxq5ofh8nQkroMKGGRkoRpWWQqmxutfKjdYS7Vxsb4U515KYMk2ny",
  "key7": "4MgaBUpJ74UJRGEy9MMS3TDszD61Bxa69RADNWF6WWFbshPLZtZbeEGESGeYwqNcpWKMWc5ZpHqLoS6tYPxJ46MX",
  "key8": "4muwx333GKkoowyKK57Qd1tPLWd8wsic6mhfgDb6KB29W7e9kq4xuXeSQadSpWiyNVNNGoeQrYShsdSTF3Rak1oB",
  "key9": "Xe123GkxrJW6rH6NS68Hh9AapyJc7wcNCN1s6Gf6bg2bdqSLZbaLpkG1S5J93JGLkMyiK1jTVZgTrLdpna22ZvL",
  "key10": "43ACiDBYV1roWNU4FZe3Eb56En2bz2X6xdfpWEGcA3RYRHcJrzzAxcQL9Zfw9S4ARvQP2tA8NFy6ErZtigTHmJYT",
  "key11": "2eBdk4XM34zRD93TtCXguZFzXarhSNhhBqEfbsgaJuAT1t1qU64t6SYJtJH5Vw4uyTTSUDAkhC2wcJGqdMGV4NYG",
  "key12": "2mvnf6NTrWD39tUyyHiGvhZyDVH1uQCtda9xuep6xkzZxHEagVcfr8ApSV49upDjawDyVqLaL3p8LLtiPs7EsPYR",
  "key13": "37yGHR18V4pfcgGQ7HZjChjvYfG58PdBT1cCDyGFxYaSMfAdfuaWya9QBgeXFhpXvqoThBUKNwbUNYCT5bcoTWF",
  "key14": "3vbT8bWNJmy68GqrbwmAKPCsG5hbxzkuGXj1Hk5Uj8DkPJsHJycrT4ZtcoMyMQjoByFcm1tBBbumWLFd9RDX1HDE",
  "key15": "2CRs4WA3D5pMvAyowJpLLM9BCLi13h8ubpvkp3rpdVaj3oPh57yeZQxHqgzTq9reA1BBmSoHRWMAp3cu3sS2oQKe",
  "key16": "34YzwnzDCi3vLJUXYRmrKArRfXLAmZ9iyNeVvVZ4aiPAMnrfd94C2y9dHTHgPaTJx2MWnFW6UUQkjKtM8Y97XjPV",
  "key17": "3Lxv6BRHYc96GULg4QqCvz8Y3bUmJRxgCLzY4W7ioDRQdmBubVTiMdYcEhSsUsfVAm1MXKPdvHAYFKgBVWveJi8y",
  "key18": "2szNwBygDcAfNiJk8KxBuyiz31VDfhAdVjdtipXp9uDCztnw2fRrHMneMtKppKxN1tNYQ6JaCRhF6XVrZQHJBHKw",
  "key19": "4fBXtSd2iZhdnpUYUAP1L1XBVZCe6ySuyUGyQwN3j7uKoFK5xJp77Kgv1P7chCMs2wjVDCE9pZ7DMB25FvunpMDA",
  "key20": "49qb5B6bPR85TMR3FF5L4hCxJ282vQor3c2nRusYbiGtAXDcWczyFoqtYm7M6xj9Cv9gdfggdYzB6xtCWHFD7xKK",
  "key21": "2U2kTZFGGVZStyyAQGvbc78u5eMFr99EozzurJ2AfZHvP9hPW96TRUejFZ3kf7vv8c5ffBh6SUxu1CtPjHncRGUf",
  "key22": "3HxBRNY6rbDwSMGJnMDEbKiVmcEdLRQ9qTAt2Yb56WigDqsM2tcL5ysmRAfhxuXA2K1iu61AwCBFBeErBjSqKTXE",
  "key23": "frpSGbgvumiKJaNyaHLPrrHLXPC4Xz9aq5geJjU7bDMFpVfFDraXERQ6PmKfUUoFMXEqenbLuPNgwqh9bKjjwrY",
  "key24": "3GQY6QFq4z3PTPapVXeg7p4T9g41FcGENP2PFvbHuzmVsPJcXN1EMpFYt3tq6DWN6KXmEeuG3PTyymimcLsra2WC",
  "key25": "uPPrnVfuLJA7Ts5tb6NY9A186zp4F5tAk2ADroDDTfSzBdKy1o7k2z6Kpkhu2g9BqpZXGhja8j9eAqNdTGftryN",
  "key26": "8Qazk295nYDzTVmVS3kP1jmzgYyZ7yPmPX4vFF4WmLc9pQkCAEtgMsFsA7mtuwmiML34du2h4pWrJPiT51DsUk7",
  "key27": "5jsQdQkraC2iqwJHtrH1Ye2ENz4Cb3vRuvJNiYi4sAWQhqaF9qWoqw2RaQquxUwRK8Ebwy391qPArPJZv7hnqcZp",
  "key28": "baNZFDQanp7t3z1wdMVmaPQEwBi7jzYwjVNuZmsV3oKBoAg3czQz7oc3Nt2n8di7DKo3uNtbzbcLFGc3wZj4yeS",
  "key29": "vzeuX9hTYnHjdSZmWkXzTecPrcNnW8auPHSzH3vi5ZHnte37kE3TuqrK4KPMNi2p7uqNoVpJhc3H1ru4h67F8hV",
  "key30": "SUK8Z6Qwqpwr6xmXBK8peVbKHZkCEDygVpWG2vQ47z47WNij2ZWwwj9piqoqp3ENo5jSVLu4iKPwtV4CAEsCjh2",
  "key31": "2LmtCQMn277bdErqxqFsRnTbdxegPYEzhFM3ZzaFKYgT5eCTf6LFwpkhfMbntp9HpjXEU5vqhvWQ98Co1KyTRT5r",
  "key32": "32mAKAmJcgF34tp2HKnp5kZ4tfHVWALVoQtsPkH36Lywvbmqj5MPrAEoRBXdP8uxqk4By3dCBF6hDe5dXYyV5YUx",
  "key33": "4LdJrSJBMeCV4quVRvjeSJjXn51NoUVMbnXn8h55QPDr7ftaq15kmZRB473aAZP84iYmNA9orLEBVovjPW61Ccvx",
  "key34": "5ftVK55vvv4gCscLK7v76JBhFYj9UgDnA9XiNdX4W7VDrUhVNqGDN49inJgktNz3vP86HmdfNHAzaZP7dS4uNMBK",
  "key35": "5s6DbLvT8eaUY25GGQgKYzwqbvsUYZXhVfKsrEa3fjNnsSmJziD2qtRbUsgREUuggueGpoTEPQHmnYvUCq8qTjpW",
  "key36": "3CDLTUWX5XM5Ej5MzGD6BNcFCMnEADj2eSZUiwrHFctaigXvFwFwN8ZDTZ6GFqonmmxEgB4vAgiAdNkAoWnMvgsq",
  "key37": "2ZNu92CAVWzwd3nJ9EGRkc5Q2PrvfpJp6oQVzanVXWWbB39jCdvWo98x5prN2ZEfpMhvRYKrDJyBjpTY3HqAx4yh",
  "key38": "5d5KrQaCcK2JhksXd8p3DXBFStK2rSCPyA1ibKWUYVHTbi9dDqL3xPDkBLpHXn9ah2dotijnCmy1mAo7szvub2jb",
  "key39": "5sgyzgpFwxi3hrWNk2uaiXKkZP6n2B1cQBLH6YXdLQzXWaW59czmqVpkZZcqespbJQFsbaiakWUDhL9iv9uXkkDQ",
  "key40": "5o9LYaN2XFCtsAbc3SCUTDievZ9s8zpmDxuc9yRbGC3d1usrnKc42iYqUt17NtMQ3EqjyUZ5cuXV67LS6JgdfRgo",
  "key41": "2MrvXt6d5DWYUBSTPRndTFFf8Kz2AQq9U5q143JFDgmNBZLKfSwfo3SgsQtxdFWq98nZrEXGA5sB1mX22iHcrotT",
  "key42": "2sUsD8KXo1U1tMFrjqszSjcnuy63DU4VcBh8wpw7eLmHUd6bVcDQtNgkfPeTL2HwXMYTm4V3iEkvPGeqenBpuvuS",
  "key43": "58p2Yf9tukDZy1k9A7fMhoJYp5RySheCdLNXq3KfrKj2bJ3DfKBZd56uxY5x2LKrTYUApRem2kUe9ghDKaFb8FVR",
  "key44": "5sUxobiL8Xv4iWMBXUoHzApNP3So4b3JLHtPenbga7gimMgnTiLyA3BXmD1zrvmfTTYJemn1eJcSuyJvfPyc3nsm",
  "key45": "5ziAodwM4pnsTCTXGAYVwfuhvTdt3muqzeYAZBVfrwJFcNJBgdZM3N9kGneSQMLUSXFdaJyeC4nWQUEREoQMyLo3",
  "key46": "5KKgxDy8mEcrCGd6T8pswGYLaKn1UkZp1h26Us8qQRSysh9gF5RkDUdFQkura8gCdHKa2un9ddXqvuMPmJq3ZUah",
  "key47": "4QauoYvymi4pBTKVum2nR2KiwxXkGYMtabbfz6BfA6mbuDS33Bqn8Dj3Kc6XSeYcMbr2TsEpghwsWw55tC3ZrD4b",
  "key48": "42S6QqADQjJbTUR6xUH3Je18kSDwcboSNUqgpgB86WgYRxnZTKnYQrv2QCwbYvz23KJxcRV5HdvQhVK48KxbagEy",
  "key49": "58LWcLTMwZ4SNZazV5XV3jad1n3ZMFfLJSXp95V8efvqSbVtB2p4rYQAdiXdQMTrektWw7jLxiF23n4zFm7R4dLx"
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
