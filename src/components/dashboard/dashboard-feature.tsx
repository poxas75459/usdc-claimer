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
    "WbNh5NCzTryfTWge2MKLFwyWaeXqB7Uuh2w3xfFoMDRzaz7E1MSNsT7Cr3WHR4sHd4zmkZ23SeTGBMdEsi7JCpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hPZxNBwZHW8nEfnNwn5SbeDUGnRSwGAMhk4REMV24JsJnxWrDfCu2LNJ6nhmxN7iQZWrgk7dtWsF1nz5HV2Z93",
  "key1": "5JjDNFh5Znbfbff7iNfAi4izQtRY7mShmGiTjoC94JXqAcEm3GFsTTGs81CjWvujDQLxBqSgGprDcrRPLV4Rir5T",
  "key2": "Jx8DLRrEenXmwgAVkgGSQVEiBdvQBaodhE7agAhU8Mcma7JfXPthomvEVqvQe8cvgqEyWqpNqicnqsM9MCHSYBh",
  "key3": "3VvAgjcmzPt3roD4qAi5waAy42cSJdxVkrHjpqhaomJfbdPpCYLRwFTeTFYyT4FaxJGmDheFjNtsnpix9JanMvmh",
  "key4": "3YeJziQ7Gmt6PTcbPe5mVsoCUZMpEEk7qkPmh5UV54VfMrNoRKTuWBW8MzPxiWaPFBJ67isQYZQKxXBJAiz93A3u",
  "key5": "NxLa1YrDRFAFBG8kXD2G3SvLdA2y2LKwkm4XMqNyG8a4WzcA6U8jnyzi5XvnfTvnQ8kuPufw6KzC2DppY7MdRfM",
  "key6": "5cQCNs7dPbP2PkwmXMhtzu6iuHyZevWcBqgVdTGftxP5isCtHKp6g5Ax7dGvwZefGvqmSca6XV9XG1ZeLMU3ANVd",
  "key7": "2uzhUJVRGjg2f5QoP8vrU9p8sCBij8XeK6sYkyZcvtFWop5faga8SKatSof6EWeJBv85xmUXpb2kXWS6VNrFtEi1",
  "key8": "3QqzWvwtc5dk5SWcxSLVdmqaQFHxa6nzg1ie1XwPHYVHAr2rJb4LuYaPPqd1BEAN6bq24G7JXyFPboCtAXoneuFk",
  "key9": "4UTLmHgUm8FZFVtfDvjQWBv32XvGd5mrE1jTRE8wcvGrBUbJTr1ZpT6RU3QEToDzRzqk7kxKVq9h7h4jQqqTn1jn",
  "key10": "4Cmrx9zhGXVBQc4PPx4eufD4RYhqgREJA5ceoQeLabAnrL2cAwkx2ZkWosNUmyowCovgbwu1pmwNt8VR57RXGyNK",
  "key11": "52aYeE3mUBPAkfmT8dP2vRF1ZgjUAwemNkrnbHvMqtvHg4XCuuHB95Xoxsu8cn9Qs5FzGP5v56q8dXDRvQhDuRW4",
  "key12": "2dBkw2Rezbk1hZGzRAMJToo7sEczZqCFVdd7FdVdG36oyNnyaxYmQVCZRU1TMqc7zk6wjDT2BKpg16vacAaHFE5",
  "key13": "3KcEkafeiJkFpmVFxvty6Zfo3GBkTPKmMF2MRxVh3cBR84pTwwKrwZtgDJDbFFXP4BPZG5JgCpE4osWADWpUDRkT",
  "key14": "2VAbzhHU7V1LQVKi8xYuKNZtKaB58JbDJ7JtaS7njJLdWyEWJKCNGYVkS8ksXZ6XCWhAz2Rvi8TpinnpFVW1uvT4",
  "key15": "4vrpUC6BRio3xh9giNH29NRxBZq3ya1QArZ8kpGUW5KSkFwhcS8VUZVvZZ1WE9omwXZygN6B5UG6vnHs8UBiCumo",
  "key16": "4zCCoGxqjddjwqhhuXVsau8LMk6hMZLztmNEt9wCQQonYmSHZ4v4wSp5y3AT3hhAeDhnfwWaj2PqdBWm9yUhJT16",
  "key17": "5uKkHUTwyCTkzkRhVWcyzz5H9wxvmLB7y14x6Pme1GKYZHFvPZ5bf3pmjBhLkDzhnCNSQwCfmTweFiTxmneueRL8",
  "key18": "5rHrM9yWJyN5Kj19PCb6DVzPwZtCMpyqQho8fZ2sy4eTdzYp2za8csBkv89sYr32j37JFoG1BpR27yVZitbro5Si",
  "key19": "2sZudXQYLUSy4sVdFEMbmGKisDvfGjWH14D8aaKmEBMiwmhHCLpFt4McfWTQGy8zmgGJdpGVxgBVLpxX4veqMVsq",
  "key20": "4MiDuoVYy3YjDEd5z8mZXm9rZ133fZ4eCCRD4GZtH8kZZEtzh8ZMLXzfAfBp3ojSee8MYajsb2rVFzxMmruS7st",
  "key21": "3zLrQ4bhEsj6TGtQEUC8bNq4Xg4Do8WCpwEVRTD8BmPPu8k5G5xCqNJaq7ZNhjAPt8XP8jf5tgfB5eaMpppRXRbB",
  "key22": "UM96X4onDRKmtPZVoZ3ktN3hC7TF3ZaefKnzc4piNagGc8h8X9cRN1byMf7ocViUZ5iHdwhvghgbY7xBNQHECQw",
  "key23": "Aeki8To3mjkgNFcsGbh8L4fssPu3dsX7uv8vnEVNV48WerV6p2Bn2naaqsWPFba8i75cNBT5uBfWyp5rPuFRFF2",
  "key24": "3ShfQw8vEB5DfQu1odXn1rrza3rrh1S2F9qA3mGBuZPTaz24wDuFBisctZb3BEfBQj57WgNwievRwoDXz7fSGW6g",
  "key25": "4h9dxTeeCvZeHKaXCGura9Lz1ySVRc5eG1Wa5MfQKvKb9VWCuwaW2rvzhZP3wH5bdtEghN2dx7W8VStbRq6VBUGP",
  "key26": "3Mw6q7XaWbkTMYNBK3P3oMtKhpvSWMpR6ggmwxwPurJvZU89HyeLgi32tu949ht1Gconsom8n3gENiB6oy8aBEVh",
  "key27": "4R4y2XDtVaX4DBnmkinyn9AmKZEoDsdcfyVW9MwqCzpnDMPTDeZqzXUUhopeVDCX1c2oUajcFrW4ujWJSnAMGsiA",
  "key28": "FUgVHekeNjEZvKgPQj8Fqwu88KWKHKeC2Lhwq9mdkF5FNKnroYkUia7rGsn2sZ8Lo3DpDRPtqaRSwydoywj1u7E",
  "key29": "2nvHEuUu5cqtiU5g6S41peSbbE1PcTvCf1VLKSi1qev6gGystBj3nMreixPanAJL9LLRFuHyeYsP6heJHNvtRQUJ",
  "key30": "2Z7miGXAZtmnFcNQVEyC7pAfhQgV2pW6YR6KfN1qBkC9iSPJEHmSxuHQwuLbqDBGEGWUkc2iuGsduu4ur7XnHKex",
  "key31": "5j6yVXXUGbQBn1Vt5eSwK4jbhBzk6Rj4T8NYPzAfkM1M5N87yB2tmqdsngwamRU4K29VEMp5ac1SqWWQM4b9yGc7",
  "key32": "2ufBguQ2oEx5zMDxpYmAqNXYBBpH3Z1w7YroFNhy7sCmpGd3QHGnuZfsqfaDJgwbzmSbRfDNG8MuprieyxGHUp91",
  "key33": "4GZi8ChBb7Duzn7GSwWcSB6M92gH9Px7QCm7dTYWUr7AmLDTsMxoiEEUqZEqGJYH6deXjvt4ZXfgQs49fWsHh5vN",
  "key34": "54fGXzXQGzftV5f6NbzuWP2gBmUgNdktuhs4yJuMi7P2W2zbyfd2E4eYst6ybUwVX9gwj1xvZsPXwCMaJCMrF1KW",
  "key35": "3soXTJQnZnLd8nqT32kgo4F6Vd5FW5aPFNPjTTyRsNAgJQV8DNivfBqWJm1LiW6v7zGHRSBPRLH4hwesFox76evF",
  "key36": "39LRzUhhZXxNcEwi1jUPzbR2ooSyqBZXDxVyHhWsAD1Mp9vHwgkM6xBGAuu5c95mDvSfWN68UNA7oFQ79CUsi4x9",
  "key37": "2BfX5gmbJvUJ1KuQcyj4aQW3n4Z351bidpwA4mtwpixpyyC2jo7RmofcqRELsGbJ3ZbGvNmBuzJsNTFx24Zo2un",
  "key38": "g5oJhTsJeEneoUW7AHmKRYm1cVxe1qf1ekawEWpiws3EPCHNnhVcJXBbE5LX5zdCB45q2816LqGjorxKzxzi2Jm",
  "key39": "4R6J2TwvFbLb4G3s6StLywrC32NdUATZVzcXqMG6wCmRR4EvcooqeGUhUre1Lnm1a8rYTDXDWFVzkGqEHAy19jYs",
  "key40": "4Y6kX2XTNRbAZHWAsqJKRnZATV7x8zKBdZ2V6EbVJviwxY3AdfEStg8FKrMnwsqtHcYfCXCRxNpj6okAoM1zWGQF",
  "key41": "4RehBeF76aAQmT9fMEiqzJftm6JMt78RBaBmFfhZuADPCrsCXp2k3YrRVnJG8a97nncUebg5GK61jVPH8APXQevi"
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
