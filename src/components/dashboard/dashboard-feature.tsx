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
    "62Cs8PHYUg9aXKF4zq1XiGeFqp19LRvXQK8ZTyvzrqF6Zs4AwJoS57YwoUiw8gN4MSgtuvyHmwn4APjDCM1tdt1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gd7FyYUW1bLdb7SXk8upozkviPvADiHGhbwbeZSmQxWYzxVMfqnKhUtshdBSY93FBHrhA3PLjbC3x7sRhc9RgxA",
  "key1": "HLr39ix4LvfrqieWPnCA3L37RgVjpNd6pBqdU5pbqomsm1bR71wGtW9BK8bnt8ga1r1H9mq7uPWJ3Z5vd3rRWpP",
  "key2": "3Ja9x3qqjfJ1pmjWgfj71UdXaVMkJpWRGT5DsGTnzubwsq2siPH1DAy3LchApRMSgrzWExyhCdXbzNcjL5UCnP5W",
  "key3": "ZKe2w9q3cs12hb4MBMaWHK9BphQRpfK9491AuMLvSWpn9KrwWrP6woUxYKquWWcEA55z5c1XFW8xzMnB4aPQsdU",
  "key4": "4qY5cYHV67U8yQYoX9h8ZMnyimtTkzXJx8GZcn8MhnhtNb1WZ8cBkVH2W9Cq9ia38jfZArdbaQ4HM3oexDhmhMMk",
  "key5": "2pCtTsmpbFvBjKyY2hAX4PTkmqQyDcwtEKpRXouc3rsoSRhpjYwsVVd1a5MtHgysZKXge91EVmCbx8cwYTi1Cq9f",
  "key6": "2wKoayTjGN3f2H7S5PVqRJPfEgWMyPMnQCpSu7tDbBTHecaQqMa6haKyBNjFcU8eEaXGnhWw6hUKvGsTMcdQB2Pv",
  "key7": "yzuGszcJYQhLz2iXpRyPcBheMPpv7MyzCH6AXnfFuBk8gYykprktbgAy6bLsbrDzj6nmcwijUKsuxDDBzTsTR5R",
  "key8": "KjjHxnrd5C3AsowzCW1VuxBpTY2Nebnz3U4Ge5BvKn4vufeezBv7rjTxfZpm1Xamw1oUzRRB3n111PHTzPnUGj5",
  "key9": "5eqEN6inDHDNtPAXhsXZGxLeYpv9QMKNiR1iWLWaWsuGxFBzyPrSyFYh4hy4y4w2TJ5AydsW7Fjp9xoxskrchQiG",
  "key10": "3bfbD3dBQGkfFAxgEi35NYF3apTSVhwNjNfQE95emqRXALDv9NdYeS373CgNDyFWyrCkh9JPeZqRgBy5T4QsE5T",
  "key11": "2UvUZwYn5QsMMfQr8orZFiGGx8KEkYHryuo6Mb55G35BMDRFKbf1J6cY1iqGRLzym1URuqDgKt3rWRwU57inLxR5",
  "key12": "5h4u3Nqj49nPNN1Hz2nzZQDsavwS1ju9fKd76uQey2uZSspk2dTK9QxSZHTZPLqfh5YPCLXQpWU7TGur5eZkCxZj",
  "key13": "62B3Ha6D651fH21NRJVuib8LsAvHoXtGKPs6dHWaS4tkb4FFi4RPY3eDBdzmSDR6yXCofSc4ht9FFtGbWDi5F9Vw",
  "key14": "3ARQPLiGN9VTtUvkcomHpgtwqMCiJ7h62TxaaA9TXV2NaLUmPkhVZpWmDNpb35KBhCxt3ZYxGnh5cFoHmaq5f5YA",
  "key15": "5vkZMdekzxLLW2jU1UdjsFKAhibA7Lk5tBKurRdaNDZM2RBD6Lp4tBkNEX3RsktBHtSYCDZwWUdaT1iGxYz1egSE",
  "key16": "eg5RNtjdoSL8EChjXFXAYzevfHG7tuVo8BXyWPaCXFiTwhTcfowHWc1nFeNpmX3JBc8akCPFttGU6w6LYkBjWtt",
  "key17": "4rfGHN6WYgBE81H5ahXTiX5ta2LZUJ3yg2N7A9At3mkEyKdjXFNXakCz4BmEXswNJevdde7W4GAKfPdrGkboL8Uo",
  "key18": "5XE5d7ks7EBnBEQn6qGxgQ7BBun1UrUgrPGVCVXbwnMup6sC9U7UKZscp2SobWRh4Weh1EH17NBuj2qy3XHXNGX3",
  "key19": "5FEmeNnjUiXGJ2ngVQ6U8uogQ8Anwz1vLGUmi4P9f4Qm7nGxntqGpaYL3squtPpCLdpMgLY7io2oY9vYtVgyCK3",
  "key20": "4jwEbUPSxYm6pg4z6UFfYYr4A58Y9HXeXi7Nr4YbZQmVUQLnsPwDev8x8oqRsrxnzHzUyjm5TCQAuH24FtJfLnRF",
  "key21": "2T8Gb6aov1NPQj1PpM6VYcgvXUhTE5okGtm9ws2Swh1VF4jPu1CMGWCfHQtkyE1M92P3c4gkbdBBkDF4oZvYTj1U",
  "key22": "8aZitcLWoj1DJWvTjxq5s8XM5Y1E4Ui2JpWsiiom9764FGAfAs9Ygc12TeT5StjKCbt6rDQL4kX4iP3YWtWvAfC",
  "key23": "mF8Nkxmt2dTyHMUqMiGNRptQGgnzEUaPmDoALksF2jGh6nwBLptMuk8rHv83Wwp1mWEeheNJqdANX4eddGR2jcD",
  "key24": "2qwhiZgcsC9sRxcLqieD1HgUoCh9gLQVdYqrSaHeqMEWGnamcqBLf7KzuKXDFRzkhnp2cYMZzamZtJCoyG9tYRwR",
  "key25": "42NQBCFyzeXKAK6H1987qTpJgMjRctnqRPmEsf58Q9adWZYk8XVRjMxv73rNL2ZZzYTcmujANNhhyybsJMtmz4NA",
  "key26": "4WtkFQWXXWGejqPDcfhwx7wigTi32fdARcR2qbzyQ87QM4H3BuoeY6vSDfjbouT7t8tnw5adAF9QNQZJuydyjBGV",
  "key27": "2A7HYh2Y7kYbAc82ks6VsYLVntgfPF2NBt17Z5srZruLnRwKehTi6B4DoaCMJoEPFf38oTwR7FV5NMdTE5h6aCe1",
  "key28": "3FuGcmVSKpYYZG8crCVA4phzNkzSV79Xm9cyudMUKr9i5Ha5K8pR8ovRowyDnhVCHVGdke86wjAUgcKBcsqJnMFN",
  "key29": "i3E73uUyVQ4nv1yM1SVbfvfwYASLAFSScw3TDGvr9QxYrj1EKXjznh4Aqq8AfjseyPPPRQ8whUdE2CWgYX1T42i",
  "key30": "4hiiSF75poido3XnKgE5JpHeL51yWn9JkBPVyhC7A8pJZgDTMqyN6PhpD46P2kCGXSoqn8At439D3rE2tUyhD9dK",
  "key31": "UgUcyF5yQGD9i8bdiMTurtYo3H8fzp1jMy4bmTRgYM2CYK7agJDKydWh9bBWk8KGLTw5EPLSQAAf8au3B4kMJ3A",
  "key32": "213Wam8HB8BZ8qHRKu6QYSJEVpmjyTB6geMCbBLRigUeUP7Vt2hM42uxWvBLPdcgk3Q8Q1Dm7xscKP4bX22P6xXy",
  "key33": "2rn9iGp5NNn1oA8zV5zryS1m5A84DdZwz3ZHGxc6QNtxq1ReJengrSyy8EA5YhHoRYtsA6D87Ld3brQGUGM2cmbP",
  "key34": "39sDh6kQzbBoLYc4fu2vYQHi2d45gEF4x8Q45Maxn2vtZRNCNBT8NEZdGmPQLcgjVNCK6jMADzctoxxiRdrGxk4g",
  "key35": "63UXWtuHN3sVgzvSDcMFfcPYrUTjW4ekMc2DAxgGFFc4GWrjDyiDswxDfMySYgNhZtKtKpwvG9CskXWuopiXB6yw",
  "key36": "2J5LGnip55gLMQYfThjNvUGSDaQNTfmdVfsZqj9yisKy4BtbyKpKtA31AChnjmsRiDo4diD1k1G4S9Q3Dby1qdYt",
  "key37": "3KmnzTa99bPXsNzhLqSGjjMcjEp8squpb6nFgPnNLrCsPjpEw4QfwMATothg53XbPfmanZe36T6oy17wtboDWW4J",
  "key38": "3NSTZFe7EANRwdw8LUBr7sz9xrjjXtgLavUkXZyCttYnZKzn6gAVp8XVv1YCPpYfeKe5vUraUw5AEpPiRPC8Nb5T",
  "key39": "3sgZvcVj4nMEooGyjMWPA7DF68r4KoDQYHMYgyL3hYqSBJYwoMB48MdvdvQMgNeQswpYWsdYttVEGMHufMDe465y",
  "key40": "5WJGkCJy69Rxpj6hziNKt1Dnndya5uKmP6zUk28QHo7hk9Fi4514RRTgWEbXLQChmuUhpcm2ykH1jQWpW9CX7UF8",
  "key41": "4XVD5CKxivUSJLno84sDbXVnr3DggCnqehcXrM4rgkxwYRdXtAA7MkKsjTt5r8Q6YV9ssRiv2D2Lq8MTBKFRoXwZ",
  "key42": "2sBzVpCNLN8YR5PEEXLPTfpeSbbeRxVW6FSjCcDs1Xw7wbWpqqFjQCfTu51Ge9fZoPoPycbyYgYHWivBS82zHoCA",
  "key43": "26oeCRX5KXNA7r1BbLSkBdgVqRcFKKJbNDd94ywJT3a1qcUmj9fm7eo8aCxMK8igK7sgQNRfhEfJrXC7xRw9VBQw"
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
