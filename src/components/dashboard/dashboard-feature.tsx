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
    "3pvmv2gPMB6QKHfYyg73wku7Efy9MKgyBj7emrwsTXFNaTfZbiM3v57nVazNLAqwvX2p5joGXtkFPHMpXmiAz5XL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aKs1K9oruj8JDzwESDWC3XCdc653XUMSNTbUAMMZYFLDGSGRM2Jb5qDcpavW15reQf7oQVLqYNenFu3ee4vNY5K",
  "key1": "3p2jvAYTqZ3M5raxXQfjfFkZFxX4zqPR6ViAykEzviiL527pr288TEaxUeYEbPianhNRNwn9uEwWzxJrDiS4VUUG",
  "key2": "4k2uWWwRs1kt7wB1UVQFjbLBGxaBzXP18ycuwv9ZWWVZB68uQMReT8QqrXxoz4Lgrg3ErspKy6occCEjHkErF1ze",
  "key3": "nJGjraQ21Z7S7AetgUUfq3LZtBth5funeVDyy3BrWjqSYD7No17RsE7DLPjGabXL9semLRV1xjEdpfP3yG6VQKa",
  "key4": "4sZ4SsKhJFUEDpSLBBg94zMZtmFUuy9hKvBRDvc7kLBoFtMDctzc4qeDchfFQmx8prsC4tp1id847Nt82RbpJSpu",
  "key5": "2JBsMUvKyA42tVxEeNJibxC4rMmQwP5ivoR96LJzkWKc4DVb74dJz4PFaxVEszYDUrp7fzbeKs6SDUNT2o6CTS3v",
  "key6": "5ratW5Nn34BDs2PDPCdjvt1djYsGSQWYE2hkWDQDrhefsDpt811F2Xrjn1zKURyLqc8jwpr3c6kvWqgPeJ8nbeFH",
  "key7": "4CVifFLS9WuNsvH5w1J5RMuWAUxtozPha84rTx5Wnq4SpWBbFuwfLFVyVnjCBxw2znJg4bi3DuAurfGuJbmmmfVb",
  "key8": "EC8vdNR2SPhcjiu6gLesfg4EfPL6SATaTneJaZ12Fph5HqBFR1atTk87jFpXnA2sRq6bg2VtwrE1B1LxqNY1p1w",
  "key9": "49oYsdZm3Em9DQxaZAoktWZP7fAXWspicYyUdmoc7R5TsWFCqnrzQGJ6Xf3Bt7f7dqZ4Hb9UR8QCSjRdDuCRhbn7",
  "key10": "36QM3U3juApBXdNjqMwKeSpGSysaL3v2QTaN6UQC3bYp9ZiSJvwbfwgkHbYP3ofumXS8vAgjAuSMMMz8VJC8E4W",
  "key11": "3PzAnRXS52LPCWx25AT3Rau4chhbaykkP1dPn9mn644se7LAzhMBUJkaKCRj9nxFnk2Z64W24dARHqJjovrPk4yZ",
  "key12": "4nnrtgp9m87eHmr3skwWGaX1aD2eUiaNzcHomK6rMNdC2BuQReQW3rwJKvvNeMNwCbC38xfLKGyMndPWpt9btiMT",
  "key13": "44poibuftxHwtVnszDcN9ZscQoQRWZ8QGHafaDPSoifZWGBZrSWYmF48qM1nU3EN3VEpZS88xDfoQ4R3ZSVeDkpi",
  "key14": "3TrYp4bwkVKzU3RCrdmo5HqYfGHCavkxYaeSoWwaTSVBD2oEaPSx5DXcwcWEHDxmprDDoU5msTmgJBVjJsARqqRw",
  "key15": "4Q38ogU7ekQWHwTpYp6JB3FLZVYBW2RkU94GkY73ZWD4wGq8HFaxgkBKrWiF3d8Mu6m7D38DpptDCMGFrNr2gwhq",
  "key16": "5zK6SEiMene9sFHcHft4WAtUbgnZq2xtkGFzQWjXQcKpJeFE8nwEeMG1jgSxRuYpDJbypHHQKvvVsa86CESJGT3j",
  "key17": "31modpLWNjJiu4Ge7oa984JGpDe8qkwgVrqYiVnGXCXggotP9V9MA6QvDkJwmBetWJbytrTvbzD2LtoRQED6JYiN",
  "key18": "UmXyhtousXf9AC1r4y17Qy8FikaMAiAcRzM6ro5jpRDs8njoH1AXV1rzTKGib1ERAss8Dhc5soMkth2avwJAUjP",
  "key19": "vVpTswnMgQqDnBSB2aEfs9oQyvS7gTLHhbYi7SPNoaQhVy2gEANNjHaEA513yv6qUu4iREC9EE4rvWrTeJEF8HS",
  "key20": "2zrpeukt5AdURwwTgSQ1u8bJGkXdTSnosT9Fc9zVUVeY8R8ezGQxRqNAN5HpRztJ83MqDF4kDPTL2scz9hdFDCqg",
  "key21": "8LfnHMqSvZzSntX4aukziiPssXkq67nv5MMuRsfBHmZMvKjxkSkn8H2e2DaSqarJ6Zgjtctywf6tTbzDGtZsgLb",
  "key22": "ZpzjN8g9KwDieY4Fwnnhoy1Msc3aeRmzQeoLWQPhnEm6qZxkqgYsqAmJEfXdGW87EtioBLkmkuNRu8uQZBjZi97",
  "key23": "21mKXG1RjkMd5ApqKFuYC6vkH17E2Kt6U6g6CkRfBQ2qvx7pgSFQwtpbnY1m19N5EgM9vNNsqAJdZhnCwTRCbgZW",
  "key24": "nxc86ruR7KestxYM78mNcULF9MT9ejcayVA3zKpYaNT9Fmzdy9dcmZ6zYr9EmCTcZosVHc9Gq3DDhPrJhHLcJ3b",
  "key25": "3UdBcRW8BZLRWnHeCZ73vtXuzp41CqV2ChhyBoo6ji8saWVsJooRBhjWgHEzZWirJHNxUPjQ2xjfhWpfvbikF9j2",
  "key26": "sR3tjTUJBP9ppQEp6J7SLLh3fUaBWwaRN1WCuf7MR3bJF92KR5xiCX6ACATvLj9MckkGFNpPesdd4vTkm3xmR8Y",
  "key27": "233H7hbtgPzmre3LCrsxFrzK15dgoKqQi767PTgvm5qWgQiHBCkN82NHFnFbTTo6FkZMRriCkWRHGDvZYNCqvMmu",
  "key28": "3JrGzm4LL75rtCx5jPyFWmXfnUfJPVtHMm1tDG81EZqxFRqttcntf2G2KvifRt3sUUaUUxcMMoVtTy91TiGLV4MP",
  "key29": "8Y1T6MKDBwAQJ8bmEphMHwd9d81Bg5HoJSopxVLgVCPWsxGyUH3XeinoeNDsPk6pfpQhA4KdgfPYwRpTH8jgf8U",
  "key30": "2vuMdLMVTbT81bi4n1WbMZMKGsgypApC6bot25JtKZjpWDK94Ws5airZE5fRAhxpnunTX5z1qyLyu6oGAyD6AbVx",
  "key31": "4NeuzgTiA6cJTwiGRuLa7peDj9b2RajBWrwzAR8TzmrEbZKYeimEvFHrBvFFvKrFV1sfcQ6kuSHSADPpw6pscT7H",
  "key32": "4JZT4MAdhaxJwahaS27npaYCKUzL6RbmHPSevzWFLcSwokYJsjeW1Kr1BhEuAyKjwwymgsameQ1cjsxQYUFUbyPk",
  "key33": "2WRDfciN2UG513hVFDh6XgSo3rmYBZmuvuNF95BHQJUqEUUfBvhPAteue3LjVya5VFmHuVHALmivvxA3ktnzDtJf",
  "key34": "2keJzVopoYU2kErF7N2wa3U4Z5VL9GoVYQRjcCD3V9g3Xd7Be75KsN6GrACpLDkHhNEY1RHZ37GxrsNRvCVgKajW",
  "key35": "5vcRPLmjNzWWAocys9kG4ZSXR6Eqb3XM4GidAUpuynpHbzBJaync4y9tPDqPq71WgvDKSAqVsKLbtmCVY4UDv4PG",
  "key36": "2Navvckoc166w3wzLo2qeA8BmtkjxF3ebEXgP4cwQFQ5imDRrvLmKPnQvDFvD8Z5A3Tkspm6fz3vPCCg3LF9szo2",
  "key37": "36rG9nSdZfmWZWen9LYNdoPEVzeG8mJduTRvaNjxTkKE9ghmHg6iJGtrXT1MwBXrq5SD9PZF6AK4FKGtWh8vkdUV",
  "key38": "3NG3jwEvzf36Cu6s1MuKRvxN9QB57XmLZJXov8GgwPVzjpeDTvCWviCc8VSMBHHMrzPtZRKpzH9VYwRHjnhXPCCG"
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
