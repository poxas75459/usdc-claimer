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
    "6dvi6BcFQLgtaSRM3b57pvBrsQ4ELQ2WQS7rZz3ww7WHBWSLKys9iG655mkyL32efXKXvLEXCD1c3BDBtCdu9a1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qx4biDPaHeXJhhZBFRNBd1prE2rUwwPGwkBw2FcZygyHA5LZoG4cCTnfBsyRTymE9widSpUiW7PvjVHHMuz49Xz",
  "key1": "4pBYPF8hfP1XQW9uqPP3DRB1SQ5cE5mjkyjQ62qSyfjP1QPEhV8kuhhFRxd6d1TdPm6WDrTupv6WGy3sfs8JRAdk",
  "key2": "5bah38JNtKboTKAzNxg344aqFYMjtYZY1ZA7tsfsJCS4vGjuJ4Tuxfs9vXaexudKYZvrzuXLcUCr6SAp6nafFkdc",
  "key3": "3ukZJF8ZUcfi6KqYdAcoiiGcrGAfyVYm2tj9FMx8NNBxA7ywNqEiKmjvsdVcaXA3VjNRn7ZQitWw85iMawMHoZU3",
  "key4": "2fXM7DcicrWZjGut65cr4xH8ruuuTE5CsUSgSToy3WC4ojFNgnngWoWadgNfdesBLTFyvseaFXZ3HQVGw1AxnixX",
  "key5": "3FdsSCz3HYqHjhx5wfZAjMEBV7rv3zWh7ehBRw1FnTqudX7DYXYr8DdXjUK8WGrJDbTKp32C3R2M8FSe1ozg3Gys",
  "key6": "4KL3jwHft1VocksiZEwQcTg53EkJ6gL7e8VRYmHj7vaQXfCenW6uDkNVtP6r3Qdp6krrx9oKjwZmyczKrN6XJBTF",
  "key7": "22CQsyVqA68osj6AmZzDhbFAHsvJEmhAFuEeHpUZMMKWUCnWxL7vuktJisq6SbD3v461eXw19WPHxquKHsMPvEmS",
  "key8": "GVhTYgT1uYV7SHaUNwsakfTo4hZmBgD8mNEMFA8Z7AgHYpSj3b7rRiXUzV22ZPkv6dGkpHgpeeLSGvuz3WR7oQb",
  "key9": "5XxkEb8yUUiUk8yFfh2QZtqQrXzccPJYQH3ok2u8hdfSuzg62CX75YSquzUVJtuu3LcGoqnwdicPUiwiuUQmoCGd",
  "key10": "vqWh7Cn1XAiZnktHYp42zTtnxNsWnejXeuUgiNrDAQUib5nVafaEozoFH23KePy2SaH2fPjsaLkGUGk6FGfBg4E",
  "key11": "23g2fgaTkyBknwXrj1ZueMN6iJe2QAURvGRfXWS91Q2zqZzk2rzeWnqT2LoMkBvxjnRLJ7XGZwFXtpSsQQs1Rbsm",
  "key12": "2vE26g5bQ6XYC2Nsiu27uM6NR6FSveM1ZxxxcHnDR1U5QvRhZZ6pL9CUftc31mn35vJMxu6kUYs7PdTkmoKEwmEf",
  "key13": "NToeQV1UNHzLfJxbtzRJfdSfpFZ5fCfwNnjqVCkM7hd8YHW8pkArehDw4M56CbVrJwHLdAuzTqcwU81AfNVM6PZ",
  "key14": "3iGT2UifRwd6ht6Adu2m8cHjDqMzEDZSqTD6AjpwioWj91M2tPjWvSFP4c627VksDFeecUs74vvykJa4gDHbsJ7Q",
  "key15": "2V9J4yPNsgumwDzffjNXns9xVTCTq1G2weJumwLCU7GV4g3W5GHzXbr6rrVwLrkyVsprZ7tu7ZzQQxKwbPcUCpQR",
  "key16": "9Tubnc2Hh9ihcxCP8cqKf6W4M3hbY7Kv9ZKbvS1b32veSWtcZamHJBqNBCoLqrSyPPLnavfFYDtwNqemUgn9AeZ",
  "key17": "4i22hNwmwdacbEGfhiJR4rkPMjVYfLpM4cgVnU7ibWo6btxLg2FkNuMbruQBxL7NU1Xy6kpiS4BedVVDpNdRgre3",
  "key18": "4inCccSw5jcaa8nirukKYuqQJaUk4DLsjopMz3xSg93J936vkMWe24J3VSqXH5HjzRH2DxciTVoMW8149ov2bm4t",
  "key19": "3GKhxKJru5aYCdz88gGAqMPnKcW4YUstjGYhgSqLfkdEWCoScM8ircoQh4i9APYmpaCgSH5BdwoeFCc1zyfCvDYD",
  "key20": "5SV5BrN9Xk82GkV2xZhBDjS3pg9oUQ6Cy2gq4DniPmxfjcpJDxj31pMJmcqkMYPqs1PTSiRUNZ11b8oUGy3KeCRA",
  "key21": "5uMcwGyVTD8q986JRwBbZhJ18vyzHHkNt8PNMbU3QWAHBuzgfVN6Lk5t4tzJ2Ggs32cTYid6faqS6E1SWk3HwvkP",
  "key22": "2jV3mLgvVVnSo2bpAW4BNQx4SZcbEejv8PeJ3KyoicvSJViRt7VP9wAyhGdKx8QaavhGWWDAJdAwpGpWCkYw5HZe",
  "key23": "uT2BcaH4FfbPmf4BxH83CbFkyifjRRAiZuu6mXkyHrbZe7cgMLRNpk4UfTrrf1biMUEy77d2tiknQMdCDXTo3wk",
  "key24": "55zMeoARKPrvndPsAPeLzCXqj1WiVrfsbmgVYY937aN7Vn6EuXYyP1i7FHNTUyHLXEqvxSKJ3qC5pccB5e1NcG8G",
  "key25": "41G714CwjjHybLyNJASGTe1DAsXJS3rR2WPbh99bjmQ7Jro4cn8ZxEabtmuEsTDi9qQG9cVeFKg1qUjT34m4vSi7",
  "key26": "n8BAeiBsBnCj33JgeVqehLdGV18HPpYRFu1LmiE4ySr7GRrKqDiXJwsH4e8AVBJ7PMCyEKKULNQeF1zZyTih5St"
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
