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
    "3XucM5WUTt98fVgNb4wdriZbwPaUzRPDEYHG93ii9Ckfvhyb7nYeZVriHtao1Ghd31H4iV78tHmqgLp5mccXgPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8biaJuC653rvMRK3qfT8DFULxy14XwA36esQjh1hFwu7qAfd1EFdo1oDq8gnPJU1eYGTS7oRCqhGvc686UYHYLQ",
  "key1": "4hYt1gRUativyKSPV21VqxUWj7zXzUa8FFeXKx7gRxdnDrL6TxtMXBBC2bN9zZp3EpJ7sHxnk2G9AJ9Uu88uLWzJ",
  "key2": "3r9nQL3X48Wo73soYFkvhLGaqbZ75EoEi4vKjQM3xxzBfXiafHrEvaDXwQDsx9iJAi8VfEozLvpomKHAK3CF1Mxo",
  "key3": "4CWCHBbE354bxCYerr3XJcABWTh1KmmazH17u5PniHZDdJD8c66B5pzgrYzbuGDiBYnipBg2PHDbDr71yCJ6HSu4",
  "key4": "2yJBungX9RWbQgyqhPKHfAKkpoG7mCj9GSAmtGatgKTEFGcSzAgdZP5AbCUg4FtstDTtuEBHpjGJHZBYumocWU2a",
  "key5": "4CkhnaZar355zhxhVopJyedZ1yGoDDi1gEdpLF4Vpgx4eEkC5kZ9QXU3Arb1UcppJLJoLTEMMHXkfwThphmbEGHB",
  "key6": "s2dnpLJh3f3cPetZRZvuahNh44amKo99jdXpPFRq3bPi1Zya6ZUaWV8ZJToUkp18cioECkSdygxQFixRi11W1K9",
  "key7": "5x1d4PTu8EABxuJad1Hyx7wYNrPSk1ihPLf4c41fZ7p298F4gjec4j4viAKpYQBQ7MPcBWtDK4UqJv3vQoReJgF2",
  "key8": "2e4mqTsPvTiscnamKLXUN5FU8HHZTNFJFJLpdpJ1jAf2qJ52qcBaWfEd8xpE4MMU56eW6B2Uia5Gr6nsGw1urAN7",
  "key9": "2M6zWEVFaizig8e4WnatNFEXMf3Ynn9MWv947kdELnrNFyYQM7zmr3VULVrJUFg1N67zTGy3dsTy9jwKYJj1jtbf",
  "key10": "4JeuZ1E53dKgEZvTNCJmuoSSdg6e8MNSfZGraT5QgpsZtYxJRY5LZdceSHLew6JSo7CTivECHSX8AKF6tKbsGUnE",
  "key11": "3K1M9Zwy9BHND4dxd7voWZqb7KmuJS9BmEep5ER1jk8nnet3PZweX7yGWkF7ryhcoNamTWLQZ8TutYbpU3ckgoSv",
  "key12": "3XUBVcJviZcq6WWM7jrktJa41vjegE4QfL1Ko4KvD1feFg6vkwNjrQqg68NqxtYXXf2fqSLuKF9K7eGmjoVzEBgR",
  "key13": "3KC7WNmCYwTME78JcQ7N6tN573Qn4weD4Py7qW3RGU6vqDp5oQFshZTo4Tazwpdx12RbJ4n1ogLaevKRqJi4ypnR",
  "key14": "aqEummMZZY7uLHHay5tnKEaCF3YAf2TuYNjGjwBLm2CjvLhrZP67Es3MQmi4Z35bZQGkPqhuJKp6qKD4pAB5vux",
  "key15": "uRVwUdR7QsqMEcR3t8UsYYAKeR1cqR4QagMVirJcZN1XAb2gabPQCW7npZMpJDWqqhF2TFucphEeiTRFJukpg8S",
  "key16": "QHthH5UAFS3unfUpSRErcwhPPuh4LPbKtundv6s4mfVicMeDUThRB4dsEjpARicRH6JrYLxoXpeGvXGj9PhZw7k",
  "key17": "2Pcyru5hapdRaiMb4ifC9PV9yg7kGGvvxKxTVwEyWvHVT1kr3iwRA5cFCzp2agcuAxYH3wBSbD9teCrUrFzQRvyU",
  "key18": "2mHLStDBzd9a7fTvBsVhGXdcQk8LjXKva3YCqvrSnNwYqayBD1Hj1YHCQPSc1LbYTMKZwg53GDBBtTLB4gNHjSHj",
  "key19": "27wYAPXPGg3VQTftgE5cxg8mVshaExTYgQXkR1qcr2fKo4iD8hDe6irPEV3aW5oyxYn3DQdpPsiedM29dr4qtPsb",
  "key20": "5VjSinZ4eBrdvq8msY7wiKzP7QcLS6YK3y94KNw7HSbHV3AzH6C5YaPsrBAR5URft3XhzPYmqj92xkMUbziwFAaL",
  "key21": "5ZJw12o8ZyGYpTx9CnmeUt97mLpWBUbsc97jJt9TfyoGRyQKnGbfqX5PWeX3UdmoejWfrS1V5kH2x5xXib4Zmd7F",
  "key22": "3n9uMTjrvaRk5vKJsZ3kzPWcBbU1FoTwAbr9dqHzhTkzsX5juA8dHvDDsr1xraHuQ4CMNczUf73ahJvDQmf3di7u",
  "key23": "2mBty3pLo5azPJ8mKQ4PBqhYeEFpzi3guMeGybBrjqZ3nGjJUawjD2kdiruxRtRpSKeky9JmW4Judn7XbYbjMcjj",
  "key24": "4iGdTdK5UncKAFKXZv5jTDsFaSRgnY8juAnLH4bjcJLUW7bCoTjHyVxJjFf6RTKw97qtFa51X51omv4NEKdzcdhw",
  "key25": "2aHiKiWvs1AJ4a4XH1b9ELcGue8DDr9guzLAXsc8gV3B29mW7zEz2z5zfSN5UvURUddZbd6bBNXjjMYSzmxvEHj3",
  "key26": "4usTJgMF59SXYAmuQKWAwhkiW3mPCLGJaH3cYGLiKPXNEj4J2PcuwY2cqtGYLSu7B8Va5M2A6LHar9gRWPWc22qB",
  "key27": "jgMQ9xGsKYU74zyGNpdK8vC1T51EbPXJA5egFxGKrwAYGpPXYfsS5Tbzo4rTnusfPZGVkLnLFSUAHTWEkVWc5n8",
  "key28": "bF4ujoSgA2Lz6fqJaKgeerb8BASucApaWa5h53sRptztiGwD22Vfc7kL3eKTJhEkdRumCdpnethQkEr8mh3Sk9L",
  "key29": "4eXmn4EuVvGVzsxhFrX8v93NJUfGy8fuk9U9a6uqhQVFU1rjJXvoeHCySgE5h4Y4MKuLSnNxjosaE1T15BM2V8Tv"
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
