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
    "3cAcRb8gTJjwG4h7Ymm4D8dd3dMhKrhy5dDypYiwv6v4VyxGLo7zAYPDt9wMaE6Mzi8NuTLrHwxNJJK91T8EA7BY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqBvvb4tk5saMLV6J3JeRge7VDjwccnjFikTtiwPC9faWCNfdrrNHnNZFWfM2KpCUwukbKsTHmSiarSM1zLsasW",
  "key1": "55MP5s4DDSUG6LEFCBLpAprLk87N5BwnDxDkFb5Uoi5CRRf6bVvRqF5pkJsDwrEtq4BVA4b5qbkU4czEwitM5EYk",
  "key2": "5bkbuMbpxGYCCgNc5YuJ6NVpDyS99fE9i2K7UmQXrwAduMmUcxkvWorm6WaGr72nvF5DTrLyzNjHshSQz4TUNNVP",
  "key3": "3wv8YoGtYvv8tEzSY3GUgPVgkwbTm6yU2uvG2UaAVUXBoy3xgHjWW28nvM2UBVaAGDSu9GpwoXi79iyPNwiEXHBz",
  "key4": "4gEQVHnveiZq6DMjfXroidaXGTD82VbRgjY5h3UsyM4xP9psfsKLJTzfVPPuGR3UA86o7gNC787pMuZHCcKsVSCh",
  "key5": "33mJrcsi8M9ZJNZwCv4QhEaeCMHzwq8tpByW8rjM2XtbisWZ6UD7Jkf5ZRtHGDnzpLNMD1qV2Hjdeu6AL9866A4y",
  "key6": "3iXiDbBWNsS4KdWLVC5YuKDH2ngdAWZdwY1nx6cNTiJqG1EoDkqtRjpS7pDduHqWkruf57LrVPcGnXqtR2VbVHuM",
  "key7": "3KmScw7XL4LX2MfcP7TPbBuWhQY3p1tejkben2jaowi7oetZxaaBBkt55SdjKgccHCPNLXe761aA2ShkZJc5C5f",
  "key8": "59B6uteZz35XTB77NbdY9p9B6GVvjXtFYweBA1T5RVhmQtPwDmZ9ZdJdCnTH3HnhWw8A37htGJL1n95Z3Ho2rebU",
  "key9": "3Qox4SBt4QHMFJG5FK8ZfWeM2TYgAm3TpozxLLCsr2gQDs41FqpE9WyNR1yfBt9bVjT8BHA8zhSQTFymaRkcYWGm",
  "key10": "4T8s31cDpXzd2dFgujxTfvRTzfR1iekvrGTgqFWYhAi4Jtc2SBpUxRuK9jdRgGRo4mVGJEoEbjsHnbwKiCqv9T2N",
  "key11": "5dfoDxWfFs7v1hoQwZMZ7FjWReQC3mtvRoMKJZwZNbPTJBVvY8x2fs8DBegLz727Czs7b4Lit22t2jta54Tdx4r",
  "key12": "5aXhaAEj2DZ5h5E8Nn7MCSxX3B8mKt7zXsdBhCd1uNjnrFumaostyY4Gj8zdnDarhVG82u8y3RHzxTvzUQG7J7qV",
  "key13": "4q4sXxGy5mGQxsgakiMFHLvqSvgvi3KfgEicJ6Z1uQgzPbbfY8cU2fENzAgdzViQtnY6L2MrPMa6Nm59YwRJda8H",
  "key14": "4TGMvTzwsuX8EuNc9NgRbfcFi277GMEfKYnGp7yB2ffnK8tZXXYq38Auyrao9X2GDkoKt2D9mUfE6AzpesgkdJMp",
  "key15": "4wzNHRBeg7LC2iGLBz8hvMbzMEVZPPoMLkeNTkoyuBUPHCmyFAc1xUn6Dtj4uME3qi4MUpzhQGcgUsfy3reER4HU",
  "key16": "2tU3PRbcTYhrKU4fnyGhZJAybXdzema54xgFB6HKwbpVkhoBsHUUtxqVKGE6Dq5qETfGr2aSMG6umuptCt8yLCTP",
  "key17": "5bUtgg2BZAjoFXDFQRi3CWi6s94MR8GmykUsWAMLAohnb5F7wyWskqsGTH9UvnHiKoKQfAeL5uqWgri5D3JpGNaL",
  "key18": "3ue57u8iPeTXPvURHnHsJ7q6gnc8PUFD6TbzHNYn86dytqKrvz4ftdW2yUkwRpRAkieGRRQtU1D53trQVuBDwVkw",
  "key19": "4MBfPV41csSCSp4PNzFECgYvE2oZBWWD9piLMyUiXTvQS2VNhLmZTKtRG7eZoMHVA2fGEYNs1g2TrBR1JupgbGE7",
  "key20": "2P5PA286zBTUCL8bSK4XFMEsdruorsFsaCVQyg1ibZDwFxBZNQbkyu3AFiZiT57GEW8pZRe8RsajhTHhBUBDNsQv",
  "key21": "4AsZSQcTrLJW7iuWFGpb8ycDK8SDRKWTveGhRMoBQidZwt8iyreG2cpFRwfJnrWDZZJrZrKVTpBTH86N97MQtCGC",
  "key22": "2RdBrW3jd6Tef56YNeyJJT2sXTsoDyA2FemzUQzMVcixtj3MopgRPoG2Pa4Szj6btkBTGQgDmi1VFPcQJK3w8TE7",
  "key23": "3N1fYXXmKZzEPZxuRXtefgGBNzwTXJScq682NZdY7CvCxcKAJswwBLgi98VG4SdTG12FXmWfB5PNy4NAbqKh2Cxi",
  "key24": "23oXLrhY9Cxeno8xcBQMhngWoLWEWw1J2yX9SNRLkG5i4327ZVBwPKLCnsGBeuGaPLiVEE4dhJ1ozGH8CjXpSmNB",
  "key25": "4yRqHp5W4NEtAFeVnVd1ByYHA9JHfUkwisuN3M2ZxXR2XCCV6fYHhZjsUiRg3feAXWibNKeuJp3auXpuGmBDekwS",
  "key26": "3Px4p6h8h7t3JRXD2fGFRpCetNzDWUqtEMEkSNXtCcLm2eVskSWfRQyXdmnejivaxSwo2pNW2AsGWXau9gQsLgmb",
  "key27": "5Fiwpfxp97Dkpt86DwFoa9v2F4Cf1bw88Dkk9qptaBWgsJfXyWgdVt1KRQiGVBCbjdn3K1DugjhFWkyftw8JPre5",
  "key28": "4BMoPWqXMSyJkFKHLUjPWjPUe7XhaYTvhXs1Dd5kqLXu4xs32i9VUZVqQpMBLoxNAwvkSagmpX2MdYQhBitKMdEp",
  "key29": "c7jfs4GxKYPujTnxRTyD4W1asUrqjQhYbJn9jLhPkc9eAkrvUb1Bd83d6BSdtbuYfAEapSJXQFgQGx3MmFQ7XYc",
  "key30": "wwFXWbsrdPcqiUYNto6xy3PC7Vkq89qxCERiNuwZ7NCoWjUMFoD5uELA7ULvCpPRp1i8nR6DVT6x6ekEJxzdWJn",
  "key31": "qpYbfCurGwb6T1qZ4Ew2irARg4ApD7N4KSrr5qTrvfTkqS6CcDwop6kEtiiUitiF5oR6cSyhEUztde5NecRzN8M",
  "key32": "VoWTz63aS7aBtJaD14wNNbVNDZCFrrULSS8LXfjRsCaVboNz2x2eSUhNaSP5UjmfpfaoXDSHzaE3EsRLERWzwvX",
  "key33": "45Hkm7FfXj7KZm1D4cUpTbPUJkyNtse6b1fURT65ix2iKrJrNSnsDqa9XSYf3uwrG45eUrUTjvab8w4TiSQgGUkh",
  "key34": "5Z71JJdF63AWVHh7gTPbbUHv2dNWGvTMJD9NwjTituS8ebqFMMuFXADCRhpyuYy9NwXf1gHdQYCH1YjfdG9wzCfa",
  "key35": "5poWKWLAGmEJCesdcYRWTiGvgxEwH3JDG8t6MttVM4ogc7mPb1nbSstWFDw6LAdMX1Kdt795E5a6AfCdXbWR4qQu"
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
