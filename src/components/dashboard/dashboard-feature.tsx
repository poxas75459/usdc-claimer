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
    "4Dp7prtzbxbXvamMsxWdW5gSPP7mUpUCnp6YfCU5BYxVP21u9Zda4TBCFNAFifaSbkSHhwCrmAjPRJc2fJzxbejV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWA3AC29HALFvDnEpFnxgaMM9jLvCRtYSouFJxQAAL3cTXB5yuJW88LCZyLyaydaNcon4EwVF979oVpBSYpZn1M",
  "key1": "vn7ojKVx7x2hkDHAp7QubpzAMzProdBgYQs1LPz9edKbFs7G683ZJDfAGfpbZ7ufLCkw3pKcQvWB1kXw8QZ8t6d",
  "key2": "4WfFpn2i6UYxqBxH9xa8uG4KkkPESqsw98PB5KvHj175aDJq74edvm3KLJiqmXxYZtY9LnnvRzaJtQVF5rBEkjYm",
  "key3": "5wCmV9jCPDwPWiHRY69pr2YdemcoZW1ims5Wq712m6gpaDRbmAT55yro4SpLpkLPr6pdsi22PUbRuYVMGfwmKM9s",
  "key4": "2YhN31P2ENUKsgsFY4X9EHSckRnhD3WjdHo8SFZzWvqTHh2WJZruCKHFfWxtm4s75RqThKJiRfTCaWu76YScc7Cd",
  "key5": "2XESPvjnhTUyM3c8CwzTN29XXJUCNKtud6UzoKti99PgLBiqg8tNTXJA2h9UEhHui8kM9CMsbACchmYdgDFyoTkE",
  "key6": "2s5LFJuJkjHsNcJM5D7bX2fwB2mmJvzK16mMfU1QcJm371xDGKGjf9jQfER9sci9ZXSDwEFYiNSPCT4u8hzfbidz",
  "key7": "62TkXW7DZi4enRuJMKtdUsaGtwntYrLCr4oabvP9ExP9vnTB7F63qjTDVWBTazwRRxS3suFtwisrhMjeV88AdKXQ",
  "key8": "2NkQxkwBrrPG93aNyuS5zGcujaTitebsGXjMfCQUkSsrQCFcJ9Y55Uf4cK8W3TKUQQ4DgMkcDTZFhYRXMrBg9ZEJ",
  "key9": "aM6K3cSq8Nc3REqYTyoZx9ZoaTNBB3SfY9jNZdpJe6492h3WdVZyhoqyVA4f4U3xBuqJ9ww6LXYueWPPS2PMjZt",
  "key10": "3fQQtESEWrCyHZRNx3XKDmF1RsLYj4njNcrpkosZE8sfAjYJQxH7HrftC5dJ2jsW6DQrJXwFLeQTJZAQgfY1pk7M",
  "key11": "2foQZhbizLLVVnP3bdKYNF5XUtSV3zFEkUuGUSJXfx3NDCk23VFGNmiZVeEqtkQ2PtuWLKarFBSG66GvtkZ8uuPh",
  "key12": "fid1qDRoBUduGHjGExt2G1CEoqCZGSsAiP5QgeRrfFpzgJvtnVSScgefuKSVVctVMMFaNXx5yf6DNfSSAbZMGqF",
  "key13": "46SGqHpWKXZ7UroXcELsguvX5Fn5Lxub6frojWbgwATbzyWXSQfcr4XcebMkM1npLJuHgyq8hwAVpbY98yunYXQW",
  "key14": "4YahrQJR5h7LkpmEJmnqaGjYpGA6uFsCE2fwmqn3GBGDEYybNL8iQdKRxwBZkpoZKZ7HrAizL1kzB5mUQsHNM2zC",
  "key15": "2hx6hAdYe8FdKK5t79BGym5YbjRsdHDQ1uMU5UQsbU3s1bx7eootkM5cvBEWuDjqnmRGaLsJRd3JRDTUrnUh2ApD",
  "key16": "64Ur8mf2qBmNHBKX9i5qqmD2MUYdPWsQwueRwfB2rYSnQLPRTtNDb98WNs7y63wxNoqrzpwaCG81TB9A6Qv1b9vA",
  "key17": "GJqyaYRc5HiWApkN9SRvR9xKXxNUijHyaUo6NjPCdBsw8Cfmjyt2Xap3paFTsL6GJkUfmGDjhuMKuTDVPNWthFq",
  "key18": "37gx1QU9xaeSk32LxkUyL4Uy3zfxAPhEUuKdBg3Hu5YnjihyodE3gV2MhTmftmQcR9s7gZktiwmgNikcsFFfkiqF",
  "key19": "3SHPq8oV3RzfCwcx9kWJED94aQ8PQkfmqMjVVYSCFzwv3nqLeoRLCT1NoUMkudHeYS8yD66pVsQn7hzz4NgPJrqF",
  "key20": "3NZMoBWMjKFwpvCruwjS5LfGEaySnJJJ8NnqSyVd3NWDPARjvTPFxMc5rBgHjH4Wt8dRC9BXj2UE15v5mSwGvmLY",
  "key21": "4HhWHoFzZekgyG24VHgMhsaS8SpaszEfxgR4DuqTVv1sumean8ps1Q6Mf9W6175rZ98fmXSTao7MjexTgbcnPBxY",
  "key22": "3ybtSFYBKSdE95fYN5zSxRmfEMCnpLXw5HFzQxjGVZUNzrmTFNmqMfmGa9g26KUqLc8VbkaWQ3pAYQGmUg3WYvf",
  "key23": "2YnEFGxKuAdsrkMuJQZSVU3bjZxZqLwmxK9BygEqTiVoAyQ9spSRfEQjL6NLVC2J3chgUXghLppqGZZepHATsr9R",
  "key24": "24LatFtWvCBA6tpofdeb9Qm9odcrhqQJ5uD8KiDZAM6i8VQk5mna4sNZfLPwiXk4eF3cuQSZL7Sx1or9kLuFbF6T",
  "key25": "3UCL28QR9nEKyciDCu3t26X5edXq2Jbu5dS4gQgqreEyqUnBxebpD2w1B636aKakwCTaS5ioMLAZkikfoBxTbawn",
  "key26": "2uEG2a5DSDNfQbwQWsXokj6KNbzVepYZYWXZH2XsjAvZsRm3TdJEQ69WkmwZvHosh8iUWqwJWs55zz6FBKPPRjWz",
  "key27": "2uMaCttU16vcZmHDF3AutM6JqvziBzAEjWJUAc9YY9D1z9Ee7tGq76FgH25KcBEs98mQFybXomcFYUc9cArypRGC",
  "key28": "4rKZstiVab4YV2HwstJ6z2DHY68LJLhPVr9PKRRpjDPWWWzhwvKy1w74U5yVzBaLPZ4fxKiy1MXicPEGVw3ai8tq",
  "key29": "2XgkTFam8sc1A6VrkvGJuGLXYcUo4YNeHf2ANLRn6ZAK8h2aD3aKph1C1qdH4vWBboFz3QFmi3tF5wvxYsdNRHBQ",
  "key30": "4ioNz2ecBs8wZdr5fz7YRuHvb5o4Mcy71iKi5ziyfFwPyur4hfqeAbmcU5x8PZHamrxRT8tJtXZxnfLVU6rqAgCf"
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
