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
    "4kFT7rhC1Ja1TawEKZ96xNAyMDF7p2C2pPvQnng5MrPYgzeYcKTAP6PMQSpV5TufQjWBBtBv7noEiKbJR6P4wv89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aBFR6gefFhx6NirAUjx4iW23MiSXvTSJJ97o8egHz2osGJAKEzomB9RFs8MyB5FfC8SKx77mEeB1zM39L1UwEo2",
  "key1": "XR47wGL5TnMDFytP3wthjkttWHn4q8AMEJAxpT9hpaBPDh16crSQxGc5eAm94pLxHdXEotvUdiXFRGCy3LtAGyk",
  "key2": "3nyDwN7SyZgu74zVy8oWsShN6EgmLaokZdLHNhx1DpvN5hXvKN22pGi6BspQfU3ctKrAsywjPEqkPALivo5DrTwM",
  "key3": "ito9fAtqNzozHUvry3RkuquokcEGtbQX9hsQyvchSRbBKq9kHkoRrBPNbWmD9CyEx9nwZxEto3Wjz8SW448SGJ7",
  "key4": "4PtuM7hJuq1fvoynU1fnZgf1ChtUUs26Xs4GFEgCtKEnkHNQXCosXV8nGYeg3MZa58QcpQ9gsdPskWX1TcFMh3NB",
  "key5": "f2ev34MhVN2KtLon6tccMm4nZ9x7YCnZtKvjK6AArZsW2wq4hVXAks7tzqQDiYrNGgmR6qkoaksPy482JXEkhsu",
  "key6": "32zA5E11965dvBHbprKWSVMYnU1BcgKUKeai9ggkTFvd6bNKwWW9NEDJGvJuQ9C28Y2hd2cRoq4WmJ4UesaaC2K3",
  "key7": "5rSHwaWCNEnDr8xGR2CZAb624SmeCQ35BYpfDPyyz1aLBrKaTjSMqqFN1yeSXFzzFCFqRFsrwhiG5HGyPqjzDSpb",
  "key8": "5CoG1JK1tknMox1UVzZEhwhUydSZYK8SqMY9cXcVURNwbMhcPn9WYtRM6NBTAZRmbpaRmRo7NbjZXQCJCAWTZ8oZ",
  "key9": "5SccNTXBRkpyvbRveScd6y1xtWsdCwWgWUDj1fSVqPoLkcVWvqnbJNDvGDVM1FNJnMKie2j6Mt4VuyMraLoDKT9C",
  "key10": "4RFwQhbApNqaB2JjErHM6uBYsQKtypAHgK7rjKBuc5STZTRGfW8ME3tfKmUDt7V4ZR95fEEwgvmtewZyJS15GZxo",
  "key11": "5CbQF9vGMjvutFkUSZnfcEFf6kSfQ7jnCCKMGfsLyMGTnRYJimL7d6XWPg11pancj8CnAx1f63W7qXRPkKz2VAA",
  "key12": "3St4JU3giBkyqGxcieMhFEr6JagyT6SyXbRCnq7MtunFigqo4HAJx3SEZZvcye5GmJuE1nXggQLqRDKM6U91mBCV",
  "key13": "33B4oxk9yB8E8kPGQmMchG5oqCtyxZZupW9hqo321Mmb1xGrkXjow5vWWHvJjW4XsbqLwHaCm6mfuX6bn4eKPDpi",
  "key14": "3iiKK6toJVkKGfx62zmKDGaqyWBquDsdh3GfSuTwoBLbYRt2waZfzVBBqdz65PE5QmgYQ1Y8sTGZ2QKbnQaCZxAH",
  "key15": "36m7Xkov3KPfsEdXQaCqUJcGTJXvdpFoPRxwJrBXEPvtxxsU2PmD2EqNdD4h9o4a54fsZUFzYxNXh4sUR9VaY8FY",
  "key16": "2FZLejL2oPXEWa8NKetCtZswA6MVRrzwv8sATDpjH3tHqCdDdUGWGpjat22Mdff3wKMwQAQteLXmTrkEg5AcSKK2",
  "key17": "4MLihSCEea11n4urJWeGczenaDREHAkJC65EFxZ9cpe4BTba8tzH28Da6M9QiWh1YNVkDaYWj3UdYZuZfXtxqVw1",
  "key18": "4kENop7AZ4sVMbuu5jEvgvyAbZamzmd8Czt3FjT57wwmX4pEPDba5GAwKnhrdumaCaqMpiJNNNkqAuRy7AaSrrJb",
  "key19": "2SrPfTUHfMfv2YgdrvfffRg8S9JzSkccT63GqZFvyd6Vu6evFvARtQdJDwJvhSQHD9rAAEZhGkUZAyAuqRQQN9KG",
  "key20": "4rA1D9g7FutPiCcRCQ88KCMxRm1kuewGUcXCD6EBzcPou9QHJywYbN8o3vffEJbPM46JQQyCRoRpgG1pqwWPNUo6",
  "key21": "3hk58zV5uxvyPuvHMGFFxSegfUps8yRoeuxcjZJjTr4YqjEU8dyjgc7zhqMUyzmRxZvE1bReRFTyhEC5AXFLWsxS",
  "key22": "464ZNPm8QRmKuFDMs2F2YfuTj6AXcVpFTZ62zuuoTZBAVicx28TKP3XG89YRKQpWGVKKrFqvAgjRAvS3YY4uJ1MU",
  "key23": "2sbEnXLdj5K5BLQHko1PbesFZTvv3V6jPhAfecXoDtMEKX6EkYUxuEBE48KKCA5ddHysSin8zHrWDzzdBnZx5HVw",
  "key24": "53P93eEf4k7jXwuspu2RpHcUY5VKncr6WQVsuQZqXdHVX13BLNDDZ9xcgDCXd4xRmKfnSmsrqzS2qCF6kGCFZiRg",
  "key25": "5LrWefEoULvzVHdkFNh1DeAP5KN9M82D1XsNNQ73WVrtXGVJZmobLfhq4121vLtw8wrPALMM5QaK4MR1DiVfrirq",
  "key26": "3dc9gaArELNqzwXQ8JMTH1dTwG1cxzhiY5bCzdtWqYs4gGnnwL8GPib2JoXQM6wjqRsizuDAa6XgREaYQKLqxMrE",
  "key27": "3NDsxU88XUZsvPp6ezhEmEu5h1reZ1P5J1giCm6SURiqNkLsCJynmPMZiweRjPVEH92nUnppiqVrgKybnNYzKvta",
  "key28": "3TNRc5HGnioBJdfjqVxwvvi1kTdjrFfiJgTgDAeBRU2Hp8BJnu3pYejLFuJ9gGPj9ZGNLSs7WiB7gzQJQmonqR8X",
  "key29": "3iraKHq4pxTB25FCNmZQHVT8esuGbYzyTqTK6ab14RqhRo5XmH4WH3QSDtBrZh1T9vBH7HZWB5hnQpyYCCtNgVuj",
  "key30": "5nRws2xdrw9Ngay3PZKvMQS1q6e8jwJrj6dACeMqx6YweC5oUriMmfENdbJvADPag79tr5XAo5cRXt8hWWdBk8Wc",
  "key31": "5879CKBHJA5vZyUAyeU29jtkro2w1z9jjnaw2FFsgzvvBHAPFtxLbPoGvDVD1CveToeweoqWhm1mVF28nCfJv88s",
  "key32": "3tQXfQFF2LM5Lk9yEtjsZNm93W9xF3ZpJVvGQmiGwBU2Y5jzEjFteTWFvkXsQwyNCnFhCcbKxEyFnkDaNHcXuydD",
  "key33": "2ManHZjBWXWs84EEYroNdK1Fx3W5LK8okAptJBTHgfpvcoY9umGRbbxD9QYs6jLCeVPwmQBdz7HXBpPib5uYsTBg",
  "key34": "2kkBkPXr1DRJzDSGa9hxzcujSCBoBnnhAmvKjjuyDV6VY2ymyVVpWvrFZ8A3TJcgNMsPDtivJ35RMkXvZsrt73Qe",
  "key35": "3GLo2xv6vvNhpdYfnbTuvnXSUDgHEKmDSi7Mu73N7fAdA5m1sLbcjSvy3CRZDVqQLtUiwGNbfMs17dAUAGMbck3y",
  "key36": "EKe4yR7YcjFpjfyvxRPSVNWnZL62DZdGztdgcHwnp89n89tWdw6aZLUWUDPmbUbFrSgoiwSe5fNgwkGpuQsW5Xo",
  "key37": "2tzeoyqpcMT1Y68Pb3Ne4xxCZ73kvSVr9mNv4WX72yL96N2VC38R7aFJFLDPz1VGR1ckReQpi2Sb27akDeNDkCzr",
  "key38": "3SMZnh4EhDxj3ANyEsftFi3oP3j1Y4vj73e4jGpYTm8uUwhnHZBGfKHivqJHqKLZ5HhonsA2TK2WPCfTaNFXZxmQ",
  "key39": "KCaaJ4izxvnD4sSQ1Nt7yTS2ZbzSJxuq8XfHzyLdv2uTzvc8kTbMq1rqsRjCW8y2viDwXnmvk7FNhdqSCe5dA7K",
  "key40": "3nC1nc91qk2s73Wfdv9MoGLApiCswUk1yaoc4GHcYFCKrHnvW51358WWVuYvg8QM5DCDZcijFAjHHGxsHQgNjDGu",
  "key41": "3FoiKA4ZUzKJaJGqtS8mkm9nnNjjtBNwF8rmMSZwtY1jkgFha9QCh7cxE67ZwScDJx8mtUU6xe3ZzmWa9fUKbyiK"
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
