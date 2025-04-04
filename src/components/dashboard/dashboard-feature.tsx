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
    "5jUSzXVHcDVKdbMFTanbnvDQiKBSAULjdsGKZ96rqxivFug5B2yTkJbEeym8NikF2D94DK3Ddy64wuHPsSckfLRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKNR3SkEr6uZA9QwEYA5BRBzuefH51fh7chfXCNuFX1S9pEKyu5NKAUfF84YuLzhHEMbGdxGeLtEGB99gZ8Rwve",
  "key1": "2Qh8M9XDdLhJ9XUBmmeZRXibXKCLq3NQLQWuDFE5dgf86pYWXcC59nefNMQLpNQXhsoTsnthvqLaC9A3Ue6cyM5L",
  "key2": "yjXT6BahUFp5XD1oVjuhEQNRwkBexL4BsdsJTb5mRke8JdFo7JXEusWeV5miEJ8yT14Adewibh6NBSTuDym9M8X",
  "key3": "4ZmznJLgnjLxtcSHnntYZayRF6VWjkQCcHpqmFxHgZbS6L2btDGahr5N6E9KoNzoX9eKf6QuRvF5nhSnGC9ihWXt",
  "key4": "3u6e1mQ2zGYqVWhqXYe1aAfr542P4ozAMQzggc2NRsjqUikHJmAE2vjoUUaSH5YkHcSmpCxo3yuio4kJQrxyxwpL",
  "key5": "4rNWoPMqAcyvG8dqGP9V3Tqna3djHLjkuSVcj6ybdB3UC1Siqa25TNqrt5tQfrqy64z41SkABzovDnB6vr89yAX6",
  "key6": "2PQEn4dYayGSNhLSg4yZCTrW5fWoeVxm7TLSJX9Py2RFptAvjAcYHYW1w6J1xrL5ZiEQFSoMRNev3Bsoa2rinu24",
  "key7": "4Jo2nFG6hb6oquG3SxF7WXrKcYdmX3bz1xDkKdxmdWwwv8J1695HX24kPFs7EhFk7d6kBvSSQsb6twaW1zgtxesM",
  "key8": "439Nf9dxRBkTLmirToHPaipxWMsM44oaTorsi3MTa5CNXaxvvNPjGM3F7XiTNP31kZ8ezb4nRY8W6Ha1rZ7xCvzC",
  "key9": "4JTwAyLPC2bm4AYFeiNRd1L47KU1fLjKV86TSgFY8v18WnmoG15wMGRNk5rrfMQm8ScHSZtUuxFA6gECoeSmBf5u",
  "key10": "4XNdhRqAuZ1RLLKvBoydXy96imrdS3wkiSd5nvYqXM87Jj7tJKUPNq617EDnk2AWdKpsYiLKczYLEW7B4rZTaHJg",
  "key11": "2DCw3uKqN8u4UbWawJxH79mTxg2iba7g5UMMiiYkX2uVg5Tf7WufPjZ3j3qjauUVxwMEE8xCYzRrKcxA1iMDdNFr",
  "key12": "5inVYfDE9srUTTqQPx69Gn12PDRBx3VBX8YxH7vCsqbWSs8486zAKL3TaFMZvxqtaVgyQTdFsvXn4LMVULVqy6hz",
  "key13": "5SyAzXnwCSX7NiB49XFbcRK1BbJCGfuc4FfSKzgoyAvjPuVMHGGqja9QLh5Gj1Jd7h4BbgoAhmYd5D4Chx6dCSST",
  "key14": "3EykxjWRwV1t3BPtLEJJWf4Dmj1G91iMFso9yw1RqjKASZ3bsmMqPbA4psBhc9JchwM43dc9b6bTTehkNMB4rUHy",
  "key15": "4e6BuFh2eC4EfdcGFica8xXCtftAyBdcgbbijtKz2iY7r96Apt18zJGxrv4Tk42cHBYMoxguinQyqg9XV6pChr27",
  "key16": "2Mu2fygkSCeSn8wWN7a1fijiL26FcVXWnv4NSuY8ThU7JERfx52U4GbZFsgtXdsGxCFfUqifLaJNsCEAWS7jnoGU",
  "key17": "ReaGE5Jao8xzTsa8Tvt1gzQ22yJCwcbXtYwcwLmc4VQJcWrctH6BnPQtTu65EHkaQZBt2QBi36fP8dxcNpaDeqi",
  "key18": "2CPoMKeTthUHmhLWEam98ai7WTPLuwP2w4MmLe8Bb6Qp9khqQrAFqHDLWL5neJECvpgJinp2emPZY6Veyy2ix43V",
  "key19": "5RNEQ7uYAL3r4cmw2zoVLJC5FiG8euuB2zVAxgydu9rV331rMBYq8rHU8AKSdzjqVRHmBz2zseJkjvYXnh7fVtVY",
  "key20": "574D5F992NYsr8cvCgB3pvj1Q72FxpQGMQ7z8YUXhjGf4L668fxMTvSwbNaGDBLg5CPSuBzSH7yqrn9mGv7h4Af9",
  "key21": "4JvBjS9R3nVat8qhYRUjdwT6gvGWyAFFpQVJ9oJVKnkqsMYCPxQLGe2KGauC92jVSBiyLKvKz7JCUPtxEpPwrvZK",
  "key22": "3d8qiCw3nNtWnAg74DoQzJeqQQeyTGZZnrDJTm7VdcoYWDsYUxn5xY3B6YgxgdeYjNcBbzdWTZY34NM5kg2Vprkb",
  "key23": "3vactxgER8GHrLoRSX5oNUWLQvst1jJYELuAyYmdTSHmkgUQA1VmmFGaBZPsE7fQ1fbGPyzZ3KCdUW8dXoctxmTd",
  "key24": "31YHzMN7UDrfhnoWaosVn4iBK5urW2cfuChWFCPKWa2ZMvaAkWNimtYRhhWLVmzU9ewL8shRGTmUwGzWz2Z5A4u6",
  "key25": "2kPJH86sgCQ4LktVaGEyerESMWJAcp7DtKn7nvXPee6Es838zo7Dg83b8wXb1NcsTbKcvumbbjumVcapx8y3AEuX",
  "key26": "4H1YhqrsXPiQMfSDnAmTKpXafC7oMvmQkNo5GSCRbJvRMSdSfDburVWitZoP6TXiandZeUSAtio1JPF6RXvmpma4",
  "key27": "2BNphM3dnyxN9tzhdadYrojkpA637hmJQH8EXPxJ6cuxgcPKDiTNKMpvyhWpvZhPwKVHTARQRHN6aZc7jSz8CW6Q",
  "key28": "2MuWafPMGfKiN2y24qchxJbgCCA3vPXLJgbZfcvRFkjHWpV5CLsVFdJT2te4R8YN4qJwJCBw8eqZQDCK2pWNpu4W",
  "key29": "bgyjRNcEpGMPt4KWQZHACfomki4ox98xAuJhhLDTyQgrmcjBi3CUi7gffa5wcheBrDoT3p29fp3KtpJXWFbWBhU",
  "key30": "2g2XCvSHkjJ6fWtgZVBbwyV8DJ1N6SFJNeQqQua717fncerKwuLRMBoSFmoHzeRna2F6gHX17UaRduHfHvtfGunC",
  "key31": "26cVudACm5xJFiBwFannW81bsgv6kNiSQ7hFEZiJ3RNdbU6PrfKdkEd5qPBuT3HTj5y2PgRpZLNVn8ecU1EGvo4T",
  "key32": "3bbjy7FZgBM578bQBsxgNknX19wk7ESg7vVZmbJxFXTKFrWKiuuAYGyPAsrSs2uiBdmXrsVwUTpNoyaFnWK9EfRX",
  "key33": "47GRpAUVymEJUxRgRZxcyUs7NffTiSeUW63a98TrYGUnLie2MwP5QiX6yFTYhn1n8VWsjiAN5sdHzuhQuhZsMHNU",
  "key34": "4ufoRKBvNoqvZwSDbc5oKSBvMGU2tiCGUV3oadhhPFvsCBdJ9Bj6RxhY8mE8gWqQZ7hxSqsaKEXvsjoDMXoKtsE",
  "key35": "5VienMxojGoC6qDs5n82TJhQE427iY1J98ZdXDLVQR99UFfAGJypTB23ywJzVVBdrM5tYm5zAoUMiMUQzm3Kr51R",
  "key36": "5QTtkqai8fqaDUiBG4Tga1NWFLB44eqrnntx5yyj2qSc2hs3Nu4XKSgjS6U5XEdAKbjRKeLfBcn87b8hgcjXbbu4",
  "key37": "aBRQpd3ntNN9f9KTNw5AzdKUthym3UuMaApgw6ir4MXsRHDwWDLNcgxzh55uoeRJJC6p7VBD2JAcm2zVU15XMhE",
  "key38": "4BXa8gqThw2mfVqFfjRbzZv8P18BRpwockyYbS7o8FpmF1mty61XBwYU3bGxHmsMipwyPhZodfsyxzLcwiWXgC5p",
  "key39": "2GdwWri4ekfF2yW7RXBKM93HYDQkmR3oeUAFJHsxVWpggDMx15roL4dZ2xXZ16ZwpNa9s3ZHyRA8Kbo1nF19wQUn",
  "key40": "4zLiqMmMgGEbejte7NuWWsnS1VrGQCpgCeVyUNsAEJggTWQm5pcKxRNaAECbnEL9S2gdMZdfjKihbb8B7XpKUNu8",
  "key41": "45ibFNsXyDGq1VTLr88MrsDgfhXTmeZztcwCj2wqCooa2u3m2BvonbNNvt1yBjy3KHCDbv5qrYx2wCmf3kXtQf67",
  "key42": "Ze6r4uqVoPAmzJRGhS7JhX5LiHq4XQ1ovPgVxEPfJL6z8pR3hAcDvrXPe5kp9orYV4P6cvMpvFGoHSxSD3W7kDt",
  "key43": "4vKKjAEcgw1cv9DWYmdgfLygHerJysYBFe7REgEC47Tq23jqHf9d1FwcFrLVnjAN4bWhCppx7LHGv4y9RYpVr5Pm"
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
