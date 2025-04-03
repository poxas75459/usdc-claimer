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
    "5XYHVKJsFLbz7vaivMazMZ77b2Fw3TbZZ7ZkC9p8VpstLx9BxEQmsWz9v96gadDCSLCvyFyXcaM1MFV1hnWX1V3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LAmzNVXgiXKep4wV4B1ihG5tQ9wDYQgjb2FrsBbtK1tJgQf1sp4yiqTFUeS1kEbHytjD37QGDx1GhsM6LWDDiar",
  "key1": "391FnQXxA9c6HpD4AiDyCycv6ziqvt19DEbjnCygpM9LGQcJxpXoSmKVvyp42s1bBErBk447SkJk5A7oGq4UrSzs",
  "key2": "4c5sqAZtm1qybeBG9gUbQJqVzaKZVc1Gv7iHwtqE3hcYGgMy94tzyggVVPdEgqZAdTcjSbbGpk9KgGfL9HEgogXJ",
  "key3": "2jEoNy9Uee8tona3j7Vv7uNLThzoZoJCCkCLCijNthLuCbpELxX2z92t3ywwMCQheXnoDebKDJptUUzTsa8QEQUi",
  "key4": "4rJY3Lt7ie8NZyBP7TEyd9W5WeVicer5u8XZjEg8YSPmUDmqskSx55TLosbsMbteDvkDnE3o62LEsykRkQTrW4pT",
  "key5": "4wnuGqhSa99zKckKPc6PSqPhf5x9kvJk2KJ3N1sB4orjFPgxsfYE5LXovFAtGNCyx8Ed1jz58EnN1e3NWE1ac4o3",
  "key6": "4R6p4kZjanmSncb9X2be8PX2TmsSodng8YZBcA2ezB2YeaAgRkeEGUN7rYxq7Y398Dj7nELNbaKbehzEDgjisjN3",
  "key7": "jWsWA3BiuygPM7jE1644gtXKgBXhYFuUJKivn66qizn6sdXdCg6oXqMkfskBGeZfVRV3kcgjdigp1PCrbkVcUnk",
  "key8": "2nnJ8hyPXTVF5uJ7Axx7jYERfmj8yfDMkPFLPrNTfGG6EpZCmRSxgSZsXMPVWju2k99Pd6QUuXZA87CsGjJY3Z3d",
  "key9": "41m8fzXKBdqt8obY9UoDTg8SuSVEgD6gpQF6wmbkVBWndhoZsbNHsar4v8rCUeBFupjLCFvt4JZfdUzvb4CJXHk1",
  "key10": "4nEbzaK1VpxmLbRLUMgx3jD5qtKK2hKqEHtmEgiQfk7jxHtmYKJZJztnpGq6mwCGK6ykfNksoCEGmnn1yBEzfyiJ",
  "key11": "57nbNrP7bZHJBXgQpEdknsG8mmBqWgESTEFiyXjVsDvmPysJj4tHPY36yT2xXvcbSxdY2UbZLVHRe9pHh4cJDd7N",
  "key12": "UYtzUJDpc562FaaZorXQ3VeGH1hpKmkk6JEqETd3XyrAXQaryk1UFdRCi3Km3kTusJrvsp7BvMBFkB3vf6QJeWk",
  "key13": "67i4VEe1TSdkTQ2N3rsN13RSLo36FnDs4N2yZnA5qzSk4DxgNcMPwXEQshz5f9FQt2L2xNCbpXWuKWLjPLEogEDG",
  "key14": "3mUMbGokt5ySv6HkRwnwy9ZM88CaHSVitRvUuQnKSeM5YQCmboEZcJ5iB8HSdsFyhcmwFkLy4t4McfNuifm2Ecxz",
  "key15": "3Vmtmp9JydFMZxX6UeBNXCkwMwfVUdgUeJ2MJv7QA3HQF6NDbQoMpEaWkNPg78bBTMSiQeGfPkWsvfDWyERZwE9B",
  "key16": "csnCLjtZvMX3Hd4oPNiwamxU335kbWSCbjM5iT7gcksf5orEuTUYEhUACxXVxiSyKMoSNRdA7zM1FSnRNFFherQ",
  "key17": "9TgE5u4RzpSAsRBBPDgD7rVy98rzUVAv8XcFvQ28ootn9WNRp4tn74YWhxEcFmnusdA39F9crE713pRTmn84qz6",
  "key18": "c3FmQdQWE1rLxq5BRwax48sz8Y94GUhrBUXJJw3AKgKXu4PXfSRCz85umww3pU7kLXbXXJUQVHxMMZXYizk21d6",
  "key19": "FzaHB2BBwnbju4Mi9mqo8Kf5vmG5Dw93yq9zgZuEMBbQbMwWhLW4VMS7XMw6zQc4HcAgoY1BXbUkAV8G8pw81eG",
  "key20": "2hUwkPyLzH7VNSPurQ6aSANLPNVLVHrd4XkUA7q3yEEomq1NCrA93f2d9Fq6UL7CTtK7WvV2C88GTNA1bR7EpTZF",
  "key21": "5ojZV4jVU8ez4qytNteQe4bvi1mnNyPVnC5qQ9zmZDMpemXM54gF6PbHioiQaNttaJKZNvvNC84F9qkN3oyShouc",
  "key22": "3j7NuAawkm7By6F35xv1jrrFUJZw9x4JhKqEr1uNZTbd65Tkm5qvznrwPEcLSSB9Ljd4m52iNgwkEHWLTao9S6ih",
  "key23": "2WR5HGDegdTTJVibbAhowBVFHXMKvYboefJF1keoZM4UbTBTJ6RhYNk5vZEqchXkBrhzq5PimLms2AtLXtPf7f12",
  "key24": "2cBiJQQGwuWW9Fztg7dyTNBpw7eTnWTACNFhyZbdbPpsCA2y1RaX7E3okLpS4PEp2kDnbv3PJgcZXCwioPH7fgZr",
  "key25": "2XJM4enFbzcGqSSD2NVpS4hTumvTR7ZPXG1F67gxRjwqkkyfZvNuUszhWQkKRJwfdT7HJuHbJ5rixicWQA53Ye1z",
  "key26": "3fXZEM6ZbhaCkXPsgr8kVjtNrsn5bb8ZhLRthYcYVDx7z9BDf2f78SJufntc2KzoRXyjjkDzEhTBZc79DiYNafF4",
  "key27": "5LdCBSV9pg833SyoRBS2zfWM6CqvfTwYbzxcYRen8kXzSGGkKVkpNfFxRFCmzgii97F8CK4LzCGBtv472jPqv8s9",
  "key28": "xqmmLyHXiNpx79ukt78cUm2cMvQ8QqhL1XbvUecCeQYwpYatGAaX27JqiT4nTugpFGzJbQasY1VqBvfTCfn7UKP",
  "key29": "4syur33Fu9wruEqzU7u3j2iuMJruHvWw52EKjZ5TUwsNGS6YTA5WbRNJTgdsc2U3R5gV4MfVvUJE2zrmbv7GgBT6",
  "key30": "4fkL3JDJo7MkHjhEQspv3nBeAaLGcJBnLZZrsmnwwLcbiGdEwHgvQejCyjHvdevoFyazQaNLLi2Xo8RDTzmT6Z5o",
  "key31": "4pSqsGL74V7L26FV9Zk7R6Hxk1u4KEGaPKxNXaepmPzaKp5b4pbnuRXLxcbJePzVqd3MVcFM1Ss1eMLjeajkan7D",
  "key32": "5d6xs9Ue9zzM8bb2BtJdcRpanxs8YK8TGhzF3T61cswPzoGym1FA9Qis5BhnR2qRaQcxjUxSEvU3Srzx7R22xX69",
  "key33": "HURGzJEyZHgJTapT3gaoQDJ2WezpZihEtkn8H9zb2Kedq73F9XkrDgjoZEy7J54cG1vRBkeaosqfggTDCVyE3at",
  "key34": "2otAhuDA6AboJZ2RQm7gWpFDCmdb9K1UcS8hZGoSxrTVroHs4iiBdgPq3aeLyKHvLhTqPcbUwunJRcZuwW7TaddG",
  "key35": "5DLLa5svHvGyvu8bRaXcBaZtuK9HLaXTaZnbdjDZNnsFcVKk8utaurKmYyMzDjxERvQisL9MAt7aTWEzQCzzMW7N",
  "key36": "4JbyBoBSU8WeABdng9wtwgn9JCRGpUaWxCW81RmVctWaZGg15qgm1dGQGnY2roqGWdYnYkknTHPwio26FQcD8Nbi",
  "key37": "WPaobPipP4QVt3WsNxPBPrZihgBTCzU8pceq3AbVnYCxAvprTwMD8Gqi3JdyaPGCLiR7edHdQKiKRNttS51MVSP",
  "key38": "2qSf65D4yxrgrc2fepfLpSyQXDpJ7de1a83Fjs3Qt2bWNzyHoZFER6EyGiuJMJ3puNWtRu3k1szTJcnhNYJvMLZf",
  "key39": "QH1Vpg1j5T5SuE58vyNy9QUkqSswR6fyG9sW5fh2tur4td591sUDzd5EjhrCbPioUT48gRsZfLC8tLogMfDC3tW",
  "key40": "2jAF5uZjCUwLjmMZzQSixbMrXDRN4CxsEeGsw65rgksh8xeFpGykNSFJk649S1dYeJafDDHyZV7nknuhwnUQMBbG",
  "key41": "rTvXbkqwpzA4uPS8xQkmCyJAdHsGFXTVZxp723Z8aYAwQx9pFwy8r6yu5hPGvo892nqpnSHFsn5MDw7YNPQRatx",
  "key42": "2sq2GmyN3oBUkN7mKcpTYghHXBLzMb7vmoiPHMFRJFcQkcAeM6btZrCFZzxeNuqzAMgDZA5mc5GPgVDWT6SWToa9",
  "key43": "66wnGcpYAvCTkBYpSHQFV4afdEpWaAR943sn9EFz7FCq9PZDCAAULLD5Sqtdtr9JkeCYFbefmaoXeTVW9vy6ywCp",
  "key44": "2wPSv5R46Gd7Uec72HeEqCoecvZxgMLNqNu6NfaoxKna3gkEJzg4afq3dEYyzZ8T7aSade3SxuA93DLtf97rRtMD",
  "key45": "4y7z7BQxyf79uTGzyLoaT8rcX2TGq3JK5o1SGEVCzZaQfMGPwpTLkDpGeL95JPzaZ3Zh16PDbkD4WmS3qadU8SNA",
  "key46": "219LP7QAoxx3yC5NBBK4x6bLW6xgLNCXJksLAR66vjd7mR5MEtXyuYvPFmRjGqyUpU8oZpFKF4iM57KuXQPeHZy1",
  "key47": "34i4JTffAadsEWReopTC4dAVk2e89Ja8iH66j3G2knJw82NT1tW14rgLdC3urjdtbsxMh4u8EAGyto9tigzyqhRX",
  "key48": "32NutdtxPXQmBqAqSJCEkUiJs69YLi9XNLb1ymN6QzaVN3WYKATGrYu1n71WvP1aVioAKVZ5hHYs3mFYSJSCWJLq"
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
