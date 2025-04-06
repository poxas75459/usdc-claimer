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
    "4nqVsogp9iY5fT3Xvqf7zpTLTroRdTUmrQ5yaKBCxCHjqSDtd2RVEL1aYpzfY2dUkPRGi7uenF1rbtuQfsJJA5PW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eat4BiE1gY9QN13cTRpaMr3noUY3MWWyGTkrH2mhrTBfBSfYpc6bKMDnumNhecwBFo8HGghpwc54KHJ7399VQ8S",
  "key1": "3wg9eJApvxtUna7tP2GnyMc28E5d38nsqTqqUYmWtxkyEEMfj6oVRKDWozevxdvMDJpnPYn3jv2rS2MFSDuYQ6EQ",
  "key2": "rBd1HcEp9c9Koq1UoP6SfijADvpD8PfUc9tq5A9zvoSDLAmVPB7NSNVFXhpyVcXsqycLd6Bsj66VRLWXR5azLm4",
  "key3": "CLySxqYkdXunFSaqqKu1fdDstyQ1y4eXC2VwjvhibALwbJ4XXm7XM1rDogqLgaTLz34jQaxCJtG1KawnMsRuR33",
  "key4": "4vhisgkuRJXYYKKodWbhxz2Vugy9jKZ9xC5SM7MRwBy1Zhwx9GL3k2xhRpmRaFCYgfUmsE6zwzeKkdabcv972ovJ",
  "key5": "4WBvzKAnty9dQX6wzTi9Qe7tZyjG59tGXVTVDC46MRHtkLopqohnfogJRvoaybZ6p8otKqowwvfJmF88VM6Kxb3D",
  "key6": "5HFAgStVVL9pMFZKPqcx9wKtumUmiE6MYtsbrTpCrJsQGKmxgbTeoZeHAqk4ZXr7EBAQhd7R9y8AddfXkdJWJF8S",
  "key7": "3fdYXzhpz1phNWBXcmqnh8WYmNVr1TgaUktTEdrvcjGWATTUddwmDaqbEKwisTdhjDUrTpEm9B2jKXuxtRB2hd7w",
  "key8": "4FY4LdXWvuwCukJJ9fKRUfrVUxjJMT8BnW3dk3k2aLoQdz8MxREGQNwAPiPY3StFtehQcqFVGABbMtmdJb1h3yf4",
  "key9": "411PSV8bPgDiG3nYM7LEkE4KpJu87DzuXMX9QvMhisUb5MuhMJRWk5TG8Q4VBMfNneTt5gMqs1WTxqrjWAerTW4N",
  "key10": "61x5SFvBGBcxBaUMvoB8p4Kf1XcEgEZHsoEwG9UJLmqm9RPyVxE6x3kus4Bt6cJjUMMm4JiGBHJFgTjfh3w7uxQC",
  "key11": "1nCe75xQrEK9WRcTVMzxLMXT8853DkGgVTe5wt5WNqjBJN2LbEmGxarytFDphK9eKSh7GvqrPToLUVnKVyiqo8H",
  "key12": "5mCbYLYZZUe5wyeNL1p55P2ay1rdpzPKAb1KwEwi2Ac7wyMNYU5BibjFwMvBns4zpcHc8WTyG1nxDfee4vRQVoHR",
  "key13": "5Thw8EZDfu72vEPXxBqx6zJD3Juu2mh2kbJsWpLN2pdok6iweLdMnGnKZKmnnwr7dkVtzQS2KwRQjrcWEsixFeUb",
  "key14": "choCk8ht94YRvRoZbWq1LgdR7kLZstn5vWLiExJqp2LRY2otJrJuFje1diixqjGCKajLWYndfJHCQnpZtot7ysQ",
  "key15": "uzJHQGdTbCkNnTFEmwQksAZaGNs2gWmZPLir9KPS49R2X9SphW1tqEVSoG2o2mwxxv5jxMtpwkBoD3s3q2ZhVD9",
  "key16": "5HLHQ2WGj5JA3yz2zcQUyWkFWYpg7pENXLjKesiCaiRyvRCARvNPFPky11CcyXBUgzCbpaXxYGWtbAdJtJHPzrqu",
  "key17": "3pkSHcrr2Nassepfr8WDJNCiUwgbMMXgVx8fhXF5NPm87WXjTWQpvTrxJVKGTn47CdDsezaJcpoLSh37Ue9w5vyM",
  "key18": "2uS1CcqkgR23nm8JhxSXaBtU8zRwi6ubre92aXtkMBZTu61ovUo81CdetRrXjBiyRZQS7Cz58VLXw8uPwdbN9dSF",
  "key19": "4yqWTrLMPR7Dy2zCqCEwFBTbPoZwsukShMVsk7rcqBaotmzEgZX5zA1GAbX4XPheHm3uyNTCcGDR9Z57tQh9b5xT",
  "key20": "5WW7GnFqxAnfLjvpTZpz5oR7YE7XCod9nwYmEKTasZzG12NjFUWcvHgd3fLnehTTMBDgQFivDA8UKiEhMc7CwTcu",
  "key21": "5DVqmq9L18xwpnE1fGrsfHPwCvaBkcomivXUVhskGXt8XrjnuRc4LW4DL8PqsAYXgxByGi4VuCaZwsnrp1YsCo5g",
  "key22": "2TqQ5TQHMo3VGAnmsBhzKMS2hoHNGoroYKD6rtXYp9svEzjmceKrw93E8pLyBR4udJmN2EonXZwszBveXgRgjW4w",
  "key23": "4WCVZirSSjvJpc8UQmvzKF5QeCQEYXtwrmFcYWNL5n6p34BCZro5XCRWD4j12ZosHeXz95jtm2JUcHqevgnSJcvB",
  "key24": "57ARuDSn6t77eZu7Ky5VXyxmypNx94R81U56H75tcefu23AnN5ZBa96DSrZ6s4it3pR1fzupyEhoMed1JYTxrvPS",
  "key25": "4nGb34k6LnHApJxdJEcqcingnAjU3KnrLRUD4pYuoHwysqxWQNFxcbxipRLbTNaEsRY4ZzoP69m7HsAsTpKjn2nF",
  "key26": "3wyaHtcUw2bbVUkioKnxg39W6mWuFSVX7ZwBiHxTVkhezYuEs9AFcdNHYvSPSWAcNCbFB5KthvKasJfAK8PW5HFN",
  "key27": "46FipdNrwr1RZWZUkYDaY3bs6qCMy8pkebF6cbowXPGTpXAcgw18LrwPfFqiswb9uibqpAx2aHrwoiku5tAFxPVb",
  "key28": "4PiSfyBoYefz9H2YFFzLHwPV15HNwnmFZnTKMVgu8cncxw8jfurSvsU8pVBCXaCYS7afraye1T1thzE91Q2wLGvK",
  "key29": "3cmYu4dYV4qJ3UssYhfikqvG4bZApvKRjigpX3WBBXqcrDVUmQZVG4sXiXq6s8zXiPRzMzeRbMwND8vp29UAazpG",
  "key30": "62eSZXfdPjXzyMCrGT7m5ebgRguAq8LrS8FKAQPWC1uEsBhL1EJxcDTLwgZLUHriK4U9czj9QMqga3Eoogn3HV6h",
  "key31": "4uaL5X7cRKwFrc2g4cvhvZVT6W5nzWuTrv8nr9K25mnaGopBPLRnZeeHBRVQXHjGcMJSbUQc2PGY1LmEetXJjnsc"
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
