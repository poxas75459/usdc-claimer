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
    "2MAP4DtMP6bpdPGH9TSsAgXogcm3HgDHqb8K5xmYPsaHvZbHerL5cUSxMZ5jFfxQYoKPJ6CUaKrvmmqzdCnitxML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vNt6YxS5Mw2xboHLdaVYhDpbQ6gBxMzQ9L16qsGbtvM438xyHcxRrg6c38BhaMdeq6b3wDVhoH95Z4pxo4PhA1u",
  "key1": "128dWCZUsifNjysAsjstjXqEhFsCc3A3PQ4LWkrSp9tB35f4KDUejrQ1mMntkbM7vTPN8TGGEjx2ExXstDPY2fv9",
  "key2": "5ebBj49etpL7SQdDij4NpTm8MC9FbjwbzEGsgMGwSYg5kRm2bTSkCcge4cVsoccdbdHCSaA79VfsNpXtzW334oMq",
  "key3": "3RZgpar6AJtFfM8JFWvKXRruAgQ1DPtbD1kybUhettxYixMQzazLZsiFjPYos6kVFkTcAtpQYqsCYZtvVg9S1u36",
  "key4": "2WX8GerJ5wS8ads6m4D8yffniYswfyKker7A9MN2mR3fhLm8STjpU74pgCh23t3w6gDqX88bcgymGVRfLDfrjDxH",
  "key5": "5YzXRKfUK3DiwqkFusmU4Sw5pe5Ypa71yA1DbN6ctR7Lex6VWh1n3obsgk1MgQAWwTBtH1mYdoTn5HoiUF9Cpayj",
  "key6": "2FL8PA6N7cXaXRtWKsPgcXpBiZujsD2HYMeLSE1o4pG3K2PTjLHzQavivt8moBAg1rfAT1LdomUQ738453LDwf5g",
  "key7": "fDWadKgEcY2GuLzyEGQhXRaCoF2JNfxgCeC1yzH8HG4LLVcHBX4JWuELae6MzQ9x3ntPGXu3LQvEZVwAydQWtbH",
  "key8": "2oySzJptHze8g2fpw8y9c58ga1aaiRCYsRWSiVSQ1gRcAWWBRjps2hjKnKFfnzUfRdnNhWHMZkN5n3gXwr7yT4gf",
  "key9": "65VNyAPKuC2tcJH8UzMq3cTZU2ZyRSzLdKdjdBsuqCwpHmE6KtLKE8PrzY3NDMx131H4bDXGCBQQq8pfJHoLbsLD",
  "key10": "GfL2hCCbSUeKtbQ6GKKiydv9YcNFLEr7KiC6oU2dXDJzUKsmZiVRF4SgGahpqTGycxRZCeVNXeRVnGfv91XDCbx",
  "key11": "3YtZfKYGDrqL5xCj5HKJuNmzZD8XdEEL9FMAm3X45QQJfm2kAJ8ge3T5GtqRfi7SzCRT68hfu66QitbNGmhYDZ85",
  "key12": "5uFHZu7T2U9eUWkBctfcm6bEEdPCQJ5tCGCxqHj9mj1CcrNDLxsnj8JtmAwirvtzWkUisEWGQb5CjXgw71o62Jeq",
  "key13": "2bRncYdLYUVBmc7GeQm2uuxqdtUH8gRg8Reybx8F9nBSsxEQiufFJQvCdXFUASLdanuVThCQFiiqm7vAzNF1GNff",
  "key14": "3uaHAUMkARvYPGZ29ofgRKKuNdfsQthZ2pGYYTyL4BVRVMjroNmLL1pSDhFDhsdv4oopvD7biXvJPzKPcQB7d9ZU",
  "key15": "4TZdPXhHJdEt9dxM9QQpwzutE5Jv4ZUvC632qr1RLEvCh9RKwTRCs7WQVeuiPLEdgPJx7zEE9PNfd4eAuFUcHhh7",
  "key16": "2zKm6s7EhJp97SU1iLzMQ9A9SxCs4ASujhKJffm6Uspt9T41SEgLEBq2vCdv4iChA72GNuYxzKtL5Yfz4tqmhxyC",
  "key17": "5LTe8dphjDy5Pk9p2T31urnvWYXasTMxqe1RVWFg4kkHLVoQdSHPyh4W269FYLfX4FGmTwqhDSPudc8eHdju8Xyg",
  "key18": "2PuN2KRgJMti5pVy561xXU27F45DmuUFDWCUywReb3hrjSmuyE2W7DQ69MpcjygaoAWaPmmW64cbQBpL3GWyBVL6",
  "key19": "Ttwzj1Wp4JcmoaeFXQFRN9fzwcm5NAuRpFi1UXeqjS5VTVrCQ3Fh9qYwL8E38x7pfv6gRcpoJJhZ2KTtYBJv5he",
  "key20": "2AEjM6N6rSze12UAnUsQvkHJaZYEcfZYNejFf7Qt1hMErvpnir4Dq8k52qFvLDyuBKyN32NHZFVPKJYSCREvJEP4",
  "key21": "3maYDmL5pTLyS4yAvBiS425rdQHtXNxqurekSBkeSDJd2gSBijVS5viHuCDjum7MjjwSPaDBPVS5AbcSiBqbTj9A",
  "key22": "7sSoGd9shmVADY3k9xYb57aehmmfHJMUTz9oCQc5H6U6aabVidYBR8dw8oSv2Dq95MQkMqrxAxGXs8DayHB9HvC",
  "key23": "4ZSwXkgk5pWR4buHfh2vqQE9NsEuFyHe7N8EKb63kwMGfMWyWTYswH56PtAj1rFMgRraFzFNZr6CePp8fsp18t6g",
  "key24": "4feQXCCpG7WPT4Uqee5GuS8YBv4a23QKacmfpga8hjQiC5dWjmFYcGXWbUMeVYCFJGegaCFpqCeV5oCtXgif815P",
  "key25": "3CeWt6RXPufU1jYa7Pcmpo4QaVcwdSSmn7HgHi8kjZcq8Re1d5145G16nLFcSiYAXbk8LgtPpJP4AdcgMCo9UtN8",
  "key26": "4BSiGwjbWCKqaDdKuqyxotuimgMTRWFdrDCkzPxEqJ7thggsUJC4QTUsTFsbV3VbPvGL1xYeXipm87btKPUkSLQn",
  "key27": "rtPkh2qLKvxXtmQj6VvEk7172WUQjmE1D4zajiiLf4BY6UScdiXJtttQ6c1PrAzgVaiMU7vJL6NRrvcvx73ULjU",
  "key28": "3saCkJtVvgGGFoGBKhDDiFSxVsQDbHcZyt29q2g6HQscEtcqJZhtMJGuyPQEHSqwcNv8qaxoYonfA8NaRLHJM3gR",
  "key29": "2SVhXdFvkuRqgveEDRotEbhg9HQRA7ES85bZ1fmpLia4siCTWwqZTZRjTAMR9encYyyTV2KRiaTuxBpnQihvKygv",
  "key30": "32dB9fkULdadWvb4oyDjHqQvmmydZypGRAVyZooFDALxBDLChjoV6CX7VQYhJNmLrvPL1JWLeuFhmykYcWRvwgBQ",
  "key31": "59bgbFyxytMq3ujaje9k4zkz7tNQjpoP2otKgwsfqDHYWURdCLaDpF6hqZq5LNB33T6WsomW4FYYeyW49pL2aEKM",
  "key32": "yzgmsLgGYztEwF7z7MWT28LQdurVEFMmj9HAvn7WZZCs4nDfGi4srWjmQEec6E1xe4n5M4hf7iUY9d9WMmueXtF",
  "key33": "37Jgwmn49BqWAQP2tNtM3rLtADdtYNHJ8bX6s5RD7ajTjYh3Hu6eCwWVftRJ13uWmQtFPRE2HFr2mMyQmQ6Gbu8m",
  "key34": "57S9y9L9H9gK2TQAsGquJ3agWN29xQPHxAscjZRFZXtE3EfiY3pcmCtCEegjpvVnpY8B89kTXw2W3mxYKnzi4Ae6",
  "key35": "4qNbs3y7EL88wBkZ1QLjTgNg19XebjrpP9R8yiHobQpRxPfQPJJc9jQbgxdbAHc2268qD6qNuMyetCbMNxoZ9kNW",
  "key36": "46u1KpXTkz5H7a7YMKrUExgAovTRZZ1WpLapJZG8czV6SmA5tAXBCkUpDmZ93a34BBzA99MhH4shQ8uV4ADyX2z8"
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
