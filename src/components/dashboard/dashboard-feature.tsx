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
    "3SeizVMXuyFX11aqcbkTCG9rhrE1db2YhcgAsm3wdmpnhb1urTftDF8bwg8GuDMsYcdARLWJHbBQ2swAP7v1YNXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LiGSB3Xq3FiEJRt48WxPJyXWXHfzL9yji6qtaS274uZEt8Tat1fgmtj24bDs3nCTjpRraNXTNwvnk9y1V6Nij9W",
  "key1": "3afLZhA2fjQ2uXnGAn91q416SRJUg8jpNtRgUXii6S345uH4qpjQXGrpsHyHj9RThBswgLs74YPi3wB9LR43iPxX",
  "key2": "4R51mR8FiWsXDwC6iLWsXL1kGg87UGWAx51vr3BVhLBshcugwFHA587bhQyAx4sz5SMx8SL1Ht3KBUdEtpAsWgqP",
  "key3": "4PDwSb4UdhR2HHb2g7L6CYr6ansJmqMSw3cApSCYTmscw3ipAd6NMhjuEDbZAZ4jggDSKkk1Rdr3ud5Kh3znX1Rd",
  "key4": "395Y7UertdEuGyRLnQ6avo8GhakQ9D1cN917FMsFhGVBXcm9BPXNS7zxNm8f5iu3fEmEha11sdPea4RYtZ31XxMy",
  "key5": "3XT7LrTuHXRkLKEyf9QTmSsVnVhzsShfM7QBfxxjjHTSZYZjgyAzQ7yZdeLhUj94ndmEHUFrkYyeSn13H2hjYyrB",
  "key6": "3L4WsuE4evM1aW9Dd1LbCuUGhJ5BkRLzh5gRhkYk1Pa6gQDpYfeHXQXiP17SFSSayHLdezKL2xscTjHT9MzJKbbW",
  "key7": "3WCCLoZF7Tb79CBi4eY5t6BUAA6rLDNqEXEyU661RgfKihL2x6YAF6THZ9keYSLmdQjGfKhM8Ss8qdWoN6MGytbD",
  "key8": "281tpGLn44yHsfqTFSSfJ58LMoSUQ8PG6XMvsB89ZxdQCLcbD7g1mxEMANmDmViBppzvUEdnScEpGHj9FuxXnRvu",
  "key9": "xr9pCiXLNpZSTh1La29Bj4MHMpZJdgpQvMzPhDGgLZAGWhZjMssUKXqbzavV7M2qEZyjDSpgHNVzJRTL718QEqN",
  "key10": "5M8sV88uTEqAYV4jn6RX3KtQXUBfrGZ53YQiruh4mWRpdyfQjJ4XXExkyFiKVT61d82EGTwpcUjJoPPXhcDQQjhj",
  "key11": "4bLGRDEH8MNAtZpZSDpRKrQ8Qu3WLd4V7aAgL8DsHf4kEMXEwG8BfbKzQPNrTdNqAhigtVv1Woe2gV3WaXLaWe2m",
  "key12": "3hfPUpjr9HCz62TekoVzPDjShhxHwjcTHgZMSkhtS11atGpsQjF5kdEhu3gKE2kctD7EwJWgdLzjUHLUPB6FmxsG",
  "key13": "3woQhuRiqof77aoWCvhiwFo2mdQAjZ52k8gY82jHTUUWh4j8ooRptvLeJt2JY9UPVKXXt4QT1AyJ1syT7YHaApm9",
  "key14": "2bc1xK8QNo2XzhxKjY79Eqg91Gk7Uysf965ZtFJNsQsnCAN2TqQHUDFC5FuGb6nTSpEpzXWvrEFnWasDg4v9RqD1",
  "key15": "5uYhKjXXKqgoARPvY8MJRs33K85bU7c7wbPbne2AVuswJapbZZYP7H2fzLd3kdqjxcxaDqSSqgveoXcLzwndWyuE",
  "key16": "3dgYHoR1efKWJd2Fnp2MHNVX1KuV5RJSvhir8EoMv1qKaCBuVy1Amon7HZP95YvdTMtx4fckcw6mEvLBZsZEsckG",
  "key17": "3vgpYiKxqGowSQvWQEuHXtXsxqgj3b5fq9NHQe6b4e9yj92fFELv68xN7s3bHLwrfG7G6FfRpNoCHSc1cXVLSK79",
  "key18": "39DvLWEJBuWfAfUwHBERPZtEfMrYJtQ5Z7X6evqisEEHLswzsm9AQ3Mt9F4b1FzjUf1aXG73ZL5iAdVa45JPeBqb",
  "key19": "5nP6BGhGmf6JYuPJyxRMt2czY1nFBsbZ66ejVUtSzVnb4QwiDwvLzmoEfKZ74DJHrUwTMGBkYEvx1NrzqECAkZq1",
  "key20": "3rjkhzPrk6Hw51nvYkoGFHAk9AmAVeNjFcNwFE5D8prXi7jxHb8TdmRgTxCWZhpWpM1pW8CAsMqQk57hosDJFgWD",
  "key21": "4PKGud1cZEtnQYizg3dt6CJ7g47tkuyoJP5E1w9fh3bWTiYNXpRTgoCW1WaEAhhS2nxGuNFBMb6A4erFZmGc98nq",
  "key22": "3A36Tg4gxwVDa2RRKtrkZNfnbhmGsN7Frxov3NXy6i2Jta1SqHv9Znr8z7ghC4UoBQTzbbtMHYLFmtwxR3XBVKgA",
  "key23": "Zrk9gFT4x6urxoq2vNxsvWGh5kLXoMFHPiCsvhXyAMgwxWLLYGjTLd2qxZSdfN3MZ9KmXQbSxMAoKAi7CYMCQwR",
  "key24": "4qSWg7wXELZRKvAX1SnkndrN3u2exB1LnV53cZPnsHBSqqx2qaaTvNGkQJQhCBDeCuiffP9yYgTHKgxW4fuFDGZ9",
  "key25": "ZZDQyvX36XBDKBG8LhsqrztzN5hGKZbGy1sUt3pGf2cowkuS3E2KkuibaJ6zPcZh7kewMxphgZu61z9g4ZPDPYE",
  "key26": "skoYK6UjVimYb49Ndy66z2TbLAzJdHv74wjFKPcokb4fZQo6nPwCoZYymcSNXvuQisLNqFF9gSvbvm83TLacXh8"
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
