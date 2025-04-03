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
    "4bxmVP51Pcn5a34S2mBnk2GhjKR4ZZeUoFe7m8Ttb9agh6heH39YFYQRbWYUYWgrwhAz3gsChVeNAbstDAxCMggu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qiyuu2aTDGDX1NMFZV8FxY6XZYszmju9A9P2E7auuryHdJ3Gtk6Z3rQ3ify83rdkx2vpSiPVd6fqegq82RizQXN",
  "key1": "2kh3h1tXhd663h4cdDMBabiAon9QYuRby7CiB7bsJsmQDQPx4jakU753pvN6kV4G2QaLM2u3Hcz9GQFEPrw7pgxS",
  "key2": "4zHE91GM1YcBwgfaMLW1LLrAgceyierF4jWMUzwv734BDYSSiqtEKDSiAbkTRAdd7AQGg84K2jDiQGdmwDYHjPcu",
  "key3": "4vQPj7LbVqRtBZByCsdTBZv3C2Ko1VVuFtFtAvFd3Rk8BZQbo8embNmJfCxZ1MveCSvzLR6NEooYSEQoboGuHYm",
  "key4": "wBhibWKPcAnLVXCtPLqu8Nnki4xQBDdQd7dQdqkvXvBaN1hTS2e96fUrgHLc72z4J16podD5gnChtCsfvKawFHE",
  "key5": "4eRg5FJtTZWCr6ovfooDGzyXbXDx8yjKUbNVyzjCwcb7krf1sCY9nZHvwZVC7cYkhWi3wBkLS85bpQu9ufHxsGf6",
  "key6": "3iAosKyTFHxwisqj1nFqWsGjhDRvErJQTg2cGKm4PAeornQREDcmWG2hAi9KnU6TdoZFPdcDjBviHknpyavoiaGo",
  "key7": "5ygc1mWajr7VrcMC5pGbkw9TDFai2kzhnMXKqw7axKR3nzmiUF5YMf6UpQDNdvzL6ZGXX6zk2eaVtTC6pjJkoHmk",
  "key8": "4joyxDVA2AD61mDz9Gg5KnrBfSosjcvgjSywW7VD8BDtD7H5QjEYSygUi6yj3Rb7Rxj2Er52CoCoTcXQCEprk4g9",
  "key9": "5eq1YPh5uYG2fvWPnEw2DwyRo89vWa1yfjWhitYFEZuUj1RbCjw7v4ZvxzAGQKPjstdtqYFFd3H3vbyM9AsrpbBT",
  "key10": "38zpVHFSpGdTsQx7CP1qr7BTPcG9vptNfdr3w5uTG1RnFV8iKa4cZ4A13KAfSzM5FQfRCu15iiQbmmmg1g3RrdDd",
  "key11": "55JrHrF219Z4dBVbSBHY8dUNTrCnEsvw7bU2nHzVr6tnHftUzvY2V6bEuNtU67vhryKQg1BbWFyefGtUnoCRczDn",
  "key12": "2CWkjUEjyxnkxrX9uB7WLNtjgi7pzwUYMYrZ32rMwo1J3Hj4EewHsKDcEb4e2Rfuws7GJBoyZ8x3oDdixvFBgtKE",
  "key13": "3vv9RYrauTM8wXuQvxTNaxpjhvxgwjY9JZNrsNcEswC4iXorQbwDGJhmSkTekimH1HbyXPTtbw2xsu2kvsufpQYR",
  "key14": "3VpTKsY5pRBSqnZMBXm7Q7onC5V3jRcJCfPPM6mh3Q3E4uaUUE2toZP3S7tP8zTzSm1SZYaW4eTgKeWCF1Png5XR",
  "key15": "5CW3bwTL7kpNFEzXYUqT9GL6hxPLakCdyAv3pftaJLEEwnRcK7UhRH1yvegaqEnoKbezwN8UgrFv51JiLrrEquni",
  "key16": "2GmkEJDXfUXK8jszDNmcQVdriGVGfQsZ6hRN2dW4wrfALdaSYC6ayNqm7KJNgeZRbtiAgcH94krNwg8gseerS8ah",
  "key17": "h2GBTasmB5DFxERgCN3KZXWUkCp7RmA4JDsbLtCVphdrs5Ngf6RDgSxg3pxPAw6vq7YdMo8tpEbSsUsTR3uBwHu",
  "key18": "3TiYgfdbLENdUpFFc7mRCc5jMZ4EzPsjtdWg6uMvQir4b5Cca9btKnJcrEP9X7dRdNT3p26s8uF9toBY16PitY4u",
  "key19": "4tFnNemRNgubDwGgEoQCLFW1A7ja5Rcm6GUQyhNCRfyvi5E7JYZVfw6YApKKQjw4uDi7LGD94HhECnx1YAgCehbF",
  "key20": "5a4ZdwpR6UnpwRtFjTnqL5yH4GHBuxMR4zhW2KHuCkFPBb22tqsoZ1o1U4EYwXdbRsWLHKPaYhokaDjjCn71dA4V",
  "key21": "2C7n3XwZ8cp7gB4uYXYo652XV4o7MgGiu8eBZ6A6gXE33AVZNhiZbGVjSb2G3mgJyNRd4uPbXoWnJoj3tv6Muy5t",
  "key22": "jsFd5Lr5967z6puGaw122m3CeT1ejBYQm9QSnJYU891Ji4Ttxipb4h5rRjTeAEcvPVFak4qhUF3D8A4hgZjEE1P",
  "key23": "2XKzeAqECvfHyyLaheng4oTkyLMV3LfZZVjyN2QY6mbQ4hyPU9YtBPVQd88bQ6Gk3kvk2TDzH8gU8TgdGTZPnsJ8",
  "key24": "47fDF7VBCJQMAwWTFn2bFiBBiNGcCwewCCutznsrQH5hr7Z9qjFkjDQpW4ii5P5unZWZY2cLUYbKiNUtzRs8ib7B"
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
