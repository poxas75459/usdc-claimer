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
    "uKNhrdqTD2qSApgqUYbtESCHUSzyEFCiticgX5FBVStv4nE2Q94ReC6inaRqFKfZRLgurAwwGGwAFJ22B2rfiG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5joB9YBMbt7ahGfwm3h2cP1MbAiY4SFRDfkCFWo7jvW4WSw44Rz4sQHFFL6oZ369Q51egKp77pb3CG4bf9zyrL",
  "key1": "3mvt4fVWbb1ouz4E95qWUiE4zJbNXsfRtjtVQ2owaUK7cxjM8Bw3VeJDjWgq6CZNYR8TvrZC6WMs6DgoExUgu4fo",
  "key2": "59unvQDFFrNLhV3CMjkn1Y1kRnwZMBW3fh4mRXD8e535TJYtRmftd5ApEaguKDZMa4WAnJwBpEJyPa7GB7QKSTja",
  "key3": "9CWxsFyGobmTK6KVqppNSVZTPW99ovR3pFqVoYjpEoYF1j7SKBZzWqdgxzbGgJ2ffBWQZjqpmb1ep1t2W3ssUhc",
  "key4": "5sXgQQyqmJDHWormWnRRemvBHh5r6i9m85xqUrhxkRqUVFArMZxZuMfj2x29LHzzqT2oS1uirK1oz1Lni9Kr9U1e",
  "key5": "4DJbiXS1kgB3DzxF14L8fJHYbDuYZyZUeJFYWZzRF3dPdfyTYQTSoUEDugo9iExf1qcQP4VtgUkGNozenQVFiXfp",
  "key6": "4SoH9mvYJDemubuLP9dptpKC4S6R1MBS64byQ9rFpTMN9yu5Bkyt5RYeb57oYzeY7r5Dh2PWMQJgKnhS1Hyf3R8q",
  "key7": "3bbCBbLtVuoLPQ3owpCkWcnBAovk2mYrY1FcKSfwB22MVBWwNdBFj5fc3548QwQnqLTK4Ar9vauCGgo8KFmN8fja",
  "key8": "43kKMYVUQf1mWjzvJDFMueEAimWrBxvjtDcpCkfehvnArQ3vF4WmkyQ9WxwUEUnU4odt6SLSPgtDSTMsSfhi256G",
  "key9": "4Re5UVJyC2PwjbG9jD5epoDdHzA9is9uwYCpJv8bL6Wo2Dytg41je1agZEHNLBC3hmVUwSporhtwYrqZPGt8hyPM",
  "key10": "2Wv1su3A6dKSCvax7gVHjESS1RaqjvtbLTxFSF1ewnTny4TdTGMqrpYjustVH9zxWpG5ZHP8tQ6htXkeS6RB43wM",
  "key11": "2SkzGgcM5r68yDVdXrLZTxfYKEpB4XfFgteSnRCyJteB9WNiD3Cy83bqP8o2fcYn9ztoquwd8dPjSdx66ZKzkyDG",
  "key12": "29Bd3P4bC4TC6fKg4QcAWS5hFxCBd2iccJ94z5pZW4gSUeEYqbdWm3bSAupmVUAQr4oF3x5t4ipbZPSH8CA9pbum",
  "key13": "5dPSYxjXmMrUHnkyq1YUdKychymLHpAEsB1H2yMWmNbYNKs7eDjQRzSQv5Bd2sx31LBSoF7jy71LCcprVunbFkfr",
  "key14": "2xFWZMTJYugCbuyY22XiDfFC2dB1Kj4ic89N9YNogrS4g1Zx6vjevjzkw2A2UgozyBb9mjNFeTu8ZYHXgKTSosiE",
  "key15": "ciJxYQYAaXEbdsRzsLMMvka8YjGWxZ3YeL49uFAJbwRFrAjpgU1YsbNFBSrE6WS1ktVYShtteBecL2uoZytf3Y4",
  "key16": "582MpzddtGHKpo52Hmn1cW9UoKriFGeAZPAemEWBrJE9No1jocXhg5AWyPAG4b5tZKUF3SA7WsTbBYYoeiphdNJN",
  "key17": "Y9fLCtkYm57enBuKT4M8KkwzcydyEybNNdWmLKU8HSeqPonueWYuQFh2nQttYRPqL6ypSav5vzWogyGghdYUAWC",
  "key18": "5411Fv4Zvqdq8F8MZy1FmZWQXK8QAJErm6bJGb1n9BgvFXU333JPRbuNyvMFkCLiAxk7fe4dUoFAK9eBycdCoRCE",
  "key19": "4kx27HvU2DVhLHwLJkun4CuCYXk4FCf9aRBVuiKxWKFcWPxQpqkkJGow8GDiMPFMAPi4KDshhqBWHQudJiEkF1RG",
  "key20": "45ufaGXcT4eF9itwdb4uo6a4Z8uCNdja4MwibWm755LcVfUFhXNLuwM13JKVCNBQn76seatFGCekMTGK8FavFigQ",
  "key21": "2SdDfcME95T6JJ5McVuR7CUurCrncdk79YuxcGbaRNi1X124czTDdvBrNUrzBEzTZgTLABuZP15bMv3ogjUQYHwq",
  "key22": "3eo8XHWZBhKXMnUfre2ZeUB7QMEEwRQ75UyHU9DxUhSW4CWyD9KexE3on8ZrRXErnGuGHDxd3AdWZQxjzVvuGLo2",
  "key23": "3XDqc6GaiWUresywVp68XenpeV4CGy17PgV2X58AjGnmxxNjx71Yzw1gwUHajRy5yV4sr9Sy5C5JH8XeQTwFZPEw",
  "key24": "5nSV1jzf65hzbxKMLpdwG65fTFL2kf2CCafWFtVeFwoyYoPK86xFtRrG3DFkicU7nh2J7njy6SAvnNfiju2XMknF",
  "key25": "5huAU8eeeyuebgt5BuiGy3zNpEp3S2xMuot4ri4dFDdW2ouR9kpeYtGcoVZKcQJS2iCnEUWzubhvQ46mUY9qBRfD",
  "key26": "5i6RFjLbRhbFyQ7nyk3T3Vsgy1oLxVEqn6K9DZ4Wj3ErV9tLQwe9Ba1izm8JXK7MsQrEuJ1ZP9hhRV5M4ypxpEux",
  "key27": "4i3LXEcMmDp586ttW9BpHcPU64BRzUJWBFNYe646GzNZRLk7mNCUSbWPK3sBSfvTZbu3woKDTXqG9ExqVqh6KGzn",
  "key28": "4ecFtg7UCa7kiMNxG3XH2vVDbbFBmBJBdWBXrKa4FcbJN3Si3uZ7asbi5g84eoived1Ad17ynpG5oY9RRPtHYVs6",
  "key29": "4QzznEPoVsV3QP5mvXmcbU6xgMHHphm2CCym9C722WPAFvN17Fv46v9TWhmmtaChAFiCh9ov1reDEep9qh46ewmh",
  "key30": "ahoxVxyVgfpUtxRGqE125V8Zv6ZDAGqZ4V443MvvN7ANwgcmHPJcwaD9W8BBz1KQ45ZMfGPtpu7aV3kXT4TENDX",
  "key31": "4SkUnWDYRBQMDa2y5TrMqFmpMuFcSp1BEiZLjEo6idYe9z6pA8hVWX7xm5k8tpBQJHHXb61Zzkhg6f7sqPys6BvG",
  "key32": "4kbadzrjUwD8PCkW2ZYBEMMowhRQPwhTo5RCKXuAQ4f4T1XNiUhv4zEf7QgLPse1GTs6dCme85nAwe5tCJpKV1MZ",
  "key33": "2dQYyvCRG57CsatXfgSYiMpajqrR9tu1cupMXZimiPp7EVSvger2b1nmhuUThPxEYUQGXwCqSuPHDE1kEwG7dMn9",
  "key34": "aru8NAka1UcNHHFTyFLgCLmekLwoxQqnMqYQujrKjrkHUuTkuc75tEYGV5R6bATSaoQ7o7FRZaRkXgAurji2XK5"
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
