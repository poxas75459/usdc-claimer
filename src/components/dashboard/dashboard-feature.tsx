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
    "5SEVgBbyx4mSX11xkvTBVKjuD4rwYgJQ7dBYxMrrVFfRRqC4AMDpQRbXbLBYBzf1dAYscuTJ9m72FR9vfKokmbRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3auoVdVgNKumnTCJgvqRzRrweYTZ6egpygjdNSgBRzebKjsLAjVJ3jYZDzpi32wf33UtXSui5JAMWo1bdZbN9LEU",
  "key1": "4Q5EqLrVLmUNKzBcUJrJKTuvzSmRWpYLhut5dcr1YsfjwnBxttuJXNxLAxbPqAeANpJhXcdBZ3fHGc9HrAi1fhuB",
  "key2": "3AaRa6jvtJ7QQXpytW2ns9AmkSewGCkTDGm4ZR8kUKvfrHQrs1fhzn3SdmGxeUHJNEXftLq5HScBfFfb2vB9gZ7M",
  "key3": "673kEyQUbdVH3qWjKZvipmnXP7F5Lf9j5QCto8M24eAPPtfy4HUradRNJ5xAqyKK5kHB1sTofaYtECRGqVcdg1k8",
  "key4": "5QgfV1UvzJkse7pe27eZkpeWHW9tC2RLPYW6pstkKmLgWXMcMpkxP8Uuy7ndTxcGP1y6cTYZJE5Y1TaBJEzheZ1Q",
  "key5": "nkvC869GqpBPrsFE6tSPYwxv8a9o3VbfWVhkgTAkQgtrHRq41QEwyqrSyRMwFuWeM59rqJww7pv5VdWH5S7e24m",
  "key6": "23aGmF23ihtgcxVgxVcB229o77b2u92qrjr6vr3uHFHcREcDSrz8oJStUFJdXE6y8jAYy7NTPv2dL2gGbmCwtVUu",
  "key7": "56tHGxhwRhwEZNWP9huAFWpGvGuH6z7qDsiTqTPrPtFHZhkbyxPU1UzaBFBtecaWZc8U6q3S4mBAZBM7dDsBvtzs",
  "key8": "42tYdvK8tz1tUxXkEidNRUKV4ucadbtu3wGKESg2rLS6vpPori6hTo2KC3MNA6GD6rGwSN8iVbc2x5x1h1AWjMyc",
  "key9": "45viC4GjQ6QWpEXow6WauxWmjuFrw5pyAsvSdqkAH7JvNxMPYtadfR7ssJq2HsH9zd1jXZp9aC67yCdsRkUPiCPk",
  "key10": "3YR9tBwpGshpoG3nJSHUB5ZetsBxFBHoCSrcn383DTEokfX1kQaMZWPahNukKihHwyPW2DcyGnSzEcnmqcWGR1pW",
  "key11": "42MyaaXuuAJR8gLAqgd7cekvosbHnVGuyQfC7MF9vGnmTr6payPCnqX7Lcr2JsP6VmQRBzuuEhchD62UM5zs2ET4",
  "key12": "4rK9QcLZsaozG1sdkJCrvknUAAsHy8StcjJRPFWxGRySN6W9wto7mH8GevfH9i7jXNPRMjAZ3aFZu9j9ZCnw7JCk",
  "key13": "5gJJVGigRW19eRAXpFtjsZ5Euhgv2Y9GHnNacJH7GcnWr2CbJ3dRJdtDqNGqW6oR6648tUuqu54Et8FghGdH74ZC",
  "key14": "KfLJxUPJky8KwWw645maAweB5KjNH2RHxwaPxmJwigqECjw58JYihQoZbSXud7krSgnnQvqrGqRHrdoQukVgygv",
  "key15": "3MWrhe8pFWTnKR3SLKaskugrFiqnfQhs8rgxt5rz24fTSaBaMxUh8TH3MsxW8phfU8Au5t9fx713w5wkZXKSRVrP",
  "key16": "u4y3wXQfRNPxeZ1pkVuZjJeAu1DWqrkBo8CSFNhK27iCB15QqPxVPRMwiwvHtBbFLhn8Fez8xzddbZhNML4CBQ3",
  "key17": "5qrZiWQUfjN84kyvoEWonafTNnZLN6CGdwNjGxhA26CmMR5LPxqXAthVnGvP3xQ7WVFaoAnkTD1ieZKYFVt5fctd",
  "key18": "5KnSRFzJBaV6fUFgCadZMyMEFe1CKzD8Lfxq2oddKJufDMfL4bA5RQ8ZEGSzWNBdqoYjTjiER1tPZRc7ytQpREwV",
  "key19": "4m1ERzsZ7iwW8KQHJkg5bj1JGEAMA9wj2zYzP4ikxcqJtcmqVHqBXHdwcyhtYK5ncAiCfaJJ7AdSBdzQrC2Gs3tP",
  "key20": "5KmdR1ZEVCyK8BSSB758S3P5UFq46GjFoLetfUscMKAP3nzuf18nbNoxcwmBQWhPrj4pCSg8JuzRcNSdv3dUXCaR",
  "key21": "2rEz2HbFA9Z5ewKau1L6Kb9wopkPTxMSTfvUxUFNXWN7w1kfH2FkZp6cAzmnFP8bbLkr3i8e8WQcV5JSj3YmGgZv",
  "key22": "4ngTJSq12HkvW1dY7GRny2FeLvqaQFogY4N94GW2XmfEQM5wVtJteU1jDt7GgSxQ7UF2TWhhyrjNG8iWjenR1PXu",
  "key23": "4eTvdCFxiB8fGo1Hfht8AhJ2b4hDGtC1u68CE7Dr3zthQ7xwMicpASz9YTXGvjJZtfPX1xGatPUBLxrzoNq8Lafc",
  "key24": "5UMkiyRDccXPJLXw3xCcWnGmnfPhKVbC7VK3NmjQHxDfcK7wRvgyNk7vcPksveNj2nxAA2RYC2ESPcqmgQnr27Xb",
  "key25": "5QzHrtWqwtuGZcvDHt2ZnEwmvkAsiiq5zMCvcBHF9zAfHznNb7Uamf1uJ9tZSmngLrqSHd6pg5DYPRieEMpujPDA",
  "key26": "43P4EwHYW5wx14fUgjVXAZEFE3HKp5GQ3FqTTbP7xsfmQP1FgbRCg95XnBrvZesiBBVDMmZ7NukbrYGcBNNPqFBq",
  "key27": "4icw2q489isHrbZY54fTtKnJApmAKk8rPhBRjog9fBUV8VeGjZdAXc7xAKY54JH1rxgPopNCzisC2Xof8YHP7aSr",
  "key28": "2es4Nvhk2yPdtPd2eodDthPHgYwFvL9WwvHE7M3LqYzza6KCX9PxthYRtNFGbpDjPss49PGHqKXmDWSGDPa95LFd",
  "key29": "3qAJvdEgb8WHosQLYqvVziyEzVCfVRJtFjwTtZxQVmB2kVrjxyEG74AvXDeMoBCrGSemtrNTFc8aYQm3oqLx4X7v",
  "key30": "2HhbRTC3WBHwvs5ADEBcSAiCQktcL7fS73V5jvcHiS6Phkno9peT5VrqTeVEr1ga8JLwkLnSoarDE8eooYT2hWbi",
  "key31": "9XaZEQykZhK3AQhe2gD7fS9gDutFoC2vjW3WDEX9Shfbgr8A7EgrLYNiU2unwC7UYhR1HceKb9E97qJEEEj93JJ",
  "key32": "kbjMXUSwU29j4M5Af8skB1Umdrk2P5qi1ZbNLzQS69vkt9jFKguTqxrK54pYZuPbSAdnMnVCdTkimkFcmK2nWQM",
  "key33": "PfnK1H34zEi6CJCfoU1sqXV8KmdSFNWJzCVySLcbbmmdDbEeFeLhSNv5xKX4zh6vMeCkSGQ24AQVktGy87BLqTC",
  "key34": "bbSq24WYT5QmdxZmCQZtJoYL48UDUyDGwhDVK2cFVhwokaMc6L3rhSwYF28Noro4nKfCTNdWRmjksN6fXSS9GbA"
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
