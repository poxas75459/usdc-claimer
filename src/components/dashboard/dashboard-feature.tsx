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
    "4EmQA2jR5zJGHuHGkDJv84sRhhCnstEw99FdpW2uSGcyB67WCV42wvoXXMLwdzXuw229DKx1U4GdSeDV6kGuZWfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Q49VVLwFCPmvcCPBByRPyMrfnRgwCVgXBRzgTRUNqbHz49wkzq4aH2UzXgthvEvkyfy7uvxCUrUpkPPbaGyY2U",
  "key1": "24JgTzGZ5PqCT82WgyvoGbbUxe1xpik4AFwV62b39t5VWCUgE8GHpmmF3d7Q1qqyUfTUDin8W92HxYLjLgXetWpt",
  "key2": "LduPc8EkQyDQX2sXc6qFUw9vGbHpppZRyibiYWu1FPFAnkPhVxH16zZXuvrCEUxFSwcVAmCaXXUyi4bLEGMLWcb",
  "key3": "3DcGkK68iZJ5qk3f7AXdUkxz6CG5LkGHwwcM5HorPmXxo93R1MzLSVY4kZrotaf3MEqVw59mq1PuqCvX9TmhkoK4",
  "key4": "5fYQxhLL2tpdprFbYch94iSrbDAKKvg6XfoSR9kngR9nnqbvmd6D9xLsGG8vGqGKMP2MSmdDJMQ1TBpro23hMq9x",
  "key5": "4G5wyZk2keWagWYY2CMSsAmpt9wLnMdy14pSU3fpAW3rvauw1bLLqbAuscg7Mre3NUVURzg1vc2as5keQPmHcHhR",
  "key6": "3Hk1PWhxHHXnZN2QViaZ9oS3rbafwxZHBXfH8qdd1YczF2YSCRhY7cCtjdnZRQ4JpHRrmosygK5Fh8Q8XNbYZrR4",
  "key7": "4muEGq3uQx2abre9GUTVA4eE1HpUT7um6ym8tjJ3u15r3xmPQE942MNeTPsjE61QN9cnKvHcp386DvAxqnZTcWpk",
  "key8": "fA2k82CQtcL8tRLBoSxnsVxwfaHq8vLDC8qU1KWSrZK5AfMDRjv3bFuNBuuiyXSPf4wAs9WktKSRS26EbpdCfA5",
  "key9": "5Zff8QZ1UDfH7TMcQeGTDmBQUnRhUUtSbx8kcTp1yKPYi6qoHiPhRmNWnYgCcoLDHHWF4gRhQh2Lu55zREEHBES2",
  "key10": "3LqEtnr3zXFbwsFVJrnKCD5NmesoaZwKmvVhWgXSKREXNaUEETFLki8DZZkwKU1SeQe6bG8HNAvZwS8T9PmkXNH8",
  "key11": "3gSSnS5hPB1JukTSGpXZP5SxQ9WMfYr3MveR2M3bgyQVhvGgUCbFdyC6ahH5MfpM532uLrRq19zAGFf8XGgopmzw",
  "key12": "4D2erhxms94tJZmMyRddb8NXvoVji4KKBAsucCfqEJs9hcTzxWqMG84KFypuWypdEDrBgbHukMMAX9Qm8t3b9X1S",
  "key13": "4oXj94cS29xdki1gf9WVUHeKwopVNif4RU1P3pwCbX8gXYVodRU7vGCLVWqvbS7s7nbDj9JxWmXYDLMoCUeXUsZv",
  "key14": "3EePyJ5cZdhvAFXgAtFNZ6y6bAThise4GDJC7RkB1vnU6GLN6gYAjWbg8S1X5ur9jQuQWS9Uga4ysdumaD69ymXD",
  "key15": "3F7Q3AhaRzzTPzu8jYsFvDTSZhUcoQibBe1x4ACtNvci7vA7CpN8czXnMHN3p8RBGSdCArPUsRd9458Q1zgJfX6S",
  "key16": "5a6YXYz7hsGQXFxK1pKLetXivJrwe9pXDKBajpJm13Gy3P8C51hRHbmFVWc4euF9VjZHrqxCUSDkq6oAexfdqxYi",
  "key17": "4Uo5xP8C63UNzp4aG2jUvK9cPi3LPMiKzjvenkPmDwWcqRLCtnBLSomdzF7CQYY9n1hexujGgMrfYcsLMp7HPNAz",
  "key18": "4WKwEiNNB4sx54WwQM5eNj8DzpQK1UvxqVzGHnEzxYx8GDDAKah5n7hyo3yozFUGkJDF3Hg2s7T7XXHcFPRiFRMW",
  "key19": "4dQgM2P4vnZLcwve9EgyoMgbWYxuiNTBGN5QEFBtssPcoDs9hYvSPyTP1vYspjmZxG3n1sxzd44R1YegHdWAANwo",
  "key20": "4PZohcHEgUzc87NQTxo5XFAfXgctNXgDjxQtwMWQg3wUmbZgnNFRs85LWBC8v4SSMPLuhXAHks1jJPraoNpuofYx",
  "key21": "4wxZz5MtEHNPJBLhSzvUVSCU6jthtTH6rPJsaGHXShYeDNSbQocwX2NAqr68puBXtFop6wE4bzqWkaqRigRNWpqL",
  "key22": "4uYGL8W4qS8KPXpv1nPptjXmmcK4B5eDV76AovmpP8doR6CJhxdghEq4Scegs653KKTuzFeiojCGtsubom6oqW2b",
  "key23": "3edgjkFjHCPQrRJ7HCCpqT2rxmsDYih9XKyRmmZvkMYWz5rB5mpbG47iUATMAQ25w13pDYtJ9qGLXDG5Pp8DWRKb",
  "key24": "4bqU7AqAwPyYbjLjYSmvQtKx4SNHUnGpEEwiyte1q8sDpf5QyU9y86rQh2jQ6pYC3UgE7S3ubGcbpvMHy9fxauXo",
  "key25": "3aMHhk71wqadDGsQC19RDHhiKNKwHCefABVBM5HFjfu5PjxD3wGEqiSUid7CdyQctWGUMuo5ZjhW1D7PvRK4cw3f",
  "key26": "hsfYpxZVLf3YTT41gEzLXQngLPF9crCYpnMZYANLTeWCzh1btXiESWQqhCeF9YRokNTV6h83bWKgvrb7Rwbj6eU",
  "key27": "65JENFFnVQn1Sx3Vf9cWE8StUxMKZ3LQRGDDGLN8BkBh5hcfwXg9xWoDxnVmkBXxxQj434kz1CH57t5uQqED1hAm",
  "key28": "5iedr9t2t4PdA1z98ggXMqxcCznSpob1hMzf2cHRNfqFiPF7TDUfzSihJNLMDUvoRnsjA8GSDLrxKzFaWgcZhBFr",
  "key29": "fzfKfe5z5ijyga1RsVtfupBtfZgqUKkYkdYfxp5jndp5Drxjh8KNLVo1ZTicQAbaYt7DUmjZQiaEgMRgqiTXpNK",
  "key30": "3sJmu1ydtQXezTh21poxmE2CNFQ98C77KXqkYef9L7EKgXyt4mjSUnfv78cEPjWJtL79oR7sepMGEeUNopBnTiVQ",
  "key31": "5WuX3YEwhWBiX29zJ8YnLapoJb2gbvSndcsNymrV6H812iZKxZFcDfwrhsW2ABdmQzCkSWmuucW8ViK2R6MzCZpN"
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
