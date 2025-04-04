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
    "3zTs34y8PbHAazhHuJHFsuJHZpKBMATNtrPm6zhX3sCYFypsvNC49be7D19CnvxcmkPx3R7i5Evcc38kW6wS8qPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQXjiMjXGcpU5XLWh9BTHFZiy2THYVQnDBmFFGkeEFPbWLojLkioZaLAWYFNJPNwPRWSx4GW9roWDJss2mUNp2M",
  "key1": "EyjSgLGxvgX7wWf5gYpsBim51LtsDGkHAYow9oSpRWkBWLEZHQbryMNjDJiBEwBxiijc8QUwjScwg23YggMBZnk",
  "key2": "3h5B2dU54pDyhM5hGhsnW4LJFyGU74tJLFuBcMxBh3xdYx9CPYFXPUSf73jJicKzcG6dVSQTWesfB5CjHxyxgaLU",
  "key3": "3UcgdmxwEM8SSm8GYHFFRFn5ptJaoQifi5gdgSLBPAhPGe7nXXr7ZTyb2hgR8JTw4ZVUUKiFG1hhq9Bxv6yiP9Wt",
  "key4": "3QumpyFwTBUEcR93iY2envpk2oomQf8hoCp9yxPomuFUQy7CqAo2LFZupGkGLyxnWxcyJM7mEadVwCQcq9jKou5Q",
  "key5": "32VrhJANNEiJxkNFStSyHuC12zPTF5MmQnCSjWrByU4rvTNw34oWQafZLgaS1rzmNqb6nb5gBvEjHtjpfLhb5Ten",
  "key6": "58u7Biwu5YBG2f1dXhwXJ5RaqRcq3N7vUwoTxegbrCoYp5kJ2Loo38sR6sfSVC5QnxGoBfkkQqDm8tZe4g9wiaMj",
  "key7": "4Rrs6QFJKqMjZVotRY9mnhWijBdD5xr62Uihg3XXLywswUe2sWiHPJ1S8vWyodQfiaKgezMsB21z8XtUqUgBb8FH",
  "key8": "5qmHkbgLnY1JTvL7xxaCh3NzfKKCYusxnZpAFsD76urLkDwabwewWM2nTtfxt81yVQtgn3iXAUmrUPZYu2rYoTrV",
  "key9": "4VqHBBKLK8UK7xkTtyMjGkYU8BD7TuFEK56qidfHE9ruLnGvXhWYsgTKnzGK3wSWYXoxQaam2cGFT7i7kj4Qikmx",
  "key10": "3s92jXfiihpjNnndR5TUJj9uQrHXrprWKPq97YxGwRSinP1RrPzLbvoBim1bEkQ58X6UZ5cgCfXs9KqFGNQLovmW",
  "key11": "21o5HFu4jb3M7uEcSXywwYHDucq8xEShFkdGX6B1dBtn3tGKaNM8fp8b1ekbsQB9Hwm6PYF8wf8N3xXE2gfp7gXo",
  "key12": "vpzGFMJVpbnyhLvWk23RLv3ZGX2CgJHChy8TeU6573Jfzbyhi8A6eSyNPC4k8YxYu8QrTkajC2kyU7QsfcSTWbx",
  "key13": "3Vjqg2TznvV2un6rMRryT23jqTAxxh59nCGRhE3QEEPfH4DPTBUx6tAm6NMX6MWUK2cCgJdJkA68tAfhZ85CuPn1",
  "key14": "4AwEKo7TbHEsRfbNxhPoZEDgMQ2M3UJFaPqL7rqbRf3gbAZvEVL6nipfLG8fDpKzYZBoXRxsBcAypmE368EyucjX",
  "key15": "4rBce5wMFtQHZDo16CQRMkQRxDsmRr5BR3rjPyjcMtiYmNZ25qZbB8Hy3USDYFZATjRnsS8Ek2U7EnqLUewGMYcn",
  "key16": "2TuB7rry82PoVPbhBTdfHfrLRA2BzBRbnfrmm6PsAEHT3BQBBtHuyLptzskB2BKyL3Pw7YzwM22derQZr4oniGvr",
  "key17": "35sf6YBWcWoCujEHV85CKtaA38xjvy6ePMHk9Z1qDzv4mEQzkGyr6Hd3CBHA8Mnv8ohzm3XpsywzMCfbRn1Qjkjc",
  "key18": "3SPyseSUfy2CpkxAPpdjFkaZzYPVNJubkXcHHNgqJytpY36L1Ed7yK7dherhH192H1mFMgFro1wraaMRvABb4Ejy",
  "key19": "3aymcF2rbTijwMxnyrPrELbpwtbypRw3m3k47jSBUxyJgn6mrFotV7VyT5r384r6GK3wCHzQv1pgQEuVTuUsU6F9",
  "key20": "2ZReLTza8BC7S5HNwfjUKstMKo82RYwzueqfk91UFQ4YpAzQp43LoyfTXKCmbrGheYgUFuccSwAZjUqWrmmhN44x",
  "key21": "45PXSEP3f61UCGqu17YWYp5nmAdUuin42oafLuZrXdLQqsa3BLabSXVQWXggcrnXSBunb3FG6ccmDHUqC64vUMic",
  "key22": "5cznGZmLF4rpyLPe42rVMvw1MnTeSkm2gcP2eaf2VqZ8zY6g26Eyk244pzhcESGLr3MNE1NBrz4LqE6f7xh2fVdZ",
  "key23": "3XTriCLq6BtrnzArpDU3SKdp15ry4oeCjYTkMDxqGGbNZARJGqgvza17LKg5HDhbNnPTBi7GKTD6E9xP2gvrzsEP",
  "key24": "56NesZbS3G2BjkGr8rAy6u2KPeijgxTnJbhhprxZFcwGkW1TV72et5HqcvCg6dj3Btp9SX1CXxLQjo7DUJTT1WCN",
  "key25": "f8MXeMfCfLT3ndp3c64akfvwzsKNeFachkzTLixoxk3hdb3J4pCwmnJo69MswGt5wgMCLmwVPrwS1dAycRGjPSY",
  "key26": "5vkoahvgG8LXA6bcAXRUvnLJTqNeqKjLwkWKnGm4GyutVCiREx9E6pUSWEK49xFVWm92CRkGmte4ENPDuNPZB63F",
  "key27": "5dXuWBqbzuw9PR64bTGGADMtpw3M7Srv7t9yDZ7eQXFeXBdmh7txtvdZR6b9SEZtg17QdvqKetf6FUkWA4KhAEww"
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
