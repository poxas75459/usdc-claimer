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
    "2BWAzZr4ZRzr52a8TzRx39Tr1siMZFJqgDbQcR2BRcmWy1rZz7X2FfqB8QRrhF1hy7UkQsMXr41rX4v8QDzB1PKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cNdpLvCowfaTU42RqNKg9MYQy2zW9tzfnRUBUGMrZwDAvCF8iMdbFDDExdCD8C44Ub4MkiYZLaYpBtBVMfU92L4",
  "key1": "5bTo4Ymo1JP6PxaUwDvEjsMqt1x4AY6mgs6qhGpcRkDgrRWHwxzD6FduEmZG7BDKQCkRKpzoCarqMCNs3aJgNdD",
  "key2": "4VZ2x1geznGGFcq2MfDWojy86UBLFU4onf6vVHTZneLAV9isDbSyQBLDJgb2Qhq2JAr61VkvQWpmbqLbSTX8he7",
  "key3": "2UgdXJuNznJMY7yKEyAQZjn7ytvzXqQdJpAVdTqZRcAhUsLVTcqWPupvNQhBNvQgQjJ9AUmMycLtB7U9HqhJ8Yi6",
  "key4": "z78UywYAHX24RWkThC9vnfdQ3g8snihY2seppEuTEveB9yQq25rwhwQ8KXu4FrMab1ihRT9FvNq9F2Q9Np252Er",
  "key5": "SngwdBn5zeNGCdfwNPifvfc2yLkzwPQoCc62dgmB2ezjkbT1QsszSNbZTAu7sxFfCCcAC3d3LCy8oQah6f71Lqk",
  "key6": "Xv8ooWScx7Nk5xqntFFjNMfXYgAeEA5dXuiRWfUrAe4c7kBm1qBLewgPZQ1hsEEQcrQvY715C7tzet6CSRLDnDW",
  "key7": "5AKV1jJVbP6gBCijSjyVchbFBoSAtLC6xYPscEfFSnbqj6xmDN5Tu7BHnum6PEd1fj9Q2M24o4q1QGzPwKtNNG5j",
  "key8": "uWkXiD9S4ym5DXsC4yxNUVoWZpCfTwPV8mza6RqPQEx4eM1svjJKSZoJuhv3ASfvgf8e4bJmdW6EfGjYPEAszu3",
  "key9": "sCnu45dbpEoSBoGAw5fNNVEszBucCnMPrtDAFK4CEuwSRWUKxiUoThLru7n9A27Xb5XUfYatPt4VxTiCL4ZzVhR",
  "key10": "5Y8Bk2iNEthCZcURRYbZVMqb5nvrCJGbZ9fj1qQHkpdiCkGJFbApjh934SDsLEs51TsjamF6ZwRm7YGwSStrdymd",
  "key11": "2YrjftoiS8B2wvVt8qiKnzJMLhRPuKNLZZBDJdBoV16poUisN8TYWqLK6dw7kV66vqLpgdNV4pgfTF8ZM9eaFqaJ",
  "key12": "36sTuRCfn93TNXo5fLAqHfb7kJv5aX8ZHe7Pa56Z4h1qgrw7vhscq1mThExEF9Ni35rBiyWEXdXNP4WHLUqReGcz",
  "key13": "3yjkeFmVv8hZmBXfFCoYJE19kh2g2bZj3HwDSfUBhGp6QwQQArUtghtajCQKqnGBugXFeY8bmyNQWxYcpg23ibCK",
  "key14": "4zhAmWUkcEMjVTvV7rmXQEY4AK6bM4dZ9MN3N65p6VFQmfH89EcVL74nCLbChoagm7xzujA6sW8RdHKpQhxZfcgv",
  "key15": "3j4nYZSTFLi9r2hVibcanrUrwSu7wxXFo3SCiYWGvHhaBH8CmhUS92tRpxAjc8b4W1xa9NN9qfMffggJGEqsbpyG",
  "key16": "3eEZ9pLzEwVb2v49PGsaWM2TzLaHRQ4CkauwBbBVPegV7Jw5HyH7MRgP6KGt4WNcRRL6vWoLWEyRAdNfqzKqcMDC",
  "key17": "4PZ5NJjAoUE2Ap7kqCNt6HjJYvUzqFrnRwqQNB5aohCk9Zr85kEPFW4fdbgtQjMB3NkamrAUqcQBGA9odx2DBEpV",
  "key18": "sKaXcegqorcc4LV3C88f5KgvcftqfXDhjmriPnsk2UPk5vcEvWgw1dTkkojyipbbbit8huhx8DCQeZePjnivF2V",
  "key19": "2Mw5DWocmwas83N5AST8XnGcQFbTJ4UKzt7sWchJG7po31AqDenfsbC6mGK8YUGGJ3B6wogKnKqm9JWmrb8capuD",
  "key20": "5ho7Xovp3GsfRkcpR9VQS94xQwz7dDFEAsGGrgK9bspRxkhr8P6kYUmcXsieCX3bWaWPGKYcNueczbTqiQdxWzbC",
  "key21": "3376wgKVVzmgHmzD41RLHZjvprXprZwA53stmXdPiGoJXB9SAtgKdJi8XzWTMWQDtVSnnXiijjsVfidL2vAwD76s",
  "key22": "5Ah4dunXTU8h3KtUJePUmDBWVZkzN23mpbib43JwPbZ7VSzqEdJ24mXUMe4Jrj6feigzZb6o43xeqSbsJHNVHTey",
  "key23": "3tSiZpmVVtcdU1cs6yyUommmC4K8qrATmsxGQavwk9qzRnDFc5U8kSc5ZHfCZ2YVouLmQ6wohFABSNEyHzAksHH4",
  "key24": "5t8euWuJr6a8ZF4U7LuZLbPbYqNrFdL2WTRB993VCfPC7NFX7bxAYR3SuFRotgtsUG4PeSH3BkwvQdUkcxfWPv9Y",
  "key25": "DzjNZvmgLUtshdq2xonHshKn4EsQctbgeyKFgpQNHUXMVfCapxGjMcESBYuCFYTciz2ZuapR2xn4B2NNo5ETBpo",
  "key26": "41YsLTnfw9dNi4x1PxDXfwXJ4m9uHEzPg4p8Upd31eUn6wmArbCYqg8xtEGQ489K9gZ9L3c8fdgbaJ1YFmbipQNz",
  "key27": "S5BbCoTxmCYtC7hAfjDDSeWyuzjCmU8LTuYj3k1w9JA7ngBeu9CuJtz4KcNjkvUrXkPREpKPwt62C2y2pCRbg88"
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
