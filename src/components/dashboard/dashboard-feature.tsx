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
    "TPn6p6ku3j9TCWZiUHAAGjY89hT1CeUHxytS5L31RLY28F3TiAXkiPk4z9Spg367ox1ySP2zfCiFDLifTRef4VF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "njarxEVmbLWxbwBS5f9zycKFFT8dSp59mLZK7cnmRTtsk2Xdd2aNt629By3eC4ymPKTrgxKSRYUWbvfAF55DUMA",
  "key1": "5oH7Wxo1vBa3AzK9wW1sWTKfWqWUuDVNixnZuKMDK9wAC5N8YPP6QNRqSoB45BbQkTXcWbDw2hbiu6rfZf255Fk1",
  "key2": "3MyZL3c69kAkcvLEfKYj58YskDh6tyCr99fbFGGBK5WGFNQbfGimbgq5RNqjQdS4rdeuSZ6zTJS4XLNFWpDaE4qt",
  "key3": "5ewrTVGNWmwWvQAdcgaHy8cWXgkYRSJTNQ2T95DSb8TTSey9AbLm8Rv7oQzmUAHCmoUbsDsLALUQQ3RzAwmPwi3E",
  "key4": "4VXT9xfVN1oxAt6c7je45g5QS3GPqFpXFPkAPc2GsG8nbjGrKU2ArmVVZFHc9xV8AyoWxzVA3MtjzwxJ7rufxo6F",
  "key5": "2ro3bezVRNzQKUoBPNs6uWRGrR1JoiZoJ8UDjAmegByimiHK4WQcpjq2pqKRSGsjSdrAy5gUd6hMhy2domg6yEPc",
  "key6": "5HNw89nPQSJECSY8j29FcnTEdVze2LbMsTA8EMKtTbu8s7HTxdTJJ9eAC3Wk3J7LLszWjUvQb3cPZepff3U1UYZU",
  "key7": "eQ8ABmaC2SeXNyniWb43tHYJx5KwHcHcDERVDbR6peA9iDVG3ppkgVeNqd6nHsRzBtF9oFVKJfcH5bALQaSJsTo",
  "key8": "62Dz9mmkmuJYrwGKotRLKK3maPaSHpDFteACR52ckjaxTcvicDJKevsaJ51iWNpq2tXVJfHd9L6sa8fM7qW1GJqX",
  "key9": "5q2jD4Sf8DCJ5iFzWgYnScK1Xfm8xidExs5EsD798UkkK6qzbGx5quGX3PvB9PW5yQBJr6h2yL3YVtYVY5hgXsoM",
  "key10": "2hZoKMzqkxendVKt1ohMs7A3i3P2yHvWtyRVKZwzHFeZUDcCsJVdr6nGmk9qxSALQQK1SG1n69u6NjJtiULib2rV",
  "key11": "5eMkHCKM1XXKm1yTc8LhLDYiewXFpzsQZUTYoZsX8WDo3YT4bhFkRdCksETa1Khzdr5Nx9r7GpzADjc4pXJXqDTx",
  "key12": "2Pd56yR5EjJGREtTNtR5CgTa4Zsx9E91PaiTDs6oLxWNdLczXRBrE3bozg2Koo1o28WnbLtYUfWLf2QZurC3BCjq",
  "key13": "55fRqDhJP4AKjoJpX9wryyFp72hi6vMf1rjooU9WPC9Rig7XQN8JUGWuFURiJ3wLubUny1khWSsQ7ekrKa4byMfZ",
  "key14": "2ZzzQM5SWKv4no7AgD6i14uxL5DCbDNyrydUEBRwKEGKyL3yAW9qSvzn3vfMUGdgqMY6DJzHtty4aqoHvLsUofHt",
  "key15": "55ZM2ZsoSta6tfycua7PZTn8KNgGDSwGmoLjjGcZcpGk6CbVQ3rR3pZdn1gCttffk6MW5pqr8poFHc2qQUNLo9Ts",
  "key16": "3B3LYRRN66TTgRDCc5rNhAZHGUHVGwnvpsg48vNZSrsKEMNt4XK3pJ4woawpQW2bufqxbNg3zoQwQenjRV5Aw9bW",
  "key17": "5bXDMkdNujfXo1BQqEBHJtrQE31cp1PvqcfiepxHWWEMsCPMup6LXj5xKgLc1NWLczitENZ3z46tB83mkQJqfyhB",
  "key18": "5gbknUczQusmzvxqCGcX6HVsCpFrTAntmcGc9YoAp67XQPY7sa7zcCRrYDGGd8vK4UUzk5x1BHRRMT37ettP3NWv",
  "key19": "Dw9JerRA6e4yYcRVDJgAYdscu56sJhiQdz8uNFMhWG57PvDwpbaiF3oswSYhovBmgwZkJW7C7TPwtFZHao2pdQV",
  "key20": "McJNY17bXajKwBHVZkizYmR3qeqF7QvuMgvH181hXg8NHx8GVoBzaAXL4iWUnx4p3M3wKGPXgRGqtF3ngpMJBen",
  "key21": "5q8gxAPhA4keKcRPQj5D7ejLFcnJPTgFVjhSeaYQr2A82BAL7gyWa2Trafj23yRy8NoTc9JpuqKyTKZ5jB4spBy2",
  "key22": "5eu9CjiDT4AZuh1ogbTuk9a6Qm5gPrAGapo2VWZT8NqBzARVXJxGD2m5v6J4mUB43YSJmGwnnjVWQrPy4J5pNpYH",
  "key23": "2Uzdniqb2By78SRwEiJ9Ht9UHpDFjWr6b37VVmcuuiGf2wRmgcwNJpRwYt4f5okBtkNpPaGuyXGnVbnsJEE2SvTy",
  "key24": "3QR61ApPgGZJarPFVZN25znsfGrrYZY1qstyhfKUEDktD33MF8FmER378ceGcTLUWVnFSf6UVZPe7hinb1rKR5QS",
  "key25": "2V5JiEAuiMKX9nm5rFZK64Ft7PoveoqUaSaxvVQKHichKkDfp2bkHnDMfNa7tBsWqkiKFMjCGUc1csuwXVHCopFt",
  "key26": "3Ye1zk14fWkexhK4hMw65uWTxiP9doWUtB6xyRquBUpAoMtHTdNPxTtxxPtq4Qk85iuk9HBCSsWeWPLCE82Z5zLC",
  "key27": "4k1ox6CzvwHFdGiJrQiDQKjHniqMzdwQLNTmLZJoPqkxpPjUm2WUP88MRCvrusNfsU1qH75d87miehgZqe7UxVaC",
  "key28": "xstoPy6zi1YhapazM583xHuHDehtL1H9nsiy7oqwuJUsNHRnYFXEbqnjZpQNqGtvDmQFrYYyHcqSqky2Qj9q3zD",
  "key29": "22kniinXnAJ2ZKUn1A9GPVZPjnR7a9WCnN6EBF4qh4WDRQYernwDWqcpJNTzxoF7bWaz47W4irDTjjT17Jp9F6t9",
  "key30": "63nF4kGR9iCLVoBSR69qXwzcspJoXsEr77U3Eq1Wvg992LnJedMYwfvQn24ipCftPGb8yCY3awNPB3DJHEyMqcVL",
  "key31": "2nxc7cmbgmB7NpWigkJkGLooXXXmEA5c9QnjqoRsXKDi2YqdUnBGMnJhncXL6mSKXGnWdUsBYx87j7VLcyo1ve7q",
  "key32": "4izfh7GhYdyi7rm4SgRn2i6pVgy6wRtD9sS3SAJXtEBJBNL85niFU5cbn8HCyHX6y6W9gfZyrojvy4zEaSk64YqH",
  "key33": "3NQXKVWBkyi8akyn5yoLJvSEt5BpheA1zRPF9hMRW1JBF2k64RYkVLBAAZaBZbQdjdACGPigXBHhTecsQHDXBSFE",
  "key34": "544qRPRJYnHrvrwajXop7LaDbx3MvzGrsTKGkUxCHdaFbWHjNWaWCiNgVepmP5kxeqYEnzQsoQzx2DJ82eHkkmyc",
  "key35": "p2ZEprSzGpnfdSMGw2C6pdoHk7jFtBcBmmGjLdvdjXyhjcUenupADKzBenYcrrg8S4bk4QN9Zg79KXrL7KYx6Hz",
  "key36": "5eHy4tJjsJDdbNqTDc7NNKv2dq1CCwqcqFhMJqsGbKSLp46gCeiZXyhV2FAoCk9cyCPrq8C5sbWNN5FL4mJVfzyz",
  "key37": "dXoKCDP7iCo5vVp2J4bh5seAEj4MEKaLQBFhHFauPXSFyp2zWk7agpN75rV3rRgAwEoQCimv2u8Ghkc6fQRFotw",
  "key38": "BtbquaNVfEzb6abrkZNkRMS68VCUDtkGmic7ZrHR3fjfM4bmhomcscBoZ9f8KgdpZyXBuH5akhhA52Bkt8Lbwiu",
  "key39": "3aK4qD8vNrWGxQWfxZTcM1DmVAWkrfs2vH4wdKw95qUg3SzjwZjyxSxsoHjZQW3Hhnn69Y9ScdiPotb9Qr2TgM5Z",
  "key40": "2cQvLXMXLJUbjwgR9cDbC9ow7Hfs6QdUQn1DyHZk8NC4G89FsxesyfXUf6TrqorwSMvEjJRi6wEA3VF7S8bkR1fc",
  "key41": "GTsBkNs4An3a4aWJeWU8C1JmhjFQfD38ZBNrnvbCbcr21VUnjNM1Qh2v8mBwHuJWGp6cmfQmzJNjGNYsAF6Wsrr"
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
