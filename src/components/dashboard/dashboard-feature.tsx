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
    "5Hrqa9973W5pLE8421wJsYa9ZUjX9siMT6vvEmFWPV9zifoFY7VDis4pShUHbdesK6m5UV17Z2pUa54BHouaZqZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JiECxQoe2BhmLsJ6sizsVnCoTNvHw431oihJxT7vCfqfg9taCxBw4XWBbQz4dXj1MpmkzYoeaB3oq7Der6NeLQ",
  "key1": "5bLGV3HSd28CWiDRxCtDKoTKQGHHvQ1AeXSGNRqjH4QNsLL1VdYEV5FYURzc7WqSjF6ho3QWhCH7zRGS7zmusHWD",
  "key2": "3Cc4ifNK2KRqAGT5ojU6kp2hD2EbALTM5UwzgJPygfPJnRTTX2B2MV82xDHSg89rhRvTvofR3f6wE2W9D9ku8saW",
  "key3": "2utEzVvZuauhzYayJByiNbfkTcaAG6GBqqvcWUvzCgRfnVsaoH7RpFHp8KvbTQ2TYMHKE1nUWTuLAx3wP74BVV1W",
  "key4": "38D3o1B2CASoaHiQGkLvtGYeQ7tjaCeqhieUPiZDhwWCN8YCLkeA5ESjtcYtLVtNHMC2Nyxw8pyUSEgdasW2QHVe",
  "key5": "FRb1JToGcpUCkkMgWza62hxLU9wNfjbYg91peX6nFchuo2GYVjPWnPHp8p5gcReCW7zeL7frPSygkR75dcAejGT",
  "key6": "4na3yMQc62CbTafrxuboZTRLcwPQV94mUxVMJvogMStyqUV65jQqffqKrX8MqnccWeWUkmmqWFKe6N9WxP7PWoA5",
  "key7": "iHyDuqk6BdPssDAknGJZzMu6tYpUAzabVdV3H2RGFgMrWeDeUzPBRj6bsv9mS31GmXS1SxrMchU9ohZWnBA82yf",
  "key8": "gnm5PrVFf5yUB92E9ZNEJsk9Jjp8BUXsd9AAEEAkh1rWXd88jNt7hzXjmWcohLbgjCHstvJjtbpEhFRrL7evB1E",
  "key9": "4wHSCSaVV925W42ysru4JkfNjV1NRb9mGGVpMJC6uPYUNJ1fv3Lz3sjrTvmEKgrVwDuJAa8mhRVAhqeTpy1r1Fdt",
  "key10": "4gz38JzgAto4JwSNYFAw5u13VNgFhapQemyyf9tByScuKvYmhsSsGGMDracW24XmDia96JKbi73bZE3q6WRAmjBQ",
  "key11": "3bkukBXzy5m995U57VPwT3adUQ4eJNuPcgCG1UtmpDi57RENkt5bPLUbYAtDbvJiG4Pe35XUFU1YJRfypNbnK5aN",
  "key12": "5NcPXPJAN7NfosBXn8d5SqvNksrBh642fbB5wuofk436B6632EoJtFK3AWy2pkMrVEU7q8eVQggeNGLmraZ5hwQY",
  "key13": "SbEVQ1KDa5BT8t4zS9tg2n3BK2uEMXrpQY17oWTfW97uK1CUXBqKAb6kbHcSe2oNzjkBb7Skf5SgcJGkC9DX8bZ",
  "key14": "3zSUGhbAJtYHtB2pRCxTRLeuED6bXSbKGAdUSgW6AnNPE2pWycUdgcgJXF9JUFQmnjLHKkGEXENvmuAaVXZPZc1Z",
  "key15": "5tked8BCw3vx66iiXkAtTBYrjkm7YwA7LCzdQuBdHBM9kmU4BXd2s4SxxtjTdJWQduvnsP739MdTse6ZWEXxgKg8",
  "key16": "ZcrisrQkLFL4L8KxVSgdiV1Ft7VnoPntUe4tv5FGkKaLKQAC6JHArd9KZmLH7VZzDR5YnPZ3oSiuRJQctUVoKaR",
  "key17": "4eSVR2UdeBFzV4iQRhqbvY5GTNU5xvfrvF7y5Vik7mYSCuWg4G7StauHt4WV4jafJn1rDonijy4FCNgpjiPVG6sE",
  "key18": "gtamfTsVXGQVDaYLy4dZwzqAFy7Cwamf935J7BBDcyETrtVbkh9rRf8njSRUU1Y8pg93rKRQRDH8uVNEi8q62s9",
  "key19": "3kDsvsVDrVa9ut9PCKYMhD9rMsWuZjr7wVXkTZ5duVpGVmFNCvbwiwQVNvsaNV4CkZZmJ16ekyBjrTFYj4DKKLQq",
  "key20": "4dGZ9JBy3YGhsAsahNkrMPV4uPH7HojcnHkzc3fUL8oQFDBCj54EoZfHWCB9yQ5j8ugNAntjH4fLJW9YHEyw6HF9",
  "key21": "3xFNwiYYEH8ztxnJKT2jeAqZRCKkoXs8tAuzdbzFqUoCJGicnE4umimMFqty8uJSq9DKDGUjsgAKr3PGmtYs2dUq",
  "key22": "dxDkqcU9TbFXC8DMrfhErpvodGkec4LWGqQ1hmXBLPSvdgQvS4a1tsWErGEVYbkCDzzbQqkBsHDhByQtFCeaDrs",
  "key23": "2fdryEisr6ge4RYU9cV1U3SMdz1AR8UptZ22AJJ2Nrsw7n7qdZptWYzLkJSDcTLxgZRB9b1XYVviHCx1HucAb3Hi",
  "key24": "2pSdMNseTKwxj96NBeQdJfJbdQBeWcycAS4zrSk5ZrZ5S6ovgqRsWqcB3qS2wmJ54htcgZ3stWzzoFNj29CYudEP",
  "key25": "S4jAkK5JoSVtWgYBYsqQ1BN8apheSFQQDd6d2W9zWvZtmZAm534HFDXso8ALuffzfQfZdbp1GGoWL7fLdp4dp2x",
  "key26": "2YXdXdjvNJCmed3BqpgUiNH9hjpH9mo9gbFyqdRbpFsn9UwnF1cqy9BbajRZRFwUVBLPAoh2yo8SbAfXXLBtXeUq",
  "key27": "21ZiZk9nhNXMBhCK7bK3JygFRPZw8HdEf2Nhp5o3RCvUoXKpqj56MDktBYajfPLw7NZmEZJx6zNQfAWF55W3gTVC",
  "key28": "pywWcPNXU53TmRaVMXRTtqhEW3uQGETcM1aFdUBDkePofZM2B3KYnMBDTYKpSNayKryH6LefSNkih6PxqnqB8cg",
  "key29": "5HhqBRVbSqEyMvtV2VRazRQR84N91ANrEJeGZ7hojDJkE22K9RUcY6YS2fW6cNQxkFDmcrkfK3Wuk7WMR5UcvHnQ",
  "key30": "5Kb5mDoCUH5iBiB7jyaTXrnEyPrcQ9Ss7jTc5hGowAhbSqHJ6JfZWizQrwsjY2RvJkQeeTUXaGRGjAyAtEh2QJtd",
  "key31": "4P5d7WLbEtEcGXKoTmG5ciGK1NvjykMYVasVJ1jaDCzjcndfVe7rAh4xHF3wG6V28H6JXiRCENWoPSNnBwUgCgPn",
  "key32": "2SRYnwRMrSUimCoVfD9aZFvCWynHcdt2nNot7ujEw5NSVnH247SagQTYsih5J4D7oXSfPfio9KpGYKjj3KXRu3Ye",
  "key33": "44GFaEub9D8NcLkshU3jocDfgMQrXCmYMmeMviDB11jAMXEc3W6WA4KDPbgDoNafafj8efEWz6k2XPGvnhfEtfts",
  "key34": "2h3te3qxWGwzGKFEVAxbfdy9txcYEju1nLVQ4sjS2mR6FoEoL2Was4piJt3WXSZ9oa8PsQWApgKbgmNWT6pmNWpA",
  "key35": "3Gz4zMHNKYe22khsetFnuqBYbF2DhPga2qdgdC67m8sw42KdDKwCuaCnhVMGM5MrFNdKALE76eZqzX2RX5tV7Aqg",
  "key36": "4KCucwdQH9FTaU3wkYrRKZL4XjMeUr3u3XvZBDy6Jwg83n4TwaY3WnwuQiCmBi639QfuWhFH7RbgENBNe11H6dkk",
  "key37": "32NT2SWHp5sNKxvcVjghHSbDj2Ms14UxmV5sx339kiCc3JQnorKpcAGi3suisAF7pM1sizsC9QkWe2cJvMu425sS",
  "key38": "4Rm36jRTSUJ73A7m5noLzCfVmiDdzAYC8pSRVGEZgnpcE8wTpWwinbUc7NJYjbc4TeZhbuzdxKC91brBBXZLDk91",
  "key39": "3aEkdwmi9z6tskJtut6yhK2ZupeYUCaCuQG4vHzgx7RFbP2gBH9BZVVaGTadPexBxvzGEZsjKKZbP6pfQ2sS4UH5",
  "key40": "2XpKJWckpn5UBKStyeaeHnQFZzDhLr4yT4ABJP9MYyBaEB9LVkZYGvSfkQ3fWxq2wJdfDNja3iG4xXdBLW2ab8ax",
  "key41": "3NWuYUdfurfAqBJa5o9H5VsGaDhKV7Pp4cAJtrJLC4JRzNSrVvqnreFDxc8pNMDRJJzvyCDyE8Y6y9SFCmFJpVYB"
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
