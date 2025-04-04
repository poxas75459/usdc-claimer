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
    "2p8eJkSGzRaBUQWikqneeXtSUXMugpLi4eH1ad1w9s7tGgVBEXhMZDdSp7LoZ5eoEXsBArzdDW1JCdezVs8VYYhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pZSP2322MWNZu81qiMt9geuNhHa4MbSYeAiZm4DYDBrMD9Zb7yT9s6z6GDXpCcZ3PSpWfWm2nHMK3LzrxnXyvfG",
  "key1": "4vRUDHp3ngQb3TBUqfHYDYGpSpVzDz9odQQTJKxejQP6iCkQmgdibsdrLBSi98xSQaXYQuYqHrvBZ9qnY1JsKKiK",
  "key2": "Y1Nv3jLa3u48ENaCHpexHmdHvYmjbJtRCPkJaPcEqTBuNVpT4erL6i31HmwGHpYincqqttpffrKUJwUEcXw2srg",
  "key3": "2ynFySwYpBMzXFpuhEAD6AgaJSQKeV8ka79MJoXZUrzZE3J2XgMJ8xsK6JUwA1b17KXYyaoG2ziVGqkYtF86kJ3S",
  "key4": "2BGJ4N3vCN83fKRRajmbyYPu7pLYu5unVBGguT9NVWrLYLrQmDKWPuhFJD62ntHMZDtFJ2PxKTpu5fV9LQZPcw1v",
  "key5": "jv8WWzjmZUSJBZMsw3oMaLVcWzD3fkq5kikiXQdSAQm3xGEwfyH7Q6DtDrQZE16AVe2MkmwneBpdThXz6nvWJGB",
  "key6": "5ynmomNt6NUKxDY6dsG1DjkAxFD7pnxLi2EuZYp7eQ8PKxhg42fxhp8hWq8tWb5ffhLzPKNoJaQPqX9gNZCfvXkF",
  "key7": "3DgmCXPYbK52orGtxh83ZgVgoWV4DAgvz7jg9VVVqcGv2xeWGMwBMXXoUuNMBUv9funLSgPw7gCAMsRcKCtJ15CS",
  "key8": "2Y3M2uLAyq5NjjYZc3x4rLuqXNsdodu5Ce7NYFGzDoZLt5qb648fyjHGz3GVtXduRouxY4FmjLGt1RW3FvTvq9Lm",
  "key9": "5Rq4SbV37FTv2znTVznChTvDnHqxVbBu6RXb2BarpRYXw9yhcBqgMMTtxzW8E2uqp8gTZTGUmdEDufDmu2UFTHdr",
  "key10": "hVz6PviVLFW6sku7CnRpwsfLrUE851pawaFeLN24jWQyATfdzDUQ3tTdYiKzfAbFs2Sa1zn7kohj3WZPnmNUBF2",
  "key11": "2kYi3wxe34z5hfmW1BWJNTjq37ULCUF8Xc16L1EiESGv39ADaFcmpZGVZbEqZDi9WP7fbT5K3PsysKCugN3c9maz",
  "key12": "3uY5qYrnSkWLQJZSe8VbvqwLMuRqQvdtnM3GeVHx96Eyz91gTNAmmu1w8PrR3oubQuB9SUQf95keMafmH92DdnaX",
  "key13": "54wmi359mtYeH5mSJk67bDiwXTuQ6jnYmWETnm86BB6AqbbpAsTX63J1aVURH5E9Dszt7SeTiGJhbuaaNCTDJ8zr",
  "key14": "3mfb9YYKgYkT71UwTr6bVfUbmpNLebxgn7ZSm7kDYzxktbuWvTtb9VRVN2RtRpPM5mH3hdepxd14q6cpFG1oR4Xo",
  "key15": "4qSP5aREiBoEdThFCCBYgYV6wxB2oc5Ff9vCa2wVW4Lx7ADQVP2rLps4zcTfECpVHuwQp2LUdkMDL42z8uAu8p4",
  "key16": "5ztPX2SqGSW7ErdCgtqSVfy2L82zkZhS1i64WPnBBs5V7K6RsUiKewaRy7DddaBN7uNxTSGGW7rWyYTGkCG7MydV",
  "key17": "63vwdJL5X8Y4q1GcT4GGVgatnnqoDYJNTpTqEtwtPwMZqA7gbrDE3hPnyr6yXBVHQAuLxkksXB6Ee8Qf96THJcsZ",
  "key18": "5kSkfGgFmg1RWrM54pgmy7U1Xuhm8GcW2whHW1qCoBN3BzYWGpeB1QHUdMFZ85ritX4hZrxjJrBT7q1iyxzTtj5Z",
  "key19": "4FiVhSL6oJX62DWQAiH3SZtWCSyEDzT2wcHLnb62scXFAQAccWue31NE1Uw32pwuJtvhtcUWGLpbhLXt9koBdnTi",
  "key20": "48ZEwNuR8Szt3VPR9xNDzqDi1zerbZvrjeQTk5Hkf2ZE2gZecQL29FGsiSW3PF8KB9Syp5ZzQw2VqTVkqzcz16Ee",
  "key21": "121i5Sdg1yR4RQVTyfitfuejY7SCJBKuvtZe5njzDUUPvnAtbUWMWcz2eGiCYXbRD3HjC9mA81wG2hqKzKNLzn3H",
  "key22": "4HBtms7BqZW7XS2usfPzr83giE5MAt7qvDqRoqZf2ho7MGTJm27kQMy3rRZP7pNH2QQp7ULQPYTcCi46mviJGUTq",
  "key23": "V8i6MNnrYdcCsUm3qJ3w792TXNnsJkjq4Ly9TbzPkzAcm7Pik1pH3nyrSjkMtQ6yCPGXLsniTSKb6QKxigMtiwW",
  "key24": "5tTAxoSknEAqCWtX2VJt8bxLr5EQUSFiFGMsXsC1AE8LiCzmbcLvMStGAZhk4E8ZQrgiPckRTEa8DYmXxiigcHYv",
  "key25": "2mse1uHbCJ6oDkx2XNReZKQ7KcJ97hEtjRNKPCT9RsvuCniULQNkdhFGG8zREaucvD1hWEqqvsjfssahbaQ6LCND",
  "key26": "3moXhEQ99NkbCotf37icBDb4sEL2F2ddcDxjp5dQnNw1eSpo92y9UWyL3N7rchCcrRM56bhGgJT1HkJ2ZafasLFT",
  "key27": "325TpxuUNd7WiQA5xg6bRAY29APAdS77ksUm1wuZfSARs8SKMoDLLRst5dNyARNTi54VxegqVqufZbtprKdU4meP",
  "key28": "FZb54YUbXgSHUAnMMSaZmgnyYLLu6r62s4LWL7JeRNEUN4To3yAXzbVggEj6bs6HVXHPyd98za3jUNgzhTo394Y",
  "key29": "2hTpPX6ALD99DCwrLq9WbEMw6Ck3RaLtTDX7so1acN4cmAyMY7nSooUgJPtbG2jHMrZjLzyxbRCdtdY5HJSCsqT1",
  "key30": "3jsuTySw54AdQoHqdxdN2778cq3NvT8NHkjyU8W8GgyjUg9BdkqCmM3MWhG3Bya44NWqKY6yjVq9199vd2tPmAMM",
  "key31": "65YJBuLFP1C8wqKDPNZyzPrcQEBpVnEQ9acH6xXrXsSdQcL9RwMDfwjZo924E3bHoCPMJu2FtKFK6tNMV5N94uhU",
  "key32": "54HHET1ktGL1s8VBfstDfG1BU2XJb1dxfrdh6NLzRuUvTeCPemSMQcWe2QX2AF1ZoJyivLDxJCXMKmLFP8tAGpVg",
  "key33": "4A4SxzyUBU5RjTm3J8W9frma8p2WbJKUUrNkLwbzQ1bHT6ScqW4xLdiJfozxSZaMYiJRksbhnBCkUvkmAjKK2bwQ",
  "key34": "48kUopJnaMFG8MH8EHy9X6tKLGtNcCzqQJ96SNapFw3APApxw1KzDVphYefikPATRDSDVqHnrY1VNvs7tw7XenFB",
  "key35": "3aojTSAqZnHVDGVrEvJF7PhqTPeqBCkXZtA9ah59EBDUkRXwfHkXmAt8RYzRxw8D5qJqaQCqn1X7WzFBTzeCbZGQ",
  "key36": "4vWtGZ4ny6oTFDgYo7v9Q3NxjLZ8Gf3TgCFi99L2oQ7WbsZ9PbKkYHjsEL5Un1EvkrU9UkvAUmgAjiYiNC77aqde",
  "key37": "D3XAWeQtosirnM1eiE9QxamAwA352gt3e837zXx8UmogrxQzzsTesfhDmLpbs22HjoyRcWh3tn6znSNhjxVqPAZ",
  "key38": "6rf12yrkJLH96VYCVFViodSq54n6VZtGidwK7eLWBhvbGDrhKpGJf9zW1w3C4TS246JSUS7DUCiZAFmxCt6JEe6",
  "key39": "5muafcKF4JCeHMxuJDqgVMNHvAKZxYHfHQCZSRzafNrEZAZCaNxmXfwSR9tvbvWqEYFMgaQmG1otRtTveDZoXrh7",
  "key40": "3roxPRpNBnh7aDEbf6tYoRKh33UTUQzqwUmhnLgqXfRiZKrFYxx1up8yEAdDQUdYu22UBSUDxekmbabU7HMzoeMQ",
  "key41": "66EDu8dpnDMcpiYo93uAC1VvWUL7qS5inZG1KKGFaqBaPxcoQKQfDZAxjoJborDRFyNWAzm6mRs8skKQC8z9PY4z",
  "key42": "5E6XWBSWRjiYp7eqcmu9SX6zQgmW5S1jQhNsa15RrNiy3TL7QF29SQ5Y4HCP68rMNk4kYMt4LWwQM9gKkPhhvs5i"
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
