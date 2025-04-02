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
    "487GX8bHCpSRmXDRcyozsfoCEUk7tEGvoLjEPgjUj36BjBcZK55yhbvdie2Zq65STDPPL3WdhFMxKbNu99kjV3XV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDMEzH9kzVN2aTebGgFanviEHNaNzRd6B2QY7s1YuDasQUjB5NC1oVYaFnVkVxSTD3nNYhD3YKqzyb62h2dMTW5",
  "key1": "ezWSAUtdqMjnMup3c56UsqFn96PrMpSxxUQTDt2VwrdhdB2u5tsErUHHVwntmBEYovmgkeYuwSeZRahFDLNgRU2",
  "key2": "2Fw3ovooer4Jc5Mg7W6kR8g3wPiBetmiZ3Mv3euHffa3okB8ckcWhv6RYwEEaAPYKaV2fyo5tCRRpQMzHcr7hR49",
  "key3": "4Bbje9zeBANwpe6dsraLpxCu1ox6i5SXfemrZTELrccNhht4NzU5N8JmWutyPguaWo5dK42TSGXk2bQ8yQ1jYwW3",
  "key4": "5ZYsgBKEPGCXsr87KY44J3KsgRwNaH1pRonJxQqGHtLL661xWdsBsmYvFsnnxR5Q78pfmpN9tejwTdtChFY4DGwE",
  "key5": "61rsRvzdXpvFXBWzvvBmmXDVCdhtdNDXQaZswxERKoZjBRuAx64qfxJxb4pzDBFjBfYwXppbW9yM8CatxKT2YdDY",
  "key6": "4kWW1m7YXux2sTA2MSEjCRNkWW7o5yciHnxaiAnGKJi3upKszvgJT2pHsNRfDtyf5r5E3WfjcbtnCSh1hnAUZ5jd",
  "key7": "4h1ZVbQTsDtxpxrbRsz66RWMNr3uDUzA2ozbUdv1dpDn8AK3D5J1UMubPVHsa9xuCmz1v7G8Gkxj2YwREwHH8XBc",
  "key8": "52SAn633792XiWWJRrvP1aWLPNMFDTwWnqUmFV8khcnBb8LB2xCBeNsyRwrYRGjPpyaNtUdjKeY9XTbNwbvmZy4c",
  "key9": "4GxgC7usvb655bWiFDiQg2pkJGAbERsuRQmiw44ELbiLY4dAhQeoiXNccwip1Nxzgjq4vtiUWEWrJtTWcMQz3rkU",
  "key10": "2P5zVmTMwUPEhHesPoABBUvUZmks6JMggKyV9umJATdbKrWxVqNPzvkgE9JBrGe3mF9fRqXfr49bRfyd2i2ZPt7A",
  "key11": "4D2sGkciwrtr5ZQ53insxAg9hadbCW7rkjKiMfm6P5VjpS8XNqmnJAzBqbEwF6vnyBMb4igjWdPvD2dvWM1vNDfJ",
  "key12": "2kjV2weK1cRPhfoSRmytWPwgyNWUQihj2xPevQcuBTsycS2FAbCkyxHGYabY7v3g4pLMGL3o4a4xZqY1gqKAdRD8",
  "key13": "3yGKVmTMWGgYSsRCgKuqvNLaEkRTeRLuZSDKYiM719dLCcKAYGPj8mF9RiHEhycEQMsoHecrtWg17E2E9QgW27qL",
  "key14": "42S3QrjzF4MPhGHGSfXow1FfPYVBJVQz48dynR3ShfJwxUnNnhwdqgzoKWsX7wWEbF91AJttYMxv7wdA49H77kip",
  "key15": "47XM6saW9Jf2e9BTqougRugYVfcHPfvmNj9uh5dSJ1yqMZ4qr4Aycx4JdcHfBxFsUFMishP92jdFiyL24YsyVPiZ",
  "key16": "5ueKq7dNat1Jv5SUmNsmvkFgoU1Kc246WxCDWvmcVcc8JwL1UE22RPchpimyTHn8gztozg7353r1T9gUVWy8MUVa",
  "key17": "41vkFp3n9VqmQJptoffES6hVHZNByY4oX112sE3iyZLTkvK8QzJLjj7REBAoqKT8j5EmbkdQLyoyHdvCS3ovD1pS",
  "key18": "4uNBrhHcSaYCXa6QDyPviojPG6sQb7scEnWUtfCWHQUo1JmsmUiJ648pa6MxmwA26SqDupjQaTCD6cSGbAnKDiJs",
  "key19": "5uwmts2mCY231qEtikrcTwogKQv8JMsj9WkHwyJhDWP2Hqwdv5am5MShCH96Fz5xyPUUJ5PXsMDKqamHaVvXo74f",
  "key20": "3UkXVPJvZQ2nb1Ti2EKZ6CYkG7EskW6JkbSLhwt8MbeXvyfgEfhS82nM8twXKuTRxDcUCJ2q5Qa3jQC5CskpZz7u",
  "key21": "SkGeAr6pYUbjgi9y3s7RN4gSCd7fqhqpgHcdjFjLWRtQUx583e4peEtkrFE15fJGzUXr6MsPSgNQVCHDKTgi1Y4",
  "key22": "4ivbhzSK5gR8nXq7feFyYcrttqQ4hUkQs7wMmDJwMF3FkTLKR9Q5JawyXyRHdHq4oST5hZLD2J8pUsCPHuJFtzT1",
  "key23": "xfskuaqtcaC9ScytAVzzjictxb1JW5ToMvsMyHpfPeX6QyvUp7pWnPe2WihLt2rKBDJJdfeSkdTS8vxBP68fxKm",
  "key24": "3f4rtdB61pEDJNsHJTh8DJVCh62Jvqnah4PhyWUfpx7aok4vsA8kdRbqgdeeYb7gbdxCcqMuRerm3YMKSXpMw9as"
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
