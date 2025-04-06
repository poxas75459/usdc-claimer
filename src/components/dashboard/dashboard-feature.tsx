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
    "4TtEc5LUQw7i1BTqhdNKE9Y7rQGq3pmUbBUazgJSvs8o8PMmVBfeY8SmVv9EkKKYDewt4B8nUJvJXzFxFktjz8Eg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gKViXkyuttJuTKdwBs7kegER9uQU2CDLdMkaTYPBvwTC6vqrzx6B1FCFSK4ohcts1e8j1HiEZQLZvMR3vHz8r9f",
  "key1": "2aFnfS6sWdgzX1FduBi1hJtEXFhgghEVLjvbYudWo8yy7x2Mfv4G5Ha8MTqQ65NdcWLDBv9nqVDk1C45UUMDpQsw",
  "key2": "APXEPEGQMA6wd2tNCpubTKTBTyq24QQpLy3AsxLktxKXXc7ivBb4ZkEFo9sExTmRmKFzrQJTbCTvyPMZMKBsmZf",
  "key3": "2oCQNt8UYcuZJU4xMFjW5e8j9CcvxFSPfuUACFYsZU9x6SYmjmUGxa8q2a3EvZjq4gXYLxSXsnnT3w1Bkw1au8Kf",
  "key4": "65CGAkDb3qZjiGWki3iz3vHW4gVkFm6HdN4yZ3dn3Zx9R1xkuM9Ldv3X7x2FxbgPhcPVz6oMaF3ETGh7q7gPG9V2",
  "key5": "3qsPs2pjiDxmZrU3v735bstozb38beEiL5xsRKAq4rQ1g8XRBxLpvdBrNjMEWCTvHgovMjCktgWfjxRVAUXK8Kxm",
  "key6": "5D4WY7h3uh3EPkBEXufKMgunJL9NSKVfvfD4dEHz1nZoDdcCo3mVMLui7DWZaGFZBjRdy4D6U3kpQdcAbyg7d7HL",
  "key7": "3rMeXAeXL2ct6QnsKgWnmpcX2aeeLwnRjsgXjYvaXVgDsSXkvLW2vLiu5v8299uXKbfuRggxdqSxrsxrnxPdiY5F",
  "key8": "5V4ez2Cdgo3aRjxuHD5vxGiwDGC3WQadRvMPYXWtg7sWLQ9rvfY4ir29dT8fs2gshcEvdvLHZnsoKVC8tM11MKTf",
  "key9": "5GkcKyDyJrtNG2GmVA9chyStR7QGaxKvta6W7QWKWZEiurtMFghz39f5dqHSeomUZqWTzj1pH2uKSa2QQ43PK21f",
  "key10": "Me1etUNsZMAavjmmAQa4W1WT4rNk1uRKZvrKcbiq2JjqwLodGFyH5yJqyhmyiNJFTz9k9mbRfHEgT8uAcHu93hN",
  "key11": "4TfqnWmjnfrTXPo5W5GYKBLDeu16DxY6pMLQBHYWDCENWZtNTHmvffK2arvxyJG4hUmtqcyd5bPD38ZHxYEsmUqV",
  "key12": "5BUidSymY22L9bfmffVerfB74jALFUr15bqZSQpg8s9JXwpbZVzGLK8awoPoGdFU3eqBFBfMPRz5ZVnxShWaUnRh",
  "key13": "5wVdFCPUMxqHQ33aSYDhNXxzZhonLyN83MQpMYCyJTWDmpHi7SMBeUU5MqGiVAyTXKp8x2zkcGZY4PjCzUfLQk4V",
  "key14": "4PaYkqFvNDw6yoM69DoeRhykXTP8gpbwcEdAGgAxLqEY5GcY7gjUACm11vcyBQeBGFBpXzKgQb4GcSoiY9QqJsZp",
  "key15": "2329RxAsm28rBrb6bTKYwt8Ht6G9JtfcYV1VuC3C3uNEVcieygeAUwpzqMeUbN16X1YLehekpKjtZUssGH2hYTeP",
  "key16": "36ZccfT4Yor3KPJsKg4FR2S6P8Y2JVBKiHbPgfDBJUJB6Syovz3fT9hmUAxSQZFM461EHAJs3i7hAYn8y8gBzk4h",
  "key17": "4Jg4FStFAGCTahtFQFLX1yJDNfEhnr9K3XZrLLyzRH7xR5HQokskzGzhaUXhC3auVjxpCHy5qkFRDhuvxbcPLofe",
  "key18": "3QL6WJjTEzm6wLjtTVpGZ1ujYv2ytCEtrCEk8LkfULwQeJ3a7k87AXCBuXPFzFsTRAG1a9y1PwAJYsCficG6ZfwK",
  "key19": "53pZPjps6y9JHxaXUYeg5UFgdbQXsNoFm5i5As4JwZ8LenGGdUC5xFAU43VdybpfCNTiVx2b5YxNYyTqUBGB1Xnw",
  "key20": "5zKhwVDst1A9NWee7Gy5XnDxYjNkx2xgcvM9AaTaswYkC1TedYjcvmsp4uhmBR9Fbvfvf7ffxiGb9nAiXrVEfWfJ",
  "key21": "2sLx7QuMTuHtM9gPhK6oQpxmEebXBuCroUA9GPKEUyGm9eu28ErZoavn7sh8rioC8BR8ECA9c1n4v45h9hXTJBqn",
  "key22": "2hcnh3FRXfUivZhh8aLw4frmYMm9QWxNMNjE8hXYSVjyogSLJeVzZzu2c7CMXdiPGDAuBraHp9MZJ1tq6t1qEeB7",
  "key23": "5Yzye8vJdnK7nrkxncDTSsqa3eRfvNGfNN4e3ENxkKNvnGdyUrnb1kCwsuiZXozLy51Pbn6uaxUPfbDF69xUcN9c",
  "key24": "3dt1NEccRmzRTLLEgHgc7cWamLnr44VfwEebijVGGRk49DiZJDtnJh3BCP9xiW8JCN3L2B3pUqsnndf9a8nqsb28",
  "key25": "4t9pD1scBvxerdNJFmuNkXQ8zGWmAk3ZJr7mjtFKQgAahdeg7LJZEhWm1ZjpYJahHkLU2v7HyJgD5Ri9VXLD8mrQ",
  "key26": "3FYEveXF31gB3Feu9345L8owWtjN6Np1sveF7BUXc5zLKU4nPEKoYu8FqU24C84oqad8JCn7E5QeMuLd2i9x7QxG"
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
