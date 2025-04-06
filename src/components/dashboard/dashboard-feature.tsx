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
    "4VGvRqCVh4YFeZJNSbZyPiaPp4zxAerXSrC4ULYR9ik8GeR8bafLpmV4TLKtqEN64ffpush5CJ5C8RHpXidU3tyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ATfba8bNquLq7wg7oWPLcQjs4RL3R6ddtXfrYmMC7uWTzsKLFHiyHohtyXWPnMSVJUzYMeYwsUY4cmVbWGtBpef",
  "key1": "47wyxMmLZHUpJbh2hcEbEHQdwxCrWjYSBTUL2YJ9mQchDGp89tctA58HwedCiB6f6xppd4tTEDya2xzDpFcSTUAb",
  "key2": "S7ytVNKG75acsr5SmJ4TRYnhhqozewSohuPA8ChA899faJ3XCUZeGS2KND8CFQ2aewS9NTyJ5f6SwvsGA3m6EB6",
  "key3": "5kMEcbKyhxXU8F4W8ph4R34Jk2AYPTiceJj3vhUPhPB3EUE1vqeMSsMr8VrsjfNoKN7SYQFFBFmS1hTWqAMMGYFb",
  "key4": "5mWAud6fSuwB5G7w1F2U5YUrCLvQkpQGiTRfvg9kZ95mnv5iZJXbfWC2uEztfkEETo22vh2hNuFQ3Z7pDNbiSpFs",
  "key5": "2XtD6Z6Lcnh3qZuysSGwxQfseyfjkJPvpeEi1eeqc1Zi3rjYFukwnYKaDofs5Kebm76aeiSqohRTYg35MZUCsWRi",
  "key6": "5o7iAmwNsAxq22goDKnXSUApoGUJu9eFj6PKWLS19MHPqN5EpiCM4cKCqGGiCSq827AsqurBLdrHtBafDx2oEZom",
  "key7": "35UqwuVnvjJ6cPDMLZhSdpHN8T9kbTPVGrSo8d1J1Ew6UB3dTtfmWRAJVkTtKPXTMyQF3SjDb4n7oMxdrseh2z1H",
  "key8": "4K7p5H4b5d3VCkJsy6k8yknsqQKSZfuvrHJWhnor74hMgtREDDwL4cHmnRxvCeNuCt2PduznYEFxHJWkyB9Y51sN",
  "key9": "633zNEnM4aEJZ8GUxp1SdYQNfJo8VnJggG7HkQDoojUHTxdZMh14Mmwp5c6Yn7X225iPUnStoVwmecQsoy4EfLZd",
  "key10": "3L2XafiTHA2VzqqczGwo9n7t3zumvAJfEQr4Bp3LWRG1Nsw3VzMZ7M2wi2gptcmmAUfMEK9EH1TntmAXQBroTBNV",
  "key11": "44oDgCr6FWbVLuYa6Tvru1usZZcJssE6RTcs1i7Rz3r7KGrpAh4st5a6LTGoHXzfv1EDQVJU1XJDKddLsxjP6Tjr",
  "key12": "2rpKCV6QPmPzEe8ZXpR2fjj7nYE3D12eYjoNosC5VL642StsVezzSkWNFeKDHLrwoZat1owjJN6j5Mp1Q3cmkuBf",
  "key13": "MZ7pnnUYWUQ2wQs5mCwPChoWRP8k25KUJvcbmTkSVsvzazu1Z3QnEpa2Gh1a34C85Mma2ESrBGFifPwNb1s8NJL",
  "key14": "56o9T1n5426T6xGfsQ9pwvcUuviNpGbXu7qy96ska3vnpGmAARgJiVVLTwzjysEAMoqxzcz5p1Xs5TsPUJwzhLfH",
  "key15": "ZQAnb11ucHU7WewNBMusBC7QjTrDDAJge5D5BCrY51npJpdZnqoQok7rFkEbZSZ8n2U63pt2UpqpNn3UtHft2Ua",
  "key16": "5upbYmxyBpnBV3g5dfgcrYjtRkMB1B3XPt28T3gzYppacLaKiQwqgvZzAvTUbzFmN1hD6XckRTqJDBn7bmqV1P5L",
  "key17": "4CKW5V9UYDLto8iP9UHTiC2TsP6X3ZGmeZwnzFBGDPgnwh2AMPaXshV7Sj2xdxXdpK8wrj6VemqTdxTBsjoatox6",
  "key18": "PCAkhevdPrujJVTM5Sm9yfJUxVm3adLFz1o5tAo2UYJPtSNiV7eF3Gdoj4wgYgfPYpHduVKrnTWkktHwLMPgigP",
  "key19": "2cnqmeTSC3YNBpGz4EkvBsvaRVZ9dDU15QCNcnpY6xQWZx8nibVbwJmGqbq5XEYXZnG5hTF7XUWJQMmKm374TBxW",
  "key20": "2ePv2pE82JQ6jYnocQPsiRQ9hZwqbJJd7Lsxjb6VuN22xkZSCCaBtZbpEYUpEzLDQQ1JS5ydrtLTpJiTkAdNC5Sj",
  "key21": "53PFRQanx85oWDV7fURa87Hp4h3d81ahx9UQzyB3Gz5J3vRT8WKbkhdQbA3wbxjXrunukeytJrKYLmeYBBx8yMnQ",
  "key22": "jBhyEZvBP6Cg8hketZHMTcgjXCoNoY5awTKTqiqELVcieQhAWQij9Cs9w6Kdk9YkSjiDwSgyEpyT6jJzYCBPp8c",
  "key23": "5d2EeDczGoZm2mVTtTKyK2QAeE1qZJKwGcMVnDsasCqb6Mu9vq2Fmb8BWMGfMqDvFfdjfzNmLi7ih2pHkPZUZz5j",
  "key24": "2PR5P6tfU8BJwq4LrR6mLXD2iuC9P3JXHpjMnjF1ixWUYoPgZQZbmnU55My6j4mbiiMZAu85knPmW3tGCcTeKDBy",
  "key25": "2SXXtkwZ6v6j37J6qRfb9qPrqxj4LspaksvcJrsrhjAi64wzPcUTdP6ndaYDuiJW4qnAvgvx852R5tLQ56wbdawc",
  "key26": "4gn3bgBw6PSbU4gKzyCw59oCcRfzsKb2RjNCMQNyM6EBEsfnV6dcKSqXK9gym6LRFq15QhtWWMi28yJMg8TyopWR",
  "key27": "HrpXZXrUuMktHKGR3T3BV3PHxXXrcFdKZasHGkfAbBVj6MT2q72B89R5HjseDCCzNzcxH24uKqpRevJJSxZG2u8",
  "key28": "26TW5B68tg1o5MQf1wJVJwT2NUhcki4V2A8ApsVPcPbv2gW3vMRQvb7GPqbfKnubbaXAZuD5Cq1AGBtZ9vQr4tw7",
  "key29": "2E7HfvTUvvTsNw8ocQF9X9Q5oARKNjsKhTZ9B9qgDCf7rcGmTqBR4cike2vyU2VsKMNJoeC126SdLeaMh47Lc9At",
  "key30": "41QNRuu918JuARhLWkEYrnHyuKf6FvA99cTwEp3X3K5m8MwWBzhQA9vHToQxtLeSUxZ8jYPWzKNyxtLyeJwVmvQW",
  "key31": "4jNWPXALW3gNr7eUdbRBkcGDow8pAovnUgHT73fooTgpQ6ToSx5Kys6drzb2KTVJznBCaBMBtRf2hYHpsMqA6Gcp",
  "key32": "59YHF9XU9KpouDYCq42MKH8fbwuNycAHxkQJYDgwbYnmBB6GDg3jWM6Fd2fpJvZowbXGKFsvUfCs86srhDZfRhwR",
  "key33": "UgJBbrMhd9C9fTvLTjjdVRyenxzCF9QvTm24oxiu2ox6qKE1nuo7XbYwGmymmuVFmGMQxGz4qeVbqCvL65a2keL",
  "key34": "V5oVox6eMuoZdFMkrttFiDV4gxzrMgrAmT1Juyub617u7hpJ9KmoaCYupTWDx4Y3KeV5KHBxyNzo6bGrbpfc4wJ",
  "key35": "brrREvSrYhH16289YpXQaynUZxhZiimBv16GFcDC3sq1kpcs8wxjbFVuL6icGVrDeMUvRTbCcf728z3ZqiEWXN1",
  "key36": "u9mDaDAN8BQtzXAbuJXwNWVMnRM8MimpTvpXdJoy9YdJpF6aoLqep8f84CUBKnm9iFyrkBdaSfpQeTHi8LXyLgm",
  "key37": "4XFwk7BF6b7zLJEWax8EBsPMG8MwXC6bdYU7pPnAa2WcW7MGPJKeqAauWMzDMbi3GMWsmW9CDVJiZsjp2zmA4yjx",
  "key38": "2bdQ3E3hKSsJB1JE2ZRSKvRHzXhA2ZJiTgMrSM2hTzJ6srjkhk7wbfAbZw4nFqyxEBLC7jjJyZ6tn3wRW3A3g3HF",
  "key39": "3Z3uyWNJH6A4dUxG75g8MsReNkYwq3szZPbXHfh6gtTcyjoiQ5kJREZ94DrrUaB6dts9C8wsXVPQDaHRADBcMvtn",
  "key40": "9pWJV2wp7zB4BPN8WMyCMayjS1tv82KSV1zFMvcGMYZQKhoaPkhzWt1xDyxSn5SFVgMurBc3CxYD7vAxH9ztbTr",
  "key41": "3jWRae3twvD7Xt459yem3QDXxwC8X6y7i97BhZ8TGdCiv9sHQxmy2gsnF8awoZHnorLSbZyuoxSSmNMdeZH59pit",
  "key42": "Ae88Sk4xgyUGwCR25mC4JKPXF6jq47XdFTtMbadrXLAnwkt9TRHWT9sow2uN3fngUbwNVsz3wPnL11p9DL7UAG1",
  "key43": "2EjKfkTqirgLGJsgtAMqwyK3U6qAw5Yoo7HfuWHNjsbCXkBgkepeNgqrVhQsTzeontR2WgRnGfE9ay53d1ii1wxb",
  "key44": "4BcD1tTR8uwxoYpw3mu5P35yzvXw8wS56kfU7WKRSaE8nrYPgnmdU3MsZY7UWpyuhHBWXKsWZ4Y3Zk1SwYWgcGFf",
  "key45": "5eqj1vfjmZpfkJF7imDDMQqzRHvYUyzqBN6kFUAhH7GZkQfT3zQs2c6PxQg3aLoocksjVbv6VTg7kg6yMyM44VTc",
  "key46": "23NmyGQfXSCCFAw91CoGvaEMLdH5cJ83arYsiqxcFcdGMiyUEpjpPYB1aAwt9KGv72Anp8XAwrN6RQy66c58fVWp",
  "key47": "3Mod21V1QjmRLA1vFNAo4UdtnMwrYUrDNHNW2FM4oC7BKmmyWJWnub2rVsd2a59PSdUPSTmLtr1NLAu3EieH1tmT",
  "key48": "65njWcitBh6DnbJaDkervcKVxB5yUWU3C315igEaekfbSFMNZn7h2GiRMbkh8djt9Xf3nJshFrDBZimg8KqPEmby",
  "key49": "3fwpA21ov98rAwVgDQSDvWj2LMDrrGDAX1cp5nmcpiVo8EEMjHoqSvksjCkYgFY3jZ2LvVXfXJfhPBV1MRfJwzK5"
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
