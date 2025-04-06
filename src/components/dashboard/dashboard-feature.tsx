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
    "qnF8BteDExdV5WGUP9bEbNCHxCWNLi5nXeDKQ5a18uezAdAyMreTvNbhCnQuwFUZEAV93frj12ZFSnU9RzyDZAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39CK8NoYPNv3RSaKgGxw5pwFGBD7i8QezKjVZUH7hLyjGbbsrBAhANQCBGZj5chBmhvkhNEYcx6xPiobFv6MsE8B",
  "key1": "67UZjr2Q9qY27jU7u4qTFAgjyem3aPhj9hLA6vV8RA8zDkRfJVVPQNnryToMp4nC412sA8aw7Z2Ro8JgcoALUpLc",
  "key2": "5jmeMYr4J9fvVsT2yjiuNTHZdA29p3B3eNx31UY8RVe5C9feW71ENbXNgf18NLqza3ms1LiBvJeFNHQ7MbzQgJx8",
  "key3": "wd2FC2ZhPGjid41umd21ZaPmZz4z5PhZBirRJ73rQPnEJ4jCVknhKTm1bhGkZQKEKExhVthfiX7YahaCTbkoU96",
  "key4": "4561MV3D8MzT63ph6seUxTc2mYF9igJ4aXMALrJa1pihtpZNpsQ62BKB9rkJc3bG9eCvHKhu4TqzJvKJq7CVFQYx",
  "key5": "3592dyYtoRiVb4A7unyMuY19WTSqUY6Ze4mKtS1svxvEWNEerxyZZ45uQZatPi42kYyp675YNDHDFRNCcqLDdYbu",
  "key6": "4eY7efLMXUo5iCYdZH9Nyp4JkVdgXVDq1Kzwkj2iAHzJ3HHZAFuL8XM6AbMJADCCvPK7eLHXnBWjkoweQeHD5gec",
  "key7": "4Qo65hpU96B7zBzJ9ShSSJJ3VdHoZeTEGr1GdiArhRWoQaK8tBMYcNzEgAbe2pmq6Geznv2aBjVF6VN21PJgquEk",
  "key8": "Wv15g2ZAyaAYacDGUrWTXM2kiz7GGiptx3xANYZjkdMwcA4CBX6BoruTQG8KQ92HhZ5LAKU9mRgNYsTFt3t5tRz",
  "key9": "4cY5WUTeN1itJGbrUJZwcotjMQt8eKeNfcD3WUqEAdqj23gJihnRECpJH11Bei18yUoB663HUFbMHq8weAJnwhce",
  "key10": "fkgfrerJNpMPRh2M74vVE9qytGVGkQVCqkNxcdmYU7yKtPQt7jQiFPo2BCHKPBjWrUTn3JfAk2sqeJJKJFggPcL",
  "key11": "29mcs1TjDJ9vmrrsfDsGyRo95DSUFZePLYxWLRv9w62Bxa5gLCCTQoCvcBparkNJ6nFoZbqQkyZ4jGmKo4bmS6hi",
  "key12": "4CdsSj574B7sUfqqBDm2RofuCu8nVzW2RiG6ei3eiwX798AWHNzfopDezu7Rsh3hsvyzq1GAdNWfgXBcYZhedoZN",
  "key13": "Wu43q3iZ2Er12vcuMhz4fh5jATpg3oUYPemxjxhfYtSQg6s4AxN1NxKQUHmTeUs7VBNrD3dQS2AsiJif1CNdRBS",
  "key14": "4yKouvWAfj1TVWCgpM6Emtd2RvMTRt2xVeUrD8mbAxCBvmNUTVKNeLDVkSzzpmcg5dsp6a5kVrUFKapKjBnh548F",
  "key15": "3g4isKm1Nbdbqbqu8mpkRNx6gGXCqa7oxjuKcRXd4JMpqizuzc82BtW5Yz1MKLfdD1s1uskCk2YbJAZZTaxWuZSt",
  "key16": "5EXpYaz34v9qLGzjz1c7qjJTbE97sFjEozpGK6FbCshtszNcypMj1pdjJ4DoQS1CKpDJ2pbgcZaBGbd5gXc7Xb7M",
  "key17": "5PRGacrsosdhFVRyzQfTeVQA9P77mvPwe2sgEm5qRKMhBFa1yvpBW3VpbWWAYpfVc9gH6mx4iogPDmChZQpXrwK1",
  "key18": "VjQERqeN8bokhaqd3S1BNU2uz1JvgVRyTc7kpCbMP4wzjRyxyr6Et8FuEiWEgfhNKF4WHUGKVTwatJeABCSLc6U",
  "key19": "5M5mV4HeC1PYdHmYyUTvf4jusDav7yHoCNQSssg3RVphvo33jLuaBmSSY7NAR3mCfhM1HW1mQLaHzPPNsaZduxdF",
  "key20": "LDam2XNP4a2HMVJfr143zQtk8xwqLadWn8iB3v1kAGRbSdCAppCrZ3T3c7tGNz1JAtk39KkFeY7uGYS7f5JAdf6",
  "key21": "65AALGb7QSxLtsWEmg2fh6UmkQzbWkmyQWQLkRE6k8oZ3soHr8YC1hUFGPy6FstkkE8PcxWrhoVAogW6SJHfycnf",
  "key22": "61c8KX4fE7cATsHMpFu5Nkbkk9TUf3RRFVWohQq1JWAWC2hNqbio4YYRtYdvZ2cwCXk3qM6QFnQDa8ipegE53cjx",
  "key23": "128GGNqRncBAw54x4fiMbckpzHo1ubmMeKPGY2EggNc5k9UY69gHo2YpXJDk5mDkggvXuXqDDJWWk7WF1NukGMsJ",
  "key24": "2CPtEojZ1fikWeTGvoEeWbYYbp3EQs5augwRYqeaJUd5SjBEnoQJsbMjSRbymH7dbhAQqbZyGykK4AhaFb6A5YbE",
  "key25": "3T1853pbT99C3pz4ALPDCMBEC8Wx8xrT4RNVgk7rqbi3eT1x8EBYwWihJ2CnNyDu4APPiCrmbwX3zRaRgackRJZ7",
  "key26": "LgQeaFrxCX5ojqaak2VvpmdAKiMmRk5VQ4pL5VLVs8w3VuhY5BRSm1n7GVaNsf1bYtBFybmXehBjbwfqzAZ8WAA",
  "key27": "5WnRxsYibGabtX27vzSba3HfRgvY2mQEnEtpjXg93vNcjcPeZwd4YUZADaefLpVpA28ywwhTh9omreyXB9nuZCEy",
  "key28": "4uKo8a2v9VChUtwkPPqYL73wg1GYJSybwHtFj9bS3ncHDFmeZbUCuB8FNQYNLNcqUnAX9WAe2nXSDNZoUt6LFjqi",
  "key29": "kYbL5oAL6rsKkHZCzayqgAg1eaUSMDfn5QZGbSKdxkSNqF8MFNSZ5QPANBt6E79bWHPom5huE7uGgaqT8QFApM3",
  "key30": "4S9V7KwcVR6opmS3ACfWXXog53jiJgTVAqEgzSgoV9gkKYAVaRe3cKPdeBUti1u5BUoqTCZYdwJPMcAZAvPgrSrg",
  "key31": "3xkmYmxj4ryys2ef3pMxwztFUSbEQgMuNSM7t96ogLqGQViM1a7jvMH7CwcEyJb7Pab2x7RD4QkHp7kQ1U26Rvcd",
  "key32": "4FeyZVEPNZponvmVLKniY3NrLRVkAFihnvcqWrgvzoidRweZCEC43WZFYqaRGryHcivcC7jWc4AwC7YQUKUSeJop",
  "key33": "4KB35xvCms1w7g2VQ2pt2qtSTGVfkcdPUfFdkdYjjhm7uQuQCg9gpSqmmfQdU3jQ67kVEjqjSPzWLK9QGEjg39eZ",
  "key34": "37DCc4CrEd8nCMcRJgS9BLFCTm13UWjUE9fEP86Vf797KX4WiP38rrLYUuriCoo2fTJgBkNyxPVFWXtaR3GbX7gz",
  "key35": "QjvUUhBHfErEJFKpSdxLvxbnxPcysr8YT9W4F2hyudKe8CfVYqvakaWYESA5J8YXeEQXnyBUkRk4TgdQNfGLWmQ",
  "key36": "4pWhuPAFb6PUsusyyYtxBURA4xkanTvvfjeujKRc3a4hPPCVELdWuP59GDoN1wdSKw5RDv5J8zyAGvSnBrhe2sxk",
  "key37": "9tyKjEAh9qepmqzuN4ACb9oTCAvhtkq89TroE7QsGftBhs4mJ2xQGZGB2o8UmiE9XYkprFQhYERvgNE9WFpit3R",
  "key38": "3Bf8Nd7GhWGWYNySk5tdR1DbDSkgT8S1JwB78mQBBbVgeeGeWh19xLpY4AvW4mDhq5vtuFt5ZGtDpQa6Q6zoHBv1",
  "key39": "3W9uQEfcxVva9hBs42rY8hz3rgJmpdu7kfHzrW3Teot1NEckcnrG41XKK5TsVkQgHbvmMUew1PNhteQ71Mrovw7H",
  "key40": "2nyzcHmAAnTCGgJ3d3ATtzj4Km4ssRAw5LVSS9gKjn5nkxfsy5VYEkyAndN4xZhjQeMWQKuR8ebHMhesMkx5hM47",
  "key41": "4vsuW4aBjq6kPAsCzGcrV4rDGGKk6et4DMpdCPqe18q4VGoGKAbdtpeYJcfxb8rZGNJGADnE1gs4rzG48k8uS9oq",
  "key42": "67Sg5Lxq3K7yf5XZiBKttKFGNRtQffvpxgkumhK9aqS4SfTJaGayYFLetHnMZkuTW3QPgEyP7M8N6xHe1c9KKfTh",
  "key43": "49ZhjF9sptmJPzzDAqwqauy8GPyYY9FexdKMDC1PRv4DXWm5tsUkcWA3f2zJoDNhZsBwZ57uUWjfEV4KtWApAfGo",
  "key44": "4sW4YvjAvTKaJrP38z6DzbCusR9q7ckKKSc5JPEtLtMwePrU8zRT3RvCurLdtK8Q45X4KLGq6f7mdrV9mo9ahHet",
  "key45": "4jUnESFr4tswkp5v6nYq9JaSTF6FaqihqEbs4TeUN96eHcZxvwJGENqkDxtm9o8LpzhmxCALaV4UacmkjaWeTTq4",
  "key46": "5bkLB4DoVYmUr4zmEeEBggVAuTDrvSB7M373kjx8PgX7fMGrUxyneb6oW811AGETYz4rBAoJZ9ZNwWNW3x8nExCc"
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
