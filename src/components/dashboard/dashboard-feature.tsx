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
    "2kmbB2BruPHJgmYq5kDRKN4BtkN7NmL8J9hWqFZeHWc8JH9zi8cj4XFoQNpHBTUCMvJgDENft94GueRF6htFvTpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pC5zodKeSGBC9oNzKqJHR37tTWHrivX2TkJ2R6fVzC9jN6xXoRKdpoHVt11B67qwB8ndpc4k6kwJ1AvDS4XK429",
  "key1": "VnNGFXuTdUJH6ohhUf4Nz66Gw7tVWWWmFNbv6yQ2YgiigivhBdpM5NwgZZt8DWqy7pviPYh4siqw1heiTb6Dyyn",
  "key2": "3MpPLgVTXFn8X79UjMgo3751mWk1M3JyHpoMRokJcsFXA9DqXNofnSgNEqa2pW8fEK7JPUAVtyAgvTic6xLWVvzC",
  "key3": "65TjroP9hEA1SDUN3AF5nKr33Rma8k38nVoPvnXTV4jDopKFabZZKaSfXAhZPnJ6GKeWT5e7aHoqZhCgowpQ4JCN",
  "key4": "2o8Xi1xcsXxrcnh6pvAAkTbo781DqBdcvoirVtiodhV4NTdDhhnh2HStBBwTSjrNyAgveEc36zt2xrAeX7gJf4At",
  "key5": "2mQp2pw9Ap2TPfnAHPhmS3g1yGxBHa9MVXhLxoUXvfs4zkySAE4TAGmvKHRRbFfemUQcLNL9jDeBLTray9ujDa1x",
  "key6": "43C92WLAzLfzuCwe1chxmtDLEZupyukv1usEs6BpcNhudJHg2TYYoVRLzoXtpQamtSxoc4MkxoVwJaifAiA6Nnfr",
  "key7": "2jKeWRAvpp5Z3WJVoGVpRVs6BHGFUQ5PqwoGSqmwEoekmgUUFoUFQsgqRuSVYdZio3Ge5LtCYktC4uU6yM3iRW6B",
  "key8": "3eLyikMV9vKErki1E3M5AdPdvChLpt5sqmb1xULSPzs5PJU3kc1a5xwnczWbw5abDrT3sj8NdViDSAqMG4sXSGdy",
  "key9": "w3Mham96yXrA37c5iewtU6fbpmg6GTrQaj5ELTJdibWFM6FNSRYHrkSdp514QXsqiT2Ps18eSj5ZhpeDDK3xoam",
  "key10": "2ZmY7NJZSAZnonmn3SeTHc9RLdrDQBxeaWbEaiNS29JuZkAifWPgVarKc6VcryEGMEjYPLs4zMbRWmg9jmu42gaS",
  "key11": "BfqvhLYEPSQZyuudfzDU2MyQMAJSvUAxpBaUnjMmKQY3JUEZbNk8JubsoycY7ArkZELgFLYgAcsrt1PbbU3BSyQ",
  "key12": "3aaozgobnPUy3q7k3RRcBapLiXcwwb5sRUSqRSJfhFYSytUj2gyfqvrNnM9aLtNPkF1SujygxfZtMqDQraGGYnP5",
  "key13": "rGiiCZDYDYwEW22bCNyp1Rvg6jPX4nQvzMLmRe1BgWc15F5wSNS9nC43VHFtv7aoK2SWwonXuuC8qrTzUfwnN7N",
  "key14": "5JChMB4cS2xWjkszxQTPQRsxdyoU5dVoPksMGjZ8oiMKuAdwathZDXyhyyQ4EShmfJcCBVBuCgmbZj8vZYBcPfrH",
  "key15": "Q59keHJRT1XFJfBJuBm5yaQYW9xwD2AmLbdS9j7KhdjRVUGb2451UcYnCMAKF8f4WEMtuJ4KTzMMB4ionizx6Dg",
  "key16": "3TrVyrFzTYLiDswnqNUDN6Wj9QzXKG2D9sbN2WtPMy7G69SDyXHGZf1WZfvdCrYi5iK75jGNRpC5LEHNq3w1SJs6",
  "key17": "bw4ytuB5Fdtv2WfNddX96wDrhYR4iFSvsSvfJLdXhW61MkcpEL5mZxhzJp8F1Ruxx3DGoKoeq195dawdR1beJ7Y",
  "key18": "AdyWFbGpCn1Mk7vktVSNF7pkkCpe2Ha1bd78QroG24mo15iAPU3h6Bqnws7EeXsfgZfHWQkdFSAF5NTcnc4CNNE",
  "key19": "pEWBbNLet6UUSRybtazyGoFuJj6uptomLomK42DqGQsd8JuuGQE5Ayn61VTvQ67FAKmsBaDNzPp5v4yBVZnLtwb",
  "key20": "zqsJG7HmEuZGCssoMxCR1WLsMdg91g7csCgVh4crderEQ4BMSrGGd5aPTdfWpb3ymfTpYLjs67wuLnffSaQ6TiX",
  "key21": "D7mzmVHZmpqWNdGQuqRcpnveZJgSvmXXkjptXyQq5vaJqmQuRXiT5JoT6hcnM86W8Aqb7vrzvUR9vZpAn4L9sU4",
  "key22": "x6dXwVg7DTspsSSJvYc6PBGBSt5Vs2E6kW3pTcga4UJXuTQXG8mDjPG3M7fvSk4WWwzUNKdfTCjKPXe2vMvB8hb",
  "key23": "24WKkwFC38fP9qH6qH4gRe6iQDwvVbUeAao8Z7CfBibHYXq66ocNBiVVrxZUPL86TGm5cYLAXWtkuJ69wwoCuBLJ",
  "key24": "5nGC2ddmvS9te3BXEEYGbaKTnx7NJZRjL5MrEg6MHBQWcmyjYtnWTZMGwwY7Jgxjb7iy9Zx5M6NVhXDBaqGRm6UL",
  "key25": "xsdK6sYwvFuEFCrmkjYoeUyrEEF8V46RbozzeykfWPB4heuq3uYdjZopgbRZpkq7g73sLcUoFuwgVkEUXxtE2H9",
  "key26": "5iBvkxXbPqsbNPq4TzKW61ieercWWCtiMW3v7pHkAVRHW3zpEhfNbJD4ykqBLevreRGgj22Ju3xdwpAgRbEGXD1b",
  "key27": "3gM7QzseCpW8SRXDViPZPxEF6CzWmRm3PnQ9Z5UExPgR6rNGzizKKVsZ21zcbrRP7W5PD9qZJnMUG1ewqfcKFw8d"
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
