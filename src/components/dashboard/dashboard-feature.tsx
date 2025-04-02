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
    "5FpvgKv2rQ5DUineAQkNuf2u2vE8Hhbq4st6K3PKKJu8z6585YfKcvvJeLitaAYXnWuX8qHYvnbFat884Ukv6sVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqMPahH8tHF2V7eWfNuszjraqtMvpYbDrYTHqj2MMVfLaYuEoYsHYxvYzvpErWWVnwYgss7uAqhzERbqhX9vowC",
  "key1": "21TQP97W4D4VjC4gkiq7HVUuDBkqsWQzLvmBLYdAe3NWtHfW7qiNQCXeuGcPUBe4Wi8DZBT48hKdwFERYfG97bYR",
  "key2": "5Vh44GE66mQHf56ho556wdbfvsyAy3eEgEy4c4ptpRSmQiFpwCe876MCMProhhYHdpwxL4hCrePu2e3MVQWtEfPj",
  "key3": "AN35DcNafgXg4FPAKecf2uyxYSMu15NSJunUNYBuuhKGqxcrACyfRGgVXJ31rhPoUFRF25tYLagSCuKmBpcjyvi",
  "key4": "2TKGefzDYv3hTGBWWcjL1RpMDoWncbPWQqjUKamxg3y9ZfRgVjYYttjq6aUgBDme6kENw8WKordhg5EokCkc1EWx",
  "key5": "cmdoak1yKkQ8Rp7YgEdhrDk9DjWusFSq19xUvke3uzmkEooZdnN2ThKjXrWcn82Uq69nbLPdmshb9apmjYneW2K",
  "key6": "2mDDUVmSTeSeS57USE2GuoMyYfmLDtA4QuyDSZkSvi12CHXcvuJMENomghVjUYu38AfYhGWVgdg6xJAa5rsX1MMp",
  "key7": "3zuwxaLbM5Wv3uU2DXLFnJhhHwZy25QMHJeF4GKEbhLcfBY3fh2e1kPyi1RMtJ38pLDzqWi7bBvk67Qh9cXHR1fc",
  "key8": "2yT3j2dMPcEs2GiajkfsaGDX4b25kRAHCpcRnqK4zKipzqad7QTUSrRqpZBnv9RaBKFKzoKivPWeboRL5fGxBQ9M",
  "key9": "2aPp9UNoajEDJwMkAfq655k2bDp21ksGxsDwDK9B7bYKbHAzbdY4sxJD3P4qzvpomMZjEBej1QczauAgSgeaZR4o",
  "key10": "2J5QskAE7rgtQtqpwk3sivKuGANsDQAzdPTgkwAYa1FbCpKqkQTMBV4KrrXyJpXMukFe8eBCEnnoRXBiZfZridLM",
  "key11": "J59QVCd512ZFFb8j7KrkXFUwB5TgJb5Nvfaft1fAKkiKDFfyh9pAMV3MqtgQiKXHZZTRuVpwYK7fDLc1afgGdXi",
  "key12": "57XheCjAme6Mfe2VEpBNvLziy9k1bzRjwak3PYhvazrBevMMcULLvW5ZKLC4zZSBYYHxxmXpR5hotGUonT5PiizL",
  "key13": "3ptD1d9jHJXRp4nsCrj7Vs9cQ7UHF995Y1SKVEksbMktSAwUrS6qPspstBaonYn16ViTwCbjUEDjSuVmNC8SyeFB",
  "key14": "52dz23JFYJ3WfcP9sWriuYow26awc1qEh3z5a1GTyEFVAEpZCzRm7URiGsppUgowYptjbqNZGjovetjy2aR5HWjF",
  "key15": "622ojWP9cUeqxxYqa77WxRYjQuceqmMiLRzg6R3dAmxckuPM8kkCzNTe1MJUnW8WuSJmeiorkCESaynPpubQySxw",
  "key16": "5ebA29dPVSxMixWgbeTJErwvH9LEcFyHiH5RMDJf8ZxxcmCKwwCHpuvih8TXoaXJ6W7HCHp4YE8itk5Eabi1EsrN",
  "key17": "4J6Se2crCcHzLBcxaUsFhQsnMizrPny6FtF3DcwyQzREVdViiAmbfLqisAiiVM2VaBVLnmxpKSwk8HsBCeAgQanm",
  "key18": "mG4DBtuuGigFxWbsHRr3GWYJWUhPMfRFgf1jpoRqr124dV83h5NTetdrTQ8XGxDV8fxzw4eW5CPUYTGNH8QLZTH",
  "key19": "5LhWzjjndcTEJ65YNEb4qVqsEQneQoTZyBM1nDmz39igQbEjn9VJqW7QH2YzmQC6UtArqnodufRGXxWCCK6LS8iJ",
  "key20": "5UpNmNk8DdzMU4vhoGJAtjr2dxvCQb2UxWBfZ4eKZwoYK7R7sudMvVFwCfxJJXAHYVGMQcnv5X4LXWwZPgdwvbtW",
  "key21": "2hGT21QuT6cKQ6H5N3hmsnoWb9R543HvKnPqkirWpLFE5pYcLnSubr9iL6bd6ULk7tVDZ349nqMgApAwAoizC3Lh",
  "key22": "5f5iRPeRJUKQV7x9bvbTFwKMBLrbBmHHwhZdrmennjAKMmVqZ5x1sfwsxK4BZsxhzEtxM1Sz9hU9T5ZByMaykKJd",
  "key23": "4hpRQBeTuEZn15WxT2NnvVS4xVPVvAyYjzbtBPCXFsBuKdrj8Gppz7hUppHXiNZPK17BnoNo1PPKM8LLW176NEsq",
  "key24": "YoQRS18EqWHCPUbN7Fj3bDqvBy1ow5avWsK8Es3Y6wQBtF8HrUqLwFs9ZLh9tX3vU1N2J9N87NF7NjLvA4jNpXS",
  "key25": "nP4neEtkd92ZgEa7uTgcBGzb9oYH9N8BBrTvnVE1varJMmohg4yQ1AVp4oGh6gAVe8PB5urFfd8hx3YgbxRy8uX",
  "key26": "2SbrUdEv3RT7REVtvghPrHBGqyVKxoy6BQgCQau9gXLzGNNdxqiQuCzM5fgRktk7ySvW3GsU8zgdbX3MyE5butYL",
  "key27": "52qXAp5EgLv5JtazrT2zTDXromkK8E7AG6tx3vuU8yqjGvSMKMfBhwXiFLwThetMCVxVAL4MGMaraJ1MdYJMxL8n",
  "key28": "5wJGwRXnJzJEmyYQRQoJoh6MEnbit7LNCqwdGN1nqTx1NNgYHGd57HoYaL3mjQUU9H1YKL2FyFfuTQn5xF1UWVgb",
  "key29": "4vG2LJccgRWzwXf9bhRpfjC6418fU6XAcuudHqYNHamWYbu42Xehw9NmXdwXtW8iGwarBuZacPcWvwqXBgpMkhhC",
  "key30": "27XcHfYsPCi5qnhwufakSMeYm3riaLGy4sq4oyUiBij31HLTVoMtXXubS7BHfUQnK289oUMZ9gcELRHKc5JsfYUT",
  "key31": "3nUAHFkEbpFSpdCCBa4dvAnqTamWSWwWA2ARYDpHoASkSrBwDikZFkewJNmcEWR6v7QmRAi8JLBUCvTKrwJy8kxX",
  "key32": "29RF6DZHPUmh5BbSTmdTmrZuSP7a5TR7ZFyCVJZ8SpvFYfxApFkgYeh9PzRSaoFp87SC1P1UPZ34RD4DivpXVse2",
  "key33": "4XzUg4Juh7Jxo6B5YxcEzwD5raycw5pUUZW7gpg7KcN4G598RjLfqkwPsESTetkh388ueMHqzmd4RbH38zxaCvvD"
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
