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
    "wS9zPK38X2q6UAkqPE3tgGR553HiCaoi97EvrnX3Q9Qw5g11fvWtkPMf1icLGgtysP5Cacje9tce18agxtPuGjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wcGnarCXz4NR1omqi59s3apEMDDWHRytiXgoAfUcZFEkbMAKYfcSfxNbPrjP8CBv9MnHBhhEzks1wriz26EmUPh",
  "key1": "36eaAEkDy7pq2HZLUfrVFUZVzu1WYBYnS8mqX4HcgEDFn9428oSxGUbtRpjmi5iSfKAxxnDmS83mMmRFxhbdhUGg",
  "key2": "3PUm8s39SSGkHf8VAYn9TmuPuzLaa2YkNeBTWiKRCEkpBdwiAB1k1JJSMfSr2US2XZnEuDFDYRS2KuqSC2a26dGW",
  "key3": "3ZEjdQxGV3JEWVtVcmWKvx73TXxzxbLEp2x1NqjhvdoH3BDuijWmPK9BbPbEPkZ4LqdL6CKs1db38Z1ri8te9nV2",
  "key4": "2tqbXtGESVAHmhAkB1UPHsW7x2dTXX4z8qd2QdqVKibULHZ2uhAfj8vgeBJaVhzsA11rxdofHDGAGmXQiuZrRXNi",
  "key5": "T4cQWCqn1w1stcuytyHHCcbyRGfYNMj5FedpE941h9V2JU824EAqAXc8Wv8sKiUux4By36XQhwjcBitCPwvdDg9",
  "key6": "4v3EwkMJn5hfcuJaa8Uq7MK1U2dxLyumzNEwmpCmPLq5awDoygN3Pu57RQfGUTf4MwJqUAKFJiSwrsRcTCAEaqtN",
  "key7": "2QjNiZ3EYA6jzHDvoWJnd2eeyf1Vor8qCKPKyUz5Tz2SVysbzGDokvE7EZ5mjoqBrcpecX1j74cizcnCmaXiS2ky",
  "key8": "MRMe6CY8wqGgZ1c7nxj9JPdhyeNXH2EVBNzThKg2YpKdEsrez6ha66BLLQHuXT25VAzgcajtMa55yz4xpAYL9Xv",
  "key9": "3p8ELf5G7Lz9MSfRrq2pA9a1FA4LSAsLX4vbjLX2hdWsPfGzvnVEHuWL88cpT4xm4ryAc81ADnGrGrUo6oxEeBME",
  "key10": "4bNvwzDQwcmkXNts5GNqD6vBH9KaSLwkBATYr8WZuddsyuyzsdmUkWkErMu13h3pajJkBLBikHfwGh5McGGm1pKF",
  "key11": "3Sw1h4SBYwESvzgd96DMKmZkGQcKJbxNFFPB3u6wziThuJFV6MPHqhgE4V6x73crhV8NTe3Rn7S1fVucaaGxBdM2",
  "key12": "YoWYqehw5WFyEamqxfzrAL1T8Cc5hNPNpdhj39mMFHKjFszCj7gwRieQVoCJZjTA1pEi5tUp9C4mjwS7yF65NDL",
  "key13": "52gPVEamMrzE16UEpNr4LpYBehgL3iEnSCk9x8cM5EwXzdYYuukVriuE7uvzY7cnj5xKjXwdFwYJQVo2m1GbFYfv",
  "key14": "4AdXHFHz1CZeSbhPoMpN4XmnSTf7kyvcFyj65jqFAyaufDjqKX6GykrVLP9bxzzGxSACTd8vf2FuSnvCaepLBB1",
  "key15": "4n4gMGBujk9zqQWEtKkRRn6WKzTEHRrhaY5XNJ2hryYFGMgSh5DnbQDuQkAuvbfcnZv9SF4fkZ7E8hpsvT2BLsao",
  "key16": "2FxBJS6DRtaA6tkDk8XDxHGMPHHndAsYdRiFfZfz7NrF2bKmgEfvrHmL2uXWYw9L7yD3tC9VyLkyBvaKbi5TFmaE",
  "key17": "2daeCwpE9wbK9afTQgXt71ZzUNGQmLrxEpbJJt6jCHjngq2iKzEPGSzvFWjKb9Z8e8iBPVuvfZD4xRAwwsBe1Yfk",
  "key18": "3g8pRyQ6sxpgZHnnhtF9iW3PaAxHRHgcg1zXvwMzgMvcSpgrxx9816foLtBD8XL3UUeCYeuDK9R8pppasYnkjRFx",
  "key19": "5XcahLs89JfP5B6GjbVGUNb6pjsSdpV1piFtWcRX7mjPEU7tnKDv8v12wJBAGeq9WRP9AHSutoKWe1dL3m78uWvY",
  "key20": "3soXrDBPkv42odkoPYeqtDxEgZFRvmBseiFgg1vBcYP46vDUjKdyD2zu9WJRa6f8hVbeBgkdVdQdwcYkbAjV7TDw",
  "key21": "3xKbJ492fvGfMP1tRR3nQckuC17hf1Ph8rLAfWTWJrh8ug8VABGX7b1kitfG81UyAfkj6BFuGNkhPGr29VDvwaJn",
  "key22": "3hJH73SaRJdjNQVWLRLb1jiBhDgJDttBFsYv4jexTNy2R7rC2eRLSXuYLohT3wscEM27p57t2HnQb3BuCcGRLX3Q",
  "key23": "3v5a7ZsFau5Ds4nExuhXUyVL3p53MENEYznpX7DnUaXyyCcAPAY96WBFYUs1EB2LFocBfBb2tMrjeJ8FQmPGhJfy",
  "key24": "3ndneetQDfQ9CGvBdbtXAKHHDKfk3VMRoTeTDkonokabqn458eWaZ6xS61tzF5cXW5Cjk5sTF1fJmEb5uQhiT8Ar",
  "key25": "42T8h3vhfJiY9Pv6TdWE1dsawMZmvYJ3jPrtk6HSYpJuBRr1jgvJ6eXdEoeQ2aLtkzFC3SbqTkqKvMg8nirYHsZL",
  "key26": "2xTcJT9eTwLyZbwP4NXGJLL8KyLdrBM63CeBPUawJBgF54YG9kiJNoWYRX2XdXHKv4d3rezuwkrhFp24E3py59cW",
  "key27": "YJH54NEH2SvkQDrHiXrNGXmR1ZyWQieMc1Ft8veqTZNzeVaoBjvDXSB6siPDbGG7nxN4LjkyJ9utDwyBTcRvq8w",
  "key28": "53BcYAZUMaE72zqvEj7HawWmpATJpf6kGcKV5rzJRcg6tAt7rWDvEM1bQ95FxsedfJ8R2qP48FBeR7sG4o4x6m6x"
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
