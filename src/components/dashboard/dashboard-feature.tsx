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
    "5u74jSc9sqYMaXGPA9ZtSVgHrbhiZHwyLp7amvqqeC7ZZEw33qp7LiDDmdQxFXTPWToua47S24F3cfjwYhgMgQL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wPquhZNjYAcn32CJRFAgHpZm6bANeL3ds6Ry8wAx7H5bVqcCfRfRKjiVS9Y9U7cSeC7WDWNvfiEi4Ychbo2gTKX",
  "key1": "24ZNVs9TJ5ri2gnrfVPVREXnT5i7Dbr9TPEPuVehzxnpLjR8RaCDKG7BX5fVQyWVEqcGNQtFVmXwvS5NTrE5fhs1",
  "key2": "8eYJcXwTo9fnfKBWkJD48h1vTTB5xbCXewD2VCURdaHV3zndADBXwZDQQAY1BpRbThxBNgrDgLW3y9PWZKjPbcU",
  "key3": "arYBMNR5DFcc2jMB5Ac3c15WueEC3vL4G5qoYb2A78hQGZSn3vPwfXPjqeLndudj3L99w5HBWFuPAhHsXgsK1Pz",
  "key4": "wN1HsRvMDmBqvraJhvpDXC1wb6Tc911z8rzEJG8USkTDgSu2FFxu4xvb9Fr6hceEReztDnXm84UiryU3Qi8ju6t",
  "key5": "msEoYmUpeFWougP7vHzeDAtTYd9mj3zGjH3kLRbS5U7bQRwtK7TTwcW7e1RBmkVHNSoMPd47ieL1mW48ihShhTs",
  "key6": "5TTuVEvomKw3LA76d5CgWJUHawNA6q1ChviV6jhmPxbqNbuhV3R27JbxXEUx4UWT7wsv1PPNcPGyG8tVKtpJVC29",
  "key7": "thSHh83EqtBbo8Kx7VbarMVnJVwaH1jgTRiuBgHvLyg5eV1MrUBPCmjTBopTSEdB3dwgTMkjm3HxppJVeMgMBbi",
  "key8": "5ffDHv9mEWtNLW2EUGZXudkDJL6J4fYkc7KKGc1cUMK8eHDvS9WKazFFnDnKKHauN14UMytHJHvrZXdjy1GobKss",
  "key9": "3aw1FYifPRDcuFnbLbd1qJsKR8XNz8HqMM9mK2ykX2zNjPoCDxk5KmWESPuVCfWMyS3YyXH34N4U618zJmMFsYUi",
  "key10": "4Y4b2FH52KVojXmXHFB5jHemV6W4CxqEQGwb6RNQyuvKwqhgFQMcCxZQxgNpqD6hkizj1Tui42CpEvkKuP6gvGVP",
  "key11": "M8VkNzw7mvgL2b2Ue59PcAwENUr2um6aiSkHp1c6pNfXy5KQdVEH8Cpfyg6CoVdG9CANL6UzmrcpGSwoxvWXk2F",
  "key12": "5sfnuMTPcormKRusrjDu19RCMfv25tynsV5JhGL7RxnodybMy7zUJXzB9x3pKKo3Db7ZuL3kD88gDJxXd7hUHeht",
  "key13": "4jwQpLmVXSrx5hnyDqwLMvVZipJyRf2cottjRMpPuttd4513eg9uePwmoyZZxhe24pDgsdY2bbgxu9miHDMmzWus",
  "key14": "3TnWgiHAK5m94GfftLEFjoSyjLAfNyE7EjND84L8ztwqUjSVuVT2hz6NnuEz4YK1N3CJKd4sVyYaD7gqgyB9jREi",
  "key15": "2XaaeeoxmASAxDQtFNzbNMnwzTTyxsVp3ivSinN24eWJB572Cvfj4VCgTZQaUNsU694f1wCqDHprPrAnXZ6bKiZj",
  "key16": "4wSrv5nnxF5pAX7v83r5n9B8vZ9sC51768n9uQdpzyLVnbEQJ1rFtFFUDVkNWHjMKSC1z9GLPdQMuuhakYswaKN2",
  "key17": "3jgvrGoctMqqismnbHgdvoCWwWY76CTcMFdYfjW4nsKmHyAeY7J3dhjk8SJkeMwQSvSCrDMTJAiNg4ZGDtJnGwmK",
  "key18": "65Msi9tJifGsemgkcXqH4XzFitoFHm4QVn22nB5CDhQaU3ZPrUg6LGUZe9e7tiKgCjNf6mXrxW2vDkMi2KTcEWV7",
  "key19": "22uX6LkFcmdZVnTHygGUzijWMPiJT2M6FJsgyR71GULm6GgCDfhf5Tz5WoP2EvAQut5nXW9tsYms3PsMjf4YmGee",
  "key20": "59ApbnLE3qk4kjQALYS9Mre6pLhww4qF3vPeHvA5vygEEw3YbAy8f48yRfwHovyvjp1JhfKzX3fMpfjDAPpzjQ8a",
  "key21": "2mfLTjp6HpC2z4tg9ZZJvwyX3D3xdvZfW24BLLqBsTWANnRo3GmVRGUSMoEGeJdjQe9Hg9UagbairbGB5i9ZCeJb",
  "key22": "5mGyshv1PYT549rzfGoi1GS4om4Mao7tK5jJBDNhtutMbTukkAXBKFtLKf8aGTKwfEG8yVdrSpLsF6TSGr5ztsqr",
  "key23": "3Z6UoTYroM2E9UGomkLssMvQikvJtGk3U4LHBXGbj6XJXoDmgYfJEJ2mgdtRoSJD6v9ZMTdp7Sa58B5sYNSREp3C",
  "key24": "pHFiQWcpJrTqvJWtzV1evzBXFm6qC43wwhwFNApNmZvgLp4gQF7WVuZt4CcRvoH4hn5Hfg5zg4KYyHifGhiCWyH",
  "key25": "buSmse1zeFLv1VU47am3S7jA5hgagYEtuKRD6hNyYaSAqVwDdLa3uLBeVqcC5HSecTBGJSVhd3ezw4t1c4EnJcB",
  "key26": "3JoQgvMcMc34drCi1WitmRqBmi4senU9FHvY4cdMYVK5ask6Dbc3q41BHX4h1SWLMWoYPJijsBmhPNJjkxfjPGyM",
  "key27": "UKnsqZtzAys6gha246sHkf4HPKMyhCEpBUy8mHzyzU7Gf7wz5BjgydgEAj5Qwk2eQzqmbSWphVwkR4Cv17cCbDc",
  "key28": "4jpsF6frvpUZQm9zPETNQCPewgogSGD4y32if5LdWEovQMeGnBeugz4V3ic96izc6dQXVGpNEY3xceXsyxkhJyYB",
  "key29": "37HcWYQFm7qwakPhAymRLpLrpA6T6z7PzoZRiLPdBr1wF4r5usmkeKAfmNgrMYp72RtTkEU49zYJFSHwHNiZtpoN"
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
