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
    "55w2qupSekfN7oU4zUDE82C2QKajcaKt1G9KseFXbDt1zhsN45TXEYDzBMXFk93ARFzM68xSMyB9tNHB1RJi99Fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGkH8r2WmuzznXDEBRJJmaF3Z2XgC9XyNidCnKjV84kYVKEu7js3ucFE1JseJjUpWSgAMnj8Tmerjjs6DehnZrz",
  "key1": "2sByUCjCjthnh8mz121UgjCACMZXdkjpZXcAm7MdKToYwQ5bs18wSUoxsjCqrMrtsthwfZGogSrbkWrxRX2sfSm7",
  "key2": "2Wakwy3SW7NhbevwreLS9pTew3KHG9yMp3yNQXNPwYk6XKezVtTKkNKh6gz4UzAc6c9CeeTurVrckL34YUozr8QZ",
  "key3": "4YEzXEP4VomzxYCkt3Cjg68HyEUacobQ8yEkyYYnQ3dHeYgED4RbMRtHxQLiLodQDX8peRVFsXGZyKQV9tjnQDkw",
  "key4": "4xEEkM5US3pXPEYK7PrVgKkahVwykuEPF5wrzTQ8uoSj6S5Hx3bRvDVH6zkfy6c9XoREBKUN2XjskCsCUCFoJCuc",
  "key5": "iaVuo9JfxjMAdLDyy7p3N4GVybgii7URCTHcXUchbhyErXLw6GvRcfFSzF44n7HppnDGoYJ8puCTBtoLmq4i1FW",
  "key6": "5A9Px8e1enACTAtrndZDF6PdUGDzgWcEz9rnhbSiEFs33kGi75L2KdHyH8fmTngiHdLeywYnDzWsmq93eBDkggML",
  "key7": "nHVhUnVcv6dWUVkuSUnuYdVEYnoB2GM6s3EwbSdw9pHSe9f5qFPrYdXAXdLHG2cLmCeHBNoQUQLegr99nnWZRAP",
  "key8": "1wHNgCkCqsK4eApeXR1Dw2iYZmKdgbD35V58eboVVhTSTJ2RzV2qcGyFJkb4fUvGPKiiS4yh3PzCQ9b5bTR9jKS",
  "key9": "Li4RjSBSNy4KFLFDZjjEazjVpJbM2XLTLN5mPNMxqrkEeUxWCXU5MFomg1H7E1QJnRtN6Nsyn3Qe1erF3b6Zc6X",
  "key10": "4qb4bzj9umZ7vq5AaQEzFeDFYiK3oodTWUMDAYYWwPDkwiEH8R6fZuw213F1j6UMBfvHAhZovhWCUYxmpX8AjhRG",
  "key11": "3f4XE1AhuXxkYmKR2n4fpAAy8mzw5ZcUyrd6NrRyiYEqLDKMFgm9ynioTAgXmpH33kdCJPgczPTKUb4Z9Reu5y2o",
  "key12": "5ounHiFBkcRLQGTJ2vxcWXNKLPCptVt6byuw2CyeBvKG6DPzeLwCdHLz4xvyfR6jbqrn8ThpYCSyWLtR7GRig3mq",
  "key13": "5BLPzzLLfJGFvrxrtPAbGyZGrupSW57ePjUfLxqSm8pg5njwY8h2kTt4WUganirWWrts6DxebyHZHMbPo193DRMN",
  "key14": "5GCtWjF84GujEXnumM3x9YSSoXyJSqQPd7CPSdb5LfcjXovtq2S8JpTGmiXA2Kupj9hRb5WUuvhQe2pSGKSDLTuS",
  "key15": "Gkj7W9LHPeQBvM4tbcrpmdYv3xHdNq19yvYGamBpu76L9gPFukabPGXCquNTr59EwNcGPYk3ezm9oUVGeqhSZZw",
  "key16": "XCVhf8WYx1NrQc7hyFua1R7QXkDhNBQFTeEHaxtdeLJoGYNoP4dtcfKx1HRB4Ssjxobz6xCvBWx4zvBfGM2cFR6",
  "key17": "3dJQQTmVsmTGiRuQ42Ciq79giJPWJU8zRhpnnMUdCKYERrPEM6KgMoTDtTe1TSSpoWpfeEJPrDwrSFewSn8Eh1N2",
  "key18": "2wkwkq4LaXTppHZKxCJYDQVyhQXJgfhjYQpWoHpiUU34TCkbNmJv1rJhocGjjFZCj8H9YAzdfmcys3vRAMXSedWH",
  "key19": "dJ5EkqdXRAPrFjmLbiV6V8vn9beazE74GrFt1kWJLRP63daEBGrnKgY4JL1PTsbVvujJe7q1P9FXYo9yPQG7PGA",
  "key20": "BJP4Y7PpmEd5HsemkaKBFpJEV7bDaYQZbWFgw8qZFr64NUxPNCcKchJCa8FMiX3sFatneX8nkNvyavBAMxksGXw",
  "key21": "5gKwWf196cpMTBqgDBGjxztCodNrZsWzjFHxWSUZufe7opRm6VRNVSm2M2BN8hpXaj3MDL8qaWfJHX5bPUehATCc",
  "key22": "51qcBVmU6WWcfup5euBVDMvfw8hsWYb2CHkLpQvdPwoHvhsXcsr4jeq5FGWov4kH2fQvx2wefmrBxGe9frQ9hRPr",
  "key23": "385RYVxTxzJwAWsHLCfttAh8Hr9KwqwbtttPJvg8TzcmWac4uH6ikjSh5cLybNKaxnurPvuKC7QhVL3r7z2WRdEo",
  "key24": "3Ry2KUo4PAo9KWZFU5GRWDm7TfJuHDYynZ2Do1MeRxXCmhD2tSDzAq8ZaxZoCYFtNBTJ1mWq4rzy7uwnBBpjck5A",
  "key25": "4KmoRL11XfV1PnEwLxbC4FZQ4wmzG7fs4oE8BPPU48zXgFaLzn37AYxn5va9vBsVTBwjuzyKKoBGHrX9HjrwEJ53",
  "key26": "4NXWAVRarTzuBn9VsM8LYsiB6kCD35Ws4hY46pumSeXjMDDgmSLF8BpGowocHC1QS2m96cJF2qDj3CHtd6sruHjK",
  "key27": "sToLg8hUjkSoS2ReHjYmGxaJwnsJf43tNnF5Mygab6wYsF3Gv38xbfohF3itM4f2RhBUssWdg9gohx6baoZdvWJ",
  "key28": "5odpsBHhHM2fwT8mGnofzafZ71G4eaumeReA5AaLue1p6NqSuJpLxJkt5HuFPTVmYwYHBLB7Uh3G7BgkmMw19sJW",
  "key29": "LUwfVrbJ7WjDpbMNTFJwMRVBqTzJksxix3Rt1V9JeHHT1MDcYbfuQTZedxoK9ftRHXg4grdPgosfyHnneMKxyHh",
  "key30": "2jPu6stGtmRZWN6ZhmHffydzZxwzRzeMKt6vb6t6iw2db7zDPpw5JRHrC43gZUq3UVAEjth8bJWXZvcmYM9bSGGa",
  "key31": "4W9HDe3rcG24AiMF8TiQu5gpG7b6THNZ6SDXuYMXJb3e6SDUoZim4fhTEZfudZBvNEJSG1QM1EpFQXP8aNbZYWkW",
  "key32": "4UTiBc5Ga29F1J56JDZ6cuRnwC2zD2kfXJj3ASzztD2uhtYp3hJV6Dbvy7rZna88CcEWQxFf3otENHzCWnwMDFX6",
  "key33": "EqSZVUHyktcoAXGedj8QWJYETP9XicY62KZoJ7SHL8xWbztcRCXD5S5uEMpUxfNWcNuKvQc2KZmhgN17sktWJVM",
  "key34": "5HyDN7eod7ds62n86xfAUPxzWybXP4oY1EXGFg5EZXQZKKWQc4j5reBSei3nPHqJZPBThC9RE9epBpzhMGNttba5",
  "key35": "48jkx6qCnL9wq4Wfu2oZdvHYADHZXWbNrFcChoVbJrLJU7Vkot95Tt5VGKoKBfpyxFkXJn3NvXwE5RA5TAzNELda"
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
