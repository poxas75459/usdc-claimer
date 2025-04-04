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
    "Ed3A89UiCGAoGHQENKHdbNQcdDwDdZKkQyNMbnhonZZauYwGi4xmPWXzH2wdFT4Bgu2aoyUcPnxz7SY16tesPH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YqZECRkVyfqnaADE82GxootrSG6qEjbi2y61CknHhY6DnGoqytJKhk5y9BdcWZAWNdcmFmbQuYtF3yoFhTTUiAp",
  "key1": "YEWgKbkSDnKv7FAahkRNsuy6HC8nLaNmkCenYB7TjmPZB1A5mjc8m7vEv5ZuCEGXW7qjmTRg1mDAUZy1Cw5jZ3Z",
  "key2": "5Qjq9EfBatfcCW84AUmhWSjhBNYh9kif3GL6XQhhp3Ji75AUAw4Hm279F8nsYNa9ppx4PpbYFtjyq51tNMvj2bcw",
  "key3": "3x31g14QMTrgbTpRNZ189F4pYektRNptHq7bLoMPX1RgEXGjamT1ByyDdJRLJix2QWEkJ2NsWybkJ8Ugf9rfQtSm",
  "key4": "3CM47bm4362JcnasKXxVZKGjCbZRr8dJqgQiByTqz4z5cGa9TikKW3fm9fiKimMamdc5DujXytJp2HJCdKvFrYwa",
  "key5": "EjfpZ6qmmJA5UkpBdGxT2EH7JQJnAGzE9WiwDk8duzbcyP4HcfKGmRtm8euUw4Wp9amYytHhaX92z5kSPRYeVtc",
  "key6": "2Fi2n1TTFrTKgmrxn7Wj1ShkyKPAC5177gY4Uf22Ga5ooPJLmbtZDfuk8BCNngGCciHnN4YNpp6g94kKJV9VRTtY",
  "key7": "58NkSmb47abwQTJPybqVtggywN1jaUejtzH3FKzUyqqDTQj6h6FGqYYa9TBAqTyFT9aCkWstxFzTwnT7AFJhSHmM",
  "key8": "5G1CdHwkW4S9PAQ4B2EdyAohTqCT1jqycE2Pg2vpFqK2DK4W9DtigpPQtH54wmUZ26TnRQxsWLh14EDXeZAdvg8q",
  "key9": "4bccp3y5v3sGr5Q3yNc265RXuQvBqnuiWXm1Dp4tPNQtoyqxx9G7yykP5ShKAERRGCdfCrDmvRg1tWLLcru8EDcu",
  "key10": "3T8ZoU4YSePJrgrD16EuDTYnJVSWQrYg2nbRGGHHcy2qreo4tBu811ajmJfed7qLbz5vprP8DfR89GCT4eGLoi8C",
  "key11": "2HhbngbwfWTzGa2ikhQpqNT83wsino58AR8RLj9JtRErUdxT42y4YaRzEtGcZuUvETsNqXPsZsKRuCzaiuygFQxv",
  "key12": "5WbkqiMuKBGghU1zVZBZYDWUdW8Kg56KaFRybxNkz6bK2BGUNS3gYMPRhqHAUsNb5NXGjVThoaToXqWSD1Nau5ks",
  "key13": "2UbGa1WPXNfawfDsPCF8LUGmRQ9HAyXosGHMLPvuxLWeB6f7R41tCh2f1JAbQBzPRxyqJm7taEGkhZsM7Jgnsr3T",
  "key14": "5s118GbkQEdBJJhDnWPxKjf2HCmVe4HyCzHgnRmEnvMHGsjFX2tjZKMA7ySXMVRdxRgxNqHXKXSsnYmWm6xSW32x",
  "key15": "h8ZkUYSEiHXt4Ly7m6sGsyXcJCugMEhQZZD8MeNaFhn2SVakSZgdNaBaNJKy86e3Dkcxw5MF6WafLKdRLsKhx8H",
  "key16": "5yDz8zHysunKPLGronfRpzzd4Fd2qkNYBppFmK9QLQumMe11x9aNLWvLK94LQEWTnQqooNfYf525mKt2mQUFJHXp",
  "key17": "2ocSSd1WQTVrTSA4kD3AUCc1Na7pWKszrnRyAkbKcySerAh8XCyZ719i4g7JP28uRX5YEXvQJWtqn3s9RNAxVrky",
  "key18": "3DKygAYnnrUBNPP3STyVkbHRDmA7bXeCo34PzSENnhymdq8eBmov5oW59gRH2y9c72L1hDaBvgk7NtdqS8QwEkg6",
  "key19": "YqDXBEHLQkjsyYKoFD1BpfdA4659VgjSXZdCvrsXvUkoeU4xQaJrvxATx2CM23yzWtfpLhugXBfG2rwppTcT9CD",
  "key20": "4Z2mcuzXaRyZpBxkph3iaVi49jXG8xhjnWgV99yMobgkZfLs4Jme7tMyPot29Z2LdhCnVPrQ97q8isx5pWg1S71d",
  "key21": "3b2R7PVrFL1LyE2ToycbQ1L3WUGG5ukRjwpMrnRkHNV9HWQ6uKv9KVEQ1hfMRjvz9eyP6sm8rKB23LpxudLStHDS",
  "key22": "2hz1cUA8BGu77VHzUZgPbuGpxRD1ttdAjGu25M649Ls5joZGDgU4139wp5hMUktFsEPix3onxyyA6RtxsjjPBdbr",
  "key23": "3hpZLyt9N8FHgdznzy2QU3QVf3yqitpC1BfPUcpFWq4nyNyynGFYgG8hh5ToyEoTRSBqT8uPjJNSZsZHe8j1BdmX",
  "key24": "4PgohCW3PtpWMUJUpvag7kr4XZDtoAPtw5FE5YYAoUbswMhXb4Cyaoifx8XFQDD9SJ2kM8RsStEpc3QfHCSY3j8r",
  "key25": "4doyhJUtBKjZqZdsHeQJjsxxqUFEXPYeMBvbJaNcJVrevKcsbnisZSrvh87gisKsWqf3c9LJfLNVYdgskkBNGeg5",
  "key26": "2AJK3RGKnd51VHSXEb2FDEsrQhxe7oSai99KePpyk1199zfMG4NrBeSfu9i6g8QEQ14mUSbJfEtJqMv4pZ7pHppt",
  "key27": "36kUxh5ayQ4ie4DZhFpWueiPiVyxySjMqh7czj818vaLU3onFbH3JieqGU4UWbPtAMReHw2eQYci2xkVdT8M4LAu",
  "key28": "5pt7L7rq363t9McipSJ9hRovAzaSJzLAxThPoW2hB2BbUNBddvP5CRyUprrPrRSmMnedCsUzecyfGuz3MiRnDvQU",
  "key29": "5nD3vVNT3CmfAGFaby3Gpebe5JX9QUijSqHk16LZZ1XhkoL7J8Jyci5oi6YZmYVxHKPtMEHVm8g8rkfYBP7u1iHc",
  "key30": "2wxRd73YKgYTHxfcUwnMRroy5hQ1wXALKoWmAw6ASuh8YcJffPaER5xiFQ4TgrB9JHauWSxgPRrrbAoHXu34bbGe",
  "key31": "2V2uRm8imfBN7Wt4KZ1HAq1UpYLKyTBYWDTJvZG12aG3HUSfDMYn1xWXTShHK8MYzwPoY8LZwc17ws7FT1nURAVw"
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
