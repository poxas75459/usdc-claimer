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
    "5agQam5ExKZ9xWZZhYiPW3kyuBnoetVEe18t6xatc46QdU41y4QQz7nRswKFpnWkGmfqLRVQ6WeWerueFFH6nxo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTFmvMpJY7qMnAfyCGEh7RTtyEKKRuC2zz27DbzVWpGZZXVLwSeXiBupQCHvWeEF1RsDtyTG194g1B8JJyb8ZWi",
  "key1": "3oSdxCVks2RE1MMDbStNKdqZACXcsJH2c6iCYkXS8dnqQxnFHHe36iw7eKF66tMraiNboyK796wVFVK1kMu9c71u",
  "key2": "L1qxJ2RL4ozxcNjh1ivUgXo816WmV3jASjdU86c2SnsC8oPxnWpyyzvnYrkHRzJDvx2SfG7Y1DkMMu56XW79QSj",
  "key3": "48waB85dSbHPqAqLRkwB5BJnEGDEpKRuHcq3pTTCjwKLnG44V43yt84N7UrD5srbXf9iZqVmeBaxo5pHvz2fDaVa",
  "key4": "5dyRSCgUtQRZrcqWthtKT311KmEGDmMMvq8XhSeUeKpD4d61obZDZhQL4fW9DCGm9gseVDqExPRU6GiSLcV3n53S",
  "key5": "65K9gNXRrWmjKixt8oW7XNLjgxUTSiXUVVor432fCn6ZhKubzJQicDkhoYrADxMyJ5iqrJxjKGV64AriV6Cuy7Qc",
  "key6": "5QAVjZFK6pjUUknmPt7rj8pSVMsFFsLvFZEWhxYdcU66JbJWTZxZPwgNKTRjeUPPFBHMunbZVX3c6uB1iWeCPSix",
  "key7": "3S1jwZu4z8124yCME9wkV3t41xeoj2PVyd4VT64P9r3GzZQ6rXUsbBRBo8hJyMJcWoq6ztSLc2FFUV3KNV2WR26q",
  "key8": "5SWNRqFSFHzHom5o7CZeqFmmMEApbyr5NvotQLme6zXoRypw3428XSeKs3hYciMY8aedR4EGohnV8nt5qkVKTavh",
  "key9": "3TL3qMQZ7LgC5izeNhbHPdDgWhtc6aytXpjCL7mZFNs5ub9bWJjNYvbg4bSrQzGwLDoGuxXpaS36KiKdRdNNjGhv",
  "key10": "2fdp4SKCq8hdvWEQoDk67SS7mnDGDHutTfqXyvazGzPykMUiBMKFQTLSKNmVsUJdG47V63vDZvMre95UJtSMV5VR",
  "key11": "ADn5UoeMHCg5MYrN5V4BQiHJUmeMUBtida2n1Zj434pg8TUsB1AR3adgbhP2dabg9koy2swo1TNziCSCtCFV1q9",
  "key12": "63mKN3w9FYEfkPW3vi5BM8aMqDNnTjhP3DkHBH9o85urmT7JMy6QV6bn49FAnSiZb2xXowq9vJqnjvwfyrsTzE6P",
  "key13": "i6uZsd3H5tf6biY3YGNfZraiYW5jnbNeDrRSY6AhdGdocHbTMxQdEmScmkK15H3KnM5kxgxYjFT9zKoZ9YAAU9X",
  "key14": "4hAXnmp5MbxWmwsNgg8bmW9BDxmEsnwsqeSWszjZRKKCgaU6d6hYjAd2LCcrSwW29noLtNj8zDZKDyYjug4bTuHp",
  "key15": "3yWFQgwW2x4oGANom5sLzvxHv6dAKibgt6WVKpZP65bvKex5c2QM6Eeoa3oSE6yDLDW2UeLSPbRdiUkr3eVmjsrN",
  "key16": "5xhoACHuCNWwKp8mXSHnyfs1H5btF7WdAcP1rDo2gJ7Ctd4pwkHNkh3pWzZVz9vgit6gqQQc4DbyhFtBxuZC17bw",
  "key17": "5jCLnh5XZUEpdVYBNpdc63ufVe88SJ7MDE9jdMcSxa7LcrG1RephHL1fArAKR5X6CkXUxe4kQVZMxk3SuHUTy4xa",
  "key18": "2qB9zVCHA28WPG4pixdAUSnZBBB9RfveN8UhDDdpLQ7WJV1KnZ271f8BsKBL8UYQUxZGzbeqKdiKQJFh1Xk8jXJ4",
  "key19": "5HNEw4HDS8NKngebLEPGmedB78keD885zPiFwKSrLawMu3vrFkMEVCFKxY1JNCixhHwRED8d1Xdtb9Ezn34NZTyL",
  "key20": "2et2UajT4N7JsgyeudbaGPRCujgEtJSkWgpsgMATpJFMaRpwGx736zWikzsk4Pbqianwm44hNiWC7t5Yy6Nd1Vpa",
  "key21": "5kFCJcus9CWn8Srz2h6Tct6S4wytefJBBenfo8GRz1Dg2L252crDftjMQifj7Z5EZg4b5HtckSQSDb5H1C8Pcz3J",
  "key22": "3H9sPVSuAWFmJphAicdKCNWfM4hGiM72ME2ckqLJGZTiAu41Huc6c3YnNKqujmF599Frdqf6jfAVhxXsr7nGGG5S",
  "key23": "5cPWQFynXDnUVzu5x51gAkMoeMvNjMhrynAWNYS7kGfzCGfR56frtjYqKjqcypFrZoaaYzo4b7gm6DjJNj3cAuo6",
  "key24": "5FEKH5no4SzPGwUuUpwSZMV4DbEJbVYqmtBCDXedQoLttRoxf3XFjHdVC11k4Tp5VJ38eTshd1TsreivGFpnXp17",
  "key25": "pMnaAudpEYa2v1HWHszsikMheSpvcZrvMSrXeYS7A6T2CSQserG81DkVDLsVuP3fVZ3uDb7eVU7nwkjVFZ6f3Xe",
  "key26": "rsJyWgdwL5tUkguQnXqoudq8w4xg84sNYcbEb3gxtvy45rRxhobxHSt1DF59PwxtDXJgc5B6C8BPNY5Q1aeWxPu"
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
