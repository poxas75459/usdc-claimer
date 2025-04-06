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
    "4QoSUvr3YAbrSabW6bNXQ8BLpZiPVeF3ziHyGerbYY1B2w8NwJdc8AX1vmdHjTJ5RPmtFTb9nECRsVgmquSLGLCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFxx9HCiMuHdt7yutfWpwotBFZJPwBDMN9dk2LdGiR3hfd6tWaiYnkudDXSprGfMXRvamqcu34W2HCMkQs5ZbwG",
  "key1": "4jJZ51A7R4REcKb2aZzCU2RtDCh4XVMTFHTv8SwDaTvtWMmpaFs65thUAtrU3ekv9kCYTFQVb1fBTyhCmsgVeqWZ",
  "key2": "2AEk6g5GGUCAyJ1HjFRxyVSXHf4eabu41ZwrhsM23TrgtNP6iodMjs3mUmhJo8ts9ZZ53eWCETHqJCqtqccMJraW",
  "key3": "27HdJDo7LX5nUFfBsswJCknAdTLUK7u6W9GVdrepQz4n5eZ6PMwvp3y4JudV3V3Zk5hQ65Toes7hTitk52j7MQc3",
  "key4": "4vNu27zeCShfCyYQyHSjS2pqaKFS1eHfHAsmaiMbeQfwpwNnvLkM696UP1W1WH5QK3Fnb8oJopAFGUQiWMovQGer",
  "key5": "fBjY7y6WHqVuqArmr7BRndxKJBZyRXTad156uv7hv2WfTeJGugvTD6N5gKyyQm5ozB1SwRRGDYnzvN2HqZknTz5",
  "key6": "4zQHprC33iYHR6kqbVLtwRUaTK8VLRbwMBraQ1mmNYYBHRr7dpy8WStpm52kCKAjmW8vWGFYxbSpEz57hH8EJC1y",
  "key7": "NjPk59vSUEtvScPV2np7XQvXg9Zea3H9FHmoFd9UsFb3p5SqgMNpYXvUxTVD9LMZ1R19LjtonySvQi8uH1LZmgt",
  "key8": "4mTK6AbwoQpQSrRyuanDBS6rcL6fgpk5ZgLR4DqRUooTJwGCGB8k5S7norFAUMiRA2AGVJtnMFUL4txareZUjXty",
  "key9": "5GYvoLMbX3kdsSxEChEabo46VMGheVLDihz5EixXi2ug21eegg3LhToHurBhgBfWmYMByCu99DpYLZVRbEp2qFcp",
  "key10": "2pTpSFjwm9BM69EUoYX2oPxKwihFXcsqo13MRi2qhdbnhi5HMQC3nB8btcGCyXMv7YrQsk2Zp2ngHyYMGNf7By9e",
  "key11": "yiHp1zBUGpppnwp2m5C4uUHYxe6fFvMWDSPw2C4QhNBF2pLNsWNbvDjjGnGZ3FK5Cs3qFPrakD8xmZ8yv56guHv",
  "key12": "3c5R2ZqHVWJgVxnggchkVFmwirwvV5PrfThRcbJToj5JnafRUFV5BSPoB4BFYciueLYNCgusL8SXuNky1r3g71qk",
  "key13": "2VFk1efjic5vRz4zThv6ycmoJSjYjm8w56Typd8zCmzyVX7CXXgNU1yAJygwM9E6dnbn9iMRd61RTNcJK1yVpsQR",
  "key14": "35poxAxYCuTueKrKb7ou219Ttb4W5WJH2SB7F3HFEH4usjrkq9DwkcY2sEkmespjvuSVCN3NKyws4fQptNMGsgdK",
  "key15": "3crLHzbuE8poNXb5TGw4NNJeieY95EBthss5VUDhQD1ZQ6sJqx9Cgq2eGcQXXy4TuLM31Yd87ySy388MxXykBUrk",
  "key16": "5FYtipkr6URMjtxjF47dW51dDhHsxa7SdihsmDoiaFWdgjNrXz2HYgxcvW6ivwC4Ne9nKsJGgJPGD93KcQpC2Shn",
  "key17": "5BARsRJhdhtU9KYf7aviqaHMDaAYoxcXZVQUVYQgPfKdRKp8VKxn9U3wji1SGMATT5T3vuU2iESFmNdfh787vMUZ",
  "key18": "jGPspTLyRNA6hka9k5A6SLXDp79mKpk3mhTw3TopomiM2Aq8973VFf5TKQD5Cm134ktbNAYPoL8Lh2ytbXkpbHM",
  "key19": "4c8cKHx2aEQp61GzrNpVm43KhhGpKHytd17ouT3U4AeMwisvZxCXe6M6XtRB9MfhZWG9txjh4Ei9BtaR2NNh9N6R",
  "key20": "28u7AxmavUi89X6K5qzVTVpzNaPi8RjpvnwowrCR4QqHyesprn9XxF9YEy56xEDnkGVnzgqF1st3doH7cQmxNmff",
  "key21": "4LvTRiS341w7b79khRAJSpBR3WpWpwpbSKPiALbcpYDcRpJ6cHu3hZkpayVcA1ipXhD8zynCZAaGTjC618zPiqoa",
  "key22": "4BhHBQMGoHAo9c7GhQsmSGDqRnriCYvHA4pQ9Vsm44op7GwNvXP18rUoibfbqBpBnDN7oQTdT4gpwsKKb67ihVqt",
  "key23": "44fGpDWBmGFkBcZVZzjakPT6r9APDunTqRRAgphNrpR35Y9QHHWeADSoXDqj1SLBhjtbXDbWbmRzrnXcQ79qYpXF",
  "key24": "CpcLV5EpMA1Hjd3tfHQ9jV1iSrksoH55teHK1YcXvmws7Cyh7D5DxdqTiMFovLRx9nyuhvngAoutHsj1xoU2dQF",
  "key25": "LWwg3QG81VFDeq6Q1LN4L3V3LKyNyU6nhEoc74xVkMtXAFHd6Z87fXGqjjBFp83oXBNrk5ZpUeGE7RWFRmJ54rJ",
  "key26": "4V2PNxYcoHfPAcdeZaUjbrY14Y4jACYrLEguA8F2dpP77esNaR1UfrAZiDb77Y6og4aq4ff91yTWL5Y4BvuhFWkt",
  "key27": "57ubvvzAfyQVVLcKd5czs7DNcqwTihmSkzwbMSnwp6dEW455i5kpY6MHGAB7t21RPotf9jcCbKHDWWiM54kLpJEh",
  "key28": "4dVCmpnE8TX5Ny7PH8xPhjkLuJ4LJ2bZp4H4tV1grVZyXS96zieatf26UDWzMUuE6vzo3jb5P4jv7cDD8Gm3DcNV",
  "key29": "5vgRrQ62q4uiyXHJAR52HUTiYLnvCtkTvwLuEKCmmt23f1JUdDuikFJSxbkpZyWqG8z48ppg495495G55KJpA7Nk",
  "key30": "121cRg1C4FMhBD83SXGweDw53rFZLcK8mhBYSJrRSq9WXcMekR8Lb9QjtyNcTF9XLfLke4BuoDJxpHH9AcdA2iRU",
  "key31": "26skug3PKortEJruvnxQwVcazLMXguW6Fi1Cut37pqQ97Zkw5FmbpEM7qmt5TEbzstbgfJeX1fVHKCakrzoZ5A87",
  "key32": "2p4ezgzfTiqdjAxjkuUDHJ6JvW22Wzc6NbQ5cLF4gvGVD4ocjwS5Hgm9ddsv6zQivir2Haz9f135LXNv1PbCvhGB"
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
