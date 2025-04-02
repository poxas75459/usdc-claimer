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
    "5F6zQj7EkRK9SJy7TgthxMwy8j3VGErvFJ3hLzwnkHfT3P1Kr343J6zeeZt7d4JE9wBhxoh4TJ5BfPTz6hLNdj2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39LDW3ufcbhHSvSY3xnAWXsNQTpUtDiNHuMsGE6UffRFDvduscyRN5pbvpuatfZ3Eg6g3NfC4nK1LuGKtFm399Lk",
  "key1": "2W5r938bmyJbDhbhhzy7UYHGu45JtWxAtDcp3WCoRQettRWki83YYiT9BPQX5N9wsnrNXonhxiWBskYntoDSTx3J",
  "key2": "2hBB236yRbJPCCCHJEFF9R7aMdFwUcXtjaZReHX6TkZjfWGW9kfGzLpyoFWSfANnj88nPwnhPyXLdFRhRG2n3aKB",
  "key3": "iD8DnyPjSQ2NGcqmVYH5CwkCcZ1vK6D1axo6PHAWC7y5n3EkTjUL4nDrztowBxLVWvNJV1MKLBvpHYVr2NywdRJ",
  "key4": "38gVheE9FnFewcbi2jY8MAWe5TcrjRuQYNuenAYtDDHFe5RvnYhpcseKNfKwibqVfPjzuwE5mecUBJ7T3NGTuXNS",
  "key5": "4S3gXb6Zmz6xb2dWSNdCbbCBTjj1R2e1i1JswFPNiyHhnTus3vbqeN1AjffujyBYuURUJxzSKY49H4rA1v5UMDMr",
  "key6": "5hGNGork649NgTUZNVuTgfopAT6G2o3cA6ZwtFQPjzuqZTZHpX6Z7t6C9tQiMoGPSxbQZAq2rgMK8WQckAq8HHao",
  "key7": "C9vNc8JoGH1aSY2tRR5UWkuEpdTANWtf9EerUQ5HqGpX1HkDdqgXwdWz7aFD6XMTzLzzRnBcfWoH9NsNhgoEBbf",
  "key8": "58w5adqLZwqUMuwXY4YgLhWerEH16E1X8cZcUFES46twy3UsJvM1zYkwT1efuRDeJJ6KcRoVJazATrr6aEdmTCBg",
  "key9": "2SsDqL3RJ8Qw8PAHHpP2utJCw6ij7v5MEoPA8ipPVy2wVvYwGZSe4N1Lng19rzAfiQGVrepSuaEJECq2pEvvQit",
  "key10": "bXuzobmGK8oeiWcM2bceN74Rj31Tq7tsGZEKdgGhVM3rPGrAnPdaUPwcbdncrZaHRzEQnhNymK58CMibJLchs1L",
  "key11": "4yKTft6PGuoA65vs7r8nngAqvierF6v3rUvRX2kJvAqHGrM7eBtmT41i29GtBjqXSzTUnMLTFGwvraEtGLwowofa",
  "key12": "rKV8KqiFx34rsmsuARnKNyku6J8E9msmjqqZid7fJGPgDLeSEj5Be4Vu8dusoe32WCMPBB5fF7Jy9Nw8B6BqgCp",
  "key13": "52TAPgMQENk9RxjzwbWmv13gjBz82Xc1mnTuyrRwDv5JbHid88w1FHLE3UnqUQ8ZYU6ZTChoLAFfHgP6H2rBCTYF",
  "key14": "3DDSsiypzgRUme67uGMEsJrM4hioYYmeK4jASendgwbzTVtuD8ZqtkvEYx7FGM74dR6oWNjZpsbcFnoZcf3ovNpC",
  "key15": "2HBv3r85NRbswV7dPpd5MFv3GMkUVd6yBMqSEmjmkeahktEKE8yyT3XrMt1VsvHddbnQH5nxyyNJB4TFZ6RfKszT",
  "key16": "1M6Drjum4EUHV2acrNUpD7gde6cGZDo5RsDVWQART4oydQ9xw5mxQeTyAHJyrpuy5djcYHuZngDgWBXD6GicUco",
  "key17": "5zjy36C4URNRDKC5cGawqZhn4XznXeakLh1ifRvcKhjNoBWSxBq9hJs2moyJtxi6d3Q8WpTESjXLfAndfoJgkHuC",
  "key18": "7fVENXtUpJjFztuLwvWjWf7p7D55iMikbphwW59e315gLVPZVasJM8dRe8ZNeataiaryMjsjpFT3TFWbu1fkZiQ",
  "key19": "4bNbfTeUyZutuSLWVn2yNFKLMi84R3iZVz5jJbRQXhX328W91AACi8Zy84fQbeNL4C9aegUPjgFC6E8MGyFm4krH",
  "key20": "39stucoyykpaA48Ak9b7L1hBpSBijsLqFPPDnVd2fZhLkfPar8DHdSgQPtsWi2s1cpMT2coB3oK5shcmNdgQEcsz",
  "key21": "S6mFU9AQUFC4DMPRYEt1B2EfMN8z9B1gwfEuZiVm94e5jcf2TYSWA1bkAHfp1XoBkNvs3qUWL8Nu6cs362b9ZPM",
  "key22": "49AzpbcSCX7xcSKwUTSMVYA9rjcriKtWPXXK3xLyYUF8Zku1o2RFvDzzzhd5pRPJSF5jcj6t4m23BjS8AAUXL2do",
  "key23": "q5dbz7TGvbbV911UiQCoyrUNdtJXWYpT5kDrU1fvUNHDc8nzxhLiqapT9WV64P4Yja1wCcfqzcD4kXgSmTiLU6X",
  "key24": "29knZUSUwz41tGJVBfgd7fWApSQdrtjqfmMJ8tbTffBCQABNF9M874ohLByQ9JU23G9ugurgkj4UTQXECzYrXwNL",
  "key25": "5V22g19E8R4rbfNMGWdBYp8EvWPpHXGUvQQaXeM3gU8Qn46cHNrkZknFmvf1EBgRF6VBsybwyj1JH5VMoW4ZJFhn",
  "key26": "4foYBp4i3yiCfWmzi77qrhafGgu3Tap8voBJp8p1M9pfAhpEqrymb8BReYnKkdkm6VpBAagStnSSWFYTJsq9mNyV",
  "key27": "3otjnokPBfpwCeS1pRpXtr9QsS5XAkRGaS1QqA6wts7TXeXcVDbBVU2vuerdbzhUTKufi3AxsN8uUjQB7wKxUams",
  "key28": "3TQWNC8PozEB4YFQ2iCvJU6tbWqabVj3sgUSMxUe277HHLzRzNNPE5GFwDZ4BK9uWTMf93Ztq2h34a9sHaxCThzF",
  "key29": "2Qc9d1Kbs6EhTSHuMoKvVcsyrwEmhBpPin66qukFzD48cMQ1CgorwcjT3buwhuA4d3BMfWqKbrevoxFCmW2ruXNP"
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
