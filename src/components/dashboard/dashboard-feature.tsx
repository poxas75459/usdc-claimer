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
    "5cRf4CzEqJHS2fc9zJLqrNste1qkdTZrk61rdnPH4v9j7w84TtAXYJTDppsWMtKA962me6aZoLQDucQgyjLg7tdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63v6R3AKTNyzr3FZSu4kAGoo7dfQdpcn4sq3kD4g6qh5a6zmF7bVwEpH7YFLx6iNNwDzoZBSKvcT6bPALpQB7Zob",
  "key1": "2GjdphaCmiHSXJepexGLcuY4YnmmBdesd3jpLixG7xjGjGSypUPVzKCjR5mJfZVvwu8KacFg9xgxfBXQjmskhVvM",
  "key2": "45Sx8kk9if2dssaSazE7JiWvdafhsjd2ws1iDQGKusidSn5VWWWneaKvkFkxwh15pbii5fzbHJnPbev4ciqbBbiQ",
  "key3": "3rZ5vdVEj1boke7yjyhKPGCPP33HK2SeX7gDpfBJAiETL4VdgdJUFCQfPPyFd74ZXz5FLUNjFp1S4zMTXWnA2ZCp",
  "key4": "5YqaM34Wg1MjNNUBFA4U7STkJuxWynFrj3ojVw4X2gVkSZTLQcviMTr22apMm6ocXtmuz76tiEW4JrztBS3ReVAc",
  "key5": "4A1bXyKY6DuXu2tFbxLScHsULSdwXrjvteRH6dxVCFNgAc9gVKNFMdSyddrmGqzu61zbcMEV6Jtcqg3qYHY8KkZz",
  "key6": "4UMSbCaDBDL9wvVwFikuNtrArnfmiRH2R1N2cf34EbUqPvrxM8SyPnDEmq8QSsQ62vQwpZKAAyQi8t24XKBoBgQH",
  "key7": "4hRmKKWBpGwxaUtDFFtvaryqh8prXPgBQhBQ8ZzhNxhHEKMjBnjNQdEqA4rchHSqFLPVMEkvVtAxP4zb8hD7Pxcu",
  "key8": "4V4fupfcKTPDYLqbnDPyWG3xedAPV16G9JdddhRiTtPcG4QSA64idWdRx6E9SUpb5MbxZCkfXH4225GDJGbQbso4",
  "key9": "3oE9Yzs3wwj2rmei5vDThwmskVSYoj1H7zp5Dr2NVK4RowsVmYy8pDZ83LXZmPYPTrA78cssyGmNWuJJeqgGUagu",
  "key10": "2nfAbPjcZ9aUZ5hBkgVx5vvMWgUZMoVaX194wz1WMaw6TtZieNmbZBXcwmy3JCHPy5si1niCF5GU3FBJ1YZ6e6Ng",
  "key11": "f3AwAq4EyenSxbjrkJXZGB4RCxrPsKsQhztSZTNE3j75Dwh62aEcxixHrLjGhftvHKpL6c9UbY7P9zHcSwFk7nj",
  "key12": "5AQg88PKYmszCDH3rUvt6vAv9zD4cxBkkcKXEEp9oJ8GHj3DSptvhiQ6HsS6BzHAP8eYoSSpL5CD1naHjL7ELzad",
  "key13": "2r4SgzCq7gKUKEgvsgAoWRayP2B6BtRjwvfKLmcBpuhCmLJ7eyRyuiWVsDd7KJ8GLQ4anQFsQiyPAg9w6BjeFMdr",
  "key14": "5tPMaCXgmW6FNLun5NCkUCSFn9MhpkLytZwdFL4yDG8LCJanmFcda3ZrH86cr9JgaZvjejWZcuiudvXeDQeD8t2C",
  "key15": "Zo3F8eKdzdQxb2TzfjWNriVJ1VqUWVTzRma2scM1PW4oLifF3hrUYSEi7KyuebqUfq19fnnT2xkzAzc5EEbmzQ8",
  "key16": "ERWZenxZMsPRFg3azRCK6Qoc5NwsdsbnYwgfCWpCucftVpvotkU3ZEfjhiNAMvmXpyHBPkzsTxyZmrMw8FEWpMX",
  "key17": "m121gD9DaLDhA9NP5qZ1j2tCSp2BHLCveStjL7sttG6BNCJXdLNmS8tkPNaKCNFHrLvRGnpdg4jtzKzGWXxgfoe",
  "key18": "3hGDeXc1VZM66czoLXpMQupeH2r9VYZ5okHirvGrejNMXbpiKgo7FZGfnmZVBNt5eZcyaLnUSk18DyHpcxxVVCsP",
  "key19": "aimFVR55E5H58JGJpSm2D1c9xnomdJWUYZW75yQVcEr6uLksEcaMjbywQEyodAwF7RxnNmioM9MvV3ktLANPhTP",
  "key20": "2qUCoHh44WRdAXTgtnxXH37F1bGZmLjXkkkNPdWZz8LtWgGybKLEbxdkVriQviQSBbpGub3mqoFtsJq3UTijLN9W",
  "key21": "2YKbg9Q1dHfxjB7caSMg67H3gdY2wCfCqh1n7xwDSWaTBGLHz8adJEnoEYQbGDjsGEh5oahHU5Vswt6RQqX9GTRP",
  "key22": "35RWrji9qEAAnKG87f1idbJKRdJM8L8e76R3jxuSZ7hwNggodoEArjgMaHDEgL2shMUh73RsFNtaWg3UnicmpAKG",
  "key23": "4xSLdUkknDSN2hnMguRVD6TQDCP7PNoedUotbZaD63xQSDN5PSNjYXZx1XtRsZderXMkwUdn9iV7krvK4kvAyNzn",
  "key24": "4hN1DbmLmsrnP4dHNkyg39aS5mHYRmZ5ZoRiqSqahT1Zva93eokeSmKQxtgVrLhHLPQvr19aKRVAcwfW1ioRLwsa",
  "key25": "4esZ1raQNM511GtiThCVHQZNXiVgbzV4JfpAUdKanLnBAtZVWCpAw2aiQ9ZvsJDKebCPfwpnwDAy8ki3fF3EBCsT",
  "key26": "44Q1Xt6Vav38CEwUXTG1d8MikwGy7HPzev3MQc6tmtN1hr7CS3gTd8CtkXdCrwDudX1J4vrjF5HrnHXAw1mZhBCS",
  "key27": "53JMkGCZaMNS3dMXXmyXgsEqhGYTrfJiXBQ8zrm59NFVAeNs7T8Ku741zkNig1HkjJMjnMtGKj7FcSZ7woF64GEU",
  "key28": "NJJw9bxKXKGRogZscdAgj4exbMt8if2ezyyZwtY6w3DsYAj9HkrhTEsmQ66ZdHNDCEhtKEcwYHphDbnpS6zhViR",
  "key29": "XamqqCXLsRweoz5ebEgQTFyib3531ykUdT1J9fU63GtS4YXE55Xjc6p7VbjNN6EM5auE5t6XwWU4nVRFWS75wwH",
  "key30": "3rWKw5nRLnwVBma8bwHkyM5kD52f7FeXWACqibrKdnZ28GXeN98qBR4DVd7vLipaq8bGDEVm7joK47um4e4Yiv4E",
  "key31": "3rfQ4d2JPYUU3jmi1qtkARjJU5VX2P2Qpuu7b1txMWGjr4LTgEV52UCPtT6u2t39AV1xnBW6so5NmzZWFdTya5df",
  "key32": "4NsifQv7YPvc5tLF6qqh1oqkKgWTa7wkM66fszzaKnJgreV4yxNQW3x2nWCPvQGkkLazsekr6KFfWuHWy44qnCSe",
  "key33": "5RU8FGkHq136eAfHRZC4PcXRT4MpFYfePckSQG9HRoK8nCw1UrFW3gunHEsfYfvwU2mirpTrB8Mmv8UDErVizkG7",
  "key34": "dJobEP52T9zzJnyr4qgmFo9Cb39w8CNbr4Jqo2bDns5Zr3CKvqTk2dwZMMTPeekCeUPNevsubioLKAzWaHY96R4",
  "key35": "5cPsPtWSEngAtynAAbEdqKxwDxKKotfRFTP3L6DRxdfBss7jVwvmrQgN6u1inNyN1up3bn1hTns78isqv5FDrbNS",
  "key36": "4TFso1upQcb5EguP4V2J5NGqy2hnshrJL37N1CbvH8nKk8tVfm7KJ8GJDxg87c6UVUksZEUhuAjezh2PiaoSPoMu",
  "key37": "5MA4wQTmp1MxNkMBeFFGwGehMpE5YgsTvW9Vz7gu9JheMVFr4D1JVPqgiyG1i8BvpKssR7VmJb9HimkQnwM6FSnA",
  "key38": "8u9J6PHe4oxbdy5Ry9gspgAvXEHhHDWgBytHPyFyVQgsWxVyRTKyqnQukGDBiJh8ch42Shv15TR1ecmcrENhJfh",
  "key39": "3N5RJQfpTBMXhmAH1sgua1bqa42A2a93RwHokXJPbaFuLQZUJvpJhmFs6CyCGz5fAkBjPdvTZi7muJNZRGjytnrZ",
  "key40": "5ELvGL93A5qF6PVHQuYEwrTtFnp6euYiF4CYtuuCdVB1VTGv5xvunEh7QM76fdVujNRT97MdVtkavRab9NEKXF5g",
  "key41": "3yTq6vbiHF8yhiM8JbvB8mhJHZoCJZMZsKuG2xiNDjyKMqjEtnwi4j7netMN5BDgJM1kUNgXKNzBT2xRFo1Puou3",
  "key42": "123avbtMpb2kMThh6ab7XGtiPAqaPDi9eSTSHT9r6mVCNM6ho8uzxeTdjc74SKZHgPp3NAnQuipPK2cXYe59eAN",
  "key43": "44zSTSLhrt5jTpN5b63YbGrRPk7RfvkHXyZQCi7mXaR3s8yXKXpjC97tkyjn315Di67U4vscPBASjxDt61cYXUB3"
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
