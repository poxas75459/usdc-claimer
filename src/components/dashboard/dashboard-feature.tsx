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
    "33XDGSuWCiuGbRxnVYtwpxxynRyGM8kfCNACNDFR6oPJop3Rm5rKDkX1wMhNrhaQqnnqGJj5c2bYgkzrrDCFwP8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZiY8NykPaa1c249V1v8nRZqqvpFJrY2xxkSagbFwAvV61RcetKy7e8A5eaZf9wJagFZRD8aopSug9SYzEsfevf",
  "key1": "4j3VU6wnLWE1UXbDvrNn3gWNugNqzNXiQuVaAZCzDt4aJoKhs8PjcuNSDgb59vRpp1W6SYaCQNQHwqh4aauWLPZb",
  "key2": "4z1snBTvp1nQA67EWSLL1BFNHnCoWJ3QFx1A8MAneqhsa9wsmLaYUNfiW2tDZZ3twKLq8TMKmcPvw2MU16k8PCxP",
  "key3": "5XjB2TcNbjp6g2rUfR3bSjwT4koTDHKfNy2yzuhhv6NHWqcvX4YJJJscX9ry2bqmYJBZReaTFecLQSU5fyHDL6yF",
  "key4": "4nLaeRvNcKX5LavBuF4MozHG7uHYffFrq1EJCNWPPQ6dGNa3X6NBVtUWMheL7XvYebjV92Qi3aUksJSKx2bnVShG",
  "key5": "2nLPMXHCzBVds99T7QgmFUv1YHurXFFcjiHSKYH3PtsPwKBGhLQdyPFhkpg1JzR5KUrkNhsRFndoVjCFqr3hVWrZ",
  "key6": "43oJanCkpw4mXpm1KWR8tUvYDTpH9rGwD8E9S1Xu5RakU6Z9K87w8bQydWXK7JB9D7hgGRTPwPevEUWJMaSaW3wv",
  "key7": "5i3jAv1dTjiVzSewEjpTDhmKNkDQeW68yC1BfpZGoPaF2P8ScqX9LSCEoGFtoE8ukrekdDjVUVJ9zMEZRMLb7b6k",
  "key8": "2cx9Zkb5RdoFR7vKbhRW5pgbunrTb8jbsvVWbeN2bXp6q552w3bebJDi7E4u9sCgMyZeJAH21b1DpmFu6JBxpkmJ",
  "key9": "3UxeKauZimW9TzSGaboE7GMQAo972WSVrJ4dTrY8yBEtCiSN9oYvCStQtC8bLYeobjw4fkPP31xALifqz7jomjma",
  "key10": "5iQvQvwQVh5c9CYdAxBbQQ8K5z1J52vimSVB7msZpXnLnGHAHJ1MkbWwLLzQeoFoyypCYJmjDcv7BZxwDXaUjAhW",
  "key11": "9Km6uJ6Brj3iYhju4pzXwNyEo6rtxdqLojR5H4P1Von1pe8tVoNL81dNaH98mVPgGFhMMKpWx5SVG6GkTBptbBa",
  "key12": "48KUrbSzJJ2pEeCRy5faS78is2ySABQ6gjUdSficqbibe1KixKY6ubHue4BcX3WVXp4xpFJjBKfJiqK8cJnr3E4p",
  "key13": "2JyKNDMU9tEnx3WARMprRbCpc2LXSgFJPonjMnTdEd7ZtYRMcuBTNtp3Pxzzc5S8Vt72Tg2ys8bSx2hPFJsLhycK",
  "key14": "2FYcnBdXq4dLtoDdBfpXmEdJA6iy4NjQ4PV5E5YnwbzKiWUWJe11gxBtCXd4d3xPkWYyzyzmVcR3aQiShoqjgLek",
  "key15": "PnPCgeN5btHbnS2UGZwQFJDAkx9xh3ZbKhLGfVDAb3Dc176ndfSpNQrS6g8XvsUD5wd82ZHvmF87ZA5suPuATdp",
  "key16": "2Re3UkJu4rzQ9WQaVaxtKSX9f4AMoyzHwspVyQUpDr3Bpzxy8cTaUcar4FSDGZqKaZGJnQb1C4GjpXfZ5ncDP1Yt",
  "key17": "2LkhZ3aJnEa6gqJDV2Tp4YvGBw1cJgzAn84YbZ2DyTy3LNKaRUwyC4zedRQrE6TRcd9BMHnLzy3Yb4vZbZE7J4fS",
  "key18": "4ZNNN9UccYuQosxcQgvisgLQKW2pD4d3gTuqzDLy5RR3u6yQVaXNHTp54YzPDDhiNLfLJ6CYUCjwmgMcR46bSaQu",
  "key19": "52etHKPdscfarJUipUtuNGdC1d8GvxuJPpQjpB8dqj2Q9NnJ313jycsevPNA51fiSpbeACf94TKDanC8CASGtk7K",
  "key20": "2Lf5pfoN4qWNmbFCPaxwDas82Ky8wqMb7iaiv37fKftnCpRoWxfxxmT5ZXfVWngRcbby1XtpsJi8UuutBjuqcqZK",
  "key21": "555RbuYgcRkK9ZnF1qGsNXEnhUARbnnW9eY74588mfBkuwtVz9AKsUaB1tXgCAfwWPC9HR9kCmZuWqK8XHkdQqQ6",
  "key22": "59STX3BYFPfH7Gt9uvAnXwynjjLReVNi4FZgdhL3oMF3PMrLJXa6WDB4bRZDwz7fc8HqSWV1X7taVbaRwajUEN5a",
  "key23": "2EJgQLEyqGioLCW72ygbCtSCBHykEeb4mBXwy9bZK5ZL8ooiJNeMrEBQ5aRwWggJTsYA7SyumVMJhwuzyc82Z7uu",
  "key24": "5ZrvcrUyFDBwBysrehWtgjTE3FB86FgsUaYHUCWiM1xnxUV48vYwg3AbND3N1LXHC4CwvJaPooEZZCRfNowJt8EN",
  "key25": "3kcVHjfkkwzT8ZydWP4ApUsxY6kp1VkxEYj77aFPHkkCbZA75pL911zWMNrUApvdiDL5R4Vvw4LuLdSBEiixV6xf",
  "key26": "3DWu1jx7U7tqL6jHSoBMQqnRcK39Snk47v7Jx4aZn9cwwiCa9xEudhYWA2UuVAfaU3c1E5PAbTuLQCmNr2EEx2WY",
  "key27": "M1Azchns5z6dPe1WLMoPvNTqFVgM8A2Ezw2roWBQtwVfexhuyXE9qx8PWcg4n8cFDiMoHMQv64eg2oeJpyRZW79",
  "key28": "45o7AooNfREieeXShaereruFtCts8qBUAUJZ98YEy1hSpq7pp1Kz6dkkK2NQVkDZLrvcgBTGYAsNeizuP5ZbJtUU",
  "key29": "3fKViJsxW3CvQGFV7hTvpen674BjFUzHGrCY2sDyU9G5mpaTcG9WH9FkHB8b5KKKdzRz86vYJYzsxtuLgdKsToRd",
  "key30": "4inS5cHKuyLRX2Jk3doPHk7J4s2bdYkRFpDqqYLCgt6QeNW68mtgranZR4RrLwphEVVaYoXnJjUWnLhsxgeoZFSB",
  "key31": "3txM9PUwxbkBVSF9EfSuNg586XnZD6wq7Tq8mePhjnxL7a8eUeqKLPuwvZzBVUNi8meWEwgGXnDTLYt2DpHoasQf",
  "key32": "t9KgVRv9WW6MywzZY232DeizkNWf3n1cMg5kV7j66TXQRK5PRpVCwNYXhZCKcDLPWHNHVpkERCcB8TNEAcejtNH",
  "key33": "3r2AKS41orMx136dbksdydwbbKmyzy8XyeFAw3j6ZTMACt9YsqkpB8fyifmXEEsLdC65oC9KY2211y48r2JZXyHa",
  "key34": "wQFZTwaNud4WsBjnWCVWfXGRwckoX1372epfgvqByqmq1aLgQiEV7AsyvnX7AkVNcw35MHGrhDyrH8dB9wEiXDa",
  "key35": "5iGSXUWAk6iKWU8GY4UWK4K6jf5oiscRFcwMSocRvs7gC5tZg3pZJwB5C5vuJ7EhY2ykEAtu6PfbPBkmjCB5m2io",
  "key36": "2jWdmawmy7U22efYrG69fC5WW9swHkR2AFLfdwcFMieRNuiUTRSnxEimJ7ZojfMSUBoKQiNFKnjjHZGFZNvKb4ye"
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
