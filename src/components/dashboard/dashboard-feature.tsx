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
    "5CnZ2dV9zHez9f7sAqPiyRK1gJ8Nsu6H8R45VsaGn1MLpx2qaF7WEsnQHBq5KLbhmqyuSEhqiTwqmfrs9QxDkYTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hCbePxRKxSFzgJkReQuxQBANB3kiAH7qdPbkvWnDtdUWd6Y87JAKVrGEbo7N3Ft6bR753Vdw8JXywU51YVAVRC",
  "key1": "3tatD4sK7Nisyzfd66TTWd7355mzYaPNYzNVq4sJRkQED8FDypxoYWYBU6AjiDQpFc8QxDGVSveUSdCHsuj5bexr",
  "key2": "5oqUd1fyx7EDquoyaCb5Ab4nQrTHLHkoPoEgqkHo15zdHEnekS1hGgtN8MrY2Ge2QEEw2XD55kNUKbr9XCJ7ARSw",
  "key3": "61HRnn98mJFSXATh95VKAjfuFFdj6qQTCNqFqSdisJ7St82msEHAhTtyLFR7jzq2LwemxRjxXC7yttvkFcp4GcDa",
  "key4": "3dFjEj73YphF9dCcQaaygqcBJ5shdX8Kmof9rdG5RFRvQit5uMMuHF2rs5qmaKSYhYStvpELG9vaZu7H6BU3UAPf",
  "key5": "5woCbXKiUW4hqMZGRyhwdnkhSy599911jSBepxdsiDvYAsbt871GHHkvZsBwu2k9p9tcRprEqD8rz36bJgDNSGq2",
  "key6": "5uihsNkfddYhEJ3oozVsA8GFz4uQQBJj56f2EZ97G3jKZPLedsWQxHsrVDFX8bVDCa2W8vCsHqv2sfdxkh4ByKNi",
  "key7": "3FRJsYy75gFwHEsbwhz1yVo6JKfjuWFEfxnxUS1cdzLFmZ3Gv23ousNNwLec6mrvoru9pyhJVFKXM9KDAdwaW8Kj",
  "key8": "4ncsSGmsxD45Rp4bRZfFtJ1rUb7bJPmveTaWQEhAUXscFV25MnQqoDuAubeVsNA55Zc8Rg1PyXWg7WZ2tTf3m21n",
  "key9": "63Tsh2gstQzDdsQSWabZaFDdBWtwyNKc6savKgS1JUg5ExuVdC8inraCtZqsfxiqiFdHs8tQN5riRgnpD5RyxXNX",
  "key10": "4QWYMbKM72RReGc752ATDsY36mpPjUgvscKacHsCgaYwPrEK9dEbm3DEWBFqkwN5U5Eih1HYBZb7R8xMm2qMeTNo",
  "key11": "5aU7ZNVCt8QFirFu645oSuWTj2x1X11gi9Z7EMAcwaeTBFW9Nv8EM4gwwgeP4PeYjwXVU3Sq73vkCgQ9ENFwve2e",
  "key12": "4TVozJ6mtGB7VckCA3aBY86t4kWd9PHKR5tKVZbmZyAEAJaeJSCzBNcuzZYVZ2AJYHVZUcvmcFzKYqA77ft6SHJt",
  "key13": "3aMZYeSy8miCBwg1vB4zdEqSArmAxqRyfZKW89XgGVj3rd8maQm9NBBrizVPgwQruVdGCmB9cYewQ8UXdDzazqy",
  "key14": "2iZWR3eBrxpBjwUGAKoR7tnRNSyLTCovqtfftDx6iKL8Fx4skQ9wr6z1ukxJyFQhYPvbzDgdorQm9Vw2rTLeERqw",
  "key15": "2m2aw3z3kAwMjfPKB1QFLtuqd6Fp2HS4bsq28QS9ocSC1Gad1QHpn7Kbk6EPYzDxMZZGieEtjrbBqbTncmpHkDbs",
  "key16": "5YVBJc1kJtiqwSEGZfQ51Mix2XHzgrTpffgT24icEmeeq8RAzRT8DsvtKJVmqRAzGvbpXpvAdFxNDGJfqJ2uFNCZ",
  "key17": "5FnKU7YurYzA21yhFJAGesA6itajqhiDJzNG9rTTt3yjtm43JwjnDceEGZos5gcpaZt2a8LmKGM3mGecjQXtuXwB",
  "key18": "4A7qf26e5CSgFePhqBQ35CcJAj8UwQwk9dYyr3Y4PcAwHc1qzcMRohC3vmfxVe8Huh9K1WsviYk3qVUisfU1U8DN",
  "key19": "2UK5QPESYLpxARSarfg7YWULdfL3yXDUiWpK9vzhMqaoAc2hJMkrjfjMxyxJawB7EmrGFDTR4QhX3eMiGzaVhxeH",
  "key20": "pHXHx2NAwXYn67sZvzLxFDtMvtsEzwJU1DiV4uQMbF73vg9mTcPTmr2JTJb5UNKgUZBpqiVYkGvT5CifbNZxwqY",
  "key21": "38eT5BqRuRAoBgBFd5ZnarQq1qQuaHasKaHZ4mLaFkvjN3FWW6gfF1ye3ZncXYAw6S6uXpXSHeMWuuvJsLEkZd83",
  "key22": "v5tUNLVLQXgzvnhTVEWPKgq5hzZAFz6pz1bYaZuo5e4wCeL2cCoosFCqoFhAEV6CwuzKjL2z4fd26xiwp21Fv5Y",
  "key23": "52kJMhHAVBYixj7MSmnxHjLzchqbWH9zQrGpmXDNM3euJNrB1QYjuiZpeNJgMv43tJXMzqjrpyAkrKCiBYoRUVae",
  "key24": "2WBUj1uqockT5NB69p3U7r48ma7RjCXmSG7nM1MPCQMvs1fC3AaiZC72YD5pfDzsrvd5BDR9mVHyF6wrFRgYuJ6r",
  "key25": "3xF77ppp5jME72b3Pg1V7qWzibTV1Tkuji6zLD5FgcAuJceHhxozeLk5vbWXhQPMe3emMFpwk1M7ZFPQ2TBSQgiV",
  "key26": "56KYBWy9m47fXL3GwVFU4p3FfoDTnxafN7W4qEm3j5FduWfh7iGJojVvNMurXzFkbBZsnNbg3qfakVnzrsuPVdyg",
  "key27": "2zLu8HhgKKye174VR75VhaVinBxGqdDnatgjTU9EwYf38DmYqod7u1FXCxXmA59agFkdkzguKsuM2R1JkFUGb4Hy",
  "key28": "54H4Zxqvav6qXfsMamLvbcBoPqHvdfEzcFMDHZMbTcupT6ettSx6ed5h1unSooGLRCY6BLCq7ZJxMPfKiPfwbRhM"
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
