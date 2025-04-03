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
    "5uJeuVZ5AHnhR494G8cD6dSKy4LNZ5YLqjxAeCj2tZDtdVD5QjpMNkqcvt4zooCaFpUgfNbByFN2L4xWZnxhwnVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51QLe8rE1Z4YQS9a9GFUwsKV1N4rubWq1iDueGSqnHke1ndqci67pbpYpvCiaQkM2gKQMkymJX6w5BHAhCzLFQGB",
  "key1": "2QEeJZaPPYSesQnxbB813vif2s6sgaQfAuUcioSXxXAYzGp4W5pFJXEMgD7WXZmGHvdyFEjEvbqC3wfqZPCGYsxg",
  "key2": "PBquozw8MNWekw2UGcNmtvK5DGjxzpTaTkYbWK5Hve8W1neWWW2wKc5mj2BjLh8wNRpi86Q3Fdh6jMsHoKxu99K",
  "key3": "7YtYK4vSH4YMKgE8pkxPtdMHjtJJ9DqsMoM1iiSzoryxxUyv1hzDSWZpwxe5xgkUtAbk918B2ZiVuqZGs8Yi7vf",
  "key4": "5Vc4f4VCpnsQJxAbn1htW3t5jNdcyaq7yKWHr4GNWxieWrUVo7Zcvfce1HUi4CJsvELCwkzbXmaBCwB9TxQsyGbs",
  "key5": "3ymhvnufYJqXnvi6qecEebCUfjTz6FgsWev3vm1EXLSsANfstCcELg6Qm4cspVHzjfnr8GTAVMvDsmD18JeSkU2o",
  "key6": "3bw1u1ZK2NJLNPU48cHY88mth4hGL2LzBtxGkdNAQcPvQf6rb67T9VxpXV7p4idmfCpELVWEbqv2tUT2ScAsZbEr",
  "key7": "2C9DTUJrmQTTE5maDPzvfsTMjkK9uH99QvzSa1VMMoW6mm6kGoUcjKtz3LsGpppkKaibzfXgkjYvbmP4579T749L",
  "key8": "4YbSuxMMjRauAZh4Ksm36ZYJWir32ZDHrweYFDKJtoGJLV8rhUUG7SpQJkr2xbhfPD8ByuSgfffdYzzCE7RNHnzP",
  "key9": "5Co3bwLmZPxZ3i2Ef593xF4GA5FUgS2WVhmtdepjMB4kLRr3173PxyJoRnvtJGY2CUszA3fRBKN964fVbtaX3czy",
  "key10": "4yTRCKdLj7VXynaN7SS4wtyMjA7xUhFMcBbjKaj1oNfXjckerQcj2DaCHUsmQvNDoikcQjq2yxAhj2i39uRxdGVQ",
  "key11": "5UEcrMuEAY5fCnNHry4mqT7T3JnKSYiSjNqd9D9QntX4P2CkLLyV7aEzrmdDNgVo1Bvk7QwLcDfGay6znMdU37qb",
  "key12": "nF4pdekQRCb27kkPyggPiAqswgaRzfDauwCqgnL3VojihseWKGRuCRfkNBG3C5Lvhy7yYUku7ZrVRcYodEmH9uS",
  "key13": "2LhkFWvtr56fgNfJGqxPBi2A8YPK8N92PM3uDHLG6m9aShN1XT3KnrAoy45aoxTAkVEQgJ2eyCarg8fRoYERvYht",
  "key14": "4ia7tWfcxtkf5Fqanh9c3XshhGRHCHx35AGi4B6oquDywHFb8jTmsyG1TgigX6Z2rZdvVanZDeVcqz4oz3u2rSz3",
  "key15": "2DdM6N3wnjw1ZqGXGqrBT5wgXVKB7XseNV75trdatbs2Mw1TDW7962sqsdLoJLAinzi1yfVdreZdpvGptGprsrm3",
  "key16": "3qVu6kvCSnN8mGEAC4Xs5HNmnn4jsnX9t8NBa8hh2VX6acpx128WqBmzmCJ6FWTFb1bozgnVYtFwMLxMj8FYDzYq",
  "key17": "43gTu3nnhKqTUwycLNTFRCKQD3qUFgCfNVmBey2DcitKcUFWcZMF4Ykni4PfkjBkUFYXszNKXnhT2krrZxmZ7tkG",
  "key18": "eXitsCrim9PUf4tsDZSqcw4XgmTQ1BKontyrc6aEwpP8JEACoZupmGbhLcK8xwQwEqRYLS39q8YNx3ujNx7WuCQ",
  "key19": "3ZbS4SiMQULd14eZALGt5snuf7p9CrMftmzAtzufiHWpPrm5aLX1yXAvAyyjNZzBhfdFE6AkKtj5vZ8gH3tuvrUz",
  "key20": "4o5Jh7uC9mTLDnY5GwvyuxpSQTTxtbkxi1qwcYqKVZKBhRBQVEQnDNZtha8gcZHd3T8Y81k4vUA92dwmsz5zcMc2",
  "key21": "59tPeAQwZH1xUDbWYyy79j7KuqpM2i2dEmcPw1QcambdB5616yRDxVpsiSgXeE8PdwtzvQYYF5Yymjy6cpz6RZD2",
  "key22": "3YwtDVDhHcEwKtC9VFCExT7sSHzkDM13jmd7LA6KJc5ArSnLAZy8YCtFUx7v5eDGfNy8QT86RQHv67eQ5qXksmxW",
  "key23": "3covoWhz1e7T5oe1JcdWW4Je6pWRLX74k3hD4imymFkJQsvUqUAoe3HYT5Y5RPDBUmRiaSmUkK5tE3ikQYYuVVp8",
  "key24": "9k2s853DNeuFrF2ayd6RWBpWqrnyeBbTUmiZuqg6qvanKbwkDQsCvbZvLRgjrTRqF4r79wLMWAYHa2kngMZde5h",
  "key25": "2BZzGzqFGzpph9Hbf3PjRt8UtnwbUBfRpqppJxDr6WJAJnRS335U7drYNe64ENxVuxY65YMMVDhLmBhL4Rd5GUGC",
  "key26": "2jdrLVnLDEyA4LvNBzQrfhzpib1jwa1HrDrFeCDPpebtyXYYbCY5dYhicZsgKoc5Sy9RE2wnJUXzkijBnE6Ev5Vm",
  "key27": "26gs89npZ6vFzJT9RQG8FeLyhDcQC5AVvordjVgG1W9xYpUEWnat4GqAAaZJ5m26sSXt8L2LK6MQ5Fz63vXVMo7Z",
  "key28": "3kdb8aVrtPQRf2sgddR9gZmSCgc68c4o5j2mnERyUkJKnLARX5YXcLGLZr6mryFeUwaVNm9PUWyNAnZyVSZVT9UG",
  "key29": "4NXcyH9v7NRD4x9QHPSriLwuV6ZruUKyv5dZHbw5BcHh5MDeiCJfBnALCZm2vEdmQyqBL2idsdmHmZzpAnzsuCg8",
  "key30": "EZjqWgZFTzCUHMAcBbxcJmHwB2xysJecz6Da4S25bPZ62X4Jsb6eyxRVatRVPw1eECP7UU95fqHBDWkJPMeUpeT",
  "key31": "3CgTU9fHAXmMtPQMGzC9L9FyjPhM7rnVuTWwuvcmM7LWf3cnR94KZG5ZW6Lr1y8NCNYaApKCSH3nVPHDr3YVhgad",
  "key32": "35zdXaKzUZPGSEUbaoDy5n22N5sKHgmH1mGaStC3PNzmBELq6kNmTZyo83Y9sWXGiTzFu5H1sLGdnRtaBQafzqPn",
  "key33": "4SgMgEixXjtdE8on9QnZW9m7A2GGgBUtwuMvHAareybE8JGxhHq5jtbm4kmxvhSMSGYJyKJ6XS3TvvViHro4NUBM",
  "key34": "63zVwpV4Ja75WbZBxirjdtKpqMZWWBNgD7qvSczUt91zEofx6iXdnAgmFEy6vQja1vSMUuFPnroGLeRSTG9NU3id",
  "key35": "42AD4wnSJKy1b625CPoA3ssprw3bgHhoUNTrsuFphWMe4JjQRyheFVa8pWY9jPARa8pdf11CSq3hm6ig1vjFpJLF",
  "key36": "5T4Gq6njmBYXoqzGVhXB24JKd8TTcWro2N4AbvtqJBtJLqDARd9uDh9mUk7PmAGtVFrrXxhj9tAfDx7QrPEwuHfN",
  "key37": "5LTwLnveg4eiqySNzEm9JxJTFhRhA2vF6FUdrtQfTjq6Eo2oA6DkkFBLTwvDsiavVRAkiuEgn8h7jaZtHF4FFay8",
  "key38": "5Q19Ndo5VJqvreGdkYZKTTJGH7yjFT9SBNi2ag2H29CMpLa54uHfnWnGJFE6x28PDsspijKcvxmxwnoNUGe8AFUC",
  "key39": "hTJ1Pe1DxnggD87bmrRT37m3ZNeXpnXRxPjSbVL2iPXbN41WENgMEC2LkUWnAF41MqzcRFAaEAxGYNy4EmXqLhY",
  "key40": "54q2QLmE6r2gCpKUQmmRKbTFYmR212vcDwrsjutcEatckDt6VEaqacLkfdMo4q5FjWWsj7JBg97gSHQZtigJ2o6R",
  "key41": "5t3Jcr6q2a7i62W7iCtg4ALqzE9HCkY1Dm1zcQeTQNaLBi7sm27t71SX69YAwf4feLyvGvhLxKedCxRZ9pp9rhYs",
  "key42": "3nQKqM5UyZRybapPgqe9Bd4vqPx8oXWjALukv7R7yoiooiav3Efz3SBNrmbhAWQ3zgFEGwcd71f8ugPfjUUKcwK4",
  "key43": "5kxfwRrGdFbXPsrjvwLDXnoxb5QZy3EkGCyfqyfbkCBNf5wsBwzWYnXsmCQEmGjS6KXPhZLqMeVpiVRu9gknCrnu",
  "key44": "5hYV4wKh1AwTqKwbP8ww2pLNRwVW1oukbzSTsFz3JTCL5dqFw9FZL9zsgfNUihd6CVecW93BEDWDfpLCrEt4KbjA"
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
