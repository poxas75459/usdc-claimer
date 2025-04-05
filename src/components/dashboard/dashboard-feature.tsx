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
    "56qzHQmWqXErBmfb6KG3gQbcXVNEGMPGzpwxeuJLqHoFRvd2LSaprett7bZ8fYVicjfkZTKLjRUB36xW1PxC2Xm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArRXFi4kygWRzEwqQtL81ZQqCsSp43eTF3AEt7LKpsmBWZXmFTJqkmD9ssmvhb1ukBQyHNozvqCUMn1oUwpko4S",
  "key1": "5P5bZM5WKHf4PtJYEJb38HXhXh98FLqtsD2zSxH7R3ZXF4H2K2bLqYv4qfCB2cEXF4pN169pNAovMLjiB5MHQ3vr",
  "key2": "46srBdTZCLmhECqrMEuSp5T4iLCVtJHis4iWMnHBNJiwCPtThrBdFt1zjbPJzBoJ2S7cfW2LaoxTT7jDLxQUcSa3",
  "key3": "VwyVFrZbcLWq9YNvLhEq8d18Fzi8sHXYxqWZkCLV212EDnaTyexwrccUKonPwTTz6F64U2xaPUVJe1S9eKYHFaM",
  "key4": "2Ah4KsGRg8HpRDqrq4FNsDX3JTzCLrQR5e5War3CGJ1htmruWZ631Sqegr66C9XnmKv6gE9MaMSWzUwhnSmdebuv",
  "key5": "486PmCExWKDXCLLKFku5CepBF9FoVKr5PpzfKP5TyDAUH4AeC5zMKXQWrdDVSPBXCCUbv15pFq7w8esoXr4qoFfP",
  "key6": "3ujTwbtwSPrwjN8BNsL63kHuBnJJ9WXeC3rmtXEhpBZMXNixTdDk1BGvQEnuaxeREEQTrM8pSq652XEFErRSidZB",
  "key7": "32DXuJ9awFLzWMF3oWvXgW14A77Y7Cuuw4RxxeTmbaWhVsAY4xBBwAx7nCDE3ZNAtoXVbuMxBapnkLAYW64C88at",
  "key8": "5nE4xoFE92vDj8NxkvhQeHYxfYm35amU9tyyDAYqZwpjv1THQwFavvifaiFciwLTYESXoi5Air1MBCqdN7SLuf1U",
  "key9": "4cNjR5YQhTxnzzb1bprRrCNv4UMz3bEUP7dWSL8MDLn1R14ucFqwVsbaVZfjW768CZutbANWAZs35nMJ7nNWKQAV",
  "key10": "2XzfzTHYYcp2vC5yZPsRRjvyWzP7oaFGzuZLSTu4jjB1asQvSEtjmNCMJXLw3bKowucsMScfwpAHTRDFeMgBySSW",
  "key11": "44nxbaDiMd1EjRfRVABTMwuQaZDF9GkPLakbgTXpmaXUwUgHE5HFLXN4gWK7kY1EXTSEXvuvGTwEAumkeAwd9Ty4",
  "key12": "qSahHZn123bUKLJxYnWHDT8yRS3KmivnS7k7SyQTAdjHnGku2MAer8w78xwZ5t26YNEcRuEmDtuGfu8693vCWEw",
  "key13": "55fED4HCBXaFUNki6yXwbMdxbqHyyVy97dRLbgpiKCc7ZYNbaCiTDYoReccaqDjHmwwPrYxy6LAEPCzA5AAs9KsS",
  "key14": "2boiwo1sXbF8UNjgrMRY3YEVY7u2WfG2jzrztcxgmsd7dHY1VJ745iqHZ37GqhXEzSPLoCtgS7dKM4nQxpdz3P7W",
  "key15": "41DniXfpiFDqLEQSWxowMyeB25Hy84qi9UV6EkDMZ5QmM9DCoTsxUuhi6WGLDUmyUp8wmBoVZXqt7j1AaDa8fuwh",
  "key16": "xbC39hqdxHzERhKC6ckeVWD2QnFRy64fZUAuQ6QySDSGPBnuHTgkywiCx5xKcRCmtJHkp9sEQppUPtDekEhFwYm",
  "key17": "51wjtNN54vCCj3fDXEeb8t9BK3bcn8f9EGRXeaCKGso65hzy3VJ89zuGB7UmPTYdeeshZKZQXRbkQAJxX21cFF7g",
  "key18": "3gJNVri6YCM3DXBYJyzutrwVHbpWDyDTiezKmpAP7YKPfcqX88CfxFFQMiQLaN5cbgotihgNFvRTC9R3FKd3ya8F",
  "key19": "4AjRZkNNeAwqQwpeW6sUsNWzhkyCPQWisskRN7bQDWnMYquKxnGGyJ1qW4UEm9nLgUwqZ3UM7RxNmZq3jesECgVP",
  "key20": "4TaDghP9R4hwrVQnnFXExTr2akDB7p8aGiCW7z9PQwErsHbQVy1jgGNnjVuftqLz4DXxYtLYx5iJX1sky19maxGN",
  "key21": "2D8EN84RkNxZeZRcWTsrebdwahrNNie3iUTXQ2FaAcxKRduMj7h82hFGuRdBXUedQagTaGoY24Hf56wMrwyV3hXN",
  "key22": "mBWyK7JtQ6CPstxpqTQcPNW8fVoNKWJLFxPhYC5AzAaSJtD1eo2ZjU8bSCjaEeYxAm3uz95n1w7qpvryhAnJrhZ",
  "key23": "DeLuxWBQwdKoWsvfwpkPiKEHpSovrenueLrhrnsN5Ff5a8cZGvPPCTBkwJh7yKKfPyT8AEZvWnVf6LPg16n1h67",
  "key24": "j7Aw1xB4dptnHSSixvVdTw33cgk3ex2R7iqEXTvt2R26uxiVKn7pQv2jCYbGTr1xWBe6espt9a2mSPPHLycjCXY",
  "key25": "4fLv5KT2LNAV9gGRriRRTYBoat5ZmqqVxYiZgio58ZJNGjeFTojouPBSWqkBQrzbj3BtV9JztTa8F2GNto2LmqPC",
  "key26": "3JuCwoVEnVSdGQM8UuiEnT9KEW5NP4TPqpzamsuJhexu8NxVQHQjBeJbkWYpQaVBMN5Md2WirfBtY5Lc8KRRG3TY",
  "key27": "XzG2tBYzCo9xXCTXdU4yH69dx2UtPyfZBEQqd6oErgG2mkCktoW7F8NyHKN48UXhAWfeg6dHgpmbPo34u8AAsDY",
  "key28": "4GfKjoSEqturwp1aQ1ovxGdzyzXfxQ42Yz54fiAjETk4zBV95Ht8et4LW3qdbvoRtmvquXnpkvscx1QrFF8TEkzW",
  "key29": "2Nfhf63iArfZQv5SsJQd1BveG2Rr6L2ctZEk9ccQbQqTzsNnquKYTYJZQzP8UQPASuQnMjwWyavsLU8gwRVTgNKt",
  "key30": "QUTdXEjfeE8ffQvvxYhobyyrgwHcatTF9hGybbF4rU8Vbugw198797d2rhGR8xNr9bYV6g7LZHJwbLa1u5kj6ZF",
  "key31": "3RGYTBcMTfghco8xZf8q3P8skusCKga7uTX21W2hEmW4zNChncJ7ZcMEzNkF7vGphCf9spvonVtijECYRG32pknz",
  "key32": "5Ta5efUyTCWu114Nr6dcjNLZpcMzr9ipF7LZX5oMi9nDTtGJnGQVdqv53wzuCr5y9RJ45gidbXZ1kh6T7HwVwKLe",
  "key33": "4fAExnnGSF6Nd1kSVjg5w2kiJT2y7Uss7QgkiHWbxUMEYU3tnLmFT8XPzaS25TpaTMGVoEy1uXXtoz9GP2d9oGTF"
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
