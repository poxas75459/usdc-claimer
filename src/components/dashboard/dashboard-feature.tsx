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
    "JCw1ddkQ2tSfjAcHNz2CS5R4Y7ciBtkqF8bEN3DPLYufJz2p5s7t588iaXXkbJxwWRbj1itgZSgccg9dpb4J31Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ndA5CvoXsG6uP7Ws4wHkPKnUnVkam8kitx6qY7oaTJQCfLejeQMat52jzSsUEkwPtxpfe3idKYYAmZyVkyHS71L",
  "key1": "NwX6mxwoiVzLaMDVdZ6yatirARn81g3njKd9nGaRT7bueHqpYmENFCuccdnqW1z3c9xFD6DYzoANch8vPLdAQ5h",
  "key2": "nqBZS9cDMoChxZfnutC29jwpF3wJoUdhY4yXrFQUQJgPMC8UtNdWFPbJ7zxmDEHAtb4ubax8FFbUBc1WgbEZc5x",
  "key3": "4h8rjVjSo7bbbVJfLs7fNnUUzPST9SL47GdPLD7vXNfPeG517ErFLyXPgeberE4jZm5urL83vcZYSaPctyKFsJa8",
  "key4": "2BJ55VTqsqJTEnpJkbnVYYwkECGcdTMgnzrJsJT7tDpD99hw7nFYQ9sRLWrMJ8AakSVxLxkAVjZ9KJboKg3vmdEJ",
  "key5": "YK9gmre77nfvupJgJ9wVkYGrh1Zy14nLM9C9JGuatKKtkb7jSkPU6b1w9VmkyJhRZbGfVJi2gMT2nmtWMEGBNmS",
  "key6": "4aVbsKutaCyHWtEwVy82FX9ZAJzGhsHHqaxrDss1WJpV6mBsevfaGyermye2Z2gCUFtuWsa6KgFqH71ujhx2o2dj",
  "key7": "5xY2UENBrUUqPzWqSxmWuYoNriL87za8wtb124BBLRDEYHtuXK8r4spkETn3pq4GDvLXbHkMDhoS3hJnkbo1Gvqd",
  "key8": "3mijumUbifxThYvkfmmXssCuxAPBKQhHyBUxC3UxGArZE26neh2dm3yGgUFEGaMhqgqedKaJdZfayFeEsxK3QDQi",
  "key9": "5qTgQLLYfdQuRr6YqoMoVvpcfuSz3RiHuwdPCPam7XTsn8CR41d9XfCGfDwZ4bUpdAopecQquWVk6UgvWfTnioBg",
  "key10": "2DBz5t1EUMALqLYEFu6Mws7sJtAjsZMh9B989dHgHQZCfm33kiSV7uKve5tLWQadPAhQvZJ42faurt2CGjPfkGbk",
  "key11": "5GZNxitvqauuAQ9Rg7uL8RhT5P1y9EFRy9ecRoVZE8hExcQPfz4cVAbSDykwxz4rcCirCvdDe8MA9GD4XKWrDXKX",
  "key12": "5KrPATuXew8NFCMk1cR71byQqiPujefqVSEsRuih82fduU9X4bQiGndjf2Vdyw3TknVZc6mhX96LhDUqfvaxcRMx",
  "key13": "4RuJHWeVBtkizX8JZ5ejjSthAFg36kbL7yqf7qPTMZHjfESThm69HL7s1PDCN9fFVVyt5eDoQTgMy8KYFCYLs24w",
  "key14": "72622jvCsGy4AKBsvQyDu1eMVwqLfqNJCPKgw7vqim3thxprSxBjXLDtLcw7wSofrgzwMfv7tih99oDM13YNazs",
  "key15": "2iSpN4g7g5GV8QK7GrPbY1fTqGEn2CpEiKPq1D5fQo7TGaFxxLukkUFzkvB6RRVY15fxkBsgQYvpT8gsfK4ucp48",
  "key16": "qjqVkYYuhCU1RxcNEL1efxYp9K3DBRGgjtT12HhgnbH6zEtkRyE1MNxaS7Vk8HnumZSW3vV3u9WarC7RjpdPo9T",
  "key17": "4w27SxZjHpP68TKBAAZgpQ2kHjqwSDorEPKJNF26H342CN9v4BdaL6RPjAsa1ioxUY7XuiwZ9U8a9LZxMNsfBkTK",
  "key18": "496gDmKqf7QZpHAB1ZpVScjAUpJygqr8AFxzYXnSswX1SVc6z219BnCZe5TC1oJQvdL7rVzKaZKAA6sYpnFNK92Y",
  "key19": "3LCFxvz9p23FCwcRbdfnDi25asWF76R8FPfef8k3Tw2Z98dmE6HFgScYSC6U8D1JziEJAFP9cEKSLQBEn3Ec4ZJT",
  "key20": "3tF7Y5JcY3podX1yqUrZVfXwGMM5GGSrpNdcxHKUNKtGfCDAYd669pKTEGrfLSKcQtFmVw51hxcEavdFf7bXZEse",
  "key21": "1H7uFzZVXFv57CwHLM34227BnH8yKKSWWtgbqYyqk9cNNLR91LY2CmgW8Sf6PmEkBRN62gnnraSvP7FeT3WaKbb",
  "key22": "5HtTb88Vu6rfeEyULE3brapKtWmGdBT9eZEesdGuqYaM4do9njVvjSkabNs7AEiKbabABo2Y6gPkt7LAJ32iMGGE",
  "key23": "4YVk6qyiZAh8eQN8qyaVt82ossRpHGJayUwbnLNS1DLrUS45y2noNWAp7bNdYJu2GP77uqG9UNJQgbwnExHXm5kz",
  "key24": "mTfGSk2jYExi45YpXbVosbDVPsE2pTJB79mVVe1CaH7b8RBtPB3soHK7jGRZi3X5zkN9wvGPBY84RTtnQk4ptSJ",
  "key25": "2bPYE99wQ42bVu9vAEgdBgxJ5Vnq8cfpceWBzv8r4bnLkLBf6K3Y65C1YUE4v1aafu8E5HuKEcEMzQxq5npjDb4W",
  "key26": "3Zq9TqRubYQvbREtrbeKmf1rvVPVrkph2cEfSxeHvH1gaMbHNvJ2MD8MMmAt6gpnRazsvj6qxeESmEBtwW7n1Q2p",
  "key27": "nXAQKfAyf5RZxEQe8cPQPLxd76ocUpxAx18Ax6u5krZMWAgqJ4yUJ1kPdTuBVqi2yhi2atHrfo3AbVzaTte8emF",
  "key28": "xo272xYEspdgJ7WwmMC2wPPYSuiMQ535VuXAXM6N18Merxe575gxUi5Ze1zgqDfVkiPgeAobooxxvD2ei8SWHj2",
  "key29": "B5EkwahcvUjtH6PckoWbxqr7ShTXrWyk2rHxJwrDqkQvbFAnKykRJcgyc7SKKN8hSapwD3XB53v3farYmQU5j9G",
  "key30": "4QuCUJYTjEr3ybD4R9FfLmT5LZUTMXBnQQSXCbXR7LroTjC8wBkPtjc8Rjx8cvHNYoZgxR9EbqUnCrQm3nMo1K9w",
  "key31": "2JRYXyxGFvuhjAb3s9UJ9xDzY7aT7CtQTFE7qGRS93NqioRz4uuzNQPZNedmz36eKPUWa9pmBvPDS9zU55MiX2zM",
  "key32": "2y6LXq5EzJsCR7feqCMRMXSHYpbXEUhgeRJ2F7ph1Cbwb4ZqLdrn88wGMU92P2ddwS85uS8WRbkoNYSujpLzd4Sq"
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
