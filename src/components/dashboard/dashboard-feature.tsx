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
    "3QVaXuoucT758YdgECzaogSpkTadU7eNFX7pQsw4xnsyjSY5USYxSGEh25TgUGHgdNhuf8TwViTvxDKjWNirPuk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hNCmm94AJxogXxaKRRLSsfvJEgKsBLk7riSg19fuQKKECqe857FXbtUoy4XK5kNBEkUvzT71LQU99Hu8M7gFvvU",
  "key1": "5M8SwYYqUoLYwH95iP3Z5DaRSE37MoSUZ7y9sGDCNo4fekjkfUxieFhLu7kca8STjcdnf5BkaEFfRNwqKjKLEU51",
  "key2": "3HunWi7a1oGSAC7cXvYkxwvzPU5qr8jxnQzwWhnSLB79wL7vrQLVxeM3mvHQLq1xzJgT7HWzoYahPZBvG14eHQrD",
  "key3": "32zei274xuyJpgpSC9pH9UWJk9QyqcDfZ3gSYeyBLbzn17C9J7WcM8vwnyJXyPAMFurNTgAhLk8QyLDz4gNf1GVn",
  "key4": "2EMytRVVxtfkEBnJgTzmrWihxNPnyfGgtcFFdCpu9y3VGpuwyDvsPRh1bs1nff81vYu5awY4pgnsTF4SrUsGkByV",
  "key5": "5c2CjFYhL5jJ1yeTXftJ4fdbWBezpjTuQC4QjsbNyHpBc9NsMKKnKoCw9LxzCMrFaYpz3M9ig6BeyZmT5Dp8Sdvg",
  "key6": "2aBUBwkiQ438Tr6vhckFiPuLZd9X2mzjqPnbe4AoU1Qe5YL14EkkKqUNhgUXepjsGfSJAC5j15cBGHFovj3JSukj",
  "key7": "2G3HhhJ7YEySm8VWP7KCkeWRh6RdYfqkGgyS29Q8X9mqF1rTsSNy5DieNMoUSE3GFWcpkRBM2DuZgmwfDtsN67Yi",
  "key8": "2kXWPTAUC9yFDJ7LfAQWpPVYHmzpGLcFhPQhGHgGjto2USKJFVhD42bRgWm9HQSpJDvutYGkonfK4njr3Lw3nvfJ",
  "key9": "4cuZD1tm9XvqhirmZ6RFBuFePqmU7NFF5AaBzo4WKb78DgeACUiN3UkCE22eausGdi2hTPn2kZpoFoHWk61apo36",
  "key10": "4ZSf2zkxtpfySgeudqjCVhhkPj7scMQPqGntCjcrVsgKfaWewsKJzdXbpq82G4Y4GuiGSohv6MRc3x3rpxmgUcut",
  "key11": "5r9kbcgTY47MXKoDTw9raMhadj9nNTw73XNN4z1UhJcAhCXDayVpi3eg1e9PbYxgwGQXamr2JfaR4ZWU2GbNDnrN",
  "key12": "5Zp5wQcMe2WDw3fsw81cVUPkXU7mpQNFXuA8tCLqTEgvFmVNuG7sb5EEUykN2Xp7BKE6ey1Ky1eaXfrEowvxmhKU",
  "key13": "4uPBMQzgPD8eYyLvm7L9n6FbiP47V1w7yftGxWR45nzRYqYrs99cQQwpgeG9Ws5w5mjj4eQ8gtA2hZRnSagRYNgo",
  "key14": "UybPpMkDiofCB2Rrwuy63JsiSyGvuYxoQcj6C4Y51R7jWh8DgJTnFh5fq9Rdkf5ycqBo1c1f1EPwwq8DCZcenHH",
  "key15": "2FvNLAGTiCqjKcHtrN1B75JMyDRadTM8qKYqDPuzKJSnmyxV42XfTWkvfRmpuLQWWYae4Uc8SaCQ1PM3MiXMs1Ze",
  "key16": "4qpupTcCLyW6wsdebuUCa3sqdxVTKCAmoioNjbM3ivrzX16eAPPYirjVko7AD4NbFdcFoS7tkbAUdxBDW1JG9S7B",
  "key17": "4H8YNALnZeygwidjVY8hhyDDk3wPBcfFyWaeZxyF6aVtb3s6cRkJEtnLBszob62WjkD98nFnGdoPrwjBuKdQJdoK",
  "key18": "5V9dvahcVhN6RxTe5RBd8NH7egg9o8er4BjYs6ZpTFiZjGufZMUcrYRLz6ieUnJ41kgfkxTdPFtSGkXMZjQcEF8i",
  "key19": "4fso95co2xk4wZsBtyos9bXTHrVoAEMXcyN4okzRC5wYowKgVbzuPFCtkcgDg88jwPYAFbrjxqCGh7jwt8Gd9i1R",
  "key20": "64954mpKzMWxffHV8nch9bG6Gus29EAe1EFUNw1fLSN98EDZcVD9tLqipczrYsxUcuD7qyu1pfiSTub2ZBdFsz3d",
  "key21": "5hm6m3viFKZnvE1Gm255d3Ck51RiTinekCFTTfxywRZmTUmsF9mZLJ73iY2euiVBtcUpGekdGWWoyEK6xjHzG2n1",
  "key22": "2s4jG78YLiZNVqjLjS6Q9zobV7iwdgVMzM2MHX7Yi7Ho2TWDxpUZV8DsZa7k6tnX1aEmvLhb2U3XwSkK99n8jbTx",
  "key23": "59m4u6h32bq9L2QfiixCX7G5b7Yno3MC1rxBrPcMFR6aCjJst8sSJSEZuBaq5x1TQqSzMucJ5HetTWPKnuEQsJzn",
  "key24": "5Bk3L6r98mwppxBTEvcmpu8Jjksvje3TTDBqRRiQzrhQESFYGJ26r2B5UHbmiKCEhoMsQy4ZoeTXFNQdmv8hLg5w",
  "key25": "4Pd3E1o21ViKNdNy212E5GtFJT5mXo8HHxno4XUBM24kMBGLDQhNpcSf5abAD6a7DXpMZSTuPjaEN8PnNUVpd1w5",
  "key26": "5ZYY9akR9asjG8YdNxQGLJ7eHWnf8toGLKYt962b5HiKoreojog3wzofoUgqEwZ21eY6TM9WT1s5rJEiqTyspN6u",
  "key27": "4ayhMKdghmBWbXZKY77pjcCxb21F9NPZ2QvTNQxrwEDvDLUBenXnXu3NephvNPf3CnyAvfbKHjCbQfgwuUGL6wFw",
  "key28": "2sc5xXzGut4tAsBzwg99mEAhdKKdt57bJA5fo3zwTzaVzdmt1JSB71TqBASVs3apQZsChzxmmxBtvcsDhHy2UtwL",
  "key29": "4RZhxsju4TD2XtoaBku7G2GarJ2grNeNmnCrZveVBxU1qFoLLLXgWes8ZBXzYhdTndka4KepDhwz8XbuuaivDtVf",
  "key30": "4eNevVG4bNeibWTnvQzmzcXvPKVPeY7yuaA21ahFGCas6WVcKjKg6gTeZ8A7cmBA7FJuvJXBrkNZY8oVteFGQjbb",
  "key31": "2m63RcqaKJpC7Z4ejdCMcttG9ptrcCD7Q4JLm92wzq1oSeU4x9KwLydCRDXCHBj4gkS7oZmhe31h6SfuUN6VTMtU",
  "key32": "41dZnasVfBmWxcmXRk2aJMy269p3hVGbciLVp8bAeUSBgEPAFogDcD2eght97zxw54DgN41JWsCdH1rrUje9ZzVx",
  "key33": "3ztsy3QZyQZkGffGRgUHqQdQn6RhqrmgTPme95BPyNPTrxpdHbBU545dAMfYr4Nq3tKfcrkUXXX51PFFkHnVfkZp",
  "key34": "4ouBaCwK8QemUDbvraSYj7sbgPaNjQX6GC5RALJuLpLXdHkMFsV1UnM7PUFJ7vcHZbc55oVYxP21BFZs4721Q4PJ",
  "key35": "4oBjTNVekxd7iekVtKw4pjCx9W7QhYcddNMrwJAC9Aj5JDzELSW7nNDBEiVXw7Zh8Qi1qEYg1PcKrZRvp5yAxkNv",
  "key36": "2YvcBUjxHJvxJ7zkEnxGgBLHJEUEgf44tkvLwcFeEy9UrKFr5QFE5fu58EyBrUkvFRXsEosK3T1kjEn1CuvfdyJS",
  "key37": "4PAPPXX22edcYwZ2Jkh9LEofye6UebZgqPZuSM5xQGVAEjs1kPpYHTvoEpCNULkypSxETqJHYBvQeabxNn7QQ6y8",
  "key38": "5gX7HiYoTBqPNnb9Z3hm3qwxinBnBM5PKRcTosDjxbRASM98KoQ9UMJtnqJQjA4rB6jPCwBsL2Uwx5MCxGbqfhUm",
  "key39": "37BoQdJiXmsgVg5de2c65oUaVYXHEYick3HrP33u8GmZSBNKfAQXdnfQSwL5GrMMhhfvwjsq2qS4YUjSvpbCBUzs"
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
