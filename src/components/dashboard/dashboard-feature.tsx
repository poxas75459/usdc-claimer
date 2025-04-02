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
    "66RXh1y35PfHmCHLKFrEkR8CCYDWEKGdTRvZshB3K2MzT6hFaBXtPW93dFdbiJ97rdSEsWUfRmDLiitAX9Z49xwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vgaswXWqeS2KHRZfoWAMuqnGnSgYAKXb6K3GuZmHvA2Jnm8FeAy8G9LnzwXTBrtg3Et1cQadTd3zBkUymL5Ns7Q",
  "key1": "9sLvx5emDjW8oLjCrJrBRokWfpLWixDrMTn4xFKA4BxSBgTerMkCw1n7hVdUVA4xTuhZ2AKXpzFa3xMBHGUq4vJ",
  "key2": "55muCuU1qtg3v5ZzzxB2HrJSAvvfyGcbHf9tM9oANFXrqqVdm5AbPzZ53PsPnUDSHW47kPP9gKCt9sCDSVSnffKo",
  "key3": "ErKttzLhpBgc1abUHKsHnvuyLFHPrPcrzjpKVidaM3ygLQG4GMk72TAYzGiPMeUddWVm7QEaAvUYTtx2HwtZKHN",
  "key4": "3tHd83ApAhDTu87EwS1AsVjD6LPp5vihMoE6RS2QkyCHCBbvAkHjK3Jsb1f1Vg6YkhcPy6yyWgNkMwXLFukA3CdR",
  "key5": "4rP1qFzT5T9kSCcVAGGgsincqcX2jHmEbjykWs51VRefwqXUKb64yLsBDjN47NzTurDkmW4WymcLFtLL7xEvJFcD",
  "key6": "2CSf885KyvurNdVfzDbYrwD3dYrk8Ez7WGRRHMUWdV2VnqsrewFGnphobx3u9BxrtjKEkrN7wdrFMqfGnUJpaHoZ",
  "key7": "3T7vZQ6pZSFZYF24LjsLhbVpnfBS8ppwBSvHNS17VWArtwK9Q4DSSMGm2sjbVymVXYbVwVR8VXr1qE4euhhzpfba",
  "key8": "2CFaedFwv8QoP6GwcVVf5w4F5Ce5z1pQCHaxgoUDzGNfdvby2PWegyyovePwdVttpVcCjK9Y7bNh1L5MWhTtSkw",
  "key9": "31Q8YXGHrqPEk7io75ZzHhXYx1aLDx3JSJQdoV9SpAGjWAvJFCF3dxdxABTTdss6hdCvn9ZjnLdeHRgF7XxjBM7R",
  "key10": "3ni6rN8oTx6idPzLw7ddDoPmSyPsYqkeRSA4q5AcKv4ZxbYf1N7AoswhiFcjjfdxr9HAKa28FF4SDf3L2B8ZvhfC",
  "key11": "67VcgZLxTs5hxpHv9APYSKoAGYy2rwCn8uwGuNdpH8tJrFavx9CwzGqFWGsP7N58UN8PJKhV2asnk7fDvdUpgo35",
  "key12": "4PXGehLXDjG1reuYAN9B4beE5heYBsjoJvdRtBjiTkY4cSSDRzfdkrGoBDm6HgaAgSB8mAWray2P78Abkhs4UaAy",
  "key13": "z6vgkuAWyA3ccmDbcZxQ6RXEKCggbVLSLWvZud7cDMXJ3ZQ62QPKo4bDxgwezVjQM6EP8RpmckzZyUT6Cv9DmcP",
  "key14": "3HNVmvGYqaggnUyZUU5KwVHzRpH5ujvUvqQoFVDWRc7eNBnJEtXchKKf9TarJBofuum3aUnTGeDVPNztsbrLTnTm",
  "key15": "MmJT6QuZngiLYUCYWtRMFXXYhvREgn7F187XhpYz7ozA4qpCjMAfj1TCwTBa2ZB17vFAzfc2ThR6sWBBmyKpkWr",
  "key16": "2ayhbX22kiR5gWYXqJNicdR9WXSfvPfq1XQmVtynV9knCWfr1PF8cs97F7XwefufhrXHZAdi4DLYLcY6KqA5bVde",
  "key17": "3Avhqzn7FDs1NjLGcjTv9Pc2o9vx2NTxWJe5dzKpdHxTR4J8oxQH9aaSd4n8WrSAbBjXWj6YL1PGUS1d41xQfxKt",
  "key18": "4A7GNV1NNjiZhb9gd2g5WnCMF77LiZ8pSipfEWi512g8YoStKQVWxjXPkM1CwVmFfXDN4gckfS925AnHwrXynwsq",
  "key19": "65WCcXX6Mhdg6nB1jp59aikVzMZewjZ7QKmBsfVWJGWo5JEfP9ZhmTohYrgn9yYxec964S9dvmEPJvHzgiCp1VAq",
  "key20": "4yV4scVN4yLRGe8sWciZpWZuggy5sks32VpTeCTE2UrtV5wgTaamdLQj6hpRcfv2fuvJ3imDhECgG8XLweJUCSs9",
  "key21": "2UPCDAZUX8wHCjSy2tNvmsR14nP3nQzoktETSWuME4zWUYuxX2erLKW3uQtpPdcktSbEKPcCeDc9uoBhAEcBPZo3",
  "key22": "5RExY84cxN56SnkXHsZ28oJxur6xNtgGR7JLA5FueLhgFtKL6bGZdB5trG1QZHo2bLLd6j58kunhpbekZ9p9GBXR",
  "key23": "LWdQw1n74iTYJAbQmCg8fmUqFeVdEXDWkefZu47mG1k6TR7h3U5p1AryvcqxMP9jhVWiVSG8duv2HoLsLcGTA14",
  "key24": "2Jde3r3r7NXRbTXLn3LJ2uJ4ayD8zMn9roNsgWzzvj7pZ53uDVXLTngQvMNxztrf1nSZkQeQx17S4XzQiz7y7Baq",
  "key25": "2o2WPPsF8qMg8yFH9xcy57UKtmHpeDC4QBjFA83RD2hP4xDbX2kbcXgMbY4t2yGWDotvXugUWYpK3XLSUJggjqLg",
  "key26": "3gScxJZbDkbwhoCTKBiubtjcwGAVS4MCP2RSpFrFAt8dwimRu1aXsGHLB5zdk38YtEr1hE7ZjWnw88XPBAGmKzvG",
  "key27": "2JLQEwggnVGp2E3c7UoWCA76Y7arE9sp7dk2yb9hSJNV7wxk5QvSiu1oeSq81qFNcrbFWX2PeUioeS4cHvFit4oY",
  "key28": "3xTd15QcATPhACTW6PXheAQTFm9Bpm6RHAeJBNhhVyyKP4N74rhSk1FzEyegavqBDdUPBVs3x8LVRMBJuq4wrExN",
  "key29": "4sp2sobqQCqXkybhhHDyHVkJqfM2wT6VP7tgmzzab5y85HvBCH8ZqnooNShtSKnMo9rmt5LtHasfccaLpUyDXGyz",
  "key30": "3Y5Sax55x79JjfwnvmFdXSsV2egNubVynmzmxFpHQFnvuBiCgTsrPJqxv2wZ2FKeXJSCJzn1sMPPLwg2io5iB4xB",
  "key31": "5cYNqvbqCegDjN9hqtcUmPavHFivWj7KJaehbMydbQWLjzLNxBYasyLVSmMEFYMXH9zTSoXL7dp3qEQxM2tPLPk5",
  "key32": "2c3JGiNoQYjQa8vnZuAWfnANY8aGmwERzTLyziXzGx6Qnrr6hTAf9iL96fS9Zm6WhEKU4orbKUwiwZHcCG8zUUoY",
  "key33": "64B1gd7TzLv4x2mNWRKvZjmsVk8GvLUuEUwf7gExhanL94nrhRFn7s7DLMuaeWgUPW1EZ7emKLW5ygUna8EUYqW4",
  "key34": "5Yrreed7Zpd9H2wSGC9UadPu9jAAJ2RbpiWuA1YSoJtKfFqnrGNMW2A6VcoDphZ28rxXcchdWnrfhE8ZW817Tga2",
  "key35": "5D6jMrfYcCbxpWWZhqhqpR3RPkf3reLC6SeohdCXLSrBSq9EwM9VvmB27kEptsrfSGcdwxDkhhynpXEhRfLA2qBZ",
  "key36": "4R8orZpPdKVDsgch3uSC7wVpFud5DKHwf3YGcRn2vsGEdYndNMxu7md3RyqzFLZvtncsj8c832SDAj1677nBq8w4",
  "key37": "3a6699igK92FFpyNVQPEXvkBbcqHekqwv4NfagJeF68c51bQG828qkutAihALpeWSberwo9i1Ek923VX2QWotKsS",
  "key38": "4Y4aKjk86jh7VBDyhQ63yXbApme2MvG1DjHinziBzdYkGoXMm9P53wgLTsA71kVohaFfUX6SD6USoGjEG7saQxGk",
  "key39": "4Fw6f2fQxQr4NGgcbDnmdWUBh3AdjBkL4S6sf7cxZQtv1W4StgBZ7QbLSGppU4tMX2HJGRLPbQEaa63ZzH2J6DiT",
  "key40": "47odnWXx3QEtn57VTuPnRPRPohxoyaXLW67Pn864qUfA7Cx2pg7dDWZ8K1qZnqtPU1yED2LGP1wv8vpcdU6c9tf"
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
