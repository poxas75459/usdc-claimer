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
    "kPeMJgpSY3PRiuTVi7mnBujiLHXgUDWTwDHbtw6y3Rq9vc7dCeVh7YREzB52XexXKyr41cF9E5oDZ5WKNxBvBtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rz9fQRtiWXuDsEFVFCj5ecYVubZagFBrPjckMU5BHb6794HAQ51u5teJh4ibAxycu3s9WinftaP3DmGfh9biKJc",
  "key1": "37NC8q84EsRJq7mKGKKeqdNc6c8dSPVNJdjJRRemrFwKuAdTwhuLx9XUkLLJi7xUgxP2vwVs84eeYHRmcxMAMFHy",
  "key2": "3aJB9RUM7sSb7HW9UtR373BF1mXRF7CvXyj7vgEUTThXUHZLUczVHgJJW8dpmsj35Tcj3J7fq9qZJ4vpy8jh44Ru",
  "key3": "3vo1YomparqhwyiSjLqoP44ioyvWDtjAzPwijXwGFYnX7LXAhC7aiUDZA7DAk7RnMz4yk6wBrx3h8iyBnTwqECMB",
  "key4": "5MjYfEXw3PjPQhfdBqqGBreeUXWkXNp841uXv2WRxRLTp8pwtcWWdcHdyeK6TMCrWz2mgJH2PZ8tWpPgbzoWVbKt",
  "key5": "23WPCEQE9GXc6QgTyGNdFMQsRiuwbZZm9WuR5zVCt4Mv8KEAS6Gff4s4sdHYo4yKcYNQS9N31Dt7He34JZtnSFaT",
  "key6": "23EG2D28WfMy5KEQqZzR92Sn3XkM4BW8Wdr4LiV2uhGmrNytopv5CXYFisnhpCYjUHXcN394upAQHzvuC1rwHbUn",
  "key7": "2CdCjBYvPoGYKBzCjiRRLD3NW8ZxEvttVheYe4rAzmbMtgKe29pNdUtv4MeW5arCvnfwxqL7vFmnxhvuDNfA42Nb",
  "key8": "4DciZ5W6Kxz8st8UQ1xESbC6puooRtwjrNgeFX3tmWMwCUwdk1uQ4gHXNU7JX1FcXfiXXc7rzvxf2LfWVEBi9BSD",
  "key9": "24EyrQSjS3nmDtsWjQDZydZX1qX3kRNzuCSzZesa2CraQiDhA7WCwodN5sFrTfGaHPkZVii8NfdKRy6uVwv76W1A",
  "key10": "3CrDXmnzGMtikzQuDWyVFZkBK8XhbB1bfBvnaNmURMXrFinwYYuo4C4CcaucS42y2JFUPQ6c4FiJZfS6chQfKYVV",
  "key11": "4Z8fqyrU8SuYrNKLN7Mi7KjRFe4kk6ZzFswoPC38XwoEm6thFbLHX7h3yJjRbCV5zWZQsBYsZVTcaZ2j5xNJrRjD",
  "key12": "2v2C4U8NiKeGyCJKg6p2aUnkrtNqRKkKoQUSWhHCDepb6Seav4QWePzanL18ityGxWBZwbNWHp8kw46Md65urhwr",
  "key13": "3EcEZ5mG45ywWB6ErijePz11gxbjULghaWrZK95EiKRWtzuMw4jZ7XqqGckntBG2tAJTkqvetHzDLQ2rhVyeCgZT",
  "key14": "3R6WHch1gPtqaENa6apotwQcoaGALVB3o9hARUxU8kLiCwXt7YmAG7whZfy5onaRWtZwqEXHRVcYFhc8ejt23jXp",
  "key15": "59aBDyDEuuBbRDUpU928QC7XrA3k4UxmkT9kJkoFPbZaabLrK9u7z5vf2FSh86KGUzD7Rz5Nu1Ndct2sfeu5MntG",
  "key16": "5ajntUnwnuzdPD8BuKk5tjthYENU29WL2UoMvqNeoe16eDz4xnq3263jr7rMYsAhoBVPh25571SjbATFR11hFvdn",
  "key17": "2JGoNP2JadNYsttGuGSmayV6WqJGkB1wcEnDRzftQ8ERVg9KQf3RYbw7hFisQi4eS2Zf9BefW9a3eKB4SiDgVW3C",
  "key18": "TfAvD5BPmNKKNSAbA7nRxesoh19vR3a4RPwMWUppDskBmRfGr83WgTdrGB9UxvjE6Ybqvacwr5Cyec9E3PAd2RX",
  "key19": "4hFR8SqWYpr7KG8teAFgeP6Da2VYNxyFMvxCPTgyHr6Jhepmn6L3pw8mut8MNbA2gNhUixNoHJ6YiQGRUu47DSqF",
  "key20": "4AtQy52LkJUXtrUxwaXvZDAmUcosGLfd1fu2qCHFgaF2zazmYxM9QNWrg7VMRytxmuCijoRiRCbESUManz52NLYp",
  "key21": "4yNym84ih9bqg1vfjWAMyv4aGdTVxPsU2u71pftr1ESTa8ETbpT6j1Rqfg3w3ZXVf5AD25BMCSaKaLtJUz7RSLgr",
  "key22": "2mZEvYUPmGYeGMrGRPXtSS8rG2qjX7UwNmzDZTDYGoMacqzW67fPBDRgqFwdgkjoNeLNiqL2WfNMmiTyVAsk5TvT",
  "key23": "3KLMjV8qQchmR7Mhcnn8BzhEP7YqxxKMBcPFKD24Pw28bJVQYyxb2xAwDF19Mb6i3eVeCdh5aXNiZ5f8qRetfQDm",
  "key24": "2pwwC4k4txvb32Tq7dfAhq9iNUhejGHAR4eoD66Qv64V6aHhJBtpVH87geKmAfTnBzCDgemYhdPPMkQc4ndUKEMt",
  "key25": "3zvF47MuW84133z4HJGss3F972V5swqBiAs9Xnb2z9H3AenAKS6jWhxP73ihKXq36E2Er2DhoegJCrSABpcRkDHa",
  "key26": "4SA7jTNFP69HfCWJc19B7Q2AYGCsyshsEz4tJXaGsPnd546f2sKGfWaXodXzarC17ay3jA3gFkqs5U4o8X2rGSW6",
  "key27": "29JiENLUcbYvEB8vocj7Co6dZAjYvHjvHGRxrPk9bywNHzCwS75priV7TRTMr2WmgVADs5PPEfoKXhVqjVdrASEN",
  "key28": "4GLoWVjUNJfnAgKubQmRjSTbqsiiWezhyNxUj3sQ5yiVNxKBUobTxMnRx4YYWoAnp5HWNE62sHwHnxsZT8dPRSqQ",
  "key29": "62Kgj3J28TB5baiLw9qtKgdcqjVUiZa76LhJgBoAwSwEiLSrRhAA3NJ5UtPrDjqJN5YBoFaETsSm9Gej1uBq1TED",
  "key30": "2svWTJEg9ff3PaE1bL6JQabKmaL8MTe8n4HVEDXA6wpgq4utY1P3LBXSYLigKcLHVMhPH6ico71Uyc7ZQNXUvL1g",
  "key31": "2VxGxs4vQoXH7i4uExCarNemD23uxPvKdhw553X4JBD97o9xccfJ1VQ1J61uJinNGMJXmsKA8wzMaxqUkyfFMG7Y",
  "key32": "5U3iYh6R5YUVBdZzNj1fS1Za4nfNY5ZAotA3Qb2TEyeTM76vjcCUN6UrnU4hddm5mP3vcnwfeKnKrGrsL5D2n4Am",
  "key33": "bPjWkjHJJ39NrmJsD9kvXuxJjwzuxYdp4UtLEW7u8PHSJXft7Ma4DXveaxan1EwnuwEbEs4uaPopf87BnHF76o3",
  "key34": "4sGA4NYVAMBR1DnCUddtiVfKq2YdiWTdrozvAuawkoowmMkkfZ6fmjs7iDBDjm7HZnN8MrNrB1kPYF1N6zgKKc4n",
  "key35": "3NyJdMi8vVaJFYKDx3Vx43qCdA3bessmcKMvb7JoFBxZrKttFeFE8xwbzptp7nCmaBDGzrUeTT2ExrRyhQLcHf4H",
  "key36": "s3oPEy9CaR5CGTMdqkHhkmgnim8C8X8SQPmYYHzfU23579yASAP7jbBftt4NByimbF3hVv3GoJxMNvCMfNqngrU",
  "key37": "5AUb39MUaRaTZR6E8SdtNZwEviVgmimrvx6aDMK9KPpGHm971G84PwzLUws7xfqXDP5776SsZHC7ynmtbDj2njer"
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
