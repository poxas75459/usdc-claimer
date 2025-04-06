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
    "5ikYVykKFYCystRjhGoqz7isnjgTvnGPJupuMhWCvrisxMGMpzzFiesEz5jJqPtZYkxUYoVgaaw9wT8dgt9R2hyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRVc9CVuyQF4rB3bzNe8mn1PiSpjvPyUy5snTtUjGm1AjXaDWBPgpgMqcVm8XVUH8iLuhq2SGJPHQ3JgZPWPhYG",
  "key1": "3LZfYJpsc4azCpMSp2dQLtyXBCcMWCm2V8jsnYeXpFhCsreEC4vo2bkjJZpZbUYWnRC5EgiFYuebjTe7VsxTEZbe",
  "key2": "3oj2fm3r4mRZoZdyEpmz7PVCCMsmyCw7bCik9cG6tpZqZQeBXoGTWSWdc622CCx489yhJSLsejkhczmejDsqdLcn",
  "key3": "3APoKXLETQhmo8FQvhrWJEMKjoTRvCWGLCXadVrqoLDyVXA2r8L1idfTPLCQVdM4nZjdeHWsRzbqLHhKBvWMtyTh",
  "key4": "2VQCn87y1CLayQzWRJkD7tG6xoS3jCapYFxzfGdsPXRsAkLiy7mqfgdGqXPMaEghxq4MrkNixK5xc4gETmz2SmCe",
  "key5": "5mnteL8rCib5cYtuDGzR5xs3HhvpVUadspw6k2PLUr2L6RMBX5a4BufjahU1zYmg4gbmeq8zVzyiDEkNm8PET1h6",
  "key6": "3q46X9kFVny6CcPA1pUFQt4inbnJUAdyp7xkjR49BNhMzL7PGGCZ4QQcqse2oQ4CZWEnq9W3aWPJBLbtA8WQjZXs",
  "key7": "pLhxqfbmty6bgYsYKsZWShpGunCUeZPJ8eWngFxZ5ECbAw1sRL6KxcTe7YA1ox2nrsbVDgYFBWPMfTyX5VU13u5",
  "key8": "4cyia9u9MsQA4AyPaBUCDreDYu5WqR5D9Df2mMLGjNKimQmT1JKftUifhK9UZAzBEEgWFWXLVAa6wDyhYX7GQ8BY",
  "key9": "3J8ZhnTnVXPiN6aYehscMABsUnfDNWmHVaDiRVPRVFfo1xPczCMbue9sBr96jmDvYgzutsLBKoQ8yf3YJWMfz2Xk",
  "key10": "qoQnDQUoxxWAU5y4erWfuB5zoYP6s4Bks2RjWuqhiM7CcChrTVR6u9fsY7knyxBBJUWfDbMU79iBqFNmosVqDUu",
  "key11": "2gfJZMbQhMnxnW4dfTpVJned8XLvJsComLMGCp2SJJrUHp4HRHgWYREPsQiduesqfxDiooYCgd8kffMX6aVsJQ11",
  "key12": "4QNxgJahXHcnkJ845n1c6oKHpmqNxMrb4F12wNWwH2hX6BCM3CwPPLTAER6GpnpuLHeSCB2S6eG5Dt2goWYH4A5m",
  "key13": "3TwGz4gmAperoJQJj69zn7xsXodFDtkXpfkxge9gVhGJmbukJeA6aaq6mYW4RxPQabqxU9vNv6FsXH6aZbQE5iXT",
  "key14": "63JqxJHjNjbxe554xpvJ2NxWpAYvdoV91SGaWcMgTYbf8Dbd9gQNQLCrsCDiiU6YLF1apws4Gqmq6siCvuoqqpsW",
  "key15": "4dBYte8sCVuZmMaq6SiaHa7hvARbk5zbVbVcEjcmZpF6CigKZWtU5bs4hwF92b2bc18mKKcstga9vZGGAuUKGecg",
  "key16": "4RP1HNbd2RwejYi8YEZN6aeJkQyMmpNmmGBvZUViY2AVsTKAET1pKYftvPSYc1gDS2ZNuVFDkb9kHp8HswsrCXQ4",
  "key17": "3o5gL2ynZF17ZY3Ssg1gTHjEWKb5ZPh2e6ACU1Rq4Q9TSbhjvMbPR2nhB22Ma6cTtff1ntfcSJSBQHWr9d9quzz2",
  "key18": "2zpKpoXPAZotgnxVSMWWAxpxabquEPFbviXhBJ3DnMV4axcwr9q6w5ZvehcN4Kf3pk3snbSiFDkaScgaNzM8bBgC",
  "key19": "3pNQd2SZqkV5VN7uqmMeocKJ3dNYddyycjakxCrjVfEEJni5nZyGqco6qaSojuWcD4iD2aQRAQx8n46iKD18cqfK",
  "key20": "35fHSXLKZSmQ4UxcUzaerAFRaqpgRFd4U3D94UJbkyB7wXdEGmsLtRjxhVUahxMsA7dQfdYL5beXwcLBdNxNwMG9",
  "key21": "5JHhA74zWU8HkXR6cEyXTnCzrjRyehSjhfKaLFcErULXhDrF3GiJKEMCdzVJ6hqxBrqfLaaznb16Gw5shmP54GJq",
  "key22": "4CK82ykBNtFvq5RR7XoAZsza6j2FQociFzYY3MLA1d65GQZFi5fKtTwq79Q7AcdjzLZLxCCeJdHRKiTmWKEoPsx1",
  "key23": "5MN8CwyMfMMhGhEXqkisoJGHnBQEDibe3wNUSjSQZbUW7iUrxEi5socsYUHLUWzKr4akScTZNvEVkVr3jaJYHp1Q",
  "key24": "2xEd6T4K9RnoYUNuUa7goZiQzArcTkmghDWD9yZ3u49Q74g275QHVbpf8MspfivGdrHSm3eiuL4jez5kNPaV29db",
  "key25": "G8H8ZebuTJzZg7dcXYdeqLZ99xNX9pawgAimiwsPmoemJZtN6gxtLimgFsd3SjeNzKtoFuNsARdxKr4W3fxNoPu",
  "key26": "2tgPPguhbwBKxiseYR8s3jXfPbt5WmM8HJg765wZARiPwKNrCuGvHxTmAEWjnrqGwHMYRV4z9D7VXvz5VZAwfxWs",
  "key27": "3rt2U8bSMg71zwhftkRyD6LG1mRag3Tz7jL3VVDhMLQeLQS4iNMhdeoMwafXdNaUSZqLsqn5XiNDU8Tp7zFjPmxV",
  "key28": "g9AmBLRTkcmdX2RtdxDSCzTirE58m4ekUdxr3kEgU9oBD1sZCrzFLyznD2UoZcQdjcAtnuiVenqJm6Bc3HRPdDm",
  "key29": "4K6cE8uyMdo9JvWgw9BWci678hmvAzSJGhfzAo5CM5LiiogQBjja8TAXbeCpx4hyGfN2XqWMQwo2BZuJahqU9eox",
  "key30": "285zdVJsa6hcNqDr8WKe4NxQvU5Qf8PmVA1uYJL2yHfvBxHvuaA9Y2WLorVMgcQh8oLrxqAVCJhwrLQ74zGS6T25",
  "key31": "ncvaRiysTYTgHD3b4h8csZiob4sTYc26yrJFMcqmV8WzfSxzwsX1gH2KzZVKgzEKAQHpEEjWXahrLSvhrkHEyVK",
  "key32": "2wAvKVT1HkGU13LDKnZq8ZnmtBSAQVVW9TooCkoauPoWCqNfFrKxfpMbnLBFwTRi5uL9rPb5x92UBi4UCsr7tuUG",
  "key33": "51yGF9t8q4j3iLm5UBsZQs8mibFov2j6opYVE4jdBoAcpyvZJwF54HTSWnvjfQSuYva5t8zTArBxc69ruhLwQqcT",
  "key34": "Y1FYSU61T8EKX3xCykLGyd8myJ89t88pnP2BQSX7PgzWf5Pj9tGJ4VCib2ZUCAZndSTiNnTx24DQvSbKkRUGR9U",
  "key35": "3xMqyKYGu6ZFh9UGuc2F5rYQQ6YRBohN5yV1qC5BKe7tJp63Zvpsm1iKNLWM5nHffiVcWqDBizTxv7yuoq8M41ex",
  "key36": "iFytEdxo9iJbo4Xhi5yahRPLdyLobddACi6qBP9sRpHgaPuVEvkKGuFxpmft19gSXGqwfGxn7ogbxw94xhoKHGT",
  "key37": "4geFssYWdBoUHvx6xht7J55y5EsSrrHk7r4HajonKXMPrYiUZabSTwKANqcpxeKQsR3bDhLhhfdDCwrFCjqHqja5",
  "key38": "5oqzywWAQGHWahXXnG3PCjfoGFWJwfmR2U7S4Tu9wYteJgs9pfsPuMrX3Q5edqoqLDa59dvVYm8XPvpxKi6tGYp2",
  "key39": "4GVMcJwoFz8PRHrYZaqW3rYeFvCY5rPySeaMrr7JdzEohYNR1puXzpy98dbY29vKwXZhCu8bmGCEQqjjyfqeEeee",
  "key40": "2Py2U2Nj5LAqxQ99MBZ2bhsciEGUney5hNjkfpGMCB8tXuvZ5RCy1yVM7yNiQVDYVAsSLhGNxcBtj88wMaX1RMxN",
  "key41": "3jgNmCKRUDjjjgyRcxE5SeG9W6xJyRNd4eQKbXg1vdtr4o188S1GZoEdcumg5Bh9avc9zFureLAuhWWkEScAjdFQ",
  "key42": "3ir9bWV4HK4DgMAdJUmQGoW5RDXP3MSq7fZfeUGmNuacSePUn57NPRvSKzYVyGiTVb5UUXpo77p8UBHVFj3GSsJA",
  "key43": "2GDKoMLJHKF3UUoWMyzDXqqokh32i9M2wus25Xa4QEEJwW7iuXH6XGfoT29DoMx7fq5iANZ4zRFQUCGgckgjWaRj",
  "key44": "31kSAS6pQdtdRuSuKuFQ4AzCgSaWxEZwpamNKza35VBLYNjZkBPsAiRj3g3sp7PV46P78v8EheqUrt47FSmuSiDt",
  "key45": "3eXHBJZU6UfhZXPE79msnELRfTyE5wKeWZuWCSaW7hCZ8yayYbJRw13iGxNZegUftXDFqFaV5717bbPWxRLdVFA5",
  "key46": "3vTYpgM2e74t1vLKTiqMYXVtDiMCQJu9gtS3DhDGomtScB5S1zve6XmjZEdHMJ9u4WnujCke8j9oJBeoRd83U829",
  "key47": "2MZkd5ghoghTfpJbQwawMeyN9aQKkxqzEbky9vwbV5mBVLdJoHJmSigCdpsHcvVm9YFF6y8TNHfYbgPtqXUCKUGn",
  "key48": "5udj5tmZWGkUxx1BLEjqdhrhfaoXdrSQ83QeNAiG669JSF2ebPb7XquqpproaPuHsodQvi938wWvj4YQv9Z3btfX"
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
