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
    "4vWmyEySnXPza1aXDnpU3C2KcBhVfUDJWg1q75XErAQGwxnARBfL8pKtoTCpQCPxgeUw68ELeH5XeSiHjgZLeFKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51p1wW734GjrJsPPi7PTw98Dc1HTmJyCyP1bm6guHhrBLPZiPKkZPZyHdbM5k9qWH9Ujwd28RjJBhoYxF1FAUgSX",
  "key1": "3uGqvgoW7BhZ8BxmEMnXSkQvYJutvRioonzMxZMiFZaXweEGMpfJGY9Hfg7iudq4biseF6752pg7BtsdpupfRkS8",
  "key2": "2Ndt8mStc6xe4aasSZSsnEhcDwXgR4y3P7dSkzn3f85gybSHkzZV2cQXwEANgKpFz654QFBPQ5nnX889ZmSQTe3r",
  "key3": "2muqtFLtBv4TVozWTv5dwGbj3mV7Yb3Wq9G6vp9yojniPCzCXNNgDtFtiNpL9wF6ypjLoyYDQ52sVB1EugRDANYJ",
  "key4": "3BoKHP6YyyddQcYyjsabAZu8xerLfhnwQWcRnRRYL5E4YAMLAUVA4LujtyvvLwJsTUuEnMScpMWxoCoA9FrNw5Cx",
  "key5": "5sJeiwfxG7v24QhUkBHRtFXVWskyXFaAnkxnrWBwhWL5iSZUccgPPNqA2aKj9giGgvdjcAxtnCTkzrUgkvgGG6DY",
  "key6": "4hkMjP9AszYAsoGCpaghMVY9v6YB6mWwjgTQYUp2agYVt6o8Yqk27GcNaxx8tfZY8z8hKzQnFCgchxd85sCpz89A",
  "key7": "2Z5AFbjqkRiwhjR6PLPAfR8yBvVsYSGoidwYXbBJkXYMqZXj5omyTCUQRNjmk268ZkQ7psGxWcfQzhV1jMWoCgqE",
  "key8": "2yqVYKFqJ8FyqGFc1JWig2DCMFuHKYSxwbZpKGfex1gySvbdo3guZ9u4eFKjco4LTiyGuzSZ88b1TShscyD3ZG9f",
  "key9": "5ekGLCjEGydzCJG3xHEEqeAE3QCTjtthp5o1R5aGz92GdheFEkeqPEayYh4W6eAwux453fysoC1nBtSy5dCfzwP2",
  "key10": "5xAbp72aZGBoEkugkC6kqsHwWsuBQyVhWqAd9szK6stVxc3HyzjSQV1ZNu7R94FdU3ZN1BFj43SkUq2vqfda9BfX",
  "key11": "7xcGzTmsuQC8SRgM5znBGWBa1j4Rob6SkzRvvBTwAfyprhKoMBBd3cUns1iEekjc4zQDZ6T3NA1eVP4Lscc5Mzy",
  "key12": "Yndpst9tNZZam9ZyZPPfXArhpKbfnj68wTgJKT3bcRtaKs1EsCis2vi39m3dcfDSmzWMn7KeYbbau1cTBZBKEuz",
  "key13": "2t4QPxQY9GQ5R2eybsMcv7LhNNwiLGz3F7jM5VjyHizCcpQVh3RaE3nPnYFb5BVAU5S42SmNMHQoraxyQAgp8Buo",
  "key14": "2TsNT1zDx55LUJvh5UkaACFUW1XgHTdPuKh9vB9Hy5unZdCn5G9EqrbGsHxzo6m73WjQihiFYqMjrz5AgboA8rWb",
  "key15": "2tUze7t2YKLS91hugcNyJE4BZTqsTDGQD8mrbt82jVNSrPvBCyHdSpNW3sd7XJy1u327DoRRs3TdX73fw5qG5K6e",
  "key16": "4mMoCjchTsSfMJeLowk2oUwDATuSoNjjqJFtYMfQy4TzrnRozMcPoQ9ofJfmVu3iwrMVxW7z3xuhE5tfmUZUxRk5",
  "key17": "4C8cR5LgfGvbMtNFadjEYhFxYPPVU6csTveXvMNwpKiat3Qhq41sY1cBfR9JxUCtXbAwBscf2xpUyT1jQzNbBk37",
  "key18": "46gr6Krif1T2o5y8GKLiYifbpCeXTPHY4yfWovPrZCBWUXK8euUqh3DxQ9MDk8A3XLHXJGuQofzScezyXuGtRRLu",
  "key19": "4brc64Dvpn3wQgoKXicuHbKqW3FD9qcBtzqsc4EXxNFts8qVtTHVbSiwyKtkAh7tZKjDPnBhMh3QoPARATZtnoAT",
  "key20": "5Brvpuzpi4inz2yVPeeFdokJAfySQaJuEvEMKoXZKLgFxDDW47Q83KFJ4YkbWgS3iTxBegKGupUtonmKyH5MWgTQ",
  "key21": "42QBZcU4yznBRW9Ko4ERPFFgUw44UNySmTdAz5N9oBudfGFvwX6HBr4vfjm8E1Z7s8ToRWFTw6KQyKiBP1XKex4g",
  "key22": "3dJX11zgY6bq2qZAjocfTbALuhxhwsA8EEJJRoNSJWCnqM45ZDh2SFTJwtN14xrm7w1vdtinWFmi8EWUMUuPGYc8",
  "key23": "2z3Qe9p6HPFLi3Y8oXuW2kWgYpLfjzEp7y1iCVHbAXR4DKHRn5adT6Bq2vSvQ1BiyAYLNrpEcfDeCNaBQa8GNRYd",
  "key24": "4gqYGyMTANjGHAcUVGj5k2pu4TMkeUWRN1EMEMarx4tWFsKL5yeWHKaCCKF5m6RHhj1umQCvbXhxsKCiLA53uXeP",
  "key25": "5sJYocpgXChcdtHSrbpdvpd1aR6uiZjACitHtCJNE5RfaZLiEz8tdVe7JdsihWbVj1wSYRKj171m6FvZamBUvZAL",
  "key26": "3HFU1hGYv6oHJCtcJJ8SVFBXTAHgJFMpcLkCGsBpPuk9Uoocb5HsMV4jgZZwWuJDCJiZZJxZbxWb64emgKu91aCY",
  "key27": "n9gZkGdBzpCBKzmwfvcV7BdUjL6TYQ161EhzxNY4Qh2MjNoKvBB7Shbi5vEJ14ZUeCqTwAznyDaDPPBn1zwfTCM",
  "key28": "66Z5521FZsmyvqa6syyucP4fwx12HFkX1WDyEBdSf5CF6mBRgt5phf6XojJtZ85mxtySqD9mMiYKFNUsv33tsbpw",
  "key29": "3k5daFeytyxwWBzdnpsvEfWL4ThEM27RXaUdB4DdDDMD43SwoYL7SeyyZmk9LFJt3CPCsq6QZcwoLvDoZDqUxXdr",
  "key30": "3rTdrMaNsxD3kdBYdgHCzceqVjxdHNE3NeezFwUEdwtRXbRLV4d9XjBasXrhcqrGfuvZGfyezLsoBKmQ2vd4yJPG",
  "key31": "sP84gBz5oPSmNBYVyFa8BR2AgFg1sw42Rtjpe5ZJk6aK4rAmt9jHeukcTvUW5cdUa7Mqk3cni4ojwNnFLzzZ4Rt",
  "key32": "4BecUa9m62YGohQx823hKL8QSQJT1gtWhg8fFV2ueLqfpyFNN9YYaYsTEsst3ShB7CqWtjsmCxrhCLaYKMSQMNju",
  "key33": "66J8dud8SM7D1ivqRTYwFqfueuv68UGVjh7FsHBdxePyjXMW7UHVuNGUT6oz2P3wANydNwE89ygEsyHypja9tKzP"
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
