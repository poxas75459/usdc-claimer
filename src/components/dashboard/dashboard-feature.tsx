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
    "2D7XRU4wt5FdocfXLA7gFAKHTdTTr8L25d4SW8Ar4A6mXn2JBurKeWcJRNYkqarcfrde7KLaiMwpVviV1CZmeAMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PszexY9Lcwpa9JjipwWqVwLRy7SY1zakNqcvzcQraQyoHMhWghbn6sj8RatxvKJg2Lb7MAnsrDfuEPaWUwhpZxD",
  "key1": "4vrTAnchy4UKeo5HwAHjccdgFUKMMEzgHt28gevN7g35suKVeqbvKe5cGDD7MKpdgYqj7o9MK46XyhbUFC9sXk7J",
  "key2": "5T8oXA1FT558HtoMFivu43dgJtuKLZV9hXYpCwSMnkZcafsTqGnw7X592cNU47aagXs8DuFNdunSu2NJiugHPgDf",
  "key3": "2GSHYxV5WtR1oS6kozLA4hr7MwBjYNUGYPFGJE3AEjZJa1FHiuXaw4Rci8LjDEjwciCY9NTyjcabFcZibc3B6Ca7",
  "key4": "3i4RDA6Zwe719UpY7gqxDe8a722icURFHStXCynV6gGdKNyWtham3xiskzp1qfMBWw8cjjAtGFprsBP1TVuoqGHT",
  "key5": "3xAZ24Ao36bX9Dj7vAd8npK93Hce3T7Z4exabuXibwHcgqyaN5BhjPBCPE8xdpZQN8M2XpVtiU6i4TpkpkZxnfMD",
  "key6": "4tnXEZaBVxwHxn7yTsB9H9ofNUAxpjfRTJvdN6A6QaPBJWKMyDnyaJfX4C1i1Mm6H9vNoCSQ9YFs5j6rgrjNck64",
  "key7": "3UL7xzKvh3L4qFmzR84jdafhqnU1z7goJj9LYmP3EAMJ7PJu72gWRTeTQJ1kvYUmZMbKLZfts95gaijrfconnoiY",
  "key8": "2BxkDdxuyR49vt4mmECGscgpuRT5863gZFK2f6YxHo8UQGXrCnkdQd6GXTN1ekTjoTLVjVxwyHaLB4CRTkqrqSG4",
  "key9": "3K7sY97VSxq7B9Jh8ybnkr6d1bUKzrzGaeYct2z8mXA8TP4vuJpuGQ1SSLnP77x5jpS6pkhgXDwMUitmS21Dp2W2",
  "key10": "4zTWThUtCeRxwiHGALSG77J71NiRFLLYE3agj3cjcw8KZoNnWzrbh8qGExqrvUEp1e1AipCHKQ1qCFPfrQsmURcD",
  "key11": "3wzYwPDJMzaUyNuMjWobsrmSrUKfinyfHMTGZ7dPPsEfX69UUrEXFAx5tmhUiqpmjZVx61FP8T6wq5xCjrH9phja",
  "key12": "5jf8z5DBbKGHcgM3VGr9kM2BjKoSaUsE9UFgzwCgsjtkjFGdHdPEY2p5tjn4GqEKBnmfJiXh1WhHAoojVpfhKidf",
  "key13": "4P2VFtCcUt3jnS8zxxXoScZkiEXe1DXxv8YoHtH2d2G9fUv19YAAF9vuxR1A93V6PAMtNtL9khB6kK2gjwXfBQth",
  "key14": "3SveKAs184hnc4CE5tRQoHqCpAppgrPnNX3jtchEVrpkEv22GB42pFpwPQL3WgJZFzTvcKYZfvtzJs9dPkNwCCBX",
  "key15": "4tsyLApW8bqYyV538g8DTfTNQoAuoKmdiURJZkHtGfV6MEKyaCUkDfworexmNTDExQFSJbuRx13Ksw75hPmHManL",
  "key16": "3i4C1BpCbVVd9BGZmwXts6o7XuQF7447ay6Rkbw3S1NPZPbTcmd6HnonKm8GFQtfQzdBWZ1Ax3j2vdvF4V8jFjuA",
  "key17": "2jUkzPaDuszyCYdiKvr9zLmByMj4MpPwtzF15chnmm1xp2J6GwSnx3y9cp5knroTHzWSyt9hUPitS3f9zWvguZok",
  "key18": "5edn5jEWhEkNADcsVbqwkA5qmH7v5nhnRTrtca9t7dYYvZbSqLa75PjGqHmtSNKQfZDtDhXcE17LHQoYEWQnrvES",
  "key19": "4EKNRSryewJyhh5tiGh2gF6NQnG3w5qJUcxFA4X4NuZQnHYu9Wikxq8VZH1RbA5n151CwQ6HBUuMCkX7M1BmjhvA",
  "key20": "vCfBivQ1gNXH4EK5nrzkgFp4FibU7M6WZCdxyGMVNBXBqjX1SKKJgAAZAE5qE69iR8YKjnqWvWfkzEh77m2Grdz",
  "key21": "3m2TvjX5L73TvTGdwDxHoVL8ddDHMLCstieSv8DvhFmXnskCu9Yu4LgCPsTorTRbXBwikuM2WdY7SumDZyPoHZfm",
  "key22": "5aUvpJYDtWNgSsAc6SQUoiRmvr39Npi6a2RwHE9GAiqsS5cRPHmfRcJzF8Y26gMsutKhBgeDhsb4D2nH384otv7S",
  "key23": "4XbX4nZBsaqo6BmtFzb44qhTUpwdGLAxeLSv8R2jYvgY3midZ1VtSoEhc2TSPKY4iKp2NvV5v8K46AjuaY1D2WLQ",
  "key24": "3LZUFNsHeP3paedj29HUafxDo61tfckezJWxsR6wZ2TpqwJPGt35pkkEGdKzjuEfiYjZH12gjewuX8TtYHLjac88",
  "key25": "3t4KQFkQ5ijFJZ4jamFWhG3F1zSfyPXZZdnPcF7W4Zma2ts5V2KapnGCuj4E1ed5oSNy4EYT8bCvJL6cHaBLebcD",
  "key26": "35GLziZf7CjQZcFLAxmsRFs6vSEKQ55HV9X8G192aswcQ7VcW5Thw4Rm12Mrt3wH1WLgzx9RwzjLBbr43TV3qfML",
  "key27": "3ikSjdUeRon46cnzJfRBMBDjrRcGq3AqGokTkyaMs611r7YoB4H4FXNTCMrSu7rUxu4rvo3mUNS94TbA2XG764ku",
  "key28": "5dz5riYkqVX7kEBk2nA34unPjdHeDiBtqAgoWbKjutZCjaV243bxztTUP91663uWegqXdbkW9riwE5Vgh1PTgfCx",
  "key29": "45n3nc87dph9JRcqe6QqzfAVzymfi3aqxmExChW3atYqMhuREmt8jpTKWc19CWpxYSyFKE7w4SWsC7HurHpNBTeC",
  "key30": "3FnFtrMrPqkjQXpVwhtYtBHhv426wNwY4LC8agyG2itHRgKVYPZShxW6Qb6pn6szSisAoLvHe5XJeFjjG86CBppF",
  "key31": "KpSdA8eCgG9HPYahd1W7SHtnRPu78TR7oRsFXxgiRrsjSSc5PtuocuVXG28ehG5JswquSrotMm4hWUCpfeVCBQ2",
  "key32": "Ct41gG7w3jLqZG79SXU59oCKNSVEpNR9wDJa31Fv5PZ6zhwpr4aBX1C1GkwrtfojzywqTCQkaTCBUWF56J2Twmb",
  "key33": "5cUp6Mor4dJXJHmjTpSm5wGvfttH1RPGUeUSTYyjx1SpDkaDWXZyBEu93SSNA1Gw3hzpgAFM3Cav4ChrYrGFGces",
  "key34": "gfEK7DFfSJDJuHfA2UJNF774RAeRqV9z7FyX2Rm3caerqZCMDxfZdkQS3YF8x9bgN73aKQqGN5yTkaonaEpgDGn",
  "key35": "1LbrxU7KYt3Ls4NbnFSDczfPeutEdeJRpPHGB8aJGXxL9bPMZKvHZ8PVusmXRjaHhMbRUoiNViuJkAMx8371rVv",
  "key36": "4h5Qfo7cjc6soSvDG6fZZXbJfgFS7RdXdR1Wip76T1qJzf3kDroD2ye8dYEH8PhYAK9f83v3UkwD64yuFoBtAM4k",
  "key37": "JphB3wMJtYGqUJ9gypFoPv7oQXu76YQZDHeZ4ARGv6QCgT8enDCbN9XYFghtQBwgoCyTKiWeJuETka659WG7Pny",
  "key38": "5hjj2AdusZHKBWvrJV6Z5PG9JuM6G836jp2Dd5FnYhafMaVekq2o8tzqPnByvtjvH4zAUT8VcNHhfro4jg1uNef6",
  "key39": "2qohDWWKNbZVcDWwHYWbK7wHv7cUYBTjiqmGsAhySY3siAQV4xnzBe5EGP1tcLYyDZWdUv8GXzQv3KLDXp5hZ8vV",
  "key40": "66AxVrj6MJgeZ9FcGe7cukVcgrpGq15WsWwM9dRduXGRK8FjPmzD4cxH6px1pSEXtf9yxbVFNKfSSEiLtaEjTnsS",
  "key41": "5u2czncSW8yvEPiRASGbH9L2fFyV5KX5bBucH1RsrD7UdUXK2pouuG3EVDPZoFrHXw37DdTjeRvmQEWoUujvKPoG",
  "key42": "5AcJk3tZtcqVmJhcGU26ZFXxKHZVLEXsPvEp2yHkRy1pYpUaXzfFKzPxpASHphrJba4sMD6T8G4q8NfxBkTK4jTV",
  "key43": "5n7Rg2kBGL9LaSJk7hxpeKcS4tRjJpmUTqomf3NUB1CAMfq8ptUZTwKd9wBpHjQi4ZvyaPdQ1cpgQazpfzqWqMQh",
  "key44": "nK251R362AU3T57VhyavjVZLpM1fsVZKQ18eXCYDCpByrRNPTcznTohWZqmPkkj7AETGcML6VoimQdjYsSxosQK",
  "key45": "3JHE8LFBsDnSLY1JhmTGkogjNeR1afyUXYiAHNWyuJV7eBWHr8PYkY637b5BPQ2SZ75aPwC6bwiJSQZem46YdfSx",
  "key46": "2n2Y3Dqnz41K4Z4VXqfuUPWGgmgaWPeA2zkgb2uKEL5CekSZD2bkHAoBvFK7uBwP74xUxWMdf2KjWA8ZobzVxbUY"
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
