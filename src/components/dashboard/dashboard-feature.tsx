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
    "W5cVgVdjaGJ1RLEnG7DYvetLk6KV9j1Px1dVaQBPHPTTvhL1FpiPMxktz3UZnmLpbGeHfvpJmwbYs9mxyfuQJ9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2df81LsKdgRz2mWru1UfWQyyiNUs5JKJpzeXg1woinxAKc9XpvYXDNrnLRucXfH23zmtbLosNB2FpkXxM4zgcxit",
  "key1": "3dSxGYgsFoinZgMYMh9mX7jXymw5VLbh82J6nbtLG297n8wqxf781TSdWQJ4Bwv13FhkNkcZLRGfxF639wFYGn3o",
  "key2": "255E5UKckX7vEuhRcyvfYfVPPLwV4Kvhen6GaQ5LW595mhseLUa79pqm515nzwbYbhTXYBPbVUqRjayXRPzTZ1uC",
  "key3": "34PvQdVCBF79EsndL8Be8MPX3MADzPGqpLWW7E9K3LHWWzCejH7mrPUKDpQwri28ausHejgV7Y7z42TrAXgkcaXU",
  "key4": "2iHd5yowKUwx1TpwP8JHtdgHqjNecW4HhDSHRr7aQmWzALWB5Uswa5L1pLVDeq8vntGyzyiVF4Eu2KPfAoMAPaMv",
  "key5": "3MfM1rd7sFmn5JcJWJZcK2KgCK5WVgXo9dQ4FP23DqSawsoPP42Fqf8tRnh3pYjhZ7Ht3mmRiPbvg759sesR2LUz",
  "key6": "3Zdjxm4X2LHrZA394YYPxDZ1JJawJhVfjQ1mcS6Zf5kZxkEvX5TRTtb3r6FHesuxmh9ygcQCdc6wBCdGSZzo63NS",
  "key7": "5n5kJnmt1U5yoHkoA2Yh6JJqDPDdYx5UokVLcKHFqaoNLbyMx5kmDqXh4nj9iSjfyyW3E1cDhPy5sx7g1BtVMc33",
  "key8": "nK9pvgKcXe3xV29hRvXXf76XHB1cgoU9cj64Scm47TR46Z3JVFp6FNQqhZmfQeZKmMkLR8DivR3DUmGRDv7CyFN",
  "key9": "3PZ7nFwDZwoyN7DrsjTwVLroywb7iHQ6DergF5We7HNWuqDTNbJnSxM3ivWfK9cY7BXb9hbeGoR61U5cowizDyvA",
  "key10": "3odox4KPZcdVHBx6nQE1DeKsvCKp3hUQZjSjy8dvcXhax39R5t8oK5SAEabHTh55r7XD5xtLY8Vmkkjp4vy2DTVh",
  "key11": "2nrWAA2ivUPPwzaA1uvjTA8vyDgPjpEa5uuJdvtoomnGzNqGhnzCv8VQb66E9VLPo7GhXC3X1gecraiu2yMuJY1Z",
  "key12": "23KQ1S1iLtR3a8rDsQFw3kaBvW5jp8XpHxjCdFvLhGsovMPJujWPo7Xt6kgSaqbCnb29WQcDee7vGxQ7pArUu4T3",
  "key13": "CFLyDLAttqzB82jndBNZZPR8KXAtX2cby8p8YmWSmcF4D7H2cQrWE6UZqg9ebjuDTjMfPdQErdz7owGqUN6c6Ly",
  "key14": "4nj7xEmDZKwvBdbQCArRJpYUH6pmTKoA2n1m62auNUFBMmRBFcvZVEaDpHdqmuBzkULdyLBAR1KQrw5WsJVZAUb8",
  "key15": "8EcAnErTyJE5X4M6RV2CXK1PFcY1dud7AV9J4SR6ELvrSrRKDimKhUHEjXKuAVMmjj3F85pkoBmjftu4aHoxAqu",
  "key16": "361dQrZqLGdSudaFzDbnaiuTgnZa9Zd4DcLhDsFt4TgjcjcAF1KoBnP7Hf7mSLNBqG4KRmhHU4MDdTBLxNqB2H67",
  "key17": "2pdDF4yvgEamX6nYcUyYXReUTeV8XMGwcX8wX8tohepnHNDCWmz8uouLGu4ZN3o3ekaQEQo8KfVPa2mDovX73MK6",
  "key18": "2GMmygDh2vbMWpudpkaxsVos4edUW2Z2JdwxhE1wwESezPCAWpwBUicp5vy19DHWYwj5xjH4J7RFE3PmjHCj87tg",
  "key19": "3egy5K47saKyL6vGHunryLqF735X1fbeNKva5CdZGYWsePUfq2HcVsngmu6bSSmo52TRYVmCEd168nFug1T87hKc",
  "key20": "2KN4DjJfe33JA7ozGrWZZnfLzzJvHZREGqWZJXenhZ5izRRD91Fuyz6bygUXjgyTdrFDtfSUpVFqiF5E8JQRvCm4",
  "key21": "5PmuTvAgSTaUScybMegcBq7m9vT2FchukFDeycAaVvTzwcy65dZxsQ8HqoVfBAjSa8avPkh8FwS7yRbwcSaAnVH4",
  "key22": "4txHj7B22B69R7eFye3AnidR1k5fhzGYpEpygDpbZZc2FsjgjUuDZnLQCq5eUqv4d4YUbp3arGnAgbho1uM17kM7",
  "key23": "3qv5eVaZqw9zni7Jrtp6uMvuUg1DkKMSasW46cus3FKeGEzZz7yU2CNkjJAjSHffhQ6oj7bEj7PPakRyyFi8R1Pz",
  "key24": "3pucSAxXZAnHEdPbwEmaDFXZuVhYAPBAuwPuLCNPxrFdSHpmPt1bAF4qqBTgnbtP7RLXqndD5JvpMdFfrKovuCW1",
  "key25": "2ZoLzAi9a9eP4MU3A9SaUzUbFLyMT8G3pwxzAgcfm5kNY1nV7W4YAjE4NWyZmzJcq7evihbg7ZDKQzdtBog6PGST",
  "key26": "58gUdM2pygRtqkBMXptQd98zZGLZ8bCzgMYc4LPPiKaKiGi61htNSpZscQVxXnBnjzRZKyMyRxFtTGiQivQA3UsZ",
  "key27": "e3Qpk1dLn3uKYbEJTnaWYFEj4NWtbSfPfm57WFiS6TuVk2J9vda4PggwD1HV9GsExEUGPKK8HBtHkf4mBuxtV9z",
  "key28": "622aokeeKdYFnZkNMWyLTmW4VhuNdY1uCG13HS159cRSuyEMwnU8Bss3FjFsueHgmGLWwKXTn8evh7PcaH5DNLdQ",
  "key29": "Z8bMqC8ymSB6SDCKneYy6MjvkFokD6RLtHAEJgifoFvrAU7x9ypdjDe5EBjGsuErhnXauRtn8ezLpg2MRZbaEyq",
  "key30": "3kWaYGX1EDCrAfMvLvZt1GLnQbAWDu155gyeaNfRvtwsXugH3cb6ZzZqaSwNGugivZJTREGwM8k5gCHcttQNqJht",
  "key31": "4uu5HQ7heYJekqymtqmPCzxcwEwT9LFwJSxrQDdipFf94RcR9Z6gMbv3r1raGr2rbxTji4vNgrs2tvJ9UW2hkiLc"
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
