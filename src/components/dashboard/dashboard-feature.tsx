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
    "4CmBK4RCYT9ZZRctiqVbJpRYoeUMS5sYMDjLzFZhC8XSocTBs9dWAxBC4TkWAmr3MVWVPWLNpf8yLWzpQBkFSZyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3snori9zCvuna2Xuj8P97PiwZwt7KcPcgghUCqAbchxXZHjGaikcnxbyttFk34EUZw8YoPpW9enJU1GNbRr4brL4",
  "key1": "NF4UkYUJofRZqTTEVJZn48iZzniupaLBx5dWzzg4MWdkcpkwAWaNweHUmgH3Fms44KQJpixtAGQ9oAGPgXR7uW2",
  "key2": "2jJqcST1bD2tfgwm1kP4NzhBsvmTJN2b1Jw4uRfNzbEPhKvmfkKUaaxm7P5CskWcJvUj3TRFXTnCtmv75U7RQuhW",
  "key3": "kamaa6EFGA7Yd7s94sonCHqNFCT3xBACdDiCXD9FXDGnBk6apFvYj837MGVH7izBc4Qbg7xKWv8eYHHYkFQaS49",
  "key4": "5TbEDGXVs6n1nQx9mFed8cTwnAxjJFMkS7nSMgV2MJRNXKY467af41EAkj7TY6FF3oUongeipDSsUvS7AJW44kWJ",
  "key5": "tuBKmvSwXWVu73zo8FW8F6i5DsPpyT41hLvDyyqJFzdzbJM5ruQv6tHPE1kAqsR7w2YXSbkwicQmqw83VuNofB6",
  "key6": "45Z9yvEvDftp3eZtCe21GsdFNEeDpWHTSckfbYK6VXFUjQ844BBeQBkcCGT7xbE6BDs13ty2KMDUR896HyoGuCM3",
  "key7": "4mJDtey43e4ikFdaaQGNDSoiVQiTdi69Pjq2hckAcYQyNy9x5iRmuToyfEvxXakYCNWCskxEwaK1zw5Z2XzijqRn",
  "key8": "5ttCMNjXpUn8QLj9DzbEZ4ByMQHt7kFrpuGfCP1MuWrNFe8Mr856YC57U9ZZHDDu4UU4Jop3VCnmTRggaY8Fxq9s",
  "key9": "2cqhJVpgdZdrzxs1cL4x5tdC83y98VoZb4pGiqnStP9TVKJPCK16Egohx5uHhKWbbNcxPfS2koi1ZM13vK8M3pmp",
  "key10": "5y9T6A9cvWvBRJBVGzYcJYURcfJwTJbNeSvtSL3UfsPn7EkM4FAZMWnpxPuhDGHHFRfMDHtQrnBs3thUBfhVyBet",
  "key11": "5zVp3CXxAcVJRH8Yqeb26waraoNC8ATJqS141eoxiP5kiyck4eiRqepvDvz5GS2DCtchhrND19375ndrJdh2pVaL",
  "key12": "91ndfz39dxRFyFn6EsU48zxfBcXzQRqLTiLCe9yxRjb5csgdkwQLszDJUK1UAP1SP4sc7VYmxbrTexatQ9jV97G",
  "key13": "azpU9oQLs8mBFnC6UdpgNHGGbWus24WkmAutueqTodU79fi8R8aHVjZpQGTmTJ7EeXePifS8jDw2m9xyWLQdpeo",
  "key14": "5TxQ2Yh3N1d8wK1G5SvwxchUAgCqYaVpc1DpXDgdymzdhdgEM3skRBk8CZZqdx6ysXCa6JoFkNu1JEwkxbyBrsou",
  "key15": "3Lf5YZ4FM4xPy5a2sA4GzeSxbMoDZQ3zt3K4P14VnjnAiUSjENfhJMKhX9W9o5C9CqLTxYLSfLnMuWLpXvuQkvvJ",
  "key16": "48pC79YRSqYPQAcqJACTL3q3t7jE3oxKgNHhyipLqUxKoA5o1ghioqructa2JaCicDVgoj9gHHxyhf9E4m18bonR",
  "key17": "3G7LF2ERyXxzAWbqcYoALFrvL129ouLmJYiWunLYb5X8BKWKg44LsdkmzWemCLAqgjJMw8ySfWhdeEHXwHQBhcyR",
  "key18": "5j1etx33oci24jZ2zuXmbaEKic5aGLHtSacvBpQzWCx28sVNzTbK9QRCHgimHcGpgoRXeexeGhxiZyN4Rzv7zhXH",
  "key19": "58LBZr365i7jcQJgkLcVq7Lfnpsg9PSdtAourHPnzLNJ7dkZXEjk4TXp7AuwKdSq3yW9nTkhZG6VTZRKEaVmR3zY",
  "key20": "4DsnhyT3dbZwVd4536macp24HB89P2cUgVkQyB5DQVQoR8PiiPKnCmbR2DB4K7TtF4ku3ABfKsPaBtVNEWEFNZrb",
  "key21": "5immEdU5WcEhMsFAnC9YmtQphRf9NNFg2t23Gv8KAiNHLa1GhoXEJJ7JipMmnxmS65QRYSjSCoibUhuxLKmvt54m",
  "key22": "49vhqnGb5Z2mYo122E8UAwPo5qEbtA7ScAzYMBfJcKwZZmqUq3n9EUDPA14aqBnB1CEpuufTjCS9rfAhE3meFWcX",
  "key23": "4rBtfmr7wYjava6JzkxNaNzJEauejtwpTsKFZKqBfSa6JLEAUPRyiJF1E2C7FLw7grkmXxqnSES1wFjb7Vfz39eS",
  "key24": "4jse1nTAfHP1wjWpk5ocrAYnaqUaNSVBL8GEpEwfDbSyTuW1rggEjmSqbQJijtP5bQRKixSgw8Pi16eKzuqqnRse",
  "key25": "4H1uWkL4d9dypUUGh7HKLVmdJqtZNYMEDXz3aMFiBSwobwdzawwFCLjh2vJhXJm9VBnQNS1Rv62WAgmKfoSG2fLk",
  "key26": "2tpNH5wRueh2t6knZkiSKXTUrkzvu3K5xyvrYbzWyPmxnfP9LGKC88eipUC2oc6poKiC5xDX8hr8VP2CJVhr6v5L",
  "key27": "4vyBgUYhrseQuX5NB72nUaADXc6DzMZEPuhxsgRj1niDS8QjiCPbeE26bPkoD1414VqxKSPxWdm2KtzZWsh8xYGz",
  "key28": "3u6MqdkcskqgnqyG5JXMprjsTxzEgfwkRrwahvemgDH6RDuAcvdUpcJPhJcL5C4NezbHDYX9bNqe4g5m1BkJqCkf",
  "key29": "2uzKs9qYnwqiP69JpoHRTYv9ncyizXTLSP9fSkBCiXz1YQWiPSFAWCMKfD4n5h2Qfm5utPYQDWXAyrSxSTcHLv1E",
  "key30": "4Ud5dRyPDwVLn5FycjNPyi5FHGw6NPq25TDXQoFuCEEUYgb9RZThsYdWBhu4G6iT4w4geAWXMheUnHr1VxRhwcei",
  "key31": "2fTgAzJJHW7pS5HsWhDixNosW54NFK6zA6539GZaS4McoxsAJ8E21c7PPXqHC69pWzBPar9YwsxCRhKanME5upGB",
  "key32": "4ZCVYtQac2B6LtBDjPuXNdic5TSU2z6Jt19brKDzq4T2gwyynSq5B2meJpFFrQLtdZqUXVxnVX7nyprZ3qFghVFr"
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
