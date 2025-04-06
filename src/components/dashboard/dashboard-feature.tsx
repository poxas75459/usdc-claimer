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
    "3jFzseLhMeFm7CD2E3YKbv1WtqFatHsRMmP7cToyJV7EQB12Fz4A4pMJKFXx1UYZ4ydynkHtXUehhygmvMhXAfuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQmtN8U727ccpqYxWamXu82V29V71h4f5C6nnnZ26hXwYkLjxnfCYY4sjDiVMVnzWMtM2LDvSmjUnKoJDLMWop8",
  "key1": "HQDxUbi79ATVz6bWZHTz4ByWZNeU8JCCFFrAgK6wgsoLUG8Dk5qawwSw8Bua4vs2wPSyx1HdR345bc6cUzQAs6M",
  "key2": "5bxeY2Y2qYozCPtEnYcBwEVNMS86BQusRQkZLm52aNtnt1Xwc4PuUWTQiTFi1LTfJpKAeAyqPHwHyh5T13uHyrRK",
  "key3": "5mbzhkA6EaxRnqjRjJpwGC48feuuxHqWzGWk4jm2Q5PymQQJvortuyEaUo4RKbd4qviqyjgnnKMM6XBUXWxxbzYg",
  "key4": "5NnpdnmmrZnpvxfUEXEhxLVJxnUP951yGDbaaY2DQH1ivsFjxoY2vvb7uGxS6g56NrowKGbF2KQzeK83tHbmgrh9",
  "key5": "58tzA3HWX8u6EAnErw6kUR4JEGgmLr7GeY1g2vEnp2ykDfZKZqNcHowuoeZTixTjYfF11sd7eZoj1GmX2LDXGfQT",
  "key6": "2PWi9Gd2rZB6E7z64bEeYgL6YTTLnmWCueaAFxTkrbYAjAwDLRhGT2A2mQZUY5zvJgSaokM54KBvRZDqx2MiH9Yx",
  "key7": "4YALnDHkrVSGKT3eBeRvWmjABF1v8Qvt9jsJ4QJ8SvAhW3XwYTF2WpkvJUdJVLLAybmtdNkeL8HnyBzYWrVqz9qG",
  "key8": "34DSssUsivgVzmddPpP58yCtNNz7WGbAAPG3K5EJJxNbmbc7a7icQ19sMtyWJzN4beSAgsfR5rpkvTBdMFQgKuiK",
  "key9": "4eM5oPvF63DFRyYi4oxRH8ZqeY2xUmUKovLeoHQPjf92M8ri5McorstbnPjq12ibVxBRVmZkMVNwsWj9YzCw6i44",
  "key10": "4NPjbyJW5iV7nXK2gejmhCCAkbxd4vkR43EUxhLL6pWuMuJszJ36ikeCjhquTBiLAJei4w124cqUgcBe8NbyXryK",
  "key11": "42CrveTBHLNBEJCUgf3Do4p8KmFaTzMpECnePKoQyb2nfShFWSTVh4YFB82naJsC1JdoJhQrfLtrxerRkJaWjCuw",
  "key12": "46MhoCuvBc8ACbkGj7gPLqXLGvZveC3JifxttMtcJkyCLUbnuwk9JqWgesqFuqpuVNweFXQ8QdsDHrdQM7nExsF9",
  "key13": "UbPWMWehEPU48FhbDPchMyuRPwNxdEBPWktq1CKCbjX9qK3PBE37dYggzPcUJxXe696kHRPz8KT5EVateQWXLsQ",
  "key14": "2FSUYf9BR752CpDSfzCeMF8TGv6y9Q8zYthDy6aHzrgygX5NQWS2qPg1ZoaB9CMyxrzPBC3gsmiVqCb4z3mqLwC9",
  "key15": "4HBo7HG6XHAP89fBWk5vuxvogiGTwRiD7wimJepdtjqHq3bazzEQ8iio23Xy1Wzspwwvh95NAG7DECEPVXXWsjxk",
  "key16": "3TvAhqg8JnmxwpBZbr3hTg2GKistqLfar615NVbB1Ykk6wpGJsACveYq1sxe9UCYKSrHQuj6SXHZMYiJEKpoSN2J",
  "key17": "Ns4ZucSFQzQyvtxotT467sjQ4MDG6tgVJbS7xpVPa7FGkgugF3kKox6tkUEhZAgmUMf3Nhzmp65FgD5WTLsHZex",
  "key18": "kmQHZ4iqpLxxeYQx81GcJL2XCj79pFutugA8aFWbYpVCk6LqZoQ1XZiQQS6ifR7Fpq6tKAkHY2hNSJGRW1ceC38",
  "key19": "27hz4TyeHuFm49Rhj6NCyPdwEpnGUyqrSuWy95CEh17EnP114VBC9rgjT1bZoBbqQbMZ3w9jMXcFt6SuKtpExie6",
  "key20": "4FMyHURKhZ9ubyWeQtTop5WrBztWsdMxAJuTc9ZQ41ppcfRTDQcPJBnwbpk7PbEQQoPxNZ9efZ75WfARxGJen34y",
  "key21": "nnoJ1X2uQdy1yq39uJXcfeXSi4iXu7g12AxeSoPaW1FWq8myQ3ZXyEWVQ2WyR7vrxchXLycPxpxDb8NdeUdj5Te",
  "key22": "5TA6W3mtdoP4rPKwUjaCVV2u957aGc1KJ7pgS8jdLQvRAgPAp1STgZ9tRTsMmQn1etJTeb1CWjU2hZRWsiCVYxmu",
  "key23": "2bPpQ6qDSxdxKJD1NDAAb6f8yQPVvTiutiQ5sKHcTgbJCfh8G5Qb6zxxzyShcnpRhqRAzYipN1sjaoxZFkSmoRDK",
  "key24": "2g5YyXVjCCZdB3aTLaU9MRUPvymeNGSwsx74bZqTwyvveC54D9C45gdejXwACDuYgFqST1NcFSCZvg2Srx9tSfF5",
  "key25": "5iHirprFhqbi8jM2CwoDjfrX257pWwjghiJxyEiAC6251aBfgxbSHJy7WfRsiWnwAabFBHb7bgEFVaBMpLPoe74v",
  "key26": "4vtTchxBoJzcc8pQbb1dWMgUVpN9xc4XSpBibsyXGFH3XLtCEo22TRVe9YF3q4Tnb51AV4CEHHTieh89BgQ81jkK",
  "key27": "2crHdZepCYjAH7ZBf1XkfgVtP8Nudc5zS9KpLtRUJYtEdQvWWz1aHaw5DbEPU234AWm2n8o9rBvchmjvT7HEm51B",
  "key28": "ZjvKKy1HSdfwnfWyAHsQM6N9BdX35V5Smz1Wicgxj1tDf5XLQeoGLxjcmUxiLuXKN7P5dgtEGycEf6Xu1A15ZC8",
  "key29": "59nuq4SzSc1bWzALRWr6LKRWnW4tdJoFAAaLPw5B8azjGR4ibDUkhgt9Uty6zCP9J4MzLBBdsFBRZYEAgseh4mpk",
  "key30": "4BZvX6hb1oPabSaoRsW5vCYi77hB8d9JAF3YcTMNp7wbHY61Xk7FERJtJw4XEj5psoS5DAkhjcA67xMSczfrw1RC",
  "key31": "3kFp1PHzX7RYDFXjwwXgMCJqTwjjLQgCjg8xYwzQPZRn3zT9d6dJ4jHdvDmf1wbV2en1S5yLQ7TKN16pjX2J7eQg",
  "key32": "5HgtrhunBbtidfqNor8hTQauDa5DD17xsECCsQNfUikF3wfW6Bnjfn8BvQP1vkcpHi36MjF3dFwoR3hSM2A6M17i",
  "key33": "3pzbPkWcz73u1eZR6tPim82EG5reh3VzvjbRiuLe8typ6sC237ynRgKcs7W7hky4NjAiq3bAQWGPfQMRtS2pjsRz",
  "key34": "RuBWBWWFhugqEBHxjo583V6jsmWUmxAYZ2FoGaR3nW5mLGhMAsYAUHXRSHHpaWDVxmeMeuHv8rdo3C6MgXFwVv3",
  "key35": "3TbzhMxNoRoSWJjedzb4YisDXPqdrdk5Qv3XaFNttpSfUUunzcWrGksTEmx42UD8u4vx3hWxmmeVvpLkVVRZ9uXz",
  "key36": "2SnL2kewt7DiekmVrLfR9uPB52d1bHMWtWtQLCnRgttKSz4pWLbGWfJ442YB9mGomjhGGLxzxbZii61RjNLZ8NbZ",
  "key37": "RWfyL1DufXuEvkvPJkTNrQ7goQeGJAzLEJq5ZUMLF4c7tQemf7h8i3ybpey3pubJGi88XYJoMbJS1FwS3Z4ihVA"
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
