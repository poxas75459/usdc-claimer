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
    "gzsipGHDTjmUZw4JLUWvwBCn5XhY9k4sSkJ6TMZUGaWWxMUMqNt6WPJ4pnzxtEdL8zmczAA8YWMhpHa3Sv6xM8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cFUir5wANQCR9BruY2LCT1rdzYpQsW63jH78ccB6ZAzmWctHkUKRej626PgKAH11nWs9EaPtrjN32fPGEewmqz9",
  "key1": "5HebMM1goAsWCEMBFpUov25Dwc3wHw9LKhX7rZWPskpGbuai4uBBfvnPtwiEfHNpqkZXDzAsLuePdbqYpqMvk4iV",
  "key2": "54Arnv8BhP8UNcGCtzswFpVuXu6ckRBqEcAX1zKjdsV91kfqe4Nrc6mcxm4Cs9xefywDhR4DY1mBmeCjP2M24NZG",
  "key3": "nqGjhtKNSCfhNoGE5xYW7tMbssy9MWArE5jXqzwthfuRNnv7FX6d5XKJxyX3FMLYqigJWw7jd87S8shW9FZ51NY",
  "key4": "3M8tzdSTBkkF9n5dKsfvjTwiYRJNQTX2qbJFfGgVuvbRwC7GgS5cZ61pB58UTWHeLyTosz9CAJxYmydpyagMwU6f",
  "key5": "5BsRYoBg8JDzWwhjNP1JiSiZ4rNfTXTJLMtUZsJ9rMhcdf1d9MyDeWMYof1uMgmVF9Fgm2rMc1jPYCj3Ndwapfia",
  "key6": "5fM69d9DkGL8yZPazEGyPSnNp66AChzUbMDtjZVjeK3rro3rai9UEYWPkNvwULAHNq5zq8aC8h5xWyA6pu88WMwz",
  "key7": "58zhjYutYbrB1jmB3vCogMfJJ6toRDhPcRn8BoTCy9cjrjRQaXwikv5smnDhHaiQwNTXNdp94ECU3o3BNwY6yoMJ",
  "key8": "55xpWyXWq5QSYHY1pwqqtNSMgApkEf2Z2sQGwzUTt96Qktwjg9SfGKBvm754EDbBqbwMb57mHPqWyvLi8qgHpoC1",
  "key9": "DS3rwwXMVgMf27Y7oz4hQmP6H69RQoLHYHcg8mo386EMqkJJb6Fuyj66VcofayUovSfcxYQP21X2jr2pYrF7v2a",
  "key10": "4Y5TBzFJnsHcTrUjULv9wcnP1r8Hzpg2FsyLymYKqvPBrobkW6aj6PpM2FuTDwc8zSqu1wXMix7cSMRxZumzmgRE",
  "key11": "34byLRBcC9D9F72MgYFshGFokH4MoEhhSNysu8EiBp2gdVhc4Us1b3vmjJC84p4FH4SFEYSTW6tyaAjm6B2k9cBJ",
  "key12": "41VtTij6pG3sjUXtdGYfU9GCfC2i9FExnnciDZgfcxqcD3EdGjQqMF7M8DTVcXWZehazWY9T5RuXcfmPEsU7B9Ld",
  "key13": "4a4Rwdida4dK966VudwKV4LoCof5hMzwDqd6ymmb3fdDDVeeokgkux1vpUHgKgdfoQ1x9cobQ6uQKsYt6suiTmMP",
  "key14": "65ZiYkLEVFXeq6Ejzudiv1ZRyVrVAbMnQ3RvxBoECfoCrggbRL5RmXrhnBrXtbDBTdHdFmrd1zA4nPboCpi6MRzq",
  "key15": "2yUw7SSqQA9Egce1bknc5dD6Bm3cggwzev2BW4n97kDNgEW4BK5tYqsEoLQoUgtxufdrYpeDkFR2dUrg8DjvdWpr",
  "key16": "3cTHNM7tDjA6RXENunMLS38hU3aStSA41Rzsf5N6f2YJonZEQEoMtZubnmnBguK82SDsov15Q6jBYpxsmU9FjkrJ",
  "key17": "3TP3ruz18Fa1wu4Pf5St3SjEfxunGh7Lu6u7DMoR4BoKdg9vhstDLEaFBkfeEwjziuBmi7TUAaVz1awL6PcmNKUM",
  "key18": "5tjto1xSYTQdHjG1TDQVWC99tuoJZABf87HthMHseXtDT5HH4XMfMSs6keghpJhCqmgNrXNWkCWW4sVxrXLJ9eRj",
  "key19": "2neHQUHJNXbXDyjeaSMGP814jUtTAdjh4aDbimCseKBe95zVnsknLpGHVdpsYzvuDFE7ErHwtcJARjAxJthppVGp",
  "key20": "2BPiDdbhgDeiFWQGxbhpvZhJ4wiAdP6iegSf8cDP8nae7xPyP4t4BWGvD6WXXstTi2bhwVHisaYfixeaAYe8TjyT",
  "key21": "XBLM37RFaEATWWC95b1uSp7QW4Cvfj5hHo8V2tPECmxg5vPFJXytGPogi4g9ZMsNY6gZn45P7ar8YvtQXEGXtGL",
  "key22": "5DHWT4c6xNBZCw8B2jCmeXSRKc45wQkJtDkDPw6Vz1hhQeKudJq3uNaeQuxZ5riwJzZFrrDuqAbcs6AR4LVQbhnP",
  "key23": "2Mukf5xuDumskgVw31QA1Nk89mHQeQZPv5LnjyLh6YYpgggZU8DnVgjZdKkGy7w1Z2WckZZk6cXHtNDHaEVrWqYs",
  "key24": "2u3w9yBvW26HHnUXeP4Er9KBqkJfQ1SZjKHFFAPNLHc5rrAr8hMCrHXFU5cMUBMiDTxLGW4vv6CQNkdmBtNuBQXv",
  "key25": "4i8CmfYyVZu3rXBkT3dEEii4ug216kHHRpwUyaSmnuoSovkeg8fKqUARGa11DjPDAX8gbHmNqpqNbqp46kPCU3c4",
  "key26": "3iBse8m4sgVHjA5X6pmCYPXp8Tt1XDFRRhhqzeoo8NEfGh82n3BSQvVeDRxqd3DF3ekwEHH3LpHgKxnvLPNfWdeH",
  "key27": "2gQyq6QDv5DAfGzDhNaYHBHC11Su6XLTe8sGLSWjRjRNpZk4ZvggaB6pUhou5RYe4FAgE2ELhKFYy99qFztKPXgV",
  "key28": "5kZJPfnPwg4VRiVQNcYnPDnJQxt31FmreCzTu5V7ERJWyfM6oByBfUsPM1EmGmj7btT1Nvu2oBMTco5xLBP5ui9e",
  "key29": "4wYuoHNbjCURgvELtAcA8qbKF4KLQZYpUJiU6kZtJ7iwXhkWPX5nDmjMBdzYx95i6MpNZ2h5boAsNJpFk8EoDG29",
  "key30": "4EtB85LKwyokoWisd9LwsaS5vPQDVEcifk5aHaGHsW1FSsXAK2QejpD8y6WzBVRTJsZJzXXRsRDdGXqjiZPeRWyB",
  "key31": "5CirZa1GmpNASFeoQMkZMmtbWJSz2GW4KwCoTtJYEYEwsXX6YfpxSHh8to5zJx3PRMJq5SiaYMqx1y4huXJiKnJ3",
  "key32": "5PcfhZTUBJgWtjRxYtPyjJyGJPj5qj5MGkwHr3zH2YsFBsq6q3f2g4j9t7UQLz3ghcTXjUTMvNwmHjjMRC7PeFD6",
  "key33": "25uLhFyUFkBabbxyj4fjujwePa4RfQUfQhE8He3Vi9yAbupLdkhogruiozLnFx4jMe6bSMuYjdNk9VFAoE75Z76P",
  "key34": "2yQMk4LA7zvGaQzQ2LFpi1dm3BJkFVvFnqHbesaM8bbugE54Y9Lg9YUmWf4LAJPNvaYPcRSe1QaaqMkzB2Edk2DM",
  "key35": "185gX8EBcFucAjrCpaQD9Nup1wCNUEaCZPRtdp45NxpnKPfvNgKDL517DSi4RK3YdJf4MMePSAT47rnS9T8qLMa",
  "key36": "3xGQxuuUFTvUEN13Mjzy8UrLwQoYazE44zbZ6ogWZ4V84WPMzctFg8AJCTW6HYv5fn5mLjMJdxjdTdS5gfwkEnb2",
  "key37": "UUBQmkegisUgMcDVWxEzZ5mrbMeBaqaCBN1VnPhFsUoHQbWYdRjqJwtyvgdyZjUZ9ph4Csn7nzQRz3JssQPbN5W",
  "key38": "5BCcAhmVJp5bsXvoQZ9n7ajPoXewEEgfFVLedosKTi254Cr8LLxV42jfvDngBkMi87YMWDeS9iSXtSUdH6dRVguG",
  "key39": "4fSJa2cpX7zZs8wzHMRHdBZBu2bCpcEvwz5Msno3xx49sLem9YUw56dAvQpJktuB1bovF8D2RTUaxDZ6AEt55GK6",
  "key40": "5zrENHmGWZWEe3uteVa5yC3nKheMCwKsiUdTGiChWPDzgeKzDPv2vfpQx2CQPbaoaL2nF2f92vu1MYZ1UuQgrtix",
  "key41": "5WHrvfNEmCramDVYWwPkbVhnqpaBu1BtqZ5cWbzyppybZ15ckqfL4DM71YL9zJUh5JxtjKga4rrpwdvHuNYA52Zm",
  "key42": "PLX2Eyi58xfXs4ywdxEZMK8ohkGgd5zYAysobzH7MrWJtRWbcmzAKm1RwaQDirnUHSQbWaLAo7qgrjktkohmTGY",
  "key43": "39PRRQVWeBQ52K8XYdVAnhCBNR8ZPjHfNfp1ToX57ao4GCgg6uhEFELsyqNNzYYnFFXR7Bc1EVbLHWYX843Yg18k",
  "key44": "ZGs223Pv7d7FUKPsVSokrBnyPHaj5UUHMQBeMtjrxnPFZvJpNhWZxWS4qMG8VERgReE469gfU5fp3nnz698fKvt",
  "key45": "yYa65SUBip1Ymy6NpyhFptbdgirH9yyaWYt8nFrjC3ffFuWd7bvWPETNR9U5ZwsNiPbb5vUSkqEH2YoJKQ4bXwW"
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
