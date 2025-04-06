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
    "6dBJv5pv8HWe9VUdJxD2rgWJiPmDZ6RkdRsbijs5neB6LXbjvVKwYDC7tn11F1NQKXXeud2JFb5AWcLSqXx4X2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UUuJjuu8acexzTMTNU9WrUMU3RNHFhozhiHoVzZnQBNTJmUjBww5V33gYxWM5Fbpd5aFDAJ8MbbhajvyunVUFBW",
  "key1": "3gbdd6tdf5xj9bSL8MB13ev3ohsWFSHTQGCJ513tXLksbPGtmfD5WhduafrdykYLD3WhPXtwdbK628Ae3EatN5Kf",
  "key2": "3jWi8rMA3bbb89wbqGzTcgP1663hVVqTx9a1cEd38ipUYh32eY1cQpjAwfnvMA3jkyQrJ6sTTdV6r2p1JW4yvFqK",
  "key3": "4uHjzEWf18zc2xKcid3Ghh1epUYMfBrPYiPWiFk3shTLyLe52Mx5WUzkWSWs2A3ndDHzLaKiiFPwdQdNEREw2BrC",
  "key4": "5umjaWAwAvYheq72j9Xx2GDD8LJZU3eftaz4cmic2o17Hu4ya4Wmm9MwvStD27TWac4mTbHF1Do5S1WBffjhjJnH",
  "key5": "414cg62By7x4rJtPxe3WqFt58wHUJqGawbJ8u1Y1weJCBe1YyLxd1eCpxDvGWsxUAeqZkpDv3PNaAWGsmqMCbwMJ",
  "key6": "4cs6P5EoSQbCLWm1uLANR9MrVAv88pQDmjZD6vRcXT8BTTNmusQVWmWUGSeL5KxDqhvDqpQvJzdJyWCV3DjHFTYG",
  "key7": "4csDC75422bjhdx5CpLxMrgaxaZb9GxwdAWJFptHD5A9ukjBfxAVD2pAnATUjJr5gdycKx61VvXmKFKpvDJs17qd",
  "key8": "59qDgynRmebPy27qjSQQZqxpd5XiyjdvEZ1hnYBUNJHmX4n979U34mGZQgDsEaSwqcQHntQWCeWjecDS5v3VhwWJ",
  "key9": "3VEjRB7LHqstJdRSNPMVxTBfWQwC6gc2ju21kps5JngQkrAaB4Ti6QaUczhiR92jzvoFPj3ktQqYLXs2zaqSmyXJ",
  "key10": "3F1XjyRYJLeYEmfHpRaKMSrtwSFRFq9dHNUTb2Xpxjta3EvnrTsyTBurwnQA2CK6wXhZHHWCW8qtB4Mx3RRHKvm6",
  "key11": "4U7XjKM7CbpcvTN2MtF2hKtgLqNhY7aPyHbqYgDMyxhezacmVKwDN3dzBwctsWNMGBaSkKaYeTwae2VC8UjJkRyx",
  "key12": "2dErpTtSnotvH5jJQos3DUSv3H1rMZ3rv9qFQf2V3orV1pneRuaUJTBXSJXHh3jJsHsVh7XA7t3m6F5PRR8EykKZ",
  "key13": "3Ayh3f8eHMQz1ZMT5X5K8odS5qZo7MxWWq6YBmnFeCiR8cjhMXjhWT9PtSuqnNXuZ24kSeusCHAVFQUAdK6xtoh8",
  "key14": "2DWRSW92Kzst6yZjMAY29DZUFja9TCzFyqV1s8A6vSLaWK3QfkTXcDcAvx8PES9Hcm5zbVb5CKfmyMuJKh7KDptB",
  "key15": "3pY9uasknSqbAm8Yad7CugG6ViBSDeM51ETZXp3TaewpKYavaFBgyHYg1M5BYBNGV8FMTUfBkEUndioyTmUrfdKU",
  "key16": "2x2W4JG71Sma4EuXJnfyzRkcSFQ4QqQyCZRcZavaP4Hw4Uq2fMsZEFR2Wp8zcamvAAa7LnP9JjVVnUNPZgNsh5jF",
  "key17": "3MdaAS7Jp6DZGpz4rPGDdn43u8wjGTtY4uLmcQeiJMW4QC2EbkQbo1cwYdzfvgvRbNvz9gsmMNoytoS44P55SZ2p",
  "key18": "5LKgM9i9xAQMqd84EqMvKgNV75REujZobVQgfQ6nBJMv6s3bDDu2SNqChipKoex6CoXjMyFrRfCK5iFu7epqnLmY",
  "key19": "qSZUwtVE5MSG9yYv9AKq4EEVpM4VNVVktPztYMrrig41tQ12NoNECCpQN3zA1NRtqacdFke81wgjS8roFSwE16z",
  "key20": "4ZcfGsKtfdDtJzJjN5x2iTYns7AEzyXavySMMPYiu9mtL4juYf4S9md7mEM88DJWq59gVQyn6EwfozEgFEwdfjkz",
  "key21": "31wnPk4V2r8xk6aXPrVzVaNM1PNquvv37M7fKSU34b78fM29mPFZytNrgNkVjVMboimLY6sVBMPgqoaHTaMDLfPN",
  "key22": "5b2PQE5D7JT6jFdgAuKfVwHitvn3tssVKEmM1kKtvd4CCfHtpqp13kqu4m5YH5Mr7cLt8s1xLantbHhxEXZNxBNc",
  "key23": "4n5ag2VDYzLkAkxNNgjdiPecRSTLBW1sAczvazzxc88irdANEspXEKmtgDyfibSw4wkNLSyVA8DtN5kLVkJ2dsos",
  "key24": "2MiZP1KwDTths68KoNvXaew1pEGPXcVLFJd9xuSdCGs1jPyZhyprc6DSr5uev6yibBeVLRwWmYfXisrGrfzHpnUP",
  "key25": "5jpUN6DfVK6n6RpSe2PHYUvqFVkz3CKDFCxJUmHX1QYeRnbWgx4ej8h9B2TzRoo7DAt6NhMjqhxe6J58vQ83EH79",
  "key26": "4CCc3KN2dGpBULgZ85Ds4Ukj4YTFfHBiXk6SvzfJbJxhXmDVxPbme7prdYuxKfXP2z5BZSgwpJofH18iikgirtkv",
  "key27": "gQvaZhWJwxFrjUz4xuVtyTCj22SbMcGr6x3JqzNVq6c7LF6CFVhRQoacwHmzD7uRVMUNNKnX9L7XW8kqnRoZhrg",
  "key28": "2WSa4pAXTDYU9aPHiXNYz8EffhsSm52p4GHkASsoiv9XTpKFEwrNtZCauVj3ZMjSgWNgkRxfELtz1UC9jvorVXFK",
  "key29": "4QrxD1XUN2SWfuFv2mDEu4j2iRy8oSfU6pbZJFe2s3zCur3LcPmqVPtXuVHbMyfnu78QHKzB5JMfnqZSDUmpGRjx",
  "key30": "4gbMUMmRekggGjRukh4x5LNVoYNZmgtSDHNRWWuPsBu8QHneCCMi9Ftv8GD9VkEu9MjBJPkQxFeVTCN7mf7yykXv",
  "key31": "n9tnkkTEqrpF4u15FrpACrfPeRKuEtxsV9Wmwk2FEcLnPujWPt48YaEnifJqtzZmioa97Tt6PR1YkT6fNp7DpP1",
  "key32": "2EVVoxWHsGcWVc5oqGUCZ14xJV6z72D2viCJCFdMJNsu1Wv3jsE31mcqqqiAKvfKhATUgmoVLRY8HXQfgwZD6f9v",
  "key33": "Na6aLv7LNtzfdVTUYpmnrj98h38HuoHQUXu9QaR7KS9aR8CghhQhUbP3wXfSLB55644p9HmXDUwLKP4sAg26e3i"
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
