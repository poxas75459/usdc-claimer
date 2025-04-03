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
    "2MxpqqQAwSQbDya7HMgi3bUUSrNHe8sJVKNLSchsqFTA4kJaphormKMx44N6K31p2E2sxjbWST8xxdok8tKzafc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MxiyPhnajy8RAPTtnRCDjzDFqe5qCkhGGB1kYtSBxdygyrAV3Xb2SDkss3wWNf3uCbSQYT8bzEdFtFjXt2mzcfU",
  "key1": "2tetLUHXYjt7mmdLK9w1FUMi52koG2HuQ9RfMgDLSfFYhKSTwP2Ka4726io1dxsuEmdZXFXqvK4TmymTbCjAYHj7",
  "key2": "23TNJQexrmiQgM5XSycAA1rmVvw46bggRyJewN6p8hW6BeY1ca3ggvV8JuTeE9ZTSYEYcnKfzzVcUm3htrb8bNYS",
  "key3": "4JhihQAhyvTJmTDLAqCsLBeYVbxCC5bB3gFbFMtgohjZ4xGD4v8zfy9UW8Eo9s7JmDyyhjWL4TX9ssVStewkoeN7",
  "key4": "2oqfF2zy2UPfNqMZF3LQ8G4ZAtKkWUH7JTdGc2aotciTCHBf7FaRuHtaFVzCUXapZ4xeXFJAoZYQKdaw9gVkqQtz",
  "key5": "UhvqxtTzscWeidnNXCPyU12uL8MkvwuBXzpEZbAyzZiS1RCXEW3e63fwjLhAh2C2VV2E1SWgfkXJRixThZoLcC8",
  "key6": "3xPs8AeX5fehAUZ7tMFKa9JiBCRMHGR4zgn4CK4Q89c82VDeFS3LXpXWmPGgdnA2GYxyty4RWnEDJV1Rs8vsRgEx",
  "key7": "2Jm72gDUMEFDuan8SPxYvxzX2qPWmkXY8oViYjXxmwy34Kz9gjiLGoFxzjfxQdHudj7bCUeT7717VqcEb9YGsJuG",
  "key8": "3LXCygBkaKwTGWf6BcJA3N9jiQNPbMQdqrSP1yTQmUfTqPRoBbrmgS9sRFQstXcSrs39Qy6qjyQkRRh2FsniJYLp",
  "key9": "3F21iB3gJRxgqMZfU97xQBJDPyezDswkwqTK8aAHB7Y4rsy3wpixfH3tKWiYb2iVSSNx63H4NUnmbzvQzXoCNUw8",
  "key10": "34xC8xDEq3xpqkb6eaGHwNDHS1RwvzbsVNgUFYwUEWaFnQu5g7fBvR63XJVMcir6Th9phKWiDj76RrU82DQkpeLz",
  "key11": "XGig9SnSFvP4kRruzGnBdBMWjVvozcmzsQ1oT96aV9MACYNe2GBYEoe22V9BjShpz3hn3yz1oueRsBh7Ns8Zy7K",
  "key12": "5LvnS21gNpHyfhP6UvcRLz5tjNx4UiuMkkxLRaT7Gs2mhZ6zju6DR8VjPKo7FzefWzSTUkLAVoLGFJhbfsDGR1fh",
  "key13": "5NAVNUqwKYXJm26FLQhrw5WtXN3pKQtCh9tQigwjnzn96GDNEgPMG9hpQtAK82rbVtBuwzYDyQP5LQ3FjV2gnQAE",
  "key14": "3mAKcZLXQiwBmQp12dnEo1QqBLba4YkKcA9zsrFA3jTtXnbMnMW5p6XN3jVd1qN2m9dRY56TSm7dE1oU3aqFpTiE",
  "key15": "281yXVTZbW8qy8mKFXGDprfXSknwG7tqVZMaDaum5tEejYCgyrTVZitNr4KtiCk6ZpGUpDqHLfG2Z5o6GDu3TygK",
  "key16": "UPunav3KoKg2HQppTs6nt9gnxkkC5Zvt8VWTa5DpmykkiPHUQ67sF2TE9BBqesCq5z7Cc3kGV6aqQkLZDgGFfG2",
  "key17": "3qYQ2wM6LR5xJT3Cq1hAsJJsaoNFoivJVQUCJoMMufaacFYfzycUhQWdJ1NKqGxN9BUnSYW8u8m1KovLz7xeCcc1",
  "key18": "36zyBjC7QPYcFMk2GWMJrYEwbPokrocEZgJ7Lw69Apb5GCvGVVhyaqjaVM1YYnZVz8L6G7owKLu1AzcZ3HPUbebo",
  "key19": "5jm6jPPUzKtoA2M9P8QQUhyde57A4HJbkGHKQpcKY9ipkGt982mALToJepgWxXyHN1ktCq22pRVk6C5wo26fNYtj",
  "key20": "AAJqU1sK3yoFrCtffrC8576Kh3krd1A39adSuYERK6kahXH2x61RQi766Wdm6mPd52F9qZHptHFjv13CrxzJwH3",
  "key21": "Knv4iuNqSoVwTJ7Hg2JSU5a39DHbP3nQmV8Xa2ba5W3PGDD5ydBtotinTzHWF2zr4G8UVBSbhgPddS9Pf7wZL2V",
  "key22": "Fu4zRG3sxwr7fu3PKkD7pFusUaD61XExgUVML6u2f1tU5wGQWzUDyyhMSyPiWTQ3p7ddMnt2MMUNwUPVXGHJq9M",
  "key23": "2cxF9BQLo8JZoiEMoDSn6JANz84VKh7MUrd39kTMD4DsBHP3TCx7fxTWgJ5tCf7rRrfKK1bWHFA6LJ8UDpxpLpjV",
  "key24": "GxKfK3ppmXQKyjuUdEZuPak7NsKg1DxKGHFfBt5oJN7HZinMKTbV8Zu17UZh8fgQmsmfbGA3B9L37HDgejLFCQ2",
  "key25": "2kYUjEt94e9ar7RK3ytW4gWXXQmEXg3xteG4qsuAXBR43j7JjJg1ByzKanGGUfP2eF334QV5wH2MZ3Txq9G5vmny",
  "key26": "5gyn5WCjohTEotrvJQkJ84aHqj6FThoxtJmVAR1i36AnyGQmWJnJyhUgtZsE8rAtUk5yb2oNZscGePsWJ1x7Wdkp"
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
