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
    "5mwN6akGRpVw7PdiKchmD1vncM1EModsQr7AmjMRTZQEwDiyzpimhSKYzK4zDtysJYUj3NLuCkT8L4KaRSj65Cww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wXrmkQAtqhRrkdM8nFwfpHe6UUSZ7Jf6CaMYiySyUFf9aMpKuH53FqsmJb2QBRFywW5SwddtTtoUgafRCynoLV",
  "key1": "48BsLw1cTN8j7AMMtfvhH8cSyQX7dDw8DzDNJSePypecZx7g46LNRgr5bNBdRmYcZh89URFKV15pyD9bNxczfhc3",
  "key2": "KWu8fxG4YwEyn1xYoqNYjHwmcYeKLLvKoSLNQGXuiGYwyS2G7dRHWpjZ8BThdkiEsNhbn4kXoscWvGnK2JNm84H",
  "key3": "5Gpx3ZpDsVhmq5Q6t4BVJLaoo6y4VwvCxiDg7BYuhRLNLzeuRiwvzYg4irYFfRw8aaVciCFt5bhVxN6UezA6c3iC",
  "key4": "367jfBqnQVrGii4Ubdf4SFqpAUEEajBQcQvGM2WddD3AqqrenzxEdrbgABqTzRu2wfkjJj6ybok72gv3dLezcPLd",
  "key5": "3f1R8igdG1pvcpj2ShL84usemjsUdwVmjUeFERfK6w2EKvb3UK1i9zu9kXNUa5nfEtFQV9mqZtGCuXfDTHRrsFkX",
  "key6": "123AqGuMsbfstb1VgvZe4RacgDvJg7nDvFXtKw2SXQUAEkseAC8Gd49fVy9GNMFBr9gt4FnNL6gVpwDQrVHNg2VD",
  "key7": "5jbZavdMV8JdA8DEyyhcdbLP4H8NRSrgDepLcybSXeL2FpbucFRLbhWQWkcrBx1hmWXvRpcDFgSAKMhefiZGmZGG",
  "key8": "2UB2v1SwJjDHgpy7HiP8BtRVBTeaqPyCQhqmermQDLGHZkvn83M5TCZPkcSvegVS71ZtUm8455SXLBndeeVqBPLa",
  "key9": "3WUjZ2pQUVoWrcF7NKtP8Lqr7cEMMJ9fvDcHPeWrts6wTqUkhiZJWPFGqi4q1ASDn2L8odQQGZ79ESqD35XTM6ha",
  "key10": "5gQfCcrGAzz1hWJUPQMkfQWQd8n1jUpWugP6DzqKBa3FZuwEL2a6zvfYpZPMu6oSgwEC3eC6Ga7cv8LKGLdLUhgk",
  "key11": "3GWEqvHGJ1V8RpG7L2dtvbg5Sa5oY4jxZtAeZ7295CJK8fYm6JCBUmxhFAaJiLomzjWSDPSSNnwU1ne7UFatf9Q6",
  "key12": "HAyjki21Lq4shV1zQDRQPvxFVY4RzfB9GM1jamBMdmnME5bG2yuCeMXgbdWV9LwimnNxphkSWRxyc1UqbAR9THJ",
  "key13": "jvPXh2NLrJukXG5cJ7Yb3iaJ4hesuLfkRZPjPdVjc1pFYYuFukoeyXcDSYgMTmKMDp5HiaecCoNLRh4xMT7iudK",
  "key14": "wd3r67KAbqMFrzB1rwXiwRDxrgmFApLNh53tpFGSBo8sAeqKxx4jgZLd7iXeUnWw9BrJy7qKRTu3FjtmQpzS5k4",
  "key15": "MmVYwngaAoC273yMzodgyH5m8vpcVGL9atPca6NGBRaWyvS564ifPk9ZYohZeNTVS2EvJt8bxY9ysb9SU6U81ej",
  "key16": "X6T3wxPmfgUd7zwWoM7vrsgCfyCVR2Lm97phxssFYkV3tCZWfSEXEj74Q27xYBunbkYi3D2c3GdMb28BDEE4inb",
  "key17": "22u1F6oKtLo5V17grmPZLAZy1eSuXDqb28HqM7zJmhim5Cfqa2pLVK69vFaH8EYtP2RLpwhPpbmn2hLprF8BzrgG",
  "key18": "2BG9RoJBP6eMxSNVY4VAhKiV4rDaGa83PrESkM5BaWXRY9o78nkaHstZCAVeTCLMx51P7vukU8qRa6hEFQqjDAEo",
  "key19": "4NuALHa83VGr3hYTY9jkxPXkEkEWyXUFs6NA7fz7otxRptTKiPUqPb3wLBuEryGyG3uRPGKrzttnDUiaw4UBV6p3",
  "key20": "5yykhrvEWdVhNUszcKPWed4JNJPf8gCvTUANdrPXG3a7XzRJsSFgfz8XuSzmnmrZLej6X5Br6nvLJT93DRRJWfjM",
  "key21": "WWcqQzoW8YUp3ZSjo3yJagjXDgtfX3A69yCwSRzUT82aCDduaW5sAAAc2SoLiCrc74Q6tSVYq7rQnH6nVDexuDp",
  "key22": "4crridGjzZf5xdyQfhSMp4pMNtdq5RY8LEi75ucHw81frW5ZFpRQEvJt2G6S5sdK9j6zyxKGeu9211H193DHut7w",
  "key23": "2cGScpzMsYjxL1Yr3U7rJWMQ68vyDtczGu6yzvx5g7k8nTtg14q8C8d18FqSy1YMr9k2oaT7oZJT5q9aHqf1q4q9",
  "key24": "3iLfbUVfuMKTMnc5H9tcZG5wQ9Bq8yPWxHw5r3UhGkMCmGqrMgFRaXjWhS85J7J7oLorAaMJPT4WJXotXh9Y7mPp",
  "key25": "39ZhnJFkG8KrLFu4Z8KGnxyCpTLbY6tfhPcf3fAibMaAuNRJaeRpWq9k3EZwQEXZts17xfLHt3vpgbSYojH2P5ks",
  "key26": "3xVdwRVReQpsAZa9GLAVx7Q7q7qu7PmtggpxUxyJbCbuNkmKZjXDNm4WmNgJGMJYPzmkEDnUwQd3KW8EvVtFDqCA",
  "key27": "4tBhJMMXd5wqdW2CarnjYcua92PptZEmMgYKGDqUmqBgxGzyrkxCeQb9pii2EjHHXbyzf6h6VWUwmn2Gc8o3JLa1",
  "key28": "2kCKsoEGwZCV2QrPbHHHvuc3yWpvcKjaMdmiW4NJD49p8zH7yYFP3XmN4R4shd8gcwX2XqXJz5gfUfwjiJQwJHcc",
  "key29": "2TEm9JVXdnMEw42gzbhDNEFLFc6np1GVp3abRH95auH7fJgfKCQP9vQeG1KRAcvLf4uxZCDp7dUGQkZFE2Qsc1UC",
  "key30": "4RQXafUCabr8CxHuGSREgxT7Vuk4MhEGMadQjBbhq72H3ntDu3CuVCsprYzjTV61sTPytD398A1Zp1gx615DN5oY",
  "key31": "4tuWY4Vygd61z6cSr1FdakwpjxzsWReLhH3mkawCSQZ45Ygie7136tDb8YHDNF7rvUiDBNnamfjbwusP4rGgWfxL",
  "key32": "yCr7w8jrgPWYj2GvKU797HqzLkMi7FBPJuB7syuJMt47M4m8RERxLumBMxuQHDAHxbZzpSGmGb6DtWpjSs9ob3y",
  "key33": "44WVFAsA5i3LRwgxwAG6rTnyHhB1F9fLb3TLxgp1ukupnFsbVS4YR6SdoWjvQfyvBK5XwQTpnMk89CBNsWkiq5vA",
  "key34": "3CB15c9G4pmhNUy2pUstTo2bVMaursCNNxUZ6b3nqCJDChb8zar6j5YrvXb9uh3KvpeYm6kjU7URzzvVihWYunAZ",
  "key35": "4LUYrhTEqSMYcLewiz5vYpydj6jgamCjqP9TcD6raT7hgZXrQ3LDjmgCnuWzavfL4qke18ekJbvKmdq2MBbqoRiD",
  "key36": "3rK5qHAdCd7bq6sKbDeZBLcfaSrSpoh7TUzs9jCsDm36gcfpMvWJs4PUmDm9aMh49ZBXoT7oHe4aBH3iquwyaw9t",
  "key37": "3jYTza7EF4LiBpqYemtpr5Q3yEQoYSWNNnUvMba14rR11Q8APEqb5TXrUFangLMwRspc5h1R3Z2nqksz9H6jWeG5",
  "key38": "4uhu6KfVzTDe7pkATfN2TPQXD8CgHSDx7aESWoh4mTMMDzJ26mg4NALetjo5rZM1cTrtCisXKdibub3L63nJ2H7K",
  "key39": "3r2b95UpYEpWX6UpiUnVWUWPKroNCA4RsPEpWGHDAXdsJmkYAbV1iJu8K5X5nrwJwUnRdqkqLFi9SL9MH3Wr2Ggu",
  "key40": "4fcKgCf5d16yLa93Fh8NHbXtyhc7sjesJgECX12qQbadPtr1wfmFVPxRNWpKZr9m3f4H2e16RCiMpUJSzWHTRGF9",
  "key41": "4DGhPpPDuFKZy96LfLk3csXZUGPH1eAHmGyy6Ytj71pk2jdmLmiJ1NkDEEaYUKJ87QQRaytFXYTYdHm6Q8s6gxVs",
  "key42": "5Q8sEN2RZRCNJuGwLwutUjkB1Ha9kuW3Dw125vJptwb4FPPVLJNxcfWA4C3SnmY3A2fLesSxSc8rgwf7Q8aiY5qi",
  "key43": "3wM9uvcMRr16EQaMfDoGNLUEayswL2YNhdVW3TaTAUR5Fzu6JbDQ7Km4GJfAvVULkWxXx6hjzWdP7akEcjFeauGH",
  "key44": "3Lgn2Mvq9BQ7ZFw1YbxXKkxYfzDYBEUhrVet5FKkum6oUFLTe71zBNz3AmaM4JoBMAkbTbeK6odXK2qYyAnipsuE"
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
