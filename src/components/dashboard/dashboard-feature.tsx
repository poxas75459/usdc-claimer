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
    "nKkeXbe8EmcbADeM7zFF43kz9b6SdcohfUjbLy3JdFYQDZ6WKw5SvJWddF3xAQ3Vpqhck17cmPTKtSZeHX2LxyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AC7f6zMAFaw4VNyWgVJzKruBE32bJAZLYrvBFbYYWFsyhLY7k4sU1RKMgwVAdF8ZDt7ZVJTgcVEnEuTjApC8x9r",
  "key1": "56WoXKTjkaSnwYoUtJjcqtQxKLGocR8DkgeF3nhocbU1DYVCE7UU5UdvWmg1AGYsGpJNr3ssUc7YN8prkMkcXySd",
  "key2": "4W41bDctSwMnPgkWuMbdA9s5VYHyWuAUbQNKvnCc9bynmP7a8JgCkup3qiuevSYUoPx8Q7LzbsDE4g74bY1GHma2",
  "key3": "4XXQE3bDby8Fggfko53cSovMeMegygHdGHvZvzmhigFcywxfsnf4be7Mj3auQ8YBVRAWMYP4aQkk6fwxaT2L7gfN",
  "key4": "2rXarNmmZUk8hcvaB3qMfK7TKokXozDF2jfCVXmAQwYDXubBSjRpc3Xy9TYKEqxxhd4CEoQ193qV6andaAPnKhpH",
  "key5": "5ZQQRbrUyXZogyJSXfi81LMgkAfEGNoB8FSBG9cjZeDwJHcUe38q3BmXZjrDJDUaHiB9rHDcXJRJSPBtr3xgkcAJ",
  "key6": "3fprLwY5bmpurCJo1RV5BtX3Ra9uMgmaiTMQuqiHfiE6LWcuqxiJsLKBpa77Aem3XfBZ5ranf3APz7Gy5QcbcRho",
  "key7": "5TZ5GijN1ffdKCZZPNMmVAJPj2PcC6JydGn6cRQMiUds1P9ryovFwPmubAJnAq4tciLPUmPq5WQ7TXvzyTiPjsPR",
  "key8": "3boDyuUU71xW6gwqPyHZVMkb22W1yXKdM2pSncTTTEvXjC7N5PdRjxTT2rPwsVBM8KfuLSwsedYsgTTDG4smVRc4",
  "key9": "5fJaqqVbWhqM3Nx7XJoRGoqWrFfU6img11He5VCLBiP18RHNBtih69MZiHvayQNHBDuFnh5mrFx8Sk8WN4Kv54wL",
  "key10": "2j9cG8zvYeEWxdmNfbyT6XvuFetpw5v2d7HGKq585TuQAuftrrTVsbUKGMNMhYQBTkzTVUC45fkVAFfn4h6Xy6MR",
  "key11": "5mctQmqt68yse5TaCQsUyfdPso6GuBs9JMzCHJLXt4r1Behj7tiZ6AMCur9cio5Dr2uZzCUFfApQR19kEmGvpxCc",
  "key12": "2NGpBWMzuNmwEbkpJZ6swUgwrGAWth7GnQCDQxrowJ9Zd5jV9ZkAB64qzV7M2opJRHbmcmVpjdJ6cR2LvUUD5fkh",
  "key13": "5ZkQP2g9LQXreKC17iebZVAVTtiqdmu2ZpdL6jXQrq44wLR9FRAqDCH3f54vE9k2XPzPs8XkcETk8y8cTGW1hQA4",
  "key14": "fJecGUPzBoUV5kTRtdNTJzNvsnCMskSEbGaNrjWVAuJXL7t4omNYNqLghxx4aJT8FZQEEKYsiP38GicQYboDWsQ",
  "key15": "2T8WFNCygs3Yzc5zPwRovGqC4ipDsKzXpV8KipizN5hYX2k2D12EwbmxKZGSP6Z4nAZBmpnd8uka8EQk5EmKYM2F",
  "key16": "4z5EHBnKAwSrz2ugtacSpbzLsYks7D2WXGTbT4dx1oika5uqBuUXpJyY5Tz7fhPKVNfDNp5Ac65P4q4turPwSchT",
  "key17": "5zJGq7bJfdasemj5c6wWRFuk1N2hafxW6UWNabm2KBY7ciqUyDKTfvXLqNZWuTk22sg8riE1i9FheJc8vcf511Zo",
  "key18": "7r2cdvWvSYUonHPNjNstA4JLBFjQvaEG3g5WKvEwpkogmUEvSJfkRQHFqKbR7jcBgdjwasowm4ufveTYZ4cG1SL",
  "key19": "4exW2C8XSST3HvhDRw8QWnEV7k2wRtZ8XEzq2yKoKMGRR37oU8tqFwg6j2KDkWGfoK6aNk41nZPFDrYYRw5wWZwe",
  "key20": "xkLb5RzCWw8JC1j94DUcyKy5PUeWz6KFaGJkjg66qCqupizRoiEch4mvo3biwD4S6xQ5uyWCdL1kaMjNR9zZpty",
  "key21": "3f5EhMf9yrfHdVRTZoHTWiMGikJWVGTSxoMXpZxdfQ6qumKkJgJ3kNfctGPMyeiZCpgKWicg1WNRZ2kTNtwUqCKr",
  "key22": "31dndovXzGrPrEn8szEVVTxYe1kXYsGd1nwzp4HteQXnTzL81vJ8qpS9W2HRT42pCwFjQQRY2RMUjnZ4viExeDJx",
  "key23": "2dRh2ysSDy1fvmXd2EaqHxuLs1xN6wcHCMnPFU1JdbZabJVqjPsU2ax5kC6Cb4S6NPnGerq1EEhCkxDaqW7yiNbZ",
  "key24": "5eU5NKZdJLhAUvzDZz3HS3HrqShdbbET9zmEiHYo6XuEJUeekhLyLSh4csjT7pa98Xi34JGjEZ9K46bYabJLoxvR",
  "key25": "3EKodRkZZ6fx36JWKFeQF799zazTZJpuiKer5Mybydrn5hAcxkyedqCQqbPVmrbSAfY5jwqo9WpwtSt33Uc2JX4r",
  "key26": "24HeruFv24GRP7YEQBHiT3HN1naGYcjxbKUiFV6WnJLsUgR2Az2mDeJDa9wwH2s9jDrxaQgXwJtTT1z9AT1FAYz1",
  "key27": "2KxKNmRihNpoR2XK9xnhR7jcYZoofoUDHypC3fmagcbvwXybpwh5bqYUsWu5SLnDKWvWwVBLrSQFF5tTFD9pJkaZ",
  "key28": "YuJqEoTP65gJL232rKbFrwjxSdr7PFaQbzRvkLuHcHTHnz3G7oM5gzJW15ux56S8Jr7xM3YA3GCuEFnEEWpN4zE",
  "key29": "49DYeqFV5ZkJrDuDuqhPVdn5No5ii4ZPdDPvCu3gTAKa2QcXhds37zsmTpqH2C1UHvm3nz2MpLvgxADiKnBhVYou",
  "key30": "5GEwGibjUc4PjGF8vPCqo8bSp2qXMrV17vGJ2xvdDCHMcNtRcBSR9ugC1UjfCqR7Se6L7uAG9fYrowGZYyQzhi6r"
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
