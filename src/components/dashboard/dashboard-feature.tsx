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
    "4FyebzeiC1icwU86r4BodLNTiBbhASzVYsckZDCwRBaEhrBQkRbQcvLZwDyigZxYVvqEy5u1NCN3hijQYNNciqRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYsg9Riw1VBPkYq4pbH5aXuJmD3vJBaFLjnu4rA4XjEB8uEjcvmyxE33HjvMVgpC8Pn7Z1ryKN3ZhDAf6ALWEXv",
  "key1": "5TAb7M4QmybEdph6ymy5fBpZ8qjywdMpBzUZ7qMMSzWusg1KsrwK5D4TKH2Yt3EE6MxYhUsgzQeW4E4mPvk6nD1G",
  "key2": "4StR5BVttimwDeo2s2eaWcNufRmFaKQvtR8zRfsiDQaUCpGDJRU9gx5EzsSP7w2tCSjh9NLhgoY93G8ziMnCRrjM",
  "key3": "5dy3jJ7FpkEhh1Kvzkv4j7C3tUqh767mgzApfjxYY1NJxqeWzGxCGqLy5Frsi7uLmFZzzZARFEmQpjpiQHtc93Sn",
  "key4": "3ijsrwn617sWuX1MeqMn1dYdphP4WuMZfCu6ewAiP2iQFaaxYFcGDkWsQwfc4UcjNRRNa6YLSHCKVt27ihs4c2Hq",
  "key5": "3ozytAwxyKw9ienHe2EVy4mmun44yMz6W2SgKKziewRacL9ogNa8jyE7jUaBu12kays5KukjeoGBnGKTywUyYXKj",
  "key6": "4aY82c3cZ3csvFTdcj2PTtDvQf9oQG8U5hHS8Us1k8tiMhmaWTch7UiySNLz4wEB36YHSYEYSKkoVRfNSevzktF7",
  "key7": "a3TnBnDTBKPzPEusbzpRr2UFwaFdkVMib3tRA8zQz6yWYqDbHLRv6umjCbHgb3zw6hjuUUxDsPkHU4Ti9z6NXvb",
  "key8": "473iHRzHBDJDBW2EfumqG7Gwh1B3Tcp4TFfJ8Zb8n4ErFjtLnTuzoQg3oekXKq5G5xz6muDBHvFfBBcD2NmANnXf",
  "key9": "URy8QDW5dEpWXdugUhpBfik7GW2uGEdk4zNNa959JAZzBrtL87fdPdRmynFTnmaemEzuSRH6zJ5wbnsXGdU1Uof",
  "key10": "3x1MfQLybu528MVbNEEmiWvWnvEye6AUe5duFexa1PfNidHU7sRdUpTczz3m3xCz9p6BgYgs9HC7HCYN2hRrbJZE",
  "key11": "RtpiaZkCMXZaAYisTRNFAGD2VyAbf5sG5JyzzgBoTCTg792cjbx2ZjzUQy5nDXVQ2PoLiUHWLte2Djt1BwoU4Ax",
  "key12": "ckzxUxyGsyTfBe8BbRUXPebpDfPF1YZd3Jv56bdxBt6fJhC1xy4Gqsenqaxe3Df4eu4ZMCRjMJshwACMKv7xLb1",
  "key13": "2XxuB95zEspBNVuWJN1Fdjp5rfUze5tGLvYuB2wv9AvAz9y3kn3kc2BuBUe3yamSXoJ7gJbCTDzFSVMHje487VCG",
  "key14": "2zpUoHRuo5c5Nv3bGT1PNU1QnDsq7YjZzKhMSeyLumATFM7FdkHQTGFLVkiAGUXgSg2FDGoG3cDwmU7WGoH7V26C",
  "key15": "3nN8MQ5TZZtjresGPVJHE7i3YLyCFqE7vQbsz45DcQVhCAchnoR4fE8KuBrjujvUxcMmEGpaKbLsWRJmmjreQMFd",
  "key16": "62gGcNdamnZ6ZcX7cGFDNcQcAYnP2DPeBy9mKEpJvnUFmnMvtekqc4XeNzwJ3zfufCUT7QTpKLVBgeYWM75n44XQ",
  "key17": "6So43SyCKXrDh7Cbfa28v1DKNbFuCkUAh74niNmqaSdjR4JTB92wBHgXCQmB1RzAAc5VPikQ75tk15ffznMhX85",
  "key18": "YRmHbkDsN4AXPnmWnNdih6iEutUaE1FzSgyDaxyxd2DzsXBYvrKaUs3YFSmct5jn8nYFYeEHGDqrdzZTiDbH9dK",
  "key19": "28AtrCcGdBENG5jg6c77nMFJQeHeziw2VKoZQfEZgDzh218QLaMM8xnwHnVi4gD9xpRvUbpdzNut5vUPvYWUUp64",
  "key20": "53ei6GtFrH9fA8CAXEffFBYAVmwZwEQJPu6JH7Z6axR7PmyWmSa8McEXFmYcH1CrkK6rJQpWhLJmU4XKeGGrdWDA",
  "key21": "2fzTnN7UwAAt9yXh4H3Z21yhrvtJJVBsgb7g63EbGr8AY8PCbBsqJruJmf8ooS3xKbcGMtk6hGf7A9NQGMnVnvc6",
  "key22": "3nWRyWPozFZ76tKfZzqf3g6YQVK53mWAAyajCMtSEcP17Gsz6XxnZooKQ4zVtchv9Vu3u3ypLm7u2qfMWEFR2e3x",
  "key23": "o2FTXcV239ptWv7gSd7aKXkvYd6zaQFaSNTX6sh7VbLfa5PPJQ8G6y79HsmsR6kufGoWw9pDDkGavLSgt9BK1wp",
  "key24": "5iaveGJ6wi1sbbfnS5yvNPNrYpQzH2D5BVj9db9XN1KoMiiHyEwjLodrLqqwy3mNBrxGraH7PzWkNbEWbL4fB88A"
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
