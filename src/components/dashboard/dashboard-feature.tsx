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
    "ZFZtXeeP2sKkofXhcJAoXLvmeFJ3tZEP2gjivq8HJ9R43TCfTWNaJkAwShXZMa3v8RWLsYU956E2LRojR7MvfdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TemSg88nPo43kJuForHjZ4FZjVV5BFgnfnmXCPuwZ6ZLHr1rmyEjw4e3yEvkjbWdU2wmXmi9Vsqp2hTE5CLBQ55",
  "key1": "2ZqnHNNkoUNpa5UQdhtURNkpzLEnGnSaJTWp4VBCK4URX7fyKD15eSxJy8LVbR9CPnqxkyxXuDvR4rH5WfSNAQGH",
  "key2": "2474zkg72u1A4JZQicW8SHZepyBKjx57mfDaCAugY27od9U3vdmRFHuvJkedCxT2QfANhMnNgmGMe5Gz6q6Nwtws",
  "key3": "5mVSuR2rjK5pDKxNBpaRcRaDmV9fy4ytcKkBtyf3ahvD13XQ3fZe1Mu13nma9n7UyabC5HkjofZcadEvot3GNLPd",
  "key4": "4o7EtrNEMLmZ8GX8QGZ9qZvvWFXFc7bcqTFVHQu6K7Z6BZzTWsbw7EriM2hpyhmUfqWQWthBNsdK3uDAZcfvLXgU",
  "key5": "GZ9usJqk1CMpeXcxzt3PAL6KzSeTwibubJ1dcjPfA4pPKQUxByB7oi9agvEycVRqaJUtNN2BHR2Kj8jb1JzXaBr",
  "key6": "55d7oPJqrtxuU9K7PTEgTSDPw42U7A9pkRi48MHXoDqzct7gCJZw2qmKBcPvjccMmJAetgt1N9XSNCGZBD6x5Dwh",
  "key7": "394dGyXDkT3iY4DwjrQhBdNfSxdL7b2K9Boy7TQGUKYhRiaHBwMxX8QyoFGn7m7GFKvR9PoEETQCiNK5c9xBLFx7",
  "key8": "321DW4es5qp989YNS4sDr2GVwkeq87zyYyhhNkARLJnCcEnk4ipM3s2PGykHqhuLGn3bCWHfCA8QRqsBiUbGSqRL",
  "key9": "5QB5mTBtja956NC9Rm913xiAkgUL5fSskaH96wofVr1VhZ578Qd63ricJZ8AZZUQbXRYoA4xMvnC3jm7poBcWUd7",
  "key10": "5ZkYJGFsSDgiTiWfiS4wvbQJVHcqP5eCH8PbjExhqaEzjnAdFuGngV2Z71vUs2mbUVg25ywzVCrw66GM7JKbUDKx",
  "key11": "3EK2L3Gbtp6qZYGVtWkZaVt4pt4SBiKjGEHwGu4L5tvbdBJQV3Zfm6YDouME9JrvUDswcGYDDnTZ3GLKf6M5Qvnq",
  "key12": "5scZnLZ92i6fd3y8BcvpYAtBeowzFAWpL3BAz8tbbE88VnGaHXoFu2Q5f1TehvUKuP7S6BPM8uRkDTnn9GCvwvU2",
  "key13": "5jQAgikR9PTc1WdDRhzMA7LzfqZdMWkziWyGukceaAh7XcD661LVQeEHyJwLkh7GvgmdHgbRqQFvfWzsS8Acqq3U",
  "key14": "493F5dFktq7ocTBAPnrxq84UGJESmcEGveBkkr9UfKKb1Hrx2xot4popsitFqt1BMPHrvH5aTYSpfAeKSJVH4CNY",
  "key15": "4qqUmAcU98f77yzwStM6UuGLBzrfMPc1Vf6iqRjR8Qao4mLmHtv5xmNJgSQJSdCJCLGYAZBddq2M8HP3Bw95bWx2",
  "key16": "3LUbj7iXNx8tm5yLrcNo6rZRTVRpCHQiox4UwH3fKtGgvnLtsCLS6Resqi3wm79YWW6YQHhuGEYRBCdsvrHsskxW",
  "key17": "4U4DZ5FLJYrqGbfF1AditQ9W1vwFAQUAjFGBmpr9RvKeaupuJzb84vj4CkRosSm8AhzBXBre37S4nbXMUsyeWbmh",
  "key18": "5Uch9JoTCT11x1eyj5P7nbpa5J1E7HAuBeCxVDUeZdLb4ALCStjmFRJnBJTB3aEgkrPVZdqfjg7BAFCqQVF9MR1d",
  "key19": "5bLBcMrPtXWcotPoZCx4Q2r3adi1SWJ1f8g1jN4wT9rbWcefKhtqHGRsN2yXsRgWmKhfQu2nvcFcG3Yha16XjFAb",
  "key20": "sQjnN16nNf8DU9tEs268C4faHcND2XajPWScFXoaKGFbHCu39CbX9dncaH6nNrUizCmtnJntDuhucodiGLwA165",
  "key21": "dT9eLpRNResPaPX5g1xtHQxTgt5Zfg61vpsoCF9VWVJKuLrpsYqAtUVd6Pi9Bg7EvwPVTosTBQhUyPWwjqBQ8Yk",
  "key22": "4sZWUQVrhwzUkT3Y948fbMJV44S4jTmzretgFoE15wdohRAKZPfmgD32m3v5HhYrq4GiAk6ghWM4Nrs1iVBTM2ey",
  "key23": "2v2SXS789eoBUqHMpzG6jH2ZqgYdd62RvzTGV6Aybr2zZwwo2JaeGgPdxKKdQ7kFJeQhxem3LdDYaHNW1FdbxGYX",
  "key24": "4ajeFvHZtRbhxGKKrT6PnptRCMYwfMA88vLiySSe7Wh9Kf9NUXe7TUrErUeTSEXtbSpyWWWoLLho4B2jfykUdzeJ",
  "key25": "3yc1DmzuWPju7EeSEms8yaJ9LJxcReyzSQvaADbftk1GUPAYpKCw1TR7U6zjApqcMCj4EHKZ1WrgTisuQKKsJYv5",
  "key26": "5g6r3MSF5fRDM9xLAZtwjKfct4G4Jt3bMiqgZBzZkcwsCpohiTqua5ksfq5fwbBorHKNUBTUf7U56FxADsCXeQYU",
  "key27": "5rUY2osRccq8TPat5ddhPPd9kjdjCBK6Lqnqt1ge39LY3VUXrdNZbwk5ENPBrFyvVAzvjQrq8GXQFYDNBoPtioUC"
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
