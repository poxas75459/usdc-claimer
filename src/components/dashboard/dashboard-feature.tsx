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
    "hFjDXXFRwk5ejVsgAf87wQrB9PUuNjJeP85oNzq4712b8K5JahpgnuQdmVaWf2snnjtQFQiFa8jMjn5ViroWokS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B6mkPc8NaXG33jJ7fhCHQyfABq7WqqbFZyeUY4tLW7fHySyzkg7xZMos5cLghYU35B6aovaVqwrecUryqkeSJde",
  "key1": "4cijCSdXX34vEfiNAShMXpJHrqoiAeMtvPoS221f4BNevNj6VtNg727vznRA9NUWeYP5AjUJeaWknnzdYRy84rK8",
  "key2": "547x9FcD1nWvgoiEe7GCLAtLhsL6mZJk8RM51YLb25Rs1shUZ5BQkxMSA8UbiKHqWruimzZTTDrcfZizV6S1NZjj",
  "key3": "4RSouXWWqxc986XNf8NPqAo3Z1ZSptgKjhsVKrwHrE1TyLqZej7GvPiZJwRQAr4E4SG7Ljjm7QrQLYgzKsKQSbiS",
  "key4": "51CpFHqkdW2GTv88WR4t24NySDoJ1XXUSozdWNv87GApc9j8mZw7sLDGE4njvYrJpnQnw1mAi38MpwdwA7h7864D",
  "key5": "mM7NDAYYxUWRzTf92MhTN9SvXL6JBgwqDruqNErZnyaA4WCP54MMG9McmpJe6RfCFkYLKBY2ptp7Mc2LMydAxpC",
  "key6": "5BqjAYaSsp7Mwj8XndXRX7YDqTVSrqV7fryRG4QHDce8Sp4hTyATxGXML87ZCZ4T3m7nh9uiVGU41rLnCcBebEVH",
  "key7": "5SRMrGLdWBdUZdQko9aaCnXA6g2vt6imRb6XPcpD4eW5DkmytiW7ESsz5KNa9Y9uHd47gLd4tucCW1Y95CTBwj8i",
  "key8": "3SDcHQ1CkyDzwfppgvSMV78RRKd47xAe4CJXGNkG8FyHUj1dvukEi1n4aKreof9soG5sbgnd7jneode9q2qzxCkF",
  "key9": "6o44au3x7aNYXaWTTsBJRmX9Xkw7wN2FiKhDg3uR22JDm2d9cuzVJKufgUkchRUR7SKa3FvZyjoWKybEVJdmJpU",
  "key10": "3GY4x2TXMhAx1TdpCuLgBzu5YUge3ndj1WwWHPjRYKzQkTejmL7nBWoRq2uHhZwG2469JbCdLcuT3pqhHqg4yWmA",
  "key11": "224Uepfck5F7Kv36nGNiJqzPY96VG1EkkkKcEZKdpiCTf6bxP1r7HKTVZi7wTzBkpdtwiHoVQcWzQVfsBrXwyUvS",
  "key12": "bFFMwKCaA7mLRxUP5V6mxcZcs6wtaCJHVi7WSTmHa2WjnVRZuqRiLyNNjJcEv65jTqC1Zz9P67YsdEHNB3JHEHz",
  "key13": "5YpH6wMSyq8QpCh7uVeAK45YwWiPBC3hQyx2BrrCPSvnVUdnu9YSsYEms2fcbD85Zasnpd9opNDerkMkyJ931HMp",
  "key14": "2EscKD24DMsce2Yz7JhMUSEWSamDNB75rx4DpiGzRsVoxhZf82HUK4JiygEckUZsNR58oFGVA8UG6ACHKxbU1ZMP",
  "key15": "fRK124dMhpkVy4B1SBCZFkCDJmzy4mnNis9AFKLaWvFjLTjYnSEoH8sFVuvSAQJwTryKkE3rQTk7YfYbyfSDRY1",
  "key16": "384wC8ie7JKsyzUFRFtMec1af6owKMHViUPmqdQkT9Q8jeiZTrAK8mJuR1ScUcG5Xyeg3joaXASLwgmt1yWqN3gF",
  "key17": "2PS8yu5osp2mcG8NAPXhA9QpCJpHQYURf2PJNVHFVih25FtEsTbouSGMZ8GLpQHh8GbcybCX7d4Cm6ioPv9vQ8DE",
  "key18": "94ufe1BQTTbodkmVWZvnfoP4cuqTbro2f9jLXQnSHn5sAUpenUGXEm27oiqp9v8Y9JXuSnftXqHBkw5X1dW1HFV",
  "key19": "3BNJTRL829KZpgTzELdsT6NxdV7MFe3qcc8S8QNgbXw3BfmsTsM4e11qHVpvwCVgeSVgsVs1oDcNTkieHTankSXn",
  "key20": "2wsHhMrJkEPZVp968SK7V1md9YwS6N2JoW2XpzDWseQGj8AMaM4MxcHq2WU2EuBbDTBbMbsEb5xqkxoWZteYiu4n",
  "key21": "2BfuxxucJu8rzhtzRhgMQY9seiPDoNsdXbXdc4QwgjBkGAXWjmqYAB8ceAWrNrZhDcE9Cdit6SzZEwNWuveotCaC",
  "key22": "LNL2rxPckAHZWqDamD6uApKyzVpzhyzGij5SaMu7LTz7ZLkxJDGpKXiYvCYf3wmJVGZZ4TGzAdoe4fMR9VKVUXV",
  "key23": "b7UweKv2EAGUxNb4mBut2qURF8ESqm6s8RhqhpaW8tpk4BoFir6LwCqPx8q1C5bpUEqnz2P38eaRg6BaoFWSgAi",
  "key24": "57vxLxF66V65tNytvVGyyPqoiY7JchppJGKUrsPYiQ5jAV56SuAFoTWqDSKqszHJi7TTAmrS9rXYrXu11kyeq2JZ",
  "key25": "Lji2iffvCfzpdqMwNt9bt8L5BSyC3grJ1bLBZC12CwFhGjMgLgFEuxqpkJ62usr8Y1gqx8GUkTXPVBPwbfWuVjr",
  "key26": "3qLmgCRLmzTuiZiD1VVtcmfKsugrP2qEzh39RdHRdMKML9GT2BcaGdXLGUyBa4HFhRZ87SCAP6YLGNjBXYGx6gWB",
  "key27": "2u2G27VsHRPY5J2yKHPLEviRyP8Tc3RdZTicSpegSmmqN8e8Gxtoa3JzRBSHJAw8cvkK4WAn619bYkv16MfzMA5D",
  "key28": "2Au9b55MU49w6ef7tAoz71XdWMP8CwN4rxgtzZkn1NWruh2Z2Ty7h7xEFUk4ktJtrR8hNWbVtHH2SVyS2V9Fp6oQ",
  "key29": "3QazW1dKuYYi9QsNFF6X52k87kLfiJGH47y4uGY5RRbtxqwWhkLxsjuxQuS4fKhViCJZRDNY7LTmJoSgB1GkwMaD",
  "key30": "4KSVVeFqw35aryEVXpsJiV7XoSNsTsq4ipWFki3VSHchoAXR6DhoPBVAzbeZXyRZWKr2RTuH3EXjrTU9nfcVfiyE",
  "key31": "W6SdskRewSkAUWSN1tFPtBwvZATEGxny9RYUuhYiBZgJsqq9FpFJryEcsTXcWcgpJNfTx5ytv9pmpkCWhAQqfXZ",
  "key32": "2SzRzDESaFngYMwfnN5SKNnZkHagd7dc9CNQahZfStUSkGMPjLPfF6YemrKPi5bgwVPXgsyHNRfWrn8rGxaz86k8",
  "key33": "5iLCByaUYGMFCLwLysFx1r2a9VQ2znr4zV9ZyVpEavuP1PLf41PxY1SDoFSNS1pccYPfuYibk9BdXWD6QdY5PBFU",
  "key34": "26ZVbHKaZ5gC2PiaLCVLBVWM7R3JsQAHehciXHr58Twwv85N7yJJeSvUweGo7zwDbhdtQPfxEhLFAtRixfocDnEL",
  "key35": "vHzoW1fNewuHEeYd5B2c1mPtnqjMUaK8YbzNXVt81LZuARDPBqj24Hv7Mbizpi43FbxrML2arZTApby4yL6hxBZ",
  "key36": "32quXHH9dUBQGPA1EbeepSZxzw6N7y3eVEW6tKqzqchuvHY5iyPrsHABHsarbVccYo4qrsuqZuAYNm7xX9H7Q3hN",
  "key37": "5YmW8cTVCMcp7uQ1bzvHmb5MbzGog88ZNLrGLSGjUrrVMpNwKPzXdvqQkjNM5X54zesDVbqDvDdig7qfQP97iWuU",
  "key38": "2fwRcsVttaD3hXUjHN34Hz3znud5K34XiYexhtvmcdsrZ7vxkJDVjeHK7KDzuMnebR6fPRfbBXEYJYCzhKh2a2JR",
  "key39": "2C8Uwm4hAgegveM12uvK3bD68JPErD8CyLuuyTkHDLafWMdZRcwFkaSKEnYVcuBbJwoAxA8VfZCHkDP176EHfZLQ",
  "key40": "5W4Zh5GhzYBMWVq1RKoXiP3VJZXkUygph34iEVnCU5GnxHyPCTumoVP9dFub1K8agRkAUEoPTh4m5dpTmmqPsFMh",
  "key41": "53SPfWqJd6YDCXRNqRvEDM8qctmypUGz6fyyJc3zc1JcgfctRZ6NJKaG5mau1oPie6CJWcjtw5nbTXHEji3Bgfpr",
  "key42": "4eZEiTsVz3Ut5qrUrZ43iYvABEJA28r5Am976tR1thugsbCuNnFDMqQmfd4fGD5Bvjx7z3pA87bs6tskSY1MRJ1m",
  "key43": "d6fat4KJxdJmb9dDhqNu2EnT1vrGgZDVcbGqdtrZdDhP7AojXn8PUzWVJNwVyjS9gFU3NELUQzEYnRpRugf5GwF",
  "key44": "2NjCvkvm6mcmqFonPonsGaMa7UBF8m3c4TCjkBLMCvhcje5ADxFKVruYycatF7gf5hWAp3SsV8PRSyg3w5v7G8yM"
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
