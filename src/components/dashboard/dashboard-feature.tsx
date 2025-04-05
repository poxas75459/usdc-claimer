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
    "3wVD8GqMtL72tMs3VhhMWccuQLn5H5LNkbfKyBjsSKurC3ob1EJC8CdASzJtXYokU3tkFTXF4Z27e5oJNrM94F9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yrixxtaqEMx47bwdT6dSS4J2fdbQrBenT6fHkAuuM1i3dWxYrcWLgPjbgF1UBKir5zdEp4SYZ2dDjgy7Y8EE22E",
  "key1": "27pQqPrMdyVD1tj9k7i21HqZC4HbPjRKUEBfTQRS7Vt9dG1Ea8RhdPrhZSr6RrG4tM27uMmvUuw12tNmygJfmMga",
  "key2": "4ssMbQcNhQPzW2y6ZPrf6qGaRaD6UqfRXuk9W4wdNfMcVV285Tug1FjTSFTeyQ4hvtU2CfdpAqyrbktENvkfytYR",
  "key3": "3a3jP3tdpANjrvDC75FcXxjs25D2NwsTs16vjqhhCQaZEAQAJPomxCSELq7kwwrDfBS7cphZQQfnGQFB92ymgZuw",
  "key4": "2D2n3QpHTso6qUpRGudxRdBnzLTGDLkaZhZhYvXJg8ZCbG48ddeYbgpvvYs4zkg8XRnWR6jEsks4PcfoRez6FUFo",
  "key5": "52Zm7tSKDki7UkEUWtLqLGEmKKDHvEDsCmY52ginRzzGrNVeoQ4aqyp8N3po5XUvk2NDiE8JWJg4KgLXWZN71KyS",
  "key6": "99HJMs9CJiDrUJF8M1t1rtZBP35YSF4amPdemLYfnzZZiTCHKdAfFWVqQTTbJqTB2rL1UtHfxQC4XELSvPxESKB",
  "key7": "46rvedFD1d99kEUoqqJfhq6vbK5VnGicRutxZ7HYPy4z7Mv7BGyLw7isxkRe8XLye4KpMJndgjU7fUwzaiZGvFV2",
  "key8": "5HiFvLzEuxysR7WZdyt8tBbpcskBC7XypccmG8f5Qu58mP5ZC4myuM41VQ2DQeBriKz2gDC9ytc3Fs8qsjdngZNc",
  "key9": "4Mh6mqDppd8yvr6uSXTq5PRirJEV4897U56wN5Nx3DWCqjqioehQFoYvJYjrimzpwTyjDw75u17yPCAC64rry2Ui",
  "key10": "55NMpCjzBYxSbtk7Nxxg25dSAwqePKzuLopRq9erb5yTTvdjWzM5DhDfFf1nUNJS1bmNQZ3PeQGdV1KbPmSVgvs4",
  "key11": "4H2aCdahVUFxbgxnj3YYwLCm8WTNHefneFhVf3Z3AQ2PoKCHYAzikBWj1TReVhUU3zoyRE9SkSjMih74vKqEFNwW",
  "key12": "d92gNNsVWs4BpnmcERvzznwYQWxWyiAa86LrX524TcPQyeLgziUaKvAibHrNaRQQWn9eMGMhmGc3N1379hQA9Pv",
  "key13": "3RxvZozWdkmHW2D9VZpYi2oBJrzxwK2VfY1xSntKiaVwdmKWSrUqtArkNEGz5MA8seoRU3n2MHjXhWiPeipA8gJG",
  "key14": "3Uys5dKUoxSvTuFyo5egfuVXho5Xddk7b9dyStbFpsDpBSUgtKTPKUeM7AEQyLMQCWvUxvgWR4L5iKjpqDHXTnCM",
  "key15": "hYTA51RS1TeooEkgouJSiBmeQWKQNyddfBSSToruLFmcs1idos8j4jkLJMiCGFanjMPpwp2UEewuwiKdN4ALcfq",
  "key16": "2RH17VQY14TWvCA8CbNnTzzV3JzkDDaEuEnS888e4aAmoSWT9mQsoXCxtRsGvrrAJtT2J4A1xaimpqTdqNKTFnev",
  "key17": "5juNx61Wz5iRRFTyA4D2QsBeBcLDvd9KaNYriNty97TQSrF8FsNAYi4VpXLPopXEEHKiy1atBFpHasikdPSCnLwz",
  "key18": "93mFghptxDCzkc1hNSAQCVvnL7Bsu44Mgb2Yq9cDLFEZumDeWd1vTDoKGNMoSrXnaXmGtFV32GWkfKcQwCQwNwA",
  "key19": "3Zv262g87AzTvifazipavibkujAfM7GvWjKBdhdgPW8SiCZ8obsBzC9rATp1pQNwbJiiK6g7xJC7hPGGuWMHpKGq",
  "key20": "Y9FyYJGFQ3EjHW7o6vjyhCi9iZQNFaCUsu6C21Rq3FFCP14UrzeaEe96pFVX8D6SopWkiAAQvWg1hqbezDYGHCo",
  "key21": "2F8ZJMmcCnj5axBGLknQDMJJJGXyKfGm4se8L9CozFTzU37yc7C5FGSg5cNh1hcwNvfSYqyfv8tE1FdxQNkphU1m",
  "key22": "3d1e6t8t4D8gK7SCiEqtvJ3y1bgHDe44oHSAXPCqC7BUi9E7jhcZ92zCkh5X8xXR3cLp6Vh2iBfAKi1HsNV7y4J6",
  "key23": "3oiV298AH9tNs48iyZKTHv7ht7VWiTaEqRSgsm9he3zsmKAGmGKyuyjtHTts69ZAzLCAAhq5RFrfeiMx8at2ZiRd",
  "key24": "5zHWZ8PwxotxvGJiMEjtrbrpXG81t5K8cvavHH5amUZAaSB1dn47BnG7TyqLXP4w9QjFy6kZCfnFatJcu9YCqTK1",
  "key25": "5Bjf4nC1x1oMRhETPHA7Pk7dzdEZFV1XHHbXbG7CdM1RyjRjuWoaQkJ7eegd6gMwe4EbpGnVJtrwMWFdJ8u7DkVj",
  "key26": "4RNKUBTGtSjZxVgkQteNb6wUD9o6eqcPHzeRPEXx18cpKdD128yNhwbn4c5gekMVWfFbG3sGssvKE8vHn7YF5TDE",
  "key27": "2dCQppTmyPBM1DrHGqV4gAckpGPKKXNRYLm3keaCNmEUuiyQjEf7vmTEdF4m8g67pnEjfkV8D5G3E87Xrv5KrLFG",
  "key28": "9iVQx7ZXDt71p5d9WFfhLfymYGeoPWDMndESVNhUMhM8xEumYWRovACH1Cx6aYyvrV3gj1rRN7bQVBnNdfXJqdX",
  "key29": "3K3DzxLzTzpGQL1Amf7yE4DVyDSLZhtT2cvNBVDSbm52DB6ZX5TXhG9iXupNFcsLKQ14fVeQvoiQdcfzashRqAtC",
  "key30": "ZsyTNa7wFuR2jXvCw7WgtUwSXgifZgwKSFFYkYC5EWgyxgZnyKkJjh3jcZY3igZx9t6E48YJjGqjaQVj1oLvY3J",
  "key31": "eXb7GqjiLHUnmuGJGMcqSAoHeJGvvmhec9iGV4ZoU3V3TRy99myeSXgkcC4tKzaw87QR39RXK6xcujEXAoEif9M",
  "key32": "2BbTQhSMFrmWBbiBDx5BPujiPqtDcfrBm4SGEHU5MoSchEmUm8npjf8Jpn75YhVd6EFUhvBYQWkFMSSFYWVUysXB",
  "key33": "4DRGyfqKfNcrAaXHtzdRcFfMwYWLXhA9aDeyrJShJvK8QKaDAb61Xf2FWKqKWzTpdKrA5wWg9b3qxRcvfTbwC1u7",
  "key34": "4genokX3ZdRbkTi7mKGemDMj8M2dqy1NET6SVa1PFAJFUto4gYW1NN5g86umiLVvRL6vLywBc1BMhEt7Upu3FitN",
  "key35": "2x8L8w9bXGbphwtNhi7Z667VBghBgBBPAeCjXH18atEPnTSXzVg87SRgExtD8kopqoxVxigakac6JMCgk9vJS21J",
  "key36": "Ko7fEuCxKskC2jB7L1JX2eySxuX2qcrHVDuK4VV9epFHnzvdQ4Bn5XS84TSDHGmKSFZ8xeJNYHigqv8Apc6CcxS",
  "key37": "4GgPmScyeAa6Tz324rJdmCiCMeh9pfZqvpKKi4NQYxvtwMRArWsvZhA6THQGKXnkhudGNNM8CPZrPTSkWLV6BRgc",
  "key38": "2ayjK4zL2hDdNLyXcsRR75m7Nd6rvg3AcH8nST8mekkFDG29JVhYZMuQimpe8aPL4MXM2oS2yEVej2xPX4woRJU7",
  "key39": "3YjXxpntvWLUGQDxtn2do6wjMP2HBZzCzW6Wdft8qxHnHPTgtTApHSWF65pfvujNWj59tpm5hV5cnVn4zVPYFagT",
  "key40": "3ZNvbXiCh87M3HxydMXskBL9thMhPhMNrgmfWSEqpgs5giQrVoqoGyf2T2nrr7PHti1oEzWi3t57szR67S8WLnb",
  "key41": "3bo6d18Zf5Qx7Yg4HL4iB9fDNJ3potR1PEL68VSoezcMwN7NiHbJjPsNz7rfwFTp4DEnQrcG7ChwGmqmgVTnCei1",
  "key42": "4yxn3GE3BzqZ4MUMmuszD6caadEdbRSidEZQako2fm5Bkd2E6tNKZucxqT1FQ6V6fZ9RagZFeshq4P2w4Kym3Cj",
  "key43": "5SCzKAJ2sC6wPAHSfomwgoBfRTamP9aDpwmnr6qByrA6DJm2ub92jt54z5Kp3m6gxk5SUHbGkGbkU6j2BkQyhPqT"
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
