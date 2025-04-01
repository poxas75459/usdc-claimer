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
    "3pPdX2Q1Pj8jbFEC5qVLmMU3smuKe2ejSekTfQusViHoUMF5DR6dmMUiLPDgst7vtUE3pAhqZ3kV5kft4h6bVBcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SnRJFP5WD8ADRLzCDyJUpcFq5czGkWUH6G7UNBVvaCYZ5XjFD3YwcYG97kxbx5iYwYSRWEnKwnkmjZ64R5hVqSB",
  "key1": "2FxqYLQopdVQTmq53VZUP8ofq4DJTnvxH23J6Fubk9fjSCeAyhZSbRi79VP8swo2yDyToGaKZbuHzY3W4vL7XiH8",
  "key2": "27ExUymzusEMTMxqeFZrpAcyY6xZRuLxkrxYMkafhw77YfUaBxDovvt2oqfSdY9MMgmfBnP9vLAKMZ24j6AUzmVf",
  "key3": "2e29p7XdjhhrXTDwqG3SbV1dVDL7XtUHYzFqxjTLfp92V4XCjmNhtJZ7ctcDVR3gxMpjPCrJ5Heb4ajWRQW2cmBP",
  "key4": "2xH8DMBFgP7E95aZnVECWjXEjcL6thQvFtBYhqfxqAFzuRPAjPXGC8nBegGuxXXoDFp59iT2qLMmRzHQNk8RGjWv",
  "key5": "2pA5ZjaoR9y9RQhzNjC1bBSsVgRP3DxQ6bAWFYmJ46neGEE8Th5X1u2EJnaUUsDUfSbBxpv8oUsCiKNnE9aPRn1L",
  "key6": "2h9deiAeLmTSNSMvwJpAeBfUNPAKsgsMR2PefLs1cMrHwTfwYUKnwY8cPuDHkX8AExeeqifgvzw2KauLqz5NdFPQ",
  "key7": "5c4zSzzj6YCGM4K1DJu6wFQLiijo7ko5JB2SvBSyko9UNC9KVEKki4d6hPrMctkDWHU7Er9QH4eL8PTQhvbkRwJi",
  "key8": "3GRATKmzuEgUNPEAHkhq3Vk8ptzR1XGwnwsGz6NF4fXQtmDXYYwvAHo1FNc8iV3fE2KHCQWBNtfbLFM4sgUfjkBo",
  "key9": "5Uki8sUT38RCijVZyfuBZK2s2fjkEoVR3E4W2FcKNZKSzy1StwAJ3HNx7fWDpUKfrb15fwhWYLPC28FaUtwif5GK",
  "key10": "2yTXWfgLxDsBFCoFcERwhF85dexpH5R2FomF68MBtM41Yghub7io5xHpdUZgZx6XdAH8VoTCXHwyG4bXc5wjXfih",
  "key11": "3rsM4cBCg9kuBiTutDByBRTm7PyPaM31xK26BhMjwwZoatzuCSApksvpTAkE5oiByEpTimXEK8w83jE59KcSKTQR",
  "key12": "2MbiwtYDCAaRwbTyhPAMf8C4kyK8ApNvt9n9q42Fz7iRMQhEEQLSzV2JC1Pii4RMtREWcznLugvDivmYjd1U8Ht1",
  "key13": "3wCHf2g48hqpsxtAbooFGj5wDYurHKCFC91jpJMY34HC7tKovv5WZx86CRCd34E8YWx2p2xU3Hj5J9RFYYXdJiBn",
  "key14": "44PWGce8SGoQA1pGwhat6ADeouAS7f5Scm5hyRCnkp5AfTZZp8zx2CfYbFW4mmb27yicNd1WD6wUB64miaNbk9HE",
  "key15": "r45dRAxDFQYhWQP3efiUR1W3A5DqA1jw3VEDpkVcV57LdJa2dqP5ggABHMsn4QY417YSWE9vaSFFDw4hbmGVZRa",
  "key16": "5yPuuZZjaebQjZ7VU3Nj39jht9ctP8nD2t8mQjHWZgmd58c4X2i8EKA46teTTt6j18myKiKmcZdDCsAi5Bu4TNLJ",
  "key17": "3PQy89qipXdtD2DUFhMXxcWpsW4rsdU9d8cca7wKerjzJV4xK82jfeP5Htx4iicccKDS2S2gszhvVb3tyCMjgoQz",
  "key18": "3CdAT7HCzJQqsJ59r3MGQN5hg58PwooWwMNwBxXQwjc8B2HDn8uruE7HmRsHtm5fZL1erdnMLqPdb2nKsXzqQHpv",
  "key19": "E12BEYBtjSSsuas9jM9i3o7pTJjGkJTHjjG3U7xkR7Vazqo8BKGaKTuqXNAYxFPBseBbpWxQzVpKW4KRqGmoGnE",
  "key20": "3pU98eDW7o8BAbpo6FB6nF2Y4DPjk8GJFRoQ28s3A5Mzdb8kQNjWGxe847FJHqtBiVrorXbqnnz9WbzSe88bxmNg",
  "key21": "vERJ6R2AYcgQw9Jgx8Cq5x1d7xCk49ByHAKUPu5EB2mqUHQXYr4bTTCXXPdFt4Q9NkidRsLbeE4rmivgJkqas3s",
  "key22": "2gaD34crMgKyDZy74Pc2FJij9MaF74EsEca1Y8Foy1r1UHbNVrCNVEL8NV8UcW3hEgbArjN18NEZQEP7ArJTB2Ja",
  "key23": "3tcCmoXJhnjJbzEjp8UWJS6BZCyopP6A27DRMnT55UV2hrv284vsqypE9WZavC8mZQrhFce3Ybfv8QSpLgSLtagZ",
  "key24": "Je37Lgn6YiPm3KgmjMjYSRQgUHTJbNGM9nmpxZJLtvbYkDCfFfbjrzUMfNftLGfbxwKfSBrb8dgS1FFx9DiEPtD",
  "key25": "356J6rqGMD2pQT17ancKXw1utaL4eLUcerF2Bv6ox7n5NTBbGSHGZDGwfN16QP8Lyen1u8wW5q7zd7jXcCCrJjh5",
  "key26": "xPc2WaKkgTTVVSYvmRv5fNjo8vM4y17N4xTjN3WFjeA18BMwohXLzjN2BkpjLFWQbqZL5WRdXNkoQ7xCLREtEZH",
  "key27": "4pBPVpYee8JKTLB2c8qPi3tpsPQ9Xv3CsGb1Vb2chwqaJtis8JcG5se38qGMgMHqPnxPmSvACtjthRGoMXDEWSox",
  "key28": "2Dyca3RWiz6ag87TbXg4QpJVqPU6wyH4KeHDD9RPs2E9kg2jA5TzveLFLkAr2eEAtcNRVBrDofwsuEp5nJ9gQxXf",
  "key29": "3KtDzRpeJfevN4gqanMiWxMups2UXhPk4n9ohs1Av1u42CnbcY6n6NAbiNBzWnGP78QUcQ8TAGZvg2si6JzntAx7",
  "key30": "55Ug1S3YETf4Y9rKA3aCWCSv5jHXcuk1RbPEPrmcbVJ3ZHU8PHBwBLrcQhwYd159AAhiWKz4HWf3ifRxxdHcRYof",
  "key31": "2xiJsJ4tHYwSAX29zwMw1gMZyV7yGc6NXGpGx5JdopsTREGcNnBkmLERXwH1UuWV8ot1Y2Szgaz2PE63nUoUmNzu",
  "key32": "37dPpxb3f3gdg3HuS5FJ2rwUuiXjgLRYJZKDzA2LXbtKXMpgo3UuXnSCM2f7YCnLJiwPPJ3mYTPkVRDBwPttmgNd",
  "key33": "2PAxvhAqw1zvXqB8XscGR9FJhwzG1kzWJJzN2YDsgjiGa3JUoVa5Bsd22oiAM7s2fp4b6jbZCvDCGiUA57pkwkiv",
  "key34": "4ftncDgLiQhG1ShbjPawFYqa3kWZr52gppEPBmGn9CuxjdE2LNsWXQPqjE1Nbmo9NSTHW1KreaX6Z8DSvWEiEEZH",
  "key35": "24G644WwCa4WDX55296bTLXiHdrutG3em2bBsrwrFGyBhaRa4ePtAzxi6deb5ETEPYHc6D9efbSeGNtHGvRhtQ86",
  "key36": "3qrWS2KV24j1dTJsJnp79KjFjes3U6r6FDU5s7p68rLvBevK6y2QnbtMVG9Gdusd2JUJFAL166F3LtxErqDfNE6L",
  "key37": "MVYfrZFcoJLzLo1pD3rTv2fRWUQGpfJjnLhYcyyTqN19aqKnuEw5pnUKPG8ugzWPANRvQ3rhgpaYT3CCMmJ7byx",
  "key38": "QwVcKHB84gKZiVSbW8GFKHnVyZZjbvc32AePUTRUJujU5Dm68TYxMcyQ8xMGHBu77rqy6WAcypeUszP4rGeZRpq",
  "key39": "22ko9eTypDy4BjeYZqFsFxTfKC3a9ucuSjTPVwSkrLPTG8VCpbBe6cZN1KTBTr7D7AMsT2VCR5hUAoLaSsyXBY2d",
  "key40": "3UGyvMmR5t3zmFGyEMLk9ycnhFNzsNSHtHSzNYy6PUTv4tyTJWYTzz8WUNDyvtKS2DGjX7EBohug1LrPEmH9JSWz"
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
