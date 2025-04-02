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
    "3udVgzCqcB148bP1ZtvzHUdAa3HckoCpeBvQeMr2mL71qGAWY6tuow5A8iTgfeusUWCmQJbKLxjuLgeauzbGsqXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNgG1NdwgHAwaQZPGoTLKgBJfQAfFd6ubnU6nvBaXxF5CcMJfaMKYEBBrRzvUNpa26rjXoGTRdT88mbDZC1F43Q",
  "key1": "2ynMf4PHnY6yxvH9xhn8uspUzi9a69d6hZEH8YwyTiC7n3CeFDu2HkpxBcXetssiVpWdhij9H4amNYov9ni47d8x",
  "key2": "2t17C7HNd1b52nKheRSSXQXfybx7bcRvPTLnnV3PiRxcafZwmLY5FZGFpGcbUoMJGykvqRWYzQ9ShosNBys766HB",
  "key3": "29CVtH4XETyZuJYH3kWZzGbnYN2YxKPnYXCyZ8ssi2UfGYH7eSmkKDLtawp2eqnfAcWxZ28isneJ4zrqsTDjHCmb",
  "key4": "52a5218WbkUFsvWYyMNd2swLBUgd1X2JsjcbvSi3EzyYHGu9G3QYsCjiuPRrgNfbacscDqxiHChpHEhYSuWYhrxT",
  "key5": "2zRXAJzn7J7pUUR3bDew73yTRQNQNQ1pNLLCrxgWAAVd8KRbpE65aWZEb9CtJw5FtdcCc5g3Bn8ahkH3Jk8LcUhm",
  "key6": "4tsUEzHeFhR3kLZzmgsQB3W93hBMyaPpT8q3iRMekJaquRQVB514Cji24vvUsweuqiKbZrUoWCcgrg8LfEpfqBZd",
  "key7": "58SpqcSrVDyKGtn1QayYYfKvcwHGuKXpHL7i2w7pJrkiF9N9wZbgq65BHt2Aeq7VRiK7souXrfTXSXf4Duu5qDFa",
  "key8": "K1DszxjiPWBxXmYgVHP9jvjQjhEfsbCmABHdqKztgggvkxdg7AW486kKftHxskkJRadePCjaMgx7iGdPurQmbcZ",
  "key9": "5UvoYPgd3iTqpx73YX9psM2NVrk3R365Fc58kKNicquRpzWR5w2entryPk6icJdTHcTnViJjDf7v6jCdnNXMmAgt",
  "key10": "3v6WLGPxdUucZh6X8G9DpbZ3v76H1YYuDCgEJJdM5M1zEKFsLPxStZ14mRQKp3aSLTUhFD3Pu2M5Drr8w5TQZzfC",
  "key11": "4pjNgn8PmNRELvxUhWSyyELQAoANCmdWMzA3LdHUTp8azYCfXmb5g1dYFyZTqShw9XuYbqZjGyhdiiHXZDV7p3rj",
  "key12": "4tJbwwYbfzcYMQ9nLopQ54D9CRC1CHBP5NMM1y2b9fNEFKyMnadZ8wTs73pHt1q5V4sR8SKAuSY9NUiE2ER6HWEk",
  "key13": "5ifDnjvc3syRVa8sPLAH6qYuiGVNDKthrQidiqzH3qKD9kc2MnFRQjkQygL1eUvUjmLErQ3nJZMcA2ofuYpK9CtP",
  "key14": "5EyZdpstkdcduaemH7eyjoZ7ySG3oxe6h3xnL33tMP6CjWivuW7eCVPBLFsGb2B7zgFE925MUjXE8DLphFchuA77",
  "key15": "24z1ryMKyJD2CmZVTcnTmM2AgcmDqohiCeBXfqfs9dWmzS2wWvhGS14GrszhaW1omCtHsFXVWk3ZHgVvSiUAfEVd",
  "key16": "5W4Lpi6cDsXmmWqy1wDACNV13H62DPgUUD5DAbfj9oZxSr2zKbDnCBmvD3zq2xndCBMRMHebJCro273vxiGCRRgq",
  "key17": "3tUtyk4sz1qyjVFjpG85VLUooafevFUc7JmPwJoBVjHXAZDhDfzn7YJDauxY7PTYQ5mDxMy2ZVpffDzjQZ3kEWz1",
  "key18": "2n25Xm5vQvAAVq1U7CUN8o3sXBaVJVXzA4wR6Es8ynEDKtiEmTQJS55YaTa7Jszhmf76VW1wSUL2PsLycrwy8pca",
  "key19": "3wJq8YHdvQLw2TT2uXQpaXatGJo7rHGAWRoZeoBM9dkovDgePkH8p8wsfKm7vVhxhVK3NfKVEWpD3AVLmDFkzYSB",
  "key20": "UWGDQg82ytHLPiwny1upYt98qsivgDi8i4XPVptybkzo8PDmLaCUPAtvBZGfuQJ17i3Jbd2TeGwD2sRxUdCAnMw",
  "key21": "fq3fqBFTKWGfX6uDayzNp2zqRbrJotYC5URA3Gwu8WViFZFRDvPX3xMv8a5h1Z66aCFFUbgw644duwGxZFoxyY4",
  "key22": "3nrUz8iB3Aeviv11v8GhFGuczJUBZ3k8YFi38NDj44DUSLxw6tfSrn5Cbyu4bEuE64fCLYbb6Kv55En8ZrACza29",
  "key23": "3viTvdpEcXkMEUziVz93xxKFdWJVwt1UbqtwUeWSLSoPsUrh1JmBRj1XMuaQeCaSTztUQMaioc6GjsFHBjAJCe7N",
  "key24": "21SepwwmYkUqVPL4BqMDZQATtUnTfum6jsP21MYpmC97JmxKTAZoyHawya31bYunXcQVjHojmCVaibhWSPYdE3a7",
  "key25": "3fT4AhRdN9MvBwVdCfP93nxHzMeLqTqgqQNNeDqthyLxqdrjirKrWuGwbKc5J4Dui9dxZsjyRVebBeTfWsWAseQk",
  "key26": "5f7wxLzFXBKQCaURCa89cuHJNrvPydf4XjVyC5zZebMxcUK6HiFmjTjm9QqcupQ2EV8323phX4DZ3nNQ5qMUWq1v",
  "key27": "39Xk5CrqNc4kuP4Aq86HnVkoM8rEb3zppPnY9F5MTDpRF581L5pWKDt6qfYmJBFRtQwPBxantm8xmq3zVWrajKry",
  "key28": "3je1G2s3NiYoEWJjw3mjURR45jS9c2VWLnYr4HPoJ4MCTJuFmuduQbK1zBh98qE2gwtp63XXVqroZNPRvfjNpxsV",
  "key29": "4gfpS9iHvkhufcTLrJdCbYBv2FztRfi4A567KEuR18kABJkqTiC9BaLo2wcZvhsYQ3Sr3GDgU8qRrK85xdeCjXC",
  "key30": "vsThhXdKsmW991yRYoWuxrjHGzwk7pwJvsRnLSwXRjRWBRufug1KxspAQ2wnmFmWWmUkkdAoACVLYDnJsVDeAmW",
  "key31": "M1bGCfdaaAjaxCyyRhn7gTPZ77wxctRmdevJCe4CiDnkuvxNxXCwQi3ozNAkf8Lvrf7KFc4i5cbCKLxeGH2uAzb",
  "key32": "5iyCj9pMoFdSR1RnqQH3Sjc3goPLoycFyWvfsKQu8h22QYYqdLFqSPPQLhHcVCdQPSARogPwhxWgFoesG4cQAGrZ",
  "key33": "2E9NWq1Ei9muVz3S3yNJH4PoPk2Yi414oXqpNDMuMQcp9eR4MVFa1kRDjmpwFAJzRQ61b8XG3jUdNvriz7pcFWA4",
  "key34": "59K19Ff2vrCMXcAJuUuN2ZRkz8KgKF2jCJyPwjNTwPXE16GTiaknERVQ24uQddNkBmAgKc4rhwkFzTYWHimr36hx",
  "key35": "aHT19wW8HbkzioZSgqo2StVjFHCABETLTznN5QE6fFnN77yhsgb4QshVCxRmvVRjhVGnFyZePu7UVe2yGu71246",
  "key36": "42YJjW2AduwRfA2uLSDx78odEdNo9bVTxTD4j3LkgMyXSownQu912hzbTqK5oGVLKyaJ7NNMJfLpYW3ALXbf3UZJ"
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
