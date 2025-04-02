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
    "4jaBQVwDFhJdGaazBBdxjKxUVoyKAJBKPYESNe12hK3SFLb9pdGCcD1pYdmY7j78KyEGiwjkYBARTgj8csvQSeMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4QLMuo2maVre19btUg2JKBcLQ4ovW7uS9WGrk5U5c91pseRzfku1uYrksMyaCsf946Z9vTMJXBRTb9WowfSKGG",
  "key1": "2mRaV5HHVqK9UYu8ktcP4yq1xUF1ixXN3frtVBXV4su1estVJTSvcrKZdBYMr4tEtFCxf6aCQrb9MVvM8Li6tZ9H",
  "key2": "3BCWVFc9Qu468WYg6RcCVvas6P1w8YGQRLxbZQyqWHYw2NZLytrqwMya7Z4mjkotbvMDNL89cAuBF6YMAXRbTn4T",
  "key3": "ev668VpZTJ27qdma3tJSZXkXUto9wh3SzbnyK3ysb9gNniNfKveu5StxytW74wXiibj8WrGp7BxMRG2WDcMzyhR",
  "key4": "66AbgBStzWpCDFRaZFthPAzrc61unYwhtJZ7tTt1ozupmKbjpsjN9JZcVSvE1m8eJX1DMNSSZBJMhgQoFdf6oDLQ",
  "key5": "Lt4n16SPr4knPAkQ17jvkcVuwMB3RbK3PdyTBM3Tfmqcx8WSGS3pae4bB5tUBBfKZSDWudDHbTwrhDq3qNheAHZ",
  "key6": "2proYoegUX7wxkMo9zz717MAuFAXxtJL7uGKTbYo4NgQ3BdRRiPitQvXtNHz3L2zYnximrqTkehwBt7QxPNHmrVR",
  "key7": "2va3GzbHUrKs24umz9otgGXH7wTaJH3r2ziNPqk1fjQDuiBAcp95FeheAEfmHWsrkJfm26F8D2rtFFJ8CiVyo7q7",
  "key8": "A8S9AVZ8od4a5mZf4rgDFJGuvCSVzdMmyK5EtKPqCenRATDWj1gtn3byiTNnnehtRHf1oL1kNw2XtxewSvJK6BE",
  "key9": "5h4BcvjMjnPeCyVUwaCXHXkZtLM9XnU6QKqquwVcngfDAgGQDN53sbKFU86CvFusdqtKC8esi8sEAq68pYUBWnuB",
  "key10": "32othCyKqXxFYWfNHCXWDsSF2Ytnyf4hJ61f9pswAjZeBA6wnfqw66dTcEgSfMwSg6xG918w5Bo9ngfDJPtNJLmt",
  "key11": "3AeytoYE8sdFZcStshN26DhJi4KoX8tycVmyPa9zLwQMFxuML7kN4FtfFa3xEuJr28tGhMMTrSoh4T4jPPGMrboE",
  "key12": "2qub1VSkD39tRrUZMJjzbbuaGacpGQMnJTQDQXWUgyFWe4mH1WCJy9J1hLgsStWaR5Rjf3W6mvwvJVdCwPr7c69D",
  "key13": "5gVBMD6o8GFXEExYg5W4oVfvo4d4QV2VG872ns7JQtcWSKMLNj8Goo1Y4auX18sepaeAA8zM6iScc5vbcdFo4Ysw",
  "key14": "WG5hKCHLJGKU97gmvijEjpJtpgStMw6rWDtpFctKRN5sduonUv3Psv1FRzNjx3rBy3iEZWEyrkwp7XqK9DZT2ax",
  "key15": "3jxn2uMhBsXsSzmwGba77PCCTX945TwtEsm5qEP7HRguy7i4xdV75zKs7csrExk2Dz7PrUqGJGZGu1pjSfsc1bzF",
  "key16": "5xqq8itETANi9pNdiEskhzWAYGT1R7H1akUmRUDj535ag48fFibky295JDkjN5aN2CL9FZuFHfKRqNWice7M53CS",
  "key17": "b7LQ6KpTyNTznyoCFTUJTyPaq5r7E51pMmtqW1mcixxJF3qBJcgVTywR4jhB7G2f2t4FEHoNWcxgYTfXyqUUNJE",
  "key18": "4hjADJfJN67SnEnE1HwV4BtpNvN9nNuvbKzST996TDvMyx9pKPWfGgrRZYcobq3rkqaL4rNgdNn2DrB6Vgc6wpfL",
  "key19": "5drZzXGdvUFiHis8SE37qbgEJ11q8XNjNLy3iL4tDy8dwEMbkdEQ4mpTNgGao2qNbdquRLHbjmsF742b1WDBXji1",
  "key20": "22qgc8RRQpP3kDvdbAAnKEjuBN1Hxbu1XjPpt2uDskrggR5U4Giiw19B4rynZn9HV9vvQX6tZmB1bTrWKGKjMK1i",
  "key21": "3mrUMkaEemhg5k1fsQ2u1ZECAuEh4LkoRifC26Gn6kBHhPfqnAaoPWyf4tF5A33LteBj8T3JiRhUsk3iwbbLdTrn",
  "key22": "CeNtpiCbSYkJ1CGHwPGy2fX3Ys1ba6eAfTL83XhL4Dy2UsM9vqUNaKSFHstoXWsQeDzKeKid65mrw29cUWzGkih",
  "key23": "66GcVLF8n8dWWS4JGR3XHZoNLSHxMmPfpqV9YSRoDiygat2i28jnYmLckDQNohQCz3SzYjQkTjx2HemTCBTxSfBm",
  "key24": "3AVKXy7xVgCmmn6rC4UtU47zuAHAtxFpP1MAAEfDxqkoyy4YUzVcFhMxchzT3XbvPpu1yGYMUnK539qR57VDQKF",
  "key25": "5EzrQcwwLCxZPDvP82SpZvKQmNiKN2m38HCKLgrZpqMJzumQWjRywywYVccu6CHJTW9jnPGFLFBRGyJPeZeBrXqm",
  "key26": "4syZD6sSgpcQN1MjvSVw7ZS1fGYq1s2fEsvNCFGLanXaNn6zsfz9UB5V6d3uFykQGsQtc7Do4ZSy24sNuebLndBq",
  "key27": "3MqktaVKaxX4VJG6XjTT6ZGV3pMp94ZqjvBseXgsgm1ZcrCKuLpeWbxJbKjWg7Ub5VstqbACUW1RjaUtQcvDjZHK",
  "key28": "w9pD8zfXT4uHQ9RXKYQxNGRDbVPUBuXAaT5sT69GvwXTE3fyTFH44Nc4213WVRsDbC9sYKjCoDPSP4xyqWrcCAN",
  "key29": "3J9YW8DNK2EQv9YJ9ZPcfhimXQWwQVvxi4eDWNh8L6Tx8SvXUyozJQPZyAC342vYWy3dcdYzBwQ1rV1nrPpB5Uf2",
  "key30": "255KHYc4ughTPyVTZjH22CNyR3QaPZF67dKDhctnXymNtqhmYyQuKHkjhVsscJkUsAPyTrhxRKQsr8Kq3MHeAhUM",
  "key31": "2MsfXgBdkDi8tnNQ9zLj9D7EHnGznUgs6sDY6NQcU7fSHcWNWk9FV8j39xjRdrX5XBwrv651ikuQd718Cxj63Kex",
  "key32": "3WNtZrXerA48rGhJqmCtBCfrDCqCHEhjyU9Yo2DZXgTFvQkr6mz95kUNbR2uiVWDoFLmKnE2ji7FEDDcRnxHMDri",
  "key33": "4EU4bt4Ye2xDBjVJ2ag3vWSVStKeqJhGxMMZJGswzGYjCdu1FVfMxvjFnMUNL3ezDpxzxxZiceeeyh17FyNhzdxV",
  "key34": "679MTKhzopa23HLbYh5F3nmqM9EF9hNa6QMrm54BvPxydQaKWVEGLv4KVM43zLuxpiZVcKu5wraCZ9pM11RRaywq",
  "key35": "2fBgNrdwmGW6LMo96F2Jj73ayFe8DQJ3Pc2hbrgDUF3tkGEfsn9nboHSEQYDMnf5BpZgghzX9ssUkwFJkHzHTMG",
  "key36": "2kZma6e9jyyaTi48pDMPSkVNDgcAdRjEiB9YZyQovtgWRHJAsxNUeikvahKtFw8Uovn9ZeLJKSyNNSAZJ7bo5dzG",
  "key37": "617GEhP7t3vi1LYrYizi7ScRwu3QEhwZVZyb1uJ4wjeqHnvjoCZAgSM9voZoRCSJtRBZnX7VQ1Rtc2Em5oxNcYo3",
  "key38": "4tk8evRcyoBogVRpnV7yA95xXE5EtKna9GjXpvSV3Py2sNk8fMZ8oo6rgzhwCZPijMdSJVTM5s2Md8qxvVZEduDV",
  "key39": "4hH4KgNafNy6uq73LC9MAYeUpHY8UVMqVn2soYL5du91s3SwHbNYZzFuEnKvDgyuNxrUjqrmwyXae5LYj2dxxvPN",
  "key40": "2UkWeWpZY8y4BW4nmPoqQ6pcc6Q1sKoXBhDUcfh9uknEozjdSUw7WJhVT9NS3WPqU8CzkGzGhWcpfi7BmYEQt7NV",
  "key41": "4J1yoFJZvXn5g6tNyUFKTAfTBDaGTCfuCZcM8yfcki6JYas8aEEKxbVWCPYXNYuTw4n977hwtwjcJ1GF5YXWd9X1",
  "key42": "3pQv86jvmrUbxw8nmUGsqH5129jzqB3F3ViyQmhLg9G1RuygvL1E1m2wmsyhyNvrAwqyqkDxAzZuw9GcvKwYggNb",
  "key43": "3TuQkMDYRF8V1z4qjFakPtksU3E4Hkrtu99ri1BsdmCPrHfauSgy6YUC2YFmyBAZPVsNqxgK7bQFrZGcKbbNRRRP",
  "key44": "22ii9DWax3DFX582jYdxC56gnEcqfMEZ99xV3T7hGQKbeLCXCtjRjWTHac5tpqW2Rh8rjUmvCGPDAFxoCoe8frrF",
  "key45": "3Q7BrxiGCGxw5EGxkfjDGEmHJtG2tt8W2kfUHyMLXkXhdhswUUJJChWEtaJufZyvJLKsTANpamsUS22pJgDeyr7m",
  "key46": "2cdtf5th4G9rEr4LASqZxtTWFLXYJ2diW3HAEKECEKj7g3vGbLJphQ1RzJzMsyWvfCHySn377R5XpbEmowo7Cicp",
  "key47": "5ngx4pyCRrZSDTPWuRctJbA7HwfW44p3rsSnWoo88Bc5weDXxquE8DPqQwzsAomQXJbEgW2WYHP239cuK8SHELvX",
  "key48": "2hriMebF7X9cSU8Xnwrre8jc65eCXk8YhgsAhKptGrDQR4cAqVwPHnpMvFhWiWSKtfSByvrkLfscgmaY99RpAEYJ",
  "key49": "d2msNR49957bWJtSLBsDVYtoyuBXyAr9XWaSvzUs2hL4DEdY9GoZjAvmYCZiHr8MMdgrzB8mPey1nx845FzNN5m"
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
