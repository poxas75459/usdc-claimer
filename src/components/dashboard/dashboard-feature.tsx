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
    "2KBULZbmhhAisLxLNEUePoNL7VyyHSfA6M5whcvRYC3d1dTKuTMo6RPY71ZXZwwAr1T3nHeHqQsX7HdfAzkhiQhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgyWR8stRzZZRQZb1UhwYHveGuG6Dohceu9PhnWtkPNDLKSXUpsH3hXoQdPpWw8cFpzo4Gq7hopJeEanPmcfwVh",
  "key1": "29o6Ce39MjJNEvNjEEZk3sED5LvERS3tzGXjHueC3bKbwP5W8kjk3RnfKFcX2eS9nURLY6XJBJkH8FeMqk3v6x82",
  "key2": "4Fn3Pm24XsbDEMxbDhwCq2K7hB8Uehs3VvyXCLq3cohAZVMYFkaiwj5idAz45JGLrgKg9RzRrrNj9cnHW3mxogki",
  "key3": "25zovWB8ZeHdqHfro8E6MXw7ddF1myWRQ8DLwhxKJNHvmQc5g778mWe3SjBYTUxqYY7rP8t6DN7a9Ps9gHcgnzU1",
  "key4": "4vBQWWs7w3toEi5F1vR86v6Jb9skMQCtJM5hBTzrQQR6MPPKXKeaoE9r94uuU1RjuN6fMnSor4c2sMoxA1sEoaAZ",
  "key5": "3rnBRKbtd628mzBDyhWTkfxBZq945jopSTrD9Ag12Zmzo6w3sFkomASQ1ytiABk2yTnV1JCsAgb65XRhAAe8hkGP",
  "key6": "3Re8MxBtcbKR7cH8eYHB6CquUX1iTH5Z1pLsEEYB27jRQv4KPfe7DQDjaiDZHQGtM67qyUq3RDNwaRLTzY74AMQS",
  "key7": "2J837sSqp74bqjwv895fak3MzHeWMZSd7AVYUz8c7HqJ3x343H34tofHnwKp9RvXgZzWfZPWTEse82PAGxHrTeAp",
  "key8": "4A6DhmE8bsLmpch4cj2jnEZE9YG2jpy8btjKNZPQqYRXssC6JzZ5q8Kok53qSTxN2wrNDMQbAmjrjMH17EzKNnXj",
  "key9": "2rTcjorBaQguWRqZVts75tAQMJXZTuKwnLjBqWbByyjrqHrd8k3JM16SEguMJhPqZJAodmVWD1gKeXj36kZjCU5d",
  "key10": "5xk8KbAeyAyQVgJ4eUFqzabMCyNSVipS6KZLiN2x5ZHrLFiWVHspV3TPbTGKQ7k4Vz5D7Uc8ycJT5rhuPY1XWKCF",
  "key11": "32EwoRprB3v1RTUmWwTHzCZsbRxDAmGRb1JpXAyny8Hmrz8pCshAj6UoC2nzhJTTPuxuP1X13S8TFUgUPdBYXQcV",
  "key12": "3HXTLSw9LrpxFondvsQXtcCS36miRdRB2mgoTrzrWmBg4qgztguSPitbQNT8iRyN4rdMm53h3Jwy6kKJXLKewe1P",
  "key13": "3yigida4AyQNH8UCHkfHqegxzYaX3csaetDxQHcwgeDUrhwMT1G5QbrGfi1BeornVEuTMMitYZ7rLx3KthjvbHA1",
  "key14": "3LQ7zmkgHnPQYEnNz38rnhzQ4P546nZsYmyxTyUG2pAqCizfiiPRy5Z87kKz7gsPC43Sd8gVwo7LwQBw8YrXya6z",
  "key15": "3gMWbtXsYmjLnWNuGGv8wwaaBk5WcS5fLdFMuhZFPKXRbRSS3jVhjbnnMVve567H7s4A5i1ykKExxRrxTcS3gXpt",
  "key16": "2KgsTZ8YTXFSHvXZj6XkRa2Vn4gJfoThXeHvJDGN86hmHXHjXXDkCbSAnqWgR4sPHYonHcyAgLSo4Ermgs7ZBNHT",
  "key17": "27Q1UVWe9Bii3dtxCFwscxDN6rLV7hJ6BSVwit7iBG2Ubwgj9c86kdanTAJRrh77sBHLVceUijc2XeB6yjm6Cddw",
  "key18": "3tmYEn8ifj5ggNAP9hTByNtG46mBo6Vj6vXWERCTmt4dR98sP63d5WfEzWSMy49UXG3sytjWx5KsiBfHVjxdsViH",
  "key19": "iQfZydFVQiWXuivVXj9YxVKqCna8aAWatU2QGMR1VM1Q6hydyEQMQ4qDJ97kAZBZpG3y2hAiA8xc5Pdft7k67EK",
  "key20": "2WE7fbmRJj2DYLQ78jAjjZS68vSA18Wz39euxG8PtBa2X8hMui8iQWqPDe7JkCrC4hRvoMzspEcSvrT7caxp2rbd",
  "key21": "51kTpbdWmY2KuKjGgbMw1BRrUokh9VRu18MnPsrtLsqTqYLB3XTZbA6z2FC1PNHQ1y512ii2CrGLZhthJVA6xayT",
  "key22": "422MFQGHN9H2KuN5yYD6VVQQo5RrQbVthp21tvFUnD7owkwqfN4Cv7c44tRwXnTzNdZZ2VnCg5vMkbuxFR4cLvTJ",
  "key23": "4nniHdBfrBt7YBVuc6fwi7kJQmKsHMVmSJBuSpptUevqqT95ZGNjSSL52EYbmRLxPgPUK9oTSDuiwLGBUWB7VSGj",
  "key24": "4PWPv4UziPNdmDdhe92ZRZrg5BzxZ3Ht6sHMfRaZ4Knf2z1qJgyD1ViKpXUer7dvR16i5zLZ8PZ3xo17KdyxQxMY",
  "key25": "jZ13ivLVfLJv6JiLYgrFgSjFo7oBfr5CUJdLM1Kt9J7ET4tU6z2joqAMRnPjPCS3RaNGAywd8pN66xfntnaibgU",
  "key26": "BFbF2YFvEdA6EUr2QkV3s47XSECFpFrhk186EY7cJ7aXqC3ksTZRjxkJ7pbR8hUffdzk4sFRSsevYTj3iByhFH4",
  "key27": "4B7XGFCXd6yhQVWmBcSAczbFdWtACurGr92LPuXs4JRuNtL5KEkyXuyQ7VgrNkBrcP4ySyMkgn1JFfjNHkT17uH8",
  "key28": "8KXfgiL6aKJgyuG51scX3dBd9AsViuzdeuAa64ks1W1AHnnHeWQ9uqhAfutC2FnjkD9AHf23z2jwQxhQQGurhqW",
  "key29": "4FJBLy1tUfDTWeV1FgUZ12VuwEjcqeU5zQPS3PBcASJdwirtYAaZ9JtvhQsUFz8quov2kBsWQp5WAGWvydMLBSjj",
  "key30": "2GS8NV8ABkjZnvG8LsZgsocm399L1hZE7dAuEc1dT7RTSLymKEZDUmMnj88wH336RonRi3Yb5yc3EPtKYLzvQk7T",
  "key31": "363WraZSYNR1U9whT5KJCrzKjDmwTpJV4yJXCyDtcYhGyUd6ocadebjfB9CMkN9ptbXjf8BE67xtmiETdxEjW2ne",
  "key32": "29AQ8sY3tyHYhYRrNHGLdjMNHJDCXfMezkPM9tA5AYGFkyoxagyuwgQxehmYt3Q2EFkvn7gWtNpiA5r3RT4vvGWd",
  "key33": "5Q1N2b3rWQMHW3HGeaNs6M8UbVBkuZk4Et74dqCxyjXshgMonZ5e7PRqRJKYtdZQp1CsL1ALBEpNMP4aEwCvwBEM",
  "key34": "2MZuc7KmLrDtEy9ztfBvBafV5f5tFzp1T4A5kQkx46xkNvwJ2ZnsD96jNHL8trFFUktMD6bCfhuyyXqMkXHfbyhR",
  "key35": "4RXwyx23tX8afUcsm2VEXvLhmNvye21Dq5A2N4ato4RuvKqneX2Ycec7gy5UgctWJ2sxSDvb3oji2QmXg1st3Pvo",
  "key36": "3H2JQVooyRKDwvDwwjsDuy7NNSxPyK7kaznNmeFF1Gcf6TF4wo37mKfFT9WosuBv3kCmBeKVzv6RJMg2kMstBuhM",
  "key37": "3sx5yr3ttKE8cM7gPXsZRRhwecSwaFtggJUCFHN7U7Ur2DdLP6idVo8Gr3nNejJGBt8npFktZDd5jrfDB9sHb8mC",
  "key38": "5d4iXL2y3g9YA6UXSbb2KdaXaSfriGm39tm1Skc7syu6qEUcrx5F7yqeBqc5xraoqbEDXW6MJsV7MTdorYUzvg6B"
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
