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
    "3y4PdtuNNFtZ4Tf3yTuNzifZbbG1EQ2Qkaqdm4jHCVbKmW2E3KjxchXSws7vqbw5uCLSHM2uojA3eoREEsML51wZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yrSUynndBV94zAsZZxEMhRXncrhgQYbYU2tfxdQq8AUJgLWnWWVHT8T6mo2rSzCs22FEPYANXJzBnt3ucuWCfuU",
  "key1": "2kvLZgCD8TvvcfSYVaycBM13Af8bgG6b4xs1fF7RHExw44h5tU2u7BY8fxvPHRaR2uD23C8tuX6oRw2xJzMWbUzG",
  "key2": "4Tpk8eWjZetJBFMyKVt2BQLDbcXaYQN7hTMB8QtAvq9rP53jfBJXfNCDfupgw2ZUW2jVZgi9wJ4oKJxSWSX6Hc61",
  "key3": "3W6AQ2Zcb3uwdM4FT3tCsNWhyDDi8CNhnKYdnfR1FFbtGrNH8C2R2gFd8xqQzDfg1FECJKBxiBfa55ncLDDtfhaa",
  "key4": "4VgoWfZxNNKdh3Z8mGkFKnhCCX9YgiajpVGfDRCFjRRve4FjtGjnCCT5X84yoPoa12oBWR4zhaRrq2kGyw7k82Tb",
  "key5": "2HxPT1sXwrWcnK55fBZGm9Gv9Fe7DhLo2t8hqFL6w4tG6ytyqSoXqBTt6SHK95GFu3CRmGGZhohgg6QisL2o62mh",
  "key6": "3rnn8ijPTpcZN7K1PqYoAmHMjpfXn8uUNEXin7tzY8MTpNCeMvxGRv7aByUmQyYpaSExZpJkAnByxAVN1zBp5rWq",
  "key7": "3rDde5QxxBSDAD86trrXPk4wRHh7g7vfwcuzyAyfFarPL1QeKfLb498nfZwLPucDrnoFr6mW3zT7hxXYyjEsnPtZ",
  "key8": "2XPP5vQkJr3WP48eXgfZtmgdPsG1XkcQcuArXAXD79VWXcdfv1kfmTDF9jRf3ZvoQbMzNqfv7yhKQvqqcoffsr9b",
  "key9": "58oNPiyXvDG3KAyMB7hn7uZPQDUBm1aVohx7fHLQg1QLiyvr5csQ6vqyJWCXXkoZMH2Y6STMgSiDx764MjbY8dYm",
  "key10": "QZHeGRJFDKouji2cVHQZPr3HjVkbxEGfaZyoGu8iESquWbmdSndgkdSmr8jfgFTFhqBNfuSAAhwTojZExgre761",
  "key11": "4B2nPuHTUJHA56i5BBuk1FitUw76Xhr9LwTeb7UGBGL8tBnfFD9x8aFNF5NEPcNKuLYmAoqWjmKxG7a6MRn84kyT",
  "key12": "4igeAttZVMfhHooc5G3PV138mcUrkJNwM4BTGqsAaVSEwWwSvakJSSaSFoZiZ9HL7oFj2yuzGQ2S3c8t3jPNvpwA",
  "key13": "5e1CRqpoxQMxr8juqMeKPeJi2iS16PagV82sJKwywK58YGrAwqzz3SYxjzN5qwTAi9M8E4957T6qph4FGuJrqZm4",
  "key14": "32CeBwodYHfckJs591AwG7YnCD8nRpKDoHcsW92mjGQs6eUguC83Vww5vY6dXpd6ZyPrHoCBJJrDp3h2YLEMhN2x",
  "key15": "2mp4BoUjHtepFMwyJP1SBZLRd3nKGMmwc96Hd8zw9Wnwdim2skS4ZCEoZTNHxS4qWLMk1FoB7fXXiM3fhEmwWQ3w",
  "key16": "5ALMxgH7U3GVceGaoSNXG6kyZFkroQfjcRNs2fYjxxcs5uLGJjnWiUM7hz27QTE1FAXsiATLHnM13dXHA3dTHNo",
  "key17": "5LtruUWcxYUa2hbDNJcMuHE3HrpbvFBvhWEZryG31d9Gomaw9AfnXzug6VnF9C4ifiVjYaVVYkd2pn7e86xJc3g5",
  "key18": "4TF6SXaV2hG5vVv933pg8fnrjDzsMPvWXPGsFCviN4EKg4mDSqJLoPzUhUg8Bfo9Ra7zodB8BNwuiA7smtaRAB1R",
  "key19": "4HZmMH2sGy4i87qJV6KRErP3tGEFZ6QeGrcjKhk3b9RfhzgveMs6FCv1Keq5uYfEJ2C8XQwuSRXLGWr3BJ3xo9Ty",
  "key20": "4nS7BJqYTc7yPJXnR56RJJ8GVibtwxTWALnLuhCxH5PXznwAUr7ofuznZ31Uzwj9QDYzd6RX3ja3CojU2GokXw6h",
  "key21": "4nf3Qs59SrohJM51eaGdmazDbVMLToMLppfoSNwweKWxzVqPbtX6YJ9wcKCyJ1mHfzYb5UhVoKMJubKNGfd2ASNR",
  "key22": "UqxvuvZrYyZ8w1SPS6CA24ErbzESSWvMVZQUkrsYeH6dQNEpsWtincDtgV7AaXB6duSfJFZjTXPiLhVPiScTBAQ",
  "key23": "4XZNdNXjdtWbpsaVpZET1Hk7PsZFwV73zpqh8pezU1kWw3cHW4cpuFHc3f3oxvbKfxn9B3LAEGMQYHo6ZSVSNkg3",
  "key24": "4R6WbVXKn4Zkxi6HKuvF5TscdhXtozn5VNUYgpAU3H1AKxmGYU1hWYtxa9ChHBCMkCsQnei1oUguxv2yN87SBmLj",
  "key25": "5zoQY5dp8kVtik1NesZBqeMai5F2W2ocRq6Uk5Bn4CuRgc5RD7dBR5JBdmNRjdtpkh8fnFpFvUW9PRTVXyhWmBnG",
  "key26": "2zUWZkbn55a1XRrq9K8iyNKh6AdBjghGnLT8DmzqihJTowgN5M21CW34PPZHC5dzH5PGSskFsiuPmifxziJ2Qh1W",
  "key27": "2MKS21ArgU2YSxXE7QUcyHPAeNqVqVg6YKUskLSRoYwtXke12kdxjVXLazGCXjaBY53B8KkH65cuKA2S8B24Kkkx",
  "key28": "4qDFczHX3AH6goGkWaKG4PQB9NgUNtLimRoo6tsgNf5HhdYHiXHdbZ44U3U241hQ6w2sr7visHUcrixx8jq1DEDN",
  "key29": "5MHx9MozPQsNDYUBwTfh1BnRPZTMfQaCKxvaMQ8VfSzQppJ9KPDUagjKeFVjoTGsGgeXd3oE13FUttAoZVv6D6ER",
  "key30": "iS2eVwt3kojYANvZZf6QW2bFAZTYbK3nV82Zc9Z55z1H4L8DtdfKt52rrL7svpojWqMvUJaWxM1boMKq9pxQFU6",
  "key31": "4HGxqNrowSE6JbnRbDH2ojxUokq7nwiBpaZawEAz2j3zgGgdddbqC9SiSiSntQiwDMGeVThyRHYbWzcXnRZ5RiA2",
  "key32": "566iLHZYyNBahu59HecJYcZqUUDC7evDsgjBb84BcTrc2viKatSeFj3yieV1LQjUGvWNCjs8aJ5gXnb7yGm5G3en",
  "key33": "2EDzjMVKYtfaD42u26PZR9rZsERWgxcfQMdLQrdaX19emoFbTTF35jSLyu6oapVsAah2SZawhQUDAForfKf8PnnE"
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
