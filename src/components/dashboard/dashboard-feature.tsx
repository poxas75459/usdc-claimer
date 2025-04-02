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
    "Z3nvQZ4zorRZ5x49H11Wo2FP34XfEpZnT3JF6KnXhWshztcqzbCqnK4QZxF36MtZG1qEHQunkNJz5DubhbcPwqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e5RMPBfo7REmNvtdGSV5AzFJFCoGZZ4skQXwcfnE8HBaUwP5cn32AZVnnQhQHEk2HxkEkoiKtZi6nmtbyggW5FR",
  "key1": "5rT2eGzFoiib3Mq8acKhfTLLGZhD9p6iVeNV8SnuvTmt2yzP9J9DvcbpXKqgRzCPqTWYAgGrCwoGuR5UtcXMnw4o",
  "key2": "fXWhCjvfvEps24irS7CFypaDHk8j4ktwVTnbwdSpcU5jRtM2XjQ2pb1sKvDFNbNH4YFNsye3DW97EVmY2RtcUFZ",
  "key3": "63NSssNCjEDY1D7NJCkvvZuN69E384fgY2EJNkxRCAHByDRvUM11Fgmzpj6w5SiAUJvTRq8ZQP9x639P1DFMEia2",
  "key4": "2d9UuxuQqBA78bdZNAeWwj6dUkSDgR87AwXaGFYrSkZoDWFxhCr5FUYsz54Qvv6Rkm7BcXpHSdPC7U7PAcKe7Sgi",
  "key5": "4vjPPC4wnupmwULhdXhpxvehCb8FzuLHEQeLyCwhTFtRugeAuH99debQiboPzmpigknXRfwznddoeS8chPFWPDKQ",
  "key6": "5p6mMeq6iX3QAYBhPTzqLqctG1TksoFXdzCK716XnN97r8mgTyEfUVfbxQKk3DEGShzYhxqjXjf6Jq7eQDVHMwMA",
  "key7": "5SRdUTj5RikDgNirwNvgSS2D6B7U26DYJ67BMCG1yMcMcg6Q1g14mMbvgqCE9oN6qHMFYwb7RHopMU8yETBGD49D",
  "key8": "FJDyjxTQfFcBa7DDe4W3e5sDAivUGMgrmRJjvad8aTx7KT8A8vKqvb6kVNBxVs4zoP6FsoWAkjizMzWmSegMw1G",
  "key9": "7fyEjqgpYfem2VvhfoxKSojjKfvbbezA9pbYGC2zcrhstqC2pboMY7FWpXSiaDVwuXFb59NMTvTCPu595zD4Dba",
  "key10": "4PVBi86PX4o6E3aqd2JfNTyA8EhJQsHSXFspG6HjW3A78QWPmuFHvV4gHxsF83zPTmbiXfmbKy85BksgfrmYUoEQ",
  "key11": "4K5FZrhNqM2cewZixwwDSeqVMjf5jeSAJvJAxGzpGpw6jTfSPfdpKRvkEYRw5KzTVN3GfquFrA2fhfGJraKRboKb",
  "key12": "DEFt1hhPfDu9ZqqVe3oi8xWUYTq63BmRGR1hYNoWPMr1xkMT5mnF1nywvcbUCRE4kJtjawmKmcLVUtWRHrrZH2E",
  "key13": "4ggGUkTz5Q8YvTaChPjZLhvRBZuL7JXWKJWryKrPkWogqH4L4bdTGpefCCUhGegqF528pRXPzJtCxo6uvPZMDewS",
  "key14": "35aWxmSmewMpsmh6xphSkyzbAtj1BdX2bHa16edcivMMAzhKJ7wc3jMnjYPFcFZtRudWXCRHVf3tgDwAU1F6ByaV",
  "key15": "5TVncNCzwMixoGJVYT6PuDYgstu8qGkZ9Zb5Y315jNkUtVATky1d1kmi2EvTvwHSYZLQbvnyXVAe399ka5dEZfxs",
  "key16": "4etaEx98acZDQ1GHFfn93FYoURwCqzNYYgKjzqEDz5Kty8Asoa1uTtv2czLd7RfUNMcx3b1XmikH95zofUuhsn9j",
  "key17": "AFNtq7p5jkhbMsYZG1tyrhCds7CwXdyRWWSiWngAKss7K45RaT5Wb9cBrEaqYBTZt5uhzdD9gn8ERGFEsM6QMsm",
  "key18": "2aCZ4FecxxGQm3EjrVG3URwHset6rV4CbXHaEZ7Q7tTBytYAfBeHzQvmZCVKTSQYhQgn8qNZN6bQTETsqaHe7CQL",
  "key19": "5hnXTQak3vsT4VMfBDkCAuxzww3b31vdxX56H3aGc45dXZeHH8QNPAarh84c7qswASo5R2ufSLigtSSQ53SJsxgD",
  "key20": "2XVJR8znB3Sm4yJqn8YjUJcts4kGQGZwATg837rGHpyYVEroPSQJm5Hs7XjWGXM2qpCArozXaeHXagMjwK2EeRxo",
  "key21": "5trmcPo7Nq64c1z2TAhyfV65z67o3GNMFoBuGahEgrSZdKpG6uhtfVBXtpVphy4riM6EVLPnwvppcaSoJ2UBu3if",
  "key22": "54PZfKKXd8bWym1CmjMr7Qk96GUv9xBJHobgJGXmvSMMJBgYJnFqbTMaxaKxyA4ZH6VtYWpJ3dvvKSzhMzGSf9tb",
  "key23": "5WCu3rCaDcTmkiB6XuQtTwSfcWiDcJgFAD89LayHtRpAUtQE37yba8UpqkirBysHJCJ59SzK2A82eSFsTWpJTD8j",
  "key24": "5Z2CgWkFBLN43T8oGu8pg9ejUyhZWhwTBuh8tActFPoHYnY7PqDegFn89eR27EqfqKsvshFu9rGqkeLtoGaCedjq",
  "key25": "5Pnuvf4wwuYw6F74z4cHJCJUMexC1hJfbK7zJMVmLLJfv9VQspS5KNUhakaQND7sZcjpJH9KSQpbCUPMAZzYufG5",
  "key26": "3BGY6YTkk9h2PcJur25h4Ar2SN7b5DWWVeLDvzWpbCjuh41mz7NjH5xTiHmkfb71gkAPr5rbVhesTaLsHN67VgDC",
  "key27": "ptgWGpRn8L39XvFSjNBaJsRLaNHHYovcYw31xugvLy65FjyDhmfSzYkNY4DpX6UcbgQG4Qj9rp5b5ZzJ1YL2CM6",
  "key28": "586H7JZ5bqLgVBhdx4yCdARgz8M1AbRNNw7ppouvg7jJ5YJ8LKZtKnVvsLC1WgLBE3LGx6knDyAF4RZZK9vAKi3G",
  "key29": "3BGAwPQTHf2RvWecwB3TGr5QkAJu7PHiiWCPALrvcfLVVTngJkNedFUyipinMzCzshpJEb4DNjuaieR8c83n2Lnz",
  "key30": "2CPo9VKyzMY7FYcvTjn4kGuTrSo2idXv1xTBaG7PFxRkqe3ikvPP3hG7h2XDETu9aXNyczZQ2J8RTUCdmgFaNNRe",
  "key31": "5f1gnJqKVAgwpxDP2M8oaXcbPdx569kq3qGsj4Amz86Yf75cV9oSSZuemgvPK3SeWq4XQ7rCWwtagF53DiXunwT6",
  "key32": "672sRiqMw7NReUeocexhUZrEng6a4gBMtQDoJ989WPAW1zAqcC8LEBPe8AANg54s12PvQcMbwmzAuPUYjKLawD7e",
  "key33": "ZkXAVEdg2VunjbLY9cmzAYx2PAJz5sbazCq82JtCrF9FnLXpQcikdTsNEWXv6DPJ3tEuwoujy6GF8pmMif4vUzh",
  "key34": "5dvWZHS1TGfoVEKEDARX9r2bJyLYKp5BWQAhcxUpqL8CVhj3uFmGRaR7MzBtBcQYhdLyChXfUyC8iX8XvLSM5qZu",
  "key35": "2nQNmxRXBXFs8Z4beLpkrFgS6aajA5V39bbJRuYHbK95B1oGjAdTQBEbP6PxDuaRao5ABecpnWjUQc8jC9R63VwF"
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
