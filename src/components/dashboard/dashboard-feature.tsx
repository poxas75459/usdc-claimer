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
    "5uv7PubtE16hUVo4HxLKpCfQz1FPge6oWJayEvVUdAUwP4jjpxZiWoom4YkiZaE5oKAc2jB2FVJqtBV7mSRv3n9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MeQzE9joD6feYrs1TMsTPErfWnmptk24wCDwu3rNjJ9udk4NTzMRXo7Bbxno22GH8FGi1h8fjX6MM6pjcV3kzeE",
  "key1": "34fW3cSEBHTWwLdQ7iHrHqoKFoPj5xhxv8UVdqPCvBS9FqoPjJd8Qed7r4HPwvBve7Ypcjdijqe1b8KQKAzuRXMf",
  "key2": "C3tGrwMnBhN3wNngHcKWQxMBvo67yK2H8yfAL4qk5h68dvGMjNSdsQxd82isg1m73FyoQnfhnBrGc2u3baShL8d",
  "key3": "5sqFekkRRG5R325GEzzuCrz4QwDBK5GiuSzVLS8g9ZR3Rd6X59RCrxFfU6vt8iBqwvVTstKXwh4ZdwPAK5bVU3tR",
  "key4": "2c3bzwtB34UT6A11eJ652Lz9LV2mE3LhbugyKE7rVeBsev3xDfiVu55eCbxX7rakSSckUMyAq68VSqoA8Mvtwj7A",
  "key5": "39Msyujv3kQ4HNhj214vgWAdEqowYkiYBXYmDdJRo472DL8h6CBxmMU3YrXMSCPZ6z5o1vGMTCZti5h1DrydhgR",
  "key6": "3QpPSubjAgJTzUjMeabNguykJWyVpWk1TxqK5fHxhFSvhGuGHdPe64PUQJsbRx8L6MnyUcLv8tR1ZyspZy7j7aLP",
  "key7": "qeENEKuU6SPLDGSWSqj6xH5dukWxyzxagamY5m3J6nmCSkcPyrb7pMgToqYBRnZbVsmpbVidzh4NiXoC2D9dPLD",
  "key8": "5whbi9Nh3VWUzYQXWnrMivZse7JzBrBNmHg8qmTpqAqCjjfwk363AzMasfMNsTqWX1dFNGM2oFQtgAhrp71mfkvN",
  "key9": "2JyBcgjRz7M6rY28XpBhWkKRypEz1qoG7oFpzNNuEQ5DBWoQ6WAdtr1di9YjYDRM925jGWTJUmuPwq6UHN6qUboN",
  "key10": "3Y8juAMHFKwSVAvWfB1drHLA3z2GdJbBuUmvZYfBoi9shyxKGMyRsHSjj8wGkajSrSQ2PdZNWENBKJ7NysRs5nyk",
  "key11": "5SCg9Uyxe9J8r6r6zojoj7PmYM2GfF11uqHUkosc1vw8PEUPg3Am6PHjFJptH3uXb6p6fhfF1WaEyvMyuEgizbS6",
  "key12": "4egoAG2YGtZNLvYT2mwjxs7xDfqiiRdFQfLzBHBhQb2UAsoDKX1KqDYn2cLi9kjK6UmRBaPGRPNKvLESUxec9oxq",
  "key13": "5U4djqKz3zTm9scPctK8AvELxgpzPUKm51oR6duYMqANciDkxZTHBZdV5Tfmt9xJ7tXhg8veBV62dfGidAyGEwQH",
  "key14": "3NpL5cUpFMTTNnrmrNhgDtyMzxqVirDFedXEnBYCXaNWwjpGyej6gUmWVB5bdsXzmYQMwDTdh4XksdjSVA81ZwPY",
  "key15": "46Pv6N2pxRmvB9bLM8UKoHsoxfSkWVnhiMt45quKbonxJTGZ5NkX8ueuvYXe7nws9ytfbPteqQ51aJkB2iN5PMdm",
  "key16": "5WnTv81phUpDXSNnv3gPNYNRkEPP3iKaYTvBH44z8jrBMsFVwVLdNgD75Um8ckjbWagXEpZk6rVtxPWShS3WfoUM",
  "key17": "5Dkz7Kb7p6HcvkvQtB36x1cgEW83tf8VLrJ7DSowP8w7zkiZZ1GYiRGiN5D46GFs41NbAMM1SbWzsfF2e5Fdksx7",
  "key18": "LLQaQWLpZWS7H8WSbA9fuYez3CdtPBwJbMWfN2Jins8XHWFU1axXoc8Uvu45paca6FzGHN9FMaErGNCKn2RwrAh",
  "key19": "48zEg7kkDzyyqjTwMSDgNCH5dgjbexCn2QA33BFXCK914ae73UQdf8vuv17ESRpBwnomuqJ2bwn4FiuJUVG373Q6",
  "key20": "5D7bQCKCbrUZvVqHYRR7k3uLDZE4wQuRX2ZmeqwZF6g5zZS6gAjt2TP2sHSo6CNmQ7nk4CfRxkGZH781z4ZUAMuk",
  "key21": "4Z7u5quMmAMcx2d27ypRUF2mJ97A9sP1nrxvBByR8tGjk8wVbf1SSKjpYMPnrafC1PR2HdpHp9t9PTp7uErBGMnE",
  "key22": "Si5muoCdhqovGeJb3Q2hmbDdUmoWmVAazzZU8wwTr6TPBXLPiiUvzsQ5osw5HxBhy2nGzjrcVjQSoLt3nPmLHhe",
  "key23": "3RR5SLTE7qFNiVyFmuQqWiUYNqDViWZousLTNTfDun3uJ73PjPrQQGS44jGsqdBKszURHLBEENuMYky6wCwsSqxK",
  "key24": "2GvHcgpDzjQ7B2HbQMY6iPQxZpZaxitPMacFV7c6pCxZx5mPkJKvVv26xhp5Aj4PUpLhqn8DJSvWsWfVeiFwxzX2",
  "key25": "4vceDsif9arUVFaW3EvhJh3nypcWoLfukX4v9gNvmGQwpXMDBiYsgpm6wyr6f7ZtkFfNuMjAh7PA3Y4pNWhnYNYM",
  "key26": "vGiLLWGDEAyKPuYupXb82m9Vr6Nqmy9vP7GZkmZwCShQvNK9dNkndUHFHpLp2brC2UjuuKZNDukyyAKs36ozctW",
  "key27": "5poqADS6XLvz1u6uixDb25ufC16ADb2epdKhYauyv2jrV3XFiLdHDJVQ3KaxMdKaZNtsP4qawP8exCaPiCKjMTXk",
  "key28": "67U4k4iQSXrrgK71RgXBxwAjAQpegjnnQwffF4wvwWoRyNDNfvxSkN4wAsVQ5R973crGn6soR1dR9abH1FykxxXd",
  "key29": "3uw35xNBbeSVxzvKRSkUZcj6qW24ubCBS9TNFPzWteziJqKcjqh9qeA3f6Q76AjxnQf9sK2Kga4jMBBrU8xmjcSe",
  "key30": "3gaA5Ba1DK54pdENviHMJTF9tYmnQwUubUbYx6iZVGi7PpFijEj5WgYsCa1FRQKgPnjAGxohZ1qjHnqpyuHWL8ED",
  "key31": "4yRZwiz2obBNbRuZB3YcUbQ4izc2oP6suAbgJVX5PJaxcGzqnK7Zu4QbUETxmBxqhX8XJahUQGvM6mWHaxqEkLdU",
  "key32": "4Y2XckKGGaktcZm8hGscLDH9YKCYAwuHQr3uxttJor8kjJoCXGLgFvw6srCh6DBZxRpjufNyAmYugGKcpXCgnN97",
  "key33": "5AfYFZ5HgW1N9LiBz5XBEwFN1R8Dk9FNLV5oCPrbMjmfyqdBwFVLrcuMrd5Xtw6FtgBc6JV6x9YRChciDWKiQ26t",
  "key34": "4qahYg98spjX2DtuKTjAokxdoz6JgGTf87yBmrRHjiAYn7cgwidpoQDuKn41jKGMGkEsMBVCF2tX6nLChvUjtLRS",
  "key35": "A4Jpd31A2ttY5rZ1Tge6NYvzqcoQVic5ryXTtfwKkWcrXUXnZPBPeHi9v1evshyLL2Fh5wmLm8cPuJZw6HUoFJ2"
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
