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
    "2cjkZqFPEaMpjJTrExX1HBPt2HKJXGicN7RFUbK4CgP29RLcZdCFyBiZmqLuGvjdcfMiGEDDTY7qxcpMg3rguCZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Gyduy5j6Rz4e9rNi6NnFBoFywd1tw8hJR9X5nHCKS9CKP7EqZBgagF72CbnYSVMXF5hPFFikKNPrHF1GDoNeu7",
  "key1": "5GFEy4bd4TFLkbCawxEEPxRN2mfKUbpwqUoc1yxe7CDJZiirJfmfQ7WUmSfrTbd9kfLqENotVADiVVdKvDosfRQY",
  "key2": "4voWFmHvjZvA8GVfCvGFQ2cdy5ATqwzAhcM9UBJ5CdFayWcqTJBzsHkfq5ApoWbubSd4NKrn9pQzfH88sDVEapE4",
  "key3": "5jJhbmAGojB3wtHvE7uuiW1y7TZnL7Pfzf4XLU2ToFTy3DXWfhiJoqxJzey2rhjowXZRSQTbnfgB5rUB9ZffWefr",
  "key4": "2Ug4phzAfCqWMYK3ScAv6qwLizKJuhPaF9AMDeHX2ZPw8LsSMisffGUkfYvQjhSdn7NtAZCjQr47mZrvkCz7uL21",
  "key5": "4vGXH9QBzLmQZQf5CB2TKZDdKZ6aJuUhEfsQzMMGWErDrdMsZwYicQXgnU1a8BhGbvrTVW5uANQNtyXN6yXJRmRT",
  "key6": "XSLpmimQPbR3p7PJDmza3uQU3iNwWdsZHPA1VjwsWBCWSDL877yvm44kee1UV4oN7jMkKFMNdk3DcsZeDQXLbEU",
  "key7": "rYT9o5E1S1k4fi6EhzPbYVJotswPFtiMSRoMMunB2cneL45PgyK8dtHpKiSojCXj8fq9pf6ZpBQPbRgmSEberaN",
  "key8": "5dHF1oPLMMeh846brV5ABsmqCDkKPhBy6EdG7Td4zSGAvYrqdpLgJPtSsDRTr4e6djGiRhq5JjZA16Ce4U1r125Q",
  "key9": "5iEVEQCmNEnhkWXwyE49V2mcd5H9Vxs28GnuQDz4PRf9M2MEA594e8nsiTtVzZubayNirDCeWafPimzAQsDmD2Ww",
  "key10": "62apYhQCjMRsHtMbEBzpBb5c9u1ewPguf4cUH9zYZjUHPuLYVZV4vgDi6GSE1d2h6vrTef4YWeNw6ELA5URm4jJh",
  "key11": "5D27AhUZQWgCPDof6PDgv9hmVMn33jxp67FMoaAUshBfiFL5kxrtLdbszcUJXVZBnz3R6eGJbaeGMRWUrA8mdvHT",
  "key12": "4hoeikQsYXb11Dha5hdZNzfToeSHjcUpNG7sdENwtT71v6Ms8Ga6eaPNeKpBUdkjes81HNWBufB2T1JmKXrUhZf6",
  "key13": "2nsLKrv5cMEANf279zvBeS1LExD3aer3yKBkA7sX3FSjgGgGTCy48xkjurbx7NsmZAK2DziKDki6gayBdj5FfwJ2",
  "key14": "37V3KdGV5TcwWi6enTmy4vHpmc7zzDmyZNcUGmKkkFg8CzZ3hMFNBdd9yP41CVQ4WQKvBAYVtHojjYJJBR24pzdE",
  "key15": "5QZ9NbgwJkfnZjWUWLMY7BAFJUWBQV2UMYQZVH6aXuWZchTFDaViFXGZ1CV86Z4TfQybGiTsq4WPANTQ8piEbDb4",
  "key16": "4RYsxwKPw8zRwoGrYizuk6nm2RNTRXmS2F7PxJf24KUU6Y8MzKNvM8JYFjRPsk5tpGagw5sUdntUUuFwhxUbxTUR",
  "key17": "2qrXrhj8cGUkQG1pT7qpPU6ng9bYSDLvkqbKZTZoqf7LJq3TXR5U2TVnhZBKZRk3hMF2xQsn2Pbjp5kZQGYUypju",
  "key18": "3dgFapB9MiJ3vvuPngx9nRh1ooBUSKc55BHPXbCWuR2mdGBBcsCZma9bFnmK9MAkKPb3Eb2pj5GTG8JzEn6WoJVg",
  "key19": "2GJrccqqzSBXyXwKMtUNLbdoitWsZKjhEWawjxXnxdKUVVSbBkZgoEjcW8XyrMu4jfqafGXQht1ZanfmxxRBa25B",
  "key20": "62KnxB4J6Hv4V9PWU4Rqsr6DDSPQ7Bm2KpXgZSwm8wnsNeKQ5FCkajquHpoRpRzzb85oeeEstjRVmmEtCi4YcoTq",
  "key21": "2d6nZifbWvH6s115CkZAGHgiiYD3p6j3Eh1BJoPnwcTbzyi9JgB8TfiKTH5aaKdYK1ddASiu7aBtLxSpQQhXKVeV",
  "key22": "NMwQcxryz8GjXxA98b6AvzRYBiq2i2w4hJau3jSRpzJEhkbDZPv9Fdqoh94rYB49rtWx97VJfSUUSDtXhFNqRz4",
  "key23": "3AthisFgdu3m1A3WeTEs9dbRMSCJtCzid8tNqjM8mJY7cpLkzeyjNxBeALq3TdeHWrJc6MfA6vWtjkNLFbJxw9W2",
  "key24": "2XoK4LM37yWygMMyU1ZNFao4PpcAzeXLRNT3mWHmHdrD44RoAeiDoGYFRR7vX9ddcq8raYm4kyWUCxtuyjUmMSVr",
  "key25": "41wvNRgDj2w4kQaoqH9UkAWy2SxwzsCDjZ6CbrppMbjysMsP61cCFMVDR6Zfb2FZjXy3qTysxrritxDtM2HN6GMX",
  "key26": "s4R4tfgF1T7jiAyb5ztiDWxMx9a5Ae4SHQG6h9HDg7i5e9wG5U7f3tCYs7Ypzvb1KfxE64GJ4SVum2yL48aJKQM",
  "key27": "hkrSt1yw5cYcUMs1UnV7xoFUFa16fJJpipjiiLE3vDeUCzQ2P3UAxBYdP9Rf7CZbodk2ySkBse7gALyMheCY81H",
  "key28": "55uhku2cWeMTTVzfChrmyB2tGEB25K7zwz79UD3tqS4HFEbjzZvfSQ25jwF1WKfNBH7KkKuBZPff3rZE1crUsDRE",
  "key29": "37wfPfzQ8pX1pQhdTzpDuZmZmZXqqTqa3aaXs9UmLxRFffG57JRFQY7APZh3ZZ3UUXb58JtdnyigkNQFhrhtKn3h",
  "key30": "6outw21wHVQLprkavb4gjqR3vikZj9DnF7MAVFgipQTQMpa9bhtuDqCZTVDX5132EJTPQbQRnoiXQpVSjhtV2LS",
  "key31": "5FVNkJgp6YoenKzku6cmpkN9EPUWX8dwm4DZVQL1p4puSGegkaSw7rgsM137GFVPtfADTwCJ27Qn6Rsvi3jRKbjK",
  "key32": "4FxBcv6gboGT47wPosgTDQiMvVrY5nzUaP4T2SXuKJ35y3rgsMC2eSyKYxgHtrnWb4byqg7er6UJrT2TUmT5KRqe",
  "key33": "aEqUq495cFkbrmE5dMsdGcyvpaxo8m4jYCLhd6LhAiy4FqCH44zztyYd4nrg1WPyn6XzzfQUEkmtju8MBYRoqQf",
  "key34": "4UbpKKMmX9deSL8kzm6J66yGFJgfpvkrx8Fouf14cBCkiT6eYtwihUBdFt2jq7tQcr3hrx5i8YMbpWTf1T5pn25N",
  "key35": "EpVtCpULqXzEENGr6i2ozj34gdSDaixSroeAVBpuJoQ7PxtPUVqxoXp65JZ1h3hkcG5Lvp8srgm9PWNUkxvHAt5",
  "key36": "2SY4kyfs8LCE958aGrnG5LVK7VSyXN7o1TZyRqKHAfUWXkogYP2CXnQzwnZYsxHd1uDAKgLvmw9HigCyKT91aQ66",
  "key37": "2pTh6LT7UcgBWr9PTnGL446fsQr9PYE2gBpqCu5YkpoVrAR8UJ2Lg7VdiLTn3jWVYjMYJnduGXgSBE3J46VxYs1L",
  "key38": "2V19CDHA8in6a19YJQVQjZLmz17A6QqSLyqTxnSYxwccjB2M5t7tNvhXBkp7Jwt1YaVADHj3C4J96W2QkLMVYvQA",
  "key39": "Mgm8dch4mq4i4vFgJxi2jTNNtqzJec5oeAF3F449g8oVKe7uEgJQUkbDGpmQZeXS3982yoA7FmFM7jnF7uSFJcw",
  "key40": "3p8NPwLsA7BPGLKoSBHrbuFHSVpHbYteUEz7uyL7SUozojoWA9DdL1UEm9RWRgf4oxr3MCV8tZGnf2Gq5oQBJ1HU"
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
