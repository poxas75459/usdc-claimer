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
    "w8CcKKQAm18rqLgWZpr4T6bV9yyER9oXNGEk75cJxWG4aKrxXf8B8Wzmsvur4Swzio9tXj8wm5SkF3a6ZebeA64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rms97DE8BJ5ZqGchR11MBppSFy84B3j5FmvW6DbMjgjzvEdSsQHSqAwg5R8FBzJhmGEXjkN35uqS3XdcurMxWLH",
  "key1": "3PASAxAowxpkAq7YJpLH5MdiccHsXeRDRaazNYcc1LV2qvLGo8BVKAdQzQD9nZb3Yjj4wvzaZzesgbjGashR82R3",
  "key2": "261KEwG7CXgrw3cCWgibAJThToA9342KvCJG4mRsqBYrcbCD3rCjnuyF4Sf1gMXVfrnte1L42SjwLHLiH2cZR5CE",
  "key3": "4WauF97eD4o5ogNbfemqWZ2xmXFWtKxYxYfFTPPG4PajZRKdnZpdcawKohwonDfFNrEXDNP1WWp5fQY28j21VmTX",
  "key4": "5r22LDSGjMBt24qc6Eyn328B7jamvkAd4s7wLA5FfWFg6fZRSXQJkmes98VcXkK4fw4ahnBK9AbydKuYuVHpaHYE",
  "key5": "ksC7nwHbegWHHLBW5RaLc9xRukYs2VWpzLcVhoMb6aHK59CKoku55oRjZr2zdCaUdHwCLdtJcwuUf2Z4v4aBLPc",
  "key6": "4ynWzw1m67pDddrG1mz2hNTHbzAiAhdm986tzcCpCXTwwZhC6JJzk6fCSgZ2xEcMKLCJpriikoGpdUNjeCCv5N2A",
  "key7": "2pAJagnvptpyDzNFe5aCwAwzVYWMcTnRHaDeRK4MAtQuT8P3MQfJ5kj3KURR5bh4Dzq5pgwZKmYyRj826f8VCXvT",
  "key8": "2VPifRAgyFJjGs4ENGgyKpQ7rftswMyiVXeVem16Kog2mhXzEQJCEnFEg6FM7MHjryKDTjSjYP4J5pnBLXaFKETG",
  "key9": "5cszcqv5qXzAZckZEJPNGgCZPSHRsqYZB1V4s1rLid6ByZhGKV4wC8NkEo75kd9SejDUqEQEFFfXZakvLopyYRAn",
  "key10": "uQfXNccngPcspGwEXnE4xuU5j4YCm6sHS8jwL3p5CaYt7ZB83SwV9BLrapmDLxTo9ci3pzgk4RFh6hP8LXZ14CG",
  "key11": "5AoSR8ETgC122s16y25Lv2EzUwzQBEQfCnHpG4Mhy98yHeSrT5GndYbPG1yeKx9m5extjX3JRH8Xf3ms3RG8SuND",
  "key12": "41QCRrhQBNR82V43JH6NV3EekT66HGgqXEdmcFsVYGCirwnGAmgrN69nmjNjGsFAdFevDKETRgQYiNBt4EbFVSm8",
  "key13": "4TkaLDB4D5r89ZJBVa68xCnpDDm3EYUGMCjmUrkuk5rkW7yiCnvuVky2iFujXL93CYnYHXmyZ1LKT9C3xZSHSaMJ",
  "key14": "5tYUKUPw5ryXusMv7vKBtupmQZsQ3wxJD5unLQyt9gjwjtdW4a41KjBo4UAQRJdBsepfEo1CMiLmkVnebHqsnzGZ",
  "key15": "2KwKCvcXSHnxXMKxRetXtXi9JDjwq2wzM1Gb1BkGwbYydh3sUTArKnWHDivwAYPhDdKNo8rTSnjmzqk96iDVB5Qa",
  "key16": "2StspL3GFAtzVyyS7MWGUugTXnmwkLSgpZ2EwyNnGBqLa5uT1GzAvAWbDLvtTgNdZYKFXAeirR2zQ3JWZMjN8RJZ",
  "key17": "45cgdja6qLBWfF9WcvPC1aoABPSfD13dGjEPWHfj27qdHT8MPSHZZJd64fU5cidfkAeUDRr1bQKJGfbEYG99udJZ",
  "key18": "7B36G2Vc8QF5XptAoDC35ALGk9XbFeWNqSKjDN6XbXGLfRtbJ5uYqLGy2VcvJfRtEs3kPAaV1DsPR453Tsjan7E",
  "key19": "U7RNqzorT2TWvqjE1h7ZTjeVbL9rQn5mMrb8bd6XyCmCUveRP4JsU3LeSBKLLzB5ScWTCzJfjJagUUepKV57s1y",
  "key20": "zmj8q7SbgU6YjnTVFYkLNJVmKNRiS8cC3mAQ8uUeBcW4MsYW623zQQKe2gCStewoi1RCDeSQgW57RcFBda91waE",
  "key21": "63egpzGv5V6Kri5dW2WpUPxNrjyY9UgrgN5cRohxfCz7Rpg8w7hUStBsXXYC1M7Q6XSW8z3piZSFZcmo7Tu8pPyk",
  "key22": "2qsrWUHKL3eJH3fEZUgAX3YPP4S8VyEGy2aKbP7bVmfyPhaxVHZyCDDbkqpxHNvciaEW2nT3oXkdeAkYSQUihXh2",
  "key23": "4E28mv1LMcCAFKWhKK5XRYcfTYeBwbYbMRPFKncfwEjMKeLNBJ41CAmNG4vQSvKdnKJSaYL8BpoQgvf5mGhfPjbh",
  "key24": "3HB5XJhB8U4QHabsLC5fY2XcmEEP9fDMTYWXovA2wrKWbwZtPN3RHsCE5nPTUo99az9jeazA2DtmjyfnisEBBqax",
  "key25": "nJ2ib62EpHbJuoZfq5hkDvLTts59KFW32fLTKDGbnACVwrg6RK2e2uNqnPnjUgunugTcLh8FFM5bogarxtETQip",
  "key26": "663rfLUorTmzhjYtygTpmXLD7BD6gQ7p38SDV7JhP9vCWQCpJshezcHBHwSm7ussnB1gBT6Zd6hFrhqyNXXdBnFV",
  "key27": "4wVbyDHtsjYogumDmBTZ8vYZ82Uz2wjiy3GH4i6XqCLyHRcEyTbjEYT3PrvdCz7CXbJzBNeJajFDtH5REyH1usM9",
  "key28": "3T6pGs48CZjXsjrUQEQZTJXdscpCXBzXR4rRnoxxTtuzVpBZsfTura3XmqEVegv9SZyH4pSjZoJq7HNSNDUeaA9Z",
  "key29": "pos2S5BJnTXjTNBifxJXfD1SN3iQgZb3TGXKXVGe8JR8Qo79zkEUdZ3A3sZ3F4FEszZTg1nppherv65xEjDVz7K",
  "key30": "f5KGiJkRRA2A9Kcd4kAu5zYPEAyxbVCPxahxMXhwJ24VGGbmer6Fs5kTZYeFeyddhqxeKvEa2y13ooKzMPwXdzR",
  "key31": "5oiNYMS5uCaif6RCvxz5kLqaAvsCqacSW6U7sejzYVmFPVSwwRM8MVF5htmhV5e58NTxB4tnjKAwN4E4ELvGdpNp",
  "key32": "8Mm91kC3y1kVB8QDvy9KsFdQYQhwkrELN2muxjw8Hi771UWA2QZHFNiVYQr2GoWTiZf8mSkDb5pLfS9mzDnxAmQ",
  "key33": "3hZjuisQGKTRVLKabT64n3uxJgKtG8s9qZFn25dbW7omyeyCFS9xzVbWncSsfNgWwDWRW3165Xj8zTk6RCXH8o7V",
  "key34": "3a4ahRW9JpnVX99X7vpvzbwzsdzy6WL6Xpm8syPYT1r5Jqs1QbS5yMHzcXC7cfLyJmTFCUUXud4ZFkqhcRZNgko3",
  "key35": "g5FzshFqvL1RbGWJPUoVyez5YdxCMWjWSyu44StkF1c9CVvsVTkcLSzqK8N7nbZbNWRaCTQnjhXu63vvTQGLZSh",
  "key36": "4swTmGvutWwMduKNNrsT6MBqhUpx8AZBQJyFVD3UrvXpazfkfiQFrnahv9DTbNHpMbo9QMYnZvceYcMAnjZrwfw9",
  "key37": "4ZwaZ3ppmHDohg4aojE6fNWLqrtznzMNWezdS47HRzqSeUoE31NUUzdkNnVmskfxTXQd5hXbBxYWMwo39TGZxEKq",
  "key38": "4E7LbuJ39FXUM5TsCbfsJ8XMrgMazmDeKAqkoid7qdGGR2gHg7mAj5aSB2WQ72SRo7syMJ7DxjfUGLEgDYnCn66y",
  "key39": "5LXvuJSe7YiwEimrQjvrS5ycwgNQ4A8sWyPDmZgzRXo6z9Me6SqyesJr1YBk8g4UbLSuUrgMmtW1sw7jiyFaGJPf",
  "key40": "6XDsZa3PAWGCYShLQJ3vsVxzNLKf8bGyMoWnvPMsqKATifuitREYjocDiwfRAu3rB4x7TfcsE7i4vTCu2kcRo2u",
  "key41": "3ohQXfUXiyrAWqsbRkAhQ7ygdn36KRxta9HQSbptDoCP9LMPM2WB114jSzMRqEphjkhUJ9f3D8kBcWfUXKt19fbH",
  "key42": "3Z11XeYxxdAz8huGDdB8LEfUFNbJVVXSZnFa5HTWXVPgze3BLSU7cRLZcp4XhyaQcxzXDtwWKHyadZezxmWC4o7K"
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
