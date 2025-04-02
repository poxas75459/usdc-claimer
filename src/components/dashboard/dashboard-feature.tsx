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
    "4gys8dbnjeJW9PZ6gZaAALkZuNoQQXDj69GcEYbynHN36g7SRUor6mkojgsh67kDBvuKCfkBHVYfwWzPe8c5XdKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48fxyY3kNku12BSrvnuuWRj8zUmwYsfnQN6rDpumrWB4kw5sETorcFF6RjVLVUCEeBuceK7NNJ6M3zKuswL5Z5Ja",
  "key1": "4C8AN2ayyS3GxP5zHXLgtQumtJ78LJ7a9iBASC6mZU5NRYu8MpEFVv14cTDyeNu77ysau9oyWj7E5Pb8igJs4aZU",
  "key2": "2HVc132Gqr84TucQYuoZip1ZaD7uDcNC3FBZAeXNx77EcgG2rxNPLYBXnRgeEbhJGvev4VEKv12gZBe5tmE7krtu",
  "key3": "3vW8KHhNGU85JYt6GockekYxAT1WbPpzsTTYw9CKAQgF9mpHAq2PJAz1e3FapnNcuf3HuQZdL39AZGU7uY1P3bnp",
  "key4": "3jy9fWSUjhRZ6GHB1aKfwAB9TtFs8wLYEqPgrDQEBysh2KSFg2YQ3DJrHgmGXgcvMU2Nyu5CgDuySrymeR37yUHK",
  "key5": "h9HP6CvQwxxSXAGfj6pZSaQa9SsSSJxu3uzQmw3rrw83pvGqfLLdckYHK73BYsFmTL4yTKqQp4kBHkQZwLBv5Mt",
  "key6": "5CdMEWQNMbqDj5ApyY6L9uR7JpmEZmtRotvV5nWUJDKSjjopXvcN3NhQheAhR5hApDq1ewCCnELaZhev5c8zPsUL",
  "key7": "5UM19D6xHqWtdm9aH58aRHZqdR9DMwYXJWNPvkL95z8WZpYxTu9qQCRkepq1yC6TYXZYAn1L5XUWTLWthYfx3hV8",
  "key8": "2Y18cpfhFDcT32Bh63NQhVL7N7atB9VabsyYkYBsoUcmHDyzuP8WVoGMvsx5sVw8X2yudhgADvhBThWLa2HrP9An",
  "key9": "5Lh5vhuGWSqNGLJuk6SxA9TApm4towJHwAAHQQCJEwy9xJ8oKJ7BcQKtLy6Q4fVfVbmmbupo2cASSYxQ2rGH3Ey4",
  "key10": "3dVEBHXXcadvXpouvEEGMrS6qX8nnRf5T4CidYsqKaBuMLcHmvq3EZ13NJ68jyewgRUuNJbyWPSPAMLcND8WhnsF",
  "key11": "2z5tmJs6rZ5iJ4p1Ypicpx1qVc2N6iRuGzaq9s4pz7fAU9hk8svqbGQuM16VynWXo6hYWQYnoRUuZtbucwuVnEcq",
  "key12": "2oX73TVnUtmM2sjBW8bPrzhZJ8gPcCfYFhu5Zpa9stnYmU9E1V31TMu7jY5xa4Ba53prVpdafyqK4ZzPYqWZCBAr",
  "key13": "5eejdbcoxzNoUBEAa3MZ5SzPMaXcjstEjUDxL5LjawjGS89RJz5pTtuQ4qTmSc5C27ctND8AWkvWMEGMrEAHycPF",
  "key14": "5px3aDMYKG1vuBJqVusgFhR5AVUJsMpUjYpS6dHR7hiDydfw3ZHzQTFFiFCNrq5gB1W9FZdJCAxH3WaoSrAvWqsc",
  "key15": "2fLQ5Z1AT4RAE5DUNvY2zmRLT4BHnvRhSJERfY4htive5SJAEtvmj9zLFw2J1W1oNwQdR3rQzA7EK8ciUDZBEBa7",
  "key16": "4p25p3pgjLWKnT3iLHdDQ8vZ3tknLHqK6Xz1X9xRQChy5gGaTrRqByiWwDbS4gfSkgtnMn18cTvFQhc6P1TEuYZp",
  "key17": "2sCaeEP43rcFH5Mq2WRD6UVtg86f2F4A9AGbMxt4V6Ztiyru8NXXGVHYsZnSR1uMmKvfdYSGK1VEybVzR2o5BmHq",
  "key18": "5MzPC1Z1kgy1PfJQpdJP7PHMvH2abLoSTe2w2Wm3bEafZmQ8X65GGygFQK2b9GYdedFNaoufuGhWN3YuVE1DiqLA",
  "key19": "4V1dNJXULBZ3wN8f1wbyiNc328oGVbsY7NauKqTMBgRJaFRGNXxYUZSXHyXKXGhYRsfdGERXQUaRCKeNxiADN7Yu",
  "key20": "SStBWgWwRYBKP14Cey51n36aqforZn1uMdVzdfhnoF1GDUUvvRnpzfDGJsiuKd9tX24toEMur1P81kGE752HRiy",
  "key21": "3sVN3ETwARn6m9AUvTz729HBpb5SknhPjKq2YhB2ksR8DUEycqpa1DYJnanP6dGCdLg1yNz32okYk5ZaxWbUGWkb",
  "key22": "5E4vQCe8VgAGXngu1gjmPBPguKJWPNXfdM8sUiutTQdKFVGwKZRcFCQYY7LEzZhL6viC7a3D3oSoZPdMt21WKepX",
  "key23": "3oj94nkw33L6w2ABuDV6DENtjXQEx2nZAQ4SraSJWqmUmgfdpER9nQ5hhCzY7KBW1JBPAaavPAf98DSMJueMz5gx",
  "key24": "2dRhNw2KadRGHWUWwtvRYAURGUTUCFAtyTjNq2FRQwkzdDxK5cmMJmsm4kyG1o92UJiAzfyxJFuwHGhCcX4gCVjg",
  "key25": "3HEAzQQnRmi17ZwbYSueYu3caWMicno6CsJvsQz9uDpXFCXAW9ZpBxLjCri9kLMRMBjSiPna12cYz36fcgScAJvT",
  "key26": "35k8T6nqpUiaGg5dTg4iMM1bnyEtLRZaqLRU5J8fYXLKAPHNMTj4sDtfhx9CTCsanbEUXLfvtUsj49RJdWDeGmE6",
  "key27": "X4Nw58E6WLye5YqExwU3xbwrFErW6RfsWSe4a7joTKFFzrs6XHoE7jiQaphTLas9RxhyqRQRkxWPJxmtxBJEtrK",
  "key28": "2G15QLHw8D4GLc6525bxn1L7z9LZXgQhsDDvjgjmZM1x6SQMTeo77EgMssVNCRTMqjbMudHoeXJ3cLDEU8vyUBBW",
  "key29": "4aG5jA6F4nCxH5Bq36S3qKpe9n16Ux9BXWvsckm2t4TvsJJsirPQewsAwScxw67kQt19hNvTtfs4AVYVi4xPxrc3",
  "key30": "4wuqc2mbQssBzFU33F7SCQJsaPVjPakUy2MuNUsW3Jjn8rpFYYXnGe5V86iv73cAt2gFrvQAs8gHPWC5oxadMcFp",
  "key31": "2wSDUKhe4cNPodDrZraZBqY6M8D9TffYbU4ekmsh6kv1hAm4ZnKAUNEpqeRbPD8JNsGQZV13K9Yr7QqeKYqa3itE",
  "key32": "yv5zzwF7HF8nmF2GXJRBdf636V17hHEi6N4Ndb3HYhsaW2veGhv5Jmi5NTFpdk75pkSvkXh7GznrEqZCAsqkQuL",
  "key33": "3U4FGiuVuGj3W9WsuKMRwcYbQBF4sArbpSwxPTvcZTgokoavE8KdmsWTy6fP1K1Sf65WMeqZ7FBJ36t6g5xK7Dae",
  "key34": "62U7Z9XMDhSzpRjFvTdcUpGjn83zddfzVJyzRsMfGULWiQUjxLDVEijnzuoNbQZby6xQ16QorwGD3aKQtPQtzGK8",
  "key35": "36H2qqfMcMi7YBLf96Rt7Czs2HsaU9DwvyVGEpoAaFew1vnYrLFmVUdf6xrK3JwG2mVQyU6rCSepqi8FazTrC8ZS",
  "key36": "3Sfukpd8i4WUrDLzkCVW2C1AArQqB39cpS6UFBBAL7JBwaS36u4PzMD4qtJ4evR1fuVAPkuCoErw93NAM9gtPp6W",
  "key37": "2XNTK6jM3npX4hCqVNPzUMW5UTTfnURVei526iY2cnAFs7xLQUgiVxVXp4FD2jghfoBjjCkZyryXw5wsoGrTDrfv",
  "key38": "58HoNATWGeJokxxmXQJBrYy37ZpEDMXsd8qrx4LDdwLygQwgdseGAhXfP8XmRfQuYhbPGYcvGZgeP3Ay476boqjW",
  "key39": "3u9bNxg77VX62wyvBksMphxgZtbDty56jtdooQ3qksXprFJ9buJjHHsx7MZHpFyM5LMkcocc2VHf66dvoRjYDaf5"
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
