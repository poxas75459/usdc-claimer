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
    "4UNv89TVk1Q8zp3DrFAmaAkK1DpE911ENvr1oUAKK6YMoJQc5ToyjuiZ4bmUF4D8DSeBAcCaxoCMWzGiHi17o7N6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nY2jJWuaEvZUA7di4WbGssjYThRTHs3B6SqQv3dF7dGuYLby2zeXgtbekUAWuRNn39KycoHRNKFiJFzhn5zoCZ",
  "key1": "3nEL8hAeW2PV2TrPBN1JHry9SksLh26CsNKSKXQLfLAug4qfgyeGkbzQ57zz754JXmLo8r7ke5M4gRURsPvCme6w",
  "key2": "5BHPFZiskt8n8ZGbTCSuVdWMUcxiYnUm2XprezW8epFppYSS7cPx3xaH6Ei4xDCf8uuZ8qNx3qPpYvUuKAwJCBKJ",
  "key3": "526yFG3LoUPeHJJRXmxXUxZm4bgLAcnKjz3FrueEro8RuEzAsJQi3aXSydxYXDzQkwHenrQgiisMXY4rYeGdxD7T",
  "key4": "X1X66AHMeTZskZfqhz8dURvA3QapBSLkkYgr5YkE5GWHhMqo4d4358HgmiNYcgbWyHBVEitw96hvkqt5xpcaqSt",
  "key5": "R94RBa6nXtZvfxu93R6v8P7K64E9LV7CQyqD81WSG9qSxoBq9vHKjvVjHDrwH9hPKaisdnQbUp2RknWu1nQuh3H",
  "key6": "2kRakMoLf6ZezLerqa1erpmHB7DK2wjyrCL6aoYf619Frp7QNf1v1hddc1zHipkgZ2gGL8oPFK9yukK15NmBuZ9x",
  "key7": "t81MgvFrTHy9X4KewMtLu7zvDXKtYCS9eF5eS1tuZXrvUYKAuw538EyruF1gvdefSo5iRZ6uqK1CoJnsVyj9Q2Q",
  "key8": "5jCy1CnkAyAnLFF2BGV8oDjDCPfo5Y2PYKohg4aaZL7pp2gPQVC3ToxX9zNNuE761Ce6etoeZCL99M5foNB4wzUc",
  "key9": "o8LBobVZAVq4SkW1LiuGYCWpe4ouZMhgqJT14zjzUh9uHvmrgphu8oCco573bf7DEiFtmQSGEiQ9m2JCu1AsJuD",
  "key10": "4488xwjCeZit8An1oNgDKDGWeaRcA7oqhVF7JYhPpJi2F23RdtYvRCz6zg6jQn8vA8gJYpBv9PNLdRCFYkLikhax",
  "key11": "5NrTysjW85eTW9U5FhxPzjd3GAiCXGpfuEzgp1hhsZcK4R5MpmrYVBQ4afdStMLq6rp8nDrYYjJfLXTMmLnHjZK7",
  "key12": "4ZLqDm22oa4cEf5h3Msz1HNTbQbT9dXmjha3YnWNGCdZrVmZQxv4x3kGGapMtSrsk1j7WFjHLHUQLXTBHNVa86fv",
  "key13": "2BUv3rsZPT6G2HCYYrjeRnEVn1xvHuHu3KadHK1aGA11F9vQYAPqsCLSikSWgbwL8yKh4GpAhfGALM2RGqDGkmN8",
  "key14": "4t8U84ecJyzgxovvJ6P7MLGJyAXEo2GYPfg2kfbqzvXePQNTWoDjPsXs6SLaz1veQUf7FsKJVLfFUttjYR2zRTTv",
  "key15": "sLW27CyVRNW4huqBFvZeXGDvK5qiy5j5P6LZb1QED75BHfbRREET1bpPTi5ipKYX18P5JDHx71SaQQSca98UAUT",
  "key16": "Wc7ryp57EgQCvUiZjVWaFCc79jvNGU3T7LiD3QAn5f2vjPUNUrohnpN9VqqWpwGMpBfD3ciP9zgyKs8FT1zc76z",
  "key17": "crFs7YGyD3b8LznVAet8bz2Rj4F8xBjURDY8aNkjDyovmQdz9Ksg695unuz9u4qdAx2Z8T7DmuwUmGWTTTXSdzq",
  "key18": "2ztkERhpJtJvFVPfsucs8cb7uNVL5eqrjab2gSGM3TnRgjixsAeAXB1tJ2ZLNwfJghCu4GBAmVDF5jLgdZrVjaZU",
  "key19": "2Jz5FwStVhizuCJDkVht5esNxifS7sAUNgYURbQ2V1puHTcEZfDqzGWzCTfcjixA9mrJdjWmLquYpW3bnDVC6TdR",
  "key20": "rhDdPTvatFeDvifEQwRpcBUNB2A4U74Gf9FyqC8YEMgaAD2YvKCjefWToMTW1hjbWtjzNaAt7s8vZtGEtgw3wob",
  "key21": "3kLjMAewy2cZ52adiKnc4VDsxNhxTRqHucVH1X2qYLu4F6CLGYue6Aas1tJ3NHv2pKenWVRqqgHoEev6bcbbCf11",
  "key22": "3XBUVhRSEyis6UuoGvMmunygtpiE4B4C7TZhQjoz9nmBx1DD64dsPprYaE8NEQpEY4djDs4bfUTGVygcCfKwvdhE",
  "key23": "4rqtBKyUa9UNWbkLxw19yipXVZjYeDeTNVcpoPU4Ws4rY8qcebCHibzoEoAbYF917t66x7QNzAXJ4BSNbfHQFkae",
  "key24": "4G3aAcawCY6dpBoSYfa5bCSndLCCFsvrYpMBYCv6CGLeAMDzgMxYmeiK83ZL6sw56ghBDGsH62pzCZVxRYk7Z9mn",
  "key25": "4YDBsR6oomW8iypWGfJKWBRQoPxFd96VYxEqXN4akjvhSDxKz2EodXoHsQhATfwcnaYMPWa5TUAwBQf1Dy877ca9",
  "key26": "bXoC7stzACF3W3VxyNXYbDGD9Bd1dvJRWm7TQaXA5FJS9of7FMF6vMeAVwenmkC3hbx8Ab5uLM9bu7Zg8ZGWVsa",
  "key27": "5sTam63zrhR7earaXMPMfuWf7QHnyWKyts1sZPnMXehy5us23o5vth7nuPoj92o9xVA4iCzAtY3QHcgL6C7bQvTm",
  "key28": "5izkzXKbqz8PSvyTEoWCKvAeCuizceMbC1dFv9U3nh2F2rpx2sXuY3YMvM4o7BV3wYMYktGYacaQMm93fF6QZkqp",
  "key29": "5Vv3DhfsqF8BqLdkxH36h2ika9nEDf4HTAG8Xx7jgryNsy9p69mojE4Jz3zEpZ6GooF6C4Jr8f7xEoq4rYFD3mMi",
  "key30": "3XEggUvFwa436FMGQNDYxPTWBEfP74T4Vogd2ZLoTyVxpG2YnC9L2M6Th5gjHJLCdQU22jcHb9AetRRiz9kEcjZ9",
  "key31": "4b69xACtEUKJ5G4MMnasD8rS4LGkykogEZmuEH587ayUKH4iLCKQWHzypf5kabZAYHUZKkUmYie92NkqzwaWCibX",
  "key32": "4hhL51StfxsCM8xrccC9cw7skmmxVfJKU5KzKY3qK9gGBB7P8eVUupHuYw1U3NgV7hhx7hPgEKKBsgzsuzivi45K"
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
