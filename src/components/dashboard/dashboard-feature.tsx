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
    "3BgjnEYQMqMVqnEppxBZMouoPZVpF1LNWwGbWB5uxFzFxebfsXhuZLCR9BaSYRvwh9k7mW5gpKjRKfMSKP6jmQSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQ6XM35VHhLBgVRnwuVUrCc9sAFP2drnn9ajBEDahVoZ7afEiSwegawRbzE8ngjSPPdumC7HFGQ2tivi5wmdDZ1",
  "key1": "5P2Kpa3dfgZBfjAE6v4eRwem3tQsanHq8TjZ91mJ93bJ8hRRPSUujP351jxPFUZJyUtKqgXdm691zsYtWWNfAQEX",
  "key2": "3RnmQDaKicJVqThKAJaZumvC5QC3PjyoQqS9GGiiycR8hgEMQ2hmaPf9WbbeXoHB9UmQXZ2dWQ4GPpmfhXgi21gR",
  "key3": "5pjPLeCqD9a7rn8magWXYTEstpi2N88uEciTzU4SNiwPfWedDj2Lv6Awd6a6gPX2nuosCKL7tvRSNeZSyusKtiEW",
  "key4": "2emgF5G8NkxBe43KHvoQacCnXxsE6cgtRDw3Qu9BRaxsWKibeJnk1TC8hwdL3ZF6hJDgTqmAF8kqXhDjyfdztV1f",
  "key5": "24XSTGWXYrYo1MfiUhfG6hga3mNdhA6bs5bVVqV2knZUyCSkXtRYXnGV9mDf4tf87MetbAqsX43HQwQwNgNPijme",
  "key6": "3Q4ogXv5XLKaDuXmKu2ASyLsoTj1DHKG5V2cyivZFrqqfy34rXj8BfQjSpkgyLZV8StyWohDnEMrAHpvnKvftNYm",
  "key7": "51hQQft9Gc4sP1YMg2uyXNS4TWBdmLBh2Xth2HmXTh9db6HWHFzZ2WGD9S97eKsegSZcUh6mFqJVkBuuyme4uFL5",
  "key8": "24u6xZopmhcwzVA1HP7JbufvDZriwGm9DvXPBbsDBR59Cvrz2BvPduMfo22Fc5NpdcfhMNib86BJxSbjWbEWSPWo",
  "key9": "2XdgxtyBbCQRLiMzWY5o7Sx2CGtQBVUPWALMRK529g7CuKJFYbjw7HdGzF367VphtQEYipv6GBoR7Tpj4WxejjsZ",
  "key10": "5VJEf4cDvj2rJ1bVCdLoAnThjxp6zNSYf7K2EEYZDuW3iWbCzo8nkojBEcDGksebN17T1eeYhtz91dcDFrqHNPPm",
  "key11": "5CBwDou1tepq7RDTQWXF1qPi3exoVJoXJtjC926ZKWwY9yHssJpZ9fwYt27NPxfGRZq2uwofzUJaERb2TQoxuCRz",
  "key12": "yG4TqsHB76pGS25Nif8vfQiDVhM3z6CNgUzMwvGwATKn31ySePMoZJ8gNbZT4dHn1t2j1xjYN67v7DsRDJPmKB8",
  "key13": "2MXvSAoisyajtw8E5fcjnRwR8bsKiHh8WmzDsg8zyBvBG8MGfV17B7P9FbpAwAyMMu6BEhvpdH3aAcEhh1V6tD4Z",
  "key14": "2JUE5ST4ouvQZ6QSo5HGht4TQ36QdAabUVAsVywD7JofA3dh3qNo3ZEuQz4YqpvRa7GU7CAkBw3odfvvf2WHHVVg",
  "key15": "4hDttwVgoZhsdQU1J8DBvW6CgbaTFZKKK81bSvARzQbH2AptzGdMVQd5Vo4zhioSZhUJeUWtj3PCbsDgGUjER2gL",
  "key16": "3wdesWibKvc2c94XAvYxPpT5Ejafr82tZWeuARjzs19TDHQv4mvBoTAg75PuakpWQ79vaF4fsHeNKbtXEzaFYGnG",
  "key17": "qFUxFVxuCxuKfh8kCQvcBBmPfeHVXwZArBYPkiuhAec3PzQZACx7sKpGzZHBFA3w87NeySbUSBNHm8A8FkGY3ML",
  "key18": "2VibmAXrxUyBQBiFc5NHPV5vG67aqmVEpxQm3DE79gPnDS9ELgeGQhL8RzrTY18vR6H3TUy9B4yWSujFmGKN13rc",
  "key19": "3g8VAnvh2BbaqQq1eEw3c64tuGpxJfbKCaEho1FowimbyppdyFHuzZisAoL5ncEUZJuEKjYHFb9Uhd2ZkrAugxsS",
  "key20": "5pZc2DiEi5CF8ouvnbVrpsCBoAwLg8SNunMst6oyHkoBfyEdEgwVkJJzrbR87MMZ9KAcvuK4tyLFQzEdWzCrMA1C",
  "key21": "5DGKjsqD8wa2qByP5TgEviGJEixvTtD3pGvHEjPf2PMkApmmHWvXmLADCWfStr8kcj1jyMDZp1QB82vneiUMEBnR",
  "key22": "4hSUMhyqvew66Xxe9moD47Nk36Pd3op8b4p7WT3LoeawMTiybXAuRt3HVrSuQQr7hprCtzJBH5yS122RZSa6wjki",
  "key23": "5cp4AEmKUYgXiGBts4xEmAAetrzsxjNwUFobMFXKc5KNYQ9R9W42dQNgXDPyXud5fSjd3m1ysPBcxK3XgqR2S5No",
  "key24": "64gq1bEtQeESqCuqfVnm2sj5o2Zc17s9CYpLMDBzBkHbBtZseAyPegE8jFjJjALdp7zE8vVCRCCZforyFM6C3uWB",
  "key25": "5YCn6STEtzeJyu68bbqzd3Haw28PU13XuugoES416Nkmmyvq7QSJucxTdrwZVEKeewcui2dz3dNKfi8hAJUJaAJe",
  "key26": "65VjWaST5a33E1M7HDbfGjF2iM2Kr7nXycukCcf92bbfDkPaEj4DJC3NSGD79zrGQ4natSxw5mb9x76LHvhNjjvv",
  "key27": "2gqSxuidupUU5EQf1tkujfGggTFaZwg5o1QKG2dd5cb1fXY9fvLMcMUn6LsQNtcK4HoRkJSRboh3cCXypeWxsDBF"
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
