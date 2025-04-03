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
    "5wJKUxFo1xtm1LLoEZkJj3gM9kfcvFAU3e6ZPeHJoqz3hwySHz4EDw1BZXNSBJeHTLi3zucCPGWSZmszvb4Vj4o3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j5EqBy1th1LkpcKfJnyfsizcJjBxG12Sj7jgx72WCqR2uoEgFbWkwe1Ho7mCiumJBZsV1oUquo36LQrD6njDMMB",
  "key1": "5oS4csaTysWQ4uxPwdvHRyXkda4BMxAc3wk3RTT5nSC1MqGPSWV9vUvivWZnLZvg2gG1zhVrk7BM9GitjTV74hLT",
  "key2": "o7JqW7oEbbGWA4ffaqiRM5WX6EirpBGRhHTGrSzSbjCQaNsrR1VJA28D7r15nmHmVeqdcJGswSsMdt4P6QVSaF2",
  "key3": "2zkGfG8kZ4kGFVQ8KLsWjvgoqgWUjLRp3mjtWMsLsM4sMsygk2nchYypPmcEVoBSyTjBJYF5NcP6rXsZe6DvA4Kq",
  "key4": "3F3HGLkrDQkumn9dtW2FR23zRBNzjisKkfxzpoRosaGq9T2AnwHhFDfepkKpGnSLhmYGJoHmaZhRpfJ6RWjsqt17",
  "key5": "53Ts3opEKEgfxLd52xfViiVhrh3bLRpUbDmeGpVGz4QwURnByqsg3YuQjo6BjMJKZwThmG24gFVjndRUXWNXd3cS",
  "key6": "2aG4jGAFFjHRmxB4kmYoH2aATK9xV4addbLigRsqWubinADZA5hsjy7XkpqQj8PrHqdpCaKgfSL9WtETHzkYM9DZ",
  "key7": "4JpSdEf9o1EcqLMr1heL5NvRwa4cRcB74afBKzWeDf1i8XE7BbwJHoz5MiZ99843uQDUwbjDS1bsFJgjrYtj6htX",
  "key8": "4BKucNCBj6rY14WmmZdBGCpb4jPu617eZyqBuCxFWYAPzUtn1ySmzhM6NLsrMc4AJhfV28MoKGBdmu2AJayjhNqn",
  "key9": "3boa1qDZ2YN6MusGpKenFLDgawPjzb4F3Mk3kkX8nHJzy1reUrvfSnBGaFXuZv6aRXUHLx9PaBucsKD4UjBhsLED",
  "key10": "EXZvMBogFK2tM7ya7KqYxJNsHuPG5Ntq7F5VpALevnakKu6nadKqoDfYkHCKpsFnnqXwKexfgT66oDTKftenGBG",
  "key11": "4r8rVz5ULoioRiWf1k9aDW7ECa6hi1z3om26Uqieqr9D4ApFmUeDKXKiyVx9AN7X4W85Bbt37UWdEWqEfSkoRWDj",
  "key12": "51YfxmQSUpqBgSeAtAnn7Ex3DLWCULHAU1iEfbNfFhR8TzTEuszBQmkmD7aw6z8UMZbsohFUMYmYrX8k1gcYxpWn",
  "key13": "3YdMPb2ebc5HSHwPec6DRE86ZLGL4hEHQJaLkTfwx1ormfHj5WZL7GSTdJbaSjXcNBKyPcxdifaWnzjvHn4G9cGo",
  "key14": "5PzDWKGgQyXWqrXom6wkvnEaBq6RPhCDXobzevBZCKs5G667VLTQNHSyESh42radmC283A2CtskHcysYaz2s4qRG",
  "key15": "4kvr7UdzvfzHsEmxJ25cznzJiCZsAhHQF4p9wpBfBnHTBV6QvwfnVo9ay9y1ZnoQbJ4VvRogXASd9kMsemzo1ym8",
  "key16": "4X9yUtsGcnHwfpT5Z41t33FQQBTrJtGfxErEo7mDdFC6dQcmfsM857LtPtiCbn94YDuQizget4yTVtjCQ5EhwK1Z",
  "key17": "YU6vhwzqFiasRnRZDnVHsgqTeS3bmWmbksn8CcryS7bE66kf3K7ySWTfs9keGhaZ8wWF4rG6Vi5MvDsqnyXEJp4",
  "key18": "2uwZTmwSFrQ4hLKEv2G3tXA2ZW78PUKvJ2KDU7vi2cwu6H7LeGFWUvFFPyaEsHyARmTXXSFSPaowFAsQWF33Ek8G",
  "key19": "4ZkuX5g9N6CyjcZGqJVdUAPQVXpjCzsxhSNt4Ye6hrvZbPykPGC7LEJvU5vFbv28ZnDh6gK1Ggdo1WUKVjNYbLqU",
  "key20": "4TmNm8sBKczeyp6qnHX2xjBnX4jR979FyRTW97S3EZjYqrF5Ffo8nJLnBSTLG2CvjDXuqRYtMN7ShLirEsqs6XGK",
  "key21": "5D4LyPdbkPZZjxaGdsqDjqmeczKCYYy1XVaSnQHvoeBZSSB7DoaEd5itj8jQs9ib8ir5ruTH3CHbvtn4odbUWDJN",
  "key22": "iq4xXfiVrxk7H8m45Vxe6YPJ4vUigaKFAwACAMQqY9hn1v2rsrSp6bvAkyQFYoPzu8JgUVpZEvk1KxJKp3tfsTm",
  "key23": "5bfCeuYNW43F5Yj9t9KjFBSXz5wbME8CaywWy398KejHrfiZ426XiZsD4pHkQEk2nZUmbZNFZdbiE5Lud4T6abnB",
  "key24": "HW9weSBQbsaLhXPLjUzdPSHzt9dRujpyezwjemGtZPjYTsSnMuQyBXFfxCLpkoZ74x6WVDmBybxru9UzjvBKPUx",
  "key25": "sjXy8tUxp2sE6YfQ7MAsnmKNRKY5iTVCh8DmYJzW1gWuxuraDji6q7pPYSg3uGxg4mtYkU2rG57vuuvf4EP91Zg",
  "key26": "5YuVa85autsdc3JDL9ouTjrGRxaeE5CXdymK3pyih9U7pj1HYu882xXUE7yvQvnvcZqcRw87aJPKPDCs4YS8ZVVV",
  "key27": "LSoQK7PanoR9wX586gx4c3db7VeZh38euWmmxz54hvvsEc37yDM1Mwd5xxhhiRiMv8qaaiz56g9s8GsByknhpsn",
  "key28": "23pXDPgPuzSaUMqT1BiSaKicMxom5hQrKVXV6eVv2hLDRKctJw9ZymiLaPq5XxYPwq7NJ9ha8B69yqR27JY36sVK",
  "key29": "wFLjPMzu11j4ei6DiqggJu3PfPXyoieoFpe1FEoi8nGDbVFduXoyxLLWHMv1spJe4ZcaSepMnjHeDM1dd9ZeFDE",
  "key30": "3QaVwz6j6hLkAwordRnUnSiwYhzzwgCW9oGATm7sefvLda1VhxErMF6UKn7vMg84H5X6EPzMNsEHvaVrmKaXshD6",
  "key31": "66GYnNZs9G2P4EJUbeMiFGsFqWqvqg3wjnrotwLgaCg1Bg6nawDyBEUXUMdsxcPfxEzvKGUvEJbB5ZbYsjMXotow",
  "key32": "DyDXZjNJrURcirPB8KovnK8q4yDxdLALgLMFj62FkTvyv6JYqg4vUPtN8USzeSFKsW3iXLatvfGZPRzdmvoEgxD"
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
