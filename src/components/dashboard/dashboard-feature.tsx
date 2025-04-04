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
    "3mCWKGiiFoUibrktSJnirq8VoHkpTtBNjmXrWRyfjimWRAffqBCRTU5YMBWrJTzJd7ZcYJpe6JSq3b7JyrRHNHP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtX9bt6DZgKLaha31WAUqPEngetiHcWde5y5BPGbXgyVkxs9T6wJAyPneRSrF5o6yKESMJoWnky7MkQNWaZTHd5",
  "key1": "MioEn4oKX3X5NNBNzHtQNyqrNdj45HLmgPMkFjXU2NVq6mceyGVi8wiPtZQ61gAH1Nygwkk2xDeh6ru7YUvXHiJ",
  "key2": "5gRuLygeSP6PCbtUcmzkfuVF3WuUjVL3NHLSDHo1MikfAqqE3zL7HFifv9Kai68MTjyP9Ug4Tv6T1AHd62Y52Y5a",
  "key3": "4mgnzv8e4UrueV2dG3qRUcWzzrdxkVAmwomWjUvBT13FXFNwbrgwhxcKYkfafbqEcRMrdyXZ2q2oi7LHUFvgmrNf",
  "key4": "2C1mPdaSuyBCxkthDTGVRJcqinJ9aXSkoDHkjVfcrppgeWjX5uVyHhBceJppvtoUCELfzwVWgB9ExqSSouSVQrra",
  "key5": "EAVAyUsfP9yPhUr6iZAHLD8Wof424ki7xmYHWFvyavRZhpud58znJVFaSkPa6v86TYiLiNLDYMd6hNN3qnxfoEn",
  "key6": "34X9mkRCeKiQT3XbAS3yEUJBKXoJ5sfSJmdZuVwB5DAW4Xh7SBJ3ueYqJPfQ2Kvz7QawfQ1H7sVDUdr8XMd3M6rh",
  "key7": "5nkDKeMJ8UPq4kzEwKpkDjL8BwMdWfaVSigH4QT1VWcLYwxApMJ2kvdz3TSCwGAT99XvYA3D6ycoYrFo4hDrepJc",
  "key8": "43nefJ6yqLCmcZSRCj2rUN8LHkMV6TBEj9uLRkNnvxdWJoeZp2XREQJL6tM2BgfkeDY7UqTBqJ3jqjQjPa1PTHhw",
  "key9": "5AzV2WwMfw9QcjhpzCZqUfKYXHo8rmuu8j5gN9ogLM4tYVZEdmGuGgaqdVWoMwjngj7BmWPqhN93c8X8n1vfYzVa",
  "key10": "MbcNBYpjLDKik8XCZNvSxViD5iiRqpyuhyCuWjxLY2Z7iErC5SqqVZT8TSEcn23haWs5pMey8K1k5B5u8y3W4Xg",
  "key11": "UtNxFTKzFDbDrApa7QBjevjwCwWYvdTcwEmRCdW97T1ovMHdbkAHsL4cMHyirELd9NTgeC7McKyr4N2DzgDSsNv",
  "key12": "57ftFnbXhn6EocUVGwvEvnFPpAaMP1sTY2FC3n6afbnXfSAr8E1Sgij8iS7473Xim96Rms8uD752hzjHkSxtoVZB",
  "key13": "2Ujyxxj2ieapMbpnpaJZY5jPyqNdSU2wm3RTSenho514eVBinbeXSus369L2j63wwhuLaughFLjciWgEdyqjr4jY",
  "key14": "51ck1LGqBypcDT8m3utEqrJ2UD4RwFwmifX5MABkVvWtXVywPXm1Wo1FH74H3Crc31QFDHiy6ZKZskXfSUrYYbR4",
  "key15": "5xgwq2sn8VqhQaCKZTBKwyDtpgQ9En1XjeenkYdg4fZDfqGS9tuNy3rHdhamTUFEhNt28FQLLxksVoUS1ReCwwS7",
  "key16": "BPRY2pnH2pDLWKziKdU5mSVdfL1JvxJcae23WdmN4ETY9aZ8jzGuQsKwcTkQLmfMbbfzCqnuAx7E3Zn8n7PUA18",
  "key17": "4DzQpKumoeeaVRDU3ezULLPF6H4vDhorDV5on7kRbbv996estY7Tf8fFER8g1PPpSkibSKMfkgtszrH8qkRP39T4",
  "key18": "2zf14s8egXwXv4M5sPqrpQyqMY8XvfpG8tqHE9aD914KhwJvJWSsqNZ6RqxjQRB8jHcQhfiN6S4er133NsdFuNGn",
  "key19": "3NnyvbCE53H6s6bmvNKQwomiSmfdfCKEjCsvUADg8qh77V4uZ4aHZWjkpPRXa1ioxHexfz8rUu45iMyPgCzf6tkT",
  "key20": "4WEeXDTUDRBnJ4iXnsjKsFwYyAqNotfqw2LkFzFC66yzPFBR2DpXUeyogQHostPPoWjciPzat66qT2eh9C4Tunfm",
  "key21": "3wYSAv3Py1Fj5xSjBQTbuo2FxWgpt7aXf7L1NZp1qSQfTCHVGSiy1r5jXnng33a9sNgNP97cGuD8YiiTNazYVVdb",
  "key22": "5kvYvLckjqE1efP1vDYMfKVABQ7jgepTrMnACwLGkAbjqWHNW7nv4m8NWXJTExTeJhf9BZjWJ4XywBEkqNWcqE9t",
  "key23": "5mDt3SucFGVEkSW4ngyqt5EdNJ5HLHRAMPYwSnWrj9MUeYJbqwoshxZ1xLKZmPyNadK2wbuCwJhrE42xR4uJPpMx",
  "key24": "5xFVzLN5RydQLrWDeHbKyMS4o4Q5MNV4r3FM7ZyK4ARGMfmDGLDmSpFFC3HWubVYTRtMZH5LicuwUWuMkazbgjdK",
  "key25": "4RpfDnN63A1qe6XDhe7J4VmMj6mwMt7oX8iYERUzEjDWxyZ7mvwuG1dMvHZazzm7KTNUSZnK2S1bu5XiuE2yCttm",
  "key26": "4w1HrdvubLD838rzwGi1iF26AghqUPwyxPgjDwMxj8xT3Fn5DFJdng4X929ixGPRQYSyNwapTGMfGeUrJ4iEP45u",
  "key27": "5TA9mxGvwJYoMsabyzH9JG6bvSyoqaqDf9vomAgy498PxT96Njj7jvLfmkXvDzuB5eM8WLJvC72MsxiMBEfFkUiL",
  "key28": "54KkScdHCvQxePkGZaquXZJB8H2pettaNX2srpQkSLny1tvv3jAc6maz4C8t8ocG8RZNaYSfJnDMUykdM71WFRGA",
  "key29": "3nt53YNonJ6D16V1uDP8UfZfJ9yQMFKaTLoFrL6qkzQ4uBsnphh9vrcnkxvvj2n1s9aSqi6S1qoc6UpZDCuRYr4c",
  "key30": "2TgU4xQ3tUDvXbAK69WmGNvsugE2uWfqG4MKUYLe2CowfJkGfddEvm8KJWcxN3ijnPZ1QUCVmJ4BSPeqN75fo9ys",
  "key31": "5NPSVH1MFSJybmwyE1GtDyYpuFBDnvYby2s5DYSiMZDhkq4kkFXb1sS9cnbWbhbUe7aEka3f9ktimq7mwJAYtpDC",
  "key32": "2K7s9VVkyMXYCFg3zSKJe1H8A2gwZjpbYdPewfPAaokRzu2qpTf8wmKreyjsBT5XgPp8J7NmmCwGa1M2jH6sxXkJ",
  "key33": "4EcGmpHwffTcPsKXmUXexaQCzvSRPuT4MxnxKEoViBneX7Uj1js76fiyipuETVDwiTUA1wWoh4MDPqmSVqgDETgu",
  "key34": "yHhSyxtMGvQd5ZnCrE3KVDYCAddAtz1DXy5d3Az6n54J5WCf6qXq3EH9HFFdLgYGPsb1VF21oVcEvGKozSxVtti",
  "key35": "2CsVoJQkgp8aQK34ryPZxEqrVhnh9LFdbJMa89467poAcv6D4buYHmKuExF29AFFxCcMppWiqcbvBZAzo253fewk",
  "key36": "4pSnJZHggtby6tCeiKjPmGoneXXqRGLaJjCZc1wrhXdpMjTkwwiR2U1JX7YBAyuMZaMsP767Mxr5r5tnYHq2wvNW",
  "key37": "3CnYc71H8DDWwpLQdoqFbgMtAC5jvYrdbraQ7DFmqTmuNjGJVhBzeFrAaKotFgb4fK7be1uJk7gW1B8WYVSitFVC",
  "key38": "65fDxdpZZ7yw8GkMuAPKRqHTDcawbMdhNn2H4L25vohqzcJw4xY3DeMTddU8SKunCd2N9c5bPjLHQJEGkDLFqiPd",
  "key39": "5sDhrLk9HNkTedbAa7XHbZCVsvQ1PeVZPpBdQsjBszwGqX2YbuuiSK6pv6dRzyd2qwH5of7eG8ofWH8tW8qyLGKc",
  "key40": "5HxMthNPKc5wYpTEajG4AMxfc8MH1cobZPQsdL22ugu2i2r6Mv6dkpuP7RsRvcTsStEWrryz2vXHczsamyHccaoa",
  "key41": "2Y7Kni872PFnBtjkZMDbmkDagWA6ttJV5aerJzK75uBLfq1HNu7yQ75TGtYJD7YdD9nPv521zbiA8gdcc55RVwp2",
  "key42": "5ZmfDk279eUCTTFW1aqKdFmbrqA2XjYXXPw8jUGhDgthtpBLngKwmRz4DdopWyS9xGK8qg9YYASRU9JVM6SLUHn7",
  "key43": "5n5sjmg5au7RrrDUw1r4zoTe2zm1VQoRi8R5JCfaSGofqqY2wR4rEkUnn3PNZeoLNhPdZLJNkx3WCUQBTHX6sq9G",
  "key44": "2GwffhPGKFMHEnEqSnbUVg6s3VCyBMPr6ryvjuBp1DJTboBBz3WJLkmsc1fSM2DPS2eeCMcLwMniqkS4W3SiqarL",
  "key45": "mSyd7RbhDFKJvMmKqV4QdaWrempv8mFXZtrXoKApA86SvpM978dV8ZhSFiHqdeFuVJv5cuDM1X9Zxww1w3rxpzp",
  "key46": "rJ5fvCFdRDghCCLHYsaQV3bcVTaqiXFeDeaj7Jf2PVMKCTwLvwCsrVXka7nTsTGQCXYcoW9bV4aJiiW74BbTL8k",
  "key47": "3DiC2onwU4dTaEpWk5P5gC1CEQNDfYhXET6Xu2NoKSPsP5847tqENMMA7EwzM8XVGxQqznmV9EEtVsqB3EEXnxe4",
  "key48": "3tY92wk5hMVVtpnW2AdjJmii2Q9NtLg6rNSpZE8QQvTr2DTo3aDh5wifUsYHsyGoA93wi86pc8Skv9GE7ZmpNMnE"
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
