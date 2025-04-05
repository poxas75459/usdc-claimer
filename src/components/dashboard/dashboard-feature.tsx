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
    "6bBogLsJYwqUk3GrJCmz7mAcwTDNFEtsqhLxx3vJp9MQsMeFwenPzbXYQ9kXzLbgugdicM3KGristJiytM72gy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YiE2KXebmTNNT6EHGMxWM2BLouGmiymMJB8JQiXix8yue191D3w15sLmaSCdEktqNqGUCoR3qqWcuSaW4WWgwTo",
  "key1": "5YqAsf6vAQ2Zd7J7k7AFRsGu3wSjEyFs2UNnGBBjVngGqS2ctTTpVQ6ancEJR9ZAUedYAcukXN881cgrPjy8qZXm",
  "key2": "3FGzruuoFJJYK95Df543jexWD3B3MvMtzSVRoTDYVBSvXxVzkeeeHtRdFqz72gtHuLDbBgkYbNomQ2mGF4Ki6Mk1",
  "key3": "2cZVUSPZj7kQWvFcPEF5KAu76eWnFfBS7N4uwr1WxLzyMk4CBrdiznmoxKFDpR3KJo4fwnpxL44vZuu45prLhxy9",
  "key4": "2oF5eEKafj6BBfhihkDCgcFwvvsDnxT6v6BhQxrFyW6fGRGBoTRYdSGqWvaJk535Z9AVzEs9EX3s1SN8EpQ7seDn",
  "key5": "3CtmAMrrFRVSGqgcDk77QWRAKGjVLzRmtSsQR9QSZpdmzYM7DV4GwDFuTsH7DdjBHvfp1EWABoDvzDGu1qM5gR2D",
  "key6": "3bJYdVKGGiiNPT4wJTCPN1WD2yo4ZxysEPvEALfL9LmDEdqxoiJKEK5or4jkdqBCPh5eKLLfohhGodMNHnbwQ1gY",
  "key7": "yCcZrT7XpNceNA1cUoNvM5ckzAsopvfyMLorB8wZ2X3QNyvzRyDFx1JByTbJxY1FS9b3DVCywkQJdT9AQJdvDnU",
  "key8": "sgcF4Z9ouXGZhAAKaeCiZ8uS7Y27vnRGK4pXo9vWyzW5sK3WMymrYarjJSDbQStMDn76WSR2oCMTffpQjaXiVku",
  "key9": "2XRZsk2R3Lhnq8F7B36nMQUcfAGqJrhVp5rqTvig9CeZuY8EbxeEc4WxYdLzsukhAjHmNmzgwGPV41Gg3ZXTfNu3",
  "key10": "2CUjJpUecqdYBa826RyymuwgDQHsGBgneeEFuZn9EqfDaspUYw7Fj1vd5JCTpVfXkQzbrSShhV4vF5GmeHdwzoH9",
  "key11": "Wo2fYsewSWcZfZXupW13oTNDsC6yUH6rBxw38H7JJDaHzQF1LVJCMXzt6xwTnJVnyj2xeoNXnPu88j59UJXtmjo",
  "key12": "4RWaY9HC8vpNNhtDJh7P1FCXjhn5axkoSXBY1gawxTDRCh5sF7PBNNsodpdGSrV9veHNMtHbgnzgmmt34Uy6j11y",
  "key13": "2q72XQjdF5M7LvfP815gcyAHXYmkL7vDQAwjkwjY5trw4FiHdVKyqvFMVKZ1PYJ9EiPcBdHteXAVkeBAtjjZtA7b",
  "key14": "5xXG9D38gArBVvVQrocCZoiJP9CYdxrzBrWBoaeam4PBk3iyiqVQCCWrsnC741WMShAFcRhWBWXipRdqPBUtcMqw",
  "key15": "2ZAsTFmZBEY19J9jCrvfhJYdPmpiUQ9kZT35hRpitXXnDNbbtAhAB4gAAVvw2CcDrLtDA5NxjppUoXjS2UFiem67",
  "key16": "2ufSLDMUArShkGYSQNuWcswgeYN51fyQzGXCXb8jdMddroj51KRHSgs3UtjQoGqxWuyoTJ6HQdPXNxo4nXDkoTJc",
  "key17": "5m6NyuDwpeiRJQvv577HM6W1uie3FduHvSDVuJAvuwwip4AvzpVQyFd6ggi3gNTb4neoMXpoBKunP9Wz9MqHhvFB",
  "key18": "5qiMgerUkuwjyUzzRNJ1ckHF4VL8oDfEErMvNvT4DTT67rySE8ZBfviHMGCK4C3FkK7f9spLa6Pn3rAjNx7BDKib",
  "key19": "4osSXT1NMmWNVD6apYMZyAcNXRW5uobxY9cn61SPWZgAEXkxqJcnztferdi7RaEfaekLQoQFtXqgohhgsWYurRGg",
  "key20": "5mZDmLwbEUy1zTMnSoxGpDEh3ifmwVpjCiwz8QSUDzSGiQopXbuhKnzbNef28dLG7h5h6bTve8b8fDGsASKPUs17",
  "key21": "33zk9dvzLAtmHQFDoZSuMuLXgTw7RVHBSjsLWSvMasHtNZ5JjgKxvmGk9DSm1XuixLudFZDquCnx1SDak3MtXGZy",
  "key22": "TCVza8uMaLQbZRWJkq78d1u7yzQWW5wxfoVgK35kgsdh8tCBAAakcpJrraLEkvFCjgumtgwFyRSdpALLFYk7CEX",
  "key23": "SYCJHy9pdLBGGDfbUmKt2yUpu78zFsyz61msffnomyHi7MvqMrt6fhhfRZckzqRWig9wpq4FW6XpeyJ5UPZWEkU",
  "key24": "3PtUGhsXtpubwr4Dt1tVp1RCxmyn3LEZC1N4qKSrSs72nQSXzQGJmSV6daaZopb7JznVG7AvWrX2APXQ4VsRewwW",
  "key25": "2eA3T15CNy3aEFNmZYcUf5ikdZYwtUtpKvFMyT2b3JbMn4CZ7RiFw42zcoqFSjCE1xYTapbhaf2Q5BkmbsHRvzWQ",
  "key26": "3AfHHG5XQGUoQg5vKSr9SbqJndAqyA16q88TXVtuuGVTYYR4yPimbLTc24iEDB3ZCzLeBfyuDu1SXruW2K3vJsKF",
  "key27": "AuFiiwZRhq5Eype14gqBvcvZ9yrCy7zgVgGBgEvGJqSfkortYbjrv8YWdSHbRjFDwgK75bQGRKb4acoqrw4RoQ9",
  "key28": "3N4h3PWUMGirpSXj6dAaHBbkM8itqLLnaJXwnDJhEYSKkKEMbWvnkCm3rgmNnDHDqLrNYPQjt7b6FmF9pRsQZbeE",
  "key29": "Lwk2gECW9M6PJ2BEsHXombu7hSrzvw5BXGZ2DXq2qurMDjfoh8kHvFRV42ag3g2VYEBegfcnJUYbroxNPKFv7bz",
  "key30": "46PUnnppLzXziT7XBRLkw7EpCqHFEyQKn49P4KiBhhMJsgFLPQdhbG8YpgqtvS6RQvs5DgV6TeBvPjcqMN1eomDh",
  "key31": "2i3XHWuoWJ2mR5G3DTVny2vjWYGEmJjKHxadsEtUF6W5qSPii6MnVz4inH8eYDqCGG2vu2P7iCg6N7oBiT2xqMX6",
  "key32": "4erHaZficpWmXqsEY7RcoJa5KmWpf5KZfVU3hfuj1oafv1TVha1waTzvLU8bLjf8DPQKYjFDDF4kdXhsRnr4L3aY",
  "key33": "5SbpgAs5N9VwBfbBxuwCvpPFDu3PvUmWP4UEtJsNRK7LnEDrSJBAir8h2rkDWsPpXuGY1FVMNCRKZ3VABr16MQaW",
  "key34": "5j4gaCV932A8T6d76LM9JJLhnWYfK49GmQq6YwmEQ82N4NuxraJiJrfmZPr6DDmGkvB2gqekWUUn5fCAnHgZzuHX",
  "key35": "KXZmcik1QF1tqvprSL4RBtgcGwre2nDtCQTGvsFZzZGXg4E9NPxBaGcJ67gz5duemnL6sCEF5QJZrgyZ1fUHb9E",
  "key36": "5Y67bVto5raCYZuE8i9ZWEpcyTsPqJPdFhAVjSaNZ1rybYGY8waV8HfAiq6G5Nsx1LhD6csJ5j4BvgEHhpr5mg49"
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
