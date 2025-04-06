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
    "FCbn8dVd92VFhyeDjMnxx7jC7TuDDpFwh7Q4bfGxgQmnqd5S9nEhF1dD8QfF6Bo2dRXr5BSfnPEo3sZ4gq6Rs4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zxBtSVyKHBD5Rj5S3XqJwS5kiEwkmQu1LrTQcaXecrvhyKvsTwyaNVQrGakw4aZ8V3EXJoCcGRLcDC6mHbwnbiY",
  "key1": "3h6MNso6sLmeMnbUvidZc8WgMWwSQJbibAcmo8FbEZNRXq2PYwwCRiew54H3eBrmFVchFfgPemrSUqSt5B2ZtVJp",
  "key2": "646rsdmBC5hM1FNJxHrhZsErfViHamCMBCuc8THHvcahMmpgKdU63Dz82fngQBAMiDsbJXheZG8eTKVWr4nVC5Bz",
  "key3": "3dhASJn36WEddvhZyWeDk1WU8Apd5tTa1q4MBTWEYVQRgVYTYb9SP9CmYmsdGrAb9L3rkfC1Cr8X2frgi6M3Tr3e",
  "key4": "4MVKSQ7sJt2cksALYTTWhRmewsfVNxi65af2tAwPBjU4MawtpUundc9WpeA3XrvgVwnD9QtUgSWMeAKH6irz4J6c",
  "key5": "gT7WaWyZ22QEevGJ45CtBp7pRxH73WPfYkhCLytEyT11zGPNGhwtXf89bAwCgY49tGSJaTepDovgwEJaoEAYdsW",
  "key6": "27EraQkRw1g8BH1GNb9pM2413nZLA8Wzg1U8avcmSU9sQdSXbpmdpL57qFBg41PoXLj23t58m45E7dbGF3fzgoeP",
  "key7": "5pjjA6gGDUGLYq1PeqpXP686hrGfZpvyNhvSP1kDJUYuH4Ep2iWsEdUA7TsAhhAcEYmiMkmwBw3WTsBacgWuhbik",
  "key8": "vzVARKPLdRo6wNVT6cXCGLLLS2F2Sy2Xbn5peoa2bpdpRUDz17YB6tf6RasBKCEA3Vpqa23BEAqFieUSSyafoAH",
  "key9": "3iYrZEBjaapJv59ZZvFsbQBEm4RgjTtyxfZSMcqY63L4dCgAU4UeWKhKkHM6nuv2WwxNHj6XFV8VzXrYGz2na8Sw",
  "key10": "2oXDr5SSS9VeN1cYapyMjSU4t8Z92WJEohZ7BhYqEBVWiZuVAkGeNZRAhzryFxHGGWniuBCgXh9Nms3kzqXBswgk",
  "key11": "ZuaKFWAKE61M56yhEyZTxtXyXk1Mn5MdShDgYqXDj1yTovyaFMrX6LWygfvtRfPBSL4Xeh7B8RV6GvG1TWBcCEf",
  "key12": "3NN2nfK2ZvZmyUdX2ghNpvbSDo4LH4CdzFyYNCN3yaqxRDcLJi6YN8WY9n27sHPEWKAQo3WzdmcydqxSLQ5WBk27",
  "key13": "2AFrezoNWZrAK1yCBpLnKUKf31cCcuqwmKt4f9vQM8JSuZF8rocA5aEVfJnbuurtYLNeGjB25SCbZpmYgX9TSwtN",
  "key14": "1av8nZpowDFPw4tDNnoeRRH8u53qSoC4PveUi5zFADkEakoJmpfJGbZn2C3A8PM8P9wUn4JwVa31DQukmwE1tHU",
  "key15": "3GqWGw1BhxNkJXKkJhYy76JyJnLVcXh1Hu4b4FRDY12YoAE7NbuQLvkwHS94noJUXT6fF6PihHwiqdQ9Yk66NScJ",
  "key16": "3GfT7f3mRH3LubPviEVpGE76B3kDJYYhFpqgpFJ2mv2rrTgLSPf7es3BF2sPGJfJav6T8ouyrv6mbjiT5hQ2XGcu",
  "key17": "3xbCJoypZbEZEC7BUnJ8QeajsMovtpQQjtdyqkVFUioqaCk4SsJ3vTu91W1sLHWpdaNMv1AcMGYExtPtD5U95LXR",
  "key18": "3FzQY1x2nduHcwGq1RoehpvEH5h7gXpcm8GCKdqynHRoRFiY9Cjo9r8RqLcBa7PTezM6aftMA9ELVAMWpbd1kJPN",
  "key19": "4RTmYRy4qnivv2kVW5H52xkuAnK2NamzvnjcJR3XGE76SXUEVQHESSyvZ34LzKnxkFKmYuRSaEoxyy5pAat2mHJD",
  "key20": "CEc5zraDHQ3MVVjYrX2u7KSJU1ho8rYiM1pwue1P7MogA9nPEcdaNauCV6WgRGiMgXg3BSrBZqb2S9TexufMr5M",
  "key21": "4F5J9ZoUjbFAJkjBNNMiEhkEgRS52v7pbad24EN3RKGbDXBY2Y94YUYpxdNBXv8QTZvt32rNx1MthoNKm4xtWnp7",
  "key22": "35Z3yLtwoL7hEkQCjqhuTkCSWWrdUQpmBdyEMLdZ1XCxsMH8U1d4DcaTyWKpRbRQPFXPpRAuEWNbmUns8wte2tEY",
  "key23": "4QXw9Q1mtpaiYp4K6KZ1pnNtZvaE7k4xagYvsD3iZA5LU6tHggxzLwNUWzSA5a8GNwvguXysFE55uuY7McPbcVNG",
  "key24": "5fxAkCgY4eKNdobkNoBK4waVLKfT1aDASxag7KuyWTPNQB4oFyUansXP7iGsQ7r4ZbDmDzpWabvpY9p2bXaUevL",
  "key25": "5JmAHws6fGvBEZeGP2Hw44yxKV454go23zqUWAyXfrGpWF6m8dw8nNgjEHwkc5jsn7fhAvEXZXXBnU4244Lt6Xhy",
  "key26": "46JR6YX82X7KxWC6JAerDASxZGfuhEhrBNoMNthpc48it2YZSt2JiLhTpW7g1ZwyMNRZUmvLYXRY4xrAkP7QEVRc"
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
