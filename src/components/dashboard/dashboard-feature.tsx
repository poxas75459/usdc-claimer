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
    "49zW3ES7VjYCsTrqot3XUuzp4krEYnFHyDQWz3m9TDypZaYMmGTYoBrTVPkYydcapzZjSresVDR5sWXaZRoowUNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hhAvrpQZQ2EvvrFBz3KeLHGJVRCqbKcErcXXH1E5ov9SJqUmgHoBuocDKzT7miUR7SnUtBuYoyFDwNQcu2im4BD",
  "key1": "27hhrEaEGZZZ78W8yiTBiEJubesFBgNyfFn17y2c1bD7Z1dspEwz29LSHSTS2Mo7NQVBsXrQYahPVHt193c4TLDU",
  "key2": "2eqdpdx64d8Gdm7bZqD3f4x22DVppxGUXusn4jC1Qmye1t22QQn2cRRDkw73bmk8a35EbD5zVjmnrF34xXgE6DS7",
  "key3": "2nG9C8qVouuVfMYLWzHQhyH93JqooK3Rx4cdzyQKvyWjiNsEPsNJQRUtcHHbzKMuqEKBta1r6NX1Wyfu67Cx3kBa",
  "key4": "4MonKpKhWmUttGQ5bUprByjYsNo3fQ88SUcyFRyTXb6EtvoZ7YVKxN8ZKN6S4iV3v72gRwxz5dZXnB4VFNmqFz38",
  "key5": "4u3STo8o7huCh5VYhfnPwJMRJJkkS3eQUxCB3SJCG7YYrUj45nHmVaeBYgFS5Sb9m6UuHvaBhYjH9EGcMaavTZht",
  "key6": "37jJJhhj5Lxr7KxzsLVnrVF8DvzYjwttkfLhfRNrTj2S7gUq42N35aFyDYGwT2nFJWGcpDM8rF5gsPkK5hXtgTf",
  "key7": "25yxkk5i14advaKhGEAx2w87aJ6Z1dsRZrENXQQhKDKU9JUtjdsXrUTWGV1ftbegMP73Fvo6MRG7bjGJwRnNoofb",
  "key8": "4E4ZCr9wP6pZ7FkN8BrgaPWjfvcpgbdLMd7UG19yTx4PPcY8NcHkr5dNLJF8jHtsKJCSQtJxfMDZuXLsy1f4MV5E",
  "key9": "4zKT3fejujvaH66Z2rYKDsGahPaH6t8RJzDLECycL9yg4xpxmgE9wKt8ywHDj4YnMh6ep2Ts96GKF8xbTrCSgyjg",
  "key10": "3jBk9s99BGo1VhZpoYuhNEA5cNwZXYffZNZ4YVHuGGoxTU1iDEcDje7vNRue677Lzz3JSKh37zbFJAhgHAZSGbqM",
  "key11": "rx1va2QTb8fsAMtdJWPBqKQQmSxGouEBcc1aonFgvfaE4nDC3rrKCH5s2zNXNxyWG2N978FZVCbiaA75fSqX2ZT",
  "key12": "ZLTU2dgNrYAzeAZJ8yvTms2kzvzKnu5f3r7QGwxPVnNV8ov82GGPQK9V2vy9sRoc9nGuQS4rzSBEhEeeWeYewXT",
  "key13": "4TwbDXxD5SuFWdFVWamvueFPEGVSu2khZSUzWcTTQcwpJDcEJaTA6pTYsNbPpPJx1X4W52qNq3MBxAN7xqb17i7i",
  "key14": "2G9S5QFCxAD4gGMJp5T12mPFhBMfsXC1o28KYWRSBiQQidF5i7hM6WTdxsZGYP8jGH5JevNMEhmcoTnFJDZJnzMB",
  "key15": "qxfmWyd2fdM3TD4JcULhfcyHAXKBmTPgSu7E4ZkeaX7hpL6X9wchEDwNJCFtNjwLovKvauMu69ES7ctEf1cQVu1",
  "key16": "3yMGr1oLYxj64xkGXciKTivp6SP5eSVL1moNWmdX25AjenZwa66RXVCVBpBsqmggEQeWFH1kJKEg21vAGcmpbH5F",
  "key17": "5sC6Q8QfS9hCzkgRYTnh14t7RFbKYhhW5REQ8QLDvG9WY3GASiEVtP3iTTHjxsQ1YgLW6gbk4An1nSn6xwnaWSdb",
  "key18": "38yVsmeYC5cqrwMuonZSoWaigZJrLzoXZDcLvD7VJuH5cT4xZp2jbzVwrnFsXR1wjX1o5ifNdmgpfZA2marv2guw",
  "key19": "62qtrycgZFNVxM1bF1mveo4Cr2m1YiQmbTABjwiZam9x12rfDvdzGmEXmVTpG6DPFhJwjaTzAzE8K1ydKPgtQYpC",
  "key20": "fH5XjJTNwJbYjfLvEiMWq9Wz8n8KpScjwjsyJwdfVPHUYCnmY17mSJNiPdMWfy5PA25kEd3g8svL7vbBdrAXuoQ",
  "key21": "32eH7ac2cTVu3dZVoZUwRBm6LhSiyCSMXtbMN4FsEUQ5KiLsVy2otjWgpf1RUwxv7Ca3RbsrKnSnkLWtu7LYLqzK",
  "key22": "3fKFBH576tVtGDUej1yTVUS6ZmeVqzepE47dur7h9P7w1GrxuM5u8qWSfCFnAsc3Rb7pCJruYHNJLkWkPcFoPAUv",
  "key23": "5XxMp8N2WaUpy9gyJMLaFFWPojn3qQrtVyd9NzXiTMVSmmjqqLAHWWWaQFwJVYCsZop6TxTpS1CNYmppG2AZdVSN",
  "key24": "3JmtyPDb8szfA2sSrvG4qD6N8rNv9um7PLVhaAJ9qQzWZPZr4dA2SHfbs66Y56mx5PnHpz9XH8QccWoazLP43wKi",
  "key25": "4DT9X17WbrpMEEJaRCsp5xu6gBPj2RFxRjpEsKwPPqRtMf2FmHAfbvcmckAEiEjmgk5N2VusJSzU6aDaEfkiw5ym",
  "key26": "7AYZSrTmvESmNy6iGQZcWWPdnCcuTv8kS9L9SJYqEWz4NBoFyVEroXjkbr4ckgp6yBC26zDh6ePsfhFGN9d31Fo",
  "key27": "3PedYYm2Bp67uKTkscVTx3FGjaGLrKvyqxvBxFfFDF768ZK37JCH8m6ckrpCq1mh5XTbMitSy7W7pTc6Tb4mJR6d",
  "key28": "3hHj4L8o5BDqAc4djztcyy74ufqo2WWHzqoNsb24LCzu5si2Xrr8K14XCqjWbLntTtpEbLJLpc2nd5bErHmWsd8R"
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
