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
    "56cMsS2GA3d8fkQMLYAZfjyF8HqmvCPaw6Xf1A5Fnag2K4sdYb8MRgnK4rBMBtfhLvJfGPecWcEJNpQhpmhqE9i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EvMEnQFaAMiQmgJt4pkwGM44LLW3WRLPBMTLoYbg45eUJ9U1CaRY5ydoe2wGuzyfm3w7XFvJaPvm1bvrRNqq7B8",
  "key1": "3myuJtShyjiRk98GSjoftEm95ZV8WyHWXJhEPWC3gmfuoF2mEVmJs1NRwP6yPmN4pnHnjBQcLKZd1vfrw4qLJpoy",
  "key2": "5iCQVrLQRg1mNnA4kC3yNYcaNL4KUjXpxbFtXXohgj8idnpHUTPsykYp1RS82ufexzGQ6siv1waSTCeviVo1SjHc",
  "key3": "4Xven8c3jxQCgfBYsSkY4uLfK23tFurbqHVv7bZPXECLmGPhqyt38pSrK2K6hf5u2YWfw7REWxJPRDESSM7p46oJ",
  "key4": "35SZ3HgLWivNNFjq5oHDdkSGViJvu61gdiGb7VB2hJU5UcY9hZ2LR9ydbKTrAzoAh6kxK3ktx3jAsKz98nD9hChx",
  "key5": "4ZBQsbDwaMup5nQHCZoZq3M1jmHzQ7ND7E86gTCo3h6rU1rfaizaj3JzPFMuMYZakv43sSX5QjXdnxMfqJUETLjC",
  "key6": "4qQyuQhstqew4wfEh1HftrKtJW1LtkeC7HwfBoYNsabz1bevronMbWTfDXNSrhCfvv11o8MXa6NMa6uBEZuT3hLQ",
  "key7": "3vt41C7Je98FoSvPZidWpCGEEUikfHxNyeHsDCG2EkwdvZVbSibs3QsVxAmv9YNBRdJCh1SXnESWmu5rg6G6AdPU",
  "key8": "5CtS69oVB8URrxeM4L6R9veSXzHTwiBJ2DUKpjshwnMyVVuiCr1WDpmDpCi143k5ZAHyFvo3adjH3WSCdn6ZS3Xe",
  "key9": "LNih8XFZwq9Awjw98k9xGn8gQENEJZNjiyXkihrrkHkrHQZxEn2TZsSAZ5L1j4R6EQL1ykrTczs32HFUvFWusuu",
  "key10": "CNWStPpEX6awuFgSZpjLMDo9GQd4Vh5V6LFyi197GxMKnPra54ydyXowDyftM36WeyrELjMfFwns1y3oME16UiJ",
  "key11": "fKHdq5i5ZrGGzjxya8mMdZusPucCZSgU5UCd9NkLYtTXxuSbaJr6SzFFGTPEuPGXV4efoUoSJHvwtT5QzvDHhGF",
  "key12": "5uo1vG8cvNmdb5Sghka6USh2WT9F6t8JiNrDD9sMHX8zRoA1V3Qpnpwpa2MEP45gQiuMcxmh7rPKaAyNwnZ7LvFx",
  "key13": "2jEAfKTygKzh73gHr6xBaBrv8FgRkhxhS2o12wGN3WiPZ3RToA4UFCcTP6HZPTNtMiva8qT7EKYP1b7BYjgSPK6p",
  "key14": "2K5DEV9j7zdZeHD2dWuTvoideGxAjKGZhqS35dwpqK3nFLxpxrhqfAD5giEqhXz5p2Xkmbo2R7fFxKtMk3nguqcn",
  "key15": "3uVYNat3NNM1zXcg1VNTTytjys7UUmrZw3QrvQ4S5Yz5jtaf6ZvF1EcsMkp5pCX3YLyBp687RhKg2bFLzMQ8mRG1",
  "key16": "2BSue9kBzpz53YQyFkW1XXwG9Z7VD6ndJUxvFjsprxQHaECEMBB3G2foBFh85pWrikvnF9jjabJuJVwtLu2tSjRS",
  "key17": "5cWzDPCgTrb4B2p6zVcUYihvdHBaoUYznpzQgENBfarhaiwyLYdV5QmbE2R2ti1Y1y8CQqH53SN3KXmUFhMDncdc",
  "key18": "4n61p3XKZvDGcBNxjB1CdT7XNTf3Aj7MmyYhbN8cysW3D4z8ibv5ZNszHtDG2TvQh72mCNrFH3attAi1MnempPUK",
  "key19": "2hR8KJ7pxg3RQREm4JD8priFPPibY8mb9kuMaS92sgVa9KeP657wQD9gZEby9d2EZQqnmnAJkCHsNaE5ZzN3Mc8i",
  "key20": "38adAcTxLuB9sQ4Rkvm7ehN7Ja8pxkcpASGSBAxfmTgoiAM6pbV6VRhyLLVAJuQAz4W635tgBztYvw8rhnXTbimd",
  "key21": "5jx251QDA1cE8j6Ue6DYPZc1EiLrt1yvQTfNfzbhEZyYqmDBvfCQEzFaN4NxqXCCU85dqwTvHYdfoespPzT63oKm",
  "key22": "aj1VYQKpF3bP7hQJ7ZXMsfzLapRfUkLV42R9vcpTUuGfkJUHZ13n3ToTKwr83KSAyBLUbua1R39reouV7fQtomB",
  "key23": "3Vc9UJg8Y3KVjqZM83QuGHLtWyHfjp5AEW8VAdBesoE1hk6BqV2VcB4kjVf6pwFfait7FtMcRjmq9TnrUHwXpDoZ",
  "key24": "44wJydGArhXQZk267eSp2TvzYeLeqXPVi4zZPRBUEkYykkJ4dJE2RvV9XYTb2LiMxWzqdJUC8LccrPsB51vX46Cm",
  "key25": "5m1EMCHjFKg4wbia1Pij1BT8sR6V68gJQic7xje9BDCdwgYtwVZyDxW95mibcTV9t38aV6mxLJL9TGPoMQcgnLy9",
  "key26": "539j95i1eeYS6rYqDJxNw7zsunAKkH7uufLyKBx63kDFgyXjuYY1jJeDk5nPPK67LXaaRbqrA2tjPjH5dyxxpxbf",
  "key27": "49pvQzRDhhhkiuVVgfKoxY3dzN9pFEAtUK3QXwoxSMZTUX9fAFmK5mJUTKbuT34wiefKJv4ZbVHXuz7GmE36PzJ3",
  "key28": "43FtVmoPMsB3G3jXfRGVUx8ySeDhB4NhT9wYEe7FrL53P6gEC6WkWEZGuzPe1TN7Z55tb6TThR2RTYQu3owRU7PB",
  "key29": "2UUyy1UarYiPXGTXBVfwnJMbttgFv6U1qD3Z6Pnki8NRRcCmw1ymPHMbKNj7p4pgsmVrLjDavH3JKjvtzqVCiipW",
  "key30": "VKtpjD1SdQWmFecVkW3ex1BRia94ttxUNJFctPdFdtGGvo88S2fizCJPdd1wK1tMEpev2Ky69AuoYqDkqy65grB",
  "key31": "GJW4qVQYxM44HvdxLQ4LSdQ8MYzzGNuCXjg21f1RrVbXqYeK7UyEyjjj2EhzpTW8LavyxAqJ4nLh6SKnCNQoDfz",
  "key32": "2PozeJcigMt3cFa4LpCppRNSUCnie7RZV5FcSa3eaQeFWejskaqwAeh4Tt2xiT9Tegn478tr1zsW1NteEuPtMrpg",
  "key33": "3LdWsLUEQ1E2BSn5ayvNnVpqvN7tVYvayuRVq3Gd3FRLdMjfocHy4gxCjjgNbXVNbUk6BwHMtmghiJTXArAzsRMD"
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
