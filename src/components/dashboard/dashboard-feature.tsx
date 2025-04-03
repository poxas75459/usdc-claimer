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
    "4r2A6HXPzwsYcujmavkGJpika1LQj5kacYDECh8BATaA7XKydxLtgEVjHrRRUAX4moq3GXsitxscdzjqNgMrJRjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eq6sS2oSkpEp7ohxtmB7LnpvYeYBzQNpwiAb8rMdVRvZJZw88m7Qt4SLGrYcmZqYLroBQZ216Yf6wdavegiFHdi",
  "key1": "4oWj7rQ3t98vHAzt55pr64LTfncJdb7SihZxSaMxjXo6XSw5qz4cRdmRRMT6NfhgCQySx9Gy2ujA7se1C3fFQnAM",
  "key2": "4wbcNFCTwdyuH6vnfrshXyeoVWZPRLatLj3Za1vAsKieXUcVc7BY6S6Dn7PgZjueXuvzW951EmR5Cdog8axm71zc",
  "key3": "2NLmnZtVrfTxXxpthyFCZqEb2ArnTysY93J9QKqQvn8hp3yCns5TVSknUCA8Ct1mpGRrbynp9nv8AikhTTnZE4WU",
  "key4": "4QuNwGQz6HBvThmrT7nLBg35Y5euwjPFNHwTpuRbeiBaPGbcPbGKWeXw6ygFxK2XrhCsf7sY5JCcwjSyf7cHyQ5F",
  "key5": "3jF2AyHTmpBPfygZnNeBYiUNzNqrgXGiZfvqV24QsRij8f5H74Ea5saAHc1Dcy4x1xQVgqXYzNSpKHvu817ggWUB",
  "key6": "LfwhLNAsLis1gadhLYJXYLN5rsvjM3NkWgQBqumZ3nBsnpNmGoVBZB8F5twh8iZNEbzCJSPcYWosjT5u3e9CQVy",
  "key7": "zw9haPxE8iRfGnJRgWTiHAknpi5q5jT35wbnBtqJXfkE8BDpbnSJsv8L8585qTA7GgoxmPhiQFDbLsweCyjEGQk",
  "key8": "3CR28GDTGFu9SrBdibNh4W9QEh3dSEFv9jXVMRRhEm8RfrZqX6cn26wfz2XkogdXQWSp2FjNbvDDJ33BF5L4s6AJ",
  "key9": "4rdjiVtF1nFiAT4xKTJTrb4FQXASvmTkEkxhFwLR6zLiCntH5APFBgTseRpiSRGeYZDZ2sMBfk8h9JEr9GjAKQTH",
  "key10": "2GgAWngRLLXcFpRurEHfDyWxCPnq3QUzUKzKz7CxFfvfGbGPCrkY2kdfHx8tDXyGGvpEfquEXLQu9t8zoxzuj7y5",
  "key11": "fXqESvAjvmV8h1FrEqSqkbYm5B7BuTfkYUBJQxFvHcrEzbFe8ESE9JuR2VfYhNB6N69hxe7y8uV7qem26cXbEpN",
  "key12": "5vvVB4M9J7aFcUR4Anh3AB2uAV3gQqBLAT2BoANxSfsRmjgeXZ4stagCsopsJYckQeZBqGYHLsbvhVVYjh91SXRT",
  "key13": "61j1Sq2DgAXLXCHDSNrixcuZra9Mxx3um61cZ4gHbzLharjVELRL2iheVco5GK3BNtZ3fYyJHcigwf23LCrCzZdy",
  "key14": "2ZRq7C6fYwnjFuM3DNfwjmviMvAYQy6ijYuXoeZJcBr5iwazqWK7krxGZ6HCzcZGK4Uhc43eij4xJc3XZfvT74nP",
  "key15": "4STjBfKCE7CSoFKFnE5aLqwyTs2JdnpdxUD7QxPMsTTRE4pb5A45mAbYu23qvSHLzDJRJyrn7JH4qavZ6EitQj9n",
  "key16": "5B3yZojwUwbffkpAW9PSyPPZ7mZxs5U5qrEUSQ8X8boeQYj4vCdqAZBhZLDgSpwCqzSYxmMvQzVKSdB7KQHKzpbp",
  "key17": "4Yq4uQSnrhq9WxesNon51LpdDA63p19nQb9BDSzRkcgs1oLigP7cG9uwkQn9bxwudLyPtArbPheWQozdzjVmVWL1",
  "key18": "3CRBNkLbeodaFRSorQSaZg6EE779X3kPUxCKWtg1Kva5dMg9RKN6xFty9RJ4ceXcWrF2nNGErMzk4ivaMUaht5zD",
  "key19": "9rVX1YB9a85tGciABeyAEoYAQo6HiMShWVxphkeSuPgB1Wjq4ZQaWmFHt3oA83S3eP714Adyw4YdgtsjrYaUdaw",
  "key20": "4FwjhmaZheotwDA1LucJ6WHxT35bEeyibVP5B8TYkLzBjgyawLLWm7uxoa64kBKYZdkEa13UPWn1hdkv4JGbHrZn",
  "key21": "YuhYZgChTtCNJECpeMK79gBfBAj4UYkvdPbZ1omJLnDgLrRwNsrQaZbdNUKQ2Ld77o9pHyw5HEFfV5iDjDktgk4",
  "key22": "1utaTVjVdGnvEKAhjaqaN8EXy1VR4H3F3g2dE8usghrUrLa4teApiKQXuZUQib7cUw3d7oKeuH2UQcd1wmRBgJg",
  "key23": "4AhSSPcAotySKFMmcfKTfAikPtLzYrrCZrzHkBiJuuGwEdthEma7GtU7yGcaynygYS1HymBhE6cDKYaccLJCpiWD",
  "key24": "2NmxrTDodoS9GbXJn2RbVyxEFq1BYEKmA2jetYGupgx5rSXgFoXg4DxRrP1gCi3psPtwJ4W9KGp3hU51XwMqAUeZ",
  "key25": "3qu23pX6t113x98kRx4jQn5btP4vX9WjhFLS1dv2wgfa6FAEyF2yjq79bJ7H3VHEvxTcGvB5DD9Pb1HJh5Aur9fU",
  "key26": "5Qv4ANHHBMYoB11MQPk4zhz6mxY8eEiE9fpURLedfxmr5zjPP9XoW9MFPaXR1AxzRzGLmxQyXKswKMnh1nRoBwe3",
  "key27": "5Y5Mfwy1rupsRufEZ8trJAndxnNyDan1da8VVVCwKuhYqbyiGvjzLk5mNScby565GfdNYtXKfY6uibwoDZu84LsV",
  "key28": "5KH6aoBSaH8rFnkQyLw1UBZJxJZs6jCams6KvXKHRorqNQKfUaknFRZLW3JfQfv3NkEGvhTJS8pvf8EXwRTFysdd",
  "key29": "BfspgrhVRS6ARWdsKs68K5U4nHHvxUgGTUfKXhLSjQGmykp48TcaLSMKyTrg4fY1StZTvpZfEY6nFu518xMYJgA"
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
