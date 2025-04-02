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
    "5K8nzG7y3rwdoBoB7xXkYtwkgzs7PFFPsjwqgbMiLRB2JB8u3uq4DDnDbYu6m5s7Cc8SNs47J4HwJQyc7q7QVH8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DDzmASVbPxmABn1BJe7EHSaLqjHXDvo5VopaN4ogcfu2BmBKW4Uph3WA65hjF1QX8KJuaXNk2dUhAkktMATgvdQ",
  "key1": "5143rQepJqoxQBVwbhDm9wGmwEpp8j6JbDZUwavDWiGC62v5KANavace5WJib2ZAYh2Znw9cHCyaY9Dh931mM36g",
  "key2": "2cqVAg9u4PuXVtvs1vShG87S1D2ikrUhaDBGepdN6tAerRHdRbgEwKqPE61h76SCsJPjjSxJSKgHGayk7LyFfPi5",
  "key3": "56GnZm3bjHPALdHXJNALr8EwQPXS3sNYFHrGYYmvQEkit7u6YZDPDKFwinntbLCJ2WexjotjfeM5SzqZA9br25TL",
  "key4": "3xwbwCB1bfUWrpSf4u3De3r9Um7dmw4Lb3jmxETqDFozAnw6ZePkDuPcEn4iQW4sf9pqYB5GbQFrfZqKojjYWac9",
  "key5": "u2BNkZp5YT91QTCsnGpv5oPHSVp3U2aErpYrGoMkW4ejFrCPzqQWNank8y1ajJBurYuzPL3josP43f2qseWvFKy",
  "key6": "2psJZ6fREiZ1RHmAZAm62jqtQxedSyHmucJAyCeMU3duDaxDEsURxqPxEKJqJRQdm2N6Nu3xM8wdDhQhW5kVLnFk",
  "key7": "5dL3t9MGG62DJcftbwsdFmezHgq6LS5uqayuUVKPjgiJ7LjW9XgvbKybdHeTM6vnr8ZV1rtQCA4PTD3toFdCjNnk",
  "key8": "318Upa1bQW8FyLcNfq4Bucd9RS8Fk2A1BYELRwiQNxgDaQPjBgnpHYGnE7qWLs58C6C11yZs8WYNuxmF75dPHM2m",
  "key9": "SCuCiJ6X5CR82qspWM8rLnQriy9mtyu5tPbS5sPkfee2x9naagRcqbJ3DxxrHq3o9g3QVnXXGGmUCL4HWXuX18K",
  "key10": "EoJLPHNJcw2P9LHjRsg7hg5HZL2tXroRW3zA97VoapQBgnKiUNNe9MQRdaQoCvgu78ZUPg5zcr9xVRbRfti2jY7",
  "key11": "5DyYZ7E5MfEUPZQWnTdjN3CjbtG2VCYHT9vS4ZULGaXVfyJncdSmJvQAzadB8ZQqr46MSy1US1u2eUNMoegGsXi4",
  "key12": "2Qzq5AYZkNGS3rHQY6Mxyxd4Ya5RvB31aHJkQH3DriSWzJhqFLJkzWUwe2hkgKf1uHs9wjvKWe9rk3cutKJWDUUM",
  "key13": "RbAGFnpZhBe5zyGbRTEsVah9Do4P5iAmtDvhXsNwTPm2wTjwXkKk4Egje8bkD1CNmXRubP5r3h8EwURJUBQzgjk",
  "key14": "49FJcLSaJ8eb6KSdVnH2Zg4TrCS3EegMi6BZwWMtxjhqLQBmFspRHPVZdJY9oxfsfXk9yJUeDBYMoF56SwSqj2rL",
  "key15": "5fd1BZossTDfHChL2Kk9pmwmxpcBaRKFjhEWF3sa9bfeyFb4bZt5V78w1Vc3oRi8NBqpgTS91WYB1P5DdrStbcox",
  "key16": "51eftGPWDxBCpA96D1nM7c65dEEycirGKeEgQ17L3Ba9KLKguKAKMYf46StSumtxf1AucUAPtYiEdHuqQK5vYcHU",
  "key17": "56qDJCpp5BQtLv5WdQq9gAkQhLPT9MePGy1g9jxYTQMyfGe6772MsCoPzWxGJSxuWSEAKAHu6jepa75P9LYRrRyz",
  "key18": "K83cV6ao6uiAYYYRpkbFuhQerfHC6HXM8EmAEs5Y1jf4BaRi7nwWxP3Hd1vPB9aSfNZpEoT9sNRgTy4xcpBmkZ7",
  "key19": "3SBr5CgqxXkWuDFVrWg2181BqbLqeLtQ899uEFBia7z28ReF2DmvJ8FA8uZxMcy9Stn7g1J183m7WZfCthqnd9iq",
  "key20": "Y5jptwBqJNQzAoZ8jkRRx4ZZyziYwGWuJazuxgutDLNwianHPTNWePvKy9Lysi8G4ZjcDHbcooeSGiVApsR368s",
  "key21": "3ESUtJgBoLBg1djVsse8cTBnohJwGYx418NTnve76u71o5kva9Qa2pKDcLCPLXqrnccYEH4vos9njLKPRN2EeEv6",
  "key22": "33KuDDTfMFzeVRn3ao994DS1PGPke8jZkD2HsFFz57wHXPWdZ3jREbvKZpZGfw2XjQG7kkhuCN8ivo8rcX4gLPeN",
  "key23": "2T8zRoGMjFmyhT6D95hDAPEBXPfZsvyTbBcEVyUmxxg4JRAGRFCN1CuUhR2jgGtiNEkG8vzmdubptkjimbbuANKn",
  "key24": "B5ZVcKpvvVNSbJ5CkJSwmJpD7aigzbWa8qQTWTj6356282LuLN53A26bH6DAPzd8WJ5xvVU2RNyDX8W2fGZWysf",
  "key25": "3mkFxF6gpUnXGhXatHgosA3NU5CWrJy21YfF8ULAqg54JYLAHxCDs8ywHjkVJWhZBrTHxTxjMRsZaHT6vZhCH7A8",
  "key26": "25CB5hrKyxKG7Yb7UgTAR7fVYJv2jhBAHv6D3kL3Tw8hJQeWJPSdGYcbsNeWW2kfePModkNjJTVyciSWjaqgyGhm",
  "key27": "3FasMHTyRx8pGubCNTAVVK7GueJ7EYqDxHkJHCgdwd3oNCoL2J9BJu612ZgbcuY4cM48ZBvv4zehNLAmcay4iToH",
  "key28": "3J8VtidNHNedaBzfekLbRVHTeLcB6ezofYiXn9dS23EQuczoS53G9Z6TMGE1wwWjSNDbp9a1MsKwJGSHeLxgwYzt",
  "key29": "2Dg462mpkK7cp31iV8U6aDdpmbFxSDVk6kfcCojS3irJUfyuFCrJTPyd2WwAk9aUkmECupq5L2V4eGLmeYqogVjd",
  "key30": "4LczqvtuVLHvv143SsrXuMSXbaqDtX3zbtzKzz6C7b62Q69ajSUcrLRqghb4oBWqio4XfqiCjQBNkDwB6mZmC1VR",
  "key31": "3WR49E2n7Cc9pYHPKgQDyNUBzRkLxi91AnFWnk7yDTvcbzH7E5RXVHwGbhsNNyqM8tLQc2d3Sg6a3A2Dq2mB6fVW",
  "key32": "aC2ia9JWz2fnJHxVLBWWmBR7HaLN1xhy21eHVePyAiaJQxM3nYeeKrzyXVxBTzwEjkbBdyvtDjQ3qHvkUYMujQD",
  "key33": "5mWAUTgcEaXNPaScJPuwbFpaxd4vMtyYe4c3C6B35EGkyK8xCRbDAHXRCqC72qSKUTXvu4zqyFRzDwYCBPXxc9i1",
  "key34": "5w9kiuQXWvErgzLdgDpfNSFM7YUdbC5nW69kdaJ7wTYqdNoJyB2FnTqUoXo3rpUmcdGk2xK4GbsCPJYSt7dawSeA",
  "key35": "5tMVcVKbnfwBND6Xx5YBdn6iwgcaR6vikTL7MyKn5BUTwZqrcZ8scTTXoH3neHeJ6V5zBToWDVnrjGUERfcjzQvB",
  "key36": "2B3dk9RHJ5sJx6RN6io49msfXM4gWR8dfrRtaqX2KiBy4P6i6Cm85s2DVdRvXTPQ6GVRLdd4RnuM1gTqwfy71Vke",
  "key37": "5pPvwz3dhDQi3y2ZpdmQvvGwPqGAo53GKuDKGdZJqpBwgW15QiEKKGnR2kJxFDp6vLTbL3uJr9t3X4yTxS7aUS7D",
  "key38": "jLiVnpG381rzcgcbqkRcy7aybH8jnvPhMc9ace5tibk6EvJe7RgxzoKS4jfF1QnJgJtFP7FwYNBqS5PDo147DVf",
  "key39": "4RCgfZmKF8V8tfr1WskWEoRgDxxdRbzJukotAeAse4fjaxbVbfc8zYzMs36kwX1k58c7hNf2bJDjuXQTYXShUqVy",
  "key40": "2c4nFAYmsGHmyvecho9SRRgE6LRFyT2zhqFXaMHuZvz6qpwU7tLaLPSkHFKDTPDPxYPH5ff95z6qe8x1XZW5dGqG",
  "key41": "5ec5fGNRYf9na8AqPWgsBvN54aoEexZQtfEof3SMrVAJH61wVrvvYXUc9NsEiNx7s7iotk7anfGamjQwCZ2FKreg",
  "key42": "21PSYaG2gaDuNyPtrAFxJQ5hxMnWmovt2BYYTcYD6TLfkEq6QGdPB9ww5BeTKDjjTpzrRqW6USCLg1GY4gFVT5es",
  "key43": "2o6bXMeqJL39jNMTrHgPxxJ29UfuonEgoaw9QKaRksCkBDqZXLGWZfHCvFRaJge9aWLfiDJuqj39zhxdfbjYJrUc",
  "key44": "rS2XSHqYzu2BSkH6CYm7yXABoKU34xQXu89KQdwnKvcdNrGq4iHSg3UYmWCWAcdiqoYTmDeutfcegGFucvkodwE",
  "key45": "qjTBX1cdQdkhtqMQzKckNSBxXWtipMbgiVX1HySDUEzQVoEcLqtq8waBcvuarcfUiqz9T8cNraRSL97XZcSgAhY",
  "key46": "393MwRhV9UBjmaouYxaTRosLAnj3BV1sT1KwCfF69i9U9MSokewE6KQajaZgHJKAThYXKynuvwc491DzmDAyRKG1",
  "key47": "3kPzzj85mXX3mVACVv6Cere552CD1AzverPHKLg2AGJeZfCcMhJtawCDw8GtJvhv2BqdsqmiwZCv7nHeXJLfL4tT"
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
