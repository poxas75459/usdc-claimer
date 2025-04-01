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
    "5JEAd8J29bH8pt7Y3NAHnx6doQ9inmhHE9GzrAaU3CawfwJumCpBqnme3DFZmReD1Z3Zzv3oS47qEqihMhqNPhth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NF2y9hQdv8F1RP5AQuiizsM4mggamf7GKLUrNw7yCbVLBL5HGDPNa6Jby87YSHmy6EyguNScSwLDBYQAp15PKUa",
  "key1": "fMhQLxEcgH9nJTbG5pf756Y9tPievoC3isxzTfHHa3zqXh8zVJVTyGXWPr5noiRjNEAW5QpzxsDH8iBpMb9rC3w",
  "key2": "4Td1iuTvz7cYdCSyz1CuzKNhv5Hk9gzG1EdFvDHQffBbofEgdEAVW5dVbgw5XYMwVjZUPfoq8yCoptZ1VfioSQHD",
  "key3": "fzZg7xodGVfdwnmNx35U4kKRwxakLZhKh2eiV2AsyiB4kzsstt18inNzPMxz7AGMVPU9KKcieKyodBSED5DReD9",
  "key4": "V2jPVDqw6dTpXrQ7QSvyAirn5RuNtXXaAJmWRVeYe71s15GQYaH9ekE4irYhqD4RQdkW9Gq8EqqrKAA1K4HMnKQ",
  "key5": "3AY38nPBCoVqc3T5UufNnJwXMNaraN1ouJHDQw7zbZGMA22TaCkzKskeUMHopkrGiW56pfBRYTzTujYKePjQ9Ef8",
  "key6": "s6aFwbXchcZAdDfctpySp1JMqBBVQzmLYfWsRwkS69wLVa87dyAqBwXGqosduMQATzUZGeo8yMwF5PwcXEwcAit",
  "key7": "5gE4nQXyWLf2CDPPzKBeLTmEsx5CBkgQuC1naW9LuWxe3rsYKfoxcEFQMVQ1S3yTj2dgUPJf3NLACJbpjszY5Rrg",
  "key8": "PJgLLHr6toibSZikkC9mq32DcoFU96G3UwhXx4iNpfYPypzoVVv8dtPjZ8ZKCQFm26YLMgjoRQoAepAuvXV4D9i",
  "key9": "4NMwnZWq3EK1YBrSNGmecX28465tsHi1VGbY2ZFHpkiirn6Dudcxawx96vbfDRQtPHLUGB8dF6N2toKWpL4jmZmY",
  "key10": "vWURv1Wh7ij8fA2v5q4MbHjNZBu4c9fszcjSeMyTFM1redXE5GnNZKKdhrbc5YjHYocMvGqCJouABaLHDkC5wkd",
  "key11": "5thkVDpP17BqW3c6pfW917QqkEy6jFG7HZ6jJuZBMaTVYVTp7rxsi6pjqU6A3qNqToe57dzrA6hRCqq7b7geqrK3",
  "key12": "4QmNKP9WunXVwAV2hqQW6aQsnGz4NDcXMDqU1PzYhKsrVAWKNZJxnsywefKFTCX7cWeZkJfv3tmFGubwkZUFNsrs",
  "key13": "2aeZq2LLLtZzdGJAVGTv3f8f3cGL42GivofGQF6kz4fkgXuCa5H1o1gDfY98WtdTrptZ5899aqPSQ51i2xwLLLwc",
  "key14": "3qY3dEExjjuj8qjVeqSca5JpkCS8wQNWwx74Zh6QzeZBCThCVRSKDWvakmvxcEgzGkMuhZLuYUbamKHQj4g6h4uX",
  "key15": "4yHhF3VRtFgfpBNExF2tBKvXgBaz26myFS2GZKBuMAjVEXawgjt8gAFkeE74i3znoPyw2cV5YoGeFJw8Uccxe8Ub",
  "key16": "gf6LmizL52DDAGFXFcsLRYG1ebvojcL9XvmcGTxh3wut38bi2rZV25sZ36P474p2z3LLzX4XD7VpKEwGcSbuPk6",
  "key17": "4k53UzmkEb1wLDQQhdAPUKcKwBgfDHtYXCWuFGLvBoMpzVXfdF5tx6NbzjoL8ndZEGusHPoBVLatrRJPjhW35t7E",
  "key18": "qzqg9RzR41Mo4TuuLQWuSgMgLHpAacCyGBnkh7FDGJb8GCKe6yybjSGaVMyt8NRnDnQRr8k6cGmSStc7jgrK9kQ",
  "key19": "232WHNqbyKfbgUNutjiAYpyTg5rX5rqwKGutuLgiu86taiG7UASUoEwpodmCjfMCZka4UxN1B7DM7aaSHM5QKUTU",
  "key20": "4X1zNtz11wgCCdprxM2ueceDE7MH8S9xpAC5QtN5a7co7vFzgpowMEHS9Ga3XZC7v7Ueh5pagvLdHUWfrxjvDbp7",
  "key21": "2R75EJmsV8zEsDwvE5i5APTSfGpj22diRkJG9Rot9uxMigJjmX8fnc87uWjPQci1G4YykPUbbzXevYbDLD3C2rr4",
  "key22": "561wMyyWTNz2ybx1N5s5TK2xn28QhKJSS9Mk7TULCsFnABuX1qk9Fr23ikbd6ucFsftJvNTXA94DdY49hLGPhQRX",
  "key23": "5ueYsGxJKFWspEp7Wv3iygNv7Lj9PegPvUanG7uu6x12g92AbEm4N8h8Au2Ldxpz1pYVbdXTjvjH8HNx2yK66C2o",
  "key24": "4qwfVxXrnZLMa7XVmazPMFxk25asJFeApd8erD13xQeZ6nzKVLnyKmGb9J8Do5hA7Q72r4zzdRDYW28q8hS84qdJ"
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
