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
    "GVNc2NDcFEA9xyStMG4Yr1e5iQRRdWKquG6T9YdkrGKJtxMED36kb28ECvFSwHu2eszm3BwfcMdzT7Y3M9jh46T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K41SU9kzrXTRu7j14NWhs9dU1Zzyufg3upkNbGiuKKZjCHHaAyf3oNYJC8U7v1hqMXikPjtWBfavwFEai72Rvz3",
  "key1": "5TbqzPbnMhb1sXG2v5aNyxWP4cHZMD5eX2wBGQivpES3eBspGrf191nipW4StJXJYXdcCKs9c2ZvzJRCgy42f23F",
  "key2": "5PC3U2gFWYiyazh21FBaWM9c8yvQAWcBE2WLVzmBrDfwH46TFugLBSpD2MLXrbcyFyia5xM9YqyqLnQLuF5RdMpF",
  "key3": "3KVZfzb6FGpFSKgEf1CRYpGvPXSDzDMtntXYhCNTaZML3y7QzUFtaS8piSKhTPPJWUPUuqAuGA6nEmSbsG7AgisB",
  "key4": "2GekmYdTfFSPwFs2dSvdsU6MtDy7HVBfCsj2pH4PqpP4hdFEVZ9s79jbgwF1ZysJcENBvcRpoUfZirxLXcuJwRWi",
  "key5": "5xFnAbH2sphx1cb4fqheLswaxtcJSgJvuwXB126ojXYZSWDZfPXVaFaFkmkMSNdT9qLq9bLRYRpWaGBevUwXha2u",
  "key6": "4Vw3zoHUmzXP7oUEBjj8mo3E64ENBrFZmz1CMmQcL6YdJtygfwNrEMVD26c8xD9BC4EGgW5uJSUu1L2nKoh6Q2BY",
  "key7": "4tY9wWFisRipANN18ZcCC4e9LtdHdRQSsVTWGrAD4eqN4Yo7ZMUN2xk6syQ7N63qqBnZqA15WUfkYPUGiDZECGeq",
  "key8": "3NwsU5B8xXUmCFSE6aUBRts2GK6rRdC7ohJ66KA3hfMqz2XTiMnC9t7eGMAa3shmAtTFfmyxXFpHoySTbqggX3Ja",
  "key9": "5jJHHdpGxPy7CUP7BsNAgXximjUmX4NESZbb8gnfoXifhekczWWVWwhTaKpd3EBXaTZEBNTkZwnsh8UwidZUCFTr",
  "key10": "2EGYwZN5dFBst6HttKGLUPRUuZgoVVM4mvYd1bSaTkyTw1JpZSDXYcEz6SAwfmoqj7a1o6G1f1pu485C6dyZDDze",
  "key11": "5ZfmzGEPzKX3qFW7z4EcuKgJkjcKhJNUgV3B3TMsXFzwBuBR5KQEpKDgFkV5t7Bgyu1zD1VACS1KS4M1r5A6nJao",
  "key12": "fHn4tvtcoEVYGAqG2izU61yWv84hBvceySZKoBErvu3XDpWqoHjJ9AQjPoFzn727riYxiJT3xtG9RUj1AEar8PA",
  "key13": "2hfGCnMa9mFnRfFB69gB1MU6s3BFSa2idpigLcv73c1bTz3VTFhxS2WR5MYprWZ7NxvWiZrVboauFkyTvhodhexa",
  "key14": "2A4vXtUWzr6ymbPMug1J761s448ynLx8UxPVdftQwX9kfndA5mfL2V5iYLgaGwVLpieWyHBFABmFRtoLdswYnhqg",
  "key15": "3YmYnh4R2XPNf5WQGBN42au8Vf24bHdkn3ouQZqEdSvk7aQGf72oS3PCDM8tT6T5EkkR5YQgKUtKuRXctzdSAJbY",
  "key16": "5MfHGrs2FatfAuvtt9PDVkariiDvZXCoRYyF3ozxX4uN71absPUNBzY7hhfqqEXDYbQamm2V5QFgENKfyaJJJHLS",
  "key17": "2Ln1VWh5BC8EdMRJc82jFLS1sF1Ar9LGaTcXSwLAJSm9LrTF8L5JyWpkuS1kUHLknSdMcu4z9DT4vvB9nBhS6NRy",
  "key18": "5enfNNFw12WmRsdPyXjowzQicMqkFdvBpJ9ifVr7PYBUZ3n1W6xM3GXTq8RvpJo7waLSxjYUcw8AodSw2WJ4SfSb",
  "key19": "46QWsimPjjbh3itz68LSAyJYSpHrXJs78cW5BRZ7dP7q4a4gZFx8N6oxygiSEJbMKVonhDCVAAnuWaMirUSuG9XH",
  "key20": "4m1HjoVr9DvfXUBLfJnXWiBhfrzrLXBiZD9LMEext51n7DgyBDniFFhiegyzJV7Z4HA4beHS34dnHdktafyF74Ug",
  "key21": "5zx95kYutsxf9fJqDZMedHSyjdBcBuehftnA2NLkpMWXMpD6k6w5cN7hJwQLw4AxQLkVQFeZr8dXLUT3cd4vDeDC",
  "key22": "4mjJpskExib1F3GyZK6ysfyqDc5mX27UVCAPHWaaPvRXwBnaNkMu8LxBbzAiEAhxu1J6thmiPPYgcvwoR5WVr1YZ",
  "key23": "2hwqTCy4qaWhXuNmjVF74dqD92KckvuDF8xJwuGAQnfCimNkUNK9Ff9Fj4G88oQNqphhcLqY3xj43uhirTo2oaMB",
  "key24": "KUt81XMdCtvtVCR6AMYA8pYGJavG6SwuqWeezt1LZ5qzgrurPeAD6EwsGsFKKURNwLkuoN3uvq5Smir8Z5RZ749",
  "key25": "3sfrZTMz5SEVhETsx29HrFqTChNkZGpfVk6jkRsH6ELnktYq8eEzcpXv1hHU5dCdTfFQtWAFiKhfuXATdSr1zXMp",
  "key26": "3cgYACpNQip3EVMz8NyukMoYnFXZ7pLbbeuxV5q9b1imEq5UEduw23thXdhWocMbKybzdnQ8V9jfQpBwLK1wNA6k",
  "key27": "nqPRqywkZ9GPGK7E5UWhKddLuLfWmZaxDrgBB963oZ63x7fdc6ZaTLQfFRE2gGjDU42tJ1WtzMU8UKvGX26E96i",
  "key28": "2jsSEPZgtj8AC1T5VEPVHbgi7dCdVzukTqQyoguJWHacuuVKne19UiPzZP7NgunEryAParKKPWnSR1Lb3KULKWZx",
  "key29": "3PYWisNYgdyMXwfGs1MAu6mG8vcfZSG3p7A7FHJVAFsjo2hqmokcBuw2nrzUTmtYYVfGQxTNjXtTZHNrZv3rWHCn",
  "key30": "2GV5HFVaCN9NZBZjhydtLY8FKQmRe388JtL1cikeFSjsZ8b51XzaKwhoyAo6EHSmVNyRuoqvMYkf7eE69dtmwAv1",
  "key31": "2B1ktbygnFMSeSaoC3Pj3g3N9X9Lifpso4NgAn8ZSYuraRjQyv8suVjzspxnvY4eZPmWpWN1eUSaiP7CC1J2WrU1",
  "key32": "rJkZwAFmCd5CKGkQ8rNTBz5XrhgNttiTdmTepVbv9ubUM5sMBeeZgs7CfWaquSXtrgrsS5NgDA9fkiDL176xiUS",
  "key33": "hJXY9Hw9cixg8f1QpUYtVTP8VMBbQQToi5Fx3BhrqUi6Yn2x4rjzpUbMVM2UJDR67YkTCpfKiPxZynJSDPXCh5o",
  "key34": "sBbUmLxnMFpGEF2kehJ3BBM2zb2sCR756eH1iFUyFznYFzqinzpWJEMyYVa5T63TVevqjNatposmZv6c7MXxHNL",
  "key35": "3vrdGFpXfHpfEeCH1rU5wiRmWuk7pSv5ohRaaePovqE2fDPN41FZCTsDzetTTxXGnF9ovUqCVEGaxLLonwJTZkEc",
  "key36": "4zJFv55BL33NfsKy4q617PeL5pYi3krNbadBdfp7ELZyDKo8HxRSeYgoixyZXAzfb6igyJLwkChW4TfKvAwj6TYA",
  "key37": "2vRvNyQxEp6WGDkCUmAbdmHbs9w6KrZ4BamMTRJdNbUZQR5LGRj986ZTN1EVb58ByyqpHpzy8bNAKJtHXdMvCNrE",
  "key38": "3HCTHKytEmMjSM4wf3gaCyuuAEcuet2LvQqcQ39qxt6LwNVKfSijQp4hsqYNuzy53VaBPXGNPJea3dqcrG3ynvcB",
  "key39": "5QKVe9JjP9xn9fGk4ksffkdLXD4qkGJUJhVKyLhXeyDnKzV8wPsvcuPU3p6UN78yth74AFvfa4zxXuJd1FgQeP8v",
  "key40": "2SCfCPQ85atw7ELJYMjLDoK5cmdEzGPLB3VTU6WZUBFNU2F2oQBSNRY5ARguBDhvn9nfxVX47fU2j7zbxvh8KJBP",
  "key41": "66XYRVMzZQuHLLj5CQV8ogfcVH3f2VQD7Ct2aHGaNQPa8YSJEz8hjNETfP9bKdj7vwDjnGwnKfmKwFah9S59WKY6",
  "key42": "2tP8n3i5Za49hsMXu8KjE2axaf2gmtJbZtU3qu7NM2jhMbcp1KhKDEBxBLrDGDEbJVV59BwPR5ASTKVe86eKMLFX",
  "key43": "2K3mkmMondKgZq78gPzVTQ5Tui32ykzXbJF9aUuC2DiXtfbaNjxNrHGMxeY9SbXfPBFPFYthE2MsQMGTYb7S3pFj",
  "key44": "6rEjxepvLnjc2GHrxEhx4bE5hczEoZuMXA91f82P84T5LwsNruRbxbNVtjCurZgFCvDhbpiz7ZLg9zhy46rgT1j",
  "key45": "52NAYgtRtk53ScQeon9SRPzUynR6VHcJo1hYbE4GTg5QjACJ8JvMJos8Vh8infLuwbVGiKgGzaapNg9DbWQrjXqK",
  "key46": "5N8bhqYDA66e36AuCac1g6tNYUee6e4HWyrBBUaRuuVZvbbsVKqWXVsmKEfB6X9Bh7qoM6Nz9zrtZ4GXVjS7s1iu",
  "key47": "4eNA2yhxRUsVdVdGCAZnsdf6bDJYx4disykk7zj7FM7sgW92euVqo6ybjpxPzKUe2iFqUrvsnQ2kQCKuB446brr7",
  "key48": "Ae6JEmqCC8xRdNKXWud8n4L8vF5z4ehviqDZGeqiAwGaPU5zfTF4uyXPLp66XJvsmsKPfEXipb5tu6D8PxLADHx"
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
