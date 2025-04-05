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
    "3HhnmPZEJBfYsxkxoQjV7f9Jprh5mrUxcqHUQq9Zs4J8ReWMN2dTfpJyox7XQ5Ycs8sMauaGkmht5SsYmHm4oGif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BWokqTAhEUyUioAGeRd1oGRmGe5kXmRfuMjo6k9Tk4USuEEjcKJ6P8ADspB5MWQ8zQw5472dwZk1Tfvn9dv7Jhz",
  "key1": "3ZtAqXbBDBnkRHAFWNrJnwX76oifyXyt9p21ksZqriNAvPpJuWAyyMbCxwPeNWAnahpaqsSVwV5nQKnVmQf84pcJ",
  "key2": "3YdQHxEHnPBzT7TPTSXtdk5G4ZGZVrHFD8jmhHvcY2M8uhbv2USbbJDuF4jEZ3Q4Rjtsnuz35yHoiM11KYjmNLhE",
  "key3": "i8Q1gFqx78jCm6XMfvJ9VKmtyHGGXsMzTfocA3wWH1SMDAG6uX64qro1sSWFcM8tbRZFKC8fd5vn1CusGhytzdR",
  "key4": "psVuqrBporZDnGwi4Vsgbqvf9ygWmBtQYvbeehJU6HTxX567ngJVV8fvPUS4B5Ds6iDii1GipT11W968ZB5rFhU",
  "key5": "2vMm727Jo4hMqRjnUvZfsdyqpz528o8jrBwKgHyyKJCvT7jSLbw6PmzjZA8TWDeBUuhSbuwXTnpP6gA1GJJ1zmUQ",
  "key6": "3fvdJHdqeHiJePeFgZuYNXzX88sC7KG8pZ1gmtgTZXobpZ96so8A4LB4yYL914xLDTJp9mW48HApgRcmtdBpyhLp",
  "key7": "3ua8qUM47AD7F4M1RSwFCxxqMr3p6qxJoayNziiAR1r3vy15Hn2TLA7VReUKJZoBQaRKPiRMYfwu1pEhmpT4jUHc",
  "key8": "5tb76hLt49LdBBMUaau6DPBPpFRzPN1nKUkemVArWyxdmf3N9uPQVpVBhLWmSeNGjhUurkKxg7MdmwSFB2iz6hvn",
  "key9": "5qnzcDuUZGVBLXr4WkuAQvmakHC4Hj14xL6YKaJFytHVC2ukswRS4odZ5Hk3sT5NwPiTNd9fLZwbrv6ZqTC43DyE",
  "key10": "5dfry4saEhVYSjh9LjiicF5mnerq5cvxt4RjWWYeViLde4TL14ugWw7AsSqsnno1bGHucb6iBDRY3jVTdBk1iDJ6",
  "key11": "2augrRjDTNPvX56PdumszzxbqihK9qUHkCmJM41DZQ7i3j1eHVfMEnvDkqgj37s3LA78itDFKNhspyoSK29FHahn",
  "key12": "3rVZ7eQ3SqaQTxYbFUMqQAeZeKvT3Q6jqwWTdLRJVdVSec9FueZkNjW4PYNujhvP133XP7ZCADu9xELYLpX1W4QN",
  "key13": "xxZcadsnbgxG7c5ocWHtpAkLEK9h2s7R4qios3UQYCGA3rAS26wosnekjF7ci2Bx92yJSmz1h9yccTUg3zY24DZ",
  "key14": "4rsB1Lbw5befCy4XURhDFuEYX8k81TndV9wEUGDjpdci9yBaGAhiNKw8emRDeFaK8Z8XXazG82FkXwMTQEY6McAZ",
  "key15": "GhvgfJHFshgKNDeTK4nsahP4PwnjHc8xJNEk1TQ1CnXTHX55PbzY5Hoc8rSVp8xbsDxVLZNQW562pL7GT4p5j2K",
  "key16": "4XUXXxR1TdZw7T1YFXtJonRJ5WBFP1UN77EoyNAw7NAA7gXTVYxBXzvsfqxtczjXFhEdAh8vLumhHn424V65wiAE",
  "key17": "469tJiSa1wZztZNM3QbVrzSWJWdbXiFr3FGdq8zmnC2GHDNgsfxFXfeHVbYgJP5AUAoJW1zy45TFeeXgSuxZbUfc",
  "key18": "5xj3FzGY8Myc7UnjjTC5obAguLwTApavBSdPDSaBNQvXUamsUVmnAeg2peYqyoCTMrLRa9bguHMEcXKYjrZmZmdU",
  "key19": "4vY3qzQwgAXo5PV3dqmk2prq5gm89MiLwP5d9sAueM6GKQqx3pdDjSVpwFCSXWUiTMrdu1LYxj6u1hwN5fmirqmU",
  "key20": "4FrapcRqw9BQFMQxjzH22MdqKvK568GrZMX5rmeo2q2TpLTMcUQR87LQQ4gcUMFE2cKzEfX3AzsQ8cmfYpSsSHeM",
  "key21": "5MpqSuQqbj2vb7i5J9Hvd1g6HAozmNRrg4XHuL4s4g4ajbXfBtP1Wq5CNp9de2DzJHKBgVfGJLaCHhxCifKqNnfd",
  "key22": "5rjGN4ni2jyAWSaSU5L6Fny2qbjZCrXznzpYY2A71xo7T8cXGGkuCakc41zf4KykpL9WB16uPZUkYGvhEgrAxjLc",
  "key23": "492JhbUZCbnys4a4xEwRW1CxaaCf44ByScqe2fKq5i6AKuuHAtkcPiW621J2zqpHRQ93851NNHcSchaRT296b5Qa",
  "key24": "2Pv94T2sQa3K8nsNRxFy7NCDk1YToVGsGiNWA4vYT1G1UvRJT1JdPXZCAJtpzWQeS1yLAKCiv4GZyayeVgahovUq",
  "key25": "66DVwpg8rpoZqBR3hnDHbrQGQfeNvuAvWWdjnLKbn9cP63vJ646mnMCsJCxyoJd7BabjAqDxtLzRweoBp8UJfPwP",
  "key26": "5JYMvvAJFagYVsfdne7zharSSVg12hfJPXFGGTGr7zpHz6ENP6edS12B7ae4QCujNsQfSEQQuDd7SaBFArK5VZ4S",
  "key27": "5hDk27F5kDq9GrDR4xrdSH6ia1xFFu2HDpCzGPL7hmh7gzLGwxD9AwzQwm2Y9tm6jbguAQACyr7yNUnVH5ysKwvx",
  "key28": "2EbBhTSXYiNPDcWthFRwWD5oFbVBxMLFqFNzESTSxHEJe1dsKzBsqg2mZ6tbtX6o9oEhx9vsboba3pPNYAo2nx1s",
  "key29": "3XLYZnExWwCQa72GzsB5RM8DPECWZc1GJZe75Ttwts4YtA126uRdajdpVhyeFEjYBuLhy5TLMv3mbopuVxcunbXx",
  "key30": "2NKMk8Z6inNZohsej14z7ejqAkGvmzLdv7ANLutPbV89BiydmGGyR6mSczah6qsWscHjfK6MWj2QDwCPbjwfZ6zF",
  "key31": "3ZpdvgT4d4SLXQm591DScSyCq35vzcD3wQtCdfE8FUyHKoHQBHjLZsNdhpqsjBq8Zwcu6YPqDsMvFQ9sVVrLZoBv",
  "key32": "3RgFkn8tVa49M3LPwNBMy5aBCsVnJ2o71drgrkTRMxWNJDaguwBegD5DuemrbC9whLS2L8ZeVqCu5bJmzPR8wfJY",
  "key33": "4YNtC3KLfEshuXdsjiU7Q5ryLD2dsQVaLbmpn36Q6svs1dkk7g62Xdnn7RvLt2Zs7Gar8tok3EoaBGSyWZfPugYz",
  "key34": "xKFxw25dSZKHFvkkJKBjD6iQontjgzpCbJE5a4gDSwethsZEEEjq8QKHZWsWfDkBSDkS35nD5yeUiZnbRxgav5Q",
  "key35": "5yzCgsp4iemuQsxgtrhpFWjKAaVwCK8tuDEEt4NsGtRAj9VuxNCvop8fnnBMGYHHJYq81SCcJi7bxjpWXQ4kAYN7"
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
