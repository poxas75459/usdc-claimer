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
    "4h9dEMe8dt8MrH7pe9WsDUR5s58MTKVNphXPbDVtAYrJH9jHMhkk89GV7fNBA1Lg8WSPWKsuwcu1GRh4zb7z1i2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B8a9vTU8GVBGSn9eKzteF17JV3fJCgHu13gV27tou43yoaYkDE8XeSKgCt7hBcpuWfFsQttd8shqWXLu4YtsjSK",
  "key1": "2sVPoJLUpvUHZ6TYHVPwfVyVkckYcmhefPYcX8tY6KJUWXFbj2jJrPMDmyj8UiVPEwUf5UD2QWgynN7MMzo8eydJ",
  "key2": "2FNev1kaDHYSRYnp6ueQErMGumfPocAeCvpURzF4Vs9vjVnwH2FTEH3PoXXAGgMJS5SKMEE4jFU6Aq5rPE3qGf85",
  "key3": "zXUQcqk5BTWFXJBTvcQnM273BX6EUzMnH1CkKma7FFWQhRcMFWd85cBXFD4on2axkLtrLABxNm1RmhrsxCQWdZc",
  "key4": "rsD96DgsATZEaZFr5JDQ5kmsXCoCnfEmifMK2topdenYMXJNQDksZaYKYb7ZcgUhNipuBS42MoAFRNEB6vBoyK1",
  "key5": "2BgEsov3Zaw4vcYheiMGoGhLfhkp91X7aWZXz1MVmEY37mebRF2SeUYtJ2XGZsSptKnF1LxtzujgXgYWjv1mZ3PF",
  "key6": "3hrpdaC8UGa4naihkSMr73YUErWPwuWg64S9RB1eJSN3bZdEMpnzQwB652sYFkpx4vr4z99HviJuvXZQ9qMzSFwH",
  "key7": "iG1ybtWduzi6obuZXRGioACMy6Y3S1yarQVy8q8SNVJRcA81KqjLmaNPHrATMJGwptuDgVJMQb9Q4YyjjBkzwaf",
  "key8": "joYWSqqHAxiEYkMNcVef1Kmvforx4XuNb3TeyEys6SkZBUdPtCZ4nqpAuXkD73kjxr1rNhJvFdZTY65YCWXfGgb",
  "key9": "3eaGyzcngEbtuShMTN599bRiBPBohzqWu7o74jLzNEF7XMyVyFnRdxDYr2AK3Wcyy14Qmsnj6EQFDxCHsVoqyHqi",
  "key10": "5J1qyYaMvi9sHDAbhPzwy7LJDRAvaYxizq5n6qPm4zzQXqDVm7yEvQEBCWQSmCTpZyWf4kSMraeGhJ3DoudVnSPK",
  "key11": "2S4YUtUqxdCB1ErkFh6QT8RqZ2vxrrTRyT1QEew9AUE4yFXvr3qJErJmWtZL9PGUGTDvYtyoMUe2qSk4VJoJSbVH",
  "key12": "5jFhDrfe5AfmEQ51gLxwyW9XWNKwhJwWuB27APst2SSjS9wTxh9cd4W7L13Q297rcKXZADnaqQ7rL666npjg4VLS",
  "key13": "waXWdwfXL9t3sy3SpnvhUYvocnWvX86B3oH9B18nbqdehYhVt8VYX54GXq1MYfZTvi5HW5tkxyNkjnBeNX4VJzX",
  "key14": "4tzXnfZ77oxdsLPBaZ4JzsVa6FRGPg4SDwey3NL9jNBMLy6N8Rg9rcHL2UyUcAToEEvbnSwviyyhHDE2ueeALf1o",
  "key15": "2hTrCXaaJ1pRVmug64fRRZaSAmD3uzN83JDdNAhitPRR5sU1WW1R7UkmJrtwNZVYK2hLm4kPbDkWRcoJuLFVMa7p",
  "key16": "5VypQMWEtyscdenGLNvyYw2qq5ZHcSDJEx6gGPkQTRWv8JBQqyGSMWj5Ycay56mLqqwvvNoD3vPFCZX5R2DW5FCm",
  "key17": "4b3vBwc9ftrPnkKMGJWhzfZtYuYFqvzd3cE2zUB51gFMLdLQgyeFc3nD4BbZ2pXaaAYvruK3onaXbhQCzho3tQe8",
  "key18": "2HfnZYRfJv8NDgNz83caoCVE9hVS3cPyoEijMfRuCvvYkv4Zbtk1FPk3yzaqaoiX1tvZgJitru6myYVjCx3N9V5b",
  "key19": "4f5XvtD6me87aAUEbfS49SpmSYme6Thh1KiCMtXXojVdA3LkzdFcu6JFoBWyW4z5TtqoHgC9URUyMBqqNBcVKZMc",
  "key20": "zaqHoZHy62LmMztk9CabGDgvwNC3erUgjibQu5qx9EWbm6SGsvdy3F8Xws4umVYbarxFiTAHDtM52GYYHpeeDwP",
  "key21": "2GP2DbzqN1Yshevm22HwPP3dLuoma9xGEnhZ3h8kkH2KzGKCyF9PUqJbyMwFfs7ao4SPRPY9hRUhiMbAP5toSfc3",
  "key22": "3MyCLBN5w9Kk5nUZKFrHk8xSraiqpXZAkMnujWDp8xcVFC6fP1QcDa9RVArXYjNiwh2VQyVdXce79x46NuYbDJof",
  "key23": "39p2gHJSvryacfxEFs7pAE236i1n39hbjazm9V2E7kYJnGeyz8HqAsLCXtvTXJF5YWjSv17gNdsoDbRkKTc7Gako",
  "key24": "2jcswZ1ThvwQqFheeTSoetyW6v9irUNn9ra5oMCMqJWWLncwBzo38wUQjmMxcrXgsZMhYfA4bZWikq9BSkBb1ewB",
  "key25": "5awzHjY5JQDGDYxBmmsk1RzVCVisDAvQ9LG7ZiWEx7HX8mmAagGankovExx7dqLm4j5MEHS7iG5zTqz8GNh34sbC",
  "key26": "5rEBEvwAoxvgF2k567uZdQs73mu2B4jNYeNwJruadFuKdC6QMf1SmvaaBqpgrm1dScQ83s5FTPgd9scFjN4fjFZq"
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
