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
    "khXEpr6yWr7tnLpcAHWKnSU1AUkngc3NSnBHyJSVLVvjpq1nDoT5vaRLH5LP9dbjP6o2WX9cynYDrQqCb1N1A2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "348KTCzSjjeUmB5wR6WJF6QGnSjJVQ8hjtZrEwn5JT7oGfdPp9yieugqoytPHuS2qcrB8zSi8QMLYoc9b7aUdgLR",
  "key1": "s3WKvZsacVdFijsKKPdP21hQSmUJy2ppsKqu38BaZ4dcuTV4cwsoTXu1nJbLFFLBXudWWYXpNk3gqqq3997XkBU",
  "key2": "3kxLi6DiwXNkY23QSa4FmKDZfy5sBot5g9CpGQfw4EhqqHM4Gh2MecJYtffUjNvzyzoNLAga88CRuNqCn5No9kGt",
  "key3": "3kcqV5Y3APpfzTzXwK5YphihX7HNdectmjuZXTW51oBQd8dhtQ2Hspm2R4STTCPU9xCRDNvRfotF4ewdy19RAUAm",
  "key4": "4Yh2VKfa7kSjJVEv3w6DqQb5yG941ZhT5FdVnSkejfNGkAMdUjonXWxTjCfDEAKQZxAvsstsjvntVGswVLxwwyqE",
  "key5": "3rco5dReitqkzM3u6XGZgxTasJfoouhzREh84zSqj2u1XhSrCXxwgRE3TvGaBy5zcVSAZhFfQACvQFZ6SQPZwZuA",
  "key6": "5d77Ypjc1u8ngEf486N4P3eJaCJfNTk1aXQer9cyvHh1NUQsMcJMjDSsyxMkhc6GwtV9VFjNX53MbkiirHuRtxo2",
  "key7": "4L5ns9uHmMoDyssdDyN7ZU4z8jmeVrjCroMioc3rcGWyfAB6dypWHkA2cuqJpLGgG6Ff8HUfX1vzN7xDcNavryET",
  "key8": "4s45tZJxcS8eZb5WJZQnyiYzAqkQ7NxyVwasSEnsog5gWM6cm7vcD5ARa67nfDBZJDvAswBGHKVzF9CRBBRouHUJ",
  "key9": "oQRuoQu8MQT4ww6AaCQPeT6Y5rCe9ma2bRHAy1yEGWVQWsfP7F5yxmUDKzuXUuKekoP8qXD1yW5pq7uffGYbFox",
  "key10": "2FVbXkuyvwo9TRwBeMfFJ79aCtpsHfb8gAbjCzGyCGMw9NcN34T2aNsrZcrpLoBkBSDhggDUYuzEaMEdL1kEEgUk",
  "key11": "32WyLv16VWoLPUhMwiMZiPECf6F38rBm4EdZVs86uNkxaPZdqKjA9ugFQDKBgdLseRTXWx3QB5tgM6jrefv9ArUr",
  "key12": "RW9RwkEDeMZBoF4C7k16dZLBQxxaQChR63gGVKFHpRuTQGrDxHgZPcz6riuBrec29Kw7UFfQGeecJSBrwbjVdXr",
  "key13": "2Hfk2xXczUqkAxrpQeAcQjvuKVfgmHkehxfGEbf7E7axkqm6c97fzTMD1grUDFz59dEjPwP64LBms6jEywEwcvHd",
  "key14": "nRxjYFzRHvqPVMwEZJ4AD73DEWgDcYoJNnK8zVrgDZ8CrLmfk6MfCkwvBcYB63AZmXwmV8G4yRLka8qG3WNBbpb",
  "key15": "5iaxxfT31QdqVXW8XRDijkw7u8g8sBxph8ZHR7oDj7aDzNiS1DKgYvi4hCbKoTnRyeBskhVCMRDKB3Q6Q72EZAtX",
  "key16": "3B5n9NXLbXU6iB7XNfETUeL6DvzErwzbivc7ywwvUmSdLHM4xRUvpUppF3g2982ym4fWRy3pYoNSLzLLc1YH4PZk",
  "key17": "JTV7fp1Xemx9pj8jq79m5g4VQY41JQMGTmnACM1ww4xZab7wvtBSpXKs52tXED24Yq1gVkhTnA48Vv1wvWZE6Mn",
  "key18": "2sy3d3emH4pTh7mrXKezHXQrPdEXPYxSUY3rp9esAjFNhTjQj29WTYTTa7Se4fdrMWkNSoTSXQksbTkUtbs1o3LB",
  "key19": "275aHJ887znivc4hSt1uUw2ygWqv3xxWyTn28hmRRBSpE1yynmerh6Ge8cPz7HgDv5Fv2fM5i6PxRvtTYiH8qcuS",
  "key20": "3DctvnLQBkrPn6pyip9KScZDeTQFwzASnLjKnkfRTQNcWKXTxEw6WG4TzHZDCD9iSYE2HoJdqdCbWcDGjPXtotAV",
  "key21": "2vTht1ZsmYgc1BhkRRYa5Zpb3izPvgXrXQV8eLmat6wd88mXM6DpTM7umSFmoLAkzuyw1ZDxJ3kSfVS5iCXGCXMw",
  "key22": "5AqeemP3dov7m7soGNdhBc4dZi4tpf9AK5FYamjbo4MHdLp7YggayuLXKJh1esUkTg8xDdt9pJWCS1aupCFohwVr",
  "key23": "4AC4stUxGkvmMaoRcn29vNCv3h5Bm85Qwec89m34bn8xaTGEqyiz93YnSq2PdUdniKdXDaUNvZ6NZ8cGhjGfzgRf",
  "key24": "45yaHWKhSDWEm4bt4jbxQmRC9jV5siokgprZsVb9vBsL6HcyjXiAHkctWJVgHN5EBo5hq6eaYWNAqsZ1EQTsTbHm",
  "key25": "2cPULSjYsatX8GkDB12vhm9rjFzqQUsYN1ZrDGQhWGHSFk9MASbe1j96aGX8RUTdRj9TzEchoqbSegnfWijZAqkL",
  "key26": "UWUP2gPdTcju6LLC8JyLvrYH4nWLAFPBh9CYRxVPxrN7rrwouhpdUuMWAZwzuZ5C4JACpFgy783RNStuYzTKAgE",
  "key27": "5UdtgRvVriupRYS62xYTcMezVSWuS8axXmZQT5MrzB5UsSTzV3GENFJPzK66XJznM1Am5Vu9dzRvcSUdoXMzKkG7",
  "key28": "2CBsEKrCku53k9yFcoUMNhYmA5kYRTbVjrb4D8nbfYCRveqFkp982ZfZy7S31QkF2s4SYFrMx6PDuZs4nCtC4Xj6",
  "key29": "FpdgiFC9hkKGVYQHSqqLzX6rgaNfKf6ruNAgAsKX3odGAjV4yaSpBU34g4fCJr9urQRJYh3hBKSzuLEQFkFRHo5",
  "key30": "3KDReMgoFwuEPGfFN8uW72SzjYocadybDaq9GXprqHL9xgQL5g6anDtpqDkAzo5Zzth7qT3gonsMcAp97YQsEEcc",
  "key31": "5WvKvf5TMupS7s62JK9NkP7WLrKNExy4NZV8rUTphXZCh7kGia5f3oqKda89NEECUrdaXjNnfGbidEWKZBVEvHZS",
  "key32": "3cufdP8t4VMZj4CjDXLb6WK9bQZ8u1Cy46URmYvBUygJtYb1YqtmApJo1YafYkEn7V7xrdMLLxzVan48jevpr1eW"
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
