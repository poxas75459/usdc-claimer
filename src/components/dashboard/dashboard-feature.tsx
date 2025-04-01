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
    "4PJGrKwsEZ3abiNjVMEw4pbRmrW1gwVP4dbP6VBM7k2nvKhMVLctkDtnpm1kWkmkPyZhu4QPZacmJ9DjMekHWvri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29YGLz4EXmc6yf9R9Q9CKfPMoUZLjuDuJsXZhw7vEs3uCbgow7DHooukXbJUU4TYpfsuW3dqweCKbHaRJQ8X6hSM",
  "key1": "nNLrFEf8MqcFULtsERMNut71QdhuRzgQBQo44kXrjHf1A7tybGghKQ9Bu3U4bNfsAgL3iuMHqq9wtSWiYzRVN7s",
  "key2": "4rKZ1ncJFf3BPLNoRpaJgS3cwhDaMbyZtUSfQWNWE9SR4MGt47QXnDychrCdfzUxiFtCzQJ5qj1Mv4gLSS8CJNzf",
  "key3": "45hi8aydzh829e4WhgqVntjaA8s1diYSTnyFLGd4tFxiQCAYnBs6XYSvWSrJArMmU3K3rJSsnMvX1G4Vwd3vSZRq",
  "key4": "5H64SefMbzgkW3TUhRJi7DCuHpLaGgutypbgGMUaedycLEdRRpqeMgpm33zGTeWpxHKZZ51KixwXSHdkEBjWpjSv",
  "key5": "3znTaeyqEHmPUREgkDeHfjDccmMFepa3iQkMuaapSLC6AbAJMgTU4GkJfH5CvMFCRGHoD5VN8Vc3i62Y3pkgrPXe",
  "key6": "aJBUzQb5GdpCDiRpE6Vbf3xx2Z1NZpq5oamSmmoQ1D57BXAkDBMBFnHfJct9tZKBQkrXrRcvvgjtxwbP8PUzc3P",
  "key7": "3xGZdE3LmdLPABVqeLRVUfU3TF3XZHXtU46MpR12981zCfotG3w1i1KigBZ6UHDaU3s4ZgoACNKWivL3gxmEyTFE",
  "key8": "47cQk5W3FhFu1SWDn2SLniR9s9Rg2KpBuLNcQDLxac3s712XzGWS33BKXTHhE8vYExFKXfQjr8hEEkPQBBgdhze8",
  "key9": "T4aFYFijD7X5jaRgK1e8gAWpfWz2TRBDEKFCvCSEZdVc23nnn6PmgFae8T2QQJixhdhjHEZduw9d8ZDDpCFEp9s",
  "key10": "3BnubudvHi22XYMySkgRHiAP2UdSoyr7thefKgV7CsJ6UjVSp16Cxfhrz4gjfYBB7J1QUrXtFVo77FWdH9UqdNa9",
  "key11": "2aUsVM6c8xx6JYGTBboBZEzYk4wh2zhHFWLLf5DqVer2JwBCBpWAjQhT4sYpzMXPDiHUqwxJLdeTQMr9MzHCryHe",
  "key12": "52f8Pjiab7TNApXji3D4wAgs8cfXd2Lh1FffBVqeBTEoUY1gVGh8T7vaQGa7wbnezs8QpKyAvxh57TpiTYZoZdXm",
  "key13": "2zTj2veActYre9eYLVydYo5S4YWymfn3Uqq6gxTHUNJYwXK2kbjuN3LEyxSubSpfYDvZ7xEXPif2JSvZTs5Fmb8u",
  "key14": "4oVjnnDRdMRU6JiFg3AqLUA2UVgkN2m3SED7aD4qskrm2LM5oDzTT9YWNwjWZ885gvtZsJXn3RejnxtuBo9kCDiX",
  "key15": "4NXgDHiFG6KpoHjKJrroHDTcrvKJy9ZuSP1P7p5PZV415Up76TvXrGpsWG8gtbCves8ut56meDNui8cBuXKHNB6m",
  "key16": "29DjXHch8mr6cxUDE8ZQ8kK397Bvg5D3WM9dJt29PQDxSTdF25n7XDCyEGYBSHUtc99zJciv3DVbewrWJDyjRTcY",
  "key17": "66CMCS5SpCpTGdNK6YsckzRu2U5oPdR84yHErqiGs2FWCYLGXzUgeG41gXq4cbUX9veTJEj2j11HUoidXjcXdWjq",
  "key18": "45e3oNguruFyPi9X3rKhjrEGYeG9bTAFctmPPT7JDuYhGGcL32XLzPuJeWNqPGuLE8Tp5xU6j3zZF3poLghdHiMU",
  "key19": "3KAH7ALxHwAKaZmomsF2uBZWPC67o1kVBXcDn9i3PhZVXSWLg4q5WPiki7jaBvH72ueeM88vpVn7hPhxMZEARgeX",
  "key20": "3JUPhAt4zEhwqQiaW39wyhcMeRE9jc5TQmNsj9xC3HSXQR38X7kV5cBxGoFc9tScEG9P7iY61bJbYf4vuNUxNpK",
  "key21": "65RYUM7iwnwMjJaQW7yH1k7dXdTNj6EfxD1uwMbS353xPk4W2sbdyx5KSWaMZD1Z1ENM6no31xX9QZJTwwFawaZ8",
  "key22": "3GjCpe5HEoGd663QEqbGNwg2GbT5pa1cVBJogBC7ftKSdMbfqa8RAoppWnQdgzD4LmWMe9keJmm1R9rodPWUrdG",
  "key23": "3mAMLWuGMWEr5f5oRPxpqFmb3GBnFHJU7VYNQcjHtR15VTiGUpBzFte61VN9kpQjNxVimP8g9E2J8geGcxYHC4xh",
  "key24": "N1ZAEucVxR9W4GSmVUVcPyUCq7b6ay7NeQ7eZmWBrtBSbmG261JCqR949pVUX2yiuj2oiNGtPzY2rNHV1AtbnDM",
  "key25": "T1Gw1PtQWZncof8TwcXbA4Nn4t55ULoqauLvd8vMUsXW4eALjVw6durfP4AFtrKab8v8X2cX6a81vvU32CEzhV2",
  "key26": "iHhLVnixucPSuSYpkubHzYBtMyXp54wfMXh9SujoSMHvuA2YD8GTgqhDraBYRXi5y3msVZG7PUQ25BHJatH5rtH",
  "key27": "3f2Ve12uYgPNTXRw3CiMqX924FZnTv8iTFcMwBS2L1DrEtuQCky8n1Y3TyUPAgNP6vugDbZ6J4ZTeDAmakFM4c5A",
  "key28": "2NKY4WbKNfY95zXcPv5UehJmCV6UJ2FwjTkUTRJSgNmVkp1MkbzNAgygZZaPbCQ8Q4HmMZsdGG6Cp9v9N7LSSzsF",
  "key29": "n7bf7jBBo8GHj1Hc4pe1Bnbif9MBdtr4oUKMraVNCNYEnZdYAz9wGt4HgetKfs6wDHhFw66Y7pZEnbyV1No1T3L",
  "key30": "TX6DGhtBcXXfQFfgpS1TqnkTYx3uD6CJsChH8mATLXYELDWERZ8JgrtuxdYMdPGHkfEsKsE5qiWN7L587PnwUJm",
  "key31": "4BesBmTWgNmPr1mNXUegss4aLMR1AY2y7e4b6RKFaRLnPoDZ1Aj9KRzTwZRXXhhzrTRJNCsc8LNHPrYPiFFEvrTF",
  "key32": "3hPPphgMXMiwMzmg4RDsUk7N66tJchD8QMrj2us5F3MF6Aw4c4gjmMxwM3t599bt4Mzy5PGMQAULL4NtR4TyLyiD",
  "key33": "rDd8H3aZ3QGpQRRYVDxATCAtFfKuAE4YNU2AX1u5brbU9WkN2LFDGB9bEk119KkPYUwkFVCUDQNxSgNKdZBbGB4"
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
