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
    "1wa6YyLGDSkvWYgJ998CsAFsqLogjQc2dEbuJyMMEfmFdLoenRu3x5VvNi5tGr9QSudLEWcte6pqwAUrYDCdk8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BT22bvK77atax794rtGFYhtWbqQU47ur2kQJTwAVkyM9R3JWm2D7RAse1b2NddAXhXF3U3NhES5L5CjLkznG4KA",
  "key1": "2vpHA4hNzqe7AKnEiC8hmE3cvXB2A2MWoATKXW8pLr3pvkstqwSuiocRT6i13cnEpQCq8iNkvToZeVPfemhc3bdX",
  "key2": "4oeC2uG7YgJpLGjvFHY61QTnqcD1kEhyurLd7hBRUfrpu4TPEpAYahLEHRUzHVYSvErjS7QqHMRgzUUBpPRuMGvL",
  "key3": "2uSWCisgbt54EaG8EhiiNRpibRcYV79GgQswLiuBDhWBdZxvimXCjEcJa5joyTzXMsL5hdQkYvAUyQYbaCGAznSy",
  "key4": "3qsyjc99e6zx9mmsy1CWb9AF5EwWnxiJDeUuo9Weo4CzY8kBFsLCe5Jeb7EJwaZr83RuGSa6KttcmkKrbZYHR91E",
  "key5": "2t381J7EjfjW6CAipFabvyeWrVFDSBnhFpTaNid1ggHaKRLm6Mk8sXfXwwk1jNagFF18WWLXV1uytV7xMADv1BBG",
  "key6": "3rHJTorZyPzK9EyiBR2yCeuYR8MtrB7p18EE4VCUZprcrnvgqEi8QcxKWbzC7zoXdzAg2rkbbpzMDPcDLnYLVNFg",
  "key7": "zJwXp9zcrqdV6PMZhgUgHWwumZfwjhZwptWAc9CW9aMr8rw5KJiEGo46XjzwyPDo31WCBo1dzwLSqLWYco3Dnw6",
  "key8": "2Jk3WKW1ki4jsaRDLShiyzen2V6ApAoifSSRcBMoWJ3MoZVTDbxpYaH7qJC8WVkjvtvoRgzUCfaXPf5eUoNM26jh",
  "key9": "45dQVhP3VwiXcKTw6ue2c6Q5BgT57NeL2zoeLQp4MN1tLkD2XvL9SFGfQJNGbLcVytvTiVACP3oB1vvQea38BePS",
  "key10": "zQkGxyQWcCJJdREmVEjaZEcNVq1gz7mQMySzg38xaUAQUYfWfo4Fbs376ZWatdaiMPHVHgk4gRsohBXpBCCTwgr",
  "key11": "4xPyMuzwg988dWEDW9jo77BTpiSjn6MHLi4sVAMn7u8zwY1TiVr5i7zwjyupz4LfyQGXpgc7aGxpjrLRXPabKHh9",
  "key12": "42cbiBz9pHj7CgZ63AtBnrwZtgyKyfPfN2bX5XcQpyPWRS2NGY6rnTnRWuGoAcbDkywESSQQeze9WuaTVMjgAVoA",
  "key13": "5iqe4pLi9DoddXyYXsMahmrXPJM2gEZR4BKsdiBHDXMgYdKFgE8PfQ8SJHufTeS98BtXLhNV4DHGRn34aXMBdYfx",
  "key14": "tqMqKjm4DGxU9oc88cStRwYptwVrvoxaaQzcmAAMuTZZAPZiriQxydXrPHSKERseEirwTgSkF78wVDqEBx1f86Q",
  "key15": "5iAZPJjsBdBqmSD9BsYh3Wd9wGwmqTkT4jMwyQ25WMXuesnnatbDrU6LkaNoDhdyypX8WtdeUbkUu1JXoeMa2nnF",
  "key16": "24gVG2JJyBzx7BqXWm7aVoZGBUU218xVNU3etSqHLBRjFjWt1jnTmVsG6FzurzgN1wHLQToXHRekL5JibRz268tV",
  "key17": "4VpDGCVskroFdMjQcJYiho7gccN8Pekfbkw51JgMkF7wPK3ZuHkqSH4BGraBn2C4YM3mViY9qHkYFFYumqFr1uP7",
  "key18": "3eWQ5cgDDbAke2qLZdsry5usjVQiSfpydFSdpwzRkKLnkSJwTUA4jcybUDfMwqYY3anx8HA7BFzSx1G64NwdmPtg",
  "key19": "4g8RDFfzj5p3PWojqDk8JhLbXxBnFEPTVKk1QFfVmiMuUPcvZxTFDRMZgRPycoPiZ1e7q96vJdpE1Ksk1oo8741i",
  "key20": "4ymUuKFNCWuhh8UZ2MTPFw9W2idNPKh68BG4hCirewxqo1Kc5c4dEiuYbexF7q7WhvjymQEPXFhkrabaD7VbCt3c",
  "key21": "2JhdWqdofjmvcEVekYFuD3Rfj7BbKvupvFCQaxDKqosiFbutSfQ9HYXjy3n6Hz7oEb9XLm2tvmxjdNbZSaQnTSvc",
  "key22": "34L23MQo7Sq5TYN7TihzcUNJjZBE3rLFM7tab5vMpqM7EpxE3dZXVnDpk5nK82HXJmeg8nnzR2ezuAHjGbYbZjGA",
  "key23": "5sy17VfT7TQ41mkeQ7ZGePyJ3SrTkpoM4ir2gd8aprP1ujH7VoRsJ1Qome93RWm2nqw6rVPLeJPX6X8KFDc4ZjPX",
  "key24": "3dTi3ogBUSemqBefu1cxxYQJiYdKn9KA3Buuc5fRjJwFfFW3HTt8KZLXbWYDHfVUe5yoNmzHcYiRbfVkoQFVWPGL",
  "key25": "4W6Dz9s4qadcqX3vLpZ257FHB5WAnUm3D7XJnxguDXoxmMyobEaDikzdeWEWhzT3D2G99hmH1N7Z7Lta2Zm5Wmxq",
  "key26": "4PHnXmFH2ybmz9RMt2FiRuqHoQehMrnvdsQcRnVs685J9pg7rQgLd51XqJwn1o53ek8b5oQPvz3w4a4oteSg5iGc",
  "key27": "35nYS5LVKdfP4spjyBunSkTh4k6sTZo8juFESyvbJvAZwrfG4MVHda84c2S95qbHe2QjSVPqbYMu13CuTqWxhfk2",
  "key28": "546iZUEZP6wBxqftqW6zbMZyoWvEGpwMGULD9tWFvuVnuEk9brHH3ZeEMNgFJqo2rE3HbHHZVGk4ZeRxAQ2FJUVs",
  "key29": "48f8LA6gU5UVpfPMuExasYe2XPEC3vcmkxBeg9A9QNSZ7BspU73WqEqtmAfhN9k28rpm6JJttbCQLbXjiCppbQfK",
  "key30": "rmdEhrxStP9ieT1M1Rq9VFw3bHrKJALeqJftf1bxDySUGdFXF5AH5ZpHY6j6Lo5TSHTnMzk1wvzJLUT2JSnt1fg",
  "key31": "5Pc3tWMeBBX1D5xhPPCScTrFBJmrWvCA1H6rkzQLa2bX2NeV6GRmmLpgsrQh8h6AG7sgnBouaxuVP5yyjCEtEeEf",
  "key32": "5FxPCTYek4UUfaiwatomj9vq3G3KUP2wCrMai1J9rVdcnsHSDV8ZPBYdL8KfBKGN8A5JWJfmdmJFdiNdmxuvy9Jq",
  "key33": "5iPxEdY7S4YLSurMsoJHCMLu6bfHEDXVodNmgVmoyVbVLUWLypLXhs3wmX8viy8psz71NGtdyuEBpJTp6J4H6KVx",
  "key34": "LiYDxmvnxMRY8pyNDJ5qZD2QKXJcsa5Qdz4X2QoQLkqpTJLrLxgfRHHiWYp6EpXGv6RPj7oNJyh9C5Nq4zXzirx",
  "key35": "67aoC99TAquVPbWQrnRVejJWu1pkPn2Lc3Zo1Mhx6gguLGGaHn5JamVopCqYoQkrognD4TEYRy1LEG1cvbKhowtC",
  "key36": "4t4xzxHVBXSYsNxGVcHoDGEsHQMeghZFoMyJnbYQNqVW2bDsBWutWqRJeG6FNeuX8g3etof8Y6drRQZw8vEi3ZLu",
  "key37": "41Gs8qV3CnstrwAMsYYsppqjzkZyY7e77Uq9KRnDR6g8hY4Bn9PcmjkzXEncKkXXpoMwo6xNRnEQpDn7dpy4r1R",
  "key38": "NuJD2WyKjUNnrg9R59EHa3Cwr2Zn1JYsSk55Dxw2ixSTXKeqgQ1Epnf1Lk6YDxX7FTgQeXQKTyJsBWHgBnTmBWm"
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
