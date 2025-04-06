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
    "5e5fkUoKHz7iB1TSVWQwLiQugdxL9UfE3eUtj8uWi779AoCptKJ4obqWc4B9hQTTAsLVvWh9GtEWj2eNhH3YDFK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y3XzBrF7LD2ZBufavGoBjaFRZpnv3Wn5n9QAmNgwtpgLGtgMLiLjGDm8fhmRgBhQgnNspNJqNKCcAHbKSFtMyay",
  "key1": "5AW1ZEySEwXC2n4rxVgKfxgfqghuL4FZ6Gzc4Cr4y1GwjHMVRF8bpPQLjtqP5MebYZ76PscAq23Nbtszt7wNiMtu",
  "key2": "ffGrHCJYrYAwCG76TVX1vKApZGj6TaZThZF2yozxQdT5Md3AwPRtEv73pfMA846Sf3v7Aan3fnrcNWfp5jzJbda",
  "key3": "2pMofpBQxt9aYGu86QpJKyts5FLgYYRwp8uQCxwGLTdU5w9iM7bLuiMjvrsofgnUGfdEtkLRHVBLeNjEKMKXgANd",
  "key4": "54N2mty2AUETEriRPVehn1GZXAM2234vAiaPxHCuDNJSZ81xFVXsPzAszjZaYAgaHNw8BZVFJ7nU7subJ1hEz9us",
  "key5": "2zLGCtr4NPkx3dp9Asi7bj9HFDC8XvSJpiRSabwMkY5BUzenK5XydqCR7qBvDkVdG6pnFxKcWjv5KxgPV52JP9f7",
  "key6": "VPCMBQ7kfi5JEnJECiv3M6EZuTusj5vLsq6x7Wb7B3czBWPyc1UwXHiBSMBAC7EUK47RMRM1AdXz172Q6NSE9Nk",
  "key7": "2Cu57C1PZ8mq7JXtMUusz7jwhQtys6s1SPaudN9dDjtYVbNsq6DUZ5Fzf2YWXq5efAzhdyN19psVa3cD8mZgzJP7",
  "key8": "GPG8eUgpdjECVkfkP4SLCeattjcBNDo8PN2Emq9EJyC6unAA6wj8wJsBoUUE8DQhFdsaTH2izz3939iWbCcABTe",
  "key9": "2F2WYRJWat6Bh6bb1NqKVMeRxd4exunjfF5jGKEpaxynCidk7MBQMRER6UuPwWhPyYWDRXEvfhN2qWz2sMNhZQPU",
  "key10": "2jh9KWxeDeTmb9qmnbKhz7TKSVGtCJioDD9Qfr7DVgZWzMhJHvLZDfP1fUSjk9adH79seYUUN52FWDBipDBMjfQm",
  "key11": "2pBhUDTpCHbZyFZSGGRT7gGtPyT4c8J1hZJitUL3MtZrhcXM8qX6kQEVrKDpGHEM7TSZqs5FGmTegvJCwhU4DnMx",
  "key12": "pXf4NTqrg437aSfq2FcEpvFN3uqbqEqQ72dEh5ruKb3EfvMtuY9JzzeCUFrCkqSHosBFgQc84Jqbz2QvuDnVdD2",
  "key13": "4K4RmJDTt1A3UcbvZCKgb3jfcTjECiew7ivbyZrtBh23sW8LjnfRPK2hTxEqRKRXYrisPAUYWKVFoVEJdrPSGK2P",
  "key14": "44x6Q9umWwA3MQxjDGo4QAtBMFcUYwggqFS1HQEnCmc89C8C5TzYMGBQ26fHeY49RSDH6uGEQVczL7nx2yFQtwNk",
  "key15": "4ezvHuKuUNJz8EmGhuS3EbGy2r9GVeJJ6YZdtSzXT5svZr62jTtQsZPVnrfSko7JajJM5qcuQ7osfFqbuKwwWep2",
  "key16": "4GCkLpdafvMbNzscVDgGFVZC71TKcMroUCK73y7jLV4Gixtajf2168Q38DT91GoQ6CPYkeVHSBGzTX9vJNTe8G4h",
  "key17": "58rwifaFCbRs1Vvf1ENWdRwcNDGZXBx7AYwLE1MyA3m8MBfECcSuQpvCzbassoGiFoL9RTNqkKTrgeAHdB8ZMR7c",
  "key18": "4iKvpJN2kZJJ2VHTfJDBsmskTNgGKiYyLfsrk5nMfszv3RY46RFeR2QkD7AizFxpfx9QkwyLWUWSYnUmh6Cm7Vc",
  "key19": "5ShZfgCZAXDP2oxpe7eyBPqb5JtMZVXjRkc9aLrzLRsrJ7WVPp33FmhNyBqNThYefN9Zcrqq7mtPfb8hJ4nyJyLN",
  "key20": "3FsnRC8buoFvdAhZ2oEy12AKyudauHGm2bYbeEUXa8KmvvsCZUAfd2by9ogwaeNBFQDGAJeX7x4ntdqnDi6ZPQAo",
  "key21": "2fTHdqGKNFmhyJdeiZeLtpDDDbtSND9gDeG3TDLTh1e9dr4DUJejaW5BrBqTRaeyTEGCYc6H4TnmSZbaFuxyrhvP",
  "key22": "2bv3NB4vn3Ui4Do7DaazZC1Y9ruB9FJ4JXoH3EgdeU6UxuEXSaozUiw942JvBaYfB7xRctTmvcnqMxkHxoCwyftz",
  "key23": "5eowVMtAeSa2mEqbEarTp7QeJU5Tcj1xHQwXCTu4jL8E9N1ujDFaXgXouyrPF6qUY5FXKS9GWwz2Hnp1W12w7yNx",
  "key24": "5nbmDLViVxLb7V1RWE9vs8fV2jsnBEUtp8sRFwHjrpRUPgSht3eyScAW7KHx2WzNHCMdA5eaLQrS6w2tfjkUGLHQ",
  "key25": "5P1A3FH1o2MV4Lrn8AgNbDXk467mJocUJ1kfGpFAc5YQ92xQ3adA6DRwuHTtHNvY3tosWiMb82eP56Tbsi5SniwT",
  "key26": "3sUDXUeXftWTk7bEaTd7T3Xbv2npdjZY3E79G1AMtiyN79kZuJK4aDnBqrfFWxB2mizC3aHLFLXaM9MhBepimHGA",
  "key27": "5BQHyWjMNKqdhJj3m4TeVkx25CE262uhtYUr7tdqiEzGz7vCJ5cZZVqPVc36QzkhDLHGo9Xz5G519cifjZbo37o9",
  "key28": "2UBCJtxxmfwgYHYfvFRS21WCYiVqgkTfL8XkpUkWYYqTGKi9zi7s4rWLJXfFc78cS7yYHJmQ2TynSPrcwYzW6Gbg",
  "key29": "yi4H32fewL8njhzVWJy8HUeskzr2A2SwNFKuRae9vE5D7WGjDNKPnH2UVPvdMnhymM55odMQFx3WPdWFcSfb28k",
  "key30": "1NC6Aa49M67KyYX3LZ338JpJYgJ6i5XJhTHGGS63QJwzXuQRc6fWifs9GCkyGxXYfxqgRhpNogKL2A15AB5bAHC",
  "key31": "3BYoMp8Ds7VJrw5QozPazsEDD678qQYQMFg5gTtYEPUZrkdV5s3U7sYu43mABLHGrKJEBUf1Jv7jxahFSReF6wos",
  "key32": "3AN22U4hXyZqhG1veyb6tRot6JW7zx85U9rJXsbMpRQRrGkJup8wGtcUqB573TKdcwKdPCf1goPig2b7np6EE6Pp",
  "key33": "4QwtTfMn5U2oyLwv3YAECRFJbpp7kKPoVoxny62d9hf2TwyaXhrBZdDx8mzAkpR4wFZw55dNfu7HvchvLF5FLUzb",
  "key34": "2L6WVPfm9kFZdbpVk4yTT6cv17EQmuVCXV6FmYoaHqRuEiR5v9TdRu2dp5J9VKiQ16GnprJfCjdfmj3UnsrnDk69"
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
