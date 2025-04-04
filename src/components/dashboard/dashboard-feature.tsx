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
    "54vAnehRp39ZvXKSbrt8eXZHBeEXYUoAAvvxtXtknK22FiYvYfpwFi59np9xUjKgcceGmXjp1tFPBi6fXEaoGPAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F71d38YN1YrgC9RRut81XY613KFZQDA6dcoN2YfYiYRMvRBKMBxj3wdhpg8tHGm1MxLjtf8ubaTmkN43G5DP36T",
  "key1": "5JVAh65FPzb6ayyefcmpEv42gs7x5GcmPp9UC1N58QgPfb9KqhXQaAaDXYTitsH9V2wFC2oMFgrN2477Pv7RKXnn",
  "key2": "2mvb5FbG8127Q4MYNBj5yCgfoT1thjpqMSWo24c4YSbAVQmXiNcTwe4dZiNMcFRPf9HKMcwWHeDkDg5F6hxraUi9",
  "key3": "5kvpQRx6iZ7PEb4jnKsdGW65v47DyF4KjdurgjEC4nnmnuMranYsqPMBAAps37EN4NauRVE1XBuDgVfD6qR2gaXm",
  "key4": "1Cx7kVrtHMzift2qkGczTDRCwXoWp72KDt29MvrW6soz9hZ7vBCpXRHD4PSxL686cRAQHyYuYBPBC8S5d2g9iaW",
  "key5": "4B97aAQdsy6bjbK64T3rCQP7SVgqxkTNKi8VvKoZeXsR8xPDWAjgbh4JRYaWmBuccWT8AY84KA5NAy8PtcqqnTpv",
  "key6": "2WTU89HUzXCWGJmYTtcT7BhCmwEkV2wLvzW7mZRNSY99xXnQu3tcGub6ZS6Bgjm5jHaHYirMcL8fNWbNEHNLPaLi",
  "key7": "5ZG5uspeCTzn2wsSkv7GM7rfShdDUAJHLy7TJ618VkBJgp7PZC52HTP4H28xjmxc8bcV4tDvbFqHti17KY55zsVx",
  "key8": "xt3SzQS2qb656iAy2TyJMbbA7rzj9u16KW91hKfgxUCijAF2hhmTBob9iNbNUyysL5pURY79zd5z797fvAFX7gH",
  "key9": "4QZYUpz55dRhtLzxq8WGuWDcVN7NSjnvTJa7NSsoCPVqBG8mg4HpXXuMtvgc5gTmkegy89yGBKFHzPwAJxAFmamj",
  "key10": "2LP3qG9QwCXXjGci1UknoXo9KCSpYN3WgE5cRpdRph5zjBghYXJkGPkUA7Q3HwbD5L3K5DX42ay6ARNybLq9ZhvS",
  "key11": "3ZXvDzFEVP7JaST1tubwCCs77HcJZtqcAWjnUy8FNoWk3JTJYtooKtXMTD4MHsrBQQk1tGDTm75r5BBtx2j5rZvX",
  "key12": "6vy2PSHD8bmSMonon8Au2aHfqDrn29UWsDy41DB86PdDfaDehVAJAcvkfz6WDv2SwpzVkPter4ZEukjrniiE6fT",
  "key13": "2Dpf3JDGiRztSjY6Mq3tCCXcBcqDNfM4V9YSiLv5hDvxACpk2Z7JW42yVWgSsUiZQCe6htwyKZewqcuicb3sujow",
  "key14": "3zFop4J27GUegSSDvdUbsueZnXm3BakoTm5nRGn72BCZcP8yzWGvYiLQ4vQuqpwr6fJHjNL8yScFu3gghEQX8wtX",
  "key15": "3G4JgZ2jt4rf8VxGMNeQ7FfZ8wQTnejspBtYcDsqoA1cDVyftBZ1F5gAks9CBinqwd8BF3MgHMYDRRyEnXAQXqB1",
  "key16": "5vmz2nFBSmR1xVabamPSY1ZFqk5XJ1qyvb3tCpMsWaeWnekhHHmK8jJrozTcvbFiVheLyh7G78HyE5G2EXtSqKzp",
  "key17": "2gWrC9WVfCGG3sS8YefR1wt6hFoZEQnJLvdVVTgnk6JZfGnu3RZBpfnDiA87rxj7FB2MTjGQesBxwS2P1z82hQh6",
  "key18": "2EGCE9g1NGhLV2TdwGWeGVLzUcYZY95UBkf9DdKBPmPTy5niXM4PWUAhJZ4PUp4tCAuJAgE7XPwYPRemiiVEXETJ",
  "key19": "31vJECybpLAy1vY1jKRnUvygCkmDKqr4hTvE8UiGuh6f6GaV88SBCdjwkXCiAG2WVkoibs9hNVnJQurNi5d7Ahhy",
  "key20": "5PvHK3H72HzuTeZgdYz48AqxUcf5362Gm6j6oynWAnWorRXwptgkX4435D3FiTRyPJx8sJXWGFs86e4E5qR4GFh3",
  "key21": "2Qt6UipGgEDxuvZzcaAkqq5KJq96vapd4Ps6AVeF947x3QoHoZmMLVZVmY7u9rBeZ3RDeecCmtq8iKNZRKc9BiCq",
  "key22": "36Rm2JjypybhubmM51wba6ccPhbt5QwSKx8Aq1Xoath8caaAdMSNb1mzSGQPPMGYH2PgSm9Pkj5hJ2a1qQb5PPU6",
  "key23": "369wQQUsxt4uL1xT8u8s1X8LUpzFxuu5FAuLKvPtUiQGkgWWDzEQF36HXxXAajf6C8b92bbf9QPmquCesffTUt5g",
  "key24": "3L3vdDgHGPa2tBhWccsSmnPMPj39eb31kUXf3f72hqvBGqCFGoP79RHmaZbRinwkbATwZmu2kAzKaMsHWTVXrC1F",
  "key25": "59Zm8DfHNGYpn9j5vTGYE1Rth4Uq6xKnHx8vB5hj29tg86j2rBeyvBKYePYQqvigWQoMefyyjmxThbmsB3gcauyc",
  "key26": "4rq1oZ9qxXsTe5Mexk8esJg3JnQnUvM7QvyuyyBqS2k6ZgDTNdJocuJCffNcE5NWfq58Epp6RN9fMFhmE7LbUoRj",
  "key27": "nQnEi2iTQ8Yy9ajYS2z1t8MUFQ16xpvK2eWNrBgu3zwAUWtUzSYyQC8WEPZuJ6HfEYeiBwxSPCgJpZZRj4oJv7v",
  "key28": "5hw6h6UaQDt4W5sLn1QjVMBmvrXsgRPCERssxiZEWUHjcUfUiM9foNqAGHPPcosWXYtrtZs9QnumkAyxHdmAhaDS",
  "key29": "4D9BRbnCqb5ojmJHYPVPiVoZH4agAQGPojTEwEZR55egjMMXNzxdUrCxEyqRMH8bY5i2YeEhyZEg79zCYSbaDgF8",
  "key30": "ssqDUuEXaGmFRnHYk3PDRbTWjHTJsTqdUEp233UCKs4jimKM2WArLcuuwAbgGdioU9bdvPkDKDirYv8iM4ejTaE",
  "key31": "5gHtFpxTCiN9TnNo1ZLzox6zQZPYRYq1C181FHQ6Vwm9pbrdkPehkcmMqc7biYNYz6x67xVZPZxpb2iSnjJzUWwv",
  "key32": "5ahrKVoQr6WBcv9GNbkSKfH5nijRVki1VVcVZQaCf2CiYnWmMmn9ADbf9UsBU3C2LPhQQc3DoVPQG2w69mGjsRB6",
  "key33": "5cbaoEydwWUAJ8jUVuq5YNDN2BCzwdrVtCNnufMKMfiCeh9AiwnzrzjFuq6MuDFGEuyJsSTpqcZpWMhZ3F33LgWf",
  "key34": "5J5g7DRRVwFy5WQ1Rn6g3CehZumyVEzFd27Rbty1y4SK4GXxo8QB1J32r5NuPsrm9KbpPyRyitiKrrEnSo88gtSg",
  "key35": "xnW9YrTm46CPEJgpWC6g13rYeUmjSM3hBQmCVLG9e4tuZPp1XWRRFWqHPatJ6JLXDhPqHXnTqqAdHafhqRooeNQ",
  "key36": "34zzunFbYGejiBiUKFby9Rvo3mEiBnN8gfzrZHUH7VL2cwqEKR21XSYXXptrVhQqKzaDgX6CkrYBwqw4KcrMqCDD",
  "key37": "48kCfQ3QypJ3c11dXegkCjemsDmHrPL2aSSD1V5RYNFVAB34gY62Y2dhXZSeJ8Sy2gCQBHvVQ9qjfRgkz1U5F8p7"
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
