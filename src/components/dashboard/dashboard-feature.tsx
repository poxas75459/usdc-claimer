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
    "qhBZQsS9D6d3YBecccFgog6X7noKcwLF7HjqcqGbfZDPxCrjyJAFoKUNRJMe8y2VxqUSB9p7dj1BXxC2CGKFc4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d9K5G7mMdKhUKN7DiYKVV2FjsCkH8LHEPqnCv6gB2P24ugkSWw8AdxkKs8W1vXd6YbXSHEdBPtPAo8wGyemYFUN",
  "key1": "5aokx9wWoLUYDBFhMmvxzgwBy8Xrfb4aAcypUUUwPitA4bo9zg69RY2LH68jN7pZoKn9V18HRN1WEy3T543strpW",
  "key2": "eZSxa9kUvxVoLZdba9QHL9cz24Q4NqneGT91HhL1KUAXF8GMVrHrmRj9qJV7mS4ZvexRUFdxYLc1LvzxaBqq158",
  "key3": "qfQrQK5kNNQqj6k5tKyZDzPuG9Ket1BpfiHpSU2HDEKEcU8XS9NNsJY6miNzTeHEkL4FyqpFXY7Xi7JzQpq8Z5d",
  "key4": "5S6moY6DPAQSXWZNWasMGzhtXGPP8gHjDZvw48UnzrcaAYkN8mq8dFJ81RTE4SoNLVsxJV8s3MEw3R9tqvq5K13V",
  "key5": "5iz5XbqPwBA2rFsFHZ9AgRpqysBFJV2RMHNzj6F6nwG8ehaBunP2qK3UafKA5opCjhoBxZE7SsJxi5DB1MJ9Kjc5",
  "key6": "4B6dUwxzCdKgYSMEBcSJdBXjkavuzcys1eAJJqwETsRBbyNdimPCr5oxFaRVH2GY5aU9kWeokuVDf9Hs8Aoc9aDh",
  "key7": "4xDk5VzFancCmfcaXhxiQeeZP9ZkHX6GAWJJWc49ABLFL9LR4fsr5BWTgdk9qe63oo3a6VVAxS3gQqQdxjn9UvV8",
  "key8": "4pxZAVhWFa39MAo2zcMNaSAu1AdJB5MwBCoFWtVEaAoNa9TsX9rDQz9wLYMmfxYXzTMYBREnDDmWrte4eugSTPMj",
  "key9": "3bwpEe4ZgB1sRrXbqWXDxKAeU39VPWmNStyn5x9LsVuA3UagkTUKivN4xs5EazAHB61CuWeabpMnTfwwfn2rBLtc",
  "key10": "2QwNRKTXGfZRcJVbxaJCNbKghqpSTvydcdwRSzbashKXLvbvCX6TnY9NgY6a7zY7WLkai4eo7PgERZJJUUoAtYRW",
  "key11": "37gDKCcXyWSzNuGbHWZscawSoPqBCpVEy6E1XX7jgcH8XXfTMqjip1CgiJVixCobp9j6sXSduTvZ39cEMi5s58Uz",
  "key12": "3Sgug5GuZy5WjihPkwzvcuMyryNKvjGcgQkixhH5p9savS6h1MBVjWPf4FkUqeSMLvonzcmhW5qffh7Tk736xNm4",
  "key13": "46aURehELKruUQ2waXaNDivae2BgxNRNcVDEXrLHArdwY733qUxamRn26d4Cv2qKY48AfzLNY5q1vMsPhMtNQBt7",
  "key14": "3Ln88R2vCyJ2oTTDgVcBH7GgjjpiUFoeTMrMgoCFERU6Yqs9ExErLATt3DF9oY7f1imhspDnvcUa8UwZYg7kWrM4",
  "key15": "4dDhMvpjySdNfQtgEMDVfDir7GqG6FpaG1uHXnrL5pKJ6rq5iV3UbbSXDwbUieZXT7w3HMnUHUQen77rWaW9FG1n",
  "key16": "53XmeMQeha5EPoALX6bAbhvUsp4xRyecK25jWWzihc3QAQbdWoaiWJLKoXQDjdDsv5UsxuKcpNEWoSu35PENSbWc",
  "key17": "5baqWRMmn6htdKe35RcNsjryVYTU9UAF6Hdj9eQavDN4WM7CKgpb6LM6rkLhqDQysoDE9Lp4cugwyLEx3HTdfYB1",
  "key18": "54vhEyGmff6k2VDrVFSAmnGnXBHP29tZfx6n2vST94iJsYCav35JGXMwj2rYTsjEkxXH1HyLzPnXriE6AousBYLK",
  "key19": "5AZVcRXfiArmgRxMun9SggWV8PqT7NCL6QVE875HjTzNr95vNhfvDq4pjzfNHxU4csnp96JdFvm8UUgR8XhVu316",
  "key20": "461b1XkVhQXPCU1kUkaKVmFWpsVGgoy7czc9VS8gJED8b77J3LLZFrkzmkYn1t9nB9CHztigezvWm7BKkhECGrmu",
  "key21": "3r7hrc7LCDQsnVuLjkREj2WmgAW1neV8kgrH1sWrdJag1iSr9kXddwH9fuWC2DsHAwzQjryUy9f2PXsAny2wbCW8",
  "key22": "4tPfUtqTQSMrS1ErZpAdvENYZVzP19w8qasdnyVJ1w5dhgaN2bQYVYvLxbg116yrT2VxUwSwdPnRf47CNHwT7pKv",
  "key23": "2R9QjSW9JWhP7fBYNwXdqvonMVSuwvMA4exdrkeuKTJqPA42uqAB5X8JNWrcBQvKRgBZZGooHeQhrThqy7RZ6vCY",
  "key24": "3ETvhCa3zMPr3LVNJKXJRqEqr5GDPYvdBcA7KQKVRwVWKURMXZqrDeFmUSfm315a125AZtkRVgGq26HwqFPbNb93",
  "key25": "45Ee73yRy5Dnsgtod68S8MpW8s57mvU5pay8KcvLRucDR7ESB59YVArVqbiyh1PhCdKk4gDeVLe8abmjrjNVp9Br",
  "key26": "3us1JwyEwVi1EH7PCEpoa1NVS6HHw1ZdLSSLbTjECX3Yia1SP2sALgSHmoJVr2YUm1M39HtmcKE7emsA6q41aeqF",
  "key27": "XSMt2VUteddLDXbHbnzkR8CCtmUxxHhTZWefKQYApezCwt1hbrCZJpBhNv3LusLDbSLZV5gZX6FUDaBzd8DFmwy",
  "key28": "45R4TZg3gP4jrkT3ZmkFesj6AKE2wsoK5HmGKRB4dDmtpyH3oYj3y7UsGNPkyKEYo3kZWmhdKDSRMab79G4Bssdg",
  "key29": "YeB2WLcEbDupTvJf1mXhMF6ciDarWhQtKgonPMc7or26B7eoECSNdV7r6yDfQSFyJ6ejivBSGtHJj8WVtJcvLyZ",
  "key30": "3EnykkR3GhrTk3jb5J24h7gXwRyHcfSN7vbrnWS7rXthC1uZujKXWw6vYSwDJZjNupsHd8b31qoYNk3Bhfw77SMq",
  "key31": "241yquxsSqFTSPfLynaQipfu8LDL1nvUtYCEWCN8YHteVqWkgRBrHdSnu7crPcZqmTvw7b6oevvWQU5gYce9mgcv",
  "key32": "4kQ2GyXxFkHW2GYyVZjve9ZdetiB9mJhwGMREAo5iWFP7qmKPHy9KfL6wfqxmD9ZdZthreLAYUFeFybJFtMNBmN1",
  "key33": "29yg2yvfTEQaXyLpk9apg2tVnvq1xJXkR8ErehH5Yf2YR4rxmTivsag6oLGyLir3rgdWxVdi8heAb6zWgEsFWWkZ",
  "key34": "24UJEcVenSJ6uAp5ejnYViXhaJ4pihTdZ9KhBnyQqWciepwWUBvcVLa6rtRzrUZzc9Yv1aQKoM1QKmPGgY6mLnZX",
  "key35": "3yUGxjr3Kf5FsdgVdDzT5UNvFZA4i235B1HFKthYxwVhhEKfzjDdtrhYXVzr7pZyKoS23HU3f6A15LQam2RPteLM",
  "key36": "67ptx6ENGDa87bxpsCTnEPHjNMif9MMquiY11CWXkj6u4bevqWb2eU3rpbDaL4DGUtBSFXJsuSUdmkTNpXCSwidv",
  "key37": "4KvgvA9nmciQpPua1hkPeamX9U6p4YAeYn7HWtAyWdzQVbUKnzWDPPPTfD9bDbGXxL6oVZ7XnzEgiFcy38p2MNP9",
  "key38": "4Sn9CtT7cBnvrmVgHiHUXUDHxWL31sZjMG8hSp2EQLG6pTxueZQCNUVUq4SMCL1Pgu6iiBrRnPf8qosB1sY8cYtH"
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
