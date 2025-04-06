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
    "4rVgXKf1WPGLVXWHDPJm425tBEpWdYzVBuAhwufjHX9yJhLNdgvPXAAKZgyA5AjqKCWkPXA8KeBHwVqfrfAvR26S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdw8MSqEwyeKuewte5TJY7ZRV3ApVbfc5Crq4X6kuE9dk7uRttamEqsMrsuVMaKHPzye6anPTEq1UeTYdrrKmy3",
  "key1": "3oRfsgDNZzV9trv9V94KY4DAXw6tsdUQrp9EFHeAxEhJ33FKw6T6MaQCQ1kmTDkKTbUp2V5UXazo5JbWEQJBEv7V",
  "key2": "5uQntq1BbA2suhnf6J9vR9GxKPD9yboiBjZm2RxZ4MMGrRzT8cKdUCtu6LkBu368FCPhQh1hs8LhQcouLnBbj9GZ",
  "key3": "58SeXMUd2QXxMCp12wE9SJvd4xGbiuemeWTEt6hRQJtV1QW96vKkv6V3HJbMnsbzKgmdXVu7h82RwfHVR4wYht3W",
  "key4": "5JhXKnSjs4L7rF3XdmYZJhWWNi9GWx8atLDVA5jdLT7VPMkN5ba4LJ9mAHrkYMxJhzf3JUc6EQDtNVL8xYr9CUoP",
  "key5": "3TBi7CeyxquAm6ExqshLAQsYNK4K8adfpADtG6ZYU7gd4W6DFok4GYbPDTQLJXd62TCqL4VSADPgWK2E6wcCFnsw",
  "key6": "44pMm9fn9M11oJwi6C4YTLKfS9Yaqx5nKGQNSAM7mEHad4H8CM7BpaDxxH2Cv9Swz32Mj8tynbWANAUxB9Hv6BzV",
  "key7": "3VQGkzChj1umK592YnwJ2D3gYTZomU2Q41EokWaTWv41ojr42qd51mXZHAThi7C57wZAGKm9Y9hnEcdTykKyiCDU",
  "key8": "aNAWJYK2q7FFSga4qtyRhJVAhAFuu6QPK8G7YXB8RdUD2JEjtj6KJqgssyDK31joh8QQ4nGaeHaLhBQ5DMtCbAM",
  "key9": "2t5XVoQwTVa4RdWAzehsj8oGVzxptorjja2Ld6TeuaLFjSz7QDFRbB9jqK6vjaA8eF5jXLu8tSThiEdF7UjnLsr9",
  "key10": "5gkyW6v2wSrnRv3X1xBeNcjBLaDC2S2QizLKBHGNtCwAtTYjbNr3eRgkj55FM4wwBUWVUbHYFjxMWU27PwKoY857",
  "key11": "5nd5LTS56ew7ezpkkoRKwr2rEC1p9eYvoTb9T9oEFNxsUq2Q3wuoMTGzX7Jk7zJwCEJcgYakqj2WK1dfhkVBxyS9",
  "key12": "32Yi6pLbQ1d2UpCNy5yavjPa5Jam2NmKThRdG9LyeguGtHvBSGBrfwTfUtCuEnroLNJAuQk4FEdTtPcrXgvqBsHa",
  "key13": "3P1oDJmfneHYmjBcgbnMzUPaFxYhBNTkpAhNxyThmauBcLTFaPUYPQtUWqNViQr1tFrgsQtLUdio3ZaCuEutTykN",
  "key14": "9gAzuhKV9u8R35gyFhEa7qJ6aNbTVhJp99ySvk7t46QmgQro7STVoEpZLHEEgEXgk6AwLYEMG8xwsyercAkcnRZ",
  "key15": "5uQTwcs9aYViGDekSDMLS5GKeSVxNNhp7AHRNhWxqYTWmYsg5CUXEL8SYRGqtrRfXFr4sZofNjzujtn1n85xVycr",
  "key16": "5AYeMGDXU1aKUx3kRPp6pcaZ2gXtdDFAyhjXWHsJkeXVQoKdCnZwu4uX8LDfB4GRiieeh6MZmTKMyFpTnRJjPbwT",
  "key17": "53H9J16WVLdUYgrSPpY7YBndNgTERHJ7z5syTG77aeHGJSk8t9EXQ61yC2mkuUPP2deHnXAs3ZtzzoBaM3jeK663",
  "key18": "2pqjdCjfUmVkU9Q4odQHxLTEiibbbf6UXSmDiiKM6i25aJyJ87hRPGHqyr2cAshi1ayin8s4TXqS9q7KgcpWz6Fd",
  "key19": "1t9sZe6LdtvTqKfEgbziTJoxpSxCzFx5LSvCXMV82rgpiLYip6Eqes8dS2zkAgQG815TGkoENiF48abUyun5UUn",
  "key20": "4vpXLZiVqtNQY7mE3d9ovKaD6YzsGsx6iNWkJLUE51TNTBTyTSN68WwbZ1pha1nyTF3uFneY6VMhkzbannzMLdj6",
  "key21": "4dFeWfCAMFT5HwwVP5itYX1mRbXd2wZyH55jSzbyUJCu7LAPg6uBbAEPbkPUFMNdHBWRDwUp5oGSqxSybpbQYozd",
  "key22": "2UBLow7QTSKPoHiSoFittkmAJNwZaNeyjtLbvwiPuoHWb7Kvg4jpT5HkGxgSqu7CGjNPE4nuMLBQR89vAa4rzhw3",
  "key23": "2WFdxFTE7sCEJMBvtNcmJRSLUTJBxSCMfRHKmD8YJaXDS9a2o7D8D6ujsqmsj11Hco4eLraK3EoWR1jNJXkpWoYx",
  "key24": "oV8feT2j1RGavG2Mn3LNRboYxQyhrPRoN6uiFh7VFKFZJSfbbCUrD8QdQuFEaCcvyLMCCHVRPznifaWRBMFZnxE",
  "key25": "ZLU5n4a231pPF2beqZDVH968RQjpgRj22XWD9vru11RhFYAzajNGdDkj1ubSDq5LbiMzyTANs515yRr6vvPzBey",
  "key26": "2w68sf2bsPTiYoHoMyA7y4s2CvNuRhRC7MrWBky5ZW7aqDhRXv59QMEnZ7RuwXtdsJB2TW8vwBJxbcgdHW5joSpS",
  "key27": "3xRCYuJR69CzTRjsnCrfe5MJUDoX57jrdxDPAD7fGwFg5BRT7yanmeKhpxWe2aYJv5M6HhfXBGSYditfDnX6wfFA",
  "key28": "2ZG8LNMXLQRLy3rwVzejyQqrpF9Gvfo1syktzu6psuRQZRsV8c8ARP9GLhUc55kSjKBT2A5Z1Gey1bhKzKZMD6nP",
  "key29": "5UJDkcJg4T45MHuTRK2uR6pBLQ8v8bBdHwBJrARxEoANvL4ZTfSUKmbrPgwuB5sn6CQ8XSLoQkfBZ3uLUmX1hcr8",
  "key30": "5FPM4o7uP9Pd37wouKvWt9f7wqH9Nx97TYHDHuYF7SacVNqoEjP6bFUcHqLabwbBqDQGM4ppwnHqnCwYbBC6LvJ7"
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
