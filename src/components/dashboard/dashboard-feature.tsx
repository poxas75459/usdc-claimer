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
    "5KXzLjxp9JucjM6A5e79AgS8UHBmWTZV7MdAFhWKabLhTpqxRC2d4FLA9qE4YN1EAEdpFja1tFW33LyQKkFDfA7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5csv7P1BebnWDRG6WwRFzhKf2jm4SVETyoR3HQqM18hkhVnCuaxWVpQXeBKhuAS87qssKghzjRy7q414181MzLD",
  "key1": "3UGnWtC5ZwrN1XHvnNBqZYetTr1mCz9uSnaJ2rbcAPZ7eHiMvz55mwpnmuGztazcxWqhjJbrRajVhFv6JKckUmTf",
  "key2": "43cq7K8B34qMZWWp9BUDvZTkDzgGRzKLUEpEEkqXoHHL2CfeU6LuqpKPJijB1xUE4pS1GsLf4nBpSDxBexh55UV8",
  "key3": "2BT4mP1niMFypcrcbkFvTAXLu8YtUujZnuCMcXfdxuHyTh7ReQ2bm6FLWekGLN8cpZt8T6Mi2dEpoVSeUV3KTmj4",
  "key4": "475G5NoRcAFLzhWrUXUtAtMVxt6ztLMYQsn7quG8ZMjW5bQLbTp2AEQwfxwWUQLhVaCFTJkhUhso9iLN7Buw2nFS",
  "key5": "5ou81w5s6GgoEhCwn264GpFuVzUsf1awAfUbcbFRR1fw4tPsqerjzxKE9R1aZu1dWHLpJknegLxPDpGmWwtKVqqE",
  "key6": "2zJfTTjQkxVvGcitkJ7WSB2wv6xmVfJi6UsNWZuvKogRxKNz4KyLm334yatKrL7ymHpBXJiAdwiq77PEjktdwrSa",
  "key7": "2Ktr19L11x95FL6hziJieDGJaFUyjAAwdFSEpJFpZzUwqzF1np7ixZQQNNMFy3xsdPULzxbizTiDKZ2CGmeE9uYB",
  "key8": "3orLR9XNB4QNK6eu53JGZNN7j8FtEWwBrcq3i9dDkpVWTVa1UgbwA2B5QHQDxceg7b2XDTEXavqPPkwtPmUXszHY",
  "key9": "2X5MeFCd4MVZsGLJasVguiwjx4toZNvjF5t6akr85nQ428jpUBQE6x5SsThX4EJdd4SkcKGX1Er6Phv4Zgi5krKs",
  "key10": "32rwLWpqe2wiHHrmNpFdxPw5UmbYFg8wudKDGcqpB8jS3aB5BTtFwBr2DEypAtNBL6WPuqz4z7gwaTfzJQFMXdLv",
  "key11": "5QKjpMGkBVbu4HZCKFa37hBSLKCvg6n4uhdnGKtBqH8smqcrRJV7B6RLEy1ZA1PTBzihj3gTgfMHcxX95C21CoTK",
  "key12": "5praT3XYadkBy7oS7NPnnYAmWCYk5gnSSsqC2JmV9WY4ho4MTfTQvvhNh7iDc55NcQh8JnYxXYW7A4uT4KHYGpfk",
  "key13": "65FWgBrWRLTx1ws1tTqXcDkgXBRyMBX8ye8KjWKGBnGBqGH69MytTGkx7LnjUhu2btfuXDBRPyLLn8ovAqQwFH7A",
  "key14": "5wTJXaHKPzDS4RfLJyYqAahfpQyZbwjXyJJ96YJ5EWPzTfULJnxtdsmbFxJqXXGeusAS9E6z4ZBHKRNUE2MQa6ZN",
  "key15": "4cSANh2LEptDFJpgqZvkgye45GYNN5R4ZVgPeP389UxJwH4WNs8YPdSSAeE9x7pBWwbnFwC3HDyFjRKAWPcnapbY",
  "key16": "2BfC9yPLPn9aAmXVFcmQZixDNTceyLH6xoFoPm1kqenXUZ4wEPXhzcTvf3p9i44j52WC8pBYkGJzkWeAyktySoTT",
  "key17": "5SW7RknwsHrzQYjFA4m6MXif54MUybJNy4Z497d9C8qGoGAtQ2QwEB5SkAGL1x5QrDgZ6qhWw87qTUtcXFgSA5FH",
  "key18": "39bWyj8NVpSquSQuxXMgzznQRcWQsYz3KS8oQH5Hh9G1NLuJ93kHzZhDPW874HQQLisiVSbSkzwUXdKSHJjCKxTJ",
  "key19": "gcumuoXxx7bS9gz5LkCfZYE7xi66yA8xzaFQKhPsxfM3M9GtL5ZhBqfvoiooUyUZq6dmZA4bwKNz7SRPgDBr23U",
  "key20": "rW1hfajQmF9n83PDa4cTrUeZHSiYWszcoqH6SnrtEwquEUhDgEJ4DQSMNHpxUda9hNMhbWuA1zx6jwRvd9EXc6G",
  "key21": "65JTpCtjXKLYjfLuk9vPC6Wmdvvwu9Qfq5yDUfW1mwF7DFPsVekmC9osYM3X4LXVi8eYwWJDeZPBS1GtcCNKHy8B",
  "key22": "3f7xorZHQXHcRMLsECDSgnidW7ppr6J4QUNNxHsm6iX7eDfND1wcTbuQFBUCZ4cT1N2TNrSfoKFVxYAxTcy8fJwF",
  "key23": "5qbtxDLECygAbm9M89hfK5dUFT9U8BZYmxrTKukztCz4Gc3ZEoFrMnREBA1arzdFKrwWaGu2wuMzYLr4GnQ8E1D8",
  "key24": "5mnT8DpfjbWDt5tMMW33ShXK9psSnVqTo3AfiRJUsWVTGK3js3HHyHCbi4VvjEPzAmKgVbDNdFrqemwm89cUZXkp",
  "key25": "2LGnDvTZPo7sSFkvAR7Uq6jsj2mEjdwqteEnA4GAKwd9KXL7N8RweigxXBF7oFhqjXszr8ywpCRikeHDvVSbLWEE",
  "key26": "2xiD2fqsMocbZibYPiWSQtddW7hA3nsM9s2Nhx8wq39iB46KCTQPP1Zq6yTZf3RxBFVCFNBSWdvy5htXw7jbGSfq",
  "key27": "4PTmpyjsosUQjFtDvJweDzd2mDutrYxm6u9N187QvJudLHJdsjqwCNsUTYwMFsU7kbhKvu1PYEUq8saGRciCfWf2",
  "key28": "2pKBRNhgFPrv6xpKvZJdPFk3GSRtS9yYBVBVF49cyqYhxeh5dZsxw31aMPujhpts2RJ4CW4pRCF63vW3ser5Eo6y",
  "key29": "9ZYMcBhE4FvdyhRBucErZrf45u3Mj2CR8SGLV1MmJ6WWQBapAGDAijq8A1JExjc6yuBxBc5ZLjY4C9kRLXA6Bow",
  "key30": "5raAwtgfE5h4S8PF1PEJ98UCyvrCDUGQoipK1dSd4VwezA3u1vMxY81kfgj2GDGJW8LbGR4cc9fkNtKY7zCuCoEY",
  "key31": "61YAndNvat73VDcBxaPe8tzs3E3RTB7t7uCHhy9fd1ZoAxBSvUA5U7jPttmHycP14ajzj6HTs2pemEzqGT4GaYbz",
  "key32": "5f49SFSDGT5qkLh2XYRuQCVPus9qr22sF4JwJ6CPQYD6K6wBo2JwtGxCBHYvNUcVkVBUWHvnLRmjzUCjaTHBxfL4",
  "key33": "58dLc39kAsqjLFrVtMe5SSoN5uUWVTB3mjCsYJXabimYiN67Y98VM2daHwaTc5jn9MM3NghuRRx6E4KinpWgAyN2",
  "key34": "48i9YZTkv2b41YpLMcc3yM4MzUzbtMtXYqDJvkwuF2Q8W77U2cdPPbvf4ycjMHp9w8cWJ3EAGpMpenGRyfUYR6Tq",
  "key35": "63THN7VXUVhjsz1iwm2n3Q6HcgukJDzkmnVuE3x2H7XKoj45XQ3LkWxVmpvyiioBXvumiKFe55Jng2SiGopnYJZE",
  "key36": "2L48W849QcAQYeBv6yTyYNNPmSNhxxZtahMTrxM8Jxsg3oDXhSFXXAzLx5s4aAfZC3GqZcFW8xfHjuTktUPg3PYs",
  "key37": "8SGvoSJnaC2nKbPo5r6kNqACiTbucHfixCVJrDtkZvnPud1oCBhhHgCrSMGXNGdNindJcuwPMNr71ZWs6JWU4a2",
  "key38": "3sPb3jR3sbminFRYYKwmPzy6WW8kcGwKggAmLu2dqDDuPbDx6F4j1WGWXqbFGnBdnX1Qb2FBA4vcC3bx4tubev9U",
  "key39": "2jeofStyEHtiMoDL524sVf6yMggYaVL4LcduFmzeQtVykG7iVw9j2UWGEMgZni9BstnwNiCShHLBpdbpXeezxMwE",
  "key40": "475ubZRbNyLyjA3zy6RZA9dFb5JFEd3TViNTtg7zW2jMY8k8mu7db8awyVXqwXrHuYnm7g3UtPXKmWPK1mbn8kUC",
  "key41": "63Tz6JjEBZervV8xuf3A7BU62jAzDzjMHfTdZYGAAXQpLjESRhSHQnFwwTz7GnKijejBbL5xt88x7b9fUb2w8poK",
  "key42": "659XPLckhv2DpRL69kprxvagDBHVWBqrav1cMmveMVWjg1ijaEnHqBVFrFvBNxNTf3HDeSo8hrGG7SbVSHqZWVGz",
  "key43": "51YfF26HgFeVf3WPBw2Vr4d6pK7XXonpfd9baDG3jm7hgdUPD13Nm64sY1PEujWL2rPt3NyGEDjntgeY3RATaikV"
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
