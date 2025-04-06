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
    "2r7wwTeKPFNuGa4ccGnQpZ6rKBAW5BCwKHWo5GKbpTgB4Lx2uoGZkTp67ecT2zSRT361CRz8ndBjqkPw12DPwyHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51uYNCHQ2bhzkWwNDFhTi3TRfYJcLN5qS8wG2usVufubiwUNn8EU9VuCw2dhKqUsQgNgAUzc8QErPyyzgSx4rafU",
  "key1": "xJVKj6MUNKrHbYRWZzMkzLbvhJfP4SH1mznhN3H5UuUzWzLYURjpWL6Vrn4T3AbJFMxdxzDCfGqJtRLMRrVvTed",
  "key2": "SA97KQSLKCqkhEQBL1sNX9gTnUejzmumewCmgtBqeDo1v2NexeGG8TYffqhJJrazPVzAoDdKvhrNRMmWN2LHwwp",
  "key3": "PsGQnEArqwAUNdjZ22jkejDvXaJH3o5MTmtHCuUHWq6MQ4BvRPaQYRyv7sx1daL9MBgJUFMJgDM7TVW1EdXAEWD",
  "key4": "4NfayjnTskJygT3EbeDXSGsj2Aprgo2Zds5ndFxJFFPf7AAMNkE4gbMn5WRiVKQbfQK7dzniQhAmFens5MGXpRNX",
  "key5": "2LXWqdEMBW4F7qW5SyGRd3E8ugfRdZKQ8Ujgr5CXfEP4wNUn5G7NYxVxiDGaD6p39hd4riUrx38HYDBkr1rPfVUQ",
  "key6": "4d83w3cfREP2iFHJJWofQFiKUXMpbqXfkWgk27MJB6ntVukRsXun4xGg6efqMqQsks3DJxweFDcWzWbHtn4bYy5s",
  "key7": "3NfjvoyD1WsMS4EWTYewoDknfgWNUqz7azzK371EJjJvu4d1KWyPHVYe5Vj5n15CxTDgssvBh1qBYvZbLxfVYD6Q",
  "key8": "nma4QGERbfdN4jYFTSinqqFmHVvstPDmi518PSZ9TB8EJyJVkyHtW6MTSphExs6A94PNW275xBfivLH8QzJwh4Y",
  "key9": "4zczndeSDRN9f8wjN1TdAMsTrLdDdZG9DQ8aTzBygFD38CjhxCsRuGd6HkqDi8R8xrzqbWaMd2qXMXdnoJCAk4gz",
  "key10": "3aamU1xdXzxhq7vujACRLn2Gr7ruKLcefecEDpLZq1trxdDvp7JXKNsEwNLa4CwMxkcx9iCmLj2A9NQWqtwKSRyV",
  "key11": "464EWnuWf9BSnd3Cr9eVqTZJfcnoW2c2JppDeMgtpqoDzDbMmkftMZkqVZDM8h4Uy9NfaS1rSUKcz9Nb2FBthEvE",
  "key12": "4hyfJMhP13u8ar65dAdKFVu2wo3gYUboryP8qLQY1fKeVKgFZesC81jVStj8Vsdx96bnh9cZWyaLuyjPCdZjinBi",
  "key13": "65hRMbFXjXhEjYodWnFYKzfwTKvrw1JPeHjsWMCLCnb2JMeWG6uoxy6Ar8bnm1CWPX3svvTfnpjZTS9GiyZEbhha",
  "key14": "2u73x1SCvEsD5mHkw1RwT5kfwcxJp8fiVH9vP4ypqjJRWNcKbNAFgvPNdEXuXHmkXipQ6YvNsJP8TCRG1NTsKNkW",
  "key15": "3R2x8rapKPez21wStNc7hDuKmHnJj8ZAj16P3qA99U7rfTqXg23b3hQL96vocu7Pxm3wW3rRpW3xKaNVr3apX1dP",
  "key16": "eXwDCAAepfqNwGD68VwCvx4a4dwFRKJw2dd5x7BRhff9epSDJ3zNKPn2GpjMeFMx5AgwrXuiD2aoNfCH45X4ZX2",
  "key17": "5coqprSFEzuDSk7r6SomVn6PSG6TcimhJePMeiWYwxL1Tv9wazaDV6vP57tVx7VjikxCeK9KQMLU6mFyjSJPxHFc",
  "key18": "23L3674wv2JZ99NdQs2dHW23ukyYGiEAS2eMfRkYwcP264xitLxaaQfB3ixrrU3GPyzLBihVZEUUUENuRU5kAbxP",
  "key19": "61j1u9zS9KL3Zj5TesGqrA1bsH3pGKAha1RvbviooCMCsfMaAkZNFLRFjoNYiLnsydjJqtyfNkCA7aX37cWCVpsC",
  "key20": "56KRqGBGDEEt1iBPhhsNQFN6oVaGh5H9SdWmgPr8qkVuzD33urNHA6pVNT8egAL1ebMWghG9iHpxza1LaBPPhXP1",
  "key21": "2YMxSGMUPpH6keEmpfqNvWMyM4sBHTe68bUKaUdSkob8GyNN3NhZ8dBdAVRtta5oXNidUaSuG3vxZGTV7p56uLEU",
  "key22": "MRHFxQkhdULEYRMx55UZxdQbC4ZweQDQq6u28EdU9fn49Vh1nv29k8R2xKREBDwz3LAH2xhYFn4as4V2c3ZXzT5",
  "key23": "57ECjDaLQ4bTYiWSwcxfwLFkX7eofuNkYYSzfkGCDhowvYW3Lys4nothLnT3iCU3yprXAQ5eZSnRZCRdpS8KuvzP",
  "key24": "4LVUwS5QkCTXqPZx7n3RVz3rrinTHWJq8Z76u5vhbMAToybdWZoxb6ujoZm2k5ZmyHx8EsFvYHrwVZoMZuh32LtY",
  "key25": "3oryXJHh48W43NX2VJmC2tVGunbNJt2rNcfxboEX1mXUZ3dPC4StDJ5VbCWDyedTTYRrGiYZBoX8K8Cycif4rKtm",
  "key26": "5Ds3k9uhryhbeKR5ENqhcuEZVLftkJV7gXaUrJmX4HhMCiKKdMsaUGSfYnwb8mW7bkHK9W7JuibArjmvA5BWoXf4",
  "key27": "4a237o3n3s4QqvgkhfsXaecDK88iQ7CComUrxCJNKhedvwSeKVzbSvDUsgA1Lsgo9SXCjxe3MRj1nSJxcVg65AQR",
  "key28": "3cz8TcwK5QDTtzMopj2HcRdvyhHmLq5C1eTGLQRmUzgN9cZamc3DMK1E5z6QNjP4U5d2Eq7kfoapRAGW6SyLhVz7",
  "key29": "46cGWKS1ixbHmvGdgvGHmaChcLonD91GnvszvuDSUKYgc3bAPg4npREG1MTAio6zmWEY8b2ob5AzJUCASXSR2qnV",
  "key30": "2BXUqUSZgguQGCy88bscQQQatTpCqwsVJrAJgJq5URvXkubjgfZhd9bupVXQ2tiqp9weexp9cWYmXfhFzK2nZco4",
  "key31": "33SwigFJGHrBt4PcWDiL4zBxAwoED3tvBSRMf6SmsMohkHkXppwJqKWCJEd7dEsBSjMtbcCXSigC8YQ5wADShNNa",
  "key32": "2vj2Xjh4AQpsBbeURxs9qeKHwgYx6agEW1BD53Gg87sqXskcPdboA7FQE5hdoyjZKvJQitDqiAmWtKP1KNNAFr1G",
  "key33": "2NHfvHS3E7iJxqx6rLtjR8GTPUGG6vcwt7jNPJWuGjafXLYUdCc3vgA86SAEz7MDNcFGn8TfijSbuaHdKVfjKX5G",
  "key34": "23gRRiamoFc4qkLgdkEZCwiE8feeR847PNjLVu63QeVuUUE6AeVeT8LpAF6JPu7oAsDMqnQ1MWt12fuBpvhhPfQ5",
  "key35": "28hM7VUN5FxX7jPsVKdgaugQaoZfir9QZn7WWS3V5KrTfkhupc5FUT6GX8GkiuNu7T1pstjmK41upimtZUaNTfSQ",
  "key36": "5AsPaqgB98RscDN7UYkGZ5diiveK7CcDzfHyD2XTcRR54mUjADqzqcbLtJGdMy7ZYfc6pwc9XMxhNEM8CH176nYc",
  "key37": "tCs1YRoooNQddBjxNQn94CJJcF4GDdNztpU1VbJF84XriPmqJfYqBPyPAKuwVroYVibXjokCCGDWPvkLsjbseH9",
  "key38": "4YSf292j3fKrhgFyZqDM95GHHWYaY9w2kabAUXgDeJdNFQ36gR1Loec12rK8qUcDrSXEEiSchMWP8Vt4FfwQ3LWu",
  "key39": "5xCLh1RAxPk5SUvkxLbaS8CnN6Cub81zKmTvZpft7E5JdNUrrjbcSC6HeA4vwg6eqmgeyAZUutzUfhveuDVDiPBJ",
  "key40": "5scnATXz8evH6bCq7wFuUL34rahkBfy4Hm8Kgn3eshyxjCrXtgc9bdSXwUtyiAuGeRyjtpPHdooNqdFYQS4jcJZq",
  "key41": "4HhubW2hUwXkRfHaMS6We7rvLug1gmvt2icAUWQRWthJ5YaubpfMkVSwUwR7562rDwN4NwGu1kG1MKjnzaTTf9Rh",
  "key42": "UfktdsDoRgnvucCVU98TGuGhpJiywht9KbRhDaUjLUiPBySxcMv3DP6yBXradqmprqnZ8dL5BSwHRn1aVUYh6Wz",
  "key43": "2ejERNFcfrH9k56hrKxgXP2XPDRYMMMgG1hNw3oybMZb6nFr2CU9tKHESW1iDujnaEYYCGw35ro4QXRMAeVGqcbY",
  "key44": "QtUWUhR96XHfn46u8skgRzGqfCF9MVtVBy8XnPDiVTxZuqVe1QBKAEKwQkgzXRXaUaeaSbxtcieqBt4SfvmnuTP"
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
