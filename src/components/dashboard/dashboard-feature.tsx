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
    "2grrMwiuvz4bbKBWLkJWKZfpwqD7Ep3joaatjQs8k5qju6cZEPdt6WR2uu3HPAvjX5ZkjtRgZVdgr1CJgV8morM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KmscdN65vVv67AL5VutuyZNforas4eWMNCBWBFc4aYn2q7qYwVazo3L8YRx25ggtyTL1ZkGdFrt258gQugNFmV5",
  "key1": "2bEqCiUK5B3Pppepy6tsnRnaPxfpL3NvgFesEMeUA7tZhPWRbehoxjnKbe5z6w9yRzHvXu2YsSvnKQWdy7Y6YVMC",
  "key2": "2m5a7ZVs11VBuuQYTD2hpfZH4YCV4uFUuCAQQsihYZU8qkuxRG8xq3Ydg7TRz8vzMPL2vfV4z5CcEHwGgsoe3rZM",
  "key3": "2S5xoiVzQcAphtDR65Nnd8pb2TqPM1VY4CNKWyNyP27r6pzkbxxBpCBXebjtxuZc8cMjYwnPPQzfQvDLcuCpYB28",
  "key4": "4Ui8aUT4BWSESAVj5yDJKELW8WjCkJwDNqvDtS3yP48YzTVnxYFGkKNYKvLKho185cJMAS6NHGyyxcuzm1TVK3bi",
  "key5": "5b39Ts4LbDRphMV9wW3DJo9i6WaUHjTyB9BxVzXGytEXSjfyGrqF6xpxRoHupGZrHYie1if5XUBduhHi44x4UY1U",
  "key6": "324JwK3vomSA7WRKbJQsAx8DBfjn9KRFFX9o4AzcaemgDxvSzTwpC4WhJDEk3FRLpefUyznQhpG4zVxAqsFt2mFe",
  "key7": "4vXMYrBnQNREcSAeryk4pqDV2q5V23oZQwXVtjZ6gbYJYsSvBNGFzMQQQkZEeftF4RKpvtdQWDCQzrrfWgJNaHXs",
  "key8": "4gdot9xpHdHPHiWvHdcyNiNoJqEdgYBeW3W48GRmPu4bM1qyFYG4qVzhwRfKG3e55RYA62B3r3zTJnU4mz4ZorW1",
  "key9": "NjbcjKSffjLMshTpqw5ZgyuZu8BAiPzmo1tDiWkBJjiBSFakJJLUt9VLRAxgbJJCygkeJ1o5mPrAAFw7oWGpCLW",
  "key10": "64YzWUuSVdwNTZv23caN8khmRYKY47GyKbMz2XQparxARtnkcj6LoGbTqYDQv3zQGjoKEQGa9A6he6ngDWquZ2SC",
  "key11": "5maQgwn4MAj3tnc2fXCEyYegsW1kKqHUkctN9PQ8ae1cekLAu8kCeDBWwYzEpZDMPSiW2q35gWMChwcshmk5LtMQ",
  "key12": "4zmrE8DiMvYK5zZ7VH4ScYZmNErWb4XWBejtV1YDX6jAGQjX4D7bMUvUTLhW91huGkf21dG4DvE8v5dXUUXpa7Fo",
  "key13": "2ecvE1iFsU5DDMwzdCxFVzPUB1hZELWDfEFXrvnQyQRkF1JpPK449UoLeAqPX8BXVJGr7Zqvc2RhkYcV13bUjmdJ",
  "key14": "88GtrPoqbytv3ZQynL1a25xy3kMqLChDekUXeJdJggww9uRyGYdGCrK1KJNQz9Ux98rdY4PdKCNpzsHbHNeSvab",
  "key15": "3mG96hysJpL4ypxa4eCcGSG6PRET2CQK5AwGVNcgMkaNeP6irsStKK52EaHFQ5GboMABtJ2KKjfRKnE1Whs9faN9",
  "key16": "4XmuQY2pgctYvbBbrvtiQ2KoBvnNcwwg29S1LWRKVCWEuo213Pcnfat8iWWTvJ8tNXgtmmkct71DdW1HLyz4fx9x",
  "key17": "NsVwkCP8wd5wS8AVGsvYZocXGjLYWbHvAGQGdo2SFqTSpg3Na2hAeWQaYq37oFmDUvkvxPRo6VMtVgEwidftijs",
  "key18": "4smEVJiBsopewDZhiqgieR8jTSVPuRFZDBJ9LiZD4yAEH76pTRHp3FY14gk4tskWRPt9cEbsTsc9p3DL45FuyQ2i",
  "key19": "jP624QrHfEpZQYGBCNste1Ax8hxunMURTkjaCxhwHGEX3be2esfTUAQ5pshQQsx6SPLbt2M2peqotxgoXxPXeyb",
  "key20": "4fm47KUuPNxqf6HWcjk8JDjTt3JqMQaRTKceS4UBGHLJ219sRxh9k4hYLZqB33UyXrKCeSySsPsiYwA2qP9HrKwE",
  "key21": "3AMneV8V7ZJH4M94Fg5x3W6tzWxeXDRJyfM3vJi2EVsrcKbocW3YKPf5drsjKT13bmWPZUNrBJmiP9Esou8acV6f",
  "key22": "23XijVnvQBAxsFYveqcGA2ASYmiRqcLBqjefX9akLKRbrS5gFP3uhWsTTAfqXqCxvEkuh9tNJXC2eZQi9cxbJHmW",
  "key23": "5RgU99mujwzsaMSFmym6HHgurvQAGuXJjekU4T98ygG2eYwxi2NSEyXmnAF6ZMcEo6BJMQN6AAaYfF8PGGcBG2Cc",
  "key24": "4UghnF4tP18EeP4Xyvb2peYWzEoiFqiQZNzybazFa5dbZBtf3T7oyFZYuHdFCRNpt2JHewJDWhSLnngjJE4TwJhK",
  "key25": "nwkikAr3x7aFLRQnjRZdahet3pybfwWMJ9BhhthxvXxPPAMQTjEnLKEFyqgAw2G5CgUWk73pviTuos6Z5SJBmku",
  "key26": "nDGJK1Tz62BYkVgNrHgMCTegwZQr5voKnGJWxunKQceXxcJPhMFM8tgtqqhLnNAho886ykEgh3LoiKo8QVcPyNz",
  "key27": "dNyMbJzB9gHtuwbpUQYPpyvJxaQhBixWM8cr3447WJYZYRLBu7whSodQZ4NHMh9WWWyxQTusSwkmBuCY3EtF4so",
  "key28": "3oRbuq7Su3MquxJfvmwBEWk2GVjkVSShWGPbFMcJgT2WyinGKCEByDRXoTmBrG2YNE9JFhfGNUSKmViPNCdBEnT2",
  "key29": "sJmjYfT5Y6Q7jfzuTDkAUkhCiGWVY85oaaTBPqbAVjHe5G4RipbQ8GfayNtbATsA1dnL6eaBuuQxGsHxeRNmBqW",
  "key30": "53QHVFH8krRRb8ZagvN8rYiUridyKvEb3APqikafA2U8RrbeiuKKmHtYgzixxKYukHfmwyvRd3t4EGb4pqo2eikK"
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
