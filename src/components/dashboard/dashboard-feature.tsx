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
    "3pTmUPwng1EzH1iRRkBbymv4i1rFtRfWDC3yF512o4JingVtTcLziv5uzDStPJNJ2jtvAgC3aUVwcNURF5BJz2so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwu77RKTEno3vV5C1J3zzaej4Hu7Ugs2EFUKc38mDfTfsRo42a3ibSZURnrmCLLkzhdUmeyCgHXFbnp1F9mDtrr",
  "key1": "5gTvePTL6xK5reGG2VGHhzwpU7aJXzUPKFS1yAdrXfrLJJMVnzHYbPVKSdWiv5GCDspWEpyQ9SBwdxG67DbLQYdy",
  "key2": "5r919jSCjWJNHG9dzvJAs1tqKswvmJLzGeuDq2Xtp31SskaFypbF7fxjPYYZogvBT1qBMMVLQ6c8LjAMMhvxeXLW",
  "key3": "3xc34TcwpFwQrkS6WWWbeA1jn6jvNT9ww3PaoS1ZRt4ugGTXSMMULEP7BAY2kbaXqDCViYYAAmf4PR8j9nn8RGvX",
  "key4": "ptRSMASqts9rsHcLTTsGnbQiJFBv3WSij5kM57qjNRoeFza1UrQ23HHqkU7AmcmuCquZpWHSU8jt7b7dgeWWDDZ",
  "key5": "3TmqptfsUepfnJH4EvDPRhJTXrz1pfiDzrHgaEbxuurQLDPf4bSZ2jWcocYBM12HBMjQdrQC5X3ukzmGSUxsZUeg",
  "key6": "5TQdXrCZL228qNC5rb7YeA4pkSewJqtMAv4ZmyvyoGJh8bBD1joRK9ymvuCeRRfbQoaGG2Tfrf9TPZTEfcy69ePp",
  "key7": "5gLb5bwAphCELPA1pu2WAxrCVkQgF5zU47VS2ry7j8MTMC67afMTh4R6FFM9fbTR4nzSeWkxWU3f7CsMKDPzJiCg",
  "key8": "6BthJgGjhCNXB8Bjpu3vw4SmK7obT2XPHaJyTPKQqN1gvZpa4HNChizX94kWpx3Yk8jD2AHPzPnPpei2yJPf3iN",
  "key9": "2vAVGSj6X14Z3CbD18owAPXcLFWCJvNu9oodoLhQJy5hA9a7GhW4qNTs6ikiFDXQ8bJTEzeK4W3w5a7Qcu393vNL",
  "key10": "4jr3xwUsvB2THNeJ6sXRLKvYQHkv28QbTh9asvwW2eR3zAz2siLNfizdVcZ9LRVxeHK9ZWEMmiNsFQGW5fpCvPMA",
  "key11": "2TmLdVcJx1ukSYXYwkaZZpCLg8Gw4FYPF41D1YfmDGkBDgWkGu4vFucRGRGJJNPLwVk8kNwDqSoZEK7nUkkuT5hX",
  "key12": "4unNiVEcHg5cKzgNxEK9eAJ2aTaiKBuzttrYHQk8xh9GfudzKjGMZYQ17jQ8hxMYdLakDiy2fG4PZLff2eawfy7F",
  "key13": "14JNyqb1YC2wc6MoSxFvzWqfCKLP5XUTLTASSPhnq3TZKfDgubhuUNpUbWYuyZQcwcXv787WDdrtoyXQN8EhYAf",
  "key14": "3cUnncvhZKs9GTZcgMhtbwqHBTNdLcDMtgVxiQojsqCr1ZLkYzdcooFS7MsRuRVa4MXrjgtDwpTxDcrntqG3A2t4",
  "key15": "4KAtuEQYWHH9HFmqbpRkP9QPR6pVA8XHzUrfXWPbcK4Nm4qzyFw4dfST6epEMugqNkSNy8VbE8bF5sEocbUDywrk",
  "key16": "62sHBJ3G1mbH3a1JNXMMZoad9BhtiuZjDRHXbJA8KyoafTkPqn2PQCYqsT6Ch6b34XLwDMJ64J1NE5GMXsdR8SWE",
  "key17": "5gPSJhaux3epvvav5taUtrGNJFNe22bqHaXTsHEGv9dfVqdrNKamUVksyDnxoZrfswT6Quo6gVBn97GcjJoTHkHr",
  "key18": "kUwmBeQxtajaGWJgyL4DzprfFAQZnQ7BoJ3hK2C9RV6NhqDbP6vyt9G7rhnotvVDWJTwLysGM3DWm2PKFwCpycL",
  "key19": "5pwa43ZxYa9q72ppYju8SXidwby4SKPopaTqU8cFC3DLE3KewZd1xYDyAN3HTgjgfbGMNxy6TEYmx3juoHNqXkx3",
  "key20": "H9PULTXH1A97Eir736y7BLWfSxMZ5ZhGa4kZmj6S4gckRGabAMVw1qtSrKUdrw94ghG1ELjgRhLdayAdvjrisQ2",
  "key21": "FLDUkKCLEEjk5f6Go4TSHsrQw4BVmyDHfED8uMVGV3Vi9PoDo5CydomsKgdgjaEvyDCEVAK8GKMjFtZcY2yPFNv",
  "key22": "5gaYFn2QFRiynJWcc1vsuGxYiovH6CYJizgACCUvSExmjs8phk29S9SReNJ6M9k6Qn7w9aMF4BMq5pf8jf4vv1nr",
  "key23": "4ZLnJA8vmmypm29CejxhSw5NvcfWdEMJaMf7rdAhmVK61k2Ef3oJMCn8yeEkifWFTQRSa35T9aZR3RTrJCiHnrpC",
  "key24": "2FhiQesn97tTufDWBgqSQVHhVoNye3R1dK11SDTnKmMm8XYfw6hX2Fiw59FXZs932AZPGU34t8P2gVQ4miF3Kqzk",
  "key25": "25xsFP6LLzgPSV3eoay2qinerBMu63X1nuANcKrDaZCaBp915kWThCVHg4yXUyKFGURNyjgkYji9uEBq6rTMnq2P",
  "key26": "5oejQzD8oZY4GoeiBFDRbaHmHmWzi26qTJmLnDUnxCmoFQi2vFByVozVVdLb2u1VwbXEwnmJodf2Fpqz3ZbNWcCM",
  "key27": "22py67iGHKF3H1yfaHm5NsYB5JDkyL3We6cUkSdvvFV7Q7ejeGJiyRNEUTqTDG7kthAkYJuzvQ4rtouWcvvGod7e",
  "key28": "5422TXsfjet4NN2TYsy37yFmuRQoYP1f61UmhqmfZajZNKzaEWjhz2dk5DQsBo6pcSVvKwpDt1WZKrsspjC1RwZf",
  "key29": "3oUjC9QgX8mp5STq25mrTiFNWPVUdrdmZkReijE5zXugwrpqHxWExp5nYC2KEqoBbVFzzZQk4zWYrPPcnTTfUQjx",
  "key30": "3A88JFMhwPQZu1hMKTsbUojjMDUFkd3uhKXA8Aowqn6rM5myftJuTLD4EdFS7V2KNPaKYP9P6Pz9STgSSt6a4cSh",
  "key31": "2pDsvhcQG4tvBpJ4TAEbf7PpDfrs4UfKttsKRrdtmLAg45ykNFngTikVjpvwsh26EXxrwD3nkqzvzmn9xUhn4ZKn",
  "key32": "EMLgArzVR4zwj4jUbENnqBHVs1FskVn9LLPCYWpoG5crx9DonfApR3kALetuy4uKs13Cd5t3kW7nM6UUgxpD72V",
  "key33": "4wupCResryhQQuREkwYRJdzeuFbApqu5bhRK3n4kmqYZogUti2wj6h3BqYycqNiVnPv1PJdU81zxYTJd9WcyNWvP"
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
