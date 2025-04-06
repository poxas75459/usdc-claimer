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
    "58QK4Vk7Wy6zrmKYWJMWG38AZanV9pDoD4m9XW3TUWyRjHjgnoDdk7gAcfhXo9Ths3iFVAZNEKatPUMUsSwAvxKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5KoUyTBTVtifAmU1TGzLAUDh5PYNU36jW1xMf7S7cjRaTtxTBiZ7WFoMWRezhUVPkGi8tHebA2dLBirtEnaUdu",
  "key1": "5VAW5Y1zX7G2QcgzLfXtdPGXnRtrX6fax2mZDEZGdv8gE3HLgh1kYEL6W6LpHXwfAZYGcxYYUXLFWc57bqGBs7XL",
  "key2": "iMtfBj9o9DcpD5YfU5vvrVRmFpUSjeide3k1JueXuWnCqdEr6zuMhN7Yj97NvVQi1ktLyNC3npR6yFcpybR3upm",
  "key3": "616SUhovBLxfpoTwib2pzpizpz3w8ES21UPwr1pn3zaV3t9ohe3oVFK5AFEMTLWegrNQBSbajUsATvaqu4kqZsSf",
  "key4": "2CViDFkemUpSBmhaGxVpqhKntUtFq7pRFH5Es4rMp45LnibgzJTwyiwcnN7rUHrYMg11fmbbRRcAMhQbyCbE8ho7",
  "key5": "5EMZBhZSF9ioY3vGpTBWTb8NSg2bQXUExW8BMq1FQBNjPJabBrthsWpw2ajsHVsJ86jpfvb1udDqymqBTqawDtFp",
  "key6": "5PW95TXsX4XMWNXhZTbM4Vpjk2C5dsi8hByS6Vh6qRswk6t1Zdg8fsrAxsLBVamTsNwYubxhbHSZaLPhEpoAEL51",
  "key7": "q4aq9pfrzE8etsnv4eRVwQF69N1ZX4x7ygoyAKi7ZkZP7tRcS1ncZh7ESS8tyPTj6qYJhsjeCG5RZRV9Hn5kcgd",
  "key8": "bYBhx1eiYGd2jRqVpdLT3GmrK6wDMCPbsHntU5QkhfdCrSNMebEFizWfeBaVhSca8xBy8fDpzGEAdFX6H8gPm8r",
  "key9": "gio9t4v2YhiCu2GsLmpdSPMqoKWNpfWATKV9UzNrX9nhZop9mjaiWuK36dHvSK5usXvv9JgqifNXsj5vheCR88g",
  "key10": "4bhbD83zePjUae3ULoGScT6x1xjjtta5NHgM1BcJfSKthQijnL7tGmpUZo8aWyyNytURzv8Bhqrbqg3nFBTVbwjE",
  "key11": "5HZa7ABGNtRgseoWi4pWuifXiL6Y1kdPcpX5da9oLcENYR7jWU4ZFBpwA7FwJmzgrnjok7QHESZHZ8iXBDFZ3LrL",
  "key12": "4BgHehJawyWNCYWwBdDL8ciWDVxmyUc9PXvRhWU5zZYg3Wyf1Pjm5R2TtGB1jmorgjiy4q8arUTZRY9JreezyJEU",
  "key13": "YWpmgZULqSxsTeiiAn7oxCCj1o7mSbndR2iq4iDubAbLFFD45HjPsBUA1XZnVYHpLsiqczNMCctv8KWRnz4d3ye",
  "key14": "2pH6csL39tm1sPLYb7kWqnZpWNXssMJv7jm3AUJWRk5MQkvA1iefdz3TpvdsdTV4x4guLv6z9jZJe3oXGxc23D3j",
  "key15": "3qhdAbyLwCZydbJMK6D92Sn2x3E3XTrJMr9MyLxz83M6wf8ovkjtWw1h8yPkJ7t3iPJfSsLbm3a5McKTm7nbWLor",
  "key16": "5XTqyc2auEVHWj5YajpZEkLprVE85QdUcC9hnQUPCY4jfdD1tYuHerUXjvwHDd8qu3a4gzLz4g8niWGT7dhymmMK",
  "key17": "3hGfVqmzYMsj2FKLpaALmh7vspDbkbFDCuE4HFjKCjiLndtJDZF4wpCV5MADMhgsahduG5ychCNdVcVpBA8Rcwpf",
  "key18": "4UojrFJyn4hxHx9sodHiAw9ghBkXzPD2UKMAsZUiwcQjkGm4A4N4Bdp9jPsiBpawqrDUeWC2SvxrAnYS8St2NWRF",
  "key19": "APKHEZ6R7qFmomG5cnRSQyDQm1y87LCrW9gsv1FatX8fCLg4injZo3BJX4wn8YFpxo4E64p1PQTC8WRNXXT3CSL",
  "key20": "4N3KnweNsHcLRgpj24U2zzEKZ1vt2P3NyZa2wNZmaPBPb9fNZEMMJqk2zpkYuFYkSCcB6Pjebon3Vn5h3YssKTX8",
  "key21": "2X94pkzEetk8T6Ar5V6k9okTCnbJ9hyffZrziMqDCyMVXCFbot8gED8Ls2TWhobf3xSxsxofuGKCQLpAurRtZZzL",
  "key22": "Rsa2Lb7icBogMckCnpkVq98KHvCmq7vyBJskkPKJAwjCsTahtgF5d3KSVce3xaKGfsdmaSyZWNte15TBeDuLqGP",
  "key23": "27rx1rTQwp4v65Fh2kniFAH7JugPjK78GEbGHT9YztNkCfCyRP7iCLEob6shEEK2vW25Xjhs9LDWhFkYXwKKgKHh",
  "key24": "22Jo1fKWejXFwMgzeEd45grg4zsZ9tNudSF3Egj8C7Kujdvk3Ypb1mbE9EYqeiiAww9gZCZ6GAZU5GNBQBfeSTDW",
  "key25": "4LNEEDfaEP7PZJLwhiGvJCwUw3WD7MRetmqJQoJHrjUbTTJuqfKkEWk5BPNbkyjamVRLn55Enq7puszzGwAigKFs",
  "key26": "5BoNtYiDLRcWWPTC2Z73pHK7XzMQAb1PRPZj7LMGdgK6QorT9UvHSoPbd9PhQZ1Rfv4GdKcnerK4aXGjEBiWt1vU",
  "key27": "4hSH9BT6vPNFmEVCQwgNnCWpaZ5LtMGhogBF9LtL76miKZhLKADJXaJHYxorAWEsLXMya2EEzDRkq3wNBGPc92WH",
  "key28": "5K3kEsctTycmjCKya5bHeLp5LGWVjiiRWeT1CTjXT6DbaiKsDPJWt98SzqSQre45zTQESWKBDfXh3rsXJM5wGPeZ",
  "key29": "5FnUUEEzvZRZ79ANLFcHzrHHQusGGaxdMg3gnzSS9KSpq32XvExb8z9waRwNbXTMZ5eCW5SLdz7ZdJMDdcwbvqxW",
  "key30": "2UPAjZh6L1NxuffLRqRLoTgaH1bwF1SXXLg1TkXkgD4P39MHp4qXC9u7VunNEQWscwAAsMaMAbcY1sDxexeuxVrp",
  "key31": "2cAU6T2niMjdXU2LA8StF9ztJRtReB5gQKhrmoNUKSLjqUzmHiyBzuB5SmtKD1o9F3A2jgjUZbPRp2UnSxw4EqRK",
  "key32": "PpC3frVTqhTM4sJduF21bbrbqknJW6UKT8EAz17Q7jVS6WBnHtjQGAHsJGoif8Ta6cnqciWQCg3RwM1LmMbSvfE",
  "key33": "51ksZ3TbQ7shbnFtaLkaoS66R2eJjDFWZwGD45SM2r62KuMCwPRTU4sp5UYDrjMAAFAjnUNhCbVpZuZRTyNWuiMz",
  "key34": "67JGxiaqoFnm3Fqh4eewTVA51rUN7YaBcNq1NwjoxEk2qizcDc64F7jURScvCsk2CfK2Wb4SQnkdwdLbNYCugC4r",
  "key35": "Z8syDzefJ2sqiBRARxEzWP9cYdRnV21njKbtsqUa7Z1ZLHZmVeY9mzdksYBm21Ek6TVA49ft4pEnPz2JpmmLAhU",
  "key36": "2qz8UhVzSyMkUNZ2WumrHkxTiVazDpHtiyjnmWHJi6DT8V3AgsNpRUM5EVAtkPX3dL6hsFqGCAMeAj2Bh7hLdrKk",
  "key37": "5n2VLYVcXDAnPUJPACtggxe91Usi9tSYnw1pvNxNoPBai1nsBpvz91o6fsATLfVAiDgFPEWbmrVbx7a3fP3PjNf3",
  "key38": "4NpUmSvFG7aiYRduQEjCqaF8xddaH8oSBn2ftw7wC8BDtAU5dMmV75rTonyFd28wDnyn2ApxK7cvxJjWimrNHxCv",
  "key39": "24qUWLx2Q4QbAW7sF5x4YNLu3P9HVaW3N15YoxRQgYgEajTQATn15THTREkovW8DaVnnGt8dPc6i8evzXgszj8nK",
  "key40": "Yd8tSRp6G7uZsuZdjHRy5qiAxcThFJLeH35nM7FASbL3E7i5ympbRnvarGZLTvLBLw32jAUKXF7rkijY7vkpDjT"
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
