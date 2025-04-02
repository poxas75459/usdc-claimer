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
    "38WcFB1pV8bcV6Y2PwwiWNPVtfDgXnqmsihXPCTpgDfGdJe2F9LAK6sag5t5bNRQUt9F6So2P8juoXF44uD1qBu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7geW8CghPhrsF5JBZ81zkD7DfyVTFowuu9K6SrFtBhkNHyasWrZhiciEDpV7ZsR8zHvrdKK9kgzqb22RwFAVLH",
  "key1": "2CdPXYqd6siYpGtjuVLdq5JXaTYx3euj4fZoS9RSHcTMGsXF5vwqzD4jPnuPu8m8q3Ay6EXPwGBhC8SJgUvu16vT",
  "key2": "4irpFeS6hm9p7ZTit3YrQ9M6UkJUPtBSeN457Cua3xxvevN3VropHztFpPg5DgcJ7tXLowuBptUfkrGiZuAoiuw5",
  "key3": "4fg7bNpSSXVnzxrMqZMtbqtyeQPpQFTNTHKKngPbyPvhMg5gF4E74TkFkrD4xLZeY5An33sWsz6p9x8xRsgxe32h",
  "key4": "4unuLF8sq4GECYFbmXLAHybhVXqNnBDDRDVeGLsQ49TJYbbRf5ecWUboAbCfksvwk7boDQK1D6ApmbvAm2RZKeH2",
  "key5": "2r8UBBeRYSfc8XeRsymBpMo4JxiUVsMMT3G539PjdETDhZ5niFikHLzq7RDTYSxP9Npy6BEWv34tDVVySiHyWp1U",
  "key6": "4w6bz553YK49yc5sXRxw4viq8MgwqJwTMzQAL7jxaTaXz8nf268z3w1eCMVsQYo3mNZmXBxApXK4L1W1Nmp3pmyN",
  "key7": "615e6mpAMT7rsCHp2Urf7WGDihJGCyZSd3VWxzpjHxo1UKAoKprHGpngRB2SWmu1k2YhLRsshjWqCKburBtysxvH",
  "key8": "4vnZUe5k4MSrGbzHkYgv6VBvrzhVxPYCXoCgFa5XLp7vvFaHWFH9Uxzx99LF5F3fdCMPqT7TM36nTw66d3ELS44B",
  "key9": "2xAMtrWV7B4ZebtHj84nAuqCqy1UCTQUpkRMb8bU1DqxoZJvcUk9LrPx9JQYuexK7T1qxb915BogHPwYduisN9ST",
  "key10": "4pWeJhrL2wFjP7wLc2bAKvJD6psVecrJKwhCCXvoPa1eYFQKLjpXaF9Ngoy5DkkwxDSD8XjHekYJNM7giMtMTqz8",
  "key11": "4BnH5eGHCLrHdbn3H5G2M7wjPJMzKJCEms9MZroEsanqXTDQLgw8b6toByLqo7pKtu2c5uytnFY2khBGm81QEZbk",
  "key12": "2ZjUMzR2jb1LHyNGAxfQu73BhgjG3fSyhvT9zgygybxosiCY3x4vcAFDutLVbR2q7WPpp6mPALx9pwe2JiiczK7k",
  "key13": "2xVrin1vAMcZeS8jDb4Ntf5HG8nuaworiZ5HVGTs62f6mTx646jTBc3dDEGGNXL7pDnjPxKe5RBqe3RzJaKSDBF6",
  "key14": "29STPHhij4Hu45TmVeQMexHnwLzKRfWfbHzsJQcjQfqjrpHFVdCsntMivY3HX2PA1gSn21rWqAxEtC78KFcudKB3",
  "key15": "51cr5WaDKqpGVFz3YvE6g2pfLeWUUPmrGS8PoCJoa5MQWkWEHEm9HXuZRzDNsQTPkerF3ALZRcJt132GUimSJ8c8",
  "key16": "1VtCgJEQJnjZpscD1Lj3iTSV6iYUehXeTALqC5F12dRTBTuy8QhB6UYdcsK3a5NMw1JRpXzkdXBKq8EVJEA6D2T",
  "key17": "3oFVoTd2e9kAEGFeVgbUScvjpt3FEFUR1Mybi5WpiZKpAry2ACtECJtCLUkG1woVZxGYbroJ6WF8smseBKupgCNP",
  "key18": "3zNs5XUUBwe4iKtKk9RjEJAduiCYynZGZy8kKogM2zaefNG4oHgsoMa6624qdEzfZxTutVyhiZTP63CtwBaE6GR6",
  "key19": "zAqjkNLUDKaK4jdK89v9LWe36aHS2RXKLnKhPzBTJu9j558wa4vBfpkE1E38x7yiFebGcaKyeXuHSsDLQVMRGpN",
  "key20": "2EHBtEGJSuXRp75yg3c5YdAqMVFfhaMPeoaCUb3nSR49vRGyqdE59KvTH8PC3gvf3LrSPqUDbFPKggUCSKdBbQU6",
  "key21": "2VxQL8bReW6vXZzVhuC85afpdiu7Dnj49Shmw5HV2tPo4Wsv9oBkfn2Bqs8iBrqrd39YHZj7cNJsVZN3WsF86kTW",
  "key22": "35DVg2pQzCF7GAU5TEZjnm3mGCsoh8yPxjF59xSBPyQH9Y5djzMzoxe1YnpzDwRrAYmbQh5XiXBLFjmx85ncspJq",
  "key23": "N4nGCwrATtmYC6DmiG7Df5TiLBNBfxWgGsYa9BU9HqHU921sbVUNUh86g9tfb6A2DfZhfwg182QZ7NWEfrQcpEz",
  "key24": "31jqPxKBqHtRSMKTsHiT1xdknBsYXapirBmatVitYpNtnoAAZHCbPPqWWYxSDKU1DSFkroG3peJt8Kit413cv1Qv",
  "key25": "hB6Vv3WCP73UDeGjWsT1yABjyzucE8ossSWcLcuXYFpAkcDJHiWz6UizfYtgfUUSpGGUVnWrsZSBYvQDLXepUPy",
  "key26": "5WFTaFyXhJm4ByTjmRDS3QiyBcVM4HSvBWBHHiyhZg6rQN9wakfBF7omq3SPggMsjV8FquTM3sSGaFno5nYEtRmG",
  "key27": "5KaAZ4sWv5sQQwMJxnfv7s3MHc8yPxGUhxXvDqVobuacoT9MSymRrhrX4RPsW486PWfmBXEtz47D4zaJGjNrHbpP",
  "key28": "5egbpU4AdD1vUZAsKYeDrD9aHqQRBUkavPGACxPpAKyAmZ4hwGE26MiK79UAeTMQMkpdpSFU6CYT74sFYtn2cSM9",
  "key29": "2mXb72YwKjKtDm4qY2pg61VgnLm4qacQAbndDc6mxCLDAzAJ5mAJJme786X5S9aJGd5MnDUpwhQqmxQaCBq1cDMi",
  "key30": "2gH4LkRbAG8o1ZeXijJXYXVuakkNyW2oGKJAKbTJgm8SDzCYKwpXN9RQ12Qxm38z1y8Ass5ipYtLeDEdiPNENR9E",
  "key31": "2jkRgCMvhzgYm79dGjyRVqGGGBKoC3Q7XQPjkWHUXJpjEKjKzsVfCZe3onQDfzB9ZCCKxFTzfqbnMtKvNzQv6ofH",
  "key32": "4x9moNs7CUFnyrhWEgRH5g4sZMrXkFdtSvAR9yZyH6FKgHQkieci2atPeL2xfbmsgnqUCeFsTZDVoo3He77RzrR9",
  "key33": "55uzwbMwTsqRQKKWQU3A6GJJnWZd4GkdQPEcqvcj3VPcyXbfJRZmeLywpoM1bqk7sh6GdXxw8zdpAFfMFi2oPKL7",
  "key34": "4nNFoEz3ei6K4UDFtaPLpBsyy52RTUe5dsLQBTASBh72z7f91tkNUkPiBwfF7HM343mfq56ixJKnSaamJUdzHrzN",
  "key35": "3474DN3vh327xrHdXSsZyTYSdmB7z6xddJoWnCD2nxcGP2LbJ1Sm2bBZSGyUc7eSZgdk1gde5mvbbnaSWRNY5Xdo",
  "key36": "2nfP6qHLbeRs5VuVE2GWJyEvcTiL1yVJW9MPxR3RtYVYNQX25SFJ7tNodLu8oFwJRTvFio9rPzzAoJoGZKZmnNdj",
  "key37": "42dj53Z6tbtKcWLXyUy17cd1LPf2sr59HUiyQ3CvPMrVSNudYJZthcFQevbqsLoDrggu7Dm8REWYuwNmgZZxKAAb",
  "key38": "3hbiAgPtpxmhf6zfsAcx5TdVCAnxRTTmPkW533NkKeQrkX6uu3EboccDgj7ABH66JzSKGtRBy4JpcH9Tz1fQr3bN",
  "key39": "2tMXFUYSq7BeCXCtrCMym1eHo3hoXLchYHZEVea24SomT2WSZRE9emyU9HMBZLKTBXC3eHXRsrJsfX4Jz3RroPYj",
  "key40": "qNYkUBWWyK6CCbCUatBzfiGBzXaJ3Zy7cdSLqTYyWqXwCD9PKd1cVuWk98Yhz5xAqTVxmPsMuvkNWLFZ7Pp5XFN",
  "key41": "4GchgB1XxYwziq6CQ7bzi5xGXLTysVvVKfkQMCUCJmBP7BZzsMQjnr3Ws5EEEvxDYicyd2WgyWPxyd6xrpBaHWjs",
  "key42": "5UR15CPah7QRQUorBh3VpRpT9JzcQzsxyo4K94y3dfh61NuB7GVaJip5mXxw2SjHyWbe1HY1DBen2PonJ9aFDNFa",
  "key43": "KWkooEVv2AA9Z7UoW5GLftU6f6Ey3rybgLD9m11YsH2gRNwu9fh4wH7wcz8HKP32Ukbf4b9qvdCVdaKPS85L22T"
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
