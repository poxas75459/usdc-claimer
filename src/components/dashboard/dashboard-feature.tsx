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
    "55yb5AAmiJ657FSPwNhx4zpjFAYkPmCteuu1ixtpUgEjjuzkbmyKryWY6ccdRArTwr7irACDd7LqrevTgUsKQSPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ijLx7ghAoR424AgcPBKTGJ9pnVBKWDNE9Mmt6dtYBpyAMHZ6u319MPCXbzqRZJ55CNcmJxQPfiN4HCEW6XDqqfP",
  "key1": "54pEYZDAic8M7f5iPwKk2c9tKtGhrkGDo3VPGc98dCoqfgzSEhe8Bt7rsJYaiCawgT5dnU4rjg81VSfk1QWCwqm3",
  "key2": "jJ3j9BaAiwv94twpFn6A8DUjeXTK4rHJu39wwnzHuLVoAFyknKbgfkLzwxGx5eMcotpkfSwgzknCpuHnzYrsTV8",
  "key3": "5JomVfYMC5pK5JYTyoxXddnt3Yve9Rc1WR5r2PfLdxo68tfhAcCMkzMBjdewtEQ9MrM1Av9W5Cnoa15Fb8bJgFdC",
  "key4": "ttT9P4U53z8bLzPWaLTVDiAVtqwj2WneAZ5aEwERNKQa4oXtQgh7KeWHt7cCmXrfWchbG9NpLasddUd7VcHNoqu",
  "key5": "5MzuHQxqxAReYVtEWGVuHjfi5KiLBcw5pakPcJhyeAdha3cBUWqDZ3QYkgoHiTxaVnjZUyHom5kG98hbBjUW9XgG",
  "key6": "2WqbpLEHCmFgCc7g6sCkMqbbt1vxtutsBdaJYX1njXw2S7CV7TxTmgRcRfD4VM1Lf4gTuZXPg8TXdA5uHHNgLqkk",
  "key7": "4mn1M8Wo5fAZKpvdhttLDpbPS9ysxav2AfuWUhDWgeQ98nn1aLnYRbUTp6gq19M8GrPk8DzGThAnZUAEmfsugeFL",
  "key8": "619hJgyZdtBwq2yv59F9kFDoasAdBtbJLYW5rKayxNzaN9a9QBWg5coggsqMEtjTqSmhFjfNtCMLgPFrdchEtsUg",
  "key9": "56Xd2E4gCeQqoYU8P5nx548ueeqNKT5msgzgYDrYmb4JAVy83Yj5dLNMd5VEqP9LqrFFS1CVhc43KUALn8F9pByh",
  "key10": "2owataoJBsE1mkzQzT6Be1adfaPvcopy85RkymkwGf8NMgh15ZgMXL8BB3uKgduN6mUUrZJNcTxaMRhtqUp1dJuT",
  "key11": "kmLeo2fsPxxvJuzNFRznBDSAWCVrNnqNH61L1m9NzQoqkpXSmfj3xiToQ3ZVb6V8u6CdhHUwEtd2rNsakHwKfQ4",
  "key12": "5wJqiesWabSZySREc5RD8KsKf4cd4Gs3YJbEsVvDPLj87a1K4YKMxhEuC5Ydnz2n9XMW2Y5LjTGvPMGvwAb97Hjd",
  "key13": "3boDYF2XQrbwTsUD5DcVMyp5MZeTnTyYokuoUz2hxxLJvsb74jtHChkGAAaQDLuq3gBaHGMcPoteSPwKgUz9BM6u",
  "key14": "3zFksZHKvt2WpjmbghinXuQ6i5seYECGwBwfB7y8LBvf7hw1CBpN5rZSryPKh1QSKc16Biyo8DgeH5NcwUksFe4B",
  "key15": "2CE7RuoeYBQLhGTy1CnU4YSAzmTQgkF7dwDBAhnSmb71Ls5a2mBuoeHbWzrUH52TjP17cK8hnY75PNUNzQPbRWYn",
  "key16": "25CTkGtz1b7QgEycaWKoWFvcSqjnSRjFfwiY6zF4b5Tjgg1X7eNNPWgb71DrjQdZaMVx3LsPuJinyskZM4k5aWkL",
  "key17": "3YZtDb4LzbHLXTm7UwsCPnTPjZS8YBZPHpoxFETm6d158Gx1Kvgxo5carBFNDunmZwoz25UDAkgesU7gMxtY8yb6",
  "key18": "4G7PTLVnyPmW2WLw1ddTjgqKoFy6BhmVYYRkF8avPBAJ3f1jHCPQF97BRZrbd9LYanQEBAmiJwTWDfVqVS2LX5Ym",
  "key19": "4esN3FmmfZywmL6yMXrYWVfEMEnjficjFkjoxUQzzKM1FTEE36yqABQsumyLNoDnbbsu1QEApqVFdeqFDwfe5y2Y",
  "key20": "4XM9yK7kMy7isiBZygWGmXZxaJFpahjehZzBX63a8QD9e5NJDt7V7DfqWwkV4Hpf9TKSntPo9h1EtipnQtVFbcj7",
  "key21": "4N8XgDJVXEpsCptgLxkbEjpMr17ABoMNpRFvUw9F7pAgEFceUd9CnREyTRK8qvLNPDyK8qf9zNbBc9PDeJuTJqMA",
  "key22": "EMpGJSeoAhzQWAWV6kwqSevrNwsY8MFBDuNoijZnCJ2hAfqEX1qj1my9dAsvd4bgtidS4ZFSYbX8L9EH4VELZQN",
  "key23": "43gu3UVTpUu7QF63XDazFgPXz5QEm8Vx6HcdNLg7PBE4H7GbAdCXMcKxcagd3MV7wdoFL7fQi2toh5TNYWT9gDT1",
  "key24": "4ZhTva1dZqjPi1gCPYi1n8dZKa7Chddm6ZyiDPD6o9tiDV4MNX49ifjVVCmUoi2pbuHKxzhQZDANfzcZ9rinBMxb",
  "key25": "9QARSC5d7nVht5Jr4pdeWmVs4GbqJm94Ak4Gjo7as556BgTM94wXCGeaSVJfoivmdaqE9vj2Z4MFCnpX6KAKagB",
  "key26": "5fMyBmP6jEsv7rUE1q5J7g4MofT9qDjDxMbrza7zw2XnaSKpfRbqUny8Csm8MdtsedDvHTSGe2Kjch7ZsUmSmXYw",
  "key27": "124rNj9ysY76jfJCG35GNiSfRHb9UAKU7iWf6ARAaGH41hEmaqEC6jf9v993jRDrNv3TNPvhkg4mFFMB5cvq47yp",
  "key28": "ykQhQYtq3tL1qwDvDxc19hMndK6ftGJmE98hrSfxy1qvEJycu9WJj1BF63u1J1VpsxSkW842d8KqagschdgeGGg",
  "key29": "3nUh8zgsH72zPmMUZTtruwqzXvxyTfK1C2JWCes3ByUSHuzSMN4HyKWhkb1T4M5kYNGrpAiGVfkj1BT4FJLB3gBZ",
  "key30": "5ct7Fgt3rfCRvLA7PWo7Wpfzo8VRy4rmitoDsDNwLbfmxbVptstmojo5ho2pckH4JugSGkwbn4Ga2yCbzJHxRAGs",
  "key31": "3kZBVZeZBFYSHpa6m4M1i5AAEjc1m1NFRrhrT7mnUKKtFyYVtbLQdy6vx4PZ8BN84QPoBYXp5bdc6xW8YjfKshnh",
  "key32": "2waTsuMnXsD1GEvoRWrUpoBC3sPUYP3KLr8uiy1kSMWiNVGTuoN26WEgXC6N77WS9ZUcPHYgWcQeEiT6fMo4nbmo",
  "key33": "3t2tsabN27aRoxScH1SQzmWzkNeYVUzuGsPWyCkN9Y8j39w6ZWpZ98BnEXqu5DXbhTvjm59cj9gL9LDjuDRgpeym"
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
