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
    "5mML5haWkUKHKPxUsvfA3BU2JaFLhKLjAt11BKSEvbC57NEcpzRm8YbHC3LLuKjcdF6FTkn95GaXZeHyzVg6fHT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZT4EEB38grZiyZ29H3MG1qUpUyedcseR1V1cWhZ8RtubJHZdpbQFk7XU9LMc9hbMy63KAdoH55A2ncpgiUdjfTS",
  "key1": "oQjUfaL4nEo2B1hrZRgrKRbW2ifDfvAGUgBsMDgKm5SWSDPvuzxyGFFxggqtD8qeUFJgkLUbmzR1Weky5XjVrkB",
  "key2": "WwFGc27BqjzAf3pNXow6sVpUnmZt5gqXWnCuyk6L91wkZi2KP85GzyfJY1jdMqWgDtounFqngKrKU3Uh4uL8Yj6",
  "key3": "5pQtVtUAzgGYSr1A5cvokN1SnfWJ4F4kk5kpKW1k59HFAjFj8kRt2XT7FfMUC4s9HfG1sivvyRw1tZKfaCUsHskf",
  "key4": "AysDqpeNJkawzeznHv69FSVtbfvkcDYkXrJRQeCx93wiNyo76hLQArBemEQmCDn9Re42JSJH2pvcmDRdajjHrui",
  "key5": "2Z5hMJZUg7fN5fmr4Awt3hZE7JdfKJ8PkfpnfpFhy49XYiUwbbf4fHVmEWqsg2bNn1KXnkLPpCQqKyYLAWxHwFBd",
  "key6": "4kFkDZpmh2zgjD4MhnCZRyHVyGWancgv2Nwn8VnTgDgsz4KTmAWCXr51518Yd8AsFef5JqGn2XAZWaTr7F1esFaQ",
  "key7": "5uBYMmFb9Wde2tCdW5UA4CGJcFiqJPYXF7dG6UtfFAbfk28S5TLvFRB6d6meCsKVUJTw6fc2MCnin45hn4ZGJqjt",
  "key8": "2PZ3zhUSkSAioME7NszZJaLEnywhpWy5Fh7tEKJyTv4dF8teHhDFjcJ8BMARSMLeyKZKLpKpDfpMbhLJzVQgQgiW",
  "key9": "2JSENJZrPXuynffuTTg5C6MRRRsofERW4yxoBKGhzZjELYW7sbtNzSrfZ9AQtSTfzhzzJGGdV9UoxrfSXg2MpwfS",
  "key10": "EVKSzuaXL8h5gbGvwWnY2N835f9BuiEwVQ68wRWHgq99LJd1nSnsQZxRrvaRr5yfvZ6MxeZTfrL4Y575fT3sWoS",
  "key11": "hwNcGHVcAgu9rP4YjYPsp9gsDiWd3Uvpit5NScHrLhiRP9ps6g77Vaxqha6ksy9SP6Pdd3cNW2qgXPaAdAoz9Ty",
  "key12": "2SJddSMtHTutSkPwrMFYaFDfjAHgaXhXqAwgyxQVhqipVXs1HFfCZdMtyNThPpyQhjpow1rqjpJMCXUSk6yWX5ru",
  "key13": "5ckuQAP6JQcRefxNcieVLwkqN2kRmiYzn5Wh6busUKNigfBznXb14E1TmG2jJH21ArfDTtSzr5ino9z6gf65TMLw",
  "key14": "qJ1LzWDa8cKfgoH3pNu1SZ3pcmv8uWk3jCPNp2bTNtUmjpGDdKcevNfQWErFeC9Xs9QeALGRUeJWUcLMXhEmmD9",
  "key15": "5dw5P114VwmFTVadpBn39tVckGa1hw6am4Sjnp8H8JxDudxqjUg9pDBY6iigWhHyyy1hnAXzm4JBGXQ7FvRHUbiZ",
  "key16": "3Ju5bH8kFku8tA6xVyeUxvhLhfDbbFswrsfLWRZ7ixySB6ojV4PyC2GvRGVVmW1PAkYu8dAyyXUtSa4UyfSNdnHd",
  "key17": "2bMtUVXf7zCrx5SLp894PfkLTGD29qo4DPCLK8XkewEoWE3P1aQoMKNyZ2PXFeuMMxC3FpYvV4hpE9gWJGg8FU6z",
  "key18": "4cwgC9wYMWVeRgtsgCma431gEbgQeoAiUqgNdbkMe8FaGnDAYfCpLm5b2xBBamH6zYPGURxMchRDj7Cb7tTbrJed",
  "key19": "4z1DVyev3N3AgmJ6hp89JBWDyTgiqQ4FNs8gF9LpmxMdumnV3j27jQrfdWN65ogDoZdwifgSUbhzXyK1fcUxat2t",
  "key20": "JyEiawG2kt68ZtJvYHBZ5udzUZDLcDPG9ZwT7iHwY6XFovqNKK9AKHnnL8CtzMP9RHELV4noUWJZkaQYaNbXRQE",
  "key21": "75jvaQ3bACAwrGnaYRf2DLhz7GGtVLG7nRzpKCeZtSniZmVHmjZMTYpDxeCCffrPqDyTaaNGAnZH6Vgg3PRaPYV",
  "key22": "K2AJFee225zHTNHkBQSJLy3Fwb3rguUfacERZwVWAbLvg8bojDr9yntawGaEDyB42siJkeVpkuRmcoKT8eamPir",
  "key23": "38YT37YjT5FNntKteBUzoN1rzHHqb69cnaCo2YnKXTEyQ9tPU6Ldm3VMU9Yz7yRsw7Kw185r798eiZd2G3hAUfjn",
  "key24": "5iRdbAUmYM7K8M8TeqMyzCezYrbK2ZEDUsGFRa1inbEHSRkQaCLnUvG1hRZ4ConJiax93xp47XoREEwAdwdRSJLy",
  "key25": "48kDX8MHcELGfWDupiFF8DCTDXkHebUfcgaUV1iMjX6MMwV5XAgndLjhPCZtuk9QP2qVwfWFz7TdabndPCPiAoW1",
  "key26": "58ZnYj1GQxRKb3EtrFBoSHj12CxmCLyFguDQvxdsMrzyt8sPptfxj9DST8Np2GGAsEKNPzZ8udgg8WhcrEZxqBKv",
  "key27": "3JnLtbohgd8HbX92yibqCuCwscMJD9fHCbC714JdDLnkMEfWeybLG9XekQPNvb7zE8gu6baA5hEv4YVfbrzyfTKd",
  "key28": "3mzrivvdbaqN2K6ppejEThtzPaPvP44aMGRfVHwY6mbNJcz8uLe27BXtCPHAtzmpBYMbJ1n4GAaWzhggn1iSSuMs",
  "key29": "2HLSxkNBuuMFGuuFyMqsoukJFXQRyA6x1FUah8aGGmgUShhkwXYGtrACEaCCx8H5Zwm9QEKPTCQD4yYuthFfd68M",
  "key30": "Z7ETKPMUbEEUYpEAQpf1VkV7YQTVBk8udcxDhKBFJuNN9L8HQLuAmtC3KW6htrKUnuoX5KfXNPdAk3nyd1NDnha",
  "key31": "4xiNS6hFr9UD8G4p9z2cmR9T41APv6Y9i5vRsfXzBpeewTD6bxLoAhvLt2fFgeNCyNzy5WUyBLwhu4DqpqmzeeQG",
  "key32": "49xz8gLCWiQYKrgaERL9iu9ZZVy9KGthd4FrXJ85ETmv58fKrwn6pADE687bpYaMKaR3ezDksRnds7ckzE71QE6P",
  "key33": "3FfQ7BDwbi28T1udD6BgZtgXPYg57H16TNm9GK2VJaBFJEAJrRZWM7y9MwFKpv48Myngz1jPhWAvbrxiNkqYcPsL"
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
