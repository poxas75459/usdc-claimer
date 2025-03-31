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
    "2e3drfeahya1UhX75cNAzhd2c5KbAVHvoKPBPURkh6N2s9VYz459FaFdCdpGV29FFMiw1yFu9mwDWTtKJWFxudd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hv5GU4MPr95zqYqgrxcHKRbAMsdRJ3o6rByY3H8SrKUR69JzmLdV4M2iuLrC4pP5G8S4JXygxUNk7oR1heuKsZ1",
  "key1": "5tSJkgkv4qEAErAXM4dfiUftECuqsxvoCAkSt6orJXyT5h9MyEAEaxqLHD2KBXHhjhWDhqT9NuXkgR5436m44kTs",
  "key2": "41JYYXm5KGKgrGsvmz8Sb2g76ukj95V6abwtfiCtq5PKhQtU6TFYYoJEKssXzem6u3bxEohKcxtp8rRsDapazUiE",
  "key3": "5Hd9cH2zrdtTAc8HVgTBiaqpGgoxt3wiusqaRivwpim1SjYE4emoWqRCkXgwgjVJajY2WrCsF6Q7smScpAYSg2Dt",
  "key4": "4r5WNeSvHiX6JSgu4RpK7PWyTm1pyM1hJAyDDmGNEyTCmmmTFqALmimPMbAU3HYraegKbrbkh3A5aV7fh6utKu1J",
  "key5": "29kDG9dBtVVupn2U8RopwzQU1LiEKnaCgYADyn2zpHHCb7sZCLvidd8gRi2JDJxQQWkQRVWqTEEcLmarbhqHzxng",
  "key6": "5F9zkgs295tQwvuxrDFGRrxvPpK1Z7WiA4BfcciJ1EnXo3Ur5ccjU8Loj2UxmoMGB2WebR3CfqvBzz9cZL2Cbx3m",
  "key7": "4w71tVZPJQHkU7p7dJa44w23ncUDetWdf3evagmJQjh1dNorc7yv6sT3W1z1RBCab4ExaAS2CMb6nvihUukdCYfX",
  "key8": "54JD691Mqtmqhu7xv277kn3Qbp4wVmfyQy8HBtW2wUkLVDq8RJZ3sjgv3d5Y9Nx1rikEJnEbqb5K37TFm5Snqczv",
  "key9": "2PnLw9H4ymyopHh5p7cdx6WhL5ToaJ9Nszg1DKyEjxLq4E3sYeBpjK3zj7VPU3MmEeV2oujKsWpJZFqq3E54DmXL",
  "key10": "25Kzxj8SaiqHgabAsntePcAADyLmD6zMXU9L7kmMSewF1UsZu5pB4UnK4bkUSGhAF34dtjXULzP7tUcw29owq46R",
  "key11": "5emiLCaYC2waVJjvU3Ts6cjYj1zetT1y83NxJtRwPjebpHh2TzDJCexjjeD12Do5SKUQPZyhPvtbxngx9x2FADUz",
  "key12": "pUj5FxS2muv1rGLRQqwR5gXadBLNaWh3tueTo96kWtDTBLKVT4qdnSrumugkiCty8vvZc1hdQyZDsnL4Apg2ozN",
  "key13": "Lax76UEG76rUipXkAkmZD2LEBwpZW9SUVuZQhfrYwwgnZetABvBWfZTLNSgQtQmVpeyC8N95EhyaT1dZfBTNCBW",
  "key14": "2PSijWXoXSsN5Mcrdh8Q15iYrqaScgfmvqxtNvdSpoRB4ouNwLJnutaQk8oSfVDBrajiGsyz7HKHBUGodm32ofon",
  "key15": "2qimdwXJnB4tKhnJ4eAQ6qqnqYBjhzfwWYSFkE63v6a6YNwcy2uzMht27mGtnqFXENY9EdSHzsNPVzwxJqSz749V",
  "key16": "65iXUhYUBWMhFNWuEPKX7ktTHYFQHpqS49Pg1VfEmHsrd1bHF8UYWba94ZmbqBm4wiE8Ww8SbDaEQQgtcuUnuaLT",
  "key17": "3KHW5AUezboxSYwrS6WQKD1qHojjf45qQkEAexMySPEvy28rbaSpejQZzkPH4z6iU5FKx3LDhfSP5fWgteLXGN99",
  "key18": "3r2rgQttMVcWoR2JfY3BqwWUPhE7bgKKg3NUqfgbKtTVUxxLtVRLAVAEyqqdqaVVvhr3nqnqjeuPZjpGWAATb4JY",
  "key19": "s67L6FVpyaLL5oVQ6RmoPEyre2WF9NtZwwSdZtjtibXaW1i5QCK5u8vQtfzb4CmKE1gHSzVrDwzyZkk59iSiW1Q",
  "key20": "5yxUqqYp9EtoqBbBmXafpz5ChMF3kR9MPNYdZXnq1pE1ERDgZSuV31Qtv6W4bgNocUZ99fL8kokDtfzdfKf9sjxQ",
  "key21": "2C5QHRAA2TTtfw8mTMeyedxwMF1b2Yf9sriM1khiLK1Ji22bYLPKnhhGZvNpnZWWBKYkvRnHxAPUyjh1TFCoKvPY",
  "key22": "2ttNMUcCgzGNch9dvJZ4Fe7gwSoB5gSrRY5Q6bMdsf1bkGW61kaF2UEyxhfuy3pG3Qm7JY6YdNoJjpyLeBA1sGuQ",
  "key23": "4V7mUCZPhiDAkdYc9dBGfjjNxB5h8zzyaD6HfKU28RjmjvWYMqEAi7Bf4YDebuMx7FZLwxiiv1eCcnQAZPpgLSi7",
  "key24": "4BLqptko7g4XTSe7hdoYU2C3eJg5cAVy6E6Htt8FsraurpMPQJC12mFmjzMGYvHUAxGPD9HqeiLNHrYvvyVBvv2f",
  "key25": "Zabo23sEnaG4kNYujVMxDf5e3GnAFVieQMXr93VLkjSeMK9xbSN1HezFHs7jzpZCGPmWFh6R4Loam5mBkoSo64v",
  "key26": "2yZjtWaXTLa361yyW2DJ44P7mw1uhSMzTppTv94kZZv4TaKd7z8jLAbtxVMPWJo5Asm7tQ4yufwm9EVpwbg2hUM8",
  "key27": "3NDPRx6pMXK2REhQP8HmV8CmyEZDTZZNF1ykMNXjSxyXiHbxicWHZLVy8JzEm93hDnr3i5qcWg5YSf54Aoi8bqjp",
  "key28": "2rW4yCwauHBDiYWJGTupyFkP7CyZhgD1itNBsphMWq1mk2CHW8jY5oYLjgqUZjcRPVD2u33z28nKNwpGjEp1Wn6x",
  "key29": "5tGAUgMCUy4r73sNarLsEW9RcMuWaY4pjB7kDaH4Awtzn4H2vhDuiawWArjHsjZPy6An7xWYP3kwJQEs6cwFQucD",
  "key30": "5UZ99b3BTiR9518NCo2QNPZWsy1FigMp1ArR42H63CfLdrTXq4XU1HYf95zW6X19cAdCGaTkWqwvVNQ8Uqa3mgbt",
  "key31": "4cKXFkYyrfaczqL1SoZFheXyF8PYZ1vtD9sJhZUqPg6sZZc9EYRCsj5U9moX37Biu8wFDVddZorhYEcmHBLMY7Nq",
  "key32": "3v71er9uKidKQZFnfDjxzg4qZTfxoDgXziqHk8UEHBXHN5NeyZiJRXvxBviswKfyhWoLTX9d8hqpsuZ88uPH1siV",
  "key33": "2zb4ngVRrexdU4a2Joh3JP2WVxsyFjHSnuABK8ALDMTDnKMdGuVHKzg8uSbmG1iKv46msdr1RXvptMkeVmMnJZ3D"
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
