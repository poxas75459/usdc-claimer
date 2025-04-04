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
    "4yDmjPSbsB1hwqiGPbKjtWhs7GcACedKi36DJAMyTYLvqwp8FVmfNGqfr63s4bZaBH4DKseibiL3smroqDakTPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ANha5eEj7pNKx7QcjCc2WDBHKXEKdTZRTcLcj4mP61xUWDbqBtZu3X4iR3LVRw1H2mCLLKT5VEzUPiU1HQX1fuE",
  "key1": "3xEGQtUMWmpHbXEnhQJvPjg1Nw2JB2hgxgh3WpSsVcyRq1vyaHuLPRVQmRKkWXh51u9qmKvXK8pcZK7Eqk3doRkS",
  "key2": "5jzWPxk6fMc9C7qR98zg8AQTypkjTjMG1fTHAkkCajHoyApgeBWPWy6xjBhxacqGFbLxAR2wVWs4kDc1Nix7w7Ff",
  "key3": "3TBDAkJ6eyVFwkf94SL1tZ8QrTrFJP7gzn6H5xyEkmMJpiG9SBhk3c1D7FXfX1nGhLGTzsb65QqY4mmECgVEGSwm",
  "key4": "4V3wwyJN6kunoMmhM8Rau8wg2vogD3eW3megMsthLzimyw5yiyXzdKnQdqepxGENsy7dBVAY9vYYo5WUMtLjxwoX",
  "key5": "TmbVaAfcfigJwNzGBzdishjVWedkRGoAGmy3g9trp4c1sge1gyExAFsuHJS951CMqPh71M64tzjrbd3Tzs97K8z",
  "key6": "52Y8fH1EWfCr6rcu5Gsb6GG6PDbear3PFaV16yFV8wTAL7igZLzSLJwEMCXpVpFoHWhNhWuoh88mmBb3yMmaYYaC",
  "key7": "pGe9TzGkhkMaFRFtVj8fXvSksJhX2ffperHoeLfCAFPJ2aC1UNhdbXk1NBCCH83hnGUUYmuTHCrtSYSgySRUTJM",
  "key8": "3wvsD87SR5gzzdnGSZ9iQDft5AoHGZk4GXYyd7tqd7PibZC2pZp9S6CnQQCoSyAZ7KQgxrcDAiKWjEVfmRStrNfq",
  "key9": "2BJFpe7NgffCWZPdEyVRcWMb5R4JUCud5Ue5oD18TpEoR1fBce7K6PYFDWBMNLbHi4WAXWMg5VDHGPAcqxjagP3n",
  "key10": "51g2PnescFdXJJjjbCoDKBqoRRVckJoo3nQZEnJVr7e79PED8boio2opWa2jmRohhwK2yC1D2k3PgtovGFD5v51f",
  "key11": "5UXs2cte8WzCrJg4ZixmbpQ9Raety1cVfAQsqSSXhah7bhnDyA2hgySpSDBNiQT1zNnpEWKJLHADAaMoMHKcc1K8",
  "key12": "2pyfhwrUcdjaqZs2DhsTby28h7z9QBScRpCoUNat3J5f2Ae2dhu7DdLRHNdkcGNUuMq18QnmEUEMyfctSarESQXz",
  "key13": "2BoApFD8THDiYDtWQRCVUKkxEhF2cLZK3SdUjzkZzWXbPrgvwnJPdX5eQeKD5an6BfZXmv2RX7PiQVDBxYfjWb45",
  "key14": "4avZHtJtuTM9Uzoz69MLi44ER12GCdggnX63xor7DRDd8duW4YT7RTtQTXthqLJPwSKUBLqia4HNG3ujTfhSXQG8",
  "key15": "26mLwf2PYpqb5Ttfm9evNWkgMXDiiNNRD3EEfQaPNdT1hkZSVW6sLAdcQmPThf1MEucoXsxdVSJKTvxmEugQ6hFB",
  "key16": "5Ku2wcZ6poFPmArbrvShAG2fZu1ZNFVmGmCU8kGUUbvCDYoic3UCVCVdF2TfZ8wt5HbMGxeVGnVHdd18Fn4RcHAE",
  "key17": "4NDfptstPM8bP7HGk3iHJHBDvGYwnWyMZ7ovtNpiEZefEenWjGLuLqnwshri71NaRSE1nqB3KyC6jLmyUcsKsAFy",
  "key18": "2P9Aaa6mi5WjT6B3adUUezjAijLHA4kZjeNkgaqjFmYXuECVTiqxvsngnAbCcdXXcRPYwC6g9afrF5xZVHR8fYKt",
  "key19": "43xiSe8bak5TURxqC7wfT15NYUUD3VzzMR5zLFHVWR7jYuaYEJEKjUGp11JntFkL7j5RSCMgGntsGVASpuNpDu83",
  "key20": "2xajEsV9xaNM9JErTAjh4za1qoYkVo43ubxb3FqmpVn9m581EiKAHTABzkokkmbs3jif7wHc6UsA1Xp1Fq3r8ZFU",
  "key21": "2hDVzi9EnmZntANfiPr5P2Bh7XEi9N6b8s7orZGoGK5of7eaoH6L6dZsuHg4rXMuWpLWJf8EKEQLAPcApzg9dH4Y",
  "key22": "ArdxDbvUnU1mXVgGqwks8xa5FrtDGcWTqbyh3rRntVLthiwz5YupunRFg3qQXufot9X2ubVkADxf8EefC2DENMR",
  "key23": "5SYUmuqzSXuLLvSGiHcbaxHtJpsJiu2CMbzAmRyq87MzbXHp5qAgUs3WSrki1WPZZt6rxPKoS7wAwygbzrpPbAES",
  "key24": "2ViS8aqFLhDR3Frz8DHPzE1Yqy5fKZeTFmfvTWRziv1iFnuhztHFwpJbdiXXsA6JfEwqMk7NdThofoT1mwzUJKFT",
  "key25": "swBC8Ff4yKfzCFRr4Vfp1jKkcFSzEj3gnPTENpMbtibW3z8nc82uXiQgxa7C5bNCwinYYDq5eftrz52cdtHVjJB",
  "key26": "4H6WPcZ4HuuoaUM5u8cVJwNqR8FmkhU5XwYyCQrHcV1RQKpfLNonaqtjCnSEt7S5xEcdbV5iwBeTkHQUhMidtv45",
  "key27": "33YZyk9h7WRa6Jvb8T4c3TnNg7NdsdaJYuZx7GcGqL8Xbp9LnjnveGVs4FnLUVp4DH4UtTVowT1SuwAfgDocw181",
  "key28": "n7YMHnGNGTXmJmEJSjqgGcDzw7nnReUAEH4qxPYNzP72hSF3k8paYojxHfAMryMSPNjjHA8e5JLkBLehWmNtvUE",
  "key29": "3HFRUU4eZTZNPaDbz87xboLzDazzTnZ9CtSkRUeV57cBT6hwVyVgJmmEHNLxSarHYToKfap26KSZaisNcCGuFoWE",
  "key30": "21ASiTwDfqi9faHtzRQ2aaqsZDpD7hU4d9uzwjShidACpj2nUZyBGTtSTwksHMkKXDVCZFLiRiGKWYVSBun4FLzD",
  "key31": "4JJPdMH9ibAsXxe9ZkEtSbyubRuL7y1DeXbXZLx1LuDiQXfPTC6uKkEMRm6mZTTQNAg628vogKF9N3e7SQTwfEy5"
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
