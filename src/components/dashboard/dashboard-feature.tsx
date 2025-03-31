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
    "1258o4GDJHVoYKnKNTB6AzFKuhcv7r4WsNHBZPpEgGbCxZyjSLMoUM1n69dhsSQSjngFc8FJxqdmyTyFjLboQrqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eiPqErLg6mLpjukji3obE2yXkk8ewWb5MhyDbojgpiybVYMWwsLPHbx4SJewqnmh7QZ4BqHRM3NF594LBnUFvYW",
  "key1": "3HFyKUAyhh5nHij4Pyxb9AKfxPTjKtkR4t7N46R5UuFN2SNwVeZHsz3QgTCpbrN1rVZ2AG2f68VcMFG6Z5LVav7v",
  "key2": "dtTWbRabTLHijjtydyNtsQ2mTgrEd6wonKXX13RCjW8JfymBzRpKkW948inFapwrvqa87iMYmHHAJuh2g6i1eyv",
  "key3": "4f3xPynd1275TToqJ57ALQ4Ho8ywWTkqppL8KAMMLnsmPsN6gTktzHtn36WWVNsvy352gwiPibHpFqF5ipFFcHqR",
  "key4": "2yEeTV1QftzXtY8LYHhxB48dLEZGqovHU8cvqHKoDVuz9dgnmwkMoxaKSPeTj2yuRBgsazCyK5ovcq1g7HsBEmwM",
  "key5": "4Wpu4kEWaqVM8B6tifFobKtW54395KEZK8hzb4rCyJVhL5QKXRMwSmwvbfD9d1f1v5i5ML8kRtgEqnryoQb3QTju",
  "key6": "5oDEt4cpesYSaUDSsswFzkqnB59aHsPRHGCyoQr9ZjGS2AGcXTxeC8L7dMCevhhSABS8HH8XUdH1SJxZeC5An3nx",
  "key7": "3ZEjyNLvuPXLLCz8VUioEThc8TyfgiyctP5GwpZ14SnoDKDMvCTKVSVJcbYKJLTvsThE7gHyWLVjzNvDM8WkSbsF",
  "key8": "23rkMhrxw6Z4q9FZAghANMUsaWC3VJtmc6GNSqyDfTVyatAUtXPUPhDLkyv9YbeWjNL9p18mydEVY2coJzxcZoJt",
  "key9": "3JHegL8UW46VN6pAM7vxsqrnuG5kndwrCVCGhVn6UchndgLMzM9M2p2BoEM1Dd3prJ2StzecAjJLmWCeMEL5PPyN",
  "key10": "28SQZUvYjSTEKzo7s7hrTuNcENn5wmL1yVvM7VjFg7tJBmKrCQwa5XHK7T5Ht8aL37LNKsJED8LsL9WFrb7jehFP",
  "key11": "k3u7juukpZTf4nYzmR8vVuFdvBoVZtJZFwVq1nN7iyqaUYnPQpE2GTtm6bX775uRcmyUgvHBLLRQ6Yy6rvUGQKy",
  "key12": "29xjZPZiTgp5nSYJ2eWXVddw1L2c65ufhwMcU1VAor3xTPzdubJYgupF3y5Y8CtqfJtPgZJ5ih47tnvZom2uBe1i",
  "key13": "443FjjtoffeUsF61XKeCzJZc7aXkPzoZvopjfnzZUdKzZTKwKa7GNPH7xHdvMxnt7JuZaGWtWuzr3HEKqHQJaUVk",
  "key14": "4wBWpqJJ8osjdMBqipTj7PaXKrcHpPnt6G4PbrYPoZqq1MEosMpVivfxtFQGBbpbd1VPrPjKErWZrswZGZHvFQhq",
  "key15": "22zMGHg5uY66kHMNwerrG4Q1Jphi8DUitPwbNUBf7d1VHpAWFiSsYMLGzeH9mX4MncvdgqfkuE2KyGFabWdq5Avi",
  "key16": "5VJb9Gs1wKbTpgRCUxAeaMTRfRXSvGWg333shPWhTTsJ36HnKcD7v5FjFpaR4auSYLePKYWCkugnwWdPBEqj1YxU",
  "key17": "67rWaS13YaduUKanrbBTHciZU6oV4b8LtrHCdcjKmWAMsCuDAsq4xoc8Yjix8ckxxE993bmJk4EWAe73UvCKhidA",
  "key18": "5tDB5HYiph9nYJDSypk992YrK9siKvaty2YGE37kcLntNu8nfjXnJf2b3BeVFxvQ5bTzbtSZCdyg9MqpVXhYaoGT",
  "key19": "5YWw5Twj8HmgbFwaiDkpR1VFuSV9uNosFPKwZdKU3VNfbr3jHpsbGEJYaYXHKFkGEQpC4SWXBVGmiJuDicKmmU5N",
  "key20": "2k5wbiiE76QFUwPLpmt23TpFgexJQLJNcaZPpA6VNpCCGsLpvrz5L5jNv3jCrqtsJZje8dF1WfwrduuEebMmd9Pz",
  "key21": "3e3YnvAtAF1GiUdFjr5P7AzzG6TQGV9m4Vy7QF7L4bQvGUFtp4f6aFkqBJ39XqsjVVG8Rkcir9i75LRTmmJdv2Mu",
  "key22": "63iKXtb6F8P8cYqgoXU9NRYQFXzMZW4mj4ri5zK8pVt9XdCay2oVZqLS8ikTFEvgi4JeDV77JUviBEdn1QwT5acP",
  "key23": "Yr18d8Qt9U741GCeHk2eg4a3dT7mmPL1Nv3XLKcMw7jZGYcof4hFpF56nadWfxW4gstW6V3g8CkjtzP162V12nB",
  "key24": "nvjXbmXkEk9S4oZxoeUN9jhrJZ6MvZkFiwgYQz7xLUdFfjV3ktD8rANEthSy8StT2eshyeQkRNcWQMgnXwQ2Ar2",
  "key25": "BciAD29abiYfaV997CToLw1qqfnTvEtSCGNQmBLaWGXEKuRmTA4a7XrRFNFAd63X9kNzz5aA5sbxHCFXuB3F3Nf",
  "key26": "533DLSGQurje3G81zB8aLEJFVAyEnhshjWt5SRzJQ6tXLVGV12UDFgQH8dFNj45jR164pgBYjavM1exV3qoHHWEq",
  "key27": "BicSWed8Kz8nmQ5yS6YjCHGomyDNSJJvFArUyzVPqjG8LYxLJzJeLmMxirqPxd1frvVzZCvczcPEEMM9LYYaSGa",
  "key28": "3wmaMUZRDzmcdSnrTQVsX2t96FDwBqmE15voa1xCui2qqTHunhPqaJS6hvbeQcqtH9qGhw2sn24CVAdUgNwY9Uyd",
  "key29": "3nETT18zhkpJZbZzUgFVkdRFVjKYmCZtyVcfd4VQ4ym386FTQtg2anwDKydqy3hX66SGsawsyavpweZjtDqg6JGq"
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
