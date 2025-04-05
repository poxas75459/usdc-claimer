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
    "ajXcdq5nvUEpV3Es1rCTVqLMGSxszPmEMspAkFYd8FJvsfnHmrKHNw9qe1nAXQpxPrkEDcgFWPpVuVA5gMhSzYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHnhjPgxrAjLXBDvbi5s9i2uCXieQrtoYyFiVSMcvzQDnmavcy8yduTZxppbowHanZkur5v57pttWzZ3JJhbopd",
  "key1": "268jz1m6b2Fn5bYgRu8iNe6nKxvCWhpECkZ9AeRdcW5XPV4zuMwPDjGBeFMm1LAo7FKiuM4ubtCjWTtJyy5xguDh",
  "key2": "B8kWUy9HPPUnXYzsfML6Zy8zQcnTPQnGG5Pc7vDDK7bm15Uay1vgCgud3uAzjUkxd3e5WU7twzkS6eb2ssU3zMQ",
  "key3": "2CYx8JdzgLoCVygiWGqMWKHYAaxfY6HDRGwvCMCAe9GYa1K5uzvW2A3u2Ku1hN82Wz3ywNErLmkjNYwg65JQPd8x",
  "key4": "W4tHvLVTKw2ud2S6fbrFYB4xYT2PoPwM6QVFeSBtG8txMss6rbbwuPsKQxP8HMqFQ5R7EUXRznVyL5X2A9N6GW1",
  "key5": "4jFZF4VvdpRAdkvdknDDQSjdpJ8tzuYGt3A6z4ftN6H5QfEYydKo5SdgxmN9ABwnpU1kbYJXKgkLU8Ko1cMorsMj",
  "key6": "47Nd7D77oiR2RG5tUrkAjA3vUG3BppUMSRC3Dv5TnLZXHjrxQ6yBiqs6EVArT2eBVmiS6eH9qfKwni9xcX9FZ5Rt",
  "key7": "4TCqnK4MAN6ZLzTcot2sSoq3ruuU5tDAsiyqa2Fe1Q5dBctKKqpiSfwZDEZpd8pkJnEQ2PCcUVcD7BP66DaeWSZ5",
  "key8": "4WurBegpWGmpEfhXoHMN6v96jAGb9BCRKaJXiwG9mYvactwtt19D8THrFn21ZBP8KZYV8SeVCKb2uQz6gKAHNgge",
  "key9": "51518mbJ9Qd6aiF5KyiPFF4PdPHAyM4tZaJ6QKgfDesBSReQTPQ3VJcSJY9WxTvDGqHpV63THVeXSQSWzTJUMLye",
  "key10": "5Cfk6xzaEgeN3SocA9e2U8gn8VxqjS9Ve4x9iWPSBgZKa7QxYSQ7x9eSCY1shgs2cbeEY7ywLX4kZSWYw3LXX4oA",
  "key11": "3CdrB5JBHJyBF94XkauNF8BuuwRarhoNzfu9MDyKFhgdS37HbVgtd7Xk72v7d1JtnSZ82RzjG53pEhhtPdoDXThL",
  "key12": "VQ3WMwgJ2Lu6ZhCEuM2p4txLu6kX5La6mt7iabzuSZ86PMDpNrXs5gf6TUMyahNuH33mgBfaQD3Nk9ufK7dDjBr",
  "key13": "45buMD1qtWU3oju55BfY9vGzG5iEpEDBvnS7zSvcnVshzfzxVFtNadJjSw4LVDxbemjBwbGnUNnNYv2N63TreUwF",
  "key14": "3R1b9gSJJGhi7ityp8dW6keBQd5Tv9zRk7uvPvGf3LTq31c56vra8NB2e1NDRQt7pHy4mP7iqF2Qhoob3QXZ9Zcm",
  "key15": "PmgBgFv6KEUtFZ3mJFDjqLGjG3BrouXLXVLLFM2PGUUyzuemsANi3TfojTPqda1qcsRjzzhUYrrfHjp5Ly9S9mP",
  "key16": "48iqbe8cjf3mcNQZs1iXDQ36wB4QVATCM7C7MBnpNL5JDw4gDTw918GHj9bz2fyNLySntcgdhWKCWXFdtXdranwK",
  "key17": "4426JPqEg9HHDPh3DWSjK9ekaWgZHMRC6pabpphwzKVafa3JjFkE8HKMdjR1patfz1aweQBpBVRaBHVepsFFNqqE",
  "key18": "5Z298qmfRntxPfH7MyMC6GJKX46VtztpWAUA6G4ZCaTmjSXihFN6SsJQquu4mYF3uEgzGuGbmSj7ZNfNs35BrGQ1",
  "key19": "5Eqz2xMNW6CDpa7jNVtbCGnJDRSqLBY2LEHpj5qM7kvEL7vCbJjXnhykkoV4pw5gnN6dHYYVuuMCSvevEec2aTnN",
  "key20": "btbBZLoeNoB1BPwCJcQb4ytc45EXbRSo12fnu1NjTvNtmhxkU7rGWq4H96PcsfHr3rVD61SCafce81aoV4wa8Y1",
  "key21": "3a7v9b7nsL5pEDH8ce9QrmEaDG2T8uwhrbm83soP41pyXciutY5sG1BsSY8HP8A1QvJ7zimyhCUKkqX9uJHpFJc7",
  "key22": "5GmRZUtBjCxuhBAEXQfN2PqJrfpDFCwvwJNayUmsNmk6W1tn5dHFeDNLaDMepaNW2Y3eKpZRrzXr48SfLBnRekjg",
  "key23": "2Em4GqPa9eDfWQRfJ3bksp96dRBxESHsVnRMdaTZJXVX4xxfLuGKTHkTp3mehCayDnvctvGYyNEjWBRHwDxUu8JF",
  "key24": "5PxFRsg6Pr5XbrVm8FdxWB3m2AD3PkaitSXtBjY3XVi9xjeLS4fw5Am7Mzm9UttoVi1UWBRFgpFUaHyAZNAzZtZa",
  "key25": "4bjS7UsURzUUQRwEQEFyMMeC5QpuLmtNiAt9uFemMTKeqerLnmxYNPtv5igCwHktko5oZBYdZ9bycXLgFizADvqr",
  "key26": "5cgkYjkFdvUvgjqBMigfMqrhu1y7DuZMmCPnZg1M1M51oPQqeTimJTwazKLXCcx8zMxRtfBQx8SrLyW5zPHMedts",
  "key27": "3swWivdHNJfSCEeHWRSTgwdURr4my8t1RCX3oZV4cNZN94HM1uNEM4UXpKkGboRZTAuKEMfU8J4q3sDZMLpv3h6x"
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
