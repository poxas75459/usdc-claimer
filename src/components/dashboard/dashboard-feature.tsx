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
    "5tRqK8d1E2NJz4UsVJGnMmYDr5zQ7MBMvv8de3yArNBQPqahdhmswJxeVjRv4EnJ6eRWf6sTKrAgXcT2fjd8t1eQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X11yxFri8GAUfKSa9dC5VYicCvDrjzH2yP3BzaC5khxCEhfNQFiG7XvrDY38z4isCQ5wo4ZSF2Ci6wUDK5zCYiM",
  "key1": "2LApmXyLnjSdb4JWtY9jx43h4YSunDL22UBAr9xGEWYt1gENgU3DNB8suFTKjEjpSumAh4qjcLjQwoVExqhLFgdm",
  "key2": "4CmTLkZtLKncCNtZSC1iG2ghpdAygf7ugAQe2A9uuu4kyh6MjCmUaTw1W7rrpvMVw4uiffcp7kC5h94hL8r5z3fC",
  "key3": "Vo6EGfEx61BrZ9kYPgrtHYZV86vEc8gonQkZmTgou6H81UD1oJHznuNzYBjg7xdikZL8rvRLAZMaDZz8m4QZvUZ",
  "key4": "2JqWFrdHkCgWdZU2B1XzKQM2cEtba75P3xD5YS2qKzeodXNTrGgN9JrnaoYQWRhqWk3tgD5e1LmcSKjZ2S6Tkh9L",
  "key5": "3LJQ2it62UZQZVfqfDEo6UcEQoorzXG9cEj6TUStrZQUW9vKBqZmZaVuMvhaZahaN44g65LKicSUSyMD6wimx1Hd",
  "key6": "5pj6ME3iGf5bQDAdKsxS3TA6struZYcCsUDjEgykb6BuS6JRgkeVBbFTdVQgWhJX5fcAbm7ffwx5WbBcjXNv9NVU",
  "key7": "3bf7aLaAWDvUVXfcW9HLKPFdceotk4B3pFG2YxjYwKqNieGaZEYCduw5efBikyXwdzuFkNFf7SWKkCfkLu2tHJJW",
  "key8": "24xHAeZY1t6tUrsPbxeHhnjkS4U4dXyA1G8oUNhHAMcY4wqFAffEk5MSSeSNY16pz4PGV7ViD5BRDBJP5WSuKAVs",
  "key9": "2honhLHo6gKryn8ejzuLt7P8kFfLoiERFhsF59oQ4ESTmNATc79TF6WwY6bZbpX5aY9idNAX7wZmVFe8iv1d9QuG",
  "key10": "4mRhShkvcdoCqoK8jQorZ1ZrPbNTuUd2yR8B7FdDfpmZWxFcNpogLjLSJiUzc22GQxJ7mwoDSeKHVx2AgbPorgtn",
  "key11": "39Gmn7ZXRaJ5nhz87hdCF8RmdEGUjCNypcsrkHqWnqX8DuBpYG9V1qHHPMwmyTN74CTyPJuf5Ls1mGLJWEG5AHQq",
  "key12": "3wvGt5PL7vBAg3a53Ez6oPHU7v3pueHa22M32XcPQPLLsA3hegPtrMDYtDk7wq1djEdxbKDsAtDNtFzqTrdAtKjo",
  "key13": "3pvUtdwHzZ9XvdjwJPXTo1H6qY9K7uZrxqdVkxgWughmiuk7os73QzKLvti4ZLaqXPfxhgiKZpfDpy9PUFKPf6ZJ",
  "key14": "3Q1N5Rc8YzxerXoGRXvgkekawvQLRxWvwUqiEuM5HTaD4FaZwXML6XQvuJvWE7XHZ1czEy7o4egpCgYfuX8bKMma",
  "key15": "SJXiJVc5jMxk2ZobjMjwD6bhiSygwgsojg4vAyRLxYLAEP7kpAfQSXYBsdtfeTYxt196Tw5hxPbqvQE7S6RpaMj",
  "key16": "26tLJ3KswXMMDnZygcPJYWk5VeLq65Z7C91YxWKCfuCHMUBQPNkL3VtWTEJDCZhRQ4dFgZKW6maMBFuL7aP5WipA",
  "key17": "3wNp6wgzpMYYcrcmjc93kh3pAQ4r53S6f5EH6NXHwcYS64mFiA6Lx3mndYjpSYazEkXQwBx3EvC93C2nAanv1qhT",
  "key18": "2Zh63u6jJpNDxYkwmmwHXHCmj53EfU8edvDXtYcwCRe16Akv4YiBFB8eavQ4G8JDoMwbwZZvc4sE9WwWpeAXarSZ",
  "key19": "REtjrbwtPUi4B3M3qhxCqL76JedVbuiovmiiKJT8Hf2RPZ9EEFMyFJPY3HWJYtqgARiuJpcSSXkHyvrrFMjT5Us",
  "key20": "5xzsq6SFwLm17fJKCgTzrQSi3J91T36xDe95sqv6WKN1mr8h9Sn6UQ4R9hEt12YBfe7jiVMgQzJGEf6eLKZPvMk8",
  "key21": "31s1fRo5uqYcXDrNCVYnx6AmEY2nJamA2GnYS9q7Aqab53HdWtyCodCeMt3fr6cAHdhrc6JpdgmvqWAuCVEopfWW",
  "key22": "2eVqVFts9vVTPK5L9E8etezikhYVBhUXCQYnuRwF1X9NjZYBG3JL4NTyubRZ9cvcDu7tKU8M5Gs1fhDRAKyXzuuw",
  "key23": "2whjED3oEwN5KG5iLdQqpijMRrfs8d4BNxq4wDGpnMSF4yC7HHXK69tzKDpDuPaKteuoTYHRe8HmGgy4PdzD5qaG",
  "key24": "2CjKo46egWWzp6r7FpuDyZhnNnSWVAZQiEC93dNJAPFwXSxeKFBae7oBV2UPrEqw5aQtQ1Y22sgVzeADztVnNBv1",
  "key25": "3WyQh6urvMFMM9muLJcTGEYcvRJ7f8ygubfdrwP5WCja8gwFqYk34f7bYhSSkYnTH77tfbfkTBHsg9MXiLJdYEsX",
  "key26": "638PDFS9geuBKPSPp9b3RmuhNmbpmWUPGpkbn1iJ9cpuBM49pGcKNjUnDYjCH3io9Z3N4dshUeG5oSKCFwN4rpyE",
  "key27": "u7gbR2ub18kkbegZHu2Qyp5UczNccWJRYCUH1bTEj6NhEcZd5HHqQRCoRWBYgwdBHpndVFahu9NqYiXsuv5YD5P",
  "key28": "35KKuDShhfWRjsbrUFncrHrKENesDXUA5eWHzAhRnt9g3FyYbHGEbxmtMQPNfMRVPc5BZJbPb1ybz4PyUm4f7amo",
  "key29": "58nR9Zu4SZoxkoaeCbkJLg5oAj1CiSgE1mrp672Aj1gRxcC5HGJtrP2qw2wcz9DtcuMLtNCMLPXvk2TmVN4dT3zH",
  "key30": "3mpxncysuD2ruXjCGSAniN1P7uPxnN91vCk1opbETdvWJtFatn2xMAZ4oEkhNrcRqy6T8tm7rw5u8dLwUPPgZ8WT",
  "key31": "4j7VkLg9y2VN3kBwzPWCe5aXQEJQ1w9T9yKdQUGEmGUwkhPgBLUpH7kWX5KWsTdHv3nnJdkVaofGaccY93t3Y9Nt",
  "key32": "2djxgmaPMyWkWRBB7MpoWcewTqFBsuKxme1ARpk7mPgPq6PZcpuQfbTuXexcRaDteeJTB9pfuvybJEhq5BRkmac8",
  "key33": "3TwRZPoaSjwfSuGgDVd4YMDGxcLG6TQuMUawHyDQR9RWS13TCn1HuNfJzqLv9kz2mdFwAApjdCYFCKRR3V2Q4iFf",
  "key34": "3MDyFUCgtk77YZ2kZz9qua6vejw3nm9Gshbn2q15khbD48EBKvcvmujMKWzzRVc5qby2Rt7BzoCtqggQZETpn3hc",
  "key35": "4Xt786XA8RZfekZ5AtVeQfDxKd9MB7PnMHD3jiu7B3zMFwbCP1bb6xUzCXVL3YA2qxNnktMAnfYVXbT6zMa8DzVJ",
  "key36": "2zZxZkqVsKWnfAXiZG99Bhn4kRRA49aqjswSe8yn5CtRABUiijXsWBDZ7HHs371UYiBwhzaRYwyg7zebEypFwJtz",
  "key37": "2mA8wVBUDLGsh4dkuoQiTiXWo2wZRCg28LM7Cqhdduh53Axv7r2K9NF2DB7t3Xi5Pv92orpuKs3Dvpo4ofpucJxD",
  "key38": "5DCgDRjs1Jrc2JCHF53VtDkeGrci7Rxk2bcVYrVt9ULsWm5MrfHiZsw31teEBXXP1pV5RRZfvRoT6JXAVQyynSiC",
  "key39": "5JaL8CSKb67hDQLQnBGs6g4PkZm8UBJqi4eGmNo3t3yDWakn6Pa9G9qoJBSPfTVa5ZTosRhq4aKQJkZu7jiXCzRr",
  "key40": "DzeWukNBLeCL47faoe3ece2mVQTfiNFDysN8Pz37h9hcZP5mHEQ3tzruP1pYf2oQAGCDtJ4fhh6iMiQCKePtFH7",
  "key41": "5MuGyRRrC2HoJB5eoCaY4YADX43xAznnCF6yaMYc7RDrFHjWPB7rriYMQi7B3PNgBar1JfMJu5okAAgAtCP9vWge",
  "key42": "vWNnWuT84TCbDiNLif4pUCKnMZjcc4m4W1r9MjY7y7svNsrsomZB6cfJL6Pp25hHcVigUkBZZGg5saCrq9ZMLhp",
  "key43": "2vF9Jj34ytuDfJCoZPGg44dHuT71VXb6ewzkkzkCiVZCn87X9hNAZsPUG3h8oyqhcpaVGKRS4k9Na79pKqMUALV1",
  "key44": "2a2eY4t1RqFxicHdRFFjdRaP5hcsTwc51bizHg8t3Gkv4bmZ2MUqVFDSsuQMzJmu8yc81cGn4ApoRbgdoGFpSwTH",
  "key45": "5Jardr3odtJmrGrDaDSKMxgqP5jbrSNtSjGvyKxCttvDXnZwXMu7VnuosL3e2nQ7EpJowjN6YfPCVCRyWcgp5ALD",
  "key46": "5FqjYL55WYu9e8v8sHf6FoFQ4FX3Zaet6NQCimi81Vwv35QjinZLbpUUqk51s1s3Qm2r1nhr6SqK8s4GsN9ZaF11"
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
