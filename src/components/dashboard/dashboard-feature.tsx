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
    "5wR1uwe7bt7D84RuVkYtJh8ZFBRHpgQFGrbAmxhsq4EtoBJy1Jvh9ZwFWw3FGZFAFtr5yK3VvUKvHtCvQjShZZZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56r83dX35oSS17ARdfk96wsPX8Pyr4Li4SFqh6BVABxukfJShLuP3qZ3tesDgvhx1UWsgotZCs28dTMGLoRdt1dB",
  "key1": "23MQonRte9VHvaG5dtm4Ax7itkvqJYNV28YGamxfA68Qr4eKDspyAdzt6bHErx8EujAXH4N73vWcCRBsxz2vXEBr",
  "key2": "58QxKGR1Qs6mLAPMXkQpgE3W2ZrzX7RRxt4odk1KgLBzp7P4UDDhLX7HouxodmqCgQzJWWkpynu2iVhcHG3piH17",
  "key3": "nAAnMWgD7hnvwtmo62R3VcFnQT99Dx1q2t2ki1tC4cYhsfSEsQxaCJqgEU8CQTCfHA3APvMoe9DaPLy8Fk5hZpu",
  "key4": "2j3wnNi2hKuafA4fCqDUTJNuSCHtE7tjomMcDARjQ2iu8TLtZQ8YQtyvgYZDNMk1a4MiGVEtNiYDBsVVtmFQg3yv",
  "key5": "5Uc9DVq3gVtgZ2ttvhg56C1Mf9662LF8wskrWHm11hhia3CsvwFnT17r5URbTNAAQQaPTXuiUPuZk1kfGAstu5H7",
  "key6": "3JutWox3Bsg6GkcTDfo6Urp7NiJNoUmbk2jcr6Kprojs1Qe2hRhxf2BEXPrZL7HuGXEzLFMtHwAQ4CufJvGZdxPQ",
  "key7": "xFdSB7MBy769wBRnTrkW7UJSVEjeXNtEiPppcM5wWcNkcXkEAvX4EgEW5SSbiCogCwigw7sF6fmmLqobuXqWmRr",
  "key8": "2dzhv88RQfdbMD5t7QGnmhmpfPEaVefgrMipY33z5qWneSo3ue5QqCziZYZTQdBRUAv5e8ZJZhqS3eNF5sKuievL",
  "key9": "2Nj2F9WanHRTyYjXoMe5R6jXGh5BcqmMaJuTaC6iMmN8V3sFtsukvv72LE5Kp2KpKBGuWNbarrWupJx62P8wgurr",
  "key10": "2ooRzcyF1BLBxKHm8Dx8fBUwEkHZVYrhaS9zU4qTwWQsp3i2SczQs9PykeHyYcf15Bd79VvTWKj5kDAWaxht1q8K",
  "key11": "37PNtCj24z4oi5h7PwZ2XBf5qYvDkApbCfQ2yrw8gh6z53TM9WtBjq8Tkp1vKf4wCtaa3XJNU75bjnVqyu83ZgA4",
  "key12": "3BXvJHan61b4C4KJvASV1mvJcgUUZMoztNu2YPvuTm9JZVajL6nZHMyg29E95m6JRbow3dQN9vvHt6oYRGxmZPwk",
  "key13": "5WGydvmA7J5jb1BGQNT2Aimut3NoDKdkrcwdB7fwdZt4UEsQjkBp1Gkk7qvpeVCseNLTkMfYJ2UZtnJPbzzR4MUg",
  "key14": "5V7nTg5Yaim8ynjnt96TyEG3sNk9Uymjrpv1TiWzXtWhFjMsBgbo5R8sgSNJuRdyezTxbt6WmkqaDCP8FQGuHpVo",
  "key15": "5roG7Zhw8oiksDbvTVmW9jgBkDLEyGoMtuQqZgncKsYHC6ezEr8mLo2MjMvED5WRmPUG9bgXJdzhvH3urUA3yv5L",
  "key16": "2pLBGqt1h6igKWkucoVYwEG8nNMYuJaLmm4gkVRqQP4uBxSvTfpDTEDjS4h5VqLe9hXSq7aFQx1NBqf7SdiYpsEK",
  "key17": "3kwQ6ySjHKchx63zmPpC48jsNpYbKp6jHyghh9q7E5kjhbrbb6Bb5Sz7YY1kNq5D5JoKXp1z2ymqhXtsivZHzHcA",
  "key18": "2vXNSHPNUnFa9YzKa7HanqXo3KPKtQyyXFQugZQx3ErSndF18UPHfxEcczzipuwLxX5FcMjVdr4KLw18htVwwWYs",
  "key19": "5cqqfBUgtQ3veg5iz4Mr3AxgbuyBxLd6t9ZoicWJpyj5iEoWVHmDEgMTvWoF3ykteFmpa6g2tARpeKj1PMx9988H",
  "key20": "2qpmfiqJUFA4tEwbVQUXWg7gWU5hhfhrTQPZ3Ctm4fEyp3wLbTH7EoqgqSXA1CJT1WNNdVvggGiv6qoBawreSrnV",
  "key21": "2Ymb1HVu7B7uCVdruHWvWgn5DUMV9KmdxH87km82PGn7PRsuhWmPrLe4wf4onEKbXTXueT9Ue9RFyNvoWkLNEKgY",
  "key22": "TscPY4mviTLjJQk541CvW6xusJJdWtSaMaJghroMs7TEUBUJmWwjWQCESW6q27pa7HDZNibBq1BXjEm1NymBUMT",
  "key23": "2upuHcRGceLXq2eXDdMqxWvCfxvagRPnr5do8gHJA4SnZ1LuZQjZRsQ66BBg1kHaLwLNpVrcTw5yUHST8vRdTiQ6",
  "key24": "38Hkquu3ztqHndpLTBHposUfimBzKiE7CXckDNfSHW1yM7UgHutVtqGJA8cQWNSZ8WiW3fbnm63EU4VPavxasaQZ",
  "key25": "4TrMEmj449xKHVwVRh7Z1JZ4ZB2hUYvvygXTYNBEJfb8KW7HhsSt6ekaN7MPvzjrgbb4ypTa3mv7fpQB4LS46Ed5",
  "key26": "2VRzYFkSFpPWmdM96ejFRS5mDyFoTT9zyFPcAN8igUcjwAHSMoDcG53MX5SChrzvjNDLtcVoXt7fUCbvoG8m7hw6",
  "key27": "zv5Wdz1pP1o7xgqbsUxWuWNwzdWWT2WCbjayxmNp9kL1gcBEimXaCtvD4BtYAWPCDu5HMPBpVaHx226mu4DDzsr",
  "key28": "5mqBPkk4caENouBXBuwJa3CxiWF39UFJPs7Mm11Ag9zv7zkZurj4PjgYUdDLELeuueuqyYNqz6XroZPAugBeFbjY",
  "key29": "4xtK1dUSCWXreoj5gKVseGRpTzANdggk5XzXrBqE9ak59zZzCu3SKaiw6uukN3uAAh1u74YuEr11HHjjciMZHNXG",
  "key30": "3Q1nppnKbow4vFBhJ5HJMKKx9xeUdZD3ePxYSnV8hNWt8ZBDziAXqgFP49bKDivhdZh2x7Xi5LoM3jmqRKBpVPNp",
  "key31": "5TaRc69pksRn3X5DWBHfEtGraFqSannGp84nn6iHHvQx3pNork5SdQBezEHvHcfRLp7t6K8pYvkKVjPLS28shHY3",
  "key32": "5T35GvgdkZktChs1GyPYbrHhpVMa687ijH3rHwJKPLmbk5Rqi7pmJiJPFYnbm6JmSDtX413z5MdvwYKeWN996QEx",
  "key33": "5W5zKd4v3iv4cogV8A5EXewn3bcBiBSeehCPMwdYxQ4qZyA1E8FybBHkjij3gR9KX6RUDycwGqqrBZnjWkX5NJLz",
  "key34": "29VwZYPkzbz7JKDzVGNb15Snhx2xcKHtxWDj4mUXBwzARVDJjnSvZQR8nPtY4RfV55sCVy6eTfJ5ZDv5ajXwg14J",
  "key35": "2Wsx8xBb3eaewthtq58PLGiLwhrbthBJVDQ18QbYBpaZqrp5zk8dARJGahNnie9p94faE7js1mqmduwTgWdmEM85",
  "key36": "5kUkFnRp72wMtCRSvKKP7HNMdAEcUyXiNWcKtKPdTz8PeVM5bevsTJX7MURjmxWUMfBJS7XA5xTdwerZA8W8G7X9",
  "key37": "3tQus2hRB7scc7YAgGg8TmxFQydDVnNaYZ5EZhBQyEiqbG5PbJMbzw1FWXAG1b5sBM5F7TRsYz54DRWMXztstUUv",
  "key38": "hfdAUHfjyHFro6pBREW4yMXM23oMrPmi8vtAsAcTqi2u5FME6JpJ1UqaZFkuK6c2bhrgG7mt45TS5gbaG2DwBdu",
  "key39": "9TnEwnMj3KisxdUEciEF64xDPdrtNgRHbMQaGiAE5N9YhwAesGPNey98TbTfkdWTuyZjoqyWvbPbeRmt4fdwmnj",
  "key40": "4agaU1qEuVp4NMtR6KNkYUYP5FZaU6X3sjfjkCwNfTWrHdcDvsbNpWVh5YZdM423WfWb4sMgaXoPky6QKVX6zDvG",
  "key41": "5VXixS1P33BS22q76qZ4X1KmDMPEwz525UUZmCDG9CgCFu5gyzA8s8KZZ2nizbmf6qwQyWzo3ZrVSoMk4PbWtMXr",
  "key42": "2MwggKWShrsi4aRgTB7ohYwF2GXTCVAtU51MZT4ddK8UAozJrbxM9BnvbMPXGmgTF1RYAchaWycv2Jiqq5o4UjwH",
  "key43": "4RE7bCqKQsyJkYMzRhWaaSSeeVS9zYr9fBi2KBRsSwieBCaLDKkBAmqAGCduKvwdvUAU4AYVHEvkut6t25G99QNr",
  "key44": "NnnEdBAwosCVgS7kjX9qQXFWeXH6H1P9C5h2E1GAgWJEViwWkaTEmBpHSPnF3PgmWGDzxCnp2V3mukf8FjhSRhh",
  "key45": "5AkYvbvHCN3C23d2WZLVvdNABBKoWT1rAz9Z4EdkUoJZmjdhqW4krf3XwySHu2TKJhn6mqGVfygVZjuZDGHTgdYK",
  "key46": "SCucx9gXtDkAH7j42LRe8cuaa2KcgNd93FxCqy9ftRAz7uqYigCbzpfD3NQqYb1ubaYgfVLhVN4JbX4RWbVPkJ9",
  "key47": "5GnyetL4wa9816uC77Jf8TsosJVFcDhmz1tGkYjCXZPqoNZNUujJ8mh6vqEG9MtgegmJ9potfzvkL3tWkizrPkzN"
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
