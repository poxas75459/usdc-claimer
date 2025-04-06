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
    "66HFx17s2irJ7Bp5J9ANzTvLLHWopAcpHWg3XqJSzGUvXxkAue3oQBxUkPL8gBQbA7WDopmFGQcdo9oFpeMVPwaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBeN7Q17tS7xTxV8V3nxuGweRa6uvzdA2gD8ubZenNZXAHEy8JwLb33JKJMGp3gAePnT2Y5YKo5eSvkcCWQAJ22",
  "key1": "xS8FAA27iPtAwRtobAkcgteurMxw6dNUgGB8w6KikoNuk7FKxftaq9rWWW2gm6AkkmdwStRBH4F3vL4bxC6JZBg",
  "key2": "4WHkVAdmYtLpciwAD4nZbbRY4CbsbJeeRhHg7je5BqnPhUwoBesahXKFu4hDcqjSEFaukeXVJmtkU5U1A77KDWLZ",
  "key3": "F1jrdv5iW6NVPjnTCnKpcPNHR97MXeX5vtdAjYDkN3rS8orPunVjL2TPsaqaUHoTRuGZCi364ve26iUKj1EbgiA",
  "key4": "5XTaEkFruBxva2hgHbwDGAjMfbSwxWKFzu7Z5D8bV8d3mx6URTooCQaC6EjGg3ussDx9S6U9hcWUnbxW1tJnfpgY",
  "key5": "5og1fEXY7KXwpEkrAXAr8ioLzJsEyLXsQ9VXhq2V57ZXxp1fpod5pSkqcr2YwQLzsJfdt4Di2fAZ464sedKE5a77",
  "key6": "HhocaFCupbUxqkBgDBH7TW2cBt43BA3EAwZ6XZ3gbL4qEQ6frDVdm6oezsKQSEEBUsEG7Yzh3HqyY5H5TFmw34T",
  "key7": "2M8uxevQ1NqvJ16kxbUamrtJpcg4QNRkXUdUE7sqcGxPcS2F7V1pnVWW5WJR3NN6JG8HtrR5Gk7dSZtK9Yp8gokq",
  "key8": "2oD25xJgAtmGQ9q3aHk23eJT52WDDn2da35oDj45MFuMXoXgEM3LsobzX3xcMpyT3m1SiJ5QuF4gPNxpH84R8Z9F",
  "key9": "5A5hm7UZBTEpWfk5fbkCVdcjAnt8W8Qgh8j4LydbD1RD2NtK8CC5nSuFCEEnEMgYK2ZDnRgzJTCjXjc7LRGytyU3",
  "key10": "3Kzit98zWdP2x6HT33XYv3kouUN8orGHk4duxYGpxkypjMyHiz6cq9MpRkNZrZxeyoVjMmXfFD4RigBiHFoqYjND",
  "key11": "4GZ8VY6z6PB1KS52mN9VN6xUkBVEsxBkTvm6MeCcb9La3HcHgmdt6qC6qZxyCc7XQxPC2mN6abAVu4PQqq2FQHcG",
  "key12": "4aZa5B9NZBSk6fSczYYBrUq4UCwjhjmrk7x5N4ELMMteL4Cdm3o2fu9Vj1WuQuFUqJsQ6rypQG4gCDXGZvHwwYdn",
  "key13": "5SnwWqjppME4iY9a774buBfHL2woJT7zCAhzUGZ1vdutNDXLfKNUwRirGuKuwpfpWm8vCsnHixamdnardeVP4moR",
  "key14": "gwCZcqzbiZVN7QajkJLKjGop8dFmpVd2NCQwL5G5ASi8RQfqLSKbHtgUN8J373tMvrpqP3W6Z5WN3k7N93CTsCs",
  "key15": "B3KEgQXBqa41a54ETaipfZ5bCtsaGVsBfkr4FckEQeFJ3ovqXu8smZnMKRGkZWcyUY5M5nHCvwgc9Noin1no7sh",
  "key16": "WJHbmaYyZis6uevFXxzdMTmkSLMu8zCchbd4anoouinmcLfiNdCPiJXNdmkrdG7GcY9aRa86RN7T63mfVaNVnfU",
  "key17": "ZWuTQ7G9Hun4DqXr4iygfxm4gAX2Ms7YUCpdxncJpANmuifrRH7Go9E3jxW6A4rykrNUogeBXjAUsd9xgitPDTH",
  "key18": "5uuKRAchSGhy9zffHtfMS4CXHn4V54Hb2CEzMXGx2sVKduYu7rEcNTVAtJSfVy5N5ukCujXjrdvBkxXgBSiSRULz",
  "key19": "25e86DT4uhSFc5EuBuNXEUzh3aigg8cTvKw4m1iL855fH7X8scWd2dwj5AwcEJej9Q8WdL64fPXwr53d717nLfPV",
  "key20": "KRL8kEcJ7qntRjbvkhJRFJZoGAfH1kaF98acdCaBQJ4gpQFnwXaVDJQwcxYT5K4BEezvGN7jc7rtvcyek8jQVEv",
  "key21": "JzuBPxzFG3NvPVD2XohqHKXKZ8evjrcWkNDBjg72NmvK8Ungdx9b9wA55ZeYD6Qzt35zbP7ETxCLP7zMz69owv8",
  "key22": "2yfD5GSP2ZVfRYFoVccvPHUfn5VTZRf5WjtSnXxHFXmvxpAxhfuvquy55khUhTacNBYiJvAk3CJ8rxUB4TFkEa4u",
  "key23": "5VmzehZVeMxs21jzsx8iBUyNaZfFryAeRiehyx39t9VA4BoWrSW7hjpgUmaj1fs1qui69GaUvswaSKfyDouTSQuo",
  "key24": "22z1EHCsk5ooHFWn1Ea1CMDCMPQeWA417tx67YAY3CraPudLmaY6mccfnRM6R6yGwJGFhqQQ92S3ePkG2a84t61B",
  "key25": "5QJUjBE5j44yXbiuVevgxzWag6PLC4Y3HT8tzBt84Riy7zXGgdBCxLr9pNVcUptDSA86terF1tLf1LWVUAVfMGuV",
  "key26": "2FFfDWsMdhxVrsD66n9jGuq6Y7Sc6UG6ossFRXbCa4maXDD4t6YNLLQgRyukchC5NJjzt8L3TkM5T7JkFfyLxpxH",
  "key27": "2m6kCBAFWxPhGJbyFWePBzDxLRU8eUKmvq9t9gvKnWK7fKBXe8JFKr1kWzKJAenZuyn1qnRm53RFUgmCvbSe6TTQ",
  "key28": "4exun1oX4BEquJx21EHxXYCMZxZsC3ogjBficbXSjLuEU88GgFhoeckgTHK6g5mgXkPqdsGDbFXvswn5P8iUan5X",
  "key29": "576t9PZPWPWfTMJd3DT38zWjZMWJjC7mNR2nGptJYLEPbnYWED2Dsg5iXpDP2M9P8YrKzW2XqYmg5kaKJV8xmKBh",
  "key30": "2ZB2KFdT3smYD6JFwno6pWUfTwg5Evdaorm1QkrgccCN2j9WkJHN4xbRRfYyMjiaofaYdHVPqi6ndPDaCPSpbrrj",
  "key31": "3cjfEFoWDf8AKHZF9mzrUicYcjdryxY54wUtCZkbZE55EYHUybeMWSdekVA1DfDSAChZTmydWZ8ukzCfkPHEJMGT",
  "key32": "4cVUENuUKnvb6io3PxETBayTP1nmGbPr9M6fdZwwMGuHbmMcQKpa4r3uqaWJNt7VXZXedePAEWJBkrVow3hmnKdx",
  "key33": "2AsET4LCZEXxvgY8arCDXyndM63vTQkQqr9rGFN7cUDN4BuCHFcD5mdQfiJBi3Mq2KC8LU8TFGepZYdp9ghsrqru",
  "key34": "52A7bipkRaVmrinPSgp1wwkbziJNEnmxh2hwxKqBghK3g5x1SeMBhATTd1EnRAAqib16vtyNScHSbG9YpPm5xkfa",
  "key35": "mwiFDc2i2SwUDkeZvgefDJtWHig34uNNr51j91oZcDe3WmG3w2vc5BsgtkJ1sYsXUHqEquMX3DQSydVWLjZ8wrq"
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
