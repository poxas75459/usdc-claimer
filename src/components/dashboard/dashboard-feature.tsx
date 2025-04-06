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
    "oHk834e5qF4X7Wpj5r8tEzmPmLNLgMZkHkfEUJXMgEe46xYnUhZ9DWAZKCuUBGvoH5jna3X2qsaNU1XghemNzae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QsMLA8YfTPFtXrzHEeMr4yj8L4HJPXoAjj6P8M86cshgWqeLAECHPi6qb5MKmyK4YeMfBANn534EDy56bqRsm28",
  "key1": "65JbZSJhTWHCMWbzG2swsgxuocY5wPJNhP6TqBA2wNJjxupWbJgY1HoNR7wHEaLW2nF5SkfUFE86LnRmckVmJofw",
  "key2": "34pimyvcHCLe3v8HKCR6VCx6dXRZP49oEMMMNMwAdfNteKzaLh2fSWJJwR6gU8CoqiFLUtzWEDHfvAGBzLYSgD8Q",
  "key3": "3zRQuyxjhuafcTy3qJAxMxRvDBiG9ZugHAKRdZL6V8kDiVyi9EYCCAGsTQPYWnjzZP1Zqtn2jtraW2gsHe2VzsNq",
  "key4": "5bbDRv8knWc7rsgf6X6J7K8cw1bijLWEEgtcAQvt5BjoxiyF7e21bHioNvUCEwFpQexVt8mwDikYXEV6gXPG6FZ3",
  "key5": "2UUNYUBBxyhHSTpr7jDdHhkLxLYoXGLsm1A5oYA1MSvQng1F6nTB16ws81G4m6zDjp76kxzX4CYL1VqHPTxnrFyR",
  "key6": "4MxaVXxhYrQhFJWEhK4AJATvHrnM3fUqgnrx8a42ZeQzp9G7eYYJmweVw29VaYpx956rUCvxk5ARTLxtZPqk3ePs",
  "key7": "jEepCRKezL3TM17QbpPsjGNCNAo3vdowjT3zoo1FkaiiYraXiDizkUQgFrgDgUbC9VJhSPJZKq8acpNpdNR9zB8",
  "key8": "3bQ1tr1qU8ga2Dd4HiDH4ATCnZtZ16DQYCGqLEFGeHfrJVoERDDYihYiNpb2NWAT95f3stFT9gm642kYFvRkRrUm",
  "key9": "2wAjrFk8Ry5YAPZwWGFVVCEYF5FJi7uvdotFHJwW44XUbrFjvhQGnFmyC6fWGqJG8RnAveTUFP4X1CVMh1qJhVLE",
  "key10": "4ARZdynmtfjGmWAgRQLMq23Bvwk3MiMkaG93ARMLs2T9zaRuegDa5ieAVRWfJsbfpvzyGVwzQjFh6DSdP4PjBDAv",
  "key11": "2JxCjjaekruU7BG5vZTPd95Haj8s6YxUURxhJNWsUUuuRddFzr9fwvPvShwo5URopCjbyM6sZY4wFjUztaKjeJuZ",
  "key12": "4DwjmuYPH1nzmvZg41HMhdNy6zTZ6cfhe6VNf1QrRM8VbeSdoYwDX6J6hL7WGAhYzvBAf1Y3ggJNj51XzzFxraTm",
  "key13": "jhENKUTeXXhU1fNjMFWHkm3Jd1nMXBsfD2MAJfQK9RoB1bmybstTnLwLFfeUD4x8NPjuWuRjFxHAmHYSXMgavso",
  "key14": "4pvREn6GAQUWnNpGtQyLWeZEynnpTt94tyE6kRURAzZkT3oGmYwPEgXhBpRbgSENxSPD2paKajP1BCHQiyyBu21t",
  "key15": "2jve4BqngqfhRSQKs2h73Ahn49zTB2c21RS8GBxJxiM6rstEYF2PDDcRuj7VqSVo2yUvAsZYAHzibqg2uDy5rpFU",
  "key16": "gegNzv8SuK9K7QMqLKpPmxJyXdcmswnEdZ5iWiExQ6M5WH7TbAywcZ9ZWzd7MMGbgBvnwM5DCynq3wKsT86mZ3C",
  "key17": "grUP7exN6mT5Z3zHFo9rRTyh3pQeyPcoGgPb6aFe2Jp25EBEKsRZP3GWDH5uDRyCNxswnLK3qZK1AoKY9DR5au9",
  "key18": "676U437R7YHLnKJukLkbBj3G3JJDfLBCFEgbwvUYzEtDUEW4n7uhEb65sXjDqfDF2dNN7rGrN89mHa3ZGvZSNAZn",
  "key19": "4XsKSrhVoBRQBUY17kMz7BCWWKfPn5yNJ6uwZgQp7caM2P8VQLh1p64U5BZpqQThbK4mmPSFPfZGuZwviJraAv2R",
  "key20": "46BDyEawnw75LhvanhaXStTxEBC8FiLvW49bqKGp7gqw9md2sK1qUeybDAf9M9SarTW2d9jnYo1ASVR2MNTAVcJ2",
  "key21": "9ME9gsED1ogQssHyVbWgFKDw8YjWEAusJ4L6BwEWiu1r3uGLqaxgdUGiuCa5TcPG4rEGxwWv6APfzY7jrnWWYxk",
  "key22": "4JW6nRU73G1ToL6qZtx9oE4JHA61eTN7ojcJ9umBnc6v5cBQCNc29XM9euKDaytcrW8k1GcWeHBYNMTQbX49UNXq",
  "key23": "EPMXK2eGzyvJVE1EURitwU3Kp3wtq3KdYGQiiC8oNZyLc4UGaR3YKvGQ3aRyUUge9W3WNFujeNG8aw1AB4N5LyF",
  "key24": "3RyZe3RJuB6N6WcFBSrun6xcw9vzfhiqjfXSxtVVHoVYGGL3dP1HuFsoZUA3MD1cNPCKmUAic2FgJaz4LpL9XT9U",
  "key25": "4SB7mdrBhx4tDT9newuH7ZTSyfpuHKGWuVTUPtSpZNdWCZEwK5cf2JcWoTZArWjDof3Y4m3QDci81mDTZjzysGQi",
  "key26": "4aiAZtj4AGcBmZ5ZM2xfNpj3FU9nfKF5R2BdyXUrPm8E8Sd77L5X5zHXLB8ipCeiHEGb16MEeXTQirb7MdTuw8RK",
  "key27": "mBJGnmumrkRmSUuW9hdL2sts39SBqhFkh7xonbUkkWHQA4EL2pKFaHVusQj92PB8TRohK98ZRf8kK1BAUnSQeJQ",
  "key28": "6XkKDYs5MaDRVE5DffjrGapt7PUoGZavQcjQKCUanoP9ruusnhiGTy3kqsPVbh5M87WKaJzNJqoeUG2LBTkgf7M",
  "key29": "H6cwrdc73RfQPoz1mGmQuSeEKhHmKnGqRc6cfGMAAUGDZdQUFRzAcDBabzpvRBRTAYWgpBLNA3vTk43tSB8pN1K",
  "key30": "5ERa3sHo83MhmqKCTBHFsJdLnbPPGHSqUKkcyprpcDWQLWREA6KZYWvWfVE6vihCDBBZkKAevzTWfs65s14VfYr1",
  "key31": "12ABpjEvYg6R975VW3Ea2RK1VZHKowvk1eCCEBSoL2hbkxcVcfMZEgP14cGAoiX9kQhkBXR911KNcSvKAQtCUEjC",
  "key32": "3iJTNeBUk72E4sgYLtSRSyW65GtRWWZmewUUZUbVngRksiC8sKqWKGgv4pcktmMS9UDn1WHeAcTVdNPjzJQJ49iZ",
  "key33": "3HLVz4p5qF64hBiHjTsgkmr7eBiHWHvPQtQckMHTL1EuuFQbGLW5qvQKZZtr7LsS3j2Z7piXgK1u4BbyHX2MoTbx",
  "key34": "3nGgXEwqRGZfUSfNBSsWaQUSFnXT4Bead3GV54VSxwCJaDNJz6XNdTPuxPzNbwMWKhD1QwwnGvFKDA8biKwL1qZv",
  "key35": "4aSgBgoeUaqmHZdMbh5eYyx6JwRECt57AtGM43Eb24Srwyj6eLGuXb8wWqdwH1NNvLCxcwPvXjK3nAr4PASLQXoz",
  "key36": "3wAT9Hm8wVXefpVEP1hrd1HBJn2PVwpgywG4sQLb9mCxWvrszxAHGZSN6Lxc2H5bHNiz2Q9Pah2HzWwsoME6Voua",
  "key37": "4L8jk32jVok94Xx5tBgxaGfxbroC1LfVVaGqx1gHcWJxcNHMM98iMpsV6mwc6da7rkxYGoN8jNbLfKimRwhBVX4T",
  "key38": "5XqYpP3fNXPfhD9C7uoiX32xTHahzfijoRnVZjs6Tkb23p2h48s7rf9hLjdMWLm7wEKsnZDPt1ZGCNj7pMmVGyGp",
  "key39": "4FD9KDsGopR1cSSyHduKqW74Pof5aEYWwW5T68xAdHN3waZkp9RnBKbejpsTe6zUAZBzMVCREwePdbuPTEmbKb9x",
  "key40": "4CEkMUaaBbsqDafRk5EfR2JfwptD2oBmxM3unzi5RBd7KWtBL5hPgwcTobkYmHkmrB3YqVvcuorTPQpf4HNrHDsN",
  "key41": "43cXcEDLMrK8dcyouphoiWsXnhwVL6J1GfpJ3Wjz3f5NGHQvvXmxMSFpk4epKTB8dVn4VcnNeGwL1MabsneGuBDq",
  "key42": "2p5yTGgjV9LWNF4zzkZMfHD7GDZ5bCCo1ShU1tejqVbMJhQkvjZbBgMG6aCybABPbcbtRQGBzRi3bTdZG6n1BXGn",
  "key43": "5dbPPzber2YtfCA8PxBBoUa5pnqqXYNtWfTZzeke2v6AJiYazq7hxtRypzpGibJMuJRss2RPKoD8wbnik3TzwTic"
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
