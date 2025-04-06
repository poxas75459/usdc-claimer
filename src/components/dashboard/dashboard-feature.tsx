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
    "2aTMnKN8Rxs1Ge8xbQBfYeNR2QUUXwUZrKNgQz9sWoqThXmNDkYiUdZRBx3VazbKgsCDPfNCcGjiXmSza9aR2cYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MNArNmd5bVLwoSyttkHetfSTkKdGJU3HX2cb27aNpqwgt3kXz3XH6F9yWwWSr6d96mTi5Dvn5m6iGu6vR4JwAm",
  "key1": "4q4oCUv9CNNCh48oQLjb7fvaYueuG1MZU71npCWPEdyKRVH5FnG99XRyV649yzC2DE41VWeDQZcchYn1TzPz49uq",
  "key2": "2m4Nkt9msE2ufNT8vWYHQmRSfBcYCnkzLR946BPkGxCudh37HbwrYiRgjRGnqi2Cq8eGa1HgmfTePVPPmv25nWnS",
  "key3": "3GqHqjo4LvcfzTzmv8dzfjHnadfJzHJP43ea9dS1R1VEjHY88qtHdv3f7pQoJcFZ2HpiTUnE55usG69y5RjJXnjo",
  "key4": "3bqR1enDQ84S7xsJrDpXAvZCTVrJF8PwEVtdL28foxTWo2Tk3mBKTpuGPW6QNYp23Nx14wdkb6xK3P3TJWrU7TkE",
  "key5": "5vb2CUrAguKDuH1PZCcDymKa7Sx5xJXbNZjRtV7wVBj8Mve1mcfXFjuUV2MjNN6x2vUFW143Y9VYVJqR7v8mZagP",
  "key6": "3kxxtRsDaJhAixT2LgFcU2KV5JCuHTCtZimMSrS7T5JiCgN7HdAW3jW5MDhK68csAWu8tnYBQkYXWphazLE5J6iJ",
  "key7": "nkUfAHZH3QZhfvYEKSfvVL2VJX2nzqAbKe5J6Z1k2g8WFjexmHcSUrdQZrHepuEYRemeeydfXVyNQY5b6kBNeaW",
  "key8": "3aankgmkGMwsmoNWokPp6MxDrZTN7GWqR6hCnEJ6JnJaSi5cJFrjkX2gQJjbzAicckaKAMxw35zVJbep5Dm2DUDL",
  "key9": "kTxJEvvFXeXSzf3KqEKHyohkRH33fQkaqFC4nuo5TJXfEwKZciNw3NNwrgYuPAwpmjNDdpvX9ERdgutaXGgjJb8",
  "key10": "paU2YuXprfdGjaBnVWQisuKfTxyjPcfx8LwtcUWHAWMscjBELtEugeMfTeNCesPdHBKv5oWG71y4koCPZmDzGzy",
  "key11": "2s9t6XAAeV2nvScTUcbcppaW81Aui7HuzXt34wWTXGg9u7H17VNncPyRdVL6JCg1UGNrFpTwBD5D6KPtqW11z412",
  "key12": "5d86cL96YSfjMkaTjiaGBwGY1myos8RURZiuEuEN85XrQEq9thtBM1CqALycTxCPtTCAFmoPmd8GUqYpuqpLe3EU",
  "key13": "3e7Z9nvfP8dEfsohcPBRYyEMmrcY7GFEnDiDJahtsjfrnesVjwRsgGW2YKcVjxGLEQSewV5ocxS8BVKo9CuFZFC6",
  "key14": "k1226a5nkjFUoYx848rnfBNnDKY39a6W4JAEUHcRtVxLq8xb1wN7Sp6ysNHMyUyxYPqXfg8jUV8HQQ8ZvfyEtSb",
  "key15": "64bcZCFsnEUWxryVHuFFfhFGtDAez43VJhY45u9ckkDoVkHUuAdSJHiR6xdnL2JhujPiP4bY4WpdJKiMbTtLDDXC",
  "key16": "3JAmiUreNjRtWeUipsH5DyGXHryQsHtxcXtF2E5TQ3s1jehFjvuyeackrAXSmDyz62GNqtVJmJSjToucfjeVpJcW",
  "key17": "4Mzy4Z42RvQS2CXhdQBLa2rhojRzaV4xFy4cc7z45wxNvEMm4GCBE2xd49WjdTNFexdcx9wZXdJzQWUKAyG51Yat",
  "key18": "ZsRvGJRHHDFUDswze2X1RG881AEKhBC57Rp3Xp5dFDnCZ7xHrCDe5t6XjRQRYwB3HCidy1UU7aMVBjFe17QYWgY",
  "key19": "62NgegcWEoExmTPrb9T1eQiy2PumZUv57NxyEu4vXaKMzGW24i2zoetGR3B3W6WC73CpwRUxKM27HgjyEZL4vhaG",
  "key20": "5Rca4R3dL1pyHbrLDPe8vweGMrNpxSBZ19u6CBeWPPoBkP6P5usF8oU7pf4sPnwoBcLgsVE2f8v6QdHX4Xt7PPrB",
  "key21": "5XHq2ePjh6r83o3KETYdkS6SXWArb25cdtFZ4qJSTteyUw6hxeJ2bg4AW8TkLxvzTvVprhgxCWPEhoXDeQfSoN5N",
  "key22": "4WSDwrSxiZUiM6XSdBmHLskzDHJv3GCwPEuoU5aTXsPqcwJf5FgAA8wHqM4JZWyTcBcmCVAgKuUvyvFcnFFxVkMo",
  "key23": "2wcQh7dZVrCfNd8nXkwAr6c6eXSrJ8J9DjxNUBN4MFhDmNVRXwgrYhLmz8FTe5hpRWvACjdgvxPD1uLhGHLZnB1Z",
  "key24": "5KztNmocT8H8qnPGRRWNFacATqHMsJL4HHCGBs8MUzEvYoYb7aM3gXWSvMRd4jbH2gqrgJ7ZvVLFja4TR2QQWdnz",
  "key25": "3YpZYLgyiFhEDD9cjCwY4sjNPdk1EWDDSkw6onSMwMDmyNEiEegKNqngY5Pr9A4Cm72ENYnGE4c98Ns3hkNXDkH4",
  "key26": "9ZWnGMUycqMLiJKa1gVPAUddkR8UVbWAzpPLAEzMteJeNWcbZrfsssDCvdxLcEVN5YnpaRmESyqoCevmFL3HSKK"
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
