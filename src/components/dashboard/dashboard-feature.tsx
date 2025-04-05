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
    "4xr4TeFT747FMiXJZoRseDdgUVto1aZCEn1vCKHD9bXSCQaiHZrAaabwLwWHABNkrYgRkRucV8kKi8NrvSfdfMoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nivHoDe9AedgXKF4vMeLDefRTZEFeZvDPK1vhcoYe6Kv2FEVnhWPU33E32Ts4AkYUdWtVhkkPmY1wpfWW4fLwGz",
  "key1": "4TfXcdj8H2ycYxPt2bSfE7btK61BDhbbG8dVAe1cgXSmn5tRPqmLQw43wKmkHaf5ZiXdMAarBXqiYmom7sKkMqR9",
  "key2": "3vVKaN4qwFrpMUeWnm1f7PCaAsbKQSLLJKF4S6PPbgksJFH8UYM7cuMwVbKLhuMtLdKDzsebW9TM7b7np8cwbbLg",
  "key3": "2ayNLj3k8FiT35Zn1wtodwLyJjSp2LGQmchNjgn1W4ViLgsZjxrGDZP9ZLTqexXT83apKLYggGQQQmpeZpFRAE52",
  "key4": "2wAPrVhYqx2uNqXQD5BZPCZCmrJSP8YYXKgJBsHquXZVvwJcMn9tHpDYn1vpr1zNEEhcjLyGZ2NRaxax25VGCHcW",
  "key5": "2DYGELDB7LMxDfZo33AHzhsMvcXrvb7FPswRgp59sTypdHJUiiKd7kxUhTahG6Lq1JRYmcbcJrAZk7QuzAsKvNj6",
  "key6": "239r4xwerRCVQhzsJ24qrt3pubbFwzM4AMNz4jKGeSthMGBnPB9nXZzHbF6Awni49zoDYv22WdpNxAVY9BMjaVMT",
  "key7": "2mY1zwcTc6Hs5ZxW4vGiSJUSLeWNphMvaBqDFoHm7fjLpWo9aGHezQDwzYt6nJdvg2XC2hXiv79byV9xeJeCPXEZ",
  "key8": "3D5Z2z7tQ2EBue8Y4kiianiCYB7CtNDHg4vPd5Ryj3B6sMqJdWMfyXSZ6pv4ewoWGK9HrARyeYntxH6UKJB8fUSK",
  "key9": "5H6VKDitFTmzUwCqzYpX3izzfrC336gfiDSqVPT951hxWj6VZub9PNaAk5HH7DH4ofreDsVMmG6oEY12o9hwpABs",
  "key10": "2TkJ1mTebnndPARQW4oq7heMXssbpFDfsi14AxEoASDzxnK9GhDLPErK13Ts1Nxt6b6bVsYuLfJVNqJ7hrY2u3YC",
  "key11": "5qRxgZJLmzfVrhWFQcQCDCncupJMqBZdGAg8U8PNmjft1NHSMFWfFQ5BagCeP6daLTB1uoCcDUTYsrcUKaJpjkHx",
  "key12": "5c19snEua5N6X1vFf2JXckFRUAwSbC1FUH6CJ9jHGVccYQ1zjwgWhbu5hmVJHosC5R3gTYiPVNpRgLQoRJRGT2RX",
  "key13": "4GSWGMk5i9VpmvH8AHH7BrNHsxcvBf14THidsmo6BqhcpWdNeGsetxYQrH8fN32NrutiAmAuuRQoZtoy9A8j7VJj",
  "key14": "4mvzruHq1JuRfiBo4nTME1cXn9qxcPNkfJ5qVaQEf5MrAbTg9DayhZ2VpyRFMjyx3z4z86L94wiJxnWcpbTX9xg8",
  "key15": "46kx8QNLnXshnWkEn6uXtf3V1zE2vHXFWKRb9dP1dNfy422AJGevg6S2d1TQw8gCn5yTRZ4moFDx1n4eEEyNazH4",
  "key16": "4wmj7dqpcW8e6qnnJ9Dj9VSCtFvYpyPmws3j5z2dsFGhR9H9bSMmx88cGSxbQ1Lu49ac2dHacZkPNCz2kTedUDoX",
  "key17": "5pyoJGKoo6oixopmCGoACd8fUZ1LLkvs3hr2Ka2uvDd346vGCC4hE64xTY2EvWZMLvHXQqR69npLRv691aSA28BF",
  "key18": "4AJk9edrY6i6X4GdqWP7vVcsXYcpKEPVJviGV3WJJSJqTcuNnViKuAfKcgVazJucci5bogzKc5R9wgWBtMW7xGD8",
  "key19": "3AnjuCEbmg2T6isdHvQLqLiJSSkdwbPFCpSf5gmFK5mG2H6JeCce9MceiDevkf4B2nm4Erfs2bJYhVvye7LnYuqo",
  "key20": "4XXSrmeHwMkLH3FoZwDj316zQMYruSMMhaDx47PrcMV4wPGJ6x2yZB64Gw6vpwSZnZVWjtt1aYUHCQpfmbjN23b5",
  "key21": "3umXfiQn9dztKr7VeLF3trEmJgQsMD8cp55eLZrsCM6svrasaEAzKmVg64B2ru8ukPjkULneL6w6WWp2KRGKG4Lo",
  "key22": "49KAsG9pa8Rg4ky55gMvUDsSJZjz2zsMo76iYBBuszfCD8gyrMz5mzGdWt3mMgxsSp3xDxd9RotMaf9x4WUoLwpY",
  "key23": "3RSDpU5Gdn5bLFkoqn2ssbUSAEp8w7TqJML1Aa4dBMQF5MqcyiebKbJQZSjMGddYmYSxFWLW7Ck5RnmGsjsnjbSK",
  "key24": "UxZ491Sga9iadpBdQeFoScBxv2dRqbhz7ffR4vDNVjCFueyMFc871kaq4nkRuMKtRkN37zwdJZomsykBEjvW1pB",
  "key25": "4cqgdgN9Ff7FiFCz3bXfosBoFkFa3tsj4yatEkcCkpk3jdfX3hwyLozMNb6dD84UdMNaqM4z7esMCaR2YkrEfqtf",
  "key26": "3FuBGamyFoqHd3mSaVfo5iXjLYrVvscSPDDaCBWpkV3RvABefSkwFXNboXqewWrY7ZUqe8PBS9BYpEnCXrKjeR2z",
  "key27": "3Sofbt5ZJHjPQcP3kw6vHtHtonGnSrZzc5V2Am18ptwV8KrJmiPkPBuhLvegVwGUrEH9mrYBZgw3195x1N7Q71B8",
  "key28": "5qgThXy2pQm4Zzv66R94BFKsXG8giD9tX4xu7oAhAUkWQnKxRrZyrjHx4d6rDUXZ8Yyv4QiM1LtrVaAZdpzYL8Vz",
  "key29": "3W24iiCG4AWArxBpHYwfQvj4jcPYniL1tKdAAunM5bTA6WbYiMFcN99z4eqo55DFUzytyy54SDYPv4LDfy6M6kDK",
  "key30": "aSPgG5sJvRWPd6xd7fDaNniraxuT3jjgYZvn1MxBaZEwid2N2ciDgjwU9eBq7JfR1QFttaJJjfSraCBHhNADGqw",
  "key31": "55DzQmrGy49TMHGfQy9vTH5nwdb5w4i9LgX84DmVVBVf2BaRzc1tuSo1eM9fXszZ81MMqXersGwpRhZonnq73y5r",
  "key32": "5A1drWeUEY6r73ifHC9mz3K2QdyQHu3GcAQDtuor8MSYAuAhPQFn9bH9f83e3jwGpEM5BdrpiZnDnUFWxWYv6AjJ"
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
