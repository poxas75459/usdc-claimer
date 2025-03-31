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
    "5bBHR233HzCeZTLdxgm9Z93LgGVvXKLt2nJbcqiaLpnG6GSK1acCPBKBz2kdEJaWF4tWk9nmJXWkPscNsMdT3tr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkj3f3tebGwvbanrvA9HBiJZnpPfoxZrogAssLfCZWwVyG5UXF9JksThvCso74xSLYHXnFJdq7XEM8wGkMALUHG",
  "key1": "avL5NoUbAJgWnXPoYxppDSHNCfTC2xDhRPdsTTnozy8tF27uk8UNTnwkb6R9XHPLREZBrYTxYaVhGzBC5jYGnKT",
  "key2": "5DK29M6WDN7wJNwhYMQkTbwPokN9vu1Vz36Kp63QbVcanD5YJhd83z5b9gra1AfBe3LvcJ4cwRyrKtxH4v4GXesZ",
  "key3": "2u5p4MzbpJ7dedonHFRHw2kSD35DyY8kzkppf4UX1NaWe6ug4eWR2eFxa64CwK2mWqmZGTeLuK2xSmgZ1LutQPZb",
  "key4": "3x3kpTtG4dQ5QTLQpVinmYtt6tVBteeCHQb1faSVGXWwGFdDZaPQTkZg89iRdva4JXTxFHVY27EgQob23vARkaK3",
  "key5": "43Gy8Rq4R7xSBM8YmVR3Cy6DURsETPxvLrHTPUDZ6jdn6QsYUt7edQ2cq8enjVpYEoryepR3hNzRZpUHPJaJVtyC",
  "key6": "VmNmyTns6KedXgeUmfyifyGWFxdjbVNjdf2Zdncc9YSKJEbLm8ERc1LBXrdQrBNG5DSRr24tz58573GJabqtH5r",
  "key7": "3e1XMCM9XW2ogzpLkAZXEbWpk548svoHM8Wy1HFJjf2HSQPXeWmKe5kETX1e9EzbB9EySAeyWNZF3xBeUfUaLt6Q",
  "key8": "3TsTHwHbYR5yc8f3wRGMi4RdMKNU5VViYgbtQWMSPBdXcCA2gotgBn4bD9hyNbQkubMTUB3h1nH5mUwgyWh24xy2",
  "key9": "383uc6fMQe3v3EwdPd3Jj5KjvxRr8mNBVbrJCAuwz94yCsbxw8UkaKGwLWSiVNdKWo64KBcfnmPkyhgaJy7SHvnU",
  "key10": "3uaozJdHJWNZP5fxjPHUyqeqgszgDzmsiu6Rz3w3WF3DG64FRP6HJ6BcHbRm2uZ83eTfY7S1rWhk7H3jLunwf7qR",
  "key11": "2541At5aBnzZvN9jwyY63AwkTbSp4J7w9yJ8CoQynzMHweMsB8ejuPhsNraNK4ufeV1RyY7QimBMo5VejnrF45S9",
  "key12": "4qGbMnd6DTAS61Jz2duU5cJtn9ANA22V4RdAiyzYbWRi1FYnE7sLCEY8CVhzxA7WaUcsTDEG9VYigkcNY4gPvn3v",
  "key13": "5pnVq7vnMkUEXJh6zebxHP6EuzEFeZtRzEy9aQNSHeNEiN5GU6DjTrLs2zYwuUJCGC14Z1JXG8ae2rbT9fMqsf5",
  "key14": "2nwktznjYofAuV5YM2x88dVHN7vMNQR4EnPt2EWAgp9SePXDuvF66MNA9FZzyg9TehedzdemvjLVEu6q9BMjGhsD",
  "key15": "3pv9kVRqnya9obkAooEBqY4E1VC6nugJekvKv8yGyGaG1uG7xc4z5PrWuoA72YAgh7ffTDCRGWRLYPbbTSVCobQL",
  "key16": "M8svu3HomjeDXAVPtYfkQjAdMVwJ5frDUXcTethEhcu1apFexSMETga6A6MYwst99g749MVs7H13r586T72KH8r",
  "key17": "48Hf39LKmkL1Nn2izS9GAN3gqBmwLZjiAt9govemg79p5DgzQRLFfHA417ZubmZPkTHqRfcAto9uYPMqfsdWRXem",
  "key18": "4qycLtMK3LpFGGAU2EeHaB7XJzC3eA4nAUsVxTUUNMRXtEv9tVkHZdZa4khYxioCyUSVuTPfjGRGDYswxzmyLa4N",
  "key19": "3bsr9bihBQHRXBYL6XEFeDRNfWxLYKzFCipuYyKtFcZQP3Ndy29k6jJVNbcQTUsv3w4TM611Gu3Fthowj9NW4uvk",
  "key20": "2o6MXB7aVgHUs27Gj71hn5mD6EDjZAGujV7UF7heWYGdjek2C1Qzs5y65PQjAJ46Z9EudW5EpQDUsapZ6h6jX7N8",
  "key21": "5QnpjNGLDPRjCFDwgh9bXkweLT7TutwzQQzPbkUx7tqhcUM5iQXFqbF7oxr6Y9YZLsacrDRtJ9FEW8eiR2kMSEcw",
  "key22": "3ZMzSvdtx9N2pS64YGsaorGTFXfhQdpQagS3meNMUkAiF5WYwUEV1EhPGGVijzA7DWbGZS2B72cg3RjpVD23ELob",
  "key23": "ZikhfxUFh15fFrsRTw3wssXjnRaLrJPGc2VZq3x5U87Wj9AnnaxxGnE87cKwfDM3y7KWcTmvDyoZzQc5f23VbVm",
  "key24": "irgqCbhHZ61BrY2fbNy95mfGujzST2HXNJteumgfS1vJmF3cJYo2JLGVLsVLmHWLNxroQgK8Bb3GzZCaUCgnpw4",
  "key25": "CHRa3VktLNF6bWGKugAjoGrcLtjojx7SVvMfxm5X8Rb5oS73AkskJrXN1CmhCuJftX2nLaqMKWsxcusYV8MMX2a",
  "key26": "4Gx92tSkxmza4YMNSn4UAYhpMcY3BsvwPGpbXN6VhmoF2zKrTGVughrX39cwhaYoRzKfqxVoZvwMZycSqw5zeCfX",
  "key27": "2HffVTrkmWLqmYwQX96pq8D9839ikpsuV22ag5MX3nb9XCErupY7yAckMhEw3kvbEy6CDwyzDnGHjK1H3bfCht3K",
  "key28": "4pLRZBVRKQnumHHXkFnid4UP1fSnjJDVhfbGV91cJwNXfwrFoubLXyqDmFQa11ocmZmoeBvsednZ3mxuNU9BQkWa",
  "key29": "1NQ9DeaxwkPGYSVab5stoHAVCR7pAUht7ybmaGDPWWawkt13NBymMBYwN1b131ie1kyoiQ7quBJcyMTwRu1UE9o",
  "key30": "57eAUGwC64qKDcNF1sA9Q8AajXiA2HHxcYk2W6Zyy898bXcqhTPH9FUpiDRFcSMxLpH2h2umb3FJGn88aAFoHvGd",
  "key31": "3GUYKy7QDUBNL2X7yup4bLzuvVuJ3tnf1uMP1yHMcJBgxzBp48yEiz7Q9yQV6Gr27hbdkU1R59ojuUUCgHfkuY6L",
  "key32": "3DQANEH3V4EgnbdH5uu7NPJjLY47DudU2UVndebfW4rg1y9yA4QN3dYotf6UKF9w39vTse9k4ssovsfVKUQ2vnKy",
  "key33": "3bk4LVr44jxfUzRbQqyUjnt4hMnsB5bJ8d558Mgfg3gdyrKN23zp5kSVwpLDFwa8T8RiJqVezX57EtzFX6MioqLR",
  "key34": "mG6PUkVYRddSmUQmg6oRfqe2Fv1LT6rtu2bseeGufPH2LjpHHx1nsnf8ML1KCyrdaNGnr4NuE8SeWZ6vBWsKLCZ",
  "key35": "2xvcg31nRXKxaErRxfh6fLUuZQxJua4RHrpJhLb1xkkLdwitRD4A2NxBoPaEdQZQk93fWUxTyAigCAyXgZpTmWCW"
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
