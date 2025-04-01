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
    "3qj4EqWMV1Mq9owFxSZ5pizHv4fegakggLvqrV428Sbx8p1nUEqrMfHfMGuA7eJdwFUgsCk77WCVrWB8iqH2Rqm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CFkiLMCTHr5Rxny1SZeQgsg1bLosotRYhFWAWvkGcFmj2pEj6dFSCKYnba3ugS6yM2ibFuxZfGX19mdAnb51zLN",
  "key1": "2qhnLPYwwmU1X8TLYLixnJzQ2i44Pt4zjfUfzjUdXTKUtZNR7huYphJnMdGgTp52eWBQXx7cSWnaDwHihoipqarV",
  "key2": "4T6DvQfrPJvG3FC5uLZqazzRN8izDNk6WJdV7s1EfJb44YJ9KxJQhFHJa7oWMvWu8ncx79oGSQfi1FUU1HLxHvLx",
  "key3": "4QzUKZjizAwP5FsX3JLzoiJHLg4vEuh8bht9vdvUy5hXViA589HmFWuzsVyV4DGmEEjgFmsgfF51JgBXYgtRhyoB",
  "key4": "pgi6LawkuQgmZLGwxdFqky8Gg2rBqbUuiHCfkdEoyrTzaakP8LD3V4gocDht84Dv5JKhrex1K8CuNSzu9UZANbG",
  "key5": "4zTVU3Mw3c87AZFGFDBzSMH1bx1ejynKLz6tgfRGvubkF7ZxEvVane886CNtAsZcdGBcMffCi7ovNhTDFPKtXNzP",
  "key6": "6QPsv5ji9DAjm226rGR78cH3X6AwK8rKnifMpbGA3GT5wCk1k676FokWgrAKJV335rPFM8CKdrZzmjBoNpXSQYY",
  "key7": "3YY7GNAhDugvwFoApmur1iap5GDf97xkME2D9JYK5zikKN42nnfqFfCBBbNTqHq3rqibqavis5bo8dEZzmAATawy",
  "key8": "rcWk9XXfC1TZyXnkXRdjioWwXVQWenhJhs3w4qhpbmAUoEDn9Z5H36ykPNogZRrt1vGryGZLEARm8ddzHap9u87",
  "key9": "31gr6dFdTzoTnp4mNRm88mTn98NZLpjs68XWWJ5vGdeRFeagNxfQ1sQgm7MV8eZtYx1Lr7oUhE8Gbb7jigtLLQ7y",
  "key10": "4oRhmHVoGQkcDmPHzH4CNeCdgdnLX8DVXn6FGhvNY3qoJ1NwGFAHpzxe5Bhdv41Pgmk8X8SvXgBqp5vBNKdabTY9",
  "key11": "T78pj8utMiDgXTbSwpxxfkMuRZUfDGfyik5umne47hzetr6NTJsFoFA28bLU456Mpfihx9cT9rFQ655gFmojttZ",
  "key12": "2ggsscniVfh3Apc5XiLF6SY7GRNyropeCcpmSwj9zaKHCFD4suax1KXmH4R2qo7bd4WrgaiiMVtM5cnxfodNNzkz",
  "key13": "5z49KTG3MeB5Ju2EXhYcV5PpkzrBF5hCjfwApwKJsracAYML7d83Z6jJpHdzxWZwozFLARsedAKb4CUDpmUzuLTR",
  "key14": "25gh2z4nvDu6uyZXAXi6HcyFguVRH7CbcZ7QQJngMZD8Lfz8KXv2gzBcMZwPnCWfPyPzpVLu54WS5BnVmZrcJWGq",
  "key15": "4VrLkD2jdJJ4FbFreAQ2j38rW9k3yLbZfps6QmaKtFKpoyyEYdiEgGqurxf8hSmyBESZC8Txf4d8PaazmpCWSTRq",
  "key16": "5yVfBQXxNJzZZoqtLNLqcaxYePq12hZtQQx45skDfHC6bxawS6tKgCUXK8amfiG5LXBME9vqrtfSeu2cVpRUCqyu",
  "key17": "4DuFm7nigHoexquAjLNHgrpSu1NBzAdBiZvj4noX9vP1JYf22e47nY5Xf81KnevUu9Lvj5DRemUHRaQPE5X9zoKs",
  "key18": "3VmNARqx3pTP5SNqLsdWGomJX5FN2NtB2Cm9TFsScjNWs6B2SGgr6ucvunKCWVnuwVG8W8mFjqe6Dqw8U7nzXy9H",
  "key19": "3ubGR1cYVaBw6e5cQajZZMQuDy6nzzPJd2TMwGC8QNhyycC5eYws16uLzTvdAaSTEbnbX5vUXfTUAmkxopxUFzq2",
  "key20": "3DtAV8DEzKsktSwRHHhCnphC9DTxkHZ3ZSEzrpNuUSghhBdudHV5rzpnXKJo3N24fAhyUSicYEbYKEQ9GfQPDy17",
  "key21": "5HBR5JUS2P7dzQvD4sezTGt2PNA6gN36xRUnnMncDBt24eBVRUHxjuAtig2954yCgx4wxcTFeP7SijrjsQqZP7ba",
  "key22": "2AtEufDEpYcVRZbHjrX1KJncr7rjB3ySVVK2UvJ4qeuydoUM1PKb33Zrq5Lt4J3mMp9gfrkM39YjpB9eBskwY2Aq",
  "key23": "4D8r6ZXmUXjqz54mTcDjLJtQbhfj1wGKZ9jAduFuh22J2WwGuP2zo9A3jzsXNbDFe2ygnSv18L3RmUuASSgeQbj2",
  "key24": "squ3ztdrdTLZMx8Enemcoiv2rjyyjDq1AX23a5QTXXV3mmBgokQAETBEWa3jf12m3wERfVAYUe2JnCnFL9ZioVX",
  "key25": "26iDkh1fWXNVLMFcDsWTHVzhtB1ygefVbti2AJYq9sTdpZjbPE14TNcez8fkp2Fh2NabY58J9vSnNQ61zjGE3Lje",
  "key26": "3C1yvooxWTdVN6vtRMhB7ViMVKjqwMXJgwb3mXDHB4KZC6NpQNR2tGY3FwgYamYWJCKn3snchW7XNPwWqpJkeo6A",
  "key27": "2x9CCAh7P4pYbziiHhQbiP71eSwZf4UVDD5vgpYqiNyGNcExdqhi2vjydaxMW6r3xjqdMSPd35zro7tanMGhrwoW",
  "key28": "2KVHxGenGwmubdkG6SkCNuaDPy5nNs7oaYj6gGaeqF9eQkkYQwxeGgviBbfRPE576Fv7H6tu6FKF2kd5g97jG7R5",
  "key29": "2U6wKB2fQ839yKtr1BywZnZecingDxkqZ1fHoBHnVwzYjsUVYaSm8hYcLKdDkQmK4v59LJowHGSKwpiLU2cbn1k8"
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
