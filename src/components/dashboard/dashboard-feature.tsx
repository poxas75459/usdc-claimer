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
    "4RkZkuVycMDHrHoMR9QdcbpX4jdMQaxdSoz86SKtbB67Z3k6ffXLUZQcGUgdw7FXRKZcofnVd48avWT3AVP2HfUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RExiLqPKcBvnvSxEniG34zgLTbH9kdHVXzr9pfRmATp6PfuvynRkLSi7auWK5ptUHS5fEYTSqDHG67E4fGpiNW1",
  "key1": "5eQMFiXZmAgwpBbGbqrKnEuYGiFxHjqJhCCSucFnpk3cMWL48HRhjP37td6dP8nkAUbRnS6ofPZXrL525RJwGVuC",
  "key2": "4uAZuSYLFHP17fp2K8MNYD33bnasL8a2Ui2N3PkXRqBAdgrHwCFz5bttJHwmKZ1GT1hPinrZHvnTVvshcVBJmtdG",
  "key3": "4ZW61JYG6YRy5sibGw9EZ9xUEGAR9tqUhG6qhBDBMbU8w5FUoBbbUkaqdsjMEfr1DcFfAaQvH8zAJaynnEWck1BH",
  "key4": "3H8TFKQVWxqwnmHB4wXkp8BKFQgXu4UPmqkLwvsw8WGyMnRzYHD5X82hFDfQcGpnHc4qmgT32Dbf2Z783HDtjKsi",
  "key5": "PsoupYy2FNXkEaVvayX5cwGs8z7F5PKN3VEx52gkSkf5tqw9HazAesqRJvwG2yBH7TrMFQ16rbKGrtvovZtPnws",
  "key6": "2gvZgVnFdNwE89KGsxEGHJ5rPUNi9A89Crw7onVPFFzB4D11RqLFaojsy9YrXBaEfND2CS34zurkkSCjQs9vJkKr",
  "key7": "2HdmdWYArUzkWNmpnUGF3EsAvF5SXY3JvTSuuuGcmm7jm1EGZqneYz69juZMicrHMcky6AchDeVjxYjp67mTFJk8",
  "key8": "4o2ysG8Q7XJrUG1SjymHrKknSUHgKyZtuRB1mRdBinKbVexEM97xaqEPvemWbVCQNyZTKE1h2AhViXhC293qSi2C",
  "key9": "5mT3G919HLgGjZrmYXKAB28TGYqZd2PdQJG585SAk5budur79HtQ57RUujwGgYYd8cTG2u4TAMK9WNMrSj4HknBv",
  "key10": "4mX59ZvpBQGSKkLHNAAq1Xyr8xLxkMbEqBQd3KRdeYYigsTLwRHwShnh9rwr6UvP8YLvXTJ5oeeqsNbm81hgHw9R",
  "key11": "46PZinZqs5Xt5qRXfPjMqRiQibui7UvxgGCF18BjCHY5Vbn5QQKf6BkCUMpEqLrvyMnYBBXV8hftTQfjCgYZ1pNA",
  "key12": "3SRZPGnMAqQ8CaKdEwQ5NDamnmqXDThPRnmC832G3mJENU3cwMuvgLzmyJuP9jPnbdFxzxDkL6LVyUPEvciN6ykY",
  "key13": "28LU6XAfjwTbUKASpBk62TSAPkyYiBxHUWLUPqj5m8H9RsRN8fUBFGkAGAx61Yj6mkxEV6WNzpG8LUG6ci5fjShW",
  "key14": "2ZFbaQnp1S5zeknX6grKzZe4AgjFVDPVLMC2HK1sBzRbjwApEDYbWeKHa4zCxqfZ6CHcwdXtZuWYcawcCv4bA5kS",
  "key15": "euC4u6Ci3rTse9mVrhcH86bKvPVHQnmwiGsrxY71oT714mC7UtJQfMfzYQVmGbxqjj7Lxa1ia6exFMZqjEU4Qx1",
  "key16": "2zjn3Y2oGt5fhovuZaBY1KFfcQXKY9A1u4PiEiFtijW7ParJKKRUKgg1FU43nv8qiAJUwJBn5ZUTKuWLumMUaoxS",
  "key17": "2SxKssCFvMk89QF6SmGQsUgn1g1gxw31CZPGpbxHhLzViPbFjXZ9ekUHxQ511kNfH9cdJSDXLHKLJg99jgcceEcq",
  "key18": "4NnZboQ3PcSor6EExpXUR2cdp4TfiKLSkh12tqYojtBvQ75xzrvrCkbLY2dkPkgKrLSqDCb7T8THwhJv9q4D5818",
  "key19": "44c3Kc9i2nBUZVPnZLr7tPssHbJQYSy9aTXSLPoYGKnYws4aw6tm4pEUYh27uEGbJjNUnPor2feDsEF6eUWGfx7G",
  "key20": "B9nvf9J7Jie9pJueqphaFndYEBxExtiwa7yeRFj7kKTCuTigwWjxJbeK3jz1ouGwFxjwKvmCZbrf1ULnaVknw96",
  "key21": "4KEgpKKdLgvzKy6emb2KvWeMvFvdhVACgSMvJWNKrpJjTVTc31Yw7jM3W7gVgi7FUf3jThoEZf24T37LFcdqtAxV",
  "key22": "5QxMzvEqTv6P7cyNhxK3pQye2vSBsQsxBp6YzyNvdPcRjb81Uv1PVLhA9eGVExM6ZwXeKQqE6Y8vC2VBH26ViDpv",
  "key23": "4F8YT4UReBLR8BW5SKLLF7GpEpg7PuYLGFjE24bDsku4dfQt5jbTUS7by3wAYxYrzc8xg3XmDVLrZ1zQTruDFTjk",
  "key24": "4jQN6toYnEzbsyV5hLLjKbhZeKsx3wMCqsxRMn7Fo31x43ckL13JyqkUvkDzvibAF1mvcLG8TNnD1p2xi6ezKep4",
  "key25": "259YPjkMKUE3LCw57JMEycnHNpVqV6YvsDhLVSpzZUDZmSqtcctj6t2A2NfMSk1XNhsqq1ibEp9sAQndtkVxRnqv",
  "key26": "28GgxHWiJzXXRuDiM1uRib3MF7MbZAWysZ1ePzhJK3zHcPUVLenmhbVhSrQZdbKbsSCaaJeSffnnUbdNaZF8nBzb",
  "key27": "21DTvA5hjYMVXkGVjMSGhcngQA4a8rXMa3o6GnRE5z8jGpo9gWb8kodSF7Qmu14W4ehhSNVnsNrMfWZ9MggttRZ8",
  "key28": "4JahPyEm89x1FchHFaeAMXHMkG5jM1XGR8m2ht7R3XeaVbVaXCTKjgiJC3TnFoTDDXNFy1dAVjQVend1iGHBjBqe",
  "key29": "2xxWz6eBptPxLou4u8j6sec2LXQtw4h9NeM5W3WACVhzwBarMWRgpm6VYBTuDutVPMCutsxmg8FdtcFbNXFttJgE",
  "key30": "5yyFkpMUPhFPXjEebNARFKD4tRg8Wk899PKuvRetNFViddkQWs7vdpyqsDufdJ7X7KwkH3HnLBmqQA5KRpXzVEDk"
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
