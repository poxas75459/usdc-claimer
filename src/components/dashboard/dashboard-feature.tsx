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
    "yE4gQPdDzaWQRYLhaPzT6ezH73prfrJ7VRwaKfGmEdxURzSwZHdA5rYmpc6ZCSgqpTuwvwUsq6bF8a14Z7HdcCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ysSpdtKwQtFrAgEQzpP5J3Q1vC4Q6gn5hkSHQ8NFeJ8h2rrAUiVupvSobWWtCVReNCiY3bJL8rnXqFdmAzBhehy",
  "key1": "64s9DAwr8f55yz1W13LzMhNs8wvK2uC2H4z93ZLhYB165zArPSz8toFNQkkhWdrDrzYg37ZRj3s5FitiZRYo4J2U",
  "key2": "9ZFgrmmqHTBioFWKYm1uRtNqkbkRXFMA4Q836oVkkhLG5D5oCUhPzjMSv9buoMeBApE6CSarsty8W9yYXeW55FV",
  "key3": "4CRqkGfyRDeENQPy3jBs8ng4N4zQNceihh28kxyjJvfmkyBRNBvgsNLh9q5cpeHeBfS5jZ2syhVCC71xqSxpDApn",
  "key4": "3mbejNnayBr6iHJC6eTVgEY8egLLFB1FtHAZmsfgsdWAEVFx99Qo76NUgmJRc1MsrybtvN7qTy5gyV5sXQY9xEvR",
  "key5": "ypW4pwM5NFA6J4MTERkFxJAwje1QHGpz5J1DTSvRdPa5NVC9jxqohWiCqdEaR9FikMhAcr9Ve9wGqKk6AYtFgTk",
  "key6": "2CoQwiqabKcEzS4gYfj4Mr8p4Uk58A9DuQtwhZxiXMcWD2qCujAfMfBm1XMdcnPiiYQbChrVoHCxZuMbgBDjU6Z5",
  "key7": "2nZaodrq6W59fZVtD2nu67NTsfCayeS9fZ2uxbgvXMvmpKknvApvd9LTtMYJJvH599DrhQf1xeYyjvYMNj3jGZsB",
  "key8": "64P5tyzdoEagUve6TdENMiMwfBb4xKMrjHrTehdxzeosP1nRvs9pCBSYT8ugzoRAHXqnUYUq8CVeKYz5BspEABa",
  "key9": "iv2SVaF1yEWs5Vyc6enWk3BoJhTERkFPnwyZZrsxbABFNERxMuywYUBwzfifYwuosjX5LedgFDMuYhJMPy2M2F1",
  "key10": "41KrJChue7rQHLx8BYUeNVrgJnbzkigRArTe2LAA3YjN2BfkaEGfif8krX8NjxN3ub9euGGjPQBjbdeJ61W42eAP",
  "key11": "3KcGNV4yw7nPZp7DeCsaaftZzt2ZuFtSvQETiPYhP5XgVyp8AorvtA5opjKMufpiikmnQaAQ7Ua9WzcimCrFvPcZ",
  "key12": "5hfywPhs1N1hrpa2c9rETnAxNpvZsAzwGqpb5cxGmKi8iB2JfFQVrkbXsfamzwu6rQ9tNn7n38ATFhzteA8JKPu7",
  "key13": "4811Gou4m7ntmfdzXUzhJvBM8p8L5sgY23BoF6U2ggse9X2QRHYEjgy68AVKNuQYJqedtCn3pTfVFs3f18pMUxK3",
  "key14": "3DbWDHRfGhCKTbeNRtyePTWEXW7eo3XWeLhHpEEvrc9wcL6Xdv2gvDjP8YCUdnJG9Wj8nkwAicRLmGLQUPGJrrAN",
  "key15": "3EkUPbxXLc8Wvbj4mZTQ8CaTEBHHmthmH5HNQpwWG2Ltoj4Cyb2oV7FMPrpEfG6zurkKM5vii2XVZGZb6JoXjjD2",
  "key16": "3umTjiLdRFEFB9CgCHjLd3MDFYdN4ZLNXSA2w1CCEzXzbeXwFgvGCdNhgZZsBquLiByjCZzk9NhHJ7ZdxzFbbyyr",
  "key17": "4dWC8ugRVsacSuy4z5hgNWLiJdKebfsXwYXRGrH1Amtr8c6ootQaLEzah2RtQaMgKxDLcsGfKgd3TXTPhEeuicB5",
  "key18": "5isVLPNhiXeZJaJyWx4ju2Zt6QgxzJY1mGH51SAPeqx7cwYKsw9giSD6SVqZcUFWspHWkzSqUt9cXKngF3EXwp1G",
  "key19": "4NmCfTgJLqrFfyi5AMSCypP7eCTLvZPfKXKegB5vW2c8yLJNFNiDHwDfuwHth5yGEEVJeNjmRRBNggFaSKBUcHx5",
  "key20": "38A8yidTwjDbc8G9wWfsNT7hgUdiaM4JsFkJTGXpVJzxMq1TyeCSt2jkHczD2gKMsHrrdzR37JUsaCCe6Dom2Pis",
  "key21": "3QDBDeqUhMbrn5X6Sva6oc4mseBioJCE1uTfzP6r1GpNXuN2DYeYMQtjPkQEJ6qPJoGDq5J1Rp1Xj9w4kV1bgCF",
  "key22": "5Ze2teEt3LppiZU3Kq4r9CdYxdmg1PvYD7M4RmZiQz2YR3mUSxmsfF5icL9m7xtmNvH2JMi9mdpURyvzoJb9p716",
  "key23": "5kkNsNKFZmN378PRYMPWjXmheakkGafeeHqQJJvi63AMKesajRoNBuzJW7GLja6waBb4sUD6ziJ7SpKvNCti53zv",
  "key24": "52MWNifWUQWJ2f4Sbw1GjKf7FR42xECUZxP3B6U71wxXph6uMuzQJwBYckVo5YENH33mHeW799zX3mEeLedQij6V",
  "key25": "3YN3bKf5gjBgcs9XGCgWtSAfJ3kbEVP9cxz6dQoazawDk1M1yMGxKME4KA917nUPv1Z5FKCyztP9bhZ4A65NcRjP",
  "key26": "44Jfwne1VFRAkxg5KWvAicrvDXsSMGSB19QdkicwMdM9opnTB2fpfsaJnRnNwmJ9iiGiCn9CpDTaoxH7ki1V2DKK",
  "key27": "4GBrHwwcMjDEvphFT4pNjMXcg6BLdTSNeudnkbsGvXcZauyvgbUjbv97mS7ibAJLYWj2jxUStufhAJTLSxjbSDWY",
  "key28": "31Yyd3QfK9GF1KiabkUdx6uGPpDGuz7F3nUo89CvS7irV6cUUoJpTbzNEpacs2R373QEKVcWBfx19ak3nWjS68vu",
  "key29": "2qrWzAnf8kVUapJisvFvWHk44hhPeZu8RpEL3NQvafDLwhfCfGWA8Faf7n7TdFu8HzzvbRECkPVBuZU5fsCbwUgy",
  "key30": "3ECM6juDPVEnhk7DnfBCLnPmyqQkSSUbAF9D6UvVrNWEfJbfYdTNqXZgSzSK2oWEyNUhaoHrQcJGXxt7E8vd1mT4",
  "key31": "HXQeYyKQ4PswcqWHD2WgDzsJPjc8XvcNAhVLsZFiN7cxqCV5wRFCy7bKw7DoWDcjYo6Jm3U7F3xr451MLY9TgkD",
  "key32": "2SuhPKVM2WyU6zaFShCTip3KaRnxbAYy8g7Gmp1DK135LEkr6K8yhhcmbbRBAAFj5bJnxoVNwiN8UZFXWF7UDfyX"
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
