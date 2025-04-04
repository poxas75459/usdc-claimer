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
    "2orSVHJnzjj9LyzXjNVrxQgpi7pFe3PbKWmUHiqEvz9JFASCvCbzbKFEYKoLY1qmuGAyEGVD1KRxPZrX4zycRof2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aHCvLKsZyHHsZSYaMSsGEqCzvN5SWUyFMTJ5tRN2Tk2sALuS2C7NTdXDwM4inAsnB2yVJv9ST4ndhx3sDnrbtqF",
  "key1": "5XpoAMkSTtYQYvyq3DtNC5yi6QwCH7AHYi7DNjPgqEnt6ZhLjSAwXZ7a87CjQSFFrK8buj2Uav1YaaLrjszfkKaq",
  "key2": "4AWCfMWGQDRujQn2TKXTdxwEnBx1mAvtcTGC77zPHHvnK4a1NLrzxP5ZEBdrLnWUP9HmQJtuSrvGmSwXDT6fXPCw",
  "key3": "4Gh2aJyQqX9vU3ks4AKxkpj91232rnfGq63iDA1dDEVq8ByfABW9iuU8Cu14uVufSsRAXwxn7Uc5Pj6AQZEKLPyR",
  "key4": "2mQ9BUMS8pfoRtWLufYpwEurxt2H3nGMYvCSyT4hpBdnFxfQuG7wFcANVcoY5VT6wXuHTsKVwsrXFrqvWbybDcBu",
  "key5": "2qLVTDwKzH6whyeLHawTHUPmZLNiqsJyCozMFqSX4QjY8k4C9c9SshztxA1FgpbA3nLvKPLoNegpKjrpeavZxJC3",
  "key6": "5UNPCBMiTCwFBpiRhQ1eoqR1WVsS2g9DrmyaTsNiwAuRQndSj2Nu2M6smoad3iBpcCGSKdS4veh7dCM1XUshbEd1",
  "key7": "4vDoK64TWBJmVXjw2ju85Sk1PZB8vdsnvKK6Fog2dj4agoSDjLqcuHdf5rTu9n1X4NP3dMgnLp4p34qVAe4oG1nM",
  "key8": "r94QpeTVWLPaZVg5b3GZnn1zDcYsQ3v3o1jZoaEp2sW6PsXSgrxX16gcRz52Aef5477597mzwTdS8w2BtuuhLMs",
  "key9": "XL6mustk4eMLo8fcqawWrfazRxPdDxaJMZogUw1fZNy5gCQUauz9fvHUgvz86NYw7TsJu1dTpJCBtrmEeJPEinB",
  "key10": "EAECgs6oZz1axSFNXWpcswxB3gkPtWUSjYWEARPk3sd48DkNvFe7uBFwziK6K9SP8W4gvE3UPeYDfwzXzMuMvgb",
  "key11": "413gVhSMksFfsQhFfTAU5CY1yyGHdsXEk9FGQ1RgVVLFgb2Ggj5zNyePvGjERL8TFB9jjdfMj6KfPAa18JGAvpxD",
  "key12": "5WnCjNKZJ63WN9ekicciqUbM6MJNzSFQEnXTKbLSd71jUUSKT4pSzHR5zmjrENnUcduHD2BTJfVRtJRPpsZbdqKo",
  "key13": "4WbkPhjZhE9Zpe9PsdJVYp8gQmfn86F9g5e7jvfwne3YUM9UgAftNfT7adrBEpPuwMvEHmU96VC4q1vm7JRzf967",
  "key14": "2dhS7THgqekJufeZqNyGBXsynfW9tdxHGTd7gxNDHxH9tYVLuWaSfQqhaKzs5A3pRL3AocgsLpZh9xwRgdK2tWL6",
  "key15": "2A1o3vYRvgp5vmWheDhFeirSKwCNjjTdY5a8RoBobAj4ndXD9iJGS75ujjmPH2AANUX4jYxxRphvZiTpnjRA6zfq",
  "key16": "4d4zH1wpv2guBzuhGB6MixfB9rG84UMApVee7tYQLpub8FYMjLhBV3mEzVEVQCafKPvSc3jhHgvpYTuHkbfv9NFw",
  "key17": "P1qTWpTPaf4DfmMyxzp9XTABG76bBw5mWxYJLV9QEv3T7Qmy3aGjHTcxZrhqzb6ae2Hacn8GTS6ikkGth9GKbKC",
  "key18": "5Ee3v9fVpb1STEpsm8qehKZ1ZRXts3qPXddkC5FinwBVHEWamULBbMzuTsRqkZF6vLDnevETQGeYLrX4ii9VJExN",
  "key19": "cr1XXFMhoqSrQSVX9KGFATnyBnwH7BgbScgzqksgGED83ZQu7VwFSLeHfM38ER2Zc2WYKo7zUacCPhPjgony7PA",
  "key20": "4fTzAZPuivRVGh1kcRzatztyQRpuqtTqTJLVzp2tjvP9b1BXhJCUbdY7SV2EDxeUFrAL1SBvFHR3mtBedwWyvFan",
  "key21": "4Zx4NHuGPx28QwgjfeHoiGZCNXfVkBQNWzBDUqe6Py7N7UPRg5EXGp67ZMexavsLmGE9RBgdA9a26K7JVXwe4uTA",
  "key22": "3PVqY4Cn64s6AkwRLH5xejd9x6FDfF2dEyonDpxL6bDzC94MP7vWciLSEjveC5SKzUeqeoc5xgAKC5AKjvvaAmGA",
  "key23": "2qyghuUAQSDVruvpvaUmXiJPu3r2Yd3FPGkdE25ZRjYSzCYUd9evsDmjgydpiV6joyBokVwsjA2tdYDUAPJduNvi",
  "key24": "5e1LeMCfBDsmP91HAeHp2T86jzfGSNwZWNeXFp9eVkCRzEkBvgj1NgcT7nuZJi5XfoT3mVZKb4qHEb7tr3kAJN7B",
  "key25": "4ftLgPPm6fDJM26E2dAU5oGpqdxNYZvVGBTzEG9LnGaASWDaFnKPCVPUjSkPV4e5eX2iVArTtV5JEbWKAsGQM1XQ",
  "key26": "5mEB2BNJRDdmU5mwMxN6CqDrwEP1utseH6ac9t7HDXxTT1Rj4hyUQHo7bCtwrHQbTNUoQDkU5QptKHHQA8YnV4UV",
  "key27": "B8ApJPP3RPX2mHcA9radAouDexpZw12wijjESgjxC9GjZBf2dxQ1LEp3yvQKcUTTVHEe3qjJRawDR2dzqQFUhR8",
  "key28": "5zbwcKRiwmyryn9ZKcETJUDEiecFoAtbnP85rZSVgzFosjiYsr1NEVfUxLK1pXUZwjpHjesouCi345U1SjFfc4js",
  "key29": "56MPbWQiKyav4Eakn7dgS1uWXn1SDPAcbWk7aC8QTUgvHXSVDhq9HF13cfUfGAi4DDF4pyRhDBkqzEt6Zawe6JTj",
  "key30": "5NXDQhts2hTEfXf6x67CaWoNJkjFjq42p1LXn9JtSN5MKtwUEM5U4um1WaaEZ78DofUvXKpLiUynZ3cD2rC6mfzi",
  "key31": "MhME68APyGdw5Cqkv7N3qJTiCpazfXUjkdKDdjtTH6U347yGWjXamGCCSdzPeyxhbeZht2biJAGxvMJ5SvnYb4e",
  "key32": "3bYojiyVgdUPHkLM1QiNt6y6XGJ4TTWjdYrVeNChBrXUMES4nFgZDKbM7uFoJ4S8ioAWB7AcJL5eatsZrFKLf8b9",
  "key33": "25mK71tn2u5ENwW3gb7BffM4XcsHtcgrBD9RrXir1FDmbv2AHDzNoUMcqgpVk7pKv1jfxCLzMYMjhM5mNXx3NSiH",
  "key34": "5xB9BPU9yqdJzKjxX6Rd6D68MgaRNyuRM3PE1nfBp2DsWUUXkSozpbz6x9EjPGKMF5PochBm5W3j5Eu5FY9LAyGB",
  "key35": "2hpU2RxfH81FqTqLrH17PkUU4pyeSjrUXyuyb8dHMi2ayq7mdPxtQYeGrLAYDuAJHkrHbqN9Gd487b8sk5m9GH3U",
  "key36": "5f2ZHKXzEiqRjAPLaXmuZwrdSdsujkjSdtrcrXy8iSP4gfKLp9LGpq6Q1Vke7xTm2fj8gyv1SxQiriPwM9DUm6ax",
  "key37": "2tEPLrPLajE17Ln4fJUY8RFhFATdYQydG2trMCheUsZn7HNGxiTUD8rCik2DdmFpTWBiCACiQTo9J84iESMURH1T"
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
