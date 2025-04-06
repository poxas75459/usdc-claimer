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
    "2xfZMHAEuFQuBLVX1ZC67BGrx5WZw5Z8m1w96YnaRB1tuvLBzG9WtAMoeHxPtADLJnHkZAV4Xxc2buBgjcri2Wxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s72mDWP5XmufAbfeDxMyQ5LbF4sfFZzHt4HnYoD37ukaEZo5aT9CaxMsZQ6wUmdN9DVWZcfykrEi4VwfqRx1s8e",
  "key1": "5xYnYGBfJEUuNRCk51ofzKTBvvHixAoy6M9XhfUqfNqeMMRzbiSzB4rppXdFASLrSoMSMNdjRkVApJNVmcgtqAuu",
  "key2": "41HbtRtACcFt8DAybhW3SxSUzyJU3jQok6kvha36v9mPa9ErX76Qw8icqa28E5otTpcb9GTpS3qh6wL7q7kkTvNc",
  "key3": "33M8gtvsGqS7fWACr1vNd3PnbvZquJeYQuENUNYP6aP36VxDzwFbJPfgaVx4xwVGJnQENYqyNtxwNJmZWtsyYfNh",
  "key4": "4sYKK5Vt9G8rrsKJg9X5Vpww7hRDnpwbKqFdpXEFm6dGDYJGqXJ54oeV1qdvu1hmu7a1n84m3aRQ5odtjyoNM3Ua",
  "key5": "5aL61WPNdYRqe4NLo39b6UZRMRGbLhjpGUY6YvZZN4proHcGBCv7xpB3uZzEwS8Wh4vMxnphMHmJfgiNibHKxuq7",
  "key6": "2M9QyXdgq4c5P3enLeUzKBSaTsxYqR8S7csUCJVcXiaiXEMGqpTRvEfkW28L2VwCeQpfGSG6ZsTmmLMTt6Bozseb",
  "key7": "EbGvWbSJMmW75muSW3BU5FYvJYjgGsnpBXdXupfMYnUjtTPCM53Tkymnh7kgeWX4zstszmyRSLeSPfkECUx23do",
  "key8": "38hrFpcDTvfafLynMQCF3oKoHobwCyXPWbVzhgHRPu6yK5uqjbfFzuQHbag2sKXTYbetM3arXyTD3zZmZ5oinEM4",
  "key9": "4Z393nevqgX27AFyZ4j5vtCqJWMsubtQYBnz1jDVKpnz4xLQJBZUqpjfpoZMoYBqtNfSVUhiBZJcL2eqz6NdmD9H",
  "key10": "2z5dhdSXDoeNfKAwChiy3NiVACpCp6RrdopAFcCUyu2xjCkyQT6HsUVRsgC2oQFJhnDryZPjFu2U3PaS5qYGfopo",
  "key11": "5ShBypiHDd4kM5nubN7Xb5FPZewfcrcdKBwwNJG24JeJ7PwTsg8KBXyDujoqR68ZF3LDxmjsBXFRqgrEDG3heUK1",
  "key12": "4vbPBH7X4T81HiMSPBYgb5ZAbVaar6pnonpGtB8Urt4tZWd1NZctUZ3oUd82ZEpYri2g4ARc3aPKumTKgbtvQL3p",
  "key13": "MTRGMcCtuaQRuzvsQrFmNwRethWBHK64tvRFz3gmquDnS2AUehECoSGTGDrH2G7Qjkq62WCD8MgvMqRvefyvhy9",
  "key14": "3kpo5qcByvmRynk4J4L5HZoB5KZgG5V5uVwbQUjyaPMTR8QKnueG3HsaeY7revraR4JfAh3gbeE6pHbk5ct6TPcH",
  "key15": "5UQWduCMYYxV3siARvCZVZ5djnzfX8ognZLxd2fjK2M6Mq6pRPPkmP4cpracHo49Ugdv7irKuvabdbd5fqXRN4ap",
  "key16": "2aqkxi7EFpPBqaMLXT5i17nwihzW8gDjqaPzfhp6gtNjYYeiKQkWy5e8dNuC1xixAbwSKVdEmz23DvMJex4E7vBw",
  "key17": "3LodYw99g8jVxPEdaQDscRzqoCDazx5sRiESdZVcihHDfbteyZQU1Zysa1TPiEPHcs1azrf6rfR8jszxzVTrNf49",
  "key18": "2ULPk1V9w3sv6DKAxevwvTx7DRdFPeVaCme5XMuakqnQ5ngX7YQbkQRAWKzt3AXAW7XVaYfMdSCWmnQdsapu7ZeX",
  "key19": "64crQCh4g6BGb1YgiEXeQysv6v1Txqsp6dfa8Q7T4xAMLAuVuBVR6UtdUFPN11wcWuHPVRmTnaGYuRtDfJpozArT",
  "key20": "5u67cVafqWHJ5WpWRMEaVLEfnrDVLSVA8JJ2LhZEE4qztS3VFvHHkYxc7NwK6xG7ai4Er1e2s4vCW91LRDp4tJXz",
  "key21": "64hZBoUGeMRrSbeZpAwnYtAhQJm29nKaWLNgw8DbgWMvHfvDwUSHR61KtRGAKUzpbmFRfswhEyNdUW2x2wedKz5F",
  "key22": "YGMtfN7BXDTwN9WmGZpTNWExrUYJfkqXqPTHwfeQiSrE4WQyHz2EpbbW51SFL4UGbFyeDE2eGcPGjdjAP3KTc78",
  "key23": "49qpt5uL1CPETd4P4Cdk8AQaoPJcHiFkMf2vGbqQWKH3RJE94VFEXHVkD8ttpiZ2vAPTETASA1GYWQmCiqstTnNa",
  "key24": "4Us6ToQkaVfkyoSdcZVUGADBTsNW44sgobro3EUwjDHEhxgBTg5QBY91DsaV3xWjk5CzCcRMrfkkWnh7HqftHYrK"
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
