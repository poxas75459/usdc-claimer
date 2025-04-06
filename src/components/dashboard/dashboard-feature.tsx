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
    "33nRTdrnmQZWh2Sjq4xLWgFgnU8GbZ3X3kJW3Yp1xcrtEhRCye1HcC8N4iUHrj7okzSDca1arSfLyNVhs1jH3Ui4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFpr75PbBA5bwgErJpw78zHvpUoHwgkTkAJ4xDoFAfZ3s8nCRUknGPd1NL1zG7XCVp4HpVWvr1pZ1w9GCegHXd6",
  "key1": "4asyvJW82RvkiMcotsbx9cUJCWyd5NnKeSZaNcnAU3jh4uK4vxTCtEEcsYYcwG4qi4n1kCxM8xSSBcmP69rovFUd",
  "key2": "3MkYjNMLiCFAw2Ni6654jf1SKvBpPkQ1BsaSNM4Xiiu9Jiyr6VPoLFUtMyZrWSEcR8JGQXvF9edWqFw2bra8Spy8",
  "key3": "z3cD4NbXmcdQfmVnAv4ysgXbBFPzumiRZFyEZS49R7pgsw8VTowNvs4my6PvKgut1YTq9R4aFqckNPpRgyUCJQm",
  "key4": "jhJBT54jZFZpTLVRyZgc4R185VPPHLsRqsJHCaj9RGMRUuzU7i2zsmcYcs5nwQCCGK5bkkJvr8KWecHnnyyAH9P",
  "key5": "vuEs4aJVYo9WjoQ4ajcEPHky1985ozarVJZdPheU5LV4FjabuKSQnoXZ7AagYcwHMEZeZCnSafbTUVrefj9EUYV",
  "key6": "4MGA2xA5LgyQW4eQKh9Wgt3oyPNWmiHtcw8q3t4fKYaTgZKTdVZDAiY7q5KqQjJZtAKpYb7K8sBhuwcBwCrswvSY",
  "key7": "58Rt5dsqg9LHzHgvSh3QKgDYPTL75h4L2CBrL3wLTtQvXjyXHSR6ULMNWYASpp5XRrhD17gjKnzdCmYamED53mnG",
  "key8": "2MK1LRzRo6Ur2rwPv9Een2EhBC4cgPUmsXRi1rWaGDciZ5eommagphTh8AMYhEEascyYQi5No5ckWAPFt774fnkA",
  "key9": "3EsPFynPWsz4Ac7mkPBdMRZxjHPFPnKdPGFHHZjPpgzWPdDnDJ6AYVftfyTZCdMPhBdxPw9sbXjc4T3UQHhCqwDX",
  "key10": "5XyqhXQQPrVBQWZh6BruVWW3VVJdDDaBMf5vu755uciAHfEmqEXhwWiWTna6vtvwgWesR8TX5rSfERUqaEeQcDzq",
  "key11": "4XaL2iyrmVgYTcCpmuHbTLYcwkUvCy6ULDDyqxeMZhEMV6HoWTea59nrCqnJfx3JKL7UH5tNmchtMSXmeKxphvHV",
  "key12": "4qMHBaeJXpgHsJ5aqQe42EzHGTEXZtXQGByT2mdiZ143duv3LpinhkPrR8sWSU9iXppQhyDDfvfme8An74zokMXt",
  "key13": "2PzZetWEDxHxekWf1QWkcYZfw5gWk2fbGiFt21RXJoqzJypMAb3NRkEin3YX3kVSaKqfCFpJNZeUhyN9UjPWCHN6",
  "key14": "3xcBE2xnK5f6MAtRWtgzREboGNP7Ymwsdruex91cZMPRvbw8CzojarD82EL1bLfzNNfpmvLrCFXpoyck9EnyCUog",
  "key15": "327QwvhpQQGtFYwrm3LyEwRgdCoKeS6wAQWF4AS8dYeEW2q1XchnGHeeKuoJ6EWQKyoBWNBuQHhUNqTPR7oXzg7y",
  "key16": "2XPKhRHupamb6cPZpst8QU6MMP1ynCenE75QerpJW7zQWUbCUHcW7frHBWrjcaJyEgLt8teVh2ZBqD3dPeyqhdWP",
  "key17": "65sQwvVY5dDdEbK6B14qj835AiQWdeB7ZStKZMX7unuE1ymebKmeUCsCgTAPuRk3zqvo1XcLYGh21ApkmxD3CbKT",
  "key18": "2UUYGVQg7ipRjVC7oRuccqwBTzwNr5atbJnDvG24jLyDmjge3yNcZSNczMyQQgpQLDByfFX9Z3RNwpvNZYRY3HhM",
  "key19": "5gqueysYyKwN1ysek3iZ9ijxvbDbJLxB1f9UtqsCE8kJSHsAmHUmZZTA4FxisdYbbrRHuRxQ1zWfhfTGgvLMBXi8",
  "key20": "3Tikvs3aANPBUAu5xL78EgrYVLMgEcBxiq3ayEfK2YtM8Rm6Pq1FdCX16UB8f4MFRFFjShZB8wgcB32ZerTARkMT",
  "key21": "5KM4BxmgUYvfbLwDHRCcsq6G4dkm6sktTkjzS7g71mzBrdcMUwdFtFF8s3Eb2j4bto3m42nq8qjb2KBoRS7sLk7s",
  "key22": "2gf82JZYoVCwXHoC43veTWcoj9anqEubLDUWHigHnJLZEVrtAurjwLEBkt9PXHAurUPG5Z81oMzKrsBzxNm1dFHw",
  "key23": "3JQMFWmtnn7TNk5n7397s88XnVA7yCHDBXGdBiibChDRYEJGPiYfobHuKpYCuP7ELq9wXGXRbCk6NU3eKFJQeTa5",
  "key24": "5DegvRebAvcSKktx9RqcrMvgs5GZQpfFxWbrwp2pnNt4rMfSx9Gp1FVr1DvwRGYreRQwP9dxVJCger2mHFXYGZT8",
  "key25": "2Jkey6iu9GZkrLj54VsjMb1Kys59RTVWjMHtzeEBnHXQeRozTXt7WFKW6nkpXHmwUqRuqjM1geuC1DunYMiAJ4YS",
  "key26": "4311fy2P2tid89XVUQfK1hh8F1oAa2EJpfqVQueisWiG5mNBaf3uXy4KCbmMg3vk7NdhTKMa9wxyWErVZqfK4w8v",
  "key27": "6ouzwajL6bP265kBWJhenpQ6uckqkP4sQtoY6tqAnUZC1D2VNMT8NgC5kFxpgnQG2bRkmYwHQMWv3vRJCYcBGYJ",
  "key28": "5Z2hqAkQCBxoYGaSUww6ix9qMNm17WCBiFShr3j9HNhoQdJZwzfCbHoNw93CgwV5UeRWPezZyYc46PLJzj5YmA5s",
  "key29": "5Cd1BxXc5ESpCcKfijtEFeJ9fQUz7ZYN7SpuSgvVCc4SobAtEPL7JwSBy4AvNDRq7ZdoTRqfeSGXAeNhGWUdosA6",
  "key30": "4UUHapFB6uvHztMETHphHDpACzkJzWGGq8UYPg8GaG8sK3viko2ReztHcU9ck2QwJeT6e6QCL4APU1KbrMghCVGA",
  "key31": "kVF5vRVK2g1N6wEh8J2P4gJ1k9jgkE1Z1qS8jkPJh7bqg7pJxvaqHNeSPiNT4fK1fsiADvZ9ur9vCKJdxwEfADz",
  "key32": "58pjuxHmDCE1TSVn6iXNLSv2ys8rYHxDFHzRzWqVNpa1ystGxU84cX9cAnLRVkaVh3Rfvx1NHQRELhsA4a4g1WjE",
  "key33": "5FiXjYk49SSD8W6NvrKgWZVMhVtVpT6maqJVAw3stpyBtrQFRUijXiks3Gptf25cBNo2jAgpM4sHuVR1o9hjpjbt",
  "key34": "2n51w9ocMBxWez1vm9fNkg4mKsi7P2KHyvxuoHTW7FqnJstu4AcbvP8h397Urnh1cnKSWkBUXMP3TuS7bRQEWVKW",
  "key35": "9d4Nr6WE77Wuf6er4s5hBVdMk7WJnT5vwRe3PmQSdJMFe2RM4575RVLbHWJUeeeJWYJT5QWAsCt6K3Fikuc3dby",
  "key36": "2AsnHwKZJ4SqqGsm9SEnNHNHJtUB5H6kqg8pT974JuTAC1KgWF4beAm9VPyic9L68ZyN8HPK4f14q4Vr3znKscmm",
  "key37": "2yXiVT9YiwKpm9HQ34FzCzmJ5o4vnGfeHfwX1ryyiEJw1nUcyqg4Eb9w1jBYftb6kMG4TuuuhVCY9oxN3Lm9bqEA",
  "key38": "5xUjFAHLi88iS2baiFtW5Qaef1agTDRqtArNKorinb7Kpgu6c65MQRDLbSVFUPM9vPqNdubfhEWUUR7NR63NzjMT",
  "key39": "5NBMdmQj8i28zYkEcQbeju3GhoPmmk1GuvUZPECz3qkTBptpi4W9RRWBqsKV3MdoburQJLmxPkSnPE4CmyvYrQ13",
  "key40": "NmeXZbjqZ575RvrJU9MvzJUXmoW3JExGikgtJNaienHz1TZ5fPdv2nXeqzpZcBYNPi6BE5Snu1JfLZqyWcicjC1",
  "key41": "64abeV6EraMQa8ZcEf58xbhonMn83eoPjtWAia3twHn9yiogpeEqHf9C9BHTC7BnULh6aGCfmgfEGPkQqqAG18pM",
  "key42": "3CCkKUWdeXCafUYVuvzFhwD5MCt7NfYGh1wiEi4ePNQ8kYFN97cRNMkxdCzZKixGF1a6WZpzTxLNSMSyYbqGKfL3",
  "key43": "3KrHA4oqhRMkatFWWHUfWAtst2qmJbZeFp3ocegkaUEEfpUwY1M75gV2aiia7wbQ7FmhFVdgMWDdfR5o2LPp1E7H",
  "key44": "7e9Yz7Zjj8e1FvLp4tHyZEvViLSaCgdRdBgim3JDNrwjvMAvNTyuMyrqU3BRifVDsYvUjTqh8M67qSQSwrmghcg",
  "key45": "3RRyiBKKYEi6PCcPdz7ynM42pWFcwEDXhs6QEcwjZaC99Ka9GY7S5gyEYfMj8rfBe4E8L9JiQgJNzxcEYuhMWUwB",
  "key46": "4ZWyXPEK44FzAB5xBwHmj7164Yf3sVYE86QwyMggZVt7R3DRJ4QGAkLRs8ifTWGZUoa5LPXa42BRynJUjun1z4Yg",
  "key47": "5pdwt7BwmMbG1Fv9y7TaTyXPxuR2qZuBKK99gwCpiPRyFq8boG6BPWV4eWvrJhTbn6fCEVSfaxZKP5MPRssX2Zkz",
  "key48": "Z6cCytMYENPx1T7d9jhkCpjBwLSEvjQYMB3fwA4SFgGUyVeez8aXKM32kZkUcpPGcyeB3kQqqxJu5XqEcgkkfif",
  "key49": "3MTwHR9khnc9361z6Fb8dJa7MaviSBNvand2Ba9ue196kiws84B3fL6L8t8c11WD5dbBxTTLf2EaAEMSiNAQA1WQ"
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
