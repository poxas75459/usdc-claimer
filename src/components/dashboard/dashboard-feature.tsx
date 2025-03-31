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
    "34Rt6iECUHbBVz1aZBwZidUSjGpSzv1FyahJXqWKxwAN9B4dpEHM1GpoFwceUHshMnbxvH5oTdNGkhchggbsaSiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3KNSQBxdtiWTCdCbEaTxhitzsyabjgQe17Mt1CmfuM23XHpYtPtieXqSzg3xjvnQq9cD8maMAv8h95kpbUbD5J",
  "key1": "4z1EhDmn9QN7DQ4fypz8Pheq3537kmHj1km4fVHJrbJDASETWiWUkZq2JpwjVaF5hKVFpdDEVMHu4WKR9eMoXdug",
  "key2": "cBVKCrsEkrdTQMPPq64aZYohFfEm3ajgHmh8LQPhcgNwiBdCCUeu89NNG1nuSdGq2qdmJW6QnygdjaUqHEWpRQT",
  "key3": "5wQponukxyc2PDfYz7C1gT2VKarbtAhpy5ZZbyb1pgNAff6h8Za8gv1ihHdST9H719tGnH79ESpq1YZs4gMbjbwo",
  "key4": "mEGALtv4pmvXu4UJTXA4GztVDe5kwS7HpZuaaVpK833KttP4RDUsusimYnyKXDzVDh3sPKMGt5c6ia7iskfwYE7",
  "key5": "4mwSSfQ2XswF4LAuZpSMERs2Kug78Qdq4HBH3N1u2ruT74adhUsth8ZeZEZidmSSrhbaNjF6cVa8Jpqq5ytUpQds",
  "key6": "5BAF63UeECBP8GHFGqKgzozcrSn14adfCzZY2U6hALbg1a6tvptDm93cCCwTjNEoN7bby9PxCkYYfMqYJeBHGsU1",
  "key7": "53a2WsPr4LAw53Z6hPbBMcaNZXwBLQkXpqrH8uef8MmAm9UdJtewSVQrY8mu5veEBfzzsLF7HLPj6auQmPRoLhGt",
  "key8": "5Rq94uu6jw27JQSRqVMsdN4WpYthMfqAKfVEzUdNAmi1mrF1tVcogRAkKnbCz96ELET5uBYHGHQQbPmb998F79wM",
  "key9": "2Dz9bZMgkzgDLaAGBvpwRRY8GGR6tBpNtgT5reHaUJ3aq1KHkGGBk732ijsm4oEsvPNv1HffhShufb3oAv54vfo4",
  "key10": "5qB7X3Ayi2XScerbB66rcnxWJcbCFBEc9fzKg3M8WJpaGEDLG3jxFicdKta3nduffRPnnr8tFa6JHY7x81ZNv4v2",
  "key11": "VaqdvZ7SpidwEgABwnvoCf4EuTgwoR7PGLDacjc8FecV3nnNt8jT5D9Zix5tZLFTHRpQKh8NDKv13BG6d3tDyz9",
  "key12": "2H9mwsYD1XjhFCY2pDtRgJbWwupp4aJSWgBPkd9uMScswfnPxWki2xMnUgvaZgoKpsbF7F6EUoj8eCLFXchnKux5",
  "key13": "brMqa1sWMWC9J9gmW5FXhyD56uHvmZhHiQp9FbUdSm6uLk7YYTWYMfFaE2oxPG8U59CcaacPJxQuy82jJamdqNF",
  "key14": "64ApjUMdgEnQCYXUVu1cGAMpkXLgyEiLPUizz3JfS11cmwJapV9eey9HDgDTahgKX3ApcX5sotKR7ScTpSHmAZfj",
  "key15": "3YX1EGSJkPtNKvRrsT3p5XnTuedB33RjB9WJVDicVmWorZRqFLqFGV1xkbh1yGowitQcezNgX5MLbfscLL9jfvwN",
  "key16": "2EACo26KGfULiz1AT2gNcpEzNVvciUhgoZoBFywdYa5vcKaT9Tntcz6Z9SrYEE9hBcTYyvMJ1TuZ4sYS9EgqG4kj",
  "key17": "2Vq88WHfgBnM8UMwE6kaZ46kwudsaKHmcHUxWcJQYoA5QNspZ6pwgLndg7i6YFeLFrhMy7h18ZGpB4pHkk2MkPey",
  "key18": "67otmxHCChGNUt6MLJnEFcn1hugDvMEQ8jJLrWhA4enZeuGpMKkY8JHCtR7bgqtsHqfGHiBQ8x8HvNhtGX7ryck6",
  "key19": "5LKqqDYMJZ5MrQ5j8o3jcnKUZ4VvUNivvYDPxKsSHRASfBdVbMz6JPJVDhJSA73rsAUWFnMiuukUTCXky2TrTsqj",
  "key20": "3yM28k7o1nLw1f8VFcFUVarXA6visHb6rMy8ioDzw2JAjtyRGYBrfaWiM4mFw6RiFszhCwdc6GQd7iq2h6EDiopQ",
  "key21": "3n3RGFdVJ74kLRoVs4E6X8Po1kfDNhn6QatEhZfzwB2dcWRr3zjABMwCWgWzjyt149HFSWNDhtuFWonZRNq1dqTp",
  "key22": "4pKLupQUjcgSoJLtwj32gS3vMJ1VWbk6yNBfConMHBxBe8qgqy4Rg7yEoE5rzZSrFdpzsjHQDVK6RNuweixPB9MY",
  "key23": "5XNWd7m2uZQuvA2PLvN569NCAB6RPh2B9qEedTCr7u8zGAAnoXH8vPpyzciAreEkHW9mbtExPD6yDo77dpM6yU58",
  "key24": "4WL4CZVpxRq2KmfMzpWgCcCyuUL1sRafj5CrPuXhuw5khe3a8ozXTCeiHDt9Etq7j6nEZ4TSm94PnmpxGm63hdap",
  "key25": "5TRXFJgtopVacwUhMyXGVQy4pCqV5rveWSZ6EiYfhUURThpAJa2C7HxL3wmWknVX5wS9TpMSmxRfHzfaaLceQrfv",
  "key26": "3KtejfDTwZVfrHyqncQK4hmgGYmiHNLNfdNqgAUZGMRDDUda38VUbzBTig3tnymQQePbFkLLzjGJjJZfSpnUA4sr",
  "key27": "52yoCoe4XcbSU41BCK2kAtEq5vshpTeeusL7rkKtHcUgvJwZzVnfdLRj2e6ps5z53Tx4takDtw1byfVg2tgY4xG",
  "key28": "J8aibffBY7r7ViS9WNUNmaPwKw2pfzF9NZR3VCdZcqjzGkrZmVGaYZPjH2Byuac81XgWBmmWusUou2efepK9XKr",
  "key29": "5CdqSCukiANtNb3b3XtKXf6wMpKdVLrENsMuvgNntm2t6N7BrTSDU3WxenjGqH7ngzETZisPxfJvwL9bJi8wVfKn",
  "key30": "2p65SPyePbWiJML2sTCQGAbMx4pTGDvjttMnGbonz5MeCaqxminRjYKmNNCTx1sy9QSaf4uuxgHhJRm3obr1Zu68",
  "key31": "3bLvvgDMZhh1REFpNDShXo9YrqJtzvwZnSAcuCy2ar5Q7pBVbyUozMhD21BvnpsZGErzmH5mvbBSch4Tncf1Xje2",
  "key32": "2akmaoHrp8Zy1Hn6ruuKyatr4YP2pYYVecRdkR8k8patDzRRoqFE7ERTLMfPK9UFdg2pyQ3BkL1kJ2LWumjjMqNv",
  "key33": "36daY9CAcTL1JynG8wvpBWVVvysPU6p4iTXt2Qt6xB4jtGzjNbBX1T7hRoQ4hxMXuPy1JtfPXdQ2FhhoDg63PJeB",
  "key34": "2wZsVgXLSWJEMzaJvW2dhC2Y7fkftMUPuGsxsN1oar8V4z9pHVvZHaPRBfjTwaF7k72ZSKbLd2sXuCs5ynSq6gMG",
  "key35": "3KHzqRx7uJjZ1iYxpYBQZ3xHbG5ukbhpev9Pyv9CuczMMr3Pa8CjiKsoiS6qcJCS3nRBSNkLKh2uFrbwJb4eEoEi",
  "key36": "c97Lu2bDjnJqB1qGmbsJUwr4FhZP7rTi9S7JdEXWC41FuK4wmeh3VwC8ynSS1Yge4Jz6o1bRPs8P9nNuoKQBZXd"
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
