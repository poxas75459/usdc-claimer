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
    "4JEoAdhQWaRRWEFea76XTrS258JzSF2eS77t4qWxYE2egFPo3zzEQzAdCUNA5fRZG646UJJZp8kv2aVZq1pDCK4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crK22KNmdQRtju1ETdmqiQsTq79oyY7MSpbJkRPB9gt37JovppzXngCTQRaLszQshozaDRiDihoG6oc7nDNKYwx",
  "key1": "4iPqDQg1yL1gistGYZ6PXJpr4zWF7RaSNSQcKZe67X7TxyGi9D6pt52bVY9z7pr8LnHmjC3ZpG77tvLtJc43Mq9v",
  "key2": "2qUfg4oHqxsMYCG8WQrBu4gK7fFaJ3sz886cRDFwPErAKsXN7TjTGftzkUcUi7nYJ1pW4jc1zKM75ZhjhxmFtAJe",
  "key3": "n55jncjb4UTdJKDn2FGpUYauJ7W2tjTY31wMYNtWh1aTYeQWSF9ZB8TQ29stkpVWyjzS8eVjvg3pPbchEpkgcTN",
  "key4": "2mjkzBUpjvmmhajQrGuY33Bcp9KkwFA4SgHYNTeVt1tHumgfnK2FXTToo8uiPgcfuZWzC6A34XrQ4BvWMKd4uEWj",
  "key5": "5TYHmJjWdigmgVvaVGMFEdvjCSe9H4WragcsAE52GmyyfacTTxDTEKJc1Tgtxon6iW7dBknpo7K9F2a9Gd2c5BTW",
  "key6": "iYfT5APRo8KbrTLFT2ZEiqTKbEeAQtRuuaTtb5iJ1fzhEJZT8VdAAaRj92AKPJgJkqrwypapybGoqszfZCUukga",
  "key7": "5UGzck2hGcsH39NngTUJMG9fAwKyoTTApjmbotWCaJCwBLfaAmzZDpmc5iVcSD6BDwQZ8w4J4w1Jds6NFHwAt8k8",
  "key8": "5xh7UexmcvSYKzb12aPPveWmdFYUTrwY9dEKUVtKuM1bU7Er7JtRw3gQ8Ap7qK5GjKYngZoonnk2rLs6mnmA5V4",
  "key9": "5aWzsRY5PVtyd1LxEdpGmXzFMQqm7nihKocJuiBVRR2x4nW5DXCLkTv3cvwJTCTr2QwgUScJ7h1ZcVNZu8KzcGkM",
  "key10": "54q6agRJWxLfgrRDjtt3VsBYn7yw5kEzt62PppN4QcMZmHzFoS9By5m5vc98YpZ6dFnDASFKgok4Rwi8qenuWBEG",
  "key11": "PgL1BMq5yoNVN299MLTD8S4LuF6TX4faERYfNQ4ecxTtbJ6LFUuWqYf2nNbbwuo7ygie5nb9vNLoykz7uatRWxA",
  "key12": "3tE5xKR3AJ4PQa7yzZgbgTnmqfTysbzSXXNtNwuttbcWevYd2xu8c8BJxiQ47p1Gha5jv4mrm2vaBMXTXrZXVb1S",
  "key13": "2A8qNbcnxV32jbeVQDjnWs9g5PPd1Uxoy9FgiUGD7T4uRSV8a5d1cckDFp45sFjkqttHmVTu4mcFfW59kUYKrRqK",
  "key14": "2oUcQd8BVUNy2MrPzxtkMRu3RHwqED2TuYsGFnHCJkzC4NZP1H74UsyeZ3c3zmdhqKmzfxUuCLp8v93M98s152iK",
  "key15": "57AM6CdhEq2HyqvLPZxinfPzQC5R5bLAyimqZEM3QTuNCA5GRHWpBgfUAUQSgSBwM2qB9VdmBnC3rHTwH7irx5Wm",
  "key16": "4KUvznV6jWFtwJt7UQ49shSsrs3NWMgiC9fKpNNjkfDezRF9TxY88ugsuy2tBVcVH6prXCFU9DK7How2o9yFXxSu",
  "key17": "33w3N32oZkVzCNd6FwqKnWH1pLLiVKwJKdqe7TG5gBenxQkuJ94GnXyHqhSgMGLvospu2VSkKCfTKhteCyuc14r3",
  "key18": "4a1WVEtu1RDSGrFnNW4TpHbbuovF5JPStr8jr5Myp1V73VcE2kcCYENc2ieXD8FSnJuY7USZ3BZ7catWfN42QeJ3",
  "key19": "2haJwoCgvuMe7xf3sM38QGPgNhY5twBLKijjGwEq9JtvyWntz5mVRNmRKsyHa31SyYGCd6KNkesiCGjcadTAHEPM",
  "key20": "3V199uhJH79URke3HLSgnA5ZCxLJ3XbHn7HqWVZxxvHdZzTjr26pfRqWpbXuC38cAwoqVPfV5jqsDFASCu8CA6Pv",
  "key21": "5cWcMFhFAoXzP1fvipcoBKeDVWexUpwr3EcLpH4k3NSno5VWQHhdqQiMzV1FWyT7moWgrg4FZJ1GtMx9b6pgxiLb",
  "key22": "26c1LnByMbyns3Ccp4F3WRWjTe7bNpQ892kRQ1cZoo9XYUcwk71CEzvV6HwzBKbyAoCRbCt5Ekeq4WcEwaX3aGof",
  "key23": "H9yMXWZHMw9jhaTPL54MfdE8FDxkY5p6TcveqjFWsvrdpxCr5VV4vt7nvtXDQhBD65XyUGaDz4XGX439PET72bZ",
  "key24": "38MwYgjiwA2hHna1sj3nZN1fpXfViURsVRioupZZvSuihVrSVhmeP6mPNrKgK21jqbkUasi8MEJKLMmiSaFUKyhr",
  "key25": "336kguiyr9pneFDRsYFSTDAzsKnoqMr3DKEr6ptBZGsQhmvf4efiimndCnsXtUxuAdL1KTycy9WHThdCjSC4pGiN",
  "key26": "52D649M23e29mKoNo654vDn36f4DzXa165AWMWA1tjps7BUrWbgAxF4Tjo7jtiAwPxhsiEh5pBocWWynbjDcKrai",
  "key27": "2cEmALbewSBiyz1Fsgt5ZDmWaoHhp9g7YJ2s3djrqDg48RnrcB8ya5pxJVvSbbFgWwygBKARBBRtqLxYZ7ftRDtd",
  "key28": "3osFTJMRWWGkHSNfMkJG8TyPhnZLyhTc7pPGrcepLptzT1RygGD5fyLhCHDBkwB9dNsicC1ihy2vbbpnjFF9cUSL",
  "key29": "4Nnycm1m38tH8ZMYLWrFvuo9ax9k7Vkbzo5rQijLHJ1hG7vAUCPbQGJRkuhRXHHvwHJXxr7cGkuW9G895pvVHBxZ",
  "key30": "5Eevi5AHKj8NTatT7wDboKTxAML5MnDh9xMo9H9KUooeKCkV5hPnKciSW9Z2FGZstcsYQkaQLLZJfNaF2P6vRHso",
  "key31": "3wjHe9TaazjhP9HuZbqN3efy2JfCnJKo4NB2NKgKoVwxK6tKxCLwSWkwSPE3GGyUhr4shSZFNmqrRFKzaxbgzdeA",
  "key32": "4K8nLSuHQ8fuamDVWz5eqqAA9KyHtUpoAPhLqy8WinMzZK5kSxWnJ59VJbW18m8ZeLNBG3aTbcR6UXqZfFMqomrF",
  "key33": "5cf3xQxnfqSoxueB8jJjU4o4Nq9p7b9D3AUZKUVZa4kApsC44qJUvyGVpMNSU2HZpueQnbvkMfbMTx3nXqjZ4xhV",
  "key34": "54sE4tddVaxWY5byoxaCdqhy1HKB5r4oWw5wAaN7MuX6K7paKu6MLNSz6LKckH6pT5vGcTjuqMRuEJjvfAajF7rK",
  "key35": "euvFwDL7rhn2Kt7Rk5s8i1GNPYUZ1wD6Vo3mvZgXUh5NvZcj2rLEAxAjT1nsqy1DfvsD5wPa2UsKqpYetkboFHr",
  "key36": "4Tk55waAhK9NGAZ3nKgjedagqbEDv5XSwc9Xf5udYeNAx1EiaqH1KcxWLQYS2wQcabokfHynhKMEvdvAjMnuXZCf",
  "key37": "4uNMyFenhKP8w94ufbp489mU4ubHcLHRJfazknVnFC2FLZGQhh2dFRX2vdDfw5YdhisvYRCA7D1SpqGp25Xspb2o",
  "key38": "3RzVx2aadfw5KVy44jc7RuvEoyYjmbVqQPHCbwFTXkBnhtShPEsK791nLQrqMyGw4MMQ1oDoKfoYaYByRXHvpQ15",
  "key39": "5pGDzMQrEBvDS1KXVnozq3ufhfbvoP8NyK9vVBavw9i4HmCozMVSewxQYkDU19wVeY3XCKXzc2nAVz9vAS1LT3gj",
  "key40": "5m8WCVr63UZx9kA8CmxXaHsLshzuu7KiNiCyYT2CEdkEBcPzrq76y1smQSgcqX55EZoXgJ8zuNoaR4dr9DuviCPi",
  "key41": "4p4iv6zPuke6QH6pA5ZXdhTZW9EzDjjpidw9ahVZFJ4CV1DaZNt6qWSNQW67dVffw5G1Z3xpwYEQoFQDKhmr76q8"
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
