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
    "3rMvAKZr7sUhaHNZLi2nAefu5kkqUuUR5cSBDMd366ewTTTUx4uz8gvcfm3BVEB6tde2KxAd4pmaybQzKxRchd6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kDFDYoqm9GXzJU4tbvY8AvvxYAEf9EWSiugZUr9XWBNLpi3hdGUpdGrzZvUkYSSdJLES2uN79xkLUEMkbAVhifA",
  "key1": "33XGcsmL2xBQsrGrBLvUY6aYpVPkgofbVRCWcAz2YqLb75feLjUsJQpHLcu97HEp8Dv4HXGKxHDAWm1aogNMKvw5",
  "key2": "2oSounrZVBQLdNnHavsJKRhKDSAfVHCbbhRwNxpm57mJYicQyrj3JPDHUsSTQAZanyM2HS2jxke4SRYxDLQw3GvF",
  "key3": "5iP7gYqKLJEAhH4ZKnFpFqhgeSxXUJcbqxiHpt2N6wvg5ycemBJwmnT7SrAHjFDb7knkoWZwCnzj7BnfdUY2AM1t",
  "key4": "5LUseTdUJ6PXQFrrAoy7bkDiNMnmuck5J15qS6YrTAVaVafZwKQiJxb8fdaGGHmWHTLkP47zBx2rvcL6Jovahhci",
  "key5": "2dMGQ6CjoY3gfMzU7VKsVhySrNN7daWSGYsRg9Y1D22NNHmUMibgjWNRRPd9kQNa7uzZYvU6pRe4ZvbLTabSeeFo",
  "key6": "2FofJPJTqy49C5YjUNfLKPgfTpjf9MhtasMwe1rmXv35jRhPzv9AokE3BNF3tQADTeraZnXCeeLUEQ52SR9KRdbj",
  "key7": "RUVL8YLMxg7DAEE9s9uFC5Q5xU1CEvrFESwRbNy4qgTFbNMfwdW89pM1gZvA2tDz3ZrnRhZGwg3GrGEGRk37e1E",
  "key8": "4rU3rkRb9Ad7UmCbBpoqnn63GxATw8ZNykPA33JCoSkQpgm84vTw3JUSKnDqpBmNWCDeAyEcRjY1Q5uj3fTUgLVN",
  "key9": "4cFVPKeVfHksTxJrWyHkCn48osC6mmWr7fgcUWKW58sxbBtGzDJzWJRN1txoLH9PRrW1j5FXsniNdASpabjG4i4E",
  "key10": "2pmHfVGCh2pJRseU6vXST59Hx9vqh8hif2zfjpTWXaGH6NqWmfC8LgGSM16bhR2SY49ufQKMpwkNBa4x2wynmBst",
  "key11": "58A1pW9ebL4k7U3Ry1YM1u7Njdo6Zws9qQL9wbY7xP9wrpwmEBDY2qWGwPkqt7iVLqmymdXjH7zxfpxHqfq4RPt3",
  "key12": "26PcT75AnMDiJukFmYTpahY9Jpy9UEKbxMs2A3Q1555PfSAJCoLs2TmPT6zezDskxgaVEbg5LLSrsMvkHMZoYreK",
  "key13": "3ghwe6eAq9mQA9omYdsBKJguRekpQn8YTU1z1wsb8ZgWGA2JcS2gqkU61E5g2MYL4yAU1vXc7WKaTb72gr4k1zCx",
  "key14": "3H3smoyejf9kyEM6rpE5Uefr3Pj8oQbHUE4MwqwPayEu1gq1pgxbqxsb85xnJxrnWFdp45mQ8thR83jWajV9G1vx",
  "key15": "4gJ6cvvzHqukffDRunJMFdRxJahv4gbhEZHR5FszeDvFWppFMgzuTFxBZpWcFeinc2XkoYcaPjFbBZ24TAgsC12P",
  "key16": "5ayC7MuSV8LKMUj7aUZTMYPzxDnpgBWzEfrdQadSaou8n448yHPtCEfnY6UC3nJruv5TgxZnN3E1y7dzWNqS3eUW",
  "key17": "3LiHDKDLnAJfHpRtqeYejX5xYjb1AXKG2i1n7FxWXU8TnhXzdu9cPs784Nq6ksuB9F3zSqkJ4vn2zfekiZxxQdTs",
  "key18": "4DvLj3jEmKkrnMoPS6iD3iQJ8pkiBKFkeufL64vBYkbFvaatutVjiaYoPVZchMM81GWh4XGRCs3juCsVFTVC9kiq",
  "key19": "48CrgGVWBAggrjCFgRhuN2Lc7gGkxxnXcY66z3ipQ15GxVbPnNVBW6jogpmzuoMJ28qR6Y52NKVqRRqreh7m7xQm",
  "key20": "zcphhGK7ePgWDcbo3jjgLR2YoV3RwDTxz7fjHdKCYw5H9CQxcNnh8Kv4KMVrywrk2dHwhqWvMqCoN5m8o9db4N3",
  "key21": "TdCCbjHs3deLJ8khTxxC37kLSWjxdh9BGpkQudsDJwsrbVoPh8kn3BrAKeJXV3YHHAM27LdqRrW7CWw4Xa17wvd",
  "key22": "uMCkD7wioCH8DrVTLFGoip9xVQboFEwo84f1W4QeqVogQTjyZBvCupBSPpsPNB8M3nEqjgKmjWYVZCh3kjUB6aK",
  "key23": "4Fbr8brWCMgJynKgWkAP1vEwjFa2i7yxRReJNszWK4JH1wSHJ2x1P6TrHn4UcDQ2TStpFoEAjDknWZHf3zNWqJRp",
  "key24": "4VFNsCGFTjFLNrtcXDce8xcCKyN1uC5mh2BViw5KNR2bekwz2hm6dwNpjkuh2zdogJXuUbLfHEqWbG3iizBDXZu3",
  "key25": "3KcQ1iPdysHGmxzZogghhYHWpecAaF6cQaZNt5JAyvCFRi2atE6Naf3azg77hLi6aeyUHVRxfG2cyRqjVArL57nK",
  "key26": "51DSUhaphDRPst1kQVnkaAoLRUhQvm8EmC2GWRuYh56SwwodmuDCTvT7HcUdY15Qn1JQDexqN7dgRmEm4EG4Qo15",
  "key27": "3ZUhBrU5ebaUmbVpGaxqkUBkfKHw85yCwtnZsTP5ipwJkjMgLfN2x5uDKmEBWdQMbDKLPKu2NZxKBYuLtBtZJoaP",
  "key28": "3qynubFbyjQqJpS2yhCpFM6smr8sPJfaTsjSkQHVz6DprUtjjwRcUkkS93AMgvvyHzZMRUvYgtLdq6YhEbM9BA61",
  "key29": "4GfEgehQXZbnwAaEB8F28rt8AUVZEoQvfkFomCKqiZZQoLPSPYdogchRLwjeNPz4CwmrJBDmJQttUXyFf38nRz3J",
  "key30": "44sz937ZxFJDaCvqtHyoRWjVKqiGwqZibfwbdKAKdN41SoAjmGTSZXqDqj4PaVaSLukBYqbXjEFhhcDzQMbMD2ge"
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
