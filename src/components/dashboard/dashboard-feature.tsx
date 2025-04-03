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
    "3vrDQwFCBzainD33g2XTdw4pVZx73wYR1ggmymchoA8afS6FcRtMxfMmhZYupT124wZAXpaRudHvF96E9AbNDbUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhAkn8dM8rTM7WgCm7iakb9VeQAKiPQQw4kWUZbgqSwgGLBQk8d21vjctZtPpoVnrWXBBtP4PRsSRRVbd5HQtRM",
  "key1": "431ZnPt3LpWZrpSuetYfohyjhpfYv6Tq1tx9YPQPGhqCWnGSR7prsgWaw15NztpDfEDMWV1bL23KNFNAjPHJaT2k",
  "key2": "32Sye4tWdGtHd2UkU39wnXBifMuYX5kLXh9FiHnAKAhVertcHthPQYXZ9P6Z6YhcN5vHezyHingqw9Jta1WTAa6X",
  "key3": "QDssvNn1S88ED7Yh8kmuj17UnHocXVJXQb3hnM7mFSZGBVC2X8jRkFzTnKtPRndKkocGueWc59ywNNmdWhFFBKF",
  "key4": "PvXnKm1n5SEJMsear6PbDc1LJUQLT6EosQ1Ed8uSGA3rCT4EUyAeKMM2X4Ytku56dPA3ex5bmUBN5kjoxpspwKM",
  "key5": "4gpRAYxbMznP4JVvsgiwNXSTGKK45sYpHAPrLg1w8MkHzTZfKBcqrTi2hB72AvhuZdYioWDYWtUNtZjZSqigpYmK",
  "key6": "366tEihdrD9NyA97C9u8GeUAu6CZDBCGC5ox1VPKdg2xeKpXiAbr8SiVeqc5DEUrhgm2u9LBuBhRPuyJJXDMLpW1",
  "key7": "2MqGA997vP4XzsaqVwSPZFTfdqjHvXQwyGiCXe1KshVuPLkLavMDZeELnVBSGjqkYuWLHA35L4CvmnqMGgTv29w2",
  "key8": "3dnbjTLnX3gP7S1AYjX2AZD7oqXsrZdzhBoBupphN7NMu4DGNffUkegVogorhqUKKRHkqLNg67NBbb9dcWLNis4m",
  "key9": "wEQFvYh9fU1frX6P53zaRSnnEswcEtu8YLagcce7vDLqduDgxBThZPDsaPC6yu95icd4uvrhgq8N7s13bYnuyVf",
  "key10": "zz1gcd6g1x82QsbFbT6B6oSYkuuP49K9vnnn9ob5syiszSY3iZoosrw5BBC9yiCAwFevihkSoyCwxFwEYUjYZjF",
  "key11": "2KQdJqVx2af1i4gpDjkxPYq9N299VJ9fixR49vjzrZLqoq7T6ArpuFZCyaGj26WXqtRj9gQkgskDkzjxmhaWWNiE",
  "key12": "3HaJ7m7xN4gNaWAnRALhzt5DDG2gEDpNXwufH4Zg72SUax55TueZbtjW2ThHAC3TAkcpR3dZueuhraHsezZmYrhG",
  "key13": "64SL8dqMcdJABgLGsXdcza4auPbCUPXdwkkbadGywDvrqejBkCEhk6ijcCUpBn5a1yXaB2A9N7Zi8wkstN19zKLw",
  "key14": "49padRBywoKFju9LXdzxWt1C3NcYbxVizLxMtA1uPRSo2WcqvqovvpJ29EHpU14Vii9JoQycVDw1dRjmGDc96h7z",
  "key15": "3TQRoMcyAR7CYqZdozZNjxM1Ckfa3cV6Zev5ZhhfcisypL61wrmUnEP93sVQcCTmmHqroTvZtqig9pcjcY2N2XLh",
  "key16": "3pie5Js4C4G4yBavYnRSeNDLyw7ZqGav39awT9VavyTkhjSuJrvPp2kAcu91EeiWzChva1SnuSEgVtsRvyPh2Ht1",
  "key17": "3gnvmSY6xEKS1dau1eeG3cWEeQ1wDZQURWYeFLhDYbkKF4knhvDmASChTCrAN4WCZ87oLJNSWyHZjwVvZwV2GWLd",
  "key18": "2iYXBJRAfiDcTeTmjbhRj2awyfty2WhZvSpha8XQWwa8xS47KXDk5muLgv8AGfJ41K2TfmKJKv5jEx811QNjBx53",
  "key19": "KEafSRgbjKEhQTEcnQm3wKRb6pkAhrxQDW5XMtJQPNdxgDgnohLZ1XyxQwASJwqhH74yYDM359BxNBVjJiXK3Vg",
  "key20": "2UFtS8ts4Fkf1CeKLkcNSyGNT7eW6T3DygWRUtEpCP56fJQr3JmNxZQbCkProTJJ8MUxZ7MPsr9QoK2CUbTbPrHg",
  "key21": "4D2AnXqvPduD4qPGfFFGGnURAMTEGf626Zt173HKd4yseQxWZpUsScVY4XEiHVcyDoKrExT5nCU2ZptBQTaKwbtB",
  "key22": "3SQyQiTvMNzUf6hp3AU1XShSmBNRCYyG1UbLZQg1H76NwpZgDjVZwZF2qXxFdNWfWJXjCTaT4Nnp7R4VKMs7Gcio",
  "key23": "dfTB6j3QriaYxgMKZqVm9LiUmA4y2awaaHmnk81d8NGW9h9BfLzXQ7fA4xQhWVWYgHoEeF5VEuSVcAR7RWykwg1",
  "key24": "56dbyCN4NFxsXAQ8x539NUFZrQAyZvRGGjBuw1t9NhEvtX4bhVeaJsLxJPHcd1dBypA5Vy6sRmFDgWJGT1MyVgCb",
  "key25": "5GzXnbf7fiMwwpXSb87pvFdD1hYRu7oZz3mncQ4VpkcUqfHfEw8dTpy4rNJ7Pd3HochoYubFYF1sJymJTtpnq5gd",
  "key26": "4b4633UhJoSYC7YzJm2eSeB5g8ve3quogx2iYGwkWJPbHe1nGMJjrhbpnaxRMv9ZC2TgQM9xzX2jTr6yHmgLbAC4",
  "key27": "42MzupSDo2w5trXbH4RjFg2ybhiNyhXdxJkaABn5n56bu2MLZAWEBLhqAjxuDj8mG41Sju5pLbQW8eVA9Nm4GSrf",
  "key28": "34jhMhkt9VVKUnVpPNQdWCjNQopuSLHjkx9342gzHkAGj9j4PeJHwrkBpZudLLtDTuPC2ySjmD1YCZ2VPGgPxNQN",
  "key29": "2CgysUEkgErL81UDFMye6VCgWYWJjoSBwtg91m7LwKWryos8FutL8KnKKeBe2BoJeJAabewkx3zJELWSehcFAbf3",
  "key30": "3fSnuz1EqMJZwDdGbcxz5eKLX94d7ivE6mUHDCue6n9NwMgBSjunWs1VAwFyAU3UUyCPSMGEh68j29dEaFj4bWaL",
  "key31": "2giA7Y2F6vd3YUYfJ1EnR5Hit4K3TsE6UvRjJtntCAkte5BzfCFYNzu1ywupWsMGxB9URBHhCdeg5MLtTNYRRpGA",
  "key32": "64v3WnLVj8mpsrEGA4N2uupsctFyVg911XMX2Xcuxy3Wj3b8ngzKHX6PVDo4NhYp2wPgwGeW96qXxjxqRtbT8wNF",
  "key33": "2Yebn6dq2oSMKTwy4kBLvXu3zxToruy78wFXHpTn2oagXPxuZfH3oHnMb9RWyaYtP4vnAg3ePy8Wnm4gP6mecgFi",
  "key34": "jdcC32S65crJC4BsBCQ1Dmo25Bi66h2pms1mLw2eZbBZ9V1sRKyzk38iXC7vvugtZZ2UQ66LJerdaRTwWkWEmfQ",
  "key35": "51Qrt5dJhTQHosXCfoKnq7fSVHLWx9FHVpf1YvtcCUXG5Q5xhDwRLKLQBmjR3YywSoTXGGDj7ECXgiaqEBqt2dfa",
  "key36": "3TtbpgfdWJJTwcUdAjCAid63bw2Gp24bKqqFbTUMoVRANmxLwM12qoJaGTmC5NFeZ2C4H4V1j9hrYLDVfzPFwscp",
  "key37": "2syBHUbY7JS7pE5hfKva3ymxfmAycfX26dBrjvVKB25RP6WHjTFUAW5Uy7Fqft7NzBFg6Z4ZcP14bCa4G9V2s3cR"
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
