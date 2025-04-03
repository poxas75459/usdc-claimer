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
    "3TjunBC6Xmrzv1dCcQ1evivVST9CheALyAhuAj6kpX5NWGoN2TyjMgToCUjYEEMJppboCAQSE7YvMdZgsp7vcuGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nU7cFBA2xffVPKXMeZDDtPwD6wd7LLf9frXNKGA89oCN3DvJi3Zcc63aAJDioMPk6dcRhZ9QR3TkvcnALNPmuzg",
  "key1": "EpDdUVBSfi3f2TtSYYVEKpe5WwGe3hXyCpUTmeqYCCqMSSVNPjoM1egFyM7wvqgzUPNZh3dQjnXMfWyjRGUuvG1",
  "key2": "59pxRrMdwSHxoMbdz7rdw2F7AFamGivFo5h4tPkKLhbC7HANCm1nGJuwa5Q7cVT6PB5vpEjD9zX94EBcWUsUW7wp",
  "key3": "322n1BYgJRdDAtUdmCVeS9duKdhs5FuJcNBFNwHCA4vgLLfTv2sHdVndyz3babzNJAAF6t4oG2zHeM5u2ACzDV56",
  "key4": "7YCW9wiFLUBz2iYguhMsHLwDyYqjSXGSyyhXbYxoBujLGAG4hXFRE8ie4Z7ZzdmgNJm7VretBMV1ffwsfjVY1XA",
  "key5": "2ha8XHk56QsWoBfLgG5aYkhoey6E26Q6ua7jvp2ffYYQfAQ3mBgpioiqy2nroGgGU7P29Rk349WrZGfQvwiNiY1E",
  "key6": "4McKha6LRhKjaGRjR9PPocgk77Y2aEwF5uxz24CHRHyyv84tSZ8XztU3jmciks5cv9tRBF2bqAqcWGWHcqQ9KKvu",
  "key7": "W2MjJjiNiGZzZi48CYMNuLGEH1MUUZVnLBSqoZ99p3JRw7aFw8UKor1Fk7uPMbRAtTqzmmuoaFLwgG119yWtD2G",
  "key8": "SWkQxvsThyx3nKRtAw6hYWbSnfTgyMKuP4aZJU3V9vYomJBqiEYh4rEdym2SRajwf9h7Mz48fxeP7yXd3F5CCFs",
  "key9": "5uTDf3ew8ACNKPoHVmKTpGXF9ByGMYWtgr9hRnSK7ECKM5zeTqNs33BtsNHGUkm88UrzGqYkF1TYRACeowxg199S",
  "key10": "237nn48eUhKzvB8LB2JMbj1ZDnK5NsvuLo1tQ34bKzyTogY3iVwEWNZ65njQbGViyiHfyeP6dxhobb7Q9yvP37Ct",
  "key11": "JgdbXqPKgBABNguJdf52dwM5V82QgRX7gKXhWHQGneurS7rNkkpTSy9qebZdo1jVgM4QQGWjFhR6YBkpzmzjzqq",
  "key12": "61RJx3c5xkGgB3V7opGkXaFL7rznHRUffS6tqS544U9jx4mtGeMZYfX1Hgo7jU1aK5v6DyRnh3prFY4QeKEMhLXL",
  "key13": "4AZaRx1m1A3cSXQo5HbpFJR6nQPQ5Uehky1fAf6xDokBDy4nUBpn5uRpnSwTgnByNXYTw96uiWumnNHqfVRgpyCC",
  "key14": "sC34it5wuVwJvHjVb7bu6dZMJMdaHfd2GqKHKKsgNjr6j2sL6VzupqMvvsXtfQkFMP3ACd1i2H9MtvdkA8Di6hK",
  "key15": "5V4P5wdgXDP6UnoZQr6CArd2Z5vNmahoe47efKf5qRAjKPFTb8fUBav2BNPQ6yGtb7SJ1sb38tRqFXmpbEeJz3Dz",
  "key16": "3pVkqxWh3AWCSUuVikCahuRKmot8cBmoo4Us8umbxJSoL7MDdg48YyZEWgovhQ92FQtyjTbF8bGpmRGvUbFyrLAe",
  "key17": "3LcgE1LDmabGa3JjnKZA3BnEhjqeV38NvGb5ouZrtAMTru9EF4tafDXE72uwYPd5yRTJ3UAmToDhefuJUjThASBv",
  "key18": "25rSSH7sZNmAJ6N41WAP4KuursBd91FEJFe1T7YiMP5HDVGfTznyzizsG25iJe537hEUQjVJF85NjP2BDck2wq6a",
  "key19": "61uqeNXsEcbuaxVav56GDBaW1whswBfEbxuzduKQJoPvsWMApKKpRyHmPw9Ko3ay8bA3TTf7zBrN96ja9dt7XVRF",
  "key20": "5dx2BEXMSBz1nf79kRDPgCMcZHcnA9ehWhk8HFBHVLvd4JShmGf4PnSQmht1dD2ghT3VBvnt4KhobzUseK3zor5e",
  "key21": "4AbKMbodqhzB8snrwNxfJ4DGScLwv2a6qQReJgYmE9MgBmrCAwXV3T9ByAdR1tkSKCvwoFE5vgyPc8Gcg8NdbUem",
  "key22": "3bec5ewtjLJHE7xSoaYt1acuy6nS1mtApUAaXwEiAHmRRAgoJZXKv1AFap86rN2ejVvCkJK66N46AZtM2YofjdFY",
  "key23": "3TAoWrRJo2qKAbjDrzqCMVFnj8QEUKcD2BkDuMRhepKusafeLtSkbGV5nhzpisr52SkHKEyYS4gHu1pfNTyhFcGN",
  "key24": "5rTBrxZR3brpSRhdKk8Ewx6ac3kWtnShhFvtHutA7pxwkmTJuRA3Ht4r8xdws7TshCsDvbgt7xjQWA1ax59JLukC",
  "key25": "5CYM3Yj7nxFo6JFsHY1tHBCcyiZkxPisithh1Q5AmEgYYiehThRqfybdCXCHerM1q7YYSGGgcFRXFRYKZMJqchkm"
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
