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
    "2LhWgjwgh35cZHFFXfbUZMNKqib3nTxFexu3Ko1mmbzR24wrK9F13JRxnaMxZxRs7FCeZ1bR5s99dpqj8T3NgWiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ax4k1kGXX9F38BSfQpbsen5ykQt5pQoxGgnH335VeQxdduuz8kTt6LtCtnmwhJEoMFJ1YghndfzUYohHAdS33tw",
  "key1": "5DpoXV1p4LayqTcDwKVL1yoN7BbfZ2UnhtXf7Pvm38VUi3yrauAHL4zvvCojjHhxQ542jxP3v545thLhUW1j5V16",
  "key2": "5nut8BiT7rXsxTK8nFoY5Ps6GdKGhSHED4Kmed5P4ApxTheaVsgghwabKdsFsGamkqoRX16ooyvgQBQpvSbCCZUY",
  "key3": "5nC5EghRqmZ3NA7jpj7MumnP88dFQmL8bALQiSgjCXzFYfoXyNNi2jg33zYk35RLSsXqdd3koW3opwmASV64Ndid",
  "key4": "4aSZ5XCxyGYuE69ZsLKYEXLbUTC1PcSE1EMf4RbL9RWiFMKxdjtFuVmUnV2nFohj2HW4Gx2Zv14KtVxd1mfP1BaP",
  "key5": "5k22MXyHU9CMonAWck8EgxKxohW4pNoDJuqwUHLAhi4eQiGWpJDQRzNjjfZ1oeTG757A48ZJtrraxV38auP15mcc",
  "key6": "4hxRq7vQYLCGqitLUbdFWR7w1RP1Sgh11svPaVZsS2GNaVR5quFxCbX8Q2LwMbX2zuoUhKVFW2Nhpppb8bZQ8FGR",
  "key7": "82NEGYHGPxiXc4iJMeWPV7uGd2cMYjvDejjAThTSZGY5hjoNHAhX41vgsaaz9s6scfMLGcjvQEygfnPyBMVMnia",
  "key8": "2ppxp4ijfqviXdB9xBHP5mf617rb6ZTjXnA9N6SdNrKjcQNo6TZsqCV4hK7on4xA41qwsG69u2NKaoHYpaxLUurM",
  "key9": "2fFFV5Mss3KZFvfGvy5J4oahayiAcxVT4wpLFiSxiCf3xgDkTU5MBLn7zJMCmQK9bSbESsdd39TufgHM3QcbHMpZ",
  "key10": "4DSJVxiRL1E1c1yo6UxkPBAPnmiczW7FVFMrAXNCVeuiz5BdV7VjTYMi4UemvErZkELAAF5HPkGVeRNYvWJiqywE",
  "key11": "3jGoS1CN1HKWPriBXiKTXCqk8jB5VsEVz7pSrLY1vYw5akh3QzyeBaZEwD5xdX2bDq9qYaCrYoZ8cGZqc2tsVetC",
  "key12": "5rckkJxGPHG9nF4VdKNN3yL8FUuTLZYKZeaTqH5nxWetGAu1o3rJDy8zzJ8QqehcN3kd6Y8yHxoFZJJL7RcBinn",
  "key13": "5DAR1zkZvLzJnRmWeFCu1dSeSrjRpBBM9CNJQRPgr3STVV3fFZimvs6gY9PpKURZ7Es77ehsxSyeAbhRswAtyGsm",
  "key14": "2ATx3prnfFk2vM9bmo8SZLznUcxWigxBWgmw9bfY6uNYF5dmHE4V141L9MMSSm6Mt2rQmosYYkT1dJmVZVqsohjf",
  "key15": "5fkDhCF29hc8N6WEwSn8puQgFf5UGMNDQzM8EjoKQYCZivyrekxgN5ubK6DN3vYiCF4m3H5sHGgchDWPB1Qc5FjA",
  "key16": "9BiyZ6Dg5fa1qYDbmQEmmFa73tvA1VK9qATk3pyXCYqJotGESR3JcqSBo5vgjC2gvm2bVjxJkoyuaPzUfRo3XdX",
  "key17": "5Q75myGYzCmxHrJ8EM8k2BCwQsQPhhAR4DqGve3zDNpvLppQVzx2B6CG79jF6vY5s4yn76NFR9GG12j3T4LuRfpj",
  "key18": "4wSV3y2ngCJ9cmKbZQKwHbKsj4e1q8D2T8aph8yLxeqxfv8XVx8SCnxb1LxY3ZvVRnm6rvHjYmv26G3X3T86igWs",
  "key19": "26weeLxpjqwx8CXKHpKFXfbdRGGqd4tbcYc4JR4iznJGhxYDqMqJBpcrWzLoMXj7F1xVQ7z4TrmcGEDmmHhGya5Q",
  "key20": "D5e7rPWYNvHmxgwSHByFgrDNV1trBkG4ch6HU5npUceQoT2F6k8EBjkhBPQGwSXAUt66eAXy3kDpzDzKrEecKdL",
  "key21": "4AWPoB8wHWJVRVxz7Syw4wzkELqy1VTGTVJnMHrqp4PSREZJ5UoKVcd8qhU6s89Wkg55K3TsYoxQeTshskv4BHGg",
  "key22": "4S7ajq1oTShCAZdDfa9VGok6ePfEurtRk51HTJcPhaHMofHkKLHyg6mn31sok2RNuCUQCc5NXZZm3Mjif8tKDSy9",
  "key23": "7MPyG5d5HQgZBmV3NgX82hs9dca62ex41kr6jdmQiAvCYfUehvvTX3ok51k6xq2g5fZZgeER5Gi2CC2zPYTAWPg",
  "key24": "4ixNJQjJvSrb8o5gDgxMnfPBcb9eaiJUUGjDXdqVnMUjaRD56RWR6LYKXSaGJRDvtDBB8aMKZytjw3JUjo4kPpEH",
  "key25": "5pqjigUX5M2ruqLAv6sUQ5Dn3rzo2vm4r4N8g5xQcMjL5PjYR9xDD5HtENKtTeNMF1CZJeKYRaFK2p17PBacYyZ9",
  "key26": "2ECsdoBCfGGH3JvmQtrohJic9o1QTXbcZbptbEwMLMSCJd3MZkBwFV7ABtvs947EGJNeo3jB1pS5BxCadCPBo3nM",
  "key27": "4FsAh73RkVYTeGiVe7y4PGgV2aqGbNuDXRyJT7e7t3nfjcekWg7rD59jBGBGntePqrrjEMYnnaCzXW1NSJSaasrg",
  "key28": "2eZUVmA31V5TZWUb8acYUESc5no3M77mKCzaiKM2jPYJDdVgTfdb2gKtaRj6vsYaEcx3P5E3LQkw9EYdsgU7EFmb",
  "key29": "5t3qauVdFqagHjUZYBBKjvHkGS5YPymQ74s6ZSNYj7coZ2nN7GgNvh2qsbpLQuKL1ukc2gRaNgNafaWNuamQ1uGv",
  "key30": "eJto5Ve7vtQ2Kmz1xkcmxSt57pMKND3mU8vhT7TrJKbMLtvqtUjKyucw4o4yzP514LkpU4RGm8feUE1HbuYEh4o",
  "key31": "57yLmhR3dchJzWqUmCENhkCZ5E1YzuVmrmiEu9QsfUMhmoikcAxtfQk77uspn8wZT8jHSL1dkbsoeZKFDkVkJJnT",
  "key32": "VTjPUfkKV24Hg4RFw2MUTVRY4jTey7aRt1Tq1XcYUXkaDtySSL2T6Zg83vofy4sDUcPvb6gAGsHvtp8G4XnPuxz",
  "key33": "3aKvpusfjS88eJfQH8dwjWqLwpMEkuCWr7mRG5AyaoK1gQQhUYBPxzgDmkcb5eBFDRt5QNbQsHkfhgNRm8TCw8nH",
  "key34": "2qTb3Qk8gj3XtSeyJGbvPXAdCaRC25uzKPimKpCvVwT5k4NQB1mstayAsN1YTyBUVBx7gRyCAAAhMfr26vgjPb4V",
  "key35": "4ZFDzEg7VYfikwQYL6FuyX8X4E8RXWpnD4TWBch64Ae6c3iw3JCRTyPSA3shphHgfe4YE2Vm4TuBqj1k6RRuHnmE",
  "key36": "3QC9SNeff2S4F8RWh8JvrTjwfHVq9a5SFsqMjVVLG8rk4aosXFcHk3Xa6WD5ANetXckRMBm31D88n1ZGApc8x6S",
  "key37": "4Qpgug3fZgezshtQp6Y3SU7DVHu14xz9dqTknsK7SXvqVv3bHn5rNzMbEMGWzzy5eoEygxKwwVRbxRhfpqDLPsk1",
  "key38": "39sRbKw2S6VE1ee8VKZc3NmHoHxe3o7BxM6y6zu1a2cieGCXceoSDXNdt3JUmuRbMgt2hUUdgtPe4DECmHZTipSE",
  "key39": "4GYngafrS7x2netbPUG43uJMbPikoS7TypDabjmaYXLZMrmRLP3wPa67yUXRououd4aGF56TJAf2w7iXEcP1e6Xi",
  "key40": "23iXsBEULxcWMHu4dpZiz282ALFmJBjMRVyb1C3WmmEPPKCh4bUPuDj3PdKkRLWfTuAc9SaRRMCyforMaQ4k3JAw",
  "key41": "2JvXVUouGBmrNhU9S5XQBV7AYhtZVXFgp7wBtzenwUViGpCGgLYA7VhiNpcPyXciCBsc5kjg8XaAEhKQg1gFT8gp",
  "key42": "3p7fBF8eEmDRDF1zgeYN3En852mTEnJWE2BKU3W3VRsTYsSLZH3YDRPgd5456sChoVA5sn2vJRMu3kg8yQ4hzMzL",
  "key43": "2z78EmDsfMGvQtLuPLiiE7NxcHkYS51mqwxssNzpD6hYje5t22XygAHnx6mnV3HCMDtQEH5Hef21Sci4rww8dT18",
  "key44": "2LGmw48Y17y6zkKvHDsNXfTP2pkEQqxPj5i1BUHni2oQ5QTs2Cp29K75zW1CH6xb9ErwcJz6MrZndzXFbtor14WF",
  "key45": "4zLETSLZEEfakvynw54uQHvGxCRDP4ansvaPEcVkfyKZ1mfjYW9XGvtRx1pXUzDJugDxdD37GNrQf48c5VkYrctr",
  "key46": "2tUjs1HcgnPjYcmyPvSQ2LoCZZuWmAiBEh6xsKPH6gm6CefZSqEdCJs2RhowbshWGYFHuPvZiJpuA82qzYJWJXGW",
  "key47": "4XmQB3MkfGSxAen3LhkMRzfRQKUk8mNSkhWeKbJsR1M96n3U1oXSvjY6BXCL7bnnHSWCharGpENEG4XUEP3bh1Ws",
  "key48": "ifUVBUnBoNJKXPjETanNG586vGsTW77XVwcPhQQDWmnGQzBk75YixxHviH6fkk5w7get8AZuboeVTKaoLbtFxWS",
  "key49": "4kzdSeAMtLHEjVTyaayioTBzW1w3Xd6yLgby1UqWddrXpbkcwYNcfp6pPQsLdsSsVgf6gjoWkKofDvDPcZWuJ3Dk"
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
