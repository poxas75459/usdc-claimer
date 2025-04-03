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
    "5eyXK8YfgteoDM85WDxBC2AANiWKYGERbyZdQokcoqqG2qb3KUMXvDafGrsb9WKadcddR5mPvcWnBhTLB91Kc2Aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HgU9vittpp4JLmt3G9XVh5wBPdk53ivg2nEzhYMvbfQKotCgebC3RjWP82xhmfDFAn44f5GXveVKMewFBghfBR7",
  "key1": "29prMYQkhCo3rzQMCT6wMWL96YKndshneFpZAgQDKnsE3DhSMLdWhxb2J6AYGgEfiD7C9CAnjne5GN78mDzk9q78",
  "key2": "5Qsgwp562grTDR8sqGUGRSixHoHgL3YMRreX1gRDYndvGnKpd2NF6fw1ovDutVvvvCRWJsfcHvpM7X5kEmPyvkUn",
  "key3": "b3SRhae5QDBEAyfQnw6vjXtpMzgSB5HpX5cFdW4sx6juk593kfRSnMSLX78vpnKmq5TQ47D7H4qxLWFvQxhud4P",
  "key4": "5NQ18N9Hu3S23jVguJMmqk2AJPKijnuVRsKwvndX8FYehEppptHgAE5g19kTV8vpojvNUnwsQSdkTMLtUDmJj9WR",
  "key5": "4YKHq54ziUdnAnma442L2T5aHWYaRxdgsXKCviMxVCcEY2sNwFCjuH4PM7Bv8rVqWxSj4K3qiWHngvw9dJKFmkxx",
  "key6": "2rPhxt9faiqeDxvnLfd27LyjZ5WdJ7bFXP2y6moVMFABB8UF8x5s2ZVoChBeU76KapJxYYiDWhLsmwEFiDwYnZsB",
  "key7": "fvnkGzq8ndqRxNNKFByYCNJyKihePGcCQxrZjdDkGUnPurtZi1HMjUqjXgAH11xEJ613D8MmqTfq8M5n8ZWeCWV",
  "key8": "3LyMYyPb2k6k1pZ77eJZwHSfFUmFpmFnjk8joZ9oVTZXg9BxZm1Mb5LxZbkGvqbugLJTvE1MmePWsjjS1NF8DKYD",
  "key9": "XMGD1K5aX27KQWsKWz94YL6k2Xp5ySZBW7kjdNno7ivHURV7AAddRZNzAn5D7BD7RTaqbJzTfiDEdpjRpRntVVd",
  "key10": "3dERwqK4h9zCKsBzoEJbLd5eFRNaXrqBxGBP1CXb1j47Dng6G9VNEkPB3dWwFikArkW8RpsghtoDAgb7YdCnJFJk",
  "key11": "3oLpGsMsGzc5dhuWSFUWU16eWrYQzByrwXiUEbGJofE27qE9WqCZ1ru5LRbQGEFyoWfjk5GAiDKrS71UEyx4PD8y",
  "key12": "5wSrZsegFCWN6MpdgcgMZgdRwAptXdfvjhWf3i3Rq1YrsKLG4RJqSKceyMNuaGyCN3yTf6pwgDMyrMh7WgeZkSGc",
  "key13": "3rBukEtPo8UxXp7BSmEwhHu97JHr3j9vnAA1W5xz2Uoa55tZnd7gpP5tf43kpBrVbRLnA4xTeiPL2M8ts2f75NQm",
  "key14": "WAZwRbWYBc4RfhQ51XfGgajUSBTu2r1r6NzZrW6UvqBn8ak4d2VEf3Km4aop4YEZCrAsqwojkMVtEiB89RSTxGh",
  "key15": "27TGYiyLsSDmhX957ciaT2MaG2arqXWprhjgaSKyrmKpYa8CGPrGvsJhQJSNZ5fmBaY931hXZh9CwcrKPGKxvqyS",
  "key16": "4N2B5UEiYVzNESF66wFAy3FRe2sd5rKaxQ3kMgHLdTKRFuWPP9P9Rat1ZhBPsHj36egQtE2dvpo48GZWvcRnrcTH",
  "key17": "56gntjcAfZG9EcjZkqDdNRPYjV4PGRfSaHr9bq4JYfavxWj322aWEYkh974WAy1yZeVuw6s3PNxao5cUtmyzBSoz",
  "key18": "37TG8qa46Dt6vc8Viyah7pV6LDFYfuV7jZdoJbGwd1iF7vA6EwzX72EkMQLJYxnJx6skmS9qZUEQzjaPDzTQYUsJ",
  "key19": "2SXU3ap6GNgbKJ3G7u4zZ97op2pWMFpQPRgQANNwMEDPqtCT4jhv5WAub6qQ4NExqY2CaC4UdLt7P6azzgCmCJAt",
  "key20": "2hjrAFUbf6eTufgc9BL2AmdaMg35b9JUrrL97c66T3BiHwXRuhRZZ4WNWThNd7xyfteN4MwCsekybwApFqoRHWdV",
  "key21": "4RHTK64wuSA7Q8KrgBBqgi7FarM4Lkp2wocuj7o5YboYvRK3ex8dkQScjvpkPksLjq6w65HrkPdYmN4maUNZjYvY",
  "key22": "3rVZ2g1RNtiKAcCH6t18bn9g67L41Xay2abe3KzN37ovVM969RQChsz4ZAvY6RWRxVyZidvqY53EkkQjy7SMcws4",
  "key23": "3HiTUckhhdNbkVcqY1WvQpMFf8q6aFGPadX1HN98rn6eCc3zyEAJ1A2kwq6RJgDtKZbhvVM6m4KMNbpqMYz729KW",
  "key24": "4uPx56b2FysXKDsnFHD8UmsvEjn2anhTRCzmcXd1aMMJnuQuQRFM5jyqEacLoE263pGj6HQ6UZ9JQBfDhRQQm1rQ",
  "key25": "4eL1njR6ZKULUp3kozihGBC6Wy6UxjCWqJZkoSs75wKgFxL46YYZNJg1dhPegaJfnAAUqZehY3fHTpvkgvBxbpgR",
  "key26": "5jpSFLYTDxY89K8gubhpmYgsHFCkkNDfupfDbcs8sDrCVK2dVxLtH2KH1HcsmvUfHUYixzHq3amomW4xQERC5tSi",
  "key27": "4U7JoyBvLYC9bFGTyzHNm75hAAhJ99soxPouRBhgtKHY6m72XFsyQiuT3aNCmbSmVJyXhVGLjm28FoCR4ThxAi8L",
  "key28": "2yX8gmErvJfQjdSFSeG614MX3Gn4uNfJa1CF8c7BRU7ffphcT975xyFHhht3z5zeqFJbGRYhCYa2NAmNitdjNg6Y",
  "key29": "59WDHGmfvoCjWP99kkDGrgTdjteBg84ZAVXikUjpUYBqxcST8sWsonYYbFrVfSmonwfh7o3GdH1Htop2uPo2nUhj",
  "key30": "4hWXu2iSRCYo9rdSTn7NMJKRLVbVgZG3UbsgNKofF8aHwFv2ZJmPK3LdivMK1SEWfQA85C9F2EmKnq4HMRcBBV8v",
  "key31": "4NRpbr1Hb6v3Zm9Bdc6whWaTmmsRTaFq9uK3V6ac3uSmvdWE3kbUsADbKbin7ZWGzn4XT35QJseikidinFjWG6JW",
  "key32": "4CoMKp9n9WX9XFRNwZ14fHLgnvYcZhXFEucorokbkrmLEMyzit4ccSP7ymaYnov1qa92ynasyxNFQq6Ms61aGvt7",
  "key33": "65ynhHJzpk3xkLs4RTXsG9wrbrkhwDYPmxGcs3mnWUgk1ujEqeDp8BUUBYaG9KaP57Djh39qPLsqeWHhobUY9ATB",
  "key34": "5irMjULj32GreApLmVisG7DDZSwVQh4zyfBrHZtqFm7Fi5fxbwHsDtmvSZMKPjkD1JtBc4D2R2d9Dr5Wtww4TZ2f",
  "key35": "4V6yUZBsuNGjRwfULLB6jvPtHRkJ7H2hdQGWAWGpufYKqzH7wXA3ULkesHGFTjS4R4idV74FdAzWXw5DmvRRwu1h",
  "key36": "64oWQVcBtzSyJX58iTPo5oCRJRQwa2Lu4aMc7J92hVTsJGm3hEou5A6QH7tT9B9HKAZEkYvQP1V15P69X6QWz85r",
  "key37": "iGdELd8TnascsY7W1EhXQeJPA8CQu4zp7Vsu8Q2Vu2guRs7xUbF9VeSWSqF165wg31BZs6UZjU3Fzpcd65zsh3f",
  "key38": "5h5F2iDTfRJEMG5Q3Bo6JMsu9vtkKaVcQD5xBDvRNeMR9y9vFkGLN4Y6kCChhxduFoQ6d1rbyZgDeUzT6ZaNG2EE",
  "key39": "49Uay5Xk151UMcfTAAuWeHmRhNsGvzimNKGaL93DiXZ9jN8CtGjNgNmaF2koxMjWmmVQ5gu2Yr59z5QadcotYRbV"
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
