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
    "4dYCeUagiTswkXQhpydGWmry4zH3drHzwtNJMpV2Y2SuvwrsoFX3cdVmcYAL2MZncPoaNuWK7ybg52MamwYdS6SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SwTreuzL6sMBzfJFvtJAUpPUYb8qzdhy7ziSGwHCeetvgGo2GpVWhLzY8zzs5pKAXeDdtmAPUwwKJ2tjMiK112",
  "key1": "2jRuE4fTfeArtUBw8fNpksh7BCVsfhXGDEBGPeVK4i1D3udtnVi9HgzJCmQapxroZa6ZwEKiE2BFe3jznEN3YjMh",
  "key2": "iUzU1Qed9h7bL4s9e6xmhLceddeydptHcNFEhZZ9sXo2n6DpGpoVaCkcgPapsCrVXYcLEkFyQQ71PqP6gZe5KNr",
  "key3": "3eXp5JMETXGW3YEeTzTHkY1gvTXNNs6Cm6HNxXZAiq3zgurs9XiZoEtLAcNgACCeYHQnwGGsQ1YB61UHomQ4eC1G",
  "key4": "3PyUf7igNtSRQjUxNZB7UWXDKa1HY9BDFwaFSnc3CQgcYkvuhB62GAiapNdyhpE9XhGW7PMFAMSHZYjpyTH8JRiv",
  "key5": "3zbVzLPBKWSMz4MhBotcRXBNn4qJ5YpKGhvUANVh3QbJ3UxumLSELmWGP1Q5mku8i8bSb1rKktsgNmk9SnwU7FCr",
  "key6": "4LwmXCnvyu9Av3EwQfufhegX5K5jxVEtrRCQnd92cfMeBeNgEt5QsGfMSd4ghxkunwvFJzC4BWAVyzrLaae5h7y",
  "key7": "5mC6K4RV36K9gjfjMhoYU5V2FUxgUNs5Twijmy2ZFWh3wPx3YiS4wfERCvs9UmvzA3zFkPRzfL8xvHnFUfr4id7X",
  "key8": "5WB3sXYhCmRHnpDBMjXC7KeVrRdPWC6ivR81UEoZGXSQtDJM1gL7Li65FpVGzC2RsXJug8NK8mu3avP5fceUnAqA",
  "key9": "3iJXC1pV6cm5JKEvFYutvDTndDtcV5Mmh37MnchzxbsvXfLmzrUFuUdTAbwr2kmeGR7y9nLPo26Hh54Aj21zwdt9",
  "key10": "5n3rA66irStUZ1JeVVy7N75wNDtNQ2LszpUNjW3Fajmgftm8VqH6n31VqEgppBkeengU3vLQLEJ9nY5cVJcRhHZB",
  "key11": "4Zuxswn3RRpXEs4AE26T7hzQPnfbZDp1jPRb2tMgtsBWwTqkd6kHf5Eb7rChfCfJfpzY5fyRZ9inLBXBWtMBFwYB",
  "key12": "4LdSmo5cYvX8mbEq6pT9KwNP5giHSY3Ycw3hJoA5UcMdBJ1cunSqz3g1en3Hg1BjQGiGsnCvLC17KxXD2sQVZa8t",
  "key13": "65X1PkNtHp6EGHKN3M78yQjUVcqdXJnNxmjTGT4JEX9SkJkHLmK2GWNME2ueLba9qA5kLAtjaybUZpcejnxvrNtx",
  "key14": "58g9cxzhTbvTaWhE67Zyo8Jb5wmCU7cxMrr8EUu4mk8iqCvV8Nv493uYoLBFjYpcuXzkJ1yCVd9yfcdPVNN5GXmP",
  "key15": "tZzS35XcNoMmZLSXEM2MsBNdQFwg1eMrPY1A1oiyGGPc9h7FvNwzEZZzs7CEyXHUCPQSVkcT5VSDyC7qZRFuzt3",
  "key16": "3txaoX9dPJiS75V4Fhe4LtBgZoMDjUK1HrANHXTxioYF8SpM1hKybHaWN3oaM75AirMUoGhMLQahY3bu2ZVFSUGv",
  "key17": "5e4ZDAtwEk78f9Zivbdj3NTTpqYrdjHdNfW3ebtknV9wcyZtUXD2aVoEhBBYExnypLziT6Xont8mPzwmA9oDJNxC",
  "key18": "3e18UJA7QwHXV9CFxp4DppiBfYAc2wmPhyCJk9ouLfTTsn5ohp8BsN122XYzRTAwcpmgVbDMNqfKDRvojtgmudLK",
  "key19": "2fjo1BTxUFCjc4uKY5VEacNQgW5NDqEDtfhD2jKfbTkkT8VyqU8RggGyJ7Px9G7VgQcoERcGRyhJRmSZJZd7Hk51",
  "key20": "4CdnGPV8Hmn3ixmKKENiz6iRwnmCU8uzLxLo11dLjedj2WvQWdCHCcpgcPYGWejBeAW8fLf2N9FmnMRNWw5kxASN",
  "key21": "3w3eSBeb2zqvcYD2hr3tHndLc3dUaRdpBuLsgHA52TqdSZK775EkphTGk3YdyD7WrQpYwyripf2zpUSH8KKgBU3e",
  "key22": "444PBDSNRwC2VsbKV4Hbf2MgAAcB2PEs6iZfZS3jqckr7GWffC17j1ngRVLA4CjebcLFwNHt59zkZWLLsu3JAxgk",
  "key23": "5hR1XVxbdAkq4jE79zDpq5UudY9obkbF5dTFDcEqTAYHbqaeWVGX4rhsywGWohC36ArQqfxRUJxaLJ6kMqhQANyi",
  "key24": "vHDiP7wkEunfmnFMLk7pNg24PoC9c7h4HWkY5pCdySDDtLPBZ7A22WU4BKcG4TfYAeXGi8S4PLKPsGKHjLumkE1",
  "key25": "2iLVSndQcwR4hrvRHU9Cg7Ru6vm2eezTtaiSRPM6thsuB3t6brh5tU5FYQWTWEm1kbjWDyY3Nb9nKLvwQbKVLb2N",
  "key26": "2XDs1ASEKBpgqiTqziWjUiseW2iJ561oa6XijbcTaue7HzgL1tvU6U5uSuXP14xSPx5UNquA72pbuGg2juNuNW6p",
  "key27": "4FMSLHu6kGUNfN85UWredUkKNLucYKYz68Ymvckadme1Gb3nX8zn41RvV3MzsrznUYTM5jCgMvFUQnxjsshfP8jt",
  "key28": "28v3DHajEouCZyDf2tkAcLDr2FR7hT8PBSzejDBRq68aGGGtLZgM6PYQgvKo1DhYkbVGwJACdfn7X7AJ1bLQPU2z",
  "key29": "BAKK22zkFco2VkZrA4TcLRCMY78EaYs3wC1FaTkfysyEFw3kk4otaDkyUtRDU5e5QmbxiuqLszfMw2LCNWG9RGC"
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
