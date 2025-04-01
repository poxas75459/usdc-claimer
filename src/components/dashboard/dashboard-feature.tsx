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
    "3nt5zGCjZx1Xdes7wvdsKivGvXjtgnwuquz9A3kqfd5YRsDDcup8rVVYBpRkXcjww6WaYRKGTvnNfKo8P8BUMFV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zeWoptMXHqzaUpRXMXx9Brtx5hrFc6zk3xiRTJTWfPGmEZBqig6fffND6pV7q1uWsrbha6psD5sBtw9jpdxNH2c",
  "key1": "546jM3bAnkLxm3pmeVhc7urBmf7fWVCte5S7SSCLEr11zGQ8ALZgwHPRWSf1PCnhqsjVtPRaLbirRxbAwPpZhd3y",
  "key2": "4s8V8Uy5nEtVBBCb7KmbNp7gVgqDZLZ1GCisaMDxsfqRj7DcpAdeNFojzdkfuTxfrtexwAREFdCSK9pFJaRFTw5q",
  "key3": "2XWgmXGKvKNC4zKdUQbjzGaAdMRmrSGTkFNUyLMqR7UzD4tsvQzCBY5oECuYHQhPQWsMQwX67BUvP7C6MEqdbKHc",
  "key4": "21V1EwCW5b4qYt4rmb9E1sfDa3hR1V6444C1EBWYJw6wRKWGSiquKXjAZKHRJkxow1v56VwNrU4WH8bPLttJ33Yh",
  "key5": "qG7q8DU5P4rd4T4LcGFvc2nJ3MSPedzbHd5K6tK5MtD1gPc3Y3QArUehwkvUx4ZTKLLBVth1QSVs3AJPEYR3RnW",
  "key6": "32Vitf9fN1B3DLdmVCR7zfq8FWJezfCyZKcf1Na26M5mJHFcFppYvGa1Kv4i5frF5DC3La25HK7U4G6vVnqbX5tg",
  "key7": "3hCu4fQSMLXKxY8rtt96zq5AZpGoLFCd62ExKRe8P1pbpEmgLngjanRt2BSbq3uk1JRNJrpAx1ZYzrV46GdjjnCp",
  "key8": "26XJTq1gjnJ71R2h44m9fmtPHZNVqgcvpt22HzmVr8qH8EbnwpMwMXSfn1XPeFN9NiRA2UwJAEwh3vrS6Vk4C49E",
  "key9": "2LTA72AjFo2ksv4YfnetLLXLSxwZFAEsKoN9nWoCYg4ES9XGtrboqBrX1KDfRqzLJZNvZpmJ7vhkvQRGK7BsRpsf",
  "key10": "2YocCJQV7Jin8nyS3JLguJ7bGtGsEd5C4tBVyjHJXPJ1snhKc9uYHZn8Ty2L4ZH9HEVhVAfiiWFtTCX7Rpg16yBb",
  "key11": "4MsLm54BJYUDNVEFcRCemEPwcUZXkhgzTyfZkf5Sq2gvQeJGEWysrZXVp4FMPJ2MWS3w3ZkEm3Y1kDhz8zVSNMvx",
  "key12": "5hzks8r1iQbCYT8c9LtfcXvPRt7JxXpbfKFgHfjj1P7DnyjyCV55iGgkkQXAegPhBP9pnvuvfRMnWRSspfCe1iky",
  "key13": "3rhymJdziwHkKknCVmv3LcD9boL8MVQRSjWPFxedKoVhJHMKpPihyRxjRDK5wep2YaUC3W2FUFVBvBBoV3EJNfe1",
  "key14": "3BZUbdkaB4tSQ4Lo34jRepFTCM9VVqNPrDktHqtHjvAfLQ59mf2c1fEZHzCccZy9BaDix27gH7Y2Bgw9pUBZeeF4",
  "key15": "4xd1QYGDEwyBYE9spGFEmFGFz4PPkpQxG1ZosYshSQRYesxPSRoMkzLi6fk7kzEQBreMGaLuHoeQK67WKbQeh4mA",
  "key16": "2hjSRxgtsGgrWqvvzo6GsqKDmqWrBjWYSVzjHug8gFRp96uqNe2DUSum1w6tfHr4su6iCtqvvxmQJG84cKY86RH1",
  "key17": "39WvUDcdHvsQVNAguoD5aXaiKe8d4MvLpzm9uYv9oWaeHhhm9srCnmkfs4mVhtnadKXk872gmwPQwQHLjRCUhCz3",
  "key18": "4bbEM5db3JxL14S22rjjxeUcNportwLCexzC3XFXJuiMfEz98j3gZUzYjxXv2iMYYc5sLWP9CnBZw3fMeRAGxVMr",
  "key19": "3fGudUkApq8Env2rxTHnbqtBHxWjRhgR7V6QjWmZbCtzJ3eJtB4xRxh1aADXwc95WLBA1U8KP6nqr6GcKFJLvTbh",
  "key20": "4NJQRfmaf6rj8jSrufpGLULijb8fbBrjoae9uRdsQ6NZLmmLgYPCRJfrtsCqkKG14LpFDTe1G8Qw4gj7qve7WWPd",
  "key21": "48sYssAXmZy4Dux7ZMb6ozodUvKD1fuDGdbJ1eyrr5Rskdzqjw74ysDNQCsCFMeGHt4VPBhZJpc9PJmNZzEotmmT",
  "key22": "3cZdYA891pc4j89oo7p31b8njFdTuYjXGAvfrxdNxM8WuhvmCvPT7jsMuKqYxKEFr3X8F3rbMY8zqFwebb4dyPC2",
  "key23": "5Pw9urxn8vfNybWpUkpqbVSKZyrjtiaop4SsrbBv5M2f2MxBqxE3R1q95UoskVfm6jTre5cFFuMsNkuRuZET9XEe",
  "key24": "3wbWGMhTsWu77imKnrkuQMSHiKWgNs8YLPhUFG2Q6VWWbHTfjNFuKTnPwKpGaMwLDkpxCCA7o1ks6trPG2mVZx7L",
  "key25": "5v9jFvPhdDtFzNUFvAN4YmtsAW8T2pS7Ka9CV4yfsBQbdMvNUJ9o9nVCo2Pv7UHPv8cys9hZkW7Yj3MS4gu396LU",
  "key26": "4zgCwHmrc4Apc4ycXFEfZ78S65oSTtFABfZb3jGciUmh4Lqs2tFHzKLse1UCYfdknQexumkbecN3zTrVGhDgAkox",
  "key27": "27FcStbGvqbCm2czz8YXg4LmFEr32hRRbsNaMPGyHgnUNACfQWfgqaF2b8bRnWRgwp5GWLnKdW8iSsdmttQKCJ3m",
  "key28": "5qnunD61vrBWjth3x9KCRhy2HToqiMezUXYZRuXWvpKzCLjecec6o6GgoLdW4rLfhXXkFWPTXYKj44BRjcWTo8rv",
  "key29": "4M3PNscmFnd7RY12Zy4gC1QBQi2XFA36okYjQiWCuFcJDj7uiEJtmw3P8Mz4YfxH8iXNxtvvF8fZE2J8odQtYChK",
  "key30": "YRAwycdvqxgV1YoEXcrCE8fTvfu3uqyqtBGP9Y3MLHEWMbVZAqt3Ld6MKEJW2aSBAkteMLE4tq4XzU5FdWd8oW1",
  "key31": "4MEigJSXRuALgsv7FT4KDndah5UXi44dMniuxpyXTCxwvs4Ez6YbhDzuUAeeajiaGSQvjGSzQPMBGMzDcNDcBGSd",
  "key32": "5B3HFpJzw1cJ8eLkwmZP8Nozk58fAAmASn1QkY4jXuSDbhCcwp6ivfM13vhAvU8gdEs7i8QxBRps5dfBaZ5vzPXV",
  "key33": "5CmVUD1NiVYooRtTqm1vP6TxKa75f7LwaLgkvz4oqM39NXDbqviEyYong1BM4gqp5xB55zwqn22qQdM4wuSWWHz2",
  "key34": "581BRjkRMUcvTJ6GhqbiQpER9CtSjBawtfNSVMNLPwJQg3YxfzrEEV1NA849JvuMZMTRP4jMY3hUY94NoJhEcJxX",
  "key35": "2Maj5n6NjsBXpX9yiEaYTRGAL4YLYQeAKcaChkZUadm9dmNaVTVDGc38pHCUohrGdBcqCAwPX3WHMGSudBqj8HfV",
  "key36": "2vZ6Guj6miMVq12JwM5zmHSykCHjnjdGUESv7hJNq8H3duGDqDvwCkFLt4cXiiivWn52UPz6uzSdHEyM8hJ3noin",
  "key37": "d5r2qkXV9iLQpWmLXQKB8RFncs3w9CNdzxov5ZPDiTug3B11FXns6CfpGRHVq5t2CkRcPPmDUSiauUxP6ZPHhM3",
  "key38": "5HF2Xck4iR9XsFuBNmKUjKsHnaVATdvbT673FZMBTv2ew7TLwoMcMdu4AftgYLyNnuJ3dmhZSw5t5LXPXaahVdNo",
  "key39": "5a5HkMFM9CPxx4Z8GUhydCnhXKDj9f5j8wnuiXr1cUaJvamAK895cTF5Vh5GoorxBbqMvKVtxUVFmQKrBCxjkvuY"
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
