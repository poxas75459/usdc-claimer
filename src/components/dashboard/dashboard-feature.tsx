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
    "4g4LDoehRShBYPskMm8u9hz6pCngBtRyASMFEBj72XRcZSDRCVePBVzjsRH61bHdFPJzeGYT7sf3s3oAtqjnfU4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Az8DshWshDhF2e8ffUbkJEfz2whTBFqjUTbnq52XXJdkeTNFrvyBszGUrDVeQd5WocLsMxgSGc9W9N2Yce1jmoU",
  "key1": "5WfNLBv8AqmRZ4Wr6GTatEhLLTbbRqVNKXVFifG9PD4rewJty6eA8YRwR5gXZwMaWn9PtbQZ8qXvd58hX75seQxC",
  "key2": "2jmmJerckVMx4mpE1hpVjhkEkmBhg7iF4wY471vuabM4gkQbXxUp6L2mHRXTp1TvTFNpaqr3achiAsCKHc1igti1",
  "key3": "W6f4yGA7hD5iGfRfMkH6wMBKzRoohSHa84Kvt4Gr9XHETyNhQo9T2dALHSKwwRrTvghYY4dzM1Kf3x3fss2iDuD",
  "key4": "3LdwDCcpFzKJRp2r1C2S3sfSa5TV6QzYpozEnmqhg3g8XexfBwfAtEox2M6dsJa1dXBmcEEVGGts4E3nxZSiAbCr",
  "key5": "22wU7DGtjMP5zKoPL1LnFyY3d8e9NchSDLxuJnhnZ3b1TDTLHjHavKbzUiYcySF8BgDiyA5RpPkxnroTXVsGbPAn",
  "key6": "5euUP7AYrzr5GdevQTPqBHPGbi1LRwSwVCeeJx5qEdfrso85eXEjHknKye62U9YsB6fcPZT2WhhedSv4VRnDwwAz",
  "key7": "4B1vAPfvSWyjCeJRSCKhG2JuW9tZWK9vXaA4D1pi2eLpj5jE6w3T8ttoWRY89rx2rd1KSNxWXakSuYxctJSuh832",
  "key8": "2b1AG4hGmBTxCtk7sB29Hj4wxBfSN1uZdf1i8VwHRQhZaW3UtdHufM5Ht4Lryhr3xouQDDU5XSUpS9ni3862eeob",
  "key9": "3ZK4gnojoZvZPm1HZ19ZaP9MDDg5NaZmDd4yBFRF8eQSBXR3R1cwCqeA3KhPRtJA8g4i8W7SCNQjM8QJQb53w8uW",
  "key10": "4P2czAcGvkdyCwx94pxfXAjp8sNVe4EDXgGzfPYiC1T83vucY1cDHyzHiv8uqSeESK59m5FoFdLZuZK93wc7T2ti",
  "key11": "idgL9L96TowFAGpJqEfefdPUbwn3un9LCaYBLCbAyhRFanfqaXUn9Y7Yo9u1u6m5A57FSA4rba3jx1GQ7pc1j4r",
  "key12": "ywuZcP5xSpohrtd1nXwLWnfvT7Dip85G1oqDJfP2PKakZTLpdKf9hsRoVsS5WXzF61PKfWCxbJz961k7u9iKTRj",
  "key13": "29vtmodDBAsbXasqHSF34TACjQGA2TrNDDbRMdhbVwUajKdJkyunhLSZbWnj6usr8JfwD8ghufxdhxvF86uJ3KY5",
  "key14": "4hrDUpwHXVnzEe4iCtqXLbhkBnhCsNrrU1BdVnPya3vLFxx1Z82Q4urMWMmTJYcQrQ6DUPGu67PvBeer8dQbKxP8",
  "key15": "bdYRyV3c1ig6cdUTC27JGcGaocqazuKpQtLwBEjxtUezoyuov8YV6QmZUjaFkTsvXKvAP12VFiqCLNN31ntdYbw",
  "key16": "dbsTqvNY48vRmZofjMNSPSjTD4q6RBhMSTM7tNTLudtWGnHCDCduQ29w3PFaAPJBexaHhPqwPk3KESViM2qmFBv",
  "key17": "36FaADSACGKoUXiwdvF57CMppPw4hRLqpaM2FYUAVf6kKp2xhs8p3eXpouDVeR3F17gtWXjdswT7PRNYhghGZCzW",
  "key18": "356d8qGr6wCRZK7vhyUpi16axHYeVAXBzdKoprnMvoAiqhgUEasGx3CkmuZRUH4tcgJejaQbrseWL9myoiUS2FJT",
  "key19": "3kuRhp14eP5uU9EAfitGPNWBs6vWdBCSb5iF5pj1j5sqMn6FJHfCZVb5BtRCqLPHx3GUU6gXzCn2zRafeRi6FzXD",
  "key20": "4h4EdUTJd22hmSj5ku93M1yKDBw8ekiDeFsSheWkPWCKMWcrswmoyHc5A7gMqjBLjjWKmTHSYaByiW4jrvHeE7Ni",
  "key21": "4RpyY2cPEkbHQCbjMCTPKMGFeEw7eio4tEvDXagFeBQByQWh4MedXi8wg5FJ998qMQxE672VQc45s7JpkvcV32xg",
  "key22": "3G4zWxmZuciX8w4SawHxBz68KmtUrZKjxL9nAJwZbDYGyr2kdS4QPJd9Sap5KfjaMuQRHtb6UeZdYpRyMWsyP5k7",
  "key23": "i5FbWRGCX5VTNSjvXc22JdNAiwdJ1943DmSC9pzNLiKqNHJj6XNtUE5MAVzWHo8aVb4GSA53rZLT7EdfXaQYQiH",
  "key24": "4WLGWZ4RHDnoRKuMguqmvbyEPrFC1dB8GjiitJZ8nSTzwjWjqPK48c8bGosNuNh3VPxF1djpuhDD3tN4WX45T2Dp",
  "key25": "3TwGEH9db35sWxtwMVG9Y1S9eoGX7pUXe17dRRyBFGxzyZEA556sLR6uGSnUeVkJvU9L762QRjf12EqmL9pBWu6m",
  "key26": "2AjwFVLEm94bWnsxZRZPcFx4HLrwTe4h3ngQisXPNC6AkfPvFyNu2xqYERuzgHFxivgg9Ejzr3o7UmmCAVv7vzis",
  "key27": "tvTsdBbb7v6Ags7a2EpKLPJNTNv8ZGSNErW7jUDihY4jt7kyuQDffritYELSZobKhGDK5W3C2kxXmNqDSMUNpi7",
  "key28": "xHJf39uJdWJL4KPrWHF476DdTw45ckABpudxeZDVQZ3W8ezLWveSWxNMb7EZtiSj2FamEkKESbe4S9SqkRqadqx",
  "key29": "325ZenCpsUq7xWPDhndJZyAfNrXqeFKMTKuZ7mrU2CPnAF7EFj6JCazuFcGe4Yz8idZkMjw6CKRLHnco2fR2AGgU",
  "key30": "P3qoLSFYQ64GEo1VakuDFChZu195iXHqtEFTGX7Y2sbzfzF2WoZxCSjgMgLk4uhhQXuEt47aikihPWFVQEqPEBQ"
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
