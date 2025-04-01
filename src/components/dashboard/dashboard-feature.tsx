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
    "4fbf3QgHfyKSGbGsz4qX3kMdF7LiVEh5cwCRt9K4RbZDmj88ZEwzHv4c1wate8XCc4Yn6YqTTbDWg3mgtHfj6R5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48c8uSTTx4AdF67xgZCTStZXwP9u4wKqYibG9iASYLgfc7KcHkqQyhx3ArJU8FiGq2qHaNuF6BaYyDVdwoh9883g",
  "key1": "4YBd9YiAoGpnMsbS3APKRVK2iDcjR8EJgcVggcvGSqMGAs7Wmr4J7cnmjwJGTro2sq13AnNDiRTzhP7MiFwcQAHS",
  "key2": "5uRGzhJm1xJSMHnYvLkW2ebahK4wYFGWjDCSPEoyD3uh8zu5MiCNhMV7KbYRR1r6qEQJz1c4cn4BeBoFLvz6Z79r",
  "key3": "a7VoYeKvwSWXE7AnnxaQeYhq7HkHBAiPFQRD9oR4fR6QCy3dT1f98spQMnwAPhF4WSgPaxWTnHyzN1Y9H6o8Uxh",
  "key4": "8Dt4Tha7dpREwTvR2N5TpEeT11xFqXgj2cmF26XoU8Wam6yFNujH6C7nANB8VNYNY1dXiXXaxXP3pw7wkExzCb2",
  "key5": "5ryuAHwB9VbXjEWYEL5PJEr4uHxv8HmoG7QKRaq54JDasVCXn77ghT7CkUtqGqgRjaphEH4HkCEAuy6KPLyRR7Ue",
  "key6": "5a6ppcyNpdSPeN1xAkm84ewPadNJCH5w9xayesXU8yrMmA3P86fzUhxsParKsHajLhLUnRjs4pv9YFeEiN9XDgRD",
  "key7": "3enTajxRasGf744RCdJtUFwS6zbqwevBZJcshriJfCkA6crGo3eqHKK6TGQXUVmDAPdgcT5fSrXGSp6849UBVcZP",
  "key8": "3TGyxQkhkaBPVuwpRCsYNTddioteRdjCdmRqg4Vi46JXC1XNchhzMVXMJHJMZDJ59HHeBfV1516sh9AfWxZkkYJC",
  "key9": "3VuYnZ4W6AMRhbYewUkMKTJJ8wNp2pdD2n31eKcisqEFzBLF76QD9Ux3nKNnwBZUdwAnUEXERycasmv1XtEYNJjU",
  "key10": "2wRid9oftd3ifthwdaFfyXp7WCGVkj8jgza1pf8GP2BfTkwdfrgWwCSaaCqQv66kfJSeQQ8wxfJKJX85Gw7MYFBS",
  "key11": "3uibS6N1NW4LwyKZhC5m27CXzRQTWxHuWZ6rodrWTdKGb5qUGGxQpxm5QzQvzfedjhDLLUEibYyCT7Qi2xARXkK9",
  "key12": "nm2Mx68GtwFA7JrsfJPTcoNzSREK22F5SqsAES5eCB4fG28seDdAezWAJSGLKkdy6LmFm342xFYYwH7ThjBH2nu",
  "key13": "5M1gbPTfZ5TQJF59xphnsvD8fbSusSeqrBt59jPjjLpQ1nMv2hDytCh4pqnqmyoJK3iNnUDencukNHsgCNRaQb1X",
  "key14": "3ivarVaAwg7F868QDdMrKCKFSEQbcdEDH2ECAUdeNevqV3V1dC6dGMs46izwiPmWzBbGaWFmBEDfv4PpxhyvRhyp",
  "key15": "2qGeh1Y4uyags7uq3SWQRo86N9K8AF4yNJnq9a2izeTRuKjTDyvRrQVqaKE6sD7SXsRULciAX9ChbntgQcGQXEGd",
  "key16": "mg1yamYcduBkiXf99bHGLvV7pZ4pWFQUxAyypcviv2gkFh7qpTH2QrGH8CCzeqRiSE5ecEbW6fi4f64qFXfipEE",
  "key17": "31W2ZHUoTksgjWGFXW1sLnxzxCzp8ynwHSAkxUTx5TZMZHotux7DqtX2dasSAvYZXxPq68gjmN5TC7T52ThweHji",
  "key18": "38DaRQdbfntsTiSHFk5WSK6W5jx3nhLEVnVob41zwZ1EDBSdnQ9S4PFru6W2TK38SXWiAkwG5gvnEV7V8UZPPrqM",
  "key19": "tFdogHowrexm3FTNaA5TaUQHTcnoeKgTgWSEsY9G8p6x8HizBF4mEhxizyq3mMgRnzhjvtUDsKDMcpjBMwFov1p",
  "key20": "xw1AdVm9jGEMqa3M27oLewDPJhDdr6V19jEWYofLDvxCQpLbVqbPDYrnuPeh2V5gcfNfH3HpPsRAVruxiFBqVGr",
  "key21": "3W9iV3tNn5nMj5w525pzwXcjC55hqJTu6tanQTr2jZgoyVmhU1mbPpS4qMrbofC5Wi3oHjeUoJmFdXPryUykX6Kb",
  "key22": "2ZvwmujTqzmJnTEgCynboYfDjzuDqfCGKNd6pxEyNALBqaXMwP3U8ypWNNs7KHWRkXuPMJ6qKwcVMD36A5DTHfTQ",
  "key23": "3JY1m8fSC8Rk7U4EU6H2a7st5P24AzrkkeDxDZ8qond9tpErYtdDZwiUuZxPKBeT2tAXA2Jz7fX4op8R18Y9gxnQ",
  "key24": "94jKDQYcAvisKoNNeMRkqpHT1a7t8iRnUwwu2AyCiDrxkDCFTkagYoYG4aoTpywworcYuyMgKbKWaAfcgBGQqQ5"
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
