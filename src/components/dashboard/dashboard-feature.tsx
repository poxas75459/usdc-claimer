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
    "5rgGejoZqCvn91oFgYSwbqbgqQLAqGboAAGycGHt7bQB2GgnPyAJX5C1nNPvXCsz7vw2e7vrNQt8NE6WffWEMH3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L9JGVeq5w8kp36Eaz2Y9RwWZkLCGicybL47LZYqiZjKx2GmqGjyhP7koB1CVuR5MSrKav4rLfu3ebnDKsqdFZPk",
  "key1": "2BML8Cz8ZUCzvZ8e5hcDJP5bzjQWwXFTZf9XGDwVeD9CpHpQVZEqbLS5yy29APwJhZSPftUf57NHURBKBAMB4ZZ9",
  "key2": "W4R29RGbx3Buz4DiwVA8NdNzc2t4Mm5nCVcPAQQfgMLMRLrccHDYiTc31FxUhgfvb2wZJGJgc6EauLZGhq2wFna",
  "key3": "q2GVqus3EKbDi4SGcExb25vtKhs56ULSq9LkHeDS1WAEoeNKMRHkkAK4sohDtHcf9ZuuVJopTdSUJAYxyitx4pe",
  "key4": "3bETWgtwFXujQidim9cmCZ7XZwVpGdxe57H5TEXC4fYVM8UunqrTdt7HYpCqahbcZ6HipNCcymPCaMVQKzW4ySif",
  "key5": "2NmYLuuUEqLqo73G626X57e7VBCWhBSySmhz6tVhBew3rw3GJqT9DudW3fWG89pSNenwEnzifF6NE6R7CMYk7SCf",
  "key6": "2uBNtDurLTsjiYjWZWJNZEtLcvbNSPSpEehmdEQMPc3GfwFsC1Lvj78eVAWwzVDSeQKXinGwpRrCmUmBaomSLkVL",
  "key7": "5MQAdhi7huuq31ahT4NpSCGrw7LRgVaNaQJ3rVqGEUuts5Eeu56Qe2QR6NEYumJEjTdZFra1cGZmeNCTipZCR7TH",
  "key8": "4xA7XviCercb6xK276dMC68htbyrWoaGJ6cd9k64fZsVc9wjaaxA1LA13DiBoTuDzxzkrpcpK2AtrHojAbGCBRuM",
  "key9": "5VsQrLFomhPbtqCF6HTx1aasVcPwKRmuVN8d9HrtTeLJGsEtV7bfBNhaPQx2LQZCT7borA55epwAP3uSW7tzuZZA",
  "key10": "2oxVs6id3dyF7WUiAVN3qaE7VtW15gDm7vBr9eZqzh4uG5pmWaKWRCApuxPXkhP1gwdTkyd5MJxNLsDogtFJaCjq",
  "key11": "1NjUQbtaBcwamnbTbFQFFdChmaFRDrtCZXiarUPGmpFbhgAwm5D1gJAF4vVCcwqHDpnCNZZtnpPnXf9kednKBuy",
  "key12": "3kAKgdjBxNeSvkxiJgTzjgmJppwfremtk5f1X3T3pF448XL1rZyUvtj3JSrKq7D8KzN53yeijRWPiMJi8hBY6pYP",
  "key13": "2o6EYvgJJdhVgiFxabDKGm8dcrU5RxJsAGvxTUhrKzh8GbTDnkuqV7BNASzMGdqQVFHXW8X6V9gSvPegasiyeP5V",
  "key14": "3znqdqqjjeQctf7gBFALVKGDSPzGU1oVtHtSvjQWxA3ejo2uwbiqsHwqMGg6DfEeQYb2GGcKQXS4HeFKApuy7Adf",
  "key15": "5Gm937BAzYcXgGqivaw9hnMMgttwiXLjeqhxCTWNqXSGfhcVWKuizGUUQHuHxGiWPY4kMFkTACFxQWV3YPruK7Q6",
  "key16": "57Y1WKXkhB6oBi2cwtnA9rqmef4zYWnrTw6rewLb9JMwGF3qb4iiTSmAL3UqmuysmZnmQK3Md9hnqAzHXeADEG54",
  "key17": "4KsECA7hkhaNPzheTCdKf6geAPvkAXx43v4T7gkvpeM3zRCzpHA7RAmer8oLNPwHdnYnXezdzLQe9ewcBLvxkTbK",
  "key18": "5vjtL13RujawQa4ZkT3xNpv6ypRPiDEW74a3Qaw3VPY1xdoW85TAemxUMMvyqNxCMvuD9qXmsZJkoRiJN8joL3Bb",
  "key19": "H6yLDpecRZNcfHBDrts99EinfLTF18e1cUow5deuMWxDfYbPnPoZ7ixsRkX8Fc1gZSSZPW2BLxVXyod74rS2fnp",
  "key20": "42q6EnaEcBavmCqpDWbicTEfjUcgghZrqa2ViZp53YthxmV3JWurKV9n1fj29CPWxPSfdaKmhAuDFyu8A7iRwKZB",
  "key21": "5GhqrcmJ7Ei7jo53dBggv4ENQTVAb3YwtYdRhaqqBJ6UUqt8VXTnVrdJzMx3NCtKJAAALbNPnSpfw8EZZ2auXmfo",
  "key22": "JZyGyc8cosEqRGA2bB6SzqTuMKrnBqigvZjwzUrs4w7dfAV4RaPhF3qJpS5r6Nirsk39wipxTuYKPjcE5wLG73n",
  "key23": "4DKDT8n1vLfSZBC9EeACSoNBP8hpmfFjHUDiJ7cCnHWE5PsmABxVcDpTxj3e77JL8A5n9sa9NoirRyQWSEyAhNNS",
  "key24": "2wbwNnz3gPCnhBkaagDvfgnr4LiUyV4pwtSfxkDV4GivHVUnuUrPmfeTCkR6Q5rSHJq7jbB5JSEEKS3kdajU5QeH",
  "key25": "3fZAroxnWnHMdMzkGVNV4tsxmKRG6e82hVhifwLRRc4J7tKvnsJsHBS5zzrkiCLNDwc6v36AP5XjvG2QBACTBbPx",
  "key26": "81astDLLJJHAFaBGKyeu8LrUQmJiPrCxVuLTto2uKZC1RSMCpoarzAssUbZackDCyLcEpLxurtqQnnxzEZMiEdw",
  "key27": "2fJrgtrtxvCnVA1MJUuoiB4KuifGNFipZekWtimrNpNoZ9e4jHLrzjGEbYgLZ5edRSxfSNBiATFA6iVWbViUTuL1",
  "key28": "R5KjvYyR8B3UMvPVmPwCLdfpvG6o7BCoQtGAsDxRbku2dyAp5eL49f3NQACMs4K7ptPLQeAGTQC7A17z8mTRWj9",
  "key29": "4pepHGZ7gq9Xb68NMcqGrxk17z7Wy4hwZ19vmLhj6XEeciE9vMKZCzFu5BJnqwg7JJ8n8xgrMbEAH9Dv3Ku64uip",
  "key30": "54tkpjoREiy4E2RLQ4tEEWNgrnBBh9PE8sUTBpmbkBWUfzxzHkUybA4abf3d5cTLHdSizWVcEEGvBbuYVhzhdSt5",
  "key31": "GPGwLeN3H5sDZNB1SbV1fkm538YSFN8Uvt5SqKgR4LU5LLQTzrNPhvpmJcQk4xN1LoHhGcoXep2jPjCWmxBaUzn",
  "key32": "5zmuMWnwfAmsFyqAjzEaYrqf5AHuvP1MPZ79Vjz6rDYq9GHEUKLvnEvvzJmabGHUjkwbcBpTGw9HhwFg9DTvndZ2",
  "key33": "5bJgQWAfer1pSM5ErKYXVpHXG53SMi5TY5VytDiKAG5KvLZV24rQvFt4p9EUTpDHPiuPAMkGhTnFKJwhgHeX4rY9",
  "key34": "2KdoBiN19cT2iSbMMe8CeC62y7xY86FKhhzyKYoeKBpiyRx13cvkyCsvzL6HKeR2uWHfkVtcj2rjMQj6jfXx6bjH",
  "key35": "3i9PfmmYVCZQcGyLjeCQjxAfHRtM2aouwCcad4orzw6bCBvFX5ipyUcjFSWa1rJ1sbaJ4qfmDE6q1CyLx1khRo6K",
  "key36": "4Fni9v68ipxKSk8J1zjpVv3KhFuJuiJaVkmbvHAWSerSvDbuDj2TYThj3DdXkRWcADUbmMyWQp2iTzcPmJWzcgon"
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
