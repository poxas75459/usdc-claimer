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
    "4av89QyiUX73LxZDjcFBhw1WNFyETKXeMnFTaG1nMxc5DYgubprbSsPWeCqEX38MSzCAFin7DCSa8Zd3mMxnMzue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pDKPFcZjBFtCXbkusNAmUEB1UfR5U5S2UP6q4HtwdnfiQTUUfNDgJkP7TWbgavH4N3yK22oq87iQwSR4vX9pEq",
  "key1": "3eBGCMqs3vHtj2HoqZZhXsZy6my96ytbRTWMUZDx2Zv4t1L5cMqa35DX4wp8Yjb7fQj7HgwUay1jQtJN5A4JyqZ7",
  "key2": "4Bhdnj8tPVYkc88zwYWR2WEqBkBPGVrB5CKr9bcz2pUUNnLF1iL21BwdF1AeJQYg1EEYAWenaqKgHJw9jqzVTZbY",
  "key3": "4LErwRKzVE8MYfeH4LKZQ7s29H4iiCTzfPaktn3HgXGXi9xtskAaCte2MMRaGu8wrMQiGm4ZoAbBs6cba4odMg2i",
  "key4": "P3tmpMaqGkqKpisZguQLF38N1SujG7WjR89aikzQGeeetqMFvMv81fDFquCm25cdapJuw8htG9SPDaFK41bELyo",
  "key5": "4BzT12fbdCbo8AX6UXbpUMsJaD8zo72YcWNdWmCMyF7KVccVYgjjDZqS9sdWqA6bWJ13c2GrLc5LoM9RkM89Qy4j",
  "key6": "5kTYuvgZsSFnodjsJbHFoc5qWMaNZ8c6a7TGkquTEnmH5Wbd5irZSTRGsmXTBefY39uKMXsPGJ1qfWhms4xhZBnP",
  "key7": "4uoPrBtmTZxcMKW9AcFJ35L5HHJrmpzUeSHd1wcg8vtWwFbSWHnmXkzf7nPq74Aroc8iZAvj76hf9BHqyWz9uU6Q",
  "key8": "Sqv9yHJvoiD1n83vpV9k6fX9nnje74mLa6Y9ithuSmnQYQ2k36PGzb8Fvj9DVjQcRZMQv1mAWKmjpPTefdYUVtP",
  "key9": "2YVRDYF1S4LivUXwdDDrHt8P25s9E7e4uJt4jFQWTD7DeByXokAJdeqt3329vbwnTmb2hRWxU245BwgmaF95HfmF",
  "key10": "5aFwgfTKH9sCsHVkmD1UFJ5c4fs8PwErXfF9K19tVjcqnJhASsyg3SWbouKHvQMdGX1LK735ghsrk53qChrqJkn6",
  "key11": "3mt9HaZV5Fs62JmahBeVHVKV3pUH1HmGRrm7R5dmg2wHNDNxsEe1a5p9FY8ojY6uXpeT1Q7DcNBQksbRW5G1BUXw",
  "key12": "2tktbL9Z5Jhb9oxLtvBetVB4YCxtZEGDGkA3rhUVbSpLRmkerza3odzhjjdXj2iuKxj2gpTr87RHreRynWUGkmGn",
  "key13": "4aULe3U4r8XJo5JEajaAbvxJb2YrVgewYAyAFt87z6Mop9tsvVr3H5uEhyF9FjPPbif2hA5LV4iLiLs6hYeYY7VY",
  "key14": "3ETYeoHUsBsLsxt5YxLQxaWpWtAc7yGZyThFD8fjUKN4a8G54XyFDFmDU3YShaMT3LejZxxeob3DgtbYFcW5Fc8v",
  "key15": "35co2DDNkiSBHbrxJ9igoPj4y8U3pBC8JuQB3tiWytiv5iiX5kMyHdpH7nN5Xfa6iiR98wqMDFi4zjvSNYxf9RCQ",
  "key16": "4cdaRWWsoEKWhnLETjFDNr1bUQkcL2rwG7CKpeVytSSa4fKQHscSBXrpRXbngM819M387fAQQnUub55KRoDBATHt",
  "key17": "PBnA9mdkoP4jzAsvBA3wkKAr4Cv5fZpBH3UogzMr45nSkESZGugkSWhmVGfxBa2UdKTznKokv6tDNgQNhRg2Tgx",
  "key18": "56T32fejAQVZ62TSKMQBckiVyqZ3gaSL3kx6MBtJu1K4YRf6T8SQhvJDuxT1w5Cv1AsZtfd5B1NRXnyVw82YUvY1",
  "key19": "34AwNrX2kfaRM3WaNRm8G9erWKEhToJHDd8cSmhB9CwgNfddsyPutdF9dxgfnr8J5WcnXPVJoM4kx5YZWq9dNXQv",
  "key20": "4m71jhCmnN6hNucFhGVXoUb1qvwaJK6jksx7hqrAkfvzLvuYFY7GHpHffp6QxR4xQx37q7ynircdvGZZurcs8MKk",
  "key21": "4Zp53j7jmm2fQUMFSikoDHVGKdhWYdjFX929XN6qxsrx6DbLjZ8GmV7jBwFA1j47ogvzvQWsRLiW1oXFWuhnLjWi",
  "key22": "3sYjNcQVUiw5JH6BJyJkNSNAxnEiKj93WsLB1kdTkndcBK3R2WFBrCDsJQi5eH5BzYHb4LSG7draW9RxrSLy68ES",
  "key23": "323U4hUdeGnKZevDZqYgg2rw1njrmspHbVyagFazAsoB3hCBX7K9xvtDv1rpSN8TLwvEbhSezVtAYmnDg1smeS8t",
  "key24": "2JFQG4ruttu2BT8orY8zEbV1aHtUrVDmGQbkGo4nsSmcCP1c3DtGa5BfUXE9QCdw5aM167kAJa1wmSdkvCE1SFTw",
  "key25": "333wY429f4PeKJ58H8EV4BtwDvDX1efQZvSfFajkkAgYBd4YFub4DQhLeviYTSrNT8ZTUoV1kDLEqVi9k5BAAD1V",
  "key26": "4xNFMqL3yk1PYnywiVaMQ4sS2oKy1z7pwLnFef36GJ4qfBaLvrcYxyP2QkRyAa473CChEVPfAgQrmSWMuDQkffwN",
  "key27": "4dYGwK5VpLJDF6Yi2ph4AaQdpK7RkDWF7Ra3TRPzuVrJNUG7k4vopftoAUdaJJqi6hyLnyMfk9TQrrmbqVsniRqN",
  "key28": "5hQqjQN87EQjR5eYmJwFRsbktjShKUoo5RdvTEahgZR6JpyAbPoDq1zBdQXqyrzroVfonjdknhXwHd1FWXAveUeb",
  "key29": "4wqRpE48PcmAJiRAZRAmdAR5tL9ZDRdoJ52QmE1G4ooXJ2TFMiBGwBKbZzPnjXnXu5BEqM4N9DJpMnXmpfvE4XQz",
  "key30": "4swxXKg3f5NEq8cAyozqX41L6Zax2DK5j7ohUNzzaTChoA5SzHnMFYcEKmvS37wqr6tBGPmPpAGFVFR2vmURm7GA",
  "key31": "5dWpwPLGvhEmSESYv34qkHZbHaFDjSkwbVZZwFnZcXcLohCANiENZ2XrnSnfUoKRG5mo4fQhXyXiATibk5jdmVHf",
  "key32": "2b1mXCvR9NXbSRuLV4zktgskBpQoZtv1oCGDpeYiXfkx99jLQmE1tDFMJe3AYJNFsaBfHaFkivtCbAS2qzLGYQHy",
  "key33": "5RUMLzRCnXKCkCLk9DhJbnwsiFAEP9S3PVB3dYmVhsoNYbjm6PwLYUPy5TSSvhknWex1Zq36fwvHCsBp59GxjWV5",
  "key34": "5HvKWxvuhcSB5iaJdmUcnLt7M8ZpEEqmGxa6DHLNes3752kYwSFtcd5EnKQRfQcJeZrydPwgsfjJeUU6759ufrWz",
  "key35": "243rv5CfBLw63dZijWNZHrvejNairEBafTs4VapVsqJcXchzxW2ZgyXcT5WLwrD5FPuEc2y44jJPYh5FhME3rLvh",
  "key36": "2br7MoVidnjHaTDCcrw8qoNLeqpxC3uHC5inJJP3JRz9PoqTem74qoGJnFW8zG7GTGPMBLrz9nmGm8u1j6BtpfNG",
  "key37": "4QnzWurAZ9oynC9Pqay8Dd956se5k6WAq9buAZm8bPWdpnTqp7th1Rk2stHtcoo8prLGfLkpfpGF4NYPmuA16pnV",
  "key38": "2Qiuf8CPXMe4pPaBNgnJPSE3hLBB97GNd1ErL9DWK9QJNPjoXxkMRabJA48Uw295Q3FFiv3VDaXaLi616Yqyb2BV",
  "key39": "4wwsR9EhBP5N6fkCzgsz26EJwYk7fNf2rkQmy6dQLbmDGsRaRZgkncPf2SA41eR8DsMFudfbXMakaCRD2RrrRcdr",
  "key40": "27He7cEGsK12RcALMFa3Ra7r1mxUuAcPih2K43APc6vanYmf5XDjRmY555JZPXNPkMedKCKArHV37LREdtJWTj8v",
  "key41": "2TYwSjjixVxtNrNQPZHHn7Ytq1RavN1CszApXnSxCmCxohMHSNWthnETdaZ1r8vqgQS5EzWtP74YG7zJaijQtR8G"
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
