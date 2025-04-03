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
    "3JuRTXyzsMEUJqDzq5cAD5E9DeGqT5VXEEwzZ4QXDC6VZQnvLHSp6m1YAxL6RHLWYwKLvTRXUGDk1ATABWprbbyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuum8aQsZXrMwmZXu4kCpRZLUtvbW9uT7eNiii9ych1t5E8rEyav6mgnvihxBRjfcD5hAimGQiQTpXprSDbycGP",
  "key1": "44U6WqPDS8VDJsrsjihzCe7kKgUB6uWts2vNMvJX4GdpFCr2n8n77RvCKhcMM8Fq23UEvYnNs3hY1nyuoZPwXWZn",
  "key2": "BMaNhaTPfh94KvC5LmMWBYg1bCsdEb6krcPueY7uayA85ZifNUbrk9mueyneXChihCZsA9Phu99UAJHKSoBKqLn",
  "key3": "gsKVYWsEFm2Dfm18xVB3dLoKBUSg4Yk8E8esFMGWNnZy1uvz38L3Gcptmr97oBKFqi7DkVoQrYBz5uuow4sDKwE",
  "key4": "4DavqtVTJZpbEDzcJmvcAQZATSyrCJ9ntTLjXnggWfDdfE6qNn8YefizDHT1TaHdru3uuhhBTsWjGwbSjNZ94FP9",
  "key5": "5esfyigQMYmfMBPp5rw9ppR16A4cE23ek7UR321C41vmp8Z7TAUWJgksx5xf2mzfAkr82bE9riqzxVZg4kF2zuUH",
  "key6": "3RnswwrMTJ9eS3UthGMJKZyBhy63hRqVNSfJX2YPefg85WDHjgWnzvK7BWtFQhTayHabuvUCNpKQToQiNjHhKtPj",
  "key7": "4j6zpBoN1m3svc4JcknVbkMLto6VyKpLVqbSptPtpWa8gjxjwdBKWp5NSekB2kDrXgKEX8xLmXghJkac7ZDkMBr9",
  "key8": "3FqheJZo8akJAxkvqsarXbcGTdjb6WYY9wQh6RP8LdRwgJLE9eBfQHXm1T43Gu3qbQZwnxWjHtmyFmHEJFudmHxS",
  "key9": "55tG7w3SVWLQz8bxhA7upT3CdhJj41Avmjhf8t5PMUnwZiWWabhL79gzJiRoaPAGAymKVpacde6RAvHzsS8jGY1j",
  "key10": "4hTg8SQWpCdkru28Fv2ivn7zzBkTHmfoPwRhNyiH7CvS44NGjnjF19ScvBBsxa2SRJYyviZg63QAL4m1iPSWgMGH",
  "key11": "5G1oFVN818yDMpmamMtau3UpvRHpsMBkKL7SXnFotGNpTZYXPpLGpEHBLaPopaLdhmr9CV5s6xDZ5Q63tHdsRWMK",
  "key12": "5pHEMGa61UwbXSffE1HJ1uEgr1NoqjVhigaCbsfMVWs5TggnuCKstpGDjMwDTtkEC3ia1DaSPFVtaqzVcrTXVoUd",
  "key13": "3AyVNabC7ubWoa6rr81FjyTBqyBf7Q38ZAjdd9qapMj7NzpVpSuYR79y92TfHPLiPwDZzb93tGthJcG5JNLJQa8k",
  "key14": "3fEnLMjH9ccH4p4GUWvSC1SdBBeVaW4X2h6RPmvQ1XrVMPcf1DAYyBJKYUaCnru76D14SZzwWfNVjkDqywy46E7b",
  "key15": "5LTc8nWeSNEQUt77Ae2kHTUe1rNnn5CuWn13qUpAHdFFumRLkQXkWgR5p934qmi5kQSNmqPuaoRhZtYNmTikTwSG",
  "key16": "4Kb2aw9Z6Zh4F416vJtxRQx1NodsnJhkUobK2FpsYSwcHoMHowyUDqWU38hjE3k8mppQAvq4xzD93Fbg4VkTvBkd",
  "key17": "4arEjttsBXk8rgFLmEbZS5dNHFMMoF4umnGuyEuBamJfLgv6WhrbJZPLXm7yCrpyArRe8b3cPwH1vkFKeHwyivoa",
  "key18": "4QNrgNLxyCqwCWnHgJY5PTJiHdEUR6XLUU8NJ3oEvLJ33p5EyZQqaVJZ2fM4rbbw2xdUYiZT1WnKZVHuAJmi763d",
  "key19": "m2GauydeNtNYjMSDjcUUNuc7DVNjaz7b9SkPPrzqh7CNDLqndEDQda2NRd7i3c4UKfXRXbnsfoJdruu1rWfvb1E",
  "key20": "3BnHPh4r7QvHrMGhg3Nwv75EXa8YSiPSHhh54RkhUZaZ19vBa4dGVmpgDuJNnNkay3e38uHprdsxLEVeG4HJf6Ju",
  "key21": "hhkE3GtLQZzgJixDCnrpLFkQ8QtFkQqrs7pxhy7PeJocpAFEgkwG8KrbtxrtijzYT6n1RakJK8J9WuMD2W79QJt",
  "key22": "41oWf6E1xWkuyGGr4BtEoNBYPjtuvnFxZnFALa2xrbVhZvkc48Ac1ASaLDEyHDtRqdEz4ToQgsuDcsfHoskrfJrc",
  "key23": "2NfHxJiar4MXQbL72xPHvvxYgiPodSxDkMa2nHE4PQC8q1LxjHKRGB6wfm1tHNnESN9Xv5aAgCZQqaz7aMsppZNd",
  "key24": "kSPFfFyyvC77JNEDmJvBK8iJsmgKzRw4g1vGWbYGpDLB8eHHxxnGXz9QoeuipvnYRpKxf3hQYDGWNcpkrCLRd8a",
  "key25": "2XgSxodoHJxeyfRCGzFc8eKpC69jDpjm8fJrUEiA97xAVNFiXvi3ZarEcR9BWzy769aGvgYxRqjpMDcbEvoHkiVb",
  "key26": "3U1QokLZHYLnxBdj1eNrQivirf3GpqhFjBVDRtwf3VoAwZvy54Cfpwcb7PJznFhm8fPRXutvpmFfPrD6ijFzSUk2",
  "key27": "5sFbsbKgg6x9orngPN2FL2ZrrGm6E34VaqBxDAmXiwrzJumYibJc5r1d7Qhq4z9q9TPQffpaxPd2uj6G56dLKp5z",
  "key28": "5wLefEeqTzXEdQhs5W5mbjG2WwYuVqjUZJiJ2PDrVZT4C1kZMQL8ABD8tffZVoTGYZmA6A4Anb9PVYtYYrAGmg8y",
  "key29": "ovRynstBqu8oqfswfRZNuvJiHWiut8EcL1tu7v1EMveb4oLjMR94AHsLrd38htw3JWFAbZFQJskqDm9ycck1HBk",
  "key30": "4NnhoLiAe8fGoms2yXMGbt2i1naxjmVbrHwBhamRrmWUnRzCmh3CLWcBMsA2pxFGyngdkbz7aDjbnHAde3jB8EJN",
  "key31": "xe9CHrgEN6Wa2m77UACURTGGfi8TdHa7y3rpuacTz5uMh6fLdWG6eWSdXy4KbxLEexzAZ5qS5KSLuXS6a7LLRZm",
  "key32": "3Tz5FzaB2LPPCsMk7e3QvD8NkPPayNBTZ6d9UyUjQfUnzSAQ1T6Tg2akJF5B8xnffk2MUg8mCuD599dfvHPnJ9JY",
  "key33": "31Ds1UMSmxDLdeSNmfiA6Gy15k12VzGXJbBsihUJvYmWu7yPvPMy4bXLyGJ8nYoXamanzUFLQfoFFM6r1MYPYbgg",
  "key34": "JZcf9SP6T9fYH4km5eTL2eikxTTnyCmXHa86RGjeD64TYBqGYGPnzptCBRZETvCFDzjRic34HQjqR9xX5SENqSN",
  "key35": "5STinuXLrJoZ6CZsCz3T8HNunijoJ2fSmZTyzppA5r3d21yyN1P7r8VVgj95SAXnhnZYYcUfN5weYNLhShQFSwJD",
  "key36": "5npGG1fzV11Hn7kX6poujB9CFSPeCrUqv5jPYzi79XKmRQanJB72YbMQhXRzQ7RRnY3JT3FNGVTgJ6X8xfxVEE9i",
  "key37": "hFhDJdNMdQ1BFfDoFSzzNVWSMWNzGE9XAbtNCWKySpTgf7xLNSEpd6MfCxSRLXX9UvSVfo778S7dp2CsVaGqeNH",
  "key38": "5sf55AebgwtoMLNdYKcm7RkY5jVb7MkjaK6aoLVzKJRZ58ipmPC3p9g9GkwNcH63ovhCQXJoKFehWduw5c6Pfu8v",
  "key39": "2wUPWoqzhy4gskvcVGi86GrQds5vEqEukFuDfjX9VUVyo3AP9V6edzDo6d3n5vA3WNVQiJLZmPGdwjrmkxGv5Qs8",
  "key40": "oTMf5S47zYcut4VN3DKbQCotcfx5cGWdHgWMWu4px563VdVJatDKQorAGGczYwjyrzLAsLVeFseF99jJTRR21fV",
  "key41": "4tzHy4oYV81Aa6QjczeCRSF4NGU6QPuZ3KeEx9WC8hbxauEWpsxE1YHgHe4V9gkyJPrWMUDbYYFBZHwK4ewsAazE",
  "key42": "3Ngx9pqVYWfWa6sZth3LH4EoGnUXvWF7BBBtNnJvjPzMAhrGzSc82qLWXbEo1XWqArHwuYLQaTXNnFLiKZ5mTapC",
  "key43": "22cRggFB9VdrNQLX8TkoSGSHoHCqQUF6x4SHFkHn53duo1xQ8pQquVanqmemYfMDTQ2sHQEMi1u7NLqyCxmSL84r",
  "key44": "2LPpkee3YqWpTq21WTRBkS6dLqNQRKqDmRGkEkBf967GSShkNGp1bxpkYAgkFXLyYiwJuLf7XWQpXF1Z8mWanj4z",
  "key45": "5k5VL3FbuxAiFQD5RZ5zvLhHfZX9cGd53fDkRWUk7GHBYPHeDcZeTtzQ2ztrpkDfkGN9Qb2o7T1wTWWHmRg7j3LQ",
  "key46": "3yRSNihVxSMQFEfHwEScxoab3Gyo1HEHC6uptPpvu9kDHuM3GCaahSGEjV1dkZWVsGQmAv7pUZUWdp96okKAXUKQ"
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
