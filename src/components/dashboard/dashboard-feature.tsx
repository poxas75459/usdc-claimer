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
    "4W4ZzPBHCLTsxWyYKm1xwVXNSitBdoQjdkPwPwySH9Jbh1QQXRsQJehEMbxboqVi2UYZ1bpegMUo3JDNEwa1pQAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXZWNrkqfjtVcSmzFn9j9svWHdkB6nYb68J7rMdqY5QSuLzeg2HW44SbFtNa5mQmM4fs5sd6pYHKA6Ag63R352U",
  "key1": "2hKg7bHRaS4afUay3n1damaHY9nqtZLmTXT6bv79BzViiPAjV7jwcPHGPJfCeC1a8d4bgqooGtZvHxtjs8JKJT9s",
  "key2": "MvbSHC4sdxC3z8DnGM8f78zoue4uVmtTdWpzqx4E4sXeK3MmSA3V8ciTcD1KwQU4KGXxuJRiXDs8nRD59nPRKpG",
  "key3": "4zJTtFxwmNeepbz3q9qXDmTnv11poGBY12RMyVrPa6fP53CP3cwRonFqc7gZKmGdLzzDqEFe6d2PBvUqhq54nrQw",
  "key4": "5btecQQQUh16R3xJw6cBEoi5uBAkDFBAevDZ2ztJHPfuMgVBQqmXY8JyDM397PEqSxTfAB1vbkMCPXMFdVLt8Rhf",
  "key5": "34ooiGPetkY7FXSzLUAmWNsgbzvHq8Mb9y9j3BGMoeWuYz9GgugF1kZZ1gKH3AMxu553dSeoGQ4nMGnXxW9ADHVm",
  "key6": "k77h9AKWzBA6LGpwwZwNtQPEcyRH6Ve2Auc3ATPtBJ7bFsC9jArHufCNQzWsHP5pQzadanvaHPGskouo7upHnt3",
  "key7": "5SjGAzXYDd3PUF35nnLWbWPKnqaUTWuoLq5eXHNzC2uERVzSpUTD2HNBN7eQ4Hp12d2deib3gwvh1Qjn6wUCh6Xf",
  "key8": "2n1aoLkS9PGfZ6ERRBdr4mgiRSqeFoFwKh4RcCfnEp9FW8jLQkKXyewwawFosjjA1WghCJ97dRG5Sy4wNy7gdbgw",
  "key9": "21n4KHUJKoSbBBqK4cQgYmWdwY9PQhwgwnndMNbusXXg2VeebSAHMNwxR8DrgPUtij1xCPfCFqLaBDdMUzh51R8x",
  "key10": "62KK51P4cErBnYmJCxy38315d2ENcAJJYVY78VGkxjfanUA9bT4X6wd3K3iCvHtD9RgMmK1TBKS3AoYpx9YazRFQ",
  "key11": "3SHaerWEZ8uEjWE7TXro71gqmrso1QtfgqCBmdQ6dT3m8uQqew5iJFzwR9kjeZvuX7EWk3c2mfprPYtANMG18eRr",
  "key12": "4VMiRsu9keBYpGhES1axK9CGSvS7kaGicxHHtRMbNkFT1zvmw4QBgavaYwhzDZGuRHq3gE3RSFjkovw8yBr3KsEh",
  "key13": "3AArx9LM876tooUYRNYkfKbongNYvDZXALJ1yB6jNKGkGgSP5kZ1LnNs85KsaTo2uGvm96gh68ZY82qfBfFZ6F5S",
  "key14": "3VnwVXtFSSr2a3pz7p1GqgjVt2KPd6GHL9XEPm9DsgnHdMo3dRuqK2ygWXyR6mSkvg3W7gDTa5HHoBU7CCfND54o",
  "key15": "2KRdCm6TmUe54rfQkpYaU9rUyrJ7324VGghzwUwmGrwK7YE93rTxADcwVqgJFNKuh38114toAUFcCrfvBdDtHv7L",
  "key16": "2qKAfEMR3W1Kw6x3GdcAhtH2HEktfd65XJearQMEEfuGpQK4pZ2Yuxwu57WogwzDCXFkTnPKWF2dEVezX4NWokmC",
  "key17": "4xWdV9KDE2DyVzvJnocgRdVFd4FfohaAwqaDBvwo4aVdB9kW1XQbHMTqtBRGfH1AVCV2Z7uKgraYcXfdkwWGnF1N",
  "key18": "3JFizS6oPfyLfs9hNghC2L4jNR5D8WRJadE5yEzRMfgeYRj9XCgfxW5mBu712xiNAd1JKTjjn93YyT6apM7My1UD",
  "key19": "2NaSfW5XvRT8aUYXzNKC2WS9fBydoipm4RT8UixNjU8Tn1fSbTiBq77LewdeCF4NrHacw6KcBMuAEDt2uCEHTP3n",
  "key20": "44C7Wgem9cbuGJT6WfwVK8gFfjZHmPJLuZ9jqDzijRNSMLQ8tuv5HC8Lnu7Rimb44FCSc3WBfo4cWyxqTBUkenoH",
  "key21": "4jiGMdPHBKdKnpNnrcyCuYy2kB7ExmEWhtvJaDYftkvTJJX7dYN88D2xweXWPwiPd2N2aht9d43RdrPiiorD3xa2",
  "key22": "5gTDHyiKmqcSRcG4tnn7d4bs62Kwc7KUdWWmUBNHw66ZTAWBXbdbcd9cvbQmDG7xTMyjkpQorvBhjFmkB9qDroeT",
  "key23": "2wx31m66n3dtVMqiYNkik9tY5SU48r78tHUUBgtVfGooLYksNUmQZyRFf1bfTSk8yx6pX2KJsaw6DPtffgtGvNkf",
  "key24": "296d6QM65XeWDaXkM6zmdeUJccf2vsz3oqvji3NhUJwsNxvoZjX5cnv5tVP7uiDQPXhRnZaMP3XuAZNQSqgCqtH5",
  "key25": "3n3iXvyUq4Xux4sjk9RiTmAtYof1tY9t384EgXVKauzi2bmTf6zF4iXRGobNWmNM3RPGimFvhgCThxE6sy3Z8Dih"
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
