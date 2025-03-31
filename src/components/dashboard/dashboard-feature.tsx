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
    "5WnWvpS2QGsjfgRR57NC62TC7ZPeSsEcqxuucLtcHv8vWceBHAL8SQszKao1ZEmmHbH4ncBfNbCkgcN53x2LAhob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bAyWVyN9dRE4ztZvHPGgE5LEtFZy1oAsydpM1TDPHBpXJxnqfyJjtHGN27Nb2DH2AZxa4HMNBYT4ApwZ5MHbzoQ",
  "key1": "cZNpMpLrun8u49DppBnJtgbWTu4j2ZfG7pJaRRS1TmG1YybBgvQbtuHF1wmxMxV38sZb2NcrN5FHPKMPjx7fzSj",
  "key2": "67dCTp1GXvuAppgTn3CHQ9GrJstyJ1wGiRySed9Jb8LRJkjELKDnaZWYjkwGARxu1SVF1hnHfUPJx19JufoRVokq",
  "key3": "4wzmSKfunWBPUWy3Vi6zZuu2qhBGbkgKc53RzS97DME1eG15J3FwBraRoWRE3zMcZFK7JnoGfG51hHebbjQXLQit",
  "key4": "3yBsxLvEmgNQduKV3xhKCbxgcjbAoVAXGAPkchSSXfVzuMRK72JFWeHuvzeJ8UdzcyFBaoTzizBcykCukXQDdXRw",
  "key5": "2Xpyz3VTMTxDmMeSQHmEZQAQ1mmZanvUhtbuNPf2UmtNDPUx5diDz51PCfuNzBem9fytAZ6fZzLd5a684d3cSw2a",
  "key6": "5SsQPtU1woMrQzn9qF8oaBMpzzUqZzGAMSBHcfdWa21cNYSu5GMuC98y8k3Gzc6FwzUYsf67T4zvCm1AxqPq7Atx",
  "key7": "4EbcqCYKUtf1UZJjv3paXrVAbr9AMtrTqtScUc9LLFKjrGg579hTdQxEVgxAkANMTPbxnkf15pJiPuPXWw49irCQ",
  "key8": "2JAHCD1xakwcn8AvdYAq9vos3Y4qSt1wsZDjkoY3YWvzK9AcBicaxVVfxfU6uYiLhn2TEn1SqbEVtoYJUCpCwAAW",
  "key9": "JbQkCGS31LctWBPFCVaQ2AHKwu9rHCXwdyQyLTXy96v2Uq97Vb8KcYAMd7YCqVGNpskeZNMcQf3ijx3pf75LpdX",
  "key10": "3QbBY5E5gCZsx116kYYRQQ6hfwyvgCxiyywpjLjiABHTkqUnXJ2ndzsTBsz21xc6PFASjaWnw1jeLNnPKZuJWpUJ",
  "key11": "2FQ35Lkv1VH5cECbod4JukFQwEMCNZZuvGqJ51T7XcNS9hM6jXbZRMtsBYvCiNB4XhGEbFV9nye9x1bZzqQ7Z2xA",
  "key12": "2jpdLj3MRVuhkNKugukqG6LcbjemBGDemBZtMGRbL1HKo1x19TuntLV7Ykd2pCb7FDfCjkoQx78ThSNmhWxhGTLS",
  "key13": "3SVJZX4PGEZAFezR1ZtrfeuGrSpTTm2fSZBeyZZS5cH3UATqLRJTme5pfC7TGAvrWYoHRUNA31JfdYidMrhobMH1",
  "key14": "3JCjE9eErVB1HeWPEg1FRnuqgm97RLneQXk4swgr7zMRd1U3GePJqBrDw88eTbCpsN6Tuw4M66GscWdSvcmHmdcJ",
  "key15": "4HBsNwst9tjvr54pP6WGusSQ45tJEweaKssJqJjeJZXZqsoRMhyrBPuMpcAoavf7Q3evxzxaHVvNPqho3nyPWxwC",
  "key16": "5qVULHZPzf2pSfuPbyEgKBQnnxYwxCvmnoHfgYmp9Dws8KqshYdzyWaC3kNyEGTEXoNfxAbniEYb95oTim4VNg6Y",
  "key17": "21T6ZTwqow5zKGsjzdnp3Nt6CowtrLykv4gpvw5AcuLKwo5zuk1Mdmxstqrf6L5pPp99DzyeZwSteQgeWk19FF8T",
  "key18": "3gJzA9Cc8MFHiqh4e77H5yFoHUdTHK5fmodYvQHnBkLmim9V516ahKN57oSYGXAuzSDvJj4dKmaCN1TYT36UioZP",
  "key19": "5RopheSYZ9N3k7AZcFWoW6aLitMPasc9J4CP1Z2P8F3Tb78EUD36sW7BVuAFFSL6nzN8iXh8h9WmXpFfz3DRHxpJ",
  "key20": "4xtPz1MLgxPWaucpDHQervyLgpnRWoqRbkgrRsBRSBaVzWWkjsGYjMSn87htosiV55VE1NUXvJ9558zdJA9Hrknx",
  "key21": "5ipBH2QdshZsAtw8F2wZNoPYF9FRcDuDgg6ghtkP6pCPCo5yDSnBndGBuktrvGhmwaaR5pxX88dqYHVqqGHNsKa8",
  "key22": "Qurds2ELLKcidFG2Nt7bWzr5L2nqyrqnQwL8ZxYMYwX6wLYhC6mTgyHq5c2Asr7XasFARDvZdpmkPZrLTf67SY8",
  "key23": "3j5WsUhbpQBVzedfBcvXEHpuXZh65Atg9Rvxner2yuAYtpB6hHJJ5QFSbuZYTxRxsy85rGhTqtQcUmof2BkTyMNT",
  "key24": "5uNjF1hn5WJ4aB6NpJWA4Q6ziN4drtKKPABhWfnwGxgwv6BbSH6ynzA5YrbccdHiB9Q2tmsogEWj8Fa61cKEvSkF",
  "key25": "3Ms5sYM2PRBYUavh1Umjaxw3FRJR4pjuL2mUVmGhPF52DMJu4K5VB1w2N6UFSxcyjotbqVMH4JZt7hUR1NfAnT81",
  "key26": "2vhJrGfdZpb1xt4DVv6y7sNp5DKSJER8MF8KDyQPWCb64Q6LzMt6mffh3ZQw3kAGn8JrVdRtc6xUfbqU1uygZREr",
  "key27": "4Vb98coxyp4BFwDN6pRrQwwhLE3DmA3que58DH3DZGCMNwZqD3NtkCuD1TvdKn7xwG7fbrPTtJzwVMSMH64Nkwnh",
  "key28": "2nsYGgcjkf37T3K9yCkUAvP3jrRc3xQWeCFMQtYXYFVqV1ECbpVYhwcDS9F9nmX1rupmBjUTFCU866MT8nfz8p7t",
  "key29": "2FZJe9TGooAB2YbauacEYxJsZ1ARZzEV97NF8ARYVbhn973AXFHtLo1uxMTD9XqpFsEaXyjD2yZsBGngxiWTKX4c",
  "key30": "VT3vZcY8epKwru4W8qLkqTZ3hhEyNAsPUDuaHy1w1eLox6MGENGpFQat657t72pSxCas7ZP9yh4WYZL5C1T8z9Q",
  "key31": "77DkmYasEnSjct32gMo12o49Lr7DdCmaKJH37Z1aSAtBRqYKVhJxBh4bD9Hd3P8JqpnwSFzvdEaJKkK3Mu4M4tu",
  "key32": "NDZ3ymSo5NYmvZ3S5zWHyCaeELJka1SSdc9Tt3TnTVsC472131SDGKStGfhgo49ndzHgNn2439kGhFdkBX8avFa",
  "key33": "4aekYuzYuzjwzxpxorNE5qyikSMen8V5nP9YtQTQgrLndSpDfDumqGDzGdZG6EsLMmX6wTNnmc8QBvM4btsjahk6",
  "key34": "3S5b9Hy6WyojoUpNyexTNutWh4V5E6GNx3uLFf9mPyULu9SqySaTVdBbKT6Nd3tZfVyBTapCH9WVzSJtX3b1PcHS",
  "key35": "4V33cdgkKgMr35srbYEnGrzVG6AFgyvUpiKGoijmcAiw6G8XW9NUqS35FEbnRXSZvd96vJinSkGbw8vhTN52vZwg",
  "key36": "3wQtTKsLehAVNWAGNJumoUmtgiKq7CywuQWRWMTM5HkQZHjQFXeGeHj9tuaGyq41JSsZ57wXhnhTFN5HMyARcPxM",
  "key37": "4pjNKTKSwUpt96DjxM62WGDf453te7Xzm9wqc18X1nDUCheoo6cS1w8Lp8XmwMV6M1evb7d1MyNGXsh1HUgzaN9n",
  "key38": "5UsKfS62fR8s1ULztqPnPHHdiMyE6Pzg57vkmWADKQ3fiw6oxkyc8X8G4mAHuyuyNKM9JUbXHheh3VguXpbFViwQ"
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
