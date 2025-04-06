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
    "5WeC6zNCbEfze58ZtBi3ZE8jXXUP2tKaCcgNSeu2wgnsAX9epWW5fJaNAxfZwjyC5TpNJNPE8EDUzVbpefmovsjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eErEbva2qgHCCtAobaNj3QrhbPbUnNhBpt2dhoUNgZVEEqMcYgJzd3tg8NcS9oRHDnKPxyG3yj7HA9uPKtYRbwR",
  "key1": "5zrVBnbBRCYHH2ScLsafAWJTqNTjcjN6JBFd9FjKQffzbH9rfYkWsiv1JsU3MEpvUQPE1SGz2hNRmgad7XRVSuJ2",
  "key2": "3EymF3cuK2u7FUKLpJxPp4XLyqMUEwXoL9NoBrjASU6KAwSK495uTtiNY9efHeAhYiuvHZZGn83ggBWkAq1dHoVo",
  "key3": "56yQ9h4GqCyHbXizUxYem8eawUFtvbbi95axF1ve7avEov6HjxWmGer52yYmAYejZv9erekEJkzKAky6b7Z27Zo5",
  "key4": "3xNtTNKaxvKyNgJp426nPrbHjyW2XtGpyugzVWwWt8KEDaW7HygiQLDxY9PxbTZAsZfmEE3DJu7LAu4xYzou4CYB",
  "key5": "2fNkEQ4oBifF89M9FgENctxqvZFtELbYLJPozAjyUnFdNffuhJwKJowDUWWpHhg5dMPKzaGfLRqEaUS7Bya7FG6k",
  "key6": "CYibVCW44YozwfWzzBABwDGRJ1jnvdYjUwwQswoZf1pKv3hc4g3vbeQWz5BAWF4Gt3hGvaFPqiojp2dhGuCM1yX",
  "key7": "y4TfbDLqjs4PKtKkNN52j5B8efBNKAZnCgqgR5yKk5g2mMeCPa7ckKQktFzXaDd2PRKv7qAAnhbFboKQWbtUP25",
  "key8": "5maXQwmFyEqJRDwL4HTS8CQn54ssvY877F8ztDnwsuGzX3KLTZgKb28o5c46ML1LtHTAR6k8Qpt6L8xaKvZNvh48",
  "key9": "28BJoKDttfi8Ef2SeDLjVkFVWxrVJf74gWJQmKtb1jS6haUhzBUcKadnvT2AkmZyR13kKhjGagQR9bTrwGmqBenA",
  "key10": "FpcnWCKLUr8AuVW5Zgq7em1a3mgoAhyqowZnfA58ihbVYkiHRCmjCzzE5kcdsz1oX4F6cVAjcNCsiY1MeZ2hB26",
  "key11": "5TCsnzVAqtDrJrCikgr4D6zVt58zQY1Ku43b5NjtdDxqRxgG9wsEMNiNRRyFNs4GDVQPb8dvTRTiBZoJi325NUX8",
  "key12": "YQbsjT4VUWfmDA8vBikB2MuF99xGqVVUg3vQ7GhVge2VtQy51cenFvMXfN9vPzjCtVsFM3SfTnQzbt4SQyrciqg",
  "key13": "4GATjXmeiXoUgSxK2HfBraAhphWqek9vjezbw78L3hS5mrNXdeoPVDCse5rsTzMTNzPokwWGcYqWXwyk9bV6DK3x",
  "key14": "5QNajiXuECrsAfqqvuLZAyvrkhcehuAqMPXoz3ooXM9JYqhRippNooGKrawTNbSzLWmyV3sMetrSc3PUd3qfKQJ2",
  "key15": "3Q8Sjo9h2MJqNdatPLiZyLZE5SN3i1wYgfDduhr23Ee3q4BJHJRrFC3RTMx4tGEoUmMkRSEAMibc9MW7xMnGDReQ",
  "key16": "4My2jDbK51Jp119yohF1NBYfGtD5BjGhsVw4SuhbuBMcNBgcqDhzC23wG21t1bFUU8uMWyVrmNT9jPxqkq278tdF",
  "key17": "5dSrsvhsznzxZqbwhvZzSb3cQrRwvMBWrHVwnZAoaATPcWPPPAPQAnq9X7Mz1Vk5rURXYahjdtCAKXJDWwbu2tQZ",
  "key18": "2KokB1hMKc7kAS2pvTMNLrpN7LB9ZCpLEpSndxoB2b53mFbktfEMvaqEEpdTU55wKAsfppdWCP6JYtm59Uh2o7Eo",
  "key19": "455BMbAqN52FJntpmbkAksPS1wrWqNDHwfXcC5oT4zDnjAVgjJGqMsBtgbMrut84iPMAqdvfeQaEcMqSQY8tR1vM",
  "key20": "2shsyYVXb7LTQLRPcNMHaWM9CHUSMsHuAhPV5JKcCMvneZeP9T3ChBZ7Rr9Q94modLzJbLJm57xqg7jtfyqsMMRt",
  "key21": "2r7u6hDkyF2Wn5h5sdADZFFoqAXSQfvHqw6rfkBfydSnfF9kEWpgF3xgfbsmXpXFwHJtQG4mkNKKzfVy91dTvkzv",
  "key22": "3vQp4e75XCYNKDgSDub5T7CiLyGMZmNtkLhEopy4ZdnHDkdWCBrcusrk1r3eWg7LDzkehpUVPm2YpdYFPfRmCZVP",
  "key23": "kQGG4hxvqwunUxFeBrgJAonGLEzEXe74iJNwSd5pBPSy1QSUDo3Y4oG1A2CD8ehaFVshTvgypp58YHtyrwoKDNN",
  "key24": "23ozyP6zWEFuaeRqnoxopZu7Dz8Mfpwqe15naMdPwbiEQccuWcPak6yuDA3h53yG1CMJ6JdHsTCTJSHBrp7dgUiJ"
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
