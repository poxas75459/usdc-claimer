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
    "2SKu5QS7or2gDuE8yBxMJZYJ2tqYadTm6HgPKSVFjCKUARs6ppKoY8Gwh6wAT52ocW1zFh34WghRZgX1DhXJvysW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gyKR3gGKmv723VBYWHjsbzpcXLvEVrjyCUjEZK8raYEvAbp8EwijWD9BT472hQKnAcuVWTFkAznBKpwPzx76kXD",
  "key1": "4TrxmQXf6d7z7vYQEUR5zBeyTD9WKiXTorqLgQePG6j3Vv65EzoWcZm6WePTNvTkUKBpJWpx8dXc4kFdBhPt3SMR",
  "key2": "SaEh8ed4UQPKFK71xe9883RknX9bZ5LDCBG6zzYB8qAVenYJmcJqGSEpXtTJcUC5HpxhTvDJY8JoTumT57o46i9",
  "key3": "2DX6bfYUdf6xhtAUpbsPg1jHxNFDAb4ttx3T7j82UeL6MvEbjpTDA1MXZnNuRA1V9JUtmXdssPrGThFnpQmjzzLF",
  "key4": "5SdEgBNedRPXygBTj3t83QqrVWNipeC7cpRUUu42tFak6NngNJgSsmH73jcgguNnfzGwEJWQznjtPWwj76CgfDtP",
  "key5": "53SeVGtMtyPRxRvH6xwjLj3TnrN6HTexTLMCo45njatYGFP5LkqJ7e8E99gDifu7TuAewdaV13DLaHtfp9y7NUoX",
  "key6": "5tM5Z5iGDy6KFCSNVSnGkkUMMUv91NEYKtxPTRFmkjjet8hxeaAk1CZmyJg4xTwYufWZ1kMF6oFx1dtXQH168Lnf",
  "key7": "2XxWQvWkWbPL5vwkhZkTzWZm8tfeqLib6K1uoDCpNgGCfZWJnJNkpfvbBuqd1tH2AYGFeu4S16gZj7WAoaS8CNVc",
  "key8": "3YVCJQ1MvLopENe7mMGGBi3hdzWegD5bzYeyeh9Zi7N5FUSsonFDm3ay9ydmo41GpnDVqDNiiJ19kdwGtSBNmXA7",
  "key9": "37pVMeLBe5NR8YbPdr39pZrnWpKHHaycp8thyYmLW9p8JAUTgFUWtsTywH4jpd5eMhfFniFaxkwceekRqBVu8Fxi",
  "key10": "3ryh2yRVdA4Sh4vPgkqdfxm4YP3C95ZocBfVTZDm3yFyG6rm7X1rwtsR2wwr77Bc5Xxc2qb3VBt45TdtXGBMM6bF",
  "key11": "yAawu9K6883U8cYFHceQ9QzQd7vLtJbdxyKFPF937uLHyVxm5VhiMuicrmiQDJXifDi9bZcrJmYnUx1YyFqatjx",
  "key12": "35mKjjkmKPQzGZq94irJebzw3n1t7WhGfDau2WP6W3nrbaC3cLgNL6C2SdVsw5uKBKpoLXNprgjvLTqTZNsmHDMw",
  "key13": "nTwRFrxVi5t7hUfwSYo1CNBhHTe8ieLzuyJZYd3tjEYi2C2TzZjm9s36DiozFmxU9L5BHwgi7cK5yWXrXeSrszK",
  "key14": "4hLPEfoBAt3JYmwoPPXWnnFBBUSY5qjEncDBK3y1uRwuBFGdUzWN2iYTRTtNS14mhyUshTGyMquYd6ibdBZss5E7",
  "key15": "3zQpZchCQEXAWDmuvj3hVorUPvduSFqp1GkRrAE7CZeDfLmY9UTCLHo4GC92dtXgriD6xPPbMSPXRBEX93uJou7d",
  "key16": "66S3g8QzzvAVu9UGejCocDc9C9EGzdpWdGzSCMFthk8w2HR99pyzK9R46mgbNM2QoBaD1C7GAtMiWf9ZsCAo8QF4",
  "key17": "4747Ww8SiggciwZFT97CtfvAaFYKCwLBFGHpL4dCj1Y5nwkNzoL7RDDzFjZ54DwAqhwirvFETJhpWpiDYX41fQsk",
  "key18": "4m1dpkgjwiJkfWwUASNtcpqHJcQ2qJdVTPZYxiC5mMNzUDbG663S3VW1gG4DY8Qfgvy5P8Th2UGA3yQAPsoS56EX",
  "key19": "JaTSsj9zi4LzuAF8BpFiB45moVV6MCzucrDWmowRBtKaTXgJEvCUr9cLLbsTSX9rhbRd63dzGCTgz2gTmEUE9BU",
  "key20": "4Yw8E8w86jimPGDzUH4k9ZzNSu4N6MKCqDXT1bRiP9Rf3bwEnV2AT9uxxJLLVzH5aK3hf2H9RKDoYMm61kD7GBnc",
  "key21": "5A5jDCnqwZE9WGF6RPknMFQLqSRJHde9brMDivj6zxZJshcLbZbahRgk4dKDm5rGBZHTFsiWKVxDoZL3iThigCNe",
  "key22": "hEGDEzK3JLyJWAb8in1TAbeobkfiAaQ7jN98aDUaeXoTsKkMLwz3HenzPDEAddBuWTJVVYSaLZWpWugU7QXSToz",
  "key23": "2ziN4S5opezrGHg524kUmzLctsGULmRxWpBwWeAiotoBY718eCV6RpUYYZbkG21ZnDBSSFaUSVadqzSmGvKQQFt9",
  "key24": "3CSKxdzr7o5NSSLA56WyGDW7Rqx4ijjA9xAsGRoFLsJWKbGnjUp9sYKioTkHd3C4JM87kCDAjDj15nqSJx7WSWfA",
  "key25": "3z5woEWUCeazwiNfH7fgYYgSv8oXec1iTjbTrmCe95683DFRB7kycGVj95zr7gnDUZ91K9hXn9x3nyJSQAoDFoCm",
  "key26": "m9nzejgXx7LJHQTKK3xcDvXjc5sdPQszgRGJFLuG7cjQpe6CLgUJ9zk9fXTFCDTm6iZuPMaXCEKB3QGZc271mHX",
  "key27": "2jDRQuUbC466wrZd2B14QbP5AWeGhzbJ1cNUSe2ZgzPTtpdNXoQgU17uuMKgfimByeQnYEHBBoBwDxkwE43nkPnN",
  "key28": "2JZV13SPd51wS4y8iB4xch6RGvTU27QJQcr5w3r5PVxsNMZnTuri6SsumHxoEv8jeNeCe47N5wqQ6oKTZQ6kd765",
  "key29": "4AyNsbt7eaKnaixqD7iC6cffbaEqSdC2NckdZoMWi5KGx7zZTgBh25uubiPpucE4ZyH6EXABSn9tSjAcBe8zWpgP",
  "key30": "4ZT2KfNxq5D6gUxhYZMEgHMh5GhAYYfX6ZRc2g1YJFRWQcvaitQ5epvT45J1Qo7aTdMnEbu2Fh41crVtV5T2wtdn",
  "key31": "5u4x8TRSuWq7wntuFyCQcgkaYTc1k7YegxNJnEPTp6PCUY7GwzgwRqtqh1bDMdzBCVrpvMDpcnUhuzTf2wX8U5Sx",
  "key32": "2TJrBnjXCb81xFar8pAni2DZ8DDA9VJDyWb2uYzJwDKfgSk6suVhqMLY1Diy6SKidWQzYjTW5hu4xLkh6CCvo8FF"
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
