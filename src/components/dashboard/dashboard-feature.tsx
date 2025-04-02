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
    "2SEbVLnqCRkVWtVXY8Uty4D7ZUk9Ajcac2syQdMDW8bd1sxnTg1UCNwdBq5G2mvu3ZZBaTe3SKXEDEnWhe31swLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "678nQ5rCNAhfpEcd39sRhHpJ9dGwsvqWMwx6d2xxoDFPss2BDgrbrfKZji6rWQ8FxexA5HYQUz1buhSRnTAAgj9j",
  "key1": "5Mb2CDeEuxisVb2P1airAdHfWTmNYrBMDU5sos3gVvMLCT7GkSK4J1xss8pWcXkk6PyknKQrKoq3AQJRoKsgSqH6",
  "key2": "4eyKSWabxECFVvcAFRZyeGbkoVz5cSwucKwYm3DuDHV63fkDbWcPxe6uyVTY4NyeVH3WAiGMWoTo6vv5Z9YMBGrV",
  "key3": "3wVMMJJCsvi1iAmXvrqqGuRjJhyRgGbZmM7yZgbycgTqLk4aDLEh85oinh3jmcj8UFVEPQ2NhQAjJBCSJj9gFFoo",
  "key4": "5LjY8Qwu2pZCmpWLJCR6Hh7ZPNqKTtNwKMw6kCW3wsd9xVTK5kBr1v5QWAwgXhAAzbRhYmxUQYVyVGo3qqderHfg",
  "key5": "5UEBM3n9LNDWWVWGy1MMUxufsgCxuGNDQX2XAyLCF8xdqDuWrQvWq7DfLCxmyfHiWYswctaEQqxy8gU2UUB1io5b",
  "key6": "3mtfHfVjtTz4GmyiVoLk6aGqfXrNyf2y1Gs7p8D1Q1DaGnDPs5bLbFRi4WQyMgqoxffZRYyYdYvH8u6Q1ZZ3u3w6",
  "key7": "3cx9Ak4ZpsVjWEZykUoRpvG5F8rSxxn5fqDBtXyRegQWSS7cZb9gR3gmE2YwCMCUkCrp2YqvLzvtb9ueVWMh5qoY",
  "key8": "5YdJ2SCgemDzSDSQmFvty3Hd7mVgZenjRxYZRFHUro9z4SeV1aDB8fqzTzGT8LvuumRRJs8ZxVF6sri87TxYrjG",
  "key9": "2cA2zcXZBeb5mrQJmnGaUCiQE2swAtnfxzDDixxJ3qjnuxeUa6VTki95XrPQmhPLfXDNpVB71u8uj9HcEyVScnJQ",
  "key10": "2BWebSpXhAiv9W7tKeKDtP4BziCg6B6j1fs8YezZLNrEk9Hu96h9UfLtzT5FJiXYP2kMBCShjjkAunobeVfkVZTG",
  "key11": "38ZAwEaGmUPNuDrYx1yT9FN1jDEkjWwrK4sxPG9mTjvYktWpa7uQ69JsGxymyN7Meg5kG557RhrEgafyQ2zBymLh",
  "key12": "MqGx38zLq6k6U2Smt7yhNQntjqhds5BvjB8bTSBinjh4qqPLtpJbigNAkJE8Jetc1fHJYSjobhkEzXzTnCFjbpb",
  "key13": "2cnjtdRxz9wniJta6L9efjDq6tESJ5EasumVRFKi5HtU5xa8sPbUBY3ikRB1wd2DVP2hHqdS891FqkduA5sewgbk",
  "key14": "E7uLecfuTDjcgf8qpJdZz4m3BeJXAjeyT6jnxJ4poCK9UUHeFBgjDpwf9PTxE84F4sTTo6GoakCv27e5HBvBqn4",
  "key15": "3ov9DfERCFb5hugwSXMPbEwz6TGQPRWzgwXFB1UgZrvKWejgoJaZ1tF4Za7zsKEZzKL9MGWBsuXrbSaR8PaD6HW9",
  "key16": "2QapcYJwkfK3HiqHpgwevkiuhECCUhpqTjrgtbMNrJrQAvqfzGL5jt7tgteyUptyjfbCtbqHHzGJW2qGTPAcNXJi",
  "key17": "3DdG6aREvoRxLzSapyS8JWbkZwcQqNpLEsi1vr2oqcAwaELHLvRXVs3YaGxuijCz1QrpBTkhvGTWiiHdQ8cxj4JZ",
  "key18": "5Fe4yaZ1HxMvzvhUReJgooG8uchUDwubuk85az6KNS7sxxSjNXtjiWRPR4xVTwecyJ12ZPWDqerEnJ2kdbo1GzZL",
  "key19": "4BmjEEL6NMe3Szv8u6Ye9H5W3SuxuoW7NsARpPk7Qh2KzmPEhk3df9bcU8kBjbhpErhXhc6wc3YMNA44rTy5S5P2",
  "key20": "4v4YswsZvW6tBQJzJXmpb1Ym9zhRXRPmtL9q1xoy5rHenQ24czhcQmQrjTxot1ggeX8YkHA5ViKggxMQKV3NkLVC",
  "key21": "4WhtVfzBYgPcNPvQF8hDkNYP777mcz6HZasU1Z7uzgoEkcsjGwYCSwsYHMYmi8UHvQBd77CcXYxgoyLavgKXaPKN",
  "key22": "5nzyMBGKEXWA2aCP3tzjWLDMz3Wu1M7SgYV1JEhBSJThcyhnVHXMhRNByJpmBZKzquKQHmu6K8Q7RgsCp4ueBwZj",
  "key23": "4gmeAb7fMBrfL6ksgtT5pJMgNfQxgWCRBvaMJL4J4Qz2kCdcMTnEujy4j9gLf8Gqv8Zm15JYvTn3VyomY9MZ6FT1",
  "key24": "33fdiybjxLxZEDaniXz1d5HJEoAYn1eXxCBvKDJom1KBNEMLCVJtUypRrY7Ljy9VsRBRyQ3v33NXoMXLE2X7jDQ5",
  "key25": "2LyuysrRfbRYnUAJUDFAY4PZFco5Kup9LJ5thboyUCHkcArv2MwrBfcDmUQPPCLt4sWud9BHdBGLP2K9j1SgRDa4",
  "key26": "2bfch3WgqYDGEMfi9oZ5bxpKafeJswGjZWryfH6QGbdPQPef6EDXyafWUXeeU1rh4tcwbYVANyP3wSNxz3jXvNAB",
  "key27": "5i4ua2e7e9ynMu9oWjxKP6rBCVP63ZSnY4TtuxeiDXoX2ov1BvVZ6gUbARbMrMVbJ3uLpWVegAfs7xp1ZqDTjvEk",
  "key28": "4C6N18mTMnBFHrN2E4TJF1NkKqr8cSrzCwevYReU5ztja6zh6zPYgSJUMepH73RhhnmQjoGq9AaPRuFZwNBZJjh1",
  "key29": "2xb6PdSQmPzvU9dzEAEXRinqEsD2dihm18s6RMQhcd8deYPGCyWxwQKrPjUnW4FBH3dibJBiD2quWw8JQgHMxBWq",
  "key30": "5RfrNRzbKGydQtKiRZDWRrP3YyjArUdC7tm2V4HzzqoLEHPKyA5JdopJZ4wpbJTMCVPCrVmEdvFNK5b2zh2p5FEj",
  "key31": "4hvKzCHmPcM7hv5RmFeHKrHnGaY7EP3krGYke174vc9WXdHnTVrWLuweCnL4rMRKoDtgTPFDg7MqvYZTnXXj2NUo",
  "key32": "5c7gp2MSborDBrFjM8EJbL3PXi9D1ZjXjWjVMUaQu8dvZLKVkgziZacYaHEd6LVCuXPFenMg7HYdk19HFSyeAyLY",
  "key33": "22DUAikxbhKBsAyCAsDbwSxfFzUp34s8CAsVDuCoC9KRJFxBGiy6oveApsCaZyFDmgQPpcm2KT7HvAbxYfYhQhGq",
  "key34": "64Df3DegnGNevJ99AvJdnjLNCj8UsakdwpVRajtv1B4WjBrj9dx13mofTuQyuJTT2qYCMz6fE6oApH3PUa4zk57u",
  "key35": "58rvYzM5FNSBXYUQXCvMgUs225cYAYijiQWA6ysg7FoRYZUoqsttb3Cv4WZTgnxaSimLXbHbZKkQjdDDVN4PtTZ8",
  "key36": "3tjzyuiYduf6WUAWDixT93MwnWymsSsqtbdtp4yuKqR35g432Xwo4XoFMYTPYt5BX1BtteGQ4izCqg5p5Lajw5Pi",
  "key37": "3FroviP9uNk3uPx3mgGowwJ3fQS153fYnXoac8vp2vWAYLxkwXT22gxhyEFfXFGsGmQvh48yhMqiBBUVqoC6zNU3",
  "key38": "5Z13CCQx2UsPn9HWwqTEdiJZeDzz7yDawMbMTdJ66ruaBYuPfRrvy3pQzQGixGYvLk5aervssUTWYaPESMRyPY7q",
  "key39": "rorEQEDsip7wf69bqAFsPSGLjPhLXBGpa1WzKiTGDov6ixNWEf5jrM7ygnTBvfwqNxd8s31eoSUqBZfsdMH7Ev7",
  "key40": "4LGwsD2daGoK6fKoXz4AjN2Y95DWgger7ba3zRku7p4W2txQRAvFGu9UVodWF6FXwZovEqjkE7m65sppTyJoYVro"
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
