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
    "SaRqvSvpmT7nXQ7BCLxrbk2aHntZEiCjBewDZkX5hvPKRHQeChyfqXpVtyLi1Vc9LoqSx8vaK8uhTxjxdZopupa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azZKSW3cs92WxKazfQTQkiMvJdqraVPsTpEVMUdygppRGMkhEstQWDZYTcv1pCBPQ973v3M8dqJMGEWHmkJJkQG",
  "key1": "3fTURo9ZdHEuPzB4UAsEjUf26DVMJuJ7VymvtMRTJZqjS8jR3pKFxGhXQeqVk8HhyXs6Poq2nwwQDjuT656NGb92",
  "key2": "5cMTPAoKzPaHBs3SNotYESDnYV7fqWwZR9uS6FDkkiiybY6YbmG6kM4isrNrnD6EvqWU4GXoUrVLdmionS8YSMXb",
  "key3": "4osxeuPMYoSpRLg153nhxbdobRXdkCWbMgEoWo9TkDnGQ8jdkcP5BiPZQ1wpn6JT3KNBZtYE3K1PfiqXrQaw4zSj",
  "key4": "3Uo4VqMSLQDRHr71iL114xczr3gQZFwHwUM4B9Hq8KWuknjauAYbvDXEGstm17GeAkBGEkDKHZz7et95VacrnQWU",
  "key5": "22AfcRAmdnC5QVso2nNyyWyBwDiZTwcyfh6FDcbE8zBkbp7ySEfLuU5GrWDfLYjmzofQ4StTJeTdL5MpketKWhPV",
  "key6": "5dvvaZUwbUcCqvtGmueDMrtFvW4fmLNrfnLBPk54eBAoAHEAJ1HUUzgW8ERuG1SFPvCV7L9rB1LfK1Q85mHnqMu6",
  "key7": "3kCtmWiUq3b7kgKngg2kYuSTsJZQUDwL5uUbTkaDvwWFk4bux3BxnMKySSgEjdSjKRcDfrrdmWY9JsRFRuu3m3fb",
  "key8": "utGDqJ73FrmdrDGXsiiLCwTCqHrD8nZvFNEzWfoepGQFyVuCnu5eL7LeJJmmB6ih12yagE45zojfLy3ERSToRb7",
  "key9": "T6rT8YhECqsyZens6FNYfq9HM7FDH98csJ3c4TF6kDrLa7iQoYMeimNvGcMt357mZzX5NEqrSiCj2bihhcH86Xq",
  "key10": "2PDfQMh5dihQyGmUKTbyKRo6v11k9e16g8vKmiiVvHMpuP5ThMD1nwm3yrj7Rnk1TzXWDcHbVJ1DytjZYSgP29X7",
  "key11": "3fMCQg2BwJEq1t4qxVjKV36ahsc1g6yCcrEF2MwndpovCQqy8SJuc1WUUVg9JmAvWzp37vmGZ3aydsa8Vu4dr7Ky",
  "key12": "43ZNtjPimAg5reu5dKtiWhDDYhJg1nPWbMRSaoknyevtnMo544DFGhwprshTMXsh9L8tNBNTLZnfVCRH2FCVT5sB",
  "key13": "3vkYD8sgRG6JRVgwsxYpg7nJ6bvECUfJnpqGnmkjpNYNmqBGQv8sXfeL8AuHNgFQ8A7syg2F7cFtbBT8CLbH3umZ",
  "key14": "jjJnopTxTv7o4q9Q76fh1yTmDDTkrfsyGeut55aXVbg2dxk9kg2wvmFtT9NHHtkuN7u4mJz6coUCormRJSxp1fq",
  "key15": "24MBwpngKkNaVhmMeCaNYofZYAzkG4B5yyoG89gbo9yG3rWaSa6gJeqxU16SGJJ7B4PWBSAUDy9xavtUCkoeDHak",
  "key16": "627JtSCmVL7iewSShZctQhczdGJidW1SD3Lu9g8wzZGztjAh9PzUGPyN48PQiGDGqXeq6csSgpXhcksGMhRpBGF1",
  "key17": "3ryWmQvNzqP8G2TKDXwGXG9jP9QJt8iVZ4XBsrQXCVF2DTPLQwFMhSYXxQnyr5UYi2h31KLtqqZFA6ABH3L5duD1",
  "key18": "4YmzqWRSu1Y9smnmvU2CY5HCfwf65wo8papevDhmpbgS35DkZruyewfohG7K7nwkLN2HQHXGCkVRLtrFiyyX6HKf",
  "key19": "3F38YCiXMBNqFK2y2uNVN1GabePwCoqB5iUATbLXzuWa8ePQLx9BXVb9QnjsEKurJ3b6Br2f24CamD3di7LUBtfG",
  "key20": "4g5HacbPLaAEokfKQbJ2F4tiz2RAEo5uZMDcD6HnmMcoLE1GyJrxhFFY9TVTtKj4nWXppfNGCMZbFGsgPocNHEwt",
  "key21": "5ZSocwH1SgwGWmPPvVCkfM6GpUiEYuYmBLCbpD6zzsRtvnd5YzXJZsMrL6R41q4N3RCz7RPUPmfrxHUhyEruYczY",
  "key22": "5Q6mzMLP5jBHHV6YF1v6Tpc7J4X63ssTUt44avePz7FNW3qS1NSLsHmZD4XDu2pnWPPAvKnveeYeRJ3bDKNda2XA",
  "key23": "2yJKfrzJnECMXTeytkU6koY8FiUYRPqfvf85RkaYi52k8vBBybUwvXHCysWRzU8ZJPivLq3fERAno9KEwTftykgQ",
  "key24": "4aYPLPqWmNm9UKCFkShX96zxW2HUzQwY99Cujy6SSfcFiGPxRh3Cmp7S6PomhmYTHWwfnWC3TTf6dEHQh9LBkGmr",
  "key25": "3WJnTeaKiWUxtB71qkRxMFu6v9M5y8gv4FNWfZk1eBwQeH4KWrd46GwnxnohXDsHqDtpGgWTxcGsWDCmjFsEvkTb",
  "key26": "4XoqkM9ZDgkmKerfVTHJbuoJJEdPo2W6Svjr59oRQYb16HE8cskKU5BFA1zPmokfqCbdFtp75H1Ev5EnXq5gZGsw",
  "key27": "3dJZYZV7fV7i7ccnLtvv9GGvhnhBSPEeaGQ1ZgmGvR7GrJ4MxKr1YeYCArRUcUwg64HtQ4uJHmb4ryNAngpciUyp",
  "key28": "4WTLRCniQnvfHHUS7HY2DDhBQZXyH3XBCBAHrkd8mVdkz2xHVY2zW2Rz9YKKRL9osu3w487JX3SMySadhscJraV8",
  "key29": "2N9HUXFohakeW5BrduiMeixPDbDCDPLUkr7eg3GW13LhzjNg45bXa1ruyAF3PFHeMPrZGKd6DxYUYZxXj4HgqFDa",
  "key30": "4rCBh1qd4FAQRhYV3CEXUg7buwHu7BCcuhN355QDrrpUTkHKxMDVUcYSFDHpwcNZFscz8n2oiQ5aQWHzibeh9T5h",
  "key31": "2y9rtrCDHp5TzxVX86DP9mu46wnmAjUeKh2FHykjmj8ZLaXkuQzE1QMd6Pcvz8j2fFNC2TAh5z1KkNwadSpPMn3g",
  "key32": "5f7kmzY1TApfpFXcwykrVro4GkUvtrKtkfyhCFWeWVZQvKWXas3ka4PrFEKUufGVzZgtwq2q8Gut5xWXZzJ5RUsm",
  "key33": "3mSCw1HcpQUHCsBfZwubMEuXSbfTm39ATjnYLvrBhhuMH3a37JRWKDUxsfhhKEs6NpbirL7FsSSDoZxvikfETh2Y",
  "key34": "Fgt5daq82efd1oNGsqpQwkquVYHn7iEaWrJ1jdGPzUKwUjL4t9SyEuXt6yoJBatbtC3uZYAWFZN38fBHQ6nuuCW",
  "key35": "2adnBssXXdY7sSKHG3SzuedWaFLrqCwprUbaUhrUgTK7iXtCq8r5bk17ta6J8U2hkKvfhJ28iU9s4ABci47Ws8Dr",
  "key36": "4CB2pcRnd2A3CgrmnhtwsUihUYesKPbHDVHKVNLchwVZy8Sqpo46AH3hpdQR1BtzAa4AXQ1YkQWp7GENMUEcaqCw",
  "key37": "3ccdtpsgacrjANAmjedKnUQxvqbTisD3iXePgSWtF7Q6JRiKpcH24NAVxTowY1m1rMjJdhTSNHip69a5u2n1JBAG",
  "key38": "3PiBBNwEeWWvWBY6djhSGr7k1vWpBzUc9vHm9jyYjouM9bCCy5rrKmkJ3XjhDByF7kb6d4DEoHUxKrK7WQWWGXd3",
  "key39": "3r7kngEBKqYHUkBQ7ASJdg5XZ4beGK3654cfcMN3ceEYyUYK9st6uyjjLF49LX2fWD66Sx91pYd9BdB6T5JgoneU",
  "key40": "5frWWELW5hSSm6JUQD3HnQ7siM1qWjLyWbftFCHau4qfFZKM8fB6zqVvQZKGG5LD6KdWE3mRufm3ieE8beBwu5qa",
  "key41": "3JSJ1SLNfndiFUHSa4aGjrLx31dUQaMmQ8fcnkx5SN7tG8SrNehnxFamGjve7WtW4NUJ1yAUDfyV6pneV1wxQVqN"
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
