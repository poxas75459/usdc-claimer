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
    "ZppToKbbTR8Y4ujoH1xNAbCA3yKzX88uRRZjvtdP1g7nCDdLiKmZ19if47FPWnybVmGFodFxLbJGFq2RkYBMJ6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CuvcAyWSWB8PoDg5tEVsEG5ppSiGRvxU5akPXNKGRtsV5oyhFrof6uMQLqpzfN7u1CwtZkSxoqbSPWxPxXEeoZy",
  "key1": "5TXntC3GLKCLAeGfSDqMCLrM77o9Z5zfMDrW9zPY22acRha9Qvh6ffL9qh3HhJiZraSGuwHPKJyL4omz2usJR9Qy",
  "key2": "3AG8SajyFoAdgohRKEHePLMDBdVzYXg1o8T2JWHzrP1vsfVLgTfxunZxrSLYjHmawXdJTbGcSqDUz8xMi1ZX8B6Y",
  "key3": "2QGsybEvBCNJz7XEAyUehxayhgy3AeQzpjN47UMqPNG9jDGqVDMjqFASWmDJceV7mFsQSPnudUuuLnCe5euAMTiZ",
  "key4": "2cq21ipD2LiwRoVyAnvHxcQeZ78nDw6hMkghTvQ9KaQ1BU4LQ7sCQnQrT83bQAnX53cERNC2uq59RqQJxU3AhJmW",
  "key5": "2hpGpvh2RtSWzehfoE4D4xzUJza3sXY5yBThbA1W88EnsrWU4ooytrrRptoLQAjzGj6SLMhtqoiUxBxF9x2mf1aE",
  "key6": "2QQS6EPTWhKBHwg92NVNAQ3HiVCmFYkCikeuGaXcsbfbPujtPqZTkjMhGGPBaTAGBpn1TbbpkkRAqseVhujhkXjk",
  "key7": "3AFGXAfiHTpWiycKjNKje6kL4kX6bRiWK7w8Gqrgw6pQ7ijBcCQtyRqWQzANKNLhHsQQCtEctnZtV1275WYfUVXp",
  "key8": "4kL2qrnU1vcSSFqquRBBJBg4fSqr2ztFMvGDuSA9c8jZT99NY4yDzvkzeoFQK8B6nzZanjxTES6hmqAJGorUmixZ",
  "key9": "4LkDGskMnf2QJUfJyVYSWB99eKpeoLYXUG3bJZNt3SSvJtEQvcaJaacQQS2TefW2jzvtw3hkeh43kGRYfjfJYTSK",
  "key10": "2Q3v1Qcedx5Gcnw9c3jCFrMjn4nnNPhj6AvwDY6F1ByfHor8LV8SNcYUzoYiRDy7wBLgvbpLf2ofnYbPNqhvfzdD",
  "key11": "4H3Kn4VHSWq1N9JhtVQGTc65v4dMfUXEnwcdUyWbRprHLcDArfcPyMe6CnXVcSKBUw3LBaSM3N8p3nqsFL86GHnU",
  "key12": "5GBLo1guCGmM4HZi9MEkRFy1kLrxE8qjGE2grLXWc7a2hfzmvRSZk8vRHCAtPidFUxFiDjAMn66iZ9uin4sG65Ud",
  "key13": "5cVjaxXXv7CPCWfuvVD3VzhGjLwWvtrVdqgTS2BS6e1UpazNKqhDUP2MUKcHuT9QK3ANuYtY596D5DcUxcw8FCXD",
  "key14": "2kGFA42kbqaXYVz2GCATx4uqEk8ny3KXT9bAcg963wYhjY9q5ipgF7RbMZaameb4NLy11nmt8u3XZh7pRh3QpKCH",
  "key15": "2BotDKnGxebw8CHG76ZtvyKt3d8sxqtsKDtnDUntp2WHfvpZ7ZdGDkzDFhpzxgFUfZUkD2ST6iFsitRGt4m8bT28",
  "key16": "2gfeh5xBC2jUDeQ5wuXbwiKGx51S7PTUDH1qWkSpiDf88WcCWHKr9TP4JophPE6XHiHxSwyJLaLDtmBeSpX7nzb4",
  "key17": "53Hkr13NgtGSLJVFuXbUcJbM7uAnjfqDefvBZYUcaZr9S8xAM2KCMifax6MPZQPrvfZVMVXvDbNwUWz6jGiGjG6B",
  "key18": "56bd4Gf7LyzcyRi7S8FNhTnJwBQbrG7RmrdZsE5fyBwZgjvfsWg2xXqL1CYzqehCjG8YE2FwbABDF6CfyK9RemoS",
  "key19": "5E8w4tT6NgMvHUzyp8ENCgbEk6Bmv4c1Gx1Tc6TX5TJqwxiaWne4Mkg9VvEAHrEHWMwo52Foc93E31km8qjunaBx",
  "key20": "5hzWZM7VNL1dJY7RXi3M38XBUrRw969btcJtCbp6HaDSZD3aeQhroyWUZnGQccaGEXLY9gYaTMsZLLhj3h6biEU6",
  "key21": "3fhUqXEwLxUvMSKmLoNKTgxRSHXMZGUMUZGNDcXEXciYrZUgtb3zpH2cJEYSwaeoeuapvXEa8Yowbd9bxWvJwdLx",
  "key22": "5j3rWcJCZi4asMAjMibznz72eweMXf6MWgDH7MZjhUoPoHvjeHCAskFW2MhxDerv3PCDb3wBmsAn1WQqfdtAmpy2",
  "key23": "3MzpKAGQC5mNTQVTVvkaKNX6qjAXUhYAjmr2ouP1pu4NRqzAUV9AR16cVE7J7BSfAM1J4ErLrZ9WDk4rTasYFozG",
  "key24": "5jAsqG2at3FrhcaYbJLrjPxjSTJpbhgQeRSJ7bwfvyPSycV3KSEwj7KhAWiW1hNZissFsZ2ugy4Ue9a5twaaCnjn",
  "key25": "5YKDGG7FnbnH4MSk7Ds1XYnFXWzCUbMCzgfeQneA8zf7vBV11pZ1vUJhN58gRcbHzVpEKc8ibjndzWgTfTQv66UC",
  "key26": "4XbTUDxqWjvrQ98MwaGJ9xTaCuMUY9HGRgoJNFUGSHcsF37frqUYnLPzopsERq8ShYx7EQGApwp2CBq9nMVY26gx",
  "key27": "xEYH9pAcR6pAza5PuTdhiFsxyCV39dJNW9ZBrS62eaasYM559SjnPmCpAJ9B2PoXXsNjydyewfygxyCcLYCKo35",
  "key28": "22W15vXp7VcC4bPw96NnHnRU3Searkpcy6h1Ss8nKEnLEm7J6r19SE4ajHCd46AUPNa91CHxz63rJc5nTMKweuYf",
  "key29": "2TtnGLUWPh1e2QH8n6AmJAzXQiJ5sWfAhNaeqP9dwbxWbyRHxPXvcbbcWcQ4bgWH3Vc286j9qysbVP72vGzxP2kJ",
  "key30": "3EzTP2JqKznMrMMzXUQRnJU29bmSRn8AoQiR4nUsb3UWwua8yWpN7toA5GAR1ugzruaUFQEMqhv2UmWXQkn3DjB1",
  "key31": "4sedvi9Eb14rGerbmpuoyuntd9j1ZuJuWMEWpnsQALv4iWm7WHxyvkCB5tVNUqMVgsRtu5aurfFjFUjpqWsR4X1L",
  "key32": "3BZgm55yEJWMxah7fdoocRC3Bj5GAbfYXmKb9xYdm2zEEEvtmK5Zy5sgqszKHcqk3oVsvLPMjwM41S85Vn5SfE92",
  "key33": "4vN1ynEt9TQAhpJJf28YUUGHEqMxHjPiAWMReEVznanVNVijcyim6kvoKqoJ5mdyfxeHN54T3s7MCAbL9BmC6eNE"
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
