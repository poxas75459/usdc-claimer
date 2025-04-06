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
    "MTEVEsoU82DnpWEBMRjT4ZQi2rwp9K4gjpvydUJgu6bPQVdgJYDbQ1PUy4Vobnnq8NMEcrg1kLfBDtvQBYkZBF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rA2RrPWm1NeCiL1KJ9uSb9xXQ9d2raEDLpXa7PLvyts74a9mGoFYUY5VhsbiPgytJAgBsuhJGZy8VJ41Bd243Su",
  "key1": "2ojNjWCKnqz1HMtMmjiBwiaP7YD2tNBgDnghn4hF6iPsZwSgGWWLhKyvLiZNAStPhdM3dnwSfg4fSmfSsPScVMuf",
  "key2": "FKBfKiawHvA7UM5tkFdk98JyCdt6rsG7wh5KoAemgNSTRPwMm56xCwPMXDurYxFKoyESA1FM6DhYvNas9Kq3k2S",
  "key3": "3RwJW38gEg1X1H6vCWGrfB9nyHStioBXiEHsxM6GD3GFPFpyhUZWXV3GByw1YXk2kSNNje9kzMRVKnCjdnhpA1Wc",
  "key4": "3NEqK8z8q7jjt64LTsKJtTMAY4GWHAqzNqwDXdZHXhbcVgu9LPy1vgXNaRwfeYuZTaccgdu7KfJHQb8nXoC8hEFn",
  "key5": "6me7Wm6GGA8Vk5TsnYyzp6JXAW9vgrMDNwMq9YShbEAYiZynuDJrV8SyN1LRxL7RkQPPbaH9EC7Q2s5VGAb7EDP",
  "key6": "3eB1AX9xtiMt7e1pYGUFEkYrjBgrd1aysxmLuHzZnUvuWGgrFqFr2q8nNax5MSU56q8FAdCjvu5ksS5XByRnaHmd",
  "key7": "5NRuubTvkZn6DbD7v7cXWkACFxEqngcyiaH6Qr255fgqVsuxc2NJDbV3wVzAZUDGgoexNZmHb6kq3SP37Du3X2Wh",
  "key8": "4THGRsAKhmFHi6uLRTpDCUVALmNtNwTRnE6ozWiwm3TAXJzo9PHmnx3rL7V6Yvs9ysxmWMZuYNdwciLs8pj8bNXw",
  "key9": "34zk3Sx5tkeLWJFMKVnQwnjsQ9KAT8CuRyJVZKzGeD4ZF7PDxunWCELa16KHpmTahLL2kpoTyRCtNAJZAyFpKGPf",
  "key10": "5oepQxGGe9y3cp86mXsPthCEurKwTo89CecUkU1UFMS7ZDrrnGZsdCkfJPeVjaWUQpmdwiFekpKqtXLyEk7ACKbF",
  "key11": "2RWxUuQXjQ69pXdzqTLGipMQaknVecPsVJTfUgbPZxNNCrLAd46XjB7h2GpVZnorN1q51Snw6yAppFZ1NstCbAhz",
  "key12": "23pNxjV76fNntRu3g5MdVkKDkRqzxaMcmDbYbfDRCriazmonc8ZtdhC95qcVZDAigC5Qk8MMF9wTfPpVWRf8DzdT",
  "key13": "VaU3ECqWkehgqFrUkm1sPwh41kwKKrECmvQkYhEnUszzoDnauYvqJJX41xdmpp3wjdfTnj6SkmRSHnY3eXona2t",
  "key14": "2MPHvWTqtZeEVR1PWif9FTBwh8kcUYVEFUe1Z5LaThBTpTDCiZsj6qBM5bMXuRjniUwPNJHByUyNxMYn1hKzPKtu",
  "key15": "2teU2dFxvbaxfEsMr66S7MiN4LnaWGRsFjDzKKkMknNqBKMjRfmrQcbMnkCEua37ZJQzdCcQGirPdX79x7CyyTWj",
  "key16": "4vrvN8RDDCduoEndZFhHJWhpANkbXRyZXG5cXCbe63zxUcVuxMEinsvKsWL1yhn46EFyQfZqJ1vYNGijXx87f3Dj",
  "key17": "5agNz7vxDGYVPCemSJyiXwQPzJMtboFx89rPZo3FziFCh6UeVFdBWJYdGr2pnZuAeAvdg3P3GNzkYAtR1rhNs193",
  "key18": "2BuE4izExTQFi1pFhAJhGWmSU6gvBhJ6rBYBTAqfMa4PeAhEKnjKK7XDqfu7dWspFf5VGZPHE8zGVHs3mm3h3K4K",
  "key19": "4XxqNR9RCZeyA3n4xdGRvkwzuNiZDxQBvjx6ct48yFcRBKxUDE69e2csyqYuH1QGE9Nb8WNm3N74mPbUYM7GnHcR",
  "key20": "2NTwQr48CkLU6vtKj93XGHVqiBmDmL233bUNEsLdAXcB77bruffBc52FRgDoBRoWkXeXLUgUDNazgMm4FNkmSLNK",
  "key21": "2AAhLcS6nn9trX9RfL8xhXoxCWNgdf7p2Aa2eqzAFuJjArHnY61JwyzrUXYN5X72ZfVy7XFRZmg8Xq9U3sDbyJoX",
  "key22": "2DwtAMA7yeEQVvQN1wUqvXpkBTKX72kVQKZXhwD8uhPQRKp1H1xwGT2Mrjy5yTNuFxbDYzKjKGa3uKmDNKeQtMoU",
  "key23": "39hBcAbvux9XUhLsCKXaK81p9qsPiKq4Wy1jxLDmpTL4JuxVji5FbEqLn3z3LUc3sXTVtTQK3wPnECba5EgpEnRK",
  "key24": "3t9dhVv3a8DYxPSSmE9yo5MiwZ2VMmJerH3Z1NEj3ETmmA48f7M5cp3WSpSMbJ3U63oCWzuuqT4yyQEwQJm3DpU4",
  "key25": "5ejR6GVC7ZkrdLTWBF58ExF2HmaF5ZxQke1prM5iXavQJBvfnXKwfXsJAWEAj5u4KtUSKUVkvLdsaPXtNR8eLDwj",
  "key26": "5MqJjioQwvZUsm1ZQYBctJikr9HheevfZxdd1Qb3ArQBDcsWh3zS8uMgbFPxaeU8AV5E9B5HpEkS9Aev12yihBLJ",
  "key27": "5k76hWctEAvyhrSsNoEFesnqCkceLMn34MfLHBzhj3S67FZYUCkAKYKWSyNMqVA3zKaZQEKCdWSQyf2W69cYneDv",
  "key28": "Swb6CTvfMsUpZavZ8wpuNFF7b5BvVpg7tdaogEhmFkVQXMWK2WYEuvTLw2ZTqyub5Ru1RSSaK8S6T3vD81fAUt2",
  "key29": "3xdtwjyMV1qp56Jgcc7sopRYiRh4gw71MTJmizQfN94Fv7UBaDDLQQaYpbDgEwwrjXULoVRWdtCgbsGLa6fBYigJ",
  "key30": "4g372sFANrh2XuLmiWUP3J9fG6TZVrKXdCSZjhsxziSKUPpJBnxJTxqJG8aJtJxXKkacoLvNr5cD8EkkR8PSdBW3",
  "key31": "5wSH6pWmnUJQYLtf9E1jssfxDeHMzL8cSgmDsidkDgBG5GkQ8UjQ5RdAcZ4yz9Vr2UZrekT3UZxgcuP1NRem8kgC",
  "key32": "xsiTMsMQHRgzCFe7ggv2Zw5PpSWUaP4oy3wJeNnM9HHaorQsdrSD4tDoa7LPWzLzdzWAp122zFKRP9cdZTsXrLj",
  "key33": "3Q1RaPy1rdvjrrv4jAqHvoSxgt1P8yeWLRHeS468iEwe3S1sZn7d31DnC4QNj2PtPLfNkqvt6NZvVpFL61ZhD5oS",
  "key34": "4E8Q4pFiEMqewQY3UhYPA9cgBsr2VLwUwFDLyEMx8KEAYUK4GU756NFdNDXf9DuFMPk8mbooPptTV5Btj5g7vMUp",
  "key35": "34TmR2rmgrM43pTJBS6GU2xc7gs3rbgsdeK1bToAHkXWec6RiCdGd6JRvM296F2BGBDDKvrTyAVqVGSEC6rxUy4a",
  "key36": "3m1AS3b4TruytdbhLwmbqx2uYgd7zNWYNUWAx1BwY3wydTYUjRKG58iw8B5pJMWwsWHVoY5GswVGmWUGJVPGcjTP",
  "key37": "81yTATNAPYwaDKxCRSMRQUzWeQjwZgLdvpyV7L4rJv7rpKSzgE2nwiYpjJY379FikvfUdj7S6QjH9DSpfQYwzpo",
  "key38": "zajsVj22Q5a8kwnxWdhFJBd57p7ntrbENhtQtMSRccfeHBop1NMwMvVRv17so55ZdjEjQoRSi7YPjYixvWPxo3S",
  "key39": "4A9FWH2vHLQ6UEYYq9Dn8HaC1hNSgjQuf59KK7xkFfozcxCsPqJHuKsNpUnforknpXMhfM14MzitHJayMj434ZNG",
  "key40": "5aorYyFkZQhAK27mttQ11HMGE2r8ThtDFdnCQmYjPZFLxF4kEE6q3NL83zBpja7AxhB3m7pM8TjHjBmV2C6mPA5B",
  "key41": "2T8r5sNK7YSBGGCKFYZzjmQrBf1k7j5zyJksDoKkW4EQ4orrsWq9mZwE3LLqJNgBozZYdhGyXjRe4tYfky5yHiKE",
  "key42": "4jNQ9YQv3KZh3vL5pG43ZFzErzkGoUHfD6G8bBXnU3C2k4yESUqqdxSJeDxCA2A9BdJM5UkrhxHbC2TxuYYEuXYL",
  "key43": "3pLqSokVchoCd3LL8C1JF27pjgeRYaEJoMs8HjJxFw2nuXTTNvzjfNTDu4AXzd7YjHW2AzaBjUwzqscjpFFm8iym",
  "key44": "4tk8QEREiYqFtAUGbTtBrZp8Jgo7zeJGTqJ5ef7Rgvt8MH5dYTZWPjsneMp7Tdk7WamPghqmw5MMNs8ahDawVpqr",
  "key45": "4WkFM2xz58Jf56X46GmYjH8AgqYJQpSiRHLJQwAds1ERiZHK9R6KMxmTezJHaxqe7zDkXtD1withecSXNCvFh5Xz",
  "key46": "wKKdPvWkUPQzhnxyNPkV2MBGQRf9vJXHbjk5oSfXuUTXrd4NrRrULQYGGxbmQHM1MTTyLPxUX16YJAcT9PxLyHF",
  "key47": "Da5bP9z9Q6vbfY5PVhVWqsYzd9X1K71NmBsAJRHzYMnbc4YU4KzALicTps3j2PDTXGenYbb7VYK8zGWgJeGYEAM",
  "key48": "2UZNPoWjqSacpZAhbuT2EjpVGursi6pmucJnwZAJWh4BrWZ1HsdoX7G8YD58nXrSSkEzFdcYUTt85vE5NCkbFP3k",
  "key49": "65wALbn7iAcoqCSuE8UVjvAv2bnWBfNczz3CtsRGvh6ocLq5FXzmxSce2LKQtfwzan1XCfLwDAdNHNKpFRn9mPMj"
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
