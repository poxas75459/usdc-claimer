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
    "cbn2voAb4f9L5E1KqJUSqDfnxCPytm6WH7kdXgS4nEpZ6dGhEThugCbUeKTHDb6oCg2Qin3N312iLgxf4zWH5wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tve46w926RegzhWfGFWtSJWhkcqdCeJeVUGsAszFd765bNA3VPXWeehnzmHeTMYqAw5WVssYTdjry6xvQ1v3Ssy",
  "key1": "2WBMSSV4VqyytsARzb5tV4f6WLSQYG8JMDzeCSwJQFscYHw6firdNTg6tNMdgi5QsLbmeAQer8DinVNuYPS95Ksc",
  "key2": "RjidJPfEzwzBBZErRp2X1nE4SVVDeByy2DUX24gFbRzKxwtR6wN8BG1uJNGbb7ibcYa54sSgbdkQaBhhgkR6oZm",
  "key3": "3goJotSnT5JtEZsfiKjHydmXiPuQG9g841DD6agEijxGKvwtGF7WzNVyCxsZvpKUHqmYFP1XzJftWeYagKerutCJ",
  "key4": "XpidwcEJifhj95X9XSwWmN2pc5NT3eY7m2vHg5VQUhtVnezxzSaQYYGzPmkc46qGWMiEc18LchG3rDFouDckMUQ",
  "key5": "4c3Ca6WPbik6SHnpkrqwerStJm2nXSLL4HbKJ37YBYZzmY2t3d3Le7Qu2QPtKtV6cEbae349UEstcBups73h8NTA",
  "key6": "4boAfF5YDzTxjCqYoWv5HqUMH6TPgbSSHhK4JdeWpASgziKJdW3rJ8XJiH1ZCmTZXRh7cGtcYxzxo9HFizKZbSqZ",
  "key7": "4LSQTwBG8jXBGcoh3GV79fVyK6i6kKDENP7yBrwviWqETYY5ZzbUK7KUVr3QYxx8KEYTZ9uZJN5jNpZxZgN4hgq2",
  "key8": "5213Xy8Yp4GGrV9RP3LetMypb2n6YdoR7J7mezBjF1bXiozCUy45KjBS1qZ8d4ei9EGGLXjBRTc2Np4NfTBMfktk",
  "key9": "XtmJ9SQBXfPKxUTMVTTr9ir7q9EBw2D7BrqJ5KgZARV5Dei2Vq5MvczV5Jdpd7f4N8CXyHmje5d8FdYsrJePcNw",
  "key10": "5johMpozBsRnVGo9ZpdcjfiZF4gYusnEHpFC7oxutSKjn4zXtPygkH182ZpA7DyiKaFcBwcZPdkwFRk1r48XW1hx",
  "key11": "4UfhvFv6bzMmhteNRFsvxEBzkt36Fyimyg5ZvoLHx3pquUjV2VhFh6j1GM3ziLyJ1UPF3Fd9X3JXVFAZjkuepiRY",
  "key12": "5y6EawDEFLmHmXEAcUFZoHq7NrnyEM1Vyxr9HVUn85pKrqUQjjDvtDuHJsWAaHLJXjDf8kiUjrYR1hfoDAPtzGQC",
  "key13": "4XsbuxfBrxh3i77ePtTLsLkAVgn9gg2mU7pqpCQ33EmKGrHN3yFc8ESmzSqduNMe82gcCZD9APZQu4yjoMnZ1TDz",
  "key14": "5KfWMTbeRkskXHWxFfBgd1Da76yTxsRAWBzMuMi2SzGUtG9MBHdCcpzXUBWz3kfMaN8Bc4BusyNX6iewttYZQTBe",
  "key15": "4tLpkDHnYCm2oaCk3ApZgYKMVhuysRUUsgsDTzCU6xPYj4yeF1mCMJLhPn4AE41paJQq1Tmp7kqDHJGxHLqCxTqy",
  "key16": "2dxCMgk7XNSTYpF4j15NM25SUe6d8zwkMDzaU2rcccAeASj4xqGQL8DxnZ5C3GNqtTwmkrYCD3Ypmx5o6wwo6UYZ",
  "key17": "cJgb3nmp8L5kgyBMJzGdYSuecEhdZdwVDvZiDGidp76quGhLaDhbzAnqYYPcDaoCoTDKpevy9F7347iHn6YAeqk",
  "key18": "29BiEMGYVWHa4DH4b6rXMKiC9VY1V8UBdLwov9vxiKW8UG9hLK7g27GCS52fhCJfR2jVEYNDXXYZykWpBLqP62Gs",
  "key19": "xSADFJ6A3E8BP2M2Ziz9VmT6ceasoc3uY3cjPtv2HFMvUXejikpRMjLasx2bMLPKj8Q523DU5gMeAuqd4KxvWAN",
  "key20": "5JRAby2zctcvXPjZzED5LRGX8wFP1rKqvvyMA41gSsGbK5rju2Nnm8Y7DbBz7Niwfh6SyFEbEDTpe5ARAdk5sje6",
  "key21": "MfisrtYxHrbuBLRReZd3945AWodjdJx4gXDacxjSpeamKpADdhqrM48y7UMAgfiFwst7x1SKfNrGUwbCTPYi9RA",
  "key22": "aBZq4M8z2NYgyzWSEQn3MWH3PdQ3UtznXEmNsEuzERVPA7PHr4SwtWYzG5sKHmkBJf4RXdSPeRUkCagG3xBTtee",
  "key23": "2F3GoN8biLLzDM8EP5pFRQj6rTEmMD6kJU2PtXrUVTxWim7g4n7bghLsMhCXUQfN6veAuULsAjxzV8qXuA9qyZ4T",
  "key24": "3ekkETW9GfJzD2jWwEWn9wvXxvxxkmsne43xTXonCBNzWdSirJK8ti2rpqhi8nhsHmcsnu2iLGTWQrcq6Uqv9TC4",
  "key25": "22gxDwqS6FB6Wp1pibh6XMMsGXZge3LCs7Byn27tYh79Shh3vEBKai4VZHQhZBCBwqSzACm1UqefHNB8wifXMFH2"
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
