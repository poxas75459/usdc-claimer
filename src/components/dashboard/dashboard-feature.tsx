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
    "31gGzor2kUR1VhmRoUB6KeT1FMo2hVah3YhBPJynr2cYaBbo2x3TCAy6xkYUunjWDJtZJCKJM2r4NbT7Uc2GZVxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2THTrfEJk56rYrf7dJGv1Vq5Sg4Nrfqe6NuQXjH9xrwLm94ckQn2ZocjiNZL1RZz6ewSLZzmbTE2aBNgJD8idu4o",
  "key1": "3Q1yH2xfNBy4icUdcEjrv5ATS8VFxcJ53TtajmXGCYRvTF5rzARNQ6hnKRPEugtdartus1icRY9WFCqKPRCNyRrW",
  "key2": "3GBVHssDfaTtdGk78kNLfFTvoKGpX9RXE5QrPiRZUQG5k7t9rbsLXJyfwRd2nh5LEf5Wt1sx3rnrVvfcjMSro84N",
  "key3": "3E7uYbAedmw1Xhw1WEFypoNWZq7orCN4zhpK2srH7xzeGdcDooWKQ2TbuVtcbjAGKyZuKrfwy3dFQEu95XAiWNDp",
  "key4": "2udar987pHRkx6p7iY9mm6v8Ur1uLt4fMzvuBsf2cikdK3VmvvSUMAUxaxYSMma59XmGJyksckxSGCUnwYyxpXgE",
  "key5": "4BD1d5zqu1TBy5ertitsENnsgxwTNFWqNgpLthszAMCW2kUZUoWmNNAgcW1iGfhbFwNpHoFt6dJvwNfZvPozSJ9g",
  "key6": "4B1oUNQgBDEHpooWe5j9QLm6WAX6HpxTx6CZ9TuSg2WCvGwcMmY6Ufn57u4fp34dLWxuGsPpfdAHTPK2ur2YXA1",
  "key7": "4VmE82wZdZgPPcnSvH1qd7LPEtWKxutxeaAXh9BoLVEjRBjcZjh1Q7EN3XwCRs7drKtzsVZpBf5Xw3ND4xzW1Asa",
  "key8": "2JCHG74qPKo9c9CeDoYuMBeQF21SRnAaKm3DhQtsXUtXVGtoxFFyLStFwtUwFprhtTw6T8YifBRTWZPfQvjgbibR",
  "key9": "2UdFA2hE2Ngw7LGCvV5UfhJiTiWDCMqxjxJHeNdjMqWxL9kV5UWBXFnmFeDkUmjzqemc1JHWta8M7oD8qorCkBYS",
  "key10": "Dcb9ogdA6DojqNQATXkUnMxCyuVupiABLwBjn6YNPLSVSjZabdcxd3LbpPGiZ7qCgf1CU9FrPD7kkPz2Si7LyvF",
  "key11": "2h4dny4BzTMEydaHjFP4DNdkik8UV2od7x5YR1ShkYy7tTjEhxmRYsfXt2RKyew8U2hv1vkLxJKxX3LpUUhxfUS",
  "key12": "51gL7E4rZuX8EMSa6kVp4wQ1vBHq9V7BaPqqGJ8BUzSJcmTgf7ERZ9YZ2JHv9628QKsoPmhk95dWJaiH2LuwgxYs",
  "key13": "2ZZL1WiDzteQJGeF1iEWidErenJFGwrE6XzGAzAiKCYLMvN6rekaWGUCHQSGXaAZtCa3sQWwbEyUhA5MJdBNGxaV",
  "key14": "yzLvss4J5MDDKzGN79YhM37LgTGwzTcMjjCDxdvd4cRMvXuRAr3uk3Q6ZMNv3GXdqZt1ubNXbVVcqjg6dVihw4E",
  "key15": "2Zdm1d1MgvLBrXkZcegDqSiVqj31UT75CXU429CfMHXyNeXsK58bf63Vhd4DP67PqhEsxWfvgiUFyE9rNGGyjjrG",
  "key16": "4UvZxjP5HUSZxAed6d2NUuYpsF5o35mqeNiqLHDxGBH6hK7mxhd5iYMrQWref6zwZkkMM5JisdePQpQztp5dgPaU",
  "key17": "4bQcxPhqZRPrS9nAgSgDFMj4FrWcyQ9ttCwyfqRSBf6gvZX2Fwv826hmbB1oxnkphRdKU79qF6547r2KobJtUoXL",
  "key18": "2K2DYvdLbP3QJjW5b42dgLfSiwQqysSVxrLE9yjbwKcN7RyoCYqjbvTvYv4PXMHGZTuru2FV193NRZsiw5mpzSTy",
  "key19": "44UV4Svx2h2FX6LQUgse9xGFH8EJ8fBMnBjrw4Es2UvHrbhcrnV6US79EcfB3cAMqRQPv8kdmeoPic2hvfouJYat",
  "key20": "2X9ftVy6eHernViD75dw3e3vYsR1QCKV3SNSeUCPh8mfMGMXnME6EvhiyJwNTCCdZuwCLCUtU3MDKzcpz8ZGmqPQ",
  "key21": "28cS5ct8rtmsm3NMm3z9V5fmSKfXwQvJ6RyabqyBrViot4JXM4EEjuK6FUopJHieQchW4PG3Z4C3tngXN1y24FgK",
  "key22": "48tPMhib1aAX3fsapQ6YzPnNX55bNzThTVZLHTxGVF3w3MemV9iUFLN4Sb98cbZXi4JAivX5pkN1tFyKZmFJ9FsN",
  "key23": "4XkQSU5Mt732BfEgy987XAekLJxL8PTBrULdNGPgJJEJHqYG1tXM7WC8HZBgnMeZVoVwMdXizotcjitqRRAbHUus",
  "key24": "5pNov1hc6QAX9JKH774abYwSAj3YycpDkBXegNCv9THnhC59hzG9K7g8M7EmUcAaPezRRguoBy1J5UYhigdfYRMW",
  "key25": "2YU5mKB3zuamvw817XXCxh1xQK3nCLi9HnsR8YX3uj46YrB8w3LNu6QfJ5zTESyjCYuTrjqmwb63UX3FKgKt3XZA",
  "key26": "hD2z9hN86hVzkWYSVy2VMPm2JXd6pitVPcvuykcxrRfUHUYVd1jKimEbq2AbZztLofdMdyvq8HXKiEsniJ1xokb",
  "key27": "5ZJKXXeSuRUER6Gdnk1z97e8igVVMmvMCL8zn9WpPjTVtMwPicp4meFnDL7Brft2okYi2nQKPatMJvo4119Hv9qA",
  "key28": "3uFArD4rbneJb7jB7X1rU416Ye7EbzoxpNTT2TqTc24NWj2AziaGaEBfihzoWTxXg2QVXbLFK4TX5R8TYkXMNsvc",
  "key29": "6492Mh9fzPfxqa68LF567YTGGdMqMLM18SaVbHX6ZScrDQZTodTW2W3Nxxq6gGR9gvKYPAKBXZ9dd3xBDc5oqshP",
  "key30": "1zfA4aYjXHYSo62EZu8XHWciNRZ7jr2KkDVrseJFNe234qdDeigBuPLJuEdujHzyGMNUioNuyxipVkTZTPsEvdN",
  "key31": "2SxD2iJ17NuaykEWNWuX9sgNnDX7VugNYnQTLSeH99WFrE3uAGP2YX8kmcLYgDnmJvdTjUvWNVZGa1M4CJK88Gbx",
  "key32": "FMUCjvyynWt1iejzSzCPAuU9tXvvwtipTuWNf4tbWxUrzx8kg6S2UvQd65cLUwkuZPEoAB7T8ipdtURGGcKCvsb",
  "key33": "5nsFtxp4VPw7AcHxLEdJXMrm1zQPNspPWHh5Sz8VgRksF79biBh4LUbQzyddfWXjiu9dhJYzXE9pJ7fRAcaJtFrk",
  "key34": "2bNFfcecrNN8D84Nxouv4jp5iSscodVFgrisUX1tuAP7MqYvXTLE4hJvKQfL9JkbyEfy6suebTx5XbTi3gTzoXnR",
  "key35": "5N7pkPVLMVvEN5eEEZREYq5MQzMMfiNb3LgohbddHvzMjqQLrvcJ4f1R1hkehacZLWz87Ce2EAj8bvZMoKKN1YNm"
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
