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
    "3xqd4LmSFaEdh1PF5NCQd1zyE8LZr3qo52RBsJGzd6h7bRqvUZAMwDr2hfRBJ4tTfSVD3ASFZsrn3jBSXarg3fLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AX1RwnQhALxpif21CQQ1d5unA1tswGesfAXFu7aBHGJZX4P5VsKdBddpRBxDo1iE1XnPA4PmoPcAGyrwC69koYd",
  "key1": "3vAxBNTpYJLxcqitFnQYK1xvBkNHNbomsSouSyLf9FFsB78tgsRWMyTEW1EiANvkwuMacyWQdmwFRK9swTakzNfm",
  "key2": "47PvHFGtksBAjoCdBkWVnzTRXM7Wh6gQ4omUtYReF9MKGjZuuaWBiXg4YcquztP8d9etfjGgUKchff9Twgw1jFUs",
  "key3": "5fbrt6qaJyJ36XCmKZ2A9jCc2bz2CtjUC6zSmkaYE3BJtoCSzfgTfzybT8zYRXhH81v5MLELuUEAipxZAKhq6QtZ",
  "key4": "bx8tHUym9WRpfQee4nSryiyvbWs4Bb4Y2rUaaDN3VvkpWUVyjZh5uP2r8qeTBYQQ8onPVJykHTWo36qULDxbk5E",
  "key5": "2x5LsPfqBgyKuyqDRTUpa32GzRVPgLu57Q9pdDB9mDpzCeTh1AU6ZCXUj3p9r8ERcKhSZ7W4u4ZiDrGNnt7c8sk5",
  "key6": "aAex1jVSJ4qfegvVdAqQQBqzjhBFcEXkDRov7mUJNA4rJq5nseRTTH962SNy3H1Zstao94V7GTnXTYExEPGEm9p",
  "key7": "CowauEmMyRxtxY5zGpqVaSFzXfe8vxMddLJ6SFba3neZzuX7s28CLB6rKXoFTpk8HvAPiEfXjypV8oqMtpcWYrX",
  "key8": "52qAHA6f8J73fhgPDzWCnMky5DDU4XNPVTiJUdQJ5vUXCTLUSwV11Xe5CiYykSaK1PNDgRHSusjX8xbr9DaEANje",
  "key9": "4123b7NxqDtyQq4xfpdcmHg1j44Sw193EuVAQkRCtyqZFb4Z3ZrcCBE4tue7PHzmcYpYWU93sR2Ba2uBLybturoi",
  "key10": "YF7sY4L7X7Go7UsiDGwK9o33rFJZJxPp2jrLkgP3QuNUJTK9AawhHZQTEtZ6N9X5SVGMHL5CBuvxHWEaFkP2jMF",
  "key11": "5KAXxtgN5EWwzEto1BnnqT9N6T4jwhRhiDAKWJJjXMgA6NEhzVbx4X9MKxhuih8FrKHYSZudRjkpSskNDeXcSrSk",
  "key12": "UHWG1Ji7j8KtgYAvSa4yTat3xxyHytoRNbiV8dHUYnmjuDeMp8Qmr42MNksDHXWjwDvM4picgDXVMMLFmSu1uqq",
  "key13": "2XmVT5bTUL5rD1mRokyXmuNJjVnG97FkQYgVoD4Auo6ho9tKtopJgusiXb3kU4bWdj8pqsVG8QFBiraWtpD88fi",
  "key14": "4EsTeekzGf3ZCSuXxS9Ngf3emhA8kaxPQWGCvzgMCaJh8pbm23ayYJmqzhMWwnBiTktoqTsWeWAzXPYgrsysM3f",
  "key15": "4NXJ7CbGQkVY2CjgCyvykPzey4aaMTxgWf4mjrqnd2Xvg2yjJipQUc2PZoKE49LsQcMUBbMcSDEzEpFa9LzYo6Hu",
  "key16": "45hzLYrxr4ULxPBH4bg3GQ1gEuvJfpjZ3jyKtJDZPzGWxov1G7wgEsVCRFtwie3U1CT3UdgDSniw1MJVcHHTUYDT",
  "key17": "49HiyshoDDjzKugqT276zsTeT6r2y71QLRL7TFmNohfTf5Nb9hhnJEMozbi42r2kimp1KLNA5ALt8h1f3r2Ka4ui",
  "key18": "2GMnSgqjrqLvDNTj2iPFyCgCAJ5EPFkAHpFik3Yx9XHZBtLJJuarxym3bJ2z2bLi9ojbrmXecuv2xBYYG92XE96Q",
  "key19": "4gvRN2usfRDzdx3AHHyqSncbmxrFSxGCV88QN87pfyuqzc542RK1YPYKibbsfBsEjmbERvXEqC79dCWgk8mVePpU",
  "key20": "5tiwV2mEwELVkaKfTHnorLi2iwnadzMCp5HxMhYAsiQpJzzbAbd7nR8Y1Bt7MGWyrCTpTypwjDuEgtbkjneX2Uwc",
  "key21": "3BM1ApscuJ3ZmYfQPQbyG6AHNUWH8B32qtk9o1vpb4sTmc8ffC3zszbjcYnLmh5pRv9xbRW3uERpvpHPetAowWSP",
  "key22": "3vFpZGNJoYwkupEtypJqt7zZizJVpbQTcv1EbXJ8HxW7Hw5Hc55BzQYBGXhUV1NY2bPN7xfHJwv343MZuTkBMJK4",
  "key23": "pbCg2EPgP1fVzsUpEjaKPY7gnYrMbjt7JgzWDqMrh2zqL2FjYttoTa25FLYdSM9GvdnX8T6wxu2yugfav9dS9uw",
  "key24": "2NNoCFWZG4xbehCSzGj1qXjWVKC7zauKi2e3YHBEaSbef9KLk9Ti9jvkeUf7tei1jjCCxXp7wuhbeELUFMYfWNmQ",
  "key25": "LW8VTjCpDYFzRgYr2hZVZvNLeX5KgPjZ8G8GUabKhM7uadvMjRCp7UKnie8EqSrwhii53ANKZNP8PGGzLincZ9y",
  "key26": "4cpvtoV5AXCrv6gxzMLnPXXPoDUi397ZC6P7fC8PgebqQqFbv8wRBfUzHTjeB6ntKRL1vSqTCfxULMXRPZCrDf5r",
  "key27": "2FhSr3GpeC97smes8U9JMxzuLncELtKBKDKkn7LBLgFXN2PzQ5pf989ebVr1p9JkkcS3y13LM57GBc8LgCHw5PVW",
  "key28": "5e1LvFUhQdcg4hxbMMfffgo9Q2CPqnGhYK7dUFoTAaAUW6kfT3WDkR4qRBQZvEbgqpcAAFUoB3bs4GE2Y3yotrCN",
  "key29": "38tSU49CttMSTeyauPy8doUU4azh5HtjYBA95Z5Q9nNJNJoF4qehGYP6nFguQdfSETkZu86JKPJ4wm7mf2qBLynY",
  "key30": "5ffH1NXXFceQTT6F7YhdHPxnzm3PvuRq8CmMNcd12UBGpjGVAT5Kdv9qL3iDLYSQkj9Pj6iBtnvmoC5bAyJBUJcW"
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
