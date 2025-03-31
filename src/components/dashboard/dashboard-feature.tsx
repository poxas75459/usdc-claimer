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
    "JR211euVsAwgUhfi1hiJNNpMgFEa7HxfkY4dwgxqn187Q5vjSQw4t7EmsAhymivCuCsS4zAr9v9PNbZXGy1qGD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Emd87uQyoQr7NVTJze63Z3A2pddS3nwE8dVByHHUxp8sXE1RXKDFZV16nRB6An1snL43uhGv79LQwKBAwYExNeL",
  "key1": "2NvXMQzsn9PJHeHG9RjEpVVNvgsr4NZVaavsXyzjHSubuavVjW6i9mKG2R4KbrfD7FAE5VbdDz1tUnAYTDZcDgY7",
  "key2": "5epyZvV1bmZgEXz2AwqakQPq8F3PSMnjanwHgui4JbLYdg39L5d7LGPohEvQHNMjsuyVhCXrbvm8vHSCWm4gEoSx",
  "key3": "2DaS2ycqYfQ1vBUHUAbPazcTPb9cqWi6JeZMpZFDbyASpC6SD4HAG8ruwdV7gJm6R6vRziNeoivU4yjcNn8zWkV9",
  "key4": "vyxTx7uwKkRyZ3S26FauDFH3eFxsjdfj5BbABampwbfXbctDd36EVu5XHoyJr4VvvPvgVrMpuLigaUtMGafR4Jg",
  "key5": "5LDa9GKbggkNAnjkZ8EogXzHQuQVGQQyKaCVKBmsKR45GXHkgu4n1SVEXrtMqAWeJ9hb7fkstHj8vDZrSAxGBHdH",
  "key6": "4KsZNNQhNfFBpdsXF4nnS54rwdre2aLfZGxSddLKdkqTs7pPNVVdT9rbe922xDsrxnKjfYsGvSEweX6RPnKETrzs",
  "key7": "PjD3YWaLv7VubszaXAnUzH3oJPyHiQk367Kykbg6UnoVd2WmxcxBVyyrqHBCUBB2WPRYpr4LgM98oRFatzH2daR",
  "key8": "3uDpckiSLVYYbtHhqob2Vf9pMV1UZZEk94mjAACJ95mmRRCoWGiM2EdbRukrPtAsbjX7YYU6SWU8YPxu9AkF1Zf",
  "key9": "4SZsPc3qDdyULzy3GAHnYyGs1mQwLWg8q38yYaQJs9LAgY81gTRAJ7gtHCWnYhQzjoXjdBFzWnN9V5Cn2BaQG3ni",
  "key10": "2GoxwH6TJcMtKAEdb7s5Db1cHwriWoXb3CKviZLRRd3DqVVXM1B1d1GGYT38fNAXXScikwtV2GZU63LvnPysTDed",
  "key11": "2jKdAeF3oxU4HYeycHbWaQ49iX4bWRWoMByKxxrUpAZzeDBZr9y1TCg4feEyjwGA1oEQP3kMg2mErm1itMvrVTUy",
  "key12": "5jKrrGR26XhqpocsEnvrVvanHYbeRj1Sceydbsu7DT95Hx8mPWyn75APKkprZKHGAHs7qYQbQNt14n7Pm7AWYSKc",
  "key13": "5ghX9RjSpF6ErpYQEz7MzZRvuSAeRaSpLeXeoRVUuEiKzjZpYMMLomD617CEUfn5ajiKnEaGrME8m8vGFZ3Rw3Pw",
  "key14": "4vyXLQnrAnUsBAK2Bxr9XebmVxkDa2jDJCkjcrTAj25h5DGYShTPk68wXAJHDd7yBYjG6UuzrSBUaGV57Xgu2aic",
  "key15": "XkSXagNLtJVHhyCr7PHDuY7CpG7VbENnC6AkoBmiEDM4E2DgRSJw7uS2987hmCDbzHMgxwTeHzmbKdj4e6WhGGd",
  "key16": "U1ZRADU6y3XZxyK5ryg4bdVUFNJKVp1bJ69cBvkDGshHPSLxXzBjTWSrhsocsikrAR35GCq2fwSLRwaZ8BX6UXX",
  "key17": "5SER7Y8FwoXVJpBsEPNd2qDCL882ND2gPPhdTWkTjhygo6P8iwjE5EH86Cs5ukBcgub9RxaHjmyophaf2eH6EBwQ",
  "key18": "2pnfRg54v7bGAmfw5XRbtYEYWK4To4JBA7XzKgosTbD643GHee3326cHz1TaNffwFgmv2TfTMsUyE9KLEGJzJpa5",
  "key19": "2KXbgwiFqYsBUBtbCoQm3zXrQDFFLyJwNSecXHnZm6mW9tVhXBoYMBRYtfZBYCfquUFhWeBnioFHdewQSMwztNQ",
  "key20": "3pzNXGojHUp39Z5bFNWoiPQJVfQJjcoAUdCKsc5ZLF2Nm5sDzYJkPDRrVNsnKvjYdZM6iC31TxNfF8pdGxfxcFpu",
  "key21": "V3NPMG7WoYpmcNoYwiaUUsxjLszVN6z43Y8zF6Uq6qEqSGroWzGAFJdepeSxLYWmdiyKjYAX62GV43q321qRh2R",
  "key22": "2Fnpr3Wd3DHyBEzi1Nr3RbF8ddrHYqWxH8K3jFK9LNJryMaWvqRyuD7HqnCf8JuBmP5hakiaC5UWC3htCtphToCL",
  "key23": "5qU8tiZu2YPuH9czLmkyYb6jeB2eiPkddniktVD4eDBQLiEzEKjK69Arz9mCVav3tAwPkjjSS4RTRGRm6L5ivjcv",
  "key24": "2Z1PExkdyg6WKHzFkD279CeBCaXKoE7g9T8Qhx1gvx6BHE3R1PL4pyy4vwpLynBgPcUZwNmAc3vVDNPRSFpuBGkV",
  "key25": "4qjuepdLUKWt6UNMxbyh58sUW4NfpaxTcpvcU9d5GbWmSr6CrpkTENzRScf8MjrXXq2qNuPiCNKBKiWsw2vJ1G97",
  "key26": "3mGzeH6mU35yAspmYKB7wSvH76gXALxJE6ZncGzfwcvUnEyEki9Udj4spvA3dFGAaC2e3tJKvmWgZhwT5wUgrKQj",
  "key27": "4PqUqwt7xMcetCAXXMfJkc87NnMumY4yqogA94rCLDHfYVdirqQgZZW8hqyxJdSjXEnsBK4qoPKH3Y5SadfkNnn6",
  "key28": "cV8w6qTzwenpWLDkW5jURVZjNqZqfYbkHPTBE8q7k1UBYjcBVgfJ6TZL8HCHQwSHbPNoBS5yFkHVhbAXvX55326",
  "key29": "3WDo3DeXRLXCX6EDgam36gwNnYhazpjxBrr99JR8HgRn6basadPUwabHBcPdB8gMq3gwUDNXraoXhUY7vJdX4HVs",
  "key30": "2zGK5egkmGezDKMBHG6Tazk3npVZh9mPUgesFCCBh9HXcHWf8PV1GDhEqiMSwwk7mSEA77ejev496r2BL6LoByv1",
  "key31": "4D5AgWd8vPS7cZt2Ty9jv8p8b6hAD37hBQ5U2CcXtTrYihkj9DRbNqQMjaxxwSyvUUUD8yR9kDaHkVpP9pqpFByW",
  "key32": "67KCzjYNtsepW5ugLMmr3M3g4Nb8iexYaKyfTVQPSc44Lz26ejk4n3ybE9XkXuvwF9YFh3BADeSqCL1DkRMP1vVt",
  "key33": "a2Cpt19wGX31FUT6YKA253PeKhDe3BkUk1Wyc94YZiX4m4wRgyaKrKHhgPBfBVcU77C6nJsP1u1BfGpTc5tF8QA",
  "key34": "7od8hpLumbGgnhuqEduvRY92s1AfnH1KeJPgiWCvHBxf657qLZDhAn8wK1VHprJrEkvCiQPhf42Yj6JAiukgkjM",
  "key35": "ha7f3rUmTJRGe2WNXLjshhNueUoecdGK66oRBnvvMWcPvQ5wWvmXT1DVW3K1nh2g3Dd99NY1g5eZxyMTNKWJX4m",
  "key36": "2g1md7DksZiJT9GzhcL1iyn2E1hwCjenVqLV1Ty1kGT9P2LwAKkMArYR2zZjGcRPgXWq4ESDeeyN5oS3DW7LgEsk",
  "key37": "48D9XB7o8EyDMCaPWZncqXFzghKAZD3B5EaYxFnA6zMKMWMRhaCEhEXhwzezS5CWjnaWWDyPSntpoks784KgGVnJ",
  "key38": "pJgVMk9ZdJDZKJEFvFr9pETcjqZr9eCWxSUFJxzWJBwxRo2YFVxBoycFw3qaHwCoVx8cpdByDAg27sDQJTnMKYE",
  "key39": "3wRHwz3aT5eSSzCMErwGSDghPWM6AscBQrnJuDSjCSFUW3xw1HcTRzqFVpLV1sLmd2GDN4tCDi1epvkUGBhc896i",
  "key40": "513XJLEgkmMD1R5cCZMnnEdcpAkVtyosZHH1chhdNp6ugrcGb8CxRPMrtM2UFKY6j5MT6NYdgjm34oyR6rnWFGC5",
  "key41": "Cv96pMBhYo2XRPmXNqg6jnqqsrXKZWwaHstLWxf8pXBQwEszdkj57MuTequzwf4bdG89DSCtq3jeFRZ4JU55Mvt",
  "key42": "2PHMKLR21kkfx3bkvhw8H5HCLKKvoaEniPNwgz97cjXTcojxWYgh7gtfsDpKTgNQ7FDdtUsWw122BHcPFL7Ci9sy"
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
