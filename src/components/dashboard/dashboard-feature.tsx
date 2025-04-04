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
    "RFuaaVehsoiYSb2iVkwbwtvCQzQNzqzqE2sZTeDptvJm4xWA7FAMqDz4qxKqydZd344SckDQ39M1k74Zop8bxWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M9Cz61xG8zUjAE4saWJmUw22YwWsz9UYBE2VCVqNuU27uR29dpYMbBTi7MSk2fFPbTmwdcvQcy51ZAikwMA5WCV",
  "key1": "54FJpfVtuQQ4nF6ZMmrPjG5G4f85Kp7gGyYssxmE2ZCis7e7saNK5ksXUwphMV8SjUcivaLGkDsUJxhbM2VVbBS",
  "key2": "3C1ipAqWNzjWfHL92ifxSyzrjkpdY6kp18z7HwrcjgJhrbRrgbXQRf83QRCqqpPR2R13Spd8WWhPuBpz8gnXbYsS",
  "key3": "3vC7RU4saUPmAU9R4Np1dgPuqKPtCimQfEZ47kUZVe8gg69mcqgYNsTFJvXgtvHnn7ZocGFgpmYsNEz5BN9eVb1B",
  "key4": "4gznjrJPVpZhj1o9AHWm6h4Zv3RwafdSEoqnvXj6xRyWFUSKWXFTCEET4Mh2gR6VuS69hR1gQSyAHgNaJPCSyccZ",
  "key5": "3Q9awGZEHfN4196ZxVcGfLkUvrpkk2PVwuWFV5TNWLaQggvv39kAKA9dbhXB8bWMM8niUpdqHCeGkCaVaDLXJgEH",
  "key6": "KsyHrhZsMBMZma7hGvYptZzdX83MfcQ5K9T6rLnjCBkq5fGsG2aDx9UTN1wqYbhiBpXvWBBBwHHzyc8eKWfB5Nt",
  "key7": "5mYCswNF9W4nJxjHGNE1gPu6U5WkKayW91zWCjd7n6UCQHXyGtJHQeeiHU188hZZeNiV6eXJYQvFzb6rVneYP6VX",
  "key8": "4gwDRfUWP2astMTk4BET14o5jLEsSVZBH7cGkmM1oXQuxya6GkSivXhbgiwCPXsBXk99sZMtH7nK6cN9WYB3tH63",
  "key9": "4hqPksoxWgMVzQz84h1RUMaqJqNrSjcTZuwwGyLfuSwTbaAyV8EkxiyLfnFE8nqqaaKhBKB4uia4PDgExZ24VvfG",
  "key10": "rJSFKhRVZm3iYCxN6sepsBuAuw9QPCACyRYuLZhiK6HmTg2sa5zAoSE14piWha1sKbCy8Dc1q3zh8tgWMqGUjHU",
  "key11": "uTUCU2QxuHe3QZrjxYBTtHK4kzLd4oBrQjEC2sYQadecRUe3yS54AovCtunv1sFCrfwLqdCWFqTHjnsW7hnWp6s",
  "key12": "4AEMFerj44pUzhWeXxRZQtMp2gFddeZdrJQmFkrwGu43i5c4kPerhfnQgqEJs6MMG3jkUxAtZA3Ur368jx2uxJSE",
  "key13": "2NA19zYyuKLuuWVVLWhcyLaDkX6sP47FxM5zYTnR5y65YfCugCxmEWKmxXf65NDiPoTxwt6kfy5EqJdceGj3JbJo",
  "key14": "42wQj1z6pgMFTkgXFUuqXFjU7swX9onhWSDYo3HTZTFgk7kwNgS1zKoRfV2bsKB8n74eH2pQjgqXYd5FTnBWZA55",
  "key15": "3eVXKqXqTAQqwR5goaRFxPrDqUMpHwTTmSFY5adJhgTUVrs2ZwfZXt2JV8UNWuNDjFvJZB8nGUEGk2gTYVJzgZdw",
  "key16": "evABKJPa61otrhbw5LRTpjoMhsRFnrGDjccdXAPLq4qubXs3y8NYeUaTAfg45wEoae7JEDoD2QJrJrvZQNSQtqP",
  "key17": "hnmZuUJRGYE4jatyFPraPBBbRKx5EgKWbQWsNsaT6i7PxiUxjHJMpkdZfJmGV7XupjEzRpTzy2uWzQTFPhZkicB",
  "key18": "5qD3k2sc8rW9tUU62oetuHVwPaMf1hECnu7H2pE3CkA4Su7Wf1TvLh29te7mbvCQ2E73t4mcGEcMbowJwxrM7grs",
  "key19": "56ZihV2qT5CpLUquS4dHvqYPSaWWdBZxizohQqB1aiGpPwozzSonsUB1eAK7GjKAArvQNAnBg5CpMrNebZ2rHacW",
  "key20": "EJLHhHeBkv18uZBgNiByucWenmrhoW4UtKPPox13B89Cg2bqBWA8e2qWoYmcQ2KfHxqYm5KB3o8D38mzAhDoaE5",
  "key21": "3m2SzXRd1zy2Fz67iBvpQ31phWzzHEymqhDeoHGaoZB8XjNxam5X9DAeitvtdVLiqKebh1WvJ2tLA9rYPz8hr6EM",
  "key22": "4GrY1XyPeYuCKzrbnR81C5LfgmRq4Dh7VgtZx1MB34bTTpwdyEw8T2Gqopb8fcS1e8pq5VQkcmrrv5emt4H8odbR",
  "key23": "3raUAjPYfyQB6aD4w3i1ZoHJzAj6RDvbWbcn3LzCgi9R52m9gqBaCAm6H2G4pz5XknrTHF1n4L1LJg8VoYrFmi8x",
  "key24": "5taakHedyZdAuzVQCDzoXvtJWik9tB9KqR1m4qgH2MWeBGkww33cviGJoM56K7Ea2ieh6cGKB617zKffknun2YdY",
  "key25": "5Yb7Qz1LMuFpAcyaFeZ5kDLfb5cdW1AJ56zgpSCsa5JLJgx9uJQDqZb3MB2aBtKr3dgKEVb7s1FgcdSJbtitxEqc",
  "key26": "2zdtDtqhRabg9nuEeDrvNgcCvchPS6Bd2RLuorn2oAyKHxkSBmXpG13HZ9HSgeRuhaGUJqj6E5cFWMZFKe43C1gU",
  "key27": "SkHBeZQpaUBNYCYZGwXM2LGAwSEVHmLYwVrB9LcSwWCHJUxUpRkPe9Ws2BPkpt2baPomu8jFyCBY2cSNMVFEWvF",
  "key28": "554cM6ByRwyuaUJJEmz21khwKcMDHi3e6zDEKztEPezWwjfkYnMT5ngmJEZLKv6nKoUC1UfaxVbC6ho8hrwgrRvG",
  "key29": "24EZG58NcVM378nMErDy7qfvVqHYbGCPLZYpGUW1miHJprcL6VBSquCybAFakGfFFuYxPqZTSSsAX5otX9FcHLxP",
  "key30": "44PEQgud51fdLg8LDEeHMyoothJvfEcRgXXY35nwxva5MP9mDp2eZRxC7AnJovGMGoyGHqAxFMN8Qe3saWPbjonz",
  "key31": "24sFXeaQvbKkSLLkiWULcM1BVYvWrY8iu649zZsEYZyk8GejsePfeW2fzjvgmVC76KvRcNs4pL2CVyrVrFoNwhkn",
  "key32": "4jc6i34eXuZP6fufbDZr8TER2SzDZupQhJbn2h8JDADKe7Dasjhaj9WUjV4wjJq4uYYFSVZDY7TEqTS4o6EPKaNs",
  "key33": "2Y7TdpXK7fVGwHALsecc35EPCugJxFyUsawqAN5DYNrmfu9z7oBokMciZFPrtx7P5VQwUMkXcMtDHSdMyKpK5CKP",
  "key34": "4su6zQzYLSn7d9GUdmhby9fXSQhtLCXTP1p4pQR1SUQ9ePhoJUoNytf21XrbKyminQaSVeDMqMfaxteAKboTh6af",
  "key35": "22CLNbMtzuL3DsKMUA6mwWJnkCS7jXx1XGPEXGbi73J5pr1cNwRk7VeiG7S9Q8R8MifJFPhBhbBBUn4WJZEmge1m",
  "key36": "5mghw8fuWRfdKVeZsuwPaUr8uLYcMSjNM56WFCVvtNkgkYzMjfYVjEsW2ecBcJgHUPi3XyriNdrv4fkMqAAmgcGm",
  "key37": "3csdo9gfjDF2V8Yke2SMK71XpWvWEoUYLNpozEo19mWJGkeDuiNDkrFDLnd8ABaC93Mrq83kLoRt5gfaWftqf8k4",
  "key38": "3E3WS57mahXaKkQcEXnnVbtqMU7uzx6Nc9b3toonKKGKNXmTKaat9YpiAn2ocpZ7WWsZxudi9khNuKCRLCcdYH9m",
  "key39": "GXr5TWbhLpUW7UqPZixUCp9WE5Pz7gwLPX5YLPsj544nTigLHjrdpE2Q1KrkNfSVco7CWM5YFXBk1A6h859L3WE",
  "key40": "4em91ukNtnEDZYNQycDcYU3Zw5KWbHY2n6HvZWbxg2sWEBcFAq6iNvsozXFsRdxfkcXojzv76TSsWqNuxS8TofHz",
  "key41": "Q9nhLUznfpBBs9xPyiPkA9kzMrWkSj7uvM3PfW77JVywdKHySsWivFFkZKuRgccu4GGR3tZHK4NfYVinNqRPCiR"
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
