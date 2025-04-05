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
    "661i5YeMwshDpQRPydcCV9bjm32vPh7qncB8ZYzCbQ8D9ByPBByZC6aYeEoMYP1919gaRYYXEXcZ7pHw5tD2UAYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YnvWst2Jw5Y8uzruKZ5zuvU4UATR5t7FQkXg3mBwSaNPsHzspmD1p5yta3nJPkHQ9n5kJkPskEtoW7DL8avCfap",
  "key1": "2MJwqbkUVvDofFW7CX8WUwWDvK5dwSLNGhn4qNbHVEd7odkJADoP64Lqe2bfAyScqW9oKnFQf6nMRwiVKMF3rLHC",
  "key2": "3ivRB961zxQS6iBKbzbKGgWNUq27CGpxoxqozkJ4sscGWcWtQG1KNrsDoAP537nAa4EzfJmCy2MqBb3L8fvX7F1u",
  "key3": "26FgWmZ5qprbN9skCWLyDSjsigo2uhS8RojDTvpB2KyW8F8wmC85Wowoyk9HTmabbC8Ai6hVYsNUvF2p3Do49y8T",
  "key4": "4APsigkb2hyRYbo4FQy23E1ZpkUjrFS2haLDLntWYabaDxtv1rLXPDAoXhLGFH233fc5AGuhpjXBis6QmKKRyjcp",
  "key5": "3PtmARv54urMgodi6DAnTan7nSq6L8JtHyspkihDyoPbyyz1uCF18R4uJtvNX5j6wsfmXWkVE7QiMkJzoT8kBkQi",
  "key6": "42rNDBSFWjYTAEPBraGW2TmsqDFp6GcKs2FaDjLH3XSkqdjd6KGTpdSUk2ScYy7BDonM4nZYHVNf541ywNgswAKG",
  "key7": "5QBwCkyd7AXM8hRV1wL8Ddi52NhW4P5BmhaETyW8sra126DS9w2sYRswvWBenQBPoqhpf99xL9TY77td9wVzQDxh",
  "key8": "65uqDcnRCxuAT2zo5dyvCJtT86fWVfhba3EG8jZU4opyUs6nLWetzQ1MvkUn1aKiTg3i72MQcWps7TSfmtqdUvkj",
  "key9": "sWKHuz2zEfYEnUQSGcptzHorimiLVwKUfv3Xdj4UhWz83dYnNqB7AEnpkyv3ArXN1pwC8Bo5NhfHeP6YHs23ejh",
  "key10": "3Q8d7Ygji3Sz1NucJcB3yNTvmQdiGqiBHvhtuPjMkWCY7odoWJ9kdRV8mFRiVJZBxqi983JJcq5PaMTFboFjpawQ",
  "key11": "3VmtdnvDjq6crBrA3opuXSY7KitDBUZHbbyiqubRW9YQWe2XR8NPtfXMhvmbvVfGVMbbLsz4Pp1L5BS6yaTKkybM",
  "key12": "JiMFTtxXsd17LnK1Z4qj7dYgizJN64atprgg7yEFnYEkh2jQdgaPWqNrPLLtmaEUX9tN5f7Erj62fMd6sa1B2Ho",
  "key13": "3tfDT4i2BoqeAdu1qVvSXJTwAU5LdYK6su8r3DCkAhGp74cw9oG9H5tKWwwk4YxN1F9QGYkexDsj24pU8JR1spG",
  "key14": "3Z6AbQX3zGi88sDzSdMVHcLsy8aarbbRJMqKqLmCjnp1x6FTtddxorgBFpo722YG6yPdxRCVntG9mfBkTht937Uc",
  "key15": "kWbtfr9b7PRH4bCgapPbqymfiv9qSorZwUti6kFkU8jZxTKXGXJC7GwBeAxRk9dHGL9zpQkYKxeQCVWAekmGnTo",
  "key16": "3a62e3H3zkRKwhVzz6Nvcr7ppKf5tiLomSCWB5yknmazppCN7b6biYZLHdnpXn9ZJZu9Rvn6U73amLnBVnK63QjT",
  "key17": "4bVgK6Co2Kvo21bAaqHKBeTbw1uoPsXEewDWbPxhasGULWvfDwij6TQxb2H2mjSoUMmc3w3LcadFiRYNhyk8g8up",
  "key18": "58LntL12bCyMtiUkmHDRhzXZs2qikRGoyUQGMJ5EYtGZTfD9RW4efBVxhbE1Y8T5XY7fkZfH57QjhmNRrwpwk6Jo",
  "key19": "38h9DMPFkxgo2FMmgwAJzXXiumeTKnoVGzyYLiv9CWwHAEsGv42B14FgMoj6kchbk2nUJwSy4RWJoCfS4gRzM2sx",
  "key20": "4NDs4YGyfo1V6JF6DZYTp32wgt7nwwbbQFukRhBT3E2QHuBYLMKUMnSET3smkVvyLfGhakasszMd7URUccmSzcu3",
  "key21": "6JUeqGJ8kK7rtoBpJt8ZZdKdQbHHrKcEQuCyPS4Kj22dB7zkkCKTCv7uoGU8v7LNcpGtvhHHf6sgESvbijbUgy9",
  "key22": "5gGdk7qkXWbynsuBESHjXFJjVHwVcYmBUCNh89xnqHoYXxQjLJ34no6d6zuvaJ72jbra9keSgzMAdKJ4PN4NJ39h",
  "key23": "4ztr8VUWoBPowvh2BFUX4rogGhrGqBVmMb7SjDDCT11NJWi29VnshuSB5jYLv3XwaaWMAuKRMTTdnf8FTuEsPT5a",
  "key24": "4TsZqdqJUQqyMVLuvL5najzyvoDrqbCjSy1aUV1LMgRXzj3jA55TuMz1iYyv3PdyoL1V2Gd3aJLs4ETxVhYA9xhz",
  "key25": "2naNSVXx3DLWmeevRCH4UCAUjydhr5Lw3uK96xj3kosHCnRXQPus2X7bXZW6kWSDJPie1uy7FfuovPTy5T4GRMEt",
  "key26": "5PhbbX5fCfZEtWKDbVSaj8H2ZAaJYQzfZfYHxgHQBPdNpcCw4yvjGi4M3SKkTe393MWYL9d88y6vEsWAuFqMGGdu",
  "key27": "2E3ZEULwXF7RA9EEHtJqE8RTU95WSyoX9bwZWikPGD8r6Aq9fKm3RL2AZrb2BntrQ3QQi6UU9CvXsAmwR6ycbqzj",
  "key28": "4mUzdyUHGD3RRA45kM2FmVx2cVvcRabqCCd9YqJcwEeKp4t27xAbAx4LbPWTnVv9pcH3fPevyqyxmXMUjdc2fUVK",
  "key29": "2kpK5tvMF4JgvyjvBshmRbWkKwBj8XLGf6NRbyiUwG2ophGGyHg6AJJ6bC6DSqbQiTpArcd3zBjLXMh9RP9TKnwG",
  "key30": "22ZZ9LJ1USAYM8JqLwWF9esVfLFpm1X8tVQWwVVCrG8X5pmCfKg1uCSXMzcg3L71kuAELuyMc8nrN7zz1W3ZLJzA",
  "key31": "2j1Z165cw7u6vZGTTeavkZcVUDTRYT3bggppAxvEcqbJSHKgA76WDfkMa8ZKu8HLRVg3CeDbmWFhYVAPmj3A51hF",
  "key32": "5sundo3cZT2j6se2ecoEgTArffRmmfqDCYSAwuUz2nUAr8cqXSD1PFm3f7zRZ77wKNLd9Mq4PMKN2muWmuW5HPE",
  "key33": "4k3pxuGPMuezBBWExXeJyQMPmNuB9RxszcbPC1pLJTH11tkbsDAjozHtT4AFmiMwiykFvEQLpK83hLNWjgWN7gWS",
  "key34": "LXdF9jnZ86gbpJ23Nr7667rAJuJagd84iDU2Qn9UrZe8853edL2eUvUzTneo6vUD6jJ59s54tMJLv9VKNbifVBo",
  "key35": "4VyaR65FgVCN6Z3DTJFKGDQGrFDe7A4gN84AKPMbf92D5xAw41GdmZVRsVYJMPDEiZK1S1eZJMMyrS5neQDLTaPs",
  "key36": "2z3LphyKLft5Fzu2S4c2WEV2Gjrqn2SKSdxVVWHdEhY3M98TkhunZrZJDwXFmDvAUKsqkDdrwUJKmCvKJaBQ36YN",
  "key37": "58Urnx7tA3xMGBvyehPyN4FoHutVMCebv9rD6xyb3iNNzeNUBZDECVHs2VnnuPZNyrcTpBi2rUkVr64HGtDR1sWj",
  "key38": "48jQDmxNHvGV2UfwsxXYxrFfZzSBaoA7rAz9umEnDiVLCspuEgtUvayibmcVNiU8j1PdnNqwDACH8dAUKG1T9QJm",
  "key39": "5L3Q9Fsi14J7Cbr4wWuX96jXyGADm9VBvtdvaG8xguVTk1bTYX1kTypHWzm7xuk2SquXPrra49E3ZYk48Z69xkGJ",
  "key40": "jKF5q84tVwdy9QBATGWLU332u18Xcgw2q7nCicZcLtMHuCBH8t2Cz5zLaRzRmdG66tcPPzuvryUExqWf6ZNjxwz",
  "key41": "5cCuNP1H27CzJvraKyVFbAa4yTh4r6z7eJMJLKrHMLKFh4U7KFYiwT75xaxKWwQPXWukwn8nsKg8EmvbpEpgV4BM",
  "key42": "3ZxrRzgf1HGxMsnmdypqwJ2HqD5mPGrLgPyirQ9ECis5dwmXizdbH8mCgGbWEUcnzXChx9iweRz3CjeX2bnF3BLh"
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
