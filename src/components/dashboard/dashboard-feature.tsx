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
    "2HFNcGhvzxeaceUcvKA4hLAVute3fTRud5i22y6XetRtNUegP72ebW1gaYUwHT1EKtdAs3JT565Y9YA8efh43oe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cQXAsVCxFfsheWMNXKnHATjvjm4jCxgk2nvoT1hPtw8WEYbiryiot5VznaT4ccSeDrksL2KGPmMDc2vRDiJqmRf",
  "key1": "fxF3Zj1BsyaN7YJucAQE5yjrvPNv13cPU1ZJ97S5r88VPNdRXW8RuXCSivPRocAT3eAP4Jh1qbjLVW8LfgSJYE8",
  "key2": "2YuxRTfdfiN9skdVE2gavv7RMitS3G3LvQJT61r9LbKiTWsV5gcDXSseVzKX7xMM3hYhNHoZTktTcfKzbqxcVAy6",
  "key3": "2gLAdjMSXFNBDztPMau6jQ9dZeiwCqsedfMwswDerqHcSYdjCUUm43QJMaNo6RwmUo3mRjmxcQZ1xnLao6gHybqJ",
  "key4": "4QyzKmcTxBa5h89DW7YVcATBSgmHTBvKjZAosJ1KV9Pgkzpja3ANXvUR7YWsWB8n9JUebfCUjJzYm8vQEMu53BAL",
  "key5": "2wCcUayyxbfwiaQatT5sHqhvM1UnrAKYugnryx79pbXjFkwEWbMZnoFRbUjmXQ17Uerauo6V81xU5W6Z1nZGDpda",
  "key6": "5wWZ55YtgX8FaLDm3CmHjFjU62FQr69MZ2ZHfQ1xDf1ZMj6GDZu8dvtVDbKFyyRpcc3Fq91G7ZC1vnL7afcD8Jpq",
  "key7": "HsPZp6rxgqQGufkx98vsZuPzpHYSYSeYi9Xzb6c4oWKu8gt3Ktj82HQ5zC1aRysjHGnBw14onU4XYcVuT5vBqs2",
  "key8": "5h1xKt43PNY5e3TTFy2WBYJxifUuBPJVBagZTazydHEQ3ubsefWzpjRrsjNw3zjGyy12ddqjXAY5eRjbxgrC7jai",
  "key9": "2tBpPC2M26wGsmwvSoyxmBQ6fAhngnaa941k7tdiseRkaenW1GEd5PTRVDT2K2FHS7BFg5gtMqMcWvE8vfhaPWGH",
  "key10": "5B71HyXahJitj9EX21zNCaEzknUHVszxToYLFWDkxM1NJroLrqpkfzNgDfXj9CBaR9kbRf56hp4AZat5yxQNkh5E",
  "key11": "2gxM9bxxyNjNwutbJA5a7uvzWgVoXzZSRgq923eW6Ft4DEEYj1BNjNd6cyH1tpkzoXj8FiLXKKx66zNsyJ6skear",
  "key12": "4xNj4xm8iHi4Tg1DYXF8CEaQEsXqaxj1TEQkrwARWKB53LnXuQRKiethUdLhaF92JCgRd6t6TUfrbgoTQZu2q3Wy",
  "key13": "65AC3qD9rEZKKkCEgwyh8LdAZayH9TsusMVSjitzf2xXjc5VksYWqqJcMrYf6SG4Mxo8YVpqE2EUcLFYKbGiXQ9G",
  "key14": "34SDeDxMmh8WNrG4dbPYZfx6qYrxUZTRDYuyX3bL9wcUYqLmnBqxuocifKPjKoTx2pvgKxcqdQHtvXf5BMXgodCp",
  "key15": "2aBCn62XbvKnpu2rDMHUgdy16i9LTCDFcc8BP9gSMvudHnUceeEmvheBnMbDCaa3TnUKhKykXDRCP1Kb6xoRY2QF",
  "key16": "3K6jyu1KG18Uypc8ppBTsJaMm43CaotKzAghi95Aiuv6dTeY1QL8ZUS7zmnb8eVb8fZY27RrY5yBCp2u21Yd7iUq",
  "key17": "2tx3PSKFdLMmqWbF9erUfSQZXXQP3nHH5TzpVDUDzQEUr1E43pKByc8EQenDCGj7kTEFpcKVc2UEfNgjzFyjYzGn",
  "key18": "YvDT5yU1P9JeeYnZ4xLnLnDpsLxArZ3CSu54PGEMau2HBjXok9PyC6FNorW2g3joKsxDRKHQYkbPG4bcU1ahMPH",
  "key19": "XUCiBxP2LSa4eQpJ8rjeBnPpVw5RLbVvgdpYVhmCYxzSDDqsoSPnofUQ2N6viQuETm5zCHjTEDGh2zaVuGnACYR",
  "key20": "3rvJ5X7ShuRgfATgGLXvbw1FH7t1iU3zAXQiAUhUdEDAv7nJyzCZ7rP2Urog9zwPyj5AJGnRbHGvpxZCxD5JdPoW",
  "key21": "4UTTbj1Eeu4LXj5HPHxFz4y4hGTRmVqECUb8JHPqiWwyUxwhAm5i1cxqyWmLRVGMitWR8wQ3ucnjfx1CdonN9x3y",
  "key22": "4GTZGSUWx3MDw8SuMMuwVTt5Qo8nzBpxoipgrvES2ALDGH1ZuQbz4QCBRuMYJTZ9f4TD6s7oGpR2kTz8hpY5Agz5",
  "key23": "2KrWw4hgTYwhvKGRikgg35xVs6UGreRXu9o8JCmX487p91E7b69WRcKSbci8ifS11pR6DzshosFgPGArbSmd7rbX",
  "key24": "66y8UMMQe2o4EoYdp1K2hFTycZPhYppBumNQvXQFrYnckNvyyqpj5myFA3xXaMJ9soufQnxrcfiiWhtrL7dY42Ge",
  "key25": "7s3SaKEganQvKtLeL3qXpNsxneTuvo3VkD5Z7oSuUerZJwkHK4hJ86r4kkGahAtB6XqFibzm4NxLb5qjtHBHhnM",
  "key26": "Z3NyRY8HYwy99ZQPhLiFdK3bLTdQ7kDFVek25J3GtwWLJyf2wUFTLVEvUtB7EhyMRptnhYRoyK8ijWQAEXFm1HX",
  "key27": "4dARGVwD8jP9ZJSBXaA7CoJ91JkLoQW4hZ7zBsjLhVpwDQPWCi1jdUGMPSkPYuHkanhT2PbzYnnJUEKJzfKkL4XT",
  "key28": "GwmV6hUp3jTioL8k68SdFMmg7JacpQCk7LeFieXMC2GYv6LjW3xWiAoa2M6vNUaEayRBmNQQRDsxBRkcwz6y91R",
  "key29": "bCKDZZuE2G8UUFxk6RxRzVeaF1weov6tU5sQuc3K2gZdoTkYj1pCpFPsgwS6dxMd5vQPZypoMjVMr8F4Q7iGHiF",
  "key30": "2GGY9PQkjKc7jnfqToi8DsotupWKcp3X66VxoCWzfAt5Lw8DccPzsvjFedbrHNEXmevvdLHn8t4FgEoGTuGaGDzU",
  "key31": "3AAPF3CWZjtj5nqGdeGPGwTy1RqCDdRbHZyYewCmBn4sn5iA29NFdc7SzGL5fivLxFQu5mcvJWBUt195Hj4vpnd9",
  "key32": "2ZwmDyr3H3gTgVy5QAov2sNhEVhY8BQVABLNaQgbnwJAtcBsCaX7s6twrxyHBM8NCGnDTkDDZu2BpM86vsMJ3JXp",
  "key33": "1jWwct4QJtQvQrV4n6ioDNnVQMTQr14JhnMTJ3BT8rp9itxvVDfixpen8Tv66fU3KuyyjdBcn9PoxVYvMSxpfK4",
  "key34": "4Wb7JXU5fY6TmEVVDGukpXgHiinjd2J9DbSbggSzkrFNaQ12CApNPTqtrfVZ5mMnp1mgHsvXbKHNRvkCcinphmB6",
  "key35": "3aZMLGQb487BFD1R3NcJVEmeL4X7DcnmZiyuZ4zRK3MkUaRQMZumFcMEMwKb9gsY867XXKFKvdNjYBB2N7NZYXso",
  "key36": "4AkPoVk7LzfUHNLRaHkvmNaKyXjrEzXxDnRiGgSk2CdbordNZDTonJuLY36FdrSLuoysnd8N9RWqXVJeBwvsrtsr",
  "key37": "4fnrmf9pFsp3jYU9LcRw9QsYffQJ8P9kAKdgv616LBRvE7M9az6ptdeQGLpz3aUSpUcpvzukQA1Lr2gWSf47hqC7",
  "key38": "5NWMs2Lw6hbXada2WQrK68Kgsr61GnhME3Mif7MnCG7DCw8Ae3stmbdZyHNer7AdYUnULhDnw6C5zorw1tkSozhM",
  "key39": "C5uyJbsXUmdwVZxQSiGhnJ1Pdk66PEzJQrRze4s4UKbrpGSWBs4BCkwoWJPx2HRgYN7wy7fsyuMhxDxzzpeyJhj",
  "key40": "2XuYnkXyjAUykrYJBkGzDGZm2VoJ9sTVbhtFFUjpZQ6Ywncr2aoTqZksu9VZGj62bcYqPC3BU2u2YMUgvFitR3VC",
  "key41": "5WV4mX9tWyTDesPmJmAwa55ahMNo8zStvjVgSnsmz9sdbKLr6gpopoNPijLrFvaQYPnZ1qS8oZhD6SVGTus6AQL3",
  "key42": "2Kp6b8xYKpPvq65YQ9mV9fakKxskUzLqmdCPoGEtTJPQR3fEyd77dYprebiKD6cZCzq4HJLVLAekneMwvTraYv5C",
  "key43": "4SFQ3nFq3YCkb82juCeGSghQPmDL3ZproezaANdTb2LrjGfsryQvHeDysa8k28CWMeXDcPvfv5Q66pnCZ1wZzpsV"
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
