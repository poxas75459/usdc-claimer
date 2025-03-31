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
    "2sTni2qJbV9W4zDSbFJCfwCneQ5vu7P5uJ4rpDYDMCk5B9R5HhKiE3ZafA3DWwLD5Xbn3sgeJ3cUJpkQTKXEa1dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YgiK66QkUa6ksbhhjqG6t2s9fPWhGTMFRvBNbGZAmqMqcFHEzPCYYLCPL9YMypfHTT4ajLTmvekwZFs3Gc9pfsw",
  "key1": "kZgQzq3sXjKGwiJdTUre7dNTQ9iKoGk2ettyPqFAYqw2naxKoEUsob6b1wX3kjuQ3YowYnA39iswXhFbs871UpR",
  "key2": "5ZXui9LEjFaJvPvsJQgjPVv8nwtRWvKBsJYVMecrKQuLoEqPRoFJaDR2EjYYx3kXMTjhHsLd1HCLdkkgq4k8y5UL",
  "key3": "4zeD3kbm5iE3LoyZayCNAQmRaBZUGxNWEBXbtJ1RyDTmUxmH9m5WEnw8Fejqnt3zx6BBvJmMSYVLeE7Zp2wRXZyW",
  "key4": "3GQ36JEgrmbkX1A9YXkiNQKvLjcmjxuXo2CyYbmFRy632m71wxbxNVBDbY5WdW2Khe7Ezc5Cy4xNf9Kjhvy8y28a",
  "key5": "5A4SsJwVpoBweNo758frfZckb55Xe1wy4swrMMjsX8Edg2HrzXA4owQxUJHM6d3UvykLiub6L2gzQsMaHXxQe291",
  "key6": "66kxDBWkNmwD23d898dyRaSZHAqHKtbSVe9fwj4nAFzxybtMyvg9o6ewGsPyG7rbfVjMzFer4gWLp5CAniceqadd",
  "key7": "2PtadQxVM2td8u7te7yMRjzJ12ZGHQF2YRg1DrF1s9DhQfuavDtMmjPUoaVTPEyws7pNZMqvJhXuSZKSQMPYHXGK",
  "key8": "25Q1i4khYKa5BtTLZWbeyP51KD3PH466REZpN41BF1MEgEKir5qWLkWn7Mq4aFS7qK2Kk9T3RCJdo2zgmc9hDiKL",
  "key9": "2Q9TZCetdq5sm48shHiLEiC2fQjJz87288ADYtN5KfaTjy85sYp3sDLhaJFVQfMsN7YGXVkRoypmCr75HB6QFa8g",
  "key10": "49ghnWzNu59tayPLj5Nqo3XDVtPMsPgtoF1B7V7p6yW3RrPJnsmVrU4CozKScHbRCKB8vsnmwsDQrkohQxfLF2hj",
  "key11": "67Jv9vxDcmqFdEc4yte5ShVFLPGMwQE74Zzdv8yc5jN3BP7sL8czJ16G6PBESWDf4tFtfMpuZNHZzu5cFsBQVS6s",
  "key12": "eKk2prboV7Bi4iK9WdV8T1WnqXRF35xQ6t7VFac46AquBk3ripZB64grL6fxUWE4HsQBexLXonGotsRfVLAcAWP",
  "key13": "57Fhrp52jpfD2FM43V7pM5CmuEqH4QXW4QBAmpq4zc3F1goUG5bKbYgKZtxtbU6h9AVcqtSe2LwhHmacPmABZ9jk",
  "key14": "SZviFFzmLnNbCmq2z7cKxQgAWxD47YSQd8FMEqDLCQ9nsetfNu5WMjqQmUh3T6JCpEjXKu8QhUa9Dnd91C14Tw8",
  "key15": "Sas4G3G33UFFRsffrGLD5yVc2KxmVmbGjshzQhG2un92fQTFFPnN3DHkwQ4kYtgghEBUsX1dCQTHX9GL6c2zB1o",
  "key16": "5CBn5sfYbXbwEnEBwPXqKZfe3BScFmgtzRF8b1fhfXwZmiNKhZ1mUh2CqJupjcUBfyS9mebtce6QtUwFmuX4NhTt",
  "key17": "3rT3r6X7jr6zeLMgLSS7bs1nwQh5nrrkBsrSLDTevaDEt8mjbkupsVpiUAFob77CRgBRZLzoz6AUjJ8auKECqt9r",
  "key18": "4N8r9yTNg2tFLLuaLwo8wKCtKnMftK8nujiQd6ydaGiw76ZsfnMhmhVZL2SwdZRwojLyveU49aMzhpmkUhCscjM3",
  "key19": "3MsjDQuvx7GDUNwoiLXdc8ydAhxcBCJE9KBoDhyWqAxk8jedJSGXWzbZuJZKRG3PeZe2XrQsnKBDQz5PXwuUk7sJ",
  "key20": "3ZhzxnYsGbJnGuRHJZL8aBn6MWgFXkkTizrxoKp1UNchPpV1H3YkVDaDapn3TcmuThzCYA8XkVptE2se2tNWZWmu",
  "key21": "2jm9YfAZ12U1wFdPChVDniAjiEwLH1x9GqGiqP5Hg6fMagAghGQLYKh37BYgCj5BhrKdWc4QB8PfGVFd28FX4S3k",
  "key22": "33PzdGpCBgXnjbscrpC4gZpGyibJTWd6sRY1dpNntXVcMZuYkZZMfKPoSxk1gRD2Cuz7UGZBkH4Xmsa8iqA4ypZT",
  "key23": "BzX8zSsYQQVbihuqvqRKwqNuTJ7YBmZFznzRGCZCTVv2BeD31exxBUy5KM97zbezfj6r4PJ4kGVncuJp854yWjP",
  "key24": "5fK9Dt1go1BXZrWKZuCKhSND8M3uXYWmXPVQC5643xaSrj1o11jb5sf1V66ibVBcjfiLAPJU26ZtukryiyEgWiAb",
  "key25": "2gX4ZkS1JhuW6iqCQmkm6XnStcrWQFPiWB1w8AntM7YLc1yV5bPtMAuREdgP6MtF32R7bzng8qdrhgxnQ6zcWqcu",
  "key26": "46miraKGUUCV9MRxLcMbvGXFL1NBoGg25KtCUMB3ryQGMbrwYoDMAHyEvHnQfHKcBQ11wYEY2UXkABYvsH17Xcng",
  "key27": "43AvrtGZ2ptk5jpSrWy4VheXNCPE5Dhg74TKFDu9JAJr3xgxYwKDvSbULdw8XdKQ4hBNXCLjzRwfAMzpABMnP33X",
  "key28": "5odB4vSeVocSTCJNHn5YTDMa7mxKbpS2TmAr76TEqc9RThRv5sHwhS8FMpEYXX8ZYmWPHudQDFnCAqD3FGPhHSxs",
  "key29": "61us8uxeABxh7MiZLuPbkgTDRpV8idZUWgLusXTqss1ap5krZrJTqZLzDpmWFfSDk8Bpr2RnfmQuo84ZijVaRsfi",
  "key30": "5C5s7e4YRgyt656UknHLLQVxbvorAY64wxcxSj88MZGwMf9wTXWcnrZUhb31prQfYaynB1VKwE3Ef3eGWeuATDzh",
  "key31": "KbXmJaRF2P5dX1Zg3j4TveTdiZY4bfb52Xuh8D2K5NZt8xDKxUHWFmArnBdQs5U5wvhfgXySjrur7kYJHcLwrAw",
  "key32": "3w6NiTC8rHd4TPGN75qa2gVZmdkv7iZjo68kMKiP38kVpM22JHhFuaUAg297sTp4A38GFVqtx8rX1n2rY4TawiFD",
  "key33": "ci4aYUAHxMfF6kKsHz9ZkLLFcSdR83r1MsPyxBFLtN1nRZWYDW9BzHqeWJ9r4Rcg1WYRnhroHijzyRYmkTDMPRP",
  "key34": "3QfwnkoDUPx2pCsPgrJ8es8XwnEDFxHoJFh1eLRUUES3UeJZXiKPGRMhyHMDdoqXSkUrpZaRR68tBjbLxm8PpUNq",
  "key35": "P2mBBeYKYbrneTxuE7CJ633SAhdFm9ZiyTRpCxiQ9De4xBPxVVnKB2cifoVhKZRPNt15WhHdmYhL24qtFCYJdJt",
  "key36": "5TdzzmGVdDSUQMUUfg59LBAme41UEJCjmSLSxcCZiWMhb23A3v2jd9dLFSEpijmhVyCgKgYpm7uYZQyCjEfVAz1s"
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
