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
    "3uGtKKEVa1N9mtxeytHjh72fskSZtjvyFVQJoHS1WQpP6F9SYoTzTz4HCKGxN57vHiayRCGXhhLTdJi75y3Tt9mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ui2DxKXa5mgjzgjeCusV5VLjjhAQRVJwX9R8jUxxBmsVd97GqKhsaXJ9quVxr3ngArYEM1RL5YGk5xrzeFT5GNm",
  "key1": "3LWk9hvxjtPJSvE3hmfELaKbBnMwmj7Ufejs55XSfErvzzLuRym6w7gJu4GcRMjimGQDTpFeR3yaSDKmobeVsrov",
  "key2": "3xjcaDhnPLPWxHSScGZsZC1H7Q7kimCwqiGkAXa4BUxwqyXsbM3CTM8Sni38wrF8zWiLYZWvQe59D2KHB2Cnhgc1",
  "key3": "SVoEowW5q23wGx4gGXWWKPbj9Za4jnngvNs5ZB5uFpt6Y85PS4JNChTmHkfHrDN6g3h4ZNAg1LSnaVXotzXazk1",
  "key4": "XeDMfwj2NkSxpE7vBixoCm77ZxFuQtthbY1AZQhYkFgvh52CSJz4x1YSitvzGB1VUBSyXcCnwQQCDx9HijbcmGP",
  "key5": "yQgNDJVVPwfC7bsDcqAHWdYhSMqGEXU9ijMK9UB6LsCLqhjXv3bxdHwEHzdvM2H1XFwScFKLNFJtAzB7kvo7EJ1",
  "key6": "36BvRhgvTnba6vurUH2dgspFqzBFGy8MwMtXLVuLxj42pTLQCpkPr3EVpUeAs6Rp8JVeh9oHvUGBHz6ZiMdV7563",
  "key7": "5VdaLGaoi8nPf8j7x6vtiZqtJMHT4Xr2TPQcDaumiBhRRTmGZtcDJ7njpV7NKimXjY3AuonWsMH7oHZbUAsuaSJR",
  "key8": "5uiUAsKfYoc26PY6WSshuXqq8RtYP5bDiR7Ch9eBbq1tpUhoQDrdWZ668YPRR6ih4qEFNrzmJgtuByYUstSNQP7h",
  "key9": "32CXtwNEhWipFgLMELJRzxu7d5GU5PxeyvEY8ExsFtc3wZVwR5QgwZeoJcUs43Kf7k7PXq2aci23YX8vmLBbK9Y1",
  "key10": "3gTGiYoBsWWndawSxa3uLUsJfQZCu8ftfgZChXNUw749XtdNRJ6EWDnhjTrPyDuZfmANZHpqawKDum7bXfEjV98b",
  "key11": "65RUtHgV9mGigsaPBC54RHCF1r5rpVVFFLoN27hkqSkRqwbyDdXCHFFkukjTzUFrqdb7HigHCXi7NDcwQVJ17YgT",
  "key12": "4M3MCPNBSss2j9wEqTpdqY6bhQqWFzPwh5NCDVAy8jBcMFwQ48N6kL4vZWNRAEsaidhw7SCNBLH1x6xfYdWUDzD6",
  "key13": "5LtkGDzfokNaDpRSJ7K6TD24qQTHCrCqpDjhd8z8CjHEscz6rDWygLgWsnD4H7Mn1Rg6dMzd3A7qBu7UuWANmPpQ",
  "key14": "TtyguazpwkWbY1KpQEUnKeFkg5x4JKgumR523xeDdTynqiA5ocHBXbrBcCW9KEmjsZMHSpcFMKtyo6qpbPkStEX",
  "key15": "3pB6dNWgzCVpM7JKEbyeHvCzLHrqNVEFmfzDjcifCYgbDjU3B6tsXTDbrM8MfdUJcxeAyT1EvN3f1zxfsJiHWMYH",
  "key16": "5TcW77FcoDUFb8VW58s2wC9NPHtgmCEuDrGCKTD1EZFAi9ySgmcjf1v2FCyvgxRRC9T1rnAoKKBHrBf4GfmG7UPT",
  "key17": "2WbkVcgi55NrQE1nGAADwrZzeQz1WcXf3KeMP7WvVrNsPvrQvCSxiBTcp3gcNvHgK2t1t86uiftu4bt64vMRoGtt",
  "key18": "46AcTQsMCgVrJw9zeVLy3pEYLo19vhiF7LXGvmnaazriN6EuPJ2mbdZq7xmq1MT6h9PYUJ5nQyYvkNZraE4HoFrD",
  "key19": "pcYGkTdJ7VLZpc2q3nMYq5kfjFGkH2EDx9UVNn1dueDJmWtHS2J734FxLquCARPwQGaP81YJgEoRSACyRdc8Lo6",
  "key20": "5X8KeQjaRqNGT7ZQEGbLK74adNKRwi44Fg27AuaU1sLQmvJnmNfX89wjfmLehsuoWgniFMt6tSc3emuJHhsU9au1",
  "key21": "3kCbyqBKPD2C2jswkrtkyFsekWA7KhbutgNtfuWS6x2i3NApE36DWy9Ajy5sw4LzdHXvAcwCUm5RZviANyeqXy7j",
  "key22": "bKWkurUd9b4mcQHJoyuH2x1Wxjg8N5SjHAeMUNYTtpniSVZ3wHWrAeff8fGCzrtFdjwc4szQDxrE9Dj33tGsXwU",
  "key23": "5yfdWd4utARucVpMtRGnfD8SujBmTksQLZ52PqHbq6EZZyRW6i6upt5bhsmajPqRNfU3JrNBc6CjrH6ZHyzkm4Qi",
  "key24": "3945ZCALfiHSiickvWbSRtRwSZiXV8r9ZcC5kx1TJzgw4UAQNR7gMTqW9jzjPTyFioc6x4CFVGaafikg2ikTQYXz",
  "key25": "49ja2kQ5ke3ExrLegu72seqHphgCxqGmB7peQxmeQcB683BTN3Uk2Wop8F4nT4NjoV3tt6G3upr3UMdrwR5Nm2Ro",
  "key26": "618GLk3ku6Fq6wJveEPBXcNmgKGsbSvfXgqk4A8rjR57KH47Ns1FeS3AMqVutwzNNaeofhjAhipkRC454efqP7Jj",
  "key27": "4Njegfvd2Tq71VXHKiGB4MeNHjGntVmcpaSQ4y2YsoYE19soCN9xUxygVttNWsgUCqxZvFsD1Ne3YCtTJXQyZWnW",
  "key28": "UMoBDwve2MiR3AQvbmWAq5fcs1uwyowECQ8dtxR15AreZsM686nuDqZ2DLQ3HdRPozEcfBoeqBVSGBRy9XRGtWg",
  "key29": "SPRkBJJfgbwnHd3wYpjq4fA2tSwhUe7aNBgPqTYCyCECySVhvBSPJxA5WsYXw6txpr8XZrTK9fTQJzCV3iS4R5o",
  "key30": "4kFH7RZ9RndExse3rARYrXy2JYbDAb6BQMU9ZTrWga9jMvTxaRBkcdJ2SdHxDrdCuKiBYLvkcKFojezLTKa5u8V1",
  "key31": "5i1pFuaYum7uBC5HFQ1RDjcmbsX54zT5p2wTfg8XNX646aBnUKp7EcN8FsKn8pVERdjfuH3bPSqaaXEyxQYJSwmh",
  "key32": "XvWbDpPkFHZeCkBCw73tmfUfLtXgT8cV337Be7i7sF7KqNsssyXcUc3rjWfkAFt8ogg9rJiYQYModo6UZz9zp8d",
  "key33": "3SEKqR1cwgMSPLK94JRH9pgoxnLt1ZWTtcjzDr66FQpsEAkoEqnqzZMo7mREDg1exHzQUGwjZWheX289WMVJaEJK",
  "key34": "4AKnt1cq1mUfE6Q5VtEBzJnZvrk4aRbPHsnxpWjFkppji3pA69Unn9cR7P13YA9MmR8gpgd1bbboocApcATdG6TU",
  "key35": "fHEQHTvX2XxF7oGnaFTgdfhPgzWSDj9eX77jw7MoNdKQ6GUmEj2BNXrW1uB93QwJeHks5iiYQznqex8LgN2hqUu",
  "key36": "66BBX1WULyVu8XfHB7EDGNJTbFHVsB7fEyURXnoS7HqxkYurx2hRacHvrFubsdbmZfarJoALxuooUHXzAgoDjUjk"
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
