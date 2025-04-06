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
    "7rCyKv15hAaUZDJjB9iz3mbB9t7aNtxH6nF3AhyU7AYVuzg4uH2DZGxUn3e9ots9DtgLTCyqdCFRBSfAuqgahSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMVvbfkE2vcp6eBN3JtiDLHDFAiRBa899umyJNbVmcMw2QnAcVxmHxViEW9fcJkQUdPLioQjGhLYBDHZaUovrDx",
  "key1": "3om2t52598ax5H4bvhTdRmHAi7ucUsCSqppoz8WkpiQHEaPA7dqjpVPjzBgaqgfA13DXppW5wMD1oYwJG8Uo83A4",
  "key2": "6sUHSPSsG5jtjH6F2UFRrfn96QGQvbCKXVfktWYmfbbcs1v5HC1DYJXucbLeHdS6jE3hG96bmUcRrTXQtesLoZt",
  "key3": "4dMAkAgp7roRQ8RsZpnymbqJU5QbyyNLNzKPMQHab1LweXVgrGK9AKa5JzsYZQ2bDRmBJNfQ1hJndpT29LrBUL18",
  "key4": "66rwAdVTrQ1zcczeXUDCoU1VEB26qzT4zBdCzQUpDJZ4VWKcAq9sA8d9hHgLtgU2rGSYHJqHNmthezvt9rX3AJSR",
  "key5": "5ekx3R91JUTVjsyXtcbJWYPqEwqAX9MEkHLo2MeKQD9aPcYP86fLRpfUFgehAF3tDUX8CAq9k7bhavfGUrmfPbTf",
  "key6": "5U6Ykk27ckh4S2bGyBhAv5cRTXq3jJaxuZVp2VpEeYSFSwCAtxNnwgeHQFR4rYtzfH3sE3qYrWULGwyDoGVWjVCD",
  "key7": "3TRT4Qq6uMojFNgczbGgBAQ4seHtm8VmiJ1YCsoCrRQaAuyRxwSj7HYrMhKPRLanTJQVNg7EDmD31xyuV2t2pLDT",
  "key8": "2qiDDXKa6aazkCWHjCz2k5rejNLays5MkoaAR7wbqEiog7FFu98h9RxsWsEWBkQmH69bAgJ8rprBjRWsZwdCVPo1",
  "key9": "5ERhWhogmf95dBtTLCZQv1cq7j5S1HGLQsf6FUxiexsCyadVqjyeM88SfWpQwaH9Gz4ZDw1aTp6yDSRqx5ovfk4f",
  "key10": "ddwijWzjA4iL1nb1fENrHswxn2q91Cs4CyJCynpfBL6fEi9A8zurdFbq6DBdnAoJJBv2QCWG8zxxZdd8FP2aMYL",
  "key11": "3VodiNBXw8kuu8MRQiivgvT6r9HLZRz7SMZnxX3FktjKRAwfwQiynNNsdiut3JWTkKDRg6gRvTg8RzM5jcUuFALh",
  "key12": "5H1pYahaecaFwfW4kYijxNUUZfyVhYr6SfWuGkymL9C83R45QWKP5jP38dSLYXbSqnqDwzPyr9th4ZWHGJKovtz6",
  "key13": "5Z8qxGzTdLDc5rEricaT3JcxgVtLUst8297urki4WyHffZ39G8H28uHwUbrCe7gRy7puSUe2mKAQKaibanFxxvfG",
  "key14": "2iWbLYT8wqqBkwPPUzcDpT27TQS8dSeoiaQhtKDFKiT6dvLLbsNU7wWv4ewZGx67PQSuSEZiRcXFqxLkMFwhPP3i",
  "key15": "5NDkNJw9z5nGJRPa4QDHKgGbchvz5kT8vnJKWXGHx4FdJNXfSJ57cXUDvEQo79VWrE3t5zvqwRxrsnn6aNwKqyk4",
  "key16": "5tUAwoSvv3EXXoS9LK4FkspVycFhFL5hKejtmJGJQZcUguCgcfXctzPNvUznVoDAwNK5MopezALdQ4ysFKiAaqpy",
  "key17": "erK8G2jGHwBi7TjTymEX6xxLpGmm9ec7ddR8mAjAyYYX9sByVmd12qYPyGLY9T2Xdw4ureX9CMLSctMxsbDNcHR",
  "key18": "oxQYnZ9Yr8D259L2SYmjQseAe4n7WZsWqSpa1KAsgyzWczAcQqtb1UED79Z6ze25Zk7RLgdJthnXJVAgmiLCyAZ",
  "key19": "eJoQMouSs2AiH4XDoiZobf5aavt57iDKAMVPdH7xyH3vNDmKbFPUjZ4SuzGEhwq6x5sNwMiVFzAehdWAwwZdJFK",
  "key20": "2LhcsGWrPuAM15tM85xra8v19hC3CpjLf51o5YNEz9ruZNAv1wXCDKLTiLiAMuZeZAmKQVprYqmExWaef43Zvq2L",
  "key21": "2to2tm53BLRpF5xpFYt462HKrRf3F28LdYxoofnVML2oaEVqWC3uezDzJLqNBLvjAZvUGuspypMyuwQ1ENNBRD4z",
  "key22": "5tnBr32n8RKTvCP2n9fhWrQsFqHK2ymQeqMoEVhbSAWm8GYXZcRUcQQL71NiiLk7YjnGwMCccz7JbTY18qjNe7cf",
  "key23": "5rwnE9G6UHZbeBNz7z55GVJRmkkEDXyKgi9sgPa75HPJ2mRwckXWFBfNQ6kdi6F8tZoRBb8ja6ABeaZcBKdme9jC",
  "key24": "4V46S8evqxXQGA1do2dazuUBC51Bbpq9duj2bXAgjVqep7VLE3LjnT5TxxGqtvGr3u92FqLFWLvZ3cDGYGKV6urM",
  "key25": "7LSg27nrE8ZXjbskjVvi4C9f3VHeKD2R3kZiz9baZoNjKZZSmBjwU9zfiYR1XWZx8E8MoGLNDrKNpm2QRe6uVTy",
  "key26": "4r6UdLk2ReRZnboXDgnfRJ4F5KTb2Wbc1HPAfzzxB4vxqxxvx9KDLkmEg3y5Dw1XqL8YUDTf3YR64xjuiQrbsFae",
  "key27": "4qT8jn3cwUWzmfUrWnkuQTNLmaYLfp6omBN6LSAPaocF5c3BGNBdLFHoTgUtQhfRSvgQngGNX47pA1Yqy8GVSEe5",
  "key28": "3Xz1UHQCrFc8iYhT4mcFkLo8TrvDQcXfSNFepJNj7vUsBE3s1Wg5QCb6aWzpW4YAbVMUixx3K531VCpwpvYSg58u",
  "key29": "3i9EVRNE9KwGt4yz6R3wUKSZ8B4Abaw4HLeUVWSz9yJMRw7EzbLigjasngyoZNnFFx4pqgFTSM523KspbTcqwpcg",
  "key30": "NCYQh9ujtRH3WebWh8R8i1ZH4fpgFWMEA9ms52WVpQ8wy4fxzdcxuqqGzohcjoqYVVVadU1HZr2r3vnUiV7FGnm",
  "key31": "4YgPDcVVjJ8k9EV8VmiyN5doJM4tdCP4CVwJ8MmxZksAhbA23RZGGHB5Mj7kH2YnoCAHyUsbSWBnckUQ3s5XxGUh",
  "key32": "4F2pzqm21FSjNphYhLgJHQBcksbYxcytcZEcAvEFPQMkWuGyAJrwEQRXZxfCbBYBqzmLnrDDjGR4JS4LLUx7rTU3",
  "key33": "4ZyaV7UqquryJscsnXdj7vLP5pbJpEx79VkQCaVwqhu1GamZqvLCuFk8rrw3oLaZf5rxGKBiZrPkoWCSKmzoPmab",
  "key34": "534oKYMJkKpPFYdpCHPm3BqGRmynoYC5iZyzAo3Ax58F9TMKu2PrnMV6VxHMmF6427Gb1YHAPnZ4bVt6u1NCPRof",
  "key35": "2LyYJBpCeKdG9HuNyYRzba4KHLf4uq53yutdaQASFVmRkAH7Uci9vUJXk8RYmynTa8cf94wa8yViEnUtfzEP8jg6",
  "key36": "4597yefn8zgXVtVQ3P7hjQxUxG6nUrrTnFffiA9TN5ZUyzxV7hKMwKZmrbB1VHc6yb7ujN1Y5yAMuJxTdMp9uf5e",
  "key37": "62C4Xy5MSERddz24NsFieYq5mGfrTu2Wo1TY2EdcrUPBxMAECawFsmoMzy7z16vq8QAq9Yeo5HPbpoybdKQdMxeK",
  "key38": "MHMDnNPAZoCPvurpf5owQCG4LM4ExESEAe6AJjEa6Ra7UuKHd2upbZ7P6Po76t7EBRdhbsk7QVgQdscrxTMzmrp",
  "key39": "3zbhvYkeRVDTDzqgGc3tpVB8NmKaUp9Q5CtoAVSoCQXP1j3LJFQQZwagSvmA9X6bpg3wy4HjpuEH11y47xBpuBfU",
  "key40": "53weCsioPj6iAioPQ7qHDRYdzC43jdgcmdaAKNokNxscgsTj3bwba1vT2AEhiMgR6Squ64RQUTCwos6YvUHQyrRF",
  "key41": "64WAynqQvnhUYSnwkowLsuLsenSf8FSipTWUXv9CqBXXXbZ8QvSbhziRPA6sex8hnZKvNYiF2HLwSJKpBCcMLHoZ",
  "key42": "5Vge83DEXAwC5aiA2RmKVoUVLiEKPTskWLbp4ggsv8ArxZMoji3G2QEjHMxFZfbNZ6WtQBkrmpPnP1ACSBKBrobs"
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
