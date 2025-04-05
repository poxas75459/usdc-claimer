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
    "3qoFF82q8WWZoahYwefyYoGMVoFqD2JxPKUiwTN11A9JB5Jq7dgkdeSgA594tFvFQdzsjtEK95BTENDhSNrMdWDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gRRUzCq6QCGCrhWoA6YQZPsQTG7ceDgnDynX163BB5bpWvEWZChWQnZKoCgMQ4hLcFKDxqZizzLmUHZ41Lad8pW",
  "key1": "3QBRyagZkNnCdLyU8xh7tC4Yxej5qFGT6iS3Ldx3MSxwzosGBzTDuALLVuej4PM2UQYQpUnKLwTWSJTsakw3Ty1H",
  "key2": "47qqiS7Zk5R69QhMsRtZsK9TjRbEwsu43GdPRGnm2c7689dQ12bwyeQ4PRJcf19XWFBeZ9zZN8GxeUeHscZR7sQv",
  "key3": "rJCEMSQn8qxWhTzimZaFuvPG921qE82MUn1GWTe6hWLPiN9bqd5SDZswCxwL5DXsJtjcPQc9Epi2GSugkgtjsrH",
  "key4": "Joh6rg67jvrqUdqPij2AZqTmsJukJXPBCRRnc1JgoHN2Sr7nDvrp1JR6BYTdBMZu3GWuX7RUjzCGUPTZ4UdwBef",
  "key5": "2hypj1Qvaa1XDciwSPoV8WY9XGhwNmTdFMUCmi4V55gKCPuxXqbZ1Kk3Tsx6h5MQCEU1sZShwKt9dm5r8Fb8F6i",
  "key6": "3SWCKB6UJHxsdYDE5PoyUqJ2vN1ZvJKHM7k6tXfPCrkqyZGiuQiwK37733yB1ZbfDGiqRoAS8TSYL1VheY7oznsG",
  "key7": "3n6KeZhdGJdSC49LeNhgj2i44GvBqj2i2jxuGU32wBR5Vw9Y76EUMiX3f53qLGXMqQfmTf2RvEDp1CPpDC1FDBwP",
  "key8": "2EQFAErdPtiTPC5W9tmD9oL1j492sNzEoTRK6BQoQKsJnfPVPrmX4cpG3wz27eC6FRWYTuXaYQUEE2WaS8oA9byN",
  "key9": "54unu3DP9sc8q3NFkzQUyYqKk619aKAj9YdA863FAyq9XnHtPJwugMUWJxvjbiCF4pbW2RUvfjyWhYvCRNKycesi",
  "key10": "3zQyvPAaJRofwKdWJJ8VKLC1NCiVYdTSq5JGpYC7Ncd6zKBLpRizKaBhYeVEzzmMLu8VLAdeiKqeDmEfH1iR9JJY",
  "key11": "2aPzrJ9Cj9N3VJyLL4dA1UenYZum7ZjJDGMK5C4p7eUCcE3gziRyqgtuNKNwQCR68VqR4jkGfiWo2riTZnLzhfRD",
  "key12": "Shmn7sP1RSjtnC3ykKbTvtoBpUFgz6emfLUKcNLXF6ttwSEL5VDTWTHKTmBmLshpGmShwR6sddXHYpA9HSrwNhF",
  "key13": "2frntfqatjXA1qour6G9yr4Y7JA4JQ8DZujcvZhZ3x179zLyZfK5AGfbrZJKbCVnzSYbifYdUj1PYi25LHoevAju",
  "key14": "5AyBBoNmKRmKSEhLf5eokyo27tEzJ9acoRVWHKUqjwevB4CQLF7GZ9vZfqhgYrMWP8zxrCybi4bHq1EJjjefQHEg",
  "key15": "5PkkVsgwWHhEqUGUZKsqTGg8cNKCjtsVv9B4hdGvjy19Znhc1NFYAhKhssH7iD5zz7PMJVs3Zkw2VCziuan6Nk1D",
  "key16": "5CHTSf5MEh1KXDFSS3Zy98oVS7ii8rgQDL9ozohYDYDQeKPXwjRN3pxFEN5EhYw5it1V9bCpL5ULHz82bK2NdEXB",
  "key17": "2q1cugshrfSTvw8ZUKgMMnnEH74LGv27afau3SiQnpU3bb5CdbkEaz2oK3ntLYRGzSSmm1xE4TatDVK6qaUzbb72",
  "key18": "2svyPnRVGX2ZKmgNz9scC7xLRutHhhfQ3yPrFYe18LvrREvxJrszB3tPUsujfURMaJ7Q7E1poRUJzuRWjrux9LGg",
  "key19": "3GgZH9h7QGKGHRsLSt2bFkavWyJbkRNtWEaMCJ2sNw9769o373wGjAPk9Bz89AgJLdhrsbe5oJGDEA8rTG54pnCu",
  "key20": "5Ki6J1UU2T7DdCi26J7MaReWUsYUjZ5765KoqfJTxG9MwmEtn2TiZ8dLSb9Wccs3UwCLh48eEVyNcLmPSWmBQn8x",
  "key21": "4X5tLDy5uiZg1o4vtBcYE3rqNzvZUNviEDfc1NAHdmiPKAZZugenZSqYm7DUCdQ4cobSPicQwUJvAuuhL1uKhZ7d",
  "key22": "4Zux8EVYmYNCcx5kiZfLE98utnZjFrdsDyjLtaCowUWSh3bViXh3tmnXks4XA7uQiwaZXUJcX8f9xnHJFRsw2kya",
  "key23": "4ywoqiHMfszHDMynuEiFhZgppLbev1ofQcJ7SnoFDgpZj8NzWaAygb3cvjyGeJBRLWzxn2akJxkW3jzpfLU51UUM",
  "key24": "3CWbExVLYHzu4rpyJ5HBeti2ryP92F9CJdCiLgnVTu9hUoA7wQJVC6xdmRTkV3EHPFKuT51RnekdaPFpYb6gtQdP",
  "key25": "2GrhFZMjZXufJ7CNRXhfikqzvkxWk2FbwD17nXLHDNpEffqMKtszrCK9eavKjDPG7uwnhdpYDN12JEdRk4LDYTQk",
  "key26": "1bSRsn1PdTLYD7fGRvD5ZxTpkuHnsenqL91mYyU6yoLRKaxsYmLbQp7zVwyrZhkJtiM85bzWpCFcPTpnqGpomZx"
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
