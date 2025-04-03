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
    "489BP2RqwwcLchMdiqTiC1prEZfiUNcDv9Qd16jpHDJekpcz8GrAwiucLUV9YbtGEapSzUWTa6ze3ygSnC8Gpt1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6k8CobF6XnYGuvqo6VdWFyh6verCUReDkNMV5HbFrKsx8ygqMJDzkPPUq9DWrMbCWcDUXCXmtLokGVMggdtQuY",
  "key1": "42M6oER1rGZc9TXZbEWq1UYofvxA9SLW2NwUhME9Mj6kd9N7Gxod5sLLXcFJYma79BgAAR6rhhTg7rpbK5cA3g4Q",
  "key2": "61qc4bH7sYPGbcpfaFxxcrVvxG1RXPVR8nnr1PmgcnvkAfpykhS9Bw7nGZgA6VLKqdahUHbH3sveZ41YRz1ZjV6v",
  "key3": "3W7eMpYLA2s8UqwMcpSUnnL2owpLt4psDprVYmTtq8EWvjhxRX59N79CqNQ7SJDa9Bn9QT3AdqcT2hvsKhh7cEjg",
  "key4": "62swHjwKMHSNDXVDgkdJXh3kqjujC5q9mR3DWScckV27r8kz8RZUGHes6mFftfrGCbJBgbwtUnQAs1zitigjUZKY",
  "key5": "3xEEadPUCZDRmkHELVxodKYnBh2CZ4tdC774NmxE7h3FQ7tcNCK2dQyfd9QSjiUn84wriM46Z3qpmg65ia4hta26",
  "key6": "3nzsMQB7xNWBZdATeJTjB1RmuiagkLYA8pcy45sYuYgGnSYCXjr8UjBXBWtYfjqUmfkLS5BRHvqNFHVK3LH5v1ur",
  "key7": "5JnJy9QE6LPzhMK47Rkgc7X3TdSJVE2VzS6EeBr7XPGRAQXcx7krGacraXjGntPXMBUFvD4x4vibVBAkpos9Yo9Y",
  "key8": "2PGETrWhYXxGWQiJDNtHvPDin3bCAW9647oFP5panqEYq3XD5QhscicDNeMsZPPXn9589nCnPW5eTncuBj7PbXHz",
  "key9": "GBbxdMJWef8GyDEErs9jxf1MJuPHPmJJ4Bz788zfhuTDdboZjwkPkUvpRXS3pBQPsDMounk2FNemZQUPDpfxa1G",
  "key10": "5Y8Rr9TnGwRxVs5m83iby5wmTcYC692dxP9ufpgx8i9etsgcHWeiGP3DjFH88i7s1dLLMTe8shHu4nVn7cevhDAD",
  "key11": "58oZWGbGwfKKi5ie4B1zeHoX4HkgJPw7qm7o3KaZcT5uwBkRSusNnpcX52VLP3Gnjd7N9WYjay5TLoJ7hehHAp3J",
  "key12": "3VzU9kHF3Lz71A7UJuN3dEcQema3A5Vn23Wvf4hZgv7uj8Rfwv7YeWEoYBtfqgY4R4Rs151kbZFR5SeSeQKZMdCL",
  "key13": "XozbCaPpMfK3po4U5tmKRqBPJrMhB81vdjePMzG4MQGzh5V9AmRYUwFGe5bKVtsBunE8k3YtVgswqBeXzaPgNFp",
  "key14": "4jT8bFaM2iVVvYZkFJhw2BQkarqiXEzumvwqz7LkJQsLt2xAYE9woEgjpaUaNzQ4md7GXGBPkVqXSZYoxn49ZLV9",
  "key15": "VpjLEqPQtzWnuPeQvwrQsbcNSLHQy9gsdrkKbDBuridB3KzZ7kthmrY5mSssYpvgovMpVBfABjvbyCacnu1LwbG",
  "key16": "2f9vzrTUzUcBHPvvE3m2t7zXJb8gsh8xdEKS6DaLmcGAH2nHps2fNex8Mweg5yE5ighFQ3s3YwAFmrVgNvz4ZqLM",
  "key17": "3VyfBQJt3njDTEx9pS8gSUngo38F4vzcxGpXGohG1bpoNgPxMx9xBcGm8AirGJNG4fNPvVRPZ31j5Lz65a8azwQz",
  "key18": "2Do3bZFCeMcHJY619egqF6FZfSUFnhgL61tmad4GRpGQcqAaiRd1HRtBy5SH51tiMFEqz78XXAPs7WHMsieMxARD",
  "key19": "5avssrPmMYUSvjZPp9FRrp8hVVDe3GHRYeX89RLVEszMniE6daWaMdg6bmDc7czgYmcC8r4p1zz3uSD4dMfokGQR",
  "key20": "66ancQ6t7mPKMBa56jZ89SxqueV1PYMvft3XARCu8S26CraMHNqdbucU9UfPXN3uuhHEK5cYUyHMhBBzFYYLkcrU",
  "key21": "uST7iGEJoW3FTgBBGkKEF7Ugboq56mWgJAQkbSfXAcgoaZEmpBY4rZm3aCmtRa4kNgLtRQ53BTBUajCnVUkvF3w",
  "key22": "PTrU26o6Fyfj169kUCZWRJ6zjeFubnz9845BWBW1ZGAFw3AKxoBB6iqJsGWmT3i8TiqopQVmvU2ANtq2A5zsUhh",
  "key23": "8t3bRbJmJsxRGJfvqaRPuK738NpSRAtQq5fkgtpm7oLhLKtLp8SvSadLphoAJxJy2fynuBNvvAJeGXkhjcHpjxV",
  "key24": "3VwisvZWEAYe2a1zjQhjP3WFsepfJ1EYN4ifith6RsCmQA9UZNBncNHFe33asntP5Y81CLu4vJNCEsBQ5W4LfSdp",
  "key25": "5nPUQqiSXBfnetBtZdT1zRjzGs7PAeoEohkwu4Wnow9FGsTKRjFuX8jvmzACV2MDUeW5bmXXr56zzBrK3GsUcJ9D",
  "key26": "Z5Enr9gWU6JmPXFBusSwr12fggGSj7bubyQSAAs7z5mXFvLbCjrN2JVa9BBZSpkbBhwMz7a2chAZQk4rUmP17aj",
  "key27": "33KJsN3adqfotcsym26SRQKJ9v4Yg9wF9MDhRLgjN7syN5K4VnbNTnFoqCvkkQ2vZtkWczViajZ5XobdWHK89jVw",
  "key28": "5HgWQtLgudatZhNoVdoL3vMgdbkBA68Lwzh3eTeLvzirGHN1U63sZ3cRUNEiqSbGg2wFBdXuERUEqSAWsJFuWkkC",
  "key29": "3m9LVTV4r4h7iHszMEqym6A2fBhvcaksH1ZCYGpYS8N1sK1e2sKn9iuXWgPRuEPHUEV7GSupi5CmggscxUy529JB",
  "key30": "36oM4VajUwRbWw7kR6w9vJrVzfdrkGjJ42y6434AypuDvLwAXWvP2Zg2oRFxkNnQUz66FDc5c4iEJHCEPWBpUCds",
  "key31": "4pmXESYXEc43maxzRTfG7ESH8igdu5szCZ5LQgUPpat6MpkZJrKf584yb3zgJrTytYGDjfNm483x19yEJ7aGZ7aG",
  "key32": "4qcXwUdHtGWJ4zea4vJj9sV331oCm8XryY7VWeAJTUPoDr9RwrXW9F7EWHvvotf1Gyp6f4ZU8TXMoYNBiPc8H8Lc",
  "key33": "5wcpizrmquxxx9RXdmntfDqSeYjfsg2LuuRVHdg4jf8ZyTUbUT3GJ2o1Czb1S8xa89a5ceKDYB27n7QgmnEkxMtD",
  "key34": "3Rr8LYwpuF21bDJXq9YZKem616aYBGRmeJexkrimUUAodMWZWXgr1xfb9v1Vn7rZhn8Vv2SXzQA2mQQzZuNeEsPZ",
  "key35": "53gg4R97QooyqzcpPLcRJ6wkXi6xnrZSUCcjcLJVFxMBfSd5eYDQX1kVCGiuYjFhhgJSFfMB4VsKZ55iiR5ZZFeM",
  "key36": "3hmFvE9Vk7g8L9N5Ff6at36UAFsRpX6dfvGMN1k9XtvTMGfXYFvPYENBgfpk6ZneoxsSJTtBQAkiWGwBjSsq64f4",
  "key37": "4DeRD3tFivEZWbiUhAbnuUYgohdXH1rD9u9KZbw49B9upFgeaDXodU3SdiVSeqijasYjrGJTqbTwCg6TAjWq7zgs",
  "key38": "zBDdXmeXaxVgipyApn1XNDqDn8NKs8GkDYJ9yH1zvFBn3t57zxAJbufJ2Q2MBTf586hhM6wskRUVfZdnTna5TBB",
  "key39": "2JvYia4jcQXHC2ccmXQUWebBcuV34FiMd4FGNbFbG736MiPtWL5koMQbDgsyGaYi6ZFTXTTebn4vFV5PT44BYwSQ"
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
