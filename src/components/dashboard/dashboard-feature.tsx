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
    "3ox4NSA7Hsu5ENHpCjHcCR27KJUkJzsuZTF82FW7VzZu3HsoFaXCLngREmoeNR1UVJUPPWGewzKZDgrFCMcw5Y2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mr5CcASqmh1yGnMxAcZe7YrtkJ5eDY33VR7u6tkYLCwmd9qvSK3TNP1DmnheVeYigAjCDeQ58vnqGNUa3YjGZor",
  "key1": "4bsP8FySZVf7asZzzSU8B1CDCAEUpbnEDSjF5bkoXBvr59o3NNrm24RacLrbQKoLkbYkCTrmjYCwJEEho9Jc5yCm",
  "key2": "QAUbDRJUzvjFuAMPbaRVrgEo5EtRhm57LR7cWiJZzFd55kzVzMCkqL8rSgtRCQMzhf2xDxqBTSzEVgyFtUXZmP9",
  "key3": "p2UCsNxiy575w2A6aEDbAwHxmLA7uY2ckrqonZKf5B7AsBxo1sGpoGoUabPwgrkheG1o5UFvxNaLcP39zT6X5eQ",
  "key4": "5uyrKEaNXKWRETqdsVX4tuj5skwMep3AxttewuMUNQTZWiTjtoQDHWFL9rJRS5yYCKkqN6z3KL95dosdsbHAMj79",
  "key5": "25nkbBkT8MRsXFhMxHULJZNrnLxurP7KSLhdKK3sP53V6Hz3Qbpbrz8nrE1KBLmZEKYTZpMz7JzsjoHVFaffjziW",
  "key6": "3f7n4o6fcT4YYujQNY7qn152ixQD9wQk7fE8ey7YWTw5sjUJKwG3zVyCcZivG2HHZt9wzdyfBcMSE9b9NxFtS9ax",
  "key7": "4d7uVGkKxVHv3qjmYCEtjsQS4QqvPokcWRZnEhRfYpFovGfXoQaTLJyC8BW1hAAJyREDGo5wzTfjGY87nCE2Z6Fj",
  "key8": "4dZynq5k2rDJCAobSohg1fYB431Z8ewQdru9KZGCyNWdHS1wYEhEJ8HTCxGZy3gGZD91AgY1qJMgFh8nU5MxTYFG",
  "key9": "5hsMHhUid9eNtaJdvk7qEdETSyAucDVJ6qYPYZ3oLy6sMhtuYvkANHaCZWW6eZoLXsKtQFdJZ9SxKvfdunPwiaLr",
  "key10": "4mJKZHpKPhQ5Xwb1NrVCRVKoyG2jY9U4Z23gcDE7rSvSoFdpfQwh77WAPZZHM7JUBB491547L8LcCwdjNhKg8GUV",
  "key11": "53Steka5ktN2T91cfKQ3ZW7zQdBGtXndgRQvWYiwhR5ZSFv5nhB1q4mH7QPSxsccbKWfXJJKuwiBsNoC2Ym34fa4",
  "key12": "ATdgKRhm4BQvG61CfzMLtfGVjvuHHFnsnHm8nY2QEEGNca5Ftr2t6mg8caGMhX5DhkRe3bYTebJDeVqHxkXr5WC",
  "key13": "38r1WdA8rDCHuiDhgnivihoJqeQvEoR2Gnykv9YGnSsCkUKotkS4p83KcDUSra3s6g2AZA4TnhEovK7h2tz63Dvq",
  "key14": "4xkNQd3rZnoLJUDrDTCebdpvp6FieEL2KKUB7quFAfzUvh139KzFLvxnL9yDq5btHJBq7fjtTGLyvdwUTNkuMnJf",
  "key15": "42CkzGS2GcCunDusKvjzmnYanCM4GAmFaFapSGXNTqrUNvNZK27yAG72NiE1gcufRWBaGEifC2j3aYRGYZ8KtBSx",
  "key16": "3WKmqGYniC9c8H6sSt1ek1A25i7QQKxrhXyDoyhDX8wuVwb8EkaFf4yZrwAX1xJaYoVHZnuxpNqBFwiBgPQF1T7A",
  "key17": "5eXiZMCa96ZabEZL6YGVSnMMUvBFQb4BzUavswT6hfuEEMykYVYVbrfC6HLL89TFrMySo8YVM4UB2FZzDBueNgze",
  "key18": "4R7Y23NTpMypvHykdTvXjDJ4fiCUx1EwFjb2V3cvNSj9sBDiwKE88sobuBydMYzJTCk8gs3aZBx5SPL9X4Tevbph",
  "key19": "NuNfQnHHfTefsYwSaDaJhSEbAfabGUNWKrYcDqGzZ8XdNPnNt2tPMnL1iVNcDHFJtKNvcs2HsZKfSroCkVGHhm4",
  "key20": "6RTchAffXW2Vsb8YCeTCjMUAVyDYgM6AcsDimCScXU2q9v2rqmGv3KUEj3c1DppyGQ6M4GhZJogTEkpGR1tto6Z",
  "key21": "4XrB6swxxwW1NyB214RkdSjebZKLdKDxamVCiNL6RWCvADM8AF3TXfgK4cRoSHjFGeCW9Ld1QxFY9yD3Uh2g33uK",
  "key22": "2kp3AJ6skAeZzcdYBPSDWkS3paBEuJ2snnNeU8iabUBzuxFUF8kA5F17JUSmjcAwrCcCn8FbrKPmeVuZRMHKdSYd",
  "key23": "32cCkQHkh8tkLCEZy1vxSDXk5ZhWnKeVs7PoXEbWWLypLjKqgQgMFpHzYnP8nChvhKGpwYjPHNQMjFGPAXP35R2r",
  "key24": "5YaKrEaWJ9nLFjMRYrBVrX2bjQae2vrJpGifssM2hnHCJyh1nH6rtsZWs35ssQHeAwJ25AhpV2CeHC1ZV1LfwiR4",
  "key25": "3tmyaHJSNo46rj8a58pEwr3A7WFBDwW17mrMuVcpzfUx9Us5zaFEDDeiC1ZzWXh5onNdBtFhbzfVopDNzgoiZcMH",
  "key26": "2czc8EA5v6eGLggXGVNHDwDjH6MjDWQZyZSZBxawdgsaMEVhqEBUraS7Pd5bQqtNdNcdqnUgKBwhFhdSFqCAtL4C",
  "key27": "3E9656NxpqM2tEPUTVk7vUF8gHbYcSEGn7rKQR6HZwE7oFLaiXnb7ooisQDyhpg9q26FBoTjXykedGasbCUX5PMq"
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
