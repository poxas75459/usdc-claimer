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
    "44bDHXfQYPCgm5jYHpksVMBEHTh1atnFSPrHzNqiaAEMYzYmnr9U3SnaP4VY4R8vGUNaMQDRmQXL2fzuR2HJR4Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJCDfuHZMjSrUcPxCjVyFgZMtFQsdjZqpyR6Fwm3dPFPXRw3F6JD1Rj7LMWmXCW82Q3HVAjCvNEU7L7sno89n2i",
  "key1": "5QEkxwhr6Hp9wVkQ2EU9LEUHkHB59CKNDebuw3Ez4TgjLxVEyNGwLmvP3Qx6BRmLXPfHF4ugC6bgqxtPjWW7Xj6j",
  "key2": "QZ8oNQkKwAWNmSHYbDMCndEjdHTXJayoaaLv7JkayNgDNZj7H4LZZgwGRmYFjqH9HRvfC4WCpL7YMLu48gmvDc9",
  "key3": "4Ngmj1Se1Fq7xdx5xpPhnqmxg4xwLwLrtMrDJasmUqtmrxmrwyW5ev5q18ZF8CYYbaozpf7MYhYhUReUMaUrpE57",
  "key4": "3yjJfiKMdiMB1RBZDpj3EUjzABLziKAnwiJQ8a6EQVSDZJ9LxSPvFUg36nvqsMZ27JozCGi8ejUq1HaYAHgKq4Kc",
  "key5": "2sJeijBwVKGf5D36pCtVmeZxWuozBTeQEc1iX7JRPsCkaqNqk223PaYHZWehV1yNEB1ZhU6HRmkjVp2tpu6xFyFJ",
  "key6": "2po6NWiNhzv3eWZCSDrcEfqLagytUHj8swcCMiLru84bsoEsMyTVVmsnkPYzkBJe6G8M1s7TNqUqV7WW5LU2ikDq",
  "key7": "2kZ1uT5mG6Kauw43PNLRSfDB8Tg56oZZFAFvKkaHwfejTHBom8HRqdszzyuLECcxFzbS62r8e4hUrk4NAbpaHoe4",
  "key8": "2bjhmnF5kdLxMbz7rueid8PiW9HfbfdUQ4WrFZZkaTHRfNtrB7BhNJoJDdL4mCvikHveuJHFN3f8WcjQjixaEZno",
  "key9": "3nQGPpaYPG7DiAx383Fy3UMhFRVV1pAeh6GbLJKmmoNbsdscz2DcQq4nqn2swmfnGFA5CmTJvPTn1CSJoFErnm6B",
  "key10": "5N6Pn9rFohkwf5SZV8iUTHoTSNLypE33vAFRDHG6jUNHbWv3KPKDBdchem7UdMSDcRH6WFFEvXdfZStE9S5XsezK",
  "key11": "3bKVA5XtYcBBLzSnoCbHPxHChzjdWHYq7L49K4NjvS9LmQrAYPNut7VQwpMvBxftg2F1q3TyAZeDUikpd7HFmH1v",
  "key12": "2ZV127DUw3fuKXHKwPSc8ad7jC3Vi95SPKWjjphrLwzVRVTKEQ3CyAocno5oG9uPu5JdshjNz85KVzVEpnmfw3Te",
  "key13": "4tTQE7MCRuygFa2Eg18vdijGbnLMUSAZN1fdpKvYv2A5Fdv1dW5C1MQGZBpVzhv9xKhsgE4jvUDNosVWQUQq94sL",
  "key14": "5Cng9w6eYKWqMejzbXW3cKvd4rnpwDKujZsWE28aQehXcYYALvdEmc9D8eXST8MSHMEk5tiKJjbVuSnGq8HfZ7EG",
  "key15": "3mzMoofAUE6yNHnN7k26TLDzrkTad9Q9fuoqkvbcvgCzt5NS9P2kndxbPcXXd92fcwJZrZLWpXfLHuiEgvn4p6is",
  "key16": "4AGcUPf7xNEYjLtSJ3JBZJTmaoh7kjhUPgqMc1HKCzYHjvKivoKiMY4YCM2thAksq3z4PdRNQrHctyLAzWMsedmE",
  "key17": "53LnKosrMCjJXwsBTqTPhJcVUH3AEJm7FVC4Za75g6VSKve8pyncTnbLHSa1qHeA3yCrGeWJhLVo2S2U918JZt5L",
  "key18": "bbwXkbnkSQ5ADoL2Wu4v5cbfd1HxEMRLNuUddMaaB7BMeEKwimajjaYD3QxQog5hkh55d3XRDX3gmxKD294fpTN",
  "key19": "417nLD9jc1gm1d3y4xXvt88myXMtDxYLqLSrkUbEmmfYftrmpx95JV5A9c2U4RW8HvdUiMWDkrJyoTADSz9ovNNp",
  "key20": "ZnmfVSTMR2FoZ5dWWDnqfkVGMQF3wtzx5WLodBSsZYCoAkunoPujehajUoLLEEwUNViei3FhKxA9CHrtDQWPhHE",
  "key21": "UXmyWexq8A9VqEmv1cwbpAyVDezNZyHyXvuAhdEEi9X8N7ux3ZrUvQTQM4chpH6Q3oCyTw8gFkRZq3n2cdmMq2Z",
  "key22": "5ze8yxCwnLtcq2LGRsJN9Rp7cooZgPF9aoeUBbTvnjUGTiwUhqTTWRzt6hQtYPSiuWZd2PNmHcmxpdaEhFQTVKkU",
  "key23": "4kTCrCbYBKYkPmneuGXJhp7mR4hwJKfZUQBBygRJYsf4XnJKjCr6hM9iS1WnbKLPDjknR6rX59Mg1hbakfpBH2H2",
  "key24": "5KfC2H4reeY27f3QjTHFHGBqSU3r28XyBdk7aTjLuNUXS2NmQob869B6HRXZft7zj5CBYkvaZnrUCPTyvy8U5TJA",
  "key25": "3g8Fi776mWVZ3Fh1dvwLmACjY8xqevd2uhCCrvQ4rRRTM6MCzKRVnwQs4TVXKqw9mXcZbo1GGMjJDmjKdrmus1XN",
  "key26": "22wGnPXvJvu5K2nm7ossoskspNGCkJSAQMgBSMbDQbbn7ETKWBCrnoHpkkAvRiGp5vNsjCc5EPb6tNSc5U97SG7K",
  "key27": "5f7CbBgvugDUNLEPxN1HMxSKYiQJr1TbaYL9kDkt8dDvGCzsv4XD6mCcLn9k1Q4chpqQFUJJL6MQU5oCSnZk47bA",
  "key28": "3Efiy55dhtQddgdRutsTvSxwAsMBKLU43bqHC7HTwWDen1tbbduDPBvt8ohAm4PMtybwH3pjxCUviPPB4Ubbnkyi",
  "key29": "4j8G3rFGUftdaCpbC7aZNySnKTuf3EMAtHgJkdZaoFkr8GJS1ErEtDaxMVZrxBj5g9VZSi8XjnashCPAYgnB5oeF"
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
