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
    "5Dbq5aVMd22sDnZXkzfW38BZa8K9Y5B3X7E4JUS7kdvS1yuHt4h4CQvdrFtr4H54jdtvmQwd1jbqLJVFn2BRy8yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aa6BeA4FvzRHwaWDtyXgMxTUMcaTiZgkjhVNB4Ys7BGR1fDRbJtfYUJFp31VKqQKafx9AGnfkVmaMFZjApoeAZn",
  "key1": "25hvTwCjzVoYEgEHWFCyj3Heu1htAQGwQZjBgwKKbV57nrfrbA5PYvs8B7tmAkcNRQJX5YYHMYvFTrJTYFtsLWjJ",
  "key2": "2u7FECMwZ1vkUmkeN1UTxctd3We1kDRPewRAky2HfAXU7QRnE4tgnmPen4BrLuDSs7XZFj5cYtW7JEritneqsZ9a",
  "key3": "52hSk73CYkGmJgpySyfEx1qSR5itF2Z8NHncNiA3EJEv1FEzEd6rQZYimWP7kDPGec8c5fJYwXrT96MUAHUcnVLB",
  "key4": "2SfVeAidttHQMJMurnJM7RYnUUHuR433vNRKqqnd2vba91jUCmECFwW1GsDNNgYrX6DB2EKGdor4nQsHaW7WBucN",
  "key5": "3N6E3Bof51SNFrup4bGZTsq3JhUwJikUu3h8GFpW8YaeaM7uVPWXjbpM3VHdbdw7iowtE3RQ4cimCtFLmWZZgcoU",
  "key6": "3UcAnJu5x3nY47AwozMxNQf9k2k6Qz9F8ok3APrENK2XRDt3WQFK6Q7NFFc6EpD2LmT3j6YExndfR2Lxn8jjTdfU",
  "key7": "4us3KLANDJQsC5tu5HhV3Wy8GsNjemtFbNEUtJvFyn5WhogYwAkcfs32sarTs53bWnvSGvTjg19LNB9D9ye5HLtT",
  "key8": "2BvoEgLZ9jAxQ7MN9d4m9PwoduBdjCZ9xVfSJoPi7jYMViC6w9uv8hPcb8HKjcECFpUbfnpHZgNs8dAXuGYhkto3",
  "key9": "2LCZA5gZiViszktXMzFYhut4o5tCiiohcEwUQiX51PtHBcFwZtDJQJKHs1pLAeonStLQpvx5oGLH24BxLxAtbEod",
  "key10": "4VHP7usrynds17rkn9cLZjzUjLsnvrX3HE1HEp1m9YHFc2a849ZirY9JanHsfYwLChpZQihifxjFerGSGD8vtJyN",
  "key11": "2xcYGBhUNbCBDY85vdPakqnDg5phviKtKvBforj1BtFAbThNPHYUFZD2EBpX4MjnkxFScpm64QESJCD1q2G2Ra4A",
  "key12": "3X3giDCs7aaXcb9FQwSFjWZ17k4e5UPzvaf4cNFdsmN8Bho8wsny11pM6hT55eyEk11QQqRBe4hzo7dkf5s2BgRd",
  "key13": "3cttVuQwZeQQSrhyPbgABmMPsm1Q7vbaMq7tzBtiRYgEGQYSXs8bpLF2kgzSMLYQVL3jie4KqCVP7XuoLRTc5YpW",
  "key14": "4kSHRVipKXTFxQTam1X5x5a5uVCBiMN6S515xkPzAiZo5Be7u1sLUBbgFmWMGhTn7o6iNDG35R5a1ocNL4BmPNEk",
  "key15": "5WQeNBeXyoNd17Lbc2TvxsW4SA5KoNh7X7KS3Lx8ior1nJermu2JVppJUPtUcUWp65DxNPy3WV1wjzLsRQ3og6jH",
  "key16": "58Fxre2WKpkGzkJxtEWfPeR52hKESV7PnrNMNATmsvmgCwXW611Xnx2kdEgWfe4Gow73Cc9dMWEZatSsTuEJuCMM",
  "key17": "2WSENtimqzHxqd7mhtKT18pCZcm7fHLyvXDU2wK848PZ4HURpGqMJB16haQffPXUfjQSXwr6oY6LyJrY7C9kiivD",
  "key18": "2amcsVsrZtQbpbYSpWcj4AGiC9Fx6S3czHs1nkK8pXRaTbQQwxisPNNyt4wjBaA9ivSaaTTqLymYevfR7Q34RfnN",
  "key19": "2HVUgatAkjE997Ef6pMTJ53cGmUpdzSAnXxXYV3mFFm54hg4JCCgCYPJ8joAYTRMnnP6XvcQbx2vm7hxQhFCzPLh",
  "key20": "2fDKyKNY6jjpZeLuZ8XLnvxNxzmGpGvAbRBdR4WMdV6W9EbdjqFiiGAb9qtYbrCnB96xFpmS5Z6jVmWbndDBDstx",
  "key21": "VLfDztSU5KmyXp4AAjPgkfJiiDcHdzTFhBjFtgyKVhZiELu6je2jWUJ1uxMbS1scEKyPQYtCCyYj8nc9ZmYidVA",
  "key22": "5LkeShLJU4V8MRsqPTs4V9THCKs4uXz9ngmKZScAvenVX3jsfWs2RMHyggrCujsb9e8sKeewsjkjWW8jUbYUQAfP",
  "key23": "3Usn5Kp7kgNMWfNpnaBGDZg87nAeFwqLNSRfLYKtk2mRV6kVTZ7JFcx6NtR9boaMi7UBgcXMuWdB9NHzPxdyzZNZ",
  "key24": "5C5E45cfuwCuccTJ9a7rCu6gU3Si9FsDqUkhsJt3nn9tTYu6J8CbpKhEuHcFMfqHQUMFNmgi612Dx7WvbgRQFDBe"
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
