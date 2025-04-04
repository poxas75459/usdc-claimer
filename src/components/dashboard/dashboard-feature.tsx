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
    "5kHjSvwKSbwKAfNgPfd8Rn6hLzWPXQXKKYZi16gwTyNYNPRwx1HijJnat9AmoVZY3vvY4kCrg7MtXcpdQcMqLraY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8yTewYU2p1qFWXNTwcA5XwymJbtxpNv56iv6dSTynE7GEmYhmxHjcu3bo94z7uqAzEGrWesRWv6WLfMEskmxggr",
  "key1": "26MnXPRhGTTjLZ1sMw5UTddrFmLaGRZD7VdbskhWqnAJHzVw7Nhd8Xwe3Jr9Bd9t6Zgm8w6P1HxaAmqjmW9ehgke",
  "key2": "5cScUUv7um4gNQ41wypA1BgvKZpidBpUDUY5NPX9ZYicd85n3YNtwAV8TZEMgZHXSszBZktbSfxYBoaHJY8Fac81",
  "key3": "4NZt58hycCg7EbSoeLni94PcowydBK7cEAkAB2o98ecvXyijBDEtjLPf2YsCxHAtaicZpj9gFtCGjJZvvZjS8niU",
  "key4": "5j9oyqp9SQsX2iBhdzTnFKDMFZvtghN9Yix4XSyNXD99gZAhFB5cTzAEdMJHvNce7AmHNDCUk3DggU9P6MgYoMde",
  "key5": "2wCFkutpjCX37sVeHJD61qMq3qtEmKy3Y2YuadR49MU33S8QU2A7YaU8RbWLzYFtPBKzPqMY6R8isTv9bEQ8LdEc",
  "key6": "3S46y7beqj5w5K7Mthci5wR9XLycoKSS5ad7MJQTz3XC2AnKj1nbkFERfo1fDNsn4BbviqZfbPiwKVRVkozyQdC2",
  "key7": "5wXYH76LpkW69SuZUpi23WDJgQALDSTJcPRxh66hVywwHiEcke2FxGqCwPMJ1Y75KnHTrqcEueF3GRrAQMNZcamL",
  "key8": "4SNubHBhwmAbCg4LhjFfx8AvJhG7XVwYDbjrZZpx7qGuRHkdKPtb9LR4D8gvunRj1JQ8Hu9RjBLFRmCgqCCZmYcY",
  "key9": "2vGKT7j1gZ94kJL1AuTTqY56NQLPZUR1VVyydraQkCsPBsPmyBN2kPqknjPAbCBm3y2dp5DocG4HaNM7KUTHiGA7",
  "key10": "4m9kNdmvGrmbyDppmi71L72nEYe8m8mjEscWr3tCD9N9DQZfHaWc2wpLWuQJdRQ9ptF67vmUpMRohj7Th9Lssu45",
  "key11": "j5axBVFSL3HP3wrWpSF1qbr9XMMCmW7jM9uR1ty7ZEKtK6NmqAwNwouBLCvczDBv2PNWaaCFWKc6T3Wk6dTfgLv",
  "key12": "23ZDv4MC6Jpu5JtyYykVQmTaiJ7p2sJXTbWMCmAPrTxpVRXoJ4LxRaai38ddn1taURT3KDLKdDsv5QvrpzrtVd4b",
  "key13": "4abELFg9MCVyCqMhnhXBRgHWwo6ou2fidtXsY2AGzSXfw7WJUxNE5jNVL7WhPjNRc3hYrDUbborAdwjo4pc4FKPz",
  "key14": "528REXd2ctgMbMHnAXTh3v2mZqnjeq92KRPG553xWjSiVsVBfWP7UWeKst8yqwCAp9dFdxNLhRMyCSbCe8kXgG77",
  "key15": "32PCJkv51fFTEsefj24UCQcCLSo8Qa1M73eD65sLy69moJs2YnWQyUfpg3EF7KuA5MCoox1QvzJqe8Dsn3Y9rgo4",
  "key16": "3FXGKdjRpGgwGy5LgUfJaLgfdsfeXPS3mMNLeD6T82VcnvuucANuzpLfh8ZQp72Xz4p2noDwyvo7EQXSrwa1R6Ep",
  "key17": "51iSaT6CiTUawkBnMR2mhhubMt57uQwk7G6k66JnjVZPMNj81caX38Yd2cDZvzFu8ck15Cd1NNxfA8eYdq64vnP2",
  "key18": "QqbavRZzRrdFVEGtBDZ1TVowKkgBqacsoSB2srGXM8kpfCLYpK4YK3k8HKpWupByB2fxNhVNh5sq7jfhKpyX4yr",
  "key19": "3GgBKU82PitRSmLF9WiTCdHz7gjUVDt7yfa61yJM6jqdNznXVzFNFxZfxk9fGT28ZcFzPKKeq23v2dq8MWhRYd1V",
  "key20": "42JuHEVnKdJ8HiKccmBgnSgzoj5K7PEy5VfcayNusotq6uyQnVdkKdaL6MNBgTPgqRWzr9vy9X7Ah9FDyKigYEwy",
  "key21": "Uow4YsJ6VcCD5MzMfbwSjmpJak1wjdRpdJDK38A4casub5nVhxc5yBec4MS5m4aX23b6wRFnPc2Xccc6T8CAoMX",
  "key22": "5kioAz18V3w9a92ZAkpuQNGnTCw2uyEPMMhEfKa5gcnRLQCZih7gqpYm7Hh9K1XvbNS1FBcsvKPDG65Rgn73dGrA",
  "key23": "5powDcvQji4p65vRD7BPXHvfyQpPtX4ackADTd4QnAi1Y8fCAecYbrTCYsNLcYHZqLMYzAFuGskLX89fMPLqZQTL",
  "key24": "4RwqKBZ31Jddaa2HAJWTzrHqvHdsnYJXk4HG393nn2XXm1FQSMiuHfR2SKnpW7ttdNsGbdzXfFSzeY1H1EukYC5A",
  "key25": "3XssitGzEN7YoCTCFJnDQRXKWkraza32vFHC98zgPD7X4vEwdp9GiAqpjvVij5BSTVTh4cHN2nBdtowdrC5S9W7v",
  "key26": "5JTtnFgcZddpRTQ2yPAvvKUdLQzMP11uuzuzFUvVvGfLRDprYSRNuCw94SikSyUsWKM9HRCNbesW4YoPFbPvoyrn",
  "key27": "59ukXYAVbPztu7PDEngh6VZKJDzsNt4HQYeJTbWwePsxhyZRV1woTYQA6TTCuU9s98pydsoDuLVy1n5JuEfqLdbM",
  "key28": "363PBGQ5TEFLhgpSuPHWCqGQPuQULZwVAwS3UTTTwkMgU5mX2qVjrEaR75RBE6Ls6s9s7EPqeusKH2dEPzGQ4HSr",
  "key29": "5Kj47T5r3QLQL9aQs9eK8qKFqFFgwgDD1Na22ngoiJzMYnUWRzjvKrbguonY9doqaRYVPE7QZoYsLbiWWDpQ9LLw",
  "key30": "3rfMc7eQFY7uWVde41g4rJjYK3ww4Qcg3ztW2si9gRRffcajFcpccyF9tjCcZHU5Q176otxnQ34hXQ2gEc9wJhSa",
  "key31": "3hPxfCdPzerxu82Q4zLFeZjhxWTxQFpobnY2ZyXi6WhcXni6CNWttshHDn3hQj8wRm6kGMuN9b2iTygRvfiMWRda",
  "key32": "GP9vRZAK2iCtvrzBq93zt4dTpdvFEb13aCQZZAGGR1Ao4TmXJPEdn4Nv7ouuofircSPHjSBChxVT9WYSRXHDWrd",
  "key33": "34oYARFoyhFoB2JA9Rt8WDa9NGQ5YP2PisKurNCc7nu2NjJC4cRYGYn4AMcUJFCnBqZM1bN2FnAjY3xapiVdonLi",
  "key34": "5vHFLmjsTw7cHT2BmcAzuJQq7DePYWk23YkKuHRc776CMM4wELksKYH5FGVid2oM77kfXLFURP9P7e83Waj6JJRG",
  "key35": "eaaZSKTvTtiWJ2RjzaHBTunBaqWw9fJbJNprp8MB2RxDGqjZrg45Kgwb2yt2HYBseFexBrungsBu76s7Ly9SP1P",
  "key36": "3uQQUCe7khVvf3ucLfUZr6DJtAUsZCJUeMiBuFZ153Ys8NgopHDFHpzkDHiEG4LDeXUt4eKaDiK93PVCjo7cXmAy"
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
