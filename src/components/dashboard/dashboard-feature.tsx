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
    "4LBTVRUvHNxtRNDFEAJEug1pJhLp61tScRDtkxU7QPeCyyfLVY1EGRhURofc4XsjBkAjB31XvqqisSXgVJVV96vG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hxXpK2eyqEBs5B4gQqBa1bMoaypjMpESjbh5hzrZMQH87z9YwG6VLES8vCTpuffksJxnbUDmy27tJvR3w46WuN",
  "key1": "3FDRrStwCEfUQJcRUcQGgk8SsDNPoLBDmg8fDv47iG6r3SAtrxYgQqNAyVTZcjVQ8YNApissX53BTnhvcU6Duaxa",
  "key2": "2mXwqpJSW3NcYRhhi7sTcvVJQd6xs6L7Mvqv4qwY9dj8LoQSqnkS9huU2UbB9Vtr4VeanY52UkG8dn6kV27HffF7",
  "key3": "3aVSoDYdVMxybt61yMkatyLm1H5CLkZNLmNuhHdLUTm7T621MnBqDjhGakGZ9UC7yL2TM7FdmTSTEsrLpGcmLSFt",
  "key4": "2xWscbsiHCJEC87fx9WSKSfFHexhqb65vdGcEya6TVFWxW6RBKbRebCgHYeGSUCRKcX9W8yDroAG7XifhFSdbXCZ",
  "key5": "TEp911EK24wM4RcUEFqyj4f4Dus1qub7FavxKmuDxXmGdEXyiXFvpATwWL5d43X7caqkpiG74MAsX5yH6q8pHLu",
  "key6": "qJory7A85jJhRLss74zziUv4boDxep6BRpxi2VKnXii3WdADy3nm2w7QbihpiSpR2AaUFgo2wssZ25szbLU4VDh",
  "key7": "26k5BmzSLC5wAzXjLWL3C1oFkNF9A3sRWKuJunwy5f6hJ98kxdsDLv4RNiH6jvKs11C4ayhdFp9UZFBKWmDvmrSg",
  "key8": "2dsNM2M6xRSm1hTBbohisoVvKFEAaNGxxAVyAY1aMcB6q4JSbNtzaNVeZ39hB95ybwDRc8ydCNeZg4ffJVZAPWjM",
  "key9": "3HhWB1JrsFnVMu1Ce4XgpGgnP1X2cXxronF9fzxcZRKKDP9mciJLBpAyEBNa72hX9R8rN5MpVyGAkM8kTBut5o51",
  "key10": "5SCrqD34UMVs46WM3nAbzTaKRzDxchnN2eFpGiKtX21iVvFHMbAe247DKPQKRAwHEVTQSdxMXYpzM35jmHYTVWEd",
  "key11": "h4vkJzgVKopA96VZeDN16fLbNxS9T6yAoToUoNqmysXJGaMSiy8oBjeve7rxxTDNRioBPFo1A97EYyNNvurexGH",
  "key12": "2CUH1EgycRYknKVYqt7AtPoTUdWS3xNmErf5gfQYdMkh3yVDLi61C9MaMB2Y2AGuy5s9T72Yu7UGiQwokCoWTTmA",
  "key13": "2o4UxbVrjLtrfqUHwsJ9wwLpVnz3qX9K8MqbAJRvTiZ6VxzV4L6QWwR7o5BjfTRYskM9hbc2aC2rZxmKzafsfAfj",
  "key14": "4k6UeSX3WkqaNMqanrzb8HpWrf47kZN7nxBY8fz9RZNYCRVe1aaW1hv9JoqH4ctHARoaGBwv28iFXd4BbrKiGiwb",
  "key15": "2PbKgFQ59DppxNcAv2u57K7ppytBUgHwJENecTa92Eczjd2p4Tvxi9XKTkvzbHXxnuBg6fqzneD3gfVnemJcVh3g",
  "key16": "7y6cqweu2hsAKqdefWrcL58nWc4mE4NadCM7vKuJWpdPWYgmQg5chYf83VBM4MViuarsxBS7FEqhKVcbaSsoh24",
  "key17": "5KRc4A1fRbtQRFcdoBmGJW2WnFfud76eXyxcuLDjMtqwp3GWEcRK1Mxr4NKSFfRP5WrRu8AUZusZ2vS92N3ZXEPv",
  "key18": "3WsFMDNnqLMGFtaxdyvn2oTV8zSG6yRrx1Dpojhi6CbbidKKnBjs8QQoakijZGUEnKdmV3e2Q5NXuNuLCgATGFiP",
  "key19": "4N9bkdk2u24wiChqxZQfdx87u61hXnXEuugzXdiufHVDUDbytHG4fFrQAZ6frktEN3zwCyu1tC2pdMx3zWmG85pp",
  "key20": "49TF5dBwz8aERSxi2deYysYB2687BeKXxYpHV5mKytb6okS2JkaiAPbybi3sGovyzAZb6ZAnV9bcRyqaue5akup9",
  "key21": "39ZYhh324yBkALJvveAs1pu4hB4xXTvEWUCqWP5AcuAqz35oksNLMGTF4JKC1t5Vy1v5iphw5177TXGhT1J3avEu",
  "key22": "5wdyaGg2ouz7XHEz5L2YWagh3kqinC5iFiyHnUr8DMzswV7Z7hA2qN8HFrcbZL8HgeutHKfTujCm71fmZdR9jZjA",
  "key23": "ZhLguqwMqjkEetZwYfnt77xuUN6YT4kR9GXKn2uPM21gTkPBUrNecujW3kUK3293Ka4xsxEZetv7GjcuF524eRb",
  "key24": "3GiUFvfftpe5GamdRBuLgHceeWECNrT7ZCLg2XcoU1od62s7L7xaLhtTDHXiK54RYVPtFi76SXrUAi68VDXwjmNg",
  "key25": "PkC8PCBLCQ2yinypViDbtvgDMZW2S2XUqXHRSmvnUr2HCXDS3KmomvqoAiBcv9fhkZvdg7GDy45Yu8tkKMBR4vW",
  "key26": "zCqRouuPpL5deX9PXLajCTesgUVMnXQxpPmt6GtrvtvVYt5SL8UfMAmVVjUPCe7an1uPLkjDuZ9ngKAXNCW9gTV",
  "key27": "2pq5eGtrrSbzRNtRRfjeB8ZwWK5JuoH62dPpUMduSQQkyFWMiZcvj5zaci2stm2HxyvsBsMDLhdKWBd5UxE81D5j",
  "key28": "45GYCinhi1GUmZL2m7n3rkSHRjG9zWmdqjbA9BvamdK3xtzj3sbKA7cedoZynPYBUeU9hR3uQ42ttbefPVfyt6DD",
  "key29": "3xVi3nmEcHt7jsd5xxUPtYUxDRxaVENuY8j7zRUXw8NWzQYDC3oznTvG9igQkWZ17nn1zhhKA3dQKUSiNASiHU7U",
  "key30": "373Z8hoMSAsGe6wbzYRjjn3R87xzjt1xJac8iAQtURA8nPtmhypvM9DVVpGESwmeAGPq1yWTQLPpF8CpXJRGMAkh",
  "key31": "2xuK7UTuRTwZBsaxMkjuT2GAZbaVUHNrP8CZYsXMMYTwpULX2T5eeuqQTrK2fZ26PHyDVZ95X7r8Zmc2MbjHZeK8",
  "key32": "52XyggUNu7FRM29NTEfs2pML5E9g7bNb5vqAhPaWWLLzpCZXceevbjg27aRzwceC6gHqmtzgai7hbHjZJ6D8kA8J",
  "key33": "4srNZb212LwUPWVap11kaR85VqbkGuXBM3FVuRp6sJjznqt72NvvKt4M7XQYyqGFfh7qByQjcghWgdzYgQPMzG4a",
  "key34": "2Qk7nH7Qz17MyMBBepsGefwYs1N57nRZCKzYp9Q3YkeZKQ9zxpAehx1LC7zwPYYF5bnk8BfNihfvwuuZ5pXb9PbN",
  "key35": "4v5AUFLUZiDUovU3wq6enbrB9sauu371QxvBgutjxzz1C5cqRmiFDk6m5PASsyDEy11WHgpbAdpDWqUjL7R6fQvs",
  "key36": "58Bc5jCPK7ctsaDmybqvqtWWqUJkuDAsd6RHFUFKW7ENQdtczpBL5Kev6x1XKQjETKDjMFQKrHCW2RyszHTfxVrT",
  "key37": "38V5oxnSMm4dBMETWJ56ENaH2qntRNmHHmMiJhyVbKpHwuAFqwSiJju8R3NgSioDt1NQT1rqbvypjpJBoHvWTQHu",
  "key38": "TXRU1jSGqqbP2ZhX49aM1JeU1NKCpJm8Mr3GeTdijDPEAAvDUfq9QiUExQearwLg8EUFZYxpJwHgoNNALgi1Hat",
  "key39": "2dcVT7kLwhDpHTbhQWeJ7LhbWzJ1YFq9piTF5yaAQQ3ZVtLgJZF4Lvefrp97DUvH2nisrqHtmpcqfAiUvjc6V7vK",
  "key40": "4cRm7MajWrFwauwBo7V9om4hpZSLhUaXwLyh9dzRvVXknPZegLqa6pWZhWcThpk6q5PqZqd1g1eokBgWxqBfwbQ6",
  "key41": "q1eAqWvrHigdjTT7XyUjLVRwHyUJsy8VZDwhtVBQyvZxzduockrEqPzRx7hvhVjEzZswfXyYf3auoM2k2gDbX7f",
  "key42": "5tTPXVjQHTG6y8Tyx8j4ZSvNwijeSSHVyfvxRm7SqUbQn5JTgfibgwdtSBZ8xzgp8TLcVqzkZcbmG6tT3mV1e3Mm"
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
