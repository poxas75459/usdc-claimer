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
    "uH27zjUb9Rop86LsUXpMkCXddtcRnB7c7ui826mMKxhqHsNqVRM4r2aWBahgrsiViGe7JpYp6xVB5Ge2X9LP8T8"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5TiVf6hfAyguPvumcW3m2FsyPpUTsa6T4sRzX1jLbWZ9VbBTvKBzqUSmefd6w5xY9b4ZGKkiPGskYB2A5jpjPwV7",
  "decoyKey1": "3U1uHMjYzDgaNeczCViRCqT4ir8FdH7TsbamRDVtjYQsDtu1zdNd1MUFrhX44QcRw8Nx4Ci9hZ4NiQyeXw3R977v",
  "decoyKey2": "4rNAZCoAUbjVfTyio6iFNPaD3vWp6R26XbcYxbxzD2vrnniVSqEaNQFsDfWSvnsiGqpa9FmPM1aQ7cfK9hQVUgBi",
  "decoyKey3": "5K26re3aHWytKD4puEhbykZYVh5RAEfoJKhtNSHTtTEbhWVQku2xLn88oL8JP3MupUee9Fg79HQGYZrDgCXnZPNe",
  "decoyKey4": "24tzUVEtLqxAx5AYykkzwtVPWtEpryftZ1KQLzY9kfADL1BMDoQ7CnifE5ryHtajKsRJWSsTm6kyqzZLrUDefLtA",
  "decoyKey5": "3cAKfBS9eYUsVnR7jW5vmrgrP2pHq6tCfFDM2D1WFWr4N5ds3T1REsoCSZ2KR1g4Vmw247JiJWkG2iDod6BSMQHM",
  "decoyKey6": "5qTJL2exowkrLxFM3kQ5YyWRZ3NEPKR3eADpAkLJvAwtXqSFVJzrGRwqSHvB6csJs6keTq5hFq6z7S6vsu1GMYnS",
  "decoyKey7": "2bhhDdrmsvT7Q1RzeN8z9bMwbHx9S6nJ4F4tzWAZCS4gsa5FPCTb4LmTbmUTAKgWXs3XgNryMnNrBLrhvDhZPddc",
  "decoyKey8": "4vRrLoJ5QN8R3SDdkqTmuitkCgo2VFHFBdyTmPJPiuYVrCfx5UYL2MPdnpR6CyWWrR6PGujaytYYHBsxDbdAGGNz",
  "decoyKey9": "38WcgohKHoZDwj3HcAEoBsYxq7jYqCa8M72MA1DNrGBeqP1G4ivYBza4QGcwJrTsC8fKm4AkQy5D4NTt2KFXmboV",
  "decoyKey10": "CLDgLLdaG2ZJk7PDwrxUQ2QL8vtyNoRRQb7EaNfmv83QWWtWZ1dQVkNXvSH6Ru7B8GQBsA17zouWJ1A7Lv3N7ua",
  "decoyKey11": "2AzUuaBix3sJ4428z5outZLPBgpFxw2T8H7pJH9KVMqEJrwiLtUi5moDiEh6S3RLNBgb6GsysHjwFRoq5DY3eAdu",
  "decoyKey12": "5ErpewELrgVLPsfJLvr6wMp6wkWYDQ77ZEvH9B5qfjtsULBoPw8d5YKyw4bPYUddr64ybVtpbjXhkhH2kCj1WQWW",
  "decoyKey13": "59W96F6CJKz4BDpihj5Grmh53w7mq81vWeTukom1fgCT1h52s23vEtojih712jKzBJCvZYbM6rvsyN1NKGaLQKY",
  "decoyKey14": "2v2JuoJCukihA4Q1b9haaKgCyxr88zmHS7YbaVx4hcaGrGECm58a2TmmXfr8UJFsbwZGhxqdNqpFxJEEnmAHeacU",
  "decoyKey15": "3vLJpnxvN9XUwmJNk9VPuGdDjEWKJnpunCfrsGEmXSxrcUFaxWtw896Rju5soijAeYboJjaYTX4SbWHSrkU1w652",
  "decoyKey16": "61m9ZUrKR8W4jpZsM87qs5BtUJuqULnk3nYGn7f7nXwu98d9mazwCZZGbk1tgGK68Eui2n5g5eK4C3mneDKrtB5G",
  "decoyKey17": "3fGTpHsyrfh7PTJ8ddzjmDcv4VXtbMuCjy12Ad9PXobWbqt4CJCB8XKUyKbqnK8Hj2cWqMh2KKsfHqRgWvi3AF1T",
  "decoyKey18": "2zfHv7CUYS2RivWTjJrXZitDzDGvXkgf4EH5jbBmyCsLaoL7GcZK58aDyPFVjL5euLan1aSwaDWDrMPWt5gJHb7w",
  "decoyKey19": "CB45KHDCW1kmXjFaoCQJmkJ9m4CQNYgkWxby7DRVqECP23ZRe9U7ksctPMfKA6NaTFsqDu5cDWhFd38Tcgzgc5t",
  "decoyKey20": "7K6jeWMaCvz3oVgUx8Bt42XpccsiZMf9u4QpwfCHy9tPtmHz8xPQnBNiQbzRry86VVgT2RKz7ArGXui1Lg85unf",
  "decoyKey21": "53GTzhPk16qRbsXu3PD58VEWs9hXoAhQsfF7Vc9SJ2Wwd2pCUaBLH5Y4CTF72mLWDZKTNa79iRHf8CwyMHtAhKBb",
  "decoyKey22": "4hhta5XxG6B9sbKf2opNQxWwW9uQGdbD3wYArXZbrCQY5EJdj1vcW4PvNEqTyWTt7riqCWrkFB78JCfmZrKa4Xa2",
  "decoyKey23": "3qfu5t4McYJmMUgF3JZpMp836Bg25jwZ6WUbrS1A25bwTUNiJjRcjQJ3HdDNBQ2W1aLqLALxGoQz4m5JkeLm2eDc",
  "decoyKey24": "iujudcTXwAHm5X2RSbp9J2fj1vEBUS4qW4MJP1TvVjrRH9LJxW1JRsoXiNEXQPTKnEKf39kwt3iRWhvaeBfZyfW",
  "decoyKey25": "5XNUSQvhouaPMSRQ3WcpnAHkMAkoNhUS6gMVJLie1Xa4194t7KhvWg1bAzy9BQP7B1z64vjME1nuBtkBavozPchU",
  "decoyKey26": "4hsLdqBubFWRS5Gdt5Hq4KyNT6CYiHJ1nwh4hzi8keSaH9K5rxGTJagtSFTyJmXmz3MSRmcXMNxoAqwmoASqmPnK",
  "decoyKey27": "3XsX83kfULMYS37LAtWVMNukzeQtDGS264rcKsrVYPVRHANJv4LVK23vQHPoQQGZJ1cwLwMbU9Gs1mcrgaGQNtzN",
  "decoyKey28": "5R1rLEbHK4PhJEi9LQ76uMn9bAzZQg3h32PRUWYZbiRsVEJUMkGG4otnCLrdzdTH9i5LxsmAwa4m1dJMKFxbFttF",
  "decoyKey29": "2KPKfyx3aupHnoNtF1VNRcJ4ThPfXQWidbKt5rPjRCbxE5n9wVmLZqFE3mrTgYUg3htTtaidEZpp39bpWRyjzgxT",
  "decoyKey30": "4Fgwx42HtfgES31ewmqG6xfB42hxUcR8uFHpMFG9Coap5ZNR46bDkikPUo4sjFrWAPeBU4QeWm89JSBBczKq2zCB",
  "decoyKey31": "29hCtLKqLcZd1Td5Hhayq4yHD4hdGCZzcvXrHhuV8dnepGAgnuHp388uhu5NQJtU7eC99ReEYex3GYVVm8NQyxEt",
  "decoyKey32": "2Uku1HRLKnshPGhV7jChJSExnGuBDE16QivrVAtct9D3MTe9MbT2zwK6YfLbjfKahFiNe6shAQdd2Pev8U9TZHvp",
  "decoyKey33": "3Hwp5jpJuLpEfdqHGYEt1Jxa6p42XdJTbYvRXg1cz34bvvt2VmLuNwobtZg5oTMe4f4tjjXQNdK1SFWdkAUytctq",
  "decoyKey34": "2ydWPwLn1aZeFU2K5qUvBWyW9wvNxUhifVFZFdhtZ84aq1ySVm4xqYCMnBiT2m7fNA7TvMk1peRUkywhXTVaG98D",
  "decoyKey35": "qdLSmMAsaTUJNnyVR9eeMpk9LkYiB5Km6ddr31B6saHG2iVT8hsUoCKogvmXpDL4HQsZS727zja1EuZfeJggU9Q",
  "decoyKey36": "4uDj4KRU4agEXjtdr6Tk9TwUSnay2uVUDRnKD5ZGn35Xhmnb7vG5fwfVmssMauqGwhAKEEQMR7wLBjfuctrsYzBf",
  "decoyKey37": "29GrSLRoNbefh2RGkCrYwVay6cV1zxM5rgaVHZacAL1LNAmQm9NpCfb6sh6YyvWsmt9ZeFg23ZFPEn4ujth75Va9",
  "decoyKey38": "pe28ohrnbtHZPv6VAUKo9eW1L76t8QWbaMhrdQdeiAwS4nH54t1r3xBUb8WRm2YWBwHCaDvgD1Wy4JaeXHLcFkg",
  "decoyKey39": "225tGJZuZKH2jFm6EcMgu7MNrvGaQ46SdFe7iQPm1zmzw3ixxywHzseyWtox6bTdxs6nbig3AFQURjq5ryfEHCtB",
  "decoyKey40": "3DaJYMj19sBJqWZPLYfpedZYGCX9t8QH4opzAiyC1xHo4S5eDab9XdpW9TqSDQS7R2gWKg5AJxXPpazdKojtPZ9W",
  "decoyKey41": "4iZQ3KD1FdXmAnPnSJVihoR5GQkqRFYL6LBFG694Z6ZmRuABbKPDHpnGrA6YYZriHsZpyLKwBcTwyT8eVktFhiR7",
  "decoyKey42": "UUYYdVj6zx1XJrZ3VSiXQvrDw78TzwQF9ADSu6QAYLUAqhVPTneBGAJmwfro49CtmuG84wDRvXKKNuxTsqACh79",
  "decoyKey43": "2JTKGPkUjG9VvUULj693pZSoo5fnhdiAtUtooosguYNsSbA9enjpRtdmyXcYtmMptfe2AwQwkHfnUAv216dVXfcd",
  "decoyKey44": "341AgRGhRkyd9k7ER7qN7s8ZEDCpww4HczDWyA2ipH2G4GXxQ8uF3sS8pjvAeA6CZ5kYnwSPNrf1emoFVEYpnAAU"
};
// DECOY_KEYS_END
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