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
    "4ADZm2gxppyjTsFFwR4BqboruN97P6VMJsfXz6BcGb439sB8kwPRS9hsmqHNkuv3zkMsTthcYY1TwhPN6e9p9HYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rup33eGqbSJAip7W1S7XCaqbwz5yNZrmP8S4Rht4C1KAJvM1EjEVnZ1KNuMrwVmdcGRAgwHhLgQEL4LSCLHAhwb",
  "key1": "3drMUJgyTmFC1Zc3F2UvLQyK1oe9DwsTq7dyjY4SDN3vuDR2ZMm5TFXktR9KZG9wBr3GQZxYGa6Pir4Spv6WWiJn",
  "key2": "33Ve7vUED2yNft8ThPF6z4oEVneBuzFSSmpSECBp5vSknW6tBaAogJV6Bvv1vGcWtFJ8qjVLTw6g7DpBacM3J5WV",
  "key3": "3Ur3616fycB7e4PEy8gVPFKFmYDtSrmKEygUnZrnambLgSA4daQHcdaL7gdpjzUMprtUDSj6EpYfhdpF5xh5Gou1",
  "key4": "2EyTeNXMDQtaehtSiAQGaT3W3pw8gMNNgQFv43CZ6b1eFuPRnLNKAzmdJNkKRzNCJfyjB6Zj828RZDQLqxLCS52",
  "key5": "2Vw1ugLNeQN4f9irANc8zMFb3VHS1ejTwBHT5agMFxAQmcrYA9BWYwWG6wdNLz2ehGi9YiQ9U4d9NxrycM1A1ErG",
  "key6": "3pmZw5YVubFBDDV8AEqWVuP7uFLQowwywbBtKSY1vVbKGtsatkosbVzp7AwBPnAkriVuDUtFUfXGjEMJE6yeLm2X",
  "key7": "2QvwxifL2j4Ha2Ne98tjTTbNteids7hV5UdcaeH4vYwGtvAPvJSpNyYiBdrncBmX6yXMsMxnfdrP1X2BYEk6EqTo",
  "key8": "5AvZzrQbdsNfPnbrAz6QywjrozoApmRFdiArdEXgCZkN8FUzpZUgyukUnwW1ewYZHjeVjf6PxaVarNcLv4rpPKPs",
  "key9": "55reRFP4B97uNzfsvAZdpVxedBS8wT6oULtaC33SD5yt14NTAZTtJbDpQWUvp2qRAwbCbCQaj5V7mshZQXaaHEk5",
  "key10": "4xzxbXA1aksHcy7UP3uQN9e4CWgaCEofNQv7tBt7mb2gFFDrAKZT2taa138cJposSQvA3h2BLcgrqY2mNB1nMxDA",
  "key11": "2vKfsT2vuvNshGYi125ZyynwnH9VAYL63u4StxNsJMwNL76DPF1Wbi7pQroVbviCPzUkT6CdKcqThpKZCRZkgUTU",
  "key12": "5wyiEz2g3NAjCYbJdCZPTSKYq9kNEm66DRw1BTPnr3mRAYioXo8hmSMoNAr7BFxwKi3XobtKfM7KDUTyAbVV3oph",
  "key13": "5eXSxyyNia3boFDSuroha3SCcuWkkgRgk7Rtddmz2G5WFdQYTGPtZFJrvcKwgnaqq65KZRk143aK2di1kN9DsFTG",
  "key14": "3gixY4UurtkXntv9nr3ZqYBd7dbR8ZAysy2WzYmQytVK3s7je54jDvuvR2aKfcGHdTEsZyY5LozfL9P9Gw4AYvKa",
  "key15": "4XoVPK13BSuXDNSZvpLR9FWyh4aLTjB3pFn2Jbyxs9Sgkw5jwSHCfhKsXYR8xhaqB2Yq1LqQdgFqTBCGWyv9rXgn",
  "key16": "61PJfaPnPTXqzXj8xitfzWLhV5Ucpo2owf2CiSX2JGFcANs4js1LBz2kjzDGHZJVSUwm1NtegWvTL3fdZsBaFxT2",
  "key17": "44HHoVn6ciAWENK2yCdi6zMfjVokQw2vhUL3846pSYNUvaRXMazPUZ2cLdBdYW3Yo5URC9uTkZmq78htiwGKE4TH",
  "key18": "3u4PLLoANg1zXGsXDG3un3cjHy1rRw5j3ZyHwE9tqh1ay2TTH5AqTT5pgye1MtVPdUQoP7sUTHRobBA1cBjwBC12",
  "key19": "5EtW5xpBo4tU9ZzvuvMrrrQD7HbamBa113rmX4i2mZuz2QP85ZGqt1p2bXHu1DGz6LfkG5HXboQQp5fTFwfwByJD",
  "key20": "5qVzKFdbpHv7AtYb3FEdZMpKyTKw1opPnz287wZhHU5Dzd63G8FUxdCH6AELafyJhQDg31UgnMmoV8SRzy7gkmSs",
  "key21": "5UQeKcCGjwKzSQjthLJs5Je79N8dMjoV4yxgyqCVZJrwcVkQFTjkq5fx1mHVVtZ1vEmQWKiix2YajPLmN6uWHJVQ",
  "key22": "4NkZVSXGQZjPSRP3xYeVBhjacfJXvpiMJ4FLtccgFmPVs1EW1B8jBPFpzr3dZti6S9wHaPsvyhG15RBhewvF3EGC",
  "key23": "vaCKYZVUUa23LQ2PL4psBrQa3PueyXt6krhs1sJktBsxqHqsXAjMgK7FnZX4eZSyX63avUovDVPN85dbq4j4g9J",
  "key24": "25QeCKQFpE2dEwMJoBSb55UoZjk89ZbFbHvDysPshgQHvnxKxLqUCFYpK3kdAPUoArdTurh2cNDiAwQRtTEvdGVC",
  "key25": "KR1YdHtJRrPB9BfD3sdDCduo53YzTCYcxcUg97xaan3qDZmW9tdE5mdrSxf1QNd6MPnkMvc7BXs2chjnk33Uex7",
  "key26": "dsaehkePPKJGuSqVJfgFY4kEZPTWZvjHpWc1k2mEetN7Vyc1JH4ZB4gyoazJ9YqgoxoYqs77chCbXT6WVwHpdw8",
  "key27": "3Z4LbGnvjqBH8znfcPnZbxBSRJAVemrFezftgJt7wdEc6yVUFucwszkhBJyki8LoUrin22vASNyq8edZrbTK3VJE",
  "key28": "Emyo33KNauAsZBrXfagnTR6rzS2nKpQbUncRZRW44bv3P3uETRHGaZZjrPDZMbEjRxwMBBDEjduxaQnEQYLSvhG",
  "key29": "4wqxMG4tFosVpsqFXSF2eyT3551UGmPS6Ptn3U4ZZF646JXh9FwDxZyrtjtkyS6fRMPouu56qh2zEt42FQVEiQ1r",
  "key30": "5EEDkFfrjgD9T6HKJTVJPSxynVf4KJoC6GYkomH3A59igHis6vX7DR7Uz735YLEM7gVR81FUygqMMGeMmBZMVgLb"
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
