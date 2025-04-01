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
    "5mXZHa3CqATf7y6CESBt53ybEYiC977PUiMRtVtud8mQtoSZjKC7F95LG44cGTvizf6r8hKteNvV4KkAa3c9h21J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jEroWauzawdjXyVwquDkM9YjhjMhUYDPyWbNgBxWvaTx1H1Va8xq4iyEsMdsZPD7mmTRHHMxZXRcnqYrafi8sC1",
  "key1": "359Q1Jk3D67gcxGtuy5Y5UUa5ockExepjnbEQam8by6jJCuKn1BQedkW3jR8v1d72aAKwATWnxZ3HLCUPzfEPrw4",
  "key2": "3fCcYr7vyj4pzcd7fvNXvjAK5G2DrkrY17Tzyjya58QXyHXns7qKRqmf6FQVRqTYouea1kfmBsu6QoRaq63QTaoj",
  "key3": "4vdFCAH43CBXmrhS7iA8TuRArjfZzzFRYmk3T7GSmfh5RNSf2gYKPjBKKgXmF9zgFwt3mADWamEsEHUq6311XZR6",
  "key4": "UZdH5zM4EV49Bv2Nx1qr6YZeXAXyuZ3ZxC5H6GGGUVx1FUKXwdi2n6R4hv16AeMS5bqAyL4oPvKS8uCDXw94UzR",
  "key5": "2RSzCc3dAJ4jM2mnk6XDmA2zHHokucgPg2xznaTPYbFNBpukPiFPc1HTFtrqRzEzZt8ZNypRhhCP8tq96YtCKNaz",
  "key6": "2eM9Kp4VKZNmXSbGKBTiNdDUyDNQ89LCQ23denK7uiRG8kmthgQa5dCTkndjxH8zE2REvBCaSGwBMQJyLHcZvx69",
  "key7": "23bAfyLAaQYtcjNHGJyF1CscAVKUD6hz7rnPyuMhhuofaijmYVoFU2UZkEVXK1RCpq7mdzHXX2YNNNxLeKZACQvg",
  "key8": "2iv72QjUaqJzxofsTYdLWFUQVPsRsXLJro8XifQq1SmBLvZit8fd3118Xp5dWd1dtgN4LgMzP5S85rYq3QatWW2T",
  "key9": "4dF5dSkneepN6dP5GF6BZVoXHazYn7H8mxoseZaFFeGnYMyxCXo4eHSbnu5P7E6eZPLkZic7k8JCEA82mW8rWsdB",
  "key10": "26hSbKyRodxZke5eHjxqJseL9mcHyg3mPjodBJFDHktwGaDx8nD1UcdhUzHbidkJcWwVTgchXGtsHdriHrqF6dvz",
  "key11": "2iUm611o2SyaqFTrKQqPtgwrTRtGSRk3DJQZhbGkVXs1jKdmLvv8MEfcwpEZiDmG3cBBRbe7F8YDRHzwUthxWPHi",
  "key12": "46M7dH91Lw3nn4pGL8X4H7avjEWgxjFTW9R8e8iS7h5dBPt7GjDqNb8DtxiWqkkWDNcyizANPRe4vjdkaYCACMqg",
  "key13": "QdctsVLWCvs5MovJX3J55ngMU2nyLqf4a6TeNS5WgDt2Hb2oq87YSeVmAfuDNSGBCJCkPC5nc84ncZFpU6SvLkf",
  "key14": "5yVzrrUW79adS5zkbqxwEgfovV9wY9RJzsuWd7wvtqwk8oAgTVDtsiB8tN5LoDjahqs8MpyV8291t7riABg9ZmbR",
  "key15": "35Jzxx46SvTGSzNryJQw4LMZoMhGd2E7PXUVRWJixu6kAafHpDevWqMWDdZdyortGdmDV2EP7hqyt8nETpaJkpuL",
  "key16": "UpAK5DkwUB2f2PWR2cGJKLEwVH1VPbMw8p3FYeWHzm7Rynr9u8qfHjSSH2h4nvZmeQZxVYym1WwbGQSPtHd4U23",
  "key17": "5CJQzWbN6ZRYy6GSE9Hq1pFKniNrrN2voJK5LAWj9vXV6wEjXMobbrssLAUMujSTA8nooFubyYqgF62xvQ3APy8Y",
  "key18": "3kCpC62RAHcCSbwGytpsH3RHBL319G2Ew18SRA4C5TsMpBh33pzVpNZs5qQoWXjW7AM8H9nQje9Z6mZ7YZybg9nr",
  "key19": "4irbw7LDtbUfctJFaRNJBLfae4hVAhwut2rDxyuyWi2gjFEgN1bx1Hd9d5qdxYJCCWwoLrGTwrfwwzwe7ikebhvk",
  "key20": "4Wf7SyxqELy1H6cku1o6HiR9bqWETVzRVNWt5vVaeCid2vq1eYW72JJ5o21wUqMwKJqVBncxAunatCLaF5ybzcFQ",
  "key21": "49Z5CrKYYPypzcbucujeb2vo9miL7NXoWMHXE9CN2uC79HsFLxDMx7CpTuaZFV1KJ8qcMwHS1CGPW4m9jZmCPRSt",
  "key22": "67kXsR4kkD1M9nSM4sC8aiCqryWAnho3n1CDYfYMDEihACAANzy2bJEuZPLLhoQZ1A9cPpfh3Znz7jvqiUmmexgx",
  "key23": "5DDdUf76NnfSMGKXP7JTZA1xyQFP4GSDYE7rvr7ChP9VgDLahVdtQ2c5G3KyLmJVTsuVwc1QxHjA9J68Kvw94tfH",
  "key24": "2GTRRyBY5WaTjuDymhK58CibKTr2vTxJq5koqmrMGFQbZw5tRKAtvidMYzTTq6CyFziwRuyTcF5gVFe7YYzdeRkN",
  "key25": "3stmXycgRDTRbSzXf5afn9VR9fFgU3xMb8BdvNt1PBWrMY62JgUEELWJDJsyQr7t2wCXPF7kvwJMTqD4M9LhcECm",
  "key26": "2JmAtyoRfrSUmRppjKresnVaiTEgBLYA2jD5Tz88RtV8p5vxk9doLprGmkaK5eZR8XviLFM6UAMSXJMwJsYp1F8L",
  "key27": "5hgKbN9FvcQo5ZgsKeg3qnN4RdPeRkqvsMW8aAhdUHrn1iztHWTqt51QdCe4mqmSXDYG7QdSdKeGMhQusMz82N2M",
  "key28": "31Q2XxFF3Pdgid6VyHqCdJc1adf89TfBcodZ5KEKrsq9s9nRQWZfkaYJMVmn3qvpho3CqbSMdSwDxNxFZaguoPoe",
  "key29": "4iQzzETZ6a4AvPo8bp4mGmZ24P73JNE3wKnQWVT3ZFWCEe7ATrK2aR7uXUircQHLDZ6Ea4VkuWjk9oJHEMYtazVG",
  "key30": "2k2y6Pn7nhMzEVcEZ2inxjQv5SsYAjhWcm6Yz6MkBify2a1KHJES5x2nawQKXTLnsL2SUDB2Z72XzvLZHB5a2FAy",
  "key31": "53atH8JRjxjtDXD5WKbfHcUqQDjMYyqyCnkmxhQekyyMSo8qrKAT9qNVNDLp6cYqgkbqhrhXRpBxH3UeKpWpDUde",
  "key32": "5GvMoUCRjU1PdfuuV5EweFp9fYp4iRAXf7NVuvPHoc8mMFKjejWUs5fPWfARgQ9cSYch6iwCYrneNRcH2Zg9XH1q",
  "key33": "ABd6sHiJreQTRhkqTjLd3w4MpNuf6wK56DHnjwBagKGd36XXtBUPMrAJVT9K7DZZ5XhsoFxKFBT1ML9e2LXuNs7",
  "key34": "4iT7238Q2Lzk2TUdJ4RzC9vFFEPAXL64g9oaUCDHdiL8bH7cYdPdVdZkRjZS9xgcScPYE8TVDyCDNgaDQuifBdsY",
  "key35": "2T66uJ5KEdDbfRHZq9sQssbacd7RbML8ZxwcTvnokPSuwFmXvPHbGRT5hjHrs6Rsf3peuC9PuchGTzSXHX3GwXrZ",
  "key36": "4Dd7G57cDAMpchqs8rykPGkj3fC5Pc2LeprcYNp7wXkoTtqg6Si5PX3pWqk7mRtbpgupqWit6J7Z6uoo5rYypPDe",
  "key37": "3ru3J6iErW3x448Zg51g5cHR41ffPNYeeN6DzN3YN8nJUapiPcXkQfdgQaQn4fpCNP9HEZnUNVAQa6yPosXTYEcL",
  "key38": "j5bjpTAKN36JLTNu7VLNyyAxMzz5k4PrYwLauQrgUXS1JhnvYT9oZnheCe66BzSMXLZucNN65WFPibp8FDZe7r4"
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
