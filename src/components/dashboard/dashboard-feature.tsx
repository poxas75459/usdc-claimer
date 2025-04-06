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
    "2DkLH9wdpPyLGoVzxjx58rjgNLMETK1irDc4ajeJwFC4tzfihWNbduJ5ykYpvdrC8oTAb5PLTBt5BPpy3RdA7ZZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ed2FVyGznpTXNHnhfdrKdmH53cSS4hh9kYhBCwLcKNKqkoQaBJfMGExH8BRxDtruaR7quwiQ8htahDnW6Mi8Qxk",
  "key1": "2nxovTP2DkSBwdWKWuUP9uXGwyUJi92ujfUwr6qZkZBtzj9ewoG3z48D3VFPbjNzeG39GNwsChmga2vr97wWaepz",
  "key2": "4JPxReypdC8Csx2wRdRvEZw87rmadHAWT8GXfEHdSpo3d9aKjtLKnnpu8zwrcVQ3t35MLBcGS7wzp9g2KLRAEpH8",
  "key3": "4AxSvdULSR28jD6JjLYjPuTqTTMQWWdUmi2AWCd5GdWXi1uDeRRCs4ouiuHiTwj5qfZM5h1k6uD7DUwJaZH542GF",
  "key4": "4igNy3Hn339TewLjjD1BNcvhoCcwiinmL4FpHceimBR4qr3xaX1vbyn3GrjtMM7bL222FVryVuH35ppjfj1NEyoH",
  "key5": "3EpNXAENTgNUbwGsmkriQvaYBBG5DE54xeVJeSFHkFznnyZSDSVnUf2NphUHR7DstwU8Hm6bPSqzhmgYik9cEm6o",
  "key6": "WWyaYK3Seb8e6WyNXWgs2rEMgyn3pTPwiuabjny3W8orTmcej6ZPXamKTPmBgiCsNLB6tXchNKU2rsW7puCpDPZ",
  "key7": "5CkpU9HVjFP7KzHwcPPb3kHvpjLNTRPpwkHXyxcVg9xsM4eVxYKS9ehyF5z6okCdiJViKTVwYPnE2PiwijNimjg7",
  "key8": "4JnELHS2qnqkxonkoNN5fbTWvHaJDA5rmBUPTVJkg5a1MGHeodRQnJn6iHd7CkgY9mk3auskJ6tFscoF8RATv6aM",
  "key9": "5voD1dEpt3SjFRxdGsUXqCFBCAxufhbZvubhprEQ4kn1amU9oLNnypDsYpfHjcJSqsvQyKCUTaQ2ZdabRQwqcCic",
  "key10": "3XxXtr1G6SH5QcNVTHJkdomQY7Ds1ws1APY1qJuiHKdoTyqwQ1WoDBsxULNnEQN5ZyH3kaspWVdPPiGYQ8P64y1q",
  "key11": "5n5hzJRe3sAmqW6YyU5TBXFZmY42m4gr3vrQj6oe9v2pyhG5ntzFjyrxBQgWXNqo2YVEM2vHAvgyK2jAVYYUQyPo",
  "key12": "2PDuofE2BR9RYjH8bq1WS6xSLpS4jRkgHMFeXe2YxoXDxpy8JQvSvNnaEhN4EGyq7BLV4SS93hiWxs69SJ8jzuhM",
  "key13": "bFHuwDgEmdp9HvLdVLJrDsMXxQWU4jBSrTE2Aezs88wojNdzytaxShzP7FBAdvPk5bR6bfL63dpkZ5yX3Zpa9hA",
  "key14": "pEVycSaMu7jLp7CHGeZ74nbeFHMsJwwa2JdnVMKxmXTgiHe97QGtx732FoyPxjY9YyNYEKtXT54eMmZWM1e5MnM",
  "key15": "3Qr9uY2ZdAVGPW44UPrPYGKu7jgaqj11ppqrHZxsCZFvYjfWDiC7VKS2VGDL1y1k5zFtm8KJ46oAuQeQ8NS9nRhY",
  "key16": "y1mTKSqA9WQSaKm8AAEwSPRYNLpTy5vp6FwsA7RRCsbX99mrXjy71STGHZtgAoxEVpPYpHa3j18ZSHJLXrH18mb",
  "key17": "3h2uofLCnYS6FUH2WQhDTTfFSRs49RY752jR8gS8HUwEZ3XwAhE815ugMN3iH5NtnNR2Mm6jiPztZY3ZyB9FU4TU",
  "key18": "2B4iyiBtY8W3rwKq8qCc2QVjmM8fLqAzRv6PhFySzaD6J2dWHJQfH5CKSDnzUgGuA3Tjc4irtrwF2YWpQNvdNwmv",
  "key19": "3Xbxm6zxsYKTjBEsD7xEc31Urr2gpzT4WnJvEsfKQBT8qsrDrL6v3aZXEZUbWL3MQsNXDKfh4aJhY6KZi3Pnd5ny",
  "key20": "66CkpEcYyPBgSGthQjyA5M97rYKzDhpLRbuf51sQ4aESfCuesUKPUCSgPVJFFoQeAjfftwX46MbfQgvo5DHFMXnh",
  "key21": "L8fcosq5CMR5p1AL3frcPbaoofT8Soki1NycwuMWAtr25qx4Tehsuu1qKAE6RDAnqUadFqrEZKeeykh49Bf4byb",
  "key22": "4KPmy4CUefmBmeiSGy1nVaQMcG7zEaP2hfs1JutdczPEJ6C2sC2mYGutTLfE155YZAHABWX8gMdS7QMPq4HsxBaE",
  "key23": "43WHuS7Auvhgb9UuhvFcayXiFDpACRpZwytjAf7qvwztXW4ygwoYvddc1v84K4f14UnrFxKPXhkhbTQUmH8Ws51",
  "key24": "3YoUKxm2aoAJtTAxtMLP2eduFzEk5rseQeqQu1CgUkuB9eEqpKmoFSNviembwkD91JypP3HWWPtq8Kf5CoeTJDWD",
  "key25": "5q3KuC8cpeSeCrKC8trSrUetVxzpZ99sGtGbQm5HR3wDGyEVZRroezQwnjqRJruJ2Ykd4VKL89G5cSjFFnoCrJV3",
  "key26": "LWyZ6JnWFzDUrnE6BJRgbSSwqK3Pt9mcXWJ3Ya3WpQKCaW4nbszmN79zQkeXg4rdkkg4qXVnMocsE76VYrqYptZ",
  "key27": "4c3rWvtpNpMryjdC6DeZn5c9nYKE9d63amvBmoSTXq5VfhfsWSXRnd78v1STnHK7ibxwohhBQnsMrfib2HQV2TyM",
  "key28": "2uoHG9kgYmJcu1rtWRy8AkjEugGRKS2YD98g7xrtrN6wPgHEwU2pPfajUK3ZtAE4frnhsmduNENyMQyv75XrRe8",
  "key29": "5hEQayDKgFtFfDXpD8BeWYnKz8Dv5yRGsH9fyyec1jBxYs8aTfnTKmqoKFGQFMCws8vEYSWur79frk87x3NJvyyT",
  "key30": "4Da2qxfiQbBscWFQPCQyedsLhqDLy1T2z9dCbJ3yfMHC5Pa2VhLcbPoCjW17x1qmy7eszzF3YX1GtKpuNncmxUjE",
  "key31": "4iV5QQcxbFUJSoW7v8RUjCJuyRAwUsf86oWFAoa9wbeMmcuHYNS2GGJp7TdGBKWtMhKxr1BwbkJWNZbi1EcDNxib",
  "key32": "1JYEBxZwDbNuAHM1EKD763ZDCWi3uG6aGkdiSizEPQ8b8DZwz64h25m36gFMqJj2EngUs3ZW5T7Ao3U144fu2k9"
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
