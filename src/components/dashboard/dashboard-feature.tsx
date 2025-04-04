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
    "56uUM5JqLQymXRSGhT5dR1Z6hRBkEY4GHV5xhhXdWCCYjCeCjT363h8qQroojJb832PG7zvbUcnuUcHdGMdN5eG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3rqCA9ywbJNkJFkLkiDV2855Gy4Pv7UxwfPUmN1sfYNJ8xQNs2BXLupZpVCC2k611n5eRjGHaf7N2N1zseuvyr",
  "key1": "4cDAMwibVXzvhTYEuqsMRpLyYimrFvMutqeWcKZa6pRehncSNrtr8C4MzXqxxmqvi612BY7hAof3QuRefx1R9mLn",
  "key2": "4paA4ZCkxsDB2thu6rLURmLQegeYxT3qgsmhkuQa5XDQSfoUFC28aoqdkNiPQMpFGfUyuCzNaFC6KaYWWJRArsFT",
  "key3": "36Ry2QxFwa5aCQBRjjkQ9XNFwC7Yppcoe8VohtS7sX5j36s17oJt23Fv2MX5UPXBYZr6u8uhfG1ERj5ZtoW8sGVd",
  "key4": "4AvNt8op8iuYUmjerKX2JQThH44TWBaUkVfK2cSDoSW9H8jzYgPdTiW8At16iwScU1NywAUYGnkhSv6RgfCtX1av",
  "key5": "4tRLLRD9Pv9xxBP8A8upgqdroLL9J5PjSPYwuAuk1QWDKQ5wKDqQUPRf1ffi9wvbJDNu153YoTSJCeE5zgJd1HTN",
  "key6": "4bVLPC7YGDoqk1rv4PZD8LBaYrZmudAtsS2zqsMawtRZDvJ6qHaS7YcLZPVh6HtLZUEJVxPpR4KRRvbAfjEwgQML",
  "key7": "37Q4pivjxaGdzvLAtscy57wjedBwaNU7MXVYMrNe9DEUYxjzUJZUPNb11nCNMKnTAxmWCDt3oqWRCwa8GZwdHT7q",
  "key8": "3NtSisQ4Gfvfir6zUwaRHHWgRb3JbH8dFNde3sLmNqnJjXbwM8LRTwVcBshd2aUTKWDRYSJxjdRTUfCpp2BM88Xq",
  "key9": "5h7RPY5xKFwsuby6xvrFABM2cJyMNxmyYBMGx1Sut84eDQ596zh8onq7prqtw6ocRzVbN2X7npXaUfU8JdjZ2Yps",
  "key10": "55bMvLEqwyTsDmNFFuFN9MRNdxQPJ5j21TejNtWc8VatQccsnrf1GY7sdwPtzsDUerLGB5k4fwAtYexedufZ39dr",
  "key11": "3P7JJMwA1cEb1ZQ2AjsVyftud7VsNpzbP1zJThzKdCvoNmZmbDYEDYisi7TxKqvUfJ7RjC53BMPPEi4pixEyaGom",
  "key12": "DyZJsEU9emqCLpBQQJ5YksvkWFzZ6id7FpvrP6sFx1btgQYFQHD6xCMJYC9cici3VH6biT3gx4W5tywaXHz5suH",
  "key13": "4L6nK2yVCZiqh2Avu7MQzhXs4W8ir6ALzTc1CdzNz4NCpZiwMeZgZgoRjMitt6dbbVsB5p473pKS21QbDTSTUQDr",
  "key14": "2zQoCNYzaTYsmgeTMrRu6euNjbG8FGaNPbyGUNNgbi5ecnytti117a8ME55k3smcRmP4yzEPvGGPdjJmxiCSf4MY",
  "key15": "4zmQkP22qhoZQVWWupJ77h5NhjjiC1mHqKLYrP9uqrKzZ9WmHyErtk9qLENNpEvQDMQRcVaMStfYC79ue8ot5ep2",
  "key16": "4KtdmEDPFvC4dGXkt6umbq5Q6N42hzACzoN4owtudik3vDcb9xmcb4iYAdKxNjodZQLrfaHVLsL8eLwWYNzBbrTC",
  "key17": "2erDSrmxZe4bmBmevM9JpgFTL4e1L6ouHdgHSqdmrhPLSwjfZfieroeCj6T4KUG2gjVrVPVhv9JjCvZjGpPvMcuV",
  "key18": "22zN48WW8qktfndyTWANtsBTE3DNarJSUSrpTtKmmPKBY54ez8aXsNmCBbmnigHhUBjL1MA9v5x8YpGVPUinyAHq",
  "key19": "vZFsT8SAewTGKhakurCR5aYTdhEPPAPdJqhEjiQ1gdYdBP5oex4d4nQthVazz73nrmttXDbVZ1ivLGtEVzHBJ6G",
  "key20": "46CzBAzHriVC9KXFivVxtwtuJamMKLsUVu8DV57xugy38a2ceaBjQ4LYizg9rfrYGyZKTda1ieHmxqiz88tVyA5w",
  "key21": "2ez2Y84CdRuC6cam7xwfQ9eXZRC3HnFZsPYfud1CPEXpZgmN8Q5snkwHFofPcA38c5xr3A9ixRoWGSyUDCbCjsKM",
  "key22": "3ce5jXSBhegvkTjDXWjDgAYXVaK4GwTQQAGEMJZku9wajYYe3C77Sv6Dm6VxzEeGNtqr9xMhKwkzY7Nyy8Fovgsj",
  "key23": "5wnaUaoHiDzYS3Y3kjpqr64KnJaf7q9hw2GTiYvKaecw11bQZqvpZru6uQbDdwekfngBErHvHxQBBvfq5XVvr2ew",
  "key24": "AymzJDVRFQy7jCRRpxQvKpai325KEyTH7BXrge625MrVZVH9d7XHhJFygSL61Jp56LFGYpvhdJfgnB12V4DPkca",
  "key25": "2drWsaDNS6ruXawJRg2BHAR6w3fEmXMLARr3ZZ68ei2RGs8qmVs4aQs6aeDiGX9QXPVV39gXtVorLVh2WcdAj17H",
  "key26": "5nqe8MmVLXVsfQ3ntwt98SSyxV3a4wQzpVkxcFznKi2Np8cdNPcYTPaGmaNNk24pbAdnj7pZFi42HtNpB34V7sCU",
  "key27": "5Zrde1fQGSNtmhYy8WvSQNpRdb7ifv7WPgMiTrGLcdLmQLFvH4Yh1bb1tWU9QaHK5UMsT5Kxnvvyv4NQmHA46LAr",
  "key28": "3TtacFPw1YBiSv6W58NKT1UFUY8uzxb7qzB24Kf9Gjs3BFhcz1cgLdMXkURPxeFbNzmAkPTdVzRjs6aumirMyezz",
  "key29": "4eD6qbihFEthHUBGHP62sKcVrK6mAWpDpPUBt3FuK4rD2zRo1MWLf9zmXXdZnGPXFMKb9jJZDPsXFhLkXQDxzG3X",
  "key30": "4XWNDb9GAnf8RmjcJ3R9LSbKi84vwXxXSe8BjxswuzmsdXAPfCXfNY21ZrsgNpBda8XtiJjVJZavCaPnXMSHGuDx",
  "key31": "zY9Ejkd3cQyEgXewTaSGTfJcyUk2rT2N2S2k2inczfbnnSNEXded6Fu3gGpWehFf46deUkcgnGYsiSL73LMoJjC",
  "key32": "3PJptm5Q1xYQCvotehhWfKUHrDFoXT1us7smEjmpkNdyGBPjYVFDjv6LZRqTjqymezDc5ApWAoSqHFh1wEXKLrG3",
  "key33": "3dyVWS6UrLf1Qp93aZahPPtWeruzKphLE7juTaPPZFJYRv8cwLVnR5Sz3Edno1h1547tTsGDQCTKzwCbNqPE5PLd",
  "key34": "2v4pJ1yYAbd6HFBKc3etox61jDLXcMbFcztSVxDJBEBQ7zf1rWbtpCnfWhvNSwPmJRL8fhD1j41bvdyQRr9NGx5Q",
  "key35": "A7DAhPt2uHAy33yWHd7XVjsAVemmexgSjdxa4rEivg3MjKKV68rtwsPuityMTwtoUcR2RPrmBBxVYDrEVJvBupc",
  "key36": "2gyodMtbSu1v73XT1T5gccUY4y1mVqfy61XcVKVgKknNvMYNpqq4BAoa9WQ8V4AvAtsyzgiypJvZCAaR3sUcYn4Y",
  "key37": "4N5pTnmcHmkEWpATHKwXQ6N6akxUSZipemLxt9u1yAvnN825kgP93PTmCnLP4eYzPFN9NzoKwGETsviSm7x2uKfY",
  "key38": "TB53GpsTfsprtth3Y1gp5E2PfwLYLVpjdBK8XFPHD2j4CRpWhGKKwKU4YFRw2rSHU4Ph4y4ouymtkNK4HXLVFmf",
  "key39": "SgwMSQTfru5HhjrBkuBDocuA31o7Z7h5SN4iRkh9Y4C5JrKLYvaJNPs1QitWP3FtMn3KJMKjLqniWLG5QJSDH5W",
  "key40": "3hLTUVxQfZLX6v5onehvgHt7ovAJ7yURW6NTyLpLsHjqXLckzN8APZURxgCNLCL8c1viiwEktNtPQVNGjFxy3KYM"
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
