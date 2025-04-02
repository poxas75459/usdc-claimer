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
    "2iMQkttL66iBZezX62K5oPynTghBpM4K126pj5KbcUNMCWJ2Lr4cW8F6kgaebSs4wB2ZsZ9ZdKZj4bsNKEuHWuZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rPvan2YJ4wnK2MoVoShR7FKoaDWnsafK1p1CBnkn6a1nybrUS6Me8HnLWN8hHAYsCHYDVM58fHk2Depzg5cV25z",
  "key1": "3jUjCEwZuCzXCA9RbHyoKZfdSaaQhEVeYvZRPk2cNzvE2UULuiifJsD2S3aNgDGJHkGK8NfX3NqmFN9GAditZbAw",
  "key2": "dahrUjRqzjuBiR9VaRgCwofWuvQEidtPzWfnZwmUiVxyyCN3s9UYPjFZc4h9AkQZa6bvEkEoLnEjDXUqxQjk6iv",
  "key3": "5DpQBstP4SnX7gvLxtr1LTNoDBG5CSpgLF9K5jAstK5dm9zBBKVXQbpkre3grAGmEb5dxuUoBerZZT1FCNzqJX65",
  "key4": "5Qgn4Ap58g5byiGtEBj1ZUpZ48kbozRgbniDMkaJJN5gTPXzd5YfrpPyfmrG6ECMrqahsFt4tMshmGDGJTZi5FiF",
  "key5": "64igebs6ApFfjkGAojWv2Rz8aveCGCBjPsBgCMfYdvShGR88YrNjX8snm8o6qN3r3muWFo7Vw3K1SCtNXxjkTJSS",
  "key6": "2SLiX4vi8fimGFDe3cLgsGmug2gw6mP8eWqsmZZh7mbj7hp26bs4nnRtAv9mrxShyd9qxkG6p3WZCHVXJw1tdPoh",
  "key7": "2GkSLeaPf1YSRLn4WS9mgRRTAbqP3b5TigUGRBv4AaMpJHtZYSmNqHGxq6n2kPNkUSXXTW8bRtvxj28E1B2QJRPZ",
  "key8": "2g5oruF2xFXgEyJpCYHiwwvuemLgT63gPkB8s7NvwqFH5BgAoz967PSCWsHdsGHK2XiFfjynqRTFQ8NrTJeGjto5",
  "key9": "3kCYKJbf2wBnKKxCUNQNCqy6yJTQqEafUjAyVUZFdzy8VRebucrN7q2PXwT4X2aBS8fXspDTCTHrhYmNxpmmKfvD",
  "key10": "5ckKhEHPVkrwZe3jGRZUDa9J7kVAv4uMbxma9AJy4f9gxcbapkJtyrtGA354DAXdsFNqDsmDKDjec3sNmcDtyVPv",
  "key11": "3H5qCkdio9is3drv8TaorXiRBcpM4ATrM8QqMsUJDdZLFDPqVLUUjBER7Z3wFrKWSZHMmgVFusBPrBUkUnjew9KC",
  "key12": "2Juq5vgzaBDCS7ETzndjb8qnkS8VydfbJpm9XefhL2uWRrMouAh4WKWbdkKq7mtA545eSjfvuotgnh7HC286EzNW",
  "key13": "XRggCbNhRmukmHkAkmgs5E9GbrbJ6VfpUwxMdeFoCQNzzsZ7YWbkmRyFmWFEDEGQow5GUkwRfKUNRVuZnJ9h3DA",
  "key14": "4CpVxhurHhmuo4mL9qrtEPbCNZsrdnUgSt3hi7PNHLhxRGRoe7UAmaYughPyG1BbpXRbugkWiFNUKKPgEP4D5Pvv",
  "key15": "4K5e1gxJnqTqBkEBWVJpFfKsQvC7w5K8CeYhBPcUK8cwP6Y9AdBcDdhEXShwardPaB3rZzEFeyd2CuzqkSF5k26Y",
  "key16": "5QtdoEcCLGmqKw4veHAMpC52TdHEXhiZCDrz99giZfjYz1NoYiFHyj3ijQERz4ugVtVM3LYBH4kRzGogBx3uvYVw",
  "key17": "2EJU17LKTiKj6ZCZGtmxFBUKJTPUCNn95MoGZW5qmX7xyTxNbq87ceqkaHsBJg5nrTxKkCZKQpBJWk833TVgV1Q8",
  "key18": "51Uo63FWW93V7Hd2DF3q7cR4nej7TCvHGdvMhyCikBCpoAEnfXcNtHDu3RvQL5PYtn6tjFxz3XVUypDuHwhsTj5J",
  "key19": "2wPdwyFqMy7b7Az1kKU4PurPkSSeyXn3ANX5sievXpv7ZBhL7mfvTMrmxUsqCGubHgSvp6oREgaBpKivnA3qveX4",
  "key20": "akCePUsaMp4spwtL415TAU9Cn7gei9UFAZv7XGXiXYfgTh1LESLKMHTdqkTqKvoqUTad3Sv323r7QPMunbULWsv",
  "key21": "4KKVgfCoeDA3CFXNUaxitYXEF4WuvYBQFh7m6dNEXEB5FBwWTJLZWEWhyxvmAf8coR1QEoZPHRLydRzkVDZtV3N9",
  "key22": "3D6UPTM1bvCfJTWH78nqrAhSPucVDCUjMg4jzoNVtBwV3HBjr9Myk4isacvVMUWH6q5cKgCTLfVhjECyHGc8yj4K",
  "key23": "V8bibMCszosqpPTPFFh9Te72SGkhM2bkXGfq4tAgQvPWEKgEbTdytaZJKGzQVh3GRjjiHWcCUEQjTf91wefWVaJ",
  "key24": "27RUiZgLLsYyFUBgivLY6wHiCVLEzG76V3TbJattAKEYuVB7EYKfVDzNWiwfbav8xqwubenT65bQpcq9D9C4uhCP",
  "key25": "ZizDpG8FAfmFCZx52fsYkXcsQDQR7DKskJGcVqBgY4JGqx5HKzxRHGxRenZWawZ66db5jdqNbieUueGBLMDQAmT",
  "key26": "DyKNKdijcttAtLmfkBVdAZzemJV7zgnuJ6ks1z3AFnTVXUVba3e8TcMk6suuZwxcJkwRxMdBYq5xHDfoQ2P9AR3",
  "key27": "65k2gHtGFRz4ZSSSVxaQZCrb5pjgG5vV6F96SNNoeci1LP4WKk1qLa37qDiZusM92yJZYheM25KgaRso1QTvagub",
  "key28": "4gwFkWFJ7i2Vyoo3eE7ftYoL55hZiSdin7xvu5butw7ePQPuTpX3K4YuqPe2jyGPdwzUENQ1KbfYPupFVhzk8wo6",
  "key29": "3AT7Cq8BjFzoGX13Y98Gg9qMRT72eEAFyZZAVKKrBRH8NMq5GCeNy7HtRSvaTotqNUUqmCo3279tQhGdqdyZHppD",
  "key30": "63PKYTsgwTUgqkUiYUr4edC9ee6hcJvRKHLJPxyocbGmnLMUsGV2bfV5s1jWkm6n1MeSVGCoJaY3VEnt22NLBjLx",
  "key31": "2qQUwr22sqPYkGYBNY2ujSaWLYEM8wgfJVPsokjcP9uquWC18h1Y6XNQqvFpyco9zwJPZEmmcNGauVje64xUtdDx",
  "key32": "2WrVRSvU3XxxSPnKDicSHtZ9rk1CqsPRYui4C8hrZCF3cfj5ro1SRJ2F4iyLB1fGQVdFG8Pa8yNEc84652AQR1xU",
  "key33": "2WjG1E9i69m22QgBqCzZvStRbRxByzzMRMoNGwcx3aQgj6CWcHvgJMSxq1P5CafdaGTmFSDJeMYg8Q4dErRH1pXF",
  "key34": "2dExteAfRneZYGngm6L6AgahtgbVEpBwZiifYko5dkNyRUgMo67N1LZee6wKoaHMYLHm7K8NCQL8oMmDrhC4F3hF",
  "key35": "2iDwjaYBk7J681yeNajVqrKUUzUfXRcdeqokrVeQYWLESG6Pc3RZCo9SjuETRYwG3P4dU5iri58AW4pHc9Tj5crU",
  "key36": "2wVA5ZNUfaBzdmRbUPpobMpEvH83yNxJRJaRFYVLMJmgNQtpdH96qqxNwhUuXk6ECKzfNgK7tFPqqpSWjX5dxfvb",
  "key37": "UW92WcN3YNqr838BxqVYNZo56iRGcrn3E5Cp7J8hMqFqKMGhoP2hAVVAE8ub2bWkuwyQDyM9epvuxyZdn6KXUX9",
  "key38": "3qntqWRUDNDEGttr4S9eyN1XwYBfepZMSUiJXzqmqG9yrt8NYQ9mfwk7LNPes28tTYw16qHnB1ep4WnfmjnF54Q",
  "key39": "4YHj6Jip5Betgjo7p7Fe19eH9kAYHvrsxGAsn1U3jsFzBFWRugK4Qme9xDKJhHa1s5mXW2iThouVnm62H5SmWLyD",
  "key40": "3hWsXySWeQQMxFLcXEWc948L7YZD9XKNw3fwt6CotWjkZoRkcUcEfPNyJuUbgF1icpPkyHM5R5kbuGN49zS9rmYa",
  "key41": "478i9bWov8GwcTzh1KdjUgkX1qbMnuymUQcKRYzNvNy9erc246uFrDc2n66tqbubA26jKYqt1zC3x1DZm5LcbXat",
  "key42": "bUumZXgANDjFwseCcKJPtkYWZT2zRVPBgBW9J1ooXssas5NXJHHkeyFQ7DWMmxJ9aMMzTsD8KnyApJJpaTx4R9f",
  "key43": "4JpV1WHphnpSwwDA8RW2vw6umazk2Ajs434NrzsxBH7eCNJGKfZmFjhhN8JEnoPteQs8e9gRcfQ8RsmMo6s4kNmB",
  "key44": "3j6X2UtvBvHneN8FUAaZuaYLjzh3UUV61eapLzHXa4Md6ixCSfF9saADvy9aGfmfh9j42ai98qAwecRYrr7nHQyb",
  "key45": "4ad9yTnQThe35dhPYTdkyM19gChMxJgTAriJReV5QEJj6qykWnpDeoiWEJGh5rGDRtCzRPTtgtFV9gDDi7zKvUU9",
  "key46": "WoEsA81j2QPgT6NedxwyxfEaBgw146kqaxCgd3KJ7eYJWPTcfTkWExk6oTccQjH1s587b92uwEJdrM9PSFmchQh",
  "key47": "zoZHg6gW2bBuYv9wC9ZAuS3En3kxn6t3YBgfDJ9DndV8kbKrvNd5YgWVsRpfEUjBXedqyU5YzXReuJhrDY56PdG"
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
