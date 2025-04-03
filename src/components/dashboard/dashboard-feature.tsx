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
    "q6FTbSc5TfEEDpvZa4HS5Kn2cLDN5NUZvTyzH4GYwnVrU9KXXATPVXMqFQHBZUgAXvzEZvCFEZ5PTXLDdep9kig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qL9g7yQiTptbFJ92rgpNoLnnF1Qr6ULCcf5SaBathMnb44YsFFm41C9orbqeAF84Ab8fg6je3djeVJfa1H6Y1T",
  "key1": "3kbrouodYYRwbjScf13qpB8c4VACmxgKFD8bUDoMA9sQZaLSGBC6E7yTKUJ8fN9ryLYoLWpHythcrrFnSPYEH9dD",
  "key2": "3HyZwhUMQzWc4iffateGyqq5cuSffMb83fWasK9DQbu6Kp5ewCQ4NEbYzUe9cVXpEpeTC8sjaViMPxhgin2cn4wn",
  "key3": "4FmRAtKZNhytgb6S4UYHGragBC54WxTVeF2DrNrGrVWgw6VjvAhtpz8rTKzB5D3B53ADKj5hYzQf5ELWNgqqm9ed",
  "key4": "3L1jS5dnveZ6bd5Bg9rRWRXQCt47eoNpM3Z7Ebk5y4U73rYd69LjDU4wYBBARWqBMWKsqDT9SfLkCXbqGyMoaMk5",
  "key5": "3BoEFt733aN6RxHC7uD2sgmwng5fG43k7yESaMfMxzufpf2CCyzV7WHMHfCM2X6kmr2eUy4sVuqeAhqYN2VoriqR",
  "key6": "tP6EJbSQ1EGDgyQtu4KLEgGSzWuWeJTPiNdTKy1g2tfKqrX54Lo5mG3Dw3bBEGuEBpVRLn67f7X5PdTWqoDf2rD",
  "key7": "31JVNKfEQP4RTwu9vhdrDX5gp9F7wmaVmzGBnqwuxFUSqTYC7jYKE3vfcGoinVQJS9MLfYSLMjF5yoNjdYWqV9Y5",
  "key8": "48cxA9qzH5rvcHgM3kBYt6Yfk7PZ6fZ1B3bQG4J2TnxVRs69tVZxLcuBDAvmGdbYLBnAXtuD6f4b4rxCkKdRUhb3",
  "key9": "62Dxmft3EsrV5gspseTs7bjwn18DCiSRHxvQQuynCbnT5deDDcBLYaTfJoShhmwMEvcExP151FuNErKt7wV4tSQ2",
  "key10": "5hrvRSYSgQ74H7ZwyENNEKwjeped3HZLPyM3ZcfzLyBvzLy9q55Bfvvx5mUK8WT8EYX8shoQJehWb2N99tXxUpLH",
  "key11": "4vv75eGwmicgnPSGdi7QRwq72evUczDUkXTHwHxjV5EC2xKxiw2ZccBqfu3KRnh4sQybGRt6EUjtaCT3GmNx8ZLF",
  "key12": "4c9TJSbaXP8vdxDiQQ9q8fnMo3MB7ubFGMPeFYoACGv6uiT6k6omjG3wKCLYj2C2MxV9ofp5iz81ubgJ4QfTsmAL",
  "key13": "qAevRsgX2fqCMuUcUERKemzZmf1mHHBgrunXaLYgRP9pujKEYxWcMKV39Jx1X9Gu21aXZGDtkx1X4Ae3Uvfsfwt",
  "key14": "3hMGSxVY3m2wDxRoN776VhP6BAE1s4ZrUWQ4ntSkr2q4qFTnRDprvqyr2mmin9eudSE5tNooW9g17rAvnUtj7DBN",
  "key15": "4kf5xjExYg9oYvF9GzXjkyhzvjhum75rzgkcLtexVQZiZwAgs5SgNn2EBiaMrGbWpqichCPTwx1A1YJtt5FTkp23",
  "key16": "2rkVSyP9u4xfiPJx9XrSBPT42KTkdoPYmv9WpR5EghWqMx7KKcuVeWXFnMy67HxD5bewe26iJu6fjmau9di9Z88a",
  "key17": "3ZsSyAZjmECwjtkz8v5D53dWRZiGJyod2zzdjR7oM3qQXRretCSyfExWUEtB6VnQ8Qg3vJvuqGPBAi4vCTYPz6cQ",
  "key18": "NE7J2BaSZm99DfZxGXZNb3NdJHuYQWa8GCSz24PnS1C1PtU7BLMX4njyHbJVpGvzfVL5mTLqECbqsN7EDe35XsE",
  "key19": "AeCYMaTVP1d4RFnS49oj2Sxq2kKqzhLB75skXAeQemPjyqLxR6ut138twezBcrRtRVxr3nzMMHXH4yunHwFR7bS",
  "key20": "5k6i4BD12ZJYEj3idpJcqbz7ptZyKYgk8jH1KWJ1xzmhikjafLumW9fPEfipo4soJLruVVGRw2FQaUqGRAv9NCdM",
  "key21": "DCqT6XpAX9v7ASHFoC3d21i2d3gyT9RS7QygatDbesW3Hio2rJj1MXn2YkiEArrLRbE2dNqTNRsuTBM4VNGSamX",
  "key22": "3EUETgK2begCy2HSkudG8Cxm66gTpHveUNbEGeGgMuv2FptVvbD9j32rWDoc8rQ7wERUiA6Hisvjsq7X9Ur8sazc",
  "key23": "gVdb6YRHQhPimGk6641A5ZKy6iDrmEJbsLebNkmfuJFoXzkRgSFoX3EHWUCQQgfajNF9vNcyBHzFUg4HwKRTbVZ",
  "key24": "5KTrBArLN26PgCBzaoW4oh7XR9iXRREwsKK6QG8haJ8hzB3bu4Am5ytwtmRfq84iuzzF5vMKy1RxEpUTVHYMtZyc",
  "key25": "2ZY9sQLTdonEKqT3q4mkgPRqmWhcJLtPCUr9BFj5eTGPY3WXCtTisPDoCR82nfWz9hvwB7zFX8DsqCh4bTC84eLH",
  "key26": "658vGimxfevst6LDoXR1fGP5251Z5aW2qTBraoqmHU9Q9TDyWu9iYdCuEugFgjEgYKwNrcgQLukLyaP3ZueLpfxH",
  "key27": "2iXU7apjAjjJq19dYwda5F6PfbdtTna5LCo8LmWfA2kDue7xuUXpexsJpBo3Wa6hfjnLMcyvJvyaAFie7cttnhrf",
  "key28": "632nA7M1o4b4Gmus1DDa9XHEEaTGqembTsaxBB8MFtFY7u4VZtwUCgVxwC2gyD38535amSx5xGR5vugjRfB8K1zZ",
  "key29": "37pqgy2b6R4fJo5UYkTZqvGBzNMF7ybiRTx8pCwGfXeNyDif6mA1HysVXJBPuu1hPbGpUS4N3kzq6LziMZkjiRZ",
  "key30": "3bwF6wE3eJAKbFn9GTpvQ22MZMTJBkYhDi2z9kwhLtVhq1L4XWgvmRgGgKo2zVWJ6wjjpugd63saVpi7qhfW9Yf2",
  "key31": "35WMrbp4qxw3wnE2z3fSFAJpfSG6V78F8ms6UeLXXBz16fS5JoeqXRSxR1ogyY3fmoR7JwETdTRqk5AMLKup56tC",
  "key32": "kWJVewhnxzkuvKJRctDpmQE3pFJtgxHznXEZH5BYSyrRTxTaGBZWS2PJLgVT9Hzs7VhMpzfrtsAtZoAH6ybW5A8",
  "key33": "3CgGkxwtLLbwweyzCo3DPJ4vHYUEKZApBckMzNn2dai62CphrvwbB82QoXZi4crarNfYixHhca7Rc8UQvRena4L5",
  "key34": "3DeCvowrabuefWpSxMq7J4tjbEyB6av5HdTLZdkU2Vrde5kgk5GBocVUdy27igs2zqCRadSfcyTfBUy9fSpAm1dL",
  "key35": "5N4uvVe8cwyVL1akmkTesPdcj1a81FVzYq6SZGhhGqnVF1riTNRAFksbCkttMqvyT7KSAthZnMbeY3vkf7HUYfh8",
  "key36": "2H7eo351kTF7r4EpRzCEaAwzUZjSZCjpxhQivCTEWJpc1GRHp87V4b7PMmHmCdHDs7hd2S51fGmGcNPSEN6yThg9",
  "key37": "oSF8qgLD7ar8nKLnDDruaVE72gQ8s69ucdso5hX2gBKAanVE2SNXZnd1NEr957UXunxwfNTs9FYuUvMV6nVh8eG",
  "key38": "2bJ5n1RRBk4bETTCQZBFvaj85ff588dFtPBfgaycDdNVHaT4MYfJA5LdokuHrwhtTXCVEThWw1umqH3xhgcCgDWh",
  "key39": "45ssEnPwJt5zc8EFdkwtx8PVRGkCuvfmd7CCU3yszqtL1BwwDwuVvzvKxXNFrTkGW7CQKWWEQAVSHUwGYKqrifRn",
  "key40": "Z3kNdn7xaso9ByncyRbWmqLNQxqPt7BBgs9YHGpwPZYr4JGZaCtaD841a9BBJyUJdhpzxcYNafwx4keZwbL6FcT",
  "key41": "3WmHfa3p2n4LM2zwiuDp2cEwU4ZdMsQixcFNHkv8X7AG3eKh2r5pz4q1H76t4SGu2H2ej5TVh86WW4ANL4Fayt6N",
  "key42": "2bka5FZ4VCrTh8D7Fi3oZQbPMzYN9PxkMjYD8ymZdRWFH9VXfkjpskeTUAYjNpYiozYD3oAzPjZEAYYPw4fUWKAo",
  "key43": "tApNQG1oZMyrQDRom4CMteqv5guKYLiik78DGEcrmtdhYgiCe1SsynQUAHmpUoxWeJtELTWQyeP47G28Eok284r",
  "key44": "3sJDCM69sZ6fEPA7xjhxox11dxqwupTm6oETw7QYr5WXo8e8Nzptzu1QoQsc3uXNKJ5fgfQ3j6jPnJzzXjarEga2",
  "key45": "5mRCT6VXVk71DsUYFDK9JLRRBQUUnDEttCV3JgJS8soowo3rmzrChbj9gLozGkpbBb9bjt5ZE6DS3jXfjjHfNSyZ",
  "key46": "4oMJwjMannVh6175VFbVoy4kPTqDLqw3poHnLEL2iU3b5BaDhNAzUzUwpr4sydc88Ff9gyRcPYpwLQ33vFvoRGE3",
  "key47": "3QiT1gsVtK4TCHo9gxfSUcb8tAmqwcxKgycSEn2TiiZbhLZ2zvSJ2BbsVFKH192Mqo31RfBt1S9yukESqRnZ5rtv",
  "key48": "LypRmp8PL8YRQJj6hPs7QEDX3xj8GHfFADHKUDyQbSKEBWzWJ2ycEozutwzdy7yBMXCsMhPmvzW6NJoWk9V592Z",
  "key49": "63A2xZ4D3NCnwy3nxim7rwwQoj39r4aKsSmNWCVDL2w7w6yZfy75VzEVXR7Vm1uLk1u9nGGUE3UuiGDeGjwdp1v5"
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
