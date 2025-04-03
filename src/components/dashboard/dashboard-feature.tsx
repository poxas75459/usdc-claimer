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
    "3qoEU6qbNz3nWShxDSyanWxUafSaqycX4Z4XagHFXAKri7cVuVhPavgBEv6nuheK8uBBH5frTRN7mC2cijKwRpJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ahy6sikBKWErh32ExosXque1VN5Yw6r83zPSBu9qR6Kg3HWZK2Gai1VUGPbntYAPm8C7HUydCXbPeaJB8jZ3UAq",
  "key1": "2QpSn9TtiQNnjtR7ZgL7q5hDRdENAetcZD1yHzwuxord59UfUR5P7pFyYNhvRAK7StsszzHsgQdtmL8GbKWXrvRM",
  "key2": "31YS8ZcoHma7NmaHKafRZkoup1tAwwPWeQaCvSxiBQoCiRjxvj1EBQSCbvgRMenoXTWWf4d9nDnrWvbjfM8TUK7N",
  "key3": "2KgZXMm5ETDvRgr6PsEZJ9hiMYFZZjXSphBT7HqhTbwsq2BdBeWEGswnX8xvTs4FcaPkiqyiLHWJmk859B9hKrnc",
  "key4": "2sDAekGLMGWQVp4gXNVFZTYZCBqr1GoeknwRVxAxw7rhUhENak1GG3SwxSKHLxQdKZnT5Eg4i7Hsc3tGDfMWKJHi",
  "key5": "5pwUDrYNnQVFBCwkyFUp5qMNAvEXzc1Yx2T7p1hFKU1fzSxgj5tLqG6SkTEJPTndbcoH52kUdaSqtQGhwLweXXCy",
  "key6": "2shY8Zx7EZYEaT43PSSgvuZuqs5f7smmkXX8GBmWYTTYjXea3zhYLfBk85XAapJGnJqjCBMBrX2xJVwYueciEfAF",
  "key7": "2PqZLSqUiKBcoWLR7zX4eX1kEWUxZa1WVvrP26aFGeZtVnQ6K8m3KDwqDSTaSPXmfNeyAABLhacira6URpoCxSEz",
  "key8": "5gk1LMpFtxadD1RJtPtgi2W5LqL2sQeEaQvunookCs9bg6HSrogET4kPVQZvHJp3QYa8rG3K6GKNLsecSWRJ5kJT",
  "key9": "26nFLy645z23qQBAMkK98HZfYfjdsKMxo2qh1KyJKDSuccojUXPiNyztHhVcAx8X2fecywufuTRS1PK2MkBj6dVn",
  "key10": "5vvtCy6r5zy5Qj9B2PS2Exq4L6xrWQ1iWQZhpR1K51XCZaLfeJLLbULVkchsbQAYh3qhmmp6TSiNaskKoWcevukW",
  "key11": "Ep2THdWp8jCJekrb6RfAT5iWkE2J7h2QFvbF5s2kkhQur6dZm4EaQfWJPvr7byt5vWcxs2zFt4HzUqpJtSQcR74",
  "key12": "5S5xBW8DvVaccsNLendxvxyicJuTcvCn7CGis6s8b4bciWEyDn1HbhGuoNDFsVn7yBTZ6F7C4N3LTebpZKjzG47D",
  "key13": "4tHyhHcWc2x4c8adJWuXqL5h2Z5VzCxBFK9vhZoFuXFoLFNdRzrpeoihYe91JG9uGpEyceuaNc23RBAWCYMFJiBE",
  "key14": "4H1aRooYn7K2xS4xi5ytEwnkeB6aBJD5hGTgseQwZGBDprffYD6Gxg9XUQnQHMffJYAEe6taAFGskaGJQhZpt1bW",
  "key15": "nZ7z6w49EjaHeBkLjTpT4DXVf8HAXHSWB6nsxA4WoRzgLX5XTW95jpBuYT5CL14Lm2JCP3n7vPoAVmpfCfB45hC",
  "key16": "5waaL4CGMSU7behxsQYeXGBv58sNKuekF2m9x7yDy4vWmcqtK163LrTFPdFmzeSYHZMPrMqUWcdQUw5YvwMZ7QJ6",
  "key17": "5znS2wHTdPdP1t7udwzxqxMpof1KCrJBRSZSAqneE8RGFKnuinfPLuHuyWWoXCUkNmvH7P9g5ZxxqJrwExWaiUNB",
  "key18": "NLtunMW5ixDj42degYQ1nXNLE1UFx6mt9Hs81ajy4pBro9vs3stFNjhVWkpnQN3ngStAhtFGFr1LYav7tu25ZxL",
  "key19": "U2u4k5Zi2uzzKVGBuUYx9aLDr9qVP1FY9ZqszuE3GAXCR1vBSo9Svq5P89LGBLzo3w5Ndak3CvGuP16oJY6vS8Y",
  "key20": "4VkzR9qyExjvQZ6tyzYqwJVdKwBEyDYHk7VoFXCYGL8r1R8UJQWzpscD5iM5Fx6LZcSpgV2R5WKBZTb3qkFYF22S",
  "key21": "4v4itxMQS963gqN846sDKDQCbUwN6hEHDWkbV9aANvz1XoAQAhacV6M7rtbTj4M6u8bkCVvguEYVX3povk9WmbPC",
  "key22": "2j1S2TbksHUytnhCXbyRv3Pu1ZLSKwqFMcqYFPnJDdxrxBkaZQ7DDfssPTgYBvo6BUiGFsxoBEjaigTMxwdD58Du",
  "key23": "4k3s4ShHySycDhEEKugcRc3uzo1G2grZAE9tkzkLsYZ8KYLnM5FzgGrrBRsP6tSH4jbZjzqqeSjbZ8hVjvgLfs6B",
  "key24": "217nrxrMhn5dVKoubDdwfbPLiVdo4C2ofnTJG2TxHgt6kiH9RBbqLVBWFKFRtf4G2cpLAGCz75SaNwP5Uv7fb1YA",
  "key25": "32t2uxx8TcxQxtHPJSCH5prR2aBC94gVoFy7bECmPMXx2kDKz6gkJ49grXqvZDSKihSKviXGkPnsT2xkzGE8TqpQ",
  "key26": "44jqEwKVep1RHRj7rmv9MQ3dhUdNcDVVnTxDfuF7q9yy42xoe1je2RH9CWFPbAon68vDXmVzZaJsaHe5YuMfGiCu",
  "key27": "3gDizMiWSRuhyaaZku57D9LWdErViHriqrdGaMV1RabxzPZYfeEVF9KemCp6kYWyVLrUp8ymWanh6GbotfA1aQy4"
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
