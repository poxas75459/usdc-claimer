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
    "2Vqjf4zT2NWdL36k1hGAYzgke6zpfrEUKLLvvtYnfb2FGLH5U7FKAhWtXeySr7t7s756JF3QMhYmQAipeUWZabSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uCbp6oEHoMDmxp7hARgC78VJKhuLVZbqbJaq1f9usoo66Cc6mNiNVa7aCRp15LiphH4H8dT69LpXGgLc3NWP9WN",
  "key1": "2HXJ9Qx3opGu9hN29uf6qtr7zGF6iG8AYZC9SiAme5KyzCyTzfpEkpra6zWmFbLj6iXneMMZczkpdGmdaUZmqxKj",
  "key2": "5rGxgkysWrK6dX5FocTf68bYjHwfeMFUNW7oDJ5n2s2EwBi7sBSj5hHsFW7YB16a4NwYNU9Z6tt8HsDjyHJyc2z9",
  "key3": "4AXnmmkLyLE6CcEYMKpsAGDhLNeNgTAt8hsNcNq8bk4gTubPkpiqA1tSeiwMC3mt8rhKPQ8RFsBFrkVoGE2UY9Mq",
  "key4": "4uyC66ey9QWQaoJixzVj3vexWeWtgoXzaoDsj8RSi8GeBVBPPVMz4HsroD68tMtAZkPZyXmyimGuwp5tAjhPKkvp",
  "key5": "4jqyx5J91X97nS1m9nZcQi9XSoXH8oVVVXPshrKwBYtmBJT7ZNsTPUxwBmDR27SDuSLVd45nR6bo5SSPG9SLCYLU",
  "key6": "4wYCa26kVfK97xiiSe5fnYSCfbVuHTsP7D5PzgsYCkbMaQ6U1MEskL1mASG221gfbTcaaqB8VuEnDszKBU3kVp3k",
  "key7": "4cYmGRRHN8vesxtQYoH7Yc5t5CvrCEFTUmXypn666i4oir6TbmFJKvpJ6woQ6tVXLtauJL9JqVafdiUGbKCoL2Ti",
  "key8": "5MnsJKXsrLm3ZwYNsSrcta6cdD6k8fnFamNHCztxy9eHs3DEbjWdU4xPqbExX7GBgWevxwJSKo3sZzk8mPAajSsu",
  "key9": "5VtmQLuR8cWTcgthUeoY2ee966Vv48Mso2yCGjXjz4jrUYyVHWDKSUco2CXtSzRtMwWQtqJaj3wPrA4X38LeffKj",
  "key10": "4g4titeDDJUpzcAnv66JpyRPgY4ct74RQ5VmDN1gdKhZQHwFGvDpg7ooyafncH5cKbBqiaXCixe3Lkx2DLymwpmh",
  "key11": "2CdX5sNxteoxr5k7cyiQC1XHfubqKs3xx8mjXrzMccxeXEYfMRUTBmS5eESw4RtLXGnMb32ZrP3Xv7HrZSpnM2oY",
  "key12": "BvxFYvioLtjeugDjY4m3qvYwv1Xuv2ayCoZQt4HWy5WSxAn6nUxVTk7Qze1HJTuHsEyk1qjXMTFALPcY2LX6zMp",
  "key13": "3qtit37bgADsWSUPvfxdJ4TAwC3KExJDAFhtgvD2ZUjzXcyMevCScQNETabspuwgVY9H6MTucSwScjgz1UwSLyrT",
  "key14": "4v1NaVakk6q6P9CzHvvmqDyJoazLBTsjzRDgXDP1LNcS7DaV8t7WvLeRf3nyo3jUChpi4Et7fLPpa9RUctB1saaL",
  "key15": "43kwNxe7P1U4wJxAf7Ve2ifYTVRxVtkyGo2bckJVQkg44oaG45Fn1v3PnWryjgV2wZgEQS8nyRWeu2hV9mCD7eSZ",
  "key16": "4xSmgzPw1VHctxAHWT74i16HipqZGBefrUuhuEzdCSxWPi21HQS1MfHPFGjXojWpYX41JS7NfenhCEecrdpyYK7e",
  "key17": "4R9JhWpH3mVhQJCn4ot89yF8gJNSj6DZbRpUhqcpkrzBMbJ3dyBfJwjtUde7FdTNz4zq5Jj1fULfqyAaU4QrdtTT",
  "key18": "5NQDkbqeoGvEhA4AehKp1t7RpudT3VKnXPGbLBfkLpvwXunWv9jvdaAuQNodufygu22Vu7Ci8ubiyRn85TPHuPJh",
  "key19": "2pp7s7NNAMheJgKT4rVAU1hFL6YYJGjCTb5BjmXkPokvbo3Yc6HEwm5RPDaiRCuQ8yqgHtgzJizfB13dC7xyU5fb",
  "key20": "4KFXGRrLUEPfZsoyfYnt11cpS726yFCUKmD7ey8pfqp5jXP7KF4hhsnuQzR5Bk4i26HdZ8yhSiWcoAX4pgmnS3ra",
  "key21": "54MRf6Gfckgmp8GnFA6mnH7K2jqvZ11BAYdZm4snihXfRhQZK83hTHnSB1J2iHJGDVZLGtLLVFRm16XSHyiTgPbv",
  "key22": "5os7vUxGk1jZuCvWd8A4KYkiwmsncvoZafxFZjDXgDSNc9oCoAxtXpsHvr6xnuP9FJdqXAVfCQMzfQDdGFJTFwis",
  "key23": "4ea3fASt8M1pcrNH297QuvkRx27aaAnYniW3EjodnnaeVLdu21YLWUR4AeBJMajohxf1xXv5JrQ9CxbWBdxSPCTJ",
  "key24": "2EdSbtYnkGGtBoYK5yWzXWS2FdPVZUXceM1iBNPSbNWRKKoER2dAghaQYqPKdEHyTp8KcucNMBZoKBy8epi8ZC4",
  "key25": "21B8Xy4CFfZsjGFEBEzt5QqaHsyNXLxNhoPJBiamyNkVW6xyLFB9hCpuSXUt8i4fDGcEdfdckiZVQ6SiusWEUTZB",
  "key26": "2yb5dXxup222onRKLJ4SR5yyn1Gb6Pb4sPK2chxzqdJpLNsqppk7Wph9LEbFMEbRwAbcMuPoT9zvs49Jop8Xq6JF",
  "key27": "zpJ49j3Si1ehJ95qTUDbPuPeW8E95QwBiTFcW5N35cNSPv786ix8286CwoAGpG7qGAeM2AA4igBXfocKEr4SfYv",
  "key28": "53PK8da8Qo72sYjQv22YqDA4Kj1yNtXjLhMLtfH9jsdC421aKneFFTMsbD8GZfAKaJ15QxfYbztbm6XRYRUFHSk4",
  "key29": "3tDaPY3TnAWu8VhdvHYWT1LD5AVaG8Szq7g23dV27PidVTRxMbgZy4pQHFoUmbQvhxMW3EunfUgSZyzziiwPakxG",
  "key30": "qbcXAmAoPBwGxsZvB4m72pCAhBRAZiCUWxco6uouQv7CTbNhfY42oHR7MDGMYo5N4anYfCK1Lz8f29J9k2BUe7F",
  "key31": "2EBupYB719Mu1fnTzc5D29sqhdrRyCE95aRNizLuaeqPekebA4muWNyrHpf1vn3T5yeRLjx5cqy2qnzQZWtDDyDJ",
  "key32": "3sidxMZzVNrx9TvuNaCTc4rPvxKGhaiGXhuRZsWvL2qPxgZRJPmuqcsjYLQoK68AN2Hx9VNEYwsMBdKkuSvoXzyo",
  "key33": "5Vsq4oHQBZ9KUxS669RhXUbSLrEunkTXndQcKNrPpnEWG5SSNpXuGte6dw9csgetG5sxExzacZt7MdYaxvYmzSot",
  "key34": "5Nupmnywvv79PDoH1bSXVCZGjXgm74LXPTdPdKmbxr6bU7gVqKrpLYtWDErencUv3QHKAbUHeb1eWe1U2WyNR5Xi",
  "key35": "3iLZku78eWu4ktVNUk5zk6prjgMqvJxAmjRQA7Crvcygh6v8wKXHmwuGV2vtcr7odfBbgUrQ8uf1nHgg7FNCzr31",
  "key36": "4dnYcy7YQoBtKwnrB6kXg9Cqv1hEhrrafySHyr5AqLp5od2sRE72MSmZLY1Lwg8RvuSWj8WXh8LC5xTwLtQk9ErP",
  "key37": "4gn6kjizbZVc9YdiWdV2x7KRD6qEh8p9RDkezEUXyg47TKS9qwu9nKR2N7FBr8B18Xq13W558LNTCDXq5RePbJak",
  "key38": "5ujQY1R578Ltjj9rqtA1QgTmdo3eHnnKQRYf4uQgkA1Aka6XWaRN1EuL3H12vVKbsTXdVnrd1mTo1faVJNYZ28X8",
  "key39": "5ACjwH1gUAU6uv76owKYs37RU4FfxeraLyabLpSsy5et6rZJb8dGeVNBCgkDVP8zNPrub9LyT7ntzyVzeJqRnaqa",
  "key40": "2msbJzSYcaTSMrG4pbCmqKMisEEzBpL2AVZZWeTiLFBTZyNwCe6qSjG3KypU5rQjmjxcPwDdyw95XN5TKp4FXdyT",
  "key41": "4UMVu3ZdX2qAU4F45oB3a2wxFSmEoxXAjvmgNuGGnZ2TrDLY9Z8UJ1hMv2Lpb48MscnZfr8uN2J96bJ6D6CAAupt",
  "key42": "278SL4HUro977vreMi73fpFQGAo2c1CsajvA8DgZW2Rx6dftV9cJHxhDpzApaHzDkiMZP6sAf33zzy6BVnDSZxbn",
  "key43": "5Ra7PcKuziCAPpSVp4vXetjpENTao4tG7zoDnhSEjw2jqTXWJLg4wDwXEYu21jv1zUcwzCxUerjEmiSVp9MupMew"
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
