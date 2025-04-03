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
    "2MqQ9Dfax4r2dKdvYC3173jmX3Zg8AbgmFjtK2UHkUj12XfCyAoCqVUUmzbi3xpoLPGZq6uZbNBK8VZNZCs7JhoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXyLsdwQ5RrWUiUuisDo4st3TQpuWWxFN5ZMbibbJwjvQGyEKQDcFG95XK2nkpDghABgQ7bcqFfoZeATtY8YMg3",
  "key1": "4t53PMdhxZobffEzFL8dkspA5oww5vWnByPFbFsPJsTP8NyWbq7idaiCXvoKsfiELELWc95DiDQMZa4pS9pF45tB",
  "key2": "3i9i8C9AnZpoUCS8FWWZRt4NEpg1bCWHEeiXmKfrJYzpRtQ5AYAYWhKt6NS96TG3b1wYoMY38DssNMLYBupKNd6z",
  "key3": "2bZSp3SkAY9mD2rpGu6uYwmvQFYa4T1usMJkB16Sijkf8ynUxEF5Hz4ka6bLhUGQBDaX2je5sdHS3R97q4CDzA8C",
  "key4": "2UKaTaEisxnLoPaNh1J2vr9ARasb3MGPkQFkED3MFjeFyUXSwamS5jPxzDTHwvoCA9nKskF8D38rGYcnYCMju24U",
  "key5": "47CisGpDaM7DckpHGsvqwyCPsHRF69ES5id7cB4csfrfxQogjvU75qqWTALv69qc5FDGZixq23yvRPyNztZb9f31",
  "key6": "4XMmiCnT1UgBi6iufWBTkm92pxnV1atueSDGpM4rzXZ8wwVXerdDCR2tnLZhzeU9hMCKVAud6CnGVUPDv8yNwTdp",
  "key7": "3RSh3nSNzY5kzoQviTnFMmt4QrLSDgbFp3TB77cYcFE13wWkNL13WMsLz7yKT4gDxaBoy8SKiKwXa9KsHV8J98xM",
  "key8": "qVSZoPjDZkASvkJsSAfa6JTe9AAt56WXrNHbkAY7JLLSc91WNAEzGw4tyU49rbjJCm1NgruNawygd3y25xLHtgH",
  "key9": "4oJV97gCuAB3wJwpCikpKVUGvDduHLeeA8hZRGz6E2yfW1MNdQbYwn5cEFRkkJCmej18S1xTRq2B1jgnAz7wVVUe",
  "key10": "3BnC46AHTiywvY6gh1jUoxZqo8MmXDKob9v4GBr79KBSKb2ZX7LZNmbWWiETdsw5gYSrysiQfGUtcAc5hXeYxhWK",
  "key11": "22tbVtRG83nqUhT6h9BJYeY6adRpsrSHC7BTEGBZfXeSV4Zsijg12Bxhukod8svcgj2qNV7UAHESc9TKXtyPfYhH",
  "key12": "4Y7uqwpJmpCLkKDKT7UdfLriwKHvFzARDuEpxpdJsn2iEFHKHeNUGHJWWxoUua7gauTF2p4Syz3RepPvgFV5fBBV",
  "key13": "4fXzhoZYmoqsFAG8ibutsf2gNuQRJM6YR7HfzNuniqQihEFgJs1TJUehGSDSuEP4c4fNCc2dQEGdGHjb2Y3dbaAn",
  "key14": "3eREFwUBk6LWKbA8hX6K5A8WBt7PVsTuytTASqLJJCpVrEpgKWvCdj6GGMJ9cxBqFKeXcD4s9GkmAENktxhXbYtV",
  "key15": "2SJzzTwTyf2c8irrcQeDgYhhgRWUtcPUPUZGxsKVwnpe7pMyN5RUjPCKihE1YLcTXjHcfGQC6y6oMFhGQ1kiDbZP",
  "key16": "2H43BLfBcATozpwv2yZpbJAn5a7ioRYLPoyJxKHuticCaxQQ6Rk4L6Ptk2VrZE8XTPd6eiYNJP3XdcZYmLgtv63n",
  "key17": "3NER8r51fTwFCvjDA4PhAX4huxtWGY2pPUKeK2ShEMXZcPGrAYYNAnSHykJj1aBL1vE9PXnQ2g9Mt2rDccSGVpvk",
  "key18": "2gTz7Z6brNQPmdiCDEdFt1niXBq44yDHVazcuQY7CNX2wsZqXPGJBBGwo6i1cW6bsRXHSnY8ymJwQALZkAx9Hj5j",
  "key19": "4j727VPVTxdBnJSeQv5vSBrMBQhyHcq4Hcd9Qfu28R9rDcDZUv4dPP4oHWgmcbfde2JdAPC9K1i3t4tBWURAHYXj",
  "key20": "67bevgoqkaZTxuoryxZ7rND3hXHd6VEtF5f2tzTVnxMyJD6hdTkszFt3Dr8GskZQMrbZeMa2vrrjDuYK6ikc58Bg",
  "key21": "3SptYNmBHsEMzsca3SMAy7kwMDUkhHUS8FVMtT8QwEdEWPYBsQfNd6MbuxiR3XJNvozyjKgR6U1ieVTKEKezp17o",
  "key22": "UZEQKPJfj6Cb7fYRCFA4L8LovPc7AQW9Xk7Mk69qCvg5a8EKYK1vcuVPjbRntZRnSSAbZQvDjD1Y5ePocRTkbBN",
  "key23": "xXBCjD9nwueMtyrer2BfcNxFZx5gXKrRzVzNB6iyYuFLJJJXqjkGeyZUK7D8CwyzWxNut4w3e631cFQRY91HH7R",
  "key24": "5dDmzartgUc58dQEZ3SgU7XdkmFHEL89Uaunf3AwQKSNAUQVxS2knzQFRPsM3PNkwcjaNv5gKpFK5u6vfCGYJXuG",
  "key25": "5gxGAo4JHcZrmookeSzgz64cnMCFxLexm7XQSx1kf7rHLaqUe9aKhrLdyPcMLdbpJZXn1TPhi2NP4FWc2uUUJKp9",
  "key26": "NQy3xuAfPRU68b1RTM1D8XzQKv4RERdgR3kJ9CWQdzALVHZqsYtkqdLZtSSk2pXdbsbu8UZihMxMexjpMFdNQv3",
  "key27": "33G47382cmRn7dud27EdHhsTBSj2t8A2LzJy7QUr3mGaHaYx7VYYokiuGckP8btNRcKLfPK3xQXR7fgczFRJzvgr",
  "key28": "5jtHF6TMHv17KYhoKDGCRQAaPfyAbR9HRMPXVRb1jCyQkMgZxBPZkUC1KNuNJpRkVgsBMTf6K3s44DeWvJJdK6GP",
  "key29": "3PVPJLeyQ55DiGVuFWzwh3THNhpQud9EsJDw192N8gPRUMr4M5xvZJRAE7jKxqtiH6Lajchyr66PBJpTzRyPZyX2",
  "key30": "iWwix8JfWqpSTwu5ZkSVjer1ZNM6p6EskxuecFaDafexgeGdVS9C45FKXRtzThLB8ZxLLfT1SqoX8kKGALHq3Gj",
  "key31": "5rx1WCyZueaBU9ArxvyovrrcaFTKn1kZ3MNB4yV4s6aWnQqY7WaEeFYwDGhgDJ9BJoib5rUuBvKSiBq5oJCKimFr",
  "key32": "5VGNrNuBuiF2H7so9WRtYrwPrEwCrNCBLYDL9osovrsCkLbsbAzf7EUYqtKdd8UMxf3iff4YuRnzY9nnV4Zd5Zyq",
  "key33": "5SuW5pvBdhzHuvJHQtcB75gTYj9fmG4VPYg7JDpCKM5UZev6iTrywc5gKmVMGikMLghTwGmPzKCsvhZbZBGzvpWM",
  "key34": "4ihjagT4znzRejxeEbj3VYbZFQfxLsc68pzHsmc1yz5diRPoyPWjMui2Nmo25i2GGmt1eQi22qTtAyP3vQfUc4cF",
  "key35": "H7KuAfZJnrSvsmmXHhWGxmDVnuLqgh18wFzMTqzFTMfwxNQ1i4Kph76n37oALSH9UNhKkWT2WEuvRQ1t5dxWEUc",
  "key36": "2RPVjLjwD2LjH5Hgr9D4ti9DaamftFF3XpGguEU3KMmpJo4q3HZv8kjeTzEMyUjpgjQXgui7pK4cK86ibpayvjak",
  "key37": "2BCfFZT2qkHcCBdfcuk2dXk4BzcSCzB2k4s5PH4EcK7GFmf4T9QhtHH2kGR2K6gP6UibUwnpHdQrCMPKVUMuHqxU",
  "key38": "22fQWXUxRW5JTeg9j4y3YRvHWmZg6SW9xPQAzg96VSuhLTdu8kiPqkEp92pHqXmiiDwF33uwXZyv2YiwwjhdMhc6",
  "key39": "2URX536Wh7hFE8ecb13sgLBFjBBRAo65zFXVUDheobA18hkxkha2w7LQ6JS3nqfjyLMQKbsBWLufjPrPsLwBXpPX",
  "key40": "2oY6AmJatSJWLhwPQGApovTAfEWBYgJvAMTaxP8VHkU343oYTdt52VFhxX8ySymCyTyvVHNKHgbf6UeCcddSPH3J",
  "key41": "4k78zqGj8Pm1gS1KU63ezqaCqXq6a9FQT7eV2PQUS6Ty1mqXfPRGccwjZeLkGFVcbZszEyzi7PsmXbBCBgfwti3T",
  "key42": "v3FfyoB12nEmkMDZGrLfob4ErXhrdjNVxNE5UtK9iNTEQADvZL79wf6RRR81YDrva6Zv1vtJCJeRrgEqQcTZjTN",
  "key43": "2RPxejvYhKKEgdZg8bpVHwc7Y9Yf4iyyLxgR7mfcPDMmBJvDiBf85c7iKm4DqrYptzZeWyMBUhvNa65ok6XCMsJh",
  "key44": "2mocPwvXrkNmHp8QGdV9HRoSKUtMohdquDcZP5rLrKzgrmYMh2zfgRcxXV8oJ5HXX69zvaTH8BBDgwGtugVDtERE",
  "key45": "2QHjS9HTniVx35V7dP7yyEqfkLUxqjkxLZMG3SaYLstBHmMN2xJr3QXz8HfxZZVgZ5Vg7SuUhePucFqYo8HTqpjD",
  "key46": "2Be7Ve7hJeh9rRw67qAcJ9eXW5kVrhXPBjQ4vk9YPLCqQPATyBYQQefpipDxggBR794jxwpMj7DzWtRXhssGNPL7",
  "key47": "3p2KWJRej9yKsaKPsR4FFps4B2yBgT7ehB9NtnvLFzWJWAAgU3DvJBinXJ1j3pdUpXkw6QKj5JkpbdN7PfWSUTmU",
  "key48": "2UAVRFuebLWBuaZi56RkP3j6v2mHxzZBA8Hv9n8k5rgNTRkJ2jZu3dNDyX8bknpK4pws2f8NAEoP6ccsAfgDsUPM"
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
