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
    "5zYux4SwG17V3mMnEZGxQWMNTSrskh7NnG7c3NjANH9jHhXwSK9dUCvP3EjdqrHVoB4RNnc9ya3xtRkHf5Cp17zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfo4kFFfjZMLHjp8HsTiedBVGXfoAxiYwHPoT7dTC9LkvNsg1uCQV4Z4uBQiiYASZsq8uELrVk69TGGv8hGCNev",
  "key1": "5YGPz7AFR1GizVQPaZmQNDpDieqvndxhKy91FfeQ5KU8unbPtrFkGzDUURdCkeiHs9TNHidVR2FY16mMTTvtGpMn",
  "key2": "hkD8xgfz68waicY6g1tNonyjfQNAUDYVcH4wU5rXDgL8oqcRaWxjssHedoBeDDwTSTKiauKDUbt5G1m8QUwuAgE",
  "key3": "26jsCn4cAqNYRJjafvND3LBSkw7Lt3ki9Gu8fcWVVkmcLZWEgGHK5KfeeUzpokiRdZXemmuY5F7eyVfNAgQmTRav",
  "key4": "4dQyBJESwjsTSE7v3puFSWGYu23TJ6t9tPVTPeN1GEE1g12aGzgwT1KkwVHWghCJuVptjZuP7eZG6izrHuRqH4Tc",
  "key5": "4c9HNx5cGSanP3SzyopBzEX44ijPUvsTaHn2p5jMXK39nbDHnv2r74JtZchN6CQc8MLvALKpEyGmV717jRGgag16",
  "key6": "5y1RU7d1orgAmB1TKDmMgSJoV8Pk34eN7PWoyQxGUrd4ChTsHYoVu3Tpk94SxqbSCiyyFmSwYu6THWz8j9VUGxmz",
  "key7": "5fV9USpeyxoo4S9gYQZR9zJ3ZsDFg5wheZyBiEdfPR8DuJsadH7fLApYfMrwZxY6UESAfSRBM5hGd7tspwZoueqQ",
  "key8": "61DHnUTc28g3roxjTe1Hx9DkgVQpmqi1BAmVxxfV3VGxrJNLyuVEc21M3cbhkb9bLuRBbmi7BRExLkXWMxYDaxkn",
  "key9": "iNi8SQRBuixFH6HvgWAQwU4cBpjdXa6xyLGhhLgZudMfg5KjLSgSjSenuGybJbcCWrmLyoCntcmzfj7iSfiR29q",
  "key10": "YQWKiE4aTKi6rdZZpyjeBufeiwU5NwTnboh3H2UDGbUe3JD7rKT1Akphq1RC3CECaMBCgsbTvYGAqP3xmM3sT3x",
  "key11": "583ANMvovTL79Py24wBWzGi7Bgz6tTWKwX8gK2rAmJFC9uME14LqLnpoSzjwE767Vs1WZt7v4eytoZDeM1Mzz8M8",
  "key12": "39qhVLFSqj7JVQUzPfU9dqfNi83FfzpsseY5x8K7KeQfVcEVWHrmkTk6v7SxLbk7KsYZ6vWjjBdPvs6s7wQR6Usx",
  "key13": "rCUoS1h1CEvww9CdhxHfmzDyF4WPKXbgMCffNNa3CLQ7hCqpkH3M6LqLXBPNJCAhX8TwqXywtkPrVzDphd11UcQ",
  "key14": "2Sfc3wHba9uNca9dQKzmJDNUbmeja1fpDu6FB2ZJWMs17K4RMoC85FLZiMZ8s41qytP8hs3sG5EeymdJg8GyT5Di",
  "key15": "25y83ejVymAG2mxAq3tb5gPppp9y45Zun8BZvG6FHTXE1PDL8jPU6FQiDhK3NTusbSQoYPBq8R6EznoZV1ZeRVLp",
  "key16": "AjzgS5mMCtgcUpdzCniu3ziuBBQ7CbbfXZ1b1Ya5eEJbtB8ewM964TMznbdGX1sQ8wB4LyHjvhxvnMj5HZubUDh",
  "key17": "57nHJg55NCKTMm4BXvSPf3aLW7a5AYPsrkAr2oAYTcddpFAVWw1XevPeTHttRhzAxoG67L6YuJo13GeWJ4JMnW8C",
  "key18": "49TnhmjQcsWjiUQ7iSVwRhs6RoTDdQEhimxxq6cD3rcsuxXXiZYyEY5ozdtgP2eRjpVEH7jJ2WJCxa9LnmWXsvGF",
  "key19": "2h8s83ZmvZYSAEXG1tCPv65poBhZsNadmu3fC7FoujkJ7dpsi9Fkp8xCy2C9jG1GUrwcjbihXNP9MQR5A8aqmu7s",
  "key20": "5w7Ub67bvvEe4UVUjHBKUfQUentSiyUmJk4GqcMBwhBbw2Pi1sw8N9Bvpz2kMtdhMTSwwcbf2fHxoZzFUnvVHo5v",
  "key21": "2W2zdK6gedS9HVwp5G2JDTuLhp68UB8Baop9n6hVcdzwqakaTHeN6CiWnomwYZEt8uXnSinEV6eaYALCNzFjeyCx",
  "key22": "2C6h6c51fahcXuWnQg96CFjXY9XDC3vsfBLc3xYVuD3kgppC6rDr6S2bbL2W1HUsuA8bx2J6UTX7axzYxYkkv1Gs",
  "key23": "5zzZqW1deZTX5TLcYPe9sgNvdJqB8GYQxTFj3URsmXvcpL4geV85sSSH29XCpc11AXxtZko4syVR63pQZfJJmn6o",
  "key24": "3drZL6yW5Wpqm7LCaToBuVzbKjbtxnnfrXMubEuw6k5Zeds4qapp4GrfoH7dBfBtCv1cLjRTfKxG5ZWczkqGW1nm",
  "key25": "4DdSr5tJciyYkRzN1z1afGMCMJURBS8gtTLwC8QBYAZrfiiRxBfbTfN2zGt3C2ghKP7Qq1MQkaqcspkqXuRD4gb3",
  "key26": "24QBMzExhQUsehJVttpp2jdzTSBosi5HmoFS1sN8szNnAdMdCX7u1rCSC4Jy2j9ikTDNVEEtavYiTuq7WkJRmZ1V",
  "key27": "5xb31aL5oWkF2ppxoSpoCTD3DuUcCDfhTWFkFRyH2yCTKWwS49ANPpf3etUb4xUQEihuYEXLVSSSyAq5GVUvvjQ2",
  "key28": "3fjwkCxZzqg3NCoD4c5ykFhr1YFAtwLjGYE1SRynimEEGzoV178wv3mmrUT2xsuJa1LyVnpvuUnw4XFe4sMUgxjn",
  "key29": "51U223bU3AHcujfmHFYcRazuQGNh7pYNp2jaUduTWPHHBm3qpSQRvqtTk4afByUZjyZVwyGN49h6VD7kitauuMDd",
  "key30": "TTqUibfhwyateAC7kZ2868NxCUGL7uUGddZbx2RMrX9fJ4A5wRYWuYkrGTEyNYMfQLTjs1g1f2ZCpWt5NYzGHT3",
  "key31": "2ETyT3r2bTRPnDSYsC1h7nw2AKRfGMuybRXZ1xfmnvL5n9TAnTTZP9mU4M9ptDRAEtrBzxQhVkxknVHLvpu8w897",
  "key32": "gqJayoUk523W9RVTfV9uXj1LpLRcjgYhHeH4kGg2zLNxYSDMNDVZgzyNdTmac8p6ENU3JzZCLhG6HtpYiCBUegP",
  "key33": "4QaqGJp6HDssVpKXuQHAKxW17wTPDZuvBtiYKcCidmPwDMGKCeF1GduaK5Cfg6vkxgPkX3QHGciMykVDsKW77wL3",
  "key34": "2YyBM8SemRaCxdU9a4XEZs5b33wHYBzMAjTM6t4aWYMkSvUcDUBzhSWQzq5kXaERUKqnvveUwX8Fxs1Lcbsdzj2g",
  "key35": "5kbNCDencMwSwm7UGSWHAHSYBm7rzhTqk5XbXeJjbQhR1DYQurjy4e7AYX65hfmSXKnnSmPKvM2tgQDLeQ2pYrBz",
  "key36": "38SdxciT2hDba6Au8bUgmcoyMLfZ1JgZqcBec2nBC8uBMWx8dDUUHcSy2JvYGkZkBdVAEe6Eke2ekh6s5tWAW35M",
  "key37": "4DqAR9mmxPLqoF8QwSpWUCsMGgCehKRES9nVh1rGMnA8skYbQMW4zVYZDJkpUu1dZCRf9rQAhodndPJuqkkXDeLq",
  "key38": "4oVFVmZCkdyEuRQP6ppx3rq3L2yuGtmPzbRBdosuoaS3EVPJE7JMJ5YudP7mMsww6nrxfugvaeAVkN5hg4BXkSBn",
  "key39": "3sDan5Cr7DDzvirTkCkWDJKbb2AaLoPLis1uMdfAUniiTGwTUcWw8qVv4mKDEKnzzmEWHvuC5TaGLB5oux6GR2iG",
  "key40": "3VLayJmbHJBnYX7wtouBqqM4TiTAUtHBDBt7ypSGmKrVk2UoYBZ1oJX98fCttKph3r2thwU98WH1YKhjEiifyduY",
  "key41": "5oLtUbN45EdPkU3JzZGKzjgAL9LKHkvfvoae6e5NhBeEgX3dbSVjgzM98daCuuAw39EuxMSSSUaqZpqrXrkcGvkP",
  "key42": "4jLc27unyEUWNhFr7pHJ1ghNqiPHYoXvWm3zYABPfSgJxPRJLHXUYCcY7AA5KUEsbZzBYskqibaqEibah8kkBbbd",
  "key43": "5cAnKeKGVsoa6rwYzcnemmdZJBJEGC48GAHo2N4SxvWv6owrHrBs8uBJK9ug8mBMYdwQsLamrKjgpCPVts76T8SE",
  "key44": "4y4cSS2WqNEzFTu2mjiXK7BGYXvpsMVDifGyQtxnGyYBQrk5nBfbN7WabZFKfQauuqVHNjL914Jrs5TKPy973e9u",
  "key45": "2ZsE91UU2TiCGiSBE9c3CR64CzvLeyRA79DsxQg2nSgXC2wui3VRAPiUq6zRmbjiWzhZtnDKEFrUxdbzoXwwNJK4",
  "key46": "5AXK2YbUvAiv7D2uAze5hruh5Wt7p7yVXASBVozyPbPkFLmjpiwATb2fUQNix722bDHkAd5478t5dgTt8C2BG1WX",
  "key47": "33g4GoCXSC5xTCtGxmAu7CakZRwMoZqBZMB9Lk6FSt8qukH9uHdBM5tvEMcYsmsfcWAVPj9WeTnDPNCVvpoqJc9B",
  "key48": "2Jdu4KhXkL4GW76vY9DJGTL6oeURd9wsiuA2rRkXkBythfENHVDmAoJc96gyCAoQPZajN8gVRtsueqaGfH19TVug",
  "key49": "3BFsW793f2qkjUZPodhovHUtUUge1eLpmYKy3K34WMwTUpWxW4T4jQJE8YSarEhEr5oTNEfeQeqJhRocLVdHT5Np"
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
