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
    "2AXZ7vP2QRv5VLG4UDkmeDKYY4a8zJyAS2dkHtXPAkNJt2fVbtx5AUGmfrAx3a4xKcybfeSDdpRhJmsoW6KjtGjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BGiSCuqJ5rRMYPuJpCac1kGVKwtdDZfa1qjaR2RmQzHkr9d4Fv2PdWsQSEdFpQ7Eh5io1UEUASeg9ywnTSUAWaD",
  "key1": "649A6zUximXKPAowRMrioGEaPDcc7K8RZvqvH5NQ4DFvhSndcLqzrjSc1ccZa238Tp3Sra1DKBQvKdgVYthEZara",
  "key2": "4z2oGMNBrvzhdH4YqyYwQSgQyMHTyDcMbyN7Q241RDtvndh2m4at5A6MhgysVar4sqkyBifVZztjy6gu1o7BTLZg",
  "key3": "5Mvcyk99aiS4Dty1YEu48UY37uzPCqhkxutHCxv7eHUn8MiE37D14DcMvhkua9AEMFsCdTmSknkdDXgmqKPSn5Hy",
  "key4": "3bLkombFLVMswR4tWXicB7iLY2XxwhvXBmra3fRghVxt2tRKrg7u3c3E8cbkh5sqDwvuhWWbMjBFadQta2Hb2tF4",
  "key5": "4NLNhZmn1QGXuTiWTFpL9kBUZPZbeJcLcUxWbqZQ9QRoqiUs3GoxapBt4HaD69dCpuFVXAYUEyghQE1jE1txv6HV",
  "key6": "3DteNaRwQ8Lyv57YhJJLGUmiALAUGDcN6yo8DLDf5Lqant8kYFPEHvoSqdjcVkKF6tRk3NdbDC1rJCFJwr8Qaxxj",
  "key7": "F7RXAmT9ZmtiUhYfZEgSphLtidwiS5qBV5hVP46VVak1coEk2qpikFNWEEB7Zooo6kocssNefnbRoptezbuNEdq",
  "key8": "4uhTG65h5GLuhh7bTrvn5RYnRh2XzeWZMkMBU9Ypb3JgdbjA4iysoozFUSQytPX9RJs1TQtRztmhjS3TjKPtAF9H",
  "key9": "xh6rYpifLUNP2c46RmEWHz9pqP32QV1RSMNk8tjvGooeYoaA8TqHsKrF9UfZ15gsiyCzXBzYcASbm4cAjJpC9f2",
  "key10": "3QHHJ6nhkm8KWqYbDBVjaZgkpXQP7SWSbPeyAq9i4g6ugnm298FySo5DMgWDPh2XT38qiWoNef5zyqwbQzrErL1G",
  "key11": "5BS6ZdBH8soGWXg3RpQg8yGu7REbMrEk53zrMB8TeUDYt6kCbTmZWtxGMc5VGU5gJpKN4FuE5kLG3F2BeeqL5FJN",
  "key12": "ynLo4HEMZSYUjUTt4hD5aqHPrNVgkxj3F6oT9Evu9Qnqa8uJe9HbqC1NG5y6DuCtku2CbsRipdz3pm512ikt7nq",
  "key13": "C9hVzr6KJWQZkWXyBQXNA6beLHLH9MxUd8VE91CZxi2FFyKpSxP3NZ1gGhcLhFuNaQd19GVSvJz89SKQ7y5qjg1",
  "key14": "P6CRF1wMhAayEtmLtFTmvXK2xXJ3KpxtCFiGF5bghFpJtQSBCRUq5zry71xMBc6FHQJfigN5TuTnFipCxWUCe3d",
  "key15": "tnoiENaMCLVTaT8UdD6MaGT51Njiq3t3xnXnvJ6h9GSpSkXsAjSJjNWAdA48Jx8VYuwXW4rC6BMTc1U1iMUdCWR",
  "key16": "5UPkDCA1jorXe9h1yLYPvdpPFRuNym3gu2THaC7996Z5DMuZURW3hmCDezHUmb6ta4Syum5BD1A1QNFbXK1ddE6w",
  "key17": "3pSAqmcSMJARSwdrrRi58oSeZCZwFYaqM8XHYLd37hpru9fv2s4GELEYcr7bPe7SCqcik13P5YrZ2obA7UYFQa43",
  "key18": "3znCc4V8tWZDebdrzcX3APTnX5EfeLta6vmiDftEwnJiaHWfGx1kDjU1HDmpsQQpWdsmnbNs2hT3CJf28UBrX55j",
  "key19": "2YHt1uctbCyveFChu32BWBuSoPsHFNSutaqw2hn4zEHodBc64Xk8BcjxxK1565jhAVcxg2ekEenEJg9oX91oxh4F",
  "key20": "4ZTSYE1Y2ZtTR9KugQTKKmskuNPoXedCUNnfPP4gvVXD1FDtpnSBaZXeu5RK2GgdLjdHjr5i51aiXG4Yp675sjFD",
  "key21": "466zytTsQDEfrAxt6EWDZSUhC9CJkbGbg7JmKM6LcetFP7U4sArS4Xo6oRaQHMgE7iC13QQyTtpBkD4x3QujTK2K",
  "key22": "4VtBQb1hA8nSKnrZ3WRZa2HFAc9A21xax3KSvnFa5yznmjFkxP2oJwpfbAu2h6GG69isUYS72meNQP9CY4TKKkWY",
  "key23": "4J7kZ5TSJjUqNgUiBApVMoxd73Vk6Ww7sVNGLxLTorycFuv1AwiHSkRmhEK3dpS9TB92WWPTRbXFXNiujhM2XATC",
  "key24": "65mGjvQbLfTqeiSsFRcyzU43XcRp1r6DFzKawzC3cXxaatLeZ5t5zfPTFstBsFX5EYYN1Qf5r4PGUxmYjDYRQtJS",
  "key25": "qSu7jRM8pnhDctFdksBRCmrH2RwdpHJoy2bejxv2VFkzzif68gEj5KQCzTiNrkeLBFdFZAtvSWJaEqTHgj3tqfm",
  "key26": "64Lke4V2eJCW92HxUapybpM98VLEtsfo7oEVXHFdErx4qr6qTFfcCrSHfR5t9c1HG5tMp9b1ozmwFdigeHqc1MwR",
  "key27": "2zq5Ny2gfymHBRKLyxr7z5jEaLTCEP9yub5tmgB5Gw5RQoR61yRhdxnpizMpyaHJZsMUgxwQHs8Mw1sw9nMtaCDK",
  "key28": "2eyumGQPDRkRZFBJ2dkXziJUePoBFHdT3oUdQ21SV1YCoA6uV5U1ELbc644QQq3T33DaAp8p58y4M5HST7GeVxdy",
  "key29": "6652MVpT66btBntCoEVMMDjjjdA5bpXvrZ2b553dcJTYtcFemD134GzC9zJk5w6Gqwb7ppQdqXKJZxPxrzhBHxCC",
  "key30": "2MGYdcqQ1ZCRyNuqsLnnKSHmspnyiB8sgPdmfJj2qX74FFYyS21WCSthKaPixSpKrUgczvtk54LkeNK6hwkFwzEc",
  "key31": "bf2sm4Cg8UemGv4PdP2DfPafjLRCBZVxop5n1psv7DaZbyVuWLFXM8WMVtVh1pyQEWWueGRfZzKRQWBDSWQpHFi",
  "key32": "4LXoE1WA2wNMr8H6SdqxHTwhba3zzM8xPT4xhFrhPkVD2eX8sUsZuqTjHTxBCGH1G2bBv789TfoTtKFFXLmW8QQk",
  "key33": "41j6PDKoKuiXoLL3jU9NYeRqPh6jmkuiUiga543vyPg3kQxVMR7ccSZPdsrYJfdjYnxpBALzTEavueShud3iVa1W",
  "key34": "5WMrnhaQo1oQp3vJ34cRzgwMe8Qzu6We75NjLWU5Nq2NaePBXWZUs1YWzPqYHMZj1KY8Q1BTQTqTPKqhxZeuHN5r",
  "key35": "TJ6sv6QY1Zf9vwE5McScrvfw5kfyakpRJ6eBovyBSPgjcxTA47KvoShFcNNwh67af4JqMGrCbb6LoZbD5jUskKW",
  "key36": "XFWhAfn2DAZzXNJxF8PusrM3eW2mA4JLXbCdNZ2iBcDnyQtyPnkhQXALibUQ4yTYeJzLsCjhzQWcFn3yjECeizi",
  "key37": "4TG7bqaWEN748SW2zudHFah9wmv83FKu99v3LdbfCQAu3r4MYYjzZBxsz8CvTwzjMNE6NDDZS3Gr4pZrq6co31Yd",
  "key38": "JHqdT1zj398Nu79jR2JRUTz1sM8S32UGLevyprCNMQ259pp1srceibLZxr9h2ap5P4oPWfxu9mvCwwwRUizw74Q"
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
