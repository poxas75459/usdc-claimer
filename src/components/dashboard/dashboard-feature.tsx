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
    "2AwLP5Cfk5gZqdjBuARJuKGXwtLU4Zc3QrcaSWPTfmgrpAoDpUGjioEtJaSXqLj5Q2c7pwstmeQfeSoUpGfFunYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XjtfdDJBudPmixENEYfNZsEytBnisXQmXrzJDDidM9gLDUzZwdEZTA1Jcwu62Mp1E3rNUYNF28BhoCCy9FBtfRz",
  "key1": "3MFRZVaAz3rA1bA5vFVBFtpyzxBoHMntBfsHvm1FKkzjKsRSSrf211Z2FCqyCbFa2egUomBemK4Q2EzR8hKtdMxY",
  "key2": "4gWhrtK4Stxn8wZ81Tp6nEsSf1pBgBo6rcyf5Aa5zko6FJfsMhwUGjsUgC6CtuTBXmaVUrPffxdxjB96UX4qavQq",
  "key3": "LQXD8xM91TTQq9qTVVpfNMxANbEJqSbttXYFZDU8pxMLLiB2nXsgTs2LVA7BAGutLULE5v1ndPhanUnNHssJyzn",
  "key4": "3FohvGUK7Qpzhg8peKcmXCrsUuWFDinvamPPJ1r9jbYQ1G7TRWmDgFbkoJZDLuc1T44xqWNJr4qp6mff2qVQEFiX",
  "key5": "5KWQJqD2Upe8kf2KUbKX9qL1MQ8bx2fDdmHNFPwCGq8LLRDnMyiMjRNCN633AEeTNeSrgid7KTKamZjEuvUtBmS4",
  "key6": "4VEBJhKdJzQE87MmoyW5L4WFmdUkAx9YNtAqND3B1McWyh7gx6W2xtU96aaY9njK7aKUFWsNpJLEqDCcDTe6HnzS",
  "key7": "4czmGaSUfet7bGyjhNHBULeHsodaBdjQdHj1L8DSCRPQHvDQaSDPtgnEzEet2ynrqRrncKFpjhKPcPVGK2VuPZF9",
  "key8": "3QNLLkixumjYz79CmUKx7EnM9GbUevZ7HM4kyfjstQu7gGqawoBiLYmeE5F8W1yWeGjJjP8ZCFFzhm64FjRVmb6j",
  "key9": "2ME5yK5aA3yzS2h7TX6uvhoAUDpXpoEDxFYHmrCRtQJKfDGiUUV3pGddRnzYXYRyLAbpeAJNG21MZ3GYX5HgNcD",
  "key10": "2GwVmvSCofW3emqEXjvSkW9MnaVEesfYN3zrwHXppVgDEFsGTyWBh73BKPHi5QHzNj1o4pZDv7UT7j9gm1eJUP3s",
  "key11": "45BzvTqYE9pJTakCy7AhVobbeGP4eFE1JoVbNyw7Ju7jQkquZZRsi2o4s5KKn8Wdzv2xWCuS64oCbBt5SfnGtQrX",
  "key12": "4mNJinaGuh7XviXCSJUUnM4AgVq68ue9xfaW2dsmJ7vgQ54T3hhrFrWTKrRoDB8JmYR7f2if3FdKrZKrX92v7wLG",
  "key13": "3rMqXfY8WwSDxXRKYUCaM86bw5yhWxBRvD7VTnvQFo5geow5MCTkZ1MBWndkmNJAUkVTo7m5sYZGChGdveekzyPz",
  "key14": "dfas26A5fhxUBomh3KjyFuUj8VxcpaXEU77gkbgEt5cmMktRSSw4soXtFu32W8FqnSoFtnZoQ65NG62kWuZEEMZ",
  "key15": "5xC6mdtYhyerPMj1CYaMEN4Y977vKjikyj9ypNmTy4iksoYUc5QRBM9hvMnrzdkpWBUURoF1tgoLCFwkBWXXVAYs",
  "key16": "5e1uZvui29xTRoU14zbQ9bQx2fQbDjBNeeHz5wPrivFcsrZowGmiD8vv41Bw47biKk7wg4V6JAteTji6T621BC3V",
  "key17": "2JEXkFr7s12YyXCCUs6WrMRGYf83q8cbqzf3shicQt1AXBGq3gcDChwf6FQurg1eQUX55XGPRpW7L2LhqpwaQ8rX",
  "key18": "4EREgH1FHEhSARMf2jYk6WFHFVGSZCMEsXGND8N7iz5BvvG64mTWkoq5XgKjFcYMxuee31nBA8izCFUFcWMMbLjh",
  "key19": "deot2oRQatU6vhev9Ged36eAPrAkpffyeRu2eCeHHBQRsPADUAXLMXY8oQrv85akeH3wd17u8MsbSzCQD9VzHSg",
  "key20": "i4JpzWq4foxZVMR278wSgGh5i4XyQgPA8sVtLUwoBMc9Rga23cMTGHGDGKcDmepWZ9dL9HDHyLG7Vs1MifTJjgE",
  "key21": "3CWjbZ55wDRKKC2bXuCP873j1qxu95AWZCXk1w6jFzYsVVjkCN4keq2q3hMuo3tvuTx4hd93UeDnyzHa32VvbaP3",
  "key22": "29G22p88S1QCe8QVaSqK8YwmiU2TK14tqV98PPq5RwktcxCCLfTRSdNdor9wB1WqqcQKPAzfGKsiSMZosdqgBBpW",
  "key23": "5hstYtXwkNoHnzWnC131puu1pikU9favKTqzYKxgt298w9WtugLFpq3TWAtZtNXX5sUUu7GAgWCUhou3TwUYwSqE",
  "key24": "4RrnjYsb3x564ot46dy6xbVMJdLs5KtdFQYbHTfmxpvTKtW31AYLsJrcBjMXq7CVegVSbu2jizjrSRkfMXnkqwKa",
  "key25": "5tga5bBN7iUdM7EVXfeBYbVggp67sCRHyoUNfQLNR7WmGLAjTXaVRkXXCX68L57QNRPQf8BbV3G1V9xkwsXyXghv",
  "key26": "5xWmUCxxnu8it1i7g3m6jqJFpWez76vtmPUy1Hu3Z4WHPJ71drP3vhubFuLxNeVRFNj2bBE3NctYtVn7hwzgWyK8",
  "key27": "2iofS2nuJXkni6A8FTPV97FtLfk7t1moyWCKepgyNCmU6EXbqDVHXiUxvVSaSsguBkRdEUfmUXxiZcuiQE4bMfoC",
  "key28": "4wQqCtrXAXX8UGPbLwDTSbrVLK8QEgNdXi2VkMMkvNdXTHjDZho7o8AwmG6g1YDAMvFpbdxfaQ3AaoMvQtd1kAPU",
  "key29": "4g12kyj39pcRTNFnnGSvu4omBUromqMwhHJBQzQnuBTdkUbjNooVvqULLRT7HVS66wLNQY3PMi7MjNMLXfo1Nph8",
  "key30": "3mNKk15tQo1qfE52inkoPgJKwp689bt7HCbmwa5WwZbrekKRxqkApULgaLeeCeobCLfPTF1bixeDh3orDnzdFum5",
  "key31": "5CGmYVEeVMDVVU3EDa1e2Mh4MxsgFj4aip1ByhZ4Apbs4F6wc9VnLn5EkXeKdqhCVtR1Ffi7NtERaJxrTfMwPqxS",
  "key32": "o9zhdd7ggJE6ByXpyDjFWnqvDZUGMUf6bv4fWRExwem3D9AzctrhUJRMBArn9yveCgxPsWUS32hCtCeMrsm427E",
  "key33": "63PR3vJyeVY1N33Uo9hD6xFirXMYvvhxEz1R26fDH27tpri3WDGu6w6YLD5gQDfqrNAf9ax7qf2CtYFF5vEbEk2U",
  "key34": "k6xEXLmrGLMiSK5hAd8e4ywG8Ec14G3VeK6A2hSgj88YiS92hGQtckU5wfjCLVG418xeSZAF17nndNq93qVcZMS",
  "key35": "3WhXUcQrP29858MMHfUYTCkN9t3w2LgqefhrV7Cmk4gSRcnbCah2XFP8Aw7K6E4CYCT1rhcFfXfGN756fzEYa4kA",
  "key36": "5FozGU6gQt3JSKLwD2c4NwzSgJdhWYyhh6MqGXhn2ACk8FuwrD9oQdPvFjCKMceebni4ukSKof13UTaprNURGJXu",
  "key37": "JNF1aBQDvcti4FDq7PG4vDaFNYCRpXDZXtL56pLoEpsVS2kvxBAvXpSAhvnYxMZWSxnUviCcJEyEsCKoVwtGdwo",
  "key38": "5W61DLm9t4DvM7kE6dEotDb2iHXHXfevyV1wjvyTLxSL293T1RbaYNEyxFkn212jhTSv7xikP7gQvUi9GtZk2veF",
  "key39": "27Y4TeC34RLTy9ShrpHDUYhJAvY5JyC4FeMZhdGhGLVZgTqMhyBCULb58cdH6cNHaawrSVFbpfGrbrMytXSmBneK"
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
