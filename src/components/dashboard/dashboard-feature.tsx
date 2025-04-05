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
    "2Y1ms2UcppBgerSVQbFos2W6heoHCFPV4ME95Ld6KAgVejKWWqPHQRwW1uw5mccJ1S8S2wwqTL1V8CocYFFjYY9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FdUN1CsZTczVguwySzB74f3zsz41Hd568MSq4qqAAx1ksSaPdikpwAgPT6UJhF23pSzM3Q3NL8196HirbmYQNDz",
  "key1": "4Tyr4Lx4QBhcZr8G6bWABBjKD4S2nTPX8urTzki3EYk3CwDJB4qHK86Ubhfj8g9poJn4oeDgbxegxmYonvPEQCFD",
  "key2": "3C8PkMjwryBGmD8a8KWHCbrVm1p4gF2nJcTNTDKZKAHFPCB5aEr6QDwcpWoMEKAHL9R5UovUudipBq5dVhpdA5CJ",
  "key3": "4zFSGQQ7X7v4U3Nc9FGEbnNVSsWdSEt4QwwhmCf4k6Ws96XhyqjRQJ68omgPyuRooTo6CymK5rPZkPunwGewZLGm",
  "key4": "3nvMPxMKnQR3BtKYS1YPNdGbBRBTAdWAEtBu2baewtQHqKESXwTx2eZcCcdyKFWMyH1CrkR7oV3X8HZjTNNv36Pa",
  "key5": "wF6xTdbDuJg8NMS5wPtaUGi9SwbLTjDjYwZfdDQNjJEDZCnQNyUAMHtFEDQFvJBR8Ty1rWi2wJGdqfo4G1z2xsh",
  "key6": "3491Grug12378h6vnkZFj9oWKximrJF1ZpcpJ8Zz9SquWqtjLm9n4F5chMU468R5Z4SiJqfF6Cum15EbzArtyMc1",
  "key7": "5Lyt65FYTRzZoVXep2BS6GZggwQJG1KHKCusiPCmqbu6pByXr2AKMuF2HPSBikjqmz7VQE6taxkByBdHSwhJWsoA",
  "key8": "5visgi6yHgT2K3PcmChi3yMaJscxGfwCqbLRVcJ3jFRuhFwoEM8Qu4VyM2q4H9r3wL3MBDPVTy3BnheTtrWaQg6Q",
  "key9": "24YtZnJwF4osTgpP5JGYdo4ebB1AtbmghzzxosnAkfviKXPHNFZ74JYAbjnvDKhbdUynLsut59AZfmZyzuqWNaLu",
  "key10": "5Ti6XcJZqaDB2bpeBq12qzvHAMnnojBnFx9vf6ynoMK4VHHJsj8Uk7nAffY7Xsd1BH2iwBXHFkC3t26CS1i4vrD4",
  "key11": "33h8rqcudHjjLV6ao6vyrMVxuoDD487msXkTqTqE9qdLkU3YfwanCQrH6tcuW955YBcjWo7cZ6AhBhgVEKan8HSg",
  "key12": "g7PYaHH3SwoMBx47YWs1giaxdDB3fgHGxEgTdDnrHPhGvjbyj9jqCFtn1UMKyeSZnbLxhySxA4pKwoAUk2sQBr1",
  "key13": "47jFNmPZcD6BS7h4RYSj6T6xX1YkSgqLYvbkinoKm26ZN8yUSqZWSXrZ7iEGL1aewGNsHZL8WQnQsRbbfXHq2AzH",
  "key14": "5gJ3MnAHWS1i49HpR7gYQ8szzkd9NHC6VXSaBSVCwvfB3444zA8YGNQEji1o98YbXKfqsvUpJp5wDZLmRddBAoRp",
  "key15": "3EvB53qqEaQyc6uZoqy6EgKFHgokKqae7UfMDCrXxECfwjWgtNMP6huQ65pmVE5D5kpKN12QLwvVvQi3Y7yzyQFm",
  "key16": "3LFpCyjTRWJ6Fe4T2675fLREcxQ8eZBwE1gGCWPve6e3XDVtaBdoxQPqpMHzd1aB1sTFNXyL3KcuHp4hjgYNvkwR",
  "key17": "eQUuqhK1Y46jCFkGk7PKsmcShunf7QRpCRP7shXhUw3G28Dt5m2j4p8LP4xCZEpPEyUGDksc3Pv9dLZiXhEYd3p",
  "key18": "5PPa1kEZzckhPa65gsFYdxGuGSKFivjeam8wzAAzatJsia48M8p8ametzgpYYVrRCqvSc2AtWGVT1Ld7u1d4DB8",
  "key19": "2xJ87Sv3QudD8LTFTTEnpsNi1XV46qxMgAtAgB2ixjMeWrzBYzc7LPZFpkZ2NpKBYA9EKFstWnH7XTBBipfyQ51h",
  "key20": "25pbH2MWeaaGFrwgaCcNFoyp3AxSzsfMixKsVdQz8RKBX8o6tEy4mr3sBKYEv2DeJiN37GdDx4PcMrPgYzYHNU5v",
  "key21": "2SPf8MRkjcLF6FMcnmHtukhFnqEixooneGjeijZTuUam4EcodSw7DqXpYMwfSYzz7EV8eC5unrfovk1a4GNDRYTL",
  "key22": "zzWf28CTmB8thWbGALgg9JPrcjCkF1yosz1B5ys8okpSYV48P6mxvQox8hAQkbTzZwBCKNxK7PZYzaB3EKe3VFz",
  "key23": "3dSoQ4dhayvMKvDPACydzKjKbtRurNaphXeZtoQ46Hbsv1XiUgvgFRHVzodZYyXZLsEj9idM1mahnqnkHBwuZsGC",
  "key24": "2kVLkwK4KY3xpascPwE61T8TqUDugF4ypDJYrt2FaWP1rCXZh5bbzJSt2aEY9Qu7qgtjELDgPjN9bNwoTvxsR2Fj",
  "key25": "diZWAdFe2izvVUUVHbgnLZoH6eqKu7XTsFWbFiL7MJKckczA6FMVrvsKgvJ8bJmgjTWcRG8es1pKSvFGbrqiZfK",
  "key26": "55Y6vraTTe29P3KeJEsBvE2LKMed2HxViQWFfawM6FFgzVvSNY5naNFEZgMze7adLcG93ywQoxs8u6Nr7S9fWS1Q",
  "key27": "2xHcsg49dcBrNFS5uFcNzoVbCp85rerrzPtrwNcsmtwCtg5GoWYVXjwkGtFgQnmtHkDkyVSjuxb4RB52DqG7mdnx",
  "key28": "3K6sZsN9wC6r5DL5EXLHhwAS6FEhPKdWU3zde14JBrtz6bimsKpT1DXrwcj87PXQ9E2abBtCFUkH4a8gK2itYAn",
  "key29": "4FMf27aMJddeaj9mdthsPmuN4hEGe4wYofN2u9veVerCMu4FLPMDuvXyCHWNdqysCmUAuR9HiBmV4dEiSQRETuyt",
  "key30": "3mvndguECHRPCPJqQx1wruSBLZnz6sCpQZ1EJA8D2PvMzpHCdqQcfDPzaErrFf4QW1kj6qmh8rdHwDonroQQofs5",
  "key31": "4RoEYqWUz1NS91VePysXpL3F3ALZKrxdB7L3pK678r3av3gZgfgSDTFEgzrqJxPAX9FftBwU85MgyCan613RpBDc",
  "key32": "3zeNN5qyegEuLwGLkdDBVqti5Cyg1Y43z2SmwUDpAqYxv57kw5EzejwXCh3PSepJJX5RxM5ZmQDx2cHttH89zDUS",
  "key33": "SCDULYbVkukMD4bJuw2asa2yxGAYaFztdw9KdPKCkiMpEokepiedeKsFEBhT4LGk7g9joyK5nHSoMdNfovWP7pY",
  "key34": "5t9rALMXCjqRrWBVG1QRa2AnvbFUPZMFLd35jZN2TEcjRJ63xjoyfX9VchEqmS53HF4WLUkXiuouwrKQaL8jqqSk",
  "key35": "33bxqA6wHpVyeanHft12uJ5Q9zPzzxrzTvgLtxcMEwEmGq3gJ9XbSJwiYyUAuQxpv88a3yR846widjh6nYb3Qviy"
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
