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
    "46sAkZhnKLB1w8EtrkrJ1yzKyzx99QP2hKUN1jz6TRbv1JLs9rbHuTMEdWn5jCvuoNTjDG2632VvRuaM2Z99baPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62a2KvLdSqY8ozYVyczp3uL3Vz5KedsC1B3kBasTqEa8ar6y7gmUzK2ETtuRfoHr6uotMaZHvUjcpj9eCexvsq9n",
  "key1": "52tJbHZH1T84cFiuDcYtbDJGmbxzXwtLSrbeMAfXbRA6NjzqgotqLCnGnhxAQXL2i87JUZ2eQFTCr1bvNgjeWecB",
  "key2": "65GMyHFqjzAKDrur1em4J5huTL96GXyWjDczZVGbXJ94V3CyjvDgK5YsGDn5pRXqenBtyAQFZAZLdjwq4rrsXjp4",
  "key3": "2gT92TupZck1RDDs8D5YgngPn3hZoqcu53s5To78MkSnqykGwFKs6qnAHgmQMobZiTULLuKBbhd8o8EDRz97M9dq",
  "key4": "2qa9WtK77CdkJW2SzvqxD2ENyxfmDfvtGs18Lm4aZntEA8Lq2kAH3ULcvcP2aABqRgzpJkrExedgqs8o6RC2E1ac",
  "key5": "AeusFMJ5erj7ypzMaFbPw2zCQgAp5rwzQndZvL4iKvrtG8fsa5AVJnbmkP9yYjCKMp9PKYwxQ2xt8USbs6aYhNt",
  "key6": "2vW9EnDkKrxWKPKtYi3PEnaYaam4XRswrq6ycpprF5P8DCLU6eZgLbWDqfVAe1eYT66zcuYAAMw485zx4HbJh7iw",
  "key7": "uA4dBBdczJ1hh3SF4Nemd3XoVKg5UfoSNnoJZZK9UoCcpVrAW2Z2Sxn9fLVUQ7Kp4nXs3HtFwARm38bW3H1jR1E",
  "key8": "47eq2eF25wc24epkwR8JEcnss4gx89bu1YD2Bb5rZw6BpnaBfAHsACBY1pr2ieRPZjW1dVpoDktiw95QwuiengcK",
  "key9": "4agd3FMSta6xYn9xxcuibedcNZda9GCEvJEGPnULxEdrDZiz3Lm8nvnXfsVVJBg3tYqhkc4FC4p6tEYNfeRPFP87",
  "key10": "X6oQ8M8mLgDt7NtmVKVBsmUnuhS2agQQyzhRWr7LX2bP8oBUP34q1Gu8Dt7XUkr8EFT3uadrafbVMAw9ybfJV6s",
  "key11": "57rGABUAPMUD2SGsEZrPzuuS6VThvGh2oe8e9Z9BYf7RErNJ7cQbMxtXTGztDQej5M73ZmViamfAsxA1BcVyNNsY",
  "key12": "VDXHx78y7tf5rvHtxmtbd9mJsVC4U8zFDxyzfoVg9NSBSyGLQjGbFs7CvZ3JybM1YzPeknmzA6Jgb8BmJJPTDD9",
  "key13": "4D1V8YGxz4Z2z2BocvL7f2Z4STirgE8PZwpndZsBqchwK39G1n8h6reDmErCCHyi2X5kmktzdQzMkCj9MESEGLgw",
  "key14": "6eJ9DEfNuujuR6kMjzQVwT926WHSmUxLBbTxxP5fgysgMSqcgAAu4f5SqbwT4hF3BtzECBcMtvG7Lyb2JNFwdsh",
  "key15": "5bFe7R3wYugYZfRUYcfg8srJ56peAP2uXSxt4aNecDBNxFkSKDHhBdiVszpXJj45wFXBk2RqGF9RMJDkMkrHL9GR",
  "key16": "3LK2K7fVTKraTSddu6FJ5NYcpStJpsmBZgUqboCdydWMdUa7TN6DtwvfkzCYb5eZ6JNBz1x9AqMUmfJAn7H7BWmH",
  "key17": "2SpTinhqK1fdxYAuVB2qodWyYPFrtGFSdYp2nBoVtPguu8mq4r5ambsALyJEsALFgBg2o98JHhFzC1uonsf3FKMR",
  "key18": "3iPRzg86QvhLCgqEWub3VtW4cnnpmwQuT4pwynsxbwW46LgoFRWUuwmL5cAvDfYkBY9L6jcHsU8ELs18q7T24dgH",
  "key19": "4WFoCCFsVx1mc7mmyQioiDLafPDrbdwMKs3BswxTaDV2rfXNPP3cy3UTCLrXRqAbA429cZe8SR5t5BCRwzqwSwaX",
  "key20": "3N113WjLLHV4YYoQQHb1eB1y9n9ax46dMjyQTVVYwcYyjAxuqRFYKoqjC9JSPqLf1h4vQuwoZWY7BrmXL8V1sTuj",
  "key21": "67oyYkBvuMELjrqV5QXaMciSmfn77oFJsruhSv9PsjFPcW8Q5paCakN7WYkFvypcPk67fFnKhqt5HbCMZRxTANVq",
  "key22": "3LgU2gZJVoHrEEVdQdJKh1KiEnFNxdy92KZ8cLrRWJvSbqvhZd1BfDV7s4WgUKLGdfX2QGHZxciBLZejfEs5x5YE",
  "key23": "33CETges68VJ6neJySGvKi8WbKG6oSUYeovqBimgCGyRGyN5d1q8gg88Ymx333DuhnMhNPEDaTtLZUZGqfdtL8QS",
  "key24": "3MzHAu8kwZyVuxAfmnt1i6WNpakVGXSkGghBg5CXyrFeMLrqsiGt7femPAxskNDqhB2JY4MLt1fb9YkVsARfdisQ",
  "key25": "3vzpdBF1xm6gbc5f1miiBCejkVF9w7bNKM3xihNE8FVX3A2r16285JndNCsvW5goHMZPYy8U1hio5mP1M7az5MX",
  "key26": "4f8YnAmQkCxAych1iBL5QKwvFhLfeojoymDBYQ4KDAdJeoSMsY6UipzvqDmNcbUdxgGhtN9pPKH2Hd7Jiago4eSY",
  "key27": "2SiVNaBYAwruwSNHEj4q8W8aP2BAVG6qTCz5Wipx6bLniVGHXH6jvucXtWe6xn12z22bjkrpHyq6BFCebTG7zefJ",
  "key28": "fRsGgyxWCoUnfgHEqbPpNp84ogXoByymTYuGRVUZnxpbnp6VWF7NX48dTRiEdTb9XfdPYE93FTbWPtFARmPtRGT"
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
