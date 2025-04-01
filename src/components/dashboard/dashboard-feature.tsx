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
    "54et1K99VL3dYqQZPgpTaZWUrvUwW3b34SPGGrEsqwCnjajk8AcyXh6bo7i4kRrmS755UMaKvT1uzAjp9D6ycLiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6rwcuG4eyhSAPWacdxojfz5dwSW8E45udFe5zDczjL9737CXzywiyRURt9MGSGqN2y3HMasUvtFqW4GJ5UmgCQ",
  "key1": "3PXvyh7XYw4XAmxxmrsf6Xu31JMdeSXNvqWXKe44WuLWwbGWdLF7vLooRUi5nH5exRWDVyPQkbQeFchhdkcTKc84",
  "key2": "y9nMFAaZxNnP37jTg2skkgCCXY8cYd77BQYdZDeNdPjVKW1zF2ceKQzhSRBSPQfUh7oR7H4jv2MuiBJ3MPdBzAx",
  "key3": "2mqYvgVDga1Mqgby4QKbpJ13SuatnucGsR3hDeDyJ168c5soPwGPubhBkm9uwtaSN2rHUpXG8mrLujmYakfayYd3",
  "key4": "yGq94Pvh9B5UZuDsiVo3kceHee7gv1atjPhou5G9BiEhbWDwy2CKTNiJpqYzrn1hzCDAzLdF7c8uYwj4wKsiD9R",
  "key5": "5p5XtZMay83LSUjg7SP3HtejehKdQCbGyN47NEMfjBB3ZU4h92qyKSkM6fMjqdfg2gyRLLrsMdmoAnxWkhFRHdQT",
  "key6": "3WttR3FsLnth8dVYUwMCaf8supKR1kJSEtbauagxt9TyWgkZro2BLw1GjXegxsf3RF6JWRwYya2xcDonUWiqyodK",
  "key7": "5AvhQmwfchK4SMaRAde7RhaURXALx2QuxuradTT5EcdNGhAR2G3PHW4AayaAJ9WHKZoBHY5131SRF2gs2LY1f89q",
  "key8": "5uymnjHBVeGvET9chjkZPkWvbBnbqX8dK2k9vJgDKhjCf8ZkSfzGhGJMcLi6f2djiouqGPDVFCt5ENpDWZZ8wm98",
  "key9": "3GppRebxt5Mpo7Ef49VkRF36NPhvYkWyrusQQDNSwD5JTtoGcfosVPifDKC4fw2RvxCVsWXAwqcLe2YMmL4BK11s",
  "key10": "4BLgvAihbuMQN7DQjRM4WNjqhm4W3XVdhX51yaYb335bdKov6nrT1MfezibDfGDPNSZiDXWDRas5e3DH1Wv2RBhW",
  "key11": "3D1wgWpaj28z1XPMGomb2ELn823bDefm2fw7jXfMUZExDnP8MDHK4z29eSNFCgBLWynTgwHspwDhvKHqh6oy51QP",
  "key12": "2P5w8jC2tqrwSiaTXUA8hzs3GCgNAjKGNFyRJobRCyzn6st7o5PaEcQvfacYMmGeMondKwwMpS5YemrRUBaDYTqV",
  "key13": "3gyQJP1hD1UYrvt3FfiHc8R3WzvzaqS9dPbzfNHD9fPudHmA6kGTrmMMd97NPGyoyiJteNDwPEqroZXLZ2ipzMYS",
  "key14": "43CfdAfCZHnUsiUPQ6DWrUPm7CcCdDHs72NcqPdUjr6SFcMMw8mmx27v7iDoqCtARuBj7HKpFk4muqJJFHFKdX7u",
  "key15": "2yyJsa9V9ZMD73SrwruMK2tTJXVnJGecLwzrnFXZBvU1AjduPsWoskGwQerZvnqSeYokruEzQjqMncxXvtKr6Q8S",
  "key16": "41xTSmb7FQScxeferE9BtRiGAFrzxtFqTx5WSz3vRZV7u3zvamXf2EcmsKrds8Xm8rPRGrch5jkjAEqv9DxUUxUp",
  "key17": "4VVaMSRu5EwdUbNSMzBeagb9P9JqxFnC5tXq9MFGpu9UgBBmuHdCV5RHbmFFBhaoavXGEcwdB8TQTAptDPBUuaJn",
  "key18": "5KkbSGDMQswsgevZjbVpPqScSPwaMpcNrGqV2uSA8wN5FxqC1V8oCHM8fzGf9BfxFPL7q7pY6DTFb7bEBXouEqM8",
  "key19": "64RAx4opGLSzgBHzY6zqAfg85ja52EZAaWsdEuGcEDCFJBLy2mkFiKD5U6xqhbSPYCcpzyUZsTsp3P5psNJQn57W",
  "key20": "feMsQ3J5vZSZMvN8oGSQz7FZAwuLpQh1AuApZ8Khe4MYLqikyvn1zvkE69ioZnvmHB4vbpdSUGpPJ6VoibTJ7tp",
  "key21": "4tMZV8T9obxyCnfHRD2QapbDWBHFVqqu5SRsRynnV7rWjWLYgBcaUpRZvjCM6yxoz3qnmv9t2wY9G7N9DxVMMo5y",
  "key22": "367TecmMP8sM6D1GGkhxY8kCx3KFpiPE7ByMgwJ2SjVY6rYdAGM4PGrCAFdfSJA1aXozMYBy2Mk4Fmn7iXHVQEN7",
  "key23": "2yhtnRZahadA7EaobynPQE9FfLs6Vy5w8WWaYdWQmQ2pc82theLLmGqoLEbKw52682VjTfddzzJNLu7VsuNTGFQX",
  "key24": "LtL4a1XxzXK11e3kMbbF2zx6noJnPTbDogxv1hUQGMmf9ZZtS5AsymYxQAMg58BsYHUeL4a5qFiwtMbrYg4XqpW",
  "key25": "5UxhqBpq5WpyRGQqyj81cyP8kAg3PRGUpFFntrf1idCbZAy9L5FzLkDhf9zLhiMNUFFbXqzQh6PyrksCxVuen8MR",
  "key26": "59STGxReN4BmrRKSXP2TsWt5qgTPEuZJnR7WvfxFt6QEb2LFBSPyVo3RjhsKDKS6YHVt2CMnbFvFuvSpsCJbZgGT",
  "key27": "7euvnQQR8WjLF4q1LiviTxk9GG2BoPVbEEJQYKoAMwsmgQJHx9MTTJcUa9X6SNULJ8txppXZnTsUtY4QXoydoan",
  "key28": "4yCRYShYjrYkEAXszNBnvKeLgQYEm2XBrvRLxQrjkLJTFQV6gKbvZen4p9fywPKYSxj6wLpJhc4k92qzRW8hqK2T",
  "key29": "5LW72KfjCkP2k2p5uJ1QV6bAaXiyqjPmLv6VBBjP5pRF6au8DQg5Xssev3YzWYAyWZJWsvDUMqLKRZDEKuajZ72T",
  "key30": "jZmoVzDurfQVCRDoWHzBdSczhDHXvcH82wJTtCz7S75FvumpxpZvdg3MfAEBZH4a4hzUVEBjzbeMtn6Kxujbyra",
  "key31": "4mu3KWp13cuYaYdXBrYfkjCwjrDpmWMnTCPEjndPk88kcRDRL2JyungP8rveCAQYFG4xW4P83dGas4nAiVszxy96",
  "key32": "kE2YZtF8QDCHF8tFpBazEnAT87mHQtCZwBGYuKvdjvZNXrcRTx3EdeqxvV8YaEGQoQbxXYTkkqRQ3CyJNBcRTwk",
  "key33": "2YsK6uikwAV4tkfDega7tWohSUnpPxPqQZpZ68c1ipvgsVmWajuTaJ9BdenrMHWcY7qem7byKyxHFszLYMVAdjbv",
  "key34": "3xMMPougwwfxsD32upFJxh2A3vN2Yo8jVdPMyPMwVDaGXXLcUi2Bfih3AqH1yZUhbkCvr5wD3NtYqaFGWcgAi7to",
  "key35": "2YF1VZUuwi2TWNnyHRLNmnaACV1uqE5TRZqgRxctkh77Xkzp1n74mFFro3VjyKSZt9uouK7jW2PqkrT4eScpSWtM",
  "key36": "4aU7GJMv9x3RFKDrCZ32PGBCYsYb6oqR3wc6Ak7piGj55ac3FEjCDMgKDMjgEQiPX6iZh1FBGCR6HatdRimGBYdj",
  "key37": "4Magur5tfSgHGYexitBGE1PUVNbi7aEdApqgCdEdzZCYwgnr8MNReNFKhNbXrFxdvstYHWwmMK3bx9HbEtCP5Etp"
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
