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
    "k3uNM7d3jjc6xkgAMdSX6xVXfAeJXVJcsXxM2qom9EqbCo1r85XPoo6YEPtJkJA65euzB6SaT7UE8gVNzPLock7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fhcGgphn8DLDNxqt4UvFU1HJVwJ1SP4gFNZWjvKvkze8ENT4Jt2w2mkaqTR3Y3ZQCJMxE13QcMqsEreirV41HCZ",
  "key1": "4iMVXUNi4L6AtP8U3r8D7chb4Xqtm4BV4qD8bXuVZ8JDqYQmx1Wq7SeVyHRYXiN3Zt2zjRWZU1F1c4m4ijdmi1yf",
  "key2": "4zgL1H5X7gBjyiCqXa9gAe1EJRFkUKJxCTngPss71egoJvFaBqeKrEigy8djZ9NoAxmaBKSjdbHe75FU5Y5vGm6C",
  "key3": "2ddkbwfQrLaMEMUheSky6r7kC38tpae5kfEWovGYX366P9y3ndoKb4XSrBmesmkfHwymdYyWjQ3h5z7yufmXbhSW",
  "key4": "BH5iLB2acivRNMNkLftffAT1DEhun88yVHmDb8oKd4XEpgbKE4UppS2AA9Vs6xt9dpL9bhVU1wRHjBatWrAvBds",
  "key5": "37dp2w97vH4pFFFqyiq6EvztCwLt6jubvatgQoTb9Tr7yvxsuPZQPbnYJPN5jycrea6KZvi1335FRe6Ndq3iGsyd",
  "key6": "2Tc7CzsnUVxbiZfvA9kw9kvxY8v3U6K3EK5ktCBcWsNjKyx15SQKBWnBfre1dSFmtn56SUbapHWM1mLwfwXZFDuz",
  "key7": "2fwCQiXE9LL6EdvnQgTDnF8HZx3FLWfoUEJVRZgET7sccuVpCSHjmPyFk3KvV6cwrF7DzaSUWNkLqUvSRsNxKRWN",
  "key8": "2xsakva6yKofXYrs2t5aaq49ZmaPN9N6we2Ke3wmHPAo8Z5QeoS9BsohKoZBz9rNn3kxrFujD34g3ZSHg6J6VAr",
  "key9": "3SiW6yrXaUzdioiWvddjV1MVLFzx5eet2jXdWdnAph3KF7bjSL9czx8C7ukfSa1NdLuD4QZsNJQGKd4uHZygNVCi",
  "key10": "3Wku6Xt58ogAzi3sHqfxjqxuTccawMohWFBnSDJW6VsXfBAD55oeF7tz9EFZUSSHidCaQUyZav2Sc3Nsx2qBpx6D",
  "key11": "3ua332XUpyULi64BYDbyskYBSKabVvToJQW9PXEb9PnGo71B17nxAhKjcx9UyDZYSd4M48h4VACQzENd4uG5Xqdz",
  "key12": "rJ7d56YDBVPMYkfLeN4CP5XkQLrtVhvXPidxuoLLGheTVeTavih8NZoM2jeRxbt9MQsQ8Dxwib3Ddd3v6yznmi3",
  "key13": "3ySzGeDiqR8J6HDFwWgvn2q4UCFn6GcmEWqzgmMUkSwqCMHWaUzxai1u2cLYdV7fUqvtSbp8yUFcudnJPz1WCAuc",
  "key14": "41mJ23x8S3WLPUMv988hLBFQ6qnRvSPQL3bPpDEpdN9T31gtpTri53AhhaGgzKMYnBMYLP1P36GMVmi5WJ3xkBLp",
  "key15": "5of9oNffAVNQ4HBJYVKFrjxUT1gTPezUVs15U8EdkX3JD4Nw3CNyjmWT1iyQLskBLrdEpcr7QYae5JDkHjjTfx1e",
  "key16": "27TWE8sJ32P6RycT41iGWGDoB9A7LNvhHDeQcpHki6ofrqEMvAj79Yy5TF627z938FM91CU5BEqrMLeNu1ASHsPM",
  "key17": "3JReXuwLrpd9L8go3geLb9rGX5VhT6gMk7bC6qkh2owqeWGZs7HnZsD8Wn1aWLyd5d6PuF3MdDLnfvhMyMCeo5ML",
  "key18": "3mVzXHzCtavjHR4hytiufqDi1FdGcyGjXqAUb4TsN1oZXXV4PBsuBoPs64qSGpfu6NWAUUDZoBUKifBx7S5owvjU",
  "key19": "3vC1NmGzimnxKqCUSYKreiHdiiUvwPsKhTgeKP17gBW81MRiYoDutjpwDULmyr17D2nMTfNDMP4Vnn4waubEob35",
  "key20": "5jTLXybTdgemxzULyKp8aD5nHEpmM1EWT6kywcbdood7apRQp1B7URgKGTggTUWZ4XXEmp4r2cf9n4CQdq4aCsN4",
  "key21": "5x8zFKjzuxJpUcVTEP3pPU23Af3EFCB3o8QtSmL3bxZxcMC79sqd2mvdMm5zq76Pg4ZYzS2LNbEwap79v6s3bfd4",
  "key22": "46pCqnwnnRnDxafSGZUpP73YziZ5PLc3Bdj7KLQH8FTVbUTxgduJtVMmxmzqTkCz4p4gCrwmRnugdKzX6Yk661U6",
  "key23": "3btMZMmBnJ94TXAb3wdXobipVSq2dThoucciH7HdXgrg7F4MCcCRkyu6pibtXL5h4HfdGR5V8EqsMyXgc54QwV7r",
  "key24": "5Aaq16dBZWMJoAybq9jwAJY71ZjPFR7fH2Zwx45PLv1a2en8Zpi6PKT4r5m5QuwZKVqerkzCbKew3WSKsREyvm3N",
  "key25": "5KXCpuxsxVNVtxuxxUmnbjpsGYntCPHJ1V6CJWiFomYVtxC5G2f82MqHAD7NrQq1J2PPJJcaZzmUCcQe8GAYvEw5",
  "key26": "4wExgYEGhbXSDGZ6gFSnDGMdcp8ZJ7J22kQSDzpoepZ32Yo43NohpwyTgRxCho5iGhVTMYEtwBCYnQs3yBLZwyBr",
  "key27": "4BVGK4VUsjNMgtKjbgiWQavX8BGEexBvdb7wvZqRXLmeN3p6nuaoZqa1GqwqfoSLNvymJn9ACcYacczsC2N71pXv",
  "key28": "3c4D15bsrjrPR7Eo8Dpi7abGd5W4JdmByAU3sibC6atGXQEJ1Tbmg37tREa9HQcqssrSBJLAY5Fwy76UKgMtfhb2",
  "key29": "xVrujHZQCqmYb7MVr2W1uVuggeKtFFiq8xS6ibB8anBrnJPvBtEy3gAVN9tu4ok32t5KBD8xSpC6e2Wugs2KkCT",
  "key30": "2e2zfwTCktFtvmF7XpEB9WUDcLFJeUvN42XEFJQWS3XEth2spkf3ki8ngLK1YJf227iGkTfpWB4gcqxpBAKSeA7H",
  "key31": "2gL32cttfs1mTM5fZLarXLXPvCt2E49xMNayYGWaZPSs9Suef64GBavFYaSjNLSf7TZReX8cZkj7cJqfriRzuq1c",
  "key32": "4Q8eTMJjL7Q5FycYZfdajYJnJjALrbXpkoVaCcceDN9jYL3JmPhYt9xdEJn4w2o7shb1jAg3eYq3sbSgETE4CiUw",
  "key33": "31jiJ8R4AJAzAzf5wRHMFSkXb3GquP7ZagfCgkW5r1nEXWfWTrRaEABSusmmTHbDjM517NTmUPeviDvqReFjVYK6"
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
