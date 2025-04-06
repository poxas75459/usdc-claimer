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
    "2AtD2AmomAa968MiGTv5UNiZAUk2AxGV7NerpGYC6H9gHHkNexbiae5m9836XvZd8gWF7q1X7ztv5k1J3t8QUhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPb15YPqy3PAPLWgvo9NqpDqb8EyVZUbqLWikLqrDaRUB2tWU1QUfwoTPBi6w3o1baNHcmYggX85dXKpFGd4ccw",
  "key1": "3e4raXNseUVbNL5ux98eryw7BYgPMig3Ux1dPKicNg8d4BaiiVvKTMVxHnP92GayTebqUBhpR93N3XcsMKZbQrmo",
  "key2": "3HkdZqHQ7mnbGfQ1BCK2kKM5sKHDuQ14rGdBoS46rW8JHU9Yqfau9sz1Aoy6HwNfU5tXTk4qzNc8pmsj295NqqQG",
  "key3": "rwb3Zkmscs6fY4xjwoMn5dmVnU8dFeRbzJg8ZJTTShjg361nQ32pDBdSzJvbQTibCeci7p5ghvECmnzr16ogNPX",
  "key4": "22RRjQPjgUh6iBbzagy2AJ5GwB9zjQMksfvcLZCrYBMggZB4tUTXK4Zqvamtub55UGd2cZdWNzDyAAsTPybmaYnP",
  "key5": "2gRHbc5DYmpuWKEw4DNhmCN4Ciu5sKmrMzcHPhMg4P8xWExdf4Do3HCCDYvMYvcwEdv56UHzsFZMFHR42vXTZ3vv",
  "key6": "4qwprcBBQh4iaqssUMpq9c1E5HwFvc6ZeT5sptAyhc2N9u499JuuhdYzsChGr2v3pXrbRt35shXiRoXH1xdL273u",
  "key7": "4neSaEcJJ8hbjXFsnwYJ4jn56urpMP2qfSV6K4qheX2PAhDA2qTeXtaaC9ajzXC9WsPsNtmi9NnJkb8UggcbkBNw",
  "key8": "5DBNh2J1kkKmubH3c91SFTMpA2QzWyBDzxDheho1tzrYuEZrgKbMU8LfNUA4jEWxpYZg1tP7gopk1CfLzysPEvDr",
  "key9": "5mBSxFmyS58yfbEaUmoStyp7Pk7gFtob2UgqqmdYW7sz9aTmE4z27C6UrPbjyUhf7Ki2gW6ZUquoQ78V6EqE9uDD",
  "key10": "67pu7vDydAcg83wzrGiQNoAM7XcAGH4CXSS2P1cjaZBDAG2cKm4vpSksRt8EcErgLRx7BfbB915TWtjxMbid43Hz",
  "key11": "4iVT83ZQ1GwPbL3RzEZ246WbtV1tgBVQjTYTEHEMYqmKSxRK8zsggWuenqE5LiQVcVUEHFuc8jE4QsGbXx3Xw2SE",
  "key12": "5wmqccVf4H78GdJVEJm29PMSUvjYFfQHztUg4WL9CKkwsyDRnRYkHL7pdjfwzZV4LF5ZCrEb1KfhNWhiXp9iRq8N",
  "key13": "2B1a6xzU1jAfyCsLqxr2dqoGQV61XWzzhVjucwzM7NesQeargT6EwsnM4yyb1ffpXFrtZHYtmtSVrB4Sz4HMptx4",
  "key14": "4TsLPsxbBfinE1b9B7VynULwgT9tMYFwed1YC2679W4e3hCVCgA2o9Dt18QNCtvr3HvTDBK4q9GGhjYhxGEKC5A5",
  "key15": "3F6mSHdEBuuHxmFFCecWY4d5PnRjchjQrYw8KwZ1Ccp9y8RmSh2JHF9UTn44JgahY9Fj3LQdPszLYRaRByiALiWm",
  "key16": "2geSmJQm3kUxJ6ahCsHCfFJYvoJ99x9abZZdAFFkSCBsNJDB7KGQ9Q6qV8sQVimkaFuCkiWc7C3L5kQrUoWvdUXL",
  "key17": "3A7b27AvYbUvZaa1aoWHWuQ1v1mrR2sAaVKgVKu6oVccje1iSFqBna89FEJp7dL52NXQF7ZUWyUXnFYq44WZXV6B",
  "key18": "boNgpgY5KCeX2FyrS9imwJgdceDGDiuxZF6xVh6AKWdsRtfSC6hMfX4aZfDy4yPjYryMVyYBDyQMZdJfkbrBLTR",
  "key19": "48wvAA41KjLbfdAFerANmoP7jbDkMqqY6AfttjHCNiNfqMAKpDuqZzp2jpPQUJN7FRbPwvtjEbCmaqegpXP3STsX",
  "key20": "2vf7FgzxjTKk8kvzvPQf1Z4SsZcGBeX8t491mADusdkmbPkBi889yzosmDJdSt974zs53pgsD1gDDvd4Mm3p7fTP",
  "key21": "5gVoV7gmaYPRGDSeazNoEpMtxvqpobce7KHneExeHmXk8ptig1VVbAy6bHfNQqiBCmK8Fo7Heokt39ZTMKPS1eJG",
  "key22": "29kXAVSqLQdqkoYS44mBe1YuRkauXweJw7xsF6Qmo5eRvKrqgJB7ypmtw2BowN8eEf6xAB2U9JudFsWKpjnyGj3T",
  "key23": "57Sh8enj6PtHpJ627zbYFs3k5GnSAemjXdBmbf3TZXkrZ9eLMoRwxd8yUnh31sqEmvKPRR9uszBV8aWeiJd8WzTM",
  "key24": "444srJi9Zkq5TpwFiDtxzWkKhvDHt2ZaPhRqCTHTt5MRJn2rdLpmsCSJ4369fs2ZVUodWYUJJ8RgcLkMCJ5CptD1",
  "key25": "4cuSMrSJ6Kee1Xvb3CBjaykcAfkYCngLGxDx43TDd1kGEvHUPTuk7BEA3rRZ9JfmP6wt5V5oFbb71ho6DB1SzVg8",
  "key26": "viqmfcJLyUfPgZLgWvFwt57MFuKU1efPwshRbbucKdz9TPt2gY4BwEdToGC8DnAoHUmASoAqf13qzn4R5KsBa5N",
  "key27": "TMpxqeRLHeSwE1WcyYd2pYUDWdz4QyvZfPGZx6wkpp6aSrSg9juKemwQKvHgcq4jGQPRjRn7KJ4hr4sRq5KST2H",
  "key28": "46RTzw2HpmJQLbDV5NW6e5fyXKwhJXxq8GQNBhYb3JjEuK3kBBHTmb56hk6jqG3GiPBa7ovmKCLYJcg24DapZWK",
  "key29": "3aASQed7jSqhj321L8cTVJFe2pfZL2CMi6i5MVaDKMezUsYxG8AZf8rBqwHf2rPYG4rbSJYEAH2rHVndo3sZk4q8",
  "key30": "N9A6NnFykecAqtgSmvuEFCehgCYFpUne1FcHeK5dzBnhiBs27sHNGVZQst38qmnajQzdrkxsa6rYa9ALGQ622Py",
  "key31": "2Tz8ww7yGsCTRPuz9iUKZZMmnMLF1bXwjnQuNScLK5WGWtLv7o93evSDNpF7jRnJnBTjmy47BpmgQsyX6mzTsby3",
  "key32": "2xDSdZ4R7fZCdCsvx3kuEEe4xFXXYbHVvwemneNagv3v7YJWSCmoBNPPmoFXMmatM6FbZAbBkaF3Aewgzjo82VMM",
  "key33": "dUVZ5affwaYBMjxE6t6VE2xUeRwvA67Lu7n9MadsMPp1afXYkCKfB1eMVt59o6ygxJy6oRmpRv223AGnev1NcCM",
  "key34": "5xHiHq6hRNNEc3N5T3mSUvJL3g3eswHjbWLEVGT4x62adveXaKfdFHQwQsBSLGLzHkwEXPDiYKpKoPxca1tk7Gsp",
  "key35": "3XJuWitDQ3KpE3AhMaLAfJ3JkbsYmoUN46pQv6puzLEVsiaYS9Rq3cw5EDmmYXcmugPAgd4QftwAeHnP1kZWMZ4Q",
  "key36": "3nmv6mQbkg7WgBr5wG1hHJH5M99tHqvHyku1cL1UABV1caDxLwkXyusmZ97CErmVwzwNDdfgUWy4et89CBMfTPhG"
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
