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
    "4b1bnY3NN96EBCvBjRiqgUUFpC3C7sqPSpr9ugzSeSBNrBU61V2xoEi3jx61VeqAUDkjrJ2sSkm6LyQ2wotsvqZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39MtHJpEPyc6xsTH8m4uxmnQrQQKVzLc4zNhvwZf4LYAiG8nU5xs5tS1nRAFP94qziXxKB8qJybkZAXcnXx9ri28",
  "key1": "35G3mxgAC3qd51RY7wTHPVneYWMFqvJWpLEJ5QNWYvYHz2fnHHhrh7gSJwUfcevw2jgqx2Wd3PSkSHqBFUbxSVkC",
  "key2": "5gTWQCCvFaUsNAvdprGrxtang49DhiGQKtwF5nvTWa5DTCryLmxHmeF9LMnt5YrnRjrDAMD1pse8unLGHBGhBms5",
  "key3": "3hrAJJdwSeM57CY31YJdpThMJrsiFJnGoyz3DK4S9oo91pPMBJkqWc76aN8DCU5gSpgGcvE7FvzpZLkidVVqRJx9",
  "key4": "sVn3aa7yUhgQEnTtF2AUXi2mfYkEoQhSniaKHaDCitZJF8Ha49xt7Czoh2kvC5EmC3uuH8fpSgHT2RsgGNyhCrx",
  "key5": "qpvKEqaf66vsTNfsiQ9jHnV93iJEyaK6bS4y9yg8KCQ21XtCenwgetf34RnpE2m66qzUHWAW767i1rneXtkEtG2",
  "key6": "291znTNsVxue3cVCGDeXBQE7FxF4M9kYaUgs924wVHKWH3X71f2teSLx4wLijHVL69TKmQUs9r7u4rWpsnHxgXnB",
  "key7": "4HeHSzpswQNgE4FvY8bHzufmwXhnDn1tg6srd7f4yrnwjfQj5bykTne5TLLUVfGXfUxsq7nKCqF9SfZMg35maAyo",
  "key8": "3a5JY3AxustXGUF5ARkNShFmiCYdZCQ4BdhFgsMvLwzgUwD5zSDwtdHwLfViwvh1CLXKoW26qzCpoyVgi7qbEqcc",
  "key9": "uUshB2jHfyJQ5HBq7XrFQKaFWfpWacJvr38pzHPaZAPi8Jr8ptTd7GqWNzq7T12LKrJTe1QzL2yJpn9AcXtRoLh",
  "key10": "2mkfWDqHyouMy9k4NUBk5X6mpU2zqokDeYYvn34QxD44rHjkEEzF4DVKQ1z9q2pMv6ToBmi4RJ8TAPTUvZVEMUDx",
  "key11": "5R4Tt497ryivB6n7YdM38k7dmCfggUbWJ3v4DigvwrRkUznkNxeBNnCKcrrjAXyT4k7duDgz1qL8WNtzHiWxFfgP",
  "key12": "4ARnmMec4NRhex9EnyNpaci6gvCAJHsZ53Gi2Pz2EjaahWqR4i8qq49CmVSPpK6rEByAQQCPYxqkkBZfx61hVYE3",
  "key13": "JyG9hTcYimakpmiY9Mkbfs5KLTkPcBJW8CnAo9SzVcfWf5WuJpRRhdDc98Qm6fs8YRLF6sWKzg6dxpYHUp54dwD",
  "key14": "2BaPqyGgJNjF4r8hrgPPEAdPA3FMfNyqqRnLhSRgENQZpVEjf5n9KvhKyyzC7kwjR3yE6JfJAQAdfmr1WP9HukRY",
  "key15": "3TcLCYw82tPCzS9vR3BRYYnxiZi7qNTm8wieg7gF7zkiQHH3CxVeV6MXkuTQaSmvRZfq11eTjVCm8RtAVEPZUyDc",
  "key16": "5RgSbzzNRtdwGdFeja3aXZJc7RL6DTZFHHRaA6YsXhyJVDqxzwP65LhKbbxk81XCmG5a9yf5mGBXY5ANEJYACnQz",
  "key17": "3UfMeMoK2xThKYGekxQ6ZC9EZU1dx9u9gZ1eC8EtgEW7mTEmZUpSGioSrSDPTixm8BaRZWzGwuATSYpW3xf15dtC",
  "key18": "5sYhy1bWUJJnguaZy5uhn1JM3yxZhGhuCVNtv5YHQSSykeA5aZJrzbwPNXiQeVaUTcXgCpoginUTF1ehxCeRAYpR",
  "key19": "4qs7vJKht6QjV5k6dmBKqQW6fzBPapbEtaxkewkQAjmGtQ29z5NE3VV4BcJ4PKNJDTKK2BhY9Sr5iUCDwRgsneDx",
  "key20": "4hvp8iJUWkszfzHTP2KKbjbWPRqrK9UeBymDuEAnKu9Q67UUCDskrgb6xjUkzeoEZMSBabZYmzfag8jggtPESVrr",
  "key21": "MXYTgEaZhyqUWyCAPBP8E57ea4LS87iUsN6tHeeobFUmJ6vTzfBnG8gLMJZfvfuQFvcvqFq54BCfnmvNZXRYRLX",
  "key22": "2EZAhi1WZmPPx8XP5fSwV2VSf1UvToZqD51axCKpDaytGaDFG4vGXviGrC1NFcWaJ8Nk7KeEErfiSPtRGeBAHomm",
  "key23": "5aPQCdd1Q3nNmURi7xakTNvLmtpUaeoy9UK9394VQdQmz6eFj5vXBPRFDsrqutrEQtqGL4hNL9LZo6k2AVQa7B4h",
  "key24": "FHf8a3SijsgjKr44sLiMrffATpiLfFT4cQ6VXjxtM8MyPdUmn6uFQhwMxV3S6vm74b3PqdBjtt9zRG8ciDpYZAB",
  "key25": "5gGhd9CffLxhYbHwS8GGfNWTheV9WbWfvytsGyf7v9MC7ud8aAgeTzamq1KpVXBG8LCaYipWHsU8ahqStxvzEZa"
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
