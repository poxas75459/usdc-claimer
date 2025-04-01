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
    "2UjkrBDo5YH3Cq9yBmheoupweTM9rRxJMj5eQq9jSa3oMUjCPwdXMhjhbGRemsmotrKUt635z2SxNeAGqgnndw77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TUASVLpfMPEj3Cxf7dp5cp455KGcbkH8Zx7kLPrwCxFHWZYZF7BVKEaQY3BAXqpMHWFozEHRjSut7QngCm5s8Ag",
  "key1": "Axyto2SWszG9LhxRJetWYYtgL5ojQvLQ71svfo5738LsUu1nAqnqQ4pH7hog9kdRSFLPTcQsAmwF7UvQxaeyiob",
  "key2": "5Xk4Xg9eZikfANFwCoPbSagWEXTdU96mA5ZMR1dNWUUoZ3atZZbozp91aN5QnQBPWmwMFS3BzCDzNVpP1vcQR73n",
  "key3": "uytjdpfPWbqmmdhCgF3Udym3sSEZbnMm1z7sR3gWfdEWMmiuP5Pkrf46U1BHiYybdvU5aSoymnmzHAjnNQ9Av5r",
  "key4": "4auzEGSStdJxMMoyEpczAB2QknkDECfc7eKggWVtCB9odB88g1niSKmn2vba91DrE3nVSxshPRX1CMw6VmjAEiG",
  "key5": "4oCT3uYTPGatNvGjzkqfiCKgYUj9GWnCeB3Aqnyt5JV7YgtmcQxMND5jw1M3qpasbTaR5BAtWaU4yqweLJzCXbFJ",
  "key6": "2FTi6ofGqZcd9F8ppRz4sq851ukh8pnqUNcMhZibWvUCAX9KLENXya4ZkBAk11Tsxg6i5E5poYeDqPQ2326o6rTK",
  "key7": "2qozEDUwB4wDv8bAkVXVT4Mg7qGcJTNB2RbfYSwny3RCQoucpjVWcxBXrWH4wVjuNh45JA4aJhVWZ7fY82KhmhAP",
  "key8": "5RToqcBrgSEtkp6hyBG96dZyyKdPdTCHXiy4wt5QaykEtr1Djhn9DLzU84on4JorynA3Fz3YD6c6QZKukTrNSes5",
  "key9": "Mx6PKMs5C37cT1KvXM3dJxAubbPAfqYLeChEcHadtH1gnMsVc3SZoGeLYq1rktJzXWwcPuruprJytQ9qZVFLWuR",
  "key10": "MojmXPmcv1spPP3dsJABqQeW6q3gpejKwPxwBm9Bo8BQQv2gRkZCX67DT6BLzYhA5LgikUqU3v4Yr6eUAnrmEqj",
  "key11": "4ioagE1gkn6ziPSGxj7Z2UeFPgGT6hpxttTd48qaPmNLV3dovH9p6DDdEorZZDrCbq75Mb7DnCcnrLf4vkjXqnLC",
  "key12": "55hMm6NWfkBY5XbHNGih9NwbPF264UToH5xAhuTdh8w4arLAne4aDzQX27PrTobZ9vkEzcMrPe5bzkZq2VqzoDUg",
  "key13": "L6exo5oUCo29swKGBBMMJSjCRz56u7AgBug4S1KwGCaPXS5qctdBUqSTnBQnqYhdpW8VwT9gXCohicjxw9DPWE5",
  "key14": "kYzmdNxrdxHitXTfC2f6UY43vNerAsVCaSkPQVon6dZ8VYhHJuRjvtfEpRD9JmFrCcK2zy6MDUkXbfTBGGFAUkd",
  "key15": "4JEJHkf2rnsyQvJcoERVhXuGS25mm5rozB29YKDmnSRUj5vtawxuVSPnUkCx2a1RUWULezJg65h8zM2hrW3KhsPL",
  "key16": "5sViPH7WBdhZxr72iYtzvWua6qf52XGDTXRhaL2sffegefgRrJXLvV2L59PczAgmcwEFJtezqZRs4Zm4ao82zhB",
  "key17": "3AWBswk3atUhJsSYyoY4jGVqELxPooo6WUr32AE8d5SwKPpr2jzHoRp4Y2KdUc8scXvyHYPNFYrRrGNaqJJTuTVs",
  "key18": "4Y8Vk5qGu6SdWqE3arQmb6oYEbpaTzn3wcGHRBaYEUd1VpEPBdY3nUyd75E3TE2eL4Xo2sEGLLnRwy3YohSoFace",
  "key19": "2aEzyR7viZRQa7qpLtWKNsDsCBUqBUrYZVgLkVuBhJ11Z6hVpGKcFXpEh4SDJ2bZcRoACVU2rdi7UNa749YeiEUT",
  "key20": "2M7EzKQ8sf5bmgXfqXKo2SnBpZPqEbMzG5Zv9spSgitUnRHbYUbwSrA29mh4yepJUWiBA29NMTce5kCi1Er2aNVB",
  "key21": "HCArxfqZb2SEK1BvGwggpVbDcCW7PQPLk3pDFuY8JbjPxhnKRfxiAj6yAy58tX4TMr5orEJJSzu2TMwxGgc7W3x",
  "key22": "mdPHqYYJzUd716Zjijgu3ek1XpTqjguN333oxKNUscfX1McmRBQHuThJNGG8rtALNDaJpX4G5PGQY7X6BNJAcrf",
  "key23": "33vEVPreitxDK7bJaksvUze4cG8tb43ZrY6Fq6GYE5UzG2AiNcpZ6PPGnJYqp2Jxv2HUinmHJAZtfst2r2kJbfG8",
  "key24": "3JCjHXYzbWe6LRWwk27wUvsjAfEsA5DDK3NkLUvzwWw9phBVuK1wuEXHSkH6eDtpj2SGQ2Scf6Ww6mwQrsJ7oR4E"
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
