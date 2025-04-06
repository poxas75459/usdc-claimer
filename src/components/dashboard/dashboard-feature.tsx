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
    "2EUjgHEZuSUsys1RLDGSMdgvbDdLmaVPKzoCJLJfc7FQjjwGudr7QzagwLW6ARffzH1ZR9Ds2MKVA6jyeo2JRdvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Afw2qBZNyiafYLggehHfVQL3T39ddmehhxEP7NCZTihE2SNx5Jk7BMRp6haoXJDXs7zyAcSC8nhhtyGymjubSLn",
  "key1": "3H7fzLuVHWVredBcW5LSYU5MFJyV9NaDbejpPtosqFzWEstgMW3d7PvUaYWwwtTR7VLdT3XHxSg18B8ekobT9hoX",
  "key2": "sp513WdxXhDizv3ibPaDY5UezjMXqSNMciBszqbnHR2g7UYBGCzuWuVuG28EvrYcWTtKyuBK9BK8tVqV8WPjN3o",
  "key3": "eR2z5V4MsxDuVXqtZEH3J3ZqZb9pKqCCw8jjeeFshouYtmvMsEenBabsQYuWK4xtGY33UNejHWHqCj1Ssm2XRjV",
  "key4": "55dR8Cib5XCtXCtjWQKCyqwXya1sJ625F9vxoRmkhqp16M261Usjtdp359RunmQhzupK4yMHfkCyJW4EsQ6eWSsF",
  "key5": "3Dwqp6WnTSBaDQuzmugH31dynz9Lk4iysGPCH7cWyRqpqcZnXyQvYCN2k7LQBUrYQR2PmXBEHprfAZn4Kf71rAAy",
  "key6": "3KsKdLWJ6ebmAo4yX7brs2HC1wkPp5bh85okhLkuJy4jHBx9YqAEinTDYVVoyZ2bsTQfUVAkepZCgM9pFAj6wwgK",
  "key7": "2YD59PYtrTxWgksW4Nb9n3YHbJu8KADmypwr9kzwB8q2vMMPKauD5rpJ1s7Nifzr4e2oh9Tm7sGkFs5ShU4dcruM",
  "key8": "47KgcCFbSFJiHwr4DFrRbXprNMBZoDsxAFsJW3pAFaGcW5wmBY2KmSeNEWtp1HEjUhanpoyD8wxCuDzv4SdJ5ohD",
  "key9": "4YfnPjH7bBGQLgCN89UZeCzGKVmEv6j7aCMff4Ttt9eCPJngGyFTbpLyDxzMMbL5Hz7M9TVLWdFUrFBoXSw7s5Ss",
  "key10": "52WHbyd1nepM5BQKUWdM7vDTaKbLatK8VcFCsgYU5bVbMHrxaytPHVxfDUiabk2Pc8mt2Rn7FaWkDmFrcfjSAthZ",
  "key11": "2VBpK84EiuAYDzBNG7JCp8h1jVZSkhPx3JiYSP5MFuZ57aRbhF5WbVxYiDgCB1mZebAAusp8Aq3jx8xdnc3ugnuT",
  "key12": "4xHFpkPA6n5c9e1dLAWQxZarwY6G8WdMZsiTKBh2NjrvW8RxvkFRVPkCkhygrCesAy9EHwm7Ls5y63C7ZwrwQSGM",
  "key13": "3iTTonyoNEMdQyjsi3XCK8SezFhe4zMpff6UmNkKWmziDPL3eQpfAGuu3s7RzdvsTepCygPE3eH97wJqg77TZucd",
  "key14": "2NWoXVHECU7p2fnUBpxpgBVmvJZEUW3geqrXuJ2w8qWhwcwtSc4upY6G7SL5tt6jskbwCpX4CqDyBhN76GQ9sfXS",
  "key15": "3VnYDGVmNZTWqmZpqTa6XuGJKZXTsf4NecdgaqFYLdz9sE9N75HVGevjHRdp7K4mhdGKtWePHBmgju5Uv3PaVDYa",
  "key16": "5jvd5Av41J7ZnqYiCxmA3a1bhhzguzumbGjPUVpqMXYTFT1QvA5Bmk6UFN5Gti13JgCyYWZuubPYibMKCGb46GRU",
  "key17": "5hvAxyTm7YioNzGhXtKR38hjFbBX3BgKCg8TdP8i77e9s1yu7YPwxKMvQSe8Ugnc82xd3dyJcuRaDmLSAVfn4ufw",
  "key18": "21ZAPr4kGx5R9fVaKoKY2tYkoLSMq6rQ8Kc9dp7q4TZYE5xfKqvqQabfhmS1GEwtX8XMYehWtBzTJfg2weUbpkrx",
  "key19": "3NnZ2QTH8ZijP27Zepro6i9bCKmGiobLCikrY5GPZHS2bEztHBzfQk7U6unT8KAYbUzPsitkQoBLiv1ba2kf5EjL",
  "key20": "5FFgZf5aXnEJbLAbN3jPcVAsjoAKuskH1c9iZF2unecYYEJwqDShmh5ArY5GF9C2aZBwnFJ7vaYi7GNN6DYwjbJ",
  "key21": "2DPdtvDtQZKG2Tvv2X9LzWCzBD5VFv2iR97UaaNxgWT3Eiz77GLBw8gSMaAdkb84X4BJtiK2WgnrqApgzvy4m4mC",
  "key22": "2hRxpHMAv2dbcxBPWzreoVoofZnPxhPDLEnwgF5dZTeuQXiCWfDyghtUD6q6FX6Cikvt75ceAZRJFWG1LCtN429S",
  "key23": "3i85AjjC87fpAe6aPB3ZWK1XwgoUsuxeKwb8BtKF4MFoMCbESEuhVeZqNiTPa3AQmeGZUx4r6LzcDu1QsqFnjH9U",
  "key24": "43LG3MFsnf7Mhn2d6hTnZPDWU4svjAMWFnTpUXnXqEDAvKFMKXfKaNuZMwbmG7iswFmzrL4qGMcjsAWWbbXi71ey",
  "key25": "2wiYTxypK8AVd8dPgsjub6wgNdeNUeVBPSS9NiRPhiq88SuCxs8FuSwytrSoYr6tzHWe5LuYMzLcaQE4FnCrxGGt",
  "key26": "hTL1kqsCSLD43GZSrEQiPFNG6vV9Swh8GPsymkGweR2oJVotEt2GnMMNvXay923oQxnHkJGHN2ZWzAtPEMh5hS3",
  "key27": "3qc27gcnvgM42v4vEpN8cTA8d2PtzQ7d8TD9JjDohUUAKZCvo5t45xShcehac31Rbt69bQaJkgXpNWXtxcbALt16",
  "key28": "34BovpBZ7E3U8MzmbaeAauUUjn88jqBAWbvu98UnxTfjhHYYHEPsKB67dsptKrsvHyFAX5RVxsuD68EuJSVWqgpC"
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
