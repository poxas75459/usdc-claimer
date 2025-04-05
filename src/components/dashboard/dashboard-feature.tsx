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
    "2zrUMjt5wwBbraptiZRFZCXQrkM3sDjmMSdquT7LxX2G1zD9z3YpL67hx5pVt8ATnPPuGzcfCdhjQpJZSZBbQhUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzz5WS2efj3dQZkdxv1gr15DckKJ8Vp7AAMDw9B96dp7ngQiUPnHnRp5XeiEyCsASLd3gsGpkfh5uSfFkg2uYXY",
  "key1": "4n9j54wgNy85Gxqv8U1P88Fi7ec7KYgr4wsqwePVeUAVBPxojVuB9PM2SktEnfDpUnYgZntmpKPZNf8S2ip3QPcj",
  "key2": "3sgGgiukBLZb724Bd2hWeyCUXronoFZcAfW7gPNcxVXhwoL1pPaizy18TpqY2JjJ266aPHT3yGUgFhvMeuKDBsP6",
  "key3": "JhGNPMiQ2M6CTMQ6dbTPMkV95Wov4LE7PLLs6hyZewVND2Pg9G2jTMJBwZmXuh5M3EAFx3ASVpD6esLLGJB2qtN",
  "key4": "5KiVU3bChCWRfL6oqGPBxh1s2fDPxrruZF9UtjXut1htbjqeM3m1wvxzNdjvkp53qMqdT8Q1uFSj5oWPKEUyqfMn",
  "key5": "2cEYZQ3XV1qPfeKFZVNRriX2avRSQ7qobMmaHJrtVTWMvaUkqDMQvyF48Whw5mbywkdW86MBqq6zwx495EqB58aN",
  "key6": "5uwB3C11t46NE64Fa3azWk1gMDCgiHxKwe7KNxcHM6kYw73w4AE3WVx5JrXrWcEtywFJKxnJgUrocGmGZeHSpuw3",
  "key7": "5dCJpEALDmdrAc4tybJif53MRqJwj1rHeebP2CVGfttrzmyfgHY3vQCnZuZDNHeo4hLff5bZx5bqLKeACggmqen2",
  "key8": "2Vn6erXRsLKZQFhQjACPt9y6VAqtiCdFZb74mepqBmGpuX56HPADeYQEvqV2AHUF5Ewtj6c3t1edkN1NfmJ4ybMm",
  "key9": "2sschK2UvG21ev2FXbZm1EDa5M5sRBFYbVE9Gy8TbTJ7FBKrLbNQzQzGkeAuqo66s1UNT3LNT9r3sJWR4hpAomAg",
  "key10": "3QnMQZcZYw8ZXuYg588cMCdcm6pLL2fC97nTVwPBWXDdjUJeXQp3VV5ND49WhVch5KJ2wtJr9c7aYtqK3jMmRcL4",
  "key11": "4X3GF5urcRS6KbJm6m3iMBGTQ5Rxh6mTggJUGweowAFe1dZDCPp16rsSREbXoqYdCAvPnzo83NC3CtJ3DL38vJ7D",
  "key12": "4xA2KeXNcnEfqYALovxS61ELcv94WQxXJGFB3YcNZRGDfNFHva7FBPTVDypbWLxcYhjBFc1n87Ap1P4wKQyTueAi",
  "key13": "2GnHRXiNe8f4epjUy6ZC6VvSuww41c1mh1MJHont5RUFcqr7VQVb7JfSLnncxVomLeY6J5UVsGVqfQDT2VJms9Nq",
  "key14": "3ejrqwKcjL15EUniwF56UAzUZU18KnPt1ECcuMAK8pLKRdCFSrDprFZk4Mk3EVPm4kuknCD1eo7xGrhnDGXK8RFw",
  "key15": "5LoFHCNcpEjPyK2j6FcTskZVaPQ21p8tGPZo9PYYLWQYNk2zvGZzBjAtzkT354CuzQyKvipsKNFKgCntm9NKgwZs",
  "key16": "82ZacVp9DUPBWkWNgSMXnvbD7y4koHPhPfmqvbJiiP1yks4HtBVqnxXCByVPifyhhTgbWY6xQg3mhDzA5SwRyR9",
  "key17": "5bgwCBjuSUAn97nuyvfTstbLqTKEnaSJktKUbJVdeBsooRK3Tw8LKxZmQ4mesj53ar81wuNNJmMpgzCCKKVUFFwu",
  "key18": "5iVcfw51dSAMdtd3d4WthzziXebS3nA7am6gs8M2U9vkvHZtrNtfBfht9Fu4wWQp1GeU9Ym7MsC8jNVGbQFkLafe",
  "key19": "29vz4GfnB1PWCB6veMNNDuoRwZ8yKosUgXhTprcFeQzhvQYrk6jz2P9vGjvjrjcjECWdEVzA5eWcK6CyekyNgrqF",
  "key20": "2JKA35kbLGTzbJ4ScuYNWy4ikSc2wPRGpRf9o4ZC5zA6eZczYb9dhtbsJcnXKMCmQT18r79Z7uF1gYKJZu1EybN2",
  "key21": "ivr2d2rWovbmkt5qHfZmuNF4YTgSFyb9goM8cmwQVCBv6xj8aobe1jSP9Jk3GivoagfdRVoRsP4E6LdWHEZLunU",
  "key22": "514SMWSnXSEQ9TL9zMjBtR9UynA3Xyv3xkauwFLZWZ8Xs3Zbp7BWnUJuEgxDpU99oKhj2RWYsUFtdFnTLNo4Dkod",
  "key23": "dYT8YYZBCNgSxem9TnVzAMWB9bXGhNKU5tWTFLsAWKLVDeJdhFVGLRU4tQN4zFncj7o2mEEEe86FgKpDB4iMQYT",
  "key24": "2vGfLt8LgXScN5E6MpChKoZ79h68zcJZthzD1T4hUwgRzZNYUvTwwtwRmFjQyR9SJ48gBD23iTHbeadCinWAjrmW",
  "key25": "5jn1RexxQKWpQvpx9P6uFY5ZuppaEjqRbxbtzzuX9shoszQq3X1pUpJQ8VRzgvnAnYGggAxUBjdD2DFVqUbSiuR1",
  "key26": "4hzSz71hPjh7Bb1jqGxVgusNq7vpfnEFGcbAFpDJUpErNmqjUNrZVgXjMQ1spWEQ6gkBnM2wibX3dComRF6vsCR7"
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
