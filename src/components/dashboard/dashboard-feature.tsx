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
    "5jeuAmxXxtpSZrYqA6N84mmY7hFRJcEcyR8hxase96TCBCffm95h3yKeXsiBQ1MYY2F3EX6MD3tb7q91vkVip49Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "moLjMse2VKqutQXDhky95xn3jfvyJnoZiwcAVsaWbzzSvjRabKKQTyWXJGRqLUzaWQubZn22gktm8CWe2WHqVSh",
  "key1": "4Hxogxv9dKY1UnFNC3gPJx1vCzsRaaiQ81jvzywuUvfPWR9KNYmLgSxyEfWZmQ6d6TC89iEJEnoxjsp5S3Ghe8C5",
  "key2": "5VpyaxeWMDm8NutDLjYxmHXt13HEnWQmxt8S2NbtU3TVf6K7WSxeGrj8gonDZAArAWTZQDKZfMFTWLiaFYj4BMLd",
  "key3": "2TEeKA11nRM1JcS3ihkBrPdXoEEWboiKx27Gt5CRVUR9rX1ctCK8kgUiM11LjMYbRqSSnikmk8sNCs4NvUfCxY8J",
  "key4": "kj32B7j5rZgiej4NA6MYh9RbqMrq31uytuU5Gr89zYWJyhDhoHoH8YqfcfEqBrHNG2VNWrZLhnx2qpaTeacNeyo",
  "key5": "5gQQucjiqzQjS2wPNe5xQQWasdac7FHTWSuVWuRNN8FD6CVm599UrbCc1STD8RDrnXtrpfZWefBtmCbePp2iEA81",
  "key6": "5agvfWXisSQyB4uT56bTuJQsGY9WmGHBsb6M2ZgmS5kXH14wSysT2xaGoUWA7VRKd8ZeEpX9xyhpMJVwXzBH6r8x",
  "key7": "4wAKywJmkNDacgRPjaaUYvDDuyLJbHyJePU5tKobW27qkTPf6KGna17QJ5E9MG4WgrTfbUpz9ZhwTxDdS7ih6E2R",
  "key8": "4v21d6UJpRmBBZmQw8R2Cy1oAhpWmkdZQgo2oGyLpdYE4kHsj77EHSZ3PSPNjn79xTopEk7E1aDa2eosVtBsL94W",
  "key9": "2Lo2mvHJSnZ285TXFPvhQuqeR1uhWe5QHgXLmptkUdYxxSKqrcLvva2u6zugGy7SyoHaXFcpMsBzF7KFv9R4bJjg",
  "key10": "5KWJAhMFLfsYMELcnrVExfLNK7k2LR1E6Ygzo3GUgtbdjS24BhndtetdYoYidzCfi2UbV6yGmEgetAEroFHtHMdc",
  "key11": "ebXpRrQHF6vfHPjvWUBPThqJnHi1p6M3nW7Tfi5H6zBzZ9vFHZRFP7yyquaye2KDrqMRbwaccVo5y19eZ2gKNzR",
  "key12": "2HMpfQQU7PHBpvA5TUEADFfop17uM6z1DVPonr3j9EY5ZP9AGSTRuTFuedoWZ1nftFecsrJpZqsCmXEjjRtPg4z6",
  "key13": "37EYz66xWWhWGz7rj8Dh4T9Yp9ZQuQq3P1dW7VojfdMiFfie6VdyqC3uWAQKJ11JeNSRoDk31KGCuwgukDyJkXUT",
  "key14": "3BaY7zeneAPqC4S8GFsLoc7eag1Y22hAvjHGBrrmhE6U8kWCk8HJRfZzywDzz2HMDUckoQ8gk2AkvdtVQcFFKgq",
  "key15": "3r74b3AMZtnU55RQkZDBj5Xop2wnGvWpkcSTGQrBEJB3NvZdtR1y7e2NtvAkkjddHmxtvR2WAkjfeJxUT61g4vQH",
  "key16": "3CqbGXCEondHBRfEyuDQMhK4nMqxbsVb8XMBL1MnTtd3UTmAAXXpZHVuRY1JrC3hdHQhZXCXERiDpUnDEaqtomKg",
  "key17": "3xUUs2tffHNuG8yTgXoB18MfvmyWHY7AiJoMGog8DWkTAt71wrQvBMNsuGTu5BXPFftiPWy8myPSxA1jNSXAa7Nm",
  "key18": "3WaoK64aAkqVR4WphPeUqngSLycwAUnWznyTosgBTbkNUv4xskgCJCgvqvrRPrrpSdSxbGRnwouh1ZUpQjgXcd4c",
  "key19": "5FzPvHBjHWiX8H1B46n3dFXK1FeNTry3uqxwJJRnM4aEM9Mk7gLxFbW9bnb8cxGp17TzNTDmKsFHZtHskGnqCERm",
  "key20": "3Uu7NsobPineshWaqNadywq1xrkjNcHWZb9St26E1cfbBYMzq8zDDoLcuT9VDPdaFN7ByL1UKp7AsXhcVHjwVTr1",
  "key21": "8tbYJszSH1AV9wcdenHrtXENgYYit6wJ9PZN5WtY2jpL2JfobneTHmTTDY5o6WvKPV2vUbBmH1EFk75nVviieBp",
  "key22": "2iFatJV8jJVG8M1s8DWr7SNnZGiqa47JpkUMwGuByawykJ85sR38tpphyzuUgAmHeRPNy1iSAniWEF7Qkd4uyLZE",
  "key23": "2ZUyzr5tJBYpFqumXhykJZngdM19Dn1nQrG8EgHuDgjcjMHqDZFtR8rbuhnwakhe3gqPewNL7CK2QNetBTLKgSfY",
  "key24": "5gR7eysG8eAKcgEuMrQgsix2WFpWAmDVYBfdMw4bLYBK4M5ziAdpEFzxkEqNk1ivkNyxxiMa9HkSsi1CHXFsBocm",
  "key25": "4sxdM8TDbKGycsWbBt4UzPhXKm6Di3wEJ2476HChTJMVr55X4ELPxASv1siJJavsxk38JX59YybcQcmFygmfpbvz",
  "key26": "5ovNWPgn7KLYa99GXgy3MaPTCGH9MEBHAZBjsUh1Wfc9Xe8G98t6CHWKgTKHrYzfxkH88UqvJV4Br1VNeBCtYdUN",
  "key27": "225F3bxeCP3kM97MBPmW63EZw5To6NncFQWxpWQJEHf8xgaYQd6VfjCZfmFT1n17pz8FUWW26e6rG8gvnwUMynP4"
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
