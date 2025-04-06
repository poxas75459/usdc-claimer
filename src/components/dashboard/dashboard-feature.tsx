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
    "KPyyUKZtp6m82foEXdcza8JxBydo3gbNMca1ZbYGTpgkXBoPTzxr5KXoT5DSC7ospkS36HEuFuUN1vHQi7tA6Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZSDwdWMWJzKZtzyBRjhNR4Fov43vB4UauLn683xXjLoVgtKadfQ8qwcGXgyxuVLj2JvKptrvcG2rHRD1oRw43Wa",
  "key1": "36rE6CxZEa9uAVens8eDGWHwmJURvSgcN8QCxqLWvz3CrL48CNyrvZpU3azMiM15yrSyCb19xBX6r6hJxbtGVpw1",
  "key2": "4tpNo9vya1oL6RXSYmUmGHecdSniWWV6rRdtgkZPH51HCRrNmrErsHYSxmB2d26iCae8qye9CjpHRKF1PeHJ68Vk",
  "key3": "2mHAyhokpAZszMBAKCAdt1rJWaz3HaYvfBtUtxLdWkjELcAf4kGbTVNyF1FwjuiuqXQSYXeAXNekdSmUtmGGeQ9P",
  "key4": "2S4RidLujWYpASoSSzwpYWBPQoRf65ukncLUjmqVcJPnUrQbDHezm88zCJhy67rUQbnxhq25bXgsya4e8HsCV5Sf",
  "key5": "2aE81Vh9XYca9c1dKxhNoRHiHLRqYjD3xmYnC86k4fng5vFW78Dg1CjycsXdaGmqCUx8yDWzfzQDXVtEtBq3AiQz",
  "key6": "5pkVZHXq9aM8eraF6k3DdAL7hmcpPhmjjbS1wJJatMPiDyNEybUkpxXMbcbDCkj5ZHrc86TWiyMDUuuS5jsv1hef",
  "key7": "4Cg3QAPuqe5YVrJu9ZNRwRxze7oqFxPUcs1rkhW3ezGBi6Mcz2iCb9g9K2DjG53SaM4bJmb362LHA4yjcPN7uVFq",
  "key8": "3whS1yH3BFMgts7WD4t2FJSozRYB6FmWZTJTMYKTzCFP6KZHevTMfqGkqVAQn1ZZrvQiNcrSrv24zmeJkjyjaxxf",
  "key9": "44KaM5GC2cfvbMMazdPEa3x8dPiwzVZMx51mqqDqooF97sL2rYxZPopEmJsBYNPbKag9LstrwL64Tk1tooYqPv3u",
  "key10": "2pkfDHVSVmcCAq9R7BMEHxrjcjvYQhKQ7PUPHeX1xkLAnMGady8XeCXjcGUs2LU8QfaH8yF3AEQbgU9kSFgvuH9r",
  "key11": "3zVVMMWf1b6XZaHfLtCAetjT5Pi3akxVwTwM2Rh8k2U8bLbS4jzrSf7nVT2vEcV8MkmEaThPFFuh2FHUvKYVjAsP",
  "key12": "57xzVdLjEmD52eHPiGECa8FR3BscGiK4r2XW1Z76JgHND4mGs7QYt1ZuZbdt7j5WmAaEmALcmBMJeH1XMm38Sz72",
  "key13": "2NEiJc4dGKfSMuqD79Rp7jJgwTytZAMCax8TbENEmtk1KRG7HUGeEoj8aL2yutYHgV8UsTgUsMd8Lqrq9XPuD4WR",
  "key14": "3apLSBurSk49GoM8xmqdxEZCiNqeqDbX4BnEGiF3iS9PXTnSjv3s4SbRt8jpVWYdpzmEERMRt1pL7Jh5URhAs9T3",
  "key15": "3oWSZpLJRXFJrHMCjU8NYh2B74ihryaqBrqwPauty9EL3DRKfuWhNuEpAEav3R5Y18dh5vgezZpEeBMTcchBnKA9",
  "key16": "iKGHaLEgh6cgdKzkdvd1mekYdjHnHa1bRNXHQe5KnwMvgQ1ACNt5SqkUDzCzYmWvD5vhdBbPCYfs29XjFLNk4wz",
  "key17": "i8br8dzosgR3Kc1NHiNkYD41aazzpzz7RP4yL5oZ5LdQW3bGcT7D4MPRKXpStiYEjY9uZsgw5MAbfWh2Ko7U1gW",
  "key18": "w6UeG1DiG7RBZwsUdNa7XDoyfGm1trkxRkLXErRoNs2tV3HpSJh5ce7RCenDqyR2Ho1Tz3igBGkLMQ5Br1n6g2p",
  "key19": "WCkzNueHnTPmZ1C3NWEQx3P9tRLauWRaq8jtctdKWQZ4CUzdvPXpVu4hvhdLJxXN9i92y4g95uARjSr2PXMxQH2",
  "key20": "4F2NkVUvixD1BBMag1Tq4NaqgEtKnk91QJ5BisXHsCbUqQ2B5uRVQbXeZPPaDWep9qHndbgti7zAFFyTeSRq8sjY",
  "key21": "29KcG1bFkYJ3HrjmYBnZL1BYRZGzhQ6viLwehmM4ZVZQTEGbVrm8o1RNKZenHTKG2PXY6AkRFwbPcDt11GEy9RAA",
  "key22": "ZXXKkjocn4KAz2kraQZ9Fv9JcxuB5CU9WVw9AJt7QdNg8Csgq8BQFxaCuG5veVj5Y5tV6UKGXZbBqmHtr2DZiWQ",
  "key23": "2JQTKjeuHeEsVwGmSE1J1xdJdFdvxRHLUjJY6i72Ru9JFFBGJhPJBV7HMwTocHSPiUx3nwAi9qZKkgHdUnkffwNe",
  "key24": "2vfcmsboUgxEnRWvr5nLCHrUeRPyTDTEbKfYHpL5mu8J56P1qgCMoS25y8mxyNEhQoDEdMw2tWBDu4o8WVLkjhB4",
  "key25": "4aPF9MZYr5igj6Zhh2GBdpN1ba52AES9vEDGP3RK5paHNQAb4Nmh2TqvtYNKtuhS6F4wtnNmU63eavrJXCYnYiKp",
  "key26": "34E68C37FU552zApdAix6GyEcZvn4XQs7AxSp8rysxZfLNnvNHbVurVr2LvXRMcmY5cAqeTmGJiEZWJocuHa1joR",
  "key27": "fToH5Xp8xHJwwrkotKgJzJREBjHgBrGdnGDonxUMRE6Hhvp3HdUrSxfSKESJCn8boxHShMqxidfc1sKP5oXw3Pj",
  "key28": "3Riu4ZHwQiFvTv9rtXjGrxKjYU6tv95qR5KqopopNQZKWxTebcQSeAWsxmTDg4Nai5hKLccgtnhEzwtYBJzotf9z",
  "key29": "52voNwcgRa6Da9PyR28NxckjL5nLbKUEySRxA4MfahwYRoCF5d7usA7JFw6Lk7pKobCXahWqXGx3EDwhrXW7scbj",
  "key30": "uhckp52tiASoNuuQ3uHbybKRq5BUAVQfRXEqvJer2i82KmJogo9ze8Z6pUGnGrhCQZ4Ja3H78obcef3c7FWg2i7",
  "key31": "523k2oNoRYDHmmv9udTbJzVv2X9XEXvcMAGXoUiEzwtcLpMuasAQ8EWg9KmFCTjEk6t4ARd5Dpa1G4WzNSMWHbDB",
  "key32": "2VjcBxn9qA3GC69ioBUqEhVFHoVrhTJVrBdTc3gkx567vKmLE7TMfZsmHaJFqiU1d24EEubtF9wv6bTCYMqUmQii",
  "key33": "45DTUyuDpgron1LjJdaZrqD9WX8meuTVfM7v3FzJwb4pMHtA35rgriZ5FBvxYvh9kQefMnNh4hemxJA9jWUe6XBi",
  "key34": "2dBnbF6nSuTzWptcUZn8u7SsuZZXFKCjLgyDEzvSihgH4zKtoexgMKpcETbqhFXQwyKrdhnM55pnakJaHhjPZQ33",
  "key35": "5fzCrAPZC1NkFLdv5BE2d9y5VwjBuTYSJPRf2H6FFbWi8uBx8hpnPjev7Q33Nw4koW4YzEbQjLxqCsSKecWDjybr",
  "key36": "31Gf11ovtdpC8iPkRdr7twUuBqMpSBmotxT3oAr7Jz4C8Pru57s8XXVsyyKSSNrBydPoBN6WqAMwHxn3g27jm2u3",
  "key37": "3hfamPmsdQJ9qkzWMcTDpQBjnpjBDXVvhyCrZGD3YNAAW1oVNU8yp7eKYw5rnAX5YWc29YmWei3HmYTzTeX7WL9A",
  "key38": "4djDczr8Lc8KbjXq1H8kp7zStrNy2yqPQARmSNUt9WyuqHF3PpBEWG2GXt9NHb7GqJ1LhQgLhpDpQHVgciyya1Xm",
  "key39": "ATYYMxZB9Bv1tZbfYkgGaQNnQGBo2MJyRGSAau93kmeFpBMCLWEpufVZoBnNwomeHYfroVpMNZkX4Z31aPLrHmd",
  "key40": "4gEk59qHrE1R7ytdC8gFBLMZwHz1NYS77PiN3zgLX7Qmx1AejygwGqbd7c5EsgaAJoKxzaW3uLVgmSYPcodUHfYi",
  "key41": "PPyZBqHcvDA2ud6LNc782PVCpcpj5MfC3SUVK1RDjiY4g4ZpFJJqmUEZhuSmJXRoyWn2xzxrQGM7BY947yPYLHF",
  "key42": "4uFcYMGozbcg9UgFcvU4MZoiJ12eunjBdsdQtRkntZULYiBdzgApKo9r5HWNc12eEEScMRUpz2UNT7f233vJaej4",
  "key43": "5FMeJKZjYbkKca23oim5dgSm6KN3Eckqf2XAKR1o1nTbdYjMB2MBZWhaCEdZ829m386cxKUCqTeadTaBxcFgNz1A",
  "key44": "5oBkDfag3zeuBixZ4Q8hoRoSYaGjyaRUt4QBhRGRet2evMnswZLmUuM2gfCihPmWg4oay6WVAHA14uBuMXA6tx6Q",
  "key45": "5FjQPdS79nbgCKRbQN7u4HBcY29CELiQ2CoZ9WirYtkfv1XFBhFkfdoChiXg27UQM9jbRdhcmVs9aYzAWeWbD23F",
  "key46": "FEumb7QjKTJyj9p8m8YzBBi3ZQ3ave1aHYrPyr7NQq7PsRWPqDwpbhr22rAqCYeEPoX2vkcf5CjsQwUmFC8k2xq",
  "key47": "4vveYTatBQTxNPMXfehcAXACiF8CY2tFo3KGLs1QZvXpmyaYG7MoheQssvDeYCsEGDSpxW41tVftTsnFEExkjNJr",
  "key48": "5CULfqmwEibPXwWyWsoopMkH5L9FB7zA1fXr9gTqKuXTJ7eeq4QtWEqxYdsCRm7LiHU3mXnYGmAvwoLqW1qdvKrq"
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
