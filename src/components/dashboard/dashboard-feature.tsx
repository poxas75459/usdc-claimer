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
    "4NNRjvrsPbG6p22fo2nxFuHku3F7S4nmvgVL4x7cvsrPFALtnHVouLNizkgofd5L4CqeDPme97izuP6mTJv9ynw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sF5DaQXmXNc21EXDrouYZHwyThjknzWEouYyf7wk9sj7ts6ANwgpwKqHLziR5rX9B7ycVmWNF7rGZ9bGWTbM6b",
  "key1": "55H5MJJzMoFyB91dwzZC4n3M26Lw1v4i1DBNZQGpCuCbMfJEVGTZGCeQ2bSM7vEEYZTqMxdkkPwxZaN2k5HdT3q",
  "key2": "5NfwnT6aK1uKDiQV86dRXPkhaxUs6fV216qU6bzvkknVzC4Esf1XLN4yxRDmPP5n6GhyKZxVBMEyJv1C3PU23Upk",
  "key3": "5ACMXBcCf2ZXRC2wTvJGpHb5Sjs71eUzVrU26iz9DTJAqPcV1TT4Qqes68dPiuWg9JrfnQ1NWtXFKSUPWvyAQX6v",
  "key4": "5jQUSiPCSre4AYi1KKYC7yBDvu4dbgpAWSJaaJ2vtZGQdEmQAeEUL4UrKHwLHST4CKSSXGCEkRNhhHTszGzcmJ9v",
  "key5": "5J37WvBy6anHP8VU3a2Rh21zUbcL82ptsv7YobX6Rme2sLKNMqB83HwhxxziiCBvvjKcpLytW2xaJN59azqbiVsp",
  "key6": "FFeQZimpRc6YQjWSttCQnMMgXqaCyhTLTuXZPXzzNuYnwYoF2kCYWj6tvcy5w2KrF4RhbDtpeAsAWaeLaQHknkv",
  "key7": "3rKKwysafDgHUyCZErJv6sfP7m9itiKgV38H5V3SmbKTc8hM9kz57J16dpq7YPfs4o1dVCWiy18sNFCNEsgxuMtL",
  "key8": "2512smqn1jTEUgo53acAmJbfYBxftC6uCTBFCKPfCM9CXz3g6HRtcY6PMdwUfo7b4cSusxPy62SApAxD3gseyNXZ",
  "key9": "4iNph3h8y36h7R6TD58i3GLsqzrNZ32euqcWfmRDuFM9BXKEVHyo4oZN2oAEog4EhnC3mrF5LxsWmo2mAuDY4mj4",
  "key10": "2rMvvYyzm8ypqD5kFSGeqc3oEZudzYsKZHkAzW8Ma3jVnuejJHqNWGFWE2LMqkHPXBQ171XYDe66zcAB1bnwikKg",
  "key11": "2Am5smsJ4aChFLRXV297XMk72h92dn8F75Vab1p8QTS5cdhRpYUzLiSRrWyNCpgZ5DH4wv2Cks7DtpVY7mDPm655",
  "key12": "5VEVTkqYeTzq9o5L85URLVFz1gySmUBpaepanW21VHQwWbDT7mPV7nsduVR9ezRWzmSaYgzYT5gtuzs9KtvrN8PA",
  "key13": "3aiLqLGpffHDyLtwcjSsDLNyznmCQzWweZbCqocmRWiKSK5yKafdoGb8dnR3Kb8k2jYm72LfooevEdWf15kfbDDy",
  "key14": "3h9seyzL893u4wAfwtMH97GXDnqkvxhUt6N5uSDtARRxk2JYisRmW7ciTZzR5Q3AQ5eBd9b17qDKfGkpDGgaahwq",
  "key15": "64NzCnoZDDqeMhZMey4pUM1Qx2Vwg8mXZkQd4mzftQsi9T1Bt1Z7LcmXGjRNzGFhs5BGWMDUp63eF5vtfsW5Yvi9",
  "key16": "5rfA7oDnrJTn8YRHhU9dRuqyPCWWPM4dLY1PAYRt98sZHEh4Xa5fwPUYupk4T4KevHEoo9UwzxcfCG8njLztYZda",
  "key17": "5H75nxWtwfc58dHeKP4n8PqSS8NgaeGZUaHMpsirFpK8KNvmtNqYStTPKEH3dWMLgssV8Xj177tAWdnEyGqestS5",
  "key18": "29cbmHEiiYCSMSknM4uwCjy3FHCepJX6LV4Fwhcc3D7GskpThWpzjoNyExQoWaMsr3bdy73hZdBB4Kmf4cUuAFkQ",
  "key19": "2QrSCuisNWCefME6aq8MD63FPGL1vb5XD6KGpjxWczcSr74dVg8m5D7XvZWm6qEqKdLn5NeFaeCDA8vKw6shQ5nV",
  "key20": "qgKkPfMYk5cZcohQc2xpHNE2NC5oPRp9PwSmAXUsxh5KNjkfyK9Sdhn8PaAMZ5hQJ17nQF3xsWNnK2TtisQAJ8d",
  "key21": "4auDkDxRn7XZ2EeXQxaLi5GmHDFTerXh6jLECiF6Hy1QXyaFJvAnnA2ScjUQ8s6qzErNrhUVoNcCqSFKAARNXvrB",
  "key22": "5vuWU7ePv7sj7TRxTHc7K1xU1eKSX6GyT49B41XduyqCHkdJ8173RmQ82p3eLsoSECJCHczxnaumZvmHYSP65hXG",
  "key23": "4Ks7nfdfwq8bSfMg6mih3UMa3xyfiX3e6cEJ9j6Z4qWtw3Xn4DXq8VH8Ziv2nSXTnB4VXNf7WhcuAbnkV3Z1QPLJ",
  "key24": "32tnzNa3P4CvHSyLErcM8E8x3WTTXginKd9W7wHnxqbdBvDxqmg2HB3ssNkcmqzdGzB9aDoRjWMcKSAs4P1VZYsJ",
  "key25": "52nYg87UkVLFfz3AAK89DMNXNCTsTPGA2r7C84tzkWcVgmbCmpBVdrVQJMQHbuQD9Beb9Y9NFUphgKYwnNbnj6oD",
  "key26": "351LnezgTTprqGU8hVkGR2B2sURdXvXh9CyaEPK1k1NNpeEG5jMxruuQc1ddBEzKb2yZ8v18kJeMNDf3aZaZmLGB",
  "key27": "3dX7yijdRrJN2BT7LNF5MMRQDR3XstVCXRoRZRgsLG87WdaBwL55V3taqvF4CNDfZFkBuxXNRYqZgS9KnDBq3U8T",
  "key28": "345c377dbbtXEPShRUGeVmdH8bdJM4dWVa2znbKoRRdwka1wtSBuzHvyYtXAw6cHhXUX6tcnuQDV9TLuvHjzxs5B",
  "key29": "2a2QsR3K2motBSF37uy2zqCS7bmVZQDj7YkcQerRM9VfKRb6oZKUpi5usDA9oLy1YYyN3izrbi4HYcNJ3QAkcP5F",
  "key30": "CHLArWW8Kpr8HoYs1HscqcXwDM39ZMhtGRYn7x8XJHnvdkjChV3jSGrrJAEVwmvqyVjjjyaJyL4SvNctmRFvvsv",
  "key31": "23UxHzRbKSszKidtXGZJige3qAZKBFmMBLAd8WvNK3KJEQfmkh3XSQ7CCNAEG7eFq6vnAicHTRWF6mbc9Ge6Cmgf",
  "key32": "5jmnAXfuhWXdXmba1eXSFnQ6v4JWnQzJyjpP1eEWpa9YwsQmiXvG4ztFT9SpCZD6em1WQHANk1BCJFmEtqu36uQU",
  "key33": "3TpnSjrmVdYwZKHV4vZLjBg1Cm4DLfzVgZf44vDxuuGxCKSJ3sLn67wdKUeSRNXQ6n2vGAi6HjJ8XakvZyzyuEn6",
  "key34": "5CQ2X6p7Y2U43RvwEp6prkmj5WWrrKqMy9KHwG6qfEQyih6UQ5PCoMbZ6G7MmUXroXV2yKZHgdEskkypcq7Km5Ky",
  "key35": "5inrQYTfhxgyndGmk1qHbQmXnEV9aUY8g2XkPT2LFEf1duaYgs7DLUcshB1Gcrfjwuajy7uNHet9EodyCtzBmRg6",
  "key36": "2BScLz9pJAzjkvjKUrV7V8Kd4MNGCGcef8XfKHvwfh5MtHoEobpRDqQRUGa3JyBYGYxNFHmNVFHqLQ935ZiwNhXB",
  "key37": "21pWQd4ZUHZrzYjtbUVR9Ejr8m8u3RWWbfZGpEx6tvzCvHCCdULZmAnSAGyETePwhREoJD8C6ktVnKTwRymywPay",
  "key38": "4VbATDrKokM24wyMMghaXX4hzWNta2P7m1UHkbvLxv5xu4g98DdP2ELimH7sWTX85pYcHR3b9oRKHjXURUhuy6ze",
  "key39": "vvsFqpGybm9XwAtraWd3TKnHEV2YLeqhwn8KBRGtiFyL7dMx1jMd8xB6jK4sd9H5YYASXV18SHAidsogExDZ8oZ",
  "key40": "pooHCuwRinS9X7mjtTPdYfbEgkNcNQNkWSUwrZQbHbqjqDd6XmomFkjUemhRHRQrjBYm48xoWcPgtcYDF8xy2jM",
  "key41": "oveVn3pGTeG6bfXCeKJ8pc68enkYaEy7XrDR14B3UadGcC14Z8aq6sbEHdHE8dDo5YjrdUhbPqJjNq9DD8QNfhw",
  "key42": "4fKuwiyQijy8c5grmdkfErgmF8Acn7eeHTZTbtoBLkQAi3F294ni4PVLE8c25c1YWwtH6KuAGWpsviQb3TEY9EiC",
  "key43": "4qfM7U3JCAfbUPFuyCcPtgZoC52N8CmsiBocciHwrC6GxKKZ4d5GshpNq4imvJpKTB3VZLTg6Y9tgTyV71tGvCsh",
  "key44": "3SxtSrR1QaTC3cxoJmXkuGEr18aVrciXVSXyRC7vUWHyrj6wzr684jeNFQ1FRcQXy9WGDZpLTCytbv7cUr7MtCwz",
  "key45": "9sYX9KWmSmW6DA93yE6XgDWcUcdjTjDaPurFZfsbQrYibPqRnLsDcQEjrWGXxQX29McRn1jW3PRNCzeAf2Zuhpx",
  "key46": "4uzXrTDEwwA7tdsPwwftEErtgssT591NQHQdgppT5wmsC7ze4RTnqaa1kSaJYF8eVjmoYXsyDwWqskr1UBmeBhQw",
  "key47": "3njxNZuDJ7GAVNYi4oagrAm6xqYod6NW9tVHefBHgrNXtnkyxmFTJPRizpEmXyx8VEtokmXkfz65QTFjR9a53NTd",
  "key48": "5CjgCPugofGgmxBxR8NaExwp9HfdN1tc5QbWvq2pSXgSGfs65KX7PqjMzaDncRMTZMQVwzeKKNRSvmHBWFAfXbeP",
  "key49": "rT9V7sLCD2SyrjynnHsVf1kHc9FAisTdk6VCWdN8stxTSFiVtj3NnjJ4LB9wbenCTABk9JgsBw7D8iPssprNkS8"
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
