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
    "55NBcRzP8nGcAYRrcXaDi7apbP3nVnXnBe7F87R48oFU2i1NCrriRxXW38def5L9mPDrLoRAxtczeZzyvZfstQnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gYkXnCaLBidzUjFLAW4t6wsup84b7GkQGgFnJjvpyD4SFne5A7CtzVBE7pfptG7yMJLEuxBz9Mttnj8Ha45hxG",
  "key1": "3GG45r4C9DFtzCd7yFdherhhAGEMJNd2x1hks2b6Pw5Y5tdCW74BjMZRoFjmYMd5JL3Vw67daCDzw6EAFhA5Hccr",
  "key2": "4jpoJypUTFSzApQjd57z6sKn5jgshaZfe4LXNxthyujLTEQD1N7ffSWFVbwzzZYmwtjZzagSXEFUicerZjaME585",
  "key3": "pUruWnzseoSnXdEd1uWCh4roeuNg7gT6spccHCX1bk5DBVjaW96XWRTUGPebCxyQw3tDDNdwcherECLXmavou4T",
  "key4": "4oscd4KHapDKSqNes9EHc4bCjCFX9WirDGdckgAozofdxxYSKgNNZN6aVEE8oKWU9jgd7qDDzzuA6Q797JsT3C9Z",
  "key5": "53c4MuRvE7QoHNzdUJhMXFGAeq4gACwjUVtuBoiCUYDoyQfy9hP1Gq4LdgRVZgexUVsEnCqCjDrm4u9SaFAzYMiE",
  "key6": "4mCqD8r1ykzvCeJWbEztTaqZtxebmUKPdyGRiqsiWKGJnnXae49BRgo8u3LD2SwJxJ3pSeqP1grpkbwCh3zTvdTq",
  "key7": "9biZ5pKPnNc4d2uQVRQRa8ctyDaFTgvtjZ7K1EMBaTXY4EU28QP775USYxtjEcnTZVTRkoTTiLArmc492poabB2",
  "key8": "2tAbiVs7JeviPxQcYWBCHsfYGZkG2kt2sZjYXBUHi9Ygq7qTFcq3NiC1wWw38KXikR3VZWefrLMqruXKbVrT1NQu",
  "key9": "5HJG3AxBsHdQa7Xv1sKvsdZf1EEf4NF8LRLdpq9zR8FxfXsNvTQP1KPEcURmX6H5TE8mJrNhv4S2sR1uHus2b1gD",
  "key10": "4bQcMPbsaKdiZ81TCYAP6i18KW4ApJsbRz3YMNjF5RK5x2U945En58QLGres6jFYdVqp9tsT5HHjV4GequiXHusE",
  "key11": "4AxzHnNFc5gt3JV1ZMgrSXFAa9QjToLiXgKCYGaD37i3y4h2p6q3ptixHbQNKeUwbWSwFHRi1XJEiCD6149UiyzH",
  "key12": "4L9VK3n4BNSzhKxQQKSaM7nyR5mRR9huXAKjUfyvZyuuA52nwrrUtiLrpiSLxhnPovGTimyjbR761w48HT7Ne8TS",
  "key13": "3XnBjMvw21fm1Z8M9TfKiVeWTTVVZ1UAX36Xvj4Qgxm6gQqJjZVuJCUQsKAbHDAEMBBdymB3CvEYEGauUGA4D1z4",
  "key14": "Q7WeHx3rH2W3qhtsBsMcPFjKd239NwVf4FLVPWLwogmWAJkb59YEnr2Yaj9ktdxGkYSuKdPySbPNEUskt11RJgf",
  "key15": "5A9DPoz3Dhke1BEP7NsFTwyXt7AwBi48g1y5fuvLXDWN5ZsogAXkUnPqRHmGf5Zf4frqMNhuPBKuiV1Laorehm94",
  "key16": "2oogeLkQw3dB6nX7YnKS1hdVnEzEsWAV1jToGKfiqMu3jdcBzbrNQMk14d6f9ezHbrs76VuUAN3cSqguqqqyFo1f",
  "key17": "3PAmEMtKfiUyXagRka5UAnc5gfqyqXv73GGVBUu7zTb7ETd1DPzxzg8xPHk967hiiqbhbL2xXiUcbZeEDciRwMNL",
  "key18": "43DjUCHCHHWens2FA5r3ZbnSyAtx4LhPt627eyVrDLknqYnx42xsnbZkQqucJYJCx8HLYzhy4HCVTF4NQzsLvK74",
  "key19": "4TaBsuHtbRVwaHJx6QrsHDxpjHoQUBoM5xbUtpBKPf5RUFBunn2gNgjjeQnjSkq3wuZZKaV1bz7dqyycDR814ccD",
  "key20": "tXipeq7QuBzsouX9LUpgXq79QGDh9Y1xfCUQPoNvAVH1G57zxqDtQmSvNauWD5ec9tS3usiTY3uX1yYztg9YxXm",
  "key21": "395BvU4cTGgbMKLojgdBgSh15X5hhbwkzj7BJs8o44KoGiFVwD2i8jWoH2dZjVmmDENx8KbiMoqnVKBZVMh2k6GU",
  "key22": "5nDbrgqEKG9SmW4NVmY1GBdUWZH38B61N9PLjmkEeR5HC8zmLg423phK9uw3qReGXjaGobizRoZnWE99w6GGfA6Z",
  "key23": "8prde6NpkXS6x7yytJUE3DuXn2JzLzeqnfe2WFTpveUCDiM13vVT257m2MS6UiGUczBdnUCgsTxnNg8mSGNUhk4",
  "key24": "4xTvCGMz4G8zizFAcYShYSLrDijRdxFqjcq3NXraqDJ9A2o79LgiyPhWKMFDQfhwDU4PvzTbQWZz5yh2bbvRXRy3",
  "key25": "3GsACnyangBkWcUqBUiRdzi9T7WNVAJ2ZuamYcLn6HbhTmptJE44rU6UXYDm5d9hC3wYMmKDLs4gqwmZjF1xNtbK",
  "key26": "33ap8GyxYQTNqekvJBGWXwAHSEA66aMh17cM71BuZtCVyKgDnb98mYKgKj7yLX8y9G8DaHEuKSGa1seqbnLQS7qj",
  "key27": "W8novdfK8SNJr5jgXfrKTBFv9WdMwNSRLSau1wuCTEHmrVV15SdddW4yXAnZvQuiKCSnFqQHWwJ3hHAwnn5AQ6x",
  "key28": "5UtAtgYLVoFqLmrvNYwRwYavHdG6nUewcyTMonA7sBJ5PS2zTBe8ysoW6UjkiDbRA3EsLyavvweS1podsSx7gbgv",
  "key29": "4YwsDWRKyRPpz9DybZdv7Ryd3Lio4rm9HxsnYvrW46x8F1wTynuXakBZAPacpAzZ8VXqCAL51yQtrAK8hJTF8WmB",
  "key30": "3gJ8Kw6g1irrMqmPsibHT4yVipxBpJwDSqSg6Gd9sjc6hJ6FtThocciPAvinnFpDTwQ7dvqZeMKgr9dq9LfdEQNm",
  "key31": "3XVPDWe38D8u2e3mTGhdS8HTZp4mVEvGuynHVfEDzuf9Gg4qBR9hdb5nEKdZ881rReetuy8Nh6uEii1L1hXd9Ahv",
  "key32": "mXgvCmbGf7DKj9PgetV6LxuvVw6KAPUnwEFTapxtcAxz1ESdeC8U4smAwnrkisN6jw87ve7S41os1py3wNsgq7b",
  "key33": "xEuPcenEbjjhpzppjmrMdDshEfjkbLqLe8hynUESyQF3GSaNn2X2rVGc6k8dEu7go2bcnc42NHg9pgCNiqjVLJL",
  "key34": "5bxsZeh4sA7HMTbzknf2fNtikQ6W8MopQNs9jzPHKWVrDCeg72SDXmTmtsCyajXN8mJukZTHigoVH5Tn7NcLphRF",
  "key35": "2qSKntt9VTbXfw5wVzdvR6EtR6sq6rWH5WrcfM3g2WEYHtHdoWdkALLbM8ALxA3MXJgXhcFbQtif2e4GEhLsbqHj",
  "key36": "41ahYdBF8GJzix38Brk1QLE35frEdHy7ekfmFMA6fFQCA62EgBv7YLT7MSy49CyPGcoYXSzDhEpkJ93pQ8gYUFMG",
  "key37": "3x36F2c9bzrZC2LLHvRby9JNKCrgMr7kLo8ShrQpEf8a1VKMmiwrxU3xRVEyVntmHerPUsPTviFqiN5PwfxQFapx",
  "key38": "36SGPCTLjccyySMoYsQF2z5Y8dQUHTN43Hn7Vb4cGfsomJw41xH44pvhCN7TTRf36kqz7SXPeLWP9uTobYebu3Ab",
  "key39": "5zZXxY1AtJEQC86iGySAru9kqa85qDXH2wMv5UNDukGim2BigbwnXui452UHRrM5XDJrVD6MyqwMTzroMdu6Ctvs",
  "key40": "67GAeo7SyJcgn5Dx8k5htg2L239RvRNjU6kySWF2egHEkpDkWc9qgnW4Y1JJvCCtBfe7Yg7XmXZ5EqN49PfEXWS5",
  "key41": "2oZe8nq5CNKugPJkZRVjS4brwFM6a6wKiT5tT38yfZahRQ3hqheLs65AjiycgrdC5CAXtXSa19baz8DVpWvwqWPH",
  "key42": "2ugGxYUZGfkwbsFNuqzd2WV9LmDkiLfxAg3JfmafVV3QTBDpXwmEy2XSgrrZpVrqHpdUBQoubxk7dTku37kfdXhv",
  "key43": "3gWoSZVS23PNeEE9ZGk2kNPdSSbLBUZtd5tZ7ANLjKQHnRhnGChFReB85g7RvRVZ3S8aixLLMGtLSUVV93GhUDVA",
  "key44": "agKJt3JYyyJJGsDAYf1gQxHJjLbHM2dd4SHxb7G3ACK9NZmpR65ja3WPkbYbpRW5ZZt6y4khkxDHArcFDfnL6PG",
  "key45": "2HBeQMZNt2kYevdTooXaC5gb3u6WGnEdaoPw1bHN6dLHDqofr2gYqePMLJhrasFFA4gm8RFqKA1LViKe6821Y3uZ",
  "key46": "27q19ZFkqL6W3Ur4QMbqpsgFU6R4nwiSiTMNE5f4Z1rYPNy8VFg55gGA5UTuVV8H2PuJWZUX4ePExVHbgg1xuHhN",
  "key47": "33Year4nVx2HbVCPLUBYDbZKvPeYFThCZzU1oKAtArTHfTuA6TMksaiqQQHgBzKGhgWYistiip4ZAitT1LkqrKid"
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
