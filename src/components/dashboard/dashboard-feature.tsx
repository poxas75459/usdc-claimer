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
    "5qnm63ZFUe1Mcicyn6WwvtPbtBMStiaVRY2PnFxLAHw3uygcYwpunbkR6eKECnAuaqHRaeVGVvQ3QGm8zz6wsoe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sTu1egQfkE38eNdxhVwEWhTN11PZLNzBMA18nsiJDSuLNhJzUokTuPk9ZYzNCo683cMUmRiq99uAuWKZzSDL8Xn",
  "key1": "vum3HsSro1UXGRr4qn1QHi6btFxEh8mNtWoHPmCdTFn4DUXmFZBAPMNLDymZZBxcAGRvytqDc48b9B6tseU5R8m",
  "key2": "5T6kcQtUZAuSEHuLYxYuU5iaNWov8LiH3sfHHGyc4NQi9KuZDtmhZAeKpss5EdmLK3jWb9ueMDCQB5gb47mSvbeH",
  "key3": "3SXctcfnPe6bFWL23ySgL4QX3jkcxKJt8kDnvkzRdakWx9H4vyY3fA51F9jbZ4jsWaFvn9iDQXoZDqG67TmA5yUS",
  "key4": "3ZqHDxwB5fFcmiPscoVHQF7NqtS8FENyRyGFywA49Hnop5tk5kbdYWxm9mi3N7bxkDvw3TgZeu5JzmtYaLK2m2q5",
  "key5": "2KKjPHLq7D4vn4cwxY2b8Eys9HbiFHZ9CxjtJTji1Fjb5ZxCeyVbBaATUCV5NPZZazfKSYiLtdtv5ef1WYATqnCG",
  "key6": "2P366vru6wNffzPWsyCxRszwMHWkcutqNk6R2h6kBQm5UGABhkfJcFWijcYviniSZvsxvom5YZQXt81yZ65LgDAY",
  "key7": "6tRB7ck5funDyFo7ZaLwLGmvk2bMoq1q1bRc5uy2CSu784kegTxTu2pZpEqXRe93R8rXaZJPn6hVymskwNmwKqP",
  "key8": "2QAzTtfsoujQ5GPPY3qRNDSms2agsEJExtpjjMYKbaxinCamftfVDoqtLtS13roHqRjJNCiQ8dn61arAFLS4ktk8",
  "key9": "5WT4zSMytx7onPnbXt1ZH2G57cDV1CeqzEfA3KHbKsvD8VFBAZzHtyZYbh83xoyVFYqQFzobYXTpQwLJgEa4ueFB",
  "key10": "3doHQYJzow9XmQ7q9GGA1zziL1PEAZ2Ya42dWxQpNSVDAqSiYE4kLU922KBJxyCkf9ZGVeUPD5TMYZHUBZgD8md",
  "key11": "2nP7FbL8uqi2aKiujL9ScK1GVRGToTyMHBj58e9hrUXBCCMUqTH2voNSxbkHjuUb3xWm3vDUhxrhAvuw3mZ6tQwR",
  "key12": "5VWx17XrbcuioQVzC974SmMpACZJW3CoRsuhRTbc5NBSfa7f5ycpkkH9ikTKTZGhZssR8rXSgUC8KwgpUbQeGfAe",
  "key13": "3xjUofekJJaAZhWmJvPCpYe6XWCScMNcnweWmiGys6Vd9MuVFNZiUR5v8HqUzH3rccqYqRcLpX81brP9EpD4q2LX",
  "key14": "Jxr9G86EcyXvGdH3oHDNzxEw7uTk75xT32smov4MxQu64s15zcRiPMoZ3Dger5Hzd4JHmZVz62eAG5bGWztzoGw",
  "key15": "5B5hr4NRSEk34GsBAWoHwwM4FKWYGgFzcx2La4pBdoAKEjQ2e9B34aGsjvHhyrE5uwivZW38FDVaCUWAKkVDwT3k",
  "key16": "5xrHBAUYvPFm7EmfuXbn8orv5upvgAL1amRzx7ZRA3oKne5sGL7oKMCM9gFiLcwxezKKyLNXqBvBRzSzpGTmPkfQ",
  "key17": "iMmRh6q8KGb8t3EJ379afpJgExytEN2JKArHRnxEj92BktZufJrHPrMmVGZ55juQ88Dx3jK28XeoYF9cDrTQF6J",
  "key18": "63XEC4NtefDhEBMDDvPEbKrTyXj9hbJFZaGof99iHearN9HZS4KLkZKYxKgJPcArMKhWYD7PYvpx4v9Vad3ncqbC",
  "key19": "2MAxfPFnY969itPsFvRTvWKoCPWBcp3z95ptrqgj4PfsdyGAvF77pMY27RLzjMhYwVEL6zXD5uX7b2Y8iNEo35P8",
  "key20": "45qmazRpX5uz7USJ2vexmDRRAUY4UbmxQRWKWjvfExfU3zWnTc9HsrjL5FTYjx1nSrnRQrPhiSwnr1DKnMK9s1dX",
  "key21": "2FwbgFAntwgA2AFr4ceVxzDDQGKdXoPjprvZH7v2fzkNSZAg8SyAaCr7qM29s3X3zcDpuzoWcsm6UqJkMfgUZ9d8",
  "key22": "3B4cPDtQ1UaWe7jqpP3EPYGm3PQqj4Z6hAK9CD8UyWUTuaUoFVNRfY5WYtEDWamdZV7hAy4EYCiBgL8qbbEJYcgG",
  "key23": "5ZysQc1LRudeDDvqdbt1z3cPpvoNS7qUcjFDri8qTcn7cuY2SXuPAWfiHfpQSW7pvSXw75Ku6GqP1xkPzUFFn52A",
  "key24": "9835djc1v2zr94h1jFPeNT5EqgaTPKkSQY1h89tDvoANZ5v9jCTnU2f4PcupCDCt5f9k67m9iFq6XpmKi7fkDiv",
  "key25": "2U9jd28fLv1mhoeFhna9CmsrCVE3PcZHJ3awvLer6LtSRhNqBanGzTthvNwAngH9m3Gbu4V9utQYR1r7j7qEy7UH",
  "key26": "qVDW4zDAETgaYnLnjfMcgeLVCM7zwM6TG677gn2DuEf2aHpXqYmWzaWeoG8yNbZXsTkZj3sH59tX1pytDu5rrw6",
  "key27": "4f4eUeA74YAuke9NnK8q7ePP7q23UgrDUN9jgDPUqDnxBNkZLrfZkqYShGiCJDxzh4XcXgX66z9yBpUVD56ic6Gc",
  "key28": "4fFc2nFMoipq7TzfMpNnkn4puj3Q4GQyRRqbj7GgzeK7EYkeQjNWsqk4p9uiwxWbVsRUpb9788zBHqaYUuVLK1Mw",
  "key29": "2T9pyHmXbo5sninfFZrF1vU8pAj27kyUr1Wph5SoE311i5GJGTGkNgZ6PNBMnjhxFnaZzvzMWLkj5bHYJ2gj1guv",
  "key30": "4mSw3wDt6H9dNtur6BPfAcNHgPqzGDWb8p5ofFEJGrAEZWS8m3qfFxPs1qL9SMYNKdiir8yuFXqqjuVQGmxqcN49"
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
