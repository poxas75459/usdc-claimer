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
    "3z7B8CZJH7Gd5VGTTRiynt51LGBaVZ1Br371GRCYQvRWpN63xgvmZzk6DnQ7JHUwW6AMwEnGeMwCgfFe3iptvoJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBcBS6dkGad2YXhzCf9Vpv93E7diPyoMDgB6BA3QHaQdnX3e1v4MXRjEJfPbd9PEEKateMxJwq1e7mL2HLcgtHx",
  "key1": "YHc4Wrt4KhSLMGAGFboFmouWtW9n23HW6Hg2LTBkoEg6QYdkr4U7CSsokjASf47eKCKUXp59yp1EgzV7YmrNpNB",
  "key2": "m8t1FHsy1vaDi4maq51q35sY9TiN2yX1aUgKeLsGJmHmshrhb4YmbsayCkbcxtN1ooekCxzi2oRg4deUeDkq7s4",
  "key3": "33ARzC5qwR8C7MRMzxb7kgCK6ACrwdWc16C6t7SEeQdc2McJUHH4cDJ2bMTJpS2DDiu9evwKgkXNWrfCz83oRsaa",
  "key4": "63ofm1WdjgdCDaofK8xc1t51sBVvqbpCaN1h1nUq6k1BtAdYb6QTBn2NVe9MMX5EE3cvHDUGFCmWwbSPdJW8Qfeh",
  "key5": "mWvq3U5sDdymMXHtzXbaDwgUSnN2ERxU2fNaDy8bKnQmQxf8g3aSto7sxQnpf98CBs2LgN7hHYpeC4qjWncNSen",
  "key6": "3pd9kQKEAqQQDZDj6eeEiv2ZkDjYkxB5XxJHGgMnJMhddDDZE9Qj1T21MW2c8ZivcrKHaxdFpW2ZvWMtaaQsUmN",
  "key7": "sY8WVU4zCvg2wsdW3baM22B5nEBjuKmVAVeiFD8g6hVGwdbXDEtvxMvbYmzM5dtRAbP15nqh9rx84vuLCzgjHtr",
  "key8": "5m9DQWpCHgAaXKtjdQFba3X9jaiQMaN4SLVGZZ2GK2JKFBVrhTyfJbXbUqZimMojhsBsd9tAuQDK9445snSp6qV6",
  "key9": "4g8z84ew7w82yTEYZXYujwL9UqMGkjdxzbJVHvZLjtccjJuKE5uUii4Sp3cd2aeL4jEuAmSbmY1eaH4n7bgWBhpQ",
  "key10": "2PEGcTgRF1rkhxZZdW3Y3uf3X2syZv8KnXW562SoCogGucaznh3b6qwYZfpyGhryo4dJh5npfrZa3xpo9KgKh3yD",
  "key11": "5bWGGksAKh6nA8KYiESHXa7kZM7xNLCHXZaT4gE9hHDNGffKhyCWw9enRaVrTy664gHKgVYejiHcXdwZ26rr2kfc",
  "key12": "W16NZ6vziu45oLmun7uDRtcK2trbei1rsxjx7nc7ZcRpgqWYaWmeQ6AAgVQBePmHpc5smSWandh486QUZmmxNgc",
  "key13": "3zC9XjNJ93cindRKDwyeL19dmsL46aeexdqTs7ktnAhL6brLSKyoA8qtanDVToDqteQsd9kwMrzfr48wKhhzT5aF",
  "key14": "4q1dz6aaEBbc4JrNfC21tTYWKPHGMEjgTQAdWyUK4Jx8QTtRE8RyaGk3T21o7aNDss3gWtNZJa8TbF1yrS8C8xmn",
  "key15": "4upvb6AHdFCiF1A4i5eprWiJRbP2SzGZRdKEGRDADJFHbWqdRRf9jUu3UMswNiQfTA8EGyuSNhPDVv46zEL4Wusw",
  "key16": "3Mzs11AuxXwYzBpB4xcKgC4euxq9b9RQfZGoMP4x7WebQvwFmE8WBoTfb3XRHQufzMgN8CT1JBypvy8yrsYHirrZ",
  "key17": "2xJMpDUjSubmUSDitCnaurKZep8mBpi3MMeMWdsyPg9uZWhgXSdUFUZLQUJmkNJnitAYoMFbyptzm4yQBacuhBiG",
  "key18": "9mHhyKksHj8pPUAKzqFNi7VZk4yeknPwnEQa6NReiiT77TQb5KPeAPyKmqTstPSkY1hTHcQBF12AueX1KduMxpb",
  "key19": "5ShHFiCynhGF74hUVVPUXECcX5x9nYoqZk9EggoveLb3j5HEp4WNusAGnQyvw2MXLEyjuUdfUqX9jmV7GUEe5MzX",
  "key20": "4U8rzn9xFizoGHTHrEUGucwiAhVCBAR6wG6bxXcBMz65CmAsaxMbWBEbTY4cQcyVd9NSsZKBS4RMAsfsra3z4AsR",
  "key21": "598NsLTj3zmsfJM5cSpduL2C3C5ea6hBaC2VtRaHV7tDr2TJ7vm9CKBTJo1rTR6ncKc29oFbg1kZgX922DZm71Un",
  "key22": "3XCTrwYffHf4goUGBa3AefcZkER91XVsz4tSjyPLP9x8PQfS8ur8gFBXF65iTPupr19UnwWcdt96CCsi8ZFrsWyE",
  "key23": "4A8DJnrL3BHzkLW562rgMpuEZjsBb5wYsVx5ASHRbD2dyFX6of9wAKToWoJtbxxZGHcUgiu2Yx3Q7SWzyFbyCXng",
  "key24": "S4Em9Pz6VqEzfcem2rn2dkv2j5McN5NJd4cmtKUfNtyRG955jHLzHvchoJtohhWJMqDApevDtStkgmzTvX6RSov",
  "key25": "tNHR65QQMWnx8zkdmZMb1sEneY18v1rzxkyLYkpEtcBGoEKm7zPwzrYpSruk6WuLnVeHDsZbtiEhAChrguaasjf",
  "key26": "5M2JKrpzHh8CvUy1r8nm5Pt3zqo88nJvG1VkoZG3WBvJZuRKdKXf3cx3i2tPgaAHDkZHC1H2nvLrQipiEb6uBCPx",
  "key27": "4rPKVtgYJsaM9GYFM7LjviJtpYANhitFLJHHqrWv1qxcUoYyD8d42UuYBurczsXVyNRQUMJ2AWEjPvZcDhHGStCz",
  "key28": "5FM8G3cLErvzxTp8sNqCqpukAHRanJgooaKDjupnhF12HjuEzCUDiVsG6Y6dFrCd4HhBUgLuEx1XQ1RkKY78BW8W",
  "key29": "2UExRkAMQjTBbdCiDw69tMy2vrMNDVXyRUJTna2hdMiov4P7q7LpJeoPsEMDQYXAeJGJYZVCRKB16k7nDRSqMLKW",
  "key30": "64AxQX2PNVmHtHa5KLfVQhyqKEhBbTH1FGvFzfKwA4bShxtetC3AXhZjDy7UaVpUnSeCeg4VA152bXcXzDHZusSX",
  "key31": "2xDVmNu41yVy2WWWhX1U781T5FaQxqaVutFTahTfzYsfTxaXf797LX8WkMg9Z35MKfA6JdKQrwPVar8WMyiXRFNR",
  "key32": "4Y51kVNTi3MysaqCqk6mxRurFxvANM2EAGrmjLZjeWiRq9ahNz14kEQCkzdBmxsD3TZF28P16UoMuUmAfdpzVrVM",
  "key33": "51uAsrfm2ZV8KuSuskWFkuDNps1R4UN2P5LtBciqCdYqZEZnti6kLPunQdBWM95GepcVNT3nNYz7JJzPPJnRXbit",
  "key34": "5DYJioTbDyyvpFw8vEWJzsFRgiKxEVNcyJZPwjxAJo8C56czrjra8BZ4gynRC9EC2osCYPiZMK2JtL7NkK2ToKj4",
  "key35": "3kzZsymUT5ZC2zjgeDX6dz68osmz9np81P5LBtD2H6sMWtFKMpVWUXEBarbtfGyKjsXBzakRHHdh7nfheSWqv68z",
  "key36": "5tS8nTEsvNR3et72mqupihqeRUj1XGy8W2eFsacY2HFvebrMyMnWnQq4N47S4tnH349VYGV2zdEYHb1oD7gCJyeo",
  "key37": "3FAxaf8jRARwowyQaPsi7NZ6y6aMVfgbEyAyNPQpVXTzMbnu5CoMmumf3iVrk4qDAyFtDMHuwZ4xCvYEUYjNuMEr",
  "key38": "3aYuVB9oymhq9mRnsKh9HyhfyMk6cT8DZrjEC7ioTy7ApGdsdD8D5RCc9FoZEThAYibbygieoZBVrRfrd3HpYbcL",
  "key39": "4cT9fNCDtYMK2fR9pW6o3LGLWeadqP7iwNihWBa4rBucAavfunrGwKgYZg7sj1CBdEp4zHLkp2Mz9HVTcpbXnBLJ",
  "key40": "2Ev1Mry6YuhAxuMZQMPKK2qVwpehhZycoVSB4xn3LM9PBxXXLDisu4enDYVP1mdvhg8qNJUpwh7n6RhHnerZZMyL",
  "key41": "2VNdc6LTT1sMp6dNAcAXwNc1ATNs4hB2iAARNbYJJUW8VYEB1P2kKN57oRvmFCG3R2sbS5gidA1N6SxWyaEmAqQt",
  "key42": "3d8TqYaHLRJNL8tYYj8zSX8AjDoT4u9feCMFimULkVStpkEu9dA9c3EhPRcrmRJTJtP55yeMspqW11vi1hLVjMJ5",
  "key43": "3YZWq5M6udQGfKwSBoQYyyiupGXVTZR25z3rrmtKarNxuhvRvoaJZPjs898zRh18Apu9wYgKS2cpbQEKyWWK1yhu"
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
