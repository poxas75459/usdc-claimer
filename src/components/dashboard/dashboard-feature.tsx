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
    "3QPbpMcvX8h26gsLQtcDZQCkRGNeNTw2SMZMGAFR7czWZQVpaQaQp4843Gk6TvSqjasmdSXZkahjJNVgg8W4nWNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsQ6F8ug6XQ1F9VD3aiK7jEVyCKy8MkYFUGaxZ3Zx8LnJNee86BcPDj5zNmRpZ8LHaGzCqxo1A2uQLvK8oxgMVd",
  "key1": "5fxCYqqiUUnn6Tn5b9L5dbMct8SzW16UTLKvhP1rBcZFZgm85YFvda1MzfwmMiEFibcWrWQgK9uXEKBrFT3JYRY3",
  "key2": "49iC2R4256xid67MyDYqpr6c5SYnJ4gJAFcTj2bXY3NrTJDNaxyJyw21A9QYA6YrDS6mc8W5h9QctUNt3TCipQCZ",
  "key3": "5SpeJM7VMRMFKRgiMfSzhmkLQjHtK1sVshNBMemtkS2wc7YC3daoVaDonATBnvYDr1AgD6whNBSbFP8yw8t4Mn5",
  "key4": "5yXjN6QvCT92kS6VWHC9ZbZWabYcbsgomXn71tMKsiHhwjniVZDmUZ495QGzPAuaPt6tj4a8KkoEHZu4YF4qPh4K",
  "key5": "54zFdjjSdjiRgBCtvVmdfbd1L8Re21kWCqbykAaDcSBTLprArerBJHL1ZaCFnGmQw9uWnmQqy64f1MiqFqxTfpM1",
  "key6": "3RRpB96knfSKoBDAAAmvVwEUYerkkd3x8eECD14FaFVp7iP9BqQyX5JciZNzdDxS6qrXW8WU3rNdQt5W2Hk6npZN",
  "key7": "dXUG3UmDSPiJyq2te7FFGgWbXso8bKobYi3evfmMyJ8X6osnDNhkKK8Tc2JRRooprS2yKDpbdFUApcCxuLfio2P",
  "key8": "5rwhF4sfUCr8VKv5kCkHnHYiqCViv2ZXWAL1HGP8dGrrLget38eJ54zCnrjr2ytHL7XQwP5397X6Zo11iVohKkxA",
  "key9": "5xWV43EFLnHCSnvc3DpwhRFE6j2mQ2Nsj6TBrfew9ncDVUQW7uv53h5Gjz6DY2RC66notwnpHb2bg7saZe6a8QQq",
  "key10": "2D9XyZZCzLfTRgVjwDWWQaamoa1535n23tyozPUYFgKsndAxV6gdYobQjCGmJGS1ctddTv3wgMZBTQTUbdfFUxFX",
  "key11": "vNtWvgHFJRAYtzPKnoSrFtiwpYTR3eKeaEsGjTmm64BSGED7VupLBqKhRqqqP6R3sYCDCvYzAEPka5m1SK5HkGu",
  "key12": "2RdokCwsNCZYJgmGupDbkwTaG4u1t8MBN1EAVvgo5CuuM6jPbbNJru2JHNU7Y2U9Q8qr95niYw4TQ1FVvWPMbZLJ",
  "key13": "5tTqy6qKyRcQMSaHBL5BnngMuZG6FksqutzrQPjk35Gz9reHbefKb5Av6frvYomB5zDPznRmpSopmvfFxNF84MYL",
  "key14": "2T57P72Hr3Kq3TjWQm1aEQmVbaKpdzmMb4qbYrPdFD9Zaw28XHLczzv96rbJn5KAeaWPuL7TkYAR1BXF4seS6M5e",
  "key15": "UwLgZ9CFtzybuJB3WYB2jjNgn4d6T93sW6svYsjs8eHDH9e5fDpa4njnnP5MLvBYoa4wAyJKzxn1wfk2hfyf2X5",
  "key16": "5xjTv9He9DKRz73ahytFmsJZfRYnD8UjgNdTsZ97iTq9rdt2UXQnAA3nBHvaRhdjySz1emYW1hVLoLvfamUtGQQQ",
  "key17": "4NSvXksryXZCjxa6dq35Hdf4x3LMuJKGL6qyMbkSeUaucBvHgZFoyzYr7frqgiK3d6JfUbJZt3U52nUZManxGHZR",
  "key18": "3SdpFv8tv5sU6w1DnoMFDFsbb5ANuYgHJyj8vTd2wCni1HGLMKbNK7W1hiG4cVCkJNW22BoVDA7fGxGCmnJBp8Qt",
  "key19": "4veoWxhroaFUvF719SzXt1Fmjb7iAgwHt34NZwVGZLxBcop8UYwV7kDEpzaK3W7RUngmrgWbQ4k5dFBYF8QobX36",
  "key20": "2qtNEHwXmfTfZv4EyUtmXTY5cEGXbnnHWtEE2xu5MsQjSV1ycRbmVJw3AFRUYeDiAqUoyDcH4uEBgZtFZQQN577a",
  "key21": "Vek4eoS45g9WHxppA5tfAPQnGEyxozaQ24SpLKzLxTMLe67eJawyx6QqDcxmnjjdstVkyZtJUWfRs3iAfvPMQyC",
  "key22": "m6dcq8T6fv1NGafWW4oerFB17ThE9yPyT6u1z2UwJaHogT5ykRT4FeAfWCuNCqJnKJ19CFoc23WZYKkZGAKL7dA",
  "key23": "3iHLF66q293ZiFF7qp6VAgtcTnwx3zwBUpKtAnSHUvMbFjKxWZnJ32yS1u3KHSjEk5axqSZPtRVquYuvxyGNvLVh",
  "key24": "2cwoGM77XmozpWUVpi1rFCP3rAXbtthy6UBYMtxxfBV4Uw4nYaAfTibMiZfvQT2zPGT3piF5hAFvp2FroEc6ZJPp",
  "key25": "2yNBURB1KZ64isbXyUgKJgNPNyiSEwC8Euuy3MbTzDAt3wYMiMNUmMjYJCXnTKSRjuMveSEA3oCYQ5fuUsvmwQeR",
  "key26": "5QCy1tHWDyejZL2Xy5stw1XkLQLRqRnGrMyvku3j1YN26L2nPW3PGeQWdTDH4Dhcos4bjFKndnBdc3SnJdipYq3n",
  "key27": "3Xxhk7QX1RZ1AczAfBVico1eFsomU2H7Mjqc4gZPPNnqDqa6nUrP1bEe9aG38kmviH8S4HY2fJPhPuaZPAmow5GH",
  "key28": "3mQrihXp4NamTtqR6xMBrGnnN9YxDACLLK3nayf1yTod7RqgmNGswoK77GKmmbxkTa2JvBPPWqHJV3mzV1UmcR3L",
  "key29": "3bPe5mPpLwjoVJtUvtpGaEbFfpSMPbz24Fuj28ZojzzorfWRxQUqD82pR21xVd23saA6vnUhobVUY6okkyd1Pxya",
  "key30": "61NZSzDZnVK7qEvHLaXUAKP1X7V2wf9mArRwu7kRr2KFL8xf41gSnk3Sa6Vf3TL9rsQmP1DxsEhJ9Pa181yaJe9F",
  "key31": "4LUgvCH7upELqqBRTgyiA75JqXQfEePP3zoQ3bcE3CFhuv3k1ZGbaiq6Xs8Jzf9X2WRcojteJ7vvt923iavUgtEE",
  "key32": "4SGoo3hWWNpuEK6AxZPQxwePspiKj2krRHitmD2JZTQTnkFhyrz7xJxgSzSqQ4iay6iaxfSmoRVybi8JiPnMNaGZ",
  "key33": "dQQapZ7DQS8LgH1LdXKWRkjG645aFRtJLK6sCzdvKQzhc9Geo69KGFXi7wA6MvckA2toDt6Xj9pUM2n9XxxtMKY",
  "key34": "FpZppcbzBm7wPBw6qPQiLskSssVj6jLEKSTH8LPHqMu1L5Vgk3AM7S7vTLFvdpQpGPeKK7b5BMWiZoeVqiM8Uxw",
  "key35": "359C4FhhB1StompCpmVhyNy5CFW1N9ZqG8iH7URLb4ee6SfMqVeSJMydqAGLuj2wBPj8RL8ypVmMoa2vPBJXZGyc",
  "key36": "46PcmAGWAio9767Ry3yyrbfGDhTtsMV7bfofVMriyFoMe43dNRkV5T7Ty3CCBCJBd32iMSTQed2XxUBcFjHgFHPZ",
  "key37": "32w2bjXmpGs2NnmV9QsTYUqSNapJvFV2BR66Pjcn4NPU2LCPn2tQjVVtDCBBEHRDqCoaJz4W4HcwasCMqPivXgRC",
  "key38": "26EoHzih4R6CSjxmwMQSd82TezPyBLem7Wv6uf85ArHpJ3pfffNAPmLJ5MG4FbVJJtfZGnmug2kXJ6BgCjv7eHPj",
  "key39": "56gdUAbpH6TJYfRkkVLPW7F3sb53SCZ8YBzCAEN9Seipb18zEwCwHmXiev5VSTwoUujty8KbcugWPt3nVRKiG4Le",
  "key40": "5UsJixaTwRaq6ARkM3bR7M3Lt1bWcrRHTqKdPmHF8YDZcUxtCetYyYXFyDEp1iHyRjSWMA8B5oFzUQ9mzw1By9Jk",
  "key41": "2UpEa9JX5a6EEfzcsxryL7irM3qqBNJsxTMXvSSPwucd9Txph4ouz4DfaXLLe1DY3fGfrJyhwxXB7ssNYwTHDj4e",
  "key42": "5yuhUadSs83uf845FAvRkCDBwrSJSHoouLyfT2UHaTbkPkpzP6a7PdmRNQYVvyj9R4pFyfvSWweWpCSXUXnY56a7",
  "key43": "4tERzbqHTTWcsa1oQQrqdxAK2ypDXQRL1zQP1sMRH7R4z9dq726kvUKW5q5rabtj24kAGwU39KdxpssXoDavJ5GS"
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
