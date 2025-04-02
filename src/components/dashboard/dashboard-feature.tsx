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
    "58V921GhFDwBXJ4sQ6TfmGHDZcidvK298FacgrqASrKLAYgMuoFyP3kysP9fP4vg1ruCh5hezq3ywxgwqEX239Ld"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43k8DzdbpexXqRKvQSMe4N3XVRpmLSDJiS9f4toGARXoxNNHqcyn8WHrRWXrzosn4n6qA2XM3Mp6a9Y96uyjxfkr",
  "key1": "UDZgkKVyBxYUpQQMp9knNfpSoSTSqJsNErz68LtXo9LJpRzRUxJDG6VS4nwyVgsmTioWq4cytjLMEakLyzWoM7T",
  "key2": "5tnaq7mhv2aPQvG2YXmSMVhCUCJV2S9HvLSS7v7NG4R44RFmjjBnndVaJyNQBAgH1zNrq7gz4h8WHSLjGpzTmrZs",
  "key3": "6igDG2W3QyRoo2LFAHtw2ejqG7kM73TJvto7poKNEwGEzuv7AsTWiCCWAuxNUPQKfPMyA5BGciN2dWe3C46zRPY",
  "key4": "4aXJkuxivg2YRmZNKyWetrFVmdHbCvE1GhyT6PyGhYn1559aT58nQVMuGntmJ1cmejhPpCvHKVauZcF3wswLhTS5",
  "key5": "47XxhSdPWLMAwbyFfDUbivzA1Yj8PBDTbukwvbA86cvE7YoV3aHW746uwRLq4bBzH64Qn7kzz3X3r9dkVuEpy1ut",
  "key6": "4FUXgZS6ZHeRM5VgriHRdPPzuAzfYFk5y5msddZ5DoP15qLMjuRHCnBp7TKDBadGm3JGWWYhzZhbJ28EZXxyypAR",
  "key7": "3KqHVPjxmaofZ7Vwvu2tBT71zUCayf6kvqZ9zvhV7TmeSQCgZLAQsYazgKGeBzvDNAjDFXy3MNoYw2aqYNx2hAEh",
  "key8": "eGfsbpqGGKkJRpk6PzVP2YdmRgV9HVTUK6VC4yVv6552EiGUojPZv5TYmPLJofFmof2vQYc3DPTgfKkmnHpKpms",
  "key9": "255xaSnojJb8US8ptoYSmtKiSpiVw1DhQLuU9qZGALoY5D5CgvRVXgrCG9VzBKyguUv4BAvCqCDEReWr2CjPBveF",
  "key10": "5nEekPD8zchwHEBegBMC3N92aR7shcHRkbDxrKZmVVDZa9HvxqMSY4WrtjdfeRYTT1gmXcRj2Wx7eYp8dAf6sFH1",
  "key11": "pYMCZFduWctSHEzFmiE2v4bxVQYouF3Zwfg6HvyBZjCgaeh6xWs54nvsSam3heLr4T6UyRzqohJG2hPdXDvSWUE",
  "key12": "2feMwtoZLW5Jk4FWoJy3uarawJt4z6cWQR34gfDibhBZ3pA9onddTtwo1vFhobZtcPh5pavisaLYFKzRCARtPc1r",
  "key13": "5Cug2Gth4dVGVfthFijzeLqXnRPs6ifxbAMHvRLx3BtDnHyt24QyZFNZhF8jxdTzPTEHnUjPeh6rrjRshSarAMSq",
  "key14": "1gPk3mFZVXuhtHUKj4aU3Kuy1FB7QmciVmU46g8oMsUeTpUoyyHyxM8S9rmywibSFwPh6uuJG81B7AF7FNVknTM",
  "key15": "somH1KDJuYXCR5Cu9gebmQ6vQrFY6ZuNB1kw4tTW1QJDGKMdY7ZdAwRz7HPPRybFdCag6jZQFYqEEnCyR79znS8",
  "key16": "yxzuDWhxkf3XicrgHVTFjcytdKiDB6omvskEpLG7PaJVfSnZfQs9RwPfgPSadPDFLdWbjL3JzNtD8AZ9jz84J5i",
  "key17": "5aJ4g3G38BzNEWxxHy5nEGHqkQLDLfEMcMfgfFEQx4kEvRcbMzxwbxWSu8GrH3Z2XPTqA4DGfg3gQePEnNtL6nF3",
  "key18": "5eLofc21ZKxUU5ZGZbLGi5H8smmgsLyBQ3EE5KAo8uUJa1rggnJyT1NaMpcXXaXWagi9QQx5bhB7cmLmy1sh7jFy",
  "key19": "29TgLUZGJt38JJGCW1nenySJvAuEuMi5m1paHxXvTHSFGRWHaZet82KZcavnytxzhQazrPcrDZLuarnc5R8Gr5KD",
  "key20": "8Utmp4udTCPiE1uRTFrMxdiUSvrEvsf1k4kyJ7fYAk53p8bDRS8TLEJijFeDc6Kvkazp8PAZg8Hzosxo91ZEECs",
  "key21": "1BtrwLjekEPkZs89zxsY2LFSNoxfRAaW8Bz6C1iGPmMPEF2XdPRJcm7fdbPeJnzxbMRV759BqkWuwSfN8ExiLUW",
  "key22": "2v6TzT64LDv9K93JYPuCaSLApWggDxuJfWktoz1QgxkjuB5DSuYjh5R6bX4zBU23oUWs3to9quMTLLTDg8MiwYRZ",
  "key23": "5JDM7Q7i9UgqDEwFtqFNm34HJwzeTTPKexHtwizg6YasEiWnBu4tc8CUPZ49hMw62UN21MdsjtfiY6c85WFthTCX",
  "key24": "2eNacrazBeRoqGT1S8Kp3rMMu8RSZPYuHbAC6tfqkjbE82zJgDA4kenPma9vxKHYTG5tqLEymdU5uQrmNsNWuBj9"
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
