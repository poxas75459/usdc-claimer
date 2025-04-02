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
    "5Xfe1Br6roAfmFaE4KYJ85Hndj8E5ZDJHh7VJxvqiL6XVXcMP8QZDcpTeMAK2guwSMCDtiVvUwBF9fQbJw3dRM6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CUbtLXwB7RFjWQAgZscHU1FBAYLWhTWYkfhHai9LSWuvV8xunMNndkZd2Kn7tXUJAeoK9eAEbnj2FbfzYAwjpkQ",
  "key1": "JWrzaovAVBgeEXYF5R5kZDVNqwpx4nMfxJZmr4hZDcsngQhnBASYm1XsXm2qgy49GQywFDnpMfVC5YvEKxhx6BP",
  "key2": "XRA2syxeeigM8T5B57cPoQQbMrB9nCxZJfxJWQPEcGCPw7wwCcS9RZsZybUrpJedibgpjnNdRhyhjdqARAWTFN4",
  "key3": "2ikV9cYeDFp7NBp64xJiyf4XxTFwjxbwbKcEFBbAzn967VZQEg7PNHgTnCugaNmPePrz3j9B9euUA4Bbk1MweG9F",
  "key4": "2QagoC65Mhx2vFYE8p2LeKap56uMmiDdrv6ZEknBBmZsFsRb3e42oSQeaoAyYixgrKMA18JijUyatRvL9LtvAahd",
  "key5": "4dnYM6QTzxiQ57tqtHLS1u3QdHyVSsvSrYXw4rk3QefJD87jPY8EX4RQzNKtGi3GMk637tfLFFcWD8m8fAiVaYb5",
  "key6": "4GYkeyXS3ACFoeoH7MzRDunqjnK3ZPmVjMojHHC6gxEdMcAovF89DYZvDHYKA7nwCY8GiCLBmYnsGPsM15WgnRq3",
  "key7": "4aJteWjmKUDYJyJzjo2Mh3PZWWr7ptnSPVRKxF6YvWUNuxXSapneZqtyfbYDM5uqXvf6UzTXRb46V23jRa6r3DBd",
  "key8": "3QXZ6znyH1rLAffzANkafNd2ak8CmBN5QnN1VhN8hZiKY5nV7vveEY7PpqrMmwPXgVXe4Reou1RfmQVinPq3iLAX",
  "key9": "3fMYHfX4vUe9ERVBZ2g8chpmAJYxo4jZcebsgPCYBbf7BNQdcbJHytadpNc25Gq9ZjwaVsVDmfjipXzU8AsZ5sVa",
  "key10": "jvFiWtD93C763dTLuFB7fWXJQVoiZPXJ6yoFne4gUgFER7jHurbH9sQ1bmm8K5jKmRaYWrV6pA98LfAVwg72VhR",
  "key11": "2ZNDfbEUNnKfT3nnPm1WrkufUMq8n8JpvZf8rHKxz75RgZ1nQcKsK9rug4d4XrXemYvkqzHZbioEcYWDhXNJiV2Y",
  "key12": "5ke2LcE9DAfEVMP1eSKPmUcmQB4zuuEM5qfDDqVYZhA4MzExqFFimCk9awF1EfQQgSEmYm4arG2CB1erCxK8AWL6",
  "key13": "4UBN5CVNBgg7Ddvogg94HztULVEsB8ta4QPrnhytzj8zSkXGY4NymKiBgVptTpyzV8H86VriujgHjDJ6XUbYU3hk",
  "key14": "56oPjQDQFSohpeCeCdGFi4GSEoKiiSi97PUSgfBCf54JNKWUzVFsgzU862e5xi5FSx2mRp31gwVMovbr5iHm6Nxy",
  "key15": "5Ub8G4aaGs5yyRQvXkeTiLoPxzG7yLo9AqUZEwj5qCmEcQcTaQM7k9vdjJXf2i1SLYpsG5qhkgyGoYV4m7FxfNx7",
  "key16": "2j9MpNe3Nth1z33SmBBm7nmWAt93sc7McSCsi4LaRUJjEwsYX1Stn2eM87DivWeCAS5xMqJcEYxyv2Ww9GPtCTHP",
  "key17": "GhsqFg7G2K2ueciznDV2r2hQcwc8z1t5WSmctMDJBHMobWrKQGeHAxFe9CEhHnU23ycK2gQvEhbbRA3fk98xXTj",
  "key18": "2FHmvTotgGbzaCABsRUa3rQoRyguhoiJJqCjpB4U4Pdc9bqvvQDxDaxi11vK9u6KeoAPSNj1oLXB1CjeLTzH6GeE",
  "key19": "5ZBjuBhH5UgQHX1QgR5oahcAEvha6ySFVqaeUQoXfHPeJzowcpTCZTbcRBX3AWnBX3v18Kxg41JiFpWt3xBMRB56",
  "key20": "GFFbcaNLtpSheE93AUqvLxJPecXR3R7w1GgntXJbs7nvem82afV85K713oWxkzEkQnVh6ptqKZT9d4eCerS4FWh",
  "key21": "4EFBK61ke5Ng51R9DXGQXGbPT9A631cfxVWzxLfPBs22bv7vnKoHJ1aqKf48WLtNbP8Hh2m2mbhNjz9pCHJzo3d4",
  "key22": "3G4urpqMLgfycbC4muMvXFRX2SdY1PEQzxw9p7pqv9HsDoVJ6Rw7GE9swqvrEaM45TxWdjTpXMohs12tyUN95rkF",
  "key23": "3MqK2rt7ipLhFCN2LM8ccY58RoyCkLGbAPHeKFmJHypHAvFtkBTRX9d2g2YDYUthQkQHh5teLCLt6KALVoNVcFXo",
  "key24": "9MXuwJrhYLmwxTxG6NrsgFh7urUN3y1BcQYisqob9ENaofvomcJ8Uw79iwdczvrLFkQugTKGnnwLtvhWj7QJPKV",
  "key25": "3VaV6ZxBpvJBcwdty1L66PzohjsRWo35UqGnEnu4oVK6TJ6pJRcXtgnqxCb7baYXEx13sPuukXtb4DdBtkd5ozSj",
  "key26": "3sHyzvVwqkHZM43TPiHK52VAKTA43GMKxTePkXx1TNQ6KSm7NmnbCDFpvP19Uppkg4Ajji5fs885TQuJQPKzULN4",
  "key27": "3Lg3DsWmy27qQAdPmYh4vDi6ehW2tg4sWXePfC1w1bCQRCUt446j3CaZiAo9HKB5zt8J4gs2xY3nc8n9PcqZk62A",
  "key28": "4jn4z6E2xEdrru8sXwFfT4SGS5LVpAfL3AsLEwxE26a2gS8wyvZpTXpr34eXmymjRr1U5PVBdUGzYxXcwAdNW9Vt",
  "key29": "5dusuvUAoRR2x4rzBRoDP576gWPPtenX8v79qyzPXAAmToaYwu3UJ43i1Bp8KQFDFnCKkvxM8qJqzWPSVvKLGLRv",
  "key30": "PhUpjaU81W5QZvoSd9S4KWZtiVF7pCtrE4wpLoMYbRZNEVfKXQf8u6S18N2zcbhZsMVH2SJmydi7MnDT5WAx2T8",
  "key31": "2YMwqiFfhJRcD8zdq3iKnZAaven8Xs9TmmBFsZ3v5ri9SmPXRqf6iM1AVacCGKnkd9VoPadMyhSznYNfAKqFXM2j",
  "key32": "Hvvr2qMfHRGt3kyuBPabT8xtsgkoCnvSyJYKiWGhJva6mcKWqMSsehXEb2T3pfeGvhSQDQfLTAxeimseFsTtHEf",
  "key33": "2sSgAiEmHCfsYcfTYyNSc4HHCDWvy8ACyNa6mBjeH2UQX1fpZhxMFM2x5HNoXJydr51VJRGtdffPqNK9xzYy4tva",
  "key34": "53uSev3SkRZHGwzqjpG6HybsPVMkk98VggtXESSro3gvo2mRCsMQWjcUeHVDPhaQBhexv4Kj5ThshzFjrtjCSiMn",
  "key35": "uDsE3sxTXuDQ3Au1g9WRXadF2dDnWWdC59CDgn7JDRaths3Cc2K8jeEdvTc8ojJHDG14hCRgq2pJBSr8veRYdQF",
  "key36": "3dvesQF9VLXtJ55uKtFfq9nsJnJYLnUhAxrFuQxkEWF3JNgjdM9gPt41kqUqfZeeAaX8nPbdy8PG8Qdm7huv3omK",
  "key37": "3xVteMLfGsAQpZ4agj69wLQ7EYnUJo3VUESGeAGR5DebT7uLL3VrU7J8gKSz4WoHrjarnGkDMXtQFN8RgxDHcZyz",
  "key38": "2NNyT9aq7bX7AqCMWmJe9QbeffsFfJN9ZzGgWibJCQXnckTv6362AKUY69Avb33FSyAGEavSQq5o1uhYXgSTjiQG",
  "key39": "47x1nLVm6nc2fFFMnwHziLfLrQNRqJA2DzkYkh4HZYeEfaAc57tGCtD7LEt97mK5dja4RYGxzq9JAzmySJVZ5y1P",
  "key40": "5Cyyy4S7SsSRF4boD7a1BkYm6UogsiyYsXXVLGaPUwhadFCYgsqVpptVjWEzvZjKXp8Y7kharNB1mHZcy5fJKMBx",
  "key41": "2pD8iTmsZ9ZSNaZPzhsuiJoNCyCPqhcRd5hvkhBQzRidwEM8Lk3ZBJ47Aj5pKBeX9biMfHfhz1qgd4YA8MMDzTKc"
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
