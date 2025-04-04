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
    "3Goom1m1sw5nXtkKYn3Pj3expVTcb654bircR5e2fZgdRS1XeQsbhA8PKrfzHLWEkqRDP7p2Q9BuSKQqvrrGzdwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22jkhN4p6whWd33qKRDWfTjwkqStctwpkRz4PPFxdW3j2Xco2cdtFJmhaqRX1BXLxWsvXfTK8MQEEbhjb3DynYU4",
  "key1": "4XejF3zZgipZShVFgtkjD9PkfRrhxPdiCkKWvxgc2AEwJU39bgWrKyfW5RdzTHRM9wdE7mUA2XVHKunFUc1uKd31",
  "key2": "2ddCbNi2gESXkwXwEMbN6szjVJPfq2uxghFggJD8y2u6bbjYSqECaagfykvfhpRVxfVHpSp7qWMVsTTbNWS98aUD",
  "key3": "5cwJHAwXJRobHuvgjJ2GXFEuyei9wedEGKUXS9L6yFWxong36UXtV9sUzZdZ4UjPQuW9bq5prRN3ABCGBPL1L46",
  "key4": "nDzGaGCUMtT36YaF6Zr68UCyqT5HkwivMagfrw87uGwc5cYvKLLvm16ZeGSxjLZBbAZJikAmikPdNATkipNQPb1",
  "key5": "d2PYLfLjzbp26bD7CwwKF1JPpHMPWDTonMcKMcSJfeJNHh9CHHGXecUeJT8Ewcu2da8wvnAzbTeeQbYupJ7wSju",
  "key6": "3V2Fy7ejk6iUyYocyhdQxVZmX5pQKRnFBkZ5zCbMgrPKcoRhATdm66H1acVAExvDPq4GwNZp5hieRXFKUfxdXU1T",
  "key7": "2kL9zmnyQy9hUp9ysXLtgHjpERsHL6B2kKfE6KFpaCkiLmrDoPUua3n6MTJMh2eEiWby7dfD7q7ygkTscgZReGY9",
  "key8": "5PwCGKhk1eKFrDSjkNRd3ALzt7zM8STu5bzQDo688uQENiNp6kE7siQx2aXWeXRhNkZHqRH5gttoavQNcyCSiAtL",
  "key9": "5e45cCf7iCT89f2YLC7LH4EpvVKUbcd1BQbyT6CDgTVd69U6vngdVR6PsC847LvyVS4qxyaKprBtAUjnWfGoULbN",
  "key10": "2wn1eZurqgH5dcMt9A4deUnpGDUDEfAQfbn7bGcpu8R85aJjtKNoCB6Du3ymP4qSDxNV67ZeQaTpLMK4hoXkYZB4",
  "key11": "5a1e5Bm7AzxnHbCZWk6Begoh5p17BUNc6wUNwFxERoZK6QZMvpwJQNE4dgfdFjNkT7AU1pNLAGAgHJRsxyHY87Cv",
  "key12": "3pNyCdeYy54kBwevsh1T86AWEEhuRyWYtc4vWgc6t524wUEhokD2hnZbxNepmYTJVgME7wufDuWoX5tHDdAS71vd",
  "key13": "5rcLM8XkHcyuF2BmhHtdfDzxD3BZeX3QR8xYYysUvdHPfbKiK9wjerZb6qPp9MfYXw9MriDtiwDnVqbcFe7BwcdA",
  "key14": "jz2tkQetB5scRNiqFPR9wDGsSWYwt9yKtX8cSTnoa3hRjGPA9sysV4uLm9PPyM36HZsCAX4A1xmv4y9krPBKUfx",
  "key15": "pjK3jTbTVGNDwPrdsRgkRAwo4PpwcpqCkdMstWJWQLrKHXf7yiGZQfSb23fd9rrEZzLQi2Gr3gQCtTn9vxUiWDH",
  "key16": "3hprEnvwZQDGLAjjXbcf2KmgkBSrV3Nf4gvGqZ9yziGoFNdJoxdAoZ2roy6KmsBCktvEbMZfJYiDpEukYN53psaD",
  "key17": "wnzMbn75nThuSmaaT95JXjRYwKhky4rfK8pfXNaGGqNDmZjJUNXQHfYRnECagWi4kCT6HJKt9TaBj5qsTLS5mqY",
  "key18": "iqhbcs3ye8Hvdsph1qPERvQsFHTCkng4fnevhuiQ2Ts2ZycfTXPhLH9CdyS2uzziqMerPwKAuZRuRP6VfT1rb8n",
  "key19": "2JSxVZ3erGVryAornnuEDjTocWKmEjrcRX2NMaptyfpYug9w9Epy9jTEhGt1g5UCFRRDK78jxq6cevUX6WzYsrhC",
  "key20": "2tN4CocnLwuXBvSfkot9xGZHzjAhn7w6vWQzz3M7nDBBQS1vJGm7n4KqiU8VjwrBhYMdnqPKSsv4XaxvYjGTyDan",
  "key21": "4vCqXmdsA5N5m9YiB8XzETeFUPVJErB3Dv73FsnygqZW3FPrWk6eAo2WiWPqVnLDQk2rTLxv78LxdEt94AdSuM3a",
  "key22": "qfCNGyvz82ti3G5GGLXbmCkAKLuBwkVW7RnhCxswBjGmoFJM5KHZiC6MtP91DeZREXATYk2XpTjTqwQEEYskC8o",
  "key23": "2qU6zV8UFmSQTZPqaU1n3FWyJ5zTF2fWyBtX2wcPBML8CfYauQFXFN2RA7SiuDKHBQap482713wqmdmV4eNnZoae",
  "key24": "VbwFCzRtxQxwLhqg3k1kNDMh7JiKNcvzGywPU3XZ18xGfrdSNBWLz4iX4ooy3m2eDQn4q4VDXiWBRsNWsmNkTGr",
  "key25": "5UWtBzuSd1MTsWFmRR1ckpgP3zUKPaaYoUwov42xm25JNSeThqKNSbxmeKMZ33tygapYt8c41fxxjvAui4cQoeW3",
  "key26": "5KGFNSk3YcszQsJnWfSjPYTsQbJBnjm1jXzS4sL8yzwE7vM7MduvSwuh9S7LHGcRfYfyKzYu6RAxHwiZXeuMMD6c",
  "key27": "5gVk8JGoY3PLYi86oVkSfjmWyf6vztYjSntwzcgbkWKemyxyzAodf5pTujxiJpXbH6QVszysfCEAid8hgpN61Pgo",
  "key28": "3W7zMiRgceM9h76ipBk97MtpsUKVheox55D3Hmt5rV5H1ne5BuazdPmNKpA5uYYvhT7BCfNxGWhVEJWbbK5oYTuK",
  "key29": "27oRiNcioSM4nPmMjSFrm1QYC5UwqRVJHRBvLWHMQbhmjC9eWmCuH2jtrna8MRKx3imHwt9Rr9paD7G8jDWFsqcn",
  "key30": "3w6bouD73tkFeWGTU2GMZLg1uygi8Qgzw4ejZeYFYRzdP39rg9qXreYbRsBLT8F7MYUb8X4mHvvbSnfMbSq2JZSN",
  "key31": "21n17G7Gax7sCubpQ9VNwNDkCN9Qrdfaih9ehvCJWKReNi8TkcxxFb8KKZUxkT9mzkDZWSLYUtRXqXXzLTNm9ZxA",
  "key32": "5uFrB6gTCceYpXHs5bCxUtKMgNAWevqztEj6Qk6cTkj3Zs585rRS9t6yPYPciBJdiAKAc2KsSGiiESK8huFV9r9q",
  "key33": "9qzk6bKffciZZieq7ew7U9Up2TJXGe5uetgwXHKB6kvGtxaXcRAKhnDpnER1yXjmVYc4mUySskVDVX2vnwcH7Cy",
  "key34": "2TFhBeJpinHC2y9Yydh9bLtKYUBFfahKtTUxqcFPKzYkeEjsDNUYrdqWmjxwteAKbX8GZddTwEMP9k7jHqoUXrFd"
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
