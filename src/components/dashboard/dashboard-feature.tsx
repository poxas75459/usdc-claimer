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
    "5QVU5xW3wte3kPnnmeLPkzYKLbatXSizPM1KXY1Zr7oQ1XLmH4CC4rY8tNaCYS4fuPkNSVNhKJvkLGgjMV7pUkwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PVr75dMRoM25RNFZKz8p9ABinfDfHXBkBXQnjTPmT6ReXouKshcfLAUdwimYJ8UxDrSDdwkxz7F6cjo4r2yvuzx",
  "key1": "4EemKi8MNYFrnQuivWTRCbRM6FQTTrQy1PXPzfypRoC5hJGFp8Ns9RZeRLvVa1Y84FrFXzi8xLPVtQ7EmT6ErL87",
  "key2": "4FwbGJar8R5emGDMPpRut1Mfa1EAWLooQmJrnWU26Us3DRbSVDeQ2Qi733cUJfebaKfnBw1nJ8AnBQZQi1s7Qp1M",
  "key3": "3kGjnRaswbWCexde1D1L1k1YC4BbikvAYQB87mXrQAvW1LdjdcHD5SV6B5Gwsn1QBcCiwrF37kanipUDDAQzXGP",
  "key4": "3ANUgfMqs9GhNxe6CjsHnYCuBfVUa4rKJ6TEDzjP8hnd8LGLg9RdQKcNHvDbZfSn9qFANR76uscHAv4ccJXwR4c7",
  "key5": "2mSWYNy8QzRPy4q1LgSVCZkWSbsi5SkSKojpzjgmdF2vMoFqnfDwoFG8W25nJRUimjnKKqCVyRPq4aJ7DMUixof4",
  "key6": "4njBzbcAdxvVhZZrZHLBWWVx3FQ367DZqYvmN2nfg3JP5x2K8S4MqsCPhzCeXVLupmMQW2PcCWbp6DyZEBNR4tSf",
  "key7": "3qkDkMTzUFGsi9iDRMyT1BBMK1z3yjCuWX9mETJKJiFxSm5kgJVzKN1L9iWi9btjTNgBAMqhcjPymj4ofJ1Q2Z22",
  "key8": "2Et7DsvEdkrJ69CGctMWKfmVktuUkw3wXEpJ1NcbGxAB3g5Ua3qHZXSGGF7NzsWd3dVQv6a2tBQ4EQAfokVmuomQ",
  "key9": "5GxbXEPFLq41yyjFTatgBd1X4tX31hqqszKDRPjbdEbTTKQSWn4qo5PVJGy5sHAoeQ5qYsUBAF8Nsrzp6JvduNqE",
  "key10": "3PXkdQWmiqBR3mt4Nq1CEN5MdEGqmm6N2hFLUApgHKxggv4osDVJdaLmokhXTAYHwL183vFLFtfqspA5Czzg3RVN",
  "key11": "5fqKPCuf9mHc83HtcVUYQVeJ3wJHYdVEAJPbzHa456uSqPY7Ldzx3hFwjBMQ9hbCBFvc7znNB8yHFr2Yi9QKyQCf",
  "key12": "3Vqk7yGEK2a2AMwYdWz3UtWGFFtLg4ucuzFRKfYPqqYHNEeQvCCtkDfwczin6Lok4rsCELpqCRSomW3dw8rXZbka",
  "key13": "qNsFe5aBQtpo9vo4DjertCeC7BomqDetWLYpu8gh21RRy3E2BybLFS3jSWE9XA8KqTnv1nFSGh9nR9KhjVTeoBC",
  "key14": "5aPF1RthLcZ9pZTMvHQgBo1anWDpeMWHELj5vJqUoDrvCqyGPgA5ZZE6roJvytF2DmzEVmKizkon5sizYENca8SG",
  "key15": "46VcGLDXMESjAeNeGvMcbcBrL4tWPAqTwHGu42qsmFwXv25kFJSKswAcGci4U2V61oJRWUkUFTY9xiNDnc46YVyQ",
  "key16": "2cVn5JTiHh5zTP2UNMqXDP81Dj7EiBtGD3qvKoP2cdviUPs4GT7hDsi4skgfJXBawRBnu2gsr6KoTZYhFYG6YAaW",
  "key17": "4RiMK7PjbujSUbSG47VfPB4MDwUddeiq2xTN73DmNE45q6v81CFf89yWxUpndqHBUvxvBXZXEbCdq2hDTKsKViuC",
  "key18": "WWvRp4JPu4L9qc6CdsRDAWCFvFdwYfMmyjBDvLqJK9NQz77sqbuMBrk1HDRooVZTq4j1wYDSLamRR6ZvEmQt4zW",
  "key19": "3uT7o6GMSsjxLuXk4McqqoGSbtE5A3uWv6yEhXdMEwZN2GE4WRad4Nwpm55ZP5Wesb1qHiHwkwHw4Tkw1HC5GN7L",
  "key20": "29Vpop7Spj7wrTFWTUG5BgtERrVnfoL6EQerjvR5JEL5ku6aLh5bZLXoaiRiU3xLwxW35K3oXwjnnkx1WFXBsYKW",
  "key21": "4XYaBYYL8Xt71JixNQZhR5zBzdUNXCd1HKyoFjYF1tyac2qazuLdTnR4foBh4WA3tcFTqf9VNKJUi5YRHvDYzUXD",
  "key22": "41TBqGsniUd5MYnYLHeQ3KAhGTPqUZw7uyXnhLfgxWSP9XyirH4JjwV5q2f5VusV2APqZmpv1YEUDYTC1W7WxXCL",
  "key23": "3AdDBk99de5pk8NL3gd9VmVVDFDM8hBpussBb9pfeePBoiChkinYxmbfmNe6sD9ryHcLvuUPywPaTpjiTNeZYDK",
  "key24": "Hfy3tkwDiAEwN5Ss8mpuh21kcGMtaJTcyLAPcnaUUpvfp7Ap6FEpncvzpRHkC7MiDzZJCYvMHJjy4yVGuAcbPDk",
  "key25": "9buV1duaupNp4jtRLfYiqAwWvL7K6icq47N6hyyeUikJ3VkiWRHG3KzSzhwc3SWSHbMwUAcFGTHbN6pzZxJPWzY",
  "key26": "5sYPZjnBJoabBYbrx3J4pBgGDuqZt8grMvcroBxRpx3XpYuFbu5zShZ2TfYAgxJcLNkEPwgQEWPLpuWcRacYzDZ8",
  "key27": "xyhU6wCLQVJ7vNtF3tsQscpUCeA17ezcwR3nYAey54RQaLPPFY8Q72PeWofbNXYsi7G4X8CTa7cwZ5MsMFzyzaq",
  "key28": "3H54YkbagKxVEmqt7yxVXUWF9eL8pH8bTYb1Yg8gszcqUqnmCXziaCgY6qdmY7QXYceNdT1Ckp7Q1tTho7sATjL4",
  "key29": "2tse3gM2f72p1ZabqZ1rzFkxfpKRjcGmT5poyNBUuMK28f2Xz5W5fCXcVaE7ULSSsXed8SpRdLWNJ8gZvXyAyvcV",
  "key30": "3XjV6XgsZpuhhjtVJWaT6Vswyw27CyECNoRWjsGvkrebhfbomQTHXFT4YxCnN1CTmFh4GoQgSzz1YiQWYSKFbAx3",
  "key31": "4527e2pUxY622pioivQc1Fh67YLeqHF7CB9j7eqfXHHCey9pRsx4Bg8BQcGvf4DEQ55ZioziWQY2zJtmTAFNtuxg",
  "key32": "wuQKC1zqn3VwSFDoTGob4VPKWRtSaoYMNWZY1eba3UeruY7tgA18Rw9Sk1V1mgDhnsGyQPeECf6QVWFnDTw2Jk3",
  "key33": "45Lhk47PvDDx2RBbxyPhvrBx53YDHZVHP1HcbGXGJznoHKfjCYuWsjqQUj7GKdzYNbT8XTHu2j9PSH6Yz6BQw4km",
  "key34": "4LvkTG8TSmAuQFbFci4TSUnkUjyMGk5u49iyZFWDC5oFbDV64ucbLniF4piNf1zu8NspdCKLQsED1JPvfS4UVF7U",
  "key35": "2PgAHexg6H5piDzWTJCjAQWiK42FYL8vNwXN25K945mnFtiojSPjLuwF7KLw6QQ9aSScygfSYX8D9LnEnovN5oaa",
  "key36": "1eo2A5DbNW3dNAwThefBTAy141urwLmLtJLVbgEH9HzM5PeEUyC8i8ZXGR5FTgrX4APxQdWoYP7GLwCB3xKQUDX",
  "key37": "5pg2oo7Pri3hum4xeD4b2svmDUzUxSJUy4e6d7QZjhWSsRKUW69652BEaaaQ8DuuTakjNEWY3qik1NEvztKnuzgh",
  "key38": "3z163dYSXdWBD8dVTLAm9weveVdSHG6QCp2E7KkYxt2Ekrs6vgEGE1yvAhrmd3HGzHbHieaedDkY2Q6YtBb24vw3",
  "key39": "3yToDa5cjsMYvavcZb26JSZ31a6TyUvuS9h942ckTCwSsnGbgCZZFSaS1Lfn8ohWn5s5vhUEXGmFUJam8H3CQpqP"
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
