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
    "ifCAD3z8ZShe47oY4rNzm17NF8o4WWBRZSwFU927x7SZohFtmSmGF251uWXMqBQzYHZJrj6ue2hVSZyyimL7R7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sgyLohAurWTnH7kGoDJCosJejHdrL4UzDCkwyVwfg1Ur8geyZue67jU3rnQcMR7JRiHiKZcsnprporYJEPFud5V",
  "key1": "2VFBmbBAZPbcShY75hYPZ4Y2L6sgZLFQ2bKwo5pxHuWiEPsmZuxcaav48AKJhta9XPSw2GnULE6tstd3gSmDAmdU",
  "key2": "cHKXX5iPRyojtgL1JDmXHuZqnWoscFhn4NgmnNTkzmJFQLKvgirZ2KYrVdNX5aVrD184fcYPsiU7T5xHAH7gBob",
  "key3": "5rJqKPFc753gew81i577aKrH9i2ufFvbpgfBEdpbNiXVSrZVChYaYcrLVQ2XfgCTcVKkqJMdcLEw9sJLiAzbcFZ7",
  "key4": "3et6Wi4poA9pEKu6Wm7cQzrUvR2DAM1sqBM1M4PhTKwEHth2SZw4DLVTHkH6bbx5FCf3G9FHTdFsbcJiuYcbZA6Z",
  "key5": "2fiArLLjsBymiYhusJpDDKqnjNvswRTBXrU2c9qBVVpdhJKveKgDzZgzMgYGzqh17JFNHkeuqVCv9JBXhVw6VV8s",
  "key6": "5XpXP7mgiB5xYsxkemkhdCEgfhnTZyTxi9gtyLmajRCg4dpzjWp6xFURiHMwP2JUAm5huUsc2TAkkG8orgBttmfJ",
  "key7": "2VqNjBs7DpvxG6asapRSmPXy3mk3SHTYHkzL2xihANPsroT3oHAzxFYBGKfqN3Ghd6ctwU5txDAWYKQkYgEx6NTC",
  "key8": "3LTjynfk7ZeeJNaa7atfb7WkgNv96ERSjXW6wHCtAimcbtKi8E9NVBaWMrVsXbCAz6Nso2JCouEKg9wiqEaozkpJ",
  "key9": "2DjCiNCxei1k6NKZAQmqk4DFExMydrx5kwYeA5rqThSLE2zh2cFnZbsdNuMXiq4JLsfxftnAXTKMErURTvPcDNBw",
  "key10": "5nSoPYbUogg7AKxkHJ5n49YYEKoQZidLji52jGmZZP13dVZ1myo2rodg6Tn8aTQDANaeLtAfmy3Wivn6mrGaEi2j",
  "key11": "TV7YkZVFwA49Nnrsc25E8NoR3cDFvN4sybcMHGACt8y7vuQ16ToU2P1BUcEusEQiwqcjeJSkRi3XuP6YcnX8k5h",
  "key12": "zxciF8JsHVb7Xdt63BMzSL94655S5Nt5NjQE8o5aWAddTNTq2aTKnq4LYqeX587HbntREY3sbQopcknLQEFysHz",
  "key13": "2pfWNASRjkLUMa6RwA3Y7LtGkLZnj7jEfaLFK7Htba9bpPdFv36Y2HfVigMcxSg6AKEmXM7r66BDhzi41CLKYZH4",
  "key14": "2s7ekiJaQPyMfdkEUKSZhAPbB6JMZxdtfR4Hm7mrpytrRkTDxnydN4y5sKs2aU1uGcsvkMEtCDrtkfu5P3VZe2P8",
  "key15": "4fwaaiG5r4SuSH5EreSg3thRKgaaeTifX2Abdhx9YN43TKWjQz714tWBVSL6HGekojAGzwQwirg7dBUGmMY4Sj5C",
  "key16": "2EUVXwDDbjaCnt1mqK5ExJdMN2qc6Hp1etHRGokrLyqWvvV5c8QptDcDYkxdsCTsDhCausfayiQNukQ6tuJcC81b",
  "key17": "5pCgAgLJbeheup3qtvj46CmJcMdZpwn84iugCCi7j4A37kPBxe4yCrsMfP9Bi7MQfzzoZHe8qiM9M7qCv8XMBvBC",
  "key18": "3c1W9aEgmHifzwJMSi37x43EpX4kwvzS2Srh6AL4PSixo8hrg4vwSVbADz1SqnymtCsjfpCVgASpvJKE42NpWLBX",
  "key19": "3QMQ7G3umAe5AWdTfqM1GAVsD6ubkFtiW1ZEzgwwFYWdfc5BBGhJWBf1vXyXmVt8XaqEi9Fz3Dyq7H47LzBkwUKY",
  "key20": "46xFzyyT6u6G3DUTutLjFuS4t9MfD8SFftFTfZAh6YDFiH31usV6SkudZnLvFcdQMRGxWnCLg9cpBukm6TeApN7M",
  "key21": "2gad1rjiBkJNNLSaZW67oSUcY7R9htTFopPKWscoLNRZyouC5CpZYDkmxcv2HV9FQWj4aqdoz4XaYV1NxxJ6vjbC",
  "key22": "4xDj4AQx6MdjQwyvVjDLKfcBwABy5B1znuYcW3BRxjHirhFjc95emNxM8MtBnhLksz7hdY8aPSPg1dJb3zDw2DXG",
  "key23": "Dwyx5egWDeN2T2bKPgRoMbuuGjfy2MidNkxrXMnzgXNyy4czAaByQ3F42pyhMCSKw9MFWCPh722crisFynjEHnP",
  "key24": "3DAmgpiGL5oK39mbTm4GpNDSEqosrXYhSXYVgUi1N62h8LXDJZ1td8HRXBC6SDzte8JU2chfn166wJqjSAk7weu3",
  "key25": "32UYj7gCPeQFmCxTQhmdCbitCwzGitoKM2BTAYebsceyA8rCfCfZVFvnmkZaRoGR6Tr9EHLpGtbQt5BjzV6iNLQR",
  "key26": "teF7tjaNMNxvFo6cBVfHyurCCryQ4oJ83nphRAo2YNENcZDRjBnCkho2StMxsPd9uLYP157nRhDcY6ZLPX67EQy",
  "key27": "V6VwhqEUDqc3EBDgE2ptfUAe4hPYE6Gm6EuP5iT4E8mfemxyrh467aKk38xGmPra3JHULQ8REhEiUdJ47pjK8xa",
  "key28": "61GNsqXfeoracSqmk8XyajR9AJeHhxMCEu4Q2mYMUeesNZNzjdqwZM3Qkd7Apd9rPTc9zr3UffNmNFAVjApJMvJH"
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
