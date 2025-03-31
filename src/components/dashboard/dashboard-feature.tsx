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
    "3rh9SkxYwcLip6tXJLcv8TvvSyhU57HSrBwyjVsSd2H5Z4zByea9FE2fXWCbBoHQJEiwpgqDwwrmN8iki222urQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oKh5YMLRJTdmLZjBdRdUoXEj1iKEZyuucairwvcumLJWD1tqm2bjQ2eDe7NuzsnkWLEZbuHwJUsGPJjeHA9wCUZ",
  "key1": "iEzxjt94u8wDGHWTVqRD8BUCH7sSm27Gf96eusn7G1gKpRz1zmuRfSh1PpqC8TpWbJerC3Wj96sZaCBNtrZCofr",
  "key2": "4kBtcwqdNLMi87ysu3Py8V2u2c2p2vaavueqspr1abkQP9LFJvbkxLknwsCaPqD7cBjYKC2vLfsb2EcGtdk4G3bW",
  "key3": "5PXLf7qvcXP2Y9DV2pxpDAYTVGQuwbz8iLkJwJnopWEfMKmm5sow2BTeETgb7pQaSiiMifjsF1Z2ZmXuhMYTAwp3",
  "key4": "5ocG61euVGTAf2yvZabDkyH9VMNP9Egqr4wWMgmWwfy6pr2uxh3S3vZKiEWYh9RzwYbkCmRS2n9V8k4bNLQCvH48",
  "key5": "2XxRwLToQQMNkvFKdZcoJ5Jin7GTVLvyfq5uZW1gDmuQqvYoH7C7DYuWzrDHLWWUb81tRXcFk3DnYNKqkLwcystE",
  "key6": "2qCZrR2aJKWAuuDHLcZ5a2pSax3HjSBq1i4EtPBsuhg7w9GanEjPgugfYuvsvkmi6UytYguZFizHusEPVStaQny8",
  "key7": "66kMEXwbMMAnYYwYZwhgQNmnHVSX9TkTWGzchHDgFLgbi74WMwsSKAAypEG5arfh4mascEQRJhgj3uUZYPJfb7EH",
  "key8": "2JADYMurxj5R6fDhcPiHqP464Bn5BKSxqT12PiBcQXZCBVTwpAGTmKRXmLq3WXFzSrrSnZX5zB33ne7d5ihW8UiM",
  "key9": "jNaFTsUQPQtu6Tid8XGBzQ8C5po93wbAtNEL1TGjZbjnZMnwsELez9gzvrKor7VmvEG85qofRiaLNPosGpDhMBi",
  "key10": "64Ti5wWjPu5F6R66NXQhjk4RBsD4DoBQV2ydvVmYZ4qCJiEAzRouADk9StPag9y7BjB4mQ2t3iJvUqCkGdhzQa25",
  "key11": "4aWCn5nJj1bFbUq6SRVvQRxEkca3ZSjH5vWQWQ8dSbyRoFKGeEiBHoCj7y9MsFUr1K7TSJEn8hmSecJMs7wxXyxG",
  "key12": "M2pzLdkh79c9vAJCMiiPe9PoZMjG23tV7r9PkHwW1oYYkGg1uzQmcE9reu4EkbDo6EBpTM5P6rmYjqUqnmqeB87",
  "key13": "2UszeDRrsoQCNKAZUAS4x2VdrUssWy4kAWa1sJGjxTkN5aub6wEXJC1ZfuuWMCXyqap1oqgFsNcSTEeEKZfn4Y9a",
  "key14": "3Kb3E6DzKawcevJHGco232XYf5HKRNaUB9LST9RBdyfusYSeY9YXeiParUZe7kHvUfakGAz5WcmSEA7X3ZD7tGPB",
  "key15": "CsGwZssgj5igAjJsUvJ5ordaSErbkvamgY5Kt8pkdAPCAooUWxdu8PfviF4AySXGHRDme6jXvY6SGt1DVh8aMoD",
  "key16": "N1a6sHwGSkGH6rmcV1Yt86DnZqV6MWguUbrSdgXRKawBLvFeVuSS1Nic76jc1nkBJKkg7NPDoX4saVMHbTpjKa9",
  "key17": "64TC95DQ1iEDqvcEtcUqH3BrLyDnNLdQvTXbAkFPsB9Uiwg5LkEseLMSzqUbBnRtCe5dea4Z4g9B7i4S7qBPbta5",
  "key18": "2AiDUC8TEX2cdoCh6eEKr8w4EaxbScgExtFN3PRCj2Gnx5eTSBwtqmb6gwgia1W8iHcVFgRFgppQRLpHAYDwjemG",
  "key19": "5YBsZhT1Fk8CsCai3vppxWReajsBKrRwTuspL8cfGgGQFk5WsdPrJKFFnpamGjUhzzENqPt7vnQcMiDZjXgbgoPa",
  "key20": "4ZnWWetZNa4oPHX9w2tKjqKq4fuiLEjumj3PopEr6EGiXerzvMSw6husE1wk7FTCUPqeemvgyHzGwKvPbtigQrh1",
  "key21": "2M2PuTVTqy2MFQ1vD28nSxUwud1j56MkbLuE8FAp9RUVZoDrXSv8kj5571eaVQSYoupXGZsQnP8qCmrHmHJuFXNm",
  "key22": "2ETZhVzoi58CXTp74uk5sYf2KJ4xbS92GRa1AJMz71LA91uvWUjbK33zaQ7Jn8g7GUG1Z6Z7hXhafn2gqeN7D9SD",
  "key23": "3j7bn6RqnCQsMQXcmyk2tLwrk9JAxMvpunNL912SqR6S2v1z2Hrsw7K9Q1otD8nQCkrtPcN5zt8oVGjdnKP4P8xU",
  "key24": "23EXwRiFRMzfSaY2bG1u9Vtnk462Y25q6Nk3RbuqJxiA5y1znneyY8Vu3HGrFefhASzRwsw3ZHeAbvt9qhxJkX8e",
  "key25": "5H7arNPM2Hzm1g8DhfFJKWrMB6QQBieADcGuHJcprf9anpFU8it6kbXibwdSsS6UWcREYHDCdKYjepVh6KcZND7d",
  "key26": "AQTepCyZgzXp1nxnFgnwTtQsgSfCva1WpzxQXYuF1zF22pYvzopcsoFHXx2GucqBBxvkExU4KpMXZnB9PZMT7Xe",
  "key27": "5b21NnmCVi1notAfu2Kt6fi77yWVyEHuXGJ3akHNTvBavv9x4c9J2xxVyNtVCuPew3vtzbQPctWCqeCteCGW7S8n",
  "key28": "5ttHfUgED42bnzqc6kEV13u8fN6bzD9QwkW9r3U3Z84KVT2Dwto7SpSGF8rmHURfCZaq2UFfzxfGk8YmizvYEuhn",
  "key29": "4HAtvrB1oLaTrxb1jHfmtajYVptwJ6sMDG4FMbV5v8C51Tk3cpbFrFsYJineSMF8LWfhK1QFA2KofjDZdy5xNURy",
  "key30": "Ctm94sezWbnL7xpJvctMC8o8i95UUH9afc2ALELYe8149V6ssPqTuJfPEHLBE7Z37NEL4nCpPMubBxxynq8Cy4d",
  "key31": "645MYBv17VB4U4bEqk8z5s7vGv7xS5tko8yKMTWMtr3PNvLfMXLWmojSvaL8C5PCexa7MkGauevcWZoJaaqr3PjZ",
  "key32": "5jaLW46bgoJyui6GhQ2tkyBjPodmMfy8sFu9nRko8ejmBZy2hdCruHTZQT6cvYWJWBpQh7MWRBe7WkH4qqUk2Cs3",
  "key33": "3bcTsxyLoeDQW1FRG9xrF6idgesVpcahggGVAu1yz7d9j5BYMz98fc3zzAmXwjpjctspVSkSC7TxQjkDF5hu9Cew",
  "key34": "38KHSiujqYSnQ966tQoy2d4m8EmyviDFcVVmb8Ja8bjSD3TMayRN1qhpkwKHeHE9CvcbdmNsBiax8KqYSsGEQzpB",
  "key35": "491sDNUGM37ui7gtZGZNHzcQo9cT2UNC3fKiXNvU693jsbiLK6bQWcvrDY2YbVPoPNDoZVBBp3v3ufxcm363SwqV",
  "key36": "xCJBgvfQqUUjqfShKesUypjoexrXFBRfV3jE2pY4WzR2gR3uvzPzUahKM96QBbvE8GB6oSrn3PToQNyocm5TKB6",
  "key37": "58T3gZqo9hEV1VBtu1QXa1JhvgdbjKxNzKN1iUteZnGXDvqvX9jS48Rx8bq7RiNiWoi5RzvkmgaW3QcRZr7TALfB",
  "key38": "312yLFLN2WVuLhxVnHSHXMYAfxXrQkPS6MRvbJFRDA2Bvpe6YPsNkhSza2FgGfBTo3yPEd2DJXdMDMhir6FHsYaA",
  "key39": "3hYvwuWVuKYnwMBJVHHmboBcVZ57w2duuUvUsBvHmz7WHNgeRuADnEfLgDmmCVgY6p7qL7Ej3z87VTcm9vNH9WRp"
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
