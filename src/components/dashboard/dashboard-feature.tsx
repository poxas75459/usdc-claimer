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
    "2VBKjzZS9wDj7ETtgSZyuHJ6h25H4HQfj1urayEupeJ9rKrGZRSLck3KjWJ56XHvhoS6ik6DHV4Cavxaegaj116K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Yb8N9zDKDwXD8ZrLQG7K9pBsADLYRsDKatCWjHF9yXrktdTRwecHfeyDmk2cuo62xsQsqn5MLy78Ao7jUM5HrX",
  "key1": "5vDZ92LcSAVtrgjkihVPmSR41y99m3eebprmg8Rh6TneypKdyJVDURYAN7ra73EVkNTeUNwQVXqDjLZDHDFwFNm3",
  "key2": "4kU8uyAKscVsTM27bG6vSDBvT8mff96Uakzp1Sm13g35916vya6TZrWLkRhABGUXDJFwgqRdFJENCZbhv7LAvXpT",
  "key3": "4JZXEaET4Tk9TNaVLUpZG17spNAM5VRVqLBmTPG1pfyn739kMazZZcXcWxZxYWbUGaFf28c18ofZ7ZgPHP3sXgiB",
  "key4": "3x63EviNKmLGu837N9PpNWrXPZqpaxUn8NYGnnBh5QgZEEy413ch5sag9qHzRKgaEHyCkY96QmbhFAJp7weBWDdH",
  "key5": "kgY1f5QUyTaNujFKdNUw1XQVjcRtVUpMpdD6dVeSsGoqR9v4X8RdwiWm4UCcScj4gT9UiPqN91jMzdMLLTDz1bb",
  "key6": "5JVSgVxcppTamu7nygrFNX5bVdXwNpwDnfxM7NwQXZd2fpjS7s2zoAifBd7EMCgSAzkqfKQNeYwKsrd7iGQU5xZt",
  "key7": "3T6UHGX66VufeiDbkT1czydfV9x5H4V94iXWwgSYHj8ZJmHZsFQWLgBCFGZvZSDUZ9Q4SPnWPbkTrTyGfr3JKNqA",
  "key8": "3se8HT5s2y8JwVfjQEbwc9HVUp2FYNxz58vRfJ9KNzXMwaP8qvXnjgz4VXNAmf9t8RZPrzRWpvKY6ULa4CtGUMiw",
  "key9": "3FEWGUQEfpLPdd144skf93okYxfFwKRe8Hj2yYuUCZMjmSSd73d8JdqZauKRmi4iXU8jQWsR6VTzN7fjYTkshGpY",
  "key10": "2xGBb3fj9q7LhtCtMnwQhcoLu5sD2dgXtJRPYPDhd82bY38LKdbJE2CGQupctvWRk5JJorPYitMRkdmGHPvAHRf2",
  "key11": "ncJRxQqFthSPBrvV2oKFXf6xNyxLodE9YJjHre7DWUkkKtmNseLk9HZFYJC49VnKYNyJynj4RgZ8ZvBy3xiCRFb",
  "key12": "36VNJgTHtoEjaYY5vDYaK5AvHPbw7ctjTciuGdgM2aYmA5ymtqjoWdanKaW73GJwYYbzNFk31NvUaE6fms5DVAgZ",
  "key13": "2BbGxHjq5JC7P33b9LEM6tKUbBLz3g9oDwYTMA3mohERzAuzQywS2ZyanhCactv1L4PiCjMRDVkcky3SgnV7UUkd",
  "key14": "3yNfSa5athR737infWdoQxkkWRTBhq6pZdAvCVq8LzagJhWWNXWrwDfd6TZab6Axu9Xd3dhdW8ZZpaXxph1uZASR",
  "key15": "3XjMuPeUwkcqA3FGZ4hGmDWDqnHgQ5pzea2869B7dgPqo6F85cm2ipjAtQMQpt2iXwHa26qLukbqGYSdAQGgZyYT",
  "key16": "4jCsHaUYwBD7M1SPqYZjM5zYqBWhVAJN3ujMzzaraVpo3CYqXWuYqr4Qh2eWHeiVDrqWnjefPtyPCVTSYRovR1bZ",
  "key17": "2DFq7YcSoqFToqweMPN13NxD3Zbzn8Zfj5nDtH1dAqLgADtTBc84XXDfkqNsJsghSN6ncFFvhrrFFu7Fe47iyxFH",
  "key18": "2xQGT3CXLARF1TTNtobRn1UWg3Evc5R11FB7HiXVM8Ydfo2xizJahcCCLsGGz9LT7YPmVvpq8U7AizMMvGKtdZg9",
  "key19": "2eLTjZ1HLbTLyMYd3AghKLdgnCWfQDEYuYJbZbXqcP4XGi6ekGeZt5cPkQ1AuQ9u8h9HYjk9xxcj8bTPUoAMcpPK",
  "key20": "3jZLaF8VkBRR2USegxk4qUuMn7Sxx6eeMEbCZX1i5UbtSZ2nqrdudp6EM3YKjies7anyD3RZmZsFwtQY5Mr3ngiz",
  "key21": "2GyUX1gomwSvbKMXYKU1A9BLSN8MbvY9Jp25rNiHNBrizyXwJtNbvrysmMdQn82csDdaLhP4JHETDz5avizF42ib",
  "key22": "GW8JjneV3DBqUE4HX9nRbWFgG2SbbZegNjzjaQ22zVyBuFWyUjDVsNXz9Re7nmir2pcgJw7FwkHsXjuYr7vqzW1",
  "key23": "N3BmzYukKP1CKPZfuBjxyxKgYP5rmkJ9A9JYPqrnKrKhtGt8xKNEsreZ8o7RkuVM4qUUfgsnJAVFQz7uaPBgYjL",
  "key24": "3Rzg3gWTHXH8dTDFWW8j5cU6Usrx1yxiSrKSbMw2RqtwY52DrgGZK58JBpadk61GCTSgzwDjHnSpCdEJXrtH4rdM",
  "key25": "2qKRXtvAumi3dXiSzaCNwP5zGKTFTg1KwqHCZxWDR2tHob2tbRVbcVthNZr2iwsqidqHs6U1DvLA4tgv7AK4AQfg",
  "key26": "2bLYx7Jzee4MPfndodcC7Z3V3Rc4phZqfmXiwGwzFHgCBeeQRvB1jX4uQXHbKefRv466oxXKocGRGsyMqkkdzj5j",
  "key27": "3iLF2997SdWxS2LgA5GfRPFogBM8Y4sojw7ydVYiqfGBkw6RMYBQe8xFp6HJV16o1Fio4GC2h7RuDWRH7G18MKBh",
  "key28": "5jEAoFtCvYykznPP7AEQ7ht7H2FoTTSZy8S5obhwzQsWyG4AGhM4Cv47SqUWcRNe9Qe6aTusfd4VvERhvx6Ves9B",
  "key29": "GcTbRBid2Bdpka1R2vr7ipdPTbxzRLSdCxsyTXYS922LmfFh32Sxrb5cVATjfZ9V3FWtnDbon2sihUmg3PP7oFd",
  "key30": "4eVKaJTrhDXLrwWRGWLJZe6Y1BinHy9N67Go2JArso8FJ5FBTyEU6TFmP8i9FeLPQuCiAmktpaQQtaqhWNW4kNcM",
  "key31": "42DbyynuvUTAPm5xuP6DG2euXxiHS9TrU1x9YPSBrA1TB5Fts6mX9ACYhLZ7N7As6Y9swG5y8vAPggw37NbqLwqW",
  "key32": "3EUUM6tanbD5shws5JNNCvpdmcC5EjUiKp33uuYttKk3cfvpQ1vhqCBVsnm8ASbUuasPzqdR7nEjSPoUjZe2gG6a",
  "key33": "2iMNL1zNaJtnpbiiFDiUu2SqzsP141MPr98GQQF1FTQKcN8xjv6BArHA6bYzhg7TF4NWAR32ssFLd44Upi4rg1v"
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
