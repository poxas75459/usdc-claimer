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
    "127MDppBNkyEAX7YF4iNXPv774LGU5Sxwyey9zQ4XQZtxqTLdcvRAdcPRfJkLktLpSTpjGs837FxmiwcUjHEXPHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zm8nH2HPVDvDvHJhC8bDopULcdSWUvrtFnetkhUVNZpLid93B23c7gXKzsvWKb5sCSJ8KNDvwuQbzDmonmHFR5Y",
  "key1": "41hju8PZuJ9jauNrD3C96ua7bZpZyQ1GzcKc9F7RSFLhrPsrVKwcAvjqzHSq4WnSdvN5LKdwAG5TUewM57vRWWTQ",
  "key2": "PApTLkKmQcZi4a93qBUEN5HKAdPUayuGLQchaqxn39MPazvsFFbtoXbkdYT4DVtCxavGkqqo7yxB955iKnUUm5q",
  "key3": "5AJFSMex7iKGmDCNa76WdWTWr8Erc8aRkE55PdqTDbv3oMyiPSspa2PETdFv88DKrsWyRezMo6iQerEka6GT569G",
  "key4": "42UEEx25uUXagHgqMha9AuzfUQv9gnBtqfLF2w2Tpe7hKfdqDQshCebF7JpMrafczCudPmhG5EfjJenq1fUzTzdf",
  "key5": "5pDRQSm5gb1o3xxLjJ26tubwbCRfdnBfV8put16sw5tzWavkxcHWGWWTnRTSiEVcv9RSzFyMGjmxedb1wcwVQFoz",
  "key6": "2puEvmEUt7oVrCRpkfWRLKku5Q3gi34SkiZ2bTxszeahepURkrBKDC4EyhonP7XeEMaYUoYM5Swb9QEtviptax5y",
  "key7": "nUUZvjdXrBGqyb7vYpVEyYUU1zbYvZDxrCUqKhZn5PFA9P4wGBQk3W9fUMXKJT9RLduYJj6kpRf7aGrXmFa7nNd",
  "key8": "W5zaA572MUUNyEigtdaZBBEfmvug7JE88hGxCx9K6jCRie1DPvPQht3ESWZwx7vqdcyGiW6hiqfdSQCwFoTTYjd",
  "key9": "2UT4EazmPuQoUyd7hrzKFnfKByroyhnpyZWNACgDMEz4HtGwGEaj3VXcHs3t5untcqwoTgtwNEbB1qfgnifdYiRK",
  "key10": "3EQ7ez6CGkqzmHooKW6cYHBCs3uNp3vXbzszXJVBGcR4VFjNWmCNECTVqrHJNcmb75JaAadK9hsKggHhRnmAPuGw",
  "key11": "2p1DssYkDQLPQPD9dtAeoZ3ZKjmnwWtzbSzUviQqRyKZp7LRHM12ejHjiSX6hgHjzVcJvxrv2xjg3Nqj91NcGPN7",
  "key12": "iEG8e5KSsUYcBivNAGuWWhEbQCP3qngY5gc5b7vvLG26t3y4kLvEex3ttBytvueCbp5jao4bit17app5tSquHAQ",
  "key13": "3bqRs8K9QdULM5QZDhUzZMDeN7acBUrss7AXUd1w6EaeChfhguAZ9RSmjyYiBBp4W3LbMWbiKnmkH7nXW6WgycwW",
  "key14": "2YCvmPWj3UbgVByW6rSpkZNYhW63BSYsX9L6mWGk833s7aLoTx7vA74zzCduzLspS2ozrF8BUEj2Mmhatq7RXo5g",
  "key15": "4eQHjiwyyJcZDaeGMPGZtQG73TWn1UUzPft4pgT37GQYfCUbRfUWY7mMhJGhpSwcpqKh8ez3iN32mV4eEsngESLu",
  "key16": "2r9khcDZT7Y7776F1pKamTnVXrGX9AVR2r4zpP2QuMyHFMt3J6JFfPwxkuCZqUW49FSrsj1e7d1CzQsL7sxvVpt5",
  "key17": "5bXHvqVVTbaiY4zH3GULVbfcauGjA2ni4Rq15Rb2Xgi6tPhtLYThcAoye697f95WHuVZxqf8pq75vyM54CpVb68t",
  "key18": "36URdKF7hL7qcgXQr6Dc7JyRRaEe82g9jXnmk6NxaDkDAAGYfpuyx1o5r33bGhUPhhUrrQuSjP2j4eRq56BBSPWC",
  "key19": "2phdo4eHN6Y7yvH65w49hrsmX8bXKgCov12kG1Fgss2JYuLk1hoEM5BXbvBynjuGzm9NuZToiEttRWmVwZNWWeYg",
  "key20": "55UL8CpF4BsFj5J815sGyC1BYqbtMQLe8QtAKEseFLtenHJVW5nvkPSug8r9ot8rAKeCtzxqQu7EyH5cq15twfWf",
  "key21": "59HtDkfVZ1pBNooVetwViwLjV7e8YG1XfCWNryUrTMLTog4ykrHUa6hGGdBExma9o4eNpX5Bh49dCLCMz4JtrXCG",
  "key22": "4wqiN87CnzDDoBBjbU2t897xnJKNCPwJ1DLnvdtwqHNFa8E7YppPBvoVKuRXrppjbXgfvAkhrAJtnnLoT4KmXGN6",
  "key23": "38HHqTASuRLGkt2nHoNQHYeCVzfXp8BfZXg4u7xrScJSX8VCe4WHDjPAw1VLj9YHyu8Sw8x9hQM5PhmbCCRiEJdy",
  "key24": "5RYKGRMbackoHNrmqr3HnVQ5znq3mkTG9uEq1iPpwVeXaEYkVd2wpVEELUsjmfRGHVrPMNpLN1FU8NhjJqjhcaiK",
  "key25": "3nngZh9yek81zNHCALuR3doD8ZL5JbPApJxeQW32g54ACetVTau9EUPpYBwmCTpp5HEJ7FUFJ4bLtEUtY2ZrGGPa",
  "key26": "5qL1YhL5Dh3sQjSAKqLufpRZrLAohgpFJ8NuK35oRBvU1DCEdh21qAVtndvSqGAtSUgpyZwCEA6mK1DqkNjwA91W",
  "key27": "3pwrQgBHQrBCdVzVniPUmYqNXELu6R9CC8R2jqGJoqoQ2b7saqUSXAijgyauAC4XLjG6RhMZZfe56DfyjkUf8Gw6"
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
