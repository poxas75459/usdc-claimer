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
    "3YdpZDzgXFPYzKmT2Yp5xU4dxjhgnp9d7vnzyBSJkaPV868BgjREJCQTruSfGzypaexr9LH3tLHoorgh7DwDEa7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T56hV3Ju78QkXKQJQbLYZNGzFmPjDnJebXGxQpEwog8GCWyaznMtkbSU9fskc7SzXPFyvEAkeLnefcVCJNwkp6V",
  "key1": "MDn2nD3Sh37r38rFWQcDX7Pez1uRjmuTQGbiqYvGvDYGDfreDHZSuyrDa4re9eRzJfTVN4hxX3ciriBedY5ZieL",
  "key2": "4ELURK5QZ3PXHbghigeqaE13oTt17PgcPzGtoGZq3SeFsHFXQr4VgnCDAdhtg8Kn3mz5yMYspJyqQqHTeCX7SqR",
  "key3": "33Sce75wCt7eQ7JUQyhzAsTZCjwxMJi9SjTjK9Ga6oqV6ZQVqX9ZC5LFKErbMyu9J3kdVswNk5uGZ11GREgNuhMU",
  "key4": "jtRgWRHNgj3EJ717JwPPBE3Scbr8b3YuSMxVtdaTie1VA794WPastbyGDBF2NspeSBpZot1F234wf2yawZVVazy",
  "key5": "2BUXdp5hR5zcLPGZF6x4xPourd7uSzfstqfF1hphGDwo7fqzyXu4vpwfr1r7yKGvKkL1S51PpavkDzRidasDg5Mo",
  "key6": "358vp7vwj8PSX2DueJWz67jdp9RW99NL87mnNeBmKK7dbzoAgzehnJBAa912tq6Zx6jTXpJEMhqzaecetCNFVbKi",
  "key7": "6547LNV4qyUrmzyzGTnqhQFxshuTB8qERDyzPvc7xDAq6RP1dgJBjQk2HZJjketVqwvMUfEv4E9QLNLYorzvqGdm",
  "key8": "5xRsDYU4TmhZ3DxD2MRkhh235QZY1Be1TJXLPY1bGrqUoVuPaghUx4wadYyCe9fLRXX5z4ZcFF8mmVSC5FAY4jtg",
  "key9": "37bvfYCLB8ZaRzbDv1XwP5eiBk721aUGgmAMRCKpRSZbfDGsUGNTz4pbyWDVLdtDrVHZ7YbqpLTLrXWNgcPLkq1v",
  "key10": "5qxXRRnJncxYdMq7yWx9mqRN2mRDssfzJY35vnEs9Xtt5TJYnPQaDpnF59SKRkHAwghyZVbkN11gAZJG3f59JsKu",
  "key11": "2U98zcUN5HZjyV3R3S7paPUNBY7gnD9tWSkpARtzFhwDocZUx7kk6wXUjJpKAniVU1YPZjKvJB3FpjXfAps1wqp4",
  "key12": "3cooocGwv3iJMrrdpxPVXS5nXe865Jn5Hk5hB5p78LDZN5NsfD4QDC8yNJbEc26qh4QkxXtq4aU8eKbSXd4yLzWK",
  "key13": "2EfPE9dy8PjhEgdNGaXk3JfcAxK79CfYmYrkpqeC46tucprqkMzxd6RX2JsSDWgmeTpcvaeBwWTpnj3k4zFokasW",
  "key14": "3BGQQzKFJkvjFKi1D8TxCUkGuueDg6F5LG1gH5CcZb6bWKirhEXR1CgYQTPzmLAcH7cKCHzmW2x5ZqgKM7HLRRvS",
  "key15": "4u8EYmjKnRyQ1WRrhe1dys19D4Q39G49iUu1WaCUkCMK4D1H81vti4LgYEG9fCDJU7AQkvxJx4sSdb54vAdiUS28",
  "key16": "N5GByDY5Xj5HYuUAqwozCkWogfEoVJpxkyEDz8egfhRfLicnrZLy6CDLyzBpRVNcyHPrswDTf7WSP4YvCcku4gy",
  "key17": "WR9kHssEGeSPZe9B3KTyQMzCMBcd1nDN74oJ9vnnmopuy5TvQYaRoWUq93hPPk5RKqcaYtU8E7kCp2izKaL9Var",
  "key18": "5rXrAuTHdG2XJVPbdFE6zwjhFV5VNjjBQMZjNowJpQFVY8Ub4AsVfVPFEHt2yRQKcBTbBoC59FitSXUiDsK69tdA",
  "key19": "2BLaij531j7XRTHmguXDwvHFMkAWcbh9TLn4PdJoR7QHLnkNtX49DYG3KjYSbVwWzHYujWsHcoXzFntbZvjzKmHq",
  "key20": "4ux8VkQBMhgZ98TLScGf39ne6rhFzTaVudvHq9eoYKccbJWE2AQMHDsjmZnTyd3CpUkjwLsTBPYcnyhsv2gX8T4i",
  "key21": "25bGWHWLBDUDKV3vZxhfDYv1bSAVSgtz98hp3gPmjiuHY9EguCWQwCvsaUXSb8GQkW2m5qg2AsTjYaLdDe5jDZYj",
  "key22": "2RDRuNTfgEJd33AuVRmLXWfwso368dneKBEosbUGH9HdcUERwWRcF9cDoTw84jVL5MqTQLdoV1BeY6Djt58rjKFH",
  "key23": "4DRir1rG4jFwNA9iGs4iFUtPhwE9dyGxbLiSE7s4tV3VCKsWWfPfLEjgcrX1oj3yRDTY5rp81eNJebrSWoPkmwuL",
  "key24": "B7f7NUygYyNL3oKgG2ySEHgceBGQPdPBUUpcdrBB2PHv1iyDmktBgMem9iPDzggUPSvTrgJKGRuLATuxgiFw6oD",
  "key25": "5i2vNfRFeKrceidPaU1auDYchvb13CJNwLjFKFGcMyqhBCgCo3B7DmHrmjTEyU3bJvcm1q3RbLm6kNvousH1c65h",
  "key26": "4mAGcgbjoixHBCsh5kBU9dWMPB1a45VkxmQJsNXC8GKmHxagesqzhSN3i2TPPJUXjh8kCgc2V8xtEsyPda8jP5Jz",
  "key27": "q6ATc4vFsq6sTtFhvHM87zjsSktxzuvrBejy56WnVwgxdX1oahKJU7NnFwUuhJJnhK4FXLw3txtFMkDhZPg15f9",
  "key28": "3kQdis6ca8JFy62vHD3YKUHomPCY3TU4EXcwGUFLQnzJJmfSX2NcH1vu6zeiJ1GYCvSGWMJpch6cyFLJ72FNTDKz",
  "key29": "3pfkfiFABVQ8mugnvZmKctPA27gWGePTj1hqAJp5QHg27vCnUon532rroqaRRy3ru86X8pKdvyh9SeHoVVodZJXD",
  "key30": "3g2mRDA1bkrjBiAGXN7k8xbom9BbGb1btCtiNTEUxV5tYeEqK5XuKTEJPzCw8HvZW6Wf4iT8TsxXL1L1nDvYEi9X",
  "key31": "3W4jatrYPjTA42j8TzVxtR6oiUMppgvzuFM3SjkiXERUX6j2YN98eKTrPJjtAFAbYQkhHjNU6KgGdsWnUjTxbGLy",
  "key32": "5HRfuUXKM8D5gFyEewemYJk2YW5PH4yRiP6RptUPzpaDhacFKd4T9YCHM2kVrsva6aDDRdTBBNhG3jdH7NgJ4fQo",
  "key33": "YwD6HFkuqDRTfKimuhbX4zzfPSGntEzmNBZoHmDDCqThZ9B9eq3z7qkyV62FVoE1i7HiARX2EhPXqq32gDevkTD"
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
