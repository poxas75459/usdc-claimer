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
    "H9zXRa7euC4LDLSqNo7qsnKNn7avfYjZbZmgauhjgWaDkVB4PeUdAqWRAgSuxLsUVLEAUjaeENFFp6Yaa4ptmyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uj6Je56tHVCCcuVYHYxwcFH2cognxHdgfg9KwKEN79XbbL9TQL7ea3tdhi6Hve4CtqJBoENhtmfrYUxBmXRudTY",
  "key1": "5dN72S976YT9UmcWfdxssLmpoadTMkgA9R8RVi5Mo7rt2a8mNt4g2HpXDNRDwGJfXHNZB6juX8dinuPofHD92Crc",
  "key2": "5tF77zxjeLfUUYNkXQ8p2ThsNTwtQXu5S4xGgJ7AdGL4faKTNGoq5FKFCMi2PV8WYsYpQnqQLtdHb6BtAGzrYKnV",
  "key3": "2qri2JqH3F794YgQKmmNrCv3PCGgzhhZD6JNurzkypC9K4fsJEUUS4iiqpTecVf7PD7rXXM2PJ1T9JFdHEKR5cDa",
  "key4": "4UVLzPbJyd3HftC3ij6VqzedSuoAwZHDHLAdyBPKmeVZvfTozB5TcVZje15Qj8tnn4pbWG9uv3hqMg733Q4xTdok",
  "key5": "BW72mSPK63PA1dUomY8eFPqKZeBkZtDcoz1g7jFVk4QzUtMucKUZPfYzsna4dJ3j69V4pwXk424E9qUrH4KqpWw",
  "key6": "4wxr28587qssvxBUJhjeAgfKm7BgJK977cP8pByDsB6Hkk3NnCaAtRdP3s8GMhpjVtXCd8oKx6GmWkgEpuDBqPSd",
  "key7": "XTpH5SV6YsDzcnU6Qk4khLDJSnoTej6RvGYMYeuCrkgc2n3gHxRHZZnQTQCLCEUoyhEghz1K4Aai5dZ4cYnW6Ht",
  "key8": "5QzNBr7NJtvACQfN55XFjJGS4q815JZU471rFsbHrLERG18S2R9NW5rCBiNaW684yt7YQQRfo4mqEFZuSyk93J1N",
  "key9": "5cGbqTRAi5RQ59HPRT6pVk7sRCSpgxRB86JEKiESvnwVwZGLXezjUJTzS79EbVWK6T9VZTytuNxDHGWVJjdWTqpB",
  "key10": "5cGmuAKnyb4cBSwyfGkbZA4QKgwsV4pRXjSB3qiNR2otRNgPQGn6RFGsWQXNSzmbp4wSuMyEMq7Gf3dgyv7Ah1wy",
  "key11": "1w3KrvGnYSRm72tCayM3w2oitxcZsrhHzH3oBqeLR5qpdfB3xhV8Merb2HENad94eP9a9MsRNyAexJfgxPTvZNA",
  "key12": "5CGVn6KMUFXHmwSRbCJtTcUDeprx8zRxBxSUuCW7UKgdEZHYrHwHyK1AWLKpH5tXJGudff42f3mnqk62DNVKXX1U",
  "key13": "2f83eJ9pEX4ni2CiNFVx4N68Mb7wcpU88RAF2Jjy64vqzvGGSWvN6NYdyYhTLWVe2SEFbgGRoDdbzWSA396uRhUf",
  "key14": "2RL5zxoyEG8Ho7rLMtjDZpNCmx8fHRDdCow3dr5fwAN8jUbTHAbb3LhHoTHUkde9UrtPe46nW3tgVXxX9YPZtua",
  "key15": "2Q7wFaepsAz22RhujuMvJ8eAv33jm9pA2NENAsjimd6tPtDNHNHaaK5BCQrzotjEDZMwXwAzJ6PDCTujtvcU75F2",
  "key16": "2HUQsngBRnQU26rVgqw2am6XWSGVEbs5BGWLL6TBhNhnq6QHD7vgEs5V3SMqpMm1ApvAo8wHsMyHtfqCJZNN9568",
  "key17": "2C62uKQ4E1P6UDhMjuNzCKCsoBhiq6aAYM7m8DNLhGScmJ8gFcCNWUj6BdYpGKLhmbw9GvnZ7NnkmuXjQ1zE8v21",
  "key18": "8myBWEdqggnV5PiMe4QDJXTjs48FyuQQk4154pmiZAEnyQx9gLA1CZ49KcahKGV76GUpTs9Q7g494rENHot32NZ",
  "key19": "2etF32vWQWKMzwyNa5Gz27KoRF8zMVHw5n64Au3egRNoaA3k6Ad8JXH4qP23VusqsEHfn1kaBsNF1r6fiZDbWVjy",
  "key20": "5aoLfVAtBz2SBU9bzvZDexMQQ71MxjM6TCByHZiS1eqPpuzCxxB5dQE3n9EP6C8uLwjo67QBQvFa1GgksSN5eruV",
  "key21": "2QUyrqzvxHjRFh5RD5CeebnghsruFXWqpQFuqbAjQbPuL668fdhvQJMGJvJLZYG9wvVX1CCT1EpmBodLRTr4Jv6J",
  "key22": "3f2TEv16e6b1KLZtVEqZ6ng48gc3TqYP47asE4wZa9NBnZtaD3njq9e2Pp8DEDsoALEyZXbrropDGnBun6cDx4G2",
  "key23": "22TgA24e97Fa1Hqbw2zUwj8Z9aQgQFY94FAQGXPqQD62vko1RuGx6pRaMnrsCN7Vr9pq1pcETcZzQfKNqrAkK7kR",
  "key24": "418b4AY7zWATmjFpmjf3e3FULL1x4HvSXLZP36AB1paFgc8VJ3FKxacuDToD9pM9ei4S2HeVfoC3yEty5ZRpBdJX",
  "key25": "3R3HcJaiEuayBabaurGug6xzonne4QJcYM6H1zDaqwDtRiPLwU2jrfGbZsFPRHDjJ3KfU5pE4KbFL22wa1GUPotU",
  "key26": "48bcuBJsd5Jk5123qgw7weYU5oYBrySoafpUiETkdcS1GrhrGvgXtSiH4BC7JNjdrf2sCAENhzkvvPL3DPY9Jmso"
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
