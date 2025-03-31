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
    "2Ny3t8ZXd4fEgrXv6HSA5cQqDoNGJ7JNZi5DWdns54wuyxtbHvQcWn2DAcRLwqKccKujrC2i9XXEtVsHrMZtnpJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NeYMQL71XvJWbNxNTq9YMb9dtnJQwrCJK4pazqQu3pP65YsCNf5jzPRqAeTZ4tZKodRJpwJ8gtkUm1HytyXQtvn",
  "key1": "3fVSxZGvGDCT1pR2TVXgNFnAokmfEfx8u2XHw38bjWBpoE9rBeB9uKrpgyr55bs6dt3uVMAC2d9RQQ7KMp9w1br8",
  "key2": "4W4h5qbDMrjfrGiyU5RFLudfEZkRsfWo1KPwqtBY2WrJ9wnwVsZBM8i9i9ofWRk3LBmJBxcrR6xb1b57Ruyx4kfh",
  "key3": "31nmv8oGhq29yw66YUrUvs1qeGpbEbd3JKiz8sEGurDsneCpDo68kWHKDdoKHefoVwghSnH6GJ4PjQLHfNpraAHE",
  "key4": "4fZwjdUvruPtf9HbTxk4JYTYRUvEUgGMnAWnd7HWX4RzZvJycvx1juK28X4myyWr3fJpncXCAonPetX8PB5oojbu",
  "key5": "2Yxuop4Rxy4aCGiHkuYxy5rQAeP9hxs163QK7iBtqxei5HQSSHJhjNxroBNQwuTAuQMzupzASnpnvgkqTEgvhX3j",
  "key6": "2rw7AoPaojxFX1nRufJmHk2hiu8GcZadSCcp6uWsAJKtWzH2UjpX9aAYKMGpusJB7wG1rkSKqQup5gcbitYbzpXP",
  "key7": "4t6x37zGn19MEqubaFpLqZ1KK78w5QDga6hkRQPCLojVD1P3zPYFPTBtmDpRVoWSHXmjpE9WwhtPdeey7GDXc6w1",
  "key8": "kfkCNaRokdjgkuA7uzFucmteEHogdtTSN9sXnrMGtoJgTWUWrJHXy2JFfCEwcpqi5svrkQKSfPEJ6wSsyqzn965",
  "key9": "3a19LfwqyL33bmF3eYuacSGgEBfyDey2GyPuDsH5gpUaMdydQT6PcEJxdxqH23m54yumjFbVc6aBtgJsfyENa8U",
  "key10": "43gipqc2a6EUrpm3TidCigB19MoxbFXWyBt7db28NbSN8DNC8xFbHBNTFSspVAFs7tJ3vyEPTopnPadjzY34DpAi",
  "key11": "4AjkRMaSDVCKFTBbU2dHFpc25LSKm8YVGhrLTkRcvRcsFWwG6wsV3Y8zFZn8APtKXovFxjxFNotaKxqQfyhhNxbF",
  "key12": "4qPDdHadJLDwbDXA3ZNMJEHrhKFhXZGEzbWP7mreuZBxAQ7aazgRj3zn1HAbJNKXEDyvsywfQUpF1QvmibhBRbR6",
  "key13": "32PZKQHMZTb8Yp2EaZrWssF3GgMpBZVKhLdp8X2Ju2Xpod9jrGBehdH1GnPifR9Gr2HM7axZhwdaQmi8wywJLNfq",
  "key14": "GHZodmMPkFhPF3nTDZmHAuUaXxzufy8x5kWnNQqkq7Ncwxpft8jkCMxQdx1jjPHXvn11iY5t4tLNf47VFm1YzkZ",
  "key15": "RWJAwsFtSA8V3uWdmi2zSmf52opqJuwnuksm4QHFS82XFWG2y58DZU1WfdnfVs8sY4GmCP7ntBvmFZbosb4D5Fi",
  "key16": "J6YF8do4EqW7TZ3enmQ5n13M4vMHPLesiCSFbznTVq8k253yH6a5eqp2yz3MqyxMJosoG4AV2qNULw7ABqs8rxv",
  "key17": "4DcymPxk5r7dAHBm52djBvzxDbSgpCRyup4JW9m4nJmBTzyHb4iWxM3yRC4nR1qZKhivfpoh23pjAcQn2AXxxbat",
  "key18": "3Kir7XfTMzR6f7uyz444p1uLXT9L4ek8FLv5oQXpgB2ixcztXTf561ybCfBPZ9ttZbiiL4nccH7hH6ngyW3DSHWp",
  "key19": "2aWFbY8fQVgLZhkAQBiaCwoRN3qG1K8JMTHq6TjbXyotbeyWiU7BZjxqHmufjjvHucYcAxUkCQ1yBP5JKmpQqe9",
  "key20": "A1gWrJdUrFCk1Hnd3nscLf1GUNntW1TqszLXuay2FyHLUvSLkiscGjAEVEJ6mJwvMemLNAR1RugtBgzDFXQhHSR",
  "key21": "Rsuad3pLvcupCDzoUSbvtnSRVnoyLnpumJKHuMz1pQsvC72F2N8Pn2tizwUiZ773eaYTr99NTuUekQ6K8bFRhSB",
  "key22": "83nzaW9QkGKKDPRDxeXv1QWZoxgj8fr972fLt6h2pKR5sjyrpJcJruW9DfL86Uz5WVvRbcjHPHt4LFFPkcwzW9v",
  "key23": "owerkZL5jtsbGavuWPbYCk1rF5yfPtZayZRLREPHDSJDypEasQh2uRrA53xzbLRRSkQVHwUxnmRjsGUxrNiLZfS",
  "key24": "5u6EyBGhfvgAASDFR2jYE75yabXSjm25XVmMdfnASvaAsBzkMQXJsueoCnPgrSopVJbwNmy6dJ88FFVo5mz9pMhk",
  "key25": "2rA6iuKs7xDUGkWdwjNJEkb112LxXznQCgx227DzjDZZUnSHAArQsoiZsKxHspHE5P41U6WGwYWFwgfD4M4Ex5cB",
  "key26": "mA79yApzqr2mfTbUzquDu62iPPRkx344YMv3d12YBtCWMoKS5t1fuyo8Wd3vwoJEVCQDr58LSj3fHfr5YwNYKfp",
  "key27": "3B3PRc8FKYqANZLsYFptHGEsTPfDB83DyzWybpG1F32zbtNjrjQqNayiu1dqj7V27A1D52J9WoabSwY6HUjZtDpL"
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
