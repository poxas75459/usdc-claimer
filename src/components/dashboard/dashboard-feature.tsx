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
    "4Hq59y6WzxdCn95fn7LgNXu39vvZzC9X3ux2CYh42ndNFQwhf9BC13vEpuw7K3kHdjtaSMRsbR8g9AsxMsEzG9Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wqbbm6413VXVUyxpgEnMQCggJqkiG45mo2nCf9M8916fxoNc6PNqE7NKvxjTzmShaGpREH7Ge44ruKJqhw5jGjW",
  "key1": "5Cvo9N9ceBRDCCmDrfkPDA8SRA29VKTmdAamim4UeH9ykNk2Zpm7MRoBDay7qn6iXx7Uoir1TkQ6HhXHPAM6t28k",
  "key2": "9vMd5fv4T4MMtu8uBJPaeEMLNnKkGvpBHUSnvMckRbaReBYEE4FhQx45rWmwKPtyEHBSd3BpX1fTxH4gV2koFJv",
  "key3": "3qSo7FCazeDnvE45P4oMsBejRjGRKv64gy4UMithqejr9gfNuQMWvtuee9TTEh37g276p8JP8D7imLYSpbAAxyuf",
  "key4": "3VsiZHVH1Vz6wn5rpkX6nNoARCMKaMMkKzNhjjmtTcP1XrvoBfdV9ryRPcHKUZskLkvspoa1GnVxWEGFsdpJe25t",
  "key5": "26dWhnbfdq3BWqy1eLFGvyjLp45MMi5kjfGvUAs4BUeNfggE7C7WxkWogT7oLtar4diREtHo9KBnXNENU7E5yHHF",
  "key6": "3ct9MTwX1F1SteYADNssuzLDHP5sscjLnNojpu69AFKaCCr4Z8wx6TdTBZVzT4WdFphFv5oBWLG4hL3JwM6rLhi9",
  "key7": "tjH1zPTdPMA9t7igVg8hRrkj4zqBwmvGGinyWMeAVW1Ub2bLtbPxqJjjvcmQAj7j1iDjjQpnx597qe8dZFZRUmw",
  "key8": "4duG9TQZe7XY2SZ66isMoksCJyGVZvkJHgWahM2G471TcQ5WYw853d8AfhxXPmasY7TQ57jyepWZn9hZxS8NYk4j",
  "key9": "xeoH1v1tv8Vx3bN7Bhx36kHgn5hjd9Y8Erf1h1kStSkXCpKmofoxmGVg5P4AVJtHETcAWRUQx15CsY2ewmYuRF5",
  "key10": "JzqCTTyAMYa7Mspkj1VxRBDkV9JaEb6xXwpttw6eZ2omQx9UTAsDzn4J9uDYrVyu5Qx8ftXYM8FsdNndS1ppy4X",
  "key11": "4rUgZwrtjpnGrQjzi14tKu5AqCKoTGrSy7QRGEE2p6CTTmnPQhYDN1jshWgV3BRYCw1vWoZe65cS428h1Eejrk5s",
  "key12": "222deGaEKfxqZEMEs6DqydvJj7tHwUQrNxeZFL9njde8TXJMzMwh96AhSDGj1VW23fJpa3Khvhg12V44z8Jc5Yad",
  "key13": "ixHtze7rPQpRCq5D1egHD9WmNTdAo5MUAgyH8XRgdHTNy7HKgpY8erj4LwjSMAXzabQLcjuoRJayMnELt4eRYEH",
  "key14": "3PaKDJJtDYomZbUxsfGoA1AJKUWA3hA9Q4FoEuad26PkZxhzbUtSwbjAeu6vaiqm9JgLRABVYxPjvTibA4eeupPJ",
  "key15": "3ueiyJwjjposc7QvRNUp4pqhFhbkxV6SPrAuwq3KiXdCkrstqTUJmuHbR2k8c7yPTo8aYn18NRrU78VpAnKZpuoL",
  "key16": "2j2hjmj1QHzfDci5UfRpyFpYvpgcemctM7f1qAeCDR6LvGDZso22uydf9RqdkAzuSmzXSJoeestKZUH8HJHjPf36",
  "key17": "3yuGQiJvPj4sWHWCxekvDyPaNuQ2QUNsvTx2gho3Ff6RF58Wbvy87iVqcuF86xcgW6zwmfwrJMoHujwLTfSAArQL",
  "key18": "55aY2EU4iWkBV92kwHJP2MjEA8edUrN3cdp51BVsDBr5m6fcwwHNn6G7drq7BVnyt9DeUX8Z7RhWXxtD58WCSubh",
  "key19": "4eNvxkT4Ns2faZDBS4oRso7etPyuFPV3RkYMMXTgEdjbZ2hkhvLRGBgqjhEHY2BerKaw8pg1BQpF4c4ZokFcRstw",
  "key20": "4UQ5XybhYNV1ij8Bdtee6EVaoX1PDE2CTah1ysWfaVakkHEZb8Mh7N3D14UNV4fStjWxGNFtmk7Pdf7kLsYfXgZw",
  "key21": "2uSZGQrxCNcLomSf9DNXZWQGt3dsD3AZ3x2UFy2eAgmnhixpp1XP4HBhYBsqEiUtg5mt6Dd84nWmmJUuvqxbt7ST",
  "key22": "4kqRqdC71ijoQcF6Gp4agM7gyXEpj4Sb1gppJdNP9xGieK6tEG8pWbijgyEqKxu26M8zH56K5jW7da2YXWFBBbkT",
  "key23": "QGsoypvcwLK7UijBSCyWDWHWdbRAs3zSVpa97qy9RGyh482UcJJCiuwV9TRxHL6tLPmS3J8kd1ZxRh1hRg9btLM",
  "key24": "1AMfSFS8cjcserMqSm7hMyvyKzEpsqvEZ8wVAFDu6ezCfeQSmVLWdURh5CG9rxdMPjftDfaEjQCkuRQxcjJMtUp",
  "key25": "2t2dcU9UKMDzHx8wpqziBy1WiePxL9XP1Fpo3gBwAkR26tZP3HyKD9g9RJkJEZGVKKBuFUBrJ4RpkyTqnUZHnTBu",
  "key26": "3JRZjz3JMm5KrbLVJgFwtDkiRZLL41k3nsmjTUeYpMDaZTnj2NL9VjZEupfbY2uTpCLgCFpD4beCuYHUX5UqBtBV",
  "key27": "63nZfQbMny2ND8Xe186QHrAF41jzo3YJJvVZ79Uahg4bPf96WXaHFiURHpxqzr584oBf3JhsYjTAhwo2rtkNvcaW",
  "key28": "KGtrZKqVW9nNpxxuxmZheMJyB16Scqd17G4B2Di8C7zNBKaFhRFA8kwgiaGrtURZGphEBfgX3LKQST7cyVzKXM3",
  "key29": "sTFDV6JMVrLPGTnR6LMGSJMFGY6LGXxGyKqSqamVyZqKjjGGRytug8P6inbxdHwGmtChu2YW5QAWvLowGdeUdUC",
  "key30": "5tfHDk5qdZq1hkRpRH6BTc44MyXyHHkV8tz7kzjN8BnCzPpk4dpewkSSsUjaAwuUKQRncoeVeXqpwmqNv34kBECG",
  "key31": "63U5FwK3tz6EBkTNmA72axZysFbVHsRUzMrkTwLEsKcF7yZDqE1xzA6jJW6FywVxgL7cmCjNDKvto1c98Yzm8ybM",
  "key32": "3mHnAPPCW9WXfYqJzb8oPJJCuoTyph4BhA8UUk8nAtmW8AiqRhUavjvVdTabd1vbig89Wfe7Xa4ccvacqnHu5wcq",
  "key33": "28VgNdRr5x35yJ4gDrhfeLup3483RZP54ei4ZwMBQgWPK5D8zEc16reaN5bdJToS3Xrei3abrjD2eNQdFFZowVyW",
  "key34": "3XTr9XUnn9nfsPimV2vKVdqYZyBQNa29ZPKksQoyL6aE1VUZi9eGUWP1AZ1frjZAAootsx7db214ReQnv6WBYYpd",
  "key35": "38KsdeAcVDDGeQPherrWpSc6G5ockkBwWWFeF2xopMo6EPkB264YGYZfAx3ifukWD11ECtSiM4oPi54zYJx4SKks",
  "key36": "24Z4J4nyJ9y3nKdkAYcNK3rmbqPPMHqHKWbKDiwLLE4RpVrhr7ihTbKPsM3AzM7AHZQVZLTUTGGABJd8ipsxVtTV",
  "key37": "3URwXJ5vDzdR1uGG4DQmDHEU85cMMKXgqr1iPPK7c5MwF81hHsGrJtZ7TFGFW2Sw6BpXe5sSBXrTYEAt4pftXQz2",
  "key38": "2Qed7aW522AduySKEZfC8dK2k9gBseaRmLVDm3Wr8d9QJCxNDZ8Q9mKykKSHWRdK8hnuj2zJMznyBRgirjgZccGg",
  "key39": "3evZ7dS1YdMjQwrFVHdD5NFzt5VtpuTFezmjzioW66QkBru7HBXSYXqjqs6EpuHaM4axwZqfqTmkFgrSbb6nALu"
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
