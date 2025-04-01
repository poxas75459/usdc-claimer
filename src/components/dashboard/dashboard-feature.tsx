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
    "5indFn2WjXL3RkUiRprmLQTM5Zfrx9qVvGkXKMsXvH28iHxKUQ7JYLZLhJijRkcR6WGxUeVLXaSpYj38BQwDNSRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XuEGYp1DgrB95LLUGeEL1YU37vFUawjAHnHYTAdb52KYb96et7pdw7yk6dUcQC85xWe91D4Aqhc4QRKh52V8Us3",
  "key1": "bfWsQhyWjes2iZKe4wEwfKhUwfDRMErnTJ7m7iHJQkFKoKhZibfsUuaDmRv2yiJkqtpwKhJQnGCtJz4W3uA79or",
  "key2": "5vZSJ44mYiFCqrExgSWsfzQkXZnRRpCEVuYUaWcygRcb13mD92XFJHt4CJnXaC6cpM9UTV3chu9MCxrHnowCfnAT",
  "key3": "3AZCNEwW4K2ijgg33NTWwrCWNmfBnnH4gjYyC6rRjjXf7aM7wVQWYKhyPDfCzPJquWmufvwFEt7UUCfYzacTB4nV",
  "key4": "3CkMoQEuLKXc8jmzpRMfQVLPAHLGtakX5YPsp9zyWNiPXWgCVLxRa8Pa8TaR1HZ6moWGUuqzrKNHg22TKjYDkBWS",
  "key5": "34vevrDi14zit9SfCNoT34ZkeRJ5BCz4yS59deDCbiNxYpJPJwuWqMFsPSqoL6FApFXWffTUF9iQTB99hFgezAXE",
  "key6": "6BR64QzJPznQ8AYRxBGuuu9QMUuwMRp9sD3eAbSDTsyjnqx2FmBHE53TUzALc9DniiFcME4HoPVVwubQb2aR9GH",
  "key7": "4e6Se6CEtsTeZH97r3gufcK7jRk4cCQZNgMhESuzRuRE2tTs6nJVHLBvW8aRMBBNGgQ8iXhjjdRs99eBCLGcHHXv",
  "key8": "2aB5HFm1ERqvxgR194PiBqC2h72WrMPxQxgU4iDUBa4vTVkooLnuhHyveM9daW9aRsMHYixeQEcQaQzHkrsuhN3x",
  "key9": "3abmfiKjA4QqiNqtp9z1BRdvAS3kkp4w4eBbMAMCwkg99Jvf2uQExghndkAyqDFPD6MfreHCvVkogoe4Brjy2n3B",
  "key10": "2XvuCVfzn5UhJUHHEdMGGxy4fj8fYhAVkXaqteoaUKP7w922JdhuRwT8WHS98TDvBTDoDzpFge4oGPPNuEGZmJYM",
  "key11": "5tybMKaBPsSKtPGXr5dFTjpYBtsau79aiNhueYC2GfjHT6TZoYnkt4GBoJ32Y5vSyE2HqBXDsDjTMh4LPRdH86Ni",
  "key12": "4585qgYotncnGTeJCzy1i1VB8ZUSyBXnmpzFBJ3ogTPwjkwyxyEzZMFNFUPQhrePJqwPyF5vx51pvRaXXUjK2xhG",
  "key13": "2cUyRJyuTqCWRZng5zfaFJzAZqapCnRNgDVhH6kZJNWiezYXz9WYEqAECUgSHhPpgYg12Q7h7CFGibJoKmn3TFcE",
  "key14": "2D8wJe1SxtXbF3FfJjx3LBrpT7viuKVkqrnCkNN5EFVKnU5mUbTTeLYJJaNeGAvTr3oXTQR4VAGPzWrr2UFrk57z",
  "key15": "qNnhP1V4JLUpJosVLZYdtws1BzzG6PSWFwahANZGpwRk5vhZuvXei4sTB5dTmZVRA5ynDZQqKwcb3GFDwnp4T46",
  "key16": "xKrteDyvwSM6JVrgwoq2NrEAYbAz996ibQahVkKsfxWaH5MCYeaYouYpDqPLzJUai6AFs25EoSATjZH1RWYUx29",
  "key17": "3MjHBLxQn6yTYxbKSEozpuXoLwiqx7jaKLC29eZoUBWR6WfiR7mwhBiYtEdESaFHawd5dG9KfnJ61nwpwVC5UsBh",
  "key18": "kxxGwjZdRqs1wWFBoCEaBem7xXxNYxV5W7bSqsAG2MftmBtVftxj7MBJFaVnx3Su1svJh1UbicPTQj2HvC573zV",
  "key19": "2jGQQXpeWAa8LLiYLREo6kAvkSGrzeJ3QooV4jygG73uQ5KDADU1U1YGkKYnwt8N4WbBJtLCeDWt75h5HzrVGkfp",
  "key20": "WvbrjEMdJKFEyx6ToGUGCxrGavLqjMMLimtpramX2kx7iBnbhPzgUAQg9Z6zsYdf4Ra8M2mct4Cu5MGdcbebKd7",
  "key21": "54JJ7ZDJpjQbHhJxGD3PaS57g3NSnwXGPJn7G3A7g87pAgmy3mtcNMTvDCXP3tQpE9vDJxwoWyURZ9dYLcjXDHCW",
  "key22": "41ug2SQp2R3xurQTtFEicGs9HTZShPfSCauUhLs7UBh5DwVj22XskaJpT2HxXYS2iDX4cQVaXgj5Zg6bGScwDkQv",
  "key23": "4Ve8xgyofu6xBHPudwnJW9m7W4ogd92KoComFpqUTwrjVdqvSQfj2zuRJV2EFUTAiEH5D5pRFpRc2NtYGUqraQvv",
  "key24": "4KFXrUQ6B3te4AYZvVK2J2HmVTdxfqDeaxGRKoywarshXAai1MJsoq8T76pJtr9yBvBdm2eGRMXbHrLVfh7Kyqnk",
  "key25": "2WmvNxgSooqaqbfVWC6yF1zPJozQNoSohiGncntn2iUsb72GuPRKRXJFKKGHs9LwtrxgMKgnh5iex8AaJc1pgets",
  "key26": "2PEcqZYsc6iYJoAfrkRTXMKZQXtLRvw2rPXG2U6BrU28Yvbg3NgwnMmr9NoEN3EBNCv8cC7UfC1MjzKajM347vDm",
  "key27": "5TdBC3qKjLz59sf3ZFb5zzvecdWrqyHMayk6avpgwWtM4bX87LUDUnuDgtE1huTxNH8BtQVuPcod2NjuibcmfKqx"
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
