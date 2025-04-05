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
    "4vFcFMiafC7MDkxp61q4gre9JJC7nR1bTxN2Gttdnpm28dHMYqnJb2pTq3VDFEDApNHibLYdiQUk3B9c7zABkXhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tm49QpMhnZWaEcL5HFoYai6BXVVaN6NnoNGoQaYtZrEkwrdbYs26987Me3KgxmvPpzjeb6MBAEvpQqCRQ821aiQ",
  "key1": "4kJPMDAoWYPFM4HSmARjZckfQ4oBA5fSN8GPdmhv3NQsyQUKEwuitieJmzsHFJAdAfUZRFVJKPk3e3ZpHp7io7RE",
  "key2": "3LcQkUFpSis9aFfoKCz2xxzg2N1v5z5ivsJ4fgQXcidVfQAJFBoNYDzLTnqzBePsTBYRJnvNnwVrcHWy3pGudhAv",
  "key3": "whqJpEEC5QrY1Qi3SQ6LtEq83Hgcmt96bpx7hsUk59iPzasmZmCULa9staj7AsmdnG6HhFmJhRzLMGRATyxaYfd",
  "key4": "3tK5cVH6AeETB3u6B5TaVGMFw3f3jYW4KbGY2YDLW4bdFXEUksTqPFVMwVs7HoTwi8QP3id5RC2XdT4jbX3Pcv34",
  "key5": "2obtKeKx6teQqAufjj83UAB4ncPVdFgWvX9f9EQnCw4FeX2eWtD2qV1fXoKoCHSkXciPQmn97psNpwEtgviEUGf8",
  "key6": "4ufFvowXAUitsgTqtx8Dyr7e7iHWAVYj1qDTnvzpRTk3BgrTDhzhcMU9YcjpxRuyQ3XD9WEV53K5gsu1XFMmPVp",
  "key7": "5oGToDxThXfw76QyZshRdYJK9Gpg9kbEV82MP7AfEoNwnxxzqC8cE9ZeKebgSD9NwrQAjhRNN5MTpNEReKHwAgUC",
  "key8": "3fiU3whznNokGZBawqhnzqSwn9cEEA1UimPdC2rK24xUFMUHVq4eLZGNDES9NCKN7GB4X1NQyLFJqqMCW1jZzRfJ",
  "key9": "4n7Psc7PxgMWtFz93833t9KDChFgtRKXRFWStte7saAv7TKfNLDrE3GnShcB7QgCkP2Jer3ciDxfjew2xsGCNBFS",
  "key10": "uLBZhb8PkDgVnx3WYZd1xusHaWZvz2YtwiHPhPe4u2fo3Ca8BiBiwM7VFrU8wHG342eSj2ny3Qr2TdYLJdoDurZ",
  "key11": "5Mp2uWuZBnHYixwgAd2wXswZU92htjBznSMwgkXjuaPTFD8YuCYdtEniAAAvXRjSXRMttrrfmN32Zu3aMSnYrDra",
  "key12": "2EPH9B9v4Wsvf7bbz2bULG5fwnqBEYqz5w3X6ZXdPt5o7kYqnk9L4L1eyMbesutzVQVKHHU3DNLRtrMx18XxuiD8",
  "key13": "5rJRBRTpdNng4MPL3HQvXMN6RwNRaAj8EqqN2PS27RPCbwR9ZrC4cJYBrArBa4XZ4JG1D3UsasgN3KcGC99rnLRW",
  "key14": "64AeDajM8gjGGkNGmatn3pyq9XPrrmMN5LS3j9xVMjTGoSFFUeW31QfCZ8mP1MQSyQmLkdtHagJn9YYhptDZQUav",
  "key15": "3NNTUhHAnQD7yfJZVQ66zp13cGNbFPgyvzBH5Yw5BHia3f6SfXkr4g1r4teZAHMjc22NGZ9p37mPEbWwCGyNJEpa",
  "key16": "3gKTDdu2fdJgz7Kc35dbUVdXWvims263Hu3kshjyLDSXhdRNjHNv5rsToc3F8ECox2nqL3wsSo3e8QiemMBD3fFi",
  "key17": "4rTaWTA21WwKtP9qiCR6qrGgMrq8wrtUtzhfRxCyicfymn1MqAQEe24apqZHCbkzk6Goeek3YnbaKjfgvQubSwn4",
  "key18": "2AbJymuQA95bGW7WGupvEnvoezkXkp7UiMNJqsfySo216JonAjMV4ctCCz4SVFchAXcani2c5JJRNSSdJGtdLXg6",
  "key19": "4KvxTUe2sMBouGAT4rtoLxUXUsERMdXmbLKdj88ySLHyV1amuzYJV82DsAfxuxECW8J8bZywmski7fn3iuad7dKF",
  "key20": "XhUJaaFYBqQexmqb6KvYyCwzQq7T4saor2yDSaUcyqRL6NtZWMkVmLwUetCrnzib9LZbHyyqufgRQeNKtsTkhT1",
  "key21": "4eG25eZ6LX8CuLj2NdBjb1emGfsvYU2Rt2kBZJw4XcyyQ5moCEov2kutzL9EPNjW72sf5HzEoJYDEWJcCRRBeoCN",
  "key22": "412QWT3bXBGwpaMEc7HUaf1bW6zSdnWAb5X587BfYp7uTXJKwu5JFPLaNcVqAR7btLKXCB6QwRBnBcfvUYTZ82TC",
  "key23": "57kVkHrovz5zJnDgKpcQ6J2uGzVrRqKKC2UU3wNNQ1kFShsZYjWbycCfCnFPxcD1MEzSnDfCeh4RqvyboK4qpyPw",
  "key24": "Dp3tpEMHnUwdCkHPqcpHtZCbsKbPGrdhn1y8hKy591J35zYZSJNBkz8m8yZDSoG7UxNZ9GoHk2M6UPL9zfwYTJg",
  "key25": "4DgtcohKr7ziDPk9VdXNkiE1oR7Ucw5BfnxKFQm6qbeXFWHzUg5CF7hkjR1U5JBfnm4TVPN1hmHLFHvNHft2xiHH",
  "key26": "5fFbCDhEEC97CX6YH1A85dujjE7ttKfdGMrqTDtH1EVEsrMi1NtofF99Cu7A6Av8C16iMVpdYWC87EemJ2jhsj73",
  "key27": "4UcAyj4mKUfumWvT53mUvTvxzPuzs1S9zRdn5gtL3z9YZ7CrpHoCyRJ7zydZCjCgBwxqJoFHgZmn6naNQbTCMznm",
  "key28": "2LHejdystipX7fy6Pn3a5GWUPxp42oXtN6DGEWHtzs6te9BSeoHWBQfwXWGRsr3syRMv7nd2wCSKkTjCEBuUrKUx",
  "key29": "GULqoiiQJfaZpmxrWvr2KtGfYixRHiAs8nynn9B8V34P3aJP68CTzT9swVY2Xv3kptPoGCGb3je896KJxcsZCtW",
  "key30": "4EqnwoMTJKSQ7RB9c5bh3PziCvPM5Ui8rV8SZ638XYZG35KhKRjyuyuF6YecGPf5mDronjmiQMVUBxCUZeQkf1wq",
  "key31": "5tsfimwaqvfUYqkbKpPWeWMEkE7K7P5pjfr6NtfpTvH2iFRmrZc3XkidscbaTxKSHZD14yPhWNxUZWWxp8GYmmmx",
  "key32": "2WitBXDkTn5Nj7QeNdL5aVX8SbiYeyzieMrzSW4K51rGbYdFqoEQYmw6PQCZ8cxLvgASqwQeWZJeyECWhWGSAHDk",
  "key33": "4gQX15uxfPzXpigvLz1VwUMwDt3jZ3jqPTSVu8V46wmXU54niS4568mEPvu5fw6NG8K2NTskW3aSBG7LJ7XKCFw3"
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
