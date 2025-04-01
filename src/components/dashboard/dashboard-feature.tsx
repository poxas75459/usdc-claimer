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
    "DpspkKrBoWzLdSj1MJE5V69G8Ea7PjA17g4ASr2ZHT9gnJYfShBDiQLbPV9b1iqwLwTvKwgHBM2K4zYH4NqwLNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e8mXReHFP3bToeFePg4hgMNpvRkwmAX7vF4mNgxHYSrbU4WucD3AVbibkmSU2pvRcNjhsbYkLAcH9Z5kLgTJjp4",
  "key1": "3k3M35nSm2dNFvLSRjrCmR2LnhasmAVHKB7ZjQ18zAN4xs9ivqB93wBeKFv1GfzdPVNnfhjsXiM6N4mr4Yu4Z2bF",
  "key2": "3aV7ev7shYhHRBtF1q6Mt2ajBjNoinpzsfgozv4yD6yzyufUtZkmLFoVSS19RWgH8mqwXeafkNWoGCSV2ucRZqZ4",
  "key3": "9xDN624Uqvzjx6gHMbc8ExJphmNX6MdH6BEqfBFKTbWAQbP2z1G3SSpZP7rFzUkudQfRa7u6x3ZYdesvgnrBtmN",
  "key4": "3MzHfKjtYs1vgLdrSaX9MBcB6LKnowQEy3DdgTaF1URYjzYtLTNTXv2xjHKcwrgRFgPA76FzLnCbqRjPiFQQ1fr1",
  "key5": "viLo4mkGyKMginDyb8Xv3gwPUfGwUgzCoochY8jhH12ypnvuS68C5eHvtV9DEu88w1JpgAvNiR4ZHkMj1mRQyEQ",
  "key6": "67hdmn7SQRkmuWUnL1V8VtXb5nYJRSCWAof6b7Pf1zntqULvCQhcQX9ueazTERfhUfe3KF8FFBu6yeK9prpQ9Mpc",
  "key7": "YCtr3YJx2LARZzadNyLDcvHe8FxtrtbAatAf8Mntcke7UkUK2YDbhHgGoVzszKB9MJAW8pGd578j2nnYEze3wJZ",
  "key8": "4QwMi9zFmDxbsNaC1D1YzmpuWp9cYQHgBcM3iNcxDTEdm2KTsaQvmXis6A52bxJaeXB8W3pL6Cfrw3spzWYURzec",
  "key9": "53gor2HEUNdXgvNcvm17pYrqCKPNry9Y3TQheb8mxeavqycayHwRBmxaHz4Eh1mdQrFXRCJBmDXCXmX8UPniCKxu",
  "key10": "5ZDdSq97cVdcwbqdKendX66abiGqrwyYn4JVXXbrqjFbr4qMaMCetPni1Wc4bnPXjSrcZPfjtmGkCBTvg87frz4t",
  "key11": "43VKYHUSrnmDXpSQFK3S59zc62qoj6qVELLNQWiZp6mecZ2J4QafJ8yXWTQWeHsLcXDgQFUn1a8MsqEK4g6RtHBY",
  "key12": "5MnriSG5k7CyvDnLBDs8u6V2pDSwD7Mq3PyjSXR7owM4PWFthJmLp9AN2uHTQzmpohsUU3BaadYvwUDhmx1H9Dp9",
  "key13": "3sjHFsguBUZm7fThDKqMzm8WSyrRpk6b6kqgjGbRwYBXu2dkJf3pKzFkQmSD5WwnQXwdtBiwowf3SMnL88NRMDaQ",
  "key14": "2DsAKAY82BzR8TRHNvRZkzQYBDbceYh7SRpCwxegsqoFtiW9Js7mYUHKiRbFMEmfqhC1AsZS5k5mvbDj39bTuquS",
  "key15": "5QRc7S2ZzqcXAVF8mStekU83qKHbtmJURkJVtWsZhK65v4nsqxTs284qTaamaWdGtXDNAPQoHHYz8f7JAog6ihoL",
  "key16": "3cBjiqhRaNSFZvnF1ngnH2MhF6UL8iqpGcQLbrYqkVE9s91CqhX2gfBWADd4fC2J5Wgq74zNjdDzcq399cip5tTB",
  "key17": "5M7b6m9sedEb3UAV3pFXWyLF6mncTKS3cGqLURe4RWw41gcBa1vsDT6dE8kiZX6sWdjTLnKxmwi4RGRTJGg2X8Wy",
  "key18": "5ZZ5vYwe89cauMShEiK7VgwkXjSY8eMtEX6DW5CEYd7B99PKjxRa98UWjvZuDYHTfnJGKhaXoAcoVSaZZ2F6sgaW",
  "key19": "2a2yFergVB7fVhWtG75hK4PTELcuejoXhb6eT3heSAW236fmmRYLEs55AHEzm1NKHq6eNcuCgJECpnr98NpRemTG",
  "key20": "3sbx1AMNecXdjixJMaTA1fSvafdsXeTaHk2PoHCYySyZHiCtju2cEVKdG3dNCzE22233xKvjkZfoK8X46vdRu4rr",
  "key21": "Nkv4XbWx3FTc7ugMWZynWVZ8PX2hqCWKZoiddnw6XjkhtJX9G65iBgK4rWe2FsqzUA8rpC1QP7XV6fpHMqjFCpw",
  "key22": "478pyARSTcbxR1g6MeD8a123VSM8FSTn2S4GsgMKb2sqSVaxxYzwe8iebGzKMmVYZebKAMBrQ3ARQkWpK4hA3VSi",
  "key23": "2e86YVRZgdhxgg9BvKqL2L8Y7vstTiwj9ayX8KwnKhJejdARoj2yupuozp5ntbygswz4scFLAb8tcWb7eKJssBEQ",
  "key24": "25bFKP4VpJ6672GRtya3Z5XGE5NaVDaeqQfFfQCKE2ZwRPri7PFTUMeoYQi3bLxtxixfDFDeFLCEejCkq1PbLPoy",
  "key25": "4AYiSt4QjH1iQ8HpgYZbBWNduwPmEJoxKimbbh4hPC49bJH6khsfUTia2ji3D2wmNLZg9GJeYFNtBn5iMx5WbkzD",
  "key26": "3grNVA3mf5VTpj2UjaSx27cAEkECXzok2vFJzAk4Dcoghd89nezRnsov9kvAJzaTUJimyqfXoWwAx5K2vyxh1eTC",
  "key27": "4yaKvNiwyd4cbN3JP14qcNQEtx9yN1skrHutCj699few45mQievWmvwnd7SNSgYyK35M2JCeYkPtidoQVzxomj7A",
  "key28": "3PCierCxLnYJzeFThnxWMJugrqCW2D5Bv4DhAJdNESZG5HUSwMrzQjWppQfduFHXjBLgPNvDiAgbf9aJ6xUsWEJM",
  "key29": "3Zk2TM2rU5uqT578cos2RRyBcBLP9Ho973ZM1odnGQdq9ZCEntd2V3YXVr2nL5LK9DUF5k93wHJ59FnY8wGPADML",
  "key30": "5YoehYMNFhq1TH7mmzrJVYsUfcRuvN8n4kxYwJLfy9iZCy3GZNAVQgpuiekQzLPCAWirBdZ6Byts742gUCZMUTaZ",
  "key31": "2hSJgJjVMuxLR8UvZ5LHafbrgekh8YUoVxvRHUTErJHVsFX3XXpeuyqz3AB83cJzX8PR5DPAZq8Ljpn59TDS2xWc",
  "key32": "2HjYrt3pFNQj5YEmjPwcQasX1bye91xcvukcLjTyFcqkK7TK6itdjqsN3mGJjt3P7dM6nCGTah93SfYHnyYurHaz",
  "key33": "3GZEaL4MXY9K3hbn7TAG5cjpTY8432buYEfi9eFE7pXnvkw7RDrUdMB9HZHKk3Eq9uY8jbn1gH8zrKAHnZpQ17Mt",
  "key34": "iHqHGJ6t71nJt15XxYLfytKByLAeXndY57tpUSsgFUgXWPQ6TesgcgH4VW581ivibTejYGhdH8dANpWEtP8exEV",
  "key35": "3obDg99i9DaKBNJfs8LC71VHNFJr8uPG4QTQwcs8LQTTeRpqBy5YpXNGvcxoysXBmSHcRN3bzWRck9duRGJ6M5Rb",
  "key36": "3592C9SxL5PMH2b8FteDKacnLipTwjCQVv4WdtktknkcTXmkL6vGQ9Yru1LPX3tEcZ3oNwSUZhJMrSdWweKgSn9",
  "key37": "5Nbhd4dRKd3ypraF3vpc2QTBtoZjqgGbsxwpA8nKHzPAbUHSqcRocfaEDuXo9iHFEQim4cQvMMsfrYXiGDmaMpWV",
  "key38": "4mKMgtUV4TZ8GE3MPFXSNaUvLDAoVXUPa67HhjFwmk8oYzSumzNFgfYAjLgkoehEwkyBFHM1P1tdtmvGVo8wykVs",
  "key39": "3QhzV6mD6tmDniuBzXoLg9jBDbEP849df8BJekAcfjYJ4XFK83bdkFsqE7dmSQizCTkSV1J1LRp1yQnt9Fdys1Vt",
  "key40": "4EbxWnKfsrxG2E79ReNe7tv8VHqS8bzjAD3MXdXBCTuWTgzMyY2bVgC9FBVCFU9yiTfk7JmDugepyqdjgJDvBjHq",
  "key41": "5TTv7hg3r1is4J5XWwaA67HHqub4JFAP9vKaQJ669QMHjo4FY6vv8y26w1Tazjmd3ucKguev46Lht9L99LpycSt7",
  "key42": "PupRmRY1tc2bmL4wzCshUYASHDQeVVxHy42Ew55ERkDHnNy7y6bVtMuW3DksGqWB439xfEWuf1as3VW3QcsaAq2",
  "key43": "5NjFikdhzXuD1S5WyoPpXmRwynnDj2H7KYAqJFwf6F51qjFy5CbSAoNXpGNJBe3RSPDSNA4UCb6FBqYNByXQtMyQ",
  "key44": "5LJfBdQXV6EWXRoKpQDoCW5pPzdwFE27FEgsKcAmd3oi75jJBf91dMVjKYdG1DVsAxrzohVXjXmV1UbbeZDJ4NBi",
  "key45": "Jiu7ba9vHPYyCRZzStQ1fkB6527AzBY75LgDX5biziLAhJXsh8UCKMvo5rcvdCM2fNnWjLwikVpiLUgFFCD2dYt",
  "key46": "52sJGa89oM6HEYHZLu8YpwN15CsoCFAzk5mqLuehu1vGME2rQRp5Gd8bWd4B1esNy1UQWMDPpGPztbMiGaCZDGnf",
  "key47": "5MVAfSBJ7J6dtE2nPT6Pfyf5JPrK5NDkjGU99ZBavmEpwipw2fhFw7F5Bp58gGLptet3mZndjnfvSM8szFMEP4kp"
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
