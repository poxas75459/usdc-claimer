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
    "2dCa2qUymQATkvc814JErhhN3dxpmbdKY9fV3YyJEBUwNWNxh7dgBMVuqC9DjoTGnywQdJF6t2A9dbwLJiwVnxHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3379D8PouFCmScvUXL9M4huN6mMJN3NDQXEo6LLWeVm2KAaxq8PQgWN1maUM35TyTGM3aJeunnyn9fPAXsTgcQoq",
  "key1": "4h8En2dx4D4fky73Yh9cnBjCAQ9K5xmceYB3Z3drqdoXGcHxqXJPRLwecMcaeUuU9xbJv2XJJFbQnUss6RX9t1GL",
  "key2": "pNwyX7MyZNWyTF7wg62Lp4r4c9ife2NSzDnRFCqdnjNWi9C6n4YYmEKiGYRobZCwU69HeEbu7xX8WYS38kvtTPA",
  "key3": "6b4qeMqUmBKqLyY5sL1iDc93woWokhm5DNvSag9dvtfs59ZQvQGEGExwbrodS5Hvv9ubXm2ZBuvcvKgHvti5peo",
  "key4": "uKm79RJ13y6C2tbseksQKAPdzPiy2wJCYA9KWM929TUAFn2fsK5GeSEP9QQyX1ruXeJ4rwzDfacdQSoUunNWYbH",
  "key5": "2N8F2WNVaw4BC1cwieTe4sfSR1T5ktgdKdkPfF2z6k1WF7xHUFCcdC65VXzTZDQyrhD23KSAB9CwYWRoy8qxFfMo",
  "key6": "2QFg8HQ5XGB4a5YM3CHKJNwqNZccDL49BQFcdFnjMzRYT3cWtMGYBU28DVYKv3ExWJNvKGjvqcJPgCubEwf5DRs9",
  "key7": "3S6SWAE586hqKtwqRUpbMc2MUAh6MX13RexhRYRXSQ546jhDpP27WpisP2aLTa65f2ejv5giQ1oWhw5qzGYneset",
  "key8": "24iEcPJUKZK3KoVAGvC7Diad29JwFn2iRaG1mr9NimpqsP47gpaFsiN9fz7nrRLP7ydKNneMvn76cTVphW9xJMyK",
  "key9": "4kohYfyEK4Jf93rS3YC6PRqFKFNaRM1NRgN6jgLcQ9rYWFKL9Yw79XX4NBrjRFxmrN9pSkYdBn1XwXT3ZwhDBJ5s",
  "key10": "h3HDLDCP9hzR1NZxt79MG31JwrCs6GUs7AWKqqwbnxV5z1WULpcwgRc1fCjX2WWCjDbMjifcgJWzDS91PYZVFnR",
  "key11": "2hoYuNoB3gCqtYwechb9mMmSA7wwbWV9zLLSsG49v8iUsAbJnKAbtqcyncf2yHjjKfJAKgVUi84F9AwhAFtwG9rL",
  "key12": "2PgLm1Ejgi8fB78vYQgTG96C3ikfE8X5Kc1uXS42BL7rrPCKzz8mSP9PR5Rs8zTimebGdukoQ2eqDLKDNSAVhocU",
  "key13": "36QtFtwLJZfKNUsujXpxVhZKNkkSAf5E3GHgMu7D4k9V7owNde1oSLTpXc6ubN72j65GebZcfsL2J9LXD3RwrTcj",
  "key14": "MMnZwMdBFtyYQpQnAviopmLP3ZNh8dsLYj5mMWJfBxoUEv6oEDEe35gozjBKwLUrWj2nKLrp7kdTiMkawJ5mXtZ",
  "key15": "4KqyYgm1uE4eHc8eBEHvHrgmLwgJwreKcfWFA1dTuZ2oESj7Hg9c2FeYjRpBBAoFMyH5EHnnWnEahjmix98r7Faq",
  "key16": "37pNjVj6rbx492PHz685YqnoifBf6Uk6V3xhGQmkW5eyvev4bt89AEc2zLCbGYbE7YzvUtvG8QL1N9xzRy4nwUug",
  "key17": "3eoqnQkFm79q9bmCprT16QVD4oyDFuPzS2sSjatRwLRfAMRggicqSbtyCGR8QarBeHpVUPp5FMrDjtKYzUvQmBro",
  "key18": "3Ep6SSBewr5vWZp7xwVDVsSqxQgRETEdS46fuqVzwdGEfPiNZmtRYBPurZViLek81dxB3YPZKUAMeLR7nvfcG5k5",
  "key19": "2LML9k7jenrBaQKnXWbqG9tiiiFuUJv95ooaJChw2DUc4im7d7hF5AbpFjgQUkT3d14MnbkQ5qb6TdqLuGhej5qP",
  "key20": "2PgEzMJNVtZXr4ouJmbtmGtbqxfSQ9ex2B8ayqdkEfZvazw9vFNqsXCJEZ7po8LyCrhP5oVMSVCPdVFUgduxFCCn",
  "key21": "oxhWRRY3oEh5ZvGKPEd7BfisbtQEkTHTxFL9BnBUHG851zNbYkC8UZqGe72jnxUBoFYQu3vyRhM6gZ79DSnCyKe",
  "key22": "4SGygmsj5PyzJzKGf5GQ5e74MXvWMYGeVyw71tjX3sWmmf8kuDPU34LdJeR3N3eD4YX4mF5ASXZw6vgN1pEajyUC",
  "key23": "6wX88Mq2H2hWganu4R5hG5TrvEB4VbxTvksKyZJCwEHH132YoZi1u3qAVoJ7b6BjUinnUeUY7qknaScUnUV1nYM",
  "key24": "siWuCQDhdZJN3ehHF4osnjeZ4EvupFNhdFmXqxcHkJFJzAFh4ohWdyfquDWY9ci1zuKXs2ETiuDG9Uz2WTzDFmg",
  "key25": "3hZLyG41vTeEui6wrCCyCVhEhYVQPfEj9b285zDavVb8pLbuJeGm7MNWb3jGAQN4SnthPQTZ7Tb7jfvHfGMC7gUW",
  "key26": "4QjK155YYVehATbXnFnbYsPBU3j8LtGMfa942KvBb2VAnTN1348xuJwEZayJqqFmM5amRSGJFYJoyU5rkPx8wS6U",
  "key27": "4FGV33ND3bS6TGZi64DKf3tBwWF9DoDZmyXAPFt33H2u9fSpjf5dmNgHTfqEuGQRXbfHr97vWLhSKAZ2BzAMuGvw",
  "key28": "4kLXzGyZXp1MvLJRVbvHGfxj1JCERe1eXerHax7i6AECqH3PS1mZYck2QQx2Q9EzJCwv8UWNJr19Q9QknPvBWDiG"
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
