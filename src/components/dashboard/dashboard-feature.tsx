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
    "wL7agCYDuqWzjrgpX2CfoWR22Wm1TCU8onsmXKLzCC4aiFnXdDaeG5Tu7SxCj5vgardYwiVdEUdbVp53YMp11GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XbgCPemmZ51rTaCESrXtZMxx4U5TnSHL7ikp5st11jH8rJTXkZzoAH2VY6TH9abnKYjMbXX7e8KwGAfss1TCT9q",
  "key1": "3czYFmcoXRF8YTfxMCnhgQWQnPBAG7afFCkmkAYv6wcn7PZ4THzFwWrVmmm2Y2MzE4iTCmKvCpTKdmtZjAsFNNs7",
  "key2": "5qczAvuD2cQZQ1jrY1uTaTuiEJVuB5Hp3koKRwhjfFHztrGUGrxgerDtMA9F6442SzxjV4JLBS19EekDQnWDG9Jn",
  "key3": "d5jANj9vNdtiZ4Arn4yD65HvpwJnV9snQD2xnPnwcYgSfpSFEoZYt9jrbALwkF8TTRuULheYCA8534mHEkQvqqY",
  "key4": "2AmL1iE7zuutdfCti1rguADJAoCehPYQ5ui3KVp5EzjFZkibMqy4FfNXXm9WbVxbHQRADDnY6uFjgbCMexkrtmVH",
  "key5": "3QwfHeWcAtVB5d1NLAx5Szo2CqHhNPcHBF2G3GB3BFhWyyVD3cCy6up4hJAFWTvr6kT1XLHtapSxCMdZHdAfky4f",
  "key6": "4MxmvpRk7e8wxswAVuPy1ejeV4BAhMQCKghNDeoW1pE4zZGbcQrcFZnV3bJAhQdqtyZxkEpr2nduBU234cYQYNaD",
  "key7": "2xXy444ScxoEFGC1BdfkXWrVXPtjRPR2hGVoYweMX9DaN8o2au2RTyyp3EYD2eF3SUcnN2xasfPkY7UtDXM8zb3j",
  "key8": "C2PzLcsKYjumiAh1K2vM1Bn3rXTC3aQjjqnsFYUyhvbsR7LKQ9rbryZYYQPt3neDDxURBckY6tWtuvqPZt3aJAC",
  "key9": "4utjaAMLCxPeWyGUXCHFN1dkMCmvGMhkTEmkxyKoifE8QRnLaudeWDqfHRgYnVJrMkYt64QMZJU7ot2tyRXt5Jqt",
  "key10": "3K1iBqoX76x2rQNc4YdBfkjAZgRQcDXQogGg9mXnzMXhjeY3EuvULfX26jwXcQwrJXKfC6YStuDrc5vHjkQPr427",
  "key11": "2wtFwMYT3Q9mFpAkU4PEAtVweyamuvwKcD6Q5MCyXc4QiYWAAiwQCEVdZxTjYydW9TGF5Hta4pSUXHejM49zMD5K",
  "key12": "5yuuYiEmyQPmXGijxYgJbtuLFvyzMFJLyF4QZqaQT4X5mXZBnkqqBSgAmDhovD398Znta8UoZh6zBo3FYdwR8E1R",
  "key13": "5ayZQDYfG3tm3JbndpQMRSTpXsUAew4Td62vWHASFyD9i4zCSjZpHWxVWHwCGqq96myZG9nrHy3ECqT6af9Bxput",
  "key14": "hNkWjyDaPJspmY82KiEZrKnJCTpamt3wpxhy8XM3ZE265Gve3aaGbkPVGgcnxTTC2J76y7GqC3PwTaYyndmkchi",
  "key15": "mUWWvfnCSirnEsCR3u8TKazb3AW2PimZwtXWW98W26xMNcCbkcByJZjZ7ddUSpjuYtoHSDPHXVJKX7Qd3RyZDG1",
  "key16": "4593Eh6RB7VLgYo8YWuBpebLWU7nZ1pQHubd7LoU4NvmFNfLKv4nwvi3VfecrqeffEQC7wQ9fLr1mC9vuiLz9KLr",
  "key17": "6mEhBYx9ykrkHXLyZ448FzhLSs2ou6WicEGn4hYfyXZcfC34HNCTfTtmQ5bmZHiCwucbmgoLtPok6GcCidDoMRE",
  "key18": "DsQf5dCUHxeAF2rbDTjS9atAFm9H2V62NHPcnPCL4N6u9gzW35wm47k6vs6UYeUtEF7CoiNDQH2d773LjKd54Vc",
  "key19": "2LMApSrYBzGHCEy7LWhMnbBYdqLRo4f8jH5zgvfRLiWAafWxCKUzAHtLG6yfsS1xgwhxRdj5wt8dbKzwWncBbMXZ",
  "key20": "256pHuvb5htLbdVM5LFoEvqK9cBys27Rnm5k4AJ3Np9NxCJJkqe6aNjb1V9Wrkgm1jw26jktgETEjjRFVTWC4FL7",
  "key21": "VSzWvRrW5dNcG58tRtLbEYvbF2djYEdSk4u1aXVhYTH97YZFtbBJoAR8RvGHc798y28v8QheGgdPYK3AXvs6eaV",
  "key22": "62VpLBU1dHQtdzWVdcc2GedWMBNTf6ecux8gQFS1PqhgdMUzfqutPJmnxwLXR6aXaYEyiJc7fc6vduu7kgAX6858",
  "key23": "2temHTvjm3QXPtfdtK3LsECgXJzc1HYH9C9G5P78DC4DfMNcQ4JW5aeUbn2EHrLaHFEEKmwVA6uKCaVurYaNk2cB",
  "key24": "4GHi61ZXsQFCU2sBEXXSB41cL5fS8F6zpZeUibdnAZuo9czUdTSodMow6sNHddyzdyP6SnHexoMSsmuez47uCRoe",
  "key25": "2a3cnChEjsgKhBGZqzov5BWzCguQ5DrY6FeD1e8mks4XuofsCaw1ptzQytzqDpijdA5m8ezVsTBBwyP1pau39B7m",
  "key26": "2b61Z7W62JQrUiY3UWkhkeXppfcJ63V9968ByK99vUgPmSUWSa3bwNbcPM9ugSU69fR5ppiFiY6k8EPyRos4ZsBA",
  "key27": "2veLvqfXZX6koftx1573nkzWVpHUNsVRhr5JMmfFy1LNmKmXTJNk5YUC6rM7hMhi9CCNMpFtKLhVeWhns76ojqph",
  "key28": "5FKQzrb6VdyrGCPh7CGiuzLdiamtk6rJ37fuMwMcWStJbnBnqoMvH25YJF9xFtzXVQijXGa6cLiijQ71jeDpZKJL",
  "key29": "tmYZuMRbgic3ik8xQtHBozymeWsqWz9ZUnQGChPoBCKw5EBob2qnPCYNrVsLZQRRKD4nyUSahSJEnDu9oJJtNjJ",
  "key30": "4KAewQqaawcyt7EskvS2Zsk41p9QgbJ2wyDt1dxCWfwyhp2vts5bXKvSXdaFZBNSoLvTqYSwQGabE8g9BoERZKAP",
  "key31": "4KgFUF1jXm5pfgcFch4MmpzjUwRB6WdSqs3Bf13vCcJt9Veh892UAZF6WFpMfRcG9qNk921mc5qtmPGWo8nUUrAe",
  "key32": "4cvmSpxcMTmoe3C39yNxHULGVe4Z9qNYjY98vMaa82yrVTbYsTupNq1vRPpCFw5UCMZD6jJ8ReD7mR5D3TPZ2BPw",
  "key33": "2MEKexq6gEBGq2spyaF1ZCTQzhkQk3P23tUh2R7b3myEpt5XPsaUFPNUCZnTetKKgGxG8ZG72RRWkWF2npdjBDDJ",
  "key34": "2evCDdMe6DN6GxG8Nj2ceBo4DVyaCf4hQ9mppb7arYunXZkmgYGn24tzeCj2i8e4psawfHywLqEP7wgmb9CF1vuf",
  "key35": "4VufpkCnq258En8KyfRsqWHhKoo3uQ1YgJW6qM5K2ueBK14zajoE9qBCqGkQUoGMRBj3A85DDVSyWUewZQNxpMZU"
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
