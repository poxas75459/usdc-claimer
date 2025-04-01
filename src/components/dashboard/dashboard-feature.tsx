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
    "4DgHc9QBkpdCb4jjaAkMCFwQNFdSKaqo17s3FQFkEcdjof6rqYCB8Dvz3PdbfUGMextJKfq298vn6UKTmWC75qcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Psriai8qbhuiSfGKLfxqjUDdY4Eb4mxBfByNf49DDecPHLUNcvdwyrbytpzYqQgN2GjMcdPXZfCvTM5YEy6GXf3",
  "key1": "46BqVfd5cM7sM5pWeoqU2miaV4P1XdpWVXjhV1znj5VF5SoTy93GqogByzWwDpTntD3tVgqrGgpKAxndyZufyVxf",
  "key2": "3agitHdDsJwDsegJUBMaAgHijdMRK4NeCm3vzwTFrLdR6y5PSsSkpUvu8XvWAtLDkByXv8SGWshFYHjze4cbWmeo",
  "key3": "ZapzP98ohxw9WeXAtZk73uvybTqgSA38G2HmirJjMggL9jTS1JSZe2XW9xbE32rphiP46ghCskUpLX8MKZYt44j",
  "key4": "3Z5JNUP8f5XWYfhqAftNcdA84i82WWGH73NJCRrhEzWNomuGVc2knVDxrb7bG19qhMLW63AUqozpdN2LphVim5d8",
  "key5": "2xzYjh6jN4hTwisuFTDGHnZYCRyCeCkgs6CABeLpZbyrz68Zw2PM4bvJiymtwB3vZe1AMTv4XDAQYtFk3yKoGMqe",
  "key6": "5HWsrq1u3XSURcuGVPao7uiqE4dnPdUWGyhLafKkEoGJsiUsh8oqfHGAJtThikDJv7u6z6ihviqej7yz3ngMpUkJ",
  "key7": "Fmnf67LypM7PVp6SpYKgNHcxG6WkZH5Va24PEZop5pWiLbUx3XkLkyZApbDp6FFYYj8KJh4LWoYz5ZDHn6VtD7T",
  "key8": "5fqgcHmRZqFdb3WFyypBR4U7dzcKppbGExrXwedw3yqscGeVRhGL3JkFQ1Dkqu2vm44HqNbhnJjW6QqkzmqwTerd",
  "key9": "5NLfxwWR7bs8oMbSfeez5ejjgP5UAN1kUBRTPYM5Rf27BsmoJTUHY6fqXJUEjdbrqowgVLg4k2h1WhaWQizjUrbz",
  "key10": "3zy88XsJoiD53VFXZi1NNE3sS6vL6Zb6UicfbM8dRoR4atTmXVMk5isUzYuvS8V3pAAje17oF3G5zPBr1qEHhc3n",
  "key11": "4zBzdFKDzc4qz9UPKNMbcsgYFnV7v1G8gqBxgeY3d8MFfUzMoxtFVujuGoMGVZpmbyiUFf1F6VpV97evW41bbKbB",
  "key12": "rnL1ppQbB1SUcTCZRtW8MdzbV8tQf46iWmEhD4te58QUtsVndY7uRuSbXPKydJjr2jq2fMA75CyajnZrzNe1XJD",
  "key13": "NXS5iwkQ5Zoa92RkLZXubqoydBzLtXE5rnPaCSe2D2uYhnMtS3p4gNtS9HJyjSvQVdwvGBAHBkxQMofqFFzcnjX",
  "key14": "4e3gYWjbvKStawjhMYUuTjrcJ2W5dnxb9VBcxijABwHmomaVmkD1EmHER8T5s8XDWSRUAYYB5cFjUGx2393H9MWe",
  "key15": "2WC7o1CfC1UBALVPXMiBn2cAhURgr5xhnX8b247Bu6kmawWLKQJubRRYU8vcUgPXafVQBDgUbd9SogrvdYy3dHK2",
  "key16": "39UB9URkdedyiFTwvcFGjS7ERTyvNeWS42kTmLAqCcm3xt2KSv5KBAeZBuCePY71peuGKRevXK6iYqSNAzrrVSSk",
  "key17": "5Ca42zmPz8noDGfbpvY7JwGv9t6S9miptRfDjsmchjnjGqeCvkcQWB5VFdcUbt3U2KVX1kkGcwGRQLVETUxgbZ6n",
  "key18": "5NjJtGPMBjrLNmz8nVLp9hAkDkFGXqPmmx8L5gytFZ6m6BQACiD5GqymbuUwEqxc1FdrKNfyK4YoE2EP7cwWsboo",
  "key19": "3sqL4V29p1Qmyd4QLReLk1N5ktvSVrZRfnws869uf6okhDrZKsypvnJhm9wsJRfdm3VdbLjEmXM3CkQhBvuV2Vo5",
  "key20": "2bnG2bCVubG5nxQKz7xYQpBAygZx1wL4RSd7oBD35D5pnga4ZMGKvpmhiMAEXQbChs3SGkyk1jNHQqitRrUahjr3",
  "key21": "xFuHhpMdqV44FcJFcDQcCEBXdpggiZwuwWXv1jhs7VptqoncBn7rNoCpPPNFSq2w4qZTPYvxBKkDR5KNX8vWBYC",
  "key22": "5bmjAcDyZM2oZ2h2AiuWTPoEfzU6oFnc8NjEhks21NBrMQWYrD4TGXhM6C8HB37ktqcEWjEsKxTGTr3UDarKx7PY",
  "key23": "3jr17Fabb7MGpSH3MgXkQPzFmt3jiMJpwkQSNoJ1Woht795j6whm5vmjtX92PZPw9mHMG7ySvAo8N75fn2uj2Z25",
  "key24": "NG7Rs8vKyzyNZZwMuAadeMSc8jvMF7MVQaBoGJiXePA8ctiR1h9fhw5Lfc4uU5vbYeZ6XdLSxgdQWWMt6vCfDaa",
  "key25": "3rRTZW2CBUQ1j8XsYNR8hbQUXbcUT6VmV9GQrUJF6aehvkrvVKgUkA1wPJUsGUofYntwx18zeFc9dMxxyHr6GPXQ",
  "key26": "4pubFR8Q5ZndGu1ocbiF1o5FTqVUtTP6siMmVP2S1THwsSew5WpUGdDfRi7zBCpP21u9S4h5LKFAXqryX1ursyrR",
  "key27": "4KiDXKpYDSDVgniMCg2NveX75HpqQgHdkaytY9MDKXMVvB9UswXbmaoiHWtZenFBf9ubQZPsRkcJV2BWmWoeMWsT",
  "key28": "2FxaUCWRejHqfD3bXUgHj9zEMkagGpx2shb3f4Q3zhQQTaVcY9ayEWe2naT1MXQVcju835nnAc23vgrhDakXdnwz",
  "key29": "23ofzfeNXNmE9Y4kt8DJqWnmB6FEaWMfbWThm5iEjrstT9S1Drzka7vXUYonZmf3cfwrrGTzKL9vNu6Jk9LXKpZz",
  "key30": "5gPEg9g8LfQNECwLXPQxWTdfYKDP91nq2axK3jTe45JHJCpHo3Z3dQ9Mqgji1Ztr8A4gw6pVc92LzAXSxaaPCJkS",
  "key31": "2SRtqFxFnMzRe6awGxjXosoAh8MyifBV7N1brtHxD2JQtV51EEnYfkVgy25c8YWGJ8swnzJrz3CeXsvk26aSRAhQ",
  "key32": "2cFRBF8AQQghz5q8oiU7ZdWrnzuauKXSKrU7nLrXnoPmDczwmHwJukrKitjW2NTVwZbVF5gfBuU6htJoRtRxLxiG",
  "key33": "28uvWhTNjaDTSakkk5af7bwcXYnfHYMsuq6AFECD1op12uBhWTXAPusrm1xoWSfvDuUKSN7n6d5ZfznGzYU5ZKLm",
  "key34": "48CYNX1EEBjas8iboektcWX65f3fXPUyKRHm6X5Qk3nhtVjaAVDgVAmqdyAorVe4y9k3qK9pVb9izaJzSW6LTNR3",
  "key35": "5YvASUFzYyGKxPHPqdTtez4vXd3Y1EEPdbQpHk5EsJ2WvstRo5aaXrYLDKiuMLowT256uaZ4Umj1fFRh3fF2kRMB",
  "key36": "42775CCdQqSCcBGcdiQpMLhNqciG2V2LkGDUi7cf57xMvvZJfR2bj52tEGKsJ6EhS5rasa1W3uHKcMR5Sd2zFohk",
  "key37": "A6vP8jRgiF8JriGEKzLu6UxT4ZdopBTP8FofCB4WdDdrFLUoXXSBa6GQdTycsagN6xgeGejm5VbA14Gp8xwJCbj",
  "key38": "3Q5vKUy1qLz5qu82XBoc8Nqfb63j2qwmJ9Q9WssPV6ZFwymcwq8cvqshxB5kKNgVhZ9YmAxrjbrNkx1CQ4E64MgY",
  "key39": "4gc6vpdR48NUQyvwp8j5iAtDyywXvs4oxDm1G2noV3b1Qq84GbWV1dDu4pDvhtLYNMqyrYSEe8sCu9MgHqNYxJfU",
  "key40": "pukHd2GMpf9MZCry1fdfwHzha3zvb3DTurzLaHUPnk33L6UdLGXZetkSgR8LJUD5SnbbDFbU9L361D47fDygduT"
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
