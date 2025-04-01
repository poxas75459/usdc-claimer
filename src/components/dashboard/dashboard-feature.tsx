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
    "HrKiHqUJrGwjCTNVE6F6HUbk94YCL6ywJ3nPrspnWBSwsyr2SgQYpicQeZgTuYkxyz8MAeFBUds5MwcSZ6jsjgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X2x7FWEsW7wFFcAboEkhvR8CFKLzN4Dt1x5UTuFiVgWfxsXQ62yv7WyLekKhyFxZotjcx6Z4sQZA1TsqCmSiZ6K",
  "key1": "Zx9gCWwERt9BvnWL9wg8dCK7X7YJmUmeMJiLLLY44GkLR7HSStgjcZsuL6XCbZVyT67uuqQYnJioxFa1oquULdz",
  "key2": "pMctruJMBKkCgM7Li4cdkjziuHL7wUzMpP4gRF8X3ZmxfAUtcjuAUtZmyb8dKSPgax41nM27Dzp5nRsq1xob6sx",
  "key3": "5WJDBbC21NV8r3jT2ytJBtcaRQe39d4sb5CkXnHryrQ5nADaaULbEBRSwup7E7XK4fVJvdFdu5HfSfPQqRqfSX2P",
  "key4": "4XhuF5zebQSHpreszEoRqGh911qKkyYzKjn8T6KzRkjQv25p8VRqkQnVJgW9H1YY9vC29zUcAQEytnkT7tRuzFNw",
  "key5": "HsKhDKTuEYtSdBf9DxrSoFsb3SdfCZQSYm1VkWvdZ94LQPDXJFxqU5LYWyXnU5K7RevXaMZCYjwZtKAj7QbiDTv",
  "key6": "3rfubkrd7A6or8ALzP7aE596KFvSExjxaPK75Rd5WRq47VRKzyukbhnTwrXVECoGbb9B6zZdR4Jqg5kXZBgEWEyh",
  "key7": "ny8RYgoN7DF6hVgAes115J2XpMtRUfu4J9vYjVxYztrFtcWGaRvqQWZCFinxAxniqzANeLz2dMaj4Lrtee3TBaz",
  "key8": "5AfbLZZZ4bYL77XJtYZWXSg3y2k5y2Fae65RFGKTht68LoTmWg5B3D8UnTaPCBNK9J1gYLV18gLSPhKH6W6hZp5m",
  "key9": "5pHPXspj7cmiMtewV3JoFfQ4U11dwZLXGyzq7B3z7Edsobar3LTuF98f49DRo1Ljk9Paigqm5CqdhUcSRZHQQBn6",
  "key10": "3ycVj6QgyT4a9pZX7MoCFFsgg9xJiRAKg6sZpMauyj1FCTF1vroGi8c7wYZRrK8otWB5XRd9Yoxe1zDs6X3gRqVP",
  "key11": "4gSVzJ6y3rtN1ZjW3J2T9KZh9v8uS9wvJ1ntsVjDf7NcSm25EVBL2K3jfai82midXLuv2cM6ZEr1ysEs7QhTLPnF",
  "key12": "2XEdFg7Vw27BicqrQD6NFS9jm5AEq3WDuShJ5hLJMcxw96aQ8EEvbAoNRtZSNaxqt64AcubNR1Y6728V9J3GTX1v",
  "key13": "4vAnVgrEhcUj4xZUeXhu1pdXEZcKZHXH8dBLyChWRGnbWfz4X6uukaA8P51BYEPP2aLJ5nAjRUqoRiCA8cw2F5hy",
  "key14": "4y1xXM5LosVzyD3htCzg49MLkptDRULhvSFBkCH3i9eCvRLLxd583YkwesfdpFyrwc4deMRRAR6pWSr8Qr6fFJsH",
  "key15": "4zaMQYuoy7dPQm6QiqDNC9eXWc2DhYhyzVms33RxeeiYhMrcwJyDD7VTrqkbyGi4TqUTJ3pwFyqdCUJSZxarFKpj",
  "key16": "u5jNBd9kwGXHRq1eGfgbtLagFY4rtAtzkyNuMFUum8MP26ebXGQ9BsM5JRdRExrW73ihVrof7jiKxgQTo224Nbd",
  "key17": "NpX94riPzPdYaLp8UvbGKiNCdu19yD5p8NQQET38ZMibMu9n9fVtWv8FKSmkSgmqCJkCmxnCL7rkPvmAAw411Wd",
  "key18": "2Df3LMBL7szH3aHZxV2b9cd56twdf5kqPGPkruN9EjDob3Dj9dZmi4zS1yqUSKqwN66SDanbiida4nzrjyHGNPci",
  "key19": "3nYSyamWLg33c79vbb5pXVrkngCdemDfv5B4oa1TrRbt8bffTZd3oT4MNsqaFZar9Q1qhoTRvs6bdRwxXBw5Ybtn",
  "key20": "321ZnxQNte3cP4BFmrM4jZLNu1viMJPu7FnE4CpAUiahNmRiHgfe5kQQA2qV2CmeU8tGxE8jajiMqTmz2PBstMSF",
  "key21": "2CTzS5ZJ7TS2AznciMthJvH4KqfNXwdFpcDPUAyh6Fd4o1SmtVfAhpDxrwdyn3RLDRcAfbDw1cETULx61oUpxi39",
  "key22": "55WZTA8yhXTTd8d1tcmFm4LNANp1C9EVKsKZKdMeFqaaon5Yty4VNNLbDAr9HxRBCkzUgxYsKcHEGBFtjkFqJcyX",
  "key23": "2PAPpAcr3LKd4J9P6nLSZkCX3Yz4J7gYFuNhAToFKKudRPLM2FABvAH7ntozgBeKNkdjSFwjLTyMqFCyXQZTKMCm",
  "key24": "2u8FwgKR1tKV5fixBW9tYgRemavRTNXsxtSd1zqoNJGDGsVtvnPFdSpAFhnjsFsx68CP1Zwb56TFyzjBNsq3K6qT",
  "key25": "3HPNvef5YhaNEPSsM7cjHm2b7bn2kLtVpv8jSwwViXSnxA8WfaRRpa3dKvCvwPYKQN3rsev3n2VG5dTSYyb999hN",
  "key26": "3iYCE6FCNQh9HY3pMrx7FpJ1U5cauUVFHq7Qw4rvzga4X7q1Nk8tECVrwNpsraqvmMRr5fnn98N5B3xAscbFxQoc",
  "key27": "673CS3DjRR14ZBko4Av5CK7EVuBjhCTzvB8eikKYspcm5xBwtVVMoD7BL2i4GbSTwdXHmRDuRZZdQPgbZjePeHJf",
  "key28": "6252N1ytoaJKCUTroFouPUGszEV2xFfX4tbDHJBScB6kCBSbePEvjGSFpiQchzE4kNztmZHGhZ8wZ7ocYwjRMHRu",
  "key29": "21wpvzoJy65qB2BdbwG61nRkkxEDzPvBgfhPSSxdzNGQ6UGDTAa7nJupwPcfp2UB5sEeZiNhHvdbSQkbaVYrvNFk",
  "key30": "4cHSmB57B9aeqoiUfMWzchdNd2ws7PphrpoNuit3hZbZUFKFCAUFQiGyP4BfsxSxMgGLTTCzEByG3QKE3B2AdYQG",
  "key31": "2GidJijoqkzZj41X6sjHyHYWAPh9rFjTjp7XErSrBQsfZ3rMoRDrrVWP1c9kru6dH3fT2cAsPK9c91uv1nBi8jvS",
  "key32": "2wDhieVmHhvEkZRAxg8AFCN5SLDUHLDjietbN2aF8hUSwj5NmpqLbz9kc6Q5NC9gYsnFhFJiTjthhHfqrTPwYtRP",
  "key33": "Z6RqHJhpmDkCSqvff2S1fswXCVPwghywFXnpHoR2T8hodxEqw96rmdzUgDWkzr6MHT4WresWQZqKJpD68LFainb",
  "key34": "4a5xNf9Bp94ZepzQHJi2Kze4j4mW9Mwb13NvE9wwuhJn1tTRtrkuVcr8YpjeTvYsiTLFnCQ4NQi1zCCqLRSeEDnF",
  "key35": "N9pMnaiodHFrCW9zverQ25yfndGrvwEF2pdNxok8CYKxvJJW7AC5HVd484aBPYTCJyy3psUjHqPDrAj6Ro1g13c",
  "key36": "3NPUSXeZw6HcYimQCsiyfuRDrNPzUJhB48pZgj2vYMzVdGjvpziHMoCiThXPBb2We8nbZj36ny9oTJWcqs4X6FZ6",
  "key37": "5VJoTBj7P6VGpLyrH3Mh6Z5jvBtsFo1fp9mSnHb5EwYrypXSwNpfEELFnCZHcnq82pSgwTv2Gd23woikDnJht4HP"
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
