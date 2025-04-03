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
    "FrESUay3eT6PNMQRvQ58oEkhSMfJeczvecqturTzmmQAf52B3Ls6d9ffbsNgq34z4fDyiYZt2q7Q5cmZh4bVrmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ycQYNEbixyieufDejzwnrXVsFbr8pygTcKuAyepje7Bkgc4oL6uhYy9VQGPYCoxzcYtN6BPuF8YZ12ZFduTmyP",
  "key1": "vuutGUtMajwAp5iYQK9p5qkogEiziBGF9wqnGr5B28F4bsNHbPu23mANsvHCWJ2551Jfwc4mi52BEubGZppthz4",
  "key2": "3fDMRmCmnjHZhoyYAkGzJNUzTohgz9bGiR7yRwh7bxd6hstjBy35osJzyijx4S77LyU3KncbTpz96YMYsyEcDvYQ",
  "key3": "26Vy6x3R8Ea9VJiMERvyFW3tHWCcokmJ9kjeXFCoKgQWas5tnHwuRbyjY1GkngUbX9RwugPWBg1QgF9NZqCkc4SQ",
  "key4": "5rvzGU3netHXP62Som1iCzTBR5wBNZhmJUj26GHbFBwvczBKbMz2kaDw5Ph219CDQT3GXRvP3Fb7GKMz7HAhkBZ7",
  "key5": "61B5U3HEtdxZbqZnVfzftNgErn2gQjKwMNYusPzhouuoyPDmR9nWHQKGqgSm9jFv337gSHs4ckoftErfo8mEikqq",
  "key6": "4CCZci97ZdJahCyknJ96ewSeAA4tQtorBGZ5pivAK7424wDrRVcJUAfSz2Q4V1NpV6ciViBZRazvrBvcV1YyB5gk",
  "key7": "4mw3trBo7jpyWGRVrUgkRNDzqYg53KfN2BifnniX6AP2MnqRLsqvBQm2xh3BVizDxtFuTEmmG4wyDvhJrTQoXaVP",
  "key8": "51MoH5qknShbsXXm2gJm9WtLVBGiWmgaBWLqqffMwvS1pPuu7YujjDk4AeodHujie7iGBDcZKVJfyBJUejRWuJQK",
  "key9": "397J2QKoVPBYfc9EJPDwcBrvpgqC9bKw4Z2RP2mq6wXMHmSGHnCqEbymTxYFx49jA6xgb5sZvsp9m2SHSbrxHADp",
  "key10": "3BiSrtux5bvhoWAk1WtTbYoFsW67g4gV7feBgiqNEuWG8n3L42p2gdpmy7pdW3fVdQ7qJhu37LXkNhjhmzP8NcGn",
  "key11": "61LhZHrdGrvSbrcTBxKoLiTCTRdmwJDyLUvHCT97odbvpGvSbBRDvc5uQgrwwsGvC82V4Tz6cqCuLU4z5ScEMufq",
  "key12": "csZiToTdD9nMjSfAmd21jXrHaNSwV2C3pGh9VnT4SRUA85XM3UxqfMyQBtci5HiphKgpYV7FwehZ4dKfQnL333R",
  "key13": "8PHMSXpRoHRCfvDnBmBfEMLvTN1LUyJa3WnvDgmN2abA7tCmcyjn7Rh9oLhzFEA1ocgeQxXz54MCmSfMrYVV45b",
  "key14": "2QcMwNHkpPQNqnShecSefyPtqbpkMv2C8HGByGvStZXmhMFWLP4YzS4SkgqY8pQQx3mz8QjQxzvyTEuyNyweNvMD",
  "key15": "5Zj1YF5z2k8g5fD9VgJrw2MxXCEgUT266rGG9Dhxr34xkkcS8WQj23t2DuhDPFnDPH4EucxfYam2JnC9T3eLNuKn",
  "key16": "5kxJeRQ9aWq8gnFjQzihpZH18Ghg6tabEKe8UgGQz2CN3NV9nZddoiGigUkSKNWCdDwtp3TC6dNBM1wsAnUfhn5t",
  "key17": "3xqmNopxtZKinvN4whGYL8s5isLLQDCycKSy6YH5VJH7cJwzgj4gev4n4vQP9jJgnASsKEDsCxjhiYZgXRjph6Mv",
  "key18": "2WS9rMXMf3aRtCuCXR6Y2aQkaVwbvVXWL9JK4vX6R3SY2DJHY2MyZJSkoTogsCEispd78FsgprgxDDCrXViShCE2",
  "key19": "gJz162q2vKBpaSKS48HSGoQVVNJ8V5bUHWcCT6zGjy22LDMJ9rFY1Q3hmDQPffxQhsSWYbGXZygHkx5fqq2CgfC",
  "key20": "byctyu9UqfuKT5qYENLXzeo1nQNFLnL7QKSbndfcPegvDXUriCLYx1tEqxRPUeWXU2NHC6qyxBoLQ1vWeYDQMwY",
  "key21": "Ednt8ZkAbeSzDky2ShSVTDz5wrfmYJicqYxXpHSbvYwHKSvB78j5TgNs16FrDtucnuuV3A2xt9qWPZ4GGTFmijN",
  "key22": "47QcG7r9gYGDZZJdrcqWJAgkpcZdw9C7zTq3o2YZRvrZwgzTMyDbKF9BWLp3eTWSuYoYa8aiHCarmf93DTwRA4ht",
  "key23": "4brd3LtHdQaS9j6JvgRg8M8g4kcZad9EtxWYTdUGA8Tv1oSVhXBB28RahYqKfx36JAK49GWGa12NQEbNnRdB8M4D",
  "key24": "4mGshA4R7UM445SNSTXXgKnwxj5YWgLT5ZvSQnWq2JkbWNuyXDFu6SKGEGTJ8bh4DpX2icBFy1zN3iLTsynY5M9P",
  "key25": "j3epHFXnAEqSzw8npxfZWnqtE1UESxDpKN4db7KerkNsczycQscUCEFTrJ1UXNyrq4rhG8itXxFwT8Q3BKxAQkF",
  "key26": "3DK1ZwULXTuFLwKVvAAUQJ6V3Yq3L5RowLgkZBcFDMve4Fnz8HMJJuWUdJtHgmn41CH7rGMN1Z1ziSArSvfrVoTy",
  "key27": "4YLCGF2dDNnSgivNxRPVtwTzjBay8HcvUicypJHdpMVQuzSFceqfKRTbKsuZEdfJwB27vf3qxwvjN6dPJdaJqz2x",
  "key28": "4XbEkSdPzDiA7TZEghfxg8wKp5fjeYkLzSB8cMtWETNpenb2iWEJq646jzjYJ5bG39VHiRoRtQw3TmrftmM6w1k2",
  "key29": "65R4hAJnJz8H8hehb6k41wEG5gqqKwG4fZEtV8GG2Mkwfhc2fhvzKCbb9R7hcxijiTt7Edt9Z1XG77f2CRPVZYc2",
  "key30": "2FDM41Dx3YTEFVrQFNSwswKkxMYtqG9iZMKwPKbW8fpBBMwEZisezDKqBn9GQSMmKJ4vmEWnx7KN3h7rR1FN7QP1",
  "key31": "5pTYdp6PhaRvVVTuMHE9iUFwnga1xWg2DtTNtkksToj9V3HhLgTyuSfqBnSFKnji5BGuSkceRC244Jc1v2YigQNJ",
  "key32": "tTYpxk8QGgagvmcpGZTDFM6hBYabncVju1EhZa13p5VT7Eb6CFM2Q1frf4F7n2sJGrRGKpZqyD7eRh6N82mi9kF",
  "key33": "5DJNLaASUotJu7ABwEwCjDsDxVTrb9oj5LzimQKJXwpzDNB8iHoG4Fu6fusGrLDSoXz3aDab515NAshSYZvLCVmJ",
  "key34": "3fgzDdzSioAzgXVMCN76Espmu2WtdH9D1wgFTmBiLZGgJXxVR1E1KZqwDG7CsmcmNP2kDGTgLuj9djukG8PrvZqX",
  "key35": "2Q5KyZtd37pBpaGHz4iGDcMFyY6NyQ6pfQydshtgnxdJnSG7u1MfnafgnrXjDoMCq73TQYJGj6QeyxuJprMop4aq"
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
