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
    "4iLWyRRTJNsaHW1y9wpDwPP95upfBtTMwbntcpdBbS9uJsoPrrNhGoogPQEQExCayDwu7oEBg6EHHdhKj8sjikFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kju8XY2Wse1YreyG9zZYkRz7g5iC6TSAavEGTUiWEriiw454MfV6PrZaWqYZeeveKbWeenN7Wp9Hr3iKKB71wBd",
  "key1": "43CXfcnXfA62VsQfHG3MtGtHsN6w2CHf9vrDcrvd4TbdARXhVUjZVp26GqBvcqHhPRvkgcRX8G96i7512JCad3Ud",
  "key2": "5DPmgSVhyayqCUjFbn5tpRDfqYrC6ZA4mszJDwnwEih2GzoJeJ2rX6mCt7XpGWbPu5w4Ggj9FvvfoBYtS4uuX4Zv",
  "key3": "5pBVz2HLckfq3wfiDu5uY1gZesxBLnvG9s1BLd12FbT3oKwsT1VXsFLtbR5owZP7FATNqm1WxjLU2vqZd8wEvNCc",
  "key4": "YoXDetvfJHhZAj7xPuS2ZcHDkjP6LNFLG6R8BqUezC9qyxkqv2QJJaByViQ4AtnpyhDkR91R7a96cfTqztF6pSi",
  "key5": "4wDjsnnYrzTfawPEguQuaTvfEQzPN5RUF5SiAu93DMAqFvKhYbPf2wa5wgqTpyxbMAn4NzCpabpA28jx1GoMDWTY",
  "key6": "5fZAUrC8Au85bZrGdjNKJraZYFM8Hxfvkgd4UTkVBedtUmy3GgJV4QfusbTH9a2Pko2pcmFT3ErS7aaKRXBTcaXg",
  "key7": "4fnQtZzwRv4HH2F3zphVfnAD3jLTCdke5FKmex8AwyJ6vAvUmNCdNtjoeyYZAxzzWkJukHtiheHvxahf5cv8t1F5",
  "key8": "RWmdhgcXp3qdeWDQufRjvvEpYkYW8opb2TNYSUDkhrPQgxp1P9rDF7qfDqACn8DqLGdoCBQ2uYSvjnywnCPsUjD",
  "key9": "2fMnvFTsPm2TCSq5X5NBC6MwMUgQCL1fV2VGMoSstgHQFNduwCPpraNCEpGq9PH3snzrTCHbb7qm55ZjnPCqDKYf",
  "key10": "5dassaSSEqyh36hsEn1ppsFPLsUJw4dijjQhWM79Lp65WW7vXzZJNrVNL7hRYdF7mo5iNLZGt1WNDPEVZKwBh3tA",
  "key11": "5nALT63ZPAr8nbwHHSnhrmLMVZNa9Ju7f5vCWudgp5tRDd9gReZBKhvmhAdZBN4yfL6NQTqrDepYKcwevZZdT82U",
  "key12": "3bVvSNjze8FHpFaVWaukcoLpnd9fRVBBtYGcmvekdhxpuvbkhyvS6L5zZ7T2AwedXRkDRS6BLAQv8gXDshtfhJka",
  "key13": "4rZpuwTK29bWHe6j4BbmmyveuGgehnsj4NiHixkAWudFfnX2bToc8d6szvAqoQtYJvbmWL1F7aDGhRnoJydCgdvQ",
  "key14": "4Ud1sqNRsCEHeQybSLUHEbeQKH1itxPTcnXeYRyFcoxXPtWk2xskPj9x1MqtkMMfDHT7LXnVVGiSz5j1KEB8NGz9",
  "key15": "3vnAJmjwobYrLMbJbqd9ftWdEguoxGND4K6VZxzA1ZUhBgf15pko4tMKBb917yBzHBhxrTAPJTMRLk9R9YHUfZsn",
  "key16": "32DMUDJoD5MnyWLkps1dF9XEsoHroDhvfrjz5w8bYJqnqKECr9VEbfNvWVfuNicheT6WNBqDtNXbJs8ETB7fhnLW",
  "key17": "55YZoVdiPY8te42wSHzJjcADicD1QEvkhwCkPMwA7maiAH94WkBy96zVECPxHYPtxtmmVi1zKAL4s5efdWf1Hdu5",
  "key18": "3TUapQfhKfVneFLwjhm5Xwe6kVAAgVNjwJMH91jbGuSA6r3UMcLkCjph61gN8ZNdLd3eQ7vRVMHmyQwVng9AsfR",
  "key19": "2NjCzyuuisQoi2kxQMa7PRpDNmiDuCzijiUoi6EVfNLghYzvd7NK8RrJQUh91T4GAtjP8j2bKpCjNYSapGhy97yc",
  "key20": "yPsD3nwpjKLnjgx9osQNY2xSwRJZKUtbgz63fmaXYJsaWgxLd6yzDoBZJeXHRjgZAg9dcgTzFjSPDTqtLXbg348",
  "key21": "u52D9TNLc4hJ263Zm6CSoSd6x4WJ5zpP5T15HB5Qt6uMTMcEdE7ECw6nWZVxsT33ofsZSiHqdjZzjX5Yc3iRCeL",
  "key22": "42g4tSs62EgZZLuDXPwcYwFuUPcLf41keFUonj3SHYtjpARWzwqcfu8e4sZ73KLQfbN631LzW5N4r7gwsaQvp7xc",
  "key23": "RhaoBpXaPxu8mEQ1SPZYP2e4HsC5zgajn6jbzXNY13pezLq7PpgA6hJHyBNrWbSxaX64bCHo3KgXj3z5VVsdUKK",
  "key24": "2ke3ncDDVoCSY2GexXg8KueiET4zJraiPoguMeYBkPcGB4ZDERMYfXJGHHJ3B89mFRfCUz19RsATNmJPsnkZ1iBL",
  "key25": "3CCt1c831fq8YE7MvDnGxnsbMvhfjV8N5ozZCw5Df1LAukSEsX5Enrw6wZnLyANjvCvDbTNZz3mKnY8aNGJdEZKE",
  "key26": "3LB4qMabNiD1nJgA6nSUNnJ4x6Pj5xCe426xmSFz2j4jEENR3Px4tGm4DkFio3JtRz1cSrWHWMUjckdkkLmT2ctQ",
  "key27": "4P2F2Yf74pu2WBpQJTokU2pySkFw3KB6UbKFvTFF3JaANWAhUhcRiQKjLruiLmSnNo5HqXiiRyzCfwJWWwp9qGdZ"
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
