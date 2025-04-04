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
    "5S9bnZL3c4HTLs3PZr6vRJVnSY68RvUdf23ixa2JuGWFWcVNcNkF5uCPpJVssM4onAM6bc449UPvi8EvXb8n9pXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4ffHbZipYLmzhHrw7tB9i3wkEAtoiqYDM6qWaQMQektqp2W3CryuhDTC5gBq4TH6ywHFgpkqCCtZcPkCp9pojV",
  "key1": "YTEwLYrdFuK3xNGwqQgkQohbSn9WXrR2m5yQvMR7dCX8oUrxRbAUSTuD4aPhWde51NmEkY4iJu6vQeczrHHjYuu",
  "key2": "2gisxECp18zfepcqwLvPRkRWRWdWQ4AMeGUs2UFQMpAc2j8Goii54h9yHoHZimuEQHK7PW8XrFFZx14TiSkTyAQL",
  "key3": "3i4ajqqw9fiLkgt5Eu4aGBa3ZpBZo2ScCywCdqFKWAt8CorZgWKdUyASNdWPcEhmq7iEzs2NdjgUUWryUNykzBb7",
  "key4": "22umHR8545GAcRLzsUg5mkmfQJzAmym44TpwX6P8woPHhqQGoBedbSKA5WibZP47th38jdRdbdexmbQG4ypRUg8h",
  "key5": "47Vy4LNw64n3Un7bEUGmLb6asSXohPnEQDm6LUS45tYPrqGjdJKXpDU1RmpHA5Fhri36cwnt1kPLfzRfxgBMyVL4",
  "key6": "52cbYvfEgANoaqifQ2mzKaT7HEfR16UE5nis2FuXPYgneUL52CTUUv5M1Z3YCcARHAPKSjDLbXHCtdJiomcNbsbr",
  "key7": "2axC7y5vuaWgSANxqzjNNUqZQQE3u8pQ2MppmUyBUDMKv3855YfepniLXGXW4CZAvyFiAVjrngb6aCUQUB3H3qYo",
  "key8": "3dLnQ1fH7mUv5c2C76CxLfqFwCAyrWxprhbCnshQbxpNxQiBdSwPuXrZcFrW4pc7G5weKDg63bWXkePDjLTToZJK",
  "key9": "4vCEEvo7NCtJaRcbw1pagpiWTk4ZzXgyz8VUppwjqG9affeHdfWquRUSsMDCSCrrViVss2i4MEoU7WEoHzbhw8C5",
  "key10": "4tnaFeWVLqaJvCHJZ991fUmQRQ6NTecTyPbWMPftpy7J9cBM5zF1dSyFRyAn5m8AhgU8cSqssrxfFkBAuVRttWw7",
  "key11": "3scBgQV6MHJeFffy7pSTYzqHiBAtJLmF2R2Dig9aKXPExBFafjoLXiLo2GBziiZGBFYGcSpiW5dQMEScv4zLPbbN",
  "key12": "2yjn6mVGWa8STftT8sXPywd7tJzkvu3ZMvGLCoMjES5emMFjf1ofeW8c33eq88bV1ziASRz9zsqiybeUwnSbUQqE",
  "key13": "3Jcua1ReSjXACbHYeVhfFoKRhTRNhh3Ctz4diDrZDetp73n72cisESn2HzFiVuW7Ya8m8tSeQ3L2UWyAKNDWe8sL",
  "key14": "2yfwQRqAQ84nQF1pwcCnDSzBPxcjWsppHsBY9qDy3JYAYbfEGjx6ZK6ycT4LogJyhxc1DsaPFMJCk3hvvywNdN4J",
  "key15": "3diTRDiz6f7DdCFLZbGYV2LFpnH2YUojifNbSjUF5KETwaa4Wkn66DGSwvvw5Gk2B54gp9oqmfepucx6kAf3nthR",
  "key16": "53yBEfZMfhVB34bL6VVvvKWsEqgC81Kmp5kNUPucqQR2vfredhDgcsTyW4nJXx3dBTSjnanpjyJgEArKDVGhK6Vu",
  "key17": "5qtAYBxgPf1sDY8PdvmrEFfxZb3aqWLk3G9GhKdJew14wbznjB97kP5JMKwYr3EJkHfM3f939b7FB1BLaQh91oZe",
  "key18": "5tA3FhjK3oKjvcj3CpB3X9kiKZUz8Q7A6pagJJuvhwm8vokHN1Q6s8s4uFWFqDMgJ4HSZhK3gJQXfJVx4MNNewnd",
  "key19": "isPdRz7bF8YEFWmbLFPWToyiGFG7RyxeTnqekiooncjrQSGpSDaTL1FJ9USbfA3Qm9hraP9DSiPWCAen9GeKZLm",
  "key20": "4kVYq38DrvcNTeSn3ozYZuEApcF7zkUPhPU5RDiLiy7myHYihWTEwNFudrrMU3YPLxG9FryRAdgCCHQAG2F6Z3B7",
  "key21": "3vSYVT7sHKm7AnPBo7fRnm24MhhSQeqByEXiauLpEP6epD89L8NkkZHDj2gp7njmxsEv47apQMFcLrJfjionevnf",
  "key22": "2kQRC8oV5TQuGBTZhH7MvMiHTpZvHSGCufbSgFUKRrEAL2iRCd3y1Qp4ue4fw99aRp9AEPacKYLF3JjvuMXuAdTz",
  "key23": "5XZgzHPijukJf1bNxJEyjJSTUn67fGXdk6jEBhvffwk4kYFa3ZstmDJ5CahDuovkDozmapNLyZetceAwduKBcQ3Z",
  "key24": "2fGZ5SdG5JuZv7CjCtegCSuWuniZB9NidmWL9etMRZ9JPgtDZ2Rbtx4BRbFdmL3dKCSVGfhJSLRMDgBD3qPje6XC",
  "key25": "4xpZZC2fw54utoeJoDUzcfLPBaNQW7AwSNbUyxwhG4Zfi4MHMi44pVo2zir6C18tDhvVXXqeL8WZKRMufwrRLG47",
  "key26": "e7CYD7T8cyj9fSGbuGRMLgvN7yxA325oAVEYzejTGMquuTKDBC4u7fsMX7Aj76x1MygPkvuW7YociXQt72Y751D",
  "key27": "2yjPCJ9yvq4oqwguUUnQSuFQcGcU3ctW4fpc25HSoH8mNvFfBKL3UHDfn94VFB2en6ZrG5U4rUQifm64GtKsvezH"
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
