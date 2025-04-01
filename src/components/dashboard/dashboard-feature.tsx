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
    "3kS7N9keNZE1vCXdVUCDWK5gwJW7ss13hNiiQvDMAxZBo91BpmcjbCawP973Bx4BSB7FaqHVLtAxmPHfhte1MoBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYMuBVKBvY82tZq4KWMM4qMCmbCPgEr3ox95uMUdkVxX24xVeMb1dEmiLvZqZDdfRutZgWGjkvACuT1MDqPSjG4",
  "key1": "Yh1gWQCgCvuf8hCSSnYqdsgvLV3Vqt5hj5ef3WVe3VRSsi9AUWrtGJkPWUY79ACVCQVpQuaSzqW37tBTDdtETK2",
  "key2": "4PWL8JRBBJy3KM5yaJBr7aF6eiMJxgL7wQQ5z9BamSYiBDe6nP6Zst34aEeFLCkjFMTp8fFv61yv55Qdqj1Et3ZV",
  "key3": "2R8W3vjKQV4VppDKm9s8kGhXdDzswnRVgDWgWuskVN6FfB2GEYa7udaKfjURa1G3FDFNFpbzTVHyyFawH95U64s9",
  "key4": "64fFUX4iPsd5nyjMqqHQjDpFknR4NRSMorEwjm9ndud45RSCVMurpzzJcyb7boHsm3p7vLsYeHVwStPTBgNAyVmW",
  "key5": "5haWdQucDY9ZvxbeTyboSiAkux12G7LcXjVN9JTtS6DLChDZUe8ZY1rmNeYPvg9YhG2Zx1T5aiCQ7ShNuZEcNSCQ",
  "key6": "5kdfAqriVaexmA5ZxNc6z7dcLAQPQhLRLEebvxmdkwRhffV8dAcyrjLF9Z9sLzYrj18ebeoLDGHDxrdTKXiew1Do",
  "key7": "2nq6tnj6WWzJK7EroTLhZ746aRuZYGUG3AYHzXSSdiSeSYaE2JUx9a6QEPpPZrNe1gpU3YtNcrHEJnHfGYt1azEj",
  "key8": "2h7pwiuCCKSa9iBaF59fMYhoNvNWeB1zwXrdw3DKLBHZ66o1GgPvEQXa8EUZPqd1mxoXzyZiM8kAndSSRbdcBh2j",
  "key9": "4dieWAD17VZaK2R5jbngrq8wwGJCYbqCoeuU5VfbF7tLd8qrtUVNDAZ7rAkyTZTakVKnunrByCeFMrmrsHsoTNbE",
  "key10": "32fXPjbFMJ4Nuv7LAwj8Sq6bdxcKyk5y9jp8Cxm3MiUis4XQAVr5PfbnxB9U2tTJrSebJt4kXk5T3KZuJ7no2kCt",
  "key11": "48WPRQqKQrDY3FN145eM6tCBY5pFkR6sEtAy2yJTrAyjEY8UL5e4M3P25r5aTaXH2Wz1VuLza1xkxafg8BnJNFSQ",
  "key12": "5nRSvLx3nco37mEQBNeGPYRAyrEnW6S3sK7PAZAtHLaHyvEZudDWrohdRCmGJaQjyWM4vAYyLnokBcfAdKCyPNoM",
  "key13": "35VwP3EZh4ULDcw8LcpAY6G7X3reqpSntBo6XoQ3duJB8VxbGqreSwjpsQdVpXhjh5nCK1MdFnaetVRCj7swDQrD",
  "key14": "2eod3nd44pc3PSHkruzDiLPkoBEb4oJ53Vhr2VvQ3HUcrwdf82UmCDJ5FzTgpCzkAcLc9dPPT8BUwQzasfTdmwLo",
  "key15": "42uwQAC483Yyhxukz5v9wNXf4WEfhkEsVmmMy98XsTV86iD66wMQtFYKeLMizjir6KFQjdHkoCPj6v2SuRpHq8DH",
  "key16": "FzEdaHrCEEeDA4SCpgn6P1SNVgKg5YtVNFWNWbSczq5BU6A2PuCsCGqkwv66CuwaVwuLqvaZeywj723ioS7Hm9G",
  "key17": "3gM6Tmn4gnd8UzmnAuz3bwddZhrpoLc7S9zGEiqifaEgpFR5r6YbJSvs9G3yHMMMk2s3WkTNdXhSFQn87qLGttuq",
  "key18": "E5PzykHLM2iUWMgZViKPyYPrD3rKxwybm2f6poPVDM9QCb9V9qqLojAsUe5qVyXBTNteuCAyAQQ5eXZD1GdDCoU",
  "key19": "57bt7qxqA5MGNumj4wkHuu4SNKufscqyJTDt91V1oifoniSdkCVHzyGW8whDqK8ZxuCdy49hEn56HtAKwiQxS2wu",
  "key20": "3jGPVY6XVKougHNb5ndkGxzu5E4mQ7UFopSH622Qw4AwAKeaDbLotXSWj9dGgSNYUYCpbRVgn4zx85mGE4n1GfUU",
  "key21": "2ex8gRGkShWdyC8v8BPG8BJcC5KcQVXeC3wYzR6cisyrDc46PJsrDLkLhtWFKrk269rrg8zWAbB36aPJWru45UuY",
  "key22": "2frhwpLZTECUEDApMg1n7phcZB9QWmtHtBSZogqsJpo2grX8YFHcoMhQLGCKSVuvhA8gh95527s3mQirZ2X33gAk",
  "key23": "611K3UvVHFyqzTBn9ArcCyvh5EpycCmHc5Q9LEMxwsfehe3WLmD89gPMWgsEJa4ecSpMt7KnNWyViv3MV7VDsEj2",
  "key24": "2RSSs1XtEk2KdFXrFkDCfu98SPYdZx4eGdn4RFdnXwceptbG8kRXsHZEKaFpBw193ztoS7EzAn21dUHd4DNNAeX6",
  "key25": "4FGB1npiDmPAnB25Rzuq5KtGp5L2PgyGwusDbVnUy2hBcjzn6XYNcmi5hUJaadrzwDhavrD7dDnKYVpMdi7WscDX",
  "key26": "4E4uUZLnPuZM41cXNyJZtmaD2MBochMvfYEmRorHeELpZwA8EfrT75FZPZQs169o2QTb3sUbUboVPw2PUi8MbN68",
  "key27": "5CkBNKamUiYh2T3yYwr4EvwRGMtUREzJjEmsLQCucKQAYvJrKV2maGC2UbDHK5V82MscpbjDH5bPxTyyTMgh8Ssk",
  "key28": "4nKk4XTwp9LfCB6KrhUjXxhFp71e55wode1pa7cjAcnaDJJCfRB8pgWC9Y4YnKu2uGQe3af4XMa8VH9cvpoAPqit",
  "key29": "2HMnWLojRgDwSiRoqHLM6m2PTwaZJwQj8WUE6FmajmzgcNS18boiFQbvbDk4wiScsCSUaW9BhPzTHH2PhzNx7BvA",
  "key30": "TfHMJ7aLRyFaPYyj9uvsHFs71KBTBEdrB1aCdfSnCcJ2hpTnCrp7FoX5orLFchKrrhsBWVPmsPJNFTqF3D3YRim",
  "key31": "qg6gatzDFf17EiNaifNdvB1AX9XYq1xJVTg3S3dS66wHFBZ3LgXHi1sDfftWfACa1pndiMnoGmitARWuwQqLfCo",
  "key32": "2Jch24ndNptGdUXXPPCzDoLunuqjkV4ibiEnZaRZepmwUFaFjVyyrczwnXPxLvFh5UCjsCZJ22AsnaCPi3Bajxyx",
  "key33": "2tzHMmJ4iti1YW1GEQq8JQHz5YV3Cqy7HuFYD7VWvYjxoot3Z4vot9KnLjZVx9e6DbjBowEkpvCMvEqLSjBpwqEs",
  "key34": "34QvymPSYVrzMkNFQJVy2yzdirCg9qBXW9qMiufW9QLgYVPW1NvV6sXHmQgXVYP4vMWXJ2iEh18uJxqHAdkQ8zWs",
  "key35": "2J9pnXx9LFV8i5A6nkrvGc1w8TZt1aAFWtep1PrHY5Gmz2f6BFZKTkf28XenRtbasUxXiECK3UT1jmSWhugzmSNF",
  "key36": "5naoxE2tvzb55byxiwZaHRKMScLA9XP2XXUdTwbonzF3zaL7TsNvZGRdCCmDSTUnyppKf34rSr8MTovsrKhEbChe",
  "key37": "PBzrCJgUSaafXreiQCWuJZrtAy6yy8JK5SJNb5PDj7Z59pqqRTE91rkMULNBiYddP4YXDD8erPZ7FBnsyp31WYQ",
  "key38": "3BF164AWb7DmutkH4J2EJ8vz2nDqE8Wxu1dJSAUiC75JEy95egW222DjDCkU4zVMDfnyHRgFnP6secjuj436rr4q",
  "key39": "YKP19gU3cu9xdCcg9NWWKtxsQ3haf5LVaNtT2SQu2JahxH62skyGSdfQHxwpxeSaQZsXsYi7FMXUTVLPFbU2EL3",
  "key40": "4PQgRQ7wjVp5vNTYFyvRdrYhNv9sdPzivERJJxVBUjHs4njWjCFR6ZeT6mNv6ocsAVXrYBD1ZY1Hm9EZ9vJQgZkd",
  "key41": "4GwKTMhVP77dwGTjMkLpQZmxMWfeG89ZH8vyjKnJNS2gdfx1srsiKx46c7vKjKTQe8emamfnbTMefrzWL1KAM3HQ",
  "key42": "2HU79u1LLLVdayNiuNUYvtvF261mj1oXFB6mKnG36i6Do6MFrfwpo4XHAD9iCjhumZBg6xNQcsJgsBFay2NRudsx",
  "key43": "BSyMobwBPtXYMAcNu19pmqtao2KNCMAVbQReHpJoEsBBYZZAGKAHSCgPTLcw7wLL2VJiiJo1Tc4hMhQsuw9BwMr",
  "key44": "3miX4WQYctKgvvTXQUM2e73uXCpUTXxkTmqqqGtfKzyqVqkx96Z1MpUeUaGg1EekteqEJpm4CUYzzsstqVrCX92J",
  "key45": "4f5GhmC6LvGbvw8GRrkTawZFXGLrF3yCtxWMTL7pcPTFecivswYaAD9hbd5YL6SBN5dYAnhJ8ddsqyaKuRhmoWD1"
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
