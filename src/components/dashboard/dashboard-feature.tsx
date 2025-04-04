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
    "8X4wbxMyjdAV7GPYstJYbr7rabCWPeLpRPfmsHWxssuWsuqx1KNoA17cPAgDHLXPhGGBM7KiScTV3QApXDd8aja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8T1HBcJdzurx14gKZtrWzNoxBnhfw6MxBYcC7E8D3CcpQPugKHcZxSqJA8f68vnWPM1EJUdbAjPDRMvwTohaqj",
  "key1": "LTBwasWCrxt6RPEeBxB2fesG4He6kMxQVtxWDsYPYWEi2HjSou7ZArBpNCqmMDetRmDfjztNPSyRQFa2Ft5rzF9",
  "key2": "sdcRCzR61f9Peg4Yojb8SpRptNoQ5bjC8ZN931E64r7SCm2fkqTbXp19Nq31AonhfKDptdZFdPkbXmqgoSqatiV",
  "key3": "5c355rgABzYvXsEixSC7XiPtKW4eWkJaBurkL6qzdgWnhSiw6TFQjdjiW19HnPgLksXpZKitT27Wp359WhjvHh5v",
  "key4": "2HQJKxeVkkNECSTDHJHdM8bFEykhHh4RyuYhCURkxY9qTX27GpMHPWJHTCNw9N4nE8kYiC3z5npU4od2sEnqQbTj",
  "key5": "55YcmWFxcD1YzspaJaAR3Ryi4FfU7nL6gmqdEwNHLHrmxgF33PP28nWE3XTNvEV4twqgrZCbvMJu1ezP1hT5mQ7j",
  "key6": "fMiGXsnwBuFhHf1RrFoCQyTJVhqWY962bA8xa36oJLvkCmX4G46C175wDmBVWJHyeu1iz3qxf9ci6BQwuX7eHwX",
  "key7": "MKUbsXHS1UjQ3nYSnAQwUbybcMZ2QMHiHhCW6hy16nPHrvDpQApZ7z2cXBDhY7GwRAAVmkwkaf2cqyAifiqSUmd",
  "key8": "2B5ma4ea6agiDMmPnyipm2MEtU3UCkRrj2Cc4DExjE7itCsVmgx37DWFiKJyXgRuBjzW2n9zonKF42XDZSKjBRRB",
  "key9": "hctSSSGrpFb1Kxs6NGdD3t7wzgovwFjEu26mJo7GKSpm8182QPWv8i7c3zB5PR5643voW4fssBQX6HCwesQrrkF",
  "key10": "5yz4RYqrCuRb3Fc9dgMzDdgboW1QxKuPaqAGRUrYNmZ64UvNrTtTT9bimDrmJgpfaeMMQt7LTqotkpQfosaVHFWE",
  "key11": "3J4SBQrHrYUfk9kjG3rHQLKGDVgBX8MJM5KhfMGsUEMiSzC6g1g5e4XufoyKUhVzjzmzNGe1nuCBgBAD4uZ4uyjZ",
  "key12": "5CX61yYM54ULvr5hwjaeYX7NMkST74T4jhnWFChxxCfCkQ8FAghTjbztEAyWRMLWxpMAnvaDs1r4DMPjtS92QsaD",
  "key13": "3x5CSTXP5Ws8kCJxvESiwTpSEFJpYo5yjib3zqxjYfct3PRkYJfPxDU8ixUU95JGwjcSrotKckrGjxzgniKtZwCW",
  "key14": "2vLeh3gu1x6zN382G24pJxkXQxaeY4fgUMyNpdXEDU2i41k9cpYTF1qKJsk1BFgG5BegrDTU46BwpcBZasRoMoqd",
  "key15": "5meopvjK9uQi18dFmMMiWa2mPp6NA4qbzoapQcp5L2g46RL8nMWv8THx9MaLpdq7eozfy6b8stiQ3LKsCnDWFHPU",
  "key16": "szqxgPUb9tK8Lz61xvDhXK3Qqpc4hTJAGk8Gh45xvzMNTqcHFdBYCq7UiajNjTQbsY4hnPGYq5wJ1tZ7pzzG9mV",
  "key17": "2i9nBqw9zi7UL7bT5Hyy3Qrp4wh735Jes18Yr8bf1gQFakNky1bYY52Pf53EamBUjvaQ8JgNoFttTzA9L2uDAwt8",
  "key18": "4DSY4ApFgBUtMwg4BzzFRwfiYHwreCQSUi2rLoaKXsACKQkyYsk1EzWhpqCbq6ZBdxDUcosnjBhDvWfjhnMPYyGU",
  "key19": "5WGmKGGWRuEjZiEJ5mrUvfA2GQoCCdqtcha1DAmaQ3v73JQLEKboXKMygDQHfBcx3pj9d3py2ctKYUxJgwUxpN7f",
  "key20": "2zpVZPSAwzdJNEknjWKdACzPeDJVhPkqLW9cYze68ePFp9kz7GxLcMgbbDgRAT2VBasfdSUmbdib4BMcZFEE3ZhU",
  "key21": "5YbqbeM1iG4m95XxJZpgzTqyb2Yiu4eaqXUoMVw5ddFpkEQYw76bYaALqUdQgfHPAkbMakbTXLDaoCFG197NQ2Pf",
  "key22": "5xwDuKr5cEVGUjMJz3tJntzcQk2JXoCsGd3MYqaupdhbtWCK1VzRMKYwfQUdHN67o6E96k7zZZGVSp3sEFGdk7Rx",
  "key23": "2pXWVA3e5FNRS1koZYfhDTTTi62HkzNM6FYtmgQi35FSfdSykiENxdF563tH9q1a2bUWG3iNuCX4HQDJo7BoiF1V",
  "key24": "iNScPPvagCPWo5YxfgwiH1B2gk8jpxZ94K2tLZtRYf7ZWuu4dES94qKtEBL8mQNdi1fjLQGdHLWfkTQV92qqy5z",
  "key25": "5AoZSNEDy1g59WogFoxNra8egMDfFSTFTpyGhLacV72knb2j4CRQB6pQVXESuHxvg9a68QYwNq1VFXZzH4SLCxLX",
  "key26": "31hSYgaqGeJ7vfid3kbH5YihzQkrAWNRic7PNWaRw7pQ9AFvDn6EJDx6ZrPkb54AqU766BKnYMiu6QyywgZhx4tv",
  "key27": "5TJvMtebMKiZwXoHEiHzhigGfaLUp2HGjjuNRKa1zSU5gTk63ZuVexcuogczTDsNnTScaZk8wNtxTeYPJaDiK3jE",
  "key28": "47Ky7ZkWR2G6MJR3CajULNrJFjpV5VLGWUAfCpTsWRMbACH1v9ZKgQCqx4nRCfj6jZ3qMGSS8Pni6xYDaz1iSK2c",
  "key29": "3N2Ep7AXPQ5i5pA8nut8oKpiEHg9roDaRaDamYNAVxf5XUgeZHn2gobcxoqCAYHkawgtGjqHrC34UC2D6TJBfaZT",
  "key30": "5X8V8n9CnmiZ3nfteYxycEiP5dGTCy9FgBcLqWxwRAHPVT5wsBTB7142NVt2ApMht1qkDmGKBSwfq3G1oFwQHujx",
  "key31": "Qk6wtwBDGmR2Ad6KHTdkTWodMuAKyAjkPbAHmHP4qjKxGx1za4JQe7u2EybaoZ37rgTzvMLFpUXR3DhXL4KJxFK",
  "key32": "2oym2sNQwvi24BvcayyJLQXeXv6JDHwjpeSfsLvTH2W5tfaEZHo66nXVydmsW7jSU7zHcREmY1Ms4RZ79KecHnR4",
  "key33": "4GJNPcQicwtbHYGj85DHFNSJQFYP96Yy1s3u3zJMPFCbUu4wpLaSvK6DjfTyHMHecELAvN7GiDf3DEdY1CmwpPpE",
  "key34": "2bBwwhnCYFYRXULyp2LT5kBrPCvy7PWNKYubwMAx8GxKsV1qUYijkScZnKH4tdVz7p9CvJCSSn3nDspDAUwVma9f"
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
