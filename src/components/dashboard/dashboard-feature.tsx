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
    "21Qr9gGXdNaA4nd7LDaEyJV9GqNwjjc8u4oR8mAJNJnDQ2rWxYkNve4pUgn4bxYszQ88qNp9dKZeSKxUocZeaktx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VbpjepGgeuMYUPBJ2bgpiwGYh2vDwDq83hqxcLLf7ETM49KkJ17KXXnfNh5M7ktFVMdv1iQfM4NEAJ5y53VjQMZ",
  "key1": "4HQMQJR9FDiesywuiWdsHxgTyL6sYD5FaLrXaVs5C3LkbowJGyu86pSYVtgvyaW5HTSeAFHZLbL9soG151hzRHNW",
  "key2": "5MMZ8GKGcLEi15WjCm7utdAPJBnS923fU58qPwAZKkZ7BPid6At8qMi4xS1UyMhprgrpbo5WtkBvyyA3UeyaXWHt",
  "key3": "58cNGpvvRuNRjb8A5nzwCp1XCY2b6sBF8yP2UPV1gLwz21stekHSQEih9nTtPfJiCdq4EtQdRwYxqKvPzqU8zc4f",
  "key4": "2sL26H2dvvAAkif6skxkD8vh8h5fWq52T3tfcRA6qC1uGV2Qsp8t7eCPHTfUu1cCdh7ahbLkyuQsvKCwrDuPTPEX",
  "key5": "26GDzB5yvPSpGXbtaRnuqrx5VzR9wKb2qtCDJThx6UqqWezeieGoLWc3AUG1NXjhJRd6pEDXVZxmVFjxmx2EUrk9",
  "key6": "4ckpQE93RV36HgSAUhYCg4XTwto5tzFv4xkcGsJ1YG9gBDDwRsuxHSHfwp1m6mh35hc2mCLJNV8phPpgx6FRghDC",
  "key7": "3ya3EegjxU2GuuuwE7MrBM2iJbpPzP91B7hdthPG7WA7Ev6FBHW8dGogcrMbrzH6cweMpRwK8Gm1K1kd2hnm9YLR",
  "key8": "5pX1M4kBFomt3SJ5mnUaugm6FVQwYF1ZpV3rAcvcuc7Rwr8tEFT2y3jrWGGPW6VLYgq1daiqNuAQpBnS6m7AZ7Zk",
  "key9": "4sgJf7D9zJTaNqooc8dCoe9dvJAsmNz2Qhn3csg7skuNP8uGSvbchu8uE5jF8jgqMyGsFMAuc5433VbAwvWh8JmL",
  "key10": "18QBiKuCYHzKfsQQ7MKJrN1o3h2bHY4MvuwAfVAAUQH8s2Td3fmS9DDdNCmBXr8Y3ytyAmGF55BqeKr6UGfb5Uf",
  "key11": "46BGEHZEbW2N2nCBi5keWAGK1JU8tKrj47Y9eYsPkjnoGqaPPSVqrULxhoj4iRAs5BqCYQKC8Q45fhPTAL5ZruiV",
  "key12": "5DT4gMtUofuTHg4beUaRLh15wtC1Go6sEmSyF3Tb6eFHkirUd7inTTZVwxst4G7N6RbuRNdFEpvjwibGhaH7jZ8X",
  "key13": "61Uq6CVegQooqGKrYUoeEsPexwqnK8fF6mmfjUCtbXzJ3hTptGijqpyfrF2WNS43fN2ib5VTCSWJtDCaaPuY2MnQ",
  "key14": "5UjJmD9mMCxroM28C9raDFGQ6sBTfLkBuRqvuMj5RycTUWsPwHssUPEWTJ533L7XfXPCU5RRsBcgTS74sWifEm1F",
  "key15": "45bv2ufwuiLAkjY3E62eT1nz7F5ffGt3F44LGS6Sq3EXjU62Ey9qsurgoX6U4W9x7dzZto5dp22bsF7j7xeWzkHE",
  "key16": "2aEg7VSiUj3jx6k4VND5rLfYoSZ4fXD4hwZJtTbuVfg4e7qy8ZkLVt6bDM7fCbQzJgDhHpyBiwx9hYrhhMAxoNqf",
  "key17": "2zF1xXRtqKGG26m3RevzwFSLM6qsMcjKZMb3KMFqRN4BcoWnFm2fiBxWt5zhBMkuJKKHnTr1xmsrgZhpVfAZ8KTc",
  "key18": "5YhxcBnzzsY9cXRnktShhQyUc6aimFfjyiaD8cQUFmpnaLYmUmkegjA234Pd4Qk65ewSjfjmuPiztZpLXwXzhnBw",
  "key19": "4ySTxWk62qVTmVSWY2MUAWUkPKvjd4sEHuSfhovp4bJ6rAJWiorkkvVsoTFbAo2UdMpMpdnFXQczKUw8WNCHqeyf",
  "key20": "qh1uFFTbH42wsdVJ52cxBVT8oL3hoXdq36vEtHcpykJsFnRbMv95ExPXcWqtBiDjnxeic56rq5yuhP6gUGH3oKs",
  "key21": "5ZXLSVG1eUuiZzrempkztKa112Kn7uEy2g5c29KuwpYe4a44RpPwVjgb3UdwjLthbYwy8GrTrGL285DbgrX1B7N3",
  "key22": "J2NNMuEzGHhKKCapzwSxqR9igN3A4dgCyxhUps7XHu2TFetHHGvM4nDgWsdnPbbnBRdV8CsSSoAGQVE5b9i9XLP",
  "key23": "N7KiCDg8Bmdj9ydnXtB5L3Mgix5ZaBw38Vj4wh31dzEJf8vZ3Bmh9cSKBzmHqEwk89q7yuxCbovUeuZcdXAgDrS",
  "key24": "3ZxHPuwsCGmSsxZrs8Lrr79dDBVNvBjytjZwX6V3mXitFC8zPCKYJCVaDi64MnYMQLgu7bP25SKeBkVuqjk1VbCG",
  "key25": "4z7A11Zh2gt6L6RQPpFSKCx94wgiCWySD7hNPuR62KpZsuZ4DZ8pcAbsmF4xiogTXT52Xnofrqp5tnfdcoQmioCk",
  "key26": "61SJaKKhb6feqsZLSjGZw5AYSaxgzS4bw8XVJSt8FRXbCXZTL8EGnMTUqyMQjwuASsCAAATWUU94tfakWoyoKBw9",
  "key27": "Sb4PRc8KHFrYmMjH6RAq5ajpMS1SKHdj2CANjkdozT8h7DPHLukiL8vSTyR7PDG2UHEzu6hDQrMynZKDQy7J9mA",
  "key28": "3o1RTr1sMmqH2b25nVcg5YaLAEJ4knYvEthEdRLbcggbL2ofhxiEkB3Tnb7GZm7eDzeEAa4fBeJTFcRiiSkQXixH",
  "key29": "78Rqd7cPCahAYxTRQ1NQmbvm3hBbskgEPnLXm8M8D5C6QGumW1pMwReed2WZLnzLrhZd5UcqwMjJgiphDE5oAjv",
  "key30": "48NTYzepjbBvKJ7M3BwikLHq3rgAa5u6kkWBtY41eG8C9moY93zUiBwwtmD3yJV3AARp8ttHYqgPLGah7wfd2DHz",
  "key31": "23b567eahj5SfC6CyzmrDjdS1wPQdYXyXJ75ygjAwsSiGzdtsvpJHB4zA8U2jn46S7Yepu2AUouFYUsVBJvXSnkK",
  "key32": "3nQsdzuwvHDkg9cc7ksBDXmNcU4dw1eQQh9rZSeTceATv9zxbgpUH8TgdJAXE69jqZ1scEGJjsgcQueaFC7YPow1",
  "key33": "2wwYsCaBHuSB5WzMNEVQhZPfwx4YvfirMu3xgczP5KZcXrgj7JuMcYWNFT6BdFEBsPZdpPESKemh3Bvet9mdjRtD",
  "key34": "3vHPgrNHFc5g6xc9273p7hiSyXbpVvBZgnYMvBUWHSoUFW8KEaupdTiHsjgRzjUfwBim2wbfA9oGGUAn4NQeEuTY",
  "key35": "Ptfkof2TNd5Z2QajMipq99rbMMoKsNce2yny6rwD9ETcp3hpBMurdrVtTaSjtHhyvnMo5xvbk9ddYVitEf4hVwj",
  "key36": "3GV3wqtfcjU5H8CjPJS91cGJwYfHkmCo1VJUuVa9yZHJJz8CFHHi39CG5M5Dtu3muhm5Lq8LM9mEKJmJf757YKPv",
  "key37": "4tVDgJzLvNpDYRLmmmcjZnwjBGtmi27mVb1ZNry1mCVGp1ehdMhuuKrYn3eXyuYFWk7e578hEwxxxSYJuVCUEvfp",
  "key38": "4UtdNjnZeFbcxpzB47HDQWVHN1MhZeZmVEicTgfLCDqW1uu8uWC5vQzTbgu5pcP9327ooFkApqiUtsQYcZtj3FyA",
  "key39": "3PHzEdrLhPr5fKCUWrJQqhsYWYFMo3NFDE7SayM5DYUbxUMCTQwBkaTKfNznBSKASjU9Gr5K4LB1vLeuokicUyDe",
  "key40": "4WkqToiFE3LFLJvGLYzca2atx1egnR7JqZSn4B99niAPWayn5LzV3Pw6CXobwXA3WWmwoePRWgFvZYTs2Ga2EoPz",
  "key41": "4cvtrCbs95HYdT5S7wyv2QxtgyCV3WLc5Kzffr8eApcnm5MFB8ne5teRWko1jDhLnPhw1GySvCuvajxyupherwwH",
  "key42": "3gRWqr2RTaXgYDNSuHWNGKpbuU4ms8b87vz5pjkt3TutkSx81WU9SwrzrBf5K3XeJ8NZB3Jo1vw1UiRv58TR1SjG",
  "key43": "4LTP9Q8arQXaU2mczMfZHWJ1vLDhf8c5zRCedt9JgD7ecU64TUUUrYHANfKyPVCJDde3rVHrALnQMXkAQ2P778qx",
  "key44": "9gwEMfGrZqSwYD3E4Pn8z896HqiUCgS65E6SngTWcYgCGyWScYxpMuN8HCLDJtZDFraLT6ZG7EeiwqZXfcrogoa",
  "key45": "54ASjqL3acR3pQ2LM48oeC2yt56aMMA92CQERBUAYRRTrG8xmsYBP1HSuHVwqhQJQDBKPdZ69vWEb8S2NxFQ1mzT",
  "key46": "2dKs7p23rqii5WixKyXTx41bcumzev1dHWkCAKgyXJbPNKnmVuhUiYZxM1HZcKEAHouukHs4cw3gWPukWbyi7EBv"
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
