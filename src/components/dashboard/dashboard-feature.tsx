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
    "3Rj9jLRye6a6ujregtzHyAyAgXJVVBNpAUpJSWgy6av5b29Vw2bxxHBbweTBvcQ8afwQWM12Fm2cuCHCAmSZzt6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K4pnQZWUb4afgqa7XUhMiMHTcS7oHz4Shpn8rBYShUuXTDw1PV6qf3hnyG7xXxEPtKLWyHnEmttaBa8gNK89T1E",
  "key1": "58mmUHhVrcmHtqDXujPofaWC32BoRoEvzvBCzsb3fpNUgfGxGzVXQ79xvMA7upjEWUYq2aYW16g7QkiSdt3sWifp",
  "key2": "3owregoYWDj2Hs2hbwuhGABhbUrJKoKvmYZk8BLXa5qB1oeGmyLLi5bdtGZ37dVGUed1534FwSxv7vNh1DGoJ2Wj",
  "key3": "36ar6JuE48sjwXrKHV2NNJmZkfsWA8m5bVc2xUj99kMAH5c1cgNyAkDv61jfpw8JTp5NzmDKfBvr51Wi5Ei5f2yP",
  "key4": "2MxhAMFgiktaY5NDeuqY1MLBs6LSpB531tNb9AQPfDMnUVmsMNgWDTf97us9UkzmoXmeeUdLk7xxUh9C2TXHsxPG",
  "key5": "UK17Q7TDU8e1ng5HbvJLsPaK4Z4D2jMVsD3KTrxvUb2AHZ6yGTcfmrdcchAYgDFNUMDnuVhDqrvGyHVJejYWY1X",
  "key6": "tfR4Yr5roW4FQr18uiZoF76FmR2Tz5hhcjgo5Kxd2EZdtCofb9v9JVzi7RU4xTaBBAdj1dCereD46RDndFafVkF",
  "key7": "56wV8pC2z6JLLnKZKep422n2sb7rHvkvDgHVwe11U66kWAr2gwdZ2gYntrzmt5Rg5UgfkidYLVZ37Ff72RbPK4eX",
  "key8": "3pcuJWHZDtfyXfkyerxWvUKXoThQRsfpTtLedtkiyMvga1h2BrkyU6sqFJMEyGswazvA4wfkQXLpHgkXQsmf4nGS",
  "key9": "5UEFkGbnVoC2ab61a7NSQhs3BQQxqfNwe6AeDvVEN5fY4KoyzbYV5REyVctQGocur1Z8Za3WsnESkudtk6igmFVi",
  "key10": "99LEpdtk1jvkM23Qg5Nx8VouYaAyzvLQS4GdHRJYYZfUWyAmNMC8s12KBRNwgPuGCEHZ4KeA2tmyUUGpASqNeHP",
  "key11": "5DvuAAq7fHuDC7sN84VseRJx7rPUB6ZeGvDUsuHMAiFdR1SDwrpddW2PeLCCSwYe19PgsHmdiXC2iv9KWxqaPTft",
  "key12": "2EFJSQprSzFLuMesQbUqiRk3ETRWWLHRqwBG6ZuQYpPv7hMM8kftrfhw9ymqPrrB7aV4DuzmR8vFsMQzvd3g5rVH",
  "key13": "2VDnEGJa29pDbX3XWe7i9wxTgNxTHezEUgLNdDEr7AZPpWR6zsX9hm7h64YJcaerfFtdVa3JP6xNEhUHXxiS4Bq5",
  "key14": "JK7iZjaRZgKVG63tzZGDdh8FM54y1bw6CZtA4aEtayxzDgzof768QSs6dXnCQiNXPA3TEhHvCxCgvwkD5p9B2n7",
  "key15": "2oSeNSv5yEHMmutuYMNm1CyvzkCKmEyzCQwm2vdYiNhzHLrjAWsT2eczz2SCd5BK8CyRRZbc4RELMk3iS55Mi1sm",
  "key16": "4QY9dT5JYZc8dS9YapiR87mJZQ4mP6s9JKoHwmkHoAEdNQTada19FDud2XNwQo7zM5bLos24azFDVZ1rxMqR9JNx",
  "key17": "6sSbLPjf3fw2NC9332v7foDi61dxbfR2jRwSy85zjD4jTvLbxZkUV5exyHqmVCL4NDdsNkm4Kv7yjEZ4RS7ALGK",
  "key18": "5URauRUaCmq3vtjqLDBvuDQgmgn2Wo4Dbxv7e6ta9rA74QzYpMLw4S1UAEiCAWXZHMeeqmaf18qmeUeQMzjUBF21",
  "key19": "5Adk32FbK7jLuC65qPxZR2afBfLAUWF87C6XeXxkb97c674fA9uDht3Jz8QwSd8gXbdLQnYXTAmMAwQwLTqjnNp1",
  "key20": "5DEh1TdTe8fEWBeB8Ywhri4SEPLTc8anzwVcXAVEHLiAXouKx3BKBAMYatRmCxrAMTQDgZdmjDtaKFz6YDmDgJ6Y",
  "key21": "3hiQxVpc8189QGyGM9QwGP2dh4r8Kc1MGUwbyjBuP7HMFJzSr9tTfy2XGEz1eJQi8gXbBEaM218ubwB4PPDZr7gf",
  "key22": "PEE6MDoPB8DvzDBxz7BgKX8xWtY32H5sZWj3WqfAJrNihFhjSSr47iBp7UP5wCEv2a9uX6oqjne8w3VCxNvWq6j",
  "key23": "25YWUL2Z5zKy71sAdKy1mPZcj4DU1kdj64tbKdgxtYf27hD22RDjtNfASY13sXQP6bEMVF2JhDZ11uZbnUbSz2Cm",
  "key24": "knuFbtcRtyPRGecRdgNd532bWUBss8W3n5TJLomYudMaewAHpNdyNVez6nkTdUPe1fC9jPYyMcwyZvsXBSJajm4",
  "key25": "24zWspeKQscXZLCBt2bEPZMJLyMLBQk9RoTNudFbdq1AwQ4o7sjU6b7H6LRFnK35qZNaenjqMBXPX6pgtgT9UBFv",
  "key26": "4zc8NisbNG2pwvPraxGd4aaJ8KNszm1AY5m2X1n6uhxWTcJPMbqThyV9TwWedzLuSoAzyPFJqsQwo9WBR4rT1uAf",
  "key27": "zEhcmMwyE7fQRct8AYDBBgnDmHurpXMsmaog6A2EHyCzxQ3aW9oV83zkGFtoKjbMdwHHYCwsVjL3wEmjqS31Esv",
  "key28": "5zrUapxkngwkkzDuwXqjYyQd4C6R4rMzbpWD4VQfQky9ciT8ZXuErw6LQCBzjpAExwNrjNJWcGdYZGycdJRAPS5r",
  "key29": "3qi6mJGFdrzzRuawkvzMbHBdiZc8yf4HQoKpDcTcLDe9ahH3eTxXbcc2DVGeinDVu5khecmKko3YFKR2iGhLhYTk",
  "key30": "d8tkVZK7cuYKfFzRwncafAX6Jco5E6XXPRSNMnGuk1Za53ZHYWe58zcmtsrpb6U8nxu7jJJN9GZJp23LJaZk3rj",
  "key31": "47nd9yxgxTimcHzRwKPS6EyxSBmyzumEmrgVg4rtVmwc6E4mmNWfLcEa6jViJvgnFhDgJtNdWbjjGj27DG5P11iG",
  "key32": "WWDz6wUxkvwawma7gsSZxkPipa9c5LVMnLevT9HS1uETUrsQohzogFjt1RKnJhusfyR4jmkCKz6JJjC16Egpp1u"
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
