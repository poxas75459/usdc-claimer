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
    "3RVB9zYqVy1SpZhuvAr6nrDdQSyWpXqgxyz8cGkSjnwkBmv3ZnR1JVrB21fGQDrWRby8VTd8AJt8rU1RoHssKHDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BG3292Fzn7wh3ikTZEHQgRvCCH2sUHUeAfPnKz4cfnPrkajEn4YuwK2okE2pBKrizMHNkt49e8Cb4g6qeW6MM",
  "key1": "33bGA1uP57pTAwyjTkKomAGvhLiMaPR8pJtiDpHNyaLuAbtjMofoekVuRFKXrfy8pGxT77pkzrSH1gZtaVjrtyXA",
  "key2": "3Vt74cbQQdR4oeyadXnRrd4BHUZdJEESmH1SCGNJbvtY7t8SmR3Xrm1SHhAkb5qPsy1aZYzKurs4bb1DMzoiLrKg",
  "key3": "2V1aZFLGMxTSkASUsDNghn38VToMp6XdQiMjfRWdxQtx7P3nkM7mVtVPKh2GqPyfvGK4vP9bYh1DzC3V9wXqoXTV",
  "key4": "5inaeozAaNvZfjaNt1SNy6NSFJrGRsbaQ8TCzBwuEcmj8nX47uDKUdS5jV9Hq36YzCq8cmNG7mVuKhB4q33uhSSi",
  "key5": "5ojtEjQYd59hjv8AXKWMMTv7CgDtwpu8criUweS6cJVjbvUieE4V4hA5X96hppwe4RbWeWH1yHGmoTzSPsNugmvS",
  "key6": "3YBtLdv2kaqgMUzkYWDACr99NGTC3RkxDLFxP4ndX8WrruaG2jfmHgwiBs4g7dqQFszWR8hcCJBR2sNii9hCvpa6",
  "key7": "4Cjq1j7QJwoY8nEi6sACGVzJV38nab4vD6itNXWfQNEg3hqntkzn1VfiDdk39RrqD1h8ibZBo4NYziXpJTsULVtJ",
  "key8": "3GkEqABgGYTrnvxPCbTgpkEfkH9iZzgqjC18NyNQfMAEaELXMYsJut1DYAnoSmt654KYrQep9GHaTTXqnFYp33zY",
  "key9": "2gDJ8BXW1s2J3N8mTgXTUak8CohCLkqJzaRaNGvVWmcno551B9DhNfVcpr6Xcy2xLWraF7mmz7u6MropHktmzDf6",
  "key10": "3hBF1h5thyhQ9NQcQrX2LnNihmXRJQDvuf9Ka5HFoyAHtxnif7Ug1974SRtGD9eGPbSDuV6HtRxMmZrXvGNKFmPe",
  "key11": "4GXDUQjEEwVvWdBU3Et52Z8nPZfKpfNP6UFzUnzNyzts5JHvMzPx6TuJmqmhFw4LwNrYWcQxu8Wp5uYgUFM3dvX1",
  "key12": "3dauxccXRdJaEAivSP2Vbgqa6bSEHtFVFEE2B71LyM3N2vL9kyNDt2Bt7fM7EiLQ43CGQhnk5a9vpRiWRzUPUsQB",
  "key13": "4WCPmaU5PGa5KkAQSXn6RJtaWaL3LTrXF8jbAkPUtrwAatVhPATSv1XWEeR3KNx2cK15xj3CfvXjpRZBMSN1wJ5N",
  "key14": "2DZ1asLYVsuKKvxDj4dSxXygFbV9XsD5cuddzqKSWvKNAQ8GkqtrRKmEJuqdWRrs7JjvS6git7eXFE2ufUtKyDkH",
  "key15": "3P7MsxkueuMpJgg3GDfC4YW5cNhNoV1Zt8yResqqCZ24Ei5akELW2jWL8Rz85zj1JwwHJQRV4EJUqmNfUetXN9oG",
  "key16": "4xcpjsPDWnpr6ML7mVa8gx2JtRs4WuULy76AfmuKcD7R42RUnJtsixFCuSfZyd5XrhkP5Ve4c4kLoSzeUo2aT3Wr",
  "key17": "4JxqKCrzGjxvdVvFEfn6gPdWoL233FEDZoBY7xxcpwMQPDUtsXBRnejTQ7vGpnePDt4t3d6vMnVQKkk9w81wVJLV",
  "key18": "E3QDC911zDcdeoFm3NNL9BXtYDpJ19k5pYvB2VtSBtaTuGEF82CmpwoyRh5sEWzTA9tejrvKTyvjk5VgFX5L7Bb",
  "key19": "HjyuRemph7Cz3ydh14Q1dhkdQrvESMQcpcWzmaR1p2yW1o4J6cX5uK2jkdLyasDPd8eHqjrvf4gAoK8ejJ2Kf5t",
  "key20": "3jSMvCgEZAP9iS7FfzqrPYNapkxF8Efxg6vEeWapjtQc1DTwQMs4WyfihvfyrnUfYpgXeWAzSRFvVSgHZBuhgA5e",
  "key21": "4mAchK7ZvENdJhzJKyUYxkXNV1RLCmsHba1aq2uKesCTv2mJ1SDtKN5GGCJhd3eD9y4jeqg1uqxqBLyjQRhu7FWC",
  "key22": "9Z4MpQai7V1evPDbSDfSG1PC73kR76DvwAYF4rQa3Sf8oezHnEGtGAWiev6ZjvMznqECxEGj2VCiPCawAR2BJE5",
  "key23": "3C41EPN5VPDFGbDkL3k1QCRac3YiuP1d3gVFeDnEUKsg2TfMvqmyPmzvdKWen9dakW8mVZ9ibsX6DFfwiAQndr4h",
  "key24": "3VHsnyraiHAxe8Xyvk3o4hyyP6roRk6fe3o7xh93cMTKtcL29TEq5E1BeHiQFtiQDqJ89i21upAHhVzoPYwim1md",
  "key25": "tdfUWF3YM2FrUGAeu9mPmdsomudS1kGuUbpFCR1urU6zxMHxqGbU6zqNPz56XsA6Y9Rtx2MYxudza2cYyCJrHNr",
  "key26": "3L8ibsWzNzruWcudMrhmkawsuSngCVBkbDoUTCAQoKGnjRndVfkXEZCjQ4QZXt24deTUUW3o7BDsKJxRGQo9TRMw",
  "key27": "3j4nMZuiwPFQnaiq4m1GpNFbnKe3fcZVfmVCT8jMDkmWBgoMXNBn2QKwTKcoYV9rZRhBKfrhvBEFtSZv7xRRsuGA",
  "key28": "5DAxcSzEuBjkPcgRJbzA8wer2ex2CsmoUG1MztN1QLJJy5f3ZpQAKWUf9uJvL6rGCFRTPo7eeTKWumqjGFBrHpkv",
  "key29": "3By1gDQqJ1tdVP1uj6fnCZX3QEt7kxj475d8XqwcfCukijMbXcKQjax9r9hsodFJ2s47SyxNMnq53pkzozGik99V",
  "key30": "5XcLvDQ3FWVhtqjXrhxnGQB5WHhonidankdwg7MLM4XeKCQzcoNxaL66KTxX42YqHJZhN7XdEPbNJdHTf976j6bQ",
  "key31": "ZrnTTYUjdVE5RX4kZ6bRBoXBYDL7t8ouNejQvDoGab1HrVMaCvEvP5hp2uNpjWTaPSo1DJPJRvWCScQetzxrAHc",
  "key32": "32Tp3YCvZV4TtGvYncZUSVDeV2rzviFxX65Z6xrTxwTbMYxpCsScngNcwD24sw4uJHcRyKR58anmczeGNPnB5LxG",
  "key33": "ywrPLaRi9nPVmSrUghsaRxkGe7uPPcJ1HbzCHyBLrdJyZi5MfCHeWyrx5hMp95Xf7KzGZ5zNmJnzoNXFjgtSFfe"
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
