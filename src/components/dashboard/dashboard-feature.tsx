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
    "5FxK4bMEWnPGJGmHS52XJv3Ktya1CLqTT5MHb34QywoazvZ7QfV7Rq7ExxtVX12DmJ64Rp3o6Jvv9euF1SormWLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pMwc2r8zgCYZ49vsUQwPxca4QJhm6JWQ5bXcVtbNYfUU2bFqSLsjKv3pgLvayCE45uYrtjKVUXucMZBUqrBvdDy",
  "key1": "22rG4vfpAYhPtMNbCMmgLVPX89cP5typMbucjCtQ2sPXGqpqQyUxra4g4EUSEPs9yKq5XLpr2N8VvMUxSxS65DBv",
  "key2": "3HYSHK2zNLi9vCmCyi7KRUMeveGK5mLyZoGgw4SuvYLTSxybzSU1XpskDvEKujqcHrzQHMrYoD9u319EhhtbrnHo",
  "key3": "VqVkVsBwK9AU2EFLWvf5G9KDj82Qq5BGS5XM7sfNydJ6Kk75A6PVSnXJop252LupbJYwCZL7Z5xYFZDvpBfyLDV",
  "key4": "63MyWS74JvzQJcagksaB3N9z2ymM1LCAjVvPV1VzfjsR47uFnuhJQd2TeHYDvBYrTasFcYZSifDHMdhRKV4TdQZK",
  "key5": "2WMJAkNDjGEnYG8wBfQWNDLckFH9tVjPDwuBR8kwp6W2UDwasPR4hTAuNHcTj3Gtd2K2e8NWp1BYm1xktbjFSLkz",
  "key6": "4qeBm74Do8BPcXHQVKamP67D4uhtcMJqQo1RYBTgT77Q3DNd4sNa2iPHYZ1hMvNADsP5uHEuwFHU5YUaFrdpmrRY",
  "key7": "2UfDRm6SC8J83kAG61rjVKrsSnkxq9uSEXmC6u5VzoTNJ9npVHYqTaMiYrESA6Jr8nVo9zStfgWPT87fEU1C2KME",
  "key8": "5fKguRGj75Njg3ASVq5cXbAt6TRUjBHAVY2bjmqXpBaW2pD59b7wq7FDABUSga7q4mUyEK4czjYfCKPFn9fft56b",
  "key9": "43kvqKJocd52XwnRRuPpb3KPhotFEC2Cs5Q1XSnVDUKCXAad7MF5hw1csRdftSzhZMNrPz7MTZpEcNaU9d3J9Et7",
  "key10": "35Ys6w6Dkxs1HJnT1TrhadNZi4AtjBG2PBDdoNXCyqzP51enhUEF3bKNBTWxU5Gpv4bptfcA1Cn86zSG6GDd1cMm",
  "key11": "4oUecUumVdrJ2b3Y2PFW92cyNUfwTWrMLePRh4Ye8absArA57phzExs1PwuELUH5GmqkHmDCSxmb27BWtvFSK1fX",
  "key12": "34qacpEmZNwq4MVdDDxEagNNa897cmDTA1nT7FVYmFHRm8wRjDmKtXKL7k462RpSbeCCvWAP9wfhrUvA7BkmtL4A",
  "key13": "5762mfT7wcFUeczFmTirwGoEEN8zR2j3h4R9U91gNsnKYR4MgX5aXJFfaxhfAWuKrbvmiV1SqujpboPk3kVd6wcn",
  "key14": "677sHG5R3xFfPjHkN8DPxNCWX7Yu6FKWdxgGbiGrzMDZjtYvQaefMXMhxCMZiG71dJaPEFxHEcwBF2VyCmUBXdu8",
  "key15": "2srZhQ1sn9BiTH3CVStuFLSMh4Rb6qxosHd3eEnugQfpz3qEeABbQ1FQzRT9xAnNAZw9BAQDZKr7i8VnyXRX823b",
  "key16": "3t4junG3p9tDwjDJZ2tM6KyNMh3UfebmvSMMmgtPoRA5tTADYW7GTg7rRFCFNJqfXuEj5H1PrHct2H1HRNZXNjMz",
  "key17": "58zXPydVZbQFqEuwQFyRp3LMqynPaixuCWG5FhgozYYTrayHbq4FVGL63nquRXcC1ayDBLsaQLRHrrhqDZMz733d",
  "key18": "4oZHfWaKNPyG96ESbUx7Qp9stkBn53ZEd9JrtbU6Fi1dzhCkHPM6rLq5wKAgZ53UgVFa1Dv65exMM36S6LXr7XPe",
  "key19": "3pMBQtESU7F4JBeMq9BvDR2ZrSyZPsLsg6qU5zzMEWTPddSmnCf6xfZ4bKQ8BszEzvGQaCsmXoZc5f8B4GTufUHM",
  "key20": "4gTtXG5LpJbC1NH4sHgKynCaKiwQxi4Ux824pXKhx69xBdKZgHk9cUj6Rw8zgthRB7HgqZ3ABXJb6sQceW7ai8ra",
  "key21": "3MCwvkCqdAAN64p9hitgTUziDWMtntz44ix3UcVRHbTBd7PfNDQ1SgaUTgT6f5uMaXB9haGy9iHzaEUumwsgpdFC",
  "key22": "614po6iFVRM58X26CKYPQopti2jKJKZBFLn7t8wSyLt9auTRcnqvGJoDWrAMyxebkdMooVwmx1Ym2e6M2gdZSZr1",
  "key23": "3PS4TQLLBVHkHPvdVddeUq6ArCVC7BRzq9H1SaKSwZMqyw5834XpSiQeAk9wiF6BPdYdTbpu1v7YD3opaToo5BnD",
  "key24": "2kVGWzeJLACr5p8TsTs62UGepc9KaxF6Jjc55jsk8YuP9q3qVcrqC79pDYdftxoUm3NgbxaPt2kLgLvFbb2TiBad",
  "key25": "29TTcu1y3ok1LGr53WSGa73VuWf5vDUQZsrYFtSBM5a4VSJ7ozB7HETVsv7cgSuA3U8UYWrLEWqx4ndrYdNs5tqd",
  "key26": "47yNynairA2ZtNitJeWxWY6hDgPduzcy4DdKa2tqGd1yVaX5DVrn6PoStgA4htcWMf4E9MtQszH9VCKMbVaMDdXF",
  "key27": "35dqkXTJnhfFmDyuZX8LkpxdRe4HmfyXoUrfn7P5WnNFrtm7pjYrMiK4mBgUH868fNzdLzVSoypth7sxqqVtb3Nm",
  "key28": "2XzAN5h7uCBsR9fjn4ib2GdFdSnPcRVAbyiKpSu9TpqqZPgACY9NMbK8PSq9VHpq3ukshZwsdCWDpMDVFXab71YQ",
  "key29": "q3nWtpi2VgtPC23rWbWo3N2ynrXV6iJf5Yt6g5VYiBqWMFnQpB6DHAsoh8mjLcfN9GkvAav8Lk5wjFxSCStTAHf",
  "key30": "3aH94gSC9x34H8dbigEz3tWfRza9QBEDB6p5AwgmE23sLj8qynGZ2zB5PcLmKG4bEixSjaBdBtoKrzVy3X81jUPP",
  "key31": "5Y28g5MouEbuKXDDKH88xJB7YJT4dQcFXjDKYDNDYWL94nCGu6f5kyW2aK5gmCWYnYFJ3VToaPgRbsxiL9sdBW4E",
  "key32": "3Dc4gkZNPTzKfE8MNb4GBWRxnPygoYnr9vX1JhbgadLwgJBmgLLMnGZL3iLZuXnteKjL7rq9tYEebscfCheMGJRj",
  "key33": "4v2foH8tWGZyVkAabkNnHxs4e6haTmthCUfqNan3MLDAB61mtP1Cyjjvu47F4V6y33RsTYypMiGmHxehEgHvnt1a",
  "key34": "5HRT7F9EeFgmY9vSoj1Sx4ANA2DqmgRQcJehztfzSa73WvChWjtUooyLo1c4U7MFmqQkAa3j8zxThXFz4nHGZQRX",
  "key35": "24jZXHFw5Zzhq2wZbNtw9sroV1qe8TpTq7TFuobhD7QoPp4BPzVzkfAB6cc2916vEDFx8T3qNGv7yYkMAKkBB8Pa",
  "key36": "3uT6xciRkYi3xwuXiGnoVyXeoxagHpJ3NdyPChDEXXdmesggyRQQCFWUMRPucNp3grvMEMYLRWPca2STKUPFNZW",
  "key37": "59cZYRESHWDVR93gs54Qc7QXm32EVzi1FkvvTALGxMmMNhJQuFdb8dcU1qcXf93jazP4eyPwyG9RcWYUTTsdnF5z",
  "key38": "2gAwHYwAXq5sgRz8RkYNN71bY6nhtZ2cU5P9y3QUmtDShGkR8f7Kkp2fMr97Uvu9mwyma17Hwbt8m6KiEfL8f3AZ",
  "key39": "e8iBXywYpi2EVsrDc7Cb6h9zKxX5xWK5RXLxf6VZ7aYwYmRxdVunSjjow9vK3NKf7yZnMfsGj8M4JPFkmwRtiWM",
  "key40": "2scNPqCUfRa5YsETuBEH79hynqUfynBq6dbNKATtoY5k5HLorQ1dqG5rJg9hbE3c8YqVewyEaGGfx4svxfVwnNGC",
  "key41": "2n2Veuao1d39QKjJZV3pB9LizZjTHbCrPXNRyUSZhfyjRFPt7Z2mDCnZCBptAqbJ5QM2UtRv8z1XdUx2bW2vx1tN"
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
