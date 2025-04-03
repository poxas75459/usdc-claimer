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
    "5Pb5dWnUsAxwoYnu32AvPUdM2V2EZEnXvvtgLBQ5aGcYe5vJY6bujKBVqKPWivkYqv9p53CDFomfZ9CqmotYzLzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVsjpe6X1St5KykxPyGnxKwtfpM7rsPxChFmXK8QqRRXz6QwV5DZJTbU24v5pQWP4is6WVdMYUjPZst9qMNARPk",
  "key1": "4H6Nv6BA5X3qeVAGUaux5puj2xVkpKX6C7PHfRtM8jV6X7hdzwcfKpZh9cuA5U9Svk5xcNhYJiv8ZBe97SuJdNLg",
  "key2": "5XsxQXEcQ1ZEzKMSJMfxhTsbAffGcfjV9ai72sodQUFHeF8LTxcgQE5iajzhKUg2Z4mV3Dbm2sibMMkBQmyJLSdm",
  "key3": "4Y2dTyaYYVkZtpjHc1pqa2PNavxJprdrVAFPscuZnkRRF91eqTNUnb7sKJ8eoykrWCazJVKFwyJgkHGKtDaP8eq6",
  "key4": "2a8VxBnjSio9zWSHd5Z9jHABDESSuSNjx1UtxhPfjY7JFwBY6a6LE8QFjTQuMNTpcVjfMqYrfKKNd35ydJtUeRv4",
  "key5": "2AR8e6jNJmpoqJiCzyNDsYEE3PzmNSwEkP4AhBMyPfexPQHoGa9FKfGHUVy4JosJr51ouA1KNzTRMyTrYFAhLYQA",
  "key6": "3xU7Ju79jndjQ4Ji1FL8q6fB6x5FAomPyaTfKdnGXxsAyWS7QGxfruMDHANhuCce9sovQr6v1ft8tZP653hAQWiW",
  "key7": "G4zBVWYMbxLQCWjtto9jn8Zwb334iB7qfdVzEoBzTcLxLskc6xFiXJCWioqNnRHRqeqhZH9JC6FJXRXRMgkrRev",
  "key8": "4S5GyQsWbLutQBSZyveugyR7zbFbFNgwdSnaqnDephmNWZZMBbbxFGHHngpKrDr9D8NYDeTtcSQHNf5qoazXEdc6",
  "key9": "5ZKLVLxt2EvembYS343DVLS8HL3kAwKAJsmozkHrLQpuDPuo5dSykyTeVaCTXLsX7Ajw7KiHs89SyRTUjBcSFRxq",
  "key10": "3xVQDMRAEi63g4iVFfDYdAZoxmxNKzhXJBRG1oGhsdKJq4QVBG6PSZSQ4LrJByHZFa5BAThYM7DuJhmKHTBBek1",
  "key11": "2YLFEmBx5UN2yqeKA2pw2NcvCAVsbxyta7vge5zaWhAktQgR5BUr8QtUPFHph9K4Ujni6gVcCQ9jEd4bpx1Ef3tJ",
  "key12": "2yNU5WuSsmN8Y3SSDqCzzPB5fvKxQDxGGwHTjaVZPiYi1eRPQ8QfPcffvvE5tQvoVyKfhwMFedE8ki47qdgtkGoM",
  "key13": "2z8AmWYLa4KrF8DZUEh3T25sMsKjv4W3tH8NJQysPaJWXrdFZwKVTqjECH7ihV3Q77buDmkHx1eDVUxrKsCQns2F",
  "key14": "5K3FFBKPC97dE2uStZm1kMdjrJWdydJkfkEZVima5JMZUPCBxWYxuqGTZxHXd6xSfqpEVrTa6sUGhBxpPNBPsK4",
  "key15": "44mKxHUZppxMvqH2KeSCJWhqTR4Lf6Y96x1myXHKAoPU16kipphk9ZLGvGyeKH2LireNgqa3HByaaYFKQb2JRBC8",
  "key16": "5VJWJrwSEERu3EpGkmYJbmZDif3sj1sUnuhj9Ny7MNWWvntAtxQKmmxqTW4wJWMnuL4x6cBY2gMjU7oSoSknqYP8",
  "key17": "3FBpS33dFqAUUfc326erdaWhXihMef3amx2BkEaqJuHMPvBX2bjxdjFBFCU6jrmqbLgzWxDS3Ru1g7yQLXu2pQGx",
  "key18": "3Jjf8R4zrm7qrmej4VeJrRFMgeF8XVq5jq3caKbna7NrL5rB1z9q6iuhKbZXakEKaiErur158vengpAJ6MSJBwoA",
  "key19": "3ytpPZdv7CApjZs8gMMt7qNYrcsm5VvwRrLKdEDPhSYeZq65qvAH1a9iUcuTY1oQSeLpBqSTCQ2cgcThMAHQ7pvG",
  "key20": "4cviSjPCMpTWQYzFcvdnRyXmAeU2aEGhMVZxkjyz45LVMQJeNqu9PYo7LBJJqR9xLUfvwyKNx9EQJWiRwRJw9C4e",
  "key21": "3mxkcpNCsbxq86wbDcyaRSQLiSKNDTNKgSedTnCtJgpwN8gb74FAdmMvAtqRkKWFFLmTpK4UoK3zmc3k7CFQpRbE",
  "key22": "NCf6VEp8mui9CVjm3sxS6d9u6i7HhAoUyJFY5y3UFkSLgX3aKjiALZyjxuN9MHToGfyD527YC8BycgHhWiXAwQK",
  "key23": "4VYun2PuFaXKhaqbNEsVhyk1ddWosm7oNDEugxvGtQ5k3nXHGkdAAhTcCP8QizjG4zyDTuw21RKARsT2iU2y4UyK",
  "key24": "rDWSHiBdvbGY9wk4CRFc96JNZfGtRFENyrGDuxo6EwXgbTk5CosCadcM6vhLkuVYgLt96hgYsdyhHCmXA4gKoax",
  "key25": "3cny2nZjHgM9MaM7anuukBJpM7wNjaYFtG7wmmywf1o2Wg3afZwud5f5ofyUGugunf8bF85kS47ZavVA1QYq2CdT"
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
