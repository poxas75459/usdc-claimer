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
    "AYxHKZ8mvG9VpU9iWRN3uCE98e5ckYrbzdpxZQSKKZ1DJ8nmPkN11gGDNB1ZPfxs4BBvEuwr2bCCYPovBXFXxZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ycATz5YNcHQ1cj2rxC6ANbX3GwMiCD1YwvUvW1HnJTQqQe19ATbQjL8obG5g2vSJPYF4zZe7BxeTam27FGsPp4x",
  "key1": "mJhNRtmbMKUxLbg8eixfgJdeWCg3iEJScSpEcFeocH9S9TBAjc7WM1AbdpS7vegya8qUeSNHhQ9uv7GofFZywy2",
  "key2": "krwELNj4viqbDGMLQkobRTjhWYVUH7YF4SepkTaaTexqRyAJE57AzMXTJP6V6fPByUmbXo2PaXsmtHKZPoU9aqo",
  "key3": "q58Rv7VYWVAkny3nTx6NgH9K8CPP8JwEvjWbxV6SmryWy4x5WqibPBMBRDccbTiryV7y59BXFAUDST1F53USkB5",
  "key4": "4W6zYzJp8AgT12g7M9qEvU83hfpDkwf6pjiMjkZ3RWjAnMXpCWajwmyyHv439tBycqK5bfSuzVUtTCUPgSM9JDHe",
  "key5": "4AqLM5wSgzsKJEQmH82Gd4s9BEYrEeZTCLfj7VmgWGbmzCappXkjPfCPerHvbFrtZeFYuYJifKG7oA7pesBVhzDc",
  "key6": "5Uwa8mFooCQ76spkzvn9D8Fj1Ss2Mnceq3h5m7fpgorn3uxiVHwJe46rsQLcVdU22A4bq5w9AztvGMBUgf14Lqe5",
  "key7": "67csnmN9fd5hkE5Xpysg4h8Pi4hkzFpECRZPcrVmtcUFb3xSmwNS1VLCW65VKT21A46cKUDGpqBs9esLh1m7PmZP",
  "key8": "3Lbb38xXD8Cu82hSuQP8SZrDgy76oRscDFo8wdrZfGFTww4akveUSS6wCesWvQxCbDmk1Lty3W2Zz1k6ftkgoDAx",
  "key9": "3tv5f7dhf1AEnjN5YfRj8zCPUSEb6SBcQUWMM3M37GJQFBofCCsuQXBtc1o1Abyt5ZuRAH3NZubuYtT7dJjWcBDy",
  "key10": "Cs5rXTSr17imhMd4UTG4SGzLEHKWSTfzrRsSkZudZfNMJ7Q9RReDxaFzjpBrPXPYFk5Butzs17W43ipJJN8ffY1",
  "key11": "81zWUahJi2ZrpDLRRb7Pii52GDqgv7tVuLbD28xa5L6YgBaLAnmoQfhto5Phz6mc99qPUjRMV6xZvWz3UQomeMT",
  "key12": "2TwAfGq8XcHCPzA8QVniPEUKyRruz4ieLxyrawh4sPBhognNLE3zsUJ1Yd78gX4rn8BMajihb7bFnh9ad9BNdVGt",
  "key13": "3d9b86WmYwP55caQsTYY5Xrr5Q3xiHSZveJSaHmEPX3am2Bd8Fo5j2DdMcqcajfLyqLgUFZZ63rjVwNrv2VXEcLC",
  "key14": "4PqLfWzDbieKuvgsS1jfAuDha6bq4zAttXzZB76ux9GyRWY7Du1CQEtXw54CnDPeB5bSG62Mt1euiXp69sBaPmTm",
  "key15": "3UL2xqioobTVrNoWjyTt1TUj1LtrCYyedase9czm1z4nVqM9AfN9NbSTzfTztR1Sj9s2V5WKXkRccd2eUZxvYYgH",
  "key16": "2q3hYmdn4LSQqWCnXU2kNJmcvK6yJmCEVKjho9UL6QBmfr7yGBGku4Ci58wM5UAGdZQn6wj14trDmTyLNf67qxpj",
  "key17": "3MRkd2J4j32PvtERYMoTi5xRCq5Y1ks9JTbsKrVoau2m4LY49AwhFUmFzDGyM4BDf7nYauhadSvPBnVUa5nprkZY",
  "key18": "2cvmGRbw24MFezaUshdZrUPeYgT6bCtCy5Y8dZ48U7iqViTnXEQ5wUC7pDLt675vDWyU8QcjVqBJe5QQw7SKtt9X",
  "key19": "PgxKFpWxvqJHpbkZ9TcgCCbXetijM6N7gYWxi5ng3wgwvXxDzRmW8Kx3L8VRZmgrTKWZ5NZiCCT19chECKr6HD7",
  "key20": "44wF6BfroDgJQTUjQfwZUuRWSDs3DPX77jzFTDCneWFHyBjVoRzaLJhH1navUCuD27DQsjvYJSnVBQP9k2SXsuZK",
  "key21": "AyyxHSshWD6S65TVD5W4t7zs4V8hihwGT6sK73YEQELJF3WF1fzdQzgjGCdrpN9quWQmiCwn9BTyXCXxcbrDCAs",
  "key22": "2PoGhQMSLQprQDA1kTcc4mkSyaCyE7mChxP4TpjH3nUQF2ewdbz9mzAkgPJ6whUHxpEze6NvFp7UJWkSRNkMLsyo",
  "key23": "2zsfHd1SuBWRBCsZd2JPVeVwqGrc13SfrgEAi6QkzJWbzavzCmMzRoDuT2HM5iWJUvzQWTVpARSAX75LdPvFhL2R",
  "key24": "2kcEML1AuQAefQJc26NZ8R6yjWZCVe8khdrQN92iLJrdT9wkPRZWK1eqWsU2qXL7ZwednCGouY1suvCyzcMDbdYQ",
  "key25": "4Kiurb7LaqDCEzeYik1VVL92cxUgBQJAbHS13gP1voDSgavHCgtgLnp7u2uGWvMZAZUciLR9qUK7Z95AaqvRUXMq",
  "key26": "ZuEzJncDrFzNFtpqbUjrdtSkTahzwYnvqwoTo6jCW7asXgTkGVMMBwZm6LTtHWnuBd5tV6QZPs8VicMdr6rhkvu",
  "key27": "5oveAMsoMxDuqPWzgkRakaT8sriq7NFDzhjPL5agjQybvo7Y5Q3iTKg4F89nSBgCv4PhYkQUnMEGYeLoCSeZohm7",
  "key28": "5HhbLZi96SusLgjk9WMDXfN8ZEbk9WRmMu1RBvmS93MdYusiq3PgtvxUUAmYZr8QssWQP4bYoDVUBz8Bs7Z8yo6S",
  "key29": "54cuNqzDYCFL7dGkvCDAqqeCxCq96tDeGLFvKBc72UT2USmayFpmtzwUpYoGAykCQaFkZKBxA3UcHNAKb3MGkNhL",
  "key30": "iySJXqvkrdYPEtTQKRLvZidFSMf7PoeuJdadswznoPRnfYPbJnXQCdXdREAEuVbG2MDpfWJFgR9CXQ5gcPixK2f",
  "key31": "2rxxyPnrzwW7Ak9e2wgcjkMqF4KP358HDtAHrRC3KhXbrxFZvxphNXLjHiu5DGDaZj2j9NRjyjrdw5osWdXafiLj",
  "key32": "2cH4a3ej8AEvSZeYnDRv76NDhoqD456ayDVzqvCifJCsx7K66dcmNaUUiCLf5FujAmGrPTeJjJxeQ1N8ZLLjuDmW",
  "key33": "3M85M6Y4epk8b6S4giTMSkA2uKg3h7D3YieNKGAoKCqSTiMpkSJkjg85rzBB3YvWDEgQg3p6eP2v8WYH2mWrR9dR",
  "key34": "3JZ7L9iWpDsppmZmiVT6f8ap4Cu9hg2vm5ftZgaTFgszZJ4RsQcKErZWXvar4WR2DnND7WvgjrLras2AdX1QNtZG",
  "key35": "48vZycx8NfFyYUMzwGYfei3AoXPcCD7iPNW5WqxhyB7rP41aCXTmQRDCC7m3HUQLRacDoJSHsSszfVQeybpD8YdY",
  "key36": "5zLPtAngXEfxCMHd3jvkGpTK3u1XuEPbKUzNPEMGkYd3p6ASW2vtGNQuMnJJvJx6tjHm6akf3SraZL2KwQ4kjouu",
  "key37": "23mVkgQQepHDdnoqr14ivjs3grbemSkWc4greKraNzeVhbLewDbrCJ8pfqXo3VDcAsQnxuN4vXkqBSN6XGYPJ8tG",
  "key38": "2LSunXG9hoe7Z8q8a39ACvWxriUR26SMBvj64AuAggsebk2pBPGRyCL6srHae5jf7fo7QtTHHTup53a3JFsPr5s",
  "key39": "2DiJQQNphdnTN6Ro4F1Ehqj4fcVnBHASw9NcoJGWBozxaXsVuvCpRm8EvrsjGGCUJw7MHm6nqyQ9YrvPSZr6Wj28",
  "key40": "2J8zwNRuDQ8FsGwRnrKUR2nJfr2EjkyBwBfx3gU37qj7P4X2E4XHnu5BVC2gbEWMSdNaW9w5VoZA99SFdnxQzSXC",
  "key41": "33rB8cNb2MmPq98NFvjP49FYAxeYPKdLd6NfVEwgr4FgLU5NWP19biPQLFGk91d5ThmKMyTuV6GoMYCQphHiM99E"
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
