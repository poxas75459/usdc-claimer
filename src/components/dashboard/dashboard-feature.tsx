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
    "5pzdaqdeCZTjgg585RaDS4KN5tJfNhhAeRVZgwh193cvx9Qz3dpDGiUMLU1XewX6La7kjcTLiUyMj9EhEuSXWfLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqQHg78Vv4fQSiLkQPwL496BP4Ka9EQrWZjDiqNh4KotBjgeNBojvAwjs8J3kxS2PQkSi8v5Q19UhvgYZMFa1pT",
  "key1": "q8UqLVGU4o2V95MKY5n1KLNw1DXbffKAKhyQBqThQoshhX2A2aDY1s4rLzQNhiRMtXgrpgrSqSLoa1z7dZG7ryB",
  "key2": "5mhSmNCpeCcvCStUoKjx3C1kEDDjpGjXgcNmYpiPD7K5q78393CMzRcTeXdqrAB6DvcmPSzPaQne36XW2eRpCe7K",
  "key3": "4rTX3Y24i1VT2KiFkMS37bUmumEArWbGqRnQK6SCuGoWTnAyHuWm5CbNJuYijfQ9FUi89aaHxDmLmrHMJdRgjExs",
  "key4": "2jvDk5TnhxrQVZoRgFXWT4W91xxyAsVWZqU6fEQri4FeR9byq4zXL65M4ToYE2BHqWn4SHPJ1dZvYSwk4VNHgmiV",
  "key5": "ossVcJa1DwWqDQ7N7zFXeFrAsFBzmhKs6tnEL4gQHu3EZaH1iucERWreuL6eRJueZDbMchTRuKfNmpCFRHz6VcJ",
  "key6": "3BdMm4geR3mJY5XZFfxJwNL76TiA2Qj1U8m21ptP15XppxtQ8tvE15ExmUWPGnsK24vBKQcLN5D2bQvFw26ZNknd",
  "key7": "3CRCuCqqNkoASLT16SkWdUgPYDTpG4AtFdizxdUxu5vaGoSUpspeopM46V2oqnQBWb3s3c4KyRwQReVNPPfrZpEN",
  "key8": "27Yvsu9i1jKpbFjEqxDYJxZU2YH4hVvF8FLZ977e7N5rejbe9Usqeynq3sWDam4874chhRuqVMJRLBSyQrCLNr2u",
  "key9": "54GgQViuo2vUvUTnxBEqSwP3zMhRmfrMUsdhPZFZKTGBRrGxcMukvhFViwMAadQNdZLSxWY3yirktwMTxBUGgKDv",
  "key10": "BHigJ7N8JiAp7zUWvEzfzeK9XPaafd3Kb5YnKVxyE6U8s14LmQwSbPrYxuVVNADTNDHc8FBbzM9ctxpXzjqez9W",
  "key11": "4zVFRgRYnF8CNUWGpJAvha3Y5zFaPRKFjUynjwMrDDna9MdBidMTBWt4jytfWxth1KoxUL33Wbhi18TsWJPYxE65",
  "key12": "5N5b7xVKNyjpXyspf9DS9DS6oRnZATCa9pY6MvMMmiv4EjMfPwK4ZYJ5WvjWHqvHBcKdBMw7AXerpj5hBu6DBGXq",
  "key13": "3TC1cEtntaCy2eMMRBX5V7qqDLDfFdPk324ptitH9EEb4W4heLZSZRxeySYJosnqje7CMeBZ1Uc1YVxhFKzKw6nU",
  "key14": "5NZCpu22Pxf5yEC3DL3cB2Kj3ZCwQb9DMNHUh8ocpKNVJzXkbPygceBWqfDS1vzKV9XcPrBVLFbVQrubH6nk6VFq",
  "key15": "3qHpNz4G5TMEjzjw8uVUFtuEgi8SYmovBM4jQS3AAKuzWHgydwVKvYxqfTB3R9pHMcM29KoPNfCT4aZEVXAwy8cp",
  "key16": "3EQsQLmv35zqpj2aSK2NwBHYBYnTL9VRaYzfGtycEQmWVH6yxgTX7otULbxpeLPTRvXEgLLCnk4MsbayPYeyEuF6",
  "key17": "wrz5vZ9pum5eRY3hJewqC885RRmLWNuE8m63fL1qFsJfRaZgaYCLK9zpTmMnKc5CWNAnssqWkjn432Q4skUyH3Z",
  "key18": "2s6aNcnFbdXxPiC9LgyyAGffvdk7s5wmKmwtcULucwFbKsNQQ7ESAR7XpNLmWg5YB7SXDPiXLWxNoxkwK8vfnFn7",
  "key19": "4it9F1pWHNSfqruLLbduU9xx6d9FDQ4avXUF13GWEAiyZiyKANUhH8LcDb6JfjKnJpzD956pX4PBCcuusddVXVZV",
  "key20": "2hGXrfKzddQmfEPCks9wA1n7kJZYPs79fusHc4MCWUvRNkCnovQ4MmcDA2TdopiDWAw45pcif2G5CWzJx9g1Rwqh",
  "key21": "LSqSLvV78g1sdbbJNHwCgSbvN9J1KHfZeRt9jk7XEpEV1QTnY1ryht1VHEQ7NJWqLPsd6PpQws9FsPkKtkQQxop",
  "key22": "5CxmD5XfPVwVqm3KRQNYUsdMCMKe4UEqWfE1GRPzsnssGijKmKSr58DM6xwsVffdnTCACqPJME5tyRGVWue1jX9k",
  "key23": "2YCibTDiuRQUQJhhuVFpdp5Fn6jLDY6EuTVSjuHgTq34PxPMPDMT11X4fp8rEAMpL8me74KxZbg6tTyzLZhr4bB8",
  "key24": "2jqXm3KzGkPWmB99BNf3ZoyvjnNCbazLkKN83ofEf3T1C5VGBYzKUNtNVCw1bcAyxkxstwfYQPAnmVWzs3DV1N6t",
  "key25": "5hPm15kM3Tt8sfCv53yR2E8utFfTwKuabSTQNcYCtf8ELRVDP7P4VsziYcUBi6Qhf7U2MALVjXmP8KjPRREoUG8T",
  "key26": "4vXetzkVRvrTyqnQkSAtLquqiHys4FWVbt163cMZ8Z6jyw84x4SYX4GE4j7mmLG2LG85eGyw4pBPV7dmASwoVtkk",
  "key27": "QuNnk6TF2rc6MeGZhYWt7iKwRKsomcRJuWYMnEPhz8LgWjjyivv7SeeJvAEoM7uLi1F2SURdNkD784gd3P4ZDtf",
  "key28": "pK6Q9rpK1oJj1kcMWDoizdUAFY54WrnbJAcBhYW5YMeMbuVokhpnKk2hbsuiFnwEqbv5xAqRVR4ceuqgK6zcTUx",
  "key29": "r1CuQV9sEgg19Wcyvbx9YpjE4pV3efN3JNSAYuyVyhDNihNZDGQJnCzkCaj3k1n6whgnepR62NF3PAdpQvTtYAt",
  "key30": "Q3vFFG8CstUchmsCegrm3haADx1HyEwkxMCbvR4hAcb4wqU4iPUre4Fha86YQ8wC1b4TjejSVYNUcFMeRJd9JU7",
  "key31": "4LkDJqt3TuL9D2UiKNYs1HhyUzEcAnVcP5Dj2rVs2xhrJj5UHyxnBPS2M4hT2bgPk5mVLFDyZXiSxftYCWqKGd3h",
  "key32": "4gAM6g4oZYyakbRWaM2niZCyshBEbBrjLThzYmxJ5voRsguNmpjHdr6SYoNyMQKC7qRxvEnEXhRiSC8QUG5ZGvFd",
  "key33": "3EPLD2Aiw4ZhJCH5sMVqyUTkkBRe5UQbtRLhydfpYnqtX2tqr5C9UTao9YVwKn3jaAf8tLc8FL4bEMNkasrvZjkr",
  "key34": "4HaiZA6kELPmdbUxrHRthUyPaYsMSQL7DCb9UwVLVh1gLiaWnkJbYWcDL73QhBSATSFrJjzwST6a69BVJAY9kfYz",
  "key35": "4veUHCQs9mSHTaU2cXibk8jtizE6BgWDL4vZgRSXjXrJUfyb6KARKRj8ivBX63azhF7hChzkpejb3DUcRPfedTPU",
  "key36": "67aUfxA8oGgFi6BvsFRG2Ho7HYTCGATP5s7iFUY9ViWi6w2M9xvP27HxS3auFyWUNGvU1tLsYc1jk5EsBsQXGxLT",
  "key37": "dfziNgwxHp82LapektcjoR3zJ4LeDxrxEPG55gya6q5BNcCQfeta9zGbn8Ks8uCxwD4LzNH8cjR2T6ugjNrUuPS",
  "key38": "48fYmy45Nxy6J7kRvi8rroDjVYQvc61AtPdWj653FsK38HpVbBjK6d2WPgoA5NQSrNGbA2uuPbpbFNpP9ZP1Jg6V",
  "key39": "3jtApGhoeaXTQbV2Ba1fAxBPgukdwT8dsBgdj85GCPtmSAj7YEQkN6hxgsucFLcL49GYUDaEDhUW5gcKM8CTkUfd",
  "key40": "59qjmQ6F6wNuLf81Z8UCtPUyrdDwdUfBWq3zm2vd6a8s7sJqVithttZ9bmfuiBcpYCJ7jK1VnEv8AH9K1xjFGVUh",
  "key41": "QkerJRJ3eXYEns53FifCYja4vSgs2G1onDdwRrEUP9xTedgZNsjoJMmxqU3nXHbLqox1beSUM56n66fD7M5J2DZ",
  "key42": "3Ekkpb9i5k2XnhXX4WsE8cZK4D8a5Ew9wUGbitYZ3VCtgxhdgDnRpMoXksxkydBfFXdFWaaa7ouU2DBVhhAF6ErZ",
  "key43": "2xXMW4uohacnruY7rm8yEx65APfCJ6Wan7TJk32PpZQvTdDTPHawX3xFKLE77Sq1J64DyQyeHnTsSJ8xuQvgS61k",
  "key44": "2nsf1iyZSxDaALjCJ2daMWrmLNBVZ1VpZSQ7emLyxzkY6XL523JH7eb8CQwwDaiigBakETErehrMXj6aZXRVzBkh",
  "key45": "8AmgZ4xsjHahU9Esby2PHY7Gc3RZwStz2MFQtSkVowcYNBvoYcMqeRJBNL1A5xjHR4Y9noJFQSZoZygyuG1TNWx"
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
