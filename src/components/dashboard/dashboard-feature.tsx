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
    "qban34JciECrAAaDpV2WsiH9bpNXtpurhCbgXaGxMXDDedhWXRS2fz3JNLUUNJCJ4ABVWaGwmVGxSpssaQ2wHzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BYEyjR9hTfZ2eJQmZkiNUBvqvuEiesxPbGEW4i4iYF47ryVuLcXEsubtcmYXwjrFK3ynM4NqccvvQ4E5ZTGv6hT",
  "key1": "2LbYtV6z8PZQbFopNDAdCNeiQDofprRZHJNUnW7pSkPf3VZfHu3srMpESnVR4pCnTaHqujSszjuwjJu4FohWFHf9",
  "key2": "2d5CWkXsn2LBmwTCzhGRGWDV7FN9BZmJcuYTn4FMdVzfGSQbDc74eWyvmN8TZtqND3iKkprFuaJpjae66YPb1JMC",
  "key3": "5zdF3P4CXhhac6VbFa8YyUrgx416kSLBUw5mTW9rLFmqGrmVtBWEiu6niHeq4GqQ83uP6zny8UvnHWZXaQDMdSxj",
  "key4": "4kSKY4dPtx54m3t2XXTt3KsdoQp829LNsPtajgcWN7EUEr1y4zDaJUuRftcApW5DwCd61q8iDmSKxfN4HWZYQPXh",
  "key5": "3HGTUtJDE3RsGG8bRyCaWf4QX4GGJTYGAtaY3EEgHhPPe4fejnjBhDdmuxAAA9uVVdr5nv6BoGzpv3cgmKU6pFFC",
  "key6": "u4EAFjDx9bPf5k6aFoHtnHCoBCRvN3zKvbvHiwgTktW38A828rgBBta26y9CyfwQeBVGfHR6yEutqiUYRy8XWTJ",
  "key7": "4XVecHZhZQoEgeXUDvZFo18wZEBURkz2NbVSBSsf3tWtiVnxjdfkvuLZvp2mn7hYTmzkYKJZfwaA7QgN2FzWL2rZ",
  "key8": "242CvkyGN1KapRs4erkFUyTGoEQK4vBggjwU95Yh58Gm1nvKPmwKZeupwkczriPKqkLzvMC9RtmUrqXiL3pfEquN",
  "key9": "thAhGeNTxbFwHiZY6BTFpGFn2whnoN5aQviytZmV8SGqfGAnJGrytA7pK1gTkPNAdGtc6MtzwNECMgBkmiWjc3y",
  "key10": "3oMUM4w4huPuVNsYQLALq5CEGaBK29vuD52pqY5kJaQb5yzZsjHqxoc2tUtZ7LvkjYmpfGEPstenCCZSB5WgdVRT",
  "key11": "3uQcXL7D3XJYixUfphjhY21qwDRB6Y5Y3gzxj3TSnzyuM9ktRuc2cxsA3GnsrS55KcU4Zw5V2CsZgMkNwtKHKr14",
  "key12": "zN8jTKh2dMM9ThBujYMEZTtxUKDK8eprX5FP8jcADJJR3d9vfY4pdAgxWs3pA3QmZJSg82yAkqzRSEMM3XZ7SfC",
  "key13": "9s4wFauB672ounHRDt5ZakqyB4yp5DpCXLdDPij1ofSCbZQ6jDe6FPRtCAXrYcKtgzibcnBgnXrr2mXLV6gBhRU",
  "key14": "hF7jVeTWNYiqgKSx3jdoAfxc9zJbgiDkCgHVVhHZa2dHv5b69VzaGCzJFNxbuHMJLEBtdUZYtvYQsrYAUUbKH9c",
  "key15": "2GsFk5tpeiBbn7ukHrHjNSvXcpgrAQqswuwG5v3Pc1DhZH9oNB5CHSVz1tQQ9cadR2SqQZjHR6RmxSEAgDdU7g28",
  "key16": "129p7VT6PxppQMrTt6PLDdmWGGryWuBbixDkbJpbrvPdxsydz7risU1xn9yyYrJ9PTa1sbZAQQwLRmXuwAsJg2mo",
  "key17": "5UzDBjRDgGbvgF4ihDkaysR67GTDFrCf8CXjPxU2kwnxvLGCP1vU3McPHmF3RtKwah5FkGwSE9iJSpwTmvGEhKiM",
  "key18": "34EMTq4Jj7AYhCEShzLnHytBm8hn64Qe5j1cDXvN6g9HWafGXaNVhNAoviUuiTpSmLS77XyNFpzLmvGWgBvg3Bz3",
  "key19": "5mnuVmDQzVNc2A1jM8hkBhnKaTRnVYcKatxhtdizJnGApKyPs95UwuYRZn5udyRMnHAp2q4SjKiVq1rD4GndBECC",
  "key20": "2RngeH14JQ6xc4JUdF3bQizVbdEXtLzNWNzuvCNssi9fxrsEpzr2cDnNrcFTuakMToZ2JaM84CJga1FEe9iyrWUE",
  "key21": "4eTswcJnKW1iwNKvc9HWBeS9teaidguBWzwkQ33jrAEbgnjuuqLSVTbZVLmKdy7shSoSPp2TgdiMeAPxU4p5cUBh",
  "key22": "5ZmqJMRPcezFqMGVWdm76eVrgsDVfxzkxeQVCc6aPLDFRH3zKwqo8hhgfGDdRsZXWw1JNGrnvBHztEhWW3UCraVT",
  "key23": "3r3CEvCMx4wyiXCTzmyvRPbGZJ2V69Nf6ei8abSWJrfJyPTrEFiVgaPQ6XPtVpyJ5mS5m8wq45A6HWvwZ6RD1wwH",
  "key24": "371Rn5qQwu1NE4ZULkXR7EeoYqY1Y9TZa1ZmDXHVPeTXwxjzfzte2x4X1zT9fDbd6YJVRzQyUNWBtxzrEAwmakGn",
  "key25": "2pkH2DkfoQzj4yHFH1hXZM2UM6vakUzWiZBY2YDSQPxKnCdaCZ1kxrBSsog5VEAgmdPbr29GBJeR9L72cWJACXGF",
  "key26": "2uGzKithnbymYaH1yfKxnEUVYDUecpxb2jrdj2WgBUrExu8aB7sRndZJHJ44vjWqsJvzi8HhhgePLjExucWhtVnS",
  "key27": "HZnQicbpcQtGZ2DCmWgd8R2hY8KZTJTMDozRxdDLcyE4srUjecr58k9DVJLzK95UpVgBstnoc9Bf9qcqbEabw9c",
  "key28": "5Vwxfc1hc5vaRPSzfgvtCddXsz9S8nAwARjiHGDSJffTfXoEq2i21YB6zu9kLVqfdyynwr49FMd16qUuAfNrq596",
  "key29": "2KNKJVzgdNQ2G1XWwpGxZwqMbh93W8S6uTzHikfLEeMR9B2eQPZN7MtTRzVz14m6tL9xfQmDxgqYT5XtoG5W8pb3",
  "key30": "3reqkYDJP4yNumMAPvyFxhB9WK7ZBqAbBCcgbsX6wDxgSwPaJEBYa9AV8JdeD7mcsAj699CzmEe69DL2qKY18S2X",
  "key31": "3i7Xb39CRjKwDCmVVyD1jXH1TeWvWU1fQy8P4sxSHYxUmXAxziDApkKWLhQmqjkRMcB7dYLowEcaYJ4f9fYuJaZ8",
  "key32": "26B9fUWaV7r7zu7eLT57mQVJ4s4S9MQKEodixyFD5v1VJWSiib6uQM5XsgoyMZTb6wjhVjQrYTkLD44KG13cnqYp",
  "key33": "QmtbAR8NhLvRzqaMNpKFaCfrg7N1vo9BbAJCwRqj1saLFGr6z7HxYWtjkVTyYD1yeS2HQi7NJ5T1YxEpaVVfZKx",
  "key34": "4DYJswcWqBzkPokgPaZuAZUkrJFZxj3iV118pTRjUhueQPghfqGZahEgsPidd9NnakrdRFXtbzhrcvkPBad1f13g",
  "key35": "4QGkpPRPcyg4NaZRyfznh25eNQpchi1zd2kYPELpWwGfHEzrY4HAHfqfbRLUswkE6vsYZeQxkuQm9GJs7he3h4Rw",
  "key36": "4Ta83dE6vnQ1FbTZKyai8r5GAebkKnP9HG4EdgygETLnTTgj88k3dg3NurYSQDhSwR4ms2fdd3c1CUVAWFhhuy9m",
  "key37": "4sxovW7y8YTah9YmidP9TwHA7zT5cuwAzhFzoo5aKvma6YN5sJktmWgZe2MtWitP2nsPDgb4nLPMAYhBMUwVZo2S",
  "key38": "4UoifaYxH7SNSbsKZGUMXvsN7j8YmhBPpipmaxdQvrqwFQQ1MKuTuTFfQofaN61F47bXPN7G25uQkLvFmAadgZpj",
  "key39": "4cZbRKJx33b28W2d8yMHrANNfw1fXZiFRYF9rirTL7ad1jQymtpuzPYUh7cPNBR43GRyWVZdMpQtUE2zBjtNudZK",
  "key40": "NDwN8gWMMpYUnXieuBWSmu9iEstjVboEQ8rAeSXYgZwZBTeGsqTSQUzSrLmiyMtAThYNHqAjDU9mjy8x1yPq5ac",
  "key41": "3yM2mSSn7hL77reB48yZo5gaPLVzY1nVaDPRrXnQwpptPCR2o3kcbBo1grjVWtt9cwq3KFNcAoN4fYmbwGfEuoih",
  "key42": "2FCV9khbF55bDKYZTy8riPMNZg3XxzevkYDPwaxG7RecQcLqp8MHpiyXzSuoJSsMtKkc2FN5v3FwftRsS8jFV3gB",
  "key43": "281CtwsvKuQN17UDpPjXxNAQh5QFXRswjCV1hTvLkHtxuBehGss3PJz9K4K32L2KUA4ZZaAtkgh7h7TvknfYjuzZ",
  "key44": "5MV147Zmh5DvuhoT2S9PRAnuhaXiFkadaBLAda6sLKQjzseWU6ZNQr5sYswyPwJRb9fqPbYMbFe2kmHAF1g6wjbd",
  "key45": "21i3Cs8BnfYKXGMXfkExy9kxWAwDsgHNTihvHxrhhBmHTR8ZZCgJ8WtMxCiTAtcwCP6GPE3uGcLy1jURB4EZHqEn",
  "key46": "jeyBthg7cXfG3PyZmLQmrvZQ1MpsJRQssyWES5BbehksoxiQVFmHzfvew1dWMHYfY7DmL2BBt5t2MevT6Rn2o79",
  "key47": "msKMD3zv2r1RStwVrxd7DyEFpZHBmyYEGjZfT6sJi5JxYd7RCTUvbGywrWVAQaL7L6w7qrUSTEWroSmbWUMgBjR",
  "key48": "2Lt1dbCSbhJkc42WT2JWoaiS4kqiuiFqPg3RGTGgRhQ9w5ZXLHQbcu8Mt2AC1Xt4M4V4DLA6jxgbzARfWKnt97ka"
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
