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
    "51nZ17y6LycWEdyw5cv1a4rfe9e1m7tCrjYCVuj41aMBvLrVnH53LLPCvcM4BbfJhyueL2PRi51z2KE6yupnq4Rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5ZYTocft4AMjADtTDMT3s6H62dv2huuK8PAi7SkCMHp9zLJC8Fqe5tYp1TWRy7spZjpXATmZ1LvErdkXJit5qD",
  "key1": "2hittp3RHnLQEaTHR5gfzMtmJ1gTgif5oDn7NSjmd7ASM4hNVMouZsV9WrDNxgLrivwGRaf2XkwEmGdzXYtgr1Un",
  "key2": "spNzCZS173ccQas3U2x8kmyeh7DZdnPBS4cvb5gJJLrb1EeUL8LFAT4peSyRarwgRm3BSMS9HMHm9cJnVK4xneb",
  "key3": "2kRhSurq91PMjRxgzqp2Bkymxagz8Suy1Nwvs9hJyHQ99v6rW6WwoewVmeVuojLrKg2eYZkqJrcJ1oPg3j2tibgr",
  "key4": "4BTSja55RJqq3rQDwo4NtgaobzpyNKyHkAfrEUHJqSpG8622CfYrFK3diMJRv6kgDL6YqzcZq1Fu6Ras5bWv8D6L",
  "key5": "3GbsP8ZT3aMug787Q8EJjazSJnGFmQ6dzn1TnfzFoF2eiSq81S4i83T38zerhsbN62ZY4xsLx3DjSUHbeA99wH2Q",
  "key6": "AA3zde9L5a19F71t575pFDHvWxLU4h3v1s5BokF4o18otSLjaiWczxyacafBoYYsrRHofwKmtdmJSzt1x61ZSHu",
  "key7": "5F2yGciUBTC6e82bPuAkge1PpRydUEhGKJJWQA2sdifNk8K7fpyDs6qgjvGsmyNvYwbGvskVu3jhwbNMVeeLPAaN",
  "key8": "69uXbm1oqw2oByxHmWG9rS3r1sqd1AyxL1pnR9hbTmUZcf2693midXTefhAj3iirHY1XfLS2Ju25hJVtpwR6hLt",
  "key9": "2tEfsbaEBrW2JqHBWrnRZjkxS7Hg1xFvn3Ru48cdau5KNdrRMRdNtKbm7MRRqJYxwt9bMg5RGpHmTWD4mK2FJGoz",
  "key10": "54Qv8y2Ey55HJF76y6aVtHcZKRfFvbYnCrJRmjVgxyCUXvDoWDsvEcMruSSogtza4N8R68pRzHhkjB1yD4etk838",
  "key11": "5i9A23UzxhgP4AfkX2eq5EBiJ23tE4PifHdingFKz4Q3PsAohK5u2ad9YQom618XfBxNro1uXnKXKYh6v7qywMKV",
  "key12": "66Q35ndHLKejyFBTAxu3VU8AZPSEbqU1t5Z67jJwhbJip2MdLM8drfAuB8ARuq8iC5CehYCpRuJbS4ZxySb4ZYKq",
  "key13": "5Euhv9P3bDTQtmN1MCJ5Nye8W2bF3cLyF1ywx7UuhTzPzvnD6DdZQSAUJXdohJss7s9PRyyxi9xCQMWMEkjs4f7r",
  "key14": "3vtjVN5iXt61xCYon2h9UievfT5fvTmjMB5buYUaUqWYaSP1rCwwZibeyhBFaSnNJv6HUJC2JrdhHinviq6DxB1U",
  "key15": "KesG54uDgXGVWaLujdDZxVDUfbJNqXhLNHJ11kmH8iqtqJLP3ayNsznkiqJn4t5B1yaHdBuAMsB5AB4SW92ecZb",
  "key16": "5HfGdTkZVVjkwntMFu6vhaP2P6yeZ8wM7dgyeZLjxDj3TfSj5ha2pCq3xx1u1NvYz8mtZKn79AUJyrZhznGY3VEB",
  "key17": "2Rca9diZmXzzhNxJqqrBJbJGt1LzzBMFF2cpZNjHGtRRRNp2bic5WKnFuj5fkZS5wqu5CQMvAWFcG4DH2zSEeJqA",
  "key18": "5b6NAUH1oG9FkewS5ibuMgy6CYuzzxmM3iZZanfCLB2rvTVW7LhkuGS8S4dWVJyyJo6wEPx3bxzuy29trQ7n97Yz",
  "key19": "4Zqjn787eLeqwNcWy3UTQ87ywDKkyjgfEbG5HZxq1vG74ydXGdnMMTWBo5nMyCKNfU2GLVXQVvn8v2coA5iZ8Swd",
  "key20": "52M5fitKVCEVCtY2Kpv41aFx2t1CLDF91fv5Ch19WBDJo5Nt6J3aLZyJ3odTo3RYK95KHvxB5QNteqVtDvJxBTyY",
  "key21": "35cgcoKU2JWGGP6Z7reWm6QHZn3B6UcD25D7DvyYdeGnFJb8yKHm7v5t6joo2MSpupAGmZW1EQPapaqpqm8FCG1m",
  "key22": "5wEQrg3ivadqWKQzMb8C4wvuU24c6FThjx9uUPzLHudLtyX3Tw41VH41xhvVNzSRHEt8HDrG8HThqvjG96vJDCBB",
  "key23": "QkeZ1B7k5acbiKjkhHRYwGLEhzdRLvmJFSt2vEzhZMqgUR9MRTfzKfaetVC2N3xCxMu5LULrPwCcBUMtYrJEXom",
  "key24": "5C9epmBZcsjiyX6Y1BnNP9XbeM5C8iDxHqGFkTRC1rNFgaK7yJN8xshDaJ8LzUPCH4ZAhHVK68DtDuzNUQ7hWRJs",
  "key25": "jA7w8FqD2v932Xq2U2QoTK61sV716fpjtz3Fud1gwiPzeKi5vPXevwiTEAEqDgGM5xfKNFkJHfrT6towrFuC6WF",
  "key26": "2GASJV5sP7Jz5qGEPUiP2qvCPpgcfjhWqegqwmQn3Ese1RUcVr7VqocTWGz181KWmwTzz2aegpBNUW5bHxHKB9Gw",
  "key27": "5PpZpV6CgUBtKZUjKHh9S5KfFtDBtzP5H5uv5X9W6FyZdyH52kaHq5JjHSU1bSfYF942yYCKQo6QP3VKrrU555Fi",
  "key28": "4Bp8a3waG6wTp5SHzsCCu5oFvWc4WtNXGWvASDrJxrrZB3bouK6gJjpfdfrWZxgDzunr11PjS9Brzs7ZuHkHt7nv",
  "key29": "4Rw8bS9RSeBLRRszrg22FQPGxefavZ7pz8SbZDKG8Fd8aspkchg3joTtCfZ3rrPX8DZJFusm6Mq7ZPBy5T2HvBrS",
  "key30": "5KABAN7c2bXoFD5hEByUZ7hzkJLkhTFTvpx56YHUzqDmHBy6PfkauL1PqfTP2nxtYgWocFu63dwgc7UtNc3ESe44",
  "key31": "2CscihoKsEkWaPYHNWC9Nhw84PPuPE7igDPMqyeDLNstn242DQDXGekxtpcts7FPF8yeUUpzBWb1ivq71jspHLxS",
  "key32": "5CEpZs6FpSV7uz786pYuTra9DwAjhmGqQwrL8XjZTJeTxpwpmRx5xdkurMia3RChN4kbba4ajkjeHPEqDgvysdwV",
  "key33": "3UGhGtV8gRRtux24ciuN5WYs4gHr3ZnimnFf2mepcQNzkTBMw9oUFKwzSQFi5TLehz6fF6HLgsUqFRwZDJapHTDb",
  "key34": "2KdVjseW97AU2o7vnRVn4YTzUL2ZgxYAAqCMKkK7TdUhfbvAsJDFRsB4njsvGwQjmbNGomZToZnpREDotC2R6GTG",
  "key35": "VwLN5rivbouByGhNaSMv8UvShEmQZGgp1RBVh5MAU788ij2YU98nz5z9hEUCAAuALPxygHqnaCrxmnRbN82W8rY",
  "key36": "52srA21n7xvPvo5ymAKjch7hsDfcPcMATcvHt4jg1VpsfEjnDeTJVwH6LU5WArZEcsnPW2r8ECCAGE6bxBhFXXKB",
  "key37": "qXGJdCrsujQXmdEviAmDnQFASGtscahevgThxPPK4B3ysn8jKcgjUcV2feCnnNoj1Et6x2rZM8Esq7FtCrhBx13",
  "key38": "2n3jUfv48DQ6fLLNgwNnm4hpGh76m3XN2tSh2hxcwQmja9gtWHUcMPMXMxNw7u34JuB6DDDsoK96VVJC6H7VbZZK",
  "key39": "41Pi3r3pMbB8pJFWAapFsAyFA5e8RtdoagydEmAhiakrxwywEmqiQXv2YzukFZgK3akBrTyPaWcWwiuNvbU37TmV",
  "key40": "3jourA7cJ7gidrsB38t1Zim3CV6NNboPa4CGLeLfx9yVqzDwkjxJyVCM1C5ndWYAR3DYez4ptaLGW5KoyNj9Tusv",
  "key41": "39ojybdM5FF7gLhkvoEznC1NkkmHjKPSUpa8ZZv2GEpNf3Uaga3pgwifuHUXmpRgD6mJKstEWcsKP6MAJLUY6ZqA",
  "key42": "2W1f5H1YjRzMC813VpmM5bj2Ssvm8wqVdronu8hVuCiv9QGvgsyXZo3Q9MyNv9kmr3MTaKXoeHAYEjmknfk7szNr"
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
