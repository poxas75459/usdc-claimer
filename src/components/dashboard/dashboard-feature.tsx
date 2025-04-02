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
    "3SeRg4ZX5EBZbdRtHMmbE8TJwGR48tAiYKV4XGWqsRfDTRQ24Qi6sMPpvuiHJctvcThwHHDtZbyxHG9NoQvRfcTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nMoMkMRCrmaHT7XCZB4b9tYExjSb2qzLsafNgGEqS35uZzsw9K3kpYRUHaoaFtd6agBzXYV4Ky6X49fnYo5nL9g",
  "key1": "3f82XNYon6MkymNHaqMiBGvkvBQso3LqCPhhQu9qRmVpY7b4a6M2dDTgxo8fZBt7LagrH8KHr3WH1CV9WBWgy7du",
  "key2": "mewUbEsXFBehz8oEM83cm5MWragrSrxMjeCtJAiXN5XseXtRGiwFQdg2nAJFizesWzoYU2uYPL1Do2j2AwEDxPc",
  "key3": "5GAwTPzveRd44VjjpaccqrBU7KBtGBt219FM5cVqf1ZurCRpkXvh1XTzYj55WKWKKBTK3fLBgqvApXQSX5HJVpiL",
  "key4": "36uKN6cNf94dEo4zXqckqHBcfv6R6Eb1ebdugoBhqfTLepJrtUHmQU5bDSvqdirbVtbn7nKj5zo6UHQFPfGaTbHg",
  "key5": "5hmVArzze17FUFP7GwrGZv1Cm1W1ZfyPdNq3a9naSqxoh3xhHznLpxfG5g2J93ephtddCFXsUfGRNM8dKJcC9s2k",
  "key6": "4tHotwWY6ED8UyxE3sHPj3TVBrvbF3nszjXhTiVwwUCHEtbKcnjaYrztxLWoajCgw5rkkR3zvqWAANY6XEebUtGa",
  "key7": "4KzpjgFkPALwnESQZyprKNVNouyN2ufT6AMmcrZ2ogSBVpSThYzgBW3A8Ux8dQ4rwaE8742BR6Yw4uVAQsnS3SR1",
  "key8": "7urzTEY5jUskyy7frNd7ZpHcS4vahUDFsCVLfmD5G87ZMj4LV974Cg8G839UJA4UmrWiyBHizU8q7cxDEUhmNdZ",
  "key9": "VvqYPctLqHyN5pinSfeVnULfX836m35c4HVrTv8f2jnUjS6QYoY3Cdp5k4gr4WS1BUjNtH8J4CtjevZ6bTbFRey",
  "key10": "3o43zK3kDzMTdBnCbewVjKhkXGARibfM3ndCD5f6qKPB2muNfG4ygsQ4F21Z6BpeMiGX3f6oMncubBy9VyFzNfM4",
  "key11": "3qvjHm95Q85yeg6R2HoM6SuobNmDYGiJaKNbEmH9suESEfardw2qBzdyGT2yJ9x9fvsiZ5av5uzLTpXeSRfgdP3p",
  "key12": "5hRnaJcYSU8r7CM7BWBtZK2WwGV3aTAu6xDvEcrepMqtpXoQE5WoK6DmjdVZBvuuzXpueVGS6R67R2as2NFmehwE",
  "key13": "JACwAqb9SbiQq37mV4bBpt5KL952JqoZuwSaGeX1wLpknUm1dzJbLTZKLrjuzockHLwATMEpq9TN7GUxMoGRffS",
  "key14": "2ZScRFzMcRbGA7gWiw6hQgQGapjwafrSRvMwVdyZ4yS7wJw7s2qxwoxM8rWuVxX1NujVaxMEbX4nCZmWMP5R6Sdr",
  "key15": "oWQKrf3qy5akk84fnp6B2UJZXst19gE5hMPZ3RnJrncBPrYR1FDHYXk1RaJdKYi5y1Ak2BVF9DATrW2JZa8XbGZ",
  "key16": "Pmy5x1FvmVoqkje3NeerzE3XM3sCnD2MfVVAq9D2DDk656wasg6kMswDDhSoSSpyAePM9M664w8nipww8LvLLkH",
  "key17": "4X441GoqCi275fiKh6sk1qQbEwPffGrgPahnM9BwFe3CgSd5zwoEQuWRXDLNfiPRtbR7yMjUBqTJaWXVXha2A9DS",
  "key18": "2cgpyJt56Gx2Lz3uq5qKieV9pum14giMyQqBMhvLiMLFj1q6moWjqktt9SGMRFgLcrmzgHbFgj2Pnbg1UyJ4eJty",
  "key19": "4LHFAeab5Xj7qJzdMrs2H581CzVbQmkAaQc9yiAdUF1AXDCw9D5xpi3ZcWBPnt4XrhsjooRG69MY4FaEy8epke1o",
  "key20": "5XF7WmE7E4rWnYjjFuRnXutkH9YatwvLm768aPN16YUZMXX8pbUF2PLvpBCFTBGgex7jgYFggrDXGRbtuP44Xkor",
  "key21": "3e7EiANdhj4NmM8snGj32rtPny3DBaYGPwNJn38GqknVSN5QxUpZwC6ddNUZoi4F9dAQ9GoE1cFCZ3NvdNN4jgW6",
  "key22": "3QzF9bQ9YVMV7yUTN61ESSBmYTRNHRd2JtDbuHp3cxn6cYB4vgF3239NXXVnvtSJ2fVeGmSVjcqBWmkzLyydXUcL",
  "key23": "5gqomnfqYgn19xRDixkF2mmGwzYFdj2A1eamK6WJfFoKvGBMLomYNUHZPTXmRMJnGWJpiauRhX7C7XZNx1y79vWW",
  "key24": "465awYmGHdEoDpSjhUG3n3358WGnWPNZ6USv1SZCusdLjQbuSTL79Jkpik38vgxtE6GhmYL52BkuZPFijmkrdisM",
  "key25": "2ZZHy4w7MrZPJf6gzykD9kG6TLKHSJbt9sbBdFfAaB4Kej1XbdXXQsy622MuLyaKwjUChDuBdHnPciqtXVBCGhoQ",
  "key26": "5jp8Brqmv5a26Dr2L8Z2dWZdnWh7nvPUWe2hXywbudmk2RWAjHagyFYzfovF5hV5KTUQagy42s2PT7KDm3jgsGWF",
  "key27": "kuYB2u6bFB2cm7ggyr2axvCoNZXYkRCcMUDuoKb8Ab9nQaRTtYBdt4Y1ocUbR15efqqfGC18FcPy1CoVdtwhARK",
  "key28": "3mRgCJ7v8o4kZ8MdMx9jbN36yG8emDycFjK97VwYDijqS7EpWnZWXQoRAvWTuhH5LhMo6hs3tTzYeyHVLLNtiMVQ",
  "key29": "5QYDUTzNRmvMmuyiwKrUTRW9bDe8CAbVY1PQU8AmHUQxf5s9cxEJEXHXY2c4EjTEp1LZx2mE9WCuzAZdNib9TxWX",
  "key30": "5dGfPcaXDHyEspJpKB9ufhkXxrXLcPSwmBQHnmzdWYVsPrM7tqxh7fEsBaxH6ZCLiwbyaRUd5tEYCjadbwFpbQAd",
  "key31": "5b4tryRPcKGW4LvbY2iqKE8ey8TmGxyRbKgRB2FeKZJxBfL3V3n6EsWM9wvgYidMnTVp21cDJbHYH1phnTE5Tc3d",
  "key32": "67hyQciYvAWZpxQje7Bk48trjBVi2EcY6sgaem86HMXZB3kRJgmEXzpyzGz4omuZHcSJYoJXikpBf2v3ksG6wpPY",
  "key33": "4dinEXh6vAMmAFaZMGCKYGKoQSS3Tp4z3zsPWmXbbRifK23yJBB5GfbAS6F2hTk4HiMrNYNgkSgNPH8KGVemoA2V",
  "key34": "2bU1Pr8w86AVYbQ3MoxamfzZuWqz5QUcuUw2z4mJ1BJwFf5yXViZFzT7F2rpv14g6yHheoBJmdxFJTLqQmGqz3fG",
  "key35": "641Ra3jXjgSgMjZq2BZeACeMhVBedZphvotDyLvgjHjRuYMHL16i2YvXG1Xu6gBjvZUoSmSaVa8hTtCz5Rqq99U5",
  "key36": "3ZD7bYijC6kyxiUGkQeeTqEvP3qRjZSSmkj8cwuJ2TP2Hp3iywpikpBDzEwCqoXgC2R6SbqgWLsncVBmYkQcZwpQ",
  "key37": "5vcbztuKoZUwdiDTrj3j1C3jnTcy1py4i8DwuxsG1gkLZXJepKrSNKp9hHHgCPtGmf51KznPK71xuh8GsXTaQERe",
  "key38": "4wFXPecGBDS1a8njvn2TvNM3HSHXu7YdcY1RYv8USiqUZdd1ze4En3iF7oaaPxXwYdJcL731gnM8VNZ162p7bQWo",
  "key39": "3bbHjGeNTPRbr78bhWhwP6JW1XFThQahTXq1o1tp6PzpEVLmxwWbz21vwFzebhr9Hf25SnAbBJGhXWJiUnvQ1e4F"
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
