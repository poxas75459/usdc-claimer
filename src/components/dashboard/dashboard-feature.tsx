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
    "3YFV4t3dhk5jRvogeg5GRRcGdqAkT7DXJF4NGXGRcSFsTyamreWp7Z8KbH1BWn2P1YYCq9FJHEcrQyiXY5KtdoN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfeU6BXrMLv2SSphEr2LDLtuvLeHs8UGvJEqTEWVM4bBdgPovDL9i5pZ3gW9aAEAyPHFqR9CpvV2vhL2WjufVwW",
  "key1": "4WA2wBN9rZDnKPGddeQVqdepHY3PUvZSfSDeSpaErTvsJjPzAh84GVQMDMqQWsQm71FbDqdEHSn6VW1fYSSa99yu",
  "key2": "22xHM6Fg5DgeoTQCkLH95uCANsyXE1Yg422exAqqjLww6pTomL4NCqHCAow1iASV4DBufzasSxQZCXstb4dDPita",
  "key3": "4jhrwTnCtTMZxkiNEVbjQRZzKWKtyn1cqzyGA8HZL6RexaZYCxJ98ho4gAipvacjGnfWG18FBri2Q8BzeiAroWyx",
  "key4": "45239axJkZhz4iFNH9QxTPAQYVWzET7RH3fRP2dU8q5QQqzx89FwDBJfw5yqtXtUzBjofb8dKfs5BC64Sb22yXky",
  "key5": "AghLatxp7qHUaSf4oY5wt58sfsbCN6HfLh4HG9oPK1UN5N3XD1BMi8E999U7LvgjoDScRvri5FKYiLAR1TYhuuQ",
  "key6": "3UUmsnjT8STsuQUGDGRvsfhsQKZkP7dEyoHrG2MAJeR45avDWtccrHC5MRX9DdTxwycVks4jN9kD2acDzeK5e6X4",
  "key7": "xBVmmJqEyEzUcgNHTnjo81tnmawugTRpBTgqUKzQhF6a8nK3JUenLK27zQaYrK9LNDF2drTPcXgz5TrHzUMrBNQ",
  "key8": "CMXgAxZzJVLgdRKBAjmDWmjHPz56WLgEUB7oNzK6ZkF7niaf2BLenfNgUTqB8oPTrxkGKqwrxiJGHYPLwa5GoDg",
  "key9": "3mWfFzLqsCqYWnVWJj1kQrM9Z5TFomGQoCMdh17eu3JnR4T5JkfReBTUNcobnRze7WMUmPVShaGQ25cVK1dZUEhC",
  "key10": "2Lv1mxWd5WEu419ptfAAGvCYEVZd9kzcXSJzPQmtLChveYdbB3is2gmT2eonDES7U96UHQDWBds7JwvZodh9hD1b",
  "key11": "3x1vMn9TyPdWJnF53qsDjjpw529kYpKmK4yEx3RfhR4ff1n9U6Z7v3G9ZLWCfgRF8a1gjmqi5rSBghBYQCCrA1Sa",
  "key12": "3HkQ3oxJ5UCv5JRXAAxBq7it44BcbRLE2QHpQ4cSYCuT4xXzozYan5tPUfZe76x1wNjYnXnCh5VUxfPtfDGWz7cT",
  "key13": "3JsJNRJ7W1GVjswrFUzX53k2Sm8D287vf7E4ACFuixWwhyaV7sa6UjtmXYWUaC8qQt5pJgoFLp1X9ad3T94rUZFX",
  "key14": "U69qgQtywQyKfYY5X8mBjzkAyjUWHhTg4wsAtwDg1v3yoqWuZ6HCteL2sRP5mnJ9Mp675ZVbdbC8x5mXWxnB1B9",
  "key15": "5TCmepdBWyXyPricgsxWTE8zvadYsj8nq4WKr3V9quFB6kAbLgQBxiVdG4JjcsVFAXQT4ZQFkHnYMfewZcPPv2kz",
  "key16": "5yBhCG7G7Fj3JuDjqvtLXXJEKxF4rGvuYqkBbSdSDqjfFoLnTAEyPYFYQGyX16pS3LAt2YEa4D5GJSkkAqv1gmCH",
  "key17": "53MtWorvoHNiZCx8xBYsjZxNCw3nuW6NDn4JUVxtJ5haKcVMQm5ydZ4PFFWJPGQ2ior35RiS32adubAy2q3pF7fQ",
  "key18": "5jKJDoGT23gD3jYaUGeBScgAAZEAuVzHR3V47zNrcqCHAvVfWXij3UNuMissdw7yyCogK5DVZzgoEwAG9PC6AeaE",
  "key19": "3Ezh71JYALpH4Fc8MvyVDAX5RRChv5nyYR6XR1usqv3woT8Z2P6Z6Ppv2BEQ5YSAiHXfH98GbBuczuNCrKA4AzJn",
  "key20": "3FxRsvCLixnhSz6boXdPtvvuVcjvTewWwjfEbDnF5HrUaBBo7hiZDqKiDPQH5SW6NmLeEgJ4kzHGqv2gpq69EW5H",
  "key21": "43sYdqxTdYd8rVjVezVZ6tv1FD9a8nbSiTybMms9tKSWXZwtWZoUrMUS9UXnf6Ue9XeU8zQbY8GD7rUUeCeEUpiY",
  "key22": "JTiBuQDs6nhAbNgVgdiELXvoT2MU2D5NHUK2eTBMEMGFhMoTXBc7Rn3UfgiAwMv3SfQF8PRqTXaBvzJ1HJK3kXG",
  "key23": "5nt4gRrizRmbcNEzpeELdd1BhXDicEAsamvAEoALagzVJTh1Gu6FT8R4Gac4D19ntLx6CsDMhGHRvymySWjwrsDS",
  "key24": "p49fo7XZzYHt3xivuXmKDt1zkaeQZCxUwQwPtQdGsFrqtfF4w3r5nknUtZpPPVdWHAVyNeC4eTGyT91usJo3yGu",
  "key25": "5vAcVvMd8n2yw32qXLj9Jf66577wbXXCUbMGRQawpuMa9wkq9iCsxTHpvg7pQC34AgPDpTGbZmmMzAUSRjJVSYu9",
  "key26": "hnEqLVtQp2qKw91YFmMru1aEMMAJrac28Hc8XecfB7MZA9UKRfy7gnBdsghkWegiCEDFqE2Bv8Yij2BLVqG3jTq",
  "key27": "48MqdELvd9GA6t4VcGdF9zGp86uUyZrDx64koTVgNde8re58v9AsteXMKZ7MK2uyR2bjxhojKFud3cjLsvGEb2n4"
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
