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
    "2SM4TtbtbzqrAsML51GBN7kSEZxRBesK4BnrBaZkSjc9fpKgKr4MuTkw337dDkLknrtsHFREvbaE3hh3n7JzKYLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7sFps8LAYvxZsP9JekBopgM29jekLx1Aci7nZ6ZYJkXsepFDZxkBuYumVChAt62uUReqwTXJw8pnqRABm7x2rW",
  "key1": "2SRRmP51BqBSzKnq1YM2rKEfh5VW2G6uPhPsEiVy5SXoD36H1xzZWS8ow5f15JnVZFuhhUTWuj2DA7gEbkYYBdTC",
  "key2": "JjHy6nig3Dfvoj8oohJg5wuHmKdCzUAcJXfX4p9U2NrwpJXw9GJnfEBy3FwfQ6PBdUgQUuP31crT85dVqJYkEFW",
  "key3": "4aeMXLT2DiGsYiS6LjdhZpeUVV44UhomykH3La2TMd1BjuMb4LbuH1Ab1GMBgJTws4VWMoiTCYj51DgBQp9G5oKr",
  "key4": "5pRDVgw3XysVeJV8He1TCQwRAAQr7VaBWtEtXVzgQEWMkrzb8hCsnYEW6PNi4P9RbK4YGuE5StHWeurMq4Dy4Zoa",
  "key5": "4L6Gz6rnHTSm3YkwnsNL2hYSMCCbF7RnhDe6yUre9vhTbQjCSNBLJmHA3eXwXpNiSJkSGtoUJvTMqqLV7mvq9ofh",
  "key6": "5PtHTbaTn9h2PoDrKyu9ccSQ5vGWkKoyCesQT6mVgTjDnREniMa1FHtNERHk7RKta8u18M51BnXVnigr7tn6pcNM",
  "key7": "2J3ijFghAphE6f3NShGfhmWckJ99pB96Ain1e5An9ShdYkASEhWnJaaGHu3bJVgYtPCMixpaNmc1oPpDnf9L1pTf",
  "key8": "2cj3yHza8tuhy5NBJGcX5RonxcvAPpNNjd2DgPAgXWHw8Rf1x7XJBjWXvxsR1HtfqyzNqGw9ncYnds6uiE8Y9QaL",
  "key9": "3JLDCtHa5HeuPFjjYC3ZDu3e1h2z6DZSqCuz1fQazDYN1CBGz2aU7bfu16Zvwu1rJvE1JKKrczb9VHZv6prXuQAg",
  "key10": "4Bp5cCsn6gM1TRt1vZKEGqgoZNfU2qdxVGKk7tiPhx3HtyRcQiAiKm9cz52fuf6ELC3WqbcvwfgfD4Q7Rthw77EH",
  "key11": "31JzT64gSiCsdgq8rnacSZftu9Vnpb7vbW5kPf6zRMT7eYz5a7S2daKE29dsmXVxUWic3Mp6rrh4yCaN8Dyxk6wx",
  "key12": "2LyEjpkGfVQ68qFceejhHrp2TPkKGhXkjAkGCgQRKYvmbBVxQMWT13ZExqBVQbjmWRLqS8tkvC3PDCs6ua4QPwG7",
  "key13": "5hCXuzJZzJvzyXKK656N1XUKBRS8g3ZyeWPrEn9sPNWaKFm8qNLUeCJcBs3qTirxzixpQReJYHDTrcov9KMPUVqo",
  "key14": "3gKrKUpWuENVoWJssiy96uBPRwGA1meutjTc67FENbJPRA7VKp8kzdi96JUEzBxixTCiu9hArdc6TQ4u59sMhWq9",
  "key15": "3EjGhgpWiqaZZ9wVKFkZJ6UCSrDtxvHr6bfgqpCxNqb3C5MXKaNzaXVTyjXGkDVsdeKFdDjCmELTRiCWg8eLSNy1",
  "key16": "46GGG3Lino9ksbUc2rNfgBztBdJ18A7NchvEsMjAazWkW6dCD6Hkps8dqL34MMdkhAnxoqqNSaz2RGn36twpSY8S",
  "key17": "2zqsei9UnTtXpbhwUxA73tFe7aea2pCbt2z22XuQ3pthgM5akn9WZD7yoaNnPrgQWFbmEU31e1oTKTTtXwKVvbdm",
  "key18": "399rXuRrpbhaRYMoGvRmHgmPW6kyfX5SWqrJ5eU9dwJ6SWBNhiaLtDfCWaHmCZZKEhP4i8jCtZMAR99VBB9e7x7y",
  "key19": "2bfKL89qyKYJSSQHHyr2bhSGGCpHDhfckFdXx5cjEfWpFAL582pVwyP7Hw1FtSMFojE7wG4cvWQz3kYoR1iHSWt",
  "key20": "5Sc7Ar9gutUnGAzXdBJKvFMRMZ61TrcgfAd3vLBjkqJ7EAjeMT8fSR7JFgWBktxBJRJc6dQJFcGYe3vuK4XVqjqX",
  "key21": "2Cf7dXLpb2WuQuwaywu1Cj5jzvo88wWhZByXFqCk8oi8rd2cVg1gAhZwH7AZg2nFzZCeMhoTpwYE6aSNX5PwnV38",
  "key22": "3anB5Jv5hJu82nWxBkLC1G9nHE1Vj4iPCSMBt1KFwMYon71wcDNVQgU1Qh3iwiHUJqzv6f2Ujme9tuFqzf1rRXfw",
  "key23": "4YrVE2rwGPBbZGGWjmjuHq214ZWR3RUQXLzZe439LVnKpqrXPffDfiqkGUcnsZphUPBDdW3B6CN799fxD6ryxcSj",
  "key24": "2nzvwuL1dS2ePhcdFJeN41yG25UenG1NFtsgoPjCq7ViGjSae2ZRdR1gvubhSnfRu98bLrVEPedWw9pJkSyfHRyn",
  "key25": "3cBMSvopw5Kr1wENUWC3mbYbpjfb4W4sc6yFSBFXRGKDPJX95nxu8giqZPdmJp7VzNuZ9XecnLSNWnU2SohE8xP1",
  "key26": "2Do14XjBTBQdZu4uYJAz2bvzvgnFnTrj3AmPQy9UtCmckkc7CgxwjczSQDNHRHojwKPiXeAqPxNQLhwoYK98dN1c",
  "key27": "9wK4Hdxx1HRcpG5b1kizwdDB315d4jEmtfvbcBjnafKhfWi5s5bmpTYMDJNuwZAoAis9N6MFjmujtDJWTZWewfJ",
  "key28": "MeNd1etTLZVf1dprSLq9vy6om5mPtZXfWqfrcGAnVPvZUVJaV3Pwh623CddW9LpV44Vk3Ay3aV95rjjVH49sm55",
  "key29": "5jUsUvcDXMzRMatwvARFeA5RbGysb6XgqMpUkc8mXsv4CGf1zbTMdN4wZpgTgQiA65z8RMRFzQQ9z1UqHN2wX5B5",
  "key30": "4RhDw26X3fpHQVT1Z2KNtpvLhpJdjJ8guucgAyahUrjj9fEyoVe2RWq8ndLop12YE8hVsbWRKttKryjjHvsaxRG5",
  "key31": "4gwRqbmF5qUUnFEE99Ph35ZYxxTPLxMPbzy9wK511uywGPvTMbPC2sTHmPMpMCQb2eizzdh2Ezho1BmCvkpHGQRG",
  "key32": "3iEGiD1CiQaVPRDG86evEpBzXC1ZmELoozk57kMKUTAsCrr6ZM19jEfY4RGcPE7v1M42LNqh89d1wLDkU6Va22Bh",
  "key33": "4PKpYAd8uv4u7FeWeDakgUTg65BfZ1Pw1TE1kzQRoiGzrxymcrC2bM9bsVZqs46TEvoUHCjj9DHmcZf8yXP5vHkD",
  "key34": "2ubmGYc4h52JE3LxJqRQtynfWx6wVbNPfRvkvoE9KfojppmXd3UNdoKatwHR7t5jM5shcnzE7xL6rW6RaMJVK1up"
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
