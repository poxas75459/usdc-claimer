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
    "rHnBUxFdRYLtkVHh1QjENDcqhtE8eSZzFvFZY223CyV1AVrn8zYdBuMqKAJHXUv6Un2k6EBV6gedh5KsF3rGd5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pkXTP6zCJxnLXwhBFrzeUN7mTHpMoz3y6iKgsPmbh1mi8Ve2ReX9mj89UfToKhjYqatgJoCkhQ7AjiTW92a6RaR",
  "key1": "36hzcMXamAKaHxsHdtE7dwU6cWPrjHgCAge1f7pZJSHHmd6AokYFwrpRrbjUQDcLDa54Ggd3jqcK4fpUvAcXjCFW",
  "key2": "3apHxFWkAjfMdEkXGXm2RfrkjeP7piLvFSHe8ySSmHsBGuqdQr5jDnwJ6PxqxPPpw9LSKnZsWHfNgzpmDKNdLn9L",
  "key3": "VrqYEHyiNKRLtb1PDxt71k27DRPyDq2hU3GwuT29Tr5ywg4gUZLG5UY4tDAFpxcwvYgmovPKSfxNdCKrS6h538f",
  "key4": "44m215znXxHu4b61AXRTHnE6Faj2tYADkp7JxK5jmmgQzy4nuGwtMo4eGeiDqnBGAExsTRB2fgpadqQ5qV8XYajH",
  "key5": "5xiZzXmGqGTuvVBSm3ydYAAgEZHWSDNv12NZcNYede1n2kUWBXDUEymByyrohvYfcENHbYacX4WrW74xaeRtYJUH",
  "key6": "9bC6JF6SZFAwFpqyDTUjvsnDZDZvcp23n2GFbKxxvp5YCmEXitpCAce5UobRfkswCXrnjG58Qsy9BrMyHoG8LuH",
  "key7": "QhQLcbtKQWyApFQzT3QDRU5FaiEgxwCvXjKXPcVjeYvYewSvU72oRtzKWxCGNXNXFPW47qkRN9Bu5rexzLN4mbQ",
  "key8": "23cybc67ZFQAnoXssBFMBsaw24Un7eW7ySZLJ37gs6wttq96d9uLJYHNAXb9J1YxsoMiMonpezXEuMXwa7LPh7Rw",
  "key9": "3ub4c3rXEkXStaB6usyA11fvXg1K1kX6fkyAHeqiEuFXg5auV2bcQkMFLdFu6gBP2XY1S89ZutkJkBXZJQrRMUni",
  "key10": "57yRH7ijN2aGcknRL64LXxy2FaHQq9rq4UDYaA9d2iWocr6aPSvztojWQEvcxVSYNgoxAWAuJPDwCjdrbraEwYQM",
  "key11": "3NVXsxr828EYBDanLrZEEijWRKnK5aixvQegCiX9YKy4nqkQKEjBQSYAa7jPEfskqJM53rd68CMMuPPnjy2oTwtW",
  "key12": "5Qts3GhczggPbC4JeEUdNU7PVbMewoCKKkAuqWqwUtxTcTjFFV2mgbSSVYrb366AXNtMVHZaRzSfoMzZ5WLFVMY6",
  "key13": "3dyy3XFi7i3jxmkK98xsJSccYU2ATVjkqoHgycGPMgGKv1F42gkcABJkBNZGuxHYKWcT1G6CkyjPVMDYsGDX5Tmr",
  "key14": "2RoAoCzDSSFzQuqR9rkbsCaFVsd4mtwEipAGujeCnHhXKypCPVRTNEZiodhCXGH3ZBnAt8JkwDR8fjj4ym8DLnWs",
  "key15": "4bXesMqtmXFxYr1gmG7FDxceFfnvsKkCRf6qzsbSNPZ6fnswK6frtEtY8o65aX6Z93BSwPjSWv3RxtaKcbVoeezr",
  "key16": "3LbetvJYMsCWraDJpq4THe5gkdzLGuGyxkHvFrB8ugsFHUe1mEM68kNGrnpgkTpey3ayLQgmLKopNxqioFBZFRQE",
  "key17": "2yn6dXmHbF8t98oAeZdir9ezbriNxCBsyuF1kZ7g9Kts1ysCeVWaGYZubTYtTxvaiFuYHezpaUbBMVLDCgfWat3G",
  "key18": "3MB96zS5mEJ9wW3vqdW6dXnDfEPzG3hWmyd62URZMhDMxpbm3evc1AFJV2vxjZhmBwcwTWYgUpkGnDxyFn6cyVSw",
  "key19": "4dTMZ4MhDxE9aE15sdFGEcddKMspB7CeXW8F4cifQu1YcR6NhbMkg4o4RtpEAZRKq7RJ5geYAas3yfWA83DVUDtM",
  "key20": "23LCx5VianiZFFGSNRNvxKBDjTfUQX5b7WHoumsmqR5Z7ZA2JVWTJcA9PtjvCZqqc9BS7jAc8eGH4FkprqEPuzC4",
  "key21": "25QUsHLZP54eR66gbfzoWcbRxxt5mozRSQUQFkfiruwuWmEm6f9xPdCDcFdodqBzXiMjEodZw3k2bdLfcYHhDgTy",
  "key22": "446ENxFZv3cGYHgkFgcU7RUFeYerHFxbsCvzYQ4BYsUH4ED4DDMq53TBJaetbrws5QYdkxYpVusV6pBBsjaJ6viq",
  "key23": "3cyU2rt1qtXHV6byBzKVECZPzbp3DtG64ASZKuMzFzMNTi16QSWcAAoeaheSDpjYBNtNihA61SCY4QoV6oJPSpZC",
  "key24": "4vk8kiCS9EJdygzE3oaDbyEFt7XKfmWmoHSnTcjNfT9pJpJUb1SsnVMWZCuG18qnVeEyy9ymjerugkvdX1i7VkVs",
  "key25": "dejL1DHiiGpKjYx3RoHg9vkkCpYmLUdRYuiDH7SArxNsGhGzqTMEWZK5FE5ud8M2N1eVks5RHUBTjvDobFTrASD",
  "key26": "5aZsZEmmCrMhy6uhdCqB9wLibEA31x2bcKbYiRaTuZFW6VrbR4m7P2Wmn7R6LLXuMGWvnbKnvRuzwS2j7cqPgQym",
  "key27": "3hr9UAGZKzSYGBuGsHyJfD9YZfuDFJ81XGvDT1X4EiW46HNWcrfCEVDBoccHMpCkUr8cSgk9b318uUJecMiEz2em",
  "key28": "4zo8MtZcJKwCrJWANF2SnBLXczjB912GqYnrgJ7PJos6GhCaCiMNCFJwcQNauLCdJc7XzSctM4kPDooNSxqe2Fqr",
  "key29": "W59BYweqD5ZimAoD9NxaB7qbsSbbfGSjNVe6d7ARDVzfnLNoLvjsWqQXsvAx2APQf4XxLktTJ7X8SdAjcxNab3B",
  "key30": "2FNsmSSVo5kBU8pjmxZDTvqxc8abGFrp3UxmgfAyc2RRmdaHtdNGQ7otHwYreMrB5YJ7skeKwxvxXrEtbf7HRste",
  "key31": "3jwvU3uyYu2oNRezaZUxha7BNPV9Kk2qKVTmqxkJbXAcrs6JCNF7xF2feE12k3h44Fa35Z3LFdj7SkdjZWgeyexG",
  "key32": "4fewMrSwck3r5tzW5QBTm9xJQmZfpK42gSsPAeJpxa3PxgMpmY2cV6y2BkWFG6kEhCiRTWUEGQq4w89QRFGq3dth",
  "key33": "3qeuRWj2RaQP28VMByWMVayPRJ4YSweCRwWuoGTQJTpuz5VsaCYVB8oM4gC5KsmY67AvBh3xZDi2qv6M6Wk3Czy7"
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
