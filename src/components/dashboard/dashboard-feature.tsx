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
    "52F73QBxB68NPVfEcWEJbbogxB1MUn9fZ78jiZVph9HCEs6zFnr4HRFakSJN9G8W4cPGcHod3Z77pBdWVh58bdnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KN6EDC5983grymZdYpDgHnnpKfH7caNJjNzuoUhTSxutsjVhmeeGUSrdfRohJyEUKNEynZnjccT7u3rqXAyqMar",
  "key1": "3GHxVAvE5C2d92csba32p6T89MnEvio4GeBbkxFyFhsWZbRDvDD2w9jNc2cm6PQM9xuEd16X4Sv9vjkJu85hmqeW",
  "key2": "4J8Hx8tBBbNZYrc4ePzTKTnCB5dw5YZt4ZwLJ6hJHihtsxJFkj6cDq4jqpAyk6RbGn44cjShHJjKpHZT6gQrw1BT",
  "key3": "2rqLVyDxLfXb81f2VJc3d1mFmdTAvduwNj9374CDaupVhgib7dsEVpKE8dbvbwJ9sU5vj9F6ggendR6Xd8o4H5gJ",
  "key4": "2YCXRTTLsyyREvh3cAXPcWZrdw9tF5tSpjAqizz49hj6RogPgEveqdVdKYU213fVX9caytTod42nuetmgyugAFC8",
  "key5": "2teZS7u8ihzL1wV8nLFEshB9BVohNYGAqCoHGD71mU8R3PY94cb9KfwKyFwQuCskdfmsFPuDMv6nKmAqd2cgVRHC",
  "key6": "2L6PgvfsZmdmLEdcBULpWqUKD7QS4zaw7XGJRerNy6HzfAkQS9Dit9Mc8ZoyuBNoYSQRk3z8tWK8bFTc8Yu4QtzV",
  "key7": "3idwwjFUoWPQHasfUsu8eXufkkZGg9TTrx24ZBvhrCTGLzz6PJQ7qQUVQmJCdZYR2VeCjQXga9VJbxvy427PwfFj",
  "key8": "4fKxCV7imo8Jsc68dbexiZmL5gWqexp3XzHXHjPoqAaGMpf4cNxwgbMfixsaXWfordUHx6vLc6asBzbRi58tsx7r",
  "key9": "5c8vLPZvmTMhbpiLrTd8es8gEkD6xmNgpeDgUt91qTdhgHh9jqYVxsDyJj5pkHFehHVDr3jRybzNcU23ZaKHi33Z",
  "key10": "61Th6CQNu1WsoGPBtdP9anuSqkXmsReBuaQnTx5hVYvj78RynKzeMraTbfn2haXCjGBr8512HAwNEEjY119nQeAU",
  "key11": "4M5u2iPndm9W73wvycU89eB37CTqxxnd1haSGf6QwCth8fGz8x6Q9NRNvQKzjGVudhTf6RbENdysecMQAJHn1s3f",
  "key12": "3ThHGiFK9ToB2tYFSA9Zzg1VMSNq5wKc1wBd6ax4g6AxnaUatRQY85RZUFAmrchkyvUJD5P6zuFVr3cXxN24yENV",
  "key13": "4udGrrW9mrQjDXn5DCa3Tt8u5CqEQwBBcPmDX9ZyPxQpfswAQJdfnzesC8YoA3VkP4sTFC9Z9KUgs8io7QmPm3eU",
  "key14": "3nqoB9hPD6FpUjsQ1SB59T8ebekQpWaNqxTeb6PDwSX1KW5HZfVkj38PELPGPd8FHHkJnygBWw5NmsVDbmv5F7oQ",
  "key15": "7gYx6R2rx9BazbgjzR5fZzP7X13ttBB6ySbVNf9u9CU1jwch1eCQXJ5FyvKfnnQHf2bEPLNhkDMqp16R6K8muPS",
  "key16": "WQzFU6HGg2EjaX1v7giB2qe3y26e7Y14V7Xfw1ECz2VW6AMoCmTMS6ZtERXPDKjCd5xP8SFBxwZuMRrMMiXCmtD",
  "key17": "5b4XksPuLog6wNQsxLomyrLUM24Hi2XVLjEtjJKhb5LWxP5j5HtGfhkXBNCBJy7yPb7qSjG5V9NzGYAVESHYtB8a",
  "key18": "4Z2a928kVtqeKWvYuEz1khTwghgykaCNiideh8PNDGZfiTybpbtDKWRYY4UyZ14zRCsm6d5d7Fvze1xaTRFsWdkR",
  "key19": "5DvdroqjzMoeoSnCQnGj9ZXzqQvwJiXGyvuEEUpmYVJTjn4fRzKtquuTRw1Jatan3sgVjapeskX7XQGokDWavy6z",
  "key20": "57qKXJ1pbay25a9HjJomapxEHLQxAYDSGCYFYDdoYSWkFGAA6MUQx4iQKLpauqH1kzhBk9vsm69izrLXrg61Sgf1",
  "key21": "2eUd8KQ1vugxgivNNcGEcVVTSJCbRhMTQb4ZNJ5EZ8VdfbHH4SXjpf4FiYhaQmhPuSmYzuYJ9UBJHn3WvGBNhAHA",
  "key22": "3X5T7CNsrN6tYaHxeJhhF6rQMpDphvvdsRRZdLJXE7HwY6MMy4sMdtb9DhLSMAZKihzfaUvMFVMFzRs8bn6eCp3p",
  "key23": "4VxCopAJN3tqMnRAv1njwtvDHQ7ZeKqmdm6YkyhczCg43tFBCh3n4ahEn221SdKk8p18MgZcuSnNMdD2kDa8JbL8",
  "key24": "4LpGggmx5PEuu2nDc9FegT7UVfNDGPcph8wQCopG2C3dvbRuQEmPyLwL8DQ1hVJwn8McFeZc5g3RwRQbDhvE3NhA",
  "key25": "2tC22mm6cVkHzWekpBownLdGqQpFw6SN8YF1rUQ7Fziqa692fvAgz3uPTrRM67iFFqyCRxpKxXB8dTeurR965gEj",
  "key26": "2cgi7trxzYAGqZbThAfPmH7LRPVqRTAwTtkXJC7ZtmbgR5GxxHx2xQvkfB8y6gffQaCdWHSFCrU2G7YxuTpK4vfx",
  "key27": "3MNSt36UbaBJBCkAm7VwS1KJCstxzbW64fxFr3oiq1whqRZKj1B8Ntzw3J8LVFVYKYPQryKz6zi4d89eU1paei4V"
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
