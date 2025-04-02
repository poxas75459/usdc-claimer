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
    "3FddQWiW6knanHG9iu7KzhGA9nEsyBj4RqMJ6PFLSzGjgciNKcU1sJvQgcxKcatcT8nAi9BBrSeFGbnJazaitRKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36C2cdgaseeGFiQWDrNTgc5g2MweMTvZVSHx1zSaFvDN7BB1V8373RVuwBidXr3dKJexuxVqhYFA79DJgCJ6f4Nf",
  "key1": "2eLThqsZyjmp8kXaGnh5NJNBP9PvhEewmLyb7x7udsJSvsLwPdp3yq8urJAzBJdgyoVi5oiRed2GTSdn3VHRHxjt",
  "key2": "2X4NM2J26J1fG7d2D9m8dtRyCrn5aG8TbP2vUDUb6nucmjhYXWy32D1g6xcL8AMcrcvP37Dy6HhSnNs1MoVTNsDn",
  "key3": "2dMKX8MerQf1ES9GCkPheEdcwREWcaLZ2ZSymkaR3yf2BZShSSJeRMibF8N86fjDC37ghLPuFNfCKE67Ddvf9QDz",
  "key4": "Dr1U8Fw68D7Z9TiWMCqzQKUg4z87Cq6piaMQCD7yEY26S13gpjcafDLuyCerfnAjSioW51mXWdWZxc4cqahByUj",
  "key5": "Wy7spFKVZn4mtYFbcZpgYmiZLkcYas2dXkLRiAyzCHqcWFyShdRFa5aiHWBFd859uBFWG4YNTfGQitnFRuf8BDW",
  "key6": "mNGge2KvqoKBR1yQAQ8QwsnRdZAnepLBMznqs5x4YsEGRBLmThWGgXa6JQYQsXWvZnowWqwK36SWmWJHr3CVFL7",
  "key7": "5TzsuwTJZnypj1fvtmkoxzyeCWBu5vVJWmEGvj8DhPb86bLq3KuFNiZCNfpp2LKnERxuqPBJyBryvLNJoAwmrPZ9",
  "key8": "3Kmcdzxe96fbo2Xdnkgd7WED1xVeDDn89aT8vzHGbpPkgPfomrbhVRfr3yjMZJYxrvXMDsEKK4kS9nbptvZe3ZQs",
  "key9": "4s2YDbmx1ZAj4UjxWPhvhEkS6zpRLcKkGpYEgeTeBm5tMAUJ5sG1THq6xmo5xjsy1sGz3kXcFUmru6Fcfkr5mBUu",
  "key10": "5vvLeJoE5Cs6uGcDFk6p4xtaaoPWkRw74jnDt6LqbWf3pZ2erNf3Tn2RbUMBxCwKQr5mBDLXxZ7tMvpKTXGjky2N",
  "key11": "3vFtFavWUPucYH8dqrR9LWXKkafqrM8jRQzBkYe589BREJQztk5tELHywemVEc15sT9LxhcfEUekFRkYHJphNd4Q",
  "key12": "4i5g46T9eTWZogp2sMBc7DNZSJvY7UQHXfKDjhRrryYYp1rXWsXBrHVF3rRiaN1tFjzRorwkYthcgvS5bqdoRjHs",
  "key13": "2oBcrtg4B5U3Mpx1KNmNwohTCBNRsDmFZQcoL6AbzXEdE5QjsYX7wRKGj9pKBnAP2U2nxokyTZWSFLn9Tsp31RXD",
  "key14": "2hc8J3yFVhsFC4GFUoXJoRosAuYMmVYnkXhvY8vEACb6uSfpWcaFCcGQ2TSBZPe7gE382NhngJpe1fAH34QnvBrR",
  "key15": "3H4o36p5Bmk9UbYCrXG8Ksgnw2hP53wMLNnb3fcwsJavZ4DQqaF6NrmwFGXyZyLC93s6YeSiZUc4E4m6ttJ2MfC",
  "key16": "4b8yeeFoA96FE2mNgS6gSJS1myzAxs2ErGLKCVsDr6MPXV1cVBzAqnfb2jmFp7KLXFEWumiC424YJu6v4WcfUwxB",
  "key17": "2DTDUHG75vDUcFGiPxoDyr5yeyssbDiqZPUWEUU2Nbeh8BoGisdRX3CG4uR65PRogYuWq3LGQqVBndMSzoQnJhxh",
  "key18": "5bcnzcjRDp1X4riMsGLSded6V3Go573p52RN4y5JUkpXVoCUvFmQHg8si7QkfdHcQSoTyuK8Xb6iSiRAdZu27XpA",
  "key19": "5EBKH4BBMQhQE4yPhjHfSq1zZeLKYGLBBUUS14p8u1bQ2yJo3P3FrbueLQReJujvs2iHVUzR9runYuSXF5dPGuXY",
  "key20": "3BJS6QH2RxAcwfNdGDc4YYutm6v5e5BVME7eRGfgb56s6gCnvidyy5SNDa9VgjEnV56J6iYLxrheKULVHi61JFrq",
  "key21": "3XFakXo1tDPppNU6hYSs97iTHNKQ5FGxN3boDziLXiS2C7zaEQb1er7XF4xuSAWdgxdh8a9Sya6Ma8f8ERzebDid",
  "key22": "3dvHZoerF18u956zP9Ntnbg5rfDyPBWMe3iwiZwpYs1LGKp6aGHGa7zKMk851RSW2dovpreE5QKXgK3Cce8TQsF7",
  "key23": "2rYPEiAqyhi8ssBPK2Q7LbEM6PcER93t5icPtbDchHYMzo6rG8D9LibyBDBYaBi3euzCWYG8f3hGsXoJCD6k33Xt",
  "key24": "3kuEVbi75j69KEzgLSvmZbrXcepy2KC4MHoAA4hpy3eR52pdbHmMcDtomqUocnjBnooYZaDBTqUm5zEMUkayaAqw",
  "key25": "32NztBT1n1k9AubXHtPyDhjKoEgaq9FZvXR74PB7s9aUYevRkb3h8SwQCzaZrMKhy1YpPedZefdSi8esomcQeP1e"
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
