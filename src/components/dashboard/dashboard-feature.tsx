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
    "2cLpkQBqrtqKhjT8srQKyyiaCFnidfFU5RshthQqHsm4XxofdZQX5CGoi3GRsiXVUHyPdYtEEBNbeB73W451jKnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48j3VLVg6hN3W9LwwVdNEWQa7enGtKxzDQfmJrzo1m5VSXSc1xq6havADF4QMpM27yLry3qkSLDsBL73mD838ezq",
  "key1": "w8jpgEfQgXcQ8XC7q4RgT6qxUGyg9WXB3oUgcJZjQZcNSyzp79BjpPYrZAoX1S32Co6vEUA8qZf9M7HYJh85u7J",
  "key2": "2nXNvyhqMTo8ZYcj9yARGKvugS4NFaMzA91wj3WLqB2sPLc4p6WiDfhkPRr11BGSsjqz7deV12mfPgrcnLix2Grm",
  "key3": "3cnmtujzeaztwVpqZ1Bi7sdQhqc2pMHoR6NKjfz1upHUjeMUyiTAvzz2ncvVZYk5LfPLd9rjpYzz5wHWJMwxVH5h",
  "key4": "4z2541kUMdLH1XyaaSisqx6zvqrAuDUqAtPRc2XeYRXRtXZKpCPP49RremsvWAydDCjDQPZUz4ZL4YY3N7RC6QzK",
  "key5": "3VaecPgKtQ9h9CJDHYcHLfGLs5xj99dWDuL11ijbRBbbP6Dpv53DFtKB7gDgV3p2LDWXd9X7m7HGXeDtNpprAzLZ",
  "key6": "3XvruzFekxMTaFWozFVmpJzm6xuEJZRVyNMKAeP1GbjqnejuEwzEPmnbUn8UwY7og29zqk3MFiGQ3fdxuoA1AzFH",
  "key7": "5q3Mn39coF7YbXYLGHw6e2bCzangoogERLX5gWyfBkgfAkuiVrTBRqMd4VmnKeakRWG5LbnL6gWVFCC86qx6SzXN",
  "key8": "jnDRP2kJQzrkr1axpwBYGPheg2xzogZ8HkbZhWytCHDT3ByNo87vRupY9uufpUmxJm745jkSUZ4WWdKnpRp4mDi",
  "key9": "2NouSjnrboLnhhshipfpw9nTfN4pxBD9Hu6zRV3FAxPN1RkL6S7hLKE83Mai9MKLxuEQPC49JuYqhjjRFVbAFoCn",
  "key10": "5ccAevMVsf5MVCeZV9ySLQzQVPvoqHPFr6ce5141Xbq3x4vYcauwWbnzmzvhUw5n3qeuNtMKXY4KVqQv7a2KBFNr",
  "key11": "2kf4p8pHGbbXbDw29woZbuzNF7ByYyqqEyC58NGL5qwrjayMPTue9gaTm7DVpBUUNaQQyqyfComjW8TFgYPiAnjt",
  "key12": "5gyZQdJpq7BXBXZ5QEpGvzQDgEk4n4c13tuQf1J5WE9Yg3ug3Z8723DJe6y6TZKTYYDG2K6BHUCviR1McKeibrWB",
  "key13": "pnBPv42SHByhp8UJ2C8QJtt9K7detr3zGFbJGCNK54hHDT6L72SFAPGmuF1M7YXjVpc4RKciN4yPaEseDG9mUbh",
  "key14": "NSRNHrbGJH9vpm87LHh3EFHzinHCGZYVTP2QFC1Fi53qsDzcrphYBVg1K1e8ot29LuPoqFfzDeDryshzf6KCKaz",
  "key15": "2xmoYHD4jAS3ZphKyc1L5RLJZeNjiRdp2LwjnNBZzBh58PwYFDEMF31UntQZvP5HLnWcsCQ1cVVR1KiKw5TGNyML",
  "key16": "2ZNpe3L3Rc8MR4jZng5BoFWn7B5AhihT2pfTxxy5pCb7tWeoYQa6et452uxTooDaVAuBUtkvuvo3ogJuBqVcAJLf",
  "key17": "3RWqS7iPvbnzdspfCNsJniiktxpJbGaCy5tEzRdr7TYQ1n9pGgmzoTAaLkcYphe8y8GKjgFDvVvwe2URtdULWqqN",
  "key18": "5pZLZvdkU3MVmmzn8uiLvmHH4viFtyScQ4feyDHGy2tTZosLamgDy1AdwdmNpR5pjfsZaYizPopdf4hPjP4b4vpE",
  "key19": "3dmmaYb3VtVjgUtZmvmbZgFSazkJyFZBJqEHxVxuD8KrMiAtXLUJ6wgU746GopNoMRyydGtVynSQgcHt4mUpSiCJ",
  "key20": "3uJW59FKnoxpjZgEQ5MCeTvxN3EDWsDZeZzzCy12Z9JQYZMhprXE7ZBA5MHfteBEB8iwA2NPUVwyWDiNYeJ1zDgA",
  "key21": "5TBRuGxo2jdSsjpyeHvd58MeWTpuZq2hypBT3oWgAQT3AS56DRo8WWrPvgzBdAcCGX8EuLAaK4CYC4v7Mdz1CSqX",
  "key22": "QUKikiJmT1xxdkfRUNmmS3dW3aztjkHjo6ghuFajBPw5C2dfNuKQS8HMvVCQKRQJQxBoMnNUDeqo6vWEvCW7adQ",
  "key23": "3UuAyCnPt8f1TzvEYASyj5JumNZvy2znxG4MyvLJUGko655S5BMhpUzwrmZinhiwXEpAM91dGdW1ziYzn24hMf59",
  "key24": "n17xKgq5x39cH6LtSgz4YWXZAwkPN1j7MUVNFYT4HVg9f2ZSHho7ZgfYQNWWH3wfKiqySiNsGFBS58oXQDoXNzy",
  "key25": "3XxWwkDxcibhs7SFzzf98FTbvsgNmEAqU7ccEVN7L2BjE8Bi6aycRbURP3Dvx27dfbuZEfBBwXg7QhQ4pjBbVry4",
  "key26": "4G95FHyEZi3scfVi8w3h3v6rummitopiyijJNsYczyGBWWEVtLZ787KrLZDCqbaetNTrq3tTaxyy3TAdvknkvcVn",
  "key27": "5bGUPfXpKyiYD2EV2gasYVnKMG1hft31jQeMBoF1P47psohn1e22RxDRprKvKNcM8TPqxZHV7AsY6a9rSC72q6rm",
  "key28": "2XVtpUw2qycoUweCDAcbh3GAiyZSLisvdfEpDaGEYF5HYE426b5MccAa3S9pyQgK5YpqeQVDkEFP5C3S3XPJiVoX",
  "key29": "4uQdeQt4CQZJtAmufHkfYzbQEYmpbHDgbRLpdDipxbkD4E9WD8jqjQaLcKWrg1fR6xayXgrEJX6sEiUWzYxJ3agR",
  "key30": "2wQpbGChTUtCqSy3NZh9e1EGiVzmqgH2A6uhCuU1y18MkVr8VzTvyLPgX7VU8FGtsWewGycqQnUCGprMwZrHmrs2",
  "key31": "tKKEz9XAcwNmDGhftLUPrFFX5osUNVe3kGpeoGr9sgiJGWa4Nf7paHFW8FZH8nKHzyaF28EdLmwMCH2KQgYbw9U",
  "key32": "5fE18CRBmXMYBify5hScBbvfwr8vWkMwEVteS9tuaQ3FUiUdc3gJboVnH3sDY6LYijyyDaPQKKaYJdLGYoTTzHc7",
  "key33": "2xDYt2XHmLRVYmrrP1iePWfDwYxJ6g9aEWRJn65ygHY15HQF8J5eb6fRMirLyUF8FwbnHvGrh2WJoDFsrE8N12Xg",
  "key34": "59VYHNsvi6VE3Ff3KiwvMQ2gbPwXxb6w9dJK9s2uPWwBuuorTXDHZfgTSGKnkxWqVtA9h49xDwnWgwB24BQ4eGdV",
  "key35": "XXoLcGvBjUPoL2NzKSPJFr2keN4bEsp6JZH4CF2gioMBPHZJTkKUF1TrS86bHjt3e5fLPU5qcwLTQL8L3DD7LTb",
  "key36": "Rvf5KugK6oo9WCgh3ijhBDdXXnnHMsdoJoVi7krmASKoL6bUqG6UqPaD4LmQKTQrEVgwqiE9KHvaGQThyDo1jW9",
  "key37": "c5Yhr37RLrp3KWZWWJ5L7bJ1xb7wizUNEwfZ7C5pKdG7rCXxeifz98q6LMS8tgEm2daFGiiVgoyJNFoENbrawF4",
  "key38": "33Q6ockT3SZsUmNcEbJhN2bJdDB72CikCL3c5DmvnN5de2KjLFF5KKVG3MkBoTHgwLNXPJmK5kT3ucmyo5HPPtvt"
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
