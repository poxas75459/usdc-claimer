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
    "oTByur2CKshTMkwvmRAYeMvX6GPX6XQyPi1YWsk2JzVZGuvd862Nt9XPRDmnwvzkyr5bpjMWsx1Yz5QCiB8G7QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Yz8BhqfA2sV9GUvameDDdf2QNGXLqob871thaKhiE4TKMjy4cd3A6SFSZFjUfWhvhB951uLXPDgZhNWEsB6VQ2",
  "key1": "65dqzt96GSUHxP3WUaE2KqKfmkfFZUbyD6Z6awpwWcPUD5JCZejxY5oJf1qRSsBDVcGsgu69k8VngPZf7Zg14pai",
  "key2": "5MGpSK9KRxiUxKatE2eS79tapQzg45X4q9Z1xYQD7yUqF5wrEa8c73irYBd6cnA2bVYR3VKDDPWhDFjWpLE5jThL",
  "key3": "4toD7bao5VtutVNuXbDoZf7kzBNkAwRPjQv1Ppj4c4svq4HCEk72shcksHLZK4ABLhmiA92FUu7jpw5eNrQQnWmm",
  "key4": "35bf8v2yMMgkV7dRVT8ZjpfKMyPj6zLK7gDSQQWhdSY8rVzqdxk3RKZUoREijakESTPUsn2aCZYPkqgkBP3CwcGZ",
  "key5": "2L96zXEyCuHvJtzCgvGEbDCpSuF26AcyHz3LyNrEZDQc6cgj8SrxHSKhh8oPeYZ2YsYsdhHBu2MuTWMonfq1Ddgv",
  "key6": "2qg4QKb24MZEGvQUZaXLbQtZeZWrZpNyvqvgAbxMZf6xxd14mtmqwraNCXKmh2rQXUxMBiXU3Zs2CkQrN4BtJgzu",
  "key7": "4cahdqdxVVPAx6DxpvfK5mzxHm4bAPRdzJtpfvBVsiArxuyKYUUdZoTrYmzpgpUwHcRvQNM34TYj7yXoNiZLH9jR",
  "key8": "5FQRiaAFpKbZHYYV991vp8G48mjBe4cjaK1gxAmvmzymNoiagBoSSvqsdFFwUaX9GFg6P2EzKZCVC4y3vhXzGSHM",
  "key9": "2Ewkie4QUoiJgmohgfr49thJjzuXWFMpc2ezyxNbpouihNGH3YFvSnZfad6R3N18BJknDeV8k7uXQiBLbgBgeidg",
  "key10": "26dtn5JxrAhAbHPyahcc1UkYium7S2PRpdfi8T8ddqiQsevX3v5yRmekRnvfV5WgWXevXBc6WnbwmsDnqxJTva2o",
  "key11": "62VfsfmixkMNdkPxuQAB5WozNYS3rM81n3xekEfRE1dAAn2aWpL36g57qEJ3HQDePA3Eb8hgHLsFHjTpgkgh7cnP",
  "key12": "41aBbMHmcB4N9FyQN7PAnNEd5MYFbQaiuqVBWiGVaL1Davo1Gk6HadhsynNfSH6YJt31ACcsq6C5rSinWCdC2BcV",
  "key13": "LwfwHFU362vPHdjEuefA4bineYwAV9KmpGteo77grAJJDBYhgnaSt9gUinBK2Kzv2HsgrCNi4BvXRyL6d9j16or",
  "key14": "3NLVGjM4ZSbW7LUgB1hk1sdkexQunYBxQWFKjPPJBZyf2npGdpaJfeHsw291bAoyNQvCaNsgfEzQ33WaAi6ayJ13",
  "key15": "2kyAhXrUaNZZWLWfwWHTxqwySZpSQ2FjRvWKh4BU3MUSYjdGMAPs9okdTK3yoH6DMvAbgmgoK6xhzf1bePfQzNMq",
  "key16": "65wGZ1GGoegDQQVNXuoHRDGXP6VsYwVbVinHxULLqe5hzP4r1fRecRG4zidQtJbZnWvxfHoA6Tj7VLstGUMhM4Sp",
  "key17": "59Twws4akojQuGRfu2afZiHPKiTQnYzJqCK649o68nwj42vGczT1dfafFf18ZN8miSm8zTUJKdLgYpVgDkwitGzF",
  "key18": "2RDUbNv4W7u9xqwsYegSmvWw2wPLtU7w9Unm8gkxHHjgW7VVfGMAZjypUGt74EgkqGLx5H1Xvb8Jfvj2WGgCLF6Q",
  "key19": "4hUyp9Zp7G4J8bumhC3wr3jDHNbc4rJ71xN9xGDq7LNxGobSm5X29aUCVQ9FKQKjpzpGD1uMKvyS3Zq9g96vjUVy",
  "key20": "5nuba7ewxXBrwd55DjW6k23J6U4pnTGnisR6vdVuQsYcWxtDzBXSaWFYzp6SpZTEAPquJs6ngV5aFx5ZzbD7RPzS",
  "key21": "2K28x1tzNS8jfaFKWZYU8wWWyfBjCKectfSaGC4E8oU8JCWKj4sutDcn8gUDz6xcpvpAZxVJ14EfSZSq1HtPNk9s",
  "key22": "q1nYMbrzWv6mX3qMBN4Ajm3VZwBLtWuog28TTRcsVAJNXpPmiQ5mbUUHCGGuQqCRuSGH5to2nVUD4TDjSpFcJRM",
  "key23": "3XPBfNvxe8t2r6BdT8edxCWDYoSgj4rF9EGMWPKMHaF8RaRicsMZSyT9Uf5dhmQSMzeLpVKiVtACa18Vx5bc6krp",
  "key24": "2YZuBh61dytKg2aDm2J8r1cxdS1hBoob7kjkeYtMzJGdjDpeQAtYGyB3Q95d3e3WBrpSAhDerJWqx1MBsokiB3ap",
  "key25": "uwn8o5Q6DTAeaEqD7Fd5qFDnu3SbgB9d3tw7BZdauKxJNCZT49nbSXGozZGgiHQv57bYpPvYuMH5jsG4AMxUvh9"
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
