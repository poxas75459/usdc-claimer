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
    "21q5q8DArk4Xav1FPoFsL9VMuMdc7EU1JV35Bmie92nxJd4HrfXcEacPztn4kkSNRxHF6hCJzPgUTg24NcjoAziY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cNF4PcoGCB3wYVVma1twSvgz5XR15A1vmvdUCG7uCRiDbNDvqAtTztvfkARx2tps5j938C2BLf4YVY1juxxMjAH",
  "key1": "2Lnc8etFsfpEwn9LEvEk1k8pXeD3G1rsdvTyWwTvedg96knWoubmvXKG8w2ZBV3CUWhzB4HZxWWtu44aGfdFMEUr",
  "key2": "G9cu3WWGn18VLeusz7rBMvPAfySDZPoQXcPw2pBR71HKu8fFkjaC7MB6XK5SEh7r3f6nUni6dEkpgYwUqeZ5gNC",
  "key3": "2H8aTigqEN7CRByRcTpE2ajXzpqrrjvVqhRmQ9bdecF8hQUpWRyqCvaj6az5hB6qgckZBvhFdSrJFnBDM2saAgCv",
  "key4": "4bpJ3ZKCu52NjopuGdUaqcxB92cXFDyzfuMYTxuQGCcWH78S45hWS4kh7Pd3zGQDeG56Fyc6gbmNEfDN3aWHsGe",
  "key5": "z3Nm4aDe6MAfRv9hxPmzfPut7xvQCTVTx7hWhgbVDZcPrAZJDM1dwTFACEPF2aRHUEjbTDF5aooxdCmmMSMTN9U",
  "key6": "3Z7ZvJqChPD3U7w8WGj8Rotr2nGzRxDFRfakS4w3tJY9tQghzLkhVfdBPwqNEtBHteSwpxe8WihGkEczbbcg4i9b",
  "key7": "2NVeV9ZX4hGXJrP7DDuKzzFgnkEGUuconQJyQTaFSYXk9XQAWu7L9TDFc38kkowe5qDE8xioidyzddM5ajZY8N4K",
  "key8": "5iMESMWt5NjfUHGErfvGc6jJvt1BxqcMAFVA6HLrHbSAvHM5ZLFdsQN5zZpZ5jYwVt4NFdLQ8YVedjoVjXcGxRMA",
  "key9": "2oiAFpCFTicbDNtPXBK1K1CkBHcE1FxQic8k3Ep3jkcjYJjj4egbpdKtFaigMSwgLxxpJGY5hHK5zgAyABwi3p9S",
  "key10": "2k5aEEJ21mCMrfdLgiBwZauhh94RMJ5sYue3eDCS1UDFwJFuX7eEcQ3LbpHi7yaDdMc1sSvEaE95MqQMqM3jgNzp",
  "key11": "2pyGbvd9d8jWts9eSmQjFu796UizcFsnBQ2KTf1oNQjkBu74juCMgWZxsAPgQTAWKwniDZ2HPTMMYx8ZR8fkVUWa",
  "key12": "K2yvb18fks6Fo65UPQypAHnSomeHBi1LAUifEYsZgJ7XMdi1mKQ6Ptwr15W8vw1JQLGifbkF6rJ9axywzbmf6w1",
  "key13": "9JGw638DJddtJNrR1xJSQ8D1aLTU3DVKZS4dC64kozXrn5x7Y594ScQaBdBbPMb7A9SF4uetXqBwPT9WX5szpAt",
  "key14": "4BbW4fJLw6h6fgAgRKwqwH84bXE7fJMtksmMhcK32X4zxUcag2wvjMHcCuHpkFAnLTBxxGYvSXbrzscFXBwEURQy",
  "key15": "3s2B2GSVFKRaV7ZXidbFHJfZjRLoxqqpn1HMycMfsjkQicnnwnMsraj3iCSPgZ6f5yjLcX2aVmQVXjkfT8M72D1a",
  "key16": "4et9jUGm7GXremWHdEBidTX66GUtMAgWDm4UrbWTs2RzbfwwnCeVJFSMcZKqexPXNFSeyixo6iAyqdoZAJqv53NQ",
  "key17": "2qK2Bc2idD298HXoJqLgNWV4pinzC1rMWVZ5K4sNdvtLRwJ9HyxE1mjn5yUrFtjkvGpehCNCpHRUDwKgMRWWRTHA",
  "key18": "5BfvMkoqffYexam5BAztUyKmNB2e4owWEK11MJhjYUuqbqwrsHUL3BFnQkDWj5VBiQb7RKn92WGXYc5BQAu6L6PL",
  "key19": "5a17kgz8cN2P73yMa2zd7SLTWgVvej64ZoYLQZbCbTGWfb3sqy9sbLpB7P6ssgfyxJPxN5jXgzrds3i7H3FqQjau",
  "key20": "54SrxnDzJsBDp5b39Xn7ZxRwPZzLT8HAw2ddFFApgSAQBRaEsxA1RaGUmibMiYWCuezSn5hETUMHJc93sYjUsEzm",
  "key21": "bHCNXiJGfqQQotfKJ2nGuduxP6VVD9TwNYihzgAaJ6XfPWYV57SkKKGGBb2mj8TnqmVH4BJbZzDMGkWv5Gk5LYU",
  "key22": "2KSgWb2fc1qto9gfsCX7H7bztwQywASS2x7V46JvVRjW36k2FzfQfTp8bkrxamb1pv52affmEGxgJbMSC2TaP3Pc",
  "key23": "5Zv9BJJxuMs7vRhmzq1ndBGpKTp9ThfTvsxUxkbYfw74qtRcxEX3kA6aUbNuQqA7S72dLuHrtBdJM7PQiPXbJz3",
  "key24": "4UsY9DzGSHjJddAriS4MjkBngMH5U85YUGzN6Yq4t6kA2Cw1ygLmjMzDHkN7jYAK7ZKhNRpAYE1HEXLiqdgehgAt",
  "key25": "2hW4KYJ3yHhAXMx4bkzFhR2tJxqRjGnZYBGgaQFszZfy7yLyPhKneSZM9HTiy9CPjz2HW8UvU9sg3T7SDr8nepxF",
  "key26": "5e1BzUApn8e8e7QfhpzrCR3cVCG8AU6EKkoZUnh929UjMgzFive9H3cT4EGPTjkqf4mHuemwzRdfkKa9myXtEZwU",
  "key27": "61XBQg2TqXddvF5SpjWSYWoGJzRdEaCpF4UkXgsdPtixwh3fNLuXrCXBLuK8XBDNHsLun8zUKPfGTT3bZjuZkM59",
  "key28": "4oZn7LHMXGM1pQvq8NrUcBEvmBBQj2eeGrK2EcXTfG5xbo59y45r2FN33RQRZtHnkiQfXDWZL6idTCq1SMAYMj8U",
  "key29": "5mGioY6SimxsfamsYG2dijFf73LBZw8t4NMttMjsBsq5NSgH4owHSkQvTkm9CvBRSNzZiBGC8oBXRA7H1kbiMepK",
  "key30": "aLy9Pp16VyXmskhpjrt7ck4YVXajpaTycn2yGdGj689kgCPtvvB3tVgF1rkWMqHoHCenPhAdSFQ3FiUqzMEo6Vp",
  "key31": "2SJxHpM9JTpTLwjJdXpLTsjvRVsegmaoyUwdzTWMr2PfDgJHG9yjco6BDduh2scv5w5335zK75DvvVuJteLUH8j6",
  "key32": "5urLpsPmS8HhF8EbsmxHSfP3yEEfn2e2X5W5sxFa4WyUAZN7Vhjyj5aVNPXAUJ47Cktsr6PoknvRFHbj43pyMStv",
  "key33": "PdoegjjTUbkPyZE8FUvS7i4zhcDPJfuBjp6bZ9cRJFLDDnPVUdJvdgAZp4oPp7q8CvbXpb4r6gdbFkQvXVzGNaR",
  "key34": "5g8M78amczVJvZtuGiuezzsPMZZFyyDvXsmwgrzWXMa9jdhUH5sw75YfWQcSViftKcsfjBchkyfR9Vm6LhzXkLu9",
  "key35": "3t1cWcGSRELqGrrnL4BgwnAQaskeUQCCy5gicyErdJ1H6Yjp3tGbptB6hwVirdT2mNcfegY1H1C7g4Yvxsn3FGCK",
  "key36": "wxDxr7oodDuKxpAKKQh6sk4hLDnu4Hcs3BU4yyuw2nCui3aZQRArBZKosC6pYsswhXx2u5qRVNDUjFudX8iEL2W",
  "key37": "2h2av2Y3Bv6QxkJrzT6EGahx21SmzZ479ut4RHWwmdHaCrWDpR94RceihN9zmzyEk3qdDEsGE8iasKLdEC6nkwUj",
  "key38": "5SsKhzZjZCtuyhgJ49mTBEdNZbZPvn3WAFTKo7VdQ5ZGZoYwVJ3C7SHnq3G5aGf7wSMnmt8wYoJu29ZKthPj122",
  "key39": "2T8u2jRNx9LNt7dYFTaJw7MFoGyZ5zgQ58UUM8ajjraj3YfTTTKpR1TxzA3LWvuWF5vXv5g6ZuHywmLT89LyWpgh",
  "key40": "36xhVfLMFejJ2XsyzR86crU3RENR6Q8WQHcy62SJ1NsN8ucjU9EHLoDGWPsMUxrRDEERnfypjRpEqzzphWp1No6P"
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
