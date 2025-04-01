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
    "3c1eMgcCxJty3Epb9dGg8zfSfLKhk86yFb6J8Ey2cwJZzNsxQvtMLFRRyFR4rf1YfzNtoMr3F4Y1qFEeFc5EGLSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CrA6FVAf1Wev9Szs1ryCAaTFX34FeCaJN4sq3Kn1DLXgexaV992Nqnxpa9ySzjF1MGVYgP3k6e4YJKmkubAPg3R",
  "key1": "CFFVFcLGxMSNc3uoDjrGGnEogEpjzDe3mSHMW9JXP4E4y1zNdwLuAv7WChRA8bijcKoyA9hiomZyJyJfP1DDf3Y",
  "key2": "4ViCJCepV9YAB6RuCX6TCGfzA1AZVd7LGhbVorV8aRTq3ZwcPtgVPS9k7kdSkQpMn5Pk2w7NfvaoEb52WPfFSu3P",
  "key3": "nchvFK2p7cMujonFC4T8sdZPHkkUxuFKriqdVdgrYngQpv92m6n4s3Dz6KPZ2b16L1T8mbVhG4zQLZDsYXbbUqn",
  "key4": "2Lh3fbgQGszkMGP41opk5Nz9VebxkDwMNp3q89i7t9VwAbGeBXva9QnuP9ZtQkFGaYtH2o9udwby6Fpt4KSjPWPS",
  "key5": "4k9KyxGaJmjBhywLfEcPxUMoPZzv2CY7XNVBM1mBASFwigDV9z6GiGCrWC2nbaeQNNpevZSQAYNLP7Sxv9VXTCvR",
  "key6": "3KL4ZGk2kBafSBzDf9CUnfUJ2UK5zyJjyhhsuqydYLew3bxw2ztnW783L7MpyMsF6DXNFuihrwHSmCPMRwCixCQL",
  "key7": "SqyQ7CY5axKu3o1TCcN2ZqWFh7yh8gG2trNyxqMSrVJVqrq6qQmeG5om1AhzkH6atfciZZm8eMLf2SfYUNijy5L",
  "key8": "52nMd2Q8LHaPFbruE2t1kXQmo5gyzMsChvGTfrZbVKt5yT4cHQJajDeJ3xMCkMjVV3FNcMumvXDkUqkWjSnC2eja",
  "key9": "2RrFoa4wMm7D63Z7VmNNeCR65GuFbL797yVNvNGWakEciEENZcYgnyvVegdPAj5NSefM33qtbLXSutnHjcnQb3NM",
  "key10": "37gpN3T7zt8jF2AUnLsmTkfXUUBaNNZMNxABnva38kYTDpiwE6AMc4PSLNfYzdVeacGs5aNcRU3iE7y96uKCi9AN",
  "key11": "5zmb9EShVpzU1iaz7bC5oF3HkNPQHMayHKt8QcDwTByAxU8Xo3XsJedLN7ZbfEDHvgrD6rpdyBEeXQ3q7cvTj4y3",
  "key12": "3dPa3NKtdJKwFzGYjDedU5pyXtr536W13pVhFveWDXdUx6SeUjVi2wzezHQJSupGePdugNzZ55AdSo18hMfaBN5",
  "key13": "23VharsFMjPJWxSXFGADMdwHaj8hHDHg1u6KqBbbNQSJUAPPKoV9iSzxwdXPWbUrkU6uBSFxt1f6cZMVCSBPKdg9",
  "key14": "YCa8XKfnfVoUPnAfcobdTEZSrPvWQcYys91eQbJWBrftbQysmQsUvrBXQV2G9UCMsD7x4eLRyQcE4DCFz6LrDNB",
  "key15": "4HnhWsvEgeV5WtfPApdD61yD4joNKFG84auNGBDfDLXYfq92QUGjscETY91zzWCLTY4pM6myRYMqvbsnjGf2ZXjk",
  "key16": "2C8a3ymoedudwbQowC9sztZ1YfVRbkQPaBy63dtdturgQYDdBcz1ekCeRot54qNUbsFtkWXvAtvqpxUGj7GUHX3P",
  "key17": "n3bJoSkZxj7qbxPmQLF8XgBzBHWMidazdhDmjjHRcSBE4g2D2bKwnWWc3EouU3GwLfrRmGmFavqQWrzCgqbqCBw",
  "key18": "62XAD2bkeWdLyYRvEaETN78nW7VgHNj8gbzgvZinavpWiXJBQK8Bz6Gpf7VNUFhWCb7tPcSRNrJLf22Z2HFvimth",
  "key19": "49yzdMvvisisghBy1dasLkA5DL6LCJH71v5frbHcYEfRT1fvUWumZQho7LVgpPzUPWnXxEiNSnXTA41NEe3m1TiV",
  "key20": "2RiJaNH59nY6dxChiKLLcg7p2pKvAiEVXX5GpCFmc7VoBcYsKmsoJdGKc9GoDfJhiWaeC4gsRcHjySPj6D44Nc3d",
  "key21": "3akpPKFnB5m3nT3QpPZQstUFWauvqVTGMTkzn9xLsHA6CjWWcrKJJvz3JrJKUqPLeSxfNTPk9kg3w4aDiWqWin7J",
  "key22": "2bojak2VPC85mm1uMSsMicfbLrPfpvMhsUYMb4t9fuu4EMfBTMY1YKfVnjb4SFui7gKH4tmAAZzdqerS7BaSZgUi",
  "key23": "2nk1pFA93U7Nd87uWwzsiGwpxNAdPegZRYbGNcoQzwBhZ4V9FbMw6J6JLdM67p1AWrZ5YfzrJQ529a26kGeP5YSk",
  "key24": "3ZGktFTMmpug2znQEkLVTxxvsjJjCeE2FMoZRwxqm37HqqVKzKbjnU3vMse17g8avHHfAj1meiqhBiizJKriqLJw",
  "key25": "4KqVYaFKFuUEKAv71b99UoAxHu8vsidxyTKgeKKYMpvcmxFLmWwmJpTj1dJx4KxsXhqUx7z46J8NHt8KMynwiFtb",
  "key26": "gpAaQ7Urp5j5y1jotux8AhpyqNqbtGabdxkUHNm17NRNCkENhrgGPKtJe3TM75YKaaoVRYzKHoUQ3cWir18dbtD"
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
