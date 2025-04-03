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
    "EZ9zebo2nHCHhocSNYVpm2jb9g2unajdYmzDhjBY3J4eqQLb8bRbSBsWUsVEDh9QCUce6W2fxVsqysTGjep4Tos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25TsfAxf2uVF41H7emb3ZzXeVcVzK9aCW89kh9rExQG7aD8sMM1rtMrNKZPnAY1hVuVYJYopW1przbTnssPxqBTH",
  "key1": "4v3YmJgN9nibThgRfvTPY3yfBkkrvZEJHnpSEtQ4BUUJikPUrFyShWB8goaefnEuqnsqH1ntM5GvbQgZYu3AoYKQ",
  "key2": "3rAGo3hcFbkM4NdByNvnK7uceKAa7ed1BpV9EdwToQ1ypi5R1rR8WzvpuX8Dp88KJQB5KZB31NYU32cwMRizqtr5",
  "key3": "BmC9CF5XoopH44cwkHw3FfvBDwVVcduFMZLZXEShNKKgTnzJjyD4T7Y2YH5w4uPQaMfPzses8NVTBYfWEVqC8P8",
  "key4": "4DKjEhiJhUpJWDh6T5GSoqzoZJCgjrLQCfRM8SA9J4HiQ5Y8PUhnSN7X1BAW1rMcYnD9A4ZVw4thaAQGaUapbije",
  "key5": "v1JurxYz6wNt8XR3a4XH2U2D3wXAfBTYYe6yaKRjBz1BNPsi2Y2rvbJkLKdxnkzEqM7HGjyFkotZscMmLyL7Dh8",
  "key6": "2jUJw1WQVy8Vz4bysmuESCMhkP5wkyomY4fUr9mbaNeeS9b7bHsTXxw2idgob1JXstcunqvCZxwDDrpipbQHzhgL",
  "key7": "37Z6JFewsBVhh9xyhfiVEpdcvLoZvktXNgeMxGYWiWWVRuPJHzdeVHYNTPHD7qgHsjYABDWpmkoKwMd9Bdyxocon",
  "key8": "3ZRQUWsWVSeFKJrUBjb37DCa9QyARM5Hh71yuoBxC3d7Hrj7FnXqZt5MLZ7muiAzz4zizQvkbmWfeFnzjGMsty8",
  "key9": "4NaAJz1cRivVfXSghTN2H9vFxhd5sm5Bj3zFttid4aRwKaCQcpLJ3oxn3a5sj5GuQuhMYiJkAowkTekoWkFXkKJA",
  "key10": "2WrWj4jkMhSNsEQpXftSU3NJcgxbXRaubmM88ePfL1XHWmyARKtobHjqY4X8eVcpn9GUhDBvri7QnsNuLjwcMtGB",
  "key11": "4f1wuXvCByPYCvw7t2Se3XZzGjexQ3gvWYybzknSCsH1WWMTLAn7qxCas32v3n97KrPK4FyjeGrwcLdu8NdY2xjz",
  "key12": "2TvgwCV6DMek5cWRP7261ANsBBnW48jHgP77Kjw9UeTeyDtadbrYhh7ezvCUzJdPoQ7cigXEPY1HY9yqXzjjMmdo",
  "key13": "49RgNggnepWLyuhXQchdaXPnDQi4V3tPgwXdBC1KW1xpgxGpM6UooxcwwVZAa8nBnkVY84CtE8AwEnfhEnXLqoVx",
  "key14": "4pSUNJyNWtVTjk7na9192dPfaohAe5XhEzU8g4tEM7VkaHDN2nqka9FcYk3rYE8MMxvKB6HzWyq5NPjuEQ888WLQ",
  "key15": "27mWwZ13XY3vXnJ53JMxrrZVnHZpVLnuwaadm1bimJaAFrZvZcDmHXWTt8CR6f3RDwXKNVqiqwjone16xeEb8Vhm",
  "key16": "3aTvsm9thzPtXiumxYaccyyrRTCLgU83Lmgh8fdX6UnSXtnTyTa3MSpYyGaXxfhjtmMRM9EgSQqwA3e9iZAzgFpS",
  "key17": "5ebuF4u7a3GzpbNWYDm52JuBdm46vrL5qBLW7e7S1APBPwksvBNgW33qvsGzdv3wdxb9uiegVM7kvsXJiMEavxNj",
  "key18": "5ZzXmbuufyKE5nhDM93G5AZX3A6gENRZt2XAzxA19DMidSRS8goemkGDUQdcxEQKXWhXiKwhmnWseaT1CSBo4Bdw",
  "key19": "dVA7APamyNm61YYxrAhqHSfzhy4m2FYPfhC5hcrhTjkNfur5KjiG5Hhgj4dsSSou7GWEFN16XHAzbLStdeCbQD7",
  "key20": "Lw2ZGhTxhicUcHQGn5dcAtRHgL1LvWWbhrdpbXNtm9g6H8uputgbuhMFMifP4q9ezMt8MQfNKuBaQb5fzuRWeNw",
  "key21": "36c9NoaUBKkqcMLPKN8xE4mm4fHPu87EYJTjX5HjXaPc3fdN7fgwYx47iatdC2fWfmVJ1JtoyaZeP76bcvoyp4Z3",
  "key22": "38rz17vwbYUnzW7dgADYHV5p8GLJrwwEMHegdpQRAAzMbEgwP784o6JwqhdXU5HruXnHJeiFuMFaG2No9PvXA9oM",
  "key23": "GCdjh5UDnLivSm5xBKmaBvbjgE87cFdNa9Chscmfumx3qWQ4ZRPBivppEY4Kfd4WnJizrt4AjPQcymUn81aWGu9",
  "key24": "LfnDhQ4kiJvtu4nGxCz4jQzccHmLZ4iGKdgSwu62uYodNp5ho3JJAxpCKjkbQNQxBoL5xzTz5FryGxd1VnUC3FC",
  "key25": "596YmEVS97AbTBk9d5JBpnDkgkTqDFso95KXaUJ58758PTmS2XXnCSfgVevCUwyLWsCPkS1E7AcQbXZyzhoPVBRk",
  "key26": "3U1rxWPoevUZZXxLc9BA8G3AFrUUuJmhHZLJHuawa21ZQGZz35cfbwBsghe2gNGAxtSg8r9CaBKoJZDgXsgf514a",
  "key27": "FRgXxyENrJiLNk74HbMKXXwZ3nsC823MZWuEFnzjL6gpSaCYKPUCnCVcJrmgqPLSUpxhdEuagTEoeUNuLk8PFp3",
  "key28": "QBvGfhTL5sWqLutYjzPBQ7EjPq7vdNgtLsvt6wcNcofimUDuibW7uWbWpAEFfoz6fPXtsQHkpwFiDXUXZh5ssGv",
  "key29": "2d5ygsMWPpqmAF1XAZLoLZ473qfpiXrRoY1h8FfgH1t4jnM3CCqXjEmQjHjN4Zvrj6RpzTKQUzhfyGp8DrbFMTse",
  "key30": "Phd7QzmtdvRKHdKKvQx8cLXoAt72RoSCLXcZvQ3oRWUoMSkS2SGRRGNgjgA4ykN1A7EoY7UjD36fTDYFUk8L5eL",
  "key31": "5QyU9YyBRNirJqsBJ577VMPrpcR5WQYxFLBB4atXeZF8ZiyQBQgMNtxSXaK4K5aWcWBVm3KJauoZ32UaRQZoEia"
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
