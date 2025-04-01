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
    "FxoXAcVx3Um9cYMCMvAiwKzo9iBYPG89LfCMxw5eDN1SRFxHmrkW1SwXyz8JeEF5FTwMiq9xYLaCSwtZrvP9KRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EAeVdcMJPnUmeMZCQPk2eN6zATKPoEquixJCfkPNWivNQsB1Q41ipD9gQnjdpmm6dTQFKz9BntgQomtUksEt2TE",
  "key1": "5Bbuuxru3Ts8sxUnu75Nc78jtRgGKuCWhqp9f4cya5RShHq9VERhLuRe9Hd2ZNdwkiNmjXnwBgeyUR56Gh4XWEiX",
  "key2": "4Y4GMLFcy81o462oWuEzmY7RpXxMJxgnUEXVH1vJVtNe9bmrzJAcJPvBJHrhy7nUL2GksDV5out6khv9e8dJd5vE",
  "key3": "3hNjF7hMAogAaLKZgRbyyZySQdFBdnBqJ3ehkUzTFv25xgjmeNXJdR9jdE9pp7njv3zAnTBszW6M9BFujxY67rRs",
  "key4": "DVnNHMLTXeJSbbRyAZSNA4rnhQ8SSZQMc2z1FUMHyDCf8DrntKmtjsCnusiqom6QeUnwdQXURuVNUDt5whpTmBV",
  "key5": "3UEorTkqzzoErHxkjRxE7wz3cHWe4WHHRYAMdgWSE5fAETK84fhDZdChVKzaUeCkxMALYCohf3vsubXkriyBfJus",
  "key6": "qL2gYJz9VntcSPhGDJSauPt9PRBUBowBUBsBy3wM4T4fcw7csWo6zyFf5eKQ1reKF7D49cn31qmJWfWgvJEaijD",
  "key7": "q7NjSG2MKVNELEKU8K6xZsYKkLrEyAAcRtsGo8M8t211SuDzfhuS87VfbRZnD8M172kRNV8M3Mxvvkeus7dbkVB",
  "key8": "f5AgqP5bMtJWq5XSCiXzvm1QpUaWaJvvz6AjVoDKifC9o8iwvM2VY57PkQdt9pjxznxod7vZz6zKNSibXPrSRuA",
  "key9": "4oT8cj9rXpztRDPbSsoEAafsX8txyygiM95hkajC6FABs5wcERJvY5UxvgA3VnJKfNhLprd4BLL25kJdXkhhsAS5",
  "key10": "2eHVygqDHfZ8bzN7WiJ1ARSPHy6F2XSJgQKFpbtGP1ZSm5Q5oug4CrVJYMEZyyjkywJRbdybg7vqtqomHvSUvTyN",
  "key11": "4cGwonYTJx9Qt3xeL7dtL3XYyEziWC4FwmA2oTHs9og6YfpghZYczp5qijoxcLaJGaTNeVMxeksXGc31b9HchSsq",
  "key12": "3riGxaxTujj1DS1ySEqaGieCaNU7ZeQCJDVgyEy7Nbx35QypondWCeWiA6Fa81f6RL1nHGAagjSRyX7e7e7XyRSq",
  "key13": "4YCusq164voUzjsurLu91yPvXhFDDKyMvf6pb3PxubNs5TXeyg5SSe1UU6tZsPypyFk8yaLzULqxSaaPx8QrqaMs",
  "key14": "HEphkkHw7A2ySYGaBszyeYV8JG4qmKaFUHeG63sr2okQ4aFQJ1xVwE7na8w2AgHwuFqq1RP8nRhBC9EEnJRrX6h",
  "key15": "61BiAzzHytdfKfPVnuoHzgCc64Fv41T5TDP7akFFTAFaofH5sYvtFyzuMFxmUxe1bJH3vSuN5sy422V3EwLb8zUN",
  "key16": "bkKRyjfDKAdPF9uRJVV2WRdZhNfkXPCvapXDLiMCRs7rqHnpvxXry6TWrpgScz8Tcz1XQXodYGbTR65Ei9Tux6X",
  "key17": "qYS4tqTg1F8GRPCY2exLHxVndzffGzzSL5YWjzRv6xg3w4dpVUVqVoXPKyLN71NDDHJ9ytD6HTW3LT6oWFcJKwS",
  "key18": "5ko5bNxkVwoUW2CvoBPtYsfbJsGEF2gXsiQLQRBezhjmap5FWJYMgZDRafR7NbU6Mwvj1Ub7jtgmpDdVUuP5TZpf",
  "key19": "5NaJY6tsPb5Zv9Tr8nhJm9vhgfhHxZ6vRsqnT3nPxUcLBz2GeuKWRRGfjMGdNraCGhQ9xzRZbxrHBehzW5xCwB2B",
  "key20": "5gUtHQwus5YWWcTLqqQwjpSX7W243q5mFJTYacscM4mCuYBBZXngYuWk8Egbmscdrp61xVcJh9GBYtKcnMntcCL4",
  "key21": "5ePdS7u6cmDbVnE6Wh9C7TZqAw3k1LNyoBCY5whCt632FPmz29yExoTo3NWXp9aSfzEc6LEnzbq13XJrpuFZnb2T",
  "key22": "2BTeKppyd1NDunyKgepKhnTDgLkXM2KZjTTueapgoryfGjMovkQSwZHMtw2eGFWMvSgJXArYqeGkVkaYVSxaw34",
  "key23": "2A4FsajeQQoxeL2eJZEERogujUDBrp5zTeT5UKnNqvSuH6Tf7BmYTvjZxhCFP9g9eh2hPejh94PyHcN1C92xkLSX",
  "key24": "XhC3nr935GckAMJU67jj8tUXwJHQyRY5Acv5roFwqHLbwuKX771yi5eANWXFYmPrsXrMnTHVxMzVQd1wwYFyLDv",
  "key25": "3TpwZfSU3wTJLbnJ4M5kv4RN7uCc255gvixUY8grpuRse5nuCFwuyp66BukKPJB8YKHvdSu7L4QytPKMVqAeg9F9",
  "key26": "45bnHzUBbe3W5phYja8SBXVjG1vSa3vehbXSFwgeF9kaQi3765WtJzfwQEzyEjEjUihyAcTixTR1MFHBoHJaT4hj",
  "key27": "1G5otKuMmb3XSzneoMLdGDLwtvQsC7Y4Z6AXefpYrx5tQAPgutM5Qk6jeKuJucVPy5jkZZhUr4U6VHnhWe6uRme",
  "key28": "3MDhQ4gxi2Y2uRmhM1oHbyw6oeNCiz7Vm6i2yjCkiGBQcKgNhLcbnHacUeSp3sRvah8nM7NhNDbHTG56K226tQdk",
  "key29": "2Lz5G7u5fjJrwMueocaTKo91gq7EC5Ah9U5u2ynWxbananwsSHCZqNpjWJdLgxfGreTjgGXkmyKZ3BgvZA2tnVCm",
  "key30": "2pRz6Eows7nPbLt6A7m2FpTNUqVdGNvi5sA7qRir6g4QwZ67Q3nSpP8DPzMcktDnH3VWbbyJCLrjd2FQWUak1SWe",
  "key31": "64mWU3xmy2VvHecBDw8meTuUa9VrewzUicCAJAuVBKBnbLNgDeyWWi8y1H6epGwZwco9xcBoQ3GMriYqpsMAC9fr",
  "key32": "5LrsKKqTwuuHrhH5fe8BEppgTUeFoZgh3GsM2ZidWFZ11N22yW6dGsptVuP66C7hvHDF14BGHNEDTJ42oUqzfDoi",
  "key33": "4D1GTFxUFLCMFbxLtVxq41vkC2XawpXr5oVCxyr9eta5rUdbAGsw1qP9okYw8pdeo4LaWSQM7FXUGYwjmHuVxK2X",
  "key34": "3myqpJwvhe1gshcqCwDLozc44BXTHZCqEpt7wqktBpk46ULq1AfBG6vi7hGTXXBjRALQnBwvoUQLQZPEkHDBDBsn"
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
