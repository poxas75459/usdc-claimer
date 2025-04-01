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
    "5bABPYRXbypTvKUQt9k7ygEW5BWRatkkiRpBG5EDetfFaaXd5bfdYJDrAS6c29uTsFVkakpTHcCMXqf9csVSFrmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4geqdBLjvQSWXpDcNupbvS9XLa34YpCJpaBiCnbonPb11iejgvCB3stQS9xQ7CtHmaGEhqiQDi1NaRVCTiRHa2ZH",
  "key1": "31QdDU6zUN7iuwnqeH3oJLfWaYajSPVxjmHNycvFewm2h8eoUbNuHVCTuLpmjLdGMuwvn216P18yT9AKDigDu49U",
  "key2": "4obp7n3ZUAyqRLTCqEzoVtdLt23BRyaRVbY36Xa24xAtX5m9aSPbquQ7h9SCJM3xJPk13vczzjGEBpC31dakUCTR",
  "key3": "5TaAZQV2aYoPzhSaYQ9Q8GuLz4uLgtV8AuwsL56cjeBjVW2Z3B9M8umqYbjhQo5bMga5jLt7kMNH2uvNji6vWsm",
  "key4": "4gYYbXLVkwRSCgbaK6X9DRzmtAj6rrcXrDQ4GJiPzez8EyZKhSY4GxRe5276v3a8QKBA9ybXuMFM4Qs3UFMaNtxC",
  "key5": "52US2y7u4odMvvzwbJeUWkBV29PfRTiCiMuGq4tPE8LMJoFeVJenxK44oQMjfYxN7RXEHEVAgAbpEPwEpjaUnUmE",
  "key6": "5FGQEdufuoeuZ2ijTd9oR4S3vCNLoH3iAbF4LHzDWG8QMoS8DfJb7UKPHaunPNdw2iSiJTdP96ZV5ERCTC1BEAAv",
  "key7": "61m3U3EUvuXS2jCAtQNqDuyJLqRfnNkz8Je1BzKQeMKiEGdeVFoJjazW6LM4dGAfxudcLs3gEtSMtZpSNFHK8Bq4",
  "key8": "aUBroUaGeXYFmqC2jpZKNSsXRxQt5pVJZoewvtVnJDunxewee8Ax4izDudNZJvP4E7PWkRa2ojyjkn8qP4ihVCV",
  "key9": "59g8ZEiFAP6UtRKDz5KGRoZyUTDerXrW78vt4xQchVpjGTHaUVJFKBxhqrnDgFAxsQaSTRzZQigGunxvGPihTHqo",
  "key10": "24H3v84ZSqA8JpRKJNPFbpQ4QHpRLzpVyher9cyU6kfvQWzM8VDgFSGX6XfFBnJYDeHn7uYgbZodFc1zeUaYrtSU",
  "key11": "5rqC6zzLWvuFstrPNkEbBfus1vKowVjAdWGvb5wS8J5udrJkk3kbWFsXoem4VgY2RWneAuYwSM2oXYHT1MsVUzgY",
  "key12": "4rZdDQYpVoAkTekzTnoNRocS7dsRTAJCSCD1p6YHvnrqaCzj24thUpbQeh2Ee6V95yppgE4fVKK9WhxX4m1vkbU1",
  "key13": "5cWwhd3JvG3izkKSqvBpFxrejTpUaSMvw9V1BcSGaXaotP3F1RB2wg8J2cAvRNNin7WFCxDC7Kqb1ARt1gDsLX4B",
  "key14": "4gD5skvpsw2mxtB4KAE3YoQpRf9Lr6DsyGF33814LzpPviBcPwveCKNGg3DZxcid2ZKxUn4WQjEBC4zm7rRvdxMR",
  "key15": "ypUgx7n3TY875xzivGCb1AnPJqVmcvcjz5dcbgrVPfxBgzDtMG8s9NGCXZkHNmZSvTj26Lbzu6n5VsKiGKRcZxf",
  "key16": "2Fh6ta3zzYviMiRHqjWWuJFJBu7oMDMPBCL4L8EikGota9BGBFqAk26nn6To5HwetsR18kKftyGtagMxh1LjaH3S",
  "key17": "myZGa1uyzWktwC52NKJHK9p5xFBh9HzG1qnsaUL6R6UTYN9i5MmMZBvSqdgsNREheppX5942aWasuvnZ7Sr5UDg",
  "key18": "5RroB4BiaoJ6roYznXZgTDR6YTvb4DU5hDDeHstLafTVphyd6oaf6V2W3j8Doe2iQmNUjLJAoQYJFLVe6vNP9rbE",
  "key19": "2dG2gmTW5xcC8pKuni3P4YhpGLT5zn59w231LiTVLvxx16b2DSghDKQMhAPBMcCJT5C4x8dZS8eJmC3aPnBtBfam",
  "key20": "3vbNd4Jqcr8W4UToGGaYy6AuRkKwmgxV395PHtN7UcH8cmc95PxDVbwHBEeFPSwZRKr5iDZnWC8RE6Ud1XYgoQkM",
  "key21": "4CC9EPfqo6JXtZPS4aPaedEXVCWzPzrTqsQLtR2sPLq7jZ5SEukDwAicxGVaBbJShWmtvyKc63X1oMcR2n4ebDmQ",
  "key22": "2UAKZwn71LPxoHK8NFMdjqoTLvGJfU8KEEQyUG6GEM5rN6dDDQuT28VQoomdizLUB1PvLLknVRq1dJgzz33aSkEu",
  "key23": "QAZYX8nQwsLMNk7Gnt6NApqtM1tybaDVZHErg7B6fsFjgQY3pkxLr2TqsesKA1ho8BHhFgbZCKTioz8s6c2sHB1",
  "key24": "3nAWHtvybBPrk1m1QQWZGM79EPp3XUaqqAkBsSC9BXEgdvNsfi9jZ6xMSzFDY6hgbZQRDVpxcZQ1yNTCZpM19bA3"
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
