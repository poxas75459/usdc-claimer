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
    "4gwEghAJwWibfMrEk7TxYQW7B6R4iiZ8MxNQUaDxp4DAJwJ7srMvD1AY5p5tJsp5CpQ5QZMVu1MmVZ6ArjdNthRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CxHuXxe1CnS6q1JRewmzNPoibae42Fu7eNM9A6MGKQPubjFkZj2rTV4SskZvwpXtAvqh3K4X75dcZuj3J6boenB",
  "key1": "3VXmdS52cQsgiytUG4h1eun5xQP2PMJcmdWxZ4D3mvdJD79tYhKMsz5MQLuX56W8SjVkvjSqnebrfx8h2KNDEpiE",
  "key2": "5qRmCuLy2CMU5WpP7Qk4nLXG5e59WXUw6QDsCTqXMq5j5Bzk3vhPUL1bYF8o1cFbVcesRQdYMJovpYciciTYo9w5",
  "key3": "5KemmfaCuAUzYj178X1QTLSmjFGrBgsE7mjQvNaBQJFwe2upSG9pk44jtrj86mJFTVfQiDcfYZPxAgnyNwxT6Mau",
  "key4": "63Simw6hJ5aiXzWfMuxxeiqkUNRndpTWDdMqoQqeVgoUPH27fB3h71bBRQ4cSNd2qqyyqoSJnAARnS8UcJcWzFF",
  "key5": "4ddhNkQU3e7wbebDB6aJVfQ491isCLZw5pfNevyCmgtauhbsME2bmmhYDBz5rb2SK3SyTzc817sYoeKEfdZNsSnZ",
  "key6": "2enQSextaMMg4fkWgME7Q1KZn5A5EpJbRvizDGcHWsfz7XzCiTsTM93TsvabCwdYNqbYBJwZYm9NRXgp1o7BFWT",
  "key7": "my8ejg26juyJmHkcCkr5EKqv5HZ9UzVXyWJku19sMvKZv8tKD9gBnxqeaL3jtDLJpE47hrC4aRtyPWi75N3SUip",
  "key8": "5La5uPeHCWabc7YcEoW9R95kgp9QcLrUXXCpdssfmNc8o54r62TwRoZ6TKWnVozHS9BLE4HRUEtU7aV9vrtjm2o8",
  "key9": "2Q6wnvdypC2bvkiyYSZxSgtoRCvZ38wFsmkKBuWfwZpFBj6dB9EFaNthedNkWBVmWPvHrQeMu7Xm4oLhsxEZxKWo",
  "key10": "2i2Whbg6zdZoWExiA2518D3EmKrBdUCHmq8KdwXfpu1kqfEQC2RJNVNF1SQnDwY1HZiBbdDjo4PYLonBJQgfZ1wu",
  "key11": "48iHiRFBgDP295KpxrtQgFtoBCkjArrGxYZ16X4oSk8coq6Sx6ohtCxW2eCKn1xomi9hwvdaqHN8WctX1W4ieEGi",
  "key12": "25688sHRC7oZHGSN1a2gvvAwQ7wpo9Lv51eNCJaNyTd9zAzngckxDqPyMC6A8EHNejswRK8DgbhJNx864n4qZy4L",
  "key13": "49uzxjW3w3Dxhuj59xQ36eF8MVrsxcREMHvQYVe9UisC9gcEWKqvZNbRaG4Ay8sRfrDWxsa5unLPjujSpWntRe1N",
  "key14": "2QkzyDtsHVZtEPs4gr8jk87qneJkd2nKPTeh6zboAAY8LZ85oJ3xMrCeo5pr4tmUF9aCjspuBEqjG2gfnk9YDjEL",
  "key15": "4aTHmi1h3ibhWxQiKikenLS3BraDH4ADPDqfBh6U8ixooCq2mkWA7CaxmWaTW9g6Ffw8LpcFaWusf5GMLZtJhoNA",
  "key16": "14Jqq73ioKz7RDp1vmZWEucqunECJZnZkCgKrjkonksZTFSjZSRG8dPsBdaLYjCFwXpnBjKiYnoyjNqwG5vDB6G",
  "key17": "Eo9t74ouDnCV4qzKiQT19T8ciTwRiRFbtqm8KrngFaJVucQHX8XB59nJgbnDZd3mHKGKxvZNCyyNg1brgNcc65k",
  "key18": "3zCdr9uBGUNU6iCVZZQdvkA8FBWjBMci5ARiQWYTdroxvVXhbC5NodcpzuYppwdpboDjvaTudCqk37aYRXWt2cSD",
  "key19": "WNXWjRpKvLT3kzxjixqCFRQannDVVXmsaXKrFQvGWipbr6vFJk5cDjhWLaMYof5a39n95Rkp5gbtNhHR6tnybzL",
  "key20": "59TJ2Mxdz24CVexRHaLbEUq12rsDoWZ2eBD1N19w9H7JgtsGVfgvjAVevRsPfNhVxTxdEg6T5L5TPUTq6HrvWyNd",
  "key21": "66gMKhUa6wrDN4J63qcMSrXkQoGQEPeDcRNTEURMv61pDPGYw1MLyk178qvGw79xqDPy7dX7vAHKm7dkjLsJr6FP",
  "key22": "3ohaDohHTKpxyrRiKZeU7azpmAk429y1LWYt5DRzkZUWe2jPvq9DBsHaNajHLrSH1TmVrpioi8Xocrx8sBhWBAZL",
  "key23": "4oqttVfG4WDRZGudg31wCideDCnhGQfRN98ZyERjAp3mU8xHNcMcHQwwgzmYzLVo9WTkDLGRyKwm6DmYzUcCacRF",
  "key24": "348hWrBpawkn4YGfScwX3L3GH5Mj53b6g27uLg5cGChHzbnT8VWsewnWeQc9BJo5S3JkMtKUrj3vVSrSh9X9Z1Hs",
  "key25": "2GGn6VwMUWskMh1jFw2EPKpxx5vzQqEUw7CMAcqeMDjAnDuRg2UtZSmJ3axFYatCrDYJUc5yi49Emj6rqoCCmqKc",
  "key26": "v5VwWxPZ5TNBTVkEZTjtF3Y2LFq4CSkQuxh1k3DdnDEUNs2Z1G9jruzFyytXvdhw26kLeMGJdNaBeXqJJxZyST3",
  "key27": "4s82wCLzQomuCwj62PFSdwW2cEdEo3i3kRWNWiKkhNckUE51r6HGsegK4xeVyM7b9XecYsuWmoZdpC37YvcNFMyL",
  "key28": "4bC3ndCbjP1BUVFg23vWaHMTq4ng1gfagnUCCnTWq6eRynxkXj2cKJSfQdHpFtd8z4m2U9NkQ7XZ9ZFridQhwhwm",
  "key29": "29xHbco3Fev6AwyYVAjwQpGqK3rgyPLTwX3msRzZZZFoe8YEHwfbcsUQ5gKEaw15Uqve8ecUNT33RWADVi8LcZkz",
  "key30": "2c4BbaYUV4tRFTUXhddFKVys3pfKsVSoQ886vnLS5dRDxZzAyPLrdTDLY7MuvTVWSSUzAoFSckjoM7A75CfASBLJ",
  "key31": "3dPY1KJdYz8qoDtyGfBft1ggMBnL4xpvMFXfERAMuvcMxLAjjm1bkBwXRVBsDgCMdg8EqQsBZveFTCn9e8ss4aEG",
  "key32": "2L4E8AHsBbG5gpmpTZaofckMm1fsFeTKA8gRut7VN1GycXUneurZcuGX9r7ECDfcHbDENCQaVFCdrnePjgJ4T9A1",
  "key33": "2ekTF1uFo6LDmd64GDsyiFP3KECHVaP1abCa4gozTr1vbRxg2fyun4tQSs9pKVbB6ikTake7JLyUCspr9qftVzdq",
  "key34": "r8mzAQqsftYqrKH4GWQWQgdPhPVFenwDYdm4pJXY1vSnVrE5yGGrhU6uHQogKkAyjyBPYizEbX3Dqx1sKjx9EfW",
  "key35": "44BiDvRxYMXJV8FD8VBFDc6DLebZz3jqHATP6GhWYNPi7DCLw45Zt4keqEYjD1c3vmuo74uFn1bTiY3KUxdpSvk5",
  "key36": "5SXQzBM4f6J4ge4YK1gwJTzJe3MVF5ZTqcipUAw3iWVqYfSz3Pb5hdpULX8wpiAKqCCZDSoCL2wP4RcjfnVDAbhX",
  "key37": "4BiWDDCqnqHshjTaKmZptETrzgaw5KnFA4RDJuzDpnjt5HA1Nkwmk7gA4UwNGdxEDRNeYAT7hvSKv5WyEFQxqJMm",
  "key38": "L81iJdCf35BwMKDu6rgsaARNRUVXVXVyzi1ygw5jcA57w3FA3Tx8UVdYYxpdGtVQGfB5VDVBtfyeVkuKrkntdxT",
  "key39": "5PHR13RVhhipNDbwAyvEgmaXprQzLcS9jYMzdYEyTadxKdo1zdmHPsZYaovPfsVxY5a42iA9v2UJ1kHHbfyg4TjV",
  "key40": "2BBvpH8UFXgFpJpnhX7Swgk4NzzHXixVgYUzRTxeJQaGsN7tpFHreYLtUtZ18fEfaP3atL489wsuJK9VpLz86jZi",
  "key41": "53xS5LCDE9sg5xBm83WcErER86sWo3q6c3XifxNqeVzR2BQKJohaevTeMTWQiihTKu2aGN8szMgFjQqobHtSJydu",
  "key42": "4MU2i3MdCtBvWWTE9sfJxaYmtBWtHoFBCx4gdHJofjTLF4bvzrpjNWPdgdgACZ848GmzNnLUXk8tbUptWR6JLfWe"
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
