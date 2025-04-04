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
    "2z1avdLY6oSWcTHWMDhZQMqNUoPkoGWS7ws7PQuCvvDoSpwMnDMuiA3wLTcrhJtvV54SCAVk1sZ57EDUyjkcxkHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hdByfoasTd2mH1rkNEhmPojra2cwfrW4LQrKvAsL94hR7wR2Sff6DJHaXMuKdjkUqGTdGtxAw2szvvHRb7ENPrC",
  "key1": "w6jJnTLE3X4DMg8pXX913BQ1dXgWkbUyHELzFHLWVwLqTYv8ettEBcBDChfyNt8Ru2tGbbzsyJb16hQVghqHeoa",
  "key2": "kbcVKPePkfhEzgEquSdzQKFazryX7FoTZqqThe5D6zc745k18LNuuupyhVQfLH6A4anoHy9y4acvsHCUYTxdYod",
  "key3": "d9P3wbDKycTiSMatEAMeHQznYh15FZjvpdPJj7iT8pLyj9rrLbgAjjJKPRCpRsQ46JUCPk2PuidhEMLqLFHtUor",
  "key4": "yRTGwrLLGAKVjii8VnND9zJVQMPquh7VygP16p57JtEP7AA4Gdhf7vcpyCAn6dBJMpPiZTCubmAbMnidwLNacGK",
  "key5": "7VLttQGeMtrrYNVVh38eKni1PRjuTq34AQi8ydqz8LzEvMBjPovrLuBKYSK3SvyAgUErAiRLzcQiiVbhnBFgy9x",
  "key6": "66Lo8Sh3ZHyoRzkx4t4ryK1VLNTxoPf5NyeCBbzTrHUm21DiAaHas6JpGL4s7qhqViJxww5SHhBgfYeBhhmMtGA6",
  "key7": "4nL2DnZNSEd8EK8rJHyG9BjEi79fbXNz1sM1PDUQf4SJ1ezLF51stZT4UMuPYHjCoioSxj2EHG5hmKG9LxqvdWPD",
  "key8": "2izPujUfmd3Db883XeFTxCqb2BipVSArWJx8SbBEUV4WCUwzKWDfC6kdiXxE94SyxYU1tJa7j7wyQExcHjrn77tD",
  "key9": "4hhFQqAL2FMujm4efgJGQ3JAeMzHVhVmEFpvUY3zF87vBG73P4cUkLiX8MzoWMRtS7rUE3McQ3Yc4rGXUuWtbsrF",
  "key10": "37aUjJ7tmSLupjHWALawvPrrWy7TpdzCuo9d2tWShDA9N5sTBaLU2TWJgKSJip9duXCoiabqUP3orD1TpunvwviZ",
  "key11": "2Jzqst2HcAgr2Tm84Cp98FFyQquycy7fWTUqZLkoY4enB9c4xPmiwwimAXnoG69mtqpRAUz88Xm57LW8J9ow7sEc",
  "key12": "LttP8Y5aDqXhhAfBPYnqfDC3zRkt6JBYnqp7cynPgN7SwJNWNWxyTSpWVjtDM5iPW3DUzvFQsc8gBryHa8zYR1y",
  "key13": "4LHsHZDbHXCvhbHQjTxgfQes2wjNBX512P546G7Jr1dby1LbtDLUZjjvsyXg7x5Ju9VfeDA7csVCe8QNJTjz7zy2",
  "key14": "4ruAw38psJk4JR7KofEenVmgqrFfJfWARsnWtoaN64jLBTtdY19DLGzvMdQLpdFiT3i3fuNb6hCck3nt6xkkTeMc",
  "key15": "5dy5u97mL4bCU66EAAchc7bfvhjnS8ExxgqkMsz5tnnzHhJfo7TFrq3ku9RBtL4d2pXFmAyrn5zZNm22gHqsE2zU",
  "key16": "3Nth8aWLkKr9yR27nmcd6AERA83YvwV6QMXkPfXLhZVUR73EA7nwj3XBsXfBLXagrt3FAaA3o1C7vAZHcG38Pcrk",
  "key17": "2XbQV1W1q1KDuLiDGEmFkTguJMdRABxFuYsfvQAfEBs2C9JttAYFSTqJUTUDiXk546e1mZgahu8sgUxGHXzdvbsx",
  "key18": "3fK33TDoy2aS1KmRPRZdjJ3tJ5Fk7ciVmn5iacWhf1ZRRY6moo2BB7QhHgBrDUYdsBzCGi99pQcAhwwADvNN5Eo2",
  "key19": "5YtA7F411mYMogMRf318jxxfueDZhN4MPYASdf6TKRY2Qf4vYGkNwYaowbUHuLARTMRSyj4sWmHfPsyAcZjep7Um",
  "key20": "2ectQ9aHUyFcUpkpX56iLocW13iHiD3CfgPKncMVqe2H1tfLLRJqJ3j6aGyKD2AbkrAS4fXNNQWbGSK8iNLiod5N",
  "key21": "4ysbahayYt4UmG7da1ZagMMezvkUP2dtb6RELMpHHReUUDhzAkYSiMFVwDrYWNFaohiRwNj5SUwYwqtGaGNvGxRd",
  "key22": "4AxfF6qRgbDKXVdq6WmTTboZpKxk7Pj8qikFzjRuHDG2HiHpW2BDE93d7NTZRkGhUqH1pTZ3ThRLi1N2oPSidR6f",
  "key23": "4KojjUgPrasiEosP78fKntoMjTKqEd7XDvHV3EAPBAuMD23GbD7ZQGkhqdnH6Zi62oahSD5AQHtiTkPQbawKoS7j",
  "key24": "6GXSDqJZUzkVf4wY4D6JGdgHRs9VC3RH3wVdypKNRu2uhfow3AzvYEzm4i7FgA2KgBkho6QNKtJUTbunzASDKiP",
  "key25": "S2cgXUVACiePKJ7zJVgUv7UeUKpgzGGb6uYZXQh5meVpzitkou9BUH2MgLhGeoAqS1fyioBGnV3cooDd6Su4ZkQ",
  "key26": "5HjWXTBnVnnFumFUmMRY1B43PbN4rQApuZB95dggmZCVRWePXLY7SCivrTeBXoHuuPnfYiLBo28GYCrRwUqbxqmG",
  "key27": "3s7sFcjSehmY5RqpGdZi5EQUfpsk9VR15aFpxUergh3tSepFFy9J3p8DK4qd5iHwsoqk4U3gwgyBtiTUeKNVBGYq",
  "key28": "4QABrtfgTUbCeZDHkSXzQxJx43BWU8ZReNUhaWyN97vTrAXz9pVejTC88HEoUrRFKxU2qP6UaSFCrVFGgwVNo3bN",
  "key29": "34Cme7V1NyfoNqMa5Q89b8dyjYykwAufpXLg7g1u5vDaJtZ5jQeoHUygRCwqEpFy5ZbzBQHDiqQEEuJwPn1vsNXz",
  "key30": "3Lzszq6bpWMsF5wxWCwKoYmU8CBh4tdHNxvrBj4E4PVAQXJ9PL3tPSijAjUXNoX92cYV2b7Nbowo7TacNLrcNSmH",
  "key31": "4Bopoj6pUtYAMKveEhJC3zbrNjoemfCFbnXqW4kyyuyDnsU4W5QRDedA7Go12rEtnM1DQPBEAvYgpDgCr3PVzoSz",
  "key32": "2eUugLpTVyj2r6y7tTrE6RFuFcsvV7P5UQSXVebgdsvmtxgWYMYE9zmKkgCnw5cWwSHywh9T6MWo87f6yQKtf6TR",
  "key33": "47pWzib8bU4gikr85MBCnzou1oYm9WLDPUS54TWRxt5mGvdntEWWYnUQX6kBuo6kMjUcrKr3hv7jQfB2TZ2hyoGV",
  "key34": "4nXh8vyP6P5DoXACVxkWvPYzrbhkeDCaYFuHBDigPyg3xUMwfB5DmCgM2PFv7eseq1h9HCB8oLvmVjgCn2gKpkyV",
  "key35": "2GcEUv16EvNfdf3QGWJ7pfftH11nREaQ9QPSbeQT4WJn9BJVD7oKrLVdQ3z4jLuShH9NTkYaTPyUUFXM9xXe9csm",
  "key36": "2mmYBEswU53c9HbL1LwJCm4BVBcQ5MAcLuMSv4BAtGxJJhxHFY7pyqQZDprqxEDZLqfnFJTM5nreWnLNubJeKQvi",
  "key37": "2ApXUscvfsetNGUEpZ41WUtCMqwrTY9mb5FnG7NtGuw5wNUhhNE5qZ9CQC9ueNRjDJ8zZeidhBJAmBA5mdNvVHkN",
  "key38": "4jFKh6TuvM8hDfaZu1B8MWcT7VGtTZz8GZ9bgbpP6tu4jAE1mpssi8rCR5hR39oqMeXAzg9nupYFSwFVq4mREJC",
  "key39": "392n3fDA8kTq8Fto9NR73Tg64u4U8PFfrdatrAbe9bK2Vs2g2UxWdoAUV8wctDMzLp32VWPHhj1XRMBSxbBF3FZ",
  "key40": "4h4bNNLSvHMM3C5eF3z9Na2pP41F2vjTsenfkyCH1zwB7hhfXgu1s11AoQJ9n6BefuzaejmyufLuQUMiEthWJSuq",
  "key41": "5ddfa4BwhGbGChpdrdBhpBco75i41A3sXyXkemT4U7T734LrSxPEzjBnv27jhrn4cRr3UZsXvtscujAvk3qQSzCd",
  "key42": "34ho27nS8y7jfTztNCN7FYhD6qeBhxndJZ5dN9B9aev1cNHJVhasTiFNguc8E8thjWpwePpN977FvLhuh3H4iSco",
  "key43": "VMS1QdvCc7mdSiU7u5E428BFzN4YE3VEiTaUNodK9ykFhesPVqLeeddr45SQS27zHWiTZysn9FDCU4bCFv5CBMF",
  "key44": "ZEN3hY71a2Q6QSAGgxQbS1gQs1EEChRa6k1mfBgAQMR9bmVe3fN5a6hg8bNyY4A2LbweDQBdkGznnFnThKnVj3e",
  "key45": "5Z9Ycmeh4g3mAPC8qvjVkRdJ735xNpgmnYsb9oxTBzGudFSCpuywqTygmV6Q6mdTF9LjnXJaq4G3SmvRBpGbNbMw",
  "key46": "ZzzB5KXrWSYj5mgMT1ZqYY4cgi7i9ALvwqmMPFqzcYG91n8qsFLNXHU5BYAe11JHuESDgbVao1ieh6HNG3Uuxn4",
  "key47": "4YE6X5XtXrmSdePnRd4rW5xQJHLRK7uwNHimNN6D5PFbo17tuj36zBF64giauwrVjBtMPZZ14ZafDSRA85HcGCS3",
  "key48": "5C5f8hg3TmRgSX1bSiFFNxNiV7aNW7f84v2fM7vAndJarMuH8zkgc4DPFw3fRfQNKWkNYLcxBj9oadaT94Vs6uUe",
  "key49": "NB1w9eBpN4iarujTyLUUTewjhWLLBg2NapwHZRHZHYzB1gLhh2drCYVJZqTVYQzV7uvbWxXBq95dYUpwvjTWXtt"
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
