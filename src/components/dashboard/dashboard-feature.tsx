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
    "7EK7U5c9fd2M8HchTRRwX5R1DKUkzQ9umJLuJshXyApoxAPW1YX6LJ4Ty4BfYc2MswjhGS8X51Eio3bkgeCV6ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Zy5W3zPNLc4QevioHxKU7VUVT1oiHJQzJsoPVSabQxEwLnWrUPv9NHkYK26wUTMQcMQytQsvvtpMAWd2yMwR9b",
  "key1": "28eNKiGoS8f4ojvA9qS99iiTgjKDuWX6JqZ4wiy2MqntLFdRjpQz3cGnZLbpFNc5d7mvXNcKBmNwxpdhKP15RTkY",
  "key2": "5Z2qfXVAK3wmHBRfYkceUbE3yPfz5X8xZAvBFzzKiTKno5AeyfUXdyo8WWskVZdwBhYgnVdsTWcZYV6ZKEvzsiW3",
  "key3": "2nBzqUopErfNayx72WV7jTbqrGHd4YZyPGcUe5HJJqgUJyfiPLHkq3ziJm7ufzjkxbUCb6EuZTcPovu1hr4uzYhW",
  "key4": "5tQX9g8BpedeKzBxmTcYBn3LdT4PBRfdDPocStscfJwyAnQzApV5YuvMSv2hqnFrv1dTW87SQvQdxPaGtnK3uPGE",
  "key5": "5m4eK6rfy51U6fQzD1287iEJGa2rVAVAE1kyFLfkzXYgxaqWnmFSKRPeG69HUqwWuxf1Pr8mVqajBZaUSJaUQQHA",
  "key6": "2YKCChWD6kZvXau1RUFP5RECTGhbdsVZJJa5kpTyMRRHaNaJXDRzNs6bktjmL15PcbReDMMiR8afCty1rQq2n8um",
  "key7": "3bgtttyBeh1tmVEDztTfzjs8UqAYBr5upb7Tt7ytsaJpaHoHLbzLmXGNcTi6JV251Ri5T4yYCseiqKFFoXfXM5XP",
  "key8": "3tNoXJb3rQkrDQVoLoUDwoavtexYw9Ymgdu4mZAe57C1yFp8PKWkMS4NHehH3gwEFrfMHFFHZPegNYYAJyn5DTQm",
  "key9": "4oWnMM5PoX9ojHbTYXR9fPPCXL1yJao9LAh9FhzDk6k2FjibFcvWgPWeSeeqA8PVYfje1niP9iPRatm6okNW3pCo",
  "key10": "4HwMKgwagN6CAjN35UVLhpXCLcMX9yJ2o3gLuH2Q3dr7jaWDtbKsUbRpDqvhJuVzDH7rRdvz85aJqHJpspSC8x3g",
  "key11": "2tYcd7kqp1k7Cb94r3UDg2Nhv9QCmBJLUbyw2ASt1GxQpDXnaP32WCamn71KccBKvmgGAUdo2wK4GxveQPx8Ud84",
  "key12": "49jCuLQthkx6UMCQ2uSYWzr8N2itcqjvs4jYK8vkDD5toch2eug9yfsnyDvxZSrrRkMwjH7wDbNwTmFv6H8eJLZU",
  "key13": "yr1zQCPZobq7s7TA1EJVq3hGsrmurpnGZGSUDkSTyKb2BsoUmzG1m2mCM75zE5J8jtavbxbNuS5bsjvcKEJgxc6",
  "key14": "2PyPmebhotta5rqx4cgfVoNwn7NT6yzRiHn5wDpHM2s7cMwHv9CdvEYY4uqkaawpCrLDz6S2jvh8pyikNcvjPia8",
  "key15": "4BvgNNRK9wpHkiwaUdDXvfZ9SHLfdAXit9cz19GSEdtvQbvtvG3r3m8ChG1ewRAWpxXFQTpPEyaJKEiv8f3NDmCk",
  "key16": "3xnrdpa7PfPeJ1u3iJ5vgL4daGXL2iQPZw7tjLxsEqwW9xn7LL3ZhcEzDAVsUxyibfBW9mtfvzDs8fkLso2j9zRm",
  "key17": "324hrDRXFQjUAcHYBkLo9Wu2xJ3PUduY18Da4Ecw7MxvuJUo2C6bM5ba3rziAmFwWWknYDzRG1Cnbf8dwdjo9AKD",
  "key18": "dQCxkvP8kS59ic2CkjSbycGZQQPAG89WqErwivT5rqiNr5uaakoFhjiMF3K8myYBFpYNCifAF4NArFeCKzqcs7S",
  "key19": "4o3GqpFRCYKUXRbBrDFAoTEjm2ukLrE2BpB6aCyo7ABCSU9GLa9GbcvqND4bkZZD7YMsM5ArRaQZ9tHaSLxfNRVf",
  "key20": "5nTFJy4RLxDsZW7MzHwpoBPrMFynkdBrTShxREnMVUeLqg576LmPwtQBXBg4diAK2MkxE7K8PtgMw8jN6bUexNj7",
  "key21": "RkkdMPdZvnGbpFJRD7wxxuTYZhWTCM3TUbS1nvUJmnq63HC9jaFPiYrzkZGK7WTGUEKTr1y6fm8aVQXBmisG3AF",
  "key22": "49uR2X2jJVA9GtBvE9e7dCztuUQuygFLaeQzqbHLf7e96vUSNTmkDt2gkdexECw8v5yfrojVnezEHCWctsUS4y9P",
  "key23": "JLUKrvvmAHsqVxKLgdcSjZEbqKnQZSnPzk3n9pUSAqqYQFM3G5Q6gcg2zSUuTKZ8p38FVeAtnXgsyuhLBCZVd3C",
  "key24": "5KF8hPTxbVM7jAqA1npbHGLCVJTKHv5sE38QTnP9rWiWxs3agVAb7GhKCviPLaA8xNtZ7L3ZyNT8MLQFRCH1ZUqG",
  "key25": "36u2F41UM3LgkFNX35FzGFDBe4Cx5WHq2hokTVkLuiwQCcYtNL8HBv62H3NgYCsscxneXe89dPbY5VPsszJo38zJ",
  "key26": "23cx3YkxG4F4UMZV561iXFLSPDsTCM7svd4LwHe2oR1pcSH8JUg62B2ynL1QfgjjHSQVy3926XQcPAgbCRg6DN75",
  "key27": "3BMmeANpmBFvjWnRFcfGTDtiHJ5gwoh8UWmVKnyJ2UmznvxHNxHRWxNJgp8ALBSgXLTWdYp6ENXnZcFjz1sbkpuG",
  "key28": "2aC3hUAqXisKWeiBGzjXFgXAqZuxRQeYAqVNJL1KS4WUgHj2eT2B8VTsoEiAX5tYwJ7kGnk4e9PSXXDsLigtHie",
  "key29": "5rJUPnqafC6rcbys5P4YfoSf27T74dg3FfKfrs6tXxpvu3z3j7HahB8nJJ6qfVDw5o9uwiDSJkXYB4UySsGrBrx2",
  "key30": "2451PQ9w7yPdqPSFnXMMiPiQqjP61sdFSKFh3wR91pArAWhnYjTUsuEihjaA4SahCXwwpD1LZYGh39rjMiLE5qPx",
  "key31": "2NBemh1pGvEqLjeHfL175yjTkV1AmjDc2bUq8sZE4PMWQfXRN4RdpYyfgXAxFw7qUH7pjnTdTA2xU5A63yAMpwqb",
  "key32": "5SvN1TVKeYE9bdDRcaAw6PPpwUhJFcFGyKCXqxqTNNkiJRDUwY5RbJaF6fBG4s6hqyBjrq54jFTkrR7cEn5Dszcd",
  "key33": "3KoH1w86XPdzAVaaFwabaGMj8k2inUbpzfcudcprwwsDTHTXmvuYxy9J3rGQ6usC8G5j4nL8TLMt5gQFsdqRuSXi",
  "key34": "oKRwJPFDXj58AJJ7A3kVSJFmjmtAUTizLxYjnS79VXQpMRRP5BypmssjQE32rAFQAivHEsbYjonZMy14EgVqr2t",
  "key35": "4y1R1RUB2Cz76Lbb4Fzw3nuMeg33G5ZoBeT9DbqBjLNRyjkNk7zv3wnZQSMW15gsz5zHns7GYquiEb4M117JFjUF"
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
