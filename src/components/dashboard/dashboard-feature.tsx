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
    "3bk4bRdzsTLFepsaNmzotF9CH1tEMW6cdU463XWcbYkFGnJKJAubx5MAVkLT61EiCxJW25djjBpvqZxB8eNtk8BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xgVAYBiY6oXvfLJepsEh3gm3UrQDaUXxvdHpd6k9NdNZQaPq4nFiNmjSdDTsFjghBeSNfAYuFiXi5v5ERywotd7",
  "key1": "fEGSGdBjVKj2bMxjqcjiGVpNCXSG7Z3vaYJywGk3nTjZkwfMaV8ejSKW7BLKCUtbKcEyVQeAjvbhCrDH7x2Cmyq",
  "key2": "5huiDU2HB9oQt6qxH4tSGy7gjRhCygpULN6fxbEdJWmhi91yE6JDdB6z171Mmu6BfYPEt1wwYiLprsmyp8XPzWEh",
  "key3": "3a4iva77kTgEBoazVABDZqBHBMomKSEFiLgaWiZg1ikvzW8NdLSnhe7vDuNk3FtqDdJ72aU9HifGE13aNNuVL5xM",
  "key4": "5Tq65vGnw5uuRX554WkZdcvGo4d5Qai8qUkeNGGZwG85a3JRLDk5CmiEwJvipLTHZZaZYa37Rhhc8yKLvgeWiZ1G",
  "key5": "nCwcEkGa5q36Luo1HyTicRFgby7EBe14jHcUNuAweddXJRKacGY7bWmM8eMQXLHhphDP4vwxoSQRLaQJxX2d3GQ",
  "key6": "5cLqZwpZsejAxdTNfUbYGVnnZiVhzb6srNZ3EsQauoafVDYNsb2iyBTY135jDrz6QAPvfGnhoGswpc8mPJpefDw8",
  "key7": "3c8Sqaf9UxAi5X7kAKEXVPtfqyY83jQ6QQ61nDsjrZsvDWRf4n1ZqmYpdPYWTMeQ8j5tts77LikpCDVYzdnRgTG",
  "key8": "T9yKnKrJfdEuYxXzFkm7v2zf9QwiPFMVX4tEskD4HtMcapeNgCmXGAYKMucpCqcunHvJiLFDWrzAzmNuk4pR2Qa",
  "key9": "3hX7knwXVFT8NFGzUbGMb3fQR2B3wsef6wgas9t5n3r4WFAwGL6R9mbCZeLyz6hs6kFVBxAenGzvSkXYoDw7qfUD",
  "key10": "4NCiLevey3zMP3hakg4wQFz2Qp3oFJrkuxzJ9bTvkeyDnYptWJ7FVP57z8gUEaqoc5SzhztT5bDTvr1t3RNaEYQv",
  "key11": "5xj9KwgPRz9NEH5ecGQcF7LwLZKbMZA4PmP4GkxzdL8KCyPkA7kuDwJMBscrRbpqdCSSjG4qZcB8zSeYixqhg846",
  "key12": "5U8bpxiFLZSjy4ensob5EwavWBfGL5pPNPqn4ztfUumu2BKR5KcJZad8X8SZzbovo4pW8ijgX1qm2VRAkhatg7Fz",
  "key13": "5WiitWoBLimvQWz8NUCL2yqzUX3gMHRsJ2JJrFwcPmz4qfWqYLXHoDi9MEWvnpVcBRHfDMxvNpXwtUTJEGqNveWt",
  "key14": "2LKKDw9Jv3EjEtESSeFsXmxMRo1g1heJoUJsp4m7tWM7sg5fF271VkAhbTgqpmMzJFy7t3dsbZ29qAvAxQwFudUU",
  "key15": "5zMoHJtxVgD8gwD4wVLVvESMFT7zHJpSTiSVeqbrXPLfBqhEGwZXCYEZeWCTbpnKbxmbZCBMWrqhjhLGWH1cKDgZ",
  "key16": "2i2y2Xy8mXr523Pm9GiRhmHajKeTrJxrs9uo2umFJ4oAXjQGycjdJxVbqka9Hea84cAvRjmoKaSc39itUfcDBxCd",
  "key17": "3xo5NpiEyaUcPNUv71Sjr9PcGdVNkiAFxe2DmPd9D6cjzJwLJy91PQ97vs6u3qNEbhC48VVaec5k2g6WpJYLseo4",
  "key18": "3PTsPHVhF58YJDFruqzsRuuqSurGNMcxibLnYvQziioqDYuDRNCb1ybbXmnmbfWPigUhnravczAR6P43de4bBVZK",
  "key19": "2gKipYdENLnQ9ximmzy5XZUhjTC83dfTwczzF3yf22S5FJRrpFCGi5ugADhDQ8kimf1uCf8zQAedr9zpAY2KYpsY",
  "key20": "4dC2gaR8SLKWQAWeMb4h89dMg4bdT6VbzoMhiNrcBRauJEUscw9HN4JGdynFdgduEnwANu5W3gFupabyAmVGzQNH",
  "key21": "2LqXQRkvYh8kBEHz3NXAtNnAEGWDs94jWn8Fuxt46g1xgbW4ca7SqhoPMPFHp9WEhDscvRZKvB4Ae9GgYtLPxPur",
  "key22": "56cauH8PwxwBr4XMN1NNYnAxq4TYFsUno84YrvhiRQbWEvDfz45M6smxeYw5robwxm8rB24xVoPufqTnXaVBP8NX",
  "key23": "4q545ysSJ3uGfcreiErT8xmcLDZJ4rEAjWy1eJBvUhqZPiXgFYaQR1KU7EZqjtNkgdxDSd7UBDKzha6eyRSwr3L6",
  "key24": "5J8tZ3cHJJV6fGHDbQLH7nxNHR2rX8w46NUdawptwmLRNQn1cLKEXzjxJ1FhNJV8Hj91jS54fSTmkjJD1tJVrDVy",
  "key25": "4ELqjeVCSvS9mP8ZzNwapjynzYAfYtBPD8xp14FdcmuKWKZZK43a4dK4BN1hUAhZ6xcKBRjm3N16X74eLKZ4nrGu",
  "key26": "3CXex32A7swsVr1mCJs42TtkbuuMUob17MJigQ199bY75N49QVDLicVTygCABDpE6CXm8SycngDiiMMMMCcsPj8M"
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
