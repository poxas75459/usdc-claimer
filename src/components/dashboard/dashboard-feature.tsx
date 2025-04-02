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
    "56gZYzHJosRyAzmWbcGogVdUeq6vYeichXUvo6o87ws4K4NAc69o6cGkPxKAZpZd8qMn7Cr6nkkQzSDNMHiRD9yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ohigzzgvpb3vo1CRHTmnd9tMfWhWczK5JEyZsQuWC32ERMAENiRt52K4R5qQPMaJxk53JHuNc5RvnKyKXhMF4u",
  "key1": "3jqwRetuFqj24wBdKoRpyy6A2PN1Nxjnue7cqWR92TMmRYWmyQggpaoa4wPMNZ1EuWygTfE8cuT5jeVHZyLK1qRz",
  "key2": "5aWkqiCSs6u2USXRijF6PyCLXmQADPvrrc587bHRicbB3efemqcZAeVaKf73Ts5RuRxAeuTJUBUdyaKiPFhE9Gte",
  "key3": "5tA2AujzohdvVm9gtviJtswrrjpYbNqn1be1xaqSMj7VCW8eHNkY3AY5bJFQFLGv3TnTYMqd4dvVUbEunnEHatRw",
  "key4": "3s6UKCB1GrJWRkHznMg66uUkZm7DD1jndpp1LwWRMTjS1RrV3bdFCsxWX1488GfKAkRYKf6UMGP1iyv3CD8xKHUF",
  "key5": "3fi1gD4KZYbdmjTXzS5S8GQdDhR4FcwhbrhJQxsxckW3yMs1CaeCUjcEaQfNt6BXaGj1dV3hiAXkbdeXNoQnpdPi",
  "key6": "457KHBtqvQ3bdp4V6y424oGA2HizuoYJWe6qLbiLqvzAUBu7HrV6ZM6a5ekPu6xhBS5xxDvnAaXS3rjp4njx4yx9",
  "key7": "3vRb1eoYyqGdKQLKBUHNLhyXDyNvB7iibvZoZUyZxZbmHTU4X8BvZieMJsdhJse5od3hSgZ25kDA2jkZT3h73FBX",
  "key8": "569QXpnFE9YwBNxWXnbsPyUfw8pAo7kUEmScwakAMHpRXMmDW1tpPTe12buf1i41sHMDd87L3yvsBtLyVqia3bFL",
  "key9": "94iUCFQq8pJKkgddqat5jaXFEQtMaEbUURkxqR2NfdshbRRtdCwSawQmAKE4AfTQkCw3ZGVSVJgYhR6VnyPu9WM",
  "key10": "4i54pDYF7zPvh5iqnESpE6tNQPH8zTDnFAUkrwZskpX18dpC7tAdnsEdqcFyAiBcaFymimTRhA4jj7v8ew4waLjJ",
  "key11": "TGShu5K9c6KrK7dpw8qaFcU7KJJ8v8ViV7vY3gXbiA3bEx3PrpGrnfKtFuFCRSfHj7cdfXnFnnt4z3ygwruvjFV",
  "key12": "4paCZfY5Xmh4bzwg4q7bC9prPg2k9Pbnk8t1NQScMDA1VQcXx9WWyetGYYeWDwNMYDBdrFQk1V3vQwGQ2gU1j8sG",
  "key13": "55eCWh5K15RBaJCWpDCeP84GwS8HHLAUqK51x2yhS1VFJbSV6S4n7vYeWQGPosNntqjG5JejYnbmDx6crA2cZoHi",
  "key14": "7WujGk3FgWyigUxHBrbTj9BFr7n3VRFZAUezE9AqGuqLHcm7MRiDnAikZJP5ZU77KwFCNjS8tsLazwYCAXeeo7R",
  "key15": "35iVGvrBy6UvzkpKxRD4BYHTS11Cks9ZjjjmTV5boA6Kwp5eaD9Z19tgWswqWoW9Xctb7M2PPPvuFSyw6PQjG4oK",
  "key16": "4NAiyc1KYsMGE1XizPEpaFQuUfbbs12aqDkHodETxT4FnQ9iGvfhrVyZd8rtuKGxV7mVNugpZEA3X6K77xsP2hy9",
  "key17": "5gQJj3SRNKE8KuNM7b95DyffZR7HaZAL14H1GUqn3B5hT9eoC9ceLifsF3bzK6TWVXRMgaMKEhToEk4EvqqQbuSX",
  "key18": "2AKxZuaMy7SmWVa79VfcG1rh9a2wxFtRMpxcaHnaXZLWHCJ6QusUtyPjR8248HxUAeFpTEUt6M1cSnJwLws99BJV",
  "key19": "5pYhESZcCb3nVj7bHHq4bKD32SGVMvK4ikp3EFoG2BREzfZpPFY6kV3demEJaZbypR8jK1iTygY5WXk8YJ8Ppe8k",
  "key20": "7kpnQu1M83bAhuWdboHm6piv17ByEApY3h693MunWCTpC6WtZ8x9TzJXr3tPrkr16zYWZWY1hEvR3E2f3h9HcfK",
  "key21": "4kNBWCwPorh1znuDGtPcECoL1rUyxkZ3Ccj93o6sQPnJbzrgeTqL2ojsQ4r2MBv9iSpXwnGPVWs2Kr1WXEdMutG6",
  "key22": "DCAdtp553qEtn62HLrutMGEbtgwVFsmKnWwQBKwyEBWWr5HpoHjgyPEWwcxZCUHDsTWraqXdW6sdNGy5VAycmRf",
  "key23": "24VAPeemHLfHacGKQGeZNjdwqgU5X5eYdoSeEFLFi94QBniTLqd6kmdxVPt7ZW18tdqzrpHFRSDzxgKYAL4kHsHm",
  "key24": "2yGq7Ev2VdqJLTG93LE6qLrXvYvdZ9M7EHiXnFvbQw3m2DxNEiUj2Bb3vQ2urozWqECNgNMyDXuS7NGJBpkrpVCj",
  "key25": "gnr2JYFV8vi97mpxjUwE6qEwhiRnFkxakYvF9u9cDcGChQnAXVHS7td9q1ueSniXkJsJcjVx46w445Ce7pxgYMj",
  "key26": "59567WaWWMJzjJfszeCjuQbVPYk6sgDACtJZKTyYJsBA7k8efKowr7M6FfumHiJc6WCmwC9Sd9SzBRw6U59Gq8pH",
  "key27": "5M2BPDAWKctKGMuhabrx4XFx363AKqEaHMRU8WSVHyaM2mBVPo4wnVkwKALV2gthbBwH8uaQ3HiiiogiyXbDnVeN",
  "key28": "4gwSvuDWAqeVZafajndqYxkfEz7pCMfUNwZM35sDqBBo1m9yKMHBrJM1foWtVGgNnSPgiceVWEtz1jo3CBz1fMZ6",
  "key29": "3jdzGHQRNUNDAJto5XdR1qc7Q8QAhYrsyPkuyaEojQxXBtKN8FZajrDujBFWhZBhZd9gYpFhHreq4UbaaX8e7Kfu",
  "key30": "5FwocYTyHEZ7eqm1LLGRi96xmj2kEVWosF5bYMPnMtCDtzcxEZJ57k3dxPrUuBsDmvU3tKpyqegf4VtxrSD2ZzZP",
  "key31": "GhrWmShwTisU3BKupys56H9uHaA1Y7DdBAkWgYKfu7AhMdhNuFBBhs3byyQyu3LisGMrHcAy5xucu4g2CnR2dBA",
  "key32": "2dQgWXbngMo59Cbfffx774U572MkcWs1KSEY6MCSXTbBN33biXGWHz2HM8ipcqqEjz8sfkCoWFf2NRKdhFtD73S6"
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
