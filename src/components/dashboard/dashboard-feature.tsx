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
    "5w2xy5fZfmXyE1ybwV3ijiAEuQ21ULwuch8P9k2Riq2AVuQjZs6ommp1seMgtPKAGNLygPJaLccP1zRtrPofmRqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPj99kJqCN9FLLtPu3e7zNaKs2WGhdd3JLud88eDonHobCSdKraGyfvc8diLDCqjTL9F16z7q1DyZQkA9Q6Ueob",
  "key1": "J5avWvBLoVVEBGEp6yghWkitLeK5oQF5xYLcTtK7JNcna6mBU7o1r5jFo2FAc43SLJDRe3CMKfsG5VxYrMW3T84",
  "key2": "sw4M6aH2TR8jA1n2CWB8S4pYtUVqYUTjCRse174tPEu3hQ8LtBvvcRBusQxV3PeDuq6KruuKSHfP8ZSBiBTajdm",
  "key3": "3U4kAY5T6ossyLF1rskr41cQyEYbi6s2TkUYvdKHDckPYLSSMMFLM1iRTTGqzyt4eHA4jHRL8hvnCr18LH5Eb1xU",
  "key4": "nvLfsVdKDSi3KUDLYscr6b3j4pm2HNYmnFjuSQC3Y5H5hVg8aWpJMxgTCa5yszY1jMk7rTT6X1kAxy4H2yRhufj",
  "key5": "41QTs78Lt7PTwBqq6GgWF64sViZFFboyEpSkqL5CttEzvJaXcmvz9i8F23pNG21MBF7w4u5UzgReppbC1L8Ei6eU",
  "key6": "B47asu5K5psZRmQsC9GtSAVYfLxoTQtrLLLseNKx8vhPTHrNhUPe5dQ3JdLaGT9tj5TBPtsJnteDAjQwQ5HnQr3",
  "key7": "2X82sjWTY8wyuqdD9xiEWhLRfDt4EuYEz7XYiwdJBiqX2Nz5iKsyuy32Ja8i6WF4F2SNM4ktSjSv9d1FHXVHagJ8",
  "key8": "4NPAhb8Qr6Q9YCk1Dt84o5WCkV5dJ5JycTJoDKqziDBJXoE9TaFofSk5ACk4wYQzFYLL4LLh3yszs6Ye2b4Es2S5",
  "key9": "oqKqtymnvCtbEaNiBWiYnTmNhbjTuoMyfLzb1oU6oFhddgSFnjhrs5xntxPnZP1z3ouw1DKBPywoXBWYU66FdSd",
  "key10": "5vnacnSqu3JeihL6VNkwUQr5ZC5MFTGMFrFup7j5gPfMwMsZ6GnwTuRfJQvJnik4nWDx5CvSLymgBBSWGZ5E2uDV",
  "key11": "G9Qp1tkLmA311gG3cDgjWGBAnrAohfRKN7aFNQ8pmo7vjT11jr7HCcNqr2dtHL4fMhYdo7uiC2TKqerQsVUmbgJ",
  "key12": "j319ug15YRCMsKwTmnTJtzFUvc7iSZbvH8ZFcme4dDbcUx6bcd6tRCjzzoVbmbwfSWhKJsvSAFBVGWYaJF4hMYJ",
  "key13": "3UrxyNXgBdZEZuy5SJvMcRyAVCvQRDQGrNgiFhaKdSzKkDRQs3swxN7FxrHJSuV66UuiUNBn217fvzFrdqm8zM9T",
  "key14": "4ghoL7KgV6GBxwwVgMr2VtqbPjKE2xTJuDEFbsgCs19aic84VCuznY7azHpiT99NcfRAAMEfy5VY37aH9vkdUT9o",
  "key15": "5JFYBsbqMoCn3A6KmzG4Lq3GfwVvHZzpcU8kYzbpD81vnQBUqbiWuVL34ChX6zmR53VNHe8xQ9A9aAfvrgAVgAHA",
  "key16": "2dsHoYyCA4gp2x1NfxPDVkRgMSpbY4YWYnFaCxPdLEP6ke6jyW5hgtA3xm61ineA9TBEqVKgi4avBAwCxG9i7bCa",
  "key17": "31vDqTDd9LTvzisToEyudZsgSJqoh3GTD8kUiFZa3Fxcuw699GDfSTUeptDVimPiCrdNxkQxrCZdHUJZMwkEED6m",
  "key18": "2Jn11AGr7wDsAAsSM6L7sexXhTC7hVDrzGs5C1KpuhGMB41Y5PGoXd6PvDLobYBphNBRTMHYsXnQHUGPzYWpAatk",
  "key19": "4dchbRn7EBRxSeyNTXpSDfcdBphxciv2qgsZ4Sja1j5P4mZJ17dakALzzqUMxvwzQnkuqLecMfuyh8QHcCywUxBG",
  "key20": "48fRW3Rvpt3x9q3khDL7MqnCq9fHjYEDNDZn1TYgwYwbSA293r9GLvH6Aw9SQR7evpeJspwJtBHAbPyY4B6742Wm",
  "key21": "3SZN8Dwk35NXnsHFKwBE4pHWnNfEUZhD6FNXrvPJgAWDpYvqaTLSxbQih4xY2DVX1JN6xsNhpwnZdVnRdKcVkMbu",
  "key22": "aK5vhybVgYJKzqk2ZMw4PdERiLpCbzcpyQhefmL9CvXGYCkunpEUrc864vDwJGCtJbPLij8wVv4Z8V1XTdkG1HY",
  "key23": "2KBgujYvpdHqy4j7U8V3M7e6YPGY453Mcaw1uMPXH8hjNBwBJnGN48HtvsbjtH6SmeMCGp1kV4An5i8MDXKr7wxu",
  "key24": "rzpJGCytcUKhWTKCzcMauPDY8D2sLp6B7ootZPioy1qBt2NkUa9PuZVA5T3tV9qgSUA7dJJqhtJUXWegWej3rN4",
  "key25": "2VRyGYQhwL6Aoj1Cz2oVXqmeJ7MyEY3qEc3zrfqadHGzJijzxmu9At4r1SCPgqjLgDnrQvcz7mT3AqAiCTdkCMMY",
  "key26": "67JeWcgKenPUJQhUo74PLfLr9Jc8fDikrJbhRF1P99UNbZPTi7agjDDmyotV27KKm7ZaCpv9hhUWMJavHytvSG3f",
  "key27": "5j1wbm3mhXseJ1AXh6niPeZkVaVBaFdNcCK2WpCTQGbxQb5iAwPR7fY3hPJdeWZwZ9bQvNdfKskUJToqj8jRA2ev",
  "key28": "3B5JaasV7DYJLiY3ihRWeX86VHN6WZJABJx6rzpFzRzHNDsF1tSBG1txEcP8aGHvm5ZyQAGNrSrAY6vdNbfS1y57",
  "key29": "21dToM6GDNY2yubygFPmqi3yexh4uQziECnTeesxuU3swdBZMs7WecZHQefk9ADFEvp2YqU9L5PGzwJivm3oMb2h",
  "key30": "346LqrMfSixd1nZpigxbqtQhwMCLy8PQYN67qepypqKUjvytSv9Azx1aUeci27BRXQuAmT8J4uvWyFc64BKWmbqN",
  "key31": "YxcLVhmhM8Mxskz9HA88wXN6C8Q7SpvstSo1TfkbW4FrXGB3i7oe4VxKZkjaJNw4pH2jbSjsD38Teab9wjadvGs",
  "key32": "EthzEsxuSTSum3yLQGDtN1kk3h3cTHZD5NNaknqtnkD5GMm1bLaFGqq8iU9sDU7kaibbg5GWxr8tHZbKeQenJZm",
  "key33": "2KdBENGuBeYXKTqRsT1GRowBSyh2ij9HXvKFTyqaCinEJrGz6tqxeiaR5v1iEdzc74UYMG7JqqTtu1JeChptk526",
  "key34": "H8v1nz33xDeJHSAW9iccMoQG66QQUqGrSEGB3fELrjE1iYQf4tmSY5HVw56YEBybBAovyAaG3gU58HFyix4NRGK",
  "key35": "5pGz4vSaeGacQKuAZ67xHzY2d5BzoHJXzBM2eYEAjLVjXhVAnyb3G3jyyXxwrXoi1xhS4hG6uU8zpgmn1wP1WDwS",
  "key36": "5NzyMXHqYySPp1w2WasXmp2Xi8VkVfsKh3PbPFYrPH4ub9x3jCLK86CDC9Fkniab3okQarkDaNSXrbXSnmBimi2U",
  "key37": "4s9jt27RLdkzmb3qtkxX4uhWYpGdULDTd5N2EHra2tMggBk3TXWAgKzx3qAqPTS7DaXEHSNdwU66dH3JknU36xk7",
  "key38": "3agzcPuADQ96sSVa3Kj6obfkoGLv4BpeKhKL8wgHqCMLGJtQqyTqXEUe2qGoc2CQ9XBDW376AdPenkDiPSuwTWNb",
  "key39": "3oUFoAcfJN1qbbocy5bxMcK1Knj2FWbvf8akSkTS3cTa6VNTueunBeMCgxetY9GPR4YGyo3YL2nRUY21unA8QVx7"
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
