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
    "66Ynvjctm3CU3TnUfNqN5vGWW1FZwHvSkXPQvBNE1UbpEzBt3Q9a6MfydSkCWper5YVFXwCvpnsiWHYGrwbNRh7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iNyqCDh8bNUAaRHsCv2otXMSU572oYDM58wFfxC7EqsxZq9RJ3oQWiGScc66GUiBc2SyQnngpWe2s3dBshqWvao",
  "key1": "KVytko5XTgdJq1bTvhdpbU4vybEdGqZuiqSWJLrhy92RiA2rDRmj6ng3auT9gSw8AvkboRrXmtMEcoPHN9cwNkL",
  "key2": "3F9bFoSjL7xFnQX4XGyMjekZiyBNvSH1phdUiGF3rczi8q1fExeqC9wn2rzNGXLms4HTqvDgeeCdQFoW9SuFNAXU",
  "key3": "4wqeqm4DJdJE5cZ4AHrGwsN6ZRawbQirGsMEPnts8vatYW5YJ3N2iZMCygPd6jdh11NAa3rsP6ULZ2BG52d1z615",
  "key4": "4B53HqSybPhwGzujQMeJfMLcVMEdHTtGPVmmYa77j9i46Fo2mq8P8HaDf97c1KeDGi37Xa6hhJuT9rekAgP3i78S",
  "key5": "5L1vGscJAW2Q6vR5GBZJ26xtZU6DsnDKRt8rAHbhQMhJQVkq9He5mfLbapApUAxsCdbcFcFYftuga8U3JTnLLfEk",
  "key6": "3eTaJQzeq3uM7t7pzKjffUGkmcz6x82BAxTrd7YSAYanAddZoRzNPApwfC3o9dRuJVJ2JqHnL3uYWNi3pkt8QBxd",
  "key7": "bGFm5ypinuCXhdF4boWA2cfX3jRFejW9AKsrLdpRPc7HNS69qMRyHVuKUmTCMtiMCstKVryqAZT38LZB2C5t67E",
  "key8": "A1xtD82uFfWuCqC4GTiat6S9tQnxQM68Q9GRjXNWQVN21MfzmMPWDthj37qGsmUaf7TeM11VaEQ2fv6GeAYaEmK",
  "key9": "3MJnwrTWaKA2xYfwvCTiZnuRN43sD5QrFjg979uNpmD4JJ5wVtWHwFvhkptgPKkB3MhrkjMeYhPmGyPSy35CxTds",
  "key10": "54e4XugLLXSHKnwuFRfhiqXRQbBPNb7Nnnzza75uimce7Y9MUas93rWEa529Qp58xiv6JqM6uB7kG6uEa62WCrsn",
  "key11": "4g5RiUHsaZ3c846vN6THb1zMZKHeHmEji7UCvqRoYmcZu5eJq7VkxDWczsZy46b6mebdB16GZYfhNBEsiJ1F15rz",
  "key12": "3pbeQXwPnbL1HQx4d5FUYYggnq7upLnGRWn5zy2UDhqyZeR4nMiN7yMRoyWdQNfNFC6kpBCsts6x3pJE74RkmfoH",
  "key13": "xRZxuQLsdjMTzMyKo5iJTcZGdrNqbnMSHkzw2ZVNVA6pLR8ZjKYYfgCecqWmscY3dFHgB7FsXSTmMipFYwV5dR9",
  "key14": "4A3MaAW4kUV8emCj9GjzXjDhJPgMS9ZHcbcpPFpgt2crS1R2s8kdS1pWgduYH4NrYxD9wPBNz8CREq8Jr9Pv9gQR",
  "key15": "55tPfVzJcerHFHRuCiBXZSGY4P9MW1nXQ8xhkP3kxjn63oToAgbzU3hKgbm57w8ZhqPeDm65rQaA7WbkyVyenAyh",
  "key16": "4W3ves8BHKBXa4hNbmBjfs9jE2yXRPwafJj1iW31U1UffvRpYCV6kyT5LUZvdtbsJDioq2YgouCN65ESqQF7oDqv",
  "key17": "4mVaczV981QFJyaD5eAvKxa2c2nzXav9VhEy8wCysySLs1APW1WuEhh6h3jLCpC2wvsPTSpyTD3DnjMX2MghBERN",
  "key18": "FgQep4F8G3MnTejA9Gu3rJVBU4xvP6aTt1tpLcVqYcH1ACFWXtYRWTE6EbR5U9YYSDWVMgPf11GQcRtUhSdAyA2",
  "key19": "2VzFGt9xyBSFaKbUSuZwdN6HVmWHeRYeVBYS9dxa9pec5nUmrncK9UzhE7GuNLA9ebnz3BwAniBiAA5RFpdcecas",
  "key20": "pv3HAZaCBgdU31Ls43BH4isbUYQawUh1GPA9MK4BhXdWZm1NPpGjv9TUAoryLXMFcgWFLNXgE1h4BNdAQowbxZG",
  "key21": "2biTtmRzRt1JEYmrSELH6AfG69mNLxHeoyYdoyLTwj29PU2YnZEWsEHU6gAgauFunyWYZR1gW4eqPXYJFRxmozyE",
  "key22": "3Ev5NBE3Hg9k4QDENEQ5WkrQCPwbY5NtSFA2Ub6NfzW2VK51gp8FEbTCoXZCmoxE1P6VVNGZWvrzqwVLixiGZsQx",
  "key23": "r1LVVgQzS2gkPQ9PPGFae3HkoWJbqg3TcSQ6zn7n43KiSqKKdpraB3ULUun7oz25on4D9pbKcjwAuzvcC23QwNv",
  "key24": "64UZ4aSKDiYmdA7K7GJWfK47ATojd3Xz734p3kNKQsAYc9KzFDKS5i4w3YiugNNTEc4winy3RXpGjHa57Re5GtdC",
  "key25": "4AW8cf2wC6zJrp22GPh9gcdx9HmsyEPC5JwW4DKFijCQ4nMxUJegWc2Jx4x5D7oSYZs7YRzCKW9E4Q7jF66gbLpo",
  "key26": "3cwau3PPPg7qq8iMQmBP7iAH2oHz4iAzSNy4He7w5VFUrhWukPFdNyukYZTcSsFkyUp7VYKMYhRGQru3as4TzTrE",
  "key27": "2iS1cfcvQd586AXuuAv3y4CumZqVGXLYQ6JaC8AJFs7KGVRaAaK1QK15LDEtfgi5L3xYdfg2d1wDMowEc7EAWDF4",
  "key28": "2Ya3PNiATETUKuF9BVZ3f4cRwSxCz2NmfDTCkdDUX1JGm8MvjYNnJ6Edh7ubTzTPWFiXJEbXgm51cdv5vXEJdHbw",
  "key29": "2MKVdvnFey1yB4ySpVjXCymsQCez4S7vePVCYmTAw3s6jnHYFoqfJZH94jGTm8CkMLVR7ayjzpkfcVxqLQSSdyk6",
  "key30": "5sKB2uHFgiYn7X8renZDDJVan7fVQ7UF9NS6mPXJpkpEgFPhCyvRMxGaRJZGTGUede2i2GEcZ4p5DUTmw1ZdBtZC",
  "key31": "4ykLueQH61S6j8inhatZQixr7XrqaH4B6wmg5HAphGy2wUREi6m4eKSU8NS4bWL3xdxzs9EdN67zBLa89qBgvLaw",
  "key32": "5GmKCAb1usWXzSj6dBrGJUNiM9f8pKpPNv7AzKQw8QKhTbAdBD52auH5NWa7p76USVL79wo3F8vgjbfLWw6NEbYf",
  "key33": "4xK4c8uycjFu3heCEHkkCYbdpKX5ei2YBiPi2Dde6RQvMaajNGnQDdg6iZfRdGgKJghaBXtArHMVBUC1aAzzsfi1",
  "key34": "2rGcNtmjvumf9uxRcatCt2wPXzU8b9JtoLEeyVoNASnjtCs2Gm31sYu7n5wQ8RWXbFiWUQWGSApqnaakALg9PB7C",
  "key35": "3Pp8zM6RWeRuDDjYyQb5aYMQypMLBkqiT8FVT34Qcd6gM8m4a15Vz9nCrNNACH4ZTaYB4jt4cg6fi7wrLyuWqqNm",
  "key36": "HjQGtQiS3gxExN2exRToB7Aiixt4XjZh3Qqfz1Hc7qJaECMtzL3FQZidF4aC58HEf4ktz3MxsJcKEKmCFAhnPxT",
  "key37": "tBCRKx7KZCddX2GB1boPzdZeFeeYLiAHgiSvWkkg28KVr6TaBdZuXDL3iLsrdyw9f9XWj8Cuzunr7i9Ew55X9N8",
  "key38": "4J9VXXPfg2xVqz8H3iAjCFf3XcTeHh6UbxHNa4eireDxN2xVEo7HCLi3T1G2HTFEabeRiNbXiFn5juHbbgMZMnt1",
  "key39": "TL1t5tVq6dfo8KfuTAkdUMQRGvuaPp6gqzbcCcoGP3hq1CzQJrxCezv7aKrwikTRWdjukcFU5n1mUTcjYsv4Y36",
  "key40": "2zmxte7e4H6Ejhj3Sjv2yJZJ5SMkmWZt8bfMTmGN2UA8HYxd82sroZwTiYKLWXLkrM5q4H96xw2cL2a3HDZzMzag",
  "key41": "4zPezXHy1bFd7JTbvwpthXuLfH7AEpq2HNoDCdNKi5hAHhGBfYoizyBRJMKxxyUF1BC52dWqB333bHD8UkaB4GA1",
  "key42": "29cv11AQhAh4S2XUbhiWM9kMaRDMySxzaW7hAxGn5x6FRyfWTcCeM5c73XhbXz5QNPUm4qJMUuPFyRbud1UvnUWF",
  "key43": "4xeS82wDEZ5waR5kUP8P3yeLJZALp2bYe7o5KwLsJSmhzTKAwWtEw6g9egfLdhD62uDNtrbsWDdvv7ygVRPFQuQL",
  "key44": "zVcoryq6ycFEMYqgyrW3uCmJQniopYBJGE5257si6GcrzJHavBCqvn1A2VKZFw4sM3tFL2HuHCypvrZGaGswne4",
  "key45": "2n6TLKaboWsEPokKb4bw97vubycM5HDxpMRGTgmRp4HEBa5P5NR421pcZyyJvBthF95bepkKPv5MRpVQrnN5mdRZ",
  "key46": "4xWVnbb4yRoaUtjNbkMSjK3LqifRmXbRz5n4mKbq6heWn5Tyqz6a6n5uTesUT9zBn4GxnJK4QL6PxSvWEtxSAkSF",
  "key47": "5ZmN4etCvTVxRiFtKoV9NdVhGmYeYUbhbovRsSEuq7Ef9hNy33UT1eV7SZohRPmKHydPDHJAxS1ptj5HLn6yEFzb",
  "key48": "23wPQiKfjJoBnNrYxygM668d74MoQ52G5WtFT4eYYGLFNCv6ZH9q8wBUYMGiRmmDdTiNkoagVyPGkCD9p3DQAJm7"
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
