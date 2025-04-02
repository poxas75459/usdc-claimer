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
    "r1P6dzRSnwFyBF3GzBJnhBjhFsAA5Y1589p3ckSi2ScGwd8aueBKY2UmLT19wsZDLc2mA45oCrm4YShAMKHddDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dU4ikQMAdQsGuWHcwrmyKJZMZ4k9j7ZD9FtJUJ4HPdT3V91u1HHEJSTwPKk7mmg3SGEUo2PbjtHi3ysDcYedsZQ",
  "key1": "3MPYzJ2SfPqjrptECuSCChXKZPnMSv8XGL1HrtFnkGvDGzPPP66itdbXMjYMrBJvu2XZVzPFdKHkK4JDCMDCFZxZ",
  "key2": "5G1gw8SjC2DP5gAwCHaTx4vW4q8c1iacGYosJzqd8J53PifsM8xtNLty6ibFfh8JRtvL1wL7kBwiwV9bsF7JhHoF",
  "key3": "3x346yryYPmr69jjzKDAVjCfEnMnJHQBmzw2hd6Ssg8vL4QbX6gbRJDhHY4NyAAXBKP29k7axQbjUEgNxGUza4C9",
  "key4": "5mA5jCMDhTqRGG5gSHWSX7mxJjqfSrCGEzLMcy33AssRdN4yugTuqXyWnP24JEUAnSd3JvwfX3TmGeKFdw4D8XmL",
  "key5": "2NbrD9BfDocBYZY8uUzRGkHLUgjwAqZHrq94aeVJMx1tKTVazHEhhJf7J7QXBRSbqRRd2bUzP5WS5C329HCsCuwv",
  "key6": "5dkKpFSGKsaK7tMk5N56E4ds8DWypEsP9qfBXQ9urVkx92nWWv6wArL9rzsiTr4btLPf2NRUGERrryzWpSwB2QNM",
  "key7": "3MVqjwNKBYqj2rPrUNbzsa3we1Mfndd8ayPDLKRcgihPf6Lc1Q3fMvqpjJVyvk5aGLjmz7zYqSsqFchyL59bn4pG",
  "key8": "V9pX4QiBhzq1zNjEecADZVEjmK2z11MBCySEr1pPdDGfNMeQz6mK9hS3ojshDZivtgcNFvMu2V9bDjTe7K1YkSz",
  "key9": "2h4wnvd3SB4mmQPhddx9jiT3PCCFwomeegDHNbVijaeo2X7MLNdFUdgxUaAAnvpJ2orm5NNDaAhcknHLvA8zx8h7",
  "key10": "2vqvu7XDJcvDT8oWzpj4brLH9Jdax2ZaKjEBW1xYycZdBbxEBaRkvvR5bgh9bAhzRYpj1ADYPyHYx939JYcQT4SJ",
  "key11": "25ChbSvbHUq1yk2tr7PmgEVU5p2c43fpdZBFeYfdHk8icZPRJG5FM6DkNCDgoTDtWmRohtvFeiAUrhWUYb8HHvKN",
  "key12": "2C2MJa3yqMwTFokW5eu2siHEAUsP9TsqcStgdkR9uA1n8k6U49gaFGRNjQAbhhNLWh41iZvaeocrXCiMvsZ9FvQr",
  "key13": "4KFrjVVyJpSfACpJ9sFVB9PTtC3cP7q3bwfaXE5MLw2ZH2t5eSXh7osGzfTSjdbh4FrBBSDXZbP5z9PEpYSmKVsx",
  "key14": "48MqiTqzzYh7LeHoVPnR77erFgmex6nZuKEPk9P5Jarf5FegaTNL13UebGsuwV5MXWyBiZPFJQxbG6XEW6ZPqWyt",
  "key15": "61ZRNYPvUhfiQ76y6wENWQPi2mcwzqDEnZqfJ1u2em1qJBiYK8Q1wnTxs3XuW48USQs7yJ51gWLoPKGZSbXrkEXa",
  "key16": "2RKw9PXb8KDQfxKmNAbLkiMaadbK5omoHAcnufqaBBEhDqMgWu2XMk5boNaTkUYewuXCyEJUDVCvY5NmHxR9414r",
  "key17": "2rUh5ESM9CaYQ75rUWPrvmtHKsDXxuPge4yWbWeuer9mXyQcf7UccK2QXfweQ6G7MkbcrE8Hw6kxsRm17mHobomm",
  "key18": "4st9QieGd1zbf7z3o41ELmUQCxt4BSioo2kbyiwcaGBfdENRWDz9ieXFkEbjBn3VZTXerVFWFsxCfErMgyqBSC1V",
  "key19": "4vjak7dUcz7e9NBDdgiuMRz2oaNDctndDNxqXYH6hF3Ca4v3nqzat1J25w2ff8kez14zP62QcFHKfZ2NjkQzj4pD",
  "key20": "3HLqNB3VHQaovL61XZCQfcZ2gJ42T6QJZRquhHxx23mS9YieRPjoiiYAT9iPUwwrsemYzmvtYUjTbpWaW2C92LVp",
  "key21": "65ZehLjZkx5mpyxAM7p2ANffb9xZ8pV3WZGmxN62n5ouJaiSkoi4zAfMbfMwGhL6evsWcJY9gmXqnEmQQotA8WxN",
  "key22": "3gH9QtiKmNy6BUG9eJG3d3Dsah1cxkD767nqmA7RwERjETpd89gmvXxDAbY438cEEvR465pFHyAXKuadfP5TAT2T",
  "key23": "2TSZQDyWffd9x4jYnkgMrMDXNhYqeD4p3dRqseeGCZQcTFK7rtULzrX1eHEKPgcgoRti2bo4X7agA4CtHeYhxhgU",
  "key24": "4Hxh1HMD77ELzU9b6zx9fo7NUw828zr4cEDF31n13vugA72FxhTiyEqhYJVccRZSSCZVxRh2duSZC82wxTKP9EwX",
  "key25": "TNpFLh9cXe7oeRCEkVnZDQLYZRpdQsvCVcndbJTBrybEN755tb1paDGSJMwKErVcxKzius46qT5KrVtZtxCho6a",
  "key26": "5riJKf5iQLJ75jTCftyAGgfaUGnEtdRTXcJWMR54wGTa6msxtkFi3nLYpt1HFbrDcuau1hd7HsYriV59rxVGik28",
  "key27": "2u3LzjxHgZrFVgy4GAMgtnijFbd957TcDYA1nDtLn5f3QJRLDeauPkpE9BGGbsLFAAxv2b5rfjRwXwqHX7LK61HB",
  "key28": "5jZY1LcMFiXmims5ruDmWUy6JjGwSb4eCjojc313LgepodLLnZ1tTSK3VRqiSC4qWdJT6p5GyM1bsXvGvZgEnvAj",
  "key29": "5qj9ogPXkGSCTc6xKiuARPJLp3EGvEwpdQV84GH25zQWXJU5D7xeMLadikBbRvS1aHA3onMhEHNDRCBaobAWisiK",
  "key30": "3UxraZ6FVCKAemWmpEvWsTP3ExsNGgSkVFP8QpweyUrnNvGJ7GFpHy7Xbqw8g4UcijGS47uWdkB2uBHps8azrLbB",
  "key31": "5ZvuNvWRh56P2MoZNmZUv4tApGiWhwis9AnaLymo969Eap9BDVrPsWWZvdoohRD1f5jGXFH5rxjCeU653PuatrKV",
  "key32": "x9qBJNkK13tuh9YZFz7DVkJTvCBF4BAfppm7v5U3mypCzrY85tNF2JLFPFzxoKmZctLuGk1nbfeBwnC5XziTqUe",
  "key33": "2rSNxwke4RCAyVAzB9z88kDvWqwDyiRKBgKCKLBjvnsHfSeJ6JzQQjmvyJDkWbkv4mrroqiyV5jmkegn1aLH6qW",
  "key34": "5b8B3Z1Po6SekdYCc6K9D122wEWj3ZC2DK8fqQ9rUy5tJbbm3y8N2VG5F3WsPMkadRvvHNvRGakLN9wQs1HtUeye",
  "key35": "4pyH4nQE5kW6YKC1fEpo3TYEotXNH5JsPFtW3414UNUL8XhKtSZvtLh62FcaAKzPZf5uTYyxTGVmGeyaPm5TZWbC",
  "key36": "GHrz9F43QXRLvBT6mgfiHcUMJoTekYXe1xsRsssv3sGb65p9cqBLyD3LH6M4YngH6Lu3tiGNdHaHSyyF7tgERKf"
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
