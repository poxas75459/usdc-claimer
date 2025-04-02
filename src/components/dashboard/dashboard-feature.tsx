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
    "2WJYjTN6PiEKBehtF3DbaHHZD11yxhFx2w9GBB3LXSCAb9EGr8A6LWG3vdEj9o2UkKLxFTZDjWNvHfQNoSq796HY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rr6WihfZFtFSdf6tyZnSwWfwuf9q18HsH3CknZ4xqwnp4GX8KhuwXgxBNFtjXENkRQ8YtvtX6AFnRdvPTHNTPy",
  "key1": "3BXPjEjUZnmbq6AQZZbx9C3eTSqd4W4aSoDMYT9gnjKJEn7aimDqAYDxoRgBVpzuDvGr7Hg64NNWBHA3sqFccoEU",
  "key2": "34C7Dzu3yJeqT9n5KvPpu4hVGEXtnNbufgJjB2ERShGrTNgcmq5SxTv9Mz6gifnqfuJiyz3tPuaSSBSAJTJ8L4iu",
  "key3": "e3VFfYUo9Cgazwn7aG9C8FJvvWnHE1rexvDbPC8Dg8hNPnwF9Pjj9gLkTzih47bbMgoKg6ZtcyaN7rPn2wmtqn6",
  "key4": "5gR8jw5aCoRFZGMPbb3s1gANipUkZVwMWsP8KZiDdXzY9gQfanxVaDFeBhAgds4XLZxC28eYQSaMboLzjjm4mPsm",
  "key5": "4Az1Ts9mk1YgKU6gkcTNRzKsJPiPXbJ7ihWPJr96T9y1rNNKoMxWJbeitZbLmhktwiEeUx5QkwaXHoQw97NzyuQN",
  "key6": "5qrhvmetHU3L4VkfZxWBFzVSDoMR8z21jwt5oEVXzoovp6bPqvLBHTgQHJVbyaCp9YwuJeb9BX8SgZs6gx8MwRRX",
  "key7": "5x3kZTGvq1hbXM1tdUQBg6Y8DNqropztmSYsAaZG14dBvKWnWvtDrmesHwmfSj7MoNHBFhdpkJDciHhKDwQr4Utn",
  "key8": "pg6fBfZfTmennnMGSP4VtyzYXqqsgx9pis1uhFWiJcE9DAoeXRZgGesstWuH1BbgEMpBKuJATXqMbMdiHQoyMSA",
  "key9": "2zn1oJTfJepQaVwdNwZjXd47VVuce5Aoi9Q7862ZsdhemzHUVPXrWETtzPnENppbVNbSiipmVDqWrrTofL8L3ut",
  "key10": "3ZLF3qz5DxNRBGi5LBhpe42wnPGBTAimnTEwRGEjtZksea4YxG2RyvvNEGZNBZ8GB9hown8zRcEhYxotpWhDGs5y",
  "key11": "2PwLZHheibLfXsUPd4Cbc3J3F4TYjx2Tq5yQHXk9o55WWdwq4uQJKXQ58iP3VrgDgFGCz8vcGt1M8i2LU3Jrc1FN",
  "key12": "52weHTjhNsutEXmdaG491hmw4N1MSjPYEvfKFAV9BjnYMtPGhu3NZzYDMGrjriqtViG1hZjDJp62Vrkvc4R4KvEo",
  "key13": "67fKkyF2tHbWiFs52BQwdSqmBTWnduSyfEdb9NCofT7MwqqowbomXSyR6peqp63vTuzHZDPVxHeUgdb2ZkfNm1uP",
  "key14": "5Vby4ij2dFDRvKSLDeYQJNiQws2ggEPP5Q2GaSZQeoNn4SuaZJxjmfoiGw5UcBvjb2L38r5oUgs2PcGbQmweuc3H",
  "key15": "Z3fdVGQYa62sEr63uFZYgM5CdwsWigiDf9apTyPpthwgVRGzTsygAaVx3An35EJKU6MLV9Gjmd3z8fio4X4bv3L",
  "key16": "3EtedPKWkf1FdhLRYeK6kNRwMteL7JuSmamiNxjGaNYJzjq97QPqSfv95d97By9KKHNBqJNCwQqBxdY2d3RXFerZ",
  "key17": "2vjAAPSKDM3eqKnABFJ4dZz2dTSKRtfPHn6u3yhbVFfRZVztzCNUwZrynJcyhUFuMhZGZVu8CzANPqDHgcDkVSfm",
  "key18": "2yW1bHH8L2wqYJrjUdfRMk64WEdDZrje1aDuRRmiTkxsdJWrN2sTuCgtUThK3qDLXiTqrmMf62xvUDDiJVRcXJmB",
  "key19": "3hV2fw7JFMkFV5KRSAEff9TK3RgU5eftGX3P2SKgk21bvEemmRroTN8QgPHKDCHxAgZVnb81G3Akh2Rb3qbSReG1",
  "key20": "4CDru1zeriS5ekbHvNzmcVjKmZVwrPUJubrQztDiQXdojtKQBzfiYbX2Nk7vZFa9MtqX4qkLoWGuHc2Aku97q9xg",
  "key21": "ksk1gGf2ZJKYfRyejEGuQT1acNCaxQfcRvpZaumTsHsAfTp2MsP4xLggK5bp1ZFCCKx1MchuLRjggBpsbkdU62f",
  "key22": "2qK18S2GQvS4hfRvotK5BLdsApPEjv1NdYmZ78vKrkRF9QN9rsd5ai43Gbmk4sZf2iao8LU8yfnj3XjZPNjf2L6S",
  "key23": "31R6czs5GJGFb4ELSBgiHgbdcGvvLdXPxf2SYZiA1RcQ2iLYQr2vGWmfidKVDMfPprrfQX39cZMi6R5c7Lwm15Kx",
  "key24": "fd4hk5r5ek7AGap6je2s7xZvTki1NpGwccsQvG6cfkHdFBBLnjfYJRf2CN4frRP7XwcHReQE1dR2VWwSLZMH37K",
  "key25": "2Hjev67rv7PC12vJjogsn17fcNFeBkXmaiVQRUZsWKREr51VCTZpnzwd9B1FwFuxSdxVYYtdgvQ92vyEYbV42z9L",
  "key26": "3Ek98cgeNC8VmB8ft8633Kdqw8z5K6Pievytx7rEyf6H3BFf8bFFSzbQAjL6X4Uxk3C1NSH6deKyVzZS5XjVpXn",
  "key27": "4k187q2EsAnfQxVBQncQRE9yXijQdPR1Dgj69aQBXothBAjVAaxhhvmZQtF2bpmAvLrLbLeHwiYJKctpNqcaTNvN",
  "key28": "3sWGxqkxw3bXnPKuJzwUHFb8uRhkKDukLG45jUik6VmYcALSiT3G6kxQ6a5oKwZeawbRWycdeQduWHrn14pXX7C1",
  "key29": "5m97msAPgqnx9kdCe6saDdpCmizmP8SLMQeCVWpAfyLNqPVsGbDXx2HJH5qcMxKRCb6QaHjJfchEafcpLMDS4dzC"
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
