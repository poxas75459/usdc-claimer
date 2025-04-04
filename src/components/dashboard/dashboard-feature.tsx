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
    "4wZfmEwZrhw8ZpNuuMF1tBnRD2NeAA4TCt6kNBy6bNnHupEq5SLSqHXiuizRNpdrRPh9XnQmEj8axG7rJypm38nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2747GK37tUf3a7GtYbA4NqBuN6X5YGZeGyoSE1vizCL317tucJwAmoTfdGn1uBY6tXJeZyh1Vgisgvosp6ggKipp",
  "key1": "5JZ1v5umAbgboxpMjxkavczB3c3QQkZ1RxTiVdrxpfAHxqMSZ3xGHdMQmnbxjvFH1H2bRzxeQYfcfiaG9hbU9ERM",
  "key2": "4qem2KTbrTJSmd2dQWdDhftMEr766HCuqWoUxAmRS6L8BtYfcGhv7J3pSjoXmgVHrhcwkXKCdqjWicmHm7w8P63v",
  "key3": "3PUERVZDRHEQjNbCqEAzQMSrGTeJ7rx8wRjn88i2VzNFZq1vSFyUUUnS2XFFyC7sD2GonJnUEmqadr9D5RQ97kme",
  "key4": "5PUci4AksbojqJ8Y8h3bFtwibtEDJx5jsPVzuamDXnJX2N6AcFcp4x15r3Ni3LpVsmiKzxH8Y5ViuDxDpTkZYRPM",
  "key5": "5hja38pA75MCi7KDgMdQnx6iHeA4hx6unPtBRrxeBbUidWSF26caj6QBzJXdod2sLwdo5vomSCkmViqrUdWHX2yf",
  "key6": "Q9iWKKNKaAnogJUCqm3uyJbY6zjBjjqE9DKLY5DoHapViBp3wgFCoCA9KETccHKg8dWMr4EPZ8EDPEByKGQ9zKV",
  "key7": "565MovQULPiXBvSRUs5Y4WUtP8rM4a2KAFWiTmZYfzX5GpKyWxAft3apeeEZkA57MTx4H7FTemyb4QJAk18yF6WX",
  "key8": "3eaC2Amg47Jy9Ft4UvcLNuCDNGyYG7kYTD3UKn93A7tAzMH4FGtpSbuYhX5NKMYPiV96XDa7XmfF7X9GS3fVAdjc",
  "key9": "h6WFQiJ5wK3aD6KotFWcNru2v7zAYLGVVyRz4evw44UVUf7z5YPYJ5NQvyFBVs42VYaeEeWU659ginYdLLWLymS",
  "key10": "65gNbrJ6QmwCeCzhvvyebigF7rhexs49T7YwosNjnYrUJKcnjueH82wYofV8bVCVydiUSJrHE5JLixyAXnaduBh9",
  "key11": "2iwFu7kMiyV2HUVrvZCx5wBrzeGADspYYf8z3jYaexoGX7SCv3F2Z47qGwsUKhz95mi6sDHhupZ8PBDkr23GMgSi",
  "key12": "3S6i3ujCpgaXTimgPX1VbvW8gnciCgTM5LFt8bUESyXBjNCZdeJX5J27sNRPygdtpMbgweHku4kEWUM7dBBMrWXv",
  "key13": "5fMBZY3ax98gSJoLYJ1S8jutdCAzsKgeHi6Qzoh1K8t1tP7xUFndE13c2sSpHMChJfX1tbM24Fh96epbBMXGV4HQ",
  "key14": "2CVGE3LtVuBghLPYSy8JAWN5y2wQ9v6mQSQS5VjHZ8EZrVAry27m2pKRLw9QqSBT7ZJyLNg97oPqnPHdWfUK3jS8",
  "key15": "3K6RUv84J7uC8uqrWgS4KdccTzGj6cdYfkjGy9kSScCQEhpAYDXYB3RHfxTMnYKzU4xKT9hhqo4Sjuwi7CVgLzes",
  "key16": "dBxhEvWvJgZhCNyfvrgimXDDGGWtx9qHJv3kiAXyPEQgyX2ePYKRVFsoP4cMBqNpjPwBDp67gfJCbRx4NWnCDKy",
  "key17": "64rMXo24MB5Haebi32V8cxG8mHSMpG2D2psjXqEaUdmiZ1xA7wNj3fZ4KRX7AusfWU5YDf8nzjhAffJ6RVM1z6X1",
  "key18": "LpneVjHX3eiaegNpCuu1zq7kZrPJb6XyEYkUmXKG3ajy6LHD4fuoQU8364iQkYwd4nrxzEqoL3BvZcLwtExqwni",
  "key19": "5gj33B4GbouQKLqZgQa1ysATSZD6WKNhwz8LyV4fvgZJLaCqqo4GooJw4Sd47MJvUwH8VwZveqSjVGGcFT6x1ix5",
  "key20": "4CFxHCuXQCiUs2GdPWVdehDjNtktxQX4YEWHP4jHFUJP8x9XRbiM1ZjG5bJkcfdpxkZaGmsKQdMD5Ynu6EWPDshP",
  "key21": "661G2tXDGhTqESWMvByQGY4MXJWR6n4HBQ1joj1XkqUwVjwZTrqtw8LPnXkUVjYSUEriLy88THXx8ehwBTjS8JNb",
  "key22": "3hYNhtVyi8uSSB6FXqFTrzikf3pFds3DF4EgkG6NuwyAfZnMgayhbjz2Ls8nVNbzE7QeHhnbQK3swtacCutJS4Pf",
  "key23": "4uvqguBmfekqAvARqutp94nbLAcg2aMV91UPhy5a5NDXhiAb2V3GvVnRpNoGmwEkskXSxpZ9rrzWP6ThitZLNYW5",
  "key24": "4YZEynXNyEPxUkfXgY53RdfRhoo4rhsovN5CnRjGS9FfKCpfnFF48mfWopoj6tr3FDmR4dnAS2CXmV91jtdpAMq4",
  "key25": "CoLtcR7aEkjKPGzGPg4rmdHaZWPYqRzw7nwv2oCCbUJL6vNUGZCy7v9PtBoMzoM3PHr8RLVLPc1ib1SxpDwh2ts",
  "key26": "5rAwUjEXfQs69hM6YaiBmkGNEqCnBBFT7UfuwXZjy1csFGZ2BBcQwkCvGFNSTijLELuveAAH1QLd91wHuFZ3s2CU",
  "key27": "2ECudoK8ZAFNf7wXUmtRPHaS6o5xgLpaLu7zd1Uxn9gDogSAg9aZziikVPehgjZwmoiwggQP22Xdyjq7WFR9erNM",
  "key28": "66pefAFPQQukEzFpnHVC7PkdyHw64xtWzpjmwk642dJ8hz8oyD7a92hcM9HKQMp2Md28G9FRwu1ZmCpW5iTvxk6R",
  "key29": "48BppMp783EoRQqxtqbqkGC35f3p1QNDMawXDxi1VZjsBwTERA16xgumEGG5QLfisipGMgpH7F3kSnCTgXewjeqU",
  "key30": "2mSovAuAYebZyAUhYknTzVNqZCeeU9vGabhnsH9zWLAQyGByxCPHz5m1pDQERvTjoQeLg3vxdF46UK4evXEjNuzv",
  "key31": "xjfF87pgo4czzt5vA5yQMyPLrwkoLfh7BqSyExeeT1eKh655Zn8HdDUC7HLxCBJj3TJj6HBCUuJzhmMSFGaMzKJ"
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
