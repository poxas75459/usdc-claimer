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
    "2DEZ6ejC8DpFp1wiUrG1TkVkBS6Wvfc5Uv23zRnXPPsVzYo1M1pJJ3jZGBhw6cHGtoWTZbYjsXQKBghkDmsJ6J2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mYMMJFiozrAwAsBR3Fd5Ab2tnwaHS9wmhYReRAbhgaCCAQtFuQDspHHZRpmPpKYra2c1uq6vk6Q4fgJcME6vxYh",
  "key1": "3RBqhRhcDTo1Nj2pW21ob9WW8o3CBbN9WQRBt5t7y3UN5mLJVbe5PKNbYbUCwRAPzxYeTxwwovH7bUZkm4gi7qPe",
  "key2": "LjwHkMk6hbuvaEtiFLQNtH9Ba5tzq79PS3Yrx1WbJq2KsuqXg9tbkTLiVS3GXDJJX2rjN1AyGc4DFrTJYmSQCGG",
  "key3": "2pVjrGnzzX6QRYcv3NsaL9C4NeKuVKFZk2RXHDpbWCvqsPKvyo5enWjPpkf4S4Aoqvnn1tsAUmPZCyc4jJC65RDz",
  "key4": "4LQLwYoiddZ4DiRMnUn1b8G4nVQ7RFip6DGuiFcco9d1gGLnGyo1qBaYSfBgBmYkmrgnqT73DgCbK1vkkwJUv8n2",
  "key5": "4wtminJx7dfhzr9avQjqWoyMd5nqkwcqmeRTCdJJBBHqFuKjfXVV5nvFj3ZdnP8bbukXs6LGh5JxyCk57nuHdf6p",
  "key6": "kGuSXCpa2vnAM2Y7eShWiKpMScyWszxtsu9LXcG87wXJa4EymwCTGb4xAYWd1RksWLCj6n96EEyqq6RNPBUkcfK",
  "key7": "5Bxif6VcU6VVDTjD94QUmt3hgSsZWZ1ddQ2xrde3MKYPviJNwDXvB8E52geA12FSwm6HYHTAG26jAFYfi2TzyRNT",
  "key8": "5ZpTg22RrgrrcB3aKXh5na8YZ3ib8UiMdFcRjXRCN1g5Cgkve2jrHzo51LqiFjhFznfpFxjVSSn7esJsXj2NM7jw",
  "key9": "4R81ezrsEczAdb485aig4jFodtFesrb66gopbqirzt6uGFhUTanLxY6W96ZNGVJZP96otbtF8y7re6gjieUKHYuK",
  "key10": "32rFsPCA4TyTv5c9JTyWEpYNa6JUesvmzSNtGrcqQ2fp1RWaHHP3Kpr5pAwGqMU3orgH31kDqfKwD2qJcfRbd4dM",
  "key11": "NQtqGNJDp3WAkNzUmyb9HotyV4Nw8Vn5hwJqEeTqDDxcj5fbaPdBi5DsdwDHF2vgCEmMztwtiquok4mA2EX9wA9",
  "key12": "2m8bENMR3ekdghoBfAsxfQXqcY2sDEp4TBip1fR2mULwnFZio97gDgY6nXVBM26AiCDbR8JYDpU1rKtrPLJFfPub",
  "key13": "329SGLfv6DWmPwcweVVHPmYVrXKsZyoFsLq82FHNzkvcMfHMpEm3W1iJk5aL1eCcZSMWSQY1WRh7iVieFnvNLsvu",
  "key14": "5x2WmsBQdpU3h8RHKVAKfLhQUWuWjUeZk7pTRdAwkNJSYK7N93Y3orW75tDJuFvnmVyuz4GxMnCucDVzYUK8Mqsv",
  "key15": "3PionQLhMq7DWSfiMbzjV8qoE6XLKUBoxxyvVTymUcqTVY9jNwo8WFZ6i7vuJKrYK28sYBDW2cc2Yz7zdFNP46YS",
  "key16": "61EwRtHJC11o6Gw5hqDYgVJcr9bk1TFS1hvQo5Q4FN5oRPerinCZg7ckbGfxTZyp7bE1r2fvURbkLdnjA5ELzHXG",
  "key17": "4YaMnpQdkZCGXhFDRS1LhyAaxAc5VqfPf11MtsbyYbZPAfJPCzA8wKwKxUMHdWkGZS8N3mpGPBkxk2irxYS8NRU4",
  "key18": "3L4639RFEMf1yfMVKdvJNJ7Wfy33gpqJacCRLwXSVbVQTj8UxhS192cZJN5pRsrFn3Y3chrA6LKgNGzF1eXgGK2q",
  "key19": "xeADCSfRppxrVLsVpS83PMJyJJDuwv4RagSxa7EDUhKAY1mHJbSTYsHV3J9eKjaxbzmH2gNTvstzeNS4Fr1yfDn",
  "key20": "31taG2B41x2SS6qk8XxZbiTtkiXWzLRphyRsbpkeLgmuZUrsMK2atwH4N4pgupKytucFCGuHtmqgmH2QWyQuyKAm",
  "key21": "24kLry8xYnZASyffTkeajDuBntBFgTkbent4VV35YDEtefGWHuKY5j5uvTWMWdbQYnSGg7QbFjd1TbB1njmrjpiM",
  "key22": "4jAfUCF8jXpqGt2TCFoh7iuuG3kW9wLMsqc5kCTdNfZDUiKnaQPYnn28Rb8qVDHwP1N6Dy4nYep2ioCLuLmYMcke",
  "key23": "2AmPBPfTNJLdnFXFhkKaJa9ru945wfgdPbDjZndwvBNDn8y7t8Ck36edJs41Tq2GGuyHtZ1fzq3K2MWJPyruku8q",
  "key24": "58qEDcPjs1WcxD7FotEAkr5cGRyPMHiAacrXwEBSQsykge3CyjDkfuw8FzC18cmpmA4UfSnBH138AtSFBUMqFbhC"
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
