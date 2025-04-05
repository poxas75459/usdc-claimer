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
    "64d2MiqeQL65xr7GEhrTqkweSSVYWgirK5mxNQCiZCKxVDnwesumHhrbXxRu6HtfxVvotgfLU2wVUjyf3oi7wkt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXiKkxefjxohdcVNoRKvF6VUhoANw2n2hcNks89yYY24XCKUzqfNKupeTYzMYECp1N2BwVWXfBxmXKUuT1TJ5En",
  "key1": "5sWKNtMsrKjb641qB1cxrc8ybb1CQaVimehyLb5byoTUA9em8dLm5E8sRrWTguqGoX2Q93rZXPW3gDmg7sERZdN8",
  "key2": "WQXrgbTNyAUdbX6EER9b6oprmdN4yTi8u37XqbKr2rtTByY5SvsPmy3MKdudQsW8D8tA91Uptvm3AiTgGthzeeH",
  "key3": "55SCGEw23hBMkuJpbrUnHrjWx65MajHeDB8BBkewc3Rw5oSV5rRetR3SSgJuL5ThWgTDbGPncrWAuWcbHqaVx726",
  "key4": "3W1VYxFvRBCPue6mBM7jk277LFBGHNJ8qkG5JWE2M8xXdEn5RcfgK1faiMnffC7iiKTxdTnWMucKGckQjJakXPSK",
  "key5": "4jmzRqk7gnKrSVTguqQURDS4zg7Afy7eJfxVkAvw6kwerYJ5E5sU1M4k8LcULe4xTKVtEXJ3UbAYLr3HSytgWWLg",
  "key6": "UT1S3g45JRvWBFTcVvjAZ6dFqWtGpNVwkzDmmK2dUugPRYaS2a7xahE3fqcPoUEz1S5LYvDU7nkip7kqpo66rQK",
  "key7": "3PYjpK8SEQt9hnHqXz4PRbt3adErS26tEAgPre1q9N7TKAnNUKCg6Sn3HHK7fGRBsobcDnm3z1WwMqvnjthdQ7SG",
  "key8": "3F6hYKckLsDffF1nYtn64z2mfsTFfT5Q5LFiLXk24BJijrXBekzniv7bWyeSKJUurnCN7N3srKP75RmcpPrQMHGw",
  "key9": "417jdyy5rDRSpQq42o8Y8jGDuBzSPxWHMtrB5VPpf2qGdXWogUDFRRpNbb23cexj8W4Pw13zQ8jrjfG5kBWnrZb3",
  "key10": "5fiZ2iBAC2CSrWTyNi3Vaypg9tEWUDnuHQUvBTwi3M15NkvUGkFfa1Mkf7bisDcVGrG5MQVfyMgxg8jPiu5vioU8",
  "key11": "V12oEe5nDRMjxu442GKtVSznv6W7vLPnDc7Ew92bMx6CQ5NJRTm9GnTHUzzUPcMWC8yDVhTnYa9ZrxUxjWpYfXf",
  "key12": "2d6sZ5urgFrtGYKWUaKYh6q6RJdfmhF8J9tRpgT6TqBoX6HB8bjnrSbTPwq82aNufQxYwXnSSceqhuM8yDhM8U9k",
  "key13": "s4hckC1us3W7Q6uie7vWmGQJWPPdmYdFWR5BPdMQsz3fW27ykgTZUZwvVFhmbZwjqZ9abPeSXgEDTiwhLeWeKvD",
  "key14": "4Qzmwuq7u5NHXXej1Z5vPfW6pAKt4nTJtaKtTJgGgMyVT3XVUnSPG5bR62RQvTFQnb6TidZnmrWBJYDjR72xEkEZ",
  "key15": "4CY9TWQzQHv4kPz9G4ygKqn563MTW3QYTDy94vqbTX29Vj8A4n6cvDGsVN759JwYo3A1NT13eyYvbGB9vNAzSofa",
  "key16": "58Fv32CUaNhz9jQupPQacn9teegA5w4Ah5Tq1eznkSPbCicKu4vWgwFwR2xyhuzFkFz8VPi9Sq3Ms9xyjpemBR9H",
  "key17": "3zQaxD1x3YdEYzpdRk1U7jUYAaSSaW5bt6yyH3yXnQvFRvTm4UP7jNrCFUw23Nb2kijPZM5xqxadiuEM1EiPgjtB",
  "key18": "3SVE7gajTZ1o4VYc4hjFduozpQCPBdZiq5pueaNfkTX28eZCDEAZx6SjjGSnvHLC6Lxy4n9tExZX8Vc3BXb7iv4e",
  "key19": "2dNNP2gsjZTUpHHwQBw6VwZW2mZk8drVfHtwmYGtsbdDiFFB5bLatFpLtDB7k8XmaVZYBEy433Hm31F1H1KWooVL",
  "key20": "3uLqVWTV1H4CmtTL22YGNPnXH6zMRiTFeGSziGGAenMXfpL4BKtCkss7LoT9cH9JA4XnMdSt2Xizs96utWkEhot7",
  "key21": "3EfdjfkqSJYwHw4mBNy6eSFwa3fR3ZMiE2L1BPYszx5ijwniD461xbR3qGinJ1sj2JH7nV5DecTgyzBbijSu8GCm",
  "key22": "3MCA3TeWjNadMZv2UQpLHnbUwSyvdW4LQ3xvhD9rs1UhvToQtt5wfqcoa55qKtJwU8s4S2CRPK97pr29azhNYi6N",
  "key23": "4L3bCfYkL9iU5EHbz5ZmdEfDPV14PMSr4QhEBV3NLYbkPRfdjM76bjfE7jRgevtUVQawZgfyp2R5QqJvzAJA8Cwj",
  "key24": "25Yeh7tYNoDERGzNTkwXZaSRrisqeZwq4YtRjr8TSdBDWDwb8qaKfJRLhfvMgH7J1tiMU8foRpVubx2LsJShhsj3",
  "key25": "3ckcCHQrJxFjjGZX22a4eCJQT6Eu3GNyY61seqTkAxCNW9jKW1V3ry3T1iCMkt7dy6pd1gmfJZrZfti46cVRUtrU",
  "key26": "3dieVi3zddwbHrcBDV3HxQF5ZxDH7GWzpYADh9qotCR5yjH4WkdQTBhWyDvTkyowpDdomaTiheCrrddvaRypEXyZ",
  "key27": "2ZsnGKvT6aGgd5qPc4bALV28gLSQQKxcvzSCaupvxFW8BvBSaVG4srXwGoXqYvT24W3BVbxWPWpDWLpbQfcRah9M",
  "key28": "2H9Ef74S8YEicwC17Q9NEXfLDzADFuBc9qZUuDKHhhBGkCVju6d5XUfCHX7nHjTewjG2QAX3FXwVQzfo17aBLQ8g",
  "key29": "2NZgrnc1s5nX5KHUEMHR64TWsyKfwSRbnGW6VdKANxTZAo5iwhrUk8hpbXthMkYRX9wq3UeZdcSs2TEYWJPKkx2u",
  "key30": "5EuCYWzUwzMQpbjqskKVoeD24o46vuBbhdUK4XGWH6jei6DwC7gQhnTDinv7vmVsWjcYAZ7Hv3uqTUdgYR5VV3PW",
  "key31": "uaPVMExE78DNUZtca3Z5mxBCE2rsFxw2XuHSvqHkBwpgLEitWNRhLAcxHEWuMUho4Wkuv2Tv8RvBqiHYFNQE8vR",
  "key32": "5Xkx6kG2Ckddd5GvNYRtV1B4PnrrdA13EimmUjaEPrcwGh2zMSaBLEEunZWDkEMdmeAjCdkMjsm6oKScau6Hx1Up",
  "key33": "3FJKR2rnXu5vUdnAAZSZnCBWsKkU2PTG9TiuYPMbyxAWWrWrdKAmvhrj2UFT7nK62kydybwKytJa4EK2wiZ4xfFw",
  "key34": "NsnH32P2ZcRyPyUvSHarszhKwQ9eQkgcseX5wuhfJ8fbzHJzKGw7ZtN3FmGzW96Zg4Cc1YwgoW4aD9cKrRVygUn",
  "key35": "4c7wdp3HcL9EoWmKqi7dEU2q3npjeA5oaTe43L3B9iNEaj653ZfY4CxXLbTe6QCX8TR3bJ6vBZFYaLsAYNLWXN1",
  "key36": "4K3eiE53xBRwzNVTAQuhh4xufeVi8C54NtVwad47b4poNiXY6XAZFvychcbA1Lf97F1crtUHguwLVPj6QBy3qm53",
  "key37": "36PWxREboBJb1JgYTZH9XATiXMHqRqnwbgGN6wvhigr7zK8PjY7HJ1FPUco5vBkxSz9bAz3FUh3RkWX32LQc7TGC",
  "key38": "4byiYCGoha8DFbQLcn6fhzMX94gWTCS4gmVcNoFTHPEPGnKrFFNbzLC3yScxrS4kqJvojre8V8rFoHj2QLYA5Rwt",
  "key39": "2gcvMfYf4BMRF1uk2BvHPNJNZuhM3JRELAAvv4ZJUAdshbQqfA1EJiRRyZvYCxTmmFx7C1HF9y61NCMYqV58mWgY",
  "key40": "54EBxPrpWqfHX8bAo9pBef8xbvztFezXFdaeuZaQmKVtbDjC4N4m4HzFJo8eJfans11w1797BZHvCMPRfUP5mx34",
  "key41": "c1ZFbaDAsr9PTjwm8BWPKYgreFP6ByHJkHx6zo86AviiLXgxWJNkXVefLuvzMdUeMFu5KcrovBdM9uHmfVtV7b8",
  "key42": "2SgJZpF1opnwEzkxjPUScLDbMauVbjHA9vkcpepw1JPbSKQdgaezo4vfa6ZDBgNAX1h4YVtmnN73mhgZ4zKSueKt"
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
