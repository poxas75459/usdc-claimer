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
    "7jxYNdSnBFyuA5XwHT2Xbw22aEfx94Nh9bugkc7h3PXeofGqq6yWNj8bL7rp6uUEBUiJ6coZVoNuMU8jFihad8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tovyRd9gsENMDcPgmnUSngNF3B4gdWCKkANA1UQ1DRjenzraS2Re3vXTY9TVDgbBeSAZJctkdPu3z6SNfSSWMBN",
  "key1": "3LguKeGkTdrcngFKCEWTd9i29XQ9TmYsWWzphS9xRjZowhYJCHoFsgbdmoeU1q2FBDNQU3W9LzSRRmbF5UvYJevX",
  "key2": "4bs1BKrpixEJX2BKGUYSZ7kiXniBhrUYKUoVrFD1NEVotwKAEkk2X6zvCeeRUMAvtJmBnYHRh53nTCEbqozXqegw",
  "key3": "pCZrModRdv4Cx3o23Yy1zaBycFBe62GYa7P3q2oZyMRRZGKxABUdYKX24autUMLo1wPqsXmtDo5SfrEga71YDzL",
  "key4": "4Z1dahJDn7piQFptrHBS542XkLxBxVdX2a3TTqb3g4jjVvgpFdjRn5gG4bJ3FUAeEFHtnaVAE1LUd8EwS3ZWr58M",
  "key5": "4aMRggg9sEYiVwKFtUDViGF4cPRQ9WEDM4pSrR28ZRX4QsMfb4axL1sP3M3EVETEcA1u3X4Zu1JSCkoxEpgcvib7",
  "key6": "5g3Kxc9xQ5PZWsZBsHs1etxgAUDD5CfnS6Sad4xXtZPXDudfJxct6fr31wi5uuzh6GGmz56efVkEH8QrVpbHbzrr",
  "key7": "4J6zrypwUWMx1dPNJE7TAVejiHXqrypxrug9N61AapMsHqCvVMmGBgEemKfuzGzULA296Xc3VHEYDpKvdPXENu5z",
  "key8": "r6LSwTKv1u5cnodjCZVVvPyhajcJewgudahcPo9E5oj78StCHDEGAV8rV1Zd7Jn1C1ppT2hqadNfjKzBFjzRspw",
  "key9": "3fRNXUFY3eFF3rrcQtWJUbQBLKZQLpZhRjRB9N4g6QPKggbL4Hhz93BRz6fw13dD3ffJ8MkbzLhbsK6eB3mJXAHC",
  "key10": "2ERttVae8E8q9v9Z7VBHPDsTtkhLzHS9J5cnPYyEw4eAL453gN5o26m2RHYnataFUjezn78XBeutu1EBtQgGuGxx",
  "key11": "17kxhyDU4jwvsXa5BYsaedWAPbRzi59bgTn9nHeg8RGGBNYcsdiNESvh4xNkuLEc2TdQFC2yYMpM1JxQFRAHrgG",
  "key12": "VijztQdVsaZKRpvYVpJKvbBsfJzrxqqUgnuZKAiGGAy44XHZGsDMbH6RRadFm8cTLmyLRcL6musnYXPkMVjthDA",
  "key13": "2BuAVcT93wS9tJkfcjopUUVZHzmuvy7oNQiw1rjwnyspscrBoMaYiwTN6NLt2xTe5gfHpqkrXudqPtgCZZjZkz4X",
  "key14": "Gd5MUuRMk2fWbg3YL7BVNghXwu5U66UeZdYu9Ge4WQdWYg6vVdGVFMoC5hsuyvF4knayyNNHa8nEsNfE7ZtgjDd",
  "key15": "5X3SZbrLneFtatzv2b3xxGNrwoh3X9ogqTZKS5exqD2pkmAuP4MtcsjgtUc5VSzzyvdm2iZawkEdTPGebHiu2Qtv",
  "key16": "kPhsXNhNQtyGbXfKoXtZg7wUrst3e7qDhc5ncjkBemq2mDThzXcuy61EcKNoE2nFevh3GxvvMGvwsBJTEyrCjoH",
  "key17": "3jWnxMHMDVXYm9esH5diDhwACahtv6RVTmHYBgbptTRpvndB5S4pqqCgABUze7a2QGeSUk7k3vfEsW24o62CcwmQ",
  "key18": "23xLzn1V7FmEf8dfdTNWZyvwU2sV4zqxmkBn6rqyeDhURVqMfXG1y5UuGUBZ2ZuCKF4BXC3YWr7nficRstwX4ZQf",
  "key19": "2GxUKCwrsj5U7QfTeybiWGyR5DRUqtxNC38it8cTy85XpCXKZpYqY29fK8wiER7j8TK56X2SFaJhdcnLFaPvFYcm",
  "key20": "3Vbj1CpEYh6u4zgrJCM4UzbjYqFLmQkGADJxBEoKpKSqfGoTdfjxFsY92Fioz6eTJCsEjauahK2wg2pHGeZQANer",
  "key21": "3rHhgZaiusFHCWsuRUWXwBLRU9pvHDuDsNGzSoLALXDqWRenCEFsWxjfNNLvsmCo5Fds6m4aKzta6gs3Su2QTQmR",
  "key22": "43eA7WhNam3jfRchsAtcRDcwahbVWAQY8jqY1FW2ta3eMKtq6tKacMTuRoGaFeWCF3Lidk2rzhvBvkogQLJuJzVg",
  "key23": "3s9krEix4xyrfob6323yduB3fnSH2Urj36PoUgDtpQMNyDnM1JZFkX4BySgrWuhL4BvfAWPUsP3Po22sicGHmqYk",
  "key24": "4ugiTA8aZ9fkuSA8j1ANMNWw1qUDYPjKmNknT7caPixtkXEGMB1EzqvUcThKJyBQtmetv5aU3fC36a3PXKQWyC7t",
  "key25": "3V97TmHRSM5ZpeNh5UmMBeR2fAaSkvSYQRKwAZBxsbfyvHAhAjwc32Rybhm3kD4V2d3uDtRVEJHpVE7v4Bpe5uMd",
  "key26": "3QW6omwzRwYgfnxZao7Q9M3LXgbju6j7kh7Yh5Sq2cfj1CkkJrnKwRLyWARpQx3G9KRJedfbV3Jiint6pHBe6733",
  "key27": "5JqAbb1wwbySziRAKRmueEDoaZCL2X9zDhicbArzYzTXhF4DWsAvhaLDzodtfGA367kL7PaC2FjEwCFwgmJWZgom",
  "key28": "3CWRtJgCWmg7jh9LMspE2UWybSrUA4vgsCA2b38Tp8TuiiYqWtasrKgEb1Gsjux1KigME5P3YHkzrTxQbNU33fjp",
  "key29": "2ngi1LejUsGn17qSme5Qs8jjDJjVTFYXprJzBCsMQcYbLMtH4tphrcHaotewHEAgx2cQ5snLEHbVy9XaoDCuSYQq",
  "key30": "4qNW3ZC4pDe93E1Xw932MizaKzBrYt4D1EuHfetqRBHs6cjyhx48XyNAXmmYJCBhgVnayamPpeeQ4LSMkycqQnXj",
  "key31": "4da3bZoCL5kHVsy8aUz3qEdWiRyHsFMNWaS5upYq5YCLpW1zc12D1yKngnDu13sw4ib1XriiG467SrB4rXtjkZfR",
  "key32": "5s8YayrJ2xdkRtKFp63f6Fqjbrmsyy14e5PuqXyGF9kgJKnRXDnGdfu72vzezuCvuvUmu7JrqTZZtdf7QGCFNENv",
  "key33": "2CapuXqt4LVqGNmgTF7ZhqD7JsFwbUfw348QBVuLS85ay9575kWCTGi47J6tLr4GQYmfD6h5y3WPtZjJpcMZufRo",
  "key34": "2LdBqUeZTmemVem3Tq3pkWciNbCXgm5bDy7MwdTMymnA9bKoNQ2xfgZuzQpp5kG9onP76FsjqMFnyfEgZyWchXu2",
  "key35": "3TV9FyuT6YJvQNW4vTngvFXmUsERHya281KmnKUCruZHhCXR2iqm5gFcuPW9Upnuz1fLvSzuyVivL7LYrwwszdp8",
  "key36": "4hCFPoANyweuVH1U616LU1wLknnWuepwTd93XDv8LcpzWm3yhQbJug2zEmULNfpLy2EuwGBLTTXGNhSSz1KxihKS",
  "key37": "2CyQ6uyfJG86CFQD1edwpf7FYD8LnSjfr9gxqbiMrXjhtbskX4SX2EarJ9U6XFSdfqYDLZGKNkApU9ycvt7UCPxo",
  "key38": "3k64KjbvDTwGeF2eCXhbVeVTGiMPaT34G42MJAg2tudDtKAAyDuvmr8QqWwoC4i5JbMHJkiVV3iiS2bJUi7r9dwa",
  "key39": "457JyvHWn2UW71jsXRtomf3zEmtP7rtP92ZBHWgGVi5mjEMsDyCRrHYrFauft9m89vPkPRJDtREBkY5snMheKJ3j",
  "key40": "54fkYHZ8YnyRfQR3MbbFuMCSRsZ41yZXgDED71rYYae1Vv5tGZMQXCaGSMdCkD6cjusz4SVRzwEc2JQ6L76mmR9x",
  "key41": "5RjMDyAJpjX4wQdka1xEJjEY8Beo2CfPqWtWEAdDEJVxwMXPMryxry7uoVyHFcKrUN59y5ay38F4MLPXWFUbxtJk",
  "key42": "3u5g1Anj74BYnviQ5ScBFCE8BQExEpaWeNyTCaa3gmGmfGDeheCojmPNztwbFaqQ2CTddKweVAm85GKziR3tWuKk",
  "key43": "3ryqmiQvBHXvsQhTLLCDEHAcoikSy2bL6kGfu2jPKgwYReaHyCUET842EVqQsD7fe7PegLMPPbHC5ojM9GMThGow",
  "key44": "2DGcRKKpKBsrqZ3svvtoZmoomsYaEC1rPBoLh1TpjqUskmpciXgBU5NLksynofqpNNjJ12CZ5h3mPWZD8ABSSEF7",
  "key45": "47JwZnwSxANcAJ6io7HMUGxrmry9nmGYpZfrNgjTKYNBj3p5Hf94besvhzyts5Q57xXaQ7AinmRjjFdfBT9P62QL",
  "key46": "5gGZnMGU3gQS3kme7guWtx5T97rgzajHQMhmntyhUYV8Di9x3vgjA8HruBMW8zsjuz99EwVUugSJJWaMbuuAj4Wa",
  "key47": "5Egs2G7jeZCgc9QmXuMUHjwUvdB5HSvrrxh3DNeLWSqXXxsGXTjL8YWG3sV9KscK38kRz72jFgDBrVrjCp9EByha",
  "key48": "1XzvUkniyBdAViUpVtR44aapeY3coEbNcu6mqz5qhyLVFZgRSgnaAS5jFPWHhhfj3fJrQkUVrz4FryWjLThuhYD",
  "key49": "4qoCf151mYJw28nKxY17ozsPBczLxtPDayF5PMskvhC3HyJ4mP963TAQ1GCcKnd9xUKDZAoTvw6YcBgLSACk6rkG"
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
