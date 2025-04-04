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
    "66uAcrDom81zpUpLLbz416nneDV37SK3KYqcLaC1pjcdNHyCXZWQPn37FYAC29hR3gBBrLgWNFSaDEqdjo6We1a8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BbKM7mueLsgA45DtvHJUSkso1mm4mUMCAtGY3RgoRyTZHbpFcTeKtzk2yCp4XX11NJEburhQfD78nbadZBXHRg5",
  "key1": "5GVqcbn5wUBBXLaXkHCqoA1AtPdgeJckwDNAnMRmJ96MNf6BWCLoAaV2D5tG2571m56vTx2wnRy5VQXAvKd3tqb",
  "key2": "5DKqbswEPuLY83eAWTx7FHNFTFo2m9GM5KS2h81Cvwzi9qmE9ZZ7nwePMB8BgfQdhyBuoKewNm3NGjmi4NajwxoX",
  "key3": "5xDarHFpzrFE5o4o32jXa8izh58JD6zzAx8xrgdsFtqyxNJPEtbmph7P6YxYCL7zj17Vga8NStE3gpgWXGrHhod2",
  "key4": "4e5aJxfAoPphdTf1rzK1Pbo5bM4HLTwXCkTXpotLJ491xcmpdZNzuJZAiTXsWdkBxeQAJHoBBdTdGQT4XXFd3BJj",
  "key5": "5xBjGimMHxGW85s5EgtL2nMbtGU7WADTZW8wcFSyajkm7cRYTuuSSEQLKSyDduY4FJRgXe1ZEpFu6KiuT1fkyPe4",
  "key6": "DNsCyjzTZtJ7bMgizTcx8Z5VSBDaj7noPq9xBRbghSQuzeHHSnEDXt6USecAmBR3k8YndZALQWcKjqBQmbdnNNH",
  "key7": "4V8LMGreY7VrPAFsriG2miDSZ2HwWQhh5U78SLuLQfkJQo5Suungz5KAA7fqNDGYJrZzitavB7zViyrHWfd3EacX",
  "key8": "3K6dmK3bymGXHidCkeQrd5aJ1m6ftjrDW6VQ9vonZPzYhXnXcTdHNceysThWJXhUd9HmHB8dW9c5s435eus2pWzQ",
  "key9": "36KXe3kbbAxs54eQZMNzXAxojKgCJwefcNsv78VjJzYByarvAAqf1Fuibfw3BzLY6L3gMKBAQ7VRijcBp7G72LVq",
  "key10": "4i5kJ51nYKDTYdE7wUCLEuSXYbYtB2AzAK7e4xzVH8pA83ksfs75gEUtJCA8Qp9TKLXpii1seAb9onVFRhECpiYQ",
  "key11": "FW1HEZJiTG9WoSxvjNQgLcb8tycdEiFbTffRpBTr64mpMtz7aEEdm9igXGWiNKjVvnPEXc9Qj5ZpqEywsrLtwGM",
  "key12": "5UcuWcJt53X8QWqdKBxkfEM3P8c3cEqit8uU3oawqabVTNEvUJdGXJAzsfHapLQmFtyH2EgQKMEbpk4mcWfadJCa",
  "key13": "59g6awHjKtBG2wcFy1nDT1KjYsU58jxXvhKgAe3KnETp6VGy3kJrYfoFJQagCeGYffEsXc3eU97xR6gvfqU1zEuH",
  "key14": "4JTRiVhkTMka2yofNChjtLDXbapSENtdp9WvjAKkUhNXxnu1GFpWigYwPYsBPNv5BGYc5Npf4xExhWDuWGT38c6x",
  "key15": "dWvMVhyFavkrxRzc5G3M253vnKrSqxKFukddjMMiHbvG4onaBBDK89ibjz7BBuCKAhShYPtqApRQDozW1NXmQQG",
  "key16": "4LYneorQZJ8e4zf5a3iuF1XrHNdCyEftP9rnGUxrEs9ejEfNcRTDqD3Rosv8DjXpfTBuNS9fbqreyoTDxdRFkAWp",
  "key17": "24KiJrtPVdadcVXKgUu3ke12Vb7cmNbepFvpntrJAMegGMdVxzpnvmNwdRSKGteDdnVq9eus7ek7WbHH27WvTF77",
  "key18": "4W7tyFekd3x4WMhr6cwPbHxVen6Y2UhXk2gyStQeLYCxvGyfWtZ3Wr43FpopGFj2dv7y31vM72hP4DchpRAh4Up",
  "key19": "DLiaGd8sp4kdBcJTfxfAyFcxRi7xEgYn4EqbGDoUnL6UBtFZmRS2iZuSFyxXG5SPcYqYoVocjgJQDBsU4asN5zJ",
  "key20": "2k2aL2RHya4s6UwdbUy3cZbGHkEjF1Z54VGgvXqyns2CqFDMEFH51b4rsERfPeR2LNfrVpw6fWYeFRpDQnWeEbh1",
  "key21": "3ZT4UHte1GmwbpqB5Grd6FSjygWUygHBWrCRJuKhyosZfVQybVHwaba3AB7fVnWFWhQB3ohzkPTsLGREYcXxfDcQ",
  "key22": "3tdDndAzTw3MRWhaTpgnYwP5tc8rrzGdsRck52DWRhDhmFTUi54jjbDKgfng2tWUnqviaKR9M7mbsQ3vn7vngoSk",
  "key23": "2Z3muiCtghNxxPhQxqNdYe3K7vn65uNMqDxikocTaQ1Qruy76CtixHCra9RrrtijsGRwJ165TDqChpZZjwhuM5xy",
  "key24": "2SuXYNFvYAgUWf1jjzCEFjBvpjjy82tLXmiECyJyQmYeC94AQ8kw8jtJ6T1xPrwArLJsQb8bDA8bnKuEWPj3yY3S",
  "key25": "3ckbU6feF5bZgMiKNhrUQmvBAvgBeyF48T2VWodwGdfXmb98P7stM7ED5TqUH2nq1KeFrwcq3oP75kUFW5Y3wgym",
  "key26": "1piFAX2N7JAgV4j2rCdaCeCd3HkuCaxeJRBpageu4XBmfpKwLicQGA6FNWxcks5VeRCkC8Wx2UsBCAqWorTGtwz",
  "key27": "5y18J8wD6yebfe98EYY8Mhv9ApX5LyRy1KPN6aXV4pfASauZaYTiAaPqFU7SEpzGu8Nh49o4YysuLFQigiVkJXtg"
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
