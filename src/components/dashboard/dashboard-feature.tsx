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
    "WyorvhSpuowjvSfauxjAGszU3ksY1WXXiFgz8hjx9vhjHNwp3za8VaoBmZSCdx7HvHBaGt1RJQkL1Lg4t5AaDG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3miyMWzXuFrNEHULZ3XoESez88RBcToPZrNDzTKpY25ZbqcHJQXioGEHc7ZB74YJSyPNQ8B6PAziQZUTno8uGx53",
  "key1": "5dMKCGjh52bMTLs14i36XLzWQfSfk1wGqr8uRpsACayPiUkUhVbcVgYgyrYKqFodQM4mh3gigmR4BR8i14Yh37EJ",
  "key2": "mqjLgsJLG3JU23RHimtNeVkNfLErsAGqoyZ42KVvLwcXgmgcPz1z7E5Hs96TwCb9t9fiezwdoNc7PvW6hfkkczo",
  "key3": "1Ym2H1Aci8mpgBMY7mVyA8KjURmwWzpqHMovEB9s7eU6owbLtK1QoorzqMKmqBjKiTkgKALmUcvz1wPFnn2ia6x",
  "key4": "QSPkaneU4XPaaNVcFfK2R4waR3dPDQwYktcmJ1cjxa9xgXzVfjTGdRwr99Wq9HiimyUMT8SPJTWK4y4cibYRm8S",
  "key5": "oqCvbKyyESaXEWhskgjKv8X6CX8W7P3JyfXNntSRmcFfLe3CNp4nKGpMHUcYbzBKBZjCBfhtQ8E6nv9yW2FEMoY",
  "key6": "GCYf6okpaZBrqCPRj4SQrk4J9skCTfCEBgVBKji3LkGUecmDtn71MC6y9HJh9QY2HJb8GsijHfrzw8VogRhNRdt",
  "key7": "MyfE1CcEKshHb7r9aLAVAzy4Cmwz5LfbnjkNtpQhQ2VNtmW8MMfLAXhkQkyAZyq75pHop6CtjY4sDnc4YgqcmEd",
  "key8": "3nKxfKQnpwx6BMg4umL95cPcNqJzkhU5jauUgBVMYoSQDRyUq3QUJhCmKiLTG8ahiwnibW9PZ3apAMXbTb8FLqTx",
  "key9": "y6pP2iaQgxhB7fuNGNhqGjoGackHsSuFBe6Dpydbxtyx4ptZ3jTPDABvFMnPXYL5vxngcFNYv1tpSDT1PCJeEBQ",
  "key10": "4LgxsGTGZngbebKKryTypK4xkg7uNg2vhhrcTUanKhFy1ShPNAPWWMB9RFh3phDyrZa3zhTHcFingF11FdpG2Srt",
  "key11": "2xLVsaVM4qvaXPk84P1igoW78M5jBpZKXZUdpyifYPd9ExFakFERxrYLRapN5eccakm2MdAEup2vWNMpyQbFJYR5",
  "key12": "3qJ26PZqXs5En87jRgYnfMBr37dgZijqzL1ESD6zSMJJSRfXTYDCCoFYtjTUCPCmTqf442N3dDjmjmjyfeRzBHJG",
  "key13": "5RX56SZP2p6pBiXS1kteDRFvki53ykVKYXpyWwVuVaqnAecQJC81RVPy6UEGdHhLJadDKVjUXntL6bZy8C8XfU6Y",
  "key14": "2rkSZsu6TKSzMZiNVMbKuQ1Ad58fzSa8GrqDBVRjAPL75F4z3ngHMjTgj5pXe1chtFD6HpiQfEWbLZkj6iUxSvy",
  "key15": "3PPBFmaAMQp1BGDR6qMXKRgV1rMo6BAmfVm2y2T19D9DnQDNdq1zMA9rHpZFpCadk3otcbb3LmzzXJbL5U9ehmfE",
  "key16": "4BT2hH4KVsCM17uuRhp22JE1kbEQFT5zm8HTavfk5UdJY66jcZQcwfxssnVyJ2HxL4QjmBe6sb16KhcTZqe5bpWP",
  "key17": "3YH2U5D79pfQEWYJVgoeJCrXwEB9NHQSQz8LV5BnA3cef6hTHA5RXo9wxmeoVPtGpRLoEPxrHzBeoNfynMxFfW6",
  "key18": "Yu6Dyyg4cihB2BYMRqP6RMQt74Eg4BG77zEttVxn1NDrXB1fmwbeeQ8HgYLUTCD9djgphR8uod6p5TDwMf2nd6S",
  "key19": "47GvxEW5AiWJTc36NXJAWoKKZnFEbrq38o72dBpGj1TSbvihAuHh13514K8rtE8Dn8MtNDsTNy1E81tkBChH8KwX",
  "key20": "47gizKw2JZZ6g2mnWVF8WX2tVcugArVsh1YYD3E78mcWxDthDru4FVS6s6TLMqTcU4rcuyT54W2uHtQrAP7Jr6yN",
  "key21": "4a5x7fptQgJ17QkLFraD8vifMQyP7kTQjZpqjWP1ctWUu7xRRoxYMBroFRkUKKYH1NY9Cv5xHVBMTpnabhpY9Khx",
  "key22": "dABeaRkLw8BU8uu99YxDUqPid9NNKCUmDiJfEDuboFiXjmc47JYxHcuRvHaPScki114jLGBmNyJpSYxh3H2UybD",
  "key23": "2NJLm1KoaApKEzYDyVrVE1WZr8z8WQNJuWGztYpHXSt7BCERsiFFCooCYVBvzWQXjs6sSozBFgLDywXQtGWkAn3d",
  "key24": "4iMfe8BPJWuqdGb9yE3d7xrXXVMTxxEk5MxYNmrzHVqJgir2yygw1FodwMuxqWTzmemaTpAYJsxrmLEQZtXkuuRW",
  "key25": "32fABnkj2YDj6hVKAa9tQBKdVqqmkLpyy9BaknoBQB1sZC75s8kKqCXKMNtCnW4kL1C4adSAgbDjBJcvLkBZgkJz",
  "key26": "2WfpDDQ5YktLYPUPCiuDav5gA2Ajp8Y4K6TuHMr5mmqzJzzCNt7hEADxMhwEPY3soSUqPpVn4cufyzYw3c46XhDp",
  "key27": "GYWcAr7MDAYUmU5v3GBZFdfxcZdZaXANJ5ViJVnbSPx5LjZ4xmtvRKr4wGEzwkkxx34nWNeZWxuNVH5PdU58w6H",
  "key28": "2AsFSUFUCfzVqYESv65w73GYHZaguxG4tCu8f2mVu7Q2jCrtbPBhqXuArmxRa1C79ZykTzaho6mNAXnonbXXsNhi",
  "key29": "41ZuN2V6vVbxjWh7zs7H24M9Jag7gqzcK2QvcVbK4oKYGCT4tuidLipKgwgp7MfuzxpB3de14YwoL9tGhnouqyd6",
  "key30": "5LU1tmNyvQY794vJMJr8tdVbQYfd2TWmBkUCpK3pyaxr8py2okZbjCAw7HfVrN1LVbzFVYx57hTzUY2uQ75tEqNo"
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
