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
    "3RVyXw2xG4SfswRkhyr8pEZ3jPaQtrS9fksJUTjofpH4VK521J1acy5KvtszpjUwAgq5VQb7zRBRBwmd3xebdVia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bd5k214xRvVwboHNgi6FeyAmWmTbwaiDyXHKxraiiZKLQCCLrVHVDpD9TVcjMCbVR5BV2wzi9VfZS6RR3RCvEy6",
  "key1": "2N8zEkuSgxWu1CZxwhSM9bnfJFJwpzBT3HtMUp1NqVciKm3ZEoSxzU3D6M1qCNzgynovjdnCQiY93KJ9hJyKU3CX",
  "key2": "5Xy11XE27rpdKB5WnuK1Er2PBSxUPuyw1AKnBeXS3jWskvnBYu7nrsHCgaEqNeMgSTpfZ9U4MMCLTVBYpPkLdT8b",
  "key3": "5JhVGHYz1cSjKMHRmNCZNfbZisp1CT2fsHDFrNTUhvawYp6LaNAKJ65fe5PXyRZujoz4dnG3GxDwvmJc1HVBGMP2",
  "key4": "2T5Swju7FHVt69eXKKWPxQv78veBXenKCB8UUZNiZQcUEYFi4Ld5MCWAEc1V2W913jRxFYA76c9s9HKkhhshrUcx",
  "key5": "5aapWLnLmxayFvz42Sxp4UYUYiaxQcAYp5qoghBD2tctpt7EWwujWQpdx1dsNcnUMM8onaAUZyRBgYZ1Xto2Rp4",
  "key6": "2EedR4HTZaZcHpzAoGUbU7rPN1DJ15gahjug4WqXcrTVdN9xwYP2muFvcvUkJmdC47RKXGRnbs2DQmcJjw6XD9ST",
  "key7": "2McVfz95a4VYLqBoVRTPc3KCqmSmDLsAE3RD3X2StZdwjxNQdX1oJrH4SQRN2NnhPjjLjGh1twHNSAq4Y52vYufN",
  "key8": "45HnT65PjTdqGBktvovboU55CAttxeqg62jyh17gTJNr7aq96ecBWDp7DBQHEUtVK3bN9moKEAgRJnDAu6QN3fwi",
  "key9": "4bJFGTh7Rm4AB8quF19dw97knKxbMBZ4d8JisYGkCQB6WEJH2vUXE23avxZHyyTNDSuETUh5kVgdjg7XjRThZtiM",
  "key10": "3za4H18ZZPBuVMBTXtzsB4vtJpEyrKSbyxGaN76gnMRbdvzKsLvF7sRAju2KPjgmTxhECqEec4EAuph9fJSYgwKr",
  "key11": "3U9QtawvyiPUmF1N8c48zdFBuBgqQfZAxAVP7VRK6v4MLPvCdXsiFZSb2Qc6qdp265qtrZL7yCs4euGEX935hFYx",
  "key12": "46Mwg1bUEsBL44513ngiLh3W4NaiUCBcWj5XcDXGUSvGCdA4dxUhGdbgPDiTB5HnEG6XsUi76FEEf18b9aLhCEjT",
  "key13": "48pLq5p6KRnWiG41ab2sXnSZ1RtvdYKAe3rpZfVJRjJKiKS1tqoadXCG7G8TCMgJeSczcP8814RjMFxHGMMvfV3Z",
  "key14": "55YeXyTyzSZsCjHLwDSKjMzHfCVgx1Y57tNPyDuC5C6XHjWPBNKbG3ronPjZ6ZtLaBirkvh1VtShjx579TfxKaFw",
  "key15": "5g36ebNkcHuVSKjXCCzsT8uBV2J5AcgUUjQBCKmGugPUHijYHhsybPfbReND2YMSd6UKrXpz5rrXFgkFu7Ujei8c",
  "key16": "2qoGizAVwZQs9z4w6opWke7urGFy27WKq9F88ecZwpdW2mxrr7tLUh36KkwvdE5KRyt8NqoH6a2NeKW6pH4ggmhG",
  "key17": "G34jPioF73xmgpAxentCsBNUi8DMo7NaaLrCmBHPghuLHmSdtjWCyC9DSrxMngpiNkBPxSD9jBGj6XM8A5vFqMw",
  "key18": "38y6wVxqysDsiVoqsoMuWNyDKfN5W8uK6Vt1jAxa9SHja97sJKSgDVYhiLTfqH55ZGorCdyAR7bSEvjtMChcdqds",
  "key19": "kLdNNc2Eqxxqa4rr7XNWxzZeYyrtxTiEHvLH8BvxyiwvQTkXkQUUb7qFu84j3ZKt54mGyNioE7UEHDkZaXDk3Cy",
  "key20": "2tFNaAsiAtHxkVxK4WKpDEmmtyXoLoewKFVZ9hwqnVck34EnEYPKJhqdGAtqa9hnHACMBwkyB3cNL8CpkASvMbNp",
  "key21": "beDYG9wPDSmTSiXWcuWBTbVUptnyBidLZdhCrBTRZNNv16o7XbG9SLuQX6Ths6ca8ReqNoEV9iMMewWSJSrSGoz",
  "key22": "CEi22MxH2QvKW7auVGHr7tc14yXp2ukVrvBDuAu84XM7FmAgoxmF7HqRFpPimvfSe3R8nT2h86dL9FYRWSvwbSw",
  "key23": "3Lw7KUPstn7F7RVKmPPMThxQ7sUAbF4FjQemuFizRrb3wAKabEJvnEpga4YTSYfKANHnVLpsunHz9JM4s5xodbo7",
  "key24": "Py9813k4EbW4J378XxjqBVuvxD89kCBQHVJxWQngfTgkR1YTT9nDBJK4LB2M2zQ6ZNQyNR3NLArkhfKyqFGkCSf",
  "key25": "4WfKAo9XbxUgg8g3fvZ6Th7cHeQ7hEZRup3G1Wsf34BmsWTm67x9hFW4vVgzHq3Qwt6gRBBkspateXkHLbyBrx2n"
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
