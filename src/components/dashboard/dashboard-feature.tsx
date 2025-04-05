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
    "2mkixpnGZnhJMTaxzQKCMpyj3o23pqCJxoQjHS2pn54t3tvKyw8j5GigK792KU1CUW9M2CNNMZbnwLsNd9opSvDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JBoaaRb3LfUp4ML6Sa2omPbM2EWagMEKQnaHFMLUwXgXMnNtJAdF6NpVkMbZ6fN3B9SdrWB2a6FpPX6kRfETLZR",
  "key1": "3n7pt7CNENQ8bV6PABDYzjbn2nuocF14oPLs5jVcPhvYdVCkkqJA74tYV1RBHJF3svBwCiTnURwm9qRfrz4vPFm",
  "key2": "2cz7JfzhrrndXPm1LjSAooJHKC7q12tPKm4bxs5MTXX2B9mkhNK8my1grpeaiUGFjZJTGYH4vP6Yv9oKCixYXisz",
  "key3": "4iznWc3dewEoEbUYvRRgjBETB5ESH3ojtoQ1m6MBxRFS4tmtiyHQYWnveeHH4vPsJ8vtCFDtPX7ufnmbnAm13cMw",
  "key4": "5cR7tbM9Pd1r1bBJ93D3unPs3QovuoKHktAs6KZMZRPAQyccVr2VxP4hgzRZWw8BBN6B4CXkzwtF9n6hq1gUgejH",
  "key5": "5SNT9SaLquhfCw22PsXeLNsziobd1pewCEfzkV4De37mTcQk83MRGiLWi9mGPMhXpBj83jASNpjWXWJUuKuuPhH4",
  "key6": "2yCGMJWHqhMtCZvTUAMDQUrdvTQBXpCFYtZkAwqnDhoY8k4f852xHHWAkiuB4Xd3svzSTUH6qq6y1dBTwH3EZyMV",
  "key7": "5zaeyjPMU2RmzTiVM8mph5EGahL9xtt2ikXkYFNctnWmkb8HGLGHciSg8M93iHh7NhXKC6PvA3UaC7TTD1ieRQrV",
  "key8": "2AhAq3KaTfWF7G2Z1u7QW9Xsz7fyq2RL8msLbB9C4HnQRyQTTsopngFgg3vxUMR75MPdgzLC7PgVnbPXj7VdrsH",
  "key9": "4gQAV4cyKMUD5mhRrwhujt3L6HspcFciqWPdmTSUQFBWUPUxG2qcPUaMqHKjVmdiRXYBM6CQWvDF7X9A5jUehcMT",
  "key10": "5nYmhGWnFAagYdkc6Pngs26p3tGHFhPDJhW4B4CD8pDuPVpUfU3F8ebF62ob7TS5r8xeQR6AA2ZTm2BiZZZLkTkw",
  "key11": "2WgtcTAWEH4So8gCvjEE8aQYL1BtJV61DaE9VkSEbzToAKXFzT3fGAW3EsfbYyCYLo8vSMp8EcGhToUY8aUkA3FV",
  "key12": "3UKcoLgF5nX43AYMuszpTuqJ1VNeCYVFCyfpkEvEdG9sEAFPt1tbpempn5VTaSmypXt7ckbL5PgqfJPZnQYUpj53",
  "key13": "2Vu69FvxTmP7qH6sCKuVKz8KrXKWxo7nGAMaUNQWSXDk1fh9eJC4wZSBVskfqhniwak4yTLUageKzx8radGX3uks",
  "key14": "57svQz35Cxrmejmzs5yZSkpXn3tn7b9us873ZRU28EYsRoPU4kLFFSzMq9GPD9FQLT1xZ7WBCSXJa4gFJYLuVENV",
  "key15": "ksEXwFzywKYyiqRa2QmhyYJpYQBmBLdCpVAJgchcc2UBgDzqxp51zvB1vyxADcNtq4VacckiLGskgpRHF94StLm",
  "key16": "2F2wNkrbCCFmwp12ShQnZKken8QvyhLWw3BTHXHJ1mTK2kJUkgQ1ThfgqtksoK5uR1URrb42ENaJuc6sMmAz6iZS",
  "key17": "2CRqtdDBzfwg5hsKBVh6oGUbx5166eUaPLMo5YDT2pGDT5jSbRRbnwmsLr6Zf6ozeHUNPWn7gwdQq2HV8CtuJp5z",
  "key18": "2jShQyEzo7BXTgWuD8B7QVQEVjThGN8V5TNcGRYJgou5rUmxcpL11oYnmnF85bisCyebippbLqaXERPVhHN67qF9",
  "key19": "3kbdsB6EbHUVnnL7gtJsrKdP4LewbRzChak7avr2d6TEE9W7caf5EJTDX4nWvrQXGLwtMQnuzhpcStYoM9EWF16c",
  "key20": "3satAo4f9jWaGBajuchuLFAvDL5n4dExdi3VLu4rKGsBNDf6E6myt5dDP6qkxvw77sousVPMQDLqseUbgeQtkH3u",
  "key21": "5pQe6F3MtdfMS2npCuY5TbkAr9ohjXnJxHkgCk9vSZsqFBbNzjQySCJS2SXQVWVaw7DTHeU2F41TBPho9VrmdKeZ",
  "key22": "5Y7tiLfdXBDPvSb832opAzuATx47ULJRjXSsuXdTsvNDxQswgJyZfRDnt55yEo2FhwhHqDvXz4WmSfVr2PKZmrvq",
  "key23": "4WgsLzSUrSaBxoVQWJAV9y9FmRXHtEWDw8E4kzaDgsQun55jf5izv9oEvNbk5dpfj72vmjNvqN2XGKefX5HWh1QB",
  "key24": "3zqpSsxVcCMk8gEGnUuMedA8LtDEqpzJcxUF5hH8cVQbirJyCxdinoTrrPNYXBqgJYDaBmWny1YhvRF2t6j5gpBh",
  "key25": "5LPSfGvGkV7pQsoQaLDg8MPsQbgLyGkv5BCoiNUF4JCuiP9RfpPoxbJhtRTvC9UTVrXUGUHGa9DuJCSRNMQvLbYG",
  "key26": "4bvDKrY3AiQ9LBb4nBPb8JaS17HMGaeTnJdaLApCBax73X8AsByZxrbvnzUwT79xjmon9TQpmQ6JHjam8LZ8RBmf",
  "key27": "38dqLcago7szDuPfP2233Mx9sPbmnQnaPhfBni8qHnSPyFvMjdEgn5JbWTmryVG3jyczEVdMbRzhyBVhyMDk1DqY",
  "key28": "B9myAJSoS3jmKSfgtkonvxPeDpshYYC3xYfoJQymFK24h5X4rEofQryWzYixMLv1uwW1dz2DSqbEGwQZPhtEtZ3",
  "key29": "5U4PtQmcR2w6QtFcNcZznNLGSiQNME1qfRM1SA3G7B65LDXJKHzHP7XRMxXr4SGtsSKXmEdgsmMbH5b2c8Yqvabu",
  "key30": "8KLjNJR4eE8F7NgLUBy6uNeMrLCG157d92HzuLEEgv56YsFjbVXKCFLFc5eQiWVEubB7i2FhYLyPuqXNooLTxjw",
  "key31": "5EphS4xGD2hy52Dim9CMJxF2u17Fns4QfDJKvhSwr4QsPfdzk3qV7v52LvpMMSpLd5F7JYevZGZGE2UVGMyn4XAQ",
  "key32": "4iAHQ47jrsv6B473v2jv4PnRokwjXBUd5Zo4cskvbfyLggnH8vSXJuBzCahfExjsAGSMBYxpbGKtaait6svCFK6B",
  "key33": "3esUqxujJABjp2rUtcDBtM4VqdMtGHGdbi4avVpRyBxA7M5TZbazMxirm2X12Wz8pbKZKax2w7uV9fG8Sa7RWRv8",
  "key34": "2ivhfHBGfjScb83Pgoe5KuryjKMgGtCa9iYUgQEwVxYQRYEZxKfU8VAu1gk38fK6bXhdzvAWuSEnecEKeKMakark",
  "key35": "5FATkat5kcZypbs7TPGCaHk9ZLGm7cHMZHFGzdZN7zXXixvv1hQoa6evhVkLAK4Fg5KaJcrmtqgsQkHcqd56bkTK",
  "key36": "2SBwXtkp6XmWriTvwRCczYW8GYd6ktcd5npQJUsYYRpQt6Mhf5UvktDqSMhLz8eqs6MsdSCJLqyvB5LeUnAsHFei",
  "key37": "5HmoMesteYZeJmCcC38PruEUf7ihyxQHXXhFWEUpR7BddgGP7bShuGQqGwKt9n7eoZ41HAZFyNbYt7prtNyeEHHd",
  "key38": "25fFaTG2ZtgkqCdW5qvH7RKqmU59Fd7CosawxQtV25sViwqNWDfnoVzeMMrvWhc5dTFwsf7HcRNPzsb1cQtkBdyF",
  "key39": "4dwqK9MHPw9zBdhAS97YD8kwLcBUQPNyZg6yroc39xtUrcNo6JesaLmUbsUpG2rQy8SoNWP1w1N5cLt8mis2MDg",
  "key40": "3UTpWD7TWDoyceCK841KuXn9MoJp5r4rut72DMkT3GZWZqtGmrRXt32X96ad3sAdu1iP5iUfZnRtbF4HZo346nff",
  "key41": "3nwCcEZJP5iPVGnzpZ9vFyV6Yk9c4Xojs4fegd4vSJHzhUhHvEr2PYFMNfrhX4SFkijPyxMDtKWTgaebCGLg6iUq",
  "key42": "4U5o5tZ9yZSxC5VeSXcyEt7ZcZshhmMa6cn2LyvweynsrEgeDL1PwNDd6eY82g711EdKp14fwrr39AQCkdw7SUs8",
  "key43": "3TBKYaNrAik2db74zk4xgFwqS9EBKMXeHLNiGjsYNx8YALAEYi8bFbazkAudowadkcdJq4fUiQUkqvZB5zuFwErB",
  "key44": "RW1aAPLetPWqw8rpKJcYjuahHWCX5MnkJfosPMWyKQQTLQav5xhEcWLg2UNSt96NXm1GwDaRxkJ25YrNVqeYzWU",
  "key45": "2LAEzwPJFziBQoa34jj2YRNsejge4cvZm4un28pvR8AwzdU9RDfQHrnR6rcYK5STTnDZZGpUdEcFFpkzq1Q9ZHcK",
  "key46": "Z5B9QbTpmJvmrW5fpoBu5QBSdgB4UN3QVxHNpZwDmFhKZcN5WRW9s2okWJ9BZggYzfvhtyLiiMjXr5yT1ERyUUZ",
  "key47": "65Y9QnzJhKBvCoNNfMhUUZ3G5Yw1XuC4kbUpbDRvGvi2tG9nA3ZXNn8dNcQ6azeAtJu4iGcqafh51Vd7fD3eHXib"
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
