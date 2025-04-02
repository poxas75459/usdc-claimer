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
    "52R4pFvhcQ3RFBuz2FXXyE3eASjCwMpRbhqiUJrWgirKtjWBMAypm7BcQY4hqu5oPhM9X4cYcymkkKb4tfAhmrit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jxjT29jNHMW2c74tV77cSizKCs3bTYs3yc1A4JXYPUK9jCAMjS7hGxokPQhPravTb8nBGtEyB6z2AqN5BaB6wqi",
  "key1": "5pbfdFx35hWe8Zb241C4kydYGJHAMVUjijVDQxeWAFEs4PuZArZnGETr9oF5TnPLGgATEqMYbXdntkkwFNXV1mdo",
  "key2": "cHZyNQxPn9GpERs8Vif2NoLAC1AuhQVByY516pZcYsrLzn17ZyW7ScsztmKgEPMkixj9ZSyWMPTNBSRK3Dnh6Dr",
  "key3": "29XDcWGboVqFDRHqtR5yFYNVj1Yy7MwUqJgrG7itchhKve6GvZhXnVV5E2kvoThRvisXTsqxzZq46L5Pvy56DYkL",
  "key4": "4PvUFvDF7tJqvrDkhUd6ST4XLhyKbmFo9uSbNmh3B9euD8LQHfDhL37Qqm27yhYZ1GXoWdcuYvMeEHeuBtPEwmXk",
  "key5": "5qTpSdiTzq2VZjhgdqAtzVr8GRaGtxug4sjrNphgS9SwzMLxRrb5J8xRy9X6mcyRFjun8KWpi9XqtsjbTjndB1My",
  "key6": "3DGzVdRYYJAB4j7xtmRBCbyepGiivqtyMU7cq6uwvR3Ku929kDT9726eGLDEcABtUj2hfnPpwvdrRHWd3JCvK2GZ",
  "key7": "4SLd2BeEryN4VfxYc8PHJq9CfQLpm2yjR3kbj8i8wjoyhA5EaWM3vnAZtvgZSyjXbvgsvTHYjE3JK6YWNve3p9Mg",
  "key8": "62W6mfJEtoqMDQJVsZJiPrKrSgS3EhQCbuDsLZjs2jXc4FAYtTj3pGpHAEDX5iQLJdCEiFZf6zBF1nvX5DyLKTPU",
  "key9": "5agLLgQ2fXy6Jy2AjGA6H6z32FWFfxYTgZTXgweYLCWL7uHPwf9rSVjzHUKWGWBhJVnsMJ3hvUPUDPDs35TTs8wH",
  "key10": "53bKixF95f9H6eKj2AM4jeVmdt9JfYMNSLLhLbAJRBQFEivMYvF9Qjhc9j1LZvsW73ZXa3Tnr1FpB3HUgqfEPNZW",
  "key11": "276iLqddBwjcyemLJVMhAaKXnwoLWJzM8i6A3Mhc39WfsFR7WGZVuq2cVdkcHnegQm1R3efptqGiV9fnGGVuaWTf",
  "key12": "3XvQWUAB33kz3wu1xWwwgFc6pmKnkTJUxVgHWQt9L2A9VvMo9GPpvzLUrYpaKMcEVGpKuZ7BwiAqW7xSMqwGjrcC",
  "key13": "bZXphezCTV5tmEKFnizRFLaNv4KTbi4ugdMB1YksA5Bjdve9ynjbQysVuZ1NicxcUzPUzuTTanTGDhyWeWbaiz4",
  "key14": "4t23jrrzJ4hrHwX3YBJodEENCMSrnZAJDQ4tGjYc5uRoLqNefDsioekn8x3HywgsJmsMkvd5nz2WuyxxZUr8qtft",
  "key15": "4MWYeLddkCEgPbFkKu9i5uMy3F2DGucTx2KfCufEYgLShxMzUstSGAf6DKaczx2qWZpM8RTCzaudATr3Rz17ifEy",
  "key16": "226ot3wHUzbD8wTX2di3WFrtiSjy5o1fxkEddmb7wL5XMD9gYcdLQg4h1UHJPq5mWridgsFKmGVXcenifbBzhHqa",
  "key17": "9NFGcHKFv33kqq42pNwZeXB35NFmx7MPAFjmueHyC6xFcGUGZhSZnhtBF674HY34i1D1KAKmQuheQTrgSseazaf",
  "key18": "4f2KYoi14JdPozMFcJ9SYoUFCHWZAcn3frZeJ2T6W2rsPN7r1Y7JBihYagFNeakgWGfFTvzx8aBWuoW6wxR6TCcd",
  "key19": "2bybk3NbjiUmge2kc2DiX6FPAC19UyWJpF5Kwaoqs9precxEE4am8GtPuoHpLAbkHMvWpQ2By8AZ19UiZ4xvz5AS",
  "key20": "48fbGvKiYUgHCpx5zJRppLTTQ51Qi7rxgRUXKXsypPSzFZE3tGfUmZDVu5cZZTGMTfsDLVjCQeWuc6BmvfKn3qZk",
  "key21": "3naMz4pMUKSwWL9vX17E83f1Zn7XXDWvxmBJm5hcnhXxQA2rgBHT3Ys7K4j2Y5xoxgm36ixpaKGwayPmt3rDauUm",
  "key22": "2VEAhz6rCK6BLNyRGqf4w5QcS92c2NUMkL1MWMfXsWJxJyaPrYYDm9sspW8DprqFK8kfnMhrb5rndwW6gguF7YEZ",
  "key23": "4UuadMRaH1XUvg49HdoWqVd8zT1s8h3PKMuBQeACcs9QFJ2QDSnPbseKhLWFE1wFjZB5yMKByYaXCwgfjMNz1fjW",
  "key24": "1o4iY7Eyvgxw5osDX62JttyC4jzWZFC4yEvL52AnyTNukrVM82fhTtcAP8hwhjMRnF9zK1LaUDpgZTJMPCVNCcy",
  "key25": "64MMGjLCWjz6yiEcAA4kTBMa6LxWGh9MUZWxPrqt81U1q5gzZLDhURnp3w8w1pX1HWKjRNu8do64vwkeJTXkuYW8",
  "key26": "4eBoSdYQQnKC1B96pSkxCdNVt8J5ta1mBVkRPZkjWQpDVifVtQHDaGxtwrsjCZhN1rukEudzQeo9Y9ZRBXXGePrC",
  "key27": "3oETrdhoTzxdaq6hihQJvdG3N7LAyae8TofLe2sXLUHmB3HCLzCcgHTEoPqZdJXMTjn7ovchP1HDncvqDi2XmJFK",
  "key28": "2PWRFczKqFRhrjWPwHzxMeZJWW9xxfjVByxMEpoDE8hXVZDsr7hqdEXwHQorNGMhDcVLyG4EgyibxxZb5n5evZPZ"
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
