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
    "5cj152k5v231LKSBhLCgiF7XPvbYCt7bsyYyPVBHBim9bZEPn6KKdnDAUhJ4gNKquaL1HkkQxTuhxUG8wkfVPh4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCA9mZtDzKqhrRKYaAAKpvVr8DVy6HfQbMGK68uY35TJYkx15YufG3bgt4SAU4Xo19WQq6BqU6fEZWHMm8p46VT",
  "key1": "5nfNH3NmW19QcRMq7YPFt5CJcjzjwU9VAs9q1qeeDzLyVKrosfcVW9zvv6YGhoWpHeyn38tPzRrRtRHJSZaeqLFy",
  "key2": "2b3gDg5HECkVkwiMctpcBF14PzFgtdbCpLRL2kfgjfm83X8UTNhfnxxReNsMeTQME1N55uPUoUDX4GgK41Czsrzs",
  "key3": "5tY6QMFFYb7BFZtheHnPHNJxZF47fRsb4Hj8v1yQ8tVJGnqLDyXZB67CJCFpKZTxMFUio6nK8a6ABwAz3PcQ7uHA",
  "key4": "4XLoNxEDELy7Stz3aPL3XAwRAWgXtZfEwUGZ3QWc9LQQeEQAHJ6rQPViV4CyLgc3XREV151Vt8SJVGyXmPEFkatC",
  "key5": "SfxosuRfyrH8J9L7D2wQ6hnGxtwnaRjx9BgP4fJdoZNjbhGNBtvz8XRqFaLFpDtTx5duEZQQ7eE87HFrXccMjHX",
  "key6": "3pv7MT31DeNvDQE54evtWH38xGifb86wncYt5bJp2TqYUHpL5eRTiF3AGjUSGAKdTaYrDwSMKfYUEAUD56NYmBcR",
  "key7": "4PXU63XVqQ61U8opFAwNxXW7E9bMnyrQB2AJmv9AT24AQFp9JsX232JbTtMaSYM9XpkaTDVXEspijibKFvSAsWYh",
  "key8": "231aFVFjAeHoUM2bab13aiwjf8GMFRGQfCMZmiJJxpevqhfEn2wK3royqBoBt7zBcNutKgTL3Mb5CBwNpbtrirSz",
  "key9": "2NpJpkMC5NRHxagQ2wT3xBCgpzxNwm2AGdAfm9XumaN6sGrzncgRocQ1bQRBrq1Y9wFv8G6rHwMpFLN3zqwNEJvh",
  "key10": "34oUBE35atmZg5prxw8LfTKgh37QJg3Fk9M5Qg2K9Kjrx4L1TmFaYqfBhDaZoJ3mcsNtRtnLB15PiTCgf6eSjP14",
  "key11": "4f83y2ntEQC7yrpBasY5u4VH8tSPdicWUQphh5gheXDmffokKRyRyJ9vpkSbC6rF98GLenrk8MEU9qVizQEmNxPt",
  "key12": "41gsCwyuYMU5dtfTogFfe2iZALTRr3cFpYy3hoyJVy2V2ViZxuuBKTVUFSffnedmBRRJ2ZLQ5Davykbh4rH2TcBS",
  "key13": "ivZoVnbzAfQhYpmZibeufJ6JhiWN7V4SaAvLjsj2pwHLNiLMFZbRCuR4tgBFF1J4fPYrWSSN4eTxBzm6habcvn6",
  "key14": "27qfm7VzTfZ8aqGE79r1xGudFXGSoNkJ3PpNCo885UHFANtfL6XLGtAe8T113ytGbgcb3aSXcLpkht9vQqpiAL46",
  "key15": "XwJjxSoNcfHR5WoFhAvrQtvt6YBXU3aSLCHqYvWTEqAmv5gCT4BjEPYV19uSz45wb8seZTizaQh7Vk4NjYkTvt4",
  "key16": "52DNJHJ9P6Lz9F7AeV1svwBLEZUJDPnHtKPDgZJMmv47knRLCWoqzdV1mzrFx42omHoWftZ1Sz9FwGWXqb5bJ5an",
  "key17": "4RoMWSvM5WwUsxDoxR4J4uj3n3pQjQx89tYdjYJX9FbhzNQ8Rqy32KgF2VnMEEEq5XEqNTqn6joVdG54eD4Rn4hq",
  "key18": "15sV8F4LvFQi6NUQpzED7hRpfXRtJz71RbZBwTGEiYupnYwoBXcxYwinUGHgkmPw5RsEUYXpLZEggHvD9AomecC",
  "key19": "xBA7JXomheuvF5FTDdW9drrTavxc8bQ3KLDKzPNSugNEA5UdVZHDCSP6z2TGC7bY1LmB8USuaDh9fK13jZhpcF9",
  "key20": "UFh6UuGiUqZW4qbZAW6SfmSaKZFY6Ax5Cxgmpcx1WMLrE2EuNjyD2fcs8m8zRMZJp6z71VhQL8BZ8Lq3aXBTsFG",
  "key21": "4US46ytdemYakaSysNYHe2ahN7gcMcb4Dh5tD4LkWNEjNA4rL5YMNHgyJvDfG1neXVKVZDVCoAU6jL8krUNCYVFd",
  "key22": "53mV1jVp6d8v7VfcR6a1cLBH5QfVUvshAFTbcEh4zscAF4V8Q6xTSyG4KgZiVsMBGVxAHMcFasdbHiFwADG5Xjye",
  "key23": "3hroyvJiQWpJv8ompNvCqKSajbEt6XgvWAwhKbjzgLQiQSzyFS7QYgvUmCsBnH2mQqBFCknnPhTRCVWr6XWEeDD",
  "key24": "54i4MbZ4G6sL3TNHeLm1xRnGdcRk3dd2yuoZkmwGQpMy6sktVD4jtks1J4vVMgZnqencQcQ7GNFFKPhdX5KeiwQv",
  "key25": "31DrB8NdJQSxqxBniJK9wRZ41EAfAT7nTWVWrJkZziConFohjVRryHW8KvJAJnr8QFvMDzFVRFRvAwSpEeXJ7QeW",
  "key26": "5k9RwsU7FC3d7XdC8PGnGhqrT5zpcaYsc9eRNHz4ZmeNheo4d9XbB2cKbbkcxBYa3BLiQS3FpBGgXePXh43EaKJt",
  "key27": "4Kf4PpaSMuachNBzB88rgSdVgUahyskhSv72q3iyqRhQ26V1HK3khUpgBRen9JznHGQAat7RjT49vWUwvtpmdLYa",
  "key28": "4ktbY5JqJLBaCyCvZvuFHqosYcdDXMaJH7f3DC2dDPwmpmCjNzBaxV1ruGTFXZMd1CG4PctWRcYkmtUb6vjWjzUn",
  "key29": "27FVNKUTNr2qzgiunutbfQUBjJNP3RbCz6hPF7aSTWUW4XfUGJeoWiYpgsVQSioZNErJuNoYKSqk2u2xsMeW7cuh",
  "key30": "4npRvk32HvXsPazSUkyycRSydhgrLQ7oy54KVtGfGiQmERoQ5wUJVL1L9FUek9KSLegwWLsDk38VPj2UmoNBaC3r",
  "key31": "3YdSyoizcg51XfqXH9y464dwToXuHAD9n3V5vDRq1omZp6Sz7jN4FjB2rsdon9GP5A7cKDfJJ342TyuDKkpNM4sx",
  "key32": "3hUpMa1TdkyGoDxx1bNimjuZgjg5n7V4vP3SfCBmsCkUEK4YXSNXttkSFVUyEhk5sAs4g1i8WkbWhDyt3ogstcGd",
  "key33": "2FtSvFEXme1APK7xfDPfeVMy1LgemeQ3GtGBe8nBDoAoKtm2uAx6JRiQJg3zEMLTANit2BV5H7spmELAaVC9UwHv",
  "key34": "4exzWeUXXN5MBF4wtGdaHLiMFRCbcL4rXUTuKQBtPu4fhVTL7HXkLCW5pPbK9jCM9nYyTFJ7moGCeJssWXxevvf8",
  "key35": "4qTZQnC4C4aWUJ2MdHfKK2qCXE7UFQkJ6PJxNxHnUuy9WjdVcbEQS4w4yJ1yvt5xiSSeapc8xw1sh9DcoZr61oMe",
  "key36": "3xHBdNKuagjhbBADnF5iSBZMMWmZZXbMbtRGKWiHpFTPVYD9Juizmu9Mw3bD7umF9LHQUBAEaPrAVKKbrvykvE5H",
  "key37": "4wbKQszm5zDJ5qjG73UU6yFBZKt3n1V34EALYqmLu1br2kcZ69xhPrHengbcoykwPRXu4r5HKGkA2WgEmcHBXDs2",
  "key38": "2YXGPXxdveQrvHhRrc1FaK1JdL4fLfbfcrrwtBNzXWvvDFJZYmfjtyY3AifJaeFDP47dbZ9oSrgWRatWjD1rHYC6",
  "key39": "Yn1jGZxrP9hAdb5cVbELrmazXFm7KLygAb8zgK2Vj1gaGVthZF2bEcrVMNobhi8RWijMNrVdbkFnEP3rZG3suQF",
  "key40": "2MVB1UWCTuXbQmUutXu21B3xETLfD6TBDMUMkyXGShCS7ctHYJb3j1mir5uG2Wnh8758it21sSfRx9DxLFgdfvjV",
  "key41": "3i2oEhm7CUGdT2yYR5wfqYuhpre5fbbdmmi1G6KvrH71k72Z5gFikSHyDpFAJ2GUV7ogEW9CP1rUrFczwndWtJt6",
  "key42": "5xyov7CmnaDpwCGuDL2X3yhuyMK5ewM3mcnRYAfMd9UhAmZvQaoGyqfGpQtz5B35CLn7uc9WrfwoeujCvwN3mcWS",
  "key43": "2Y7nrxSrsy7nuFwFS4ihe4SGSAgcRkssfapcQXLppxrfStTmwFxoS3FWggVumHkwdtpqHsKWhgdoqdtMvo1oJdY7",
  "key44": "43Ka54vzTJpnUhT4fg5sYNLsaNvzB8e5R6JUHxx4ohMjakDv5EjPDaSgRHvsCs8cZdGPzLspF5LGpHQbYn32hNgj"
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
