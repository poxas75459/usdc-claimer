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
    "5r67wxpvoRcknzyTKHm2QcUXrbu1mUE1Gh6j4RL7RUFYSis7xuucr6onMYjFp4qXSdR7Up1QxEd3XfM6Kdst5LBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Gspd5kak3jbvSNMgkHozH5ZMp4YxE5naVVKdJwSsymJQBCjS9A5fFC26xnETeSbttvxfd4fLsHH3XW8drCXsRY",
  "key1": "5aJhjtSmtctFg4dWW3p154PBSMu5uh623gwiJwGqrxyGSzPPmTdaki4iVA8RuSSoW2DffKbG3PpPSKMdD4zbyVUa",
  "key2": "5jYvTVqkPJ8WqBt86Cn8AuEfZVT9U1k3Tjzg7PFGLZx8tSEqCiEwKRLAVGRLhxsZEF6FYcbEc8LAnReTCNSXNzxG",
  "key3": "2ykkw5mbaRmyQEQMPk7Afntd7b2Uud2myzkX7uTziCegQcbE2Z6AQFXMBED87YRmw2HPP49t2Ugj7ii3KsJyXqZR",
  "key4": "3i4HhNFTjqrMUjY6akvXWwu1EfVaNSYpamtATzFfoZ7YwUx9YggtjvCfAQXWseqfjRm9bB3ZPEkf4ZRhkDhatnFD",
  "key5": "4TMQyZk9epN3WmRnDVb8s4YpCYb39ncdeFqtX7riLNDcA5DeMtCqyyzpECuoVcLfiQAT4wvbGzDosbb6BR4bHJ6w",
  "key6": "7LcHCaEHzV5rJdeKdrVLBMgqFtA8DMyMz728qWRQy7o6pcs4C4xjEHYTiw7xarhX9qa279mFzZcnW4yXQdDSk8Q",
  "key7": "4ZvSH73JdpXrTRAC2PUBk3HSTjTytdqcphgHk7JTHw62jbfz5MMwzinU91Pto7HuEE8hpMkdgy92MA9dEiJTKjCN",
  "key8": "5sThtXR9fyhxMiCFFo72mN4Hou6wGFduACeTJafG2dcrtYTYQ6K7CmbLvHi2w9PprLd2maciYhYBgA3dT6Qv6Zyg",
  "key9": "39DbTghwty2UYjRVNrQ2kyN3Bq5aaCPTMoRcapYRHip6b4DjgSypdmXVqDqoMtKRCCWkeMFpobfRUxUNwtYoTfeM",
  "key10": "57UvxfrKyQuTESpff6JCoZVLwsreFBtLyMoqaMiP7JVwzhLPodszXkBn3kpzVf1P91ASrdWs72FHxKyYxTLvqNnY",
  "key11": "2wxjx47C37pMDLjoJau7S4XERSfqCMR8QtPd8SvdFxHQHPBFniX9s4uJtszofq9pQHchSSRhmmBpxnEggvezJa9T",
  "key12": "2jnbYK6Ci8hpDY9Eq14tcRtuF9mGoEVybe2WbyxDYiJL8skJccUvHXeyM6yKiopPBbS471CtnDMpEf3zt8Ydf1WE",
  "key13": "3T33uUZW2HQnZUuxtdvV9n6ycVi8pyzc5zPPYMGkeK84sorKkzzYHhbzskjYjJHEa6pyzqSj65v7d7jeLiEErodH",
  "key14": "5UYLBYAC2hr1gKHH33HraEhBoULktQYFJtyt9utYZxQTon6ccAjCi9pJzHfRLbcKJxydu2sY5rJNutn9G6xHgHzE",
  "key15": "3xihLuxTgnA3QQWvyjSE3XrmxCZF3pT2Jx1Cb9neUPW3wjzJYLQusWgzZXtBPDthRmyq6FFFSiN4yPQhsLrmmXnf",
  "key16": "2hpEhj8tTM4id4LoqqgbVDExtaBqcVoUa1LVC6m8dmoCcNfDV8Q9N7WZiQ3b2RPzQFZFWTDx4uVpaMidLjYaThwd",
  "key17": "3ckL3jhdufL2uZXXGkAtWcrSDnphfjibE8BxCTtWxLELykXhECPSYaiDSq87Aqwhu6v26UXEjqndaJYe39m7HTES",
  "key18": "5HeUkb9NqGLEgGJD4n34Q1uVovwenFaKZ9TQiNa6zmdeKuQ34yY7XuVxnf4z4KUoTxwyuHSZSoVwgxtzZtuVcuDH",
  "key19": "5cDkuNEAzSJ6UfrR6GKuf6bLLpYmhcQsquutQuwHf6VEXA3oiZKDSfKWaYYiaNZPTfuqy1hiWzUDPeUZaZ3XQnat",
  "key20": "UVmLGbu6hfC8wRUKmn8nMnsfA8vHQ3LEvArJ2JZkmD59HB2GsX4PiWeJcCDEKUReD827qFnjNaFh4auunAovRLv",
  "key21": "2mhfxj5P6nos9kmP52XoGBa8L3tsw81K4Egc8yrchCX7YTru6mKWKLHhKHXnjeFeHLn6LkrpNWj1BJ4cPpePYCyb",
  "key22": "285WMUq1vjqcZN35AxBbSfRBf5k11WPDkj96Fjb4tJw544gnUJd8sTBtBEHjHNxK7mdVHEdTK6WiEZtX5Nfth13o",
  "key23": "3nrBroGZtt6yycQVgWnqgeXtErUfKMA886DCmoALZdx1xwX87tjR3U88ohWeZ3y2bGMZkGuEqp8EbADaSwbqAwvJ",
  "key24": "56a5ANV68gRQ88Y67SryvVoJKGxdgV8uuFYGKpzh7w2FnNAxhnmJZhT4awTozEiQ9aYkmwvzpoHCbHcrnszUsDFw",
  "key25": "FJ2eiE84UfSTEreZQZTJQuqrbkQN7iThJMMR5ZhhMKrVKpgx5LH1VDve671FpZj7QX1AdtVxqHxsxN8xHEX4JPX",
  "key26": "5QKp9hoAi9NuasNx1tbHTNkbniLKHTnQ855Ycqg17nYyFitT5eb7TyNv4RqyfPChppHXZPeF2fUjciA1R7R3hLcM",
  "key27": "3YwzAJkUY8CFTJn7pBC6TVk6MmjbTxTgNby5pQCLhiNnYpJG89hFAqkCuLBJNs4y73NvMwmcPEHVnCmU2MGo7LHW",
  "key28": "3hKZsehoaqjX1KKkTaiVqPKbsrqRH4naWPpQgzpWX1rWPLhC9eYkSFRctfwhrFHZTXS8qfWeSAjnVf5PrhGQeRQD",
  "key29": "2v9UNjiJcWDYDBYj5h3JjcES11fx36mjhjECe1ukMiBZ2SHe7W3DernGwAoTkJGbPdaxmAWTEXi2qK8ZM74GBjeK",
  "key30": "3aXXy7mideKkV1M93BMABp5S9bd1CvKVSJutr4unoCHA1C4GGedDowWTHaqqJrCrHSv7CsfwevSBQsGhe8JrGmgd",
  "key31": "4v1eXpWVts1YG5wsKrr6AhGD8vzpZCDhXU9WmEQfrRK3YK87puPPPFNzeU5mGjY4nRdjPkbKNAXXxYFBG9Zp6oFW",
  "key32": "8z78YAzbDe4oNxbNNAuNxbruci8FXVdPVQ8zjjxCjrdRz1JG6yVGX8KtDBwZ5Z2xmgCcN47GSBpNKKspnvzei9b",
  "key33": "4dENB7LkWG78KeX78MViRC27SXmq24m5cr8XYZqR2CbPEymAxzh2WuarMvMW2kkHyG7CG2nvsFWRhDm2HYk4PxrJ",
  "key34": "5u9cKn6oduz1sPtk6jJ4rDpAtk4om7GZX5F2mWwWH4xE7Tb6kLA7HoNfFShtCDBJCo97w6Do3ZRNJXHrEipDuEUm",
  "key35": "3RobPT42aytkGLvSmZjMoRAithb9T5axsKp14nHiWYBxxsXm3yL79i2BBFeNQbNpmzbXZMT4KzoK7ZGyfvgHKECE",
  "key36": "2pivUdtb6p8xQiq9GKLL35vG3H8Hga6k41i1rCowRm2dtwpEanDGLupHYmjKH2ouhYPkUFVkc5FUgcGniKMnA4tS",
  "key37": "5YHsBgx4XMLmsd7ioApA4tb7QC1mf8arcaYKJNctAGKrbLjSzFcK9sBqTDEbU5c4KZ7UG2GNg5M5Bq6aJ7EdN1pL",
  "key38": "3Pf118HSQNdHJphaiFK5z1e5oh1VRJ6fHZh2D3JKrJ1Vr8vb1Jruq4fbiQrCJeshWhXQjNNC49rNSFEcVSFUX3Cr",
  "key39": "3HdVv3bXs8evCeyM438s3H4QQtCsS4BB56wAwHUYc5NJHAXyZ3A6DGqaxBfqpdqF5j29kVnYA4TPdqbSnkw9ZWn7",
  "key40": "2pCR8WiU563MdiEdpqKesrz6BJFot15vQS3d4C1aMTniGAmg46meP5LeBeQfH93YzV6sJXLg5bMBcBm7AFme5AsB",
  "key41": "3jbRFL2ychxcExLBxMBympM5mCq8DHQGVSJC1rModBL6qba3APfBWQGPV9jeKiszPHkMfdwpzLKousfzoM71C3CL",
  "key42": "3863Q3X1y47qCJCRyaJZi3h2JK4wePdvt4P8qvNujzvFWbZzmkZN5K8hADLfaioyLdWW2hMig8X5NTdWmZ2bYyP7",
  "key43": "4TFxAJ8w2H5zqajfHXEBzJhZGZgAGwcRccyzM7wHbuQ4vhJhmEFy8yMTkFgaQacwVrGzbAZxbSE1AEuqzn3PbFKJ",
  "key44": "sjn2dj7GsTg2nRPxMyMs6HN8GwDXzDTqCwhZPD5BNgTEhbd9rByFdXby7EhZViNUuRo45uny6HtPhpBRB4cGjqK",
  "key45": "61kNfwRc6nsgnJadeeoFZk4LSnVeYepr9TKSYAX1ffuN4f1Mu72Q9mRSwb1Dkdyuf2EpZ2JZGDBtetu5UVEPY6W",
  "key46": "GBfChSkv5ZBqsC4R2eu4i3XyMW88ecwkLizhwdyt18p3na4VKvk5cJGtZjjVGTFKfWrP1m9ri2ECwjmuwJQeEMx"
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
