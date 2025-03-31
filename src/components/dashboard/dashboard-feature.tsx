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
    "fzUgn4Ggp7s3xZDiFnfDVBusVGJpaqqHo1rR2Srbi4wp57XJtLSw5mCoeQ4XzsKAQmpWm1odV1tXGu92AJp9r5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FppWSZjBuCKtxSjYEKkyNVXMnPZEfymjkQrhSxAiyp7WfYxM7Ug8BYtsZ9JdLPSQmrRGg3WWju5iV87WiFBGHiN",
  "key1": "2fsJQutxuzFfc4nAsNL8GSHeRvdafnzj8SFmPwV82hBwB4vmpatJPCM78kREmSbLHQ68QSYJqrdiTC8uvBtJaXNx",
  "key2": "4pNVGvHdKELwpyf8PtPGFjyAerKwsXDfv92kZvaM2WY1chyasxT6oUh9PtLpdzacKiJjpuBF4KwoEz3dP8hsuwsf",
  "key3": "26QpM41exwUGRjdwUcUbXJ6hxidNCEnRaNbdSYnYe85XYfsX2G5V89V99UK2rJRHvu65n1x8fPFHcZ8FsaVWKRqZ",
  "key4": "3KGbreEGCGPuciehrJScsaQQbEnuoMQrcWwKfzAnkiUMcWQAMgXY2kkUAUVowtdAdc3utTRfJCDqNbwxhrsKHTYd",
  "key5": "4DyFicbdxo4P7CchAzPHRMRuYZjdqubsPZB2bRHpEKYcekLQ9wSghaEpQCqhUSZAXgAsgFUYK9PeJVX7kRso4n1X",
  "key6": "31f8rNJwjYtV29MAtUMQm8mRUbmKmh4Epin6kFjw2RzXrwGruuV27XdDjcxwwaTmsyzKS59fuf5Yy1UvKM4aBAgi",
  "key7": "5LbDiNMMTHqtoJPkJ84Fi2Fp4PenjahATQkgPSkkJ1UzZjnQxY6W5Bh69RrBZqFUhozjRrrcj38rSQa4mFfYeWdn",
  "key8": "5rjCs3K7whW57TSumRMmNGWCX3nVQ2qtaNcJ4S7Lzic8HtzKgi3gohmkW86PnJ264uiHSvy6Wyc1fJ7zCMtLNh8z",
  "key9": "3pTVaQ6vhVSo8gVH3mPp7zaenJXWLb7ybacRQZHfgnr3KTbg3RYWj9gGkYkKbkBNio5jMTrrNkDyGrAhVEY2MEg3",
  "key10": "5J23SUAPY7kL1b7zwJKekoSkd6XbYABA99Z94FagDhvyyK4QmDqDEAjxX6QSJbVbk4SSB2yv1QkwbJQcxpFkTftN",
  "key11": "5vKXgKdzGkAf88Fc4YEChdQ8V83xBAhpH6U5siT7xKLrvBTqAeVaz9K7nkNJmKeeHqeSsLarbdi4hLZFGr5YdrX",
  "key12": "sjLCiKxbnGPy5UmFyAGc4wjJTEYrWcyev5S9wsqahUioqnbsLWxnkxEB8n7vPWYDknMgvs8D8JTt4KtiqVUXiyW",
  "key13": "5LuwbpnRHZCinitFm64KY2QSREUePVf2c4Rt3cUu7ov6gzg6hDeucUk3wVD1u3HHxbbRttZvesXig2DAtswLcuPp",
  "key14": "3DcgEapgke97iiFfHxnL6bQP7Adcum6xHYsSz2DueuY9DTLEsnw1Hw2HCxN8o97Z6qemuwQ9D1hHMHM5BKPhM5Tu",
  "key15": "5jwKvpUPe2w8ehJ155nUFPQMpucbFqx3fiKeFXdrWRNLN8NqdZHz1peHfsqK4DRk9ZCSb7KGYrxkgs773doPRChE",
  "key16": "4AZLMPtAsvDA4329ZbyBW46gWzEvVwVZsfPNrHCFdnEMMBfcWPvvdtad5qrjvLuVwtW56ox1qHK9YdyvfbaxL88E",
  "key17": "3wk4Ge2Z4LJPYjsNmaEE9fVA53wVAhsU8qiXgjHRdMSzt2NHQxD1EvVriqxNV5PbJ4ckdm7dvrvmkNmYWP1xevGt",
  "key18": "5h2Dqo2VyvAWqqrhcLjtHaP52MG31GBFPbfXoW5LdPsTWixHnsiB4U3zC9ZnoyEzi8aSetkGq1cuF2RB4hVTL5F8",
  "key19": "3r5HTWfPd7PMuwkRNdV75G818rzdwcgHtmgBJGwdQDnCfuXyHwyu7N6QsnpTZ3ZYEoPmEJxSZzSgKHJDcR1tFP8M",
  "key20": "5kR4DGW4c2W2LLez4tegiLAeP3FJyDCs9M1edkVpF6q8gcURh18qpEaV2v4dwN9wQam14nqGDcHyTZDcEzTrNy6x",
  "key21": "3vsg369YAnD817RWXY9hTHkwaZDVCY3UAXgzkDCm4pjfj4trSYSbr6km4y8HZrfz8DgVGtnkjEjnpx3HRP1CFqtJ",
  "key22": "vCniqXWWCh63rRkqetUV4hHC2RkH4xC7RPegJGq4k181g6s5u13mv42gfja1cuLibrKLrTsgDkDzu7Q7erxMWcF",
  "key23": "5b84fF8cExHRU6hqySXd9VtcMZcnzBbnYDXvdZ9iRuahsVvbryhg1Mjx8jsYV3thvHKNtKrfS86jCwbCcGw3NeAU",
  "key24": "5x7C7M373N2Q3kHVykpU4TYoVK9UjjXkaBmiHEP7qoftcU5pYadxvYvkQtxaYrt7HmJKJvmpZ8b9dQvSRGWrNUgH",
  "key25": "2B3Ksmf229jKc313zWBn8gAhGt3abAwYefWyK5yHx6DfJoXLEn46zR6uuF45TYLqX3idBsHvaUMkCpJbKf49Ndgc",
  "key26": "p8pUQSqiPgUGEcdzVhKZWmkj44Sh5cy74gzqEzry7txDHj3BSw9NQbPhHyTL8earBSYc1K6rRzk2aSiRa4CQ8mj",
  "key27": "3Yykoyb6gNJZuov7svi76othd1vet2YE1zydznczvGKJjqfNpeT7Zb4EWrmoaGHeTjFRqvGYxALg8rTUzNnjoodT",
  "key28": "4tDxsdsktQ6HHpho7g8yDHif5m7WRepxHUEEYjc6tcc7R38ogRS2v96R4hSSYijUeiUyzr3iHwmBXGztjH5pV68D",
  "key29": "5xGKW5VzjA9icLxpo8P5UtnECDSX74L5JBmRBYGjJyMk1YuEMRUZyRBZg6uWTn662VvXKKekUZMK252eTsMSM25S",
  "key30": "2Jn3fffoqi8h3jjN3aTrN6QUW5rorwxk6E7wWPyEs9UC9k3wK8BW4UhbwjLRtM7uj2bYNDuruyPBdp3ZwhHzDqX6",
  "key31": "22aqZzpcB8MFo5kA69mZnGdtTLMZBuo1YN1GuPnQpgTzioyRez6rc4HZd87tc7rkbGeYGo67wdXj9RgTcseGXCv1",
  "key32": "JNf2vqMwD1GBg2dyH9saA9w98jnUfLHmzJMAnXeaRYBcSAoj2qhHE4XAfXVEDgbmPphx9cxDn6eu4aRrPDZqucR",
  "key33": "5FYm2H2gu1XedmvWHb6pw1XFSth7ZYLd2ByUE7Sb1Ng78nUvjpaJHuoWmopxenjxY5xnkXoz1pspKw939wx9Jrez",
  "key34": "5tFjL8gEa7ok8LjXxpNwT6VRELr95A4yJXvMZ56RcPkGfSqQe35J82fmL95uxsHPG1Gn3Cfj99Fc3BikiPJAqrfq",
  "key35": "DU54vMt7umEU4pEESLJdb72WoQiJ5K2q57nxTpxeogZauaNRDwNq7HL4NXtEyvtkiJXDEMBJnYKqoFNQUA7VKDs",
  "key36": "39tiZ3FNguyer2ebr89xcTtv7WaNtUseEeBznThrjXWo1jxmxUeFRNacjDrSxfMXqU5iVL4TLuSA7A1r2fYbH4Lg",
  "key37": "5Nmtdy35Z8w6NoeddZwxFWSvdTAuSyZ6c4edF7hJW1JB7zfogob6Fqda8KVPmYhhBvrgJYv1RriorVR5PvnG2MDq",
  "key38": "3U65kavACmAAz7JKajLNfPMX3oHmep6tXMMkjmqkY3HpKJppN59ceMV7dFWjGVGwdeMyyqgThETMkq2EwwCqUQr4",
  "key39": "4pdqh2L9xNWxRCh8vLZNDiF9Ti1RSEawdhJvuxoBvdQkRneZ6J8NaJKwNs4NCqsYWgoTUqRLju4LY34UEwhvLsZU"
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
