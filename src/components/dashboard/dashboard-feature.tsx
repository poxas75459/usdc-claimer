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
    "3Vot4rdgk2kg8ZcXJ2bxBfmJhds7M9Vk7BgimaNTqxgyp1CAFcyEizsVVZkjaedQCqBT3A68wyws2Q7V5pkFTQnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xjDm48DGxjiTMyRHfqiejhYzkkoFmvaJE536JKgcmFR3g6YMP7tQUnVg9atoJnXm4ueUYfa8UHZCJeUrtf638Uk",
  "key1": "no3Z718Dg7Q387t7rDEvhguYgaUTaSrHUkeZPUnFWShHh18ZxRS4d6oK8pyX5AHKVi2tnD1eSRTe44iR6eS47kS",
  "key2": "3WUT4SprjqmnxFuE66aYXxg13tfhzCsmDDCUSRroCwy7rC7orwvo9KzmEfxRVQEpzGx2taNnfvArsw1DGDLNXF5B",
  "key3": "4Atiiy9Trq5L4N4Zc5zGrk97XZQxHMHZ53Aw5P2FL7uL7RzsAyYHcNhVn8YqV36oBykM2W8qbFFu9y5esRsrrS4t",
  "key4": "2Sg7zy94xfcm1dG6n6a6nHhCqtAQx6ytQx6N8RfPebx3fvaWVDcBQ5bEhsLpNBAP6S1K855upkTAYY4ZaLBZRc5k",
  "key5": "66PWrcbwbzxrNmiH9muhMHfK6YNbguCAU4q4qEcCWGrK48Vc4ap8ydvBVbBRzqubH49eV6avw57gJTnnU4Xy3Y7K",
  "key6": "5nWta2KeWF5tyNzaEDoXdf4t3rs6p4RFPF3MKuKskhVN1NjoLMyKDZjdQEePFpoDcqZYEDbvCa3ojXJVBVAfPHrs",
  "key7": "53hYydYV1tHN3oUgbuDcZzLRZduYp7NY9RUc3QrfpCDCJHFymD3N1V85CKo147zEtHAybmmh28dZiMJhQRSbDyhX",
  "key8": "54VqXy1LpjCVVhryLA1HCXHz1uLipQtzyxG1CmC51eVihLM2UKokrZCZNxgdsSYfkWoZ3279x9sHndh9EvDi2v4c",
  "key9": "23dLMooYts8wxApJsAScUGYTCYeLxzXaUezuwYTHr7fqjUQZHQFrdgJVm4tYGKZcwZ1fGe8XZMu1FhMRdhhbt6d7",
  "key10": "3H1Up8oGvfxygLmZrCfT9Qe9dBApYVgeEA4kWmx9zpGmASXn6L91KprzSrqmAaHD6U4uv6HRyWaGVsBMEjfWKe7K",
  "key11": "2rC2HgT4STCxqbXS2D6KViFWwZC32E6NtJsnQsQeP7pa8eQwpGvLWX98cu3gxrVPsSwvFq7WP2nqD6AXuYfdpFNS",
  "key12": "3zmRXeGDULc8e3EfcH5BppQiaviy1EhoeJkEXWzC7deC4CH5DXvZ2dY4PpzVXdUKVDS1RridWsrmieekJWCtMEQc",
  "key13": "3BLSRSW48TXaNvLsodi4BXbrVQ9rU9nv9LUZ2jkVYkveXHeCjEVv1FMs6CsHRP1GkMAhAzfaVrDZKK1nyBt7AKeS",
  "key14": "4ndyjM4VkikHSHZoa1WQGcdWwHq3m4k3kMEH51F6cWKQ6xJRfJXrqyx8YFPbXPjsVnDrp7KKHQN6qPGY5vBxovHr",
  "key15": "5b5QKr6k5pgedUNeWQ6TwQLJT4vKbF7hbPTatCDBSiNPenKBUeSct7wFFdps69jZ6QBFiuUjU4g8VKao1ysKgnZ4",
  "key16": "31hWSwwX2TAQBfLswQfEJ5ipeSCdbtiqXqf7biv5pLG8rcu4ad7JoEtX3o23YeYrGhbRJfT2AeAoEr3pPLFo3bGj",
  "key17": "5J4n8vvJUxJPjAtip9YTyhudL9FST72WbK5HyndtKSC2NpzG1UEWpiWCBfTspk3KhqLqtEw3VCKsfGFUAmoVGLBT",
  "key18": "frZoiQWmtUSUrhDDW5x3HLfgV4woAx6CTwMVPBxyMt67WZY1FR7xpz4p8a4MqQwy6hsRn9RpisdmDPfAt47zf9r",
  "key19": "4tv1ipjZiD6peKq9GnrYhVaUZsRdpyzADovVrDpDokM1YyCMxd7qfmf89BuVYaoeKDkkbr2Qp7QNu6PzS7uGriFq",
  "key20": "21WFvjrgha4tPzCpcE6tJusrdTTmNzZhXK6zyGQaE8sk2EFMMyrSK6KeLS21mrEyS1Uw5QFMWEsd3PwAHCiYwwtF",
  "key21": "5MTKNDc8NycYyX4V36Ly617JwrTScTx3gpZg6ZpLjBjawhFwXs1WFmHedFJrabgPjbmvNvh8Eaq8WxdPQdWH9me5",
  "key22": "53rrva1tukBjZjrJLhEWijJPx1xYgAfekUWeT5g2UotaVBeboxqUYd2D9zB2M4VhoTHvPz4bnwdNkyM7va357xho",
  "key23": "4w2CSMVLew6AUNx5HMzpumK1rxGH9K7pwmU9d8JypzFkKBQWjLpA4c4ogKrREvPZrjyfzxVbqEkeGLxparYwrHxp",
  "key24": "5ycKEG3JANZoYhQFDgJtJMhKGJhjFHMhqCLfAiKLnMwaEPzqEESCNYXoxiZXvw6WVSyxGrkaQeGVX7WsRJEhEKvP",
  "key25": "4ZU2s87cj3SPxLZTGuCp53c2wGHeThFyt9FYgsSJtR9iBQHrdDw319P1WsXquh6nV7oTqpcY2fWWkeHsDTYQqZtx",
  "key26": "2sL6UQ3XzpEBGUKgETeZrazAGwYj5agK1NnCmnopAEQ11Rjy9sMfTogBdK9wY6iEeEFfhZwZhw1shGGvECwy4BBv",
  "key27": "JL4tMtLQZ8kjki5oeQrc778Sce3ZKeaqVUcN5tEZ7x3DDZBuLfrrSZbENy6NjwebPqCsSbBfYJL9zBfCENYgEjA",
  "key28": "2t7AjgxGdazyyQgrvgmau6tKW5HpGuXTJWkwdVLB7i2nWEGWcagQv2PA1pnRLciatZ48gTyFodo4x5FfGQ5MSZgX",
  "key29": "4zbKaad9U6c9w5BvZtb9FVbwiafnpytSHY75DEerRqsiVaZgAmu3vznEJjuXCD7HbZnUZNkvge7z9tLkYhpzYNb",
  "key30": "Uju5TU2HWVRzVumAcvFGY9MPTpj1J8YYgxDenoFpdGzMgjfE5xpQK5mtD1kYfd8fL8TfqkHjjqGQwxY92nmnNit",
  "key31": "3DdSJrD5Lgy6UCFwGcunvAviYXbRedzJqGbKiF3cvxFeoLudDpUmSSAzjhZerVzf3ENX8yaFGVF86FFyzqoT1J5h",
  "key32": "5U8znV2P8ZWZmLXmJ5xLfdfEMGvKrYUV1dUfGsio74imZtcMF6DUhDvCFGQXg1ZAemwbnx3fUwcUbzs6ZHZ4HRmt",
  "key33": "422NS9REcqvF2kbaa5oKCP2WaW5EuqPSb3rWCWba8eVKguwmxULKATAbpgiDX8AdvWkWxq23er9djk68zLYPcvsG",
  "key34": "2TPtQpUWHAFvbzHHcEmp5HPpyRmc637KDuYXtVEVSHi38JGoyM6SCsYSrdgxhwXr7KeEj2nHAgxU6bvvyWowu1pe",
  "key35": "2VYhve2VPS7gJvBth6x5kYnLzmKvaMWXUqxNxBtL3c1EKZ4UGxVTQJtHE1J3V4wU5QQm4Nmz3r4DmAfarLwg4KPN",
  "key36": "pwARopRCA2CmrV2mB4mLijND1gpTf7X8f7X3uPnnf9wKqHQYpoLyxtVni8cHoKVeop4HLBbMmUt27LAiSAjAjDi",
  "key37": "2BXMgkVSB6MQmpDvUexxTcZSytQh1649mpbjusQcsfhEJ4FD1N1CLRghFsJYkQjp634CUxy63ySA9p7b16FiQp73",
  "key38": "5gZWvYcSKap45E1QsUyxhvjxhosYjvvf1V4q2itUDwuns96FiQdZvrzkaCp6R6CyJjArdk4syt3Bxvjqz6rj6kQB",
  "key39": "h1v8G3hGHygb3rKfzZx9fmmkE1z8KtwuRBAEgmDPgjcbWLNtGEqKjcoiK8AR8WuecQsrmPmGQhCUTNrd4yDAg6x"
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
