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
    "3fZhqEDmKEgXiy6nJM7byusbqeHKgtyLF5rEXyHYhyEeUCgHmwEu79yxQH8y4Jt2vcHLQ4qkjTcN2Z4VYDs861XW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5krBrzx7Q9V4pCxWm1fZVDiAgr53iPtLRidDCPQ4q2q6nB7Gp6bYAsnetpoaqLyX3aVnR65Ymauhu1q1wL5hoTQe",
  "key1": "43BieACDQDa5CUv863xj54m8ubuLsVYhuZDe8nRPcrj2YKR4dBdqNaKicqsespvWFREjjwr9vCbp5nQZT2wvh3oC",
  "key2": "sWtdDEN32tr34wit4Vji84aaze3AScCMb9GauR37F92jkiEFTz978kvkdsr9LXmY6da3BsNCqachF9vvxympbag",
  "key3": "2W7bHR7h6Qk86Cn8EhvwVMi4BsJF5uY6p3AXRkWsSPmucDSroTKC32RevZ38rJG7m2rHuHPyJq5d2UKhycGNEUcP",
  "key4": "5wMtDeUs6iMdUMvqeKgRNdCigyGjo8f1ytmp8XdSzXC3Xe6AFZ7rdNXKW6bAUE8W31FnVKoGGfYNPonf2WKRXxo9",
  "key5": "4pc3gxoWECYsLpr4mLZk3ssJFgywu4AfqQofBW6GmLrZU3p1NEvZuAWWbGJur79vMwFFfaxpQUD7tMiRxQipAU8a",
  "key6": "32twXz57FAEEptib4UMADi5NgycLnEKSa7ii3s342VzSzgaHp4xRJCaKvYvmQFA9q7YtQR7mCXzBUigaDWWfNxTP",
  "key7": "qhSc2GEeHSeep1zaXB3iDv4wHvuDYruyqxXBBJK8puAdJavJKLosJkqEK7qudG85pwdNZFQX2s9os79JmzxNpzM",
  "key8": "YEahWeVGhDVuUT7EbAeHAtwd9eRY6ypkdSXuiroeRL28w4SDNvXzHNvRgMb2o7ea9fePEeZJKgV2c5FR2CBeKsZ",
  "key9": "5sDp375Hn2Fx6V9iA7vmrN866G77AsCbo3jWyrivy1DJPYKNPbfqHQATCbSdywbHvM2EA1z7T9SkQiRb3Z9vSfJx",
  "key10": "pjnURgiokD6DDfXVujdGQZ83GfxYXXY5XDD7KRknqpgUC3vdePJFBntcHF9Y5CGSDi7eiTsUtJDzSkcBQW5r6ZJ",
  "key11": "47MZ1MPeQmjPR3DNsavbaBQiSt7wVEWmXDDasYw5MvHjwLo3BVw8QpUby5nfARKFgAX2wK6LszrdgAXm3mE29j5S",
  "key12": "2Yfc4rKf3NbNdVX7SYUuJST2WMaVuT2ZHopWMLsc9UnndpKyB5yUF7Ep6wuq5HcSmx59p6c1uhD9qg2qnJwzvzTH",
  "key13": "2C3jpzZmrypyfccqtZmHejQZRwyTtco48B73vPKvGgvzRGVyshPPBcZirZVN8CM8p3fteHUgAjTEof7E79czo2ic",
  "key14": "FjYaE124qwHr6MEY8DKhbk9gTbPmwivaecosb2nsHCG1f63c2A2tZz4RCH4sJWSGaMqgm1ykTqzGhKgNPFNsiav",
  "key15": "3HhD16UKzeCkoMx3xw5EsepXLrfJFcML2pJt2CX4LETrTbZd1VeGF9mfRBV6aM5Zmk1PYUkEe2qC1ZfA7EKkesdx",
  "key16": "3Fmyg8HCmWVhPdj2Kevwwn2WrgLSw93XmuryNWzZRvSpPdHzgPQdXv5j39ECfN4nGWNbzwEbeRhMqEbozqkYWRii",
  "key17": "21bxT3en8syQanFjw3CDYePCitdX5NSGYZsoGeP8DbacGUFdFFdqkuYGt6LbdhNXttb1HLCRGUg63CL7TdTES3su",
  "key18": "3EZMEDYVX9S8W914E2tdNb8DUoVV8CQv7ajLN5cm7xFQVksiHD9iaKEcUJVSEskRBhAFhfQWUAxUQmG6gi3FW8CX",
  "key19": "x74HFzQpGhXoMAAjPen6aWPEFaaSNWn45QmocbXtoWdx62okUsBzJudS8vrvXupKo9GQgDgFa1cLFdTrknRocF4",
  "key20": "4hyUoR3BnWaYhKyNrSV9rXtuDmW1y6iyGPaMCFgjnepc2zKQyKdKMA2izdcgjhFTWiLb5kA87jCe74WLUaRK4Xwv",
  "key21": "3nL6x3J3prwr5Rnat6opBcJ6v4fNW4H38AxSPAVrzJ1UuywTUJGbWtFaydVNNi4XGK6cEzBLn3bVUGvHrH7TKJnS",
  "key22": "h6ScomUae2ZbiUtyHRQT77MGGRNSmZgu191BP6G3Qcy9vnavSiK5wT4z9greaM8xp53KwKRatG1FknHTLT3ag46",
  "key23": "2fJtiBLJybcigJAp6FF2CTvCNTSXXfFwzY64J9vmo88CgMjddYd5Tfdv4xHbLNNzZQJHZ7N2uPVyZqsNvbWndTMP",
  "key24": "4ZLnhMkU8NwcuQ6N1EWAr2JGsmQXgDr8J8WjYvBozDAbgHaHKUy6Jx8SfQ4Fw5CuArLuKbvpxWyfZGGVrj7mCzaR",
  "key25": "2rN9hs4UWbvaeTwNR9SKjJkH7dsPM35GY38dcGU8Jvumag2bpCEsEAzeV6vuzv9MDjR4Me4C59LNko8Qhs1EBnW1",
  "key26": "3Ln5cH8hD6qZcHoyBk5Wg8a5VMVFmP385GwH5RdLFVFVzUB28VRcdAXE8yX9i4rgGpgXqy2ih9K4x5icTK3FXZUH",
  "key27": "3wKWKdWLfUkwt2XgrdER6UpuoTJ2mX4b8bTaZdp4bUKW65TfzCpyH6oFvnPgoDQ9z3LJGi4wyoq5hChAeue8Uj93",
  "key28": "2jXoxeCkzw9uM8tbPmGshmqz4wNt7yMnaFHCw92HM5U8zkUkNtYLqR3YUkTcYEohS17LnS69N7hduLJ9UuRGpVau",
  "key29": "2c2FQ2kfEe5AnVyZ3vba4nrg81XVRNibseWbaM3nrPJt7Fu5R7277y9Rxh7tgnbR17v4bcrKWirykXYnHtAWYNpZ",
  "key30": "2eNM88XL1aPZ78eihggEmPK8EtsKd8pCEvKmk8dABsXDWcBLicgX6r4LSqz837gBDBN38AuSXLyrEuTd1WSqchyE",
  "key31": "GgYNnFAjxfHSpcC5qVSRUSrStvezMCj4X3goBDTfiBNGGGadTa2TyDnqATSUWMQM8k2V5z9t3Pcwncg1xpLqnGN",
  "key32": "xPtLsjaLbjehxabK6gdhVoZJnn4A5YTk5Zu5hJsoJziydTakN8HeVHyjrbZUubLYqj5Uu3hRiQLm6fi4L9pE6Fk",
  "key33": "4JvFMAmeRq8wositXYXf6ezdndHtAAnt9F8EgApyo3V7KRQYWadeCYEwyDSXhNXxVXHGUFPpnCRpwNQjmbEUnSF2",
  "key34": "2zuZzV3cXVujsohPBH7u4XgTP2sQYCs5Jkp8QPMeheXUSu7AVEPA3JK1nnhoSmDkH2LTEGu9v1nypTNi1t12cPTk",
  "key35": "5m1Ku2SP38DrrKXfGQQ6ZgNYnAcME4fMyWApsGFQv1NmhLqybvUtFtsVScN5o3aW7LG7EunS7dgGoyPGiyLv3SgQ",
  "key36": "3mA2kKeGXCPVnuhhRwcvso1vd4WNAoVnvo3VuQbz6bu7HrMxtkLg3ocpP1C6JEqZdsSfk2qwyT2LwtoLkmh4gKkC",
  "key37": "5HDsxfqnpKtvH7KGxA7PQQ7BzC2SRyYUdEcpSJffqSP8VKVHAGgwiUDR94TrMpjv8hJ2njsCVoMSBXMdd3qcVTEd",
  "key38": "4NU8EAs5TCDJuy6gfj573RSmVNxZLny35e3XuRxbN7EDWTK4SF4VxKpx6rc2w3w5Wu3Z87PkYiku95yFY7ouSTuM",
  "key39": "5snSGyMYEyxuhryjto6m7HGzhn9RJJg6v5iYaDyEozVndnCXHVyy8U9ymQWGGDv2YzhDFJVwhmnvpuGGRbbp6TQM"
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
