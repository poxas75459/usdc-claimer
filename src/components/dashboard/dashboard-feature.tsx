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
    "4LZ1hpxQeEdwMX7rUSofJFDmhPvMfSY13z3VzXXcfSXULtBJg2TNcQtM22E5cDTX2XKwGewPjXcJ9fCgEanzAVDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hgv3gXKbQSNrG5BqZaZqXsoJ25Hjns8WwZBs8ecsJe9HQN582V8eS72bBRSnn74mSKVdd5Gx9ssYhg7jsKEKF53",
  "key1": "KUrSDD4Tx33Z8hkZTETdYZCzrxieyhJoeSh3Tiukcq69tbnxRk6HRqf3uqQtdVEL7mqZUWXTR1WDjVRqwVzdrmi",
  "key2": "2Wwz8snX8CmovGjy4A8EHwmakse42G5B94SD7egQeYf5CnsFM2VobGnxAhayYgFnVa7xduLfxhMkQc5nGHHdnovv",
  "key3": "2VrtTVoZjHeDDFLzrecSqh6Kmz3LAQkBXJMFh5szin4FCpiKxkwuimzNPDggJtkp1X9gzeABWzdWzvCibFgCoyjE",
  "key4": "36gd6xUnJk5iLWbTfZ1A5T47jAvXefedETGLZUsvTiVGauEzVi9jmjBCGjJxvp5wCCn5yGSKAkYLeowcu8iNkA3P",
  "key5": "UBjiGpDDPzue3M51L3zJoumNMFuH9g44fVLzE46SUgBynLa6jd17rQ68kqfhDeueYGk2YtXJisWgBei5J3VzYex",
  "key6": "3Hxq7xb8Pspf8GKpW2KmZysdodaFDcPdQevb9iMpfd9cdsL9X3eoSFs99uyoLrwPnFnh88SiNuo2eynUPLw7Fxsx",
  "key7": "4ZWxN9GxCuMw1gWVMKvbUsaG3hgrVkjoi3PgrtCqxhYPcv7kwFMTKz6ykZTBbNs528UgH3k68uBTpFtM3hXth6LZ",
  "key8": "2iRhNobyvVLURW3d2igMLDvuPoEWoJuaxhbjVDS22WG1KQ9Pn9HXJuH7apbzWpgQk6HacCs9hrLZ6dYELcrY9cmQ",
  "key9": "4S5TPfpwBLohwVZbmsyLTYWhBT9Y31SdWQ812CqJy5U8FkbawveSB7vHVAy92gb89y3Y7dHiWQyptN6KEMkrZJ2Z",
  "key10": "5ZjTfLXaLfXtLmVzjRx7uZpvG7RCkcWCdQu382ZQWTtt5Tb14ywQRBtNu7mQRbaZyXKgzLqq7EGAJpPRzqdbzefw",
  "key11": "4ydD1gUEssSNcyWYQaN4biSHQC3WvP1cmspCbT2MchuNHWet9jpv9suDEAA2n1LuGjySEAV4Dj4g5tqbeComyXva",
  "key12": "3QLRoqSWLY2kZEbDsawdHeqsxe3cLgYUV7swQQyWX6ZmpY4KtY55ofwSLzvgv3r4Rz2JkgHpm5Q33SqQeJtiqWXz",
  "key13": "3CByd6gsKrAHFtVvP243b3v2zhsPaDenC9kEYU1toK3DrQ11BSgYiapFCeLNGnnrXDURLPCfBFVBMHjQLMT1dQ1p",
  "key14": "5pSUgchAU33BL9ycG3r4Edvr1okpR4SmZKbY6Yf4U5LBQCLrpM6G3rUuwbMZYu6Wzb1zSn6KrY8QjezBsvdhJS9G",
  "key15": "2kie2sQmFiS9vst9M9xbchkpgHsfJUGqAKD7s2SHDn2DojgqKqYLQ6UnqK86bbP3o8hnLxZwLEgxhKoaP1zEKgst",
  "key16": "2f23RisLrrri3SZvhFZv2zYVHEjdhaY1iaZKnuJvbzPU1JYfzsENGvRBpupZxihDyUqt2FYMqKggmUDNfL9qK34b",
  "key17": "3fr3bb1R97qtfRRHDRmsob2qLnJZCr5vdoHrofmUbmzucKG1EXXGUtz3tPc2abcKuwpqqtQVSyFVWUi2ubCbwSy3",
  "key18": "yMTWYcU2AZSTNQmvn6T7ZDXDqrAHZ7CRf9UpviSYgyLhUB8n8p2eTQYbKuBbFc29nP59JcAkyQiKQzwutqvmwAg",
  "key19": "5JE6zi3ERkoe3Cojzfrbv8aapHEyrdJjeTinhuvpfkLHjhmsK3BrEVRE7x3QiWgC1XsDJLSx8yX9y6mtKAAA87VN",
  "key20": "5zFCHgJaCF6EDmsRWt3Kem7ZhV2zRiu8ABqZiduQS61cXD79iAtjiikLJf1G9G5X4QygFeTbU4ReuR72MLZ1hSem",
  "key21": "3jQQ1xnzrDsNwoUDzpj2y1rdngoiZJw3GbPi3NoSFsDeMpDhg6EEt1ce8yLRy6jeAM2T75sbDDzYgDHNghH6kHqP",
  "key22": "5WdymFGTPAHiScWPeoFCveUSpqBhQiiKpBWh4oi3bTHag1xBUZG1fyJuidpJDpiAQbaGoqFLTPyckYPxYo4sBQUm",
  "key23": "2ckevav2LH9jwcqQZPsPRAUwqh8DWtbDzEViY78QHcCaWeRgAYe1guVtv9x6RHJ5hMcKG4kxZqndeJtMzYudMTBB",
  "key24": "9kHJcABmtWpqRwLkc3wmJjPCEMCA7E33QfTJWkrKKR9xuvdyJdNaDiDCmCUbdDyd52ajcemtFXHkzsEddrV8Qy8",
  "key25": "3pomahvFtQJgEXme9uWWWiKAtmKgwGcaRK9cuzsaowq6CBmBqsUnpneQ4KDiaizCSv5P2yLUNsWixPgcmr2Ck8Eu",
  "key26": "5M9mL2MHjYTvKoD5BwARG2YaHhoVXM1ZtHHWuumMhVfrFnHGbN8pUcdD8sNfwGYkPrU87UTZVD4Zmx1tjtbdkh8f"
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
