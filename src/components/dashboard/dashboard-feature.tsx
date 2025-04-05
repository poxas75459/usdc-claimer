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
    "5J3g5dKqnFuo5xxV23jsbuUgjkSK4gWARJDwdftcbRnjaVRnKob6MkGkdYfH3kgPX7YFzXUj3A6srw8tExdrY9SM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GCPqQfcE6FzNT2UqvbjGzwaC3dH4mBVc3967JNBnUvEFJL5h8spr7Vi94x7wmUv7v74X9iBQknvpQnW1vuZ7QDV",
  "key1": "5HHCXAfPoUaJ6zRuiyxGgv6QB4cC3r2PFqWND4YCff8LeYjtMNcaAKL63e6kdtda166jatyrXuTUZ48no6dXAYpL",
  "key2": "LcxHNK8fc6EAeoLpnPm9MQimUe43VTYuPEtq6gg2eyv4c16HhaakEGwydHHskyh6qEzHuQdeytsndJDqQVH2qZs",
  "key3": "4x4BtQs1w9oWS7s55ANGiegmY6evDZuBUwFoCRz2N449L9jDtnLfraLcTnCnbJsvAAakx2Zu3C9EnQRhX37DFmsj",
  "key4": "3R2meUGjTdaS5kCdmmk3XTRbAN3eWFhvbYJmpGbkahxMhQruiEBQtTrcwGHzjFRQdT4CjntbkdUyks41cJmbiRTN",
  "key5": "42NX2JuiMhrYmL7xRiH4JitxSmKZSsvGXDVsUnrSSjZ9Hw7sXKvZK6uMRh7aU6e6qDPESdbnr4XvBcgkozMPkVQ4",
  "key6": "4J95wAqM7dGPvi7swSGUWUYFJQk1WmubfMoPJGVrdf6aSdHwPKJjMXV3hSHdpHJCwCFbvAUKqoX1in1quFm9vLfi",
  "key7": "PXRrejRT6dbaoox6R6AuNEviMiJN2k1UAkKRKSXKp4tmJYQepeaHv1eupazNYu5Bh5aWMZSLJa797msMR8nVL3L",
  "key8": "5h5xKp3Ent7KvqP49z6UtubRbnDH8P9nGDB9FGStE2AMHSmwpDUoiPPLNV932XgnPVgt5Eg88evVVmrn3hbbuFoY",
  "key9": "KMkHsaDWrrE7YAnuquZkunCkEbDQrhuwW1e341hABut5MuoR1Lspv2vkPSHcYv6yoJUwovcUcrJ7CZ5mm3KHUh4",
  "key10": "2WMeVG1rkrPJZ31YMk1bqELdMTNvAPseyv9dmGf3Sicc3hUWbKufogUrUsh6putvhxBrwvsPKPG3bf4dnPejgSS9",
  "key11": "QBR2F5npBqQ8qmiQV2RgKxc1RQtKskXN2cuyHAfVqDHC9xW9QUaWye7t7Bpr7iAT6n6qdC4VDdRpWViaGAYwfye",
  "key12": "3RSLS7XCSEj6RaasMg6Yr9w6fuJ4gs5SG36Pm7g7a9HRVEZWJp9Dyci28SLPeKZXMtUeurrMqkNLF9B9bA8fvKhw",
  "key13": "5vY61CEn519GG28QBe6otafYpkenNphfnZ6TisJquQzYwyXFdSQQNqNv7sWbpQ7Fa14pDezJyebjsg6MTnwUHFJ1",
  "key14": "8By6RRxNM2J3c8HdbhuC7PdLpc7b1rGZwKqnfozHKgcqyVu4n8iQcZFv7XfT9cQ1TvdZitRfb3ELi1msg2juqtv",
  "key15": "1XAm11hfAjT49RHfPdfnsW4U3r323rXkTnaTn9CZJ9BW58axcdkRkwxxqEnXq5vCWHHJ6TvWznghvWHsov5FhiN",
  "key16": "2jYbVCEDa7NMe5x3qaBY3SNEGeBMsuukEEs1LWY9hN3TwZa1kiP3sTwouLRRPVT9NKEJ6sY8H4ZC8Lq4L7q3EWLx",
  "key17": "4grGbtFLqbAX7YNLk6VsDpUg6c1xfKf2S6TQFz7xA1DHXb7CB75bHbDLwFck3AnKpbPFX1eKLzgKdCbvkX4ixdLh",
  "key18": "27AtQHTEWUL6FskPUEBKyEQaSSzGegNymwQYgdBnUGjM3Ao2CFs12zvpD16uHv29yzmorrALoHA56TYEugHuvHMM",
  "key19": "52a5L5xpui4rdDeQ3BYMuSNTMwxa3XbsWdBCh6NgAMvA6GrYG5wQtbpgDB89i9sbx8bQeBtjaD3se4AzT6AdJsQQ",
  "key20": "2KV3t54v57AHpVBpR6MxLjJ9Pv6JngkBSUucCMGRe5Y9DnWBDV17dA39VuieNjoVVrzyyZWrTwnWvFkr3h5AQ7zj",
  "key21": "3WKyMJsdjnd5czna42kYGakijyCn3MG6Kd34kNqh4GJnYwqfuX4EVUuY8TogSuUMtS49jw8aM9JUYfRYZ4io1aqE",
  "key22": "552pVsZrPU5GqRNsGyYhAiaQynmaZA3nBo4UqxYeqZ7hDnNCxMaNuTiYTNqQjddnxKw8WqRjeiQyKbUbcd4tF9tQ",
  "key23": "RKiTCjrpkGDmuSYjXwfttyY7Amkk1QNKQuELcKdKMmzqNEcsVzQFGmBwCJ2pJ8fzx3MYZfmuwadZm2WxHGHWnfA",
  "key24": "m5gYqSu6WEQiJLwYxaJ5ZJua8AWqqu9t59kb8f13BgcCDxmc9gvnUVvRFdAXXWdJkGNT75JtmUwV2qLCPXCnDxn",
  "key25": "XVWkNZq4JGjqPdVFDNjSTHrQZXLg3oQ4yiuy1gav3HmvtHHuUtjvdcASUTYYt5LcFy6tj3ipyxqZJU141EhqPbn",
  "key26": "ABhTwB9eWfEJEt3pwyyuaaKBgceETycMGvYSZyrGPLTWJGXpsyR8mfcKpftChvK2duncyRQyfdhuUMX2dxbvSCf",
  "key27": "49bzRzVfNEKSCS9xcSdam5NGyb1Evd5kaNHuvpBKCJxT9zR9Ucep5iLRMT2o6vyDLu3e41nAtnyAfnFnfUZY35bv",
  "key28": "542gzZaom7gRHzbB8w4kpMcUejNNEoAFAxLmWUbjijcgvJervAqTZhyhPPh7wvBgR9Rjqf8rtTE6SMj4vS7fMGiZ"
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
