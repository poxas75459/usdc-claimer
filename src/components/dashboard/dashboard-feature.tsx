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
    "3orfmoNDDaPWxKne3CeWUZZQthAmgxMSeAaj7whUafWdMmt4bwjiPtmxsMvGArcYzQY15j7e8DCQz6FYKLhJNXtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftNr1XzAVVwQ4pfK3vjf3G4zXBV1hM8veibGYKsJshiwTjypGC96TGNqeZ6TqYPVrvDp5hecVn4akc8ewuVYZfR",
  "key1": "4BA5pnobrBxB3UeeipDuySSjY5x6BNGS5hZenysyc4PVrfU9ajMxQQZdWRyuQTKRzVENMCJTx11d2qrWN2S9h69Z",
  "key2": "5o6TYAzWJvpBEu16zZTJohKsTksorviSK1qptm15vHF1dFU3ecR1VbhfwG7xkbFLcV5MdbE3mAqvzQeX1gjHebbh",
  "key3": "5pDZWJANTsdPXs92NWVYRRUFh67XPAn4u7J28HNZ7LcHURRgck5Y4nz37AcDYvyjNSPHkxeCkoqm79pCyWnacNAd",
  "key4": "cjC2cdgmnL7zEJa9mZmiBgEeqS3XmK1wYNmV63mxuiQ3hLWDWMHebr531AK5KaVCpHskeDiYWyd6yLfQChgKx2y",
  "key5": "6151uXq1YoosJDUF6PXBRZDhZsdVsRJMwFCsG2TmDURNisbWvNnNvXShR3ae8VVVRv1hZhMSVoY1QuUZgdpGymiR",
  "key6": "3gzF7k5hAzjxaLLZ1rHpxv2695fxA1KTagiQFaZpwesxSmSN77LUTaDkJqfViPgFkcUx6QSBEfXWgQwAV9cabNTv",
  "key7": "2msdfEgsiW6UxLZZuC5R1Mxw3LhJHVGxmiiGStCyLjw9YXAXouWhmcPiVULKBrSSVf3DjdHLNK37n2wsRrggKMED",
  "key8": "tiB2zYSSincBg5WUBXrfFKaom8FNKikVn74ipkN7QnPS1gvgu54bprChAV1GDfGWFgx5p3xHVVXiPvUD4fqRCe5",
  "key9": "4ukUJvVVoYAKYukV2qNQfg477P8qDEBbzPSJSRWMzvn4EPvek6fopXbb48pHMCRYzXju4s9Ni5YSCzt2Pysz3czM",
  "key10": "Hd9SGZfabeLVQrhhfkkXWPke9b2W7Lbjd1nRGXqCPGWUMapyrz6JnVMj5Ljdt1H5ynuHqQjkmiZ2ybpVS3Jg6vm",
  "key11": "5FzQN2uu6GZnzhMdoTW7aEYGrWKXpgoD52UFQ6SqFiEaHZ5tEKZfmhZnPejkmZrB5bMyL9VbeBB4dzsaurkTkRfu",
  "key12": "389pJXMGwJVUXKYFdpwwohQMnvAvKj5vQKGNcKtNmyMYM6rcdqc7TgnMVorpqD5Q3GebaVsuMm8ivoKrMqobyWbE",
  "key13": "5pEE55nUvyzojK2snm4sBUrFc1mewoX5NA1hWrB7N9Lvz4q9AxyNgsorv2swYK9Frd8ruYQ3nM7q1MwXv84MHdQM",
  "key14": "51j9BSZHPbER7H1nsTEUxnWr4kiUCXhs9axkh8X2WFHiZuLUT72MGoh6vNC3QRuKm2rgx6cfp71AJvnEWGBT3CUv",
  "key15": "3fyXEiYmxxQwnAmNL9gmHrE4TpWDhUFRjyNoJe96v9rL46HbA2oYX4sG7vgU51Ts5Dj1QZ68SC1UfV1GYjy6YAFg",
  "key16": "b5xh2eN7tCg6zZUPZYxACwjkfWf3ZmpkWkBxe4BJnsxTpNBridNZwFkxvbnzHV3itkAqi3nw3zCqdi6KCwDTxeQ",
  "key17": "23T8bDgmMPXVNzyKy7vCXeaNMofgtQ9nkA2Zo8cYf5zSNUezfUS1oQgNayJV1UmnEUksBG55SxwDGePqQZpBXS8P",
  "key18": "4jx7YT2XzfNzuGcuisJJjEts6FjybrfVyXUQEPersQNCF12MRUb5JdgreqWWwKTACNc4DEDYV6c91XBxKUCE1N8d",
  "key19": "53HG3rAwqWhaJEVidvu8ZyxrZnTgqyTd5BWjfXDeEaWoSsabvg9nimMhryGksviD6RnawgScSZC5eREHbPr31hDH",
  "key20": "28qToynwjR5dtPJJPGuNazRUMb4qUA5CuqSjnHqxtFGfuZ6jUxruNBmMLD3dxXqdsdaAzqYHGeTAUXDebVFfHv59",
  "key21": "fBmzX52HTkvqBDpi3qevzhiRsXPgshMU2zFbHKFA5hFh4DQ5JexGpqTtgQB6qr6XtZTES8rbk6Pe9ehNb27kZqb",
  "key22": "3USRuWEnQwXz4zqzte5dmKLyy88PnEp1hJrhL8nhFFx7Ha7ib8zp3gfvZsQTGshud82AFmhqe1hb5MHf4MGgqyjk",
  "key23": "2ocZ2YNfTVcWpmvttJi8x1qpSDijCenAVoTE8YCPrZBJuNNscXpVn23JoJUaJyAGVV9MLHFGAu1GGcwytGtpHycn",
  "key24": "XnhK2q2Kn2sxZd7p6yV8vD99qh5DSyXBToevVpxkGQZJVUFa9E8V6WBFDFciAD1BTFgj2JAg3Xzj9MPzaALExGx",
  "key25": "4TZiMgpszGj9w8K4UGXByNT4idykftEtmxDDWAy8hbsPDWbYSPzm4X6qGF9gvX1aLzppmbAxfGpn4CuemYznGZ23",
  "key26": "oBWjLY6a8U4oP9714B5rwfQiLKkkKknNQUsNLHSfBpkLGaab6naGiYYmK57eKbpgdEymk9g8XtL1i2xdpWCkr1e",
  "key27": "3ocVAJL1NjgQ7ekfFRCJetyxTp3HPGpE2wM7vhktyP46Wh9jUD1QWr6SV3nYHuwyVghSDKxauVPw397M4vU3MpuC",
  "key28": "uV2F4h2uqjZsFK2txHeyEpQJGUFF2Td2GKPazbzrbPa9xQTAZK7E6FKiURTXxuANmnn7n4xcpUYTiwzAfajuBp9",
  "key29": "5Ae1MsjTgp3UTnKhphSi58zoMGdn1HCeZwMBQVDV5rvd9AD1joGG9FSZMQYpeDxi5qUnodT7zmmrf9qRptHVTtxN",
  "key30": "3QGTsVqcn1b4mK6wGSmHzqDMUnhUPSMB3CZT1qZGHX24SC7Q7aWuSRTy7tgwu9FQcreMoFGicc1rqgpXDL6VAZDM",
  "key31": "4gdRbTw3ieHGQeHTRYCMb35yAyqd9idF96aUNEjeTWikaqdBBLjuBr47AcNDNBiuRFk3W1RMrFvfPryEfsMMbxE4",
  "key32": "3WBoJw79jzak2qanLjdDxGxf8QNB6MboRynJxPADgAa5FWa1SoHgVoMmyuRLQcWBiJRJ97LUuvqfTiMHnDfZChzE",
  "key33": "3MRV9SPw339FCVKVUHDwR16d4hhrj4zp4qmSHa54SbdY8ZsimNG14WaDYMabwpyAMHnwGUp6CWFsgsn9NGDrdBZw",
  "key34": "5wFPEBwczVNgDkX8Ekmqz3zgUJFDWzpU4UkHkop1shSFj44PtEfh2D3rKTUfU1s7yU55fgErp8BPfFwNMFnocJxj",
  "key35": "2kFkv97wfkb652mppPtuo655boFu6FgDjVTs4K91DV25QGfaBqyx74nHXEkobKLhMRU9EjFaMHDr95izZXhVb6YS",
  "key36": "2QbTkBLDZHLFtY8f3rZ8Em29paRqjZbh5kKLhHnhPP5mCGxTgqefkm8E5vNJ6oo6PWoV63uef2aMSKNWYtYvhfH3"
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
