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
    "rvG8YSzAxnXfT5fHF9acTkehtCKBYn9muDE2tRJfMPerffmmLHq32YfeZeKNgKsWc5dU8mjSUWD4yLanw6hd7M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9CmD95CMhshsxtszEn11sEBUheMXEw6g1v5YJpxGBk5zy7oT4LuTogGH4up1Me712czfiw98LckYzGJc9yD9eu",
  "key1": "ueSPfj655GwFySg4zQxkthyL4X524L7YpC84U5Tz6GGDG2zGv6b1psr4e9gKtoMUAi1ogTB2yfH1tHjYN72jdxM",
  "key2": "57cirP79GZnhJHtLwkgvoH47SdoeYLow52TQ47MiXxbah2CiGgHmAHan3JHPQnsKBH33otgRfHyMwPkkiE3WVgZX",
  "key3": "47rrc6m8viQru6yaHP1STG894TWaYmkJMrCn4P8hVGooSrCYQ1t9g73oUHE4RBysZtjWkqfaYBHWesKgLJUkYcQN",
  "key4": "5D32jzyH9mzcce35noMkTMTPTMJt6PGp6q3LnZHjugV3Pjv3rEGP1YxBt24ZsYVkhc76Sa7SGMKUYSnchjwZovfC",
  "key5": "RTuViZ9REqr5uRf5yQDyw8oX6USQt7eV2HXjYTBDEgb3WQxaJ98NjRdpZAPrbKouWtwijtL3hu17GDfv13MDHCu",
  "key6": "4dzAiKZYoG84W9AZSCs15GEecGpDzFPFbYuHuT5Rb4nWTe3WGURBE6SNdGxDN6pVSjBQkWTCJ2R6p358A8QC6RjT",
  "key7": "KjpHKKWZ1SGmvpjhPeUVygCoCo4xwnj2BTRah3QuhgKCFEuV3pgBwokfpriZou3qo2QvJbjtaZ2g22UeTf15mJN",
  "key8": "5fSxqd5bxFLpgGTv5D1NKTSnmHRdhFX645PQx5Ukbqeaza1RaP4JTDVkfczS9YZLXdXPJhmascZCN7rRJ3BV9nCs",
  "key9": "6pAVgcGmR2SRN18zVg1Sr8i6CFkrwyyKj28kuk36HPtFHjj5aCaFP64Sa1FQrAKh6pmos7Gr88TKNswJa97iXNH",
  "key10": "5BUHXE1r3hx6ixUQh16zMzKZ95HwUs9Hky6BD4PpvNQYaqFPFpGxeaQ3GqzY6bmkpJGSk4kt5NLSeXHPwqNMeU9B",
  "key11": "2PqAjsHsUyLbFmSHWuQDZXhRUxAGfAtDmZA9yTX3B5rxQz8PYtHn3ZXFKbdvPMkxJKkkpJtcjWyuTaAhJyESybYo",
  "key12": "33xf3xAzwfe5TumCNW7WCdUDgcSKwgGYL8cJWJNVtED4sEX8byuNp9qpGad4rMgnqPKQBrMhc5qKZ1m6VcVnhzew",
  "key13": "5WL8HMQDXAB2Suffgr5HkTYW4KFLAzbHmcfVAU7iRpdsmF7DSPRcLprX8vFD1U8DQEYvvUF5TfjvmfKZUiWQTLu9",
  "key14": "38RvcgojdRWwS7euUVkYjD5G27n9sfAcBhkfy6R5WS4unSWYvTFqVgzwCw5BufNfAEPZMwpHnq8GerEZFc7YnGby",
  "key15": "4EaCHydFjCRHTVLHgojteeL6SJjBDNc8ZCfgvv1Na4FbHCGwVPPq4rYSiFCafUcTpYNHR6rRQQEMvKTKo2neYXCx",
  "key16": "3CBBrGy5NjJbhsy8NF4Xxh5nWT2jVm4Pjwy5EiQizqeJFWQYanNipPvYeTeijmyy2RboFseWkbrCPrKKHtgSyhcS",
  "key17": "43k6mVyhj26ATNBmoAX5WJUh3jCjrihtRjQzxxuRP3TYkX8shMEVkKczw4C7FaAKHh3LranPjpmCZwmAFxVgoaz2",
  "key18": "2wGaGeP1Sg3eDX6YJBruY8aRMuHr5SzjqYzG46HoLFtfnNFi1J4FheTBhNqMXeL9M7Mb1poxSfA5JANAkouNnGUj",
  "key19": "3mz4bp4qnAuCcD9BAo7efqDFvLMNdcfCTTQ4Y1g6JPkAbGtniPNsD4KiV935VowDZeYa2Fa3NMFbmiPFCk4SQGGA",
  "key20": "51fpZC9bU8M54xnHEoJjBiDwkUyFstso5FoMmUpNvY4CTYkdouVq6gCtaUh1pme7eQ8of81jtyTEe4z3jDqVGavh",
  "key21": "pTdzRSPds6ZeBEGfg5hY2dSVEuPfv9L6x77G4q9dkvbxQqYoUKVK7qMNmB92JsPd76V4C2wJwQ4mMzJneoexayx",
  "key22": "4bxFGwkwuf6jLEcjG7mBt9WfcBNmsiuvmxJ7stcyszdE8ejLP7ieewmaG1ksy24CD8Cd1ZGxab3ca5BvxMb59ksP",
  "key23": "2VHsDUWCZ6W7acxTKMB3U4PHpw8j7NSWJ7Z3Wq7mdEGCmdZGXb4hdifpKV2vBJky8H9QJWFuaWKStS8FSB5GdSu",
  "key24": "GrXmbTbE1CXcMLxvGRwXFnwTSYfm4hq9FBpUQ3SYUhh1zSYLrxVscRFfUHu6T8hLdx2PbEd7QLNmVRB5UBjTWiB",
  "key25": "y1krQiTy298zDxxJ7NXSc2q8qPtDELasY58J7vnZpJW4GjaW7focBZDRahQXwrAK1Abz2iDazArchFDtYcovoVx",
  "key26": "4VT37obNbgJBcRJwy2Fv1dC3d9zvMyfEBHNc9ZjMNBpwBi6BgmGrfA94mr3vSwP8XkpytRdvMMbsYs48a8Xt9stz",
  "key27": "2DMo1vG5aAsTVKtVG9oUT35BigkDgDBUnJWNhMQFYqrCXrVwz85cVoZRy5resPh1kRBvRfiY3sCx6f3wvNXdWMqL",
  "key28": "3v7Zme1hKoZjWNbBSgqsMEefsrwQdmD1yMCEQsqjQNhXHdDAD3UDVgA4gXJPuRGJxxYEi3qVuLwisCCgynh5M5LF",
  "key29": "36NQfGjmbH4GmPZw1YxN9VrLGdtsUohAhKhNWxDfghQZZmfsyyLvCDtXVQkzTDx96NadL7YwdK8ifLroWnFMWgWN",
  "key30": "22eSfMcvneUgQj7WKVrzF7bHBQRVZGY2gFdJFLTkQgcxMNo68RFNMfiUz1ySJAiKWErXjDz3cgH8UR5CYVbuiGuC",
  "key31": "2NAu2XZVkdZRkGHAjq5dEgxSStSPBhtW9AhbHLVKuZEtQcZgiYZvh23HdnWzFvsVtoh74PrEYe2h3cqddkES5Rq4",
  "key32": "4bhHB2UWp3BVTduRmYUneNexeVwCvFLAayA8MgPtt7CXnGAXhtBy9V8AW4917cQESfksz78BYht6fcXS7KaELvYy",
  "key33": "3UYdSSgLDUwKMAAMuPpAjnL4G71QdjC3GGMR8hAKKwhZoL5Jz8g78rqmg1skf4WAQgCTw2HGjdfyB7nz9dAWzSuc",
  "key34": "5FRDMXvASYR3WyUwufT5SfwrtiHMWHQfV5BrrXbphefYueSvUbEe26q6DuvpY4moeE4oygv68UWxN8L2TEKeeSa6",
  "key35": "3o5hCUZ4XGBYn1rVKuk7gk5dVf8xyas2fTLYCKFiAX4nMav6hTSYvwgrokkXYoo9UJxqU5CvGsmztGhte1FaeFbK",
  "key36": "3tQuBjrfZYPUuyEjW3C6d4vFC39YCJiNj5TRA6jb6jAgxRxPbuRZ7x91EEsptt4us2yXsWCMhHjLb2H7xTuHeEHr",
  "key37": "38tLWYhamjS5AioAHmvmaZmJzwKNkbRJegReVzTDS1K55ABPWxLsxEHjdUmBKAeCoXYEG7jMM3hNSZGm6Fd77KKQ"
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
