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
    "41s6gmgQNBvo4GPjyKLFpxiDaBxdKo8fbMmEygsJ4Jn47fdu664V1o9yUj7EKPMKRoMUnvHKLwAgJKCde66TDToe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXj4Tzk9cDrmXCU4QqeW5n8xPwMqEGenZqXyTzMncB5azT7HDfSnMM5RCCNj4WiTNTGMX3kNA3g2suhs2hbjZRN",
  "key1": "4dovkyugGdiBXboC2UFQ8Yw7FXb9rDjkHt766WV21t7wCHZtpi51DNRBt8JpdgSirUrmbNTZmkdc6XWqGVcM2Qmf",
  "key2": "rjEQihTrprtw3rciJUF9aNvhWTWo634oVU2tiKVQTg391S9j6yxeQPNNxYuteXs1jPxP3M5wHmHTcCFjCuqgdNd",
  "key3": "2HZfpFGPQ2EfdQk8dBuDsmW1BeBL8ZCvArNYCtLAdWUrsApJ8e1VfDmtjeWuuuDjxg7RfGCC3etkoaK6k2PFfm3C",
  "key4": "2NqYMnwAdH7JpL6yfs3zXv7YWq5kRJ7N1NYGLAShzSqzWQiQsiomqb233e6SwAtX3sHTWC73ebqZeA7xrtBVwo8X",
  "key5": "5vFLAgKbaL7FM872rfxU8AJ8y11MKVHCvu6GHM86Ba1bLZYyW35DiEJfWXMxgeuSaSYMpQwmnC1xXQqT57qAN26V",
  "key6": "2LqXWjLAes7YYGLB4JHhDmeC13NcfsCQZvHjLLBDhdYtdw6xAj564K8TToBXGRtEEYNLr2SqexZrGumtamkxXq5S",
  "key7": "4KBhXg2xnkB3yLf78o2BsCqVZBccCr8kd4w1LZRAvh5f29uWAAnio5wKV91CADkqBLtgSXz1GTnGkSmiVrap7MZd",
  "key8": "4Puz33uUwksy9xbESfi6dcQ3VSTxhD2k9g6UtK845PwCSDKSFnLKHZzcm8UbjiW8E8NAD9FfUfYLY3xuKWoFeuqt",
  "key9": "4RuKrFVAbKK4YxAuWik97LaTPTsGHqTFTs4s9utQqa5YD96CzmVJZQT8s1bdf14gZuoKqukP8Lxhs4pr9NLmugbN",
  "key10": "CKCCcVTvhWkXHd9acjWyfVW5kfmMnZugYM4mR6NtFGrASJ2WSVGitPkQXpGMjiEUBF8r9yz71VXNMWgCoMDHXrD",
  "key11": "2sWtGPDa4L7u43zQCujjnW8j2DAqPcdDvzaFEWiRnn5JVFqr7jeSYYWr3sMx8uDv6c83UVqu9ezhqg7Ma6njKkNJ",
  "key12": "3h8xbxNAB5UwmBAmj69ei6Tas5pP4qehuF9rzFUZuhmndv9PvX1qnj4FKkhuecDfFQE2ogS9RYndyLgJX9x3L98Z",
  "key13": "3AGYJAVnrnMJ7nxKKDiyuKUGyrD96zdYxjQBx7jiPsmxTaTKuh1DeJbQLrJZaFTciLvR7pj6SPadnfGEGP7fAUMe",
  "key14": "2bmmEx98BU1ov7fFPJHYvjUJYJarbWo2PtUaYs3zvyHdVMyCRf7BgRerVATaTX2oswxz2WUwJZo8fjG63YjkGnfu",
  "key15": "4QYfvHcDbXyVLEhRmeeZtsfCsiyPXpuyKe9C6wW1dUG7XJK23hb96FPaLU6HvZ4Qdtb76saBHzF7rn2dT1xEk9mY",
  "key16": "4tPnudHEkaiFGwK6dFyGeJhaFMhPyaGokvXQBsyDVVfF3gY57ih5Ls3fk5oKsYf3Y3gXxPfEwuC9HrXHHVHSQgGo",
  "key17": "2jtHAx8gLfVbvcPkgg4jJ9Vxi4Gi1D7yfZteLyuVNNYsgbjN9XYgBu6T39tJSKJ9YvJc2PmKE4jheFNbKZXPdjDQ",
  "key18": "3X8JdKA4wzZ7K8pL3ga8NbXxS3PXUj3zcabFSzE8FtHYr4yizRLiLTp6xpdZ3kdvfwWnC9M4hJ7b5m2xfvqfkBFC",
  "key19": "58m7kq6aF334k8DoWASSxC3JZGp3hbSNkEWMqx6MozVUJaoknYXkUVShk9UcH5iN9UYot9mPDCS38qJVXkUaZvij",
  "key20": "4PaLhnrjVV6v4BTFR5uwgFAAw5obkQRk6nYH5Bxx9JHekukua6K1mzvS5Tuo29PnMwveCUHTpiRgX8dYev3bmWrP",
  "key21": "3NaU1nKoT9aJfqghLada4qPPMw37AYx39mFg8MgLUktDptiYWUiU33kvR2nazzQX9dBDm2AcG9ftMJSQe1hZnrkp",
  "key22": "qqeUBVUVrAW9wLJHF1oQu23orTVa7k4RyjugwQ27pAAD4nkZxZgsHvtsRN5FxYsCMpLgfadN1yr3AXM189DqAam",
  "key23": "2p2uZAyfVpx6Sk7cCosQW8buQym2BprE1Qs3FLLckB9XDybQXXJqkNaQ5Bhft5X2DwXaeJjqtmKwzQBAXAfLqXEB",
  "key24": "5EwdxjD7BBG1CvY7qK9zq7PqyFFzRCfDoZ6SMpFEKfmUZJc8T1URPwcH552XYKmdpAu7xEc3UjrRgjiREJXyqiAs",
  "key25": "4G99RXjYoK3mYYyjjbcn9TJcwZUPRo4nJdDTCPyXFxCYUz3hMob8KF1zLebbE4eQm3V7XV3f19iTedNWDQBnBrPd",
  "key26": "2ioPFSiamnmUsVNzUskD61mcgMCCN41xpRo9zpxCfKndaDC4m2wKJxkRYFa6kAFyZiVXxhEp2HpPkcmu1EibX2S",
  "key27": "3iYiCmGCjTDXCpL16abb4EuugWfWTcLiaGMVcywJW3eXd4rqPsArGSFvHVr8FhFRBF1VUR4XYdqGkbkCGVn11zGM",
  "key28": "5yqsZ22XDJZUFFHvQ7QAswt5PximZEbqCLXrUEoQuFBpALsqF2ZuSJB237s6QA5zQYfv1W8GsbDVaXCBvpQzYCif",
  "key29": "61AviNm3SWnocjq8PVhHJ4SSZd6Q7P2Squt6BpfWhscQWNr9aM6Wt2GKNUDcFtwzZtt4mieYWnPau19Nbq7EyNba",
  "key30": "2Gf5m3667HERaUVtYQnUnQecHcdbSqgGAeeiqZkeL1LnQ83YEordqVops3L5EGBCZPQxGQYqDvLEgyELvttmB4SG",
  "key31": "5wLtrRVHv8obwswcAwX4ZsAuqZ6UF8GuPvcsY1N4cmUQW61XEBBTBo8wpco3NfbirUQkiJNzbDeUQXHoHDte8EcG",
  "key32": "6CCuiEYk7JKPxoqkfc5iWh4qWrdyjSKNa612p2T2B7KXdnCaJCJbfLycjkKRvTdEG417eeAVQZBV5ZmtQZKk7VH",
  "key33": "2eBQ5PxpwchYeQgvpG2vQfLkn85JySuZy7kRscLSViEmHWtGVjdRBqrM7vGEnGmLaDykgoTaEeusdLsWZUGeRDgu",
  "key34": "2bpKz7RW8UdvDuQKbGKoooxRAoAdPgbMbVHT2QfR881pVE2Kj7NSYHpob4gp6Jg65LRyPQQwJppMHSNngG5iELDL",
  "key35": "4jNDKqHJZmWdH3PYMpQKVCwJXuczGpWPEu4pkgjaTX132VCqTDYk9k3XvPeZTagcRKkGxFD9Nvqx5iwLD3r2gLaf",
  "key36": "41yw5AZFRuDkZQEn9ZogRrTMmXkEpiVWCQvmV88HXT4P9P65SpzDiBsG5gZZvZ5xFuxZuGur8zYJx2xT7VraVQww",
  "key37": "3Fx8DEYPjPyTt1ihzxADs2b7fMkJFyhj66uYDqZVjCdf42jfVFVggrJY9R19haRzTPfA3pdHv45t48mJRyNqjB9P",
  "key38": "5ApHRHcqUTsnrHYagwLFJkSVLJpQP8KX7RHdEajfBafQFFrW3vGjoFmwoUxtBPnz1XVX39Q3Z3TVD6H44AEQrG1r",
  "key39": "24fsn9c1ZHcsXsHdwmx2nwTav7WqrDnvhMSzLZRMwXGVpcq68yt83uTEfVZoYxoEV9jLwheEwpF2pu8gji9bPHQD",
  "key40": "3Lm7f56EouqcR6emdFA6sEfwTVWZmpfjyLB2V8L2w69FvCscpiygZmghax16ekzcockJiS8cV4Q94MBqSX58aFRx",
  "key41": "5Pie8xsrXLZVvSbUXn4bR3mCUUUZ8AFDiAE4Z5464GLH39NuTPTHBqoT9HtPFgphpLJwQmLn4G4bmqLLjXcgofvL",
  "key42": "5dceM1M4kZ18b6YR8Yiz9a4F2HXfzxR8CchA6U6WTKxurdmZY54pZnsbMKdDXeYED9gqwLJ1iGY6MWaUbamkAVze",
  "key43": "2UWkRqxNNgtQLRGRzhTDgdoBB4vRa6Y36tv3e7VtHCq7fmvgY6F2mnSqfoVzUf2kJArwgu13Nda2bq1aFMZUn8jc",
  "key44": "34wKTfBNHPpEJPcTg3gtH4bLGkHgzEq3E966GNFywaET3ju2gPv1BU8GugzVUCBKnet3qrfQq3cbKNagkHz1vRW7",
  "key45": "2qsZDrYKVrCvdCSvTmtxjwby17YYuH7rQ2nBX6pp3Z2y9TEMyWkT15MnPnSWte3mLxkm7Hr32CKdiX6eLvef7xb9",
  "key46": "3BPD2pXgAWZPLWjwLKmToYoFqeRSA3LWYjvYXpbASrXzsvfp62EKvxhZqiouGMqT9JU6zMEFMhd5FDDkhZQbMqfH"
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
