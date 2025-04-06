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
    "5GtSWRUiwfShtf92q3RQ5iBonoQqPbXLZLFEQtVzbdgrN2o3kryotKQWzrg8o1oJ9XAsNLtxHXqiQNpJ7hnKM3Dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AuBvtnDyk6NjJKLoNj2RU9XEu6RUvycfqGJZeixD31cTuTZ5reFhj5krN6WKiHGSVUzKQ5fp8dg8HSMaexykp74",
  "key1": "39qHGdH1sPnSd1W6AkHi8rC4wk5C9t9u2j9jWr662ptUcdFcVmp7Ser1KeSdgsn79gKCJnRNAMm4m7pa5nnrgAm1",
  "key2": "22zL4rguFGv61gyQdqcnSYrRHkg3o8zafov7SbxL2Tug7sWvEdNnEqHP3zGTnxY19144s78PGRDSeKxKA7N5qVEa",
  "key3": "3P9CRMZVs8fmztP8qGo2vYmVsRkDfDSryxzdnhnEzrST3Jj6JhATsDiK4Bzw1uGr1DMrW7nzVWJRx3SrCfdyENMu",
  "key4": "5Xrv2Qio3fo4P9N6Fhg33yNGQ75ne4xsTVvnT86C3H9RRr5nEP5nyN16QxdDipV8H8eh6A3nFSrXVP9kXyFyxn8Z",
  "key5": "KPR4sSvMztF32LQUcc69Z71WenMV1VrJRfT4njUdi23rdhEm46PPyHar4vn4EuY9vB9f84GEVgMeXcUQLh4KZh7",
  "key6": "3whTZ4n6Qcknxrkyv4L5v7kSEedRD4Md78nSpY2km1XBA6rqV1Q4F87MiajTPfCbkyZsv38izsWuGP4SvbbgC4n7",
  "key7": "2tMZCm1dRzoSHdx3J4uWQvn1FNMM284gJNc6smcZcqg5UUWQp633GkxyQjRqunPyJ8sXAT5tHWwuTqeWw3ZJGi4k",
  "key8": "4DvtegkU5L6qv6nWMdBaDqv2DpUAg45cpKeribp4scjpCPVG1k1JvQyKxw5CqVSnQsNvZPNFSpf3ES27YVcM1x1s",
  "key9": "47R4mUYYQADVe97xZtqJpAEB9NFiixzZytQGG2NCbTX7NcujtZEh2dnKXHttq6FEBButxRWU1e7xQJGARDtBRU1i",
  "key10": "5JbNQtL3EXFKqYrNkA7VLgLXKbeFGRBmB44wgBJ7acanZs3cVR6YxqnYszx7QuZRfkSmcpyAvTc5SQV3CZd4E24B",
  "key11": "3jYmytrLEuyrp99tQxRCkibRiihU1m7o7NTJv1oGBR3wCio72FGDSeMppoQAMWda2jk2A86HxoCsNRRUt1cJqDyr",
  "key12": "emSMTWhsBii3hZZSdBJzYUsLKpdv68Y5KaSWjuzZjZfPCGU6obA17V8McjsNaZR1WZ8zk6zB9pbF92Ef87j4TxL",
  "key13": "5Spr55Z5hKXq6ExqeBbbjcBX3gpHdJbiNAgsnbHpVLhxJhygMd4A6LcRWKdnwWeE2E4hXQJp7u3zmKbs5529R6CY",
  "key14": "2bBbfMAKBqAPDS99N2Ac7eSNW4CLXfFzWkauBMoFaT8QHdpXBGQnFG1NnCRaW4SC97NP9sQsfySSNnaEGcCCeBvm",
  "key15": "URcu4qqv9k92T7KZT19cXQEiEdYL15xybPFQ3LXeALGrjd9dhstAbjfhYBVN6sGRRkNfi4GUddWt2UUaXeqQ6eR",
  "key16": "5DhsHgTssEHKAkBhbLPDgGR1VGBXb6SiTj6Nib1h1iJK7xLcWYTW7bkA3mioTQL35dLqRRNJFC7QoaR1mLSfAipT",
  "key17": "4MCBDpasJ3EBc6XXJ5tuWHapcPr6fwhwNi7vgrcJsHs15aHBXTHWJsDrARiLsZMkWUTwrsZijy2nDpveLxEE8BAa",
  "key18": "4mgc2HjyYTCjaKCbVDAJfNCe847VmPai1C3FR9Ch3DDxSPtcwUkadK5PGmyCPjJ2RXm6RHB8mnT44RV1Z6JrK7fM",
  "key19": "36Qtw4GcAjSYUeZJ21ZFsh13Nm165h9T5iMYhzDCynasDJzVz84AgxV7J1zesNjgGcUdVXGbSgtftjRTzDGbKMuj",
  "key20": "MbwyT4LqkznQmt6dmwV4hNj8sEWJ9788795Ms8KHUuU9Pj8hUoi6NU81R242aWgQzbT4Pbkh6nMczAf5hv3bx3c",
  "key21": "4TsApd9hcuH6mgyFyTsXLFGiLLChU7d75RXoYXgqVQ9NjVnCtMUMtyeVQqrw3yCbVLxwHgWe5jivTJKq9xJ1Mavr",
  "key22": "3kWXQM8L51LUSgMZa6eCDpqXTe7kT8vnL5QYWRR5MQqR16P2f2pnXugQN7c1oURBdddaTcAukF3A7rPoZnZR5SYK",
  "key23": "3x8DMwVWAZkxatePwPMnwx8qzWgVWkYcdfK9c149ndRoeiuk2MXCWTe6viN9fcQSVUhwi3qhpYWqPPwNa5LYawan",
  "key24": "F6JUBk3Fmr3c65XFDgvUTZEW7eV62GwvpYZjxenGHYqoDyVJw3gbPusvbjZGQ35HdTZaENGHSmRn8DGGkfmiHJk",
  "key25": "VgiGP2umbnDAM2UiVAiJVA3MysrpowBrr4HHdkmEn3rQd5YF42tyR2x2fsmcLZQTQzmn6ad9aX351PBzZN55ULa",
  "key26": "23CXVxth2U7ApcvHLqPG24n9FmWrLGJgsid9SG2LebQvY6AuaxaoRYCe24pFoRZRkSsL5R2daLm5nP37Lf7Y7fqu",
  "key27": "2BFySVEu8S8wcasWnBqRVbfbAxYHXqjLhjv3kHzCG6Tqs8Zn18XQuQk7kSpt64iW7ERUq8yNWorRJEZNcEdMNoT8",
  "key28": "59u5EbJJVBGA77g5ADt1THaXELZjPRni3ndiNcppF9i2dErWRdzBmt8qGyz2Tz73Kx9oC4L977QTvBvVdbB7PKr4",
  "key29": "3fWj8kENT2pjwM7aDLhwSPfgjGCLGTxX7hDiMx4Y2TQZ8QN1Teohns9wGhXCSuGy78ivpJEhSjr2Uz2R38ihNym5",
  "key30": "5aR2Eg3Mg1BJRvESqTPAvZ1Ry4sgE8CwAGNu8hY1LykZrcqFgLtPkgF8CEErtLTXGWNqLYfXZUDjDkMtuuTd2mad",
  "key31": "4fxa9o13rma5JvmXL7HkavJrKVLmsnYqVpk3Cv3teejHpQ14oLs5umn45oQMctpsr2REyq29f8FMvRWnV2SGx4jh",
  "key32": "WnCHJCAmByiG3mSsV5NRFS1ja8dgkBoLTNn6Ts1vpYrmUU6D8jyGkmqqXPGVV3WAo4jfnJpaKaGuNWz43a6VyqM",
  "key33": "38WLbasNKTjTKRCszu6XPCrbGZymq6gXuqtZ3Sx8usGGLitn9EH1HygGJjavhzNoMuBMN5K7Py4C2e1YCUHWdDe9",
  "key34": "3ytMU1nn5zbwGmmTcerJyBtQLd3smuAjthXSwbV46WT4NNkHWFKUAy2P3F7VvxonP1ggRQ3uL5fxx3Q96tfTdfQm",
  "key35": "5AvG5tLXu2fcDG9atjanjibjiXhNLqtoVfDtyFXoZBQ9vQfaYZdvVyNxD7KwrrPMYn7CFvmTXk7BJs2baUtav5S3",
  "key36": "BUBPmBKBi8T2b3TYHzw7gqxanH6jAkCPGkoWBpLwwJp4tD85FKYNKufii4uvhm194RmCgA6uVXAyj1JWk5g6VG9",
  "key37": "2ysDxE4ARR2F89aobSySfzxs5LwgA1Y4mX44J12PkujYLyfJn5kPbRebCk21VQuLS8bo7SdVghhm8r1MDSvh7SE4",
  "key38": "3pNgdXf3JBeucZxeVUspYDtyLPT2Bgx1SJwghahG3ZTLNaxSdE1otGLb4RDK2WMNwQLotRcRfSKwk1caWMtfC5n8",
  "key39": "51ic32J5FoNFTfGXak4z68xK8DBFy6zn4jkh1pnmWMUPirUyKNFCkkmJxCszkqdPw6xCc8DWjjM7f98KHv1YF6Dv",
  "key40": "5mbNxAqatc6fdNE1N5EYcM3ShqoWqvMZYBtknn894ezCTYKz3anUp6Yt3jFJhr3kKx1zRcHf6w35fBqJVwh1niCo",
  "key41": "b2QQJ6fqx8MG7qkZuBUPjNPsGfFQKTsQ3uzX9Ub5WrUpYpFw1RauR2yUq2cmF3Uk7QD1JAFYM3dEznrT2fWY9EG",
  "key42": "5J4bTQ3nGSNL6pY1ApoQkpPTASR97ZKSZzUj6idPTEwAAripycHBbijqmQ8QQimjqAG8skeKeDGBNqQMXaozTDPw",
  "key43": "CpubRWiBKc9n8iVi8RYMjoLhYbFpUFDx5rdwbQbwbAgThKbB1XSgmDk3CMhBdqFAuiUTpQRo9wKB9N9Tot3xCGQ",
  "key44": "5rmdZU9XafZia2dtNqze7jrNfHGCfD2XtCspYGkqLkjaBhioA6NEMJHjYJu7fKNxPEJUdbmYJ1WppCSKzcKvbgSV",
  "key45": "91G81Pt7T7v8UazsFnhSnrXWxXQSAFSGLnuRAzyp29givDRJ7ceKdeszPV5PfEXqAZifUF7axzCsyVygrYrY3PF",
  "key46": "2RPL3jB9w7YiCeJPHoqV56h85UVnMbeZPj94sqJt9ku2H5SvVUdPMoaNw3TexbChKdE4fWtyJuR1jdvf4RGtc6U",
  "key47": "5rGoyRfMKY4k9LgP19D5cLHa3dN2oLuHYHoL8qtV4sYVPz4fkqJmYv4pwaQqc8Y3cJ1p6fMnBqZPrSNXXXxFNLkt",
  "key48": "4HgACpSBuMtCcTi54hcALgWNVWeiBLhtnawM9J1pTRRF6APnkhRvrgDK3DQd1U9QktTLDQnaMznHkFd3SiXaFxAc"
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
