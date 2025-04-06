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
    "BvQBLWRefYP91pFpUJD5x5qA85jmqnMSvRAvGS6xArDnQqAPgKJoYF82tN8ErVvvUZUZXiAQB88TLmMwtyDJkT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cuCEs5XWMS1WMaNofzS6qtXvWBPok5qY3AhbFcaxR5hizKchewK25y39pqA1rHouibzc2doMExCDyqJ2UrQufdz",
  "key1": "2g7N834soznpwxNZuvrbZhjLBPuURNacHsBFwUNX1cEyFBc9uM7K7o1BdQuXxo5v7btvodaeEdwndA4BfdgVUUPE",
  "key2": "e3pd4W8nUVZHKd1eRxftJje9dAfkwYFLB2o4xr7xDVyocTCsgAvTB9Ux1JZXKQRwK4RNBn7t2ab5UES7gbrF4qg",
  "key3": "2NYWwEwEAhYx6Rp1UUrnanxbbNZKZFtKJE16k6tceHqGBkaj5SDUk7y1D8Xb2LcBLq53uQQcyG7NQzEhy52P7my4",
  "key4": "DsjtV3Q381PXbDG9cTmSYfwUfxVdWTzEDtvjGLzKh11gZKYcPbP3m3GN7bBn3nJqN3wMA4YYZH6KgXHNRpJGmq5",
  "key5": "12A22FN7Ek2o7Vs3gp3tULVnasibi7bH2qENuNGaNqMDaMHVhkjYoq8brQHzpxmZQPrMVdHM4MrRdPRE9HrhKpN6",
  "key6": "4EMtDUMbCbzgLqc8bosRwSbsjYEmqMSzTtjiaNFU4ubZb2pUjRP1eQxESxgkBb12XYWGeL7ptWEng88WHjHtFK4m",
  "key7": "2QJGLoJKybKSKJvuvStnbKnw6c1cqV9T5kfPrSiJHfzKHzx2yEikky1Decd4oBrdZMip38ZEY7iCPEEgp5EpdnGV",
  "key8": "4nnbZuTUzikdtMHFgjB11NbT4Xd2RscrviKZWuuisBXRczUNFuHgKpcASzwE3QGdStTF9ATnXH1BQCqoNbure6FW",
  "key9": "5FaLhcjPqtUkxNZDKg8uMjJD34M5E5GLPGtQyqWs3WWAauCQshjHHmAWCL88LwWEAVK9B98tEcQzr6FW7DAud19g",
  "key10": "3n9H1F8pjxX9KSqTHpcqmEoUYRMfxkaXJ9FajoKJWU5KPYCySwdaaf2oTf7FkMRUjWucdNERL35jnD4U76e2Z6Gi",
  "key11": "632RTGEZWyqDN5nvpEaMJe5BWqm4Wo9qVMjRaYAepGsTKkx4E8SkYBsNbaRGLT7CFcRyRZnGJ4BZ9CgGsRovS2NB",
  "key12": "CJJD4XfLhmBUpQYJna5te4ud4kJZ9xXSctsRYtkd7J5Gh89KFtfj7fQysU6xWCMt5vFgyC6Mor6iH3hCBbdqnJZ",
  "key13": "MadtP6Wde1mApupRPZBYPQcviUHEoj8jHAhWu2qUkxb6AeNuSuCy9rJ38uki1M7St1nF7D2iTczpLVydpHzmfKH",
  "key14": "5yQcUUCD4XGF8zacQaYduLCC2CRhGvi7WZFqhJ7EYfzoefw5xgS2oZ53ozaM4QEPAAtjPf2hRWQrhJzreD33stKj",
  "key15": "5oAJvqrDWGpj2ean2eCwS3ezhUXxJWdSZqgEDA6NebTabUdEdPrJMc7bdKLWumQ4c6njJ79yh7ZLbCubjyWEUCXg",
  "key16": "5uBAhA41rypHAiLYiUNQDsLJcwSfyecsVo7m4q8qc5NoQ9tAtvmhs1gWTrXj7PM6Q4fEKX5ofqidCYdbU394J9QV",
  "key17": "2kdbkNgmmuZaqvPY3Bog5VYQ2qofsFegEWt82aKvFtPpakR6UrXyk1QUDzPk7GRUJVvNjV95FBo9BXRKitrWQtJM",
  "key18": "5kYLL5a3V3ybmBCn3rVQUSAooULvgiJC7d6fR8rUy81gJvfCczcz1Y61nhCvZCqHia5rU6R6XCrq5H5Y49GFqdwM",
  "key19": "ta7tV1iitVxFzLz5ziAvvWUmpNrTNNkA2USmudJ7ELpAm43VRJMSgbF781fR3WBk7oiQqWKajXZc997w7cFFqte",
  "key20": "5wtcLr9z9tPaE3g6HhvZ2eMPKJM4DsczswAL6XJhYHmKMD8vrMu6uZ9ehev2nwcRPhVawHWCA5ZQnuJvdoDPtKkF",
  "key21": "5n6YCWGH8zDRrr3j58PZUqM4PihyVdjiBAEovbjbagQgT72f9c9WbYSBNHLWfsCVLaJdqknUkp1m5iBt7U6vCLZh",
  "key22": "5y1GWQjKmNCDhVoJbB64EArBxZvY3EoiNcgDCR924uFTfAAEEr5UhwbjyRa7yEJGYi2rHusKddYi3app4gZHJefQ",
  "key23": "4cxTWVxgFrU8bnvL5Xu6vKLUXDuRo2iYqsc5iiBgBeLLNotK6whhVrGwmVZxCas6pcZkSnJfqUwA5vhbHkW9vDdQ",
  "key24": "e74FHVnFqk2wmGHiv5EfgEkafXtT5aNqPkfQrBDZmfu1Tv3atNy6kN9AP42G5FkfyQBhwST6tvHAsY1byH5uxgo",
  "key25": "2BNwkzi9crmPrVtpgQs5mJiiDa5e1TAw2AmRh9UcJj3ZFUZ7rLjon17vBvxEq9G9dMkdHdqfXCynxBhUQUP6qHVj",
  "key26": "47SJZjD8c8E5Y3acfDxnDtrtpn7ep25w7d5zE3wnV4LRgb2h4UJBHPUxojizzm9ZvfaPAS5eaWDuhSuhXDSctzbA",
  "key27": "5RGDP423E2Hv22mhiPgkQCMbS7cyk7ZNSHFCCLo1VtCio61uF61BnCWg7UZBs1xtQAmdtpPCaDjoFs8zPDPRs1S1",
  "key28": "oFYhdBh3oMKKdqzkJ1JGrY6vKRJ3Yu9vYaPAFfLs7i4N41V3UetD7BnDQYgEN7VvAR99yaQkwKgSLUWPu34KVz5",
  "key29": "2RWMxkhGeLjSboAn1YN3CZwJPXzUpuJD5FNrsuD6rkCBqRtFnJRMSbfmY7uy176PF4qLRAx3GHE7ypCowk9QVCwx",
  "key30": "2KJNA7NrvKHyCdQBwVnJqFUoHhcrLxSk75y2m63CiD5BGHBPsFbwJp1JnTevbNF7cC2wxYg63mXLDka86GaDDgpM",
  "key31": "3f4mZdLLQCPkLeWGTeKUnSYaTyYoGUsHoF24W3uqgxzJZR5weL1ruqBHEqFtkikBBVdr1ezPSxUJWsh2QGev514V",
  "key32": "4gscmhCkYUVKnDXcW48ozeZnEeRb3aBgGeDeiDH5SfiTbeWuRDHV3hDFJCuGhswtThHin3N4fHDheQGAobjmv7Ac",
  "key33": "2H5TCFtoPNCoTCFApXAS6ZVXCp7RmCrMpHhkceFxVzcaZXPftXcmbSNV2hihzKzDZgFr4cjbcqLEdwKP3LEzQ2Ud",
  "key34": "dnDZfUPPVGK6VKxRbNReiiB9gAhkFxGUMesuTvqhKordirsFeiZCfvUHfMhHPUdgQEEhXfQbjJjq2qumFauRC7r"
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
