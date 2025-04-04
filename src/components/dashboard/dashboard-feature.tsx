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
    "2eJLaPSq1MLoVoD1MaDdtnG4XffbF3DDUVZJECQg6Um1bB1Ke9WRGcW7zrWFzHuJn7QKxkFxKypm368daMrPdLzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6Xj5AjHcFEfwLnGeooNBZwrfLNUBreUGhUY8qnLnp85qMdqX3W7qUMXB5tFwptLiH5AKLiC73uVoYGVnHgrxgZ",
  "key1": "3GS2SA7aRjqVqdk2nqxKjb9kQ4DLsgJSNzGmYkGFc4NmSeoAgCQigQTfRU1bCBZRxHHw9kxZ2uaTiefriZCLfmte",
  "key2": "5qdkaS4jPKaGR8MjtV9EurDyqWfdYZ8wiYCNGHUD7iByKHoK6NWQHBiHDUFLYfwDmqZHCwvRpQhweMsXX56kybGF",
  "key3": "37scgYpyKRdNbg46o2dwHZLRATw8BK9XZKLUqFWWLza8tgjW2vtzGExu13nqL25KbZCESGgGrq5EMH1hFjKWMtQ4",
  "key4": "3HG9MnLDZH8vYHh5t3ueWZkJ5kUGFRBh1aX3moBeMNGjiwBiexY35NvK8LJqeKzrWa3c1swhmYuTscRsZrBsRoWa",
  "key5": "3Zc6X37tAXxAf82USQJyeRfEoFaKFn4ssMo36YuMxZ1RqjF9m7xFy1HV5viDBzWejQs5yHwyFWZ4eprzL1EbbWA7",
  "key6": "53m7SjxNidov4AH26exrNmv2MdFLcqX4pY4nWiZAt4RTX32ywfMZYkcPpAYUEddH8UXF6cDwpyqSc1JYxnyfateV",
  "key7": "3ovRsoUYXtVpS1L2M4F8buHw7sRAZ7aXxqwZ6jsVVguSQyBjAPsLAwSbSLzgsTShXYUE5hv9wvAtszqjDeJP9HZy",
  "key8": "663UdvahYGbnQtTa9khFz4B1sCi8U1duPTLJ2DBVs1VcLDyr7pgonhStKFvRNisHSkdA4Dj7reUndv1BaNQBX5Eu",
  "key9": "5biy891iDdEecXHgtu5FzWeQo8byyQnp11iusnR8sqtJ1FnSq8fKmCAXsVCDi8xJKc4amr8JHzT8yx33GsrRYn5X",
  "key10": "2KUe9sifgyrAxiGqqMJmq8h6erJ6EmQzdSMy8j3US9sjZmiD4DsoVQ8VxVEFrX5AvtX5pEVFMMMcho24Vz6erbwu",
  "key11": "UMcYTbjsPLLDKN98e1zdnXZ1AntvaabvJNPGgCekYz1V8P7uwtHmMnKo5pMHFMEjRscURBYCgxNua3CKoRMTKuU",
  "key12": "269CgwSupqda4NBSoYiw7qpCyP4brxhBuRLB9iA8eWj8vFUb7ZhyS5fTTifzrwbyFdMjjnbVYRHUfVSqDvgXF9TU",
  "key13": "2PQ5dSmEuR35rPRmzYj2vjAHnqSTrrfgm2BBFAovSRGgDa8GCZTuooK8ZSuJ832qZovNCNVT5nBTp7VFGxFtwkKy",
  "key14": "5dvFfB9ZjxCHvN5bPrXA6vwcZQUHgKcPNQJGFFhweov3p6yHDR75qjDP1LwwBiMkdLLPqjmt7paXVa73Y3WjrkoJ",
  "key15": "3xiD6aea5dRjy4G8jHzQhJ3w2DNwXqVTpQ73mpomVpLVRyjxL8PeXMZfEvsfJ2EHJWnyVLU47N96sRaSW4aXRAA7",
  "key16": "4UoGv8B7SccCDPFdwjAt1QfxSYQrwzGN1Gnb3x3CDR1PkSp4Tso2DmxvH9LcXdxtd18GVTf8QuE6qEoAzaxLs9UQ",
  "key17": "2AgHfCFM4bASbJknZPegBTGhK6pmZe6u4D1Pz2c5RzTtDAxUe7wjdseFLmrDagDb5e5RnzSsqDy1fxmcZDojwgmr",
  "key18": "2Pmg4VMJX4GbSeZZZF4sw7hQ3TonqCwHqeqBQdzN6gQWxf1p6Snt4inVaF1HzzNwdGAcDbYJfagUwi5Ns5BocK5E",
  "key19": "4ZBfWrqHwN8TQMTdDaq5RnHtRgsPfEre8Ahokn7HdSxRD15PjGd42JB79vRGky6G7UzrevGhHZFCoY4pdhGCDdN8",
  "key20": "5Lp9ckyo42a2dn4c16FMK1KmvyQrcXGpW1bYmRamL9q6NAdMyZTn2Swmn6gtFssTZGcEYXHbY8BmwSGFDoaJrcsj",
  "key21": "3QKriejsRK7KxZSk9D2rK8ibHGbFp2k4WwKSoCxfs7dHdKxFsKhfcZA1US71YfH3dvXPxH2qdqLaS8Jng4jxfnWc",
  "key22": "3AMBsXzefTqhoRYKEKkuz8bbZ1DDL7Wf5R86vWukhbbuTbL2cXpANcGhrrzVrxiKoEUpAS3J1YV7VVf52gz1a6YS",
  "key23": "3D5uLDvAzQar3Dt8BBd8UQWoMfUX4CMJL6Bu3Y1jrXcJoHhX6njY6j9M2uz2R7kvkdRriJocUSLRK9yqMziEwBeV",
  "key24": "2WWARiEqGTEvrX12hVbbaTLQ9URUZ7u1vVhBQ5kqsauCcgyqnf6mpK2XVocJafkRpmPPXQpeMCTzULEF7LQV6g2N",
  "key25": "2VAU9D4dKKEzwj6RuMpeg6VJd1MiZquJxnu8djoXrdQjy6fq5MwiEBnSJvkQNPKJrG8xDZBcEwa7yAb66yJ3jjq",
  "key26": "5xA2ohcDjpJfZDyd7XxoWyDd7AorLFtNhh9Bsy51CYBFVnhpn42W9XzSMpibr2T8Ew11Uq3S9dfs65zfqvSJ5HBr",
  "key27": "5jeNgEeKyAvo1hwiCMzhij3RNiFHi47nX9KwZ68hiv6tjM2XYemCJa2qjF8hexPEAkXNyh3sWExGJk7ZaXPtebf8",
  "key28": "53kiSCpk9WWrLFTzsh4sUqYqS3rHVeG7xTHAdEhbd9CTfaGVUXwLrKjLrbXW8hbox1i2RJUEzVpug7cCw4yPykSG",
  "key29": "4myj8kzuKXW21YqmRXUyZUBYxRnRn4cue2x1SPFcrLi7vbEEm1D9yJTpMXratGWMeuUCzpbE4QaEAR2SXUEk3XK1"
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
