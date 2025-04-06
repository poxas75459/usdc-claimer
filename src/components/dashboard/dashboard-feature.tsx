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
    "4L8ZsA8oZ43EN6tF6LmnN12frK3ZyysXmg7uKTJuHHSU9wFFfLY4mC1P2Wq7kUipeyVYE7nJvaarrZUAxECJgWsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kVAvPHk3at5d1cHAKzrURnpPsD8LoDEX63qtqNUGd885H5NW5jB9fYX7vpNqUhFRaBQXzs4F7LSCfLSnNT433uu",
  "key1": "2sNbNJFyqhUMGABSJPPdFy7CRjeAyu592LNMCjSXF8HxJF2v5ciaEEFENNoQGD5Y5w428GgwqRWk1HKCLNsCs5LE",
  "key2": "2z17HBxdwN8UrguWMbeGwscmQv2kqYZCFos1CHwKzatg8bfsCJz42ZKpxnJoAFnuQrEwqEdnsdsgTja6rgopihQ2",
  "key3": "3QiFirHY5sWWqhb4bHTxs7shYy6QQrt4UP8USE15Qsce6jbFwp9epWkpPzHmn59quopqazPoA3juXAHRye8dHD71",
  "key4": "34Qh8MkqbGrQLh7Luz8zUWNKp43i4aepFHJzaHrGK2MgFcbJBk8HTjCGZLz7JKi5VXQ81cxYnwnUWTw4MFRPfVLp",
  "key5": "5xM1PFzERsYrp51VbbiPNh4WQaQgiTGvxGVHo2mF2q4K6FhhF3jb2Bz6KFrsSe1NgVGvAwf68gWuDVzXaj89YBef",
  "key6": "qe1Xi3SrUbdGBDwhvds3FPKhJR21RPTYfFGsx5yzqFz316BQebLRSw9sUDRwF7iHRqoc8GkZ42RibgVgg3RMpA5",
  "key7": "628bhB6huNydk5HQYra1FztQ3N2NB4Zpta68xGqgNe1iT4gMUjTYhZF1vqVJcdVouToH4iy84BxUP5s1PkokTEsM",
  "key8": "5JDwBvpprwdPtnKeLHEw6xgWE5tNUWucuPEWke8q3EvxjYwfsVkhNNgJUWbWFWjxGq42ox5bUC78GrijLzGMvzcz",
  "key9": "33hyZYcfqrVF5vTzvLyNLVEfSLgjJXk3i7dDM4CVojucpZV2CHM9NyLAoC3Nq9Dpsfm7AjcjBZNRrUGW5ivBUb7F",
  "key10": "3PAVX2Rw1QVfjpyzYwfH9Kq9SLs3vUFmBPQfJH6CCEqmEVHohwfCXfVb3KyEq48LJkK6W4DgcYwUxBrcd8udLpW7",
  "key11": "42eYwQCcxFvJDy1NVeE4buJ9jXnKNiNxaqWL4UPjYTYi92DkAgNgEZfS7xwrCAciMF3djJzSgnkzivemLhw9AKMs",
  "key12": "cVJb8XC2q4WecxKVwxYCjX1iZ1jvZKM3FZdp1ytmGJxM1dZFY3Xa72NokAT3EYMWX6pS61MRjk6aPer9xPEAqMs",
  "key13": "47JLXBRsJk9kWnysfLcLpv8uiuWA4GE8VwGf6zNYyRkSacqYmtZ9z8rC3TVnMWqqAq2tKArHDnASFRzWPafV8ADd",
  "key14": "3qFS4XRz6YrWXF4eZ5bzgs6i3FHiE8VXQR4WdzkzERhgHMCGufY2egjtDVnwsVPnNVoEJMSSFpUjSjcqHYEKYA12",
  "key15": "4Cu7VjkYtTkGajJZqXpRvvAD1n4ew7nSdRy41AyW8aAjD5zMr64n6PV9gUZa8xbDtdezZNtqhqXKD98GVR3joAWn",
  "key16": "4f9U2VxhWTHW5FUxXoybP3Z42Q6dgsttoQJD7o8modWTKyqhRP1S9SGoUWS3zyjipr615uFmMUkg7HNGr7eYEG9o",
  "key17": "2SzoT5jNsozT9KC7JMrtTcLCLkA4kf5NTVXd7Tr9eFWTR3QpACvWpQV4braspuiJfKMCdeJgUCBdM31pLhxNsqfL",
  "key18": "SLZPGNq5vxowUAFeC1VqyESph3bmTUbid6nWCDtH4RCdRhx56Pz7k7AfUtaHugJDubniKPDQHPw5Qs43Yzz6PoS",
  "key19": "2eo2Pkjy2cnPhQ35QMQvspsaxTyVU24C1LD19qDKUKcMDcgYKPUmJQi123yghmWuqQ3ohDSeiSmiPUTaeXLRQbgJ",
  "key20": "3LyAipcMsTiWpDCyhYKgF8D5mbsQFZDqpBjTRWwak4gmAtggdr6J3rV7jjp6dACCjWB1erReiuTrs3N7o24mhDp6",
  "key21": "mzShwZhSHhiSR1VfficoWd7YZ64XH4ykvMvgi71sif4A4Z1VDFdidko66xCzTruSBfa4hYuH6n4c2LVcZBL5xVo",
  "key22": "3B9rKKVzL8xzmTdf9N7uYUnUZwd82aH4GajJLD3mR9dhjJ81uk5S6cSEqJtbEZ2LJ32asFZ5YFWiTvbv8rKKKuYi",
  "key23": "3ssVBF2jjmHL4BTN34Nbj8ygW23K3Gh3zq4f84HTPWE7dToc9r3ydfGwhmY4vZNtNiCw1ELNwX8gzLK7VxDMJqgD",
  "key24": "vDysnRmr86QEMKr3fNrT2G3yGuKoiQw49AwkJmh3woxxtuW5qnKjgPAXyueSemVNCMbA4bzqdmZTtyXuJFQp28v",
  "key25": "4RJvTBJo6Nyit6eNMutn717xP85GTepFhhKQNhPtB8WoSEZQnpp58ytwXNGJiVA4eERNPssutzvQRir6uE9Zemqf",
  "key26": "DvpTcQhCAVdgdqdUE6Mt4Db8KnL4SbjpdCYCdCgH6Vr8dMFZC1zBSV8GM9CwNyTg4PbMPMVArcpsMAEHvHseuYW",
  "key27": "4xLR6B82XTyA9U3Efw9VKADWuXgLZUv4vRkUmszanHm3GREE3U3xfpd6j7tvvFbfxegFL7ELRmGtrbcuPbHfGdzc",
  "key28": "r3mPS6XDvz9HBZYTcq8jK1wuzojhaKd6PJ9moBCEzE4GVrQD4bRHXNvPxaCUzLdP2R9AWMNa1c13mr5HHfS9ek2",
  "key29": "2HJbq8snoPVxTsUrUW12vwGGiCR6yeG7UxjcbZkr4akgSSog2a4sZMsgNfGbUpYZuVJRnH9ZRPhn8pHCQ8ChRMdr",
  "key30": "2g7uJWR2UjykovL1RJ1AZRMZDLrJERXJH9JMf74KoKR8dP5kifJnR2bFE5pfuGgWeJTZdZTinEDz7SPGPwgEHqEj",
  "key31": "2awLhQzbPSHaEJ3CpTKra2Y5vvANaJWe8YihtRCciPxhv2FeM5NikRXKGqX1qzXv7FRov1zg2HVazvboTmcj4mZP",
  "key32": "5spRi4fb1bZwRrS3pYHApoy8MTfZZxM7jccSSyJVwgJ72gVFs32UNsddmXAAA3FNZPFaMmLUstQSQXauXUW5ZpYz",
  "key33": "5A3AuZfc6jLJMFqewBwWt1a9jgUb3qNTYJ7gjTSQmFfAjjMsCKTTDgWyc3J8Bt2HtV2FTMJ1E3V777s4xZvPt8NT",
  "key34": "gUt4DMkP37zYmozStWPpHB1XtcRdeLajHNU1U2L5Scvw8xzM3HNSqtpapaTfXGT2RBCYyxxtgpoq9KoQHgYWCwo",
  "key35": "5hkVWitdpNGUZiG6GqLN9ZApMLEUPNAkxyEjM6nQbADRwnzeFqeCB2hn1xfDA8S8LhyvkEPa6367EZ1t7SWVHn1N",
  "key36": "FfRvnbdnPSYoY5dTS65RWhKHmS64p3SSoYhzTZ44Pfcy9qg1urajBfXQE1Yd6su3KSUdEWbYYhQrEcSAbiDGvcq",
  "key37": "5AwK8AeGmPxUefCd1N3UWFAZKEmrT8Vro4RqB44F2mXdJpqYG6fe5SviVjvfJSWfBZuoSTQ3M3JkebcDH3wL3KuS"
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
