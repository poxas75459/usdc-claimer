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
    "47ZDSHzWeDNqDojsZoP4xYpkZkrxZbfqqfeAAmev8bGoHzKmmRXdSBH3dprZRRMpdhvP4Tin5DYtDffgfgRZo2eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5frUc5aY4SPaiXifB211HyGh5jCKVKKJtiJumnZ4gtWX1naUaANaCnBEk8nzxKYS2N66Cft7JFap6WyQ1pdCtqDr",
  "key1": "24P6EXKBn6A94WWBZNHh3PupVgEq1ajK5zoPBouvdNUVo5stw1GDsZTkTuPnYQfrhLkedUMJ43zoi1LorBTSiYeZ",
  "key2": "4xz6TKtHWKvLy8QxZyqZR2sDNVjhbdK782dWnhTu6odc5AFdVVkUERd22dH1PPof1eQnmWa7U1uHCbY3BAkrH9tm",
  "key3": "uytUrqkLSWVEdJjaFGxZB8FfmEuyd1XrkmWvUWzfmNRPjGXxDJgA4fFvsgdh7DvJhBFHXoAtyPNWuN7Uqo6f7Aw",
  "key4": "4UTEuq7jppP6itunUwAeAbTTwsc3KQ6tiYuzNQoMZNdsmwAzPVpxmtjt6ef3nsBu7vNFH5oERcojxPHkG5k6tjtb",
  "key5": "2A2Rmxacam5pXukWGHoKiFpwS6qqJBFNjKotNX1xJZcjD4z2PJ2xBxuDNW2Bg32FuyTgBbSVkcber95ZezZHEw3m",
  "key6": "4wUMon4Li3u9efrjrxcCj6JAwbd6inkTinSTUZR9tWf8Qqj1a9aLaqPSCWWQaKbbnf3TTUS25t96yYt39ZTjopXn",
  "key7": "5uMtarFtgZpaezGEuCLf1PrpdnvYAicP2gb41DxoeskJXgp5hdMUwHLGRooW1GHH8VjViciBEe3EaLxWMtx4HocL",
  "key8": "2XXidc6rSpyieMB2ZLvS16FP4QMXNVNs1bBTg1HJa3PawZuuruH7QBp2VbrmG6gGtCuETxjnkJDvDRc7dfn5xfqJ",
  "key9": "64hVTtwATU6fpdAPsaQER4yMRrEpLVJfTJPS27GSXtdq48CiS5zt8djWxntGjwE82JS2r5HsvD1LMMzVurUwEsfQ",
  "key10": "5275MnmAkzuF2QYwFddHRj7L8Z3YcMbRP3tMQS8QZSPcrSVHPH6fc888oGaZEBKQc1bG9nwK2tQgnWRLs5BCn8CQ",
  "key11": "4oNybn5nzrDydQ2TBhAcfskMRvvK4sF2NRb54xSecMT2ME4JoRiMuGGiTJHZmaE14wLRoHgyq1YMoKtYJV8gGA5L",
  "key12": "kZyRxGQdJiHajLSM1ujR8EbQXRoqt97PtZ6R6CwJ8vFANn4NSDq4rb5CutxCCmSEUaRQaZN7WS7hePduKch48hQ",
  "key13": "4pysyoFgq5EPzBkVd6PHfJWM3vbNe317Zxe5auXgkdryHaCPb2FWaJKnkuLQgDSpeW78yPUcMxQqSMTpu1LgKSiG",
  "key14": "2K9yv8YCmhqGVuiV1hFdAeGXfmNrKyARGYZUTfawv2e1Zj25zvcgQa29TiB5ubxY5KaGtobzsycVqBCN5cpjsuNW",
  "key15": "5mvo6Kmev357zqADAyunApPw4dfrF2rsKwoqVSNWLRKDSoXAnGJdNS22kvH2apZphMqPN33BBpSrfFxEezgXnhE5",
  "key16": "3bmUdWiQQJe7BzKjA5W1pFpHX7GT6uFc8vB6caqULrjLff5RSyM87dzevtJze2DDZyxtjMpNbDyK7fPHLCw37VTy",
  "key17": "5DriT5iSLTA5KSrNQpdueMn9e6NyAq24kW7N7jN7wssoFdfxDfU6xnino9B2SfFpmLpJCXPnsVNhJijc57ZXdhUG",
  "key18": "4icH3Cbk1aB2k8zoJ3ZVsK9rQ5WxtuLhraPHVZTWx2iDhxSk5JPMjEzbYqHV4go4SsH758isFcC5tRYy96bzQMgq",
  "key19": "43hfoLtkiDVhX61hhXmYp1E3aAtkKZ88FHEGZQsMu5FfvC4cDvnWAaxQsdhzcdBCtgJuqZQFig63MzUdreF6cZsK",
  "key20": "5mJNg8r69nhEV2nSfo4tNpT9Hf1ci3RGofgt96przALQe3GXiwGg5WWbU954yMKdVbbNpqhqmM2H9TsdAYJq75KM",
  "key21": "4C72B6BzSYdyNjCu6VX6tQFzUuEYMMWKrMgooQXnZN4caiDJnHHzYThM2kYXKfQ434idv1pra2GtnRy3XcQewBdY",
  "key22": "3ekt3LyEuns5Gd26atzH4wWg92GjCdU5KPw7si5t9NF68U7qAGoxvHxc8LiRmmrYehnWSVe3jVviU4X2G1iDZDKy",
  "key23": "2ViawzWzv2Jbwem5PKDv3sM9xcSLEroG1YYDMNEkkvWxSfaeLjRpizfUgMa8yxNQZ18D1PscT5aKh6RUWgox67T8",
  "key24": "cxrmKxzZSbdXVmCYS6ThgETTF9phSR6kiAUR3C1rkkUgdfLuvdq6KtLANimmHSqBpcEjJXRPH7JWVHeM1LP5Soy",
  "key25": "JrYVVinLc5zQQZRuLJbJ5b4HYT4MUw2Fo6EZn9AXm3Az17ohJvenPxr59tGoDX5TjpZeqHyo1KZ9htRhWwUtmy3",
  "key26": "46incBecCh2KywTkx1psq2oCydppXYJh1T99BsxhPrbkoE5Lrtz18Bf5J9MsD9poodGa9JzaJT9BGBdBAR54acXN",
  "key27": "YNiFR5ze6dnsFsTESrfHbPrCDpW4K4fNvoziGV9qbxQsSdkzYSXd3Y5YkLkXS6dnCCu4DgwzCBJ993aSYAn8v12",
  "key28": "43qUSpBbCX8c7yYwT5ZuAkW6Cz2tdSfL4MJuKsZmtuq9uGw7KyyFBzzxt5JRE1YJCUjYhpTBHHRFSKTw9EWWeFwH",
  "key29": "3eMLWThDrwLNt7TYyznpLsZwrZqn6ubPYpTKdx9sPNoVG51tcoEKLyWzj9oSEjkmAzR8fF7PSMS1WEPZ8SEAnFtu",
  "key30": "5zqLj89bzteP4Hgk2wb3cMk4UoAneFKSUMWoexaMhCt8ThV1PfcrfAcEC49mY4hLXceTVjoirhLUw5kBY8NSLDVh",
  "key31": "r24RfszXQbFo1sv1FvKRnpgVDrg1Ga755pxnv6WLbfAFtGGpXg6dkEA2JqZ8m9vxKeUHjydMXoVrc4gGse56My7",
  "key32": "5CZtfbeof4LvduzVcHfvGA4nv5CjtwUtJmhesAAFmKbW1BDYEFfrJCnrSKGF6Vg1rQ7n3UYYzvEXQJNPbjQhB9fn",
  "key33": "4Ter8x7VmnY2GnQyCnNwWhsWzAM3DPythWjARmR44hGUFdTHtYzGLSTbvTpU6qYYeHt95kHeDLv9wcmjtnh4oVBA",
  "key34": "3vVfGmrcdmJKJSUpFvfJNKKh4CL1ysCmqaojNLkxgZwYH2TtbkwSJJr7jzhG5Xq2fb6yzXMfXYtks44rRfh6C7wp",
  "key35": "2b3HUKYwHwYbPfvYQdM28rX7Nzrvi5xtWeAjoTzypVtqHSGfFXb2eNSUVunoCm44PcDVCYQJ8e8ysimqBY5VH1BU"
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
