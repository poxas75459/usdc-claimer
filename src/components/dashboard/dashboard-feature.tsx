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
    "3zo2gykzSbHvu45kwWPCK8ufNP4EPd4RvcBVHPmkheyWuXhEfSs9VoMZg9h4n9bpHx222PvWGcayk2zwBAPHN4iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFNZNkAefazQ6rsftA67PW6YYvvwRbniooECmLRM4gWj2ZyBQLyjnLdqh8eZDNFhMynwBBAMHZn5aYmitRpNvmM",
  "key1": "2UCNa48tpZ6gp7QymgEu34NBXa5hQKwPKQpUQs1wfQjKKnQphkzy3Hy5XS1jCcjAuTodsPkwqZf2BuQxrbwEvJbt",
  "key2": "4BscyzK2mNpu9u2h2vSe9tD7vfmV8pe9kXkUUHduTHUKDGq34GkDSA7XzK4QKh6atrLeVP7jt4hztJHoqjqquSpp",
  "key3": "2VeqY8PAr3VdqgBy48MfcdV6aSQhZfCtfAYYiGipQuKQ6EJ4wVCffzYYWEq6wjuvduC4h3uZMqPJX7vR8fLqiTaX",
  "key4": "4FKxtzHFeCoSTkf17bsg1BeCYpoGcmvHicuLC61Xg8od59ardXu3uQAfrstEpR5cd98bWFuFaSsCXW32Z1DasRBC",
  "key5": "cNUkw5XFjntP5y22ecJF91BwPZLX3wmgFZAQ7iocvaebXTCgKrwNq3BpXuWvvxcDx3BQ5QGySDT49cwEqvfNAUV",
  "key6": "sWxYi1qAEQo7zq12quocZjUF8BzPPsU4L8MXgnW18akjRE733UxQy9oWjq8kVrg59rrKtpjvLTpdDd9VD58SU37",
  "key7": "2uXwWzEhCDWpTZQmQJTpvDqtgxoqJHB2tWKyQYXeZ8Vya9EtmYLHPZUHaXL9LKtiWACgYTAxzXvwrKH2DwWp4CfC",
  "key8": "4ujPD3ACMw7QfKhDQHPUL5VKs7taFPAH6JxYnv47CcEMb5SBtc8bGCZGBExMumUmLZK4LxSgdKT1ToQME4h5Dk5X",
  "key9": "3TRScAUqd5u9KzU3uEv91PVPfqRPXSYv2y6Mmk7sMwAHnnmdnGDHono8ycVDEdbKqhJdcwypBcyL4YszECAXZSxS",
  "key10": "26dBaTLuusy7dpPXobu1sLD4pXCKBtpGdiByNp9wEg6qddwMiUGqsYhg2Gt1DUfxtP4k6MBgoYFSqhVwFs27ejCn",
  "key11": "2BaaMHtpRV9C96pxQUydEu1BBSabMYHeFcFfivx9sbrhJUKe5wfsByhCnDztrh8DnS1UJTzPhsBQ3wcdiJxJe8M2",
  "key12": "nbYcs2NtVzF1iJFi4gpd2At1V14HX3XCDwrjcKfaZNq83mLGfSTwWZg5mz88pEos1AsVpUWyJ8ZXL9JdoUQm8Pe",
  "key13": "1V45HUmXGjZqi4vHe4kbFfKkxJFqh36MaPLGbAYBC6k8bAQD9sEFU5D4udk4bQXCrBGwqAB5aT9cU2zr9767wo1",
  "key14": "1pucZwzUvm136DnRYYvvULjwUbTNteqXn48yMYnRu9tNuFtoTs3ZnR1dcfUAy1LLiJcpf6RR7chhSpN3focLCmj",
  "key15": "2qtqPxFLQp8vfUnBrWrDwdMgPPj3iVyhGYjNVj1iqhqMYY9okLKKEKvMVAGZsWF45pbpNAbv3RrGjRRWNbdTDcsk",
  "key16": "bDoS25L5ZQ8K7QqtqRi3zrGJ9DAqzUANRQeeGui2nsEMz8smUCQFP4T1PMWBXtZnPDvns8DxUeenY7Cog2bwkho",
  "key17": "5gdxiEcA1DVkAugTyiGTtaV9dFTceo6NZj6RyCrgVd93Ue9y1qEu3S9JSinRL1C2sbZuuDtSRvcwnS9xWbfm5VKT",
  "key18": "44DRzSpRXAqyTcJk4yP8kfuxM1u9r8fUs9JEi6CorF9y4SCR8B7DtZYhgHBbXDZ5DPqsXGDHp99irMSiy6r6MgZU",
  "key19": "35iA5SvH2CfX8ChgrSu3RtGEQerE3yaNYDqa4onexKGr131W3jHGJM9ePtBNXNq1sc79bqJBPumxkta3AFPbDw4p",
  "key20": "5xnikf6VAk9vR29JmFhxyXb415E8kp6Np66yuX6sNKH63HAg3Ke8xnbyqSXQbjnLS1BgHcNUGhMbe5FneCELo1LX",
  "key21": "ZLqFWeTZyyYyRugMZ7xCTHsoK5Kbkn5q3LjZCYtqw4rMYhdbC6SmaL5oZQWvs6Pv2eRBvgiUENA3Tbua5ekjqwz",
  "key22": "4aT2JhVv9JssyKZrchuZ4EeE2v7oouTznfZmzLgunjcwE6fMwdQa1w7HL2fgtPWQ1FBCT5zCABgf4qKyGEFEoR75",
  "key23": "2EE7fRPWz61Tnd7gouBtt9TRNXSWaA9E7v6BtFrRvQG9tNsU2fFXNBcp3kXQtBhMFwpkZADAzCZASDF7xtKUcXQm",
  "key24": "4QMCRSYDHU1VQhPYx8yqsa5ooxRuV8cjmoECXo2S8tHLsyTTPCfmT1odTKPGTAhG2yM5dhFyCTSgsNVaqV4biQJ",
  "key25": "4xrFSFpvwmqC85ejDYHNkT819TpW9RPUhsRirUmshTzyfGGfxuu94gNoT3XnrKwZkdYJtoZHDsYxoM9eLzrn7oFC",
  "key26": "4WUQkZRBfqUV7s5NMHk5wMaBuhRbDtcRSCP9HeJsKZgfqzALnxin4huccg7inxhc1EimWZEb1PoUJwMRMNVUomGB",
  "key27": "36qykGNmyw6QHNXq2pAN5gKH4dkbnybPfUygvxR2eG1qYsR6Uekb2JgVXPA3t1ZhSnCwddEULXNgR2Ce3WpQMzdR",
  "key28": "5aMUegYFAvw1dwVnjgAPJnBpLbkUxbiHM6H5cuzWSk26pmUi3ukEZYearuZx2qMebPyPqcfR2LPThxxSid1ejRHM",
  "key29": "5iJphnLiVQgyTz1fJv7absQXLW6ZfsnGMFiQUE5Y5tMEv4fuJoKyxcGgCiy8NzheMNhui5uz6Q85bV4G8FbpBTBG",
  "key30": "3ivS1XAHfDUDreC9VmvDa4qwKGevYr7Sb6ZBwSFJ4DMoGwCdgTpQACQoNHFBSLJopQKyrNMJjhfzszQoMYBmRq89",
  "key31": "3rqyx6E2gaHzs3i9bP9uDz7zFTdfa6ZCDdvQpbaRYW8AhwcFMHNtqHukaY9fxoGeWQH5Mq9cCo5MCqpCnnhcqEmV",
  "key32": "B2AGkcoNUTDtYJ4jr95QNkQ6V9PoSkKNnSejF6gCpgVLqVVqPX5EPcWJM1Yg2BDeS95svonn4uTbG791pwSYndG",
  "key33": "3FrACWPAohn1ucBspjgvfwdSBqR5R1cvW9fK2sGFe2suuwd34bS5Mar5Dm7YhxQi6i3PUT5nDa5mjPVWhrRU4YD9",
  "key34": "WP8VfWA9p7LBt9778FqzdyLjdTYdPkGNE5JA5iJtx8nmrsrufp6suXDrLXNJwS41F3frGge9mgzk8RHGoemiMCA",
  "key35": "3BW3s8wxEvrcSu66QxopRb9tzMWNDrkYmNuoHYoiiJUky4xhXuHQKiytMzwzycwnESCyQcD4XxfAfRcjjvtcvNZw",
  "key36": "5PidmxuJKWMHgkNa6YXByKtTxRRdnzDRVg625ichMSkryfo3EEmh79KsmJxDjT1KmJQan1M7oYLt2a3odMhBTzhK",
  "key37": "iZQ7TK79atdsUu8evFuyvP4aCk1oeyRKCaTpuMbeBhaXJHQ6R1UYiCRxz2MFEE4dcZ7oXit3qTzhtxxifBovMAo",
  "key38": "5N63x12eRD9iKP3eo4pS99qcnVpKGRfdhybX5c7SC4itSxrwgcpWMJjDwcCuFPQ91FLd74K8goHCT24oGqy3Dx9R",
  "key39": "4g3sWan6w5NF21zxnPTUcaULUc71agYxMshjjSUv83RWazLTYQ694UBJsjXASkz1nhWTmNgoJmJB9mUYhVtZmicy",
  "key40": "2X5441UoWhXBCCtEQhoVcfCe6CsV3ScbhJsAUKaQedKATWL9ZtNSkzcVqZYwcmJ8KhPjJGiePm6Q4SjStuqLFpSn",
  "key41": "5ZjGh355yS11SBzFNUfLVQk4nFjZCQksdf4YjEnqsE3bS18i6YWhxC8fwJ3z4Nda7nAgieiMDAwvHYJe42tBCck5",
  "key42": "5WABfKmzwEzsPmrMGJDbEV3mPYgM1HcB7uyeos7onBi3eM9MVGScdcjMeU6erHrx63Gw6KGfKkbKkzoiELa4pk8w",
  "key43": "4RSx3hRtTf1JYbyAn7ApJzBx8Pvh7w7Ruw7TdKNcuGzdAmS3kyDBZn5658muuhDXWvfentWNN1Xz8Krvj7ip2EDz",
  "key44": "3eVcTSNSKSfou32Xia6iDZ7AFDCtb6pCUFcotTPq4xKUUgNPjfd3bXYsSa5Lr4AQZm9gTw9s9vFFTRTS9dZNaBbd"
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
