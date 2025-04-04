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
    "5ps8jhes314JXhnoicoKrgzPAhxyKZkAYahK8UESbCnHhMBAfpyDNZswunD3jtfGkDkySb4thMaaUfi3c1vQ3Gcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gSNz1AX2GwuxgVS16esJZWpEHDvgSSijt8GbfSbWAccPdQ7gJQGDTuDRHyUhpiMwiLNYqZmf5MzW2qf6uQgb1Yz",
  "key1": "5BtZqNhNc7gJuQRJuQoei5Wnt1NBjfYXmwkqLxWSN1KXy9tdSyR9gzM4m5EmPTC62fr8VkYafai2wqvpJmC6S3W5",
  "key2": "x4yy4esYPZVw5bN6f834UehMemcBWptQ7uTJxpDJstQHoewGH5c2Wy3E6mLSDoezpu2wXhBs9SFUfBrVw7h22pC",
  "key3": "3JaRoMFHJVfwcLSoVCNP99DtgVRoeFgM5tQWLENP16kZz6ZLWhYWYWh37bnJjpXeRdcMhXsEH1nR9RwfRBXiqQZ7",
  "key4": "7R5okLLKREf6cjCSDZ1D9gsNU8aJTUYoMD9QGbGXCVRKy9qySDAeDqLfWad6qLWq6m2zKXZLxdfivpt4hHD7n91",
  "key5": "55Y72akXCUTYRQLfqZYwYuwZidyP2uNsbdPJWsLKXUKL5U3FKyBviH3kCSLheS3fPiGjy9zFqYT7SoL3VMQZno2c",
  "key6": "yGb8dG4WdmbacSCQDWRTyieNbwtF6T8NsNV1A7FNNf1o21pZUr9NyMRBvJMKEeFE2PUAeksF8wLMntSkpQAbHbS",
  "key7": "2pEFctE5puEQtfAVuhpPi7ZHad7YDfg72cKUL8QNMjRnaDJuPMa2z3RdvCLpFRuYy6forr2Dr6jXf85969v5Pzzm",
  "key8": "3j1QQDhg2YtmZPhVNzL1qfVk9kCazxaFG8Er27SPw4j4S1Zt7wXBGKAKDkUCYCR9tJNVCkLYPdgYjBTK8MqCpHX5",
  "key9": "5e1vfRj7865ckXuWwyKnhQQZxzzAj6PRQoYCB5VLckUhDes6wRBRq75KXnxmRta9Aixv5Ts8aBA3bEnhdJhSFuEc",
  "key10": "2jAyR9ahhe8ionu6ckT3vsHQjaa213swLGF53iCrpS8JEarLcnkmAaTvynBtvyoTydGLb544Lkhvnosz6sGyvkE9",
  "key11": "VNAQz4qc56dEYUv7aBvKdofqgs3q5LRTV1MJtBw8JrrYQJrzZUUY3YJpebrp1Ljsj5bLNJPs4R1ExUT9LRb5JR4",
  "key12": "5JJCsiJcvgM6xuMsTmdRBvA2Wp87pywT9SVuXfAG4EDSxQrBWQon7suh8KGFbAjno2WjPcWyVMzG6A2DVNjJ8S2",
  "key13": "3S5WHTVEHH234jSdzhuHRZ5NbHnwHmbweAdwCS4HRmuarzSCuZExabKGmSU1sUGXQ4su7SW8BoxcbEytBaoQFvmM",
  "key14": "5QTk1sofyraFnMFJe1cSXt2TVqxU5ntYfBxCjjYrxyTUQUjkc49DzDCuXPjzD5QWE98w9sHvDTnQSudUtLNranrV",
  "key15": "64ocLgwKpqtu6azAsvNjDy7TSEGXSv43TiryXD369unmb8hJ3Cux47HUNZxHfWNvXUXwWUf4gj2eNh2L8rEYeuHa",
  "key16": "2WNjmn9NH4RnTgxw4fiVthHuBW4QKd2vCWwBuW7MGQRi1cg3EhLWUHMui2HvXrjbBTUF2M6xrg4nSgv4MnKNP2m4",
  "key17": "5kc9RA7edo4sqKEXTVBh4jDhPvWjRy5tr6M9F6xBg9iTDM1Z9JFzbTT9suNRw9WharueuQ4MCEac2qtCfsbYEdCK",
  "key18": "nZ9igknf67swsTakHVhVwp6yj8LU3ZExdJGvxinAHTbLm7NedAzZW5eRWzvNqg99ZNNxKiatz3nY3umoSsemKBo",
  "key19": "2CsuYj6zWvmcYTc8fmxybSMs8L6DV9HvZQPSqtwo8h1cDqZrbAju227V6E9s8ntXmYf4LYa5NqwSFRUeejswd3jg",
  "key20": "27MEnKArHUVpxuuNVxyrxY6MUm2Ccee9av7V83JaVVCCttYftFCzCcEunX7KrMst2EfriYXNxe9VKDTCee48G4RL",
  "key21": "RLimkWrhgLvYPK1C2ibhRcwKSpZPPgckZgbEnDnu8VNCAGXhdzqfxDq4x1L71EMLeagzhZMgJngiu6WDZ47BjBv",
  "key22": "2WsC9TFkunvwxha93wnLCwJt9ptVVCQ8ZPhefeeiEBLtEDsZ8bEELFSwmCK8EmA7YBcZWV9sydrNqJba1Nagtup1",
  "key23": "hWoR9S3Mzesyu9GsW1g1EC1xocEMDqmrKLReEgefM2TdWSoGYEp3T1Vr7n4xcP8PkcikMh3RaK6EFmpkiaL6ZcQ",
  "key24": "ojDTZvXr4Zye8FZZGLseAM7QoYNjc46eyMxrpqjYM1akufPmmf4Us4SViCo8taj8bggPnu4BJeEjdAyUouachzx",
  "key25": "54wvFBjBYQnQeUms8aeRu3CHmmyTmDunRjpqcZ5DuF6LZFboNdXwHE2NAAhMiBxazrQLMCjzR29itFimURcqfBXX",
  "key26": "41jwSDmmqGkhKo8WMZLUiXXQ7tURWVbqQB6hVLUBEvxom3nwyewmoMJsowiNeqSvgJQ4PqzjyN9ywkJ2vQpJiiez",
  "key27": "eQtW4HrxWAYoEKJJ3jdNFzchQ1acEW6VmhhGA1C4kzqHiungmBTmWDzciQfC5hwrviRukmPdWWmynBsP3UabrwE",
  "key28": "5g3bnA5Mjd1Da2MEXL39KvcYphyi9qNVSt4zcbef8uygoigFzKgMZSh526vx6bUsV6LoJcqCSQsyaRfEKgDKuFq9",
  "key29": "27y2Us6V2wN5Lc9fG8cZAvLAjJg335XKA8hMHRCa7APidjAbFLhbSLsPFfYbqEPvVuZ36MCyJBrzdyquj82375Jb",
  "key30": "3BFvzVr2eprWXL73CtrGDGvR7ZGSt8h8kbmvZSfDzCwNoUnnwawBHb5pGZvUDbwwRxTUQgnbAYKSXPi6X81Pvkxd",
  "key31": "5AN7D9ArduxzRtCHQJrkYmmeitYtxB6edrLwtX9UhVX2j6YnvhyDPZkMU1Hc7aYVwco59TejMTicrwnoGQPZppgf",
  "key32": "ein6jcE1GKFipuDQq6d6db1iTCn8u9A1UB2x8pKhTTk1CEG62a6tvLKsZFvYMWmGCmFBNpdKZUzA1TtDkUG3viJ"
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
