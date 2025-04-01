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
    "5iRsjUmBcmH2CUEhwA2h8UeAZBvMwPsQmge5p8FJahECnVMa5Uu2rEh7iy1cmC2APHCTQs9SoUpFAvvXonvRXhJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aoU7WT4juQHEqJas8VmJDdnKZ6cV6a5AsWaB7JKKjiJKMRDoxdFe8LUHrhCTKkiwZCn6tRuGcDBFZvPaxVTb5r3",
  "key1": "PXfeJaMZVb4jntRq8CZUvS6aZYuVZHUmwU4rZX3ocD6VS3hsZZYqxXKfG7NPoGFjtH9hno2ryppv2D5zEJc9TAN",
  "key2": "4VjQxLCXoFDv2ME8PWNeQqiGzjY2sgSnyBtEBzVopQptqAtkeKMjsKASHKzuM1o48bvhi9C1CYTZipqeYeTnQY8F",
  "key3": "LZo5GrAPhUCg45nixfPTszcJBqY4L27ZTjajwc9Cw2BSuEiSAfmjC35YFF1JqVEguLvAemuqN19rpstaaAf3Jmq",
  "key4": "XAQgvzkQuFtN46XQfgan1XGJ7qQyg1mobyNtdGVm68VXEKrZr2Bqzt7dCgfPb9J5NrYB7WygLTnscitCzb7fQQv",
  "key5": "3sZS2zi4c46vY6PVRsanxST3rE3WXsrvT9MSutw22q6d6c5ZDYwkm8Q53CZuDusgJAfctu5mnq5GmPkZtuYL8pEu",
  "key6": "4jwsrYVxEU3fUDeAmtQnDKSZRSHUehgG6h3nvkKwpx8ZuoUSFfZj6DDyn5haKyVffitiMU1oFMPxNiBDBHZccvMv",
  "key7": "2HWdFGMZ8FLm4bW4rQVpQURZ6EVCarTQKZCXT6G8knRNtLzqaFny5SWEkXhyc77RFMfWvre5wnthhnt6RMKrBqwN",
  "key8": "nJYgg5TeQV1ehCNP4cdEWCt5a2Y83TMtGdtrxLr1UHrkWfoLq2AbFb24cUFzEyBwocGKvCUu9or1risE1MEWyRy",
  "key9": "3zNJJjKn3UBetRbkWGUF9FcFGhP2UUkxLfYqA42UVz9bE1SAtFn5uKp4tKCbBXGUh6NtkHBBM4uSMazJBbRtAn1U",
  "key10": "4PMyj13zffBmMsq5HSFbG9JsCvH1eAJn82gbCdWtxAveEAmZURQHreiu9b2txFYdJcoGDhsZippUgCA2L2xFnKUn",
  "key11": "5UYcKRkuVgufDefJmoKsuxAWTiwTW2FEzXP49eDTVJH6Pdxt9FswHejjSn9ji3aAHQNrXpZLJMPdFmnH12iAE6qJ",
  "key12": "67QupiM2wPHuwZzG4AyfE8HiDCJZuoFSXBd1f1sM94kS6BTC7qpkygkiTjez3jgxmsmkC8mWW9gqWJxZSBhr2RTu",
  "key13": "44WpTW4qHREGR4pPGWoP4Gz3kRRvQ1Z47BAawyTiMdMyAv3HJQR8ox5gyeTHhbuPENNRqp3St957DauZj9rjdKQA",
  "key14": "3huyUfNkjgV3BmZxVraPneyavsfoMpxDjEgQgjDUtWkxSWpWHLyGGBC9PWUTqJn5LhQekeUJPhyRSTsytmMdaoWc",
  "key15": "49EAkBSy2S3T2Kt7KoTFaYy95aCJLxdvzmCPnAvKGMrBEuF5YWYhZ8hHx3N7ZYPzL14XLiM2VxnbW6jqnjUKfqwf",
  "key16": "3Ft5arpph6ctSjQBRzFdRpyG4NkGKAYFCavdPBzLK5bviiz34WPuUrFgvzBffKUFDd2sBdRkAjBNAHvN7ug9M2Fz",
  "key17": "yWvTR95anHpqgKT7s87QGCVn5gN7vv3or3tk3LLCj56NDHEMzxQ1ZhhXCBaivtJEfP45TfkJjRXhKPiigJzCAWk",
  "key18": "2Jfij2NWxJCC4KzT9tr3wEcZL19Dxcs8wYMNv5aN7KPYuJLd3S88uGhP3ENaSXXu2MbsxzcNZQjrjZNHVi25Gaga",
  "key19": "B86cAU1mFmf1igwRn2dktZh5CtN2RLeFZqL9eHyqo9gWMJNQmcCX8zrsN6h4JVzWKxQoPXXc8nEWSLBJehoadmr",
  "key20": "2zUbgMxYPbnYTCdBP1q6jk2kvtCxNTSaWyJRzXJoaNVaKtRW9a1HetHZPQbF1CFSAo1H5D7zTP26GiJxC63uMG5q",
  "key21": "5kD45y2yR7nfSwdRRsaAnfnjXnZk2SgkEkxbaukTGr15f2wWGqJ1A4DVoMSq9ctGja7N2SRYTCAiyqUpiNQDDYDq",
  "key22": "3mRbxJNXWCLtUk7WEcyrZ1TuxGjPyc7HAjjX1hdipGUBEh35phN8nTcdikVxRXSJBZRepExoZhQD5zCCCKMAnDhn",
  "key23": "4MNN6ceqP4LKXU8UnMbuejTmookKGRgT34kAwoVoMPz4Pd5AdbqVgHys3zXrVrKyCHnErAJZbsHVC2KRwdbD4auh",
  "key24": "3cvnx7RiBfYeZhMCt73V8ErBZ9R2Apom5h9X6KdNWBKWkqDpG6K6VKbn68SsMc7ajUMQZ6BzAKbdPG11gfPorY8G",
  "key25": "3bZVS97zb4Xe5j5iLg9GK62p2669ic1giuvSwWsn2ahtKXVV5X4uxBCse2nYfVUPQqunKbdg11LGx4kRQ4P679xc",
  "key26": "63u4uVFV8ev1yjGosy3T5KKW5DG3fkrNcn15jH5nwBjc8X5yj6gGJEiM2TyTmBN3bhvtsSPpuky2zC7jirPpNrGD",
  "key27": "3CxXP9SRHtPChKbizvGeu19nJ4yERAMWX3mrdExjUtQ61EbrgbQtYjBY2DJmNFbm8p5cWie6o7ZPTz2QgyUPXKLv",
  "key28": "2nWdDMJ2BQi1eb3irip4kkyia96wLhJwa3GWTXekp3PtJik4suJgrpFzSEDMRGVFnxWFFZSfUrvRXq4HoVwEUmod",
  "key29": "5yTM7Qrnj5QACRvn3GzLY39Bgf8FpFoC36BLEKCXBQrD9qLwp9Ap2a5YPeVGAt5JuD4ADvig32ZnMSGzRN9gG9gW"
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
