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
    "49HgC56U3uZY38rDyrW6Df85LenD714QM8PWkdd9WUnrRwjQXjKUJSR5s6MVuTcn2fd8jBaGYoBDT8swPBHXN2UF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Tu2yZ1xAsxLXt5ucAVoxTm837C1W3wgx846689LiNX5qvJ6nKXbAfezvFdNt8oi2rVfC5EJhXVT5KwpZwX1kSj",
  "key1": "Ji2mU6bnHAgCRfdPSCGJJz6Lc7uuxmxHs8D7GmnBbx7riLjtN6uR9Lh9dLNk8s1gHHQkyN8WRkgfoAHuH2ZdXZU",
  "key2": "4DzLKGNbVkv9imuguyCX1DfKg1c2NLBkfkEJxMEi2WXoiANAGqK3sEEXa5nqC6mxpv6EPhryvHBPSZB8TN9FroNB",
  "key3": "3AbMP3K7279NhoJXP5RfGei6mZDuSKNHfD9RHS5EzQ9t4wZBEPnQyxgLfxcWHoK4BJ1KXnVgL6tChHznqK3w9URS",
  "key4": "2Exq4oZuw9VnyGCuCzm6DDrkW64xbRUj2a2ZGNTgYsYCzLXTbrDPBigdukrGbuqwvKzD31atjt82QPQ1dgwTsLeC",
  "key5": "3dC6uJYtq73mguQbuh9kkWimYvDPjFV2WbdvB6r57s9NvHssZUEDJm1XUjL47Y6ZYFET58S4iAtPfWXDqTv2nPgy",
  "key6": "TvRwjKMWuE7KkbXZjfDrn8s5ZgUX4widfNJ6CnM5mrqHGcShTfR9vhwkG3ghqz8fSAdS5A3W2ZVvgnEruqd2jmg",
  "key7": "4XZmViqCnFpA9cs825Z2k5wAa32dk1p1riYkRzMsxqB7HUaXV25rZA6QrpwmpAWEw25VDBd8nnHNmoCLrJQxrVHS",
  "key8": "4o8g6bvN1ppqrtHhyRqVwFGkf6qhrpbumf5cwpRWa5H4ed77iXEVDh181vHvcfQVpeyhponsTKMjAjngWfXwnwsi",
  "key9": "5oeZvJtTC3EtAzdHjDrTUestFWiqiDeJqnuTgsbE7apkJwSzJmz6RMWnFBbNTysRrGwaK3qxMfZuvMuVbgwbEKNo",
  "key10": "51iBNYkTUNKVL5tDfzGAMMh2RXzoiE721N8qTeqaCYivMJTAqbMVksGMA7Vy2PEb3BNJi1R7vodY6TmpWxF8CMDp",
  "key11": "VX8JWs1V5srgAFgPHRj2gt3uCGb8Rok6mfVpKFSLRHqJiUqvimAB2AzSXmya4HJ6rVo2FeiBWXZ5Bq6DqdcHc75",
  "key12": "67LkjgTD7FwEzFFLmRdXwSYozL4ZgTK9pPVeBRdwRdv34WEKAg3ZhDLyD24h4jboSADkoWACAtTpyy2HXUG5g5TB",
  "key13": "9FrzrdyFZx7XpyRYY2Gvn72g4cRveiALEDQxkwsJmJhaU1VMMmJJh4ZtTP1yXdrTtd5bSZdjTjuaxKMhxSYXU3f",
  "key14": "2k4mNHd8GGFCVu8qGqP6J36mnTmSAWnKHaKto3r96nHefcVM5Kmyng8MHsH7mRfkzZ5q9xHvLG4F1n5F3JW7fruc",
  "key15": "m1yftZbXU6idf4s19zbkD7A1ZwtMfEbZSb2jA3bfqpVRTACUjZgXWAgFvt5s2D52TnXWABpVn7mPg7F2GXdgBSp",
  "key16": "4vNob3JdFrXMYQNSvk35d6X2waKtkLX12sFhkVAfCUzXb2CsBQM2178cqCe4qd9tbPTdY1BxS8eQ8HC9nzw7RZBT",
  "key17": "4cd5EpvzqVPs8Kge78UM2Ed9HtfB52f7pHdZsSTJxCFtFtaAqKytBDnuBD6rpnaidKTLUXd42YqkcECb1J2tvDUq",
  "key18": "26xaqj5f6ivxewbQD2hhj7BjPAhqDSTaNsrmWD6ZLz1uuZ3VxusreaUaWEHEPgHEe4TATPzWvZW6TpmQocpEzpNh",
  "key19": "2tJ8yEEmzBdhbgkLTJ5Xraw4sTPRQuS2JRhEVPKfZ4PM9WKKqzpdfxqDDq1Kqp295M7epjifGufNbmYLcSHwXcsz",
  "key20": "5C7CVuKDKUYFG1A9UmctYcyaxd84JAWDLFynXjEvfRkBvNTF734juJY7TyaAcvVYCr6iA6URU3HnuLYM7eqXRAuX",
  "key21": "4Dn7bLqGSFj9S6mmAzX1D4QKNWpYVcsFkMMd4mqYWYJLFX8T3FJ5Vh7gYKYdPBozNMfEyoWMJ6LcPkiDT41fZtxr",
  "key22": "5E6Rjb57it7n5qB9BNp2mviKEgb2JGmBQi2aSfUWGa5jVJxy4nWga7zenFjoi995niiMGwnyaN8L82fVirpk8pHa",
  "key23": "5Zk2Dk26MYgd9tmKrU5nL1pKFZJRLn1ftMFXAQVmG9rBm4uAqYqXrSjDXLvMqw8ZSNFXAmhFZjSSaqFAe4JJNeJx",
  "key24": "UvcwrEsKoWNqLwV2k1JSRaGQQw8bPH3TRgyhTf43rWvzRRmNAqB3RNqjStLN7t9Aq7DTMyfJWHhDkvTSv51AFz9",
  "key25": "5ji5QY5Wm3fYfRgSfSfS2uPsDGratFVxbRGQMqB4bwJFSg6Anotyna2JFTbBMceEKmKEKrCFZ64uqgwiW8dFhV97",
  "key26": "4UoDRNjk6UePB46e4QN8smZ9HNCrfvQUWtgS1SD5maWkSpPBBJqeVPQGD7WbvyznVg3g4EbMserAEKjZMnDiMWF",
  "key27": "4LwGGm9UZeHU6kzLE98b5yZ2LUzjVFVqCUC9cTMzfLPwx3AZXZ9GEa9bz4te6pJTDYRXbeyeWPYfS7gWGnWqyiPy",
  "key28": "DE3d4X7mLrXnp731bEfXEpUoq3R2w1NtizcfN9FGGwaGTdYTcskc5smNdpKezup9kLHWKGYD6CaHyNUjcyNUfYU",
  "key29": "5UQGM7KXS64Z315hDxG9uuXPSbQ3pfxdtjL4SNztC49J7ECNzeWDvY5VqpiyEQJ3btteyxarS1U5uVGk1wwzZeJ1",
  "key30": "xrAHfvf5WaGvpwfZt33Hz8Qv64UeehicAhL472FRSLGJA6vQzVv7Cn1WmPaEaeRSoWUGWtZRMFG26v41cAkjshF",
  "key31": "2A6r4yLyUGf9PEsArm8mXNcRTz6VTQjRTP3yeVrsJdzac6aJ1Kt7MFVL4MYHpTWW9e4nHoSa9Buc1hUBPETWeFRd",
  "key32": "Jc8wP8u9S25CC8Wke2dfKjXTPfKFJDzwPecpzbwWF1ug7SWEWwYnUWb4Pu5c6xk5QJAE41TkF7R6U9D8iJu13Mc",
  "key33": "5cqpeX2Jb4mGPz66qEa1QaFD4ZeFqsPf5NkYtXpL14xBs8Y77sN9BUzEfgdRNMVFcp7zN3X1PxAFhob1GSBsx2ry"
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
