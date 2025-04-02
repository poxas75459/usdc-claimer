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
    "4WK6EeP2o2fkjy9LXDXFNKeaPKf6a1UJPa4ADnrvEqPMRmizAn6K1eMdG9oCcFM2u6TAtk3e3YUubmvaCXSj47U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AmqUMPieUAzPPmHTM1giqHHezDARJ2oNj3HLsBBofJ51Q44peAXAAKfS8Fh9Gu19hbkXCf1syRGhN2gWB3czE6R",
  "key1": "5CRayx4j3S7UkKhg9uC8f1AjTgfJ44KtExbPdSLk6aYYkwzKLrT7uKPgv2zSJ6E9odUu1cZbjn6gSLf4BYqCKaq8",
  "key2": "5fcceq6G2rHgPYqC3TXf52nmuho4Ze2BDM36SyQ8AUbVv3qheJ4gNeJzmCcXxiPbZiJ69hKBQGq5Nym4tQWcim8d",
  "key3": "UWcp9zPe1tkKTas1PhkN1fi5ZSTHNqWYTUt75pSxANF4NhZo9i7DryMnW7knX1rNRpWf9PLmxNkKYXp79F2aF3K",
  "key4": "2qRv5FVB1T72JJLeYjAAr27FkB3NxpU9LvM127KuN7Tayuk5rpMuyDucWUnPTdQGmpnUaqGqn4nWdnYhBVV6qZa9",
  "key5": "UBP2nEyxP7cYWh5RbZjwertWFeT3zM76W3X1J2xWNxpyZbb1aAFuTpQtTWY4KhzPWvpTLz3KbdUhMrT9f1rjPy3",
  "key6": "5JNn6mMuqsfE7ouaGGc3WmSEbNTNTJVzcBgFYQrHwUVAn7B1DXcZyUPxcUb6xcVBEnPdegMk8RYKAA9kKxGjxJxV",
  "key7": "3cPAoD84DjDt5T7qmhSr4yfxBG7NzE6t1JATQodPHFdZspkUsken2mVWnaSCp4yW6o1chXQkgSQpvPxKJ1QFEiAs",
  "key8": "61BtjpqYFivUN5zcz1n4kJp5pZrQD8TQbGvrxAjttSkNYWF1niNuhVhMuwop8YmbhuRc3gJySyLwKcaY6VhWhrCv",
  "key9": "25HFND1xKNANbqetdWwf7gJvY4B4UoXmxU2NhAms3jhXuZXgRfTLcWN8YhCYxikGVSxTxHvENzXDG6E4Xs9bZpRB",
  "key10": "4b71om4jmZymPoCUx8MAVvcCsynMoQnJa1YwNthF4VAwGYpeHrm4cxSCmbpELtags6CyLynETEZwLaUgV1NzVKkV",
  "key11": "3z23zu2NcyiYvxWUA4Wb2ByHf23iw5qG25gohZacerMr4KsbdepQ3kdaHFTd93YMACJP159Mg6BmGYjv7XTQWzCw",
  "key12": "4tW3y9XEkGqSFjUTqrR1hNDWNBiQ91k6PoRVLwswVkCKDRaaMAtKZ1Zy47MfD654PuqZ7nPkcyrV6bPtgAD2Arf5",
  "key13": "4osKSJbxkCBeqXK69U3koCfmCkpw2497oJhkXWMkpsxWfhgbFYJVrg1Ao9RTVCHsExbvbw8uYTc3NnYoNPGSexzo",
  "key14": "26Sn26moHuLhGwYGwkAMLwEoqDABjHcvhrGzHJMYMB1xBPMMx68C9HD6Fdf8o8EEe5U4okCvX567BBenjxpkxEcb",
  "key15": "3V9avWiqtfKPbToVnNycNESrShR3gg8As44ttkKXqHQEe663cW4U4GVxYyJszvaCjmMvT3DDcx9pWuRHZMDyeYqz",
  "key16": "4JayC64CuX2U9nKPCy1YmiEAT4Y8WPjbvim9g312HgC5KEPAWJ51LKTM65TkHgipAoqbM2jaJ6D6D8fPzFN8jXpk",
  "key17": "5hHf6dYQydGiLLka4mf9xccKSZTg5Pc3Lks1TeRYadFnzMtc47mYyDLvY54skg7QU2y6g9PyXKqqzis7sZrJjx1U",
  "key18": "4PvAKkbQcMS2YGkWVuYWJUVkMVRQup93gcvWXMeAGSXKtwVWjHiwruL8sRMmDRfrAyr8KTTehCuxspBtejPCvyo1",
  "key19": "5hyyQroiyvUBu41uDWEzdF8orPgbRaZPesRbVdcVtvzceYUTMrdcPhLeqpTgY8KKjjjHoNSHVHGZch2mYwkUeNfn",
  "key20": "ToS68u1SgfSfqqufU9mHGPEaZv4rwSdVpDxJCBFD7nNTBygodGaKuYByisXTzwvisxqAHcjJju1mGKeuZHzTP4q",
  "key21": "5rprmWGnJMKTS8bKQP1kETjGuE61wXHpB6PnUY7sGEUafNZMQ7bqfH3TjJN1r8HXZD9v2CruAUrZoi13SHkE91uA",
  "key22": "EW6R7xfMeHK8TKbewnZMujEQdFEKV6iAmn3bMDPoH6hXsaGAQQLHLMyTi1nF5Nt2583YaPPjFBjaG5eh3uaMEWU",
  "key23": "QyQoPcx2tdxJroiYKRafz5d38UDtsKJABuUGtWvQ7DNfkvm3HfDvg2HneyVuJVB81uv6zP8gSAs2hcJznaiGcmx",
  "key24": "4VaidMgx1Vo74VcmoahcjbKZgaM5AJKXz43bZD95EykT3Pppk5KJP2PVy2Xg8cvwGxwHnyM4stjgiQtZDQBPojiG",
  "key25": "3b4A1vbtK5vhxBKxvFK4CA4D5NjTHhcEhK7fQseUMjQQmqPkq2zr5JLJqENUoxrF6vps6jj4VLw3RsgxjX5VxrcD",
  "key26": "61bpSoWd2zBUtEUbGn9yHbn7xFK1krnfUbEkxcL4WxjtYRDXtJX478faTbyED7p9mkVz6KmR3pjd1Pt7xBJTJkXM",
  "key27": "5JCsZMe5SsKt7tJnVoMXr4TmWWaWdxtySjMKT3WJHTbrphEvejNrxVTiLxxTEp8mR8HuG2EjTLFLpMcZsu96iaYS",
  "key28": "2qwLjo6z6CYH4YPYVyxzkzPMRRTsarnGDkTj8ktc8avPdkViDMQL6KbZm9sd21fPeY7pA7gakWpaNmE11hGAkYMK",
  "key29": "2GLwPeNsfhj3srNCQCVjMKXuQmDi8acwXV2mU4YDgtgyiKYYxF8J6Ycx4QL2Rtc8fyS8AWLMrB7J3xdGWVVHR5HZ",
  "key30": "EzsUTJdPuaSJEkhot8CoNNHvFHCEh3VrG5s5G8okg42DGyt64ugspDjpB8Nhrvx4diHRJYVrTgnWYMMuHd3v2Mm",
  "key31": "4dHgHsTvx2mjHU93jroUcrPhsS2JxvE3sYxDkW5R2daj1JwJ44cwVnEgE6GJC1N4y5qbDtxTrYn3EWHbc4iyg6y2",
  "key32": "2aa7qEze5nEPwx6A1TfSAz9Aknq7fiYJt7YMxSLu27Z5ghKs6uTPzKFm2YPNR4bfYpiQfqfV4k4ykQFyY7sTj7H7",
  "key33": "4rmBQ8tQHK5YdMzQg8KnAM3mJfqt7HMFh3JiUBuWsGPruV7XRBMciSToaonRYmNMLqahYXcMmhq2qBMD76vn4A1y",
  "key34": "2nzJDUa4fJKLEDU3khag1HkPrg4j659rcu8mRgZtyjhFifohngzTfcz9maAi84XWvEKYsAS9KsEN3C7C7indAbLV",
  "key35": "VQxQVE5YRTDGMsr2puz3fzQ15ooN58DpPuuhmc7wXtPhBLAdMaKji3PTfqg3MmvBggWucVEmMX67aiT4tQhMHPw",
  "key36": "4juBVhMVLPCjDW38GzeSFtpPyqZxWaQtFCiBf6axNcw8DGXSR2PHbeJjV7SXCDM56M5uxyNVDnv3HABXfj6tcAsZ",
  "key37": "5kyZoJX7YjXe1ZgUKnRkpifGWGh9DGtuoPeZvcQhyyuxKkZ447kgCs8ZLM6sFQdnNzoCnFgDccjmkNMFifzRxd4j",
  "key38": "2bmRMmREhuiazYzUUQaJ6CuN1KJTSSoEVJF7uZfNEGvuBML7zQwVmXoubznBZd2JiaijuZQDahxtMMihkFygtZy7",
  "key39": "JGw1AcX7CUymboEhYexo6croSuBGjhrsZQhcFx9YqAM1z41dUQsLZEsNP3BHgdaXjPYzfyrSoeXWY3FBMRhcZf9",
  "key40": "4qwm15UqGLkPEDdpqq8cMTS5TxGRfoDZiiyVfnyZiy6y5itCS8WPSZhiWLNzNus68ZqmCzcDi5AgHVzJcLGPSJiU",
  "key41": "5JT7Zdp5H41t67Mk5XK1gcZkLrTMYerpCcNBzyMXC3fj3e7oB96viqLuzaseqXYSrTzeGWPai4cyTefYEu8AxJ5W"
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
