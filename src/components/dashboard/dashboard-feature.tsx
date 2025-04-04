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
    "B5H7YesfpDAsjyU1nWjUghdKG66dXLJYzVQg3diPBVeSUJtKKk9Qs4LLPTqtmny2iJMEeirY4Jq9wYPgXP9rPFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWPrx1RExNQcM14mnX43aW7g6JMkWeVPehu2dQ6euMjoHk2hzu7oaJRQiMmgdNU7RSYaehwSqLWK5223QNEMtmB",
  "key1": "2mSGH7tKwPB1y1KoGQ9icbKQDCsDdQwMSQnCUJQwHrgM2yb5HPHLQMD4Xyv392EZustLq65kS8zPh24uQRsVT9UY",
  "key2": "4cdjAmnVwWUMaCwKoCxvywwmQDstRt4WTJ72DAZmTT3aJd94Gg8bNQ2A2jSfXXsSvhLYCPyexWJwSWD3Gac1KcMg",
  "key3": "356xDp8a9BXz2GxmiZUZd2EqM1owSEghP5THeYwcRtR9CWDhrR72asipRreNfCNznw8iE5bGvLJLvR4BiBWzGX1A",
  "key4": "4DdFW3x43yhefcyvgFiajLztSaCMorWai4AYq7H7nb2UaL9R1uwU1nE3XDMpD36TPx4239EDUFt4gRiXAbVQJKui",
  "key5": "jQiDiV7wx8SWx5VsYo9wtHTeRwa1fHFjrPEkwh31uhnAtGVi9PNvKZErmj8YUaJWQqKm8CRqWieu3y7bAgxLVHv",
  "key6": "3VQ5ZR6NCqVLBEWYmQUdZXu9uTunM88As1pvPJ53mEHCVyxb81QjYyAPcMc11zUBoUmbCytL6HajqpbgGiRMrQgs",
  "key7": "3mLLVJJ6AJW2Lm4E1gq6TGNGBHEcwMf58KoDfe74NdncoYtKvkiVu2kqH6iKsupkgezuJBtYzTcGeVXBhYYQUyoK",
  "key8": "5c5Y8QRgYXs8XJcsckwmyfRMp3XAvD1cdeNmkULqppvVuSEidX3ds9n27DQLUdwaobWtwEuJP1Pq6U33J8ZXYyBC",
  "key9": "2vMUBqEUkkM2cUqmWFcLUmZRaqFwjvQWfsZtjERG2LcPHcLkVrA1YjbtsdqkKC37cYhpniNnHG5Ews3D9w4fmvNk",
  "key10": "4dx9vYTziRcCCsW78SPoBwPYZhKw7VcHAixYTczyFcWDHdnZhRHNhV9qvDCJ5c9XKM6vMhWH762yC4qBnqqQD7Rq",
  "key11": "4Rz3uiHBr49SxJaU6iTXzuNcLFVYbYRfGK4cWYFU1dVtHg5g1Q4aqNzvJm6PLqfPvWh9a1vFhuwWCzm7xJuuad3B",
  "key12": "2C6VAp37huVweMhQmL4awAZDkmhNkW3udngYhGeUeJtQUs9Y9YVFx6XYqgTJ5F2D3RyGysPzhNBcLehUuuhHrYP8",
  "key13": "333eGVHMDHWgeeR2C4Gz6Z9MgHqxtM2Mk8rifvedodQ7uoiiVRrwLS5QcGmxrGb959cMXKrwEpBMQ8zmi12AfRXQ",
  "key14": "2H6zS9gchokV5UdQMBirQ3HkNBXS8dMyXL7jvLpizi4Gzws8e4TLYmbLWhQRr5dGmu1utzZAE29d8Qgo3dPh8A1G",
  "key15": "5XBgFxTN6MHLbTjer1ugJbirF8RfroSqt4ZGgvdLDRU4EB1fjVZQdiLdqdo615QVdp7cerUh2s724D5iezzAL6fA",
  "key16": "5Ym1kk4ZNmAUHnsFGNb4K3LcfTUmGc9KrVnCL7UNiKNXu3xaYb22RYdWtmGWCVrforo4C4fuYTG5cbMj3yMGpmQ8",
  "key17": "3gEwgRVfogFj8YbegGHu3YfHDsVTbgg5yxVdX49P2eqpJsoQMee5sKN4iW9xf9oFvP98RmUhkvEfemsYQYW3RqRY",
  "key18": "nzipcwJTVWZZz6D7SpsWTezveLVC1zAF5Sc6gG7Memb4BV89cnucrB5ojYGgzQBKsf7F1dQ6rewhqHKVNeYdDnX",
  "key19": "49aRsHTgoGCmtKdfwLeBEw8DL21aZoFdSrNUCXdvnXBUyTMEg2Hh65iunVwcKGpz3DhmzCaR9r5YqEzkbg22GqCz",
  "key20": "2QfzMxcTPCbDgrZmoPJKMCJFCWTJJeRgr3Bns9wGXjvmsAXdRbMyPynMT9ez2uRC7ttW4idH9vgyXmXtw3uC129s",
  "key21": "49tgH4779yRGcqrRqVjJAVtUg7ZnvmddVTExUvhm5wyvhnMUTtfbe5yVEGTABn3yjPNR98fMZJeYN4qY4dFr8RUB",
  "key22": "121CFiWkv1QofrS6Jcecs56XiMjCXGtPnYk3PNTfsnr6e1pqRj1Rm8wXEK57fHg6gGZuPovuW6mW5Z1gN84nPC1w",
  "key23": "14Vt5BoyZhVHeprrWswXRg2DgZUaX8vZjhWHFx662ynpNZRTUuREWJsanQWq1F6hpzC4ix3xUHGn657N5mLwvKH",
  "key24": "3ooH9BfUjk35Y8qns392RYW7BprkX9yRjJNhABWbxA7x8Ua6wVkxMkYmbPaJXNuU7YgH8coqDZtErAy9VWpt7UWj",
  "key25": "d67Wy2VWkeqRUprrQangvfChxxKEis6BxyfUS26s5ZFvNwWXBt2K2bLDep87gYnKENbj8G9VWLeucAxqFucWGdf",
  "key26": "5dkJXX7cQ28dQHowQ8Z9MPgurFKezA4hyXEM3D8QBWiEnosgdshAkekcEykwD7XnvCxShfNzbLmySAM5VFcf2ddN",
  "key27": "SL2FcJ5RTc83dnVGaBWnjpiaRhT2cQ1kTWa9vaPHmgAEtQs3jtp9c2PB2HJHDkuvybmz9xpyRUApv6MYrGCY4X1",
  "key28": "YNrNwkDi5iPzwYybjs5LgAxU8hvmBSN8FKWDkks8bxbefnWrM1HSPkh7YWdTnVDgPu6jR5sT1S8qC2VTZk8hFRu",
  "key29": "5WpagNJUC3ELFEzu7vdv2ZB58RLLmJysyZUKuQfxpMcU5WZBbD61GLp19kv8ncA3QeYQvisPJk65xQyuxEUQ4ec2",
  "key30": "3NpGjbt3DHw1DezCU5K7YtRwaae42tGDktqEE8i7cyX6F7BWhLgzAsdg5yLMLLvomLKN1Pbm8rp2fJVc4tVhiQNX",
  "key31": "3LJeZTbxwvWFxaLG73sY6AHVpvakErGvhcj4YwVTpywQuWddDQEPeV9KiPLZYiR7e9ioE4D4jKpjXcdf7mHoKAHF",
  "key32": "2gHdHUDNJqU7VjGYvcPjYKrgXhYx9Xha4yv3bCr8Hvsj7FkpN9cncrL9XzfD4MqaPUcKdC8LJiuPUfKomu2FXTbk",
  "key33": "4iCxeoxq2sBWaUau21ADS3PnCR2oHdoPTwodrT1T3MhZUUBeLsUZjfsRaiMqYWBCost9h3cPwHTmz7hGNuzUif5h",
  "key34": "3zz3my5BFUoS95jT9yAG3oHAz1R9TiAetgPpVUsv8nTDDmNgrQzr99R6mXqijBTggdpZ2WxTUtRs7uwF68KuPC5i",
  "key35": "6GB39bx76g8N4MX4Hn3YYG1qjAXRuo4pYa3DagjS1DZ3b33gjSSy3ApEVWoYyuKrBMcVy3YB5PRB8hnVRQjGqGq",
  "key36": "2F5357UDQKgnUarYSdcP1Q13n5b43tjMn65z1Yk2hJaaWs1uSAKNREh2VWruW9sKh6T6jvaxrhMALmSNDTXy6YDW",
  "key37": "4MjCXwVq4wCSmWM1h5csKuiajWQ7EnqFpkpXLGQYRQohQBs5EeRRnWW2coBbswJvkwiGefzeHoaSLV8HBeBwdS9J",
  "key38": "36ytJ3GmJZ5L8GGXvtoKGUvRLggpdaTYK1ru9vukVPERMaLJBiJE8TNk8HvH38LX7szBwUSAa4K4MAgH25RMtYtN",
  "key39": "3zRsLkMTZtJx4W7ZwAyTrcKhv9zwXByBh5UycmBDNqMYSbvCmv6KViY9VXC9bW8U61SaaeFM34PFgzFBrL3MvHHv",
  "key40": "FdHZSvvucEJuzBGCGGHDtwTp3M1eDpoqD6rjA1kxVPZ1ZG31ySmPjdY8JRzRrm3p4tB3ih5zgiwf1f1WA94krJQ",
  "key41": "WW6q5LVuc8cRjVA8SQzvSsFh1bAtHKE3s64FSnmyMNTSSyHF5ArqqpWdJqpvYgkF4c8f3sYjxkpD8Ntn8Z7iSBc",
  "key42": "4Xkqeg8X9nXt38vM6bX8ASaBi4UnK8WBK6MJHoP1sK2BreXbCrJ6LdK4Sh6xWCYE3ZuBvMJhhogzzwja158X5ZgR"
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
