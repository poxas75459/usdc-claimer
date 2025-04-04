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
    "Te8bskY4iZczJMbK9dkBGLkvrjGAgYK6FveQSDqknwqqXeRbUCJ8s2rzEiDGVRPSnX4cx5o5N67F4BFTX7Fvk46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ekYnYY9QWK7xNBhBAcCFo6inXeUSbvG1sh2VzisGRX9dZTRL6haQ3PaYAde11MFRdhurr8Y7kpEqvggHmouF8ff",
  "key1": "2PQ3PHmx1oKtXwUTLJpuXMTVEk8s8EGsqsgC6LZ36VCQjm3XEakUkjFMBegNyU6o2VRBVbyc8M9wuRPRF7LwYNg",
  "key2": "58p4yzLGRWBCJgWMMXsYE6wZX75roaB3dtE4dHMsGZYbwNnxWymV6uXgXLCbgjHMq9yJyWfapeDynUWsfAcNLE6j",
  "key3": "3HieZB67HJnNwcRk1LSFquDrKWJEhdX5mjonSJSyYc8J8dnVjNceVuWNKNPaYCgoLivMFBwJtbUvFHdCehnJCXfp",
  "key4": "2GyKdUyUjrv1Q41JNCp3wwHwUXW5g8knyJAfSNAu1dr7iG1kZ6LVeDasrABiHM4BnK56h1HyeNHqAswhPwooqFpX",
  "key5": "53qgZQYbFH2WD2Uh7iRysQhc78AtM3CNmpMeWhaRPiWizAZYt1mYWxQUaHHkf5UY4t593ieXBEqjd78grE6H6fds",
  "key6": "5GxjYUUFUvHPMxxMSTtb1oJ2GJGScC8rBqn2S9efTEh7ZqYd1fxCqUS72kyVcYxphnvcdDLjdFVUZoFcBX37szLV",
  "key7": "47SBRysJgS1rtez6sL9vmfxTmSVkUGsSDvj877FvmuqNpsL8bHwp6C6ANEg5MgWKEozEL2MBGjLpAik6JpNYjHgi",
  "key8": "PrtLEm9TT5TknpetJxdxAa6hDnfEchPJXcx7EnSSHgiCQ3xH9syJPH6jpeQK897UDb4WpV9P1i5PBaWxG5SqyXW",
  "key9": "562MSiKBCT8rqWDGgfmCu5iamc8ixgmMvhwdyfC6Kzqmhr6SF37eK5mp9Z4R7RHJh4ga2kVtYhHfc5UFsDbAvmXK",
  "key10": "4XCWkmwPftrosa2ryyVqa54CcuqxYAYDhbN9jgmZVQ6dJdx2X34FSU1QvcAipiMJKE8VyyTyLhoLjYckkZ3EHWL3",
  "key11": "A9pwKfYAsSAdZyf9kStwrKh6qsM27MRRYDL6jWu9CnmWzMjh5EuGjcZTmpeX5aVtPmsSCT1V3XzTrEYu1bJwnDj",
  "key12": "2voNG5C9eJ6zrb3bsVT6LXmJhFFvsBAkAuRvsurvM6JMoTokarHnhpaAAhSpkyNhLyjgieHBYwmyxjfP9kco42DU",
  "key13": "2TCN1ARiSkXNHsyFVEgzsJbQHKeSw3CDcwQAbYYWyVS8upxB9sR1umDbKvkUuf4XL429VHU2FwDtbwqkznNRrxPJ",
  "key14": "35vmyJmoMKfT6VEJJFkDS68bDq8ZSuskHgB9zv2EPtnmZoyshmzL1VDNRyEYzAskhC5LUHRtY2RcUVbxXXcc7wBD",
  "key15": "3TsLFxF6eADitEUbgJU1fDsMquApMKLSqTfobwWRvuCCHRk95tAxKce3FXgs34VREA1A1Lrt3gGwNXTCZew7vUnZ",
  "key16": "46v7ZA1U3Z8rBK1JcQrzbYbf1LcKptr3A3Jm7EpJXuWw9FMkRs4TZ6byo7M1uagDEzs2fARH3jVUXALtxmMcnMBm",
  "key17": "2ufLXD7HHmzvXGtm8wfNBJuBUeEErWgjcf47pfcmB2JAAwDNdKiuA4SedJc7Qw14vr3uBGvzsGwE8XjsKXfPnsx8",
  "key18": "4kn6LsPFi8URub83jwzpSqvX8QaAkkCh1FZR2ia5htc9h1Ldj3yijdq8RQUW7YeuR7bqwG4UhAiqrC6TFVcpaMNf",
  "key19": "4rrRXrJrXoy8gkUNNCjqUPdvbmtqoQD3EEhpSwVRUT21ib7mH1BytzoVz18SKfEoFYnrVGEZmmTUWSXXY4yM1gZy",
  "key20": "54kdKt48q7AP9Tmvix58LSybRitYT94h6Dzgab5fms7mPfzWS8UhSosekxtvwXaEpipx1JG2xUH6snu3v7T7hdYU",
  "key21": "5WhdcB3t2JcnN4mscVKvAy1KtVsvdgBjtpHjzH4R2LJ8Zeb6uEpZJsRGQeHJfh81hL9jY9QtEjox9BUN37QDKVN8",
  "key22": "2MebZghwzoW5xmALLAxx1Gj3DCUdKgerVozHr1A3VTb3MpARzPtrD82LbSpk3iJjma6s2mtS8fczmLDpyAyBm9dD",
  "key23": "Mh1qvQZnAQBtVQXfbxYzEYfK5bt93GiqjmKS8yFC9V3MLh6E559vQp6kBMw9WfRsecRZHUo2MEnfBRRF4CtNcbA",
  "key24": "35fXvHV3UwWab5vFQNaKx1rZEVPjfgcMpmxrWdqNNzgg2HmgawDYfxLjUBBmKT7ss8unWgFBb6YSjCtnjjWKjoSm",
  "key25": "351VT9wgsHKwvNGuK8VwMM3Vmdy96mCsAnAWsrzFZ8N1QnU64Q9WpWEbKY1zSxkMyZouBkTAnB6j26zsNUaUNuMq",
  "key26": "2ZHWDgdUAN7mVQQYti9hTvy4yy1sMjvJ3mW6x2h3GfNozsNqn8fVyYpRbYSTHiN9kx1vTQjugajAu8q2SewhzSKY",
  "key27": "59X3cGDxR519c2QNqtRNx7Eek12owabcq1mZ2kDWC27eEuaot3i7A2rFo6YtCXFjti1hrtCRJtnv9NiWVxoZHnDa",
  "key28": "4reQ4jyAr5hh2LqKSNBX3fRtv9xRJ8WfsQMmKViYe2eahiKBAeCMXZAxT588f9jD8bESv9NK2oQD5PggbF1CRsWo"
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
