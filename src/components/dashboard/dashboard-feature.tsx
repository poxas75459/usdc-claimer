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
    "5LCnGue1RqnBzG4m8VEdDgVZfk39Cwog93aCZK7ZXNA8bFmHzoShiCyLymQJKS8JNodbv1Wcg3Cyj8wrUdJqS9tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j8JqejwvLn8zs9qodHbsB45ybHhrkGDNTpisRfd7wG3HenGBK7jM1Y4ThAoSgT2qSMeHnx9N9cHHY58Vwr2mXGT",
  "key1": "XQVVjNeUv5mBmWBUgwHLpNuhhXmpGgzafnYqVdZwtyGS1WBSfcR8p8hm9AXnyD2pyZSHA8jPuX7a1ZjSf6MGSnB",
  "key2": "JiDSKhUV2s8aU7L2A6vvXQ3VLWK8xMJKv1AXr45yXHAny1gp188uVVCTeU7xaZ8cwjw4BZFjBasXDpwQHWKeEya",
  "key3": "43qt425PAkvnzi6kYvVVGdE5P1uwXJaPsfTsA7psHB9RiT1nY7KhXdPooq1E5RcwLZUBMJF3KekBgEVofuyjiuoe",
  "key4": "5bw6jgUoThMPxjJR8X9PNwXXQBTkM6oTwyCMfFCmnixtKC3AiqkGkshtq4fEuUuh4Ehz5EWx4vixjigvgbJe1Cje",
  "key5": "25CELT6URXdJ9jvUMX8fzde4AB1t2yPcS6iAhziSKcfxNoCp7WtLYTtTQkYWqhiimySHUQA257VdSAUrMRkXsEj1",
  "key6": "fkpQ9vXzgTMuvNSU4fPDdFCNiG9rvTxztYZFtmVentA2kemyFJn9Xn39jZxsaW2pWX3bfxGvZdmZwWv3MbpZRUX",
  "key7": "5ohyGGCtZ3KSi13tA1SZw2RTmJBTK9p62Sd5dqBAMR3CxfrLeERKcZ2svFhE7nn31PVEGCzLd9v4aFpKEbjX5jKu",
  "key8": "348T3j56HPCvdq6QVU3zHqHWUiS8QSpVznnx46SZjLJVvGic9CE1p6vrGTpUTFjyCJYrbD8x7KM6y32BSrd2R3km",
  "key9": "3B41QYN8RXLFPdMJyxzSWacE8JEmC3Yax375ddQC7f75GPZHpLwLQHTcPJgDLNhpcm7qvnAKwfwVzVjBMSk7wSpg",
  "key10": "2YmBfj4bZQQbfYxfjBfUq6urnYGF17M1gaBhkGR4nnCWa83Kep4JQTvmfzX9xfecF9LsoKoBMke2uHEaNMMF2BAZ",
  "key11": "23ioVxY2WZtsGtzzHpyc3Q6CDKbhA1Vcryjx9Awra6oYLePmDB127g5qfk3v48ps3uKvHe2xDbJ92qpe8jEVgdvn",
  "key12": "4zftWCC4rQrmpBestttGchCDZTkiteG5ZHVNuwdEiS1gmq6Gwww1f5jerGMuhdNhd9HL6KtJVvG112S7dd9bXS47",
  "key13": "27E6QU9KwErzbFLB2t6PrYCmc4xqo5ycyLfokCWKPUm7sCVcU48z6w9GJ2Zfn63nUc3BrJZMop2gaXT12w11PKjo",
  "key14": "4CqUBV5q7J3WbWUNwoQjqK2YxaQ4JZExkGShsxnkr7HdrB4ri7x9EKyzmbYoHktQ6kGXtMyfDremEaeA9GbpMxgn",
  "key15": "6675gHBrDNFCpZhEh6UJE6btdntFbF2fP1sMr669hoNSDY1UECSEyWmPht7kNig8mEuztQ91LHXBTHp9G5cd92uv",
  "key16": "2aDsoeyDPQ4qereK9fZqB63D7txsEyzQFR5BzMvKiL98aGHEkM4pno9bkD6mZnUfVsPL1ZbWmU2YW93yoPNVauG8",
  "key17": "3Szdgxf11hc6yTDAULLsSeqNXHSbkjF8wZAi74e8L7e16zL31U7eoHbcfKqn4VvHjczkuXiTLLJ14Zu7ntEU7fvd",
  "key18": "2qvuT1wkYshBq5HdgNsoZBabDtuosnqaK7Mzn13HGz8HMc1h6ZSwknzCZ662CDxCct9agVJjdQKGqhnhju8LZFA1",
  "key19": "wyKaaK78oLQVNHya6At13eggStPeuCwpd4Vcn9wPSFSD9Vazsz1X3uXccb5cpkWU9mn6WouMVGGmjsahCXEheNK",
  "key20": "3SjQTxbw8rmMGoXxgMLpfXnSUXrXnh416fyjYRsrao6kwvS81RZ5JsjEzZ6yv2X3vFMobCL7rke9K8rX6RGUcZhH",
  "key21": "3ATzTNB9NkMfUCKxpE75foXPwGC2xdZi1Ko1LN7694NkZeFqrggREPVmR7KVKe5L9cKFyHycaoNKYW5vMaE1gCo8",
  "key22": "2eL95GEErSzwD4R7ML96x17C3yghYHCfEgT7z9hvTTxZN2h79pWDK62Vfh46TZUQfgVzC3bfZZdTaW1oemDMAbLi",
  "key23": "5ZcFMJb4UiTq1BKWnBNGmFwiw6yEDSVfAnWCiNvuFMNZ1BNu9npHRnY2TU9bkpdjBpFjeoYwTxy46SSvSv5GHdtC",
  "key24": "27ebGPpg3eJ5sHRxGBCFfgodzSxA8ahDo84peP8YaKneotE5fhM6eMejC5bB3WsS1htf21mKVNvCjqpCZ67eryJC",
  "key25": "5A8gQSgV8NQz9naVqSBt4ezk8UNChscPkDA2Q8QgGj79jk3VtwgMENZukQ75yJZXfW5CfP7RS7isWL53mPduXt8a",
  "key26": "4pc2abDnLP9eck5ST8hf4tw9Wr2CxrGf885ddK1qMHBRvzZWjdsssmyKXPNqD23vkmDRPR5X7K9CsfBk1SUnjEtu",
  "key27": "5PLwMJoZSuByiaF7PjWcKeDFZJoJxgY4fgo3qbwrzgHixNVmL64ecThZZkTTrawPfhUtKNdPUEnQjDG3kfK2SHCX",
  "key28": "2rSnefEvceM6LBgNvf5DxovjeKEiADPbLU3LrptMWTyD4k234JPWi2SjMv2fi1gbxqH7czCRfcfEpjZc4gZHcjfc",
  "key29": "3nKGw6BAzpZKs7DdfUt9TQfwVX3Tjfnvv3paUPSooNMwKYy3P6j1RaCF8AmRDr1vUyjfxsr2HKVpQg94ft2DCJzb",
  "key30": "4JpozCg2558DLJGoo6h2NhMVL5z7ZPff3UoqVSeUgU2Y9PEW8PQpfDJX7FX1Fgd9svBcDC97u6e5LtttCV5sih1C",
  "key31": "hA8WeNAkMQndDYzKsWZX8fFz1Q8yPvnDkyw7SM3DUg9uWKAZNFmuhG3DSbGypsR1FbobMkEUjKS4kmEi2cLUnXH",
  "key32": "272pgbXFxreg3wfpoUPSVWk4toeBPGfCCLrhmyjhpcB2snwdGi6AyqpoxZ79jnXouoJztexWJHNFSkW3ANWVeg7W",
  "key33": "4EMKZZ9swcftWe45FLWRtg997k5EK1qiPAZSidDEkRV2eyWjvwvaPGtUfE427HJoNZpLXBuKLt4Bhd7L2EoNRrTG",
  "key34": "3iZJLyUdaqJzSzEDvTPdA7GW65hvmRDsQZMFEbekmKJZ39W6wXEGXnEwSBNrGkpP4YjthagJdf7FphsanWqFmo5t",
  "key35": "3MeEnTexhejC8PR13W7ATzr8LsTKYLfjrhGrg3oDCmamKJqSTR6eA6DzyZqn28XGEpC7p9uEXKgv95GPzQL9DEZK",
  "key36": "4f7UvAtFVKMU3xAsv4WBgVMsRTaRkCVSrBjff9zYbBsbr4pNnMnmJRDvVJm4f3eEfFBbsDXt42DoZtX2JzW9fDvs"
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
