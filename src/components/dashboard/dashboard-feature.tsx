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
    "5oiUSEFaBjwHu7MQGV2iHV3967U8q6YFxZyJ3XeLnExknULew2pzm2wnY3Eknn9thLSBFiUdr3fzYGiPzKp9qTKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPvXtD3KrJk4ZRZEDQsTcBJVqhiF4hsX9tXBQdBUzoR2bC7aJGzkks4KvjmBZpf6xvSM8vsVr12Xcn4AsZs5ohF",
  "key1": "3rDcr2x6Bn3wUXx17Ky9gM4sqS5PWagLi7m2siWiVZH8DpLMRpPxWm3sANopbN8apwbGTfNBNW9RD7p25NQmrDf5",
  "key2": "3d9SFiy24wkcWNAYLS1ku7WVwmNaEeJoQSnjmQWd3zZ4w74d6VRcAWL2yQFoN1WAiXBpXyeCnGaQm7mX919yBWHP",
  "key3": "2uPVzErHdcoxywXPhbMKrzYGK6JY1L5vDsWwejcVJ44thGc4sJGA2zmDGqqXDqj4RucziietyhC2MjEcNr1jYWKm",
  "key4": "5aBgDGbDofVhEG2WmUc9h1TD32njWmnH9s6nHvpanPMKgbKM22eFDjw7xxVdBfUc7M6PXVLdLzrpaDKnCE7V9F7C",
  "key5": "5b3oySgF4AtMf9ytYaYFUV7jZvaUXn1b5JDXBBDs9FEiTQk7d8oe2LPhZM711ubm83VpFRaNubTRvkPrqwsUGY2o",
  "key6": "3oD54j157FZtyPQ51CcJkkKQaNxPcU73ngn1PvJt5bQQQFohzbeQQwhqLkxmAywdWssd5tCfrpBDrRwDnzu29hrp",
  "key7": "3oMMj3CnZ4saxDqX1iSnL9YhKHdqMkfCmBARbojBD7bqdwkEWWf95Vipe8Xii2cyWFb9uRRiDtYrEoXb8Lc1G9jB",
  "key8": "2E7RhZh1v3ZePZ2uKT9j76krpoMuRxe2CmTFgWKYugdD5ctMFioxoYr3hvyFo312LAZmDvzzJ7ptaxbbCRrJsDqj",
  "key9": "3t9CP6G5nzr3HKSLg1eG3LwQVN6grTT2H3jV3bhCQwpB65tJXso8YVtcoJSx2iFvFbp3XTAAbd1rTYELrpXsK3gR",
  "key10": "2xbARQUNqtdbTnS5TjhUmMtEy7zMSC6s6rt2wNxDZf5ycRU3nwDJBg1dsvLdDuRtKmno9PDscdSv4ogxvcWobq4T",
  "key11": "cdRomj1z1fcKrnHRYVpbbS7QpHTRwLD7ZuwyJVhLEZYcDEZH6knL5dMFkgfH2JLAtbDHbHZoc3KnNsQiAuPxFGv",
  "key12": "56rFxr1VfcEBoGJfaYCZHYVVhGq67s3TJR4QYMxYfYSwZ3ZJ8SZsh1wLJ1uQxkZ4k31kQuG4mBwyx5BE12e1Ac5i",
  "key13": "3VLHHZtbhKGvAJQnuNXZEX6DnsXBGjMyGfoemSyRjWygHQriampk8JGM5J5413d22SBhh8aiY1fRMTVWq3qQrVxT",
  "key14": "2jNA8xRXoTLCs8WHAn5LmkSxdLUsTCXbmyQYCtjMCiVTbwmcMKRe2We7bCqNQbGemoQjhjCRdtk5jb7spKHAQkaC",
  "key15": "2FktQ6zuxzTasez3AHW3TWDYmPgM5jZnBUi4JMLr6tn2dyNJ9wPW3BXoXwjB2vtFqrepJjf8zKA47BADzBhDdM5s",
  "key16": "3BMNfHWyZYeRpFH52PF1hwfgtzuSqmiAF7SZyN3qj18U1o9q49cMbaCZyxBrg93yCraDu2RGeeuRxCJhQKg51aGP",
  "key17": "28cSZkfSsUUJDJbB2npCx69pB7e72qPv534huB7Ef3hDSq7BtzRDkZRXp2F2QsyJWfS9HMkkpurC6EsaTL9BryBx",
  "key18": "46Eh1ik3YuimrhQBLY7gimvLvpQNsh2wyCEBhd3dyadyZ6BjKyJBKKGVKqhfAdPsP6wydaWgHTUBkWCLdsAdGERi",
  "key19": "4YgDPbZRwWx2bZPBGGMUYkKHpchArNCbtRdU6ykWKdA8fSCwWRjaxEJrGT9QgUm7VvgbM4Vocf41Yyj17zax9R79",
  "key20": "4xfT4yf1QQNJ3GpkkFk2wfp397HeN4o1hzqh36RWR61PwqRVBrGn5B9mQzTZrZBquET8FjycwH3XvyttBy9Baa2x",
  "key21": "5YGvLazGm2xgyzgSLYMfCrvRNcLyp1YjiMd1JWWy83nSxTE8Y8xGbt8eJKK5DPf8sABHknPJzqbtKeGFstfEeJ81",
  "key22": "3NhLJsUqyQmAGz7N91tQa98PypBJ1BNJM2fJstgZfvsJygxCUEomErqVqJgHppMgB7tkwe4m698MCunXMdERXvbb",
  "key23": "2KEEWKkqpf89y58GP45kdTWjtCbNVXJJ16x74yViNFSVp9KYV5Hg3tURxcFpmA6ihHvuxnS6wQrPvR3LM64Cs4Eh",
  "key24": "3CXSqR63aWqNownyd7vbPgJdwQYXgrTeRSbnzoX46wAz1QKWQvP4Cm1pHjXgtH2Kkxipts3CRpEdvkZ1fmpT3GsP",
  "key25": "5jpkKei6tLbC5KvYn63CsQsW7SQz52rgAicWdBxe4wm4Qz1kGx5PUMeFTBhiFjeQKW8su9vyFdhL5xd1gNrBCqY1",
  "key26": "W6T2kWpUdvc4vsxDKAqKYNxeVYKEo8EA2nYLJHEkiJ6PhunQDRFD8rJToM9PzTs2BGMhrWEYa5sypycULPtbuKM",
  "key27": "4RFxyhNSTzEDNfYXfgMm1wjoAfGviiguyuMCihnwzeTraUeNK89qcFg82i3ZZDb9yEWqzJodAnWDmkwwG6ZRejd9",
  "key28": "2rmJhF3szFz9S3EeMDyJnDjopz28zM2DZmFPYD1xbpTo4A2MQRCE9WGocyR81JTXzTeT3cvJmmWs2kz9FGgXvAd3",
  "key29": "5psSusJbSiAAEDd8Zv9K58P3LVJYJfSrQGf4rF7HJNQENm5XN9WKhNq8uBaptZNe9PpZMvDhvMMUXPzmfBBDQ8H1",
  "key30": "pKqdGjSmVifppQecv9d7jMAbHMhDhiaS9hc9wS65NrXdXyTZyKTWXVXMGxdVq9vHDLc2u7sF6LJqvZT5CvpJnGD",
  "key31": "5GnM1gkoc6whgvqZXhb6pKtVWVyiEpqS7iTDstevwgagofcrwsk57uTtwNiUyNSVgciAS6RvkeLeZK8LRF3xphuM",
  "key32": "51bSvSekGLLZX8pNRX2smdFVY31m1odCcEfk15uK2xwFfBxCjvFwrm9PWjsq2NBcFW72jktC1e9eGJP1NbhjVQmC",
  "key33": "3R5rdSLbkejQa2WVc2UqzfaoYr1xg7MiKFXWKAMKD8ETg7QYntjSFEFC3oySqkaoyRaVPipWZS3FFkKNaRhRkWa4",
  "key34": "2UML4cL23wCeWWrR6vkDE3PjPnKcNuRLGSVfTTRNvPSFSqNBh4aeHTwe11EZSCHaDPwJfQUSN4Ex4mxFz164N8Up",
  "key35": "Q61ZwykccSwFPYq7jgn9paHpN8SrZb2HfKbqwiMboJv8w8RYAaHFUD39vL9ztr9SYvkZELjkWaQmcNB8ikZqEje",
  "key36": "3gR3XfGqDnKcGc2LgUhLMDQRHS3qJ7j5Ev6sYoUSMag4shNYP4xvQs1SRwJzyYowhXjSkANo4nGH6PUwCPpToHcr",
  "key37": "MKUTJjiTqaoeVPVcDmevqZfCc6t2s76dPJmmCrDCDvzMAKeqgXCDKKgHuzAKWk5rFtVUu8j4ihte12y1X7mmzh5",
  "key38": "3frY34vRhM9WpBRNgAunT18DtMeJruu14LZwvmYh2qfXc88FJsRtLymvBKn8tcWY62Uu91FuFauXdxzrnqLCvtmU",
  "key39": "4WDBdQAFpqNevQbPch4ottHUY37Z69j5szE9KD7rGsw8EPXvjf213G7bV9qK2YZWARVipUPUE1EtBPNjg32CdHXL",
  "key40": "5UmNTw8NSBSjts6keZDh5uJ2wxVD9L1iUaKwnvHdYc8rXTNXfXyrtjqi9KefF91GeLgYQThUPEjRfnG2yec3GZih"
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
