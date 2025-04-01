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
    "49BvnvjRzqcxd5z5ZDpEXGcmdpNbugtnD9aVirtyqChwvgmE3aNdR2Y6L52NjGcZiZadENPxFB9LgXLMyH9Q7zNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KjxS4AGbpcz6MVxg42nzby95TZanR8CX2ukTSPkZUN8m3zMb5p7NRrPTB8H33CuKcaPsf6MscqWiZv5dYdkgpgp",
  "key1": "SruZtUexDWYLx43eF9ZCqL8xqY81fwcbKsZbHA1exkxybjFsH6c5u8Wbm6mHWUDmzS2TVCweqWnohUb3UFaXXt7",
  "key2": "2mpAcW8qj42CRkBY3X9Kx91UeRy7hu6GQYDRn5BZMkWci9UFM2aDht68SPbW2B5WY2QFp4hrqeCZSMK8KWu8Koy",
  "key3": "2ExojbyCqjoYHTZsKQXJvyRpfMTRP6wXM8icVnL8eZhCfZgaznVGvbTPkKu8vzL7GJ2LSkA5hbrBpiXNcpMjzq5P",
  "key4": "5XvuGckWjEVNKFiLkjbNvS2jYWax3AXz7EL6HeNjdiRpTt8stTLo8m1NgfQawyzGPykRhojxotAzWEVTZeyf9gsy",
  "key5": "fD6oLkUx1sxHYE6uKws551bf2sHPKTiQdCKizA694ZP7M47uvAMwt9YsNCwhJubg9fpHTwRenTxjUpx54ZFd8Am",
  "key6": "4p81zHjh76BMknM6bzu17UhiJAbWnmF2ef1RbXJdVPg7KSTe5TAn57HDqumTepG8BX8mfmbf1oVhGbp5mYMfdP6k",
  "key7": "5AGsVTyFHvH4WaTwoG1ZLP4m1hsqZyKUqJMKcoxTWYzxKCjBAbGKTZrQpVX8chSiDfGLbsad5JEQ8F2WvmjZ1vWp",
  "key8": "5SLLfVT3z9hSJmVSaRNVX1CBPJk4MrLqRacrfjRY3kU8i8z2Z6LFgJHSitHnXCnq32B8m33KHc23iY1zBfZNJe4d",
  "key9": "4RNyoT1KZfstGf25rXfRK4jfVU5kzuw582Ugxyj99bchWRr4HSqhpS1BD4LY6sBCeQWZv1jPRwxXLd3NoBYrqztL",
  "key10": "2sTtEWuCrirsoZxwzokBtCLPZvYFsbt8iUDtEXakMo75DsHb3TanhTUPDnKWP3xzQHxPaRxYVhUtxafF8uh2HuaD",
  "key11": "2PVDrWSxnG58sGnhs4NwsDkAsQmnFRxY7kKXG9Hap5agBfEdY2DV9AdF7CfUmQPZvDhDwpuWrNz1nUm6HjezJwrB",
  "key12": "48RVJNvRnupZjhdg2K9wg3LewMakd9qappWMH1S2jVaj8cA7YkNtHhpP2QFcFYaUpzKjnr6PzMcB3ARnZokdRNR5",
  "key13": "J3oiEYRWuyycnJD8zr9PWCxYJN9KUbkEbsDNeQbj6uFPvnfxcfagbw3UZ2iDtpuq2Huqvzcy9NUFinvpwDPwCYH",
  "key14": "5TrR48Yihjc8BYntJmdY1iGZYB2Yu7GcuQtqiJwigDjgU42aXBQvLmmj8CKggNufSSTWwBwXDNPfdoE2WWCjCUU6",
  "key15": "ZkBmaLcGmQjDBWc3Mjj8HfnthdgnEuikztDBeFwriTh7vmHZZj5GEUua4V6gajQeZ5YLuikab4SFaxFQnSty1q7",
  "key16": "3oZJJv4W8XuLjewnLFhQwk8bFPrjTPLwyb9y1FXedMxZ9yZatEuZodyP3fJGYe275w1oNTKyQGs8pogENaDQX1ZA",
  "key17": "5Sd6smLiFXbyDeEYPhkefVg1dPkhhx4Nyc36JWWjWTp36jibSt4rzhQ9GTuxqeuNcq9ike9La1XPTrsECjdruid6",
  "key18": "2U7HuUxaMz9uDQ8AGFUPWBWUQETEqS6CWYQoxMFPKEn5DWWquWPUtgNdEHhp6zp9GeDcFxBmzJMaKoygdH3WaVXU",
  "key19": "2Jmo8pwGh3bYtVzZPhuNGvcHGvTYJBgx2EHy1bwhswBtRZDPjLwDWZjUZDBSPGnUva2HbX3v1V5wZyuFurq3S6Sz",
  "key20": "37vneADxF8tdM63izvK8hTYuoovXJnbf1Ei6r2K6s5dxN73nHS7QTjDsNRBFhUFM466yxdPfp6DmDbXFVEMLKT29",
  "key21": "5SCkSUtrD3wZDpAWhC8NP8p8wpqG8tBUuLLB2XX9RDt8E1y7peADkieRNgEsuzKzdjr3v9cyjpGTH6zzygY7kwXP",
  "key22": "4SF8fzyE26veaCEWACQ9ZzTAa2VHTQiK8d5cABoPLfK37N5xNekKTR3cHfYCy4WHGK2PUzqwLNSHkwistX7yh8NT",
  "key23": "4ujga9cHyLvaJ8sxC3X7eEXhY7fYuTLZkVFaxYoiDNbYQ29mzVSeso93d6TdbhhVMf76keG4SuAqZTutegukDFkE",
  "key24": "M5PXyHDifwH9ZtkSTUwAPhpt5g1ngFvuVSYZjomhdWGRzQV1GEbymjP1P4FALCLsDtpiCQcD4zFJfECi966ErtM",
  "key25": "53vQbdSXLhThNS7sf1K59XZQAiRzEzHGhUNrKGyVoHB8FAfd4Hg9FjMGVsMt6xnMb29JwnkgNP8hGZFiupDaKpr5",
  "key26": "3jyY6xPoyRrxAZB7sezGjmnjjmY2pVB9SMk1vd6CMCMc4M5mWmV8N42Np2DywxQJtcAjSpYotPT7tCooXJv69nCE"
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
