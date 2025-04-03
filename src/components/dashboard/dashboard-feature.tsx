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
    "Q4fKnUgb1zB8L4W1ofr77NKd9rrmmFVd1xTHQQz4qudSs3nmu888nhowisX5jxWVr2U5bK2uPhPD6ygRZ38abF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eRhoKJimd1w4etutRXm6cS2Tqx7roxxasN9jdDNxptSTB3Br9AqZw6Dd6JQ73HGnohrTA147LE2ZdkqMZvsYQvK",
  "key1": "4PuHiBTZUD5gJXHEgNyRXsC11wHH7cjChonFkRms5kSouLufpUtZbJ4fT52NDzYs3eAYgFiAeP7s2sKN7SkXvJh1",
  "key2": "3THxxUCkjd7zVTP3AcGwBTzwEWXQq8MvoBLiUNU3K4fxJbYUx9HBJ8J4QSjS6AepvTCtrHk15sfJdU2cf5J3bZPb",
  "key3": "gLwF4m85mFGsgYNZbafqkTxthb87KMHiswKAQTLx4DvMTbXUSFuSnBozE3RkUFpfrKP7bwe1cT7Yu6Xtr8unCyo",
  "key4": "4838F1yZXZJCnt8oWSwtii8pPYaYVuWobnjYbi4XHhcSXGhpM6wcJbuagte5AvLsERJHx9YLtjUSUJ7DncHKzYkR",
  "key5": "pjJkVESNuVUgGm75UANtr2c9a7hsTHcbU5rsss7Yzona6nJDqtZxjHRmpXNkPcfbq6G2crA1GpqWVgGq87TX6fP",
  "key6": "sjqPYvoJfQsJT4tsAzzkWkPhwkf78c43eUVa1ZUiTAV8ufF4WzEfhHgcbp28VdnEEEWvp1f9eYTZ7EysdHmq1FB",
  "key7": "37FNHKMbgFmx8soV42DhSEQyq4NR9zEdPuFzF44RkkV7susVL58SpHpyWdnhK3cnMfSPnr3zaJ4j8dnbdzfPikQJ",
  "key8": "66RkswFDWoe73MD6LXqgyeNMG9GPjF8cB7qy26t5f68eUHe7FFkYvXdWjH2BozTErCz6HqoAC4Uh74idxRBZ9LMR",
  "key9": "5RgERPP4fph9iSLoqKkdoZuaCtscK2rqyMMrwyX2rMrK3HTjdP1ZVC5SWFw3QfZsz3jv6tc3AhjsKfmEJLGptpSQ",
  "key10": "5yR39MSAzx77MyQKsx6K4XBjqRfs5yoLZdxwaHsehBSnfbvow2hRGjx3X58HDCpcwoadwTo51egHcQD1d3Yd9ZeK",
  "key11": "4VNkYa5hpBdy1Et1DDaLDtX3hQc4QciyBKH3JvpMHdMU5o3iqrpdEmCTyscgp4Hwkaz2iEn9gaBafj1v9EwKDJnh",
  "key12": "8SXSU467fWfqrG7R7FyG1yh3ctDhYcLRRURTth8Z2aFxy4h6xcWZ4JQ1VgGEUvFyn1FZto3X7bH5zFTKF2bYngT",
  "key13": "2BBUJ93RVvqcjbe98Nk7JRdhaZ1JYru2w6isZ3iYbA6BuLGYtWxjnUtG6kVJgwvTomqcVZWecoBUsvGv1MQurkig",
  "key14": "51AeBxDYguMwAZ3tHhi4xyJKDukhqqqSRkkvEawtVSSzcLBEz7buPMDQdaftFiqx9FJepAg7FEX4PWrkWLR4ZDiQ",
  "key15": "4Qb7Qns5qcbTfuvJNLHQfergGuGEXC1hUzmXoFJRgF2aRdESf5WRxQDkdE8Zi9vXTA6WpFnRkKE1ADg8kZxnV1nG",
  "key16": "4sbnkSMFzJVnqzeae2Kek7rHHaE4GKRoQsq22DhPra1RVDp1aKtYSTRB9AFYp8r4jEuqY93U8ZCH8LBZLATEri8G",
  "key17": "4H4Nq9jj34esjXMESodiZuREWUewnQ9Fj1PtLi4wm8MNFjdoW9uQgR94ReSmA4fwRtoezZNqNbssZAaagVyNZgKs",
  "key18": "3YsX2VgS2ZVvWQQ2VUrBXUd9LyQoWKVBiKkXdPUPghFU8r5h9WNZdMhdhHsJLeEA5ASncwg5bwNiCLydhgqfFtfD",
  "key19": "5LmHnCCt1stAaTDbYyAyVHxMqhGHqEBnBnKKv1s18L4bbd9Sw922BBbJ5gsUDpq758PW4P1XmHNNJGUBV6H3To1Q",
  "key20": "4H2Tw2KkqJESeN4vP1QaZ6tNchpFDiJEcG8toSA8Fxssmfof6Ts4R1RmtaWLXE2xfthVhBPGRNJ4giVXqumxXY6u",
  "key21": "5iZXynkqmgzcCeXobbi1RxbXKgHGTGsdQmu1LYbL1qUiwbLNLrexJjLS1YeXZ9E7xLYUW78XkoBa7gEPqLjKaYEN",
  "key22": "3rNZbUzHCFtRvCzsFd55AU8a663ntFbQ5AwZYZf5pp4bpifH9B4ZXrh5nbNF4kR6RDig4e2GE2CyG46NYiMcwwM1",
  "key23": "2Sn7m2BG37GgM9SKPDUsCP1wUz73N5p97fqrD4dJmobAnBGSiRfjyPAgbzVn4F7uAbQH1dwNtTvzsLS2yZShkt2j",
  "key24": "41bE99MTaMUtgEmVPC8EiTvBqYAbog9LNSYjHpqBB1aA4dihWnGZSvXH6H8tWvbi2eRbLSZYcu7Q8T1NLU6fuNyg",
  "key25": "3bJsD7mRKoDwDMXKADPJWyi1zAWf4fjoaPsHqMJEhDKFY2Rry67E1scbwS59dhFv5NbnuMUQXnXfsaitMSuiCaAy",
  "key26": "2MpEUbN9gPQkZdbHfP643UELn9UYscyEjTbSVagz24tQKo2fK7KNrRDgeSiwX4UjU7mhUrbXGN87PaaVbP9HnXyf",
  "key27": "2xNdo3T1TdSAjF1H3eCvpPArUw4fm5MYXWNb71oAYgPQPct5DcDvWuG7ySgrssFQaCvokTskAvqt7WUVtWMFzaiw",
  "key28": "2w8iUZRpRJFC8479CJMiZ7UV8HJdB3EiAMTPRcyut5XzGHd1GNmWFMDNSmnKBWFbVkwtzDw3i2QxtWxCq9g8gjyC",
  "key29": "2qzJJjKYgw2HbAgN9xko2W6Vp6bWy974GNPx6Cg7yKV6n15jNJKrNUmo2JbH5SiP6sUjUusDzdsUBSMmN4xWjRY"
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
