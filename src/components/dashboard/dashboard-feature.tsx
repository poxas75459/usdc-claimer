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
    "3TLUSbijBGvrc7kLUghaZEax55i5HbpbUct5xugQk4ngdURGfFVmQTGXYfi1wF7n8D9Kh7TW9LGAojfmbmgrhB7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mR79BH4tCwVJZ33ktW5LdPPaCufbCt9ZjpsZMZDyUK9h58pTELT8MC45UnntTkpHyNUaW5TeQAw9EYFvvoHhiQ9",
  "key1": "47JVxBnzSRzsKV59ZBy4QQtFRn4y3v1vSPMkopVtvCRMPVmWxo5W6Zugwo7xoXUrjzzHqJu56ptb3XXFJSJJoEE4",
  "key2": "2wGtNuc4NYx38Z45Z2PhdwG8DKQq1CdCbtkfGcdJ2LjcRRJFXxGBrWe9kt6zJb1f1zdXtVpfTxgUi6wFotnJYnL6",
  "key3": "4wFTSZcbGyvC6p7WNLw2Bc4JVhbP88xye5GvVfsyU2RB37zPHZ3f2y4Qu8cv3JeW1Vcn7oDmBqEZePdZaZdQFEgN",
  "key4": "5z8ngkMsHDHm5GbLe2gTXgYMf2R8oiokEw8SCNLSmjRe2LCwJXcehvShXfKxvZTQxztgGqLMUu5NByjMbQySNLGP",
  "key5": "5pEoNVMTQ81H5LdMidZ6RuwzB4HgYSRinxe8DHB1tqmqBLJsZWRH4YQoJj2iPvgP8Ur5wiKLBPejkvcqtV27NUJQ",
  "key6": "46E6oYqv7LA8ZVsYENhsvmTLcHrRV5fKHiQJj79V26i4Ue11vEfxD5rYc1Ef3m2b2YqbFPKUsoR4KVUj66enhjCN",
  "key7": "5BMj5DWUt1ew5RKrPju131hH2U7yNRDP6DugoWi9vNuuEKH55gi4KWH71QrAnhUVE9DGgzb6A46PkSFTo76n7pKX",
  "key8": "5r5h7KjsrAJ4NGZcVad2njtqmA5YKXcFU6FUdU6256eLafpcKbhCmSzoTN3sc4YA9JZotswiLDj1mG5GtecGBzot",
  "key9": "24pvmNbCmC2JSa8T7V4HzAEUC1EiEZmfLfwQ3N5pMCqepqPqCrTGiFoWg5muKoBEV3T1wpxuZ9SJMdFN43M6rkWB",
  "key10": "XToYWMr4718zi1cH9gvNkXLc3wjdZfvs8cy7HuEJs9ajALUK6pQYkKdkaBbmAcBrMwX8Fk83kDBGfyURU6b2ecM",
  "key11": "5LaQEHE42zrNvMXwTe4zkDk2czCN3Qgt6rHyDcf3zPt2J7WnfP7QthSCQCcrtxq83SEPAWV6e8SmbeoULoLcJbbR",
  "key12": "2b6SceavuLMGAtiWPkDSEFbikwssn1qbyRDND7iUb2C2NPWzHEjQXaYokp7QWyrNtg67XTtx97ZLp7vTeyuqRmvW",
  "key13": "2eEUvfFRAFuWCKGi8FPaxNJjfhXkCJy9qV471hiZpgAPu3a5pNotuwKYbLFgHbm2q2wwfthKaU2k2w5BmWEq9kv7",
  "key14": "4hXLeCTHuHGurqWEUouKFEYzYJjpogJm4AVkhyaUBPKHPVaUi2VxgViDwmwWYY6F737f3NzBTa2v1RNTageM9Xix",
  "key15": "4zXhXkUgbwbVbBmaTuuXuLWZ97pfW7mKethL3fzsByrrXzyWGLPuEH1p7fxsndLKrUYirU7F2AXEpTrEB5HHJaAm",
  "key16": "2nien55UeC1kYz7NE8te6QZHHKdKJ4WKuvTJeidbm4G45bC8DmNtft1aEwSgMif1ZSJ95ZLbTLf7vXwijq3Xb7cG",
  "key17": "2cMV3W7d9Ye4VWSej43HmoahViHWdMCP9kCTsUFk2DztoYe7BehXyijPM625Mo2Kw2JhPyAaSejVB6kHYsUPvYp",
  "key18": "5aUa8UYSBy7s2oTKdavMYHhMFfQSf4ELU957mMTwHgTaeN1bsgeWsNHgScy2huh5sQBQV99xrSXwSZyTwdLCMve2",
  "key19": "3hGxhjX3dZfR9Kji4CUQbBiYRyGTtCcmiYx2PjDA1HRtAt5Ha4NiRAcfUTJcYw2brS2TM1PC8BXecxDs4QucDTQa",
  "key20": "4EgTikcKGRfbeZismPvaCHEgt8RJYWEm2AiMfFXesf6haBhCyp2ySNhGSJZp4du5utP5ejGtztVmLjHT3WEewGoj",
  "key21": "416CiQjXZ3rMFN2L3aoek6Xueo7Hi1BqdjN5h4ePsdKCfG2eKqJmKsfEm8m5XfLnSM2hn9qjNvdDXMJMSovRaKne",
  "key22": "3SuTGDYfPFUm1bkENs1YCzxgNnyFrWujf2xBSf6JQzn82u95dxq132je9ndMr6A5jvK7egp3M4bzoJ7utsDqeNuY",
  "key23": "4KWiPZsx5uZTYA42vsZNQcvuZ3xCnTpAii8a4k87ZduWahXQtR4PxDUbniuEjnaXcdWZHDX7vHJu7ePdCD1EAsCe",
  "key24": "5ejjpUrnG19C2TFqqwrACbFXDHufweqxV2UATtC64XT7HtL6y1ysbGjs9k2B1E1HAtLofv55JoT1VyLFdFvW6USj",
  "key25": "29Yb4ZbfWQ3d8RA8oDDgBXX74rNVz49NnieMpP8QQYYyy4NupfCJkiN2ybwxyNDdSZxjKB3oRkL2nZEqNq6Twqf9",
  "key26": "3tuwbucoMdjYRUTSJRvhm6f5fSYM4AUPG1q7xSrtaGEEz9iSzVLnxYLFxB6R28b1vMcfqKyv4ZJGofowMqT42aUG",
  "key27": "4Mn9A7tP2UpLhhpBBg8kpW5i2b3XaydRbCpcomhU8HWKTzZJg1Z8CBWMWz34xMCK4P4RNvR8SWHadzDb1ntQuiq6"
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
