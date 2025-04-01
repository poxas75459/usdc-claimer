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
    "5y8tbKxRWZwTKAFKbByNCdE5rRA7rwPFeG8Q74VyQMqckuNK7SY2ZM627H3cjhxEfbUScVEe9Marn2agpvXqfzuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gyvnwE4KBgdwXh2bBMUpcmtQiHCsikd5sVJwB4EbwUVCcTnv4yR2qmFaDvTqy1sFGFnwSv6fGCA66XWFibaWC9H",
  "key1": "5J5rPMzmnr7PPXvBdmroTbNUvETnVgNtkBAk6f5f5dhvWQDgNwZAdvJUYpcvpeHUbqnuTQDfegBnCFts8QEMFian",
  "key2": "5wCCD8KBdr3oEXd463qxMR3DrDnY8za761GmtmUG2MVBDKu81Z4XJEAvyokR2eajsfurNG1NgZSpGbUnGetgQKtZ",
  "key3": "5ehvLFuntFKZokbSCmbiq8JGPFAAhZpWYZKuSts9HYznrjMgwvDax8rtb1iXoBMPckjEwFxzLb4pWS18mvY1FfwU",
  "key4": "4nMfoGDAM5NxbzHkqJFPVpaBGoYmAuFyxWzVEyZQ4XxcXBQQvpkPD6UoVD1hmShNPmNBaZdj7MgMdHGBUyd9vkGj",
  "key5": "2aNqDE3oT8j5q7cpC6uhWvUcesE4364WkkQDUnN6jsa1mojDULcsbFg7zYKta45grDtdqdwxB9xEsBy91wezJswm",
  "key6": "3wjN1JcqkYrNC74Y6Rhna1Um1nSe5itC5mRocLW9y2SEv6hYtx3odCfi6xgeQjD5sPvBNdBCeYAUcaK9yPe2PeDW",
  "key7": "3LqgwarQVLWub1nNLYGvxxVC4ZKx2UCiFSzSsmAFQtixHepbnGdJ63YKybEh3soYdq6NNBtrnoruZEpSjxUN83FK",
  "key8": "22kMRfbAUtKs1i1e7wR1kGNsL1cgqNrfxdX7bBVsaEqH1EtfTu1CqRvmSkcvXbcCyTb7DqG16zPMfrvQ3cibuDym",
  "key9": "3HhRhvZMLLRVc8NLyudEcFG3epytF9P5UTM5DjVACwVLhFU4sPiBEVjetzQQd5FPfDNyRumVEFjrCZEBT4X7DWR2",
  "key10": "sUNGNdKqkkbyjiaugogmMX6hLWuSqTLT8q7XqG9nzZc5NhGdMifBBWkt7QCSbarR3VD5mUr42BrjqiK9QH9X8HZ",
  "key11": "3Bp4Jyf5Yu6u9BrmqXHG4g8zuxGs5kLbJg3MWGPhR2NGp9rfpDHRZ3fQABhGvsRa4GwQ2qYsUGtk4h3RoiqNFhrB",
  "key12": "4zE1G5FxTaJphkHSiBkfL9r1ZTzztAXVgSm5j6L6eh4wLC7rjqnQgkMy9erMYpaRmuwtTUhn22crCGMU8TJnWU8o",
  "key13": "3JdN5qEGMCb74ePZnrH4tgqpAb6e2j8Vycq7RAAbYuNBUYS2u3RVp8YAueXcEcTKwt7TckdLs4RbkMir4yMqpnQ2",
  "key14": "2CMRTT1Hy6F223uTxVQ17VCi2J9WYHX1q7RMiSjjf57QfJiA2VR7C6krpti8ps7ijqdfrtcGL1yL3GYXQePSqqS7",
  "key15": "3VZCY5Z1RKvTy8qioeBGXnyigJqcfKVk5FF592TMi4AKbi66drw6o8zhXVCE2pCdurRvKVmjauMyFxs5T3RLd3Y4",
  "key16": "3sNaNmpXQ7qAZrKQZLtrSGx6Fe2oWX6iiHhGAootrgRFFq2e4BUxGZnoU1MR5y4MA2umBAjuGqNLJcGztkeZa7V2",
  "key17": "59TpoUQehxvhdijPHYw1SSx9NqJhz2ujr5iHzbVpkJmhg8BU6yTJwKbsD1nwS9MPywUCqT4RvG9yafedU1FQV2Cs",
  "key18": "draK5nbhMsfFzei4m64SKtm7tfSZJP2kyyNLnX3DS4W2DoD4eNevMfSMz1ChKC9L8kvAnWshmjJkRXydVP7hGEM",
  "key19": "27PCFN8GvSsHUnU5HcnEnWNW261DDvwbcmQFD1MqeE98ZF6aiQAmfqSY6x3vf984KWyd6HRjzkShyq8SycjYbDn7",
  "key20": "3sV1j3WZcTr44zTb8DKbpfepxUX8vc4WJwwK5DgUWygpZWFEYuqVWK3oDixKbsHHh5ovMZgJ1vCwbuVMbup2VTpG",
  "key21": "2s3t2cMqJ94v59AUusLV2hicUmxbLDjBkTgSAKTPjucCBLPMjwgpT8MhJEgPrE8t7JzgnXgJ8b8LJZLKgskuxUNf",
  "key22": "35YYb5P5SuBwNPr5a5R1NK5rMXZHcNeMzjJLMf25LLXJTdtboa8GFzskztwdjrSYkJz4uimy3dCbtjMuMTk4L6mp",
  "key23": "WfnJt6JNmNhLiFv2tEUBrwpkNQCTyLGB5PsMKGp5vPUKAsbSs8f5R996JpbSuaEFS5fiixBE3mLtnmqRq1WBtsZ",
  "key24": "DNetCkBu7q7n5DsgUJp4sBWNHfxddhWzwcytwL4qWQGbUsiAW3sctFY4fHMh8k6rw3yjCnWEkUhREdECCnfqrxE",
  "key25": "3pmRG91eQg71qAvM4MQZq9EKdHqsT6PoJz9QWeGpnUMwPmQ7bG8sNadLVGPpwcoNLheRciiHgppVMPEywfMK8Q16"
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
