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
    "4dpWY7f5HP2otcHtcp4A2UGcNwL17S1r72QU2DVHXtvrtK88DYvYVzVQYBswvHUFXLbdzVSMitn6uTz2FkpfnH92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBDkGdP2xM2fuiW1X16Vcv2MLECsm1dzGqFiY7ZkxfZVJDj3sKNiCT3W1UG9rK7bAvj2AeMSsvKJ32JXNSZY1sJ",
  "key1": "2QePSJKVp8krHzz6maBsJXFEMXR1BtDYB6Qc4pkNduemmmULKRwJp8D6WfyZ4dPkRkaS8wwGUR4C8PdPtyGFBDmy",
  "key2": "2BpVB4AWYkTBmdutHjK97oR9LiXgX3N6P2ZcGk8sthZoYDMYG7nz7jbgGbQSsj3SGLKdNYkCmmstvia5AHhGf3Dd",
  "key3": "Doo21K4rJTBWDhh1oZe3Ze126FnhzJzPvinW7VRMhJyFej37jo3WMSxM5i8Pey4PRffZuv2xLbpqbPWdJa6M5e4",
  "key4": "5hEuqTNrWUfSBGXSjsRSCYu97YFE3NqDTKa3UyiKb5VxKH9kQ8dP5TvWRTN6BaUGmfhRBq827NJRUj9vkrrbaLGq",
  "key5": "3HFYYcJwaagyL2fBhP2LxS3uRD8Ry4gmUKRpU4bmzMgcNeGUxPkaXdrFDhXnjgYPT24UHtRd6ctdqQUvNRKmbHVk",
  "key6": "TUzw6vFFGQ73FX16VoXJFGm4TQARr86RMqYZ87TBnJwrmZV8Sa8JtXuqn5WhMHWWDtnasqGpBJuM4EMpkgQa6KF",
  "key7": "2wuXZNUj5wXc5rferfJJmmNf2nA4JqSCgSLvDByFbXTM3wxMG9ZvWEVQuBNbF82ps9kwEUTVvTB12mvXUEcHu1si",
  "key8": "2nvQ6FqTpwqKfMN3cEy5cuwfK3oaYDTPufXKzt5JeJAtfDyBTCEPEDUxc9iExzHM3cZcb2wjabkh4cwmy3mxkVqC",
  "key9": "4pNjraV72mFBj8j8FfaohnJ6JXG6rWXYQd6BGaacat1rq9KE3HYrj3CJ9atodP8roWASreP7AscDEiJkGNWwSNfS",
  "key10": "2XLPWJUkHUQmaWmXHZiV1RHCokay9EPrpXHu42nQWyJxfpkDe8dA3UaynvQ848Yrq5ZWSEAxjRnoaAAbs4vxCgDm",
  "key11": "trWw46qYijiCFCDF3CzaLfeWo6AMndJFbnqX2YqBkW8RfDfR7MZFDihATrBYuuXG3XyQLSjD9HDgb7kx2g2hvKA",
  "key12": "3bxkMYjaA5disJRhgXK6JCHfmaohM6jdgaeWmCu9YPn2AMrikTWSNABsusL8cmPaz25pWibm9AfJipMRKG8DuWYW",
  "key13": "4jpRR9mBwRHPZRcivaBJYNse89brf3ub5CryRqBnnoEm1gUNz4V26iMbCVVcPn4e4ohfLCYW7v87SYvah9mccYhH",
  "key14": "kakzkqvUKRJkyj79PwcYLGqhcPakbWWGskUdxj6e3LqxQpDtE4615CQ9bdreLCkugq4EMNQSiEahRUXBoALtQ6p",
  "key15": "4zX72TgV58MF6rSWyVgvtM5f74BaVr4H8mwda39zddmBna1RQ9QTHguAsBhPp72V2hL1DyyUBci62EpchvYv6Jcy",
  "key16": "ZiouHJiuBYCGxaCHadtW1d5p7u6NeuBBfLA5eVKby4zQaYCy1M4gzGgstKM5VYRH3ef4QmykezNMNSN2QDTvBMd",
  "key17": "XLbHwCf6YQxEaowKzyqU9RtV2sqAJW7sA4M8cxzdDHK3qySC55aUCMgHC61xAcZ9qWNMuKRe2YAdKeZsPzaBvDJ",
  "key18": "5HgrAPf14Nr9DaSM3LxnePJXrumNxEJVwK5RNJ2HLPDMxryN4B93djJ4qf9aYagEvTGZ1JP9NXYJar5KDxvGdjBC",
  "key19": "3Vopp76UGnD4RyUdAamyoz5Mk7pPo7SC7Yc2EWWMQwJftqfk2p5QPwdtESHTWqKdBajYKWfLn4kv8fi1mNr3WxFm",
  "key20": "3LWyDsK7y2E56x1V565i8mrczGLdwKrGhaA883gJd8oC56hxxfVJ2DeAoEBzni71xo74Q9GwTADXaCLzxCezT2J7",
  "key21": "4PmuEKaXKec8PUfaFVkmev9qf8nLUHZQcBdXsWyM4jKwemdeWL6tkFJX37NRoasUs7qrzXEZyE3D3ntyX9VmqH4Q",
  "key22": "3XsReNtpWDkdKPGRSnquwB5j3MaqSGxctA8zDZ3oS37jQhXrQJ2nJvJNw3Mp4TD7qAX4VVwgL9xfeMZCC6Qok6HU",
  "key23": "5EfiQa4gEBKhTqZ5kYDzqNRvbLnW9KU3APfEUi7au5VLXnSLQLxhtB6ynv3gh3symNUUYZUcyZtaY2mSk5P3ufL7",
  "key24": "2eS85s5LzmpMjLGJ2ERe4uTTvYbATFwJ21YRUk3is4dDYSho1vtXJKBdWeVhVL8mPh7gQ3u5KendstM87CDQ4Cj5",
  "key25": "22rqHEgmMvvFzSBsReDcnkhnN3VrYh753QMkz2GTyEA3T6WXcc2VT1nrbuPV6jt5jTNssgj28o7F4YoCpp9ERtDH",
  "key26": "5XELax5LeshKNR1VgZZ2jk9siT9itkg4NNgjrqyyKpUMy36hLttJmHudieSCzM4taUrZT6cy7ybEJ3hW9RkfanP6",
  "key27": "4Gepy46YuaL2p4zhq21srMGWJzikJRuJxpbsfhyTQ3Hgbv3Qu6azzMRdk6etRnpQ5jx1vAQeFVRAviWbuLdiLskq",
  "key28": "3VDM1utbnasLQZitiCWJ2rGwc6x3BB2ECphkjwTmEn1KhdZpo44Y3LWTp48K2JSYsTPwvPVFbJgPpo4RWRStZJ3H",
  "key29": "4vsorVP25cFQa4hMaBvJGk7AZWUQaBHqdFgMqA87AmteHzw67HikqTUtrJy6mDpjhK9Ab6dWaCtJrwrt8vKhrfUd",
  "key30": "5UadWSSS57m83MhcwhSznxJif564NPZg6jN5LLN9T6u3aeJiaWkVCn8BjKjpj3Z3q7hPKw5bUwNXrGJrRqU5kMab",
  "key31": "4onaAA1ztoRsKzhL7JnNDaLo6C3hHzC3MSTakvFph3TkFqYEfFoZVgVQzxsASxWyPX6o5u3PbgwEot7kNnRY3nKF",
  "key32": "4suCjJKWruDefekBwiddbL3QRcxYnJJUzrg79jCixCzTZDT7yDMZLRXszq9DRZtuUCsawMb21GdsnDtoz2ZV4YZc",
  "key33": "2aJUBPxkjueSKT3171ZiKLp3DFhCNGN9jtvTz1AxwqhAiudfMp821FPphSZWWnNUqQfueYFype9SNkBJKnb5armF",
  "key34": "3vutxMbuzTDbL9jJ8P9sVpaNCctLmpBVRTJVFnHotiKuohcqLdjsZ89zaPmSYWSWBn4Dz5oyRWgejfmpZD7Qtu9X",
  "key35": "5GizuUTabqfgmvserCaGsJfrFQfMXWkCZnXEHyfYUrGwS3eNa5R7fxWuTEr15g7bxw9RE5haCMuzH4eiyXJ9jhLE"
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
