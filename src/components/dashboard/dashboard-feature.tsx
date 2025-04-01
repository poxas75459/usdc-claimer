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
    "FAWkQCumVbDPgYoxWXFByF4bYGMtNF9Ztvq8mufKDK7JzyaBbqHtzN5Eghx9UEqANc4ubmoeVYKD9LY8drJwRXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "555fS9H8Q8nva15dDuhLEJcTwSbrU25hxqUY6aBqjDQzdFaD1kpzy9YGZ9RrLnoUNu6sLjpNNx7rcyPqZJHfaY9g",
  "key1": "hWvLirx6qBXpYajmYKHdcsVP4nP15zixfdbN8nJqWyU1DjW3iodppU9FELchZLfT52awwghXPZ4B3ervLcQrE6c",
  "key2": "5gTTfuNVoAq3p3ae2CTcLRxX2euKnVb61USU7HtcAH6L9NsY2twbdGfkRmxs4385Yu7CvLgqJ7TFpo3qH1jtPNCk",
  "key3": "2TepArn6EDtqCYKiFFUWzzGHynnG9rPu4YHyJMPZWqnxWcsj9Ld25aRvVNYXwssNVehnGJVsiimcWd3GcPPRQrfx",
  "key4": "42SyiSph2nUqtJyeHNZYePn4oWXSZuxpiMsFY8eApv37b1tcyJuUMHk6kN5bpCPS7TSetNqZsaVH3MZy1WKbiJZY",
  "key5": "4RW9McApZMAFoM9fSC8ukMy2CaeMokuCfvcyaLXWyCsUJV2zH3zrZfzoLUQJdJ9G7GGuWcCi3V5s3n2jAjEc7nbA",
  "key6": "5qKCfRSVk69hffJTkSQMmv1Tm2WYADVeCAEzgY1bEAXrNQQEM1Xg9yCbomcpdrPY71KqrVEtkHn7PnYRCnAFPKzS",
  "key7": "4S4B79Q1Lhncc1dWDSRSSmJRm5XKpe9t6KyE5VuMeA3LG2rFM9K5FuMSFrVfg1c78poAoRiCZ8kWsb5pPS5LUbe2",
  "key8": "cMi2ez2YEh64aE49kNwy8ebZCuXtmtpaccb3LbZ3Nvbh9XLBUU8skuXfoF4cNdFykYmcEyPMqxVo6Wx3YceAEpV",
  "key9": "475Ky1wyZsx4SsNUKvBKJN8LvDbqkebbWDhMh19YT6qQn6mfAsvayLeuKtW5tf11hpCtRN5bNZAfuRWsxxjsv4Gh",
  "key10": "5Cbn23E58EFxRK29pAtHb9YHTprffV6MRFkPEabzakoLxhpeFbqygacA8swbqc6dzpyedQL3Z2U5YRNG1aKQW2pa",
  "key11": "56R53Y2YJmXSWQh54fKLcwxQL9E3Sra6mSaXDh7FhP3s4ZQ6YE7RCi9eQ5snm8gxrjn7bKDUmqo6tMc2exKkkD8K",
  "key12": "5wSGy53t6e99Dt1RY58QuH3DT5DRCp4oqvdszKnoszS1CeBpM9WKuLEMVixhbwHJujnMDvtLiYwxmzXDV2dyKSzQ",
  "key13": "pVBfwAuoURcrWPGNH8FSa2EKMFPZ1DyQsqJpEiBqCUuBtmRt2DW7A3HUY5Rjrw6n4nL5Xu5v4WZrxMLJafYYHQD",
  "key14": "5wXqMxF3WFQWPiNdKn6GBUDLH9N6YQ6diPDCKYv2WNiX2fm5HVDE5WrHC9hxvLoXjLqtBNBAhiTdkNTWHpcuAb71",
  "key15": "3khmBzpJkbYC8SrCJ8Xi16X5avFQ5BkJcfmPnYsDn6gjRW2REFy1L4HEnvKaRh1DAgZ3w7dTszPCqvttaUkui7va",
  "key16": "2tkeNN9MaCe6G7HNxsN9Mzux1oJnG4pcsAh2Nf7PPuwQ2QVsH1uXKhrSuRWUQT4kNsGkP8cyN4w3EaVvc9hy4UrM",
  "key17": "2pyjNxhGjgLCYk1kE1gtR97bEHdqyrgRovGTj4vpUQNdkVLW8Y5yQibDX9SwuTzWUtSLKHy5xVH8hoHY7XPehpdV",
  "key18": "2YdEmJx52B3fDjLXKsW36Yt8aA6CaYMRdNUXp1hQBGoVonWGiK2QS6LLeEyTWPMzpeY6w98R3iZBXBHnHSSh4ZoN",
  "key19": "Lkct9LttFUFxDbADFJGrgtm2wZgf6o6bxhCtENkyUWNXGMpMtnCuEQVek29Tw1Lt9zg945Z1brt4nkEqrdKNj1K",
  "key20": "2SE4j5tByQ5rtBjRqGKMEA5DZR1tFCLMUp8TCKbgfpCUxfhsn2mfdVrVrUHPwTytbuee4TnPLQk3Za5XRcWTVxWa",
  "key21": "4h5VSJ4GSRhRLXbcmMnMiRbQeLzEX39zWHHMHPgtJaiUYKYCjLxe2C5jACuRqRKeGi2H8eH12ZgEkgVAD1w9ZdRq",
  "key22": "4JpqLV1LuxzaS2BRjgAHJTn5j1g4v6suNHbdZgmcYi3b58qodXs7ppaAp7aBehcY1n4t8RenWfN4e727rsKcvz1G",
  "key23": "3qJpjwoPTdCnwkgmfc1oLCGHVzAdcxUKPKFDjCouPVfbDYmepxPs7H79HHf2KobN8BRnxAQeGfbh8ehmxCKzw5M1",
  "key24": "zivemwVXUo3HBGcUoPTE4bt9fTFpvuwKpnvZqppLUkLLTBbbQyhty5tk82EKbcWfibxzSiMG4nJtZT2c8cM52Dq",
  "key25": "2rFJL3J24dYKNE18ZYSmLaZaSAQu7kzKSCT2H7nyyDae5qJD8cwk4Q8hb8VSgSqfkWSDj7sYFTt2eEKHZK1Uvf4W",
  "key26": "66TrCmR9Re4xbFfWRpjT5S3Sc2vagdsosjmstFu24JaK4kSpuXygGEYN6EZC2fDWfw75dZ4AKdd2uYM7hzGcaTtP",
  "key27": "wja6cEVQRjJyitw5iYd19C6UBe3HmFsHd2La9iKuapQTGMzLSgXeK1R2hcbgpN7PHYtNELZ6rWK1ePY8Nk5N5Ga",
  "key28": "2YkKp9UPYYCCnWgbTgHgAxwtZaf33c9WNKs2a9t5kZFKBqbeLKd3y8DPeGQFwXinNB9G2ZGj4QL2e56e4jEBqmYi",
  "key29": "5a8QYMcYmp4fkHp45PQpP5DR4PHxwTH235EdsoXVsR65kArKTwk3FeUd4wuQvQHbMoKWgEUyEr3Mz6Yz3fEyAPQq",
  "key30": "4kJvV7TS5JXgT8CoBo1grxDfJg41HbKU8aVSmv46fEhZEH8T7rSJtokZyxNC8XVFKeevRhGABbVyWvU6JWa9M2du",
  "key31": "64MmkmE4NkwP13szSKzHGHiuNMBnuixwbtCPxM1ZNGBZ9GqBEkiGEa26NZskRx4Y5nJcuRDe5enYSvzDqXKJw1jK",
  "key32": "zsMboC2CXev5d2QLqrSx8d4QuS2dj1CMYYwQzt6GHFZ4sqSRC7wGfinYRV9tkVHyY3dytWidCMafByvqe1oiEKt",
  "key33": "2aY6661MjhPmBHymSFrFwY5YDydDxynerhQtocWrgTE1dY7kU24j5YCQSZaNCrXxjrMUq8THSmkjDixRFPPjE24Y",
  "key34": "5Mxq5fhumc1dh7R4ZEYMtKH19j5USjqEjAHCTJYvdSn1HHCtN2uXvRAtXmk3EjYiXzWHvDLqcsw2sLgH5FY4Ae1y",
  "key35": "5C3F2tozA5VBsKKxGw19HrQvixEuQ6BMC48cVouT3DHBNsJhGFkQjvByC81kfuuwGWFyYnJxaFLhVUHmnNSdb1X6",
  "key36": "8dikqHJ1D6NsxTdRPAGMiSVrajEoS3eQGTw59AS2K171Wmo4HYZCA9HGcVe1A3bK3xk7bx886owocj3EyN9YcPH",
  "key37": "5Ww88izSjDoGCYScAYW8Uut7DuD5Ehy3ZkRRWKcP1EFed2SgvadkJ3N6grDUQPwVMimELGkSuzRmLSe1mYJ6WkAf"
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
