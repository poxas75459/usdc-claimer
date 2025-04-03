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
    "39yzmpgQR6h557oDp9DWTgbh2Kc6jGNoNy8WuiHLtPBBzQnMsUR33HwdPAXTfDt9nzzRRBRugG5m2pM3fVuuP5Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iVJxFTcfziKgZM1u9xkn4bEWUBpHApxTrMHgKz1hLQCNsddxx2x8J2pucHoJDmjkyGVupkUTndPv15nYSzjfCWq",
  "key1": "42e3W8qMhuG1KJLpgrRhFuJ3pGHVSzDie18M4qtyKKNpV9CcrwhoK4SDMNCb19LF8AdC3gfS6n3nP1hqV18g5iNB",
  "key2": "5yDs4sM81FE8R9eY4QLBW58ZqbkPmEwTBMFrfK5fgHciJDch3xj3PGWKGdqk6tVFGkpSiUg7SLGQbA3JYUyV7H9q",
  "key3": "4GNouTN5gK33RFYnFaYBhn9MZe5iTgRecVhmL3jRYS9sJWE47bcW1HPnXwAErRAHrMnWhu4JFPqZe82QexWjK7qJ",
  "key4": "1uz9uHKRqAfQqdWSwm57zFyDMh5uD4AHntemzQKRMGFa2sngxB5A3e5W5ejAs3okEfgkGiM3XacF4is29ZbNHTB",
  "key5": "4n2puUdPuZtbsL7sP5kk7LVmpvep3RV1VVptMWJr8cW1S5yea7xXEw4Tt44MNQWGRA5uYmCadXpGEQhSiZkfNJ8f",
  "key6": "Q8hModUYeHkFaBfZVrfRzhos5NpTT2q5xT1VxUM2xePfnixBeVmy2cHvyZM61XSiNU9hJyHvh8n4QYooxen3gTt",
  "key7": "u2RDFH29cXg19Upt5AdfPmz6C1gxFPLmSXEFNL6ykVsyPMUEB3CL49fsKmEFFuLYHNEuLYUwyjHFPqVLygvVJyk",
  "key8": "8fTimSKXH5hwQ1ZA9h3UfuAcUycv7fU68FExeWUk2srrZ4aKGUtpite2PB7UoUJDUuYCqQpJYyCJeTvKA4pXjsg",
  "key9": "4Qpdq4RisZHZRXqpMySwvpsirJnwEgBctc9BUamVPS5KyufN7BJUqc4wdfWXzAhzg82FdnEcMf6JdNxvoXwozNjA",
  "key10": "4V5xrFQcVbMcgCVPRWdMgENpMKM8KnQznBgHbsRfayLnDEXARCS1SghszQcNjKoomuePCnBcuVE5GNe85GMcF1i",
  "key11": "5jyGhWb6ttNhHPGqidam4cyhKr8vWC7LTLyxkoNAAZ2XTXsWUvQ7irLNUYsRA5vWhhDJEBDoY1cCpq98qrgkfTwh",
  "key12": "QniGCQnJ2u2T4hoZSw2euZR32TSWbsqiNUuyyyKpB6N7rBpAG1wF3d6tRtRpX9EgNeofXPdfpz6jwANNFjcv7Vu",
  "key13": "5fsXZMEe8tW4vHPLH1om28zZdNQ78VxXsUCwhuLKV9gxfvjdYdz3MW5vAvfz75RpNphT1r3LsMYgG8ZRTM9eR8CL",
  "key14": "BkkFwVNkaSVb9b5CtJJGxxfhYnQGtyu5NV5L9R3iEmotXrJRnzUmBoc9FsryxJmTuftW9CWwPYoUWe6p5mbksDM",
  "key15": "3hYZdYgaEhnx3bCssYBLcdpZ79QQAgjsdkH1RcgKdkbK6qvuZwThcvZh6FzF4K9fEct3h34VsYRq2stajpFCDGt1",
  "key16": "5rw1xRetzBkQFirVczw4vGXarRduuKi4ct6crxGaaNwhSbUfBpQjst9f8Qj2nsiBb5AwZqUJ3cvAxCDgsevRNp51",
  "key17": "4oWbxj5RSuD2ZfW5mr1CzrhhiG95Z7ardyw6hKHxLPF8wgfhZWcy1krHui6ae3xm8krNN6sMgLakXvH9RVpEmhwx",
  "key18": "2W2JqCY2ZDS2XipRbYY8dg3VnNCJn7SaWS3sx27rzaDbVXMpg95xeYkVTrhMi55RcTRoz93EL1jfUuyFsvDWU6no",
  "key19": "3UNBD9RbAjPCETRJyMxnFGvhKnxohuEPePS1o5xbhxA9D3G61Mn9heEEdpS1jNXi9AT4r6jYfpvcvApqm3hK3vd8",
  "key20": "2ysgqiENFQpX9Y9GTYYqyHhZSHRxJc9Ab9UzbVNymumrwQHWRUNFAL249TK1kLiz6zXxMysfZK4C85zXW8SkWQR1",
  "key21": "2ykVr5QNaRnrvzmzzPmm59vZtT7wEDKHJxcNDYwcEVaAMbwhvWRTpaHfcv22FC5HM8MSdXqXR4VEZM4U5YBc9UyP",
  "key22": "4Mhe64D1u35CPDUcprHtNvZumiRUQLmcHB1YGeKzAqziRAVZ1xFvxQDX6e6ZJBaoP5chekuufCw8h1SwxQt5CdBB",
  "key23": "3ecYfEynQXxQfrWNEH6zJPJhWRKXDkhAF6e9E2zFy6RpBR9tbC7N49fqJSJbEYfhS2JLUGhFEyZFXxX83zCCDqi1",
  "key24": "4yRavUVXjfwaYwC698LYkn4VsGj8UmSVqzfTUhM5uZdhWteGFKyNfGaS6NLYFXiG8oPggFon5t4YgMPD9i7K3Euw",
  "key25": "ENxcLNmE6gS696HrQrgBc3AkRSU4dupovPFWHq5z2YXmGNV9snSRmskqYhw4fKwRLGMDpwu7Xh3z5LUEtStkzsw",
  "key26": "5WEendatBnwN67wjxd55jgZQPAymi77niCRjV7LuCQZpoBes86BSZ8o7FUR2ohp35e6AQJcLMoMvFW6TTsrqFETq",
  "key27": "XJ3STDP2SghGYeTP9eECFEKsQLBxdsNAm1E1EmBoFpxsPgxVriGr5fwwbV3EoFKWV4QDQErbN3ymXQxyQK5SHJ9",
  "key28": "2eTvMFuns6pLYiiSq34nLsbtJJ98AakbtAHaYz8tFzRu83SYVDuP2xYgdsKtBX6KSrkfiFbLwftsW253Qq1fU4Ju",
  "key29": "DnVbHA9HwPUrbp6qWsjXimxfdd1LpvCi1u9K5KbRU5zDB4cNL6AMZSizJt5xfGwb9mBmBYkx4vgZPQPpYXVkyzq",
  "key30": "2EzUzXAF8R1XFuZSDpggPc2YM9upyVK91ise376ViaFQsXpXNk2jfA5sDmZiFXrpqM4f7bNUZBMvLakGx6qHZncd",
  "key31": "4YSFhwdR3ZY4uu2MAZUoCGrM2TLmYy95XsXcsASRVz3fWUubV3Mac5KkCdJ2PMXJQ7tMKckkVvv5f9p5rCGNohC",
  "key32": "3WdM9fETXi9dWiRg8CakGgAXBXRkh1qatA1GjyxXSGyjHDvYe3HYhMWoZb7rTsX4C3kW6ygVSesii6yPc1dF2R3A",
  "key33": "3S7JHa2rJ5L5WUHR1e6TERLQ1ycKVzdx8Rgi1SRBqmjBh9wR3Apx9RhWeMUX5NFmsaYTkHC9YPHT8Ch4ariwVW96",
  "key34": "21PaEBiPSK36WVzDaeN3niddkeyL9BWyVrvk2wCRVuY7V1s73Gb8APCdCLfFEffEqVXiVCbQaWB1kd2WDh6A7CGu",
  "key35": "43hkb3u4WSwGNX4qQETFisQJ2sjmmKsoEYYvicQjyWfZBWvU3Uqm4LtSiAMkELveTHRzqpaayDoTLXmQxGhrDCES",
  "key36": "3uJCmGfDFiraUT6zQG2c4pmp5vZpdkAobaMWv3d313zxfbs9hxCGJdWwM1nPAvKdRPZZow9TA2PZKLVVKFpSzRnd",
  "key37": "4tEf6YTX622PeBqBVBZ1Uqyf49Aqij3b42rLtohRTS96HEgdQYyy698sPqDWSzD71r3SQLUnuMWrsxtf6LdncTDA",
  "key38": "5kx5EXFNfvH2UMtZsRHzQfgNfeZ8guZHJHbr6SyJaFtoPTnhYMcd7h7QPAi8dV5YAYuqNYHzTYZ2TDmP8cr7beou",
  "key39": "63jBBkkJcprg3xyxKmcGc1t1jkFFqx1Zsmo2Jz5Y2HnC7Pe6sibFUSuqSpkSRWrhKigCgmsZxP7UTKzwLAg3xGVk",
  "key40": "5NhZZngc4fjVb9ERwZ9a4Jirj2azk8XWBBRoQ9ZAN4cmnaCj6met8NKyauN71bHjj2vxQBRo2sUwPGbSpyCaBc5N",
  "key41": "5m9AM21Xm5x9jPSeBQHai6L1yYcGTbykbxA5a4Rw3ojdyrvibzdCfggT4iB2QiHfgbgvpKB2GF9LWzcPCueduhb9"
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
