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
    "3uHiWNrCUL5kwv7ddgb9GyY464Tc3Kmz5pugEeUYjTaPP9yhgMM7om8dAUWaki1WLG6tHY1SDRsPt7T6etGaWs76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pDt8Jyop956sLh2XgBCsQ6h9AMjbtUzwEH1giso14ATKZpHz1hWeKy3Z9Tt3j9UMpFNmMnbnqg1gQzhykB5qUYe",
  "key1": "3d2C99kxZmfW2qxApcrAp9o2ZQ9TVnjSmTk8DZDP8tA87whX5ywermDzo6PensM7LUHbaAhnADtX5V7uTbderR3y",
  "key2": "3BjmqUyyFQCYZJaUZyEoc7TKHudUGye4GE6PCAZvQF7CSLMtGcViCMhvxwcq7YAJ3rBGTmYmEYsRrv2E5D74bH96",
  "key3": "5ReGu14ApszYY7j5178cqACrVF4ZBB61LErTyKzgxiUsTvGm3PcfVpZcjkZa4dZU1zrp24DgnYv5r91CUKKUMQ7B",
  "key4": "3mT7tK6ZooGyMbNZqjdvWbmbU5yqE2Z7khJWqq9vELnncYySz6aUXDtx3zr49NyeSRySk33ZAHJKPNybBvv9F3wr",
  "key5": "2r8iZQDyCUk2Ss3LhweR6cirJPCw1QZELpuSY7iR8s4aD6ZwQnSMR9r2YD4SLULYqL4dKArNp8k5WFU2xQ5N4bnQ",
  "key6": "54modSKLxLDZsY1aByLBnE6pGdVfE34EYKekGNsuHLoGkXWMRJwGtsB7sCp4A142Qrs69DXswvAGJiJUxazKJCHR",
  "key7": "43kNaWyDzaxcurZ6PDZZTpcfEzqH8mSkMaz1EqK8MXZPFeh8RcBCY2FZ9khfZT41aovV3hX3ajcBHrj8368kYr3j",
  "key8": "23E1fe2dRmtG2iDmE73B5oVcR3MHXgoESY1yN2oph3KUBng3MGJfqLjVtjScMDwAzp742j5rNf2vSoVzuDRdwSjq",
  "key9": "4tzRWVhtbu3b2vGViyukM9W4KmZRXpvve4L2ud37pgqyrogtSUzfv8v89nbCAawndoAdq1N5tozyNxemqJXuEyWx",
  "key10": "3TScqeYcXS4Ps5Q5odq7KRJvmfx2F6Km5dyLd2H5jAkXk2eU8BjXLeh3FKLWsZHCQBDzYXuNcRFYVCFvvu6PxhB5",
  "key11": "RNVzMgNNp6qJQPDDM2Z6Dcs3d5gkXnaAMXKxwvdfLFsS2FZ1q2arNw9nBHcNhMvEgknAfS4pQbpgMPCDH25NwRz",
  "key12": "5rKgB5USxumXWfJ6Pga1VnjXw51vLCJ3DykHtqdPqvAuUMuiFVAZ2AQwwbqvatcrPMUS9Tevjiiis2SRELB9yF2J",
  "key13": "4MK91JZ7YKQeyeoDN6sdo7ivaVSgnDjzhHXAxPeke2Zf8XUuRrq7jGUugz72Mr3J57wvX2GEC5MJg6GhUUBRVPHy",
  "key14": "4LnG7p4TD5FvVWTwSBdZWvmT4JmgcWGmSbVEg65eL6ixDdi4Dv73bF3t6g7BkwuF8Mp52MrBnMMuwwaUDcNwHMzL",
  "key15": "5msHZAXrfc5ZmW3SPaLv2yFnuAoYBbqaa2aCREn7gXAgDcmG3WrRNhnHKa6zVUkAD4eAXqTUuaYWWEJ4E7Y6Gori",
  "key16": "2s6dNgbY9RjnJLEkfGd92tcEoyJgRuc5KZX1FyAGf3rAdEZrdnSD15NWAYYEmHkw9gqUayXib6mJhnKZ2v7Ju2Ec",
  "key17": "3sn7e6Fk7y5nhhvMh683rRYSeikbXuUXXjNqdKACWrpPc5CePtCi3fRt6G4nTAKo8P9HdVpGNa43rRgv8XZVZL8H",
  "key18": "2VEaVXy5JdyF1PNmnQkEJxoxiNNCnoEyAZV5goKJgCj82AdbCkmchWsf7ZbDJLWFd2bvGqXkfFra2ruEPA1tY75",
  "key19": "3QTAofmTMm1VxPSs9njqBpQ1fMjUowuvYZCUQ8ZxVPhNfAqtfds7JBmh5GTZuMmmUtoN4yNDZvtPxauaewjt4kZE",
  "key20": "3EDGkamfLmpFWa26oXgeMGWcoftRuVn4q7BPd9fDKayyJrZR1CyYCfYgh5qy1YWeJsqo2eaPx5MSCR3J6EABwF3t",
  "key21": "65yx9zKYP7wbk1zCvBs7CUWBkjDcuy1w2oc1Ab5aBeHkJzeA1K7fkcXdadYKZwKSWih9dpp3x5yE4gNk3kTH9hKs",
  "key22": "ju97Ef7yPJzt7uNx5DvHkhnQEDLZha7Ze9D9rxZ3PcvHVM6sCwXGnajf7w9nN9eajchXVfpQFv5tBQGhwiKQk34",
  "key23": "42n1WCBa1Qzqj8jkUU5AsYWEQ8WTHFyCYXXhjEvRtw6jdbrzvdRWqDf5MFfzLGVa9PzdVbfxjNw341Puvnmgmo8F",
  "key24": "595gRqY69XtvT5H4fx9UXhG6NhvwDgu8Va7n9i1oaUwSnCP4J28t4qBniyDspKSL33axS8Se2iQimqEc5QhqQBZr",
  "key25": "3sybiay22L4oVv85uF39xR1Q49L5x4dVsrpWZDQjFzPKwNGXwA1fJmae7631n3V2CPjtyH8xgq9GpZP7G6v7y8Z5",
  "key26": "FhgkYMcdrqNuGDmLuNh5HG9GwW8KexkLQAbL57JiUS8mLscFVdrD7BNdgCWt6FSYK7ibtS4oWwkuCCNCqEJcdgr",
  "key27": "2hcBwE3xQgMHuRbM6nK7MC26GtDHALDeynvqxMWA31ojJQPzEkgY2kRZXAb8CJeEn5fzYXak3fNQ8Zh7ES5HV6H5",
  "key28": "PfjUxwZ3oqjkHHmzsbnVfMV7z7iqvHpbSUS3kgBjLiYJ1n3LWcEQZFZGAUh1RoxhmZrdaY8XXuGzfuX7xh9zXbg",
  "key29": "fQSXuQkdYpJMxkA9pqCUM67yM9kpzHgygk8sohpra4qSBDCeUyLBC9TdHUq4aGM1thp2bxjLPzm74zZuAiyMhuv"
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
