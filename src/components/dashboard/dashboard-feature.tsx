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
    "scEC6Hrt3VVWZufobkSHo3fdWvPu7Jos6jyRnkL8kGej2FvyTGZyoaoEhdscAE1TyaJbtis5YhwDACj8hPVAn9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QrKZZ5bBCEGmShV5V7BwKHNdyQSz4nfJMMu9AeakVGpobfy3v9SQHf4xWUkjkprm8Xus5K8bcAHaGrGPWwhKTTJ",
  "key1": "62z5bByPhnCFntpnPjMdcmu1HHdEs9qBrywUoFNNFWCAgwx3nPbWismbZA9WeeLyJwSYo6USGH3DfQuesNQZUPP8",
  "key2": "2yz729XQKHC789dnzj2APiBRprE7WGK8Qy5jMkkQTVNDXkcVigJpCLpzvjjtSSYz2BeEcHBKLW91v3SvCx1Ta1S6",
  "key3": "8fj9ZNxQVsz8i7WMhMTrynG8kGjDgKeiCc9CprsDFaUxKExmVT9KtQLgC5JceH9G3BDQie9u44kejbX9EWWJ6CV",
  "key4": "3fVfaGrJV6S75gQXy4a5tmweYsqtB3KdRe5LFvaX82cH7Vx61JdiqJ5cHr4Xi1evoQ3gDom9QBXWQgBrd7hqrwFf",
  "key5": "4TdCgR1dXVfzfwJnnmRpWRUnsZ7HrFf48M4xUfnyUpRY37FFqX4wau57BZ4uUSWsUPhAAkEzQ7nAHQfw6kfhqMYJ",
  "key6": "35YXRRT42pXTwwRoaxYZgyi8hzRFJ88WkFanPw2ULeL9S4wtiMwrxeA8yPmfFQaLmyn7ynePWkucGP7jNCwsmdXm",
  "key7": "5EQEACPyXTW4AbDjdkERdtF2oBsL9KSRQN9nvPh4EoKjwkFGWdCf2v6nRyLLfvTEVBtmQ9D6EKzAxm7LN8nPNYNW",
  "key8": "63Gy68r5D3CNL94JAuPYRhRtLJy3BoTqJ7tvjpQE1NZrejLc1zgUkRNeTfeG5kiZtHVXvFkkbDP3VQ6DgMTAKTT9",
  "key9": "5365AURJYobUUPw6YKdp3exbncCBBNEsqS6v7gUEe2vQMVSvx73Ndbn4gsLQ49JRwr55zkUX72wvDkA18bmEDzMk",
  "key10": "Xco3U58xktV6bcYshC9KBPU7wGMye54rCz8jnQHsdfpqJQS6AvB47AXxAQxq5JujKePq17cKFyie5iMGzbmL1c1",
  "key11": "5GyvVPyFbAkXe6PUqUoL8sMhVY7f93EDbxJ7hwX3siar2kPfWBMEVhqz5VYGbPh7atd8Pw6McsM2UessYthaKvHS",
  "key12": "5rrqH2brKj8R4X2JWAS9BVh8gqTie1H11NSguED9f24pHfa4o4bt1NRfkqXTUm8CHkMTwjsqAbK2P4QWGy74sSsg",
  "key13": "3GnQQ4kjPhVQWAjja2JJyLAvuNaXwnNT343xc94PWPjKWG33i1W1eYiDwmhBG2b7agbGvwYLFmYGbhcrMc46SqNn",
  "key14": "3DCwPZP4K5nuymH7aUnaZ5tSPwfazmDnjTg9CKBmGRixgTGoV1XqG4Vb9oV3ist4ZQoL6Lw6B8ZCeSS9gNTAEftB",
  "key15": "hBYh4thpyjvAjagP9UuBPYk6JaAL5TtNkubGMbXF6d2GLH813pSzwtgkDruDFYjMKDBRR8TwmMiu3cDssSE3sWh",
  "key16": "6FqsSDkFLjzNewWxMNYsnEoDmqMBzBrQmbAC5Q2qRhCi37XzeHypnwe5R73FwRVQLxacMy3Unob1zBLrPCvGbGM",
  "key17": "4zTY3TeYNbETL8RuE7vpo2HBY7xcoHWF7sSooFEUJxDY6RknXUdNhXVpht69UKSzWtBgPpSE2TTtpbxgFAVQEwAj",
  "key18": "4BtpqanMU2kJNU8kZzvgDrU4BZf3bQZU17T1mWJyDbJpRm1TETur2caMr4xjACoYBpMsnmcL5S6ZqVxntqRL3ydU",
  "key19": "4DbFEMmqK1oSKQcaqjtsJHmms7NpMAGzp6PBsEBePT8dbED69nfpXxWntdsT3sqSrbNFcBx8srKtMAgUkbvrfgyA",
  "key20": "4cn6J6FGixNi1Q5n2DLgtjKYqjiRxQVZbZm837WA495JFxkm22SMXGkCLEeWz4WdBCvMwnmNPunaABoBvvS28D8E",
  "key21": "3DaG4d2FL7bRH1U2AB87xC9u1znRD6X4j19tDXeAWq7iCQKym3A7fCFRJRH7xNJq2kzwXPdCVA1Reovjgeq3fR4P",
  "key22": "4RtVcDbvAbkk4y9tQLDwEsY7XCimbeJMMzrCRYyAhxSbmh7zsXmPg8FFsTcwaX34W2H3k3d5MzLyLosP3RsYQsa4",
  "key23": "5GL47CUvNwe8Sf6TyiaDXwZWRHGsY4CgGg4nxMEL2a64zV45Xw1dSKBcZhyqkJ9diJqkdBoz9pk4pXhx2VLeQYob",
  "key24": "1mpi8VuYauSjrgHT2oydVemqoPRRxhcqdMcE1nAQTXuQRpX17bftuDjZoZvtDScmp5nxnpwNve3DxCaftK76soX",
  "key25": "5F9uRddNDkaCvUpB84YshfPt2BYKd1h9zf8hW9nm6eLTmvbj9sCodbWkN18aWiARNHawtdn1q4B9rVFujBHKmCtf",
  "key26": "5tTH55aZ14bdTyVrTdLteNn1ffSesEMs594Z8LWSikTVqPC6U6YVRnVqMm53TDBg6vgSGGXuhY4ZLcLEzm9hw3GF",
  "key27": "hbEU3aEtJS2XWV5SVZtEXScL1g1TdbRVt5AoTf8UmahHW5uvhS1wYsiqsSTFJ4RLcA9bcVY1u1WvJff8mx59SiY",
  "key28": "4AfMw1gtVfqhgcRBQ6cqCPMt76UYsxdaufRCAXAAs66YxmoRej2ePjMhvGZJM2K7y9QZBt4hfKk9VXLBSU3kFEXa",
  "key29": "4qW1ZFkzpBr6sgAcetUh17UGH88DUco3RdMoDJve7cnWxqB1sbCnMnxJEoDoMHMjPV78M1SwFxNwAHjEVp2pvAn6",
  "key30": "4ruWoqvGhNNeENfiqJ6aJ4HWPpgf6YE1CmhX1FngC2ekP19abX5pHpr1Z46ztVQiN9aNnvyE6o5SsNH5dv7BTpXv",
  "key31": "535wRF7oSkuDeSUPsoMK2SVvkd9miBH6QZ2XytoyKa9zqzEmjQ3rpUZDVanHrieeJipCCz6FQbUf93TQVMVBYG2o",
  "key32": "43A44KjegRixFj2d8CPjQ6D73RAGnbnGVdQpzrRDDBQxJr5dzenT65CzdukRPHjSNN3S9dd9DKGS4fy9hAbLTW6U",
  "key33": "Jq2mumc2s4AahMkmuskLnCBHiKe9SSDMKubS45yPE9VJgF8gpftg2wSLgWpjob7q2E7iy5nZbqLqevscWqc1JtP",
  "key34": "2yzgJYsiD5RPnZiNJw1nq8wp2zkuP6BWjb7hvxD2dxu3wzfffSKQduHzFaiSzpgqfuEtrbHznj5oY1QUR1Spuvnn",
  "key35": "2hrL9Dy7NmTqd3KHFxcA8jtNMMbRHDid5Q6VjuJrxczJyKCazLeLBm9o7StfNKesobHbotyHuyjmZchT3u3kANCJ",
  "key36": "49QSwygknGdyYKkxp8bPUDacBsLwzozUUqcTCJv8Gfw7V2b2Vk7jEC2W2KjDDqH51odxzTqncgqtaxVifWRBzBgH",
  "key37": "5tv5hrWx136J77ann6oXwhZaVvYL6sS5pEahtCLy5N9ZptsSTp5AT53aZJr4pr3Nd1UTMUMN8fH5KeSAyiwNJqcC",
  "key38": "gsRYP9jNqoqhqbPSkYZC3zo4DotHWPp9c7Fx3c6xmPxMmS7d1C75vjqgXfwjhnzvSVoXWDqoCgfumxaELHhcdRS",
  "key39": "2XjJ1DQ2PHV8zcQBruV3FYrzfmZQjoBcKqKPsv5r9J8W5Tw9B9iDWx1T4YRj8Zt3quvYnRAxnUi7vML6hZEDASaB",
  "key40": "2MwYcZCZ3PgNXtzCtHQ7gGJtchnK7P7WknKWZid13Pb7NxTUe82QbYMpBRpNoopdqFzsX5Zd3BhKQN9K1AjUhWdG",
  "key41": "sEiH3T8Bb7FWtXGVsyS1N3iu5Fgr4J5c3FPbUTVWw5mVCAerfFCu1uBZZUjeHjjhcopzhC3ikxrEChXXZRcXFDY",
  "key42": "25kwcyYHs84PCQeHBg3AW6wph4VrqfsieAEBvTcES9kFZU7UH3W3a3NSgbY3hRQ5jG6VSKVjGLdrFzGNJkpAU6et",
  "key43": "uzZQNgfc7XtVLtndjW1KEzY81q4NXriL2aYLoKPjkU1Bf5kPxEV4XAsqLkN9wLnBBBfF9QV86mhzvAAkUfq1u8d",
  "key44": "64fe11CheNyWHPwF3hrBQuFReURYVvaD4arqQiagAg2oeMwuFTnxmdHTFKVpByTzTjSYk389BvPbZDHeRM9TAQXq",
  "key45": "3pJWRVgqZDr7MV6w47ztNLg1f6xtaxAZWroxHWLFKvFpvXz3wZESjBSwrbVAHueuLAGGEecbKDqzRye3WrD3axPc",
  "key46": "3Hi9xGtxh8DEzeMTUgcAoWyv1aRY357eQy2uEUBxm9r7HfXEwU4JZ9eBHnGpGQnuDj3NAjkLP3La582bw7xUcxDr",
  "key47": "4Zswqcbzhm2LbTgLGegEGe7iwZUp43MRCdzERZ4uM8LrV3Kyocg5u3dbL7YJh9jU7yX4kcp4XYgySSoTujdQRdXC"
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
