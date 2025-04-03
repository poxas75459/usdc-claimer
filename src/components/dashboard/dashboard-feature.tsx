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
    "31RSq8StX2EFJW3vD1S6PGC9gSV9AN4yUrCi8U1Vhj2igBcd1dB665ACKosyiUAgUNLDH1vJkX49i3V2YbhZ7yGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTc6NotaUUjcrNmTJXcSqnBKLkw4hB1YHmi65A6VZVVJ7QSWdfnxeYBWgC3YSynmvanqC53RjPLvx8dWvimaHZH",
  "key1": "5mmAmwFL7bzvqTnrukq4ZWdySJqVDjZ5ek4biXT2UYjsAQCaTmMjxMn7qfnyYVhb37zRbDp6msAHhhNRDhqLVB3X",
  "key2": "2fxn3DbRxsrMrNvVECLx5mTa8UCNEi9udDNsGKePxRkhomPrydTeqydSieFHFzeqnU7r51r7myrQuMAJvKUTz1DC",
  "key3": "5XVxvc4CZFSbEU77G6ra5gdshSrVN4RVA1Az24auJ6VctUanTjUMTXviP75icjAZ8UQM8j858CEtBEXE2FgToALr",
  "key4": "2gpBYF4cehBjEyXXkAsaLQLWxWNJHrDdo9wNipipBcAZjwso36cCyjEjH8QsR8ccRm5nj3JPJiiUK7acBYKPFqsw",
  "key5": "4Q2qvQis2wj315wd8AxRhyagMXH6cDATYmF9XrsHpwJs4fhqHk4VRZqPosxG2VVC5ryRC9U9e9jpDvagBbtimfY",
  "key6": "4SZznUPu54vmoWbdyxNTo3PvTwX31ceqUQNXScsDRSPThWBwZUxtaJWZri3WqydtUdaU15JQWRtLvmsaDcgHPs6p",
  "key7": "3wbMouHpq7MZGgic5FvJQSR5E9Jck2F1YwE7WpMFHjJy2GdbTmxmrfj4AeTwNY2oCctF4yV6kABKQErEgHeiTMqX",
  "key8": "5ThrKu6EQWYJp21sc7BaCqGLWd7Y5BzTquaAvmjDK32ysAnvE3AsEFACxVQXoZt5XrZgRH4Gxh1R3WXrBx64WFoT",
  "key9": "aRDJutih8CpJqRTKWvPi4H4gMpe1yBcVq4J5wBHtoCbPUtxs4wLunSJrtMhvK7fKD9y2RpNgcKC8s85YkSEQtyu",
  "key10": "2WDnBxW9KsL2Jy5tSp8Y8qeR4W6qCNiXVLaw3kNRQSHbsWPZoHuSeamUNT7NVnZj8gTKkn8PTcNbJiVd1mgibibo",
  "key11": "5mW7hD8oNoUNGTacjGgcfiy71VT472z5uhNmuiAXCKBn2pAykD2Y9djP3EAZscngi9XS3Uvob7oHNrvHsLk7kVmE",
  "key12": "ZRdivojfTcvBWzyexqZG7P5RUCa47WtAKCkiWGdX3CKabn2HSobirjGvkz2zN7ZrYE1DcWREXcJigjPcAfKsEjX",
  "key13": "2c35w5L6LX9fyUQLdWvpKVa5NtYjkmRAfRctybZS6WKdZR3Mc7GV3kh1ZNkrZap5hgG26Nw9DRJLjtUz1mhNJHod",
  "key14": "4B6whrN6D8exuPBJK4FKWD9x2ZjJYYViyzUrf8o58odA9amgPT7FaDuGN5FJ2mGF9HVLTLhCpWs5tkuMBSxCCxGa",
  "key15": "5dS9qo1B8rEXPMiPR6m1AurZTYu8CrNXHconJ6PxJRMqHmNWgkr77FSEgqJnoLbBqVMo1dqUaPyJbkdYHQmwGQzV",
  "key16": "5wps7t3URwhLQGybEaWYKJ5BcNNWjmMBjt8YscaTx8b8Bsxqpef1g73gAcS2wxd4ayXq6rKTKV93cJELKmLPUQVj",
  "key17": "53Hx5cG8dCVXYePVru8udKT4aS4zAT2h6ytTGTJS4rAKvWPZG6uATbFwBtbeuJgXzsPxEZtkWhXCGCGEw3rWhCw4",
  "key18": "4EFR8cBxQyw46mHeXJyKnJD2BJKqusuMEfWfPLsdkGwWVbCsARRJUSw7MF3D8Y96XC5jPBQdw2EcYdPMFx1k8EtA",
  "key19": "aS6pf2RbjT5vtgYDtYxPhjjheXzRQrVaD1sPgxAiCa593kjkrWu2S1w53wJUcZeqq8nzR9ArgdbX4MtL5dAmk4m",
  "key20": "3wTKjUF5bMXfu64QJy7GyJdpsvV9An6xXY8HJ2bGUPAwsY5yPBHXrmnYxn2WXNgMRhNNNMkoheY8vQgwrTskCztE",
  "key21": "5ZovNxXWNe5dWCGfrY2ce9EQ5pmtyTNibcEr3k5ggfTkTXz3117mjvAJE9C9o7eisUpdBx1CCGkUH3LqNBEufq4P",
  "key22": "25sZMsiRod2WE23QF7SRJgdksP1mXZGZ4MNSD842w7tRrd14eyNKHpC251e21v5rvJS587gcp7PtCv75bB2hgUPk",
  "key23": "2XdhfNPz34bWr7eNTL6qjYvoDq8CQARckqXtcYNkwcaW1Htqh8BTGmG77nuECJgjH619n37q9MY5DidWEN3gvmsq",
  "key24": "5J95nb49N3LjKZhwSTKqgVs4FkW9jkFMn3XEh9kzzFyGr12gZ4UTmULgo5hr4uk2SsQBtX1pJaoHsKPWTTb2kY6Q",
  "key25": "5LoJzgBhN38H81tK8oELEmvLqv4AxojpFYMtr1nS5dA9fUX2sN33uG5peXrmkqoiQZg9XiVaDjAEkj4kEEzzemZH",
  "key26": "2mV2BHbHJVhuEHPtwrbGHYrEfhgqyWPxwUdbsZsyU5eEzKKfvJdQMr9DT36Jpr3j2WJQdBaPEGP3gwdq7VVwAniw",
  "key27": "4ha9uJZ6cM19RSRcB96KRttGLCUBKeFqBv67R5iMUf5uGA6c2XhTpihxhseygnt3BPJ3u8aJmZ8gvSYiYXu8GDBQ",
  "key28": "3rR2JBzNbP5XjYhDxf1s8dDw4aRhAaCssRk8s6XFu7hUSFPDpSnVz7FgtX2KeCgttDFKiPxw3Enuhqw9d4cXFU1P",
  "key29": "3bcNtLuCpussWxo6b3Lpys3ZTSPgfCSdM7LPhd4GLx4iN51WfUv73KDhuy3RimWyA14b1yzssG4qdA7Hr7NJkvLH",
  "key30": "DS8ayX4ioPUQy4WFym6wFb9zUQ6PggD4FbAvuTxY2k3iziuV8ji79CEdAWeeQhnUKhpKuuhjK8ssXpyFBzVfTX2",
  "key31": "aq3z3iCvFMQ1UST3JJAjP7dBWcsrgQiKDeJpKt962eXL8pPXzCj9yP59bPcbzdPwzVedSJL1vTpTvjN64SGEV6x",
  "key32": "fgZpePK6ZnSd6LTXS8Eve9H9pjrRS5T3sdJWXrfp27eCK3th7R7HpjkhTUHJZ9oCVVhRQUy4AriG2Pr3z7yf7Xq",
  "key33": "3teXkF6UEWpBGzKnp5ELtRLcxGFnmsGxgpDdRob5i3PyCwxYJ6Y86wJXDMHXg62bti54CUnMb8oNcMKCW7JFARSK",
  "key34": "2RaVe6NaFKCat7zqse6RJRFyzEaUmhbyFbXpTx8cuHmcKcxKFMMH9xiNcwVDNAKohxqxcqqbhbrY5BZmN5Yj4zWa",
  "key35": "5wGzjmRuTtqkP8cDYap16bugVCu1hZHcaQ5ZAx3sZFFHkgZMM6FK5d3732SyEmy1Y5L3ZeF1Sbbs4ffWnRqsd9kn",
  "key36": "3HLgNQgfeVc3TBhdPG81GPzxTrEnnjaJiUJrrH67Z4ribkHC5ZcDLEyzgkrnMpLT1Eip6bfEpqhbLtfGBFL161gg",
  "key37": "4T26QkdEAHfP585MeaE4K3y1NJWQM7VAfG3T8aLKtuNDCBaKzX57PiiTbP1j3Jn9EmCJDg8J8ZNh6D2xtypxHy7W",
  "key38": "3xw1jMV3e3kUtSunEafsdFzwPkW3wgxNXTRByiEbp1TZNZBpkEHYFN7st3uDNC7nxFgBJypTjypKGBUqdZgAcyhp",
  "key39": "4guhYHMcKsZDg6bRU9c3MR2eh5MjcKkMpTfz2YcwQFAAUqy7mD3DsskGFSeqNEro8M8nSW54e2qcKnmTq2sqJXHZ",
  "key40": "2crDrcmnvzJoDJEg78ZGh8SnpNNQaagmD3LhbCaAfQTcReq7XDU8BY8Gyy4GmoZu2ybrwDtBeN3pDhB9iz4J9CsE",
  "key41": "2bBzvvmMV1D91nTtGfn8knDNUyvq79mVE2RQduxaPKcTnVbbh93YFVZApEKNWvwGWHRu7xFPQSc13u2wCCqHKpJV",
  "key42": "2BQhvDqWJiF6Av3H247XxfJ5AM2Dn6VYrBQSVe9fnpB7dSgiHxnwNNDfY5xHburCo2A7SUr9BqH5DqimVkDG8zce",
  "key43": "4WLAvHxTnxTXDzyW7bkjQ7viEvu54mvnJ3J964sSrBoNMwsQ54RhMHXwCv3dH3g2ehHPNUjKtuyGAtzgyRtJAnLs",
  "key44": "GyFbmuqTvEx26j524Qy1pKE736pnPZ57zXYfaxyCRx69fqLEQ9dfviQFHEaLa6KXtysiLAGgM9QyTweRWAvaGth",
  "key45": "WAMoTCjnKejJESJ4sbYecmyfcJwh6rR5REKWxDnu3oNuR4SoJ3jMCRPdD5e2MncNCH6joaPfKZrJe55vBCjYX2m"
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
