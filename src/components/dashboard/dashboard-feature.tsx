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
    "2vf91kgtGwp6DQqRcz7QZsJjpr1P71BbYb7cNhAYkZQQNRMNhDPMK4ZkZHJRhczD4aapowZevtArRZEwTCv7EVFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VWosAbKibWrEWrcGryHmB6xyph5UiCdXRcQCLmki21C5aPDDvY1FFR7UfMvGqzJqWqQAaqP8CUKc1CUpTFVNVvm",
  "key1": "4fesidRBP7NCeAz333wj8JTy279cmw4WGoRSSKPRnkkjPPTXSMUS5Ww1vm5rYvEJ9saAHzjBPVhdtLm4YTk1cuSQ",
  "key2": "3KQmd8VxtGPiqZgJxdvPyroLs9pxv58koTANFwtuSDjXDhBWe778dxFKjaAm34mK4HX4Ty2TdamkfG2trTRTSB5X",
  "key3": "3AnPZwCYrmmD1BzXxpM1r6x5ZKLhgVyqh7gPhY8JQQHvnaLM7MTa63uMS9KHwVscWo2fZ286WXQB1SkkXRTzEmtB",
  "key4": "3VbKh5WBEMbdhJzGiz8Bi85nGoXumco5eTST4pp6yUfC5PssytCzXaP6fWh4tsqPPjfhZ6rG7j8XkhrkGjjwRcL2",
  "key5": "4SwbMSH5SQWGQN7Du6bMEqs7LTbAC3tdEhVMSfeUnjux8rvPrd5v1PBKq14MMHHt73dmAKVRpgwvg3Kx91RpQy9H",
  "key6": "2UEDzPGPpeZRxUmjoLRUY7G6srpQBWw6RjXHUjt2vqwjovHAGG3trkxcHuJzo6H4hWFPE7Ss1VxzfSKo4i7qGugb",
  "key7": "oq4rbjvu15m4cuzwcNA8vkmWysRaQKArSSrDKL2ARs1KBeNBwUdkMdNLdJHEvdPs9ppT2xY6cDrAaxmnxVX2H4a",
  "key8": "28etEzqnwW5pTunjqKoSyELcNkh85oMSJMt8Hz4azLqNyhGc9diB4znJay2s4XmLEo48uXctNdK4dcvakDpQNpCC",
  "key9": "Y7eDdSHcUaGjCBkFcfW2HrQfRqKBNTeGyYmvNVji4dWJpcMt4xUVYzYhrRXuRiY9XDLDrhS6bJYo2jbt2DJyPjm",
  "key10": "43tWTcZnFs3WeHyyG4A9p8odXQoqgFt24cH6SYFGGnHvrMMLcntgDzCsCb5LvsAtWckLVgAKxWfgWRnHDYEbMQZf",
  "key11": "5N3THfsMgbDWQzvKxwFAXbvVCWXjvLxqNVkaHwz9dvY1KHNvVk8jhKMvW6d2caPjtpe8tYcWiD79NPcxCLKcAfQ",
  "key12": "4ymQegSBxWHYy2x9E6cGGGUrz3fFipychQpiT1b4NQQj4nHKypk9pJJqUkHRrEPx2P7EWuY5GCrNCd6GyP284CLu",
  "key13": "4zP7sStfM24jsQLWW3SsWFigiG7DsvYwfF3yhbWUe5Z1GKwfPxpxjESw8vQKieWnjFx5uWdCn9wLd4hMoKeGAxtB",
  "key14": "421zYDtBGPp9HmCpynsNW78YyP8X6bAMd7v6o8FxTwxjGTS94pyhMxyK4pwEtZUFve6UB8Fyx2dQN4yTMR5Hp2D3",
  "key15": "496esJPpqHqqNd8oFWPkWZryKaLoiH72x5crMBvXVK2NLeDZjo29r9QjUfwc4tS5SAokj3o5kFcGztDeoiDeCN32",
  "key16": "3sugp947f7Ygf8jwECYaVcDa5NhVbWYNpzREe21SHKr3JqDxqohbgX8dAaTqaVumVtVZodUQgsPrgkhJqbze6vxL",
  "key17": "mq7wcyFKSy8skpijmQ78s8kEyM1qc73LWQReERCXr87VDU1LDiJ4GWxFZXwfKPbNqSvEHCnHEMoKWHEeaNnxQmA",
  "key18": "31JQ6UNHF9prmNDpNeNg2gU934GP6JrWG6bfhSdMpYz8oaQ8EKfBF2DyK3iCCiJ5uUCwtrkh8ErTDqnEKJXxQxin",
  "key19": "4xk2s8PVju91QWjPab3j7b6Z9H2faFPFx6dV2bU7WuMtLagfqtKwmW5hD5Dcyuc4VpAr1fC4ppfvYPRFX65h366r",
  "key20": "3YVPKar5z7dNRanTNK8pcSBsBmz5rmGjMwodDzB9gnkkHfwvHHMcdH6p8JdJWWowSeFt99N78Di54Bjq3BtGu3Ak",
  "key21": "3PjTt4G5vRYmkx3WVWcLb8WtoQBLwbtkr8S4bKFjPHsJ5mUpCyr5YXw4keemQCH7bPXhCQrNVQL8AFYDvaJ771Xg",
  "key22": "MFpB3PfC9Ln9BpSXBp2J7aVsEt8xdg15pstEojzZZiTFmufooFAAGVEMK81Q3zq9rAZyycTutvkNgLYxmgtBsF4",
  "key23": "5kcyNfUMzgwBaSVofEVFz73BR8PMvNTkx95vcv6FJmpUoyFGnpLz3zzo6AmUyKyZoZ7dyUom5xyMhxNuVAGW3cJ",
  "key24": "5UWrWh3G4qVgCDcc6qPhTjNuSV81puNmxgMdc5eoi2HdErXuYf1QbTWboTqXspRNXgxtRW9RQqi8M3rgsc7VCxsr",
  "key25": "3jtCsyC3bSDfr3Zb8W6KjVWvstxEXupz5XH2ngJeow89cuiYwYtrHppUFbjkYDkjqxLNrHGANCS2LzeQ7tomsga4",
  "key26": "4tmi8HBtMUzd9WkpoEDJEAJW8oUnUfdbcQYBqavW258fYKzcwh1RVEsRKE9bEeH8mnwwQzvrrEc57SoLidMmCAyQ",
  "key27": "auKjpRMrrLrMpBhrVuwTx7vApjoCvRJma2Kt2YEdnWA7TQom9EnFvC4G9tJe1jn9wQbXmizX515oxcMV6g8pa1K"
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
