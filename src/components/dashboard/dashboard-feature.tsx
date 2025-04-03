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
    "53vCf1a72eNusJXzknx9ykR4kVjMjvqVhvb8jkNptwrySrpRUmsXk2Ue1XFiyrG889ExhVYc59BUpA1jTsd7mWxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5diCC8371gZ7GbksHws878UtmZEMuTGH964xtXM284qvmqx6RHX9kVeHb5k5WGgYm8DQbZ4hg7gWnp216JGruXYW",
  "key1": "334WFpFFg8mM8sLjLw6GuTxMna4X59wwwq5H9S8Sh2iJuGtW847qsTiY8spiiutMyAWD4tSEQqEpts5p6wy82vJ6",
  "key2": "CB17AJmXGFwD9LGUBaPtuP5UJ2i5sgVb4btW9izYyKv7k7V7UuBK6HHEDxhszxGJEUVgmJNnhmHTvnGLdZYQC1p",
  "key3": "5FqgAjzNWt7u45kQj71bTP78uEJxMyF8CMFB3mN4GLFUCjabgC6i67nuJyFdHjzsCXwBkBdctvZeF1j8smeCaEM8",
  "key4": "3EhszZ4Wi1m41JfLk54Vs7dMQkKjGAzVBLwDpZAqtQBdVpt7chmhxvEo8wiY6ASMTsVfn62H1iboV7u5ArfmSkUC",
  "key5": "4yo1AbyEWTobSCDmrGRUrdtJQ4HYeRTTDL5nJ9DYAQUNt1hvJpRUr3nMeggq9NTzhyv8WsMEkYmNgvZsnEhnvVWe",
  "key6": "5r77U7ymnJr9VtTsbFW1JD52Ksh1LwPzSyRDW1fDFHrk1Pn8xRQ1NxfbQeeVUi9C2hunPUrCMpUzvzTV9MgiDSC1",
  "key7": "52cbUfFrEjSmgQJeFPAfNXW43UQXc9HfpzJYz6wZPSaTxFD2cjbV9orXp65HGm9ydo8UMMqPNFWezdsdGMTgzryL",
  "key8": "2euXg6augDdTAsp2kK1wNLAxwi652gTRp5md5ouGd4ChjePPPFLCCC1Xtg3PuUqDNLVXuwSPpdc7hBZtm2GezjVn",
  "key9": "2XHD2mT6fZSShacEimUUzd3xxziLvgPRAT4hE5RrRT8kNKMUc8BzXMUBbcGab9qB84yG5EL6NZYg8N2wjYSbTpud",
  "key10": "47bGUGWpx2trwLQRB2KVdamqYY6yopf6gZUVKzFKUV4BT8TVvjgr4pqJx4sAR82Zvjer5kc3GggCXsenR4Q9uzbJ",
  "key11": "3ojim7e2d57yevf2k8xvD35Ynez4KSoM24tfrqsQctPbw84q5uNESd7KqWUZwaZN2w9k5zxSTTfqNK4FHxwkDVy9",
  "key12": "3q19yzoNVYQZpt57mt8uxERnzhv3LSCdmWtLvnnQv2mp8hh9TEkRPzArh9Uiw9oi5jM2azdJWjx3RvsZuuh17vFv",
  "key13": "2rwREtbCLgrEN7DQ7ipsWgqRfYx9XojG56G4TxBRcMaGnEQbmub9SNBHd9fLnF7umNwaZJbheCjZmapqjQthvf7Y",
  "key14": "vRyUreUxn4YSk4DpKdcKqpkuy8xZQHjLbCFQkBRiPsdCzQ1iGhbVeir3RJp2EBp8LUQV8vPVVBjKxLER1z35LMc",
  "key15": "59EMZe9ZtC2uz3AjNnHbuhBW7HvLBRue56wQg83fQDhFvTtAGZ3XggeoAn7Pf8pwsem3c991mwrV3Wpx25mopAkH",
  "key16": "3yJLn1i7SyLrznQqrJUYQcxvCCHZRnHnd5tv7sTAg9rmEDuKFTSd4hvcUnMcr2dPm1CXsy5miE3tVpF7NuaKBeEq",
  "key17": "2H2Zwym8fwvmgNzVyZjpxGdtKMdjqoy9oJ283FKqbQZt9s3NGNncNTdCdWdXaK2CFX8ejWbtdTUCsLKEYFGqa8gi",
  "key18": "DUtXLw9ZuTJu1GqR2EszBNCQCbTtw1GmKRueeevNc5SwHaqgczEVznevShTDyYvX6QUdinA5XbioSBhptbQiYPA",
  "key19": "3mu4VjP99bseieup6qpJnyLDkABZ4SHmK9dQ9AjGTJ5npY8WZvAyY7fEuwqyQPJmEbcVgnQE7Pp4BUDRuVMW69mj",
  "key20": "4ZDXn4iFdX3gTumRtUu6xojUN8hZajynRQ1PBuWvnVrUsSm8qrqUgs58GGA8yLSin5JCUgX123PrCn1LsCRBFA2H",
  "key21": "41zv4GKgsebED88w2k47c8m4Q9opnhhnQX4jahNW2QpwdoJusdbs1wr8BEMf4GACKViTCJ8VRHXCKWVhzEw2UQkR",
  "key22": "5C7mCmjRi5z3uk72Dahw2WTMjjKtHbdxMWnFg2RerrGguz313nN3j6yaevfzj5wX9dVo4MA7UATztcJQbkX9Suye",
  "key23": "5y2McguNZkiggMCsd83c4pLYzYmryEnELbyxA5ujV4juU8cLLJosZZs3FN4AyYWT7PLPpcgB8ouTUAdMXEUzmd6h",
  "key24": "2cFkHojkDcDRxWXGsgL6hA2NaHG5nKQUyNTBMwZreEJ6hBDhkxigAXWkaUkP8qjw52eZXZDAQjq4uYsrZRcKMTG6",
  "key25": "4p9XRC2jP9wb6RDNweaxkiAw9NzEptPzZBv3sdUcABFN4zFhcWcrtHR66KLLp86vry2Qj9GnrFek77sZ7AQc6sak",
  "key26": "4t4MMAX5wvNFGPTvHwHunyo1kmgwvLUPDvVewCKWueeWrRLDmQ1GgUAQrkHKmnw3rjFbjtwc4jMXMDNEgBJWR95a",
  "key27": "UP2kGucGKtPnh8qbbXdGRmPyPrjyzaQRJ9fXxBnj5MVxVgYjQsiuumncCS6RrA1wuGpae3Yu185eshgrCCLd4kD",
  "key28": "5p5aDSmNRQQvMqSFZv8etNaqjAtRi1MoDsc2qJzYCBkxXfNhJy7aofiHDSAjr1hv8UGQkcagxemGzb9PsJ7cPAJa",
  "key29": "61h64nBuZgEZ1JEWhZWBdubGEjjN33QvNVbsqmxQYRDTrWdmXqMLFHZxba9MoDfKMMZeZ3aCCa6V6iffeF6E32Cp",
  "key30": "3BTzxhFpfQPhcGCzMDxTHrXoTMpkrFAFmTQPcCYUgiQGci8gK2WPhN6SGja4NpJSWEL3V7GVrJQ7tXWFbsciaP21",
  "key31": "3UapRMR1fZDwnXRGqa1qmHtwY9JyDW47F1GBFcPMJTvDYPBLUVGGsatRroZK7GdjuHaHU7jV6BJzBzNtfPsy6z9C",
  "key32": "4xQ3M5h5H3mHVXWMLWtkm1y4Z5HvXNc3pxYtSizqkHk2S4up1Gxz71N7KToAHA1TMkz4gM5bhsmp339Hc4zUirHL",
  "key33": "a3mLCEhhKhYjP8FADXA7JaE5q7QGmJcZdfJKs1aU1NBt6D39YyTmQvTqdsKhwthB6eZ2VNGXzdxgH1Xhh8CNuHC",
  "key34": "3jb2EfByXCKCRAHNXkTuFX3ouWkJwSq3erB7T7YtCNvrefwKhkCTNEAAvNujBraSk6tQhWszrc6CWd4HsYgBAiWZ",
  "key35": "51TxXhvQVuS675A2LkPSWuoeRBaJp7t6Zo5ePWaPNgcSj6djAW63MffmaSDg1NbYhfPJK5g5iSAHgFDHDbgL1RxK",
  "key36": "2hwuRtGDJ3H8RFbF8Ru71t18Q1JBDDUkAUEf2MYerQZbT4iw4a8n6mkzVF39oVTgxCey8K4qf7oERYVFKdmpLv2G",
  "key37": "462eiQdu8f7yKG8Twx4hweqTqGsagGaB9GrYGnrfAyqzw1LvvWNLavQErcv4Xh9vPRk4TG6DJaKePAMwvWgHVndx",
  "key38": "3jvynML29J9dKpuhiWab3ejNxmxGjtqePMrYPYWszV43zLzXBUA8WvKe5CdYXeKUz1qkd2TytdVywU8gjRtPNUpV"
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
