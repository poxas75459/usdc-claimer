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
    "21KEAXTh5sUCMcYpge8kDAZHj6QWMk9zc232XuzTHNfQ75daFSyt4CQoMfHhvb6h7fQ8Y3Er4zngepRh36zHf5f7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hG46vfyAdfUptX5z3K2aw1n5dGkimtGicqV3oc4JqvthCCMaGuYRjzC1WFPDLBtEEEMSHu9Hhgz1tFWSCup5B2n",
  "key1": "49eCKxpjzefDUftBy1jxbhbxnm5eTzRqX1jMgp4WS5cmBkTPPsaRYiJTDfSvDBCbKFhkjpiC3qPxZht2xqfdsWWg",
  "key2": "3eLUppFXRuaCUBKmumWhKj4eeLWBeES2FFXQiaXgXYCD13SM2GUdavEiGfqoavnrPs6jvAtuy26i5EuDKJMJSJMV",
  "key3": "5vfJCKNcVTj61t6rBJY7kNFzuXHdNY465JtyFJYTZdVfgV6Y1BzmTMjfc5XZYv4Dn1gKjUpUp9RYRL7JpFhNwLBX",
  "key4": "5YYLrYHtHHcSMN8vEzT47zJNoa9WN7S9FmaFFT1A5S5Zpw1eRp6BXh9W6G5kwyQTrR9PQ3yBdbPkLBP5FNkW6eYi",
  "key5": "64NeqpAQvU8Ar3kZupjxxbErD6zFnBXHyxYMMqpBS9rh1hzzYkcBocDT1NESUCMMJZkazAUEwQhckU3ALTgN1zPA",
  "key6": "52pRSbJE3Eb4iBGBRu1R985ZWqJKBWMvVEC2pFEjqHmtjFDui6Jg2wgbNqt6L52YkicEiAwfJzeunYbqG3owYY1o",
  "key7": "4QUF1wDgaRxbnToKWrjCgj9yzm292NiA3mEMnT4EN5o1zR8uYvU4p1wTXU5Kd25cMkRCvV2MTPCiWLDoBnha4JXD",
  "key8": "5UQax1xHj3w5HPRdn7MadTgQkoY4SCHAtVmP47NpEikUKwCuzt2dRrGyTuFau3FEyZwfeQeeuVThFsKgw1kVZCNX",
  "key9": "4DP4LSva6A6jqiv1R2mkVL2p3wksTz9e9fDffbkwp8qaDvyvnAic6ShemreBPLb4H1PeQepFxRKAf1CABvMU9H8E",
  "key10": "4GLBUg2CQyPvKmvHef8AzXcmkpvKwWw83phEwztx12vuEBnBK3w2s3yuxpPrhXpFj6x9X45QrwJZiUNwidYPXnk",
  "key11": "2ypFaA6yctzqABV2cps824pBePNWzVUcT3CbryAFdYy1TvExqjz8gtviBgB5Jtcg53ZBYWyGLnvbgKNSqApBBN2c",
  "key12": "3Ykb5quBG7RyAW7KwVm2bDSKVfgWNfiZVQefMmijiaf65Lk5VTWUSwsNxXzWCyHq8cJYPAWXfFfKwkfNtLCh6gYD",
  "key13": "4kLufvXswS9cmGUCijHNaVSr8Fpcmmg3TnkYFsHGTP7mAFJicPtjFu7946rGoYayo1Jo42NjDchGDFXVjoyiY7Sr",
  "key14": "5TmAzY8R5JH4NkD5aWs681PjjaNRFH4SaZQfpGPxjwi7xwK4pEBB8Jqbncw1ZqTywPvpBWUDRTffRftH82v19s7o",
  "key15": "5zSzSSWPfALLpVpMtPqdeoaaBgNMaxZWrXmcaQ8sqiX3NEL2BTKBz138AcY273vXuQSyZSeDFcGfbPee9tTkmct7",
  "key16": "wSnhJJeR7CqW31GhSrUYpSwJZ2TpmJ9BPjsAZ13c11mJsWgFy6ufdMRrY9FbsuxKT4t9BubCiPy8WPMbe3z8A4o",
  "key17": "2zvi2vkBAqdR63LMxCN1tTikABXM57Ndied1WMrmKuDvNjNugyzfFvLCqQzpMeF5qpXzJQCZ7WUJevpZKzKCoH2Y",
  "key18": "5YdThDBeFAVHig8ZZkXfmTSu4BjxjL7xJmAkRjzPsWbRd1SNVeXcVth7hN3kyAFq8CMqYZkwVWox3zvi85b3iyt7",
  "key19": "UzdDU6QgQmiu2x2u3digd86G72EQGQRmPPFFdpe1M7weLkb8ft6D3jJavs9qQWyb12cSLsJH2CbLgAKRKtXzjXJ",
  "key20": "LrH33w2b6N3nGQhnd4D1Vdrxn7NGCCLSR6RogogHaML8EFrCxkbxZivECbU8R6EBbrcFj4VwdZb6PntsvfzuKpm",
  "key21": "5pMsAdUdLx6rubMv5XhikpaBaJz8fHQq1ZxFHjAzReqs45zNYfCJ7gNV2nVEJm6mQtJnuhA1W77GLcPpRqLmXpHQ",
  "key22": "tp5LzkwBHP9N6HVMGF6wqBmeEpqcpsBLpTsdZUEizBLAF6kEcccSkYNmrnQxt7FLgdYW8u6EZemQjMmHcZhNKni",
  "key23": "4JgqSYhdXH13eqpELJCHJGS1ubAAE9aTfzA35v8D9FfaJiBEdbggQAgG45PXfrg43P5rhPnLsADSYBxXKHAJjzaA",
  "key24": "2aVnXpMaoNU6BkanM2xaH6FUysafEeiikN7LtLMbPM6yjqYrVjECSkK3kgYPoS3Yw7pVzCCkrrSF2ND8qXU82FgB"
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
