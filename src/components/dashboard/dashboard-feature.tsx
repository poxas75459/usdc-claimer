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
    "2QUaUHZZEKgp633BNNDmdqhRgq1MoNdzFXab5QSs86jBEkUSHb6V9NpdZYeMk71JWM23QZ5ZGE4ivdrET4PGYwkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMHP9McJvprieAYqwUhvRyAaEorksKqA4pyjfWz5ef7aTBgVxreQcM3kunDwSkZwNqC2ZNWUmx2vSmNXu1sn2qr",
  "key1": "3Ni1mMueQcmZ1J4u7n5HvejfKthSpDVY3FCr1hzMw8quEBo3n7KqwfvsZngUn1os8KoiuTUkRGceWeFpZYWLX75y",
  "key2": "9kGp4nrZ8h1Zy1VvmjcKJhtuCWuQycJHvVgAgJmSVEUySRG1ymouqYVY8sVuATDXqHCcxYtNVkjNKARWYoFTHLG",
  "key3": "NmrJxPg6MgxjEcmSvzP3tLqi5mH4ctdgFH8rB6YRKVVuA2dv9zmWyHETd3MTSgEfsFsBqpCGhLNmexbkxtf458c",
  "key4": "28ywBEV7vGie3XVrSzv7VDivobzsyjXUyZjsaiYG6xaahcd9R4mySbvkagbFZTDCsGuwYrcTk8azuyogKHzTf5mH",
  "key5": "4eMxThdaPpuxXQXnJru1u29zr9DAM2rRLgv4Qzga4MvzjSjLN4G8oQkL3aVAtsejMhaZK9AXsLKyPmH3fw9EWkxp",
  "key6": "57zrSbBE6jF28C7naEsrSDDDfXgwb32zpwVbS7iXqnoKZnQwntXXwJB2mH546weaFcrbbtETDSs8et39CK4Pk1bV",
  "key7": "4GSTzataVgDzdrrVom1j59zoxjsqySM9JNQxwn1nPz8UjDM2VjCfUqDtjfkTsjwRzuuHUJfmSQLL6oLduSZacYzF",
  "key8": "61NWwhEHGkTj61Xv9t28EaguTpPnmzoi5xY2wJrvkEZrKJwiJmdPtbR8pWLDbww5ZXZeaYtPavbsR3BT3u7Xbu6H",
  "key9": "MDWpL6QUxyZKKmAvoVMSaDYqNui6cQqaBvuptd4CTEyDyoTz9ZFs9bd3u3h4JNrh5FBY6v92Q9YVgMMGWsTmG14",
  "key10": "DajTJEPgJCA7yCM3Xuwbe6hdBukZy7tkLqJBQnvPZUyrjDnjP7VCNxFmynt5ZiPUMwSnCj4BDXfP8xHyv145JhP",
  "key11": "3FdesvuqKVc5WKrdGSy4VofVEem8H8NG7pSw726u5s6ZWZMReTyKDPL6Z6k9ghAftwWPS67M4oKyodZ2b1NjNh6V",
  "key12": "57RL4FQekyUmvWqwmCv8gvZW7sudKdce7LgN5VXUAvbbnZv3iS2y6WQvfj7Yt6T23PtrRbTE2xfWLWAzz3wArqum",
  "key13": "5KPsR9WiXkMvrRvUUnaxs7PLWrWjMZPUdHtku13tKo4fjWhcAYR4KdBvjFy1vCFiY1XbyiNXJkV4sQtA4v5ycLSq",
  "key14": "WeRug5TGjUbJc61GHtcRYZ2vbjtMV5kR85wevJD7quKyC1jgrQWiywghZQc9jUwyihh5mDWhxHFnZFx8EVYSm8f",
  "key15": "4xW2BH3d1vWr2gCqmqqArozVECSfXsFPLG74DNnFuM5BZ5DDzAdbf7AdYxteBWZdpREiFzFYvQyuhA6qBkSJnUKb",
  "key16": "4D8a9yLgAPefnjkgMr8k4TbgVvxG4o1z7tnoxYMJuJ8vWzpcCQeG4ZMY5ro9B6QzQKjfeWQ7Fxfyx9PXUs897zLn",
  "key17": "46CW7x5HmRG9dJZxDiQwif4mjVYBuxG7g8tccqsDwxnEczQGzLQdYCPM66ncCFAtmd6NXLv47gudKwhr3FCnRnVd",
  "key18": "2AVd4hFg51E721HR4BWep3q3ZH34zhdFswt55zcrm7LKA9Kap1iTTkfeBvTjENxbmio8rzsL8vCyADobZKUxThWo",
  "key19": "4d139GPMcQG1PU6S1A8ypVd2FFQ8W8a7oD6Ug9WiwCT9JamAsKMU8ZR7cAt92Dmj4WmiehrG1UsJADY3rdn3tDo5",
  "key20": "2fSy9inE3nAiUkG7o5mRGiRyJs7PHeVnKvigqh2jKYXxKhZmRKVrUjbYpjyjGjEtue7qrpgZ1VTh9jfEK4Hmm4wE",
  "key21": "4ZaccZaQqXkBm3KL4nyeNWZTeaBZFVQUwvnd7NNZVPqn3APZwEwvRDuVELsq6nGD6sEfgxja1ekVbkhNxqptTybk",
  "key22": "4Aj4cxa5mYKDNPhi7Naa7oEqb2m334ujCtqHkRodAXWLYoK1Q5Rrt3HoycX3gNfvqbaDU8AtYUHenCwFL9o9smfB",
  "key23": "5cgE3U6K6KVaPTceiU5pYwWNweMnVTtcC5kJq9aEugTYmouTGGW9v2goQaiabefUcDQNVwukE2p2mVSEvz6uLn58",
  "key24": "upqYjiXBDu2vLcvMdqH1KwvnMGbB2LJ2mUt48PTh5V3BfEQUFz3BVbiAWHB2VoDkwvDLuMU8p4dFdGCfdwEXSwq",
  "key25": "2CkotjHmYSjxnw53a2AsRkxqYBJsCqjdmMj5P2xD26VzyCPSUR3NEhZkDK2MEdJJRUX9ofR6cMU4MdEeo4bGG7x5",
  "key26": "3wVipU7VmFgtkbTtNmSyB4SdSQBZrdxX2HfKiYMEpn1Fb8txLMLrNwV9HT9M7qu5z1ZeJcMWbXXnTTGCjQm6Jmqb",
  "key27": "53MYsSnZk7kAgU6EEQ4LRRAJjpo18Y7zc4CV9WXY74uYoCMt1TYjjf3EhReQinkmEwLBLcuNidgsEa1DCduo2Uv5",
  "key28": "MdsRigpPpLBXzVXwZpyTcXhZe1syB4ZPr99PTHyyuhxSSPm5NVb6UdZiLgzu2AB9cRsEHVXRs6jdnyd9yMdsTnj",
  "key29": "FvE1ueMtNMyEbCHrT34Y4dfRX41GesmT2pvbR1rnu14pqCe1idh8FijZGZyHnBaKgvKDWwPANtr6YHBJ8crgwLc",
  "key30": "5Tv9Up3VEQbF2N2oAH53hZEKjkmpmqv1gCChUS7p13F5BrQ68u8aZ4MXrVSwRY6bpYgLfpifg38RX6g5XSb352Lw",
  "key31": "WGWMvbmKzeKi5smQc8pad4LGbgjgJQNiY5p5HACCW2kfA6r27vmFmsVk366j2xuG7mfPH1vR4gs7Ymr7YkPvSxe",
  "key32": "3ZdWrbC28zzYtchC7Z8Uw1XnAkf52jJLmwQmJKF4ACM4ZHg8ew6oGtp3dnja1awaDPsm5VTw456gp3yDZYH4sXdU",
  "key33": "LTg9nFAUYksyW1aSPsD8HNW4xcZABCVoDAtZvoY34hzdJGFCRjhgUB6Zeb7QdTAWhStbH54h5LkwozTVCHn5Hjx"
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
