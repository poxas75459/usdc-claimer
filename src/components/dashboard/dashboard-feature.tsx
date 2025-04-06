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
    "nM65xSGrCex3CFMzoupkMYViMmD6bM2rSNKPV1Nr1m2dQQWGjU5uTTFr5qUbXmWBLFvmMin1AdMWkTxWNcv8Sd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUX2giufokuS6vfSdw2zdfh1CqnCKU3NnVvUWP4RjWSxEnRyPNCJ5zY22YXyroufTPjwjG7Qkt55Pj5UDyQWRhs",
  "key1": "5xhtXxN4kpTgSdc3Bh7oh15aGtqeyiyYBMaC9UwQVCghzki8Vt4oiji6UBUha8MKgQCKZtto361ffmp61Wx7h7cD",
  "key2": "5ygUnmcK44ry3pcPSJuUtbD395JuFurJvr5jydr9iEozP5c2Q7WtJAAHYvJJA9JpQRWddtVjxykmkLakaRkrLpmX",
  "key3": "2BSQD6Kkoee9o7GZC3defDoYXMo7NrrEDuWbdxbQp4QzRmK49escFCLmaLnUYmKSKEYH3iW71QDgqxkbsSbLxRdG",
  "key4": "4S8DyD8RdxwA4x4dn2zx2rijrAb5QCYnM9XSxH4a3gC9yBcJ5HwJTDtHE3PdnXoHKUDoJEXZYun1BwWk9DkQdB42",
  "key5": "4jfoXPT3CjV41NLfRkBkk7XKfcwsSuW223siRPZW6f3csUvqXWVGj1MuMxPWLswdGGJsWedJZ3SoB24Hj2tBo6Bt",
  "key6": "3feAK3juF8vH1YoyDsAngKKptPB8hZzCT3vc7z7wrzBt5BnftzEAKeZJ9Hfanz9zZGiZNN3BENGAQV18npNgRdzM",
  "key7": "4vR9tGhkGyB2M53EnqMhGBkRD7mpxv2gBPk45xSfR3yvv6SJ9pPJNVnW62t7Sddf9Yxn26qE8Q5csqhxmtdj55hB",
  "key8": "62WFnS4VPxTZnbmQPKMgh1Tki2CzsKjWcjQZzaN59f9c6BxhGHY4aTDvx8v37Az2kh3LAy3XCdMQ6mMAKn5eGNyZ",
  "key9": "2YyUWdyFTmr3dRtJZRoepRd3ZVAQGe9PqVAXLL759KaBc9UdJRpGDzGhcQSgX1etWmW4wCsYVzDFkTsiXSBQHTGk",
  "key10": "5h8TJApHRxDcVzzDeFR1FivXoC47rZxtqfvth25cMkMRG2WeFeLsp1fRkqib1McQtLhjoPMq3BgC8ccxe4zWbhcY",
  "key11": "2njMvMxjvA1rLDZdfGJkKWSueE7f81nLYaV95oLhSWnYtwjxaEduaQT6tddJ4nYR8f59jbEffQ1HQ9LSgt9dPqse",
  "key12": "5bYVTGEWKEUxvfTYBZEQxuvyGP9xxQiA9ir4LzYKDdhcU1zVNU99uKzeJ9wzQxscviNi6ysNGRwvYXYyFoCjLS7",
  "key13": "55AeTyELm2k29JPBEEyrNDTVZE4iVMTDzZdBcBtF1KLXBMKqcqkjSfjnoyvNEDd8j9guYNLzaJq49wc9yvoQfWxc",
  "key14": "3Qc1xsDryZTaxh3UAZezPDnyKJ69ae2roBHHgZRKcfUxnoJuFnSE9mFmHFzYPqZmAhzwdmrqdPYybbbwv6ch6iQG",
  "key15": "3iqGtd5MxRYAz8xxvcVR65RDBwD3HkYNfo3Ww8XAWA88kkEWj8GzKZGSMwkAa5Qxz5weFj68W5NMEJyyuScDWwmJ",
  "key16": "5EKVW1WFQjf9quKnA8g5wdjeCSjzAz9HKHSL6UDCNFumfMskRq4JR39wD2p4TcJGhwe1mJJ3p32EinDYHiCRVebm",
  "key17": "3jFmrPLjATCS8eBxa8vdEQ66UrBGaXKin7caukM2my5JNsQHx19E9pausMiBpcwarrPK896FE4oSWdCnd4m8RYtV",
  "key18": "5tnrZudUxGM5K9rCJwWVn55ChChuSpzj84gpWdjAFpmmEucGvRpgDzzaNnnHyZnANy7EhNuyzRFqBuJsFpoHiT1m",
  "key19": "44JwR1BEWKRjdEanuxXbjKMXYPdtG9CGKKoNTPbuyRFFA8JkZXBSSNniv2qoc2s8FghT4Q9F5M6v7K7THv1zezC4",
  "key20": "4gWoWkbtmBVx4rPbq42kP7xbAdmKQbUSwb5TAjF8hMrDvyX7K8mAXdq3DdTf9U4LbcXcv2aF5NK4dum32XBFbJPh",
  "key21": "2utcfSR1ynrUtBireizS38j4rLgQh1MQr6AcQ71QgNuQusTueA67E2EbMC2ZA9BDboAgVyNLwUiTDMgkxP31Xrn9",
  "key22": "2YJbATrAgdWKogX6Y7WiNmRWSYhEdr8XTz3V9YhYZJ31o55SNc5hbCcuqjDPdvPuZn8dn1N2fYtzJQiAb7mnaXTN",
  "key23": "26UAwTa9WgueD9BTjGNrc9K3C26N4t679TfH77ST53oqKGZ4Qd3PmE77mDA8MKY7q7YHHKhZNooGsiQoE5d4dnBB",
  "key24": "4sbdb8YT4gFBvBG6135ZTTHFfQL15PiagPaqem2r5erbEBuB5kqCH5zs85oWD9srTz17y6KVnVJNsjDXh28ThHLw",
  "key25": "4A3Zbv8UN1k8GnbVGGBrXZKy9UHnZmZtYkSbe9kts1Uq97gKpM66XCkNfVsEKiTm34FWkmguiBVD8cDuh2Zaq8YQ",
  "key26": "4xD5vYox5bW63TqYwf4QMoTqZzenUTA6xU8g6xogg5wFgNX5JHJUozBsymiB2y8pihapaC8v8zTPwiGeyNYpVny9",
  "key27": "54cBSgr7Vsw9qq6QrkuuMJtoS4pNEwq1cuFBw16NkRKz6nNBKqDWWLih6mAeofg5UGfK4FdFbUUYnohKsjE56N52",
  "key28": "37DZgH2qLgbYXmX7UjCjELc5vRoGDJdSaKtoZFc6BzjNYE2Lvs6rLBBLU6UUzPszhzdiN28eB6RLtgSohE1ZJA2q",
  "key29": "5uJKcrkSdruAEn9gCsCPSNKw4uJYMNu9F9SEoSGP1kyLdXUSs95siRnjP9vEpZetjFUbswdgJJKLt6zhZ7MaPc4K",
  "key30": "2zvAwzPRKUdCRNex8NXmrKCYfP4cUkT9wrC6pWC7aTBTQiLz4TgSsJnyrKVFXkNnjqznBQMBVsZLdBCKpEXL3TkR",
  "key31": "2eSFkrUbxpzH9CcN32wMvWGUni4bWkSiWAAqvxzN8FY158y6f7PwP2bJV1v6ZwVgnus8DBNAAQJHeBwR8eq5m2JX",
  "key32": "5CQFdXNr6LsZcQSApKcZeyATT7vEcgDh5x4r8QXy5fTU4fojJ42yDbytXXgR2UF1LnmWgHHi4yGVugVXcZtCeXXT",
  "key33": "JbaToMNnge2d437eyaD9qSx7KAEHTepW4wBTqQpBLvT7whhofHJXq2i3CTTSPwu3BKsZTExsM8ycUNQDctTipus",
  "key34": "662DwhAFSm71a7rFg6TBjFxYU7GveZs3PknQgt91guHTnZ7WutmucMhtxGRHsWi9YDQa95UBpUddNbuzRWS56vRE",
  "key35": "3vtqrebAP48wcDcW2WWDM45FvgjJac3SJh95HqCh1yykVNAsv1nd9mBqzMi6GFvPbwjfY9tKtoJG3VvJWoPLw61J",
  "key36": "47QnXrYF2nbr8WoNqvHupvpXyztoxPWiGquW4Qjy1wskhjQHwtbaMDVfDBXwtPwEXMqLKDivCv3H38k2mZdCKerN",
  "key37": "mDBTkhzHRjG8YNmCfB3BCreYRnYkuWtyzGcarcZ3q8UxofjmDp5QVzhBq7a2omAVuzJjMCD57A7xjiSJi9hVQXt",
  "key38": "5Vaz46Sb1PaDSZ7oikmYSxgVqDDVfsBkC2uY5nyFm1KYykkkmZ8rsybyoJpapDZorJiKuSVbMoQ4gWtHqbkQqbrc",
  "key39": "4LFUoVypTyX3jtPwoaYuRrZYA52dmbWzSk63zY9mnBBueLy9ME99LtyVBTNXgMkXkHWBxLVw48hexQL5GEim5mcQ",
  "key40": "5gQpD8rsCWCaYmQtu9KeB3feMUVag4voUdyTMamtYKFU5Us3yrkVySHREo7ziWcRZ29FZpKWGPRQdLEguDSkCwEk",
  "key41": "62B8rdZfiafMPKYtrKidF1phdWwDTG3SmbVQ1nZwXoY1knBPzGVm6b2Mn5C5ZhFe2So7xJSouVKqw1WWH8VPkfzX",
  "key42": "2VkKvuL6Vm7YKSNDSY55drsKrREwNEuA1KXUweYbj7sLTRKmLSrZeqNu8GTsuMx1JKNGukzfkybRJChe1w8gYV1j",
  "key43": "37QRG5AdzftuKbhNkG3TNmAe7bCBtgh3FppX7sSN74HegSvmQWQLpDMrUPKkKJgfwamD7rk2WxjhgDMEW31GxEGD",
  "key44": "Db8gUmcePz1TgvtCnvLHvncaUL4TPKiwv1VF4cEMxH4mv2VjuGPzNrhUADvwe67cLJejxokojN3tuTqUN3N9sJb",
  "key45": "5rkc9ixbvFAvMtGofc9VF8JHjNQjXymYvq9bwk7ZGqMkFZv7wxXkpdFpPY1P9GGVZauZ2zkuFCwqiGEn8eJRzqFD",
  "key46": "3RVzAWPedWA46psUpABaiW7kYHzEM4QnCXDE8kxELP9cTFqzwEE3CDYxJfd1BzRBbUokwcGM1CybzyTkUtdSvVxA",
  "key47": "3kCkqWSfoqfjLoKLojq4pRDvLvnRmYkqjyH1mHrUagH6JcinHhUAeu4AG3ad6ixoG23ZkWBmE5CMtaFmWQaPw39V"
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
