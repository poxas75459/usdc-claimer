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
    "4ZHFFYJaKaCTSCSMF7vnJsLeWyj8PZtNqoutoUTTtTUsMCexaRVDePVQN7TK9YqXMcQ7R5xvhavdEG9TW5ecAd89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f49gWuTxHq2VEqU3iHRaFf4NExtmpRPN2RXMpPujz6ZbA6rg1hfsm798NTdL2wq1Y5BuU1yn1KTL3rrEbL1ADPB",
  "key1": "KdFE1hxYRhPxYmX63yVpmRxXc4qT1NKzzVN6CCrNBBMkEVGMDLi3zVi8ZMM6nrHEHGVrCT5ncXU38mDWw79PWQF",
  "key2": "658C6XrUPHYHRFhLE6J8hkJSZtGGYR6xXLnT1H4NnvfBjH4zPc5dfZ8cMKsUbuo8mc8EoyC6XeWGiyNcvqrdkZFF",
  "key3": "4LFYYtAASaohBDDuXWdcYXgBQeBBy87kgC9i2UAp2Mz1TaDTmi2QChdbsemJVyWqvzSPUCpP1hiVvvGe9BUE38Va",
  "key4": "2h938w4tUGZVyTzUfEvqq9y1gKBNwXwDBmGJGM6iMa5yQ6APwj5ACdCrq1VLC6e3uojHpS7n6h3vYt64fRQ5W2u4",
  "key5": "5ecTL6DwecCeAJa9Pic4Zj9PDyemJtJweE6gWE7vHaZMHMqpHouiN5gQQzkHSo4BC9Y8KVLFvV7B32B8oTRK4ycb",
  "key6": "HmoZGnd9mQJHa9Yyt3kRWTKnVEFjzFFv4cUoNX7v3qoCfdJTx4bcJUUNDgu36XaRsThp87u4HvBzeSf8CUoFcCs",
  "key7": "2xuRpsQYyJawLGGtse9NKHQTC1ihTWW58xjqYJUYdcz9GsckdYaTgbbpvpMz4HpCSzYvSWAhht97n2kvk3pen686",
  "key8": "5r3d4KV7823HRUgueX2bQpEXBf89dt7sZxFarG7LLQK8VVN64zpemefrWMc2mBgXVpRSXunYfTxgRuFuzVqVbVJP",
  "key9": "3qX1yZnhQeVqnq4MHGuAqBUPtS8ePzFfejNWgEV5hgQaeNpQCq5C2LxjkZLyHwSR1FK3qu9p3cBwjdNqfKfynXyb",
  "key10": "5tTbPyF1cG6natvYjySwL6GAy88cpPwEFkVGFpyWyp2CQ9i4CgQpF6NyP1hTq8v9ui98tnnBVypRCC15Smkoz6Eu",
  "key11": "BnNq7HyE9RspS2wf8swu9TtYCYX1t3Xzxr6NDk2nRKCsu37a48SJjBufMZxeVAGEzgN18XME5Cz4YLXVnD6T9ex",
  "key12": "4USxjogFMmFzgkfcut8PoDhEi9aAhHpqM3BR7WMdP3ZW4jy1ksBS4SHo9C5iTY4nYCWAJmYK41hcY3tEjx7FD6rE",
  "key13": "3Co4P2gEhAuaiq7MimFXrAppGHJbJghLi27dTp6PLq35s3SdEkgZaafrVaVTCpWJtp4yTM9F6Kny3hLDi8vVLixG",
  "key14": "NsvMmR47pEk5mE7v1MKgPxbeEXsicBLMgqFtaAHWxAgh4XAkZasDwHRRC9dqveeK3N3fKzpR7bPk8mo4HKNgMXS",
  "key15": "3jky3b6EGRLRinLKW4eKTXucp2Tvbt2w5rFeiTNagoNfoPWErJoHp6Cf8XfsdrejbHgB6RcttDDDPV5iRz87RhFK",
  "key16": "2icXRmiA3AvCoQNJej4E4nRUCgkCfPDwxV3Pnwumsa2jaTTrDu1MupuRtKEkPNoqvm5mvoiJYW5SknqyB56o3Kyc",
  "key17": "Hc5rVeiXd2eok1ZF7FU4T5THx5iWedYbFk2kSaojfGqEok2jZLJ1NTJTkSdtSpUC56LNvAj11W1ePwFUqwxKwJQ",
  "key18": "3aYp3YexK3jeSPPhhmG8WUYg7pNBZxVV9UnWwHVy83UyEEnFVLPgNtmcj8wkEBCG4MmXet2cNyf48SNe9LyK4KC3",
  "key19": "CR1xLFzRGNJzcPLSzLocZdfYmwuddhTp4N7uTb9k6NxNgRkQw1EFRy8Wmh8V4LdwoCPBw1zbkNyApzKDiYZMq1k",
  "key20": "2pA3HMNFdndpLmBvMmvLKf1tBWkQ6jQztcp5xdub9mhW3VQQFDX5J4THoe2i8ip6PnRkXxPNKnGBxFTJ4Vw3HptM",
  "key21": "2itYjje8FboRKA3fV3DqkhviYFey4VwG5dH5pU15sz1rtjQxos9sdrB3VUYCv4VbbZJHFoeCbStnNwkt8D59yHKf",
  "key22": "5aPPTdybmgPddSwhcBxUD9jPkQgRtZjbXhWpyPMzEwNCRxKBw9xCR1sP37C86jLEkjUTM4G2DutGdSWaKq1pWTtV",
  "key23": "3uvNHNxujpenAD9usDNb1monfh2QAhyQvMhtjnvFiMcRuZFizYQhP89t15jU8S41x6P3Ys5CMY34U44Tqjtpnj7Y",
  "key24": "2HXkqiF6oPuqgk8YdcmhFpSZj41cggJAeADUasQtAQ4nkpPxX9dMbUnpUJTTEuVm9f45U6B81gdKpxXhebXXVyvn",
  "key25": "2PSCgt45QsnsAPytZUMrfTVWJL5obFgrwU9RJEyqCzfhSWDJgWamfT2Sq6aaDraWCVvaxB2CRwCYFuAPQvPNHDBw",
  "key26": "5fafdaBNh1S8ECMGhEASgGyfG4XC2M3TQPfeDdwnNm5yuTkc1RCxzfqx4Mq9B5Xdr8GTRoxKVfErgP6A1Cqi5NwZ",
  "key27": "2CjgEoYV9G3K2tuyPNxivbALSU65gvg3Bfb3RzyFrJvKWV94vgVrmntxqwZeJNVDzqELE7pyx557HGGTGWfrv2H5",
  "key28": "5m2WTdQHWfm7HgpWw88jDZgKcH64RqdPHv632WQnnVnRh3bnAro3QbsdyysYNeJdbRJH5eH21NBmq7xXdCPQ57Jj",
  "key29": "2X27VpiX7SFn5PoXNrsABgDphjvtrPVdZbQEF7YMV6rcH7ukQ7rCbJE6jTt1SkP9d99vCMKisYr8JSdpq8bHs3f4",
  "key30": "22Y53V1DL3UVNqaRPfQwvbakeTtfRtg5W2AkarnmzKgFtV9d9HpaaZAcuycBaX7ns16yw4SaYsTtbEujwnTf4yNG",
  "key31": "4RCuSQrVVaWQW37PJXdCi1zKk9h8jgeLJ87HUdEzewjXysPaEzn7FPYnXFYNevzn8Px9ti57R67MjUf3WuAw6W9d",
  "key32": "4mLEBFH4ZV3avuxZ2AXt9ECNUohwxKNJMnbavw1ZiMagPbKLiXyShkN7aDRvfpvpwyVFYpUx9uPniVRKzmtSLKnk",
  "key33": "2nzhUxNiVy9cWc7KdZUj7f2bJDrT7Z9G3NH2GT7MjAwQNw19SXjWv285BzW9wLPwh9ZQn4VVGtQVJsVm5MEDtc9K",
  "key34": "4zeeqxmSNHSdXv2EHXkjgQp9K6xXCe11ycyMA18AmF1g5FmP5HwUfddZrMbms6Vjz1kyZZ8XEeTZeMK8QdpozmWr",
  "key35": "3ZvXxMzN3nk3scu98Hi5x9jTCmYTSviUfuyZSSGK4vcJnYqh2d49AN2mPwj5FrTXayVNV9giKwoBii6DucVG74sx",
  "key36": "2WR5U1bE4wUbP3NjY3jvPQihFYPouZd63ycWr2xNizmGeny7foGnXvSqhzYm1DsCbDG2raN9v1MRDMsmE5jDeyCb",
  "key37": "5U4dSSd8D9wSM5NViydKm1cTgBg7FzsM5dLrYmxMqapthRDC7WV4PuE2HKE48bo8Q8eLcB8gxNTbzC7u2kKZ4sWY",
  "key38": "41h5Kaakb8iaEpc9biLgTsTCtQWk1oUByw3RPRBJSYRXNg2h8qm81voemV7RTxzjUfWNx3hs1WV9eadztBh3LfoW",
  "key39": "5TbkYqjen92sdfLYDMPSRv5Uf9pgoM1ePoJFVop64rcMz4aQRZZt47Bu2zMWPv79uEis9ToPuhZVe2wni8NQ8yTR",
  "key40": "2WDEhQqxiGbJaTp65DjUP6fJawP5VxA4Zsefdp6jopFMozuBDnTkE1zTENENgYSHRgutKLcnkD7vSAQdXE5NvWiY",
  "key41": "vxsMgSgiVpcyXwQv7vP2BiYfHzwao6fdYtEEFtgvrY2XKGYxK1VwNkyRnyhViYffV8Cb72mVfZUpRaM2dVZbCCH",
  "key42": "3kJym6MZbruy5zPf4SB4fEBEwpi3SjEQiMFbupCgVfMpAKWvfzSt9UkuMeH6YAK2ZHuVrYeRDQh8KmsDiH9dY6SK",
  "key43": "3vQKod7VDNBwVKGZtxokpVeazV1nP9WXQY5d83UvmGu7jcs5aaQDzC3nZM7tA2ws7BGvb9aaiZiW6cqsHGP6gZBs",
  "key44": "23YF9T54LWNKVLzxVsbRPBe5Kza8ecZrEPdfJC1mNRQTeQiE2AohgruD8onmmKGXLKcaVDt2LWSs5JAD1LBe2FJh"
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
