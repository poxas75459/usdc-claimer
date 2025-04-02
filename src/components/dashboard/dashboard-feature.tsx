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
    "4e4LEZqZJqzjDre2xGn5R5uqtCiyZ4sqU4etuzTgntRbPwXSx9VkUAJ6dW7GnQBLuNSAT2zx8y1DBZTe7R6ZLdfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZYwhtWBuy26CdgYagzSFd33WHBZXfi4JspoSwcspszx5TMULFXTHqnFc4fPmWYsbpJxFseV4hyu8CiNCC17Xr1z",
  "key1": "566nQaicegVerDvDf2b6gnkWHp3NZE46wiQ1rU6oBGxsa93uSAZMYA6edyo1vzz8sEeymBuSmdY6rCbTV92S5RUJ",
  "key2": "2QaZ1M5aTHHmMTo68qDjzAwRFc4djja9bc6GJcoTRQgxQgS1YCRjChPeQyLgmkrxLgeyLsMJN9fBe2aZNeD7rSHc",
  "key3": "5YRcFZFQ6JvNxYqYZ5CPGpiFaMHW51VYsN5XdBaP2SgXFe7csfDs8Q7meZ9Exa3Zt3nbUnVdUVRpkWpf6XxzWSCt",
  "key4": "2UxDYbTAyESmHdFsbPf3Zd3yB5VFdtBieKmhZ423XPwh8N1BcZiLwG1QsgYa2DWYdiUfE2fHzWYSfeKPXovXhJCp",
  "key5": "4EDKpXmceebYVK7uJaezukU3KVyZVKUnjq4ryRtpHNwZ9EJsisGQcrd4gPren6SDfCMTqz3HYSFt1yY1tsofksJX",
  "key6": "3aov1xiJVP5FrLpkmpD11VmhHaGsU4W6tbRThn7VBmxG3NX2mvyHM7L4k7CkYmcFXpTnucBxN1QVRqPmbN4W3Sbh",
  "key7": "2XsE33gGQk6uF27w962oYvEHGCnL5ESqB6A7oXd4beyT7xnKh5NxEdMYXicgNQ66oXjmCRHZJQmHXzgQHbF5iHKF",
  "key8": "5HNDaA76AUqBZbJvQQ8bxYz2ThrbLyjTfZMgSF6LWrZtVqLAi4JUEfHM74wmSVHMp469CohxnrMejVadBAdeqLht",
  "key9": "56f19x5P3ySf9KU6iiDSBuaY9YnobCPsfZwPLps5onK5hpe1rS6V3Tj4stH3YRFSeE5CHfQZzYbUQ5kTSa3xbVfv",
  "key10": "2DGxQGGqsLrK8Db52BFqYQRzSB7DFbCa7rZwfbNcxf8SQyj2CMhVZKxr99k2shjvBBFoGKuxehoBGyWAtcBcfiFz",
  "key11": "5QK6DCzr3cavePQ6L7HohuTyFDp39WZzeCofjCVUWKWMusmgD3gpgzJrysRNymfLJBbWgG2TvYnWj4oCTDb4i1uT",
  "key12": "5yAgGJibXtxHbWY9uehReDRFaPr1CoU2k9ruEMZgBj4VXcW7YMad4fmMbW18vP8iEfTQNCxiJfAcej1gHae92hPn",
  "key13": "2EXpdfXdfy92ktfg8hjLFjHej31nCfPoyjRACvpS4JxwSYQQZxCnaKweVwczDmVpgyV85CjBLFT7H5XTg8gUZJPJ",
  "key14": "SuQqCP2rHnJQkqE1K8BmEenmzUBj7qypvxFyc1Ayf38PPvGX1JQTKmXxREjJWqobrdXYovFUXyJ49N2J2dDFi41",
  "key15": "4jnua9E3ogtxEREBbpR7j8rER4KYCwduJT2YnWKYG7S21o7poy1r6CY87AZbZFNjXFAvygXQo2vA3dqjZpcEbXML",
  "key16": "3HQg8LrztfNaqPaYGiSZHxYv2hjAtENQoPnvbNGT5f3xKHwiosr8E4QsmLiPQW1mmSpJ8kM2xQnFASpreWhewY5P",
  "key17": "SsWxWfUruskZ2AdUehMkXJGwZ8rWgwaPz43AYfmiFdWgoc742zBUWDqVnRGkAmv9Qr55Tw35mULhg5H7RPCMW2n",
  "key18": "3Gkw86WPaoVwmf5U7VVDweQ8K65yseGqvUFzdtqJxyfWjojrztRNwu7Qh6eftD5hryPiikZYLd5WmSV6z65qp35J",
  "key19": "21yf6EDXTt3i7FqWDozJND9EJxtgoGkfXyktCvqUndnKVmXk71ud9CNEBr3SLqHYxgm4FXdmrKoaaGXeDW8YxVuG",
  "key20": "5tNdjqZTzRrv8cFKXbscBBDdeALEUabAMQGeeVFjGZRrLd4khEm7ohLiy8Jg4iQestH8v3rBbF3xhYVij7ua6F1W",
  "key21": "5DUvw9jwBj3oeLgBMYNGBjJSWoVgmC4BFuKF5YZyMBRBTbgDAoutKYYguPMDKVWndUrU2oXZmXbSYxrzviyyfRnT",
  "key22": "5mGpwAc7tuRXpwEtyP18njdViJwVFpdKXkWxaF3WD9wqWF2SjRHfXo1GyuWpw1hWMxNrRtkQ2YDGY4Nu7RJCUENx",
  "key23": "57SLgezM25s6v4vutU2SzdpFZRJQeRakFfPiWPWr1XyWjaSYjkYE1bCYLdRmunEhuxLmjvKTn2dEQ23E6aXqKBZs",
  "key24": "326WfSChXjcuhMuEe14VDvrc3TSvtfZiPcuroFJCDpJHtP8Fohugh5kCZQ6rx6EZjVNiMxeAmi2VEbUa9fcwGBkQ",
  "key25": "3bimnkG4gnhTLvBmnADduBsFFLJvMmdD3PX1zeA3u8y7vk2AhwP58UPY2CrFEKDJfSzJpHfn3tiNzJovpFTDKbg",
  "key26": "2uKpuyMbvzVQvaKCKdXVaLchmUDwk3HGEdaU5Li4MkfXfT8h4AcqPY2f5t4N7PSd2cU71F3zfFUHqpQhU79BU99L",
  "key27": "2z9Z6UXKJAnnKgmodYPHovhreSENanQ11CrSxbRYBqNvsSw1x3qerTxykrdACCJRzpgW5erCjrHLZ8NQHpwffZBn",
  "key28": "2CfFVpmagZ7GzimDoBxQV28pHXXhmXEskWPUzpCJBQmqzTJiUeKEy3NyEr29EWU2AcK2DJnhdAm6Gnj3TiM6m15z",
  "key29": "22mLhEkzUTqpEgCXDpfsBXbSP98Z1yewQo8ZP7mQ9dAkzhNiF96Uqh7bZHfiMyroFoBXMaZh4ovpuXV1jBnr4apD",
  "key30": "UpG4BAcfapQz29GHbZA194gTBQoECQTqEPximDyHFfGkURJCEtDUufFQEmXfpZxEtErjmsDvZSDJBq8BSuxc5cX",
  "key31": "5ytHirXrhp4EPVkivmpL9ab7zwSLm9tUESjprsYBeaErt4JvgDiy3y9ADabBnisCUJFZM8sHV9AWn7SS9Q4MeKbe",
  "key32": "3Yr4cM6qPh2JH41u4UmB9MtZtLGU6J6M74gtmAkPb1xarN9HD74eEwdRPbxVGPZWKWd1TtA5VQvKkNtPXgmu9zys",
  "key33": "2wrfzQDtnNXfTumdd3vVWp6Neuvah1J3x4svWe3JGDc82WwwwnyeW2mUm8AwsdhrMRsQEyWxCMZou46owtnLHDHv",
  "key34": "3SC2V2RWaJtr6SQUSDbJ6RQAEhcwndgyp4eHWAzABFLwAiTN4GcW92qqbm4w4S8CRTMPhAedRGDLUUjcWJhH89xG",
  "key35": "2NYXTpmbaRXBVXT3wAMAHQUQfFkK3c4dZRLMnNbHNMVXfmrUvhCHDZmnwAjdVCzk6FhUkch9NMDfWZphTrbbv9hB",
  "key36": "HnB212QpUZJm8vT5g6Rcu1u3aagc7BsKAg8mRwp1yGjmQywh7b75BUs6aNvrpsArS4ebu1WDC6SZQaHM4PxLHjE",
  "key37": "m8LqiGSzisuBiB2Pp6yqQ171QcjocDmUsrDR7rBqxAcjZybVB3FNKgznw4NR7mGbMt7kS8UJtazdcW1npJ5a5HY",
  "key38": "65QytaNWVN3jqpHffEzgBxfvmGCtKMQXYXh7VZrnPWEfwvwscpP56Jqb3usCkubJf9CKbEmk4k5HZRgtk7EQPWo7",
  "key39": "4KvGyBgajfZdcbixchjSNvf9FRBPVWz75qDJ1itA8XniVZ5jaVa2Zugb3oZ6HQ44Dvr3cKs8dzHVbZrrAvnwdSLk"
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
