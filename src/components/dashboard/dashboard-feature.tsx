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
    "2d6W4VLrmP194RycXARFmbmJiSTo2341rnmSEpzcn8GyM8krUaUN4L8AuD3WLXStcEF4B7bCSCJDUuNE8WLxbkqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5pBiJ8FVta8dfirK3sv3kD1pQNZoDzr7Lc6rnXCTk3iWzmE1rRzrDbHMz9Qg8EoksgESNBMh4erKkoCRRXhmtD",
  "key1": "5fTXUpvskK2QBGBomC8XMLmf4TZSp1PVBYQZwXztax6uRAT5FHnBwQ8bXVhHDMYGjU2BEzAc8aL1K4a371iH4sQu",
  "key2": "3uX3zxaeHfMh2DB2C2KaXL3YJUSC1aUXJSLpsmewwjcgbRbJMiJyT4htL2Y23ZtkeHf2YD8e9jpxDA2XvWQ3FG6f",
  "key3": "Vp83eVTgj4925BL1DVizTKeARu4PePbj4Fj2VwC4V8FJdR47ivwtteoMi9VprayShBFHr28oaku1j1jSEP2Ygtn",
  "key4": "4CjZ1JbTVNwZNskjRybSn2KX8YuQgbsvD6nT59kaVkMbZLTCWkDDLZu623Q5cyyY7BsLCsV57sxWkZKUsafBBnG2",
  "key5": "2Ck4Zycfg1FBAHBcvzrNL37ZPzqZzskuKDMWTj78jtTco26zhEbRvAeWqScnqMiYH55L7J3tGyR7Cp6nWGrda6mx",
  "key6": "4V3SRSMrY6oBR64AEh6qjjzznsj8JHghAd5RxewAa1jKtePtZgemsVk31o3ztC2VvoD4aE3Fb8tJ8kWzKmoGndgr",
  "key7": "2bccTpwa7rcq1eXCXSFZ1WWECrWs3D6XYCheocKFViiywqxvfq9JRzB7th9sPMzGYTdDsZFEnjFV46jaZArd4VJA",
  "key8": "3DqjMTYQa64U7xVJgJt5ZBMcYaDwUPxjAnsCxLz1Pc3BJNh4EpLYSagXk6jgtDZx4SpWXrVt9CwWDwZ75hTdcGei",
  "key9": "2cUPgax3qnCC2KadwNdX7q4v61ZXohcN4QsJ2C4pQBrxjEHq2F8rTvw6tkZRZnrEivGc7Knh3ra92qESRdtKX3AM",
  "key10": "273KHNE7ioQQNEETdzuhcuWKNiKMrtxE9XvLJvfko4JzkAjYWihqRh2cAs9QAasonn7wgERtJzkBeq9hCSrAvV9S",
  "key11": "3zrJHshMs2eGofaeNVvMUGeLQpPadQ1ECFVAAFtxZErNmCPdHHBUdfZY3Ko9PwuKzjFuxcZoD5h9GFPg2GNh67hW",
  "key12": "4oWWhhqravV5FcihN72NHwdWSNAN9d7tzujC3RYMa72MyprydTSbRLY7dcvvrjStSNXF9ag1wJxkmqn37NbbK7Uk",
  "key13": "4HA2N9VrhfCr5uCC4qLzH7Q4iS6ZHcmG3G4GmrAtER3vmG4DefggDUDgRHYfCCUHdTjXT7zx4PALkit57TDPciwu",
  "key14": "mwiso3PctraAGqUkK7gA2rqgFnokaNsVa2mPJPyru4DeXp3Zk9o2j7m4ze4ic3sk15DgNf8C68mztR4T7sSGyey",
  "key15": "BXhbvAWNg9ov75Uvk3rdyUfBA4dQk73LAhCUPSg6q6L2jS2uanrGu3H1GzChjgNf84khYNmnX8KF5iFEong7q6X",
  "key16": "67RMZfQKMTr5wRm4KDGF8kEHW9BtCPBdw4nAD51Fpsa5ca3WVR8whJYqFkSdL73CmDu1uzhuCRtx8K7WsHZ7RZ2w",
  "key17": "5eL2nxyWks7yZnHjU95io3A9C86miupQgVGGFZSgatfQNVeh36kzA88PBVTt4GbWEhWacXPXrW2pQNGoa5d52Vm6",
  "key18": "2GGtYyJiWm5bJKBVY29bWGUJoikHEC8FJqjb7vYrSR679d5LpH3Ceygi42vQZtisfsgo5Y2ZxGeGVnZWptrw7tKM",
  "key19": "44KrYTsHVTY5ggPD7efTBVFMt42w2G8ePevkjF9GgvAuAMJwtbgj6UbCuAA5eMQzFRoexpRw9GxcfUbPjhv51iL4",
  "key20": "2iS8rqg1HhkBmxR1T8qLKgVQ1K6yGADj7LDcLwye3KWRHRDYCGpei4JQz8zN9UXYdo9TqaFHzNid7SKQjf4JVGGd",
  "key21": "63vZ3Pd4eXqRG1QmG2A9bzY9CSY2MynYueVYrx4DpNxmHmQWnpEn2eyoQtB6qrbSKWj39NbjU6ogMdnkkuGxuBRL",
  "key22": "4CAQqJS8UcpVCrVGWSLtPMrnSiKVjYMAwvUtnLcndSVykTAVmZyCATMHzqphvw7m8Xg2aQcYALQcmynQvzWukb89",
  "key23": "3TWVaRmvVaazaq9wGJa78EgfvceK63fniVcEBHWrea9nCvBgF99X7cKBwnGEVZ2Qw83tvpoq48athYZ5gXhSpprp",
  "key24": "3Tczje5p3E2xZXXHZBC1xg2dpWdBrVvQwLN32r1i5XpNr458Fs5WWkD1Pq6SkpjQ3szvDp1iGotvf125GhLTNkQ4",
  "key25": "4NdUYpU9LoUti79dksmZNbMQkTzXLfExUas9fZXpWsw4P8ppA7SiqJw6wN4sktncPNAGdqfFuapJEH6kYce14DKK",
  "key26": "586CL9AJC2gRN3dWGP19VBRiDYfsV7vAZieBkhb15BuqijuWnCfxavpUDZX3eBD86PGv6Bzijkko6XPtd5hkxa29",
  "key27": "3vU8F8JRnsKbrmdUXNk3DbqRK8iqNHmaB8e1mhcr5L8Pk82nRPNnHBZKdeRrYyxQkAFzjSCcZfaLWVAFpCv6tTF",
  "key28": "FwbjEKKjWBfvEU5pvSr316qVrXWA5WP1Wx16oEVoGSjWFrs5QEQT9wg72yagofizPtF6kfavRxHVJrbRxAxNYTV",
  "key29": "3RifeTkpaC1zwKXuVp72Z7fUAaMi1dZJeYCC33yxiZM7zpz6tN675jbV6unN6iPFzbqzwqqXi2rNHDDS9s8uzs9R",
  "key30": "5ULUS11LP6KujU15P31yinBonvec8xw8G3fusWLDygBEz3vQ2TiD4mUEALwTcnYnXAYz2oNPv2SwAECYEw9shjGf",
  "key31": "3RGfwPE9vXNW1CHgtHhjBKcLafsbVz47oBej7PrzRMvzz3C6GFGfsk5RrXbnbMXfBsHVqEL9RXNqEb7G8JrM3wfU",
  "key32": "7M1kZiSx944brsMKdoGdg9HZTcozUc7ekCYXZPgmHTnz22LF7dgTK25dsD1rp6YsAuSbf2515wfGC28d8ye3nBp",
  "key33": "4JzDW9QqCuS8KQPMvX392chqhscfkecbFU1SC8D48q1jW7Zrrgpwj6e3Mi5tkqfvZP8Z2Tbxvneqdo1gfGhNaJhQ",
  "key34": "3M8ecCDWnAV9xaRv2HxYCRDprufesdG7DytTTgKSnaYmhgJhK6o7SbSCHCzTnNgqXof9L38352qjTKHQpUhehgbs",
  "key35": "2xiuJQ1r4ntzmtQG9xMg19sF4Gyp4wjfof6sZXwF5P2YHCcjrJaFWcFL7MTNQgqxiD5Ciz9ZeQK24H9sJKeJdRs",
  "key36": "2vB6kVMN7UKDFmqrdvjKPHxozfvtnBTeuJfjiZZ5GACiAmxhpZv7zZF3BSqaRFvT96kAdj3Eng542XoKLvxsrNvU",
  "key37": "52iEmQXmLsttVt9YLyb2ZuSZCfaeUj7RnWZtW1gEDSMvNpxSaoZrJvTJKhiKo2wxxTjMZpR2KLeNXYpvmZBL2wco",
  "key38": "5vgdiyv7jnc7Sj1X2Zn2zjWVnKjBTF3GLz4aApFd9SPTiBarKvgCHBo2jtEaVFiUkaaKfrurHPu3J88R98kVbakq",
  "key39": "2T7RdV4GMxKfttkXX4sjbXrjJyyrHYcoHWbxZmceiVtXb2DmnHQd4nmwKon4CKdZTCoEJpr6McL7xEZbMW5TdPRL",
  "key40": "4WDPmCJW3TpK54UgQnW2jMHeTABx1tWs3yLJ7FmyiZC7A75xbRX7i2Gwoawmh1azV7U2rGGEYMbgVgJq5vCWXAAy"
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
