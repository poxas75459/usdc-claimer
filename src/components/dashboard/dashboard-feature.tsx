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
    "39yFWfxmd2qAPp6iRbZiYka6JqyP6XrSriKNtDXvTYtRGMD8W5JgL1DQ8FFmWZejCwrUFhL2UQ6c5GQmsnGP2D9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GosMtRNGXAAwH8XG6pWMT1k3NV6fPxcFpTAUP5LWMJ4RsA9C86gSDVKgqUswZwHkKw4GAY3WcpCBAaUxrCAie2t",
  "key1": "2M3Xa8cWfB3aNzQaD8kTDj3id5WTCZN8T5qi8zXitNeBUS7eJSdq39xoiGUGhWDU5YkffP77AcaPHfeyXnQvrbnh",
  "key2": "5tc5utvfSUf13k7rhpY9NJRwbq2CS9kRphSVFKNZHcBcP9SsuRm8oHw9pCq5dGPJDzgz65dL2hYXiaNr6kqT6xqN",
  "key3": "2DsR9f2RvN3HSNJExR4VvbmY8hfsJSF4vswDq6fqAN5Eb3Rd5UYJCoNNmNFgFRm5hm4UcUewAtNgmV3hP9NdWMNh",
  "key4": "41wf5fWoQkuG7QipEy94FKGRsha15YLHxADjFWkNWZqHCjBd5TvTQZfMLav5NjNo7VmeWV3y4MKfvCcjgFubN5AR",
  "key5": "52ZovvhDF4rZ6YcWUMazSSBZy2qBUQfMhZt9HsSnFif39pYDMJ6ERgZFQMBDjGeYiL7mrYfhJ874wXtPYthWXKUA",
  "key6": "3VF2wwq9X2EzzdTUZyc7TaaqCFX3vERiistE3hg7gv1WeRMpRS9FXeduEnwimSE77Q41TyJhbYWQYAbAJTd6kvwJ",
  "key7": "2uuVh4cTbJmxxs63E4TxUfS6snsyHjikG73FeBDWehtc4vRBVcKW44VrLNXixruhzWMBhPzm6zg6VVr6EQCTMGPz",
  "key8": "36vBgr3maBTz5rNYYu32MZF1GmXqjBy7HyNgkK3wuxxaW2yRKSrvoMGwsWfABneYDFbbk5XtSEFH24UrKw4nXp5K",
  "key9": "xpFwHhFRMizueGFrq18WYL5o4t8YR8dgaKKHNAD7Asytuv1bU2oCgGQUZCWWY3tmztqexps6vUggy6bvLoHDfMg",
  "key10": "4to5ApuoTjXVDb9ppJ5vYhvQ5AknAx823fcZLs5U1s9GM4YcrVAVjS8FAwunJLHRBuc6dyA6j3QRMaoNHXzNhDup",
  "key11": "UN35H3PheVbedEUL4bopaX89Powkr8EfiUNygeaN2cNa51GFo9bZ7nhTfVZWgdbX6FrMNRn6GUqYfrs7XSRtUme",
  "key12": "3KS6PkbaWoTmHbbEQjytrSRUfU8NvADMBW2uXQ1GzYoz1JMpcS6jfBXEsL4hy3CPhxArFBwVkMjwXJRfW3X1FVvx",
  "key13": "2a72xo7TQQBTkUr1AWqYaPNbtk6Cg3sF3csJCzanStCuWjt5P1jd8ZnGRTi3pWv9WgrdH6Eeq9BPooeU7xxr1LH5",
  "key14": "3PWkEsFjttQStQ3wyX3xGxuDDfBYpm7reVVc99BmbpyeAstEpnkrhGGdX1TCJeidpaRRwr9L1wopeZ3au4fogzGy",
  "key15": "fpY74Eow3BfWveTSsKY1zpCZx1KmHbnjbeQ7JTDTN3K1TaNbw5rbYx36B8EJKeZpA2B69wm7rLF1RRRuMUwMYsT",
  "key16": "44qiNsPZwNATDKdBVnPR7PqreoQ4dGKyoMUqMWb93Nzgq9bCns5FNDTWbJojNnU7omvaepWS7cxY6Tfeo8Pze3x6",
  "key17": "47EyhYs4Sxba9z2qGw5DhhBgxijWkr3ov7fpZAbk2ToFTGx414csXFtsQHohymURs8zkKEnU6whPKnDdwGxhCHDX",
  "key18": "nVaCwBZwc9zmqxPdhdS289n4dfwTCx7JDRxSNVL71YPsjWiEYc69Vg6uqgoUqqJHEtJZmCDqUiFxmU3p2JW5t4q",
  "key19": "66nLs3mDKwsiRmeqa5ytTvwLbK59DbDmFxq2KZHdV1vMXWrvvp4bANhsGGVcALdY9WHS4NjUFzNriEKFbHfHg16S",
  "key20": "52hNUpiqJXWWfQMEQ2nk3Mq1QzKaxmvaJJ9Svt5b3kKxRq8VHjXzwrCv1LBr1mEkEgrp1YUYrapBov2KKe6V3Q6p",
  "key21": "SQCvfQzUp1LXx3PfU9Gt5kVhpMMyW68XirU4caF6t8RyXyzRm8rVyv8pbjTApBezzAMKfY8biMWU8XUYnhA1ykq",
  "key22": "3VhGMCSaa2zV8TATvRcpGYWtftudfsJKXN25a59bHsbDuaZ82VyeQLh4MxwAXSRes4zkAXBrCxDF5kVkNFkd4pr5",
  "key23": "2fMZU4j9xi96VgBZmGQUTZfLhSCtvRqRFXqUxDP6YoN2DRL39u9hvufBJLFEAEXqMGFXPP6uNw8zmdfcVWXr64eK",
  "key24": "2igDu1ue6HwCsGhFQk3BtQ2f4nvCxUmDn9cEkKdZX6ZqNHhwphkpirQvTHmpUncqiTuAY6s2HyQqe6yukGW3LcWX",
  "key25": "4n5FzXQJmDJHGNfn6pce84SKz4MqVVYerAPZqEdc1DkAJ1kJN7D8i6odq1JPU2hQaDAFEr9EDXRyDa8yBNVtoYcR",
  "key26": "4g1ybJfBBrk1nMYbhGG5gMWijVcBuURpvjZcBq2xsPPZTtd1GBiGPLg9wWuq6GynP8C6UwGPu7csRefx8DWhxStT",
  "key27": "VAUH3K6YN1H4EpEpYWiTDYQxyGs7iLhL6xfpUJsMEipmuNrJkV13JJ7hG19d2fJE75nirqLmg8sWBBbAjwRf6hi",
  "key28": "RBtZ7xsmiGjzQCrVK63DR26UqsQgrkyvfrbmuk5C3q6HgNK2S6qUDLFHXJTGM8t1J1mF1WWrd2b6Yo8MR961SMU",
  "key29": "4LF7vyJhTbTstcgmGE8sww74QNDnxh5jSAQfqn2DrAHD6LZVerNas6P1DtUCnm7ba1DzevJ7kwu6UGuNjegYy2Sz",
  "key30": "4qpSBhaf3mveLMBAeERfiLVDMoQhuECDvT32eQeXcwE33iWjUrgmQcpYpv3nzTuokpgKjMuwFPpyQeDEzFgZUxox",
  "key31": "2PNbB77kaScbSAs6EL3kYr7akrXx3B3zvM5eTGPAQYKbh5xYjHb7euw1oV3kpBiQuDGz6MJATD2Wfu24g6EzyGRi",
  "key32": "54UKGqGcWpcTCSeFNV3pwd6XwbbqXJ8jiC4UbX5EeYHDBfXKytxYZe6DcxZ5i9aK1VCf4z94bzy91FiVXWdE1iAB",
  "key33": "4Y6yKWutA4b5wdjyuDv5ntYYcpzbyCMSxBxNi1zwSbh6dv9ATzjF59yZW1b6LdFAt6XCos6GYPpTSsqArPNcyy1C",
  "key34": "33krcTK3Gi7B9R9d2TEVknJhPbXRaCZR5hN7wz9i91SnR3htXGqCQkxbC2NgJzsAe2ykTiDmxCb6yzcDfVBfzqvM",
  "key35": "3mP6tmA36vs32FcJf11nd1BgGbVWgdHE1fcv7TM3afYRice27mBeZwUEkMf6vYDZvzrGUssBBHdPPFXRTP6mXHo9",
  "key36": "5Ss8X9yECy3SRJCyXRFr8CkrYkYBC4cNkpF5M7qoyjoHSLjy5Bp3GnyqMrskQV2waNjNwC5jxptbfWBS7xmYx4T3",
  "key37": "2NgfmCsMrefPq2C8ZnAJF8gPKb66zNwcFLqHTqJPundB9zYBNMEzKgnh4ecDq3buaTuU8pfvsAsV3d4q7FtcpLkA",
  "key38": "2925fiq9mGDCxUTfsjkU78pEWva2fd871BNFMdNJEWfhiyQ2xMcitxo8oBxHDA192R2wPEb2EuQ48V79BDGxkBkg",
  "key39": "5owpwnaExeSiNyb7yERK2btzDUTTNzXvtwqVKxak3KjTNb8dRX8MUNVVEmBxjKNssQA1DCU614qEkomajzEdFMui",
  "key40": "UWTaDUKpz6zWsxHorwZgdgAJ2QwZfWYM5Q8q599CXDUX99UtWyqP33s9uMSMhcMkBgVqnzNjbYo9ShGBceLMC73",
  "key41": "FFj2pX3QCAaLJP6JxzEGGBgwLG7zDaFnqLE5G6pNQUzFoVi6A61JMmoHHZjuEEhdACSCskPjXukMNmU2Hy5YByN"
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
