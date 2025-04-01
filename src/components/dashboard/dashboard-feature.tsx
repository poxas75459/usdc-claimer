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
    "3sQfAt1DEP9zjh1t4To9MQKP9ErRkxN4akSZQBaxnZUfhP2WeK31K2MZAJhP6v8Qd4ZMhVRxSj15Js3VXi4gMomj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ggBhuoXCR1EcC7TSiwNUxn1PZQCtECgM85ZFixAhm3rk5ELmCRbK9xHbCeMHh9CQx9xhuDeu74UFgcpXdyWmQJt",
  "key1": "4qptx8UHvqniRkDH8t9VggyQePsyQadE2vXwGL4R17Wgpz1mZMXXsKQNNw5Cqyzw1szLDfYyoeTPLmoLvMGfVXmr",
  "key2": "4N8F9VZGXxD5pNrH9DFXhTawN2492bWQ2rYa6oPAUypsSxQ2qa6UootqCassQtdRToXrvvRkbyYfQLTYFSdTHxnv",
  "key3": "3cFLyg5T9hYZiuW9pPipzMnQjPjHndExhWvJ239tTV9HvFynGUEbocYkkEkdawVodJCBxqDUKH9i8Pqvhrkj5LTz",
  "key4": "cpP4qMBSXrHZdMxXE36MPp3CSDLoeX4X8yheKgt1pU8GAA5HfmxmY5RHUJxoxp3VXp85yh4kXrRHyM6ZCSRkFAC",
  "key5": "25mmjC6NWgQSRyXzJJymAH1vMPrJQtb8myEg4QxW95EJcvW4ebSJWs5YcC4iPWrAFs7CNNo3XSht8vgs1sZ2Sn4D",
  "key6": "3UHDjdKKyqj6qBTjtEvcuqFvQ5PiBxtrWuo5vxPxfsjPJRkL1USoKQ3BUVpoRyVyhcY7psY6Z9ESc4jBAtDfQsyW",
  "key7": "4QWy12HAvP99VEr6FktpEcnpL35yohHd574eKUphzb4VVD2zGEHn2pVUKBRJKJzL4ruBf2hCmGTa9S3raDJsgwpT",
  "key8": "Gw5Lx1s2Zj4TiEkbF6TkB2WPzEkaPXqdUEqhTG35rErNg4JaYSJzx3NyjiJ6CwXS5Yvf3BFKVYj8XQBTGHHgj8f",
  "key9": "67Z82dUKHdbRu6vp1Ez263vsqC5D1icLAuvsU8sJsMcPNpw2aNPpkgnXg2ZkbFH6SswgPawGis8mvrArz1CeZhtB",
  "key10": "4UBv1wJXoKogHYXFp84416SpwikURq2oWnn6UkB8YEXXgueUimgswChHcMH6yhC1zPwmGU1YB1LamdSKii4ARkgB",
  "key11": "5sJvtfjsmiZGHH1vFVPjUHNSdceFSZWsJ861SM28zsSjSqvDYcjeRbZDfmREKVPjCe3264UkWiAsT1m2Q1RZYqxi",
  "key12": "2PX4epsQAKLyki4M2bT6MpjctA2kVgWc95aJUcJznYMphgGmtpAvoVYFnD6NA7SFNGE3sEDT6RoUc7BiuS5YFoC8",
  "key13": "3LJxAgD4RM47VdRsM22uEWQDR9Mm4uXZwtKUCD8vbxRHhp7tTuNntvoAmo6kjvZDPwEdbhn1ihAoGqtv7FE23hks",
  "key14": "rCEFTNH27vDshQRxHadUxa4Sj8Sasef2vmTm83nkiMbZaHdo2P9eCBkXF146jj9ufzTAzjhWZocE5q2k1HYk6HV",
  "key15": "3mwbULWpKEjwwDuQVpZW76wJUYqDcgUaio1zuRRv9nXuVQiZMoWamKfgvsfAbqpCceXRN7758TaYm1g85bAGJvcE",
  "key16": "2TShZmKpYr78yVmPfToKp8BiCpHsTkTnCNYAzA4QmzXq5DkCCNNSpxDofpRoE14gt1YfiU4sGVJ5jX9AcLSqFfNW",
  "key17": "32wJDbRaj2B6GWUSW4XQR56vaSUhXibfWaLtzcuwxV2wDh1pVS2psDMTCsxStr2D13ESz7vdeGvDoQd8aixerivw",
  "key18": "3tJqE2ZDyxUWEdeAffxTWdAx2Des834fDccuFw1KLNCv6rNvqysSKNytgmHfQBAkLPQFCMpe4g5riewZXGzUix5P",
  "key19": "3brzonWQxEYcyXffpgzudCbMvmsDGyzSmUAFZCWipKKE8dajvgVxdXvmqEjnHkqApNXf317pDBPcrU4PV8HGvTT3",
  "key20": "dbCYBf7CjYc5U3WZSga4F2X41ZXW63LZpw6DirRasRjPuhg5t2itdACnmPU2R6JeBLGHaVzkDfAeFXDn1iu3Y8c",
  "key21": "3vErbhDSAMd3G3L4Tg32h9LJraDvJgU8uPktQWNpCsbVZncYB1wDjEhUeFidNtTeAT6mhTCfM8qkCPEmtg8qCYBB",
  "key22": "3gyZ6XmQab95MeK4S3tif4uKWPZercJ41rmkTnm6PChmVZVBGsjVwi2TtJaMrkk8njrrm5extFkjNLTgryjaPKa7",
  "key23": "21vKUAxN8YZ8mLg7zJWxMZ8RnncmzoMnLxLxntsrosKKYMDA1JYcoRcKM8SpmQGy1okQXkt1B4N4U3WsFLzMmagG",
  "key24": "4yHxw6CFK46ZiuLBpwNgWMjMJ5xJU7Rq6VCgcoXMNQmU5dT79ZfVkTrJbAWR2czLVHrL14ZMrMVoHkwRo1oJSQc8",
  "key25": "2ndT63a6rbF5TehoACPuq34XTNo4ij2MAr9vK4nxJHktAmXUQXxwji5vsR5YTTerYZsG1FiXZen8bEBqRREwC6Ni",
  "key26": "4WU6LDbUcuLseEmoANgo8VYKRX4R8xFMz5hhk95DX3rKDLAU4eS7AsYJQgdQnstQGR8RWire2phXFVM3HXHd8nKL",
  "key27": "5G8Y4fzAvuuBG9E3gK1gjRKTGo479zEpL7bi7MGG6QXJWuHc7xHsJU8TUKSjWPuSWznq6n9MvwLp1HqEDoeu9ikJ",
  "key28": "5CwTGY6hbGkf3E7B2ScHpWYgexFaWGn9HgWyqPiBHFHhGF7Qke8jchAygkp3Ed8a2wZUT4cahMB1L6Fh5dRYkJiF",
  "key29": "3pmc9VNRvJGpr8j9zb4KXmCRpnTsMAKyLeuPfKZDm6zUG2Ueb5z8KJpaSJWiN8onRbH4Pw86vUxPFPs2AG4dXa6m",
  "key30": "2u9CmrysBTcjZaYWYtbp1grtdbpWhJRGsT2x12Ywh7643EgnjfVSKoHfKpxEmy8F2JriL7wTdp8mNLNm1e79Npv2",
  "key31": "31knVeAeH4Y9whnZsiq9g1FumhgU5taMPjinru8iaiATL7iqzyQKHeeKs4VG2cWySnh3G2qf4DQoMiLNrsEy9q7v",
  "key32": "5kxDypmJTBH4J9dTWJfgyV5avNrgrLcCEsoDr7pq2f7cmSLoKKH9mR4ZNreYHYQK9XEjC5rApZRPizXdA3pkttd9",
  "key33": "D9jtZydiY7V2dfiZ9GBamrhdoP3Mdse21gcF3tETmePUH5Ch1Z3kTgXRjt8QA4K6LW6QZtwMnfJyPMhoWmbZfxq",
  "key34": "2oABkrtJjWw2ihcPupEsMYaSwQytzFVRg92HUNCTHNEG3iBrVqjZr4cD1A6RN7qexwNtpBsEtsMsQgpPYk5BYuW2",
  "key35": "66GTEJ7i44fjC6focTvHupwPvwe67LBrAouvChjdnMggxgvEXnAPaM5afnMJ7ENcJ7nHrq2dEeSxd6p51A3BTiy3",
  "key36": "2bRJ5GCvyfGyyLtTaLVb7DFdAYoBdpJ4BAKGAupRbHvascmzbUEsMPG1VFqvyobSEcByYBtwTGBn7hrUqbF7yRHv",
  "key37": "5cq5yCJts3UC7pthYvWhWmD5VEi9Z6WdCSw9zxoegyi3aCrPwp86fViiwhd2V7u17wngS2PVq4EowKPPUKWP1rDB",
  "key38": "3bHMbsHbubn3DLtSe87dxE6iPk1PLSF4tjdtEKNUgtR53QQJuFpbC3NqXM8XLi6zSY1hWqUZzp86JD59iisgCtnX",
  "key39": "2YHMDGvDn3syRaDf8Ps6XZBSnDnHZVVHnHBMjDmoUPjBeSaLqpr7ovVZzGbU929W56pKbpEuuygNwyEnZs7Ss1zB"
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
