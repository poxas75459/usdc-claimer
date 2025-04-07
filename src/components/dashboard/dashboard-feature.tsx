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
    "GzJoKTHvKQsuRRXUpqs5ULKmmJtwehhZexKN1SMGA13QPmFAJYCXhHPPW3ba2ESQ7v6Z2JA4QMobax57nmx4UXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rg315QbNM64aEwnHTKUT6n5BPNVB9ZsoASCtS1gbdxEF8gU214Sh3fA3deiGZpahb86qPwYaHQkx6wXinLvBhVq",
  "key1": "2dHGfwosEMe6sMp74but4XYqfBKePgmEobfFw9UkgeFQzEHhfJPgKMT45HmtRHPZhpoSBeTWSUN8KMen58BuiEmP",
  "key2": "37KfHEAv5Dg5DWpy4tn22637zLK7wZ98PoFPiGSgzjYU86CqRVCrcaCM2oME5G7pUUttfm37Ki63ms7qJVT4ufrE",
  "key3": "2vZinKEHRaFKmHgz4N1x5UhE2ujQDmP5phaNTonYixDDHQGfPTWuVnaYLhD8jmLrczW26SkzuQTWFVkSAiuyVZAJ",
  "key4": "3GU8aAinmGj5tqUy4TNZ2xdzRABxPTTyuNang7qtcSmJb8uqNPGVbgpsxj4Ue8YQMJgn3K5aoeVGBNTYvtMXYtjc",
  "key5": "jWfySC6q5Qh3vVGtfRiutxAY1vk7GfmZomXUddjnRSq3SbqttXPsBT9e4Yef2JpZ8ye9zYCcxbAwvvDKVaHuPow",
  "key6": "3UXpttgGhzujCQkm12EgS8BeZUG4bGnYnpBhxcRaw74Zv9r3SEASoP8sYYuV6EjSFW6iPTDuyFUSESgmSxXb8oPb",
  "key7": "4ncQqnqEzsHFXad8qdHHYa266fxBA7XBnWzmJXwQkv7v4hxW6rcEY9dgovTk8zuD9iNESkVBVQY4AZ4E9TUmp8KG",
  "key8": "5WE8dRioe3B9CCTSfxShCg5A7pLEk6oCfG9GUq1Q2cUMPrBQbtM1Jgs6joFceRM8WQjqqA9WUGdufBpM65s1DRUV",
  "key9": "4vU9Xz68UEQTXTDRpkbqgWcU5wGqhEfU14uioGSdAAHDn3xGzVehjt7kLjD7UpG6sZKNqeHB7GNzPKMMFdd74LxH",
  "key10": "SyRnQYGoo648wXoEg7upYXXrD7wYTt8VZXqBkHmQfCgbbGoYo3mz4G9cjecKmjkbAWXxavqyRaHP7Y4yKAkVcs7",
  "key11": "5tusWjXuw8ggVveLk7GseZQ3qYfQbuCFfUhHykRwPvCd6mJ6zWNsKjPRaGgvajUNX5mjQ9RKU4jMA7ZMezNw7qui",
  "key12": "3RWStBaAy5b84hUAG6C8mcqRVBmuwNXsngawfLHxN4Lgr5QPz8mBTdZLbPwCSBHt7dAYTxhiZTLUaCt1FByeYQwb",
  "key13": "kCYtGAX3N4pqXsBMKTrVDuZJJZKnK5g9XdsLoi5fCeQ5y6KwXXFmMBcpaKWc4KoNgwKSyQgBFpKaHpmJ775TepE",
  "key14": "5uVEmU4bqjWFkS7rMEDmSkQvnhyVfhLsQd3TF7xUFHmDk2ZbMFNP6SFZRQenBwDAEbMqsH3D591SHphfSrw9tAhz",
  "key15": "4KuHRTaGQvTRsftjzUB4WH9QGS5eTXaNCWmnipEa6rixfmnTDYxu3CuHXENCjz613htse3r2DTppgPz6pBC1x2Ns",
  "key16": "zNh6qzcuJ7vadMPLAfKdhGzX1PAQWe9NALUu5ksvpEuqBqXxLQ477B1e8apH7TSW1fvsMrfPhMoQzL4wPRKRh7g",
  "key17": "2ozpHpBiULJPGHD1ahSsCH83dUeuk13vA35G4cTULtsV6RhpNUAw1CXLQEA7siVQH1PDkn83pSLVdAHYCXe2ccnM",
  "key18": "5GuHhGx3P15dLDE2wNEdV7ZW6SNZzf159AtzqSHDG1FzhTJ6otbNcD5JG2QwwhAZ5Hi8G88zTBBH1eN5hcy8JcwL",
  "key19": "mwL5sB3Kz7grizxrMa4uHdw7fV3qT1FiW3HgPkeXcCkYeiQ46sHcH8ANz39rkgS6nc2UaQjwCTw8rPcnjMLXpLA",
  "key20": "28kChyEQbDMZhEqU8BTNURCu9HfCdLZk6jUoCuzpZ16udqQj4sQwg6RFRT6YnPKs8pLSnsUcc3quRZiN65g3unM3",
  "key21": "3wWPMEwBXXY9i81U8uNN86n4cDfkwVA4ebWMPyHkzs6xV6MWSPfa3GinXJ7QJeam2iEdTzHJwiheYw6agZZY6HkQ",
  "key22": "5xhpyrp3PYKuPQGuKJLpbUuVhXKkNwzZH38rPdvLaZWn1RTBnTt4zsPr82Lh6o9piteJMH8YpomXi2DBbHtSGn8q",
  "key23": "3EdxWdiqLUfrkxSY9q6pj29hUNhYr6cmAF818dwLVjCQvbSo2j8HvhHqm2vkxzM2Ywnrvm42ZNhrbNgLueto3Eoe",
  "key24": "5wLTnj518sE4W1k4QsdxMz87APkb2ryk8QXiJ5KKPq1tznbxZVVmUHLKD2B5yrkWzodYmvPVEPfP7DrG3z8W1srp"
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
