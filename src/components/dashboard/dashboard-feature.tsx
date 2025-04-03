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
    "zq6c23GPKb1MgWpW1vNixMfZ1ioi6T3Fxu1BDtTgecxQpLcDg4AErkPCD3de2WGLAai8kHWafEPkHbMu9Dc5rzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DhBrbnsnphUMGXn7TVbfFViFz7ENC5hyDa3miPSk3zGR97nwFpYFxLU8UGdC66fuosyCeTcB5rPS4YCjXpVFJn4",
  "key1": "vtprumZayWRdvkbTqesxFdrHdT2pt1DoW6HhgZe8RVgw57jkvf9PB2UJNKCLqme48e5f8zpJ7EEZSz5YT5DLp5S",
  "key2": "5j1FvnLA22riEEMGeEeNNvKvJC3nZffu27juxmLhXehLw8yLJQusF3ZfyYGap99xtQmZRcp1TY8si3tjp5vCrsHw",
  "key3": "3iRmmcaJ18gqm5BgG31h7NPAKwjaPhCu4Bw46RKG2epAedpzyreV1Rzu7bu9Dha3ES85Fv9yjAPfrYfLoY795v2M",
  "key4": "5mNzTAYrJBza7JjzwViKahouRXJceCJpkEBVh9KbD7ok12mCXbK8doyx4NnMbPDX1Zwz7qYk2qX2U3zXVHxC8DVx",
  "key5": "wNp7v9Fpa5AUDA39JM8nQvCmWkyu2vQ2j271AoKV632j6BXvygAp8PFs8UGoCvSeT7rbrEZUH3NvHiAsCXRdJKn",
  "key6": "vbVCt2pipkhyor6ZqoYbEBaRjXnYSaZYw4HDbKLe7DgQ8KsDfVd8kRB6uHTR7mB4GThZwMLt9ujyxsvsWQ3RyVj",
  "key7": "2nCBy7b4oJGaVxn3VpDGdsm6babyrSL7iYv7A8pyvZeTWcmMSJaRV4gjg6aKfdpTJ8W1tsvQgumTkXMXeLfejGyk",
  "key8": "42m5ZzKVJWMN9aafZ2djehNhKHZdbjGvDQfWj7xwrWX9TdxCrTeVTDZbzLnWmJSBDAVogBbGmx7LBx5TDPKf3Y77",
  "key9": "5vpxEUeYmpoiWeZukSArVT37fhcBb7cMpyeN6TqkRhGq3A6q7R8Uw2DyHVDWGMjTP9WrMZmo2Wj3e6jxn63s8iPW",
  "key10": "5uTKz5wBiQzhSuSPpRVhbxmv5WtsQiFPAuFimDnz1doRMxjxUZ9jacWc31gxcnGFxtJoruxn5VVYrodNXJahMSE4",
  "key11": "4GfgJaZ8Kn5ixkmQMEs48hhqFPx8F6dFL1sGmFfndJy1va4Vet9GxXHa2jwVyTyTA1M573tYTaJJcWa7eyZCo9go",
  "key12": "Z29h4GhC2yKxo4ykktAJZ1vSLVC8S5HgcBt4yUJn2B6F784x5n4tkmPdeJ2zxekPGXRbb8Jbe9BGV7j61BjJGVz",
  "key13": "2uimBH3eJyDzgqaC1FtkCiMuGwoGbWcpPr7moE197ipHKdj45qXLwWf6UgLWQfG4ChFDaFA6KzURtVKMuQzLPTBH",
  "key14": "4A4qN9Dxjrc9VHq7yaoPuhabCNfo2mTAVezRdmgwyeJaR6QM1cWuRFYnqgSZbtcDHSENhkEUSwNdYumkirKpaZj6",
  "key15": "5vrFQWbtmBcgamWmXbckXh9fEk9aTZMtnkjyAgdqNV2d74NEu2TgWg4YToFcq8m3GNx72gEaLCi19bKcpz7tTpbt",
  "key16": "2MRwDTwZEpr9gLsYqxTyUWQp5Hh9G7BFfH4JjHGMZZdDnmoDVDpxDj4SjccKT9ULCSGouDe37Rv5gumgpGKVLPP2",
  "key17": "Gz3QUuoTYC1GiiQ8zctJDNSPbFE9VX6QkxNKrB2E6V4B2ZaTfCWgzbFFnrFDfdzdhC6w5MCeJfZvXyaUg3d2Ytd",
  "key18": "rCxhroRgv6BnGN7xmcCaVZfDFUqwGvgiGZLwKFdum5AHemVspZ4iVNLKjj5Kx8USXgaSNui3MpYEzwLv1Z6mkqy",
  "key19": "4rqDtXdmZ8T972xRrUj11HkSZzAdC79mD84E1FoNj9LHNyD1tUFyUk1XRb39SrwBpA2aCCT3vGfF1yxxdK5J1NgR",
  "key20": "2Y2iAm5fyPt8UBDpxwpyLoLB87ZReRYFFYQB8KRVw8YBoxNWkkAZtqW5HWuwdDYdi9YAWiQnvj1NA7JZYS2E8Cij",
  "key21": "h6niea5rWCV6Zp2ryVCZ78mQtiKniVsqLYQfikzsKgsBQBp1DCNCDQggG65FdmFqetD7Tm66ow6GmkoVDA5JMu8",
  "key22": "GeY2NmdUkgp5HV5qx9Pf12T7AwAC2yquNHmmih4s9j3ZhbwU9B7Ka3EbU3nxmAvH415B1oiymgvGw7LxvDMFQ9J",
  "key23": "4snZAL5LQ5B7ctTCkTBUeKx4mLDMEaz8YrPeuSJLoHwcgXP8QC9VA9JXUPB9Qw7D7erLaVtH8JiNiJMHnwGKH5d8",
  "key24": "5BcgeaXkVxg56cnxAk6NBmQ7G7QRkttZ4dPLVNLssJA7vxvu5SuSdWk4G8iC6fvLdjVbB6bA5SEnT86mnkocXjRD",
  "key25": "61xPQ7q9tAVbdbZzKDuwMdxfuT5fotX2W3VU4fW12ZP8EbdjgoXTipquwGGrPYv7kE9xKUafnpDuKUf75XWKnWDQ",
  "key26": "5DmxH8ZKmBeq1AjPTTCCdym4VCMRTmwnLSH7U8C8xb8YihF8tGydMorgsz4Uv3uzypqFfdpyQUQgd95Hj16ijijV"
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
