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
    "5xZhEUYUAdE35oD5XRVqGKyhTuw3ox3dymiTCWckQMqWmP1rjkDf4PVUngkaZVkJEg7Bw7LoeTyCdm8YcxsaS6mK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57z77MrTqhEPSSKgzLQEoKLAK8WajShMSxpDJV4pMcWYiEJ8qYueujpE9akE5sfvApvbMwRiFasFopUwBQr5KDLM",
  "key1": "46stg97avvcKTBM3eYF4nrNFEDeLmuQJcMp8tmgb934x55UCn2JofynjrzP4Kxe7RN7DJtcyAEf9LVdcCo4VUfzm",
  "key2": "AgH7etxfhNA5iTzT9dg5z3Rz7cP2LtGke5rhYD4iXGZ9hc1uKPkoAQVweNdwAVNXBsonuwdMAjxESKUCxmp5WD7",
  "key3": "4JXZ8LuhuVuQEjWpXE8NDGCPuHSJ8ZLxFkKuGcLgjZRVBrvDWTQvGJCwkZPi4gNVq7HygqRyAJeSkqoYQe6rEpo7",
  "key4": "4owQvU2A2cxeXaF7EYq5qvL1Ezi4mAExjozx2kt3uinnFtLBAmtC3miCSoU2ShvGoqX1phGfyzeU76WkZvDdiuUk",
  "key5": "3GLr3MqJtCMytWcphtxMRQVRcQvirbpNETNXgKJqnoUpH6aw5eW8gimQwq4BrboirtwY4vyeTqpprUYJmU7uSFdS",
  "key6": "5Jj6bmdQGz81nHYsyMyQcBXVYQAAaBRB7pPB2BuQbd2NhsXBXpRmEoX2wgkoVYt23cgUWKQLU88jkVeFN9ihbncq",
  "key7": "Hbnf6mFnXBS7X47jAkx1xpZqWWHTKCUgBdNLu81baV8oE11Qo625B1ButeVAFguuSY9SefygwkKcoiFpkZWfRaD",
  "key8": "4DdXzR7S77SMQyG1xqBMF8FtmaP4vFyPoeu1W2tcZ6BtM1ajm6QjwpyZdkr2DnJ825WmpHKWZ4YX6VRT7oFoLx3f",
  "key9": "2ppKJ5xb3ghZ5dk4DKy8qnMMNFc7BjnBEkvD6DoPpg4KwE6yi53DHEi1eEjAsqyTYCEGQQS2mZPAYsEfNjgXr1GX",
  "key10": "2EvNiTnthHKdZU1RZRQA1HdgK23a14MgDVLPshQqiTs8bvrUjmf8bE2Sg24aL1xeQ6Wk3xo4sa41e5rzg136KH3k",
  "key11": "2yNTrYpTrA9rEM6SPoiCvQnBejK3mam55gsn8T3RUtBhhxennnyiKykdv8j6ksyatPEHWuFQuBgttPgsMhcpCMr",
  "key12": "eAZPqfLX49cVyzYWaXdqmbhuVGHXsBSUV26BKXwHX3ymRLbyanY1KWgHBYfSWbrNBReSsjS5kZ2ZBGiq8iN6Xd4",
  "key13": "2Yft8J3VAgpHSNTek7ok8pzMD9qxJhKr952p3kknMPuRTHkXjoGMoaUj7qqjeXvFvJmqGpy7NhXTBCoU7FBocyWq",
  "key14": "41sGxeyPWQZ9XgHhiTJBii2JMwXVLmDCzBC4j8882GQEtfQ6A7QL8EutQtS8hRBtFcXwS6HPbfexGdg95DB2HqQr",
  "key15": "gL23MmR7jYK5UPe3WavLeYE9xQacE2txP2YzYGvB6NgxGCyUa14kSGY6i2ZfEM5syqFGfLxsswvMx31vQQPNtE5",
  "key16": "3puxhUQBsjBv29tpt3SWhK112Fc7TNg1xMvVorWd8GG3TkgeBwdn8oTJFJQuHEEncc2jDrj1R9n2grf558owYcGk",
  "key17": "5FX83jS8mDbDNnkY8XzeiGpD6NG8XWqfQHKbPHnQcBtABAMoNqfypaVpudRN6BenzNLuUTshYgzUoX2KxT1a2bPA",
  "key18": "2ERNNFkFeWNyun2HM7cUXF35vDkNRKzHi5RDguQbwbZKLHfVHe56iUHjCTLJBDdLRUFjM2KRjLLa4rEqD6yvj1da",
  "key19": "3Fzdwp3b1NpgcdJfpszHuYfouk6HzrtJy8EcBLwiVZ6dJ5YYXbof1TjKLAfyXDMqKo9381eyJTX3fSbTuG2opXkb",
  "key20": "Z8eBm9bBE9519cLEnj7rWBf48n1J6AH9aBCHmw96sA2EpCNeho9Zs4a9jraMTB321WSoXjbKDmapcAuRkfFYvFX",
  "key21": "5xiMfvUR7pJpbndVUr7kBnGyyUzGQLFXsFn73Lku74zn45rYk5gUaThoaok9yUPMATx7M2MisVmAsg5Fx3ZZTFYW",
  "key22": "5YVA2E8k1L4ZKefYSvXokJwfu8gePyPHZ9zQdS1LAq5XG5jTQ76AnT2xS69hN9D2ffvHE8sAgRrcNum7wmtKtBUx",
  "key23": "ZNPzntjtHLdzRTakymRuats88eawEcafLSmryAQtXFvyAhNDXQ2Jrbi9pqamnBi2y7jBVCqdYoNTtpAcopKoPUo",
  "key24": "2rvdoT4RexPAH1QEBbKREke26HkJvXjv8PmxWtz8SxQfYoYdUx6vMGTSaM2qQSv4WQ3UriLtkU81Yjyimy1Ld9SX",
  "key25": "4HzYrhUrpZQiyBvSsuPwemCi7XVoWNPeQVEw3PSGCjqohrhm1ZJKrRx85mvMg53pXTeFCrcfVUFgHG2Xzp9PjdQ3"
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
