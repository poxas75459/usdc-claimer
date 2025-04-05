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
    "2fxg5fJSmWg512LsM4wSFgzegsBGB4raW5XKApHXwrV3FaLFwBncArJRZvwdev55Q6P1U4fKGR8wMkxJmk88hCC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xybXktJsLUAcd1XFqzGCxV1PgwWqTf1waDvQRxzUXWWdzczBnmEx2zEksd3SMNpCX2xzMm7kRoC8YU7Mxuk6x6g",
  "key1": "FifCsGGQMUZB5eQFJn8Yk5b5miT6U1Ps4VQ68RxABujZKiGsKzYaD9TUXbgA648TnWtkG6QXnwdJvvoHnxtoU6F",
  "key2": "2Rp88BWRGgfkedgmTaDsFMwcfF9VWav8Qwr95mAcPx8owLbLKRAFdMJdp1sLcuH6qipChWTzGge4Dhrb4UgCVtX5",
  "key3": "4EDTibBx4tBRMWufoJ5ixbRaG4tBK9Zxt6Pb5HTqmpKprG5D26knx8DULpn2jEspkGLGApb4GPB1hWbCRqrQzX23",
  "key4": "5mtSZJEkkv7XA2VwFy4GQ58fMp3eWZH1h7zr4hHPNYqEeg7o6tXABXq133947WdRs7G7acf6MiLzgfKacSCNGrnd",
  "key5": "3N4JnrKmGYsEYD8Fj9EGjisUKBuBzRGA942AhB6JszyLfQrZoJyessNNcg9RXYZQWAmLYBWA4DgnAjj2bvQiJUbP",
  "key6": "4pLcqHNMoa1YMzBDeNWPAtdFgmkJiHYbbVq65fP4JY2s9nXoz4v5Yjgsc4F76A6MBHai569viz1zsUx9Ddby55vL",
  "key7": "5U4pbRe44DQZGRex1rmsfXM8o7rFLScSbAez11RPQyoqD3KWC6zuJmVpHLuc4c6GqTHDCEjCdazmtcP1ynAzqC7G",
  "key8": "4Z7V5mgND7AkzXBzY94FLMx4Rrpg4McupJDShhgmuE7yutL4tsVvYHacWRrgcBKY7jFUzeudLKbciVW8WMRCszi8",
  "key9": "66Qsx6Ujx3YyeEbHWuTzEgJCPkcFpM625kodAGvUqjgh87JGr9aCx7KNDLyWpLpwFQ8QzRvYheaiqKk5Z2KGXMxq",
  "key10": "38CVVrXGR8UvtKikd2djMLCAfsAzPWn4FPhaGKaensgKzq1NHKa5Udi1hH78Je4Jan8Paf9hoD9mMypAs73kVVxN",
  "key11": "3iWco4cy1gm8VeePDTW6Zhmq4aHvbqfr6c2UY3Pha6Tt7URtkwx2Q6eJbi6ry4cmT5wzVYHJ1KkMQPzDtCZyH2RA",
  "key12": "2sBMaDf5ioVQe9q31Gyix7rFB2giVWp1p3bPenZ2NtfmAHggQJSPrNSH6me6gKtEQadUHkBVzDRtGkr9GntPNJtJ",
  "key13": "48uabHR3YediryHz5H5gXgK85VyfHd45oaenNmLEWr54XFM8gwyrfeEFQgHV6Y2mizHJMemJdPt8UZyAsjKG6FQq",
  "key14": "5mt7gqN5NESXb2wkbMQP4wqEhkV4hparDKqpU3ANd4uzKYpCgx3rcQpHhZjEJzs2dsVWgQq8mn7Yhaszh84eYZTf",
  "key15": "4VNbdWiSrbLEXqcsYcfbRjKB8KhAakryL881cM6erB6ak8VUjJdaXQ68wfHiPuG9L8kBv2kAuK4bRBECSSVajXEF",
  "key16": "aimKhnMtyLHhoh65E1Psf8Prb3axMJqJQALyPvHTspDfxwFah84kgDkUbVq9C7gE8i74Qor59aJcWHjqv7ayg4f",
  "key17": "2s4ZjD7TF5WujgC3uxMA9AmKvXxXFD3nXhUoLVsqUXRrpJ6SbcAQjAp54sE4Pedq13YFNqcmPrykjCenfThTdi1R",
  "key18": "4VZdYqHKGk9Du3xLVKQmGQcvncrFJDDoz6FCck6wwkHyQ51kEQ3Fq13nrSTTpede2dwJgpXTgXhCjAKZfmVGYZ2M",
  "key19": "5kk2oYebM6GZJNRkZY83J9QzgPDMYpCYNuGCSLZ8Ty21kYGz47s5Gcx4DeWNEMy3AyScnhtef84F5rtVEKxBUVi6",
  "key20": "5vUaBUC6Mp1r7nfkELaxfbJhhaxneWaBY8JxqxBHCYVKf2ddjdPJk8RYuTeQouk9vgvrXuw29WPTj72GeYJ5uc2o",
  "key21": "5QP8bF6GGwGHumUoUrFqeYy8jr7ymjejcXL3ySGDa61KcHEXN4Smud7jgdZBkPy6J8bpTEo7sCbPqpu2bK9aSY19",
  "key22": "5KXdqhtvw6PResU7FqnWHo7CebHTdEkfh47BVQXTWyKqZQn4woknyvrLBMKb31sWhfxsZLwqTdDhT8escrhZGdnG",
  "key23": "5CFXFXEj4sKLx2T7zb7ExWLUJFXXRxAo15NTCyoiLf6woY8nLPDWb6TAzru6gpxNihmkg7FNBk9pHo1P6uZRwHMc",
  "key24": "4cr8YVnfAEiYpDa7vpdmJnfRT99uGzUZWPmkdWMb3i5jnUY4EboX8sn9Qn5DmA9hsPzT31kcxaHtVscU8e7mLxfk",
  "key25": "5hQjj8HiLpBFPAkhf87BqwWYmF7eyEgXs3oqFeoxLoA67M3fcY6hmmV8H82B8Naw8Mxgfcgf1jokaEPPAfosMV5q",
  "key26": "3F4hzYbgsq8H1x9QZctfVY1D5AgNCUGePrey3Ap8K8g3fPCSrrsiHKfnMJMcAYiKp672eYvgCV7pWgNth7XfECis",
  "key27": "2raunNTkeiuS7DxoVcqHw5HWXCry8gAVfdNyR7Qx4pi9sYrBWwdJbPwaHYheJnBsC3BqYZ63d1MgbXGZ7dcNves",
  "key28": "121VtsDVX1gJgc7NveFshd5NgiotTCCVdU7fSbP5yLLDX33HS6Enea6YVzEqyEgeDVEmBUbCJjQhvETH4Z4sZijS",
  "key29": "2YBLydsKKCLNasMnqhRqA9jcx9GVLeMrYeVFJ5gFU3D9wiGLmGxMMmHeLvqJNdd8GJHH1X5uQfsWre6mZQCbpMJx",
  "key30": "2XrRTLbSmZhwSm2cPcATGsV7nD4Sowh37syGUkL3Az14cJ2AvMz1GKeGVFsq1wFtfdeCMXU6fDi1E9oxxXU72x34",
  "key31": "4hcyGokP7rCfHxvBmum6MMQpdiFvcyymGkVRcrqjePEiYqjBQjWq4H6BiiVXs3pgegsPAUdNfjD4ASacj8NjDbGB",
  "key32": "pKPzyZE6XBNn8isyt21Wz5ZbE5sfJ4HyYecuygL7izUjwB1RLYbqjT3zedeDzSSfSVA1UQywB6nQhCu8F3wsJn5",
  "key33": "KQ6t812JavEWEiYizgL6G5r4KtLCg5KcekUA3AAcpNFGWdohtHZ5orG3XHBAgzLdy1bhR5C1FJ8V3KmfgQtYFt1",
  "key34": "3FsAVGLjjzTpq9KxmA38u3YMyjVn7mssKgBAg4B9ALDTY15fK58t7iaGdbLSJpwSehq5D6SnWwNZiju4mqfEN9sA"
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
