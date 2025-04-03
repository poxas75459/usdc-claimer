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
    "nnw1XF2wp6PifBiahmjHDN5C469h1Da6YGEvJbR6CGs2p5aT29Xe6WP98cXUaCbjEYEzKfxEqEuFc5hYSwLu5PY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3caDmdWtKrmttLALpNSvPWWH5sEBuzx44pC5He9Wz829Yc7QM7KeoSwahvJ93Dd3Kwjb2yFzsGDwHJZ1cLBg5Gmv",
  "key1": "4wQGtcgyJG1UbnP6CHexPmhsgbNJmEKRTyB4ABVZtgttv6yPbT5CC3FsvuVjVBeQMRrpxhw1aeqgefLqPNoYcDF3",
  "key2": "3cy7XD8Z4x8crKxp5PKGHtHnY2f1LfsJ8h52gemBSgZnQ7yHZ5EVfiFrK1D1PdmXkhLwDnfQaLXPk94NJD7kyMPh",
  "key3": "uRQ3RV6HYbnRCLLcA21jLQKD1Z6DDSUx6ggujetR2hTzTDz7KegyzGJmrbL57FKV5cuPePAUVrFiAXs2UxvLrR1",
  "key4": "2uVpMMobmbzDjmPRxaBkzQ2RQeESKyF61EwHFvF622QbmjbeYZeJmyWjtLeLAWRWoP2c438H3ksAuuQvrrQ4G8mY",
  "key5": "2ivgmt7rabTCkbisksCDiFLzJ4w56LM8UVdNYgc3yqpRmpAwQHFLG3EAXo6bRwdBWNAuPZKmE2vQbfJoixvYU9tS",
  "key6": "EoARehQY7qtpYCZAroQPSENUx5KesMS7vqrbcdgeoA3TiiS57ZVzmryDQ5bEpZQ6KGughBk8pGhcHTJB8374kUm",
  "key7": "4uVG1jdNdAcUzDPA1uyKCqDH2Pswa7JwpMPtfGZ1HrFJnijrrzLeYFhzVrozDF7DyNaeXA635ANSCV8BR3kjuagd",
  "key8": "2kCi9n7CGnf894gnRr4zuVsmZHqsM5XzPTaxPaXt58cVNLfRSjGQG5mMQZsSYfA7L3RqxXQoKoajtTHkx36AtPEB",
  "key9": "4CHv6GfaACKEMrUnABhmpvvjXkvwpT9KVn9RhEyUiL6UciWcvJmEMnJ9UgFhhz5ymf785q6TWXarLgzPPoiexgoz",
  "key10": "53B5cNGVQgGmiFQEy6xuEcCwB2pEGQrTZawYWMVZY99mbMj1Y64go1ntUUFp9dVgqttWk7BogS2hmXTDbYCAkbNr",
  "key11": "Byw2CY9NNpFuDeY5s9j2hs8E7cw9HhF5jSZ6UBHk3gSeEdV7amDNzPjMDLk7emGdsD6x9mfX27t4FQeyHQ96GwR",
  "key12": "DS1RxXK42y8c7iDNGY5j7dfqVQ8uj286EQBeLWVCqcgQbFDhiqkZaMHHkXC2PgGDmh2QuKKqunY5Z7hNmCmGMFw",
  "key13": "64SkayzJEGrF5A4SHVC917Fj8TaHUZCdwg7n6yuBn6wPrr1KgcvvwePTKwyZnySoiP2g5noLEvM3Gnkgt6GtjNBp",
  "key14": "snsJKhT2hcMmVbeyYMUr3wVqRZsz1wzmZzDjKwuaahVbcVTVzyg9nFDW5XGDdQ9TAwuCqkKqRCaiBZNewx4nPgG",
  "key15": "27GP5tXhrqp8x4vpQh4N6mKuXpnTav5VqFaNzhqo6iZSXyjKsuXYx3XrRzK15BKaHdyFh6YcShmSXimjTVX98DUi",
  "key16": "5EhAJihtqpCsUtrm5ezLNyGKxj2YN4DEP6DLiaXv7Vfc3A6rXzML7oXEuw1T9YBAkNfApBioQRoKexmxzWM9cEs8",
  "key17": "5VZDuK4a534hFq6N1esydWCAYoXAhtyLF7qHK1o7TpyX5xiQhr5BXs2Z1UaRL3aVsWXTeUGdPvrSnpuicrgYaGDW",
  "key18": "4conQvx6JD4X9o82JaCtvjbQwZLk6bVUBqhpwWpYeHZtczrn4VSBNwtnLh5t7xvbC7zCUQqnoXHNGybWz3x7Mdj1",
  "key19": "2NDdQ6YxjL81AZReVp3ZC3SgcMb9F6TBfDzuMXUnM2rKe3cD6vSb54SJmEFcLjJUNwDNYY4MaWvSSK15p5QugMB4",
  "key20": "2Q7H6PhiCyGRKtL3HSfdFYAgngA13aj7wgBvkSxYDFxghqb2LGi3QC7QvyYWjEHgAFck1guSFkMGApjaBRU2zFEJ",
  "key21": "3LiTcmgJaccD1cCXCrVmZi2m51rZHdyeJ1tnTfhczvXP6ALDcicQya46ynqgYmHNGyS6SSWjdqmpKg9SEcfXiZvy",
  "key22": "3xECSoyrZLGF762XgRvbyULZfsmTzCLnaAFxD4YESHUSQdtGGhtNQphLTNBcanz1X8Hm4GsGwMtkPhkJHKA4qJRS",
  "key23": "BQWCyawzCN6egEoULfKv91LNn14fehN1TkGYHSEjJwDMABRN2yUWq4qj42FFhBfNNrBQ4bwC2cTMBojAddxyYAa",
  "key24": "4119Gkp5EaodMTJhLA6QEvcNgKaXiTidi947h9FdY1EXqMFpx6SPz7WmBGZiqF6XoPdLzvH9sQ2HsMBorTVzhQ62",
  "key25": "2HcRKZqJqspzjQuo5ZmXodewUnBR71Gr65mCP9YiG8Gyi5r6X7ihPzNvgNhLf7fqG1LU662EEowLamah2EhheTxE",
  "key26": "PAPt9zUVwYYbUrwnRf8MradFe28jkGxn2YMdFc4iM4jcv6vh2Zq7CURv1ktxdyqHPvQeC5bcwmtdQRKxaEytzkW",
  "key27": "448JoZ36WHta1bdu7RZMWtGD2QFq9BkYo7PiS1yBkkvJeAfHatmhsvzgphMgu2mK7yJPVR3ruyLiZ3zp2SanVyfX",
  "key28": "57rsS8dqkjdspWfRJzn7YycVYjgLrh7AQu3oiCuL2gTZcDdcYFizgDNDGeGWnxhofkW1vhZ4pznkemEtCotPv4V8",
  "key29": "UBYXsRJ7TTQqTviv575Ns4PwtbUJmqXp2X8eGCY5VKpSwmmVk8VFe1jKQtTy3c5s1Cc8ZpwKKvCQXxPUgC5xH1u",
  "key30": "57zestuGKZGXsUdf7N9PFxeTYrHkM8FJ6HYpt9jaPvgQevHGVk1xiMVhUMfqK41L3kDgdw5S5sz7sfKmDP46WSUj",
  "key31": "5jbTXacvakwRM59yuitQm15Q1H65GBpRUiJzCxfVGuf8mypzpqhDJZRcL2nRwPJi8H4X6NtnhbU6V2m73TdWYSoY",
  "key32": "3B1BjwS4hhQv2UnvikyGscMBP4ggvgpoUipNwob7UEKDjgSiTUY1ebEAPKP8Nk4dXgtrVGn1qa9RViyvKPeHffdv",
  "key33": "AQkyzkoMG1RT3ue6u9Vx75W1BXX9x6MK7zsMhLbB4aXCsmWaVRU1RQSwr4zvztvpBHJ3AohA3uLzfFUo8D5kavv",
  "key34": "8VUBcaa1bpLoXV4YYRnNrrK343NoJHrzD6eZw6M1oGiysdTK5fCQxCESfdUYfTMYqSYPSdivMBRzodHgzq86fhZ",
  "key35": "5xU12Sjsvx1VwCrwqkG5aoB8N9dcSJ9CJqRY8DWcmtfYEAyYqPpFGc1GJ21SakeTiLmfCCJmp2kMz3UMkfSU3QDE",
  "key36": "58ZSN53K28kuzDUqTwWevBJokDwQMv9MEsmGNgtu27d6qryArz7brUpvk6bGNJ4jxHLsBzhnWJRYGtnkSYh2pypP",
  "key37": "5ZcUgrddsvzFbUxNxHUHQuo92QchTJdphyg96Fpaq79VTgDGc7dWek7qs1kUUocLwQqoaknW3M6zZ6mM4NDLQWEn",
  "key38": "2CJDjYsM38cYDJ9aDSY45Bih1Bvr1srK5jtNoBoYWaRoQJ1DoDm4VztpS4wgQPqcAuk9Hcy5J8CQvzczKdBHtgfd"
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
