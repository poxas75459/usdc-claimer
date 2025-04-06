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
    "3dw4x4FFM6HkHomATFrPemYQ1bBg6Lgf34AkGaCdQMNspEH8u3ZPCK7vqZLzQKixmTrNpazymuUxwerWUbrtj2Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TbxUsbbGKQGcPBUKuibfLE18s7ivJCnm3QsAnkXqLrYj4DYFRtJCXGEdJZioVmtehCumRHj538vZCMYxxcKRWJK",
  "key1": "4qunpNavMx9Fk66xMzphmauw93VqJ9KGm1YhnRygXcBQRNXxxT6iAazhzuvJQBAqqWsw1SLP5V6tA9BPrLPiuf7h",
  "key2": "5KaoKU3A9UZnKiyxLkojX8Uq1HnQ45ZVSjvX9NZHTYXgdACZ94Vcdh2ZZNh7AKuC2NZtCdY46BUpynoZpK3i6sYx",
  "key3": "5xSh9vyCy8zxXTrrBS9fCuotTJfUPwDZwDkKci91Hz9H9CFEN9wN7yeGKJFgCgYQWQ9Qm8T5UzczYAvSDfjQUCQA",
  "key4": "2jGBB37NeJ13JgaKVc8dA1WgNPcBe6bPpKntNqs7KnsdSFTr73diP6yvsVANVDLcyiNR3pNzTucBVvJ93UYqmzDr",
  "key5": "5RSY5zijAFTCMNoPo5tJSZfsskcLrKd747p9AnLjMz6VdW2aj3BBNPWUo8yywM4DSKDcFesPnvdxCZGwcH5EsXg6",
  "key6": "3oy5nKXyFPPEgrzxFdFMXh8ruSBQNGNwnR5vZfTumgNiaMeC1uQMJYPVLqydUmu561WavpgEyf3jqWB5zJwKVM7x",
  "key7": "33X8AXR1aajLpXbMbenm1Y4eFhHZpYmEpFiEcSRMS78siUy75uAYJAHd4d2oA4YHvdhTpst3ARDSufGF6QyFw3KA",
  "key8": "5SVQLF6k5c5Mx84fhKZwHW3d2oovex3BH3btGSmpYjUnHsLip44HJ6PR9FnPJg8ERYDkHvDNLPPH3tHSAvKoBGdz",
  "key9": "5Qy9A84Fw8RTF9dLgCQqZ8tmiqPHLGZ8FFfCjT11djfUadV9qpZvtsMY4t8qJH96FRwRZ8cLQ4jXkNHLATAERVJ5",
  "key10": "2ZbDid7ZjSk1byN45U3Z8aNgK7m7gTvaQs63xKS21gYy6gUTjicHC4L8btg9kKMTk27Dc3McPuXxsV649FL9UTFt",
  "key11": "2pqgmbj9mfuWbNgLsjiUWqX42wkRxVhpjYN4Uw2odQYzotu49mutcePd545VejfV6kpDYD4aCSU8B8E59Wnfb236",
  "key12": "qQ1Fxd6mR7JU1CVmWk82wbAm95mpzV4MGMf7eCTCs964w7NnZgUkQ47YfA9n5vXci9LBQEJ8hTotP468qwQ8d6v",
  "key13": "FwhHhdincddwZikk7kqRazzL9cYG26fbVRdYS9TE5BQLXcQb8Vt9bGFatm1VRq2uEyxfLr5rfAENV9xPDq1fwHe",
  "key14": "27gWBXZUXFcCYgD8aeMQCnVSiXz7RVTuQ9aSLQGrYJukQSxDRiec9gb1FJduTRTnPpUZ5THh9U3fpFB6seqAXtyc",
  "key15": "5pAUiUN7MpTTvYmg138WqgUZaeJucTkWpH5LXHhTBRB86e7K7x3qmMFCqmBu41psVVcR6AA3AZiBgLXqUw5ofiKL",
  "key16": "3wBDBHs7qrBhPoDW6ZX9cbH3JvnomsiQKk3wymka9bfi3vaBaX6MP2CG1DX1RcyBoEFazAsm3rdsodcvgUKeNLn8",
  "key17": "3SeuMdvgn15WXqdYomKw68JvJZfcxQhodGHbAFVPDTfQQ8JSQDVFQHXxcztPmrhYid3995fAhRM1RovZotVEH5YW",
  "key18": "2SH3KB2a9mHozM4JydGgW41kbMsdQydyLhBBsFqomGiMEfm6XkrkwkcqW1aZt8ggRiBNKvbiRG8j8QzfY1JmEn8B",
  "key19": "2u6XbY5MpLu9r2R1GU3hDxcEbtG13RcWfMjuQD44uHVzLPHtZBPdJq4fukXC7wnS8YpB35QUvLTZxa8BMYHFJeVt",
  "key20": "5Domm4cjTa6SSV6RiWHPHUmBzTqeRYzAgWpmCUCtCxt6dPcqnhGZjeDgfjLwUzcRACHAHYxZJErnzf6M5CF4UKdq",
  "key21": "3Emy3anGuwTZG4ryf431h51o5VbWChovT1sfTD7hJx32syWHjbLRXp3aCi2BuLzpPj76Chg3BvF84yiS5eM6qztA",
  "key22": "2GYRuVhLDG3F6VoyhvmtFjGFx3WnZy9ya2suwNcFJN6BJ18NrBCqGNSgj22A3QjYevV1EpzpQEzUxcGcUwGdTnzK",
  "key23": "3k9o2997sukMVQiup1SdNTqJX4ZVhi1JgoxjpAuQ1ibux3uLqPQPYSnfjuVMZVSCYz1M9FeCfgKGrJ59dWhsKCFq",
  "key24": "2bmFj2bti3aVAVERkDZcrHwXwxCwN8tHYts7LVXmopPZsWhNUxmf1u2TfLvYY7Po38oXgAy4XqR9pFjgjoHEwGAi",
  "key25": "F9yQghuAtViZo1MinArTTMQBzdKWBuJvQhf4ZnvqrQCFzdxwwed3vAQFcZ3pWJETcQv4jvynYu5WHgXkVdyVHkP",
  "key26": "2ftcy1gU5ajVVXzX1eTjq6MKsQphXZC161dpBze443xLHfTZDcKZsjrt2Qd56jFGy8nj5kjgR7MffHYMBW3k6HSt"
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
