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
    "5e6Fo47kWGQGss2HNHXw6vLXUAzSvZ2fhLCKaGc3S3zKXcq2PLim6VbHH2hkF6oUzQtNX8hQBJqHA89YG63fpbT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHEKYDCz72jdEzS9TuyygRLTptckF8iaPBEDmTV6rGtNFxxbtpRKScxm7vKpnEfUTcvbicd8t43hf2PNdZuhDtk",
  "key1": "4KoX4k1aeZXjjspptupSCyNSP5yWDqnK6DdzMpv93uJdSzquPiJQkVxac6uPuAsvbNTfYwzFdKfenuKS8XXqG7iw",
  "key2": "2whHGbVcSX1DRWPUhJCeKuHDkEU2qd4zZwSEaUFjPZ3kzqfAwQjKmwqhwTEEpJfD5mPmzxfbt7aMChrp1JsztdL8",
  "key3": "1gxe22PvvL7KE8R2VDNsEQBgAbNt4n6JwBAUBAeqx74WffoxqE91CSW6nRnFShWotRBeeCWhTWjcxGySNrcN3Tw",
  "key4": "2YdHDaxDg1QmVMy1QaBGrkmEv8z41AMmmqkYCmU1HcYa29ejt1aH6cqc7aRQeDrDCtjC6CgCEuP3dARUqTRb2oxr",
  "key5": "56d5xRn6mvtohWjzDjjVukJsKB6hX6kLToYKARJB5krwe9deCjk83zLnAzWBRDSrpWQn3v9cqAyGSDEendTEGsdK",
  "key6": "3SzU6QCWfi6H9CDMwUjTnuEe7ykKkjDqXVGj1BLyccZKP6eum5ZcHYkT4NcPYeSgr1azrLNVmDkYiFJH4ZyrT4CF",
  "key7": "2YXpR156jgfNAFTxpLqSqxofEonLqa3PKxeHG86SnMyuerYsg6asJrrJJqENTjYLi7HNNZoMmqhWuL2J4w1BJTQj",
  "key8": "25XDoytVQXDGFCQ5R2X41k9kkZtBxJDqrfr8u3mp7YxcjuaD9xq8WXU2QLMBKdN1mb48umHWNmHNwTwmajKTNcrz",
  "key9": "3g9fJsiXLaV66ZfpoKEpRjvFHGHfF1ApX6BfC33WZh4fyXjPfSCjEz35GoEjBaWsftcUr7gsrCJH4XFwHCcNQqSk",
  "key10": "5MHMFZ35NWxzwLyTRCRHtktaYPPUtWjQGfN5iMw9Vs1TTwseUu3dxpAUB3iWRuadE3j3MCy5WvPL4B6bA9m1X6H2",
  "key11": "2mhAikN6FH4TLJAB5XkncrfD7d5r4R3t1hPwD3xaL7ku4HyWJVwEq4i3kpD8f2Zou3JczhB8eAYcMDQAV6dGuwhX",
  "key12": "4rqytDdugBPPSbDogJkZesTp5mm434wpT95U2h6XHcdLBJv3zZFZnXMk1hpx16wpu4fNcHnUTQ9LpmZvCJxtcrK4",
  "key13": "27H3w5FDHDybtLrRTQHx4vTppmGJETdC4uw8V8Y3e8wFz8qMPzDfs9F5tDAXrcsyPvohKgRWf3b8eF3qTSXPZLir",
  "key14": "4syRRTh6HxoozCAH5iHjXSjmVCqVNSDtTSBCy8UooFpaTLtbQ1bVr7uyAHf6fY5FVsuJpX5rtBLAk562JoZea1uD",
  "key15": "3doUeRPxgCB2ykUn2H5AF2sUM4LKNBdk32RHfN54Vd2TPocZDYUWPzGEZha1oREQazWWA26KBmL5A7LZgxoSxpTA",
  "key16": "5VZPVYXsBHJHCSZeYrPiiqZnodZ8xFvTs5ZcZxeCrK5RLJzK9AqZGb4fAJk66xKnMCrHLSuH1mQ8nP7wSGkAyW4y",
  "key17": "5LKmLCtv9JVfM53sHRugzHAMTQLE91SwdA9sJ5L8EhNuLgigQ1j2NhK7B5dJpnensznnP3xbibifYdXTSMUg3EGt",
  "key18": "2Z1GSmfTQVxGTGfLTkmhWRY1hUZojUEbAysNuVQGsqjs8zoezaBj8TwxboT1wPubUz8hMx3vso36MxgudDeiyBBv",
  "key19": "4mC92Hgc4pvTvM9m7wJu9VqSj1Zi8M7SKwdZwaqw5h1ZPtExXBsqqDovHUVNhGFLDJarB8ufgK84LVr244Ww4UGU",
  "key20": "5reNe3SWmCN1G433SGCFcep7DXdAquEBth5pcaySKQmgZJFwXYB9UYdMcTgN8MaJVeWXdRLS4agT66hfoNuCKpkw",
  "key21": "4wpAjbjG3962uriyUPnsMz6JEu1sbicxtCvEKhAQjYdDGc4BPqu3EfUv6Hct4ZLBChTwyjkn3X4CsFzjpdANEgbb",
  "key22": "WLGNHCt87PgcEWREZPR8QmiAnFWW3iAxJzDEAJ2CtynA7crVmemH19syv4ZWp3MeyjYRTh9CMZRBw6YC8Xjk21Y",
  "key23": "5333hPMW33r8zCU4f9QBPRBNBWBqtYY6Kvmwu2X6tdA4ErQddyVLZomoGZsD24SUNg6PBmVuKJF9xShBZw43BkT7",
  "key24": "4k7j2dTq1WUj5uyENkZ4WSQuMchGrPgXmr16t3c3dACE7XaoseWBLN3inroHEPEi179PsjiCwrHo4hPJhvPWfxsX"
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
