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
    "3qee4Hs2L5naTymVLUwRRHWZR6JLZASg3AStaTay3FReEpgosAWo1BjoyGtssPCQDLPWX2amHv7aqKi4x2oL6iTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28fHX9AMdqbQjeSSbfcAgSFs8cJd2qxnzMZPaSKKw5YBtbMdpo5sTCXGKM7xwXoajaArogkkDVqknAvGn3Eurgaw",
  "key1": "24ixncRV4Sx3QMPTqpXTmd6gqkFJdrymkFVMhhQoyugrexzEc5yM3NM7EyGn5MnU4QwFvdQ41BewkhbPdfNn6hUR",
  "key2": "4UTzMrtJ3oL2SeJ4RAaNskaKGsB6MX8CBVRXGvWdWLkowHxs6HWRHJ3Sd4ERxQMYmYby8dH9tRcmJyyQPJjTH44q",
  "key3": "ahg1xKyRu9gMmLD72DiAsieePAX6WQvu5fRHbNVYoeoa6DMnR3HzjQYLNvhAzkZAMwXPpqApyBemhkyboS9NWJf",
  "key4": "49Z3xSSiFLBPD3jYMGgeEzZ3FRRh5vNUa4sukcA2mPgiLRicm6h85N3yYEYsZqYmBr8SU8RAJeDNh4fsWUtJYg2m",
  "key5": "263DKBjXy777HAiqHtRRQohjb3Kh9G8rgNzEutXNksY78NL8EKQSS36cesufejhvxjJnwk5ikM6LY88FKLczDcJm",
  "key6": "3Fyg92P2ofmBz563KV5NjzbX9HGDiJgDVn3EvLKch7f2JdbjUao7UEc97NTR3nfQ5CQUW3tz7KdPTgsh2Q6LqZwH",
  "key7": "3m4jJTQ8po2rijf2tZSNuK7ntUrp6c7E1knZpNSaQ6WF1zzejMsgpk277GGmktpmT3ncwSYR3KQueR6G6zLLHQGm",
  "key8": "2GQ3nE1c8jgKHvRpjCLM1x1DeYmdu1gjQoLGzjkBjN9JLSRus9taAZxsUb8bdbHZJ6WxVd6Ckka5WGEsfJ56ooFy",
  "key9": "4brQDGSVfhKpuVf9rNuoRBC1qKr2dCHGyf4mxEw7x13iUS7nYQbMyo8e9tz2KGU4wfa5UK1VppUmrzoYtPo5aq6V",
  "key10": "2KZE4mKkxrWsdBVjaiV2hyaZg3vd1yT42hNaWaiaxtEQ1crGQLy4Huf9KWpQNrD78a2wh4YoXdt9pi6h3okVHdH9",
  "key11": "W3VbJjwT1N6ecPVK8syaMR8naHXpe8gk833SHd54VLF1yEBqC1VAjizULB9C3ii9MiHTVeDsTVM9AKV1U3kaXDn",
  "key12": "2vtHZm9zFNF3fE4sZEGTjfSK5EMfwiCDTGbjgTsqJ9ykZB95MAJXYDrtzyker2KKhGEVKwmgupmjriruMetUhEyM",
  "key13": "SwuFPbgaSV3kSACtHF9d8Z8hgoN3ucARtxTYJZ7JzKTjxZdbEX3M2dNa3tWXGJwV72aSftC3drFrnJ8cc4LvUwn",
  "key14": "3RdUx3fect3SL1VM1eXQreWqFrnRtHiVUy7ebSaqnE2j8PFxrRURkZve2bVZRHu7xPRNpJtVQCnEndyEhpTa1PQY",
  "key15": "3Kz94jZAG7VCvjXeBnP8PZvH4mib4DGmtEj5GYvLqdW9DFNAZn1PMBJ8EKBd7BCqDzerQy77GAdwABTXGB9vzVGQ",
  "key16": "3xmt1JZhS6m8WiVpwUhtt2rztpjvnGVQQw92JsfGboYGGAkgqjipnAMMJBHpnES9QTW84yACvqFFd6E3zuEQQbEC",
  "key17": "5zG94MFmVTfc85Y6byWF6zuQfDig1kANdnTXg5PywZxCs6G46dGPZuPYHmmJM1DXBow2QJuuEdLx7bip6wvUoju3",
  "key18": "2zNoYVKmUnMk62MjW43ZG2H1D8ZdCYCbiHYg64qReEdBozSD48YvPNUt9S8rs1EmrBPiebYuaT5emQ6BYq5Tyqv7",
  "key19": "35o11sUpdLfLk3rMAEXRUcuZTebQxEn98JA27AmZWVxKCBLkZ3EUzCd5xb7QzSgsZGLyvrYsDqgXcqWQFosGQf5r",
  "key20": "4FYxfdreygLbveSc7iSDzMQMCtKZPR1PWKeLQMnJQyrJx14H5nLnK2NPZSoakvgAi1D6rrRvrQEh3iDm5BDKTCsf",
  "key21": "axgmUFAdRd5KfcgdsMeG942qnCAgbQvuaGtVhmsHg4PkKNhreSNDBjCvYG3FnhhB2QFC2uTLmV1JNBRnPYqHimJ",
  "key22": "4VnudDR5LfciwL71LQD4Ny9T8T1HWzi76xnyjD2M1ky9HLTPtoZ9A4saxE9ucbJKGAwum69SGssHUpTK587d6KGX",
  "key23": "5erNaUdjEBKQXhhm14GqyJP2MyGS2Vmdof7aPpGHpfVdcw2AE6VHSTQZJNQVhYm4YZqQVrKqqSNbLgzFpdrE8JwC",
  "key24": "5uT2SMUmiKuHneN3rvwnoH4ipQXKXpFNqtPHe3C7N4iKrJsBkeLntK1vQwsnRkBJLcn8ci1xj6gi3q2Wf4HRiFrx",
  "key25": "2jyzvVCPp7uBpuHz34h3VjBEF1uFydLGNP5EUhc25vLw1vo2ijVErHq2sA4HWKdiTgU4r8f9dEoSs6ANdrsu1MBN",
  "key26": "3nLR9hS8cWwG3FiSstvrgMgRdzLZRZAHjFGXYPgR4Ci19YrtKs4C7aqSAeqFW1LtjWUmZoZRBcF8ce6zxDQZ9cjz",
  "key27": "5jrMbr5dnVEHVWzo61pk3DD3wJmWTV4RKFMyqaS9oViSMNqwX9JLW3FwezHkjT8smQn1RLhWrDsNU73rYTuUUEuX",
  "key28": "58E7MovSEqeyeAhKXEmhUAQX6c1mrzxPNBgMwudDZ7LEaH8UtSNaqPp8xHmwdvgefdNqAZWzcDJiS9TrZBtJxh2Y",
  "key29": "4hwgNjfyB7VRovoft9dzhNe5pAvTUpaG2cVHo7psaTDjwppN5U9bVE24FZndqtTUfF7qWDC3kNKMzvwp4wRMPKSf",
  "key30": "5DrZAdWTt8DYb6q4fgyNdrJkvjvESyZArZvjsrgyQgzPZ7G7kTLNyCCQjVpsbibe5vUGX9qT6Yc5CLhVVZzEgAHU",
  "key31": "PaVpkzpAhXp8meC8PXxwBSAMGqx8jLUTB54iQ9FNuaDi4MMdmb4Mz9zZDAp8jGcw53RiRk3a2K6Hz2Pn29wW3Ah",
  "key32": "2XaePTDFUBArkQSFVsTSfWZhiUL2JnWdCL4bXvcLyraCNYUo5YfPnfQuAHwVyrQfLvatsoMvc3k6wjPA2pPohmqb",
  "key33": "4ECQC3CZd8tfTrkYvscarPp2A5HCq6NK1YWDoGwxpP3q5D3Lo1yhwnDtejXmio7JPyCzytYcYh7NHB2XzGTqfYcS",
  "key34": "5nSLcv3cWtr7taMvV9PvjmXcVZYk4xsNtFyHRXhUmAgQAcuptHsVf7qDXyFEXFTe4mWbq8aGZC1M5GGV1gaywvH",
  "key35": "3TK1bcSXnEtzLtD7WYSKtqXmGrz7HQHQ4NqMEWcEcaXhvm5dXTotJPWbQSN1yAGyDpNmfEQiXN5JU51WcUasm4WL",
  "key36": "o4y4hCq7H8uTgKRxwkpJ6asnHbbwHpr5x6U2NCaSw6WERnKZxtRqYsHrj4XfAAYqQwdfxX5R1wdJQ2nz8Hv3tyQ",
  "key37": "iVCbNRhVnjoedCas1otyydWUGh3U3osSZYjyQmGW6YH1U3RZaWdv5eppAiKhiosAYKWp1xFdQipJoyWsSWbasua",
  "key38": "3rPRHesgpW4PmyvK4jftQJneiqnNsx5PWhtTmqgvUqUSGa2m6hAwJvgipNdpCbpazowHXaESkSHtPTi4QUGtVeBo",
  "key39": "3STrSfaB7v6T18e5YqUjmWTaYaFtzx44eYAU7ZZXpnY4Fw2SSQScUKob7fXNeCpPJzxYRNBmqMT5jDzERxTwSNmt",
  "key40": "29jspG9pJEbULVVpwA5YSkuZMFqipgtcT5uqa2rP8rUWnEc7Vs3hii97ZWoWyER5tMspN6cA4EHRsLzJi9EN9DWP",
  "key41": "4KhRMTaZikFNWogcmHLXMYy6rYWrgaAZu6frbgDSTrPJzmQWYwNKvaEdhiNmbwM7nFrVtPd7ySdjSVv1EH2iyb2R",
  "key42": "3Zy8VhjstaHdXkYwiuT5Sj51XncWcB3Ug2FemfWA4TjHiz5yC5DYZqgdby1UqXwFN5bhu7Li5JyA4NHH6UJZjsTB",
  "key43": "2Garua7kDpQUAZwUvhiXQ8uqJD6PoUAHXEgzf4dHRdRnA95F2dSxHLatL8NQV6SQoDPigQVtwwu2kFyWogWx5uf6",
  "key44": "51jYbu4RBnY1strPqdAFgV9EkgYbFWzC6d88vYBkjuzqBKTmXxsLQYQLFtoViy3SNE4N1331rybah9AKLpU6vGkH"
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
