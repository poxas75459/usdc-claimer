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
    "35RUWuFoePU2dPfA2X72XasSj68X1Wtk2HoEYvTTYDbpYjdZjBUg198Xzw9PaAY6XhQtz7472icfnimFQ8jCk5mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cqhVfhq8WExHCzzzjkcdhB4dx7DQC1d48GmW55SSukqHp8jPgAUeNEHvQpA4ezWKCPZcNzdzLBvsv338JmGxK3B",
  "key1": "4EZHEZqiXs3fAMBHuof7aiMiyjwBtzFdvYZf2YJ1c4ULvSou9rFmq3zxfifWxVoVsz4apN3QcWgMNVrX4zF4QYW3",
  "key2": "2SL3o93KqWcfBPLaic1zMZeyHMPeMzted8ArEQ5BLUgkkWVaD7it1zdvxL1QnsQVpWSyjMxZuPntemU5cbFrRBdW",
  "key3": "3ZUJtgHKoDaG83fkHutL8QMckWDcfdJs3Yp593vWF2EYYWWDgHAjy6SCxJ3gLcZ8uu9f2GfmaUFuKEeeLauAsxEU",
  "key4": "2e6wTZ34n8gEwari7GWakniVpkcrDrfH2rfttfLHGJxR1mDfkwFcdLaM76aEKTrUaDjhVXXSmtWySTBcSGrV1tsX",
  "key5": "37q2ZQV7GTTTmZoaNpwQyUGvAd6mENFwgoZfSGsTxCG4UWa3xdyLYoWuwDQHuZLCnfSdxYp9XLgzYmA3HqNzc5Yx",
  "key6": "5d57wtgeu8kredNs5mkrTCoTbXdcUTm6yJZBjDT9gjv8cwnxUq4pGK87ArH53WwvZovZ9UXWp3EVRbq6f6L822DT",
  "key7": "4KcuCnJ7rPQaNQmeNopjsehkEiBYue1mX8p85x8PpnCDkcBnj5RtjeGUFafXAanoMvyGfFxAEQYDFSkNzAi3oRzY",
  "key8": "5nbjMGEJd7ZdhrT9yVdpAsg6a83kxcVGh4Z1SiGNAkbpc5g6V364UEwpNURzeY6m2oLThfGZwtr59Rm2di1Ddx9P",
  "key9": "2gpqEh4kqzSWTTm1b1K6VLn8oFeterhoX9RrMzQcZohqJx5ABQGmK7KGpFXjhbDN3mNT1DjTpQjyY1WQq8ZA1Db9",
  "key10": "5oCau2tQ9Y36ZQGroQqrttWWn1xhcNaigw1GRBVmez3t1BjttNU23E1B3PDZhvf3KsYqccojzosWQSLgdL1qbDEB",
  "key11": "5e6xL7cQUf1rPgzHKyTThqpY3rLcE9bx8a1DEEoEnqSCq2nnkAVDdGeScL6nLizAdhAQ33RvXrZ6hedbBcGStao2",
  "key12": "3pBkARCeFyaeTLvrZcYcpyVR8vNWttQrbNifktSf6ChNEFEotG5bG1ULNKdMtAndoBUqdS9aiyzJPANTAJqzcmiF",
  "key13": "4j59LCt7PdZ9Mg3VNMt1w1dQgcn5d51ML334h5D5kEznzjXxN21BZrEtHEC1BQiPRuDfqUF7N9zf32TBbVJC8RSe",
  "key14": "27oCFeQTWzj1e2UcnKExaiRyZjFyJpbKHWaEeHnpkViwQvd88ygeWQZCPjKM2G8dU5TejmgrhTmVFZNZEiYrGFHW",
  "key15": "3rz8p7JW8VZpeYq6zEkgYd8p17imCV2HNUU9ckhp3qKJWFraTH9nGzPr7yycS4s86hWhpVaWTrM4hanbu5yt8Yf",
  "key16": "2deZ99qKToEDEoUSYdqLtJJU3x61XxQ46z87AhDexJZ4aVDXNsaDNdaf9HrJDM4me3duGvu3UnxUPgsVV5Ge96sd",
  "key17": "3JP7zGF1bJrcA988a8nsZR59utW8WmnpGKSTV3prqcakAYrakZLxxKjYefThNTp4YGe5SjMfiX2ytU91f98nME8d",
  "key18": "22D9ZcfgwL9vzWQFq7W6MVB4DVQXDzjgmARe1P9k53YHYqKB165JixTZ1UaFp7z1cz7RamgAcfqksBXVcDJQC9qE",
  "key19": "2TRJCZYfJeYqVL6oEfbKj2LQeFkNJoZgJEztmaMNR3XbJpXD2YGnVuQ9SMA7ikBKJwxPU7m3xyPGDnJNsBM6mwgC",
  "key20": "2a4qZE53iGR1kPzgyoEqeALS1wDZhbD1vb1GNaECMHmNRzR9T2PdsSanVgXkK96gnGK8jFGw1xcpp433pZXAFy3c",
  "key21": "4jncvXhoQSFAeZ5tTHY54fbRHVTD1aGp4xbDfaQjegQhqGBqoCRT37FWFxxiAZLMPhk7iXxfqQbEYv6AbT7Pmnq",
  "key22": "43hSiCTxQvkFVnykxjmMpJMPGM8CXvUkScvgaMZTm6GS5nKEKKN5Z5cpByDT2SnE7BWgvox4VYuBMDFHnFnCrmEi",
  "key23": "2hXVfT1PC9PtTTx7bYfoNAUnazcZLQFsaLLdRaV1JsfZvNeyPqRqdnVkTaDy1GdSYtVRTq3xruaXnd5tPVGnyWFQ",
  "key24": "4DsGU9Wyu3hx3z6MEeRp5XwGYY3GDPuNYdy4zjVJmi734h1io9ADttv4ccDDr2WayrHBcey4d9asRwMRycN75wKg",
  "key25": "R6LWJ5YPNiQfcpt68KGisXyjcT5SZJZfT28sZjZqSK9SPGKgCMZ5AErWbpZMT2XHQm6DDEZk9vHfrTnSzHDo7P7",
  "key26": "5t8oyb7BMbZ7vZBFQyptd8ezFmHeXCA9TcfZGtvwX68tDnAV7Bs1fj3EXnPGfMYneAoqhcHgfbrEZqS9Vo8XBann",
  "key27": "4m43yVb7t3XD92y68VgRrzcMfWLwZoTm2XGvc9T7vesAYFVD56mbSfxXUP2v9NgPjgw15G41md9ch8FKgLiSTXdb",
  "key28": "4KMoSoDiUo8ioFY6Xr4Qcsqq2gVx88DHwnBAnscwGqVBBsKF1U1tDXLcQvcXo17Xhza2uByarRXvxf73mDu4Nt1K",
  "key29": "jAxHb4P36LZbQhoWqDtA8F2MWEVnDt3qDQEX4QCaX3ZBunpDahybYdM8FwD34nocAzvEi3Qeh7wUYxmvM2Mh4uc",
  "key30": "65xu9rvktJmo8GbGrvykvCo2ofZmS69b4VUpqbVizYot2sU2WNfQht4SDQvV1MinV7j8c1u3JdKgDBGTYUBVZhXr",
  "key31": "3HcVadeYyhMmtx6RtwRdNuLftHWbDo3YVQaZLd1HEz1JgC6tjv6dxDgPhiMjGjDYuCJFy2NmGMzMZjPj9YoMzyTZ",
  "key32": "583LZ7U6eoKC7meVJ89gBm5QDdDv2za1WmoavXVtiAhSwAk9YFbNbAKWdaD4iuSSgNDCnhyb5ZAoTAgzakAwf3Xq",
  "key33": "5JQGHr3hVRpjT1MbczexEyUySg2fzytxi6R2LZ8KhcbRa4vRoimUgoXZ5Rfzj3ZJr9KZjnPX5LBqFEkSd2CT88vo",
  "key34": "cH1tvEk26c6sTenJ48C9DgQwjJ9NWsTDoUkiTfuDRsgehMJpJrFDsZ5FQLFEP5RxZ8YmhwcnPyE4risVVUaxC3i",
  "key35": "472koeyVz5J77zP6kGbBGXQFvjgjdL8P5pGpSPp8tU4AgTv19xgtC1emaNEhQNYgu3o9VfNrPCeFT4EnBoD5wr1h",
  "key36": "2MAFntweubi6AGQtU3dr1c2jQPFSso625aDofP5haxFmkrdXP4cBjcV1Xd5gRnS7yzDbCNZTVd1ksu8tw8vPdLEF",
  "key37": "5jrfkk66v7XhDP2ACuPNaaukUTNeWXzDApYmY5hKDZhoGW25bpLWb7av1C5JeewuN3jzvGjWQUtWL6oHXBiYJAdZ",
  "key38": "54JaykHg1gDgvLpXnw19A3MXBZ2tvsHiCS5ecTfwn7wC7fM2SsckwbTKbcJ29fxGueytF6rBkp9VXu76RFYuUF4y",
  "key39": "5KwNSMhcTRz6R2JR3Cz52Nwp9BqSc35YLPuJwKTRDFq69urqzLe8qBnwscH5bhaP5dUQciR7JMHKLKPjDtZXrQtu",
  "key40": "2JQy3cQeMCjpEkhay2V9tLaN49i9BSnK9LHbU2fSd87x3yrjndqS1B8Ei3DgE2YJ1i1tfL1ci8AfnxULUhMF9krb",
  "key41": "4Yi6hQ8J3BgPodUGy6dRT6hsCbL2wqRPzqpScBoepNohU7LqUAwijeHaLSGdm6LBorHHsUSALMdjLNUb6epX6PMg"
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
