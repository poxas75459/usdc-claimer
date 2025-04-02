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
    "5d5PGxY4TMk1pwoSow6zVqyukA2Vrokxwrx3TNjLaGVDTCo1jP2AQzhmVqviL6euah1Je4y4KtiPrVPTt81DePXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zi4x1eS2zViXBCqZ2cx8qN5cEAf6oGGSFKG2976FXpaofu44ShjY9ePBecMJFpUfdRg2Z6Ug4Dqc557DzuEpo2v",
  "key1": "5jCTe9XGwYYD9uquFzANdSVtGkz6H9EYmFPNgCy8e5R7y2c1SZjX8tECUFHcCPhTnGK9TsMCxjEvPGC9xdaqkzND",
  "key2": "3859WrB98nBnR1yts4Lc7eMsMrbRdKjHCYp2gjybmdg5vWceLdkACogcnzWduQQJDyndu9Kp2PVaekA6JSL7bkBw",
  "key3": "2zamLUb4QNLvphVkghdYzurjSX72QPHFzDQm3L4DYiShzMVCHkWueBXs6xZBuzNS3z2YeFdzztq5ftCc7mer5UG5",
  "key4": "2hb1DskNwuJC3heRsK1EomUJrq3SNuBHryfwJmYQQ4ghTJTEgNSCTCerbMFrb1ubQoxH3Eanw5Q5dVHa3Sf1JWWH",
  "key5": "5ZpaxWVGVhVUZd9stusohM7To3Mhm3XJBGUVmwWxioQdT53MCGXisUW2YVRRkRA1MbsqUHKzDWvapKgiBKC3ThFF",
  "key6": "4a1hkx7VYmA4y6HWPqaEarQiaFX8sTC65gedzveu4mhPRX6c9hCWwrNXASSvS5CTzfvq1t1J8YTF7LgmQ41kFNAJ",
  "key7": "2v6rTwUGT1piuAUaF4JiS14FWA2RPN4A9DhMgWJmw1RCPhJfGjNrAZqZVZJUhnPWDNQ6sFcqfyP49rNthLzCTc9n",
  "key8": "63Z9op4VKPBv2Nckk2brbPzWD82ADZ2Pm5H5WsY6dfwyZdJYo6Mqtdzw2L7ZJrzKowfYctLxEdNpick3D33e9Nyb",
  "key9": "28MXrMVhvssL1TfVYEMHUyyxHDhcurXkcjNHzT5xbejPGpZqZTR4KH92GPiiDQuSbTyj5iB2ZDnUiapKwUx6ysLH",
  "key10": "2PjHhX2JUn2Gcu9euTuMG2Pr22RkaWbEmbsSyErJ6zaxQrVmGrkbgqwKhTZtLYmjJbDJahd59XoLo68mpKLq2Tys",
  "key11": "KeNvpX7pdA4qEpdcBGimGWzDE7GDCmgheuB2WUruprrE9Qw8oAKB4ncppDkuoMAAmeSVe8j9NryS2J4LbyAMNhD",
  "key12": "3wbMQC2FNgou34npsYjZNjmApJgAeKEJ3xqMevmUB9TfLeUu5bj2J3AzTxEMUgHWsaHr9zxxaVpnc8q3bKradaRh",
  "key13": "hnURRysz7bFBmuGqSi82zHVDh2KcGijBWR6GGVhjX4iFWGaLfiNAouuGMEqagFFevMR4EqnTnHJoM58X3uggpEp",
  "key14": "cNjMUp7Y7LfKuACuSpWhdyVqtWJD5xWPzS1m5Umtcr5hvjNZeUNuspTVpFKrM2zTKzigET8H4zpJ3XMvWW4WMRC",
  "key15": "3X4bxGBJTt854iFrZc1fG6JTR84gN3pVmuKfQ1CFZPymfujNDV4RXgJieJr8GEUjnppLBViLk1eyd6f59tPvz5nE",
  "key16": "bbGQsRXXBdnhF1h3VvgxGPaExveVcDVkMQciWshCaLM1w8tQ9cpcURcUgPxpgS8V4EMwb2meBNHi68pUUXzY9d3",
  "key17": "3zDw2budfhQV8zQnAu6Qet2FzA1zSVpR7Wm1ykbbd5cZfM1hZVBqxVPVrzYHTUeSrzQPFhZDUktzjL9wt2rTMQWg",
  "key18": "2o715CBb9Dcj269bLVESsRbzYmDTv8rGrDFNYMJgNqg62BL6i84RadTATP4PnsyfMie5kvEjewU46bAbM2tYvs1v",
  "key19": "4cPdPDKsMy5RDVno6BjPLrTUxNYkXDj6HT4iv9e8Zm1musmo6YFJ32k3myMZTE9VS3Gvm2usmvUoJTMpR4C7GVEK",
  "key20": "2xSgVQ32v9eKVx8xnV5THoCwJs3Zq3SDSkzrh7Qi9VwE9w3ihp46d6LFmW5rpTwq6JDJv6u9gQk26dmoTvwDYrXh",
  "key21": "4uCGnJJefPw63ZCy86mKyC4WNftcBTvi7SQVTPd9xxYvaQGeN7ywsF7yX1M4iH6yyD1KYJNHgiySJbJEs3hnvq3J",
  "key22": "3Wo6cAvqnTHYv9F8ed8LTuttn3i9eCjcoaTtEqWXVzkXy9asEW4oPA4DJ9vrTEYPcgk8xmpJQsQunj7w4W1NAXzX",
  "key23": "45yxeHszrKYqkARb7uuo5znbjG85g7iwTj3sxTKWrooNX3e6DkeBPoWrBV2SPmWR5WD7G7noWQABsPjHkMtHdJpH",
  "key24": "5S2sM2eqeRK2WD94H5rqUbAvDjPTiUCiHUshEgiBZTR4WxPAw8gA4X7BgjWQvDb7cfKb7QdJuegqxEhRzy8FAzvo",
  "key25": "2YTbfCPmRcQQGvgpoMU8rXn9sLd588rNxkRzYyCQewbNSsxKWkLDSbS1wowV7hEfztQYuXnsnTweA7ciQdJxHVKg",
  "key26": "3dzafppboHT8JizZxJUB9CcbKmb7EyBLExVozme5Zc8tYpxoYfehbgFi1D1CRxK76yUXio4x1ooS4vvffZBxH8fG",
  "key27": "3mcKSftXNG3jrsb7Haawr7GoMAwUqezDSiY2onwM5Xky81FDUVkKkeX4eKaT71aFcqWQtn6quMpE2ksXPLP2BPsP",
  "key28": "3CSQER32TbVstJupVFqZv1KhWB3Auim3KuKnB6guiEHMK7zpAsKy9W2YPsNCw5hckZH6dx3EZqicPSySmqriGWn1",
  "key29": "syerV66u3FC9aLdcr7df8XEmnsqqWdusiPmuFBdPb5FP89EY53GUq26Spy6NCe8iBuWwsyapumdCYPHHDAgqAbH",
  "key30": "3Gs7gCAje9xBURNVX9hbP721JjxCPVdn8KTCmN8vsJ3YvsxPKWxs3tFNMBQajfJrtYaZvuMMAj98kYFvVNxJZNic",
  "key31": "3aFExoWpYFzqPKCfavK483wAT9ozPNYf1edcjzNVwhhESvywuhX2ENgAgiMrWQgf334mw59TN3coVQK7iQVtzd3g",
  "key32": "4ULzyPEUsDrDHJjyFs4N3fAi2m8gaFLdzaeXhg3fJUS4xRY8oovkAoy4L2AhSdTxnnyJ8ZbDoB59grBcxNpdxWmN",
  "key33": "4MTBfkhhyMFrUJSxuvzTC45nJoZZC6dZzntCG8yKa5ozY2sbDXXq5pzAhu15s9WSY6aU7gAiw9ovqRSphGhmpa2R"
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
