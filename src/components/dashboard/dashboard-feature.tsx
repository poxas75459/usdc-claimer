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
    "3wivGG7sjpuJu6P7J66uaJ5VL59LC1Boy64TWCso9YB4A8Vpab24u3su1ykw8RZQzJW9iMbSSuPwwuqtkLQPVDEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kteci1ZbXT8RueozM9QqXDgiNwVz4rT8gqcH1bipoffQ9nSSvCg9xwL5ZmbdEtJgxjWSKPjg38k8so5QtVfQrhn",
  "key1": "XZUZTTGgmGGJgFKRaA6zx1ejivv5AronkuBF2MJoa8FxcHVs9Ab6vxzCNanQNVgbKRuvwhtwUzwnkaQPZHSpqyW",
  "key2": "3SSmGUYdtSUfaWkAVRoH4NfkKkD5rDYrq6h74GxQ3EqzdQCtyNDN9GgDxWDCpdPd6vpP3jzaXTRoZsSfDdHb5Ab8",
  "key3": "5QPHmv7dRPZEoTsReMRaybwZxD42WzKmZU5RyATs2EKEVfPqE1ctbHT335fbg2aQ1mBWXeLVwYwe71pws5oWtsW5",
  "key4": "2SKtTQnoyE3Eff8ftDWZnQMDutwFfG7ehpVA1nP58hfba5GKZ6CraMHtR3qBtyiTpY5m38RwDVCqRvP2YKbd8KQ2",
  "key5": "2j85vq3d1Zkoxa1ZMvVyEpKaLhkbT5eqGEXfnAUUJgmXf5VJji4HAKakNUoacbq6ePhCdH86iLfogwLfRgtNYtCo",
  "key6": "W9paiH8iBYezoLMez8PsyMYjaxw8815M7C6TnZ6gDjMrCX7u3v7VKu6ynqFffXWAnhdMUGz3G6C974PJ6u1Zbne",
  "key7": "2syXs1qPDiQ8o5qq2ih8ahQjgFcjvBHXndXngSf9Xyue4ZMJGeMbEG23Atvsjb1LUxyBxgoZCVrt8AUNT6zvRpXj",
  "key8": "24xpid6TPeUA8CGkkMBXzTEDS6zvJctdifdFXbm7nGX5Jup2xbDE7yzjkge5xTNJD82avq5kVr11khsxkMTDnJVe",
  "key9": "2zNQBVRGZb1QWbXNMq9ovYuJ2aEwz6KJu88WySiADgEorQN4WMfcZLpuiR1rYVGTEuGtGuNC3JYXpRGV5mus43Eg",
  "key10": "4gTv4fZvXLHz55iPDfcktrLgtKA2SPfomUmK1CRkeaHw7Cto9ibUY7EpVqwDTTWufxfSqbzgFu3Qyt8HfjUmyd65",
  "key11": "2ve8eQTm91RRugyiT47QVWBahtE4cc6wDiewACJ6K4B3Z1hB6SVAu5DCapEjymFjstzqXQ8kgLwG4iv1vEADBa1F",
  "key12": "4JDc6H3LFoRmMGs9ZGeMHeL7eP5Lu15aQpCQs3QzjCJiZG9Tart3FcGk5JzpwEZ66d6vyQpJ6Ndt8s1NRiw6Z6fM",
  "key13": "4PaDU7bBtVdDPPiRrrLK5tBA94ehFzETzahHUzoPBQH5GBP4y93R4fDpnZasvzqLAfHQg1CgTno82qDgPVyJQWDy",
  "key14": "3AxmCuCF6ggSq56JDfKPFRZHJkicSw3QTwmHK82M48568hWhpEdwVAjaK1YzLK5UnE2Se7442fgJiUkeKwBzAZTj",
  "key15": "34N3PJhf8S7w1hVGS5fxwz585mR9qSLY1JCGdXzBaKe7HiTirNb3VPfE7VbfDPenbp6kgf9CegJPpyHYStKwAHF7",
  "key16": "28iQK57LWa4Sg3TB4meBUUNiMS1xREQ1J6k795cKfnDXXo7vsiSiPgQqtqLyhD9tcYHJLNbFXsfRKqsEEXxaG8N2",
  "key17": "HxFdMc8aYv15PTLvxPVWycD2xF6GhT6R7KdYVVDyab5QEDGoJ6CEUjAJep2qSnRETyFceGLcrxsv8RLBhx7saXh",
  "key18": "5xC7R2Yo63JDEG1DTX3FpmtRVz3iKL396HXUhQdfsxx4thLWXUg5BtiHNGaHXyCnxSyQkHYPi3z573zULau7ohQ8",
  "key19": "4xT3Ut2xvU6qHboVbkpF7tBzdSW3XKyoBGS7G6TqpUDudp2jyyfHcHHQcaiL41EiPh2nu2VHcWa1FK9xq5onjZtc",
  "key20": "5UcmwP1acRKvcRD2v5ZYkWwAm7sfBbqAhyQT4WSXpTC5EkE17PEn42dD4Vw3tRWcM5fgdDWTSJMqgrPW5myZBTF1",
  "key21": "5q534XMGbmWTv7o7QEv9WV737o6PuVeBrb8zT7re8sQBhYr6jRj7LeiumWi4r8nGKbjT9jPHvdKx3nsULkXbXt59",
  "key22": "41uRpLNJYFCWsHiT72ypoxxWDYQZRCbvFsDo2gA5b6Ynkqg1Y8xfMNS7dmZvFmAnHzcLiSrzJY685wHdLTADGKzs",
  "key23": "MV822acfwkWwwCdDHBJKfbfwsd39ChfJpHXQ5LSvHZLC2LgCFL1v8ghkqsg26PVBzXK8os6UXTUxmhy2w2RAv5m",
  "key24": "4Uauc7Lg1HD3xFjpTYsZFH2LfDVo8C8KhE8kEvfm6JkV67xfFcFMarMLWihiFNjdKGpnPV5tG8c8DGYnYF9ex4MP",
  "key25": "632W94s7DovC3iQe7d1LjT1fVNQHy2f4rw8ip2dbkobbQDsm4V1Qen8pZKzSrrrFTgwQ4UsCjVf6ACVgno2QJRyg",
  "key26": "469FujC7PGTxZTebvhTTWh2QQ3NHW3hEiVYLWRWvF9F8ApabZXLUCt7E7ucpDUdZeBwj7spRjYYRM8AK6g43GDCf",
  "key27": "2wim5Mf61vK1Byj1ygfdci1Fm2GRCEk1zPwDc81X748hHaebrv82UJjAWwsg2MPvG4WPkWzVDkFTjGPdyfBfNffk",
  "key28": "3uki9TuTJwHWXczJv2wdScgwLnvkrrXDvsr7aBFk5VHhBvXTSqSuaovQF8sM3Pggep4v13dYp6djX35LDRenawLb",
  "key29": "3dh7KSg9aVvKx2eq2mmEgtHoK44HodKtRuA2sNybsVQKfYTrEDJsvDW4AfGWf2geJShGw7mJ7G17uB3T5YS2V7jS",
  "key30": "2bBkwdi7vaN9mMn7XwHtbDh5P2wSfhWh9KmpMq5SZg4QUc7VyAUhsgmY7TaVRER6rGkUy4dFmkYbU9Aau5xfPyrf",
  "key31": "5vrjYC2hsKF5wNcomV2kPdcwTe5KL7FjzqK2BkbaLfufbcQbX1XNw1nwuz8gUUvPjqGnwHrvGkYnRW4e9NvHugZr",
  "key32": "3eVKCKogR6AKbsqsBizff7o1Yn94M4BymK3PVzCp4QNTwEMd9n9gvvskaKmPsK2Ri6nADbnJkoZBbzQsz4dk4c2x",
  "key33": "2saVR9B4VVKWLTiG4mSN3XLgJKLTFKAQW3isfbfQXASbmZHLoyBAnfgXH7xshWPBNckHyaN9AznDxfhsaDotR3Eu",
  "key34": "2LxxcbSEK2PppEUWwYCEkQ3BZd5vHuF8UXUjyFd9RrHHbURmcjunXUyRcZ1EbFizX4vQ3u1soXCQQBZKuHN4ybYK",
  "key35": "4aeKX3WYKnzzUy4ToQ8Z1ehGbemhD5ZF2kyKkU7ipNc9M13trZTExVFnXha5hmEAJae92dPMzqT3rygVFHBaZ3JT",
  "key36": "5UXJ1tz4k9aRkVGxWjWFjx8mGsdj32hdfZEPtdSVvkfCBnVZwxKsvcLzrG1U2oehcfwET6pa9BAoyE52TDS6JATB",
  "key37": "3NScDSKMAGmBT3aairoWr8qBjpNdXhwmnZqQ68JqiHWPJKwqJb5wnZWEhPjh7V3fFCaG1Psij9ag5d2en4BQv646",
  "key38": "Xi5JGyXG9tmgyrw2NpbisoYxY8iDmruSmBWNh19RQBYnSade1Td9gw9moGZsL4XoaeEbK1KB99fxqn7g1zLTfRZ",
  "key39": "2xysirE61WZhNHc5HKK7k6BHGZjoor7j1uQ9ALHpbLR3Vd5WK7YrATr9bkZVNBQmhWLvQNuy3GAbgZ6qA4NUUQ6g",
  "key40": "5yhj3UkvDhvGp9Z9PCQf5ox97QgZSHYGDLAcj8CYB2mAWvSzeZJw5vXc1FWayFbWhExjUUQG9XJPyfRQkPYZBWGW",
  "key41": "5xVaY8vckc2Cz7RRoF7TKByXwzSpTzCwJz8rxzhs3yLgDvDQVnicWMyYFhrpBjk4W9mskyEBavnVY2DL8tfTJ9t6",
  "key42": "2iRsFGcXKTg9J3t2YTiUoFcQ9F8D73wjubuzr1fvuZKJkbQKvhBVvrmuwmj74wvEDTpqmz7f25Sgriw4fjeReJge",
  "key43": "5JVt29jzoo5qhj5emHfws2z7bpUZzHRpmPrRxW1UbaKH5xMR7CtANVQnpznoBe331VeCF6iwsJZaRPp7yNxQoAbw",
  "key44": "2WqyPfTWfonoKU3HX1WbJgJSRdYMf5Lv1onjxQGrGrLcyNbjQLn8hsVbmAfSza4DvT2rtMBfVgsTVpvtxvZuH4WP",
  "key45": "39iBKsFj5e3g5ZYgpY7wYLwsfKWbQ7hF4zVxwj1uofimgTdkuL8ki6C8qx6BHzBXWeDPDPDFzzA7t2UQLcGgzXMp",
  "key46": "2xp8FBUxyQZ3BF7esSJTYVJV3ExJALBareF2dEsjPV6DhapKZPiKYMLc9WgWyprHtwrvyZYohujmNeNWiTwAmQEG",
  "key47": "5YA29TNmwxAUiqZqFFaSAwySSBfM7BszaKSvoiWjoaQsaaPAfKmHS8uFVpdQBL9iiQXrvGZ4L27t9A5N4iuEWGsZ",
  "key48": "5dVHET2SVTJRNgvfvxWD9ngG49Yr3GtjLr2LaKZfrsHs9P9TW6SrzywFBALMrJGDV54y2F5aUPzz4o1RKNwZuVbx"
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
