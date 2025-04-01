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
    "23gq2kHYBrdJcoGTZMGzRCrpJJbTPXAZvYHkqPpviVL6gHbbyRCLba367op39AcAgQtC4i5B9ZKhPF1XikBzi5Q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNXQ8kuc5Ag3ReVJRK39pcRq7ix1atre1yygowkJGBBqBkNkFzqYjHMhhGzCPv3uLANURNHVqxja6crXSjRnaBW",
  "key1": "4YW1DZCT1xh1bbbCfGnEF8ZseGzwek8DE4CLpbLT9uBoc4svodgMKWmH76dE5pmrNY8YDPtdCbKtXa5j7jvMt1qJ",
  "key2": "4CabjZGNKp7NpqsFjW4SxCxqj3bXbgqoUdqv8NTjsCyjt34AMFz5MMsaH3cWC3WyYBbQN8jTK599u6Ap2Evjv2Gx",
  "key3": "46Y2gNgk7SjAWNxqVPWsFZhJMZQeTZtBj1zGTsQKzmW4sJKUzmCqggmjCBWBFk6KNv4M8sFGHvfnugM8CDh3Q9XF",
  "key4": "5Vvg1Z77tGRgECZRyo9VzouXaEA5juuhahPByM4dQq6WZKzFNTFp6qfu1TkKYXSyQqWJKbYKCuNjdJYxc4xoxh6A",
  "key5": "4kn2TiFBUwzXWS8EvJtV8seT5zHrkKz1JDQ2gCSWtw1f4wor272Ty4kMzzSLKkReffYMKQN1tH77XBDFfCtwKTh8",
  "key6": "6osAVXW3Emn1QpUzAYweoyavT16yJSGiw5GH4bzUCmoN5wri4mBbtcDLQLuNNcyeKCDCBsyq2Ht7rH5UEoVSYGh",
  "key7": "39opnAy9ikrb9DUTwPZSS5KtV7b7ohCr5dUeJcS7ZiyYmeGJVwHVzG6Yk1PFCxKYZdLvxt4BMcJ5tDgn4ik7SxjZ",
  "key8": "3KNa3KyExQ6t9yAUjDV6ktsMHZdqNsufBVLVoD6eCdT1iCwnpy4KSmZea7qqzEUZVyZNLdvo7y9zkJ9TPoEeh19U",
  "key9": "3BdtBdr7tLyAtMPy6LfTeQpgkeBD9tNcp5T9PK9ULY96Q3GEGPUYpCM4HVeEM4Vysy9ixe8Ufdb9h4kub7LhDsWs",
  "key10": "5cgfjSYrfb4WEr9rR91ezi9p28cHwTHM4kWmqkh6XaNX68C474HVH76T51H1Z1HbFMoHPKroyikD5kKsBZGuQNGb",
  "key11": "3rpNw2LJ2BckXX3smXoZoUcesG3rEbUkDUosSLusGCv7WWox3Gvg3HgtqVPoBVN5Gx14jDHYXkwBPZKMp623RC2B",
  "key12": "5Z9fw5ogHUN4W9QTTfEF7BBH7xzqYSgKCJDGpacJ2f2UarzXR8nRVB8VfRz8HqhyJmN3ze9cgnop9DwduKB1FgEV",
  "key13": "SGs5VKK4PjCeM8Hv76heEjwwVyYCb52GWzBcifjZKeDeskCDmHzsZqW6ZgtLEtGDQ87d9XcK6YrgVH5ptwnCNTS",
  "key14": "2HfELzZyCHN86Ep9sKvHogSHqFTZAn7qBT3GcmERr4y7pXymGNMYTpE3KW5jeCHLVU5QdSJaU3JN6LBZ3ijK44W5",
  "key15": "aa6otWUgDYu6n8LAD2kZ3nL4dCMnVT2wcaw9da2SFCkfijg68aC7VCqNb3xDU3sYXCKUcDNpRH57ncjpk8v3VEK",
  "key16": "5Pds9uHSmfvvmr46rd96BczKFFou8CPzfHEbovabnnydaHrwso9geBstRXaQkGKifKq9ysaSCuGUkPV7gFQwmSGr",
  "key17": "3sRR4uVFiDWS3WG1BPamvHbWTpqpreL3Pb7GWzfnBy4Ao6ZuaeGcWbJ9KXNdL8jD2Pm1oZAV6FqsTrDEtwk5ypF5",
  "key18": "3RYGzuyAD2UKZo4KaDL2Vcc5xnSBuPRwmf5LLxqVFNEf8UuVeBQwvDRSUsfp4eAYYh1FHpsQ6nGASVmewzevUEDW",
  "key19": "mFQwA4h8wtzEg6ygTq9okvkrKjksPhiLGr5PksmBci1rNEaHuW4kuXpD4kzviZBVMaCpTrjg4FhefuXEjnHN7ML",
  "key20": "4mWrJjtRhoEeAiHxLE7tpoxgYv3jUTPrV1vACqPmSDifGygbmLfW3XVkGVosrdshfYPCGo3zgxm4M72vdvGeQGae",
  "key21": "4TqsDf1oTP2Go3HxXXqwgJE3ykxCree3jhdZm8i1P6J2DwkULZRgn7pCRxJJUKEjNw3UXF5P2mmr5MQH9U7Sxmtt",
  "key22": "44XKWtan6M9ZaDhKF21WYoJwbdRT9JzSgaK78UwpJyVAn83mAuCVmt4HuQKVf1CYEpwvEJTZ1c6MRxuzVs1vij1y",
  "key23": "5mUDVwaZvYcadDT9hDESLnU1aNZ7tpzHJtzTXpTBgPQW9sprhoy3k3AJHsQo9J1x76bF9qDVkKCjUwntdaFbpLCR",
  "key24": "5xjabeWjK6yULZxHGBCDc9SwUspeVRJdUNG5VfpgMfF9buHwU97nESo7vUXbAVWXGm5EbWajDuB9HVfexNGcXwcu",
  "key25": "2BfgrHG6ngGW25UgNmyP7W3JPPuanZb6xTQ9qDG3Pez3fWKBmHuhugVXeePYQbDFTzpMC12wKoLw6wCYpy9ioZ9u",
  "key26": "3r4mtnMMC1XAVncs256fKdaBDijhN7JAatAu6jJiWxxuuHvhaTNnA4VPzCgmu9Zf3qj2FAmnSgo88htn6UVoB1E5",
  "key27": "GRwCPq9XTUe6UzgEhj4TRNH8Ywz5rHY3Fj7YgLm4z3BBzCTvdwEyCoT77zFPDN2omdMm29n6CkRt5hPcwBfuuAz",
  "key28": "4csmTh2ArFAnvkXPm4J5f1oDj5w3iHz6wkSFRGj41JiNnE7ons38Ji4eajCy58mSA1qzpuUE3t1FKtgtxyy3RA5y",
  "key29": "2AbwWV3nzruDCV4dBSmBrNTBsUTowKriVRHx52HVSnGwsrhniQE4tpYtcjNCbu8D9Ckzq5af5WkXXAiGkkc4YtSr",
  "key30": "4nSX7MruXYCds5yXUX5AvD12gLVXrHbpnJsJj8AxPUhwBhyXY46NAVAxq6mk7fP4hxZ5opAxkyHs1EQrqtJ4EGLK",
  "key31": "AFtrnzw3KSL9hWGqRHdR95XbsLmS4C5D9kS4n1s75xjEU9ni6yYZb4Gpey3QgfNrwLG3VinGQoCj2DhpCKtQpNR",
  "key32": "47wwPaQ1eDxRyDaGYXngFTa4JR5byXVNaZ5pSAdVAMum3z9nJ95uT3n918gsdyba5Zf9jegupVk9FpQsYB5gNghf",
  "key33": "3bM5oZUhcN91MPS8cL1A5GMpBTWXkbud75SBPdg4R58Y7Mg1wZH8nERnimF3vvASgF2FWA9jTeK2AvtyeXe9AQy3",
  "key34": "tgMDVuugpRibwBdiXgV5cvJMSLwGZuMUpgWoYP1iZofwngoEvcqQfCn1aobs8MNBZ46skhST8pteByYqCgzfx8o",
  "key35": "4woQcNGHC8R3pjEdNbzvT36xDoJ52k2rCDEmgZRF64rWw2gz672733dumFx98t3cBWEfycMBFqyY5fGhcGnXZveZ",
  "key36": "2mP4LPxUAArjnEp4mb5TARGotwcoCJ7kwjBePyYXV7N9znEzovZN7MvCejs5YARD5LgAVFBTmhYFXJqgnczjgHdA",
  "key37": "5ZVmPifch6Chj7utXnc1WdUDb2Jy9pH9rJHkbByMh1c7rmouwbbMePnfpmPZP9VsBfzgTRaJ4sXAYYCgyhuFkjts",
  "key38": "5dwyxYWnAoeQz9S4MPbNBxK3Gb9YSnoXW3ytiqMWTn3r2WkGKv9kmEzbMk2SZByEUR4AvAshcU2C25sqZ23mdbiw",
  "key39": "2fwygAPmEzuLfFfPxN7hiuaZf2mo56DJqCtS4vwU56JqNdmGrjucYqJuACmUurzDgMUAsf46bXRM5bzKrpn6gvw2",
  "key40": "38j8SyBbwaACS7AyB9aMkqBV6znivHXDp4puZtZewds5ftHiGRo4VFyMt2RvXzqKQJ9KDocEP1zywEKfE4AHkWbS",
  "key41": "53TDw6z2jz736ZahGJNJmJUrc5JJjRyshTgPgrCWArDtYngi8A5pFx8tjATfWNTBMEyekbVWiqfk9AkQTEDJZAgj",
  "key42": "BSLsHqxVxqj6YyBHW7PL21zxtJ4EMiD6YGqc9QSfNGvvLUzayzQVVPSDp8QZoPJnH9tksemafZBePG62fuFMz38",
  "key43": "2VkqHqbyS8tW3NA3ieBQuMUWgJJ6d2z4bFGuALBZzU4QFwj76CiEcmZWhcTN8rwjMfwGALtSATwVYv5FffwQegMP",
  "key44": "3K7x5JkCmqE4e9EVVsmQoNEus4JgFnXyftPgqfQ1R7ZuRzvdGWDssfEcYmDy3haA4wfk8eFG9rFDuFN1mr8CbcW9",
  "key45": "2yEXUmz4wMGPjbJtz8YWAJ3vWtPcRHmvrKqcGYYRn96ZFmxLjUeoVaANjcpvofw92rdxZ3L6rRodb64G2oUFp5rn",
  "key46": "5VM8tHJuquingFH9AqveFwz4x5cTu1AoDfMyEByB7mZzdRwYbK8ajaLN24nzepDuePNpZjjaqnQYmrJfCu1nHetf",
  "key47": "5svDwtkngE4q7RMyAxxhh7qhJnABu4cLNveLZ9qxXb9q26BMcmhYfTjbm8VSUUwcPbx36pK1T8LPqBUaXPnqjNa8",
  "key48": "4gERphGmrYWEz2XkjrCB7nW9xDM173SCh25GgpBgPHeui3Ux5WHe4roYkYTs3nsx44qBTJYpsE14am3iVkKVzmyT"
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
