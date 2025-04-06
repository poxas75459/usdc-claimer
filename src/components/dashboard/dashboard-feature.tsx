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
    "4WW8tG7zczXhdgDnEdpUShiU737y7R9m3j42W2FbZQAaSyeGF13QyhF93uggudrWRKTzRdDrENFgixzr6ADhjqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aeJByaPHdtsSV3KDVE6iRbKDQgMy91ao85hT1hxJkM7usSaaWxyTQqwNBBdGshkhuCitpFjEEHzkm4ZBheTyGeG",
  "key1": "4X5ttxpMyjrF1jwwVCL1wYQduU4w6kF6Zq52QMRa6xVmsyedXkRHVqLjFFU2AGSQH6uXXRHqX27AEBA3aiP1qDmJ",
  "key2": "yK9nE256U8VDXJtoJs6LwRxXNKUKrZhLf4QZRkfbW5ZaDH3ZXy3AwX641nKboEv8gVfPXzrFrzTkbzmC2cvGqHE",
  "key3": "5QANjnerEQN3Cerye2QCjLfrqLFL8AGhDFRj7sJ3U45ki6fgciUrdbgryV6caRDjPbqqaNk7k2bEvqxiF8GEB19m",
  "key4": "2cCYQLzhQCegVkBN2XJcsTmchPZfha9WbRNr3ph3WDWvZ4kE7AKcuPmdj6ZFXs9zzQeEy24Zj8ABuwvx8SSP6mFq",
  "key5": "55gcD1Sz4ybce7NoBepk5oHgcWhc9TCyNAhjaHdX48cWoeaUdj1UHmAR1x7HV5meRHNSPPfjv2v49nz9y3YVbtVJ",
  "key6": "EQuA8BtoyJ5oBrwUyy9554Hp3hJ4GtYP4kX2SvtqikkG92YLKf7UdRL4AbSrXBcF1VxQstEogvAKuTiXoHAxFj6",
  "key7": "4puTaX9ujYjrhZncRSeHwWenMqZnVsKbHbHNVY7ABEoVnHtG938gsNqup4jUvavKBtfM1WGE7DVM8AaNAWCLKGZy",
  "key8": "2HTaynJTxCcYH6BrtxoeQmcQrTUmxAcC2ptDkYbnQJypEghsQzPEh6aBENK5hq6oKqwybC6B3ttcM3TSbfMMjmqu",
  "key9": "5MEXHKFgvAurUFUhaeJHiWGfgavr2Cu7s49djVwZCLZCwBvrqHBCBt48EGXk6TjG9PiKhRmZ1WbrnAtRVnswmqzv",
  "key10": "KNJoEjfu9YQHNQKzetEUMpSCXDMtRYNZktuGgjrNsF4zqPiw8uacBSJhzjGPaKYFJWwwr5QAsM4No9fy2H1S7JV",
  "key11": "2wUXyVRZfpJxTAuRfZEtA96H1qcf84YWhBUaBQQCb7dVF2wkwxeiMjZW3mCwcVS4K71rWCJKK5f1k2i1j11J9suM",
  "key12": "25jsuskWqD6rfXEFu8fzLFYtZkXQTU6pGsiQwYbZwBrDtpLzmJhCpt4kH1Vq2JFCJqiDGRkU5dDwRhWsfbMWwKZA",
  "key13": "4ykZa8uSSge22pHQ8GMee9c5oR3sjegDF6zEGxU1ksxCZZxmYXitd25RyeDq5HrNmpWWy7gFuDcKXBKALeNKkVrz",
  "key14": "3ALBXenmEr1bYYv11Go73vA5novdQ1y4kEADVk1mHXUAEqTZAzR8rLmAcRA9ub4jPWUPZhJnE4SMcw7o7LC6JG3x",
  "key15": "2XwGzaLhK1HPGZrhjrAiKXq3zDyjSLwqEXFxAQNFkRMdRhWBPQAqwf7bjodHvj77NQwBqLApFMcCL2tyyg1uKKv2",
  "key16": "43morFJuUzxuZgFgpTJDX6HHh9DdoBuswT98vriXPKPXKc6GwgassrGe4xHk15sRo27Yp1jNYzH45UUGfVoJ4PAK",
  "key17": "2pW4DCoHnd6jnuymFCjC4bAHyx83FY4vZnE1yc72zoTRcUbUYGBnpYphTpqPKy2Xg4ZVowvVTMMUERQgfLoaHXC8",
  "key18": "4ct3XxycVKMPUufu3cS8uLScGBKsFGXuQw3uyW4jYoTa1zr1Rp2kMJGwYNq7RwEEcw46G2PAShEYq7Qv4eRtRjQT",
  "key19": "54xedBTV2AE6zkLkWVQuTXh5WnpRfzhq6dEAFKBdBBB1w8jdjVeAFmV3cnt1aeqxxe88BVtthTo3USQ64iVNfJDU",
  "key20": "3Ud6cJEUhyNeKMeQ8wGCacMTYkqD43UbFdP1GsHLYhYdqErcbhojJ13aCjqozqrxDHkme9QB2pUNwNVQv1QyfNNE",
  "key21": "5ce2coKbVtvaprbjgRndJQWh67uKBgapUfA2XTwGFbVMBz5rRehkL9MXXgFoonMCFJEQAwXp5XDppuK2QYE93LB6",
  "key22": "4rnzFsBmjuLooMWnwUBMySpExPGLz9L6siY7GZ7Cq3kTq4XqHd1bSGYnUCAiKQHb5iQ4BRpqU4eWHGpQ7KQyNJQZ",
  "key23": "2VHbg9gzVUPjpguPCcJGyHRjYT27tzfLKpkHLgE2umLoYG76VctsCGG2WxTFjtnbPM5RDbAfZshgQFfgG9UpRmWy",
  "key24": "MYW2YdEAujVQmVgBE5Wi7h4H8okJzooHsxUodW5FERD73DNQTuDh8qqY5ye5wzq5Xjnq8nHUvNL71cuLsHfGJc6",
  "key25": "4PtXFAXFeooRpZ7qqXLEJzuiVaGhAVib26biWVzMn4g4BhvcL5mowy8qAZyHute1nzdaSXNHrHQEb98Pekt7NpmH",
  "key26": "3fDuPmkQYYFK3LRy88SqQUJqAKDCn2smoFSxr3vi9P6oDTTTpFTqsMgdLHowmmTyeNi1rdE9pZP2gMTDeb5rNWPF",
  "key27": "4VWEHHg33DoD8H5qt3qGSxnawYRkN3XnNR48KV4gLSipUpPrMa2u4cG2YfEnidqpy48DsAzQdPLx3MLrZgu8FTdk",
  "key28": "5vPViweWidufFh7M53hyUV7W1bEN8MYzn4tYqbtpcBow3pgCpWNDH9UBirPL5rpmq2jw5RusczU3vyBYVMQDnUMA",
  "key29": "4qawgPXC3mGTSpsbi3sEN3H9AB38m7CRY5Xq4DfEHVsPDj6gELGGjABP1qmZsGPYXkjRuVbajfE4cfqrhbEL8e38",
  "key30": "51LgmboEibJCf3fSWx7RWRXgmFQG7ZoQYjEeh3kQKQNUKLUwdZMy2nhBFqYAyun98X9uedr42yYU79aoXFdwNnFD",
  "key31": "5XrwcsBoppizUcQvUQ7dXG9tmfEd5BctoZKmtWxtaozqd5FGn7Mto4jGpvj8Sxm2P4J84o2LPedqQAUF7BV1Q76Y",
  "key32": "67TKsjgzqJT8w7AVk2wuA9kdri83TXRLaaKbBXeaxzzWcE9tDXpFxsyAiGaGZP1zKUt2QfK27HPEb2WTS9fXp8dk",
  "key33": "3Y5Bur4A9EKorLrWsW6oqFdWvsL1f8iN46XWbZbMiXdzpQXnSGptuFKQpETuJTriPmj8ZMBqVqPLCcgSoCZVhCMP",
  "key34": "3y4ve1fnaeMYxyYqVSenMezBRkVLU8argdApaxfhWoGW75c5bNNs6DmLx5UX9N3Qa8jYKsThm9fqTYekJjFY93Kg",
  "key35": "5kbGtvnRYokCo5WkYseGxNgzYCiAz7Ak8AW3BnGWcRoRnzqEqjvoxJcPLrd8gB8GUAdmJvoXMgFTKQc2LScBz5Dn",
  "key36": "5qwhhMpBnpEqHN61umBS2ky48UsJuH62LhckUGPsQnUNN727UNZ3kESpGQP6HiuhThbtZHfKph3vJDjQYJJFXta2",
  "key37": "2vfnNNY9zTEQftRhc4by3SbKV1yps541Dx6TGCqndsbhpcBTSJoo6CZTpq1K8MzjAMbJ3NjqG2fWVCMzdax9ryFD",
  "key38": "2icc2dHKVrgnMAcZEhmiW2bpJTDSHgvQMve8BodMy2dQbPhpXVPEdxn7PNfxLwBxevyT53z4uq76RtBqhydsnV4F",
  "key39": "4eWQ1b2YoeJb4FVZk4pvoobhS5Mmt4mfsrJfnAcJvEg6Dsx1dHpspNBXNb8yYYp1Wpuy2ePdQegeEUovUuS4Tcer",
  "key40": "FHwAmYAcHNjWh8nZumZ9WzE3XBqfPFk6h4pjaUEjqeWZpwGBMsAtjyvgYWM4TTmPyNJCVNUmXFMBDvSFDq7aXf5",
  "key41": "3HuQymUgf6hVwL5o5A6zig4YwqVWpNRD66DkxB75Z4UNmWP26B9yJPKH1mUkmHUuzjGbSHRrdamv4BpHaHXmbjsC"
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
