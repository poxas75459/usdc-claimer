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
    "28uo478NBsz2Mqe1jSvK3JKCyao3fbrti25JatbKR4TuK2dNoCPL8hkUd4wG9GYnoiTbuMAZsYWcFNCPVcTFeqGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYXAveeobZRdwmS714nrLrG4nTFB621AoTjFyvttwhsN5QDsNmPCavA3V33BiKFh2874zFPDWbwhVawhbcWxSxW",
  "key1": "4ekvxFeL45rBax6HdXiQ9QykqbADK7pLhSZ5PcC1QRQEuiuqgEpaNX2JDJBpQYkNcPzga7dovRv7izCLJis8puqJ",
  "key2": "3wwryvXjCpxQqtVngFtY8PMMECrZ2xFVqCoMuxJiwT1VThcRCE44dN3tLMMgJuaUBHLYzqQXAFuJTAkhkwtuiU2x",
  "key3": "2Eonkuidbak8FSCk1hicwVXFyfvb8qYBs9st3ZkjhPxCpuHPfeTd7KXYxuSthQFNmDEFfAjWoodutc24Shh9ChPT",
  "key4": "3UNwjPT941RHvHFbhxhAcBEuPzj5ERHeasXuN6EGZiGTFQvZZm6BVLRqtz7C4Wbken3LQYFsBS2w7QA7xqgJgY8W",
  "key5": "5T4Aa4CKmKUUphmpsgEJdQ742g33oUpyNV25y74AhWqQz5uBL4e4PVUMHTM5aAnX7h2oHe7GzvMBVYpXZhTruv8a",
  "key6": "2R4hGBDLmhjKyjUnh4Xdk8sBCFrnnqG6Rya6czdBCh5Lh2bWtgKsEQKm6q1UBaigFCr8V5fRBo4TFwF8Xrw1bYws",
  "key7": "5if8XvyvRmDY4pD96JMLVad2S3nxSosk4iPxSczZexkymhYuq7u9FPT9AtVC16Aor6vcmuBjpGLuaqgmbgyvMmfc",
  "key8": "aGcncPyxxJHCaBZNgn6eWyW7XT59fBQCEhwEfLKAs6cRL8WDZXBSYp33LsrRnSS9wV6d1ZQX6ekd5yeBdLKjo6V",
  "key9": "5WQ8hYxxwMt1g4puZGocHPeUbmnEAccWsooWPi1yogYW8bjp9vmPLYrWjotjUqc6xUjANo8SnKDN3hGok9jsCvmi",
  "key10": "5REA66j54vqjydtzFuuhxo33g4LNSMwtkpRKjAKMAHv5xzEGRXHt5uJDbptvUgmgoYbX85e7tJ6marBAEHwtQ6Eg",
  "key11": "4jwDvrFw5ZxvXAhJeSo2kYkX4pv96C4H4XUJXgXTdw39mW1m57Rk4FyE6gnjhaMaUEZW9dfuAuwCydBg2swTvi5C",
  "key12": "5ScqMsfd3CvKkpR4DMTEmaxf6duMjfwXBKe1DTjzW1oHWH3aCwKVJCCQ47uuDNPvBKbKJpxpKZqHLBzhmwPo6ESo",
  "key13": "61wcKjnTFYtAVX3MXYCyDC5piABrvko4ocp1ZF7TYNyYuX3cV1VCetQ9M2yoJt1J5ERjV2gQ4qoA5fih6huNsYq6",
  "key14": "tEYbrn5Bqpv3VDqU5zr2SX4S4wTG1W56HSSKzUQhDsbzChzQq1e4sr4C8bgt8RAuQKKofiJzoQ6YpfkGDoNTs4m",
  "key15": "3eri8BLvxFqRoh7PLtNwKpVMMDYiD2MfcWqRdfyjJi8dsTaBxQpYBD25AFb5NNTQpQC1jvadRX4dZMubR5SxxGPK",
  "key16": "2bTBCyXQv7CZbQmUTs3ftmQnTEsUroWPzFn3e3JReZbAho3ZYVbdG44txD2Zc3zoq2o1DLNyaBL2KHq2pHugiAZ7",
  "key17": "32uyEcUT3foTh4AXGyFUuUMTz2CFPuU7YYNZidaNroJdzn57s8X8yuimyAVwqGvcPBGowpNKK5mFqDkA7baF8S9H",
  "key18": "5uCSMUucdYbEJFdfbxpL5XiSVqBVv6kbXNcyZYNPwuAr89PJWYk8USiQEFDWfcrXwER6eVfszmGgG721AzFX1Aro",
  "key19": "2sWZKvHqZz8QSbYGMj1GHtMBBNF9aDutVBLJxjQC4qU93xZ4YUaRFkNL5fcnt2YCwAW2h2cTebN7q9XUfm5gaBGT",
  "key20": "3YvaPPqejY9Wc4XnwaLQUUL4KX5Sn9xQLiKRG8342Kuhxv6Ni7J598TYMviS7sS1EF6rFGJ3JDmnbCymBru35yvs",
  "key21": "3kA3ZYCHRYXJwMqoZ1M2i3Wgk6tPfVQTUzGGpRy53KAPuw2f8ZE8d6VEruuQRJR6CVNbk7v8DmdbLpz3FFECUtnv",
  "key22": "2zCH1vSGPvuKWczquR9TjCn69viS62vawNbVYR95AkuE6tSowcQ2CLijM5kEU1R51PJFRBdHHJXfPZxhQMFXgHfu",
  "key23": "2GtQU98gCRtXHba6NrZKJrehix7KjZiuvAo7BzGod1RKFnH2EXTnDdLvegpfbbTz8CTAPFipLWoFWVNV4XXGsirV",
  "key24": "mw8yaixC6opE2GWdkPFc5isq1eKKwz7ea6sRYLaa2YDV18Sp54QyMXMRdShR4Pic7hegBftNjqrGT332Ar7BvaJ",
  "key25": "5Cy9cY2NmfE1AWa4fHR4vKAhXxZydcQ7pTxckUsLNsaHJz5eEiQtwryM7h5q4iHWDLWLxj6fWTifjg4fHT5f44z",
  "key26": "2bALowJnSrwyefHshBQSVrhE4RVDnNxQfy3y3NVFXiUgDXHKZUBoEGcaFD1QXPnTW2CVKheoAXucaD8ZWBapSNxJ",
  "key27": "4iD1QAkQcFuN2oEM5PbSdMyrttzq2eiN2H7qG8XqwuxsXdCj5HCjP769whCwjnMmvAugVSHwshMt3CanJwya7PLM",
  "key28": "5QFNVmV1ByiVmeNvr5gpGohQUuLkfjYiJrT7ZCofN42FLxgi71pc9nKwfGXsqnb9KjhWddo9V8fbk3eCahQKAoRK",
  "key29": "5EyBfkhTf8oF4P5WoQTyxjpka6vQwEfp72GS1HgMCPhXxkoTuAZ2XtaLt7pY7ZNmkZg8fqLQa4jiWuc97wmBgHpz",
  "key30": "YAxF3dDsYo66brGEb5myDWCevRGdqdVN8si4hiMPJim7yAyVythiJCt6eC7PPg1SkL1QZwFSwqjxTgnEMYcwPZ6",
  "key31": "569kq5x5FKyHJQxX2tRHy1Axa8PAgY9dkH8Vvyr3sQyZd9JZa2JaPG4qkvXLUkg8vxut1J52imFbrxMcbxeknGBx",
  "key32": "vr54DcgdVZ2kign1vc5bfmzHsTGJxsHDK5Fxv2NiLaZjDdy8RMW2R2wMXEJj1DNz9QtvKX8DgwPxLweCs4eS4xc",
  "key33": "3nHwmtBCG7d9cra7PPX6uHEMASdkGKDUNFk1uh9tCLtPsvQQnZBC8Emp57641YHx993nJajZbYUufLp2xMtPxjEA",
  "key34": "9KUP5RDynoCns9JqPdfJVPeLfCMvhCD2uMvCZxtF8i1WdKT1E4tSqBubQ4NTjpK3B1HHp6a8kfPBWN7grYCoFYD",
  "key35": "4rpyWuxiD1pKVEKoxPoa6owjNuZ1Hqq53dP8Hej18ciJYXdC9nA3MPGrdmAfZUjxrjTySr5L6SsQEhCsBVGRcnV7",
  "key36": "3p7oGxJwQsUm6W25irJqtWwn9WKB7D64KAKAbrckRxNaskJaBqfXSV9J7szws6G6nf13iL4mVmnDZQPW7F4jrTm4",
  "key37": "63K6Kg6z6VNqQMDanMuizaazTmCZUx8Vgg2Cxitm2NesdyjMDYaSJjnRk3QJ29vYCM5zX4tRAHGRzwHkueLvX5n2",
  "key38": "4UvqoLsXKD9JVGBRrm1PzRtXrq43KE3UCeVLVNFZ2B89hGRusNJdSCLTKSq2qooLUsGrWx7njDrFyp6h5XkJuPvW",
  "key39": "4TLkBqXPm5jfdnx4MynZwTMxgn5p7tDSHMV648RKNEPcYb962g8fv15vux3PJQCRGF7tSnCTFQ2Rh35YgNHkcYxP",
  "key40": "2QvJ6MGnAwc78vZCuApXv93tC7zkt9pknc2rKpw6B9oNkHda6LhXMddc9CwAy18fykLLj8ccgJwh24mt5BQj23gZ",
  "key41": "5JzR8NugfmAESezJc2JzWrFj5yJfH8g9T42DWb9bAEN6D4QSqvJ23vhqYMq4hQTzQDAok2eyn7TXhshAKjgnXGDR",
  "key42": "rV763qLpZLC8VJ9jGpu56k7QoN2TXUSQd7Kv63NNH7zAkzqPe6d1voZZQbfnQ1fn38impBn3Ltja5EAQKDp9T2n",
  "key43": "4VtCRGo34BmyCmxnvN8v6dpptCd3sr9ERZ1sJgh8ojVa9fzxtco9jwtt7oQL8trtoUA3NQ1GmYESVC6kZK7DSpMd",
  "key44": "3d2ciZ4VwFKBLe1ZEJMYHor5D8ss2vKSFZHhaswioCpNSxt6nqiNJoe9Ubtfy2gszAvBpo37StTenFxR8eZoBXN2"
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
