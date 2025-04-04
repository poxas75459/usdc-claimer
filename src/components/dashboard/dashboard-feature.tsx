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
    "4bH45cCxi3Urwew3bYBy4f1Z6YuoeUCZtqZcn8E7mP9CYo5XypbHZnBGt949K4MDagKp1bmzUtowns3ZSSF3S6VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEo8AZzeamoKwUZttRzRNN1jKpgkAvspNR4dGX1xAkSWvTnLtmmKqBbVNyLCZeutqq4AjesWSBuiRzLfBkWDdze",
  "key1": "37BKcCXL77U35JpzXEYjv3BGvLkbzCui6VgfVXTAkgpfxt2D31dLMZXeWhQ2vX2nZ52rSCK5pbm8HfCZrruuz1hc",
  "key2": "5viZgnLcLLAgwvgpLNDZEmxE7nxQ4iWPs4bajoZKis3NmTEd6cYFULn6BUctzed11iTbdTKiW2nuqxMbRVjJt2F5",
  "key3": "N3c7egYNsp6QvqeXNCuQkcgiBH6tmhrohMCEQH5WXEEGwDcchMF8pjaRmrYXHnwgM85zRCieeAXkrk8FzTn5NCa",
  "key4": "NLHwfiBq83xPbNfRme5pFq5t7tfHYRZaZdKUCyvLsNMd6BQfbwV7PAjcfnisVgCGpLeoaVzbCxWbvvoWr48CDBf",
  "key5": "3u5nNeSHb8tcaHgS3xyXNoU4eJt1T1Eu8dUxaFjL6LHCZJoTejaMXE39V1T9STxM7maezG3KQMbkfeTYPt5ivvmo",
  "key6": "bAAFRFbAr9qPS2jR5GbeQ6yw4qCsg27bGif6nGcWhYaHhazNxfzDShX9kt1AsK7DEeMScQcoFqRYUGowytWNs3c",
  "key7": "5yAM54vNXDCysNMhVpgummMzGAh6ubsNrnB3HTrGmg7UtbneCSbydn4WJM9ZN9naGCUhaVYzymF2V5JpHGiXKUP",
  "key8": "aLbpifyXsLAECYAJw4ZNPmYb6uoASJYyzWN7wkBGcL7xvzFnKhbEB1D9eQySiE9wZkvr7zfxeXJbXS78ZdzGp4R",
  "key9": "28QF5CTjWWj25n11dZwcVrSrYb1kffjniMMqMa4brY68RjQWgnbeZkFrX7aqURk27pY7F49SPydGS2KUoUnJg8RW",
  "key10": "qBnKqDcWFuA2TnvZj73Ljwzz96GqiHPnRJ5PTHbuYLaS3gt4kAujaRiWhcWC8Bza1KmRJ1CDf4hiqNRLjg6gEhq",
  "key11": "3rhmo9odWEEJMQVx3sXeUREuajL7LBFKBYX7CsgcgFoyUxfitc4skhseFfTwoJNFn6DtTXk5NpA3TPNQXjuJxwS",
  "key12": "4KszSoGnspUM5uW5KNezat69rzEo2atj9bBShZKL7YiQrFiZzNC6zGfBue9MhNDpq5K7og3aShLDy2HuzHK9HdkP",
  "key13": "xw6srxm5yMjfEY9dy1144g14HD3RGFFGxeCoCLdBU14HxDmZdozX9PCZRWmf5BvnTtsisYWHPdGhdc6dJk821vR",
  "key14": "AHFFLgU9WWMbCK98a95eTgkJybwoDBbEJEvLT6LBe7JZJauiYPJfxYF2ty17Zkxi4qN1N3nneaDGo731eoyWckt",
  "key15": "54sycU1DvyUVrK4rbJB7QnYrKyZYZm9Gwg5c2h1LmmdHQxjvxYrb2dHubRfS9VGNLuAHeBPadb8KwiqyqyASkfch",
  "key16": "34w8hdgeqn8L4hgbZppfMoxV8UiCihUcVUggFMri916PH6nZCDQbnSvWCvwfrxiAtz38zS4ASApsW7ahWC9YWXat",
  "key17": "3JjadQ8ChT1rPu2j97n1n5uqyGDhs1K7xfRPA5Z5LDPd8TMUmA7TYqW37ijSrkEEstfqYUrSZu46z6zHCZetwwQa",
  "key18": "3QyXtPjQVczg2tdnwqhAdDKXgB7jykDu73h2zmzQ1gL2eiQY6sKg21Sfji3SY5EQKcHE1p43F5yM9U4PXpNWsHnk",
  "key19": "4nM6LhYYhWDetH2oG1MXa7rihAbK1Ma1pWZthpUnkYiBYteyokjLjnPTrwXmW5rhNso1SQZLyKLzK7n9qtYcZuQh",
  "key20": "3GfW4rkaEVGb1ytetDT8cC8BXJH46TkgvvRVt8gVz9YPUKwHnroyf7PwH1R4aPTwzu8f37nH7NUCAcgHH2Pc8JRR",
  "key21": "29tLZJ2T7hcMvJA1hUgo5a9p5XNcuCki2KtjX5yHYfLpgSnAThegTUgdZ7y2FgsnxJB8AUKWtPgyBdPK6b1mYWYB",
  "key22": "4CiHy1rsnS9moxYdhHj23VxiLxzFrARgZQgx4xpwHdEAVpdoi6Qm8TUFyu6aUPBgH6caEb5TQCGP4ZbexDeykWSB",
  "key23": "3ZEdEjJZBYz4ndHJ91MXo1u1NrkUpNDjYTQMdymDhJ8vT5ZZr4Bs5YxkcsUv3rdZhyEDdUdYLpx1Htt7jAxYPs3R",
  "key24": "3empQfDihuiqb2yw7eTbfUTdunWDAacFsHA8H4QhQk4Nm85YNoApFcdmsghjNkH582NJK9tFczT9UeNGWcG66SE4",
  "key25": "2wo3JUjmetnNgNbGHjnHbxrXJRtN9V3Kur1iVCAGT6kQXhow4grYWDta6RCguG24pmpc6onMSL75T9VMzWx4Zbfz",
  "key26": "5P6HxsJs2X28MEqHy89mHrAd1afkv6DDFzmJWNEQ9x8dBjTVAce4Y6um7uEyC6dZyfHGpAmqUB2VAeG24LfyhPTR",
  "key27": "RjdPUuod86jnnPCKV216Sofeiwf2UvVSyrpgUFrGViSJgUt4cfPseznzbrApoP3TnRZqcGZKk38TeUpXBHpR5MY",
  "key28": "2uJgTdxJSLH44t8nBfNMoR8aMuuyhiFQRnfhdHvpTySvEgyFg1fHChDrFqDEytywNUbXvKp2fSeo3VEWAukqcDHW",
  "key29": "4EYtWUyyh8tyGKcW3iKcN4fBHnRWF12thhBXhoSirkeeCrDjSXxSMxiFbYBabGDjXDud9XF1RMgvtm6f4fcpQNMY",
  "key30": "4qs7SunnkZ6qrL39U2Mnf8H64sAdQdwq4EKF4VehJxQiESFAo5BPWH3mosf3b4zfAoB28NeHzBeH748HPQ4YoJAA",
  "key31": "65rQLQBxWVtQ84oQjg6q7n32R3JJowKXbHvWJSKHyWYTGX7NFngeyM2Kq1YKF9qYK11aAGWZQC7HSoDZnqRqt2Fb",
  "key32": "4tV1jM3ubfdRmHL8REhtXrBK8sxYCXoCqwAzmsPvqtJoHHdPKpwBN98s9M4ATCzDXTMsS6vDRbrH6AktdJes7dWL",
  "key33": "4TciKpb4pg6f5FWVEz1uuwUk8EGUuDqAjBaCvhFteSj1bDYKx5g4kDgk2AnnUjKhshYhCBN1XwbUQzGwwpraWJmZ",
  "key34": "64XirmRaEdDQJStTaSmPej3gpiyZuxGQSSb9jmaR9gSZ8RSSzbCMaZgPbNSykQ4KQ8UazFuTJYptvjE6YSa38WwK",
  "key35": "4bVxPNgG89bUu32uS5gzgMCZAGHy1SicXfDtfKy4qmPTNv3xNQEhtWs5rih6rLxf4BcHC3hvZzdwAKNiy8xR4UbV",
  "key36": "5a3d5GPDzUhPoCbZqqTPin3Lawqg3ta2KUpEQeZ64xndzuCZquKSYyWFXLFBv3eU8rfdeicdyxho2heAkbckCe9N",
  "key37": "FfrcaL1mkc9yH9kGbNEiRgHdZUfpxfyxRAWCwZWXf2n7atbe7jhAAtzKYFgYmweQbGm9MFq89PqXCMSufrNjLBH"
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
