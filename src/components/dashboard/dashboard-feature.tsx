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
    "86XpK8vNMFZVV2J32Cmd4xymJTpbCYjMnSesiXfBDwXrVwm5T4HdyAwGmPtyXyyA5pV9UsCLoiKCiiZzpspAhBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iRvgoB6e7LtopwnB547AkhjKArChk2FVX5fxqwStsPPvDhj31dTnHpyUzyPDboFadtFJ7WSzQPbjV1ZQf4wJVPR",
  "key1": "2yN7VPKUTHu3ykVDUuhLJiJjNAYBQ9VPByVcrtfUiCQ2PqSqhxfqMcwSKD2hCfsdq3kXK64Y7okCGxcfxsuj7CYo",
  "key2": "62VcRijK8Pe2EGRmBrc44PbENNqGrAnTkReP9tm7kAqL5QUVV5DxUHJjDtACqLms116NCC2HNNEr9R3kMebriARH",
  "key3": "ZhbnRfrgU4QjouoLqY1PVSxduP6HbLB3gG5rvHSW1CrrcmtcF79FG1MdbuyqufXWCprdzPiKwSGmqxUdXaS5h7r",
  "key4": "4NqEiW6AH5szqxJwJpNEaRTFNf5f1KWJ5ZzErYZjD9PkgoEF8G9Z1ZfkHmo44DfswLUZZY9V3uNGaVDipz1RqMrA",
  "key5": "9u1JQD2LVjU95hd7YTpexJkd2rjx1W1e6pUBuPKgMw1p7RE5yUsMcXSgUUHd1j8tAdJ717v4awVNdVvxoYG2RQs",
  "key6": "2cHWfGP7rvB68CiA5bfDNBz8Sr4xSprMe1FYGmF4HbCkivjW5WdrUdncJmVCixqX3JVBsBZQ3g1aRY1wvW7LgKWb",
  "key7": "3w19RYp6dfpNxhx37p9eXUHh2GvEsVTAzkRxsSnsWU5qdZwWAegB8mwDDjT5EtV75LTYDLt2yw2s53EmKzAz5sCZ",
  "key8": "5f1c7JX7GdCroQ7XSXvG2y5XPGKgdNX1uV8G7Vc4FsiFGCz1LenhhEVREXjPz7MqxNiPL4S3YV1JX76PMxDhkRBy",
  "key9": "5FcLDghc8frMuULiBWtXK1wSrVeh5AieCtaUVY2dXMp5jGEbpvPWufmEyinXbyg7VTXkwojShqh7GNPweBBpvdRW",
  "key10": "2cS2YRM7pCbicJzyggqVfbE5VQFY8Ch31xjAWEU9vqu65c25CLzHG2xDiqWuXZFYv4d1oY48Ryeo5W7Y88sUoYTp",
  "key11": "5VwmGLnnyaBHr4WAoffLuRsQynDj4XDLJpwyeHetyJSAWssCLSrxEDyrWxSSdftjKCNsKzk4C53qXzHDmEb2efCB",
  "key12": "3C73t2YTEUVF3bip4LjqQEB4YaACV9qsDsRzSHoPxa7YgkMcMXg7JE9q8QnFNQ1SUkBsni8NVdNccR8hnnAAwGAi",
  "key13": "4A48Qh6S7BHCHnPH3uLkfFdAK1gqtbNi5R12ycT5DqZLEs6ApQ9w1ZXvdS6oYA1xAKHY1qnGWzGad9bksFjrfbaJ",
  "key14": "46iFe9MH5GhdgngnbPRa6MXP4dgJbqvvAx6JigfC2XEHYdJxEjhXubXhZWL5Fdh3cqAFSCDDVRXAnEUzZFWzy3Pk",
  "key15": "2xAGXrz8XyrEr4WsRRra8ypvPUU3o2N1RE5BWt4paoUd8p6tNNigJ8c1Vgm1nwPh6B8cLuVd8qgdtBnH1RPqJeF6",
  "key16": "JvH7irR4YFrfmwnba5Z28ft1p7ojwS2C9mA4sQFfUh6ZUnZvRChFLa9bq4vUN5rESs1bKnQoRbRMVb27N91pYJD",
  "key17": "4GuvtDRHQyNQkM2NHd9nbVcUcFH4kfoFeLE7D4F3C2Dc5KZsaQVfwRH95PxtndMTMc4CSJ3MD9Ens5R2qk4vVGaV",
  "key18": "f4m5734gSXxQ6PpmC7LVAv4ZhnFbEgP6kyswcmf1PjftGa4HHjVNPoom2q9eiLYgoMK87ciMYa3Fiq54oUEVUuq",
  "key19": "31DJzYCYC9oNybsEhn7AcCVLpctPUNTo4PNbBEWc4nQgdbSAuRG4mLcptMhJUfUReG5iY2U7VpsRqugebC8bmieR",
  "key20": "3hvz87LxNFj7AYFWaHcze6ysRsgbfFJm4u88cVpbEXwrMwByTviGxvzDe5zVUf3La6SXwwWP4qzZn7iwP7iWntBk",
  "key21": "4rczrLGnwd3E4Yz5453DapCjxb8WYvUCtT5KrAJorgwkLWTsWDQHe9Zs2iwGgvNHrkJEyFXwecZB92jHD3KY2BVr",
  "key22": "5Cg9sGxiG8UCvv2sR9arLQEycrbH9TFY1NdqB4MUXC2veZPdsBniuXYpn4NQwvqXBaKaaNETeooWRdh5nGqyw1kR",
  "key23": "5WDu3bDfbS7moo5Yo5JAczSLNhSzQTmPJ1KQ1yueBATTZCZNxhvdrVkHoSUWJBiyfeFL9enU3nHrKmFvShEWT9W1",
  "key24": "5u3LS5GYiMgyAJVr36in2WJZf9RriiAsTeuuSMSHvDZBAmo2uKFcM2jg2Ga98tRX8akneTnY7q9yCTS3bNfu3U4k",
  "key25": "5sz8oy9BtH93vmR4vyjbafpEwXYuuesExsLnyTgeMuhg5hHgnV6MF1Yr2PKw2XJvriseGiCHJJSP8YrzXB4EWyES",
  "key26": "5XXDvx86uGYE5svBfMDXktBwWCjfUcPmdV3stLcsxQXdNwDubkQvhuwshFecCErKPhPC8wUPdfAKb1JyJ2nedmMa",
  "key27": "FvLCy9Ww3NtutrX6s91fGhGLgRbp1J6mPxuLHNmM68J3Gky2hZwweti8GS94p1d74qD7NqMo3muJbSga5GFKkAu",
  "key28": "5UZDrnKV3yiyxhC2FN1rdCF1EBJfZS42iSFtfVrrx9Nq25PvhhSnhMxYMCDMBUbwRaMJriuGxuH8bqyTEP7a5zbe",
  "key29": "2yJocHVDuzyMZtszAEo7hUmKa1tY4ZqEaTUi7JAMpQSNC8p45993bdV2nHPWu5AVv5VGtcjfJ3udnCbXhKfb8vk5",
  "key30": "5tnV36SH4YTgJZ4dzjdeUQ4cBFn11bG9x2SNi83GPBr5H6sfGhAjACxqoRruEkxmudSDwu5PMjbe23DADW5rFk38",
  "key31": "2KQbDsbvFch6JU2b3zB4Lrg6k8ah1CKqb1Do697cMbfwfhrozdNLgfXqjbrpyCmAjH9c3xs9kGSjyArwciXHUHtC",
  "key32": "4VqRvKW998vuGuGoaC1twLNPhEgpLmcd3BSjh6QPrWDQ9EtbJKQkAE6baau75dNd3xiLHpNeHBEHm4vXXAwfS1JJ",
  "key33": "4abxh8xNi5Kw9CS75JeNPvGvsNRf4rm75DSnwSzjXHxdeFbmfVK7jPujMyDSuZJprJFyqB8JnsPWxs2NtmeTg9HS",
  "key34": "22Mww6PSy65hD1QFUo2Qz725vjne36qRf6Xmxtr6JLoCFafn5aR3C2M8p2e2e3VwoiPSstj6agir7TfxyGvGHGMV",
  "key35": "59wgqh25mmECghokGQjLGu1xb2MJQKSkicnjjS7ao2bktY9W1dUGLmi8DZfy3mpUimndbXGtJUAukxMUgNb9VqJD"
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
