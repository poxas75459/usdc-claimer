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
    "478uNZSqf1orf76Y14Q9BRA74u4xcHnmcemHDTMU4bnP6X8cNFpJeMLz5WCReMH2nQHLtMkdMZrzvbk6DHwctiCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMguAkHAnnWgsoxWFLfy8uEVucUzgyP8kRt8sypstUv5zMx219bjcD4XnXcnaE7wTSfcgZBTWLMJ13cBNZ1CYVN",
  "key1": "CenhFmvSAn7h2djmjr6wmqP5qDT3WVGzzCqmRd9otEPKj7jPFcWz2avxdhGJ1JcpmhXEDuQhpvXVAaKsbvz6Q1J",
  "key2": "a6C2q9R5v8ojkiA8iEnR5sGQCdm46FK18s29jEWi6jQ7tEqDVktZK4F1zCa39QN6jqjvYUBX4atrpuGHMkHy9pi",
  "key3": "3AyQckZxboSnZXrrEWQ8hin5dBN8W8GhmiztWpR5VufLUcCWD7CrQB5AJCq8EGr6P21HW9FJfsAMMUJVnALNHV47",
  "key4": "2pSXPDnoD2HB5zKpmNGVkfV4q4S5WiFVGZzfjUpbRKTWZaHTcXa9PzBZQ31S537JwsGYYpYnEnXnCyzi2EpT4B3q",
  "key5": "FqqDNUWjZxprgtQqx4Mnmrckfc2CVpqHJYL2PWDTYwrbzGxoRPN6qaPgpSbKLHmGM4gtYwqpBdrH2pztYwT6DZR",
  "key6": "2BA5Baqanx6j8ztnaC21qbNyoMCxuQuPdi18oeKnazuUQEoCo7UGbv2GhLkeZjobm4mm9K3izd2DtCfgvBTduqr7",
  "key7": "4cUZVi7ZK9ZJYXpv3kdTmPGREaeeTv5uKmw2zBU9RtyyZTPiEdC9igrQH3JG5qkH2LyFb4Tj8UJQGQNri75EBDZL",
  "key8": "WmUeCNeUHyMnVvqEXShWBbKuBm232z9XnjbCJuBneoQ4deW9LR957pDSrtFZRGoLX6eTTRp5WRjtLWFWADJWdQU",
  "key9": "2hE71zQjb54wG44aKuxfbLw8SQVP6mYhxUt2EVLg9LSReWZUodbKxx1CFWxSfjsAP9F86FLhnvcAwdvfrCeEUNMN",
  "key10": "hZKZ5sDYNphba9vz3jQSwua24U4Bq6yYGKzHw7oiiTFGMCx1dsAKJ3azmWBDZTF5ivpbeSrMYLGQ2joXFehLAq9",
  "key11": "3YrSwBS4yg8fn2EC279LrQFHe1E15hYyAX18veCUq8o4qYFYN4pYY3ZMVBfqRbGhdUfcR5srCTcw1xuAs7NA3GzP",
  "key12": "3KnQRX5efnE9j1Y7uwWEbqc4mwMgszYgRMtoYyhVuqxRfc4kRSs2JnzKJvcYnVUiE9qJrKtF9rnEBZ8wmRX4XXe7",
  "key13": "5rjTPXYM3vxRYDEKKrpuVCJ9MAuMaMEhekg39S9TXa1tuAWWdDff6cb41uJfCJcwup2XuXsufoqrp5tK8WLp4kc",
  "key14": "5CkKz4V5DJwFbbZ2oNqqiswhU6zEng9gAJAjpEBs8V1wmMzf2FoT9nAnwCTn8HxVDbpJuFhjPrt4M1NdR95e6dsb",
  "key15": "2uyd96WsF7mco3iACQEcEhDc7mtNm7nShD4GFLXtJsz5nRczL4jjiP3TZVvMLr92Pe4Wi8wiDAvhBRJSTPpe2dwQ",
  "key16": "Rz1Z3HUvEMVqyBrTZc14SXkGVYBigTtTv42rDUTrrEc6vugLt6e133kkLNgVWWutmTcBicqXqPgPkuVFwkKxL4v",
  "key17": "hV4dTpmUDqdXNrjwb8Jx9o6SwbATcNpsBygdvdju9E6vBhLmgQVwBRs6gAMLnGDJ5vguzaSy7QSjVoo2QjrXxY8",
  "key18": "3hWLuBRuCpTnjRAc3A5V9gTaNvgoUR569gMTCYjUi6uuBRzngquaWPyesjwmJ5axtBf3DLF9eQZocmTbfXvBJBXB",
  "key19": "3fDevknxDrhpPs3USFFPTHxm9fkpJFnVb68Py37wdgZH3hsKeFegjLeHVxRjzdQWKsYY6KnpNksZv3dbAyx5uKJR",
  "key20": "rnKcevArFxGwUXszySnCrRjKy2PN4jKie7dhDvUfdF4cU24CQjpzVsGqsieZAR1kaynFksvKeTipAvFRg6VPQQQ",
  "key21": "DW7DF9iitG3zdxswCiJy6No1cHwzdVjGwD99BarGXtri2VntXX38Vw8Yp8xqu9ER3G63xbaCEaZ2fW3xngpsMeC",
  "key22": "5UMhY5u5H2Mehp6godzUNxjE2gfAvtieoxfu2sdkUJMuAwfMBYwX9KRxYye3v4P2S8HfAnH7mfq5U7nWisLvnQMb",
  "key23": "4tL8VWt6Fjpw8RG1iQF65QEcH4kUmyFLfxTn2n5uLZEEVk5fXR9nA54uocZMnkwPQyWKCoecM4Dwtxy1gWEYtQXa",
  "key24": "4iCHeoqPiYaJtKAgtANxyU1qu1Y4pkzpx3U7jV7nT9ATVz67H7ptvLJy81H17Lqwt3MRzrrCJtTBbB1px5h13BAU",
  "key25": "2Z2na66WvYcoA17CthxAnczNgij4SAZJ3dDHuq2VDdim47NbMoN8PyxSUXAWg2WjCHsLa4GjiqXbVo9cVPvterhm",
  "key26": "35vdof7dQYrpVKwLpLVieaxTuCu52tLn2Kismg2qjfJS5FdebjvjRNwDedxAZM78ubnQtLkqVmL9twR3WsrReT3H",
  "key27": "4EXqqMc8HqGko4a9hdYLREYY6Ze1ToxMS7pgcYLWPwAJmqAkgYqPHDhuMvwBEPawB1RZCWVqGCagCjkn8Dy7GXyA",
  "key28": "4kGR3cA8UpSKZCtQKjgkjs7vdzSnNHqdbHiGrZRaA8EocB8yNZzFtjVRS93EB1EJmQWU9sSZegKYsEN6o6xK6jZL",
  "key29": "5G2pZZfkt5L7oMNWubgHxS9Bfg7W5QudibVZDDQEgzEJ4BMjB1NLJGGTruD71CYCMrU5M5rGyNdohxHe3KHi6yhb",
  "key30": "4CNb5kLUnwvUohE7QaAj7StxRftK6gHtFTGTQANJKjYt7rBKmc9sj7v5uBCAtStVUncsNCozqKBeGHoC2vBKsmJC",
  "key31": "56EqpUqyY2qoiJWGrWBLJKFyqQT7mDasaJyEVKrYUaCjvnLDr5GHE8EQfoniP3rSmYshne2upgfhmBERDnkZDBjX",
  "key32": "3VmF7pnjTspk5GNWDxZDVj59qk2is3US5um5z54U5PFL6sTc563fr95PybKypQq9CFufFbz64FgAdwjtUKuFUUo",
  "key33": "2NhTr9DzJbk5hZ1kLQqzbdBr2zj2FeJ3iPPWaWZskATi5qtGM2frxFd1iFHALTttNZ2nNLCj9g3vRji2WTpBV7ga",
  "key34": "cGViFYqU2KdUQaLf6KCckHVJjeCHgB3KF58s3nMAmksm3FD9wnh4cLHzaZMbUxayRvwap8auKeVMFZG6J1Pg2EX",
  "key35": "58sjCxGTzzxSij4T8auxFYbB3xzETMvv6MS7fGBJiFWRSbnSsBebcnqpBrDoAxCjNKMyJYh5N9k4MMW3UcR6iKDV",
  "key36": "5r3agiM7c7W2x5tuow8wp7dhupHZzxUTnScvtaLK6YUfsFnJuHGaCgGcaAVpompjf7ZiukL7iU65RDy2JqCdB8kV",
  "key37": "TwAR9PBGMHnnESUR7vkRhdHiDjk1ET7sKJb44ZNZK29ojr4HomC6cEcXoPTFsGh3kUj3Z4iBpWxwW7taL8pgXdP",
  "key38": "3sBUMJ9C3i3D1yQWxPiGefTynncZTsZWiKoLKmUCnmq11zheULu6ksSDkEEkU7Ln32Ho5Dparhwxex7WEvSSQuUt",
  "key39": "3Ahq68n7aNM7X33kek385guN4Skqnusp93CbpMBUWgUTC5w4Jqf84b3pY1Xj5uJrggQPdz9JysMsWTDzWX7hnTVZ",
  "key40": "2tvS9qfYEpRDmxq5Wqadzm5crmNXrmwx7evwypoJSgdDq7uApyc9mqPD5CoQUotpb2AJmmWD3E8dYLektZwnBr7P"
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
