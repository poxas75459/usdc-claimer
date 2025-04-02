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
    "LzL3etSccNyKAukhVq6p29NY1o4Q568JiyzqmiHxVuDfWEMvxcnUTM3jse8rcZMJtjV3je2CQXSPdmfCz6MkDHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QS5NDivcWwqxZqr6HxtheZJPPNf3fVyrnbbAC7UvZ97G6H1fmTE9LpqdkPPZHRXK4CakLhDSUSi7gfpyEkJunMb",
  "key1": "63ULKHRkyHnSAD46Vy4htZZ9cajrfDG9hFt9RFf7aKbWY1WF6f1jaDM81DtbPJCTLgdizxcbLia8RbPUpfvkPSQp",
  "key2": "2SYJrjKpGzeDcS3EYd3Q99gvHxHjxPj8oaE6Xg1L3hxno8qZ4CXJSzMWCjqhoYmK8i7EWFMWxPg7UiWh9Z21KzqP",
  "key3": "2B7povk7vanp9eP9Fo2xuWBLsBWYa1FEb4x9mYG8PHgMR4KDfhit25bqmUUU1mdmbMWeSJMmC3F3tYyn6bv9SY2n",
  "key4": "3WTTMM57xVquFz8ydtoqmSp9McH1GBCAuNSXi6H6wjoeNrPNgpKpicChrMKHFVniABqq1kZLqAPWwSyDBGBeTiDN",
  "key5": "4kP1TJDJVSUFhyYxUZoMAFivd39EzMZmUVVqn3GFuPySyvhzxdHSUVdRb2jGyKASRktsoTS9Dja548tZRmkF76Rg",
  "key6": "5mj5dDY9atztprvFNMEQozxsZC9zHERQDGuN1QVGMB39N127ZGSRC26jXjQHdacGzVpspUoy9fBj5jernJU2KeQ2",
  "key7": "6cHtEcUuqXPzCjkjTgVKeH5eMThV7tqce6TLgRf3k662hHDJcWBqzYMcWcZnLYo4SLRP4HHV4jYFHxWtZXGDikY",
  "key8": "2pbV2uMjmyUTWXqakcc5D1EMWGECy9jFiBidu2J5deiQeMSjRBmNy7c11ZD36itHv7atHL19TPkDZRhDYiHM7pfU",
  "key9": "nMpWcLZvvXUBWZmyJCFGbQMUK7ggmkAJo5CAN73JNWW9ESGcqDU5xq3YCk9aMjg62P2odx4RJmYAAARdqdj8KVs",
  "key10": "3JtVNes89eHrhvpqC6RvPeB984RVFtwjdiw5KehK2w7ALk3Fn1kT1Ls7rD5QnPRTYUaxF4TnA6ip9zW7E8AJ7R1b",
  "key11": "5qXsxeSGccufAxp7ykTxLKTHeA1zpRR6kHPTZsPerPsM7uZ6owJZmtMi4dGsCRC6s3WoBrC4eoK6fTTKo3Qxvxhb",
  "key12": "2H8SatWNcBrRxvuZ3xqk5VLLaWjYJ6U6FeSNYh77TH3KmArK8DRkDAtQKGFReikBrTFhVdRkxD2QaN3hi11JpMSp",
  "key13": "3RFSohgpVSZXkMGSoup68pBnxgxtL6JusDpQhxE3iaooEoyy8azyqcpxNZUNWPrje1rriwXneyNoj7DNuwy5bYfd",
  "key14": "JkdJiQ4u53QkfV2BB2TjET5WGuTXKEfZShRZQjxZJbxoLVv4mjFSi9t94TMJRUeaXkduZLZSMChMeEL38nFBnbb",
  "key15": "655mqUt4mtwXvKrn92vs7mJu7jGc1EoHhAn11PuygKx4ZYmSp8DvnoWGaXRrn9dP8vujvMRYMfoqhDwRfBQpQ9aP",
  "key16": "4zv4B8VtJUfWbDKC68R4RM7ses2CFHG5SBE945MxG3x3g2DcL9o87zF3kgdsPhHbm3icS56tWwe8s4GDd6SAk3Sm",
  "key17": "3gdVjDK5qDpAb1NFDovPnifjyyvE2uKMUDt2QrZkss6R8MK5yPNsnFnMb5Fircz1bWq4YjjwE4NfYZkuKhofwAcx",
  "key18": "4UmDGPkHWBhMFeCkT2Kwmcgk64swjmCgrNR9vXwCuErZ6U9uVJoKdt8Lrkbm1gMCGa1v91HkuLCEVxJpyZqfWZxs",
  "key19": "2MNiHPgZgtpGDGTaxYEBC5Jj166FPQSke9fLimCRgz3pkR3gsK9fU9FvviANZVhExterYZxrGKAzYdxeT15tk79Q",
  "key20": "4wTiuC6mWK5KU99KAmgC2d1TamkfqZU5gLeW2KMm7YCThBgBowLVwkpiM9HV7rhs5eDB62ie84b3K3SGdHNxa1du",
  "key21": "3PNTBZsx6tcFv6SFT8rEstNTKqGbKvn33ffJeHyC1AvHSb9u5sTEuZMChnCv9Zovjvj8m1VuBSW1HExD8C5RjgUp",
  "key22": "2cX47TGvgU8f5Mah9qsLvWeCWfoKVVwSj5VqA9eumGZ7SutH9mxUMf1AJkQYthabUf4UVvUTQ1tgQwCzYZ8ooj6J",
  "key23": "4dxPLazHUdu6tz6gYBHpEC1BdiHsGScKqkQK8DrZpCSLg7nXB5PSresQAdZWM4LFLbLzAYXTN5gKDmUtUoHAzVAx",
  "key24": "uDUMvEUaMtAnQwCmiWQPFUAjzvNZVy8m4qf9mzLT4bdxmWbsWmGzC4F87ZpibqFBhGf2QpM5pMLH4uYyi5TQGJC",
  "key25": "2wGQnq6ngMn8MSNH8LkbfQCo8vqyzyztx9WuaQEzMvQDmGZrj4FrouacY2GaXWJu4nmmZ6Urxv5sAjGqLjDaxvCG",
  "key26": "4z1F6RV9d9tB3BtUBvutp5vUR9YVPvNBpomDsxo53Fm9vjaa7rsgJiYVAxrRKC1VZbWegcHEHW1fv2nwy6THUpaP",
  "key27": "3dTeQ6E9xrGiaF8KQSfzgU6fSeqQdze1jYyLVhsJ2aWqmz46gbXrwQnhNPJqiN2VCtfoN53Cg7XVYnaWbMwxYaV",
  "key28": "5Fihs5wuZXSnVG7wiYmsWg4YLXRwiFKTaeFyPaeZbUQk84uNjSVGpFhqCo8uy4cnon8KMtEg33AXTLDrLX84HiBF",
  "key29": "FFd6mxfbUbHiJzZ8tVRKpLNspA5XDNRhsFbc153CdQetjNT8c6ZDpf42CY4udifwjssHqqVutYBcWNAhTTJVtAg",
  "key30": "5AwPJAka5gqwJTXXEGkkS3f79hB17F9N3J9c4Tc9WZKXGWNLU6irVxXgHWorgpRyEdrfMyg2NrHA2nezDkykFaAg",
  "key31": "3gnNCY2kJ875qC5ybYASGCepLLMASNNpbHaaTTGbd49pB8hbGT2pv6YK1wqPbremr6LDk4vbjiyeupZ8XdiyCfKv",
  "key32": "4y1dLdEGgsGnNarfN69EB2gxwZEbCMiiSkMgp4qypUxhRh8AkTebtVFDMKyAwxFhV8W2gM2juJfkpkzLZcyfycC1",
  "key33": "5ZUE5XWTHsb4mE9Z6XSeWR1zVbUfc4Cq68XTh2knsjiegy6rgSVeR7CER85BZcXy6pG2fLs3HCDMAstU63q4Wdth",
  "key34": "8VNUnRUSi3D4PBSTCz7cHjna9Ui6TgydmGYa9rEJP6HVxQD4wdRjcKfWGMrRAxsE92wxDbECh6maLLrcrXGGFjk",
  "key35": "3S5GgwivcPEZyEyVrDsVRhebThg3mdeWmPuGvUG3AvpDMU7nfxB7yYFDU6neNWk17x3vLRCqgNP55RGkGCVbPu8H",
  "key36": "69ifwharZ9ue2VMbTm2isp7bsRSZG1Xy5cSnE3ZZ95WaeR7J1W91dEzUv7sQmWv23EKiA9HiFQpbKSdFgbEgSY3"
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
