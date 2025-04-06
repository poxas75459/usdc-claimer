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
    "3M3q5CqFz6tAzjsqgfgy73BEmGjD2BQCKRPxxuCCvnCdnGJLageNGw2aZWsvaEPwTTbhwxvdMiJUivR5EeFKindT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVuhiQL5FsnpWnXAfA91FKTPDPBDGBdHv2q5TreBrRuBMRVwN2DuriH86kH7HefWbVjb1p6oiUh1EeuJxjMTfvC",
  "key1": "3vNJBtF7umae8J8B9pUxySGYBVSqzoEZextcH8tq8Hzx2tUpH8dePLgZH7jdq5s48SeCRgQYLBnNBk95md83qQn7",
  "key2": "3Y1bce4tSKLsxkSW3poQseBjzQLQvfKeFbv1jxG9ZmXD4fUVgwd6HwyTMbV5xrnhQbUpFceCVFgsgBCKTG6Fcdwt",
  "key3": "36UtWEKsiYBUoomsGm8qEf5R3kcGAwZX6ZQeRagPUseqbwwUNRqcAGuBStSjXEBrp3EQDEaH2ARy91tYoH83P9nC",
  "key4": "522Hk3BmVExzEuXQVRKufinZA7XC7iMzGjxCSK9SHq743xGLguHencxRGVr33q5z3o9Y3P5wsrZRS9ExWhuxrnQt",
  "key5": "2zqBfxDXfT38FAkepTPHMfJq9odoGwRCHhciLTHKUteyV4Gq4tmjMzsxh44nuJtsEc8At3gb3kQQq1E8VKTC37xa",
  "key6": "537iQnm5DGfgZbHDwJtkicMJLAJ2kb5uGLTyV7GUzu3u6NtVEmHVx7QnEr9A4d635yejkc4Lj77a1fvsPGjoJXZB",
  "key7": "cEQ1Vhwjfd18YeHYT5EbXrLZpLGjrYa3ct43VTDAbG3VkKbCMtjPBWncBfiQYumiJCxksJbCBf59RzgZ6coaJ4R",
  "key8": "31KLiBHXqGVC6ZkkVGFJTSepc4jLMvbjNYUCwNc3YZbZwQfR9fJJSev1vPzTWNwQsAfmickYmPZ63461b5dK9dWw",
  "key9": "6763nHYebS15Za7uji27DvHhWeBxfrNJQTUJ6VRJd6qsHo3eghkrcsmpVP4AcFfk99MG1pXGerZaJ6e6EEZ3hTbi",
  "key10": "5zTz3dzn5sH4kKEPxgZsdWpUyYX68v67KRmfHbtR2hR9nyyPdeW9PSm6CUfUbJeGMeXr8QEmosfN5gCXNT6aq5np",
  "key11": "3RWyNaWw4e1sBx5rFZLxa1VuroCAMCNQdxJAWCDwKx6UHhaGBckDjj1gNtPCEkwqUTzaa27hWe1N3iDCDhREkXT6",
  "key12": "3wHm7wDfhJpMoBwMFWVRyBnuLbZWxRVhMacQhNyXpqDjsUcuNFKPza7JDcwTg2V7cwmqJpuEukwDqWadXA9LrJga",
  "key13": "4aU77ZjFo383x2Jm1BHBRwy2ffhPqiRuJaRByWrw6Kff9DPTFfPccmoZqvaRgf7QWwLWtH6MoqrD74ZWEz4R4qnW",
  "key14": "uxEg3ngU6ZPYvEPS181a3DCwDtJbGdzQY5RQxQHMEfEHgZMnezVfVsxiRD7Aj22BRsjNEJSg8GTWf914njcz3zy",
  "key15": "5fcWbCe2d981gNyRty2wH3G1oYubk3oarQDdGoFsGi3pTEwfijQ1TqnAcvz3phKB3SPiQ4wdAMPFwgZJUKjsQPKL",
  "key16": "2QipiQ8q8i4g54LkL3b4RCXJomMG6gTfnufBBxHY9z7fFdQJDJg7B1QPdQbN9SRQXMvK6a66vS4hsufcKKsjxuif",
  "key17": "HVUAbRtSvHjafi8iCEvXWRYdBErgEEjvF4tpaecufMzYYNxpZTNXvKax984zkGhkpnzrVsuA4owTX6w6tiUGg8J",
  "key18": "5dB4nTKZ31gydDBMMPZmzEXfo6RzMEu6AD7gCADr9RUPDm3yexeD9YP39ARy3U2hVi53rrEpsg5QzMPWW6dTj9Gx",
  "key19": "4yEoCx4e44gw2jZ8gwvEx4S8dpdTn45jegXzr1aMTdaBhYygiNn2XPjrg54kpvGFcfJPXf5Dufwp2zCDy4vu3BbX",
  "key20": "eLqwi9r4UdmyaoVvEdNia2oNr7AYAg45ZA4BAoxntzH4M9XoswoKAmxyA5Ao735rcksXjU1iBx24By1PzqRF9xE",
  "key21": "JGA9zsKUrzpQfiDindGDwxnbG9CDeDZqBHwGRQHUTyGdty6J9BvDdFTRgreq6naT3Xo73xR1YvLCVHVrP2H665F",
  "key22": "QYF3FuXYUj4eHWgpUk9XHXk9ZDrE6JE3JvFMrkJBYUpv4nT9ntRrPbL8B2RFqezZ6YhWnmQvJD1XBUGdqh8VCfS",
  "key23": "5HxnZ2d4ggbqCH4UfwXoRaxp7tggAbmBH4znCvqjmgBAwY2bTRafa1JX12YToW1uDuoysWNYfq5bXbhgxpnA9SHA",
  "key24": "4r714CLDxCaX3yAn12SiEzZyQFJkv13MyYXoDSirn56qshrcTMuwtfec5pFJwjsDxc46nkDVH9aDVCpCDhwNwSkq",
  "key25": "474uLaM1vek1nJUXGqwKdTTwrhQrHBHqvg56YX8NQpEvRFiNtQkGdbBsR1rV39YzSdRDribZtWjiEdf38S3DRbKU",
  "key26": "rXjQS3yKWrZgCTsfSMuHnxcfbSEdgJuc58uMzstfXvv632rwcyv6d5ARaw2jquosyZbrtBKa3aRz9GDyd2LQRnS",
  "key27": "4XqdyJBqFqz9wbseJkR5MMjbmVZuDgELjp8Tjp99grgKbUDxYJXtDycJWGJSSWKAxpr2fex3tBeMgr8Ca7V2W7NF",
  "key28": "5XZaBvdTvL3b8fQuj1PSTeev2ew5CZp7MA1cSbmigh7McNDvvqkK7QQ7RFybQ7xiG2fUSnVwxNmMeDLyE88FUQxS",
  "key29": "i6MBPjVd7RezWa8PquAyBJ4geY18EYBqvpa1XKJ9idDj1RFQFdFJJwX8g5iuVxXJWzSZuNyFDH9gdBqCtfE5NbN",
  "key30": "eHJauXuGEtp4hM2pGPLnH8CPnvjVpbxNPamnCMwa475rRwYGf3gPX53rcvXaTUCAGNFootcAo2pXAyXYRmq84Rj",
  "key31": "5ohSgHtgoHieYW8DVMK4rVuAmvPji3QsS4PEWHUBUQZx433mpPFvo1Dd4kQfEHmSCbsK5Qc8aeXAi2us1GbKxbN6",
  "key32": "5wgY1Q98yuyHaGaVCXXS2syU1eMrdWCUd3yRLxT4tmUZiBZvxtHFrw6AzdNnmBD8HSE4N1io8ch2TFami4LnGoJy",
  "key33": "hcLsHv8uCm9SQ6Cu4eF5kGnTmsqMZWXeUoDtRcjkkKG52U7xk2uT8q5aE3DudX7CkrDTp8A5N2Kt8Ug2U5psnrL",
  "key34": "3hB2YPUZ6vGZYTZJ88evMugZ4bpPAMhpHU5M3h6iMMft3gFciDZ7bfNRnEucFW3wcY8ggVFArBfPGvkdEQkiQbk4",
  "key35": "2AE1cH7a3sdSrGDJm4UXutm2GprowKdcYPm1vBKU7ExnABMzg84WfpsR4sznNi2qouVXpKYv4aVwqqXt8yFVvY6K",
  "key36": "62a8Pi5mqC5E1xtn4Y8t12yrDQ7eoogKDrMMjayMqK2YmFCs7WeoVCCwmGxTQDUdKEC9XWhSdtzqi5org1Cdn1ve"
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
