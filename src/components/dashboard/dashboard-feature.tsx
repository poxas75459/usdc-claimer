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
    "3fdkfsQtXjSWrWQcGdWRNodfDABBKVufEwe2GjH5kF3h9wt2xzXdKcdJwxSH2osZEexohMUcw3yZMBUPUuSfuHHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vkxydm8StoAGhwUJnMtVsyeYfPU1mv9Awu9ntiJosLbwyaJx8h7jrBnFp41b97uUNEdSTbTCRWF5W3qGU23pBpw",
  "key1": "3pebNqh9ciAjeBW1XsoUjwRiUbUqAb8PCuhxSfQS3bjccME7g1G75t9QwvQCLGhLksTVhLBBBtbPEPQXmFSCbNa3",
  "key2": "23gRFrm67gmQ2NMP8NnbMvbz3DFakWqk7Yjrvm28rqzcupWqhqwP3iXtTkUgCKLGSfRv5JxNqZfkH6KjViE1J46a",
  "key3": "ZJYbjLnTsiddJXsq3UKnHxh9fqc1E4WfcsEjGa8isGmjTW8p5qFTwsmjRNBtaZffL8isa7WFF9ZuR4LyWuRE7fF",
  "key4": "wQHBhFCQzwWbeiR4q44Sw7Z9KoumfG7jaEnvd5S7vcSHcKtsKG7KQ9oC5Ngb1fGEzVZfsHvgScGdisHSXMdFoM2",
  "key5": "5LdbnEfbckNGg382S6xSGCaZH2rAFHngxPSY1PBGZs4uDa7hDpBDQxVoBcWFYdi4MJUhsKyHbZpXMHKu26k9X26P",
  "key6": "51TNVhvdStogNbwcCZ6ocjoe1C7HaEY2qRLKMN1zhKAg1w3ms4QrTJw7FcgPeBad9x4L1MV6TNLZr45njLR8pWAB",
  "key7": "5MJrnToWgQT6x6VRCEZumADartisSCUA4PL5uqn7iu1LbQjZZDwQdqLHSbrEsStjGCVQLNENZiiowwECnCCAo5bw",
  "key8": "4XfsofpgkS4jsQfXhgiYvcnbjS6z4SEGTCnKwvdYGgaafp3iiHcjJAL586Ca7Jpz4isacYPX6WHKWadVZe1o45pq",
  "key9": "vojZRteUWG3zwGeMm3MAsTcPFcxHz2WoqfDXPf5A9DwVasNfrrjXX5yBa8fXnSk2Eky2KWrqsUx71DfJynvK4Uc",
  "key10": "9z4MEddNn4m7iM6PcaX5L4m7czFu98PKQ5PTVAvHWxBWm6XPMkkeML4zBwHRvCf4Qj98BBM4E1gHvwNziG3g9na",
  "key11": "4h7dVQ9bJqoAoLiputNbUuEJYKxw6GyuMi42EtDsWNDdw9btMEQvsUaD97hCVSDt7DkHBQ31aevUGmuDfBWCDYYK",
  "key12": "gmkJ4b9MdAU8qEntD8LLChktuFaEEYJTWK37aCkYkiwVeuUJDjGeWa5oS99DxvjPNPLK4tZYKqvWftLx2MzKdoo",
  "key13": "5mCxmzgMQmqgytNGAJeXS3P4iE7ALpkE8Azbj3daupisKcDfTX3EQyyqYHinKheMCb2NG5vJ4BCv5QHnA9mkLyum",
  "key14": "JXT2Qxd1hPFfe8MTr5EuJKykNMEqUK389XpeNuEFeYmrxGudvnhzZ18UNQAvupBmuJoZMbDoT2Ki63WNRypWysX",
  "key15": "3fDC8i7jstnEEvmFQdJxpJeujDfjpwbkTquta3otnBobTgshjkpFmmehvjHp1ERuYDiiJW2LkNawSbRonpwiWR4t",
  "key16": "2sZihCy6cuF5VR1uLsQiwVnJYSuXtkeXDLS71QQJJn4SeSPwHyJG2BMtBUVE2QuBgicsmdu3GEWQmtCnYcqPQcYT",
  "key17": "QHYB8prdcG3rnhBiqpFrdEo36JXzxWu4WzikvpkavPcq4nMn7YArSEywGvQ85Et96vbpoVCVgcEz4bDWi42PyRM",
  "key18": "4tHJW9dDshPYXfrsNTR82o7R8sgKVDyKceGAYrW7Uz6pqWg94oBFGNXzxYvDVMUBwt44PpA1WRnJymkv2QFFuQ7j",
  "key19": "Ka1NSRdb6rLadMqKBuTuC7D6eBvvGQBnZEE3xHzuK9EUcGHmxb7P8fdpqPB2zGLkGKcwxZMWSfNZn8VAndpPrHW",
  "key20": "63qAQ21ymyiqX4QuZPKzCA2wPa26evLJ8A6ZwcVccbpWx1Q6XUbTvnDxyup17e1jSeeeZLUiUKi5brgbSMEBf59C",
  "key21": "62K5ywjMjvEdQHybXo8Gh99kYf32GrfNaaphBt1aoU9aTFJhzKcZd69oE4UVdb3efUNn7nRqwpY6F2RT6UZPKHUy",
  "key22": "5YNjpoN9JfpwkuL3sBVvU2KDrFSzVvudk4j54LBTVMQWR7Aof7bofeG5LLjSgPt3vbDgm7jFCvLCXRnCBEZLSWLx",
  "key23": "KdK9breK4uR4YxNt8Xat1RnxuJG8V2uEKPDnGhmVkM8mTL61Qr2jakS4ZU3hYungbk4QEB9Zk1xwQhgUuHLCxaH",
  "key24": "2D8DS5eRBbTuk6FhCEe3YQ9zkhdm5VSVcgRVX4Hq4KkVJCRHKdwHZuG7Ur1dzLz2dbXu8tDrUf8GMjagaTTxBC3K",
  "key25": "5CfmvDFpqFYhLKsHjzCATNvdaYzRGnYLvP7jL49oZH98vj2CFKUxb2JRQyJ6xDGNwLHGtgi7VQH4zo7QGS5Ag8LD",
  "key26": "4cfiZeTUqvzQPMqUq87m49UCyaeZzyLwsUtrddVi3GCsrneHkS6ctY8MS1hzwZisZeRCHxttGmPcq99944X8yKfp",
  "key27": "5KJgnipcYWaRf7zyY3v5goGrieSKiigsgayPsUZKARk8DzcmUthJ3DNJM5mkDeuGUHmsTa163TgQDDjZuXWscw4h",
  "key28": "2DfmUetXANx5ATFUHr5W3JSZ89N6SrNRwDLNH9Dp3ruCBuF2ovLG6262szUkYcoSZxtTyZfVFdx5UTR3DWDKUQJY",
  "key29": "5KTKkvj4VPhsVocKP3u4Ai9sB4daiF8XpoM8ZSCioq8TEQzsYZFVZ6ceXsD2Bq3NE3iXcHwFVKH1hqgB7p6VyTBF",
  "key30": "5VwwaA78hwd6qSL61xksKs8j5kguuZ7D9LQgQAgQaqF4PfrF5DS8eJKxYozg5kGMF7AmWzPzE4eir5HVSc4M9DaZ",
  "key31": "4ZuwYjzZc4TUCtUmTQxZj8iL57G1s7zfYNrfmHG6kLLuF3MDZnvjbnrHdWZnPZmgGvmaVnctzKAditYUbRcNZ5UM",
  "key32": "5jhVXhNhVEi6TyexZNqDTB75gSQiNyqDH7VJUg8ux4tXC9WzbkB2efGGDvk1LeAC22CjajmjQPB3SrtU5A4yWKfn",
  "key33": "2hfAa2ZxMMCePMGVYRbnuqSNCBLkD3ivYmetGs4HQcUK1UiwuKrGAGLGNzMs7a7f5uZqrdKRR8XesrNY7DfHCb4r",
  "key34": "LS2dzfDBo1MaJYWN9N4mouFyfLnBGQZ39RKUUzBXqX15mHyWyRACqm85Xx3DFRXkm88q87cdmtZtNaHk8viH7h6",
  "key35": "4tPobwpNxLawVDmC8BkFxYDhBm5G1R5BsFsJpqyQR8ay1PoFjifeTsL2PTHrVyeRmqn4FYczWeSsvT1C5mtd4kmu"
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
