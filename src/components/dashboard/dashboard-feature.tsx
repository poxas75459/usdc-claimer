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
    "4wuAsVAgH2QTfco8Dc4yJeyyHKBCiXcLgRTe4zZNuuN3DqXZVEvNCoUMjCQbeZYpY4k75s1ZoF58sKxrAcespRK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHcjWAaXhy81T5ux9WyR1qu7q3LY4j1GkMnEsGbAgtfMCp7FL1ZeoBPB1RiWkr4HNxNpjpDMxyKUEsMjQLeaUms",
  "key1": "4WfwPg5s1L9NPt44rDt4vJXyVtWBmY3a53SA8XyaMRymhgJ5E1fUKHN6A8FXsa1s6QoWKk419y6jmA46Whx4Ak5y",
  "key2": "3NFPs2XMnvWWyJhgHrvEofw1yUfsxC1o7fd7xSpaAC1bk5tKrzFAjjLSTVNMnmq5YdPFbtg3YksBPqTgTTppwc1H",
  "key3": "5Kk8opuCLyjoXRD91RJStUgwtjxZ9rnBRuXATc4SkCavswWFyB6Z8GTAQVf8t8yqvxFpq451M7w528kKMmtCSueS",
  "key4": "5RDhgFZAyXnnAiMHA6AyK47bfzKcgDxTt25bPucHmmcUg8f6Cow4bM8qPoybm1fLQWemNHMZSccT8L6WcU2p2vtq",
  "key5": "2HiqXpRsV2hrvbUA5qK9oSstb2ZGk7b8rPzkfVABX7wdYvicB7qS3iotgE8Xk7WCAURraXT9bTg3TvsFj8miXRwb",
  "key6": "drMF9d9VCgqPeMSyfVF9xHdf4VN1tZUTuyEt2mFbiK3yNcJw8TnnW9ZegPDvuLjo7r7mtrD59cQQ9N61zmg87GW",
  "key7": "5XdVzrdvApHYncwzXNwQxe3Mx8MjTLQeg2tQDLqoP6oT2aAei3mwUmJdrKadojJGswjjpfpSJpLMDR6BHvoKLSjb",
  "key8": "3Xeapty4GCjEHwx8ZBfY7eXqdpLLSsU7XbEfDhuxUaXf5BHDYHKxYqLR8B38Hm7w5sR4qx8W3Feef5X1E44U23JY",
  "key9": "5Dwky4B96tk53DDJsHuydchR44WmLxM6YZRkP62znoqHmVcCUxwbTMJosjxcBSz5WwXRBFqtjpz2dB4rtFCNoc4K",
  "key10": "ZhghauSvHyRdL75iDvyGHUAvY5MZxpVMC6i2qAH8Anz9NrLs6ZHqaTvSSb9GRnntTWmTdhs8Yc1Kvj37CxXiRic",
  "key11": "5xBQxqChXRxkdAaz8pqSL5apeVYJUJ46M3ghFGyVaNY5FA7ngqbuA48zixa1ox8w41XDqYy6F3A5H3uGRMETJ4QX",
  "key12": "375K9ML2JvawpuJE8Kw4BZv5BR4gj7d1TsEsE7GEyGJmKqWeJEdbfLU4csY1qKtxyzktjtdTquxvYcxn2oiL31hL",
  "key13": "2B9iFSg1bLgcEVrv1KNzVJs6X8TTH1fwM5MgbnUeLrBNMyhqbWzppiR3BjnxXsWSYzeSYMC73yDoqtyVU4taeWwY",
  "key14": "2iqJ38H7Dk3HWPcKmvKzomwjZV3kjY1KubQtUdb1kH2QiVAro3nzvfYADfxGwgYq7wTJmLG879dCDwUXo5JhKr2s",
  "key15": "5qM8dzDFBi9cduJq4u69ESEubn2xo56ed2eBKuohXVwH14MTnLWjAhujeZHugEu1L3sFoQnNauTMHfKqSi3eQQQS",
  "key16": "3cgs8oxkmiQq91bUtJky6Vsiai7779WdbCnpUdroXfeTFxaWxoHTKSA1o8bBU9n99kCRdPuyqdaMS66bMNH1AVjV",
  "key17": "4MbHbFCEp14bUJDWLs4j4aPzRVEWvmqfvZBBR7PmH4tYBXXYioGARCPcsrT8pavkvQ9Q5L57sqEXty2aVQfMX7Hv",
  "key18": "5zAzgZPzqtetDQFc44NTSj2KFQcpynocDDHVhWz3jRPN1znt1QFdXSkpu2GC8nqaXZzx7Ag5qyTrLaFhnf9KKUL9",
  "key19": "53mzXMyrfgkmmpTfWB2wcR9jrErRJjiMtnFLpWH7sozy4GZT59tK5ENzL2xsagYnAy7o2Ni2Xmeii9VRJQ3Nk9xE",
  "key20": "5DAUBYLNopzSRZrSBWHY7NtX3fX1UzXsfK7AxrkPEbtJDnMPk9DoBbngifaiu4CYxyYBruzmJC8wMQM2uRDqhiA3",
  "key21": "4CN5hhrVWBNwkbYeTjKhYhnL9bDcGFF9dcbRtjXgSbERfKM8A7gJDvGeadr98Tf9LiGVnkY3mDwgdPh4JgNrvkSM",
  "key22": "4E4ciH1tvapFSfKdCA8R8EikMw7XNfTzkcUQML1RcEhqnRMcjYHfFx6z5xcSieZsFfrDMqLCx8PWd8N1e33wLbdr",
  "key23": "3bVwjh9s3KYyWQMzC7KkALNNvxGxnSRSBPHd8RySfh66iFay6RN3LREr1xrvTLqm5pQM152kN4s4JTE6MbP4h6jy",
  "key24": "3cuktAKWpk2E37svzcAMmCtB75Ne4JnALiE6B59gYGmMfAhvt56e3gcALjkbWLnPTTLAdC7ok3owfr8AWToHdx7S",
  "key25": "BjY3f9zmHokN72xVFhpf1YnxDqq92oZucGnhRNxiLtAzYHHFTDwKJReZpwvtQFyhmZERfgmdx9d5JUt4ytZkgcK",
  "key26": "5g9bQc35RseeVDsQiuquU8vwBaDU1Ua7gUXThuA6doU9C3vsfA6BRdXqMbhQhZqYAVgoUMCDzWe6p2KARKTvs9iF",
  "key27": "3m2reX6KwyHpHMNohcZZ4Mz8NQuU6GkH2UQALcg62Gy8qRu53NiR1EMgqXm8AXwYr4wSyDeHRwi5tdN3tyRgmWUx",
  "key28": "2iVchXfKKwjs3vWx17w8DLB6Sui8ZgsyLVhhDsLrUsGxjRUTWt497yMrpurvwaGZwfCEojxa6epPC2MXftCoDZFR",
  "key29": "2ApydhGerYgTGTfyg3cmeX6SvXTiUoiJarSjKRRrFsBV6Mup2a1sC6xHwtNN6LTKsCzQMe9873uu2xqYpTkD2Rnk",
  "key30": "4uXq4U9zHCgq7HhRHGz1w9WAoUkEgvVRq2mGjRtD4tNsEEVL2xiJP5ti7vKpQ7TuuVjf5S8GgAbSAHNUGYT6z84A",
  "key31": "4o7SeN5nrqZc4CCakHUhXtNvRsFmfjrUqofoCB5e5z222R1u82Ca1QAnRryRn2sKzv7etRqa9pH9BuKVxzKYQPtP",
  "key32": "4J2Uzfr1wgEcaYsNvRd4px32WLXMpjjR89RaQbjfVffu3w8eWHEpjNPZufmFsJ9tCQ2nHi2MjsUYBnRZxqwJL5XX",
  "key33": "oLiSJGVuBLHTSocjhBKhmQ1RXenBTYMPXJYd6yGoSQZ23eeQas3AcZn4kkCWVzPzaKLcdBRG4bDsbjRYANGYWTP",
  "key34": "4HKfcwYTJHGhZ52ngi3bJaoLvnnydYGmoP8dc7mL6bEYR4vuS9EBb1cxVunZC676CtWsx5YU989au4tk1JfKvgoh",
  "key35": "3LytueVEp2nneFYmx8NuvdmjW2Pt4EULu2LaWPQTAZfr7Q3ft6RLfdcjaSwGqUPRmRLmrwJGnaChVkf4zQZjKLoz",
  "key36": "5zqmmR19bd3bMzLAxSHKc3TxLcrhknakDCnCojkLdniuWTU42ekc68Zzhub7WUXLQ51Xqwcraj7KZxdAh7FerqYq"
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
