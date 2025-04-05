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
    "e3Y6tCsJ4f2SX5h8gpnNCg4ohGiwAvM4XBZp6nP8D2iEh2kPJZtsZ4S6LWhs5FAGkugr8uw7cNADSKGF4MkxYq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hGiX4nW9tuchqYCEQ76zkXAX7hN3GiX9czSQQXsjacrV1KBVR2hmgqoiLbkAuCZYgJswxJDzozKLa6c6btG9Cdz",
  "key1": "gb1NLWEMvAdbuqRHBffjZs43Q3oXFNtWPNQhma9f3GWSC5Y8ipaNLaYPp5gW1eYNhUtTfiipPAFCuoQqptLJi6p",
  "key2": "2NwzBGcMxyfyCZ8eM9bCYjAfGohLaRc6v1JQnVD6SBPbzC2xh1uq8vhadSW3ATQjxgt1gdcKTs4NP6n6MCKfQf3T",
  "key3": "48wU9C7NjZyL8WTNDuAeGFvskZ7kDyoLpA6DWNUXNE3KTBA4cQup9C7nNAe91LkHrxNJFDq826ArL2q36ksoPizQ",
  "key4": "5ZuVxyQt2XWigL1YzecYmvgdLbzUUPeJmEA3SbCARNDzKAUwDXj67rz58Hc7mH4NpzTDqpBfBwVg3q2BbdX9C8Fa",
  "key5": "3NJBKdtKJT2PEFF1DwrZpApsF4MHNCDJYZ65SgWuWoKcn7zTsqFzmCMSoVNCCDFqGsy1eZTuEsBSnNG6C2FiEZyz",
  "key6": "4fmLRn4ADm7dYymp7Xwd1DrvJ4QwhzkiMgXUJ2auALojvZcdrtxibQaSD7vqs1oQtjpERPiQjfRXA3UVstMKi1YY",
  "key7": "4eynHos9xVko1EfYvw2J6ztW4qL5SWTavcXDrrmfQkfozX1U2ahYNkTNXDFrk6UrWZRiuX9CAG1RAomE44oEEDVu",
  "key8": "3ueauVJrnMTSvWAji8mu9qWPmiQ2P3ZC4cy7PPRhdkDEUhEPmcs5VhYQKWudHTkBJwagKv2bXyCtLFPnyaio7jfU",
  "key9": "4VcinH6a3veNLx6zEzUEJe8LwWJCooJitWhmeVUXFuERwa2t6HSyzjuPBvQEZY3UkegpyQsyUakStenCQsqgL7qb",
  "key10": "AQZ5X6w4HA7yf5dcMspA7ApXERWLSrtWDV38612WWrprRcfxFaBv8QqMP2ABBa7J5HeAjzcCjBZ1Ugp1Up3Uxv6",
  "key11": "3HzV9G8RcSvYnbLaM2CrK12qQaYpATktUc9TmE1Su5CpB8CmB4EPySwBN3r1DiFQ6GZuDcwEBSQ23RoxRRoKk5LD",
  "key12": "5qgC24fBFcrmJejAKSNb2QfH3qAKKBQFCT6BmgYjzEGhpMqScwWkNDTECmvvmovr2eJzhzXS67xVk1cbBxFZohzG",
  "key13": "3ySMns4qxjwABzAatB91EQVCTpdMUXJSzETo7nXL9XpvKjjhZ7mPP7pz4o93gm8tdXjkkqM7ydhpcjBQCja2zXab",
  "key14": "2S65Mz7AY6U65Jvsv9te1uHYNqujrrRFXVWPNAcCzQWH4SozYD1tryeKnVkJandGaHUce18FFVaAmph2DvkXvZh5",
  "key15": "64yjsJRJ6ouZK1dtcV6hSNR79aWMFEmHVwiH9YfPE8vm2WSh8B9PocpRvgY1GvdYLChRyFwt8yBZNN6VAYoYQm8T",
  "key16": "L8MMsudPPbL6vYJJ67W9bgbN1639Apu4Po172xd4bqkFHCg7TU6Fo63EuqQMRv5MgsB6uXv5tCCj5eM7RRCX29N",
  "key17": "5HG7yP312Qr4ZuD2jzqPBotJwrSbLPjKQntL1tw2u4P8Ta8QHhJp7oxPQwGDKJyUq4dr3dDW7SC7e963gKUG6j1p",
  "key18": "5BjJ1H6qMgj8gFNpmBXvxGGTpJ7bbgmwfJZjrMepHUQ3aXPwmcDBsqncFTAnFGBZKgJkuCYLgjTrhBPX3MVtKzT2",
  "key19": "vtXUwcW6Kg3CatrEJ1MsufyTMdSpb5aCNYoZs11945Yoxb9dgkeF1C7EWKt6sjmPBq64oU8XMrFdGDsNsQ1Uc4H",
  "key20": "2i86Kj3ATi5ckYqvaa3dKDMv6dkZtaREHHj8BX7zqrKt98kVo9frM1JUrkoftng3gPd9UTpbZH9DgBQvHCk2DxoM",
  "key21": "2GdtX8DrSLT6LJufoFXf387XHayjrUmAbia7HdTRHKRwNwHAPrWECsz6CrFPm3abQTsbAL3G6BsvZptGChiBbzzq",
  "key22": "5EpEoqC8EUGhLUoTkWjg3YjJvMyo2aTgsq5fXALVzE9boP2d1PLVqaMVJV92Vj3RHJG5ByVHiFxwwPTTyNdejojY",
  "key23": "4Wzvekb3gSGU8JaYsUnMapQ9uovpGvyU3Wsw32BvLhaGEyBRxjFe3ZihFvb5GHtmAhx6JRWe6i3UD8WFECZ7jvoJ",
  "key24": "4eK7mrwgzCnmWbgNmM9rFNLaKa9ZXP4KujX33bWs3a8rb3VKWTP7QWSxKPhMpKH3KFmMZ21XJXTQsum8yAL5r9MU",
  "key25": "3575nnaHFeja9KXttPiUBAcCsjCfXyEyAvW2YUwp1s4YjTZFHLsT6zhTmMX1PcMjsk3wfwHWQLssBtrL1zFzKADN"
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
