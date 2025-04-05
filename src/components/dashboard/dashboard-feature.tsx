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
    "4vpBeghUqrnFVufSKw73DAuk5JCPa2PKLK9eZeQmS26nZK3PiSA9QYe3FZ5vs5NzBqwmicYEMt7ReBwbhWJ35DUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jj4MCwuTEeYZVn6N4NHr2ctA2BPFCuEgW846r9ukrhpy1UT8t1x33jxgjy3EXcbBSkazf3L81og9jANuzk6TFuo",
  "key1": "KNMvFWewr9VEcUWsEbVGpzLDUixJ8Y9JGVBuTrc2AfQ6e2zfUMnLQaSr9hGEEpyZg9uiiMxjjt882wiU9iyvniB",
  "key2": "2o1D8zJw8FcMAkZGfNi3mWXwgVca2hu1Y3N5h4nk9bvgRbdpkRFH38yrFwnL98PWk6QtvCJPuSfVwd6RoaXfaQkH",
  "key3": "LUN7rtGLdPWRBwkoSn1yVBtJY8xtQ5nUTCfXyhmsNwFDWVwFbxknqt4YY2jYcnYSinJp1xMynqhpyr9d9RfoVr2",
  "key4": "5Wcmkdxybb5Gpyj5ihauSub7gqu9Lugs8NN2QEL6B5eLufuGJs2Yyc6Dtn8az3uHtL2udkZgSry789rVEKcq3T1M",
  "key5": "45PDs5x4fvKc5KiSHfCUBnF1d5VuHFm1fLP5mhEKnRDqhG1V1YGTNnN3eLc3anotGTLF5mu9vq2WJkzyMF3B8DEq",
  "key6": "5HRRgRmtz8MfHbe9m7grhmSMqBapzBxpPaFX54CVQ55pKdSdNW35ig1Td2eMGuhCZt2xA7osmQ1ch9q1nNxvFNRh",
  "key7": "5RVchCtyXho3YSRefE2CoHyvFNn55FjSP21GQ2RL9KoyvsrA1nrTUqu8XXn9b32F7FH7xpbcvViH4DAFhBfjFtoU",
  "key8": "AuY1gbCzuCQcMhR5SoJJ1Cu6pXmdx2VYinKu39s88dNk9PmVeaQN5Gzpnt26dH4FFHcWjUTosGB7D6krZPDrVY9",
  "key9": "25UGWb1bgJ57tcbjpo4JrquBc4xQm2N7PD1Lu6Rqe3FMhSqWce2nfmqfdF2BENfac2tbVHF1ZRTieHJv4vrvBSmh",
  "key10": "5oFrUFdBrV53ggwZe67wvGWW8LZSAqKGpEMRkMUk1STLv826qnvKd6wzWwKb6oMRGUNLmqjEgP1bF5i9JnzgNAPL",
  "key11": "USWACWSypNoADRmr26beoX1rhbL7YjHhivhq2W1VoQvXZm7RG6xWXVXgjCVUXjonWgmmqwmY76QR4vd2NgpPq7J",
  "key12": "3MwkXJmuZnnRMN7VXv3WZNWcKw9mjoifcskaPhtMUPWSiZeQV8uLGPZsdpuCUL2Dcpy5nraxT1LdLu7bbmkGLUJg",
  "key13": "3nDdr9zrxRZ3C5BkTbgQ2eCbex7khwUcsgEFDFz3aPVQAJatCGTLvZT1u8YpWh7D7nHrF1zy1S6HsyhtKgUQdgvi",
  "key14": "YdCAKBfpKkoKF1Cfq4NykdhwUqQMAaXmZZ4VJ4ncnbUZa6yYWmW2obU2s8C4mzFW1NV81qXXDcjStt4HdSUqeTJ",
  "key15": "4f6BUv4QgPVY4vjjjDva7UnZWbeqYGWTxtDgLNZTLR6CLAzEDUauKFv2sxTyXFusGeSyQEPV8pd8a7CArk3VtrGo",
  "key16": "aSShvkpr6opxspeGDtvpSFonrpWUCFpD3VFS2PPNo2XaZTsc4LnWyxqKkQ4FzgCxXuoe1DTHKZCxGGs6TzZDvsJ",
  "key17": "4JqKwZD6Vas8bKrnC2kiARD8iq13x9yJvFu3BDN3gU5hme7ecYr6C6zHZyi1zygVFba3PHnbF7NTJhSuevx8ntY5",
  "key18": "37JRsV7SigKLrXHjCTN9fHY6cDtLAoRmz5WWfmQ7V4FE2cNva9jQMsABmGBPkAD9qSaj8jcdS3ksuKyMhF2eq3ig",
  "key19": "2a7MZrsq6rwP8dvz9JENfnufzgzd3XSksQefPvFU9Tpe3nphF7mPFdmVSCnsWUfzE3EN6ZmcrqTS56s7QKBxCH3R",
  "key20": "3d5u9ym85SfMWzuzQtWuB4JgiEquQE8c9DnvFAgGtUC92LzqWdWzn4uXbKq7v2EThb5rbjhc7GRxRD2FdvLCmdBm",
  "key21": "3C5hfks8EVZFrnSZfBtBy6jgiNQr235iVLYcRZaTnm2QQjTRQRm7c7A3TzuUCCaqMnJXB2Acf6G9a8TrA4V2Rpzy",
  "key22": "22HxBGnN5b5nG5pcJ9sLhkZA9uKHAF4oVTiQnamYZDezNxbcpaqBt3t72Z4okkj4wqUJtrW72bgUAx8QSUNK8AYE",
  "key23": "3aGZD3vVNb6YsT6i8ddMkMJRsA1JwGZmcuspWrr4vS7h9HrCyqQkn9TaurZEm3tFLAyiTBK5gxWnPp7cSsAoPnV3",
  "key24": "63RvyZnJHL14JLfRJdKVFNN69JnA2nVy73AiCmgdzDkyrmpVtMB8FFT4rHvZpoD6AKmhrpF5Pp6Pn2AaXDbG22KG",
  "key25": "ax9NGxc4s4PPQkY2pFG2hgF1U1GbRvRq5TvNres8Q2p41LstR7wjGzGSrAfAVnq76E672Zb2Br6QoEiTq9sBRN9",
  "key26": "HFCXjspNgiaUmq1RQoDKBZakpcesRWXoUcwhpnZrzUL6SbZ144bot84gSrMpH77jvKvbphtfBYHDrchQokPAWRE",
  "key27": "3XnCBEzQPrp3xBWxT84ov5pa5DzvrKkKqMmh82fnvczSXr9KejeqUm3zZ9dy124dwUn2QTauxhdZDzEzk6fURDwh",
  "key28": "Zrz6boxFXV9bafEevsymeNbbPBxnS1SD77ii5DdVmCbKNpzM44YM7Zjd725S38RcGpQzjdMjpRWKasUktYs9KHf",
  "key29": "66nULU2zCVnfgfx3TSgPGtj5tjWMmPzhTxv6pqyxddC3y2eAXLZMXEqdQmntoctjhQ7m7wNb2fgt6RWx4CmimFNu",
  "key30": "2mCrU9jMGbnBfJmN9ZGKyMcfBNhXpSHdm8W32e3t4LV3mp6U3YwfcS3p2YJXTrN49WBNzDFAP3uKubtmioNSD5PD",
  "key31": "YaMJS9ZKQy8Zwy5ncubnzJGohdCQ5tZoet9WbxUpwBdA7datH88TLaoYnSgJ7H2NuLeKD4YcNVe7fWPtn42Tu8W",
  "key32": "2RN8syZF4knAjMy4wFbZJYwkGhi1yPBAY9n62EJETjGrGqsRq4juzSibim2pPtZ9Yr3sxcvUyKqJMCQ4W87Lrou3",
  "key33": "33A5xGRy7xRkXVt3na7nxhrtUU3aQHNvxqRQQYAcaZbZyAi4muFhnVqik9Sd5swbMFwJfbTsMyx7aCiufuy7wvHL",
  "key34": "3nRVrsNi6z3T5aq1UqsnBbJzBaAo54ToVHsdKCuZMTetHEyCpJatzLMkmdhWMJ4YfQ79gmuADucJU7ixbWKc1Ang",
  "key35": "4HMVqh4dJW53SzDBuKhHfN4Jc2vYgHPc6a8UULqmBjfVv7fEXXhm9Jm7JVZXWkZXofCDJ9MqW3sk17nGwYBNFkG3",
  "key36": "2DLefQ8RXVgDZbSWTzQCYrVukRGz1rpuk1sKV3iqMt15rG51RhVVPMBvtgEVvr8Bk8evThGYXTpUK1yXeGpRXZUN",
  "key37": "rXEec8SXnftHpAeotHXKv1RfokAuurQXzX1qMGrVNyC78QEwPry1DaTQyPKqa1gxEcAwB2EPZancYMP4qGJWLBt",
  "key38": "4rA6TU7GLUZTHutLT2NVGuXPmdwbaGTnYUKWeSAejgB5u39yHLnPnha5fpVQDSnnsT23vJNaPcUua268vsaLryvt"
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
