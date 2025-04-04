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
    "4azhzXq9MkyZaxnTAMUCyvRnbaD8Uqhw4gc5uScNyaKk8FstA2QMUay42rW4yj9g7bSWXHFvoT9qNNVuATtZTnpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EVYuVebMSnTniznKExKQDDnajhTQdJ3D1wcB5nzpoLDc3HNr951dLh3p3mpXbKsbvTnj4s6TBD9GduoMEtFUmJc",
  "key1": "234temx61PFowjEVohQhqZwozMY9kJ21ZwoZ7K4Z8gDATn7n6i4DAKbtsrExFusjXjSEsYqKUr1HV4RP3p9P7vJ4",
  "key2": "2j7URzenVviMpxacYqrG9F8TCpiFXzg33nB7zBryJvnjesdg1HxtLzbBbT4EEe7SQLt9yCN8TZgMqRqJ23mqYsk4",
  "key3": "3iSVLi8j3fwrkafcTER98iabf16hmzL4KRN5pEU4WywcwB8YLSR86WcmMGS1Q3n8qRi38SXvFcpWQMeKC7H8TQ5c",
  "key4": "rARgjDpLn1sXtMUc1GpSERQJbtE3B8fw88Fx7Ad819ZN5xfFP2dKrSJa66a5e5uQMoTU81pRoZ868HDwQFAnv2f",
  "key5": "4AvpMsnMpE24Y5r8vGTaiCuo4cJ4ZA86MDswCytmVNapkq7CqsstvSECzRqD3Yd8LfUPdrc1NrwCG2vqtv3q7PpE",
  "key6": "5UJcb5Hua2vzFm5nshxa6XAJomYvtfQuwjKUVbEJoh9Smkee1gdAgw6PhVm1H1ggfCERBEkQFGN6Tda3WetBN7q5",
  "key7": "59jnZFcFTmYyhwQA2uLnJ64pUWAdydpwHnP7KWptL7xgkPjTebWH5R4p7ATqiFTnen71WaAz17kG2pDWnKde7Zs1",
  "key8": "5iHoHBqqrdkRj1iXTev9RPQbxsfMX98jLP2hEbJE4ngrm4gj46zA2vJny9NunG98A4coSDSP1LwyhNuBsCHF4hZY",
  "key9": "2vosj1NtRYheuXMbRVCwHh1pYkYJn7EutthDz8rFGEyLVqRyBGktcZN6JGgZ1CLuE9kLerzNZVjDggi7SUZkn4Ck",
  "key10": "3MEzU1QkADC73wkbWL1su44XJA6yMbzMN7ww3kc8ZdpgQ7MCEJyu8SMxC6eE94CRQMwbp6rS2DYiEkoaxPNK8ZJf",
  "key11": "wcPtM3u4pmbXFYShdD9mgMUDwMLLwd8NMzULtu86D9uAgC1vEDyXUDzo2HK2hcVaE8sKNMQf1KCUczsEggBHgCt",
  "key12": "z9P8PWrZYq6CDibi43gxkrimn54sbxuTiq3gPjiPFYg1WqzKETkYqM6SZfzv4z5WLvzryw3Wk3KAPysZp2SE2Do",
  "key13": "5G5g8uNMg284WjZfEuBhxYnnZarH2X24EURvE56fLKJwepEU5g6LKxRMbqBEDGLpuYcBxjjUYodE8ST3c69WLJBa",
  "key14": "5oaDVmEWFHnfHhUCc5FBjJC86sD8rzmrdS3y7wu5GNpJtQ7qRjb9onWoh6LKNJVahs9cYWZsJVraRK1HzXrvaBa",
  "key15": "5rVyjWsPYDgm8kPKcKPUNN2JDL4JCLrLqp5s8KmRdPdLa9mJu59WbEGig7bFt92m9KYdr9yPQ5VkZkLJcrbou5Tf",
  "key16": "ZNv8fBhueH3Vf6NjHwjqFvKfQ6g5KbAv77ccYN2yEc3VNskCfasxHzB2LsjmhDY3bfozZ7crLUPnBRARaSEjG5N",
  "key17": "JV2vjXuY6LpHNhGqVCJ95t73TJP8zxeAkbCcsSjA8Y6aA76HddtCEnvFFhidRApbYas8EAAebmWqZ2uqH6Qn89e",
  "key18": "5q49HLPXQkpgocb95K5DERvjEXJK72WnvLjidCKB2gqDduAQKAiDvxKY6L5gtNrZzW6vjtD4XQc46q1jqAMo1PX7",
  "key19": "4Ww2pT9XRiWQfseTaroFCKFyeBSYkZ34V2ejmE61fPcYmfLbE3fAht1ouo38pE1yG2bmP43kcvBZhB1PFbh899Mv",
  "key20": "39w9vmHp1UA5WRiuhuUCL5ZsEZGF2DMHqiyK7q6b2pVVKJQqPfZ4fLLdLaRiooNYm7aRuw31kPt9zrAfPmJVrcJu",
  "key21": "2wJJGn6dQuhpUTDpYxoXoxcJpYRR3FeQ73Eq6G9rN8sGXPjfg3yvSC741HXXCvuH7xAbusKxWjgAKh6Hku1Bdj1q",
  "key22": "29ZfRhcPtwWb63VDJrqvNWAvQvY6n9u3wLZaob6qYQQabjxeAj8aPq12CqRLavioa7H71Zw7cwBpJUVmR85jhCye",
  "key23": "4EHex6xkmBHKCQb4RXSQSbJLz583EMtVyhgBmEr7E65heeLBas9wGhSxgDj2oVH4msu93VpRwyhtuUxwKn1RgTYx",
  "key24": "4hEpEbviz6A4WxVKW1Ly9D24mcq778RP6RegjHxiT5jnSbBfoMCZfLmvZ9Zu57SWaUWk3sZ1XHfrM64vqe645o8p",
  "key25": "P77ktsXyF9zn9ymGP42fFmA2nASt29AZvZoEwry4m6zTkAg1RQ8dsC2E6B1JFYncBaZ9ovqwnUHvu6rYhf9JNM3",
  "key26": "2XgFpcyi8SA4Lxa1U9F2HfX62rmatSrQjcyxK9jPg51TpyWNBsYkYGdDUEh7Ji6fZ7UPHsCz4c8cWQe2wmQHvvXn",
  "key27": "5o5UQsYVgaPxTuV9xLygrhbsZcBrW8o7bsmLupc4eM8uM874cFEaj1pgW9BXKfKdC83KJgsjyy59Qv14BL8tNnTN"
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
