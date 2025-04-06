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
    "XmBmYHcsWTYdUsJBCbqWx5GdNjeLPsxBMSaTNzd2HBetjvDXtmrMCuFEiGyso8qxc6ER9xb3k83APSgHjyJpSjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z5Tp1shoS6eocutrH5czKardaFLnf5DATyMkE8CPkHh9x4fjSpN5z1wmSp4pKuFcPrHGa2LnycY3rnnGDR2dGER",
  "key1": "4nj9BFHGfSRLBxvEt3mEdpjMqumg1XFXXeaiCQFbpHvsFZx49ShsYFbDJCK3uPBXy3vLUsPwdi1aLVoByqVp28x8",
  "key2": "2RPaVm7ATJmUmDzEyRCPSoRvyg4rH8eGj4aw6LMuNy5nyi9CrgLLPktu87dJnfomVShsBm5k8EAAyU3kLmkjhCM7",
  "key3": "3hUKUm4hYZzMTCGprGqUWUGq5jEPjJM891X92Aor2X2Ur16E5rztKHDjrPFAKkhsaeQhCE1LcKdPcWanby4Kgdi8",
  "key4": "3xLDGnRkaKkQeY3p37spttr5TCRQYSW9NreVwo9a7BXs9kJLM57EC2s678Wit4PA17DoSWrrz6JAQFoZ7TSmrYDD",
  "key5": "jREWGekNVFQDBRBixKox4oshrK47WSQA9T5iaDUJzcNcqJGnLbJBtSQ9xn6fi4vFCF9cJ87DnDBgsUidAzFHtPb",
  "key6": "W3ycoVXrWhaqJWEzghTTrtSp5cxzgFcqkSc4dZtez4EDiziufMfJeAdGBNP8uhaBzYFY6qnXebVusYwmx4mimLc",
  "key7": "4pBTpB6uK12sCxSSLAB6DxsRUskxxFNEQC8ts9Yz7TmDu1zPojJSnqSGELXKHKsFCwPKN3wkm8pX1478PavhKq6h",
  "key8": "3NtUyYTyELGBEuMi4TXM79aEctYZNVdpy5niXKfi2cC69psjZ4ef15dHhkL7ardJ4SFgBXyP4MpWMjy12u4Cit7T",
  "key9": "LwGtRchmTiXdsuyUPLDmVxs8n93xogWGGbmC39Fj459M494thWZuYZKE1CmGezU8ZHbME1cBxd2zE5SoK1j3mSK",
  "key10": "43FgYHpKxGcKBf382HgBKHwk7zXq7JvUxKzsxgqWf9xzYDvwaxDho4pE3EF95keRineM1qVdbcv2UotTPaumYfAH",
  "key11": "4JaH6bAXxK7Yg6dk1FEZ4sQ1GFGBcCQoUS2NoyFsfRyiudYo6osFXAmTShucGvQ9uuqk3kNoy8Coz8KuddH6m8U8",
  "key12": "4Do8fDT9prvXTZkm3m2hcXiqqkBNRv2jUEDiQwGiahgtoAHMZe36EuSb1eTWcadUGLfLCKhZFFjMf7n1ZfCZWH1X",
  "key13": "5H3oZzokX3c4qR1Jgg1mWgcUTvsh6Wbpbr3UzJmvmzW1KzJARfgNHWbuZ1JnZUFvzaVgMVgqzQbHmXs7hMjTSTqh",
  "key14": "52QVYEStyCiLajPhJT16NFc2aXQZgwPQm6NjFz1DT31DnRkfdcDmNyfXiJRqFyihHQYd7mu8VHcZbTLizD8Qjo7H",
  "key15": "4V1BykjFGegGJzRDDsMLWqSfGiYCEKHrVQNzJoBo2jmaGcMDTitT6CtBCBaxR6LixczCg9QfUp2oaj6a8YSF3Mr3",
  "key16": "5o5VkxCSdX2m9w3jWFSB1zHViypedfEgtYuvD1mRtJMUwq2HUq6JTPVw42G1U8jDzZmkTgaZSD1auvhsybv4Fmgv",
  "key17": "52sPtZ2SQWasPcBNgyWyz62Nf2yk1tLWS7dxUSTU243QfRQSSTcoqrYEEZk55pSQLaGxs2H7o7v6cqfV4CyRerNg",
  "key18": "EK6C1ottnf9ygdFEXKNfMRjeGfRA8RJuWjuB1RUqHQ6u3PSwM9QHVZSqJXTJ5cs4aF6LXPkPMZUa1X6uvJpkusX",
  "key19": "2kwHMdvQfmUSPxQkZQi9KAjDo5kNQdKXFL2wCM6E18knBpWbhkAohEzyLZh8vVFhfDuicy76pk9wNJtBQwnjLELo",
  "key20": "3yVsDmgPhVLkkeAP2L5qnKfSRfAqJFv5ehguyKVCY883UP6XUTAUWbh2qudxmWeLj1BBdidqyzoC1YWXrcEkebZk",
  "key21": "626L6hPAiQQ6BYXVKZ1LQSvgrfUXRGiSC7Y7xL7EGK49HgdFwWXvBLRppjJ95p5HXd99bkcW5k66xQM4UJpUTNFR",
  "key22": "5aqL5WrWx6BMwoXAyyKvATGp4EmgBTPRNouBXjG7mVgrDBxuJ94eE2pNZYZsqDBXiNvQCqoeQtJ2gbLRTLmLxSpf",
  "key23": "59tK3cw3GuBhAvicenySRbJFRBGoJYmQksy6WNZ6HCunFJaYRqhfRGqhpGavBzHVE6s4qhzx6B79ghDJxwqT7qsm",
  "key24": "46vzBEoEGjcvNYH598H9WKKy84Jsx57WZgLUaJmNbpRwnwQ7MmdJryDUCFZysdcdMo7f5xPZBVbdEbnvJia8uZHP",
  "key25": "3pXs7ZKbGygqGiVbeUqjLRmZm9bpTGwHrtXjtnmGuBHDrWmtC6mFxHJszm5KufKmn8kLxbwvR7JHT73PQzbLkvSZ",
  "key26": "Kt17CzgHGxRPQvqqpsUFiuk71be9QdqTQkZdMBcwtipgQX4z8sU3CqhUnk2hj3GtbRc4FNrD2BuqdhTp2AWVTNG",
  "key27": "3zwTiKue41kbvW8yFBQeiWh5tBrh2eRBVojxFru7acoawZDWgyY8y3uH7vqhFU1xVQWXMqkQJ6EWvRmZjfH2oWuq",
  "key28": "4eD3tA57UZ1yfD1c9udHyewbpSdiJHj54zggGas5mBY22pVknQPsxBkDdXiyvzQmUeycJmCyeiRuBTdYDM5Ntb9L",
  "key29": "cH3JduoCD5URGdKspbB8Sos8HxhL6We2KN8XWJXVfyD68PSfvAqY4ZukrkfZSNXZeSbqH9P5jx8GhoPdzuGH1xZ",
  "key30": "5i2xSi4N9Ww2KzPUoLLumhptbjThn3BtQT9GXPhMbzQNUgUzfUeH4q7cwaMhEUp1amAg5Xf2pcpCoRoFcXWZawbn",
  "key31": "38o1HRaLYtAH6C66yEK4DjHmUfMcfPJNS6BU6XgQuEWiLxfs8roa6YfLfreRXQUhUQUkwyaDuq2qzu2hGpn3r1pd",
  "key32": "57M2d5PgjfWDADZCdbx3D4vA6dcvAPaGyNNR2nLmCCMfvgULUEm9khpBXpTWsLyZP87FwyW2jghzE49j8HeTFDjk",
  "key33": "qTAK9vRr5AxLFC3KprCaDRXt4w2ExKCpsxx3B8AS7tVmaDEkCUMbyt5t4YTrqQwFaJNX5JhTJNVGpnV4Swn9gty",
  "key34": "37PCnWeM4Qmbd1t8yyFAmLUn37cW5jfhFCsFTYAHMqjPyeiPafV9NBRKeqCWZe7pmKqh666tL4vZFtEPuHHPYJnA",
  "key35": "5US7S3wYnvxxdJEuLnZgHXBXFyveFufvhtGre9f62cKkMqP48Yxk87cnCc7h5hNuHHjxrov127QA83egHxefFJAy",
  "key36": "D6gT48ReaxHSXWECtqHAd1xkzQWaSobrxUEgxoMRNLP3pFDWQBr1JyRDEWhG9vjyuS7zB6RDwLqB8cdappDGhtU"
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
