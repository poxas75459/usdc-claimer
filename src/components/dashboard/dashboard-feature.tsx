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
    "4FrRufddDjB4KtnENJ1hYNCdG1aaAduGNUSaWRYPKm744GLw4fAqhGMDPy9rUmm7ZPME1mt7tHRSp88R9FriZrvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hr5sG4bVxF3HeFwp6fhvZmbTZn3ZR61uzQyrkHHz9ZbJ9goMC2bokxBu3r9ubEvoBVwskNV6TQi6CCqAeipjnLn",
  "key1": "4K6JC8zEEEy3C71TTXsBtENddsSV132PHicbJyL6QAnooAvi1EPBnzkbCudZpzPX2zLgvPwiPELueUF2WQtzV6TM",
  "key2": "57MyTZ5xbQ7Wpf2EeZBKqxKPHjc5HihSfCfKTQx73xoSRqkr7XbNLhNH2UZebzotJSUdLgQxktCGG8kDR1ZTFpT4",
  "key3": "5tULZRxry8AGsg6Ca4BTqNDtPjXRo1MeNYWXkqFVnVDAQc3Cb8p2575cJKkpzpQUdzZTfgvrTZoD4cSjKKD72Lsq",
  "key4": "3yF3RCUdQ4go74KnZeh25GbhFe1FtbXX26HN6sK7W4AmppuhCHetaidSWX62M9YzrBtxnjhMUFPYfZsukx9JaUR5",
  "key5": "5ymK8XNcNeJ311rZAYw1v9FZE9JsmxKmpo962XFbx7k77Y5w7j28VAFmzhp1UGpUMrD2fRAS3RWsCfDY5JY7GEBX",
  "key6": "5RQTCPqGjosXArZiNvePiHZvBzemLNXuY5ctrC93qtfeaV8rmSZyKoGBpNQGigqnvuXNeG3TGpV3bdueeuLeTC4f",
  "key7": "5d88shfgEyc67zxHg2atUpUzmDhJYmdLd6apUeGcFqTVghUM3NvXtVhVHzJhjvRVLGZu9TbEyy34aqt3bFYBeikZ",
  "key8": "2rCVsUxtMT2bFWk2ci9x1nF5uAPWAkr4ieAk5ZK1y3nqV8dcRvGNsV1DXKTXSVnshiDwVFGqc2g8ipbti5KKbgnK",
  "key9": "7JboewdXxStQD1mmx1CGue6y7Jw1xaQhu9kqWwjxpeyW2Cx4m9bQMR7Qf969rkiUdG4UQLspX78HWqJ4km3d3mL",
  "key10": "84kRMpopGXVmcxYvuUk2XMUCm7cUvUHSZsnxeA2QX3U127oitkhWHv5SHVQCPaugu4frdb4tGYRGbiFJNGivLTE",
  "key11": "PhzAvFtKYoAPexzmvtNu7yqHS8VHakKu5PoB2tU6t5LKJmkxLjzYnddgLbn4HgsjGDCdkANGKcp2uxvZiXnPYke",
  "key12": "2P39JoDneXm5NP7vKnE6nxfL32QgDudyQDJVzn3a6BmiTAQjtfpPtxjULZQuPmqdb6fJCjByx3grnYFMMvQHTEL4",
  "key13": "zGCBjdS5ncZVtMibNcCKvNa1tVnFcN6mvBEo83g1daWLzANDGNr1E2FY76fmq9uXXJY43uM2pSKtdWVD7s17fi6",
  "key14": "gcWaWm8b4DJ7jtSx4CTHSbR97bYomjmr3rmtfxwSJwqoTNdX8WLx1QpxvgPk7P8S5gadTxAspK2Yc9ieWsixJrb",
  "key15": "XcuAcqJ9frtDJNu2PU6eah9iwzGQvbQEPCq3H1besUNVR5rz8E9PmviDBNrxVzhBtoNL9N362VBCLYXa1gWkKPL",
  "key16": "5WS6sNdpTJhHgjqxeGuj419xkVWRtGuVprjmgbDN3MeU9ATrCqrAjPU8YgTzmPsWyEQK2zWuEbN53AkcVMAj8uU",
  "key17": "3VLGK5qTSEoiCqfcdyoxv5A6P6yRCwoafd31NTD9bjpCrzzesp4L2P2ammDHNf4eWVwcQtV9XaiUmWo6wrF7cJFx",
  "key18": "3hwDodubsEN3d9Axco3rYPGBZpeT5J4zwreDZof29keiXL3qyYSq8tEWQAnVBgmuUf1MjCdPrqqRyC7a5uaxrRXE",
  "key19": "2svp21Fh9oa5wb3qJsG9dk7z9Pey8r8B39q3fzToMsmw3Hhgmw42VBeq44bfXZVkFQo1v8HdsyR9u8GBoEJau69F",
  "key20": "2avCYAQtTEX2EDQyrXDbF6scXRS6LKxLsamSTRGZkrLyoQQxASac23Fv81rHvxtiJySFNUZARD1AmeeAm1p1wH2t",
  "key21": "56GPiBbzRfhcmkvP7VVX4codaeBEC4EfJJSwJq1Toyp1Rh9BL1Zh4Yb13XvQczzg9wrVT4dK3Eer74PkURT7WTFU",
  "key22": "MjTZ5JfqSBFSbcesMvbg4BaebXxEYLEkdDcd5Cn26LnES75bxoFUzxff6psaLDhMHysRp5ehcdqBPKEoomxogQQ",
  "key23": "5sc4JSGeKbWX3CVb47kqb4gxjyJLZVC2XDnHKKWok4JQ453NRkxCx2PihMaMbBZAbXpLK1WgopMz9UvBqJRrYbt6",
  "key24": "66bCsfAJgytAtx6JJ81HVWRch3GEjwCJHx7rm1ugreGaai8tk6uwe6mSW1Y7PvaTrAqJDK6LADJZTy35cSrXmb1j",
  "key25": "3nsWjJG18JmgGNKVUt9uG3s2gjJDGqd48c6KGZYrFWfjKq9Qpt7YHmtXTGMoBPfma3LrbKXWpLHAAxfGs6Rqvd4h",
  "key26": "4UM52RGrNbEDminesMRBv47Q4zNuKjoTd9JDKGKmKuBVAxEigSM7C5yw3NEnsKxy9E3X1j99R1SonwR7XmzMS4Wi",
  "key27": "47QHj1rZQhbfLS2Qg5kYt4mJEos1xteiRTMPNbsQNWN3dP4FXNKqugfN8R53iWFnJPWsrwacUdwKqiwAkyjWBxAe",
  "key28": "4267FhdEcpQxNGkcHotved1xB62a251HVVdaXZeaAWBJyga8hrzc9EygvCXVB9rfEfsBBJAyaatUK5SoYQgAjX2a",
  "key29": "sfSSsQ3pHL1t8DTP3zrV6Ai9re1cnHWsPP2NKZ1TyBrbPokfha5tcFTKzXvYvkakS2ReTVpeg2rnhTZedk9XnzA",
  "key30": "xejbj6yLCHbQMJjJaTGBLU36kfTstJQdeqJEQD74mdGGbgFTRdKwmHBKT5ckgytySxLkQemJDrkpAp6yoV5pHdK",
  "key31": "3gs3PBL4A9w3RQQ8DgWk6PeTpFxnQWfMXutnUxjVsBSZt42gK2nR4giz49V7E7x8nAoLmCoEHgPQNn6jent9yJq3",
  "key32": "44iwVN19C1jVngf2wF3UkWckCWjJdNATuZeysQNKF7a1SwEEYs7m4dttAEKLo3vnp8nGr1mSEaSaHk8fGRKtDX3R",
  "key33": "4HRNnKwgMeShnMLwEKGVUJA8b22ufif9C4rSfPxngoeWo2RHypXQYyUTC8GjBSD1JzopXpJGMXb15jySRHSyGzqi",
  "key34": "2kxo1c1HX3YBZ7yPKRXMwFUgknZgWpqxVtaz7N6Bq5qLacozCrBY478nd9eDCjrwQUnQC5cSpaJ78fxN2xCjoiCL"
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
