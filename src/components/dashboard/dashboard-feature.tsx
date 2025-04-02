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
    "2MNYmubP7cgU6uHNkaSSReLv8Tk85mLXJ8QZ8dgb9QS7phr8S6fXAjxCrYwtuHsNADtvKi7W2asW6ofM8WdbZPS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21egL4JJUNyBbAc1jAB7tK4WSuPdpz911Ucy1PEmXgGyjMDYegBFViLnFAXukqF2DK1ZgBN1oq1DFaCeqbXZLzdy",
  "key1": "3b2tjUrPCSG7LvXwQWHxQVHtAKyL6o9VhwsAfdWufthGpRdzsoHbyKXAh8dxYoPW7yA6aG4gNfTGnBxSTV9pzE1a",
  "key2": "4YUm8DFADCUHKh5eWyTX7nuiqtmrU3w5DzPTg1hmoLyybeCJbWmdYcVoRa1Ay1efWDs5rsxGYnn2ZTPhTcXRpUdG",
  "key3": "2W5UTPAGvb2jHjmXR7JyUZwmFRtYPKmj48bURyvv6p3L8gGAbVoMqzuJvvG91gsw7pYqKYYiRQKvKuSbCKUuy1UP",
  "key4": "2QWGVZRMjFfKtWv8aP4DNvrNR9wxig1R4XnuGCsbJv5i7u26Uc5M189cPkeuPyyL1sw4N5TCSVzYR4UYfJUqNAtu",
  "key5": "2qypUnNzJ49o7a15TYRQQx4uHB2xxCuLtnfbMEAcBTALz4YsMSwM2Qntixy7Zs9w5iNu37cWkaqbqUPqTHuQagG9",
  "key6": "2ivB9RpQzMq8A6xMH9mhzGRxmebVZ7WMHrj7XYihKRDtWoi8opZGXtNUNqbbM25DhMhMmMp7itUPmrEnMY11jnCT",
  "key7": "3iZHvRU4qTcV26xVheJLRamFuEa4VJAqoCqQsPmKw1CgJJLURja1M9RwCeNFTriL6g4bGQSNDu8chfD9WrkBieGZ",
  "key8": "5nzUz1e8JR55hMqqrfsXTEAvLn34exfHQnNYtWwHMjpu3wPYZUmmgq4TdKavby1ZJLBCaufDjbVGpyYtCMWmLK2g",
  "key9": "jPFXHDzR4hFR4oD4TXqrLzju19xa55Mt7Jur4skkZfjhrESBcrViw9Gk29KEoZTCvY3PQYNDkYARPgiXC9Do6r9",
  "key10": "2XTmbkapVXJZMMpbjm8issXPGukq7vi5xsTX3T468qshxRXdMXXA4SSXUwNZ6sYpP9c3vYoFsZC3xt2gMR89zg9q",
  "key11": "h2iXPmQp8y7KUNn9rXo4uEyUr4pLDLuCNm81rDQquQKLa8aZYXZYWfQrqMwCM9Yi3JrdD2zd4ZiP1iUmLAoYjqk",
  "key12": "3BW4qgmFRfdLuAhpFEfNca8cHFrWjLkiZ6tx1Wwn4MKnEDqnngZ9UZe8a1L8VoARYwAuNVbt1KjteXwL2FS8vL52",
  "key13": "5bRDKb91rv26uUjaV3xK5vAJ6FH3P5L3uNMqo7Zs7RmSY9x5BEqGPRECgmekyE6KpVUCu8o9H93P55fAff7ZMfyw",
  "key14": "4KBHD4fGNLoYJBA6Yijt1NEJPB73REGR94i2hoccJ4eCxiTVntP4yw3hctUYAGsszxEX22Tf9aA3jzVNm4zQSfkL",
  "key15": "651bwKbMdmSJp8zWxndhCW2n1wR2pXY6e9AWvzQLB3zYZTEkMNUWLrgfgwtPwbRZKzYrKbQNJzrWbDmJEm9sbovb",
  "key16": "23ao8LnqpZB7R8axqjHn8TkFD8fignKTT3KrJPDy2RmAwt6L5RaU1xtqskVfg1ktJ7MstMLaYXYsTb8vpbCa5vfC",
  "key17": "53fNGYL3k4KfBar6eU17htARtKZbXTAtmaPT8DCJg55mqCtiWtRCCKzxfW6KHGLngSwPoL6c2joyrgJMYHsRkvVh",
  "key18": "36REUAwqc3oAGnM8MRgWPifgByGZDw5qb4T3ouFJigMvotQqM9JY55mhPSnPthXpmNNsESb2azDUAnrXxeyCWCwZ",
  "key19": "s9bpNwpqms7ZSHdpAQasmUeprXSDEF6GpfqmUGnA1NMgFTdU12a7jJo8bJrezt4RKTmYrh7syj4c4yMPhBKnwXQ",
  "key20": "3UR1ZLiTQqj32KoYFbESFjMrSTnaknaSuaVJDPTTGChcAGWsLH4HPjMphNdhgR6kBAuesaz2rT9omiW8JaxNER76",
  "key21": "tHeHfDf5ZNUgE3Hm8Pv4UYgrz3FrMY8QmeT6ZQp2jdFQYRLsjLYwsnodoohrHdvpashJfTrSX8dZm1v1PmFtFcM",
  "key22": "3p8sj8pyVZGMmUjThN371V18935dYdVofhHEJ7kgCUbk1tfhwQCQEnFtwUmoZhTbdwzZBToUAmWsePBf6prUXoYV",
  "key23": "4kMevM2aHGAFAFz6g77U24TrH8WvH4g117FCLtYdfBcZYmFig1hFBqfvXSR3pt6bBYJ3xwjo2AtRcp7VRGNwy9iQ",
  "key24": "2MLH6LaJp9Qy225TrHiLZDWyLpFbPSWfRX6fYQJkii13EtYRMGvXUR7T7ca9cMir68FaPT8j7cZZATxMDVPjpKDY",
  "key25": "xDZ14RCSMvHtq15p4gNbtSSkE3kXY6KxacEZxWxTCfxP9rS47b9nK5VhPCeZUu2CLQzgQt93UHDJzRpXRPTe3DS"
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
