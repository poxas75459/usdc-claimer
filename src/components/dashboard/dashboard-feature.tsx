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
    "4Xm38WkX8MyasDU7Tku3rmSAdKNtbpFPAgBPSDM9pfPVW2PaEmoeV9x7QECAQS29ZuhXneWrWuJaavhAKxQKcf3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63GayRPhRUWn68zqsW2rxaL76bUXi724dhxt1N4nHuPK79GKgNuJfecsWbEtkVaGmqvbk1LePVQLoLEZyRHq5DPH",
  "key1": "2Bc6aybrn954ZQUXsLGbjUkcdgAve3u45szV6vYyPwGwd2ycUFePXhRNGfwDK2Vk5foPc6V9v1dRi334fwnytR9n",
  "key2": "omsxtsafDyLuHNziS3sVkoWFC9PKtcVSm5xHLkwvPbrDY5mL9jXbHHmopSo84GZYBNSPnHLBZMY6JbwpsE45J7j",
  "key3": "3nELbejXtES2Z7gP3W8HA9trASrHN4FeAQ3h51xzRj9tp9FWBgSHERk5rYeMvKq35p3qqqAZYj8aYz6SNaeVVtqt",
  "key4": "3APW7MuWaV6YEA1r1WU6iwxJ8BK4jbTvdaEFJ6khxzUGkK332dFs3mQUKQuYtCvXpLGBr65ncNhDDdAo4aZUZDN5",
  "key5": "2t8zUbkyURPVnFgtCnCxZgeANe9G3xtuxUSmc4XDPSUpJJ9woxJ7UwMNQLQ5NUJHyhbRWohfzLDqgB4jPnC8PqEn",
  "key6": "31B2Ui9fB2Z6JXyNawV7W2bW2Z6ngXYpa2CfuYfdwL7CtaSVGqYFBQHq4ySofxcZ7L89HKZ5KYZaCY3zmKAWZcmC",
  "key7": "4V75n68DwE3jNGDyCaJRG545uL2mKTzKYoUsQaHvDKHRjfnKWHfJx8ybhrXzq82aJ7HcHZgdEKEDgYgptStrE9v7",
  "key8": "4D5faVeFSj4Nxh9sXEGpXZC36AqgMvc3KAMDD64J9UyHxsVb7gwPC3ySiysnf4fKpg2KwnpqzsAwPcCJRX663um5",
  "key9": "3U4qTBwJGC97wVJYwuhF3cbgswCTLAFVzvb2XuWrniP1RtkMSvDjM7FGEkxQsDTLgmcQFqTZi6iqa1aph3h7GiKY",
  "key10": "ibcPkH2LD5yeJWAN7ntQS8KLgmNwcu9M7gjAukxndW4LGT7Rrzq9Fav58NCBL9o8RfyxP6cmUoc4f7M9BsJHgtF",
  "key11": "2yrEUQ3WnSZycoNreBjqAaCgRWWuA5znxSTT8MyRCJodNs7AyxKmUZWVCiyzF7CaiM5FLFXCfHqMtC4YpfpRuYxj",
  "key12": "4ts36tDWLFAjJ4Ms6vJZ5jMYhnBpGvw1wsMK8KuBFLBPnhCMz9ma7dbbHL7z9vT7qaFgomC1x8c4VJMcxjLDN2hf",
  "key13": "5bH7Waaoivw9TKpZsX3TUaBjDTTepCTApXgGi9QrCUXx9zNrURvBdQJhxZJN7j65BbRREgqe4Z6cyhbjqVtX99qg",
  "key14": "2wr1FEf4Kw6ycrgbi5sqaWmzC2mZWJQbUS9saLkRTdM4HKm1N87U4qs4Bvx2oCYrByRRS5abE54zLNqbWzhh7TB",
  "key15": "5vLgp3PaW7SK6k9iQw9rVyPmHNSsYDn66HxEUEe4MJxrFViWZdsphMdV6dWMeZsa9VFnjuDv5QHWeW5ADYevswCR",
  "key16": "3zdhnvARgkbUUkfjaPgkZ1Fbudar8ZnN2Gt4HWAzHgDCYZJpak2Q7iHGtNpPTY292Jh8D2R493gwckcjfMJ6NrPb",
  "key17": "3u426dBgCLjRrz1P7Qxzu3Gz9tvDVutQ9M39UYreK4L5A2soN8QVqcsuVUcmWg2wAJA7FtxDUdvQnJo5xeJe4rBb",
  "key18": "5dFFw9z6sFc1Y5Y39BH6XQkPvyVN2dtPkuRYTEUtQqgcUCaa62tXtvqm4Zn6xivuV5euEYMoEJkL7DT61zLjjBGd",
  "key19": "3Ztre6eXfM5MqNvbLmmpu6Te3bf9ZTb9Dha3V6xhJyQkfw3gAetjEpbSXGMi2svgkFya2rHSvnug4HKr1ACkBZBD",
  "key20": "5Ss9TaAfPdg6kDpgWBDtdVBSGVruY5xNfhrv2yQ7BEit2LfCcjcuVDfQcu7EsSDjQM4reDcXXhp7U8NPYcYyPskY",
  "key21": "4jyaxCbEqYKKEaSPC8cHa4z84UErVRvVzVrqcYdc9AzxtC77WE7NMhatT89zStDFDC7v8YSYohb6zrtuy3LSgkVk",
  "key22": "2E2u8PpMmZuPrxoA2v2gRg1r4qScTaWD15HQZYMBFcX6LtTFBFkdDu3kqmEKDhwyVrKV7Q9QmTr8YUyeHWu6za2e",
  "key23": "3WQsCkpaPdU9YteDbhifpq7FjzgymW8R51qY47XgYLFSiaEL4hqzpEx5YPJXG2jyiPANEhCnAxQ5BtFWYtsZjPH2",
  "key24": "59yFw8JbpJ4qqiGf8qaLhmwQW5VD9NWuKQKCALFhyXMZEmNLjJ5DofRYiapk1Afg3tDqtSpcM4hUay7QaxxHisXZ",
  "key25": "MqTjWNg7jRo163aCtiug4bi1jJc7hPtzxPxZVjzNdiwkms1rE7coqpJMiucqbCZBr4MM7QV7Wz8r4RVEbtYnu4G",
  "key26": "5GWYSvxRUc8KHqtSTBbvC7B9qs5pi95X6GNaYC5jqmxqH26FVGunwCG1R1japM6D5G8m5R99iberhTH8M4eLASJr",
  "key27": "24zMJftfg2EnBKQUZwEHBDH2jbKvJLU3D9ktQV6Tj69JCzRPE1JpwV4UMnqxeGTEA9p5yBLh3W3Dvsz1R3pDVFzu",
  "key28": "prUU9m4KejEwPFURc3JPeKtgYvvscDWvuPVrshCyYtNRgrC9KRQFwHyXiyprMFb6CqELhNBMwcUNo5WekSkGs1T",
  "key29": "29utZUcQTcbqgwWoPUqyYVbCHmTBhMP8NbvtGJsivWhbtL82G7juCN2KcA4PNFue7vx8wEpkdfkuSfeHoEstg34Q",
  "key30": "4AKAv6yTuAFmsZcfDP3zi7vQixffcX4fZiMy99GMdz1sp2EyaVpC77V3majcmbrq1FDYbfRBXTjhAGyDDseiivx1",
  "key31": "4CKMuzZxeGUHt2caK2asm1tnXhsixAQcHr1myLXGkqLf8D12AFNaC4ckUodpQzQ48ZvDHQSHSfxWubaSdohaFUvS",
  "key32": "oCgetugiF9gzyHZ8w9fHjGsp6YaNGr6fMSRot1wdLY5cZzMkfW24kZE2hSWcQVtT5JUFt9u96UnFNyauk661HoJ",
  "key33": "5tZMef56dXw4nsstqtzzWBHX77bJ7LVTdtpVHWQTkFfokfmQ7qQF5u2hnzHaiaSnVUNapsdM9JXSN8qLCTLKVuf2"
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
