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
    "5j3DZ13kwC38HJpAMnPisEz6Ygcwi17pfPQ9ozKbNpFkrtPPwYgVihrpFEQTCBWthBwQN3PR5onxFAdvXhds1q4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gv5q2xFLHGWq8UyBPuXeYGhukaCkHmxBCE2Hm5R8FDhnJsnKReiwKCijX2snUBozWzzbER5QywNCxCHMHgw5r86",
  "key1": "cr1A8K82dBwJcEAX4mTqP3QyyMYmZDRMsZPEqQTSKzjFoQwTMHShsDtuawThdDYi6SwoYNqSSgDUCMGbWTuEzrj",
  "key2": "FHqBZuxLCUDe8WKRwzGzXVciY3L9BpXNCyFmEh8uNCuMMfaWQHHKSpNRvcdCHhgmmUvtJ6hrReUCU9XFXdvotSK",
  "key3": "3jsWMoNaBXyHxcfZGjCBVWBzKRRLq2dyBpXFPzjAjfrXV1x4w3kPb8PfTKHuXfouRbpTXyhhMSwkDmvLRWnuQcK2",
  "key4": "uGXEBN8f419N2bhyHZQtRM5WAZMuneceCsvJj1zs4ZxvhaAULAMT7efdUH4yBwytEv9BMcKnsmGGF53sUZ4UMYv",
  "key5": "2WgrdEBsd1XQ5QrFEDZBPCErU585XnnhPafD2LS9Y8m4U6XeSDYqKSSJwuPJwKTuKTzM8xAYAPKbvqeyJDYoq9Fg",
  "key6": "38gdoRgtguBZUbjxsUnfwitiVHeeqE9hjbYiDqWUSrKurzKdyGgEXHNzkTQLaNkP515Mo61E5gnxx3p8y9GYFyAK",
  "key7": "64mGKb2wYj91SbF5yH4Pi4ZXbsKn3rDwxviTz59qhsfh4ozSMrv1izwu3QdgoqyH5QAjyeehnnJXFttVx6FxpXSM",
  "key8": "4i5CXSXZFibPegTe57DmNrKRHHuiVBTS314JmNWjiP43GtgYhe8bc12DMWfwKVv3RDDie2SELfn1FFo6XMYe6BXm",
  "key9": "aLZvmSRZzHu2wEsuCwkyqBiL4goZhcE1WFghQSt6ndwiRZ2CVe2xRNt9mwD5zS29a8pFycteAP9pM5DMGFn2j1C",
  "key10": "3SPbZoVaLCC5uXuz5vCvUTXuwB4pjmxxVdmHejLBpJjwegYNcS48Ko1nw1gsmFDvzSUoBnyrMf9ZzFwLitH4rmfV",
  "key11": "5qA7zzv3S6nxJwPpZrWXNvxHryuq2DhFScRaKBogctAKNf4nrqQtQMX358ghmJXstTT6UL4oV78QAUBhfdsUgH8u",
  "key12": "3wUmUrmgiBbonwXb5eryQvm3FfdUYns7LcNmbrJMzQ55pHJMLjNVGuKNh8FiUTcyiDRR7jCGojfCcgiJzeWkhmBs",
  "key13": "59FnPuvbF2pNRD5QfFhCzC9mGbxsugHRb1VeZHFEMqqRFcSNpWE5Kamixj6br48RGGRJJgpkSD2jQatS6E1hgLNi",
  "key14": "T9WPQ3tuVqq8PzPDNrtK7vECiE6ou7qssc5HeujhsuScPRT2Jo9YYBWqo314npoBG6DG2BM6SBX1owNpAqKJzkk",
  "key15": "4p2AC2YQGsARVTYoRTsry6gN1YJFRkcE8oaBN2FBHCtfzT97UCxhPTcZkAw96iX4igdCyceQDb7QLQiQgY4FL9DT",
  "key16": "23EamTCxEHipscsgMoxX5Pub7gUKjCJDcDizMN8n7f5bjyrwaW7jYYoeLQ9qBZf6T5WmLytTPAXRBJbTWKoSWHc4",
  "key17": "5rLNGYowj5jt6fRgPiK5RsnTtFB6FxnD5RfgmdJu8UaGGjEWuBvLEh8D19RqWHNqCG8mUc62hVgN45wP71pWQmpD",
  "key18": "3AQEnTmR9MRyvjVHNguWw9rHG3ZvQmKTpv33afZSrAUSWRnJeYKHE9vsNKgST9gZFxaqVFGW6iQfwFnpiJgTBUNT",
  "key19": "5qQBgkjLTUiABojiMkBSwff1HX7b4Ci43iL24aUYJWxh4CS68QoSYR3R44f1hdgKRbFHXdW9kHxiHJXB6M95zZrf",
  "key20": "3KtKmekRZcDfRXDmzFJUe5djvJ93P94exJStd8oa529Nyx2CKCKNETsUPkMTo424vaVVsZTRova4MfT6U7PsWFS5",
  "key21": "3Bn6uEWWM8ViTnYWH6KavdGXG2B9JTRu36VEoXAywrJ6NjAyZjDD5wTZ8vDLxdyZX7PqYJhB7NBAB8G61jzzCGQS",
  "key22": "59UR3mfHQ5tHUzsj5g9JK3VmzZCFJgqxHW37qK4U1PSX2GmAxhqkqgRYP42Tj1eE3NrLBmadodpGaC2BojqgzGdC",
  "key23": "2FeJbepgggvg2BRk2rnV65xQyx7hg2q4JdkNuEGmkQuwAVRiNGKydAn6Ce6PQAKxPtS4hVYm8HZVXZzeKNz2cSDf",
  "key24": "D6pUJ63JtXBDcuDppUtrxokqqApGwwXdQv3tbcoT7J1XjRRgp4fhdEVWC7wMRBVpuWNY9aUxAcF8KNBgEDRZo1M",
  "key25": "A5VLMmPsFHE6Ct3dFQed9LgPw5Jmv6KUxfCwEZHjPUKxqzSUYYrgGq7d6BUBqjHABckhPngzn8BZcFMubYeT7Dz",
  "key26": "4oSnoGAbSRjVt2zGTzRDkfTi9nyezGEpMsLnL6uyPQYFr4tHzgTGK2tyvoAm6QwMCSrixbKkY8Fc28ApD5uNRCCT",
  "key27": "3mtQuCmfc2PsxMauVDCHYfKwuAAbBMpfDRDcJsmtXd41VWJ2PDmPQN4AQohJarseaAHck5dcb1mY7XXT8ZuoVNLT",
  "key28": "5XSjCkkRVEJ9W6umgdCSAXuwZ8PU7n8d2c5P5pKaH5PfSp8wNMVJyiQfdf9KhbFax5d8u8G7gRYrhhkfAJ3Edogk",
  "key29": "3ZBcWQaoVi9wvpnHBUiGQH4VzsNF6ZBs1svKLe3yCA6DGaB1VX3nNjjfudaDLR2ZgheC1ExKZVySfG2rxaWzdKcM",
  "key30": "3F5UJu8k1aNo3uv1dRfm8o6sRxHyUsWRtg4rkk7EQAKp84wpyHxPA5dr8uHQTofjWF9sD52kqiSqJmtakoG2e3bs"
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
