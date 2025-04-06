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
    "58acnZDv5sLRoHR2YAhdJnChw7FLB5gJcQ5s3qRg51Rpihk3dxDLzt3og7ugd6cLL99VoqL197BWHD3ve9QGmJRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCzZMdMmMc1BgqX2sSz1WbuPWN3YV6xKfPgWrD5ZRvaygiFQqpyFeeb64jQRD1gdc7eaoudaFoht9XH4LggggjE",
  "key1": "2Rq79WuJqbSw4pV1ap5czkqtVZtKj5FUtQ1qR2MbWL6hgXhMfwnM4W1JnhL4Ta3FZgqaygKmKm2UV7HL7qDfxgBJ",
  "key2": "2Kgciw9d8bpPBz7gArqFWXzujhRdcz1uqqk5g98uFpGJFXdsdQnMV1Wx5RXuWKGcYns7z964CfWjLHBcZvN24xmB",
  "key3": "4dTmXfzguLGoMz9JXHVyR7mY2YDHsb5p2HLbrq4iCX6JVzRyBr6WvgDK8X1WaQcGVLZakam5T1qLygkrjFiNh3kk",
  "key4": "4CoJw5t1bdEvugsB2GjpHcVqVjT869ewLwEqoNvdcsPzp2R92exipM7iHooWHDz1sFCDaJE8fgPnqBXGyU2s6zoH",
  "key5": "3iz6tFkubmR3WzyYLSbAPkMXajPTnXFdh4hKAPGnKQNv9HXxAk4PbE9HCPvTQmgs1rFbGyvXE7CRhKqJc954fdf2",
  "key6": "47qEnLzndjMgafADh7XXF3TczvKHKQc1Vy33zbSkiMEsM8RpSoEAqpiKM5vqrUSnJvvnwbk6B4wpThnpp9Ra3A5j",
  "key7": "55bMejJP96hN64GNy4mzdh91GGPb5w5jJA1Eyt2vSUGLu7g2wabWXb1ec2sxu9uDcb7duasa4E2SUqCK4vmBnhqP",
  "key8": "3R1CszPDQW9Yvg7rq95DnAzGUX12q1F6ysAWggZ3bYrHjZi1sacuYesB3bcUsTVsTyfcrZz6ARYHb4fGTSYhpp4w",
  "key9": "5WHHFA2fSrDFmjr21o6ZC2AfALVQkRo5B5ws12QSBgWZ1wCU8YAbQShyZnFSgfJPm7EZnjJYW15xrw5SjoTeVdA7",
  "key10": "2KyUpyFBHu3o1kD16XUQRNxo1nyc9ejHbFGG8pkvuKdZSz3rAzTuFDGi8HeHgEy57UX5B9QF8rstUqz5TzEBiR14",
  "key11": "3TD9DPtZtApcEU3SrVSsm77ZuQyg4AGHedtzrYktGRKV3Zfoxf1KtfSbGKB6RD41DNfQZhrffG9VvRAK3RYoRnf6",
  "key12": "4NnNr8xaU2XUnTdofvQPejx1VVJxen8kJZCGdiKLS1e89SeV2yjBZLwqxT7fZBm2NW1v8jr5R5KMmcEbtNLgKPWG",
  "key13": "5hg2nGjbyWRscDp3kTn5D7zof8LdC2HELfk7bju41UNGycFfkQzNpzJ8kiaPfHftcWff3c1xwRW1JcxoQPT4fTcB",
  "key14": "MZWVsheRdgpDq9o9QBn55Hy4AkKVgRLBvztDv2p4BLKxf1FMjYvMhAPJcnGs3Lbga5PkHcsZ44xyugD4ayR6fpv",
  "key15": "2iYRoSPYLbu4K5QBAuVVjhebhawW8YcMMR6L6GZFZ5wq6zb9LQbFvURxhKLRdNjSyHoBsd4TkuQqy1tsLDcWrbnd",
  "key16": "3sQyeKjuuJ361Bt1xYEbkhzJUrmNHk1kYW7Yj8xGBM9psdFZTkTfwMgGCF9KhJoZ3KnNDiN4K5JcV8sNkwVCtp9m",
  "key17": "2xWUCRe3qAdVSZD6CSmpDi9dENKVMVSdEvhe4f9yyYqN1EG7EwrJyR8hXYoQSy8b18JTugtByx19ECXawhUUgiPt",
  "key18": "2TmfZJovcpZyYDZbuUGVV8rDRBh5edtKC3KtjnVBv5QDsVFVzJf8gK8Rqyb42JLCccfJCvt3y4Ytm1S4SaieWqrL",
  "key19": "GHVrAayBD7aJV45P2hcjwirFFdjU3xo7bkzoAmHrmFwyToKR3R2UfXEDn9wREdwaqy3erLhpuSrtQDDN8oDL8dw",
  "key20": "4AgJ33dCbsU14ByA8144Qo3u3ozzwXuNqaCFdFTQ3FoMNZQSw7Vv5VQNH7G3DYkNWCGrGWox8Ktnpio69bHw3Bca",
  "key21": "3DJi9FwCKWkPftEfWVLhnwjgqCxzAczEhg2bDno4c17GzdnWZD3JPvQKFBxMaxkH8BZWrkjESSEqAq8RH33z7Vjj",
  "key22": "35u53rpTSnfxjRzMxBLcpNMEuf5v59ZvHvx8pCdUoRuCc3vDJ6WE16qzd8KDVakiDPoMKBD5jHhUcbRQhccMgEh",
  "key23": "cyxc7BumHPfvFYMPqw24Xm53ZMBjWiRMuHQCgf8jikS147Y8rK874FBJndATw11vrYzBBj34yZ9hCeBaRfGwi9U",
  "key24": "4thi8egbFddzWMDupwpVxaieUy5tMQGPGVt8pra4aJ5LaxRrnLiBLp6rdPeVyMJtkvEVuxCBMp5iNHzMByF1t9Xq",
  "key25": "3ncRVP6m5jjFc8BAzoN5JzKYbZW1D41ezEQbvafp6yh16wv2zknzzGbVbtq6vE8BbqFr2AMBJuxKGcvz6dVHBwxb",
  "key26": "51HN8kHqhyx3LBiGFc2rdG65yZkso5yKGHbU25pRVDiRMo96RAPCesqFaNDy6fPsGxLy2DrRUryAqQJESHsz2PLf",
  "key27": "4jRxMHSETUBdfwGPUxSsdqrU76qbmwKJ8AWobje3sTbZ9bJB9EUD3BXupd3v7ZLkdEeh6nEpdDTHoUVofSs71TUr",
  "key28": "2K9Z5cZLDaFsEoDPr8GGthKnL1MVUiB9192iU3gHjXpkJjJM8LHk1MTConbczy74t92VaQk56QnP4rfCGnHAp1dR",
  "key29": "2QBvnK6vSey2s5oCYf7ApWvQNTs5EFTmxBs28yYrdDuPkA437TFfRnV85zqSBUFPEn3w6SGGRcmARSGsyEeqw1JY",
  "key30": "DVNPD1fsontuqvwoUw915jndhWaVHMBc95wqEiz1GRerhRAS99E9Yn5Vibjyah6BqLUBHjMB1Yk8nK3jsvhCJVL",
  "key31": "4SPUmj3HjWxB4wgUyYgwQZg2J65hrFzcwMC66262gU8KjHA1qfLEYT7qfmWpg2GW515vu3iirgvfmt2jtCuMLToF",
  "key32": "3iA9H73YkKmSMr4MWvTuhEGVFSYJQDHrtf1oebhkhAGLtxuaKHo9f3GC5uJ1Q3cPe87hEw5BuLyGzarg1bDdqzKm",
  "key33": "4qvJdkEMKFNNGCuF6z38fhB79ogYBjfT6SAo5ZAFduon9M2BrMrDTcv6nrJ1vx9mbpdXfBsAdzV6syiEnHvFhdkY",
  "key34": "4KHsSnC1XsMzfE91sEZeipPrM6C6tt1YtB92n7r4wdNGSbfyzesjcUkAemNT3JtUqQQNBuzaLssmdfEyFAwa7KdR",
  "key35": "65DvpUcHowrW5zLfwSoyuFvCkE4EMgpTYa3cNy2V7gpbcvke2ZhFFj6xZMR2FedGKXEHkKULdXaeQkZpVShbnr2q",
  "key36": "5PiGguD8PuevzrpurRZeX5xHytDBdtqU8TJBDjRz4geVNTFeQGNEThYuSQtSHuciwsRan2989qXgAFktBj216j7b",
  "key37": "hM8UeBSzmnVw28CzDrDzn7LkcfnMs9qvXyuq9SRX1FqJAxSPx5znxiNwrTjaQe6Rjr4NKSp8HvAABRwDFiufusk",
  "key38": "3yndh9NJ83bNyViwy3iUGyfCDDdXkT1y4RrNKiaYk8nYwFxA2BgfssaqfwzaXXySZfVQcNySZBBoTEjcA7uuNUNP",
  "key39": "4RA6MmYyGUoecuQ9gehXP1BWdDd2YMQ1o8iYS7XzXmYvMs1q8djbvdYhvVn3nuu5MggMFmqEH6ZUzcimEgdStHP2",
  "key40": "5KX52imCbpGn5mkAFsRtSQ3rMZ2knQ7v9sKG4YhJCiQ8LD6WUHRCTMUZdLWYyptVQwu1PXWjYSSkv9Q3zLXsptD9",
  "key41": "4CgB29U8WsX7zQFGjk3zn626Qd1UKpYPup7KWznnoEyWjVu5ADA2UZndNk7LcJeoeR6yLQFTgitZEzAkrdKWhUGn",
  "key42": "4hLjANwWWGX43bX9x7Rasp7hp25UmLvrB8vPzVgqfKR6V6hjGiDUYM8FxA3evZcoVG5BZm1jGaXWTAYeTGiTHdTm",
  "key43": "2wiujdfooRUhTZhJEyUsgBa9KrfaiVEmHgtVkmamw3AiecDdPJMiaU1sYRua9YAGLxokwcB65GMS5CaA3zPyPEn9"
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
