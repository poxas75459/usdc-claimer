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
    "3U9uTfjXaH5JBJoD5CyPLskTCUBM3EC7WHJ8KLh9nDF9ZZQoWbRsBtAG1BHwykpkomuLBVohgQi4NjFb6iS9nS7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vjEDwPtDvNaqGyNiHJ4TycowWuFh12USneLijWJZj8ohPSWEceHnXX4qLCT76367MGeuXTVtHSHjcCbf2VYgAcx",
  "key1": "RGe3eyLqXjYZHdvB7T1SPPZHYYKBjxTWxo287pNb8nxvhezQ915JPKZ9xF3GBtPrdTmWhCixM8Pc3RcczgtxgHN",
  "key2": "4ASCsBinb1Do2BLjKMAPhv4bZm9HY3mpKz645LGAjPfyAuejYQQXYrNAziHWRjAwU9tArdzQrqo5X5JrVxcNzBSL",
  "key3": "63Ravn3PRJGzER471RYyHFzyoCsnMGTSHM7wUTv7xVkr8CSjzmaydQ2j7PvguxEix3bPrGZbevCuiMht69KZQkUT",
  "key4": "3zXrHq2sQCuSVopk2Ep18ifKjeSry4X9x3SrCpzhpXcv5JNQoQ7EwUKWzQhurQ72NzC8yBGpcyPxM8YxdWxubTLz",
  "key5": "5Q8defyyaiLykFxqVWZv5PRt6H2DuFPXj2qcdDwBgMQfHDAyqt4uWdk5HtgXy5Rzj7GBCXCMwV9myGpGZJXCQRVE",
  "key6": "2xZknimAa5jHrvmxT67MAbfQiXQX7hST6hRZji4GjoYQoF5zfhHvynxau3yBk5VPf9qWHuZ4xt1VYsTuXtJkxy5e",
  "key7": "5k9Q4Hhwa7asUtyDReKfkRMTbTdmWjpMzgrCibZWQeAKXZ77e4jcUPEpFbdPt6kqkNjYSj1qBNQunTJydCvQDRTX",
  "key8": "56fu6j2Y8dCLgKRoQX2Am5iEG8wgNuyJe4aEgbD3B3gTCj2qhYvVhyBKanDxnFna367u3MACTH3jgAcKSDSBi3Gj",
  "key9": "eXCEGqiN5agT5nFN831LYfJ8E18C1EonRCRH316c4kJ843NDgCf4BB4ZufaihKYGhGejKNKTiESacyHnJavyF3e",
  "key10": "3ZjTP1yk8eFoUbHmUw3uYCorfDaTjZUexcakzgdsfc7gkQADeHjNe6jC3pywL4o1vYG3wyecqB8Mfn1dzrpYEpYF",
  "key11": "3zSmKMEeHfePGn5gxDT2pSVB9dB2cU3rq9jcVcEfJ2ikxAJ9aF8vueG2ud1ZarSUz9PRNmyZaP9EygAVF5nUbsky",
  "key12": "4BoNELKywaHx3dDg8Dij3HQVjbTnDFMGnqwm81PuQTpeyS149jvTdiesG6ByG4jcasuWYPHrVTdvGysJ4NWSd78E",
  "key13": "4r3Ljp6fHeEZyL5uxQc1JDitfQ33r3i1cwwgRSYAUwSA9Pup7HtGP9NTn1Z8h1CWajpEo5nnxLZ5wgryRk9jZFH",
  "key14": "xrdNKVdKxmFNxizeR8FZhgNFCJZxz6RGZjdoxBFoS4teU3SXM91hPQ3zf6ZdSinksWpa1PiDFR123A1Jq1Dhp31",
  "key15": "5jVGUgFPtQ7x1fMBzAV9tRKQMmygZWVvwALEva9mUR1QyJCLEfzxLE6FqTatZVXzdR8LWCTDaYk2LzJsfzAUaQYi",
  "key16": "2AMPESrT8WVoPNpXkauacnpmRP6cV3bNSJ1ZfVABhQa1ohEppntyDYDDr42LvE671CH6XpZ8LcRrexPAnc1nETbD",
  "key17": "4mHZbdf3Fwbq9gGQmXGjCGoCoC7XSu63R2kHgk2e5VW4Em8dqvsyDVhrdHmMqiLW746wUETtV69rfuhCfM5d4KP6",
  "key18": "3B731FnEZ4fFcv1hEb2ioyxcahae2R7ZcockRJvkduwqwG24isiQmHRVEARqdCDwr5sWziZUK1zLKhwBNpkkGoqs",
  "key19": "3o7h9v3qDkg9QA9UfA3seFwKzuCJuRfLChT1PUyk74zmzqitK7EmS34MTg1LLqWPv6Lxuci1TzQ7i4XD9DmCjZdU",
  "key20": "5Q9w7zEFAonqLiqsY2TXcjr9r9cZ6hRMfrXSAzELeD1UMsvwqNRdw4SFrno4jDoihhQZUn1LoTs1SjEG8ht3mdWN",
  "key21": "4j8pnSEUCZEBqtgSeQ3b9D1tCSBaFpr8ed1VpZjecfupPFCBN1Bsfy8ZgsFEjX31D4xxGLQCh44RQHwj3Ma2RvMs",
  "key22": "5YidoVaE1jtByFeLkkXET952GnRvJh2pdn7ERM67BxdK5UZReYZHmZPvFrShqs1rtnqnbSaVYjfmq2QzemzJwovi",
  "key23": "KzN6cSWaNgUMYbTBJtxLw3M39kBZ11hJyVNEME1yVUi2NTqGy78b2PUDud5dxgvEQGqA9KvbX84Gu81Ax9iE6Me",
  "key24": "zvHJkdtEKiwgX3Rat1fMUibUZptc9QPRqHau4reM8o8FA8NRfEN89a8QEcoSSygQGGvE9oysCR336yTvaTs9MqC",
  "key25": "yez1Hq8twFkiQTknHNrCmN6Y4VgR8q5KDNkji5shqoDywFCLJ6mSrjpT31njEN9z4goE1VtChzZy8sxp5ErFBnt",
  "key26": "2uP8pWiGnsFasyGaS4v5FDL22rgyTrPCKY5h1rsKKo5G38eZmMfPhnPEQKrtuH47sQsE1i8erQU9Xw3JNcHg45rH",
  "key27": "5oVmLaxLedHTTDeqj6m81DNbQFuUoDLfTRqy8Ma3WXhXXjL6caLJVC6CbbES11J5DMRngsvJD8zwG8yJHLCSFgU3"
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
