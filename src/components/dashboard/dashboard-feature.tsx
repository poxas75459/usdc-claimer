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
    "46cD8tEz4AJESrBV7DUpmbtzPQ64qaME1J9BpT41Tes3Qgpquj8Xgu45zrDneJHfb3RE9eDNhPHppDhpHe979vWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kifLDNBV3CXwt1tWaQfeYLzzVycEyRBmVg96wvb96iYiAzyQo3UhhAi6FXs5JFriWBQ8yY6jdCc78WpuReo1zVk",
  "key1": "WE2Ai7JfK5orFw9q3CyhfAHeqAsKiy39PEN6nQwvyMdjdhKs6FBBUq6bj4fznqhRgBQ4wS4jA8CuEihjbPLmgKD",
  "key2": "4cHLmcd3Q5cNVmR7ww1SeDRE2sxFbTsFngpPaagfxaQyAwkNYYLuC1XTNjfNuJXJgW2kwqz43jCvqwbDjP6pnckx",
  "key3": "3YB3q2bUjTfajJg7zjMYf9U8YvZ8m3seNVnDewHEg6s1GqU2VkaXKrugoeV3yAWaTA7qnGotx4CCxBWdxG21qP6r",
  "key4": "4YFb6ASpdd21b92PfRnDVAWeXPFNeAycYgLwXbDGXBoLLRs7ShKor8r7qrE3Hfh4k1WgwtYNqCmpNKiNVRuNMCMP",
  "key5": "kdegurJKSmrKmP8x8thDifEvpynHdDiJbBjVPwnpzAkbBhq66QFiEE5ayNg66Da1k2GygCCQui8ZKT7wPSGfsn5",
  "key6": "2tBS2qJZVHU4W5VRXdEs8hAmf6qdyPxYHhHc1KhjPrX1UX4YB88Pt482UnbnvrgorTV9cYp3g4hoqRrvG1MEYvZY",
  "key7": "61YBpqA5bP7Zwa6wmB3fA86vWnMyUJAZdaa2N434umCbHxFqfXTucM7d2U5obSiBKKW3CsdJNxU3Ex8WeLX2L3E7",
  "key8": "3kKdU9DxzM4ytETWL58YPSfU2wuSxkWMsMG62mGtpQ55NpzscwjetkcT689MXELBwdnYhsvJTkJ3HDTjMV3qTigU",
  "key9": "FvpER1qXCgVmRo7ei3bKaDEcLnuZkd1wWJJzJo2wdtRPWpjL1ErmMXSoMpCihGd1o7Pwb2Y4TyYhEUpQA29x3Cn",
  "key10": "adBB2VUPcUVVDVcsDtw6oDNVhhzYf5wp82oBYbU6piGftvMLFTiUeKa2pbfMCLEj7gzvPnivSVgSVEYWZjwAs9m",
  "key11": "gKnsAt17oeeLwSPoDneuUkTXSrpypETLfRNwMcwW41in7fVMi9e3Qm8ZPooV7EErUW82h1CQ2BRf7xnfhkwrki3",
  "key12": "5sDHQ7zrSJa5DJ8LG7bqudAcUmh13ez2zGjrXM5tmFNZTioKSpbRqnxNYKq4mem4TTijxw8AkzGYw1tkaoqVZ2Xo",
  "key13": "5N4siMWZ3rpdW6LcAZ5K1sNzJpYGFziR5cgywaBCiuPzFsdN23R4E3xghLvEdZMthdxKaxX1parHKHuoYogSNSGy",
  "key14": "5GRaSAv6nNvptEUnoTRMj1cbUxVf4yzV2QBrNbLpcCKVqixZSGsEbwjM8XH3ioSeUqghYXXzWiieqQBuR8EQPiLv",
  "key15": "EHkqBg3ErWUAu5KmJNnJ9SJgZ4Bc5DC5Y8tGYb6Mu1Twu7tByLZEmTTQAj2wVNW9Eg1T1MLcS7464w8WFi8qrCH",
  "key16": "27hZS5LbNiKUGUBG73tH82aDfq1JwcBm3Y76voG7wuhkeDCdVbzkoJvuRC3mfenGwmUFoGAr5z9zdtfbT8mrj2hW",
  "key17": "s1wFrfcXg7xedi7gWik4uvoPZr5ro5eWcDmtWXSSYVfXm7UTeKtQQVxdSt6XwTq3xA5WDYT2uUEoVzgKj8qXRMR",
  "key18": "552dWjydnZbmFwfiCrxeeBZHHLSyERkkUn2NYF32HUUh8uiaCTNPts41Edkk4XSj8fFXctkvM8feeWBxZSAk3mUL",
  "key19": "2Y4yo7N6JCXm85aHLErbkZL8qqoGw8RoBX997kmcDyQAYS8aaWVpyCYTWTnN8fcu1dv9kyRRMUNfQqvhthkehmXi",
  "key20": "5W6VES8mkRUwygzHXdtfrPt8VWrSy5T33Q9rfwrkWBqggf4ednPNPpnnGd1cbCLSPwZqAFNBNiTiRfKNJBJGdihv",
  "key21": "5vVT4aCYfLcvqksz1jRtqNqMHr8CDbQrK9JpifrQi1T5DGvzGkZ5HySyezxHkkuaof15338aBByS3DzevudDLx7A",
  "key22": "5CXNGouW7Jt7NG1Kn9Rn3enrdjcsSUiwoFkmZJve5Xc2SmFgXT9Tyg9enU5ZYQPxH7zjWoP8KBSdDSDZ1zQzRmRC",
  "key23": "2B9gzvm4ofBYhkXunUCBsa6ifT386ecFKYYbEsVstyioaaN1bYR9JUvAWht7svFj2goNf6ZpHCKfksYAUcsrmxyp",
  "key24": "4v6UJhMy3mdHD6HtWZq6hrpjfPRShwhkxZKmoUuCpyzbokeFZRFYYyR1mdCWu6b8x9XkibuKuXqJMXAT1V6imvwJ",
  "key25": "5PNooXnK55D2Fkfv2a4KAfk8CDGx3K5B6QweX1QZneCQbx5u26cvkTovSGowttG4K45TNf37GPKzBzYNcekUKzGW",
  "key26": "uspi9WU4XWzBvKa4mLctxGguciEJyQuNUs6qSjvaHkGg4T4bz9ZfNDe1maG4U2PDTPyBWvoRSNjTMWBWsQfScnh",
  "key27": "4fuAjUVRoSJroT69QuVmoGosC7B5rbKmjYaqENqjuiimVcNaMizcGrSRhuHPBaXFkK8ee7iwnZKFYZrzqpmKB2si",
  "key28": "JVUos2TaWT26U1nU9f13x8E5ZDWVUDKeektMnfaSZ1PysFwHB7JSAzBBb1hx55o3cfYg9V3kwcnRexXj6LSiUJC",
  "key29": "5q2yfC7kbKBhZtAyiXoff1f8HUbKduYwnLcqJzMqPcnX4EM8xjpk9us5hf9cpMo3vZYCfWnBgfCFPa262MYcuR7Y",
  "key30": "2ke5SteDDuEwFvSS5TmTNoRr7QTK3SMLm872mWZM1xWiHMCudFjSDjJVBoS4FgRx5ZbrY796EN3DqUowuCdkFRZw"
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
