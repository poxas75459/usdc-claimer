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
    "5JkNFNeUgFZSuugnshRCEzmaw6os5RKvePRa6zxw74qQ532uxxkAgxe2QWjJmBhWMPqMZnvXt6ZiZNtkwXc1AU6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vGv9TGfe6feUpStPxTEDseiGaPXcYeti3CCrLovLCZJ2Gtn6my3e8aJXyWcoNvQFGjr83hFxZKVDhtS1AWiXfBQ",
  "key1": "4jGZMc7UnLM54uWTn551MQDjjgdMTZe4GUWEUZi1Sd7B3zoDgBky7zia3HCszC1ZTUsKvy3ZvN1od5DFbNPh1t25",
  "key2": "41es7uP8pxLT93ExPVMWWCQpaUvnFzNvHz8EQnoYx3fAFP6ZJMzDxS7xiNh2nR5B4frT6Jkobimzm16q1Y1dNKTE",
  "key3": "4G18PSuScPgDS9iDuChfKKfcXtkLoUiQWpDFUJs732Attw7V5en7orJmZos2hhaU9uoAhWAq32nUm2Sggtg78WRt",
  "key4": "wrMyYTKoQ8EWaawwGah8rWqMvrAmWHVqLPirhvpBiF1i95eApj1jxbKo84gAsRkubPMsCP9h8f45nH8Un3GLp6A",
  "key5": "2ADNmFLUBYQZouCb5kd6ogHhc1gxrfthKoEMRStsWkspGjqimmmCxLHGZKYSoXRbqTmowrJWt31UzGxAwrAbv66r",
  "key6": "5oHcAnfhEhkgXUPSNf74N7fdAr6tBdYVJcAXfSxiPxsPLfDbgX3L1jA15gTBcv67Qk3skXAo42ecCkNzeYCA9aXQ",
  "key7": "T8LftT2yHAqWAom9vTvgq6X7CnjbXV27XwQZ9nVFcSkURMuczSVXsfPGyHVk3SZeYR7Bpar3bctxVsmEMyoHojM",
  "key8": "5nbi5Zt5Jy4L4s5a7AbPcMHdMpw1QgGVZ45CREz1G3CJoqATwa7fF7TTS16FvPsqJLRU4HQo7bobXwhWEhUPGdQ",
  "key9": "5rKKR9qezVoKgS1bHEfbDFt5Srf6UDLswS3m3n6PgXorWDD5yfWri52yqMbhoDrgcarUuUsusp8bitVCHL8JZXaz",
  "key10": "h58GCvcYJBLrD3TWG3HvbgDUWoTwuDgXfTeXrZSoWJ7cy4Fg8Ho1wGsg2ZQEJ5t4rKZBkU7chnYQ9kt9FSqDMGQ",
  "key11": "31hjJxWzUyYM96HEdmA9unTFijZJXiwrwUUn4kFcjPsFmiYTcQbF9bAyPH2Jv88osomdPvg55enuvT2fS57ssUMX",
  "key12": "oDhx3KzgXV5KNcdWxBNPrmQXGLTpbM7ceyPetHHBC6CTwnaz5kQdrD5WWzH9QyRaU3zdix7fW8NS4tspFdTbtdA",
  "key13": "2UZHx1K9KLxfjm5h7XQpi1jdnqEFxbUAnCZi6waG3CMTxzmuRrtKXcBDpGfRHvXQZ2v3E3qGVSxt8ii5KirwgMuP",
  "key14": "51DhdLD8JVZKwEiCDuQBLYaZm9yfZ6JrSJxcn9X8tpXhmUfFfYddFN5pVfTkmSHSk5iDos4iSCTc42BeifsMH2fC",
  "key15": "UyBoZJU63bH74D2SWVThvDh2mfgiXZrNy4z49DTa9sp8MX4gpty1XEWShNw2kH3KoHmGfWcxN8o3EiMnF232Hpx",
  "key16": "5mtmdPJqTFdo7gkKorkHiEZtC6ZXbDuQ9xHR1Xfy48nyKJenqmRuKfVqPAFsZSBDuA44kHr7Vt9bz86E5VUotH9q",
  "key17": "C8epFSgLMs1Ux7YjL1fFgrRXgn4hsYNejjMdyK2cXh6TUTVFznuFDdAVCa1mknC6gE911Fyz1EdA7TczkMUsEGc",
  "key18": "67SpEem2Zhz1LsVCafCXQzTspdESdD4iVBoFHASUybXeHB3t97djaE5bRWByVPnQDJ1aNDqDQpAnSGruRTALZK67",
  "key19": "5Fe9sQ4fBWhMDCQETywpYhuvoZSK7SFaz6i2pKC71qjifnifyc1dbKSuxq4AzeVUofbv4JpGYTZgAc59UjSTZGo1",
  "key20": "r1DtV2RC8i2haRRZvEV7Be3XtXx2J2Veakw2h7XQTfACTG8HYaHY2hJRbJrGDWVpuVgUSjV1L2w7xYP2ugijB9m",
  "key21": "3YBufXMgZMpS9AzeXsss2L6orzpDCsLA16zgVcqRv7xRopWk4oZStwgYuX4QBRZs6MxKvZft2qRDjHxYPbk3qGxs",
  "key22": "3HGopUcpX61mCotvYgMA98wTofTLfYoHskEpRCzJda4i9h9wjwFdNET6ctxwLgXWb5eqrXsnoCeMfx25eJZkuNrP",
  "key23": "vcmhc2YXxZaw2E7U1EpGpZACZg1PavL56NM7zDvhywwujWUmZGn4ieh46anRY9HmgpXUSs1YY1YgtnhqdZ2AoHQ",
  "key24": "52gp4BW6xZvaaunbYdxVSiWzyd5MJHa8vWeT1dYze8XhJff6vQPD5tdx7muvshpU2nwuAYBLwSiCtGoXuwdXtrH7",
  "key25": "2G3rCXGc4fQsbPxKSLvEFPRu8aJ6gqFrAmCVC7ebqxt8Bsn2VzFbbAQEf9QmjriAAKC3V5C9qGhm6TmK6x5Ah22",
  "key26": "5jdKnv1YhKKe82VNz7uKeYhJ93c7L6L4ZHUA6HnEKFBUaJHdCBRt3Ca2vFXvbYbcSaJ7S9kHywS99quesEHUXNVw",
  "key27": "3M76mwv5bqDk3vsZvzoLjx1JRjHnFMbHq6z2usa9X1mrV4R3t7b6FHWp1TesVYw8b6ZMJup7F8QAfA6RGUu7E9Ze",
  "key28": "4EMQV8MyJv4gGM6KoxdhiGB9HgiYfbnMX6vjtfCXptJwpsDUHN85LEhVN1L39x4yohUwACFP2NU6QA64sdSXqWd2",
  "key29": "MJdYfUSBRsjTAGqgDr8e2gqQwr9mnB1V8gNyy1fgMLA9mY6Y8ni7CRBBHJUjXwfKMUJ6f9hNPuBAfjgNC7CmQJ7",
  "key30": "5Gz4aaYuPcNhPFgqSYnvSQAdQY1aaRW4vJdALtvhVt73CGJrSiKCV8NVXK8bNyPJYrZsnkTa6FKCASAbcnJJzw6t",
  "key31": "2uzkY4eJJHahoBoWXFVYbHb7nTf1vs2yzybe3bQokyy3NVKtZQTKNzD5SxSrXjzhx5SMqqs9Zjj8kAuxcxAmsRi1",
  "key32": "FpmkSNXdizsecjogusRWrpGFzZWC9PFzzbxrrtoQqoK8q6DMwi1R7EZdeMZ3Ca2LftomNxD2JE5GQHEw6Aa3Zf2",
  "key33": "3yBYUQj3TT67jdMbEPKYzUASR4NLVQj5Dxt5snWqtUekEhaoMmvJHT8oLvfn4pDVHQP25vdmnwcvogXYjwpW3Rh6",
  "key34": "JBdeqKA8Qo8gAfGkQY9SRwJ1nufvjQiGwGi69yd7619EpfcHaxXvvQHScvzoTRBtFB7xGRufa9wfSSfoVK63XrV",
  "key35": "2NVWS4xpGLgx8ynLE3ANBjShvX9i6wtZJfwCvaKkg5vo1syxmdJsi79oEzLJjPdZGZJ9DhNm7nGMNNnKGVzxsLxG",
  "key36": "41tnn8dhHKtJ3rDo5TBy22rUhax8xGXwAu3rgjw6EBBeJf3WM9n5Qv9ZmHgAVSaB1FbudrXPA7PP8v7q41k88RLM",
  "key37": "54bGwC9a5buCyRpGZuYEDXAFL8Qfc8sgG5XFgVca9sTiEnYs9RoHW8A4Kb8zkaAZXFvrQJ6W6uqhSQ3K3nxBAYZ5",
  "key38": "337MQJ1pV64tZmNk4baVHFgnPtDbFMGEXGFoQi8HoidKpNTzEHKf8jw5NRFmuqMbdGjEWhLpi14ukgUzbCbnxHim",
  "key39": "5zrVF6Bj4jZUqz4Tjin1GvPdnnxrmkTmU5Z4dad21VTtYjHLH3ceW2MUNZfHtpXuespbrGf9oawgNSwRAgigw9wU",
  "key40": "4mtNKVkmTfRQZsuVVbLMqGPoMYn2YeL9XwHUUnoACKvzj8fytgsXvuan3UZA1Cu92BaS6Dkq8iFESvqHY7NdZ2da",
  "key41": "vMYXCjY4DAZYsBZgMR8mXUrJBZqo75u3syf5saKBJumaHxHmk32aD7nS1bq2PhYWpaREFibr4TJQjkSckbftZ5K"
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
