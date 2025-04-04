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
    "3JEMeQbkiMJtstNo5APQH5qf9RWabcKmxwCeSUpYC519smaioDWdHrXisXNWs1ceaMdhiXgPSW79dpqGBAAFrUg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jjJMaptpSTwhcRatPSW875wYn6rpSN8wqV2d4EjCrthMt2i2c2frjWkczh9WNows67xByZsjtf312zSLp9TPPhc",
  "key1": "5eGpzDjbS9W1Un5Jr6FF2Kp5RrCPwyLBeBqVJL9zX3btDuDevud3Kq1CHCcDX9hMmhQJsLBamcbJQrm4cpb8L6sN",
  "key2": "5YuvzoCXrRgUZngUxN3Aa3q6dfwr6eAMeujmhFiAq4xAmA84J7k8jj6N1Rok8xP38PdFtLvLHYvxDRwmkLgZCLo7",
  "key3": "38HrFb9Lhixrapvt2hJ6pXwT18MTcz4wUX3G6ZCGfxkVi4mLNToyjxKuJJeoapyJovKwtuE2MJEY8juhgHk1QDsz",
  "key4": "2sLYe9AumEPUgmWXAh7rFPDWyB4Nr56hXRs1dqXFijh23j3TXaA7NdrUmk1GAsw5npYmCbeXRwtivh6duoxP7Z9Y",
  "key5": "2kMFCz7KiU5TuSfLm7AGF84KqUsHgFpC73kjjBYBw3xXWPvBzZTQbMttwzrWUKWoAMhTd1XxUccBwix8Pg5861xH",
  "key6": "5dLjxSmkfYscUBU5fMdqpXyKq5gdVcSk7dTJvVPYKiRUmTzbErMom9pPnj8uvkL9L84aCjz7mFo7vUmdiBVy7TNx",
  "key7": "5rHPTV7h1FDhVYts5AXjNThXgwDzihiUBQfjFBSW9BJo6fVdyYNptLDQu7qHaqqpzYw7WYm6vkCXU1ovgAsRwHs6",
  "key8": "5CsiFp41JyvZAGtX8yLxABiktzf1KR6UXqCfbXnLLAbMMjDvENpPTScwqNtbHw7NN8zA8Lgxor7WVuGqCoB5PvdT",
  "key9": "3PtttU3iRNinX9n4BFUtoYbk428ZMbkA6LFUhos2NH4MpSQTUVPmE4PU5xS8WtEAJtsjSXvEWMyx2YHGREzY3YJH",
  "key10": "2caEkf1s8scbheVUJuNC5AguQ5FJgRMiPMrbvCqGqNQ32Uvzie2WuPive9aF8VWLTZwRFL7gFU9BuhrFuhbEsMZY",
  "key11": "24bnV7nDi2o95xvxiVyCwvkP8aucJSRMXK7nsgNCFw5mTuBJuecfnkbbdZfeQDraF7djSpWiF2pYaesJ9GEBV1Cn",
  "key12": "3vseeVWn35TAoPSgGLV1qyRBc6dthcZpZbTW1GJeftAnJpv6g4BVCGtALfwCfS88QGvfkkUyHb5Ei5pKig2ofmUc",
  "key13": "NN3JXfWKfNwh3qLAMowEBzAzrQSGbMAKkAeyMc2PYATEqBxwQnqWoRHsFpn9ZaLeC3vLuudkvWmg1e5XL2FFG23",
  "key14": "5FDqqYmtMo1ALAFTWNfgwVrN9YVeVV2dA1KHFYLKfU63rw2Jnt43S9QDFz3v5bRVG2BS8i3mNetzCat8opw2nQsg",
  "key15": "3Zko7FAUXkiehVgmbXK1tWikjcHR6j1F7eLizAnMiWUsQ2MSxhqhdoKqnrKM1bFQPkP1u4bi1YF1MMsQcqvstj4a",
  "key16": "CBXQx1VAXkimJRjjJHqirrq57t8ocVqf5nG5C8KFzdNDP3sUtN4TUpZmZ1TuQfXRzND1hMW4xSZZzJG8c6uaT48",
  "key17": "3x8qpeP9afZcwghXQb7Dfcw2UnhuiVgSR3JdjDoKyakK1Fqeb8hau477P3GUDH35LwfP1dJ67ZDHdrM9UT82BPGN",
  "key18": "2YpfViyKQ1T5PZz6269nL2VcP96Fss83sD2z7ec4wqU975hJCFGLVy5mn3Twc7kDVyWEvasjS6X6YYYb1jDnrhbN",
  "key19": "4hrjoFRtgBbY1d6RWzvoZGVotCZXZrt7HpFiBxVwa9iSnTZ5gQgApf4PTipMEQ9h6PnUjT4GHcJ5Nwm7qucLAf26",
  "key20": "3CMsye5RH2UnpASz2pA9PrD7TfKqz9ja5QssVS3sdiWhTsWxQUotbW6N5Pc9qv81w5aza4aqtKDwckL165xjUeMr",
  "key21": "5w5JynVJo85b9HtcitwkJPccDTndLSLmHWirtKrWPC6bzr22FknjzqqPWwx8xPLaQL8AeKvccdtNUG3qJx2sBi4g",
  "key22": "2j931DCQrfDptEoFErJXC7DfUmzGVbyCHUh99FAxwdvT6UBKckioimppGdkAQx4rqejUPLy4WtroDDVrM7U7Dvxq",
  "key23": "4ibX7CnBPyEd6qfPonLK69t3rVWVvAdXAG1ehVsLFEsJ2F4DqyE4f7NhA6orxfox3EgcNMRTmNLirhyh9Ap5Y9Sa",
  "key24": "2pA3PfSMZHW8dCsepua4jjdK3LkMz8q5WsXtUcvBJRqa7dhRbKJhb4SFo6JQtWRdGgHQA3Vtjs1RWs7Vr6kbPUEX",
  "key25": "4KZ2h6dg4SbNRq7hELzMZyrxT38fbVpir68ZJchdnjcnZYEgdZq9nJnviDMUyJ2FDRs6FSVy4iJGgkggynS6Yf33",
  "key26": "4CPD2oL5quJUaFkpfX3v19WQY99Yc7n3Feu4A8wRMwj8AqZigJKnc8oSdQQVQxZXYHWuGFggwAKr8X3tKxyVpNqm",
  "key27": "5PXR9eiszsAVyRUzE9fhWBvpYriiVSM6PGYstHswH71ZnU6sikPSRB64M58jKq4GFXrWnZP7jDabHh1ZJbWC26pg",
  "key28": "2rxjqGjNG5nGaR5GZaSfStmKoLQaeCc79CbXXGorLCJcUQhZQRzGsrqrwfMH2VphJdCh4hGfe4ctvmxDkywp6j8X",
  "key29": "2BVxGrWEexK5PgTatt4aPLx7ZYM32T4DB9nbU2gSp8eS38pis2rC5w81yEJCP4d7oZD3f6uXbmeQwZGGUxJKqnzC",
  "key30": "riVMzrNyk3D7ZtEQ6piDthY8Wmd6MtfVg3AdMACKFDraHvTkP2yp5wBpkGjzcvmkFtb586ykkbc2reV4LoWj2iT",
  "key31": "3LTbxWJDpM4rQjyZFXdgixA7rN74GgjWtFDYMJftjT6HCEujRdMpX41pMVR59z71yLopUJcBsfBtJxiQZ2tJBMrz",
  "key32": "4knqrHmBYCtmkn5TpmKgjmmBE5XLsuAPADVXQjw7eGoTyBFNUypu7sHXmN2mH6RHN3YCvRrFmErB4RxfcgVcJZtD",
  "key33": "5oEPQf1iFtUdTd9CZg7AKXQ8Leta1P2gr2TRq5vUEjxtGAGjS5PaZQgdKTTfotCYmsnd4hXCeiPNHvGNCCvgDayy",
  "key34": "3B4TpKmP2eJzf3G969tKQuocVqGh73BUFsFEhqqhtm9RW9ATjiPUC69Qr9XRZkyJ67LQ9yP1xc4S2yuFNdmakMUu",
  "key35": "2YzGkAuaV3xwsktdwSgbTVKR225f9DikXzfAjR3fRfzS2A19nAcQemCZ61VyB8d3iuCG5r4WSsZiSCEYfi52oFdM",
  "key36": "mJpwhv2cX3YmGfvtLdZSopQXN2LL39V33NyMtL7PsSWECTVdc5zZWxLzbkPai8LV5BH83BvP3kCikaBpnMQusj4",
  "key37": "5yNqhAM4TDSexm8LR4e5DLTFedEgASndASTuWdgkAJ1knMykZhA4ZgDEC5KWfvkMA7gb1Dhm8TQJne7snKQJp9md",
  "key38": "5vHzafd85KFjaJA3DFRXV7KvX1CKCuzyhKUUaE68UdD1tEVC7FNxt3E2JZBc5Mj7HTtLVNV4fC8NG9AcTsWsz7jv",
  "key39": "3BiUaFupRf2jkWTATpBavVZpTH6wigAZAb7A6nWU9tuUsvgT7iymVocUUcg638yF6ebLj6HDSurwFMte31h4bHLd",
  "key40": "2rcDZPFkXgquwCGc6DWgYB1AoDaVi4yBrJREFye2gQzdz3XutFNks7rVos4BK5j97e2piLbneDdwj6fsEaGpJkCg"
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
