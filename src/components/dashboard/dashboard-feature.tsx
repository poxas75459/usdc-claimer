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
    "EBhbS2c9myD8TzHhDiDxSZxrBgWicoU4cFdAVma1iCUuSPeYujRCMp13K1RFYgx8YKvhk4ovfKDbkdv7i2qFqLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmnEqxC4vxZaD4BCZHawiuVDShYuEVhyLLP5EDNkxWfnT1wf3ecznDjWEX2JJ6n5YmLQ3o6J15rFnDLRV3isUyF",
  "key1": "2tawG5cNhqEetYXNNr7RZHwxRXpVQBhhQy3ej9LdHe1DqtxhR3DtXryfyc4knsYuH5NWT6DK8c9icuTvrEgghuMJ",
  "key2": "ketQQxXaQzSv5C2hTSphNu6xLLbiLBqCiUzRW3AoqYHycd3B8RLgmFhAp4KLDv9Df9uvoUmUbdrbM7HtXkQsoDQ",
  "key3": "2ZG7ZxAbHTbiRtpNViVyZYBrcr2rB3mwU9rUqB33dHJtQdZGPESMm5qTbDKArystqdhWcVyjrYQ4XpUcrBqvJM9y",
  "key4": "4UFpCLoNNF9wjFArBM3VrbEzdBJ4Z4CE9TPTfq4ycMtSkvUozn3SQNsR2dw7eJh4XgT8pMJ6QgmoRbt8EXfJsMZ",
  "key5": "2MRmzNgxLKfVUjEXsdnPa36jiP5sUtMdo8fKVtaBmkUMU9ZgtETQZSRjwTUXRGog51sZfMEjTf61bmiJ2TnYgkSN",
  "key6": "2NwbxbxL9WXi7N5Kz9XmdjBKZoufPPUSk2okWR3y63uhbctcWC4LvE8jBjKJzwEMdXESHxFBBcMrjUDgEfaK34FV",
  "key7": "BFN6dBfVPzBgxrheX9P77FRTCmHikrjVGfKPrumZ3gys3eiNDbzPecyoXQZqwLZX2udDXUXeTTKvbXgh8gCGfFo",
  "key8": "3nWqWk7Hee6Pzs7439dca1C3uSGaRKqVr3Z4XjqaNYzycwseYAXKqRhi6wyu95KQTTmVKDgacMj2P2125j88UiKq",
  "key9": "5dyDTRA5iPsvmo3hihbAK9Wgk81doScyKmpweknjZKJ81ZvWL2aX8BPwXaEU9Rh4ARQkP1hAuA643tUqwmuqU8x2",
  "key10": "3V98zbE2PBentXkV4hTvwGM5eyfjsBatf7gtSqkQNeRwEASTLK5gMM5Yctc3CWazWDW84k2koQwkJobPFcHZ5afL",
  "key11": "5CdXTtCvrEoGCW8EjtHSzVByVkYaEfm8dnjranoyjZyZPYdTkSpYaob8Yu68vS2UyK9WH43YhVR4shEU6JneeURs",
  "key12": "3tarnTwaHjkEpTZsP7Rgr1jBr2R7dzvBfc9e5yMFWZ7hezUufUfYtynYx3ZzZBbjqo6QccZTDxqVyfxUYVkwr5et",
  "key13": "67h4kQE8WxnM49YvsEct48Vo4nk5nyMV9rm3zBfWDRK5Ve3gbZbzUnHJWFMHyZ2M6sGDtZYMoW2VKvuYkXkUXXrU",
  "key14": "5aFGuPwE9bLps5cYeViWxwwhVngVF7N3knz8JS94pPwzDX9q7DWrEgWntkp7rZSwsVWHKN7mEDzCUtWtB3uxsSkw",
  "key15": "34GdrYK7QZtHZ8ze7daNGPHdtQN8cMxjvtS1h9LJwRTVL6hKfq6JgGXM6TL5WwJ5oTNohEmpwTB2WBmerFjUNYRo",
  "key16": "4fUwa5WjJQBqbkuKYUCJnm2Dv1wHCLLku1oQKEKKrt4J7pHUJ3xdhd7Vv93BU7Y9Wa4FEXiWCJCRP6oJMAW2MpTg",
  "key17": "65LtRR1mmTkoqsrRrGScMdqgYGU3v37sA3cUJz5kYx2gm71XiUP4MRxjPAecEMJfNCBViSzsAor7WCJWbZk6U3KD",
  "key18": "5T9oepnqgpS7ABHMYDfkTS95dn2Uasmz6WuSyWkiYT6hdHXGxKRCSz19JeJxiKoA7aum8vJCFBuisCNorLdR8Run",
  "key19": "4oFtn6fPuhpb3ekajTuQpgrLHi4dSGfJZBJeHBCBkmYcLxcCUZaBtC8cPapdhBA6vfmxJPLnRRGCYKEWLwPFtSC7",
  "key20": "4xzdd2BoXimmjQyUdNxsmthg6kfjb7LUSB3WcTeDkrP1rUKPUjLkrZwaVc6AyfxLbxrTHVPsnSMYTuzNhPbiS67t",
  "key21": "2mQhM7Dq2MW6Cyfj1qivzsyY686bgag2vhm2Us6TqDxQe8PmTAg8NNwpYeLGQqDvDLLr7qt8HzLwZ5VnpCARhM59",
  "key22": "3YaEMTtWjJiudJyxxCaJP9dzSg3WQC62AnoPG4GxRnebYiAW3MXookvDdU3on2bQCWs4BGr2m3kA3FnmFKrUCH9e",
  "key23": "2dbAUaNLoFMw6piLhXdqcRR5Y8KEZic2WfMDwejZ3hDAoXpQ5Ct1hBdr1R4FR8178T6ch6axnbUu8do4GAL1teND",
  "key24": "3XjLSXMfiUqj5sA5RjTEbRqDyubExESkhBKYRr4LncVbpvvJHYy7YFVKUACP7udaeMwxLepsbDRo4Cemw7aTS8fL",
  "key25": "L45ub8NxnhkyenSdzJpaTqWfBGj16jf95HqEmpuKw6uXcGuVd2kcShH8nGgGZCoZAUU9Yv4BGyAYFTUVfmgryoV",
  "key26": "2vbQxfeF5tSw9Fjo24kaLQvReW2GpXmCJtSBqNvtRBxMiKfQsGaTMR5gWHj7Qkbkh3uXWoggo61Q74P19uTv8qdL",
  "key27": "rFzGHRas4v1k8wmJT9X9hAYV6kYi6kvpyAByN8R3gE4cj2Nvskh2edNZN3tcGMEL39NCQgdwSzzBdxfxHFfE1mK",
  "key28": "2PSi5t4gFnnXD7pSwtqxBPmdmLW2kmAbSjiqUCp4y4qHNqk3G6BQmFJJfe8tq9Ny1GPkNSB5T8ZFWdDAn8mic11y",
  "key29": "87P7eK6xuWmmoy2FHL2YVwqgMTQ4bDqdPJWSXi8KUSGtpK5yLP1R4CtGWwtbJ7v7uQXvES5PQTboGJ4snJyNZig",
  "key30": "sHAv3AqUvwAcbBWKq2beRMC8i9vEWhi69uGFJU2e7CBvenKJh9YTWAwtyXh7y3iuNWLRU7bb7iZrbm3gGcKLGoM",
  "key31": "5sqjcwz5Jpw7UPG8M5m5Hzs8p5rZT8rhVtiPxi7Sd6YJTHej2xQT9PUS6U7tvvsdr4iYfhEYnbURhjPmWXmPjv4p",
  "key32": "38jwpFRDHJ4iazXfvyKSGbw147JLYV5aneuD58wPNeWnVhzYtrwqyiFNUX7eB27oJFRLuHk6c8ZN3JLrC7uXQ3q6",
  "key33": "5Aq584oMUmV9tmamKRy9rfaK8kD6ts24r6aUBeQUMC87ANhUnKsLjbYNhE8G1mX4arNxH16JXJR2AHfKiXzUSeTc",
  "key34": "5DSYGJaCA9H1yNBC6kZrs4RX83XqW9Cw4w6eWqXBTgF9BeCj3bmYeGZgk4pZPMwhTpXo8sHXX3Srtw2MNekDztKn",
  "key35": "2FNyEj5J8zP9RZNWuCTx3EaXuYMXvwhSHqH57MtcR5epcvjCygF6vcMD9wJxjPsHLHHafxpvgiu8Vt72W9SEpucr",
  "key36": "qvjw1C4Li972aoDmQ6utY39N35fnvwxmogZPaGZcXqNUfoxby3Zqf25bxZ6iaNTApRaUaDXtEukNjgwzcFAiUZ1",
  "key37": "2qQchhpYSknbWXKDm1PD62AVv8sUqxv3MpWY4mnReQKcGP5y6rMaXniwcP7CKVAdtwbnUvNnUCiaFBGivpwU7WJ",
  "key38": "32biv45WGDqBQE3aLXMynZBnMN8JCcS6VJKk8xY5efbKy8GfpEa7mK4u3GAjXopf3hYZ3fvTzt8ZUng7Kh5QvQr1"
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
