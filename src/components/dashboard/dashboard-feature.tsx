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
    "3cUL6y7zBaLiqmjeHp8Pq7DbQLtz1GPBbUH8no3kRAL9iorkkh4yP6nrn4q2WnWhsMHWgvEkhLTYmbT8ZfQPGL5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNXBJCEntJCyVR5PmRjReRYwBsbYmECKD952zEncMdmpH67dRZEV2Chg8NDWqNSyFhPMDg2eCjr6cC4ahbV8BTJ",
  "key1": "4dWozVH4SP7ycLCb7S6szHyaQaYy6koK2WaDBkHvZfk3w2aXA3pCgJZQCRRzFmQ7V9wGK84dagPKwBgQ5GJVsJ6T",
  "key2": "5QqFGjJKieiPrCEUkvui5nHXXNLZPfY86HwYrhBkSbxPCARX326b6UucSYah36YdEsLjHyxXFGFcJWNBAriFSSAt",
  "key3": "43FC2GdPkJjyzUMfEGMQk89GBK17sKF8wnWPtou5wYyBoGNnnamqRfcbMLJYTKHJ9zg84rZYTqhAeTiYSioFu8ME",
  "key4": "33mwySdt8BKT5GrmJSjejwFiKSvt2MqQL7ypAz9RT7SDBUGQFQRmjX1WVn425ayeqgdc7H6ZXyFSUAE6e6uuHyTR",
  "key5": "64LX3t8M6xKguL8UKHzjrqQh9QEgvoc1yZhdGzMqcU4JshPyVKfbhKyzqoqZ39n8aEtit4X112G1pg69Yz7vpMvB",
  "key6": "2mEB7fKjcPnYDAhqchKHBMpCgXPwUF3U7v6wSp1JDFQ3Cp6K6VakVy5KanEwZqBt597Ltf6sfqrEoqBhScqgdPSx",
  "key7": "5qqDZS7bpmGfpAumFg6Qv2xHtRXyJMZaXBGn8JHqC1LcShK8eWt1j6DUzWYYcmTuERJGTg4DALrGT8DwCuauF6LL",
  "key8": "52FySqCKnzGHiig1tKbRapAWQTkg45hecbX53HuaqtEVExSjCq8PkQvnKUgG44a2iKKHYNJirBYgeYq71bX62rgf",
  "key9": "Q3j5JjssCgkGRxGs9gsK5y7pH5gJZQmVbse7CffT1NB2W8T1RwgtMbAJQarfv1qUqbst8cUbNGuwinMcCmSR7zE",
  "key10": "gnE8Bm5Kf1fXgjrwHeN5oykjfV4Y6Ed487eXXDnw593pguZ2ijEyBscX2xGVpQ1ePXpKio8vc6b7L9gkzdmQ2Cf",
  "key11": "3cMEKazvKMGNzn81ayZm8UK8FDPXkPeTqTY1K7f9XdebtqqxZesCKk5hMznD17cUUGwg9uednox25hN9hV6HYZq",
  "key12": "2sJJ6ZgKGSt4yJFzJAtwWamDuW7fb3pD1tgcafrYMKoUgemP4SqrQTZg82bPbWUArWaJSauHbajj5sAGAV6tgFV9",
  "key13": "4KSeda43kw5DR6MsaK3PAFpB4grx5mvEg66FSegyj4FTDH5LiHPMesvvdm8CtHP8oJkEvByuo1zZZSRZ6HPbnCrz",
  "key14": "3jB3sxWLUEijhq4ayKUxZBEvcbhKM8Zf8jU2MJHiLoo2UXJ2oh4TtUhfWKSQFuuqpvhXKQoowN4q5JA3JkMJpiQ5",
  "key15": "2wXFispxwTjZTAdWkMLPZwZdaTAGmD8thq2XSqJxEJP9AwxkHvZQ36ztUcq5R5dxSvH48axyYTbaDc2WpFsKkc8B",
  "key16": "3CFX96UoWo2ucsUwHua7TTyQWUZStbVbeRYVWoCu5MTWGbXD5igfEHL1iUP881c3h9yffrhuzY6hPbDGJFVn57Yt",
  "key17": "3z8r1ADoXNoKGC7pY14LEkaUFYyjK2zPDyey3jMyoGrbS3xaW8cyMuC8h37tKiz8wgMHPuJeU1CMiArwH3P8b4Ki",
  "key18": "5JSEMk9AgLr8WTAwndYhZ81S1TWqoDca8o1Pz4ASzrGswEZqY5CaTxzQQbUsCtYUE8tKuwsgNep7F9KKgdmzCWj2",
  "key19": "3QpuAo3j2rTHmVbdscxNf4Hi3LAEtBSrrSfXVkfdgdNFwCXFUvT2KwWvYBkgv6oeucns8FiZFFo3ZoMQnPYBvodb",
  "key20": "52mtNVJ9cNdLEsqnnB6kwkmyRJmnqT93qBfDrk7gFaistkKSXzJ2tyWuGJU1oXeDy6sQMWkotgtPujjrCeGHWe62",
  "key21": "2jD4MKEoEmqDm7wN6tws1DMErBS5djQD2Egom8wbkrwqTgFdo4ptzq4p69PYvfSoq6yiHSw3sZJBqrAqvV3sWUt6",
  "key22": "3nmueW9MmCAvqd7qbgv2GrihpZso7TuAS76wBELQRa7oWDPLv98RdJ1LJo3z8pwtSproc56Ey3VPXUorHaEXXgAk",
  "key23": "2i37iVVcERjEnKfrYKoqkEQCDFZwFwj1Q52CzAELyQKmEsS8Ji5KsEzg6q6Z9WF3QRwkWMgngDtrUh9WYoHwL72d",
  "key24": "3b1nuoc8SeoEw5rgEdCWDPhSD1dJSP4BFamTihdqA8YuNvxr5kg6NAsMFDLhJWzg2SeQoouF4gJJo82nhRSY6tx6",
  "key25": "SpofJuedxBxzfGsCyC1Bcntuyk4bAV2eAuPGEaRpHJrR1Dt53aWgeCebt12vNZ8DfmwrJfUwgYdqLByTYHCvWxT",
  "key26": "3c3S6twr67ZTbvBdVFrjUjBYmjdLEcyjsJ4W3AhQ4X3fGTEBsQE4G4vV7L4rJmoNng5Jhv96JEkvcvE7TAuS2i2j",
  "key27": "3VG77ZvrMt1KQQhKnScqQbrAQEhRe2vdRMZViNsJgQquvPvUrWKFiFKdYxaYwansmT7rvP6ELrGjyEkFDrrJvZZy",
  "key28": "4g2uczwa7tRLKTsd4P1hpvS2gkeCgwCFmptiRruvzZhgJtMSuWGDHjTakBKSrstQj1FVr3oJmjHekSCUCfFon6wj",
  "key29": "5onMq5r8gQrzpsC1QnCfxNtf1BcfhizvRmGSpCQGxNVdzPyaifNMByk5pQ1imu3tSe2wzJpuQV2T8RgmpxGVQFe7",
  "key30": "4mn8C65RgT7jnnm4G1FdUogJPugpKukeESN4XftqAF5vLpyL6xRmguyzaTJGu117XbwiCmNmUmKDHLM2RYBhw8Gm",
  "key31": "5R8T4p9fatQSezYJdK721q7jJd24JfHSzE38Qb9FrnitQmU3x4L9JHtRBjEJESkhNwaG3JWtCJ4WrgRr4wfbToK7",
  "key32": "acFEXUearZd8WkxpxMBuhupDD3AWNjMLCVyNuyCG9ptH1JtmxCiUqSdoZBcLwYUr773XfWaiyCTUd8isJ3nFUmV",
  "key33": "T62qzs9ebhk8JuYzNhqEbkAYU86Shtjujomf2p78Zft5FyQSKPQooELxaSDUJQsizA9UTxZUeCGQLqoYCGBbHHh",
  "key34": "3HFgQk2YAqJbnacnzFG5qrMVP9m2QYe15psMvsbYhKwc2yNUCM5iFeMoWW4YmfeTiwFCuTdbXLfGFdkaXRbxs2PJ",
  "key35": "5nWGBxChQdZVFUqWq3Q5NJDTZgutFtFUbd2oRiJiTfJ8uAau3YTkZ475exCEGmKmdTXHzn5zoyBiwztSwhG5gd1M",
  "key36": "5LmMzmxJQ1HDyw4RALtUKZAfnFtjdjMLgDRtaBDMf9AQSVRzLMr4CtY14QHt3gzASMmNW6LmHLrtsPvdnAQCzjQw",
  "key37": "5SJGkoTL68x9BoFZ6aa5VdSnzu9bcRt5BNPqPLm78iBvTMAt9uYahN6TpNvKF3fmh46sheHjEDxLa9LmTR9ToWex",
  "key38": "4sL7SqGzzEhhE2N2PJaeUJW8KxeAXhDhovjK3Jp3c9HUgvXnQZiKuH8YBDUkehnqaAZgffvysSzfhyJou2KhD549",
  "key39": "3XuDZhGgKoBP2gp67LBtbfkoMApiMV4VzvNHFzqeywoFpT71RhSieNZgN915GfbRVJf4gyTZJogsHjsybw2Bioy9",
  "key40": "4vrxuCYyyNoad9idMWyQpMRv6gaCmxVPfRXqqfKG4aRV8p7QbTxCbwsFn4cKGzSrRkDaRUKudaa3Y7aS1wNoCReM"
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
