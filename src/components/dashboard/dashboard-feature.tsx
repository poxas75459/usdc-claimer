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
    "3APtgtyGGJWpUU9DSJBGxL3HuLhES1yWxMtv8Yh7hcGN7geoePcoTyu6uSngdwEHAz8rKTt8kYSMKEyQ7XSmjpAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQh3gfw7g2D1v7BQEyrBSQvE4Kt6jTJSX4ukpSBnmu4zEbUmBYnKesMZcdQVJs8VEGmC4c5h6CwXuBgRPcqb22n",
  "key1": "UAFpcwCdHeABViZcBiFHypAUoGXTn7ce519Dm7NWS4LiMb6R65xseTnKVQvyPQbeehvNPXHDFW7DuW67yCnmXTK",
  "key2": "5pbUr9zZMkR59xmkv2mEUbU5FyLU679deNx3EEGavqarTzsV4pFNTuR71CHgTDvpSWVwo3mKK8asF4SiXuby6Z2s",
  "key3": "9ZzPZK9sXUTwn14NUhzsZ4vTNb2arxed67eJEVAgFAWAS47JS6Lra31gffz4bgWH2kmJadQuzSwQHwvGQ3Y5Mxh",
  "key4": "2EpXMUTsPbX4CaUuTMg5RKSaCgrVFXV9KwwfrGXXpxsMk9fbUTUa8ay4Pvy4ezNfSru1oGkZETR7hfjZiKCr3xS9",
  "key5": "5Bh5dYDjgy8fBzNRNj5LYQ8jKBqWFAtKFNH9FJei6YCHrphQWWaPfgJJAPTypwMJsB5TWmwJrDxwTxCLYZQT5JcM",
  "key6": "QPA94SEmbkAHYTZPNaPXJYBGm9j4VDxU5gc877UZGzsP6b71hU5xVPKe1NmfHK934xSvcvYcMkz4SBwjwSK5yr8",
  "key7": "BoFodbof8tjmYQ8sNheXn7jWWXxuvKiXk4uBvbm9sZriSeS8BtWhVTWGAo14HB1EPEQRmcfnVjjpaPpJkekZHvN",
  "key8": "2VzD1kNLXpKBHpLQ82ep8a9aXgo5HSsxRAkvrppEhu2yai4RzkDkAqJdrQUtHbfnBwLM86Bdm1qQ6L5XfcczezV2",
  "key9": "ugtwgMKupaW8nBZVjy937KmnpAgvHKfYFkQ5hRvBrJRzsfiVftgXQZ8cETWW8tej9PQRTjzYBTiNGiJ4uuLNzfz",
  "key10": "6GGT5Yu18czntdg5zVK1bnCMr54ryxRYWcQdBz786WPS1sXjDpBUhH49B6b8DabrDVpXPwikQrisRHd2Sb7nBHb",
  "key11": "2qz6Xzm5wSZXbrZgSGTzPv7k3fuzs3X3offszhZGDyTLxj6PcbSEFNUDP7jKx7AadXPMeCpD7XpqTF4QCjNhVxZC",
  "key12": "5uwCT693vYSwgSEXR6oLi16WkAmDDGFiz4C6DKRjo1guHY214noc3zpUSpvnkbQgYhHK3UQr2WDQkCisDAGJWwzB",
  "key13": "4BpQNENnMb9CsL1TaKq4oa6X8P3m78T6Kdeq8XobngWXBKarcdDh3Vx1TCHxiupBMaYK5NUobPddwoGtZikR5zcy",
  "key14": "tGgnF9dRKMQcTTrNfXv1U5ESNiDraX2cHZjgMn7boGT25n5VjfM794cy8PQExETwn5dHnV3PViX7ZM8MmWvoZJ7",
  "key15": "2ctaKJFauqgF8B6WLRtDMSMyYd2b1Ky1SjHwDWzahJfqvZjaMnQ5maPX7tbfFzkhQQoGfvjw2nMt2NF2QUNh9sER",
  "key16": "5y4WjsAdrFZALyVCPMv6zQKnmwXJpj3q5Qw4eeh26tBsguuaPGncyAVF68GdF4ETagVqtYYKgYihZBLnXpV2Jqq9",
  "key17": "3eSsARHEHZLouGhSFjsczDCywrD6bmFAkrYLK9fpXxBQngG9j3Rk8p7gxHvGECwKd9ZZ93idbVQfKiGjFFvYMimk",
  "key18": "4t16jq4rMCrSpm45JR9iuBTenvgJoCEYas6jrUMzPo3hxNrfoR43oa9ydsPDr8nGRYhWcCwwAavsa44S6np9uYDd",
  "key19": "62DjN6MYbjsjC986eHNpgEPFso66TdTiHGLgoxt8C42iee5C95tFKrUwD2m3YShC9qa85enNunaAmSay26Z8XGru",
  "key20": "2fZitRkZJ46Va7gYXSiUMpBbfJ5VZ39FmMws4BUteGZ8XKy4DhY6DFKwWzpejypfQPrXkdy8WcH6brAKSGKja44i",
  "key21": "Vyd7AeZ1LcxuwXoB12QvanxbW9EDYYbhWhB865XXpxWE2gziVDcgSmBSbKvjZ7bRa84j9nv42UWg4bjE5QSh8Gp",
  "key22": "2LFJFguzRHS3qWswzz3fXjDiXP2BM5Yy2Tfds5WBj8QWPHPwLYUEzMTqQcaM6CFirMyufKDcxMCquE5gm7UaxnEB",
  "key23": "2oQV3Rfzfmq3jsSkm9YK21sg6detqXiCmGFRds4WGhUMyevfiRB1Ur8GB7PYswJjH94iZGapZLwKeDJbPUD61iVJ",
  "key24": "SgvYLxq4CgHxzDnFynx4FBg94VwJrgyGhTSixBFFWGvHPdrUhW79Yn3i46irroY1gv3hMXeQa7EDH1J1dLH92NQ",
  "key25": "3LNSwnhmeFQ2VvVQqchEp7WFBHN9vksnUVVTgm3ztL29CX6kKRjDq3rNF5qc1zJQTaXqCrKitT6Et75e22FiseUc",
  "key26": "3zjrfokqfon6XYXyhtK5NreqY57a7eNXu9XzhxksG8wW5tmtBTideNZXTneJ6SVbRCe9WwtiEAjrzEo1svtXicDK",
  "key27": "67NpgY5DoaTXRn7nbtCja2nhpkicuJPaNAQscamWxwRPAMYNwr7HaT8kBY2cJocexpBwgmRtSJqirW3ThkxUu2yP",
  "key28": "5YWjHTJTg3ujH8NDsfXYKsbYHKwP9QqFXgFcACPaF9FqvFjqZ1Z148DPgBkqAJS7F5XhM1CxHEY5J5W5f2zTgugX",
  "key29": "5ZTGMHQyyoGFTNMktU43RcHfmdis9baWpijhPTcfTy7TwM5kf9gMvq4mF3sUMoEryihDkqUgh3VGQwD2CFEd9Yku"
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
