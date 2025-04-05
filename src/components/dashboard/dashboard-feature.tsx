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
    "46exXNEUD14AyCjZJR937knP8gXEc8yNJq5Ud5UaiEi3A5AKakCVr5x2xGuoajFWzxXZAZwEvri8vCFUceg7JKm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CgEde3T7MtKZCgcqLUSa4fwPiWx9jV6XvubZetdD5GnNxquz69moJmn6E9DUGnVEKytcdZzdiodBXZU89CTVJ3Q",
  "key1": "4BPjGkJJPE36f5cHS89h79zLACjp6VphDM4SSgt4ejLJ5WMrFfStfvE5ZdyiYbyGri9HuG1xUfnPPDaUpUiFRnho",
  "key2": "YUrqhz25iFzhWC4yKkHwMQ1FsPkwiJYs1B8MrPGXDp8YwF5N2eSJZLgNTCtQcGdQkHyqHDmuNYVN54HdVDP3uw9",
  "key3": "4VpUZJE4KmHmYpRG8tE7QesYwwARjL7oPmv1ExsNTurChQ7LD4DVJuXGVBCjri26LiBxYAY5MEWqmo392vo7NkAb",
  "key4": "39tT2meNeNf2Hz39cDeWeDK3wzFgkyhV8xZh3DtCX5F8MZNzbEfxYHM3GoL8tCZm35BjVHHaHDEZxRFQhYdsZTQQ",
  "key5": "4NuCPX1HiJjbhPxEKM9jsWk7T6yRabTTSL5B6PQJR8CJS4nALHu1uuwdFn5ZZ5Rmu6fAvjG8FEagtyip8SL6yzXV",
  "key6": "3KHY6kd9d5FkgTByfwZjCGsyQ5Y5mFtzqWqnhFNrfXkY19wBa7JXDwsJrw3H2Zk4qo5H84DB5LbMujwBMEqHJP4F",
  "key7": "41D1Z9XR7n8V8Zu3BXkpu4zfT1DMGPZNpW9yEAweZfr1LKCtnuUN1JyJeHYLgVe2ovRV2SccRp6pWXUipsBXnhaP",
  "key8": "4DDbWeiBjgQeSRer5S3UP4tJbDjtryLHQU1SvpWAQR2Qmd3Bsj4nmSoBNCGoxZLF4ije1EpBbRkrQXyvqRzUQJNy",
  "key9": "2WQ5UKzttq7PSFFJWBTccDutUNUATqTgwzau9amkuP5qx2MEEGtFTq21Jh4mybcFn5YNxHW3Kkjakc2Sca1qc1Sz",
  "key10": "3SgPLbtWQKDyPBTh5Y1aYMMgBxegPtH8UgFdD8rmqpyVvtFUh6bzcigcEEZAd1zo6fb7MmKvhYiAWxVTKyws2BPH",
  "key11": "GAoxC3u6vfkRLbShYATzVgf7ozi4xLWm1py7bPyDXRcrjyiMEaUnmYJ8Jhivm4figKyFCgeCWjLJU5ph8HsQYr7",
  "key12": "GAnUKLEGyjdE5RpR8ro95pYkPVGhko6nya1AWgjsNh6ktZmQpvdRaUouQWAWn5cb83qEBytt5ukX63vtr5e9wqX",
  "key13": "4xnLkk6oE465UvsJvjjzzvUzhXME5iCdF8iS5otoM4VAKniBcWLuWjzm2N9QugFf7Y2kkxD2uQMgfrYn2owvaK9e",
  "key14": "3rYBG6PGF9YPpQhzKvZ41Vrwcj8DSUWy7kALhmkpBLh2sZ4TTJJwExVcQgV5L9zUxtrYizHzek6u15FALE2zhuzz",
  "key15": "rU5yqZuJag11Yh3t1eqzTt6KqrxUFKgTakkdzNpTUF2ASUMP4GJd83Cq4TBZtLdpmsKdPxZdR4v3pTdi91iXeLk",
  "key16": "3mPMrS3EvdYPRB1MsdWCRbeCbx2Je1aMWktGgFhYtKrdRGPhv3XooETdZAaFieMJHYx2LDc3qhzx7CBcWe3KueJm",
  "key17": "2E39ypsRxeNLNvEWqcRzVJNmjMx3zhqnGn9MemcwYVWVSH8AD18Qwefrd3LCDF9Uoqtt9kncQFZ5QoQbSrqYy1Lv",
  "key18": "4jBuSCBtCuPPTS8758ZwfkkEcW1YHMfMNb8ZJMNxQGuXvHmAnKBmJShKhJCNBmdRJ7zoybVK37EWLTLgtUGqUMAN",
  "key19": "44HeUCQo6kukDCiErEutRHU57z5vHzpKkawLSTtXQswiTcAk3vJt4qTNe3hv8UUJhv8frUkr1wDqoUw4CieYUmNL",
  "key20": "4iVrpseZNAUVJKbVFYwDdW4DYZN797Ho9uKaB9i7H61k8T8mynt3LRvVJ6z2juxF87GEE8bxegzMN9x2TeQZss63",
  "key21": "2S8iTHH8XauGrpBmkPgXRN4TYuXjGoXLJTsVbxiqzWxTeA5kKby6CwcRTzo6W4iMo8CvG8y523AgNrVvyJDwbrr8",
  "key22": "r55chGNPPF8aVn8m7JgiggL7VLUcmJQKS97q4cYJXKKpZrkW15PvoRFBYrYf8EtRb9fb8GsLVQECHe2yhY2qFaf",
  "key23": "57VNXxGo3XudsXqz3SicABmuLD52GiFc95Y9Tgm6HcRef81ZTsUm4TsSbTHxT6tC89SyWzfxuvgTpMgdGmwVRGxi",
  "key24": "2P7vKBo4tyBVgjmoYfXosSzovxsgoao5ZuitbsfMgjd3Jyy5o1B4oyHQZDKF3uZ9KZdnZZptZSYV71FYJCHsMH9K",
  "key25": "4bBfwDpJpp7tgXPdBz5ABkDm6qrYhGtDUD7uG7rbhv84R34FTjVC4982WxT38uRamT465YdDg7wRkkKazBTj359j"
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
