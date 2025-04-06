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
    "3Crw3v2728JSbxrFB7wQB5Ud44Jc6QVxDB4wDJsirjtaSZPfMAZKw8RpxxDVtyZadGh9jgztJohizDVuw435wgbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8tRJdLReomHUk37hfCdDL3ZvmA8JYdoRkGw59cekStPzXBbLcfRUo5A2aH9eyZpuuwDTbWuPjd63HaGnWwbtW3",
  "key1": "2Y6ypYEAeTku4tqhJ2kKGrMSag7y9Zdv2txCEz4J3tue7qq7tQvYfWPHX2jHJ6nyFLD4oFP3VnKZcnhNuNWE7uo3",
  "key2": "2dFpWWUhmgteh4KBgQ9MXxFKjg4pt6SXb4SVTXrDE2TSNdr3awp5seLKNigrKxrPF5148PiAGcXytWjhyqQdzP9b",
  "key3": "Q6auQPmNubKgoAiZY3T9LuChLJxck1MpS8y58tfz57VHyC9sWLoAvjw2MimigtCW9X6FGPrZDRMSwmDadgiHkc7",
  "key4": "UVTgLbzBHZuzyyVi5ktcNtq46AQeqrbeEvCd1bB6KSRXtDMiNB2gjF6oBeNyxsyJiJD41gBEzRCvF9S6AM49V5H",
  "key5": "2njoMsonoGv7Xoc3jCCcd8HisNVR8axZZc5BGDff9AQvt7Wg8nVKQhmGQDs57ixVjtPFsTq9SVRyyQu8xev85EPV",
  "key6": "3A8PfL2rqSYBhR4Tki4HJSzEQx9gg6opxYMWK177frhtXA65WaW84H2o88miozjhQfBhpqe4eLZhg3XzEgeJgKFz",
  "key7": "4W4cb3wBUS237mCZJdHULeviYHp6o6V5w8kHaExFdJaWUeTdpsvudNaEGHzF1dr5ku99vEfNUgTW6HKfxEC7jZnM",
  "key8": "2M1J1DXK3WH5N9C7vtW2J4Awpbr11D87scY7kh9LHnhvh4vwFCycvQoaM8kUzSq6socWGgNCY7KJqaDJeZto4tDt",
  "key9": "2mXT8cZDsETzZrvbSiPocafz3VFhHdRHTeMQqgUp543iiUx7RqQEny3MwtQe6Wtbfxmz3b4PQkmMpvjgBSThcRYo",
  "key10": "64iEFoKQwiLKQsC2FgAb4L1hPk36kihJbqoHF4GAnMkpaneAEPhvJHunwb8CmbGrECXgCMADrFgDeFqyZrwrjUTM",
  "key11": "229kFupJJDuBrJaxEwi2NhLhszaro6d7X3ZBsSaSY7qCFwgBVdd84cHMHZWKMToJYgXmksUVBQAhwc6zSJkf2gSf",
  "key12": "r8V6hs3j24QGQrCviKrnqMadzRnEEQkJfUh7rwof4HoX1amDxX6a8V2qtVGJkf83Z2JvVCtCb46V3pgWzJdtozD",
  "key13": "MexKGECQ2opMsa4fkX9BVxSM1t9hb1E7BB7zEjf8YntsGRFjKd5ghU9zrqGYPVtdYV6yLBV4QXjpuWRAUn4WAAH",
  "key14": "2sgaURApV4juW3AhWfi3gtBH4TE7FmgtwbrLF7fXtWdWpCX9GDPBn22LPHMeYRm3g5L5yptU7wLEDR1WFGb4Tmdx",
  "key15": "3quoK86iRC1fAfH8H3ZiFW9GUzmPbPzBATUPZnVdh9a41y2cRWPvUhDxn6DJtgf1vWN6k6nran4yR8pWGY15mpAF",
  "key16": "2NHsGhQMxxY3wJnFeBjrEHHZz1rfpjugCK5aFttwVkBxMTVnBNfY93kiS3NuXV3a4ikEWdrHRHTLW4356cPB7LVN",
  "key17": "5qB2RjPM9TK3z9Zbt8toGefsHHLiyagkKt3E7aX7AgED1KpZvzmv7vRRJS2fgetQ32P4kJxY4KAeRRCwdZmxhudG",
  "key18": "5Acpk4VruepTquZ4qzVXFWWi8dGsuqB5Uq3n29DAjhwFK18PW3R6czE36PN7gpGjaQzEsBGecmeMPtkZq5iLcWyQ",
  "key19": "2dgRvbYwGK2fT2WESyagwxDNmX3Whc1fZSVnQj1k1eWHTuVjoiPCWoH8JCz84hZ5W8jWzNgXAyWK1Hz5PdvEFgMz",
  "key20": "3KGctnsXrSzVwQfht4iX9t4Ju8te6qb6aoHB5kzHf9S5prwCDiMduYYMA4DbV5XVrnoG2EiVDHBwdoaMNvR17Kts",
  "key21": "wb11kYyfJBmbjzzrG5eGuETxdiY2gcQLEt3mJCvK3N4UGhA56p67eZ4Pv5tsmc3Zc4RPKMWQbuuz5VruxA2RyaL",
  "key22": "3cG7bTQgpAbkHiRnKJ6dy16JSBaP5Pqyrudkb635z1Dq1iYVaNgtySBBn15P9p39p6eGFKkLppZBqbLtmbCVubXq",
  "key23": "45EW9aNEPcBkTMCNLR7PC4RLfKhbszyzvj61jVNeDbnf1tPCNFf93YybRV8QcBFUV9XeTJRQeWEv2F8jyhnnFC3p",
  "key24": "3awhLrTrJiX9jyUA3stb6RHQrvKori2HfgsQE3xP7tMhWLaqdmiVbDMt7LXX9QBWL7fYRtVhSMMv1AA83UMH1w6c",
  "key25": "3UKMSH1UwjaeTwn1wf9GQR13MrY3YTXPA48pxBeYAxLeeucvsc5yrfcD3YxsBvbVKcXwWh1SyjnBEVrW2EZVSGyN",
  "key26": "3kJKmz7cjp6g22z5s2RvYJAeXKzXcMwCvQKix8xeqQJyCNfpJYSyyNxYa1oVYobRy5G6VFfjMttYUKbbjP1mjvtZ",
  "key27": "4vXWbkxizveySeQXB8oW3EbeCty1oRz8aa9uecufQzAe1kjTtKJ2gvTUUQoLF4NNSkmnvHnD7tPWvFDNKAZQftwC",
  "key28": "2GbWHP6BhR3oyhLqWKmX1wJ6hYkHMjZmJXo4J6tmVS9DiYcgtvjHtc2a9Z2dQT49RWa5Y91WcfrCBewUuiH8xWk7",
  "key29": "4sg96L4szNyFZfpZyk3peK6oTnjgezyU9xsbbUMxxXGoroS3sBCHCrYShSVunpxjwHpioxSAcSygs62TpqeNp8h9",
  "key30": "5DZerQNes6WRbykWxfX28mvMrrR7bKDa8Y4gaxobqU4J6vX2uAtSEJhHQ1AHhZqgpFt46LbsFVmNRUh5XnSBTDsy",
  "key31": "5UjPR6E3tvHL5gedQfBfZXP2q3smmmxtaqkBC9a6aikGcfh9DCz69L7usYsYVDZdDjoDzQ6RnvuJMipQtJwxwtJn",
  "key32": "UzVjkXb7jFdBhy3ikcfxN4jXDWhdmEDnv1Qxguz9Cxv4cXHj31HVHi6iHFJ3oWpCaVGwn9RYgCbPJHpASttsrBm",
  "key33": "626igi1zMJXD67NdNV8LyhiUmsEKXytAN3V4oFR1EWYSynPWjRqXo4DyP6r9g91XjnKjJ77yEWtgb48iWJjwitgi",
  "key34": "GvsqE3hsnMdXq2LJsASyVC6mpTw2RuJuiQFj7Hpd4DRbGJ1pTb4j29df3dH3TCxwvR3tUFw27kPiYw3NhdaoN8W"
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
