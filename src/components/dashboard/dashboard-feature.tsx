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
    "2fJdpivEftUNhGLcypZKUNB6LmgAuFBu4uScGFaXhMiim2bsYxVwuVu92JpXBoBpBndoiMniiSeR5CKNfQQrErW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpNr5MNhryuHLgH8Spe8KCPst2Rptw6yVer3Wbb8ubopwNPcGXEF6nL8Fb4SJLm2TnjasULvdS8QFRdYFDxvfip",
  "key1": "3PwbvcvuGYZ14UuJ7egdjRfWyUDphydijnh6ZzBwUQ11e4HwkzqJux1Nja84JVMyrGyABoPj24cjvvikZb2NnLa8",
  "key2": "8E9n1A9GF6gC3CRe4LadoxKnniQr37kGJXwkB1vHoQWxkxX95UbDSZmF1yd5oeojRJBvScTpaWrhMRHhifMBSP6",
  "key3": "5msQyASGC27mzG2sCm17KVqemUVccb6CE1vCHPxuzndWBitRYVdswJmMvQDaUodxqbHDw44u5A36Mkjwf1VkCpoY",
  "key4": "5h641JGVc3c9EFRPzjTUWVpTGWsdenL4psUaKNNKFHA51PYTKcdLr2qhoURzbj1YEeZu7fJVRaG8dTuH3Mk58DmL",
  "key5": "3bmW2yxUL9qxLQsQKQ2oDv1Y3dmLqRvSDS5Mtuqsa63bhUoXLcuHF2DgNZ5yMsY7cEUP4p8KSXUfftmb6ekuiQnP",
  "key6": "qQbwicF3angAzL8n6EJW9fVjMWrgcYSCiBoQV67KqKtLpYcSAgBffeDwDyKazPqurSUuCMWY4mraAoM38FKPpi7",
  "key7": "2VDagVJvffvtdofTLPnS9oefBFbcXBjHqn21wVVPmVuetWoaBsffKjaDmbtmZrAFRSS5JMVrwxDuT7i6v1ousyxA",
  "key8": "2RZC5Zd9796VgKiFaUzgdbRVeGZRV3oLU4J3db5V7VV3NUjCYuULLPBuwn497XEnDTF59aTA6nWHW1jzFxtS1PsX",
  "key9": "3t3bbzt7xGxy8iwT9qPV5JWhHMAPGjp54qFdbNFjVuv2uEhHXARjiu77CSDCcoLDM2BZgw1PFF7zvmYsozFguTE7",
  "key10": "61eoGk1NpMEKf2mX2Lj9dSmz7Fu2yBp5CAhkZP2eEUQ1kZ1DVMnQk63xbSgJME1QvvfZobNLLGuBkLowneUe4L4X",
  "key11": "2Lk5tiVRELXS8AXbNExUH7gevSASo4rDCjPDUg6o77rEnB4f9XP7giKTxzxPXqBHd8CfdTemzFutKjV4kZSPmBJY",
  "key12": "5sMZLQ5SXsjP6xQ3xf8LVod353vUWKcU3hYr4S4Zt6TdxgZbZHHdSy4NCaLcPt4G3X65autSdYzTJqqRJ9PEtQBr",
  "key13": "28dyjjZpLr6Ypf52RJDCb1gZoZxNrcyRTGyakSuT8ShCMMJiAfdoZFRpTodCxkgz7PeyqtdhF66unnKuSRuzQte1",
  "key14": "3MbJKvHoyxUamhcmmv2xv9sse7QuSgTw5YeQp9w6Kbn1Gvq9cKJmpo9YXLgMACTykwii77beKDNDyEyZnkR6tr6L",
  "key15": "3M7cKVGZPma7xbtTnaD2HVS2QKjoxdYhLigopHvfRqanEm4D2rRCXufSUL5wABK3fwsN7ZCYpTqfqnxYZbxJSZqc",
  "key16": "2s123epuzYem8mN33ibULG7UjoNnu13J6Uo3omA4sD9M9EVLzRobkaGig8gQVnsPKwdLJC7FWnNqtVRTqoZNHu9J",
  "key17": "542n314kL9t7RTf1F3mQokgc9L4makS7gbhrgNKN1VuhRgWrydfjX1RpUCksFVWNGS8HwvVL4QkG6CRwk6TUZyPr",
  "key18": "6624ezCUYF8KSpHFNArVJ91eNMGCatUgFqRMz3nZG6SN1cbgAAarxhVSpXVX4fWtyC2PHPVpyQ83FYdSgvjhzyt2",
  "key19": "54ZoZXiYoKAUvDFfVojBi8pJSoq1Lw6zX5bsfcpZVi6RJU2TieMwi5siq1kvZPR3jMKtKS18w4QHNqzUChMGJobq",
  "key20": "5UmZ5XAhVRZFPJ4JdzGMLKBtFxk1np8jdqNeg4BYbvpkQun8GRYAYuYwkcgMjyEeZ7LPkDNwXrpKAnGs4E8CbvrX",
  "key21": "66936Bg1VkJqe4oXHoBp8bF5qrKHkqLBMKsfx7MzbpMa1UAR7qp9CPgXEBfjWnCMCc9GovKVAenKG4GMj2sp7gNN",
  "key22": "3THWseCornxrZqfaqiSY6GDZAfPzxZEHnEShVba28WHDW6Rqjr9JpfXcijb96nE6awULrTSBiLoCx6BHJoHcr1dg",
  "key23": "4injXw9zqDMJAwfzw9KTepeX6NRaTboHVvzSbnnGvU4LKyAj5QsSipHcBmrCSpzKRtS4jyHVLuf6F2jJWjaoJ4qC",
  "key24": "3mbHUczLKrzw8xdrsfxxpTba2tw2C2QpJ16AwfAiq78zNcmMTecqKWza93sti25SP3t43FGCQuUmBecGXU6F8yHY",
  "key25": "3YrZGEX5kvRvCbRh6hiKqyCSJYsyHdjYqGvZUfRXTQfFXVUqyk1yRXvNzJw7bR3jB81mnbMZyUiaXm2jyD6WMAc",
  "key26": "yb1ytnEes2ktgmf3DRbrPYVM7ssDXAvrD8tGtH8pLAEgNxuByWreXYXq7ub6vPbdGXuSHiKsTbSCN9YjepzsK7i",
  "key27": "frWaepVUvaCXh6c1s9hhRUsLn9CYTRULCsxTXJdpVXMZSLyxNEEPdjUunV3vwa5gghLJ5BCQP6U778Rmv8qfukU",
  "key28": "2NiH5HPbQ7fTGwn4h1iD2wcbpXy91uJM2AVVAYE36axAE1FUtEGejyyicz8yh8UA2bhG8J9NJwPMwyAVSc1GrsC6",
  "key29": "3Luxdf2gkUahwSyZdKUew4XMwFa8okVShtcHGVn7piWSad2xVu7aGzgCQG4b4b3L1ppNE2b4AP7VuosZc2KSDhTL",
  "key30": "41M21prsZyuSdCE669KJ9bvPi8fsBH4C7pk4Zp9u3VTK7Yr1FTpAeUa6T8gYAvHme3PBgXqascFF3hHr7UFujuAg",
  "key31": "4GVRhLzdfGwNh4cXebAuADUVoaUkXBAKTFQfdxTnFvmk2qowyNJAUhw4Nm79AzYpHhkKvhoNjR7Y2aYWwHK1fPyX",
  "key32": "yaSifnJ9CSwizU4J9aJBRbiz3JrpUL5F1A7pcch8v4moNGkL6QRKtxezqF6KGbodJEaeExW9VBk2cGo7F56QorQ"
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
