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
    "512V78Sm2ySUhHcori8BkwcUx4zZXJHXttvJfkAwM6qd87UnpLcp38UqLRWaba8XFQqgCLeREoqKB5FWVGaQrhWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27xSAU2wWYAmdPtRKLoHjPWsQmbhmAQTYak3ncToRh84Pw6JcoJuZxVkyVEVGiMZGYDNh1Mhqs1HSncpMZrfCavN",
  "key1": "3Lxp62gq4t7HqzyjhvGKwkdRmi3SiEparpNbbgiyuZTe3zPU5gRsmepPK6BFgkgcXAtjHA2Bpw1EUngejoe5au23",
  "key2": "3ksR4MKs9gFW39BvxzDNK8yCQTXAZyw91uTDpGtVEdaEptrdPibnoUoqCcccKB5JSFfSpT9gZx77KEWxfUTStWFp",
  "key3": "3itb5Srwj5tyEzYP1j9sJZM3TUcChK3fSEY5DB4LQ14KXMtGvRYnMNCoakHU8SRmUUsR8cRp2zmqppPxVBwRXniy",
  "key4": "3CmrLA7snh59vfpzzcm3AsgUc6CsLSgEG3TUVy2PX5xaPDg1gN8xooipJnS4XsejnNU8TcJfxY69acoYRw9e47vQ",
  "key5": "2V89NzkiExKxaNBA1ocUDPWHmPPxpxE2a8AMDMpmWfsCqQEiurVpg6MQo6CoDvDAUBH6pCu4pjMFyFrY1cUFBmFS",
  "key6": "65YVWCmrGPjFJD5gtgRUaLZr21a5WL1fAPmHNSdxKKUfZmxfsQH1t7pknAapkje4ym9nS492Vv1dWbkdj3MoriqL",
  "key7": "2HvEvmfqJqgKfSwcvX4qZFeckN84Sgopt4duUqbNUkEtmnk9ps9GHgibWwQLLgGSTisae2sTkeMdsecqEVbkBsAT",
  "key8": "53Z9b7XTMPAVjKS1aSmhNdRzydp4qZf9nMb1Yg6U6VUFKKFF5M7wCwvVLft46LofkeihGXe1icXgTcgvVXx7AzNS",
  "key9": "2b8KCuRctw7j3pYJTMrLZ3EVDPQsdPjkyg1dQPuFpovEAPUTnrSBb8tURY6oz4pKmis5PPJbhuQFVXK9UhK9aABd",
  "key10": "2y3bAsgbPCWsXiAdJbZKAzbfywsVDqqpPPH9jRzDRr5GZk88w9r89JA39F8NhDVoaYL7YUU513yCTtrQXY9YfsHL",
  "key11": "3Q5cgqeayzpcGmPXSHa6Vu3icihGhE28cz8WJRzDTrRstEdyYmm7YnCSNh5FGQKaMvY9AXSfED19NRG4A4P6endr",
  "key12": "AuNhK8o2Wu48LznwHhSP1XKMtGHkKoHqVSFakBuxExrmUC2kmrv1vRUXhxhbE2vizSB9LxP7s546KU1ZiGJAhfM",
  "key13": "4y4yEkYbrGZbmcmLKajza8cRvzLs8B9RWQRdNsym11X9pTZfkcSkJSMMXUwrMpE1YuN7eLK3dMC9htSsQYJzjHKS",
  "key14": "WSuuprcPXHZi4NoBUrNj4kUaeR5n5xZYKqiBbs2QutD4ma4HL8kRmCkJCZPVwoe4ptDgpnPc6ey9DDRAnwMFHkU",
  "key15": "5ryejhzc7oKuPYx82Gv7ytdg3B7bZyDhAX3XawitbtsQYmDqz77hreZt2ADz6bDWySmq4iNznwUBggVTPMbrPUzC",
  "key16": "k5z4WH295pKDHBQ6kzfAUjF1SGfcVv7rsJi8xbWhdnCZME8cdindxKuF5r7MWB685btfrCuB68dnoydj7uTPg1S",
  "key17": "86oj47DchcuWwmyhctk7e93T7zDJP9JNCnJcousCmVzA8tnNzh3ppCMwg27GtsgCKcpX4S2HumycrBL3stndPuC",
  "key18": "24E2c8PdWak5Ub9A5y1aAjs6RuewG61NLAUgFaTyWasHkc27QxHSuaXuHwyGmFFjp6ALWvJpeKNJNGmDCxFxrtwA",
  "key19": "nCd154fp6afQJc19syVJV3tpDmVWErM3hAChhgWjzHLoKW27f4RtMKi8p5rz1gbXk5mkfjydy2i7xVD37f7q8mB",
  "key20": "5PahYKoVJejAgbiUPL6Rh7u9ude3kC6bJzGriCZtuGtTrKgWZ8wn7HQzttC84UNJErw5jznxyRttsoRF7uvBYzVP",
  "key21": "2BAvzoCXc5BBXGYuNoZU8oetBt5sqzoHFvzBqnw34MgzXU6LMugMbmteTa3BZ3gquUrq2GThxCuHWv2k8Rqm8U5Y",
  "key22": "31VLjAMn4e4mm8A5qC6ry8gx5ceK1hcvaF2a8H7BmW347eXrp7TWLatj7ok9guoa8P6cSSG1G9f3PnhRQe77TXaR",
  "key23": "63Fmh3NxQMEeU3U3YvmHZJBvfMop2Yqs3vjQcVo2ddBNRexgmu8etEdyR7akFaHhfaRypmDxQm9w4whtgg2scJ3S",
  "key24": "3DYDx3ih7XZEiM5CTPGoQ6xvAedFHVdc3TNKsBscN8fMtjT5QbPKLZW8xKGPeb19KMuxsq6zoTjyYg8JeiYSPVpi",
  "key25": "5dFdnF1Sino44Fh2wWQAKujJ8eiVRKAuxwH7Jknv5t7WdKd3ENvdaH7HRcc8Z9ScLsWcJAmuQwBSybbR19aasNbC",
  "key26": "4j51nT6XkF8eydMqds5QKNFuk6ipMyzpqDfxkDnpxL6c38rqfPDoGucadvmvifGBnf3JQUGTT6g2KYveCzw8F4Ts",
  "key27": "3SNAKH4H2wCPy95auggDbnU5Tdi9hN4A4kBgqc4vYxLaiChbc1RRZUdgNQDvGjcm1YDUyKDYswGzh26AgEyMzP5Q",
  "key28": "SS8aippYyiGWuWMmCKfDwp2yt754r3p6oyPwCZ51B4ePs89bPLa17myY3MMLXn3R1dtm9VAhCCRrDRs5DT6tGKY",
  "key29": "QFmQRvsmBmLLpTkkZmz4MS11ytUGvw2ZDTkaqtPkgfqvNdU6byxPxiZfKEB4cQZzF8zWsFJmupiiB2yX6UeRegm",
  "key30": "eRcgZmykS2AVcRiXrYeDRgJhRS8e989KSBUjfrUd9ZPJ36yzFzWo2VZZS8GGpYKoF1NFo29SxdTrPth1C2f7Gtk",
  "key31": "5zBC57smrmVHX8WLXDSHPZRYUT7VtTDPqAANUZGZRECCwwFDBHnKyzBjWUmn2SG5ZEgc7Sx3BDZhXg9g8xqJ6eha",
  "key32": "NZ6Ek24GZfHZvzBBoDeReo75NAbUpMwYiUP4fM62eezMauzjjeHq48FRZSULR7yLoHmVPPU9cq9eeWuxJLZYoem",
  "key33": "5HBxZ5F3BDbR53DRLhNkR28WtnGoXdGYcDvY3gXTu9fHXjrzqEq4HWPiXAtUf2hvGLr6A87SJm71hnasxG59FKLJ",
  "key34": "3AYyf35W4HmQZTqAHLUrkLXmyJyxtL5bEw6Gpx2wbcNdtpxNxJk1ue2y6Narx2qQf9YTwtebFAHGugUXbLoQmfme",
  "key35": "5cMF4pHyoTffWC2uHBvj13Ha3PsKfMGcTzdvfRnphhyFS6TCWqTG2vMbSx8AtQFyDbYfRxY8t57FfAZ4W4m1RXvx",
  "key36": "36PRS2XyVMmbdiHYsLiDbne6kCpxrfNdEGg8MbGKqziAEds1ZjLeeiZH4o5TkjQoL4PaHEdCjnzpqQndaBTduNRZ",
  "key37": "3nQj3NEmM6gr6W66GJMy3pgJFZfgqcQfTtbZ346B3ioSdxCDye5b5rchjw8ZkWkBPbFqvSHhMnQxKeSwc9S2oMBx",
  "key38": "ZTAAaditckuyQU9a7RzPv4v3siLRpxSD2v4qr7ANmREsUcF3d7uJN8TzDUM3DXuhvbKmPmfWrsGo3USAJVzWsc5",
  "key39": "3VKczxRzgxC4HF2uyMZdEtPEHH7qtTtNZDyY6BDXxjTD5kz1gzdVtmozjLCakog6xtEvJbNbCAdzqPRvAGANsNz4",
  "key40": "bHQzVGf1EQgCn9zuE4riGdw7kzMqTDWBbLnT3iKh7TZ8F5WTvKpCFrfAAQkNSB2TDgFDZbXZvJhfoRdrNM8iZPr",
  "key41": "41KHH6Tti9rLxM4C1EDHRYHSySFUCt3UgdcEFzXudrAg453DNsCZRVvX95kTExHHbFMJ3335gpmdXMV76mPG28oB"
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
