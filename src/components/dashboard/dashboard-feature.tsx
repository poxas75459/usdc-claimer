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
    "BFLpVGZzJzYXUprn6y3cZARdPw5PbsYth6qjkaXqWz79E1W8gMnvPzf4CTGjxt6zdG56wAXjT3nowPoCc71Ag5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NzouzUhNiqC46x3ee8eUtD8GfvvmGk3rEoghRQRuuwVrYaZMXyijMkMNiKMVZs8qcQDa6FCa3Q3ZUfyjEAbxMZs",
  "key1": "TssYz1vsuPwgxNiUfHJ5vN8kUmiode891i1kg3k9vSVKu7yj3con3Js3JdbXah8KaRY3E2eRH5AjPwxH47YtXPN",
  "key2": "621sJUS8dT62oPbHuruZTsTtfiEaHSNs6h3MKgeCfYBGEgkYCkKEHuDtNz4bXsWbMoSEpFjPLXqoQETXk1PURjvq",
  "key3": "N1UdkVzF38huEgD9DfzV1v3QVfmBhL9r1ijYMehbAfMbEomWHbLPfJmrSkW8ry7auQbbos1A18qdE7w3vKzuNmh",
  "key4": "yQMVJHh7LWMeYYejQAUrPEXWrVsTnucwrGZkoapEGDMDraFz2FizLghVBQELLSwZRk16ZHaLfa858R5sWSkvGKS",
  "key5": "2B7A7CRBUTYMtgbWFzGdaFYNg3zmEU4agWzARtihL6kaNAoKJApAP16NAmz5Eh8kZza7FBMZnLxTZ3Q7TJZP2AAR",
  "key6": "4ULRticCZjWPAHDGSoyvvDVQpH5SbUVg95H6yAnAfv4timQDSpjyyTBFWfFktU9giVKQ7w5jsFFYjCeJTxmS8hNM",
  "key7": "2SBAkZTsM6MGz7js8bCD8R5CHbhG2e34uw9hczwgd3CKXtLi1VswnUaurhzMCfnfc6QKF81kQ33yU3TcyMm7U5Tw",
  "key8": "2pHDmu2duDPbgJ8TKy4tCbe8WHZr6ftUoEHfTTnfnJBTNxpZu4wWi9rXoTUf8rD9ePAxNa6oLv2wpEt5w3nSb4bv",
  "key9": "4rs26V3SHrbmsJsHXNcLuQD4NyQcSp3RQvbvDLZH8QCaDLYEFLYpKFj73gvyPTrqDM8JNxZLeoUd9nch4MUkYfM2",
  "key10": "66AuCF3CLccy6XtSzfDP5gMvzfheciNk7mkh2sRqFGL3kPHRonbouHk18xLe43u1ivRMBefy624poEdAjbaTDY4S",
  "key11": "536YyydYKbzTmWLrY2iFgm5a3ADM8ceX9Y7y1ZEEbSBtfhrBoEXfGDjB5UiqZ1waiZKYPsuK5fjYui8EYmUd1HV2",
  "key12": "3bZRCZAZ9ugv5DRQS14MtxLnkJjaEiRPwRmkurZCmdiGd9Fd3aypmrpzDvyNUzHecYFpBD6kuhMjfq5ytXUN4sR6",
  "key13": "5fiBYzeD9FXLF2mung4pf5GPVVbwj7b7o48sAwzf8DTYNJ11e43Xb3wFyritcfw6YvDv5PnqA1nmxKYN9mEqYFQ9",
  "key14": "5zXB8TtMVoqTxjsFenz5faoRQK4Y2BDQWA1ssjxup8f7Y1zthe5HWPTmhvXoHiFhooZMFPLEuXAnSPQ5dAbjTcM9",
  "key15": "pBGHkVtkgiGvs3HqoQYwgbPHo5LptWA1W81vJ4LHfi2gcApfnHtNrWqaEVCFUUtTXXQfZcLRZZAMBde4GhcHKUg",
  "key16": "YDYquCBtrvKri2MZnJ9foZ5AGdV7NZ2AgvAS8qzDP7zjYWUap2ZmG46BbFk9pgUwjGyXMftSfs21SifTPgqMGGf",
  "key17": "4wkxD3FiHqwJ3qFc8yLVi7hW1RCmXm3ffNJFThTZ43FhsqUMpM8aFTqAVFnSEyKx6f43Nu9r63xKLy8X9p7cS19k",
  "key18": "3maZwjpKSWA8N7tX7CWJRs2DAu42rscrS7vSVVFLe5m5BtPtyjJYw7w318cJXRBLfA5Rx9RovJkVp74hUfpGbJ6d",
  "key19": "36ihHNPB4xxe9Ga5gqMrULfJZdXSDK16CuZm1Jmh5EsiLNmDzHUhKxKqfecDTpUsD1SYzc8EkGRABW4He5UMhWVq",
  "key20": "rfbTifBihArC3JCKDMGDnD7fEcaGMehY8AJG3ksNgHVCAzhwZn5APr1bZyrGq2jCfmfUXPu78z4VRuWqCNGyjau",
  "key21": "4Eo1f6pDmBBLVxAsoYnZzKxSPgitQbA3SqKekYsmphHmxN7Mipx2MEwZGTU6AffbNFQGomv6w8bqWcbeG7nxmQAg",
  "key22": "64fyUYJMPHWucDf98gvxpU9KXcZG8HZxpoK8rH6YNjraVdsPRN9189aQQqVyWcstczBTXYGDpq5EkBE5JqqeqQMz",
  "key23": "f4wHd82edziYTe7T7vxWzRa3ZskckJ7ziEzZRoriSUJfYV2KWvStkRMK8vu4KaiAy5GcoyzSGGXun5Dsw7imXnM",
  "key24": "5FSbh253ftYZ88AS16kZsDcakccifRFP9b8rP62hnHSD2QTVdTnBeLVHJukQ9H57hN6jjTa8QNXgAhgFvQJT6AbY",
  "key25": "31aCfap5nKezJUQoCTwFGWWqteBpMcth6V2pGmVTDoz5iA1B97TYoyVru42U8tSNRk5B5rBmqsj9yhAx4KV3gEoo",
  "key26": "D1F9t4SGTdZfg69P8ZrKDJTf3qagnbcsM3LmXncb2npeoysJayDTGsMo6kPU14bCEA7Na2992YjL3exgxVKw9UA",
  "key27": "5HDBEZSqTJGeisTV6N4y7r6VBFci5gfQxL3Rtbasdzk8CT2rFE81Ax4y5H1dWFbF4cD9wZbbDLKFVKruEEMdVokf",
  "key28": "zmz67TbSuy1UBRMKS1qWnAsUvsPdSPTtqxg7GLF27aJH3GmBJGGinXLhCGewvVU9G3MzMoEwkGoeAA6DnKszsRE",
  "key29": "2SKGHDenpQvvr3LnsbY39saH6zfVVhZ8qrd9cpSPBcQsUqJeGrkYUhhw6wbgUf2RgqjDgTSJkLtJh1z1M2pSduMz",
  "key30": "xkJF4c6qbxJmBw52WEfJiev2yT3Ln8ePtgwEp6rHbFZpcQTLbSKKctAVZr9Azr9m5H7JJXLebsJRiAyNQNQcbnD",
  "key31": "4a1a4QuxgWyfzXxU2YAL3ePbJa8e4g5GSZhkjkgbEGy1EqJN2tfdZoTHJQYgdhSZ4tiUraZD1HSawsLAuNheviEV",
  "key32": "5xNRwkrgN4TH7FpYZME7iRxu5RoARSPk7jAG24SSmfX5V3PMtckGZVLRyYzFKtPhnYrPuX196M1WhEe1Ag745MMn",
  "key33": "2nzT982CQY92od71whk45HYMWPKyW3JeNdvnt4ZfNTcftYFiCcB6xMDvdrkdSzwTmdxM7sQw7G61SjRdNdrGFP2D",
  "key34": "55UWcaGuGYSuKZ6tp4N81DJDhMWriWBrPuCQrHiRCZ6C5QNpFgwGQsPmxiPm69ddKao2uR8Kw3eQ8xHNgRYaUchC",
  "key35": "jFuzzkuPFETYbG791jqrYJCaRt8JqmKM3wGwF6JNWSybePHn35zBpMFtsHsRHaFAE8UCxJR6d6xiK7di2xK2kkK"
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
