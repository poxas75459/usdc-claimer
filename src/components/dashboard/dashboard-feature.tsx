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
    "4KFDG5d1coDZcH2cfSFzzzQBKj7tpFYjnWWY7Ws2MNM1MhRXzyZyKmZ5reNbtLCJfQEX7xgMfdf6Pybsz2FrjCWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DuufAXXzRRUHwPstKrcLo32uuvqaKgPYLcyW8PRffwcdE6guzUYe5g8CbZ4seEgiDCQRWugMTBMyywUmr9mFKTn",
  "key1": "dSkhQjFWRh3Wu51zAS5pTsZYkKjNhKxS1ZHV1CnVPn3YnsMcB1VjppcK9ALkJWPWT16tXkNXvDt2vni5ZLb8G7h",
  "key2": "9wVUN37gJyQwTVUanfPSiUYvmn9t4jKEj4MMm1VJ3rDaRo4CkDsB1UC5LJq82zERWr8t6Wb1MmDwPPW4HSSRdrM",
  "key3": "2LbpC9bAF2nVr5xNUwxU82KxgBJoLLaVszRughFX7VWtTz575mXQiDYzKMwzhkxjMWaRMiDhWStTTLpbwTVvP8Zm",
  "key4": "3NzbytkLz6Y8hXZsjiKJj275tV9Zxisqoxf6bcHANR34aK9QNujEvM9tvNq98dmk7PQ3uJDaeaqVCK3eLGzN5xKe",
  "key5": "5KqkBSE6WavL72Z6deziNbxitU5DX7dApH4LVdA4PZM2rttKTbmAZrRrhPitGSjFQrfPJhzCGthd4PeNL6Vp3mbs",
  "key6": "5FyT6DPiRtPNnhhBXKWNv3iudUSEzm427Ru6Ui1gnmA2TthYQUJMLG4q8zA8AxUGgmEwQXCpRRZzbirG5qbRJgHJ",
  "key7": "T8ixSCiNgwU4Aq6NUFPRqBfoybJUKTYz2kKXnNZxroGwBQQD9uFjtfXGJgDNpYu6fwNAQX2HWMRBrp3czeiw3oN",
  "key8": "qp9rEEqvPt8Mr5DvcF7nJsho8bWxRkUiHWdfvHWTJhEmy161tiiUAjrKVeaGv43rsizoe5XLmQPjvsndPoPLtDd",
  "key9": "RSm8eQTMPArwVJxqQxaXKLqbVW8qSCGS4hqs18rFGMAg52ifUMbxU3b3FjrQZGEgSNHWLvewQr6gexhmxAH17NH",
  "key10": "5zcbfMDstW2YrZTs3WLe9QCEqMzzSHvn8EvRXMSmc3RuJXNabqQA7ktiixTsCqCNQiSdPyQzjQn1RtySADfrgpfg",
  "key11": "2oRVfauqTvdXZ9G8UxTcqhEy1RqP63jkBSL63XWSXntkiRe7uRWJtgm4ZHHYQdNmBE87TogeAziyuGzfnNpXbPE6",
  "key12": "5rcJ2FN9yv8QKABrHCBHTYZkbGMh6jDkyGE1khrTJSgNzh5dKGVrBTNkbZxTBi2wvH6o1ZMJEkgaRXA7LDNFnn5t",
  "key13": "3q9CHs1ZJLqVauHoCycELqHkztn6A9kDamuzPaFTser3L2JKwsPDD425E8rXyzng5wxSrvG6Q6AfGpZRgyDeQ4Kz",
  "key14": "4BFAapNUDqa4yZQeZyx7GHdi7Zmq5rrXsCo5XFSDJsj5PbTbMB1odYfj54A6oF5zXfBbW8CpFPKJx6AVjwsDUf2f",
  "key15": "4qfwifBK1AYrd4XDTTWr34QSvVH4Dj7xkoTuNepXmbnChQ3vgRCroXQLE8kFrW53unuewLZi88USrmPGnTAiyWrn",
  "key16": "63E86G7BpokLrpRndRdNMHX6AJXMEbMp2sm2ToXtPhy4ZFJfYneCzWQfuZpny7mT2A2PG2cyoNcPLsdrBheMYod3",
  "key17": "45m6CwSDifSTksKoARhqanT4TUKmFBrAdTqWAduMyzL2BmCM4c6jv75fpZ3YfL2LMkRutEGjAY7fu4tVhDNPuVhS",
  "key18": "2A5Kk3wTy51RXCRQW75yd9yi1BaQ3HD2SXWBFnzcKNNW6cLKGXGChLH8ft1nKa4QthUrca5hZcDbdPgJm54bYTSU",
  "key19": "5ofq8ABNzjNKV1oQYdYwsYeQN5s9krTwxpDA8zkoqSbHHvCkTRhpjAtqskM5bpfDVNQigJmc7ePmrAyCF3edLprr",
  "key20": "2Av7QWu9Hiedu6VjFEo32ijhuiVRFM9qwxEdefSRACf1q8gCd2SHE4tTKKxTnmcjw8RB2oiNNckZRFVRyJTwJJZK",
  "key21": "Yu1WDysKE8Kqewu89QaL9voPPLuQmeTRB6KKrEm3R2GGX7xHmKLhizFeeaodR9AJaneHHkRXMsxfoW6XpK5MW8Z",
  "key22": "3Tra6SHi7exgsnP73qj9ZT7tBR8ZP468SqshBijV1EeH3qiogmfi9yKarQL8jTMAyFN5sxAMb5xt3n1tcAXkQ89g",
  "key23": "4C8m1TgUBY4ZThMDqD6dwe8TtSkJeBeCm1AGTbfutSxVGHTUDLdX5EP8DnPSQXLKn6zkMcWJxaaCexPgup3KMSmR",
  "key24": "2zWndnYe6xvygPShABSDD9VjywNRZwgMZdpx7s4Ch9zWjfeXAcLfiSe3CZgPPAYWTWz5ZwYq44aV3b7KR1ZhBZPu",
  "key25": "4ViY3Lsn2hWqFRU6BuFGLtrcfj9RiKE1DypHEjDgUSuanaDn4nHjiSNnQQ3L11bvCXLPbLKatdoogAMSLsPWhHXi",
  "key26": "kDZ5CjP32wWhSf5u8JknjgEjFSFienQSBXtb9aLJw7BCC8kR4Sgzr5DTv5y4FhRVswnsf1Q2H5FaD7ytxzeU3sc",
  "key27": "5WmA9c8y3q9hNbYjfujX6ed4EfPZSkfNrRg8cR3eGZp4R3o5VFp88YeM75cpmd8YCv24kJNJZVsFigSwAck4hGvd",
  "key28": "33Njpa8zCYwnzgx7tiTPzUfyJmE55rPEjEfxjZVwSSCnWjbTJzRtiaAR3GXVTcd5Hx6Zq2iMg4UXQkn6y5gu5Ycs",
  "key29": "26VWjrp1MvLudYEXjXcg7wGV27JTRB2yar1K8jSEJ5UNi9csgRhScYp1SwGhLUeFNoCA1u7jqs3oHCkqD237cCus",
  "key30": "3LUbVWhjfzE9SwdAg43KooCRSAS7b7qXmjJKPTLM4T45oFuuXLqQVppE1qVvxQBeXQAbcSbtyiveP38CzSYoimoc"
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
