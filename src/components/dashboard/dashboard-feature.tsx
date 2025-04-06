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
    "3WyFtGMyv8Zk2Z34b6eYBzyVYFb4kYGtTPtHyDHa2gVHWYowsdpqo2iW2bwRZViBKYXqEyi283oSUiMHVcus5w8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GyPh3hhfS93nPxhzSbQpiiuJrJZ3dRPdyVsUqX5CGkuNHnGJCA5bL4Xw6EkBRHuv72VVNmWN56uzb1dB72bgGzH",
  "key1": "5HfNcteF2zSyYskfsBuBwG2gG6JJ3XZzZE9guowUoEKi6qhsjJAdsksxjkRu39EHmCqctBxgDPHdy1r6XAoL8UR5",
  "key2": "295oW3eXLGA6JN7ELv5PEbvYoWWDZAg6wBdEASRZKgdEAyjr7nkSRtsa7Jc4UNWN2JYKXmK5uFPrAkakgBVKrH9m",
  "key3": "5XgxRNdEEuXsdBzy4EiLirtXqEg6ZAx81zpeLDA4jqjaRLYTnsETFWHxuWUVLP6R6VTJfrMfUp6Wrbf1z9UzXohq",
  "key4": "4dqS1nTTydmRvkNmNyDiy1svsSS5XVKg3BDMSMe11cn7Wo3hfCkp8fRvpDZcfV1QyHJpEzMSAxxyB6TFKwZ4Kb5Z",
  "key5": "4RjeVcCLzWgwpQjeCjAtvwzgEbtstY1uq6XvJEH5aPJf5uhSvXYnXbNmgvW8jENFM91haxk72oi4aejP2zfnHSU2",
  "key6": "2md27qAZW9DtPk8E6tRsJrwWUvD5vrjBjrpsoaFLvVtpfULA9bzBy4yhZfeRFjkF4yUarAHaawz3QTTCJmMfcvhW",
  "key7": "4uMyZgZ9ny6MPMw1hKGtw6Zh7vPy8QVaJ6kjGyCbcGbcmKsni8boMYddtL5EX9w4Cn1fnrF85ED1G7VEVTWpku8H",
  "key8": "2343Upu5QBzfF8NN38SCDi7KpsD3UFwnW2GzTjPpHYwXYk7mxMSKS2uMg1fmZ2rTk35cQANNmN4LRYY914zA6zL6",
  "key9": "82HTWUyTUWG74eP3ZcSRxXGY5rYqieKkYMdhdA7FFec5gkU9K9iLPnTQARjzqXDxckd29ivS6KB4DiVJ7RnVEXP",
  "key10": "2YuDD71ULhuA3qwWiBg6fwRwbmnmLyELtZpyGybX4DyCat4PfgNMXWwp98YXZmoyTxQHwY6jC7GSK8FEF4WyHWfw",
  "key11": "2vAPWAJRCFj64qAoQDAacPKBNZQGzAUN1Nkd4oZTWoTE6jppP1SLjJcks22hMeExS4akSqErBi4Em1gTZAFHNxmN",
  "key12": "6ZvaiuA51gB79UuS1mzc8dmeYwtnQuViLTRihRkaKYv2vpNbndgL5M4b1YtbG2hDH29vt6H4BziNnrGKBC8NPVT",
  "key13": "5tPF6Jtgyx7VEbS2asCoG4BPTk7zu29o3AyrDVZ5wLXznurkk8EigpD4aS5F7w84wMiERSv5LyHgR6RdFerwwVHL",
  "key14": "4ftFnno8YaZoEYzwkJayyqotgNGu7WWLDiQEXH6DuUYMtdn2383Rph9dBebscdY694gR8xENPUWPgfmEDKt9LJxH",
  "key15": "PfdGfbKqebkeYDd1RMU346932MbELyyK9jxxcQCMsi1YNbhbaYBrh999woS8P1w8WdhAb2PXmwuwoqvNssXGEjE",
  "key16": "4F5oLSn3TBBmyx5DidJYXPrdaPetCn7f7anwDQ1ee8YoZv7yJiNzw4miQbNMgvcYrsm2yWJPSwwXErpmzRPo7pFn",
  "key17": "2mY9hhKp3GQxytUGMN9T5ndMGF9XNoEvZ7wcYRQhwUM2q5ZdnPtss1CSSbVWAksMq7AyK2ciwu2t7ZhR5rJ2qm2w",
  "key18": "5Wrh1H6HKjH3U6i5SKKJmdW2Tmh2rTLcikdep8QR4KbjVPyvFXVjTiXppnRiDBoAB9UveoXG3RfAJCp5rgkvQcSo",
  "key19": "49pJFgCq5uiEkj8EuzcjDZJCQCkDVSCQk9gXaNZnSrZFvcUSfLzrNW1vZDPfw9NgpkNr3etZtFoczp8zfqnpRR8T",
  "key20": "3DgnEA3MCyic7hGboUAmWMSeWpsCNsT4cTdyHqhFjXYGa8uvjxddzd5yZH5ojij4BXFMXUWft9G1rHj9UYbZitnD",
  "key21": "D41qWXULXaXPDiE7XKCmfFHUaFjKpLJe8HLhBUUvw9UcabpvWpfiDhaKf3gi85toUCuv3NHNPzuSvPxnoBDUYZF",
  "key22": "54pp3gcGWZu4ZnAqDVrXnyGwkDPboNxu2aUGsu53ftrW2yprJHZu9YFadeydAdv1GNkM6SYnqod8ZmTujqLZQRdw",
  "key23": "3qXcKuaipqCDUnWkW7Ek6BypaU5zNefjBg519D5gSCnRTJNUZ624EFCWFtmog7mVuM5WoUwcmVkvQ6VbLX47nahe",
  "key24": "HyZrRb9AYEh1hnnS54ZSfqjdzmDyUSiYW2K9vZkoX1bHnozFGzvZEX7TBxMZ52wF8YWR9nCH9P8tiP9DuzdLcgm",
  "key25": "48mog9rVSixWXZ7vsF2rNZmReSyeag3rHfcy12Zspbxquj8mUwV3Dk1oc8PxEW5c5MzWs7Tij7K4bUfkacrNQKh3"
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
