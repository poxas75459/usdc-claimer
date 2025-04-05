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
    "2Mmq8LHx5DAxWhgy1ntSddEQ6v1DMUWvC89BBeR8s1odVfQ9TUpaeKYVvRnRYF9dW54md6bCC6wzUCejRdBNh2e4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjWZvxeNAh5LkvBHemMb4aKL6uBqA8n5CyPNwGLVsemhJrk1qhTMVKpZFduAzrTvvnkY3zKV8XeU1TTt8kYtxct",
  "key1": "3qjZ3wiEb1TuunSejKpvD1SBcdcBGGjcbhqNDfPZPzwr8unq2xWj2fJyyL2VCt7MvMRNy6JT5kSpH2fVaffRpsmW",
  "key2": "5oSGE1y3uJxHrvaRvsXAZXncuGcv3BaMnSXMHAU5MQYa8bwvE7VjzvqytyzPRP4fr8n3m3a5xAsX9LQnTEH96hFY",
  "key3": "5EoW456fCdHWv7dSqWXhQQRasx6RJfPrDh1DgY9xeVuFVbjcNcKxKonQvBAvWS9N4VfQQf4a7gcftyRmaD8yBQeo",
  "key4": "55jiCaJXovuFyBNcAybRc6hzo9p9uYKXyupkQpfD39QfTYawTGwLdG9URgPeL1ghvAdWALiN3CzR7zbVDzi5dYo4",
  "key5": "3YbzSfteqSD1nwHteWJn3CSjANrPKrmrdErSGxWwKAwTkbTrJmdPRs4RvAZjouQzjhPoY2LWXPs4amu83ut15F3v",
  "key6": "RtWZFvFcKk8mh4x2ytc1Ug54CqF7nWR95MtttdVvkwGctP61qaQ59KD4fZupy2AtUN3syG43DncN4G16UmzozTS",
  "key7": "5CpA9gh8hhLfjjyk45Ua3z8kdpG69RK4G9g2tFFMgTtHrPFMNiTkTwN7qo3vv3ToNNtAxmSm8kLxtgvGSvj9WpVZ",
  "key8": "4D7dns4Tqc1qUfwv21CVmkyYZsRV2a47u5X4chVvrWwpzkKVZPQfvN2GRwevRiep9r8bfvYVhkpDHMe7s3Ao1XWF",
  "key9": "5YqFbSpA9FD5HBfAaheZ1CpZRZxMQ1TiePH3kcaGaLQe5mDyUpXSfEhvM9CA1SzZbRiWwra6mN2L5GMq69kXVWSt",
  "key10": "BsK2racpxdmtYTHWi5rwNmD2xaD4TvUsfUWRn3ihpuEpdMK5AoGFqzYddkR6jHPViAKkSwYTaVKcsER5gp4mUCF",
  "key11": "mM7R3RuvZ6p27cDxicox1yzAtWbrJT3ew5iWLRy6zQ1o7EVCgpqpFXbMNjTJoBJ3J35zu8F16bVhbwK7qQUjEDx",
  "key12": "3cUhuFxiWJGvz9qXMkzff7HzivWhhmKB1TPkhqPtNwd9kr3oRA7NJDfXDWvfyh8GcBQSY1UYemrQP4HsBcvhKEyq",
  "key13": "XEL16HgX3v2ape177yToQ88SCzuBfnQdhsZ9tpp9LbhN9buQznQwmwcK7n5Av2t29YXUpYRn94fda3MN6LRCwU1",
  "key14": "53QSpqcxCtfKQNGjdwuZeRtLkr2XLAg9oQfbYjEgSaQMtK3Uq7kDvauB2Ay9rABvN1jeTuTL6WfyqaA7HprbrUMM",
  "key15": "5synnyzLhRkWXrU9nSX6bDdGfszGemnMp382nVZdoifAYGxtbQ1XmkAjzn5aUEZKHtMjwcopeaRdLywG5uorgtM4",
  "key16": "KZTysGo15qYJVyTN4ZLdakD5akVcEx3ukmuqXVBSTNU2m5WUeq3FEkfyV4mMfdpecNHPpYCXx92z4juNNtKFmte",
  "key17": "5ngbGMk95diazwJzVU7SDTf7e3oLf5Lcm89oazyMscUVXx3zKe6MhCs5djriQxAS8egShwk9Zv1GEAwVwxJuG7cN",
  "key18": "2gxDtik2eCv1cFvqZzuP7DfrRigTUX7Tiu5AdNpbRz9trVv7ny7ASAjHWU1wxrRhQsVQtAat7eTDZjarz5K2DXnq",
  "key19": "2P8WsX1dkRhCTGtvvGyH6j2NJ9NiWgrVPKkbQcscmNsMbEoprZwSX9a9RxxGAz3usVFLr3dNqNa8y1dhB7xorTZE",
  "key20": "21gwFQ4LrGK7aGEr2BmHmfmkWYpdWQSuqjBXMwLDpxwQs2VAVZN8cDBh9cW8oEnBWpLBudNRcUnFvoULasUtE3eZ",
  "key21": "3tdtitePiRC2tCjkCMT74a5EjZ9dWEhKYqLyeaH51NrM4z3m6y2ysh8Zg5zaGLNnghAj3tibYM67oTgw2Auax9Av",
  "key22": "4THKRYz7cAW1S9mZZ9chLCNpUHyYG6tR4v9ZoCTx2uRpCWjHahmHRWYpMqZ9SXSHhbU9LfrAYwickQbEePnke2Yu",
  "key23": "45VL2vk5a6NKynU7jmCwJGjpgf23BeKNevarc6YQGVXEdZ88uXVuRcaoHHZq7P4coEnEd29He5ug1qGCbpCsPsZp",
  "key24": "3p3Aeuxo23mdR1ttuvhLXkkBsgyJjBg7G8CNZFor8RFmmBHnChEAATjkXywgNf1QmetLBauFATwHxSSiwyydEb5G",
  "key25": "3us228xPSiySE3R5Wmafwg8fLXSS4cFy4t3L7u1zCucyuMT2vKjRHT3cRG88Ym73xG6VFLNPqSXDn3thdfMUBLB3"
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
