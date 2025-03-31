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
    "4mXCK6N6cYXNf5U8eYNUZBqVg6Px6A63C3yvdGyQTbvpmx9yAYzcHbYBTfkPzJzPXua8SJq1ZibSQfT2zoNePDLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbQHGUxr1qWnRzVBFVdejVmVFTCa5KS3zMQ4GsiHijvGb6yDHK9EFNzcMfw44heQq323fNwrtzM6cVvcwJtUqpx",
  "key1": "2zRPEK5egEnqxqA8AnStmbpvjbWKKxGNA5qtCEN8UyLZbb2R6GAjiexTX2dRj1YtAcnHdsmkHinCu1Xy44LjcsPA",
  "key2": "5uF5Awq4keVmxqS1NL28AMx8nnSCjQSFx67tzRHTbUqYJdXUVgWNKZth9z4LPmWbWofyDgwmLA8qmotj8bhZKR5v",
  "key3": "5TXmfvzU9PzCm6h8xuaEhcHfuDWUH2f7gz7NAZvgr74aCFC5T2kh7ceM5Ages44xmEkbqBWkQQisi9GagmFoSY6m",
  "key4": "4grptMDXwuLiT5cCZNL7jrzYZufQqm9LAKaFJZw4UxEnx4NB6BLUoi3fG4ucRq19ETESJwE4xH1vAR4iGisy5zNa",
  "key5": "3QSRDc59mKLcGvzKSc14HE8ghT1UAZ2Yg5abwN2sdsj8RzjPxM8CehZJVmYRAoS11kjuLzcvwEySHczG3LFZ9KpD",
  "key6": "43ALXKW2RYafEZXp5JJU68TqguB1mjjzWkXhSB4xNk5m3njxh9AvrGSxWGBNwDiyutYT1jgHbXMGe39V27LBeZJ",
  "key7": "5P56kRXUwotqGK6WuQfRY4q45oRVXFhapJpeH2hg3ahGV9pXvyY8UQGWnnecd5ZPD27aA3qao8dQotdvoeuhC1u4",
  "key8": "52a4h2zTQpPuZQo7qTLE2mP78AqJ9NDNUqFMNZAz3QbkY6PtnrVEQ295iVZ1u6SwkdbnmiY5fqc4L3pvNnd6oGT4",
  "key9": "5SQnwvm9Qmc35XUwEt6UffCVNgx4eWu3LesAWHZHrwbHqsfUF8ii96uEmzbsVh9SvvkihjweGvz9sWXhd2habznK",
  "key10": "3XLC2MtGZ9NYqZCrJ8AN7YgnGufwuJgrdLwZ2Hv6jNtHJajZruisuM2e5btv1RrVEqsxzmjqeeZMvJLkKiw85bdi",
  "key11": "57ri3swRNZaHeSmumfScgjb48g7aCatpzgjzSuJp75qTzPCFy98e8s9RmcXhFp9QRnsT84Y2gZ4jBRKnBiAd6PGo",
  "key12": "2Ngg81SfjauuFmfHrmmi4f5qcoDCwKVu4kyB3Q1cMNPAxtBNvHEP5H2aFxnT38Bb9bi3peedxeMDFaNzoE3zGu6w",
  "key13": "JETtCis5skL55yPKsZgV9YFEztw7zgW5qjA6Hz6QZ82PoQCHgstXH5JT5xreRn2cD1Vjt8e89s1iU9km2KYemSV",
  "key14": "j5NUdhHcfY7x6LFGGB1oEa3y2UXrHFQn57WnoGqE2aX3mQcNcbCqZEk6UgKVvXuc2LaDocVrd8FvvDiZin1cqx6",
  "key15": "2VdSBvjQHQQHHMXxH83CiuVzqksQSdjSNXLUpoKezNMdBVQnWcQzxYiSLinX3rqBshFqRQbueGe1kWvKAQ73nKx",
  "key16": "4vAUMGGxUNXMwVM1nav6tCxFnNuspYqaX7oVT7aYPFBkGzAWyc2PdxUwWG7yavzeZrRiJKh1vnx6cLf7ZB2EyZef",
  "key17": "26f8rrh8DLKv2nRHKE9zuRMamRvAShRhsAtqQmt7w2rhqDkR7cEfYyczoxyEeiT1DK1gdE96r7catE2ghkrCCJiy",
  "key18": "5xdouviW47wnanhsAoE7fCQ75pk2sv9trRHx3zq5vcuZGbCJBdRyX11NbXEGR9XXsYtJpjEkfe5CRP9JCNeJPLnp",
  "key19": "3DcPSCz5djxVPpUbs6oTRx3yY7Wy3DAGmedCpCYYqQL6RJoVoRx5psfjoXe8LAZQACk5Xkv1zAr6RzJtaUR7J9Mv",
  "key20": "3dLjLgbb6sS49snpMRaFmAeLRqux4i28xG7A7EDsFj3BVYChaiJHYE7i8BCoSNEaHFFJ22uDpVkpBkArixtMHvDB",
  "key21": "5NNXvMiHH5r1ocB2GUQnHxSwrbSxNaKDGyHb9w2PKUqPgdZvaGsbUfp5rHwiZoo8StAwLtFUnaWL3FbyQ4xizS5a",
  "key22": "5B4f8i4GZdGe9hFmJ9c9AtcBwjh4VPrZjSFR8Z6ZS1VdKzHMJfykfVK2UNWmgEMKSyMnSk51YzN8f1v6BRGxPr2V",
  "key23": "5bEs89jkBm8Yse6JB7q8zc7F6xTzv6r1JsmifTTTDMUznGaGBmW8rwoTTrAygkRuCPt4H1A5G2LwrLf4pL6GtvXi",
  "key24": "3yK4VoZqzTgwWP9LazS9RXJkeXYLfd5F3VDMSQ9nBxuvTbpsgQ19CnYucSm7S5oNDR1vfPitVGs587EoAQZVky3A",
  "key25": "2XbxWJEJiB2AvkoULnfR5E7LqqoBLgB7CVXGjrrgVoUeSYKG5qhmWPgK2CG8vHRT4UxCifJEFnmZRquYYVumacAC",
  "key26": "24xku9T9aE8xErm1u7T48yT5SAKnqjBJB7y59WzCEiaW5hStiHc5auKjsVHNPtkKie9yhrGtTEKTKFid6AGFgazv"
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
