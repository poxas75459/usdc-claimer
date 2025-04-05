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
    "2G4ufMZUq6vM8sq2hsBzcwTqnnEde9zFzFvUv8X2A6o53TmANLprV1r63qtLxkN2PAMBhFFVgPrvqdKNrbFjQnx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hyERiz97AYidLNj6kvsdqH9FzHEbXyKQtYb86UgyBhEkomHjAK9A7zMFRPWvQs8unDyQiLkL5pBE2z4xydBDjy1",
  "key1": "2YCfYNLS66NZfJ84rBu3Q9fG3v11iLxQcUXZYN5VCwqwqwLjm1etzX5mkspbsE5xxCTXzZr3P1ybzTfsMjjX2fX9",
  "key2": "4yurguLXcTM7FA2ptxZoSmoUjf8oVCnW3kv3moKXcquMiHFVPmnA8iGVU43euoTpzuLrdFe46eSVLC4zKJZXsxCj",
  "key3": "2b3AMY3Jgzou6DFQCTua7GFSLxvhqmpjE1CYVE7W2CbvcASK7agYB4Sh7tc7yc5zb8qUe2nCrs8zxdRwF7kd1dZi",
  "key4": "5XUAQPtabEeFdtJv8Xe4nUJpo2t6DZie2yy7jc5DBnUhSKvxWv8dySydcEW4HuA21HR7vrxCjkrAWVrxR1yjcDCj",
  "key5": "3Fm5YAwk7AmEbEdvwD4PRvMdqd5abiHXngBH4qa5p1GJW42PaRm3vtbWjFd6VNZs3FYH1kCbZmxwtj9aNpjxtBUY",
  "key6": "2MbYozToHBVebF7MoCFVWcspUYJWyGxws52VmAwKoVaahfh6Ww9o5Ec4T6XGFjWoio5TqKFTQU4utu4FococsPCo",
  "key7": "5jqpW8SxbJAeqJZ1GTX4T3nWbSPgBWJUoHgT2Wy9Z8sKj7t576wvN2RsgC8EYj7xNibZBZMHfiUHpZ9nN9xH7Ndm",
  "key8": "5JwgT1vQz2mgCPwfgPXa3thuwQ7xByGdnzCQb4K3BfxizbWoRNzLM9Dkphajz62MFu2sLXng1sDLhG3kfX6dF6Gc",
  "key9": "2uKmxbFA6JNF3Lx5uAZbBCQHVh7mkJfXutRyW5iLCGUN8XG8igAAFfxvUPDdsD3hTCruTr28RcbnE7bYVJz7AbKY",
  "key10": "CUjuafbqQBjb1SHCsw1fdSzfXqTDkWwNuaDfBMmmunDru1SMwjZuDamETEeg9mKtiFWxCUTkPnMveh61zLtEA7n",
  "key11": "3oAjWeBbkecDT2ShfoDxBKbt71UeSanxceASMWPEmTVVo6knzDwJDdtfHePC1jMjavR4iW93htsyoZ3SvciXbS1u",
  "key12": "4zM8Wx5wwgUjxE9dQ3HsFno84BF2iuxTFX4HDiJVQ4VMszriPJ7uoUPXioQFMggBQGxuvfA623jmQjeHEfCEXWyS",
  "key13": "cuSC5gCU3gQCk6pgcPjtjmGi4pYLgnV8hrkkQAyPzgxdXdjRvetfGsMF8edEMSwRazm28syQc3kpC7hMpBJTZoC",
  "key14": "5oAVr8uK5vWJ1MrKrczXq1aj4GgSBtPYJ67RnNvMVCyZvGL4L3YuPhuX32cjh1AScPbQxEQmphvdkch8SK9Tw6s1",
  "key15": "3T5dRvRrAbBtzTp4AsEvjGFqA74zfvxTWTWjMcxQMhc24Mp2RernsXzZ39r5Qp2s6XDiXXQeTK2amn8TftyFBQhb",
  "key16": "YovP4bKCGuNUZuWqv3mAFRDEaxja8LQWPad5HwbZVSqVLe4etntwaWDVUX5tGMzRQawrUKQCFizsL85mHCYLjcd",
  "key17": "4VAwiULzTG8xvCSQMBuAvK8BShB6KU2q94aAeJ1DRG277suYhg76tJbEezfEEM1CUL4MmiMRRp6h87gPSP5TzENC",
  "key18": "2Dy1pCrEcfvTEeqzCTQRV6fFB9FiRHjyfru3Ch435EWG9WmFtNiGHfrbxqN14iuEpWeqXdfz41CQq1Sp44ww4qet",
  "key19": "3qTuw4ZnuvYKcfqQupMBqidrynEyqW31Y9AhQpB7kJRDrg8ebrGViMzdvuzfSzgopdqfkwe2fV58UXSTgLU1chdQ",
  "key20": "GmF1BLRMkxBGq6dA4yRQCWDsdyRMChG5xpuMrJ2bstbewY2bFMEkcd8jm1mk4UNQUoQrfo9rscFT94WyuY6YWq2",
  "key21": "3tFvCjac1ND6ZdhcqDMcv2B6Lb9KZapvVpRd6edven3b6NigjFdk4CF1YZYgwHnHjvZ7dSKiJJ96UUqMWgdcAq96",
  "key22": "2FaFnvt9rTtcPbRXFDwA9m4DYTZto6C8bHCypgrcbZ733BYrAnUXG7gaxJujsuo3Xxmz3SvXVjojuXXWda4cd8Mn",
  "key23": "26ujxHxcdU96MFnw5KUTStgjq7EkQVhnV5SWHpR8kdhLeQ62NQWUgEtbATqQDKu6ZaVvBJMBrejUchzzGzPUj81o",
  "key24": "2TBYhvW8VUf7HsPoWrLKf8jDS24RFBH6eLFBaTysfRAXD6inc2WhsfJ7ZGvwn5BBbJrwXciLKrLQEn45xFsEQ2gB",
  "key25": "4duaqYfykA3pZ6FJgn4k5T2zbkSsa4131D7H2vax4p4jKEHScXPRvgLNRNAJJS5DCGFzVxEHbVwNr5ebpXxs1kW8",
  "key26": "2EDf1Nk9YQXVPqTangHS7WjDhyn6Mkbr9QZ8jsgBSzzdqCocixr5ERwRZExRLBsXW9rA75ZKcCVkgcyUTfCNHvne",
  "key27": "4Amv2ajPmSsyNXaHhwbtmc52YP8uGkkEUsLs7NP9mCFYcWxPTqV32nNkmom9aKEqCmqeJbrgahED9Xy62Sow6BzZ"
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
