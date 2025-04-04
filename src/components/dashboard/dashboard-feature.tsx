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
    "49mHDVS64YLXXDcBnBXVFcbmFDWc3DbYbN48TCfz8E1Xt3P6Jhm1Phw8JhDai7FfgAz2xFqki1MUz3A65JCbfNJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDPoARMqPATSPPBsWxY2cL4V4DgptRAUCvR9Ab6T5f7CmbvuhhBVFVbjXh8Kt3uQ2sRb5RZyxrDJC2AGagdz6yY",
  "key1": "3VYbRHZUwFc2tPFwDVMu68tnmJr14HkfcUiiLDDb9QJVvSQTwLQ4gjMGfJdkiTLayfj9c8zKepjV2PqjLTCLHdN6",
  "key2": "4GC5ZeJSckw83TBdNhvCKxLEGzbemgsoZWPVWALxgX57P4PFDDdF7rfwVyPt4S9uyY3FmZUVFHcBtCcGhB4GtfD",
  "key3": "56QUeT3rnDUsALPWG7mhopgfpC9qTGts8BdcfiV1GiNgeMqrt5NaSa6j3eqobQSAF2PvccS2sTbxY9TA6e3XxotF",
  "key4": "4wY2kUAmVmYJbmxhzwiXT4voLjeSgGnQ9VJDyB9TUB6K7ypJrqugDSqRTET5p7qUr1Cu1VNAnH3pSbP5u62SzLeH",
  "key5": "5FgHkiysiTwKoxxwT8S3yD6GdErFKeme6C7xQTESuWpSEcGDXqjvpVd9x8zAWqSpmEnupryAQEA4yV5n5W17t8MT",
  "key6": "uvf8XsgEkprap4FTUxALwXkcLHAtXa3HztANcQnz34w53JKPWFDW3Jcrnm6wCUHc95ovzmZtcaSQUpkpgLKCK2r",
  "key7": "4E8mWEMQzMGKMBuhfH2GsnEqy5fGoaVY6REXYVVAjWAeEoi5461viikiztSfdCUGMUfQXJEUdm7u7h7c9ikuXtm3",
  "key8": "LWBiRidRVLad3onnQh1EXq7wDmoFqN4ZnHwsJ2kRbBQnbwpYnUfjUafyp4Jt3BVqRkwJL7c1MfJG9WVRw5NgdsB",
  "key9": "5dXaSonTDhv3CgAjQoGYJUb4XPr3BQ1AmuB9me1JR61EHpK6cNk33ufLdFTsMYc8bDEEBXtqx8uYT5VeKNemTXeZ",
  "key10": "k5nnE7qwtmdK1KxGzSF2V2x863Frz6gmiZDtwHq4MovUyGzykjpjRnE6BCEbJ7UenSyGMovmiwkrRr3nwXbJknu",
  "key11": "5V2pjsbEhh6izjumkkkokf14XpZdNcsix4BuGB7z6eXpXzCfvGu6SUVu8EcAcaekX4as2BVRLXMRW8JjmY9tzkat",
  "key12": "61UunNF9qK7HRV2TUbvxyLRWksfMj634f2WdsTXWUb4iMtxLgDvBkYGNfLRbLjsbpxp3MGWubyiSn6nCtuGTspHK",
  "key13": "2kwz5NBj8ccBHuTYojWBFUwiL3ExcVsURwva9rEjwT1qDzmxLsRo78dgMLJH81LJoxPG5saHxcEAhchUK4hdgFkd",
  "key14": "3hKqbT5jNPsCAjKjkhzT2YHPDzQRZyhcE4bvEUvrxRQohi6EeqrpgB82pB7Ck34psJEBNi82mmrnHaMKXCGjShXy",
  "key15": "4XS1M85oid4r93kK2YxJPt9dCgUY9QPQN3tQM6y8WkDu6yNHAgPJ1f1x3irFkJrT7wgjVPHDggD5ABYCPJAi4tJ1",
  "key16": "5Vj7cw41DE3qzE1EJ7f6XcZQK7P2bXQgm8r98EqYHR6VyU9qe8mJGrsNGNfG22xVnU8zhik6HeaC7KaMTZusGYF1",
  "key17": "ReZtXtt1iS5k3P4ZZ18pSxUBXwt6SbKw6oKMX5jZrECBBgcq91H5tHUXdLEhQMRUjaPbspXc7w9uw9zVaP6v8Fc",
  "key18": "2HHxmnkrHFqi2JryBFKmtZR1sWctXJuq77LuEfpgY9xtdGAAZ9ytXXpREwybgciwVTerdKY4DuTKPqHxXxMiBydz",
  "key19": "4egjMqV2oavfhw8qvgLmWKjwQxcumnjFd8yafA4GjGba71cG6vn3rER19TmxYFVFAirFjfJkToTN3aebPE7hoX3n",
  "key20": "4SrMHbpQdQv2UBHujspiCSSLZRMGfFGAqZjHvpACMJZM7sKLLohHywpLU543kRoHhtzoTdhL8Y6sQxWLza4SLjmM",
  "key21": "4Dd8iyMMTYXJLv5ZxR2KM6PCkMgbPGG1q2dsUN7bts8Ug1pgwmUZkoKzZpPYDpQXMcPQpqU7HJdoFaYAvSk8PMKc",
  "key22": "3u3rcidmHxyJ4sDRPf7EvBq7FwF3ibZ68hP69Z3xJnSgWb2b1TBCNBv4kv2Qt4SxvPs4AeWtBwCcDXFxMzUGbeKq",
  "key23": "4LewGuhgEKjMgb65kdhf6so1pasPHr7uh74XDBeuyEwAGCt1h5r15Lxow9PXBswPbsErbw6gxwzTNqNbGUmSNrqP",
  "key24": "2eoLQaHJmht8c1fFrTz8URrteE5kmtgWZpAzudwqrYhV23PWB5YV4ZCtfGkz7Zh3yfAhiCPH2b3HfECzr5yUbSdd",
  "key25": "4NfMwVxX2233Lj7VwCh9jM8qB4FDQbXpdpxifvhiDXdKEMNbwrzdjYfxqdpvuiW3QPx4xnhAeCHk7MVw5LUkZ7UR",
  "key26": "3tTiHSo7UqVH283Fk9rXNtUititzMY7yPokx8ua6nBtsfa1bZGM9iCTjetvoEaJAri7TeBsCbdmNaEecBwv3acTv",
  "key27": "6vwDzFvkJ6U8VbgGRcHKU25KFKWyLzWUjowYfxhe4GZEf1gttxHpk7iMRg2pJNMJUxpJiGTJnTuVZ2hfHCmZnsi",
  "key28": "489Spxb5mrcztS1fANitVZKgARbEkm1NLSkW6H33NbRcF3sG8srE3n2xZpzP673Aqra6kmffQyQJym3GQzhyviYM",
  "key29": "izGUetaDaiJxqH8tQnRkfQsykeNheWK1tUmawzxXASW3zNDmrqsprUuqchnRNSmE389PMTiGyGzDA7X7NaYHKnF",
  "key30": "2mG4E1n4R9XXPGLvgNBm1T8K3dT9iH6hYhqckypb6P1CUL6zffsgRjmrKcAGPvdTqhxpt3pRvEceB16rLePhFdHU",
  "key31": "62KUaEuGMb7NrXjiHAc419VFN7mjGJb732bCh5SJ5DhcZAnbKUNHXm3PqtU6F5EhgvKRDcoi6g8x8CbPsFnaYME5",
  "key32": "41pbRUTS1dsv1rf7rPTdsJGK9SjdmoRJVZjDZkZtDM9mGs4NDAVQt1jWKLq4bc7s1kpmg3iaoFvAg52CYnYwpzbS",
  "key33": "19nHuJVrCK2ZJRUtcqqzzf6nYhBSRR9C9rmeJqGMkBhio6NAcxNUmBnLFxgHwxhK5RmFt7pxfcxKEmaWrQHQ6Ax",
  "key34": "4Xw4UtsgRiDrCY6s4cpuSeZD7th49Ftn9KWCkKe5Zs78k3EKYD2hMUpCEJwT2wgC9Ra76q1MBzTmH6Nk1GKePFHb",
  "key35": "2dJck4dhun6QD79x2GCsZiFTG8fkGckQGtpAKYfACf5mKBXjinno4F6urTYDaRdbxdGfveW1PZD2X5rrMMddRKui",
  "key36": "4KmPwBAf4Aq9SZrArBD7mcWnCwyFn3EejMpYeupLsnVc2fPvUAhyan51Pa4KZbkDUw9ooCcDSnzGMDGmDGK22Fur",
  "key37": "2i4xFEH7JXe3xhG7ShsnHtvweo6y2Z9js8pDhZTEc2Fue6HeK8XWsoWezjKCu1v48G2NvF6AUTSqKd4UxAbzzfcg",
  "key38": "489nsqA1TUPSvjeg24SDgVPAHGfGDVkWAvPVk9L9mNDnC68CGVN6Ukvva9pGgFAnGe7foJDHcDW7t845kAgRUE1a",
  "key39": "2G7BQVJeBwasohGoZgCQmH4KvLXj1NU9yEUSpMH5Jbpz8P9HBSBhzmYC43jAgsUvoFmZQ8kKqfzqr8gA51gJZMd5"
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
