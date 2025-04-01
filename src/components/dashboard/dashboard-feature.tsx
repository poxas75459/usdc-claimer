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
    "2t6LXsn1wM4osjQEcvqZSuoCChb9FHEDrYCP1f1KsVsyJ3a619y13dx2WdWwVwA3F5VJ579pTK4PmogLW3csVDAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxGEmAFVviogKQC4e1iUvcdeyRvKB62v8KrndVeP2kXMwuNFPtdzMgudvv2DJwC5Zzsi2VrPmfvxtbLugtc97QZ",
  "key1": "31D8ik7VMYTMEAWgwuq5i3tZtwaQnCRpL6y4KFGJw6gefuaWEKzn9Ehe3efCx9ui1rMmL55WejAua8DrMLvohJYk",
  "key2": "37DAugva5gfuKRGYEaMJ1qJnrQASVNGDPLbPm6dWKpTbXC8PQmbQwnFyXcCX1ZDVWxAQTzxuQ5XpocrtoS8ZB7Vu",
  "key3": "AghdYBmuVAaKPaFmhyeqGCfpFmwmbnTF9Zybd8J2feNp6hdPdTVCa7sBBUyMNXsUrNgYodWNDHYJdGDftnZjRfJ",
  "key4": "5ULuV8XHJoKVFeCxqrNWm5SmTcjkDFTAMsH1uZvBi5t2Cqk2mzqeYFKaqujj3pq9V7LErsmUGKwASHuJjP86nLAk",
  "key5": "2jwaNvCoMkvM85VKD3FpNdukC1ReJpcWpXUuEsY89vXwy4q4HgzBVLTdmL7x17emwNx6igkZiUKeQjNCdXycijEo",
  "key6": "677AdubCpzT8b3kvw4yiUQYw11uqEADHhkcCPcyaLKJXesSUU71ZxQPnkB1D2NGu8cBtvGzWbu2vGTN1DBLwF9BC",
  "key7": "g1RmjqiEeLs9Gtoa8f8Dghep6UdzagpzmHvtEd2GB2tsCVrAJacMq8crQxuxFEkFP19EZuG44eL4CuijWJAbe66",
  "key8": "2AaNPRzU3VYrVGmaJL9BnM5xVpargs6KokXGMkaCsyz6rjhzk57ijCtS7uuaTPpPhwxmpuVtTpyhUgG89BeHg7BR",
  "key9": "2sVSyL8UaTNE2oPqA56u4Ky52yGaeK6BtpnkkZ22uARS73DmyiqXxtwZJb6yvAJqf6mgT1ekM3PUvEuue4eycwHu",
  "key10": "2MKLpjT8MJ4x8YUVMQNcNc5prWt1BMwa2aRdXCY6P958QAeUD6osobs2sGJ85zumQNDPAEonAVhNMhZSEgwZ4A1B",
  "key11": "Jm7MMGjEdpaafyMy3Ct7wV1V85r2J36KZ6CRGwzXWvY1TEzZtJQEKuGum6j8EbnDYr9omx4UoqCXSb8xvFNa4Y7",
  "key12": "5odDZCatKwdmHkLaC4vcL9WwWPfrJn2Et4WCfDB6WYY85KZPiRAY2vEsNvXRZQwtcFYCZyFfYXZvkPosciWuZmgu",
  "key13": "2b5UTVcJSi4kLKsd2dZxGnByA2h7zArEuRFpfKXZ8APrZdhDCWvatFSq2RJjBmxb4p6uAv5vFhQg3zHhdSKfut3u",
  "key14": "uTFdnkQeSbmXrQygbSZ3e9ouRHuafqtCB9Gy83fUhLNVnvUb4AMYcgRpDMPtph8vJ7JDC9kNVLrtwxGetTQHgbZ",
  "key15": "3vvQFL64K79ngFETZEZqZ8CMP9ngvuz7AZQguKngyYxSYTqkuqMRgq9dGz15mJnTKq2o46FcW9h8pSzZJgeEvkME",
  "key16": "4u1Lma7qSX5bMUXez7QY8y9Luh4vJw3Me7iyN5toQsELzafa7A2qxSGcoSsW9G4ubgC5gApNyEApzrgDJrZMDdAF",
  "key17": "cAZp3zqBTzaNR9AX7dnxrMe54UbL5ogdQgD2DGWRqJeDiX5rnF9zwFnEawxpXLnxLdTwHyyrtLwCzTestN21ZJ1",
  "key18": "UekaxrYcD6RErAfnNWLNV5gaitqpcnp71ZKwchCYcR27z92ZxLVXUNQL7Mre1sZZ2Mq7YFAZL656rH6Um3BCVYL",
  "key19": "3uMzdPZKkQgFnFABXG8f6vRP6sQCrQq3poxbEphrWiRfYHVK2yPcGnj7cWdDfaB4Bs7kudnxiVUPm5AP2JxCZ4pK",
  "key20": "5YCSGswzVGu2Y6qABR7h1X7KgNEJAnEdooJrhBzEDM5LhvGUT8J2Xiuy5Eyj1iegvNdeB8WuYGUFJ8etKf81K3Ei",
  "key21": "59iJ28MAYmQprvqzAnpYwbA75TRS2v6HyuCMukjtUExhPQUia3troWYRkEqyagzv657bau14DMpFwjS7CvoQZpuC",
  "key22": "X4mxEjtuNGe5JQkXgquiTB94JVH2gos1vsUspEQHMFZikZqx81XaH2VGFydhHcQvRe6rE2Y1QhMAFkcm3UbuVco",
  "key23": "32dm89DDzg98Ax9zY2EDtsnaHWnCzupR7YRvzJsg22sf7vkWNZR1XmmyczxaEqrty7fMyKkuyexoni8dy1rTRTrw",
  "key24": "35U6o2BaTWLq9E7T9CWKUggDoQBQMhqGCGWnr15y6Ws8N1PyHHubt8T48D5o6Y8CctvXurAy8PdToEUR41BRvEFd",
  "key25": "5tSRMSDvV8NXwAxuJfVNJG4wTT8e1GLqJBGHSv6617Cibi2SmdXRk16Ged4kgvybhdMNPaavS5FYodbVWh6Uwus3",
  "key26": "46G9aomXTUXC7dq53VR8SJrG3YfffkeJU8xAVcU1X1TvQ8Pw4SeWSn9vT3Zk4pSB3thDSwoJC7okydf9px6VH5b7",
  "key27": "42s1xCQ9Xuk84gTg9Uk7QQ1Drr3Ez7pmpjAJFHMyTyTsSPHkHj5iMLU1EuissKYrU5y6d5zxoPZbG7FeXyhyHRiZ",
  "key28": "4wVJPzW9ciSvozvxUxe2wk9c9YrQsvy6wrCN8Ne7vSnxuAEp7oULRSmwyW91QPbQNM2a3nJNz2zmR5dUwz2Ue5bk",
  "key29": "3man6kY4hEN8N7TCThdvCDoeqHd24iexwEeubnvcprrYyQhaQJSAfruzYNGPwPe9nmYCyAc4UNyia2o1swkxgVJF",
  "key30": "4BuJTZ78KbTGFbjZ7wotjxPhJQUuwwNECtR5XpLwK57ZFTNbApVeMSE5RMXUvGeiiPJBuWqJ1hwjGvTgizj5Gdn",
  "key31": "66QRRE3aWVDPjLFQimS9RjVfSjNXje5mfSDEEfXAn8VGULiW21MA6gaQN9SkPDQo3JWFsns9rNk8iqPujvK7GoHd",
  "key32": "3rwdDCQLnD4sdo1yCEe3NUL4GExg3173dzFygnY43CEj8eUCTgVzAVcHteiZv8DsESqP4FTjsw4HxMumVUUwWGWk",
  "key33": "2dKVyySj3PtB9umdBbSnafRnm9kbe3qz6hW4LTSvMRZFoSNuq4PxMGvXFbrmtxCUBQzN7YQymD2wbucGnRuxUSGQ",
  "key34": "26DQ5wtfDWCAnDBBzB5jJfj5QK4MMXq5W9i7juz4w17Nz7UcumzJqg8PyGxgWTZ2DjHALxT3Et2NTpzRFJFiMtur",
  "key35": "3yibBmFtKqSheabjkVRpuHBvsm7JrCe9ThUbJn6LyHLT7o35DfnhzCwcgUA1cU2GNPU1RpA4S6YJAgWweBZMZ52e",
  "key36": "2krgFk8f3Qn4dJ1RdiK6v3J9kMZHLGNB3Sr1CnMQuFR2oH8tFNLZ9eMe4h6uD6tNnPC2LVJJpDvqY1rAzwpBcXjb",
  "key37": "2mWpgZxamvjLVggfeHtScQyKKrs11VU2Du5CtZoLDUx38MqxjkAyxxTjuW42ASh5qQxSxayxmHHsKP8KNKD8ndFB",
  "key38": "3GxSeeJ9FmKLnctjkJTj8HLydUMNqyQbhwVNpT9AjDxAYJYKkT28ycfyXznYqnwibbzWu6Ke9zWEYjRtwmS5Dfei",
  "key39": "5jKvQJ6TXnTiv1qmoqc4zCCGJKynKwGkm9PjdzLmYwoMGR37TjcrcuV5wviKtASE84cHxa3odikDQHUs64Fg2wTK",
  "key40": "66DAkqDf4KKLnKN4fEX4iyjipwPvqKEKjdYGnPA56qtQbeTs2PU7R77HphFz3cffcZwuK3yqznwopPkznh9pMdQq",
  "key41": "YD4z9PSDEQkyEsHN89NFUVwR8dKRR79tVuLfKX1Z6hhu9vEa5NcTpeoD2HrZAp6EFQ3znc1raYHBBCae98is8Jo",
  "key42": "3FzjNmShAbMPZ8GbzAdt1rCqvqdrcRTaxgXAfN73sB5HPQJzhwn5HTzWur7ttthpMzP3CCUGVUoogoQLqE6NPJSf"
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
