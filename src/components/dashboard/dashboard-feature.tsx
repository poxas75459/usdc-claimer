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
    "jd6x9LFSr2JDoLuJBoasDG6c7kGd6wQoQVCkAjqmUSBknVFCkezrJjAJV1kAs2dL4L2nQVSe5ztZAH4JTkHnKs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUeH2vfxEwHNj3UPrQoHGswCiZxpfWQxymtroA9xPHn94Hq8w7QQoahqTNEp7edjFkKWjTMUooPcf3MiPwEzuZL",
  "key1": "5SC2s8jBL8DdrSAuEY4zLDUawwA9ch2cBkk6XN9jfCTJinpYttbSkjesDfi6nSbcejPTtUmeyPgsScNubX1MVwHz",
  "key2": "JvsnBxRYhFdmEc4swXn2oaKvnjT995VedbfvQY66JdiAHVf44iLo1XmFRdKVRtop7UgKaiE3sTUbf85Q7hS8Tb3",
  "key3": "4anhWLrivHgynHdjZTSvpDCjUyrZeQmAETWLHjDajy8phzTxxLMpFsCFeHNDayrgMS8UJRMD6bV1X23sky4VWRf6",
  "key4": "sDfvSQxLLJJnyEKiC28B7TjfrUmn2CUfZpoTkoyjCdYXN3f8sqfcSEQrC7EmuvpWYdErUirhB3zC9nqj8PFmCXB",
  "key5": "3XxSqotn2Mp3EmvB8g7hZbrorBBap82HBP75jXA3E3JCJGUaGW6aGn9iD1mu3VukG6L2KWNNA6fBeuGMGkDqx8Ua",
  "key6": "aey9hcbCZDk5cj32ye2usY4rpUjRHuKMHQu4FwYb2c1fzMMtFpzMd48L55uwR21wfVTDnaMacqoQse5EztgYMV4",
  "key7": "utoW8R47Gi2GKVDcAEgGmZ8WuXsZZeELRYtUcpvKbPf1yxedJMHRrCnUjAJEyhEZm7g1tP1dsshXoXAmQWFnpSC",
  "key8": "wiWRGVdkSVyyMry9rRN6eAVwyb8rAc7euV3Thvmuv3aj7DoEJus2iMxzRXHeEwYt8MLFY3Aa3bkMde2RWT9xaZu",
  "key9": "3hwRVqreHY4YwQZQmxLb2eFkRw5BgjK5iShe3hj345WndZGCZvkqrDkcxgxVADyj1A9dzxp1wzrk54ucfRVUwK2c",
  "key10": "4nwhSWw6yH2A8be9DyFpgKfPzyBViJeNwMNf96vUA8PjJeox7UJin848iLWCQBhFj3aH47Xgp42AyTTNmtzYKxnq",
  "key11": "3rZQ5XSpnZV97jgSBPxcVDuttKFT2W1vg2Gd5ntWVk3uMfWkasU1FvzsL4ZVDtXT3vJiG9HzMPixAXxFnttBgFqm",
  "key12": "23KRQiyAo4WWCxc214gxFgbjcDyLwVU5NGH4sjRaEAq1TXAyYV7A4ErZSjbcpYqQhJYcKszQervpzcomWehywxkw",
  "key13": "1z8HnhM3EtFhNkkbPtGwMMnaBFiEZRUFCjDiRemEBme1naF5V3QcKgec1L1jMfUsFV9wPxPN7n8n5PjnykJJ5Kh",
  "key14": "51R2fpEjk7xtHiZeoqGkdswKyh9V5PnC6uMJGW2L699xMA5nwf5Gq1dCDnocZDmgT4KkfJq7bznXruXknyjV9un5",
  "key15": "5f8J8QY58xf5sA3bN8ZYX25AgRR9CCFU8vx1UbWD55qjHJd1irhJLdF4hFdPczazBCmNPdR7tuB1LcnbbPc19XEc",
  "key16": "65WCpvriEG8XX66Yb888nJHVSX3gqoGkSmNg27oZwpgDCp96ggyu1Py6DAjikqxNQVsdNPcEYLagKQuxVgMuHXsg",
  "key17": "sQCeUWMa3wMxMEVvz6XkjFwfELA541pHBGpUU1AXtcrPjoqKNuaNCitBCb2gx7gng1oVyAB7QVzUXzHYjXbZ4uG",
  "key18": "36s3Epk2dPkBbSs67idHKUhrdWSA2aD6zUW71Dc5PCfmL1BRxo35Ush8dw7NGtHeeHmCsWfsiwdipMDDGbJibEU5",
  "key19": "4gjctFi2wKAynYMUPkbBCfCMhy2Mn5fANeqpeN6cPFfxGgcssroTYst6c8CNRTwmB5iepNTZr5ZLYkdbF9gewzeY",
  "key20": "5J5TSN5YqzKE4q9SqYaamRZx8X1JGQMhrjfWd3gL9jDd47V6C8VCdvaLppABYijBJGdAs4BpS2nckDMpxwSuxGBX",
  "key21": "pi5DCxNVSLtm7NzRD98DkYbiRgQdHHFmhg2G3T3DZa5wnUj5Pw8YysZ3ygPvuYgiKqG1p3nBH72cmXyB2RDaF1R",
  "key22": "7FZ2TjbKQi7Xex8JVo2AAq7apPoLugxCnBcACtUuNaP2M9f7xaJPgzW6DidbnYPuZP3oxMGrjn4JZvwiXsaUEXS",
  "key23": "xKrNUwPgWYPAwM7EULzRZdNt5Uoi1fs1fbGhBmxuf2FxuWPsp72EDA3enZGfdtWHnmP176y4fzLDrJ1AWnpuBBJ",
  "key24": "iDKKkGGQJ7McwK6eRk46TUxPEjubepehTM5ei8ejaEHVEYD8zS12Z79TUEtWAVny8Fs9YymZAhQwtiMXfUucq15",
  "key25": "4jzKC13EbJoj22k5yuK7yVxnUDKxAoop2C3tnnxsmEtRY13vUS5iLBQvmbMboVa7RgHou5yZUEWg848m3MUhjm6v",
  "key26": "3jjb9Ue6bG6Xj6bc6rK6SXtQtbo9LzNSct4gsoJsRZhSSqMfF8Bu1p9HYpqM2Z2rxennGZJywFSxHDcRW9eNaDCw",
  "key27": "42QoeZpHxTyz8XT3KrcrytFENKPZZokLu6mbE5pVNgEiPaTjH9NyurJh6fDoddPizpn2oczJ16bzRLRo6XnquvFQ",
  "key28": "2W8TF25Eht94GWbAT86ovddDbBHbxTcjCTBLy64RwmpPS6q8DJZ36bb4swc9cHxGK3w38KucBVDmLgvMbpQnpmof",
  "key29": "96fWFDrwfR1A5WLcjzJpFdR5iPLLjcJV5RUxBwJRXvWhYyEYz9VSedGfdfNRCymFjfq9D7dovbQa2Mdb2d38LGC",
  "key30": "2awZgBqsFJywmawUkPdHnZcnzhiMbGX7N2XZKHM86p1zayQvStk6YyMX9ke8cs9HasAX96HvoSWpyrhb4yM86VcE",
  "key31": "3TLs7HV5nrdsseT3E2t8qsE6NK9DFseyE2bNqYQrGk5K5NQQ283ky9bvufWjGZwggY1bhyHjwx67CD9c3QzXpK2R",
  "key32": "4WEETZrBPFibgWhxgQTSGuebcyXQKW9Yow67mrS1QR11CmN397GAKpwgP86MpQKr4Eymfcm9xckKVhfks1gbX4xv",
  "key33": "4hD5UwHJS747AEQPxgSheaWZvSs3HX6B8FK7ibQh5PuRhRkEy72iDHeSGAzFapUAorFRT4x6Croua6LjWJ8x3sGc",
  "key34": "qXEviCrynK5KGHdZ58v7oAhiWRdRkBtEqksX16pYNYhhpWQWfQMM7R6jdWAroSFo2foNzEW4kELKQemiTHDVCEz",
  "key35": "t8Nx2KfNtUkuFjpzcfoxYAi8Eqsvtc7QRF3Gb8aRr45pDnNuRafBmj4y484uEks4urp9ZQwtrmbEtQZk2SBq81i",
  "key36": "5uVWL5Lb8QAFjKcdmEKhsqQHNbA5vw6agP1kwE1n7fGr4kThEuAygk5NvPtnXarJB5K6CaM5WWR5SkWyS5XQquzH",
  "key37": "2K5NxqNWahzhCjb5aASLUqecjyK7W1NP6SKjHBDjG75MYQga6gX9XGchgMgaVeAEdvWcQxc7pWy42QT5mzopwGX1",
  "key38": "5UiVUvCcrRMp3CUxAkHqbTe9xS2ciPg5TmUsuA6HEGE72iFwSqdic4usdQMCA8CRJVbhsyJ3Sbu8FMZ1UFWPiQCd",
  "key39": "3HeEH3uatmJJT6BRhKnyJRypqZRnMh2YGWxd5TknKwVotwcrHZoUJuY6U5a55sMeZvXETwfZpNpchoTajmHQGBZU"
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
