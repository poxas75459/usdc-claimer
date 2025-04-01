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
    "3e4PxJbZyEvigkuuYpS19GKthixEwMsyihmU8ZdZjr7ByJ5zk1PEGgwgH3YQsT1yn8ieYzW5enhgRE1tqjHYUQ8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UV2rfsUKUKjX9MpCYQymYwfqVthSeXpDdXEAsJXgkejcAb1TEx7z4bcAfPqWik1HADKra3UWEAntPJ9aGaYVS2k",
  "key1": "2UnEHxnBGDsPSMyp5fq9s7xkJXLCK5YZTvDbQQuxybsCUc6PQe7bPtnbf7HsTDpRfkjynCkvhcd6mZiQMaCm16pu",
  "key2": "32s7YDkq7Nh3Q8ozWTrRGgFFN28SjQFEr9hu2a2x8Rrehm1VykjYXwXge6bMt74NwcS7YqCPDQtCmYyCW3ueuihE",
  "key3": "5CemgHtfN9BbNEFm1ECqFnNqwytj6oPdAw2mEMNpUs5YQck6XA1JgvLdSV781fDXd9v4YfnjEpsbAMcFmc116Pwn",
  "key4": "5irSEmyb1gWD9X4KBVU7TS6jkN87YLHgaEfgEVm7PvD2WT1qjYF3UwFPxRd4qxNHYgb3SFLUmyyi36fYTQyfCXZk",
  "key5": "3DBUsd1k6BBXo38LXibovXZCGwdAE7mM1teQH6HMoX14nd1KBjgxovCeS65EHdvd3uyd69MrvMA3Mhqp3ct2w5Pe",
  "key6": "4TcvbYi6zd7ig5x8uWVReHm8f8brmgNtiGtBLGws4RtSZ86gWi6XgPTmAPCRZqKwmxeR3FQ8D547RDjBBW1tQa7K",
  "key7": "2Ti3DEbcRtTfFrCqGvYjZVhZm7tEYLdQDqohkSf9ygc6Jc3VnpH1LvbtDPUePucuU9m4hF8LWEYaCzW5L1xkjSso",
  "key8": "5C4cvshbkmSNxwjVj4NBtstYH4g9ANTZVpczMyo9NufrriM4oBPUgJXxapHb4z22Uq55FAKfRXtdd5TUtBKsVpmo",
  "key9": "5uw4hQtBjBRJxjjnWkbEwLhunwK45FsZkFBfiPH6qqWfxvQ8edJVSDMrhGtCs1wUz2UMwh8UwXVXzo8ErscYKu1C",
  "key10": "nNntSBbLxv9MC3t6918x9xnxWVh8CdMRwz78VnmAr3inwqeR74YLwtAbMwEvqE2bz4mb7SSpMFpjq6aMjmZYaQA",
  "key11": "5KX4pnX8AH98Ua1tiSMvHUuURzUDPHLHcPqKSDeC5FNvqGbMQrFAczzVFkRFGrMsTeVwqAJAFLe9VtP4kwLq1S1j",
  "key12": "4dBQ6tjtECPx1gJvZkb6VUEUTELTCzPEfq4y2Poc9kjwn8vyYCMNycDcpSvyhkaroihnE8wz8tCTcbUnvvGAiFri",
  "key13": "46kZw3BARtdMNDYU8VA3snRRztnmytA8JcCaFvSftjycdyLjnwUbEnZfLVkD8gBReEUT6MXUvyJy2D2drJgVXwEG",
  "key14": "E6MnEujqN17ZQW8i5yvPDfLM5cPApPMF7fbq2Fu9ycxZzKpqTsNPBfx1CRLAvDuKGUd6JpcSzThy6E3ycyuAok6",
  "key15": "2n6knse6ZtHwf8fb2qz3w2rhVjiVCgdxpLuwrHXCWxVFM3c2UZQQBMUhQg5Vsv35uHQfRu5H1kL11YCpjzm7URTn",
  "key16": "3FYRRDaRaZhzC78ReMMnEwF2To7K8CpTAkdcYiChg2WfLQ4ggfRhB4EwRNZA5Bzd1Bru9j7FQreSg93mGQg1ZtKK",
  "key17": "2ZbNGBvLCCDsc3jXmvzrBCZndKDfRLb6mBx99VGgAQgLP6geMi6MtQnuZZH7WEc2FYGh8izUwR7UXyc9WGxkzNGH",
  "key18": "5N9TNj7gcUGnQYmhgVUz8bag6bhkoX9ojENko8qcBs2vbURS9jJP9xaNvuw1j5grGG2kHUBJASMB8hE71YxdmTS5",
  "key19": "2FhEWG8GFDhPkGqgEfq1ymRNXvurbDGp9ip94uV8Anp6t2G5Kzrp6jvN53o3G38htfUCb1Ue94so47iA5ttcEQnW",
  "key20": "4w9VjcULaJtJ3BsxTy4bZ6aW1Vr7EjGXAr1y1fqzziveNnjKo5tcpUFKmuJ6aWPEb4k7jCtgJrvRajvsg6u8FwCt",
  "key21": "hYEbbncbMkNdDMEoB72s7qk7gWGRfTRnqL1gtqGujgP6Yu59MvV45avHHLaDyx3W8B8fZqCGTGHjdkQjvhZ2rw8",
  "key22": "anwCykvaYHW1tX5xUa79dJdBGE96seAMyDpxyuu7AgWJzEMst5JYfjZUwjZanuZjRDY42TczUjJQm45tiiaPUdz",
  "key23": "33FDaXmEVPUcPZwxYawzGsyEkaRn5uT54Vvh1VQFHr2V9rJMPXdiNEG4ysgF3CCWYWFmbEhXzED2DFJFoNKFgQHr",
  "key24": "3f3MLzxTUHg5wWbBgXjGpVsms1LS9Zbuux4ebdisWe488xwY9mdycU9UdV6NA4NmchhPDXSyrCnd4FUX88qZH1qd",
  "key25": "2TbtDGSXFZx73RRu1VgXfk6eg7ZdKB1412dQn3JqNWu8W5bP2ouZ8cjhNA7XNEJMF6aW19YckdxfaCo5gF8cFtQm",
  "key26": "2cQgGq8YWT1k9rgcfbHmK4rkKoPcZP4eUL4ugp5bEtWL3Je8Do6BdcC2WtRRczvWwKKe3PBHRxVtgVGQdzfZ42Z8",
  "key27": "2vHvLEKoAACZYxkMEjuwLux6wEoLxqFPdyFeouCADVpeUCpucaJpURG7qcZCdvcyFvNd1L3XWWnEDQXo54ccQvCQ",
  "key28": "2tYLBPam8dQmc7tPsDeXeLboSucNLj8dquTN5UpxNPT7zt5fpMDiijqPmt7t9KW5WULsA9Ek6dHf27kj2FRckBWi",
  "key29": "3yuckMkrtMCY9f499sGvUzwaYSE4mCad22n9PVHyjNvUWHb4H2a8k3g678bm5jP2416waFUz1b9YLL4FmpwVRYYo",
  "key30": "3mipKkzPuS75QygLT7y2zdpPSws78WhSxQVeCDCD5u1j5UNLpBFJotYdafqFntJDfQvUvnvA3oLzTKNkwb88Srvh",
  "key31": "3UBqeoYJ3zdBejkiZVsAfmPXfVqKPUxQQzj8uWaRSWU1rXNYKYjpm4QnBB3BcjF1kTqC8VoRRhHhd9kuVnsZxmAj",
  "key32": "2teqDuSstFumNEeb9RntNk3dj9kEvr8Pndozu5nnLhHLwGQDorDRRBBdkPPhJBd7jAm2utGwFh6ps15m7CjSJ3zZ",
  "key33": "64v8caaVkvLYBN3vNEutBfW7ND6vP1AcnfKCqewzQURYDt3KAPKQS4iHxFugPq8ipabA7bWRKPUzFENUACg6e9Ke",
  "key34": "bDCZJYL4quU7JQ62d3dJf4RPxggvQzRdbNnsC9DcTMRz6DGsDBmcQyWjQ9MdCvniJU1uWQyCD849GEAjWGVRnZB",
  "key35": "2VFXJHBfXXyZsBQAd2ovhi3T1zoHRmocCoyHeFvaTK65SeF44iG8D4FcDB5qcssq8bmYLXURrEWm23WBTi2RwwRt",
  "key36": "33Aq5Tzod92cRsmfAE4rqXY6kMsATZmfmGLKq2ax5TksWL9iq5T2trUprPPqteppHZ9nxhP4X1ByeWE8SrQGtdA8",
  "key37": "2AN5b5CDAmWnMb1VvaR9rP3qVqz3r5UWRGGGNiL6swrh2PjYfBKPDtN9kEt6UHSgfmUXVYdGo18f7YpNqyiCo9La",
  "key38": "2Y1jviZtZepb6HpwTzQgZft8usEKL8Z79kqQiKGC4LGcwke3c9mkSY2KGwYGp47ZPv3mcDdkHCo25WBVZrQhFnS4",
  "key39": "2HvD2Yhc2xpQSn79JdvbkzWwr3t5dpUtYsPZVQe9Skdnx7KGR9NA3us5zW2GztrVCC8GnCUWCiDsCZVW6UnfgPx6",
  "key40": "5etb24PxmDzFSVq84KUotHhkZpXtcHG3GLfLTdTcJCN69ehj7A7xyzyh9URUK52JzdB3vsWJ46xp9Pb5ftoVT6xH",
  "key41": "63eMj2tSGPWr7Cd7u27buiuJ56NMevSFBBvSUhY4iDPdLgmcZqbKND9xeLy8RjdQKMyMEBKXog8CzFMio6HdNyew",
  "key42": "5UykspATux4wTk3FodaW88MPyNdKitd9uAv2yB8PLWUnCdmKtnJtmeLXKymjtWSz5HFBGKfyHADrN7bC8Mhm5mzy",
  "key43": "2hXGneCqCDTsRt9xpF72sebVrsxCDEtzU6zuCW5CZ37METJ6RzsQWnyzGe1G81DHfRX3bYScGAUmVS7epoLLqo6T",
  "key44": "yvyYWe4aYc6V3tEkkebrqg7BXiqdRXGmJSAwFaBQpE6DhwkzPrkdX21SEyEXDRAKieT3tJhM8Vh53Mer8a78ds8",
  "key45": "5jb9VbRQ4WN4i4CTXxvkMiTYFxsuzZegFGMwnvF6qVMeinNftB3hzExUPkP4zv7vXRGZQebvbSgaetQyBLommSs",
  "key46": "4x1L1do4ksuBSA4SBvCHrvqgKC4ncrJakGxAD14cnyJLsjCRuAu8eZkwrbQWzoJgCqRCRKaGwJLj7YFJoRK8678U"
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
