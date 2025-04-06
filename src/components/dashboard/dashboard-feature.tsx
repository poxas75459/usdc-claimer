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
    "5wbZPqsmYogGp1AZWRzyLFJvrcHxzcQCnVRSz6RzqL5g4rYugUYNE34GjME5TMz3eAUfUz1bazcquagShJjxuaMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwXkHL78ug84Kf2a3mKErWHc2hDZxNUUD2Aj8EWrnUeN6VGA1pvtygCoBXAK3egUBxxvGFS5B3Wdkv38msTue38",
  "key1": "4AbwUPndJPbJAKHMWt1MsftaoF78k3sghrDvR262LoQ3jb1ooWCD847fk3vouRYJrX4MKXtv6eFHDJdz9SUTEgcX",
  "key2": "416JqRBp3Q2YSAnK9n5XDETjC37MCBtL4L8g63D3L732QrmhFXCFxd3QqnyiGbtULhAPfUukeJFcek7NeiXnCEVn",
  "key3": "uCvhhurVdm72tmNVBwpdZG2s78Grihas8YivHdoBR4zwKHPA9ughHUWiN5nAaWvKC5cQv1VRxupinn7kEDRN1zn",
  "key4": "R7WnLLebeg8o3vsxFoiw9VkwheDLdL4iqQV8fCE3s8h99BFpu1wxVdzq8ZLUoNh5D47YNnH1zaWGLoMdyXAiUHV",
  "key5": "4inYz6yodRx4BRxbdAffqmXLr6gL5CBSjvb8pfiPv93LN93cUrCRb1CgJSxDeWWdC6zzhpw9ebEixcodPNRTtjHm",
  "key6": "wgyPYvJzX4PqgmsGpkiLy4enLBLLUszkAfUUgGyQk3qvZwsTdHWAL9TcpJbgubthiehN5mSFzXD94PiMwYcEV4N",
  "key7": "3pLsi3oAxc5qRzrf9ZZvZjy6KWb6cutY9gWoUHjNfRMeJTc3RBXuYqkxAxunCBLCE4AhKGYnoqKFq1H9CS1ZTe2i",
  "key8": "2fonyq5Wi4LMtYWys2KvYDii6c47YCyULxtaEmT6QMTMujCT474S6imMizgPiVZCUrv56LYNRy3VJsTvJRJfwLj7",
  "key9": "soXeWxLbQ4Gjf54RZ9JjgzhZhcsuD4bS8kWm5J4g9hnnmX2XQXjhT3FYD9nTd92eWo27HwcpkoN8L5M9eWyqhW3",
  "key10": "3vGxEtPcX8h1ucrgtZFT9hSixc94fUMhn73SDp9BXJ8m7wMoCmb7y5JQC1ptkDjuVyYVx5M9xMR3ypLoa9vXoSPf",
  "key11": "3xhL6VrVgiyk2ELzJiYbHKRyQumi9sXBWaED7vkg9hY2j5wBN29tysoUaHaSZbRoQcX93PtjVhUybzLUzriSf7g5",
  "key12": "3sj6qjTGVVA71vJDkVq7X8UsbwufaXS3byPoLxNjRaqNpCD9v6RPgV7kka6NqprK2ChqjfpYc28Gm3v3xzZUL3Nf",
  "key13": "5iAuxALtwuzbk946H4yYL59gkgX1BS6718zoMW2UVijFQWxHXoqZaKaUAn72VERYxKHPBSijhesMKTZw9ruRgaMP",
  "key14": "4MvdSQSwPS9oB9PmfQdLSuwUoqW4NkEibo7ztSmK1SDHiKeuUQPCrt4K46qndTeTVJTGnMU6RmkLCE5NPmTBVTSH",
  "key15": "45za12YiRuxxktLsPHTRABGM9oHw92yYicGJ1WHvsZKhc9arMSiR2Ehmpunr9XHWEHnUM7xxcU1FHDwYaYstU73P",
  "key16": "JdG91gcsYLLEUmjL1ZWuUfnpxqCqtTCMyuMrZaT2u2UsQz2HpcNyRTNT68e1yNaKLanxnjmqquPbRnsSoemKA3T",
  "key17": "4j1BcMp9Nn8GxBp9GS6EpUeF88fnRnf3RKdeBFva8ff6Xr5BHqJcHuCN1P8Jz2SBVZx7nko11Lw6vpGxz74Grioo",
  "key18": "3yej6CR8w34LgVpFNDjMdSogAKKVjDuMPtR8yohggkX38LkCqjoDuz1QvH8SqdW1bvM9bCz4V9DpUZLdhFTKDb6Q",
  "key19": "2TgHH4kRN56JuiMpnPG2p5JGpM4KCjQhLcS9HEt8cCQUz8rHiZruEuJwfuPBpHwiP4AcLbwPNyq4cKrpY6pCUUS4",
  "key20": "47AMz4hCVkDHbDU5cYGBdhnw4dLacAmBEnf35yAbUDThfxdEgz9BKQkeEVuvbpmH2yihPpHZjSgcDEtJMBP86dG8",
  "key21": "31XggLueSLAWudjjaKWSczeqMfWjewWH1BrcPzP8p5zUD6iSAiGMQaZo9NEwbXCGrbNyryY4tU8CWHhwM2RYTYGR",
  "key22": "2KNLLUh7GuLJYbhsk4FJseYBZqEZb9DTJCmxbNH5bBjXbFTrAEmbDXdxuqvUYtFMCvEGgaTnkuCx9zsWFjrEXXtC",
  "key23": "4Go3wAowkURo1xnHExchAB25tDpkcJntvPYPWSj81A8soPed4i6bCaz633F9nTYPDXjuvHRDRKVVXLaD3F9GCSNf",
  "key24": "8g49EzqKwWpUUk39ufA4Z1eKQi7nLobPVJ76PwcGtBKScVaJdVt6uW2P86BrUGfV2Dd5KQuFFWhNpCZeA1tQHF5",
  "key25": "3cgdkYjyAv8RM7C6H6rpQdZa3TxUsqhcUHTX9tNnvicsAwbYCysr2QXUje98JrbJhiFHqSXodY88iHN3Nx82yrTn",
  "key26": "4ocFV3GLxSHjNMYTJeMTVPu8XN9ct8iVyB7eGqUFkgBytbQWXZX6AWQLfkEhqM8gs5pFp2bmMwTk3Bcx7XM1qtvf",
  "key27": "5a4DK5RgowwTKnJZf1d49T2aBRGSXPoS4yxvMPecCJbveGkiW3wg5FuSwoY6mx7LfPm7g2r3htnJw4uBoRmn95g1",
  "key28": "wBqCcnwGAKj8xvQGQS7D4YdL1gctKR5sek2Aq8wbkJUUcjCD4vUtxgbv5zAtpyedM39pvdVajwSouha4ei5JR13",
  "key29": "4GgXpZPhEdRZax8yXq2xtMKbcD5HRbWhqxd8t1TibDbmRqgMK4qsucMgnVcGqUywJEXHDi94p2FxKozF2VLfZVY4",
  "key30": "2cPuHkuddMvRtpuaCo45rrTFv3W8TQYh6NKqVirUZVNdg8RHHyxy3Hc2MeVWHhGjJEBJENjAV1HQLpGmV2ZLebzX",
  "key31": "4Ux7fQvgUQqn9Cwc8CWfo9g2Y8iaEnqwtA9GCRyEurAE9yrMB4Ewj3PQepvqMNu7UxFAojKPqkpN1kxg9GAW4vho",
  "key32": "fz7BP4KqF8tDpWwerdpA9dgs4qnqTBdXzFrZSj88SEVF2isAKktxU2Q9bJa2zP1rLURkyamoCVaDvPtBLtrTaKW",
  "key33": "4f2mGLXuXG9bZ58t1aFM8ESuTzquqgcE6Zztccg53Ja2nZkL6kKno1EVdStyeoyR6DUuhk6ifk1UQ9SFc5qVK9dz",
  "key34": "5VQtbxfPLV54pgnMebVd91HpmpeJY7FAqdNWKg7GS84ZPQh7i7wspBsZDhTraZJ9YNGKM5GihARAM8zjN8vAaYzM",
  "key35": "35J7qJKdD9g7sSnbqU8WWZA8nuc75cSdcdBAmuaXcgqC1hSYzGPyESVtHVNTUqhRcFanzRBeCu4bEwzBQG8tzpW5",
  "key36": "R7o94ADQZ1Gw9qoPFiuXFBT5VS4SLN9Mkwu82MxnKaGUNcQhNEMp9TPr91ch3fo3eXTZHw8zh2tkkAZB4zEpgzo",
  "key37": "5ALJXuVCVxnr77B88u146nvBMCcczbUadvtz2ShF2kH5Lyh1a2xkuyQtkzY6YhJjZp2HBpasvhnZWXFVUCqg7b4w",
  "key38": "48udXv1YsARPb9hq2FHZpkevNx1caiEDcnBimmDwzPVdk8ebLyxJ4WPpD7w4yPTcD5Q8WsdXnrtPjiq1ZRTBq2Vu",
  "key39": "61GmASKhxtjXGm21TfBh76JvRgFKs1C1sj14EDP6Qu3pc4y8SyB22eM2g8SVgdLJG5q5MkLz1AcFNdK7uRJnigfi",
  "key40": "CZLDUGEDTCBgZA2nY6AkNeMRca23gL1APKmxWYztEsbLVMcZbCRJy4Bbk7M9nENSQvG9TxrL8iLETuMeJ4Kh2WA",
  "key41": "5ASKUMV1UR7pjDnFvftwxhMVnjyUHofggZaVCarkFfqcs4J4gh7kr3fJUspNoq5kMQehTiAtV1HKLMhgEgBHvak",
  "key42": "4FFo3kRa1yUC7iPgXqKKfeUc9GupdNcEgEraUFUumPgAPmDmS4zyoZhePi5mbEsaBkAsKk154FKqo2bmKYqSkCuZ",
  "key43": "3DJVedtYQFHaUMWiwcJPtpdFmUEAQEK4zKqRE3LBYrFuPuQxPqSH2wStVom8nnjiyT8L4fqwNFDiPnjrCoh3XLgT",
  "key44": "47RNWbyHq3ypMtotyzLDvztSVERAwby4UpDgLa89VBrVhz1pbU5FxoidHtU8LQWzbFv6kBZYZTVrSDDJfdZjQ2XM",
  "key45": "2iE4srvbeh4MMiBQJURRjZxr2RnWoXreQAsvSUw6fggdQ14oWaaKQBPyYeedJMy53FX3Ma2DeTPTkn2vQJFHazAp",
  "key46": "2SrtbfcPm2gH41NRf3SXUvw9G5emUM7tc36TXevLGYFcbEGMJT926yTw3EVqQ7zE8nQh2f4h5v1U76a18dAq9SQJ"
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
