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
    "3Cs4M5KJxKEQgySrQqjx8CJCbxCtWFqRwiMR3uQwqXmChpJDdVJJHWz85dNpu4yHtiyas6jTcAs2uvMaPG8ZPK22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ovHUcbv7xNfXTYXxE6aBMLKr3bkfRFdUkUGZn4x62brk5gYFPbAvCe6ePWnBukbCL4Lw4FLEngDtEq4HvCZwTNa",
  "key1": "5pNDeFFhY3yR5Lr27n2U6ju2Xyi71bYteh6JZB1qDtST7b8uiEF3Zj5d5mVQ8HkSwpaDxkmcDgdHXSiRbZBZdaqG",
  "key2": "5BC2qLdzCECKkBPrauRjJ5Cdmf6XQ3ni4aTtsRPPmv12hmbG4iPicicp8C6SJvQKiJ7jf43WYm13RNcT2maMvY75",
  "key3": "W8o5VqvNAZKhAx9eRMuLuZmGq5Gq5ZecijRRkPNihRrtfJzQQjZwCvVkf6ecMvw3EcFJzbtMAFcQcR3RnP7KsRA",
  "key4": "2MeHmE8o47C2fewnFkbf8DzgdhpAC6G5YFCSDZReG7sZBshhbhfZBPuLQZiQ8jeRQ1av8WAj2Uy3dgiM459D7ScN",
  "key5": "236em7uwS2GKd53YB6wi62AtWQ4K4ziXuHz7iBT9CLSeTXyvbJfZGVFKs6bRS9SwrE3K8kzrzwVHNDRmZXoxNBEa",
  "key6": "46V222Cyr1gGYjsB1oKSjuJxh2PX8sXD11BfAnseSr5ZkSF857GmaNxpoGsAbiyN3KcVxbVyFZSZ2xG3WCqHbBJR",
  "key7": "58Dc4V6kcDH6Hiyy7CtnBdVtDRAh7xBG63CeNhAnSGpjrWwsFr4qdiwLSWRzWVUuMeetRGxsmjiLBrgo1NZgCQu4",
  "key8": "27xxa9jrguUejenNpZ19w61j7RCG5MF5Msw6wzhe39HjNx88ph3ymcBeQVeexouKugMjs7t69Ws35y6h48ARYjn1",
  "key9": "2NV9xSCahdAADxjD1DzkAqEePCffS6xxZ29R3qcmseLZxGMtRa6ThxDURXgSP38uz5XUpfwTbRkMzUk9FYF7uVg7",
  "key10": "3hnRWcsopLc2yxM3WZGLoaAjegA8EnPN8uJERDGkH3BBLDSXYMTUgtC1xmn2xynMKykB2Zx4gpywoAzPEmowmrX",
  "key11": "4yQQVCnvPBoer1eG6tgnsCn5WGBgufHi2X1J8xkAm5YitCgfXbFZTCvUTCQx7aCGeNg15tyfJFsf7e7zBFSjBp2b",
  "key12": "3gdQ7v7n7AF4uBsrSapG3CmEDPXJ4qsYmmn5YEVoz3ixizhBks7VfvVGyTEQ7k7QWauP2VTKLs8yB4jkfuo8M78N",
  "key13": "3RYg6b9utqLJfxGC3no5PqDGFYa1Vf8eRLgpMLcC1AtYDzeXGMCCA6VYnWJiRnwL9jtDKytXkh8gsPZzUvjXHiqb",
  "key14": "5G14UGgmCqCXvu7opzHDeNXecSuSQ6L8VNLaZazGDgxdfktzCaMLmvBoU7yJQLRgJuTscpSYvcWdWAfmZRVwCGVq",
  "key15": "5ZGi64UYYt8bcF9qy85px8g1g6R7ypvaUUKhMpS56TDBF2BNr3EKNrGRabWCfGRNF3ugduyczf8T4whPTokZe6P5",
  "key16": "23hiFrpuN1iV4piZ7Zy9ms3AQtcdwQQbpQWaMpsZA8RTv5Gok9ygKhyf7XPab8AWeWftrPkpdqyqrmYUBTo1QYEs",
  "key17": "5cUfmrrwURVgjgsgM1BMx6QjDdy8DUkhgthBHaWVKK4JGnnad1PvkuhtjyiTd6zP1zA4rsk22AgHvM3gHYV1ncQs",
  "key18": "fRhtvcCw4UnkFHjTDuGpRZThbJtDxnncuPaZPBLXPnSeiq2wzKxaY2MQstJW8igFpi8xaQhRLeFow8pLnP1qJcc",
  "key19": "4QodNfyWFYfrvbkfyAEEn2wHZk8koaUGzPaMJkqmeS89uaD7KfJDgtSqM7sZgtArHwL5cZyCXzgDg37rzyYwL6KS",
  "key20": "21LAHrwqBwgmBoX7TK2ePheJ8mB3MMHdskUJxR7xJRNVRt54nyjnqW8Ep8Zj7RLPYZahUGUmZVRoBvfmd7xBRc79",
  "key21": "47o25YdwFwgoAtvCWXpC9k3CkMJonnvifEpakV96QGaELeHyxAggqKkqmB7hmLALLF7p56bUne4mJUksUoL5C3vd",
  "key22": "5MsE6dUSbhGprgiuqCGubtazVEPe4nc1pZHWDGjfN5SCYSMchD9sLnY8hDUE2nmXeNHarWfoNC63jd43RVYEBJpa",
  "key23": "5uyGddrzqM1P1XCyd76Ahf73imRFKhVRYAYbvdDzQc9Wc9TfU6vT3MxsWbzg7yr3qeoreacFsvkz7riUPgogLaRq",
  "key24": "4QDnwuSpYYNXprN7ZzwGqEFCXadcyFetLkAq4gyT3XtokzG3GzVMnBZqa6WCCmfrhqQdemzaePrc4ioZSG8zdUyK",
  "key25": "56SvGaP7uMCxmke1rrAd82hZfSEv79kh8A35XqE9pDzqcASs8aARup2YcouPaf3APUF3LB1DNM5g4k9H5UggV29C",
  "key26": "2kQNu7tbjsst7cacvYEHwTBEuXFTRJ3yBAG3BT8fFStZnbQz2skgEDNR3mgx4LkHTzfg8Tp7WRWYJw6mfgPAVnhR",
  "key27": "dwiSbhEXX2cevrwHhDJHfYNGAC3J5qGFC5h4KnWQibAXe2skXnV6Gyx5wdDyDrU6YfQoR3bjiaL7ef7D7KeGGQ3",
  "key28": "5GDYWFVzr5iLwSGJgtwvq4yVLiwaXLtx1GKdW56vmM8r8xZNNANkVGGa2A1Y1TvNP8tEQFFEupwuJJh6SD3hpiZi",
  "key29": "4RvDyQ7TTsdfujvEBUcYkTNE343uPmQxxGTFr8geRhXsKFk2Nhufw4rceuN7sS1qwf38CKoDj32ZLvf2FXKwJAJt",
  "key30": "qDkNncBxbiyHN5pyEXG31JgzSPgsWLLK5D8Usfjz77nmnF4AEvnDJ2hncxLgLXL9b3ojSDp47biDk66ncqcTwPd",
  "key31": "25p4GmxvZLVsCBJuYaEMK44L4LFFdvAUqs4wznnFonGSM5zzLZDFWub8irPbuXjQqwvV2WXB5EbE8Hf842f2Ld3x",
  "key32": "35C6TomwEP3yanuhJuGYwpBRr45jLgisEmzJxE4xyktmv85iRwCAEdHtRP5JysbZXhrCAYpjpKsD4qcbJPo2T9n",
  "key33": "4JWJJzzWJNg43FZAj94fiHarDa7ecLEyeyQCqKaXB3rsFruRSBr2DTC9tqaEmw5qCDLp21hzuFqmep3MCuEHcFvS",
  "key34": "JcwCQ44Q28uXimotefdjd4uNyH4hDayHnqQiSGNcEez3gYQGxKA2L53uHTvVkdHYbtYBrVKNPrmzXdwjredej3x",
  "key35": "3JFJBKMzmbNYWB77c1EyCP97u4nGZrGTBHCcjRDDvvQrkyA4R5bcs6vtzzWFWk79CA5UAeZfjMztm1DNAANPWL3C",
  "key36": "3r9jNg7n5LeanwUUjTEV5FHWjYiqeF8Me2YofkAHj6VCQ5yiMw2mxL5wy8FrbMAVktDMAKcwdH8aUz36ryiEC2L2",
  "key37": "qX7YgrHi4tNo5jyt4Xzeyswjdjgnx1KNPypCtkcXnj2WiPw9FJ42eLKBoDXMbRJcziWyEj2kxjtyXDMNe7vKcBK",
  "key38": "4x5RY2T6CLgxx6ZxHFzMR49mtsuJC9NJ3VtC7f6yh7H3gygeTSyum3x1Zn2NKJV9XRiGLNfNvGVENvPDWZLoanWp",
  "key39": "35FndFTjQyJRaUFq6wkP192kQVQq1e3sw1Va1mxwgSuuMJrQtEoGJEjBRaJ6DFHU1Mj47nCfhycXvoQKozRwcCWi",
  "key40": "nkstRvd9sewfRB8VCxk576hAzeZfNTUEL5u6RDrcc2oJKjhtLuijmS6wVYDzNRnjNsBzWXNRCx1tdgfQnCxzSsu",
  "key41": "52hdBifKjRQSncDAExX4hvSmqgi22ctdL2sRy3uTao53beVBon4L1AchWjr3DDhGyd5nHtKMiAwbHtmWxf6fA7tT",
  "key42": "4fRAojQDZDe6QhWXMEdgGLbtqUrkDRMGX7uZq4DvXCBsJkmD9BgAY8RatcQkGne3FmpW1eDchciMHyYVg1yrAK2v"
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
