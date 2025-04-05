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
    "2qrSwQZU5Q2p79VVtURgJ47nXsYQDPAp2NfxsAVcBhQyNHLjQagqiee7Ht7g7TgQwdu3crBV1rdyAQtNjFxGYjey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLTCGj4pRz3pUmzMSLih2qfBtKNfNULiwC8MFzMAauyAo5BFG7hVusMCAHVMsoZUHCnPetjnJZaqVgfPY5GFnsK",
  "key1": "nB3piMJiuAM7pXgCNvmabPD3Brp7bRQNwK6deyYfHeVJGekyrJnK1RiqPxbqLpcSCDErxAaKqyWtemY64zbxH98",
  "key2": "2L2kvqRFWq9Cyn9oprma3duy1ou62QZb4ekwUFtuzU6CeWXCbuTydqUqxtgtRRCrASGFtAAWjSAp4ArusLGZ9eQj",
  "key3": "2HrKUzRQ7ugNuTnqEKYKkikChdHAMvuycnychNuD8FTHi66Pb5U6oRUuT5H8YL6hwARPCN7uN7Ubx6nxVo5oPsGr",
  "key4": "23Lkh9xKZrHDmvADDUNRkWZQ18CGaMYoJMThrJ73PwAkaXNTVL9cC18tAqGqSb1f9KHM8VdzUDk3ZpkSf9iGzRqQ",
  "key5": "4u78LfZ8Mb685xrHkPSePsH7EjtDeHZmTht4ixWQRGYNisMnbf472gqU1SAiz9BNhZB8ZEcnsDefBA5Mz92oVfcj",
  "key6": "XYeMV9CsZQ6ixG9vAkXWbQqSC2kbmwNC78ktWD2osHEAGVLu9vaP5qhqVGUu5CHqtdTse64yvzi31RsnXsq9T5e",
  "key7": "3NZqRbX2BTsCB5E64RLwCR2ekkFWNx3fPHQw4uuetWd8FnwXqCTiMpEt3dEkQStUbnDjrrEqaALTfzVW8ZWF7yEp",
  "key8": "3ZvGqD5X1KnuV9aguguXHj2QJSHKYgVchzXRiW2iQEwGxqxT6nAme8PapmyVzRCeNaD22gA33gwnbFdVnW91XCEs",
  "key9": "4LXmvT8zY9ZUi1Mi8TjacYUpJkCaicNUx9TEMtfvKyT8K2zVjCnMuNXN3VqBvMXPUASRbmHGdjn6rMfgbhT3ciLk",
  "key10": "PEeDR93G8zkjAPiXwULKVoCvjBSLHsbtNYDVPD9KPaReUFoDJJVja6YqaYMCtziEuV43RruFt55yj3h136hnn4u",
  "key11": "x1nKUQDc6jzU6phbqPowxkFGJSwd49bwDfMpvKyfNdpyv9Yk9rViiimtpZ8k3yWVWoHt66C9HuirXfUBndZ4LZv",
  "key12": "3KpvzZRe1xiWGNQpeRLEbHPR6ooBwpZYbUBJuCJdf5BSCdmd8TeJZvDgZ5m3EpoHdPhjtp7u2PEhnCZY15JFr7Ds",
  "key13": "5xn8VqGTouESS8zAa9dv6A4MXFfHUcES36Le5zgZcGgioJ87mc8SoXQiTuX7Bub4iQEjGYMbFqY9WvGHQ8dENnZj",
  "key14": "2SB2UrDf7mwsGocD1jbRABj183pmXJXdcPgL7y6riC5r831UEHd3RsDg1adsyFkfbxFWUXtxhTwbxmr6zQYGLaSQ",
  "key15": "4X2UZZ212BDBNwZ9E3prpfsdqDNTTb825g14PP7QDY87ZuCbhF5nueNYNNTo1cRGxJvHp3TkCEypoK7fe8H2oqR7",
  "key16": "4JfmXnaijExG3aFCkF5mpvzW78E1R14KxV3ZiV5ZSqcjw25kXb4AZCvTXiHrc4qxCZ1M3L4P55Sy2SEh9dVMycyz",
  "key17": "4gNkcrM8mnqQcgDzRj7mcVxfDj2FMshpX5HUFS7W2G3LxKLRHxo3v6sN3ZG68DRxoysnNaHryvUuXdh8qaEgYtqW",
  "key18": "4kSSRgPZvFxfxHaLZs7tufZKb1tEstS3TVUWfLDsVhpY5NWTKWrZMH3ZvcvmWNphtP28v6oF9V11s1wh6pcGUtT8",
  "key19": "2swSAqCUm1F6dZYwgMPDXWHkBcZQhWHrYZvC5ySwi5anrj3cEUCWGc8vxtgn8DwGKTx6VmnuYeQY2eLNfaDDBexc",
  "key20": "2vEyiV2uamybgK4cwvFMZtC2pr2oDgXFvapNUg99qBN8Ma2aEhs8NpmkEGqigVEe1zZWFzDyBHVQE4sADHgZCX2H",
  "key21": "4bzeYv3Hdg7YQ5Ld5Wza4qf4CSiNjCtbGnXWur8SN9UonwjqXetukNicdynx7qDcgDcf5LVHcgZBBh81eFpVmHmo",
  "key22": "4DnpYeiNNu4gfvarvEA9gQehMgxNX8UMHtB4h7dyKnFhaRwhLkFjckvfshtbM8cTXSJRqhZDWb7xnEb2kKT3NMbc",
  "key23": "5XzCcd4K9jm3THWunHTudbrjecsZSRMk6xZkjLE3C1sqmVSWYrgSCAJc4TKHV9Mx7Jh3rApmYp4uxCTTYaJm6ngu",
  "key24": "5THsYULs47opBz2hX5P8Ap7bYf8UGQwAy274moZN53CFJhQ7aNTyGWZRtQWsnWLK6dh45EqU7YcfkRJBo8qGTi3t",
  "key25": "45kVU5zNS42GWcjMkbepmJSNks6K7YbdMkWMU65Jo9zzzTKGUg4EL5QQwZQ7zRiCVwou19MPL32nh9XiJZSQ3p9Q",
  "key26": "3uYMdLfdT4KVnoboZ4ZMTYbynm8bDciqpA4xgxR7UyZHqbUL2FGA4N8tWKbcZwb8BCoEZSDt4UCC2n794ttdNZd6",
  "key27": "4tArQNEHSjHpZBSfHfAmBA9b9QovBeiq2hqeugvAqxT4Z3HGihrRNF3NUkoqBnydU7jq6qRFZWqJUinSBmm3uJCw",
  "key28": "3XKXJ5bCHy4UMLp7VYG8DcxHZHpRmZbhd14XzzdF6HeLTGkCHD6uu5gnjZvCpfB5MZabCqagGknJoyxrVYJxoFB3",
  "key29": "5kFB5PGTAjQmVM9Ecqw2aB2taS9gvqwXajDdQr6KEtAGjFwHr7kF3mHagVBoe4MGR9MfHNjKifjt1e9E74NavCbg",
  "key30": "4QubWH5rgtA7THV9JDoEErTWPR9ZNcE5afyNbGd6oybu9PAmzoxdArB8tnLwPy8kB1En9MR1g7pJc6RQdfodJ4bi",
  "key31": "4biNB2zC2QfLsWG2GRxgh9GUPhfbtRiYiAUn9MBe1179HpJm6PZoRRgCJDr3WKCDw9FnkVifnraSzYgbdZ7QqLUz",
  "key32": "2KFT4gzHyWb661Fm4CzjBeAFZ375PRtBZQJ9DPSRno84Uw4K2QCmF2Rxe8SsRoLteU2hE88Tk1irhJXod89J7Xpf",
  "key33": "2nFTk2UPGGie8fbwZjBtTrrsfnRHYcSa8Y4XjX6CPbiPBbZ96BBFZ7DLfECTsY95sYTYK7t4vMsSTAhLYmq8E4As",
  "key34": "591by4GCknSZs6TDdQ7zECQD8wJjJ2rBAvp9de8Lk6UsBnsYeSzAGCGwjGBVrKvoB9hbepqt83QrvXdH9esoBnBM",
  "key35": "3d5ehVAnJ9EQVXNYz3Fd2LBU4GTqG8NTN5ErmfZ7iuLA64sD4ZuB8yx8SUxPzg7yQUedJJfrcYBERafDJyQkXTmi",
  "key36": "45ZztKij7S6KrLARfk4gKu7HDmi8vq5YvFF72uRG3sk2BKrgg3J4uqBnyDApnnNw5hPTgBVnQ8b4o5Nw5B5CPURG",
  "key37": "4KVN184K3nSf3zJE7pf1LV3C8onMi4XiT5VgKD7HgSahXtNvD7ijqzEBkUfxnqtpsKe9vXQcps8jB7gyKmvEYtuL",
  "key38": "2eMakEUVcVQFYykDmjFy6wwLEres9qKfh8PnJ3ZHAb4ac8wGHxBbuAQiPikzQRJqaemC3CU23zuSgPgWTq4HqWcN",
  "key39": "62RmqWkVsRAcv7kKChmc1A55nNv6g7mugEdQQLMQAtQgy27zZZ8GeV1HgLgnLTWHgU5jnr3E57AWMs8XoRpq7i4x",
  "key40": "7AtB9pqJ1TncGGqGtZBVx63k6YF5bZKYy8xvwfXUD3frK81YcyMjJzBy5apmPRPWnsPzxB4seRsJXATZaSZbkPn",
  "key41": "2fkYSw12xxN46b5dx6tRFMdQwLuN2sXwbW4vPiNiR79X53NeiKY2ts79p9ZUSQEuxphURxsNT4AkZPXQtBabvxXX",
  "key42": "45BKJtztTPvm1D8h5gwu6FJb1tRVgLZFuaQ7B463BUpJRzze2fNxuPyFKZhohg2u4kKue3pFPrcpHkrM9mohgNg",
  "key43": "33E3MtkFzBqPC4CitC3D21onXQZ95GP5JAnYLMSoAbD6NfAXME8WMePSWaJDpF89it9w4JWFZXW9QYRovsbFoFJB",
  "key44": "3UxBY63CapUX6WyT8dMCBxgupg5J97Q1ohyYw1F4coR6D7ciyhTZqbu4M8MJ148nheQ2yr8P1YJ5Pyzh41fcjSsQ",
  "key45": "3tzWMeivSn1kGhrHKA3wfZq34cu2KQUEve96tW9FCujde4StLtxv2ZL7tDJHx6yV8UJV4LQBNYiEtCTj3TYSKWrM",
  "key46": "54Ta9EbLk66ocSjxJ56iUjCQ1UXNZsEEAAMD7PXrjgSou1cJ7ogXFWnrfi6z3TDw6cEkqgGBBk6uQS67xdWF7axy"
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
