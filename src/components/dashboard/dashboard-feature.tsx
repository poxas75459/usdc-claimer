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
    "2y84w3emeapAx5izJWcAGezK3eBywz57kAnJfwMX4qp3Lt1muyDNUHHunpb77hDzy98NABv4sSEn3bXR1eaZibRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wSKUBmJn51erEWAXvmK3kL7atHuGRaahmq7NyveoXrYs46zQzzzegELmajzH824VAjxmpJDtsncZEsf9UCqFYc",
  "key1": "zbZYR1pJyNdgaV9H3CTzTV2RXRpc1dtEdKybxQ8VrHiZgqhs6tDJVHt1eFDxpDLwBN9U38k4XqpHYWtsemLB7xS",
  "key2": "49uyHnarScLidxeFLdaxLR3Y87U8eMAtELmdY5GMtXbjJKztE5gLRfbX66Z4SYcLB6b4LedosiC8Rr8Pi1xcxs5d",
  "key3": "2dAtSKCDt51mbQzFADJaePZMF2RpuuNAwCEACM93TeDEFy1xVrnG8QtibsvYaKtgRUj2giVd5C759qMUK8wY1sCX",
  "key4": "5FZy2dtiypuUgsPq7dUjyo4tMTwL9y8QSwpbqXfNGZpJVBbjj9DsNBqZDsF118k2FskMKWR9Ce6DrknwcVd84Hk8",
  "key5": "5gFM1Qsus9tCbXLdnbb1hspFDAntoUZHZQJ33gUGRFoZjpK4QCkMcLVoCjv9p2nTXiWYpH9zT83b6S5AJMqdRYeV",
  "key6": "3VRdPX9iEuKDK4Um42fJCQc7esh3VJxBxS6f2JCPdB44EkCfh4V61unxzGn4YTN56PqQbAetJrb9JwuKzMCwRMTq",
  "key7": "3sGqqXrXfCYjNijMd4YCKv14BnCsrzzxpveXn6SaeA13ZWadWV6mVjWHQXTjGgnfRvipKpEZtVG25puogshAnBXs",
  "key8": "45mG3Y4LHyU3c1vECtWNXea5Bsk6EQ3YyBWoaayRxJ87xntV7SfbSPhC7YtMgwQb1q5XBi6o3ppyUhKajHnkUDMc",
  "key9": "5SNF58S41xt9tz2w3PSboEw6JaVSTtcR4LPELywrsT9w2vNkT3To6xFQWfuziBzwZXP5JXcuQ64FSWZDTVQihn4C",
  "key10": "CyRhK9aFP9MKg7x7MNoiLUzDFAwPyVbA4uwqzXLDptMDo6k5rQCGEcn92A7d7EnSea9N9WKC3KyfEHEwrVBFBNL",
  "key11": "49ptEPzpZfhx3e7yxzxDrDC9a5YprNHv367yyvuvQT2htKLDEttT1ayGX4JL7ZYZJ912cdsKiaRLFvbJfeps17hi",
  "key12": "Zema6JmUyCTaGCd48GHNN9FeuWMgJBDuLmVzr99m2WL2d5xFxBQt4Kz3t2RDhGPTZQyLsczqmWuyZ5MXrdFM3Zi",
  "key13": "3BN6CLUC8FsiDUMjNgKsT3USixE3g4vHNTMQN1AH2eNDbNn6PhruinJTkt4QqGkyshEZGZSR6NF7FpwXKSEk48zF",
  "key14": "BdHvwWkERUjRCuuLCLqPgXLMFXVb7zeqSseSZwMSZoW7wMFUZSV2Z8Z16XvmvV8Bj11VNQZugskWxEQU78GKGEo",
  "key15": "Pw2f9GAiLAhTTpv6fpiT9E1mhSZyhNoWmSNuLFKCKUK9FCpGGAMjQEXwiBKGyHnZiCZ7eGFFUq1H3GNYKHkacB4",
  "key16": "4XCSaQ7iwvTrKgCbFMfqQkqReRm7v6Mds4jcaCx1oGPk9gFDMFt57FE88GpYixtX6cpyNMaG4ZK4sPAYX4x429uM",
  "key17": "29Jggs6rR82xouQAuiCicpMdGQ3YhhL6GshXtqpSwMdhtA7EfukcZWu3sM31sh2dTLxzdAz8bmxdqkND3kbQUJJS",
  "key18": "5j1UMZsEXv7YGKr5BhZgLDRZHHaVKzK2igN68zq6mqEdd4UL5WYEmsA69BsKrZNav2ZmiMm2qF1GgxYPNYWSEQdX",
  "key19": "58Q7u6q6W5oqkYE3jXZHLLSKeucaMPPL3xJN23FU6YXsnoXSTA1eVGJhR7FcTPQw9ZdwogJdpJ35tbbUzgVPviDc",
  "key20": "4g6vtQN6GKjK3oQ3JSRqzfSF7dRNV5uyEhMd5GY3guk2fkEjhXdxXDUe85xgZ5HcFbLtetPTNNPZapuhBwhSdX1L",
  "key21": "2VvNgkm2b9HZkD3pQtoAGp1aXw5BLWg6JjXVasitmCV5Ejb7YbAXxardEWsrkMHbcGXByFTfzUST3ngd6BVXsDt3",
  "key22": "3RWTQG6wBL2MevkS9od4bJyDdJW4rnJu6oxwTkpzsm7tSKmYHJSdYUbyaoB5NjMzi391XdvhPD9bUToTMoGSsryd",
  "key23": "2kziZoRcaiiq7BfeJrQs6cwLtdNqL6xeKgFQa32JdnyVENeCrvpysJXSYbHaEKWdAfLbjAWuv8CPJMM6Ss7Q8JSx",
  "key24": "4bbWzuvMvLU9mt3VYSwi3PU89UnUGrmkQ8oh7L5ANBuvMvwPBxmHRdvmvBjYKu9TTp9cKFQMMjseCgdnahgnCdKb",
  "key25": "3WVgpFoFjeZzvyZCAHwLPE8ZsLbkr2zpbYooLy1QbKqfn2fYhT45tFGAYALYmtyB76XqVyW6t5QdjQ3MwdmBnExD",
  "key26": "2LGYh25pCZNSSDshFnyRST5MMtQ5GwAiEaMDZUAb3Bg5U2eLGxP7Gm5hkHVQ7298mQNFku7V6D6sFrHn34tL8AQS",
  "key27": "2M8UivJWRKhrd9mJiqsJH5XhLgEevD6QmHWEnZ91VhiqxeKcB6SRCUDchwDV1gwfBwy2dvhj7T5kFB5Hyhysz2TZ",
  "key28": "2yzVLoojcDLSvkQb51h1B6nATxGs9UiUFxVyhgx8WhZahRKhtFNTaKP9nvzdKUerVXkQvxwyDhjVdvSKkXqTYBEV",
  "key29": "5JLof2wY68rXNvXSVpPGAMcTNZoQSrqX348F8XCoXJMLN17X4HJLV2hDnsu6SNrPuqrWchL5XFWGMGUbghi6WgN5",
  "key30": "2nW6WPjPgd4BphbHCmFDbE8tm7awZTx6fd7oMdZ8Cn7vW5Tp9hjkd4MhQkHaMPRx5iP6cJTqUrEdCGXxYYusoYME"
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
