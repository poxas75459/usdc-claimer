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
    "sqHC6iKaf4od6XLrShyhvmU1S33gcVxHv3WKUQsFM76souup4wLcEFgftrQfYKJdWAsqQ1rUshgu1fL9xhuBEvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54kQHXfqtmB2aYo8Ra6qyQV2bWWqD4Yi6ij4QozhDPHB8CVXMgmiGtnWaKSun55ju9ynSFdTYPzWKJhkQAAaCQeX",
  "key1": "AvRjq1SkWPRasuV1VCiFJ1V9itzvywDNGg2bSERYhpPcnKqqKbuYzK2t1oJFJpkeSSwccqbQ9HSLtpPYcVRiJvV",
  "key2": "5F5tipnqrb8SioGr4jZn9ZvcJ6CaCayu7pMMeedgQ5ZRbs7ZCK8Vy4n6Hd14CX4S9KVPgw5PsSkpCgcL8dBeTLpy",
  "key3": "24m1mxvUPxAssGmuoV4ddMLqsVAJEoxqh1Km452wV92uYGNDLryLVPt7W1h2AHVzSuMNRVKcdJfADNcPLLQqEo11",
  "key4": "5mHzXUNo2SezdUHWXRyLt495pPgraq1oPny9JtvYyDcMkfnJtXpwpzHpUXKrEqxHgpxaCX6CnB5ubizW1DiGe1Dn",
  "key5": "62ZebKbiSkniFTzLWBcx3kV74wWBxxjbMeTNHfdFHRrZYiDBx5XPCta4Efc56XmKfWRUKM8SRteLzi5jPL3xQD4c",
  "key6": "Lr6H1H5WZpP2XBaPFjYazMUnMTeR384yvwe8x3P4jhrZ9EqZyMtxpEZpZN4RadkB4LXsea2e4Y6qRjXARqvKnqb",
  "key7": "ng4QbbmVEarvKyiwHT2tKEnwTtw9a6W3WAvCJEq215qg6Psy8FfLccvdaSVBsiWS6skWnvsoo5bKdAjrt5mnR4C",
  "key8": "4FR7zHChhtPsDeeauPF3h9waQRLxTNrZAQxQ2wYkjFp7VnhfeBGVHgvdi17MKV3S3pj6K8KjbQjTH3E6edTXoqVM",
  "key9": "61JoE3ucr4dEiMEwfFBZNR4LkqoG4qYGsSmk8x9HX2kSEyud1rovVHBb5A5f6cQkPgRhwnnzfw8M8VUb7dBiqryQ",
  "key10": "3VkQhp9RejM7fCkHeL3kzkuVkHTu7mZ8S1dX42uD7PZ8mdPBmLHRYkiwPdh9C653nqc1zhtcX1KHkW1uk3ahX3UU",
  "key11": "PSd6xLf4DMxqRk2eYwinsB6c8sUNAg1Hqfdt63imJfZMqo1qaWD6DNdxQXzWeejc8ujGtDKksPKJVRQQuCheHwQ",
  "key12": "3aWSwugUeYrv5FhYFKpeQ4cCvtQzwKjBUjLDszbAuEAYcunFsXmvSQicGRokkgePPS7hGTnTVy6wZjVXoE3J8foe",
  "key13": "4eeouHqV5xKFP5A4E33eaVE4SzZ7KY786EYPF5ZqbPqCZGW3gGsbbsNfvw7USktUxmmPVH9o15V2AqfbCm9endzR",
  "key14": "2kvXhUfcmF2giykcmuGMSBTgeDGUf9GE9oRvJc6Lefmew1dMdop88YhQjyL3tLkRiAD4dw71bARBDehaH4McMEci",
  "key15": "3zJqHamiXzrxPrrCF158y1fba5XbESJVsyJc88t8EbxTa7KGhx1MMD9eVjZ1A5FE97Q6vHBSiniM5x5jhMTVj4mU",
  "key16": "54env7m4GcMZ8xHkhYbZK6Laib9emWyt9b6xzGhsmXaycWsnxfhh4PDUKkDvM9ZPus8ZZN7EYDy3warVrvXkb7rD",
  "key17": "2bYkdNoRLiiGerYQU3C2v25Dv39iHxd1g7YXV44zy2jNw5HiVbxX6Q54XKDFwsQ14zopgC5qTTQBCUbRwBX6jjVJ",
  "key18": "2kQxd836f5me5oNykp2AaypNJFAFiKt63CgbTvvLESMwrkQEwUWNR5QPvs7FVBaTF19u6DZ3Bs3ihRokFZ9kofXT",
  "key19": "4C7F4gAGc4E4e4tWFnK9CK3WdsNQunLv1dv7PuwBjmXvryipqVYqBixV4SFJ3u1cJECMNr1kf5BuwMMx9en9ykMG",
  "key20": "33bKvQjL6YAoKcrUFYEggrztc1xTS4Bew8VSpLj2zJBCUi9ovLBDDJxGFnyKC65cH6avAHnbNw7ukTzpoEhdXnNo",
  "key21": "29nhtSP9bSGbcC3xSNVEQvHVL6QLVL24dFMgVK8hf7ZUee4b5rAivHnv2PJHLEUPnei8miqMF9eYXbmBAQU5Udm1",
  "key22": "3CSJN9JjBgEu6iXRW7svRsxv9qDKF5GKX9fEgmaoB9k9PHvm9LUq1aTLhma9drqkwGmDYrxiDLSQ3MPcVcqggbGQ",
  "key23": "4bBtxdJexQJNnU2wUMGQAmWdbVczk1BNyhqJc5NmzuZXSMHpwMc9zY2JhQ4zEB5WkBoZjycG3dzdAm1q1b8gtsgY",
  "key24": "2WjwkX19ty5rmH5LfGVhetA79MLCXFp3vMQeWQoq33nU98ggEs9FiZXDNE3jovcLvHJShFfMyHrWLAgMSMdPTaEZ",
  "key25": "4CboYTr8mKVNDoC47qQusP5rtD922vHC4FDt8F9uhJZpbSFBHwF8sP7kaMtvpCHwRkBYRbd782GdgmPhuGBYGKzo",
  "key26": "3XufwYVqL89GjE7M3J6habrbbWgAqvvqJN7PToVkE9KpUavwTcK7zZgXEgPNEAAoyusCeUjjivMjjmVRLZ9J7xy6",
  "key27": "26oXKZNktZz2Abjj1J1agQbpFgkVsio7ZzsEMrQg3fp1xwtJp6Yj2Wf4KgkadFaPsCodcdczQ37aS1QaqDWAuRut",
  "key28": "3zMRnCy9fFb3VGcKbav4pprhvdWkAj8sQdEgS4neMnyLPoBkzq4se1jBvyVTnPzd9VT4vDV8netTYoRXeLpDx5oH",
  "key29": "NfRvKtj5Xi89GauQe4gy8CqhtzhqMPtduJe9DDdkLuiZXgWKQDBhw5p8A5PB6SW7NMeFzy9deZEbgbxHbRMztD3",
  "key30": "2Duu6Sn8eXZJBPHke4T5qGehuthpD85gKmSVzyNEVASZt22xpbkrVC1hp1GwuM3HHFzfqR36brCUwCnDNZQDKyMZ",
  "key31": "4MQtD4SooYS4vYgUAAW1Gk2UQR4EGpbdBViLdviXtSMrK6BV2rZZmekV6iSMRtCtNDnSJG5tDLgb5EZJWceCrwpi",
  "key32": "46DhMKw2uTRzvx1y9swugVcsgWXynwNp55sX3A4m7hrXqe1ZwvRNackzwdBRoTgbKwVKYY8EDdHcByZ6gVVoV7GG",
  "key33": "23XfxCD1jWHQKPjUTXGLTV4HW9XuNF9W5iYSindDw9N8Yq67VyHsLWWrG5xCd8PAypw82bxkthvE6C5yf5cczhAK",
  "key34": "4nDS3G2ygwnb3jqr7JqcB6mfeyi3vqjc4TXyupEHmm9SHd8RdJAsrQABpdGdSByZsU7ojYtuRCxKprz5QgF9gdRT",
  "key35": "5w62AkNPGXbbtQmBv8NTerU2yzozFq9ejARTQEiVnnemRVxnY1xMtAipMhG3GEwpxQBjoW55LYmLNQkwCVZYQUu7",
  "key36": "5gicZwH7qjsgMvCURJHX39kxN2t2DTsuEeoNU24Yw3FVu85H9GLG1MzVMA1qkXWx9j1SzzGrq9pnSijuFREXYPUH",
  "key37": "2bgm2mDzspaJVHmptQzK1St92vt8ceEjKgDdKc8zuHppVSWgqQFWPgbiKL7njn8HJyNdtJdHsBZ6EBeDHEvD3A3w",
  "key38": "53Kio4jGts5rXmbH2aYzP5f2mwecRLwaAEk77ehWuoK5ZpWsM8EV5sbSi6gtetmecJX71DYa1q2Srm44v5HJ3KpL",
  "key39": "3aShPPd4rzDqX5qyQBALX7YbnnpVoXHhXpaPDxHWXQQLk1TP8pEeCx5fEhRcM4EZmCM7UPdyuZmukaWdE1bSLQ4j",
  "key40": "2rTRPWfQMzWous33sAF9j7ek2gAmFHjWcE9ztUof2USp4D8seeaRUCLS435FvqakUAJ5Hw85BUJUnJAtp7V5uGNU",
  "key41": "5xLFtZQx7ejjMqzCnFbomaVqJk9UxFje7VZvw7bpo9JmtWXide69mxpXNZ6cEFQjS2aZe5KtNGW724Vbone1csSV",
  "key42": "4KVE9YQMmZgn7tHydX5Kn91gvsfpJx3djJa1tFYaFTGrTjLyFa3xnHitFMVzn3XMqzpVot3jsUE38ZVW9SvDz9eP"
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
