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
    "4A96Ht4D8FTpdDZikLTai66FBxQjTWVHHibTXN1kCUgzHuWhCy4kTs9j1UhB3jzDNfFDSkVamuNssYimamsnnRbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NparyenYTzH55jq1ZZKSG83X3vUfnbTf7EFscRQzAHWUpFUUeYnzKV5L7GVJ7RoYjdAU2UWXHgRYQM9gWNfYyJJ",
  "key1": "2VD9qtGUwYe6wqpQN3dyAKXJyeTHVAdBWwZTaiEMp1cNe1aBJ6bwEEgFagfdhkXy6hp27jJm1FsBWSVBEA2AGh3F",
  "key2": "61awVXyMcmEyxskA6tporFaBMmrjVrR8NG4DrnKJoQyDebL4Yeqcw97XYv3AMkCmRYvRocoyDRL6i8nht8X8xfbi",
  "key3": "2PpKmxeYeGGVttWq3cH5sDW655HWu51bDRv9AgVB89MJw5hzUPTbnr6rQZTD3G2iTCRFP5ov4cVafQqvkwLf64YD",
  "key4": "2bRZzx4Uz7XyWHooUuqsJv9vaHKks4emmt8XahDoQMgYDhhrs2tMX2jsFgXg55cty2Sv67DMpTwm5fNbM12SzZpD",
  "key5": "47dowmqUyCF8Q4agDFB2bWvG4LMNADCxyy9J3w7fzDu5ezh73mpYVjhQPX3rBcp6ke7913tRevCQW44fArZbXwm3",
  "key6": "5wJubUVUV9sRTqLjS9EsvLUn9qJaN5rRvWZtmiALaz5fg8PLnexjRyE14RZ9eobyj3Th7LQcqQ4abnxUF4do88oY",
  "key7": "22QfWixRvYip5tUUGXShu3HfQzLo6kQ3UPFfvds9S8uVHZ47ERpLV1UBRAj2TP5RQemXmr2CWsZFSEnWwdzzGs1Q",
  "key8": "XkdhRiQvGYKnQDEkpJH2TuJge7uFvZE6N3o6865HaYuksCdwrphJ5EZCCVyLWfvTPzcGAFknVnYWHKD5SdW6aZ9",
  "key9": "SBYxELRce5YKc6nT6DZib8UAiMFxc113fQ3LBTe5eD2tfuSj7W1f1g3U17EFoYNimaxBrSaB7t1Z8wBSX4BHVqu",
  "key10": "5mLDyiue3cbPPEHzSryWLt4TAMuJReWAyHdykYJ3F5bUpjKkYAhCS9mGeaamJkNwt6GPEE3dhUUmevBDQ3N6vYZL",
  "key11": "24tceDKpWcspGLGbEnMp7r1sSmWLVgqX3G2dmdqL9XpQLxWmNeRavpwdTrBeqXtrAkNqoQGCdcH5gv7Q8sz1qFvx",
  "key12": "4AC3fu2VH91cWyfAQufUzLoCfsUG8zRMTUoshPECCRFVkuCEhtgkCUCa89s2VUyh7mtGHP2SAiUQXeKd9BSsJkq3",
  "key13": "5JC8uvJWW2fBijpFvPNHRSWyFEWCNm7U8dbZEWeaR8dAVkzXYZSRCUthiAsFe9vTnApQyfMGJKBQAjJbsRtnTp3t",
  "key14": "3cXbbpNfZCDAu9HzoEcYg6u5rsB1SjqPhLoTYfju4x8CzJ6GnQJef9VuLbkxGHJHauowSzZjsnUskW3bfKB75Dcv",
  "key15": "2xx11rcsQWsepFck8H4BKDjHaN8u3727vNKF6yJTX2eQr2ZtW9roarVbnSREhJQgJfBf3eF7Zdiy6XGP3aK1zUE6",
  "key16": "VWTfrWUHz8H5tiUY4GE2JxaeF5XgHwR3vAG7oU48XNvofhaKQeYt56kP3buh7gtBnGa89NWnABsUVJRjsbMPjmg",
  "key17": "5UCWAdAmdJcZmoBvFY9hAx1FhXMZsaicaq2YCyjnF8zvSgWQMRx5C1sjf9gUNWfW4xop2Bbj6GAnkEPuKuTGRPNp",
  "key18": "4bAkseNq9QEmiF93hnQBjR1a7jSpFuG8LP4y63L42U7SEiPfvGdQ6bv3PE9AwHVTCkJ1TC9Q2CPqRugBzawChXiS",
  "key19": "57obAtFVskLGGEJEDDuC688VQWCbhaEiR2J1SrrBvMg9Z7ARdJpJHWKYjALfbdGtJWQjFqMP21wWNqzJHh7uxF7k",
  "key20": "5Z2uwpshkW74XTKdewAn8vjLmosC1N65f8U6sWxBD7ffXdt5ehY6a7tgC3WhKBLQUBZwPCJwBTSJEkSx8BmcVNBW",
  "key21": "16vsGnqCDYFMwyMZNaYieayoAnqtNgT5ticWfVUWuVDZWZfrGkat3n16EQWdZWMLwHncbPikmToSxKyxsCVEgwy",
  "key22": "2foCTWQWGd459QxrEDEd3KqAfcJKuPBeM8VUUsvSRzQ4QDvpKrHcJv5g73jnYyoV6PvNdYt3ELQUJuxiThK8qxF2",
  "key23": "5HJamFLSkBtJK5q2cUvb7Tp3575e4kwACP2suawPiFdx1Kv1tmkyuBJJfuVRdzujoXvdaHogSdSeSa34YQzDWV59",
  "key24": "3Nd92yWGQ9gTxgruBACij8tG8DcTB6Qub6qLjTmQAszuhatUFbVejafGD5fhZxXi27Qp3oNWc9P4rVRpoYhxemMB",
  "key25": "3eoa914EEWvrTJnerSpvdfDnd4fUjqJzhzDSMu4pq8b4MkiGudrQebqmSWrriCaXd8xNrNeaKxa9Rx1YHvarWGCT",
  "key26": "5G98F4LYizz8pa62rrbTRWiubqW3TjtUn7p4HjUcicjcuDT4P228YzJdAaB1oJZQWPGA2iRFiq3wZJaQRVGckdDY",
  "key27": "4qH8yZ1q2BPcX8YeBXkSLeamdWeEM3oyy4ey2v1pqzmP2b5vzvvJhAwwNgnGvTfmh1EsPRibKdQdSNkZ2uLBHUw2",
  "key28": "5371xhuK5WcwgHMkUVY7QYLv4Gr5B3pSBrcMBCsREtx8XVyMckc2oNhvMpBbnWUgCxqpPK7vymQN6TB3tHzYq8BL",
  "key29": "4uZ4No761w6gwfFWsVXbnY77vKKgUqu8ddbC3kJojxvQCjbMi7EL7tDE4PBW318VEPywf5KDcizeDqdkzC5XZAq8",
  "key30": "22GV64RUq48Le2Enk4B3UfHzZUcR5WMToHBgUA6S95w4LunMTBX9qwKiR67aV21iu8A9pViBPAXaEckziuMpLutK",
  "key31": "GEbXr7RwHzAyG94JjMAhhBWbBJUVd6o5AQqZMeMEoeVeiJhKWEnc2hEAk4wzcQ2qqiyiz12Sq2kHuqHU2bQyJEP",
  "key32": "5tWoZkdvnpTaxWfXUhsuNmodGJQuRG6ykwMm9s1D3nwsRGbHtUWxsGPtnCoHxExNsvmWvao5MdsDEhpcd1rracET",
  "key33": "21StsQsPi5WRVkeU3YKhcJmwyfeJ3UGA11hcyk4qrTi92sipEBGaGAjhTMQ2BW5z8ssrzDneAtZC6CSsoApPBb8h",
  "key34": "2pQmancTofnPnjfWb9cXomrxKfSnt8gpnbSjUmwdjcuhrc1ADWC4kbj3BH9MdLzYUMqKyrdRpoeCxnhQh1AXAcwK",
  "key35": "A5yKcaDQB3yPqJvrK7MDLYnKk5B1cpAPudW2qczaENhfwTdyqRcxSUZbDNJa9egT5AFRuHuvFJWchcfcepwxyqB",
  "key36": "3Z5FbLUWN9jMzemZrVBWzRF6PUtcftdnGgma7mmRa5nANsLUQvDKZ7V9XfUJyA5Sq7JF2pg8pnETGT63FK3NL66o",
  "key37": "iKWNMj8cNMV3wjj5fRyfJ4XjQ3yU1efiM8Bg9nSe7MFcFMf34xQ5mLXH4MpUYj93cwQom9AKSoWLEvsEvmDA8HU",
  "key38": "zCNV8m37M3AjHiw55Cjq4oWWJFPyPftdyweT1DHQ5s6oXwV5ctrnNWff26kjxmEe51PpSoqTejHYXMP6VmnXx28",
  "key39": "3uf3HUULhEYcdYgy3qwNc5gQcFB4SeewDQTWqpRuW3mE6QFFGBkuVBDsbqbCBEAWZfQxTc8jhDtCBEsBJA8W49jW",
  "key40": "3zZesw39LY33WrtQ4WygEmbmsaqQNmJ3evjt7N85kHZV19vfMbLEeqcHD3VS8mEhQnwJ2xaSqE3CpgfQKgXVX6cd",
  "key41": "5iTbbPSHPgCiTTtGS7VsN7bJKpyZ9afAN5MwhM4oh2ec1YwgedG4PKqNMFBFwQVYN6aR3LciM5qmrpRMnj9AZ4DA",
  "key42": "4jKRsEB8ABjHaWeq8AQGEd1xs9wXmeGbtwdqoT2F8A5rqtzKYZexdvRS5wmLKoYdwhtLcHVyRELcZnuNiuMNQzvh"
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
