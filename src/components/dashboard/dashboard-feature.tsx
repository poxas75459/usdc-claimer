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
    "GfVjoSHsuhM8nYjYt2Jz1rq9SZ7eZsFgdhUHLWpirbuhmWztejA1avV9KrWftDcvbYavbeA9PetJ6A8UvsgLKpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zEzSMkT1DBixBvqUj2mSw8HuNdACZ8TUofnSKTniaPLX5Pouqvr7U6enG71gArNDoaqBfXq6gRqByVs4tVoPt89",
  "key1": "545TMne8NDEfJFjsY9i7Ss2uo3P6iPQtN7oR47sUog3qSk4frMwTQukfvydk6RiwpzeFmjzYnS6QMjSi1zKFz5T2",
  "key2": "58TX9p37fE83gQSY788tywpTgFeDKbZYVhaqC7HavsGeLmnjFgNi6xAmGA5X2iFeWdT7tsEsq8EzakSgKUEk4bYE",
  "key3": "2QYULnjUgbDdiJYQ5GioFiGuCtrXGMm5zaWqCvjjtvmmxR7bQ89BfHKA61JRhcqNhudi46GdsS9HcE3p6cdCShNR",
  "key4": "3m48nvCUfMm49zRvSUj3G68gdsJQkfH6xQnXzpgzSZmvQ4ibNQwo4VGfF7m64a9do4FqQydx4Ufo1pbMYptg4Wft",
  "key5": "j562NKgkZXrpscAP9gNMTbcTZ6m2Zzcv2nPqnEeiXbyXpxdoN8B3aVJw9shWxH2nToLMx4FMj45vxyUt6F4rmmQ",
  "key6": "Us5Sbb3wza7MT78rASN1L2Bmpa8LaHGMVK7tdoSwPGXqXfzmjCd1sqc2Rzjfb6m59fUxF4cuNsGeUK81Coo323Z",
  "key7": "3jxHGtEZUz3KQvs5V2dmDtNBVJnwezGJMCKXFBBTkT6sXQki65KqLvmNRUYEpNHLoVf2xnmXmqyR26cFwJJPo7rM",
  "key8": "4UJooqUf6r5zYWRkmWBMq2rB8tRRFSzAptSfTksvPYnh2EN1sv5D47oFGVfJECbjDhb9zCnjX1gNwye96rUWTjVQ",
  "key9": "3YR2nq27a1usG8CAANiM2XsAYFG6bAPpSDHA7hbFy1pj1Aqkoi8LjcfKwieLcw8p9AsfzMqnS4gdnBWRX9eSaHGj",
  "key10": "x4w56Lc7wQ6A2NVVoFbQodz7CSyyio6gNE7kJA1fohG4Fv1FxUkGRgm499J5sfyn6bqmYqFxym8FeQnfEMHV5FH",
  "key11": "56FJ1PRm15YFeE6FXBpiYnBDyJEqUi61p4QGADvWHK74mfH5YESf83yuZgjcxc7WZcgppLJAwjcBYMKycXfhLz5a",
  "key12": "3LfyPkhHTty3MT1FpPTV9vNDmtRFrB7bMAZ53rwrWCT5ozyn6QUeJ8uFXamDdhhJVYGMmZBjsBp6nY3b9Dyes9zQ",
  "key13": "4UEFnUXY7E7bJXXmubDwW9SKwqoqDZtwHh2Mm15D2ud9RLcfcRhNdb1YCWcPRnMaH3aS6g2sUcQbuy91pzrWKNXV",
  "key14": "4WRpv7yEYzr6qcXQjSFh9Vdvh4kwtSXbyRoP6rFNEcKGhAov5wLPaQGRpxUkD5qvCFgznA52GCoM5bvnn2hPCbVq",
  "key15": "3Mj7dYc1q4LVhDo9YkTSNiTxK336AC2oPmrQKza8zbk61SUCpTwL5cBTViujkdihYH5hCfHHA7MoMryJTRetWAzS",
  "key16": "45C4eyfEJfu1HkjfokQBwUWFj84JEagQxc8zxdxB8Ld8UPdbwn9ELVP7K8EUyvRuyncAKZK53pmphnrH9iExFBvN",
  "key17": "rrDPtFB6KudfE7QGhUZN5ND7YeD7hJ9Ncux9fGR4grmSKePpT5C3hRLSNEGaZ2VtGg3RE3aojaqj22YrWLtAJxB",
  "key18": "3CK2eAVTcjNfqbvQUQD6nS87oMzbj3fFGeRooCQVHsvJJCaj4YobRobZABkMUUe74YdzeY2VbPCzZj9GQahtZQhj",
  "key19": "RquVBnxUWZh822ZpDKx2Z19dGNzXzpuvkwNCoB61BBFHYbbViVZNJEWVNT5co51jNZsrduAGwpiaUjA97o72FD6",
  "key20": "5RshuRcSEfAJpeajGo8mprSVxtcpFqdJncQeMo2b7NcfwHnLkF5rq4atvboF4coK9BBr5s7fgDCtpKXG4QAHNLuR",
  "key21": "5ZvqqYhEcKcoifpS6w6CzN1PWnSfwgxCNpPcW7sYqKCCgxp5TBo2HUwwbor12zADrj7ZLGN9jBgZbBoNxyDLFNzS",
  "key22": "4yPido8Un6VjrcaRscef1Sb9cp57fJxYf69QWNTUq4h7tTR4CxN3pU8y7ViCvH1iFUCQr1NThbxiiuEDZVKeWG67",
  "key23": "De8ktzuUUYb6GRekntX2gqo4fchc9oHTD3b7Sc8xBf1cHTorc8RqSgZjoUyvAZiY2syU4MUUq54NhAfqTTn9xmx",
  "key24": "62kKpfeQ7GN5GPRJTSK1d9iBD5EmfhGsYPzRLJyq4bszBvULtctEKLhrsRRyMMQvdPTVh8gCSQnVkKbFLeVq8zNt",
  "key25": "2STEgohTkWuEkqyBVLYczo42N1juWn1PGTSGA6sQ7KswG7UVTf2P8iptcurnsufie8nLPdkwZNuJZ5KwozP6hfbt",
  "key26": "4F2q3Rs5LUV4cuNyM9PwmL8mRUzZVpqAFS1H4rsoCZ1UUgZE7BDmtHU7qhkwu19EUHUX7FUktqRoaxzT75LY2Rio",
  "key27": "3bZwENmnFb4KyewgcUTfbTbWKKPCytYkD6aWg6Na2mXaK34uEUqTx37S2vAW5gTPMiJtuzf3ox2FCt9963Kv8EP8",
  "key28": "5FCtnFmo77tqFHqEgAVqdgCW3i2kMaTAEKKQGcN7EhRcbsGViVizR1jZEgX3dou2v546xGYyn7JRA1N7727Brnst",
  "key29": "4srZuxiu14cXwbyiG5KXQKhvjGDG2ZR3pHLrUypQzoeGmTETjScqMTqcqYD9Z7K2jTyyKYSV52tDYpYaYMAtQmqm",
  "key30": "624a37ezDnwoE5shLNm91e6Y77chexiezP8dAxyDdscbhvuc6SvrDiDqYCj1w2ibALzaFK1Kopg5P4BxDUwYWDZL",
  "key31": "7S2H3XsvxXL5LjDU41DvyThx3thnv6QWfmkKM7dbvwvrBPqji75gKryFiwKTMTctLQezRwxzzErUoqrCvHvdKit",
  "key32": "2G91p3cvS6xb5m7YaiWZmefveVcALUxaaMsvXRQwY9v5eLo5fSmJn4YfqwJ1hNEpHswzMELUSfZ9eooBHqDMD7Ue",
  "key33": "2ChPkRBx7k249nvrN9DCi5L7GTszyjis5s8zA8sH7Qaqmf6Pabebg5zDY3TsUp7hhdvj9H82ja4iKbwBrnEKyArD",
  "key34": "3NBSqvUnNppUpTgijrNwRS1AU9tFTXCPDYxbnxmhE1NStWC5wfyKYu1aaHskZuY5wB97n3EzZRjFwfc6SRJwepgJ",
  "key35": "jEqxQTefH19aPRHdcymj2VsuazBbf9erPyTZ83UdLSTkbzG3u3mj46kL8auZQpqVFjPbaka1dqtQt9i8QBsAUqj",
  "key36": "3S333Avo3HDNsoaDNNoKBSshgra9VicbmJsk6mzp8PUYmfCMJYWZDM61BPVLwhHjWqSgjqQLrpygipFSFwqmGNTD",
  "key37": "scKvVbr8P58u7Eer9YsCgAxXWTcau2Fu8xBMrkhnRyF5XN5Vrq3DP2kbuNMRLef4ZY1YwqHc9gsUQphgiqNsCCw",
  "key38": "1RcM4FUQQDwkhEEuz6m4b8iZf61Mm7RgRXb2SyHsEVDsBMAowGyL8Yr7gnAq12NEW2R61mwpJkp9tJN2fjP3jf1",
  "key39": "ikS2E4RoPWogcWBiGm4eo8A6Z7aMpHT8AQH2Zx5GDPBVh2gQTi9YHpSAijtdeS5raB1vidSei8WjPmjPb9f9aLB",
  "key40": "4Uec53wtv1mrkdKZ31UKwGkAE3Uz7eBvmCYVP9gHvk2NNJfcEyLrhXzvT37FEt3gkEi1JKKLfz7VxCv8LNVz3CYQ",
  "key41": "2cXTXULYA8QXHugBByuRzVau8h3PoDrtGeeKkMmCMQiHHQnQpSEgr1jeLtJ1dh1a9w8TTaFYLGya5GjSuucEcbCS",
  "key42": "4EJENadbVtmd2RAJsDH4uGEpjEUSa9jvSkTCWns4ncCE74i58rRRkGrbS2EszgCX3nCFYsvmUfMQoyMXKGT36caj",
  "key43": "MxdDvaUGrQSf37mHm9xa45wod5tabQ88VmdsaFwAYZbaKmdFgKyK6Cmow8PRNyxMc6p2xoAcrxoYPUjMRePFgc7",
  "key44": "4t5K54dkHMbb23mZbtrTysngnto4MXrouQqrYR7iX3Q2g3Ug4zvYDKguwf7rJ3GA14MVW6ueN7BiGLCEdQ3pCGk8",
  "key45": "38cGj41Y1u8Kvmv9qXp2fgsWmJSy1C2K7EGZkChzz2KznyVUwXQnDuUVkcxnud2JBsKAABnxP5vMzZdk6MuKAAFK",
  "key46": "5EvBU5GjbdNp58cHEtAT2v2BcAv1DDRnmT4rpzkKF8YQXLuTb6cC9WbvmSnowyD7u29Tr58EArDVZo2V6mNz9Pht",
  "key47": "4LkWssYVQaTXXSpatqsWKydCEsY5KfyDnYYbyikuPiAXBaN4rr2dmz3A6TrEQT41A5xFWiQFJt7eG2XDoHNB4pn4"
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
