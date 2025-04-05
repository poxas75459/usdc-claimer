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
    "pq5DcnLV2jo6gWDw6CKCkWdMmmvquyGix2uxtJomqSUT2szEe6MxtM2887ec1YVHkGeW2jua9q2GQUfseCqYTwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pttTxyarnVY4ixX3bzHtua9WXuBSJxNLmQD3XfmQzKVMW1NVS3jYPC4NBY8Z2BmV2WCyi9S4NLpZ5GmJ5Q1nQ9",
  "key1": "4w4BK8FRtkoWQNzfkhUGcXqc32kUdYoBXRW7i98uh1V4xzWXqTKfLPELsDs6LzMz9MFJCssSjAtdTVbjajGg3GPD",
  "key2": "2QAx8buqs7m1ajTRU2EcNzKGkJ8upM2CH3eXmr6XvobDxE4WfgU6mT2fkgt8Piiykn3HdqFYjZm3JeDr91Y1q79C",
  "key3": "52wsrmL5256Z8M5yHRpSneqDdn1ssvFbTbExjD1xBPHZcw1TzG5tS9JvVsdSt2UEgmtKnWgEy3HiPy26F2QMCvbV",
  "key4": "iBpbtfXTLL5jfJiprfRaVJ8NLDWTTdf9TaQ9rnK6DMxhyEiN7VoZjUSVs27DTaCf9sztyUZngokwLmhGM927LmL",
  "key5": "3yDFaHAgKuxU4aJpVSidLzfnHNpNmxu4ktxsVaU3D6JNtZ5PVchzyB84PR8rPkTVFar1M1m4obWExcCmtUGdsSp6",
  "key6": "56sh43PFsREFzwXKcmgGJ9hZSNq3zRhgAuvdjFvn5wF1pwdTPTYgzwwaYw1VTXx2HdDjU4cvAjBfbWv5QADDpwft",
  "key7": "5xtSoTRwbe2gBcxw6aP7SCR2eXNDjEmehzRyMqVd8H1195WYzLXxTmosoXKwBY7MQmi3AzbGnWF2uBh9c5pcTkLk",
  "key8": "4yhb9hYqrbJAiazfJ7PbLLEv8G6nCqtg9LqpPZ368tvacUwUaXsEzapmm4YFvJHegj7kvzi1q61aoUXTiB5gfJfN",
  "key9": "4zERhdygG5tkuwvN6wHVRaR8oXp1preAe3hLmbwUqqUYKBqemAcryEXJsByni7LUVrkAfmRTBThHQPwZkUvvcxNQ",
  "key10": "38ov57RZv7pVmXtfcrfwYdRtbvfkAPHevQFFRypsCyCN5vASvHLQCDhDfJJbiKEWzAHVUSeaZVs3bbdx1XHm81st",
  "key11": "51hNFxxB8mZJWahTPV4WtEdtnrWayqEw8NyXRTcCm3Nee1ExbL3XVwTLkb6qCULTRQpuNBU8svg2ZKtjVuUeb1Y4",
  "key12": "jaLG9Qjc5P7hLTdi4bEA6s9matV4arynwqGWh9hYefS84zV5JA5ZsmQeGL9wNN2Tun8DPQnt1188Uz18DsmoKJP",
  "key13": "3HxN1U4yLHjH3R47yL623dpWCtBQt2CxKDFPhGFHK8CqKfBk5AAWaQtpxB1cGHKXV7v6dMPU9nyK3xQ2pjG65ji",
  "key14": "2T2ZkB2AcHLejMzD4NNduMyumBZQXaj7FzFi2PL18ccdDWVRhe4US2MBTqK5eETq46oU3Yx8349fggrxQQnH8972",
  "key15": "4qM6UUpE4MXRUX8T6QjniRBCejAeVgYqiwjTh7qfmVLHdcdTxnJHW7yzu4BXVrEoXre2cgi15WxgXmcgDxpJnZao",
  "key16": "3AcbCNYxxZ1KJCuBeZYj9vgdEmqEzxffZhDWWafS6HoF6gzieAjk6mtd2voGnKve1FuPCvMfrJyEg7Q61zx4Qu3Z",
  "key17": "5VYNWueeJHwCxWnngU1aVeNJkgwzpK4CoWLSjNwJxFaEMunpjwdL68PFxNhtPty3LAGGKzbKnF12mmdXqCtfSBEW",
  "key18": "4BtWLcm9knFxtr331rrt9Qti3Aecmqe9B51EitRZnZjx3QZ88QPp7qwySLFJQkQv9AKEhDr9pKRQmxthSisR6pvf",
  "key19": "5qbujdQvQHMqpXPPNjRoNX68sB3oPamxLTJStXpwAzCZAPd6kKTZis3HFWKCqCGJZ5trtdCcxcHJLBUN3euTmPfh",
  "key20": "bYBzD9Lh2k88hg9wH3MqxtVPHYg34cBtt45heBogNMEYq9S6WKr37fXaaS8Ttq3Via3pz7pjgeSFP4Q29YQoHHj",
  "key21": "3GJuH5ShBe6wEXgBohhQ9jccUZMA3RbYhRFeoZAjSkrbYrFfMqHBdiDjWvqcgcztHbRuP3JQsEEzFB2sydyL59LC",
  "key22": "3AYLhuyJoWaqN4D5YTP8VAUKhHGbbu3F4onzUy8s1rdamuW2JxSvaFwWA9F6TjnpF44oSpiqCPBhaA3GDZudhZjP",
  "key23": "53HbFkAySyhkF686fx55VmqjWpHZ9VeQ9kYEt8jf8GuQdADBdD4zZmPDFdQWxtWSp4CZkzhHgJgR7PktN9gYtZ5M",
  "key24": "3cGM181TJGMPr297TeV7F2XacSm1vu6bD11WfqPYgzc5Az5Fn1BMs3PPk6DEDnKioTLavgdJ4WHp3m3BTJf5amdL",
  "key25": "53jy2vjsjvY2oNTi39LRrhmYPRY7DbVCrNUwjcsHkP9kw3tpx6xdWJ86UTiTDz54pWHLc9NWGAmWaevYYnRMVXPL",
  "key26": "fDLtCftYHsrUhwDte6okoZCaa1HCpV1kygQ3nFb536iJC4tX2yah7eAvn3FrfR4CPL5zvarYuhSfQpAu1oy49nF",
  "key27": "4nN5oQzhjMUsQ7pzmYmMnzAcoMrcvwGPWAqoSfy7fXFzErgfbsRdKqYTKt5997fvzBgXkTUeZdKBA41rffb5yR18",
  "key28": "57y3CJmGx2Fr7GE8bH1gNAurFuTPotJy3GqAL8EoQQ2QHzoyMhK5rJDN7KtkXTyQw2BMrYK7TsXgWi9kmyDtJM2t",
  "key29": "5qqdVVYKYgaBYhfgb5q1suV2kXqdqGQyHViugbfwZmTWopTCDa6xFj5x2fqbfkGnJBLctLDhay8cRLrkG24nagov",
  "key30": "5ZKQ1BbhVBMFkFGqL94onNyHKg9w2BBtJNeT92gmd59HoN1MnBUWDCRyC5EDgPKmqvaB5Z4tQ95M6kEkHWFSrsxV",
  "key31": "5ftEGWZdxLR5fjuUwrfCg1bCdFsGkKUhdCFA6gbU3uLGoWZGsncS1YwTvDz9kbnxZVPqgnGnFzsHdnf96AM4A1sq",
  "key32": "5FDGnFZ8qFhUXR7P5ZGrR8588hzvS5NUij5B5Z4xbPkvaeULqvFUDQYJ5XoQMbFSFu5d9zXKGywXsY9N4sRY284b",
  "key33": "5t6uAXfpk7eCfF4RGkgvGfcXbxo7nheUbjKbmjVcHPBGdRB3BooBbfCn5s3trr7jKQyVcZ4fKvUhhzDLkquxAThB",
  "key34": "2EuY4GoEg8UovCBmxugs1rWHCKLne72rDSJFWt7C1rMcvRgsP9QhZSmhR5UiKdTMrjaQFYFNpKXvuwbpLFbhgYdB",
  "key35": "3d8PSk6mjCBswoNc6TaRrPYmLHxjwRitdM9PszZsHhVvowTsLeujFxpZyNetxt5Q7hjV4r5BbPRLpTCc96bTBmSy",
  "key36": "5J3UnHDUgyy8oH3chVa4jVABv62JnMN7AGFRjhiWtjgUt8M8wLK7i6UddeQtQx3BXh5usvq1pKPFEKgGoSxbec4f",
  "key37": "4fVDBPiQQZZ2Yt6E5cfJDCi9E6AejhUF8FhipcptfxBv8KTZuHNsBNETafPtrgX6pQzUrEmryguaGmYi3jZ4S5Bc",
  "key38": "284uHyRXwMkZiFBcovBBFQdcVVW71mA7yuCvHiEHcZFFw35NnEhRGJTL3zFzoXobiQvGFp4SaBvWfSJcXi5Kf5Qq",
  "key39": "3qMUeyKN17qZitx49NSawk6K7uw31MHUkuALgARsWsxz1FUiGfrYjV82tfVKjrgDxHXkaZ8H5Loqs3ub4e2FMm8d",
  "key40": "4j73xzkRmDsqDt7NTFavrV6SWvdKGWSRXAvqjcJB3QE5axsYYvuUAFJ7M9sYz3XVXwgMu2VsceaW1vN2dCQ1yoDY",
  "key41": "LkNkUaeq8LAwtcLhszq74GKcoL77w2gjmGuvmcGYdCHxi43msza1eBJJg4GHGtG28EwJ9jNpB3uipuPhFX9JE56",
  "key42": "4CrSe4MH4sLPRaoqu58fbeRYYYQ5wwZFB3Lf9QyGLUGqGYt9JW9rAQ95AegFmDewRXHcVM89o42FZBSRp68a86zp",
  "key43": "5ZE1AAuAwmkcThiY5rEfno2CR7NWvgcLwiE9BcpdkxycowFawSfbU9QrZ9BPQqTbHc1YsmYAZx2UxmyGJSWurotM",
  "key44": "R1RVuhwTS85Fn5Sna5fujRYnKDthUtHJgniJt1D6MuJbSP3oauq2812mANySr7ud1cAmmNf9tC7Ba6tqfzSvMSd",
  "key45": "2uTGrEse98JyxvKqaSNnojL2Pzm3AYK5KcYH3cH96R2eKoDYXCz9kTibFkSzs6usgwGSEaw6x11rJxzvpWEFu5XC",
  "key46": "emWB6iUUcbnVGtXQgNsWKeDPTTSGtz9ucHxkgQ9ANmTv1ZoHa4xKE2j1EJwjWT1S9WigrpRxRf2CP76ktJexz8u",
  "key47": "2a7eqk8CFnWDkGZM7aVrwmRt45KSUrdYoV7pkjJuy72hQb5eWzpqWddSrWt8QK5eLmZPgTBasyQT2XoLKnPmrVNy"
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
