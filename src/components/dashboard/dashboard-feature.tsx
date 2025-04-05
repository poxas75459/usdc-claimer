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
    "2h26ZV8dHCJz6LU99WLwWxGPzEa283KF3V3pZtiL1aeaayWPk4iYge9fHs1vMwRzcSKLX5g5vj4TESgbN3nNvxF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQGLNU57dwkBaz7UVNCf888BKGdvCHNy3Qz7MbjDTudhgzC6SiuQLF5oN89kpTfmWKXti73voWEkzR6XRGhWgog",
  "key1": "31JpN8eEP4UVgghGASussbzhT6n3a7R1mesyVDAMcDcue5wHPpCgQKqct3h7WcgDt6xczUHoPwfWzNm3icW3zrQX",
  "key2": "2H4ZAKwYFuz6kFzQykZTBJaqwMipzhnues9mhW7x9JR7shMPwWt8K9Q7dodTWEK5PXd1PpPvHGS2XT5Dc1BPMY7r",
  "key3": "W25eij9gvJsVuMX2E9bmvUKsFEE7NcpZWAQuGtVvHVYygxF48VTudLZUgNCF5ErcvozTEZ3NzgNRHNDDusiFtAR",
  "key4": "588occiUYHkgz5xmhr1WqBKYdHMwjLbT4RnmPqCPmfUYqTcVrBxovAvdNqEDremeHzgtJX1oRiT2iSHGMrkK3XVw",
  "key5": "5FEo2QYChS63eZRKwzjhBmcSKatXc43MGWqJUMKCnDstCuSBj3kFMEnJCfpKuEUrWB2Juf4u8r4qNSiHp48dV7j1",
  "key6": "ooX5AqSgRL61fUQCXRt6DeQyp75wqCoretrZMNzh4m11RbRfD9rBTPdq3xomHyD3vMXugzHWVKbQkv1Q48takwq",
  "key7": "4Q8Cx4Yh2Vn2CAksDnm5wngUM8yiJE5pjvATHgqwHHEapFtmpcY1mMXTgENFHwb57go9KBe5Z2H9mZ7PJsXcFxPB",
  "key8": "5SwpQ6WuysoExTYoJ2vBJE4ztK6VW5AgoQssASoo4C77VWwPY1eBfJaRS6oYs7g9RniiZPhSAokokgpxNueXpD8Z",
  "key9": "44zp4aj3wNBWq23hGXVnWRbb9YW9RokC1F1gXFEafoMVmoZvcqmbUJUUKwrfAkuUUiqq1RLdcPFSPfruF86wvMd6",
  "key10": "5Zvgv2sZEVJ5cYrbjcfTYGykXiEKZKSR55F6Ph5JYG38UiNAjMHzyzYYvg86KTUcU6fBq7vy99XPqK1A1sZth6P9",
  "key11": "3tQdPi8hn7nDALiowKuvXxc8pgQKd4GDwyCpky7wkCsh9wo6PTZnVCYvPzux7jkmQL9cNi7SLSc6NACPiap5UEB3",
  "key12": "5z2gRTk7st8DyayMDwA1aRjMyG6tnKvvUHsDyoMfTza2b5yi53ZTM3LcLckoDbbDQnqafwpoc24Y7aX68LFyzCd3",
  "key13": "RVq2ftYHRzcJ3TtfS1jbdHjNgqGYR3g33PikUiXMhcofXsXNjo9BAU8HKWYWFLA7py7TL5uvJ5SpdH7bA6Bu85a",
  "key14": "5t9ZoXUKaZq8d1VnSr5YsknfCDLUsDnZuZcZPwodfCMwMJ5sEAPrbTL13fvdJH9YFecWDzPL6vrLGuT8XmbuzZzK",
  "key15": "2GVQSv5o8u1wXvoNiKqoisogmuZ9qLCHzttzKq7CMSGTyZMHtihnNWNr3vda3NBxLoqYpuFTpPf6XRmrqdPfbLPS",
  "key16": "3MMJ5Ad6HBLM7Bw9Tg1QPY9yLEB4mRc7TjVUvctEvQw9vtWvtS8p9hWj9FG625MewWdnMp2KMekKvNjxEsT8S8Yr",
  "key17": "5RRcoVQ9x9deKDAYioEcKvF3vQCxG5jGNigNHxteWjcYKJsTWxVsdDrhkQp1L2e2EfAXbaMnCRUbnKVLsfhis6Bi",
  "key18": "5APfJt6KK8s6bHccwnLLetXUjG8wyrMp3DiGsPXtvxDN7fMgptmj9dtqccUy6q5Z5J8RwsM9NdUsZkwbkdQifWu4",
  "key19": "5M9mDkLEC9YpFuhVVvm51WXJ8CvZQmeFViavihadRmHH1UU9TKGvM9BCsCew1avrwvJfKahkjtDwWdRvwQVc9iAs",
  "key20": "2YXuEaPbg9q1XwXxh49aZcNWwkoYDc8d7FXZwCbvPbZpBUMq2Snfe8QoWM2RK6KsMuS6hKQLxZy8hkypGVwLaYXa",
  "key21": "erymyjfyzGRc6ca8WJojQ77xtaVY5gecAf7a5YaHpWJaSrqA6AN2mQuWXaoj2SVdv768dpr3k5iZ4KZdrEPz6Q5",
  "key22": "2NNSTdZEN16XFjw7B2xShtf61qFrdYtsjEQir6HFgFHfGhrQcpG67Q8i3dW83uJPgqkMmf3XUEyUR8V8PGnaiRCz",
  "key23": "25tzk255YpE96fo71gym4QXRDcPKFcFvK3kdMnjBLDXsoJEx23ohuySSLw7Z75fRowZUVQHiF2txeDfZTkw35bsW",
  "key24": "63oo7KTSngiFum26YoWtnhLYYyutggoU2yyf6vEKeocVNEoaYoWs45FwFcwK8Qe5Bi7k42ZazjyZtXn5vGfVxqcD",
  "key25": "GqxBMNWnDLicACiEjcNaXNpYadqYSww9qtDxQjPDxtcV6ZcbfzNiVqWZohNHGR8tZEeQH9Re5cLcVc4Xw24Pxsm",
  "key26": "4EuMiHEQXdnpYUKwpoTHsSDb8cryuDEVYEeaAmnrpebsVq9wTXoAHsDEG97tbvxnWYkzDLwJYPNfKCM9HzciqWvj",
  "key27": "2PW8qHDRrpmCHXNgJ1SAghoCSYKJc7oWN8TurLjmTzXzxNW1fVtedTSaxfjZYRbb4Z7zstiSzw8ZT16hapLdU46s",
  "key28": "a672QFsiecYvNYypihaHzhw9qjWGdKTwt9koRKTgESX1bY3Y1fbt6a8NTZhJ7rzBV2YthAwSn8SJGsBv7RFcUvY",
  "key29": "5vx2gNkpTz2wmhuKMxCZP1qFrNwjZJRBoukSy6hxLKSAqCgBRNh2MLw6Qv1tTqwTjfNfnYZAQDpcKTdfrLXRVLD1",
  "key30": "oGppWycwA7mRXuXWrCGD5B84wrSJKHvAFC879Ksk7tcN52DUR2XXd42sueDwmiS5wjvY1CGtMnPEDhw3U6knaR2",
  "key31": "2M9TcmXxD3egPrH4Y8F6gddFYfKXhKsHMUamcMuiDH2KRRCJmEkRWRUB9kriDPHFfgnH7i6GZy2wy5qgvXEi5PHj",
  "key32": "5Vh8rX324r4UzpbWRpXKVrLDrj7MaASJbEa6XJWTxNiVgFvXueTuvTXA2C1QTQjBnFSSNngpvuQsqo5kqAf6UDzo",
  "key33": "5R6Y4BNei9AdtEahvKk7XZYgtq4XKF68f1p7QSE8wzXXAo4Sy2E1YParh97pTg6piCBpdB1RrxG3sYeTYpexnq3i",
  "key34": "22P7QzXMiGrqAB4V6dEhA96TmvZR6koHvRMjQvW9d98t6ewT3aDTqydvWh7mUFXyc5Jb7rjdeLid96Jb2Y9XhMFR",
  "key35": "5RXDNswPCpbGCGCC3bVC87FDoK2C9qdKkAS1R2yQZ8rMdTsgXqSBjWVf1PqVuGDYFeEW93LCmxZT16yytXAdTBQn",
  "key36": "3Tv62Eb6gdhxvb3DgJaDwHeeTY9HwZcfaemvPdRWRGCdDxz5SxfyikqyfYzah1R7ZVdMGe7FQBXvu6LMhmyMDRN4",
  "key37": "5nYZuALpXaFTeSnHGghQA9i8yHeScAqzReGqgM8rHvCtsspPC3vWZbk9xofigr45htratoA7ToJspFSdAUCUpoDP",
  "key38": "3bKkhVgi6ahPohU2qHqFirxfKDYRSuLrZBXCMMEaZBc2o8eKt36BpkZecLagJPRLLgXeuXGk8SNL8LpVpjdidDog",
  "key39": "4YmCBcAQfr73zfB5JoQdmYV7siHY1rkAXhjynyrLyJ5ziJ19Sk9UvfaYzWATzjEHLvfg5BK6mE4F5rLbqxivocoq",
  "key40": "KBR2J21P5MXmMqZSFLAVm9DZqNzhbuJc5rShvfSdwZcdxd7J6e7ERKzEvby5V6jdMtzwPMTmGsJPA1KZti4MrvC",
  "key41": "2bwWXwkgU8FEnCUzqfZqJxffBvukN7qtuQcDCEqmdBrcViMt6i9FPwq7sgPuy3RJ4vPrs5ukHVbaoTA6mHQhAffi",
  "key42": "3vy2Mta3pA4JedqEAzx1QAc9FknYw6hCsanQMUNSqRUiXHjUDXkkTaeK6L2NEKxznieMCNhDvYfqLc3WRLzk13qU",
  "key43": "574d3364J5MBYCscSR5NV1hmPDUazwNrdWAYSqiAM2VoVztn7roKbqxzpT4MsRMFLJbovMjnfEJK7Hn5aGUt8AUc",
  "key44": "4tB3LwRdCFMEte7SyTM1yy6U3F3cRNeMR6ffAaS7JSczRuETs45DTd6ppkAP6rhPqNpZNDMppT7NgsRwMwn8Tf9e",
  "key45": "4HizbNixzSSLjik7NaYHrh9qzPe3j1rAejR8JW39TEH8WC3n3mXziWnFUAg7pBs1LpJwR1VcJXmt8uUDgypqzjPR",
  "key46": "62deb5TRZEVkDEV6H4GAbvV6fA2STmfTu22HZcqxQC8qWHih5JY3HiT1CXy9A9Fwbr9CCLa1MW9kfACF2wfBPNxa"
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
