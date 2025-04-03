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
    "5Ezt8vtMu8gPm5zgNBthHZL1NyUA6y2ZKj5jfwdxK51nrigPoJczHQXpn4g21j7Fb81gHtyRGpstwuvXcRE6Vdth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rtYLUyWYjYjz4mXErCDUhVgDhZNHuviLznD669m85mjUvN8LEZundCDFKNEaF5TD7Kqfh6VENy9JMETJ9aXoj6",
  "key1": "3EjGFdy9zvfX86yA8qiPZCfyDpJa7BD6drZUnPKVZfYjpGgaTRa9ZCaoosxuNKmT6BiYFQvyQavSNqkGvu6c7CN5",
  "key2": "3FCefhmt12it1zZMk3o5tiYaj2psVXbGa1tt87vq24FeSmSCMP9Wy8ScwYWW8tKY9sUsCQXgViP8qcYvBZZTUzpT",
  "key3": "2FSRjq861rXEFxRgLdpGbNPxxyokfDG7ZAyhM6iY2hr37nRMoeytDxxoefanaP4tZSs5udyPbocbdeoXfYHDSeHP",
  "key4": "2DMounZ47xMiJjpqzbXWC9SX1FuWm9P73TJShG21UzcEoAao3WWhzV97f8p2Hi6XbGggqXCbrwJuLicwVNRekaUP",
  "key5": "5YJMMbBz3FGFsaHHoH9Cii8ULToC7dKgf5r8EBgN4iY3APhwabhJMFo1MKSDZ3VBtT5L17pafydrT4DwNsNc5ffy",
  "key6": "62wVW8YcTNxUjQEoSdD39BmsoyYeHkwNt9ER3pW4vCLcMV1t4oM6XKtS3SreKnkd7rL6M7hpgSHCL1DssN13xjuQ",
  "key7": "5b3KCq6P7YNBUZtKNiwQstBnaKnUAiKCuvUV32LvQPcBBgv9HbNireb2SXK1gLZapeiFbPYsHNksJXvfSQC24koq",
  "key8": "4UF7q8rPzxzEdvUL4mtx8VMfaAsiES3WEtUZeHQpgKPKWujKhEqKdNniZrpM68qtXRg5818W1PSJ6hKUm9W1HXrN",
  "key9": "29VfiqUc8jxwCo5AWunQGv6ECF4RoB4cfBzpk4Nue3yEuzYkmQB241wacHN13CQn4AKWGZzKyistRJiNTxUr5vcQ",
  "key10": "4Bz3Mywkvb3da228AjVWwKNqciuZ3H9gAuUJw8bEn7ZUCQHVXMmDhRCymE9ALhaLk1B5kWWHDxPfiWs24zov4LUq",
  "key11": "5bXPnw1MLUkWwW6JHySMfTGcSsAKGa5B62RJguUxWWTLCPNaqR5U7GgtipyHvHs6oitrvPPc2Ds3Dy1UvvcotJ5b",
  "key12": "27u1FvPfCTPxBZs8YhD6nAGYfb2QdrYQCcuF5QRoD9j7BgLE7WmVFFEpEvpXaR1rJsh6oHRAkNWjzGS4oxnb91HV",
  "key13": "2EDnccVwF3VAin56VRdXGnmUV7SvZ9fd1ykioy5to22hWZuRfmC6Ry35NFCupAnXetZRHJeFtmZRBqoqvPATgkFM",
  "key14": "2uLjiYhNxi6Xf6hJzaujgGHUw7v4dFBtTxQCiSmqiLWNtLDDdaoBW77RVwA2Uye8tV7RPnVoQuQCLHxxkufDG4PW",
  "key15": "4yHJpM9zxp1qLij389gXqGPnEm4quzqZWGoyynAsMk2AhaEAaQsyYkroptFmEBPXRKX1vBUeh6YpkiXEvHhcS2cs",
  "key16": "4NhiCALA4ejW57ur41V62ard4fLtHor2ZcUvXNeBrWBiPWY9GCAkuKFyX8PQwWipb9zC6kb2VL5fv5DiZjiP52et",
  "key17": "48Q3WpQWUDx3HMWvCuGWTHLtAQLpjmJ4ys3zcuMgBjFGLV6yjHAySsNVLkkbmeHtmfvG1CcPiQD9tswNq2SWFyMC",
  "key18": "3CGbTnJYB7BaXapH5Ff37uUUYrsyHSWQHy4XQtzVHULXpWE77F6kvA3WysUGA1WjoUaHdq8oU3Ai9VXqXZxcJGE3",
  "key19": "uQfU5LWiJgQVzNvUwsjsTuntn3RNFm1dG34bbKgPrSQcKdhNBYn4FpePk9n6n3DgrHQracAbzku7w31dFrdcNZ4",
  "key20": "228t5ZDbjw2KBpTg6TrnWzgb5MfAf8NqyV5Y4tS7arztRFxxTRMdJmmZjm5UwdgMUAoJGNb3Ggrg9vLPAxexqCgY",
  "key21": "21Co7qnFj71YF9zu5oAx1sTMj2odFLuEG6HHdGWcFehKWnBGtDhEMyhzzaZ5uSS8D6wQNcAneJ519VbRbRWBWKNc",
  "key22": "3z5421Ufjf9iXWeWzb14PriRauU3n8vFKxRncomKEkdShU3TbcRJjdvurhUT22AkNKv9pDtRS9Aa5phjhFUoY7ms",
  "key23": "4kvsrY3XNkyWrBzDVodKLB6UpqNxUywSqaU4w1UPZH4TL6rTLMS5cJEQ3e6s9sNrKvQRfCvx6azvPhMZVWEgP17e",
  "key24": "2E6V4R2JoEt3yPwdbb2MgEk8qJaBAazqVUwRNJytfgWVPHNTfhUutMmmDrn2EsyxgqMFBc4CyzchfEUTo1wH46MW",
  "key25": "4Qb5xhTeKwnqj9qtjdmcCSNfynzra1iCZFp4mG5hUx5xXHbzPNiS4WumG2vB9qdQYCfFFtd6xtC7xA7ywrotwtGK",
  "key26": "2xnqUZmYzgvtA22pqq86GyM8D4EiAE7Zou6nJtamGaAjpRTchgntMqMzEg9S88ozu9JDHu8KTPN2M9Pa7Qp68i1N",
  "key27": "4XpR7og8Qo4fxaBd6LfeSjmFoKxAArFJdkXYgvVawgZSziBC7t4fgGsCUrfnzp1fAD8FmLmgBjJc1AXfN7ZakK7P",
  "key28": "2UnKW8fiAYP8G3C2JtcMpw5SsdzxyEjpDKTrjyTgdSGg68BmubSS4MrFKn85ve9AMPvi6GD6MruMe4ETzD7DJca"
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
