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
    "2AGFiokWTTHtgtLV4cNipxiar8RsFGRUQcyNrW3EVkjF1zJ6rvzVJYscQ2kJshjcb1C5gfJ9ghTagEj6V8GjogVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FTo8FAzT747BN2hgKkYCTQG1iuzvfCiKzGEfrGRN3efQ1HEz2hDcWEMpynG8BQs2SfEtPddKVnYTnBgJTjE3FgP",
  "key1": "DAUywekUXPpxBnVN1nzhjzC9NHcZa48cZUMXX2HKMWkVzAYN3uD5azmBnEeXmYYzSP9Q3KsK5stXcziF36cpaYY",
  "key2": "sSRD3N7wvJ6kJxpCcqLnkMWjox6VuafYQCkpM63549U7ccwzngDUHXikWj1THeKkCigEEhE6r6CTUzFaTWSZEGF",
  "key3": "2oCEKVSStg8r8fm9nEc536uSC8JnaZ6vT5bzuELoCviEpaxGH3pvUMu1aoZ93gdGfKU86uaQJH9qL3LWY4BmUL4x",
  "key4": "5iEkEa9i9YDHFdoDnFHns8pneKT5E9nCjoehKzkmFhS6K88HNfdAdwKs1eBRguiSH71KwuTJ2eNCUsPeL8uTcKtn",
  "key5": "3WV3AJrxh2zJZhL3D5M7YmuVTR6VVmw3C57DwUMwkY1EDjdSvAGvrVkrFQAkhQwPzBAY3odt3ZXPX74zESubpuSK",
  "key6": "4tUTSkHyrUaTjYJN59yBv7rKszmTc4uzw4onzs6NeN2qhDERT95XojddDzYqK7a7HW1YefpR6octYVc5zL8Looir",
  "key7": "5HLx343wxj52Z9nPB6GvMvvfecmepm6WbxhhEE41aNGucfCtkkg3RxktZmcdpvb4HwYuwjnHhteSwqhBARq6WsKC",
  "key8": "y1zErQLDK4xxzm2aK6SkPV1vCcBK8ZUPy2jjwRAmbMphamHMRkDSCyJ1KiT9xbX9bxEjhGmi68sDz2o28KTsCwP",
  "key9": "5rWUE7vuLyJYZ6DbZsQCSTcuaaSNSnCsKWt41jAyJaU7oVatM95NM14RCrmKT8GZjqM7jZo2ow2dEo2ZV1TY1y7E",
  "key10": "5S1jLByzR68RsDHk1Gb4382qj51Q1qAqHy3pUmckq5Y8Cy4gnyGSvgNZhKHrU3AnLMykcM8WBWnNKdXBTsqbc7Q1",
  "key11": "64KUTBu1KvGBT4mnYqizTQWaY9hPSnB1ki8xytydVRCoZmqasrpkWtzfChWcqDnyBaB1PmuN7upBoxeFP7rVn46r",
  "key12": "Nd2GigNrasnHTZXTxwavpAYpNn1AtNfBU6cXUZhbLenAdYAK1ud7Vz2SL2AamVd2oCeAnjfwysa8WPr1b8gBy89",
  "key13": "3qE66McNd2UHyGQz3VxGtMs2LnYrTrTP7WMHe2AXEGBr6s1fj9QJYWjFrANzhC3LjCzoq9KHVRejZcpwzc5mq448",
  "key14": "3s7AWbAWerFpggzo1pYAhF9Ura6BcAGMoEVu5FwXo9rRfMYDdwTMhmKQ3Cu1gU8SvDPidgWitJNiMSB5Zv7RaSRE",
  "key15": "4uaF8Ko8yXpkT2Ej54shvJ6YiWM8Kaw39UaEvw7Z8PwsdkNRevVLsykQKsqieQ4iVWS3zb9WE2V8P7GZ9xpHu2p8",
  "key16": "3dRwrmmKAfZJyaDpRFc22TZBiPL1ZCfcgEc45GeXCXSiSnTjdtrgCEMm1JxXE4cTht99py9Aippb9zsV9GqU6Aha",
  "key17": "3HLuR9Ph6QbeZWMNXBbxXAJdSfAn3g6HaiXc1RpPTP5EUkXCAnZ53L1St4BrdATDaUNUhRDfp8jTjXpBWGbGnk4k",
  "key18": "5SZWteaVePSQwNvMYpifnZ8bder1pzVcokByf8g21P59sVvMQhzU2adx5b13qanF9sVCM88fs9rdKRuPKE62ZfqZ",
  "key19": "221AgBbZyg2KXZWKKTjRzLpMxBnKMCKcx37nGwiNoP5ecYfWAqAqsziHRuLiRa4FrrgYfqvgNi9FgeK3ZncPFQWK",
  "key20": "2BjxAvkc3qF4KGfHgEN5SAzUmyz9zKcV62HPkqcZbkv8eNQtjzPnoRWWuXT8dndpX4Kf5Mg8qHgogxZxBWEbxj4g",
  "key21": "N6as5Snk8F22WceZCFDp2bYngYMPZTGjeuaAMht7e5rgsfqVsNeLsA9yYf4hCJETML8e7rTG6P3W6YQogfLfU32",
  "key22": "2LuHbnNMheoVTz5yBNKDrVJH3dG7j6RgP5UVckoVasd7UFx2hXQrhmwxeXhnUt9qMjyd5LZTV5BUAhZnc9jwNG39",
  "key23": "5LMVMgzPp4mpLLJ8FwqeoBuRrm9vEA6nW7TYnvjuCyDhshKNyE8Mw5Rh3A5WRhf1HxcJoKjELfAtNSmvwZFxXTmv",
  "key24": "3uz5Fu9WjwKo4bdSXqQFrynfzkwPXKCGMpqUEVhXba19ouStYzD2HMtgnMz4ygGZhUSPpktMNfiYrhwW2NNYyFaF",
  "key25": "4Dgt9nZL4TFbgZwm1gkRhUva6KLQxKFFtyC4iJxj6pk3pPupyG5KcYFwNxoEVAgwfs6jwkjttuBoauQDoh5e4uNe",
  "key26": "3AHoPK4HT6eyykbWRj6PEBbTXit1ba5iqQ75QsZ4msjtYpBpvJaTMx2AZiMJPa34jKQ9pyDntZSLmydSWQQ8TV9h",
  "key27": "2iGrTvC83aKtdckuC2Svxn9R9DuRAmYduRLRqSsyXZ2JhZ898kyhHuiSg1U7YgD6sdm2iaX8PijQHGB4SEaZQPne",
  "key28": "4BcPYdTMupcPTu4umL5LCopfSRx28QjLrxrCiHXikawNVw5GU5fvwnFH1CkMjQNu6kvB4in7KV9W2MfBGddrb7ej",
  "key29": "2y3zh1itdMw9CmmmAfMoByhAbneV2Cho21WqMRSYDBhVCZGsp1BYmyoh6DrAt9EFSrDtbzAazDrj6X98wGirJHFU",
  "key30": "4q7d1nCdMB2bx6EWViaDQVQqLCTdSs7m3hJCwaHBmE5dat5MFcFsdwkSu1mAAchGzVMPjhFKTnMVBPufh1ZkXTGu",
  "key31": "1SfwRosAwpCrWYfb5FPcZoDyPvsCmwUjQNXXf3K2RxiHPa3mcNQA6SJp17g2hFsvEpjFBLdNgfisagj5AGeukbX",
  "key32": "4FKiaRugeK1RrbAM7jwjLwTwfEWEj59ALQEYd7M5CxU5eceCHaBTdxbRP6EUqpaVqTBi3xkry7uENMFuKzBpVcCR",
  "key33": "4XJq69rn2R1JWZGzGksLE2HeWvafrgLh5jhxguePF9m7QyYBCMjAoRLDkst8128hjiCYctvqbkKeWA9YJPbJzdhL",
  "key34": "5DdRQGi2cULdjZCckeaRnhkQLC6hsHdT3hq4d4xpZty8D1mxZCskGaBrFURNqBfTUCqTyRYj9dHmLvcPLd2zXeXS",
  "key35": "48ZTF8th9FqzewKa8xiFKo93aEsArPJnY2WwBtSFya1jUF9Rs8yEM3CKSbJadPJoWyMbb6rAywPhJThCdHeidg1n",
  "key36": "4Tw4SMRctaxtUxNpAXsEG3JF2TZ2mgBdHYanGvU7Y5CcJcpposy1KRWacDrSYX5hp5iziARsZ8eqTyvZ7gdDnztY",
  "key37": "2j5Nzyu1YewjjRdBeoPmaUWJJt1urfPLzWQrnjNwAyzi158E7y7Dyt12umy1Lk7hAuwopVyz9CVuUdZHMVvxJ2qm",
  "key38": "4Gi2uA6eL7g564BFoqCPhsWV1AZS99eNJtAB6Df6YoMe3JywpLERKeb5QnUMwW6oMCi7iyNs4mNRKQGMgS6WWWaQ",
  "key39": "K3HYkSMW5PT6jt1mhLGAuQWC1Uioy4mbxTmwLTsPmotizmpdwdqt5aunGC415n5hnqjGYyzBo19Am9uvGXQ9DUX",
  "key40": "4Y1ub2sypeYzK2fYX6VzwCxkQYKWsJ6g8r6bGyZW7uKpAmuvAvbYciawCkM31DJfFJCFBnnQwAFYJruZTYrnKwyk",
  "key41": "4Etv7iHfsh1wEgMNzntQ5EXsUbQ2aFMngGfYHLfHeTwfL26gab627buBLNvPt2qXcareyA42NZFLf1dsjnUyYywA",
  "key42": "3g2Xa1ZugD9pmZPTEkEGqfimcEUnmKagVifs8bPbfGq6qq91eEpcxjVBjktQDdD63EGXHu9EBQ2gEvXr57EshnER",
  "key43": "HiThu3UiLpKBEHq263P1Fk5UGW4cZnkkF3D1fYYj9Bi7J5UGBmBUbCEvfajn18Wm3bVitg9nGz116aPCrP9QrMg",
  "key44": "VUkiry2fywE472nuxyYmTBJBtPzdyEzuy5W8gr2B1v5uVcdTfygzaZ4K8V1Yvo4tnKScQTZZkHMbcedBLVdCtSY",
  "key45": "5VYKARZvMg1yr53MdsgcQvaujAg4racJdAr7brJG7ZPoK1kN3U6UyhJWu23V4K3C8FJfSS5NeYvPuBXywZMnJYrr"
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
