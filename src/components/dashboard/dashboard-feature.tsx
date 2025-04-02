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
    "3nCBLGiPAv5zPUjHQHSb4FPgu7PjQME5RRTLoLpJPUX97thXqpi5gQsC5k7pwUqH53yCGbmN1m5AC1RCukg6yHH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qW28Egpf4KPYo2a4jUokz5rfD9SnbFWLhkHkJ2cHKHtpy6ZojbpoH9sN5Pf7q1jy75AAULYwr6RMMAR6PaSpQFn",
  "key1": "3U9xzrAkNoHv4gVn4wjFTEpe4DmFKM7E3tH6KDJznFPh8KosZWwxBCW7odo5voCTqgA5kfLBqjje4QtAuNBKurRf",
  "key2": "567YDpNgzUzGk8vB4teFB7mXchKVK8DBGnPTonSinJr5AsmUZdQuBDjAtDBfAp5JaK9nqRZVW1muFdfKdotSXo7f",
  "key3": "5ADvpnFs7D3uxYx6jqgcJ6qCHyn4hVgjEb18PDyMr47woT4e1KMscvgLC9sG1DdYuxbXXqEJyQJ1hgmiPcFXt7BU",
  "key4": "5RXk85pvDvLKsy1Hyks6yP8mab9P8gy5zbZoaQDhRGXuyrLtPGYWjyMhzL3MGZSK4UKP1JnpvuCd6sazasMx3J8J",
  "key5": "4JZpXx5AtJJx67nYjsQxdfJs9uavApkfeEekXP79r3p4jVJg38cJq5SHDhktRMcE5J9hEMUD5d1XEpNjVx6By8Vq",
  "key6": "5dcxbkBvyt6A9D7gVH2abTX5dbsi2Hzj5QDuQETPDATqcCCmekmM22DohXgTLhEn3G4Sn9YHrNGCvHw87LBa3mZP",
  "key7": "drz7kpQRYYWB9LfMeTERKyJT6McgUDkfMEiRNgfkuoySYddcJLKGbEWiv7UfEivTL4QX3qmWxTeEk4Q7ySgXkdc",
  "key8": "4KycMomU1vtZPikBKw4n7C1ar6PiZvz4xqjWF7SLc3SXS2rCXAtSiJnrvRAmnCtpYJwH1Tp78RNbEBKZ9DbrnfLA",
  "key9": "4Jcp3hdN7JjefLUP7PMs9WNPMqw1Qfe3ZLeruyTCpeLG89SAi41JJMv15xruokaA8YoeHuB2NJjBSCyzdkjappKa",
  "key10": "EQXLtPHyKKDkKYxPNgwRUmkR4dh9UX3SFtJTWjGxBeAMHfU7NXtgDsPzpr4BVbt2nEz4pLqsE2RxqvdfXZNWiXu",
  "key11": "41vca9wkaGgR3ufQfZizkKLbo3MnsATVLsSzFoHDpBG4WdUszyb2JKA9X25fNxjayntskVBMtMpWbZaekYmA6tKv",
  "key12": "4CwtoXxN6bfSyoVqY4Lzsx2CSkfSHTrhwZQfhACsNE674FvT65hjrtwZJzYSv9EtHJpkCW7HptTRwEpXipWAG3KZ",
  "key13": "4HZdn564F44ZkGdK8yMMYtSxqXEiAGg34skXSKp7nMgfiP5H1giWAuTMTRs9dnqVRuoU1iusCtykcC8KTPPqsfpx",
  "key14": "43BG2uXeDUzufNaywnvtTPD2Mu4sNxrkbdRKGhHVu7SM4jeocrNXfdF8p5RQdGyzcT8nKPbj1pK9g5mBYUBt4w1z",
  "key15": "5QggrASX14kVjVNTwroBBnWThxkvXLHpELmHwijP5mdsB8DAsSdMpgNgWy4TagLc3Er1zwDRAhgtCw4VApUuDTuE",
  "key16": "2QGBLaMRD36QEVG6cwWCG34ewtCH52gULsjQ4d8UXmT2uPKozQYfN4bssaqKZn61ybVzhqWHR23r7hVVvREAUt1T",
  "key17": "2qLfbKjBMqrxeeTFSxKRWB5VwhVPEJd99CsQNQMK2EXezMs7LmX2e51hjC5KpKhUYsHUGSmnLKmZYRRMh7EFx3d4",
  "key18": "pjgiUSrctUrWixDp693Sf4GJrY5sehMi2sJ3ZYSSpe1WYH2AfJxFYxExJYXoNEFGVfYJvhJPm1muPtWzoRUWpBG",
  "key19": "48K7RFyG31wLgmBwsUHn4zH12azc4RduasdiPkYcEKpyYVQw2jwSJABs2n4PKidfFhbioxKEswmNwDh9YfWHKjYB",
  "key20": "TnQv3aqRauMpwbemNKRbUu69gM5Uxbgb8EhMA9urG13H3FjBscHoV66e5E68q4YKHP5SDTWGpAF7QfGyaptGM8R",
  "key21": "2V2sYZSzmnWaforSEmKPJr4Ny9YGsB6rf4D74pf5q6vGjFuHdF6asaTzCceFX4Ro11EePrfA43PdovjRBCcrvEoB",
  "key22": "5w1NzU8cS5R86q8ZTaMrE9HAW5ZTtM4Pvz4DG8SUom6jzzj8RUDVvcEiznT8u5udEmUZyzdqF9KpsfHYZbLHvn7s",
  "key23": "szhaRmGNFSotMJS4Mz4TjmCZsZdvX95DF26M11KxgEM1jN6ftHWDpcSwVqHE8Su79eSE2XTmszP6pvaBjWxrWcC",
  "key24": "4W7e9oSsUSrfkwCJTTDMeJXyhJ5Hcxb1R4muwzPeAaB4H5u3gVqutu68ExPYmJgGeStcnsAPLjLxwCA7S7QAjvtr",
  "key25": "3QW1XgD7PYw4PePCKA5CL93UxftnNymoYd1eVqh6n2SgGJesrET3Hw17rgjdbhE1S5bQkJCt3VxUunKYc6PWqeRN",
  "key26": "uuoXZGXBMHsm7Ab2iriju8PiNKAQuRbXT3hgiv3WHrUd8SZjem2D1qrjqw9qZAcNGiCMnH3CXPqo7Z7M8EryTec",
  "key27": "5FRFmFoeRXHe4hCbzUQdFQt433FQBb5diGmgDed6Amxqm8Gkr5DrPTuhFyq6Z5PV4gv4vFk9P6jeHfFNgbQLbPmK",
  "key28": "3Dm5mNTL8WZLYMs2QpHocJZ4Jb341VxApqyZPUsY4XLWLEwarTCA4SjsvG5MHu4CLxmPnHoi9UQ5gvYTz7jzxeKT",
  "key29": "3Rxf9HFVsGTVaNmqFvbJ7PCbUDsG6mUub6ACLTSrc8opHzRKFdorxKGDLAgY8vRe7vn3Cg7AQxS6h6BTAndTUR5z",
  "key30": "5rWiy3mZ6JP9WZpA6baFvHNZEWjYHfnpTfY24UcNQxEu8BSn2BbBEVKcuFJFLFaGFpPeH9Jc8di6kGQjDwq7kA2U",
  "key31": "3tQhuxyoa8dLHhwMnrPzciDnYPHWXS6hSV9YHBr519cwM2BBx3FHnmN3cKmuCPMXjtGEmwCAb5ubKBhKaD3uzN67",
  "key32": "5FbhtoV4fx43iLkxqbqazFrBPx8E62nCxazprMCrgwCPrsQu5tj7NzkXTKSh3vboza8yjyNaLouJLKbJv7tTHK8U",
  "key33": "3zHjWQMMcqSUnAkkohP6gJAj8MXhGGQJmKWwYwLQ7X7zLKccDndyLZRxrVqgjeTUzgjjokVeiBPgmYEbswsgorWH",
  "key34": "5i4wgtzNKcTa8TnSQJKMmeviri9cnGgnrQ6VL8ptSmkAwZw85BbExtwWq4P2orBUZdtFxVxZnHby84vWgDVPrJkG",
  "key35": "4zugoEGu7DDNSg2xavbtxf25M7Vwesaoo3RP7kYDZjjBPjQbczkQ3qFubUFuuVbgJHr29q69tF5VGoXWM4zYuMd6",
  "key36": "egKiuGJnCYyAgx3ZbzvBAiPCYEneWhqS71ugr8bC7gfpWebj6FPkuEPsxDdgHzvpZSXMmZaCQ2HX94mYZErjKDW",
  "key37": "5Q4CFNZzn9bTQesvcVq9vpxvVYvVqCPUFfzkhdA2SiBvEgTTkrQ3GpRTUBd6PvPcFPTj6dUonMJnNXY3NmGHqutK",
  "key38": "2TwrLTKVTHZ31wseXkunYCg1WuAf9FfqZDT1KxWBbeBBkUmA6U9V6hJP6mmkPPRTFw8C3NmBn4y68Af266YHKC3z",
  "key39": "2mwzHGfXEfJJfeAzkB73PHLwQDyY9CuprZrqSFKcj72N27u3FWrgBiENnKuPHswtvpT2CUse6xbMQW6gKBtttabm",
  "key40": "5Nb4CsK34wU1mFXSGCQARuNodFK1HHUKcubErynmcrUVAvNFccbp6sW3J2AJhsYCnGKyTydbPahATcK5iE6vyzhJ",
  "key41": "2zExqhUfpNk7Ng6tAwbGCtb8PCXcwdxriPQZv8SR5myG1ZA7fjqyqSPiqYvRqt5TyjHEcNYhXQ3NjGuzM1ttFppB",
  "key42": "4Hmjb8p1rYoyJamkL643XQgRPqHy7WmQiVyt4oa6Aa9afStHXP5JQ3Hq5458Va3Ef98vwrxPBgYQAW2KLQMohCS1",
  "key43": "21s9hy5s6pxADqEHer8aGHUCHFoPQWT3KkhyKrLPvPArSezHtTtBRkdUtxqXhBnooCfNHXhPdrQY2mfYdcLmXCMi",
  "key44": "2t4Bqj6yQneJqgKTECZFZQ62mFe7Fe8AV18fYYvwXZzqJFZ3fuMTaXP2nVjY2GirXhr3h6esCdN5VysN5YrMzuyJ",
  "key45": "3TWPLbFtX6DnZK5PnfJeja2kz4Ky9pEtFfB5jwYdbmGVQ3kZ9yYg9GaZTi1PLiEVreMT6Xmj6eK2n2vj7CQczeuY",
  "key46": "3AkHxuPW5ngrfV9qMpGdARD2Tq5JHCWK5an2WN5DwUyk7Ea68cQjrmaZ2VMMNAwu4mMAqZAQqTV5BQLrhNLNX9ed",
  "key47": "32JgcXiCUquYkWBoyhjQCVew4hTj5RbxRtfuzwFyMrb6RceFPigiXZD1WhNTdL16E7hB1zJinYhxHV2Hb9QPHSV",
  "key48": "5AjWvYh4334qZi4gxBTsGTyRTvGLwniwXuLnxVbkuymx8CrYXLoYnKN1hw96dmGQLHD6bjT5WUu6indk1wsR5xCo",
  "key49": "DcWde8DvQye5FkG4W5kqYx4NX4aZESPYYW7CGpenu7GGNezPjxxEVwATYFWKBPDTBXZgnCvdn1cR1FuwSb2qUqb"
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
