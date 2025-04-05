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
    "4qHLm6WXhuo9wcsruYPcZy5k2dhk8zjYLqCnxEvuvE7qV96XapCmP6RuTo2HBKTPt4cPFJW1aBTDgPwakSFC1Uet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279m6JeWmDCdmGJDEQcEFbV5g12nSoTuM8rqMbsvrjZBvDkZhp751VG1mTuZDJcvwymreoubiNJcxR6PT9MwTCZB",
  "key1": "2JPUieuGc4F9txEzYqqpbPAjcDdUt4Gy3NywKss1Pq821zh1saiJ4rivhk32YS7fSLFeFUBZFCJxrjVEmLXtrLEp",
  "key2": "4vHfJQfQht37BVp7SKiPgCks1aHnpCY6mabmbBetidoSiTdnagZNh4cPWBQB6SmC9DH4XXJmvSb5z6XXtbh6wa67",
  "key3": "5CfiopwKBmdtZKaZ8iuop8Vx7HTYLMPwHWsFUKaS2TcpgYkbCnwtwKmMG77TXDH5FFfWnWZksAQcv3AujLsWYRc5",
  "key4": "4zunA4MJxkUP94YrEryvKyHBwSCzpnvgpb6oVqoS5cFjsLerLLhYMCzRGpiN78559uKmSqmMDMjQhvu9jAW5mC9C",
  "key5": "37rxowDKxXHV16iu48L6E4a9KGN5iPCiEYoerLfFrhiZfERUJ1USYWEa2LZnJxwHbMTRVzffUr9uyeqZx1TmqSDJ",
  "key6": "5oDmZ2fh5Z3RL732TgEkhcxjdRPHPLYGS816fXPcCLwBg6i1PveTzyE1FkyHUzDp4GCEB2QTKWLR6cHYSNtQXkXj",
  "key7": "3L4THM2ZjneVQXfvxKeQfKmAZH17D6w7g61jDtJYKbyBdbLfDGAGeBi1UzvXLX46oAwkLLrz7CgtxQfBcfoupZm",
  "key8": "29oKv653JFuhnjH9TbMQrxkaLcG3TGiVzrW9eULdL1H9ZSq1MFZTToZjojhqtFykfNnZ6QRZcevA95yYttk1owDt",
  "key9": "5Pckh1mpQq7p4zamtkp3iG71DLhQvs8Fnyj6WpYgQdgxZhwVazE2QiVvHCd5faDygni3RSt7vnsRHPufHC34vTfp",
  "key10": "29D4LsQ2CvpHXFntUzZaKFs3WnabjREyvUuSQzS2eGmsT6FCjw4bDNTLciWTHiE6Lx9GjLgLei5teDuPdLDeNe5X",
  "key11": "5jzdvYr4hTyCPTYMe2D1Dum6wXL7JGjfpH7t4a4VwXNpN7mP36yGMBeQcaWkRbsp8Gv6dFkbTVpkQzAQ7zBCwGeE",
  "key12": "2J3hLrRTTa2mEECHQMk4Qov6ShWMyP86mmigXJtDt4weebNgqriw3pf5TitR1DfVW2gr59vxRFZikueXGbQfGjRw",
  "key13": "4tSnWYyNA7NHb9AYanSACuNTTtmBgBsXpwpQeZWTMufBuNj4B3Lq9GM1dzdRhSb8KYyXfp6rFpWiqgHx5Jk7FHA1",
  "key14": "2njugSDDGAEVz41zYpqYVLEi7jEguwQi5T6LA1cKJPkEqTnGTUr99vxX6iBiLinXMUfhFqtCNDarprxSE5GXBnvK",
  "key15": "2nRcjATJ4SQE9nkpeFJKB26r5dFH8Qzyg2B9xjrXZHaqL5dKicBnPUTQfwGuAYBrmHmojKiZYdyVQTnwCD3r4hCx",
  "key16": "2vDz1ik2fwn6p695Mrj4fJxjfhvVxNJWJ3D9RRpE24mD68Rf7DJ4c31gphzYBDmdQnNphdWa7k4XbeuRfd6tBDdU",
  "key17": "4LquW9oZimKuP92ajMK8TQym9wSnv6WQM6qDC4H3wfLYfoaSEHsgJ3wN8Wisz4NruwgbMc5py3SzbKy4EJ9eKEbn",
  "key18": "3Jn7STJogKZR2C6yv2UJyEhCZVrSDgoUYaev87YMqUuW1QUiTBEEWrqsiyxj4LpeCKaSzEs9auAQNbe59DvULqZW",
  "key19": "hhWUfqtJVEdsWW9GcCcwoNBrLar2WeEQJsTxZs7iewZQbdU7JcTGJ4XEVrNzoPAnG53g5Lf1JehPpHYwam9tsLW",
  "key20": "5z69HHuU9mzyLCKweFKQsnr2TSoq587CM81gyqWwDoPsGsTBqNAyHnW4F7gB96Jgs8NUpKnWw2dazwjJMc96WTGd",
  "key21": "2wHpjqGXAakQiX1BEmbJcCWZM86yWZZtjGMv8oMkG8d7wmtMWfbHtzNVQ2h2X1eiwQcDHjaUfQhMTC4NgEZHhT1c",
  "key22": "TKK4RYx6mVeN26FjpQZZw98BvEBeDZCVRGXDje7KnrhTXKoRZaeLU4zsEaJh4zb8S1e5YhDXs2Y8QjpoE3uxTZG",
  "key23": "4jmqea7V8aTqr7mEmTqNUPW1KbWAMYJRLLPHiJJrqCFn77LRwk85Y5HQkirBzenDyNHgrNjMsYJzjwZJnHAKsoec",
  "key24": "2gMVicUQcABoPkFD2S9g6V1CKGCnNsr4FwhxYZMzox91Uv7LF6JvuGo9PauiRqKfNPMV4y1GMBUxCjYGkv1bMtS6",
  "key25": "3E4ks83qfy1yXcyDfK6aR7FGikEhF4oWmm91tsDHsRSmpQgVZ1HjWzDbyHW59ba3GuHHFWXb7TYt8ohucD5GXuF",
  "key26": "3WhpLvTrXGimUvBTLg3jpfDbL6N5TJCLaXcGxvWSJZ3DhZk6dsVdgEosC9omPzSbx2NPh3kfqjDGHvp43QjM2zbM",
  "key27": "27y1mSJgzGdBQTC2oeNTEbHTDp2FSEdSSGpE8Ya7WZ2ARerdyPzyxBDZ7E1CYfdSkPVcuTdosQ7Dk7dUbjmQ4Vcs",
  "key28": "62LCShzBfudjvNsSeNM5y5fYKQe5RKWdhfsF5wPkyVK2SUeCGwExsqRk5ksC7oS4Sz2iyPDv3HBzBLnNDJCXLV33",
  "key29": "2MW6EacXCDeNMQdeSC1vsh2RaSQbSqvSwSpx5gidYXVnzwcFDq3GYeScCTBBdDqGFDhjDFB8tBiaU3Jvp17HRfWo",
  "key30": "2Xpj97Q9XBiVMzJxnBTmnvVF2hjbyYeeQBZgfD8gx68J5JpALbGf1Kx4WcEy15xB4Luhkh7BWNcefWGniiHW3agv",
  "key31": "5y5WBt4JupNWh825VsAwQKi3dT8Aewu5tFYwNVNEAPpJqBGBSpUXmXLMBHpHJVmMk72A6qG9Nb9Zx5ha3EktBpBq",
  "key32": "3nKv4WPJerR5dPfHT4jepJHZi1nMbWe3CwEazw9KS8CruzE6PoA7vZ37q1aF8am5FpXMiTsjAy6PCnw8TBVhRT1E",
  "key33": "5f13xEuSFoeSbpHVn89MJ5ndwr675VoRbbeGWDDZdrfFwfuSco4fFzAsqiV5H8Gj6T4LqDgZbJXiK5a5HciXg3fL",
  "key34": "4npdPxuN5yKnUPYCFRSPX7bUjiEBkL6unjnzjvFuZjqMMRmNagx7DcmzZdGrQ4AGPL96KEgq7GxkrrYHwXdewtMm",
  "key35": "4gZQn8P4qMkndFgMD9RpBzMzAthTpNx2JpDSUFWrB2vj123ey4zr5gHF865YM6rdZH1xbiMUNjm6JXSc4th43bwn",
  "key36": "ZTe6wNxM6qPob3xu6rBHiMUnWi15gKHcpdbdVbBzW5UJbM4oqsrJT4PNq2oLB54337demHwMR6MyNbJPM9zdb8K",
  "key37": "5AK7pygdDsw9wgmD1YoThS7mXTkFweNaYuNeQeQQJpo5as53j2JQ2r36yDuPw7RBgqwETDPKDvfeQiR2iWZjPVrx",
  "key38": "533y5ZJAfKMYoeyuyyzDccbCRyW27Ws7T4423Mh3VHe5wn1fgZiQMag3PtyvqWsRtAVQr3QpAaBHnwqPHtTeWkmV"
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
