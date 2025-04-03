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
    "4QkXHdNpSz6T5rzC2x5DsQRYYzt2poohbq8rSWfko5XibssPHYuH1rfEEHSoNdMTBBFsLpmAJ9UtS8cyvGnxN8F7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tNwsNPpUYVEvQh6gyZERZnVvCBmj4of92SFNgSBwVYvmnC6mwsJTwpcuhrwZaGrYYDVD6YcHquWUmFfnp3V7rMV",
  "key1": "55ix62RtfYMQtqpNYj2JRXcPR8VC1qM4uUsKjdf9WiiD3Q5jpZ9gFbsrN4ZwcL5tHUZS5nw7ge9i6byYxktDQoxn",
  "key2": "2XfNLFV9dYTMfNGXiCuHEbtxFiCZwQPoSmhNXDCYyfin2F1e9KuWpavDLL8L5VxhnnNgkTJAHJ4cgjZ2saEFJHAy",
  "key3": "4dAqFERhDxTmdCSFB1L6cCpBh3GsyjQZi6C8iN6PWND3mc9YMtz9QwYpFQAbnubP8WifinHgLWjKiNztXVmrqSbf",
  "key4": "hZ5UVy3kTGN8FJ33CkFewQuv9srohb1CTxioeLYDenGeuURgzjnDrRRQwLrfMPJJrExEPGeYAfpiyZJJ4koe2zs",
  "key5": "54qw4eFdvEcx8n1hJLBBk3rg6eUqU3fji4nrxXuhYXf3xmYHzeAFiJx2bv9KumLfHsX2pWvfZNeo5YQ83Z2QDs3w",
  "key6": "2nxhSowmaUYb2vKVfX3E3m6CBEQdRWPtcY5dPDvEmts4ZWBDJjVPx9LmhjB1oCvS25NNie9g5Yvj36KW6HnFFDN",
  "key7": "66nnRpGgirTy4VDB2Ueea6AuMik1LNo5iPhwxcENWfsBRbP5ehwjx4MfpBqNSJXgDXmwhMmHQmitmrSviHMCwkBZ",
  "key8": "UaMqJC8X9UfSycBAkdjxB1PYjL5oZiLedHPxex1zX4M31koTw9zLDbt4TwB8bvspJ83FBMwhADod3R2JawUHaJa",
  "key9": "5o8db3k3pujyTy7py2SSviT5iz6p71ii6u3qL9YhJKQR5ijTx9usaYx1FSzgcTPa5Eb92bVJsiMxWHs3WYvAPo8r",
  "key10": "3y1ZyccHw7j7gQTV3J8GHvmJ5GVi6EEcYia3UTNFXUMU23siMeoZaZ5JiZmWQUafd7dbR5tdrq8UE34CLb5wZRGU",
  "key11": "48Ygq5U5r3g9hPBNvgjF5hvnb14S3FEy6AHiG7eXtt7gSD3iTNPtrpbQxDd5tJ8fKYvLSiDs96eDVQ2LSwoJDmFG",
  "key12": "4WfWtzNXuSJxdykinmwMKk7SRdxrnMcfLApWo3237WpQHJUmBRBua49BS4AX7XbyQgH2XGvjkMNoHZeebyW4CWV4",
  "key13": "3eox2KvvgYVaEvbH6GhSXY8CVpXsZFoCoX3m4peiP8FYAZWErs6NUhSjJpXKeTgdS1CtEAFo8xgvCnnTArEmRbSx",
  "key14": "54xsWyNG7XDu86GQ5CfFSHeJYCrLUdD5JMKALXCUFeLmxVtayKRntkqoCgAcetnyjLTs3vtHARReWh4wTY6sXC7h",
  "key15": "4xi3Wq4uo466u7k2Fu33pzVrSJbioS9HMBWcAzNhkeNscfWUgXf9uPZJCZv12bHS7XprarsAC9983Uj86YU7rSb6",
  "key16": "2kgR9VRrKbQvFLLeRDrmabHr9pDb19yYv1cicFRPeYbcYDpFu2jeUNGJ5cw2a2p7nME8EVvTiMV4G7qX7fVtAaZ2",
  "key17": "3rufQEEeVCGmaUK5rMDvhAv8vYD17MQqqGshaygsXBRmWbsbngfJBLLyWVNDBjRD26FMwan8zSvFBtxTAYfH5R9R",
  "key18": "38QctdP9X3FyoRvyFHGnP3uY8EcAE547qZ26m1V9NW2paBiQ2zSf46hCxKYsxe55Eu9VGR5gaaC7TEvu2RqWBFNx",
  "key19": "46CmmV8MfjC5ar6TFFTbqnUC6hPxwPxZQqYL9cTeoiqFjimF7fn9j4AYMPKDZ3BMqT25hSrDK6cRuNvZTbCQ1CA5",
  "key20": "5MCFymrG6Xm5i753Kp88gUTg2U5yPiiTzSDBkM1aC9qcn5tcWcZAAdRmNeAz1hqttHUrPVjzc3mVdVSMFfnPWS5W",
  "key21": "G9woQbDch1qjHUWsbnAExcnWB1wVATqNaHTKdUWsh3AVhrnnNNEU56E9UmkyuHvuGLTaQt3SxYAFX1spBxxhAAv",
  "key22": "fTngvw3sBWXMV2MoJPezT8i8MJPptvVQLHUzY8GXHX7tM3wcTWW9oy2m8Sd28YNau32ca7tRDBdCeGThGguXv95",
  "key23": "FDNDrXpNPvzCpTPSF5ou8Qs4FfMppod8WrYJohWNuxSS7Fa2NmD7VA2gqzM4jcVxKWMDk7MhoXUNJxeYB8QJFio",
  "key24": "2oEvBn5yEY92pnXwnzWX45JDwvWxBfshWiSdui7fuKwKMg5kgh9yC6vG35r5cemzrVNQfLJfsmgnKRAnmaU4UAmj",
  "key25": "5ZfKDXZWtJmS6abq4HcSt5R9NxiTLHrhfUm5PtT5CiN9RLw5LpGCdNd8smEu1vWt6Tw3ZUQPffifB6FoY3n9ETRu",
  "key26": "4uv1jfFXKx6UsGSyxP8MC4XNsWSd9mbwaeMv4qJ3JBWuhoK5VdfqZcNuZD4ppZBEChAhpfFghDHMjCf3vEspLgRp",
  "key27": "35hyFZq5hvp9TdFpNqJSqC85AuAN5EYabgze65wLcXFRQNs3FL58cBdp6T8GmgSuL48pSq83E8B3KFTCDGDQ8NHN",
  "key28": "3MAPvXMN8Nyv39C2TGACfE1BuRCFEEQUf1HhJUjJ1KAJKEGGv5xEQCDZDeAXhxXjSesxsNDwbpmabpQ2snFB6DPv"
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
