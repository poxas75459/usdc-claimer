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
    "449VjobeRSG1MPAFYszghL6o6YzjRnYoPdoVgtc17J7CS64RzKGNUBRndbUUsHd8sgsnFYyJaXZhXNuc49cWCGSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pcB9vYxvpyFHw3SVmEJesWEJpDwhc5hmMTjM4RbVcqngiRsYXMawMxCCSKtuWynHvMJ44LBQvEXmaEcRYCeDDUm",
  "key1": "54wmF3ETr6D98Ny98piXQsna3pBuiTNDwNXPJtqUisJM7ZNDqG1H7nLsnrMLmecgGJ5i6J18otTc6nCNogneCBDM",
  "key2": "eW989sRMqr5Tf4cpWWgFoJebpbeqHQN1pNRtsF1FC8yL8XYtDs3Xt3y71RGK8wcH1hkqYWCUw9ni3Gr1UrCaMVZ",
  "key3": "bVfMdHSx6chEzNJAhf9TpXmj11jXLhZqTsVQg42j48SPr1nYMWrxbm6Md3y4cC5LwGBxzgLvygM7mAix7oyQH9d",
  "key4": "2ZWaDiDHTx7r9quwLqSQk6B9GQriZDSimtLQsQvA93FHe5qgTHtrd5enh5vMTPYSDHbAZ878Db6bC6UewKBLtXFE",
  "key5": "5rmWCBT7ChYdPqJ8LF8iajqrnDxeodcqgQLXSyDxLZtdGAoy56LjgVNEafFVHVibFSYcfDT9179yWTADrxt4jjoe",
  "key6": "48LdGASpzd7hh91miZLbTP58FM9GDsYeTpBYCx1K65jFkS7vAHXCmP7ZuLvynH3Br7b2vV6vT243gM1rQxYKjaqw",
  "key7": "vtN5xQ23urMVsbndDQHWkBmYUaV1Fbr33FPxDtq1Ye3HnFcCd91P976wGHCdqMwWzJWHCgtjEyNoXqf5eqbbLsi",
  "key8": "39anwjVRRrcf1YWMAwFtVuiHaLkbo5fgRYzbVcxyRhv1Hm4fYigGoc4XWM2menohLA7Gu8ZXPA5fBzZwXUMkJRkK",
  "key9": "4ZwUpz8DjSysSHZciYC1dDBcrJpfaiesfBtKxzvEQMsh6VrtVFHFKHJLSd85LYSUdy7cw5sLfvND1GsEATGAvvWE",
  "key10": "J5DhBWURFmMtFQAZmkCE6NoEsvVJqew8jC5c2uqSWTVFAmHx9DQ2CRv9mZNDj7t5cj5XnNfxqJ5HmBZ3CHLDGQi",
  "key11": "4GbcxmB8H15TN3cVLAhTyXyYP8WisFETq1NpxccYigdiNkGjrs2n42A6QzBhNLy8FB6Xf7bYFA9QUo5QEb4qsAav",
  "key12": "5ScTxyMgLLwChmt2CBukkEFtFaGdPh4CXJtBMf5R6hE69caWkRaDD6UxDdoP69hbaSu5oTZNH3sXdmExBf4pqiTn",
  "key13": "BZsXjVNbGw8SUxJ5vXVrzgYwGwBKPiPRh66BEVBiMPZ6Z5EQ5P16afQZcj8GqZKqdx75uq4bNp5dfsSMQLz2nGs",
  "key14": "4HzmXVWYuaGzj243N8ghJNThkuMfxsDvVgnqe97iBGhdA4TAdZax8fjPatQmY8jJjtWWeWnPhxHnSSsWkUo9hEr5",
  "key15": "Dh3SU3ukpZHkV1rxp9B43FHKwgrmAbD9af5313mpHyfQBznahjg4RAuVuaud2YmL7HKsUvbwnc4PETdeNpfvQMh",
  "key16": "4q1xZUbMz6w3Ey8Cqw9thvUbuqa77jqw2oCjRQa39h73pgbBaiTXKAsEieAZ87bDEiKVF6DCQfoxfNVhWgGFtAxi",
  "key17": "4hvBanWiBa5pfaR8QJUAnfJeWpoyxPCwZQ8vTkrEbtEztGygVz2CjM3qw1o2F4AUe4gHRwdPrNEysDXDYKiTWuoA",
  "key18": "2QVCuXRuSJZLaaYumr7MfGfjePraefop3oHkLthExKAfKizchbvjzjMVwocUGuBNaTzVR4bwarb4XTzRrorSKd9m",
  "key19": "354Kv6UAjKGALifjhV7ZPtJy9yQ7CCeqM1383apw3FHHWGtyH6nZQCa8ngWYYzyfqXHkaegJvHk459o3tLzjg7Zq",
  "key20": "4zchdW2P85QQKR2armQ6xdpPGfNM8iSYyTw8dUWVhEWhTrU2pVR4HcvoE3xv8qAAweSW9hEMHBACVoJVXtmngt9i",
  "key21": "zoPMH7jQWMZE8WZf16RtefCXWDLToazmd6X8rguhvKppXDtRm3L67HRfUesNKyuZuXWfb8idwrLXkTN4VtJ45v5",
  "key22": "5WWpdzFcyhorcKWqyZkes9moZ6B8ZjL1M4WJJfkxk6JQ6mHmACX9TYj8vLU4J4DCWGHV7okuu17UgHNfNB5RqY6U",
  "key23": "3s8Bt7ELff9mhCMsvPJXqCMztfoKLCNVLogLjxmq2BtX3DAxbcTZdJupAjeKENg12wsTWRkTtERmqp6GsZtkuGNb",
  "key24": "4aRZ2f9ZvcbShAbg2ku325HETv2CgLwj8LUEE6CtPJmphuYyUnFYi6nMfrj2B3xSNhHoa3yMhfaN9VcvzaP6w2an",
  "key25": "4w3r23bL6gxsZEd7xJCaEfyuBJsGEgeaZoLJroBgsNsCatzP1gRd1RhUi8RzkpfCHBRA9mih3fVeQkQadnZuiNck",
  "key26": "WWmz1CLdPq7JsrZoFq9Lu1A5892jwXPqgvWSDz3HpaQiSiEYGtbcQZWX28o1bWJmQfxiQaFxzB9Hf2CmZAWdFBo",
  "key27": "4QEk2ZqkKX92RQhjVaS7UAB7Lw51hgwvMAWFxKPqGyUvB7Z1GNeHTd3P8JGkwm1sL38RS56627MY63Njh5fT5ae5",
  "key28": "4AYBVuVwUxgSJNz9t1MLAKCuZZqTj4LHvqYQ88jMi7zyY9B8zkSS8hcDz3tzq3K7AzW3V9eKgnNVTTA3HTMD1WUa"
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
