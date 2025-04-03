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
    "4RdVvKYJpYoWjhj9UVtrmRbuwLCg9zUMMPbGuF47K8EeUKcZvWhMmbTteRQrszniaYoK7rzU5N7V8Ak4v9VjFPs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZTE39bBHJpgYUJVnv3p8TiWhef5GgQXL1gy1VyvNMJDxj4sHYma7TsQnKPpgwkBLXzKEmwLjmRSVj4K7gKMKAE",
  "key1": "54Zk71LTwZiMo1vgYYHVZuUSFdLgNvdkyDPtdn64tJNyk9XmafyRpUysf9PxCVPUkhhyn6QVkqnzSy79cRAf4HcK",
  "key2": "Rog7E463gCUJHKPdsyTvpsARGQfXwCnvFA6LSwYBxiqX33VFZegGYnnRcmMwsWCsqkvysYpbddN3XPL9vP2gdbb",
  "key3": "3bHuS2XiMdCLKPVCnfzg3L5NbMMRZYABxz84FJ7kjC5rWjL46q6sboF4vZsRdP7ZyDoSpDGtbPydHihMkgpDHSJa",
  "key4": "nvnbqekjWZabUWMDMtXjrvFcwDZZbE3T9PT6MYV2TzLHQpjouYukATKoGkzj7YiJSNampa3Q4xau1ZLUEAQdeuH",
  "key5": "52wRUT11uZfWQUFNwByZceKNu1vrLFSknb1KoFBcs2ypNvC5bvrsrKYQvaLtVkZD52aeNz9CRxqmDdbreCFkBpvm",
  "key6": "2RkPbiaPQRaDrJYZkiPqMa6zwwxNxWJbDZ2KuwwaPq6c2hucvcKqs4rDsx3HGytCYormGmLQTtCqsbZsFenbq3wj",
  "key7": "XhTWVwVzYvYzQ6FZWdCHs5WKBADsWDWboTxgZtzb4qvKBixbJWMN9zajLyxBHHw9PUQYKcUqcBRiYY5NF6f3ozz",
  "key8": "3eejMhQgCQei9FYASDzJhKnRAvpWYZ15zLsw6nLoo7dcbmZCqWdYCqyj6ihCke41QHWWKGcfuJqkg819ZfGhbM2p",
  "key9": "4L49i3BFP8KGk7aSQSuvUcxsTPQvEZDm75hHbMy1C9jMFKGqdXnByRwYYyytDKM7CrYmLyNvXkQiBEkPZfEtfHbR",
  "key10": "4WKK1dTvcJwx68SkAjnHXdoXSgT34Y9gAWY84Mp7Q2jaavxrNsNsCDxU5KpNwu5PVCsCjhcD6DBkaWWCaqHSsyXf",
  "key11": "36aWtj1mjdZRNGWi1iaXhmPooNpWZwvRghWP1BqQSY6xNFqwkcAMEoDcaxuAQV6PouqdW8ezTdJkhk8Q2kb3pFWR",
  "key12": "3Ftnyfxa9ai8xvNGq4daFTobsKjMCdPKKq4sjhBrgWjaiLkKXXrE1LYwYKQjVZ6uHgXs6EAAEfNWu7dYjZxe2Hf4",
  "key13": "666USZZfDHnfHnY7T9fVtMnvrKgmDfsgSc7vXds5Tob79yhcLJiMgvo8HyZaa8tPGNp6PjeFD4beBXdCAJJ7K6K6",
  "key14": "NL3KcpibGktop2918qXW3g6ik1JAKD1zEF3eo66oHbEXA8bmddpmNJVaZkRAEuTKaD8pviMW5ATKTeumgq2Jqk2",
  "key15": "3vCCWYQoh4zy2aKHGtewABEV8fwtreyJkbJ92hXUCQfRStU1FRTtomyPncBMhVGRTaJfSzK4BcLbuEAfXuZXnQY8",
  "key16": "4cniuTGLYUv2eVYbyahxf6nVWTTBFxRuVzyvQDTbtjkdnyZPTB8kiPhJP54R46YUHQqD2DHvbY2U2FEJgncxGKSB",
  "key17": "2XcTcysyKund3vvFNnTvcwwYsRnSz9pQWr3eq5LiZTH2bnqzCkbxDGoHWiDvAYy9C9coTMZ2TF6xyHxNsaYLdtk8",
  "key18": "5P4assV67tTBSjxz2WeKWG4SptPBiMyWnsBXggcUqzciPKGnvcdCV6uT9LVjGoDpCr269t6T1RviTKUSwBJrqpmr",
  "key19": "3roepCd32gPW51TpiWmGDxnveDDiNiGMUUYhghve2dAqWXUBCeTcR9ZxCVGk6MvEiwCZCG7JwicgquMqUWfLV2Zg",
  "key20": "59NH6bvfX1Pk7EYSX5zPrV8Z2rkxxX7eM9X8uViYMCb6qovYAcmZWUz44iW1bdygvQxnrozVaV659MwWaPbsrGGL",
  "key21": "ZdBaYkfBFYwk9mPxZTkxbfFmrcnjLMLubsRbMdDm1b2iST3bEyGex3EZeettRRm6qkb52p1e4Z9sSZnoZJksLqE",
  "key22": "5zMGBtMa1w55TwRMgz6XyK8bgrD8ryqX1iw1GAMcY2BbXVscZPS6czr6Zn8e7ZyyYxWmFQhSD5dyJZXEo6yhmnyT",
  "key23": "4HK1oqgWsddYrDwowrLwmXNW8cxw7HN9UCqV9CqR4kWwd3hCSHSNxX6civTcejWa9mYApeaTUohppxGtgJXav1jt",
  "key24": "5a9jKH6yBKVQVJSwWHwgWHgoue4QQJikg7CUWk4qfnbbAxNyZ5vN9ogk9RZuKFD51QskDCPAmN6RUxVrcpSDbMxS",
  "key25": "3yjoPiVbRrebrjQPWR2xkU9hFqikz99yGJyQDh8npUW6AekBg3uR7qBWzXw5GAeWfZBZ7t7YDPFM2KNEgTQFB71Y",
  "key26": "4ptaLurJXMLxMKyT7bch9yDdio1mLFkQaJi3et4sprJ6YEvXXQaC7rJtfrwj4wPtEbr3m8ZL6KSxM9DHPqxegi7N",
  "key27": "2yaKgcqAzDdhnJiwLaLNok4uvhrgYoJ6UMzGbicdV5LMfk2Loi3Dkmt4vh66V4QwedmWELKngPRHiJ9ptBn8ZD1y",
  "key28": "4qEVHn2SXim4EDv3VdVbmYAszJSSZFPbTHRX1KGUuuECPmGtBfwutWMmXT5LD1gmDzWHZD57apUExfnpgoY9zU98",
  "key29": "x7grR4h53yy6AFyseWpuCK8Qw9q9s4qBnMxomjeWZtmWQHjasz582Pw7GAhaK19Sj4zDBPExXEBhm2gEmF9EiMq",
  "key30": "4LqXVKvyCo2qiztUbeuAssSoStbk9dvVKqSiweM9fZ4np6u573xpnygMVSNwkWVzc6kwbZNPrV4q2eQ1tZASt3Kw"
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
