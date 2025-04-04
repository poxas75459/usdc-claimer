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
    "2e8u95uRgf2VFP4sBRbiwyYDj59Y73sE3LZigYEQCxbed72TLTxZgh5CXLLmRF8Fq4q3DGiCJxdzGaETP4iUPCvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AErTmMJzcqmNA6tuGdCz4vwKxGmjAb6o6B57aTUvCiGh3fRo6KfdLPBHvRzXsdmRB8pz6mbCRJiJRkPFk5ugx5b",
  "key1": "4WwqyrPMtxJMexspb9kwrfZjHSYUD5v3HonGsRMKtQ9PBEo8vgkuPkRooQJbHRoeS5LJxf7grb66wcFA5x7DJu4y",
  "key2": "5Z3UwydZjmK3tdPqCw7QbBKWtNRXqXJGuqGSL3pNiVNNKVM5jhLgMDuEPzronEbSKLKN2VrppwxmBYtePtZKCTtg",
  "key3": "PH1N6wicGHLGu7XvM9onabnT8FyrkR8tboB178WowEn19jEu8MtbUutkvTr8WaZsYfr52zuJih3adfTuJew5U4k",
  "key4": "2ve8N8QgKhDLyWBHKgnVbQxMwJY1WjhZ9LC9tHVKXUKguhbGcdVpH5J6Jcsc4BdkaVMsc4NmRMVnjNoofjAB2uNG",
  "key5": "5PveeLnwyvA8iQTr5ZtSHDDrmpRAVomn65LobKCcfdxo1nreWRUo3joc7fqqaX6C9az1g17s4quriC73AEHBWSEU",
  "key6": "3qT8SfYYiTVxh4ad63sjmQHtDsppmcNWZXR28AgjBCsD4ZP29ofDW55t5eJjmCTd6nBxtmhcZNqANKmDS9wMZmAz",
  "key7": "CB1uygqz2LZYfLs3kwYSzNvi6z9zGPkPJvdbQNoLcB6vB4jR2NjZHWUbf8ZLgzGG8qevHy2Z1Y31sjYTeweGvXP",
  "key8": "3YCquRK4yzmkXFqMRA7EceTggYsZ27uXWr5m5Am7yKR9GoSGv8WU1Y7oBSdeUAJUFp7bWVDTDM7AvDpbPpf8yXeR",
  "key9": "FF8vtusgG7GQq15sfc8RPxAH4RwWbvFY5VFKc7oSD9AZn1hS6GoRrEg9q8cpZe7squ6Jy5ExQRtwZzy7KMFVGww",
  "key10": "5H5d7Mf6wq8B1Xnx7Pb8xgmA2KymNq63CMAZsE32oW6ZRKPiGnN3kGseGbf6F8zYQoPPDetc7zqWevhWqiBAZb9j",
  "key11": "5eKCBJiZScfrzMaMfrPLVWMjBCCS89V946eicuDniEf5x6dNuRJTGZzS5ei6Be4Pp5HEQpAKWi9DeNxkfu9CVKUW",
  "key12": "2gcY1Ke3hZjyTYmyYEL3Ki2mGeapUroZ397um9s8oHZ2wVTMK7RbrhFxEk5xt94B9LZBLPnHiy8196TsxAsKZAxa",
  "key13": "5F2TnwgG5TM96N9ewSuPvUuKGeG2ndHL6YMQLdFf9ebmkEFT5sMPAJSv89EeQRn3Zo9qysHFGXwE8X8wiu6AqE7a",
  "key14": "EJMVGrzbQ7Hmr9Z9kWpn5xX4NS17FUnhHZvMKc8NotKNaNhhc7Sb3972VG7ptk1Tkp3ZwcaUYpQRfVCfLXXTtQv",
  "key15": "A84gQjM5ySdru7bwx3cQQXH3xc8Y9jGh6VoS2GceDSbNSW5nWpBHXghPfVm4NYVFQy5kJXQsSh4dyCh9QvEvMQJ",
  "key16": "4i8GYmKX2MmZxHapzLZEVYpEExHBaagjoiDgWtzoJynd5sWSNURoiwkQwABpaihzbV5PX838vT6A8dMmZTmmND3D",
  "key17": "29QKTQ2hgKLLebBqc9joEEYzDbaEUndFL7e4rskPXhCsDWP6iU6egEYTJhSVBzDNEjEWwMzvCCofybE6bEHkPwps",
  "key18": "2r6uHKj9GA4Wutp2pyoAUQMXLSVWMPCY2fJMRGWB1wFzY7ajhNb8Kc3QSJdCkJRnTgVDfuMhC43ZTQqFSb697EQN",
  "key19": "5cyApVr8LMk35bL4CuTfC1dTG9r75r82BJE9mwQrNcxjFys1zV4Vnw85QsX7HA3FSuwfhGPVw1aXvJZmhXDSLFGm",
  "key20": "3bagyUKsHZcEXuNUE5uSrKjkSS4htLBPh3iqqxoP2NUYiMbN6GNwgf8NvKhY3V46na1KSXEZfFQhvQtGtauvfR3K",
  "key21": "B3YfwKHoorbpeJiJGS4MgP56hSofpdXQV1uB5WV86T96f5MHFFCfiQgF43TbG7MbVxpakTaHAkbP1SekNeo8cka",
  "key22": "47a3GJqwEnviKTdSq6qELLenrRAr5yYZo3RGkFcJjDvKNkGYNJKUFHwtL9tvQtrXUSknc9GsesEoMnsaeGARW76c",
  "key23": "4rdjKh3n5fnWdJnv2Li7oKtovyz719nMqHXLPzrwK83xfsNT1cth17PSaPATFRE8XNSujCMpTtdy6UqGaouWsgkq",
  "key24": "5BNF5jaVirpc1g5bNjXL4upRRpHKKLUK88eUC6LBkMHsRTRB5YeaiU9JvmCNKrNcUgYX5LDY4LD63Td2ukqhxE6s",
  "key25": "2TU7St6GNo3HGxFE7p5gEXTKUPDH5P1VhueaWpDiAz2zJaVhZRtbNAGDY8JZ78D9uEWS9Y4vmgmd95NNzBTpVxqJ",
  "key26": "3QW1cMope8vRS9RySytouyBM4yJmcNuTmzyQNWWbwhtx9VZXryRGW6QgFTjKtepXGxfiNWw8Aiaba8iQPy7BA5xc",
  "key27": "5ahY4RrsA5o2C7DPG2gnE6vXovX4rexV18XzUXHWjkdqxeXxUZNhDASQapJ9CejppjyKa6iGFZwJtwJqNwfu5His",
  "key28": "1T4vTvXduz5cnZWeFXXZXDCtjNrtsTFqE3YDpRvCLcGpYq8kJ1PwaiqH3aMjpAGrZ6J8TWcE7C1K3aSKnp35STt",
  "key29": "2rJnwYuDSwR4tWdRwViWxkaerVVgXquM13GyircWM1saBXhGHPoWQKWtU5gN7HesiTtxv7bqbjnQY7QykbqFgFt4",
  "key30": "3oma4FKSKTWXTJTNTzfXPwW8dXzUygbXgNm4xtPTbpPfqUMQWJGqoLPXfiggWdYzXKfKt7yFCLyBaYe6zZBSEoLn",
  "key31": "5K8GeHn8nST1TrRurHn4y5MzmygXTmk1N4LpPJP7imNTviKhi75hwf5fiEYL2WLuQgvSTb5WdoUWcYxHmamtZe2x",
  "key32": "SBYghJDL6qZtN1jezj1kzRDv3UDgRy4QL4BGN88RgjCv4kgYjKDg1Xgyh7fmNUEN28xTitVeCoGFTFCVg9iZXep",
  "key33": "2PvLN8yvnHcMRn78JMHRA1EFWsz7RyFSX52C4EMwTwDPJNzr6g8QKshjb6uYpMhWEsq8W2pLoFmj2xwhkQqNmCM3",
  "key34": "TvzheFt2kHiXM4L5jmzKkjcLhh2k5wcRKKp4N4wyyo6VnY9TMLnFU29Yq4XdQuNBd17nS91CeXkrLBc7m1e6kLt",
  "key35": "61L6PSEMjqRZr3aSfiEC7SnYWEdL9AbfecWfwbrtkhNnAr1Pciwdecj1hNT6R1UaSxsYRr3PFzPfoUEn6PXVQ5ga",
  "key36": "4EVyBcpkBXBQcqWs2ovpTkYpYcJzBeZmwY4BhyMszosUPx9Aob25RCmKeeGyXaz7quc9NQ7Up7stcTfsWKKgHckL",
  "key37": "4MckdH4RdM6hnTGgmB1VB2xueUi6kPG6Eay3MdS1cQ3oF8agTAKRviNyTnMvk8Ta3Fc3romEDQ3YxTYLATfK7Q3d",
  "key38": "5QvH3vjsU2sPARNun38t9nxRq3b7XeipbTHrFn2tk3fVrYCXvJVrBCaxSFsaicz6ubSG4zXL1T4nPgaaUbrCk87U",
  "key39": "xVZve5jDzTqnB2uDeaUUYyH9YRqZLrZNiG2vDYc8gEWnJYXkTcUAUvGfb9Z4Roip1HfcD6Dpi4H7DSupPRkoGd2",
  "key40": "2t2dWEToGrekBN2JVmF3TXY76xhWj6J4RYzSym9N3rLEcCaYqU9zz1EvN9CbRWnoTh918hXKoRZTnejqZMcH15jZ",
  "key41": "5HM5Bz8dTpJXAtkXLtGv7nvn4rfgqirnk9Ji1DN7YsUC1Pnx3kj8vVdKq26V5VuBjo9NAAVeNCTbJwyzcT5SXBSD",
  "key42": "3toCqMsgTVnYV15B7NmJLwYmx3LzbBrJrhdfSSRCiUXiZfC2MMnjifDG36XE9QcKXP9keuZr7Qhbk4GCTCkhunYn",
  "key43": "4TEEskdDPC6ZbKgicC49YJdGyo4WGk2sNoXwKEEtUard1dev86NvC3KoQtYZDce9AuStsXqsJGJJSaJ8yxioosQr",
  "key44": "3QdB1bK9k6HZ1QiTxRCKyvUhXV427X14vWHEpdurTHTcZiTLZCuNQxQBBGP1DVjV9gwAPvvxQCJEucfNUsVub9yZ",
  "key45": "4QPQsDfcJLX3kQbnYvifmGg71kotJxMHQ823UiKyrkouUeonvf3vzejiKsxUpGn73dspKoVmWNEd8UMGHLm3A7KY",
  "key46": "2ys7EDsg2EXQyFDWGL4LM5dmVSfNxDQwMELHargav2WdZKSMff66u2Ed9qV9GmY8Eak2vxzyq6AS2GpYfEQv5WKA",
  "key47": "3QySZheiSmyfLyGf54WFNTgCaUf8UY1hSMRSdUMYmCNgCU9WArF7Pfxh6qTLCfRA8oynhxM617dnKap7ucVSMcCc"
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
