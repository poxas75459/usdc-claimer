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
    "sPFvRRN437WPdehmutQwiLQxptmugToTPdGBuXg2Maertx7nyWvXdJxR7daj91VCjDBGa4K2CRfHkmuzRPWYm6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9Am1GFn8BYUoPy6jgvixi3QEuZrYYWhvZPy5TSfswDWuufqaxd4hfbjWzPz1ED3AqVFaBHxwf3Qg7CMM1cuQ5h",
  "key1": "66Wnq5eVK2jgk8sTauhXGGwxf1Kid19e25mB5aamaUwDRLAM9GyiEusWCYyLFDa5xkvnU8JRgWs9GfdZCNKKPbXD",
  "key2": "5gqHchTZHcDa11Grxh6RSszun87vgLp1XJF3LfGhXYZZ6Yaz8K7itgyzHVvrhRNkWGjjUWEaXWXb52FNVRyekj8U",
  "key3": "3C6RRkerJrFzz4yDNuFGXdotDF365GMFY4GAVtq2VtNZxETfrogR8aAjey4NiCGXyF6uEaqi8fBNYpvV9Y15wbL5",
  "key4": "SutJL5dkbpkzq56XJXWVVcUSb2gxD75xGvGQLZ918PhtNP753B42Hw1jsd8FrqMViLVXcumnS74Tz9REvwBjkA8",
  "key5": "2jwYJ1swoJe9DdQ742EaBRHQYK99LZwnGq7zZH7fEkKYZBVyA6TtG8GzmAT7e9ETGSRuaQdy8yDFJRFrWCSSNWuu",
  "key6": "3DhW5tULLzpcocZGPJAmwWeEyqE3MRBfo9hxjxG4zhDLVuZenFkvistJqukPkBUrMuVzvUjELZL46h9aadKcPRdo",
  "key7": "5hf9ED11s7o4KmwhevUpHRuH9eyugLQJ6SqERTZPk7NGSpfjLbFQa3RxXHG2q8VNuqZUUMv4swmqg8ZeQm7FHExQ",
  "key8": "2UwG4Dtqwt7e7VuhTJkWjFgA79KVZ9Dwoi4enBXNkj5eRWjYAgE3RWLWaZNSAjJw79nTSRqa93uDT1aw94qmmJkh",
  "key9": "5RygvPFMbvV3KJ7rzkjTceHgr3x2CtQJUtXeC59eoL6MkAHpW2GgiiRnNP5KDEePWrNCPn1CNfWDtZDAgR5QRss4",
  "key10": "Eh4M9uvehoKVTAjYv2kbs6kCyMdpswAop9ikVTA5M9NrDoHKub6a23uwZzLqv3hEUAN6hta8NWKZcnQ7Ua1P9Kn",
  "key11": "yBfgP7xMwGZQgmF9vdYFirEi4YXNGoxHbnRBBLgpz2hHoxU4SbyBRc1evLiffYCa1MmjFxDVwVc7nas734k3PVG",
  "key12": "5JVFVgy7spAwFtnryqjsfuoZTPzwXRn7jzGGqVMNdALxpXn7XYS41BuQ37QajCvRLMEryn3ywj5MBM9zoYZ31yHT",
  "key13": "52HNgBU6PvyGrvtrDk84dSEK2qDXA2zTmW5AhtmsjJHLqZoxY3XfHiseZ5n9VgjafZFQaaLBwm8G9VbphN8rsGV9",
  "key14": "62iVwPszeAsSqayyzGZvBQraRcDBdnmSvNpRMW8mi8hh3kpNiQkrZtxi592LA52PGzRQTezA3B4dQ1cqWiBy9N1C",
  "key15": "63NANKsuBAyf1zY3umVMUZ1n4VSci35o4NYVPbB3794adtt6zYZJtFhb7ue9uM8D5Z6JexkoikaP5yUXPLaxePvu",
  "key16": "3dgCkkkxPzM1kCvYE9cpJq2zg8HzKr2FwQGGXwLkTMTSxoEG2fMmUYL83rfRMTMgbxV2kzgNN5zw6ZxYXByJ6x1J",
  "key17": "2NSZqEGyesuGrWbJuCjGGzGwi7V2M2Co8g39avAjEDPcLurTciSFApscxLKWbkAeTDRsKfGoffs5NF6HhkfdkPjR",
  "key18": "2FCyVccEXBU8Re6adbamBQXP5oxbqgu81yJK38R1kotoiKF5xBggBUhx3QeGnDJaBKBER2c3TM4ZsS46DJbPXouf",
  "key19": "2FTQQjEkd7NrNdRvCTLaZDxxsCs2ZSCpwuNgYixSGfXpzXegoyrm1dZzPg1aMmiyZoJnhBBxzNxPhB5xuqz8jDBj",
  "key20": "3E1L21oxtKpifkRcJswRZhzXTjGkvKMRqQuxZxQEuJs9aSFWPc8iwAHq1eBjo9TJyzZKAkr8RMN7L6YVWznkkzYd",
  "key21": "3GkBx4jZn4kmhjttq1w3uFyeiHoksdtQqGwJqr3pBRSFtD43GvFT4wDNk4Tm8wwgvyaTvFbnsMMch84Tb69QxeNZ",
  "key22": "7d5KADewu5m1Jp32XQEXTBVpehckxE5NVFV12M7X3LBxB1ktCEdUaJTVhnQMebDvjRM6bEHK1nuB3oqGqHMhDKC",
  "key23": "5Xu18xiX6Gde2EBm9SQiT627CgDZovqyQjGSrU5Wnj3nuWXQs3Dz7SGu57LQNh9PvScv8eCzVknAXdqjpKJaZL4p",
  "key24": "5Y6siQsjZKTWuwyCVvEs225tAfqmSG4pLhezBYTyve5EpWr68ThSCnTAiRJ7LWQSTAawsoeV2hWF1iTDGHHZwFpn",
  "key25": "4iG513P6d8GMrhWbi9zaorm5FuHkmnKcNCYk3Uhek8jBRWZjxtgCDQa2YQDiNsWm5TKq3f54kSmE2gERsWXs37ws",
  "key26": "2FfbhZJ5axSgkSPrronrzMf4UxMCPCTeAVbi12BARfqwmrPiUrx2x26yYBFUKEGzBLEMMg3yLcWg5qTKiWxZFBW1",
  "key27": "5bCRoQhe2HtZHfBaAbaR47pLuZwacXiZcnCWnG8TSKAZvR3pcLDqw5Kpcn1MsPApBXBRDF3ozuvazka5eCWUsNi9",
  "key28": "55xM17xBBtWZWUgemLQW5NWio8UxYZQGLathyMkk8PR5C668VfQymPG9xC9mXSQdNPWDkUC8kHwv5VyZjEqhBw4s",
  "key29": "3PoKtgteztTEkDbwTTz587avKo9Mmz41okqwoN7BsGstf5ak9vaQdvz8NudTXtWRFDvjwUXCwGn5VjS82kLzcgu",
  "key30": "2D7cfRw3JU5w3mTcbvzcHozAdSxaPrhYgyYQYHdDnCG6V3tSHBKSN4GhJudWbPy37awrA6pE6PPEeF99PmcL6vef",
  "key31": "2PseKFoF32zjz737TB4VX3kvaKyA85HPWMxULfzzojfZi9qojfdMttTi7tMHypCmHajk2tMvJ4n7Qngce4xtKNFm",
  "key32": "2U6bkrQ6HSe7Uuh1cfjZVfMtaEBLgDihXY7FJPFqPeTdRtvtQHkgpgXMvx8ZC68HkyqKQdzaxU5Uq1a6obRFPoFB",
  "key33": "2Vnv4gTy6QKPNTfYbCyWF4ipLvnJdPHKzW4rmbADuK8YzAw3DrYNyfR3DiqfHpgooXsnNRiZdhnU28fECccAMt1s",
  "key34": "TZTtGnuxouajaPhFAw8widMzhWE8bvgmL33eoqXFFKvNUFsP3KN7xEWyKTWCn21cKfWKFFh7aW2z2SGjdPkBwmW",
  "key35": "2Hcjmb61CDZxYdRn9XV8wFDduJJoeQtPmVxqE9qQEpt9ADyD5cA2CvBzhwb9u3mrcDugXawfkwEWGZr7B8VGcDh5",
  "key36": "5PDACA3p39BBR2pqZrpTgUNBnuR5q7i1CwN7nfn5DqrDkaBc6gkBRUyheAkTepx8E8BFrVHeRLn3WUCEU6nedw8X",
  "key37": "612FEWo4Fmf8WWC8EpgyknscWhmtzC4VCCYotj2HVpJ8w8qzobJWxDTBX5Lrp496s88bnG9jU3C6AQzrGFjXeeJ8",
  "key38": "5GhD38JC26ixqkccPPMZQAFFiM8RAE6jmLQ6CTkLXULAEsLV2FpU8pb6hjHPW18oXr1mUQjPNEtMWMbSwqpjs4E8",
  "key39": "4EnEwZzk17Bz3xEkAEcoRwBMycGQuuoFtqPGq2ZQXa9HNnDUj8MCNoapDXbt28DEmjx39sniPa8dMkAvAMSyWhKG",
  "key40": "4ozPTcT782fHmBiYfSkyVJTujPKAYd5Jsf8aGLE2ASQ2xGDHkquzRTmmBVwHxuH2Mj8VsZonQHqq46Y3tW2WJgAW",
  "key41": "5DVzcyX5UtsLdpjHdspeexJhqL3ocZv7qNXziQhfmnFzy2UpuvaFYeZjJZxH53ff5AmxxZM51BnfGy3Ygqqq2AtW",
  "key42": "4XgTCvxdyNdNMyVuYSAsTdauxMBpyk4pNnPEYwopSAZ6HW7QdyGcoDuNkR51hU1j9nGajc5YztVPFxHyNUEjhD5j",
  "key43": "3Eaut4hafQ5gvjvdXUQkFYDgQfMwDH7QytbMMwX8bGZ5xkJeWe1ZUE85BR7sD687TuxU35PUd9H5dj4XokYWAQM4",
  "key44": "ADFUoaonFUCvQBedgC49ZWA5cDQ46cnENwzxD5RX6oDk6kcVLMrDzheQ3Wcqdags4TepGjbhYQZR7ymqm7vr1vq",
  "key45": "3SShsMRTYkjzgZZp3Y7b5Y9fUSFzrouAWrzBhqQL5YxRnE581iHyTqSbMn3uS5tRmLogn9PPLqhnc4xbJf8Cm8rW",
  "key46": "44cCtxYgwUdxmoNNTL5qNjjPugWy29Hdxsbw8BqHzisQGnJpbkYLJfW5LzuycLAqQ8fKE88YJEDuE1hGyKNu1CWM",
  "key47": "3rpBFuLRYNzL8Y6H82C6wX2AaU2gUCsziCSxUc81AYZbw5UJFGQ8nPHV6DnNuFFbL32k4Bx6TiAmM31GP2AKc88a",
  "key48": "5wLkuByjk6kStvoMGdPG1BeLiq6NjRvVVx1u36SEAtNNiGiTmo3QxTs1ccvngoUW1Y5ptKd5zTiy2AnarQX51iAb",
  "key49": "3QYLuZzQsZFZSfRQ1ADdr3FKDuqc6cQuZoCNqbYfGPD9sL3ovgqApixKKXJgFzHJbjeJWncchjHehLMF1oj9QAKG"
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
