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
    "2gZ45ntpv2NPtPHvs7fLYEg6paMLBQpsabfugopmUNbKhBdUffomcXGPG6gsNDJRUneXgdh7kzwKEVEZQ9Y7eE7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rpzB61YNhVXGL9gaKhhGQuh6tdxiUh8Qu4PJ6X7N3EkpvGHgVTbQbtf3t8PG2ahLNKSunBd1229N1yoo4QGjaRW",
  "key1": "2wfrvd8jyH79Bu5hxRUsASqma5EQyDawgtyk7HVWCsXMedDC1irFkBoLsAonBHhxTWsv7YH6Lz9gvd22k462Mtnn",
  "key2": "5g7uy5ctPYvhBTFFwpg3kiKThyNfMH4Y8iJBhwRj6JbZ6jR7cmxwXoxSf3bNcMfz8xJd1gJNJitz7qJtFNetGz3",
  "key3": "5F6shVxRfEBUEtrpzSS1vWE9pCo31ZAaKkStYvbQATkhiAgHE3arTpnGdyEbLwS1UaCbc76SD6hvPPYFsEDdHFmk",
  "key4": "2vkSk9QSa3qgjoDMRpasEpGpNJLJYp6kctghVf2sC1REnnsTVzZE6Es8ZEGAUvxJTreET6ZNJL3RWdP8h9ysbYp2",
  "key5": "4knAQQ2nj7G2vhLR1ihPw3rc3FVZjxfLPNTntCRjokjgVHPXEybiscMhntMupHmv8j3aCGNGbbGz2ejtH5YbvrcP",
  "key6": "4resoeSjTi6JXQuxxviAwTBNY9ghf67GnM71vJY9yUN8hDkwcuhPRbfUT4eH89buEqwnEaNcX3kcAFdQ5BaHGzjV",
  "key7": "4q6MXfgHoN8N4XxVyuGa6bxbQV3CABRE8hXibtUYapmzLzAWTBfMBAwRPHyNj6jUsosU63WfT16jhGf4AezatBGg",
  "key8": "4Tm6c96fKv9rRhcfJM2PpDqx3jBEFNjazzBNhUzDXWwnYs32GGswqzrry1Fc3Esbnk2c5oBxYt56uewWDDor9pk8",
  "key9": "2NPbE9AodiE6gMm3c4BeV1ZJMMB53ZHaCGoTQSHTPsKCiVbSowL3yyP4ZcgzXyyaSb5JrmnJVpKVAemqBCg5a5eo",
  "key10": "2EY3K3rM5aKjjaHNnEnGeU9n9hCGbSuE2j6m9HmmFRe3Y7JSNoamA4HEB5X2kmy18dHcrpmJ68Tk86FJV178QaWE",
  "key11": "3oW3HJsEkcqZjNvP7NYcnxEq47NFpEKM3fV5jAo4e5kvJYB3hyr1J5c8MVRy1pwVNWcCQLcm9y6vXSxxDtqqk8ym",
  "key12": "4vz7wfb5E5fw61PJ9jb4TNjzkD21TScbPyVvJJG9L1kAWL8Tz5nK8aY4Pi5gXpdWqiC57HMLxVVCoQg86ru3L87e",
  "key13": "fV4rmZviNqq7j97TogqFk9TkzyTD1SNZj2HsMxcJG2NzE8DK6NaX7wgQfbJNCUZeZpbdoVzbBmeANLRpaYM59Y9",
  "key14": "kv4VYCbFsu7Bs9GDLRKo8yp1g3fW11SbjeXDk1YsYudhfbFQHm6ZQd8wnsveynA9kXuHg8gmfkPZoMRxu7aVV3K",
  "key15": "4yk4kUXkLbsJoWckn93av7M4p6JVCn2qN4Zhm5j4nJZzZgYvMS4225vknD2z1KdgQ81SJZjDkvhcijWJ3EPADoPK",
  "key16": "Ko5fhxBcnpKy1AHaRcYu3R9tBcsgLeyp7Efw4tdchRM7HvGsSbj4yLUPoLCW9X2wreXBifUnwv7AL8fMAjrvAo7",
  "key17": "WUwDJPQFqDnePSLnFpTu1v1BWCiNYPL7egX2gWcVit549isRiL19e2V8KTxuJ2gSd4KjxVXD3UsmkUKYzSDh4Q4",
  "key18": "j4fpvBayjFEJAaDvCdyqo5oukGAf4SNBEYneSUayJ4c59huGiwKDFtCne2nqocJHp8cnd55E8f5DTCxZ67byaWa",
  "key19": "4xbCmfuhGEyfuiVRGjaH5ZxaqfuGTVnfp3ypsperYdQQx9mbpyfcC6vb4eSyjZxHUXr47wtqrvnSv5n8pGpFThRJ",
  "key20": "mtt9712pxhtdGCZwy8TyscFpPg1F6qpwcwhGCdg8YBETC5T2efPta7HEGzQQUmKtniKWLBnRYVgntPw1U2TkC59",
  "key21": "2Pogr2A3kWPneebue1m7sdFC9tVnVr6bfQjq1Frayk21tbSdEoaHScqLhSy9NZtw9zWbApM1pwADpzXtX4ZMggg7",
  "key22": "4qq4sv7NYfPqHACxPYzYryxM5X56a1gtX84WTseR8Zjkd4T5YWcbKaydrAXxU21bzJaqZhfhVP5nd2Cs1Va5w24B",
  "key23": "5R5ZERikmJVjFafVG4ZPXqqKrL7WJ67wiDpPz1je6FUoz1J5WSd3jyxngAtJf3RgH9eDDiuQS3kAZ2mLhHdbW92k",
  "key24": "2YjtacLiSBEkiNRz1z5LGgn3RPWfijsMgNDc6Zo5fHZZVMY17dkKqDue77a9WzK9QkBYwWjsMb3GCSCn7mbnRr9A",
  "key25": "2f74JrjAKhBP1GiHfcx19qFaUFAXtqbJTqyp3RNmp5fUAsW3WhLpA4MhP3oVokTqBNnKibYKNd74WpP2Rqm4Jipj",
  "key26": "2v5vQEzc97J9o3WFgx8pTsXt1nDT8Ma9tpEdq6sjWrSZ2jNYtxrbNCEnuePJKsnGo2SyN9DAdWogidfcRZhenxJo",
  "key27": "T1JzPByUEL7LNaomBQdSj62NAnB2hFpvnwY4uT5amN9Me3nhk7ZZtcuTLz9qfqEdAdMB8xTc7iK8UZahVux5Jhc",
  "key28": "36PUjX8d3oUqc5MWCXmP7rAA7kAkixSmXPayVJS758BwKhuGDsU4KF7dKVUk6Nm6J5dtKKb4w5Z44wejgVsQkjjd",
  "key29": "5ksMvUQD5jT96zQjZCWw7wvdQGNTA5aNPYndaAR9rG5Qn3WNE9hwsfSEPVoPBBbH9esxpdNaUf7bgVG4TDgYK3Ck",
  "key30": "5ucuLqiHyKSWfVYTaQETLWviJ6bYeVb866YRXVAywZ5LXYadWxSvyaKo1S3SZGjAAu7yWohsQmc5zhgteCeqFZ4z",
  "key31": "2XhF2mLkXnWDSvEAFtrA4NccR3jAUMVTtWWn7EvZnxCC9MwgVfquSjYZZoSe5muwpFZ2dU3bGMuaSxyRCvbnkmhz",
  "key32": "4tYXugVEHc6AWT4rF2Ct92S31xHFE7j8W1H3CDpxXZYfdHfe6WFf9ciJC2NtavaktJxJKi43xAdVYw75C7eRcjNn",
  "key33": "5FUrKNyv9dy2Svfu3LF1HMasNeEVFJVWEKYkpFwWqKkieoQNfgVHb7C9wtNi7Q7BXkMcNbEYAA3wWd3BWLycgBfq",
  "key34": "79ZU2EeYcMdLD5KdRKo1yeg9HefsE9z7YWp4UPSiZ3MZsGRoTnGEDvdo5xqqgCGtmYsBQPSuC5aENU2WjpH3Jy2",
  "key35": "54wrEp17avfR4WzCBPQiHHwyQHg7ZKvWTLax6xFu2vpqrAjrR5kVJyW8DQko4DnahN2iUHRLs5iMBmmM4HJb8ebw",
  "key36": "44CsTPZKAHdx2Rv8cn5ZWGjfz8QMEZaCvJuJwy2eX8J8HAvPH2XbDpy5m8VXRYvPyvBF9cwiPbzYFat4nd77cWxP",
  "key37": "FZdg3MsqX6dG21aH2oRDmifMdxht2GiFDobBPsN2ENDjPa7rRw2gLzDysLSfQJnMd1934gjL3aMYMxVh5R3WyFK",
  "key38": "2BeeHe2u9EUaG5vNeNJpmP4c49rxPwQWQ9YpKedp16LhpatJZM2ERGKQ7K87C8AeSJAZNue84KAhaYTDcAoBBeQZ",
  "key39": "2wZBzdUZJBGRb4oRjdvsWccq9PJwyZdAXptQahoUuTTohWGh26oJkoLbyeZkMeA37HMYfnUio8YYTDNqt1Tm3t8M",
  "key40": "2vS2hd65sFduf5ZbXiLeEf82dSZNNp3AAajGZLupsAFstgY8jTseq17BPDiPGz8PLzGY74hf9qysL4Q52k5Lnoay",
  "key41": "NYPqqyTfv14zotQab74ZXkUh3K8ujha4auiQXq6WFEak455P5JdNaTu32veL6ReNWjEQ9M3wSV7NDL5BHqrCvty",
  "key42": "4WpqiQ4obzeqHpA3rvqNRyTuGFAmJDn9Ry2bFgvxyoFrDBVnLCs8gGvQcj6ZqfsN723hXPo64cSMzJxZPvZCMKzp",
  "key43": "2Vn8vK2qED8wH56NYbm8BvGNgDRTPovcmMrYb7zw8rb9FRd8XySGEZgCu9EEftFsUTLruH26vCh7qNUQYqAqWoEV",
  "key44": "3GK7Hd4ogYUYYDoCpgC1xMfPZFiuUVNxumrMjW7wvryTcyqCFj6CE5Vqf27eRKHMFbX9DhMM2i6TTPZQKrqQLMJN",
  "key45": "2KPgGvg8VWxuw9cxo3NJdDZALVgVcGsUCnaa9mSA2vS4dyPHMajjcy91ycDcCrvMNSmSyoLG2hmKnataU2gWKsSV",
  "key46": "4Zxz4YGiREa3GsPu5PRYJeWHPgwPAYEGub4gjBkcFVnSEQyDvSjEcdftEfzjBiCnLZdeNQyBH7ijCjqXFzkEBAh1",
  "key47": "2RxjBRhNRKSxySs7vk8m5zrLEtbJzKbs4watgrR5G5F1swZXKhmZiz7fWWdD8pB8QubsahWyz5eShmhYsexGBpEA",
  "key48": "5vfHgjD2Ej8VkSgaKMr8YTwgL9YkcjnD66moajjpQ38LhpFoKte4GCWK1iAiqf4ieYxqPEy56d9SLqyNkZbqKAsD",
  "key49": "3iCaja8LfhA7Nt2tEPKPVMzSHkqDiMUsdoEUk8yXjKWKqpjoQGspRB2juYVEMt7PuBzQXygSJoKikzPk4qHXKhBv"
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
