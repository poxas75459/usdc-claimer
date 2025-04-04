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
    "UvFzfJCb8fEdAewaTuh1NkyLuRMmQ9wmpvbVFsSkYJ51apP3dASn7LyT19HGeA2hj2rN3tKN8BqbJjM98L52DhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KvE5jdbaZRcDSuWpYu6xqR3E2C1FxphDVmmFGGMvsatrMccuUYRkoATrh3tgcpiP9W8CcHnKJVbDSSXEXZhFRS7",
  "key1": "36SGrqT5MR7T14Kx1n2UtBTHmGU3wSetpk4pqqtSyAg3dwSgMqdbvCr75VH5AW8acGLNVqeXSij2c1VbwuuRz6nA",
  "key2": "5DpjfhsYz3RCyFmx8MKhAvr3T382pHYX5ZyXgYP7PcC1LrE3GvW9Mq9oVKD9Mgzvk2oZkZwBS6BDN1RjubGzhmP6",
  "key3": "4UtqU6y6G4bQ9KD8wRFv1csc4SAmiducT6va3cmTSU82mmDe51BSEyLrFMUL41vhxvY41rcthmfqmq2B3i2L4mki",
  "key4": "4trWQi4H133tH79dg22Fmr73u2KkqsU3S3divNuwSq9Dru9suExGQhCZa9Mzry1bHu7opox2tS6Zr4RoB6Zy9m3A",
  "key5": "4T2gkcuuMMoSFB5omWn1uyJo23zwQf1ZR2PbvZfpeYtUPomPnMgqZsJYwXCSXBvz4a4HkqLJv4hzTKSsBRwNubux",
  "key6": "4KH16tgFoKUWM8At1Y4wUMA5wSLJYzKbxgDWkHjv7r1qiKLejeNou4iAuwmtqhTrZZqB4ej4to9GQiDpHJTqCgFi",
  "key7": "418ucmujGYPZPQcBsyjve4cqcLMnJME1whYcZxHgFBcyodksyZbtcWSRf5RZaAa7aVwPUzyP56oug7UKvtNN69Pe",
  "key8": "5wkocvLHqe3V4iZDGPFw8bab8qiw2YE5uGhYyRVuy5xcc6RDBGNKC6npY7BGeXKgUzaFT5VjGRvavTPN55cAvdMn",
  "key9": "48msyAuaHfU4Y8GyY1wda5RC37cNxk5i9GCFxTM1Zwnoi7sge27twq5zJY3toaXa1aWMDNQ5r1aYSrJGhwKuGB9H",
  "key10": "3Nb9rMGwVGv2XCZ6kPeyoyWe7SqMFtP9UyDLVYihXpiCyEK6QJA3UV9wbDp1psSkmAd7r4bts2vDLqBzvHQPGyDM",
  "key11": "5S98FE1FimQyK5rroyJDrFngve3XqRTXYm78JaRqrCbcu8NYBrfwVJKoFSnxGTM3TifcueTsPzuvPbF3zCjs1o1Y",
  "key12": "rzHgie5kkPT4ZN55tP5gpiEHzHXzzBrpxGuaqS5QdDMRTvqpCrsd6sm4m88cug5KUdyhJV3tFmTn7cjCBxwJi8D",
  "key13": "2xR8eAdCjfi3m8UpgPxBsn26t6oSNLvbeWMG9nTwXg5YYT5Ntg9GGJ7WaWjJxCyw2zZaS1o8M9mJ4VtYNzXGL95i",
  "key14": "5rJoJKmeMS75tm5ex5pnTxE6Vpafu9dCtifp5xQUodeKq5ZjCPcZWoXRw3WzE36btDcWM51ZcurRmQDZWV7yL32h",
  "key15": "28FtmCCJGd7L1kvuAekrmxZ62F97xc4TfEKzgYu8rTWm3t1rW54RKMdHMnHr21rPZ6c83NThF5NwG9PJhG8oENZx",
  "key16": "4ZaoH9h7eJu9F4hcLtMKwePMPUhD4gxDHv5bqQ8eh9qiMtTa7zBrXu5LKYhv2m1xWeqiggfppBTzxzbiGQHjWDCo",
  "key17": "4tWSuUAgwJMCbiRj7xAVUd5vLUz9zFUEtmgBGqZU73r5mMN6zU6JVRPfiySNLmhYv6cKtVCs6Tvk7DcoDWNRYcQ",
  "key18": "WH59BRy8LqGoeniR4QLS7nBR88vhVeLGpBQTTPziAWNCYpiz2r6qtNuzczwM8XMu3ezXZ8BTwxZPk6ixXh9TDwV",
  "key19": "3yAKB531EYWwpfry5LXsabvNATrm3BqSPvsBoSdp4YQQA7637f6h2jg5e1USfNM3igjVisGpHEeysFqMNT8xta45",
  "key20": "32dUdVzFns2d3hNye2ugf9p71o3e1TR1MxyFYdVRXpfqEV9DHQf4jwJYwPXqzB7TWadccXMS7o41A8CRiZb3V7KE",
  "key21": "qajCA9K3gwwRVxqZi9zwGz7qsjhvFSgebbxmMUUoCV3s6E4RPoyN7MUpcsGwXiuvVj7RbbcpEATLW5h67qD2Gki",
  "key22": "5uadGSa6vgGDHsNyoHJ9f5UiSAuvN3uqvJbbqcuCqoXcfUFPK6xdGi8Uxtpqyv9Trjk8QZgNveQh424M9kVtCNLv",
  "key23": "4Vic7Xj6xYL2dcx6Z71c6z3M917gUz4t1PjTuwBf3kdXRoXACrBYkp5pTEHc8f5Thi4F2RZcGXKmSyz59wb1PBxf",
  "key24": "3rS7hnY26T81UsasD2ekiKtK4ARPuXBoJ5ns3QNHMLeBytA5KU8QGwGu9giW9eqnUnbcd6P6oiRhWPASprDXAwnw",
  "key25": "2XzV8DWrgeEGGDzbtR4YLZWvsMVU4jU5UzCaEyjXm9GrJkBs3Y4mFimjuFxKPJLzh9UnBQThkvetEBxq2C2cbkKu",
  "key26": "67Y8NbQhrqaq2achDxZj1Ctpmp4cQLURERCUiw4oCRKcBeby8rCDvTFMpouidLZDk6VQLHQ14fmdNiMc6gYvtBFP",
  "key27": "54cmyhtrhoi2iGv3ADHUJJU95d2iqgxVUuhxpFSxP2n8JhqmzdS3ifU8aPXWyq5X1yayBM1wE6NRt8HHq3Ph9nXG",
  "key28": "43McQGWmmNd3mf3nhyKjpLLv2LKgDAsPF7QnCRmkFcMQmSFDXnE19xQ2tqudgMaai8XjkapXj7YvELgB19bDavRD",
  "key29": "4VNPtPVuT6Kov7MfkqZD1pT7gFkxcmNfTNpU5mkNVtQtfByuJGbALksvm4aZnx1moEDmNgULBzWyHACwt6vUyxGH",
  "key30": "22j3WiRbLTugTzGFb4eXpd8nNPkhA6KXyfHm3AMSLziW9ufbWTBALqLLbQS2dYp7mCrzvHsXBM6V4BVE1TqfVWy7",
  "key31": "3cp1L4smTV6BpL84VqtFUUast1xb3HiobwqcYatPeZbTW47rBzcyvkYRjr4qjFRKtkEiqyWkXeVVuAPQj9uLE3H4",
  "key32": "5t7cA98CUkUDghkve5RyMXTmd4oqiTk7VrsvAjqrwMDah9Q881b8LBTkVy8konVvhRjzUMKgSRGBKS4jV5bSMJtX",
  "key33": "3d1DHEQHMAUjXAs7zznR8jFKxdkoTcaA7GN18GCcrCXWsNEXsTk6nNehQiyWFUWj1LGFGPiFeMs1oRbiv9EHVQmZ",
  "key34": "3MCC1kTEStQZJHcccNy4srUmAs65RuxjSwp8L5WiLHtWbVpCWsf4YyyTbRJoKEeuQArWZCgfsKzynWbNrNBEDpnp",
  "key35": "Ma6Pdvq11YY96Ppg2N6hwtK5wu3aBk5AzK53UcGP4V7AGcbFVWC2T9HijF3bU2kWfhKvP44C9U6MkrFZ8ZDNthN",
  "key36": "2wuAsDH1wsgXTb2TefS2wYk4Sy8P9HGPheyYtLfG6Yk98hvfouqPbdcaHRwKHuRkBDnYh24fA4xL3pVaor7a5yiy",
  "key37": "3dgt35pC16VAmW7ZCSTneJWCuyxJ9ZuDNmXkJE1ezt9j6KPDKqXxu7iqRM7FyxyXJcEDsp8L5iSpywfhD4qLCboD",
  "key38": "UWAS3sfZkByGpYRdwm3yA5oVYwbhoFgetHjREJWynCXz6aKZHkMFMdmzkPXCMiBjLLi6mMfUDqre9Yf5iL3jHTr",
  "key39": "2Xyfe1iFNKwnMkYd3Pw5BrrAumfZCuzjdWBUU6iYVFDc2b2rC5Ja8MdWH3EreCaEw41w95qxBfqCrSvpPTidKmF4",
  "key40": "4K3BdjQWfqRQU37vE3VRk5ByCTtpStXtHjpnJdUpCih19UCKGuVZyPhUM65Sm8Sp5Y8ZBcdcbvhphUrMZ5r8VkwT",
  "key41": "3k4hfnTU2gU12dyPYvKbo9zHyDotMumsY5XzEQN2ke8kB7uRmC7Z1y6LRvTwXHdVRJVqGeD4seZRJVUeVvNjxHib",
  "key42": "5d798Us3qw6NXDAamntAfe7wHTFkCgLWanrwenRE7rCcfonKSXFrYA8agqwTh8zsuyNzBApAaK5PzDapCoU86wsM",
  "key43": "3MpeUsNdRvfowBxd5vn4Mr2LXomUMgMMmentC6taXhcMtdaWt1Mv9zWXLctK4oB1tFhPgeCDfBFt9MBK4ExVQfZk"
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
