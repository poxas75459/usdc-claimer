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
    "2knaW2bgbqBZzsy5Q88PxNt454Lit9L3rfcXVZkEbCFSe8tzpULPcmZyTqgfNnoaDA7dASNv22JotNNHP8aoe78Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUzHMMRSgUW4p7VKzQM8X1TKrEGw2tkeKvdWxj6hKad5LXMubAddJ3jJywVUShLz9MWenSQ2tntQVwZNmET4txu",
  "key1": "5QGPXCSiNptA1JE71nVHRdd7xsye5c3Gfz2D2gFG5N5x5pfe1BDQvYiwvgosjgrzPDGsc11vpMhu8vaACsBdQ1ei",
  "key2": "4Viut71D3Lvogiy9nCiJUJdXxR27a11jhbPWbcPikptgbAKgDf4vDZfU7RGbMSbhnYU6w4GfCWX41cMw27tM6Z9n",
  "key3": "35f8qGxbKteCQS5uNdRvqSiqG11W4ehjMB8xvZYNLnDhJqiczvf977sFDvAdvvMirDnkkD58F3CZo9mamS9e3cRT",
  "key4": "3vSsKV1dFr8DAMVE96adi49yVpu8P6fA8rX7ptgomZDKYtujMwcVS1jgJoVfCWJgAtKHDr439vqLojpqD6Y6i7M3",
  "key5": "2XcR3sgYTLzY4bWp2ZJ7QvkEMht6LayEWgxzWh2T12jPqPJujmiDn4hjp3Wv3CZa23YfrP95uTJEqerJpAtc8fXe",
  "key6": "3Qd3PjqrSJu4j8aGuhXrU5XPaBJChB85hQw6k4JdfK31Ymxq3NCpJCmmSzbFoXDGxYkaiHu7PxZG75XJrMqdgLsR",
  "key7": "3muWjvVwhmk7yFdWwVnD3FLkC9euxFSxmXtAwU9duFxZrzu7PWRLEh3e3W39L6Ms7ZbqCjheRLqFyEN25qJJM2Ea",
  "key8": "5KSfpPKqqGCSL8jPaJVw2Vm2MHj9bhEAzvFNFHMf1Xguw4P9DUtAXo8UWYQD7Dker65pQGW8yt4tn3gFsDtGyUF5",
  "key9": "2QXJEpb1azXShS79mohg6dJf36rPLWUaaWxJGC1v3iS6VZKWDYpqgL1q697YSCWyVLTc5Nj4Dxsib66GXWwDwyLW",
  "key10": "5wGBPUPUXDtReaXwFAtv3LGeFaMkr4oAA8pgcggjrBKYrw2Tzo8cCbAvY7kMkjRtjePdMDtaTvTAUqFwm2ekrj4A",
  "key11": "48AnJ3q5R6g5xcpcYszjG4SCAEhy3QWDY2wzSXKFZExpeh1si9nyZBV5GCkA1a6z3Loecf4LaWnBJUeTKCAF3y6D",
  "key12": "33gokro2r73hn4r73ibgnK1YgQGuiq1XUrCseAmY3DmpdshysxKS63L4FgYApoj5JVcjEqnkgcUYTSCLCCSSzvqF",
  "key13": "4UDC2yTTbeYwSJRwYn6aj74wwFdSygUqForP6vXNGuePjmqkMxMQqx9Hr62xq1tapgsvzprNYnFPhEiLhUYqPj5X",
  "key14": "3x4RmQ8KiNeTdfmijgeCtKneXXhFUm5V9nNFenYcsJ4paQrSzwEiWSHeDPgsiCvQ9eNBad2gPwKLVwL4fEa3NhJ4",
  "key15": "ybT5xPNC6HMyBtqsEgMGqmJufGZinZnLh5dRSZRXihWz5DPKxZEDG27gzDpV5MEHDhoc6wPE4fuyZTV73YKaFeT",
  "key16": "5BZHmfNGCGPVxFjLXPb4hQVrqafQiGAUBMDv3NUJQpiAoRUViW2iZ1jjhGLVJRB49YL8mVy8LHoe8THzyRKkjjPh",
  "key17": "ewpTVfGeosp3BFqpYEhxRekMUizJtTYweR4bhF19dhrWWcR5BhjvG9SWW4awMwouxD9QBa3DzkRBaSbmSK9VLSP",
  "key18": "4LJSd5ySvR8LpbwpV8b442J6X42SbcRoP97C5cQSiqv8wb9xMDR2Q2Hsg6w2pmy9GAZqaX28qvmVZpfvHTAjyRP",
  "key19": "4CGHwpT4ti4AXi3KofcD4ohuEtdS1whKAviVcZ83qa8G6sA7jRFTHDTzXJwSuWoYZe5e3tkFiuC14oNcM5spYTr1",
  "key20": "5KFCJV7XarSWQgvgz9mv5Y5bkakUJhkiaKagUZRaZrkB6ED63pGfQxHeedvSmJS953EciwZ8S1aqWiVgCpWVP9VM",
  "key21": "BY9CrFjBHVUD6uxR6cJdXxYpr88YFztDkHVwHvQo8uhX42ZRseBqWYoiAowSY72U3seHHQfX5tZ4odgcfZMUZDB",
  "key22": "3ik47Jt3qJPNrcNhgjYSYcPPSMGnDoNHRXZrjeiMYMXhhTQ9xNYNdM5dFacoHpdg4D2amqkTbaNdKjG6mSFoBJn5",
  "key23": "237zKVFSYZ8p5SBhS6pefMeZSqQnPB37N8yHL7CDwuCzdGrAs81duGcWD6FT9Ab5eEeShkT2RjiYEdhifs5DyFy3",
  "key24": "FyEVqcTgy4q9mGRwVeoUZHRzN7pCj3ehnCQLFfwSi6FwBRD7Me9EpxQNtzzjFSK6JRM32xTFWZ71euLbAt8xdT6",
  "key25": "4fu6MjupqfNYJ64jmwEGaxY7zfumJmyb4mjWrsYY6Ky6UEGakybzxQsyeXUbWP7q41ikRN55m5oQSaMcQ8S1SfJK",
  "key26": "hheXGYqexJr9rv8NSjqFnVMKxapTuifF7xc6ukn1r11hnz7Xii5UoUyJSNCEiUtk9rEfzXRJMSuHCKiorrXhwFo",
  "key27": "DtoATJUVtEDfwiaaZi3Vm1UJM21dMk95mL9ipwhPEsKGAR4mUfqrUjJGrxLpbmVS2GvwagxjKpTasE9317UAZfD"
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
