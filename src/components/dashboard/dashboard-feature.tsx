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
    "8yBTZrXFi5bBjnpops8jCVX9XXcZ6cKEZ5Fp73267Ecfowd7TMNcMkG2m2XJoKFCQYL46ZRqdaGH7FA9r1gPqPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2HMtJZbYwwaeo91HAMxMjPg11AvuPyfQB46afMb8rkpLzv8MDnauuE3V3g5hibztjvbCZvocwQ92EuWJYwK5wf",
  "key1": "2d2PQqpkzmRn9HzGbnZ5xQ938JdbGF2TCScqift1bHaTeVhrYHf6myRWP73HKo2a7BZn8cxp8mhfP2Ym6g2PJttJ",
  "key2": "3FgdPUBiKHC1DjxNPM9KP572ZA49jWDvQcCdcboYUpTzhtUwCn15qWMqwDpEkr1ZRa6wuEUsdgFjDsmzbW3HE7rF",
  "key3": "3LRKwmdvGxqpXiZguoENR9SY2facJrrGEPPsxjrwGcKH4kiGYfZVK9Gi1UMYs9jWBxm61MqtkTWYKjyV4uUeXRGH",
  "key4": "1295QYsxMkETUyYSDVzq7PLpKAv21Jm3EvCGG9xMKGKLALUTHPX99mZSnisaQSCPy9fComSzaxMWoeLYgSEP2YhA",
  "key5": "2kgazc2UsrJnuzUrKCkiXXpK4PiwjZvHfAtuZK3zAMXhizUqh6fg1bdWNEHBY2nHtRYLeRQR8KQSnvVTRe2qdiQV",
  "key6": "2fPB4CMezt3RqAnDGkgK3hAu3X6tTgVmYBzjN1nSjyodoEpNLc4wjGKV8K6GMLVSyRghKN6jkMWqkgrabhM5TZ7F",
  "key7": "4wSGu1rr5MMn82j37VD4XN76BLyHt8QHdxMsQ2h3rSDpLHHim29teUVuPhYoUZJb6HARCy7rtC9jPkGjLjJoJjPB",
  "key8": "39nFLfHyiw5jL3tqAG74VhvpHdpAPBtYDeLsw4RoLCHEJZmPL8yeH2WAmawD2L81v4DrmbJ52iJMedEE7fMEJUXK",
  "key9": "4Vwv3zgiS1wmzYPuBubmagJs82S7SXBPCeiD8DY18wk2eZDztxSMhepGLr3n6A5wzKPNCAX4NLZdGeV84JXVnmzf",
  "key10": "2agEWZvVHzfVnFqSNW32AvsuNRiwaRmjyRhuCpZ7CqMu5WTpoGGP46Aq3DR5e7mzwHfait2jibxYczMdY5zrMejA",
  "key11": "rS3HiuFbkzYeZMf2oWqaE2CC3e5y6Etwm5S5wtozPsSWg3hhoQfC95RNCvm3Hcbe1p7EgaXoWHGDSY6YDsTRjCd",
  "key12": "3HLYhnscBH6qXbmLFqSejg9vyT6vW2uoT1XAN45p6xqyjfPEBh4RTApcAaNXNEAXfeUz4n8govUtRMH6EsNwCzZ6",
  "key13": "45bMc5faLMXRDX8tsPcpPiD4So1Yo8hWqgLvRDzsRiZeLd1C8qDh15v2zS9tqhekqhiVAKxVwdiakTTVkMB9zYEq",
  "key14": "3PVcttN5AajgVaF5jH6VX8SBnkZEQnDHRS5KpATMvtGffLbnuAsXBodzB7ywPd9LsbnUmsJ9cRMbUzHiXtJ5uWCX",
  "key15": "E1N5gP1zAExsbQgjopfUkUSVytmdjz66MH6g2oBeEfTnBdbzgA7rLc3sGAtrDgyr7sTisaWkdNxtAbBVrvdqCvs",
  "key16": "32prWciBLGgmXpBtnTxWLseuHmNRuP1EJbdnh2bF1ZAZgRR9FKXLMq6nSwXg5xCCZS9ZbmQZsoGVPGWYaxt7UUjY",
  "key17": "3figTonMM793B8vNdT7dXesbvxrRjXnikingRJCNRyjQmPDz41SoWin31GuAhLq49QMwFPicnsWMRs3mfYsTS9g1",
  "key18": "4gQbi75Q88abTX4E9CW4EPPAM2vdXnJR4LhSFASCunJWQEwFSVtVdeenUHHJgGP36VKfonuLNoXieQ5D1nmEKvw2",
  "key19": "bFAKUx9Zc9MRg6c2a51EmLbgozDkxKGdRamn81cSPayxwd1SHsXpyuEzDGS4qECQDbyG2zcCHN4dCJrPYVVSauh",
  "key20": "57d2tQu2dsAPY2oDW85fytziJ1otnd1czFvtGByETLk7Qfgxv2UyxcmBZGSrkiqLqraeyCfbA6oFz95ra6pRsznb",
  "key21": "2mNNEXqdkCRPzoeaVk8yfuhqrsgMCzQwjeAinyVHAYWKM9WXcPWswuogi5GLykSVrT9Z5V2iDjkbn9n8LfbeiGgG",
  "key22": "5tcnZDowcfXLM3UmZ8Lg6onz4MmDMLKtKMzZADx8zUu91JhWrCQJ9uBCuoBaSy3wfWegzEWBGJE8yrncazwBJayN",
  "key23": "2jvzjudooZHnGBeHwy8axL2yYBB1DHfpChFtJ8mGmKjNdwBrNbVpoHLY8tP4NXCid4FCUXCJp6ZR76FEFHszuym6",
  "key24": "23QGge6Eh57URAmVEsz2YJXTEHsDB4PLFqUM64eNrx5PBkNSvyrHRHRmuFZ8KU3jw8HHLcqbgve2ZnybcbB1ZZdc",
  "key25": "127FvLLNbgc2srCdk91LEHE162dZVzxeM4RGEGJKZZKHKuRseqr2EvzVM1zzbbsM8GSfifYmbFg1rUuNMvxWx5Jr",
  "key26": "2yBiqf6yKcMjVLFvYJ9ShEDXHVRmCFX9gYK2eyZioNVmwsGZd1LXop2jstqBQAz7ERpmLK35ZgTbtswTWC2qgphF",
  "key27": "hV11zcLLnLQBTWe5uvJFH5qQgzk3cwanUopi6XUN5wsiCoNSpnA1sAiQgUHQicTCsfkv5UdFnmsEeaXwCn1jzRq",
  "key28": "5wM9p5UWLwnTxYsGVSiHVHWyDnE59drMG2RG3Y6x9Nb182aL81QYE3gKRrtWr4pdsDwfwm4bvfcsBBF6evaLaoyV",
  "key29": "4mF9VFJTqZr24diTxYJJfd6GqKtS9dwytKbPjrBVt1MKCZi7s2J5b5ndZiu25bzDrQjrwLQUV2mfSBskqV4K3Z1d",
  "key30": "3XUcCCi2ZWm8KCuymzDEUZSFxBdqLEaKPfYzf4LjhwQcMUFfNPu6WRfH98AA4hxsXXjfhVhDUbjpZiKJn2w4kH8m",
  "key31": "39LREaiGAqVVEd2L1Uei7P9k7tCEGdhs4ib6jkLjZgs7njwMjF9mj48NtpC2c71bKZufb6xcDCkMFyVyhj86YVz4",
  "key32": "4cgcidJf7Emz9c2Pw4KG4h3KkuzLm6C5Lx3sXmjS6TTXQpN7JQFwtXvJR99kzdFbz6vVnmh5JxcCnsTVvzHnP6HE",
  "key33": "SzVJ9LQQevfADyBPXPW1y6HHwYfkUBCGDD6hB9a9sVJyaHh1Lbdxo9JXs4EAMhzpWSRJPTsbYvN5NmsQvBzbWWX",
  "key34": "2p7Wk4bGEKsMWP7ZqB4DDm3PUJ8uXhRqD4YyDB44qF1FuzpP819GQjw2STzEpCPw7dymqgN9pkBuS4GiXgGfBeqQ",
  "key35": "4X4gTiqu8hPbKHLbyTwbv1CBGDWnJJtC9rVbG775kH8LgmjvVQkm8xmVLDMgEKuATsV794EAQHkWdVtf8wxDSaXZ",
  "key36": "3fxspX5j4c3xunz2wJoEDviKVCiZ7jMFci1AKrn2NPFdviJwKmjsfWJ84buHpAfGytpvzQazAgxo78ddZmW51kxB",
  "key37": "2KUMoiqWyGs5mUQYF6hZtMFGNQ4JnBajtudj8PnDjcGdX19fmnGWK2QBRM4VAofbhcFijANDqcEkDbzwGsAsc6J4",
  "key38": "3dZt2P4TTx9VvpoAsPK7huUb2QbJ52cio48W2WMJaPvAHdMAaZRpArBzx2SbH3pEyi8BCtkRT5LwoQtzQ66VZeve",
  "key39": "4DhgWtA4jjSyURcf2GY5sEjX7xNvsBLx3FtnpiPknE4ReoKXxbjewfakBJkT2edTAYk4prJrisSY3qi82CLDceNu",
  "key40": "5zZzq7h3cHK3jW6h8wZhUxGXCsmUa2Mqm9vCGeRGFTyuj9bG2kDnYtam26faBX7mTne1UwsSVZM8UnTHM5gUL4wP",
  "key41": "23FpXuk9Lov7wAsHjjfN5z1MDfamaVQTePsSYhDaE8NCSxMYbCAKqTAPFLRH3eGKANLCantCoAae98iD2NVjruAq",
  "key42": "45ieHBFDJ6JsNDs8LaJCfRkZ78Pnx9g6EvzmyUA9iQjieYF2K8N5cV9kUiL6QyhJsxb6KF2SWytc7TcJLgGWaQN9",
  "key43": "538pDUYJAwVeCKu4VHnWQT2x7WQ3L8qpSKyU8nYQujQWHj1GtFvLtigZh9WtbKMEgoxNsmqUNgYmd4n1muJAHcUG"
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
