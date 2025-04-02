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
    "64LJWKuWWW858hTQ1hbFSMBEesKXiWkBEBd9PReBcRTh1fpQux1XETcykiv2L23wcMFtQGfo1vKA5v3xegA71cMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ej1EwG8jnsWSakXx3oLzPb3cbdk7iLm4APbZSqhPrNhJMWaVPCi5pE818sQU3uH2pTYQDfakcuUmiQHfcxNGvzu",
  "key1": "2fzoRrmVz6Wq4cbyr55HjUSdrZ9Q4ZZvD7XXPj6HrZsfuvkZgHT6hKzjDxebx3bpydfD26oA78XPAiZaBtFUMa7A",
  "key2": "KrscGyhUWhz6TgHGeYJShbkkkzxVtcJq7oDh65LGmzKa46d5bUhPsPRaPkkovn57EWTKcRZDYHLtrvvCXV2g57j",
  "key3": "3AuC99MbB6gMCW893BPpoc7bWzinNmkVKCXnJJzYnXsqu8UjqThLD2GgyZfagx4JJePJtEToy27P6XhjF96DMy56",
  "key4": "csNXPX6kRY7D62MtmGMYDnUN3bzTGTCyNyg2B5f33qdQNwH7MghTskah3nu9LHkDzZKw9b3NSoA5Z8Zga5FJzGN",
  "key5": "32jhN4dArGcUNzg9SwEnTvtCT2zUuPmT9h59KnwW47DmimTSMpw35Cv9GXbVqorH4HqRKYQbDsyXkP2kVd9puTka",
  "key6": "2uZtmrVPjwRNs9oXDeb6NaJbjjeNdYWjoChsXobJcFLdYWNeYCzafSDgYCbz7mY9bkph9syemKnx473ignDFG2dS",
  "key7": "qsQSqXGzx7Pp1FtvRkNqDy4jtQ9GVJRdE9QSDP4zfRWhkCrRcuGozuTFecaUdS1weoJZCHSEi7jqG4RRJSNaYzu",
  "key8": "4uQxtdoCXej63uh2V8cAXmp1TUSu2L2kxSjshWMaiwh1vhcMbn5tVwbAn513mAXtdZuKkWdemkhEdAuqGCESi5E8",
  "key9": "2VU4HL9eAsLWnjTkU36YUuAoG5XTsB4dGfB3t3qzf5b8RcodiT52ttFyqgCQNDM2pLdoEGV2iLKewKVpLEPNetcG",
  "key10": "2qHkdgaLEnDXNFUR787QaXWWqyD1fsCQkiBDZR21diJWiqz8EaJc2pqybKGAekv2HyRfsrF8JK1fLrD6ZDQynbhy",
  "key11": "48H7uJyJAiomFPP3pbx6wUg9Wko6CfBStm2et9zj5e8udnpGaLxzaDGcSjKAGyjMnbpVfnSyahy4ncsP8mnaA61V",
  "key12": "53x7AoPtakD2NR3ZkBEf7bXSWnrpXEWAESkNHt9PVj36opWjPRxrn42nmJioujLM9Rji5zxng5ysK3B6PnkCFXZY",
  "key13": "4eA3tEbmPfw5Fk33dhwL2k74nZ4YsBwCSDYtFGWsMGBAqXbbbis12KkzuniXyj3oG1TYqRGxRLaQzykEWdMXT3DJ",
  "key14": "4J5XtdU9PQUTo7moEHoafEP5LKM1GSCk4u52HstEi9ePsxNV9M1Jzz2zDFqjEXMTC3hxxkfwuGtK6g89kWj7YEJr",
  "key15": "48YhP5ojggr3DL6L7Pbq1vDHmaMTt1vaoo3o5i52QCDkRFtPtKsvj6pdoBiBLEJSZd6abCPAxC3kB6rj8BQbVUnZ",
  "key16": "zVLsS531sv3S5pzKXEtwMMfyu6qy1bWKoLhhRdoCr9Gdeunov1hfComsJabYcC4CkjuAJBQAiXGV86Qxhm4qkwt",
  "key17": "57j32HzT9rnu9XRMnNk6hqVxdq25MkcKA31fDTUvLgLktZMrxm5JrVX77nS2Vv8MYV8FVea3DjrUzoPENnuPjZm5",
  "key18": "DtacdncKRn9NHUFTyDXdojcU1cYtEHRv3bHDj1DutWfZsFDGsdC24epetCV8Hmr7E4DPsTebxZDQ4akRPrULhGQ",
  "key19": "5mNXoFyKePX912RERZuwr1CKZFqqwYg6zFHTuNfkCDcuUL3TXzx7Uwh6KfAFdCVitNMLqo7LdrTooCNzEo1knNz7",
  "key20": "Mw54ZWFK16jVBCt2AmR5bEVm2tcs7nBy4X3Duvg5waBW9YXk5KRvxkD4AVMY31Q5SPJwqpyKSdmafhfLkZQ4XjS",
  "key21": "31cutMgTbcBW6i3TWPaFZwajW67ePbviVk2kHByzWs5EtSckmnSKtzoxDKX3gE21A6jTjRpbHMD7FSoNjZtJzn7v",
  "key22": "3eGMdYQwUJNUp6cGbUt2uqZMvPqULerzXqvkdLuBatqtJCE1jjUdjuNSY9cAYyk5yYvYuMKyKJa9f23KkqtWkPHK",
  "key23": "3MgaqhcUPrCckoYHhBZQGny9TjC2MSBbGeTVWtSGJX9UvdpumTDYmejZ3xiKGfJeLt2cWfHaWSR8PaXxH8Kx6CVs",
  "key24": "4f4ZG3qKoAGgYNV7U9ih7BdHtYk9jzXVemsxQjq1rSd97V54Vg7sspfJzdJUELNu963fr3WyH246Jq2kEaC4chLt",
  "key25": "4eXweeJ3AefEPVf8h1tTYQGrokHNt8NJ6DXa4vp1eTtagfRd2zairbbDk1xwjPSsWFioy9Eaypa4dXPxsMhsgCfC",
  "key26": "4cuTorDmZoqFzPmeLSyY6DBo5qaBh1BeuNoNQTyPU3ge4NsZnnT5MhYXPKGW8rD5oGyhbm3GQEFtKfoMiwQ2BBfy",
  "key27": "3JHdVW7uGrcYxCa6PF4aPobQ3r1YiWHriyzxvXdeyLALYx3CeNy6tZedXJeAxkQSiy7KcXdiDoQi5UiUokGzUZS1",
  "key28": "5JPTX9fwYQ4yHzPKfaeyzeRYhBXyVvZFYzLt4abwyqK7XPDCj3roHdppaQCUgHxceyt6bLh7ccNkpXsgQZEc75NJ",
  "key29": "3SH9d5cVVV4LHmVA6yXuXiJ9RM38Ahan4rwau6DST2jDZjsLQzYUAEFzq8szHYwSka4kQUMyZi7PN7AuEJ14qjcq",
  "key30": "5SBj81i1n38GexDVjL8BJ9sFai6YtsPpix3XQi5jeFyyKoyaVH62EjXivTQPJfNno7sppdJwRZaKAor7f7GaXRxG",
  "key31": "2H5VLmR6W3bQyCJBFRSwAY7doEAKPNWcz9ihUiDbTf98fyJ4zViVhGb4mEyfScVEAvE2H3tBqDpsomte4nvgvW2z",
  "key32": "4zFKQCPa9rmechapvemG6kkspXC6mn1eD71FodQPeaJSZ8w8WxZeCQ7MReBs7k6ErRjvon6gFBRWabWchcqCTnCy",
  "key33": "36PmHk7jcVd2gbuupkjgZvj9cxsSqxHNmEJ9hAyEUFds8zjBeD4iptncojT9r4Bw7encmKgz9qRtK8MZifbxmU5x",
  "key34": "LzcPik6RKL6tLMaS2EAikq3xuwDh2eR9Q18oGiQ8MZAHZrtAwRMCG9HAoYJag869QorFnq97RdyGWm5CUonYhr5"
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
