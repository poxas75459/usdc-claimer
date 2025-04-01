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
    "5CnATpybpJyYsPJUfjYq3qVqewLNydd1wRjB1B5VACDqQgZbFFe9SGbd8WJLKxv9fBknCbtvnTZSWdj1hiKAgtNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LntDd5cF52hM3gVdqMJv6v7KQeuyVtPftdG7mRsZvJhtjrDvcGfqbq6vhd5DoCQtLRDJ2q1KKsu51FUSE39bRYu",
  "key1": "3P9Tf7yptcY1DsdKgribLADg1j12315gS2n3bxLbCu7WqP4kahvJzsoMayTGccF3XgWk2dZQDvz2XXE53exPRSkg",
  "key2": "wDiPiGv7ziaVMv1QfkoyzLZe67WXVToQe68fwsizPoypYpa8NqcdwRqp7QCUnd2YA3ZqUKtHQmuvpPXxFWwQ5xK",
  "key3": "21NhmP8vbXxCycTSSkNdHTT9MX2fsKBqEJV66CdeBjnmtdnSsE4FU3veEmEPcxbqLDs483H2WAV1F5cnNVZBaLFc",
  "key4": "2AnFMSbdkDeZ2R2U1AAWfzjBn1CFHVSkKh768sku38zLJcHdKhgDV5k3iy9gDCN7BxVRxfSDFcXFyow5WFKK4Rmo",
  "key5": "55fBiLDRCuJ7KACgRsijgLpSD9RTc3RfzTxL87idk5Yi9kJf4XbkrQs5ngtHKgLHHpH8z9szMEBL7hr9VVWuxdAQ",
  "key6": "2Qa3T3cmEyS1mEvoizdQxEWbXauyst5xv5F82kmYTQtB6ALGD5Vz4HB2ZCcEmx165WrwkLQ7ZefM8Q43TkRPqofR",
  "key7": "29tMD3ACXk31hwbGdTCUMFYeiRApXqmwkwFaL49Z7JBwzJXsuWLVLXwhyvFH4uhJFB55SkAwpq38Kmrn8zJKKG47",
  "key8": "5A5TBoMxmwSwvsru8pwRorTizHKrKvoH6iJjE7263eh1FgWgPpQNphiAun4ZaobMiPtdP5qNWp5Qj95Let8Q8jb",
  "key9": "5a3nj57unBu3efUW4SRCpPaJ7DmGQVWTZYK8Ri8sw7VZ3J1E8JDy919Xpmpu1aLYgnQxhDTn5opqySAJGdwSdjT3",
  "key10": "3hZpQUBX81qVUte4e7EgDvCvqX2RmbSyPEpWWX2SukVzexxVtdRGD4FYCAwJK6tQiyqJyCRmrfFpKm8Qo4VKnSD2",
  "key11": "3MWgLypCn1RsLFWDT3SZyK7gJZdw5QYLxcS3QoPwxV9JVLHyuEdGH6QQYkKWTa73tjvdKphrY3Zyv8YPAnCXdGwF",
  "key12": "6X2SZpbNNup4K62mr9FU4zydxJXqAnXSpXJsRQsNpYqp4E5EWuvS9UQwsmQXEMrN7BZYAF6JACtkt47LTNfqnak",
  "key13": "45aqNpKbDDprt2pwaQ2WnigG7jbRRg8f4PpjYRXbiN4CeERDtZz3UoZwqtfvtfT6w2VZz6ZyvXUf23RaZGqGgBf2",
  "key14": "ePJG7htzLVscYvWuuGnqVkhTKxiHjRJEpbQvY6cSLjLUigqQKgAgS97pyaytJirBqH6Jmjh3kd963pGFtci6Z4V",
  "key15": "5UjFo9mNZWpiYN1VmiH2zV3Q9TKo6y2fe45avWby8oJ81kGq6d1J88FfTqacMJtjZu4Q16rK7cRhFoJbf3xvz9G1",
  "key16": "2Ji6fv9HCr1pbuGZg5TVWiTWponxr4oBqicZZ2TBQX1QBF9FFQjFF3TPfiqY9yEe8b3uzqhBHcws5SaQfo4fgqbC",
  "key17": "4WaULWRRy3t2R2xJpJLbDEkuPtFWdyTnwzazEdYSvT1gK98WDb7pytjCja5QThFcJnaq8SEhg5vUjRgsh5ynLRew",
  "key18": "3C6sAS3hcYAHBt3N4D9AuyN5yxJP8L4oMSKNYMN3ys5wBdXt5pHtE1rVuZLBxbVGjxDViVZwH2SwzyqkbXzyM6ny",
  "key19": "3Fu2uFbamgnpws6gpd4YtrtBpDX4Kzd95gVG7AuzQuJX7bQkmkJyEmxfkyeZwfQGF2xRViPtyFY41t6xGoo3jDWj",
  "key20": "QEX5aH5MT6oePidoHJ17rGvXbvnHbMD6sy3Dv4jbiDecgtmN8pEhDXTx5RomXiv9kisDhnRQGcwbhMuw8En8bFX",
  "key21": "5cbtzR2JpLAqRiSSQPwYD7FfySC4dCE5R4i8MJGsR4rWTDQJRWAs1NHbKC3A3VJitAVf51wXpvVHms8TmZ8gXrUV",
  "key22": "4g2DVEotjmwUUrz8yzasX6Tmn4tAGR3Ft5azVCucdJBre8MQXXBXRws2Jk8s8tYkT72CnKJipVV15Q4paaVchHTP",
  "key23": "Me5MhkFQr84uVNmcdLkFnHw1dT359n2EY3HFU3yhEWNWgDnb8J9EMjEKancSxeHXgKMbZyCpLH7mn6cbV511Vza",
  "key24": "MrmC62WSkcUCmmDfsKSX7AyMQVrzFb4y1FhLrt4K4NuKxnkgJG55vWoQzpqDeBY6FEeLDxHh5HRBqLLSzTjHuBv",
  "key25": "3rCuZTfwm5bzFdXbDiZtyPJbAq2kFao2FSomRSGqNbMy4rgbDrCrJr5DZnUJic6uH1QzvBLwEGQzLB96gEDsPmBp",
  "key26": "3u9o36SMiEJJ33Synuv5SKb61Cuo1Ycbik2EyPcQoHJBShmZKRS74j4iBctkJx6R1DawKSop1TDT5A9Dm16M3Di1",
  "key27": "3XqcpYmXKpfB8Lb22ZP5YPE5dcJTpL4F8zHGQm1EfuSkkBkYYSy94t2Tf73Ljb1gaQB2ZfrWSCtxSjKxScsE3vua",
  "key28": "3jWGMBY1PLRkuMig9fc1cLghfAbouYNnY5U9EC8i9UUwaWGackfvv3vaVzGciNtzqpvR4hQiBf4xydYNE41bCq42",
  "key29": "5gDCQ35MCLvHo6eLy8rB18i4176VXcZqgmLbnqE9B8rNzBem1BVfRoxkwxStB9yhioKJMQo91JvhSkyCNXbDYA6S",
  "key30": "7yVueHbXwwHnufwVCTkmRbYQPoLqebEVhUBa9FxYuUK6sWQQjGHBoCFiWHrnpnmmVxGPAUGds1Xf6oVrsECssY7",
  "key31": "3nnSyArp8iCxvf46Viqd17cnnQbqQXbFPzMSVWqefcFJzYEurHv2QBqgrnXiZqgKKGivHfTfUJGfrDiQcQDEcfVe"
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
