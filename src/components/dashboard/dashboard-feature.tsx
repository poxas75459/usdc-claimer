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
    "2hkTDv9AVJwhnDah1segkazTPTmoaRAXfSojM7GFvBUbX9PV8r3Lc7hYAXhD7qh5wJs5hQcuDQWUr9ytAxbDfptf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ZVnL7kjZnFghf76WMFrpejbXUK4fAZ1Z8Um1uVSNRn6xQueEuHxiFRUbdyZqvxPyQBdbTDtHSFQVmp8xjJETN6",
  "key1": "MFLY6tqngrPq5TDhJnPFRri9tEMowedVoCxHxDDbc8UBHS3r1TJ1BCBL2RBsjDAMiTBz6YRPaMgJmWsAjAiNUvs",
  "key2": "nstX7fiSXG7ewrtDyyXCr9HxphzqLm9y24u1hULeUaJWGD6minMkSr3RJEnRaur8q7fwtbzWy9fVUkCohwu5EwG",
  "key3": "514zmVdDHfPcypDnkoDJjET1xXYvZiZqsKZddvNhB7RNvGHBj38xPaC3LKwSFqDwFceyys4gjgH95QpCwdfbeQdC",
  "key4": "4kUdgoaDCQ8DAgNbUaBXdCfCp7GQivFH2EHKALfZbNTVSMxZrojNvkNyBW11DqRjbWCrVfxusUmAUSw8bWymQwjv",
  "key5": "3Pd6nxSrYgRTAnZBxFphwhsbPhj56b7tfcS7x2fkqh8TTk6LmshfF1EuL3uqFbyssLbiWWPxD3cd7hZH8TP1FAem",
  "key6": "4NUCjMrCoZVsJU2pXzECp5LYxyi4VB4EY4W6SzLmMy9dy9noLWN2JxfsbGFuuCwXPaGoXzPv6NVyuwmZckmUxMfK",
  "key7": "2bD9oYrjtqAxHCc3KJeNxbHnhCooPbqpjTrRLfJX1FpcLGdSxQTiG3FsNGYXtAyQLHBQxKXBgvYSmTZGrYcfSz7s",
  "key8": "5Q9kZhEYHzMo1wxJPKp22wEgRtvRkpFKNKBsHRWeXPjWhsXu6Mf4X76QwqSL9CENuxpWEQaQJpz3MnMTVdoWzmSe",
  "key9": "2a2BEFCC6RapFqFu9P1s56CWC57TTcihvz2ZntrrZXXzzZ2v7SwG64WcZf1CneqeGssQgseaj3WyEG3duhmgQWJB",
  "key10": "3uUZWEGfuPSFUv3KZ9UXVo6sGh8at469oW8sn8x6q7TBrLd2reYVTPR46qgbWPBowGGMzW7DibFBgBHp7gFe79vp",
  "key11": "5sL9a7SLVn6Z23XVzCWtfQjA1PaxW9yv6u5QDTbvwLixNXNBqdB81jadpwkvgWoG8aUr65RabKAjCQAWGr65m5B1",
  "key12": "2jXpHoiZcoeQsBYU6ZQUESGU4swh4GBSujBF9KL4Drc6V37HKw4rxwwtn927e9Qa6bMyCbgAKJvxbdnoTeBNZ7wC",
  "key13": "5DzGkw8fu8zTSyTXmg97RveS7mzRBxSoWsQZbng2uu6rgK55zCydhwyXqSVk3ctxqweAwFJjui46wHe9Y8vUKKEU",
  "key14": "wpUbYDnmtRexGme5FAhbnzi2mc8CsqST3HnK2CtUSGP81e2v62NhotwPtzgL8UBdhmv8HDs7NkCbZ9tH9rG2dNk",
  "key15": "4WKm35LxWsEtbxEfdaNVP9RWSUqtvGPqRL8qtLxwMR7mRdPAkzv2bVXfcRCqPD6HnCo9uGWwTugC5G5vg8JHrTBY",
  "key16": "gdDX4tT7wJVQohyPLZFMthdporY9PwSdzYQVhyTsvQiNFw5R6z5v6wo5ivcSKPBRGf6vMw5BTQfYBuxWB3CyixD",
  "key17": "3HFNPWAvTjyBGjF43DuMQTSjGRDjhcBQTe9Fzm2vx2PrtQYUoLRwjZsk3nwccMCjdhm1GYxPs54AwmkEDkU9SCV8",
  "key18": "5fxZgGcL8pYR1btrwBfJtjQPrXqS91TJCJfWCTWJq8uRUpuemc2Pwkw4qnA6QSEGo7WYWx8V8rUpZvRBYhCJNXz9",
  "key19": "3MSDxk4yo3aVkbocFjrTsK5xv7VQE2joHLHhrMQ7nciFcqUv3zRyk8czeVdey4sZ19GKYRwiHBFvC8qB8THyvK8Y",
  "key20": "xe4VC1LDbJEbdMsCTXaBaJi6J4HHS3VckeBjRzHe6xTtq7ATjnoqw3YjSc9T59uzeLEhNUR7vC7zo27fzWq6Gck",
  "key21": "64aWLnUjMvSbb6Qdcy2MeUe8te1kJVuzULe49f3sa9YtFw4y6wsLhP73SRMn5AuzxebmNcRC64v9mLKP9qi3Kpb7",
  "key22": "2UoZhsiCrcRd81phXJXEzbxHYsnDwGT2MmLJqAkrEnj4h2sY6Lu7n5xnVZjiLt3yjEQsLbmeDaGfESZzpE67koJG",
  "key23": "2bydPqskpbCnfgXJzHotpYvmWU22nrk32PDUytkmGZb6i3Mjj5YgKeJjj9rKZTM9dRoA8GnYwsECT14quCnZSP4X",
  "key24": "5zHWeToVbus4fspm75DACTihqx6J5Nf6gy6LyHEVL7ayFDG2c7BytEKj5cazQKnR2YGTu3XxSVNcwtTnRT6fs85p",
  "key25": "2E4nPY8Lo2CCKhAptMh2TLZkkrbBj8GPSqKnpk8eoQ7iK4HjkhEqZCXTCRybRYH7dhaG6FXna7gvxHNkwk7WB5yJ",
  "key26": "4Kc2CqrB8Q6fa4XNpcKzJ7HVaiYQEKjJduTzZkxT8vJkWMGSZRTBSEtew57JQzhZctVzJ9wzVSjKGSCepAFF2xmG",
  "key27": "3wQBsJakwwRw5UxW6LRoZ9yikerksxsXMnJQkyCthkumdZN46meZELfR7EC6BrDCihmTVNrMchwQnksQU5KfWdsp",
  "key28": "45AG8u6CueimwYQWskeALfWgogpeic17Q3bFEf5ysRDu4wudQ115mA51tgjXoMSDRoRNg1d2UGSRFfhJWM6JHvHt",
  "key29": "3gKZHP9XpRL4pXsyxM2RT3jB3cYD9D7wtzAX1BJxmrSgSgmW48ZN5kAjqQfHL8mt6WgY11rfq5arh1Lq4QVoX5zv",
  "key30": "3GdTe3yaJzVyweprj7eAQoSLZu2NRYqzX9Hats1AgUGYaCHfA51E8VDkj41SSeXdYn8cRqhxSqLdEYS2X2Dzg5T5"
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
