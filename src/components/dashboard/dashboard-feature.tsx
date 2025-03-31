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
    "4CzeLjhfsku4uU7zarFPbEFx9Mmn2aaNxdfjkRLMJbv3MxaQ5YjD8RiTdDTn5TTbaPW7aECDGm84cdbjds2359SJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eek48Jr2wSMub95isbdgKbxpfYq56BD5UpAwNz2KWDLtVcPbose27ZCKQGpvWvuzEWh3NFQiY4SevcJaNJ48BkJ",
  "key1": "7sEFMXr1TabpXen7vmcKnJBoEbsAePHXV8AyReDorzY9qwX7qfv9ZH5woFaCPTzNZPqVd3PthEVnYDJoFMEwMj8",
  "key2": "37R7wW7ZXKjwTxz7MwvVggqKxYx7X1Yn8DUhaJazb6ZJTv2ZmUmvsyPXnttk3vzX569gahLT5K2amoQs7jHEWFRx",
  "key3": "3UivaEupp5BjDe3W2Ft7RkaZvF6snyVFXEbHL2Lm3FUWwAJd3ksstDdgYRjEDBi7R8HBNr1pVgaiBNehnnx69kBy",
  "key4": "2an8CKLFDpFEFp89Fum3f64q7Gj7vd7fu95hySRTWKk6CXbPaxqpjXGRFjGbZ7qth7339yDZ1KDtjmVv4zqhn5er",
  "key5": "PoGPPAwtngHRVvpo4yfquB88CjmZnKvxAt3DKWPCjRusSdVdQTV2GwCd6gGtGrsF1FzWpxTNkrqmuKoREX5XUJo",
  "key6": "4rXzNfNGFoyn5F2PVMq5AmWd8bFQ2yz3vuZ1dohz5QPh6RtFtWjnskFuESamtXKarpvAZ5mLgArcNuSKmWDjAUfc",
  "key7": "2DiPytNBMuo3hDws9NiLbc8UxmbhS6WMGxxC375wsT3RQrjZoSsP4GU2WL6fBj6G5Rnt3LphS5MgPpDuonGukstp",
  "key8": "V8XQfd77vtYkhf3FZeHWBH446wZoyVK6b5Hhn8sAarvRRGKvL1aA39RedLpSTKAydcUe9VZbtLZpHiX65Ltj9cw",
  "key9": "2zPqCWyodS6X1us5ra5nQGBS4ri7HSD9wWAtNrNN3DhHAKuA4FsvuZB5mRh2tz8BYFeXE3oPHL6c6TjUJkSBGEGn",
  "key10": "5SkxDPY17LZSjjAVUgHgvmZiTVwvu53s8ndWFeQtxze2wghaN8FYWKjq8PC13hmCt3TXTgasUuSwzyBwYjVhkbdD",
  "key11": "3JQWFjT3ysaWRCE1LSaRBaaSvV2fvYNbupQok4e3BwNuhCKsGLEsE2URcUT5JpxpyU2YyY52de8x8Z9sExqRw6Pm",
  "key12": "4PxXySsXdBVieKQfXCbjFstbc4iFsUqivVufVBPFj5vkbbSsPxDcDWVekLtHSSBSf5Z7J7p3qcvivtHeogGys2eH",
  "key13": "4ZxGUsmYPA6Uu5Dtop7XVKA3wrimFUfFobh8KgzSZqpCNmkhsbDSZNTimNgnCULvpAjypxcsN1xgjRUCicDydvYR",
  "key14": "3PBxGafgfkpHVcDfo9TvCKCk5fa8qfzUi6cpEvucDQ2jr8VFui8RmNmB4bVCAcwKqEqamZCt7wYR5y9Bx3SkiTRB",
  "key15": "m5XRBxNUWJo6oEM36k4sN78c8HUsJ4kawn4B8GDW4wyivPhHrFzdJRfMLSbA9dX7eLduBzSNVTa7njAH9GxppFH",
  "key16": "5WX7e4PhrYpVBWMYTcb3d5R6Emf1SRZmiBqDdaikt4AgUyiT89p1HDGKGuvD9NQN77m8NcMgJbfyfvRK2ZrnaEwK",
  "key17": "2danVNTaZqv2wGP1U87ExgXT6EUoBL5PxzGiQvndjGG3BpfV9DaTfMZ14M3Kip3pEEEiiCfgAcyKuAvP7j4PGqxE",
  "key18": "59vJYXtrku1prax5bmg2dvefc6xDux8ZTrFpxYLNdewpqpwV1rCBXmMuFtqVfwRYFXGbm6oXPbSBLSkszv6Lurkn",
  "key19": "5b2G9sNLvfBB7tV7qu6HPakAeRVQfySY8NRvoESea69VRYpNApcv9oWgRD2XP6wTB9J1xLfVj15shZqL4YQz7R2n",
  "key20": "3LDb4PaTuv8v3Zcn3vNFyLYm7GDP2e2V5bYM43i2WNimvd82YswfumrQentWU1N6U9iCGxiJcEpBAQMsPSyk3CuS",
  "key21": "5vs3oE8m6k8nGeS5AkWgzD64ojGTN717aK7zwzyi6BBX9C2Zxef28sa5UEyUQTw3FtUeqfmFzrPJk3nBppvmu8RA",
  "key22": "Lxi11ij9LwyC7wfupJNcci2Rt66iAWSLt6GaWir6GagTMi6zs6ZPdoiZ8jrDJ8p3PbhHVxF7LpHjwwPFaZtWfJi",
  "key23": "4n2Z4gzWiThDHFDR45qn4xhcWier7FVv1DTpp18NkkwQnjDqQoxcQdrN9CUPsQ5Qpax6t1eu3wnpK82XSWyiB7eP",
  "key24": "63GMQk5q93t5BcNAPuWf9AskAavQWGDNkE64qTfTD8aH9AUUEC8WtEDBT4PzXt1R1rujbbhvy9arYhWvxNrbKMxm",
  "key25": "5tkivwPjKtGpMAfnaDeLvzrStTTM5ENYnhXYyqNj62qGV5RvrPX2qGbKpRsxbWtrWqQ3NycpDWqtxy2VwEWA8tzH",
  "key26": "4cx76L4otEt1BNqJwHNdMiLJ4z3vMSedTZnizHssRdX52N9RGyqaNXjpxuLz83fiukAy18LfVJotnhjrsBaB6Qmd",
  "key27": "4djueHgRyjbYKcLeFotBdywbPv4EwaxYezFB59D1n1CQBqAWfKiUYSyrBPgJf3jmsBDHugrSCjFZhs8j5USu9dXv",
  "key28": "5iZcqYyzNwiMQWhp4oGmb9ytQo8PVAvfiRRTwSyQgqQu6nAR9urxLgsVwEoSstj1XaGEQTiQ96DHZEGHRY5NhRDG",
  "key29": "2dPz3qqR9KUyucqPjK1vF1PVvc1BBP3kY43HXLFJfLqyytknkPSw7hiRh8XximnzKe6jABZoV2acS6TDH2Ephnup",
  "key30": "2ViibrARjM37KtJBfRAd9e3ZuCGtqvGvH7VYcg5Kqxg5WsHEqxBmNwj4S1nnbYXde15QuM5x32rcv4eR9Lqd5Qqn",
  "key31": "QXe5PD4vy8p3iSbdi2kTHcxuyv5qJLXMeFymVw1zUzY6bWWB51V5HPUXfKpsK9mnTSnFV6YDrtA6NYQ9KyBcYaL",
  "key32": "3e6cedxL1necYJfkx5vRisHKp5MKErxgkHbTdD6fT4Sa1gRtHu1XK6RrCaos58jbH2Wobz8f2b238vJVtt3ShAof",
  "key33": "9zWz6BPc44hjA4XqtkwVjtkjpcXWk69d9B1Eso49GSoBPWNCVmoZsHW3vGs8FxheyhPUi4XxXe3Mf3bB3GaJqdf",
  "key34": "3QECiVprG6dzn71SmeVFYB4iwANVd2p9s5yDc35cVRUGrD8z6NMLhtCNVgGVCJXS8YtBFrmPxuAPuy1gV7Mfr2Ef",
  "key35": "629ojADBHwFcD5196gnte5NLCRDX7BfYrNhy7LiBeqdbbBd2JieZ27zxfzyQqQhaR5ccPisLD2PskFFNNCQiveDU"
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
