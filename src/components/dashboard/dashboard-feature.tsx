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
    "idffhDheM6tGJ1V9knhoVrzR2UPwRD3Mt6SfDGuUVcnZZ2zDSak6GuGXhgBBJVVQFHgQQqsZGxo3Ec9cb9KW9yV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfVE57sKkYFNrQAJgrngmEMZ8gsF5BTctYZLYN1MFAivmEfiZnqkonPcbzZcYV7kNq9Tc8MzRHaYMupBfMGwu4b",
  "key1": "45bDqD3TKUssBciM2ZuhwYeCGJFqsYVJohRoqXQbvAmp3KwLPkZAAAGCvJyauyr6wVqbgFyZvmZ1xeD7uA9K2yqP",
  "key2": "DkUGcHkuCWBFMPrAVgyCePunsiVejyrHhUCCdqv9dAg9gUCp9e7ASVZbBwCiwJMg7ZBD6NBJzochptzVgVJxKsC",
  "key3": "mofMbqHxJGCqJLarNHychmpkD1MEDKb6eTPik9ccLRVBuAR2ATUvrSDNo8Ue8TUMLAVAdFN7TieDVABkznRe1td",
  "key4": "2DMbeFeMQ3THqrfiT4uSxiTVWG5DtwdWkiEjMtozgacJzHRvWAxETS3ug3ehVZBvaYVHw3z6QGpfnhcrByR7aZY9",
  "key5": "5aW2eNvGMurm7kTSbLgDVxtozSonKtkYgQVevVXZuSv5X3RgTDuKjuQJ9x1MAc3rEB1rTgchCcf2u3C8oyLV7Zff",
  "key6": "5hdGRq58UejBmfNicsrTkUtZESVBzjLGX3nGec7SQ9QdmGiFcVRp2yxQcBftkKvbkhEFoq55VwetBXWFD1RD2URf",
  "key7": "2BQPLxA5Nbgg4NmqYpYiFSTTg3fyPkx3mQ53GL37hPCxqHWTLj5bpkrNDuECGGZAfx7xi7dXiYdB5VWYo1i1zoYk",
  "key8": "sbZMWj8uBnktm5aHjtrAntnZmK1KDXWvsaNaznc4LDkmasaF9nx4Tm85DtuxL5u8mLJWMT78WfMpcC7Rch26ELt",
  "key9": "ApLaCcPk8CMZGwwesmyBpZQLnn35oiBRCENnkh3QvnCpZdAyUa1GZ1RzJa82CewTAL5JnNvV5bu9T7iEsTzS8TX",
  "key10": "4VoE8rRYiEA76v4MEbU7Q5okUsNZeUiEVJgdirEVatbUUyUwNCVJ9xD2Rz79q6A5hdTVEbJ9fcefxDt1vaAXtUqW",
  "key11": "WWm8kq6bp8sV4vURzimJQSEhFgMSoiq8n4m1vfgXLJT8FU3dmVb5zexm5mE9usWPScm9ysADgcb9L8M4xrjL3qb",
  "key12": "4oHias3JxNzBj7pMEEUzLGkWmz5zz6sXJuUiux4GHzUZq4UHMkeYWT65vdTMqABxqCCW4LWxWt27y5LrHWzLrGXP",
  "key13": "2pUogWW2yXU2AWjNJZ7sp69yN2h8svrBGR2GYPSxZUY7FiZRPQ5djEVZuYyLCL8tuCZefGViP2JqCjsRdS3Z58Qy",
  "key14": "3QQFrexu8NkcJYaB34a5ATCZp2YQzq6wCTNBJ57RtfaF6GGgCsVw5GaBgUy6RySEn98B4bMEPpRc9F7QDAuJGPXU",
  "key15": "xmwgKEmDAaCjNtq3X9VKTyexKH67hFVXUC2gwvTXez7d33uQFr2jtDANhNTdMFmniUXccr2TqRnHxZCxhwNEkxy",
  "key16": "4Ve15hSrbgaPnxqoyi7VmQ33sf8eM4zLXPKBU7SDf3QfueaABdps1xmmetoAK6Gu39nVd6ASpWYALtZWSoCyXBqL",
  "key17": "3JxZtzNcFk5onvpA1onWpZfPzcdNauA9pS7xmXW5AwsrLHy8197rm54GggouNaL6LxADeR7zQ44NbbLkNK4fSdRJ",
  "key18": "2jcb4JmrzYGvosk4t8phbxTaniz3ecQw6zFinakGf2tRU7U7FgSWcAZXqDzhgor93exVyz8nSasJDv9efeT95uzi",
  "key19": "Zi2y9AiDXiiff2U84VguN6DexFNYnbvtpFScq3PmHQLHgHKrK17fD9FNLL8sXERjasYFfwpMPRLNnsnimnV4nvR",
  "key20": "5Tr3Wmv7GbPAJvbBatx9qy3GpStcBu1rPism8hqE4HPUG1qFSzCDvPaB5ipwHaJeWsFGwkE5iLUgSYcGbcNHeYCx",
  "key21": "5iXaFqJbSPAT7VRYqHiyVz2dyQea3prVkkYo5nZFyxBYj8WLMN2mRJhGaw7YFiJWCH4kNs2E1Rn4W3uTzrmVTPnb",
  "key22": "4Lpd3i6eJ8RLUJff1KssnyZqsbySTAePwKckUVqk5VKNBZ8ZgUxPgxwTXQyA3KiEx8jntgEefRLtqRDvYni2E7a2",
  "key23": "2BsmiJMigFv6fSTrc7raVLNXmsMwXA7v4hEbwLECqcAXp41ZGHoYMKnrXAXH2c9G1PFAzqB6NuxUym4UJ6eLgEaa",
  "key24": "36DEmFWr111rZ9gyz5bDZC28xxcQWSv4UYWCZRJWje7oadrwLj1oy4KsAvttB8uLJ29xGAtxpXforauuHF18y4VP",
  "key25": "1Pjj1q8fTMdvJvfQcU4xg5WjFL1w7yqyftcp3fEhUcV83miExvHvXzLh4KbQ1c2D2nzyqShNfcapUQvzRZ5AMFL",
  "key26": "38C74DudTNSkJxdp3EpQof1aW77okGyXND9Py934W2Zr1R9o2TrMthPZEi9PAKWP1VJjmatRpG4VUdkMDc5obpy3",
  "key27": "fEzXqkrQmSjs2KxgaEJCBgosAefU51FMZtKS3x5YXVT8xq18hJsBf8vQWiMZZaJajXfqDpwGWuUoFw9ozvGtBSe",
  "key28": "kMx11JreWbMVvf5dXJ1BSfwywqWeMPoEXR1GxZqosY2NU5eZBuQxLJKHT4tGMsGp4H2a3wqyWfziW2NzdnSkyug",
  "key29": "UDMmhjaiYnDqkQsHGN1MHhPGkkxPp59r8dnrGryUkH3nDjrZRvXQD9oBiVYUZp3kirGfsZkmhrQHrtMs1wXKcbb"
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
