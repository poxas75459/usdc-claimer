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
    "TKr7nSnk6Q11tP6baMf4wvF1yWpgUU2LcwZrWKpYNgeuAkKZMorfeMTpgYyXW1CppLHKcTgoHJPof9eHvbpnH8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ACNDy3YZFYSJhTcGJrNh2j1b65JyKEjG2V5JB8gNABPXGfnYeMSB42EECheRXqqvJawYivtXaEBnQfUx2tFaRmp",
  "key1": "HjcuLVdUHV6BVCryvmrCuNn7PJXB4saW42FCVEEzSBtqyQg2jsTd8yGMM5ky3a7kG63X16yUks15Tfbcihk5oCT",
  "key2": "4sueHVKX8djw3wV52RhG965pkw9ii4Q7RSMucDpa4LhVc64WQUN8gSPAZVfgpxrYQjWoQPM2kAuHwS3TXyxGQDJJ",
  "key3": "2VH8cypnJZjTcWUdL7BVTz3xptDRMkMnvf99zVaPkTSbmu5ZDrjwKVoh1CmMw1tqNFnRDSTrrqAXX6jpQkiHTZnL",
  "key4": "5yQt6orbT9H9SaA4BySZ3orjYTQN3k1VykaoHWjTYaRLFpjZgVAfydeooCH4dEURSSLU21hMabJmDE12JZx4NVm3",
  "key5": "62Ra8V8f35Rf7ogNMtAoJxuTEfM6F4AE4rmvS3S1yMkEaNmG1Hz1QVZrJX1HstLsNbxYWNyBDpaaGzX4zoXWDDAk",
  "key6": "v8GvaZiEV4NDQRdiS4YDkMyfdvYb7XvY1hdzkaBXLgREpvVKGziBTUrUhneukRCUmk2y6sjWNhKD5YLpGKNVYFa",
  "key7": "4bCCsuK6Dcfvje7Au3BftkSC2zK6FutrR1XUsM8Qaw7KkQEEyqEdHx4pFbAsp8cJXzYZPVJhmKx15veKMn1PWJiw",
  "key8": "2Uw1mMSPCeyuwH4RyxnytiSg7bRQcTUSfmz3kaGHiSrN8ecxvQtxA5pgDqXqWvtSBmThqCKqdbabEY3FQnioJfns",
  "key9": "3wWwBd9VsFuitSTUggRRy4Htv7JkGWTxikA3Yp7hmewDeeGt2pdq84wCvubs5jdXetqnsNAMXCmyGLLNvtDTvbdy",
  "key10": "4Wv6rSFydKYSpCX35vdX4KBgww5gFmAXUfD4WHyWKuP1fjcvxwsuywswWkYcQtgN2dgp215Xq2N2iakWGqQksY26",
  "key11": "5N1DEXLmqduWmc1Ei93zmdpMGaV6GPGmE2xX6oRMoEZZHasgVEnYizv7S74uLc3oGmevTYE3XneLJ46QMvKhXbxx",
  "key12": "2WnFU8YXACvMa3oQQtZZMrpp824JYAN5eqnixbha8ptwN5asBwvKNTTK23Mn4ooEiPuH4jByFFr3WXH4ZhceFGrh",
  "key13": "3Xs298fxaFNk6oquG6FgpoSrPd9iGP65vLyD475ixQwHA1tECcLSpgaGEuiXEcnUAfFDBjUTWpu12nCSsTBnJQy9",
  "key14": "2nSnwZXybYP4KoWFZ7ysZkEPj6D2Ld8g2kdcZZxDDsvyAVDYmYbqDhf8qe3GQiWK5kS3rFkyxQYTqLhJkRtSPLie",
  "key15": "5Pyts7Q6prq2oFFhhM13FpbQyr8p8QyemX8jNWwsT7oK9dmPchJyFYDgXbFMa2LvmHzAkLVLFrCCjVBcxLmimG6f",
  "key16": "2AL4mqa16bgTevWz6fcsRuY6ejdM2ThdZ6myhWgpxmJeRz2aLKZ12QhaTXmQHXGWi2GPx5UByeRVCB5iNgMuY7d2",
  "key17": "2C22soSdGBXjt8jKBJsZeUn4NNVnuZMeHxLeJ7HmaYgJD6mbYZXjw8ZnwdNH55o2aAavDvhGnCw3TsGJqGSy8Usn",
  "key18": "FyXyaAqPobFCdRZhbvGEPrssF3eHahSJvCQCjAirVJ3X8tiR4UfA49iFmo4vkF9HKNYF3Mq7PKADqaDkJzWM8rr",
  "key19": "2GeKERBNc8Ca24JHAhoQNsxZ1uNzJaNGh8Y25kFbjuPHwxzQRafGYAC3X3ohBtBMBoXPLSFk4n2MFaLrtpwQELBF",
  "key20": "2FEyb6D8kW8f6BB2cBCWUf9WDduPcfwjYbVmDvhUSczxuQFj58Q71cMHz75qAqwCEcXDLXzTzvq1uPoFkKsZtzsQ",
  "key21": "4ts1uJz9rygZQbfby1ieoCsn8UDQuprnS1FrJSkdTeiRVns6ydembeHmEzjoQB2t1YTNiCwhrqBG1GCaa3kaB6m8",
  "key22": "5zTyXskpb7ADAv3mqf38GQi7uy6MRxiU1Wy68e6dTUfS3HS1YjsTFhHDgQry39owx5yTCLbszvHSRprrFVh7vgyC",
  "key23": "4LVJYf76o9njMjZg8WWcBq52HuUK5AyoWNq9jo2gb6NgdMgaiP8RUCLFD4TZmtUdmFaz9xqV7LmBeYQqBhWhp2FD",
  "key24": "58VkdYqjfKDBD6ehG6ukFQ8py9YNS64PAr8PmQETrcGVNE4kwSFFGbo3VeQ2xae2x6u8QtUFzSnvg9QMkW6KewPa",
  "key25": "3YuML1FGThTch5YQs9QPfU1WzEkgu5SiBGFTvvbardWmj2Eps9CfPDGEokj3a6FN89eufT5u2i4z7UmFzbuejXH6",
  "key26": "Fmt6jyREi6RBJJ9UMfK6eXxVmEoCXo17XLJn9zwzUCvUWuF2kbzJ2ioBCRbn3So2D5Trfcs4uuucBdEdY2aqbbK",
  "key27": "58TjBm1CQBkZd3LsiV3hvYCaLbJkqPw6LibVQangGBR3PPjznfxEM1nqAuW9EhCaeYrDJCjWRNc3D5Z4qPZvrtrx",
  "key28": "5SPps21yfJ5Ueu3KE8h7rPfUdXpTYzQUuPhS2txRCwmb2yrsinBvYTaXw643SngK67xmW9CuKesJ59tJD2syJnUr",
  "key29": "3WiK2otDFBw6mesLWma6FgDJJ7K29DmbyXdZvEohb35ghEbhWVpviSDwKtVYpp7DGNssFVoQiAY5CUyauuAvXvHr",
  "key30": "5Pa3UMWkriPGabwZcZks7vhywBH27M6Q3F5rBhHTqmVJjm6GnXAoRhNKBkg7s7wVN7dqwC1WRCTe678PGZaZC4Eb",
  "key31": "5sfoLS9XThg179Adeikdme2SBJkyyfNXUpzwqAEuqnKKQivQzsKxHxfBYtbNiLFeqakrBoqA7Vj8hbU1bZtPBA38",
  "key32": "4UZof9ECe3Q6N5i7ckXwvuMjbicrERjT6ofZKWGnRra6hVBtZ8n31R67uHUdqErP92NRQM343M8e6dmuBtv2Hn8i",
  "key33": "3ZkJUof8FH5PR3uoLN2R2fpQ45YdpiRgXHyYPUNSmQvcRf6b6VoZAgmkT6417f4f9S4qgrqrXTzkJfB5CSLQ33zi",
  "key34": "5hzefo7J33bDgLx9Tv2chPtTUhCPfuE6VdvXRsVSaxQyW8sEHtUMtHeen1pz4MkFTTEmnmyMJfMTBEjuhNEJ5paF",
  "key35": "4yDyRti3Za9ta2uUddDGMzMtaRQz4Usag53of8DSBCRMne3Ct9uVhbqN96REQbHXcm7UQRMyha8aRuXUjHi9C5xz",
  "key36": "4ZwtV3fZD5fAWfqtU2R6v6FFSDEoMNNt5rbgWKCafmVdrcWo63Zdr33crqkD4PvN2uVsT85oKzvNu5Wuw7nvu7RH",
  "key37": "2BE5cm3yoNrsc2kyXTQsXCW5E7kefZiV6MKndqkPfMES24TNSipocp8rsxiv71DRahzFbi96XUvNi1FW1Zp5uV4g",
  "key38": "33jJqPi3fYC8Jy3m3JyY4ZSPzUEbxGE2jAhaFFV1bSWW6QAvEeZtAPH59zpsWiJJpDE7cxC6gfo1uwyE3uHhTRJ1",
  "key39": "9EqGQYak9AxxSTiFRNabKavGjysjdomFRDJtN6XqqHFSmFxiQeZQPiWnooCDDW849WgHTB3nvdwu347AWzAcamW",
  "key40": "5475Nd9PwLhhEDS9ue1SPJXeKQHd5gHpiGFBwJj2pwtv3ZpT4qhAGUa4tgmEHMHvfGZjWpgc3toNodeFaXWg8m9f",
  "key41": "4RzN5smzDecJZHuGWzgT1g3jnRYpjVEU6u1DSSjgwrC2siEzmwmzHg11KqGQbtShZdv7CXJNGuDN1pZ2NUAJxHf1",
  "key42": "65umffzrbkWeABZoCEhCLXLBFCjoNzdcvv1MJfcytmC3AGBBoXS4ck1dDzvgD8S11hagrbsqBWBd9j7A9sXSWGyT"
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
