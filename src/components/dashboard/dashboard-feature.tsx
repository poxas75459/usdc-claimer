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
    "38QKaBkMB7B1L3uHVcWwWDG2kFiVTjy8zDV6iQQozyET3RAPSM2uwFHf4AXMCRedmwD9HJix8Rw2UztQ6iihbvwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2biP199SfWUf47JFtktZVYtCFcJ1PEVKcc58NndqKJwSTahR7y1YzU61HUvQk78SKHtU2EUtiwpDVsWAqpJMsmcn",
  "key1": "3tNR69xi2zW3aDccKbpDtQsGohyXkTCU2LJgJ5c8b14v89R7rypRNena1RfG6ynNWsHpwTSAVtAEs3Fef9wh6sFF",
  "key2": "4GR2DRUPMKKoLXCqqJT5ZYe9XCD7W9qJrECkkNUQJs7fYr9sQrNJJpSjL5JauLYKg97zW2bHHTho8ynTx6zKLmwZ",
  "key3": "KGuhrpsxTWC86KLrTze89puPdxHX5VBovSLdy2EBAX91Rgu6froLH2X9wUM4KMgWz4ep9Sb6NeFHso5DWfugMCa",
  "key4": "4JNWDvYA3Kw1pj24jdCG5ygra6YtMG9W7aFfREPutZBvnscVt1D1eohVDoD4Y7BpWXBBjctUKxoGv9DsG6XCFbbW",
  "key5": "5wp5Dpdt78Wz8Z2QzTAf2vwvF31GzvNRjXv7VBWkHHBPDKbKgiQ2RFifVfpV54f5YntF3Hs2hER8RADBxtai181Q",
  "key6": "2Sdam8LU4kTm79iEL3D7vLu78kWFnXEzhHdwZgczDM3fiTBytruEeEoft286eDY3wCQL1HC253GNmJLVQE3gK6nT",
  "key7": "2cVFi6YvzYr1CiaF8wYTstPFsmAaDS3BhFmJTRMzyR7DjaVqkHrCZAfxFPDrieK1K5efGFnimDMUynFcweTW78Px",
  "key8": "4u7Tff5TbyoCS78nNRoFgr2rCfnkBAeqi81dumSCy8NKMaj7Ly8X7jXoLM8UkkpMHeprqju17mGA5tkzK5ATv73q",
  "key9": "4p49ZQQJ6mdCujD5jNiFqSX7DzjfU8gq7PFh3TGxvDc2DBRvDTrnrj7kTSNux7fLn2xWBdCTRF65LA4PLhz9gJxj",
  "key10": "5mq58nNMXuf8CgoeEBKwA274Gm7uNrkMvd8MSABFMdSXpTjyiJQn5ckDsMLtLZ5aqasDFFBfrTytbDcxE8PkX2xs",
  "key11": "2Y7BgqcjmgGYcx7UybrkShEU8sdx6S2eU5hPgrLj1FknoWZP59BWMxqzGJ4TP8Xg9xEegKPat8xkNkrqELjyrKT6",
  "key12": "52wtB9hs6qY4W8pUtfFepfDxYTJfZLERq6eP5mPz6ATc1gsKJmbnA1yZ9bPzLDJ51cSjTNu8JyHN3JR99GmyWGU4",
  "key13": "5jPYvtAdfcJKktCEi8Py65T9rDdo5j1PoKE9q2LDLoAS3sMmzvznMyChnUoyHGuWuvjJ5iTfvogVFZK4dYkbh8jt",
  "key14": "23TnC3tL9NrANUEWR7Gx4T612cxbXwuujGNRLMmVW7ErM7NHNfyfe7NJQJGE9zex3MuspHWw1bgXmyURgLm3CYXC",
  "key15": "5YXME8WEq7qhX6YUdWBcoAKkHJTyP8xmQxctDanxeh8YQh76CQYwc9E8MhkrNSqnbVYbMH2UTkRavAsWMoD9fShX",
  "key16": "4nFokqvcixJGqNxcaqXv2CuQ1quu1nXpZMgBcmr4j62xizw6mYrA2sBsYXdtWrBo8HBqAKHP398pNwkyHht5vjr3",
  "key17": "2oWuYXqu2EfHz9L7nVnyPFGmrsk4wuxCwVbftkFmj6RzPFfy94Ybw7m5bnsDh4XN4TuLwxbTQrGKTz9zAubns4ix",
  "key18": "2d7PESfWsw3zZB4g2uB5XJK7F4vu981QJYKpdsW9rioTNAN3oAQw4KSwsK5bTkNAw8Utm9HHYE6gU6HAmy7zvQKu",
  "key19": "SFMYr1iRRQK7xL1rVmpELRTm4NtWgWcsHAjMWThL9jHZpsRJWwVQNSNYt21iMK4RdSmv4DUqHcFSAV5ZaWMJcg6",
  "key20": "2eKnZKKwGsGo64kMwvw4Tzqz5Xz1VdMABs6ttsAHaFA4JEJQ8nQY7qSXriXQU5LQw2WskQeifs1FZcTqgVfktBPG",
  "key21": "4McFmiRVdU62kCnUN7qR3fKhUHVJUt3RaSKbcrnofDueyTKM938akw949fBqSzBeQtm27uAUWe76srdRvfyZbSwf",
  "key22": "fTT8P2g8oAxH4ARNQmRbsbKupmKnph7ydHz6GzStJiQn1nHA7X6L3cXyzMu1UUhK5oSqH7RvWnZC1KKGxFPfLYg",
  "key23": "2TwrE3HTu1nBbKxLAngYAx8DkNsbPNTv5S5oC3SE5DrTRYD3d3vo7YXQum1hpuwYvkzwbneNeGyUY5P4tArDXhHS",
  "key24": "5SsBzfdjJdRLwX1HDZCE5EDWB3FmVnczea4PFoyMUPkHerAZGgHPmD9zJyZV3TaDigwHGDsqr3i79Dc9fPUD2e5V",
  "key25": "52bEsxjZmbBxUvanQ8wrifQBLBD9j2A9oXgdL86ZZbwM4JypKhvyDcsW7dreBf89VNpiJmAxGoQ66mhAfmeCi54o",
  "key26": "3q455j1E8K6hJ4yo9HrX7sMwfEGQooiv5Jp4ajjdZPS9bnpNManMzpzD2ZhC184h8h4P6Qgh53f8PwSfwCbriYKH",
  "key27": "5PYnnGDqqUiGgzc1FBLU6bw6ZeYPGLR5xDxG3yfuaZB4ekJbdTEfAa8BBLf7VmBPJ3EpiKXjYE9wiqBh42RtpNpE",
  "key28": "56ndVfZqrEwZsJQbAq9dQVLPqaz9JfxFKoWZtrBBR3H4yFrdzKqFUKGC95yATsGpYR9jrjz1hLeeDfuVc3Jtawbm",
  "key29": "5jz7gN5ZaJD3KDW7ygTC9U48q2sgfJrBTfv2urxqFTHbUofUEGDRkPkBtqcpkZJ47Tw88UEkQVKifH6xmDv1Kj8o",
  "key30": "5hjJRZUbfcKBV99jiukuL8LZbEiWwb3G46uwTnqs1mF9mueTEvoakMuF2SQv9MKownpnxwzTAiuBxStt4wx51qhB",
  "key31": "62xMnmAzw3JsUH46feRGS2ZR4NTwRa5GF7e5WCoVRh7aWqYRkQXNBAJh64EoqQHsrJ2mo1WqgQ9U255uAc4tXfq4",
  "key32": "46oYgF6yZZYXMB2E8aXm8oagvXTx4SoC872Q4ec2csLTBJXt6UJvBeEEuJpeFhMQFGpJeJp9JGbx9LZYGknich7g",
  "key33": "3aJ5iN64G9JCJ4oGdRVvjNh9NnKAeJwp8gyWSCaxUFa1bqpJAhRQTKwVcBjiCsHoq5Dhi8AAd4ZtdeeUCxWaEVr9",
  "key34": "5t87tZBpstNuxbZZ6GVe1C6YqQT6Csfb8ne1cah93UJXJ4937uf2XGgNgzKetTP1Ze99ExramUNGYShAWrU4fcyA",
  "key35": "4EGFvWbz5SmxEKm8wFDSz3XFjxnmAEz6jCgeA717hHBsxBt58bXZ1Mg7KciNw2dGfauQSSNDzMJqhvCGVHE5LeAT",
  "key36": "2cfwVxdQFv95zYtZ1BR5A82ks99u416c1WRFqoRHz5wjTTi8Mc3QEeJX338spkUBSeHAgXo8rLB4KZNZ79s6deFo",
  "key37": "2fG4mkza9aDKh4FZV4HpbCUsPGio5TazKgcKnYX3aW4mv9VQmb4girFNcw3ebBthF8f42gi1TgvDHaRh58vf3zjx"
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
