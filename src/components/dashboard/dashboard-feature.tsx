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
    "ATxggcn5YGcvuSaVtyc835TFs1dPwxhYgLY7gY8szo9G24W5rcKcKxy1GxVoDVhvGzySahL5a9AeDn8ZrLWgBvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QEMx9SCnjJNnBecGG81XqBEFtGTzB9PnbfRMYvjLEFNuWn16KTYN7qrZuXJqQiZWSSKWJvWaRfKh3DvgdXf5it",
  "key1": "3aCqd6Ng4ekk3X7JUcbxyQPmdjjWrXjBZ4ZZBxH9peLReM2w27HDYjhkm4z7WsZH17CWJ8UWCxcA9A9SjHpBxY1d",
  "key2": "4KLs63ZkmE2NoKKYzyidqbVYYbtVCCgmSsBSBjfJcHP5YdWt9yFpq1PeMHzFZVcQ2B2HbQTwsA5g1tYJcSPFVzxi",
  "key3": "3CLUoE5Mt7RodHydhKLXLHKm5tsdEU3b6VFhSz1qCNAj6eHwGj4vgtkz8G1xZzfs9wiCTVMJQ62WPAbJLSz4BtWk",
  "key4": "VgdrPgjpTBb9bneiG3FoNhs3WtiU919nhJLDoGvSrY6Dr5CLb3Bgmh8GUFGzqamZWZLNfNwHzdFMXZy23tor2Wp",
  "key5": "enUxdY4KKd6YP78za2FCybuv35ZUKMHGaR4HHBrfubTTudfeqopX3ZZGLVoX44t39hyFHDAWnU6wZ75R2HQL8gz",
  "key6": "zmpCNtWNMTBVGuQeNNdKzTCkkcoEmFTLVp59JDVJNMpq1u2LwLiarufU2wSVEKcGnJMzCLeAfQmaVPYjyKzjQiY",
  "key7": "5qbULrSfm3ZzmGTUFkUgLMJPaA9B9QyZPejUzTAiQURuzu8kUGZWVWr8ZCVfFXPRCCQtJ93jnRBe36MXy2v5yDMG",
  "key8": "4dcntRZ2moBA7thmJ3VYV8QvAS3fx8GJseBHtAQKFZ5wXEWnsnddsYhzEzzKgU6J65iD5hsEPPL9oAkyFfVmYwrS",
  "key9": "41DJeNAp1SBPQXLwFhzybVErBu7E8ux7irhhJmET67qnCFjgAa3AL9sR1yzRuGtkUQb6MzbhfqHU5FMiYSjPFsji",
  "key10": "4LB2TzGpHwexNuaAiu7wx42i6uA8Jdpu41vF4NXr7hBZxvppfjuFKry2CgzfM7D2wHgVkaCwGSHMkmAAgqocUAYL",
  "key11": "5wHzuW1H6cRTAHM3AmmrHT6Ta7Wih2jGHemdY6z7dvdoeh2kyYoLE7REmonPgm9MGn1i53c4tc2goKbfjUviszE5",
  "key12": "5HY31Uf2qk6XU75YoSgcvyyXgDvQh96CvTgpPi4pVs2hTjkMAqQiy9ZcshmU5RW1RpLqULgjDdTSBq87xkN3QbhB",
  "key13": "ZH4MAJCcVpR8QjqEJ9qHoGvDYTrdbZzZ1Xc4pqF1PoF7sfhbf4wy3V15qUpUhichrwvWRWdSunaXNgXvuuechXL",
  "key14": "kVbW5E4da9JeGJy7potWi3dpAsotBkRAP3pMckCwSpYjaL23vr1gnVL1JrazfHC6uWGoWdc1ikG4ikifsWErneX",
  "key15": "4bkWicLY8LKAn4QpCs1z3YEouhctAkdRvLjQwJBRBA2nU4mJqUpJ16aGgpYuxsHe3b7bNueKWPp3wjzZTmHTRoUz",
  "key16": "3YWpwPaEhFQQGYdo9xsARjV3KoV4ziKTKsAizrncs1rXm5YmaE8s13iNedMytgYzs4ECfZXvEcz8nqzDZAftr1VM",
  "key17": "PT5yQoQL7TPmkV9wRioUXATKytwoMKwguxBHXgwuiB6cHKexssrXVUH8PGd8jgneiYvq4itYPL8KGUt67UJCrbE",
  "key18": "zyFdFXW6Papc4YSrNSdRMmWS7xn8PF6BVeeAsmrgyNCTjCWH5S8oBkNjVFG4N3vBShk9xUjn7gnAQxfBAWsM6bc",
  "key19": "2yPHaCErdXpH3JAmw6uRbpb8uNYGtGbHfDcNnarh9kRHKnXMw8pCpjPW3g6WbJkBHBeJncyWiQwAHz2YcfH8PP3u",
  "key20": "dvNoUJ3SsnKz1WaXs7M4PoeJqVBcia83dHUd5FXztyqkmAubcAoPLnBWRPPzt9JYLLP32RzBxMXF3WtxiTp3d7V",
  "key21": "JjsUurt2jTKipjmjqxNUZRpnNTF8q46tRL4MUnDdEc3N75NmEe4deZhqiN1i5KA5LgZiMczoKWpi2y7t5vB4JvR",
  "key22": "3GCsdG3Wt91xWWQ1bxF7u7FmKva4ip3QDmxPdmhXA7u3TDJYxftMWeXWLoSqSTXo2WRcATQuq5gQhAaeFhvTw6PE",
  "key23": "2uQgVydFxgmUcSgm8GgJcqEoRR9bdxzohUgwfV8EYjRuvjgYt1ahhziQm8nUzqrjirYngCbdDdTEUGCKXbAb6JRk",
  "key24": "4FMAqiJpdfoCn9a164X7Dt7k3kPgZ7hjM9i1ry55gN4D6i2jBqtYWGZAGensj7c95SzpxJRyxDNQvhKmpA2ohUHx",
  "key25": "3mv8zkuMhpyTnGgCpMfgPwHRbnfZ8qyEeVGFsouPQz9KxNHw3WXZSFRH19EbKdRhW5ZZeV8c276xcikzxSEKDc22",
  "key26": "p8FNUpwzxY3niaHzeMRzsadgvZGuT1ojdtT69P6vC6B6wLz1bVoUMb452kh96871htWex2ACR5zpUnCVCgXu3zM",
  "key27": "3bygj53crkKGL7YtsAvzAAM8AqqZD3LTc5ZY32X7RDjibeMrKVRXPa3YTvxNoj25GfUjEC27fNxLb8VUbP6QHGky",
  "key28": "3BRQ9weiRSfpcGTDWi4gisx9R8GG8nbDtcs3LDQnDqKeRHka3vJzXw8fbtb5rUvGMqid2W4Vze2AqQxMZhi861y5",
  "key29": "5tuDsT7T8TsctwmGm1hdU3L27UCTjmUQgRdk5bsKKRpgwyLmDgShdjWmp4BKs6PDGDuHJhnc9btVGrABhybGB4JM",
  "key30": "3e7TzUgo4YmADwnXciWa3TYHqn6Kaj2WAN4j8DQDcHaenuSF7iZEGcTeqHonp1QyzGox4kbnpETruSUqPhCZKmCW",
  "key31": "2XatB7fqVhX6rwXJFQrZFmMEwrRy62ELAvLkookM5wPuLpyJwhcHSnhNS3uf1nKGbo1VhitxKgmPvkeCpb7K1Ybf",
  "key32": "25fLxUD7w5iyPHc59BdvAVu6buxFgA738oruFobRiPRf6oeJXrPbtnZfZmYrCm5pJQq7wSG1e2V9En5VakdbkcCs",
  "key33": "5S6MuKPrcCw9JKt8RRgXCw1QtGfmuA3EfsZ3rprgV83iKr65bdmw3XcK4EmMDhiHMQG8jvjgZy3FT5q6tXDdb1rz",
  "key34": "4gupwPUim7QbdwaJczDrSHt1GGNLxjMiNRAw6kHxqXejQmPxZT8gJVbsdWjhFXq74TPt8B5JuJfigj1Wk82m3wgt",
  "key35": "547aZ7JeghQe5ZffB7rZhsMsTpkjqNzDU2zA8ebkZno3aUC9w62qiERmAfvfDfrztdf83EZocHXFex5c9CsbekZA",
  "key36": "2t3cyC55kCBDi2ZxvYtx9HGpbCiU6tgVPD7i6RmWM8Z7oZvYhefeucfgNcVLeez571e1y9fF79VgJ5y9hKUTJAyL",
  "key37": "5VtwGZqZRp8mim4GfrJK8iqbKZAnENsQsPq83fffZb9VXCxsQf32gZ2AwcgpeYUu3cRJC24F33y2ouVm1gqU6YY1",
  "key38": "6aPxxx4gZPoQw3tLAsKDhQ1Kj7Y7CmqzogL2EJVy6iQG8MLHB6S2ks9fqxJKrkmGs6APqAGKr6q9MeqmhDDYdoV",
  "key39": "5Sm6NGvGXZriKndHtXDNbnqLRpmSvSbcLqYrwoUkR5MfDfqnVTpiML8EkgA8Srpp4e6U6r5GcUZ35KuXQm9dJbU6",
  "key40": "2zdWyb76dZ4EpLGNGxfaMHWhKyY8B8fg7YTHnFceRJ7FvynSAmtBZkbQQoYgz6XhvcKKgg8VTDtFGF98n8KAkQsj"
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
