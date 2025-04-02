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
    "2mqU3jpw4vUtRhpbycpEoY1Wh4myxvTdHa13U2zgNanahLbdcsTTS4BwceSFKkj7SkRtWRHTJLQnpwGYQ7irm4MJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxJcUA3kFRHHmFqjwkwRGY9LsUdvKxqdVxcvS9SwVgRt6rtS5irp5xGjna7vyPwDPYhqq5JXVkWp4xwVEFtZnSu",
  "key1": "3tkWPJhXWPwmRN3Y7e4trBtAzknU16jcGiEVV9esVP2GhLp8A85Xk4i7Vt4tRiiM7d6ToR6a3eJxusRBvHv6QhmX",
  "key2": "4DkZJvLF3BVGZk2LLRnYVk37zdVh7sNKNcXpjzzto3h5DivzXNvPDQsb9wBHD7fkBjxDT2FhDTUCwkFPQDXzDyUK",
  "key3": "41Z57LVKJ4XC2oS2gGSY6TJf6KVW6gjKiG8iWMfy6WNugGfd7XUPXFujwgG6wnsahs8cmTVYJtEqMDyUVfkee3uv",
  "key4": "4XArwgjMN2u4pAvKWQzWky8s2itoGEWqWBvDNbHSYRZSBeu8XpZY5VkHxZYNLfzQFydyTfqkephxue92CEMEGmZR",
  "key5": "3AHi1LrA8d9C4S7pKztQXQwT9iaDGeLknaHtBVHThqkrxoRQ77UYSoVPztHox1muKs1NXzeXZbEevJPkyBNkQPQ7",
  "key6": "34UeGLs8mQ81GeBVuJ51DXuMkf7jzYWzx5SwFa4MWCS2nm71rXq7a1vN2hqrKxVV4EjFZzxbSvVEJsffgEKw4SF3",
  "key7": "3behx3QAMHs86DD2SShN4HpGWU5YWQQW49VGFvRJ7TUJmEdPtxwhJTgJuXAoviJHX1ugvrXtxTETQqs15n4a8TDt",
  "key8": "VJ1eM7e49owBP6JUvMhTmAFSuLtmxYR1jfYnpV5LhjP1BpQibCYpqE3kWaeqoprSaJBNoGaRRBpve39bCJKX2Ly",
  "key9": "5dHp5JuYqQfdYBF7RgYRywprNtcQjDYt2d6qnneBUnPjKESTJHpEACxvDfHopu3XWUkNXah3bm2C7qpyix5oKh9u",
  "key10": "PojRmAyCatwRBEfQYryvnvTekTYFxR3KDiexWVRkRqAoAzaRruT7V699oGq4QgRwK5LdcE5azWG5esYPeqX93ou",
  "key11": "32sr5FUqo97WaGZgnu6YjcBbqaoDFF2tNbe7ibUSyvkxTMFaHicLQxTXZ5V4jjZnPGPuhLYbcMcuFFn9xSrGHCF7",
  "key12": "3zDfq2XZ1XxY6GL8dSF6MP83PW6cPB1X91Fwpmn9X7P36nsAWQ1ZKeP7EDQTe5tuNuikixuJnPgAvNEbQignmFNy",
  "key13": "UsvifW5V1oTBLpACU2xMAkhfDy6DxVkRkVFedyfXBTfWSpsFLdXVmWxwAWVDYPrJzejCcjEbnqk35E5tUX9xcSG",
  "key14": "4TzCLZ6uY5M3s2faHqge6DrismJatSQWsR6yvKrsfpkj3djh2Uzn86mjg851crQKfDRAoEdex29C7fZe9QuZ3Ys9",
  "key15": "2rXFt3sPrJN1W28Nerr9VYw3qfpVcn9NEwKdejhF1RmDE1SmeKtXqMSxiHxas8sRkPTDvfmqwZceA9DRvfjA83aJ",
  "key16": "4HwPaCSBNQ2RbuxyLZX6yv8SHrWYifRZE1BgAe7p2XmsFnPPFFX4xec1WJWVa7p5jAtcbsW4PJn13s8RWKpCgrJz",
  "key17": "3LA3ZfW3sEmebp3DDNJUJo2TNHaGbRx2JfYCvG8ksyB2zYXGabwrZk2magkurdyYw7AjAZptGnP2emSpmc4QSdyP",
  "key18": "tKJrin6VMCiG6mqZdAkqYhgh6r87L6Vh7tEd6SjzcgEttRPFrcakrYpf8jH7fqDpqx2XJ2iA7R83aMEdB2DMmgw",
  "key19": "387qFNnYRWmVBQd3SeTXdNuUycfgmVsWnVXegqN4LkM5D9zjFL7MjNHxT9sFL4MuxwTZtSyvxJy9G5dyFU2JYMwp",
  "key20": "3fXt1YgW8H8cEVSoGrGpr2tHnyh7odQxkfYqNpzMPft4dPkmjLSkwrhH3t8vTAdWvn9VPfa3V5ASzGQzXnRC3kkr",
  "key21": "67QZgLibimNTb8rn7U2V1FmcNkqUcrpN6WpxbMwze6yu47T5xbKByC7FGJ7qHbW5HFRZyki7UdFcuN4qXs7iJAK2",
  "key22": "5mTCWYJk1FnPiK8vooW4J7MVWh2kBC53nfSaJKeih4JKixBq8hv8zdicDRxcPVDRtwc5Y7pSzVJR3Rvgokbb2mBR",
  "key23": "5ST5NFmAGkaw2EBBDNhss8d5bCnqZTgN7nMqFor7UuLvArDNQ1mkosotFz1bAt8Zn9Ljg8e2ny67fAPE4NFVcCwj",
  "key24": "63TTGVDZARviYKk4SJa9wST9DYZzX94oJXBfkahPMATEJNarnpAsmGC4GBBqPEkBwVn6Ws5XhjEuVuPvJMpdvbkk",
  "key25": "42ue7eMfPbNEtiVtVy81guSUzzveKxUHAWPZuMuTidHusMsG4SFpHdLZmUENy8qa7ureKFxrJhETTrKqfAow5BgU",
  "key26": "Tii5pGJwTzbFUihcA6KoDGbJQdHK45hQBzx3UkP5NTtF2xJpbzRZzYEyLDdmhng6WNDvKHvmHTJBYzYWDo8yRTn",
  "key27": "61W47PHrCeNDRduAeiY4UYoLUVnQos7Pv3kAM9hmgS7EzsS38PNJeSSxLR8YHZsavW8rjqs3bMHUK6n1EDiURDgi",
  "key28": "4Qj6PNqpLChp1sqzgTkjV4BUYNoY97mjdNGGJzRVypX9gWrZ3f6urM87g5SHzSsEgPkTchaMNoNcyF35Dng4xe4n",
  "key29": "54bDGuDy5fvhA1nGkDAxo5UDUzxsQwQ7mJWAuXdyKfi9vCqr13qUFexpKGuqhF9H8UN9j3dFsctz5y13Vdac67ft",
  "key30": "41UhaoBgqUGU8DKqCyb8qZgxyC9Rbr4CDmN3t1QnwhDE7JFB1PdQ9sjtDzW6X1hCaiY3P7aSy9G8hquHR8KiVAio",
  "key31": "53AcGpYSfkkk29Z4xa6ifjk8sK8P3xcLy6YMf3bJxqKwemqRRiLNw4fd9Gr3mYfTavzErFam5667RMAvMKk8D7Be",
  "key32": "oAT9a34DZ8z7Jr7K2tGr2FbsDeSbHu9Az3AF5wtzJvwF4PSy5HUXAGNhGtYhoC86jDR3aaqMwgUJBaTFmiGWrCb",
  "key33": "3AXCcJjdvtnrZtyWNAuVtGUopPpn4sK2iDerY8NhetLXVxk5VvnNd9naK7rFW6UsTCYJsvaEjgNgzGYzJrq1tPM8",
  "key34": "3FXpuBXZdM9EYWWxTqurKqg8D7VNxCKfdwCPoZwvawo6vHLXbtTQPEcgQMdsiAsqbxssPLh3kWkqwrwthY6HRE3h",
  "key35": "oM4NL9RLc4rbFnyCTwJ4v624bUouh1UEgGZMDo8TT2gyAgmBQH3euUUCLy9bqjuS3S2KrWnuM6HN6BDtj9XKmVE",
  "key36": "3AaqVt5PdAhVeKjG3VzuQWJg5upAfMJeyYKT1NkV2KJD2TNkuJS8PouKdCcmhm6ciPmC8xD2wsmyi1SZN5s9iLuF",
  "key37": "UrRPMiuZSnzXt9fShNnNPqdo2iHXJvYhfXzLS8AK1h6tJyjfznDTdhY5iK7xB9PhRsoXMGdu9n1bt7NiFXKrt3W",
  "key38": "2xAavFJ8YcgCbHeJayaeFf9kd5sYLqMYN5EDMiHEwJfkSJQZtkH7sx6BNqkf4GuWNVeVV2LGPv333Xyi1GcZGCzV",
  "key39": "4Ev5ASzeSXUzERWcw3kmosUVpHmpRNZvRu6mKfeuAa4NtfZmCURWjSYiDhEcqT8tUBGa1YXp5FPuA7ikm4T2UAC7",
  "key40": "4GoR8twPs9u9xPZFWWBGbEgvUenrQobavwgLMwyvuWFXeHLbhSFJFsUo9KRRB9cu4hvjUyKtdTbzXk9P5ijxfbwL",
  "key41": "49hRSBtXvMAVspJRCf5avDU6mZbZiXWbZG1S5UezjEj83dhSNZfGqQV2EuBUiFt97ETBuV7tUi3oVetjMQBd6FZX",
  "key42": "3immises8ehNCZTzwxZhvukywH6svZVEDwy4gkwJV2CDM7MnbMgqmF7SSS8bxGE5JFhAXxpJaz57v5PxcHWz2fti",
  "key43": "46eLt6jySV3s342X34rki1bRQBfyifqdpT3V6ojM2LuebWxn7Jh5q1gpUqzpZH4U8TYy4o2LAD4XNp9dm5zXGheT",
  "key44": "2wU2po2oaJ4KTqeZy5Cia7Zbk4qcSpS9gMeHZV3x74jdyfnhfXeRm17trbfdQWsYnguPcgEAF5twZR5xuKnEQcam",
  "key45": "2ziY3nrfxoAxQXufTs68udjLTGbQ4g33bWT8seWLQ7oD55wAHeX4p5WV15DiQ7K7hcSDSyh4kuczBrNdvTRfHJNC",
  "key46": "2BV7vUNHvxi6apThXCGqEBMHTPX5a59BaNKkzzfA672SdYT9d1wzLGdkGyzKXXGBenf3DiP2GRehe5XJetKtGn41",
  "key47": "5rSWRQN5CNej9ykZzDu5FfB3ji9yFmTxR9gNZMatDCrKwBqXDe1EhQoWrGcK2HaXkAAnehyKj7zftkpxFom2rwMg"
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
