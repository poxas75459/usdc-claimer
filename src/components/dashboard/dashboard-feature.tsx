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
    "rDeCojPLhcLSJ6tQwU661Juh81JixPBR744bz1V7Wz91yWgoCc7vfGpkpMNywTdRw1AUtdxHr8RV6zynGnKmJ8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFusga4UdQjdD7H6bsQ1WeiN6tZbnGM4U1XXme2hbvbTB65xdNNAz44kDDgZTndNeAD9bR7UinFs35SjK8zrwwX",
  "key1": "3oenxirGT7sSm6szm6a58cZwiTY3nBwPro83u5A555GNEccb6whRmkpAtJqP8cMmKzyDhiK8rBEoqZRewyfExrM",
  "key2": "2GirdDM1wrieDKE6DyYVaMDzzC7P1jwJ73wWBZL1Vzw2tvAFZrbxVFMcuUq6McKbPMC2kqUXrdTGUcWUnPC31wWj",
  "key3": "5ZBmSxAdvUUhsFtxN8q42F24ddmtBouCgQuf2qGpXSzRshU4e1RQoorbJtC69BtT5EeanUdWpiju61PcCfrB3fot",
  "key4": "7ii3JJ9gtsW1acKhC2RZ9LUXKmQBxkiC1TcCZCCEhypPWAcGWLATsr3z8aZawoy8sQjwSciN41UvwnWbrXZTmSP",
  "key5": "kMKQp7jUtqvXsmA4pSXjgRVvbRoHRJwPqv8j71qUsL2chMPwGEadHG9KeVJNkoG68AzbdZKcsjpEibmCBkQUVHq",
  "key6": "4GeTcqd3FwHck4sSHkcKMwLaZuTH3fMoTc3tMCCcUon3S7uoSvoir4cxzUBFDJV7VywHSPcFxWr6viD3XqBJ7CBC",
  "key7": "5rSRhkV2Rhv7Ny6wRz6Tb86WyQ5t7DTsGxiypw7s4AcgWM4vYVZYJUK72NhKMg29oAGMbKd52yNbdPFZieFgJ9Fv",
  "key8": "4ov3fMPFkSybLEzi8Ds3dsPioiK8uKrezaEao4HLzUSEofssmf6UCRwBeb4tsn2trQChiBLhtDUnVfDR6sYaMYbz",
  "key9": "NdQPLKNVwchc5gPsyewuVrZ6mBQe39amv4zYqvPSzH8KW8koZLpiKbjbGnh4UoDhFv4Pq24JFyXoDRobEBVGrYt",
  "key10": "2QgNf4erfYLbPG7AEGWteeC9ZJgkRERZ9X29hQcRtNZjGArBcf3G6j5rrAL4nKVnoZEw9kWuKNM95idFngDUw62D",
  "key11": "i1GcYSxDwmFbheFnECAUJbcv7X8vNUTWMfwCrxJXe58ujULUSwDiq4dPV5zjo5B9Z481zemXaqSwjKB8JCNVUCg",
  "key12": "5e5PoNMeSsrPuVGW6WMSe1rx5cQ7NUuFRmgFyT23b1tnjgZarhGfE68T7Lm5PivPszFaNeiewPBtydrFdvz5bnaE",
  "key13": "2nXvaLJV7r3rswDVNXiApkH9nYPN3U3G3QX9VqKfNbwdeJkoSvqSDpecv5hLsU8hArMkQcpNLCnfnWxTfRuzsnLG",
  "key14": "U9V1p882DyrYkgL8tedakAjLWCRSoF54py7fmtZ4gmMTvJ67LgKT7rRQZHkwt7zueM1BFmYJPnAvxM32Q6sExHh",
  "key15": "Ly6sjZF2za2FmNU2boMUWEhtS3QG1Lt2tWHFbUp5X1WZnNZvZCfahnW5yXEN52mudvmntF7M7z8oC1J2LbvbFgB",
  "key16": "2pKHH5nX1MQQfEB9DeF4vGdhJoDkEi56gzhxy23po31SpgTSmuTcRwvuafeVHiBE3jzs2gmNaBTZXCSEaNAxouLZ",
  "key17": "4kRNrcjmgcSqCsVX72oqRaw4rLWBbU41NUoq4gmbNUVZGb3cV7NLyUzaMd6EdSr6rXY2pmoRY2rAVakvnjyWD3FQ",
  "key18": "4JM8Wouf65ASNXRCKFP1mNHw9ZhEtkAYLr4DrzpQD2tGYFUYbdUDN2k52sbmDa2ZgcEpuKFySvPx4EDWJgVdBD52",
  "key19": "QtiduUbhGsYjvXG6bo8nydB617ZC5iCWsWUeZuADw5uNqEheGBkdxCom61hgFiDYPBj3wznppF5MB6VRV68c3mm",
  "key20": "41uE79wL8PHK47WL37BZg7V7pTopUShJ8X3KgtRRFLnMWcBiWTnErf8aUri2zkTTUUd4zwSCXwfAfJrushv44aXQ",
  "key21": "52Dj5cpx4yhLhjfXa3WioN6YqBMLLGVJ3Tm5Q17TNdyAkbbwGCDsS6w6XfzGkTDEwbGzEWZVnjZaD3EoJKgXwKMb",
  "key22": "5trp2onKyYti8ZE8BEk6RhLQJVyrp4nbeNwJ6emqMLr6MDeyRGjpz5HSPNx7MXDunse8FasFy4QqZWeRNMS2pXTp",
  "key23": "fV1iZ46hx6SyuqDz7JCeBwhHW9rQQRh9RLWSFPTqhnHTvh5ss2mQeof7ErAD6Sz66XCens7Yo682ZpjS6HV2tkD",
  "key24": "3XQbALUg6tyPsvrEtbu9GTRGhNLi6LCjanjP8gjCsk3KuZyykL58Hdbh6612xRT65ikGCrUvEoPoqA5W9sWD2UAM",
  "key25": "5jSpvNsdieabQLH1GcGEymGV3xTmN7qLC8g4MScsGKJFcdprVQ3qLHJdUzx7HMT8RgvWdDUAR2jTFtfj4bihTnXK",
  "key26": "5RHrN8T7TFTZVzessyhdEoE3fDdPsg5bJs1xeXY4nEiqKz8KEUHer7kj9D7ghu8nEQyDiQxUY2Da8iArZU2ioDGc",
  "key27": "5rTaN2sPYU6csaMYXYXV973UhZMxYZJm28CqKhWf5kLZzk6BEqqTw5rMBv8RAdsjpUft6jRk1z73XYtQQH8t75M5",
  "key28": "Hs26jpbJ98XGoww38aCcnVs44rUCZbgBnrNUc3JKh99UTMYWpzLRStwW31KWtWSR9RaC9JWf487MKKbBH7GbDvf",
  "key29": "3adaCTckHiwAeYSv5sFbeagwLJ9PpSwWicFxWnqi5uCCRVxDhsacKsaLU8qeBMRFwjpucrUL5k1Bu9a1SAPnXcAb",
  "key30": "2eAnhPbVBjJ8WXt6eunywMcnDsgUR4w4KBHWFrLbrWgSackmpKAaHvmAcnaGAuFMkoDnUghmym6FvthffmcH7XKh",
  "key31": "48tLVj5bxVbZhQenmeSYxYnsVHfkf8ksnDRvwGh7MoxB478h5mgMU8KpQCW9AmHMxD3AybPWxtZVTy7G13X5bKDB",
  "key32": "24PBVegXUvX579njrBX6eme77AFKBGkvZHYHxGhFPEWzeFfD662BVQdSu8686kyPtvZHcJVKdTM6tcdo48NifT3e",
  "key33": "3feMLfVLboxNJNSLpcrJe8f6xDzgcokGRJWGtMdBXDtCyrDpRNqcyPoz7tvFJeEnsXzsAH1gFuW6CE4VEnbiKv2h",
  "key34": "4XESGCKZimyvpqaMzSJ2a5ruU5DKpWWUmKh9xFQFJ254qzJMvbKn2LXbGvKGpHML5C6cvhzrndjixUWTGVMAkxQh",
  "key35": "GfBWfKAPXmxtm85bRcmT2vfUDzNzzhho3mVuXcxHDL3fCdA8adh2nvo1fiaha9qzwade5pxFzCmeP7LbhfaAX26",
  "key36": "5r2YExXutFy6AK2zHtTX2sbBnPwMUaq2qKyhFWuCzMGB4ihLkiZL6Tx4RLqv1wH5phknb2QH7ad86RSFc82owM9t",
  "key37": "3jibqcwgC49cYtiLVhFc8NAhNV2NokvYXB3bpFARXsyu945ZZwTPc3wxew8Y5FSstPQYYyg7NBZPR8a6grKcJsch",
  "key38": "4qpb3uAdNA3TVTB3dyEVY3H1y3hweiiEjcxxA7mGcRMJJjfKqCy5aybBhVKaGJvhsDejhnCPLWj4yiHL31NBcqSd",
  "key39": "5G2bJhM4fgus6JvnCXoDTGPpkfRWGq5eY9TiNet3NhwHWiRHTE4xWUCkCs8HFtW3VnYojgSYKT9vHttGhVCKvLbe",
  "key40": "56ueSw6vfjbF8wKQuoPT21bCc46RAN5Py1EKowXVSYhrD7uCXtM7egrZwUtu2VYPNKRfxFQ6JQeb39GVRETnZHxF",
  "key41": "3Yg2UwbuMHzahku3erNoPZKYyJxEaQj8qf6d29YbY8uFhjLTBpwM7Q14CHZ6WRkSKXqX2iQkR4WBuZxzXYSEmR2H"
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
