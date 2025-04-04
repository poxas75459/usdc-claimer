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
    "3EkYPWQLdLPg9VRNJTtGCsKJmoCHeBz4S2xrxqy64DSSjTPNLb46cro8hqDvxxbAC5SAV49435j4DLvPqGN8gDMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kk6CsebwqUx8kui46yokhbtMG7B4hs4Ym9VXvWA7dpvCFqSwuwr8XztsrzwHpbZtUTk5uY7TKNjxnAaFxGakztY",
  "key1": "2Pu8ckAfustqbATJWnSUEGiDwwoU5QuR7zHS79nL1Yu864vtUUSgn6isWgmyyuNB1TvNQZpBN9RWLL1jSAdpnqks",
  "key2": "5sx9bie61QnxKiCX3gHQiPSWvDASqN6b3y3xtEmUnYgNuhCZvgnQfe8byprv6XeAJxi1y87CWcwLeZDAfUP3BbcY",
  "key3": "4fDKcev5kJ4257jYt18KeWW2n41rTcZPBrCGpPyW9z9bsgESoQmaJvLPCG3Pprwturiu7fYCYgx6XjFpxPJMVRuJ",
  "key4": "Ja1izSkExvbH1JquuJSPfr27ARQmqSmysibeuJWguWvfWLDwCgLPbMsj2dH3ZUktUbVfKPdCXAEWMQ2EbQfeVsm",
  "key5": "4Sq4fcAziSffryZ4XBoYSwWWBfdomixYD2f2dpvmGm52SvtmFBRkw71o5rFHsiXtmuKtuFS6BKincHTVYkwZYh6V",
  "key6": "mtscNYR7fCVBqkK2etreXKA6d94HcMD14Qeyin6ppqbZE7DCp7qGL4eP7tyUpWndqyk1UtWNaLxkKerCiHQYT6J",
  "key7": "3iCUpVPCP7N2xwJTCcFin7vbp2LB5Ah2tKSCqkHYWhT4fQUuinFdaviUSjheiWCeLzAQg1Bf8k3sCfs1BzAaJggL",
  "key8": "WGrcMsj8FWmMWJSVm6BmwYc1roVgdokaRpWmff6h8ttVVq43BgHwB9jLgq9binKvy6H6bqn38w9nFL3czBBTqHy",
  "key9": "3BKbNnUo73F2nfNXHiWvRSHgW7GdYtMc1HPYDEk9Lg8Ai7fQGAh6nnMPS8YKpNBG5H8s2yDWG7FzxsnwZiQ5jAgj",
  "key10": "MyCgZ1R4xjiyDpgeA4vKjGXQjeTZZCZnzSPrCV1WakXxD8SCBkvA6i6eLAYk7b1CJmEqkZJ6MPUtWdQHyTJ7PuR",
  "key11": "51QtsK8a3hpVsR7ihMVMUW8ZyE79HBEnQAKqrz63nLkrXGLYPFqvDBW1HSMiubb8RvkU6RYRQnGX1sbNCZKbvKFD",
  "key12": "3ftmCkPMRFBs9LC5h1Vcdq2SsFiZgFr3EwdYNqmHiVezwLgSCKqdCWjf3BN7Xhar56sP458MvFRNSJoF5mJxSq7T",
  "key13": "5xCjcb9XjCtFa4NpVyR1mskW7XyXuXSedSqjFZ7kMiMyQbEp9riZYTz6muooJ2Ymyrw9MQakkAi1NAChxBNksaz1",
  "key14": "2dt1v5raAnMJo6DduUnmXJqbUqNCytLdiXfzK8a3eskRBAsgcK95AuR3L995nKHABADE7AUAa9PbimA2MXKcFKHu",
  "key15": "NPsbGv36UcMGs5yHn1LXu7q1xBSFyKfSn4WznKAc8fHyvW8VWhpv4cqqwniD9J2ZYZSrgV9mwqQj51PN4eSCV6Y",
  "key16": "2WRL6M1nmGsDZExRz3sXxH3TUNdNADXP9bMFk5YZxF4DEDS6TFpcGkevJJ5aDysPvjDLEhJQekoEMn2umeq8eS9U",
  "key17": "3mLuBib8ixY8NgfU1LB2kj7PGB5NXixvffq3pkxkjczVJPNBooHUxkYNUmet7rtoufBnrxNFxjw3yTWUKmVF2Gxr",
  "key18": "4vy2A223zJzq4dXHYUXEMQdQVyZ3EecYrKdyYZqBSRGpJeE698ae7KiKj5Yf86WUM7FuYJptPViFXMME19VhaUWP",
  "key19": "4TL7RKxScsw8DB2ZkWsQW439r8KiFUDMcnC4jwMUU8Jm4aPrfAv7DEfhBuZdsa7kxvmrYTKTF46dGoBpitfvrjib",
  "key20": "2c4hxhXQucxSymDDRaiFD6agabUvrqLorwWUrDV4AzqcHh6BLvujwLpv9NUQQrS3yukwpU4W83j2ancyryW1FxVs",
  "key21": "4eksyeAVutFo6gieXd83m81W6WMU8PTk78co1QhtMTUYDx3czXqkdsVXX2bmQEoA9eWo3vVLFov9fYVkUqcCrBSd",
  "key22": "4dVjVZV821hAZSdDH6ivJKLnaQ4L8cy5bS9KqT8bwyaFeahqi8fwUfUBEDktQ3zpzMnHozJKNM1oHMmCyiSpSjZp",
  "key23": "Vdp5NJDsaqSYrTiCGp19JBqdsbYbDu4TsGHivke6FK4mjH3kjEpjXR6mTeaiSMdrhqWdSUn7WbxvbSxjK7HXFLm",
  "key24": "JMbBsYioU3EhSTYKfFBeSR3PVUw9mej5GYiH48q7hLFYJoBr8Yg5kgirQBDUdy4cPxuRn5WcES6gZ1seQUy98SN",
  "key25": "4ihLFZDegeoWLKUMC5dhGJ1hMJbFNBQJceon1qqbJiBx843CpZFL8bjoQoFutmzGuB7bsFsZF6nHdQjH5q1k9Wxt",
  "key26": "38P132b7gyE6Tnnh9UJoo9UGLwDAT1kGG5ZDQmqq1Z5Evufzf3mev4VzoSgJegHxKVuuyT1SavtrKXjApkD2yS1x",
  "key27": "4TbZQow7c3SYBr4YzaUkvPUQoFZaHESFuhxNqmUqEdZNZyLKfYCaudXJmTFF89x77rXjgejHqJF1y8kSjRpzeSrS",
  "key28": "uqGDu7E1rFBkDD5z7RuPwEhdSpFHh4xBZfqH42ScXXrsKx9bPLaQM1SNfsAhsZq4i7FtgrAYpEtfh5uav9FgBqA",
  "key29": "2MMc7BEoNNmDLPDRg9C1d9e2s1NjgZuitRanbWs4B3CwauDMkADVtPaNrVzzQaGCWDFhmQeE7Y1RTFP8rAj2PdBL",
  "key30": "4qAqZqMQ6JBFXqa2kuHBjjLBt1Sb3LDxXgtfzBEfJ1F3RDeZBcoDRZrF1JipDUrSb1oscdbZueUtSgrEqsuvFfvE",
  "key31": "49dozNjjibcdxrvqKr6yeMqaEfC6C69S6vqV3aGKmAfVKQ7zVzp8NPXijrNSXaVcu2mR6A14EPjj5xNBzPw249Nv",
  "key32": "59X5FG6E6EsG5bVi96JYSDHk7JDiVok9yTkpcTL6CB6MWx5Loymq33fawmATou6zRvpNPJxuMCqMTBcvph887Jt1",
  "key33": "3Yf6wsM8QSnMFzjgKvGDUjzcaw2hCYEQNDgBmeYdBeMdHzeeg9PkawidC5tVa3TcgdBa92oz4uETmN3WPM5gaCbU",
  "key34": "58xtv8GpqX6xeCytsxHtpJhST1UxYmdsi2fAcCYfyKZQk1F377r5NeQNqoSadXwHnQcDAXdFur7dzoFC7opoCHoL",
  "key35": "5DaVidbYwEm9Eu7Wd1mqLQqDDCpFfKzwDHbTQt6PNvXpzgUfQntzLPMnev3suxRDfTEoRLjbo45jPnYoURyRPj1u",
  "key36": "53MAEEu5YGFbMZtWYtQh2P2rtLeq4RA62rqf53WcpP4L1cEN9puxkieKQpWiKrv3PcrtSbYzSDoqqLai99djvuJZ",
  "key37": "3bj5EZx1voKUNaaL9AQbBA1KtRzzZfhLWFVk8X6tEesrAkrkw8ieLngmgkZd79CMKBBcv8LkDRuUhYKMJzhRPuLo",
  "key38": "rVd2v2g54XmUwBJywzbHpmSNAg6J5kKdmNzNhtWHouzqsbBft6YB6MM7FFoZTXnPHFiVzBYfU3Mxo852rbpe4iZ",
  "key39": "3cvnPnoLoorZB4Xrm3EfkAFE9smc4j24v1fU37CLX31K9Kaki83oDwNqzJ7jsfZjFgjKk5v6vFSZPJB8QAmktjwP",
  "key40": "4k6nSxHMuz2dqSDRQV84ywsBQRsjwF4iE2xbMWbhwdEDWxpzb3Hp3Ghj5q94RtwHcQdh4DaDu5VMcKx14XPSeMxQ",
  "key41": "zWX8CN9N8wfaXgfwtKM3BXJUfamR8NEWQ2Huq8bSBaURCKBqqmc5DSSEDDn8uegaSc6S4LMSsZhKZqJyhPU3svN",
  "key42": "2yyVERvKwqNBa3g8Zb8pgMT6YAKdZmQ4cXqyAi1bPPP47HAJaW41XBuwM4qzDgjtUt6D3cMwWkDhQVRLLTcBwP3x",
  "key43": "5FZBM1dVLwPwKQ8YzrorxhkCpd7uTciUZgrEt2QCcUBVzJUamhTzkppLpeHpWw1px7cRVeG6pHxUzYhDG4yh6PPP",
  "key44": "2fEJhBCZXRRHAC8yJaSmwDLRRwonY6QrWVUyyEMECUJcoa2XkxaqmAbovpZjKt1yHYH1FHQj7t9QQhBxxeqjfb9j"
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
