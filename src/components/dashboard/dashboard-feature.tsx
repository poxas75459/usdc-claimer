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
    "emkdpWRhHf8Na58K4PpWoZ4y2Qz3i4LyJhHjTHtoXrEMcGnnbgKA2iJucFeHZsqUXiYXKw1UQHWgFEe4wFA5Vvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3foE2As6GmCHdTz6nkuJLqwh7WsHhtvJEHugqrquHQP757VHikXn6fHsR7dcyLn8JhinUVVPVb32BdwoBQip4nTa",
  "key1": "3gCznTKDuD6YmNSjvHY8KDWo5NTjnEZwhp8XsrGKUe2N5DbMGCNr62DngAGvP2DmDuJkUjJtQz9YXPEsbpMzBLUV",
  "key2": "39V1TLMtkeSkn7LX7goeA3rGqyU9VPWKx93HqEvUdR2tWBRigEYnjs6w3AKV2WSnG1cjAE7PNuH1pdUnqW6BfK8E",
  "key3": "ZEYmBW7yb6PfdUhzNbrLUddmdtrbWrv2UHtaVxjRPkVdY7EYczUKyvTKPWgmA1UXDQCtQHN1UHwB7dJJBFSAviy",
  "key4": "4YgB1LCS1KYwERrG6xgxec8CmuXKidqURVkmR98Y938jUW8UVpfsAKR6wp52U1RMDJ591wXgGTUmFFakM4rjABUF",
  "key5": "dNHERLm837bDg6GumHgFFmGs8E7dS9hJmDEMUs2AYFUPik9dRxWi9JUjSrqxvRKC8whFo8gLjzTcU6tvxMbXFQr",
  "key6": "5Zbo6A9SgdQBFfhrt4dHobVQ78hThJ1sR28sNi5kQcgYyS7gdGcf1XgZAtX7uyC3keMJD3TucvbSNeJ2b4uScVqK",
  "key7": "4iJ6duogJnnRVwGafmdVTbQhx4J7SZNwGWgqCkgwxBsc9KRrqw1psAPRTfCC8kn2tRKwwC2z4PSYRAsGQYmXritM",
  "key8": "2fDyuiVGFmVsKLGpHjE542txoUs3X1RUqsDejLDgeNmg27xkJApVGgCdc62nU3KKpKTMb4YqVMaXzay1S72k9cdd",
  "key9": "4cjcLddKnAb5oHkjjWp47Yw7Fxj8EMfzjXMewFZtrrVc5AvmTdCCQSFrWYWjbEZ2VaifHqXRguhm1NQwmgPrnNkg",
  "key10": "beE1qTEpA5d1Gtfz7TGUx3hW7vUBAmSYE66iYKoWz7PRYK2uhwspfDEYYh4rNMG1Tw7XRH5pJhEfTXzym9WS1BF",
  "key11": "4e8cGfvrbktFL2TqHGzJUWAjsjTNCF4h4XPx55ABk3AbFPpdvfvtQghXAFYdhVszzJamj6eFMAKZY2ztpVGdzs3K",
  "key12": "4KYUn1jh42o3DJbN7tLbBUK42X9spQbpHrVitjaCknxU8EduBrYxYruYRdUXepiStV8yBgsEFkYoWmZgWwRsE23m",
  "key13": "2FXGCZVJetp3wrPkdaAbSerz6S9ZYCDXpGqFEVRtE19mq6seq3fAoARGrBvCym8jUCTkt26JbLjTta6MbGF3cVyc",
  "key14": "3UrKo9Sxt1GgwiaFJEe3vP965NtDKiMtPWHwvttnVbkJfC9aL7QEpGoA5yKHY31WvkqGv78naNmsLFmJGWuHCEST",
  "key15": "5dEjnh3bmJySdHkETGzu1YpPvQGeizMZrCTJWmAysPUhJTeERLTcrRCJNLDs7MLLtag5MYubxKAPzZJD8fwdrNNi",
  "key16": "3dzCXPNZ6LsCdAPXfdDCuqn1F6X3HfEw4c9EyM3VY2YV9YN6wABx9VBT4u7cT5jNGyLL6QwmDf2Yz4Hkh2ANAK2d",
  "key17": "4tW42QoBjKEYZjk3QySGrVobEYphRQCzJZZ2RFJhTezD3cjFZaNjrUmR6j679R7gKzWi6uLvpiDWSi6UEcTNkfHY",
  "key18": "3MVBMmkZfZDB4Uj5aGoP9gtYPsXnqZuur7FeP6DPfQuos4ZfjhvJyCij8gTMi91xGjt6PgvT81Mq7mbz9uGjYP4h",
  "key19": "3VTLR4HpXCkoezPWDk4Bcm1fNZ9kfVMBEgGggkA13Ad9XuvYqkc8JeWuJjrrhdNksyGfm1fVugDw8SNNXT9y9CTZ",
  "key20": "2H3ZWJKM2eT28fqCN5xE6iYiD3Dayz6zMJ39HtifskDHs44FUpfLz63iDxQwJi7d7Q9vrktE5KJfe5NENkkuvDhn",
  "key21": "4kJ5XnPuBsUxq1vTBuxDbAzDqYcW4apy5dEXeXLsz1T5fxGT4zUgYMP3YREKV6AGLpya56M8bGorKoQayu8TGi2E",
  "key22": "4NtU7gs5GTgs5FzZVMTUErUcKdw1Zz7RpZ3cwAxXBnmn272XfH5YksNMtgH3ysT6bW1cp7KAD9A4ptEn2jp5GqNA",
  "key23": "47GanRDCXNxqj6FVmbPquSCvxkR6yM79SiWZzWeRLnqWvPztu1MS9dEkdUYpP7KV5igtFXhYSxUTcwWdKYN66FEf",
  "key24": "ir9jLu9Cma8PGdbbn7XpC4UE2cQNNMLxznBdoWPVLXgnrNUV58ym17uGxcagKmg4MMTkmeVsX91y3aLznwn61da",
  "key25": "41Pc3Py1se9ruUVuAHT9vsT9jexQk2sjQA6TTCjN2dSqvVtivMAUJ4RvAK8mYv3WJdMnsgvNNFGFdLz8yrugfhzg",
  "key26": "3JsCxBPwkNaGDJaFhbqJbXm4Sr7fKCri5iBXnbFAcMFUvAvepGvKGgqCNspJTZgUS7Eu9DziBTmhNz9f9uq2m6Lm",
  "key27": "WNRwFWvgDWUpCJeSYSWGv9svGokHKRPhfJP9TtPzvjQX6HEAyW1SKKML6Xbx9frxJx8H6EeDWLZHCyc91DgTgjF",
  "key28": "MFQ2WZJtV1v8BFpA7uMLac9uTm2TNhjV9KKcieYz7MdebF8JGyiVgTj2XL1HqR3qwGNzkGiX2K94Qca3LZpYvSe",
  "key29": "2kjCxocCJqrv33w5tdFfEjJyi6XSA429LMoLDNM91VY8HTURu6Jqgjkq5gEiDzHoQYwUy4EynMt2ALoXzUg8S89P",
  "key30": "5BFTBiaAdHtTHXryZgVQqWJkA1xzRRw86R9NyQwttqoBmBDGXV7wFaQefHnyxWm6XnwLovYFWvTVJttpvjLLND6u",
  "key31": "wunkvH8UKkJNfCukecad73e3zqKXXqmJkotLWm4GLvMnCRrUHiQ8e36DdJrbzUcNWrNFnygB1iq5UHksiDETiMx",
  "key32": "3g8LK9fhEv3WeV9inYuHtsTytAUD1wTKW8W4fz1Uoxmep7MB9XTDpPWMdNKACLxQp6Rk52FzKmXYNCZfPeDWiX3d",
  "key33": "4iYWnugVghCPFN98xKhTvH5iLVECvT74684i7Z1tMFJWW8Av77ttdkxRLNSEDcAYeot5zS4EZDJt6YXiAWM5pEf3",
  "key34": "5BGmfscRwWy7Eh6evVgmyMj8AS1n6XT2uvf9rJcoxpsGc81dUg2HmnocKSfAmNe1V6UsoBSrPpabh8ovSRnPhvze",
  "key35": "9fjmXMiox2AmGEo7UQicZykF2LwEqetrZxr4gQwAZkT1y1mTiar8KFyqotX1APuzR1Qi8xDwKAt2ciCvaNCkrBi",
  "key36": "2P61A9LDj1W3zTGyTMQAWVaWhZ7MBniJPzx5a3KN173j52srCrPurWwHAb1PYxN4SZus4xzjeJsf3QQRyZN838Cf",
  "key37": "5UuZCGUWUh5DSwecvvz4KcyqvHVCYvHR84H6ZuPQqhLE5zpkQGfF34gWXKUDmBtXHaZ2bj5jGnNMoogyLM578FLx",
  "key38": "BHdiaN2goD5tBxfvtXqrxQQGWNVugcF535pLZ9mkJu54zYv6M1TVXBm7pUQF9ABGbPEV3hEwM49JeNQceFYd3NW",
  "key39": "4MCn1bmKiHZgRPTCu7Dz8J8qiZD1Jsgr726YxJ5ngUQN8R8hGPAK4MHLPggAWShpEHNsT2qzzXK9NL3EQeTGnzyp",
  "key40": "2nhPHtRDrXCQAcjFFyDfsVa5TBRHbbDBywTfxjRE2Lf7n1cnGbsEadgirRr3nnT5dxttYqCDtQ14M2pEwWGMhnGR",
  "key41": "4Hf5yPLRyxbDCc54iquhK4poqpxzh4MZVhW94KR5Fr9CHrfLSHsvMaADAwv4ScxtWQwUjkCz5pb6Wjdqq4ivuQ3G",
  "key42": "4HGnyTzUC5cjWRZJFcp2BhsEDJMqCL4E6BQb6zjL9CZw3ehAF3BRWtdbScqfLQNBNEowXZmHUoNp27JdH14bVfZ8"
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
