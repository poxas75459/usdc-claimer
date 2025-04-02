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
    "3AtmQU54Ru5L4Pm6G6Lj2gV5if8VFjHTxrZi88EbpXH1jjKsgm31FbwTQ5hT6i4NHev6iWdmwSvX8fWZmcXkcmfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61tkidR5uRYttoMyhZUN4kns42S696nw8QXF2NYvjdcs43BBxuZkEodMJBV6VCJKgJLFhXsHCoGZejphLUAy8Dz",
  "key1": "36g9yiFwuv4hmiaFSJrgcdejFuhio5vczxbD6Lxf3ACwMbpx8WmrHDEt1YnomkQ7koXuJeuitsrCUBZuEFC5JfuG",
  "key2": "4AP11nuGezzLs1XdpdBSvZgzJF1kLw3YxNMZxALdQ1vUGsRghv5Ps3LJph8f7p5qJ5W7ao8bXqKAhBEVBWd3eUZX",
  "key3": "34KE5NySedmAYR7dZNn6m9tVn58ZvxCfRBCQ4qAL7e24g5Bvf6zL39zWjDxtSY4ovdhkbnkW74hKhNVBRcTLWEUx",
  "key4": "3oLCUgCD2kTuBDQVZmD4cBSwDLf7yyndf4L6X348nhgzhRsLcDEQ9N3KoyBJ9HYMsxiLNQibqp6xb7ebsw4KpS65",
  "key5": "sMiVtXLtqaoeLaY9px8vNasgPbZ4frvfp4JRbgdJbZbcuZTv1cyMoTUpZJk7kiWQ3bPj5TNvsDqpBdgwGshdEss",
  "key6": "LZnSiazmrnSSYWQyjwKVuVAnkW82JLeS6TKB9XFceT3SevBbD5phRpWgdAv3XTMzsR73FZAGjHy91yuCQV4Tq3k",
  "key7": "2TrkkmcmoaPcCsyMhR35RM4hN7GhFahMzaNuSqvHjCw7cHhBQNLm4wJxTrMpbVKrJFJ71msH49zZy5UMbabbKUtK",
  "key8": "2GEmr4hSQvfLDjJnA2MW7oJPyfx1sLKwAKoJS7eDnZC6E6bc5e3q5V8aaoQetZ4SAycispsjhagc18tR6EaJ9T2Q",
  "key9": "dTvVavwMNSg4Toqhiz6HhKdpoGZm3KApEjuSdaF1edVu4MpViSHhyh1vGDb2BPdPz8dtkD3gE2moUako9QF7ziS",
  "key10": "2vQNT94KZ3tVa3ccqme4zWDqBefhShYwt7oYNEt541reeALWS4RaHqRRpsuiDizcQ8qTKp1cS7Gq4PqSj8TiG76k",
  "key11": "5VJZUTsTnzANwvgPauRkzQbjtyLydMLz74Ub8q6Q571kHVVoAMsZh3TCZXSDp8q1LJT5kh7gf5h6HuxFxxfFLr9f",
  "key12": "2fGCUM7yVQ6dWea7fuTZyHbuAazq9enGacdqUAjiQu8KJpvKDm951ZPGP8j78bSkRJb13uvjWoJyp1TEdZhuairj",
  "key13": "w8C7Mq5yvjfMD5ajfZWMVgNDmYQx3Fntqv6dmFmtz5gd13JKtC8MwDE3k1FSexhrgLTZDpuUntLYkEyK7UwoFV1",
  "key14": "3BWyiNn63orYTXJeG7XCtedphyuvxB8ihPUrCJ7pWUu3GuP2jbGRhmyrvgoLqHMGtnzfw2uA8GnGTJgMNnAX21cq",
  "key15": "Tn77Adt44a6W6W38Bf6pF4eovbKQXQqp6iCT38m8YB9nZwXgx7wYCDXmGvuRSYtLGBxMrHfRPe4gpE6peT8VPcM",
  "key16": "p8uWis7QLx1NNCi1VxfcR5ahhCcodYRvpc3A3odXCQ7UGnxE6zRdbRea8o9mMKonrw771SkB8NdJBXC9okLsd8X",
  "key17": "2jJRasirzcBHoDkN74p4G62FNCTCj3i5hfvxhh5g2sNwHtrQ4J3Gaqe23WrUSCq483jzaBjWU82cDf88MP5h2Kd1",
  "key18": "42W1QEc2JcnBUHdmwHvARoscyb3HfLwDndckboF8auwhwnBgqe31mZC7CtyXc9YYc158k8EdHVrzLWius4kpzhbi",
  "key19": "fgWoACN2LLw4e3HtkavTJrq86dUDytHdzpWv4X7jHHxVC7KLTyfUexxGNpqUabXrZyayTDQCTsbT1WthrXK5Vrm",
  "key20": "63EMyYh1cfnvYKk78F8fKzb5w1S5P7ZghGN6C8HGCj53i1zBZL7HEqdxDYWDeFncXjFV4s7213cLQLtkiD4Fqsjp",
  "key21": "4FM2TW3ghw18ziiZioDVG5Grwe52vb2u2gejEwfzT3JYJgyrr5M1Bagf9Y8geNTk4ueUwRGB1fS1f18Q66nPZata",
  "key22": "3WENpn7H4b8r4wG1yjMVdwf8ZkiDCJscRbFUsaKDC97jCF1q1eWoCFato8KeP7xzGor6Pw1A1EJG1Q8EPd8TdH3C",
  "key23": "3pAi1ge9QLoge9o4DunadMEQgsYwRQZLAaZY5wMoMRmzmi4Tz1L6n6erbAfQs92QTkJDQCy1Bno4ZvA7vfE8a3JJ",
  "key24": "3kT57DG2LZkcGu6ouCq881PHSs1ZFBYFQ8go3VRWijrivkkB4qoLWLKC4ZzPgnwv1196SoAqNYC8A5Du6chDFRCj",
  "key25": "2XNv15jcwxn4xqcaZzppnZ4i6eWd5JSJw1cPdkpXLds6aT6q3MCKp6WL9oUhQf3k1q3ft7VEyM8JfKKYHMHthC7M",
  "key26": "5fboSeQiVL2oiLXLV25WSVEDh3xXjxXUyk5CTkQRNPBjSJoCdMmZVJdG3SnRdfophDYbFzjot53miheYvDe5Hm6U",
  "key27": "2GfqJfV8aY6TrChQbPMjUEEBHcSMaLmocEce6ozD3gZBpCJoaroZAXHCMFzvHAW3qM5CoaG46PTsDhbhNUjTc3Qt",
  "key28": "4vVnad5DzRg2T8mwwaf5ZxDrBdm79rkg65vBBd3DYRvVT2JvfhCRUQXX13wnjK8aER857i3mrbMVzLRQZTNpxZTq",
  "key29": "3ySU8grKDp6dn6bKiHNYriWP5EvSaS3Ep6BZyD95f6jFC9DgFZ1K7TBK5Ye7gzT4hZjCUPj7iyQUbDpJXearr3LU",
  "key30": "Qr8KxcN5Nq6NChFcr2bYJ5w1pYJm5NuDtoUCGW2zxSBdAT9U7QSAKdZZ3RB6Hv3aVy8944fAKjRZXp1u8AgrQbR",
  "key31": "Wz9RDbEa3WM7vkF9vTGBhPXzDAndmoJ9voz4vfi86SfHV1B6FNu4d3TsMivRAJyb9XimwDFHRUDjLL2xQfHFtNd",
  "key32": "3WTohiXbV3XddWsjJ4XVCCWsuTjWiEAhWXQ5YM8uf4LfC7tvMBHMiZrR3hAptrXrgoHPmA3UaH925jPdBCgw7SFx",
  "key33": "3cz3Vqqoh3XPzV5U6PQ19biaxvKrDqSugty1QWhiEkqX9JcgxBRBoJLQaoF2K45k2S4gS3QjyPvnJACXYKbJb7r8",
  "key34": "4HBmYKZB5uAco3dbny24GLhR21tjnoanscqd2oQUaMGv3Xy4eAa9hiiKHKTpRFeBHJQmF312XWQMRyXmzcBbNgQp",
  "key35": "2sXzjSDeRXjjSQoq7nKePtzA1XgvqkGgwyDSse4cfwcgn7kXaVjoPnUKoHnJEHcb6GwxcSMnKXXromkxZbSKzF9U",
  "key36": "2ofcruBw84T1Bp87ooEQ6YGFUxhwz5wxXjHjuacEraoQYbVx2buEgSJAeeKBk33uQE4ze6hynoUMWSTFukRqpdP2",
  "key37": "MUYAFmyp5c8keqSADcsa5ZeeHUuJGb3aPt52Qmme1QKx61sGTzQtC5Sq9qQfk3nTiynsTgmmPyqXzWTEkPyPcDd",
  "key38": "63dLd9chWAUANSk73t3uif9Asvvv89ecaMqsdXyWXAeHkAqBECUi7hUKCu2j37CEQdAxTfXNXHvFvTXaks6GBJUc",
  "key39": "4EkqJKEyCwtsXFy8KpU7NwBzXrdibB4heybKGd9tAGZPryWvvKHdm841Zv174EZ4qkF9t2gXqPkKxtKnTYTBEUF9",
  "key40": "3hzydLgz74FKXdsPv4yuvsctUUr4PprjpBhS8bJeZkyAaFx5J2GoAR9hVUgdDcefbmmaczXQ2LP9jAZczou181F1",
  "key41": "4m6brMQhSasghpvsaCApfHLzbSztT4phSZam1JvbJAsHxYcDtNp837vPbfMYMiYq2ACe15mhv9TpAkMYcTq3ZHod",
  "key42": "42uFzKeMSWVHVf9mDfG71gUZWax1hvjPiYfWpqMXjNghAy8DRTp7vLsQWu1TLNiSSTspp7KPeVdMjEBcvUd7fMVJ",
  "key43": "3yFpYzh7tvdRZigMJBBpxHD7s1GXiC572oTmS7dUzkThRYSsBbVYjfZCcjqiSgDAxc4k6GAad4zdTrHaUmai3y9P"
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
