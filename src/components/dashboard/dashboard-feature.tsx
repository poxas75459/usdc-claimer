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
    "58iyn6Dpi9WufdhR2MXA1mcVs6jafWtsspiaT4XZk1nT6ajyKvvjhVg7WJhzkaapPG79S6ya3fFVfeby3YBdz4jA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYWPecFQusc4YmeFL3TY33sNSCnEE4xjaBhMdZppUkpSEnTkqidMXG9sfsR8ngPBPaKRxm2iF65X8mjtwJADqWc",
  "key1": "2JXAoTCar9F5Zu4s6rvnQCgR5wufV3KtBBzQRojqSynoAFodoErx9UfouuwQcuqMqGDNiJhmMp56kJjky44v3aYA",
  "key2": "Kfzsk52Fa2b9njhq42hoKD7fXhMj2Z8XzQYGSVq1puQS2LoV5rF5wxDf2KoWJNVYmEbjqr8qVpLfYfWyZCmerj5",
  "key3": "63pcWMak45uXfintAG2fA7cJzp4yLXrB7LPtHTFz8KPiWVprKZ2hk7ZwdM4m1459jNBeioH1g8uxJWiopKgqGUZG",
  "key4": "3VNFvRYwjQ1AKV4PcPDyjVbW3UHUmdGjYACvVo8bV9SH8KUXPNtH2jCozoYE56ewikALe4tPh52tc1zVrG1yM18F",
  "key5": "R5sDw42NGPca82rLqxbQis39HKrDgYMEAz32vckgTCTdC9HejfQLmXmznEynfgrBCJAQGTdG35Tw74kstmPaXWP",
  "key6": "3L55FyzxzoLYxWELELSYwtgWKzVjK52Vi4w2CQFyhxdg4rzpEatQJuDArCxeWBznZdpLq7wGNcNLDEcCHifpAaK7",
  "key7": "WPJJqMb8c83sHgovCPvuuLEcQ5onjTpgcvdNi6wxubu1UqNBvFBjWMHLwGjJFfWBAkKxTwkzXQUnUA79xd8bVRn",
  "key8": "3ArcnXjikqKGWnvZHVHmpmF7HYKQ52unQNFiVHYPiPePmS3Ebc4gVjhKk9zggdZ8D2ME8k7BE2mkiLdXUfAyyYnk",
  "key9": "5ppCUt5pk437hLM4KJeFV2CQEYV3rcbFpwVuQgJZsBM9sZraFmEXEoZy86FGTnxMwfZ94g7pCifwF8YB8bEo9TuJ",
  "key10": "4TzMF8kvgEhqTYRTihmgUp72LJ6qcKirWjxVkXCVMrZGRuJuZwujXZQyJTC4VQ3FsvKEy1FFD1NGjRn2Z5QFumiw",
  "key11": "5khf2bBq5uJrch9wFNiWEQ7WCFzqPovyLmCstBaNyMuMSxHQxKppv6yDWR4rYcNAps7LjCHtWkitLVpaU311oeWV",
  "key12": "3wK8VYQ9KdkemjE3She8CLtkw9kBcqDTT3eWs2Y3Z2RKYwPQrrzaLiYcq6F3VCXHLanWc2yC2HzUiJ8D5N8qha4A",
  "key13": "4oAYFjW6r2b3bfhDaSVB3xpXJ2timQHtLPjhN2o1KUn1kJr11ZW9BGSCsLbvpHJyhNXAbVr4EEG9YYbo2HrqeK3q",
  "key14": "63ArWpAEUsisiqQRknPAxTX4xHNk4WDG6fBd2NaPL7dQooRi42u3eDfmJg1TCjae3bSAjk9HnG6v4PJQAt9oYKLF",
  "key15": "8W1AFup284zwk1zBzadfkyG4KgFQuRdfc3owkzXrEsbE1YMg1uA7JopuVWxaXAr6foMFXoRxthdPNhSu8wvNwf4",
  "key16": "3XqGREHvmzfVGz53uiqdUEPZhLXmexnTVdWbWsksm6Z531NdAFtNqf9prEoTVC1NCJfhvQ1aUBFscSaHq4C65BFK",
  "key17": "3gvajzhhytkA5ndUGDryqJYEyVPQXbfT97aFXHa9e91FATuT9yguABYe7jknoUkj98aLLan8aS8Jgk7QcHmjxKZG",
  "key18": "UF7KioKqwMzwDyy41xk5SisZMYBpFFMxSExtEwbVm6dmqKCzbkZK1oWwLeGPqb9ikoMd1ZEHA9La3WQKJYeDrnJ",
  "key19": "4mqSdS7Z96YapVgHDeib3gEspbZ4BHvp1uM1cbmJSfwVKn7q2i98E6vsFpYb64xT6km8K1adGGR6LEpYNEgDNBU8",
  "key20": "2aR8ZfLhzbLkELXRoExiKspCbrD5pSNQtWJex2LCnNpNQMoi7YgGwa1TM6jYLnuPEDuoumTZ19Sp1qbgkkU2GRn",
  "key21": "56aLv87BhMb2VcsdbEjtdSUEtpdeuAo9VcYRApqEforwFpA8uTRqJ1jK3QEhrE2b3tF7baxgRZPYpLRi5imXjnM",
  "key22": "jX956TJqsEHsdjGE3p6cCA3TKVzZcHBbyzQHfn5sbCwRwybQTnwoZ5LFnDessoE5oFWQvSv5R8gjDEUWQRaAuHh",
  "key23": "2xLm5TV9enYh4m1XwqbMcGqhzXUFwKobMB8XbvWPeZUYSb8G486wfgkHJXHB1tveWS8vDS1HM1y6LroBWdQEMSzJ",
  "key24": "5BC1aLbfx5P3NMPGbk8rTNJHpCVrbfN6wtNUN3pGW4EJ1qT7fAuAx68Zm9TQwEDcJRjQ6MNzVpBjfZcm2GoW6KT7",
  "key25": "4R3xNfydJGjYkSi9HkbVgVzUK5j9ntbBjX6kbk6DUxoD1zjhvCJVD4P3MJTjJEudmA5EMoCSBP3HNstMQ85Hf7fU",
  "key26": "HuK6MuMz9gFANzQAVc9mD4WJynaSiHjyrmztYYRsSHqH9D9LUkhVyN3tLmpDWyuFwLDjDr6H4HnFS1jfdFYrhL7"
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
