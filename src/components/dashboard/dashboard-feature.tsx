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
    "2qg5pJ3LhE4qxjD2qnirtxSzuy1BVGgE79puTmtuUK1h2vrcsTVT8txLjqCuNa6rFy49isNuamkXopbqTDqzgK8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LQvGevpWGzNHQmyt4kMEaRuq9AdFSPZfAn964aUg6BUtj36nww2d2AnfEnzy4A9HmW6uXB5A3ifzaSvECsyyc9X",
  "key1": "5FbviyAQr2x37NZFDQe33CBTfXKvFk7bnXwsSa7TBRtUFQQHDQ3GoBNxx7wrUGXWFfdHmteq12vpSUCAjWn4g25K",
  "key2": "5kmzLciu9PjHguwmDvXKvzMHoY6wo66ZSrtT8XCiyLjZtaJ62GVE3Z1h3mCC29RnNqxpVpSwLR62CMUxFCw6ZeG2",
  "key3": "3Rn5jnrpNK8adBMvqLsYDyhRzYfu9mmzZ3c1fcbZGWhLtToc4BDWD8X3Lz8JEYfd1CjiLjXz4v4RaNDeQN2wjWfx",
  "key4": "3C7WAX4rKutvv9aN76ujLWkrQAb6xztGCwE77MjpV73YyGBW1aiy6dARXcGCodGgWTuqzezt8BuBxgautEWBQWAU",
  "key5": "3M2o6C7pkfxMvh9GAtfwSsud93wy5o1RKbVxGDDznVy4NAxnDyyKMdkRAtuXZC771fknbaKDKK1nQ629GkjbU4Wa",
  "key6": "2V7k6MJg743Sp8uH7XfYVcSMtmjpK8Zt2LvKkM5bBTyeAUJanEi3hmRzLGW62HZpB98X2NhUCaNvWzNzbEF9oiCs",
  "key7": "2rVqnyFPKg1r8qzHuJVFYfxnzCBtTSboCS4RqvpXwmvsFWndJaX83hs4y33hbfS77W382kWJHSF2aiFChhnyzVvc",
  "key8": "3sHov8M4di19RycqbTD1Z8cGABGKPz68sY9KkoivXodCLvaynwHHcPWfS2tptJTBU96saak8dphyubVihTufZLFT",
  "key9": "2TSWpMnD5z4GY42zWfEuwhYyhmsJsAv41C9rwdftuGXvawFYj5tEoesbY1HVJDewygPNQKvkXrE3vN6ZEFZKwsGv",
  "key10": "3CcUS9L46ewhePhomTZ6nfUPSoX8BN6izPYwMhC3gSFAjjGPN18m1CrfyJ9C14iXZop22fj7VYUKYwAgXTTqjnom",
  "key11": "nSDYF411xRmD6hPAMZ3BGN96tJqB8EpBUjPwq6UgciZQKjn5w6C5E4y5KP42YpmFQiHLpiFXAuJBzdYqcQRm4Mg",
  "key12": "3FiuRipBnxHq1Hxnt5JbsCLnEeAP5DuSRpRfpoUJvFZgDvt3QENDxJiW4RA9HppLqnpQLCQQuY282ioFJ2oKPLTC",
  "key13": "EYnM6zm8NJHK2vGKRuXR3oDHoXEec6XcMR1r7SFpZx7NWw47WdzUHi8VpopDepERj412Jr2NQvDTH6K2fvsrF8S",
  "key14": "2wy3fQ18GhT9MMWjAW8U6VYo5v4pM2Sktq9USXRkdYYoyBewAVzKHjz2C85xcoQm6qn5iB2rmLjNy5ZCC6rRLEgj",
  "key15": "pF1xxbsUbcw1PYzq4wa8HwzYr461PwkHhsmEKVqYwNmSAp4JDtKDpJ178SCXPEZPVv67JxmjZDUL3ygV1GQ4afD",
  "key16": "TBUko2nD32ytepFnzZ5Nd2WJJpFKz37fxFqnUq5LrzcwxkMwQE51uFRYLdsLziNFeD5aLKtMUNJpRvNZsjzXta2",
  "key17": "67mAtiXLyP4EJ4zYcDc8aVpowkY9hwCK7rUsEDLeRSDj3koK7WFKSjvKRLCJjW9UBrVnPfpEnDgvpADpLVm2p7k7",
  "key18": "4iXxVZnLmsCysR1sLgd7YmZbSzNk8gyxoX6SxmYv9oQ54asWUenYqhPnSXVkfTnvujPK1rbnGfKTipYWsBNzhZ3P",
  "key19": "5hVcJ2NHK7ESi1UHANAyXhdaHRz4AST9AYXduGRscAWEd7z1bXNb9q2qRvvboQXFygujBD5qhLuf8nx5JCcHQtX5",
  "key20": "3UkbhbFnk9P8nZo9zmvNhATXgu6UaAMzoo4VcocsqYuxmfACPdtyXVce7doHQCcHZV6qPNknS5TZtYXQrYpvWuBg",
  "key21": "1B3BZ8Su4EHeuWdR1kbsw3JJhqBKeifysG5uDsz1t7mhFyXNqnewfMffiNzEBpS5kvavVCZQd7gQBiypvyyvqHm",
  "key22": "24QZmyDEdxxh6HRLLyXkuoyhwJVGa46BHTAcaX5yxh2B11ozVQpfBMx331LRGerik3C5pcCdR25tBdSR4cHMuN4w",
  "key23": "47w9AKcBzv2ayAXYQWgZ77SQNM1nTgGNgmbtjgFZDU6vDw1F2oiHaByMmco4KuqfZeJcp28s79ddnhxTisEfgYs3",
  "key24": "3pLfvWzdYpydsoMXfCjTqMvYECvaqcpVv6KcPZoMNrp9wbJDMoZzBWpyXgB3MMgvxNYjN3T7ePQuy6NabekeT5CY",
  "key25": "5FQym6hg8NXjAzkKEMPJm6JBXiLuessuD2GWTosHKGFVaxwPYbb7dne8Qcy86TXmVR5xYfD8zu248f9ZhyBJL89y",
  "key26": "2o7biAqpSNF6FHFvPBGL9oyuuXFqUoBfkFWgvh6zrFM5SArYDfRDvAv2tPF798MctnSrz3ttjzTBMMadUZFuPk1d",
  "key27": "4Jz4z4UTHwv3J5TjUWJV4UjP7FudhD9V6rwAGDiYg9VouPgdGPB81WR66M2AJp2U7ZxiwerE7frvtutLqs9LuNWW",
  "key28": "UPLR6pXBHL1S9KcBtgQG1QMe78oyqYd4AuK5RbTX3HEszZSewc8dPoSCHM38YoQpQV7ULuZmMSveVqggcVuHXpn",
  "key29": "53isqqjVTFhLp8CqvVJx64L3Wfx12QcxA7GU8fhEsoSRdh6HNZdYfFJ4bku7RCAR3LvpxHM9jXwLL9nedfGUdy3q",
  "key30": "538v11FDoiyFobXxbc5hKM2cgeygt6yp2egM7jSZgmBD8Jpz24Q6ZNHwcdSouCa13YZuD5xnEr5HqkBor3Jq37ay",
  "key31": "5JKLSg7k7yKG1UcKFVHgBR11Uy5RNxw2YrNVMk6Zc7a5XBhbbyQ5yYwLoUZmYaSJCWtpxtJsTZhKnehsKrcccE2i",
  "key32": "5tWv1dQxTP9uZFZHMcYhrE2D4vRZbrY3R6c6RhXYNc2gFU8vy65x7bYxb2jFAitWtRrx8hiM5Fir6E55BgW6JhPq",
  "key33": "4kS9ngycF91qksGTKypUmerVBzah2dk3WS7mz5fqY3F8rinVpmjTTzczyc2HWFX8TYvdmfRsLzitrRvPuKQjZGct",
  "key34": "4Srz75Q8cw1wce5CZ4z7X5hFAXKViPTaTPe9hRWMUeFJvJfpJqMWHUzznTWE95ZDpRGUMueYQkF3huSMUGttCju6",
  "key35": "xLLDzdzJJEQhwRKWbWfnCt699Lv876E4T5vBnFfagKzCJwq4k9neC4eqVk7qbVXetGGB65ci1XbEKNF1q9RFxp1"
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
