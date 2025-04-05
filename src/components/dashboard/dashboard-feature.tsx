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
    "5UhPo4V472wR3HjdaXVkicm2f3gYyN2RHG4JV6rgTXpbLERVS1TLb8Z1pP6fjfnn4WJzwcAh1QynVHFhe3cyuN6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJQmfmhbiJ89jhK5z3Va6mHiTMj7zNjz6fhGJwfpgkYzVq96CCFn2oHGomoCTFS55FCkFFEQ2ecHtDy19SRB2jA",
  "key1": "2JnqgztPuokLmg6AVHafHL9bxGEYeXZsyrP7gt7v7m8GUUkV3hqMZXm4cET7z44VaYP5Pao775hLxHaPb9CZbPcQ",
  "key2": "58R8yWBDqzDc39ScfpZVPsfPQ2kjZCUWbfJQoZJ5vYKF4dhiDhMARjxqFRWAqzRrbPNsFYNwpaCxEDuus48Wyck9",
  "key3": "35XbUz21j2HxkPNVBxSiVwXh9HPhrfFWDxKegsnzVFN6Qso4MfPocteFd6TPo9LgeEZEwkmQGTTUcLTANa9pFHB6",
  "key4": "4Xn5BWxmArQ8Jxd6e9e1PymhUiD3gADwGoyiu8Gv42wAcKMf8B4dR7ZYsA6iWAU7G2RsDCrapwCt7ro4pfn88Tr2",
  "key5": "38Fn5RKgUaZwauXHwtKDzwLExsRYSbGBkX9FXxdVxoYTDRhHw9D6UirgdHJsjGWYfkFPcVatifZAAmQNtVYH4J9h",
  "key6": "3GhNgR86K4U5yB9AXht2pfv1rW3XqGB6pvfR53WonS6qE1e7GUNfwHCWRjNp1VGv29ZD36aKvhgZzX8QMuzMkDQV",
  "key7": "SKBHKw4wyZF8Ji96LCrxgXHo7BK1gJXC65SRwrBUJ81F8nQtPoHtpFT9t6HT2dUNZ6YNYD61xzxc4j5k1uG6w72",
  "key8": "2Koa1PsfHcVBcTZYLm4LyXWUtx5gaJmedA4AijLdh257jtBtvC56xc2Q7MQHRocc4btSjupJk6hckxwu12AqWASH",
  "key9": "2o7HVRxByyro8CsnKGnSqn3KY53gVM1fgQ2R7ikYtbYthUG2eYaijiReJQmFFgp4JEhRK6YHoUmnKmcVaVHXhEfS",
  "key10": "2CDgHRmCKEEE6yqY9CvQnocoyF2HLvPFWbzJpVDULRUeLxv8hhS6NGREpzsQD87bMZ3at9dyqZ8ZDmBuxUpkX4c3",
  "key11": "3kxPYUn18VUADX2EndS1715PNeYaeQRodJKWDQgmrfZiuDnDzFbVd3Uh8j1s1FHAqhC7zKLEAD1QbGWYDuEHX2QH",
  "key12": "TzEzFd8RRz54YA5z7P72Ld8HRTiw2PK8br95qVxJypREv45WQLXu2R4J79a5LnEDGqfpuiAFALAWxuPrioSweXr",
  "key13": "5Gnz438B2kqrbdCRQgJbWrb6NGthbsc5EnWHUcy2Pb4wkTu8CQKeKAtzaoHQHR2mCwL7r4J4x5fEUnQ81FTRViUs",
  "key14": "8JSCz7wr8Ao1dEBeZ5K3sMw5UrcXHgdc4xPmj3vjAW4Af5HV4FaZaX4PKEGFrPbXnu12KaW2fZfsWuUw6rS3zqk",
  "key15": "5iAU4fAzp3FeKuCio9LC88DRzCU64PbDZVzm5xFwLKAy1NoRhtxQQSeEJ89NvHYTyXWgMUr1qxmL6TL1urkHjSkf",
  "key16": "56oJGqi4ayxoihgcR2M2fSoUKzXTxo4kXxC3myocAPGXNntTAsoPntbtrVaqjJKZzCHhW3oSVEB3ZUofGjaBcgAG",
  "key17": "3F86MDDRst15NSD6RAZma6VrdZocpSGcyXURCoeSjAKWoM11V3nkC5srR761gzbXAf2iTU1WBx9iSLP8Ld85zPS",
  "key18": "3uhFBAS6eDN1Z2gNMUrgPrk6NfqxnNLUXynF5DYpD3DC1LmEhRW1F1g5ZeNvrWqNiDpTbsT9ezeYF3vrCL7RoAb2",
  "key19": "46raBK8fHpeHHRTdWKTyfpyvNDHeptKamTaVdEpmdaKKpiEkDXpebzn4xaLKvjvduxUinTdRNe3uqzanVaAHC8D2",
  "key20": "38FVGNDkEZJCerEYBqPZxUxcuCBd5JKZ2ALLUwQxbNk58C3pebUtve1hh6g8SpqnyrSKXCBg8uoshiZ4DGgS96Mu",
  "key21": "3ZdJfX8QqhZ8a3HC6p7W46XJNQBqgcWcGHjXPk2zLeuYyj91SDtnb6AT2ihUzwdW3jR9FY3dXWbpnCYtfPQx61co",
  "key22": "2YNjmyQu8JiHxYKWdzpQiaPuQRhbT5YSkgYgYDt7Kxqwtmd2hWAaLAscqJEUyoyZGP6M4aMfXqQdPDD5MKuDdbsu",
  "key23": "4nhJQXVB25Lq6NaTMknXXJ5dwT37QdwXMvPdo2EujZQPBNWrGRbotTX7RcAV7MMUp2CQvC4PzwVFgYoMcrHPKKYB",
  "key24": "3oPYsrLShHhcoF9Gf7LMGDfn5kB3f8iWB6ike5avcQDCtyA8rVeSgFFapEv4EvEhirmMNvMfvUav12yzhpRf2CRo",
  "key25": "4mxUXDJ2RUbX5v1SwqS5ZhdEyJJ7MVcnMrgSFn63MYrQrRrWsJZ3WibFiymD46s38iupcmVKZDn38XnJcW5oV9MF",
  "key26": "43VjB3e8j3Nbm3rVYMpXb8rJpaVzT1N2cFuRrSeq7QoFDTfdBx39LersgSxArFHLRNJXFmDaDNesit1rdd93Vxb5",
  "key27": "xXKQkbwcRztHenzGArAcLhsfpwcpz6f4Dqpke9ha6vsWchb7x7YgjHqxJZxGyRYTYj5jHhH9qDRBf9TzvxiYLme",
  "key28": "2pxrBBjCu3sof7ZF6XkWXTxw2YP8RxWhHbLVPngZdA2zokt85TiCiHtQJipXK3agw5aqH6Pe8bU3zQzDMnDjc6Ab",
  "key29": "4ZFna1kM7Z96PJkpiws22yiZRoHf1SSURGAXVfbttNQbzWjA7MvR13pYbURjQ343f8Xm6HU94mYtGubpDYm9FG4E",
  "key30": "2GX1h8Wt2bk1JPJLDdUFDEp5QKeaL9RoT4YrduNv4QJjY9dAhi7Ar4iBr1DdnrkPW8ECpCDVVKuUe2ZkuW2oBSYS",
  "key31": "5Tnq2fgiF18uUDKWNyDHJs4HRqeNUvfyNsND8kWsuFNpt2TKHivyCSk7soN64HufchT5pDLtyHjc7hKk9D6uGGV7",
  "key32": "qxZ5Cv1WeFH84NHSiCGWEEwyrBvCMvvcX9SCMwNMcLZfuTfvmmGAd7NDwnLMTxd27HJU2VsNVmGC381pYKxFiio",
  "key33": "2fhyYTxmpEb3kfieFhpi9v4YrbYCiMRiN78B9sABKudDZXSG4WCgK98YWiCYKsQmKf7teqvgyRgXLZYcNJCCdp6z"
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
