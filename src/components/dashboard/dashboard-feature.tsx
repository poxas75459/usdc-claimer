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
    "4YDZPjWDKbmpcivqNSC72r9pFsWQX7HCHCVYW84RUzuq8kFyLQWiVJ83tQ5umEPFEFZvZayzkJofzyMUYnwo4bzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyeRf89sHYJ8RBwskUNQrto7dsDD5HqcBSrfTST3YnWwsujXNhinALxyoUvDx2xGdrMmvfsnRAidFbPctaouKQn",
  "key1": "2Cs9ZVNycMm5UDxBb2eHRxKmAQ4mM1rBJpQ3qpChrXu9TVhshquHpdPSvrtK7NZiQpdwv89b9oLKhm2XQ9HLUWQt",
  "key2": "25sFbrjpTPFdyCMz4uX96E61y8qM333BdvFebxmRb8kFAfvJFqBYPwbPr2PHTuE3fqgP7bANtfehKXiPe8vjceRU",
  "key3": "2EqYBDN9MUtTVJraArFkUEfngBZceg8jYb37ssVVv3XcnBoW14zuz8EkiZj5SwgWdRF27911nxiHyocbS8mzsbE7",
  "key4": "1uUAWbvsA8VZHCK2ceswgUdg66dLjWknEAaq6CMJwnaeZFBA9KshrZ3jdVow5mFWHCF2hwyZ7d3hEXzwTTnEvah",
  "key5": "8GjjA7refbVkjbqh97yj4BEm1uGhnKb7hv4Cztx2e4KTUk1L99Ljjv1NNMVyx4fgortE9kcPfwsKGd7xi9KgodB",
  "key6": "2rPRir8hoR6iasmxDZgokjdHi4cXvEt3sz3uADvbAoCdpZ38L5oHKeU1QPAdVD42hbm9Ruj5Jf5P9eJaVJjM6anT",
  "key7": "ST3yp6nV11pK1z1JsAevtaQnNs4Budd37vmSHseGW32GXBNet9HQQFNU6FEFA77cfnHSpAcqi7fjyXu5zFQMhMD",
  "key8": "3rF8JBLY6xBvXFUpzhsDRfnopqZV3eFGP1tzByPodZyCJbVj5DruBWkCEen38j4vAFz96iVUEUJXwNJUcyeUrUMb",
  "key9": "4QsV3gZn51358EdmXwrUzzNnU2roFVGFnjSNASCRhGonySStKn5GsoVLY2g9t5VHR9CXpG9YFf9jua48RyJZZbG6",
  "key10": "4ezP463R8dFdQPjaPiYsugAUzcRL6eu9C8PGPZyfPeLWeBSUAwg9NLbfFkx8nhA7S7h38bku1QBSQ7j9kfXUQMDg",
  "key11": "37bue9UdWsnuwp6xfWm3WsavLSNbPbYDcKAc9Bxj45JqfVEE3rGo9eF2yvEHi2spkKd7t16tUPM73ERETCdG6xmy",
  "key12": "34wcRwcxeqAdJv5zFdVK926xm2MEP2ed1Au3N79mfuHwXTzkKDXy7rKqDCLQptpvyDTn74eoa8WzDHUv4GX9WEys",
  "key13": "2uasnG89Cirxfe5yyW49M1D26fAJMpafqSkv7BPKUkXjFMcmrKML79UFg453dS7nffXiZyCdCyUx317fUCmRJJRx",
  "key14": "4b447666fGVhsT4tJ6Ahkbjjpd74bBG8M5JpyQtSPjHoSNr8SZzJiLSrcGBiGg2zEM7KownghMWkLyMUvu19ds25",
  "key15": "54y4enue5xaSgKAKEymJ62yxewrZqsSzfsJd6QLfD4aqMGRV6zp1bEbxWJGUFQfwKCFFbnbbCXz3mazUksq8h1Gt",
  "key16": "5NZpKpfRNuUikLcJnrt5kaaCAEYtVj8YbyirGzwgHJpPNxcwNVjNWkFJqCzrBRfePqmZmcaCgVZuJtP4mS9cfH24",
  "key17": "kynotpXhrFpeb9MvN3FbAJJn43Hba9mu3a8r72rsnJnFGDfuy7tNc5FqnhvPzpqZS3Pi1f3i2RxJtjYGaoDVYmA",
  "key18": "4nUvgKcmDk7FiUS7hY3GSTX5sp6GYriHEdhBgPmcUhuSzimhkb6J1Ztd4LvSfgkjqWNeSwE6mHoiBwZQFX4RWstp",
  "key19": "24xiS4ZXcqw8GEC3bEt9ZegdkoWakxECJ7KW4ndQX9pdLTL8coZ4iP2DD9TFLMhhQkYzw2fmFv1GPHL6Zn1i4ZxR",
  "key20": "3SC6sm4J6udFWBbfMihczA78BXXjDwG8uRh7vJFod8AKWgR5E6Vj3munNsnh1G23Q1wEhoCYpaH4mP17Ru12ULdf",
  "key21": "4uPwj6BnHx482R438Hogqv7SSZjKVv5gQKdB1wBCm1S9nzJFREhzjeH6DtauHoE33BDmt7MEXyZDsLkTApSrWRVH",
  "key22": "2GJ95sSLw9NUArZTsFzNXmKhdQ94zvz8KzN8j5KD8MXDfhCpCnzwr6PYG7PJEbbdrL9PS21hm9r9HEMUYvUNdXCq",
  "key23": "4oNPVeYNpFnd9Vf3RNpL7xomak3zPSQtGQEBUsmuaNL17xmywry5jXsRrAoWUUUhSrTvY82uiLfQS1a4cH7Pnc95",
  "key24": "5DUgYvcubdG6Ub3WShK19LYkMGkJz18qyAfvqK338mdryXLRw4GAo3iy3Z3EgZaPd5E2Yq69RTpojsH5WHVPWJcA",
  "key25": "5aY6CfpSphCf7qG4mg9Lr7E9GLZKjmKQupFpeVff9ivCgAUB19n1KeZMn9WNdDCwnCS1Zv2THvBfcupbdppFK6rL",
  "key26": "57P67PafkLawBYEfzrQ6TZR4dtuVUjmEzyBmdtn4uHZfWe7M2hnCp2d3VDtbeD1W9jrPQC7N6VocEx6QgLUQUa3c",
  "key27": "55K9FDNX3BmkqfXNetXwD8zZgmBurpDpTjVQ3Rxw3RNBEhWmVeC6BFhFrEHpPpZKDe435EoR49LZzyPpjE8wExfQ",
  "key28": "4Ruu8YqUV8zQoj7PRqAdehLAGLJXcq46FW4GeBtP3ULeepZnLRhKAtA7ih3q72kTdPrNAVjzVUHLDhgY1EVDHoZm",
  "key29": "2Yw4vxVjPGHVUoX5ZWJ2YHKPxyPCq7ofkTAy6GvhTEnJw4otYh7HFS2Nx266c2sY8VAUMRQArV958xkdHcQiN5pY",
  "key30": "34XmLhU5v6q11nfU5A4ysKm8vsRTvFBSrKxWd16pnaMGq8NafQWX8YDgwqi9qEybpV9MG6JBfkXu7W7Li7pwqR1C",
  "key31": "2MZ1thuqmDaWACsZWgsMV6g33i1WJJx9KQMd4YvrbCuK1GHgKR39szZW6irgbiwAL4YS4LXzuxD1pqGXrEDcKZyF",
  "key32": "2vZPLFdHQKT9hQHTDTtuumg9saTHPmQBjfLPWbq2N7rh7D3Npmqbdp4kdAMXNziUHUrfBEsa636g4ZY1dEwqnw5G",
  "key33": "Q9PBvtE3PzEnNHTPwyeWxJp1Curjjdbad7SU28Yq7omEbnS71cKa6WcxJazN4dT9ZgrrK71HuCm9ZQ5odNtKyNR",
  "key34": "4RvMfK5BVwFMA59GBmsJbPwcotSfWXgxCT5H7hneRLD17nFSsqe6b9n4KmdYDppfcidBiUnhk2aWkGwd6xxrdTN8",
  "key35": "44jPdC65Xmqv4N2PE3igVL7Mo9iV6YESdJoF8EgLPwX7NQPUDph5U97sTRnBTyEDt4RciDzuqoWArepTYpoSZDqA",
  "key36": "4PosLYKqdM1jwhnkerkjfuL6s61wMwUYmZHsfHkfziWfpbgveKESBmBhEseW2ntjNzWsAUMnf4SmwSqWesJbtfX7",
  "key37": "633KMYYi6EYNZkPz87xdfT28SZskdf1JdVnxA6hYfyLbqR2K5KYgLQ7UA1Ux4jpDvtE6LEubZRgJMtBs9jzN5ZEM",
  "key38": "4sjVPzGSbgfbejS3EQVPCzTPhZuKqkbWM1p3tBWUChaFhzzr9v1W4uQvPNM6SZTTsVNtiTCVHsHJ9YNEPvAz4f7y",
  "key39": "3HahCvwZyUxdsZoTLozh9SkUB9z8riiPqxRovmyqmgKs9uK4e4dGEttsbjf1Aki7cFGwQE5jzyFNsgH7YE29Qbpa",
  "key40": "2BHJ4MVSe76bcYnqifryCqJKFeg6izZoQj78hHND71RaCLrSpiiEXWGN5AUC7gvh5bnVY8aboKQ11JftKAHAXEJM",
  "key41": "31qoEfgNpENiTt12ARzHzLNxsxStuwrtN3XLv7TWp4SoMN3cGeXQ3uE1FxcRaUoTeTPDZxJ42yub82m3kw51Nxfj",
  "key42": "2jvhwosN2oN6Cv2AK4jNqZEhpHx82RnoE6Xf6BWqZaZvqg99J13LubBeCe4z36VDQheChjP8ujyacokehscEUvz9",
  "key43": "64N8utoxDoBAqLzMpeq7UV6ZcCrdWg6e21T3DjsvrXdmvzxcgg8bUegdTpunqHFBWVnMwBTzbJQ324yN6WtxJ6pG",
  "key44": "4tayGGK8XW8FzPbiK5GwXPskGysdsFnjMRpBzp2zbDuYBn78MyYvgRUfeGNsa1dZBEQRVhSEziNW4CokkH1qvDtv",
  "key45": "29NJYC9dWTskusEAk9rArr6kmVPqvKj9MAxFwz7MD9Hd9uY6A3ALLq8ZgS8AuAzX7QVFefUtARXkdJU2bfT4wQdn",
  "key46": "2gBbGrPPQtAVriutw9Uy7Y9ZLTKQvBXuNzAwhDQf29XZGHJh5sich6XRseDubkPZGp6WqVxYNeakmq4ucToaAcFR"
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
