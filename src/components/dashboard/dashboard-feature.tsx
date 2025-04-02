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
    "4yNq4Uekvfmi1ShTSBgDqy3XdCDpLDKFySYzTCyUyz9KrbU5FdNQH2CBCZe4WDKoE2ZKc7zoZjHfG17UVhxNw6uD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCeVB6pzLW6PcSdAWf22UwxaD2C7Wft3vUoCtqKdWaHvZ6AukPccUrBo5MaaJQEK74VPgwUHW312pGgyhV4i7sq",
  "key1": "3pg3ut79e6fa3wgdGQFvggxnXcN3H5bVzq7kW82BY4HCTNxoEfzZfFBaFLJcMszSS7GStPXjaZjGz9qXajAyEFvV",
  "key2": "5EqLMgQuSbohULSBaae5fymEUUpiF8B95hSJW61i7YZo8nZWyHNGTdn9P75JSL85AGT7QmA2Y9BqKXgpe8hqZthP",
  "key3": "4AcLHubyCHdEMBrhnsnCkqBbyAC8SKC4p2mjGaVpEzCtSvCVkK6fiJfYL8hCheN5ZVp5x2kH5NpCQg3LPtkzh3Kq",
  "key4": "2tMi1PKcsirBKsuqnKAkq7wZXTxFGYzAn1reJbdo83w9SFT5P3HNXbKhMcA7y9v6wg4jxgRkVTpMd7gFQrAdEp3H",
  "key5": "27q4ASg7G43M6GezLuJ8q6TncnDWervQef3u3r7CpPCfAQCQcLycV6bp9zPykJKLsWTaq2WJ8vsvXpTgYWpvaU6H",
  "key6": "e5PnxYR2fi4aeHhTE2qSZBoHcpfCMvf8GkpfwYeAaCzDEwWYe9msjVtRAiA1LcFWTMuMHP944uBVACfPEnH3ozY",
  "key7": "5PxDjUgCTwwZZgLFa1iN5yyt7eaLRjLNtX33sTsX5pG919MUfCqww33o2uLWUAgh2rWwNe1AXxPeDRiPe7KVcaxN",
  "key8": "5upfiAwwV6rj1SUhxyp8Q1x9mNuUiZMntS6mXopYsFC19DD5N6TMiUwVEP8JYRJAih67CXjSDAm51bBtGsSpxUjf",
  "key9": "5kdVh8517vU3f6gWnCfvkqdrG9Q6bHjRz86KK8J8YANVAWrdeNwST7UjkfDKidqwGatQE7RdfD9EgkkWJbZ28G6U",
  "key10": "vL2ZDP5Fsb8u2cheDt6kzhLBDWRnN3KYqmcMB2vHsvyasRbHYkY1X27ftCY7wf1oPB4SrHzPD4nBvRawsGjhWvW",
  "key11": "mz48jC4LBBLQ8uGB9Euu7rmz9PVd46BizNXf6LpHpwvcXQAYNd2iTGtFZ4jAMmEaZF3wrbMS4n9c1DWwpLBfe7U",
  "key12": "sRfRBeWUAT5CUzN4cZS3eWhkkU89CJKGxauRbVqQb28PMsmX9UDQSG8KFAR1YFFjPiNF2gCpuCXNvkiFgPq7yQd",
  "key13": "XSTw5CBKMXFbtnoEYfLp5cgs8cT9niBzANkCu7Y9mGg9j79hSRPCErXijwS9PDHXSyWfKXMkmA85Zs9ujb14CJG",
  "key14": "2vUTT4YSNGDp2JHsVtcySyPXyCJZ44iFiR9gWhNPzZ3GHZBuZzZJSZ7SnJdMGttxbZPzakcZW7VnahKmx6cD3RNR",
  "key15": "4mtRa69J8X2y1rzVgG8i1Wnx2CPRDBMQRC89PkRyKLP5THHoRPYGURfFnPJ6dD4EoLS6r54xf5XJPP4KwEQ3skCP",
  "key16": "4aamqvJeGXmtYTei84hq2K1HfQQEeq2631aQF5YtdFBFpya8pnqrPAFUUVwRYBLGQ7vr8fHV7KAJbFQaerHXnR2p",
  "key17": "4BDFaK76z5CAmx8jiDerVBDNXUMygVRQTqujgZesE8g6XmwEWLKoanNSQ93jjASqiXEqKHU1dKHydUCauu78qeDZ",
  "key18": "2CiZDVmoht2Xr4Gu8ieMysiLieu67kMetYhyLXiEqE5yYXYogu9YYdhf25SoKAipccjtEB7ikg5RduFh98jsmeTZ",
  "key19": "4QrBBykoG9T1i75PDN2LrsJg23JrLoKaL4TrLyUUAauP2hkxLLooVp8oeuwmrEBvFeRxvR4G7dBW2N2iqjoyd45z",
  "key20": "3HthCjYreyGkg6xVat3xAX1dFq2bNr5kTkBk2Pwt3eTmS8MgP5qYKaH41spiTHGy2nL2VZuwfjrhenybyk3R5w6L",
  "key21": "2iebYWD37iFx3BQPCfZh9B7faKcbPFYozi7BUatMrV83K8mNDTSe5Gye2Rpdsppvws5yoNh8taQyWQrMbj8MR3fo",
  "key22": "5c1UvQnhYQPjCuajoG2yEHHZWEuawmiSxH63MMF3x8seSuzDEnGRoPginL74W1uLpC9xbNQu8UmtuD8jbcTZVQLM",
  "key23": "cXjE1k4escU3j9FAK8DFpfmQFpQPtyTSgm9Ta5Pcfgak1fb3MRMkQBqVZmcrxoe59DFhwCfHmmPUKWEjYaC1MMS",
  "key24": "4xgeDSA9T1p1vrd87HrapozqjB4hZoRa5yQPG2BX16C9ivNUSeEqjCdCaT542ihkXcrNRTX1oJj4Rkkmtyq6A8gL",
  "key25": "5k35x4eAFRDAgUx9tME3jyzjVL4Z2M2vS7GHfmcoEyJeoswRBw41dafRMqAmuJMMn8Wu92ZaaTrP2mvZkqYGE4Mb",
  "key26": "3RRAkY8rJUpsXpz8EftXmkSRntAi4VGHRs5oJ82xK68FZUbELKZGtQA8d1Z81YPL6jewNYnnmYFGsDZyprjmVdWp",
  "key27": "kiZweJ1w6ZRKmn2cpbMdbVbNK5E3j2ANrN43V9B8n2iFtno8FuD5nVMEXjjvLnZudMQCLYr5Ec5yY7owJ5GLW91",
  "key28": "62e7HRgTHGZSLFqqzy1UXo6zYVRS6mftGy29JVeUGKYZB4G5ALg5JfodFP277S8mAgBnHJe3Y8WudS1LtCoEHFEY",
  "key29": "4z92Bd7SgFgjQpZmfXAVS4HxwsPPYNkyACBc8oWxNrrJ4tnsEzccV87yQBrqyiARXkXarLhecPfVY7UiRFYNR3CV",
  "key30": "4UFSv2fFMvMveWGsAwDUqs2AnnSLEej1PuYSx4amgBNBwbKPXawAf2to5yJDVU4fXpYXqnX7TdMmm7qXbNSjeypZ",
  "key31": "52BR4RJ38Yw38ixYYSs8VgfSVXauqiW98s1r7pv7ZaEmRjqePbm4wuk7PBUqhnUbgt7YU1nVbCCsbFu1hfAJd1YL",
  "key32": "CUHaDw5P5Lg2Q5RxkzPhYWAzQW25mtYBouVm8MLmnJH2uU8Fu6kJrrrsBiEdVr9KcNNGVHSzqSxPaTq6riZpZch",
  "key33": "666TFGoJHEZpm4vEov2izeoc4VENVeXHG336LrLvcmRHGbWhhJXpE4tbCiE5V86kPhmoxrnWVb47XGAphRvbFZL5",
  "key34": "48Y7Kb2KXavz9Nj8hLDoMC6W1cvSXw2cB1EsvmMt71eY4qWGn5JhQ7KSA1ZXAusfMyg2YNeBegwEoac8vMJWqV5h",
  "key35": "5r4WFNE5PieEmt9FiEbDPqx8Wf38pUM8bnHnyFzQPhV2HdvPoxCHjhBvffu26xf1VUjBB9CngcAvzdmPCi7HCSVU",
  "key36": "2KFZtvocZshJSCe9uqQ8QbFmqejDf56phGjJX3NPpVTZ5g3r5y4GnpVDG8fvmKq1Ne9SphvfJVWHe9ZzvmcvRdKv",
  "key37": "4erBUujC8AY7xEpacvm4iTNEdjRmKNuEEJXiRCFywJeED1bXseAyRWrF2vpweSkbCETL4VyxdvpKWsDqL9iUrz1w"
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
