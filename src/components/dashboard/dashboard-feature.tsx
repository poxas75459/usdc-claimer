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
    "5TXaQTX8BsBqa7AEdYQmmKtiWxFH8swHaVWkrPYmY2uRZW1q7oHDd8uivBHbviPPxz5F1VoTFXuzjmZFXkizVxej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZfTJhuYfRaqgKXQXjDRYjgMeoBR8tLHcwgravbNeZePftmSec3hP6gvFMuFtPEY51STCqWnsAiwcJVbMx8nkaoJ",
  "key1": "4Wu5WyfJFWhkwMCvubLbdFAjJ76jEFRpSE4cJc3DUYzeWpwcTQbUJdDPzDhBaQo2iR6p17p46YSnomhYryvwSzqf",
  "key2": "2bVDfjmjMqpRAxUwkfub6B6xAgsB9zCfissYG7tSXcRL6YRFhkiyDXGcs2E7z8g8jYkv9hum3Aot4zYoXDBNHXEk",
  "key3": "5uqpPTtTGE8q4VK8ETBsuHzvfohDN3vkgCjV5bSNFqe1KH3UzdLfL3HnXTSs6buDsHBAhy5yAjk169usrk7r2MZM",
  "key4": "5cpnU6vsVeXYPq4QSYtviKHjVKME2avvzruoHW78QdUx8q1PDvBEYAAN67NRwo6jhT7ygUgv5XxWUPVyRvNoEzeE",
  "key5": "46Z78n1Vd7SshcGGtvNxG8aEQLhQTZCN6CUJrusV7KFSTSQZ91MegAmSuR4cno1GkEQBHpMezz92A3789HKAU8GJ",
  "key6": "GDG5qGkCembavMWetErta3uYoLN91ySa1SKiqxzf6PSk7J9D6n2sfVwaMBLs3eHne6zV5rcYNw4ocVEQkpGPaXu",
  "key7": "5gqtva9u7pbVhENs5WDMkUi1K1KEVCmdHAaKa71mXQ4EMLt7bGPh9QCWcgyEYt62kMe2sarA3E7mg9PaZPcZ5jdi",
  "key8": "37KAMJ7d6HRvT9FSjrSHTrLzK6B8kTAGvG8Z8NEVgz329so1zzdWtReDjJC1ett1JbeEe62ypgFwpXtHT8NgPcyc",
  "key9": "4J7bdf994t72chPLuu44YoAC8xad7YoQyXKZ7ZNbzkoi2Hk5yg2iY3QAqzoEZJcahi5zsNkZqh3BYZKA2EZvEkjp",
  "key10": "3KrC6JMSzxtn1dnnhFNm6jcWyQVmcMt8vbVjXKE2Dkno82L3b3jGmCuFpCNACddZRxHUvvjCFT3kLW24C7YNSexE",
  "key11": "5ucGQqKK2cqE8Zu9DyvyP4MbeXVBBhAFY8iMjuAFYQYgpfZpvJFYPGPmqNdeKW2rikYvuSP4Urh1P9GQS9sXnzQP",
  "key12": "3kkzjvsgP4i2t2DhVsv9RyPDgg624cJJ7QtJnhMkAWfDJvCV8hufurZHJJpkH6shufnGEH8tVqjCXN5XEiqFJc1u",
  "key13": "kvJgLZtXwz83c65Tb9vAqGWRpz38URn5rD1Z1WUT3NK1EZz53iR6tyS6T51qc3YCcexvJgWPAHrp3V7yWULoksW",
  "key14": "LiLBS82Y9mpiiXKZSykPk1sgWCYAAytUZEJH2xpPRt8d4xKJAbTKr1Gwb6U9iYeAGbPcXeVWJiJHVn9UyxkLp7W",
  "key15": "5UQnacNjkVer72pb2bbMCDAYLP4a8oebpauB1wogBo6YV2QjkqCiR5PWMVnPQVGnff9xtLsJkCV3zpwW1ag4nWot",
  "key16": "3RdktpupogdpqZYFHaZcgjfhhtZdp31jpQEEpgGcUmeYZyypCfPLFYsseSndhC6zoSYVaEDUZzacjcYT9fsjwLLm",
  "key17": "2yCUP1CpmvjzYSHLUq9Mbys4XHboyNh6idmWsuv7aLmzpQBKDyPsmMvuCCK2Bv7ZNAcrvsttCZ8x5w3eGVAn2MKg",
  "key18": "3EGKw6H2jNzAbzzSFifUCTYXfbQq1TESQGgwEyp7DSE1WJYezYCT5wpucrG67suFLQ7qwBD7kByqYx1ysmWDnx3i",
  "key19": "m2ErkWZHWwhSzuY7ZyP2mNibFTFBG5WJihDEDgVh3xy5fn3vWzjMNBeoSykwkLKtdPsP3Dyq3r5E5CWBwgdvVWJ",
  "key20": "54ZengqcynudHsKZqQDE7HM1jj8pEJPnBvNfvfiNKiJE2aZ1i3YcNhsNyL6uDiKoP6aikLiNtVYnuT7btivYx25t",
  "key21": "2xd9rsGjyjP9qMxePN6YyeRxLDfBpnrD1iftjWaFUPw8FcYvPpkYjttJYQcPwyVqKtxv86hJnX9d3AjMAiKq156n",
  "key22": "SxDRbFQccsAMjS4gEAfzL6ZDE3rTbv2zNV3S9CBSBnYZBBRCEzaFcNLGB4mSzJtrTvJgWuDPGVySM6BikrqUM4e",
  "key23": "46nQZ7eWZvKFcjrHgi7rNrccQ139TR6Rk8r5hiLuxmwcMnf8WRAP6QnFubqAJh6CfuPnpnRQZwuf6MYtWk29FRis",
  "key24": "2Nf3kwg684ChmRWKtvbnj8B4mkpbXtJmLfTo46doQnLfaAPyMfc5eRYgWJBYs6UcN8YoyAaSohiX8weZboZvJzuR",
  "key25": "9g7DZLMm8Dz8we9fFSqezcMtLiyqYmNzHhU6Q87VCUJ1aWuqE4HMxn6i2qQqTjShNKzwBDofkLmuLGWcB7qy9EK",
  "key26": "2wKh9GLxJ63gfdwzuab5Zp6Fa2xsRrShgWdMoNKrJrCD6vBmW77zdnZRcpU4KDDh9MhfSRMuXsUj3ZFCUGPcoW4E",
  "key27": "25tbGdHXrn2VpCGC7x9xqcwUBHnA1R4LaKFJdmJAwvifJwRpwU4y3GNgx75iV1rnYqcHxS525JcL2V4qw74NfsRk",
  "key28": "HP63NqnrHcLTRJxzPuD9tpHZf2Wv4JE3ExW66SppafYkxDURxD8bcSDdu4ZwyinBJaAN8KCANneARstubSkBTow",
  "key29": "MHp3Uj3sGRg7tHsStNHBcKT7bnqcUhb4PvC73s1iJmNJomk5RCFnQbU4FiiPV9t2H2nFfbEpxRXsKzGcD83CViV",
  "key30": "57A4cibnNXP1RR4J73JPCv8y5hW48HgJtu6Hc4UR8kd4qUeHNGSxFzdYvYp2dXYZAXTXUBWQq2iP25ZAsYAGZjAi",
  "key31": "5ZozeLofKHfsMYn2VfRZD48T1UPniVzdEoamBk5KAt7HckEqkexa5TdSiLax5xC6mmfVmfYPNWphSX54jbcvh8H5",
  "key32": "2hZfkrszS1LcMBpicNLfcv1c9hQZzYFmK4GmsJHNVtVv4fDVHewhKcg6VochYfdNnUvVpsPF2bfoChYRBQZXib68",
  "key33": "3nogXaGFxGc23C1Av3hAqKpLgCxujWsPX6sRLsBcsKGWe9zpJmhctfo7T2yfguzrwAW732HSLALcGmnAsSNE9QeT",
  "key34": "3SLYaxBa7CFMTxmpMcmVTx2D2iYoQBT5mmsXAATi5HMLYsm5ho7oyEoVG7i16yYGfAsWCEvVUpNei7Reco4Srb7z",
  "key35": "3XukaqPcFpBibzMDrHKXXAWgumHY3BpTVV7WJyv1WyoyypWS6XQ5bq1MoGc3fdV5MheRnNUD5xoiiHeZNCFSsJum",
  "key36": "3Po4EJ5qPPyifFwcjgJZLH8SynKKjHZGoULz3mUsiVVfriVWzEPz8Sq84JkuLNFHmMQtz5zvrkSiKmEwvYabJwPK",
  "key37": "2o2B7UCg6DykhWV9p3wKwohYRCzCvSbCViqHfpiZsGyeVxbY6Fyez2tBuYMrJRABDVuE7XmPfBtrPNhv1qKdNX1Z",
  "key38": "3yyd41TXbKatcr2Tb3gBLscLjsjGef9V6DBTw42J8LQj9jhRYopnQ86KExfL224WHBQkTS6chX476m6ukAdLfZaV",
  "key39": "3T9mtSmHA6W3VuUsJtZRdPWCp4cQaZs1hvLpKcS4MeejUDWfHbhDRbvNCpcicFwLWiwZt3tPMaY9m2hriScF8YMV",
  "key40": "5PCq7acH1XLbHurpAX1eDtXbP9TJbohn6ThJHYFbMruCNrRmji6C8aVvTizAxGmoTHRWshYydas9b6neh6HktZ1U",
  "key41": "53Vj7QsAJSs9wYWYveZe1hEfAmNupuRfvP72Fm8BvtJ3sBDvDJKhuTjHo9WSJSBorsiCsKng2ZzXJPxQEumBZRUd",
  "key42": "rPCpqncrStC7kicTnYffJTCuLL5nDjib6tzgyxC1GkNibYx1DohCSWJ6G5pkgy4L4qSZjEzkifjYwbYWBiXe2s9",
  "key43": "TcDdEuUp6zpbGbKX6iVoAwUYw2WCZameYjKUExRxV8U7ypUm8mHyLS3EziPhS4fFv7hyay6F3KYNib7yVWc4C6C",
  "key44": "4hRg4ZmXASQbB2Z7Tpp83iGGd1xc96kVqRDLnTnB2g2aB4PTETdZVYwU8AUHRLjXwv2qYmMJjg8wDmWqQTUSKRwf",
  "key45": "4L5iXVm7XbNKNRSVHg1WxoftVMb8sspBcbqpFKdmn8ueSu6enoD4LPUUXGtrBAksCvc9iYCE2dA2z8EemHeMXEas",
  "key46": "t13GRNopydntXJv4FF6qjdPNXyoLK5KmAkZ2nAi5CYfDQNUtnK1tfkFJv8Dgj81bmX95zfzPbsMqd88tDGwYm9U"
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
