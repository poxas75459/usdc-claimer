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
    "KzWzGWSxAYBwmf6J2y5jhnPWyCtfF6cnAkZwuPLPJDnysJfVvpQJVxaBkh8i48erA9J7zApJQDi9mvtyjoX37Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "248kUHXXEe1mR6fEvqcHpz9djRH1BXDJmePobPSb5e8ugRrrLU57Jq9tnpXHMYThbuCaMtQRL22JhmpWNtzftABd",
  "key1": "5bEHTExwmQd5mn2poEGJ3bGqsH9n9CKBkSMzTuuar5bEvEt9R6F2YCBhVAtpHTvQue4NZfW7bWtYLtemt1CRqzrT",
  "key2": "3kojxgjfcSc1iaH3EHfwRD6QK37zPCg4w3mctqg9RSSBfyaxubudvmqFuY1udnJUeMunxsxMdTZHu2mki5yfcnhu",
  "key3": "3fnituTY8MkaKMnMpLWuNDCwqjZaLYyFx32zkbnoDNHyh4dfXGMH7R7GHZJ6TZu2JpKXyPvrg3xSVtJfXGYaYbk3",
  "key4": "4sf85MCF6Uknbp1LQJyfaD2seZSibmnAbmiM6ALs9NKJfa7STAwnhnQM2kef1mZ8MFuTbTzGBEHtqsnLjVY4YC88",
  "key5": "3UTmUg5K2pooakEfHegXfR88LvyRBkgGijabGwG8vRQkRBbTD4okKjoaQYyeY4xUDppj8RRpEZ11hTp4zgqZHc7J",
  "key6": "2tRmULtVkJBWSDtxD8RepksSTvmbpu78SkFDSWSNLPnoRX2CNjPUwJyd7fWm3Dd7PmHQvzjSCNZTXG9YMLUmyVbd",
  "key7": "474w1dpwbpbf7ozKTneYb83aiSj9u8KyyqWfWYzQreNTXCRx2pdDbGmysTsm16ncLy8HsseEC8ZNMJrobV1doheM",
  "key8": "3ynJxQV3eGYaQKayr4SeUmkxLLc3ysEMcmwa2CiftB2tE2wkjnS3KpuEC92F7LxYECuoFhGL3mgCGxiQk95tQsBe",
  "key9": "42Qh8i1ptP5feLsEyUM19ny2UeVdkD31ket51W4sxEGSvwEQ2jsZNHTYYLnpWcfJsW8JrnsD4GRvBN2LGs5B9Dy9",
  "key10": "2QPZb2HiFgAwxbV9ZBBQpuEH8YcsiGDB8PgExh3H4Y7H443qDRcdaFJ8dtAtxsM84xLhGv9cvXoY7v3a7VVFKBi3",
  "key11": "4jrbQFtwLa8hCXfAsjUDcgTZDNkx7PBsKFUtWs82CFhpHQRZ9ksPtMdE8jnoEVjUQdGDQDvej3AwSaXGL1EV8myk",
  "key12": "58AbtUbePaBTrQu3CecNSvfi6JrejURtshLcJfaj6NBKYa1q9iHCHioaDozWo9hX6Wr2gs111aPeoWQuZJmPWPDY",
  "key13": "3jA1VrM8wk2nikVDNYwL6JcxP3bqDdE4QJkeMAHPk6pF1dGYD3Ws74TKuXG54ae99VfFRFgDb7iGNWQCYf7deftE",
  "key14": "4r5WGJa4b1Epf3Pii7sedQsiGiZAX8mtrKZ4w6QP9bv3fZvD8N5jmPCNPtepzhwwrXbXQLFme4AGyow6ZmiEtHLF",
  "key15": "3mzKKqr2pTPTkgdQPEhAvXDYkhx2tbCJHr945V8bNNSoVar5Pr4vKFfHxDTd2wyQUJ7YT7oC3jQWAWDEtvXMF8Kz",
  "key16": "53w6unPRdWNvkCczFKAEdvzkDWR8Z2oLNW8UHJuEqWRP9rQWxcJybMaiFA5fAAUVxL6esWVckdDwMvzgQPrTsxmH",
  "key17": "2NzBLKZe5ZwFz6U2cjEHCVbL9G2VCKc4tWDazYWsRJY47gdwdUbVtjnDVH8o8RV9jZDrmbMH9kHR9hJ1Q5Vc3pZc",
  "key18": "2V68iE2EUarcESbyX4ymRQkLYy6ukrATPYUtpx5qnvewjY5c7Wm2LuUHYApX57mgsrxDzXtG8bqDXtDo7WSiCMAB",
  "key19": "54tet6Cm5TGGzecVCRs2kViaAbecc1nVjKXd6Lbecmb6gWqB9rdWqRRJmH4PfnNvePf26WA2kQAdouNHLyVxH3Au",
  "key20": "5vrXupp5xSnwNfJGyBEh2wVPKGES7fn8LQz28arQLErfQ2KsnbGDt6LmAxQgATmLbAphEpAoQ6bRZJj6QfmWHnso",
  "key21": "3HQasHRkKm7spvARg9dotKdPBt5fUGAQKmFafPHooZm48n58JJ1DPef4EU5SGayeCaTteY7LeoknBSec48ntweUT",
  "key22": "45CXooCTTuCksaf8f3mF6cZBJSa6vTCMTmbdyu2pfrnFasnrA1H6EcvJj4ZHyZzAKTEPevRWyf2qVJYd8cEqTXzN",
  "key23": "2PYKUnjgwiTP2QUbTLnqwEMaRDsR48unkJ6o5HhnUBQvd7z7udJmPd1cvvQr682wpwsqeWfC4CEAgMA8M69Lp7ea",
  "key24": "3bEjuZ49VQxga8A8Y63iWCstyhdmV7dTQ2PZZqfiC1Q2Hg8DT4nyfhXsjnkGgKbK4K5YqnQnvwK4mfxEPDNzKiqG",
  "key25": "4bcjpXKg9HW7adf5ECKQ4baN32n2eoMWZELMPhYJCocHSbYAfRBKH6CzrjLhGppFX4SRsnZRkw38mU5CLvRGsfUV",
  "key26": "2cihqe9Z62WL5wWyW7HTnjsEJ8dHfWqgESEiniBc4ZvVc8rwEt4S38et2XELT9s2JMuXp5MHms6cnUrSXzRHmfaP",
  "key27": "4BkqEyv6TFejTLTEwKm2NktFT5CBYNsK8kZ9VFhpLAqbQzkEGDEYXZ7Fs6KCmfQvH1MSGSGqkjWohTvHuR1ReTQB",
  "key28": "57zrrV5xkNmYRGBV7zYSa4FiXPeviwngraiCcWmhuP2fEmRQ3eQzZMAJr2KZjrPdAGHMBz6cFRf48aXqWz8V1tFR",
  "key29": "29HyErtLc35ZZV23wAgZrqFi4XLCuZpdqMT1YykxYgaPAeSe7cYJ1fLeWDgo9aAUGe7hRcZb9TtPA61ZtY2zbded",
  "key30": "3kYNNXukfMd9wx2W3WZS3Ly7VT668R2ArWKzvZ5w7LhBdEBU4ZaURCm1g2XZVBG6KGCtCHARWf8MfcCvajN4gPwK",
  "key31": "5u6869JbHMa3HdF1bMgaF7S752hdEVtzMUyqNms9SaDCr46p6KsJ8Gtew4Xy447T3mHNpqqw9K5fTMVpsK9SqMKA",
  "key32": "2gyXonZc51oAL9bd6vmbSpKtx8rC7xKczXs8P55s8iJEfjXZL8QvG1Z6GfQuhxqpqPsT7yzgZprd3C5LpXL9dzRw",
  "key33": "uGU5rYbDhe27akgcP2Ef2kwccqANozBF7tftNytrH2x6b8rxJU5KeoX6JFEYjJuri3qPEgfe41nrjK5Chc3zHdV",
  "key34": "1LpUUapqBTgph2CAQmeiBcL8a6zE61kghuVXx3cLpPjk8JgBBNjhJ5uKGj5CCEGSpoubCbjPUhjnMxupHc8ANXd",
  "key35": "2b5JbzJRQpQZEqEG3JvMx9zFBxdqzE4MR1bW1gitKocGon15oTs1WG1UyNBpK17kjyeju45To9abVGPHWPBM7eoZ",
  "key36": "5LdUgZ3X4C1LdUoPsEnPVt4epBEEpk3W8wfmGNCB9Tep6VwTbQskg1qYJecfb8jXrWg7aJEmLD9CAYK6BfQpzJg8",
  "key37": "2zYoWMUCrgyTDRVfcF61u7Q14ZojUQ8jB42WMHofrwo9KfgkGTf3TKZkwPSh6fmNoDqNicKwNmtarjdafYYGeY1N",
  "key38": "5BUuHo9uEjt7c5SZf97psmzR5kjG9mDbHq2jkwpbG2nYifyi6VeyTwFz6zzrN28AXnazmYaJF9G2toakMHQ33FUL",
  "key39": "Nc4hXnBjCNF1GP67MXCracGrZ3X9M8K41GsWQsMBJX2QjU6CPiHCnZKWpFLD7vdZAsBzSumpMKYuRSoGpb4yKz7",
  "key40": "3EmiJ4NdV2xybvcDFZiEVLy1p9JajsQwvbHUbAexHzLdMC27Xyim96sLXYusAgru8j6pRLmu12DSfpeM2nujybBF",
  "key41": "5AVXqfqTFL87xrNHGRuoom94QUwoXp5Ui2Pwr6VWw2gAXfGes3cDByLrPVm5prKnW6booi1uXjhn5qAL6tgHiHnZ"
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
