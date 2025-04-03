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
    "3pP1bcu2owfgXzEBZtL3bpKaDeWeBz9C5SABWQGxX6YDvduzPerU4xw6Ki79oC1VgSryoCNZEVNraFRSTBtMNRe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UzpbqXPiSGskbo6viS1zpFEPZ2d5MUNNE1bUXG4oGXvcV4DMgMpGQE1HnFAUX9kpaxza1mehPtf1QKsWdTfH4zg",
  "key1": "4egjyjJb8RveXr5qvtsbiQJTjKTMTC35TuEpVEHCTV25Jf3YjnaKEvr46WGacVoLoGffZUnnrpaENUaaQrjsguJ1",
  "key2": "2DzmsBraTBrU8hVcWakeevwzPW5Tf8AiyXZLoLJiR5ZUx6KkGjFJzEnQJBUGy1hUbsdnxnJkAqtzx1NQyL1LrwPN",
  "key3": "57ytMWDrk6vWHL3FMJegEtSpvgE4uWFvgyD1yRNDxtMqAzAhpuUstYEJKaJjgHYA32dhGPjMkNMunj3ZTwPgwRbi",
  "key4": "MVJb56JBpE5bgbmYcURMsrya2PHMSgDUfoAmZKau4MJQrbSzMfsE3hSW1B8LjjazdNu6e5aTeHkE8PPkdWzoGZa",
  "key5": "nGooC2cVtskJZseztStsBskUeUyXdhLajHxxUhRhYHzp7HgRZ2G5XhWisAGzYT2DnxLDGFa85C5iqSAN2DbMbF7",
  "key6": "3Yg6B4n5zduAXJPCv3x7nYEeegEs36bDcBbgxDnrWaG3H9mdciNWZsXVRtMUe3aXBYB6qKfnGkJfC5EKFa9WGSPj",
  "key7": "3m6ak4VxL7AtT2KuuU1bPkk9f6mZNepYC6vuvwjt8aaxyhRb7pSCXfPc1ta1xA6Qex78L4brD74KR5EpsWwCf9qR",
  "key8": "4tVE37XYtoKcLy9ocNuTRRr8jZjGLbA8UtKUVWTNN6aH88fowLka9U2wtnBv8aieJ5azYYVMbChfNkciokNLeF2M",
  "key9": "WnC6csrf8PZZXcDYGgooWLyqPvNdDKVhBXB3qnDTu8MNPvjEnF7sb2UwqNixNCXLABrNfjMBxybhdFfnWqbPChh",
  "key10": "3d7b2pHKf5D22YXPW81eV4JxCwcXkLWFras5mBcCQeJ2RdPdMgNM1G3VG6LBRWaE8RjmTqgnD5PRsbL99x82bcSF",
  "key11": "4zzSZ1hRxUYj3eGn3BCDfFRGqZTUcKUMCfxEAMhVM2Eotyk857KQ5jpv7YvV4zpTZST18ShM1zV7ADUgJDLdq3gQ",
  "key12": "5wKezYY1Mgxj9WfdWbZ7xDXNJ8qXd3xsE456YjWDTtDDGwBzYhziMYRJbSUKWZxTd2JQ2oC6sF1ZE54351pMZJES",
  "key13": "21vadcizCecpeFNLouh953Sg42JqqcRb4kuXdJ8pmKVBz9bNCpp2RFHT6iHQvPbLuixcfrCmqgujjkZUx1Y599Qu",
  "key14": "T6PbAzoEvBEgVXZNzPRdpD2Qi2b6s2EKZuc5qMBPegpLye4NGqjCCDBd4keze95DeFkS4FYHTaZvoGkMA5CDgWp",
  "key15": "QdUN1XzSSgjPs3J3BQPTcpYSAPFetmJ1tSGCXSpkJpyKvLrn7Pr8franF9vHcz22RLgsrEW2JBbYLNTUxMgJdfH",
  "key16": "38xx4EWHw253Fa53uqX8pKR8PiXugsJMgzMEJ66xqVJEKdV8KpFFWwurkd6uutgENbVem8CPengJbP4wYqJfpX7j",
  "key17": "3gk6A9bi2ML8opfyL4eebqqQM1c6r32G8MQfkZYt94ZbWwk7hPNvpMc6YJ3x7WVwrjZvvCYqDFfwZ7vCUE3BArKY",
  "key18": "3hnu3zLrmr1kKwHmiJgBTGPn37KMRLNrRDQZhT4Sc7ZnH8jt7xrnXKUkmYwrbsJZeNFcsqZj5AZ7QnqE2Wn17sRx",
  "key19": "3oZZXU3UVC3kFGdB3ZJP8ifBy5xp52GeQxJ7yN1qpULFcM9bQb1YUr23nyF4rfU3zojwCvrqbxvdYvvpjVMEyRZx",
  "key20": "2FfhLmnfn3yPQPCFgQC7MenpxnP5WWbqCj396wn8TeFwXBaGtyi6iGKkBp22UL3hQhKVSTsJYcEknAqjdJXinCT6",
  "key21": "3nLK3gPnyaYoHf1Xm6ddRh9T8Y6BpxMhPpqPsnPEbC6syhLEfgTyVhH4DHmibBt9Lo2uJnbHdKZU7aJqjJG8Tixd",
  "key22": "5xVwMgCfMfEiNdEdtWj14wm9UEaioKiarWAjTfUKwgsrvk2pwy7B8AFbAN5TmorXr1BD2twgnWxbH4tHkRmVSBSE",
  "key23": "3HdNPevEQxr9dgPmkGh42gDY2toVCwkGucfuk226nMzTJvTtYCDduuVPFarDLPU3PmPSYRtaLJiMQmd6uoZ88hNd",
  "key24": "FkSMF67YT6MQ7kH2EivjdVrcCrMMkMqqAS9nENTXeySdBFYD2WbQvyvp1FqHiHRT1rqj9gqqoXAJJj73ZZiiasB",
  "key25": "3QDUmw1fRmhqUEm7rdp4ZYKs9LPTtK5Vy5MR8asfv6aUAkydRph2KFNMekLkP7HWgqPsWuKCCZAsnBh1d4eRWTFH",
  "key26": "4e5zLpAkWgga1t2HERUEfc8hT4P9R4RmoVjpSkeB4dg5SHdarY56jLqaikLemkRpGrrFhK7y1R2HCMXkx3wfmgnB",
  "key27": "63Fb6srbs8YJNhKeUdiJv16Dxooh32DuaCypYakbWSkH1PnBRyMKUQgvHn6dNCkuGBrLYC89Q8kX8g7kL8WiN8D8",
  "key28": "2BLoc2TUTjqc5z9oEU6W4nyGKtwJzUPdnYGpLLS8ey8dsD9n26a6MZ55ZrToSyx6nFdCN1UUeGKtsMGq1s75XVrw",
  "key29": "21dtjA3f3V9ap9zibQnkjuL2bKcLaCNxd1tCUWA5DcRwtN83RaKy28UNtSdPyxqxcrjtupHd6Ap94ZrBhCNFKyRJ",
  "key30": "5hwMB8MuG65apJhkhKbhBb1sLziqrVEgtY1GnJNEXVBDk5GxnZRJbVsXEGKK6AuWUMcFyQmCkRv7Rdv7RHpB8Tcx",
  "key31": "3TvnRnv8Tpw9EHmVErvcpopwPhdWkqNCP4bqKFL823tvRRRSayDnUCQ49HmUZGorvYjJ14Rnuigrg5C7U9CSPZFK",
  "key32": "4rHc3cdXxk5VjwKpEejkVg7kTdt2LZrQCcfisnxHyQp23HxnXeUCdRUydD2GMCuGRNwTchcUDvtUnrbajYwFcgf7",
  "key33": "554XdKhoSZKQUiZr4wox6CibNmysv8Y13uLbz9CQba7GpH4c3NUE7chHLEysMDrgywKdnKpbKVKSnThpymjc9jko",
  "key34": "3AusTd8jrn6bSmNYGKnAL48i8wsZ9q8CdqvGGD62o22aPD8iLkCZ4Jv3xtRAfxVAr7PhYRXZCKcujQ81xqCmCFYp",
  "key35": "4oaCN71FJMBjTR5W65tVrHD91mxbV6FJDsXQCSeg2SNhLDdXmswQQcgqNtChLwVwji166CMNe19aEZQHz9TdNZSC",
  "key36": "4qnfmUrfeFX4TxZChNt2rJogC25Ecq4kWXqCATbvgP8ZfNezUApDvj6Tk86SZy3ydeWnb3oCiP4y83xiaABVL8Yz",
  "key37": "3CSwxbi7ophqWUvFAZjAt9erBjW6qJN6GAiJYXyuhyFHinL4u45k2QXoRxpFws2vh83hHUsFevD16gDWqZhvdYLf",
  "key38": "4CJQa8YdJ2ggWgCGGZsz7JMCFmemkFUWBYFy2LeSYdhRX1oRv2EuHSrR84mqAqgq8hnxvVBNb7jeboNqjtvpnXGE"
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
