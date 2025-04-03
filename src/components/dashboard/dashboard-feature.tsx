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
    "2UNEtG1jcwKvgStNJpbinZuvTYuFajET4nmiw1QDR3Szyy3bnhzQKZE3PsCqb35jXprkwsJW917sZoR8ztqox4zz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EENSGBZKUxySQHACWJtpTt6hiRbKv5b14o3Gi9gPQRFMngs9PWVSRghAPaMGqzVdogu9rL9VHweviZGVZFBJeaD",
  "key1": "2u3ztHu53rPzXf1EX1DDCcWFEATsSYZhTjYrwshKogdxytTnDgnKDD19NAEbSn6UZ2URj7EoApu5hdN72qMAfzd9",
  "key2": "61JqPoKges4dvQjQgM1n68LnLSciRQSPguaRHBwt54qNkRzCx4kiuN6Fv3pT6uRu1GoeSrMFCF9Nrx3G6yRztqQz",
  "key3": "4UnBhV16pP76dbp24UeBYzzELTpwkqjLgKyVWFgupPo46BpxZubgdDZx95XVyJgCjqM3cbGHdKxksSkLNmzsrTwi",
  "key4": "LVGq7DDBNKJDeiQsVeP1XBGUMbCsbRi7WNZbJ6jii2wR9tY6do3S3gg1D7P4Tqsj4zjz1xZg4xxxuax3ZoHVgpE",
  "key5": "4q4YR4YNqLFBDVtkPfuASuiw5LRfVMAD9XFtS8pUxJsczw4mxjLB25jXV9ZaKZX8YUjK24UoehNTidiE4Y8w318S",
  "key6": "4dGk6VrN9AmfcTwD1QwDkg7AmFZ57sRJ8S4ZcZXKwdcFnB4cxErJF8k2Q2KkeE84DyFvJNoqwPmgMLRwbbzjrdkK",
  "key7": "4YSY4VVy1WEGoN445DHFJNehfk5X1eG3aaiTu5aNygrHFxJggngqvDQDTuMXhH3Vij87eas8DjFkwuQN44dfPHt8",
  "key8": "4xanTA9W8bm592HGLa7yLxQk2k1WNW3zpadMpmvHWECcCBpujX6zPhgmMnusnHpEpYsq8zwVaSvG7gmqnEArMoT5",
  "key9": "5HkXiBS5EWuYQyYtbj2LgSpN5u3GAv9QSFfn7wyrsL1R1do7VZhoWCQdx2HW89AsGaKQdR8PzWTcm1Xz2Sw5TRRp",
  "key10": "4iFN2Ssb2A6sN27zUGLQvBsZNPV5m3GaYDgTBd9HvHeiKVFvZ2KGmYonfrCPZD8atb1aPkRpjndi8xF7ApSyDgyj",
  "key11": "cVYkxcZ7dCfozLwDjnQuKWZvt1Vr5rvkJ8kJzRVJosTGDoB4juxf8eu4PN4xAhMyjy9xSQw2WJWRwTzZbzSd8DH",
  "key12": "4zQJPuPvAgcCSofxLFKxBmaqHXD5HYw5QMCfRGrYbXmbGaQfCUUH9n2uLzGHEo1r4h2vrEw9hFTtLWDZHYEJg2Nc",
  "key13": "U3eaH3tx4WqnztU8E3o7UT4RoEDsKo853ZFEVDQ9yvij4rNAEScJU4AfjHZDryadqEjzhnHy9tMhshyo2GNX8et",
  "key14": "49YLM1GCm7RxLhSCSizgwLzmjXC9gZhYJ5pzPuZ1fhdpw48mYWyyvDtwh4Tuj9TimhBMVYwzMKVvChk5QUxR6vaZ",
  "key15": "36vMjmdsq2T36Tp7rfqZmKbhz9HkXfHjeekoMTTLT6TpqypaB56e1JJym6JA9MPSwrDzWHgcmhqk3gJEx5TbEjj2",
  "key16": "pMM3nVGTPuw17iNWFXDotmMMCxu2McWbKnMJoZusfkdWM9W53QCv6NZPCmKg1oxEZ2xJnmugS7nzR2fzuGiZ5w2",
  "key17": "kHGw8kWAgkK7iVCDbY7UtSU81rY1fVEuAYuxFeQ7ty36j38x7qeJFWit2sGFNeYtFXehdiohK8Z6ygqTSijVuFe",
  "key18": "35YfQ6pEJMMEcTHy8khsc8XUCwWRfT1Z6bhQ1zKcwHgYDp84Lu3gfqr23LigtVg8rEhG9ntEY8w5GTTcnZTkG28b",
  "key19": "2LeAdhjRJVLyCS9EEQJgaCSuTcwjagnKNrCDB8rmkDMXt7kKsHi2QMqJUyzUJAZMFg5DXGyGd63xakdekpsGooSL",
  "key20": "5P5yCNVMFBNAJy2A7jz92SNdSVEXBYEAtxcaeYdjfSQMuk8VGBxSQCmPukvwDMaHWw8aB99AQAX37AH3daijdT18",
  "key21": "3D8AHH2xUsCx8B3zBAUmW37Q7aPvWQximqyc81Y23THgHKq5HnXg69xv9n8hsytb7fbHGYtLcTXfpHS5itEsJ9v7",
  "key22": "4YYZsyk4EQKWz4aQM2t1a8UnrAViafhJzKh2FD36GZXfvnCbpTUgazykWDJNhhed6jny4jstvnPAPpSAWMS4HvBQ",
  "key23": "4PmnbYqM9NU6ZSKGi2HvRLUqRyKM13bmFz8rZk6pgRSRJ5EpwTTgTucgEcwoNRBJ1P6cR8keF2mSBkqQ7giN1wcx",
  "key24": "cK58RixeEJdnEt2h9gmd1fmeM3E8aKrWnAiU2WuTmKLn4xYKtsGaFYzP77tPioC68ouRQfeaGEGfZB4iPk1mLV4",
  "key25": "3WH1h48WJxMxyMhgyJjtvHy4sjLZ2dbrVXeU6msYuVQQLrNkZdrJrKf3PM2MHv6ACUQeYdF7iLmhrVzPgsepoZvV",
  "key26": "5NNhm4RGiGz2RHQi9WaVMbdQM9hLpYM58NuMoBhVGDLuRERYLLzmp37cQpY5Yyw9ksSNJQLQV5qPkLxoGWyWtxt4",
  "key27": "B8fPajWFfHGRrwde2Q8WtDGLqtumFLuNiQsFNLRsCjMGT3kmtRrrVXadawz683jm2WANZFEJ6Lpf6WmxyDvEbfr",
  "key28": "3N3NNbEdo43ScC8MvzQ6RL5jYLUxVU8nDHMv7pEyHJQ66ujeJXxZnzm5kWo5SrZ4ukwbG3KGf7Hg1YSNeKjDK8sR",
  "key29": "46d7p8qcpwrUE3fvJwMVDiyEcciMFLTMUcP1Pshis4cWQRKwYGfG1AB4mJb5NPXGFEQy5TNHQerBUm2ZQ9PYJ8SU",
  "key30": "x3FssgRJUyqw3VivwNhWAdgm5NQZe6UJw2Ri1LSmd6PTbHy1vW3GwnyZDpcuSSi8inTyeo6adSDUcg8VHArNUPp",
  "key31": "5UDAHQJK2DEZmooU4HJqJgtRbo8m426PVPX1zXG1KaZTB7bA6c4RqXo1B9u4KbBtq2rwoGBSG4ia7DzeYTqCsLqG",
  "key32": "4KLgbUq8cJKKZk8vX5Q7D3PvZHAGgwmxZeqkMCKp6FqwK9hfW4dtsZQFve8UP7uVA3VABhzsk1me9THSTAJCYnvG",
  "key33": "4zMzhUeDQC65ndqHhzasbjdA2YfGCixGLTnRW38u7rccVkFm5PuTLSULdANM26eBT24ypBTuupPv5SJ22JAh4QXK",
  "key34": "37CQTwYA8Bf8toVa5DvwPiFqG2jnGCotCvZn3n4jRePPWCXkxU7AKnfBD14L51VELwZJaSrM8H3EZw1VHM1jJk6D",
  "key35": "42AapZgVCBQjqDSEcQUDAh6ii7QZi3ENviABKZ6nDgxFnFvh2JaZL1AuY8ojaHLfV86uZjkk3LpHkvkQ8mdmXoW8",
  "key36": "3oFs3MSk2P3cFaMDGz6UzDRFMPzG58KHt1XAFwbAn1Kj2ykBRQoexkADwu52LPY5Gt7a6cQitnFcA3WZqNdp7fsX"
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
