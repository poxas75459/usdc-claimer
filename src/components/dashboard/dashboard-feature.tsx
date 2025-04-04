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
    "3N17jjzJ7to8EfHY4MyyrYLVTQyPfuhyYwvuazMP3BgZqXp43DwuqLe2RfAurNZauypL2yCJoG2sGbKfeLAyEpFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43c9Pq1UnykMsAk2btq2JRuxpjZwLEEcfebM65emxiMhcN8RCReFv66xKWXebtUCQQEgdqSxWktyUUnSXN7WFPC2",
  "key1": "2AxfHPkCLrwDu4qLvrY4b5DMRaeceNKJW8dcHGwA5TgreUkK5muEtAYrdpAHYVJNFEQqfY4Wrvb77BPCzh8KdJLe",
  "key2": "3Z6FYR7DCL8GwDH5fyb8nnrXT4PBWfEAqr4hznveCZzZNn1tEXFjdwXn9cfk3dGoEunKkiBihbutimfk4oePXeLq",
  "key3": "5Ls9ndR7rLfVRNk9HfSptUrbUTbJnBkpgfvu9HTVarSdpv4kiQS7cQFFaZHgvobpP3A4HfoSBG6xosnoM9TwoCd5",
  "key4": "3ShXGLHYDwGmdhgkCkNSuZfQrDbvE2uVACk3A1z8dx7w77gu4tikpUh2TP82xcrinPKE3mXcW2JCTPLVmJtKqA7G",
  "key5": "rn8PNzu187NgqqGW7U2M3fpo916oAWzRKtRKpN6waNcXjYzNWwcsoTcyhkihhtL4jc1KzydXkGV2AcZqfo2quab",
  "key6": "zwQo5y8AqWuYV7zbAzZTpB8qSPuFPo7bkGhU8ttwe4Sx3ecdqEEyuZpVagz61DoKcQMUq565cf9yViPM8QwxAHZ",
  "key7": "21TQp9VyVjLkABSeEPn7upuvL7SZUUUbnwxm4TxYncw2S3cY6cgwoCtiNgXi5M7c2EhH4H8j4s5x4j81KweDy8K7",
  "key8": "5zvxeKdCppkTyQk9NzJwt6jAndszRBeQK1P72XafTTd3SZ7ZkFxzgfNuxgBi2E95JNQF7qhGhLw6TogLCESbgx3w",
  "key9": "4GmRrBR6NUdApfPcLArhmQwn9YqPxs31HoefXN8hDFckVDL6zPp185aBHHLo1D14vEviWkPz7ta6QEBfRm5fG8kf",
  "key10": "3ffxGHZdMmJAgaZtgkHnnEiHW12iXN3rdvnUcHsBPdvrzjKVFhGHJjDvHJGHoW1vpjCj9J6g3J114zR3VYGV2HNn",
  "key11": "51DaVcNvzdDPwSSC41xYV4VNN5igRZMGVfaEph7yiQqopqAd2nmDdad7SeRonCToNBwwbdFxYpTFZnhQtiStoVjk",
  "key12": "Xx6zgfEGxgUdAtCvCLTdMPH45vtYVthy2Ec34jYFedSvaPQeXqXNxcgv4fL3tPqjjPou6kCpMsa1Wsn6WkPb9bN",
  "key13": "4vRMS52R482hVjMBaC76wWFgM2S9jeaTfF1RvXqq6VNw5zg8TB4RSUKziq4X1TKtQy95ewacU1yuX63ZP8fqNLPv",
  "key14": "3RhyPD3KvWF5K9xmwE7CjMPngTNV5ZdWQJJR9NtUtPxHAq1jNYLS6SDYrXTHTFv3QJoDVoDCRmYd5HzDAtQiyVYq",
  "key15": "4hixNXbfC9WUQBysCopj3RQg9riw4CtiSqNAhnwW8c65wX93DfD5VxCtQ3jnpHVN929tbxbeXdXAoaiopsFyKSyP",
  "key16": "MRzHoXp1M4eZYeDTe9k4fPi4iZQiuq8oNsgfwDrkstUs11aGQx24EBrEk3PwNzo11AV2vTgZZMNKax8GHgxg13E",
  "key17": "2zwvDtuoudvKJmgcKFC6xoKqwZFUEEzweLwESkYMedH4aQxygU1APUhEsSyTJPASvuit7rDURx9AJRA8aXBTajXr",
  "key18": "42sEk4QefhnQLiZBASLqvdiE8CYcxy2Wm6bcjqrWXEAHcH93NArmDmTB7MacVnArP5mu2TkNjUwkkpC7uSisFfaK",
  "key19": "3kxTX3NN1TNrZSA7nE7tvp12eGzCJEvwHx4q3obLst8jPFn9aRn1jy2CWLQxQRxfDBwaJr53Nc3Q6wPywXeJqhkY",
  "key20": "3KLrCBYoHVnepMo6d4dWM7NJUP1u6hpS2RNhNJCVCrFwP6bq53Wus4v5kkWM5UBvRVpjzYuq4xBckR1QEK15d3e4",
  "key21": "5pY4VJXM7kyGMtfBZk7uzXY1xoknsDDMzLhQzZXFBbeHeuMTgUjPLNEdKZDAEYa8BPwswPLxWMce6rcnbbURkSsw",
  "key22": "5G7ACgwHCuP1W4WYQjKF5AhtuHuhSiQNbtx5K7LptDHaxBK6sHVoBNQoPBQEZAooBoE9S1a9A6GQs9KAZhK7Wt7C",
  "key23": "5yLvczFyhWFavx33RwJ7A8kEvb61icyeMzjXGKf7tuYEuVAFN9xg4WpWtaDKMvrkWdNGUY5uZMWtQd3DBqYrZUyj",
  "key24": "p1kPBN1EfawKeZsSutQ2cvn3GPJLU2cRcYMY7JhRwsRFsGj7MkDcK1EsPmJ9kBcHaE6kouyMb3n3kFteF889RWK",
  "key25": "26Ga8e1VS37MTeETVte4LXTzA7ngBz6G6ejdnVszGNP9zqZe461pSDCtrUQ6y7UKJE6VefX3bXBHw5aGfbmv3Muu",
  "key26": "HsSLxRDCdV1nJWR6Rj68Wj22MLPshxhq6ujE76bj5EmyURwQ5T5EDPLF7Sz5THGgq11hianwdSYbCWfF8ujX6MS",
  "key27": "66j4KrZbedGCqoh7zgU4LxkLQQsXKePVvEBPgyHTR3C4SEkUV1dnKnyBoCJrsbn5rgA2xnfB8EvKS1pFsND5845D",
  "key28": "nM8nKSSZnBmw3Zr6JVH4md7pw1gg9BuTvQ2fSBXLsWysptkV1sfQdugxRW5jcGsPrjD6C6ZcvzWVAzEtXwU6Q23"
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
