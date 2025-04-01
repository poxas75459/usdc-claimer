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
    "5ikQJ2gBvxh2JrbZNBJ6YdbSVZCSMWJEUdqaLF8k1Bn6JkZ9KGTixDG8GFQ3qx926YkaXYgvo7YNcnC9fTzD4is8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JMZi2nPbR58xfU6QcqfteyYkn5gWW8NgsaJAUctZyY4T5jsexHim2adknSweRiq8Ct8YRfBEnaGUQphgWmULw4a",
  "key1": "8vbbvSYhQQbfxZfpb14VWM7mzGafA7frf1arZA5EG4cn75iPz1XoRLMVGHygi3UaeUztEfR7KbPHgi79rMHnPHE",
  "key2": "WZFh84PiyrnKDq8vk7C3HrweDcHMnrHyeXWVWU6nNvKtyGHRLz6q5USdFf4X2M66DjyxEtmr8GfBekx6nFVdKHC",
  "key3": "5GzgeXxrZcGQ1TVGVxw9Ssm7wzZmbG4BpZ5CXz58uuajemNiiPNtzrVAvT5ysGY57FESVKvurMLmMzrC2gypVeVi",
  "key4": "3zeBwwhSZBojxSnUTWckkskcLwqBzsf6sTbZGhzhgyXMada96migKvVtRkP4uCeYrL1SgNjTJv6HrVit8GvuUWFH",
  "key5": "2tBcCsPb4H9weiAyFo1RGnUPNN8ro2552Bg7Svu5yN3U1TZvb4JDces3mTDThgdbv1X3gvVsCeXfLWoNRbCpCSGD",
  "key6": "5fy2w7m5HSS1MYiT3H6KRUuydNPk9edWKpJuwHBzTEHx2o6Yh8ZBkNrD7cd281nRDqiiJ8fcwfY4g6XCRk9jD379",
  "key7": "4qzy3fgjwVPdJnv15V3bzVYT6xrk36s4H8tevMyYeMPr3kByRkg5Z6wniTJU4GCAhNbhDBTHpjZaXV7U48pQbMHX",
  "key8": "5nN9U6nyP6nrFhQaWcc9ssNPdcefJEMZ53tAxoEDVF6RJyD4pNK94zdGiYHTDiRVt2XuPmP55FQRMJd3H1D4RQ3i",
  "key9": "sNzR42eC1wEeZUFt8m1L4ibt2ghBN8yWkv8ju9xLWVqFKifQ39qrQGWJFXxYrBu9UDucmb8xQA1cmbZFLt6qFg2",
  "key10": "pQ4HuquZEooGMEbyziRWPzGKEANgfFecw8Hn7xTGChDZbati4c98435zpbbBTVBRtsEjEnE9ajU9Moq5M2KYFCB",
  "key11": "5FjiCGRaxZ1QayNww7sNJw14SYkcWvDnNsijeb4Ta9tGJW3FXYvL3ppBxfNQ7rbMMR5DD21wANqfSMsr2qySsYXa",
  "key12": "4uVxn4rEYUnaLR1YG4TzBsRomCWqgXvQiTXrFt6MN2qyRM1pp7vrkBha91aNMUipp7KMVo9HX5P3cX18M3g56wne",
  "key13": "2DftUNM1YvCW55YNx2bajiq43CRYmXW2tf5ANwfz86s39RLyaMHBUpSXqM57wftxUUf3zuA9jv51dLA6RspTggNj",
  "key14": "dyTfL1wt92y8ugR72ZE2KCZuZiEKNJCciW5MJxfhBPSUhz5Y8c4xHYrBg2d1EPbfK2PB7AVWGhRWAvFTy4nFMnt",
  "key15": "3gBD698rbp35Wa3H2HJyTAi1zwMMK9VtUmTvbypN9wTymSeL2eiY3y4jSinyo2yUA9LxFzvJrd9SPqTtMRZsWbYR",
  "key16": "3Ffo9ikoZrAznNc1AjFksZ9vdpzMWNYEY3uxjtTnDU9kZxA76gn7dMDE8Rb74KD8PQEe8L3UxFq4qGcKA6bFnvEz",
  "key17": "32iDCXTbhNWyuuMLxXMGtuwdqT7AUAPAFGP3kV6cyXqrmkBNAQL8WP6C8AtJiFQvjr1DGdx8voX9ngR9guBkNub4",
  "key18": "2NPAxZuifPu6c1cbgsbevVGLorFVR5RJxmGZgbVuochGaXnLqxnH91ABXPwzSgzpLTKWztFbWVrn3tb886fUrB5N",
  "key19": "u6rY3Er9HVDY4gXTiCoJCKsQew3M63g1mm7wum5mKEJ7BZey4qFCknVBgkyVvmfZPtbDVF9qxiX72wdnQxsdeFC",
  "key20": "mLUWiGYKY8v2UjFV6zWmnzgJMg3erad4m9Ss8EW5WFGHQ6YAK3By9McWXvYjXcA1xdMFWJ7Nfb37EK7TSMhCc7F",
  "key21": "4CbcHmipPnygyPggWFrBiGseXyPi2FB7EqEg9J2LaZXfE7zyohvGEuA1jxW1mGJbizZDYH7j4pbRFoxnsgGtwpey",
  "key22": "nrrLu4BSXTp95GoraHUbi1YijqRAzp3unMqhCEmyjUneo1eXmUTtuFWtkqoxvSGimD9ekL8ybFdrxgtUZtDFKTC",
  "key23": "3g5SRhvXg3LP3jR8yxqrqDbPCKCXNM8HoB241mCrKdSpD1rBPgJRSmFkhK7E4tcio6cjmahm4JTfQtqgfBV42rqh",
  "key24": "PLDRiLXP55PA7dN8xCjP65LpLxymNXhjY87duDEHKAaujobvZeSvyfe68RqveuLxkb5GS8chtbSf8J87Lh9iM3Y",
  "key25": "4kaZndAsuPHrqdUj4j9jx4qqPqzZNcLcbMEioZhPeRwUVt79ToUr7UTsWZhkWv8i6pWYMzndmtvsV2uTyhZ41oNJ",
  "key26": "2p65qJvMDzqyA5RvnJjWDRjjFw4rW7uUhH3Dt8kqFiUV7DU5N7idyBdQgMe79nHTBB8EHbHhAQjB9V6cBpsKRFAS",
  "key27": "5pX1vN9CFMT4TBS5yz24DVdsbxr5VEbzh9eA7jFNRv6nrLRhpCEQ7kdHc1WQjHVAwX2gnQwEdp9LDhc6G4UUttHm",
  "key28": "52SKASoqG5sYKpuLGSooBBp9GQ4D25WsHTgqoFkX6AgWYbJgBCSoirCbf9YpgYqGYyDDTSBngrdGytKVc5uqzkHg",
  "key29": "cdcRUxLyV73cEtv8uqeBz2SDfEXz3jEAU9c9m67ePwMM6SFzVG1FBJ1goow26CueagWQdHM9CNrmi9XVKgFaEY8",
  "key30": "5gikJYteUwfK9K9DdNdNhx3tXkJGKrRcy5PDrjTr3ohnBVvLDMifpgsFxVWrfX4WwENrXjcMaFnozmLuQke2xdeb",
  "key31": "CzpgjULw57ziu9pTMzQFBWaCzdhGqws53WWRpjAgE1BVQQVDmi8H4pnUwh5k9wGNUddXJJgkVtEyo3P7h8Cwcir",
  "key32": "gmKtJWoczhFdoJu1EBuWK6KUqgKUmDiEdNKoaF2RA466AAbFhDzmSz2QhonEHXWVu6R6BCjBq9YbPFdzxUtF5LP"
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
