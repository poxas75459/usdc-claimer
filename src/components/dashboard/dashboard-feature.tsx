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
    "cWDU3fgRmsQpP7P7QNqsXLKwaZKQN2D4TNq1omTPnn8EL25qkPeXNJiAP24eeF4bVpDhrMjSqgBN9FpaCtZnJei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sLYtzXjdTudAaHuP8i4QygURZB2yk1uN63KsBdWepd2HNEcY3Cawhr6dKfdjDt6GLGKfj7LnhM4tv926nB1rwCj",
  "key1": "XYgxLEssbtURW4XDNKbVhGYWLKnpwWeASU1AT16Jb5Bmh5FYnRh5C9Tiffg4hctn3U2Ltvhf6mpwmnUAtoDAPuQ",
  "key2": "8TNsPfdqKsDy9GBknjjVCNRZnHbrsivMqnUxe2uPQENwLRYGq1BxfpLK5M794poDp2TQvzFpriNoDc7Ds9dVEtY",
  "key3": "3DJU4R9xK81GHZ2vRvxF2z8qjYJQd9rJvfCrHUFLUperWyCvbRLb7n9EARcTG3t5YxKTXhoE14bf6G948ff22FNZ",
  "key4": "4qyRiESpFtAPbuVcEbssLTsoPmLS1hvDB2bHFZhNzsKg6KMjjYL8avjut2o5CreAp1WvYSp8K6SFssQr5FQUgKV6",
  "key5": "3cqUyHZodgndwKrx7bRWqswwv2ZnTnYiSK38hcRxYtG83pkEBx6hBWo6Rna4H7uu8obbsEoNc6K4USpb6XnB3wkB",
  "key6": "5fNJb62ato4uFQCBK2xCaNXVFZQTvv9uBFR8T9DeWSXB84FAzzptH5PQC9VJnjxfhcD1nyMFnPm5vghYmDJCRWum",
  "key7": "4VjCUgJQxXhEqvxxn3stfMAcfXNxdjBrzvLXqC8x4XohQ54fpLRQtBSELyhEUQVxY2C84bMvpT3xoBQW6ie7VKkh",
  "key8": "2zqukGgixoTVodXNiw3cHjmFjBnvwPFXtB4TdXNF8YsCBnpA2YgZwmp9pHbbewGojoeZpQhSe66pVoR9T84R7b5P",
  "key9": "siDD14Kx2o5vetZwuHYcXmHaHd9VW1LmWFJCDbbWyfBkNfFGwTiVhwQvpioxJtv7ARb1FupyeMdaVt1gDYk5ZZm",
  "key10": "3K7AqQsr2cvZyEFdrFuX5b6mhYAYcUCrhEYV2KwuVdGi7tS2bNHSnBCZUyh7xygmArf8dEnK3NiSGn33WAYESZtW",
  "key11": "5QvY9CurLXBqK8GDJKaoWja3Zj5LSTiNKUJ1ukU27UcdSMzkZBufUANF5h4PabbKB6W6suh78TAmCuWxupFxBx2T",
  "key12": "3hkkiPAaNomW5d7W2FqJ32cE2hpJdF9JAf2Euf3ZFnNRpTRTfL1LKgFDx3kLKWemJ6zTq5uanAE9gYDak3tJJ2T3",
  "key13": "53nmRVFPKCjMuT35KGA9qREj4FQeh5k9Nxg44i5UK1ehoA9uiGaZmWZTwPEXDiWDesW4HffD7R2pXx5piUXHZAiW",
  "key14": "2kmDWuvvhgaELxH47FiJTGsqbiU8kP5anW2xVbpykUS7HELcCy2iLHRvvd3wwDMWTt1cXeGNFCabAZqPF2T3hSvx",
  "key15": "2BfExwnztgN9BaBwur5Qx7chqP5BZhSNtZ3FgNzp1QNpgLnx1qAPsRnyoBwKdTetmk8qvoeN8qqXKTTktQpugVLx",
  "key16": "2VqcrMh7apMpomqGUuXErvfiBMu9z9Aeqsx2JSqAsp8LDm5w8FszUhLyVE1MuJtZjuCLxJjbjUY8UwGDoz8YHUk9",
  "key17": "5b91o9RRw3hwYyGafkd26UntFLRRH9rNHS3u6UrS3eg445g3ye3qbLuokU9vAbV2BvgSKkFmzS3H4PBjC78csf2M",
  "key18": "3XPA8ULsgAQCh2EaXBPQApFZxkvdoNpexnDufqtCj37ViCGZCwJE6gPz3mVDvbprTcVFCfUdoGAtzMMV66h3BzfU",
  "key19": "618L4WBB5d9UGLhbzaaWbeyt2HiM1AWzH26pP92GVdtohuFUiXSfvqrrnqANt87G8hCVMvde97rNkctqUUSikTrg",
  "key20": "5RZTN1D119xweMTAVzEPsgsyZAkoHYGBiXErHreAVwgy1vg6n9fHnTixizaLy5RZg6uM5Uah75k5BsCC8jecFeQ",
  "key21": "5xjK2cXc8rGZsVP9EiSgjNSQ7HQB4sJzKUnMp5ZCn3LyoZFhPd14nLEqvsewakHc2k6WZHXjHQN6PtMn42DN8UdT",
  "key22": "4bycW5pC38a9oQajgiXLRAwe9EDWKTb5ZBHREDVqBeTjXZ8AhSiCD3u5XuqdSS3g4U2KUzFpspDeFSjUq9BCFssS",
  "key23": "Xb8gvQFZFBE57yxrftTK8r4tbJt3ZmjLgND5Zsxgh8cEAMaUAWDh5d8cMhdjgTR6Nise4cZ1gpk5NUXhYDQPQxD",
  "key24": "3CA9Xy83U8VsKQb8S5MEWQpzmirrcCUgdXGC2PCwiDHjEu7WaBe37XbVAeD16rEwN4EqwnUR9HastcJd3Dfx6F24",
  "key25": "26i1UKKZZbEzFWrjedknxznTCkVtdcBGggDP2RBdB6zvDEVhNVKfCV7XAd6M52KLmxaWK3icKZJUrSHaLjypqHTV",
  "key26": "2cbuH2rjMmbBz4xjyeuQ4k7mWkjaX3PrtopuZYGHUcHTgbVMuRXpwXhNuMtZ4zSrSKTgNaATX2VVsXREU5gmsAaM",
  "key27": "3t5tuUykHTtavxb3knVBaLwdgrVe1twj5svMDV4s2apzKx3EdiqJjAdTj4Amd6oE7MyXcCrCf8e93wNFVSvGS9GX",
  "key28": "bs71mc1U3ZiXkRwR49sRMEYt5oHeytoGR8wiHLEFQGK86X5CqCiphYNogVLcpwbSSWD7yU21wbp4bdJNbT5RZAp",
  "key29": "2PgwMq8Fm3D88V3GXRb8yNJpcBG1SMvRbAodYkoMGBvRVFuWkrpxhjPW6AwkYmNd71SvthG3kiwsBECcGomKndr4",
  "key30": "XNiouAnD5mNfpdwxMWGaFf4nKpACk6Q9bQjapfq3qY5U5fvKc3Z1N2LUJCQTthrnCEiHigMMkCUvxKvkbYMZqQH",
  "key31": "5Yey2FRTMCj4Af78QYPNvRFXrrG6CZiEACQxSoycVXJ8PkkLKJtA7vxW3vcMMBeT46LpspvrkVqUwi5Xjah11kQj",
  "key32": "37JqgvL41tcv5xUBnrxCQoMhshT1yt5g7X8qw8tUvvmK2zhKD923XCuV696gfnfWyTd4g83HKuymmtNDCr5uBqiU",
  "key33": "2JjXHcZuKJipnaMSSYJezZpFJvKK21L1966ogTmdjXrgapHKAPktTwAoWRyv3WCQuPq2yf89ceX5Pv7GC9VgEB6d",
  "key34": "4GAFGCWfyACRyivBn9Cix3eysa4zCTP7uLNHLWR2Y5Hxepg9aa38MkfVQXFRTaJLS789gifkYtjSHapcVrihztfG",
  "key35": "2MW3tbRzXu7Wg2wWDZiYFvC3n6Sb3N7c3kHzt2GcdKCMyeXF9Zsag2onyWPtstFcPDZfHtHKRdWu32bjsAoECRp3",
  "key36": "5pcNP3z875NUSF7GYBEcVgua1ccqXdtjMGZW5THme2SXBYJuXMbmC5vxugptBcqpEetxiFG954Q7Gf3af9R1vSkq",
  "key37": "4J6juGrmPP4KMcfPeXW3wpxJha6k1diLYF9a1eTYwAuMsBv8mT7UFhcd1AvesNYFkNL6g79zagsYnvw1moEmGz6Q",
  "key38": "5bGkBNZLx5JcSNyyfjNHR448VTXcSs9pkJSu8cGVLi2BQnMVnZ6XR1qTEyjgUyNvoE6cUuG9jp64yaP1SoPVAyb2",
  "key39": "418RZndK5W49VAD222vkR6oULqRX7SERhJ2bmunUM3up7qr4v8g7R9Po7mTdYaswdcQuvVVxweBiyJ9qTLDYzzXv",
  "key40": "3m2BhJpG2xf8GFLQ53N3BWGWSWwuPgYXZ1h8Eimpza5X8T1o67kBQSLEfjw355GJeUpgx8MgAtWRB4tbYgVFh85o",
  "key41": "dEWvPsxTKqDj9WVEGsoWRvxD7DjhGj2Jsya89pA434sH39K2AL15gsoX3xueEnGVgLwEexG5f7AYv7v22dCNLxX",
  "key42": "59fF6bHxqyevTeGvwJgckg3mosZMuY7VCaTMQAXX7LQaUzeachjuvHvxbnenYgxiEVFtN9UtEz8A2FEKSDBmhqCX",
  "key43": "5YKawjsRSbXenoxsjP4pvWM3TC4Zef6s28Vbz2jLLvfATd8CTpznwXYqowUHzdUw7L4GS9eiiA6Nn4z9GW65NwsG",
  "key44": "pynZaJjiLreJ8zoTYGL3HqXTtszVhgZJq5hS89nZwdZWvmZnNPkTQoGLUZ716jfj9DHj8idqHrEapUF23XzcwzY",
  "key45": "5aQAsQCgYuXxAyRWtrHL7grQzceH5VXrggAdYcR8gxkGwTsKVzkQoMyFUFjpdT8aZHaJPRBoJ6PxJN9brCTb3T5D",
  "key46": "5mkaSmrvsDLegcWJ47HrKqsCiZSMhTVECNK5KjkeNy7ZvoyJmfnfXJFtoUYdm9gSCn9SgvgSm37Q3QQsJkEVjMrF",
  "key47": "46idMTrRqa9g9bsLNirPDYytbjmUY8jzzJnMymz4dzTLd73eLuFrYFEg7vWP2M4qCbsa4aEbQa159quyZ7c9RPro",
  "key48": "4VNL1Txun11zL7fSfFskWhvbwdFuo5QvHz36ZzieWcgKgmwcMMb6xCCHDb2NLoLb3Pxe6FUVkTBtu4taxa7DsXG8",
  "key49": "Pi42JtVZKFSoEgLpMcHjvTDyGWjaDRAYMXEMTsg4Q76EJFynKPfJMnKSQQJwgoarYD8wn5tsp8azD9C7Tq4iuzw"
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
