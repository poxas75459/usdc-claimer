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
    "2wY1wnXPswoER4zGbxMUM2HgFTaNrKR2dp8DgghYUoYnMDJ3Qzt3im1aixb1B96ce4JbLbruR84ZvvGsD5wRBUmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPxzogKKqKwue5maDd5BAR2Rvvgq14C6fdKVyapoMhYcoZcrcodThsqtajfAX8AGEhkAVz7g4Me9Gg7yKkz3vDK",
  "key1": "3XewDToNbEjWYVKTPQPjXYKU6SsoLTU5WN6PX4Bmg83GXDRuvnfSAA3PHUyiB6hwCB8MjLuaNrASC88pNbCtJjGu",
  "key2": "56XhtNUpnfQgBBYuDgcNUXneQmh9gMGNguzVeJCj1qFZBWgTDjKqfaxiv6wqjkF3jDCkQ49B1pwRPLKTu2n9GvkX",
  "key3": "CtZ5EAsqrxb4uXF9NA4vMG5SyiLbZwjwXKYneDZHJkumRqxHvAz4YXJ99znzZpSc4B7HkKhe9KKehce3Fs9wo1Y",
  "key4": "sbW2M6QxLC8g3gLHssuZFLs1w1V61Y3gdN45J1nDVbZVAE9cdwRSBigGBvijK4L77rXK9KebVfHTvabz5DYc4CS",
  "key5": "4bPERxe9NwpbbHfQRX1wUTuXib7XH1ragRLGdhsggU9rzVYTC5iMvLgXYqepjsxor5BxPv5AvveLbvgJwKptLwHM",
  "key6": "5zaRBbFDP5UaWyqnJ5BaaTMYkNe62eMfDkmWh6JDUDp5RgVPKGKKvrq2d7q648hN3Ju24ms92ULAp4WNaDy7eQdF",
  "key7": "2T9LksJxkZwZhFF94GHH6g2v8V15YBoAvH5WkvAuywvQNxXmFVrnVSzTe2ACFsvrcyUj4gMmeJZUUmDp5dGmm4U7",
  "key8": "4aoXRj8shQtTQLpvyiz7nN3siYhnDMw1251NYoWEKeFWTrAemgjipYoGN1iPcdGsn6ZNb9HzbFdxUf4TnNs1e6zx",
  "key9": "eWbPqQwczis1Evm97cZR12LPiMbBqbxgffz2eAG2pa6ZMiEQHuehMBJ9216SbrkPoo2zZcpMe4pe7PqisyddYuQ",
  "key10": "3A6D8xayCXMnDTGqi9C2UEtw7NKxn7x9Ucd3hDuGAjXUXCLh1tCBrTY9pre9U1ixR9hh5ehpqDqxQ9iqnpDoZJYS",
  "key11": "MdiTq6eQUG1u7ifeP9JJQEovgQHw7P9CdKdBvQsZjMuYJvT4wvgWaN2K9NbjSuMx7p8Y8cmS47TqqPM6NXnG5uT",
  "key12": "bYGPNoQZ8AvEhkqLdJWKjjw359kAwLTzcKXbnhpCamG6maxRxq4s39G48Cg2Mvow7mw5gRADd5kmDSdjJip9zJp",
  "key13": "2qGz3RmQcAGfM5KBrKnhkutgWLAsGxEj2BNaWYfyh2SfJeTAt3tqdZDUTXnvtMbANnPW5jMFNHPt9VLvK58ZL4ys",
  "key14": "3vdXcUfcs1qc29PDWFmzDv9u6hGg9daD6KFxbWpNSnai5XbhdyGKxRvp8mnNeMbxxRBeZEq8C1uuw4b2bFoY55M6",
  "key15": "4ByxtDAi4sVtN5L3aF6Lnknd5h192qhSi6X3XLFAENBeS3412gnbpjVmWGLA2t7DCDWUeDrcVJ9DeAxRvVDMeb1t",
  "key16": "UndzC368kJn7pZU549HHanpQdhMjvjSwUqQ9XTz18y9dTTKaG1F2pVH6ry4mhBpY8yc19w3sHTTUw8bnaWdNJYs",
  "key17": "4UxzLpQo42uJik675geTA365WDENXJPT1suQSPMbTH1REhureYUY9okEWWLJRG2wSTBor3Cfvnt56t51WnnvCsTF",
  "key18": "4RkFXEQNeMSzYoftPPP9QEyvYUbNaYswhGmk3VfqsBDhNwJm2yHuq9kd3aUr3XAeMvnFbMwRKNmFNNcW7H5Z6pjC",
  "key19": "9wzYpSHtxwPxnC8SVsNuk1qd9hB19Q6Qc5uvEibZe8Dujzh18Xo9RQHiRAuVzEnPVXawE3X8oAoabiw9zodXbEs",
  "key20": "43hVJxTxvcP9GFkQzNkTmx2Jn7C8ni2rro38hZ3qGDT9hpMrabNBh5tm4bSDbPgo4mHGz4zx34nLxy88sfQYdzPH",
  "key21": "3TqhvruumoodQqtXdvgGmf2cCnRcZ3qTjTd95r48gQcHvtHcE81HgDLztE7TqsY1jxVuabckVytsKdRRsCyaFKWt",
  "key22": "BeoPT5ButAjM4Kpn8guBLYQ2XuL2KupPqZsddmfaNNzXMDFtXxPNmHMe2DZ4JDCr4SkyvSjHh1j6ZtskxPHNxJC",
  "key23": "sHNWXi8zfwkyEKLSEtheFUCVKZB2XMNZusdmidQGzeazTwcPEeMk13yAsnXZG6WPmsjAqxvsEPJV9GanfkSYect",
  "key24": "5F2gr7JgRWXtbi9MiMxXTyoqiNVNJ5h4DarpnCmHDUX6JjeSMUPD15uvEhcQ9KmcxUP8RP2fL8ZkjCWeo7ys9G35",
  "key25": "4X1eWBWQF5PAXoFjF9V6SNs35Di8jFmzRsdKwwkLJmMGYPVWf7dQy2cR3XozL4YRdH4nxAQYvKsRGnGRjcP69DXX",
  "key26": "41ndbwidAVb1PErqMato4RQzA6YJq4pjfoeUUxymzjuHjMAjweVF64Tc6s1fQUCPj6jGXdwsNGmotSh51okCwhcP",
  "key27": "413uFCAKynVorZH68xquikeT2aokE73wgtJg7tcyC235DMxtNuDJBNXv9CzBmJiJXx51qxdzjeUYAC2VdxRbVtXS",
  "key28": "4Lh71C9YF8zRq4VUyTnPC3T8xZ8j9MSLUQ6MGs7DtEKCQWPyskRZMT5hCbrpPbKp7Lg3hFzvZG5QqztQgycE54nr",
  "key29": "4qsnau5NVNeKwtoSR1oJggBcdSFNvrdkhAPFMpvqwdZA5ztPPnbvfLCHyxzErhsLgsP3pf5AfnHzy3SwB3W5FLbc",
  "key30": "3CMSrRdiVZkvwn6Fv2je8ZQMUrDmMF67uhv3DcvUKGZ7aa6n7s8ZsCASinCgk9j5QZPC6xby1kk7zXKdhV1bisQh",
  "key31": "7KjAEAuUrT5HjcHE7843s5fahLbHEWxvQGMdNv9WCUJCaZFQQi6F6Z5odkq4ifpE6UqrqChGr7JCkA2FR8aSnfz",
  "key32": "56Acxjzj9ouKmU999q942qPJJ3hU9V2SEF8FVG1Sm9KSVVPenLznbCX1BoTEPkd1yPRfEeAwSGBbinLQEexN4pbn",
  "key33": "498MEUBHFiU8AC6g2zAhj8hzhCiTRqL5WBFX4mxKzYYM2z5xrqvjPqixh19Siid34P8WwvhJY5T9KucFXLygS3zL",
  "key34": "5ZZbyXdc5PpxtNqdDky87oz3VNfrrkba1F8YEXeqEf7CYvdtBNY4j2xkh8peRFL1A2dKcxpN4w7PDazi2t9WXH8C",
  "key35": "3XAXDiyJHupJEPm4zSVTHkHDHTK4SshvbehuGAHDDUReuiVBfMDzeptLAWB7XXpEVYXfQEf8L6ci72CG4FThckMm",
  "key36": "5f6YZLbfe5nZFTTbkAfh3qFMWUSRneo9sxpfRg3uUZJscXFKVaBFeQVjBjGrezdG5LDpE3rUVuvXU997u4XLCs9Y",
  "key37": "5w7HyRwo9zgfXfet8PMGqqPZk9UNnB4GU37Cu6wqi2zXorN3wLsRJdEEUDf61b1NH8tV7gMDoYz2SpgAgSd3kgwx"
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
