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
    "wwNTHfe71tJDoeAiuTRc4QPgpo5m4wveAvs5nrL6sAHea9xgvZWpDBJvHWCqFrLnctjxUbWwhWLgSAsLfAM4jEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pwwjBpQGcJvfJLhUVDyU69bpvb6VogYvZf9zsojhBnFQHDwkVHnKbbWWpZqg5Rdnb6YaKA5tq1k5t7rJNNqNEZo",
  "key1": "3ybGcJzVMVkJ5uXyhfHNZbFRuobbtBjMMGomEEGnFVrNNegmSBDSrfp5fAXNaShKkV1m8zWwRV8brcWY1j1a56X3",
  "key2": "42ihHi57hocXUJb4hWfkau7CJAsxM5xnRWiMW7tM7ZhZ4E3aaCLa2z3JeDNuF5C2rPCzPMoQTUwW65m5BuVCACGt",
  "key3": "5DRWLsqapoN4C9Rt7UraWWrofVd6rAkgWdPpdsU7iohc4Hs8krz4RbCwsbyg9NF7pn5iWjXbHgueCF1qBakDgAso",
  "key4": "64Ah23PuafcLtvo213Q7Wzg4YJo2pZPwKTT61mDJCMUZoFXeY5U4G8R1kdAeiohxqceaDuxnWZ9M5Y19uMwrwqW9",
  "key5": "62CQumbZsDf8sf6zpcc1oJ7eqdA3XZ9PKtnrtxmLDCfzdz1Zv73SUko691BPait4ynPN9vZz6VxppZt8mya6QGht",
  "key6": "2Ue98B7hC7i6aiDZp9oTP3UAEHaLAKY72aeAShgVx1Si9wm3QDLxWMZTrAHo2K9DMHN2NSptbb9RKcpkknvrMWta",
  "key7": "3aTN8HQGsFfpnKY48JpuFGjcvHt9ZSeLVP1wUdKqtTV3Cu2Jkh9W4RM2xLVUfismWUKpMtgvzTLDR8AVC6LQSqk1",
  "key8": "nkmS8Nm8xb8v9uf6fry4FbnGCcSvZfPNNL2Dop5bYkgnXjurLcb7T6ADstyrgpQ4BgcB3WiAAdTSf42jUZWqwxo",
  "key9": "42wZFBxQ9GkBzckAn7zUpuHvewu4e44t4d3ySsy1RHHHWDKRpmKznvxgttNaTAXwf7dzdpBJe1yh7BQysNQmDncp",
  "key10": "5yHNitzMcas2gjsVkU9ydeZFYF2oxdGBkVuJW7wTXf72iPVLMPtk6gzSvRvikUMY47XBFyY46o8m4X5Pb2DJcP1H",
  "key11": "5tekNn1YPAGqTA19NS4K72YYLrXMBefjhaN2YUa6o4frNyfor3Wih5dxLDCVt34aFxp9ysuB1CMsQBbDrXztWMZn",
  "key12": "4GPSr2F7gy6XUEWT5VW5vW6iHkWspwTJdNy2KjRe7CF1TRWw2dB1rvV8kVCkMAQJJYkNdBWQrrLoipNbkJQWMkCU",
  "key13": "5rWbUVMbS5mq3zCUJLqVnc1b3KSTAW9edcKfHe3X8rPewooGyFhBHJVzVowvYZLNj9FWUrcx5iAbdKdJSmedkGqy",
  "key14": "4zZ6jFQctERQTj7shNWpFAKYak38CgLfxb4vF3hVj156HYBCbYixYhjxTX47yKVBYWMUGUZgQNh9tUp1SXQifgvn",
  "key15": "2uVj4HzrNBypnXcqNnY6v8VE51NG6vxJCkgNoFWG2ndhcZS71FrwXvaPe2HB6Dgn6fZyCFyjhmw6cWo6v8sHjtsE",
  "key16": "4jew14K8Edzeua5X18krpLDS8LJFSqnh5PdBCyiMBMD2HVTo18Uig9X8zn6zypJBSaQXYxmKngUnNVUVJNGT58TY",
  "key17": "27pbpDb9rYNunQfj7rvwawfK5yf1Mbk6aSefpQzn7dzxhCVKsjzpiuzZMKumR72Q5pZCtvZgsMhR2G8gbGUBZ4p1",
  "key18": "2WPxYFcnQKvEuj5fYT34NVrg4QEr4wCHaTW1wu6z9Wf3mDWiLSNGCh95JjufYijGXaQHtzH6jeDY32jgaAycZToR",
  "key19": "9UCkSe5enCV43mAZ7BnUrBe5j9fhzqFEC5PgbDPwnyrG5PwarfFARverdPUv97nSKfMwF7vXP6xbkMcebKCRcrN",
  "key20": "3HX4tnXpBo3EX6kErsrnWVowHhJVNnyzDQXxLU6erBWAsudWY5zqEf7uctoG7ZnJs5gEusY2J76maBRErs6XiRYY",
  "key21": "37Jrak4dtt3RTWRshEaudMXn42gUfhNx77EYM3y6RkTHJGCggH7rwUZcxBwdjckvUwdsyaMCocQMDHMJkQmHGcBT",
  "key22": "38n69DnN87znh6THoEUcNJEcPKdSc2ZV9tbUZHMd3T7K5uXs2X9nbgi9PA2VRRzhkVGm7xBtpMJzBdSWWRXL6XDH",
  "key23": "4K4gwrkrU7CqCU3oXp8ueimTeYCtzRQ86gdXoX15da3r6GHVkQf5SiBusu99hocFWQ9Rh1pqrwP9EJ4FDYMYj36z",
  "key24": "49jVbGHv2VmSd621oS32XM96NKjvbzMtLvbzD7WEuk2vo57zipoynWySWDxR2KMAtrTZTx8SDZP75N8BFQSXmkzo",
  "key25": "5haAXSXjaRhSPPaGMuQAUdHLf8uEsxAwAKgM7ftxveSpMFZPXQGz787HWJjuUSDXS3D4wcS8f3vPsc5gJhDTsLaK",
  "key26": "4uMkkMzLpfNA81K3XQ3S7BYirzzB8g6mbpF9VhUVcufA19gefVAZMLSMTsT4epSAwP1EwSq3BG7xptE4idufwYbZ",
  "key27": "52psteWJnfeoFAFqsLGearVXTQWkscpTvFC8DvnuJj2hxRJPWwgiWB8mXpVYRt5VuRbewsUhwTA8YHC6Bu31ztif",
  "key28": "3jpA6erH3En4jZVEdwPT9YWhMPnvnRzcHXT1RXt8h3i1uDw6W9t7DEPpUsxrvT7pvjAxo5vNQBS95WUgu1Lp1QQ"
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
