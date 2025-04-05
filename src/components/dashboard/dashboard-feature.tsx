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
    "62GRkpXN7UHLHxBrV2yc4ny9BZJFnrAeasrxGBjKwmARpGMvCXGEN2utCFQEhG9FnXTG3aCp3ospUCKMLC7xEmAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59RRZhxQ7SRNqYENNwFFaphuD2quFVfJPyFVB5G9bhWi2meXsvQg5VAN6b6ZnupaajzLHVo6g7FAnsrBqAqVnEN2",
  "key1": "3MuTiefxdyDNTYRaihJH7UvtpMYp1aUjyGTcFSPvUqNQvBtSvJRRLPStSkSXT6Dmso7FEq43Ww56NduUBzeWGg9t",
  "key2": "4H6XK6jsJUU78RjMdQiPTbjHXQHN1Zgbc9PTTbbZA9JDBVceGPnoqgPbPGsRwvc38zAJHfkG3Km8WmPmLCAn8PLk",
  "key3": "ZbGuRNkkGnGvQc7x2hY8Aa1DiyxtfCB7TuVYcQWan1V9Agz5TLVKyYHFSmtT7J8s3viRA6JCCPbdaibvQGaUxfY",
  "key4": "26YYNRqqxkNiPMgicWDRUicPAPHChPMaixw1FuUzmLusWhHTRET3LScxkbfxKL6ZmVXeF5SkMC8JFonx9CKjwntf",
  "key5": "4jH8rLqWpGA7ieW5AB8HfpZdG4w2wDM46KPKibfuVWzXBCjbhBknp22wc7kX8DpmE3oVnAzGXmdJhkFdV9Sixkfm",
  "key6": "4QyDnsdQN5Y8TKFJzFJZQraPo2hppcg9pU4euJqQbNZPhjBa8JraM2xEsmqZhz5AJfnu7WnN9DfA5n5VVmksvZfF",
  "key7": "LfPB6YS7E5UC1TtxQFC7PRZ4C5VuWzHgph2Cw4xBtg9YA3Ft96G93XT9u8tZkFawwpGyo5uUXXgA8yPQ375VnaZ",
  "key8": "2hE9Kw8LTxh6j6k9J7vpUYaUMqVCZN1AkjYxwywdpJ88ST1bC1oxwnw1r9oV5UV5AfbeZ5DpqRCC74UqRkFRQ4ZX",
  "key9": "4wRhLnmmRS9cezrrcRjEhuLBDjNzKaka47YpgHzGDtuAFGpxgiwJP792nzJELJGY5i9kvDXPLXBuCtcpWrdWbG2g",
  "key10": "36kWr59KT1vngLL9GCNRCKoFbBPDJY2X9tZbB4ZtnCnCsEJq1AbTU5T4WqBuZM5ntbDC9F3istVdg1GRjMtYds2Y",
  "key11": "2sHs3qn7T4JBJ3UpFoZE4kpDmu3SGJNpyWeXnwL7bYfz1RWDypYtNTTuw5BS818F346FfNdTQzJjcRvBCPURbbkC",
  "key12": "5NgjPtLucQ2WHMMxmx2NTdxQ56ZbCZUwZ9CGnPe3oNQYCzAGxGT5g2jF43a5M9rdgEp5tUHB75REMggxokpUnmeF",
  "key13": "47BWmuEbgyfdETqfrPJv4QFas4kpqVTvfcZQp7tMW22ZkF1e6FsVDTSGXELwN9M5FqQEMfMAWccyL1PY87cqi2Fj",
  "key14": "2W5LT1FksuGDgtPvw6FYFpTRqua3uDSx1D4FPcvyH1nvVqttxKNzfRcSJ7VyF5aikPjhhSEBgifpZNMAFqmp5SKh",
  "key15": "pptqaPTkVe35HG5d7GFBn3HfzimSZRg4BBhvaShPqF7d2ZeXQmpgh5ZpHdQSXooM9NYPDzp2vnQiHiSMZYQnq9P",
  "key16": "2cj6pBjTwjxts94k9PXKrj1bqxShSFWx1jo92bsYEpe7wb6ELT2ceq1r5daMMPPxB7Qp5goT7zcUsr83TdgKeYxt",
  "key17": "3PoQVpF3wcvPxyLxBTP8QFc92rvj5tgQJsRfvSEoTZZTsWUVN3q74PHaLWvpD33zETZfcWaAmc4uK2U63b7YK4Qz",
  "key18": "2ooXdQZdicggxVNwDhVbUEqk4sFprSipRiKcK2Ws4UkyNayFdPtmWkDiMY8jqmu6hQYTXMx41dmiQkz5p6k3v4qD",
  "key19": "3Yc9xYa2p98xEaVPSQVrmHJRmpju2G8TLT6fqMiygVXshFAEqkYC5iVPcSUtTuqSD4M5zGnFRNu2FHtTBKhzFHAy",
  "key20": "4zkrXDwpZMPh8gR9jgyNvqBrEnD7K24cDQ6atBYaDt5ypqeauKikV1ZQJrExDDTWSDtxBCx862m8GgtphEb1a5X",
  "key21": "2kMWrKmv8uaiMpyk8cQoaYQofbp8TVDKxEkRkkGQABhBaXL38GykX8ioAoDWdKkRVhtfN5syAgoYzrYp1MMD9S3R",
  "key22": "3J8KRfGj8FwacY8oS8Bnmznx5oLqqi3nUZ8JRpaNu8RouzmaRHp91UwfG5n7BcwhWR9rneKhgX5BR6tUxqRJj2rk",
  "key23": "4um8RXibuSRqyk7dW42mt6XE4pue7A19CUDwNu9v35baztxAVpQaRW9bxwDdw19jiXBF2A5uS4Qutm4wVHC9essS",
  "key24": "2TzWBLtpHTEePVp2Cw83PvyQuLhGPHtmooeQXmWK9o9rCeCaynJ9geLozXT2ggLALFmSv5E7UJA6AVKJ48XtHFPx",
  "key25": "2tQYUsNqU1rR5rPBEWtDGrxYbdYFYeM7NnbQtcnRT9n4iRFbkbmpH2e6t1EPSUR3gVNbq2vUtsuaJRZLpwkj7gd9",
  "key26": "2io9nwqBVV1o35FkgLi6HZ6Dfiiwcv6X5WvLrijwKEskY94qVELbrUHGSY7qwCHY4SLXrEtwj4xyV2xb16BBHqZb",
  "key27": "46jGou8ycruKFiAv5ZbHyrk4nv2RaPivbqGJ3N9W5PJFiBes7PssNVNW43jA7rEVhcKr5g7fEtxcAniKYa9uAuAH",
  "key28": "4GKrqYa5bTWtEmpwPtPikNmNyP8sptvGwpZmMkXKbWS8NLumHp3gxX2eo84QikuMLdv7vD8rRQW8YNnXz6nVUDGW",
  "key29": "5nEfa1xDxCxSM5rAgA94TGqUQgRrheTcJP29REqbDVua1oLh3aREpsUWrGjRsUbmKJKmV8PAnajvbmgaPMdX8uNn",
  "key30": "33xzReuSEpPh9Z9F8NYxRTAC393pz1svLtYZSyQLb1XSfj9112jjnAWHK8MKoahskGeqSsyPytcHMF86mCtJ6ecw",
  "key31": "2v4E96zT59sQEWcUUzc2ccuBMcLQkYaqDJBRPUKsirDh3hdVVKAQHqadeMXQs3Ns6TL2y2ovy8ELbZYHeJZ1ce1t",
  "key32": "5Zoe3PfHJYBawUMtu2mtw2qoRGyTkYn6rNdn8GooEk8vAWGXTC4KP5yJSmFBp2nPTunkWfhgNumBSRTD6dShRTUC",
  "key33": "4Du7xNkoBwMXy7NXa9HVG42XgnmiBpQJsdMET7VVPXPqvhbdh5dR6Ndkt3VDpSSDTKYHti2Vb84hr3ev6cC3rgWd",
  "key34": "2zTeNVheSJBw24U4AMPUsKm6DRykD85L7dAntCRgdSjLrGcnNNbTefxi7w2ePDpY64t7GUvjom4sxt5AJiynen5w",
  "key35": "5tdHWtVTEyiwSVzHAGjQrqShadWbDSsRrw12X8ZLviEqDUJZ3EAVRJxnj3NWwPmDGnEZQA47Ltn2Qhz9ZAA8PmHq",
  "key36": "k8kUJw2gxjVguqP1WCDmvFedLs6CQkFwUy9zBB2gACZ8Nyd7RSS5ZGuCi7FS2AoJapMfZu98XE6U3WSuwRXVsvU",
  "key37": "4d4yrD5gjGqGb7r3CUJGQBbA3LeMpNMreTfZT7W4XWidEJRmCPHA4FYxLEvs6MQhy6Bdv6PkuZTY8xH11ZaKNvsm",
  "key38": "3sGxxCRppUhjdgg4kgTDfceiRudtyyJRDqLjj4tUjSA49qgzzZcHajoGeAtzhUeCuUPSgetCV8MtzBVi7sWdUXKA",
  "key39": "5fZkC8zfu9RbRGCdrpjJkMGe2udKs5Bwkvy9TMKNyzVmrWYJDs7YdGzj5uQv9DzyLu8y54JQCfB3kxGeqN8t9Uu8",
  "key40": "5Pp4dYrEgDvvtG6q5NJLCDSeHCNNvZDYPyS9xruy8uwH2ccBrSMtXNFoApaNUs4noGtLWxowbxLmbcMtUfE2p8oF",
  "key41": "2GuvSuzsRbgChg4hW4hBsH9DGNeaFf9Qak4WEWxSisx824zFXJjz85soU8xgN6AQV9NHAaDp3tMaz8MG9K5DfxjQ",
  "key42": "4k4eXCPbSLp99H6Wbs4nwjXVGMjMrwuWSaBfiA3DEa62EzsNzc2pjSRNeidPME43mBHxnc96HUpTkRVA2NHyhQVN",
  "key43": "4rmAYGskhBdQrsW1MCLqsyEJhBvBCBcaMcb3H3E8eNwDEY9qkFjd3rBwLhjHAgXN79iy1woV9dFe1r71wRNBrNd4"
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
