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
    "DdoMX7P86GFRCWiqJYWHF2Y6KaowUFxPjJ8Fyr6wX1qL292hgXJgZkKM4auzsW2cBAXM8u7Yt2wBtf25Q6GYrwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bzmXEsHg67yTSEzskFv3KoVHPrEYGJV1uunJWmGkNb9vip1wDu3ztpdpHfhScTxt6kXfbTLhSguLmeR2x35aBTn",
  "key1": "3dQfaGApto9KQ1SFV9wsr8XpznkrECVxR1d8qpTADUitpmJyErkkY87WcpEkkWFj9o5WEsPcrBKasMazjitSs7NQ",
  "key2": "4SmpBd7P27kcA2Ht4DB5QNh5hDvzYb6AYwYeT4RFw8svFvTyiTAar5JbDQDyxkdZ7fgCqQsRniCn9W4WwCqmzZJj",
  "key3": "MWzNcEzFJ9V3AejbSHv39DmhYYEHDMTTdkuBweNFftjJvEW3GBZBKadeK11Mzk7EncvVyisxddmM8wNoPLz9ijW",
  "key4": "3yfabRmPCuZ45w6D8XsQbWVVQinc8yhuYPtDNy9gULtdLEnHGZsBEE5VepMBXQMEjJGCzV3JPPYGvYBNiL2PJikz",
  "key5": "4wntJ74GhDV6dqzpTJvLBkDxoocJifVj9NA9RGh9TaGNV5udvhvFTqkzRdxqq9vvNVhBdqhYFcuLTyvQzUkYindN",
  "key6": "2N9khzMPzh8QUvScrXFtBbY7FACk8T3PFZ3Pk8qEtmMvy4RqHa6VzwhtpFzgh8jR772hozwcCtW27PnRwCjEgioA",
  "key7": "2BDkCkXCoRpNTF6CBEbeCFDp1wuEDu5pgN92VHpjFgFykeRTKkc792fv6UQo1s5e1JsmXNQWsQ5FVZZavFiqs3W1",
  "key8": "uxePc13P2waYpNDNLnWkUsXUeigNdEDciYx57FDvLeV6mZ2mV5CiHsEK24W2TpZ7i38YK7xootyKXzw8gx1UBZc",
  "key9": "3CXnUM8j131CdRwvXLLB1zqSmF1QofWss3QFbram8gLVaZB2pNeyW9JsrRN4wsUPDhPf2pcxZdYbY8HtnE5o6gA2",
  "key10": "8e3Mag4GxkaXXRTqskbXb4Nti8d7ZTtdU5WrQ1VWqyG7gqFwkjjTjU29pwEdPxcQRTsZPXdvgAJYHFztd51fGSn",
  "key11": "5dVcNqksxtEBnLhLw2Rjdhh44u5PY4HxDnT9qSfijYuVtDZ8VMV39inaekoicQ37R1onvsm6Ds9KohVAgBjvumk4",
  "key12": "2MR5krPJd72k6df3o6dyoCT3NoWq51Dss4reCLyuq1D55LNxX6DWboxJCTqG2JZz947HXK4SjAmD2idgQm1UbdH5",
  "key13": "3bGTpBSWVhHzydH5VFBG8RCZxqkCHWLZ1ZR2Q9Y8C3uAuetVoCnGDjVBmms1yAVdrYhxbcJFK41Y46QNRDjusYtA",
  "key14": "445KHNAnBw1M2eTxo5U5vchZNXwqzHQZsUPLut9d6MmQqTkHvnm72GNNfpQZ2ui5xiD5Fv5mj6Wb6y3PFLv8wRKF",
  "key15": "3CsVjPvA36YM5agZbLpzEgR3kAyUg4Y1kCKmLg4cYBNiWQ9cyqEAyJtCMijw3b2V6TX94SGwfRT1kMChEwvmCuHA",
  "key16": "E8EwJ6rA95U7iiBVWHkYUYoHC32HPNDzGChzLadCMGZmjfnGjmXdPZjSaNLRSHwYJpitr6gCXwDfTsHcUvmczh1",
  "key17": "3NsJEDZqKnKm6UJzBVMcY61yYYRNy7Y4Kq6jqMvnqWQqYZWWRzkW7r3LzjQz5PCPjGkgMN5h2HC1yhbJAbdMdZMA",
  "key18": "KAeKGE1pTZHZgT3Yi83aQ4BkvK4qiAStbgL8RA8uehVhLzmmMf88mrfbEsUyvSVzdR8TKge2ypFMr7Xmg26bhBN",
  "key19": "3rZr8eoS2jkqgJhY9pEeWcT19b5FgZ4z6ENJMet5gHZc5hqvfVUZ2ReM1WXd6zDjqNVL9DbkxoGfpGRgHt8exJtF",
  "key20": "5ayHJLm54MccTWndVkQaLaCE8DD6kpKxbnpFVLMjP2JZTzU5b9mNLCsfWRiF7TWyWszvHdvge5JQ4uyFVufjfYxb",
  "key21": "1ifwNSFbpckwYMuFvu5Neps1fqJuh9ifRbAwRrePRCtNDAFbep54hkKNAYiuA636H9AmjJD1D8kufar8VUPSWQi",
  "key22": "2Um5k8mKCr5ojEpRskDwWdZDtwNMXofqEonCUZWJSuEUqHoT5sXU3kYcH7GQQDzLwUJNLyw85NbqJYq8knFQvsR2",
  "key23": "2ZUbey9P9fnoEAeheSYRpcUcUvpsM6cshADNF6tZBf8tjytFkdF8BVCjyS6fQbPyo4UzJxjXs2z7baZdRioXtvt6",
  "key24": "43hyM2TFP5Cj5id4QbvSksXyW9hfMfL7pzKBGF4LKNhyKTJnYGH7xbjiZ8cs6ukL9364JPpv6n2cK8kyDUKYfGB",
  "key25": "4fuJmFKyeA9tAGeopSmG7DRv2AAeXm52wkvTXS9CQhFrmwPw4XL9FFWfhLsKKmzd4om61So2tAKRJxMe2QHr7LPC",
  "key26": "4xj4fxwbaD4YDDsAB4GXAQhAxunrdNjrrSncS7SxKKmUuPvyUFsNWtwTXxGBuo5iuBM22kYFMgftGC1vycnkLfUC",
  "key27": "4taWVmKdtrCT2EnLsUmLyc7Q7qqcwpJfsz2NQeqiLd3j4bE2mQ8tAyS92P4rdPmx7vGzwnTpYm6nuNxeqALQC2qm",
  "key28": "3bysndJHruRaG642Fm2eFQhNckudycwFmBjNwT4tKAdzm8AftimqnCbew1aS3ty8GkBCzbS19ynLNPSthTdZPHzQ",
  "key29": "4AqAQuDXC7X9nyeTg8UobwpubqMeTRY5CoSCNcgguvMUdKRgqDAAGUzALPZrR7jMLfffakX7QF76y86PpfMw1KTw",
  "key30": "yfd6WEvtnWEuarS4w2hT4bYshkZCVBRo2mnEaxLcmUfvAJAwSTL6CDa74eTSCJQ6BcwrxeTJzsysVwiqYkKsQ29",
  "key31": "43d5RUqEgf7PSDMvW525kHS3UW4Nc4g9XpSt13kcs7AdoVuPZa8EMdH7izbxqaWyoFszBh4i7V2ozfEzi4dsBxcF",
  "key32": "2a2sTZcgXPSLorrhT7oEpStN7WY8qHEjzjJ1KjVXWvK7sqZabvcQcPLrjhYYLqH1EzmFyMBpTdt2AzTTftM6X7W8",
  "key33": "2MXX6tscrMFwuJJyeRVdqZfhcq4vBPfWwApuEWzcCBMfBgaPgFNRtTnzWZ6xESDd2UpMp7jxzfqRfnW8cBU5Uamw",
  "key34": "j9VMTfKoecLsu8QFTMUL5q4DK1h8REJ7t4Tk2SSqVLGRtDJMGZyQ6CiZ8u7CyDqMwx29muzSNTqg2YzSq9skvz4",
  "key35": "5Lf8dfkS83tNrWXzjkT8Eg9buEQLruFSguK5PkkzG4QbuNP4nuvN59JZZPsF8RCqcBkHAsKe1g7QeWW156WM9C3u"
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
