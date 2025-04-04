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
    "dbaJKoHu5mXmYJEX7J6WLP2eaJaxBnYXfHWhpVKzuMqHxBuRbe2oqH7vJbCQT7jSNsyrfNzdUV2L81uvnpCmUJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TiAzqHM9zgwpFDjNknnujbFffG1se2ZraRZQqSYh969J9q1ANhrCaepQscADJsS6dCvpGw4sJ9KFhooEzc5Nu4",
  "key1": "NXZUFKsQszzWyQYxaa3ew6XK9ivdPX9c2hTVKs9BB3vDNr7QxXZbiqvFz5R2EWhFH5aMizosvwKemWa6ne4Ewrj",
  "key2": "2aY74K3vvkgfziHF3qfdewqFLc9dHHAgqpY226cSf6Ru6z6M6ZGKnWTRpx6VTg2uXmtF1CUsKnDQa76dVT8bA8rg",
  "key3": "2FpWyfQ4WjJ1gT7JWAPJ9NQ4FUZ6ZbD3mFwUWbFmmwNh3xAdE7YbHMmyUR8K1GNDmaXnFvfExw3gQzHpq1RfrbZd",
  "key4": "43A5jqDiQaxqWbEY5JSavd8ZohoppVg4BGawWJg9MCMqAi8MwB72ymPVN8YR9gWRMTtunGQnQroNeasRoHTZcPuB",
  "key5": "8YTwFtPJfYqf4FsS5Sjt1A7AKQ8PSSv4MkToj4RWPfuPCRkL146S3t5xCdM26wTY88E7VXSnwco3C2qk4ejHjM6",
  "key6": "36Gcd1ErEftmf6kruvi3Rhi4csz7ptGhMtD8jK9ia6Bv88GLWfF1Au9q7rozNtaS433mSGYy3panNZ7SYkQveLaD",
  "key7": "54WivQu4rpuAQLfQVHDsZQHHTf5b74FbpsW33RRzYf1bJMYEvXLRyHCwLFWG8mASmDcvLLHnsfXDaDsVScR3M2z7",
  "key8": "4RzYGPgBqcHZT5SDPzkdvuXxRAa8gN6Z4mhM4Cz7WPBRRkvk61c3HkL3Aiu1JwpTYHYY9iQ34uuBZ7Df5odzagRr",
  "key9": "593UDeU3ZymLg4NqhXLboqa7ad4jNCedP4Y9g4EZYzzxzp7jUobX7oA7QjmJJUmD832mo2RbjndEXSMFJX6WP9Mf",
  "key10": "2A1Kx4T7K6KPiJJZhw185v9TjV4yu74nCorgDEx9EgSLPzx7FQ7ry3iSS3SPiPmJXFcQ3pTgHsYxfMJC7RezE3Zh",
  "key11": "5wsnNHgsdfoKoxu7VTJfE7KPKhAZkBnUGTPELZ4LNKbfKPctrGy2q9cHtgS4Sp3Qfns8dbpjiUFZzMViJDNMZdk3",
  "key12": "59ZNm5rWR5vim8RvAoACY46m8Yf4KYP9n1cWTyVFoxB4VCBLiKQTnmx9kSxHiQStEP5GrPyGco5rHVr1PbyJWrY1",
  "key13": "2JSs1NqYDQWfwsaNAokdrQffqLZGSH1U4znRxQeowMgD5BTdFePg6vFHy6B7WENXJJXDHefup7hSVUyo2YJWsrQW",
  "key14": "4198DBnmabUjP5pmJQRDqgWFqFHxr5cYwTZdVupvJJDdeWYiHxTJrnSzCoZGmDsj68Vthx4KY7Y4SzGcH1kPa5fy",
  "key15": "4aBSevRS2HHNbiGVMb4GwgS2hkEi8b8S9t6n1JnHWsapJKqJu7hFt1dRADGR1r5DNCV15XhViwtCfzhqTQJujzKm",
  "key16": "5YwXz1ej1P2YqziuDa86v612e7PJHBEUWne3khtohMK3GTMzvcAeFrfz5q7oddpu7c6vPjugEZ973FefeohCqKX3",
  "key17": "KvaonmeMc6yZctEKosSyJQtHLXTMoSkRqxNuMJA7Sjn3b9GAVpAu3DkRnkYj3L9uxPVekTkR6sRLkMyBpBD6Sgo",
  "key18": "2jthVegUt859zp26mR6Jh3YU16wc8HvUkJvmLUocK7SBBjxJw6RxQXFEg4Mxw6NGScQFNhWkMDSDbbatpSVAZyqC",
  "key19": "4KP38DzLJNcA2gXTCgNhzhRNGNDH7WvkAMPEPU67ckVX3Q7iTD6BGiNFS6pQobw6FzLo1h5NYAZJZH2oCTyKN8dk",
  "key20": "2C9aQGauruu4mNM12ZysGhmUzmnu6RzfNGEPRTcLbSJ3P6SGGNipm3yzxreReLsYJMteP5eopmwe2LyhhUN7M4QL",
  "key21": "5pR9JCVtQw5ZquYJmdc6xN3WSk5xtyrovTNbK6wGojJpAwZRTjkb3ay6GhXQzfJuCJ8nvUtMiGoUux62RPDCxCD7",
  "key22": "3X9XyNgCrZqi5CodY6RdytgU5ZEpEexhmR2Ksyh3kWgtwZm3ahCv2D48WSm12U45oBpScgFqrmEGs9vSMGHEY572",
  "key23": "65pwJHbTT4roQqHAFZDjujuwZedai5FB6WbWZd6t6HGD6m84hAuL8Fq8AiG6Mm4H6e9avwVEE1sU1kRWFMKDc9rk",
  "key24": "2DmVkhV8pQCMp21YGUguMU8Fvhp5rgZmuaAqu13k26XaGENdsArFNBrJt6CSmcM1WzMDYLe6RAk87j39Jn8wNrFw",
  "key25": "2ZfNQGmL7CPvZtKATjuds9PCubuht58trv2UATcj1By21EEjMspxNeyTRUH3ch6kSBqhfQ3LgbgN146RT28cy5xG",
  "key26": "T5SvVWQhPn1Saip1VaBajSF7rU8gDapRDRYM6mqXaTV1AzaGhBmpUrjK36B4eQ7NJ5VVVzRg1fYNESAbRpxvCmU",
  "key27": "4SGCb7LSqdtfaizj3yEBhHT3uvhjrFtHkEiVMyzBs4cnAv36mWXddVwDT5yc27tUdQGuaouGEgaqRkKnTHzwsncA",
  "key28": "3nbK2saDpEFbwBcyZd81doCjEoHhKtzM2AKvqngrWoV59c4jGfC5SQ2S7Np3oRgEHFbzxmF5YJhu6CUcLW1tZGkH",
  "key29": "afjpgsF535aiGxuVtaMEghsFjWdHR1fFoGd8iSsSikWuAPgZ7F89LdKjbjdNj6uXAnjKaM18txRAcyF6hRXGEae",
  "key30": "ECfVHvafDskGPVMNfZJDpebPrxV3iBtQZX4pxr5NqHWjAZjxPciDsv6ThLcjAgDtXekMa6NnKhcrYvdUnvfn1HV"
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
