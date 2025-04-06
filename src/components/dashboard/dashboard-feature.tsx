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
    "3t1zay6TibxfeF3T73AqErhr2xQhp9DcRSdLMhefw4RU2b9AoAVqx2PUAGmHGUWsWTjwQWPZ22P5RW6kTUvEehsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eu9iyrSKWMxBdrRGHw2rdYZA9C6MouS8uj1WfziNzdNCN6budThBfviYerTbmk58iDDfwgRDsHzgobWwkPRUgh8",
  "key1": "3ZcL3dSNZKAFWrvcLXVLXxM2yPmeY4VgoDVGBqJY43Gfjc1SxfkXc9zLLY8DGu3mNpj1kuGSpoDPyXtg9X2p3stP",
  "key2": "23zsZxBpT4dNm9LaGG26eQR8vgzK1Dbd8xHJjrpWyHAVEtqj6Vzr69ZQAWEoxZKkxSezemU5ogN3NdbcKgLEjBCE",
  "key3": "4qis2JHH6jSC5LVL7KsueeGtdV8cWNkf2WPQw5ypKTPg2XcmDBKs7kxQ8szcdaRUwMrdL6mdZcqBPR6sRFXL1KFR",
  "key4": "47HfXRxd2d84k3Q9ThSyMSQRgW47RuTkvcEavBB1Z1nEBLMECkfa1Sf9NsaT2516QmkPf27LddsCgpfmBYHkjeF4",
  "key5": "pLCLxPZ84SgbkN9shgBrSpq4cY9w2Adax56NRgAJTbtBgAj9g3q54SCvPkA4rNryBtW45c1BTpdHHyNDxSg3jWf",
  "key6": "51kM96ZzRi39zgPaAy7jf5ko5iZgGiY9855drjpWLRXgHv2QCd7y6HTehWwryStMuxaMucZzKsBn8KxQUYRYD1ra",
  "key7": "2PC29LbrRJ5KNwmdE72PrQY1ZdLYo9eKtinkds1kePTSUrues9t4oY4cJopKCy9EDrnbQX81ADG7QeKqhWpPrAkj",
  "key8": "5GP2fDcEZXFK4ftLharu5sgSYFUS2J4LJFzLNZv1RY4EFqiBNmYvAmLjdMnqW3fiE1EkV9xB2FHY3zxJuafeq6Mm",
  "key9": "8woz4cTpdJMR9n2u7tKTuivL79f4dUMSMbmgaF3qUg8TqJ6CzVjGEkpsHZ6NVzugyGMVy9UrtXfFkpoqNTkLCPd",
  "key10": "3qwK4gn1U2sdGuA6aSfmuD3Hb7b1FKgCVKiwDZuTmxdmRBv4KccEjyfnHWJgUPsY6amWyJxXC16ue6Z8uSd4gAwd",
  "key11": "DhvUYuzcmV71eHSs2n1WX6Vmk48AuP8CKVshRaf4Wh3DWP9HEzTXCsNCY48spVrsc4k4f7B1XWMSjqgXUAjbiqM",
  "key12": "2rcVN57rZhjPePk7JTDGrXRVgrDFLSiBTsHjwMnQ4fhAptXhPHKA5Yv379yFV7k7QJa3WrPfv3oHJGuCqmd7rNA1",
  "key13": "3A2spRKkiQxxQARyx7fvEWCydb78je8KtHhWZ7Cm338ku96CrfLYXMaqmGatYzFBQVecVLkgXfm6M9vKdGYGduoF",
  "key14": "5eRk9rQYjghFbRYuFvsXpaLNwDeZeFy4UbkTJA4YSwVbVPQweMBUxTe2yi96MaFxqV5qVcsJGdQt9W2WZjCbiFJm",
  "key15": "5x8WZmU7mmHZ45MQiy8K1qLgHPREqbseJC3MsBU9972MZ44GXfsXVsyTgNU7TnjqorweR8WAx64mL3HMKuzAqA1G",
  "key16": "4m1M9kdjNrMYdTF46j9cHUyYPCV8NeMiSxX3hwwptsMJ13Zdb2hXJPWeiYFoobp3rTGU4zAJKXRmKdRZ94YbaYPU",
  "key17": "29jMRNadzAyLAF3Gh2c2qr5QybztkAgcCq5zZ3jn2E7pFQAwrqBSZ956xgbSEZZ2JeNPwdzKr7pZ539WzS5r5xpV",
  "key18": "3RwzCUgvSCKMwbP9pzJk9FriG3PAPvqxDgQ1YyM36if2g9dGPfFN7R21sLRVUZ5cmCLLkCPVqcA7qwso9iNR2LFu",
  "key19": "4Q4HfrA6So9ikYKQnFPmWxgGNKdoJZhTKGiA9vkR4RMFEheTAET32UuKzh1tKVde8Ug9jpFFdqqdgs8gt2FS7SW6",
  "key20": "2tztAHT6UxLH57gTehNri396Vne9dLCtrrGCseHMc1N6DQddBvJUXa5XGcpUtdmL61dkQ1H6nCeFE67gHU89TRMp",
  "key21": "35ixByToTMHxBFDT8S47iGLBDkzdZSbfYTVupiuDjsKf2JniwNJ4hVRyzUC2K2tVpNT2FdPnK3arB5YPcWzRXbxG",
  "key22": "3k64kyTAh6NkMMnVuUoeBAqNqvHZw4ZCvCZSbZ5qgba3pEUyysZuRKGkPAinXQd1fqcvnFh832qsqHkWBP9j4yok",
  "key23": "2uCYMpo5kngeZ8gPW58WBc11fQRPuevSAF2xzhmiEWHxwNPbYtPYRByMACRFoSY1cPxKq8Ruf57XMV3aK9om1JcJ",
  "key24": "67JBKquVFKrLjxpkuNDtg2aha1d2vnNUywVyRra7Ra8dTvKmxyfXoPnBLnfbLk7WoBNid9hxXSvGxphjfvqGnYA6",
  "key25": "3xDRQvySfBkkSude25BgKW8Jzo2UEb7kb5v7Qaprms7vtiBsQ4fQPTfqtgwpP4xiN4BGXyofV48jreR43w5TgNZW",
  "key26": "8THwLwaotBZ9nLXwN59eq2tSk7tZAbfVVdRLX5R3hxH4C1WAiS8FtoqmtJf3J6iVLvPLCdTDGDzU1k66ormGtHY",
  "key27": "4m76yLFHYUNuLJkjgc3zPSk1on14fgQ28gJrTnN9cXQDWkRnP9FFvA5cfXjTFGr8m1mdANqDucX3WaA6zxroYccZ",
  "key28": "5tMcA9LukYGy3ecSyK8NQwFcR4fqVFToAgi5saPM3VMiC215wHR7cBpqTZYSRZPJLj7q4V6FznrY9dx2CQHH3ShU",
  "key29": "4yLUckwn96HDgemk6PrwRiVFpGyoM7ikNR55Y1VEYHj9P2CorByS55SYMa1o4yxaHRgV3YGgjYxfG4xMcvD4RDqG",
  "key30": "5g6U7i2jhXsKKFmLHcfVCwyyVxDeV6gjv64yVuLWuy8qMnHRRuqBypb1Y7tpESmUMeeUxWTgauM1SGbTBz7ESn5z",
  "key31": "RNJyhpFC8dwVpA8zgQF7jebcjuFhTViK8ZLZUyTJSJVFDy6GaWxtLMfvohMayRfwnM3YhiRSKf3NyrHNCQKnWqL",
  "key32": "5mKuJukRTtGWnHR427K2mxdsD6UxJ5wg5fyzcFdu2EYvSq93teTTYhqqi5EiFj3uMz4QuiEt9AJ6XLo1KqrL8HUS",
  "key33": "k8XVbMkoLCW9GukEaKKcj4dTcsu86qHpfCLfHhoycSYqZoPY63FKtthbKXGDxTRCdvtb8RFMpGgQdcUx6k62ZUp"
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
