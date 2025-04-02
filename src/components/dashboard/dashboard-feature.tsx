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
    "3sAPnMNN2s87tX33XsEfbWruKQtVPoNsbAHhBaP7tjQ3rsWjLwAUBn1FxC1yaZ9vHhuwArqRgXvPm8kEKKPnbuRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQwGC4v31svR39GygL3HNu5A5pU9zDktmGwXD3BTa7YajsPEreSQydShwwT8BWHraDoBrfKo3DiYhTNFJ2rfZYE",
  "key1": "4NacGJfF2fqPqLKszLZRedqgAKYSibFYPk5ZUtouvtnwpw4XA5Pe7NQC7LSpiri6bBPUEhHsabgSZ3wQoE4hmnnr",
  "key2": "4rneKtf4tUJWBXSHjiwfQtUPNJHstzWZBDoVcYVv4qtMQ7y27ZBPnQEx2mSABEKhrQzQP9ZYjjTCGKYscUTG9NTQ",
  "key3": "M1zLp5FxhtdUTN2SBWRhQBaC3U7bMPmExtaSGABDurJxU7PavG1gY2ZzTm3Jq9x8gseR11kVitGLS7uU8QknKjg",
  "key4": "4xqcpT4a91itUfRNo2XqNtYGY8oE5rYKVie9oCLQg8j5VabWqAwyYr9yZk55jm7SmTTq7EzoZTcrF2P18EHEb9RG",
  "key5": "5xPLD7ZD8vrJbmHPoyV6Gh8FmNe2KKUVrt7sQwa8qAmv9cAxgeEVq4W7zX4ELYyzFpsqBsYAWeBJ5Vjbm2ZcRuhF",
  "key6": "2AU9Ba5AW7C2gdPER2eS9D4za71e76TGVMZGW4QGda5kEpt1DsyKGPY1w9xcgWCDb7tL5ANmkSVqfxMw2Sp5seqw",
  "key7": "sfCHUCz3umDzb1MyPfSEiZKoM3zHfBPPFLJdSyutXjZc9tWZdRtP4mBANWgw1cv4exLFj3TpaS9oSs39JtF7mLS",
  "key8": "4cV8RQU7gcfuMVxS1nanw85ZFXxW3Kgmjcgr1KNJxMNVwA5Qu6pkrgNAYrv4n59uBqx45bJshqdiYMw7AeR4Qmdk",
  "key9": "5gPf8D1HENTCyyi4RBVPDeMupgVQamKpoJjPpxv2HrcyqQivAUsgA5Nt4nqyuAMakPAqFZmp6jAcMxVqFudNmd7s",
  "key10": "2yamqhp5PDFFhJdT15iGsPJaQWbeuXyBzEEjHJo2NQbFJeqA1vR3yadxpqQu6mbmh79E5dj1FGRpw3p82rHRNxb8",
  "key11": "2TQoPRwhXCHZQK7nPnTtwvi7AqD4gjxtRhmSF6LiRMp137hJQNqvPzm8pgDWEPwXgbUG5orLqdRFa6aojivB7QLY",
  "key12": "2gDnupZFJDBPhPjCAqXaGmfhdkuXS5j8AmMqaL1V2T5QDiX9PyqVbwbs9ecCDAbhwPZTEbmCujU7j1Mdi8aPVVgf",
  "key13": "XPJZFXWpqhwnqvxTWGnEGarcLJtp2kms4mCpwrL3etB5J1AVqCCTRtqSnsH9V93boJ4HmJXgJuozeAaVJCugzsu",
  "key14": "1YrnGZijGyYELzQoxAh4A3y1kvZQsVJBXbNknbwtWipv84s4paBPBhLgsftWSSt1ZFdTpVwpAu5cELxunr1my1A",
  "key15": "2MAP966vmoniLoAK7Nb6WFvCp8iFQ1E7moLU4VgVvbZvQeBrCQD5nyY2a3jtUQV9bqn47pN2Y1pfvnoLZPr9z4EZ",
  "key16": "tdWSKZLUqgFBp5MiT7hfxuGvArpy2gtANzzHzsLvHxYcy6TJPNsjpLa8gZWNZDu8HS237wwyqGTmhToFnKqRdAD",
  "key17": "zcjwZ6NFtx5y8Sh5FqDNTiNtFRYYsoSFwdVpgT2ZWedhijTnWayBYYgooKcsheTmneDRm6Na35kGuEfycYmGhJQ",
  "key18": "2XpPbHoJdFnTAcgUrMyWXeuV2MEY8wG2zFNoLKbXSfBvenVNVCXWYDNFGtNAUUa5D6dvmwHf2vWiAkpeKSzsvco",
  "key19": "Cie33XqXBt3jjKs1jvN1imLA4FgYqP24w1f9TSiPzH8tHmsvvQJGonqmeBvkAYSyyS9uF9xFvTwXqhv2gGDVPwF",
  "key20": "pHSFwHzLvqkDjtjNK9CCnBKfCtzUA3M4Mi9HZ3ppCdqR1DMpzwDTkDeAJwC1bKMNXRLh9bUxQwAR3Mzh9mywz8h",
  "key21": "43iYEs14pJVhYKFfAq7EzvqmwXnedT84RftugYzYAyDqfu84qsuTN76tRUJaf3cWv2obuA5M9uva2jhzYeKmSaEs",
  "key22": "5qPPcP75Rh1F91FFcEUEDWazqTg1KLkQ9T2kxUrNKGQJMPAXgGVztwZHyzfwaKVANKGUsrDgGnvFxg4cEY1iAwWG",
  "key23": "5Qit8WFNevP7rDdeN3yKEZmc3v3P3bDEPi9tMQFbqddLpc6otPwaaVQHYt8FvRiCmtjKQtwj7bgdKHYALAsaA6xa",
  "key24": "w8cc5fbx9QHBSy1FUjCjSyLhGgUPo9UYN21zdikDtWMCYMgNNMdFCpD6hR7zcFKpcC3zMvjpcJTazN8zJZAk73K"
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
