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
    "4UoMpxpUYsHVfQKffTV76x1ziVcTL3LJEx2QqYnm8eBUMwx2DN1ki4uUn4MSmkUv86o2sWyg2pyFxvVzVofy1Yii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52a216pofVt4drdqLYwBJXWCdDj1qavCjGCFsyU85PPcDS1j4SyXZDeAJ1kP3RPYWvutw5P8dvfe5AP4P4VDmktZ",
  "key1": "2bkwhxHXzcbCyB1PsSk6dHkP7dZoq3wYpMcwXPo3BvBExXE2UKwmjW6vAMKVDyGE8sjLpv5dkYPFcctXTVqBMVbB",
  "key2": "5iiWgPbyrcCvfbaq8pV6rnuu9nkWtVSyUMDUoHRNYMnzXCX9TfqaTGr8DjD7LqrXXzsYr6t3nLh8fSdmXbxBVgic",
  "key3": "CEA1TNYbWPDRuWEKiFTcqUrTU1EfRsao6KUXZ7tKM2Wnmf2Q1sEHPMGq9wTV9BDVp9KU4Dc64U1xnwCXt8uQ6mW",
  "key4": "28YB9iUMamWWPUyKqt1ZeWcHDwLKfZ1xXHAQXF5FLhAd7SzA1pfGnTv8WG3o1bWFSZtwZWybbZMw7zoocMRaSyw3",
  "key5": "4wmH6jjR6Dmi1XKE9gCiwRpAuCTdRMqjc5sXQy2U2kYBziRbZNRCWLWoaSnqtSrZm28XJBaRryToFgNoYUEYpLMJ",
  "key6": "2dcCJuZUZwGNvw67Brcz3Y6fquuifK7TTXwKjBSzqTs1eKi8YMuKP3DG8JvSp4GochkQi1jHMnnaAo694Cze5CiG",
  "key7": "2Z8R9cCvU73f15BQxEyad3BMaxmiPLAfkbGDme6TzcPdmU1RYBNgL8ruBF2rQCR6zd8zCGeAxq263UjnWH2WejVj",
  "key8": "4Pm1HF5XngWRSMN1YbE6z7g8QsMvND79yS5cUUKidEEujxNeRxm6PD3bFx5tq2UKHascr5aoi8AfdqXVSfrMbefH",
  "key9": "3R7MTDn1PcHLefrUdsPYhup5dqUtgqrC5PiFsD3yGhtFd7RD51oFvg4c7Dxp12toTE9Ln6VEwB8cbh5srtGE393L",
  "key10": "3tukoKnGCWL8fDvA8ZNJ4N389LuVscGu97fEz8t4JkNjJeRSHpYf6yaDKEDGNu4XsbUFmKvn25FEejHJipWH2UTi",
  "key11": "1J3Kz1gF7Y4BoiKrdzMMFu8qzgiKp9KF2SzSTtu2mN8UHPrcdjD7QbwiqXU2sNiHhMXzoKpQpsMbYqMk2WiKJrC",
  "key12": "34de7UdjSetfiLKNzrKKuZEnuJ4DNKXnLbYtxAMKk6qjKMy6PpRimFMxJS5am5YCgqDyxXou8L4dtuQMUmE6L4Kh",
  "key13": "49bWPCUvA42Dwry5uUEJ5q1ySwi6mcWU8rAdovHzVsXJeVmDv19WZss8V5yxcsuvhm9bKVrq3yJLoRgy3UyRZEo4",
  "key14": "2sa75E6EutQ6jnmS9MmzZTAmTMUT61aBxdzyqoXAD1AFrtnjou8EkwC6B3qodvVybgR4U8d2XTmHfaTMVwA3xckY",
  "key15": "4BfwgaRdNGBDno4Rsm6jcWEjrdQDNDRDRTsrukS7txWLbXghBc6knsGMAzuN4P1NMHwegLyLodyvQUJFK7MxkrN9",
  "key16": "2ETKPzJpM3yXrMWqoa15KnZbf3HSgC1mZrDX3DYLAiUpxMcHdHdafsSQF3CJ1LNZyjgf8tyEz9wjarMzcaLE1gB6",
  "key17": "59LAhT8y3syFKjz4YbyCnEtJGDm5yFJDktYWUbJ6xPWKns3qtQvB7Jv7GmQDsPUs25j6i1Xndr2vAtDJZKtBkwpE",
  "key18": "5ZgLEp2N5uLCJKR16RcxbcimXr8jUeh6aGpMtqhXk1Cd8fNb6Wx5rDjaEWGMhBvmCGTmTa373Qic9j4YPyKe454e",
  "key19": "54HLUXT2DGyR2kQaMACkP1iQ7thHS4NPiMkN3W4dfzi44neoGmF3gWURepqUxSMJWC5k6iUC3ESX4VCEiB5tgB2K",
  "key20": "5198A4WeHq1YNLgairB4HDEDXNPMX5gbFA4pdP8QxTYGJzdSArUEV9mgSeRvJiBxWDZsMgxchptz6n9ZKpefBcJu",
  "key21": "3ptRzpjPEC2kmEbbyE3NFTsY3mBRAWLTeepnkwu3vLRzNApPCjog4voPfS2wQTBTofG7goEFR7NriN47awb6qVqc",
  "key22": "2BnxWepky6CSsiHPAzsjWr6B75zGmeAgH1rdnWmQUQVsjoYPbuA57DJydH74aes2xgtG51vkLtFJnhzE2YQQXaP1",
  "key23": "zNJUxjxUtRdgp7q3GtZDbhdGrYyyAUyDWueiDp57qBSag1w3R9ENaYKUZUm16ZRWAJg6TUqdG6RXiqp98PWoF8w",
  "key24": "4pB4sKryNEi6MS8KrFoi9RVimTgxfS47a5vRb2ndBV8tHVwH3eNnE6mVeioU19Xp6ecG6g1m2wAi852ZBZFtofKB",
  "key25": "5EU2nBbEmKb1Fib3fTGarbBQCTTBucK3HZ3TqryBnEzPzR5SMD95AU3smDyerENW65RGLHFuDArU4VYpwPQnRtXS",
  "key26": "5w2XLNHk5tAgBmTiSqbDbArR2XrZF8mKfpdGhn9759w5k3JXbiUqPFpsLuzQ1rgNTJPuqRtJVsoYbyoc2YzDsYBk",
  "key27": "3gEbvqjGX2FRK1xtc4GVVetkyQApVDSzJtk9hCqZ56caLJQnnsQdQxX54gnikenymrA32GLJBedeLXyb438FoRrQ",
  "key28": "SLmpnEH4q9N3CCaiPWBxG2co38PCy95mAdwSJi1Vfs9CEUMTYqbicREW3q6VRXFGhSMwFjVKFo7qBGKTDuC5zb4",
  "key29": "KKfq7nnqz5CSsWUNPNLVMDfuqRMrFPsiD4PXBZFcdqUQuSviveueo2X6b3GJRWb4yuzMrUqtgwg7AZa3H6CeT51",
  "key30": "5sZuBjGQQgKMnkecQ2Zb79DDYkN2yBUKL1prfY5jxeW3ByTWND6W4Sd2eXixgA8pG3p6tU8q2pRbpnNtfWBJhzcV",
  "key31": "SgLKwnVfcWbrJcuUTnFiRkLK5o4weUtQdANhrNC9EKYXhHzsWQF82eMwmQbHWxBoEa7HjL2eVemnrzfuMmkX6XK",
  "key32": "4xNHxACNKuBxksWFajnhAKbcVYqupFCya3ejtbvnpEGYZyCUq2Li4izhSw3dS1hLV2iNtKucENnywLnShfwUbpeN",
  "key33": "2qdhz42opY43E3Mc6Y3YYQD9gNa8oLYxrsWZP7mcoxf918HZZaWRr3ReGjPeeK3C6FDnBRTyS1rk7eHsBPBr3Fgv",
  "key34": "3k4nqmKNA5h8y1eCCHJzqYGtNS2E3uuHfaNvSzqbFD1DDYkP913WRL5VfFbg5YALBAxVKTcCd27Z2fGvwrchx3ZA",
  "key35": "2LLE7cKfH4r45r93z5ovyYFYNNovEtx4bbDhv1x6giW8kGXCoFsUDkDmBMj61BYBgRK6AeEHWgDJG4hPeN3mojUA",
  "key36": "5qPFPyzWGn5MHuey2Wewx6JMkBPTmWjDx9P18tDMKusiyUastRJUJUWAAN5h4ufVNHFzpSphjX9uDud3Hw2vy3L8",
  "key37": "3qv8qrqqxFZcywvmicT9ASrgsxDcfhSKCKHadpVh4YeyWvbZqxq1VHvFhKR41R8gEywUqHcwF1ckeuQfQLzTdj4W",
  "key38": "2G5rmQ2Mwze91r7pwsBzfei18egUsbfz9KumDEwuTAKJ9PFk9Gr5biqnFqsXPXfnje5PsyuieNxajwXw9DVESWtn",
  "key39": "3nEyXEq5VTNFEdJyES4phitaaiADuLFgBjVpaLqSVFE3LDPUVpDpwine8fFQ9kgwtvx1n6MSxXfsshWi95sFJcsx",
  "key40": "Ng8Uj1nrYNzB1YEwGUitaJ41o6pe1xJ2bQmjf8dz6tTs9BoqXBBoQyTAbo565jCYyV2waftAGCWATNgNVGo5EnW",
  "key41": "4v3U5HUJeMJsKoujWwkYeW5WPN7M8zqeEc7nL5rU9kmz4sh68pHK6SbfsAcLi1b8AqPvsAkNGmK4NTZqC1ys1N3B",
  "key42": "2PH12aiqdvHSot5yvtLdmvFcJFxRzKcbv11L1ebW8eDxA1ph6WTUtPKa5igfhTeSU4yZN73xjvAc6M8jGyJvJ5P4",
  "key43": "2ehW9x2Rkn56mq2yjUvQpM2GQvdYtjxm6rEFydgJDUQQEND6n1gDxEn97h8xQRvfzG7wM1fetisutUXos8EwW9F5",
  "key44": "5XxUYh9MLLCDKuYe5BkK5XMchtUenuGwYQQaQsSWPLszGWTACFcoGmRe3gCutiyxd46xomD4r4nEepBAY613tLY6",
  "key45": "4xq5KSVia9kAwD4bnZ2PkgUC3UmBFSQR89Ge2CQHw9UZgekM1gFthVYHPFC6jkT31Ga7tKLkoVxgCoa2cQ42sa1F"
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
