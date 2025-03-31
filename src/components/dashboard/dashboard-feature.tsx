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
    "2nxiDo2wm5QWhnFPPNr3zoMb1SHwDH5ARTQJz7cL1L1V97E4QbrTmeCRPnbbzgVotXxuoLkicEm1t4Ag8Jy8M9GJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMJk8YyykZWGWvFNgnz15bSy3Ujd88a6AHUJC4Ag7afFX9HhnNdXW3CdaCe2gPKqT1j7wwXErXeBKMKPwgvzeZF",
  "key1": "34KtT4yE2DgumcHAF42FCP38p3LSVui9VgoAjLUko46vzTFsLa1QYMGvjcSqL1H2EhYxSLHWVmMCtAVJMvFa2BwR",
  "key2": "PXGhbQiFkz5GD4fXkYq53caBdzUgTmvUuRb18pnH39wm5VYXijMbdnruhYhAyrt1YDs8K38t1KqDsMC3wq8eHXf",
  "key3": "5MzeUMSWqmGy2eH8M3RdUEmDCitrKJTdd5cXwMDka6jcXPuaXaV2TfR8TkGL4GD37t6coGSwtSorqDPDNmJhRs5Q",
  "key4": "3WaTKQcCZTZnVZUgpMCdLstSq14qTdqnK1e4T4V3UectoDoq6PpJBtmJ33vf2dsVpFgyGaepDJhc5m1LboFPbVdW",
  "key5": "4VqvLx6FKF6yRwLraL57oSHV96LiGHx7gt7UGzVLx8bPjuUM5jAomRjSLVbG4ZfZMJkzCvF2wui9ydoxtRaMZkMw",
  "key6": "43gitRUrNqydwbB2NqcTtEDUTzELWxWiXhxc2PBXKHFhzY86qsjC7UhiphDvW3QWgs3Ro3jcw5TvJUnaLF7Fad7L",
  "key7": "4crUD18JL4rC9Tetz8T4WYeXGWprucaWoL613MTijTXZRwDKoWTG1w3HyTK61qmWijEEdy4HWMkHVM6cW7ZeNUSB",
  "key8": "5zmuFAFbngEnsqjt5qADQgQPydWLprnFUZr3g2PHnG1oHrqZWugU3ABdJkGqzv6HrYp61wWD4W6W9aSEL3csHQwZ",
  "key9": "3L2kaQ1G9DHtcunw8TmvudMAfbCmruoxiTueiYzgsNanEd1yHjhNXTuqcqLvQpEGjounAJExZHFtTpGL5rGhXwBW",
  "key10": "2LmzSjn3bX2Z5oJwScTqBQXFiRrm8ikGiKNYPPin4rZW53paRhD7eDUYFYuPHGxK3Pc6MUS2UC3h9Tj89dDJxh3C",
  "key11": "4FinjbsXjBjHpURmjeYzcwHAGjWSMnYKWBKtVUYMi9Rczb2JFobSVRxzAoFEQqhQmXRBGzEu3LFrbwNHm698QVeN",
  "key12": "2xV1SasAjKQeqxQpGmcKcymK6woEQB7xUwMP8PgF4rH9C4UvRyoyoazEnVK3vycd3F4wjtTUit9RcM9a1rWozH96",
  "key13": "4T175wGnY3FpiFJ3HESoLJthkoNQhmmR7XWty6Km9sKNx1Ho74Zv8P1nwY5LA7QDMppBdixEpbRPyECeyxcdwsE",
  "key14": "52N8mQShsnB28E99brpX6u5eL72jNiJs8yFwMPFvWUicy3oTYRuYQPmuXzktZVnjWZttYhXQYJdFV9crxZ4HbiSM",
  "key15": "2HcrzTHtumT52Znw4Sp2DftWLNGbwUPBB6MjMZ3uiUiRm1qZZVMjD1yQSCE9n2BbRJpsjPNjM2hNJ5qsgT7LZdmP",
  "key16": "4KY3QUMbFFLqSn2zeTJH2s6B6PE9xS6GjqiFiZXnSqWz2D871tz99GFxgejTGQJV9h3Bb4PWonCWQYb1DHP6JCVd",
  "key17": "3kwQntVjGC1Th6FQjZnc8txU6uF7rLo8a4r81WJYrVK5oqASebBeZ5MsaDKRG9DcPzcfm98Be9zm2yuj9X6Whwbu",
  "key18": "3pLJ1qMvxUM2CmtPbA9BHaGoJRcSE62ip9WMCKfcSGzNV2Xsb7zq8TAVcxHterRa6kk8G4UwUmpY1nJbezEn63CS",
  "key19": "4j9UbggTWcEwot4PcFrzgPb6CcUeT9GB6UzMVuXkxa224Mad7TSXLoFx25gg5tNBCyBEGj7SBVFCceUNAYyzJjGF",
  "key20": "4pNrAKwuTK2yhr94CSmARKpNCGsUCaWo6i7tVQ5T2vRoHNQox8ZPdGnH8cqy3TEufN8FMq4zBg2a2EWcLGesNwX6",
  "key21": "47vyoT9nf2TVSS43wNoryFPtDFeoiZ66WMb16hbmyDFfE3nm63MRezVDLiVzV48VGuNEGmQUpGCq44RZon9DGucU",
  "key22": "3PxTF6RYCpMhBMJ2HYn6NWbrDWQXVjHzGyvowSNH6w8j6zqvHUMAG2vRbnHhYePXChJA2SzqGTVZZSK4BALPEEQE",
  "key23": "3cQqUVXdCpSjDCupjeoRR284wMzdAVcRWr83fG395RKPWwq1dHsjpEwoQNZVcd8KT38Z64hQNTNxfYVBDSVuyBCK",
  "key24": "PET2J5rmLkJozw1bXaKZePcdj9mbXn5iTdLfUqVuZBtq1uzTENjZyrcrM6LjXSe4TFS2GXrsd4gAkKx6JfztYy2",
  "key25": "7idMkb9jniBpGto8rES1QQza6j3wZEof3k4gYDPQLzdrR3cweVkxN3UfnzTanXykRUf4mMWtk8GHXhUJ3eLv1Et",
  "key26": "57o4gDXPHBYYsdNVzaihMGRKyxJuG1RFCEtYE7ceTtrRjZYJNX4T17mUrhMiiPjZJSvFCzWY6vpxXrZ2rhbyXeys",
  "key27": "zWgA4PzrBB15PqP6wV5yj8JuibyUP96niBPZx6PAvFQ9HavMYNrsGvvtfkKKTm17WmhhAGc8E1LtjbUWaiqfcFB",
  "key28": "2zttiuvnxxuaxBHb61BQ6jnXPr6miQcKPrmmfBmPnLnHxrpaFydhZ4XL5YVCgmUvMBUTQGtA1cQJMELzYR1AQ9JL",
  "key29": "2ratzRQ76aLLuwPoqHHv6RCWdNqCr8EimtVhnFFgtv1kfS5WkTX14FXKbkH4AzjLiR1yKpchEp63MhxsQsPjH7TF",
  "key30": "GVTGWfZd12ciQfdzqegVGjhALnT6N4TsE8xMe8hiReJ4NUCgoBMayqTeSFmnkP2RXEVBGNZuZk5qSHgzbNDwnbk",
  "key31": "dY9vG8gJQvWv5EApwVCmkPdWmFbFSk4h7vsE9Qmc5mR6cuR7j2LKG6nSvqM3yRrYEs52Kdfhwvqa3WYhcCboAqv",
  "key32": "3nqdAE4DGaiRPQvER8vn29arC7fpwpJ4bM9PdVrmF4sN22B37fg82o4y8HZQMSt3hMKjYf2bX8F8qHrP6niwPLZK",
  "key33": "2pmPDykixM6sCGTDcPnWc7HfkmDa4uaNqcuDyBAUG5i28RYD1rSpUTNYUwXHzRpBwPtSpPMx9FLyKpyHHQra6HSG",
  "key34": "dAFWhDCVK1rYVSGtDUfyzVrJXLfjaviahoMLRajjM19DbF42Mcf5zfKM9cCwdfWtdEc23NkzxBmJsbM1zuiTMAg",
  "key35": "2Tgdd8ddFzntAh2JLp8hWJitDK8BfKU5t1uWBTXzskb5DLmbc565p35MP2aYhZ3wduC19rbqvrSFp7JirFXGq2Tq",
  "key36": "4hWw1oncCRKMhzTNfXvhnf7UMLzp9io2maGquoU5TjEdUmQUGLdv5SmR7dWCNcE6ad36v1soxcrrJCVUjdtQkpHh",
  "key37": "64de1csBSPYxH7oFtUHVZW7bdpoMTRZmCd4pkXKret3BW3PBBis9JHC17SG6GpBQce7rSQVhWgUiH1adRaCfqNdG",
  "key38": "5sUmoApP4FCMF8ii4KMMHDGCbfbQiiYQJyT8TweQhoRnd9WrEYrv1VTiooiDaGVZK2qt8mVKzqMRE2jyDZPUubDt",
  "key39": "SepoX45BXBpdcjsmsALdWUmw8FeCW7dhxhVAxTXPnEWgxb6qP3eopX14LRmasWjxChzJ6dU5kyR9iHrct2qPxZW",
  "key40": "reogqNWmyv3Duqd4j9gapUh35uQDQy5isZ7oNfkgJebDbHwJ73oTw8ZrjHG2iXu5W2K1dxPWZSns2CSjf24SR6B",
  "key41": "DsvZtBJc2jKKttjaLagcC1L3uuJ2GpL1P6Bn5zyG8YkEgGkEFKkPVQL1qJCHgZw7xA7avQSJ82YMzoCyG22UGXZ",
  "key42": "5uSPA8s6rXQgFcyXM8A5L6ERXKt1sNg2YL2eNRaX98x7gobTrhvqnGX3xdGXigQ7DzLpRU2MyMGRN35vg5nu5Zb8",
  "key43": "FXFbbqgUxYGbfpsWc3oiQCdQz3DBYDXVXPYWCFiEMztaZnzfjsSF836vJbvm1jnAaM9HWES7faerTUAZbNPEQmN",
  "key44": "ZPFSqRqUkCBVVcTK4hCPAQaqUC6xuiVR4RxNLypb6Ygd96fio2SXWb1Yyb9hHv2eAjRsMd9BvR6Tv8HQ38zW5NL",
  "key45": "2RJFdCdQwcJaQ1mSSfR7eBJbrXJZqEm7NhKbqrcDWbGxWNmWGTzb7w1ZiRVQEVnmfKiV4eJtxTjSVnWG3jP2F3oM",
  "key46": "mVJbQDeBbprxqbySUQ9y56hQxUhabh1GgKMqBmhjyrjbSmETSz9TTpqZJLCU3zCvS4H7ednB4XQ5s91U75NV72J",
  "key47": "5ArK2nJFjJu6Q34zePgmcdfijyLfThS26CLqSsTiUtXk3NXvT9BzQu6syGmPDZLuXn8MQQvEj5toNCt9ZhGkvx3J",
  "key48": "26WGGw5bzKQGySnoTxTyphcPUsXdVHDERoryTzEyuR5mMQF8a9hTJKX6s1qbE9dS6q4UymjFrAbzBpWyy3g7cJre"
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
