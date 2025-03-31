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
    "42RKxDAVgV1jVHDx6L1cPQX6fMyxqD9BQvKxspc8QMHW2RMeb8fsAoBvJzeCbyWhnUAtLLeHYQLbjzF7fKXXdcZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44f6PNPXXua58HUhAfLhV9gxKZdqFN5fX5ZGicKqgZwuha7hPAUWDxuxMw7GE6mEc3dioXA3BQsCJE5Pv1oaKjyg",
  "key1": "21DkKDt5UgfopweWm36iCpKtJQWVoDi75ErTSrHYuSsx8hyeof1wpAFCrD6fxeFSEeZqGE1iWc18eJzHo8U2uSsp",
  "key2": "4fmL3mmw61wZiqvkojwKPDbcmhZvMmHsbZR74QU4CwByoH1CW2qUzBfx7hrgAJ6Rpn9s8wzoocn3hdPDGcNWrp7Y",
  "key3": "2pB6dBKPunS4DTdCXVk5fL9wrVFonvi7ST9SxnFWTXCsKRxLDNJtGjYs13XyBTRFNNGXZQYhT3yk66koxb2tadLA",
  "key4": "3WNJV2WxArvRdGHHvA3PmdiQc91gN7y6tHf3Lq6zVSuMxCVPYJEZ3MWRyuxQTaHpE59dhrLbzG7aSJNBcozZLt7v",
  "key5": "GaL2UDcKpCCdn3hvv2kR8S4UVBTh9Nr6tcKsGhZN9HvmXQXBee78GEbv6FMPpcDUpMSJG9XNofF5XL9wuB6VmDn",
  "key6": "4sbtbMA5EGPdD3JCKGoX9g4LQr4PT54MB9YFemYnT5ZmMYZ6dpLfGUVv9f6WFFjDLdNMeVxYDvL9yrrHq82CqhR2",
  "key7": "2qLYCPzqFfWzMbXerJRQgBxWZHTTdjTm7AThrvGz1wsyK3jWfj4p58ojSboRRkNzMjgcpN5uPaWWCJwQ4roJ7Jxo",
  "key8": "3b8rvvFBUMWgMHrU2bFQKnkAJy8KL1sVUJxS3JxkZT8jfxqv61FKseqD88tC2j4dWCFEGfSihqAyHHvX4sRnXWaP",
  "key9": "u8d4gN6yav3pZ3MqYLgEz9Z5aL8vzFEa1tEq2eofFA3e9AQXaoecW1xFPT193DBrSL3hzJNprwJaDknthF4d7P3",
  "key10": "cQyRQVFSEDp8BQHpieokAD8Af16xdEe5dhkKUwtuDgfAXdnLV8v4eSMaiMtQNA4EwPejRtjm6wxAQk9TvAM3Bz5",
  "key11": "2TKfgrAYmCFSFeJzDWizqbpWzhnzR8PWLYP8xHbCJbdpvHekZWvy35nwTrp1X51hht11WRr2BU5L5CTnBGoQSz74",
  "key12": "UksSRAScQuyYnHncrxm322Fn4WooGw3vPLZm8xDEgC4UBNfdEQBotYUTZPUCHmoK5ihjs8pxDtCwof9c67zMY7C",
  "key13": "2V9A3xsP2Ksxm47QEsFVv86RRChDB1pA34w8jJYB7BfvDbuUMaXQiUvcfT47N6PDkNN62qaxihT51sSL657CYMzT",
  "key14": "5QRQmrTVuemdgPEiFk2mGFPpER1CLmNqyw6DafGq7BVVEwKdx2wMC51QxYiYu2DxEX2o5YL3i6AwvqWoZcX57jCY",
  "key15": "VNWobmuX91DLfr2b2pxrYYgvj9moQKoNaxjaF8WZKzjY272fRKJ3Gomfhu24Se24biKZjAXXh7ZYqEoGKnAiduQ",
  "key16": "2fz4jBNuyNyPF2PyMpbnYsFb6aMeJtZX25ERqCSanDZ6MMVhT8Mx37kwHUmbqyc1i6vg9f3dfhH5yoEo7BKraF9R",
  "key17": "4cudppmLBLugMB7GjSNFE3tZDZXz9KTWo4pAGxDv7zSrYGdWFEae4QtUS9d9Sq16m6yuUVdP8EWPark5scVR1JCS",
  "key18": "bpnRYmJYr5Dz7yJTCU1PRKwnkK5AgYHs6dsiG66T2RNTMnn6zfsvL8t8Xq59rLwfjeTHiET5o6u4CT3DaLnYAxS",
  "key19": "5NEXQKiuadq2b5qFzXT4uQQGEXdc1MNQfAPAa36No89aEugoSbavDYHApSFHGVbFaXKx5ThNjAutRhyb3EviUVix",
  "key20": "F6ZTcfBEpSP1EXFbjYPgAkHJk68sVnUS7ZhTcQp5DZULU7SqRAw1s8qmiqoFGLTEXi5ck3w5DkaTF6eteaf3uG6",
  "key21": "2VDJAeFKqDDhn81zxGowpw4HmWeyhya7ivo1Z3LLrKSWV5xeXoDSJ7VbtjzU8nVPSudFMmi4FqhBptgqunkApHiC",
  "key22": "275NRhDdPJjMg7TTW8o8TmGfht9Bar9Li87uoyBDqM3U3bk6pZ7nhdqrtn9E21QmV1pVN2X16fun7GHBdaCvJoBV",
  "key23": "3SbV37MZVXr9HzxTvXhpzgUwvZgb6LphQSC83fenxhQpMeGR6Uyf9Mar1du17kwaXXep5YzqGookiWFPurzspCZ7",
  "key24": "2TF3S3hLNTwxgqCjAmaXr5eXWYSyuMhmGZqWW8rKjKZjtunZawTeDeGFTmWxTXspB7xedmQC6kmiKV4Mq4HXcTVK",
  "key25": "2MUEuLsfNBfe4ghkjUSc7KKdQqbbhdeoU8DNSNCf2KYgFcPxixvVR1MPZmQA4QjzCNrcxUDZGdJSRaSSvq9RuU1y",
  "key26": "4n8CVn6fgPRRZjFWRKD4c1JkkuaTj1WTA9JUJVwoB4QtYt5utWuNGb2kn7xZ4egPTxgHLYVBvfy3oJS5mT27fqLQ",
  "key27": "3Av3mnG5xCaMQZPKrGejESM2G5S52HkcMotN9YnAhcgjfdDVhbZjPNfvFjPvuZzGxh1KZcP6WTd9ggRaBBLtwKPv",
  "key28": "5AVWa8MA6ioJFGkPePqzYSyFZZxnNA4W4KhZoEcig4oEcKAPA44Xd4ueEJge9UCr5XRk5PB1waFF7u7bR8dw1ZSz"
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
