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
    "3uTrnNKkvo1ohuutwuuzLNCKYXZPG2x9CBch1wsNn2QajSFe9EcMqVFN9CqUXZBmRAziChAf5hWuUqrHdFmxCU5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sYqpRcngxL2BcmipidaJJFq9gYDr9Rx9nDonvPhFEZeHkufaYK8qpzPb8cQrYabcz7heUPLYxDdRRQVmMNN3j12",
  "key1": "2U1SzaD8j35F7w3Qg9doV66aZNQfed8cSm4BYceHEVMLsneqLXpQkPiXbXbAdkufjGvu8jJs6GXYUqPz6wjRHJSZ",
  "key2": "2QX8iwYL28AwhMWq1yfoJPP3Q2t9inMMV9BEYK8R38hx8B5DDNiqT13BCVEuc2UE1VugBVy7DKLLryDJnhoQ2t71",
  "key3": "4N3yUASE1t881BVTLhgNvLKQDN3m7wiPn68uTDQW61Dba4rKuw7oYKG4ktsePS7KoVrHurzj5j6vCHuqYkuJ6oyj",
  "key4": "24vEjLEHz2EDJeV5c1kLUMw38g3X6vdC3QZMx6Z3JgKzteDhUo25F5DWcTnaZy2yFxrVjK8jxNT67ngjQLh6BkEo",
  "key5": "2Kpa6nrJfC2xojajLMEe5LSVy6FWq4TiFbrj3gtmcYmGhVXsBh1gYeLLhvFpLSg7q16hSVeYQvHd6ovrqQq2qtGW",
  "key6": "4pEccu9URAuVB9pmipjUrrgQJECNMSBiUV56dHk9pcNMJvt67xynf1XNQcPA4DZ71ASJsGsbh8p9GQYj4VmCDYsW",
  "key7": "2BMcTpU9tmTxVmaowVyxmeyLZye1EBVPbPeqniLfyMcmLtCV2C7cHwMGWoV2m6t6gFfeWoMVJGjEgzD6DZmQTDKE",
  "key8": "3mxNEDZhNYtxTmyJnGZMffmTE3rPW1Y14xQfHgNpXDoZqXXfoNPZAH21tMdmVY9GPivwWUTW72UYhimDTjwt5rM5",
  "key9": "3MXLmTjYA9M1Zxb7dQMqpduBUKGxu5oWwdWFm1G1KMF5dqZ6T1VPEMJXstUka3C7hPYqu5yVBEvNTSPuzJcWWUKm",
  "key10": "3vV1GohBgv9rNWSJxxZ6cc78kEZgFC3U9hjnX2iVHRsntzf15DpuRwsyVQoASQaDuAyGibSdNxMDiVVdgSyyqc4P",
  "key11": "2GW4MbcBhyVcArv5hsbzjiSXphQ5cgV2SymQXf4etg1oGHZyDuwTqphT5Ct7KGc67SpKEbp5LiU1LvTWp6wibtAA",
  "key12": "3PsCRhiRQDDbSkkQG16kNXJ6tFZSRXcehQ63FnXWrKxMNyqA3BuvCj8otxZtfkwrngXyFZep21QC6Fiu23V4FJTF",
  "key13": "3fr6wybut4VYF2agb63bhut6JsPDZGm6N1MrPhohM1G8DTdAKw3ZcTqS8NMQrzwEGZE5QKpY28N2BJXVSBycRJQE",
  "key14": "22guZd6tgyyKTgfAB1f9KTvcMaFhaAfLfLBV7EvxwyU5bXr2dfSvtFGs77MViQQDm2pY3MT24NWapCwCGaypzjyY",
  "key15": "2e1nPgnTwDsKEXKegG5MjPwJaEsyxkzPs4Qxra2UtQk7XXX8N21VaTX6hff6UHFwQwcen3AATuYGdBFbQHTbs9p",
  "key16": "5i2E5USifZpUBraKjbqEEoGWEaNqsXMLJWTATMgydk8CZ9mWGi5gNKdbzh6sNSzxAx472Er2eAC33qTULGQs2DGm",
  "key17": "4YvoocJVhFZzxEzyRB756spsh3EfXjBhnXzdCpSNQXB16EkBDu8ermfhXPkMZrYS6JSVkN8Bo1MKVKrw3eBLdGTi",
  "key18": "5Dk8tFyB6FcziCu76z4povuZuFrKSLzSXA5xv1GBUuPu6WARcb4kEKAiS6EuS8F1Z7wyTHBKn8Hm6Sz5K6LPcVhA",
  "key19": "5rGx1UjkK8gPrnWAdmTHXo3zJVDN2FYHwpqbUpVf1RYwedJcwQvVWdVVLJdg9gboM6QuHh4R4o63eRrFFiKE3sCr",
  "key20": "5KbqMma5gzDErduwvPfAf1vruTynaTio46NPhCLjvAXj1JCJfEaQkQouJEksY2P8nQkvxDweZQ3ZMWcet37kvcmx",
  "key21": "JkP1vpXEnsxaBE9zrZoYKQXLKnLxDb7UvzzRgav3uN5ReKgc1KgUj5SGJZ2HQupwcTHBTiR46gmy97pks1V5QEg",
  "key22": "2BWBBpM4VLRDbkk8Dv3w3Y94y7w3NExUio9BoBftUzsdwE8SMU4ZXKbwEwGV26uAARn2BZKZQaK1NmVcaw6y8AP6",
  "key23": "2WPr68visATynYiqQEGHCxY2yTirwq98VLK9emCEbegjUotDmVBMfyCdzFPhXjB2LSeoRZkoNSV12FZeuRa5hGk3",
  "key24": "2odKva218guyuVA1fF2ePUmyxNGZC195hxdU9QG8zZV5um6btVFoGh63FhRKb3X4BzuNh84NPUGvt4DY6y2ZMn5N",
  "key25": "33qZrhAKZdq7t3PkX1PxGYFecAf4hszmimQe8zYvuoRSWLFe3HiTkTJ23ufgJTtE8Uwn9phcsEcUp2stBUq64m2e",
  "key26": "M99A34wMktA1fJvHavo7Ne1gFHKjZzNU5dbHb3CCmwdRrRgdhLtTZdwB6mVoN8tvyRG8NqbFyy4xMounCVumQ7a",
  "key27": "3LnVwWV3v6sUyGDQaRsS5k4HmR1UhvGZRG6RirLURF46cq5XKWebHD84ip25BAapmbSUoK4Er93px2kgBzoMXoUD",
  "key28": "5ZQh6LvVobVVhfpJPR3JZpYENm2ZLfttL62uu4wetbGjS3nSf6AspfsEZxQ6r6Cg3yMQ26Z1pksqMbB6CXbGNXvM",
  "key29": "3dKuwh99k6jkMVAhNaaCw2R9GURAHYnRSu4poPe7M6YfnYv2PZML38um8Szreeo4AtJVFYaGZbFQvPRDFrUV1mm6",
  "key30": "5JuL1NDbsqm1NXwt1C2gE6B5v8obnqmNCegJEaS5gc3JMaSbTYFn9hwNNBRwWTjeHYvvDescVyPCB8WhmtR2jZX5",
  "key31": "pV5RteYBHwtGJZ4FKoc59DH5oji4j3foEcEPDnY6MNunyQFrJPBtRauGAtxfoVrA7KQ1MsToiB9U9WzbgirYTqc",
  "key32": "3pTuCygucdS9c99k1ALroZSNJSjZE6HfQAP7XvHXg4mDDfn1TbqVUCzJ6SHx17qeJEjN56zPTbK33fFAy3Jq1Wmx",
  "key33": "4thCDQRgnUqSHcQfeEMMKdFF6caKafc8i73Gwqw7JHT8nut8o8oj25zXGTZBSK5QUJ9vYQ5tBicG3qhV2tb8q4Fi",
  "key34": "4qSQjt81H8f8CiN6QWmrkJ4a7G3kVahQcQeDiqTpoPRWETz4GtamYhyJhfUkpWg9fzKqsRUG4eLDj1ySSjn2yCeh",
  "key35": "Hnyw1P74ntzbxgt2zer2fHGpT1s7qPX7sbSgKcyQpN95Afbv5AWn9ZzLLSJqyx9QXvvsHGGWZR48apkxApABSNT",
  "key36": "5DAopsJjvNFTn1aEcYQLjZeLLvxLsvXPWPb6kCPLt64ii6nEKGgVBZvvZNUQpbSSEGQJ6voiZzVNNxVhYAokrxbB",
  "key37": "5CagBYweW6iPrts9gTQcXNY4expnHTMXiaFNHCmj5CVrGmiUq4RGZAhGqpQ1oNWkMN5Pvh6LyN5riUKhyFNkM5Qf",
  "key38": "4v5z8c4ktpmcWy2Fr153YK6eEgvz3WBUrAgeAkxsCy2zwsSWtXJXQF8t8YGzg8bLDaia9BwK759Ha57NfoB7qURQ",
  "key39": "2qPt89UktKbdXvAKsB1jNG6CpTKbQPGYpM5SSHscVpoKZs1nvomJxM3H1ogcuvXg3RvvFTmL6hU3vbw9L5XwesVz",
  "key40": "3d7SaAHqe5TArX8U656qqGN1vdfEpFsrsLHKz7QYd8m5KmbsGNqg99PhCWFkQ1MGMWu8arpVBLJEN2Ntz1W6s31o"
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
