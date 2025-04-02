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
    "41hsFeGNkwTe4TSi2R9KUE86Lar2sea1dDcho1FamF4jLacCwZGYRy6ARM3HvHyne1S7p8BaNcJcpRa9N9CEav4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfFVyMJaTtyj7taF23oFkpLk5ZLaGuwZJgosNhQYWrEV5kdREvSxYQ47Xc6fyssvRWY4p9q3hyTWsKjYtQxqbeX",
  "key1": "57LGqExcBc5V8NiFKVgFJwASUBLWpPbtabJkFtN1Pch5u6zmNQsP8JpEZTyjyqX651SYHWB32cUM4LapoAzaqqM9",
  "key2": "ZeZkJewQArtLwSGZSkxfKhsaeNNVoRxo4kRHE1ty1n5gt9V6YDuYr6cLjxBqr7ozFhB2qQTkt8ZRW3MaAsKM1Ag",
  "key3": "5wrkEg7ofk39N6DyjCCkoCkpBHNvKsRG8X1qCFQwKA5Zx1TZVXmH1BbrFvg7S85PzneBd2EySsFh27xKft8umMDV",
  "key4": "2KMh7KzcTh47nENMH2evcA27myrArjBTkxvGUXmtP8frZ3SN2YQfwNmbxrip4H2nAFUxsHwvBn4SJGqC7vxTpWf2",
  "key5": "5ww5YJCG8k5ze3MsPyHz29pFcpcz5eKa41YZUYoTUzKpCqUXeuR9BVLdWdrRb13AoeXW3EX8meQqvto4PZsPjx9m",
  "key6": "4LqpZ6KKzHWdBhLuHYbreA9ZPW2M7evCdoh4ZsyCWBZ4RUBJUG1ezhVnLWSyEEDU3sp5AAznDFJyjoTqJHe25152",
  "key7": "2eAzZ7Z4p9e8FUQPhTp1nsef5UBTpQCF2MYehS1C1uzG9BZFJcTCCkXPu6vC6AUocxytDykFrGENv2XfX68y2Nvc",
  "key8": "rC8Qp6T2cUL6ct1TdbWRWiea4Jgxk5pLsyr2ErxocD8Mbv4ayxtmHCKzTniFSLFtdYkLQJvX6ySk27kawQdJiCH",
  "key9": "4cXVSVRSWgu8CXa91EVDk1MtojVPu3wb1ek9J3j5PvUkhfywWe1izbVSvzT6XYL3AtRK1PxwnhPWJ5vJA7HMHYeV",
  "key10": "35fnRhpa9HH9sPTqyXjaBsQaQh66FVzqxevzSGUT7817fWhW1ZYMso9ic7F79Ds7uLViYxdzCk7UYBg4sX5Dzv3L",
  "key11": "3boTAqqVMnY8jDvxJLtFtg3ZqXsEBBEP1ktv3xq3hBVoPuRFgsuxjYR6HLaJV4YBn3MmBfcFyKeX1t1wn3sL2rq2",
  "key12": "2ZuN2SmTkq4cuZMvrHmvAoJxv8peu2o8mVq9aQczP5tdGGNY8zyBH7dwhLePxTLhjCtftXwDz4Vhd3ucPoSq5XoU",
  "key13": "32YQL3WJDCJFU3CkQuqCMbHzGqSWb16ufJaXYgRrGKJRzTPJuozbYmAdRwbpXD3RxX51mD7PpaVeTBUbbPwyxYnv",
  "key14": "3HUnq815rR856Ey8t7FS99sLbkfPzqxRuXmG2tnWdSFHH3iBYEd3LM7AHyrQ2JhY8E73z9LECpkqhUAgf34hENbf",
  "key15": "4yW4M1aLLGGFrWKgqxLg3GXbzDzu8bGPFNTPny2iFAoakEjfqLLgBWqu8bU8jwCbnvutjac6dX7jCxe7hfaRdRSy",
  "key16": "5hYjENswXPK6pvB3rAsXruDda7mT3LZWyWbsbva6kGxeDxQzbwykjULHuHTNmW6WDYoFgjhyq1EjXFB2vSuvoBFN",
  "key17": "r6rdgvFrrHC7Q9n28JhLoprZ2v6XGLG4Hf83QnhDiyAQmjk5KJP2sZiuBndn7BDUFsPXRzTFLN6Yt9LiKxkiASu",
  "key18": "3xgyrGqygzcinafMcyi71WEmKmGCTpvJs8cuRQBZ1kWQUgn1p87DBcYcZfmUbehpBZvh82yJrVJAkY7haSQkN8AE",
  "key19": "44iKCXcGAxqAnGASRqqg6575XHWWGDZNiLAaz9sZ4JZRv9ZAYdQH2d9ug5nYM91dTYbUukHvWf5EfkBqouR9gZqc",
  "key20": "4VXPm8VNbCThdkYdyPZj2UiEANB7wurSq1GtEfD2hdwY7rYqgvkwGCMHosbaPPgbSjJSrjQEgfMhWxwMjsyJSX6b",
  "key21": "5Vf61FFmUzGgHZvPjEMtkzRQck97u6hEypf2QbaZDVyZy1TfThtQQzuvovS6HMNLpFHCmeNxZwdNmYi7NkdksJ5A",
  "key22": "2B33fRWxcNNx4LxHj7gNYwHvy6wrWdiNWxZ2pr1GwQLFDLBfsWYKBm5n3e9bkSojUbeHkXhVferYJvUUUJgRAa92",
  "key23": "4p7NGNr2tQTrN6GmjnMjCZNXZxA4USB2DgWmn7XAfqrASHRDJGwywXkYttU6NT485SyFuPtLBRPRj6rKUqt6C8Ud",
  "key24": "FsNxpmJ8cJpy3uV9kLT26KriXE6WsPz3dHjZw2h2V18p1A9co38hdjH5LntpN6Bv5bXpsFcsQxqHRJq34Wvr7yn",
  "key25": "k4r41BSe5EGBdHEcU7iz9RvwRZQVuyAUDsTm8EMVdRd7XuXGmVxDRjvkuqmkRuVjESK5Q4RZSwKgpsuW6PL1AG6",
  "key26": "2s5o5apidnafcUK3bHE4mJ1usDqkMzJxyqwnoRjphTBQSK8kYgq1apZzCeDdiHwd6rsnwagGwoFnwYDnWD77mNz3",
  "key27": "ZJ35BvhWdJFvsTssn5NGpfk375MfLt4MK4GGVPqukxjkgjgTqjExmoSRyHQNYUnmfn65WHLWzaTAa5nbjKC3kcJ",
  "key28": "57YnPMK36onk6j78kUwdptGRj6stgpGoDWoAYaY177dUFRBMKtkEoYq8MWbBS35ta9NQt27E4c5SFWrFQspZaULo",
  "key29": "2m38ZegMkMtwf8qyjmHFWcrMJsNbbQsZpW3fea8Xx84Bn9MJZyGWMHC8UZrnZRQYCt7DZ2SNaGEvvQX3oMj7ps7w",
  "key30": "2gLsQ4dKDKVaH8FCaAVuUmNyGRK6XRUAs6oqmdhnaNENwQ8sMQuuYKMC745PBpSx42qzJeQGL1SHmikhKNrfD8AB",
  "key31": "wFTcp8eZTfPT4hduVC948Z33UKTJcFyuGbrR3QtjzNVLXR1Z2jRDDRwRbHbpKxyAmXrE99VDwQT1uU3mAWLgWnV",
  "key32": "2aPoV9ZHBRf83vm2LnaUnArAjgA1wymBAKLCfXjpXtqXMXtt91QMV1uFziAXUZP4BvmWNjGfdFMwsmSzCN2ttnmM",
  "key33": "5KioZrY3EbYv7qeLgwSWkgBXj87ATzdX6pa5nxXdkkGg6MF2ZJh1hDKhSMka8FaebPL4AweHwmrRTpvZ4fTr1oCt",
  "key34": "3csPzjrXZkXYPYWuNT5PFCX6BkSRbizj8DJ3KhxJRwDnoLRSbsToym2FNQcJbuUBfqzUgSPSf1v63SrNbnNy86S8",
  "key35": "3UoVShi4KopSsda3cR2hD9FE3daCijxgDFUAgGigTz3MmgBjJCDJTSThf4Y7W81xV7wxbPoQpPMiaWcsFXmJZWVM",
  "key36": "4tgmcTNUrvMbsrecURiW4TvgJG9CZzkMHZh7BV5BkQeMEVjMVaKSF5zSAVDCYYNZoVJYDhMjWv9rrhrLUrXsJkGv",
  "key37": "46qUAgB7vifVV8E5UHhs9kMmHt4urLLLWfZZ6CB9YXWmoEaDd4LoGoRKSLqPiRMuW3mefihPQWKcTQaruVV1DuNw",
  "key38": "4YyZw54JMKi8aFtu1jE6XSNrvZwmxsYkPDZywJigGYN8RKnLGUkNqph2NE2CAxPNzFrcdDj2f6cJhpCVNe7Z8Khx",
  "key39": "2tuwkhtBMZU9Uuq6ysSMd4pZCU2Pv4Hn4f1KFtFv5CQLSEYHgP6tAcaM5jutxmpJikEY99UrRfAa1EtkRrP6ageo",
  "key40": "4EEpJi98AAkhEM5gsZMFtiTb65JXUJN5TD7qkVVcbrmsfkRQRPDV8fYErAQvS5xQBQso2XPANBHA5yA2YHyrvfFG",
  "key41": "3rsAQS7UHQjjH2JKmd63HNcwNrL96XRWdxTW3R8C6MZnnEChXTR4DvHrippERXGRZcuAoXGJmWPKe6qGsDUzVciu",
  "key42": "zJf9XhMya3M6H9ysdhcYvU4tqKXfGBiwNytSFERNwmVn6Gb8R3Dv3h6b26A4WxUQhQ6X38Drhxt57eZhCSwn1KV",
  "key43": "8pLaERLkAzKswEBAvDpNDeoyePdCqx1voNYxGQtEcNLUiDCdcGidLWKuuhPm5VgSZzZGwEEe6Wrc3Wo2vGs78KZ",
  "key44": "2SkwT9htoVSebRLv2y5ZpGPdU2kkKDnYjC9k2FnJZn9X5Au6Y8zUTURDnpkdRXdE68WtxQeahfUjGxWtrGvqhcWd",
  "key45": "4ix1fb8uBtHdCnXdKk5opch9MqvexZtq4xXEyGfagVtVnYuRJEsfjvXH1egGLo7HupdGTeBFkxynp2LuMjUtLvWy",
  "key46": "3G9dUkStxfbHvwZGnhVqNt2jS6AMeFPFETnhNcTqCGM1Sm1tUQyrQd7xtvDCgrsHYnPSs3VHLqsHExHVkt35mmNM",
  "key47": "5NRW6vSj4d8iNLCebyhxqkaMhAxqoDaPAjURspfmS2XVtsRgi11DkjiDBzdYNAT4NaM4u5XY7PpkY7WYgJFddd66",
  "key48": "3UghqDku5KeWfajFp12eMG1CbGJyzqGPSKdrk7PWzJggEW8HXkwDDdCt7ABWzLeu5KMrhVL1Nnjte3X9EYfPozhX"
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
