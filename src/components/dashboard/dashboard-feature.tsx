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
    "37f1w6DYBBJ5Vdd2buZBkoBgQ9T4ahs2GPZwha7EWwBVy3WwAqU6iyKvSBjQBqxKGQEaXrTnx4gk4NjvmKXemtVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxj9kHUPdtXpw7s8nLNfZCWoHbdNDEubz7WfHP7nHFxfusnK7Nc3hXat4VdK7SBjaHCz1WppGULK1qc6iCKAzUc",
  "key1": "4kPQyL6DYaxQZVLGiMpDXGP71SMHRa846fWU25Ry6BPu2m6a1oLZYdGSPJkFiuw9hVFa1VwQkk1S1fBKwncTtADo",
  "key2": "2fakEiD8zYhq1TUXAuXXv4ECZw36iUEPyxDrjkcpPZZhbQMoZGTK5hSuRmU5zuqBdVYQrhBKVDxU2HWxmRPvbT3T",
  "key3": "2xnd8JTKad2DF9gZ5DygtQ21UeZZNoowu79CiPpLKN4oCb6a5Z1ERamjZmyoVgpLkUGHGVwZgmbizLB9YZkTcaWo",
  "key4": "eKwdNut8YLAAfe6WdL1R58df4gdhKpEP5PRJssXiTTwhJwEq4g5cYkKYVDmSn75BPBmiGWxvMLbvY2Z3XLWd3Xn",
  "key5": "5UVMhm5mMNjDrBiSGWzBY69xevDdRXzmgXjALKNsBT7VtYQcvvAtmgCmt3CNbJQkNCd9onXxdEbk9YAvR9pKXW5h",
  "key6": "2uEHKiYRhfeDDQPKV5FU2Hb443m2VtYCpZW8AAuB5xAVjwAErSUfb7fDMfGMv6BKH67HDNYWxvdrnBmhMALF8CFR",
  "key7": "2wL3ToL9tnCtbsBLLX8Nf28VetfP4wU3ijnmB67KKVgy795qWXZgmWiwuUueKM9SKjduTUPDzcWBT5GqG5sYRs6v",
  "key8": "55ahXqcCnwNnVvvzJapF8s4Cdje1WFt9jsruvixyo8k7h7jCPysyUxb6bWZBq28hqyYHPyor2i1baQPqGMBwt1Jm",
  "key9": "3xtj1ApDpGa1zniKSmdPVkSL83jFj5aDusUq6CHdBbyUuyPLPyNupMmuBTkJLjz3w62SAYWEKVbRyokNoQS9eE67",
  "key10": "2tWojg68fBXD6H262BmYE5819MqwDDXwn9a6eeFaBgQmhPgo2zJGC6hDptyWe7Bfrf2XhAXanCQwjMahUsFXbEpK",
  "key11": "2evAbXxLQ2ASqeazaiUdLM5sDCVzquaTWnfVQRCE2xtuqSiiyHyRkVbXrg3Dj2UUN5uygeRg2T2jtvN8qFDQDeJb",
  "key12": "4qBEH7BWHCRTb9bUpH1DAjQEMRq9k6FBaWTgPkwnZHbhAjChvzUcnZpd38nQ7JuCKvu4ZjegizJeFU8rnTs4yhxW",
  "key13": "2euQ51ZKZ9gihWkQoyjbVgt3Ld2PLPahS4uqVo6ciuX28KiNDmjRReLTjyqN92vxrL8U1rojC3vfRVNpi8c2VHQD",
  "key14": "JasBHntHWYoje3GD9PmGUhMXYhTWzk3hueB372CY5aLCHBR8kJxYixiV5NFocjpLgdjmeG2eNGVVjLuo71TQgiN",
  "key15": "5qDGLbe2LhjC3whQdLaemDK5mCaohnUWNdkKFyJFQpBCDM5B8VFS2EVMwys3uFg5ZvgcFSWg67TuYNHGnUk9YjZs",
  "key16": "4YvVNQXZF7Vu7pr7ouky8MrgSNmADQBwwmhcpMoHH6xR1UtJ7pmh59VdjKGCpC7cRVKcbzU4FDMSAew5H2i3MNKX",
  "key17": "3GpcBAe4yf8hvZpkMu3aZQybU5gpKg8JuEqXAoxm8j6UWCgTDr8NHLysMjA9v7ARFUi7mmdZiV9JmrmuWHrKV5C9",
  "key18": "pX7fTESUbuceBc5zVozdakAMm9RYco5ytYPqRLLe95SxWu8JMSbf9ZFbR21cfmWGWR9czmniwcRWXxcnLLeBzZ6",
  "key19": "2WCFsukq9XNa3nLoC2UrAHeQeNBkk6TkZZWAJRLa6bbDbLui6JUdxoPutK2sxuaxrLsPzru31jZoU3CJgAVc3NVx",
  "key20": "sH15XfMJyWCTEgWySxiatDpQvGcnuUy5SpJsf4xp1eHCYZpTnkibfy7p6KNjp3cPgjysLUmVWRW8AXjc8mUniZb",
  "key21": "3woyxbVn1peycRKbosVSieQgE7gc7Lhkz4XF8VCGNCRRU9BmqALcxy178ZqBavnMLWKkjMzeFnD7HiDfCJfCoooo",
  "key22": "2bRcpy7FfNSi3AahYiFbk1w4wKpf5hnfG8ko6JN8kVocj4JjaZa8m9hYzeuFornWNTGrLr7Lh4JdpiHdkZhL7hiY",
  "key23": "zZEAqoruVMUngfpi7X4oWzhc9iokfTYmvEE5WWr37eN1igbCDCXwJ7ohHkJmQBDkz4cLtwtBcHy1WdTE9ZNB1S6",
  "key24": "5JVWH28rscxZEN8YbTj11MyTcre2m4KJ8bF4YrMLr2bKnmUvdci6TeQKC3KhE4rZYKERjZh6yxiEJbEpusVKt9Rb",
  "key25": "Qi7EDSTPfajedJBidpS3nSorjEk2RQqg1ADs2xPeFdxufJ5inq7NRkseNRQGja35eKRQu193qmRT1mx25UBTR7w",
  "key26": "5XVkAG8iTGcchSXrezw6EcHEwH2rkSJTAdSDJVQbWGxm9gfBvd1qp78NzZqpmZ22C7cjiqTRTALdpMUSpvow3gzG",
  "key27": "5DNwoFN3AVgbsLn4WCgCnCiA1WBstnFqSFQ1TLRbsYAbxcJvUDG9CPywcxDykqMvUWfKjDjLqU153Uen1k4Gc1VW",
  "key28": "2gGgivby9PYWqF7F3upfeHLC7ezUVovEdDrTha6sLuuckRfctTbRYfGahA8QR9PuPL7G9RN7M1rJB9zcvVX1mLae",
  "key29": "5Jbia3LXJ5PoHyvFebvMNu6MSvmTZWJywA4wtonwJU7U176pXd9bgecJvzSmLg2T4QVpR5HDBZaqKNvWEucRVULH",
  "key30": "31MXxhYATdGdfGEoprvMwgRV5dtgizwG7hEbhePHcHGUF1P2JbND3ZfL3gQ8mNMLuxcEZF5LxhFRDnNDzbKBTN3Q",
  "key31": "26mKFUpG6JvrPtdFg8q28VuTsCUh6YW2n2QrQRvmvQFEVbi7hKFwgQLF55xjQEekrEtTmqe5yUq8cz2m5Dna1jSE",
  "key32": "5TtW52hPb97DEiHjE8EraJ52qp1ZWuffrAy72tM2WgzhkAz4bCUEnk36ygFPxX2KZfdnNGoqofwLvBrJnnJt4xbt",
  "key33": "64E1DjPZgKogweFppHtc3t6JXJG4SocXktpPDoeyXLTkGXeRAxwd6LjGk7BcUiBK3LX1AuUCsnDwwpwyVPzZb1u4",
  "key34": "2qKq5B8GbsxMN95m4dyqbDxCYATRhqhGkxbPUC5va1W7mye6FNCme7VvqayNnZTctTRs7ckjiN5QdaKjbbuVWQz7",
  "key35": "4ex8feJaXo23hPBs2b5bsgy4bojmTppXk6epswfr3FA9z9q9QENyJ3qHmtVJN8heRbPsJ87SwFxAtzqP4UBJj8Sg",
  "key36": "3SEJfsnxkcLvzcwhJqraNxtfjgkLBteiEAHjkYG9riEcSThFdJHdC6tN5pfDn4ACemT7fPt5WfjqNRucxNxEc7yo",
  "key37": "5QbkscgNSBeVzyYDyvfR9pqLD9L5y9jxW6gjwuJVg9m7MxnM5RuEgTRw6HKuWUKfbkXpBpxr9XAX6RndeSdMkT9K",
  "key38": "4jzeCxANShBgjtqnGujFXUJv7rGcYGTA2gxRjiE1Y6wXgKPsezhHeCmwYHFXegetCzSnCJU4a4yUSS9gB6gmiSP1",
  "key39": "5pfwaNn8LM7NKtKo67fTjPk13jJ1CUxfyE4wMNLB91VSWh8TLnGnrnq4yRChw1jDCnJ7ESyRLSLoBeQWPKqQt1RX",
  "key40": "kGKM4MSKgMqF74XJnUpGrR18DpxLCdPKU9GWyNMunZk1FMMLHAYaUHSHv1bvwRc7SP1FtQGYqKp2qe1kiQvmqAX",
  "key41": "4tXy7mtZNaGynNzTJAp9nc8aqstPfkyWGjsyV22PuZCWgEC54ErJZSwGtTvjLkNcghLd3TS7fNFrnrDdwip5KJDq",
  "key42": "3SaRpdZPTZnA5EGoEBDs8gau9XhxFv2LtAZmkzNt4sQKRXs8NrkiwSUAk3m7T9va5Z2onHTNgBKGXq5HsVRYN1uo"
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
