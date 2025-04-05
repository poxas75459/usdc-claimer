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
    "LkVjNHaVqKR3XNLxBkE3gEkZgfjrEYcg83QEV1xeeQber6jcik99Lv5TWnS5zKjkJrSi7amCHLoixYXfe5ar3g5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJs61VVGB1sZBnvXWCs7QP3V4c6qGX23mLA1hzE5SkRwco1BYK73fnf1wsPAKwdqrx4wcS4tp9RRwcHQcLNqGAi",
  "key1": "2sm887yMUVVG1m6SB5VA1NBeN39CRv1djvhKX1LpqwqXVttvTrgrjmopqi8YGLFocsFMUYgNF3rZVn4XgYLaLx97",
  "key2": "5rjBp5P5cxQZJRdFr5XBFSSH1d7XEjmZcyAdhPmqhrnL1rwE1VmqZUPtMHyKJSP1FC2v2hfQFwQ5MFmKjxgZ91SJ",
  "key3": "4kvE9PpaDSv1ppscxKo9oTWBmnUDGozd2Z2X6dkQqB86iJy3kFp6US72efFqAwido5n4SjbUhQPyZjuNmWAi8Ujf",
  "key4": "3rx41tbG4QSQNqsggPQGaoGXeUdrtxQa2gtbtXgud9Rp6uZmxKh7bp6jgGQQHTxn7H9532APNxkKfCnBEbA4sUL3",
  "key5": "fG2f5EKComUe2GFZG9irGABkVm1FbjXoMauVDDiZZDoJ8XUJKZAFACai6mU43FBXipPowC5tVJ1QdzzkFrzeS2o",
  "key6": "bDkF14tWZ3MCxcRQ6cB1r6aPAiLXK9mxQZ6E1x3WSfqySe2LePS6fMZ8NYaTdFt4opy29HJ9NSpREAPNSxU6yqK",
  "key7": "3hd1bukSaqs2T7ZgEFsCwonKRkDXq8svX1Uehj1uvkW2f22rofJdkuhh9wt4QaD69zq1d5JDohiansofQuiCzpw9",
  "key8": "2MGf7Zb4CgSLRb4phgkDw6bUMUdvtM3H9WZmxeRKEbFRjWofUvjaNV95pmzktSk9ryrWWmZUXxXBqTN7PYmimF97",
  "key9": "UtU9UjUeoxFnft8oeMzUW5hTn3offsiyA5EjqUZcdaGj9D7QJhitbqzD3WNzYbZhXJv61G6sRyRebujHxjJ3KhX",
  "key10": "wSgc9cwndXkhUtX7xKLcLgVZBfAxumQQELuwuTLS5BKZfi8beth9PjsWF6VG9YFWbRBdet4rsL8XnuC8xJRcUZ5",
  "key11": "5HBkLAEVujJR5hiGJHXxCVe9HqCNvbME8LNhJAyQVfTYUjA6CdAbGn2vhAvd4wtx7Ta7SRWd7ktgC74XvQPM3R3q",
  "key12": "58njG9194yiR5e2YRJXzisXyUoZGcu43dv8GyxQoeaV87TLyggpFMG2JAKnvyoATZncapLoG5cX8t5evJjp3Mkoi",
  "key13": "CNf7jsu2MfFPU2e9PduYZK2wdCJjWGA9KXYRhrSXtBAtVe34kbR3bwnXWQ4Y9DJhbQZEv8P98b5doPTgFoZW2xP",
  "key14": "4Q2NAuHc6yeRXCsZTzBRoKBqJUWcig2NQ7K319XFmtrvTN7SHEsmSe3jx4wj2Yphy3TqSmM3cTxjBdfuViLUAoRZ",
  "key15": "43yN8TXCJKx1b7GmN7wmXXWNxUMKWSL3SkmrB2GxCnBVkL5gR8KpewXG13BpQ1PSdGcUR2DCL5PZqpZTigtWTLnc",
  "key16": "NNJhXVRSFqNGxHCgGqhHjGPEY7qrJLnZyZdzpHU89Afdtjn8oTRFmhxWRWTAK7g8d7gtUmdzBvL2C4XzzNkRS6T",
  "key17": "4WxHL8cGvurHF16e6B2DLNqvNpqpbTy8WYiGMvNipqJp1naGhCoGA5YJcGQyqWgj31tL4TGi22TbkmEoz7iqLh73",
  "key18": "5muCDzQ3YNUhciBEqZSfXzKEVBRcEoZUcjdN1ReEFutcKAs3XG8mCRA9ZZ4S75FCBkQox51BXbW52oS3fvp5oBA9",
  "key19": "4AWtNTx7EZakchSQAEH9XTp1uJNZhciBzoc3kh3C3Hw3KE2yveErwL4C6E1BQBxPPxxjT9q13hYwUb1KqPvrSyuG",
  "key20": "F5sKw7ZAsCXKsMF6S79PoP6cWAUQeDtfXqcC9YWSrwjNFMhZ2LpNACjG3NJmW9yfCJDZVqsq4hks4UBhb3RnTRN",
  "key21": "3ZGJLwV83Lt41XQShTJSW469CBcyYhMmkUAuuQt6krP3SDLMSiqFbqmHiexatMpaBmPpvkpvsEKTpEJpUukW5G2Y",
  "key22": "3wcRJUmadfAYVyLKFEVPNH6WpgyUopurfoDCrZbxTLUqJgogXSFpYFNkp7zgnJz5VmdLG7RpEyZjnvPdfU58akSe",
  "key23": "2DVfueQXf88GZvRoi9GPF5o5cjXJUi6cbVv1Jpe94anoHEk42rMGmynfeUZ44hPUJggtUWq3WLdbn4sj8gDnybg4",
  "key24": "2v7UBJ8KMajqfjUCqesRHkq7osmQSdvTBUFJXhAEkmD7Nc7WCWs5xbUWBNg5kTUZWhrzTgFSic9nfJ6J4xJpLv9D",
  "key25": "3sfQj23Nr5hLdq766ZkEvuJC2kbgURJpMVY1vcxDth5KhJX4wXah2XgpBAKW8UT6jj7VgFcV9Lbajo4zXAqfaeKP",
  "key26": "3gRwExDK8EVqS38xnuwKCCRkLTaAL7GU9P6T9TiVYT2a28oc7FzwgrnFHdC2V5bZuRALJqkYMaK9t8SzNoCdn5xQ",
  "key27": "21MpRcfu8g5W9r4e8yvqR6JtAmZH3KF4CwZR3cgXWpRxqoK9tmzxJaRD6vcV2qpZQmpbUW7dJQHivzdbCNVgRMQc",
  "key28": "vCdVv69pVooHrr93VZTgDFKkkYsmbAtP4rTNU6NY7khaoNiRqHtH4hVpJ7pNRrSAdkKFMp72MtGuEPLd2HPFBc7",
  "key29": "4EZ8oFnDf5dCHJumo7db8kYF313hY7KNwpimTMVXhXKEJbHZKug4TULwCt6sHQuoEE8VCHEmD2jqj7PAGAiPsWe6",
  "key30": "ogHPVDqfwPjicMffcQAzWFV71jCAyFkPLeKbDRSCaSJrihdFMsLLNdd75kH89czDxYqKaJXXPsPc7GfZfWikuBc",
  "key31": "3WG7WAXiSfayhqKQvrt5vLm1v6LBVPUVKP5wxsVSJkK8Nuc2zmGAwcDbEEodvwsTMYi4aK9kPePajuMmsju3v72f",
  "key32": "36aWCGBiDwUq7ShRsSq1Sn6MEj1UHiugLfSW39hoBKATdbu4Dvy3WAkJi3xgRxFP4PrQBF9WfF18DUBr8csErgtf",
  "key33": "4m7j8yux9dZ2cuWs7bST3uLLThPNd3PrMPCbtcSVTqMFrF2bLaMShyLt4bj1SZeroMtwGsSXembneCAiuxVaCExq",
  "key34": "3VEX72jNDZmzg7442ywnH8aVsdh7DkNC8X1agaJez9qddZE3vGQ7maG2Vm9K5Mj2Ct3Qbb4aTp3SbWhdkqPWuFYN",
  "key35": "4nHY6pbUiQZRwCKN7hqCLgHevXKzu1nk2R9EFjrhKz8YJ4LuLXMzKGZfKN4ixMXUJbkDfuPctduTDUBtTkLxkvGS",
  "key36": "cyuNyvw9NNjuqV5fxy8HAu2h4dcRskfdzzBmvLmfctiixebaw3HS3Kuu4wZNzTU2ZHPNbPW1aeed5rPLawS1TFu",
  "key37": "66SXJXekJcTd9uzNQeHbWZm3KWkTHiULoKtmXvZBDD8qWQ6gzVN5GGZh7NdM34f4HJM1QCsmZKYEvrLjc9rWkib5",
  "key38": "44kC7qJQirMdsGvB93vGxWbui8AX6ofpaYm95wNV5iJss1fzwRLadPPrfTA6tdyJ8mKvS7S48Er9koZvEk6tYGv2",
  "key39": "5mQvFBT3K4AM7s98s3mxhdNCcdegfuAtirgEQ7msf8feh81kMDUvJ9UWa94fHY2QwzkZpjQnTy6fstKAc8zyG3h",
  "key40": "RmvYWDkbdPr3X9R4mWYK6NZYYYzoSJnCRcQ3FeGCXNAKseowXp4fNcVafwoxMion8FSomPCPtjT3CvSjVWMBYgz",
  "key41": "54HJ1aQsAnVH8m8SeQPfbUPg4KXrGDxMdFPCTsuu61PXA6v6qsem6J1LZ2W9qqEHDKNB52r7WiiWZf7c9asRFiuD",
  "key42": "5SrHnXfXpGpo3iPmfADjZp7FQuGinwEDm7s74sxZCP9PmRaK3FLKUqEdZK3GbVznY3etXbAZPQapCXdPELtdiEim",
  "key43": "4DYvfrCxdorQFvaGiNMKVtPEbcyq4q7Hw6uHZJrnoNZUWB18ar3L9NYLyLKnw58oQdTpJ9oDRDnc5YwDnoZ7QHZf",
  "key44": "2S3Hd5CTS5F5pcYtdGztGAxXZHfwKMNUJnJZWsf8RhKDzSN15Kyh3RTajtRxksWwpFDRDjW9Y7dBZACUSmh8x35P",
  "key45": "4cMHAcZrNMQavkfvv3ouAAvS6jqNPa6qsEHkLc1LwdmS29UE6muhwn9ctzuwFk5KCUXpgtogfLihRH4GL5Dj9htL",
  "key46": "5h2NAF7kBAGR7ZwAVKFTwUj8AVb3NrctNHLudhPwiAHErVztLw5X6JmMEohv8296wpQPdAxVri6jW7iLYcrCV43A",
  "key47": "o5TsGxbN6FrsKttfZFspH9NQPALfE6Vsff4DT33FsZBvzrwiNMGCDMPSX6e3CoXZL4A1FLcnaAHR9sJ8RzkwyTL",
  "key48": "2oS9Mhz61evVBqm86EUUTCyraUuBRybFzTVHuvenh9iNxdhJbbssWxxjACWKhE1DhPt8AcsZyBkJQATCfV4MbGhk"
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
