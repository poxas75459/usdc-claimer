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
    "3YzRVTTjynZfyvTQXWPdbNGjRVzpj6GiCJHxyRmWk5eNKXPkfbXoMYRkB2mr7rTV8nzXoahaYYXULvgr33973dFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GJCfZj45JNTUa7qNBP9Vm5RrxDvBwEuDCLbsdj2MCPkM5CqqiqUa6NDKyTcpUo1Bf4CUYgwWHEJmsHZeVn3hgFd",
  "key1": "2W4bCqTQr7CwNCgbU3m4oHfxN848X4rkqrNoTS1RAjdqqpjXqsPdBqbUXs1xbjcE4R1N5e87HAPmdh42u6AadJ7x",
  "key2": "3cCoAS16yyUXj6boAJUn25xyWuRUDNwiHHaTaLhNC395fwXFwyh61cMejBKVC7CLk7agQ5gvhhzFraQDfyVAzLok",
  "key3": "3CmeZD1hwrg8rMfiN2P8cdZCciqSV8MoeUdY7Q6EgHawHXd2zaX8vkcHJPctPDVFnvbxdwM1T38YksVPb3eJzZis",
  "key4": "4PCvrNjxiFxcXdToxuvKVqzvsp4jKu8GfW8z1cRFA9htCa5tSbToD7uDuVn9CzMtZ2KY9yFXXs7mL6FzK4qbo4nA",
  "key5": "3y4KMqpEy2k47v3EKWDW8TJY9kZGsXg67zubXYpTxTo9ph5J8GiVdEpTsff67tdhs7toYH1kJ3TSmnicyvJWKMV",
  "key6": "ZtXqdJ1APbC2Fv5Dh4X5ySufpWkvsTmbU38tgr8w9dTi5vn7NPPoNBpF2Ha7E6CX6ubDZKtkFNxeSPBHjkFbtBZ",
  "key7": "4YrqF9WfvZLreCiBPprhmPSqVdWioonP59fXMVu968u2Gg1xbdpQcfPrNJUBnuVVSiu5aWZkWPqtdpvmP8nmwuEj",
  "key8": "3gC9vqvhn4mJhDg2fdJmdvJaGwRiNeVgoLhjzq3cg1gH2MYpkncP4TcZBVderpVJgpFGnwhFM463MfDuEKX6wPKG",
  "key9": "4BqSC8Dfcqpdxrhh6tzNGrEBu6xjExJbuodsGKvWXzoRujhd7Xaz4A5NoeH7HNfvN5JRyip9rfdNrsUmeskY4W7R",
  "key10": "25CFQZjjGSg7fmU6nAgMADU3k17fuUpuftcwMVTVoe2M6WpPPZUNjyGjNGd8rNy94aDZzxhLMPZUYzEQUdDyxUXY",
  "key11": "2LPQiBAfzM1uHS7BdB7FSi5erxKedcvPTpTY3Nbw2U7xRzsHqwXJ2cPC6Y43mZVdCYTDY4zSGfpCB58kpqEekMka",
  "key12": "79yAAh4WzenfnzhyD6hP1aoma2x3VML3bBQmSQ3YQEAQ73T9rRBFbEVDRF19cKmMtgL7XCHw4MfMbzDTekGWv1z",
  "key13": "2AhKkvaQ1kRPXMggGgHBxdnuL2tDXDvEt9UkWZMaeWigBfBJS3g78rfEiSkUNeQY1r9wfPjPe8yVhsE1zfFZcgVn",
  "key14": "5sqa98GAr6u6VsnLxXMvjpism9wDxGvnQR4YKnxeck5qdrcaBXwKhX6VsXS341gmxwGPkm1nVZJA7hSAv3EGLszF",
  "key15": "5BGp7hNDHpxbGhK2FjxHKyyKMRXZMfUGALESzUQoVP7JdUihbqyZyoRDnRLZ3XThzH9w4iRjKexE7EqGH4AStdso",
  "key16": "5R5FzRrCoc1TMnYvxU6KJZzgNGyfcMQP8hJJMb2vkjjdzpGWayKcxkmGsCWKPff6dohGcQ9YFmA1yHviwF4GnaSq",
  "key17": "3EoFJa52ieivrXz2PT7j2zJijcjVuUj3uXK6Z9DrggXXKrJWMYQh8xv5BKQ2kEeXyDBoxWPohEPyncNbXaS2KbVW",
  "key18": "euU4U3QuTUw8KdyTnJyzpueEikbhhyFqSA4Wh537aGKcHjfCmFPGwye9afjWtRmdEDgNwzecQvu8rnq2AbqfSid",
  "key19": "4nZbNAzHW3Ce4K98UMEAwEdTDLFo9VmahpjoXXeyGJjtVsK7cQTq5PpSmgGs31UyiSZCZnaTTCGZDepgQLHbsEi6",
  "key20": "kUFmJSdnBtuCzhYEiQMesQKi8Dnnez5zLjF19vfs9J7kWXVp5Uqnxixu7orkwUteXnvJEfd8XruuG6pqdqmEBQH",
  "key21": "WCnMVBUUeD2SmuapdJv3yjYMEQvWsVh8QLtZswKJ7s9Sarw9dRXAdjY1exaA7CLzwzd53oS7avhZeN31jhx7nfZ",
  "key22": "4FXQUmG3Fh4fQEbaFRjoAV2T2KvCxYE3eEHpKT9wYqcnCxs8Mt6GRCTXjLAnkxBfcsFwqM25qVNzpWZMEyk3aLDz",
  "key23": "5YtrpiV7MJvSP5QLg3tsuchY83fShAAht6eu6VN93hRR8oWc8foyk7rDPFZMQH5LP8P6vYqnk5aXgGgBMbiKMSWL",
  "key24": "66ZJKdcmGhnutvs1eM8ex7Ydn1fcLf1kBo3tAL3JymMndzzFUYxjjFPSW78PZkfPFiWyDPSrVaMVFvreAikC9fxn",
  "key25": "2wEysHQoJreGgPKEfhut3Q8wfNu9EjVLcKVVhga2AZNwJHc5aZbs2pGhbMpnHw9BZP624eXxkQLQAphygYe5yTSP",
  "key26": "2NfLK6XJkmcxZtdzGpBuiqXGwF3K7x6b3bwaHAdhoQ6ToaMEVNo5tNh61yJjwGnmKt5tGL3SA2sivrA1zUGux2tF",
  "key27": "2tE38oRhPcUgcfBW9xR7JEB7Ux6MbisVTFat2BkPNGRJGC6Hobi28cWaQwrAxSoj5XFHUnyFsEuwZQp41ifheuPC",
  "key28": "2nGcDRY4FV4uenbRtUFPQEBYyjEFoLTrCP8i67LqwkaCvh1JdViM65sspFo2QxFh9o8fRiPvXjuJZmwzTwaCBC5y",
  "key29": "2ZrxR1UhBQie7wSGAqmEMfAhsEhjB23kXQ1qBrCENnuHPho6azBtqX1e5L9RU9BsG2imF3pzVFjij5LdjT4ANZgr",
  "key30": "5TfzMEGPThaJGPsDYzpG6kcpUvE8TVryTZxjudSxrjg5LhxZ8j11ErfzWr6PG1hjM2vZzd7P3ryYEwHzG5r8ys2V",
  "key31": "LuvbLDYDiXq4yHHdck5YQQ2phpmXF7AuGDpjtSHjWDQsC3DhSzNq2UrFX6XQug96BkRD85FrEzSp6Lsu4vB8F4u",
  "key32": "FSge3DrNSL6xWtvUGedmLwuVScpSozBjRbj2SKCVJNdxBnMWP87LqpwEZ5tBffnoa47dFSW5LeEPjLGoxS8jnNJ",
  "key33": "2pzqoP4Dz3hviFSxP6xbLXMuv3x4CtPzB3NbfWSbjcEr3tEMZ3mpzAL9i11QVqbcwKmVkCUtUkrmzHqJKWTYKZxk",
  "key34": "26Db9zoGyjsPWYSmKTbkqV4kf6ZfG5YSAg53MUWojhtBzHnV9WgVUJupPq5vAKVeAVejt9vrDyGnRwp7hMX123Qd",
  "key35": "2xGhNwesn2gNeGcaL7b4diqv4JQjmni3ZqpHH9Yug95rWq1C6zSpNaGp8kfQzPXUjE18VH7KNMAFh2dvsJ7qmi82",
  "key36": "2bLHrauzTrKoruacwa16vBn7yR9QwWDUpbRveuoNv3XK94vZabhBTMbqY5aP5P7Y1fDt1kwfY13dke6SzuWBeu5J",
  "key37": "2dHwnLx3NG2MPhkPa1hn9k9pQJKhPhtT8QyN1qoKtoLHhk6WyeEKU4ejkPx7KPp4Fxj9kggPvfWLfcNWtcU1KZ3Q",
  "key38": "2jJbLLGiKzhtVnMMKmwNc6cjGUco8CA3d3sj2sqQ2Jc7EaBX3NZvzdukg5xCHGfh2wkJbdYgyLUgzGUv2t8DjiqY",
  "key39": "4z7gdiQTpfxdKo85GzDonCQB6uKZ1WN3MtQwu29hdDNNdPChtNarvvAWDUK3NqxW2tKDEnqzVAfUNPThF1djD4Uq",
  "key40": "3m1mu5LWBDMw6ZV3CMNNy7QVyS6w4NgJMGcVgVK25ceQmvHd6mXtFZhqLkw63tTQoapT7s62ZhWziQ9yVLgXkdaM",
  "key41": "DFeE5N7S6SoLkhtJpYhao9oximodYW6d85hxJvTY41Rz9k3EQ9AjquScxLHuRgrHhRY1ZbmUPB4PARiostFcNFG"
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
