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
    "37SbSHn5p7iDR4UPMJV1dvs8MHLFpEHXz62B6yG3hVBwfsHpnM9dQFhwzuQZPPLaqwgkrGdnTsW9jeAzteNWkKhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nroxC9YhtRNwcvKkASwnAvhB5whaMLNmbpAabCYJ8d8impBL6yKmCBTcwQKfZPozq81Yy4ot4QK5LbvQscCj431",
  "key1": "5q4PMMUwxS5fdbvUWMCFpGpApRmj9JFNZQueMcZimYGpxZ5hTyyPaCxZiaZjzSwnLn3LYujXyvpq5wTAys783dfP",
  "key2": "3mLtrBpTGJMRrjYR3tDqqWpxT2MCZFrFgapPt1tpVm9sYbGw8862D5w8rtv3uqM6UfWFPoSPDVXfvgvq4Jk51pFL",
  "key3": "qA3bG8qbQYG8qQ25YXG4MaidVx2ZmLrMAdSHP789zMAMaX4kQgekhtvtEqGwpKYPXK8G8k66W7WCeNrPAwM7Ku4",
  "key4": "2Y7d5L77eJhTyKF19fqzsYx42oWqYCMUaoAdcomMmdKy3rgg5F9dL1ccCp2YQpLWXBh2zkJFpPBpp9uZm91NgxN2",
  "key5": "2SeZXXToXvL6vuMcximdvKYNjz3g8h5ruuzkiNbf8kCwMAFVMgTiWbi2fkJQnCQhWvpWjvEcbveyZ9sru7VsPaCY",
  "key6": "4nAPj4mfnYqL3NHJNKsKa1zayfy9HRqsdTZgqrpd5yjdnPWCpchyyXuY9piccCCAKv9rwxydKHswHmYFZjCk82o",
  "key7": "2ECBrP7oGXJtRdNL1G1GXNAimVTjTQiyCLYNJvgdWDqLTeTvtfHskYJu7csWE1DmzQSXZ8rRTu5nVd4NmwHauQJS",
  "key8": "5GxPYWPyN1wEkapmWBMeQuByssr42G4iWMiaZLVPgAQ1guHaxLPbGxAbdL6jWQBAY1dfRDrTXMavFFuJR8AKeC1F",
  "key9": "5M2aFyoicXDLcGHBA6Qg8ssCqRwsKk3FAGkT4WdBztJ2Z4sTAabDnoq4UNk5DLHF7J1LJ4gFbfej6MwRszFW4wNi",
  "key10": "4K4hdGU7GoFVen4MJFTqVUNefqxj9v5yTKYE34kQ5ieg2jGx6KdPFrs1U9R3QMimEtbc27to3zTHxHDU2a1t3oSp",
  "key11": "3NntmsrMvkZ4kqexvwJiz15GRqrgYKNYFYAefLwGoscT6cGY5AwBuf1ZurMjT191M4egQTGVzTiT7WDCapHaqZA7",
  "key12": "5jziEaRddePavk9kpbq72Kij4GesJbHWtT552mLp4z1AB2Vjy4ypj3S9V7KgMZSno1ij9sK8CgzpzemudT9yif8g",
  "key13": "2TASAYWBZ9Y3GqjuQFy2mgcCDFf3Ew1N1Ff8Q8YthKMU8t9nGFT94sPpotf36KZswoHNUw9uTPgK22mmgzKfRerC",
  "key14": "5SyG3ezoLRjbztd5asPsheXJJyGzTdd4GtJbMtKJvBPecQ2ZyJd9PquTtKrJgXdmCoUcgGh6j7i7vGS7odTdHR11",
  "key15": "4cswkPuNHWFYPPZAueabNnb4KVwwRARVeuxH5ahLdy4chqVeik92iSNpArkTmxdRZGpMUykL3MwhUkhKJZZD18fB",
  "key16": "eKf9xSdZXdhg8AJe2momt4ppqTYYJtihhHirTnsLd1TftaAJuibKkLxTQNC4MZBq6Fch3g6zsyjJ262D51gwFZv",
  "key17": "2zvkqCGyAn23fqWq7cX9s6pWcRt9f4M68QPjfGStXFek3MYq7zz16VvcQU4mVvgfrzsEYYPVVcQSBozd8ee9yHpV",
  "key18": "3BWyWt5hWa7KwLEs6Uvmxqu6LM17eTPsLVMoArrDTQMEa4wCufWdrX81tvBvvHnqN8NQRto8nNx6USr4oUPNpZPh",
  "key19": "4eGPi7BuxbrVadehBjTJv13rWjXUzGvUZx5WUemCcdiUxngXkfwKcjYSJRZZn471pMKBKtBbPEeVRf6K2xMMERB8",
  "key20": "2FUoRRFS5wKTB6yrsTszPKAH7qz5GqXTSgXZhkkFYRNGD8RXv5mnqZavhxZRsxwiovs8x8LuTUxDyeF1TPymj2LM",
  "key21": "3Nd5wmxakw9H9qbp627t87S8f5pLTU5ZTpg58dbcgsneNiCn6Ai4CypBqB1RsQN96m3rsJT9DHgfKD3uN6DwMNP4",
  "key22": "4Ht2iNQA68dKkCdSTPRSjJCszmgQVd8tTVVYcs4X81cDZGb2ksfbAhxtK7H36BeXetbPACnpkaBdWR1dhvEs6VPE",
  "key23": "3BrvhieTyiujGgkw4DNXkbgq4itRHMwQbt6vhjTNLbP8zwqDMGSxyRfgxcTxRyAPvEkxvjGhS3MFVAaGvn6qVsKT",
  "key24": "2YVkR8dyRz2Uh7rjyxL6L3p5KKPaVm8AjWGwb9duwkXMuSv5Wicp35UcvWXZt8NPuC7rafgPWsDFeYbSJxjHjB2r",
  "key25": "2miFwrUM8a9JHekWrKSEBEryV9sVGvn4YHLjoRsEQp8M57Q7VMHEQU7eCTP6oHVZ6VbtV2rgdneizysLrEhx442a",
  "key26": "2joiZ21ZbSQa2qGr5BtSuw1AmUiMVPT8qNVKpvNuRWP9fPTWfpyz2h8xQYLrVhCf5JgZvpxvMyhh6GiZGyP7VrtT",
  "key27": "4L5Jz8sCociX2JHwG4WjBmojKV56Tt6akuNfKeX3hF4b2dNME1PEoinptCctiErJz5Gq1p57txY9NNKFAtALKKL1"
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
