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
    "4KANhaaVVNBtATigFor9kPbmoPUjZL24RdLFmyKkNA8P6Et46z1sqzVA2CWH8BNFKUEnGWZwCfRGrgzaySbyL7bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kn5Hfoitp8WYJg8upJjxYtYg1yaf5Arm4CsLVC962H68iSPhwYKvU41wBf2hnHUzgL5ZXuQcv1TfvgLxEeSJhDC",
  "key1": "5Xe8uEFnNm6CQJ1MsbmjuyPzoQSzrkEgMmvExWxCq8gFWoSg3KpJ7Sfc5TRYaF7CcCDBeQ23pXJUfyHCSYoufkyQ",
  "key2": "2Uv7UGt1XG1H5rGZK7JFSUBAAYtCSJSgUNDvHBFWDEHCCtDvpNnq5pN7ejUNvW3MRhQQ2v523PERkXo1r6xVWDvp",
  "key3": "5zYrW97C3mhJvQDEQ3AFRTV5MEN4L1gjmEjASo3ZYf8XAczWZNequN6yqokuF6eymE1onypWhUAg5C9vSh66dVkA",
  "key4": "2tmPLNkL77hGdvgw45DErvuRwSkNVPv6chatavyoHKZghQNGDpg6y2sdSgWW21dqj3Dc8thL7L1VWm2aK7A19yua",
  "key5": "2yjFiLX6K2kk4tFhkGwsbcitiVYgh45AbhvuJvCk85P9418cvQHqyVo66QASEyYiYYuYVyAbtbAZ6KQB3xT3YMBg",
  "key6": "qpQBN1FP2zwUtzS7fYccv9ywaHQHoW88sDedFQA6cWEACKf3jD4GD7HChztbDU1S9RPxZsUz3JJiLPfL8NvQ2jx",
  "key7": "5z4GtkgHKDDECukd4vwTGRmLc6NQW8mdGuKwCfjvGjTjPVxD9nTaKenq857cDiBaV5JNTKKuHFgiz4LTSLEUM498",
  "key8": "4fSJgW6XQFpABbDNyUBpatBk7kn88tsFeAXoHMxdGgPH4NafLraA69CfMsXjTCZWb7f4CGFnrELADeXRCFrQXNAf",
  "key9": "41aSbN4wNkL5skSLB4ehPitJrxTpzsFN1g1mihrZBNrB6Cu7FJBwQUXTdZK89x4XhVDuL6ui9tb2Ws5oCadoDtn4",
  "key10": "55MCnFPDdXJUL5UCTFDrw9RBkzcv1EThZiVNBoQx1BZcASFM72SaDmpqfvb1MXiJoMuaPe2mbkv6AFNDnT2DGKNG",
  "key11": "pwetMM3L2R5Xtfkc1rYT54gB4i8Y2YjYQwweyKGTnfsstD39eF5qvwecMNctKHvnW3XBqCL7GPJbJwmZRx7ExQ2",
  "key12": "r1xe9au73itDu5WfXhq68xtn5YwPGfYeUauLWLp1zJFkJkHhixybFWreFpaBJBoY8tfk7TUgQTxDHw7ehMwa7An",
  "key13": "3FPhc9DBdHnMTSMg91XAWZcs7B96jrhFvncaBvFXwksJjufmNjdL1GfnigxcNiBg1D4AgePs2KMsvEnoeCSGfPJR",
  "key14": "2AhaHezLnwpJvxBRgDRZziUF5Dm7ZTMYk8v8mkEzUm2G6uAKgdSvd2Cf9WbiJ7h7w1zTFnjuxLT7D4poeMiKyarz",
  "key15": "37TbMNxLKqtvoXx9bphUnLUtFZnmJESh5PTUvgVsLkChk1J8aytyAs2Ch32BxzAngvuYhgRHQq8XaJkcroryg9vZ",
  "key16": "y3AgUq7qUh4M3u9kEFWoUEgmc22iRuBMbyjU97TiC6eJSd4zonAQ9pAQ1Lso1rHfosw9WEa9sa63Qk3sP9AnE8x",
  "key17": "21JwyK7oqRC9Jcjq3mogFCcBUaM3TTQTMCb9Jah598srhwksN1UFy1uxiXkgLWrpU4rPGQLs4Mr5S7RNAnCQorMB",
  "key18": "nSKUAG416sG5KM515UTykQUnUPrmdAyZN2B9FzK8ydyzhAnTSgSNr7L1jVm6twsDn3ehjgRqtvadLqk5QQY6iZ7",
  "key19": "2Q1QKZzYB4DLZ7kDDQLQnfpxrxQ5vn4sjCquvoxj9mENEUuFPSZVzHmtzH3j3qyQe1oVR2bWHb18oMbcZd5bqzSm",
  "key20": "2K8ZmijjRCHRBKyFZopjMTsoXe9CpfTwN2PP39wqv7TgBt1YtRzuzPs9kLDK1WassqW3zMf4ga9hZzY6X5vU2T5n",
  "key21": "5d8Yp3TFP6mvG4kFKTZ2PEnqNdQJPoYDxBZqq9zih4GwWJeEXHbpmMtX8x1z76yTRRUipACA5GxuAUQWmUW1eSkt",
  "key22": "3eSqZWhiNPKPP1xZsbVprXbARePHoq4FJnrEtxNZTbBitu4nsRtGCxRGH5WgimB4STcawpjcyfpsexV7v6oPiZhi",
  "key23": "hFAv5ZDCY5QM4JMNtH73LrneVHGCBytX6qk9yEESmtr6tddHCqBeZJyisKMXx5fTwhdw3tD9ws32EiQNsAeVGnT",
  "key24": "5mUQcnfQrd28fU9cDbtTNvBf6N4Ho9pJnAX5dYUXvfUfTpL7is71jYYfgjpjabFoDqsjQRpvD7HoBjbMRcKgSUes",
  "key25": "wc7tXfJt2i8oGsQ9RvQp8C72jJt7b2G3YLqVLgLyaoF3kmYsShn78GnSwC1PFwtXRwt6LydkpryWqoER6kKgfDP",
  "key26": "wG6eKde8Sk4YoTayJfELjQ9T1wiZrWrujLnXm8KXCnwvoBy58EY7DcJrEkEjeNS3xZCQQymPDBphKqDP2B3TETL",
  "key27": "5RFDuipdmY4qB1PMaRA28vjvhjzz7z7iHJHG6Uv6JWusjUa94tD1VYbWshH6Wppst9J2uvRYtbcFQ7F3HUtwS28x",
  "key28": "2BCDePcQjqBW2LMSMME4XArW2CmLVQSfW3mx7d6nWsX5uzmsLVT7LfYx42kBpsXEBAipSw1xnTG2S3fqmHEhHkKX",
  "key29": "2DeJFEEot7UvQPtm59CP6iYVHUjbnK7tfFJR53iGav1xUFaZLHefnuHBiTQoaRNfekyB1GRrihFzFX4hBuaxDLVm",
  "key30": "zv58TZgPAh9ZtpQPs4DZQk2pfRcDVjeWNXY8f3scirgLMTq2uxzzJR8DPH8bknqxefHvWoUJocNK9MSK4AGjrR1",
  "key31": "3JDRRphQtwmvJzvPigi9wg8qozm1V5WSxpQRvckh8nW9CW4A3RXDBNXisoJ7CsQwYFb8ffccjL14aWrWcyin7DY2",
  "key32": "44hws5p7PWnWzrEb1q8bEN18zdzPPPSGdx6EPYfvDGqZLKN9np91M8MhEweMhFVrpPwtbp6Gw1ggPHqEBhS6LHR6",
  "key33": "LAeUxQRVs3szWirT625JvhSFVH34xpHg689D9KkUKCP7C7NBGqSp5SAmb577uZBFi2uy9rCDzCgJdk8b3g1ChGo",
  "key34": "54XarHKx8SfVCgS57hWr5Y94udAzgdoYcJczTRpSE1Ti1wFSbHxRxeMJQCpP4KSGb4r9QGAc8FHttdST5puu1KNi",
  "key35": "298CfdrwcHXjxLgmL7errbzyTZEhV5jPyf5oR3EpBGnDeyxidF6gfJgykjr8injT2RsZHhkqTFLHq2EASpkLEN6Q",
  "key36": "6wE8dE9jKze9Sv36eS8EFJnpeMhEesEupFTunw66cwxjLYnBgbVmSCASRXxVMS61uFndqoiH9iwsefnZiExg9Pe",
  "key37": "2nu4jix1u88ChvCwUNrq1inp1ezq3rc3cCc93AYeEbmzpsq6r3Z135x9buDJZdrUDr8vo3rBZWwjzHYRr7SvYvZc",
  "key38": "2zyrMq4YcS79EoLHbFyMWywiCDD1fJvgREuZQBdxUuViN4JptEjEStVAQGjVYQN9mEopBoPceFsNda9F6RD9Bn5n"
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
