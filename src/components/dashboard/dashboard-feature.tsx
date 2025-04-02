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
    "2n8F3zhBsJwD9ArqZxiR4E9ivcF994SAB2m7UPhair8H7YqbEgmb9LPHGbxinWWhNsXmhva3apU5ww1qRgUqtHRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xz5csMa48FffNZ9LvPJcNmmz6w18EFX3AQY34AZte2LxhA2Ykqxc9UY4aUUefkXEWaDsyVMaApGkHsdDoaSDiF8",
  "key1": "5pNDLHYV2vBDkee4NyEuEmgJu98o2ZDvf5be1gcX43m9V2g1G94azvEXmCP9xQX81QNHb79wY6wTLDgY8cm5JRDJ",
  "key2": "2MF57smh4PatnyDcznyCvAJuzCddTX5UA6mZ226UznRZV36HmKuoxqWNrhqcHfopqRGGSjXh6kwEwLCBVHya3aFv",
  "key3": "mUN1Xz7v1HkYWaXQbArp9n7RAmiuzZj1gGEhWofSxM8MFWX4EAsCWHV8bYMH24UnUsmzBMmwSjpbsANNdmiPsYc",
  "key4": "3yGc5yCTTsUehLUndQzKHUNqWgifQsd1CybnpUiNRqHcmvtoW9B2qSz56LmQtYKu5HGgpuYS4P3Wunnx5j6MfeB2",
  "key5": "5V1WD4maRse19RYQKWE6kUas3tKaNASu4ENmWomvBBybWFdvzx4BkQnZs1RVzjx4zfDMbAKc52mSBmp7SQS7J849",
  "key6": "mwcTYCEfZvi2KxQn5gtDXp3rzXDSVtdJ2ScNjmsv1fCnUXVMEukc9XMHTKiPj9WaKSXdywxtiKfgVSCSToppa8b",
  "key7": "433D4FFjgzEg4Z3peKPBPkpZ5L3KGr2ARsZS8WpF7HD4DmxpjVPpvdgsSDXkDKPephzxA1DUuCN2B3zHRvq4d2nh",
  "key8": "dkHUbXHJy5k9FuwVvpdsydYmRAjVUVxQUMciTWnTJKq36eW74R2DvciD9ne9zDaA3xFYvbEKRokKYhUTj7fm6e3",
  "key9": "ub2m2UJVuZo6KcGX34C6kf9ZFawjUD4KpKzgLrTVNxjERfYFRJ3idUyS4Kyygn1RyVMFYyvSBeteCiPphBhgCYp",
  "key10": "moeC2V8CgRo2KzzLLY9FWn3riJzq6oKyyLArHJ5NjeWA9CKLp1CarkYoepWkvAZ1KkBHecBeLojuKHVFNhjjs6y",
  "key11": "tmiL8jSoBSQM1mVo1PX2iPsDNCDHzWX23fzYZNsnWxotYiR1zGWeRn47pdo9QDPtLrmoAUXcTftFEAePgpuQm1j",
  "key12": "eY3pmQ9hScqMVggLFHWDSyDHMxrLoL43wcRPwd846WrTw82sMTdzkLs2t2En1dDbzJUKyj7v1v95V4Si9BrUEeu",
  "key13": "3avWwHBziB5gpqJ8dpgG8NjqT1KLoqeht49smEviqoMdbAALTzBehpkT3gxi72tDyYUw91SLZmMbA7L3BcQQRdym",
  "key14": "472S4RiMNyrrqXbs3GHQSzxgR2EUubpMzb7a5qXCAyUFi9qe36a9jkMRRbhwDN3RrLH6kgYHLpiNc9mZjcBpiuBC",
  "key15": "aKwWuFRRReGfP1JmF4t6yWzu9kxb9jnMda3qY67hUcsUnsiHRzgRy819fWZDG86c4YN7vnx88fbcUcBpeLMEyye",
  "key16": "2kDVf4ANMLPoos5MQ7WhHu3p7zmir45WGZxaYWEKexjvPkJT2J1RqgjWxxVFgxH4qxNHK8qTKZSZ6a45aNNqWjAb",
  "key17": "5maXN9WpyytvEBvMNsemConrXzEjomC9h6btaYtYWQtLUn9TrQs6WdKV9bskbfS355QUnhahhMAy8Z2y5Wjfyrrv",
  "key18": "3dPgfs86nFGuj8KNzezKUF4cjUvmCSBEsFjNhMeBTmNwg12qYf1Hiu8YPYKduwxeMWrciycWmGAFaTKqgtNhTKh",
  "key19": "2ji3Xe6uLkUuS7JKs91TVXZDf6WtwUi17GEEB5P994qdewmLzFoQQBSAe3hX3b6FAZkPttctpacEa7Nn2YZer5AV",
  "key20": "3F9HtvG9axUYRNy7bSzZA4HjMzadykkHUjKjRkfwEZn4YRkpvzNadQtmodKu5V867F1UpDWgk7wCtNqjFXyj8LDK",
  "key21": "2fLJnjMqyW6Zzsm47AM3JeUHWvFP8a8yDDu9TXsqU5cgg8XxZtNDDTNYUs51T6YCNWikBHnCD1Z9PSJtpPcM6HpA",
  "key22": "3w9to6YAmC11itoJgkD3vFKT2QnNynUWKeB6QnvDtjqS4ejZ6wAzjGpqZ2emREq8kTveZTYFXnAM8ZXLva9cYHFb",
  "key23": "3kLFMAHk5bcoXPUzRAS3UjEWvsCd5eXwxXvY6HUArvJ3jDDDEDenkdiCyppqQRf2LTeJL4KxaAV4cDXSYcvtAZ2H",
  "key24": "2gi2M79uccN5k79n39LE99Gg4o2WbTtufTRQb4NTMR1bBXyijfT1gDrvpimatt7DMBxjWMsaNC5Cvb2nnLYKwzaQ"
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
