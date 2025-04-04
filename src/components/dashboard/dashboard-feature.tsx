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
    "Qh1thUWU7vXgkyjgM4J1aWakNGpCY7QRXc4VFgP4byq8Zy4GRD1VVeDES4eJYbw8nPQgGj4MXkrrhCtqqBVsiCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a3WhHrTEkmVdqpJEJAn6TiqqwDBMhyfxw5GaQTcbp3b488Y9abU8fAUcjJ79Q3DjaxfMefZ3Gpu4Nw5aXgnLw4H",
  "key1": "34STQFGF2A8srvysmM9AzyHAj1tnSyXQtH1qLJ5p83Gzf7aHKocYaucNPqTJpiH3WDHp6X2TuX16Tzd92fWg5T7M",
  "key2": "4WUSHrTux94LeyPQq7MvMurbiqFxT52Qpgw6hQVQeEh6KTTdwZh9xEv86yNi7H9oNZVRfdnuC2MJEHEpSSqKiFK3",
  "key3": "3SboqN2jteqXCfcrRHW9XiRghHt1VbE7jYqTkWqB1voJLrWwRPxrgYnYabGNqBGNLMLSy75gBgFoMpPCTcwQmBaf",
  "key4": "3rQXQRag1Fdj2pxauEx1DBW83ZfuTPjL95AQNDGxkL6tNkCTut52j2cSoh6zLeJD3HzhiNRGWt1tDxhYkqasxZ9U",
  "key5": "4ctA63B6QCEB2Wzti16STYh2HwyEnharUnAkcPuDW6oJ77k6FLJL1mEHEzSwVWbmuxTF21qup8PTDS8KB7cVN5Ui",
  "key6": "2mdJnLBW57zrYUje5VqypbLaQ2jGtAfkp2eAL6x9zDs5L3g9cpbxnMBWRbJp3w3DavQ7J4CQLD3DBEQbMx1upKtx",
  "key7": "2c15JbPNXWmaCJvK8ZR2StcdutADtZGKqBGo8diGPicv4rasBoStaHGbogQKv52FNFQNaiseDWVttESXb4nkeTWv",
  "key8": "2fVWNPKYpDLobPAjb2uwJWnCQrtpZEnSQXcXrHsyXb7S8jRjN532cbrjKqi8um64PugmsY9rNJ5DDNLRxagJd6EH",
  "key9": "3Y1JiU8NXKdci1n4sopnxnoYgNLjLFw9mQWTfkzr4wCSA9sFQJXR5a1T1bUJEPw5TDwVmoUgeRGsbPioKGZsbKFY",
  "key10": "4c3Mzqi8jGTuqUCXjyPAbxECD27eoYgLpuZ1yKYeMS3Szg5Vr8z1M9mqnsn6CLu5MHWkqT7ga3LNpnDxSka1cio5",
  "key11": "26f4kFHdH2nFuaVJD3RSXGyLzssottxtm6JGhk2LvzZqHRKpYRbNuoEcRv9aqC2rPj4poDtXufQfjvmAA5x8xUs6",
  "key12": "2MKkERFLNdSHud6pBnV7LbQMKpDszHMFq6V3duRnHHPKAc84D6inypLMVxbRjsYiGkZdZ3K39iRu5Hh7pDB3ec5G",
  "key13": "2kf4VyhFLS3rDvKk2pPhiTAEw5sKZhbGgTs2saXASw7dwhTv1xkEGoon7BjtNjCFd6DNJuLeDb36vVJXeQzdsYLD",
  "key14": "5UTu33cey8yMwB9yvoJSehSGSkDsXnXKrERC9CNJ9c8xbmMSRS1GQPH5GAUbvz4DVgHgstT7aNcDg9sFiADD6e21",
  "key15": "2aimwdCY7ZDQMctfp2JT7vp3YWnwdfi8kCgs2kijcBB6afSRQU7S5Hgh8Wor4zSW9LcYAvAYYuvRzVXtCtYJid6R",
  "key16": "5ab2LrLZom1eSK133aqUiAZB7ETEprnMNGKqamEzVyn32HuTJ6Rg2EJjAKU1JWXwmcXTnARL3NQtZdWFwwzwMfPe",
  "key17": "4hjYLZmiCtyhQ11mPTcxJknHi3axiLpivLohxgGfmihmJM5EiLHHpuUNSKJuqgUfVBnhZ6VxZyiNVgsVbpvBqk5",
  "key18": "3thRzX5kqCwZvr8auwPgxt9AbUrjM463vENN8XCrVov5RiM5yiyKhPG4LC85ePdA1hH6rnYowor68axeSKAEPLCd",
  "key19": "3pESVeBbdaaTWkrUfZ3FCziSvk36TssM5JPZf84T9zVAwNEzbUcZHpNWLdRPVkhcWzAzQWhshkAbDbh2N5WSAJjJ",
  "key20": "3ccH71V2Yj6zKtMHpr4sdryAZtdqEk1qyGJsjytw6xJP1hujt9WRPaBbXWuTyhjvY5CbqQPHCraKXnMCcigiBqR8",
  "key21": "m4EU3NpKmT9rCj12D6nuAXB1Gx6EB2tShK83SMYBzniFcdSSxWCeA3Sj8gkxf4fubbvcmtKk5c6MuY72qoeEBAv",
  "key22": "5kx7gJ2ahjemTtoNHSCRfZUcPh3vxBfeDUWWeameauh8gpXCQLb5YAWL3hVDuA9ZTEjNcfvhuaZRGhkcWu9oWUR2",
  "key23": "54AKLjykJBLDWn6SP2sZYcacUY6ha58hWgDi4Eg3UEnFrBN7PPyk2APD72JPnBTxXEFUCPcLe8GvwGXqWwZqmaEr",
  "key24": "VukEPzfjACv9qd88wkMuPvC5BYGfgnxmTvJMXt7GNrgvaNtRi34rjPxpWQ9pp1W9WktgauunNacQhhbLp8SZJk4",
  "key25": "2FxahrxJjSz5q8Ck7NqWDQsbHwHfUywnbCEeh33vVVUGiqw9DJtdYWLvoRHHhiyDrsgRZEFpe8kwre9NPSP4VnYA",
  "key26": "2hp5XNdAiaLGrSY9cFLWVie1b7G8gqqbGYFLaaeygpym2RFLskp5j2KFKz1Gryyw3SBsTGhZ7DCsxfr5MVzL1xCi",
  "key27": "5iE1bVVVPks8L2eEc3jqaH6vGJjkiZrLrQ4XUK6a9njaMWBpMAh4nmM8yhWDL8yq38fUWJL7y7wVW8BZh3yE8Hii",
  "key28": "35iUeodLx6F3byRndDd16mTRjPdyubKQrMPX9HtuyPcJU93kfMkNDUZsFkeX2G9Y3XT8GPuo1RLJ8EJDeH6zfbPJ",
  "key29": "3su4wv9x5xagLLDMdkJMQNFJyEEeC889ptoA6R8AnNzxBAcqT8cuyamfW9ffcZKAxbwfSq6n1y8nVpTxkZ7NppFy",
  "key30": "2mwqLNCquk9i6MgP9t8uX2sfap8qXvsCDHdFhh3dp1DcChZsxqkYJZPjx7amsrGY4ozjJkH4ts6RfNKCaMtN9TdU",
  "key31": "39qkzkUXzg3kRtuvfjSenkJruCVNzhjHBeJ3ZExb1uoyh1atLPXN5tYCtxg1k2N5zmR935LGPELro3aQGbBtnZ5Q",
  "key32": "3XHaYBUHtfGdW3o2CCjuTz64eYMvTymA42Fr1iFFzTyFJijAxPyFne3SqVKriGzXuRmiZ59fmHCLUnerdtfgnsiP",
  "key33": "2RZ9C12NNgTpmE2s9P1BtVFqrm8U2RcHJ7gDeoSV8fXaokJ3ioyEz91uEddWyrVQp98mRnrRYDURQZ4Addh6aNQS",
  "key34": "2bX5FvMHxyFdH2V8AwyHRQ3fEFZePTdV9eQjsLjBZuTorrcPYJ4Wfv68wUMEsYhajdbkTHcJk3k7EXy14K6ezoxX",
  "key35": "4H8QJdxth5JKBkR5gX4h3kxCfiN1d5CRaXXpezS6ZAWGWjQoXUyg74Csbnwan7XJBYMN1pkQcSJMhEm1qYdiqFLP",
  "key36": "MC2kWr1mu2kqh2tFQWe9LKA5DFdcAwkXPoS6XocZdrT55ySJ7HFn4jgvRnsDpfjPeonRZdpUB4AH5e4EfH91zaw",
  "key37": "3UgEMGJ83UA6QKhunhk93ZC4TR8WriAykVwLA9sqjb4mFYqpcLE5AP66m3QGhPpGnjdM9UTaRLxUuVNV4sPcmykc",
  "key38": "2UqRTW2Tj3XbhYBSNNkicSRfXKeP8t9Q9pfPKA2ix6FBJnh4aFCFv9Kt75UbLLrBEJkK6Zq8kxcEd62JgYVDiVpk"
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
