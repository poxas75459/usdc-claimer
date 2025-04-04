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
    "4Z1tvqoWnGtj5ZeA3aeHgvdqFkd3wVhqhGWCkxFaRBpp5KceZtqQJaMsD77be4kxwdcoJDoTTydeK6gN5Tdk8YgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dXT4zVpo6FYhwAiK9p4a6waT666VSpbPFGaLjUXX29oshGoaNfMmd1pJSw4m4Hjjh4k67g6ExRoYJzcKBYyBLG9",
  "key1": "3E2YDJp4QgdU8tas2NXUM1MBEUkqGvCRsE8GZtLwj222iknD8JhdbT83cc3xnNURkH3p4Po6XQG2Rx2tKW6okYTv",
  "key2": "41aa4XsvuVYY4LpDLPZ94edT2tdrBmwZWbD4AcX1taseCJ3ZFYQW85oP5GdpkK3MvjX2Q1ZtQB6ZCfJuFd9JnS1K",
  "key3": "2keUov3iDkKJDL7f73Mj4F9YqG4g4GzgDjXp4ropsYBC8rJf5wPNmRn1VG3KuhL8Xg5SPjxdQHoaRrVcWPMj67b3",
  "key4": "3EWfDnVMdkWb962PBKjTeZ3LktMduUviSFxTjUkSrmpKsuAjKDBE6L5S8DKny3JoAkjR97MD2p2AJHQXnWEXR4au",
  "key5": "vQgcS88QgYciUdE2CoJFgqiqegoerYF3tb6M1Zf9v8yF3x2Q5L1irNrZvvEFxwwyafX4Gv8ct8MW9wDBwk9VHqQ",
  "key6": "4xvjRvTrNdzX6eYo2dMbKWoZfcQj9kLBuiofV8NyeNB3wXcmYEVonzCJLXcRTU7TMW3xcc2xZ4rc14LhsksDva3u",
  "key7": "ajDSqMJ4dqcaFZfVdMtN1PH3JBvmqMML42q13WHqt1an8iAU86R7NoLa2hV9xXihJkTBQEK2wcADEb8ECch74xJ",
  "key8": "4DaSZb1YbhQxec6bK4V6Wq8NqDhtpu2GTt7YYhMep1wGgb78gYHMapsrsQkqaPM7THDq7iiXr6HiWVHtHhaV4GVV",
  "key9": "4XNGpVqYSzfAxtaSMcAz9K7dqSCYYKapVUDFVaNtVqN2ouajobosk4FCJ3GP4kofQQGRYqPSQNb2uUCE2CmgHyHh",
  "key10": "4NLYY4RAuzDkMNqa9geaPoxpYhoE8hA6WZ8r7UMzM8bHNyzkhutuKc6YAxx1paBU1mEAypJ9hdCBY4sDBRoNxWmW",
  "key11": "2Ad5vdagnHF8tqKM6b3JK28hT58EDehR2RttPptPUhk3mxx7fiJBaLCPFD1d5n9gRE84KnFDPSeYDxajHK81SVaj",
  "key12": "3ixSVnvaj4ya87Z2zYFWmQfK9YzRqF7hT2kawTj2CzCWZ5qu2Hpy8W5f4RZousZC9ZxKxWYCbLgkph452roQw1Lo",
  "key13": "rHiPt6oVndMJLPJEjqWAQRHuxXpFF4u3Uiv31APgnMJQDMj18zQ4K6mV62A6no9XcC5WkwvBpzxxnnvZ1NgTSRZ",
  "key14": "2k35DLg8gxfj6U7Uy7EWkyrJoyJDgmWtmC53BajWLbkw6fkkmFxPuVV69ow8WvucVrbZnaXhe88s1pCvoPgijgS1",
  "key15": "CGumDpx7WnMTtTC78da1jGygaRh11QWT8SsfES6trG4yedXusj8DgkEfdMhF8NgZiVmAwTvHswrUAV2v1M6HrHU",
  "key16": "4CUT1sts3SkbSsXinrbZLkmhDRDSvN2njkhnW25ZokwjgL3kCUYNCi5Dvk3fGwuoq6b6jXeyy74Z3SJVxVPMKfSV",
  "key17": "XwyPt2MRstpR41aUmeUXTi1LLGUb2uEs9TMSdd4N9aSQ7wtSXue3paZnuSehz4tWXJrYDxYqUfr5XtbNjrSpEGY",
  "key18": "2gaPNnM3uPoUaPSrZde8vPL4UZtiUqFM556v7Y9RcJ4gbKCBP6K5wNfjhFS7Vgo5J7dAzqjCF1cYSg3CzeazgSH3",
  "key19": "4HLVuCWr4N9ozge4xjhGQhuRUR956TuMnntTLgVAPjwZRpRipBEHBgAtTDp4k9o6cF3qCMPdEDaThvDFRwUvSmCV",
  "key20": "3kBMD8xe8L8Ppw71dzEGZMRXAQ39qN43NafZCwH14Nzoa925AUHDFPBnwLmBysXbHC4D1oy1x9AQGUMtUyvynXfG",
  "key21": "2ZSV1VShTPuqnKUYAuf3tzSv42fyvGqSsdsDCD49PZPtZamFXHqgkrts37Y4AXXrEok2hWXuq3NGSG8h5q6YDiuv",
  "key22": "aNoN99X2yg9Z7qXJgcSZSTc1beLhQw64omgCRzdtST2RGzeAw2B6Bu9YUsE6aAaAkb5XXjNd1ThSii1pNwm8Loi",
  "key23": "4NzkhMeN6m7ppjsvkEV8Wo8nQ2oyEj8FNReccig2fDSgDfUkRD1qUuTk8wTkiWC7Q7TuCpn1mYGKtJ2XbNJaWLL9",
  "key24": "56aFghga7BnxuC68BKAtKkTzF2R22KQaa1WEp5zJUrYoyoscVL93XuimJ19BSXZnB7cBKsdou7ap1kwGyxmRh5qm",
  "key25": "4niuMCfQ7QRAbbqdf4iyicfatnq6wYUsyVTDYkjdujVpceUJG2PphQBhqupNEG5Fdyj7BGJrvPmnDJsxeSgiR56u",
  "key26": "X5xyCAupwb8jrC1W5PrKUL2v9m4WVjx9koBk39Wm74C4bgq7ADsGiyC7YT3NthmBwkxPNBiEp5SaWNqAoon6ymQ",
  "key27": "245LXxntzGRdC1FPTTTMGffYsPrz9GFTs3Bh28mEqsTpE4GcTFeL3WNwPeXvoDCEXsZLtcKXUf95LVnykDGU6wpX",
  "key28": "4aAGXsVfKCUzmQkNgQ5q7dysR5UZWdhZXoFEPkJECd5TGok8N8Wvi2rZgS8vAbyFCKX5pyzCex9SVXJ7God1Yw7n",
  "key29": "65rXL5D5AoD7xJxEhRnQwBnHYQktTbEKdoRDgpErhx4eJkxc1Z2YjNaYpDmvtr4zDEwu3JQhFkLL2Qwrbha1Vj7H",
  "key30": "3maCxfVWM5T28FnZ5dSNFRcAce1WnnkmeTmCgWXG9X24hCLjYPfechFDKY1kDF9FftE9NWziJB6dc1XEPe6krm3T",
  "key31": "4N6S5sbJkuhGPSPF98YKZR4sGF2cVmffMhqDdCwPp4NNyLK2cxVy1j8cGNTMqks5VyQ4iNZBPAwkiP1y63Tfc9cr",
  "key32": "5dd6GUymUoVcwMgK8wczjeku7tUz8dtiP7esVBnNh1zUBxmB2vzBMAkyzjXTiPWy9r4cNaRsz8i5RPsUrGUZjUB5",
  "key33": "56bvxK72pWcvNC1M8DG4id43YEmLikCx6DMWs9ZjphMYpRT62bqTD6XuxwGDuspU2vffQrwF8uZZKnrGVhLHjYKQ",
  "key34": "KFYaBSLFr9uh4CUgG9MbriL7Fyi6fvk7VcYEfXTjbrmdpmVq8VqpvSBL4FwaSau2VTf3kfkTwXLzdZTg5SzxiL6",
  "key35": "4KcCHMhH3o8XdepZ6Wt9GJYNja2kFLuQKv1naWhy22Z3Ti6cPz3ch1RecNWSnn8qUzFgYfL4LXzV42GFnhKbdCXD"
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
