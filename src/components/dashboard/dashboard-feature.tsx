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
    "3ybbXi4b49umUjVKXETRbRXAJG8dvNiwHi2bDmFJLbVhJ6seRo99ZWhZFM5SMumDocEeSbQdbRZkjuuZRPMd4RX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xFCkMVpRPoZWq1oJs6RKzcP1zG8HvsE6gPXarJgxDg3MuWjAcu5XaeFmpwNtAdbyMgyxSqwQLs3ARtDh1hvxC6J",
  "key1": "16wkmpHR1eT2TMj4WGEnLcNmErfj4fi2PbNRy4RabYA7GVmNbVaaGxwv8zxN3uuetHuY99bKY6CBdeMkSCodWQV",
  "key2": "66bZ9nALpcmUVLyRMsHwzypzeQcr3KStmxDFBa9MXSrMqztQhqJPLYHN9bWbFpaV6a16Wosm9Ly9AbgYy4MDbv6",
  "key3": "5sXs2q9V2c1e92juhRoeWjnpAAshTdBW2i55L6Xuz4JSaELg2tchgQGwv6PHagREP3tRwSZwaKA7hkhivJutuz5m",
  "key4": "3yUCNCAwaQCZfhHwS7nn8t5WPkJCRo8ztftF37hBrRBYkdpTACMh3fxco8x7LQfvKnDHGQ7iURFoij3StfGXeqyS",
  "key5": "DVSp7W9hhT6wMzALU7Q7U1eEMBdY2Mzf4yQZXxqVjy7dE7yFR5sZ5qaWE7Syx6P5Rezs9zKfe8T143qJUVs1Spp",
  "key6": "46ciDFbUFoWx2nwooXCXn8sA514M7M5Bz1rw48roP3i7eaeNsoiuLJjZHbD8FSSsYpBsAoDPww641YKhsupXV9b1",
  "key7": "3d4dZTdnTpcKyaxZwVmZ2GZyn7u8rVpdFHZeEBuAN1yep49GrbwQzf2F6PK8jDtXZSHWPsq3Lkd7Fs9GxERk2SgK",
  "key8": "3Dx1Nb41VdF2RsKhW8Kxc7bDLxTngPxjUJ2aEXJye8rr23oVTfhCxS1G9SSMeCSVP4GP79ZX6jVAw81jrHMoMfzD",
  "key9": "4z7ks5wRo9nWRiSJs2gMApxP3QbxXycTm6nFvW2YCwUciigwe9LLfpfangV4Uh2ukwWoMJfUq88KkUm9fJABy1Lt",
  "key10": "3NF9DtwbU3tj9QHaQYwvSXQ8cGEAWQFFpDY9jZFQDD4JKpqDLdGzfBvHq3jb38rqzYf6xZBPwjTpt1663c9wrC8M",
  "key11": "5xpJT9P7ejPhUctsGEv2EwSeUWdRozJaDnhimwgLbzVfzrMowVEogc9efE1YHcsgsimiYKfejR7NqnPMpBfEKnYB",
  "key12": "4xpmYYPjU4kfBEXNzx1mmZ7pX2o7EWDgvfskhQG7q3NnLAK3sXDwpVj9MjG4RMuwEwy5yTYdmM6A1KV5GGGKvpMR",
  "key13": "4rH1fDAuQ6PupHZuVNHQ9pQSo9QwHibeDPBbtCtrGdpDSPLUCw4LCUKPZ3uW5dtwp7RCBj42Q9E1zhCqHVWdinQp",
  "key14": "3ZPpNgvqmn2wLgTt6pkDcELJRp5yk9FS3EuDaegArxNZ2fMRM2arWoEiYTZRTbzfiyuVKwjqVn5UQLA7pH36gdCN",
  "key15": "5UCeiYyieaep2hQQDMCYy5pAif5PmCtZwnwU86a8BceNPCJCoPvhQysZwYmP8MFgh73f5T8f4k5AtdtFTc1Jiy1Q",
  "key16": "3uZHrSbFmVEdfTwoRWtqFv52W7WCnFMq9c3bk6Z4MnjCsbRmuRRtZW2omsdK749isAS9grCrPU49JU17EB8WBZ3h",
  "key17": "5VNR7mmsxshi8uGYk91oMRmo7ZQKVDQFfSAP2yYnmL5C7eF5xTwabnV2m5yD7frf2XGRxnd6WNcR2MjjBLLWQPRQ",
  "key18": "gKKWfNBWDZQvppFhUvEnXeVXcsTuDWxN8nGmkwpCoWL6i5Vfe656LPGWfecbNRYs9WnJqUVnGxzjjmwRen6e4KP",
  "key19": "2LsmFZ88qpUFS57YFWeQgufo1gGycCLsKTS5aD9rffMAqDoHr5RWiJ5YXo2MwWN3C5LtHwJjUqiwnJwCcb5e9jCB",
  "key20": "3WjUL9rR5qMSUJkCLH4LkSHh6F6AEN3qNBSk3fqpvib6f6P7pGCWtsfrtLc3gUftwC33ZBfryNwxxzJcTa2eoF23",
  "key21": "5xju52apa4YBTGtddSZ6jKvATjqTzPKATQZeCaEgvzui81jw3DGAg1gbgSspvw3D61KuZW27pC6CfHy4viEL8iwc",
  "key22": "4iFdDj6M9t5noghY2khhDWtjn4KYxRHSczu7z7WCmcrsMA5ppFdwhoPN5hufx1SV3ua5NQPm27g8Az8XRTHAnAfk",
  "key23": "2GYzBHZ4wybWqnDm7TAuhxdn47de9dXggUo3sn3DTGCW1QNZTn2bEMmUGJtYbLsU1XDZVTLgJBQvmSD3NXgErt73",
  "key24": "2ubSFPNsbXTZy59RxNCk5TMTA2NqoZjbJ4F4z98hHE3PAmuv1KWEfRroad69v4vHcHxK3ipiDRfT2URVJ4mHY1hG",
  "key25": "29Btbe2Gi1kDpmzzjDKn9bagjpzk16ZgkPCondeowC1iXDkeLiCzi5NcntME11m6HXxVFKTfCouHmz2RRRaB58gz",
  "key26": "3yUpZhhGrG4X9nxWJnqMMGFCqbnS1dtDWjEZ7G3PH5yUVZaSNBFbAcaneUjB1BHN3ptxUJaW6DPzKv3KJuG4yF8Z",
  "key27": "5BELDvayBwTyUyPCkZtzUpAxKQ6DjSfC9FYy9bCv7AUVCxovagAabNA1gNopqCboyp74fNXdaUpDD1n4TFacb8sw",
  "key28": "3PsFV1GgGt1nwKqgFkNQQNwujZsiz3nfnjD59whFzKM9aWBub2weXHeajCVPZ5rEq3QDdrDAew3C5raPcMhyeXAi",
  "key29": "437LBcZE9iSPb8u2RG44zvYruSJg5s4uUwANuspY8A579Wss6UwMr3NZ5Gq8rwpbv34XSNRGcQR1bvEJWaheYPuK",
  "key30": "53m3se612ctbij9Cg1vjHHaAdevdQWtHCXhCXKgf3XXtH94iuisFxzxJL5PR51GZMGL37P3H9G9rjACfhFkQVNX7",
  "key31": "3YWz453NbxEp7p4NmEzDvkE41NX5An7kwcTEkAANbqdvw34Kes2HgYRwHmmbVKPTHGEgkRiuxoPe2w2iLQQR8m6c",
  "key32": "4CJS9MZx2ohMjdspccYT61f2AEWCFjkNU5Wk4H2tQ5NpinPArnJnGGn235Gi7KX5nXgNg8wirwcYsCb9WFdJDnZ7",
  "key33": "MEZMxB6QdETSXpmND76kCMDKQejcn5gvomG7ZFoAYHG3aUN73enT7ykc93vKrSUttAtqUNDJDHs5jifBWbvsCU5",
  "key34": "v38NDpTa2bs9niphueEemB1PzNJFbTwpBZMnwU6hcGGpWsnvi91frTw5FHAgkmryrBSBkAgyNUTzbDxRgpQRRf5",
  "key35": "XdwadS6B5SnxHhU3StAxvvdYo5G2QdmiutoZ4AvncHmqPmLLfnvAAMkAJ246UCsFK2uo95AKkFwF5tt4m8iJn3h",
  "key36": "CoogVy8BEtp1bvFaxLHsuFJaXpbX4PSmmAKqF2sYtJkLExHREGBhWGA9RoTgivj2eDkCDDUKKGr6YQomjWDrqMd",
  "key37": "2cwfE4z22t4i6dFBsmrHXs3U9EqdTxXhvpJsFgFd6NJbzwFdkNvNp1G96aMtXKZL6DeRMa5XpyQY1xi98Q4Qihzz",
  "key38": "5Kx6DGcpExGXrXyUEiEfT4FpAPk2MBfoAs715kbu6uaqLQ5ow4ttdBp3xHp89EwZHqNWLbiZcctu7dFYgi35NjAV",
  "key39": "3WftFjNSg9XwZDe8cXoQny9Av3sUuEVn1h9Dw8BbJC6XE22ZUGsYDRYdjU21Do9MLP74TQdqL52oBi4MAZGvc1W3",
  "key40": "2ScD6VhT1J93i1uiVBACF3JCgBkt9GfpJQevCdbEZRxM5e5B2znXS3BZuKhU6PvXtfGZunyk239c8vYx7JMk3nHu",
  "key41": "4G5ZhCCySMYSjqN4LxeozMoDzC6MGv2mr8om8gQGfiVmuJV6SgeYDpZ1dnFDKU72qPQakFSfgiCQJ7wg8rbE3svQ",
  "key42": "c7HZQPfG1R4UTJYvuh8ix5vYwEtvmUjPxjdTD5FpRowgf5WG4mkw4U6njYW5eiG3x5Hj6nckLEh2Te9EA6r7ph3",
  "key43": "4WfSMxxJ7b1LDJhNTKojxt88vXctuaLgRqaNRJQJeHJh62kG2XMY7pNMsJuEea6KUvSSGVNt32PiuywAMo7T8Egv",
  "key44": "2mxj6AaKfk62g46ZJAoc6J1v6gfa6FJB9ghf3eyQZQTAg81h6atD8yuc3qTTpadJZ14LenJLUxZLJ1xdzandwsSZ",
  "key45": "4bnEYbMpTsU2rPeBpmngPdQe1eS5Y63ez9rbJh96jkQL88NbF1itLuSEV893ZGoVS11tYZiw6KL235BAdEDn4bLB",
  "key46": "3jpiikovUSb6dR37ecV3XU7qxrcZiDxZqmDaogR7VxjyNndx5BJqMJRncJ18xsHefEZyx8YUt3DQKmdZPfzpix8T"
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
