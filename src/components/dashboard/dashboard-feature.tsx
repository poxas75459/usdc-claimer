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
    "4vamyCTJ8bcGfHVo96ZjPDUvkgWZ8FiTUXBNvNunrvvWSG8ofApE2didUqiMdHtJ4PgoDdyVJGzKgyLBQALnfWRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osKpntz4YoNgCraEDcH4LQWoXdRTYKphiTMa4oXWzGazZAnkzX3Xm5gUn3yj6yUjaLvpm11tLaBBaKQs2octvwW",
  "key1": "3YuzBy24nNsdVFPF6BaagwV1v7ArFAcoU5MPB7NGfmYnCr7e1aDqc7AWSPUqBy69CnVh1uMwdjsivKh8RpggXKxg",
  "key2": "4Rcg3QqKiY9qifXbJF7NYLihuSrcevuZ9yrruGo1rxpSLWETuBwzXhFCKMPQjtnZTWkpxBUGgoq5tRtorZv8SVY4",
  "key3": "avcZqXYmeVZNc6wB4VqHp9GoUGodfjCMwdeSxdm8NPM66Xtq97L1cZHdgPcM73skZDBLqRxJUCWwwKGQMXZXpAH",
  "key4": "4BF7Mqfq6kNfCu834g6wrqys1eTaAMxA4n3ew7e8HwNukKkwG7wdFYSyPye8AsRBS7gSMEZMHDR1KrivWMDPTUDg",
  "key5": "VQwjBqqzfnFSFWMbSYXhaNeQVNDpwmvkz1CDBmrNbFFypBYKqFtqYTBtYi7wtjpF31tWoHEN63392Szi5ny2Ccc",
  "key6": "3WWoqA8EkeDtSqky7TDNLz9UfJVw7y2xTpMSKNNNFbmnEEqbgXUM6tEbYB2WNCpWbw3a4ESRo4taEAyvfGLS3xCr",
  "key7": "2gHXo6GX3jqbug2ZGZ8NiB8z796xF1vNCvJMEysbWYqycWVUHoWXcCNUgZDscXtLjCDcMNWwjJJX5MyNNHsRpvZ1",
  "key8": "34SDGShVaeEMvAz2NtHwZGJTJCZ62ZNwfwM8K3oGHsdWfiZWn9DmizLbpsZtqq4xGmmMiEAUrumVPPMvfPn22Fvr",
  "key9": "jkr193hZHRHdGEkTwAQV2MbtcrC94kmjKyxKmdb6R9NY94X9EhVcP7wsU2xHuQaQ5pGZMsWM6aGd973PBvPWV2z",
  "key10": "4XpPri11yRzeAhqJo8M9crFT8GXbNuVp4Fu8Z39uLPDhrePHBzAqUvhGd7ViHnVbih2S5oAky8dxB6krFodet1hF",
  "key11": "2Tn5JcuNEw4PTkCCaM4gkQgphnGG3EshqRrYBXzQF931DWAaaDQ4dTGGheGV1XrLrKPJAoHM2zBKcM9rEs1XcZ3F",
  "key12": "4xFKKJqp9sU3XVvchfcZAWar6MFSMTY6SJFaBgymVKV2rD5D7E6etGTmkoyN8k4o4tUiugGVuhHnsWPMu6SSJs29",
  "key13": "i6PFNa5d9GTzpQgNUZ3PX1uBREufhJVqyvFXaoiKgjgDnb1w35syJrGQuGoBwv9t5z95ME5rTAAA6ZbriGJjeoy",
  "key14": "25DTVLcwHZRjSGuakvfRGr6c5jG2za6uqRMYd5LkBhUd4zvCtiNTsqBSna6hGN1bvKDA2r1UFwzdAgoLZ9zJR7Bd",
  "key15": "62HEvinmPczNh6Z6xU4azop7eoZ9sVE2LM74r9xhNwPtD1H6KBsFEpgGbqPp6D2h3vAcKMM2D7LMv5uux2phqHuA",
  "key16": "QVDmRaUqS3JkuJVxvVickPuLbCCXJ82GhcpU9P1CPJuGm1gokJos9iM7odG2tHMiD5y9LfCAQCvDqHGeFDdfFTP",
  "key17": "5pTFu9uJejEVCjJAttPoJzgsHoEh9WfR4BAfUReQ11FiosDo3ruEyDiL58BaePRy4RARLHAVYqiXNnjtpwsAL1U5",
  "key18": "5BXkGL5fwwTDEJQeEwpDD1G1umPzVJSaCz75aRvWMewTxYFAnA48FFanj7uUxt8cdi16tRje3sRNHVHBaasqXXpV",
  "key19": "5JkpgCikqHfmL8qD9b9AvtDaQoncaFDuyNrNrdTLRr7uuaz9TAnQAqYD9J26rNGPUvBEMBwGmriPAgPNUBHdiCy8",
  "key20": "2vZZ8AoWF7JPe2SmXnYc5ENLxfSxcbuaz1xrjs3LNiE52KypoRfELJDxacTbHE6H3vfqCQ2wezy7Yf93yMdzaXuH",
  "key21": "2szsHMnUBQUSa9ATRRfG9eb8iUwnTMv7ZrHsdTjZ7mENiRjiGZoSas6NBpALZc837p9RmFCEeEtAJDY1tvZtUQkN",
  "key22": "59CUiWAozdY6TKvG73gbRG4GUHA5jcyou4b5ts3q7AZeeKZ5gY3R9XPc9KvysqDtSAnKJBXEv2nF3gLQPR8sSYRt",
  "key23": "27LpfGoxymuaByMGZFUMp4wjBi3qBtFLrXhEqmRyULRTrAMYqdZ89js1ywjysPE3xvmNYUAm1D3JsjNHfqU364Hr",
  "key24": "3CvvnvxLhxwSbSKzSEGiXsX4hJEtSzAdoCieT5Kg3PoFcinsHiqz5SyueA3Djgd5mWtP7c3wudy23rpF9B8ESegC",
  "key25": "tciN27GAL5vw5EvaUhw8FsrTBmBGWfExz3V6zdJfxE1MPj92zb8UNP4UtXcqLXspegZUQBd1vdJECA7TJXGtmeT",
  "key26": "2uF357vGsQsNt9pDd3RVNM5EWecZgL5VL7XWXqZbdWUX2iuPmRTv9oWxZcqUbpTjsoNNYoZYpU5uLofNCBizrFWm",
  "key27": "2gYVewpqRZ6c85frvUG8967BceDomAgKpLbDFZJHjwkQ4uqX6c9tMWEK1SNkk7EUsPf9zCvbjxzdkbEHBgt4xHAp",
  "key28": "5tc1p6y2iXsYp7kdvSu2LEL6tG7hiwSQmamMu4z1vECvWJEiD6fxYDF9PMDvdoN1QkSk5oGjHC3an5nyiYUKutNH",
  "key29": "545Zf2gRc5KYmgrEQ7Fs8xvwMESVuJAGd6tnP673JzNwP4ZQoJhNbETxzPB68TT9b6B6vH5ynY5B3edbNAt9Hkds",
  "key30": "5i6FSb6ndDbYLDV35FAFfxhV6wC2Bg5mtc9WPik1nE8HDc6iJsxyeXrzKJQoTSZZ6z7L2FtnNntrY3bPqWifQUsj",
  "key31": "4KdJDQFiQB8QQacCekJSLsZ6TCzCaaL9uQWAKoeqCJngfB5cE74nsANwbcLoudA7H5aEt6XwG4zEfaH32yjfncxY",
  "key32": "5NNUDMbbDFH48q1mp37kebc1vHtd38T31mh1mC2RBYX9zadTeZjohPerMAz3J3QGnSJPmoxB1o2EfEtSm6vTxWyU",
  "key33": "2rd8vzjPU6UhTxX3o1nwXJ24tZhm4hPqQaZyDQCdm1bKHvsyph89sjqynbZdWUhZsYnovhsbqj7F8EnZFPFBauFD",
  "key34": "5RunMETZzchxAorMCMbaFLcCBhytbqmiSqBqRUb2C72sJEMzRPGUA1cfcKwEGueaVzWZqPt9fLECQ615Pqy5DE94",
  "key35": "2jm79nkY3uHEt3QA7YhxuRPGGckNkyR4M6Mz23NDeectLKWpnmdn826ae8cAAhAitL1y55WhYBihkMessHaFbifi",
  "key36": "398AjMPm5tnRWxQSWMDzUj4tDC2wMyrbfa9xx7fWrnyBtgXz4uw1zrpEk2L1wc6DBWi8JU2dk5afC9wyQ62qDW3q",
  "key37": "4Xr56xXwyhcQAnUoQGi7ZRBB1WA6V8fJuGvPctJcdiTX7bHD3rKFau3VgrWaoZb5Fnzc8Fc6bJ5CeqdPqchkhWoz",
  "key38": "H54tszW8sVbAxuxRNBoiggnsBw6niym2BuUCEM9o7soZUKanqrdyC5SSTunAm2DqUhHqkAu68P7cGdeUoM4mZBN"
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
