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
    "558YPf4h1Mra8GvXboxFueVtAbE1iMggpjrUhFstya3YfxMPc3K3TR2WwABMarmVX8uQRCRPKjsvXdtS2bbwoJhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EAtPzwcxpWDBzExTCrtob5rfCDKFmmcwFdw9vQeZmpCsGJUXm4HHGSz8C7u1f3YfEgrpp8xbX2aY8EE1kGCQxxv",
  "key1": "DjneA1pSsUz122nqg5SnDatipuqpfoBkZ8RUhZ9zcpCcaoqvDcnUyywLvmjco5tT4ZU5eFuXaD5bFbmsxxR5uSC",
  "key2": "3DqX6VfFxKpP2fXwXvwsiS5aK4FDosTGd4A4HAwZkQrLXLtPrrMAMDHTj1sNoEnFfg7ZNws5VCqfGCrRtw6mW9yn",
  "key3": "51VmWZtriqkMdkXujC6m9572nsAGaTcVtZnQPPcST2wYvkh9v159jYfWM984ugYj7MiuwqrouRBxeSDsffqxPVMQ",
  "key4": "5QZxUFHCk3LrPjgSTrsicujMvxu1cHnyvUaDSRcVJXcKKcuN4DJqBn6ztaWWMuMrbdkCERvzWJPYM4xeGaJUQaXY",
  "key5": "GYFctTEtLfDCKtDVqydowEyBfhoQFSsjtnFSQj5LPMPY9Y6XD9H3231RfqU1dt43PDZqQYxyLiDtApVcvVULz3B",
  "key6": "45JFxWgnvai51LHqi5E5GpbNAGH2M5CQsGrXDTqHGWD47hwZKuNHe546ePVuQsxZoinzLysCNn7fTi11S6rz1JEh",
  "key7": "58bzirGGX532wYWQXCgxxAWgdfHJPpVqFcwktXkvkFbm22hURv5fGnHawC8SLQSAvb4FxGdP11mkeeBsU66xvr7S",
  "key8": "3kyUWW3etD2SvapXRSJGgG5WR4bcHuPZgHUnMmfhKVjEaGuQwcaU5BJZzJ1E5t2xYt8NsChoTtGEzo9CxeMNYGMQ",
  "key9": "3wJ6LuFhbyPtXQctr1QxRbjR13jtGBxfM5pLG9nCZDTLA3ZASdNZaK8Fm6J9GxWQtX7VXcr5sSyFSb9NGsFAqbbg",
  "key10": "51ixVgBcc1E486RVJjDgFcbG1xGkzv8gev9gcMU85wT5ZWhtwCgZRE4xwjfiEGaK2LXppKSX3VZKXcyjmDgJfAtp",
  "key11": "2yxQGx4iCzNhV55ykkW879ecDC8iXRkbaXSeE8pywhfw5z6o6uLAoLdsNdya9i2f8TQJKrCFQtwcSu3L7mU9JaMb",
  "key12": "399UQZAGSj4AYjtbrYpubrYzokjf6kF5bvDcXF9oRRVXH1YEyTqnrJ2iCwe2uP8NftwUt8SNXx13JyeNTWqEBjni",
  "key13": "54ANVfL2HefpFZiL8ND4gV6ALUG9QnvfZaAPGdEPniLz66mfhapidXp3EHafv5oEnAGAwuMstvgJ8osAUqKHoGom",
  "key14": "4rzkDYHKd8D37fgbYJa1EQ9M4sFYBiCBsfe7nTvdTHEGhhFKjS6ieD4WyxV1V5D9J6ohbzyCSQrPqtR1HFARMPkA",
  "key15": "tEMK8Xzp8C4yYDCt11As3tbtUrBjJVAWdb91A816kUz8aRXzxrjC3BJfDRYxTzGRZChcfhxt3U7CYr53uBzJ8Z8",
  "key16": "2zWQweYZ2wj79fRnNa8GL717DMbUukX3Eb97EpJYwF6x8GthzWobHfyAv1QrfB8RaPUPzcaVYRbNuiY6yLrkdaw9",
  "key17": "5Mv2NKiWj3iqrvAG3H4n3Jztk89z772fMfA4KxTdxEg6iQq15ZgFTdKYio9T8YhDCSuk8aT6C8PTe3fYLjDDLGUG",
  "key18": "4ZsgLExKBigrVCfgzoYn3ZSegmswdUkYjzmytBvBdywTUFJ1Se9ZQBYjiHAizDTVUW146r9HBfuB3FcuQraeYdjg",
  "key19": "35XR4NLX1XApvgyh9XXH91dPB8p5ichMFXZzC2tfAjpryx2gUEMLiBmb74rTNPpQ2FZUTyn2eQe5VKwbFXoMiQTJ",
  "key20": "63F36z8PkzuCvWarbRdqDWn4AYwsKbBzC1MAfghntBQ7UaptZ4YSwYA81HwQbbMMmymhYcT627Zyuc5TKDxVH2Cd",
  "key21": "ztqGrnc8Q2vTgbD5ZcmEHqtJRNquTgiBmeAFPQnFA7zxeCjPFpb53pkHaVq16g3jcasjD6omTjvDaJJwAb4BUAj",
  "key22": "3sD6K1UnW8yopd1ZwdQ28YuAy4VvRYB1zwNgJkA1U6qF5szGxRijV4DzjBKyLvv9LKuzE29W8J228boPWnoDcy8S",
  "key23": "3Ergdgd16mGA8QPP8Wz9pPXjvBZpdwBCcRwA3xMhtxMTbaEYei3Hcgbo9HKGFuoSfgvTJwVKUizTNMHakeoxe2A5",
  "key24": "4wXUULXD3GzV5dbfXqJqCdvWAXToRH8HF2NC28vPYWoB15C5r5nBFtDt7nDoN4tU1phdqHkLxaqSCk7j2kz2vyZZ"
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
