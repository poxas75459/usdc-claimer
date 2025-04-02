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
    "5PoU6Kjkaj7ckD3BUWTP9QVTkZQSRefyLg3hVm6rmksHp25jcHVZQx3yZuudJjEvGozut2my1CnHhEYuG9CVzW84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DADXZBZKbo4JuNNxPbH2WS8tPV4gfNCxDxgnBTxmCqLo7uQsV2Rt5dm4cspMAUgceX5v94YG3QjUuxsjUkuUKvT",
  "key1": "4ue7utCScbTaLDL5U3SriHjQjfSoKv68KPu6kiY1pcnLLyK3En7xAF3tJA5EAPhzUqJi2CxhV7KzmnkJM52SSsFx",
  "key2": "4Hqc9XevgJMKApzhGNhTTfPyGiWJ6eZZvBDvtnRJcAWQykt4Q8uyWsrbjMQ2sE1n3KDU475vcd41Jyj8FoGPwqUR",
  "key3": "2FWspnGJcukU7MrHfYBuDJbfGi3DPpCTTviUo5FUSmkyyGzUTxcRJAQZ4KdVBUU9hZh3tKzPcUtWbCJ4vnj3zTGC",
  "key4": "3wrmQmQhqbPCxmiYj4zDHWcNQp3i4ZTawHszL3zT5LAzUY8wzNQ3Z5ww8jk8NUUQge12jmQ6bJZLLEmHwKZJyry9",
  "key5": "3cS3M8MxgXdhYkhbdVUvZ6PzyzrYxkqZHUYEZcyzicqA9Paw9Xfcouv6TqNHGooJHvgrkmk93MGxVUcdgUeMXCyB",
  "key6": "4HUFYfMTJapaNieEFtAp44L5F1FgxPGhy1sQ9L1QJBCrbAtQZHoXBoS4BvKkqSTDj3HouDXTCwJUSYB22VeeaZHz",
  "key7": "4PrVGfvfiXxv3iSXGSAdsEoC1ei4P4vBkhF1rgBbkCeJmaBG8vsvZLQqAf2iuyeWn1SDBhPCXbCfkkd6zvhf78yX",
  "key8": "5sfEGbVGUPV7eSZZ4XtuPSnsxVmUojzT5oCMHobeJe8M6ibkrD5angjhuNs6JFHcn6n6U4KGqQBous7FV8M17eSN",
  "key9": "2EJGx1oYE2SfxhGQESFceAw7PqaGAGJtRshWZ9k46pF5NEPwDfmo8XkxMemSnkyVNBZDWJV2qJBi536HxH3FvwLo",
  "key10": "5ZbtpuQPBJ7cuQPCWmPH79H6xotTEDNtrCfyL7pRrAN55vgRm83CL9eHYJqr2Rbyyjwz462Az2TdJhnPRasPb9yr",
  "key11": "N4A1daucec3pthb5ihooJvnZQKFnAbuKLideDCZL8kfZ5hqUpozjMSoQeHtFWspaKah48hfjuM7vnGKh9b7sQCi",
  "key12": "BBz1qjqif1FQSZ5Y24QAdmxa3qvmMjG852hqFgGryWZYJM3L2nM76bQKZjzKnLomTE2Qxn92vtwvXpPyG5T1SCr",
  "key13": "2esWvtYuYxAdLzsMgnv61ARCPrimHpN8H1Pz8sVEjXnKGrB5XPBP8xNuUMF874piMWS7VjFF4pz8mfqyQ7inJKmX",
  "key14": "2rtFhb7bp73v42ijt97SVVCc4pjsXVsriEpXeMk27ZPvsxA4HySoPm6Uegk1NtwRfmNKEXSFovAkM8k1fpTs8A48",
  "key15": "3TEcfX1v4ZM6bmdXfeYUSTVk4qt5CV1dzVzqzjoHx5kaMv1cEFTovUma9kX9ixrS7FPUbn6tB389gANcHNuYbsFA",
  "key16": "2tGSYEaaBqsmcUQx6hUhekrWE8mQcxR9fiPv7NWqn88uyjpmtGxeyehFRbYRzdxKfUYNatvr8ce68r1hS2iQ9m1e",
  "key17": "3HMWLdWsqYLzbTceaqnM2WysgzhurvsvSuFBNDHZDfKxPdqRfvLeUksiMbfzdEGBMkYDVQpavZLqUyES8DVGWPCu",
  "key18": "4C3ss5E5tVkSxWAvJDjQ9etbStE12qYTdumiUxp3uTXpt92QCxJrPfBy1tEVNGeqhLkyNjUBUjZdjk7Jqd9LRfMb",
  "key19": "3fnCh87EveSvvs56SXMca88YeyprBBTAAhV5oqAS6x8DTfWpcUuJjo1yKtGD4Kt2iozHkEEvtF68e66sfTCk3YPq",
  "key20": "41KiPFY81bTwRneKToFcgeQJ6rictSTaxRnBUGXbTxzWV87ugnDNoeJuHauXLfgpV7YCqBadGxkggqrox7b1zoBc",
  "key21": "3Yat2yxsFXtFABcSRHD2SoMWsNsaWxyakQu8UP7vPUbrbMFHA4CfzV23mSKrPTzKiGnhhJw6EZqDtPqEXt5u2m3Y",
  "key22": "5Rg1sgp4mw4kWmRC4D9riLV4cd9Zp9Pehe5Xm9KWpdySFbBTkSCR1KPd2HppUDEmkyHKUegUZHzaFquJ7n4N2npv",
  "key23": "Di69BC4riGRkYzpQr5DAQrCh9RdNC33gdizYBBS8ym45u6wKxqjZChj571L5yLC2qM7AJQiXn2iVM6jzDcaMbJ3",
  "key24": "3o5XfKYbHHfwScv5gMfd7PbssK24B2vq4yRJZvWQsZo7pD5Kjv4LqzcbNZMAxo8VVwC8H8S7hFXED6Zs2KkiFDZC",
  "key25": "3S34HyS69XTvN8pem34kmx1fF4SrTEZiUw81Ba3T5YCd3UjEdmsCkg87vLV371cmZMix2MVCD9mTmVvWtA1NtDen"
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
