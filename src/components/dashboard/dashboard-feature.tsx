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
    "3smrNae2y676zQ7S8yvcwdr6HubDXxQ2CNo2zcpVU4dnjZCqgG8ZhzTh9r58JRQkPjeUcBUbQS3sb6BNWqC96TD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CubAmMfksbNZs6Ue48Ev3nJLWZPuiYciomwK2FqHn16J9dDdx9cwecC34kJMrnSCvZPe1EAsFysVNJzkYuHWZum",
  "key1": "4CegPa89kPv1HgFinSMMeZEmNxQJ9eHLUuMxU6Q9uSM16SRHzJQiw3Tn3sWgT9AX8rZ9ABG5RZz6drVPKCG5ohk2",
  "key2": "2ED73NBoBi8y81D2crTtZd8fRAhwAyN5f1LoyXc5QqGPgnK64h26EQaBf5NbECy88xhNEL4QddPpVhqyQMCLkoJe",
  "key3": "4ERvfv3AQJHF5Z3N75gLvVFk6aVtfCsCia6c1vBo14Q94JHusqQAywuZoGSumGzsimaERW2iGuipMuNE2C33oP3j",
  "key4": "2SBmG1RoVkdqpfSWFRsJhtSZvcDyZepKJvz7tvuPPckdmoW8NZcgqX7VcsVPk2zWbrqV4PuWmb9EvCDNKaSmUQ1j",
  "key5": "5GtELBBD7vQKMsC3LTztSyTAFQNMoFdbzzU7XA9HsPFgDjhA9q7iVcXeBdVesScweNSrfvMpyrJgEU6oWEdoT5UH",
  "key6": "3sNh2XSpHmMfc8EhRZjYakpHnHikacMMBEF35XxFxhUJK2yCRCr7WXoRwxtbTpQctPWFGwbYKyshXPvYwWdhBiNE",
  "key7": "2wxgECz3KuVhZeXgLmPQhrnfo7C3vGGWfRC9RECyrmxytkLZzAukfh399Sym3bmxqg64zWPBqxg5nn5HGutRscYH",
  "key8": "45eRicHMzB3sdPpJHTputDCx6umA5BCKrWdgakPpf5qnwoZeLh84ttymzGLgEUZhgN9kMwDo8n1sajHt6Xv9BKxJ",
  "key9": "5eW7GcZcG5X7Niy5vZkowG49TAdKLdUVKzwf18C6YLWoPaxMpe3vKa2qFk1HwobgPnGBagxZzrP9jXE4WfFwVfHm",
  "key10": "43bG7Qtt2uuJdd79vstsfpzuxYQmKCvS33yYtaFULqevzrHZRNtkbLQvyXkBHB97zBSsyULsrZEU4Rcj1FxmX1cv",
  "key11": "hRhSGpjnKRERZRpEHBdV5xtrUFBfDBVZKFivhFDnTroeu653XLzBhDfrwSgtcFjThVCTbA8D3V69LnxFYnjnkCS",
  "key12": "k8McL9AfoY54xBhYPhVHNMwioKcJjdnGmsQtEQ1dVv7NZ9E4vQvwvaFVMG73f1pD7zNEx56hz29sBwfdfFQY8Xf",
  "key13": "663VHVFvsvZ2HGPVvuW8GijSfaYERjBswCyDop2fwTfUuGCjsTKBmxmyiBSZFBtSB8rQb5wAv9hvm6ku8WwZSZk",
  "key14": "3mqgwRPQe5dX7ofs5NyeCgsPg4eUBGJCAJj2S9qTDkbB17NZzKuREGutDHstfAKSao3BZQAGZ1gix97Y94mABXmv",
  "key15": "2MbLXyJ5PHx3Z5cyNE2JN3CDkxBpQoKfpTgCNUh4ShYmcUUpsPF7yKo8FvTnjrUsVx696oXt9jGwBrBMjFkkJjQD",
  "key16": "5f9ng3DxKiD4ZyFyh5ySHYsD288xsmQXWvUaU56BMmvNJPPwmWAd4V2j9ZeGXLztCooSf98ggE14aFRJXRUJD1et",
  "key17": "3WHK3ZukBGvgjtnUEMr9CyXGR4wpeJ1EjER7XCGwXyAjNdNfRmCPAvzDzw24vMRsn4eqcfwu7F9rQsWRFMxdqJD2",
  "key18": "Qk1pwhJTNfChEjaDJFGmfnNxSaGtcqsKFKrUi1Wt8m4iW9ZdziPvF9jgNpYXkk7y1osDfNvqnUc1ZFtYws6wrDP",
  "key19": "imKk3uGxj5BZLUuyfQG6aagc5szDxqiJrfgXeYS5p4aHry2WYRiXDtFNhqbgcD2jx1EyzS4RXtuASsgkQBU4LFi",
  "key20": "4yT3ta4ajd2DjHHqB2nKpSY4xdYQrfm3LPBEbuNe7RUZTmKdQXpXvcXPaS7terwefsmzrguXP1qXNfuvzz9mi9CU",
  "key21": "2u2Dz3TsK81GwNcXAVKvLfzoutxfihc48N1WhM3wQBTsK3kLETmq5h18nPXrgqw5PuUCbsU1zV9cqod615j6yDb8",
  "key22": "4ckMmcJccCj1sdhTMuxBpidnBUJtMEEnXDguLHFDn2X1DnuFZuBHc3kEHi9JQWMSJHSo2NhfRwRuzEKCUfRexXgw",
  "key23": "5pEwSmQ2a9zNopyyfkz9etvMJ6NAaxvgSNTZMVVMDcUkcxGn2bZ8biaduXmXFUMh9Gd6UXSZBRNgCSp7UrKKvqsR",
  "key24": "3eethhxHs1vjgj1MPNZJjCrSdcLHPUuKdUinC4zoaFhURiXv3kw4Eg7wWzQQvHP8KdcMZh7LhNSK1AWNvr9HHufo",
  "key25": "27idRht1QwDvJzDUqe1G5GgRNaEfmjeAsVfCKxjRsrA5YZkseGDfhDyDbErkvYEAzrtTNP7eTU6sxNbCsEwfP5qp"
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
