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
    "3W1DJEQpkbRvYrM3oE5vEkfH2TM6m4stSYBbwN9vEsc629jSnYhAWbYPQjK7kTp2bojRJJB8dXEGgQQewgEmc5EL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iD273fK79M6bnA2BxypHX5S78GaXmpjAkMsvb3fALmcZK9WNeQpjK1wQTSyasPfJ7zrEBKvAF2YJCwaeZ6RXkHB",
  "key1": "3XtrNXCkRi7gaiFKzDR15PHBaHtwtZEBMFcoYZQU1sGjR37yohizFjV8M2ejqet6CwKv5Lr8PtTkCYJQ1qfCp47B",
  "key2": "3idbjQF3Jpgkc7a9iZkUCRocA2d9pm9sy4Tyw1VZnoPuKkCH55frJZ92NkWRYAagBkG1MSz1SgKxzMvwLJZoM8MU",
  "key3": "3QzD6bSo69DHFJeertBe2UbJPmWsDuhieEiJm7ZGuAZ43aUTCuuRGka96jynBD3KdBZigSqw3mFcri8vpU3D3tgE",
  "key4": "4gEAAY7F39zdMLWBG6wPtVjMxsKdnQjH1gGsWTtEw5gsidoocwB3C4ZGHfrnMKimCN475qzXTyfKobHTkBa5iFi",
  "key5": "2PFZy7zqMD1jJyy3oR5D5zQ9Y35J3WkfTDMtDV9gbR3QZbczUMdhEpzcpGUuK5FauvAQXhGJWpZDEg867u4c5ReV",
  "key6": "449Rnx771SWjaKoQVdivJUidhp8uXvSTDLtn92jzbVfbwX62AxvEVE3yNUxBycKHBVCm8XqXAByqgWQr3GcKs2h9",
  "key7": "5uTZ5oTQCrshr1pcA3t6NyA9iJ33NzreaGKjFjvf5Gf82w4C7Rvt5B2kRELNkzp1W125NuEhc1m1FpDru3fS7io5",
  "key8": "V3dJWyHaVjvPr9AKaxEEZVGiQDoVozKEYsYhfosyfhk2oW1KZneXHd93nyMBznyGsxeSLyQ4hJwEnnHA8WNES5a",
  "key9": "3MQPBsD5XcbJ3aKojtBakXyq9tYpeSHCQZU8kWaWi7C8ZoLosG4UtuDAfz8rAymKqhteBLxzzNpAEeHYcXizsnGV",
  "key10": "2zGBsK2nbyv2jR4STGSFRSddosdtDErcU81m7zRMV1LTsAv6t8mRe8hSjCzxkjfm68sDhyB2wKQ3BmL89D14kz3h",
  "key11": "2xTZndWmZ3ZnMUvXhSRYYC4BfjwNRRcCUgVY9dNAH9AkL3fx8EHK2QZAUqsTurn3veGDtQYB9pyX32feuvAmVAQ2",
  "key12": "5oRchixaW595xPXZ9fSf5hMnmRLVzhi3jTbgxXyCzrovBuGJ8y4pdycn7p7XvDUwwQ4Mhr2HhGiwjBqThRRuedxC",
  "key13": "47AjiNf6nRVMSyV1v7E9FnU6x8mnsH8sZmYRztAVy7wxy2hQo86omKTb24AQibmbC2xzZvx661gqi3zXHjuaSiF3",
  "key14": "4qRttA3P1oFCTzj33kd2i6XgoM4MMsijLTK5Rar3KFyjdbkjz28YKLNcchb6KELF9FkJEC9yBCtrhhUbvaSVGbvP",
  "key15": "eHt5sjrdubUQzyvaNoiKDj47Hczct4ugGA39Z2bEvnnjfMsTm61acZatDaf6kgEjZCZqM8MjjLyB7qWuvi8hYwb",
  "key16": "5s3gNbXLbMLCx1RCKvHzaQhXQHxUo6TuFApm1Kz5KcuDQa5YUteoeEEWkYWNfXgyYomcgFpSjMbLpTt4DDq6hEMc",
  "key17": "5EWfJ2ZGsyXj8mB8M7jpdvPjGx42pJ9mmwMp6ttRjubbbJSKhp3NMe6xSyUyJgjR1U1koDqStwJNhZjU4qzAuPmJ",
  "key18": "1EjPbyGU9YkSsstW9q6ovqrTUWrbQrYJpB4i6xvEQCKT3ZHe2QiZ3mRJLwR1EBbHskjCvr8XYeRrzsrfw8ZoMDn",
  "key19": "4r7viaKBr733sV7i1FTgA5YvBVtdywPoNfNnC6U3Lpj2znsQTpE5yxZkrym897ZUwFgwsSgTD4h4NvgBmzyWKNe6",
  "key20": "2rnkM4u4DBUTP9pRcMES8qstmjoro8WGUSTLUEzDAPZMpDFWbQXioaxZaoepoEYB9tsyprShs3uXV6QYEaBQzqqV",
  "key21": "41ABidq8rexui1ZJGdzkB74hcJm3nThzhhWLqAa7jjkoJ8FrYAoj9yQjjh8rCTESymmF8bmN2BZReWwkPMMQ2E6H",
  "key22": "2ZAhXsa7LKXmdSxA27sQoAXegMGcA2uvcng3BvGyB52PLW9i3dcB59UDprkXam4s4K5m9VLuXp1KPY6uQS8Tyf6f",
  "key23": "36Y34hRgJ11ZsYPfLfPJcuVyq4FvmddQvSbeFNNr96uXbzeeyEtNvezGU5v6mzayVW4SgzcZn4DFgmMh1XFfxkfH",
  "key24": "3iH7FQhmYJyFvuzeshfz4uL5wWejG9Kb8GnrKrXtQRps3GRxHZ1upSkfKqip9ENtEDDWNvDDKQz3u9MXqBD9cxbS",
  "key25": "4z4cP8QbTQG6GxpHYZwbdZPHDNPB3erCrUNRu2BPUPTvkK5iEECGBtftbQR8Ge2QLWvRwZVo3fTGP2VbiXheb1B8",
  "key26": "29h1KnZjeF21vm5YjGYUv8WAfpeWzLAU7JboD2qVwbvEgRGc94oQhuFo5pe6LWvx7u1ZBh6CtHTZHj9hnPgHM3GC",
  "key27": "5RQdP56YKgboEN1KKLVzXGgYCFFduAgvJQjDXX6ot6Vtmx8USPvuP7SCsiAjunyjnjtwqQtSrRnCtErahzfLjuY6"
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
