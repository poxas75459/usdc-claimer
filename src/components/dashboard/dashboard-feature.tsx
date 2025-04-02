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
    "5hupNJLfihbJ8zxAb6bT2gxrx9UCiUBRDJ1hYFRqsPUWqWpdVc2J9WMFdyQo5nLsMzspdxiCGkGDdxB4VJRwTJPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5179HWQ8JSPnL17D33utWVJaZSEsmRhr9vn7fHcaVzXKfhGh2cPymjCg1AJj2JU1C4QuRoVjJmSwd98DhtKdw3zB",
  "key1": "3r8rKdF5aWdCP4gfcmuqFQTdTeJnNF3cH1zPuNLU8utw3CiZvddkwo5a7ErxYVZm646PnFuV4JqKhANpkUDov5Ms",
  "key2": "26szHQuACEC51xsPqstT6oQ5nvJ2X4TifMt98nDmiidanicME46L5H29FBZN3AYYYreuBVg6CjXkfZx1xovdWiWK",
  "key3": "2D2TvrMy3qBw9LqhMMbUh7aNdGTyXkDDdSy6C4HyzK1mA91ppPSabyRz6v3sFQoRkGpvrNr3jXsv5T7xbTVDpEw9",
  "key4": "3SnYSAgPNpTnX4Se1L4vAfbHf8FyE3CxQpXj3tmnZT9gKyYZBDdxS24ioDreYaKCCWaC4QUqaHbghoBsoQ5cxKLs",
  "key5": "34qeDC4QXLvVPLY1yBkabaGaQ6myzzKiYRz6rmpKTS7sYSMj13VcnQgc6ntxKnEmdQ5Si1NXb4Mf6YXtjHj9Kj4C",
  "key6": "iyqZq7qjWxGeD52F6PyVa66QVZtq1JGviMt9KCdz4wN5vxGXcL7zjqmDwZit3i5pjqqENgukG4KbV8ahhJtxLGy",
  "key7": "5jm8QKchKdCZBxC3VLTBiuqizMV5FpagtyeNUuAdvBfiXD1sEZkL8pJWkXzRhNUHbMSN98W1ifUbnPbNRizgm4Cw",
  "key8": "EG3JXX9KqWAjhCXCw6ka4F9aacN73WuJrrTLrJPusAr8ayujH9jEJrdENLVvZPVNrRzc6aiaNLtXL5pzZMf8JNY",
  "key9": "3UjhqTREwf5tm56t2UuagDTfGmeAge2pD4nseBAiUz6GVT2cBzTzH1cjdf4fgPBPTcC9A8WTSEydZ7sS5SztSaky",
  "key10": "4cBGXSWhyHVwLzvhkE2eWBbb5mNFq4ZjKjn3ZcRD7q46wgs4CMs7hiZLURc2bMWwg1dn4MQEwFEu8oRMoigStKyc",
  "key11": "4zQTGrkSzaGUsvsDjs99d1mGSSi9i8WQYnhfCCgkWsE4RjJLXFyEoea1355pnRAeXfGuCQj2DJF5vKsRRWzENKDa",
  "key12": "4UFSqiaqKEG3DYRhEKdu6DzVjEGoWzs6ekEjbkr1CMEdZiZd5bvXTexZLKwZYXyfkr8DkfPPkx2L6THApVTWe5YJ",
  "key13": "5ckwrnVKvToBSMroDojZMEFf2m4i7JWrfs6BK56yqXoystW29w3ajdUWUeQ9zTuqN9D2PtDNtLePiCK24oWWUZgH",
  "key14": "5cbiFq3StKGR5MHEgm9fcrP9FvdFBtfVK9QdhXUnDtiRc3VtdQ5kDLLi4mSCh55Sq4zvmDfW1ZudovyzHoiEwh87",
  "key15": "3hBYKVGMbcgqHr4ytU66LVY6u5g1JRcaa7Yn7xrt3WEftuiEoZvpPBiT84JuyLutmsdaqzY2e2WyM9Rec6Cfftqv",
  "key16": "4TZwZZKmg98EpgXFND8QEF11wWnn9zH3pk9VjPmJWz5ASw3ryVhNJXnoor8iQ6VFnnzdNhvgScFpqDZu2rRatQ65",
  "key17": "3x9GF6gH3ZUgYfqcfwoDpsWTePDoMhuamfpUb3p9acQTCW5F7D2Wr7syecU1JRPKFWGYkY6zFhhHFiMa24SAuebY",
  "key18": "4C1xzEiPvecgizJZbabodxsVhxPGphpmcyKvrHugYMUPn3AtXdBXVoCDp1c9Vu7NpfsLGwLqLoKTRp1eL4iUoryY",
  "key19": "3zxSy2xzaCJsaPMP4VUQgnkypY6TxQvNk2wsiuJV633mBw2t4QwXnP3QJCRU8D5fGBJehJcSgpGyC3wn6XudGyLd",
  "key20": "G3XUpPKWhAP65sQJAAqkeE8hZ6BcMbaGrR9ngDuWxkTSSAg7vA6sGaB5GwmzBCgisunJXb8orxQ1KL6mJBUzVR4",
  "key21": "5boDxKGbNBQDJpAmAxrmJsmMKiVdURyCSqnjQaTLGGGdCteq9dPWfCkHGGB185QcNMV7C8jPkkEVCCG6B8yNn9jX",
  "key22": "37VGL3RvbzhMKYLvmfpJp5HvG8X8zC1BBLApUf7JZYVYtJok5SZr3CQniY8WYnmueLaGAVnVk8Db6YzD5E8q69Wq",
  "key23": "65PibfFgSQbtdem2pRznjn1QQ4brfEehuuq2dMEUQQ5CiUnnc7ZE3F9v18sUkNNJQqxJwuZeJRaukufXgfWdwGHx",
  "key24": "5fLZU237X5S5u3A54Mqf9ePhtTs9Ra9LWgkym2sCJyYwmp3bWcsMgELLRXfQ4DyQKw7SQ8ksGPVFoa4QY8kdEnLk",
  "key25": "5xzca9GNkb8GZCjsogq4ksZ1BmMyVssobfn9yJPr3Bgddz1zmcLPvc32w9N6whm1zNWGJDR8x3KFh2YV8WBG7Mro",
  "key26": "54AUDesKZkRk98rEnQhnkNMgcto5jU1GJQ6spXRfDV29Cax8yRTctnboEvsSHFT7Zb6SUDYXSoRoqeCCJBdsLqFs",
  "key27": "4gQXiikqWVLDMgyB3He2UwEMduLj4Q4mbmis7SqAPUQ3vJuUJzKphYwL7rJN2ybPgf5PZuthzpxVKLazBT8syCe8",
  "key28": "21suWvHWppVagH4S99VRmpRheXN8htAa6ZEmYEfqWpcwVWgoRU3sGZTvbbxqQQshrBcHXvCFTnd1p6ZQdkL779kx"
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
