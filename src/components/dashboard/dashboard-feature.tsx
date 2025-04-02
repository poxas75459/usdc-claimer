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
    "2VnPQBHV9n7eFwPRq2QEQ1hGh6bdgf8jP6X3WXLXQ9Tw717Cojcd9bHLreF4BgJWNo2BiawHuBfcnkxZfR9zPELz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVNBmY6yYunCsDNc3425bT4k2JZHDy8rtTdt6pPjB5ps2wftNZcypmbXsZrnzxmVdzyKfZZ8zDRZaaVkNkYsnog",
  "key1": "2dBqnHvGrz5dWvu9HvQpj5R49dA6EFTe8gE1jxwxyNR2CCa16LYy2EPUNE7ZnZ6fbLkHoLZQ52kTrP1TCaTZksi9",
  "key2": "44JnepwX81AEgJmE1UAnsRHXRgAiFFJfk9Qn7kp3zSYGo8YhUp3dJT8m8Uez8m44UZ7FAuLggzbroXUThqti8niV",
  "key3": "2hFZmR4FS9z2iEeWRE4LzScM3L3owhAbLFRyv1RRw3rLVar7pg5yEbgwbZkBdELhqKP6fbQuhaagBA6aJjb2Ajxq",
  "key4": "2wFrPg5Uy2tunuuRxggfF49mwjyNmzz64PxsdpSBDjpsXrVJgmikTG2ipCLen4R4YQLgM2CHd7TTbEZFCrFXW9TQ",
  "key5": "4JaYZbP9EyKY3g7tQh3URn3c7jLktBNokpN1m7rd63ANvC7xgQbUAgCwb2zqC1J86p8Zr5SJQzomKC7KwkVnY6SY",
  "key6": "Y9CWnhS7nS9ocbuzfMi8zhtosudrWypJJDUixoZnVc4P6uog6ouM2S9AZxDuafW5G1XgEQTsqoyq63KAPHLb7os",
  "key7": "2Pbr8HzKep5F3CRX2HGUioYdirHRNh4uudaQSTEE9hUqmEYTQmeQ4YH198sZa993NX5BdaT4Eds47MRSr489XGoH",
  "key8": "511fgZBZQTPC2Qq8TdT4PnxnPnyCVcM6iz91vGSA9V6aeEkGcKDswcjGi6ppMASH7xpkvFetNtsfLwWMpEjJQz4B",
  "key9": "5h1aKMNLtNLgg7fEGpdNRS5NiMATxe4Sf5xUNGPjngSu7QNQaR57hkHJg3NpGkYPeRKrsX3HY8xUBDC6wy9MuoWG",
  "key10": "5NTt4wdW28EsbNWGvXS5rdWTSyKHStVby7mNTTThgT3XTjvxmZggomT6QHJzaHQL9ZetD4mPixbxaCjQc64o95yQ",
  "key11": "5yLoFwgHSGpxcP76yat2FhmsQSh4y53GJ5WpVa2oHAKyQRr7Bu5JXMAWFtMaFCWXKVfLkFDG3Nj1Pi1amq8ZHXG9",
  "key12": "3E1jpy3AQfv6MXvTs4ThXFx5UA24hkni4DjuQ5qmmSRjoa69q1PbYiAxa76XUpTUaKXE8bWBBibz4nVnYgPvHJN8",
  "key13": "24LcTXCdezjXrNDpeAey5DVjnnMe6zAg4K4uCxsVjVuJ5rhqA1xYUkv1vqzc8bBbBcRDRpyJZpoFdU2XzjRNaM7H",
  "key14": "5VqLUQTYgaiqG1yAdoKF3ZmtTxXga4ZZ2oDQPn2MKmpnCx2KHbowpTsRTpRof7kLtiukVY7otJsFy2j9Sv2LMnWF",
  "key15": "3d5kzYgaCw86921xo5kXYZ38ywEDfxyx7rw2vjWiMMvJRDxeajBmLSxwM4yUWwrMtzHBh5o3mjAEXsiyC5fgWz7U",
  "key16": "2mVmXZveCdyGoDKaUeTAfwuLYDroyVv89fsm5nwKcXwYhkiYr9DHKboQeG83o5xcYKnS9phoZCJoD2aumVVibT87",
  "key17": "3szZ1AZLQvpnYwAix8mr7Hx4iG5TmUovdhgZbSLtzxswh5Y44cf8XJaehAVGRhGPmdr25LXtj2wUA8nA7bJazxmE",
  "key18": "4BmV9Hi3rnQ9xbUY73yMjDmrXsL2LHr8NxTXGxLKHwDzEQDuEHKwFutqTDVrzXvKnyKeiyhLozf2HBV4t875jau7",
  "key19": "nmyhcpHmJCdrNTT9NynNgkf9GeRWvpruDSSemezQbVLwQmo44C8SidQtMArEBGgr2QE25pZugJpymmZDgn3NYEf",
  "key20": "3UvuEeQQTbUu81UhNTCp5MsQCwyAiiHHqJMaQqMmAzBWV2h66YXnJwS54kmyT5woiFdSW44oAzxW7t2EAQTiL4Je",
  "key21": "2ozU9zGA3ohouuQTKB3pSzwnzS6gL5azWzqG354j9tT4VCkNxtyEeQYwk3RrBGa2Zt5H6etSGJNDuJLT46KHW9YQ",
  "key22": "3kwEjhXp5T2FYC3VNLgoHMuXEoA4VPuzCX2qdHdqC4MpZNubwCBrG6T1Dp6YtQzg7XvsAST839itEsi8iRFuqmfz",
  "key23": "5aG4K13oKS4ANXPjcvaRe3PqYF4nEs5PcQWJjHTk1yyf4VZGKhS5YcZeKDF6xSZkgbKmnh9BYr3W8ExS7U8D4yoW",
  "key24": "61rEDj8aaVpySbyJH2XiXTWxGk4gyXGMrpge65knuwhYdbQvPBpmHdzPm3iXjGyeNnZE5DzFLBGJRCVfgWZVf9dZ",
  "key25": "2hVoPD6A7RJZFgrovZ3cw1XMWmk7W9JpE5enCZAoGiD2qZvFGfv4C2iqjdpwcuE43eZo5k7t8JodCNfxEEFQ7g8V",
  "key26": "3dK2etxEgJToa9tFBqEWLLeDyoHjKXJktTFwZ1jAtbSjBbiGt2B6qLpmGKXq7J5AoDLG5N1AyXrqpCUPcQP4jG5h",
  "key27": "p4TfV9UmkdovbB9nv2Z8hCejyQSjSAZjKgp4mkXSEVw7PqsQuqghVuHc7vodaQPpDDQrgHrBYjp5pf5ndfdLBTX",
  "key28": "DrAbH4Y2ZTNjAjELB352QGtLFZgTGZyP4rK9puSmhS8fTSpF9jxPb9oaZpKzTRCwM2nu1DiAhitBET8AFePdnns",
  "key29": "2sfb4Gb2LUzcwRkw7YJHETGbW6ktmPQfi89mFvKiWKWie9WwiBp64Nn1xUaoPXfi2yjNA6NEhiwNUFnRvBEpHygu"
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
