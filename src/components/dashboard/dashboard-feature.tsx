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
    "4mkpukSB1FgZodmsbTtBykqdBRAdVWhVb1QESUNPQmmqCpW2sSypMWEkB3Rje86x8h5KC5GECxXqdtCeFJ2hfcTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31i4ihw8pmbESqSi8wH2kJYH39rgpMRm93KU8BBAtDqAMTxk6K2yCWiVNoAY8SQoSSprtJsfc947KHSwnzufq1uv",
  "key1": "5vkuHjVvAxfxBMxcbgCieQyGfYVAarC4PDqM3pHY9shjnf2w7z5PcsBfGamTXNiHj1W9JXLotkJXFSKozNKquj3A",
  "key2": "5RpK2TVgXdwiky7LcR9v7ogJZRLWTa7sZLGdjbKumwr9TSqgNbRajaDMoMi3rvsA3cJCfTMrdsgpuuLg9Qm39vH8",
  "key3": "3DkG1kNsKF1opmymajkVx3PhCh1hxNgpehvpcVX521K4azpW6w7dSYm4mVcCniWC7LFwmT5d45tYExLpdKh6gm3M",
  "key4": "34kFEd2rbGs3RCXi6q2G2WX1kbhFSx6EBXRtT8u2XPPrbJvYUoswB8U8Ukz4j2qorhU6D7qm65XaDGWRfxxA854M",
  "key5": "62DvfmHhKd6aTXjuCkpifgmGFNLQYUPoXnp2HFDvN1YVGdhQroGyYuxr16wohCL2LRZqSfb95c8mquFXv4WHp2Cq",
  "key6": "2x3bLddThDKVA9kNp21JjtnRtxAtnQz7zep3FDZ6LqqdtotagEAhyADLxLmQ5uFSHtJP7L1ch3ZjRtixgR8Msm3b",
  "key7": "43UZ9vnQ7GAxESvCsj37TfeyY6YNXxZyLa7efP5RrDX5gomzqf4z8RcsqBvYdLqNY1z9dEVmP8NbctyXYtkhrs8L",
  "key8": "5aXnYNtLmLYcTSrkmfXEwTM8PsF4LTupPaEKxkkVCtxucJeFsCFgoWvN5u8Q3ZgxFUJdkau6rHabMbCxPwFZGVgL",
  "key9": "SdhNPLAUx7HH6KSozwJjhzuBMzBzdFxxa5Y5fHn9ydrJLYxfbS1AYcFangEeWDUYLEMUesNRfTyyT2yphpXUWKY",
  "key10": "mZst7J1b5aYGft98s78DFFDbUh1KLY8kghgEY2sdjZtMw7i6q2kRY9uUzoaGUoumSREtac2ep92cFZi1tzqgKU3",
  "key11": "s4NM6CoXBhfkVnRfZNVKD2BNGzPrJZBhUdoJvfp2giFnm9YKuCciNwPLVNRpTHXNfqSKgD1Efj24LcRRiJwGNTw",
  "key12": "2LnLZ35mgPniUuvHJ6tjp7ABKdF9E1KxS4u7HzAyySosr57f3X9cG8ZiMvUKMYc8xjtVuncMY3BAi1R3FucaMyYk",
  "key13": "2u1uH8s7G87gcXwPRZxa3oY9Uk7KyujZ6jmZPfu3snj6Y2CEyhC3iLv5oMPD76wsyBpYwD188WhxhDZVRUi62jaN",
  "key14": "6tFS3GnsQJveZnrxQGpU5NSv5gG3Unk6FstgpF24G189h6wQPfvDAtzhLFLMfxgJUYCtG88bWahhK8BFaRtUJji",
  "key15": "49ZNptXG72N27cY7SvovYJ6J77zekZrERkdY1Zm3B9mCAny6tCyv7hBh8Nsffn3syYq6j7xeKqY6G3CNZRdMcHqT",
  "key16": "2Tcidz9VLnkmttnj7YpJ8AFYxe1gPwCyQyyXxCjx88YHy8tn6ycAhWt33GX8Cr5k9qARRURejLJQ7SAGGVbVr7yk",
  "key17": "Q4aT5kKcytF2YndUYQ8pwpJ9SbAFkb4YcsUpiy1C5WFs7JffECBcbP99Fp6sxJHpUNoiV17ZTXvjA2wvPp6TQxk",
  "key18": "4sJu6Eupeh6nK2G7tdTy4UZXkLxZmBTL3AzMMqtr5XzeY2Yvuv7WX188XnRgo5xr5nMJQEcMmCJnQUvz5ieptXhs",
  "key19": "2LRT8CbSh6Hez5RXfdqSfzmSpHjP5LeuNmXESU6meqtJVFEfwzetDRY5ZkXme5XUG5rdkzndPQcHmsGAoyoND9Rn",
  "key20": "5hQECNNzaCZpLpVRxMWAykq6Njba84VjeXF5QDqkgFkBwBdMUkAn2isXEAj8BbVq5oUc8vVkNWigh7MoPtUk22b1",
  "key21": "c8bveNQGGGsuKkDTXfGREwiX1ogDHGaH1GZHfRRAQvJ2fqcqbGxEpKPKZqoeM2RHs182AZyts45pGoixKDMiGxm",
  "key22": "2wzGFnse3DrAdGZrvoKAQfT1SPC8tNFdFwpwdy5tL18eM9dBoLBbjN8he7xHrRbWEkCWuXFA3VHphaV1e1FNb3P",
  "key23": "5hudiBG56jajvmeJwNzMQdLrti6ytuXxdk9bUgXYYJcucauG8bSmhVZnkjzoTNBRTVGDiGwtc7a8PFSaYz8xngcm",
  "key24": "2fSkfbDz15YA6UbP8BHu4WnbfmrpooJk6VsPsGwrW7nFxfWguTsmuNELKUf12dXM9pHtKxTqHzxFpmAzWNLDBM1J"
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
