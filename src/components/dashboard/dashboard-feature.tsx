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
    "uP45JVpXfV9N3wWDXpakdx6uyZSBGpNssNtMCeTxm5a16MHDHhJgZMcVkvCEb9N3uaYPtQ2FN2PnEnTbvsniNMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sHTkgtggw3aQrRZ7kVndThcBVgmpz3UDpkEwBbT6pDds7fjfjT6bzj4w5GsFkLbT66w2bWKQEgDTnh3xxdYLQRn",
  "key1": "5FiP5xjWxkuoDJnJiJgL2raDCPkqPP9tUiQvC2Hd6jCKAEaEWkRwtVF3RkPdVfPX71dRSKsoCqVPpYxpwt4fgV8",
  "key2": "2VpKqQwmDS24mHCsXogtKcbyh8qEWLuEVRWW8tsYye4nGAQk5TYGtwxkGzJDb4rJDCJh3k2X13fqrjNRnACya78Z",
  "key3": "3xfwNB9DCC2GC9EF5UQ1QB24hJZpnH2ZZzSPJt2sJ6bwgbhULNaU5Svk5WRk6VH65To7aShzP5LazwC8SAniKnp4",
  "key4": "mkCDYACggDaMjA9LdHVE8p57KznC9FdHoySt8k2EcZd17x7Fpfoq4VfXqwfe1QdtUv2bFHfbb9YcHDN6LrqkBnb",
  "key5": "2kVaep5hJvkKwjnASBneP2AM9WLBXebPc9zdpQcG5n6nib3vm21VSUJJagW2j2qkhZVmFriNtY8j82bWZPuBWEzg",
  "key6": "49GAuuYCBcRjfDAjZcvX1dBxnAnC9PN8pWGvh3pBuWmTZk4eWkAUiWBTbyBGYFfauiYwTS9cqfrxgEFE8xkKMcrC",
  "key7": "4712gaDUuULCbRJCngcrKzuWPx22jJUnfQwZVQK5mmfU4QjpRiUUGSfjHQvHeMjJVrLrNA8v4Kq1KytqSivEFdyA",
  "key8": "5Gb75mMqiZN9GTomgCW49xoRbEQZcQDA1Jbwnyfn8dRjaM8rHBfKdMbEni2k836ahJEF6CfskZ454YHdumZK8ib3",
  "key9": "3V9tSECDVXGga3WYS3kgJjPY23BsHmC26bcrUgGMeDY9GdRRX81baJc6f9GaczpNyyojW7v4w7vrkAoHrhRbq1Jj",
  "key10": "4S98XeAn9dk3xXbiwWvT5WtSou2EewFxzBU4UujwUfDV651GDhbVATbpCMDVopdLrPdCCFQ21PXusaLVLSCFSKvy",
  "key11": "2MyxFSXdjdAok4v1MS92NXGAoSwAmGXAUFZUvjZCFH1Lc1FyM1mNQz3vCkqRZw2i4jbu9Aztb6xQVbjbQDma43Q",
  "key12": "3AYyZhaxWFdWGy6DS8HkJgfqHaZt8wSoxHpHorGVUZFhhCGuNDhAGFKAcXCXWwX78APLWksGhh3JRfnA8me2Z9BN",
  "key13": "tsRvc44cqcjQ8obNDRHUkvpzefYZnH1RV4335gGSRajzCLGKwj6vihGMaBAfCWmvRAHB65pcvQvdiH99y617En4",
  "key14": "5qq5pcjutAvEEdS5EHuFed5zveCzgLraVF31iqmaTEd7Jrw7GAxJTMS3xcvhuBrSPyQLPBvqt9WK9ciVrnecL8nb",
  "key15": "3HmjUuUZNphA1JLuRNDDDq4oqQbxejAq2tEXpqkSD1sfED9YYayJme39EP7UaWAm95bxxcZAYWzCrU7JkZqU7Jhp",
  "key16": "5Qac4ufCjW6SHKHLZpoBNiyGSb3y7MQqUUVgh5MPpTd1sf3VkyfJhBJtPM5UCajmLaZTjKJHhRRb7ffhZyRu4E3r",
  "key17": "3wf3ycZpKttW8v3d5MAGQArdKdRy83RmfnWdDYSKKXV1y43BQbn8ccSYsV1dgdTsMgLyXKkJuZZHGCbGu7hCNaDe",
  "key18": "3fAUEXZoAQDgzyaa3wQf6Z652YLexTEUfpg4TSDG7v5g7q1DsqmvA1o6J3tDenRifHxwcGVKMsPeDKHUwTUKv6wZ",
  "key19": "5T4uBRti7GZC1wxyJDSjC7vacc4VSkVebBdXMikcJG7FGySDfx43yg86EM7tzMJqYDkV5tMVifSdnxLhuZwjqe8m",
  "key20": "5X8Ni9W16yiMKo82VzVX5LBQeYatZJWDvZerzRj14qia7uqGT497P41orgx9H8peWV5AKoUAkcde6oBULofxZ2t",
  "key21": "2wnS8Q2ZrQEvjRtUobW9EtNvRQdS9wHqQCzF2VzCcXcD4aMTyZwUU6TY4jy21mjPUEynnnE95q3BjhrLAaNxk3vt",
  "key22": "2qAPiAoAFp9xc6V7uLqVpVEcBWGxtmrsqDnCsGhp1oqtqRjKrsYMsyHNhoTgn4zXVuKckHKRsTsXjZoG5mxKyc5",
  "key23": "4C75ZxNmU58d6SjQjjxF2jiFWk6iznLzmRq4cdz6GcgcEXvbwkSpmrdbwFEWTdKsQMrot8bSKisteQ3DNb34rbV4",
  "key24": "gLerKDEBBU5BYjhcxLXQEPJY7zj31zGUXZC1ASXLJZEFBfAwsbAQfQWYWyHUxtXMfU2wh23FKhGLMKrEo5ioex4",
  "key25": "5NEich922F98zcUZBZSakLtXach1s6ivYBH1vxvgJU6How8FfDJQMW3RNmLYAs8YxxbkZEbQ8a5iNVLW7SKv3yVi",
  "key26": "3i9FXUFAByDnADac3xHWDszGcSy86v5ioiVEyJttA2FHfjnYL3omHPBw4tH7z31jr1dnZsyBZHX9GmJysKdeXZAf",
  "key27": "2rYUL7qKdzahQoub8qxkRHtrNBny7Q7ixaK2X4uEXkEhoSiYoXx44jPt7MHKyRjEhGZBhmxMyiY8pnAfFzWVTfTs",
  "key28": "2zy6GdAMkjEbvLKjJv9sEszeqqwMrNokMWBCQHKgSUjFQqcMpZVfTJbBJPm7ntJZKFGRJxx4kzWezoG2ibecwPjT"
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
