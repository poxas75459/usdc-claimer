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
    "32KcP2RWiSJuC5sFQL9BanKZkNcw6JwA5dow8Y6A8bFMbRNKvBUsRsyogWWRTZDWUgeGMVdZycryGM9yQwxMZ2MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZjeAvahKm6Z7jNF6te1egA1aRiGyD9XeKbSxDeAUc13XuqW7JFWaboqp7L5uGKka3iEhjNrneTFsa11DB5jSprN",
  "key1": "2FQodwSEGJksLaXTbZRDbKF1FaaSrh7TpPBJyT2UktAYKwr615B5uQWEzTCQGFEJq8StaYtGCxHKpwpKRAU5bSTJ",
  "key2": "2ZbDjknwEfLW9cSpJZ7d1F33Hz1sZ4uYpDitepydVmosE4uUeU4zKD56rUs2rTdpDhM9FB9jiL8czRVMWKrVvSaM",
  "key3": "61rKUZEQgjbe8oZ2QjoCEfbn5QD9naf4uNc7RoZYj5v8PrFMq9VQ4gefJtL8GMzk2L746QNLJk9a76XsadReVe6u",
  "key4": "xee4rr6bkoLHwMz4anfYyVQZZn3q9mmQGvDSsu6v2VqwgBcxjeoYiVu4SBypcKNJmyzK8kfTwwU1XWDBdLwn5Nn",
  "key5": "31LvobiFYHk8kfKKg4t1m5J1rj1SNssk6n3q8uABc6JJeEJw6zLePJyz4M6BGrFbv7gCRdoV4zq4gqMMVEWULgjA",
  "key6": "2tLLrgpgRQSCZMEvHgL76n1YAKCxsi4r95gV79NH1Zo6SyY7zzmap6rDuajZ1AfvMREAemqBLCKczqPywRwm7wUV",
  "key7": "3mrdGqTPyTh2Js1yGr6irA86NcckEVCXToFq8qFjvAeJ31NUqBQGA7B74KXMrs6eTkyddPys5YgJidiacds5ShXa",
  "key8": "cgzM1kwMitRz5uHgrrzyFfK4QxeUEhDQs2jH1aFjv8YPsNrHMN2BE4UwwwU8y2H2NScBVAMZmATnrabomGEBKk3",
  "key9": "43jkrkqa5DUNYskhY4thqPC2BdSW2euvF7PEFEhfmj6DJCXEwGASf2fVAHUXYdiP9vrcbVgKMaSBfRwhJXiGqDiL",
  "key10": "4tZzUAuza5HpEi6bTZQwpydNp9g7kqz4XVcxpSxRhRnuZCWfQRStdWf8c34xpB8ySxeC8wPPow3nMnJuGQeDHihv",
  "key11": "3dWp7NL1odaACnbJmLAnpwx4G47zPWSTPJhSffDaxkRwKWHc8n66Y6xr4jJ6Y2nixA9HihQfe5mzxZ4QhLiydK5S",
  "key12": "w9ymsU9bXAhAmd54MKtLTWskLRB9U3NconMbZRepFdioWaiG5cLGWVk9aQAruvkbLVDqqojs2vBbh82cqYDsQVC",
  "key13": "4qskxxop9g6jM8FYuwANVkFfR9DK7v5f8JtQhuJFcN8ncAut5k1j2mbhKPsPNYXD2Nx9LDUGisMUxxpw1QqC5V7C",
  "key14": "4c26TnjbabBPzQqFiS9xk6X9UPzonNCqnpigxQ9mowpKRWK1rnGeGLpSv2FZG77JurdWmi8bo4AVe1i29WYTP7LR",
  "key15": "4h1z1SoKu5Jk8i7QZCnVYAum9MuGqxdtLtYfwrpKZRDf78KG8gH4aZV7P5djrJPauqXjnf7fAvabgPseF3gArpbD",
  "key16": "JgnXssxxcqvfuzGHWT8nuRrk8Pjs3GfyBygQXDoGSg9517FNXHQmUDp5fLr7u8MtRyZUvuVKb5w4d7bjTvxLzov",
  "key17": "64BkUVPEnQ7ibfcPFaA6LDKENfZobEfaM76FRerAjjHzFiGMXibcvgETZVy8vTCbUxXHkTRjNnKUaXYQ4dHTwDeN",
  "key18": "4vdmdTZe74zemYisFZ23bMx3jxZoGyNshqvTHw6qwz2xL1mStNaK3GS8EnoXgc1cMWJLehnVXif4ZALzdhcr5Ch3",
  "key19": "5QT1cP28XGze3vWqMnBEJwUtzWqB5NF4zogSuaijLvVe6HoqYi921BDkC9VBqvHH4rGGga9z4SRZca5ZrVubeSBQ",
  "key20": "3N2EzNBj7o7AibrwDSByuEd9izZ7GKMojoRbJTqg3uZu1Anene3KCBdhFtrc8CXumdeVLtHsQ56KPN6wM8sXhthj",
  "key21": "Ty5jt82uvrCi2BmagfKNKprErja7JkxCmbL5t9XEqoPteLeE8U3WS6uzkSJGtZsLMi5yfrvEd8qr3Bzxqm74KM7",
  "key22": "3J8XA7MdHrKwHB6Y7VxAfmA4koyqFjSKW9tcSEc1aH6xW3ANB4kQLTEg8KYP4NDgtUUMtwyatxrxJx6hhgT2dE3X",
  "key23": "4pUWdXjSiqtuxk8kCncNytSmEbE9eYvq4QjA2fS2qnUm56za29nP24RsWGDBt5iyKZjGTdcU8PxWUuRtbhQqVn4Y",
  "key24": "xLwttz1YQ3HUChPud4sPK79o2P54DfAkLFSzdnFQ97uP7sFd86AvHQJYcEMpQz3rG5ME1GUjKpbuVbBV8yzV3dc",
  "key25": "3yx5WsEUah2RjrWsic5MUW4HcZwe1q1brdaZtt1mT9nS25w8Sdcopfq5UMZ3u4bBVu3fsMuxoLh6WLZczJ3YXUVx",
  "key26": "2GEHAS3JtWHrJnX1gJzpLSWCaKLrwWjN2Tpb98DRMoAazjVapvRJSamfBadSpAzfh1vjpwnqC9iQuftTAEdJbU9Z",
  "key27": "NUTrFRz2osTgJmNLLmXD58Lnmn3Rn2BpSheXXXd61inyWr9ZabNsHZGbCqCgcTvMWj4BpUX34pGAVqUx4SPLA2B",
  "key28": "5vTgNu5SEHrJysnGbdBcdmbhKrKS4kGR7hmCsgUxovTbNybWMX3xf7vTsRcFAo9jpnNHvmhhHubA5WMGQtALBjWe",
  "key29": "297WWMWAphrC6PpGzRwCjJAoG5QXDqD9ens6iRCwwgWRHeHKXXhgruaNQPZnRTJDcMEwGAD4vT8PtABwNMJVhBuA",
  "key30": "25p3HcD1seuaYhoMQtQ1FwW9Xyv3BYi6v4z4k1XSe2cwGg42MDc4YYefq4xg6YH3X2CK7XS8QYF3Dd4aJabNCzqC",
  "key31": "5SXz5LUQSvsAjj47Q3jiZwqvS2Zeh6mAKy2W5EGDkKYA5Ah1Cz1FQkp5H3AH9oCUHmuEjRDGgkAr1errEoTddFc6",
  "key32": "2A5adGzgCtkBWdfZoQYMVRSqQDmA2VDyV18WeaFFpenEqqWZGta5n3MZYqRkPtvy4U6RgWqF4rJpX7cSyoetu3q1",
  "key33": "2aqc7Xz7LrS8tFD8ThPKUakeK8yL6jj7rTQC1XAx3etGvU86Ee24Akgzt5tCDmv8YUEMGKYcA7ou73gFGzj6q29R",
  "key34": "4RScLBeze6WFPNj45QQzcuU7LBmzo43iEppQRgpTgmUb49WuZmmHDaNpNT3qsL4vmWWXaMJXYmbTnjcxKNwcdaB5",
  "key35": "3esetpphLLb9NLuCGvnTnZP7MQQc9DC79Gi3ZJ3kBXqTBLNT8XewCNKgNkLtr4TjUTVgrbdeijQZHawvbLGQW3ex",
  "key36": "36feyoHkfqhdtjiykv7gaF69ep9YDDJ1DtYtt4Nf7qWj2tgSuACKQNeUtdfNU9cJRjZ2hYcR6npMsxD4kDt8v2Rv",
  "key37": "A9yCiwotV3HSjW6TsQkYKkU8e7e8SDvFv2LjN6pmjY4PcG976RYfbzZSdQnDAtmFf3jbAWCBMcReJXKwDsEaefk",
  "key38": "jcLP69iUPqEbEjd1YhjSQcVBA8WWCre1xe9SrqZciRb3XwqV7cA9qYSpeaVjrj5ovw8am76ucgZz4JYyM8zfURq",
  "key39": "2TFgkpXAWDuMF5XMaA4A7w5h3YGhFBbv9PrR3Gh1QyfBrrPYCXmxmDv48suEj2hc15KQsMYXzfFFbY8Tn54mDmUh"
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
