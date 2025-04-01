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
    "5FUqirSPGjUUVFA6FCbDByR4fr5jviMXdir3Fj7pkSQsbXx99k4FDfVmeSwnKnBU2Xf3oDfA4w5p3P43qi7cgzMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnBUfeHdQi8ERfR2NCXeoGFN34viLeqhpPHexGtzDVKbbZuKXf3cQ97b4TBwGgqp69Ab3W4ciDqgcfXKDdNTjGZ",
  "key1": "38cC8Qr99z8p6eFxkUVqvMf2sPvU3r3EsruMarCzjmX2U4i1QjZjURHEy1oWeGztpHdciTtLL5aVxpnkuYwX2GYC",
  "key2": "3d78UGzXH6zrJzDBLTEzUaRy1YeAjy9afjXAYa1Edt3QqfCi8baS89Wmx2EpPGaYZfJk4FhMcuqqkjBGvwfZKTQy",
  "key3": "QMo7GqGYpxYujJSxP18EpbRKQCXVAi67SJMgTBdv5Wm1wQwTcLiarJaqgP2Gyyj5GSLfne9LvtpBftRX1qqkGCo",
  "key4": "4ibQroFejKYbGL8u7qcdc1ZKMUXQK87odHyV1posy2iB2fUyBQWKtQf4yky9CXo5UUnKnHC1kV2npdMG7uwVdQaM",
  "key5": "2RuLnjuM9DYrVNrkaXoF5AEdxrXNjBThgwF1wZ72VUiHDpT4BuxsM4sdNQSbf1VWqZqGuBbZwY2swM3PRpNa5Rh8",
  "key6": "nvAkhmWap3vCAVfKBbKXBFffCB6Ls61G8PxheXPXkBdjimgdGN1CtbtdLi6p8Le1jmXYoWF81MgzZjyytxxnefE",
  "key7": "3wxFeetXZcJVWg1t1WUkoshY85wcRE82r3dytMWaoLHHHQ29AyU8H5XWB85m8EQdgWDsLzHYUhubygRGutJLmKDS",
  "key8": "UPgTEoMKuxsuR1SjDwxDRM1QnCos1iTcBNeqBzrWngXtEaviyu7BsAhQdGkWAXotxtfNo2qrVFNvPpJHSL3vkuy",
  "key9": "EK2FbcuaghvoX2RSYF5TJCGRC7dvnZgqj8tiiUcUMJxMNcHurnuDZM6EY1iX7TwseNNSHEwurx3n25R5MRxbnjk",
  "key10": "3LnABZ5DQevrtx7FATVwRHqZnVsNX9atDtyjzLK5axc3v33fwHzDpF25hxqaw4es53odWPkbTiur7m6NabMEW8t3",
  "key11": "2BRXvPNjtkbrxvmuECYnkYr96m6fxXoy2hAAaEqFB1GGCtHeBMbRdwHffSi8UsZLTtBE5CmTsVSy6opPgFB4JTMD",
  "key12": "4ZYbEEZbkxzETTsHub1umrVg7t5qPtL2eoigTSsBpaHQcEuSoMHCYpHvRMREoYFcEcUhzshPBYXdRAniPpgngVbG",
  "key13": "qEnD59ReKVmfCKPJRkiQdW2P1YAzccBrnbSPxP5deVcD85ukybrbZzhV6jkmoz3o4AZuH4sip2CJTHvrSXD5J3g",
  "key14": "4TNGBD2gwx3nqkaN59Epv26EecBzksqCDChrrG3RfjWmjUQfBcFtuuYNouJt4ooGmG85RxY7235WrBtJ9zbGv9S8",
  "key15": "4txC2B9kYS7NDLZErNiRQSw4siFgyxpcJsvJKXdHvUqh9Sumg91RXEinWbwZz74sbKeqmX9ZBrPV9WwSiyV8cSK5",
  "key16": "3GPcxPUUc4cbz64CEbytaZkyMBXNPet9bn3831aRBzLNoTVZAZr4jBA8GuAKF8ZXuxLhdng9zZ66CTSJbd3UhaiA",
  "key17": "4CMWzf6hUonEFpFHRTWeVnjRRM1ifHD65JoE5YZ2aVDtw8BY5gTgQqN56DpYhTsT3B5Py1e3PAJxDD5X1aFXx8kh",
  "key18": "2pjfHxHtNs3CYZ8dEDJs8LULfPuPMV1G2UFtSY8pMaBaAGdpXF1U6oo4GvA2hzd3yTybdSdh7ZzWKQsZgQR2UQyR",
  "key19": "3By6HAtfxLhcEMdt9nP77cjSkRe6CNvpengW83jofNMv2G4Powg2EoaGAg1UtGeMqBJmWNsRcumcrSPMvtzbeTGH",
  "key20": "2VZTPM8QjrwxELJgqzYe2rhDKnmtT9gctJaePCxT1uPWBmrVGuvwcaK2XPQSU1pBu1rZrWZA1ri4pRjEcsoed8Me",
  "key21": "3MakVJwo1Wr1unXiD4WKEFPVjh6EEfQi95qMEAaRgbbNJSXRoJy8rr8CvMNSA39AKz4evK5sBuB8z5ikHtou5Tn1",
  "key22": "5obPWqvjUVnQuCkBEJ7MKFHMVkFUXBd85p52FWehBLvY7ttQphzhUkx7WgFsP6TxfxUWopQkVmmb1onshmDGwTzp",
  "key23": "5Fk77yGMrKtcMGF5bszfMoBMnA328mK7EWTDR7LtZYJj2tgDhqHo2n8qTXR6wbZMWGGuqkeT7J7SnV9HaXjDLzVw",
  "key24": "YyRshjGUC5U5LGrA3oUdjtd2dHhsfkmrbKmBhthiojbTunZXZpkiFFpnzBCDrrJxuo2HZZbSiBFysatrqfh62tD",
  "key25": "RmbvkG3CC9ijw42z6MYonJjM7cy26oX2NFw4NH9jB54SQunBE3yBXXN8ig3V82ZD15BHCZTDUCLPCxk2tF8XZpH",
  "key26": "2W66yfEb4hHQimFMbjVLVhTdF9aVxMwFCPojuW33d2SMwSEXh6DuR6ubUdQLY27qYsRbq5SYKaYyLTpr9GwNB94c",
  "key27": "4Wq2t9nKAzZfvDhbA5Wj6R2vcHrRSL3TggNTyLuJou2rPJuB7LGNhSc9nvgrWmgxozVQp1vc2C5rMvhSDBEHPATE",
  "key28": "4sPVwaZYGvT1LqEeJUbnndTFQ4rfDfT7aF2RG7KkiVSFAoo5P1SZjpR5ZH8BMqmT74RsXMJ1W7WBnVETm223MerC",
  "key29": "2AwCt9wXe5hg6NRnRp281CpN7JtrfncMndansb2C3d8UWxDjVeQpXAP4BPCdVZkSzEbz6evnTsehK2vNcbdLJ9Ye",
  "key30": "43S3oLwCG1JZq4AV99NvqYqa6XQYb7D7hue7yTW56qudwRM5VuYU8WFPN7PeAbVEqYPqpvomUnto7NdigpAaqrt2",
  "key31": "tbMYcdFrCtsMJoTGj6LojLZoZjk6QApFDX3RLQEpgELVQ5zoitV8qgvyNFd5dABCPoxJR7P33JMryRRJKc2c3DJ",
  "key32": "tgzj9tDmCbytFq5K6iTdGdGzBz48ZZZZpgVBEoJU1URaQJgetXbMVpSmXhAZu4SQBMqrsG6buSEfHigvqek9TjN",
  "key33": "49tvUCmxZmrNiQk4wQwjtvsi9ajsuWDH8x37iwjoNMwLJnhwxWQ3J29MRZwPyGH7hXs1KVoiUVhs9wdfGXQF1J2Q",
  "key34": "5rHziA7fdwzx1G6GLWCUSb1kvMXFQsAQSTxsrRwKpzBtrEE2s23hJgpFdk5FL4jB332WERFgh1gDNP6Z8AMB3xgt",
  "key35": "3L61m2KsVJiJyEubuhHMNGYXtXLY3FVoNnjQEdoa73dMvuYSTnfGDBenBYmmg3mwR1gRXoqbRypw7UJ4KP9vqAhf"
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
