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
    "2Ajiq8huPxAa4ydEoirJNUjJPZGJWpNwzS4uhfM2fiiuu2sGTB8MzMRWS5Z2vejmoAnbhAeFGp6wHN5Z5n3mhzyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gVinFfantGgfjid1gNC2vu4RYBpzJzbQR6tZezcP9UMTy6fupzBieHriJH8vbxJxPkCfn5MzGY483mT3YF3j8mQ",
  "key1": "2CBFtZdUvfEHGcrRcgq1vAhyqH84DsHcwHrDcX4yGv3FwQa3ZpuVJsJFsGVZ6jH8GBTAodyGSSYxUziGazf7oqZu",
  "key2": "378BRDir7NoAybq9AFo62j91bMYxZSMMLUHUNvE8Y3oYwPZyGUSdCQ5G6cd1FNi5je2FLgaTnNzsZoazfHe876ed",
  "key3": "5TjbnxSbP4u7mHPsF8K6mvkySo2sE8Q4FBwt6ehqNTBQRonRhqH6nUXWs56qjt9ZVnawBYVMZkU3eYTMEvqgabw4",
  "key4": "5yKhQnT7j16ijiwHpzkWDyYo82iRqemRxqyPo5vkNzp2iWyaGQUQtmu6HASYyYJyE2M9QQi3yhSYC8r7731SnBML",
  "key5": "5KsJBeNXucHouSxDmP4K9JHxivKc1SGW4m82aXf4kaprqv4B7tWQpJbxGBCpEcMhYUhhcCcN7V6ikXDAfpSbGFrq",
  "key6": "5bovC913zT9C7tzvYe7agoTt4QKhqBB48bqQJtrgA8ufHPPLmrBiCNFGdc5shcJsGRciisuWcP9dwBRtR9yCrwic",
  "key7": "2dhVNPmWwxFpTDEC8oU573RopTayQ5YFCYPyYkBiQwak91EcYjo79qJqDG4SGaxHLWgSgeGvr3YBuNtm7TfvZGpF",
  "key8": "3QKkKsYS8ZDkAKMHX8CJPPrXdsdG825xASGxpsjPdamFW3s65mCJZcse6TTvCLhpjVYnoibwQhxpJYh4zw2H4hVM",
  "key9": "4svwTjP8RuoyAYUyWnhAhoXydf3R7ShTzpB9mVucJ7FMgax4dbwTFZKpXy6bFyEr6z5YGXrs98qDZ1KRq7nS5JDK",
  "key10": "3M7afuuQj2Yss9K1MNTjQ5rgSTMbCZpedCrQZkRx94uQV7AabbUuD9C7mhcJoar3zdBT7NNTteg6TC33yDbRHkBa",
  "key11": "469vTq4cEirtPfUWDtcffTjuXVZgwZh8bW57QURLDRpCMtrgFYiULdMMmxfrnjei5AYmc6ueX1FmKEsFR7fraCEB",
  "key12": "9XqfYTzUYxqhvehZZEZk85tetWMHtU1LK3wsLWBW5FnZkFQYAppCvUyPRNtUuhf7f7YsnoTj28sNs6VFSmSefzU",
  "key13": "3K1xrC38BZHa2J7UUNNpCxwFYuY2kBytRqqMZ6HpT59dRJDXy3ZvvcPTLoKqNEjJHJvYN8T1DQWiJ3VM6EkVrDay",
  "key14": "57CCB9hfHPPsD4xhUdYP9C8YQ78JEbkD8tFWwUF6dnd2XY5MVTRbSqW4RhS14KvhCBNWMbFJ92kbUftY66iXG5q4",
  "key15": "5TnAh6AaftDmTNJhWaq7yBEpxh8zf9YcDAU5K4krw5rqUj6U55ittaKQz6MjwaYSAShrZhgSVUD2Zhc8mFKVNGDp",
  "key16": "4a3htKyiQu1WMitb4164hAHmQDWdixeajyG21yHtoNrQzAZ55XXcFTXt5JpskfnAnh1mycH4ywxR96P7vXwAJ8cs",
  "key17": "5VU6BwKpzGf2azaVq6T92rr9vCYrnitddMazBhqtjWNatnh2EkdQJbXAFpgXJwRsSUyq9YcELhNJknv6DiJGDrrK",
  "key18": "337PMgQTqwC6p8yJBvjXjkd8jpn5XEWPV9SoiN3yLhVb1xxEFD9Ww6WZeJj92qY5eV2iQ4GzX2JvLaLpnVcpzaHm",
  "key19": "67UhvUVAj8JcHoN7ZgSm8wJABVXooF2BfeBhFit6HnN4RT7M4KoBjxV286cWsTxS2rUnnmmPbhiXGkXxQgXJ6z6z",
  "key20": "d4eXdighwwyHhFaXsMG8YganX6xNY8eAwyoZVRad97czrP9JCScNbiFwVUoQCRiEppg1bpHyULFsZTRerTSw69X",
  "key21": "4iAsgGMGktdPE11Lvdguwmkuk6EpmTXNmJasvu76uXgeQUXTAxJjcgb6bUwQ3KKWSxNd9d12JZ9nnqkVL2efd6fz",
  "key22": "4tRNXmiUyYYtMMm3cY9T8aPiUWRzkGRVxL4d17LxEfVfhkH97czyi2J7tMAfqX3cAT2Kq87f1S9UQQTwkKhvweAC",
  "key23": "7tH29SbKvRTaTjsLu6zxCCQL7Phg4GepDEwGKMoiasSD1vmWB8eUam4hgpaBFEAqFAdeyehUnxSXvbwzBeyxgvU",
  "key24": "3xzR5U1ZVPdJkr2c9efXNau3z6L9R3TSieBJ2u3YRnQm5oiagdznvC8Gmbum7kG8TyUqnfex1GE71PX5UP8PeUNG",
  "key25": "2iNRzvgNQsW9GFLkTmaP2RqTS8rtmygKaLkwireenMsSmMANBUn3a2Z5s4YyNmZD6Supki7PhJTTVyCp8oW8PfTR",
  "key26": "4gq4RFx92BBbzXeSmW1wKjotccYubGZ6Yqbv7b6oytP2cTUpMe4mNWNCvzY3REsf1AzodVroMbLY8HFXPS6tfWGp",
  "key27": "4WnjzGnmteibkwaQxt1eZkKBND9pBEEsFxrocUKDTEvajBjsVZizsGTpVL2pYUETT3a6CxCyrB3nfuv4uo8pEVWi",
  "key28": "3NYS243rKtnGnjYT3kijG8gdS4cH27FM584AAqL6TokxEcGwbcsJQWFcgLmAfyGuaAi9pj7PVCavm8iW1VhFjeEd",
  "key29": "2inQn3zQNYu3FgZJj17MPg7LiBb6pjFCDKyLpp71Hv1dR7RaMJcRfFBriSWB5F6N5tLAoqvzb5pGxS3pXysiNbnU",
  "key30": "5bWjuodyZ8pzmLJ3RQ2k5oJhdkaUhHyS4qSzTtsQFrsJxz8FM1PuXcdBW8bpAD45dTkwMEbKPKYDkP4KhHJd5DGJ",
  "key31": "62SoNVgTPTTeRTbVFS6a1Zn95V82dRH4EdV33f1DvyabX6HeFg6wyXsRhNSJBU712zTWHGHqH1WiU7BrN6z8qqZN",
  "key32": "3ZTAdYe6KZUi8355R7CqHu7oAAXUWiDWpYZ7etzkYoefcGpT54PHXjX5wzybPZeCTH7m6DK46MJ9qwXp58PvFDbd",
  "key33": "5xRX2QxW81SvZdMnL9cM5hjQ51ifc4w7JkZjwEfbrkXYMaoDZEuGF4SMGD8ATj6t9K8a3ZB7hp9fwpwxAAAAHDHy",
  "key34": "2Ahhng6c4uX1uKMUrjvUPFinecHfEU3stWunKsZRVRxCTgk9PHyGL4PgcYjBH1Atjjg1xeEtP434A6q2BBfh4SE5",
  "key35": "4v9NB1fHQrewbvVy3NWqMeruCHgWPMRkYeVTZkgXWwAcJADLWRG41b1yMthaDr3i5TUP6m51GtmXPxVzSRhks9Gd"
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
