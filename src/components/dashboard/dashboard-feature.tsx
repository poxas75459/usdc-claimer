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
    "5ZKWTzwQUokhyNm4jyWJZd3UD3Rc7RVuahHsphP7bN9c2yHsEfnz2qvvDDsLhq4gXcT2NhXC4Sxdsw7rzda9ksaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VaHwncJvTVfgycJtivHd7bBQPTPHDFiGVRFX7Tgyx7Q4G6cUGp6JTVTDQ5hGa4T1vosWLpA8t6vZSPwNfZ9D1za",
  "key1": "Ybz9Dd29BPiZoVLgTgj7CWpP8HaNwEReaird1psqMf3uQ1HVfgeMV1e2Bs6teDyRDtqsz45QJJ93jstEEfhW5q7",
  "key2": "5FoBaUZkHatN3AwnVbJeK2M8VFs6VQGuRkdALKoMJTY4QA238voNZBFtPsgnM7zjqzG2s5N7hswMn84BSyUjSJqf",
  "key3": "5NvLAVrecYMjizYkjRoaqDj8NLAimpuXg5xuXNwSgTWggZFvN2CfQY2JMrdDUtw1VqbbdtuCRw8bcuMo6Bydte54",
  "key4": "6m41UPEc7B5zjHCYJ3yrLoGsjdMJkNWhz6kEx95zTEsHoA9yudh3tZ61Bw6hc2kMor7Evn7BuX2qMDL2x8MsyEF",
  "key5": "2b66mq35oSYehQnZiQkaVMaVTk13n7RoZpn9cp5v8h2ood2qdp9D6duoXrAVrreFzNmBkyAqk1AMhAmZhNr7e55o",
  "key6": "2wVruyVKVSGGzZTaZrbfveCZJeGvFErBaNvx89fvPU9bTV2esAwwHtxnsAzCeXD62rJEX9H2LGyYCi5uzMSbvHcc",
  "key7": "4JWyWZk9HTQXHYsxmh4WBA8LVWFdpZM8sjYN2HFRTLnEMhpeKEqdxyHC6sQvevqZ66QayJMszu9g3SqWzxUSzKZW",
  "key8": "4sYVQikMWJhjYtKi8EBtb7gxq1D8PZMfGTFBJSh1QP7bVTcc7xFQhiDuNFfGFaXuRkSnUEhE3ioRTM3LDVN9dDzi",
  "key9": "pnVQrTw8k74mkiR8qu1ojXZ1Q84iRyCJn4j9fEzoe7hdfJJzQKvuCm7PsZ6MQ4SnNstkw7awKnYxTyuCPvePQi5",
  "key10": "tg1bjEY7C4TUUvop7pJvrgYg46j6qAKyhZLawEj9vQQd2sgF9cjKKUVFRhd4XLk7XnqcCJUbAEqZFaNNVMCTZtn",
  "key11": "38qHAe17vpZL792Mkz4iiRNr1tLSib7xJX8bdcob69pe8jNpn7bBpDYUSSoW3TD2unb1KXcVafqDhLmG68ZYUgkj",
  "key12": "4u6XrMHjVmu8kGxuttou6jsqHNPgRmQm1Syt2NbaJkvM312Z9779ZsySiGBxu8XU7eade8zkQgpMcrfsDSDD8zf2",
  "key13": "5TTYT4DCFaddBEoYY84RwcjuBNxT1axZ17ga4fWNkGwLVduBGKCb4rR5fd7DHMik6YV3U19aZomBxKXE1p3CBvWW",
  "key14": "3fMZMNiAn42WjrtCLV1dn7KuopMA6oCKbmXudN2mK6uF8xtJB2CqeRMzSW2oUxidfbN9jEqKkfiwS8ivugz9yqyy",
  "key15": "5xLXW7gydHx9GXtgwgn9LWeHoEECu9xMHWyCCFVTBpWSvWHPFrWhwcbBGkUBsy9BQYjcaLeMoGxm8x2Mwf6gX6xR",
  "key16": "3chvb1Wp4zhXGkzYAauxTmAC48TTRS84qeLeucUB55HSzLLGwSifjm7TX8U8FxL1HfDgUwgzWzWEZKkEY3CwFLPz",
  "key17": "EFeeX2nsLMExFxkLAMh4VbvZwecPgNDjmWuNet9sZAGZaRrP1WbJbu1v3ASbPEvaNjC2PHDEfNjoLS1igSw5t9j",
  "key18": "5gToXxZCxLpQf9DxkJmmWiNatYKV3Et61HmEVSVjQoFrBorx5Jmwy614LgA4eL1pmrxpecXEKe9SK1jdA4JyfLxU",
  "key19": "5H9pWn9H7FMZfdvD7ckWdXUoFyxLWpyTQq8k2sVcvfWHJWFyaQKawueiP1Ahbn6ecpFoKLuznv91QNj1DadxvSy7",
  "key20": "67nS42mUcdNoPW1qzXna88mt1Wz2eeixsda9Hc8hj5r2rz9y4jEqkzfQeEiymMdTecsCJzjfULzBH1MzteABu1AQ",
  "key21": "2MUff7tS8yY1Jhkb1NVC5Gf3ZkSBQB6sE1hn2sgc3GwDKev3CSorFWY93dXGp9Du3AD7N8ioJdkgRKz3jrJwYVdC",
  "key22": "34Ub5rssFfKYy8pepvKrp6L2eGHnAbzt1145YKxXgzNVhfnjTUNxAbi7rWtoZAZf34MrPDbWq8AyVvXFw5rHH2wz",
  "key23": "4N3U79HvAk4i8Fm9FuudCGt826e4Bs1BDyFpFjWCaTH4D1ReAZnGBZ1Gs1iF8fEAbYxEcMH1SaSZgsZVTz9kHfca",
  "key24": "RSmwqnu7tyYZqWYSXGhFuSGhJGsuVGiHMptsCLKy9TD8a5FAtvP3SBA8ZejPg8SWvydkuMBEm84X1D8ixQ7Eq66",
  "key25": "5qr5kFanKKCP985pAYqGzXv5QxWG37eC4E5pLgeLx3wsEp2eHseQaFjBi98eSKrWerNYZ1hNgFn9ad6Mr4WLV97x",
  "key26": "2i7YDXZiqqSRUdhdSCTiHXJKedKqmo5PkXHFPDgRw5JWQH2gQAMiMBox7h6cyjeK2eFvgRAk3FybS5b7meEA1ZNf",
  "key27": "62qzge2wNVkDwGuqbNtHkqBKE2HBKCL7L8xt8NaEVWSYPJuwfKkS1eY87T22Lk78MKb6g8TRRFzuUQBtVbRrm5qr",
  "key28": "4KPtp67uumFjJb4geuaWfP7uqqiiMyfyawLbbB4MscjDyQpmYpXyoPjuGWa3rsUMWP7nM1Yd53M8zU37oeM3BePs",
  "key29": "55RroiFd1r1GXzjVVghKq1qozuDtao8YKnU3P8UcYWcerV7Da2W6kp74bU6bEEKhAkSgMN8xRdHPy4c44ueQ9k2e",
  "key30": "eSwP5z5EkskvusE6t7K9FwyEBv65gYF7wbgXE8qpYTzE99SCVQovU5gEZt7yLsqzAGU3j2UzcijcuSo7JKQyG47",
  "key31": "5kEvXi2bP4ZSKXwrHWM9oujAACANUWPn9L7G8Wd5vng4JgXhEWGqFwfvf2yf6CAtreadAfaNdD1HA2MXj9XW6e7A",
  "key32": "5kjjXq3ZLhQxcXCLcBY8NRV8uxE6zojx5qijy9UGQof1v2gsGBhWbw4nRdoWKDGzVs4hzw5fex6F5DisdHWZuqxj",
  "key33": "4twn2EiFFncJZaHgH3pMhJyGSNwdNYV3sPmf1ugvpAsMMCVouvUEaDQJ7mWgRi5UYowxkrjWc1wQbRY3Yr3zvt1c",
  "key34": "5gfbp1qcnbUNiJws2fP44aKARqNofxPNf9L4wrUdY7qUgGbE4DDn7FX9AinXrczAvpjMm2Q7kBhckVCxd4Bo4m1d",
  "key35": "4Jnwgpt8SpKEkzhuxgfn8ts4WZWeem2xU5nT1zv75XFDL6mo1KJUHCj8oCudsxvZLJtPWQqw5WxT5dMUSuu7z4NC",
  "key36": "67FyAMDYLAaZbAt8MXhhqY2MpuX5uDnYoZRdpA3a5u2FSzxE3p885q5vbahNYk6MacZZjgwTy8tRVaFhjtEa3z3p"
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
