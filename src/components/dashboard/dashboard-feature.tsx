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
    "5jZ32xci5HdK42De2XL1LjkFJMkfz3A7CUJ8hdnn7rGAwJ3vStmpQs6wDAEK1jARXDKw9zAPRpWed1arB4DCGxTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S4KjW9AhX7AfiaFsCWTpKfdR9eio89xLRDkfMw2bhjgyPXKLR3ttUCVHs4NHuwo1qYqS4iYGdnyoDHBaBwMef2L",
  "key1": "4mcANQBq7begvU8KaT5vgttNpLpPbKY7W1uafnn4jkV8uP9cbmDsGY7RU5u4aJ7TC41Uxm8qiWXfBEGfiCom2u6A",
  "key2": "3Bf2RBAHQBhEpCwZtFcWKQp2uHKqdNPaeodRHqJ8MPEN31MXNdo1MPQFfqSHeksvqTMkKZZSWBjpiow28uoYFMgd",
  "key3": "2nQxs3eBRPPskx3aMDAoRqpVEEfwAJfmZDoie5erq7wWtecfsuwK757JPAEsYdXT34h1dzVwyU6xZey8qbruUqf7",
  "key4": "pLpKGaCiBfU3qXTUCPPWVQn8KPKoY21gu4kspRKDPizBvTopk2AcgWYNZNe5E9B2sHkWz2tfN8pbMxwappg5G2u",
  "key5": "ejZdAAVZ9e1PHmTeHrdaaFRg39TTwov4UsjtWpdjXRsaL9q6KD6Q2HLTEwFeFYc6cMzG5vNamxUo4VRqEcfWyW8",
  "key6": "4L8pA4hjJkJNfu4oadC7juvXJxhsdGVMtrZs9BnqaSKbFMXKUSHiqg7CyU8sApztfomkuYeSdfwzgxCAMBn4p5LH",
  "key7": "45BiT6VVzWxRE9eoC1XPW5XGrmQxNFkbfJwBPtrgB2fBbGrneUchsw7nUN941T9FaYD1Y7iPeaH1UCPfQ91bQTv",
  "key8": "3m8axiDUwij1Vmwmj393GwnbV83xcF5SCGdR1mp5CGQfjMitoKC1spFfYYHV9HkP52g3EPXshWomq65kcaMxV1AR",
  "key9": "i34rihjbnE2YsbMSAKUa2LHLo1hwC9qr9K9yLUbzAnf8S99Akyn4ekNRfjX1kjNQXUMKpzA9FYA7K4GuRdYzzTr",
  "key10": "4HijLkmy3LMEkSzbA1NhdxFYiWhr93wen9iY8757Qd78WUgRfat4s3u1U7bmAUb6nZrTP9HV1sm5MgSi8h9HHG3D",
  "key11": "4GH35qJgmW2hpM9QC1aTngC3JPwveKC8X7QmfDYJSeS3y2tkw3DiUq5A7AytNZBqroSpEtHy8JPd9E55VuVAZvp8",
  "key12": "3DfMYWKTG8QbvhschD9rw4B9x9wPSJxNCorSkve7bkFd1AvZHTqniJSodk4fwfhVeJtwHHzF9AQddciX1LXPYLn5",
  "key13": "KzKkUCUiZBbFUiyQ1e1Lao7Rq8i1BNmmQUF1UJHdQG89XYq5seoj3v6WgTdnTc7vgJToCSqakY9PDBTsU8T8Exc",
  "key14": "hkeueio1Gw4Fc43EUT1NJxCcYg89fLr8rmoDLM7L6jLwbEJY1aKaTyD35konmNN5AcZDP6DzquG24AfTzLKW5BR",
  "key15": "2gmwDX1VyeLMaKfKf2xGWzjZbRFC1vptw8UeVCEut9vhYyNHkiqnE2eVXy4euLzbn2e2jaR43FbrJiq3UbuPyWgq",
  "key16": "4yzHsRnuuS9Ha4pvrw21zVnveVk7NNCGYAfZzXWb692dozYMngu8pu4hSeF5oDYosvcQDMRdHzrCcpyLGbqZ5d48",
  "key17": "g3hFhvgkBrgdvdLFvkqKYqAF7GpJ1dH6yuVpEVf89ryjNMTZas1WS5eyFHoqdCtNjuJrJNdtVJqRGeb8hpHCX2d",
  "key18": "2nMi5U52BsJpkPycBrM1gz9tgYehe22NQEqSLtJ86Xoyuw97QRm2S1wjG7PcHPj1tcDdqVoBNiWUP7rqsmtbCLpW",
  "key19": "4hiZHyu4wMetfhwFtUb6riFwPg6VhpbVZoZD5oQvgyC4eah8qSTU3rWVJhfSuk2dCF3wzddPVATubXXrPTbEEjMv",
  "key20": "57RPvwEwnm1nNN3hsENMFUqZmSCwWetovuSvJeX45zM8XFkYt1tFLh6iWEwjJRR12rMWRrPtSHpxC5jQqA6FkCpu",
  "key21": "26V9nJSXo4z9g5BuYtVmH8rWwDM8U4m9HzvN2opdzUvN2gg69D1pzo6hTfVaJNLfmcu1rU4dBEiVXSPvurbMkiaq",
  "key22": "u5egK1NxKoQgHxH885gMVzvGf8qQtsqujHcahU6sTVJt27xdM8niFKd6d13RcLKYymbqXUm6PVWkgWvWA5Vnyqk",
  "key23": "5HYqvL84tYRMoyuE7zofguAqLkWcmBqJnpEmsevZFin9PsjL898KP4JE6rRvHAt5DXAzVY3ftXS1nFQjTdMDzLSW",
  "key24": "5F4TyJAHjC3KoHQ5ZWQrMuX5c8Ls4jZ4y9hTubvxiDSBuTcbC3B2V48gAz2HAh9ZfSLYxhjDPfZ9Uj1d8vFXwkgM",
  "key25": "oHud4JYCrUR7UASAaz8eWCGNcu6EUPpgutgWoZBBzXXadzoux1j5oLmBajcnHx7dp8e5bqY8xi2XXa1jKjgKWLK",
  "key26": "395ybsXBaN8AaCxR9X7nG9tMugXzoChW4Mvx7f12VDCwnoXGuJ6QxVPgSqagGbNJmNDBg8uMH5qdyM1FdnVZDxKQ",
  "key27": "5TGzJD5RfYW2MQCTitsDhBTMVhY9NGHaQNkC8GxXydNTLc3dvcp6in8rZsb9jAJ4iw1WHmhSMymnGKtK5rFmwDyf",
  "key28": "5yeQsh9FA2ep5Nb2QCSPrb8P1tgEYff9JeyNYaxTPCDgmphyCwh741UgBPghCV9ehT8dB4pH8n4QtwEYM588aK99",
  "key29": "26upbdEtwD8zooxMQM4e5gLorwCSA2QCiCsTUtKjtYX3HK6iGFCvm1QEwhisgY2yUQ45a9WnoTvUTp35LqrohLcS",
  "key30": "2hvCCJz5f4ehe7Ri2orzjiGm4ro9BAUqnsgADjrEajomSDe4b4m1VBDQueDttJtdvvPJHFi7YxoX6fiVjZ47GesT"
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
