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
    "2oH5UzkBZyJJtb6dVMSkdxdXFBvbtQW5kwAmJPGPQtKnP2zgQ3akaBVkGQbGWoNRq2sz3e5nAGpuPwYvKYFGyBjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4us6ZM6qkmawFDeABrRTeHq4QmdXMPD7vQzxHArYUeUnwZ6cHPt58Jf945zHBtzdRHCzGXjQagg5vBJY5AmKk448",
  "key1": "55KDxYe2qa8beJ42jrK1J39WpLCad4fizg644DcWHqWwyYXwMKQ4jsN5WJsZoxnGbUA3oPGFawxijhAskpCgFTFV",
  "key2": "eFxpiuU52vJp7Z1QgkyrgJkFmKte8wQx78nwnFrcNPhtFQrTfhy4b6uV3UWN5NWoeEvqAJoAG5DXMQD6fNXDfbZ",
  "key3": "26NMeuVRfwCizLWG1RpqoHEbLUqZ7rYMW2KxPceVFAqAPsoCnZ4PdUd3vTvC2fqLb4qNBMdW3dNYrPUhgQiDTVRK",
  "key4": "58c7RDYnc7TJtXP6TjYCzz5etFi2BRBBM25NtzZgKmkG2VSo9rQ4ggYoHAHy9izXpdDVs6LSWBHhZF1YvdmsCrwd",
  "key5": "4SmFX1Rsx3b1PMJxqQLpS2SqkHU852dFwNTMhqzXYvk1YkFkMiWyr9aa7rg2ZemNPnZdMofrskQY32JpnShBwdGM",
  "key6": "5CYNCL2fczjSrUTsU3ZyLHGpDV3ak5FqUaBTpABpe9LnhDL9Y8hVXKJtFCrxkFrBcHHe63MTWYjwncghT9dSwm2N",
  "key7": "44quD1coQb88LZnYGnEYdgMD961YSHG8TXgNtcgpiocdeN1G6QZBxYA6UzmHaRHCMkAxAr2r6uMiexnBifRPrRhS",
  "key8": "3jkd1KaM6YQqJWziNmqT34rZtRs9fpg4RNXkgRo3p5bsqvwGLGijsejfawXfE6W7aE2aqTRKavzK3yqbTZVo3KMq",
  "key9": "4ep6F2EcoFGm6yBRgw22DAzrgmiQ433F4AwgezLnLXLbY4uZyd8jp3yam8NspGACZNdP8BxHWzMwfKMiHmi6v6f5",
  "key10": "53Be9zdpKpdzXmTZf2gzC18HpeDfbZh6BqWmZKTUpfFqCmaTw3o8EdTf1tpQie6HLa6kE4EYsYtD7L7poUUFfBXS",
  "key11": "5whuhqV2AHCS14eBZiFnxheHAuvWuuVgPFbq4pSTZH8qvGEptk16seL1WrgS3meGdPBnDsURfXeF3LxSQdFZxnVT",
  "key12": "ip3TxvGfiuC57vB4oUkMSk6uSJaVHUNjJDvLS2CjcDzyJz3UPwFXpJwCTfmNvG6BpJDdbE4aBqX57wwSe5L57Pu",
  "key13": "5TeFinAkW383w8LRnUkSZENWFwecH8P2sUpFgXMz2QEq7WPxX9bH9wuzhbHohdkf1Hkt2Dcdpo6tYUNF2EWSptjz",
  "key14": "YjNhb7XHSXJm53AJ1LNTdt6pi57JQMhRLdadAjJHnih9odXoGhdYXbawRrxe8DShNCkwCRYxAdPbDZVEbwjSqed",
  "key15": "4nuUAnxwMfQFjX3ccAH4TFtMCZoRtbVGYUsfznGLKDBi3LpffuTFUxwncfw5enCXPaH9mm2F3wg6RtrjSJEMHt3t",
  "key16": "4XYP4UC29m39o3pSCtwRfj8imcamAJEy5K8bgczGiYfGpcmuu7njysJ552VcBfozHCkG88dfG9pSj1d84DH7phfp",
  "key17": "GCV964YuMi5iDCkjDuiBjsSFjTmSKrKtjMGZws2wyDjAkaj7Hxz1Bu95oiBPwPbrAjhvj6LJyWorofWuHtoFjhH",
  "key18": "NH6519QU63ZifBv9oLPVvqBNhD569wvLAikqDrVDPSKQkVigutJrcbksxYQhwf4RGewgEWZAdRgUk9kXKXXBQqE",
  "key19": "5SPXsjL63UvcTK3cycmi8W4gKpQ8oZp26MzPKPqs8XFj7RxPTkhUTbV72E4XQXgiV5dBbGCXeepruMhHwyLkgAqm",
  "key20": "3tZB54Jc2nqgRzAJPJvdwjVsNL1ZV7Lsv1nJ463DNTJGCHkVVoEvUeehRNErCNJXgJX9eSvmKs7Bcr2NAEEdpGGQ",
  "key21": "ABQF7iusm8w7Cqm6r7dCSoAGVhi3Ci4CSbvKTTfa5urRLupQoxkDTw8YFUpg7wc6gwY7hE3GGzoRUtm3AkAzp4m",
  "key22": "2iQ1QLK9QbkyMAct7YQGNNL2mU43TRRHWp18MoG31GymUEnQNpSLt2vd6AgZMhLmfp8sgFtrRWVNsnBcnaZ6EHyw",
  "key23": "4xqxsbMZAgEu2UAvp48zPQK32rBioLYbhRKxXoUXipwC55d81GubL7LSfRjmMrGKAqjRRCcKWLy5uUMkm4MKyX5N",
  "key24": "4ZVmPi9yoewEsb4nkePsafRF8PyyrpmsKLBm8mWwf4Yo9XcEbjeCgyhSRpcmxffgdAtecoYPXQKg5LwjL7ZyqaDU",
  "key25": "4yoK26ZLiGpQFs5iacbCewK2nwZ7V6hV8JSkj6uHhM4xYBJHZCUiXWBv8d1fq2XjFTSEjA4WLBDv9PhdyHpnHsLD"
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
