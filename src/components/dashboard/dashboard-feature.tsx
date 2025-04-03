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
    "66SHDYD3qxuDodRjxNCDSdVgegaNmyCQsULNws1bBR7oNondPSAjAaY99xE1xComjBj3qmyLBX1jvoiaVbYgtfv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3az6bSxxyeEdazjnsjPuXBDccHUeQpHzYE2ZNMVnHsBkyvCDEw2ADYbgVkM2arAyKrSXSUXuKgMw4xV8sY2E1gWh",
  "key1": "3Wu7BPTWyLYaGo9SBjWztzuGRGwcqPC8ggjqsk9GrFRgTK2UKJgaDRXQXeNFFEpWMyvvcQvm8Ush7EjwS4RyUgne",
  "key2": "4HrngqZyTWXFyQmN3wpcu8yfsXYRnpegYS4vmmbhVgjVDENAnWhqrfSBjqKn42A7watC4EmBqhmY1YjyFfyryRVV",
  "key3": "3HxE4St1ZEGrRVM4CBuYWTzRTiVsVdorHWGYsGDobnJunQTaHHtTe2qogpZKtbDYoofmzHrvevdtwPx57AY9BXYb",
  "key4": "3Uv18RzHTbQxfNGdJrav1ibsd2nyKPB2BFbuNcGrvT6RyZoDR8TUqhWBL9JrCZdowWCZB23qDsm3rUw8xf72TXYk",
  "key5": "3jdCftS1FpbbNk9WyQ9HNh2ALotsYXgh6PzgniZcvFxhR9xjqXmb3Ld2jDh1mn12NFDfLTcoVdg3dZWUbUwMUSpw",
  "key6": "2Gx9WDWrQsJdqZuUEfHth539b1KekLTTYqqcQmY9WXYkmchkWX6o9M7ZVSSQnrpWs9zPknJkqghhNERhotrCTthg",
  "key7": "4Awm2AabPZKf5mwFA3vKVib7QBbzNJY5wejCE1exdc6WrfcX3s1zZs5p64JC6ieWA4K7Qt29Bw56dFzBL9FrMZkJ",
  "key8": "ttvcDCVxfjm3DdZyMUEhn1CEs4Qece5orZFDVnZ3iFnpWr9wKGBBC9GXMKUycvkGLAiqcgRmVi6RQ1WLFNH4NAR",
  "key9": "2NrPcdU3zH9TidJtAvcW7MoaqWDZT9ceW4cHgYVn9LoHFjjDyiM2L7i43bb66mHfV22CzP7yGFJE76XL8h6uubBi",
  "key10": "3gxZeUjpCtZkV6apHQqs1GuTwSeN4yWmT4Cw9jywwSSwt4aWZ1vw5BvxsNQNqMVWuhum73QvzpETwFEQ1mF1FHFd",
  "key11": "5iPes3vK6cQb9YzqmgLz5ygisQvX24pnpuuDe9xyDUxyNha43CreyvTdGBPxBxMBJyKzg38g1NFZnxZ1E9wUdzJe",
  "key12": "2pr4pfuXUkw6S54WN9aVFFLCt6U5XbFz1P9LNpNzo8emAEvRiQ1LKTggtpjTaXUBjLziZk1H4w4haXhhGUbCeJAv",
  "key13": "293YXK5tBHsL4yb2JNwN7N3oQU4RbGJp34tCvvBjVHnu1B3U2LEksQ6BTkVtA1zJ1N2Z1UYbuzQWuR3cS9XPnZoR",
  "key14": "4MzhxE4FrkzBu3muqLFDFas4jrwWvZusphQvMw4ZAPFJitzxvWVgrTSTbFpPNcM5aiDJUFUpmGRnzQN8deX4Cg8M",
  "key15": "5DD8v6kCnk6fvs7j4vJKRJcWBm55AKQWyyeqrTGHqAruuwqU8zoAucp4wsQXefoRr2DVmvb1N54Wf2bfhx8FQ8Fr",
  "key16": "5CLYfpF4RJsyjUKvDwEVSH99Qh4KB2oCtcGXZJgi4tMeAT3ymX4wnuJRaE2AWL8Vz9tX1No1mTw7SQc3tg3jo9YY",
  "key17": "2SwnaDE6JDX2Fzttn2G8zfV1jrJ7UNdgQpRoKAXRpGqZKT5hbVyA1jrWTXvqPQK8JBFqASiSEBDPne1Nqrk9jWNB",
  "key18": "4DavUsB2pqH4Ko3vwAYf1pYSVJGP1xLJCnH6DZeJhTPzfafr4doigSwKYWTJJLgDJ6zKjjXTsM8tHtXmpLSP3BdP",
  "key19": "67rdmJSUbiFof2EL3uz4F19QfxdT2ke8a12maAsdzcVvqvYLqCLje9cAmX4FDXEPcWNuHyJqNMj62XAtJKNWdpsY",
  "key20": "23mKDkbWMns6S2GdGZo33BrHSHjqd9cfad8J7YJYekUE59GCx2osm4hj62WZYzRcz9ZdaS9VoKzxhUJeqVaEpAcu",
  "key21": "3uo7TQyNmmiYuRra2cevi52aoLcwxPzdq2nft7RPC9W8ouPnPxV8x6DQUD69vgVriH6yYE6xCvawNasdppfu8uVo",
  "key22": "5ZaUF5kKN3XyBRsKnfA4HLYJwAMrgPtw5LftRv1dcw7ebSMsff2k1PbukqTmTZnA2JommhKssUTiePfvuqV63h7s",
  "key23": "3viudHWxfxCJ2aHuw2bKkXLrKqZKpcTmGVePhZxE9oKkYA6UbRbHmTtppKwDDfUGtZ4BXtuFZFrhV4T9Hu56qUj2",
  "key24": "Fove3E5bgXyXSrUBrshYdDQVuZkXmabvPRyWZBhLXVqKrW3oK5rPxsUZBgKZjAhSb2dPiasSYSMzSsaMP8PA5or",
  "key25": "4KgXwfR3gALosD7RcHdnKm1Yun6y9Sb4MCynsKYS1cuwJd9VYMiA387yrzwku79zdK5nQJZFE9s9SVXwSDsXxpUC",
  "key26": "5CRrh7opRkzkfQYJpmVgtX73iWimaeCyUNBRxWvnbSBR4rHUZ8js6gXTeFpZ3ZkDES68j1feP6VmvkNSDgVN9Mxx",
  "key27": "Jdk5XdscCJSixdNoS7fnHY8Ce8TWfT26iPn6jivr9aZRKui4fqyLfLWqRVqYwkJXiozVA4nuYL62hfzfeoSvCt6",
  "key28": "2tLebX9DhRCivV2nJLRtw6H6uNBRRaGiFMBhsSC6v6sDuYEUxVVea377NSBsf2papwDP9zRPbVY5ykKdwbqf1fu3",
  "key29": "XzN18LjXoRZkXMa34Cs3JN7MiwbUzr94nwwNSAf32uj6fvxEcythAuES3C1LMMJUerUxdJGpfsoUtPeG6H9qFZZ",
  "key30": "5Q8yHoiBcSHzYCfEt1MgcSTRruCLxB91BmJ7LSpjMqghsL15XRkupGkHbfUQcSwKrGe3rotszWypHwtAVSzb7dPX"
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
