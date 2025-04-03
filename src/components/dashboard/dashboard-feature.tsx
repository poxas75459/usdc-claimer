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
    "3YgHR7QzUdc9VaEWndmJzwweC4haw2ZZmgAg3rPjCkxED48MG1JecK4BYyV6Fc7iAP3WkBFUvdA4ieywQaCtwHcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zTtnjDhuw2ppQuVrNcYUmRSYpNC4MZrtcMhTiTdh9RTn8qg6EhmJPicXNoaz86wWau53SNq25sA5ehCsoznFknj",
  "key1": "5JjiKQPkTzLaPwwn4NTsxZEkEjwiXFr7FoKP1fv76qmfCp4iQwmaNjGfWwFbuHuJQA4k8AtwpKgyX2TnDcjDwz94",
  "key2": "5Ux9o1QEz44PLu1jhVb9au81EfVA3q3LigdNbqVcn7xkGCH8vLjWHWJQq4foehENahRiFSXjpa8gUqXHwyvs6oWe",
  "key3": "3nSV8ExNyu6TKSiXEagBxi3obL8dGRHMCPTh5jCnRCwyy6Q7puvAqzdvxYBbSgsB7ti5mw7GydWAhdWZkcJKccRS",
  "key4": "ShUoEdAPfWgfuXxvCgDncd3x1FuULCrApNQxEDXan6L5ZTwREAiiw27vfVtpU5BKMBbWERT82mUZoVidmjimETT",
  "key5": "22Pkj5TLba3aULcKtgtGv48Cc93RG5T9GgXRqwh5rnZfgUo18auNi8mCEdGzVcDCGxmxpJ7BMCDQQZtVvDfsnCL8",
  "key6": "4fZX9pB5Awf8QWz9ec2mcT9iBWD2GTcVitNEiJWMfTiQxZT174GMeKVbU6W8HH6v6ueVxekTrnKTUDCRKw4WAjne",
  "key7": "2zZtR7ETAgtc97u7ruARsaD59VTmrYPVLf33h7oWFjG7yffL99pckZxrrGiM9nFEp9zyYDxNhYKPn57bt2dzY1fp",
  "key8": "4Ma16zgRNU1MssBGX8QJ12k9goSwNU1qF8ThSNgSvte37gyD38RyoNDzsYTxH2uf89bSUf45cK5zouRVb2R1nDMy",
  "key9": "5NiS9DTNYKGSaWqydoD2zizBpbqF7ZeyaY8TF767vQVQPVuQV2MMDH7YaxP9bfnRvCG77BGdhhUwyeaAp7m6PZnC",
  "key10": "5bPXY7UNmN1L82GaXChRp3RtCGkgXMUytwgoMWr8Duoh58j7JZoCqfVaJ1YwjvTpzkYr6FUGWtvGVFgJkSFekBKq",
  "key11": "3RUQGwCaWc7TxU19TobESMVXa9AzkyLkY65DJ596fBGfMCKrvFyFpVFcs68qtEu2CXeSynLYLAuYkAi6HB64pYF",
  "key12": "53weNQmVLwRxidGeBFhpyvGzQdggc3CuEay34iNfaSqHSg3StTWJREMY2qujb3xijzmw6WRF6X7Zs6xQb13xN8sj",
  "key13": "5bVPMemus3FSawvSM1QZLMY2sjLrdYXjw7dVNvyEAJokUWopVyZgVcmFWrvMRDeowu48nSESpHpApYDEGGRmXsxg",
  "key14": "rdtohAm4pLG6e4RBdBcykE5edcKY75v4WbWQHCis93RMo41KSszbLERBeo4boBQNZSioewjmQJkMz8LZGZEvEeh",
  "key15": "47xyTvu5c7L2LxQF4rUVRX4Q9wED2FgxXNW9KaMjx4ssVgFUUv8XNuMXxE5x6vpmFMsm39kTQyrW1Rb9Ys221Q4c",
  "key16": "4iuwVLUQRCHRcMdwWiHCJFg7zEkdBCkN8Y3Bo3CTyvYjqx5mEpJenfvqMrk2M363fMm3k7GyELvEnPUNH4Qu7q91",
  "key17": "2hKhakseJUpGKUDYZNLY7z1Pa2mUfzt2YyZ56dtiSYDgBMiqygzDBCKZkxNDH5tApYDQSVat8yJHwRCQ3tCkHgze",
  "key18": "3PN4i9RVMG2uM6XKPuBpLpS3FrtHaGTjKknaSikc5We5xjJiJHCgbfWgDzf8WPBDd94agfxV81bKuwg5yTWwD1Ta",
  "key19": "EHVQDtsBQf9m5ayAAtZdHJFdo1nvg6ZsJg5yx22sVTqH6AsLXRHHuWjAEvBmfoTi4F5eUnu6rN1x1ncGfx9ZegJ",
  "key20": "54yLqjvhPEFUh6ZKBx2XktHKRFGadr4E5YActstikXpjYUm2wH7uBT6aQ66g431ioWfLdcZriBH3mdAkosBG44bL",
  "key21": "2QsFawwy4FCxNZVmstz4KxJ9FK3mHnYsU1aW68Nj2tyeeRepqFYxVpMKXzNCLpC5Gqe5iooQXQb16yKeDRvxWEpo",
  "key22": "4W2XhYdHDzvTtpRFcwLsPedAGEoZ6i8RS4iB8MzrYdKYQtdfm1S1Q8Z1D5mFnf7YkYWBj59rGgkNSkysB7A9Y6xC",
  "key23": "5AfmcptoCsfuyVRz85bVz48XujsCFv6jbePsDRzodmRVJP83TVXqas1maEnbZ4nGh6yjmu4FHbFNaDaoFKCZVD4S",
  "key24": "3uy5zHUZk3xdzs7d5c55XwNYGWi6985bn1yUJRM54UsQ3SxiiUTGLXya53N9tLyssnWtyiNk7cDfKiBTyxtUcUo1",
  "key25": "Q9BVTgXvhcPGxWMEHns9X4RCC2WCrZ2Gougubtjy9gJDv6G4YrUsEYuBSTC7go7rbPEQsQ3jsnb8t54YrEDndUL",
  "key26": "34PPK1jRsDsaz4VD9t8MYA6bCHLdihMLCQKuLkaKCaQ6kdmfMgqTRAgpr4mht14e1pB3Vrby55DXw8fN33SmwoXv",
  "key27": "3hhYkApqZzDuNCWWZ2n5V9a4ZojAV9ZJ4XNqXsLskWMRvYH9SNnbEsFBKPiQv9k4N3zsmdHANF9V97H82s9qxekV",
  "key28": "5Z2chpiix1iuhzN1hZM1WuaWzo7ubtdtixdwPTvwNcLh5dd9TNZsXMucMuo9F3yT6v3cdjqqps8W1AKrk941b1pq",
  "key29": "53NUcNNq6kSmkWvMqyKPQzaBxbz25ztuGsF7cr6NnfanALSrxVxezrW99816xXpzkH27aacuTY526tcor31GsXk3"
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
