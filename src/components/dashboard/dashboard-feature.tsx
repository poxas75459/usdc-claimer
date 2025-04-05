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
    "5p4SADcDNVcqC2S73R4cjB2YUgnQ1tSEuHVUa839iicZ1PV7MLSTfdJbX6ibwz3PunYdpuH9LbexH5CEkQiRSSbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ww2qdFEPzYcUxgsTmDbcztZx2mkTrKDHbFwHa4KEKQ6RoGBUwt5VDCsDHvvzzGc6okoaLLSX6tMxFg675dNkmcJ",
  "key1": "5fbNExVe4JVv1BfgmrMtUvRY77LVemeTZzR1c5vv4twZTUMTctGnmqqCVb9fdeDxYkB1DfEwyEGk4QYF66zdm6hF",
  "key2": "3Z2aMVTgb4SZ2NNs7CGW1yUjgSTv7Q9VsXoUJvcnxsgevsW7NVBS2wkqsxoZ1xa9ToUGrRW5ZW8GVFLRLoG6pydt",
  "key3": "3j5Ct6seLT5BNqv1XiyavQnQcr4RGRMNtFgcpJAjbisEeLMhJsnd43PSWaGtiteS3yKEK46fzfcfi9SwxSPWXFvn",
  "key4": "3wFhMkps68jURrQGvcatf1BvMUAu6gAAAadZg9YaYhHbcp9mrJfTbCVb4aawm59EkPCh6BwKw2uawkm1V8ebBFdN",
  "key5": "3ER6hGZAzeUVXK2zERRLrJWnvfwkPEv7DaLctJB7USHxx5pySQQVyx5FM2iJyaAiq9HRodhgDcHRekQPNRjKAxXa",
  "key6": "DMbDZtuqXLxgdNPqnDg9d1Was53ZafK5W4xDS2UB9twmgjFk1HLUFMmtWsKua1qWUD6g475d19GnFkye2k15RPK",
  "key7": "YKaoMdC13wiKrx98ivoVFnVnLu6dvsJwea6xccemRNUw7qknuiSVmZo8kXxLjCkJx2CwheJcAhGtx9cxa4DMDB3",
  "key8": "5Cn88pu34eNQskoR2uBgTRo5hh718rXTGkQndX4tfakEtknJQD2hG5TTDZoPAgfZfiEMraXGPgUUV3LBL5t13NCv",
  "key9": "3xTywWwh9iP2cXWdjHEoh4tEBf4gVgkTCmH82UxtVF9uJFyDa5AbZbG5598ejmhQvHDGdRqeL16ddhFcQZ51W9U8",
  "key10": "5FVaRNejDL3sXqJBSWZFv4cK6sfZ4JbLGXCcKPgXwSjbdm3rN1AXN6vipGtdawP1oWf3d436gN2b6oEzCE77wYUZ",
  "key11": "37HadCYPAKE8nW8SB7233De9tSWxCiCDHEVVrQ6HmuJeWcpwNHvKjaJEDQCG2a2D5WD3KJqEr1tUoMrgRVJFurz4",
  "key12": "2DrP85S87EsuuCe7qcDJYw6bzA4eoHbyUrgbv5PcTnRqjskkc186giDis7Mc7KybJ2ZHDo4H3onbs2g6689f9abF",
  "key13": "5waypKwrtsmxrkkK5G3HUma2iEbyd8dEBHPZAP6MRncWnn5qris1yCpwNwdTPqz34Zw86xhfZRxQL2phcSiuMkjB",
  "key14": "UkYZEekpUPeftjbXFgtb3bxyYfuitK4qLmf46wqTunypZ4YyDZeYk9NxUWUha88ouUukn1rC5va6yhNvQafH35W",
  "key15": "iyuRnFeSKQRtGuVXfeKLmNgD7nBXoNUTZ8Dx26oniKDy2JrLPYBJEYJMu5xGipZGRBgBbf7aKKRAyT8gzU1jkE6",
  "key16": "38J7wmGTNzh9XBeMPnDuX5WSFaZrKuZGpB2mxBS7UcjfXWnMgGq4D4yTL7GGwFkCbnTcDi5st3HSoAHM8rTtwibG",
  "key17": "64F3eXYAKTQAWSvCBFqZbJ5RCjGaF9U5E2Xa8UAnnNeHkaVN1MnhPBKSHGS1YUZNaVXJZRefNZDtH2yk42vFxWQd",
  "key18": "4qw4mjVBWqrjn7pke25Wq6wrnzCmq4rkpW4BFZH85jEys9mjQcuB29NweRBpxCH46gyfmgJcd34g1p9358ML7DwJ",
  "key19": "u2NfsSbmiH7yK7mTabjMgCPBBwxyNQi5A3xG3kBHt6TmgbbdMUzjvNPiuZiYBPPKwY2tdpw6XtongERKyeM722r",
  "key20": "4wNsUdWKb8Gw3FjUJEkQZNVUKijSSVvvY4uwsxwek6wZWqy99ar5a6JH4ACDkMxSHiAe6vvBBqkz4yKumhbvd89e",
  "key21": "5x9aLotqVveQ4PSARqf9LULhdDUKKeYShg5ax6zCwSPZLc2UDNBTtCSxgnXdGPMAydhGQFLvqbhLAu6o4PXjwLZY",
  "key22": "5u5FF3UDLGxDBhH5xiv9f3iim6jtPWA3gvydWPuUYamRtStvMn9Kcgzm9XZA32QyUmCkNR8aocD4TuuTypw1mCPc",
  "key23": "4EzVvxeDPnghQkaD8ky6PanrrbqriYfL4m1f2LrptV4PXh7tnWY2ZHS7dmFcKoCKPsiCXRqtnha8pQMRQC31vhU3",
  "key24": "2qNBBnyMjfnTq2t9k8yXzWaLknAMfkzriww2KUubFjTZf11wec9kMQsmCtDJH8dASXgMHuAXERy57HNVmiNVCYYF",
  "key25": "22KVT6apWLY5t96BihBqEJ6sZdCBkBL1Fi9UN7teKpHFaPhr7P668Rp84uh5Ba5Gs5xJaepg4HtCCnNAyfUKQkq1",
  "key26": "5ybgdSk4LJyyVTk9BJwrKY8yibRSoPhJNpv8SYLvUSoUQkKTwFPQriqbwuzK5XVYo8PV5aDiohtn9jPB4AwgfgTw",
  "key27": "3ZCvTV36K7MF2ELa2AqN9J2HTjWx72iQr2fiqXQk61vXXcyCu7Q3JgutDnBFKScTECor6EHEQk9WUSNiwSmFcgw",
  "key28": "4FU7E3udtzMWoxPRrpXCX9t5hAmwYuvVSRFojxGwV2CGXTf2HpWFdYDp1XSnbnURwHFp8822AiRPtFWDMLL5XzCc"
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
