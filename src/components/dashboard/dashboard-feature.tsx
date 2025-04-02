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
    "2gDLCeseuNR6zCpYpxNVj9wQN5cZ83SKBV91qg4BSez8eZ8koKLeGXCzK2BqS5J8mNxVFB9XnpmgaizULX99JDJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEXuH86En54mAdVzAjjytPHpNkdvdPtE1132oZvScv1KCqjuTYw89S1hn38hLSqThKuegzQE7aUKqv7js5zDAx9",
  "key1": "M23zgYPZhSYsStkZF99ZvNtKvM25iQeWhC6N62BWhXKj1PNvJp4S5BajqsvSsB3DQEGYpZijxhgjzoz17i5SNZT",
  "key2": "23xBFP2ynnwSy5Cw3HFWzwnZfqHiFdk675iuQcmKmcwN7b59cpHgR4xd64VQTSZ4s8ctb84yevg2kDKHgVK6sCuo",
  "key3": "63wjDNQKqkdkbF6pYmKWra3mZcSPfDgLNYbjmSV4HGQuQqTZtYutK7iLPjRiK75CX2GbCP6pAGaeyzHBbrR7BB98",
  "key4": "4u8yMwx3dCenSVrMW4DmR58ZW1B4WyupD7vKJkJEzaPtQP4Au9YBi4HQL4PrRCu8cpzVn9cVpxhvBJntrJTg5hRf",
  "key5": "5L9fN1ABi9YLEijsryHGi3yD1orUJUzLBsjZMFYSLdhADRKAipJuiahgFmRLoMMNQa3Mi9dyW1VJKq1hsg544EZL",
  "key6": "S1z3rGmvifMRrvS2hNXohwsq192z8rNLr9c21Kq1jGZkdPWCqqtfoiHREPzMYFvjJgEfAy9FpT2KK1PZc4wGaMW",
  "key7": "4S8svbBxZkcWDwFHpHfux4sWoSeokL2J617Kwr8KX21jcrJBVkb9XRGgAP4beHinp3TMpQ5rUFy1brMFYp686n5i",
  "key8": "4S1s2mLaxH13Evv4CfM8H2fNUEVZ2CrcqV8M9ys2cWHYYGyTEXtRX74pcqrGsGJRGyQjUdittmM6KfM1tu9471WT",
  "key9": "5eAi4M2Hv6GpaW7Xbn5drVGEbvtHGAvk1zpqbAVApYxBhhxY2xic8wMmwuK1mhXwTqkM7YDbZvbEXTuqkkiyrWBG",
  "key10": "2Uymd3nJiBnbK4nggV6wPxjviiHnvhGRA4d7ScpGBLhZsqKdwWvPeiN1wY9GffYp73B4HdUG67czFpNyk6yswL77",
  "key11": "4tHUha6KLaVGm1TMqH6D9mNQmvtD7mxkiFgMS7pTVntbnmbgVHQBfcaQbwKBkv5Lzx9UGhTXBDt4feSLeJ8XLPUC",
  "key12": "24gTJ4wiiq7RkiTfjxZR3Wap8iQM8ryeGG9ZvNpHNcc1VKdaUAmLpszVy9dXaBEWUymE6m5rbh5bqe4MfbpQ8fpg",
  "key13": "2JzauZsTz24Y3zR3hxWFhiruaayx4orYAaD6vaMALvb36cnVDWZjsvoqXdpnjjcWmHdfGeXy2JB8z8C1UPpVAm4y",
  "key14": "427um88kaNnJ9xejiwjDimpaehhJNeDYumAFeA4vsyNPnj21V5YLx3WC1vwY98QUVctD3bNmKVYRiHHxm8LFbdkN",
  "key15": "sRj1ruUM1whvCwWJTno6BGchPLggsmQNpGKN4hxcUD8kScuKT6eGgk2Rw9FTfJgGv5a81HkZWTT5LqFpsbj3xH7",
  "key16": "2qYbW6vfr5Wu3tkNnZZ36NcJzf7paPKRs6BWeem3grEdd3NMEeizD64BA2A1zn7XX3fwwcQj8shrEagwhryFUyTq",
  "key17": "25ZyPj1ANbapCwE4AFSGMehPNS6mbEVgbmGoihvuKwwqQ8ip1tEGYuoqfAxDunTQvE9Aw4hA82acAPgDLy8dQufe",
  "key18": "3SWjExYTV1T5tar7ix3yNvvJRjcG1z3zxiqHwCzPE2wDpg3gQUY8umvXFYRYtqtxB6SioMz6whi3FaHgxRW3visJ",
  "key19": "3VpS58EsNXK3u6kzVfme4eHkuoagKBYa6sUgR2qWtb74aybHuEH7KPXQNPrZFPunR2BLnThhDuPuH8CNrV1LEaKb",
  "key20": "51HzHG6BiqdvhopYiPbwDZRsvnn4pKQiFtwrhG1inwexFd5mM558x14nQvZTsTwqqtsTMi3icmDSsURN4wPS3YQX",
  "key21": "4JbhBactQzRzchXdajFFQdKE5rKF3JpQxJA1Wpkog1sQUan1GycLEXkdmVohpmVmy6QqMXxL8Wi5KubSkVLXnzva",
  "key22": "54G6yaxqMf1ytpjWfProCnpmdYkFyfMApvvDqjMit1bR4AyKwzkjoh5uY7FruwBrDMYjncaakBkahvpAu1i43ujF",
  "key23": "2N4AzMWDoXT6hmiwQg2iHGR7WE8u2zgttU2BxP2EMwfqEeJjTdBw7G5dx5m8Y9XpBXL4qrUNS2aijUD12ggyfLFD",
  "key24": "4M4qhup2VfXob1j7Cbf18bx9DVL7eeiModkyb6Vc2FZRnaKk6eRnJ3hsc94o5rvuj5Dvu2LGdyZT3DqPPXHS38sW",
  "key25": "2W7AraRVoNo6xtvndtBzRkoJi9BDA8XkQqG8isHJuJFaLPaMMTbFy27yn8zgdksgt2W3whwD3BJcjQes7KGdE4Kn",
  "key26": "3F1kWKiPmo3v2bpD2jHQhKsdwZqC1nj62vQkW1TYcoPEzJxf3vusHiNpuK81Y6LUXNd26G9aDvqgdALdEAjN8oeQ",
  "key27": "5XVHx95Mz4yXMF4FY8TWfQK8kyYsTUHpYR4nvyBdf6cwBdTmczAHQPgwgXvJ6kZYc6oj35viv8Y7k3i6cZ8s3Rrz",
  "key28": "2ZbFa3ac98YmaDNkYnhVBgZDsxvCndkbBuYwGJDt4D6yRHjY2TpUbMDYYpv8EkTroZVUarynV9uCJ2kdsXMwZJvo",
  "key29": "65iD6jSrPZ2uZwAYrekJwtMQZQG3AnARvEeiXgbSztYX11dRpj55pqdkQMhPhTm3YSv5NRY6LEC2crDRNHs91Gi6"
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
