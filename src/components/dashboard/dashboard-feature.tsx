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
    "2ca8Xd52aDai8rMPiL1kZHZj9NjbExbRJAVHWzNHk6usL74GPd7Y3ZUDRqzGY6owaoHTm2yJCm4c572wVJtoTnd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HPS8eRjf7h49hbtVbLQra24PW4qZdDhNj1726BtXAUd4nfv1jC4A5MoZwTJdQRadYY7i7TMShjyEJDG7R3hoM1t",
  "key1": "4D1imyzPN8SRbfqRdnvs6HJ3Paftq2bQTHun91tka4PZ4jmzc3f8zJEuQPiNMW1NYYHxMkGpnRATUk2XDTN5yspW",
  "key2": "3ojLaj8oLhSdmdtnEV1a6cSt6KkbMii5JqD2fm7Zrwz2ethhdjvqWNAwxd3qreFg6JjM9XbF8myLZBSvaCQXkKxV",
  "key3": "3F6dJnMb7VCFBRuuft6kexnVbA5Y5e9yfeHwxzm16yYR4gYHDR4aCVwRkCXc1iVNWf7hhFA2rHcvi4F82dtdRCNv",
  "key4": "61RZdsCGAdmuFMXYKoNeHRhRACp5ZpJgUpNwpqBvEhvMz6xanaDJ5XJTiAhxroLKmaLz5nDJ4vdMHN4CiABrmxGX",
  "key5": "4NYA5X3MfkMYkdT7iwweLmVL6rj3mt4JemZm52QSztC8w9Qk4cFvmaTbL7kpyzFVnp4dFuwJ2Rq23cn25kW5qSbY",
  "key6": "3gwCUmJv5RXEodmnYUtv7JkdPLxqv2EFJT8MzCuy6hDvVY7nzSSbfCjcunmkbSsUxZS52DPizGUXPxxEdNLBkDww",
  "key7": "3oZdD4kkg8zCoZVDyc9fwak6Xv3mowFM9WLGr3yES8u7Zk1NR2k9YUi78sK4KraVcvLtvcBBuLxrvMBAuk5UCPSg",
  "key8": "2ZEPJatpQjVL3FD83WKPFcJtzQS3kGg1Fa5BFccHRuBhNC2J97dr6hNA2JTMt3Nj4EAtKSwmSoa2i8zxWLQM3SRv",
  "key9": "22WGuMgADDZRiyZFuqG5avT3991rk6aqnjtQKEekbxpvQ5CgyqoYn32N5NcHdZR1ecS2Jmsg2m2gmwfBoDsHyC85",
  "key10": "2iqRejrwgmXBMKE2a2TYpEAKXq3Nz5tguKCcaXjZgbWaG6mZCgjUXaiC2ro26xWf76goAeUk7QFyRxCN9dT9Ud5z",
  "key11": "3Tpt4bsPC8Yb663LvHhv7hyfat9QP4Y1RC7aBd17CauTB5N3ex3qdfnG8M2xkANSwSA4fqb2PPmncsNn7WDGePXi",
  "key12": "MzpShcTzJxcQQ1kqrev4ovQg6NNXpkjtj489kP9WucCJHWy4W163Lx8Did6wfnUa3DgXTJYzgLGWrFuwfrH8U9x",
  "key13": "2ysiaDHKCityZXTuGpnxKL2RAqjnqrxSQEk46c1gQ2eyChqLvRsq3UPuD6xA4U8hafTC9KjzGEuZcPaHkYFKwWFP",
  "key14": "3YaPT9cDxJ1dYULBuuHhLkEjavGRcfLKbsy3AWDUUpimZu24eLBW5UVRB9NL21iPGwXuPmXYwjogu2aoBmmzRLBy",
  "key15": "5io9e77R1bnMaUkESxBpGEz9rH5QBZwQug1t6Z7aMSb6bKE1MfN6YYcBGux6n9hSboRfRnUCwa32dhWCm4GZPCij",
  "key16": "5XsSw3vqbyr2UeyUSyDxJpUw4XXX34JEPLrA7BA8qMFGFfp1pDZmkQxkSqtBX7rRxWnfbz1xitmd4KSPxKVFEYV6",
  "key17": "4Jzutj8UE6NiAjxFuKFq8g8r8p2m25GafZDK9HXJjQ6g36vGsz1NnPbvhi5Uh9bZCjuTPqzkGdXeeQ9tpP51aCba",
  "key18": "3H9MStaMcygTd6umLzSo2675mBYQCKqiuTFvTT8td1zuS9pmWeszVF74X1EA2Vfawu7M27sNFzo7wdzVNY4Pw3Av",
  "key19": "3BTaevbNV2oY4SDBRL6zguJAnv3HU4hd74oN3v8EZUruNuqowfqvT789ceFDUvTphAK6b5mEU1KmzMv9wJwVRMfH",
  "key20": "39eteo42F9DV2yTX5zvxojVB4W3ByZMM2W1Md6ErL2Ls5CwuxZzf9shxAz3i25Q9giNdBQ2r2dEgjeQKsMBFr2P9",
  "key21": "3DjAn5i4nXkAHCQevNWtGaBNpgefzVNy918W3XLLS1tFsERXWmejZL5pUsCB2QvPkJxxguWAcLb9KUYVzWqpgDfb",
  "key22": "2QFvgmSvF1o6ym3Pt2Fgj1YbDEtnnnKyTSchk94D9RwNJA9k8YyVnbwcN5ZiEPrqXT5MrBiU8nT31wYkHKv1ZoFv",
  "key23": "3yPVZ3vFgfiHL6NZNGvzgfMjUtwwg7vYx99NMBLhhJyNaErr6ZA1UjQN7uWgty24dpw2TERkfP1FQxr5YrC6cxQj",
  "key24": "4w6GPqfNx28MSCZBFxedxJfUSqCrTYA5UMutQRu7NyVkk7SJmNXRWzteFDPYvJc4ZEAXrUsRPKzuGDsCEVQr6P78",
  "key25": "5tnBQLnN83HmGAoKakLfLkt2FdyxqLzdMRaGaZ1Qd3VaXs6mVaEktDd8BB8GvQS7opSzuTE95NZrDrsYRVjM99bc",
  "key26": "4vQkLytMQFbXtYrUbjXsdiKsZpcaHQg8Vxd6FAk8Wkrb6CgY1uswP5Xstj8PG8Yj1AMLVFjf6otw9vkb1KPZpAae",
  "key27": "2Dz4HWwuJh9MRG9NkZExAVxUQqEuDFnPJEBvWfquhEoFGbXWr7o7fn1K2oRKZWhn92XeDodTLR35A2VKEdnMaLfZ",
  "key28": "4mCM6a2RdZm4xVcPYKo6Lf6fMxqQzjF7YfprWtPBc3ghEhtShCAPJqHaBbQ7ZLjAVsAsCt7o8rwAsLJRZE88kacm",
  "key29": "3UuKJpnfCd3azoxMxKnaRQtaxE9iFXeM1tDRTva939SUPxXYSAswNP3fJ7WkhpBPEjB395xdwd1M2iQRcYyt3b7a",
  "key30": "5cffoT99sn1pgE8WU9V3fPwebDt8iARash8AJweKsMpC6HHBKSJP9Tt1buS7qAVpVYXeHMcSQpwXJMUoPuQj95Kp",
  "key31": "6HfGXGj97xLSQVQQXk8SCXU71Y4SeDMgH1YfPyNEbg4yRJe4ZA4mxyLQsn52936mKVJvyFKWiR565dzycyQhHbQ",
  "key32": "5GUFivLAroXYDvaFvhddJjvsgY6pbtDhVoBxaJpFTYuTkZePKVm9jmtUqRKNcRe45APP6YobVGfgw4UtMssgBisa",
  "key33": "3qD2n1hc8qSEDNuupV8VioipqXMGywWP9xKf7aGhJ9u2vXmkwdYipsqeTuJbXQRpatBuCF2jayJR33ZJvT72ndXR",
  "key34": "3TDRqZkUtnK27cFJDBVW8wE9kZAYh7hFk993eiDc65C2c95kCphgWWV4mj8UhJHRgFkr65PgkKpWeQs66DtN1V6L",
  "key35": "3T3DLbh1GvBrVWtXBorNxcx3mCddJA2onJgTNBFHaZY6NQq9BDaXtFEsyi7R1hraAjLiBNt9wKe1yUXx7zmQGeYw",
  "key36": "2rnyr86YnMjNYkN12AdTEgDi5rgtoowpajMgAKmFHMSSZAgeoHwqnUEug7pq66oHWTGEDdB5DyAoPc8qYrrk85sd",
  "key37": "4BNnEgcsRrGEjPYGkivP8uRr9hAvbQQfCvJ2ULqr8DA9nzNaKMhcBF2Ep2uXQCoTwa46aZGb7UxzF9cLuXgWyPAy",
  "key38": "2ahuzWavJLb48CQLbrGEFikqYuccZFJw2KJSwymAyu4CxoiF3maFEfGpkGR3qJQLD6wh2VUKvFiphne13CzbJYEf"
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
