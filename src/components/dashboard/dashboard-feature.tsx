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
    "3Af4FHPx7pC5sP7akZ5yXcpyyTLB8YpkzoNyr135JdrzD3qrrGUwvnagSn47qTJphrtiL3HSgbcQHPhS3sS4vP9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FJJ9T6vSzkwMJsAL771qAx52gLGio9ng4Swyon3f9NA92KBJeACk2hWW2eDYxxYTN9sTVvMbRaTikQqaeuKVcWf",
  "key1": "42xan7KERPYCqp6UbpshgCVLRwVDq7BXm42HbEAVpoHSPTJFHmF9rD9yqaLM2Sc52JU2mPCpYKM6HXoFQGFhqjsM",
  "key2": "2MzGEbGSDmsW6gBXx4bLe4hPBuxzFXbsb7xC7itwnDmgwAYtra3JUVWJVZRZoLtm4eF5mo295PHEMLbA4HwtJQX2",
  "key3": "4murx9JvzJiAKhpFDcSiGbP9xGT3VCrcjWbSruB4wp6CTV3w5xYnPzszmTz7ZV6Dr8qDm8AQZjs4tgc8GjeSKoXR",
  "key4": "2QyrqTx1cxRhUnHpdDs7Dw3vjH4F6fio7gAZYZXcvy9sQhPfjGMtU1McuLyuvAcJQHzjP31LQ34pgH7NYHL9uVGu",
  "key5": "284whebo1HfgekFdT1BXn3aDmjQuMtLdN6jiGLDcAAmTwLMhk6QiWgzgEaRnMGr6QsfKB196URCf87c2dygNb2cv",
  "key6": "4HNjRJJUswNT2vSke4oqgByLmaYfiYRcxGZi18YM3ac4eyN6rw3pppy8CATynwPSErR8RT4RY9HjYDXeKEVyXuHR",
  "key7": "2pZwhK4qx57f1Ws5uVcTPZTq4ikertWCujEMEqKTj2QjNNWsJreQcCXKr42hHUqY4MWLhFqYvKfKC4Uu7maCYygp",
  "key8": "49VNx2CeXqAGTXynwGiXxemk9VsAmY8syKE45mgefAVCTkojhtYtqqfEEWQaTx1Pk74t8CV3QHVo9ReB6Tu4PUBd",
  "key9": "Z8M1oSu3ivSSyhktKCgqyLtsaPW6WwHVjQv1vgmtB2EEsVPwqA6LwZf1pMcD8rx4VrgjWA8aNKpt2bCVvzXAwEs",
  "key10": "uDC5ve8gKoSsRqpcqisJwfX7hPns4Vo8e7mTPmc5CwLZ7BUWAPnafwV4wrMJiCpwR2fUZ8KuDJShcAWotJu3BUS",
  "key11": "2xGyDLtiRkqTZYSShLuzLUMvYaMpdLaaKDRRkDWVuk1P2sHPjQ9fT9xRQ3BhSnKcdLupb5AHfyQun4SLQZnT4ouA",
  "key12": "3nQntK6YvEzhi8KErGTqTow75ZQk8JV5QzkXKV9UVH9ppGctNeoMggfH4TTM2FiY3L8RRnY4L1B4zGE3cARwicbX",
  "key13": "26RioUMjBjXgiw59DLgsvEbqozDmsVkEBiSeQ1v1fa6pGiMJ1gcCPs1HHPZrj2oR5XqTCxuA5W7qG9dEuntm4x43",
  "key14": "2eVutqfXV4VEmZHrXaYrrdS6v3BfEQKEJz8CXw24SDFXqk934vbyRaL5Mfc1SSDkp8EQYu6d3kHbMtHkXeFTBfBD",
  "key15": "5WT1dion5euWpV7rmih4KLYAVAem5kUVGLi9ABV3q6kWzBVYcoQ2MEZDhzn2rWVwkAE29pAPXPADcu21DPso1V2a",
  "key16": "2uDyYtbx9dbVtBeU2r6UB8VzowaXHvHrfgEpUUNCQtPmVHKvAJ8WjQWtwLoUvfP3aLa5zu58wn6KBX5EiazBqMMS",
  "key17": "5P4rrmSULSbQ5awVSXHyVum5g5kzK2heLBNTRQGRgHHxUD7YodQmBmBC57N8Y4ybXKqeoBbYBadsbqdrLuuRntbQ",
  "key18": "2oojwuHf6Hcuy4Ra6fsRd5HcTDGKBCQrBrfDVw94Up56usFmhU3RgyXj9iUiBwMnSv3JvNCocKVNzonHHRqaUDUp",
  "key19": "3kFDUtShnjJuKzZihtgfzoLpmkp9v5aG2yu88bd1Aqwq6327YUPYe3BYUp6zgy1WHS45Pb65cKeuEhKDK4rr6Qjj",
  "key20": "3cJAux4tM4PtiT4XWCGUv3w8cya1TUhkV371GRUdJq7oy7mVhFHr1NCXzz3T6jJ5JeZA1ras5KTYUsmkAdQFHYE5",
  "key21": "41yqSivXNLLJvdgeVsFiMDbJuDxULrqeTx3AhVWz8pDbX6phW6FeJ9pHKzjo6RdHsnuCynujqnWq6X9vepKb7Bet",
  "key22": "2rWgo69HvgtKjzaoo7x8iG7MZGm53xrnbXVXcBrKMuCqNNFU1J9gYWLMB5ywQ9vmb6EZpkyLK4DCiSXSrwGYFQDE",
  "key23": "4VoqZ1Fwo5XBjGTgUa1uw1UpDNitP398kCjePHpQbmF31WEbK3JAFXqmH1fATCSvBk4Jhcks9ka7vQ7xLopZhEw9",
  "key24": "5kJZx2FpsyYKdEEEtLEYNPzXFaXpu7hFmKmmJ5ks2ReFgQr4csZeLoYMbMrqjEvMPUhpCaiKPEXC6YFFWSdv6L6F",
  "key25": "c6uiopWWMMhDFfT9sXcXBQzRLDF494kpjQTt4oqhQ4zy1e8kdH8w9nbABUnoQaFM9sVRBU7wbQ8MWQrpkvjmcnX",
  "key26": "3QMZ24dNcRMLbqGewJKs7FKJMRJ6DJyMwuXCyeV8JQb8aSPkFbyrHsh8ibKfefT5Cfi6kuvZNQUEGb4iM8Ln9uhV",
  "key27": "XVqsacMpxHkX282qXNUZxdXTevJgx1xPwLznhhdwUoXEQpnBgoqwzhMeJmaM3BdCKEuxW9kExM6bUiLz6WFapVR",
  "key28": "5YHCEHG97DaRMDF7H3mRias9y4fTkBSrMEcj1UTGKoN4Jwd3P2jiDbu7jZ3sRQCWQLW2bDBYhFV7eL5Vk2fU2Sqn",
  "key29": "4MBzSPPuQwiU6nWazoPJcC79NUMjyvwA3q8beByq6wjdqc3HnWN3DJWQ7Y9c51ctqNgSd9twSDcQF9D2LTSp5V3A",
  "key30": "2Ag7CC7283pYdQVtAZHhnfd1Ei1YAKgJwp7PFdRq7R288ps6sHxzVBPhWciL6G1YJnvruBHoNdKccqTVDJPaLiS2",
  "key31": "61waU7BAbf5YGD79EhkU9GdyoyyxiXJH1jrrsv7TR9hJSxHk7eLfk6B5nxwM8nBC9LgXDAVWwabPRumeBrax7TCh",
  "key32": "5Qs7z5JCjj8cJYZ21kGopSR5ts8ZGXNiLfeUX1vwsoALNteScXLNcCmmXaZHeD9W5ZaRizKWgsXa9zDdue8YgJZg",
  "key33": "2u5PdzedbRNzTW23yBrfqQD8dTBKZt1icqJ5HU9TVf6UHTGCQ7feDdspG3TSbMyJwMs6pLiA4zGKcWn6y6Ctiz7e",
  "key34": "5z1NAuWt58CPP9ixMfxuqprih3vJEgQqSrjkQE5CfipLJqLy214zY7sgUx8gkDePHscZqxb5zwz1mepXKo1kkn2M",
  "key35": "4Utw4eGXEAjr8wUDn2LV9PvcMpeteejX6VChq3paCeoB63RabvUed6NcN7UY9B4sGz8amE5MQfA79HgzWN9i66gx",
  "key36": "66aSatGXm9LuxdQfrDGYSbifgJpsyUhjPgFYbNpeFXKfrDfrhkVMXKKZYeH9aRY6Cca1acTFSks3eTEL7qTCzs1u",
  "key37": "45xe4phSSitUgubU4jPDdd4qoJGVJkQA2EAEhfiiQcpuzbPKxCJjkGgdbotgv7KiJDm7ynwYHfQFmeghtQQdrujM",
  "key38": "22YuSZnVEb612ccrVM8F5tH3dLN6gxKDKMTRKrR2kQ2hqcNa9heKxBu8KkbDCuJGymBxDF5eFzPX7wPUhp8octrG",
  "key39": "42j4fRbsDHv7E8WFrLAtJytCkK5aoTf5AuAkrdHQiVfU3feGPTmyCeNoQXc3w2jCQjUKxBNXH6jcaG8fhqNyfK6v",
  "key40": "3kTaBxvmjfBp37GqxyfUajMRMzEKsd1jojjrPKJJgyaXSqCvFSJakFXNjD5LaW6o2cnkAcr2PxAyRLxauhz61BQq",
  "key41": "318hCkKXmL1hi4Ux4p3EDh9ie1iKFH3MseQ72VktB9kfmh9oorVgSjcsS6yNEMeewHq29269AjsHiU5Y6bfrfR8M",
  "key42": "4wXuzoP4yW7Tv2gJcpij7EdvLZ5zFuDzCCnWRB8cGErEjLystNn9woBhHZyHmY9TnvZAEa7KWh7dxUY7mt6kShk7",
  "key43": "5a4zqhzqeRDokEULYniCNge8fSbQY2r4x1mZJtVzF61mYr49J3mFEU6dhFz3HJcJc7gSbw2amdvv6n1q8x2jXAfr",
  "key44": "3VS4D5WU9r9m3ocP5foFWhVTtPXbAtiGzNkkJEUanoWFVehyjHT75Wk1LmSvYxSnTvu19sHies9zkMtoGzHNvapN",
  "key45": "49e4Wa4yCUWtUyX77asaqhSuLv8DxA6Y4Uq6YvrJjL7oPwcFxtpZ1HbED19kcvpn7pVqSVBy9M2pqX5Dm4J1pctq",
  "key46": "MDE5XcuBLT4LTZSASFpeGgkxwwzwqRvg4LM1nJNrSixLXMHpdyGN1N2RhWRz41WHaGf6ZFCa8f53HqRb6V7TAJx",
  "key47": "4EJ9qQRUAQvwA4vm5qHR6VgiN8gbzoikV38poWPi76JoMfcmVDmu3seKTvhKQfMvBRxFxLJqEc7JAW2aR4JxniC1"
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
