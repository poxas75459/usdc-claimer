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
    "5a7QtFWgRJCLPedvUZTMSVQxvSBi9uuaD9MLXtA6Aw39dRDDMKe5GmaavdDGtYhEELSxSTZxc8Yuszy32WGQjoLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PFVtT186ZA4EENRbua2JRDg3rEZn1Ri81JroRiimJ7Wn7Tece68zG7AtQZvrgRZ5fMNDzBkxXxqwoxYV3uQEm1E",
  "key1": "2nuMktsJ76TsrQddrcj8e2QubfRdzBW2PDaCc3zpoR5ZWPK3zrXsAe5dy6qsMJM7XoucY8Fnr3GDgGnvnvfyMFwb",
  "key2": "2rHBE45WR5U6cPUQv6StdEJd9QePpwST23hHX6i8SvVYHNBQc9vpQxRK7fGBCdXuGuf7hHUgAhvzFoTGCoCTEg8w",
  "key3": "21KfgFkTkFhCKfjo5GxLXm1udCjiZiTBykfpC38GJnxnZRZZ7Yy5TWm1ABYQbDX9JGwFxMHZb3beyZqmPVvudHXs",
  "key4": "5E2Zxej6pc43XswU1D9sp1CMm5W9fSqbXN2DSpRrBomqrArMr4bucc1ezV4DhNCyWAo3Px3j2LNDtdu2j6473CHS",
  "key5": "2vW9R9mssgeucZE5nc7mBSrAFhP6EZggM6byramt2HHXYKnTE2oTa92DRoarvGfPJwTyhpkKbx4uv27kj22enQXv",
  "key6": "3SKjM44jr39ivR5kviazSaXsYzrhn35AwGhZMM55m6CPREjK5rHhkVrJvXB6572rsDKx4UieaZwVF3jxJCA3La4X",
  "key7": "4HsDbmZuJBg6rPt7TZpDAxizQLKDVdbJkuu6XGeiP8eC1zzZquX8V3Jc5wg1YZ1Lxy51o9iVq95izjss2p9u7PRD",
  "key8": "3eYeEmhWj2KATUuQ7vvsctSCRyS82LDciPrFMSh6FSptwhFmbEA4kicxhn5tLsBSuneLJNQxmPAszCaK3ARv8B5s",
  "key9": "1XxvAoYvFJFwEnpqpb8DE6eboAbWQnynChpMQ8NNCoawKCdydrmkoGDv4CGHrzK4SzVJv3pWzYiXv9aFqKGSFat",
  "key10": "312KPH8DhbEJVJEGzBueZ2bkBGtnFcYrG4WihQDRLNEuGARz98pEDbQ7GYAGqf1hsPFpyWeCzAG7n6aiuPDwumbt",
  "key11": "5J5Jxa1xHGB8C6bd51a9FgNo4n9S1NvPjCNSL3x1Fht5cXqU5xXS8rPF5nx49weCkMMYPqcwRAxmpcBEgQMTk3s7",
  "key12": "2FiLG5pe1uZMTXFYA7dJTsYCsPUJPVCeKSPkiUsB98zJREuPY5ddn2UZm5H7tSxVKxp2XCPfUJV3YxRJV52j1xTz",
  "key13": "4RhLttPsP9Sn7hbjoVczeM1BsntcEFMHF9YRVfRW2M3Fqwgv5jvZ4rQKTFuVrW5zSHjfW7ii95b7yHThbcohB5S2",
  "key14": "5SjaQqMmsuiYhSMp6SKScZarWmEKZzfXJEzpUrRkF1r27TfCFTnJCaE8Rdzy79Pudm7Dtc8T5wKuUJDNzj1acVQG",
  "key15": "MaAbwP4xfPF66SCcjQN2nippG5ezwkvpkrXCeGHcTm8S7jbcuoBac55fo1CZFTZH5DUbayxaP7G94ZfechFcB86",
  "key16": "E1qYcuqoaj4azRcCwTSA6VbP7g48GPzUxkNuxzdhidR9n4hnWofqhc7Sq7oxGKLP95ACKxMykyF4Zh6A1xGwTu2",
  "key17": "Tn8Q33kB5xUjngnt4SBA9VJze8ZM4VvjvP9fp4uBdcHpPLrfGUsDw5kNxr9zWbsmLFbY5i5j8gdVtMmctXZnHJU",
  "key18": "5bB6tKJ5uNNnj2uocudcV6euWkA8eornSE4SbwNKPnMEYqzB9sZoLr56s2qds198ohc4FR694aEDvnknd6dFsyis",
  "key19": "3zFeVVFt5mBxq57aeG1zPrcBCJE28nnF3UZMZuB5dyccJbkxH5i6UZWd1U4VBhBv5fFZCik7Qrc1afgR72vDrgLb",
  "key20": "59GSWVYNFoSLpjx3npLQTUfjxiczy8cvXNaEZLCJ6VYsftkEGt2GLtKDfPxZokuWfh3vwf2kwzwYYkWVPzAQQEm7",
  "key21": "4UmveuM2MUknVRSnz6NiBmGNj5xdRn5FAUGWpi1vzCzcFefMXTLeyHiSuTrkFGnzF115XHwVj6DCBC9kCDodJsjY",
  "key22": "YQwZjASR83dqxSeLQgae3NT8DDszn22qx5AsmJAKobHa6ZU3Vr4hEepVrFhrYjLetS3fABwUdSY7eJpYvWuXqru",
  "key23": "tVYbcRasyvKsASj1kSuqfUvgvpVkraHAt2bFfW6nGhRuasLiF6wti1RHoxhu5CRwNs24nTB5HoewrDXA7ykmhR3",
  "key24": "2RZiAV7cyASoNf9fqJQb39QYTdNTVwF64TB3GcJaZwQmQeCCFy3SNMFdwawqxgtAgg1fszC9nzzzaB8YmZ9DwAia",
  "key25": "66pzXXFYqPrT88F2NAVPfTn6VDr3ShkYNAsRBjGRELswYi9qtk6Y7VLnLhSV8eRSkpsTfDeD9FeDjbqDBvwbSZqW",
  "key26": "5Zw2vS7w86mJaGT7ngMmjrB9iZBZkmxdAXabQh5VDCTUU9kqWvrjTaDXYyjNLFYjMaLza987n8ThLXqkNN6u8Jj8",
  "key27": "2Xfveb6T1P9d9VyzVy1kmM5hZ8TvvcEgyTobXEbfyFgGzQX5fhxwcxsAhu1ojmpJFkPmXuLFqKpr5YbR7veqi5DV",
  "key28": "3HDztXJCQoLkXs1UtBWnEV6UdgAv4qQ4nS2hCuMv1YTjL2WS97pw4gi5uG3RXFre86UconnXdVMc7uqS9u2BrYY8",
  "key29": "4X9JPcsoPPA55fhPw8RMpG8493tHEYLzG6XBaBUePu9EETdLBsY5AqXnsCKsiuYcFq2MBjDnZ49AjSgS6ikUEAvq",
  "key30": "5iaVaKRuS33yriFhZoGzmDjtx7D5PR8SumdkGkU6LSoqc9HzZBXa5y11rDJ5yNfpGSLEDWKF6Nu7q21FFzBSqk9J",
  "key31": "3bwYoM7M3Hf72DAiYLJnuGMrci5JKjg55YwP5tJ5LqDgr1TpQ5K4Rtjytrh9B9R2yXkotTZ5rUTjq91UPQK1stDS",
  "key32": "YpDwoe3K5AmGVSsH9eypPaBtpqDv7szEGVWBhQ6VMCse5NNPNnmtTxLJVLMg9bY1xfsUVRvKJbbHZFNhTCYBSBt",
  "key33": "5wnYga1sbKsUFe8vbczhh6exf516qxcaM22ahkWh6tHChdwLb2fUNxv3c7R3GR1p7vUmSW9yfNXfPXzeWa8Dc7uQ",
  "key34": "5pfHsxMBJECmWCg8PLjrKcHPdHEQGSDhhsBggw5XWGzo2GGQ9knyiGuJf6xyELXAv7zkmc1wJPuGCACbNwtJiqBU",
  "key35": "2CAQFaSm9utrjt65GEMssoUWoSu1WfkAUqndzgQ8mperxNgkizYHtdTkpk2phuDck8PgnDouw3E5B77KVjM7Tmsd",
  "key36": "5jtntpKtE8QZbSPahjCY6hbbNLgHxPoaSFSe9LswfUVAobzivyAK4yTxLksmvrdmmCkGQeeV47XN7Srn11pdZZjQ",
  "key37": "4hVE5FQABtW3bAkqmj4YhgrEE4LEyWW1hNLLq1WbDHcoEYfGbPF5hmqtYYEjfcjroJioyepa8BHdyYTyoEAMNyjj",
  "key38": "kZv8j6nDQBUPcu7eZagoHJUL8QSEuNkGKSyTZtP6hUuoTu1R2d89wq5fF92Q3shwRrMjeHCUyARksrW9dxeB9Dv",
  "key39": "FEEsU1CKUdtu9wPUrZGPwnzJXxTEXqT6CK5QxdfmmkdgnatgnbEAE6Mb81YvFfm3DQeVfHymFuUCDhbWYmi29P2",
  "key40": "3wHfLVNaoDDibfi7FiqTYUMjjAVpaSaMib7LsSsFqrUyXJ7BG7c7AQXFF8Zpg2MvahCcNRyn7K3YGZfF56RNZP2g",
  "key41": "5SbtfMQikTTd6oCSZrV9RZkoNkgspWXF5uFAQVpDV6GyFGmR8gditmUdirF9o42yEqpTbjvJ1BuWL6aRSy1RxE4n",
  "key42": "4Qxw1CrxoZ8goqgU7TTZUcbfkfy9yvdpYMhk8WUQmssvnKz1Lz3xYuBEccwGxZEB3oWt3E1uXer6Jx3iaLnr8UUz",
  "key43": "5hs9evtfFC1ZmNA3DCpcUHym4hTRVzUyYdzx5k7oUAvm3mfRv1rhT8EmDyDDqs8apbWmurXf3ZJZ1y2eb2xykFnk"
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
