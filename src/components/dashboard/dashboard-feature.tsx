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
    "5CJ31Czazz8mPoBkjaXbEJsignpyku1oRQr6kA26T8pNXawNSEVvnvaPrESJBaR2zWMUU5RVy26arMLxuQgB8yNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dgL2aXigwpPTa7KSANComV9mM92bmfyg3kdZGjgjWsFJqjSwE5i3k82kyoeXJ32pvKAUKfbsKAQbqVti4CbpXpN",
  "key1": "386cBHtBWbjRCN5pfViboYtbTrgeD6F9BKwrwXv47oj3UWjoXPhfACc5eM89kdiwc8JnQ46LRZ5rNXFiT1CHVGY6",
  "key2": "3rUq3kKEv5Mi6Ky99FSv1NRno1QRSk4zghRdmBj5ELR5PFJtpMYyTd2ZvPf6kGcoxZ8gAQtEf677a2w6obyiGP7Q",
  "key3": "5xrG4vwdfhVwrVKqvPfwjnTG7ejfMLMGbhN6SAgWXRzLiaRmfizJHgkxviDSN5NxcBFWPBJemwRpJGjWufCpsCZ8",
  "key4": "mNgMRgpBhxRTRTaipjScBvAE2gVvS2cRNMSACc19H1SFNnRfMmVxdGkqgsuXHFiYETbiRqtac8VqioSgptXT237",
  "key5": "6Wo8m165bWRHC8dxqdJXWWKscZpFEfxM5oyQDUvyGS6i7U7b6ctntRHJehwAyXbz6Rasr1pF1HAXcNLZWuhUvVM",
  "key6": "2VnkjipaKEcP3kCNusmW7vTEF6YYKvjt9a94Fm6zgFLUUSs8HPsyLXZHwM4o5fKuEhtZfUtE2d69NAgxEff87B1T",
  "key7": "2rrMRWrmCG7BWsd3koX6ExKEooN2PjB1ZEyWqxygsGbhqGhpt9DD9vuhPY4objUJrCzLobfX76buJoQvrHdoVUhw",
  "key8": "23uBkhH9vaZm83WWQjGxXRP1dxHFyMiY1cJMYqBm3UuKJMpCky7LF4jpo18whcvWPBYzzTJxCZDbP6yL2YWiAvUh",
  "key9": "3ykvDMqZYK1zUCXH9ShJp6a6VvSjqHXmnMiA8JszvkJM92onkmbLkoEKh8trTjF3ypAaWs5vABYbBJZKqV6iAwS9",
  "key10": "2k7mth363M5fwZKra1eyaNMWDBfrTQpyhjfYVga7dJNHszBvS5HyXX5u68hcuPhRYUm8SmKN6kAr6yT3W1qprNoc",
  "key11": "XRYFeCan4JPLdLwXPUiXB75NR9YtvAuBuvdGCjDEgn4CAFSSUWMAtheFVDNRK1hEgCwwY1MtzmXGnv9TM4L2hdq",
  "key12": "3snicUz1ZhV4idB9HJtRcARQsbXn5rwvCHUU8gEpwF7Wp243JzVDVigAxanTqFXXg8bPwqrBfs18Jx7vgXdhzwQg",
  "key13": "MLMGUzmeLqBBgrGKZoJZmsvaph1ukeSRpy2692fwXEk3L1udW2c5o1qhGBYdkCWkk55BeQtq49imJ2kyan6t5sm",
  "key14": "3TrnGoesvm4u99mEkrmrutmhePvXEMGVWyf7gqXRis8GgUiBwFfKXTcoaAJKidHp8ooSe126od9vSEEKPuFEuN3U",
  "key15": "3dErK42tJAXcnnf2b2AgAF8KXABkpWE99mNzmHwErF6JmTpKPm1rwWZibtVZorumwz3UG1vppLRH1DXrgMU7xm6i",
  "key16": "2YJ1R2xgyATMQcGroUqbx7eFg6qH2kg8HFf5trTkoKEfghgfA5eRUYFDvaayGE8TqC1dNt582QzVeUXPTYnSu4pP",
  "key17": "3z7kthazFKgVxrQVVPC7VuaqZ7CENuwgppQUMZzAQn58vhwKWE5PA6Sngni2713aY8rqSJKPam9zoxFvqDMGs9zC",
  "key18": "3nGAAhfDP5DwyusLFpfKbjEZjaNiWhqFk1bvix8vXpshEjRcXmV5gtE63mnyLG9F1SUTDd72qM1iCpuxgsWqL15D",
  "key19": "2oHYNsViywf9Yht6QR7cm3JAnXjkfoRR7SBLETUQc65pRJc1pSb5sxLxef9YY5KiNWPhZffs8X1PeDmkSbZA4hkK",
  "key20": "41j3p4QPQkQNuEAag87Vpj6yEQqvswJkYMqeaYHGcPFKZfMHS7ThJtzxPEPdQKgZqr5xa6vWUS2bhWarJTbjRF6Y",
  "key21": "84w5M3NBbP2vsDwdFjko8irenAmuG95VU1B5jovRtPzK3biZdNJBD4gbguv5o5L6C62GVeDaAmfgXJyxQBcR4hJ",
  "key22": "4ABrN3XDY3U2Bt3MTtaWVjqFTeerTDseGTCM9jb2iPCrwQLuLxpJJ64xLR3f3H3z4iLJbSwxsqqBFmkKyuCQukU3",
  "key23": "2NupkquxT6U9oMiSK1GKdkVjo82XkpeCDNGHCrkkjbsfj7h3h9iaSbpgp5ib1cS637uuML827v4NyjYXHZtFLHBw",
  "key24": "3g8tMd7j62H18CKpAL9q4dwmPGrwQShhwcv4iPN856wA5Hfps4Vo5CYwGuTkSuN3EEZ2J3xkyJUSdURRUgzmdCMG",
  "key25": "sVrMA5UNTsybJNroCDyokByzSTek9y5FcCqAZZhgNAmChH7U8DG5A99ykRFxv5qsqw9ZwakwKEc5tzHfcpE78kM",
  "key26": "o4vp8BJmLZgxYeqyj1FDxboSUNNvYE1axcsv3USK9Uw7X8fbSXqe3NnYADjQDbbnhfvxgG8Gt8Z8RbQSUun8utd",
  "key27": "4P9HZfuup4ua1A7rdrQQS3TpV5vshXC2gGXtXuBpS3JGPaA7pxrvK5yDfeNU2pAnkeVeLMCEWorHUcbVm94t2qze",
  "key28": "3mGfnbFmj9ER288q4beRtDhoBmFNBaMv91PkRRcAGUZ7gXXPR7yiVKaauEMAQxU514R6QmGEqaum3XYceYpfuVGa"
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
