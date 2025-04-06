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
    "3nV9Yn9mXUQrzak4YxKnyG2dfX5L2pPfUE4We2XteiEwTS6ZFoqC4HdY3NeTgpgoLc2YC4VjtnpA1NsYwtmWHteQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JcaoRVfD5zoc7uMTNEASfCWv8zbcVm9HvS1gtxCEscSx1dXWgnXfgpw1XKePfGSRG8PgdR6sBkfrU9jeUoYvxmY",
  "key1": "5mZhvxoYh8Nt3s8eArQ8CqJp3rkEktPZqcKGfgeS37cV6zCezytsX2PwZvKztF4PeFJoN49pUrCHGiWT7e7UGMzY",
  "key2": "4ZdhZWuCUdjbdq8xEaYsrGKF9kgcP9qDZubAfphBpn7kdP5vguXbrNaio5iUvTbykQpL8AjsgQ5ZEzouHa8zU9h5",
  "key3": "5AkVpRs9ntvqXw9XsjpSBr8c2VPKSxJziPoQ1FtxtoGUuo6fn4FFmVcgdjzD1NmHYEnwC63n3W9UY9QMfoia3Yz2",
  "key4": "2GzGXhxr19zg82BaEAgrYSd1MWnieHN8caqQMfUonqan17kgdsTCTMP6mtnw8WUzzq6N2UQF8upSqgPpo6aJjkMW",
  "key5": "2YDpAvCgzmmRgiY89UgRPa4puzWBUBLNRxYsn6aGrRyDbBYa1RzReHPxAAAtC46bB7GWwXtany8nEY1mwi27H5XN",
  "key6": "5GsZonPDwkUa5Pu8y9oZo98kBzU6o6oktmG4cAkf6LaFikr4vK7atk3awkTS4vum2eSNB8vqRsMxFoMFrcDy4eG9",
  "key7": "Xa2xBCd9NctxC329S7KsbtnKXc6bBFyN27VZu1T823aEDmFq45JB65F1MtZAZqKhqZbhEepSeD5agJ2JyPn65LS",
  "key8": "4BYLEJ2Pncyp13JrDGpjahG59S1cwwGWdQrCWkEPHTuVvQgKCxCddbZY1PXXomxr2P4ykTsd23QGynM7a8htaoJP",
  "key9": "3iA376whkVvGvfK9guYD1hMiotmthmShGQW483cYJUQdX79FsHQ77vwqs5Sw3Eg9sS3r8EJhbTt29XvSuu19KgVQ",
  "key10": "3Ja2z2E8aRocYdxTo44EdfHb6AZyhyvkVo6ka3AnbFro8s3HoRSZbfrgBUn6vrv9x5VfjJ5HBcFYsFf79M5wX6go",
  "key11": "5f3xBoHRXtjpJ1YuzKTEAHQVMEQUmRmyX3dD8Y8WzHU4FKdoeg4gsK3uwvRQcpdewWHBZ3PmKtEHeeGrQFWUeRgK",
  "key12": "3tJtsxtn8yBgcqc7QJiP8jP94WLd9gpV4bw76CW8M8eiKvxewf7xkxKNkfdcQNHRPenA38vXY8GQCo1NbWhXyaF4",
  "key13": "2o2hhXD7mjHnXugFx1zxs9Kfawpd3R13sM6HZPinc6ojW7gXor8Jzy9BzijVDpiFLPV1Mt4KbuYazNtRNWY9JXFe",
  "key14": "3xb6oCCWJtFxJcQan9ZtenXaXwNBjesz7FuqtfR4N35G26EcgKbDxT4DJyfDU7yWGgsPb9p44FgnTKzWk1TnLyfG",
  "key15": "5YQAcM5B2jHzLcHTdVNHCQQUt1DQAnfvVRehcjQWRvQHUAYAmz7vdwaMZZDphivCspeQNC2pcbyZNUbNVELqcEdV",
  "key16": "4H5qVXNDwzu2Gyy21uWRVdNrFxkfzQ7ztMXF9EP8KWAfL2THHhNS7ADkS1KD6Wupuv4NTRghRDbZpgSwmybWuoTu",
  "key17": "4S92TttsUVYDRznMAFoNEBd5dU4TdB1pKbnZ9iY2k4gNoaMm8fzPwY6fUu4G5eAXswprKZscU78Bu3JZTUBJAdXM",
  "key18": "5Virpe5nUDGy2NN1oZ25SkRhk4Nn8YUaNGWHd6zSBV1anL941ydsSm5gqrXuqExhvMXJh9UNd2RhW16S27U54epX",
  "key19": "5iuR9EBMLqdmqbgsgvJhmV2RZwxm31zyuSSezeeazaHfWsKnvDxS7ZBu9bqGRLBFxgJmKEJ25kHFaDJJJEbRep7z",
  "key20": "2141ktVTYZichxqFkrkY5EFE5SoSyouJ3eMG2Sfn7CiSqYqagA6Q2eQN27HzipaJ4Y5vMCAZkRRxao2GopHkKkgZ",
  "key21": "4dfeNp8vdPmxb8k3fppVLfxKRvQtyw9vBwVqqZbxEZWuK8K3q8hrajUz5ZsjS41o6GuE1WKWWEpwscJ5inPhKaP3",
  "key22": "DeKH6mMwUn1u5DoJQFGuoW6N6k9GCNdKoZBkMxUJUCCgnsJbZYF2v4yiBk2RvDeRXDQ5NJRZ2yL2nRR4MUFutkT",
  "key23": "3KC7wc3DFDVSU39QuCrAwwRz7GyDYEWGMNDZMi2c5fcCF4aK7DDu9WHoAGCrTCVU1hxPThiPE3hDxrrWJ6hV8FPw",
  "key24": "2ngGmmHuHZd2pvBQzNHeVTMoYpnRoMcZ3iV3MJEhqMPU5XkFLP5hbKW5r3JPLiC3nfmTBUx4265r7LEbk75tZyZY",
  "key25": "4JyHuVdLk3Mbu7pidRWpYC8KV7zGjQ2wWinbqdp3YjmRvFBrTYFyQU7CqUK1vq8dgM2JAn8xt1iEpiEJyDgQca2K",
  "key26": "3xCJ5nwwhYxMei1mb34KGyDwzi8YrrwTXAEZmAcQU2S21JWZY5MVZSTxKS48oJLUGWRLdmEZR5JRJrY1EaTX9v38",
  "key27": "39DzwLwcMQXFzbJpzZ8hHqxJyoUk4HyM3QncKhYMXym9UDuAu849GqMiEPigV2dwSdLc1KNrE6QP914NEkfhPawj",
  "key28": "4W111mzmQNuBbnt3JmSkNswmTcpqk3RyQhk5E7GnD6RZbmuLbHwksPPTXKXBajHn5MCR4D8wBFX3nHkYW21zFRuo",
  "key29": "3rrMBgA2jSTAGwoR6HQyVSDz5w3yBjiYpHwuABNLzSeqBPWaNLmgAbSdDurVB3czdMaehBvJQ9MXYagfoTezCUtQ",
  "key30": "5JjDCmFBfHJ8NVVEdZdsNLsVjhakhTP8aPQp82cp3Dpq65L4VCdLZNfvobEKWcG5ipPcNG6ScsP9aMHAu7hKFzRc",
  "key31": "2fXjXxqYCBpnbpVB1nuFr5MBtB6mmF8NYGPhghHyhbsazHu6YNCSLGos2xpq9bmsx1JMWLoy8dZLLtneMTfJq79W",
  "key32": "5umAXcCdeeQa2VF1yubHBXxmwaQrz5BomHrpCFp3f7zW4PcZXMisCJ6dJrAa4HdRVg1Z8dFX2dt4Uuoq3WaPnyry",
  "key33": "3M4uzBH58ryFW9HYuSMvs2HDeMwYEXW9e8uTpV1YwKqr9Jcaq6zqMRYsRHcRTZyaNvtWYNTjbQ8vnehL657wxN4S"
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
