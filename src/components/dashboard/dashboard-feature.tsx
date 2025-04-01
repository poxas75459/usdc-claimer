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
    "3BfKUtVBasj6gmu4GXHmL2VftXR7is4wmV8oJTVjfpdFu4HK2GX5QSNW6q2SUTUsMkP8CanrwXdritiXp7VcBBiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzcUpB5ZiV67inXNx71hdJnCUBzkaHaHaiLZiyHCoekPxvk17iZXfD2TUbsxs92yMNbfiSpswt2XUET1uG2weKr",
  "key1": "4B6XkWedeWqZN5JqQBuTM76XSFyerAV5LUCHNZTWPQqRCja1zCvz3Wper3NahVgq3jgwq1UuNpSt3cAtxGR89Syq",
  "key2": "23Lj9kaY3zszC4kaoCR1Myo6nZWbCtHwG6qGPjXeDFYEAKG8YnsJ74kBHFdQ963cwWkSsibzo93NuF5nBQPpjj35",
  "key3": "3kt8PQG5caYzAD8gwGbomhoDBhVL9EPGNdTjuesWJuVg2wJhQq8fqBSx9kMBcqJpkde8GJoibmVwzRxmtUsSTgor",
  "key4": "56UhFx3PaRAv2h7UjP2PSPfWNveKjgthA7kCrt5FmmwQjxXPiW4PZ2CL8Lqnuaihkipcu9E66XmCWzhdAHLrp2EU",
  "key5": "2mY2mbAFLRtYqDCtHwRm1Tng9wop8BXxk74Cm7EkCMyKwtvcZ8DrvXFqRLLfBtqtftr3LXNK7FNXZM93kMHhnma7",
  "key6": "sUE45AQu3cuEWY49FLig4uixxzBQ5ZkQHKSEkPe9rv4G5ifi6PUtdFjNP8SxUuJbebTE3KsNumw1h1rSabrmAXn",
  "key7": "bUmuN8JcStjpz2QtwCCSMmodSUQDpc6USBD25DBsrzihaXX96FVJRquBXfyh67npwFhMT1zUbfPUnv6hUEeani6",
  "key8": "4KyQz82HCUTYu7ZHkg5kr4Ct5meoWnY2dyKNLEazNTTfANjM8kF3qVDymbw9UEgLcCsnQV58wU4Fa7ksAkYNtM3w",
  "key9": "3P24X95jUUtd5LTvZNMSAZEJ4bYA5Lf2oYDnE8uNVmhwSsYJPaPmN2FHhB2hobYKRjfatTGxFzKReqips95JBEdR",
  "key10": "4ihPxwMLMqAUzGwhz1otBbMoaxiscmoTsQZL4NNCqBhSafPLwANAZxXtmrKfwC2QLeqbnKHvMCxWiMRVYLj7nRNB",
  "key11": "2gv4XNvoEnHPjHqdpo6YeeX1w4gR2B9b9QS4uoPZf8ss2hdgE1qW6xkKDiMCtVwK1kGSBnzio5sB1Qy76Xd1hBkD",
  "key12": "n1AoXVzszrqD7rZTAhyoSZwVBUjPLTVFEQAu1K1k5vpkAwwY4ibpNyzghdsc46m31DNBZRyQWHT8UCJsKKQzdEx",
  "key13": "3W6E9ZFKx9tf7tWGDXjbyGMVP6wWMVvBSEVS9zWv3YWBsrnvpDFE6bciUFWcFGWJkmnqzq2BGqTUByjAjP3Y7dXM",
  "key14": "4t8QWfMDJWPADmvT6WyY7brPtSnGLj5dL38bSaAUeGAbUHE6XsF5VSkn7TCvQpzS27fHZumpLj7jhacMjC655zdZ",
  "key15": "26spot5px7THavQWK73FB9hywrPQuCYc2X3v321LQP5yEjKVxwLsxxjFDuVryxaYHAfNhmZmt3JhKhV6kkkoCHgs",
  "key16": "3KiDFhnR7iFDQQnU6YzUQ8Pgur633ZaSzF7iy22iddWKe91PJJAmFfuNMTNXGL8F814JJFKna5zhLq4yYzBbNLJc",
  "key17": "2HX98Y8xsFJVyVjfw3v5T1grfn1Biz8Ja8WmxJNh8nfFa2GiFJTqxNemJnSnKgGuw6VEsJGKYVKzjbfFUsN3ed5j",
  "key18": "44NwQDbRPt4TEABz5asRyg8fsfVjYrrULwBKReaCPKpJ2szdYiobtHCwxSNqokh7Nrxc8CFLEpCuykyh2MYBqvC3",
  "key19": "4d1J3LWrKuHAtRazkHQQaQm8ioKXN8TYace9KXzdNewGL6BNdMLq3REnyf8q8jhMzK8zSDhkMbfph1xXz1HnE9zc",
  "key20": "5ZhgsXFLN2PDqS2oSAVEEqxTapFih1b627QK2MBNnDV7STfATpo6RDU7AjLJu2zUzh1Bdwi3R4aUFaLMwrnLody2",
  "key21": "3zfTwJsrgrQdJ39Y8moyfVqj7SaqXgeEWA9CsfpDv6ThmC3eKvVUTNc3ueaAVdSm3hZceEpdZcQmZjCPLiV3gdbt",
  "key22": "5asB7ZjgAF5f5TAZEDwMGan4pUwfH1qZCrkbD1ghKgdmYBYw2QcHjYfitZ2GuBi8QAv3L78F1U31j1FzDyLWrFmz",
  "key23": "48SS4StzMthQneBPEc46j7vB1Zjbh9Se1452E7Ba5AfcHi3EzzRt9yXrczPX1HXHQ7phEaYztFQNMREDVrTJuFgx",
  "key24": "2GkXt7yDAi2qwMC5Y8kdYZ5jGCdCypz5sp4exrNkTisojMFceN8C7VnyT53RmeUAqWy19d5WZ6Huchm4pQjyxqXm",
  "key25": "4L4hwxXVmgzBWyWW7Cs4fthTJ8i1z6qLfjJpKmsX3Gx2yRhxHeiWQUFjJRJj2odPZp8N3w6mYe3oaj8k2SzTAQzy",
  "key26": "HuEAuXc4ZTaEq1bQKGXAwcoRFL2ptG4oDxBXjREgM4qV1oTNcKU8bM1uz1WY2gPunkfHL5eAcYzuvDwG6dbe2sN",
  "key27": "2C3kwRoXMkkMdBtUzoU597DU2oFEqpADkqbhkS4FB4WpJEeNBAZKSqhk5WQLD2mYGuvERqbAU9Qc1fp9De3wRbzz",
  "key28": "3Hxco3G5CdREnVNzXJse8vgEkkfJTaBMi5QEPaEvfVik5temresYULKxMxcfBpmGiCmuiLqvC5KJ65RzqpEgoxDT",
  "key29": "2EYVLEQa2S6zNMTkhbm893TdHngjzjvFd5ZhjYavf2KM975d5zPHUeazULVkbepfKE6frHAoHva4SHgEYZ2wgs1n",
  "key30": "5b9aQrPx9r2qDrV1b9X1S61UQpM4fPXRZL4ff7zTM4HRu5tH4B55Xn9FnDAaxvtEwjwhdQxyWFT4GW1amxQ7S1yf",
  "key31": "5HTZwe9hZYfTcK3BvbhdDMdqFvc8amiQ2raa8tjYxrR1FKMLHQxj1sd2aqwR8YmmpvMeP2QcUMUSJ2qGS84MWpw5",
  "key32": "1GBesfu4m8qWV6dSDZucKSxbiC2EJNYMeTK7LFy9swbJVh3dUy7MTW4E6ErzYm1j9b6bnr9S9NdisWXu5Qf3wa8"
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
