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
    "5iM28X1ibeWh4zh376R6t9fm49sKDDMYvmGJvKoVGPjojHo1F1Y3K84VFWx9mKJ5Njrm96RPAjK2bZzG7WBqsnEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aw1TnM61F9RQnPoZWWNJU2RKNuPXQAroZYtSi1e5KYTnr6kgNrrVFPNkeaR9rTdqCypSQugFNJ4KZ7B3cDU5Crs",
  "key1": "2DQWm1WgCYbyuqjs8WNWQV6TuEGxgzynARHvLRZUhC45FSo8GqoC3Moyj49WZvW1s2UUkgSkHNuj5Ju7pBtKnEzz",
  "key2": "4HYbgm8VDQakT29UGcJhBMKjLA2iYAEs5UF67H8Yzo84ZHp43XYeqP4LLoxnsXQcaN7e3dzhywkLdKqLabuLXZSY",
  "key3": "5krSfbmFXVK2hhcVdmfv78uR6uZckbcRggxLiM9WpXEhrda6CX4sjRPdH8KNbZFqdLt4VoCg48mp4oSTanbkqMtT",
  "key4": "3Sd8YWMcrVnAXEQtxzTCto3vjZ6XgDU5PqtDhzo6LJddxpSpp4hUi83FnhWPXULQuNVPA1tz3cqEzTeQGbUnbozg",
  "key5": "4t2GCn3yS6ZEjUR8ex7aNTnZbzS28SPQYVHqRwW8M3oPFtFsdiB1dAVmvNs7roXh78PESKcQJdErRRnZhQsS314M",
  "key6": "5eVygP9WNReGe3HES4RYhMmUHsd8Jz12QCT6F2BgeKsG8Y5Qy9c7FE4tPPZEZHCGzvwK5g2A8qZuvrzUK3M2iHrP",
  "key7": "3QvrzMkn9K4djPmFirXYHcJ2kkzCS3e7UBqf8wXm7FkjgZjpHtoR8d5qMx8DZvKHrujbKZ6Kc6sRNf7kDg7Qa6pt",
  "key8": "FYfLpayau7Mob1HwMmeN76tMtHPsw9HNb595T2FrwKzp4RgxuhD8D3BZFANNVxemQ2iRcWve4epBvCGjN9DXnsz",
  "key9": "5p5UMKtL1GZUVUU6fH8joDc88sL1rc4bJb3VTUK8Gqx6o3b4KgkDwwLQTjA94bs6S3ZuSm1fBGqFHnfvRJwsTtCN",
  "key10": "eRDJ1gFGFcndXwk6VgkCk3Jf2y12wRjmuakf1F4aLbtaGsaBzUrM9Hnuwy3uwZi1wVPVCm6WbUn15B1Ci4u3QEU",
  "key11": "66ERpi5zN7Er5pMTSKmLQXmD3sjGy6z6a28yCAxgQBHgN3PmrNQokmVCot4j9VSwsA5YgzRnfv8yNcjPTUwQtwku",
  "key12": "32Qp1MWVPtBqTSxy8qDDiLCdrK1aeMo88dh3FWHA2Qy69HGLMjG6J3C3oSZzui3AGRc9YqpHU6FzV17ou5j1CPQJ",
  "key13": "594KvAcZWRNrEdxqrXezzShdGKYqth6Sb1NeNos9gKd1pEJQCxEthviyfJo6kNu2KAuE4iigRHkdVV4NFXfWBZmA",
  "key14": "2YP3qVnKRQP4XB8W9PGoFVXtddxVVZqSbchWJfBaPG3gckcCqGTtJxbLiPWMHaK9i7ZGjszPcCrDgM2EnDpbkAxc",
  "key15": "3VC25zv7vNwieM37kBveYfBQ9KMnxKSqBoHoJWABVCj6VxJgLP8q3YoTvYo8iZoopLwLqZYMjyMmMRZzE66DTcua",
  "key16": "37e3KNNeeWqWC9V1VRG6g1eXfBWVSCxbCMUTb2MSqcuQPy3HifkRvWEKwpq7qnbFXGYKKu4TcmAUeDUABcAdfRmJ",
  "key17": "5858QtmbKaoKY4hzyLeqCcNEtBzC9xQWqkwwfFPs3yJ7SXbuGsYLD4eZYqxXJnrtnPYtiHUHfjUdiph3wMJ63SCs",
  "key18": "3MR2zE5jEoo99KpmrsNp7MqadFAYSgm6JMM3C2291Pawey4onEqkC2TfEYec53p8NY2kq32i5yb9bphufRYzaRtn",
  "key19": "2xoMuXFGWj4TnCFnu35KnjvgWwNCJWPSdwgx6GMmbg1svo7dPqBunV9CXpHXAQFggUgJDcFVFVwxenuZxvS9yf4E",
  "key20": "5nAieXp6UGTYVyaZU8DKEsNwMDavNq1kw9niDuPniLHWKRGFuGnmt4kedsPkTFpjgEzVZrzb6ycLobwfLehqWdHJ",
  "key21": "2kyjHD6mLYHMkmn4SqCaBR3xMHTnQc87BP4w2KFboi2BrLDuU4ta4Sw2zAcGSipTTdd4qHaoqiUiti67qRSecucn",
  "key22": "TD4WrqGzMfte695C24ckqXcJBiom5W2TJjovjDDp3GeLnTB21aXabr6nx6b6ydkJ31NJxMx9n2LCoW451XQ4ePP",
  "key23": "6m8VjELB38rabqhsCXWGTujBfEY4N8zSdqVVibebQ2yoxcU2YFcrh8Cqa8oBNThgEnTwdaCmH3pVh2PqzvmvMgL",
  "key24": "3NokP1F91NeMKbbT7n5ktwqju4SmxyQ7xKjToTsRUs39ejH5954wfSDVJFXieQGvwMNyRqBCWUh5kmpvQmyvMh95",
  "key25": "45ticyZJKzE5wDbjgoMshUsviJ8eDgPnRXZWjs88nNeJkbLyvv4LCSuUj1qPMagW5EX82CaoEzw3aRiUGsAsrHNE",
  "key26": "3PZEXEhWiC7Bm2NLCaf7B72iEvDTKT6GArurWdDMa1C3YAarZVPnEogtAgB3Q7zuchqk9XP5Dp2B6WKyoEGLBwpo"
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
