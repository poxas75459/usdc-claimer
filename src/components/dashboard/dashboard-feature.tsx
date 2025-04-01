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
    "Yuhv1B9oKbtk4E1pQsTQuDD7UDjDc3iPVYvFvp8tv58amo64WxZPjwDuhyjBsGiXZ1rRY449EjBDcRvWsUCz7hM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EiSeGPNkgueZzrNtDbdJfzEKimLSki8SHAnowjdwAVFYttUkErnfzVu52RZF27bspm3GDjjHo5afgrsFBe4nQLN",
  "key1": "3UURsoYFFwsMR6wfhfc3eVZkKdrr2JTzABcc5TiMjwZuqZpMZcA2pE5YR3QvQds6fVn3EkEAGCrVKQG34RQ7SqYu",
  "key2": "7hrxzv6KaGP7oCgNPcK2RMAAXHrfPbeiwqBh2sbuj4N2f9Y6UiyqnprNRip2CzUuNURp3vN3qvqnq58Nvf9dLdA",
  "key3": "5sf2iFzq466FrR48znzon4DdL5SizJhhaCfJPVYe7Ga7hwii6x5E5opNGfijVAhhvGi1EL7b7sg6L6tTUDnU3eBL",
  "key4": "2dmkEjgsZLbC2jdzRUGxrbzsxWfoXd9HRN5Qcb3rGfACPee7toGK1ZhHVA7tbm2g1jmevhY7mKcf2K35DWZAfJwn",
  "key5": "22E1KzQf1FioDPqPChTD5y8pz63HmMGa7qm62HuF9dBwY7B1HrpDgnXqwfoKynepjtz1BvjUuNixctaozDN93sN8",
  "key6": "2MwXrBMuzKqjMu7gRHFSE3E6a8E2ob2cdmZiEMY1JyMeA6C9GURUKN2TQhZq1CtBTKkAc9YuJhF8UfukVQB1Xb6g",
  "key7": "2EdjWssDore8ixpXvF2DA39eyjzTAehesCYzfXX44PZS2a29Kv7LhWg6sjFDc2Hwpj3PyqVjDRaYKXL1Pr2jrjaB",
  "key8": "2LEADZHzf1bDYNCJffGbUa7qD1DmDKuE2owHFFQ5ryPDCFdJq86zwykMA6o8iUVy1RzMs3SVeHjwLCAsnZKVMaya",
  "key9": "2WAzk9HPW7u9h38Cpuya15og4J8AdZNndiqiQsVNqoJKM1a7Z7BQQ1vMhZ36TsXEy6Lg1xuX6ArFwZwESuzuBEUd",
  "key10": "5DBGaoTaEL8JEk1yqZ9zAZL8zkGAvN4WNmTpae4cuRPiofvpCzQCTxAnAAzoHfWVuVttskYjWgt7wnvyMbPaAjfn",
  "key11": "qbLDGsCn6TDMd8EN6ML2AzDGT2jL6q3orSbRUuQq34wQmLFXm1QG4N1ySiLDHVDGRudn2QUUYuUsXfQv3qmvdYo",
  "key12": "4kZ6ExKci3iqKCgy55QFif7skQHxNWFRtNSvC8sc1YjtSLKkNBpcAoPvoG8zCNw5DhN55eWeEsPwau15RYRwgc1i",
  "key13": "RU79SjizU51XtWqzPMkHyizpNsHQvQVZoeWqCdwN9gokEhevG5zMKuHNXua43zTEGB2sH4GzmMZ647W5NLp479S",
  "key14": "UWUSQZL4NyqLjdgSNc1pEkpFggcKb5Rf8WiDLdni47zSGgG62obxhnE1bP3Kxam8qYmaaz5ecNNCuZBeJtfAeKY",
  "key15": "4Kur7TJEip9XJfLN58CoKNnbussx4YJVFXAAEGtaWfZSmd88Eb7oy8uTj4W7S1znGXYJpBaQ4ZwDPZj92xHJ8jq1",
  "key16": "2KMa7bQikuH64WGsCFC4qK5FWsuRyiSX6fodkvmvoM3RDWGpemwdEDggKD2iVCQgkGUJAJmW62cupJKeJ8A3DJ47",
  "key17": "2Dyh6eXE9fPaGC2i5iohta5vf5k4mWUGU9M1pGPy3RwnCyiwLBhs9K2XjjXRqRbZKYJGdRYukbgokeEnvqGkNjAE",
  "key18": "2bHo74D8FgKrRLjHY8d4yCgwP7P65N7ybQZzwPyciie7gySdG7KPTKUwh5gscMAYZLYjBvRf7PTKZ2Q1Uh5vqDJA",
  "key19": "2ohM7wBnvqWmxsFjqUg3ipwA9tQ9uHzf1jxf3GmXgEgf6dtbGELkZD4br4UaLmBvAqjmukawEiP6LuNdVHHRw92f",
  "key20": "5AHLFfccseALfRw5cvd62SAqKQmmscH79T6ksE2C9SgVstZb9Rn7F4aSEijwVn4oCxhUYASS59mjxR5WJuQaHarE",
  "key21": "44MXpytag6BkXWUv2mxSz4HvyHDnxNbN3csnUnrnSc2rnCi2bJwHgKA73wwgQHXsfxb5C8kKAqmiJgoKnLmNcyCv",
  "key22": "55jUcU4Wa8P9f94sfbhhoDUQBJgLPCWgqrLnghVxfZayGpWBfZtciix7ixERnU7YL9Xqxzu8gTF7Lj2FxWT4X8eU",
  "key23": "5EnDv8aBxLQ7JKXgCGkrPQd2qtt259NRE7UegSRTvVGQ4xJphUgvg8qPp65okpYFZhrKCDiRcMxRvrD7jVVZJRgd",
  "key24": "5ffrWbZ9CbB1Pc4unwHBMKY2z8AgrvCT91xj798TL3ALjptN3v6X1H6xotoSu1PB7s6bj9yG4ghPVYFZJR2NNxwa",
  "key25": "3Kwtt6XvUf1B3AgMxkLypNqf5KcvZzJAqLDYMaL3k7htXKpLfXQWjgA5d9pQU42jtkvTgDP4nPofj7frjrjyBDer",
  "key26": "57gd7UUvi6quVY1t5uqDb5CBnXpY21V5hbk5Xi94KaczMMSte84Vk3pSUTBZG7BmkCTGWAmtt3MB7iYJqn9PxnXB",
  "key27": "4z34FYQWJ9BrC1U8PLFR32Zgohoy96Q4MayFhCDjpNDeVtNy8a4fjZS1wGsCAqDhdK4euth8ar68xSA7ULQh6p7h",
  "key28": "uoDKV5ehZinhiFMuavNq4B9aPUdgMtFqMmh5uoHYUkuCGpopK9mHKn2Ug1opuLCLTFhb3Zx96xYNEmUF3ncHFzR",
  "key29": "3grboRqUGRSoGvYCD7DCyF72kzud5VGVf6s4onK1bD5kZswYvE2W4oKH8iJSxeWFuuUJuyQEdKr9L46W1yWA5wbb",
  "key30": "5AQ4u3AqF1wRhyBvxJuPCQLkoE4b2R5XmB2XXFC9KsMMCpN1WNHDUqdsC9t8vcLzbPBGhN3Jewn6SowExSifEkbT",
  "key31": "3swPqQQzqdi6BNvrVTxCRemTDr8qod16T8FKD1B9YbYtkjfjuby3u2dLmtxZEzRYmva1QF8SG5fwZb1M9BiU2JX5",
  "key32": "3UQfhpcjFEYifg6w8CrMADHTGYMdjDE2nRcarV1mx9TnrLKggP1vK8uqNJY1GzGcSZg67m8ygD3vpCrqdrBNAw3Q",
  "key33": "rREbty8bVNRkcPdo7LfPL1ukApfj8A5DGtcxCrPMN6mCn1aiNbdt1snEXw4kDDdJffgDy8WKX4f6oVC7Mz9eeCM",
  "key34": "3wYKFvuWNjcj7Di29zdeSdkGWZukfz8PhkE54cJnSXbuXLBgDiKGopVms9L3WmAVJSJZohf36j7hL13rw8ANJYkM",
  "key35": "4LAnqdZdHkN7KH5xGEHWBJXeCXGvjzdsqs4NtKsn4G6KAuMpqn74E4YFg3vZ3EMoSjwiJPdVAu2n1MFPGUpoe5Uv",
  "key36": "5UYDZ6pJkAgAVcc7hUydd1Fye5qkWjFdu99mqbFN45Nh2YzKHFzFPEw7cGdkiVzLAhqQHuRoepP6k3GvGowH21sK",
  "key37": "4ppPGktC5ChxzPYwHqnJrBbnT73mUVGa8p5VnpWDzCQS824zVw73p2sTqFonjTphPcuZkTg4upKEgUxrx466xFr8"
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
