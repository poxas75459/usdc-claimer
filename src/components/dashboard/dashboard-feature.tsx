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
    "62mkSsz1DmZ7DUtdd2eMAUnsN4hoK6YY9TR6JwrsLnjm4YSw4C6r7mKPAGTrxyu1rBWwGEGoj3RBHQsmFxfoCuCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zUQhffCB6MfhzF4aMmVw8W71oEVYEedVNCzC8BzyuvgqSUgqWkk7AWqvfyAnWm7eiy2n8pBRCUdZPRjKmTYtLfx",
  "key1": "5PAYz8ZcjtgxgVr5chCsMSrcMrewTBZWAM4av9DsKHUPwobaeCw9cE1RA3GM6LykyBAp3ufRsSLXxDjMxMFTG7CW",
  "key2": "5TmPWpsAAZA6wCRk6W2eGfURWexrzr7iUfHdD3NNBrohbt5D3VGC3hQb7uKFidJMGCMLUWXuZJ5gJ1djuS9uBN5T",
  "key3": "3e6bttpFBhQ9L73Hu89WxzMg5GaxTWmoyRXwgXi1MRKYaHdXywHz63qjQys9E3KQxJ3Dqvt2oN9giwXDELLUsQvk",
  "key4": "XBAwcp6MPZn95cZQvDvo9uaYCkk3UBzRWQhDuPnChehB2SKRD5ULSPGz7cN3kGqdQVvgrA6UUy1KSLspHysXgoh",
  "key5": "PbL9RUadZhazfNoondi5DPXprWfKYqcs5cv15H7favJiyiUcxBFw8ZTbevV3AkWXQBZaxMtaeqDYuRAKWfGFKja",
  "key6": "4ubujDfyufXDAf9GJWDeBJmvVkaXp7fm3JisBw6VbhhTdHZhPzJhx3cwc4GsRaByxWjsVoac5f5GiKDw1SHuJDcP",
  "key7": "35Vmq8vLUnUDpL8aydntjjyfxxDx5Z6B1eNCqnfUhqg1g6MoLDCJjmMLXwcVtSi7HB7wntFPuLnSHJMwUy8UTcEv",
  "key8": "4ja6FxuWHxfmsgaehg1awdmEae1Yc7uAJFHbkUzAgbpU2nhRJQqnX1263rohtBJTvnKBAzmWkYm2TnCYzk27nDmh",
  "key9": "2YEX9boKUNJgbtEdnmNsbaw8fGjHfvJBxjwBxe3EP5u91N3tTyjRx8HapXfU4nAyiDo7wicRtGmfLt87x2r52ZRz",
  "key10": "2Eof6kDv2KKdNqewFVH2N1ZEnqa2EMbFQSLJpk7pAmLTnmS9QR6VrzsTWZE5L7AxAvPv85mNaoXb6t7Sbg5eRufW",
  "key11": "31Zpm8JbGcYLXQYk65CspuepwPkUT1tyuVmrE5rJiiesMnDXw1cnx2cmBMQY7sVWi1mQga4QHjUAa1XajfEMp5hx",
  "key12": "2XTek4YC3LS8CZqbH7GNmtRPW2sHeTG5CExK8ofReJKjgtBP1JbA4Kq769qawKSBXCrmXbYmL3tPax97rxtWrAR8",
  "key13": "3evV7cbp5CbVPUYKgSuPxSknuF2dSrvC6SQPJ14gfWq1hb4SS1dmphJN8hK5opZwwLhBaPK9FMcz1DkoYA8UYuYf",
  "key14": "3jtqLZ6m5AFMdNP2TWJA9zYg71wE8hnAB5f265ysVyPLxF1GvL71cPHqqug7V5MtomQXCqYNioKecXhga7fbDw4g",
  "key15": "3NGYGY4ZTpBRW8CX12oBrotesBsyHirhhWUmHmPV3TFi4pzJLtwP4PqsEXmr7rPQr6hyo29CBagTMgBqWeEmTdQL",
  "key16": "5hdusMbEE2aw56pNPLiqXeCDkFQ9mTueTjQT51trZ9vRPpYc8hChNwKodWxNUJWu2TbxZbt6oWo1MwaxzJruZ5Em",
  "key17": "3q35tLqDEJ2imASLhBHdVEa75ZY9JbsHg18zLjLyee1pxLUg8AXMrjRQFPnfFSRLvrqkGmDZT3hh38DLXhty319Z",
  "key18": "5dQagTKAtGisjPfiGH99vMjM5DeKMMtLxS57rv24tCJgzgeRFyrx8u7daHCSUswYHP5aB5kCyqT1MSk7gqJNaGXY",
  "key19": "4piN9M3zGSorJoUqGSXo9GqCbmsMZ53h9zWo8DioP5cX7P5ZMZXjcLC5cvwX3dATPFJwepe8rYAk6eRzF3VaudFD",
  "key20": "DVRnRuEUziAHLrEsgTpBeuAU21ke4fx2RiDiyypSfttiCjS6xAM5KJ2c6M5DZKqJitQc7G8m9kd9Btdbd4KVhcV",
  "key21": "3R7jzE4NrgisMfU1QsEJb5apaK9V9bDwRniJ6UFCPFq2KQUg3rrhkBRJ6KR5mBMeuzD7cMsyrSZCCHvVnkb9N2Au",
  "key22": "qEdZVCNYsWK3DCu7xRVZrV9wohuvvPyDvvcRU88MpXR1rw377tuRTSkwSSGuTM8fbKMBV7Lj9uuSaTuCrYzsWqc",
  "key23": "47Henh1RcZyhsPognfZjXaYboiGUgaeUJQaVVBc2VMV768Na8DKLsQpLEWL8tS2sBdNAetxZJndNmV1ZdygnUkyC",
  "key24": "DJUeA44ADyy9ixyRVDzAqjUXARi44FUPTsHRXMtMjVHj9JCmfekbQASpCULaa8hC1sKV2HsAsyyWRu5gTTgfKUw",
  "key25": "5opbm7QPfe2tbvnsDLfQr5rEgVJdPy5BBFWK9mtCTiThumGvkne5WHHMLpTCK4225K76ZLjGtzxasELHCVBSV8Hj",
  "key26": "3cUBLkhaKNkeNwY7st3RcsvhZ62bBgsVoi6b1vQ6QwQ6qNJiZNVkXEZiNGJEWjFW26WwnDU73XjT8aWSjRnCerob",
  "key27": "45nS5FsX5gGY8VbzUdq8TBNoSXxt3mrfPPbXij4KZ2DPW5L2i8Jr9DdLb1Tb1cCkpmU736NVpEEzdoCPQxm4Ed9g",
  "key28": "h7obYzzGMLEFe8reCnN8Jbu4YrdQr6SiWZN72m6TmkSzLhtqjyT3GJNJgk3AgetJ9YKXsDNQhz4ysLqdmJUB8ZM",
  "key29": "3AkUd68X2zRLWoon3uf7ThHZ2GdyHr4fqmiHhsdrmE3ieZQuwY82PhkNbfB5CM5cR1c6dJM8JnbsMujVGjLfGtX",
  "key30": "5LRTb5immSnbu9WXnRvxxoC5oowPE8QZJcrJwoCx2m7ordEzYGTQjwaduCLNN55L9K9KRhgoRcqfL6BuKW3m3m29",
  "key31": "2sgSVBo9Ym9a8VZiTguRkGU3exagXsLhVaQ7QhdDKvyBrKfac4XBGYyhWwMPRa9wwFckHaRUze2WKsKNnEHLjTNS",
  "key32": "YKRtdRBMEwY9SixoBPGfMjWmYP15rzr1qA6yAqVyE1dVtuVhcCJoHs9fXGdsRQFwzFEGwnPn4JqoXTS4X7JyLnU",
  "key33": "AXN8tPsDBLdmfJYbcGQAYXBk65mn3CRRjMTv8gHLLb4uAw7xQHjVcYN7wXk9Nh1nwj2i2X4i6FMkyjkrGMAf95d",
  "key34": "5uozKfMedHoHjD2QUr2y4dmWAqLanTvxXnNpv6HLGtwvLSczXQVEhCgTszSY5rETZnwFc6RoA4dKnZhUCAZGfhU3",
  "key35": "C8rcTT7RJQQu2NSE1RvEBarrqzV9a9cXt7h81EzBjTbU9KuFqNLbp8XqaeAbrLjkQq17TtQA28GL7NFbRuWenzR",
  "key36": "5XQj6wpNDXSNzV22SUqmKJSxwY5NDa37ynWHM9eKKfcLvdiDzVvAruS7FLMgNVt6mE2JAs75K6AEeSNMT7VnjsKa",
  "key37": "41FkRyae5u82uWRT1j4NVDZ5aqePAzPeUCAG5qxp2dooMPK8TqmQiqFckPzmxbjc1PG6B9LuxCYJh612UkNTTM57",
  "key38": "2ci7PuKkvgFCW2GkRFuTW8f4ghAc91sSaBnC9D5fDtNww482ogy1ieS8pF5FeJhrUoERDNoFMa2e41oqsvvCALDf",
  "key39": "3ts81EV4xkhGWDwe1xN7xgGLygaFXgvnbzWUcX9cksEWyZ1vNyaJnoihLo38KKnNXdv8diLsLzrs1HH9puvrzwM2",
  "key40": "4E3zUivXiTHddASocK7JSLYcS71EsP8yF8x5FQzqMVudFyXu66ijHW9K1YPdTsNTiCHAZmrEsAEw2233yW8w1WfT",
  "key41": "5D71VWfzU9s4xqb4gSvqUPBz2AwGHxbcr5G36n9NRBuN9oDgfwKmobHPfePkSasU4wZVkxrsCFD8kh73FVNrqPww",
  "key42": "73XNk2JhrfpR8feaJvm4Cox2L1tcmjqWVsZXR8t15ihdTwP1aief7g1NvyJr7CBTNKNSUMJZdwrVTnPv8wQ44JS",
  "key43": "X9PSvsdLYYMKoBoRzdqQRyDAJPMrRVaQRaRPxJZ4sp9S5NMHiDUigjW6XSn5CPU94Xr6z4w7HEhQPQSFn8w1BHx",
  "key44": "499VCCprtQpoc8kAtwVDuyv4ZGg1XBDsFRRjSjz6cHr2JEs3Q1NdHvqaSSGmDoLVRi1Mn7UzvjtsjX69habHUXaj",
  "key45": "3Z99oLVMzrqoJmk3iezgsmueyE4UGpeAz574SeBGeZF4xpVCHYkme6tGKD2t3WQoze94c7WSk5uwEgXA1xZ9UNJR"
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
