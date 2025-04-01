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
    "5F8MPx5giYHLXpgFBiA4MebGrNevEVJhMDoeEf7bFVcxZuKj4v3Xfs1eWyXr6NYgiXTXTgCPPcmDD9jJZvHCSCtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TDiiWBYZw2HV3gA3pBnTdWdyYqwvuZ4dYUPvZcnuuEabteNm73LSFK9z2DVrp8LhptwbmoHNSuasJLA1PDURoKD",
  "key1": "5rr3JmvPvE5et9SsDMKUfPRH5dHxCienrpnwf8qCNPD7LqAWANpWFM868XodXmp1nW8V6xZJghNLyJUTdrfeGBr3",
  "key2": "5JGMVLc22xF228z1JVtNH8JwyKLVnUcnNueH87634b7jS7ovxygy97QNw8vLVyeKh5rfJPuauLCNRsbSQqqTzyAF",
  "key3": "456hq4fV2jrZ9A4hrVb11QCfxZfqX12KoChPPHQPVe1vuMTc3R9cdv9Ti9dPhzmdSTBGGaBcCwmueWRuMvs3UgeT",
  "key4": "2RQX5eygo8QijVRmzj3R1Sd5DnEN9Y9RYUZnjdvWKjm1fSzjdYNiKhN7UJCHLssVqBFVbHpyJuaHt29jAxoESAHX",
  "key5": "3wxMWsQRHst72Fvx5ivuFAFa6Npn1aREJdRFmgbFUT68ojoCQQkeExMPVvq6HQGRYAvimXwuxWrGFdVcWUt88JPb",
  "key6": "4Qf6Utt6rczXt6VvzTjCE1tnvko3s8qPHH1D9VhLowdTQYFiyh1twpQq6fKfKDBL4xrN1TZqZVCU343SVDa5opod",
  "key7": "3npnL7gQnPFE9jmYRYGrLUfV6N79YVQKFT8WA3MwnExpzA4abSfHe61d1V5z5srkgiyoscFnzUNaPaHq3rj66jno",
  "key8": "5WfJyuLNtqaEKDwH7v99aBupKovqRfhF58qJXBipNWncrDPcZkJxHUEhnvSjK4HBgLkt3JKbW9WGj5Z6FwFYjMzF",
  "key9": "5NU6W996jmLeQmQXfcxpLrbXTty2HPypLbMxJaBVgveQJCrz5P5u22D22PdGkjoB1tTpn2oZPwfxtFo2ZnKsDj3Y",
  "key10": "4e3GWFahYqHNTZMjiBT2Y85h3FpDd89AKdRBy2Hcv4zJNqraWFParziMYeRbtHJ3QKhK2g4Qd8HZTKwar1QLao3s",
  "key11": "2YRS2pE4aweNnphMfifDVZKYKHLj5gCwQR4YGPgbDV1ffN6aaswvRrpNHTzkGr5yz9Gz2uoCoAFqU8kZGEJuAeaa",
  "key12": "3aJfs1GPZSPBqRJsFSyauG94zhNmAVTqyU8YDDJkMNtbJJrZ4oZoQGqu1eXkeLceqhXtPCuX1Kbxy4Vq41FJoR6S",
  "key13": "46QHsraFrBgDCQsHzLpy353VshppjA5Q5DsoVFsqfLYZR7z4KrvphzkCnZy5EULsCtyh4M2xZsP6BPfuiDgfrxqD",
  "key14": "5cRHY9E8tFJsjbwsRAjiCTdZmMrXE8vBbA2L2oc9FLwukDEn3eQRPeCwsr4Qkn7BdfnD5UQ9CMTk2oG8ynGpbfj8",
  "key15": "37tDKog4U8MNSqaHqs1WQKSDWpGzagAaPXy7LUn8a9zvTNqUUQqPAxs5cwyvRusfaA4kovHr2jdyw5ovMKBBcokf",
  "key16": "4xjU1DGMhEuqu9DERDDGiei1KkgVDpqrtatAN4M9JB4xdXk6eU8vziYQk5LhhqqgPLX4xuDHFwWTH1eABiqUR9CB",
  "key17": "3gMwwiB8EgczBf8GbqWbJ655M4qzSDUoD4hsZsSsNgPJ5bMpt7s5ygJxZFXZKHWCxwAiEwHonXdzqAjF59JTMi1f",
  "key18": "3Bx3o6iGnm1B6LtCPLkEwtBLo23M48iXwT4HHpk3xvaAz27vzMNxG6hAqb4nrXLyy2bECWrzkowRGmxTq3wdgzL9",
  "key19": "RvabhMm64keW9F6xn3cpnbPMd3UZBfx4wmP6uFENLQ1431K3bz1C7tMLXzx9N9jZM2RXrMFcY1uYU81M6ovzsNR",
  "key20": "4k2W6UiDAbVr7KsM3n7U7kn1aP3GrRFrQtvGt6EiaiQmuNLjzqR8VERMGGLXQDLEv7r2jT1RRXUFCC7N4pBDibLr",
  "key21": "49aGEKSSwJZXhSbzZk4QQtb4RK2eBodLGrz9GxCYBat91cdEr2rD33pdNPFdZ9nX1A9B36Wrs42QWqzvseZUpGgU",
  "key22": "2UXQNE6iqstyB4QaEYaW8uyBnGqELULne1K1tvBzjBQboPbAHX25aE52xbG8HqykRzMF6S3msM8ZCbvoa3gVLDog",
  "key23": "4pSS788mFytgi2h5eMWsKbpDNimZDTyeUuaHBJn2ukfBw8ixLfk12ExeEaVJqBkqK8Eb5Mje52zVgWEjfCGQiSXc",
  "key24": "FvCRumSjXZY8qsqrYX7owGvSyxpCs92yPJP8VXnpCyWJjzXnVpDnoULEGAySYKSrvFovz3V31HJhU7T8QDwfMxP",
  "key25": "DL4UFBWZFexHtXXvQqKQXTcfQQcW1YprZqK9emRHbGnMj9FVA6XAsz5HQ7cAvSXvfTCu53yWK5rxitcEHHBY6yW",
  "key26": "tP2b5MLrdANtdazu4i8YTPTQ6fi6qydqow2Xe76zEu7uXf18ApWhtQ9wjQUfj3QemBDNYKaLp59hMRHgVRrMtSB",
  "key27": "2ELRWxe2nC2k985egJ7Md8kv2da3JunSNa1WWPwYPwMYhWgYLDuVr8cjqhQ2BSkJKV4s2q31FYXntDXrHu8n9yXT",
  "key28": "4ESXYDstLd5RtkFVVnm3emhmdTF6D2KuYd84gyEqF1L1VUMXuKbh8oKr5QTkU7we1CUCh7Rn47wELyhigFRU9Tui",
  "key29": "2Pcpi6PiHzHqejHtQDHXWxQ64tqtCA3MuuzuSuhtG6W3zAsuQUf1xJfzPCybSm6A8CazfMYFMMFXRaDKsDarDb1i",
  "key30": "2YtSqEZKTE5usxUBVM5LhxpWhu6DjZwhV2fgpu8mTpAnJ68dyj5AVeq2TBhXKCusJ7iDN33yEHqAjzrAvy6bGhW7",
  "key31": "4p5cSmJMaq8LVu4RHmdVBMNYongzz3HcE6SzMHgnAKjqGYcstAfFE2iPczdUzRowWMthCb5BKLpUaY5aCfdkqdYr",
  "key32": "bT9juuSdppuZFkMieXqXoVqwTVEMWJKvTz8YAvo9JhG8QiY9JLLa9hGGJmWBgyYD3xYQSzSLaGn8zogc256Rdsr",
  "key33": "2i6dS8jfN36sohZibFxrQPkDonaM37McdwZMo5kJs6Ws5eFywVK7jsWQF2ixQqYGD3ETzotSjF5fC6zLrkp6xgNJ",
  "key34": "3JyRXUNct3UcnjL2fP79AnCoc64XZF62TD5pbX9QyVdoPC3nrwATgzPe1njBdZC1aSQyzMg2qATKW6UCZpo1BCoz",
  "key35": "4nUDjR4UhKw6h9MRs6pxhxDbx3EGvJffg1KpNhSTjcU51Uc2F2Zn5yGqXUvy1VNDPo3kkg9MxRUDsT5e1yntXsLx",
  "key36": "2rjyHmf9WzCkPWp74r4EfM4hpqQYaJYsheSuoYiWnbZEVtqN2uiVQP8Jgk1CcyPh3vrTLYX9zYeR2C26uSkLNVzF",
  "key37": "ab9weMWdY1bskUY3T2jQfCgTTTw4Q1RJbhT89c9pc2NsNpMagwgSZHjTD6sdsSvqd5s1ySe3K6TZDkY7E6D6Aqr",
  "key38": "4n4W5PdeGfk64UJjxFLcXB2kSZRGwhiQL3brRazBWw1MGB4zAJwN6QvMuaozcDyQzALnw2yKUcpktBWBEyYqrSM9",
  "key39": "3cQ2Z5bARcGgzqhfhfuRxJvG1dBjt15bkFSqB72Ra2NSPfr4xdpVNNoRr6uAhpoPJum8gqD1u3v3W2bVnCC4wTdf",
  "key40": "5q36fQh1TM9vY3sn9Yuq5vPx4HTPmScHyvmVj5SeKPZFWwithCTtkUcjn8dNTuPbAY5Pwuq26SYHJbP9DizD2ohF",
  "key41": "3TdYGGZH4bztv2BMFahp7VojPDTCWe7fNjzGumEH1nMvgoZZfwmbBXwJ4h6C1HUhetGAnxR8KEhtDfeDTbQXWK5i"
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
