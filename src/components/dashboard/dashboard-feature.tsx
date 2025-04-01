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
    "4HXyqeuKtsvwiDbpUC9RrLZfvKgryqJbnfdwxDayaRcjcaqQjV98hfuwSt7swYuTA6SRzo7JTmo6ZnXkSDxKrqtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eJbbbhJsMFgTBpvC79bScH2j9imFduPhcxu5EsxDTyRmzMVrRCMCmevfqXYwLFLz799d2nryTNwDe8kpWMT4Sz",
  "key1": "K2xfQHnNK61RwcXmdXCEFN2W4pDQvXJXzfsxFQhyo7FHyPmkCj1S4AqkoR3EFJoKpuo8ZrxrWiFKUUQjrYbwfSt",
  "key2": "43PCWgZeyxWr44QFjjLDKLK9BMdiTkPJD58zZS88jzGKVwziWNZumkyNFEdYUYRBc1sukA9kEg9n4pGTcFkacgbF",
  "key3": "zM3ogdPJNbCcxYua5QqJw4Hdspd8dVpSz8cFWN4xKznuzRzu29LmFVuuzFmYhsDbHBdrvB4TBMWhxWymphjyJdb",
  "key4": "4F6mAqba1gifED6giYTBWkKh9WR8Wq14WUsCWmfa3t3h4W7AdFmDn2W2Bc28xq5QcgXrfMUAc3MSu2AspS4w1aat",
  "key5": "2EYUrKrxecV9q9NK6eqAsuqwZ8ntphu2C6rgLPLBKTongmq5Xby5bnGv2KCD74w2B3m1MegzTxvX8EBc7U3LbnZn",
  "key6": "5WLPf9FeUw5kULq8gPHPhBTpLDjQBRSzjs8Nt72gXfQQEuQjAFLApF2JWgpzkcxuE8gX99Nb8scDoFmiPiunr1du",
  "key7": "2qnrRuNuCXEDGG99qLZB3BxcvPSkH3o6oedvXkSgoKbiRuq5d984Q1dwwF57dANxyCgqVR4H17RDB3xo6Ezh66nE",
  "key8": "2fjto3mVjJXYEC3hGJkF2jcSg7NW26y3Hx3tTrJWPZQn9mr9sYwn1aPjkXZTERD7X3VXGszDKNxWM89DPxMUhiZM",
  "key9": "5NL4jKsd7kW8MGttTcaWNtJv9AhkkcKwpT3H2rRtoF82rX1AP4thohAAkasWPQpXfhH12RFgt3FxdEBckqjfNk7M",
  "key10": "2Es4h5fZjM8b7qMfCuZNNeWmWzE1cNKTWM4UzbjBs8XUCc8iFcCyfLz5FD3znBgJdQSS9dfoadPXtpqMsWDYP5Hs",
  "key11": "oQMqzC95accBheua84XZVHa4ZhSCjbEv7gQiaHpc89iN2jZXeo9t8T2XXxm1rKWGQ5ZNmFvJptUzZEF1FXJ8oxn",
  "key12": "4iU6L4ekwjtRDXJ4WZ9yueY3m1eRtsuavM3sRZpPdYi27tr6D78ms16ezmB6owStaE6WnkdU2zqyDDMDpu6M5dAR",
  "key13": "5X8yubXNMJchG5wTVAYfVV3xCTewWxNUi4GKDkY2MXrNDhsGNoqra1KHsiQTwuSJqXDKcfQvmpFVnUJ6frwLuZRf",
  "key14": "4XcMwvFiHzWZyHGdo9YX4GwwNaHZGuEfJff9Ab4LUehGCeHNHgYaHZgFpu4gwH73GTQwHBvoj8PLTZ61EKF79qCe",
  "key15": "39f4iMAki4ZNAUHq3YAuGQcgP2ojgWdfzTYs66DAaN4yskBJ77znQdRdJ9uz486m4uY5ZHp6vQSWMfVUee3adctG",
  "key16": "uVtyvV37JTJEwsvkSL2fLgLCFXbbQKyZhpPc5vhvW2MZk47nMz8NtdP5oba8tBK4QWTER9VBnDPSPD8a9wN2QRs",
  "key17": "3LCJ5mpj6L5TRAdD5yaAsUXFxszvFKxhwte1Lzvt8paNSK9s7GUjXQEFj7HrTkbcRxsk3opL2tqUPqSSqPMqZaBG",
  "key18": "4rFbvsrPpGyJX9DSFbu93jH627aaGr5WSd3dwFvVsm4MgC1zs2ZjpvHkmxa42Q7PBCMZSDTszRRnhvC67nFUdmWs",
  "key19": "5jgbWyqcHyqmKcza3zyjc1trnVrcRP396TLrkA9JYLby1Hc8BfeDVAFGbhFFJkVZUbzMQM2TvWTF27RZbCBffVGh",
  "key20": "4WJcrbRA9RSw29otJCJ2KUAcW8ZbRF7asjzsqRosyt68bvoyDoXxYqyiKfdCApfhiwuNohjXZipPjsdgWda2om15",
  "key21": "UGtBo53jatqLgddt3vCK3du8f47e16uMBHoaV7GzTGAEnjyNX2qCycbHS7iR8XWeaB5zRc7k5TseqgLF8SkKiYo",
  "key22": "61kfTAdEhdBuuEUptW1Ls44gkn3Tz1NRxvm5NpwaCPTTwEyWVii6cZrbSjigGkh5AazZu2SaKoKsHYFxU5njYfJW",
  "key23": "4YiGuBDuqhdaKUJGMwDoBmNPkTQZozVTqBsaRV39poca2MhMVCi9yLuXaF9H7mPubDz7nkpF9Brx61Qs1T8ZA5Z8",
  "key24": "2WXUhgUq4koqeTgaWASgsxFqZdW6xB1cAfGV6hwP36F3Z4QfTgYctTYjJcwVkm9kd98AArDoQzi3ezEvFCc4STd1",
  "key25": "35PitdWXZcsMUNdqhdJPAbk5nE7555LTgwPh3UZpDgRjuGREQe2WYavu3CDZvR7EMCAKKixcvF59wabkmsw9UXoV",
  "key26": "4dtTtzPCsLXzFDHWXzyuDsRsnua2ZA77R7iAJdzgVC4TH58mqnQQiKe2qPeNQSvkYTy6dMbNe8RHDj4ouPv5t45N",
  "key27": "4en3iE2oSgi4BbXir19ePMAfVVNgC2JSbFbChpVP7MmKuwVA2kSM1qxPuse3442ENRJwo1C25AKBogMgjCEZ4qxL",
  "key28": "4oZFRkQmfvWt9oL71E3o4wF546MGBCKTyhTTkCzA4vgkhxHjjgUzs2fQeASjgtHHk6Q3ai62rCK1s9gm7YxDASq8",
  "key29": "4F6PmBhGtHdvHVFkb1jxcTtFEP1wh2Vcaxm8fCj4QXRuvRcq6Z82aUuTVRJQWbVbG7XrtkJ8cY8fW5uWfK9YXBHN",
  "key30": "4QsiMdX7QXesZR5XKEE3bhKgSz7K6JEDCsTYZEuU7rTESv3hwgkK3L6SLhXqyTKGqGL6QUta7QRT9EFUje8LyDbb",
  "key31": "e31fPLkHx2cdZitWVw6xShvmecNExVuSVtRBnRxkx5k3oH24pcHTUik9RjKJXGRXXhP1gqqXBtNRsT8zqPK12ip",
  "key32": "67qdvzDxirjuGtsvT4KPjbFPBm4nGeqoi5twydWzb9hR8huRtw2vJCzAdFUPjUobddeu9Zy4YmjGFGdvTqqVegSw",
  "key33": "5MjzxZD7w7o1sdaKA744MYAJeYScrrTk556wofHYynrphqv2rGgVwgzFCNPHibVrrdfEXHYF5fZLjX8RM6n5W7xK",
  "key34": "4oB9FKce4MCRZ27W7Pwy1UrbZnK5GRgZ44F2BG9fN31zreVbE1y71pPjSFubGU9RxEd7d4RednErDg4BN47RoKyu",
  "key35": "4K3KvatFRspGFxRYujHrEeMJUNNQjUzfLJYRxbzvfjv7vhpcYVZPqWrLqRCfSrS2AdgSKf57sCNSewvE1vVdt2um",
  "key36": "2DXkG4RP5TG2YKBjQCd6q6pxWir85d9yhi3C9JaQYYEv8tjRiFMYJiRgpcqvjQrU7QR9f1nPq7WJrMiMhhs1ijgA",
  "key37": "12EhPVMnDr1FMevrD9JXaP7XNUrpMLAsMn4Je4FMZGacTU78CnCkKv6Ur2T9WBUfddGFL21Mw1N7NfCBoYSm2L8",
  "key38": "nvg2kBemeqk9QRcuAEuK2HEUWDMWWsZNUr3Wem2cD9Bre6HgWX8XgXcb8AgizbcQXnukmAtwQgdzGxEDHgwVqZK",
  "key39": "46QjhfTPFJba4b6SPkV21Z1M1mQ3RfUvEcg6eSAR74o4FnxThDcoQYbx7MWXCYXcaoTX9q77p1XUwipm3GmpC4Wd",
  "key40": "tEzVSt8BV2ga3aSvTUyeBCbLxyRZznL1ysDPgBSDQp3LNQoaQ5rAegiZXteyuNCnZnZopFbns373PozFUMFzTSc",
  "key41": "2x5Qm8NnEmzct7Ni9BAN683JiApBALzGzEJLqLaijYGcQQFZRqADv6MeD2TZwEdDfStj5qrZnWovBtrTv29nsWxq",
  "key42": "wQPxVMofrsAswEYEfECDr4PqqZ97SJf7faXobNdiJNsr5nvfFHaukR2jdUarmfdKFoYvZf9xoHS4mfhcwVfbTMC"
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
