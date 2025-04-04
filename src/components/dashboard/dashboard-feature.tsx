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
    "52jybuzijxEJBw1CqKqT1tMBFhJb5Ljq38jQr67jPVMpxiWdU3v9EoPrKJBz4mw3QtUXKu4tRpYpSVMFAC2YmaRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtTawbFqVQMZyhmLb5NdE8YeVvH8JfnnkvF6dRs2AdBreVHyRXmPDgf88hG1wHq2PHbDXrhq9df84xzcJKsv2ep",
  "key1": "fj4xBTC1kN7srrb492B7gNmSji6RxEtWLacH56H6dahRuyuSUf493oug4QBs7Fh5T9UyCAcdSzCdD7qYfT7ZMwz",
  "key2": "64A66mSkbqLM8JpqFvfmizRAdRvEs1q6JhEdbf61HuVmQschoTymkNMq67ZrCTdMRNkHdq52PC8fbzGVEeZJrBjp",
  "key3": "jucuecD9sSiE4Kc4iX5Td6r5soRXEYWmH8Mcf3vHZ2hcgj7JmEBgJaiXsXMCeqwCp6b4o63BpgP711qkDisiz8o",
  "key4": "3xEGxy7WhtzK2yhC1zYFoGtrpuQfzL5XdYcQFMDizdF5XPmas72sJy2ghhnfQhrYUu2VK6q8aFUeNuUUi5pdkeTm",
  "key5": "auJGMwnJb8n6TaZLahfVSd3NePqJYeM1aNjwHWZo3iR77zhoysPSeLnkXHJhXvRMvv8L9cdKoEVjzVd13qtfUEE",
  "key6": "45JuajSQogbkr3yDTxJh5yvHF4P2oStPWAbxP9Eu66MmfcMVdCGh51TtQDeoNqAofwBTgySvdvfYSQTECfu8xFka",
  "key7": "2Gzj49zTD66MgsL1yG5nEptKwHQfa1q4ymqBq7fdxaP1o2xCFzfQyKCcNZF5n1QW4KZqhiYQKzE2yKXVXQiNJtYc",
  "key8": "38BcM6oERqZdnW1WYAe1NPnQuXGoFrwn1W1uFF8ZVG1kbStD4PfQpSJnnQNAddtGReGN3Vndtdjg9J8wSnxSeFnf",
  "key9": "4zsqeiRZEdhMMnNixT4DyjxanhPyoLrAkBqYyNHDSxSsQKJP5R3ygDGFh7CTc1K2rKvsCpwCpBjPVAtfYxFCVbis",
  "key10": "5wVrXC4mcFpg5ZRaTfXm2baXCYy4sABihjYGUxMRdFCxEQJbB95iunwLVnnAkrUAS7Gm2nG3BjN997w6E18LPybn",
  "key11": "3mvirAdu7c9tA8YgbfCrdYatDxb8iWf91WpHLvvSJGPTuB6hQtGkT7AnHcbFEpj13M6X67MayV6mqDeF2HJ5YUUm",
  "key12": "4XHSbpC7L1SXx5SJs8ZBg6FPyoyVcZqoAU95msk6s3L2RFjpTVezZYpT6DLjHSjpxrdbjJFQmNdM7yyrSbCsvVE2",
  "key13": "3zkVR55J4ekioqQXPjiQnrrJMZYh1S7R7AruqEijGP5knDEa2WieTkECMtKks5wKnbCRspxY4HWybyCsjFrT5auw",
  "key14": "2vAy96StCXrbQ5msjGkxQRTAP6Tvn2aadwBCfwqHFryMxfPvdHiBfHEDctnJCmqeB8MJBGWm5QMJYm1u1PNYPh1t",
  "key15": "3AaTW6hhcYZ9qztzAgNgzBEYgyZoomzFoz5Vb82Bf35NUHfdFWwr5Y5xdyQLh9Tzs2n3VUtVtG5imQ1LHmpaT8B8",
  "key16": "3LZXCXqidnn1CESFV4SJ7ocyW5hUUv7A3c5nwfNyaf76BEUoVeYTuiW6gfEcNtRaPq1ajyUKhKQwEPqZrm7JqB21",
  "key17": "4hUJHNbSksFroQ63ny8ngX9TEd3UN9VsW7PAC3ANMru25wUGsi594oTMNwVzQtiFkiVDnY1J9QJXHAoSvndedhmg",
  "key18": "3saVwH1U3Qq3xQyZnxUACYCFiyKmr2Ts3QdBruKw8DNGUAjJVMipdoVfKmGdTCmUuGiNnykgVZQUE74rHjZpQaHR",
  "key19": "4vQqgqdXC9uABvicGRicZ7VpfndZ3qj2ZJ1Yf293ieZ5WdewqhyMUgGBQm2ATUcGyWbYyZ1FBBYAthK4iUMhq5C8",
  "key20": "5q5YF1q2u79SFnfUp2uEMbzukEQ14pqVEwDiBpqkUCDpMtV9QJz2vpCPXq3uDaFytKLeeX5EMvHKC5xMprDTue7g",
  "key21": "2uPLTkE7SZrAkVrUKrK1EytdZtWpDs2NAJtdRReFKFbsAAum8sknneYTrNsCjtexvDGRPEs62MwvonvAEjfswWDL",
  "key22": "2VH1ZrnbDzyutWaj2R51M8uixqYMSbXFz3LoPFc6prEVDTEiupbmP3LHjYPedKjDNMoDXjky56t8S5uCL57gy6hK",
  "key23": "2D76hWQMncNPUjCxW5Y4pUca8iK5fZpAGFuRJpgSPcBAcNyKGguCX1TaEaFWiWz3y2jCiuhj4XTrFgNKeerG78hX",
  "key24": "5iqTNStwTfHZPsnEqNkGXtQUpc1MZDGcxHfXUpZjiXMZz7vUt5Bvhih9gFMyA4u1bB43cYVF8vuWt1AQbfRhUgMB",
  "key25": "2ADqh6YTrkkiAoMsAi83do2EMPYq8etieZSRXuzbpnLXWDC5HRqoHU3Dv5qJJKy5w6ohZ1ZDYRFyRQ6zjcZxo6wS",
  "key26": "3hHwpDLUqZR72AUXz4VCL7RPnkbpxVmZ8iatRadC3WWnND4UeYW7hCuxVAoxMoz493DGDYAquyiwQb1wBoDaEBqK",
  "key27": "5wpSr8uEeuSXHGL1E5pRvopjTsV8XgecNm4SbTd9gAWT16MtZ3cuY8tSaxfCxTepLMffYbdoiVLGqoZTk4RUHE33",
  "key28": "5huYzGdAK996aPmUTpHb3kA2wN2EP13gPUk51PaeR7GbRQuw1r1pKLQR49pxy8YWQs5TQbhHrU5Rasmw93bhmVcw",
  "key29": "7DNB4xKWbJ4QiFE6fREe56e4nNJcxTseJtRrFni9uN3S3eFKFC4n87RhebbQDcP5H5ejXWbtGsmRLbD5F4fb1uP",
  "key30": "2t37h91BZpbzdBxyMJKH4rX8gh5JiphUGAxSSD3TLxWXtxXmMdMKYiG71sXq9RtrZ8tpFVxuTcPJjG9pYQN9byao",
  "key31": "4jUXty3kVwcDDaRz1NTcTwsf9q41Me55SDXDoUBYNPxAsGQTn1X7CqzNSvVSNziCTHE7dpCt16S2BKHhAgQbMcWL",
  "key32": "47hNLcFYoxTDmwfHQhqtx3phmFfVsxuxax74tc51ciCMKrkHEi11sv3xSmenUxMg6dpLP7JnKR39ExgQipKf6FNN",
  "key33": "2pQ9xA2cmKEhva6GsAQd7bMbhkTakFALc79et7K3ieNfKzpd2LAfkvgcWs3wNDxuhAzzCZTsfcFHvQCHpcb7A16V",
  "key34": "3RoaDRMALUGg13dEdWFfBaZfMBdCtzESZsZTFN8KWmnJm6GFNPpzZQRQrWbXXQN4SHWpp6cpmHDEtXoCdXD3dX8g",
  "key35": "4hBTHwbVBTRmaCQkMQz15y2TqhCsvG6qEHcVKoi8KmQRzJEAcXup6mLgSd1jHSSTpqSDnea8jxfEkMJymzkLvaPP",
  "key36": "3JJNyAFk3fhGcrZxjugQkB8wiRsRbjgdx2T7Puseqx7GEEsghEAosBxiE6WcpENirESkLSDdfRSpoq6T8uZTAJdk",
  "key37": "V3N69hSdghRvnfbuw3iFt1qmkSPCfbWCF6GYpsA1rDBkzmZT8QebhrkqxDpU1gkmaUxyyZPqEpeNtn997mJFb5S",
  "key38": "RjWiD6coZ9XX5JFYCeXKS3XUJYUknNXGhx7spzAEXC2T23PNKND99vAxu8Xz7d2trnfwJ44Fp9GPipEDFB6pSPe",
  "key39": "7BDCdgxARoUpJ8ZWPYaRRGp6Bd7UapzbhxACWmpV4Ri9qWZnbGJCKxA27jKgGnK5YgKqYiXGsFvwtufMDGPP4GL",
  "key40": "44jzLBdCkmWEPLTw4riYxhZfzmg8JmTh5WSHkuLxsdPP37dG2qcLgqeUxtFTp4tbS9qNVwBcTVqYo1NbTmDmx12t",
  "key41": "aFcq6qcYTKoRZZoDokBj88nfYePpEXN3JErNaZt2hUmL9ZYhWv91deeuz8CfQY79i53KVfksM8DJaqMXXSCdmop"
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
