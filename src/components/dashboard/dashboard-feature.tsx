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
    "4oB8dvHGGGxt1NQ6VhvWbRoKmxnfgYPz36B9H1dqei9zf8r6opvSYymxj2AV8qVdukvP8JYtMW9Dg2d6PK5MjfPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X8Px9xE1oRKGQQAdvDNRperUNkuPy9pYzSnHRnja2iWD5viBxpTFkpwKfbeVJifaNQDeQYfodM6C9ksa6SE2Yav",
  "key1": "3u6dQkn4dyF6AuqguxfJcWPtFotJhaMAa29SWHTYtUhBfaroQbyCaMLJ4vWAvxpsYhK9C2T1QpbaLpB8dZGdLq2M",
  "key2": "HJjEb1KVVwwPZvVavtpwhXq5b8iiFQGtgJRZyGzERe9Vy14Gr6hgx3t2Kn7s2wqaP8XePo4zmu9SKBsPzJD6Sxf",
  "key3": "5Ahq6xvFoosSQck9rYq7e1YauRDZyuC9tXpWV8UfJB7MqkunutmHN68Ux9cZTYH2UCFnYnAjgAL7se1Xxp7nfx7A",
  "key4": "bAxeFCLK1ZbNV6xPKUcUpi1Q6fvwQa8aSqUedcAXQcrLH4pVfazBDyx1YyjcK1cNmADM3Dak565WXHfbQgF4bz9",
  "key5": "UnxKPHMRNNoGv3wWThwFxoDkzVGnBHkL1kNEHL5Nye5E9tye6a3UEtqstKA14EaZh6J1t37sCDHHUhiZ3C6ZZkm",
  "key6": "2Nczqj5dJGu8PLXADUNLx7rpeYmbeTqFfsaqjQhX388VRfbKa4TtLht4hJn7W3YP9LrnnDjKsdRRFyXPyhfTCVAW",
  "key7": "5S84CFeCiKF2gyWXWCGn5wSwjJriMgcibMxuTtw2r8R29menv1eGoFi5ZZeyW22zNzvzzyioLsgfUagdKSpd8YTT",
  "key8": "2QZA1ysGpXqguTxpbzbXhJD8XT1QDpg68JmhAX4kmZcrEorrnDty3vYt9u82GUBJxvvq5XycRPznciQm5C9FRepR",
  "key9": "4NaGzue1VwNhL2W6pC1Z6vsFvuwAVCj4Jk4TSKGFCgiMTMu6sw1FL37aWa16K3VDH5svhDgaE99ZMEcaVAmKSoXS",
  "key10": "4J9uKz7NuAao7CTWHfrSPJ1c9wBjSWB1Xan7Eg6vtwqJN8ftN1HhACfEzYX6bUFrL72nUCLsP5tiw4tvsZr1H3yd",
  "key11": "5rABjo8c9f5XVNkCva4tQtuwufWbLfJbKsUqjLzcuky61nXwzn8S9TcToFuEJ3t4KZHWaTtooPDg9adTRRbLxcEz",
  "key12": "5nqN5HxxKAPbLR5b5XbCCtSBFSZDthsz7ZWXJAiGbHmWYTe1LRjrdb6bTsCFk8GYTjovfTdLENjqDJgScxe5XemW",
  "key13": "34zgopiJwbDFFBDnrmRgKKseSuzV57AuDT6f6i7wpUYEuXPK4QT5quWJNzWHrtAaEzW5pQwP1fdRtcBqMPtLCkDV",
  "key14": "2AXPBiGriN38j4E9tyTNwWyVitTYgLb53YZhtZPUqxqQQkAm6jyKBoGKq3EUbaxNhBdPQafqk219JL4dBv5qqcxZ",
  "key15": "HXMLbRRogPXsjf75XdYdnuzQGrQQ19Yon7uEpLMPFFsZ3cwUTF1h7EespU2G7TRKH2VzWt6R8PwJQQ9GvnTt4yt",
  "key16": "CK6QUPRG28hQrqqnrxPt4PahbedUsu1v6QxKyHtoYfEkRmXoQn26BEmrxe2yTLbLaw2gv8LsJMbMfEFqatKThkZ",
  "key17": "3TXDdZA38qo4bKNYKB14kPpqE16tQkFzYqNnjX9RERF2o7xZi5cgZ9cmYQg5REngei99evLdySorJ8vomvDH4s1z",
  "key18": "dPDqAYa3zmXGBp1P9yscwVdcWQ2jwcFQ4fNLMt3mUUBUsg3Rm7yPGriHN1yMftXRPpWFNUjWrjdLQ9yh2GbrUHP",
  "key19": "3oAnuLxaDcsi64N3xsJFR8cLjgQ2iKeCny6ozHQmrCx4mhsPh6iPEZZbLXu9VN6o3c8BUYr1TKchV45yxpgjEQb7",
  "key20": "565cT9KQfeD7S74NhDvbzQ8rHR7j51D2jsHUspfRbW1hABh7jSVX6ohvrgqTmjeWvbEP3D4G4Pzy2ktKJ3B4eqXA",
  "key21": "4ctXop2ho8yQJRjYjhtQxqAGLdxnccFif8jqZiag6jmiyTMGZedRaeTxHKVgX4PqbjC2fpwBLYBhiwN1m4ELSq2E",
  "key22": "62Hf3k21B3JntppDnjYxE1ahhq3gHGaTpbtfrf8cQKH39S1VWRCUkiadz12cyXU5Byyvtfg2u4J4fCZKU9Gf8m8K",
  "key23": "4ihSXDBCtMKjEMoZxVtQXCgfNga4Fe3sd38E9x8pRFDwTQEfMqvzGwjyZcfK8ivp8jsBBWoagVzQdYnyVFyqAcod",
  "key24": "5XYzjgpbByUgmRjcBwg7jVk8gTreTJWthmTaRHpE3537yQikoY1E7MUoT3csvrAGC7eRDXsSdcaoqvszBj5Ayyc",
  "key25": "Ms9ATgwQQLSt1iQ9GHWzv5MTdL2XyycdXv5vRVRJduTxch2bre6bM9KBqWoKau5tou8i6eFYCjj6Dgow7RUVJax",
  "key26": "5cLYznjwcjDgMz6KTghKTRw6HUhHVEi9z9xfZm4mtYyCezMNqrLWPXtPctgr6ce33TPhKreHfr9rNWLcNyqzMU9K",
  "key27": "4co5N8nf7zET2Q1VtWzue5mK9WwBKJjm7t5pCSQ8tqsevy436XyS34eQtyQER9yfbr4d94CZJpDQ5Xa4gW1bZCSq",
  "key28": "2S5Y5HbhEEsFCVzknEKgfLkN7qjKXAdDdvezbRgK1qmqWTPc3cmVv3wNbxdXgtAD4aN3o1csmC9pohYwKpCkQUjF",
  "key29": "hgDtYJmgJBC7JHLJ7pzVQPXx2yDfMFRtKPKva1LdYdUsru6Z93N3vC3gFhiK3GaLLDRhCnATV2N5J8u8zBfu4wt",
  "key30": "ApgQQVm333AAcwe6P3T2R7LcxuoNjbCntfJEvjBShzKMUpMHcmMFszwVgRWeHGLysYfSLbhtHm9tRsu8vAU5yD2",
  "key31": "3v9MeY6UceDTY7MutKmbvYmsYPi74bCdKhC19BPpeCbAUCyXYrGKkwaeQud2bdGnjCKSY4yVNWzXHNXjw3dKNiX1",
  "key32": "5VgnnG9Jshfb4LDGcVnxfScu8rD6UezwT6uD6FhoJQa94vUp6nkGikosvTrBEfP65PUnEZXT142JLcg7RoLwMBFS",
  "key33": "68wZG8FLuTmvveBVKhqGify3j7B53hUeJQuDAMnBTD1J8RiHYVccNrNxGEnPqTn2Kydw61Qb9nmAz6RDHHNTY14",
  "key34": "5Ems3TrtEDzB5ACqNheiQV5yZm7VHNXBZJvBrb99uULj5BBVyK8QYPvwyk3qzXrJNiyXEffvRr26ALH5xhEyNARF",
  "key35": "4TNkzVbiw7zfg8qi6MrwcrwZ6bxrtkQzbwysT8yfGzXumDDkeEYsJNh6Wy68y6CW9Bd4BDVA8bxwxQcsMhMAm77k",
  "key36": "47R3ou8ysJKU3xJWGf3uLzfZXPbpMiJ4W2n4jsgrAR5jrsjyBKxxpeGxJSa1A6oDbWiVRDbjXVHp3FSnKRRMBYFJ",
  "key37": "3rjpmpfBC3CzrpePJHMgDG5WmdLvhfCioyXpWh3yi1BsfRHULXnUhc9rFUK3xovTRu4jdNi2e4TPKFwghBwF1z1X",
  "key38": "3VEd8fkeFR8njSjjNvxMvneS1zSdvNHMnvjyasDYLyt5DpgYfAa7USmKZaZwSpVa9nGX8rGKNZqG2i4c871ELfHR"
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
