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
    "2gvRprruGvZGsWNz6aZsE7XePMQuHMiNyGqhtF3YfMBB9FzhRniNyLoCASNPbgF8TPuyVnaVQxbQqt1mnM7fQF7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PHiRqASJ594cMAHA8FH93cgyW9XvkNucfgtZLBye14SKvPzpbvdaY2QqishUwoWTvh5WZU4hLyBeJZefmo1Mvm",
  "key1": "363avDtzN6AGSey9Nnm9q6wET2g9WFY3Z716Zhpx848ie1Zk3rbpe6oERQeheV1AN9daT3a9QpQn1VeFToBj9CX7",
  "key2": "3HBVf8nu8bGSRD6DMTzT32u534ywMbcvkgdQAweD2JHtn1nfe2RVhTDt1sqkuWNzsdEbTQJKvTSkioP21aGpZere",
  "key3": "59JdTuJVJgMYzP118KF23BBrLcfBjE8kJZ4LDALyyQAYdkcZyJF7wTZtdHYPGYAJ9otnR7yDxWYdTRQxm3ZDYtEk",
  "key4": "3mReY2dUV9NrEjMFgVpwbo7mcUntMfXPqmjTR2849TR8AQxxUfZkY5DoPfoJZpJK31t2Ltmwrf2gdvNmWrtsV9hY",
  "key5": "a1fT1cStGArtw3N6z4Y8xPLjZEAgEohZnTGyDyKJZCQY9Ah8MuQBuF5LqUZmbQx3AtRsvCeeE41kGSzByGXS1N4",
  "key6": "395rBQk68T7aHsywkSEtAECazx7VYgg1qyBNoukqiU9MM7ugLnqrUfhu1LSzcGbydZxsQEkFVfJgZz7KcU7BfgJY",
  "key7": "R9UM3DZDerZehc5pNPBZcTWmQa1ZVT6e9SkEpzXpgDoWih1wzDmaP3YgKc75nfnYbkJN8Jw6fqCREb1uDVNo8t3",
  "key8": "KcXCsM6vs8uKTEGNjSY7vDZhMXiNpPvCjDQTaS7GrJ9b8ZyjiGSAPxQQwyLz26eXc42eMhWoEiKSWjiQMqW3ePU",
  "key9": "4KXKnFmww4rdUuTRSQKGfyLQuyLA92r9KrLtAKa6jna8rwiJLHzdZNNZsZ3ELv15NYSqonRhN9E2F1ke7o2JqYfC",
  "key10": "3CEhcgvW5tNiHjxcQtVCfD9Fna8HeKN4V2dgpJaugXUcTPYcHHM8zr29jaFg1F7NoiirmgMye3LY5BHwe1ZPxuBK",
  "key11": "4rvQtwS9HHywLuriuHy825EVhJmAfD6bufcrkbwWKJAyv1jiA49JMeph5DNKgMwRho7Sd6RSmU3iNezKXYkcs9GF",
  "key12": "4eY14sb8z4CsnqqJdVhoM6ekHEzCN7AizUChN9z17KFFyRWp6GcRCdWiAEcvXfP2GujsVRMGThoknBMqWGvjXyxJ",
  "key13": "3vddozHMz43MYWnKyzU5CGR1bnUpvakPNXAm7qnefbSGDsrMJPwQ6HY4owmRwziMbgYaAqKanf3FcVFpqUeLzprY",
  "key14": "tLKsKRg4XHGpoAvewXBkxR6Wo5EMFjj14TswyAWpBk47LZBv9WtLSR7nbu3t6QkEBmndaENEi2GKdMAT5Uto8vQ",
  "key15": "2a4Qoogyp8TVQGpidK69o6dCWhJitwRajrXBpbcHezRTi6LhUo2vHUCaEF1o3AVHxn4QeYtaaYSniQm1r85k5StF",
  "key16": "vDdyP78vTM2kpa9RnYif6n2FC5t2NYzNguVS8JJKwKCyCcE6tjVHnpJFANUqk4CNGcFhHFGdxSNQkdddboe3rSu",
  "key17": "3CR1dNF5r1anXqYiDaxmdaN9mNB76MfCSgNHsiCyP8X9FjgfAYvebscphUQke6jXHPrAKdh9KnhBXDHCSNfUCgE1",
  "key18": "46escYVHEtgZjPLDQekKhSKvKt8xCk2C1U9jhE2qFioy5xdeicwShDmgFVPnno6X8LoeZCYDoRQYynokchAxH2sg",
  "key19": "5eSQfXbPyg4AW3i5cwiovEnQgVxNn7rVzxJdf4aoG7FZNkBnitdT5QPXpym1Eyg64quAMSqYuC8iAsPkzgSAYkg9",
  "key20": "31fofNpPtJDVANBHYWuFrUgorhQ1Dt8fDDpq6VF8DRSpjY9stKtPGoyoYBYMRNEZjotcCJWuN9aoZFicUAZWPxBK",
  "key21": "4TnsMMWar4x3HWdSBSU6FzmRPfLCn7J1UWrDP6U9fed2hvFJ6P9snxza95AbexJ1ZcdCNEjH6LRW9ofoHff8Nug9",
  "key22": "3ouajHq856GhUjU6Ze63FCTug2jGgDihkSbiCWKBbGfEY1GuZqiFtM3Wq2qmSToqKhhrnTg1gV2Cr5SjU7HrLEdi",
  "key23": "CR82xe27Lhpa6khTdgpfRsnpkQwBKwRvzPEKe8De9TY84yNwGPLUUJffW584SYNf6XVJKuWiWQCeCFzsjmuu8hV",
  "key24": "4PAJ2JRFA5NkqAvN9aqbvAtQUPZuNdFpLvg8xWvgboED7T7PBTabmzF9WNxSnZ1ezbvJQswY3QzpMoLaz34tDQFK",
  "key25": "65rPx6EnQSFQnVnkWBTUGDH3J7Dgjy9uKYCgrxqDLBfraJWYXZZAvcXvNxarqL8MY7q8ctAMHMBANeTwcGoYZb2K",
  "key26": "QopPRtCdSh5Rs9y1jw6AHFzSg7FoDRMsjJzLMQNkYVzfqbYudb56aATfcAmUwyAjKADLy8TTBtxnaqFgdRpAaXg",
  "key27": "2nBC1dhE4kMY2n554E8n526N2mSZ5s4JzahBkd513vtA1aCuEkw44biGKz7u284asCafn2uNwbDdmLZ7o8h1dmiD",
  "key28": "5f9CcA7nVcqZVLCTNBQ8iqPa5YF8WvpVLjysY5d4X57b6XAPrPGvFDkeadiPSDBkX1nUir4s1EFW3WWam3YVBrh9",
  "key29": "4DPYAao7Fhg78AJM6A5gsymH2YBct3beaupyaNwxVK9AHEHi2HCvXVTAqofY4hWaBFFCV8vW7PCfKV53sqsiSThx"
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
