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
    "372NPPxZaoZ7oc7QSnhiutWVJogs1yNhMTV5hYMe8A6TtZzWYAnVd8eo2CSQnPXkRhTkp64Fui1eg4GRndG3fu6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FtJvGWrFx5iqt77fWFh5kYBcMCjnVzKMpWQBe3f6yUdpwrkq9bs4pBkGdZuvMncaSzMzzMPHBeYPk1fLgHBuKV1",
  "key1": "21C4ZnJNHnQn3QkwrELhyHXdmxiCDiJ1mhd3K5FWyeGwQCUkeevdZWnMMj8GyRVadbiumfg5rY9MNRSFhqnaTHbC",
  "key2": "39Fctba4c7uwwHsmynmmq38H5PXcsJbgAbYH5FEkRcHKnGxJEDR1UEe8ZZaarc7CcQQDwYQpj7gRfUShH1e1neAm",
  "key3": "4UP5TknEVwansRaZxv12QjapMPQMKNfPheZqr8CNWpD9QguSDxWkdiWJVXYakbAR29xRaKV3Ywt9vsNLAFeYkSdi",
  "key4": "2YRPjwSzsK1nQTDkL1siSnUUzqzZ1AqDN6XLNcJJqM9q1RoamHFteQkeSg8hHZYcMKespJdHv9dFREGmaavxXXXv",
  "key5": "5CV7uPSi1cazui13Di6DjKi2T7ZH2CTj5vTTMtPfKzespR8GyJT6BqcpKJ2BpQSNs6eXForGJ1pfed42XK52jH6Q",
  "key6": "5LVkjBj5kWbKV69qPWUWSrRGK7E52ziee6TtMfVAzUU8vXHW2pSYj8N2uW5ztV9zceRthR4GrCByKs81sHrKWcAU",
  "key7": "4rWA73VVxnmUx3VPydR4BHvQx7NrqKQcK6PwzRVnjvWdLU64EQtjxZfdcEAu6KUDWLR2bCUdpTfWDAUaTkmKsWEZ",
  "key8": "4vuEh69CzSg5gnz3gUTBW5b3RxhfF6hysKURuhDEj38r8Zwk896WDwvM4isAvPEbm4Dt46R7Ha7tE9XAkkE6qXK3",
  "key9": "39WEzogFbeSMKV8raUszKgR1rNaXcU7B1moUuYtgNFwT6nFdBxuxD2EtWixUnu674NT1j2U51Mzq77CqhY38Q74M",
  "key10": "4jVW1DFJH987NtyfavdfjUXXPMJC3joPVmrBuqKENdgMvDujf7PKWmGyFzgrDETp9keV4fnYEZbQYPnXCsXEX7zx",
  "key11": "5Tcn1JNJqQYtLXKNpfpUnpyiKp1cvQqbS1mAqe6pRdtpbb1zaX3TqACajSLWncFPb4cG7UoerUw142P4eM38q9oi",
  "key12": "51sj8dWATfSaEnqrkskGDEdePYoJWLfi1fdJYQvGd3YK4kBftUbVMkpx6m8rSYQvpsZgyo7KGztFtGHwZj3qbPwF",
  "key13": "36yQbyStCd3yUD3xYfCWDpjVfQpZ7L8FsEnuxbNQKZ9n27c6Fy6w8apxDiqjoCbiGWEQRY66nj79jbVRDS84DR8L",
  "key14": "2jejgkHgSvxLAWBpSWfVtF8znytBhJg4NAUno74TQEbmaYjvVemcwgGFCfJEMBpx83tJWPzKpsdEScL4NTWxcDJL",
  "key15": "5PxKfQkUZv9C7hR4rnTU2pJTBa7AiVP2BnLnBLZdQ3KRguuf6QsgZGPDt644i1oJhPXMm7z4dFNU2xUspXqB1AR5",
  "key16": "3kqZiuMmxba7oZ3H1iPL49eJmyMxupeT5MZgFJaL2rjDTVyprJAa4LNhCJtnnzPL46SKrmfdCLh26N26poUixo7g",
  "key17": "4iFiZqtcFpvnGUevgadFSWBNbDFTr8RrJ7snCNqWY4VQBgeERAVKorxixjdJaEoKfHa795aTf9qZVHeXpBxLCfwQ",
  "key18": "Gw9dcxJ2TPXTTV26NnXT4yoGuc9owAE9G1avfm6zq6AcMSmyhRTvthjNfzwUYQEquSeviyEpEkpiS4WGaJHoaaq",
  "key19": "3mFX5M8tawpeLqbxfog4SkTnqE52PXiZJvs2JZsAx89jZuDpEZEmaypFLCEg31D7bz4X2RarPeHuoagVKDe4YCLy",
  "key20": "28qZ8SbsGTPGBzWYXNusaSgu9j2NFyDz7zNAXjmcLuRqSca17NHHQeTAjN6REco2o34tfGD2PzVPcwg8rEH4ttW1",
  "key21": "5oqzGGpvMvbm4Px2WH87MCgEXTdGuabg6ne4cmjSB47gms3cBseJTuCku3yRTTMGynhhmF9S9JKVRUagaZWUQ3Vc",
  "key22": "zpGiFZGevCaqLGrrNJkfiCdtVmm4mJ7V9oyj8jyinZF3gFk66xAYtFVaXmACtd1vsTwVxXkegNmQXnBPcnhYaWs",
  "key23": "2HXeVoAFYttY6pd2m2dCSzeSMTLoY3vgU2bodcdKP87wUbeUbjzyJZtwW8K49bVcENcJCy8UCtCx6TEB7K6Cgy1p",
  "key24": "34Y3V4YFL4QHeQSNgt9eL18YmToMo7Y1ZrZxtw5QdHKWKBdBsFkvph5p8b9QCrYqzSqy46Fd8VhG4hgdRsMh7gct",
  "key25": "4GAXTrQsHJmGGo2RmP6D7yWzPWvrasw7FNRME1q1PJrLGgadGMaeoJWQwV4Bw8JatkfGpchRPCHbQ18WW4EZ6DTd",
  "key26": "2nTzsbPVWsJRzC41tmYEb9bijxru9rKUNyKywh6D9ojQtP2jzMPqKfrLNoq6ao8Km2eZCGL7otK7QxHHHHmB98Ma",
  "key27": "3SQm5DeyMgoHu3YbvCJ356pZhG2Jez1Utik9nQtjwK9KUxQZyPpRQwF7gLT9RTwFDbjNkmaubeNwGkwWdqAoUFWD",
  "key28": "5kEWQaB3VFRuwDTtJYmdmkMw1K3J8Es82cfT1wrQhTRF1dbe8YfueSwFTUj26GBVkh38DaRWxrjsn59aCGPGuSBn",
  "key29": "5JNHs9HJAkRAeeukE8xM6C4R5u9aHiJG6jBiiAYWutyUahkcbyrBrEFES9bPMMgpcaNy7V8BRRH3AVwvCKKRAQpa",
  "key30": "4yxvvR6iP7sk8UzXYuArrHy4ngawDBPUK85YTdGCyfhzBhnSYHakyS47nTBUT27W4McVDUsHVT2ZhjtxRzUCDjpZ",
  "key31": "32h5EZVi6uP1uZaMM3Xyf7DraEkzZt8r3hs1gfZeHgaNpfuw5m7svL31GBFpWKTyM5Y3BcMThTbdGdtBwxp9uSae",
  "key32": "3K7aw2oXAkcv75uE1aryvn3Ssyn75k6nyQh8Q9VF8vY8sBpkiGHcyeG9VMN4YyBx3XcPtkn4yV3hxsxp81W6atkr",
  "key33": "3e3ezJUM7UGoaVbzzmsgv91BT1mGD3hmBwuaeFJHvK9JcJe6YcttPqPmNCUTNfi8HgkA4m5JX6YR2xposgRLu874",
  "key34": "5V4M32HXEPA1dP4HoMB2vEzh2avLd9g39p7RdCefjVmmuZbZqhz7YDv7ZFt3TTqqW3TVeQvLYhPvdHWnqyaJ83FD",
  "key35": "bzMREQdA5nTrE3pCbKHoxX62CQoMYd8GjeYeYJEALtb5sNNHJiXgLmpjEKV4jyQjJumqzytiq8yn8cFxRdoBA36",
  "key36": "4R7Do4NgSnBEYAu6xQMbrUv151GqaETRPebWfmk6gSzvp9EwZX631Qms35EkRG7bi4emDiU8unqnPMsqqCkzT8da",
  "key37": "2HD9CF8Be9182H4S8HEUJJF62uDw2NqtEY4mtjzuoahYSGXrAVn94PxY61xEfCpHpLmqKJmu5WVwM1qvg22MHDva",
  "key38": "5abHM8B4GrBH2oZsTC5hvf639mjuMoeDDb4xuKjDVnxJXpatb6R3NZDatRZmxa7WvefCW5eg9T3y7MeqRb4gjReb",
  "key39": "4Yt1J58qdewGdRSaEoZTFnZ12jNdXsUpcWRMbWEwknY3fTgRfh5hTorRLFG6Mp59TETUcFsM47LYmWDM8PLf63M2",
  "key40": "46Sw9vKJhuiMzcT3Msd4dc3gToe8Guw1fsUkjPCLbuWne8nBWYXhRoGkVVrqYZMzgwfnw3RCw6HQAWxPeHQcdEM1",
  "key41": "4UNF8p64csVFw2ZAL42WqdmqYfBVNAKyzSDDxeMsaFaCM9p9wuX2aGa4ePJLVEbjhRgLh87WN3mr8Zf7FX3tkfHU",
  "key42": "2WuZVdyJYr2rLMeQhUha52RjZ3z4oZ15iFyazAHLQj5smt83Rs11CZsUjdnykvvu5uTQPUqvn7fjN2Kw7WiawBU6",
  "key43": "2js9sLNGQBU9FropyphwZruGWc6Vpp7t6eiVwsLvAAw7vMaqrXxSbQ9Njei8UGxYurnX71dCE8mp4JHbXay6xgmW",
  "key44": "2ENudTYDBZ4RZAxSE8ALLg7wnvJdDMXe1kkjg9bUJVPdxyJ2vQMxbKtHGn7XMaxNxkj5TCtXTn9K2AcJHBy9v6vi"
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
