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
    "2n4V7od2bwA2vihqz4o5GdADMASzV375H5Xx6emCxzkLGwrdtmccZgnAH4FiMDF56hvNcngE75PZeYfJQqZxo6wQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMifMvDA1QjsJYdCm33mNGQYaF5mG53v9vc8yqXCB7RRfb7MitsWG4famb1KJsuWGMKY9Hjp7ZEndXgHFESahu9",
  "key1": "3bA4rwr7ssTGGi5kG2yk9G7UW4Diypk6cx6BxCnwHGWb1ZGDJLefaBaFgbE9bSuX3zHTHeVuaYGj8raDA9jDSkzq",
  "key2": "4rYN6jpKYvjGVnC85emd9jfvNNgJB2PKJHaCP6bxY5BUHvhwHKw4BXZPJeMGggAeEwJKoJvGeSmcG5eTDGtiwAEe",
  "key3": "2c8entcUp4FxLci4ai93W3EuBesSRTYkdgVWBSNZuCBUK3EL4534CecJJXRsztQZYn9cR3ertZbqTR9L2wZh7Z4Y",
  "key4": "vR3bhhzgA88ovKzauWopA84hBGecUH78Fzf9VgghcnMZMugFLtz8PsWyatRsb45MeuEQhudmMW23WMB6BF5qTGm",
  "key5": "3GatxmaeBWsGFGP4ikiPtcCQAX3XAe5QnYDsYRFnSqUEz8DTP9PdJ3a9aK9W8DEiKLHPikWLhcc5mero2GFWuRQX",
  "key6": "32zu3fTEUBJ46D4XcUnWkDEuZ8tQtTWAtiwPfee37aR4CrMp1e3Zo3KzgcWmcgGJfBaLycTXt5zeXcSFX3j34A3t",
  "key7": "4nzc5HcPaEZc28Ugrg5TNEyH4p9BcPcmkeaBfPCncGpRd6LcYVEvtWnsWLWSYCwpec2cBEW1MXokmmkXuLeB2sqB",
  "key8": "5mooJq3hG6KbPdonJ69p8X3Vy4yFy1Hr7RoaeaaMfMtZ65ggWmyukT4sdMurDHy9RhTsfgvzAbEZMdxax3ktmyvZ",
  "key9": "3fXWCPSyf5Nj1GSBDxY1SDRqdvSq6xWALYNnyq7UAZ23Wy7HBKv1U6NHe3edy6RQgZ3VBTuRyQ8yvDxW4Yu2ZvaZ",
  "key10": "2i8isVc8CBGdJB2JLG3XUAEGG9xkZXNb34WAwgx1s7Dqqz16N88DZSycSF3sH3zTn3TJSKxEYzwNNvsrGJKX7to9",
  "key11": "4hmbhcv5oFJBVz4TBUGrnnnKth1ipkWYLdUEfV2VrPn8SCdBMhzx2A1WwV26k83xA2LCN1UNZiM9hzb7mm1fMWgg",
  "key12": "3JQxBATB4Fuiqcpse6ikhCVp5xHJxqTkyxnmLZauATQ4ZpBwZT6cBoDxZEVVrqUnpmRNvyLwFx4PiY83GeJpHXLm",
  "key13": "UjnJLKVVQHX9toQBAffzWzSbScnvq6C8cxu9veoMZZvpghcpxe2oSYg7pcZiPxuVZaUAJPeHPXYMwAYdqZdwWYg",
  "key14": "29bQQ5GRGC12jzBuVmHhSRxesg8ms5FZXW2ij3um89D25WYszw9nB8aseys8qMmU8AhMc4EVFENfNWewZnsCSCBg",
  "key15": "3i72693vDHcxp5vXtbtQBXmpnKbUPFbMdm5DyGWDUQdtAg4MSpHXfsscxoUnbtFPoSbVLQzVfrfxnT31bG58rvfT",
  "key16": "2XQqFkB6vJ9yVLhDbvWLLzk1Ggat1rcbbbEmFkJ1nX193WJ2WntGwHUENN7Y3aQBy3L6AkPrQqFew1hiCAv9uPK4",
  "key17": "5NjtJYFCMM6Xzjg6TvpnxQcr8Z6CW4WqP5jWjGrKYvuWbUuV4t8Syxpk9RG5h3Z9e4tUF4xKofV3BNASqRD4J6YJ",
  "key18": "z2zwuSpy47bJRvSa3QfXCzf1pUqmJbbFFzXn8mqmSs3d1vCTJQN7renNDW7Fr9neWjBpXKa484hUpJFKvVfmT3M",
  "key19": "4h7ZtXBaHLAnLtUhrCo8q1vF44XyygNxDKgoEqSUFrS7cWupekbXQrycjPUgsPx2QxWm3uJKgTr3Mq4RqMH4LmHo",
  "key20": "3wwBfhhFGFMYp2aW1Li9DACkG1Vaquh5mjWSgagnQeabuvp5pDwpvdYSxjoFdoXmLGR3SXDWjnNr1heTwDvSz9y4",
  "key21": "46vQRAqr1B9CxCdjXPcvwzWjpkpwHUSXVhCmDXs6mWwEM1vcurxTduWmMuE6KxSL91qdYYzWL8mrJjKoQERXKrSe",
  "key22": "2YhG3aqCZfpjot9XpHzhqiXisrRjk4K3x1k8Eutoz8rDYBfW2dAcjCP7oaAGC1dhg6RsxZoUfPaT1HSdGaWDXTjm",
  "key23": "476TZzwkYhfe1ynRayJz43ZcsJJgTuRS7MZ1cNhZjVLmjKtwURVBG19sykj9nWjzfAezGqvTANBrUb2CWT64eLhL",
  "key24": "5PqAHFqHWrYGEpEwz2hBu5x81DsAH6pHU78pkkhA9QVFPzMyXtVqFEwDoxfkxC2C92zHwbrdnnCxRCJMywTaZPKy",
  "key25": "2yN7XvoJQMDy4rGQ7Jbcwm98mxhUH32NqfrHRKyDLkBCqziVRWrs18ZDYorYBVZH3N8SQfKGsaXQGgU2NdxFFSKC",
  "key26": "5JGKVAeNXGxAuLzQ5xj5eau9TyZgg4BvLBYDVtwqSU48VjXXz1UbsqK4Jf4DB2W1a3Qe5jCqB5YeP2GMBtmQToPa",
  "key27": "4Kbm2i6xQDuDzTjabCHKnFDERJ3LhoDwWjpBqFCoCJ78ggS5A24eSh4aAYdNZJd9N7voRrViEDCVKjsYb5XvNPfk",
  "key28": "5AyUVfX4nSTXpVzAxPwWVone1tJ6K9jYqzffg6eoiHX9b2K3k7nCNLyUBbu7aExoeUiYKdC6ZAPNoEqJVHrjneLt",
  "key29": "2wJADRTYjtjwSyLvur38xqNaWtt94LfU4VMuQYesAHARJz1UFyMmpWnMfVFyAEa59oFZ7PwhkbmwWEo62wmvUhQ5",
  "key30": "3tU8WxWZvxqdKWG6gaQRwXdj3H7uA3D1YMc1YmCJYqXijVCLkspxRxZg8yGfEh631N8YT4xRP8pY9tBTUUn2HiiP",
  "key31": "4TvWaL7HDrien1nVJ92UGtEu6j7sjfhyBb92QjbKHY4YL89sWhu1fL5R9xs3rLjsSzjXMNzE3UngkEEVZPwsj3oD"
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
