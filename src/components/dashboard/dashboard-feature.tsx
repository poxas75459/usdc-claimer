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
    "3jjCssmAHsLGASmDd6nva5Jnab51kKm5zqNciF8iUMruT5cMdamgZhhw55KGwdAiXPGMozQpnQk6d7KMFvhyEfcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GhND3ogDc8pFB7g1shKJP7VQY1GucY6BgsDbtWqhYxmYZR4MBiJgqtBmhd7tX7nQfeZJKdg1XEK1ibdGBWyoQCN",
  "key1": "5MDsJd2KQfqbFgt4RJruQcHCAp3uRw4mnQAwvxejyvkEBT87JztNpzKFbFTWbEWsqEotttDdo6W6EGvviR8RWREN",
  "key2": "3CLtuKtt7uzh5Wue5VkjNu2dwvHFBs998FfDCKa7ehv1BexL8Uoqosct55B3Fsc4NdVV4VYxUnv2zyQJVABMVnSW",
  "key3": "5crjBtthYwkytSsKXZzEjFcfEFZp1Zjz445QM3SKwba31qN5RDVxzXGjxJubxX1Mhzj93eSKAseZL6GBLaiBd1Yh",
  "key4": "2CNA2MfP56vaXsC7N9qXjFtm2MQKNSwRjpierUVcLWK7UTkJs1SfkFu1bq9oEXCmqG9uEHywMN9GD6zwhU3UgzZ6",
  "key5": "nsk7Pr5hpuPZUpghma1fAYs82CnGr4GMjVc6ksrURZJLvqzA6Giouzg7AtBKDSw4Qj2qZgRGZojztQb1rC4BSYa",
  "key6": "4Czo1DHoa2FPnpNCHtAav6RXr298nRcbYEch4Yf9dcLLaiijtubcP1p36s6PuvgQ4ydZ7BWJ9k9MxhamQk32DZ5X",
  "key7": "2TG2pFHc8mjRXRBxy8vgLDTpd27MLbbHq4x3xxfuhhHzc9vx3SqinAftQzHamkbw4PfcSf3XaadzfkKtnDbriJ6S",
  "key8": "67P1uiEirdRXmAA1HTr7whiCSnfRHT6ZY79FXLa2aFimNt9wd6cRdJxPQG5D8wMmJkN81cf8BH1NXZsnkKJNuMxi",
  "key9": "MBgYceHpUWJYtFLw6mpCSt7PHwAMfxueinFaJjmBKG3vxzeNXuzwN2ZPiTXxM2EnZgRqv3CMdYstfzuBDs3Taa7",
  "key10": "2SdZLgyEBJU2zBsZxeXnPiCLEfcjp2w6pDX4nAc7oLXUCiJMzUcQBuzNCdoLAPEskCHL8hJRj8yr6k8uMrXwDkmk",
  "key11": "35Hw7Ko3LqfVuED5Ldaj9fcict4pBXu7kdKB1RooCEkYfU3zVWC1LLGefaf82mYhDKTPGgHX5NvHrkQLL1E4zdf6",
  "key12": "2LnMby4YPCAhfmrT1B5cdRPC8nxtKUBJDxYBuVjsso6KmLQkmPADLkE2Yj8jqotqSAz8iK59Le1461wjjqxdjHDK",
  "key13": "21umLHwDK3RmgdvqGfRvuygrDLvVH7HbaNvdu1Xze7bWk1ahx66zMUVoLPnZFmZGiMizpvcLFP2PhxTbt1qKwqm6",
  "key14": "5fqTcVPde93SzMU5ne1zzBBurkPzD4z6AT9Cvc69kU1Pt8x3QEbaW9CjVoho21iviMnmmBB4qDAVsiRkPmwpnQ4",
  "key15": "2EvS6LRKtk7sXtPFuJEanPwDFBtbaZjnM71yvecsraU43TLqUer6SfzvDruBUEkzBZWjDpEGwpuVfFpQJYDrxn7a",
  "key16": "2Q4rtZByJQvLhNk2Qe8iQEAHTL5iaBD8JgY6HaYUKrCDd3L9Y5pbYwXfygQDGe9PxUMP8QyAvxdotmD5pDDmVyP6",
  "key17": "2R8hyyBcUQaY7NsDLDmVNkSWiqT7y949ZqsFuLxDAa8jaTNdJtB7M4q3jvtiS5voCYWsqYxTkSadmk2hCihvs5HS",
  "key18": "yEzsGU88DANDyARKzcphkPdrt2gP3PfUcyYcHS6un13jQp9dFox6FrXq765Zu1eSmGzUJA4YxVKCHG1eKEpnsh8",
  "key19": "CWukxqQZtzd8Ex5NasCUAydgawdAep46btUxB1wm9Dw13fWutGwJ75WwGXR8cbiDbASwbzVkqvb6fAtzj6LscZV",
  "key20": "57iYRwh9NseN54MXFHWhpng1uvSMCDhMDgZyuiRWMZNi34P8MZXZb75QdQASg43LpLPTHC4L4369kQpdVcN8pSTi",
  "key21": "xadn7zXSfnktyCAn9T2Xauc3QvJ9JXLNiZSMBPLy4xU5iBuLDK7vLFMu9fg4yZzJSsPrDaMo8pXXZKd346BbgZJ",
  "key22": "N4xKRoUinh483MorVfc19RCEULDEZxAYe5HuWpnv2wiUaQmm7S9WFByk3VPx24qQ61AjiQBQsN4wkjdnDeweHvc",
  "key23": "36mVpmmiFkNCwwnZe4V8Jtv5ocSQNkCiXgYuzHgyVNpz2GUSdMJ2TdakNpEznaiDPTaJW2QHct9KQuy158ZSYnkQ",
  "key24": "2WC4Uq1WkHjbDhnejY46Q3vFAvaLmQwj2kDu6tY7KdmFaqQhEqb155EkHVFDyJpkxSmowDt8d5QtXrJVHb57JZqR",
  "key25": "31KNLS7KRfEEhWynMNetMmmAvxiAbteAmjXeqnXq3MKeKjvBWtgBDNLajKbPFB2oDL5fhLrg8BR8QDER2m8ZFxW7",
  "key26": "5NVR1fzr9XjVjgLywybgfXL1MgxbmGWVGymN1gXK7Tk5UobRD1sxgqL1kHENrFo7zNCShsRR1CReqCBBgFwMC9x5",
  "key27": "3WMmt7MdeeuCrH9Rk82UEg71Hux4CMjNdzZWgUhpfNHB3kdSMUAhCF5wDDqoxMeaZEuH8v7RX6FHwNK1NLkJtbdu",
  "key28": "zosSyj9PYTGwKwwfEpiiYRndKH4tAjVBjTJMhp2B3Dq3Cjf8pjRGbwmYGtvfQrvzYJoDkJsuUbAgm68TqgWJv6t",
  "key29": "3nrAu393egMRviUEW1BE1X8ZrDUcdCG2oFbtkBsmQy1VdCWNAJxDYZNXAiSg2VLqfet2PVxdKMD9re2qFfwYejXF",
  "key30": "3VLXokEBtMLZD3To58iNU8sQhiLqdm7Y1tRsCEuH937Wk5nMAEX5GwzJRq3LLq9jDCKt6qcA2yErdjKivzcjio5i",
  "key31": "2wACxSL4rpXQ8LKFXgbVCS9kHWLZS2wJ8cHbDDdYCYFcd8r4grkCxExPqkMgnd9UsdmpQsTttpupSDBvjvjbDPL8",
  "key32": "577qcMh1DSRM8M8gQ5EtRQeLxTZpz1UEkNwkaM9Q2Tb2txhnEYFy48Ayks8J9KhAHdXyXbBMgMJQAAAwqurzD5ze",
  "key33": "4xMKWmbMQNkLdr1KG2697dPnAdNFQQzapzazd4RsYMU28vLFzmsojmTY3Zi2QCUNt6PELKytFmMatUDXqny6veKp",
  "key34": "5tS4nF47PEv1yc9xB5K6C7h2XLuTrdskDEVJ5HSNvaoXD8sahEQBRw5PQrASZdSnXvDPSvzqHS8LfShbPebzkQgs"
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
