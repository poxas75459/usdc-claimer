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
    "4wqG3B295CJwsdhMdCyLRYSXmGnY8AJjtsavULGtpsgnt9zPczqv9yQhLV4VEmhEiYy1YcR3CWsiWfSkMueto5xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXWS42Rk9t1v9VyFBrK7bxTuSW2w3yAWNEuhUevwLvzPp3FPPatn3BAysBbdzn1MJ36Z6y33zoL91uRiGowATbr",
  "key1": "3Zz2i7onp4c2CFvUbxUc3HwhBCKp4J2tbswyMY42Cgxm3vQiYWW5aMb3D9R3VEnzao8nJpmn7q6BaKcS4tufb7kr",
  "key2": "57921KWnfLAFLMqV2N95A5YtdX2ThNWhRyzpM9oKyFuEnKz24ThyZ93Pw82anEPuYCT74t3vvDiLygXRsPMDLrLd",
  "key3": "5H6sACZ94U4dT3orEzLGJ1M4eTjYcmGjueAupSpUUsdc6Yjo61Y8pSG35dgnsXnBFfa4b2HtFnbaAXkAd7nAXWWh",
  "key4": "2mWoYdq85es6zYdPvLe8Z3LS2UgKNRYLWtXDXJwMpQr2aLqXy9bTGLo3YSUahi6KL9M1MWMonYJy9WBPFMyte6Tz",
  "key5": "2yDcxHUVcM71RPTchZk7cqipGVreU3pGh6a7Usma2ho5DNWeUEMeHK5iWDRmi4jC8DuSXJ4CyuAnMePdujrGcaee",
  "key6": "2kgzYokMVN67yGk5RScQSQ8BgXy76mkGC1RNFcocuSEM5tYTyFrCty8KKtoa4temdv6SAn49yTyvaMdkh7sCzZVR",
  "key7": "Sg7AcYiKMz81hQ5cyKynRUWpRz2dQSZQn8wT2gG1nCTZk3wAS7XKb1hThayR8pn1iZgD5Z6GXS7WS6VvpukUBvE",
  "key8": "4B8CsccKeTanEAV1U4fDs69zyxXcwfUhFZMVUoJgsj5h1wBUWkUUHnpJ4RomefJHmZcaMWGnFUMZvcfQsDunRd6s",
  "key9": "4s5mMjP6mbVRLhkMTML3SjM5hJUtE5ZF5jjF1KdTjSuZNb7VB66EbSDpjjJNtKK5VZwGUmBhTH8qxvFVsQXqCmdx",
  "key10": "5LwEPtRRi8KfHL1AuvNpm7wC4Gzvqf7y7TzcFpSR6thNZRofsCgnUmipLBEZqdpGdAebySrkTjvGkaELXyyhPPHn",
  "key11": "2Mk3t2MVkTgU4Uacy3gTgeeEXbPLGpoktyNrLkKWgdLHFouhDV4NiJqmAoMMyxPo8EcyLGNHrWTEhs44vJzssQp2",
  "key12": "4Ug9K34FgCkQ8Tp13s6rGCqPpcCwJ7iEkKy4yk6qqPQBw1K2XhSnDe3MkaVE4SiUeaLwR5DQmEoAsjjL9J2eiG49",
  "key13": "4ASzVsh33rDcamSPN2xozzc4cqHPzcEGRrEyc9v8pwbVctgD1F1rJvU9iYqeWRyrc8Cdda22HeopHx8qoNwQoygG",
  "key14": "3pr2QQV3LfhcNRfASkHikE1v74U7UM7F3rshLzQZWRVQ3Lpero2NikcZULcGukdnTTk15KnHQfqoLg6PtBHbuubn",
  "key15": "4SFnhHe83TwsgaJZbXSAAN1pwmDUWarURxY26S6bebooX9ZLKTjcQadHSt53FJX9GmZ1DYbJ6H915VYttxD7uAT3",
  "key16": "66c7vPSqAA5J1vSTU6939TnsG79GNGAiYcxJcxt56X86P9EVLFB1JhWEQUWQh9uxTQcGWmQUe9Ax8Wob5wdZtKuV",
  "key17": "4KRSft1Uma9XzhfwCteSxCNYqwm1Fr2L92Q9QeAhDksNWKijrgVQx9ZNH8uEFfpnWt2ADikGr7a9pWH1gmhLznXp",
  "key18": "FV3rV3szP4BdvvH1uu8U89XgR5V2oE4euxsiBFcTtiVZq6XE1L5vHn7p6iu8DZxZZYeXhmexDuSkR1eQDq216SE",
  "key19": "3FVBp8Vx7Q5Vc6ncvnMDTadrqp8vX3cEKeeQVFXXt6AMMMz4vsr6W1KrULk46mVxd7ReUmD3WgAbaFk3hGRQm2pU",
  "key20": "2EgqEhs6VwHjPTS6GVvia6wFd8VbAH6jTUsHbdRT1TkDS9Ypzx4ZRX166JtTHmcRBpGmqv4GMj9U42xZwuifUSjQ",
  "key21": "2UedYwXJ2Geo9gkLT81gv9tXXJ75za82WnxvJq2RtfkPPYzDqrSzDfrv1DZzwwA135TpJnXb4WA2VvxAQe4dVc1F",
  "key22": "k9Q49cM8tytMsNoz75LKvmzpJFWKVWt4mCBbgAftKWhHa1QD37G7nmyBrD6r14GJhMo5ZcRL5DbqptUS7nt9uKH",
  "key23": "3D6ZDTtkkVXTyxeHpVxR4Xy1DmvpGYTpvD3B8CK6vBRGfYKmzAvJxGL9eCBcTu6xarBogEEAAupnyhJTtEhYDgyL",
  "key24": "aKz3vChhFdDdpS17uEXXXgQNXdJ8rz8FEq78T3yHf9jqCSnGFzc7NzrpzVcwyA3DPPU2BmCJfBvRgZSjd596cdY",
  "key25": "3Ltub3P8gjbfBhs9AQeMcqUsL46WVnqR3oksyV8PFNUig9dUnQNrArKohy9RoZ6gyZhggop5TFDxBCzD9rJ2JbnX",
  "key26": "38sA9YDntze2ZvbEAyuxrxcioG6qiuEfZbU7fYsxyGmxG2Ugnh1hSs9r5Z5hYZnuckfV5VmPSD2zWn56Pwre2cF2",
  "key27": "244P259UTjZb5TqCbR3W5SuTH9PmJde8updywP8w4JRomBHJ9CYBZyBoLMGDPhezWx2HMS4QgLkTmaqGw6xT1EQK"
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
