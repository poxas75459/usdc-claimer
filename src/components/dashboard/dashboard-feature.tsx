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
    "4CCgCEVU1XnPJxnmEpmBaQioFTxnqZBuLyFQQAQiSrHJK7BQjy1ZBgL7Sbeshzyp2R7RtTroa1xK9i84cBSqGkKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8yCBLf5rA8eAuTbTh6Gz5KavQiUAUhJKP8dHyzHEDU8MuSAMbBFoN4N24tF7KRjhSjeuAa9dReoq9oUnW4JUCio",
  "key1": "5mDt1eJsHhMSgfK8Ma5YLipX3gNGNdtCc9cUiVCgSeVmYCL4DDnCJ3ruRmVfZVmHpznuuTuzdncfVjmTGfj7iXpZ",
  "key2": "37o44eswdCAwoMz5quWvKAp4p7MdokqHWg5hvNDG2CHdiRPRjQZuBzba64p7TESW17aNy5GMwzPnPAAyDXefa9XD",
  "key3": "57fzCfM3BeSkXEZMQcfZi5f2agZw7U9XVLKcewx5mZ2SZtFq6LLMD8nLYTKtgLwYKBWJ9qPcJCiGeR93qLbwmuz3",
  "key4": "5gqrUvtyfaFkCBtVoFJ79HTKR4MobiHWs4XXcwe9BZdcudPeUTeySpNgpMSyzZpCEQqft8gHi2PTCiQTG3BpYF6L",
  "key5": "4H1cmTuZ9JPcbDJKBdGYSHbYbDBqfuw6E9bTHfTw8YT9iuQ6MpwffGgaTZJhac9hCuVpgL4VHvAK1tgBbJjLNQPU",
  "key6": "5JdD9DXs7g39RA6ub9yRCUZXMEjYFhcTXgGGUVfQeD7wbUE1xwuj8w2YczK676MQJzeFHnQHJX1ELiXD1Xe1StKu",
  "key7": "4gU7E4zVpDV9bvdpdo9P4b9dJpLHv96FeQu6wSS6e5zcsYGok465jMFte4JveuUipK8HvLcyjdVjyiG3Z7EV2Q4c",
  "key8": "3FGyUxCF53ScsqhLYTREtx1Tik5HuTkFouiznm61CxhDemWherS7vLjfumCJTVFaJeEKLaTdZuj8VcB4LfVLcSzV",
  "key9": "2SHwnuaNP58KuRtccZkd7WC7SAwYa7vB1aEdbcdPJsjaz9x6Pjs8d3fTNUiuarHm8PmSaRJ3XNo9mh4dLEQB5Jhe",
  "key10": "2sUZFRz4ojSFuu5fQMwbTYPSBN2W6SmwtEZPqq6uTB9W7trLt9WCgDPbFjbivSjCm2LD4SXiqMRgU5QkCjWKtn3G",
  "key11": "4C8jL1SoS1A74cTjYiXojr1gBwXRS9FgdXpm2M8jHdnKSwGRck9W4HdTphLB6NiJdzq5UTZiQW6oCzJmjncG68qX",
  "key12": "4xq4x8tnmCknkRHHXGdZCQqdfGkBUXmuwJGYkcf4eMhRk6HgB6V4HvzzrocvJaZnvDe2CRY8QhMze7TAsZBF4WSz",
  "key13": "AB4k5RsMYpgquHg7B3b1nXaVCPr9eK91VpPfDTRbqFpnW3ZiM23g6XYkyb5Z3v6xpr8iEpsL9aK3zasF9dNKEop",
  "key14": "2WRQ3CKquSGGGWEDvWJFtSTAqEK7e21Fpmnu2campUkDHysMh81haY3r4NkUficSVspzvrPQWHP2QYhqK41q5UJT",
  "key15": "2k2AaMrYwnTk2VmKLjrUHsCsBRWfhSmTiFsGoKcDvNQU3Nh3WYr85LcTnZaCE5YkgjUN4y4q1p64CUt91UvZrPeP",
  "key16": "AU3dPGKULXdHBcX1fEzmYAUwg9sqSuayh5xNTXM8K1iD2jvf5EWomRXVvJZwXsmVFzqEkTKUf3ytXRc7FWbKVPn",
  "key17": "cbaPGAA3jyUZj7wW6N4zzWbGr6PdiJTeHmr7CR9QLnzmu8zR8beMJLyHF4A7q85vwLTYGCsismH1zfzYLCDJ1US",
  "key18": "4yJC4AsPL3CnYjuL3Q96nHCb1Qd2hYWRDZNtqscckVGuuN1NrZJSMeyVc234bpTENeoaCT7urAUBfDPhHng95V51",
  "key19": "4qsoSBNy4BiHhreGy3DEofVQrykkuG7Xe2FU2B7ERPoQ4Jz9EAonJy645T5Ph15tGkj7e9LUn4mC2qqi9QYJj1uw",
  "key20": "5RVzwHBpFb8UTb79Jc7M4JXjUykhqxwnXAuvd3gTGVpwbL7WZ36CKeptTZ4Lgt8JXD3xZJYpoc4eDSNYhJ25HXbD",
  "key21": "5eeVyWDpjEhhRbvmznpPSzJY9cF4pecTtsvPP5AFb31j6D5qCF1EbHJsGkcghUT48U1vbzcfm2QE5jaWLHEsZqHi",
  "key22": "527EvuKhD5jPfv1bbXR4WTRtUWgzDyawiYtbowq1Ue5Yh9yRYo5Rbrd8juKkRjzRfD8scRHQGk7pEpqHCkn41tAr",
  "key23": "4wPihjTEGVM3KK9EpZCYLysVBBdLEmhE5N4m9v5gn598NK8CinNdeQhNLGM9Xek4XgcXu6NQ9FwTGDrDT2T39cVD",
  "key24": "LGoQUAU9JKUwvtKw1fyK5x5BuLpZ8v1yQKKmrhzfr2GxNFLzerUknCJxR5FihgjGgmmcMps7pv9gVtymBmqo6SC",
  "key25": "27gRtEYtoNVwngbZowAd5LFjA5KSrsEX3NgUo4ebxNqkEB1a1mu6tRVmYfhpXGwoUANXuornQxBek4P1uosqLBuY",
  "key26": "VM15V4PsvPZKwGEkH9TQAi69omXzwiitzwmNtYb1FePCQFuqxsqyj2H7SdNruRC9JY7kaVLRpXZ7ktQsCExUf4S",
  "key27": "4tTGdBdpP41kGnQ9CC9oRd47rGM4kuLi8xRowfrYvJbyWNmnf7jqYTpFv5tpDnL83jwCq7h4M4x9hLnR79W4DwzF",
  "key28": "3rdp21bZbEvTcdKQTST3fpx9c85ADeWrZBhXrikv6fmq1AoEGjDApFD2YcMFYrCjuoWtGJxmMrra31HfMNKmHiUb",
  "key29": "5LL1X1KJUDmLkhztHf4cFr7PZyQsDNitE8LRjepDNKX29f4gcVUeE6sDSJXp88pswby1Wac3crwoKfSjLG2WqRgg",
  "key30": "5Gq8DbnL55Yq7QfVaBB9wSErQxDvuRqnSBAi8Ym7FWLt4psP16Y35DbjCND1QE9BoiLyKRLnLi4GuCw5QhaKwRNj",
  "key31": "4shdNLCJy19CmErPuCqZTCu1rGTnUDf7FCqAnU8tzoEAJ8p46gwEgagTLPCKed3yVGymbDxpH9um1hYUM7VL3b2w",
  "key32": "5RkQrNvvCKCiQVstzfNe4MBQP5hfgwRZeqLhEzemoJTbzVX68zwMm5LywJCpaVMCsfrenfWWsZDRCabvi62jSyfi",
  "key33": "2i5icDgRij7QDoJnJQjHYJaehekegiPAYG5KParGWSTkW2mcwAzR3CSRKF16e4cxUwbLVU148XQMiPm8aTQAB8nb",
  "key34": "4te2FLSCvm3zbBMJ6wCk9pcHqvpXfizpSLjdmJetaDYCqxLJm3FmhLYdH3RKpXpLEeh1qvgspkLvaHN1N1bfm1vz",
  "key35": "4NNHNVe5gGEQsnBTLafVg3GYjwoN79sKpKTJevZM81ti14aeH24pEKQoo9WDaCSJtkkfotaEYBt2eecihZsxRZCm",
  "key36": "3rd3CrzA2bWT8SHWGm7Gd27tzey1qUmUEYkthhUqJv4unqUweSiFG7WttyC9tcny6h4B5c9UjEER8cdPb6wpGMXs",
  "key37": "4Zypow57mjkiqqimNwiMCtvHLQ1vqQCinKSQHkBPCesKQEoowiZcztwELoAyC7LAQPXfnsZZkEg7KxXeR3DH9xD6",
  "key38": "dSiRekg6VVibkNt2F3kc8wewj5NjmsPtqD9UX4Knvy2BTXVVqZmmp9fEd5Nwvq2szcv5tnXnvG7by913txjNtLq",
  "key39": "3YuAsM6rJA7DHhWrj9sNtmWE1cbPUzXw1RNhuSHczbXvh1EPgxF1Mf7AEdGQKAz8Lh5gzx3dvGzLmQp5BYcnQLe5",
  "key40": "SjtbMGNFzmxXxG5utiJDi7pqeHB8vamkkYm3BQrskPL9d9kLbykD8qq2k5U2nME6it34nCFv1YM318FmXBS1qan",
  "key41": "nX7oH8zzDnYxBahFe4kX3N7gqNAKGdRUChbbMmdu9CcfrhEq2Rtzutc3QGRUVRtJiDCCcpZ8pakhLN6fintVgmR",
  "key42": "3JQ2LitK7pqVqUh214WsQp94v41gtZLKiQWpjR6gHddsPfhibCF6YDtvPW2qKMSFKvN1UPNbRthY38E3Wd7uVttD",
  "key43": "2JPzeawDoZuu3Kb2XemLjadG8LAbjVo6w6147hE45D3GvUsvjfSveFJDZ35otjrXC69GrkashsJCuQ3ps6chs8Zh",
  "key44": "5u4ZiVZ5EZj17951CuWXkgFgLWwxCM3jZmZGNE2JqBMG2agRSLujg11yX4RumVq95SLTKzRZSF1Tt28V4FDxvL43",
  "key45": "29vfuo4GNtoZv1R4qSmhcWfwC95t9wsoA4H2qYwv1yGJG8sVJ352J2d1p8wZgMcBz3ju3nveyVdAvFvab4bJker6",
  "key46": "5QMfhCq3CM8TH1DZ5vATtbkv5HQGxSttCWSeADvayjAqA7FDG5KwSD1EtmRkx1wHpPgpE3hCHWaVEoNRcMrzqRke",
  "key47": "38mLTWuVjeZViNmHMDusBkZv5khyaEViFe8iTvSEPBp2aKFtmFj1WMjwFHmHhhHNvyLL53mhqkb1GmKLmdmLiYYW",
  "key48": "2RyoC3NuYnVrjrpiuL4EGrS7mh8G8K3Lt4WPq8bS7paMzaiqKAVFo2okQ17Dnn8piiMVZiinoPrXGG33r1KmYrZ2"
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
