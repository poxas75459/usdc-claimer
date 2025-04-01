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
    "5kkbd6BB5Vpr5cunDoHXcgLTZeCbMfQUMoAyiVqaaQjoKzB8XC9J5mYDAFUcwjPLVB2UbTH8DZNCNYHCaNjTsUcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQ3sb2A9YUmeZYECG7nSMbYbm6osvp7baiAsupenkaG4qGCWznjaGXbFwWMsxRomT49V6qGY2SGihAU5RCt3FMG",
  "key1": "2q8LPJr6GM9HLSoRn4nVkqU4ftkAXR9vcgHxTHzZT3pX4GYdKWozDC6KaCxhMTc6V4beBr9Q1noTdxVH5YfwvAJQ",
  "key2": "4YM2C7j7AghTNEwbzddEv4LkDAc992RMMwf5Cj9GNA22Fby4xmUr1jRNtkFXTBxShq4v6iXMBxZ3tkGgT7SKorMa",
  "key3": "3JTsHW2MPrmzdM1kgFfBvsP7QgLScXxjiQZwVouUjN6uZ8GBKJ16LjiYJzDWPNns8LBJzyo3wxovNJsy1qBTLPS4",
  "key4": "64CqCqMapRLg5X8Maodx4qfnSBvYLoSoxDVEcHMP34xtngt2VJshCbi68pCGzqnqMDwtx9QJQHRapb9KQX6PPGRp",
  "key5": "2PJ4mXCofQvbV971P1gp2qNGKMtmbG3FD31ZBqeEoiAMBe3zjRn17NAvhL4mVqobR9ThKHCjrybSHLQUBEzbmd8K",
  "key6": "WCW1adicnJLFrpZXPnsyekrmvF8Rr2w59m5DjxN4dmLpSpdSkcgEUT58D8UfV25JtrwYiP8MfKV43tmwJmeEziV",
  "key7": "2VWTqfwD62uXrkSsZSaVLKpKEt3mPbhA3NrmfN2kMoQq17Qnb9GntGjMKXAaB8mANpyNtpfz6bMNXxcpcXJkfJwa",
  "key8": "2Gr4TM9ckGnNDksPcUTNtDzdo8EKPgAntc5VK7Ynp4oxkxXGFpcGyN2ek8tsjgT1XmSMrDCij4U7ZwRhnSmRQCij",
  "key9": "2zZTgFTM9YCBfzA9FAKhM9LFvuFFZK6d4jjmHrcJAFNr3LcjaBkwNELM8rtt5Hd9uiJHcoKS3qgtFJq6shWARrTo",
  "key10": "4f5KEoJbbFNnUJSPfrcjYL2Ky6DKem3ayQLSrokA66cboqyLk9z3rA1X9sYV5XMKhw5LkxVc7KgWxoZUS9UJ9cwo",
  "key11": "5yqmWfiee3QP6f38ZRruA1aXsUVfzunYcTmsjeWNLJ5P9aKgawhbrr8432vnYmd4sLbN4CPCWR85XXMc6vC9x2CU",
  "key12": "FP4pdw2Q87FJhU5wTydV7yzNFHdSJkCYRc1c4pu1Uxrao7ToSP7bHLSqm4YCCy1P23GU57KMCXTmBvYr16XuShy",
  "key13": "4CKXgumKWTBfcmuWqYKXXcJg7Mu5A4L6gmG2LnQHzHLp1cB3hA7wLTZ1T9i5DLHcKjrqC1YSE3Jzt1UbNYXS5QsF",
  "key14": "3CVV1yoxwCo74LmcdvU4rP2HNbnNt6C2H9U8j67HRRiQfp1FaK6vuf3UPNMWuGZGwoC69BarRFqto2SsLgVFMHXw",
  "key15": "xS4a8dFBgd16Z7PUa9Xg68nqiqq5kmNcwQJQA12DTDpdAAtyvgoZB3LRXeTMTwYdMsDBYW4xQd18tKoVPSGtek9",
  "key16": "4u6x6thkyvcBrdxtSyb23ysnXFZnkc3hMeG7haeigsuvJqqUYcuVUdbtvF9ZdVLuJAFJRtUvD4XsU8Yh6FATaKnN",
  "key17": "2PwfzDcZVx8d8Q93ujFcLvk39zANre98joNL41m8XV7hvzQWA2pAiRzYNvZwJ5SJcWocySkWHm649RDLJ6vXuBBp",
  "key18": "5CMFR66NqPmYFEVTZNiDdLbMbeqfzY22zT9kcppGimzeuENP5WgRzqQCvuVdF4NZWm6DdbVSQjD6SejnjdVjgdHs",
  "key19": "25Up5msF9fqNsueKGy7BBHmMLL5sC8uQsWdVf4nGxc6mFhXC9gB4L3KV5uYfPRLyrKwKGZdpMiDmWvzVTxydWa9s",
  "key20": "5i4B3mWzH1ijoG485TEn6SHFtYkiTsgAuzWnntWWvU3JqfBhjwx5N1Vmt2wWVo17ECToWxs1bzEYYuDkdoVCuXhH",
  "key21": "54GZqgnLMZNxZfoNNsDXFJ2PTNhH5LFBSewCfVtLtk2qAygCZ776ooxdrfDPYAGLRm8CcaEb8RsEDwkwAiENDWwD",
  "key22": "27ryfFtbjkiwAVhseDwupSdBiLdRw2zy4f7kmt8FqLpGDy6uKKUji5S1bkv5c9Xno6eFfpSN2Fg9oKsrFU1T3Pdv",
  "key23": "qVv8dyYwMKA8kmqBcHdzrLTEzPqBGpVeWmtWvCBXyLFo7w7wpieWG87iRt5RYy4kop5eDkkpiEw7vuRZDSfY1vV",
  "key24": "641Hsj6RPBZ9xQJnWf9fb4retehJd5bVUuH2ZgCggVmAKQxXTJdRDrhFQjuirGyGxpKRZTP4cUr8ZDrwNkiXFCCq",
  "key25": "57cHLBtH82XVjuxdKX4MfQaFYWTwF4odznwrVnYKouh7MZvaGZj1oahRe5ubmEGXT4ByMZtFseNskXkPMqcaoQKK",
  "key26": "5J1ZDisDRH9tmZuy1ZHjcy3Xf3kfkXh7w4v7ezpPjSsshRdPvRC8MwzNAavZbUbjJiUuACR91gPaxGtMSiBR6eg8",
  "key27": "53arxgYFjRbWjSWzDW4erLKBmmiZobTS5hefVap3VW31eKok3namCBsa4pCke1ipTioGDvhVi9yWsh6nQY75Mnu1",
  "key28": "3H5JLaCUsNsKcc9HScWMe6VHwyGdAoGLWUwbsxjkGLXSpU6Z6WJJxgzKUvXNjGwAUPQStx25Zy9q4bCmsc4sav8J",
  "key29": "5M1D1Hw8c28CvbvUV2JUvPAqDkmHwr8MehwtjY1VXjHfjbAvUiSdEZFFAtE7kwvyBx9BguSQcDWuXik47QsCzwJd",
  "key30": "33cR1jQoEgLwQuvFmQYixgiUBZzVhCE9Bukx4M32Pu2HGBiJhcceQKMAFQRet3RdnMBKeeggmRDTP4rVPVekL3ZN",
  "key31": "36dhkVWDxKBMM4wzei3MCXSJN6eZPvxAg9sbkWkRDUcaL7C711wjEeDR27zDx9J2qRjx9wbeJ29bhWMFCysbKfBX",
  "key32": "5inJh2XyYbBUBHrpnFP2BTmTdxwEwr2LTvAmCvZ17Hiqt7o3Qr2Px5bXwyqknu4L969twkcWd53JT6ZqLJW8m2NH",
  "key33": "sD1kwCs1p6qCajeLf6zC5EL7qcYbhUP2bbwb31Gpaf21Ar5gtNcVhtLwEFWj5uo1E5xm7s4RuKrjQbDYrkNUkXP",
  "key34": "ZLdZcZq22bRCFb1hyZgpbcfuaFmAE3TebfcYWiJqjULEFQVjdsRyAwD4k2nU923ogjjDK942k2v75F1SWEjtwRH",
  "key35": "4BoX3jWtQLWmGhmAZXEQrY2eY7x7iCidE9rN7NeZba7ofspCs1bigU91pYQmj2Xtqr3ABq7trUz5CEHWoUBz47Da",
  "key36": "4rXfCZCmyfkFYCyPeXNPc4SvW4whw8dpQSTjPSfTgZQjKacS7FtowBAvgLYdy9wAbGDkFMQbRdNk4aooUgzkM5Vh",
  "key37": "tFhp9mdHjmG7huDArgKMjnhMSLQrxQnaa8YfzVsSfwHanWLQRihBe7hMyzAukWdQzgdUCAczKvnqEsfGTGBKa3c",
  "key38": "2QNVj8wCRce64TtW7Y5t9DKqVSBbst5TtRgvHX19N5M3FP3GvBgpMNrRxjrqcguuUeMdccKpReJ5UTuBbWkBDPUa",
  "key39": "3ALSb3tjoLEgWbPx8FUP7b2RXivz4FiK3BnukeD1EKghSgZSVoAsecY148jJfSVjDnVMmJun41dKQAjTiPxF343d",
  "key40": "2mdvUrGtVgpuwqDLiVRPBzjTxSw7afuYT3BENgqdDywM973n4QaEAEcDHPx6iDYadeKKAgoGjvFbS5Ec3sH7A6sM",
  "key41": "Zu47KzUd1cYaW7uddoff39FL3f9zTE7t231n7W9T6fUfJpUFoRw2dk34CSkFMNDpq7aszonF12NqHk6EEjAekft",
  "key42": "49XVEHkzLRJnFBLbHXfrBX2NdDypGpXT2hT6EbXLrKfKyah3NrgJR1vLQ11zujA2RMrnuobbacK6ujXsFhVk5z5w",
  "key43": "VNz5HFLNxQRd8ecDFEhGT9s9D7zpdY7iSxymGRoY812b6UXT9RnNNV85m4Mi1kdAZzmK1aPxb2Axrt1fKq6DA5A",
  "key44": "2KtaW2zq9iYKdvKLXeWBCjjek69AqtCcyAuFqT9wF3isGKhsP4YV3cz1A3LPDnxAynPNw2cvGDqtJLpZvLEVAMH2",
  "key45": "3Ye5vEKYwD1V8zhfNaL9hjs4mtaiKkrLGcXfZYLFmoPStG6Bsy8KUristNeAMDFbA1tWgo1hJfw6HfiwrqwSAg6y",
  "key46": "4DmXVkYpitQdJY4jzYfFfMMPAeUFf8W7qXe9EhWGzc1uCrMEVnRmBedpxLoBxC7PZ8aQ1e3Ti9z1SdTbuUhu5ihp"
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
