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
    "4VJenNP2ZvWqvch6PCe5PR3yTuc9RseWRsCurMCKEXUSeubgv4xdz3nEu9A6i32BKSUpLybNihgMkrquaN3U1gbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WM5r8BX2JJ72Ws9uTRKrjuQuoUc97hZJoE7UFW315WHbCYYzgNbi9DXY51RNSE5vzcUwqU2sHHaBGAgnB5L1Y2o",
  "key1": "4Rc4rS9R7SKzJsnBqDeJ1Aibn2QKuutougAxWegmqtCbLPWP1nCchAzd1iEeot3KVozJykfKWiCzPuo3q7JBNHV8",
  "key2": "sgzUkRNDUVeaAsJZ98tNQqtxWV9GKUjUbm4pWkcTgQYLZb5aLFu6Gc3ypTaGZua6xMJiei7DiVRo5XQXrTPTHJk",
  "key3": "3ay4BW6Q5BDxgXPzpcDUZjrGg7dpKzLKzCPQJ7uR9hqZhnzTms3YJMLX9ybzCyoyZxUEo9GcGBuK4B7BSoHAsZ1s",
  "key4": "5RSNhBk7UBdfBoFjGXja2HSVPAPkxkZYLXQh4ujQuV9g37EgiW5DevNnRT42Q71Z1fwnXNVwdYmw5RxHrPcP511w",
  "key5": "5wgaihZ6sSuHo7NTrcX3NoFJxed2RDoUt13XGx6aHhdvXK7q8S7ZzNcVBVaLxYHKhc39arr9eDQMoeEnUrPgaEdf",
  "key6": "3eZfADCfmbJWNCJ4wGC1BVMF5Mf7wcmSUtXH8c95rG5xrSWnRSRrkoWMQf3Mce9ohznX7WPBTDk1x9NzLPzp6Hjg",
  "key7": "2LVLExp16EhePs4kCAu5Ah4HYUk6QATfsDmGQVNKnCW8N91i9VHYBx1tCcSvjJMcHcaq2gCtRaHDkAjND9wywFTL",
  "key8": "24DoC8UG7KBX5TnQC7GrK6F2k63oPVXZCxpEJBYakBZ2gCQZw4ff2P1dHdxumHmmjbkvnz2XTh1Wfqaac2rbkTzq",
  "key9": "ipQ97dLmjbKsenKc8y77dtwc2CuWCN97omR9PoQBSEpvrGETYa2ZDL3LF6m2qJsfrYirgY1bXBUUMxuuKj8Cow6",
  "key10": "29omBr7Z1PFAXq9qr8x6LMPd7F8BwMWUfh1LvyWhYAKvWiNYWSpH8YYmksNDEsgY9S5myDk9uPRHGeVzWZjZfj3o",
  "key11": "unnaQ5hLFU7ojKRdYyWvfUFhmXC9cWA4w2hE1eBhX8oEeHeuxUXwGN9PmkxQRU77c5WW4zKRFVzVykMBmFSiBwQ",
  "key12": "2j8WiDpaYYMWoma6XsPXSe4hMk6MUSfcUexX7x1WsjJkrG7gYmiAm1i7umAemY56xNg6vvrtikcJYBvhhukCnAsi",
  "key13": "5Jt8ZsUcAfqFZemCEwHdFjFumwe6M16R48L7newtyoWpXEmz8c52WisDHotxazkCLUurhn1aEDoYZiTotcyPzwwk",
  "key14": "2iRSNNsQ6hxLvKZAfTGrbGtEJXHGGEvEPxvEjXiXHUex9A1mUo9CZnrwCUMPdjbQRMxygF3ScN6CxazYH3trPTFc",
  "key15": "3B9aFgHzsKGSXTZNyK8rEnH6ZysDsrY94KMriQhy2UVe7KLqnEjr4qrkBvGRpBAMCGzUkrLKoUCGWL5ES4a7sj29",
  "key16": "pimkkdhR6sFvzFofMMhR791KfBzVLsFKZv4emVyQFHDNhRLM2n7eLokDVNurva5jBvPPx6E3Zy3eyGRbCV2fyoU",
  "key17": "B5Jr7uFuyXbnZdL6wcAfcgRqjYx1E2ffybCxrS6yvaMLz7aNzTCk4EJ7d86AvHwqKa35DHTEBxTuP3br7b7SEdZ",
  "key18": "399pe7Fa3ThDa3efR4Z2op5r3Xy1QnvXnS1Hwu1ZL1LiQWbeuhyY7AyxLUWbNvH1QhohYFq2NNMiqWN3wML1R6ST",
  "key19": "4vdYYA3Nmwu7Lu7panCCNCvYv2bMJCRVYv11Ew2BrEMrv1Y7RN1jJ98EreVnZkEsRALvWgA4KxgHgrDika5A1GJs",
  "key20": "2X9Nkuauid1UnEDMpTEjp3y5NmMECWftxF8d4wmF76wW4WF7vpbTkq4rAoRy79dS6WVMeYkWC1HX2Fit6dUfKSAG",
  "key21": "5vX6HZ4RyqsqGov9BgNvE2QhAcXDFAGipushruxQfahC3U4UqZtv724pBxK83dgSnKeofNYavtAsGfb6iN4ox8Ti",
  "key22": "2USgqMTuMqsxMk721uSfJMjhMjmSpG4ZKfqb11ZbqdonHXo93MeGLYh7Z5dbWiSRTxHUwgKFkNruSto7y8BHQYfw",
  "key23": "LMSd7yX6EmtvwzF9u3Amce9XWctKi5QN1HSC4BfcWaD8rZEvWCwh9bS2aoSWWMKSws7k2e3HZRwojrCtPzNPrdf",
  "key24": "4AgPjMiYAtVatQtqrxLJhfyRzxtFXULvkg4UAcok2AmXHgjbYtsRPrVhBqWNSPb7Pm235EUzGxDLoXgUQaCjVarZ",
  "key25": "oJepVstdpErzkLxpCXECsnuzbYknyhKzRsGLjbYkFYEUFM2u3yJkLA68tis51UXqKQCR8R6PsEAxg2hgMteD9ni",
  "key26": "4RmAvb7S32iVSjfVgc1JipzUcws44kvex9eoy8wt6yEJdoE4CGnBTSTw9aokPxnthbC2fuJva2urqfBLrapoJF3p",
  "key27": "koAzV8bL4TfFThXtMJyCCUTPs4cE5sng1NNUYHsUyKcYUieaBymauZ4VoWjkHqvkcATh8a8D7yT1d3gd3h23MBv",
  "key28": "bPRue1m3HxNsg5CLhzcfeoe98BJb15QoZ4f8YGMe79jvP3Gvz9qWgUhLRR8ggfFcamaX8hzJmhe6EVBkkVNTBcK",
  "key29": "2EGJ1hRwVAv3uy2ZgLtYwMNYCwm6V2FNaKkDuXGdi2Kob67W81WmBDaLFjz79ZYeDXFdu1i5YLzynJLvfwV4BZuk",
  "key30": "2ee26SNNjFdEBDepPHcu8gndW5so9sEFWxMWw9aWptm7BZ5YKNNatD157sb9wATYgX2pywNAMbtFzqoi7Lsy69FM",
  "key31": "g8B7FbcVVaHbCK5oh38QqoEs7a2Auv1rtWKNwhtgc3fhMygt8cvY6bkWsVdsenexXn6zVokRMot9XC3SqSEdpJP",
  "key32": "42rARDZdPeXw7KHFQgyAx4PS6UBZHeFpb6BW3gGZCz1y97rLUTgbJDZ49kM6eTH5gx8ZPdQuRSukETiFaHVwyg1z",
  "key33": "4a1tgaYW7rwLL7keKkMNp2NHr8QuN2ZoWwLGQcuLkZpx2D85pSagxZkQfUBWrnXcuYjg3wjvKJukG2UcDShdNQzv",
  "key34": "4dncn9p9An1k7inUM8Q82LKR277JW46Ng3pjdagEkg2S6pKx3bAi1btvJXMw49qoYR8sLsjkYV89binAqyDRJzXm",
  "key35": "2dDx6XreSQioTEMR65JF3vEWRWqsYJ7fULswqxraqstyoiCbsWsnMjZ4YNqELm811WJHzyyVTAYtxtAEkdnuv4Gx",
  "key36": "NNQdQCxvhcNa3vpH4hEXmRNa9SCioLkudBRo45pbaDMmV2GjmLNw41B8Kan6WNviGPXnqbmpXMvURyjBS7PL6a2",
  "key37": "5ZoV4xFwXqNZqsN4HZWxGK7iPQiSbZGvMaNqPbsFfw7Y4uRSNjJbGGY2njKSv4Mv44KmFBzXdyyK6zYwAUujuX2h",
  "key38": "22ZoGFYsL2X3KzD6pD8kSVP2uLPCgtktM7D9B8AsRYT8ikN9HLewpq8Ws9eo4bcq8Je8a3Bv5Ey4uS2LcVmFixv3",
  "key39": "3B8bQvVthDPnjKEnM4AQgwNUZNkg5B6hEJwYfdknujb2ke3P1DoYLGt879SSZVihyQnoQZTfopBdQVJzJDRX42ip",
  "key40": "5uy2YDTjwUnSb9cwXi3zZoK5qzzRVXw5nwXafYeb2UGBk5JVUwBvGJttHxaskrE2vVDEMhFHWwRcsuBgpQnoexqb",
  "key41": "iD6hvgmHwX2WqEPZRqRqYLMhuRjc9feDAMRig2vxbBSFMvK1mC5jKXdfTpdp98qofmcVZCw3tN2edRsGD2myKbK",
  "key42": "LLzdJsEoDKDUHqFTiUYdTRDv4BbfFt5gHgMqTPoMofJXLqnz2SJ288qgaZs5iamWb8ptQCKLpBRt8h9W7nyWi42",
  "key43": "5bqzjNfgcbjTBCCSj1VCGZeDJBH9U37FYmcWAX5sPHAvo4fR2mrRLF6qLiwnMZUYCvYWhPyx8DReDVT3Dcnk4f6i"
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
