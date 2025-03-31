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
    "58zxLwaR5DqEDGwi3eCgwo2844QXXbu9hXSvUn6Tp5B6UghhtdELuDMuzWu3QyLDk1WnspXQhn76k9ukZs26piYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gaKi31Tc7rJcnbQeDutGkXProuxwoBobmKMbQ5yha2L7Mano3PT8yPETxQWbsxSmdmjxDxviDbvDJnb613v3tBJ",
  "key1": "21Ah5XV8bDzSvQ5myKaG7RoJVoX3WaVivnEgcPiAXNM8QmoccQuoTvAGGWQ4FVeoXRW6JvPmG4piZkjGRx64RSu7",
  "key2": "2U5VNS3FVxnk2J3cLGFwW9gLLHnxwfn9nMkVCsdBTQnKQDhFngEXvogQkx1t6yFugrMewgC8eoA64pG98JnQeC56",
  "key3": "5TcgHAtRkteAU5WRJRbB19w967wmNqusGyf6hXR1rRf2JGRX5NCWFowndD2hUwLFz3aK7842xkUhHbsmnjBAUzNZ",
  "key4": "2FsUkpBApFjdgbi8q5izfbBgsh3YT66HiMVeH31fXN2kt19277urLhYzLXe5f5ULjibhGE76UHd9eiNGJ43jn38v",
  "key5": "32kCBG6KGsp2rnmUDVA8KUeZSauBknQaDvCZFpiCAZSn67eF5F7pTGwxWAsz4rj2kZTMMXUSWw4pueEpEWYxxXc4",
  "key6": "2eFiLuQV9pRpBAyd7KhjEeTJdyxtohMXrv9ecNRtMQnsLo3pnJPT2tmShV3FL1vpUJ7VzDPRozZiPa13SFrzguLW",
  "key7": "4BdMZoKdh7bG6i9KYkTzvQyyq9KzNwCLTbGFhcP5ATnTTzBG93VwmpPHoctY3ZHsNfRRWTMZVVh8RStdPhY94ttG",
  "key8": "3gH9WwCaDo2JNV7gRSRZxvGHwx6jrK2xi9QyB8P3JCAjjDdNhgpCArWoj8FofgsF4BH6GL2RJAB8Ffx8srhRt9Ft",
  "key9": "T2upq9Ebzd25qs9QafMcXs6giCSNJP6ojfmwgdi8jbsLFAp5nhPV1ynSYyF3a822UoFpAerUBeLjNBBT6deUcdE",
  "key10": "ZJR8B1w3hVwVmHeguFpFBhAkBHECDiVKWhMJb6o2RFEYpSL8cQkZ6BEueezCw1At8Yd3XFYhcPYzzAiKjhpyXsp",
  "key11": "2tQYJJYTaWMzjEnPsx1qYqRxhofMaa5CbbQFDe6PW36UYexPn1CFxX9jfmRfBZoUNPuQnEDEAoZFyLyQMxRWxAzT",
  "key12": "gUxvuZPBhLbxi1kra9SERx8SznzsnuQydZuozcbKy9do4QoKiaEUFGhuPtfE1pzr9TcVRMQ4TekUhwGMbxVBaZ8",
  "key13": "478wMbCa51uP9FGCRH9H4Wvrod26ymWRc1SGjBzXeUFaUhFAq14rDQ8BrSi9UV8ePrC3bgVWDWqJzgSoRtmH8rwQ",
  "key14": "3Wije1fANkJcp63Dr2KtyQdAod8SK3PXeKf9bNyWfr7Pqjj81AZdbTT22wVV1JRnAJTCTy5uM9C5tbiLBYroCjh1",
  "key15": "2vdX431SUfWJjz4emgMg65RTh4XtmW9UYoykD1XxoYUJh7Pk8E8nqXsbn88SrmxwpfFXDTFvBsHF6GHntXjS6Jnc",
  "key16": "2zTeNAH8hr2kdJpPm8S4QmEoHkK42TfoFW51XrfTRAvajfgGpvYthAWyxu3V9TBPBe9ABm3fKUkwbXLBuE4rEgXC",
  "key17": "5iyoyJoE9XDnCLmeACMZgJk2jJm1Lzmc97AeUwSmHyHWZGtdyujRqmMG2UEiVt2bkeBryyVUNxBxyDNaaH3VJBoV",
  "key18": "3meu4HYoKohLNzbZ4w2W4m5pTJzmsJusgqT6PazV4geJDvUyK6GC8EBGbYqZabB2VSJ2JTngDqhHkj3QtggcAsCw",
  "key19": "842CyuPsRy8y42iqKxodyX7tuxC6hhRS7syDkz6Wh9qqDFMZJy43MVLZjiykzqxfGSpE7Xiy3SNxhYMkh3qVtkT",
  "key20": "38qonbgq3SV3cXPsby8ebbrzddQaA8AwzgvTj3MTTLDXag7nUzPB2jKhCX3qNYUWt4Qnji4GqD53ZwNyef4ewpnF",
  "key21": "2oVKXvGi4PvVzsKtPVBtVpr7YmV5nXJSJb85QvQzWwmVJyejvLWPqhtXZF6bba4i3yZ321DoSXhZGGvBcEaeHn6R",
  "key22": "2GEYW9RwEtrzjYWHgr2Tqo5CNFHaE4ve4RDHMn3FDw1EBCvWvdr1hXckqEJC3PUU3qKDLaj6vQfVjM6YggSHnBRM",
  "key23": "2uYjbBZUg9V5oB81RrgdB3HmptExLz5QvJLaUGETezisbf43Ht5PkAG5ia5GWo12H2o7pJhYbynB6nUJRSgPK9dd",
  "key24": "4CjCrPgPK8xbhSr6sJEKR2CHz6eJCrozzdiXebMyVioXgcRXigXBGXpTQjbQuzf8kfw2sEHNYrJQHangUEu1zwtn",
  "key25": "2reVvrof7q4rJAfShbXwJa5QKjsNJX3zwvExqb1wsmW2rM5sa3FZ1E47Nr25Kj9farJ5RNybUSbS5JLGe32ubWrC",
  "key26": "5ctoiTCLpdyaxxjW42UAuxamZ4h2zR7A9Gtu87QXmDXpRRMjcTzRN4QKemASYDKJfZGJd6KHhoFAoexqPHv8G9nu",
  "key27": "5PsLvNyfHX2TwcJ3zWvC55fT8z3nYH5WSqhhw5Bpeiv7cvR4e7kEPd5MdWDi4hjsQtz3wPbjCJWHp2B2WSBWh5Ti",
  "key28": "3CyabJPgbrZfZ2gV6aXU5j3VAZpBxB2NYZcNWCZnJz6mCoZDuJKwf9WNsPboLN2kRNWxrrX6suVqUPSA3cJg8Jfx",
  "key29": "249ZXAt9kraKerY2ZtP32CrkDytwjCDySzGxg7KRwgMVXhTpmdh6DZ8GSkJrk2jWtprFoui1bXxg2ebuG52iDXmi",
  "key30": "4qXoFZN4EjqEVVsKMWfgJiuuwLE6LxnqBtBQPE4ddRa7Nm32azqNWLsxGt2ocGc8Xq7y5wF7q9b5Y91xAXd8hCkL",
  "key31": "4EdmVw4k7UXD5Z17Bwy93GqGBnxUHKAT4cLVrxeKstPSj6tRPux7r9RqqMGjE3WDdEmjCV86WoCJLgbyVuUbd1Xu",
  "key32": "35PcttvmL7Jn1fqwt5WChsMPwct5rYdYKhiNJGBaVzUgDXpFCkRGwPiG8WjB6uYRir9aRmYexCfLS5dstMkvu8sH"
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
