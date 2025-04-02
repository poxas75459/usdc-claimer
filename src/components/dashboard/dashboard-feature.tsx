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
    "3e4mCLNr2sT1pHoN4QLJGQqnYX4xEKQsAQZgtZWNLkdqusKqBkvyC28FLgqJKgLJZQTSbGgeae9jcJioYNH94Nc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDXasYFdHoH9Nzf2Lt4q9NXgdE8NjvLA26SUV8t8DP8uG1rKuwTfLKsn3ArvLrTFiqcDbgszoB7eBsZo3jkAmVW",
  "key1": "2Q8esJh3xcXBCac3X3K2BSSmfjKe7mG9LV752HUKwFNkMzHzmRPBYcM1Kvy8ndFDbLfM5syeohBZNrL6BfKwLxtS",
  "key2": "36Bth6St4sJEWTPd3APcSGdhF4UzL3hTfrMFw3QMWKL2HpaQB5k2dhBrtnf9asVVBDta4YvL6Lcr92PdLZ5xg421",
  "key3": "3yr4XowaUY4rA4tr22kydWEqWLGxU54quQWseZhS8Ftzswpwo1Zz8Fh9gy9fhmNG3G3vFMwJCfCbdCensk1cVX8s",
  "key4": "4EeXKj9oTJmGxR4ssQwTPivwH3ze3pmitPnMnEMSsDp7pvqMnfrysE4SmxVVzdrARZAPUze4TXSdwxYfDpFiZSek",
  "key5": "5trhVHcthu5b7nxucEnr7MoZgWrwrPHzHfUohbbLDXa3zUSTE6jFhXgL4tiQdQU7X8cEXd21EEiAzgVXi8U7st8S",
  "key6": "3dtWB2vmpfzBoYWs4gc3xoJ7bvaKvBCsR4m4wG637AfiJ9YRNEBycFG9L3XxCv2GWb4HLh1e8bWqH6wLQBe5gUWn",
  "key7": "59QjUjfGbyM4gZxK13i9oFKg2kxGYDpcZbfXLCRHaHCnrKV4wEhhH6V1LzXpP7q5KPaMYcF4bcPsLEcPSB8BdzBm",
  "key8": "53RDnL6FKbp7ah9BnPDYjvSw3GQBjL2NGs24JRVWhFerjWQv8Fs6v3B7E9gxoPXak1z2jyKhy2SsNAbhHfUzkWfq",
  "key9": "3rXxksy2yqyV6ngYcCUFxQrkyoAgDnmY1oE2D5NDW9p8RK9dW6xfTuPPsfgndDEWM9xJpK1CUHPstxPkaKKDuHF7",
  "key10": "5LQL3FHQ2wgLsZRbAgBNjWtTdMkE1JvfWqZyjVoF2XqeUsehK85MQnsHu3TFotMd2oK6QJ8xjcH5NzQKEtQxnCaR",
  "key11": "3rGtrm13opTU2LroVgA2gPcP4kgEXiCyrswN6rpo3MpXCNpYrAc3ydXBL8cm1gYttNtPGXchrthhTBcehwm7ZRkK",
  "key12": "zicmgzbKC9p8oQZeQEzkMHfEQXpKjkwoaoy6YySQAEdoB1koG6UpqrEumF5BzPafYSGRyNQFBi8GfE1xvYcHeg5",
  "key13": "4w4DhZU6stouebwahPvfSXsT68MwL9HrumNed5Uqdz6veDJmnT9xtZr7PrbRWKH2Y3V1VfrsNBGAhZLwGRs5hj1V",
  "key14": "4RERbSSfZgivbLczBov7N5LMQWBdKTAzoBbXdq22LgpLUZR266V5iYduvxZ5rJ88MRrqm8buikBezZu53DS1X3MS",
  "key15": "Qp5FskPcS1AzboRDHy9fCUqgomWNX2Bv9vSqzpKuu9U1WyQAM9sWDdaaYtNU6oe9E2wLweKJBVzQFzMgKaLk59K",
  "key16": "5fHKkuK4N11n9XXyFvwFUsWMMaMQCWquXMbey34947XDEj1cXHxdugFBT1Vr4pjzuXhYRKvKCSW3e6faErWSb9NE",
  "key17": "3deBdyXn3EzZEd3KALVX3cBtkcRjUbNGLssdseX4Us4m9oa2KtwpVJrKTwCyNtzcMsBZqL3BXAK4SP2en7UdgB8L",
  "key18": "3tnZHPBiJuHp7mbfAWbo1C148aJJCWHS5edcZJowSng6uxyKwro4JkdU8bQJsVBQqsksYzCyytnTFA4BWadfK3Qe",
  "key19": "2TR7N2fbRqbURttR1qmJJptvm9yV2jqiqvL2RNHhqWDn8YGv6xJunpxEJznzy4ZMbiRZXPQ879zmq7DW5xjXvNGJ",
  "key20": "5SSzNZEREDgVpysxkfUBGr9oFKDjz7xmmVTYBkkURcLccf4oefNH9mg8PsEYhiHWP4WzuHmgU6UhfeMEX8DEoiLu",
  "key21": "RnEXeB852bNDXTfeLMa7tcfZhFRcZNzYX84WzvvjwcZG6upwV7CXFcExDjiFXSeXeNEhMK3eajUPCn3PDXgUuxc",
  "key22": "2555qCXBUUB5Dh3VGxWAr7i8wqtHq53cFcqm79oiHDQLvDG9HLE1HgDqLSxDA8yrs9NiEBpuKEUG7qQf2Aj5r3EL",
  "key23": "5gBBpTHSkV6z9sB5HAANwNwbFWrVsyw7xp9M46zqH2QWquBbBn48vJukeamh46uV6WYrjumune2uMsfPxrbC6iXF",
  "key24": "5aoCohVLjY9qrHTmgQ266GZfNdobP8jXeHZUqMN2yPZjhWAHFJ8dCGyoY2g8LyMr2BhgKJHLWkhgdqR6CjuTT1GN",
  "key25": "52bWQkKuFKuqhmFSEbhBb3pcEgkqnrxEKZEsAKq8PMQzgjGif4Sc4JVHffbHCZfzKEiRoh5kUyAjNVNy9SnMbMdc",
  "key26": "3Vrbc9LuFCYQrqd6WBshhQ7s4M2xvqUPnRwpH4fyj9LoN7pXoQZeW6iZBhh19qcimJnGnWWDC6v1EVgFjXxn3ewV",
  "key27": "3LawVCZASeoAiC8UbhK9LxHaUyJkv7J7yJWaToiq43Hr7DDtvNW7XK1BLR4vULgzNfWSjjUvXFQzPdu19bXEj6DL",
  "key28": "4JJz2cRYe9tmcyH6XKkYCwwts1y4HK7guMU2h5AA3eHu4rfST6i5M5LJZhwTXbBJyQFaAMe6gzLiwAUKfXbgwXjs",
  "key29": "49a6tcWVskzx9Qg4nBZMwKZfnBvdmmEDi4AjhHrmt5KAdeeUJng9yCD8nZK7eVojLT23cqZR2rXZ3qwYoePbAph3",
  "key30": "5CiAihSAbRA7yhx3zEFMYQkZre4x6duw6juA3q9ZN19THKFScHVF4SF6k33XScoWQMFqL13UPJFh7edggQAnv3a2",
  "key31": "4yygyvjtVUGd5sTYDa2UGxNispHer4QRTiTETjSRDDzosgNam8ZTZaD9GsDT7Lt1itYwDUycqHZqW9G6Ssbszkc3",
  "key32": "3ueqDSJwCrz88bau7rbUVsVCpBBGDmE3SSro7zNRa2F3T5UxpzYoyUShbCkCthhS2kC2VJ7KEULpYAKoTSRR9rhp",
  "key33": "3P37EQCvMvHPNhutH9WmSYjb6mJGSaGR1h65o6rT9zP8nfZ3RWqjqgMv6LwKa5YDgemTvvBeQXKo2WTuK2gVGU1k",
  "key34": "3JxuGaXkXN8utLwuc3ch9DFmnuUWnH99sZKYmXoXbRuayji2Jub3th3BDrajdMNzAbEDhVwfbecRtgBL1xZH5zc7"
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
