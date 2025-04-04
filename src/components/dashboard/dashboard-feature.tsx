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
    "2smbHNutsqHP4JxBwNDaAnuV5AwY6GgKtV1SRt7CSpnYUDuFXqSPepFVpVKTaxaYCDp5KpxPrPgERyep8eDp6UsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rLacZmwR5ZAkqVyTBvPH1LNJFqjVUQouegse8rG1vWZAFfv8aoFTXQrwX1diVaopStJqveXnz5qzzHgPf6Ng3WE",
  "key1": "45kN5NuAPWTKHQt9cYBF6obHHEZb6CCprqFQzRVAVjcRRt3ZiW3MARnDFFYgAKmMpwhzyTJJvd8BKE2NQVpzTJj",
  "key2": "5vrpd58DhM1kK47hNcrLp6Wm5JD9BvgaxW1Ker6H4gLMbxD6Y4y4neL3dqymeATVJuP4sVCaZ9vh9QPd16wdW6Ti",
  "key3": "5nQwuauidWH1znqxdorJC3BU9QrTumo7jG9qJVABLtPwe4QXQtKGSfz81navBtih7Vf91J7eJSfUQsXbhLBEA5TH",
  "key4": "4jTus1sPk4mEt5pS9scDpDTZD1ag9aH5aDhhmSdygCzb5omiZgeuMkwcF58KY86bRDeCvrkmfUPKSv9pTfVQnuVs",
  "key5": "2zgz4jm2ybndbV2Myj4DoGdaNjYQxPVRUqav2KFF7UDqCijjXPbqP55UnsXVEBRTJkbUaPzeVfZHUcQW8z1ksaWN",
  "key6": "gCf73dfGDrqM7uW1iyQQmQ2Kry4Z9gsRN4YohUKkcaknvAC334ZMtV7oH13aVa64zM57ZZaNaTeD3zoKHT4M7bU",
  "key7": "3wrNLmaTSRmqDi7JLUddfHzUyJTWD9DKA1yTSdZ6W4D8i32ZP7pDsX5LWtLrBYdSdz2UrsYzWC3G58GNXtpUTE1a",
  "key8": "5Qepau5PDdE1LtTqBXVSuUPp5n49sWjLJiwbdqVubHWw5LfsSsVbCxEF71E1Y5tbq5N1xtMgMFaLGfzK3jzp3sB3",
  "key9": "4V9pLdj46FfEdePNvvacvD52D9qGvH9qv17PyUUFw55dFEiPUCEpziYsHMpJKWC75yucodWPgG9gjLTMN2sxoQ81",
  "key10": "38JhvN5wmVTfbhjX6Ht9HCxVwKLPxBHmd9iv9ChfzEv66AHLSR167HXaSe3sLx6Z9vdAPA6TpGFdeSohAPdADb6t",
  "key11": "5g6j25G7qE5vueqoaNna5xPZ51mL1e41AvmQ2jtD2GPbWkxdeL4tsnVxM24M2Z1Er4HUaVW87sz3PMq4DcaBMdQM",
  "key12": "ps7Jpvo7f8cBK1sm9C4tfTbBvXS7Fbphy4GDFinfQXHWaLtJmByJCxCh14ZnHMp6bv11Hf8jQ4dnUPmc8PKTXdK",
  "key13": "7jyME9ZiMKer5beXUYGEbJggU6F9PkubMRDgP8cNGaYYa1tahmJx5tqNK6YX56YNXR8Z8uJfWKvfEiqGAbd8Sd1",
  "key14": "2YBhgT7dpTZsNiNzqBu92PeCohwwmM3PGTb4YoDW9ojBKs7KP7ESccovNRxdUWpP77dRLkf6CcxdJpUeumdmxa7U",
  "key15": "4B6eNQaCe7DqcdpeGwLaMRXkurEfj95QW3uiYy3SBYJ8dr68U8CzJa1LLffqKtRN5EACZVvUM6naPfz6Kn31Xua7",
  "key16": "29VJcfXr4BuUqdtm1hV8ZfagnRzt5JryueJC1XgJRe8xEsBKcy7U3JZBcJg1xCeWRsS4y3CXkNAanpfixQFZ3H2D",
  "key17": "2ypvViFgfoAxBMPddfcwWnqceBrApFgquLcmhSkDwphdFm233ioV1hv1Wv6e9PYJVJpYvV2VoaYCuDdptnx53DGF",
  "key18": "3DYDJYpmUZXaSfjLQDfpLseGqwdBAdqnak59nCAihMX7dCNqHtEk2G5bDrJpxKrN8uS91GXZ6erBj8om2riJLZZv",
  "key19": "3gc8euYtZKQ5KynyXhDwBxgR2nyL8DSn96z7VZaLdWyRkXkS4kRR58RpG3BXRB6MqMz4czesyiYhWBmqq54CNcKy",
  "key20": "4kt8Dw3CSkU5n5ayy9YxHNTZi3yjUucVJgfs31PUFvCyWW6fr6zFYwkkrMuLm6McvG4MmMkR1z3MG3cPbzTg9jS9",
  "key21": "4kKF3s7eAP9uzMCisigWASLKsumdmsLXrCJFRwiZspx7CW8bZ29U7bcDToWkXwN2hPuYFFWHLhQCr7t65PDH3uxB",
  "key22": "4fMf187vcX6Hn3QBxVDahW6Sauk6aHy8HnsRWQQSKvYVrjohqfJHJNU6DSuJ148aNZ4Xz482c71gu7bb52QxTHXK",
  "key23": "2fSEzmfrQU3tfWJT4NYCF2zbrEEwnYxWoDtDFDEsB4zT9tDdtLm47d59udU7mU2j34fzQbtRNhBHudi7LLx3NNhJ",
  "key24": "4eFBGVfbntSAXDiRmDpwLnkDzmJQbP8fjqvPK8vaSAEs7gSSudh8FREeQdxsa3mxdrUKyDH5LiQ52yMV66XyvmE8",
  "key25": "5uEdGpmkVoXo7MKSZ1FwP8efXyTvfvRvhS9PmcfUibDHf2BRcrKEhqoqYmFS2yBv5vivMX5SYSAQeEXBvmaMLQDQ",
  "key26": "3tpHDeZ6Cv2zV1zzmKrRJfVntkh8uCZnuZ5KAh1xnXNsm82T1acRSKFPjyXRiLyYvrrpbaS7omQw2ztu2EHb9bN1",
  "key27": "5dFtsJjR98GkZtzaoHeDg5xLLb5UJTRjLsU5WhkQEfRQUp92oGBxCBD6mVTdtV79MXyKDTxVD8qKiCQEoAVP2z9g",
  "key28": "KUuD5THgaEaisM4nDaxNapKYfLczt2PinXQrv624X6JPf43WvbtqEGZ6BKZx31e8TA9EyAttC8utEVyA3SsbqsC",
  "key29": "4p915sdWM3jEJZRQUtxTPL1ZMyaRraVuQNZoMy3WygXKv8Uejf6E1F8HWfmFY7YuhpmYbtco9DfTsDDKMZonoKP",
  "key30": "5Ehfa3F7JQbBCahG1Cx8YqMxUEhbwmfAGNctooDdehLmNLHMrZ1boQfPqYvPK5iMF8yvUTN46qRw5F3MSekeFbuW",
  "key31": "4Esv3rbddSbEQ6nfHhDuxp9LhYhQFQYNq5hRHAYnGekkSUWw6g7UsSAF3CFd65aYo7X3HTRCidVU1YduMJgRPY6E",
  "key32": "366pUchAhP4pQZQuRankReTd4Av8bAsRhVheqTStKTVvbGpUVT4vuSiiyKqgR2vgZNGfu1VcPcMAK4XSo2peumpX",
  "key33": "59kEm2DoyTorXwv88M3jNFmFhs9C79TEFj1bPEzqA6UmJDKgiipqNA2TSKfntVxSqEFTytDokUM151wkKRL7diqk",
  "key34": "HsAenhhjJfG3vz6VLU1YUUJvfNVTGn8gELmbqtqBLFGLZPUcKyAiP1QCubJnSXQKjU8REe5UEd2pqWMys3DG9Q5",
  "key35": "5zseZzBt4e8Q7AYfQsATwzvg4D76wcGVRyTZJbXbYi2tjqrStv9t9w8NeUCzyr4WY94kGrwBkLddaU4Lt29c3VhE",
  "key36": "492fh4Hov9yPw9TYUnnbLgMM2YwDX8WvZmnAaKWhe36oBmgC2jNzgkGHER9TnjmKiVEiaPKNtLzV2iHguMWFTHZo",
  "key37": "3RVbDHRu5o7MManmzLRfYqYmKFEopZKqzPiYhjhKsU77q9GKAGWREZ6PTD7hye9f4BDVRGPGtN9VbgKk3n7UfoAi",
  "key38": "2BtHyEjUsxRoRmUzV9rK2WYowcsrzHptgTar7EkJRJ72nmbzKsVgBXAUeud4wGNY5g6EgWWPdL1BFiSu6dKkJvVM",
  "key39": "52Yhm9Acxodyas7BrtmN3332Ei1KcvsWxawC3QGzBYLL8kVNNyfyaRg5hmTixTQC6KcS3bz6mGfcy2BA28EKLMD3",
  "key40": "neEQgRPWHjadHmwhhmF9Nfza24ahpSnhtR5vc3eqcuyLPSXhuMDLZuBXpGEDQqDSe7nb6C6XzJts5VbxU7zo7Yj",
  "key41": "4trZysXQG2M3LLhvvE8r7riqokTwUZzz2NfgiLEXNS3nMFpiVSNZp55UVvSYZJer6E3vhczs88bx15gzScdnr4TQ",
  "key42": "4iPxPsVENDrj5XnCKkifia4XkTYacJcB6AX6Fk3UbCg7GcaiJoDEQUL3uFKngCTbi4M7tAJ2NdumxsnxnnfnZCaw",
  "key43": "3qqqZ437ZyDyX7LXod3oDNS35WnRNjkY7U9KvHKsCjdsVKf8dNBFTVoHcGkBHWaQSrVxxhjtXrvDt9aW8ZL1bguD",
  "key44": "3umRynXCTdPbV4VSS5qjtyPSLDYEb3yNgtnbDA9DwS2EdS5uTLVyU8BN68RTobZvkmR3tNztsTCjiWWCeBhEAjyV"
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
