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
    "5PqxEjyHuVBkaNcVF8mQpLeKA4ogR7ntpA67kGGAECs9sW2YjSq3nS92ciqRfkjBKPYNERb1KpaeKUmaP1UYmeHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CXKLsHttXYhJ58SDFrkYikkYHMNXpfEB8TTng4PkVPuLSiiFcvMpKgFxR25ARtoAHiiM8ejqYxvyVXiQL6k2EB9",
  "key1": "2nv2f7v76McNZyibdQCZV7BRSmxB5ieQQt7J5Bwr53jo95AM1BFbepqws7a9t8ePzhKWQCcPyRhWPhucsB9ZXVBE",
  "key2": "3m9fQVDaeN9tnrBbSYNTVC4wWjpcTyAhfTugXe1wea5jkK2K6AnZbDk8T9Cj5xFN8HLnonYRPNhCBPzn5rBEhe3f",
  "key3": "4jeY1RXwkQ3518ybSVWwsgRdgecr1rX3Z1TtsuKRj7aJ8DrdBR3oSc2R1HMJqo64psQehK7YQer2jyx9mXVynFBs",
  "key4": "FgPPhffJF6tr8QcyXC86o65ioRUgic3bdqLMGMkEnL9rAeb5w4BPkufkUTjPXNeHdTHac1ejnYomzGGetVxUtPM",
  "key5": "2WorQLkZwhRvmpeEfmXA23ugAErjgi6m75R1jXAYxdJPkNdq2i9WcFsrPjDW1WTcbomgkB4JiKGTUBf7StUWerh4",
  "key6": "2XYsFLaPpFtMX7U6gXZXBZvkWJZ2K5dVqHBmyDnHHUSWseJzfiEq7r9s1YDB2H7ggBwtZsD5gpC3dksVVUS5vwVh",
  "key7": "W9xAcNtvke5v87T3Z5GbvBKLFz6wdV21N5V9huwXPwyoNRuc3tDRgPvCCW2zTe1kWqractHFYLPLRrRxrLbEo8t",
  "key8": "2hb6e29FtREjpLDkrkuzZHgdeNhPAr5oLA3ssiToweA32B46SkSg73bgYZU1fwsTg8RrL5YwhmKTzjPr4xE8ztz3",
  "key9": "4ZD8WBGdvj3hMdKTUXRNMZNTHARmBu5coCbmQokEuQXQyRXG4YxhCg7ALNzSxeusBX9wVfTKpYcFr5djv3kwXNxM",
  "key10": "2H9XafDEBuyuaZoRP6pBG4UQrTsPceBHg8vBFmUB2sdtemHg98bXctYgxBqHEu9xqvjQVAXgXL3DUDC95A88suda",
  "key11": "2W9YiGkfiMhMg8h8BwmRFE6kQ5qtqv7Gj2mVuyKQh9pbV8WbcuiNjwiuzRmhyrXTXd1TxJoteEJLrrGLBwu2b48a",
  "key12": "5jAXE4rst5Au6WswVmL5P3Y44Kb4d8BiSmPVLji6pgnur8k6iStWvTeBrL65jeDCQnCwTVSkaFEVHmTwx3v8zG77",
  "key13": "2LPHwMfidG9Bpbhh6x1y12bVJKFFWUo8QbdHUgLNAEAtAcaveWncs7baaq7CLq3q7p7mUyP6p9NC3Xd6Vzn8YCUc",
  "key14": "cHyprDyYcC2R33kDCe5g9ZY6Z3Hs3JzufQME2XRugk4YDrkryx8GvQR1pPKLBtrhRjvQipNVntSc4q4UV6BU9n9",
  "key15": "2WF55StJfiaFfNHEsBZzK7RiSJUQkASHmTfvudi3B27wqXAE8bDxEjj2PQQoaxMAMj9ZmVrr334tkUmcqTDFKXB3",
  "key16": "63C3bEBGpPiVAX1aztSAk6iKmy22nJqCYe1qFXy9x1XJbhmHUf2DevQimLV8irwkK55heBqvy5vSrSvYRYA9YmA9",
  "key17": "5YLttSjKtrqpKqwbwSos1jcbHCTnU1Gbt8a1Zsv7wDXyaBRnzitP48Zw5GBUow9HxJpiSn6gSWUWxZ6XzbRh7ZQg",
  "key18": "39Z9TUEAJxSEvY8NT5VFGv74kQUrYfi6vKzEgawUDG7DzhaLSo7MHCFEgkiDSf3hTAoBuJAy6mSk7kryvr2vefK6",
  "key19": "58rBXYRxG6UhvRXTNr15gvxvaiZEvbqecHVUpzVxc7TbiebX2rMVkZQwFx9ysRx3LpA5weL1AtegHLTXw6g685cJ",
  "key20": "2orjovSAkwyBKkg77pkobK6yGVqwux8hToFJav9QwgPamcGNaantNr9Tvc91TXoJDYu3WCrdGjbUaXW2oy6ZhQAG",
  "key21": "62SKbkXyWWq6cTDE2RCQ7MoG1CUn8jJ9jPETALag759F9bedDQfZZEXugbWnG8ANC7dvS55DyEmFfExdmjfWBpR1",
  "key22": "3nWzd3RwC1vGcTkaYazuYC4uqtCXBwxtAY6kgnPEPg4UNkvRybpyPyFbLYEZoLyffJpP5Vuk5RTZeSzv7QEKCq9A",
  "key23": "2g6ywxVYPMnMHrhqUZUFabGUYTFC94U5J2vNwwJ1VHR2ukaWgczbBa8yeTqGnsim6kcAZoKSgZ2wLuwFB64bukn7",
  "key24": "dynyMmyvRk2jt9iGMmUBbVSDtr3M2HqdQkmkJ76Y9Yii1tP9xxvRfCkEJ9oR6VzBzpMeXd4k92qWKnMzFS3ghMc",
  "key25": "CoZt63TmSS4Ki6paUEZA32wZnzxGEXHyyKG3B8MFTF51GmcyWpHMuxg7Jg2BtKYP4tnmtk74nnHcwB5CSYQFWwB",
  "key26": "zEG6qoGgw63aBiwe3bHdLZW9RRCk9NabSPBCWEMrezBqrWxejh2qnJWhxthxS7j5SAGDWX6dHXnxxG1sP5P15Yd"
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
