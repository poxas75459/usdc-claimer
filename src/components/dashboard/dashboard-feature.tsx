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
    "Cf1DdagwkeVXszhUde1KM3us9J4q5RdwDGynoLjTLbgwryPyuW3qzzoxraHX7fTveB8y2Ac5faScDe4qUK9WwgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmbiVrFAHoXxWMgVQRDcyqYkV5T2hPePBau5WU2tUh9QwGtSiq2Hfc9jbAhGmdomkERhumZF4bhHEf9R5U4qwyA",
  "key1": "2muYjRvLxJCJQuxEdurPW4tgUZHYcXgJS4eKLxm9nLDWza3DoxVyCmhgiUTZzDgdDusjKnbxNmGRYkHTRn6KntGZ",
  "key2": "2jzZtCQNWwRCAKE4WwitYyvLoxmZ3sZphDGT6EzXsLQJqSaavompBzbWy3peDf1QMiyR4SRw1C21dqxSvYkVXVRk",
  "key3": "5EwxKJaXQz6hYm6s5YS6P1iXXVpWYkS7wj7WD3iFEWT2yKKDsit2tWZBTVWZHgZRq6ZZGjWEwtbQySjLFymz8JQD",
  "key4": "uVaqAfZkZ5cj9iof48aMaR2dt7VJzrrp7BLd7iwj5iKmjcAhugNzbwNbP7U3Zy2qWxxf127xivbs5Pme6CE4smA",
  "key5": "MvQNNgXjTb2je81gy9MNc9Zb3jc1AXix1gTafADCvydEuCotAsZ8p4eaBtfiD8BveX3KN12t7prb7Y7gQo4LN2G",
  "key6": "2R7fLcubbUVkKgSJuaGykPg1sevMZ4AP9CUropuD7YjMzd2dkmARmDGDJmtcW73k64Kjqp6CYyWhFpzSGS36q9av",
  "key7": "311pqN4YXFuhwHAVwVk1aG64aBwh31xKhvAVSMFbSo4tcCoHDUEv9yV4xPUttymYKmSifktWCwzfLGHZQncf3g7s",
  "key8": "4uZPh8sGX4rur8kdYru9GjbqEBzKxMz4xroLoT5ntTACDHfmC5rXuRsqY9N92hdZtCFYJAu2pQ7AoFfCqtnWdnAh",
  "key9": "5jiyuRMPZ7DnohgzzPhbQFcWWcgmg3tLkVaiRZPbJGGcubmnQ9NssqaQkMdVsiRcMrvFTVCAjjygwPUY2Khu2T6x",
  "key10": "28p786cWhY6jTM35pLXNwaB73rMY9TZwL4nYcYNu4aFn92JtRZcGTTeVYMwBk9m8KtZuwT86SKENx3wknecX2MG4",
  "key11": "3TEMhxuP4oJmFSH6BDnShMoSWhUL48jfC7bYVGR7nS6LXS1ffAKtBgqkx8LGsgfrXd8AyKeUgSk3JEft8CMCzEAc",
  "key12": "5fqABJQ1d3tR2999QuBZ6H3JUNrxY3643BrWweKwXqibVjSwBHSfUnYD5GU97XNsvu1dHBgGgJSPCg5MrbRq16zj",
  "key13": "s2GZhzLQKNACh2rhNDTGQ7LVRasJHyCwzv5QQJnsvQkskf1ZdGquf6VuSvnrk3XaeTq5J7gnV8JRPznBS3G5LmZ",
  "key14": "2C1rCygBiygxNE1QWpNXgKRxEF65MZZ7Trno55BjQg2r2SPa6bgKju2N5Nu9CtH5dMFFVKjb4M5TjRLJ1X7wkJng",
  "key15": "swafYWABzPKtckMYkassAGcUU2qApbwY2CEA1tqQQER8axE6zRfVpKBjHT9KWWE8K3ywurrLtz7JkMbphpeNkg7",
  "key16": "2UC593LbCtPLHN88S9ccXnzWTkcKSKeieSfa3h1KgVwaNVC9DaF553MaJTesiTYmSsFQAw6Xr8G5Wvqv5YGun92C",
  "key17": "2LXHbYjtyLG3KRoBW1iLiff6gipXKjH3MtgTfL3JRd88onDMKy87EqC86GF1kDTSdAh6M13JA6dB3opJA6uPnzJQ",
  "key18": "58oMY6JiMfhvxLTf6tdRVfGNVjtSs6H5tKSKFRMS837Su6nqhq8TqbTeMbx8dKwp9SBrFMzrWyFCuxgsqxMqQJbp",
  "key19": "ZSEyBgtrZx6nb3HYvUZPa9WDVLxQyryKEgCGSuGD8ZwKnhXz1jkkgt2sVqDT5hYJbiJoxGRqWR4yb69abCusBMG",
  "key20": "g8Dw3ozvUnFaSpW18eRsfsVPxYqJ5pzcbceJ9WftqYvHs9UdeakJsQY92DWy92LceAsvuWmBMT1m22UWcQgtExf",
  "key21": "3Rn5zv9d277s1T4YRMc1nNjTHS4Eq3ArtMz2GPKXvvebBBRZcGu3fmak6Qwrm4p46wobkJYDsARCWAtKU3Smfdm7",
  "key22": "2gHtLb2T7MF2HAF5k4j5qn6yYb5Pz7U9roYyEatemsW63RDiLhZoZZBtEqUCRqftDnSwt7jaVnmsQ7dV6Qtp7vFL",
  "key23": "2tByKZ682z2QqynfbE6Js149E1qXXF5HoKoiAGkmszVbmpxmRgBJfaVgvPXoU1DE6sh5mj7une7wyGv99TwyB53Y",
  "key24": "2qKju4uqjr7eZGRmUsNcqiWTbohPoneqgPzW6thpF1sfX8fJeMbj4AP5QTfTGSDG1U9Jc9pVwPDgdwob4kjWKnfg",
  "key25": "MvbV7VawhWPCGhP7aDJDUzdZmV275hzmAip1wUwYgGshVrdrrFmHHWvQFNNaSh9V2TLJ5DUC2LmCZbRWrHGgDhC",
  "key26": "2EvUGdd2471pH1KbkigYCTmzq1JCPsW43SgTQSZgecNhzNT32JuVuezqymsSeNBQTi5HbbhPE4TuhXBRJaPj4w5i",
  "key27": "5rHxa7EMYWYfREsWsjoVJ5zqSHdBJpcuHJYwpCrrw6uwzvXws7tiV2skFHYsgRmT6JZaHMNvbEMdhZrtBdVzKr7u",
  "key28": "2Qq4rFLdejZyA5sEa5ugtoPkCH5QXm6zwB9pZ4vZzoPcD3WPC7gZ8YyXkGQYivVfxh7LWXeRkngtDGXrbSyYaZqZ",
  "key29": "4iHGngv952thvFY8EinA1nKEU1nujfSd2seVN4MVKaHxdScodpstmh1mb7vSnLKmXZPaLdyptdDpbpiXwb7oWp1Q",
  "key30": "CEpLREFexNqTH9HH6C3pMXYwcTmKhZpKHf8TxxcGaLuDRwWoNAJCyBEPgAtRHyhbshADvhhtyMQqX2jfLzAXkPY",
  "key31": "5k6mduedLcocRBQXmogCYijL1dpv5MwQhKgbx1p7bNNx97DnXcDgdXATvJKSCfpyRk1BaREda1hhdCjyFw7Egpdw",
  "key32": "3B6MS1SGG4mKyn8WWKy3zuCkD5EDK41PxHH8eFE6gDxmwH9D4gwxMpKkf96t8GYXKxz8Nhug1JCrGVFMgjfLXP2c",
  "key33": "2ASySBH424jUxNCt3jf2VR35UP6SwsVsYoCqsYUyUXGEkG6V5j2kBHgrW3tUddXtH39kFQfB5gDJB3VvJqZDWrM1",
  "key34": "5uHFsEbrmj1HENa6gGHeyjdNRkPAH5TdUYVE7mE31bpqbYT6ZWCFpArLRE9CnXMw6svAxJMCZ3pU6RgKztKZL2zw",
  "key35": "3yVJDJGGBoBuRpKGxbLrjgcQmK8w77hyZ15uSiykmmGStN144aqbhe2Sbcjo6LHjisusZPUYeTRM6AEiFzagJVX2",
  "key36": "2WJyvsDYhAbpajD5NoVushNdRksLFFHuNfWYqt3TzSB7v7va6xLgcxTrYf28bJUtAWLseRYuZHs2e6tPdmAmF6sF",
  "key37": "2cSwfxrrmPLdUf2LeCkd77mHM1WFsQqSydKiRURTvs3TmRWS5UFMEKwAyMsxk81PjcKeJdMWmo4WQGTm9AZcTpqd",
  "key38": "3YM7RPKpKrsDouZCztkko5Q95RR1tJfHQNBKHfHrZJ9eUAVffFeUGAwwm3xkzDcL3LmiJYUigRCN6YEgFKBnFWkZ",
  "key39": "32oBQHeBnz6113F3KgBLpfjBchZdSLiuKdw7G4UVvyrnyXn6kMyNuWT6119TQ1YJUnZkdY3xUP8Ctqn6pByqgr95",
  "key40": "2z1V5muQfXQXmjfVZ6XM5F2YrZCN6ge2RW41kLVdqH2mBc4tPzyMh14xzxkML99QbMNcn53uRs7MVvWU4SMCGoJH"
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
