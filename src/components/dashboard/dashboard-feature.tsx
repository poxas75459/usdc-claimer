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
    "3bBJKAVk2mJQpaBTiwRHeH7Q3KFWtZ2BstdLpS2ytY6ybHuCvHea9DQn3snEnBSvGP4SRqEnk3P16N7gtr52hQ6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2inD8kpioLgKCE8a4zPFeBDkWyuc5Q8HKhGr5KPgBszxjJV1urhEgeSXK1sh6STk5RUQ8MnKhDDQ4UwaseMbzHYr",
  "key1": "4EZisYiLzDh1ZLNJhzonakTsqYhdueS4sUzKRwcWBrjcwj5ev7jy8tv6D7i65jipbNSHBQqubGKiMGy2NkK6CBj",
  "key2": "3Rra6Y5U4y8E8fUWM59Eo8qbsxbgfySs6GbwZxRPfajb4ZTpPjmvKTpAZPxgbB3VpQy5q1sn8Z11Z9C5Ws1EvK9F",
  "key3": "32kwRVp39L8FyYbSYQrRB8si1zqQPCZ7EfrDEVTabRksBzkcMyDNSWXrPQGyW3yE8KvnTYbGAzaYtBVr6rQm7jP1",
  "key4": "3bP3TGzSvvSXEgqPqUCU6bEmqLWuf1CYK8NhLSunqkDdhVR7gSrtGxUUtghrk5Uy1Qyi6C1tam2vrqsT7fJ9k1iG",
  "key5": "aTSvvY6b26vTjMGN5GqB3dCnqBuXfNjwoj6iEjCQXfoLcxt5USEdFsGTMuJ9KA95Ja8N14ncJoacN5xx4n3NRgo",
  "key6": "4JvF7cr28gTDCAYUD8P8mT6ccSg5cWfnt2JsAd7MtonLsDBZS2wuRSZ3FyWBhHXNvidk9gEbSN51ZP8sU6VyjcSG",
  "key7": "4zVmvPmqajYWrHqR8Tr4Wn5bMmRCFP5tJJvZGjmDygt83urvdayokbNtaLaxeusMvHJyMvMdc5rQbW9PUSVRtRzR",
  "key8": "4EmuhrHt4cEGKFoUb3KtFQCvnLJebpJddgkMmftiaRXEWfHx32dan6GmcNhDysQbKUTb6FfC1YErzYEyJ6MEccTR",
  "key9": "4XEWhabH7E4vuAgj3un8VxvVWD4XU2Fk34nN3zNffCfx74Ft96boKLQ5nFe3GQcoQxS4RRr5i5o918XqsBqueTec",
  "key10": "3DApPbpi26U99wJWnhG32xffMt6ZgYQtxsL3WhMYXWXrEKwZDFerivyrJSJXRBvDWbSFeg4iMpc3LKXoyc7mGKzg",
  "key11": "gYcoTKE6GgDNsW1XUdKnfATgj9oMF3itJY2zEvQGdnSzkZQL8EK6k4EGHhPp2mf8VWXDyXiPnExj88sEPzXgXpp",
  "key12": "4nyXyoNDwXA37tU4jhjDT5PbEhU4nxLkw6Zp3w8EHdDWjSNchQ1fWD8u1QZWh7bfKvAisg6oXXR6bygR91Qjxcuz",
  "key13": "5iVyLZBqD6rZ6bRtidURKRJGwYjboDwAFFaKFrsmMQ7xnwvy2uFAvYomuNuZkRjDXVi4th2YTuGnanEVu7Yep5L",
  "key14": "3wxZ5ect8Azwx61XVBaVdDkCa3Wd5R2ciGuDxSWX59nRfe65TYi6bbcMay3sKKQ3jAFEraxujzrQVtziBj5VdgKV",
  "key15": "2CdjgsKA8JzA2LpchPoTospCwAZMLbWVbBea1U1qKcLFEWqAiQHUJ7YBRHB2vP4nagYR71UX4EJMkE5P8NcMfdND",
  "key16": "5HY29fKTUdvy2xQbNQzDLuWwWaz2HksPsxjuh7giHvuYLv2U5Qigo5w1MBecfUTfzV4MWRM6xhrUJDc2AEcbzQbm",
  "key17": "2bYeGmfuUTpmpgMURi4T1PUUndN34Z6V4SSYGVHaukqVsXhMictsidy44gnrsPiRpGWAJfE6hyZCFBfLGFGohApA",
  "key18": "5rSr1rfbZ7CPficV6PoYqhSJeCGrEDW3G2GDcjY3ozgihpESDW67BzSZ6ZfY6hzAJmVy4Cu8AZiggFYiY1ghpXht",
  "key19": "eEV6FW6qzGw2DM98yxMkjLBKBUk5VBdv9VutDUtNzdkJ5QWrYXqd6MsLNoDHhyCyhqDEopVTzsyGErmyKMrKoGc",
  "key20": "4dUtAMLmzzeBTpnDcwSStobjGrzpKwj3evyJ9n7dAk389h3TpYuePZ4wpZ7RbnDSG35w1XkegH6FpEMDAXo9Mc2x",
  "key21": "4PQw9pyFmw4DPq44maJsCfF6dzehCsHBV8v77WCrjk8XCdMQ8vJiW2pwjwFRUGSnLHzG6UbfR8gzV7FK5PPSg7qh",
  "key22": "ZquMTsRiWUM8jjWj97wbKgABLtF5StQa7j4KqKDc94rCLtLtZXm3KFbrAUKN6GFA6RYeGgDtJQSkc7eTdizmFmj",
  "key23": "QBwgwXz2w93abkifJ49xPz4YESj9SpYitEQ3bcmkFsfvwWLRCYTSu9SRiEueKVg6CfsHP6Ba9UDnvuaymMq9xUj",
  "key24": "5xHncHg8rMBWeSz5bB5XUeUR6agqxFhJmCW61wHptPEaDVan1JeuqW7ZJawUBqGVRaWgssaPj5SSw3i88rV8Leub",
  "key25": "2zPtedF7xDmuPMDRPHyhS4HYBEVow77AwoNcE9uFFykUuhVy7ncuwFp9W8qK7jLxGE7cqoRWfEkTKzBM5dESy3X7",
  "key26": "5UEzsGJzHuYUUe7kqGMsaBqtCEcjPkq7os7PEwGCvW3oVDu22nK31DNAPbHMmAMDVtv2Kkmvb6QcYfaF5XXDkZwY",
  "key27": "2hd6nUbyW6Md7B7QjqtFQrNxBAiGqjHDF8em9f5EDYGop7nzfKedz4wRoVZY1uNbVwphKDZCZELbY99eKSYTAsC9",
  "key28": "2u4TqqzPW88Yiv3NMcMabevcrNs4k8TcmeTvcyQUfyUJLpooDp4n8VaspvHxRSroSpnN26pHQxVZ5DGTis3zn4JW",
  "key29": "49TkkeyQD71JKznXazbVEXYXcAqD8uEQdXHuJ1ntUqSqHbUJrd3jPBobvbLWJ9jojwPtZKrPZvLnF2od85PtmstW",
  "key30": "26CsAvPg1hStqikpQgy257CE8hAvvRQEQhAEapUTYok6tjrBTxJ8sLbK2YPhcWBEbSg7ueSsV5meaUQ5wQNWnNkC",
  "key31": "4wAg2XAyEV5gUZ6bxirtFamYJEzrhFCNmuB2uDwA6E27BCCmiJim8QKmXEvQYCfJCvhTZY9QYc5vfc7bJfgKiYdd",
  "key32": "4N8WMhCF14auUAgzxaaoZ2Rm5aVBct9CpLKS8irss4JRuBqeNyX84n85J9C8Bus8YZjDDaZiHMn1zqX6Jp3yqUoe",
  "key33": "3VvWs7YzdjtzGJZiYbFJk1D5SyBChrEaEFaENAPPdewr21u1eQuE4RDYJok6F4o9u6vC8ykoiHQUvtcywVigQgjc",
  "key34": "2nacP5QokEK5VfWcJ2NbvbHgLiFmRQt3aLP2eKbtRSiGnmd2wcMtk4YM9dWyfMzEVWUDDmabUQf2aqL9SAQQHnxS",
  "key35": "456dTmF4mBhohYTdHL4GyU5z7aXkMYU4vNKxaxPWAu2HxY8dXCNNs9VTyaEvDhYuswuhjmV3X76USJ8sxNwY7dsZ",
  "key36": "4G8TSxe3n9oydJ4H9tNKjngAZHYMmqbaHVjbdQKx4y8aEeq1DDtchegbUngwsxjraaiaRtWQtyZArq6AN2FiJeUG",
  "key37": "CPC6AcYVVb6y4tXMjrtK5bSpjLCGD4MeeGJSgshh7ydDHWTkv9LcMLTmDNXWfVWVY8vRps5jHvPntmLPoKyYNZ7",
  "key38": "5HgRQcbMFpLpfq9o8111UrrgQBWNpZXhC3nTjPERYmMdhh5Pm2i5iJ15TuCUGgay8QYFW4ug3hNJsQkMD3Fw328x",
  "key39": "2XQ5C2gx6ev9AB7NfpudQJXXzpBT5LvVad8TFRENbWD3nWdgo8EJnwqzm3W24wuWpNFTweFbbN8HGqM6GTSPiRwH",
  "key40": "2HehrivBSxvEzfJAqY88ztiaKGVYuFkxqhdQbTvEj5HSZFf9GRthSZ3Cdcsp7wjRFy8n64nySeHX2PF4QJbHDafG",
  "key41": "31NteDsyZ9yLbiDHbhhj4FNVnBA7wFXe2ngpwhENJ72wqEET4GBfZjbm7UJBZsiEDpYpG9J35nHEKCxW4pNNP5hj",
  "key42": "3N8aSZRrqxGGctGoxQsH2Tor6mNgjj3JnKQNBXDgYgoKhnB79fNiGUXJnjzRvi9gzFTzDZZMWxBi4KcFeTxLngCg"
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
