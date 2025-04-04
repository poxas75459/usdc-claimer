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
    "KJQUQoYWyP799ooLGmNst4kYy9x4tEEt9w5qh6XuvMyrAU5jmzTQWsjAYoc8ZVc8ThkaBXbYueEVa4owB3JH1cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rdu1bmMeD9ywjtSwKjQfiUmfrfkGAdUTb19zpuTfmLRzxhC4hPoPk8DZBBjA7Q6oEtYMdWG7EfYbZ5Z6fWnQew",
  "key1": "2iQUaqdGu2HbBnMJvVkgqLs3qVBDdKwJH5BDzQkLPq4vpm7LQcvDaLon6C2Qyig1jbPRAemFbu6rHmCY62q3Gvpe",
  "key2": "d5XD2R3fA1BGrC3JMn69tfJVFMuhLJoJTFbT77Yo1eSGXC4m7Hg2hpfWBFYayLhcvywYCRiiMRovaWa57CG5U7s",
  "key3": "4JocreU6ki2DMXRGJkVjbA39NpECof5zHZRVgF2nLyFsp5z8sFpUKkenJWw2HTVZXWxqdLae2K67i76u13nZF5J4",
  "key4": "vguZRQwkUaWdna2d8q5nLu5MT16yWgsgn6xc4eFc36qBm4B7g94C7Vi8wbiZcJ2H9na2qjFFUbiv4tTCvRsMpwz",
  "key5": "VhGjxPGZ7cGn4XtRZCnE9hnrf3nXsTLEWFFmt8p62CKcr2Z2hmhUuDn2WyGr5SG2igZnc1SezJqy8KcDQU6ocSX",
  "key6": "3qKmrCzwDz6A5VrNKcSGfeFAGPGGX5CAtNB35Do87oSxeJk3MDTYTNdHfNJJUq1XeLuopx3po9JeVFJesGui6bhC",
  "key7": "4VjFMtaiPNBwNQeahdDmAM9KcDnXkmv3hqVqVpapBqwcWfZJTN4tfDfNmwbL76URhvWWDL2om7Hp5CGsZoHkuHj3",
  "key8": "4xBurytYVW8No6Xfz8s3wemJsc8ubAH2rediCmG1CmAmRX7aveUC583hDJtztFqbRdAw6uYPQdHyyyBtGjn7Ytud",
  "key9": "3K9BJPrx3Wb9U61e8FWxB7cgj35o1yUcJqEi1Jrx97FvBmRxoqZkiAuHWotFbcovJeWwQebfZLqkVNz5t1PRZXfK",
  "key10": "dry4yFwZKoMn4e4k28zXwjzcE9DuSq1QVuqPcFe4WtKcpW881EK5vhs3SzYWoic3YVLrZHXbp43wAySVJyHHFBq",
  "key11": "5bAbY9cwXP1TVzSojF5SHrLKCNXViQGHq2ZfGqqVNADTGshcNyuK2v22Y9LcF7Z7KFhxzPb1rnbKMW4Uhf4KwCwj",
  "key12": "4orTjuwVxB8DrqCtp7UmaQovBsKQSFRSPhd5dyzMMadA2gmDgeTyjeMospxSsvuPnoX2HwKibpR7jVoSPpdVJMdY",
  "key13": "3t3EuVAHTjuXNELq9K1mo2ErQtiMQmuTDbbjP39pMpjqMc2oY4f1aeDj96kkVhah9EJS1Go1S5n76WtHsMp2Sxco",
  "key14": "2SerMvP4GKmeHqnqGt6msR3hfirrQnfd9VnhokwcFtwnUkDum5Q4j9fpWRN8vFZWzW4ppAYGNGS9kgJCXRnYFTkg",
  "key15": "5TnfQBEByAS9ScvPX3N3VbppJTLdbkf67ypGa2FAyk7WPSCBc8G7weN5BnUspAjcyGwAcQG6T1YAPuTKMA3UYmJN",
  "key16": "52jwKkGXBY5WgQBmHDo6gz9C5GwgsoBRPWg8EK5taHQCu5Fywbn1iLHyR6Cfz7XM8nv8swAxqZrAN7eRVXxBQRtS",
  "key17": "2ioBjWbPMmrb9ysnPvqzqtUQfVLma1ax2JYL5tZMaYZQY5uzsfoqzfHUAMvGC2wCMxCZyFbaXF7QGvSi2k8YtGFw",
  "key18": "2GoMCvsSx1QGZp2FC3sbbLNnAfKgTFyXa4jVNQRGGJVoiDwWgBzpWDYUqA9VdkccDD2HU87zqt2bHAEpXYwAtLrs",
  "key19": "3DXVKDj2Vfmgay1o4J9K9issq3m2YCXWTMUXvSFog3dqxqgiJtD3CgtFQ6VNJUgWFvN3x4bHbiupzAnDoJcGMu79",
  "key20": "3TnVxudn5CgdZe5avT4RZq8rEih7JpWiVQU9e6ti8BWSuU6opsT2diLZ9AcyESvZ76NxNpTk93wBjBK8Qcv1mWTK",
  "key21": "2DugH6knnkzWMebyXci4FdhPgBHj9t7qWeVB1TeL8jPBZw8VFmxVceBwtcwqBCDezkMq4fKub4xLJNynmF42fnpm",
  "key22": "4MJSYjGrpkmR21ZtM2idVLgNVBhVSGdXov8F41CP3cRfVMzXG198ZC4HhYbwbr1Km8Yw7iHyFMzyTSU2K4Su2e4s",
  "key23": "5n5BKv6nwuU621GE5t2JjKv2856vPYK2M1sLC5YD5inN37hqakBQb4B7sQtZAiaBF4GET3u7raPEfbX1c2MMLQW7",
  "key24": "2GRRMMr1oyEHesNfcK7Ckyr3XtMqaMn6QvspkU9Tqc8mCmY3AxpMwpDTbitdVdC9n1VahHusmf9pRU2k2LXWZ36p",
  "key25": "ZiPJbNb4frDuap8SB5VzpbajQsAtnNj9uM7E2ZPpQR9qiJvtv3nqe7JX2ztWDfyEL16s7e1m23933GZ7UU7gcJh",
  "key26": "ozxWg5aFTU4XgkbJEsu4VViMYwFDMX2XitiAB7mwyEXhfjTNj6kXKS2Nc2aXJNJBc2xJ8qSrgeYp5S5KfEDABum",
  "key27": "5wMRkoKqjkHgjDCqrYJuUrSdGHXACVEGCQDgjRg1KY2sQNFSGQwJvFVqFiHLnWqViqVo8f9bUxyVKW5gfhukUjT6",
  "key28": "zUQzAKCbrwC6uGfU9P2TmSui13yTfHResJGTgcsGNTwXS3cvYuH2ebxzoqTYrqrnj8CbuUXapEpWgMBGqQNqnvM",
  "key29": "2BSRLCTJBukgBUJzwigP4VUrb5XrcSVtCeU57x9TGZHUpBMaDUEzyGyXMHSMyXMZALDL9MECZtKu8fuCtNZqetGn",
  "key30": "2trSQxYDT8K8tyoWWh4Z1iYcg5fEChQCP48d7ysk8RWcKBJ3Ym74WDcqmqFyLZWbgZf6iRcBS26Uwg5LWXxVGjfX",
  "key31": "uAr1vcwKSna54iXCDN8gyaCHwumpmyc5bJTTirbmhJQagkzM6qyXn26w3JgCLZa8MSQrZw9ebXGJQU8CS3YDviE",
  "key32": "HjWiCY1B6bw5rnMQkvgotUsMHBgPyFGxQBHLtzdRe4FahvPdobGEoJadwfC4wwGAwtYoVw1KJyEe7ak25Lpr885",
  "key33": "d4XQuDx2LzpqTZnZ1W5siLgj4wyucXef72rHdKenK8RQH2JzAVfbguPdNjiU5VUqWBN4LMECNR8LNpg6HhKZUHH",
  "key34": "4qmUh5UPAm465ZYXgUe36XqvL7NSrLpiCbhMxAtyVBoFJ2qRiJcScXcm67CpSNTFxdwawPCxbrasmSb7JeHwns35",
  "key35": "5JvNfZp8UAL31f7eK2WV9eAkf3XHFv8RSkNrXF9CKuFxvdrD1HrGWyMAgaX7V6AGVyWitnSnGG6KxZjX2o6um28Y",
  "key36": "4UmxMh2SwRuJnAswmhZtbzwm7wADtgp1FWDJYDi5nVTSxzuNhnNNvA9bSk6AgQNgewq7gSaWXeZZWzFHUsuFrJKW",
  "key37": "5rSepcguUFWys5id7B1S9whrTkA2Eg6aSb5jCAVHBnH3jemfCSJqSECnGx1KRBxCyYWSYk5UFcd5j4sTnKMJBA5A",
  "key38": "3LztokFSQvi3H4fdV8UTn9WKpWCVnVi6pbNe4dTCVudD5Xx7u991Bsu5eb3jsStFSMeSfPS87jG9cRAikbXM5c2p",
  "key39": "2CJhkaNgY2Gs5KfVC2Gryx4RSdmLQV5JPXSJSnf7tUwB64ESfxwFbVUZJEbd3KpcfpowxcbCkPaX1CFZg1gxDHvL",
  "key40": "RqArUDdAAc8xJyxdRg9Q1dkqrr9LFBKpnb7tek9maADR8qcbAM8xXFqsZv1XEb3toTPVzeT6Cd8nNpHqgQPQson",
  "key41": "5rfsXi8SpN3AytemRAR7us7JejTLyLLpBD3ADBUTiMovkox9YwVXgabYgH7qe83kLsTurYmJLavQhYhMfoWYqrj6",
  "key42": "5Re7DxF3gVLcJ4VCc3ZNe4cj7khGtZUMT7xYVsf9PwTBW4BJcgqrk1yctgYDsMwjnhm3hNwETre9dsQak46wdn4"
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
