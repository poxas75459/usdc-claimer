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
    "2RqJ8RR2FPirLmtn3jK3MgSHxngBXsaX8t4C5ezL36BTRp3FqpLj1WqDytH5ZFPHkvwpjeSmsLJAaUgsxndjQzA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iuKQGvrXcZM4EfEmvdv2c8tzFXFH5zC1nFvhZwK9xNcLAH7k8caW75qcxWfhDxGRenwnzrG3oMHP5pkxfjDTuyd",
  "key1": "55iLd7cdCJZCbTCYRvJHzsE5R6KN8rxZr4RCyZc4NoU4PeXDs8u3nTD8FFHHdweiTiDpbjs3ozgMSAFBn6zhJ4Xg",
  "key2": "8KwM2mygKB1ai3W5FKhRCJgSuAsEANvpt7Jt2BUfnW7iNXdJ3Mqwvf9VbqRVdUe8FZR1MZdfrGYLU4jNiHMapBJ",
  "key3": "5P3Ad1pBSSsKBa9o4nb7VuGz3ZypQboEYKtNQTckLq136HuQEtQ6yXrfvX9ydeuxsKijyCnH3zG7XB5Ms4dPqv1L",
  "key4": "3yknTTP9rnkMjBM2Q3e489VNMjacWUsf91L8mohHAGtezFjBiGCJTrcSPaF4zvY8P91W72EmkMsN5stSnW44BqTK",
  "key5": "4utscyHujRR9eDGJfURK1vxC5nXScrkxkmbmf6GYmhpXstw5YFDfQaCEjKfJGCKcscxfrfvRC8agnqg5aR8QMBe9",
  "key6": "3LS8AnHr2ZJkLXNeNZ3dkxfRjCohwkDhZ1Ttxb8KqVivM1eMPjU1mqxtiZJ44cVPui8RRvvVsJMDwiGjsmQ8MJYp",
  "key7": "2WMwJauJUA3feDLM7d4P6qv4v6KNTMWA3wAPNXTcc1bfRooTE4n8MWeGa5dABfvBi2CCv7yc9GDKQsTijWJ7Se3E",
  "key8": "hauPfi5Q5FsUmtBnCbaunc9JVMZXyjXcdWy5LfgqwrbjE1HnmsjAiQ9np2MjppawaEcfdHvd1k8XbXp9CGVSQpB",
  "key9": "UM8ktuvQxHiz5D5oZhA5fmFh8DGk1Sjeyiiyk3FmGH5m829WhtLX44XrGY1TMFjg88bPCmx2V35otBRBCt2Rfmn",
  "key10": "3Fd2oYJt5PyU8GTebwDnLcauxcpmkwBVFjPhVx7KyfARJ2Pxd3ejVk7zLuQATZA7E5P7w7MPg8ydvAyVfy54c9QN",
  "key11": "5hQ6S9QtKRpwj5QTx7rk4mA9eP63u3pLb4RTxDLp9Fu3Srj9YMo1s8F9jT7AYBEGruq6fe98wxuNzX1r3LCszBu4",
  "key12": "66i8qhKaPsxtfiRsSCns41B1ouULh4ju9EJcGjxW51eZ1FnQjWbTB1PphPEDURREQM69eSWGJmphLNjmYvdGEiMJ",
  "key13": "3aNdX8WZFLxsuGKoYpMcWQRhpEbjUvdc9fmamjzt7axCsr4uZeP12BUwkzPjHys9oBeUwnY8gAGhnBCyR2mJgf1w",
  "key14": "E5QYLs1yVfWGrSDQuvDiYud28mP6PPKGkvtZrbrb71nRpEHar7jeepN9rwRNz1DUdtnn6qWr1P47sCLHdUVC7uP",
  "key15": "3y97z2zLJSZPvVgvzK3do5p8cfrME2QxQABfiosDUQnRuP4vAqyQWT6cKPnZuyYCbshYhg5AdXQtjtoPuKuuoMYf",
  "key16": "4bHaf7YumVeZW65XbwxhCaz14uM2NBwvBiMr7ep9p86XrPZwSW6wCgjbYHv5PRUjS3tDSDyHASHgmCKmjvaXykJj",
  "key17": "poAPv72Wv2AQvx1A2vmThR2t86R54u5NxsjL7c3gW6P4WaubyQy67tgJfywwqcUEPWiZG81iYfYV11g4nDhZiTx",
  "key18": "2izcwiRhKnaU7uUqRUWwtsNTtFVjrMJu6qWNv6322jfRLrRZvHi7gdkSrpggtmPX2FAxukmdKsKcksoRUS5xbDRE",
  "key19": "3uLWSbnJGXw393zp18HQ6x3jK4Ra3PP5ci3VTiRquacwHTe8vF49abyiD22He4Y86ye6wCsRTRAhGB18bFB6PDxN",
  "key20": "7BHbJ1VhaXLb24i5FhPsVZv3NrhjFtVV5cX4uSH94eza1Qsirv1CJTVoAYZBTWtDpbSDxtqcggykQtzpENFyf6Q",
  "key21": "28gNftYH7fwyu6XFfVZr6yxCzt6dFGC84tGBXF6ZBo428kzx3gs4g7zqwdSuKxxEhzQc9vZPA3kM71R7zm9eZRb4",
  "key22": "3y1yJJtYY5vYD7K8JMErsNmL4yVMET4LB1K4VMwPwiw3qZcKqJRJAnVGc6NMDLjtMYmz7hv9U5E8sSfSr3mUwswt",
  "key23": "44hhQ8H589sSfRVXqBSsZ7mXVAERHiBDQzDPZAH4hMgDvCTc9wMsGPgkvcVfHeqJNV8JdsTeqaRGZXncV8Mc8Rq3",
  "key24": "4kJz9dKYkAWXACfokLYmtiqn6bAqvFwHSTpsA2bUGmPBondp9LCh1Kkiqy8ZPBAmq87Pa3imEudEcSqfWLNvvrHs",
  "key25": "5sy2jR8hkh6uS4KJZBLUj9A3VwvFayYM2HUPDG9TdQa3PP1TttMVR7t3tAxEAC3dFZfrTMzwMheQV9LrknnHZ7Bd",
  "key26": "3n15kuUsXvC8essYNzEdpXgh1go76pQ2sg4vR4SZ1vEyPy4CSrrLDBCEFFPAm6oJETKEZLYL8Y3LaWny4hahtAgV",
  "key27": "3XCMjqjmdm7dJMVT93K2hfYJUxJD1ww2g2ZymY2wVTyibjraJYfJdvvURGP7dtV5kSzS3wZXLjXVhQzYKBCQT4og",
  "key28": "2TAvA6GBJtgk8T26JgvPZCBrzDMhkrG9tNrxmB98sHcTSZMMPJ74NjFyZPa3cKSWLbJiD8GWZXgTkKARe6phM37b",
  "key29": "58F5ftXu71xcYDteEvQ1aLqyKTimztui9dwQQK8KqoJkLPgVj7CseEd3mnC7jBvcZPbwMA3AfnJn8PhyzdyEo4YH",
  "key30": "24ycjy3kuvpdLzkARviF3LqheHMb2RuVN2BMdzietRszW8foXS7u698J569qEvwXbNRrGbFVaDHjUyi9FDKGbZiU",
  "key31": "2ePeJdH3MHP8xYzcJ7gMEu9oQfoHD1psCvw996WT4beXUw8CbU94KRBeCwHY4voLgDQHAzMCpaMzL5C6trrXLUB4",
  "key32": "3mNrjXmEkQe3gjLwz92WXNJ4PmAvHDnydJAtofvMeHQMhikSiCHb5q9oT5ThfXeGPAGczxBxZEyAHsHk6w8cnxvu",
  "key33": "Nmt2Pq9aPVWx7bSiZmCipwQnaYC2q55EUjPDAbqznhxLdH4cRHgsjNwZBcfvsCz1GFy5cb4DYLcvqToXCEByLLD",
  "key34": "17nQHVFnR11TqqpT4mhTduH6BWBd39RUdtC4MgCdXb1iDnhar8X4uwnACh4qRYzNTAs5zBWgP6pb1Tu2sjoJZFY",
  "key35": "54RHMPSemX2NCmSWc4WN5q7qrfHeUNLBuDc5o7EMPGWCSajq3sYmwwkNVx7hdL5MTXqoHpZ111GBvPXv4iqD1Pn5",
  "key36": "4JcF9LfCCHJMVx2wasntCCaLoe7dceYuxAas7PWK4vVM8jKD5bP2mubskedZwd3Yy1jHVAr5D5UUrrKwVsMaCTaQ",
  "key37": "3MpLvHJoCZojNdNnLmxGUNRDUmR6h9X29eREiQrSh8j5bUx6AmWHGdpx9tMWhQbZRqgzoGZ97rsxBnqQfB7RjjYZ",
  "key38": "2amQSS964iBhQrhs2DKRpVBkWBY2nGqrQsJif4aZqeDdUNw8XwWLTih1g8DvSnWawdpHcrswNBfriM4RdPFLLdzT",
  "key39": "3oYtScrR7qyWau3R4KiLKB2fFKotYjUyg3HWWwhkKo4ZXSdrEfvax6sMWS915wtUUAdWfh2U1To3NChmqNvHvSWL",
  "key40": "5wJjRq6uvfKcYtmKzMvChqY6TAmXXQQieBgxiCCNwsBoKoVFwq1icAoUa46mZd2FJCosxzQNKSgPGn6G2Z4myJ7k",
  "key41": "3WvYJT2RiiFCiHgSo1ZKP1ddEjvAHAhNzfVsobPy1NDDNCtp22QbymaWqd484Q1dWjdmcy73hV4t3U7cZEGznxy1",
  "key42": "65mDBbzf5JYfxJt8ekpcewR1GVywMmjpyoXvS7PqGsUa7qve2bzT2fYN7i69X4Zw1LKG4QexPuvpxURNrm4jzZwP",
  "key43": "4D9V1v7gfiRzyC3MioWuXphBP9igdidCdfMoAgQfuSLHVUj19iFw5Td2TnpPGVDtWRuSWZQUy8UrAv5yzyAfyKXg",
  "key44": "2bHs7Vuidz1rQaTPJQ34WfoyghSV7NMkBNGTm7hKp5KVFS3BykvF28q5u2PEES21w1ngbp3kgysDqQWQXj9nN241"
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
