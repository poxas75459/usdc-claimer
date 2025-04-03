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
    "5BffTsugPcizHYMzXgPk1ANMo45M4F1MFngwov13vLKkM3bp15A5aJqbB7BBiNhWCoDtrtft2dw1VP9K56QnSp2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tiuknSp8K31nGmN2vXSibxXVLquyQZ1ZfyDCYVcfuhgtNvSgV85BVTXEksFWUiLUbnLPTUduuHTijMbWJJGgnq1",
  "key1": "5ZxuRrC9vnHEeESqL8tTCwPdMQHEcTM63ZwEKVqGFAoh6oNeD3Y3rFaHo2arGesuVQQp1UKZR2z5bZy3ePuuLpMS",
  "key2": "57yPzTw9MXcTKmuhJC8S6B6dT2XUDKjZgUvFWQs27Bkvcyb6vRGScKptjnBVs3PKgWTUCWpyXkKJijLDMrXGDVyA",
  "key3": "5WGA3nZFwWd1enWMcaBagww4X5aLW41ssZ9FSWmrzRFBWTEZRXo1rE4vDscDUKBV7Cm6pgiwvkMcqL2NZG8LqGje",
  "key4": "SB5StXg8PBpJxJZ7jEqyHeVz8QXf1PVtvF6849KQkaKnpxLZ46jNUDJfZxb7WjkEexC8a22hckKZFCYxvyBc2Ca",
  "key5": "4MVA4kKPEJQuDfUAXjCES8ubDHMi64MdmQbw7fzWfxUjfNer7tTcxgR9mN2ZCzcoaZMgrCvShCTkeVzCFP5SFfSM",
  "key6": "4en6wb6u1m4aNWv29AUqgKndVMaEo5oSHLr1yQoeKGvPxbMt9DxsXTFaGfAW4MiYuboF1HQ1JTpHeLy7YP5ysF4K",
  "key7": "2KqdKaee6B3mM6KKprrbxaqwcSq17mrSWyc31fmvdLkrDUuMiV3y8u9QGHAgiGGDBefa82ZyYXoN6Sn2KWKShduV",
  "key8": "BrDokp7oG29zVTyGAsxfLSNk1T4VAhyvno37xqc9qTnBZWULEBJnmMgR5Lv6ovuPqPYrcFN6BMHmMWL3JjJ11aL",
  "key9": "2qjQo6Bcwc87E66LxhrewwcxMP6UFgbbLp6qVGDcuFpftfMAVoXhau3YK2ohtHCc7uTx1zFzMYm3nZrfhVPV6ZFg",
  "key10": "2h8kTS6kyiQ8WjqfHcx4JEQyErxJvv9aCHecRYDU5gDNmkCg9KxvyyDaR3Ww25frskGHGJtzFAfHMWJc3jFCAtS3",
  "key11": "3t652XFk5P7LEt3zM5EBqUh2i9ix6B8rSqabQNimUCBSTwoVoUusp4TnhcXKcFmzGJ2q6nWJGcTbbCqZ8w5CCuZs",
  "key12": "3r8ECwLSomb8iPnE5icDfF1BtVbuVxHYCJAnep4e2JTTqp1uwoBFTQrKVGcpTNqQXgi2SQMCmCmMZ6kUxQtKm6VE",
  "key13": "4TKXcuFA4xgVxWhT5qamLKEn33Ty3gcCwuBeyFrdq38rZhQzMoFKut6LAZ3hGJX3RQ3mcqVq1Lk8idE1bns5s2zu",
  "key14": "5hEy5MWHgERHkdGnLfTpNFjZdwPntgD3dK6BVWGucLxZKzfivF25EWEENwbGzYCc9TngkFuHKuNYSADxQXdZMEFZ",
  "key15": "4MBdZwSLVuWyFzCetGZvCRGKRmv2Vjv6A2R4veBUXRAsamGby7BG8fm8j2Seqtmb5sMKBp5u3HFHRTtq4HE1urnw",
  "key16": "wFqLkfKxoSiFuusSDH68YoeowMadXT3rUCLrfeLcEsAJW41Qyf9fuJWpy6x3GcDtviXXUsXWAgXatTRPpDKpq6D",
  "key17": "4EvQYwjiZXBuYPZmKRNoW1Hh6tqhyUqaQc6k8SsUY2xKmKqhYrwVDj5HGnGjrvuaL5BUn3EneMDPj9TbwqiehBWF",
  "key18": "29QfdFf2Q7JBakauMED53P4BbJKzWf2YoQjJfcV8kfm7yPQnbbEYBLFkQSCsV2t74PzJCTevvw5EcMMqCpozShFz",
  "key19": "4rPSZBcyM8XC86yLMttb6Ys8ntAqYsMJJTZUenFRNgKmAibBSwA5kwGmx1KibSRvLfdRFDmwDdsQug5TLqw5EDgW",
  "key20": "5NLCJPk2n7QW9jgo5Qu4HymsWc42sGhAcHyF58cmxdGSZh2dp1eX9AEejwAie9h21vCv25dcHBYh12qQ9mPbXiZa",
  "key21": "5cgA2Ppn8RzfktUx4xFhcpGkZ5Nj6zvmQi9jzkVFgikWFKPTfCe4QPQA1fMb5B43ZSNVz5i8GeNxKZT9d1RPoKED",
  "key22": "2Y4N9bFqEQPRkeiUEUyBCpfziagmkh2Logf6uudkLNHw1fiTAfyfEfBi1zrJpFe4W7T6cRxKBAvvdeBQMuzYdhLD",
  "key23": "9iTihhQSWN2h6FVZiXcSs2iqHdiYXhBQzbAtMdhS9wD3393HEZfqbzAXTNSy98jVYhEeaboY2CbAp3fmy7WdJkj",
  "key24": "4sZ1FiCr5D7tV53TUpABtJPCpHSRTPT9QPXPYJNtEjJqprvJhdBZScUwkZR3Mpkb9LwNkfcFWjHftBvSdTjyKWHk",
  "key25": "3Zc67jy1Ty4L17WPzM7beUJdvpAU3YCzBiufy3gx2SMEJfdvb1XJtSabFEd1ZdkrAS7GPpPqTnKE2rdQHqCDRi2t",
  "key26": "5vtV6yVcGaZ1uy3fUPTNJ4KZmPvvAa2bN3mofvQVbUNaBbErs7jh8Fqyc2ZNKZRQTnKxKsede3haz9jc9SGshcBW",
  "key27": "51LuLS2wuhEH5rJEavgAcK11QsavxjRSpkCMTfFLExDPnUvSM4fpYjmARghm8yvctfJgbAapkQLb5Ej389v1L2cm"
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
