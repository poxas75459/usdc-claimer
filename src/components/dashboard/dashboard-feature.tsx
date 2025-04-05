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
    "4UhBnvsMmRaXoKeS3sgnbQFv3yAue71q33T2XAMrCbLjLgWYyhHKCk9pWfhLSVWwCrpe3oq3LKeZNQPYBHicistx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMHnm2KYV6GXXzakeFsHsVh3aRKnZZBEiKsM1FpavLkTbXWCXVgKocm8AERHqRAJoxp1BAA4K2QvvJZK38wQhXp",
  "key1": "2KQonKwZW3kZczZGa9F3RUejWNrS4NKzYwzkjLs5RVbRF7TR23dr9ix9CestoaZmXikbehyWknKPpbyBSUJTDTi5",
  "key2": "bcrWMkeEE5sUM3GS9jLArjEjLKEmhZD8NKp4JChBorqv9W3YeMgG6gShN2VGZvB5ytw6SiC7A7nEzsXCCsbXSEd",
  "key3": "M8wu7t9JDbehaKAb3PW5QVAXNbWcPdpW44a239ZLxSop3sB4CRXtndPXeuGzz75EF4F6e1Emaod8DRF3HkarLBi",
  "key4": "33gShy4xzjoYQx8BchGcRUaxzdQfveNQ97r7mQfZ2FTUmpaUTMjqS2CFUvojgEqwuP39UmrGYBBjcUDuoWyKBqHJ",
  "key5": "54xt4bXEvnkcbvjZtZU9p6nwj8WWK7HPbbpcsFc2W2X2VTtbtYTox53QacGowpvRMceJd5VtMvdjHVQJH5Rip5Qj",
  "key6": "4ULcJixuCphr1pU6Sdtf6JYxEQCC8mNp1ctGu5TqF6666vjneYpsMPKfzuRWUV5tHWujiRuf52ehLVwb8iqHzjev",
  "key7": "WTqTq2BhqpZLXpQqbo5r3CVc3kWe8BEinnhQNozd6Ce9dKQmTNPNDvrcfmv45asedbskTDG31LTsYkqmfncbZ3E",
  "key8": "5We7gUEeiVfchFttzu67VnzgCD1gj4QXB9X44b5B3FRrRHz55w9bfzpTdcYQW13o4GhSWpUiK4Pn5QqreV66SSVW",
  "key9": "vBfzXC3BDmSPW3tKRSGN4ff86NFVCXRKh7TWfQ8AGzzxgdyZUYpdsxbM8P5wYdGbdM6775t2wcA3J7PZ4nwrTr1",
  "key10": "3c4rBZbS9ZsPi1DpAcNPe2EPj1yM36s99nTuXNncUVcEu2Fe8pHEvA9JtR7hPBFVjQuAudR4W2HvfLKJQdBqZYdS",
  "key11": "3TgPT7HGu4EhtdACEpT6P47TRq5BZAPtGGAw4APJD9VXYfG29XAZXPZELVabLBE9LLNc7RDztV7GciGo9iRBzpvF",
  "key12": "4f2Fz1MtJRgt9ZrjAwy3HEqi4TXmj8oKCjyFD52rkHduboBaR9ASBgaGAypWPCNTZKXtPnDVbU24j4PXAdyabBGG",
  "key13": "2Bzq9ETC1p4B6MeHjrJyUZutjjXpbR3XsKQgvmu79kGnB7Bbicrjyg2VERziyGmmGyhZm1hJtai1wQ4xbYU95H2u",
  "key14": "mQSicBDYCmQaBSPbzBggBQrhCHWAbZV8dCoyh1haX9jcDGamhvSvwkWwZPo4bttKLrXgCpWgnVgmatNMfZZxo23",
  "key15": "2crMpoGUAB5g8JUkkEkQnPHbWJuRdyeXfhCSvK78QgUkWU3nKn2hZep4H1r94hFnEa2Evy87jVuoj69XGDEMmaxb",
  "key16": "29HGKprTra7txTu5RdVeHt5VDBu4CCFp3KEcurmvAK4kMUqwMdYnDTA1HNfeX2B9uCLavuY5UXPqVwduNzCSA8x1",
  "key17": "RuJ5kyxHWB7tJWaksAsTWvjsvxqC3LdmVoVS4DzVBDtaZMZ7wR8mem4qWU9qgVoeMZRBJUHudX6G15HcjzKDyo2",
  "key18": "5xxzxTCZmFJXjpkeF52MwpXtzYhoftjv61XmPUwxZ91DRFu1uLPat3Bs4JEZYhk1PrF4DQRzZJasbccXmTNKYAFD",
  "key19": "3DRxDF17VXckRZbJBxpqBcbkVn6pazPXUkjHFm3p7CTZuz2q3fYEsUKKe4ZZ1nFAtWe8xcEow8LnLJDUNrhpM1QA",
  "key20": "2Lz3wK7urs7mqmr9aXPHCwsb9Cgw3jB7hVbdnHsiTXHuf8DKqyeWbrWyBxQE8BWQQokPxCHiBcByBHp5dwdEaFxq",
  "key21": "4sjZAJFvtiev7Hu1U8SHdZWUvRYUuqibU1uo8F3EzE3jMbiq8rPXBCzcFXXVBgKnPgArt1chv64Eoa3QDj4nXJNG",
  "key22": "4kExgXqbWZmYd2trm6dy9YW71xjM1mAGfUTYrJ7Zj9c4VzYCDnEv2x5gS3S3xerTPiKU5XoR7fkdCY3RQ2SKsUzP",
  "key23": "23uEizm8CcKL4biwFRpCUShqq1SiqxVRS6ir7maDw9hTpusv18CxvRiimWUqSv4SFPYcjjChirPrunmyXxZJ8ouZ",
  "key24": "39TWtPHZTso4twhVWPDRMhs53onSsUf3uo5zEf8yx6TdNyp5yTe7GMGmWR6U3xtuTQXzG9wByHLKyDtjH6xTxwnY",
  "key25": "275zfhDcWBqvAGbPyZ6g2XmyboD1JqQtBETeAcH7Gk8GT7PWwaMq2eCTXKM5rPVn6mcY7tLGg1eLxMW1tT8Mn2mN",
  "key26": "5ym34gmNy7V8fik49MWeymgCyNkEfYE1GnjXzhB88qxq7c1vje9GVE4DpBNuNejRtcNNAE1ojcYiSuMAswnwF4HP",
  "key27": "E98xwneSWVg74zV9gTAa7iaATUiQp1EDB37GTtEcaquXoTzP9ZaCfybCtQ41SeFUJzinMirHRsZvQfNt9Z6ssEY",
  "key28": "RfZNDeaHPxFUzG6E3fWmjXn9UEQ837ZXMeweZjZrkhAHVpn8j1DLBXyyVyKT5RMaccwrzyhEkYeCoi2u3jbR2Di",
  "key29": "2dWqqCw3krtfQfiPckNz7YQFr9sVM8B3AgZQhgjHcT1zAGmA3eJ7u9znyxC1E9FMcg6btDh35UW69RKypnXHdLxe",
  "key30": "5y8XYdfKyXtBu63rywpmHkLpwXJRSKqfgB85ZbMtWrPULm3ZsoaLkji6KsGMvT8iojupe6ivNGodWMKQZ7tC9Yeq",
  "key31": "3BZ8ZY49ejTLFTAxigKfXPxD4gk8gLWH87mMgmV94MSjMEsey4TiKqyE4Pgnzk6aokhqFdtzX5bc8ERoPiNV7CqN",
  "key32": "4msf8LSiGgPNYr1ySgFPYTEXM7Ae1wWWymbMXonj43ARfJJJnUgAFrwMM8m1emJVp8VvjRwCu2YYFEXcdTaNsuHK",
  "key33": "4gcgA2cXwF1us4yCpRLBT57wNTufMTdq7kzw1xhdKoVGb2BJEkphf3GNsotCsFUV2WQS1Exm7goXhJYsBbM9fhvw",
  "key34": "5eaWDmHmLiawyvEjhV3tcUJwqLnAHFzMuxAnehKtaPjqqmizsSeA3cp9aCCLT3n96VQLArdsz6ZndeQCRY1Ve1Fe",
  "key35": "BYpzDqPnphSDvnKTMrBFubEXfcpv54MnvocMC3YiB3UmB3aTWpUe5DBXd6B6rQwyqgfxySTjSMZMhWy3MGAoYuQ",
  "key36": "2tCbYCTT8vcKDKxqxQnAxuvJJdxfYDk1L4sdBEfcXNCdGax8AAyZHbFzDJ3YUQ2i9HgMXk38H7VrR89B6ygmgMqe",
  "key37": "3sx4AbgYxQvyUGmFrS5VuWmFjL2rzJ6YRzkLna2N6gFAfr21APZ68dgZ5S6myXfsiRSGmmGXXe4jVLgi6aoSAhiE",
  "key38": "2BwLAruz6ETEpSw2wY4iFZhLZcL8yna61YubDhWBuMDrromPSBjZA8qvXyVbPVsbEJWKEaHiAkMiL4k9AVZfwUcz",
  "key39": "3QxJQhFgkkbGLzyLkaBZRzvsbGrVMUXuSxJQTsjJARidMZrt4fby1wCSSFJEDAeCoaoYhRm7Absag32G8641RMdM",
  "key40": "5LoMw5VxcJmcWorWLw5KKGoV1m5ZM711kq1inxd16i5DHEMrE78PYRSYvrd36HdsuSmxx7xwDB9wcTju8GNGsrjr",
  "key41": "224yuiKGqrFEqX6DX1JsUTfyZkonfmwUnGV6u5YKoojSbYgeA8zY2wNaRWB17iTV5J9odvtvqz9X9G422J6E8i4N",
  "key42": "2YJuMcrD3Lp57H8UmoRAvEfwPsdGw7hyPjyJyp8J7YuSMB9meYQ3bd7qXHCqtyX3yAxatjydd3TTSjEHXQ91q1UF",
  "key43": "y1TNeKi8fFFgdx8jkVGsHdPffWCHqGJVqekPj46d5rfjsAV2RLyKa4Tcrab7ykksGDbkJ5NEsQ4TyWntFkEFabK",
  "key44": "2qG7vefgNDnCf7RnRAsC7sTnzWsUELBrLAh53XZZSnXVUHjgUQyyWzfWnBhcrvUS69zknKw4AXT8XSXjSpuhpXmx",
  "key45": "HzXQC5n3rFx2SvZs5FnQBujMNLem2DYeiy8JkR8MgPjX9q5XSogXMzLyPxtTsqdsSq3kPCCfSGxvCQ8wFESWzJ9"
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
