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
    "4fScvaVDXhBTcFUvBz9kJACyVdvhB5u3pWCpjJGQU7zUvaGyeKvcsNQN9u9Kd6wFkFzuMUpYZ8YpD5bvSGW5fbM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7UxtSAKYTVJp8hmwmsEgWYS6YkBpdepL9dJRqZc4sxMYnE35accfzwjtf8fVsSrj4nxNGqjzd4hqXhU8gkD1aJ",
  "key1": "2jqsrD7c9UUZu1vDxVwUxCDmyTPixuowbq53JGXkyoPN8jpaLSqVJGU93sjKQMPmt8mPifPm5cdzu9Y8gs3B34gN",
  "key2": "3DD3csAfRwqFKAwCWfbtDnzzcmWPSspjerMMxbZm97ZpVHWy1mRXXGRpQ4wxGG6hucddEanAQ17kfW2K7iVt8mE3",
  "key3": "5ixZeFHkZMx2SGEew6B1ybYY3JrJKFAnbcTk9HSM3ZxSi4LeJNXvGKwv1Wc8gW4mJNdM2hDWPYyLqZEDG5QtHGjm",
  "key4": "2KyCpAWZkZTLagn27qnMdReEG7vNLdpFxb8EC99zdGtpHkHm3SdNTSfFrWpk7fVH4YJ3cBTBChZNjSDp9Bvmhrbv",
  "key5": "49s9ybB8UTPjCEjwZfpV9tX2sDmTK5WNAVPrVtpswUguE8RUm8fbkNJLQXpwqKT5Wa9zVghnwomH4qo1RNdHio3R",
  "key6": "4HnE4TaF3qj5pS9FZdUfTxSZodmMh9rrDF31pMVrtMq5hokUVk5yzBaZDtckr9ZusdQ8mFonGLDKZp6wSrzt8G1h",
  "key7": "5eYisRaJk5gxuqhrta1qKxpnjzim3uh5dAJ5yXG4pV4piMzPj7d9KoWB7cKvfKEMewqqhKw7z2roob4nhmo7jBFi",
  "key8": "26mbMf74hZ4tExUe8swaMcNfBcpDpNf3fmE1wdNSXuofquC69dXMV3hNzFsdPReyUtvKdRHBKjeiEoWcFrYaAbz3",
  "key9": "3JjynMMvpz7GvwFmPnD3rnYJmpbCmjBNH7eexTZmg38vXk7BXAxaPkAURbq7ceepwrp7FwuURSHm678zBoVYD7xw",
  "key10": "nzXqP4H9TjY9h47zxNaV6BQKKCUjXA1uBNZY9tQHPxf3XKWeRmXnW5R2voaGPkEHzSKWQ7apebj74yH9vaCCfxu",
  "key11": "4CF5xwtMfkLN6xK8rpS9mBHgmNmQAN5eEK1pFA67DrwD723iaBonjqsJECEFKLujmEQZAu8oVpK1PLfenvuEyfyg",
  "key12": "52FRdcXRMraL5gptwTwzeJ2xJiAJyDQn5PRxT6hgwCi9S3BRyV28xh8AJM5UR4ZLnn258hayWFPqZYd3Crh516ZT",
  "key13": "2Qoji19UCXrCJNrrV3QvuNsZCvSCYdaZBH8hKfKNN4WLy77VtMrGoXY8egzKNfa1MxstMBu6hqSKrdykNTz9sL9h",
  "key14": "5sWpk5NMC2kWTNrwK5ejssm5Q83u113W1TFCgwWmCe1tTzy5ccvDCD7oDgSYDncaxKr9YhsH9Zx8yHxDzRKoYs3e",
  "key15": "vZeNPVhvePnqi8tWty4KoUVhRfgxiy6dhQPBD3RwEQ26znyqhYUE8aUrksWN83mTaawKnC9EBjdznuuUsUYsr31",
  "key16": "3otZCCVALewbhKWEvSTEroU2r1oXHq6NS2CoJaXtVTTzHCgMVLz3S3gAsauYEw3UfsUes2WjpftZTwxUsMZ6tgAR",
  "key17": "65cUGcDyx18LJ7DnqYs5kvoZqCwSViXFFUjaTBuCUwKBcy8TgdhjCSmjVqiF4oC2Sv4daBHeiM8aTLobEdWL7eQn",
  "key18": "3P73e5KTHhzdRUBzkccPCXBHr11miXmspLE6z3JgkZ4fSMomuoS2zsCy122jRbk31VXVnSdDTPNZiEkUrd9VBk6r",
  "key19": "63Lk7E5bQNTDDftQoFJDBVkZVSHsB5HWc7mjpx62f4G3mUzqhF4RvSteWAx3DAn7MNgb3NTw3xschWy7pNtkERZH",
  "key20": "5ynGyNCAcdhziXHHyD8P1aLpg4TUK7XbwqcnoAUzFJSczLQxmUXzNTrV6LrBSFfjiY3MjZogRoCgrfvzSS2jAaRx",
  "key21": "hHANvcHSAE5PYD15bbeKMYdsSHXmePVm9U8EFXYwXujrnpPBjKzxq1dKPuVXrWouK6nshRj88YdxEy6tBxY9aqg",
  "key22": "5bkV4GNPYvJVQfyN1gWefhtXNQifJ9MiC5UzGV8wKuAid4NgXkeBhVRb7DduNBKqW7fyAtWPm5mWqKRcAcVMXCBA",
  "key23": "36QWA5uknNSGaLMETNY5pTmXeSYjZLxi9HpptSy1R3BDVaGyrrK8b8aNnSPBEYD3v2oUU71KLpoogYXF56SPm9WE",
  "key24": "51SQY81SXLkE1fP1GLkEpbnRM5FHo8WqnLVeXWtYoYZZyjPhfWguV5FzGJu27oQa6fktFyrosmwKKjvvgUmrNcNd",
  "key25": "3vCbr4sVgDTjUEs7jyJTb3UgnDz95HKMtWgvdxXr7YChc2fD9bUNsBpMtyuRR7VuqKDD65sfWFx7hekqcCMiTeQL",
  "key26": "3xJiVhDraAeJwtVTB8vovz7Cm18duizb34Vck86sn6Qwt6yuieNBpFZc1TKDEfspozA9UhmTkUbjRnUqmrVusotW",
  "key27": "RCbqVkgNRnKH1q927qZ4EXxEw66bn6614YySoBEZ3TzSU1eusZ94ZssKCndMijLcJeMNx64X1rY5BrZZ51MhroF",
  "key28": "5TCQ1SvTZZdinbUfk7KEoA7XXUxkhGZxUbkuyGkMBm5vawQxMP8A9nc5hR6y7DuVx2sXWLyUSLR5QtCt84zvgpc9",
  "key29": "2f4PnZWxtt2hcnZ3doRMUZWCjV49Q6vmoDXNbw7VAZsmZJqzq5cvB7WesRpr4oM8qcSdwC8qaA3e1dePYXinGmhN",
  "key30": "2njfzUXGuz7m6XR9qtG2q5Dt37rox7rUELxywNb3nkx2jUDZwt2ik9d4wAja7Y4b6mwcwGY2TVzEea2JpRMmQShJ",
  "key31": "3geZPWg6PEnfE3NtxhepLzcyCUYYkcW6cr1y1WzUgxfHv7MLYMuQyWKFTiFwLNS5Y7Sm7cKuW2XtcDAP594HNn6Q",
  "key32": "5nGoFut4tmgwFFzbDMS7JEjXoeX8Y4sgeXN3YNUU7WHxo3Jj5bFm27grjn7QFaPdHvooLmjuiBVb63wc8omyjMjm",
  "key33": "Dtr9zWgpkqjJmgK8zDPk3fE87jNtJAUMT6NCyL48SiSuLTsSXzngBBQzVLrh6tN2JTntEqKukaUkQXe4XjfVKBx",
  "key34": "Ss5pPjxGv9F4ACY9mMHevp8Mh6z2gZdKbEBypHgjU8LcgeHpBFzD9wxc6cPa9RkSuFuc3Zz2t26rCUFhefr3D3r",
  "key35": "46ETSoDeBwZm4fMLQYnTikYeCt3mGWkYJBnKp8hLLBnWo6mH2d25Z9p3BpPkRVX6gRW2vPFM3YyeZPCMXzx1EWx9"
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
