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
    "4CqJapEpweKGJW9DqEeBEADZcoJtBPRGmB68gxQUeb6Xcun4W4Jtds7ZKDShtca1du35fWA3JR8SiAuarxvgVnWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Nq6CNW1TCTXHqQ9cuRTdNCkbdXQ9sv5csJMVnQSkNwsASwxZjko47iqM6dMDKgT6Zj3hgCR9sf1ZL8Roy7vJ2J",
  "key1": "4xBhBdQGCwgyywLo7dwhh6422FBhJ4SgBtMPku3HFoMwT4JSTJuwzbXUfgh4s5x7DiqZRsCxXbho5JvLEcnrRDWR",
  "key2": "5J4tbFjwZPbhB8caAWs4D8p5ymYGH6Qh7ZZEZRpSYn7PQuhWic1XCtKcnr9NgmkukHSknokJEtv9E8teE5Vxb9BR",
  "key3": "58dktHki3NVvfXp5uLGJR6VQNRN99LppMGMhNKe7aYCoH9PrqqsxEG7in6apeLFoLRGwtiHA4mdSsMjrdC2hhgDH",
  "key4": "3kK8ihuavfCzy46k1bHowYZjVTVSzXfNkbWGeF5UgmXoxDPKLdMVM5sZCiUgTpUh62RBPvJeKAQy4TZ6b5y4Q9ya",
  "key5": "3NgCvMnpLA19Be9KYVgk5MNuq4sYETDLYotpEQhe6MXKrwdLZD46XkHLuWhJjnPw3oUodNxV51DZZGyaMH4JBzq9",
  "key6": "2cyg33FyJNFWHmBc4kwqfLb47oXjjPHtVe8dQBozELTKHmWJSmWMWAaSd8Wuxu29d3U6ynGd6RkwTFT5JEjTmWLH",
  "key7": "2MEKQLND3rH4zhZSWHiZmJZgQ8tmdXo2pL7kEfsR3Z7hUj49wmAKZJPSfR3e8iR19gUgfrU2DoiuNxxU9DV1NWs",
  "key8": "2Us6qsPrkpeFerQMcSyGAYLNhcjnq8522VgRBWVnh7zhWQNJSYzRvF25RcXJr8oFCdv1jwH2fSR4vRXqvhCvBY62",
  "key9": "3ZdLfkC33scNZF7pz6sNhshYTVTq7FVSK73DonyGxwjZkHzAUFqJQXutNrYAcszwuYWPdwH1wXmZLJSxRivDPKkm",
  "key10": "6LsjtYAp7tVdi5ANQDZP75Ph1C1HHUkubyoF8pBXJGGx8kQ6XY7Zwd5cbfiHB3nK9WrYiDzzvJ6C61hk4J7hWdH",
  "key11": "5zC9qpUU8kygRZP4RFBPpv7Y6E6bW9Sa6YRS9Ckp9MQg2UxtyZS8X4vb19S3TNUhAiemD5Z8u7B6CDeC4spvbXY9",
  "key12": "4JHdCrSrBuZoJWUkcPmNrBun4wPR5vgtPnkK9sMp8BQ485nfmvoJ2erCjhh1bCtRni23cZSn2dKQihSqbr5NpcL8",
  "key13": "5g3is2oxXbV1ZTS7uMSkeAaW1LpWwV9Dzxg8Z2cNVuSommPTLFVuY4tfeWv87TSxjr3wzfjq73RvZyNU7Ypzrvk7",
  "key14": "V28r5pkBdM9M5p7nU3b6cLBtnGdzCzKs9iJ2pmQjbgGo63Ustpj3xVLyzRxMAHDtUH23wSYtHDqYPG291CfKNNM",
  "key15": "LjEidWwM26XTAYyLo3sQFUisssdhVyo6mCs1mMTcT9QdFu9eAZXHuPa422SqpjvScUibYjCJyVwyKNxWZ68izNq",
  "key16": "5hJ7oaxCyUzqgWnhxbNFJ7pL6DqMtBXV9Z8y93RKFMEnyENTd8aphASPMQLka9NSYY2wmNk4b8GmmaCrMWWLheQB",
  "key17": "2nqnjtHpLDm6rdUerXkjYKS7APuR7owZPNjree8bV1bh8gSq3Nt4GLEfTRPZM1S9iDJqbqMZhTMQ4wyscSK1uMHU",
  "key18": "5Qg59grujoBfxXYakV1QPEm88KYr7gYDQkSCqTFGXD6pyWXmapJaTgbGcXN9Y1tzh69SHnjjfnuE27zee6BtKwdZ",
  "key19": "43ht26nH1J5PeqcDZkCoGs8V5qcpr9sdYZ98JnoC9VJ4EPxx8589uEVjb23Pk8Tq3jWXBE4SczqjtdCv1KhmJub3",
  "key20": "d8yrJvt6aKp6b97QRWcaPVkBvwcT6hPast4Drmv9vttMWQzTERsx68v1YXg6myxMGe17ZDZqY7AhKCSrXSw8RWJ",
  "key21": "3NTeZmTaXC5esUU67NBpHwgUgEYj7e5rxsRftEk5Z6BHibP9JyF3YbRigH9aDGraQWuP4U6QcvnhSdJZrUe97bqg",
  "key22": "4XV2NEfjD6muHpCD99gSD6ABxVE4JbsdEnY1ztRPh2LBgdEybiJ5PXMQr7mjKf7xhh7XPbUv8SwLi3Ugq1yKhrBw",
  "key23": "pM2hcwqc1Qv92FLR2FaK92m9CzBViCdrTpnxkEiDmJrRbdBxn7yZ3v8pBsuYrBkign12jSjek3NvjQQbdeFz6K4",
  "key24": "5DTShavSKTtSrWd1QdNTTMd7bUmrGv1Lp3tT1sr2tC6GkNu528yhnSutMYJQsZrXMvpvXSHQfDBWsr6rECmSLp5x",
  "key25": "5ujFPUdrcurkmbJpwDtrUGZqUr29gccxBRw41Bg8Nw6w2J9avbV4WUvUFbx9FhZgwzfMMUZDYuyqZzybbMYwt9vk",
  "key26": "8mynBzHeteajvP3oTNapK8hCnUTggDaXQt4KDeRwKU7JeJXaLGzeqSy34icDAacEvM9bkBKT8GzFfL1me3nMoXS",
  "key27": "3bxRhByZMTNExrB18azYaxvrJyPBk7j6y3gpToavjf7PBWi5qHtZW9SpnYzx8CFbg8Gu49cPRw5FCERQJyQ3KESF",
  "key28": "4PTMFpT6HwhvXFkTUFHNn1688Fuf1u8eSBcPRDVLo2hNqxhiZKj8Y3Sc9YjV3TmesZY5JMectasCn1dKWQ52BCAM",
  "key29": "4QWnvbABxFUYPa8Gg7J6rabMbcGyH1ZEgd3aJSC7EWLDqUpU1gwDSUheDVt6wybABy2ZkkxMDHbjrK43z32vKx1B",
  "key30": "F78PY27spzvkdKa4o39zAtxb9uFDzwarhvKmvA947G8rJAUNMruaszBvnfXvK5DSRHEChc2R5V6JQ82nk5FBHXi",
  "key31": "t46jmhrEFRXit1kwbPz8Eb9Wnnwn6XVc2UWjLaGkQzSNbJBG6rrNHV9gXqhXdSqgDqFwxNnrF412CR9rcBK6ogR",
  "key32": "3iiCJCF6FUsS7davhJ6RsHd3ZswmdWe3akj3fYmbrR4xpU9dXYH3f6PFtL7vQV35eudZQ2swvjVh85aw5qUnH5ei",
  "key33": "MWks346mzaucgyEaFYsJkcvYWEBb4BjF6hPQDci17jm8tLtiC9SHTpudVfZxt2ArqvoZM1zdrMHR43ZiHnb5KiP"
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
