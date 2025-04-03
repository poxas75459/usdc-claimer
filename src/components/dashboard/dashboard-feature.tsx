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
    "3jEHTg4L8Sq5sxkDyPN83GbdZ5KVGAtGAydSWMZ63Zk6WfPU6hdKEDKEEAp7Dht1gxW3KwooyxR44yAJBvCdhxk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bh1CigcpQ1dUGSBi824Znn9gXqYPX4YYsQpp4PT6W8Az2fMfwFfoEbSHAw2BZZKYcqtadVDvWxjtJ4WBCuUfUai",
  "key1": "X4epgZLH1NGvRg1RqD7KXUUj7pdcDht8TZM9QLeZjYEP11ScYZbDTYvEXbuRFtQK5WTAFXjnth1oUPW9UY8NaQ1",
  "key2": "35pJvGLdycku4xwhuEuLGXMHqFgxEM1drSh7nHQxAbfs2s1neCXdnaW5HbNLZd4aMf7SsYPL6Kwbc5DFqoJ5xEfR",
  "key3": "2edQx6tNcuHJoFS2UNkg4xXEZUeaKRyoFbBv13cgwRRD9BTT3Tstc7r9QLA2AtXEMxHA2wihrdgA9vD5PwXJoBfx",
  "key4": "56kXhUgbvPg53RexJD6aBGoXvaaFBhPGwb35h6PWD2kUbWHpu7BdwocRYXCr7vkCocJ5xARWR4fWSbtc8W6JRbuF",
  "key5": "ujvWbQr4qFMMgm74ubRmYLJvLzW99NxhcxzKKexQT1pyEZN96866ByHTN8qgwxAAgNhzV6rFxJVWQ2oDR63QdaQ",
  "key6": "SgwRaeHFy84Nh7kHt4J3RQtRhoFsiqairArftsnggWGaVKpr7ZJiy8KPhPrXM7eaSqAtHHsDJvRoZyiDEHp9in5",
  "key7": "3oHFQfnpuPgRb1zCthcT2n8naCt8e6E5FWjFCeGVPv8x18KvaLt31tR7tQX4VdLV1MyHUGW98HhaD46Q8JQeQZ8c",
  "key8": "4krhWvarNycptTdBFhb1FXL3sFHn31rq1sX1wRtXrYfKLRG8SNW7qevR3UaP3V7tAGwDrxfPio25YjfzpC3JCdZX",
  "key9": "Fnq61SquafjqEPBeh2GFCtcFfbmgG7yHwXxdzPF5yXc6rPxb9V4GngemD1Lc36j82TEiRT5AnNMX9EJ19B4kASi",
  "key10": "2nSTV6PuF1nKNAzdULeW9SHg7N1yueEZDXu7gja1s2AZLcDt3GKkLJN6QpuRpVYeLstfXk9AD4SKHjbzLFCGLapz",
  "key11": "5ZPMRx6m6Wf1rJe9EDJVEK2yGYWwBU6XmLevZb3wr2WvhPG5djju946vGUeZicE3LtBRocW2ecgLpkcdmB2eLLTd",
  "key12": "5Xd9YiW7U6EF91PSVSkwyaZ6VZQX38YSc4KXx1USmUEpyJMqgemmZqNfDaacKkbfZyoXuidntaGwLBWVC4L7rT3b",
  "key13": "2GGN5bCKXRFG2qeYmX9HzocNdHCCvwPiz2RJ6kz4d7pXDP1x2Z2Nhew4i3DyauwmH2VUexDWrD3qbZVNojgBqEYm",
  "key14": "4c1pCZDtdvwJ7Dfxvm8oJySnVYXsP9RFPZrvaYDFrRGpgrAimhyqBkVG92runGCXzaKXGrRcjBq7VbFcB7EzY9Pp",
  "key15": "5Z9Um4nESvz6W2nsmCjAhmA6oQKVTWvk995qGJxq6hfmxwxKwoMjKhJGN4wVrNx6eFuzLNJSS2246QgL31mwduN2",
  "key16": "4QQpDH494BkLWWAzMux1eE9JbsN31mk3vuRyQNAv5mjUhkmVPkhbwkN4CUk713GaxYALQvsYXtzJEhKX8Vu96maE",
  "key17": "44uoKhizoFf2ncKPwR3qx3udjBfGwvMbabbeF37EyUKkE1dnLQVG84SXxLfyzpVNjbLTBvQKWB7h9yUDzmXhzGzD",
  "key18": "2szpVsLvXNyYZ4uynjQnnWyaeeJD3pTXJ4BNR8mfW1cvyw39quKkRhP1of3QT185xvP7ZZuGSLJ9PTJm1zFm4QDu",
  "key19": "3bfKtYKbDZFGLkKVVEhZsejiQXCkbGeWu4YRneSNzqHoZAngT2MVX4muaNpGS4wKuxtjo8mybmxzk7HfrdpqNmNg",
  "key20": "1FaviVDf1xcehFjEFq3VCUzgnTM6Q3Mt6twDgSudgmjuiXaiYRShYBijdcAuFiFFxP8aPA2MXWU7ZfFqnpQoAxi",
  "key21": "5nv2sLztw1Ur4GYrRBfDQCEroTycMpdEGmr6KZQN1P6gX3vLPmGc7ipmTT3PPbY2ZweYrJN1Y3yMEjYdPixAEqKK",
  "key22": "36HmGH3yavc6S3wgXQ2Vq1ByehKUWzHf8wxfiz31MThSrP1FHCTQ4ZuTRzQLqhKRn872ctL5AtyaUHkfdHhqiUbP",
  "key23": "5WTKusTysPNgK6NSDHTQjdPzUTCBp8VhoiR9XejxZhDEWxjzfQ2TicgS8stnYTo7N7KqcfCS4uQPQL9JAHtX5R2J",
  "key24": "3FBLrsSmQmqH5E7SLE47FbhgrriT9tWftFH3HE58NqTzLPXge8CF2vnnuLxnfxdQH1KNz3ftfV83KP6EUtze6xND",
  "key25": "5Y1rCdfRwrnbHW7TwoXWpA4NqR51PE22efQ6hi6mni7f7aGCpsVQC1gRu13XoSX7WLM6YitBUEUP2fTCfQpJstDh",
  "key26": "53RRTDvmqh69BaCkAnCJ7zntmJnB5P6TEXfQxhfTNJyVXfFzfcAXPBfLRjN23mJ2qRBGPH5Fat9mjSmP8rbRg7Rn",
  "key27": "5hDHbP5VenUUooQpfjwK1g34CsJbvpUCDQ8f5SZZ4xsVPypeT7navGG7EXpfd49RNHvdYjRCkHE62Z3cWWat5kAL",
  "key28": "31earDWjYek8zTHaZEi9HBW6ugoQqmvADZuJhUWShmGV61wFBBJyyJf82hdpyHrHWcFeB4cCf2qxMKXgFt5A8gsB",
  "key29": "4PPJfPjsP34T9Bf7x71v7nguhEqPQHucts3zQjtv6m4C1xWPgUg9MtmV5a1SSVj45akAc1X69uG7fKtiV6C4nYzf"
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
