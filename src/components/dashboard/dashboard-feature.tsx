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
    "9Npc1y1u2UnJvjZA4DDSnzumpUjV486G55JuEfC313837Z1qsy8G8jbd4itpAKnGjo8AvnMSXpiuFZWwykqsMiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3SLWDmWgkS2jvd5ZawG2P6Dsk3MkMMpLwWXPYsRcFfuB1hAxyAJLGwXfibdFxjerXudVGw1nvU8o8wMnFWFPrE",
  "key1": "HcyXyMm3jnHa5AmtWDCoqy6kwhRZEGVwJz32jwUo1mBrVaR6hUC7nWoA1ZXJYATsACgBwxqydvRxkiTTjCcmXhh",
  "key2": "3Pd5ZLjK9NCu7JDGEdH4iWLbhk2UwBeXxQiP8ExjPJcyveL4xGdfMsLA496CasKSPsJvsbiVtMN8rqppM5mZ6FRB",
  "key3": "3Q1CC6g3Et8qea7uHZonWoHgh1CpCssyJ9pFLevM8j6XdF3QFujMY5NFT76vHCt3yvopi7VB3ndrjF3j2vWZtC1C",
  "key4": "5jbK8G8AAwcbo1L2pG1i4TToEorUEsPZ9q5xueNXJL2WsV8EGQ3rLJqnaiRE8AYjo2GoGHF6bRmfRcn8SSaCL3E2",
  "key5": "iBAcFwXY5TzjHABDXmDqKAFiPZwQjnDfPq32PmsMV2z1Gr3umXK5SEidQG8yoZ1qj9stPf66SfQ3uWJksHp8XBF",
  "key6": "2EXvVdJxx8Jkm9ktps9cax3c9HEm6wvS11GGXwbrgKPmQTeSbQzhSqrwW2zsKFhWebWRDwKBmJ3qvTBSdNhgYUMU",
  "key7": "2oJKKcmYdbzyzUhhX8cQBJAG95Aqq7A1gu19omMABX73qAvDcmi8dspwYe1GC8s6NPs2bJhc2kNHT4Vm2q1QANsb",
  "key8": "51Uy4Mv7h8ikjpD9jQBf6HmTVpaff9YHwJCKD9tAR4kxFN6GnnPqkb12onrJFHspCTWQcP8EEWhSdHSmErF2YnjX",
  "key9": "5qQPJbewXN6XbKSqSPjfcRs5ZXme8nyrav2qTqjSRa1g4s2TMigUJtaAQ7VRBGZrPMn6JNqHNyHCwKAu5wcGVhi2",
  "key10": "62kPMVSiiodZenLYAm9v4MShDJys1ZgjpAfY193YCFYVKaEoz4sAALiz9qboQ63fRMMtiD6Aa6bVQFnUT9Qichrn",
  "key11": "kZS5vA6vz2kvXGpQibuwDhLL7xHPictkoRx5gahcp2defRM9HobZVRa8Q5wboBLdJbXD9etLBJkE83pTJe9iZXH",
  "key12": "sADGTtGkFwF3hfxaeG3PJEK6QXQisffxzRFw2VmJwnequH3AqgNXbDXf8bGgxthZSLHs9Q2ZY46aYdFFZwMFvTy",
  "key13": "6512qmL6Qepuu8z9kk1TWTovzzWXjpHbwg1A35fkqdTJ5QjcYdqJsZwsMHRLDStwzh2GiySBVnz2jad1RjPx3Pyd",
  "key14": "3neNWZQMAyTEkv8nGuDm3fnidprrRr2x2chyUBAiyhzWGv8XVexyYTapfpQ1BPnMsbNC44EsVqTWQiPhVDw7Kcqg",
  "key15": "4nNXhNJ8ghjhTvZyoofCQ1fqk1PHahQkXXSyCP5NzeG9aCwQdT2RdQkiKeTFYH9RV9y5jWQBfuoG9g8L8aTgSsVx",
  "key16": "4U77kyXr91U7frJcHZCQLfEsqi6YyMPJxJLscHSNKQvaJVRRP16doTC27GYjjunjmfkpu1mNZoqjADNRD5XXioVt",
  "key17": "64rjwRpvfrDkYoQSZk8KzfBWfmyfH8e377kkqWiWEDWKUKCPpoeNNCzjZ16GpJCu33vKPoiGzotnZXA7qsYzpEFR",
  "key18": "3QXpC8A2xvrqxZAMPo786FtDqs88z6qbn8tihHwWgxP7P9EGLg3qfvLvYSwJtH1VagTKwbi4RmcJc1jJnmJQrzNx",
  "key19": "4g48gJofxzxA5mNy24VoLYt5NLWJ3oVdjWeUFdLP59ykvMRqA8KMiRGUbj6H7icoSUoaks9BYC1YbtdLs7c77Qar",
  "key20": "3UCLDJudrE1rmLzJdAWJW8XaucoxhmqXFdAqTaZcUyp4UcsKzxib86VWRncp6cr1V56kCNK6hY7P6ujMegS2YpTj",
  "key21": "5DRXFZDnHH3bUrZxhbkuewHNZvCcn3d3unM7SNbF3wshmtFYCTuimQEMU9QaaDBAoHg2SpcZtePdy83YWPmWgEDS",
  "key22": "3tDuhaAPKkDbtB4Q5ceUKxb2Md8u4U1gDoJH3bU7526D7kEK1EkVPQF2R3zhTwiGUsdqXJqfZ7F2dqrTwbC1gK5t",
  "key23": "5QaPm83Apz5xw6vJWeSgcH6aeXrsELdMsSpLM98ahsue9xRieG8eWtKqVqDhLhVF8VB6kardzgQVPNvBhJ8mCviB",
  "key24": "4RypotCMu97b2cRMKteYAKiNt4W4Sn3QzG7jK6BfF9nXLpPHd1nXSkgaLoPdRGyk5RiQjZVEzTtx6d3JsDAz8rTe",
  "key25": "5K5zR1kbK24yHyBSYrMVG19tbiWWM7eU15JpdzzN8p67LUqajmNHc7TC96VDRo4gmuU8DXyDZwgX1mKmGHWisqrB",
  "key26": "5LXi4xvgy2ZpEWrT2RtPEDfLdM1tTBZwKRgGB8svBnxH5gT35CyJAsP7Sj9NMaWYPi6D7yLustkPSXLJHPnKvwJi",
  "key27": "4oNZRJbJ4efRpNo31eCqWRAfv8vYgVg8Pg8BYzw2qm7oyk9RLXieAdnEWi1BGPACNHaDJ6n5b2Kg2t8mQAmWfZwy",
  "key28": "3vofcT479m4YYABEb2nCcksVmmvEJzAVEqYDEcRXSupiZi9M39zM5L2qGiSc5BDLDPmcZrJj19NjZzRiTA4CfQkJ",
  "key29": "2c6HRuKh86JpKuGQFgBesbdf4o7myigDaFpjHLPubgvfqNQgrSrHiMKjknAFErkn84dcFeVFjjjutYiisBozhysr",
  "key30": "3MNgRvyxwA5xMXaGGeMnteznHpfHKyeCPCvsuyvLDmn3qZeByRMPaMyiijHfyWnTiLuBwBZEL2nCLX2KEeLAHSq5",
  "key31": "4DR1vVSezWLUQwTeb4qFNno8RX2cajaB5F884Pmjf7gUBYcbccUHKbpZDvgwxXa1tuD2SmZieer25TQSzjdUS2Gj",
  "key32": "uetTCTUFM87De4XtuKjUwN2HVCRdmrLMQ9Wwq9r1XUc5qF6eeK4qmC1G7UvUkaSz9kqYgVS4FA3iP4tJkRg4hF5",
  "key33": "2tN3MVy827wc3GiivkJVBgDy6oYJiPis5EZKFPsULhuyw2DwBs2VdvWm14pP9rJyBt5mFo84o4zvw6ZzPCVpuDiT",
  "key34": "42r5dEjvC5L1vkQqaPLMqjFRXBttGAkVPnGg1cvzXwWtLckyHX6arRdp7DDeW1J8Ad3LRHqK6juVpUSaYAx7UNjb",
  "key35": "LMj7cBD24BZXx44MHU5vg3SMxFAdwnTmqAVEt4trB5cCKtR1aoaKxtGXfjsK9s9obbbAo1wRCdAFDXsGauyDM6E",
  "key36": "zm61hHjzayptn6hBva9zhp4bXtLtd6b1rsy5MFWdQF7m6cMWEzsabUqhgc8XvjKsHPwk7S8ThCh93gHgSC9TJVo",
  "key37": "63Rh6rPmysiUyBYzhUgg431rWpxvdRJKLy8ikQ84xqZ9CUX31ybQJVPX1qnUtRA9FDeuF1Z95BuMvYPCwHFPmLmh",
  "key38": "2PwwdxyoSKxV3uK63fGbdf7FVJmJxFaWpLWviRZbAD9MCgcmtVyzppWMAztqo1xbMiKepDP6VFyT7FduP6AS9Xib",
  "key39": "Tk4RcbpKkVLKHzS5NSwpKWcqh8ZF5xkzXV2jt51HmRJEBNNxh9Smn7qSPR5MWSmhUYP798WKnWtEGBwCqSgFwWU",
  "key40": "2uNF5fsMiSKGcKHuG2jcKw4q6j9SvxiLSzk8UzdwLPCk3TyLo9wJTXhwLHwgMDPqfXqpFKC3hGvtB8vf21K3KXJB",
  "key41": "66EzPAQbgM7T7cqXfTZ7xDgyqMfS1tm5kCuVFCvpyQSSci2gKhtjAwRCxkRHPZwtuTkPNfkkp2znXt7TxfvuwwY9",
  "key42": "eCAZJBF42r6Z1FyFkYfuX67daMfNkNm1Kv5zWFDBJf98kSVqfrcZq9Gckj3BSzkQu4nFwkRpYNc3iPHk2quJK32",
  "key43": "4Z4SJ5w8mKE3HryYiU3d31et9Y7qfP27H9AM7ukyw1ejdN1fyxYzrJfUJhMB3EqtXR4G9JbtpvNewVVoaREe2s1m",
  "key44": "3oKJrkfo6NCs57QKtLvpZQQ5jwMPkVJX3tWRvduiHzAtqXUeWLRb8iYBzo5C4ymBxybBQz3ZSvwYjVDD3UDnn7X7",
  "key45": "2GmqPtGmP3SfHiVqvz1PFzkUPC3gsPixs9cwmTnx2uRkxVpoWFstBsa9n5sJcetZ3yCbkq4SgkSTuJhV5cReTw63",
  "key46": "3dXoC69LypFTTKVJimwacbg7e88XBFr3V8yeEwwJdr4wDjrWTxeiENKA6348LDbXKsEGLGNim6AAcEFegMj6v96F",
  "key47": "2S69Uah67TxvADqG3w3W4p49XLPjBXe6f6ssVpPgirRH3sBYQiRAd2bSNfT2mTfbt41f1Z5P8u1oSKTSiuWuVKTM",
  "key48": "63ubtmivjZGhobVzQTjV4ttxbtyM5a4j1K9L4jHbuMP1hRrDWqpDKUyRCWGnaHQfN8d1d6nbMTmuffrYXFVBCNhC",
  "key49": "ScizKWwWVj6S1sEyyxZdqkfRnLpUnuJ2jVeqw7kAfnQ15J1qPKigp3C4acJCFVaNe4fCdxoa4Wwb4mTbfE71x6g"
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
