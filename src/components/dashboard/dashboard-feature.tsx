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
    "64ahGxNprLgFjKWckNLzwR6tnyAZpD3Pw1U3kwXeKDWf4EadenxFzMo6euU8rid5tMud1U7PcwmaarZUMrUfBXHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HiHTD8Y6wheQH3e1t6bd8KUbzDgvtLJFaEALCFQut5B1pS7kAiPDUE744T4maJjkH5cxEPkzzpNQy8Da3eJc4cf",
  "key1": "2mHceTp71r3G4i9hJEm5d3QTZKnysm5qmQnJum9avzELTQSmFifkN7cqK9LNYRrU8UJ4hQzB7v2VkLyMXrdA1t8i",
  "key2": "sUHCiEKAKivd6BGLZnZHbwG2WY9AksfGjciEYHxz6yMZaRdVjTRhvjw9vY7z9LYjGTx3DUDZfUy2V9RqQ7KRcDi",
  "key3": "4NYhjZx6AUDWbnvdgQ7oYPy5UmLx4EEGCdUi8gpcrbEwVtdQZ9ynm9sFHa5p3FcnpSFqUWJNL77dbyq7HgJkYKcY",
  "key4": "3EAGB8DUP67tjrCjsU5d8XGQVej3Pcs7ThCDBQjrb2WoywXGTeoS7SXCS5PsiSy4EjnSFabnbGhBSydMCVhRqUFM",
  "key5": "2Mm8tY55WWxkeBEou2vL3vJMtk75f7ra2uiVHJaczfF1e5C7xpWhJJY1gyRbqBGZm3zJW6x26X4ZgugeG3kQRKtB",
  "key6": "227XTrciD7w7CwWax7G5CyM1mtdA6ZksjpN7aNo3DAuqp7WPRphvxukANhBSuguc3gTsJSWCQdUWBm69tmHWdEfF",
  "key7": "3VGyDbgdsPLW5v7JQ6B8L3amehMvMgGdkZPfP2UJTbHoEng9STRBPDPBsFzwD1PCY1bBeJdnuHXP244e2MRa3B2R",
  "key8": "21hbCDMX2iDQihQ2F9a97cAsf1vKHmoY7iJCunp2mB4NBUwsvS8WRpfuEbCkH2CafCw4zUiafHhwU9Ne1X94teYt",
  "key9": "euVEnPNtUqzxbcoA6KJhwsM7rje1pv1teyi2bUZkLaFrhetBHTRuNMQYgvaub6Ep5r8meZwS6wWBMNY7JzaE5tf",
  "key10": "3smGX7NMyjj4FAMsnBZwxS5Hg8wb239w79858BoA8pB4PvMDGF3igNx7JSZHLRfHHhFJn4ZQLhLfy6wYgaBpbWKo",
  "key11": "axfnaydFidENEjaFUML3efzoTYYR3jHsV8djV3LqgGx2ZXXAHvCpae1XYUwxRi3o1gs2oghxRaGueSR7rGctntU",
  "key12": "4mS232WTvEGKRLuRu8jqbNJJSKCxoi97KbUWcjVR5ChtAuSMB2kSQ6sthmp8EfG99Ty83uy94ymDBRh1ZLR5YPw6",
  "key13": "5u4f47FP36pGQH8NdngeJAbTHMuqeH1RKXqtrH5NJfFzjZCT8qqEPQ25S8oPKyxTBwKYbcwQNKhJ6xGy2NbaHDxy",
  "key14": "5kiR8yGay3WnZHonaou3uUWyc8eSUHKgZuGcdP77zZ1ddsnekeReggHgPdtWu5Fmuuy31KVVsUdQoUGvim9AnYZM",
  "key15": "3imA4fjSVRiendFqGnm6qHKLpfJvwektyR89ZQJp7U3nK8ZktfNoEbc2AQxN8LKdU3KjgsWu5coaEMxjqzrGAePi",
  "key16": "2VLT1qxAxDijDsuysNNYXcYgrn39nvi6CYuCAcCQaWnFTZDJ54EYKu5KJhWj6QvEnNA2Hck8ZRcsvpPcA2EWDEcC",
  "key17": "5DzymPtQB7QfkZvjX4CDEs14dvvKV4j8VEpcaorJKzqZDF6VYBUGJx92Fpebj7fBwCP47qergn5htze2UNxiquFM",
  "key18": "k5jmT1pEYHiWAzYQW74fMkVkvk81Ek1PQdwxhdJhXiifCfjw3U3rNExt8rpuCLqXGPFukhJZoQ7TbXBj4QaC2QL",
  "key19": "3LZRvV6mD7NUZNvig6Xzwoh7B4HLzCN4P2p2xFAbHkK6sYHNxAkFKCj3rwZDnX24Ue33oDtqjfciYF5F1igS6iFy",
  "key20": "5oPXTWbiBWHyFwA2VhonVJz7x6fnhTnugwVAAkzLjFghvVj6U1BQV31kodsTRY4cDk6ZX4L1Yh9gQfVVqVqRZHaU",
  "key21": "AL4kSJkLwEf9dSx3mQy9HaTSK3kaidqSfA6MioYeLfWp5XvXhmVUjRT87RfmmrQEpaHHeBaSdPs47S6gPmXEgyo",
  "key22": "47VJL3KtD3QJW59tBgeimegptrwoFmby9iQX6G8B1DoFB88eusRbjpRJK5Sdksurmqs9qSvzW8V4DLgAQfJmHgwN",
  "key23": "4WfGHY5pzXX5MLJckgkzqQCQbTafP2abcfoHqaBjv3GABHrMpfQD5CW6xzRvc3snqn4dwX3u6RrxN3sRjuQtEYV",
  "key24": "4Mo66VVnaT4vsxTyaHTcG4DeWKzDoKGdEc19gASGAA7k1VmbDnAf7vmCz1LHAWfdyzz6Z8zny6m4kz9fXZbduZfe",
  "key25": "3ei4vayRoFQvuFtXWZNqReJDDCpLYBV9wwAjBnZptCzE5u7LqecU1HvKUXhtQDSp6NJYFuzv1joRxUjG8CuyHMU9",
  "key26": "2ZvDtWGGXJA5Zj4evJVHFug54sJZja1gPh9tWFstMKcFUJdnBoa2FMdTaTA2X2uw5KfnpjuAx3BAEtaEwzzQyM38",
  "key27": "2wWzAPWNxGvBPx4D8rYpV79SS2CqYz3Z81LZpmXvJn2J59En1GCpybEF5xAe5aaRBFvv4SDkLwpWHnukkhpo2S1V",
  "key28": "613aoSeBUQGeJsUveM12uL4tbku2iEEv5w8MG7ut3vhcj2Lay8Nhi44B9TjnNnXfqT22MW9NLHhAKH5qFez9ApqE",
  "key29": "46raLyJ5wQkk5YzfN3JzXc1bRkrjdhqy7twW5XZoSK9yWT5U6m5NzfnxqvNgWTELrEgh8cdY3NMn86tFz7zdYoPD"
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
