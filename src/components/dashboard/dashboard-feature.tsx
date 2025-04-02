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
    "3Ab3Nj14YFBxQYuL6Y92QRjpGwGjMmrfsSdeizP9aRTbuwCBoDNm5CMZEk4MMvwMS4ugbWXmAyP5aYhEGSGDAMhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vqDuVjBJjFqom4pXW6SZba7nczg2B333pfBo32JnR1rjcAf2hXFuBc1Bhc4eKzb4Z2AJZehJmXAeztY6AzCKEro",
  "key1": "4x64rWxMQWg4TB6D1qyHC4woixAy8iP5XNpBkjMFgSuJGdrFgsgbyMnX4kEbNLgKvh8F7jwfDKywXcWyfL5Wgu5L",
  "key2": "4ARgKtP7Lrn8THFUUUVw4A5meudTJHxe7jWyKvWzeRTuV7Art2bAo5PwizdTpNJyYdxSXHop5iQRz6dRraZ8hcYt",
  "key3": "VHPmfpXYfPkMn5GpkyhGa7WA8yLXGLLHfbXHc6K6YzsobrhgKaNZgHW7pgGcfevgAqWZYRqyESv5JhADVAocraB",
  "key4": "5TzPETooS5xM8KFBvVDAQ3fVxdGPyJmFeP64vEqKSzUZkLQuYP5bbqJ9K1QSNmPQZyr19AytfmEwbivpK5qSJC4y",
  "key5": "5XtaoTMDqvJKKRBU9oH4551TYVFhuJU94Dnwtd9s5XwhMbkuLSZfwPudNCsPtkqgeBSyvfRLws36R6mhV52g9xnD",
  "key6": "4WikR4b5LMtWN6AhsqivD2M1QXWSCs7FPN4F6iqCF5g4UmQNESeTqBS5LtNcxmmECYtuuCsyNLB8jL84zXhRYPe2",
  "key7": "5XSVpoEcdUGNP6MG3E6CnqWjvbeqWH6ZynVkeFUMYS4CYrbUSgpTvWvcXZ2Q1xqS47HmtzyW9H3vxMgtiysERYmd",
  "key8": "4JmGa4DbTRk8e9UaSBpb1JTCJvJtvcEFECTUG9nNbwuoYMUR5tfN26MAC5qukdgRmgG5TtRzUSzqyihManBM48jw",
  "key9": "fPQTmAMnsViYUHFsHrBsuG4zCiLTv2xygGmKSWUMeJ3J2Ru6kRPxpR9mjPFNpmCc1NWGkq5xvQ9VnHMh9VBnXSR",
  "key10": "2zLTkQB4VMrCFTQKvpMtFxtyScnMieWUeSSxZ9ELc5AkfqGwhLeZ1KyvdL6b3zpecM45gcEPaLzuULSTqLAPciTX",
  "key11": "5XCVmMzUr3rdFKka4eDsCHfzwsgtUhutxTNRPzu6oToz8M3eJ8vc6fpDSE97QUoW7TeVB7QXunRs6oXXztuAg82w",
  "key12": "tngc2o77qSTrVo9norjq3m2yjqCHwUHetQhbRQBhc4fJ3TTUsVLSrVJPpEmgd2VDFPEaDiqZExVJqmNvNj6ReGh",
  "key13": "4s8auQkrXfz9K3eVjgP6fjLJFgjWDTQn4DFCSWdPNZjpfMhPS6QNADFtEhdbjsqMDgmbtRzTwWnn3kBTPU7GHmQr",
  "key14": "4osKe3hyLm8UVK69HZY6woYpFBESS2FrXjJqTTvt1wMsq2NPg2uDrYRiaYD5Eqc3bvYQFwWJKEVVNGf2TdLf7th1",
  "key15": "57U8QTxM8KJrznNyEJTk2Swipd6VMJd1ig47QF1oBxc8P1YCS78kjgYd35VMDo4nHnzAzBbDNfu5MKGW5N2ggmsQ",
  "key16": "2v6Xwejq2zcgbHb5uguk4EsS4BxeevFyXCjSRyhBB5iv4qdKDJFtHtz7fntApFtkHHWQ6ZhJAQQH6wr9YySULKpn",
  "key17": "43YJyhZM2qWojQAP45xJEqtzPpaZM2KPyradaq9zeFXCUt4sRhUu8anvtsXEhZptxvLHHXPcwFMG1oGF4JQ7Ntio",
  "key18": "cVoZZ1vuqd7NWUmqq6tTsp4RVRuCnMvizTpdiEwGZWwzRqZnEeZzcDwQAiEk5icLiGHYuWgbzYrYFsbq6UPLEku",
  "key19": "2eHG18yYiCLkkq7fmWqy7cyAHFHMVEaHNQeSWEm1aUuAw5hofpfbmFDQbDBgZ1tMJnvQf6EtLteQ8XGW7wc8MTqp",
  "key20": "5LBcip2h9chDpZMfw1CzWFwnu3pLUdEkHAPkyqrVg2aPaZ6hAZKNxuiBozthoayxXxd8UjNfXwPbsCS32KoqLaTb",
  "key21": "5EM6E34rbcWxoDmqBuFhJd3VP7o9xCKaNT4YDYaKzJ4759M38iJw2sAoDouN64htusTcn4JSLyQdKLrXBRPMCYou",
  "key22": "5aRDmHTH8W8fPw6xTKbWxejttYcHHKHxTQY8quDDpTXwhUFjEZxQHqxQnZoQDvZuvefCMckzKGGf2ACfSf1gvFKa",
  "key23": "5HxCLBzYginophLftP24kyy95qve4A3GEenk5xDCKKSEVjSVYpmDLAm4uhFhKoRxnfxdopvf4X6q1QqjtqRc1s2C",
  "key24": "23owqFzCRimLbgMfsGhzVjpdmKEnx6qSki9XormDbXUXaW52BcHNZvfg7q8pgoJUC6BTgUjJzEX2DEHf5Q3hvv9Q",
  "key25": "25weBMeprcs6CQwofQzzfLrMrQq74VFen56HG4o7VSNfeCPkMDcuR8nghQEG9LsT8Gzxz9ZZnfLC5aASVsdr8PcY",
  "key26": "52Aj1zYH1YfKSjcVCaP11vEEW9ji1qWWtnKwmC3uHWc96tjHJ9ZAetBiFguApvMtaFZGCxz6ayiQCKGbRSh33XuU",
  "key27": "3Ertfkb4UxRReAxAnJMG3K8BLbFziESEWg9BcmGMwQKB3FREnGLqevUxQzB5iWYMZCM546kJHTy9eRfuBvhePr7K",
  "key28": "RgZAoHWYLL3L8S4Dh1RiAxd4o1kUbRmZn4VYxRMSk4sCqULNRRciax99YSgPt72NfDCDiNfkSTY7r9yTT2YHt4U",
  "key29": "32TWT4174bPbsv2YK2xYXS1fMguvHkg4MHbHgSjuuf3rVkyw1EnEB5CFwMysH2tpCo78nu6iq6aTKk2mVPU6c2Gp",
  "key30": "35L5kzSrMCyxYpcA1Z1CShLt3oP2WofK5UyX4e4zJC8dUY5hSqu9VzxqaADX9oAQYUt3a5ZuZHD6s8gG9Hqnevkg",
  "key31": "37QiUuDcGZnWo2csV9YeNqFFJFXCknV4GEn7XneK28ysdyb11eWY2jh3iDXAM2dVNUCW5ixj5q8FnNYmqMA5xeGh",
  "key32": "3mPccHbLzoMeHzVKPwTN2apjjj4TavBrgKu44rbXWAM8D7W49jceu7YzrRfKChVVXb65vxJdr2QrtkqB1Sy5XVU5",
  "key33": "5m2sYYZepewsjej4qa2i6CmaBt2YUqZ2PyMXFirqDwxXZWmBNH51wXbtnWGuuMBLKDGhkftNR3mQVY316L1uFt4r",
  "key34": "Thnu8inw8qxiMuQjdVmpDbkJv1cbbx2YTENpLLXXutyxsk1MDtfcGN8fAnNK4B8j977ASUJkCHxzHN4Mh5hBRPY",
  "key35": "5LCjbFvVAfsechu3Apj6hkoGN8pnFJa4d68zXsZvt2oJ6iH2cBktcrgX4qpoafBBvAZPF2G98Kq4xa5x3C68Lrzs",
  "key36": "2rn3JyWfBUfLEP4Y1DfkGiCYgA8qBhhqbQgQAeKTxC9V4jTR1cQYuDWr3zUtWkMAbwGq3gYJGxeR1cyYtYQHJrsE",
  "key37": "b5TnGPpmc4ZJzdBkbEXzTZeXSZE8WxdG5BNnrozMbp3HnHsbPtrLySpHxz83brrHG8unyofKy9kEohxGXNuquvs",
  "key38": "4fDGWNsVwDir3qowXLFjCoXxCUYeqRjEbG55yW7gPSuyPy2tngc6uWo4c8YgzRXKNcj4qQd18Tf7VUZpzDPoFYfs",
  "key39": "3r4x6RH72WmGTnjxmjNmcQ2aFN7gcHisHfw4ctvGkWWHoqHMJPmjbJNmgUkGvUkKpW4deTJGdPnBG96VaCB5a8et",
  "key40": "3eAvR28t87EZmC2XeraretS2fgzvMjQgJpSQBP5mAj2XY6ncYrPwTXXsUgijEpB33FrPyXDBiN7ny96pL4KcjJHS",
  "key41": "31p1AWBXE9seEjn7Kxs7tTyiL3ummMGWtLVZ53p2HmdkZnEypqChQTcsCoeuXgBNkT8DK7nmQY3idTMXAN5HpZkQ"
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
