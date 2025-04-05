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
    "3wy71no2LYZaHX4XUtc64FsXHnzGjSQanz4a7q2YeK98JzD46iwt33LpYhBAJhRD8uS4c4QoZj4i1DAVLwBBbJCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ed3wGcwDQrqxfKmL9tGnRjGukKCbCczqPfJsxZc4yjsj1MuEFuPyNJ3Hsu4MomxLqn1SaSmZHpGBdADjHTmP5Xg",
  "key1": "2Zv1U1qxbkDqPgqiHbYbZzyxbMXHcmK629C8pvifn5SDeTfaSsF1zD4hXpPUjvLPSJQfEcnV2vig6wchu9MyzfEF",
  "key2": "DeXApNDKrMgtt6fWF11yJ85wWr4bTttmwWDTriP9vaThzGEVDRwMVWBy2iQbXPAQe8DHNTooYVnq5HCwZBpjovF",
  "key3": "9cuGv2LRShiHgTRyJzZ3XpYC48vvfTqBWR6nZsgwZV2pho6C5tf4hbCiYo5wZcibyL549H6H6iRWyYtxxXrfwGa",
  "key4": "42GhXrVh5CiZo1tCyU6BtQcStzeoshCbLk1CpSwm6hFuugLeWa55pZeeyNXtkVqD6WpoQfBt9f2bs5pLc5KYZkgP",
  "key5": "GmTEYFaMLnUYy1a3RZehtYUBHA6pV68gSi1b4KYimPVX5HoNxaJoDC3LoQHvJDVruHkh3LXyxerJM4tYDG1zAkR",
  "key6": "2JTfpvn3jS297cXuWH6Y3ZUYmGKcccqWaARS97VyrTByKicy7jZ49DgA6ktDEaTaFkHS7Wzp2t14MeTuGgibju2z",
  "key7": "4pBS3GtKYLVxc9LQvQsAJQLCwqNkyRzH1USd25TANpMH5gS8gcQRTaArd9jrXZ9TZb4fBNhpVgH4vJ3VpypS5foC",
  "key8": "673nZBuCYbYoCVgKpeYj1UPa32dMVVrGerg5YUyYDqyQQjr7yuNyY1uY7v5RgR8V3SW2NXoQRpX3mFeGBajQkYuw",
  "key9": "5q7DcEuHs7H8nyaNp2cbegHMzwrYpUnKtTr3qx8w5RMxLP6rva6FQhvkaWeo21U62acBHs4Vv2yq2NpqnMKpyNc8",
  "key10": "59VNQ6ir935Py2KpNNeMvnsKwxPsaGxshNYjBdS3sdLUzA1r6WB3Awtu25MmPf8MPoiPfzaeU7wrgpWfvZb7fVNP",
  "key11": "3Rcn3uqYcycdS25SWMbSQqGsc4ihDqtP4hCEi73MHAWxqSey7jPEBUWvwQ2NneENWNsWfaWggWarZEQbfFqAprRM",
  "key12": "3wzQ9ufi4AymEG3Ex1FngRRbw8CYD3NJiW6tBMEdv4fB51WNDy4GgRWPPirERnDv5eHNy78Hh6cJBwiJZ17YYUF3",
  "key13": "3tWs2LYhznP6jEX6mUZb4h9834mbBWgaPLT4UEVnGtcYDHkZ8xLubwszsyr6Pfrsf7AwUCvgFSeKZ98nzrNxKn7g",
  "key14": "486vznAe8JUFvh1wLd1ofYuUtPguwTvQp9EE32KpBieTjNpzFoEzcsbjEQehomHwLL5xtmugzhFkd6KzVYD5RYih",
  "key15": "4PKwh3bzwaPFQviQC28r5PkJzAoZiiKtPHdD2aNqbuDMWbsLun2T1GhZBpx1drqHutpBPVNx4UEC6FXhgUMW8Q9r",
  "key16": "5Z165hKEPtPs9DCkfYv7fNPCt45zQqr1FYCDy7ZAoVTUKzNn7B7PrJousBS1sxpkD9nLyWgxfQxttDPTVooiGEcR",
  "key17": "47L5GHWgEutKjbuiWVb9beFes8vVawbjtbVAvjgQsraSt5ShV4zVTFEaiyr3riyeNd4tnXQX8rAvMHYdGs4R3576",
  "key18": "5Gab6TiTYYCCJcEWUsWseJAnW3LN5JtCqfJmgsRbADJdXb6iDaoD7NqvjsDRTHYtAwLkZWfSMWjE2oLQcMaQy3BH",
  "key19": "5AyxKy1kN4UT4vqwnzaD8FtkFrqPcepm7pP6vKPPFUXtq9eJiRwb7hdtj9D7qNcbKfLxQYaQMjjdNUgEHpSfc8bW",
  "key20": "5eSxKj6yn9HdoLiLu7vQoF2JxM9EvUhpQnyZuCiebEH1rJbSSMSs7RWrjr999LrFwuPnT7uZoFE4Urh2UbUtikUt",
  "key21": "3orUeSHpkre4fWj79QkRs3JjUpM3uCg6UbjhspRHrRoCxqKhiUAp1cMjQ1WUeNNEhyKZWv9BaKj8nd34H4rsxF6P",
  "key22": "5tXE7QTzSgn8QrK5vVALuzVB9QcuByrJ2ndUCGzwsWYUjZ3twM1vuWi16c6ey5Xr6tzXVCgrwfUqDw2TwfiYHqhU",
  "key23": "633b2hLCN7dRaT92ysChpaoY7BzLGHp2wmdN7PWiLtnB3UJu6nPEgcgDzzjd7QpNFiKzb5w7F8KB7HNWiay4bnJj",
  "key24": "3xNfw81xTwz8kBqcqyK8PTitYhHSMg3YTgNW8x5PdCh9sac5beGix5FxP6Q7NK1iv2FChdx4HzN1UvDt9iqBZnXM",
  "key25": "66cyYLoXecxqFqYhfJBApUFMy1DmohX7rkfNDeoKYF2keSCghNLoYEDfaPuFZHtdAz1cqjKR1v85iW9Wjn3DjrEM",
  "key26": "5nJrakrzRcnZoawVBxnnEuBbJQzBPWBwTdj8cuVMWcxs23H6GTy5UFb7xxLrDWZsiYXDF7LNrjvo81KqDTWofGNc",
  "key27": "4RsHWrcucUQ4yWYZ5mSKvUK6yigX5cZuHvfPyhs4DkiSrzXNwKy2n6Px5eDPZdEwAyxrfboKNDip8Ui1jv77MqYM",
  "key28": "3pDTtU8dXg7Xx2TNGGhEKvASdArJG2Q6FgVGhbMgobpgcDEg6rssRNttVZ2r4NJvyz3ZFptN5QswRzpPY1qtXq5n",
  "key29": "2jSSQsreiQaRhoQh3hpNdcvrDkGEuSNqRUezGRqPe68ccKXs5Mekpt57SrDcAeE1uuU4fN5KhKf1EsmRphgkZUqT",
  "key30": "5Pj487Tdm16gkxdkpFXWLG2BubPtq28vYNitiHcLPJddjwmktK6iynHZ8qLS3NxkQqsSywWcg5FUSHxywBqZUsu5",
  "key31": "gCpMvxe9uRnhh3PpHxsAiMt88CUBmz51ghqNUTN5rCeeGBZueonahTn3S8W5ha5wbAoZYVkJkzFXwVPyxEQPrpK",
  "key32": "2ZE5z3Um9sZyNwReLC679rQeekf48qnhmG9S6dUGqd92C8JS9Gn7VQHVUia3uW6hVr9KLC3wMQAuFBmmZb4serxo",
  "key33": "4HkDLrETDiLjkVTLeBsQEj8EmDs5A2MfEpGGDWH8kkRE4k3S3pWPhmZLyq1Mx3KG1L9iBZwaB4ojqyZCk7GBdzUU",
  "key34": "3YDRGAKq6ano4ZNqfdPgbHs6mFvwUBNeuKyMq6WJ7aZtoq9e2oLMnJ1WzMFdyZB3x5iHQD47Wn6E9YNCGPLtbzH1",
  "key35": "3CxWxpPg6eij2gyZD9r7uqtJSqbcC3p9CvytvVTeyAGqnv3iMkMpUHTpfWQdV7ujNCYVumcuipRrSGZBsXUKTVbC",
  "key36": "5yaBvtEzv23MnTb1QjBSqYKFAWKxDC9ddExp4N8kKLvpGyVcWrKb2TVkjcHv4s6CGnujVrn49YZ8ZbfVpWKokNsw",
  "key37": "4GE3cPEifDoBQuRGc1EmnAot7LUd7Ayk4xorHsyC9VoFc387f1VXDQjwnw4v2rskwddZtj9K7WLf39dXHsAaWigg",
  "key38": "3D6ksZkjHGZ4ix85KnKq3GG7C2zh3p1MLTLX3tSE8wN6vRvNs4Ta8ctwtrSy9E4tQv69G68FHeoWpvgzvc9NcKaR",
  "key39": "5z9uTifBh2ZQk7hF6nb6ecnDMKxGQTf7iWhtPc2MTvtbWAPMwVzMXxoMRG7tf81qDZJUkbze2R8WY3GeFPvcCkCx",
  "key40": "DQzvVbzg8XsNzZZVA8GkE2vphj43ELdmhqUbXV5SHE3ABi21xucoqyBMbyHeQyyStW4cmuzfqP1nfRTVgeCeu9f"
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
