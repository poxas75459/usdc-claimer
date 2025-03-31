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
    "1rRJESgVBuoDafBV3uvQ2QgBVGWLSxjhf3m2UJ8cQxnNzmQbRvoeXL2xs5ccNMgtgFGdYbD9kmaxW1zUxh87PKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Atpc4od34oKeneusFuiMtBskznn3g4RvJt382azQapy3jJF2ruHf62B4XkbewF9WCriTKKmPh8tTvaPwVD9HZR1",
  "key1": "5z3XARtbZvNENN2FpABTsgatwBHTW2uY51vaq2MN5nv2ZUhWComejmbCvxXDJx83pcjWpS1K1ZYEd6DtKZPGLM8C",
  "key2": "48xmYheyAdNN1Yp8JtY3uSjETK3EXc7mrbgEticS28UdrZLTvjxQcCk1WuX9GLteBpiS7o1vCQuo5P4PikSQtwVU",
  "key3": "5o2Evk53RB3gQ4iU4KSMYmPCSCpbweYboXKQ8uuN14nghLsW4Gh18rSgZM6HkP4d4dkQLhZh5ijtPBTrdKuYjauU",
  "key4": "57hfdyoSZj8nmCy76ERH84C9uUDcP7mGTsvrq4yFg7p5fkFCT42tF4cpVfhKGUwcKohgNPpzMf5NJ1aoj1N9EuZd",
  "key5": "RRZ6Ez8AjaqbtkcKrmAXHGg3i3wbNtbNKK8eiakTqwJTCLeriEHo8GPVxqmUBbe8DjyvugZUM7JPhUS4hgHjMwH",
  "key6": "f2t3PjJMz7BXwWM1eUoHQJqWxBsubTSgEm1qGjtvJJJSMubnnMvXJAptivzYdhvUVBCwp8dASXpGXZguS5Fy29z",
  "key7": "5SB87iF2SDjMd1FC9xYcxDAbW3Rb7x4GRrXPGgd9x3XYH8Ujj2uihMXdZobGrcvevBUue3AhxRtYW7BJGt5RRzx",
  "key8": "2czM74xqakxvqL91whVzrGkCsnYWYuuNa1P7Q2def5NHNr9CxPCiGi4JpdfvGBTyNBBWctrg7a5YmbWgjZomYEod",
  "key9": "2c1f8Soios6msXpmNgiRFa1EfUfHLtDuFpBWW73LW3LMoFGjNYbcUEitkDhoDVfidzrTAo1HXhGYGi9RWazUojR4",
  "key10": "4dot6KrhqbwK5sTWKknPKhjZE8aF4TBS4QfCrw9NYCjqbKnP1m5b4kHwErKeyepcc1h1CApcWJvyjgiMVLKFvYDk",
  "key11": "AzZDf6JD7MMUrwyNYm3TVRKGQQ6M1yLFJgar5kmBMMofwh1bhuE3pqcL8mGmzUX96KHc7UvZMcsuNdysrBLyjmn",
  "key12": "3M3YZVr7GxcTkxwsVkNRAzWANvoHZvxKqr6vG79o6qyPfD5vGtwR1tbEvfkYHY46ocgHRkCKMseLdDHuGovFW1iH",
  "key13": "3xHAFH6swbmQ3kbyGdmkdVohSWu1roFub2XDj64ud8dEBB8gvjwc3323ynRa2HJ9GNKv5WDP9kXp9nrQJk9nHH3i",
  "key14": "2YMYoDyT5bZwJFT7zZJdWcYjnUoFsg9RQsjnL4gBPuYcR7XshNhmDinGTJWSTLzF2LUggQHUnDMknYwaVLDzczD6",
  "key15": "2TgbpQVfU3xtEzfxYyQubf3j1sGxA7LvpZ2SYxjfMMVdEF3Wni7Te3ky2Lyn6v1PG14c3CWz8MLZ8o1MtzNJGUJA",
  "key16": "4tPEqfBzeeGJuMYYZkL4M1KLmRHPcnkT9CxpQKZzFGidjwpiFqgSTtaq6LHBFMbqbH7tVGvJp6Rk7BK9mwVksQTA",
  "key17": "32kMPEVRJpQdabpkUZKasJ8o959uAATGgNKPk6UCP1haxfHRFy87MjTd1wMKQqCdK5ExuwTGaAmfbCCkRuFm18b1",
  "key18": "4FpL4CvMbrWpvNVzLjoerNhoVkPnEKZiuP2ckdeNoTAdVp3vs2hoXPvnQKNxuaq3SfUBjWEr1Ciqz42bpuoWoAGz",
  "key19": "3QGEd2jhPYE2C3TKoAJDAtjEWVFqnqXeG84fUazKYRbER4UuDZjfy7bMoaiJ1aqgtbLD5A8dVNoAHKebERQxRD2u",
  "key20": "4b1UwcTnwV1TfiTTKFRLp4gSk734fzqtsHMgJjwhHYdxGG8EKDSX7z7gS3hWGhcZ5eHZyyYKyo1YZZpJQ1a4LKec",
  "key21": "3UGQQy2Wd4wfMLgbjXnstH5nf5xxtfYNAxcWqCCTwvzdtMnyvTiuQ6A33dnVotmYpFa91gEtPbCD4v2ZzY1iRS45",
  "key22": "5h7NG37P96jjAmnXvkmFefLNat7VmEncTY3cwoe69hZZUigTxxqmP4umBfSBfqG7rMC9jDhycnavEGLEguD2BHJj",
  "key23": "C9kQtaHqTGLnRPueg5YAeeoVdrqtYMLcNrMt59hjHYbZkXyecUj68kxFWma6tFe4JLirfwdt8jHTAfLakZ3p89p",
  "key24": "3D9vWhFRCzgYLaddx21r72U24DMPL1Ez9Jx6KD9mDwZie2QJFL5XAL9hQBofLy6D2ni3dgdPso5ZwyYujck7XEzB",
  "key25": "5MEPPB9NQuYSDNWbGVhBdNBg1KWQkrD8fsyMocGv2C2zrcRazoqqCLN27Dw4s4JEA7bUXxBwNkpx92ZqmSoVKPRr",
  "key26": "3bqAr8wq9X9pavycPjMPLc9a3WrKpUzpUHxCZo9ZibcddH5gd2aiyMKbt8ecDAec2JG5ftMqXM26VbQpx3wXydtx",
  "key27": "2FvF9zrLG4KJ5LjeKmoasBATPAjAioRsBm2wk6YYiujX2U3Sk6K5Qcg98tRLc2s4t5hWvC1voeju5idNhbSQYDQr",
  "key28": "5tLydxq4RKbvu9KAURK1pKXWzukGJMVz9xXK7iweccWmceDkStEkcnd7rrGVZ75LNGZH6srJikxuPQoD3J5Jpsrj",
  "key29": "48CTnKt2vwQkscHVP22Xnb3jEqkqRQtigMPMzDsV4qENbk4N8Z7sow7RZNxsR3RMXzovRjHNfBUd8JFT9tnY3mrk",
  "key30": "2ZmbfRU8C9LbtS9niw4wnLWJitZv3PoLzd15LTzYkNJAc7KHh7sE2tvHQhT13HzAyeQui7XHfMYsxA44KpDmKJLg",
  "key31": "3oDy28tRa6iHYx4TgYJHV7bukoFknNcxcdBpXPFPSeHoEEM5KmoQoFY7NctY9BNcojExSbrCoGo2tQj8qvZfdv8h",
  "key32": "49u9DfohJQgXaGMoxQUTzJkJCXok2kUZ8L2LMxgdS15E6wHQfnHNseRofFLDmLeVUG88YeBcXUXTB8Ds3Rt52kp7",
  "key33": "483ts2kzFhrT3YNP7ZZmHPGLoEcSiP6RdtKR3eTA4pd8nXPFFCmFz1iCY9pRZgsUSRv4BbhjstD8DzzUELiyPSLY",
  "key34": "3G8w3ACXLDeHXQZ9Qry9f1yAEbJhKARqLi1YWyuRikLWf9K15tEgg7qEbGcL669LfWNhSmL76gNnDkZYjTGfP26R",
  "key35": "3YCkAnNzXtw4H5WjV1PaC1sCuwcpCH1TecZeFt816oPq8S3SgdbP8SfhWLz5thNWxZwMu1djYvLisfsD5uEKFTWo",
  "key36": "4JrPYA7jJnjybatftCGJdMPpNLJwYhqg2zD2uZeEzvharckp8qkzHiqLApCvjKSLgZvgyP45iXaL5n7PqBmrx9As",
  "key37": "3jW9HsqA8GeBo9zzcuVr5dXSMvFzPTvximmaR19m3LGQS3MyQ5A6HMZvyskTGKUKffQBc7cZvwsX5NTRZ6dY5AMN",
  "key38": "34gN3UeH4N53maHgcVxtJZqtsCQDpTP3i4bTpmLRgCUrwE6cgkmneTTuzwR5AG8Hbs42mivShssq2wspK1PTtoRc",
  "key39": "2kiFqt2xbDRxpAmanwxDuWfUsFD8fJ7giaRPjMCn1NYkabLYAgAQowxqvaXDcP9VRhbT6umFihU8BQagyXD6vamB",
  "key40": "3XTs8W9smvQQrfRMGM1Eo3P5rd9NiYsEZfLZrFknvTeRjhZ333QGLMLgeE99u8VGrniDhpuAm3vTSvhGU6Mky4Y6",
  "key41": "2Dk476sT9R4CyXUSgBUE89CBvTV5rSC67oL1CcFPM9NMvh8aaFrb6iwMKx2oZxVLtrTwcjNagkCF7ou6kQVeainS",
  "key42": "4NUMuK7qqN9NgX4WJPehoAiLEaZxsUVKpPSyvdjwndPpgtD4h8yBmUPQCtsPDAfPGKAtdJ6Wx3au6gMbNC2dvmZQ",
  "key43": "2DWTjVtW5cvuGXSqTtcsMhv1q9C4AWjbJ6sh8DPnrvdiVS5716AMtSNwDC4E23nLregnUFYvoP1Bi93Ebf1pNY1Z",
  "key44": "2qU5ArEZZnvmW5z2NxBc6ckSjTD3ZsAQY7XXBX1vrXfw3UHGou61FXBxQCRNZetu2jKpQNzmUCC93Jqp9c1fLVup",
  "key45": "v6RsayWLyPCZHNbL5GR57Dj6Hku4jnJySMB7BQ2ZqeSzVDTsSXRZuvSkuTFJbU1s7cpN6iLrKtAP1anMNzAkLyd",
  "key46": "2eef2uUac7PK7u1vFyeDvk91basaUQvfRrV9XKCbCKpoYwVRucjkLNxxKJXq7dxZJDJ4rqyLqvivY4QnreWG2bDs",
  "key47": "2CNypyQTHBUKy5NDCBhxVYdbsQocXYpbeQCZuWa88GJnmYtA5eR4UGuHVepmHNS8vYiTzoERogYf2q5n9tnEihfZ"
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
