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
    "5oKQSePsLGgRA5ixBxjcRbWCWsxzeoyN9suQ1oguSmWXwCHD18W3BwtVxhPCqa6qAeRuomTqrizL7sJUKeUjzqq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSKopVatmUH2YSMyzdrJvUTr4iprri7XtVack3qa3DA6YY8evWMmZW6JjFrQFSBpPcKc2Pf8MxVp9cUFAMYPfx4",
  "key1": "5SataTqhySG3xsrYHJGM9TeqoeuNm4YKQ6Fuk7SGFGvzsch5tAKEvQ3BZuYpv3nJNUUV9MkYXYbUGsFs38U6MoRe",
  "key2": "3jAPGmk9ooJLnwaFTEeG1zpMP3zo7jHLeS7Mx2vJfvcUAp2C6yEuKcnosPSfwh3Zqvi7M89aRzKknkxN5vd8JgRb",
  "key3": "3zPXtRV1KK9q4j6KDpPHT1KwTbnw5qbqZewwezDvTkidAtscSeyrsC4zP14seYhUg9y6n8zDobeguQnSa2xCmnFD",
  "key4": "2ZdD5nB2YqjCcTvWpbzeLHqCEWZ5x2SH3eYodY2sDvc2bHjRtxUajT8xbz2J2CiLqN9qou4GRzCtMJcuxcwivw6k",
  "key5": "5WybtMrnZ9iqZgzBX52dLGBZZSL2x7CgC2ZzUcg2A1eUZjXdVWBgfLD2u7UFsK7Jyk7fkEGYwzghzKLMRAQhfqpp",
  "key6": "27YWPG18aRaFgderce6weJLtUg5J8sX4BynWDSyT2b1U9SC4yrn77NGHRGuMaSsi4fFCHSEpEN8TZp5EAVZU1QxH",
  "key7": "KDWmn8MDzvd7d2tX1YeU1z8zM6s6B7tMd3nd8ukMPi7edgd8u1r9H44RpS982KNGfNytAezEnJmDmUXoZGhLHno",
  "key8": "4iUrD382fACSLHKTPaB5wXVi7pncgHp2BGDZA3MG7z3Hcy3RfQAVPSjyWchBVRiEXGVPLrMk9Fpx5YzQEUroQhEu",
  "key9": "5gSU64Rrtqm8o492HnfhcmsfQ2byfdLX7iKwRRr2SKQH9zgVFUJEWt5RUGq2uGnQe2VzNqqgSZZZo6G6L3TyYEzc",
  "key10": "5zFtWeXyfrZEMuyEHNKzUkw59Tms9LEcXHeRWZ7VzsLvqzNgL3jyntLq1SJtsnUyCNkGkQ3rZniiDoikoTS3p1Jv",
  "key11": "5b1tzmVHj2rYHLqbyN5beo3rBzcsqFFox59Bm8PPZ1THvJ1zhEBqSbiLRUtdjWSWqhiijELx8shEdCC9MRZU9HYz",
  "key12": "4mudiVq866G1TsXakpE8D13jXkcB5Pg3o97azuJqFe1ThJd2aYVX2y2ZRheK2eBd5bgURbi4JDBc4XwJMnBz8G7a",
  "key13": "2VGiUQ2MKu8GDrdMkmkSzCW3HGDvfM35NJbkB4uvxh1EWqika6dxyoxu8Ef9Ua1JB6J4QQhQtPrPqwPQoYMwyPLc",
  "key14": "32shxWb1o25RuAbUYp322a3eceLDu9G97W2uhj3u2fx1M5es7isqk9iccczQXAmGJELwRFb8pKx4q3gpKsy1PozL",
  "key15": "3B7sPgDi8cNhn9t6E9ycCfzZqpxaSsXcoHeAupufTuPTxhrwdGzHcCaVAZUvw9Q2aQe7eFuqyJBctGBYzEvb9bTm",
  "key16": "4VKhjsVazwZ6wZeZFeXoqrstHJrXZVXvwMece1ov6VGnzahbfdnfeZ7bUXayip4n4DPMn4YkNLD7GMzSNaBR5pDv",
  "key17": "434aBMyFiM8yhuxUcG85dhTVGEsApNok3uvisrU2bVaL9MqfzTE2Dod87pHQU6qfgABrx62rxtrEauKjwpsoH5ZU",
  "key18": "34kR6AQ4ADKUMgHdPUbBAJnfjX14xLp5F6TXJrLv7MXXSqTLUaWErwfyf2TzgmmeUz6EsPHWCDqMgVT7ZgCwVSsJ",
  "key19": "3tFmex7nALdrAtk7Ptew9mXNDfHwq92YFPJFKbu7taBtQ1YEs5EpjfQmj8wm3pGz8ssPTo6LS1cSj7nfcdxcZsgT",
  "key20": "58djnTNGXpR55L63LfMi5fUHsyGRowqG2DPz3yTjupah4awrefVkHqQ9VzrnXGpmM7omnm7oeUbD9vDuCx6fYWMP",
  "key21": "3e3jDVCiEWeSiBcfGLVJtn1CSuGSwHYjMskY3LtazUUH6QV65KW1xmAZrJjD3yD7WS8FMxTDXSNRib3CmisFjd2Q",
  "key22": "5LKaaFxUqiA51mPLir1dBKzBKHLRKUrG6qvgd5dqMUamRctbxG3x6k7Lk3MULdKqDHoKV428J2xk1H6yRXTQ9jKC",
  "key23": "3Cz7Gub4ci1bW56FBJEMGMMUyAXtBoX7zZJmvCV2R52D24YMn1nGLnQpaVtQRpKx5cENoYRXGWh7EMsnxA9TAWQa",
  "key24": "P4gABjFkhe7p9mANgJ67VfaTejLChQ7y41r3epvL469SQrpGTLqwFZrC8xxEswamQNzUkQe3h4T4Ls6hNs4R3Rf",
  "key25": "3xBSNfhy7nBtERoFyPJnCzJmb6Vq3eLBXb5FUFs6cr593tbki5EXHTHnaWmj7z1UmTR3pptMdiDuz6wYqbUuJNMs",
  "key26": "3Ci1KPKfPQaJfCh4LKwmaXsyehi4aLGeXe17MthmvbShujUzmRHeQvF1xsi6E6GWhqtiG9x9Sb8kyRonZVK7TicS",
  "key27": "2orXvrf97W1Z8WosbhLKxdzGPbpZAgPDZz2gDxFBmMGJ88H241J4eT2SJ83NkC4cHiyxA2B5BC4VTbQALNAMrAkv",
  "key28": "WJdcPVwB7JcJEQfx5kGCyXiTp2iyFoU6biB4uQB4Fjf3TYxKvD413NQff4GVAWyDJ8kk1qmaWBox8XwYVmxZHwA"
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
