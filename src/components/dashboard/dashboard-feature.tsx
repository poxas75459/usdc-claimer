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
    "4KPF4rjmDofPKyp2HbAFSu1JPKA64MPiLq3VSKdYL7nYGq14sUmhAwozJ5mURJWP4p5n6yM9i3F4PRRr7YcNZn75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GETyy4Ja5Lbt27SKVMP31febTg6spuHJnXwFgn8aVmK2jdxS8BAyMiS9ENVPpjMFiZHQTTkkpkMVacD5xX68HF",
  "key1": "k6jybrDdT8HyBXKiCTtJErdXr5CRAqVGGyYj9oj7xZwoFUaLb3XGQ3Kh1iTYtV997MvUDSGoxfhMXWoeSGkbisE",
  "key2": "4h3XHrPK8cUX2iCGSqjF52geqign36m7cbkaRvhMKkvEm9wKiyXFddp1GBnJg5hUBGKDiqoEcVXNUpHCfR9eKuXF",
  "key3": "2V4csYrJpohzmeSsri5VbjkkrmMtZv9d2fzoZMuhBt6sFVcnTB8bBh7Ab4sETneCro5Hg4iKgHAAPmR3wapVVJ3q",
  "key4": "3rBqvGif6vBPMU3AgvvzokqWWnHrhQTDfcN3PBJKP8Fjt3ezu6tezgXG7zLJ9BjaPA64JafJjdKwK3gFM8XTbpMU",
  "key5": "61DUCTaA2ygxZJuVDPyd3kpLojhSyRu5BGXmbhpNPXUh1GATg6VbpmTk6ecMBMXYxLyvGxr3k2hniUgbdpFkX9V5",
  "key6": "8Y8ixTfW8VdHM9jdEu3TcQrJN2ULHHhr4xhrEafYGxohbuAj4X5LAvGBCSDVYshFNxaqGb3K6rkN14494pujdSZ",
  "key7": "32oMzFCeMAqP53fVzqahuJgsBgXP8wFMkmh9tTz77LPpfEjxF2ezpNu5rVyqb6FhAp5yU4Tp6MV2MbawKd6dgF8V",
  "key8": "4ZnjYdZN9NDYMm7YBUDv1o6pzuQr6eF9EE3bwe3UcguXdL7KJZgJaCUnsvKFchSi2BGWnCLBVZhTyKuqc79yeesq",
  "key9": "2FXtdB2xrpbAMXPMndjCVMhwmfcG4hPGcmMfPZgf7KzQ1y7FMczD1uW3kRRdEvP4JAg11DLpjWXQn7qNhWRVXXAQ",
  "key10": "35ZxDj6VEg9JnfBENAef2gAhGYgsXNaSh87sGjshy1N1GoKif57EibHUz9WykiiLbXRZ5zLKE1iN4JAcacCWbU4A",
  "key11": "4UN4n1FoH1dx69xzmEGHDEupHX9VWsPf3G581ymANpgkmg8yowhhfdjWsL97oRoR5Aah3venjWoAeYVDnBrU4WSD",
  "key12": "5NPcRsBvrEGGaMzgdtczzsxyQY4MaSpHox5rfWw682B3fxTquV2uvPqDzm4TsiisQ6YX8ranQ71nFiicvrYPP17f",
  "key13": "RKt6NLVwoewH9MztkLFX47rztFYunJj2W3rNNQixcmdKjvx8nmtiZRijzN8pgBSjQNkGKpypkNzsLR3Vbe2uPyU",
  "key14": "3vnsQauxFT2ZG7cD84FvwhYXLqbgfEgPQUFRYYAwQqSu62hDdXFmEziHFbbfsjjMknRrsBhM3tXus3997eyhxY3H",
  "key15": "4taWQpAinSJpbdhCLwtyb4jvpm6DZGhfQQwJVcZaFoCDxb39yhXZ3xotuNp5Gc4nS7xNP622i13GJRepPSW74YVA",
  "key16": "5GsFq2cR1ibfipPothBwg5GNPnWsz2EJNg8v9U7d7KEgb3rddPGiE62zSzcwYVcfsBRAhqLj1TTHLStrq1hmL4gd",
  "key17": "2y9oYHaG9hQ5vAkaCUVxpmTfSKfKfdCJScubzuq2fyEuz9xz4rxvsudvb2ZTkE6b3xJqg8V85bFKnGocQmhPD2u2",
  "key18": "3KvQMWEw2tBr6fKjtMvBfRE1JHeguuQqXmpaFVqq2Z2HKnEXXp9CkdQniVuKv5te53bYZMfqkLXm1R6zHFD9W3XD",
  "key19": "5hvUavnNYtEUeeC4NE4gEzNUm4VW2ZaBefxkM3PZsAT2jfsRyGyazdZss67vbgGHSkYEs8MYsuwDCcVBTJVEnWs7",
  "key20": "2krdnFgBuwfCJP7mP79kh1nV51Q56ejh4MTUJpsY8VtKfqNV3Sf8NVbNEeH4M98gddSHJwSPj8u7HeiXQj4KJgPs",
  "key21": "3MmMxXiCayReg4QJvJh1MTHaLkxYFDfjzB5QdsVMK7oX87rqJAR3yyRZWEbGiRVzpFLE6sDbUmZQFmWQcmdbpz3u",
  "key22": "4LtpMvEgZp4dJqnxRWFYcf8UAxDcJdmXHYQVwRSVFC6TfxT4d3DCYSUGsDdUV3um66ESK1ZyMjKTFibxgjZTWw2J",
  "key23": "2xBMRNhDVQgmACad3UZfxpHQ984hFmSckT93b1DzZB3LDV59GzAXRTQpT661RhGBSKRFJXbdmdEr6wLuPc1bbfSZ",
  "key24": "XW9Wd8txzxAQWjmAptTfLxAuNJ9z2tJBEnJsBS6RjdzRY6FxAXYdU5uRwihGhKTNMo8EwUhvXvSvmvfpUuiuBog",
  "key25": "2BfXP4JfHnMLvS36bAabe6gfH1N2ioTZTEiyQj6wXHbu3k9YCbRsHf62bfTXWHm53v5uLzzhK62Pr1aDrm3u7oiX",
  "key26": "S75TbS3VVwWYJc11Epe5YwJPbsXQxZL3cHTyTfpAfMtCyMq6iYHg2QGKmsa1rEbtzCZHNYjVeefQJUP7yLXJToT",
  "key27": "5TPmuPgF68CDPpmgk6YzzK1ZdySQaxTdZiQZwJdscE9PTceHZfQdx51bLR7MHSDNwraDxKepihKhqMG8RqXUjdMP",
  "key28": "ZdfxWGzWMoXWfQXqcKSfFpd6rinZL1oouCzQA1X6cmT9rx2RQ7BA3sPPH2FbTTnMuyToDabKFpZPe4Ew8PdSGvQ",
  "key29": "4bL3sUzjotNpRUW1YfsRe1zuXpy8RDmU1to4vyUUCk92GeYeADwJ9dDKkDX9AdCFdoSVWeVjjiPVMQjuHsG5kfpU",
  "key30": "2RxsWRs5Q6V9zHUBX9ePxA9VWHmqvAmqhpYi33z7nSAa2RQJUuksFZAPiApDQwLFfxwZTBpU18RAPGotoUwoDV54",
  "key31": "3BpAVwHX3Rwg7WJe44fgJKp5bnC5bqw9sc852Ljv4F19sUTkCmMdTxyG136NhYGMEce6wgVZPbu2xkmtWUXoq5Dr"
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
