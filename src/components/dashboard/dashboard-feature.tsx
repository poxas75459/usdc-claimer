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
    "5VLvca4ntmzJohpMcNv4Hrw2pPpAhcQQPtBaKacbm88Be6wPbyL15vVVL9o7U5Pg1g1yV3nvk2H4W78yFrGNAB4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkDaLF3TU8dgCsxZJJ3iY2Xr8QzySqhL8aD6MzgCnhcawTXQxEJxa7PPMAWqTaUDNRiaxwTykrNEzWjF7MobnQ8",
  "key1": "3RSoAUsRAEX74RP4KZejYLusodtoSeWAPTKqo1sYJ7fyuE1RyEMkhpsmor8Wc82mjrMqpdAzRvf63u4mJyQT3jET",
  "key2": "3Lt7ofEr9R5FJySi8fMY8UwwGsyKa8h6kdE2piNCPkS821MRdsXVZVEMnLrYPxcTdM4hm2gRTWZQKqEr6SnFr5TC",
  "key3": "5Pe5TNVEPhaeXaYREGVGHfwZ4PzHkhQUo3s14Zq5BXarK4krXQVS9Bo39ZkGo7DPxx16GYiFwTy434FVYzLUGWEY",
  "key4": "3iamL4vDJxFLnvY9tim6jp2Z3o7ErR1a36hyc92JxPnGQV2LJFSvCakQqiKbPe2Yy5HEN92FoFuwz5yFWMfYknPL",
  "key5": "5jUAFxStAqiy5DkSV3rgh5dezzVAEfMZYehKbj5bAXYcuxv6bH2d5ZYNhPABtmi47n41CEhRdCogo37FjY8UWpDH",
  "key6": "3VxA8CXKyjuepwTDi3ja2cEeAbdgDY9n8pxQUk2GQeRnyUjXhgvG4LLZ2uSnf4h5HHx9KPkAWSrDokJWA6mBNkeW",
  "key7": "3MtNCiy8qKUJN4ZtQPi65xtzYcjQ6B2vxBmxHF9x111RmdanDPt49CupgBwWHJGfEgppxFunjRvAB23ufTEW5xUW",
  "key8": "4ibXMkCoxWKZzsJuj9FHZwPHUNcPEK5QVQHU7VppVfGiUVDjCK8MBt2diRzrmFaNTWE2x2teV4Lyx7XAb31X1SDc",
  "key9": "5KBHC9AWNdp57qbRiw5VMa9Tn4x93UFBKxwwawQx8U19fLTRZo17jCbdNAv14fYCMMwFkwbAiehgv8XVMy8mXjNr",
  "key10": "vJFMxQhhjuNk8fmTS6W1MztaYSVadvZ8Rju54XAjieUudKf3Z2gYTf8MWib3UuR8ZmNPUVLvZ7pL6DdDMoD2JGB",
  "key11": "FPUWgtZS4DaxMURtU3SjfiJtphq3R5XD3JK1k5DzAN36S7KcqTrnbYdAQ9g4tt5R9mj53XCEwKSZYrxUMgsefde",
  "key12": "2KzMPrGHf25svdGv7HzeSLEa9T4koTZcVCgwYREpm8QWd417YYfKkLTYMh44KwJgD2EJRfwJVHNe8QKmz1n9sgVf",
  "key13": "5F2kUi1DM6nw7A8m5sWh8nCZe1F5ghECtfvuRvTFUX5TuQxFBhURU8xUxsjNam6U6aABr9AAAPEbw7sxHG75fmgS",
  "key14": "59byHgEXPjbVYHDXPyExnb3mYqRdhFXPj7iNtjHbFZnmo9fPmUDKpcdMqhVmMbbD2pvYnFekrmDjYFEC3QDZM2rk",
  "key15": "4gvzGGvptTMXknLjvcRp5WtcQaGqStku22xMAr7eEFnxtbFgzGHCgrGrmXJQT7G3wfSVP4dDY9tFFUBP3YQ7ujfW",
  "key16": "4JehiYZR8nVbYxjJG2o9FkY9crDxHCB8gYLDuXnCXpZG68w4TJ37QjK3yB8eqHWjnk4H9pz93NEuz5dFD4EHqLeE",
  "key17": "5uVReiCqtQtGJRNnk1KbACGQ8d6ezpuWurPoGzdoQNyW4pbjucPATsjg37x9Tc29txTHKKS3sNiya4LpL4wbeBqT",
  "key18": "3ggMv6u9F1PM7ERRpUdBzGNtzNtZCRaEv591sCVGVMahS15ZkPgzCGSLVMKv6wWc2N8LZPyWLuTPEMfZBnxBB2Fy",
  "key19": "5Vm412edzncER9oTDaWHs4xEestdyXsLsw74kkgygiUMUBBnmVCL6BFNzBiGtw6KhWVqw8TZoBYD8J8PyEWpJEzP",
  "key20": "2JvZYo3ma9peg2N33pmfGri2vgEthCip97M98ZNyk6D47Bi4SSQ78TM9ZVwxh5EC5KhSZa8xHhiCPxneCJGLveQj",
  "key21": "5Qq6ySddUyByhWaghGJb3zRqUQQ41cgHCqcxghv9qQPXruzynjh8x3Rw3yasXVCjPHBQUxSppiiZ9u5W2aXt2kJX",
  "key22": "HMWLVXXa3ybnQbM6CdciVRzjmU3KoQUfFJvZ9FwrCjgDVR2paRiQf1EtwsQYeMuk4DKJKBCe66HJPwwdummN1Qo",
  "key23": "87bD3AmCGwpehM8scCi5NgRXcDSDFXTHrVPC3aWLgvcySQuKizp8wRHAzr1w92EcgGV5qkKGbKfRbEcwFcWyjic",
  "key24": "PqeGKK6V4Bxzgeiif4WUNnAVLsXDjEqbb463Qd6V97DmkWRLpogJR511q9TfhJgR7vXBWr33tsguf1HnVuZGAqc",
  "key25": "2qbA5kjo6ahpAXWJmm5zkVSTKcCxWcsaRQPscdc1D3RmPvfj99r6kMFjsBA3Hzd8QNoY2Dq7jAseyTtpGSkFow4T",
  "key26": "3r9F6sEmNuVd6dpE44bgZzxEMSgey7HpdgDvbGQhzFvK8jSpkczcL2NKAaL25v6kzSPAvZyHoZwmVrzaBpS3RPNv",
  "key27": "34w8TDY9V2naDeo5xPrkAzXe9RJJuWzH8CfzMgZK4pao7erzWjs7NToKnLQoR48Xa4wrgmrwzAtF67JC6akvXs2Y",
  "key28": "4nZVqKqPtDyK9Jyt8qRnfFgLvBuZ2MpDE2iw4LRZHDUkK5Z71oyuWEDESZkHfhPbny3S6udE3vobwwmz9WexhAsV",
  "key29": "2Vtar15XvdxVmLfbX9j99njzg7sMXvmLu5EwZ6FLzRHen6BeQkYVYuezmRAmpNCb5pEjJTNQ2xwF3zfD8YEJbavB",
  "key30": "5WP3jAkTnhZjFS7mbGaZJ6xsHWpK1QCGM96mgQpy5X2efC3bshFSVLMoNdw7ot3CiaLEn5ZxNfRakR33wDHzktcf",
  "key31": "YXuGSZDAbRoKF4Kc9immnnH3nxkfPzuFi8pE6EhtBNT5by25aqFMF1ATKqRxnn4whmgjL7TGcJc1jhXVTyCvQ6N",
  "key32": "2uCpELum7qLT6Bc5ARsJphVKBUEjLskMLGmwKZ2q9SD2zccroFE3wAt2x5MVToEWRFsyNsb72dQbSWrrQyuYp1u4",
  "key33": "5erRm7NZMJt8fGnpeoUgGnADXb86n1X5gj3SfaiSao2Bc8hr6a51fdC3CVBWW8kum1ZupHdmg6u72MJ6AnS7pzN1",
  "key34": "BDEZkYJvNCBYqVkpzJ7bWYYVnheUcXobsADrL3LxSWMqjSziG21niCPVTygrKM1ojGUn1RMzAzfb1z5PJ96gug8",
  "key35": "42xYYXpDhjZ7wnNaBiczvtxySnYAJpC4YCKg3bCvuyNmALEUjC2eTuyzH9GDZmVtXGv56DP4vJwp9JTvFePG6AAG",
  "key36": "2zBVjneEc4D35FkCnNAEtBdYc7uyFKcaeTmdZjZVHEXERHhiUK99P9XjcjAnKjCufjzvGwLqkrDV1zhugvynCje2",
  "key37": "21w9begbAtCJBY9BVHhrD6bgLBW4uRX3n4yg7tPcrffjf6xggi32fVDaYKzhXaiJb5CyG6RjPhhnuqj4sHv8tjHD",
  "key38": "3YeVmiEtSd2WYVvSz5DT65kRy7R5tXvphYuBqbDymbiGwLCYG5cysip1NAhTgeqHroqGhxq9Pr2EMhf1KZ14AuaL",
  "key39": "3KWJTB88Smjvcgi4JJ6ozmf8zLJSzZMBdSo95s4TJrMVHNfWmiNk4Br6sNBR4QztpQCNSdAySSGaa7GWpAugKhfW",
  "key40": "4qkxUWH7cWpnXgjkKDqcURnadhHeKTrskm83YZypc3stvVVvumakMCGmVrdih3W474kHAi6Q1yCERk9B9U5vmK9d",
  "key41": "3tvVorr9rU6jkgBK3f8gVBZBybXEtzxVL41LobMhkHSCKueVtgASCikJ33FKn9fNQhqqWSV2RiVD5YppcPN8hiEb",
  "key42": "61DkX9cXqkBv9kJZ3kN4KWBtjq3dLXxZpXdniqRgtYK6r5Mdh88cDgtceyUJExEPsuSyVtuUpnwvVZVx7Wbz5LBz",
  "key43": "U4E4xrzhBx59BPmveTTWfzv61Twa7jAZaFwHnSMtMSVVWM4yTKJA6JQWTpPaMw2Zyxsfe4jG8VawT5yadchtYK3",
  "key44": "5hfRRVXbqcCiVEhyvRqnDMykUtumZw2Bnuukw1Mv94svsTUH4eX1F5ya5iwZDcXfVzjDKnzsGNSjDk4h8te5whdE",
  "key45": "3jGEb4vAreZrq2tvvoDN1tH3U21dGuEbcWccux3MVt1zzsTZw6bjkw7YKpoH3k2A9qDjgxwoGKPAWmXyuNyj8KDP",
  "key46": "5bxYfU9npsWrCJ8UR7f3oWumqo13QaqwJCto1n3M5zM8SWWmhJj2Rt8DqmtuvzR15RR3rnz9tz7fu7eeroQXv3GJ",
  "key47": "4JtExLfWdyoUBQHFy1qJiZHcDG7J3AZ19pjVjWVwMLna1G9yBahnBen4EQxn6m9rvtG55r21Azfz7drvg2covcMy"
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
