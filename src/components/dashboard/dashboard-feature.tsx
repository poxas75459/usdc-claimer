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
    "2mXBMtqvAZPjnjG8cpo7NXe19A7hZmnUdX9uSh7qXxsdhPYoJWMjfXkeArF9GDWYV63o7UX3u1gAw6GFFzaUG5E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UcTpy7MAkPVd1W1YnGyWD6wXLEf6YGgixP9TC2hVmpFN1wQ1mwzya4i3jFr9D2KtLxgsuioUmiycJCt1Jrn54k",
  "key1": "2dCkC9TzBGQJqETGBwnKdag1524jCVhvtTTf2RhAwDWv6TQ82J3wYJfFmD9ehX2Ayp3pWbJeUoLuUGyCCpskctYm",
  "key2": "59ZJkJNzzTKfgg7VfCguvsYdhz5YEAY8u6aZQRmKtRLGQGS3mAyTKrVbaYBPkmtJpXiAcqV6B22vzoeGVw76FkP3",
  "key3": "3mzizBerLiuqzKivAwcZPEDYyf7EzpWf6GhxcGBydy15cyQezF3zSN1LToATvayZiYVCrabVprLvgtGnXvekRu1L",
  "key4": "42yJffzHBr6NEFm9ZGS3vxUzqfuJRnwe9i8Fq3UzrjJeVEZo1ANRxgJAC6rpXQ9XoXa7PkEP5vrsaZ3T3Wyi68jt",
  "key5": "66d8T9MoxDteAgNxSezBF8ZPfaDjQceTKGcskGzTY6c9JyzbkDntVeXApHqDo77MjV3WPJpmSnzoj588y5ZvkhuD",
  "key6": "qpzZkoaZEnWf7D93NthgExiEtGTPK3J3HbwNFfM1WjTJ9BDB7R8gYfy65km4cMqCGchPRfrvnuQN7qUU1vcpbo5",
  "key7": "qvJz2QHRQg6hfVztHP8GgDG2VXRG9ocFCkHmvr79Q1HvhWKtsU2MRcmnXEVsviVFrYkzTrCapbVBbF95VsGbeGj",
  "key8": "5xhsjZQa4HP9Rrxzqaava6ReVSofhJ5UjswCNyK2xmUFpcNp9V8ZXzC3RTBQqhHPJHL2wq5rJnHGHJohbrg86FbT",
  "key9": "J1HUYdeyBAW7AvDqCuFh2AcJTHDNF8zbpzULJdwb4nTrHnRSHEf6BpfcV3x1Fn5degy3CkHoni5tVZqdzkMSF6F",
  "key10": "5WWHNV5FDBtmCeh1DgMh35yqpCJctY2KTrfvGR1vVvU3TdoRgmA27ZHPZCJbeAxpZd5fpxQTBQT24ZwmwwyTXJt6",
  "key11": "5A9LZsXH4M8jDBncQYY7LU6MuArm9FujMxQ4G1md5RHQXmRDSQhUSrdMy2rsF3bsyjnp6tu3HggPLHoW9GN9d8KF",
  "key12": "3qUnBr2ZLH5nBiCdpafFmnpKfwR6Km2U9v3qiVzHdZQZUkj64Bj1TiKyRvPCjxNSM2FXHBNvxxhvmhJbSnCtVnVT",
  "key13": "3DfShRNeZYfcyWokDCnYZj4NKbFvqZatKdEoXkRjSDsHEeS4MtegeRvbsTM6nc6th6wwfQHYQotXfe1RRtwGw8qV",
  "key14": "5jos3ErEASB3gnbue3dZvpXjRLFvTLEwh4H8DUVebyXYr9bwkp8FjD3pZFyFxj4b4d77bgMxASjS1L5csth94Emw",
  "key15": "5Hjv1gybDTRZqDTE6KmVAJDqtModGi1pTmdkcAHuAQGtw3NU1Gj7hAig8uRc3tFvvMWryrvq29h3oHipWTYJzsLw",
  "key16": "4849bWa5U92bEqqCRbfbCoM7u8jv18jhVLNDtDfybbePaue4jNJ2g2efus2eUkq2q6vkXW1yCqtJFA8684FR1ZMJ",
  "key17": "2HTPSvPcUxQXjQCN42AkXcJCgoVuivLfzMSKVrvJS5Ep7cQreGfDQc2FLBkcrkMySsx8qkHaPUPu6WPWCEcyPLnL",
  "key18": "2mvVeX3uEbQLfiVdiifz2N7q3EevKfRXj4Mgr5XA2uYrmmv7NxMNfE4hcTCihPgjXYXJZdaaDGweaKnNMrrrLrff",
  "key19": "kBk9UM3Ss5J5c3zF7g6Vjnq8XkQ4MdbcG522LYEe9gXvrGWhZarFB8mzNoKsAWo66ev37n4zDPLKiPcFhikdz9V",
  "key20": "529Up2Ka6ZxWMrPENPNFG4YYUhJp244GRH3HJ436RpvcctsoeP9U2ckkY6z4X2nC5ZxkXZwHLcNymMLQvDPcxUW2",
  "key21": "wZgSv74PueedzJ4pxuVPDJhRSdeyMovX91Lf881kbPUY2r9NzV7xGh1N4sg7vdZsiG5h4Y2zZqFqUDtGCDx7vKa",
  "key22": "usVoRtuiPe6USRbGArLCEDPufLEohnGFfkbEHdepFLb3o8oajjAVt54m2BCze6KyCc2rZrpk7LGuzebjuj4moav",
  "key23": "5KhJHCPBuQ9qEaPmTbXynRvLZPU5uBcJJ39HF7PtZVthcArViB77qhW61YfeywU1eT1EeH8qjj1n81cRfZnrU7kq",
  "key24": "65mRvXyVUdGxs6bUXJq9F2CM7iucy5BdcNQL5uGXtAWr8sicpWufJqXwuJ4XyF25xPGpxbAGLBqePy1qxsZ2Luxw",
  "key25": "2qhZUCGZZe1WE4MZ1cxYeRvThMSc6yZfzauh2Bde6SCXPWuw7MzsbSca4Y1pdkf8TGQTBpBPtwx67pGtY8WXW81o",
  "key26": "4xBAdxfKrVTSGq1qKdritLGLomb8rS3NrkALzvz9rcWMuawML5CGd6ZSMLzRx5zquWv26uzxFyPUZrSth3U2N4qm",
  "key27": "38ZhNQ2WXXTT6Z7H4CA2thySrqiJydLypTU4t6APjDwBQg3syUqMnmKLchKkCQnqamUXKMQxyWJ8ULhWjv7vuPat",
  "key28": "23TDixWCu9jBBLgomednpsXtbo3mfzGrbb3rjjUws1BKr8Qi1zDrVyjtFv81HFZaVm3hexoNgnurvExRGgrbShw7",
  "key29": "gbUPWt25ipRF5o8T9dPQH8wV5uGXEfq2gUEUbKU4qEBXRCRc9aGe8EnRhQKrGPK6weKkTKnmyFtceqEErJjYNfq",
  "key30": "53sjPTARYGrFnxUnuKveLxKBEmrj8ZGELQP5WwvaGR2Y4fCiM8jNQ8osy1iiR7bWDh9Zs3ozzk8rJBWuQAktyqKf",
  "key31": "grDYcKZGTKqi46XBMcG8uhBN2WNxfM7GcGpbVKWDndAousiigwcARgDBWANAXGx49jmtJFKVPAsq3EoGsxb2DS3",
  "key32": "5N4qF3FMwBnYxbDi6AAqPmSv2epULcNe1Ytyu19j1bbiw9fGx44r9YCBDoT4wzVLxcorJk1kaznCBMjVdCjZGiwj",
  "key33": "5Ne8RCvkCU1TxmdPv8awSqNez2onjqDxpAmetFQoQibz3DUPkvactePigaLyYSGFWtg45dT3BVxvvuyhBQkJCV9u",
  "key34": "3BBMsHHHMqFb2AsKsWqCADpinnGMEBeVhXXKfxcgFuBN1azy7Ezp2fHt983gRjR4QxbwQinnpFPz1o6fDECq8oQh"
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
