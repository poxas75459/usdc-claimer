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
    "2d1dKG1yhqh4mAiAYZJsMD4DWw9ghoZqVJv9erFmyBmeZQnV5ppywNYrimdijxJHn5nNrzAVsT5zfs3f6iLVJjQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQzy9jsr4eQBCm2aRaSpvqR6unkCZwHKRS9orZUVEC5YSM9LWgwnBbpdhCi6UG4oxvZQRc9oM8jmmJCC3ThJZpK",
  "key1": "bKRA3N4jeuaBJ3aN6CLsB4hEnriKiaFpPsh6p4gKy5CgepTPTQ2Gc8r6Ea26gaoFn4WurmNQpsYt5G4hxy9vPVZ",
  "key2": "ELHfTRos9FQFtGF7hHGpHvqBnbZRKRpxjwXmKX2wVv9GdC4rNkBBihg7RMUFoqDcUkCWxPG3Ure5D1m7mFye7Hi",
  "key3": "3prREfuFKUj6w5mgHgEnsUjdnza5hgQgk7cn3yFiPKqwofwjnhHGXe8nVkuZvMN9uFbxSqMK5VsDAFjqNS6tYJaj",
  "key4": "3oT2wQ4GtkEx2qN8EsocKacPP9FbczfGwtJu8a4ab3f7Z6mY2NDGWSWbiYSPaKUqYNsphv2CGFsyRfzGhXWoz38z",
  "key5": "5rf3xnPaTPrMbzA93mxPMRG6qtBaksMTKMzcBcd1PTwj9vKomGZaiQR5yGL5zcs4FoNG9p55iY5NStqm6nbqnPcU",
  "key6": "2u5CYC99cG25Mpzh1WXfvKDV3gyikKW9Xuv6sb7xXcNBazjLB6EGpzfX8J5k2oNd94Kb4uWVQqxfRe1m6R7ig3BJ",
  "key7": "2KdAhJfkvQpRdkPsakrvYWKmK8A3b6FxNKf44X9od9HV4C3v3XHuLYxigHUXmJi1Db5EMhBJQVFUN9cdXvBqhBSM",
  "key8": "2jooeM5oenK3vx9jGc5eUtwA9SyWVgwQUC1u2cFY18K5KtA1BtyAx1nX5fopDwbb5tBy99tVM12jnCHpfzyLsVR7",
  "key9": "Entg2LTm3NY8bbMoVgzManrUEgdYyeLVYA83TVC4TkmQsKjwjfutwWm6SEe9Ze3VGSvcGUv6Q7q9HJvBagQq879",
  "key10": "CLja7aCcEa4PA4xWHt8BXihwJ6SB4MCUQo1oUS4H5pvbhfGyYWEJAyshfdzdKcf2RSRHKhe4AxUpk8RKaHrAvsR",
  "key11": "591swCZazvSofFXdmRimkfqEWaV7nQ9AKX4nMCnZYmJpLPqHiK1peZ7eN2j7232DZWFuc4mhGdQPq9K8NAVTvBrZ",
  "key12": "3G8reBYdeNMwQwc8jZ6QQEWfG6V3aSRdkpvYxNLq7iuaeT52zbatchZKeZdcuM8aW9wh6RyvzRkLV6oYBUrRhiad",
  "key13": "4bbUbhzatk9DZm8JjHj8n8iipHZF8pdmFAMYVWygZ4m8Dpb5CkXEpQzZXx6A1Jk634BGoGDkAsAT3u1LVsrd6b9D",
  "key14": "3hFtuk9TuGL73aCPk5oGWca4b8d7b1XWwMhrEcB7Y2t9sdLjWHdW2YYzWv91C5YTAzNF3imWdPbM5WjwrjhrRduo",
  "key15": "3zrzXkVEjADcbwcDG5Afa7jda31cDybeyjpxzdFRYAMrNuESNmBESm4ZUfLqfGaLt4hPxmHdgnwbzumY7LR8uQ48",
  "key16": "vCf4GcJTdi3RiXW6A7ABSwZAskX1x1nYdtdABZKhdj2YqW2TYjRJB7DU57Bjfy37Ek4Bh9h77MvUUuRBJdZp6Lv",
  "key17": "4FuGrwFuqJ9NjoiJ7YR6uUnVnswceHqM9f7VPK832cSv5JS4pX2kv73g5SCtRRN9ej2FrQx6mLHTa2JgDHBU22sQ",
  "key18": "4dzdzMAKyJkHipT2n8MwyX2ZX84y7DizGeTyX59xLSMWUas9rhv7pK2sxLkAgkyR6rTVJ36PGUZFpYAQDeQz8fZX",
  "key19": "4zKu9RDkUZUP9qFh8VCUqiMdnif55JZTg2G2Jo4GXYEeP7xtDY1mJ799yD1zPfJn3xDFzbR6TCRr5iYCznPnsCYN",
  "key20": "4RcD4Pc2eds1V65A3u8z4bK9UW5giqA1Z3v4btcPuM3BmqkoRbkf72rxJrSmreEjGba4zND4MeJkkqZByhayTyrk",
  "key21": "45ubSCGHGd6BECaHfDDS86F38wqyFQY7ZVTveg59v5FjBcvifVV4V2oaPoGkhGxCyMdtRnwMctwtwqUks8wdaiM9",
  "key22": "5hpLv6L32y6h53tmqUmjLJnGfhuBGdu2RUk5fZASDAPiyd37XT1KF5pWE232MXm6Y29ZCuwwUJc6ieSC4dbeTyrT",
  "key23": "4CracJttrk4L9YsDug5ZVp52NYhCVzdc8yrc6VoMYkuuzE11nKNgJt5hM183vkktpKkP72TL3LUqrP2BHfKeqts3",
  "key24": "j1mQruYWAjx3v2FGbwBQrQP3kPGtXrT8XiF8Ew7WRZKKxGEfVTwpeRnK7jhWK74aEDU1zFFoGBgdrw3fLdqGmES"
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
