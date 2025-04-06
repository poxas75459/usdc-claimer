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
    "3HK2jtakQjqp2JKc8gezqQEyQWRqLoZt1v9SKGwky5avDZhRy1kKbPu98USTSrZ23wkVNqqwZZKcKQiHNQtaCCcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2YiE2PUCydC7zDufvYV2thdpJN4YDjWfXD41RJdrQPpeSSjHe3zA558Apjq7Xj3vMjQHz5rtUKDsEjoYKR8Amu",
  "key1": "pzkszdDJ8xHm6Td3YEMYNZkpUdVyujFLEhDeZtEchRGw4TumqFdjaoyktaPS9JiRMqaCwgE4A611oc3ZPdSpndC",
  "key2": "5CCU9KawQoEWaYeBYfrVb777ckqKMYNroJ18tsExcAnkjLH2E3soQzjF9NhJaRXkY3hCJxMGWTMHYqSvAHmnDhqG",
  "key3": "2u7CxMHYovgLqcjQqNF5wWvThp1cs3C9bvBhF38xid1ZfqPYGR3r7GqLzdR2BHL6zCpQhRREN6e4mW1hGWJXRFdV",
  "key4": "27pbDBut2K1MUtDDzmCkcUZvDYeekE4gTEKCP8zJggbcLRZp4scCKJyYLCGkWPYujyQBzvM8pmQTfyEHAR6TSRah",
  "key5": "5r4Q2uu7A2LmZmnupkN4fGRSqJz45Sv69HwGEiqnTwkucDWSJVuNZuKBtiDK2zog5URyfDgUcTmsbviyvPAmw6Ae",
  "key6": "5x9rZZrM81vuQDYVb3bogZCb52LAivp81zDXyHA477xQ8Tinzf1ypkiEyDDMFRxBoo1ox5nqnvXhcUsmCKNbLqtJ",
  "key7": "3FLycHcn4DZxZcmF2onGyL7EsGJZKJRZ5MM3Wvpad6wpRdFb4wcnBDvtiXzDu1GMJLH4BsUTjS2BfBZAsdZgE89k",
  "key8": "mr4hcBXJXXkx9YQ6hsxmoQz7Z4M5dJEzNCgEu8cW4PUTzZcrJe6Z5ZapZdStKSxgw1W2Abz18By6WDgsBwyYcwV",
  "key9": "3GGzWYsd8TvxSfUrge5anRp63BFfWGzS9igFpguKp7c8aDbQY9MTBQoni14SBT6Xp7avH5JCMaRauqanimQrVcBr",
  "key10": "3YSP42XrJMuPKiq2yfwSSPCV9kuLwUgWKhuuQiMbd2BkP8MC5ftTKp1Rswa8aWyQcACqRBfMLDJrvc1UVjkZruSa",
  "key11": "ih4XycLusnS52YWjaVweGS6d6LcPiu4kihPnDjwccriJdjjqmd7oPMCMJd8iYEHjeKjbfyBBcH8okNQpN45p2Ss",
  "key12": "3R8ZgzMjLUFcpYEXtRjDu7HUw9JefKr63krEBnAbJxCbbx2V5tat9e5XkqcZnLqEGvGxW7D1ixjcPwu5CDD1X4yP",
  "key13": "5bKf3Uf7XaYo6S24YYKkGKjDVSh5Aru92exbGsPyHAYQTooyEqKG6mrmMdTKXCT7WKpam5iXzwnUHyXyZ8as98zJ",
  "key14": "4dQi1Vub3w7yK3fZhkr9x64icU2m5DgaNwniN1pHzhepgYruF45v1xuZPdWpe9A9GmmKj8XppSZVHMRFb9oZjWH8",
  "key15": "MtDNAwk5Q9ZdJ63g8WGCsBCx1Y7PoLstVrJPgWYKsqty5A4Qp58L9L9t4bbCuuGBAp96bfVo8ySaiWtfSxVvWrH",
  "key16": "4KmkBEeuLLYW6CnFG4EsxgNCz9wmkAExJYVSfTf8vEkcoN3GASvTw3jWvhEJg6WrXvMDpR3k1XHwP44w9hsbArsc",
  "key17": "5LpYgqhsDBFEWjvvaM9YWHRYNQ9qaC6kQD9Qe3Sexd6X34MqTv8tkftWvc381RHuj6Cb6eBp7jjgA7CjaH33taHS",
  "key18": "6614o6PRhUaoAepEn6yJqeQkodK3joMqPaFwz2SZNxjNYiD17Qw42wUJUramek1qJZoDhN12V2PuontmGprzMG3W",
  "key19": "2LXNzQ2VWabENiFgWcp9GhvPQT2CWun99cJYQECNf6F4FvcPmqti5iyxnnbWJgKw5V4ErraWo68dNRDsA7KY4doV",
  "key20": "5F46P62xj44naai9Hip4qBv45yXYJ4JxnEZPvuD1gWei38RuTJiyLCewKpAnSeB4PpRwRHeNy9ogBQgyRF8w26K1",
  "key21": "4799PkDgQj6ZxxfNroA5YXmdcfmbrbpCAJEwxjKrTTTKsFCUuzTCGUw5EdHmNGzXQtqv6dTvDHpWyhzHTZq3pEVa",
  "key22": "fTzTbAUEHqxcfAWHnymjw1h2z2UvvvMWKk2Czb2PqpBghd6CkqpccptVWGBCLHEYUNzSYQFriudNDTAC4uDy7Yj",
  "key23": "2T7441JCFTfsvW66qa3bRXzWyRdGvoWQWVUjh8Jadyvnm7g3e7G2n95fYmH1HZCTSfMQJ7Xtn1BR9szeXb2rMY83",
  "key24": "3tMuFRN6uASCcyV9Qv9YgKpcs5ueQfGMQPL8AVBsrrPpn4ow6vZFai6tQtw929jUaWauL9R67MVKbezyTuxKumPH",
  "key25": "2E54jZQAaWtRdDquG7NzxpH1BjYjEgSz9qi8R54yLqZx7jZw4q8PMzduhsrddQVzeEyK9UDRUBQ2JQfGhoGCaj8z",
  "key26": "2MGBStezkWeCLttXek7CFabnFcVHn7dpM9tagBBBjbDbeDVPSQY1Qs5h5Uo5u656ofiCkJamK2zwoLVHJhLfUpvm",
  "key27": "3gcW2nLq3NJzqJH4dM4hXa5AMR4Sq14BRtEvccrNTsr7Jr9EJEGyVzBzzrJEtohvpCD4hkt81jkqY4auDQyMTq2d",
  "key28": "4Lz3L9QBmabzkr1KXd4WfErGKo5Da2xXMw2Ajdhf7Whm57SASURiob2Wf68Yypu5Cb9m8t6xDojX7DUiWeztmrMB",
  "key29": "28RFzWMgUAgTX3gcFHC6BRVdD8q5FR2S8q1SnGU5PvcZAUZQh4NXELusyKfRfXVEdyWeaxVTjD8C4cjxmaHCTekT",
  "key30": "54ZxUnWR6UHiUEPkwDBRpWK1RWURrnZdHKbRvm5FdbQGGLWBRWxthrNQ6DyNYYzaa2MzAxULaBzC4tBd5bWaSdcC",
  "key31": "6aEQxwmgUHvhWwZmiYfrnHSP22ymmR4YAdVEW7VtpgmvZrZ17z4N7DJbmEDeTdYaaLAXbXZW4BTu7js2ueZBgV4",
  "key32": "94Pcq9cqVJFQ22wSFVC2WDYyQ8wg7oeFux786YFSmpC1a76ymGyUekdPcJJJE9B5YPnpLFxh22GQawofXCJbCRv",
  "key33": "4rV8krqXg8cQaKwTiaAC3s92XbWTH1s1tyFStvyvC4RnGcycgkbLkaqqVMwAQ1NFc9sY64PCxUkHW697fSn9ifd8",
  "key34": "2wWRXLueR4dGPYCsfsRFrdvVcvdwd42Xc4JbvVqtCtDhvdReHWqckxbDBCdpmjqp7Dr8wdLUADJVWFxjMC6vMLrg",
  "key35": "2LRgpt5K3qKZz76rKCb4t1eUCbqB9qALoeTQk5JG8wjWgPceqHKChfdAgU4V2YwV9mge9tgjCyzDsp895sjsDxjX",
  "key36": "3o3Edxn6hQLetFBVkLGkqySw75vLENkzMqHN25uaesfR75QPKwfsC82UcvqHKANi4atpDpHuTFmXgpArDKE87PZi",
  "key37": "3Ea8sFnik4SjnfNJxLcHyLwmrooUrxMS3CuSHYsXEbaFPQGEe28cxttpy3BMpEpCfrTb61iyAKrvKqk7YTcCs85s",
  "key38": "5m2UC5RoVRmHnSKouAVPekwUc7Adq5vHZsJyEuNbKeLV4j9n9xFpHt2gWCF86QNpwowSaPM5Rc6dZUKNQLo4KoP6",
  "key39": "2cFExbKcZzSQMcyQ3wvPGqteEbZDASnPCjNpRXuYSLinWYTEeEKAu5GsLpXmsQdcUf28y2AGNgXMrnkuv8xxeNjJ",
  "key40": "2yiHH9MBFTVMMQcfgjyH8Niyy1pvAgkNYNcU8ZHXiEWema43hA883rEJzRS7th4drtiGVQU3GTpY5b2EHAG1Mz1e",
  "key41": "55jb13HReUJDB4vhtH4KFRKc1mtaEm4WqhVk5vFdVKSxvQkZ3BzJ6wqmCi6YMfcbwBjcwJvP2JZeBrTU6UwUyb5G",
  "key42": "2o8erdEmbbUu2JGijbQivkUq9Ror7LMVJCK2UoVGDrnftDTDPbd9iN8ya3tamJi2NiT6jkAi3cS14MqffEL39B8z",
  "key43": "5GPLgH6dtUncXqRS7eVWGstWuYoPFWPFVNZ5NxCS76KUjjHBTVo3vZq5ttXXdTfTvheugwHGgRxyx3NbvJAmPrVy",
  "key44": "5hLSULtNNHiQgQCvc9kfNcPQHaLNjXbGWnXGWSnw5bQ7tGu3m3YGigKduNuc2r8T3t3RUh2FXiSgQoxFbcH8RbDa",
  "key45": "aHAbSAVHaCAkNwx3ibu7QJteeyXnxtJ2jFKj8bYTLva1RdXvLk9fQUHwm2gm77qW3RGnT17rc1EWZBinn36TwCs",
  "key46": "4vsMBd1t1yvwrgbRQdYBVtLuLskwyg1HYw53BLRFWiZJUUnTkzRCvYGWiYZcW4pqoyBLu2AJfKXRQ1jXAgcQhSk5",
  "key47": "58pzkzqQu55PNwmsqJ2wMVADeuDc7CNbpB3Reo68s6Dr3Nv3mYBpYuNR8QrWLqitgNbD79QUJ2wNX8yc24cMdFDu",
  "key48": "2jyQD5wzosfTHE7gRoRSpi6RarJv3snYb8JGTp1g6vTx62YkMRAUZ8wbMxhufrqkyLsDfxnZKAPGCmVp26yLB7Ny"
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
