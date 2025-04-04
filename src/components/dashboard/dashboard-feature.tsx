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
    "4DAF2c1de4L53Fk1QGY6PXE1N93izPx9JqHg4dRrfGjv3Be1itFsNRuZcRDsJComunq1Hk2raAxBt5X6tUxJRMoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FvhgN82ZQAvfsPBkKXaoh3vVyLfmQP2r3Ctm36vy8QRTVvzEawfosLBTikZyn2GTNUpwr5DhQS1G2tDQ6xy767i",
  "key1": "57yF4UPoyw2qP7cYjn5H6hHv4K7fB2BF6S9m5vuxbtJBArfQZrwoG3DJ4Ze3UWbqyie5SVUwVbH7kM9i7dbap7kf",
  "key2": "2pNJb8h16xyqDifkY7bzq4dJcWQZi8SB6zSvKdoUPm7TxwrUi8GVJaBMCiR9aqLxmadFgysUiCyWyHPVewkh9sA7",
  "key3": "G93yjmQ1JakLTzrseSNb5rkb8x6UqTGf4RZCYbERB52kNdhmWf8yfa7j35Hx5gaS7WksNvgnFAtkVrmmaSEo2AT",
  "key4": "46YdcVKZ7P1EuBF1bfyaxuF8hQDPS29wQdLbSHexFm58kM2py7VECZCyJ5KSEC8fwEsr3FNoCR4HuskSt9ykkzbB",
  "key5": "3A5r6DuRPrNiyNZwKD3Xg4y1kPRypcbD2M6vcGyZukAMr8JhHNjBgmkMjqjnsazgwtJSFwbsnAN2uWueg3sGJu69",
  "key6": "5CugY12wx6dA1oYk7p9irRccUaA2oyZTyrb3raeHH6qLcCirUauZddDDeexB9Yp3Z9b1r29WSvNPQcyNGJipLeHR",
  "key7": "ZQCKHAxftVGpjmh4HivKA2Sm1vhMpmqgKoVX35WWSxhxfGVc52Z34WKpn1aKPBgv2NQVbF2MwYidKFQXPC4sTV1",
  "key8": "2NGsxhvs5ne8AyiH3GPHrSAAH6VRdgpW34qtmrRkWTuHTppjtvu6BEAwyrceW7MjmPT8ngGXAhRc6gUaNCBZ51Ra",
  "key9": "4VHc2xXsQEqMki5tnRKdLkXuX82oqdZx4W6coawdtZkCnKiiPJDaydU7Qz4nzejnzgD7akPGgwUmgQ8vT53V72Fo",
  "key10": "5SHhFiFaH2uBwWNLN6tnwnA5c1GmM1BA7YJhdFQ1Q81mZhMw7unGNKyR7tSktmJ5NAibz3Gi6dXB2EceNCJA7TQB",
  "key11": "5MW4WakYFmhbrntUNwhWFg49mLpaErsyW9hkN1NwopGLKPfFtKdzDQiS1VCbcZ5PXEVYDp3TsQnM9NKPrQKjhFo1",
  "key12": "51Czwiy9zEMyqZa8CdK6Q97KkdKLQNL3aixJVdf6eztJAJHYkwdRp2ewT1QcJqfbvZf3jhw9bwpwnNx54mnHqmrC",
  "key13": "4n3znNQDkJK5eZKCDPXWqQfYGznR9d3bpfnjxQ7AJ1n6ne4eBmSuvBNe8LAo8ZdXvrdL8ZErah8Pe6ZmFZbtq6qh",
  "key14": "2L35ywdCNZEs64c7sLE4CtYhqkzinDDG33dAys2qhDmCSdqGnmDb39kbk2fWdCHF598gckDfPkvFbD4pySbPKFKD",
  "key15": "CBBRQTBzA2nwnWmzVta1rY2r7HPBXhciudM2YmsirEiGz8mGCxRLr8abcYWUhsDgRtNfxtNYtxW7cX23baNHnuy",
  "key16": "44t8SnpJtYP3yPHLHD6dBFs6wC4DW2aygYpVFv26zrM68vxdgeSErqD1MvyuFj5d8MiLZoJFyNWHRgDzeHvw9Zgj",
  "key17": "5sLT7aRNcWguQxqAkuBnMbR7u6iWP74gU52YM9KXT7a2x3Kg9B8byYXykvMqszTzfKdMXn7R8c2mfzRuQvDGqaAi",
  "key18": "4AYMfJ6eco8zkpURujBsnZPeBaXYDNTcyACqNJBKMjKzSmtE6edALBtGrJHwgWyAT2hLH4mX6QehPQRLP4QQFkZe",
  "key19": "49YWxwgeJuVimenUAfeqfnKWqmGrAbVLMr4z2QUfrbpypFtJ4Jgg4dsLjUagZW7hZUQ2nynn1f84zCLhw2Rn6CYw",
  "key20": "qkxPiJV8rtXysJzkqnZM39yXnmhEbkvqhWSh6ZfcCL4gLPnsyCo1s73MWDWxR7BHvYz8ViU1JeABJGPWC1Rkt5J",
  "key21": "2z3GhHo2M9KojAPQkPoVwzknqP4DkpmGzKfqfsMzuaQa1Ywcrffz4BciSFRchqTtA39NfTyv1neV5cJg5Jt6jZcw",
  "key22": "2S21FXgHJYNhxTA6RJ6e8fxF3RLBHfeCQ2kgWk63MSrFoFYQQdW8ySngbcZRB5gopz6f2HudVeiTzcQyii7PGXUz",
  "key23": "5vPdvjL9bh8gHtRo71uxnqASX4SRt8yGcLBoR43NsDNpybQ8zk9fGRYewr89BsCgv57fu1b9yDPWN8ycjxJCLGj9",
  "key24": "iMJitR41TVTyt4MTZuXwUgvVt3qLEfD5LC1e1BhuZgoQEnXZeLDBScRSavCqAPEs6b7HCcz69DbyFfmKTDExoGV",
  "key25": "CUXh9KrBKELanoexX9gV8cjXvoAVg5E7nnkMRhhmxYtwLEJBGzUDhPc8xkWTy5HWGRWffMghpgoee59rqPt4EVx",
  "key26": "3Yg4YYqi9KuWZUi9z19DwFoDhGbz4XSjMq3arfqU62csKxvogtL9m4eka5o7TtGXdkyTLia3RCopHTs1xRGw3rFB",
  "key27": "286yiUquP1GAC4pzScYengJwEKm4burdNxc41nMYwHydRpBVG8rKGWDTFC8pAVHQAUuaWdWmdD9VYVu47q56rEPn",
  "key28": "FYXmpTo1Zk4g4kg71RArZwqpKQriubSnnQbpErx568Z2YpDxwSVFxpBCuY4ywFDXxHo4KCXX2Ld4s7yNhQ2GPmv",
  "key29": "NxiE3ZYaoh9okxhPzgftyqgbbo1QFD99HkstY3EjY7PTnFFEimU8SKob1SPYr2d2bn8Ljkgiaxrr7d1TWmeQgPQ",
  "key30": "4AV8TSQFpN4g715uFhcx4TPqeTDKCKjWEvzreVNK8shjMiMuUkDhY9hCrbog8zTDGxi76tMCkaZ8tNALfLCTtyAH",
  "key31": "3wymYV6wy7pw5XxWp6kF4Ktab58ouUvc8xVjwGmEK7V1RS24icK6FN8o6rtKNF1o5Ede6jsM8TA9umYvjksKtgHN",
  "key32": "3UXhP6ADm747xG53p6odD9PDzJbLuLF96fEV23bK4yhpRnyaWhrSjWGMPt6poCFsYjibK4Gt9q5Dk4sVyrUKq8vV",
  "key33": "3x9XLRgi9CTwBoCVoXzeFDURThCiBRBvf1783cYkX4rjiuFT6Z4qjD7AXUL5MGVVrrQwYPq8T1P9B3yBDKKtLR5A",
  "key34": "3vKej8F2c62nnJq3SUSZwhtkkKCAep64nDfyfQtZKAMisCXqi17Z1viPkbwqyVuEAFH9L95557JdHcW7LSt7B62p",
  "key35": "62ALFzi72bxJJFa4Tx5nqEx8AwJLN9iomHF4WEZULF7NvMoQjam3WjGACjFDtCTWUvkF3CqRJaPdbuEgzN46FiEz",
  "key36": "3GbrvURRJ1PtvNoBFmgmz2b3MMsMej6TyZPk86f7q48RBppLEuEqN8b1SsUrHeETgeTE5MGqjdicf4QbZ3yc8p3m",
  "key37": "4RXBr4dJrimNiJ68aDpRuXPFMQxD56e3TsumKPdHCfbRGxQH3sWgFKtuL6NUrhK4pSK35qoMmkYGhYVkjNH4ymB1",
  "key38": "5YGvVtwutBzRUSScDd8LJfVqVpWEN9ahB3sBSGbS3UcU1dcNLXreddrfgKfdzsuuEJidZ3RWCf1N2wLCUa1SWAt",
  "key39": "srZT5yCqBGLNcjQR9gCTictCe9xHqs5mKsz88Zw19T5351yhv6HnpfrVt8a2X6Ey2Nq58cRQzbHHYU3Vmj4CcZH"
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
