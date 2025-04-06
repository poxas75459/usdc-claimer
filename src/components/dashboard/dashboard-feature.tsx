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
    "vxpSjM512Na5M33pKmsZhgz12xLgEESW53qynpDyEcJ1xyYhNp2Hi8TSTotqP6fxFXZDWw5wTC1BYpcqKmSe46Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wN33zSCS4jccXi5C9B4hrCMw3fnVa3SUW6yobJbpmqiPmkfAvZvpT2vhxLdEQRPm8qdsSG3cZP7vCSv985NpaxZ",
  "key1": "5PCxdkFjYaVa2uGUZGR3fFZeoMCaQQQFi7TDmP4HtmMMf38JErjaD46X49wUmztXPQTQV3dxV2A8g6EBWSgf9mBT",
  "key2": "49XdTgSW8jfUNNJ4CpXiMBLVck8h316UWAHnuP5aVjUxC54ThCru5uMLofHo5moJFjLSAVtQ9GXMPx24SSDpccvS",
  "key3": "4VHY4wF1MirG9ed6RczM1tFhgi8aaFZd9zoUEWEEfhzv8Pg2tCthrG17xQmHAJBMCJPfPStPSRbdc4uEbEEDd4J8",
  "key4": "56nmKnsvWSphD4KVJg8xHqQqkLT4FiEuFBhSkdgcocjjM83hjbrE3LUpX5Zz3DqjhpLeyo2tb9UBEsmVAmfHaVZ1",
  "key5": "4CN7JSG2iCJzUPkaeupgH7tS5CnYjXb7f4LLgsMTCM22yKUWY9pbvoLe6Q2aDYQXtLxdqXGw6CZjDssiZBrVba2d",
  "key6": "3k7nnEaTnn9DUdk5A2i2PYM8FJFPumxLCP9QVNP82UfQxPQTXd547W8RqLBjXoSmnF9tKz6pmkLf8peTkPH2EPDC",
  "key7": "5F1ntduxgFT1GiNDpsCXqjhtLNaab2zFdxP9b4KkDxMLHsh7NBXQT6e6DaL5JDrnYJbG5mHaRZz9C49Razznyhck",
  "key8": "ESPw8JNLqAUHqJqzThQQrNmgavrwr8XwLJzfcewPbV8zvKvgF2DCBpqHmH4AAuKYCQLnFZfksWsDReWgxunqb9A",
  "key9": "3VqrChKb8oeTGFxBWiGA1gjgtCj1ZwRyxFEKfw7BD257n8HqUynm1FLanBWdhW12dZqVC9jAVj3gDah3JfYFPus2",
  "key10": "FpwMpRa6EDasKWvHCgwykFP2VU8GuSpXJxnMNpZnkeui653Zbc2sL5vgPFpKfL5eEmhcKQGL3N23whowR6E8VW5",
  "key11": "53NPKjQHTKZipuoTFW45zjFJHbW81NT6JxkLmGpBZb5f15Co668DxGBK3bgbJgvZjvTgZxmDKZJArrPrvDbyKLbf",
  "key12": "3AhTp19mPtxCdFXnQE5TTpPkqbcxHCAjmQHcH78vmjAefjzHTGrLneHV6dh9nHj6rfLYBnUW8iwtwT2qdUSqYnFV",
  "key13": "2UHES7VYGMiZRzyzDirevBSoqE6M95mCBxJDywScK4FuoYZFxp2he8jXhmGnDQPGC5EwtSGAHCfHwMNSYggjr15m",
  "key14": "2j8KBAeccUh2hQ5Pg15YpQYLRayerXqWk8bwRtf7XBzLuQ94AarWLt79F2SLQn4dYUaNBNj9YT3iRCQRcn8ME3YB",
  "key15": "58J9m4ijeTHXBeAtrxdkjSryet1Nz5sGV8T4gi1rE5k1gVrA22CTKgnL6h916Mhs4EPvexKysEzMNwxBiKCKu486",
  "key16": "4cdTsHrtJhRU7TjP67ABZ3sanTyes2qyS6Le9vsAGGdgG9iR5cpkQjv5g1oV2QdNZfpGtqAymgpWqAW8F3CtP9hn",
  "key17": "5o5pkeMMeqaACpTcgCKdJ7Drs7XpP5jP1v1toaACBRK1Zf1Cv5vXXLFosEM8uFrCAighsUYUSNw9uHHwwv3JMLZc",
  "key18": "3CmpEtghgoNnAuTH1vfzCHVWU1yNyJuLKE4d34NGMoGTA6S2GNabe3pyYeuYGXnanLZUG1pKWNUao9nfDJU11Vdx",
  "key19": "57YpCKCWgrw2A6PsV4ffNxKKfB2hwFgQJZqaZ2857miMSbfKiYHDWEoqWh6erDgYuWbGsV3Fw2mHpVjDiyz8CxS6",
  "key20": "oddAcA4e3aZFER9uam6WWsXnzjfdzg4S9p8mvbNCdGUGTTWQDzqP4NUGXeNic7EgEvCZyDXzxiHseaKSWWCtAvN",
  "key21": "Wi1eXFyRnbTgjgeXmnFXDhctD5df7JqDq2kj6NSuUHgmYtoveXb8eXYkSYxXhAzDzbR3T8qdf5BtaMwXMWeqnfv",
  "key22": "5pAiGMrD6bNtxYE75oApky3rK8BCqeJ5kbYLosgsqnKD7AZrrusDQ4TQVHYBPRkVZu4avk6hkHAoKC8N4C7vxiWc",
  "key23": "249aJ9eQ6fca3RCXfx7hQrsbGKQ7g9ZUe1YbF6hZX6Qfk7BhazXRJ6GQSjeevkXMUBY7E4FvuULce5suisgDupux",
  "key24": "59RVTKC6TC3j5CXJj7TPGKzrPe9FMhq35YANYZas3wVFnYsd7nu5MvVoTPPnrtYg7Rh4JGoK3378RbNXddZwqjGQ",
  "key25": "3rk8bfvDXGHLPxxUWNgsTnNu7TUP1bK8SdK54EoidMZih2RQTSzR39YpEVf3xjioQVvcRCgMWSJTfKdoatgVy7wD",
  "key26": "3T7LzbmMaVxjC271CpJNctVg9vQeEbLizvAxB7SwRsW3UQVXWtwaNm6VignL9oTZVKNo9jtQNxqcicoiEQAt8BjK",
  "key27": "4qJZm6SqbJyPZa8S1UX4LUA2Kk7aZYpGiErbhUz4LmFhYHa7pLdgGvAJaUKsgHNfBPzXh6uF9oDF7F6SK89Gs9Rj",
  "key28": "ULKH7f11yc5rERGYsokZCcux33wKTbMM4ypnzGh1hUoq736csVwNRi6zariULyraRDZDrqXwfdVTQE5VqHM2M6Z",
  "key29": "4QSX9Yoz4SYzSNpW2UQt4DjFzXt6ZyK3RqGuYKijT5n9631wzEn76Q1AFZF4A8FQ899H3K3skfYDnFafVMCSva4k",
  "key30": "2ME5iq3Lvp38WdHFoAepnGFxrFXeL13FCUBFcni1WXoPPccuhD2oaSGFFezCUR14pNKDBLWYpMamen8Wym884VS4",
  "key31": "5KXty1mjhbXX4LeYARB25iyaB8XND4He32WUc51V2xPhi2Wsobqzno4iFwPGAjBwDcN2WycQ6rcVtSJFt4LVMP1B",
  "key32": "36KTek7T3GeWMp3WoMtdFhhGvkbuvYMCYiYDncxZShCRijiPWqPwADCmzSzpcbteNfEhkp3m5HpZ4v1noGTdNVek",
  "key33": "2A7BmQYds8LV83biYrraDp4Ays4QSvY76e1Qbx2tKH4ALeq2LYfSDK4g35Ae9MEDzFdhCkukS5RYyJcsXFHD2Hrm",
  "key34": "2n8JNWimBeCCGfJtopmbgysYKMWQbfdxAbuQ8mDG5kbbQr4dPSL1EY9QmiXh1Dem5vrdX378YXL8VXxfnmtt241t",
  "key35": "4hcfDyR3owPTdtqTBNLfVFbQG8BpP1RS7GobHVgEo6iqx1L2jJ6JV3WtosLh8u1puVvnKWcWEpgwCmWQQ1PRGssM",
  "key36": "2vNMwxWbr8jjEBUgRDteQTkZzo9VMbbWEbUjzDwapeod8hoNrRDaCaSYSefZRNpzqt25TvmDziuTJzfvTjWkfrQU",
  "key37": "4WPd2RPqh75CB3WaFhfa6vyiBAHV4MQLiH5LGXcauYsAqTchNP1Cn9UB8SCMFtAXBQy5J8c3osWifc4K9KtA3fDT",
  "key38": "3XJbrHQgmG1zj6Rm51cMqocVJSS21xeDWDBPsWKVMGnFb3piPiPQ7Cg1GRNfUYENgsZDP4aeSiJ5HTkq8pypS3uG",
  "key39": "dH8Ms6KbCtAc5fj82957Cx6iq8xeTS4UemwiwK6FgXb7cGyfsjgPWU4YKNZAZzGqBE2JkQhf6KsRYtD7CabNNpM",
  "key40": "63AUHCFHnYiWEsjfzyroTmvT3dXcVmVJqgUpd4i8iuYGqyFoSsngzhfaYURFJwGfZCUpR2cZKQZDvfNJTCBYZZJV",
  "key41": "5NByBaY3bGWnhPiQf67bKvaKoAxe9yf6jDb9nAaM2A42tqrhesjkEZmshMRWj1JcUHQgGURZHqQa6K7gD6s6NoQj",
  "key42": "2s9YNpNU7yQsoBaEhYeeaWR4mpewT91oPepos15EgAaUS3Qtk8Lg182bZi1Lvd9zqb3m9MrJB3yAZwzBDS1wRWZB",
  "key43": "3RW9Ux2mNBfMUVnyH1HAq6E14PBHx1LzEFcoVqX1Ei2vEtAJsXxc1AmKuH31Q3JAsdqtwoX35SUTyp7u627Lp6DD",
  "key44": "2fegQv4vRh27qcx9F5tMiqt8viaYSmvgG8h1eMoQoCwcKuTom4b5sekesmUQFqi1Tuw2CnUMxvNp6Fr26kPxzL67"
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
