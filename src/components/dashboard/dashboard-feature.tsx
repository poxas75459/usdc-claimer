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
    "2AxK5fARN6EXP1XJai2G4z3q3BhmatJeFfYKTCyyDq5hW6yDUwrWtK6XtK9agYE7cLVpyEKb4XiD2x9GFm9EpoTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uAokTM4UkCAyLmqce6YjV8E5YS2Yd8Pyv7jiMF6oRJcfrgjqjrr1hkdYbDZQGdRzUFjihPqbnAbfUZLkCnk3Xyh",
  "key1": "58vrKhRvv6TZBFZ8u7ZH3PWVfwD4uE75tAzoCq6AdimLA98qspkHSWPnWd1GJovwA2RhMEMakJkmbdSjSRsDuz7Y",
  "key2": "pmtDLaxPN9omByLLPm1vv2MESQou4xNXPR8T34tJgzmDx7HFix6YtV8t655Jc5z8M6WPa87bshF3pcTb69tpd3c",
  "key3": "5AtvE3Fm8fbgL7QsGHCpw5BTVsWLVheMFWaKL16RG3xzmmCrK9KdRZv3JVusa6vVJbjMoyRzRztcKvqhQX7sQHVW",
  "key4": "21m8wULEA5hQMvp1vSXaEuTiXurTDga1ALayVQoev89NBujcJNroVxDzV6n8217c2MYnQFXYRvu6Ba16WFQ2PzyE",
  "key5": "2BrLE1JhyHoBaq57EGMJR7Fo2XvHceKfwNyp9TWTcGZnT9tVdbGx1KFCMeDpGMvuKHaVgpSCX7vgHoSnA1vAuxpA",
  "key6": "4S9d521oXSQ3zUvwKENGVWUfgXxY1W2JvNuxD9R5hyWt9KaMXzCkqcqwyoj2P91pY3MK9AZ6shD4rRZ2c7QVGsj6",
  "key7": "4MyqNTgWaxpbotMVoW44nt4kHENppoA2KaBD1W78KgR6d87dnjpQsoz6uwuPhWjhanfy6LeNMccE7BFSHQS8W9Zp",
  "key8": "3GJeqdMmhdD6nWsNaWthSAjrjaMLTB4ZfyQp35e2SS6CzSzxGGyRdMz3EnFGPc5RXocmWJYCewY3U3qLTp4Z8efK",
  "key9": "53vV3TMs8qE195ZhMytZ5RfXnb6LXtQfvRP7NJ5kzapZZrmgMGUBfbok7CeL5fq6MJ7UgbrG99oE7UWsxKTSFf6T",
  "key10": "4avxznnJZgJrNLPodUwCaGdzevvmx5j3c9vofhLHrxj1doJstSsG177dUcnzmoejFNxiMLqxXvZLogfmmxjrqp9u",
  "key11": "525yaUkNWgcee8uYgKocmdZDruzhtDpzD6khReyDxEujjZPowatWSy49cYCDqtHkGMtrcCtYmcCfTyWpAQSCvyzr",
  "key12": "dTrusJPzWzwTQprQNYSnGU6FD2BGWpaW8AvABVcZooLwYgWTGM7xYhVxzAmim7EoAtws7F4ZTHcxZFZ5YZSpqxw",
  "key13": "3u5PZ5sWZsAUek1veYL9XxEVdizrhzpq7C5GH54ThLUGa5htBrN8xZSQs9JqT2YgUmwwuSFvrjsDMSbKRHvX8Zk7",
  "key14": "2PH7eQ1BKMsAUncz6obF1ZmXV1vAW5KSrhD6RgPm3me3t5v7C8QX7Wi2mNEzCtd8r6Jtj3xvbM4ppj77H2NQrEEY",
  "key15": "2fFiqQ87Y5cynTdaMJ8nphdJBfmehXu3Uh8bBsKz2LC6k66YXpWkeXy6EoYo8pSvEgKPUybFvpBUyuAgefb8z66t",
  "key16": "31WVvtddqH5xvcjNycE2T4RMpj73hW92KSbkMvVVYWQLUxjmJiBiEcDzSo5K1WdHkMHjXdzAYKNf2tb6wtAS2sj3",
  "key17": "RMPMjhc1zo7U6cNZyiBPu3VLqGroFGScyVMeRJp6rhWmf6Efr67GLPYqY2HC1nkev5ihZ992NiqZvNgACe9mjpR",
  "key18": "2wQ9xWh9unWzVEv9hgbDR3zJn2592Zhw8Zu3GBadnSferp2Y6xhFuiX8vfNnj9bZZS4eGSS7u5NRYabHm7oHAaG1",
  "key19": "21jivaz568T885tyxBZZjjLw1qnmnm12vhMi47C2ctbrSrSku2C6JHExLX1crJHZz83wr6ocP7yrqBcZR16nHf4J",
  "key20": "nMHCEDB6QasxVJvHMh18XnZ1RtW4HDj8x2R8i9Ggcw4wa57XcvQs7aQ5urzwgeR9WVQAB38A64mK6fPCX7Zjt1x",
  "key21": "61Yj5PJHkKWABiZfdsPb9VG6Lf2k4vCRuikbymADYki9sRsua85fHCBezSs4tQoCgyLLPZbsapAJgnWzhP34TDiP",
  "key22": "3BXtGWty9r2dVgcarYjj4zMTmMWfBV6fVjHpN8mgA2aNSKYodF7mmRUdYzZ2E2swdnRkE9c158MG9wPPM4W696Yk",
  "key23": "2x1Gk6EJ8Sb53Vpm5VKNNtkCYZccdZsd5NFfKnGT81sr1y7YQtokwidzWmS8MJBuTxV4WJgmTZTcaMUmCJMp9FE7",
  "key24": "4actPQgVybEsJPfUb4e8AbvMTv2NfZBdu1dBbfsAEgNWnqUxUxJw8qbTYPAu4rbtRkNtFr4RLG5mQxcrZfHFtwnH",
  "key25": "5Ac213kmGVMrd1CZmWFquhXyMf1UcWEUCt3PP49Zk34nLdAHL4MqNyQg8kCf49CWYS5XQ1xXaNTEoEp2XBeUTfiM",
  "key26": "2bYrbMrHJY4zQC2KXFEjKDPjHBMDvCR5xRuAxEToYkmb6guGUuaRdPJCXYt1rz5Wp2Wn7bNVENd6K1KzjVDHJCFM",
  "key27": "EDzPNd5RpL27cUPJndN2YWjWnwcWEpyERPPXunag4yARHpfGEjjFX93KK2vcc1c2Ti7afGxxBk2K6BBkicttuZ6",
  "key28": "3qgJdegyxvcHDRCRF3Niuu9g7fc2F9vyEaETSBWwbUopZsycsEW8DEnyUfhy1GdJ8zh2VRd3mrsYcx7Cbaff6u8L",
  "key29": "RY1FuR5Bv6p5yfFsadtuZmaocGsoacC5io1Mo3rkY9bywAEE8xQC9cAMkCvK1PbE5j538ap2SAnMJWjFgMW6vC2",
  "key30": "4nxs33FBDLzQH9RLKZy2edhKpg2qDjZuU11EnvmniFhb5J57AiNXqjJnSRdVXjKTohBcGu1oMKwWPSSTNXp7A87b",
  "key31": "2Fe67NKingG8NND3TifTQZ5MbGUCqgkeMdHnrgCA7iLrUJNK5DSTH8xwoxr5j79bLWEe19xdmwEXMX8faHqm6pqT",
  "key32": "52e9oucRhajRZovsZ7Cp7LKamoUkSS6ndfFj1WqB4VKpAGGDbmTotk6wUzM7Dw6AEF6ze6Bi7KwiTnNFjJa5yuPi",
  "key33": "2pukrCZBwqYJeiBZ3CwvETTNG5atGG38NVCS3CNxdeTyL3vtFJLQ8Gq1kcyq3L5J7wX2nm1SBuVvbJZErkpbVEmb",
  "key34": "vrkZf8zabRudKhjc6oQmqLt1KgYYz9wxwUdGykMghkTwGRnoJvadwEaMMms4aNvbbNSCG5M8mtrLamaSsFQnmXh",
  "key35": "37QBGsozEmgJxe3wVzVYxrCoo4rKwNvTGg9f3JCeRmndL7bqNNM6ZtAbxi5o1WoygiHqpxeCQLUDKznP2Di3pcY",
  "key36": "5Q9Qya87ojnLt3S21QYR1bBtFKWSHJXmSnCZM2JFvuffHqPP6gnH23f5FQPvVJ8GeH26E3cgQcw5b9tgxa4RHiDP",
  "key37": "2HpZ4ie8QPNg2Ld6dfgVckBsmVoGzxmPaiYhpxSjnfX5Uc4BogDhuQ7gtwjrgk3d3mr1ARCQuF78PCqsUhkchrt5",
  "key38": "i5ux9MKH4GpjDoiEbaeUY35Vd7acvCa6hoVDVPJNFSvXhEhRbESB1HdVX2scispjHszjioDv7U1TwZRrqbJxTGa",
  "key39": "yTGCt9R9pvLex9yoUK5r4Wc6kDHCEFMiicVhEpgEBo6tyTHx44BLydt7KXK78LUqPjoqyo5xStArCKcDh2mtBCx"
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
