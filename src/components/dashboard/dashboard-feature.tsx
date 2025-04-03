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
    "21inZVXqnKLMmpUNrEMAAAubda3mY8UXZxMDEkE9cCnA1ZA5pcD4xh4SSV7ieyePCvDRg8EkekiigfdyS1hrQHDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TisjaUuAoD4tN1TBPeFq7VoNB2t9sVuN61qjqJdNBioEqq7r2dVyz4iCZdmK8bxtHAtYSD8ExppoEv1haBwRpqT",
  "key1": "3dhtcFC8cypXj6sG6xgLjFMo69bduD4ivCYknDyxRm9Tb2cJtyu5wTJtCqttN9zaBDH6xhXt9RdzUXDGG4ggeqaE",
  "key2": "m69Pgq4xsPqJYaGTF1yM2D66FcnSFYbL1qZTwkcnBUQUJy9SEfEe4vVB2jKr7K9ghjuqsLeUn1wU1Wi5CiMnXBH",
  "key3": "257iBpM9uAGWTgr6xkGkZfmBAeCMGL7omk836CLx7Wo6tVz42Dq4dkyTH3KJFgLinBUrAS1wv3nfVQABF9YEizx8",
  "key4": "3gBG4zpVMBgMvaUpPEjAcJMLfWNjre2fcXqggiYhQpmBE7faUQEkwJvekzfB4oNSZVJzcATfDQjt7a22FgN4vBEb",
  "key5": "2LeGCppHFFuRk29gboSSGMm2Emo4y23nVotPNEfUUMaK6EBntSxwfMLeJ4vYkr6HENTJBYktGGqLLbS2ToiS7weD",
  "key6": "4VUYjj7pbkeP4BBEqE2TA82wVLwiRE5KDFHRg8kbgHSvFFNvxHYZtjdkPAXYN5LqoSGMaGb6nuaa2EVGVJ2qxxBo",
  "key7": "4kWyMnUc6wAtdxHjQPGMvLkDo5XWsmo8ug3EdXMm2eVCFMQPFJJZZK2B57yYvgyVSwKiQGGjW5XQorPDDDxSESff",
  "key8": "2GWWUNjn9xW3VfDpk6VZ6iRpoTsYKeALQPGr4nN4vQkAv5zfsRaf2XRU9cnsiEnff6wNtauDsPicNGuEaigRT3EE",
  "key9": "4Az4ii8Qoe8KP9pGPEk9gVLoVLHpUoRAVhwXMcyrct36AuS6vd5ZnZZw67WaPbMetXqmQof4bYeSbdGEVZES4nbi",
  "key10": "yeYP1B6qe7WrZL1oDZDpbkBSwhUNkLMfWXgKB3TJD9fBs7eQQboMK1aLeXLVKj2xjykDyUg1Q5UrVs5qAowSyQm",
  "key11": "38p9VJ1HV1Qix1opisgyt5Zw1gU2azNmUBi7i4zpadKaE3D6YB4uyaWX4xiSnFkBs2SeFpumsf3RJiN7XvBMRjUY",
  "key12": "4FWeHWdZYxM2VigVkJnx4t26wAvajvR3wGCC2VbNVBTkqY55yiVNsMv5nfzfQ1HyUouA6eb9kPRJc4hAZFUBrFv",
  "key13": "2vTfgjvbz4YY4WEPLC1tAUjvn9wQCZCmYohts1s9pa1NjQQjJtxkX2MUJurzi79C4PiNXAZp2bcBuSjECPPoXJ1K",
  "key14": "1nUNFia4X3K6S6SyUPNmDK73kdPBFKRLCDZw5EdtS85k928QgoXYXktzsJqqkvg74snou6EJ4aUkmdBgsX7VQ3k",
  "key15": "2kccyozmL8gyg6TqFgSF95R2ifTjNGwGuMadhGr7PbT86SmKtU9e5NLHZTjmwc7ZFJejW3dSgdy6qgcWKZ2dzi4Y",
  "key16": "2ci7Ueavgiy6VJK1PYyuKDceuAQBTyRZU6TiwKgaur4oD6y9aaDmYHnapRcg8ZwMWCRs1dmhVFE6hkC2XoBwGi1j",
  "key17": "3UV1VRUqX2qmYtJ4wnEvBD9APt5Pk2UAPwE8ijxhWkdT8sKPuP72rt2MdpiS28saiiGDpL2eS3wvjy39KQQ78mXX",
  "key18": "4LPsVzFbaunCasxgqFU4UZCWNGakHJS2JVfG7XFFPtURjUd97puqWy84jNZAaYTA8R2FuA7JQzPHc5aRPvf9snq8",
  "key19": "666tL7ttT1e8YcXRmxBd1VnT8G3hoyVr6gDdD3kxGYQiBFCB3KsU6c4vYjpj7LEZ9UJxy7VRn53LJK1bS6gsVx13",
  "key20": "5dWzvdDmWP7ecHG6cSh7N8g2kUBYb2ZTbaC8GMKPCNjZDJENU9S5qqeW91pzAG4zyvJxTZXjE1xKacCM7YqX2quE",
  "key21": "5mZjghWemfpcLq6eBRxMNXvUi9vSk2c2ErLFmiK1imzQYL5QS7yWtwUv5Tzn5Xdij2sSfpSwXcYurdJbavRcqKkW",
  "key22": "57YeTWQ2YgZKtwast6aqufJpKLhApcaWsfAbwcDqttw91o6Y8Qa4HCsxG9agmWaMwhUkhoi7QNYYyYS48h8hYpkS",
  "key23": "4BqASigfD1J1j9fVGR6NyVK4Kv2c1oJUEr7x6DhcfJAU7tXRGHLvghfktzGgUjk33uT2dNyXYSugpymC8VcmDAzu",
  "key24": "6kVJkJJUBac5LgoBcFNFWufUcvdfSSC7nEJjHFoVCAjvHiHiL3DzCzyuuvRf7zwoN774nSACmW7DQJTagWgM5Hd"
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
