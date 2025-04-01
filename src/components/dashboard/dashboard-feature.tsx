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
    "4wFjzQVVb6y2638qEM4pmK78YPtW2iiFJGU4nwDRL7CeKTueijWQPXH1ti2xEsuqjnD7MA46XgAPmN8EFSUByDen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWpmm98ed5zqGjFwoUmxcynqXwiwHUEdJ6o8ts1p8ukrYbkRbWjjwrUrovo4T24eCy5NVNW79w4jA83fqyxn4Ge",
  "key1": "2q5eL26RaNZGiC6e3qpbteb7fea16hutCM3PMga5GbztokgcX9c2uy8HYAYaarmMDSvBXvDVJcBdMwNynK6YkEXe",
  "key2": "36MWvyHgYZfgCuwRxqWJBkCFiL68pfpGYdYoqq2CHDymtpXxargQyu4cWJ9fZ3uLew5KvV2BLRp2uiZaErKoquby",
  "key3": "h3mPJXjsg6AtNzY2r9YBsazNg2ub5K57i3zzkpbXjRkfxYZZc1cRXNRXpqVEJK23T8HiEQ8aixTDNNHbDTLN7h6",
  "key4": "5XuKWeCHQiNfMAqCj87W1kLeTWQPy31AakTboNscKRSmxKHEeR7APedwSbJ8rgEeeiNoGe8Fgv8JfDFFapaEBpgk",
  "key5": "48cxwyEBj8JECvQb2x28SEJ69VX17xVoBoBx95qqZmVPQKegCDcXfF8YQdqBmRC6EBocB6hQyPjC9jdH7JBGaygm",
  "key6": "Eo6b6oLC6QakAvdCzY8o7WFc6sXQQDngVov2GPyaf9H2H4CfNemouZVFuvEpDkEm3BNBCMN8cnfUbKwpGeGL2SQ",
  "key7": "37aSUQsB3WXmX1Yab61MwBWMMfFPiHpi799mKVeCyqGeo59abpT5Q5g7mLtVf7ogTzmE5FpCuQPzuG1eyAdXhuxG",
  "key8": "5skqtqfmTDraVYQoP7BHabFNh3cBAJig3Ev6RxQSuRsJ1Cwxo83nAxNtsHyvFn85cpaVHyi9VWqqYqWEYEaq6bDu",
  "key9": "4QwxfJ6JaazfgkPvy8L5ZX3PZAHTdC1D9To9FKcwMVJJdRPZmE8FEaD2uZ3eyAKkw7HaVdcEVmc8Hqn54zuSrBeS",
  "key10": "63KpkqiDLARjTBRygkZsoDsebMRBysdsmdindEJfLWd8N1CfuiVaYkpUGuqBwa4fBmK6412AxP4HfpHpkWMsB9Rf",
  "key11": "5j3HANoT2UV1gww18n5Hev5WWxkP6Yb5Y5oJ6W1ukhFzJrQQcNS2xWPzCoxc4GUpitMzEXVejeyPFVYRWc6nGw6i",
  "key12": "2MYKKWXfsjR1vF2DsM4T81T3SputbNtiACADHt79c3Q6qJEtzRuqig24dSshkphcgAHModWRB3zp5UC9xEmtaMpD",
  "key13": "2u7rYnu8TSJDgdLSj4dLfQJa8yf22qeJqVqdnhrPYwjESKxMsBbyippUSfYin8mX15AEANT3iPxhfkQrSeqGvyt1",
  "key14": "5cM4rYJ1dYnw7v2C2Uvhv4vN2p6YGqJk7ykZ5YFTij4juZDgY5W3dQaSNZr5rRE9JAYjFoT3QETZYBfmnJka5hwp",
  "key15": "3vvzijFTPiBmCDPZR1s8QyMUh7CujfMHwCdntw97t8EYNiXM48E3bDoRoZ6THvb4LyKXX5obNMEZ8FkHHzmc6MrU",
  "key16": "2whZnHkNbyqgiKdET1aEF7igotz5HBn1QjBf8x5cg4bEvfSPVfGEYUGFStWRmiyvxFqrEHN7oMjTL9BM64ob7FBw",
  "key17": "b2qBtVuSdEF9H78ddxtjuR4g11U9BU5pDGawCMvK6Djq4rVoTX97TmVEJjm2BfL5F33MqT6petjPupo5wYuHqpo",
  "key18": "2j32rSjw1oCJirmr2pdQdXwCMsp2D648tGXVXdPxrswRA6rbFPtioiqsypByRJhBW4VFkR5AD32sDM85zoVcuFgU",
  "key19": "3X1Su6njPuzuZmXXBStBA8H8wE4jBXVqFDk5MBN6uaN4VbsXxULANGsQ8bVRGzDyMHqqM1nBWxD4FfHyHhcbkMPo",
  "key20": "2qMCJx4YemToohrVd2MeW9sErCGWFHZd4Sy378iq1XKN6iHuwrTsvetqCYpkQZBEVNRuKpzZrfXyGgE8BGFRRFxr",
  "key21": "n6NdPTkjT3qfqSvQSReVzNXERrAxBeJoFW6AxE2kAwSoBHSeXTqPcYnKnMSGv8nemP7UxS3kZq2fLmiHchuZFi4",
  "key22": "5m2JQY3PiWD1qVggPYmxKS3NGxDk8BhUqXdaXXMExwHtqBMzu4UATMWimqx8wFS1TLJgLmTW3e53YpWxyuxGQMVM",
  "key23": "3tKv8hC3SfGCiMcFYVWgVNPUcFsgfpUe2NJq4qmuXD1q8UPW7yFyNR4ZME3C6DWag7XX8C5idrMKeESD4Xcr6s9R",
  "key24": "4UP4BurrdyWDYsGcv4tWoN5jnJ3nf9eTedtyLjd57jYsxwC9t5CZHYA6YEdPWdHj7AxB8toXYndoduwMqM3QKV5r",
  "key25": "4r9tzLCSyqzNLGhKFhAcr4LXfQ7DniJppPzeSaRopNowgQikhUHJzxrKAjv3HJqrZwtgxiGKNvjQ9SA4KHP4zwmH",
  "key26": "3xX6w6F9W9Dqw8WTvNFZukMKT4UhBtsEBetg1EMxLkiA2i7HedjVeW5dkyBjDFk4euyqVZLBW9Ji3LbYVd6qE3Sc",
  "key27": "43pwkooikA79GAujmu5AvJx42TGp8q74E6sCARuGfF79uMW9u4bwrVJSiUY9xGzEPDfBcHfx1QaDfd1UjYyuGCnM",
  "key28": "63GoJDKC4U9LuHNTGuQ8z6bt4JQzUsAbxZaU7vR1bgpoiDGeoN5DQ8nwqfH24MsLLQ6sXnJLkdCiM4jyPnqP4bSa",
  "key29": "5PXgdhiBNa2RGWiXfVup7nYXmercuJD9CqAJZo2tMr3yrjFuWXCGSJHX6nsorXXsrzg5aopxb6A2u9bmGKN1Shh"
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
