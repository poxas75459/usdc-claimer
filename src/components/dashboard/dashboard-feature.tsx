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
    "3nUqSYxqQMLwqHpC3aa1y4Kv4qNZNv6P5zMuiAaRD2symLCd27VrZ8Tfwtp4YWuUCdB4nrxPiTs9qzFhDbxjwG57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nm5zq2yJWtmbtn32ABUhktPZ8SZwKQD1quk1rLKLn5hJ6qBAgjm2j6zdPpDPYzMszVzN8BbMEKCkcnD3GpjXt7H",
  "key1": "569d5JDpdpECW8xmUSyJ3Mz2Tr1Dq4DvrZ1ZqeuwYJoAThfCPaGq88ULdvBbbPdugTs1F2BcecceZuqra15uaP7b",
  "key2": "3pC2Furhwoxi4zz23EfniUuS5UJ9THCqhNJ1cByoHAadJnC62zLyUK6uZ7HL5vTRGf1Mf8Tuq14F2Hw6QcFuhJ4j",
  "key3": "4D3rm96NPjW552uEAKGVjyv3WZiofkZW9djLtRE5rV9njprKNnaD7gMYjshVQwsLtUtDMwjFPubyG4hyxCRFrJEk",
  "key4": "3YmpbF8ZSjxJR5AWhwngvermXQ1pZSa3XDm3Mz2Rh2436kqwiK65anCDKJDrwAyS3MvmPqrGVHVaF8jSjDUStomq",
  "key5": "332Pfgtahgo5fwnz2GVyyLzGF7JQcBcocM4KsZPQKEQVmeaPniYwSs11sRfPWthPopT6JJ7WA2khC49z2ys2fhzH",
  "key6": "5wPqzbzgeH1z2vu5HMv1w72dWcw9dM2DbPkwZ3MGNdKCU15YVGPnKKGZ63imaeMCqPsnWkDmDFWrVv1jckdku5Dz",
  "key7": "4f9G7csuBcx1zVn7DsNPfsmSTSF67NaLUMbYDGDm4M2DPT46KCeY4RjUPr3G6D4gMq1RY8ADipe5ZceC9cEK6ofT",
  "key8": "2Z5CaizHKrGnhHCtEfbwtgnSeedY5XzAor9wRDX9hdxyfp1u6XoByvYvjdsFLpK3wM1f4wx5i43tRN6HbJZk5G9",
  "key9": "3B4z3n722grBtGqkE1A9WnBqYPQ8gAxkB1LvyqM6DinV91PCitQFnM3VXPrLMLudkiN7NW8caxkorb2PpSmwoaJ4",
  "key10": "3r2SpQPDZ4QK9hFBzFWRR6d8xqZFXtT8UWJd387dgrQsueEHYMxLYW81Xnj6ocUuDvn55J6gZFp7qjBZS4JwXCwC",
  "key11": "4TAY48bhoS21z2nhZSbmTSMka4CHiv7bmXgJ68DBPqNEa1dW2sVD1rf8WtH7iNrFn2ruLEDQHdScja7jrgwYsev3",
  "key12": "3qW4AcsjEbmsjQGjG9RG8Abaq5NJpTXtpgS2dM7ZpuWkmd98x6KvzypyHyB8AwKrcgpXCx8UDA1vVzk1yMSv5VjV",
  "key13": "3aKzxWtqBLoDoM83P4yUAarmeVaoZmHrupvpyM7c1grvTR3e3nmbgC2TbKwYF6jrbAsRGZosHQoz1dHacgU23r6z",
  "key14": "4JyLJm4TmKBrc2f4EZcSBbNhGBLauH57j5dNPMG5ftmMAWEFGEjBjyeGUgmEB7DUoFrS2zk71uFXuMHvBBA1EPet",
  "key15": "PJans8fMzU1jSks3Nj5s63YgbjAfCiD82TFXmGUjJyPb6Vd53aMJ5eCj23VUZkzGZKnbme8MJF5dk96PP8pCQet",
  "key16": "2hd7ws614uPdxjv5npcjKE4c4wsXrX5jmpM3SRcCyvkb37awscVgcD6E1TrL6fTAQEEQ8LNwnELfqSzTXhqrmZfX",
  "key17": "xUS8CtMAN7hqjpA1s9T7B36d7aQKNjaGGjaDPSYcCsbh7SVYyLtbh9Cwmh6ngvwtkMtwBMqjYht8p2S1BbBqvz8",
  "key18": "cF6c4fBrqCNni5M7JuuLWGwq7kPSYXvq9hd1STP3omMuE3WvbXv7MbXbD2f3Mde6mPRpXg1gp6zNnMcFVTksqco",
  "key19": "zVpj6RurYXAXWcn9BKUREK8uxUaRmz9PwtmMsktaHxWXHKnc7jrC2iMYx92twHuBiGQk7UKwfcpk3mTLu71GARJ",
  "key20": "4RzmDb4ZbZaX1jDFpgzWJwcAxoZvUz1Hjd1HFZzCeZV8okxg4VZxc3HfMkZULKXXQCqDQ2uVnfeu1vSdGEapo18X",
  "key21": "dK93w1Fp75MfezvKhuYCmie1gXGyu83H1WpQEkNFmzPh3SUJ45ALci8UxP6itHqedPSb8GFaA9ZqysBj9Pub8gx",
  "key22": "5QbjMRBoW7JNPWndDKfc18YsPq18dQ4VgL5i5uyvxyCYFn5jbpbJytVbPNqLvmo239mQRSTeDWoPXU1DU4xscG6u",
  "key23": "2RYmhdUAggdQDYR9SZyQBpADBH6bnLyR6UHK5J4UFpNBFC8mwa8HdwBHcVcmkMkwm6WN73WujfNUHLc7hac3gEh8",
  "key24": "26CppoV2gJcAxfaVWuBpaA2dwynWmdiXffNw2WH7Xzbqp4xD326AaxTrZivJr95uwY7dQBvhVajNMBxU43vN26FU",
  "key25": "26jcAe3bDAKdLXdN9d75Ji8MjnwGYNqAWETxUWAoFnbbpJhFCwrxhR1fsKPzvoar3JkhybC4QkdfnDYv6CHLb41x",
  "key26": "w6h4eQ5uJ9u9vDkYAYPoMmTL2ikZYTwFkTLku18vc4o2wTLcYE6J8aMniJF1nc5j4iTrYcqqS1xEiLMZQ2Ncu76"
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
