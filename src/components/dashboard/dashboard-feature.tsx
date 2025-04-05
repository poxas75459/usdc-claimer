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
    "5bd6YTzQoXLRgYDTorG8gxNXfXRpdqwqMo8TJmNMxhkKAvwnrLx97B7RhH6NKViCo7WF8pRibFEuZPV8rsiVyYfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CWA11YwnHUGbnux94B7BHjbdUx9NNrKmmwh6rM4Ui1Ynfmt5cpnsHJaCx9GkYPCEfSXbiCMes3sDUdxiqxxJDGB",
  "key1": "3N22M8GpedtnrqUYC1rRY2QUaeZ6Y9tDGh6UD2VCT7HfXRv8Eep1Gg71X2fWEKDEcPCCqCxaacjbyiAHvPdpviT3",
  "key2": "44pbaox6e2fZmyiqbBqKTx1bqwJBeGRb9RKNsr122z19DKYbW1Kb6umdoJKg6V7vC2B7Bpfo3et9HGJ4oTUqw1Rf",
  "key3": "5USA7qYqMkH5homaREuiRx6go1exWs2AWGCmpY63mkoFNTBonU3wAKf9cKuG7Yir8F5sQaXe7tyrjwdLpEM3pMAs",
  "key4": "pzLGp2yCAEduwb3EmBoEUVTN4KxuHfUReSMTh4HdDu4xX2X7w5LyoM8gwxtJ5rPGYYKPPZ3MxRj2mv5pv9yBU8y",
  "key5": "3aPVzU6xA8jAiQsPNVT8Kj71nvmvgdUe79PAvxRRyuaVz6NWn4LTFCtsDkXLp21ndopM3inUJ2u3jY6bjD25VTbw",
  "key6": "eaq6zrbyJSR93ox6Pm39NB9pAkmXEvaZTZp9a9dKj4Eiqo9UMRA4Mg5rPot63PHy8S3v5QbHQb7XLvqPb5Y6okZ",
  "key7": "3nYmU6Fv4c1fAfiHLYaAVxaZhMHPcefXRnZxuW32kDRNirUJE4JbzHcqiHChfEMD2E4xEM9469BdTAQy4dDdYwBb",
  "key8": "5KfFtZTtbiX4MEYkpCRVo92Zdtktb5uHow6BeVB9cadwmDjHnBfPPzXVgqyoMu7wDuC2jznL8j772V8Bhw7PtC9k",
  "key9": "2gqLPsM9pNjv83AQiPfgJcAzRekXuzhxhrxPkrUGFuXFxk96NYPwH7XBKUn3aVETLdKFHnCRhJqdRFFfoEfLeVKC",
  "key10": "5vJr723sHdgsTpbHxfEp8M7LozMPE2CeYkC9pDFFGzPJQnjK8Tenm9B1CMD43YZjRQYQqdU5pJjGW6Z5EKBoK7W7",
  "key11": "66BPvUc24g7LSZiCiZRwJvAmaop3QPxC2KEyRHSDHsx4Mik9XvJwvZ3AVLLK9kp8ERs4R1eZtpbLi9m8vXdkVCHd",
  "key12": "5a8N8dSRvheCp21cPLm4QLz4dnfWyGpfNwWGe3ionou6uN73oLKRBvQuh7JkDrsrD4SozZ2JkcGFSZZMUVyroowP",
  "key13": "54Se6ipdYV1muKvmjST6m9k3qaVPB2LBu24efcem7vBX448F42CSTFRDFapDsV28mrJjLD8kfw6AchDVB8NoirFx",
  "key14": "2xdihdaup82YBwwf5Jt2VQchderW5wF5YbCkkznh88Ef3FKH9f6aYatEW33H3ufjKzeTdr3xDbb58o3EHXBFYpLz",
  "key15": "2hFqhfpKkm4uYJPufTGMF7ohQMFjNvXJEE6zYMFpeEFfSpcv7TSanDaTBf54cGFKuQas9prBvkha7LXbe1jGGJ46",
  "key16": "46N1HTQ8U9hyv9j3mnVPvJDT7Z5ce1MLg87tPHDfgwc9TqLszwo5cE664dRbpDZXQjfvDxsJsho9DbxEYtpLYeFu",
  "key17": "5zE2yWARSZ6BJHi49yQH7WrMq4Ri7LTaEcBKQYWzAiowbxNCn3VZszvJDvJtp9RernXzkxawqKc88aLk6GEAirGS",
  "key18": "2MFW1LpfGnDKjPFY3wn9oT1PFYcRZMBiDoG8z4o3sMut8UfCzSFo8WRwxpsanmSutNZtU6Z8Dk9ZqG2mHkv7KY5S",
  "key19": "2i7ACDBHMR7GaDzryavNvtvb4px1nTB3DLVUHJnGL4YHKAvFWwH3Vr6d2p5DpjLxdCuDwmhAcs7mVRKQ2wbbEcw2",
  "key20": "46Mv4Lm3Ljh924S4Du3guXXMoXU1UzE3k1zRQf6TpbBvENGGDrwLajMsdM3s4vvUiNuct9HLk3kiyfsXpmw3DSR2",
  "key21": "DB8PdA37ZZzq9AB4WQJfzMX7gtERGEJAKt6qw87fT7jZ3AKStVB2xk87cWz9ezi5zBRfgrKLA9XeEeg6UzTyprC",
  "key22": "5AoxcjG9btuRSkBK4AFFzNETyMiFgrZdew8tLoPHEeoKgnk1dYR9GaNZU5vLcWJzPRb7Q1aM4a2tnq8XRT9AcPTm",
  "key23": "3WV22AhVaSmyMd2EivomYB5HAJxtKyq8pFcLGpr8B6gHXjL2ihskiFfQckS9D52w2njUrKmYKn9esW7MnrRF3UJq",
  "key24": "BMTP6eycC1uqpgBKAKoMDkcXJsrFMXgRfB289dkvGDPtH9tnsiPMYy4aZqewBYmyLHEAKevLex7ZooDroxYq9CD",
  "key25": "tJmxXudMJqAGazTCcnjo6ZL43RYkAH7KAg6YaBHZx6urC26HakQvQvZg6Wj9s5TT17kdT9rWBo7soE9TPEF9aoA",
  "key26": "2LYxuHwP1GWUB8KMznN2PQRS4Rxkj3ZzQUYQH1eAafptpP1Kmb3pKygEMLndaNAuNCsKYWx3GpSt7XJVS3yrkbU5",
  "key27": "4JQAFMWjAXWkiMUhp3sNP59KaDzS4uWxL8ZAmAQYNQ5E9vrqUuTeVxFkbtCnmJPAWKbmgMFG7VVGxuxfVZ3ziTPX",
  "key28": "5ABoa9ZTAmkXiUKF7CESoo42U7Uda73MDChBj8pKb2W5Fzrwq8vRkcyH1DU58XAdQ6hEnjfdNxY9AQyBXrWQVYcZ",
  "key29": "58VpYs6vZ5v71ShgTiv1ymC94sXD7DzzVRHi2pJcFYWauALTExBJKzAnMEbqvrkqL6wAVa7wJVbacMwyWgFZ1ut9",
  "key30": "4qsf68dQq4a2MY9KZzN1H3bRARUfUnCNoKt79QofuncxutNb2YtRbwDNwobrnjRsGRgSSVizWs4FWAagGfNz3CVF",
  "key31": "Trj35xRTth5YTDBeYoo7uoDZPyRDbUYHwWSiLCtyYPigP8bPD7hxrndpQvgojTzvtLJe4yXqohRFKv9pKBjqA7v",
  "key32": "4h5JzWRskphtWCmncJjvJ29pPFutdptKxag6ToC3hzRCFge4gjXnz4tfJLt8yyMaG5gzKyLWzN4qsNEFEtEmcoW1",
  "key33": "3BXXw2STCZjXwVVnuFU5J5NXqPHwUeJqrYcbTRdXtZD7PMMnBwLZX7fjXnxNyn3iyAFwJkXtTTMx8hkejptmSWpE",
  "key34": "2CwD9yMdpjtBHf6yMif9YvwscUaUaArQSaQtkzKqKoQvSAZMah4vVas6WEkwsDnuQ4Mw1Px9r4c9E5i7RkTSHBnH"
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
