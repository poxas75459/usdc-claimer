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
    "45jmNikE3hSWPxjJphddBGXAanMpHBAhx8WewTbJrtPLYDhxn9DaTPAn3SuJw6U6krAeJvRNyvCqeqNDNVj8Rk66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXoqQ5udTfcmfWCg3gXejnzg9XtEJjXLkS5K6Myg1qfjgmPyTfFkdDgGL4NuJWcTX9cnfgzDFnsLxFj9KXphVnZ",
  "key1": "5653i4J8NDXUMDmd43MYLVfcxqTohP7pfTtWnoxDoyM8ksjn8NQbWRWbu3YvRRUyWLQjghgFzSksnajkq9AtXco5",
  "key2": "26Y5T57J3SY3qawejuhTrQLh64Xt5hX3qQJLTfbD6KmgAuXAoDf5E4tB5caLFXoaYSPxy8JwFYE9Trh8KcnULGZ1",
  "key3": "2tbE9N958L1gCkVaoQjTnaJqeqkb8CbwGq7kEhkLEL6XJVgSJGmQkE7AguAkAnVubE87PwtrFAeCyy4iMNtD57ss",
  "key4": "3Aq2HhyV5X8G6RyVfQFCJWwPiZP6FTgiXPo6fL2vE6P4htr12ud8KeQutzZzY6kmq38C7NmJS6AMds4PJrNxQC9u",
  "key5": "4Buw8hdhkDqByq26u7rxVhcnANUZaFNo5qCTkX3AF4TbJcMETG2YuvfwHf7PNiyysMuCdwZHP3q5GSFvu34wTQcF",
  "key6": "2xEd3VaakCtsUP1twYvhRJyRSTQKEv2r1K8Qhf5zsJwgSFFMHsUiUycPERrmkKCboghUTrP6HqWPssN1EwCKqWQy",
  "key7": "5GgZWD87JZZWSptS3d3cNQ4D86dbtFJwx7GryQb3Em4GEVKgXQcANcFvT9o7L6TWCtp9VjnXK2gbG5xvG8UnAmHd",
  "key8": "ZRsg77syP1743Uuf8umiqfwaXouoCbVhgjHwTQaYhibqKbsmsKXq4ruGMMkzBoMWcuGh9TrstKJjGX1DVwaCa7e",
  "key9": "22Te36tVRJB6AYCPA5QARX4wZpoSSZYGFisPyUNH7sayKdG8FTdjSatWFdSXoUDSknvj73YuLg5dw2seop2NcLhR",
  "key10": "kh3Yvop67bgP1i5aoUZmjAfXFbSxchzZPC64JARA9yecVwtEHnvTniYvneogdrRCEayyPB8vLiAT4rsbjJNWP1K",
  "key11": "dGV6GTejkskXdMTConamA3wQPX1Vy83oRo3gjpvUxiJyHERxvaD2kSx8xGJn3ut4UBwesn4KJD5LPyqagnQCTf7",
  "key12": "2FhFWEB3MuNbLcgrvcXWhV44fuQTg8Duxb9Tv8ZqgzpJutLL6QqaiR2pKV47PReqLDaan8pFhFVjLB9MC2jrFEht",
  "key13": "4K57DqbXVbB5fL56CUQmHLdNezZUsNpWxnbcxADNUQSTTjxTa2hKaXTHEdgbtjA39CY4Kd9TBCB3nGoQpg64bP1g",
  "key14": "34wWfScC7WDo9DVMhxEeSGerU8knoJX6VXoMMS5UouDPw8EfRYXy5JJtyjffX1Pdep6wB4fhX1vcj4YXwnX1zpXz",
  "key15": "wSRurd56dVLYD4QWHGV3j5Lmjpz6DPCUH2s2PNAuot68U4oJ7A6Pne7zFm5kKUUjFzJxpkFT3gDNYvUW2BTECap",
  "key16": "4t5VkLYbjcX148Rj5iVAtruPVr3zdYssDqrrqFuoFqcNoYSWjVt1XgqdDyrqkA8cRPYnpaHPfpqTDJCUw1vNwg5B",
  "key17": "34CuuNybKkJdcaYvDAbyBYyjn1nWKpXYDvzzusPEBVvCTTS2x1MYsH4KhVpec5PrGBeN9C8WtBpUSHLBBWGYsgXi",
  "key18": "mnHnUsdmLCyjtudZkYwU6z37m4GQ53RZGrtYRpcHzkdaXZtoc51BjjwXNY9WZVavMjJRXZmC6UaAa1Bq66g3aPK",
  "key19": "3iUGHZMm59A9JtaJ6Vs9prssMcPHZwajbADEtU8NsnpigPEyy4KEPNTc6W6g6UAv1tqKaB3GrKAQxemEMPdgm5dp",
  "key20": "7AoGdpvcQn2J222T34juZSBjqoZAEdc2yjcvmBbiGW6HZGpBM6CAk37BJjSiFucAuNi5PxXMe1oXMCUw1Tq3Moj",
  "key21": "Hxpn1HzGceQAuXqMZSWwxo8Hxs3nd756baauxz4U1wypgR2i9u2sFBBkFryroYGK2kKyo3SEFwj725TDpUSv85m",
  "key22": "iFY8uz2ZitWNaoy11X4c6pwgoVMXkLpmmsLPNigX9Rxr1tB9ifd6LV8tMDRsCZWD2QBanMtNW5RUeYbndpwUGup",
  "key23": "5UaMjK1Uss88U9s4xYos6DyN1rKGTxrNR5TmZJ8mEvnQUrfMa6hnL3PkWp5sNHrbaTomrxbMV7HJV3bLX8DPzqpp",
  "key24": "4WPdxMYqXdgVCr7jVo9YNLPBUXcKvCZZUkDq7AC6E96XziE2abLas9cyZaF8WgKL3irC3Woguz3G9PbzrfSfk8TR"
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
