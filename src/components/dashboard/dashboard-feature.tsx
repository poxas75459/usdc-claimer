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
    "dSNGaMJ21sGaZsD6vh8Fa73SjaHFBQgReDLCVbJwFm8nzmd7iBhM9cWsgVHYKG5hSEy235xQxVtnEJ7uoivu6ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yuffc4S4JaN1roq3P9Fdd4caoYREGMShho5at2eTvctHTSpDBQHx9BPUkaFTi9xxYwCyvuTFdRf28Lm9oKJS6FD",
  "key1": "4iLazmQTcKjizk56z7ewHZNcbh3oGKN7AdZnEXr5qCbUD78GfxyR3y3W6GedD7ZKvXCBMdpFzVTFW72pLyg1djZ5",
  "key2": "3CHWY3ExDRmQbRWTHJFitvnEgaxgzwdGzSvJSgVxuoty9GEtJgmCoULWGqN5Vpd9dc1Vb3AGfnP1k5Jzvmrvjt8N",
  "key3": "32tKtxb48xwbNfYt4eSzD4YhHCZHnEJxRDKYiio6rXtJYD46TiYBWGwdwKCv8Dpe1Hp1VM7UEJB8C5LhD7X7MUSU",
  "key4": "5De4s833WqsuuyVcnxm1K8dvVktt5APAiUNV3LVub52YREpM2bDctB8GAXuc2KQcRmxPE4kyso12bGM85oetxXnW",
  "key5": "3ewMF57y3V1bS1VsCv5xh71ibqzC6i71pedtsbBU7Uh3n9TpNYrWCBSTJ9eDE7E2cA7sCZv3BdnDVPjF6ua58SPe",
  "key6": "6g6Q1LoHaxFjS7vxBkrgxL43CdNf1wwUhzpYGVxK41uniKmdJ9Rk9rqiL29ZEKoU5hYQawmREsTFFaBAkThmH6b",
  "key7": "2wto6Mgd4HrxYENpipS3iVfjArRKQrStXppLk2NbAfNN6GWXzToEwNWyRvXpwYjTzWWtr6v9ucWt4q3C9iaN6QBE",
  "key8": "rdscBcFZYBYjuAhS6jzn7zxGjnyHvCLSww4uKRxCxahpUjJnycWCqq8Ng1grPUrH45sfaSqPqmX3d8Az2LRa9YR",
  "key9": "fDf3gsf2bTgCx3KPhSei5yVa7S2sHZKsaQTk1EN7FFGTw5VmgtBiDtcW9nu6vyAGNnqM9JGjun2mk1mhGbn9SLi",
  "key10": "2Dd3Zzv3VNa13TyhQopD5CMSgLe6L17ksLWQAiVXp7k9ysbm8wiPoAgC2DijtBd51zi2aDZwjZNnyTZK1qBZQGFY",
  "key11": "377PXZdDG7d8tTNKhJH4gBvXfNgbAMJzYVG5TLMnSaZZAuVEhPELWfw7P5QHTP937inUHPxuMC98DsR718YS4e94",
  "key12": "4PNkgtEuNo4q4hHMTWt9iRJtVg2EHiNmpQUczfkZgcHSZX7GaW1K6ZQ3iiXUV7XjMz7ayC1mdCay3GgvXfbwcZ5V",
  "key13": "2zfp4hJxz1aBD58QT3TFtjKQZNGbeSMYmqDHcrjwa7ukYZ6LgECpff44mYcVnudpEZXiLFQEuTnNuASoKNWtXAR3",
  "key14": "2KHsBCM3d2kqmYYuU9pHDVNtQ2DphGtDzosEudNJGqFGZLvyqgDGar3A1jDHw53wZ7kSPB4YwZYeNQJsM4kpDE5d",
  "key15": "3Z1BerwrnQ5kbWYUiKxJnrU7QXxtMByDcDW6RdJgedN6kmg7FtgrfhTVQtsgbjQYH6XVvjAmzmjAVjDMoL8gvCsn",
  "key16": "4NaUHVtDrNZH4M95H62M5TMKeosuKfqY627g312oEA9ibLXC9ymAZSPpdD8PPeVFEr2vhuT87NRVJYAnWXNkeeio",
  "key17": "3Q8RMrUh1Sjp8aTTUCJwbHwj55MjtvMnuNJ42Gaxk5jKXqhFWSDa6JYAqBFbdnAwJ27wEaXqWRJJu7cK42e9v1NK",
  "key18": "5fS6c4djcywb14QN1vjquSnY8rzdhgvWN6a6duquXJ3vMYAAfdmqs3M5vRgX34BecZrYucG6VTTRq5wZV8HQLGns",
  "key19": "5BV2KuXYuTryPnHoYK1p2X65Qt4fR7vyNd7dKCLnovVoWAYUxwQsmuNEjktBVQVzhaqmfLV5f6NnQ9afpy765UqT",
  "key20": "5yq2FCjrGzNpdxW1Mir8C1r4UbHHgG2Ky1NoXpfRuJRgEkqAGsFQM48u3ojScsC9zQcYCfQnmAGH4cDpiVsZvAFq",
  "key21": "4oymipiKiHztHEoukEpW1CfANLhRbVewZc8Fmwcc9LwoCXQjtrc3xNKtAvoMgJcsBgVzUoUTfaqKtypXxDKycYCw",
  "key22": "3WvDY8znMQWrN74V9cS4N1XmhnKdJ6dZXS2e5xnBW4kZncuzQZgkgD82g1g4j9UEFeGRkniwyMkeDgPWoA9pCNYG",
  "key23": "2o88cyg5ZZgGYK9rqP6uJtf6vfv6DvpyatfNv2T3i3RNF6KKZQHT4gtJ4nNPdckYvMXLkCf5YU8hUwrX1Sx8oYr9",
  "key24": "5nfhdb2UuB9xrspCzKA6ZRe85hwNiSSvDEXrhr3ma4un7nXgrwFKUdY6yBndFqd7YjmfTQVYJXLkLFxtfwGBwL7w",
  "key25": "3Ws1wr8qBxc9VK7fk63bmph5k6w6rs4oCvwK5YBugKKKhvL7cdKsUWSRvR9c5a9qkTitNoBu862tpy1i4By5nxF2",
  "key26": "2K6j6wQnjtkvXfg8M6FmRYV3q43fkrdErykkfb7EpMMK6QhtZAuB7xjZob4HAesfQe1cpfmkmAMRPYn7d7FV55bj",
  "key27": "zXTQw2BwhTJo6KtVZWTGRagmAA3Yrdrpa1z8KYjzMGsia7mTqzuXY7mDMjDMYomtFjbDPG4znicktFyi46RSSt6",
  "key28": "4Rwv1wJVrdAzmk6wLpWSmdsGDBAMiHLkguJ78Qa41doGD3wduJk7DYRLGt7RJQoAukDZwDdDppxpCjsToexLiSpr",
  "key29": "37vjVGSUGCsXEFpFbvppkKSkmJ5X7iLLWrPtH1AdxJL435xAmaWwkCaXmGq1PTGPDaDfB7c4VCqFVhRSutLQMkhH",
  "key30": "5wQXVwkNbxhA5WJc5VerPxvHwGnHemkYFj9WVc7Y33j4kf5imAh3yerQXFPMdULBAM5hpt3TFYqqMmcsXrS7DiaQ",
  "key31": "37YbUH9d7f45zX5CGSW3GrE2ZrdXyHpAZ8FvV8mLC1bYkDR8TZUbcGCtfQS8pobuQr9EALZbQzSkZEsd279bdSkb",
  "key32": "39jy4PEoi3ubiJtR1z46KWftZhMh9vBBtmoLg4NqJR2tmB2xSjMKeCieU4HH2CMEoGo1MfNA1gpYLwxwcAcYWBZt"
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
