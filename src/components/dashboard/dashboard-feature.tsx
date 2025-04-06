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
    "2k6oEBKKWeo54Q1XgEvq84GziSPfFnHF5LKnzSZ2FqX2wTCap3bXTZRS5xqT5QDaRmEfBcWway8NkDd66DmTs51v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EL7ruKKa6XQeVfovAhJHHbRriLsTCrbgfigM3bit8F5sEG3MdshXgmudFMJpLJUL27rFfG1ksqThCBzg5MPrJLp",
  "key1": "5SyFpwnHzcQqwkboSom6QR7t6VwmW6U3FFqZThJPJJ76gcu4q1VXvisARQdLWVuP8w3eanH3pRZqQ2ii5etVcqGa",
  "key2": "2JG7CJ3VKxpZSQpqFP7XkLyY6d6mzkVAuAJs8aW7GBw61pk9UN5cSpJ9CYSGf5j5p3766HQfoAsmbuN7aUmdUvPK",
  "key3": "4i7xDz8mvXCqS4exonBTVSWMYhgkFBSxvra99JtduKD7sDPh1M1vjyJbBJ3mKvxkdCB2KQrhQWFtPWDewRTdZuM7",
  "key4": "2C3puVjYV11iEYTNehptgQqxFxqfpBAmi3T5N5kKCMJ9o558TQS1tUi6gq4725Hzo5NFJ5oiZAVwsLUQVbg7ALjr",
  "key5": "2eBddU14dDsXqrpxrA9C3YrKz11APkAtiWUiD3qv7FGZQYoUfLiF691NR3AAHqs1aEJtFNvYXoeYhM4bWUSBN9ku",
  "key6": "4Cqtq9RSS8mteQZMt9bk3kjiL1homudnXeHgmujsRBDoonNrdhaQXJ2E3CouQm7TMj8c6f5A6cMiGFEFv9gyp6RC",
  "key7": "4KpUo7g15PMwzh99dDCcDkrtPopjhb9g7KXYfVMAXFuwQu8bnLqPP45qUHst9fTVLvYkMzMWEbHXNa2rp7U3ZDUk",
  "key8": "4fftqQFE7PUA9jtbUCSY85V37qzmBoHmZqk5X13iw7G1HSyRZXN7ieMQarreBLdzoJqiEZtXYTZveb987B4B45Qw",
  "key9": "zce6v3MEDhu8pD3wR1GATciGiXHjscgHFAchEFUvfHjXDSL1bqbJngqAWrvE8ygHTjJjZpg31DfUNNXyTQ81U26",
  "key10": "5ie8sEprSG5fhd7T5Jf6pAi5qhpfsT6ueWnCxeVCFzapCBX23enPkytorR1q6KszPWUonzsn7WcAqvmLMngy37fv",
  "key11": "4BGwDT5JxDLsctNnfAHp2yN8UkSJrhED2uJf2SwwimEkV3fK4dQVFj7Mqni4fDiZgZ5wCNd2e2TfXCQvcnBuH39h",
  "key12": "4kE8BBjpHkuQ1AU8wqUgAjXeRifT8aStdB7oHPejYJZ2vBtK4F5mvy9Mr5YTxErpRRsUbtq4J7Ugm9N4X9Q2PotQ",
  "key13": "23jynewaSeGTihUKxQTr9TZr7dehq5vuZ3bUURfvrmKmzx97mJ6DvsJo9DrF9hSw6qXxPzmfeqqNrTbh2bR8fdKm",
  "key14": "msy1hG9Y4wFYgAiYWj4x6gcJWhMKvrXRhcS2VpnTuZV7ndMoNHfzLN6EW8N4Y19oHvHJvsXxmzNyyqwBzGbrjEc",
  "key15": "5bzVAwskB4sf6do4PUQUao2smWUe85ngybfZM2Ppkva1LTMQJzBvxtmL9nhk7o3Qx7XvJvukcmqdxu2vbcV7gosQ",
  "key16": "2yAsvtst24gpmyQj9BjfEzx63S2PgtDTtYu4Kcki2KM2Y1baySkeorBHfA9mzwducSqAW9XZ2U7Mkd2ZaogimDaD",
  "key17": "52mcs8MDyw6wcJPp6jsPfvi8UxfQCe6h1nF6dhZDEoXLr1veE7qq6bmX9Dxsppyc1x9UL23yUwQ112LBeNXro1HT",
  "key18": "5usyaGR2butBjshD4t5qg9TqSFK9SReLCYvyZZCZwZgS7S7PuNbQouQD9udpQwQJTCp1TS2y2xTWfBrrFyAWhdX6",
  "key19": "3tbWLRgS33Thi9u27Pa3n8D9aSmYs177rbXtQjAtQP9hW2DAKfGEPtUVSr6P3mEpyd3q3B1udfsPq68EXGKtcsTY",
  "key20": "3oDCapaCr7X5vnZUCgEK2d8eaNwBaLwM3Wqf7VD5wtWEqH9wXSa6vXyfRtU3HggygHU6bGAjT3F4GD36zmeoSUUM",
  "key21": "G9SH5GdqVnjWUU47MeaQdxc2di8dGbio5JrMz1Kmj2Hz7yVVek61E5yuwL57orsXhAaqMDXs3m4rU5R1Pu9TY4R",
  "key22": "fsc6rig2RCQGpn2xaQeRSgfFUgbbAuSXMFVZw9rHvSq6QFDKhYciisoqFNyp4qwYBzRsdJjfGTJnRPXdCFUtqtC",
  "key23": "5DMYDuzo8qzTqWe5HmLUZtEU4Jr2KLajzDmnm5eoU71Yebepm4fwLigP94GqqMu3YEW1RoPiajywZecMYUg7YGRg",
  "key24": "5vE3vDNuz8KTtvQB4udiBQVtGY5sG1QchHvQ299o2YPMDNS6rr2bLucm51LGd7XGYQ7aFpjyJfozzLphsCjPcvC8",
  "key25": "5ob6CsHtjCtb82QbJp7XaGSm7R62pgdGftMohgAh898atPvchaTeywepgJC1NfixYqPcYtWUcDzfbbkNvkc4MWyW",
  "key26": "qaZs4gVRDq1y2yxu8AukCg2kRzRHFZ8h9go23ZN7pN1wyaqzkLtE6igpZ3Q38Qaq7gE9rmQrh5z6dcGA9rAaJt2",
  "key27": "hNfjyXzKc7XPxsuGpubRSrj9xzsMhGcAfGqvsYPLKKDtuoVPno9DdWpS9LofJdQyu37C2rQ1HqSgtnT4A6eALgm",
  "key28": "5i7gJiCThGhXt3Gkv4FU9WX7WGcCS6vqqrpiTM5xh8fCrH4EtZExYYyXQcsF8YKhAoAUu76YkVqJEmgdKwEEdreV",
  "key29": "2Bp62i93JJY4SUQ5oe5pkwJwX7BeTpbEfR5FbEZpdoiavX8t3NJtLq3AVEdjpY1EqJnjy3duMrBd7GfXMxWVvaVG",
  "key30": "mfUQJXyiReCEfxZat8pss5sd1mDFtPvK8pZeo7ezPk9TT2jcRBzBPXwRPaxSnHdWfPyyB72a7D3NYg6yT1e7qtC",
  "key31": "22EiUDawPEGAbtQ83PdCnRGP2tPPykaMHgDuCfsjDYBJ5SE9jcDEJpixYDptsEgQMB7YQ5VY9YbRdoAV1SFaXQ23",
  "key32": "UrWV3pqKhtjMe9fyCFvCEBXgczA6zgXZhgdtoAT1ELQ5HBx8NGypLKYcQV38EGnLGPZHpJvmqaVDgkGaZ2yQt4A",
  "key33": "2ssWy4wRgdKkQKJYvuzdVrd1CAnWXyJhzd1YrvzpYd19CwyEqLrfDkDQ8DBhp7TqiHMvHhawCQnc1EtJrecHrVqq",
  "key34": "3C9LSXofmBJMaU4GUKRPh4obfDcYvEujxDH5VmDoGfp5F7DxYfycLATRC1dapbXqNEczwe8DnC8BNrPBkgRTXpSx",
  "key35": "5WQvdf5bAoY6sfkkSeu1GSdbc48V6owQwtTXVp52YRz7KN7x7NAREAXEMQiqBC3hi3wTvGYjitvkNC6T7seF3RfH"
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
