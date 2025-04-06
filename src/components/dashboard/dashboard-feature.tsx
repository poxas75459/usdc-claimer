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
    "475PgKpD8Anw4Je9UxD2oKGok9Mmcqz5SamJULHXZ6B8aeKir4cPQw8QGduputt1Q2Ux5QhW5F3QfL9jMKQQQpvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "564SfcZ64XiF3BzPFCK3CVvY9bsRCNiK6Ns9bRpCbX9BQjf8DzfAXBzpT7RXr38MFnnm7tsFcoJ4UUdEFJoGoChD",
  "key1": "3SoVzirNxPE87qBKAiprJFV5iPLr6SsTk15im2TADXiBCFphCjqpm1zNCnQZ9nH7oftbtfmRHoo7cPxnRQAnzRZU",
  "key2": "3RzPJGitni1L7fAupLZYFLPdg9T7fRpy1mFZnk4DiYPHDPbsfBPKhBy4JbAxh9b88zNkhz8XCECrJLgV1Kneez3K",
  "key3": "31m3mj4E1qJVgZAnMtJPXsSfKmLgWGynUY6H1SQx5za2pCwWi55H36jWiYMhe12Fk9Doe28Bm7eqgkaiTxtpiNWH",
  "key4": "39YGqD4izQ8bDBLsQ22R7wjr884vETmY2yyTFz3u8fv1Pe6AmFYZnzUTzWm6JVBt8HktQqpNGfFV3GFqEzLoYX4s",
  "key5": "4iMaNjsnF8ZRN96VvhFepzVExWQdrrkvUCk932723QZJQijzDoQ2evGVxiiKweWNvQgupGiiR1WMZeHftPTrKk55",
  "key6": "3h6mycu9dQvUUeQQfxHRf8VbLRMPm9xXuKTGXmFxKo1RuDm8vycf5Nqu3SX1UL4DsYXvuo2KQr6aVAtFnoAPjGw8",
  "key7": "5t6EhtEDAdvPsamWeLx4Wbr3mTfm8fcUHhcYJMtsUTrBgN9emc5Xzqeqojgc2z6QjRGxPhF2GkyC5wLY8RRGWckn",
  "key8": "x2K22YLcggJy6tQSbUxkj55JvssUHE89g3oQT4S6sE911M4PkQgfpXNcfhUATgLXbu48vZchefCiT9Ve7bywnyZ",
  "key9": "V95zc1KnNfSS8CF2zd8hHsYK9ryRfNqnwn4xTDeY8ifTwJAZgNRstMV2uwsNq2arx2ZM5TM69uVKVkX9pkyrRTb",
  "key10": "18t5gBiKCaUJ2C6Jy6U64v2aJRADtDVucMpa7cJh5L6uU1Bm2etr9GNmhwQmV8pJ7FPhYv5tatYu61D4fzCbgP7",
  "key11": "b5vwi37Bv815PuimTUf5oMH39tr1cTdYCjiaaXjFNWzMo1YhZz3iPx8PMrhPnaqP7YNQQZYDbNDMTdXhhfduzVS",
  "key12": "31WfKTwUiYGzatQVp5MeYt3hzzFCsFJ6nGMYfdb8ovaFyXBPspJUJkGoZvC1XpZfhxfsoNhaaawQTDSzBM1GvPsm",
  "key13": "34fTjeyEYo4xP2rMzJkyKFfGniXWv1rM5fsvzP8u49fEZCt2aHjP88yKF5qScN3hgc9odivjhdya4d1kd5vhuUiG",
  "key14": "55mzup7Ler2agoaUNhEFrN77DQpuHE4iFrkFKJzQTJa23FctKuVGTeKfaxuCMGpDE6X8eP9uzQptJWwouj7K7w4w",
  "key15": "4376qmxKQUyuDHHy9SespjVxR42TPeeEQDtZLLeR5GZk9WNUdvWrrWiUjC44QiHm3kGUex3EkXtJqFZNDAiNqyRz",
  "key16": "3AduTWUMoxJDvE3RjEataBQumCwUypzA8UJdSRwceEUHabZFPiYvTFq3bhrCUSQ2FZcgM57dJaSgYMp9q8HfdvBC",
  "key17": "2j3f3qgWCW8Ua45b53YUZg6KifBefoz8KDhvoPxK7NYaFEJGVXbuY85MrR26THGV5C3RKP3hJyFZ4SDYQuTMWnoE",
  "key18": "5hR2R8MfarEqZxsV1K32BRNNLNmpQo1B3dF9nDkjc3ysHEnorNBF4bwrR7zsT8uSnyCQMmWx1enhQ3oSi8gdY8xw",
  "key19": "4rFNXxZbtHKUNtcBfQRzC1yjay3N6UXz22mRePgkqFPfZhH1HPoJBYTsj4oRKhvSVgW4bVjBKfriAcSEE1aNQCaE",
  "key20": "3Qv7o83ybYP1gTuLzSBGNoWFeCAFnzUVGN48tKRwj8zWNEU42BAWi7QMqYV5YbhGKptxfb29GmW4owDo2xwWCTKX",
  "key21": "5QCG1WiTCt3DLwQHYzQ2LpRWaiXVBLAU9Z5YoK1eDs2yYfHPUxq8PRzTU4vs1HpD23pgSgJG2XVMzD6fvuZFFRg6",
  "key22": "wGc8X5T9U3iumA9C163tdSiEMoKB1E4zR8nbq8Q2wGHExtwuswPBNmDCrTUjkNecbiDnPUF34HD8icmjtnKBvF3",
  "key23": "66YrrvnoKMKgChwE4xeTaRJcJgioNnArb9oMtkFr2QJdmt4pqjqeAKESKmhRLobo8X2XsU4pShx1z5aWdPxjj71s",
  "key24": "3kf7kaeBeUrLsA1mr4qzea6FcKCdVNqLczSq3bbGmxqippcqaE5Bn6TpmEn35TBf27jzuDoE2rWc39Hxk6xtFb9C"
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
