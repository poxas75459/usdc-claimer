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
    "k591gDVyzABRepaHPjqHttQHHLs8XqpUf8c2kH6sqJSZKDRBuC6SrgMn5B85thTnvcc7Z9R2EeiWez6akji6ZUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d5P1NhvNxPf91mzfGoEVZejWLp5aCaAByxKdBjib2zGmC2unW98ZTUSZEz2z7rpoGGpNKNsA3x9RKKSQiLnxJD3",
  "key1": "5KhpJuDFgJths16p6jensnYbEfHGTyeyGejnKZmeQrMj7HFcJpAkyBetJWtVYrkSMAPuXQ6i7p3g7d55KRASVah2",
  "key2": "2PYj5fiBNDgf2Yi8cmoRDwaE9dNKY5LVe8yp6UfqyJCDxssV12a5JPbTDs44SLJiyqMgvLaxepcXqwa6UQWSWbLr",
  "key3": "33NfBUaes5TfP781dXEwQ1F5Y4wUBeGPNwqhANwHwvh925kdDho6Qi7ZDhj82hgdemDF3tx4ETkxzhbSuLxQduCZ",
  "key4": "2VoG2JbJtksPWWt4LuFgLCJEVD3G5HeWuiphjb9PH16ykXLNnkoBmhKZ9kSR5QwZ4JpZ6egZEqCdTmak16FmLLPK",
  "key5": "3fG4BwXBUeajtUdUGYjRsjro48a4tftV3aAZBMf1NoyHdWrcBq7Z4DJmaLcGAVhWnGCZUewnCo8fyYGquswUGwGY",
  "key6": "4zPUtZfMWyG3Bu8NQnw8fTbuVM2gDZeKpkjUrzbdoyMqYU4HbNvsSH8BTskjvQU5WqSmDWAXprdsSDT6hkjVg5vq",
  "key7": "4ChRi4SLf4JPkR1XBnLgjCcexfgrPRPGpzPwasDuq33ni8ksEU34pT9jhSboXmpM7ufrqGVbki9qmmWfapD52tcw",
  "key8": "2uL5DffvELVTkeS3NpxhZiBgwmX1KL3fTCAc8BkB8AUrgQGyUEec5KJYhKEXZ73AKAF6goFjdVEzeDiagi4mxznq",
  "key9": "3hcXT354ueuuUpwwgpHS2AzxQiTvWxrwxu1JX8DHSeXDWdeNJYdRPisrFU2UDr7hxN3wwdjaQYdu16dctPHQnF7Y",
  "key10": "5gSuiPQcdrzpNaRZqeztQApcmvitHiQkvLqaYAsXsuxgP16EcrUNEvUC1ugVSYcCTJ4cGPHnqTA5Kzgwreh9HXNg",
  "key11": "5jT3TqnXdx6h7phzHGTeL53oA28PZkQtLfoTkoyVCdrEXoHvW9AHVxu6qnZyLUdP2pSjyevzAoAeU4netAnr5hqV",
  "key12": "4vx3oUfBWJ7JeqUjNX765mNpmW9zvSX73NxmaKaFcrQc2WjUHJvpaP6qNPrc6NHMmAN6Q2nTvA25pymS34mSHq5C",
  "key13": "5UeLj4DCLCp3ND1AWrirPQzZE9gchymXMxUjCUZFq8fFid2bYcuHMs8KXVq8vPLv3cWvcZnvSJTXibhtThrPtX1q",
  "key14": "ERUgEzcus27GvxbFT2ZLr3v1YYJvKrxmtod8eFxHsXBeHC8ckTTezv5f3wtYPCruWihZ8LB8cyhEk3CpE4FF375",
  "key15": "2PmFRVu6sNN2XaMGMDTt4b2hRUzJw6vvGQQMZAJBpkNaTVEo9eXoMgaLMHeWtrpPxnY6S95KvH9HKFiqiRcht5AP",
  "key16": "29jpbTxrKsz7bx1pryofBz9ZhZ8ZNAYL1PQv1WWgJxPeHrEdLeiQw29arB2B9oyTH4JDooxRxoKEQ9bnSfXZWjUB",
  "key17": "48VH9zwwBsEXsxdHCbGxbgBPgpNXN2uJGR2D4G12AnXc4CY558e4gmu828ESwL2YknnfWdjbnKU4d7YHfyjQZuh1",
  "key18": "5cZyzsrcbQ6oLpKn1nSRCAWJAjb2kypg79qiT39iVPYpgx8twvqBMKPex3itnpR3iS39d12mM98euB9Bij48FLhS",
  "key19": "X9eq6aLsGHEedpe2SyeppXyesXkWbAthLwhcepvycRSdYXmQvC3qXYmpsfduVprB2HLcXxxidCo9T3QTafB2nSW",
  "key20": "6nQCC1eWVrZwFtxj9QyT14G2BLKWP83det888n5HbME1b9KeFNkH2rZT3fiAw281bokXCpjuJEP9tZfQWE6yUhQ",
  "key21": "2anE4QJM4ioVrEhE2gWUkDqKMpd2toiBW1zsxpPisodiXm69muEp2hQTZKAyWK5cHSDCZ5nS41G9YHpVvMUtuKgj",
  "key22": "2tM1Zho7CNFaM6fdJc1uLzfuZVcJFSFapcuNibqVwKvedbJbeacbLAMypmAQAYaEV9pDqFZ3dKKddWPdN2dRAVzt",
  "key23": "2EAb5zdumem6sTyYFANQx3oziDf6ZRHQrk5XMc9Zz31oMUCfHPNz7oynMmTAdAXabf9yrgYQsQ8ynV1Nq6ZQiLtV",
  "key24": "64hn2Df8pzzRQ2ryRQWsQECv9c11mhRRVEPzdEP7cc8oqqRvh3CFC4T9Qofm5rLxR3JjqSYxEnqrB4bYyYRWHRn1",
  "key25": "49DswkCon4X1E6yiCqpd4qmUY635oyG7kXcLJqxBH5itV6PuECWwRsUucbXyBAtE6apEVSUkXwVVPy1XXRASZz4R",
  "key26": "22reDHfHWg1NVy8FU6GHaS6padgJq4J65Cfp5XqAsUsSq1CUDGHR5uiva5YBcUEm6Pg1LYU8HNmAjKe6TCn5N61k",
  "key27": "5em52c5uHdkapMCXRofR6qjZiSCzTuxaLHbuz1Hw41Gu6WyAodL6ymhpgyYFeeeygb3PXM9zqKp3Lk6fgfqCPEt4",
  "key28": "2BRAgzJbYNxqmqMDQyoM8FmfFZABKJ9oZXzyx9nYSE82SGprRCLUj9gybhpNkzQNEU3Jbk1Kgv2n3k4jaDn4XPn6",
  "key29": "5mjVReHZETMRm5gfKGEQaHvVP7t6Dh1ep9VkXQfffxPiTgBmi1DRmgGMM9hMH7ZBNkXYd9cN3geByGCCKFxUVWu8",
  "key30": "47JrKPzqxJxwX7e8dWqqbs4VpHfxBEWwiKmXkZw6poaMiaXtqRWmAL7YL7YxFi3Mrx8MgZgbqcGuQndj5E16Yid8",
  "key31": "4d8efsxSAzAjkZjqXyk9um8N2fAvDVk6pHP4MR4H3NJ9SGXh4nCQLZxG2ksKZDUgdKfyTeEmFKdXkvqmLgHhLQxY",
  "key32": "3Ttiqv9cp5qpKTQaddPt8DUcUCoQ1e4tpirLDCduAGqWdQ38dWvL8mwkfSLBcGTa37bw1RfJdbkoppvfj3c5c5uf",
  "key33": "2HXR6imFuyX6wWz6MPQX24fQx3uRtw5bSqUacEDhpBo2XZBZxyufSrDKdvBDeEG7a94ULffCb13HJBe97Gr1LaV3",
  "key34": "38vJ6vu5oUiThwgjxpQsuTVYBxiXj48aVoV5QLg3tK77ME5KdCCM4SkozkKqUUpvxrjy2gy7THpmKZxH33QDc6yB",
  "key35": "EvDHGduYdgrc9wzSr9vMXWxZsxybD6Ep6ry1rN55aGHCGGakpD4rgSHHgBnHhHrc3vA2XjWBNpA7cSMbr9y998C",
  "key36": "5SF3zrzKWA3iaHBdveFfNDrBMcpiVSeWtpq56q8VpsubSdvxj39XNJk2mZ1zLBaiGe1s1aMQBsGJnHCwiAYU4Tuv",
  "key37": "2c4sYLYvwhtNi1hdDR5LwqAGY4LfYzAJZ7fx7Sm5YXsHaBtzfWwQcbZHaCc8YeMKDeUfeZc8izjhA7At9ahY99LL",
  "key38": "4LMqCmou9jkGCJ9Tzg7i1gmKWzt2xGfyzFcftnjz4sZEpYNW97bZpqpezTGRXNdYUrvmYT3SkdsEcasBFRJo5HVA",
  "key39": "4XCzx6RLMhCSoMarw7bCgFzQYHkwMBmToCuAksRHNU8W87doAb4Ls5H7nKX1YpWES9kDNeFWmEfGkC7i6cuZuwzU",
  "key40": "Z3P8t8T4JgiDXHCEW3jh6Z1VGKPFZTM2d5i1FM7zJgsxyYwHJbgUkWzLkUF4XdV9hqDFSwM6BCRcjoNhaVdiuwH",
  "key41": "5h41ZSmv8JFRG1Fmm317zD8y99cEsK3Kfyj5jT8YRdNr7C9ZJQHfVot3r7Gkb1JkKcRCqVGEoaZp3wGmzDPmW7Nw",
  "key42": "5PsLgY4kUD1GPbzpjLvT87kabLZEhw6pEyNhJRBxmJcUcbmR4vTBM8UQXsVQH7kZ2uuFrb2koatthBWMVuCgXXS8",
  "key43": "2DXqrRQti5d4vrQS5PEoZ4idqsqeRoZ6Za9jDkuXWNb6LPXu2568qZaNVQgtndWztVbxDvW1qXtXn6iiLc6xhwYH",
  "key44": "3Rvq1A4VeTVj6HMsLMysPQDmhH1QpjeXgbofD1AoKZfxG2S9MhkSXKFPaS5Fg3ULKksTi16EFEedSiTde5eqtfgE",
  "key45": "2j5M6Bfq8htmeRZWtRsXFuYupUwgHw4suuLZBMBGcqDqunFebCeZmxHX1n1pw5Xada3bfr153FgLEhXSccE7pgV2",
  "key46": "5gnimqLCxCqiDq7JSeaMR7K31skmv3btLqyGz6PxAdcZs98BF92U4RGX4avDk2dFeZnQdMSqz6MP8qqFFckvCXWa"
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
