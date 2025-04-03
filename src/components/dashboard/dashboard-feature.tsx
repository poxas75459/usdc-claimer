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
    "5A5LRyEBRB38PKzmZWyKM52R4ro8rivLS8WBxQCApP5FHvHtRCW41JSCDAFk9bquFbbobSL1wyUoJ2WG81b2SAmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7NFRE7YyhnmY6qNHU4qyHazw8mUyTfUtj3nQEsagB8u6LoAn24JwR3Rw9HJeSdBECLEE9omTTyaqtvQJWNKty8",
  "key1": "41pJ7GM9Hs92Bsf9CkoKnHNHrE1yeQdT9D4PipqSPh3sd3wsPfQbpJNedXnwN1Y56TjYAJM8p33PSuuyuByEGomc",
  "key2": "DHPZ2gSiMTgDTd1VAUdGutheCVmLBmhka5rEC2uKeeKjyVCPuunFuEEDzgLYTDHHjPLrRndE8MQsjnuuaqiXro6",
  "key3": "37wxJCAKBXZ7nKBTybCFL8imRMaQonNCVktt9ocQERVKpwtX9dkkuDEnyTzCTUnNfeS6RJ4ukw6LdHZXA1ijkxCx",
  "key4": "4Gz61trgHMmCL88K9iPzhirzoJWTm28mEYvfqEs5dz8SoDpbKCNGaikTY4CAi9aU47JxBfw6tg9NTgj7pNLSroZ",
  "key5": "5Yr7CMgeFyB9RjGNjQZn1w8YYxXZYqPqDi3WgTovu7mcSkE7MZZxo4wzXQGWXurEzVNXbV9ULYL5LLnhsjetf8Aw",
  "key6": "LDjfMd7jtD71xZySF9CQoAurBwFgv7VSxfGUeDnFXRXUE7D87BUAteurZEbzvomZj1nzaUQNUtSMBMXsyhKBhxX",
  "key7": "3Nakn7ah8MEfqPbfVfmXe4XsbyV6ECLfwfCGgDqN3kLDZ5Aw8QWWMnE8H4TUbwEgP2nnyn4hM5QwHk2mcVEmCvTU",
  "key8": "57uz1YZAnwPd5rmspK49nAgbNUtC2KeKKAPm8SZCVqqqatLHaMTXuMEAvAM8y54Af9M8DfLtnXTFzY6wnKSaj4C",
  "key9": "4u5tJudXNq2jKN2em1Z5po9duN7xoZribGPJCbK79PmL1LnKyDuFWgNxcQc5bkiimPRnSgAyteTk66bx8kvjxFRu",
  "key10": "2keCTtHrjfGthfeAXrbX83hDxwLMZJdrGLwSus3ejYFJS9MQbqjMbGEKdzUzEKUG8ic6aLNDhTEznqZEg58AAw3f",
  "key11": "39w5puGq5YXNgkX9wbkF9uee2GV77m5zUTwSweRMgRkXMzdfS8qV3i36AqwR2VK2QqDqdQmaWiph1MuYjsLi2U3K",
  "key12": "3f9qf21CJXGDyo8mscKG1TfrabWYaHX8MhDXr19NvHSYinCNAyX5yKYtZGvz7Q3VJGTrrnthTACboEFsJPwbAaSw",
  "key13": "64wECzYzFyhWGHncrFk5TPAdkNWFrfehVLdQEN66Qs1N8gzgPaEnv4fbMsWWc6zmzSijhM4DQu2kBzDZ3VyMZ5TX",
  "key14": "5qQfzKLgRvBQUKz7AdAiBaAWkEuAnE4Uy2xeRpYmYu1cSqAoR9DhMrJgQTMQB5URrqphkCa86V1pbLxvfVPAu7t5",
  "key15": "3ftL6BmCN42Nch88rSe8q8PfPmZAmytAXByFARQd8EXJQ9JDcmd5BEcrjw3PDKNm5gHeeQUYtuTTrZ5NvFo9s1xZ",
  "key16": "4a4s9xuDDTDbNDseXv9cFVkUYo1CmSVebEr79sh6oQ4mjziiMcLFPKWQZ8w7tQpxzpJ5mu79GEZSJtUyFZDwHXDT",
  "key17": "EfRVeKdMf1TANwwwebu3o6XnhjBE8w8UpHTT7csaoGhDPF38t9vJrYyqnTiLtse1XansKMJmPCG7t5ceXDyxGRx",
  "key18": "2dZArxRfXHSYLCAph8ZXZ6uDzXDHUZKZ1SFntiLD8wuw5815CfFAHzh3rb3vZrauZQnCfYWAJBQLeiUNB15PWauR",
  "key19": "5FQar6wg2Y5izp8KkwcP9jomznwAKE3PX9n5JU9fwvA1PTiQ1ANQ8qEBEQpUwqK5iB4ovPmw5cCdGHsZ183o8vLT",
  "key20": "4hqWRPQWDstwkukiMs5zcVsLDiVoL48mgfoGJ9sqVcNQ5t7e6hscHxXJLYLyMnNJLPaNmNX5xZE6qoUQtpCHxiYJ",
  "key21": "2gQZQiNyaDzYEwVoPN7RD5mAD74m8ZvzvzjJEvafF8jZqwLRHoErBeNziWdyxGzRAngyZgkQVw2ZqP2BmZbMZ6LL",
  "key22": "4fpMcvSYbYvqHTPX4K3D8AZS2gBxLHLcAbLZYmkVrNsicchAjLQvJrb6pJtUNBVeY2jYDazJTGDCaVnpjgTZqbPV",
  "key23": "3eqnwaB2fsu9esMSSYHpwb6fTxz7RvR1T6qPeojJsS1StcPhWrBvErhf1W8ZBtz2PLaoNoFyRRJipuoEBBytxgPj",
  "key24": "4poMZSeDguuoJHdKH8jagemCCowXSyv3nArRBkPmQ7gqg35ThsSayVac8uZwM8xwsdsd8iFdZJ79sJEgfdu65hWa",
  "key25": "5Vqb9QbnG76maUpNGK4618rFDCS357bYDeFSJr5yayeVcJSP7XVd4Xz8F1CuvgwyTyWUqtohLUYw82c46HPiNweY"
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
