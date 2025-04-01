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
    "CwtTMnkbCg3K2Ecf7LGDMBU1PpVYVW2WkvBksh54poLs7Rwh61VwuGLyRxVkSAur29BSpKVptKrRkCFVsczBemD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rC4nkVfQnp84766DWm2r866YmHUiNTE7WD8Nx1rhJfAeBsdha1iXAtFd2JLc4c7a5KEgGn6Jh6jmCcGVM4fs44",
  "key1": "TpFa7ECj8pZs117YLX5QBQREpc2GAcMypeoF8HX3iYq5SyA2kL28Zk3o5qgCicrRxjeBCf19aCedYq4Hst3RRD8",
  "key2": "2d3BBgWt7ersSAA6cpXydmJNVKTPWbybxuYszcb7okkz7RQdUVpvSv6EoybtbuJZj7zG9e29rG4e235oYZQDtTiq",
  "key3": "5qscP4u5hjsqip17XjgcPVtPnsSY9LcVhY5rZaeNxPEf9z22gpZgCDNJx6dWFizXZCWUxdGNRLmZkuLKSaDkwpzC",
  "key4": "3numqVtDX6RjNHJP4UEmo8qfXVELiUtyQcgH7YCgMWQXmhnt9vU5uNhC9YvRw9mJLCqv3bkYHTjaeXz9RgiXJcy",
  "key5": "13k2TbtNfYEQa5Q7GJvUQHaXZSxtZnaE5SrUTLxHW1Q34oC3PfYfAQtAZo1UytDXWFxWK9JY91DHKef5QsX9Skm",
  "key6": "FEGwqYgJa6z5M3Va6FCYo76HK5e8jvL6WrGqyUda8hr7ruaF7ifBrBeHpDAk2y41LU5YTYkj9PDLM7wyiawoCGs",
  "key7": "4A2h59yg8KE1biUu5g66Q7L8i2jk7Xwb33wD1KS1ec1Hvvhh3pgG4dcbbSN4G53PXm7mdX3tccyNRNk5fcfa9PAS",
  "key8": "4V5vVSv5Cgq4DQTEe4r3CdgNgW6pJotR22y8s9si4YRMgu7w9RDg6ZDK9T8qJUyNE4YxgToset7hsUiNdRwD1VQH",
  "key9": "2SJwtBwyF9Y1jkDZdqwS9kPgDbDQg4KGf1cYiJAE7GHYBET5GzBhveD1Nftxot6N9APPcFpPWe4RuDkSpuPEzmKs",
  "key10": "3uXXzjxJhaBE2hz4r3hDtmU74mTPmDKCR7rppnjdtSFGZWyric62BkVqbML1yf4aE7DajscTg2p3sts4dHajoVQd",
  "key11": "r22wn2EWq2YLSexYoX9tyfkVyL73ikw7APozySRqLMSP9Ap6KjqSDmKkRD8XWv1VWcTn6ucyEVYrkDnTJFWEzLJ",
  "key12": "29b9A5a5nbDz18gMCvUaBNKYrH6KNWRseQuo7Gm6cPM1BDHsyWjLGSo3iwTcDkwguyvAdyXUFa2bVZducuugBRTt",
  "key13": "2qx3Mggxi8QsCT9xk6ggXEfBu9oVWjyu7JTANkRfuj1iFADzPbADWHxdAoo7dzdAHPBW7DGbeo6jVZFGswjcJdcV",
  "key14": "5gA5iHcRbTE4TqVVErj2RZ9JvNpX1quSpLqNMm4utDWzKEzU7eGF1YPZbACZ93FivJwrnmKRNkUVeuMc4z6JoTKM",
  "key15": "2M6hwugwQuegCPjXc5Qw2wjVuPLb36fQp2K1nw2c9e4AKVh41fDzHfnLP7gUZdZwned7GeyZ6aPtjt4WqZteH4eF",
  "key16": "4qTc8zJsiMLwQh63yDU1ccFHirUStGgj4vu3SW7oUumM5GzVyTQLKw9HtoQDVMFtH5VtVbZfmrN9y9pUF8kv5TGQ",
  "key17": "45587xXvDT1uXLBAHUmyYYbLEWFCFBwivJ7TZup1xJcBhNPecYiteCQPVDhgKYQP25ageNSYA1BDwCDjbK4bGb1j",
  "key18": "f5PwUAZR67vtpwGhRkguadqBPEYy9SFjmCisqqk4YseVE4tyq9pTec7woJgNTWpGBzhH2SCNQg5e7R18dARJVLe",
  "key19": "5hHNurH74DXutF9Bepj7KHdquw9bowWwj7SbmQrBuV1846GxcwonjL2T9Y3aTk6quqZbBsAAwcT2TEqZ5QmNP9r3",
  "key20": "QX8G45PBDwqyhjzcyQK95o9a4akiz7cm5d1BSe2iTkbrqv2ZR3tWF7JPkYka6522mN7e3iWCg7bYwAUckSWikP3",
  "key21": "3pXwWzajwxiDgEXDwaJVXRRXi2E7osD54AmYyDp8u5NezDkUMLLQFSfSVmWaDwh1ScuuLnp1uFWgLBWDqB9mkMAL",
  "key22": "4rd4wj8kLDBGccaY6fdcwnLuLchN16pBnmBfSaNy8FeRArNoutRnbkxfKEn6WcnYTkfHc6LDeQsaC3vvoEbkWkc8",
  "key23": "5enBAki25rN2sN4EkMgPiSjvUm6udxxQdW53HYccVtCnqfSigSSo4Rc8TPqkCzjgwyXG2bXQA76vzfD4QR2zeBC1",
  "key24": "1j2i2x7dXqJkv7fqRaCAhUYKVRSEcu4J5wePfDGPWGqXdFiWt2rwFmX4ks9XXcuwpGS2Cm2bCivfMbzVx7hYWpz",
  "key25": "3v7FMY9HszddwVzXHBLuXfLnQWhR2bqaKJS8VjMJRRmvCA6qMzjXNC6qYVQzxjhbpNpKQ8zZeLosENBYy1wPJh7G",
  "key26": "3naZcx9CAGcYAHoSrRBesWVb3rdYfaWFnutVHuwMrYGjDzYQUzueEdp1VPJbu8wCRHs7NMAFJfYW1gC96FNwars1",
  "key27": "5JqowFFm13wPqGeRLYWMMAiHXLAKyP8uQqaFBsaibEWhe9zjjbmpqDMro6UbgB74dmw3gYFbdrgNNGc9p83nyBMC",
  "key28": "5SxdxECp3mXy21W8ZK2tPFMnvUdqzncivMZw3PBXTqP6atxHN52FEpU8AdNb4UbHGVNo3tKfpDH7bJjgqUoSXVty",
  "key29": "3L7JpAcRn6GLrB4gSu2mKssudRQdHsSumRaUidP8TvN54DEemktHUNcKdQBg4jjorpx4vpa7VkbCMUgvpaj4UdhP",
  "key30": "5ZfStSZ5XoJcHryFqVyJb4wREwEHs6f4Q5W9w5rrWhbUjU76na4stTSxTAM63FNSGjqKzfk4ps6ez3r2kvKLcavC",
  "key31": "4sHyanoDBwuVqYzkXTjDV3CceD8VZhRAgedekPrqigHX3tSHNEsi4w1kcDSZ5BFa9qwjaLnhsRLA6qs51yDGptQD"
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
