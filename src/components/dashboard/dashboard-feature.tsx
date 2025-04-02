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
    "5EK7CNoeee2othMUCDZVmQRxvdNzgJ2EgvvcG9swgSiamYzVeX9NQUyQhwys5fHhTtVCUjTe7rrwrkM11YyNfHnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjWbD3booFooavehU4dveLtRSK4nbwtLLUdh68DdhSLvFyn47JNsmzUnz9Ed3DysaFcaXb2icjNFGoDY4Qnsghe",
  "key1": "4rfxYknc9V8oZMvTCzSdZoHprHQFDorqUdLdxPm9hHFmgGfunENyNkYptz6sJsZvT91nu4voPQfG8BxkeHDavF9Q",
  "key2": "2Xna9bdLKetANteDeJqriM5AsoLYEVFUiJPm49gQUyXSXgDMLpaSPesN3h6dPAtTcqHE1UrPgTpNbVcBpQ7HaUB9",
  "key3": "2vJK6VeaDX9CwqYWmW7ewD9m6nJV4Rd4chZpuvL3GV7ouwQJawQ4FpY7Qoq8dhjnb5LJed6ig4eRBRtVeKXzHAG5",
  "key4": "57eb5H4mS3pV1vUa15oDoTnqqvCKi3yugU1NQdSKzaUdK7BrhFSKFsr82br1VnSgbRiDxQWfoLQqnHbsaWXGHJyc",
  "key5": "44ifahWaKR3dYEGDpJHndqdcGGG3h2y4pLjVEiS9DT5tU3jBxFm3V5fYMCthvvyKWLu5hQAmEEfzcWSka1GUm7A2",
  "key6": "TwzpAHRfnjYYxC8V4kNPq6aDvTXwpuhpE9uu4CGEQoFCVK8CSrCyPhVjqKLDT8WrX7ToeaenQnpdhv4MiMQRbip",
  "key7": "2rXqW7C2HujcKerP2tf2iyMgXejqp7KSM6RRsCb62Gafv5YZGkWpPSPTkuZGMp6QuMmRQaGBGCEXhfAU4dYegZJK",
  "key8": "4gzfZivwrNZmEGLjAoHLis92Q8j8yUFNJgpWGx2GbKQZn2g2pZTpiQW8MkrfzQFCxcFAoqPnhrKESvEZgd411V4L",
  "key9": "4Uzfeorboubqb6wV5A5yEcDLZEXWzMms3guXZce6tkxU689s8aBRrb3f5wQHL1ZsBJaotUV2W9gg6fj7VxnxjkrM",
  "key10": "3Bs7G5Zp9SdhADeSZdh7WoPLChDY6HVESoW5v9bBmmKHP1gmq3nfHmzRNwp16bg7hFdeDYyAi7CnjywiWvvw4si8",
  "key11": "5cm5SCcodEi7kdM3RyxJn5qQbt24uk8x7NQZZbQ4A5VU9SSJJR1U6EtbZGSC9fgsZT3ThiTibf9weWJ5aXRWjJPe",
  "key12": "2TUrdqPJvME4nYP2nijVMBM5DrwF2awT1NjDtbBxcagDMhgLnCQ3MPMpmBAHkzti5GBdR2JHAfWxB41TPmDPu3YJ",
  "key13": "5spmDH5nboLFHA6teQLtY2n1as2wW5aPfT7zsFtGCRR7Jcc461Ebo68aXQtCLzi28KHn9hLm7jLXVs846TrMV4m2",
  "key14": "5XVNSZ9jEYAHiHtyis7nTd8DFfro4XgLnh5bxN14mkQFaeauNtdCzYZooHpqWivCzEE3CZvG217jgTBwF7W4o3WU",
  "key15": "2Z9NmFyBm29vPhmwQ2owfVGe1AoEL56LXww22mZp5htEwqnAn1LsKAuHw21STAEL8BNZavKzirWXinGCJQ1xYR4L",
  "key16": "43KENtVj7A4hJABuYW6xGvgF6tQuauw9i6Ddxu4Z57Ru8wwKtdNvrLEsUCfBw3bTcfY4LHgbRJShkjwRCMtaCVV6",
  "key17": "5ic3oUZaSdB7hp89ejdFqS7Tzci6srWdRvxDxjVTvPGGgXyjHWckB4zrPm9SqxyJNnesvuUrsqGVtBEgfy5DmX1a",
  "key18": "WyAVeYB86RryPqbjxj7Su3pARjPnxHqqrrxv4tRCwiPn8toaWHeTg7FZF1qNFXnMV5L4v4hemhY9nh4oD6Wb5ii",
  "key19": "2yKhQnFhDn5XwXhSUCZ1tjp45RYAHtLsjSKGbbesxSveY3p3V3wduhW7JVSjyntonsg2wEogkutXEQ8wYaTSi5Rw",
  "key20": "4sWtFJfMfFaQrpunchhBmK6PQyewi5shmQh7RDFMTttXgpc4ZX63a1qRyiPxKARWkHbCjuksicop5jfWFSvcf5FQ",
  "key21": "3dcRP3LCMg7APhmSkxQT83jgBiU81CjPFptXkzCq96VNMzCdQes4FkYZPzEktRCHUQvGgYDCTDsgsKUMCp8Zv7mx",
  "key22": "4EiDG17cQvE7xBZ2KGAQoctkbFwNALP7gBRL1DSq27NmwzEN5RsKWpHwnBYSmaQvPysFABpFr94LkeCPpWXdWL3A",
  "key23": "482ynNjPjnxi34ryMXfn98SSE1t7Tcczc5JgfvJoEgojSSvbYm5Wz4zYkUS1tMjjSat3bGmXL5iVyz1Wrx3boSXK",
  "key24": "rspnw5ZVUW6H4SRGCmHRtiYbssMYrQcy9tGW18YzrXZvxYM3TgT1xLxcC5tHAYSATXJexGEhmdk1ftnrsxGv7U4",
  "key25": "5yNN37extLGmSLMoRoFTYNgDtKA4B4AeCYhmm2dAeRr15c4gCAjseARp3XNdZUbfAwMyp4LwgixcrmhtmEy2r4B5",
  "key26": "xtn6T5fnPiHQYyyq2in8Wgv8pH8f8vBmqzEzDHKoYbx3SC7nZ7hCRWzBqdGVWmzsCLpZvKkfMsX5sSsozhPixRC",
  "key27": "2JtDZifF3nrBJ1BB3m6Rj9dsR5zMk3zYL8Ya3vC4rBxYPfjd6aFJa1JmD7GXdJqVB16ojgGUpibij3QqSGXBz642"
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
