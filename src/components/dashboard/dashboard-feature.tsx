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
    "4JfvFdF9P3kWAJKW9qjRQMRgwxfde1X2WmMp4H3Lnj2jTUJ2VWoN5DuGFTh3wviqarvjpQ3u2cgNDGqw93FcfzWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51J2w1wceKhLcqwwRUNUEgAzPeaGjZvXxB8dL36oEN5ME6JbzdxRzprXUHLF7j5xFv9i2dgJ9Fjy38f1sMgBhV8g",
  "key1": "5sJ5LWmyBhJ9AfANW35Fwv6KqrBjkG1msLq6T9NZUgwKF85GyXRgxf7SMGa8tDNCGV3YRzVMzjDv56nrb6Axz9e7",
  "key2": "4kV5Xk6NGxhfhG18auKvb3r4bXjQ6KvFZ9vV4atavhtEQ52BT8cvDbWCWw6PvvNWM7vxxJjdJ3nmY2hWxGXxA629",
  "key3": "2wtQNTJNvGtEDTSEzWGJgeaqwmHyWiHAdzxe1HkVRc6QuJY4SBpRnk9y4fV6hWB4f3n3ddEgrC4nuV1YpHunDBio",
  "key4": "U4TgNv3KKcQ3yu8h3BinCicp8FJpin1RUDEJ31iFKTn3HXFMj9nPV9xc6pT8Wr2xPaQxroK4forR917ct5ztB96",
  "key5": "3ZbW9p8aLodYffQurVVu5RhkRftK7Bv3yKB7t4gLoty2mPNrY4SPde2gotJ99f2UVGQ6b3Hj3LcA8qRpKXUT6Bbz",
  "key6": "2tWaXFYdKymeYsziEYZH3NuVVXTwbKkJb3w6kyoTW24FNocgeUC32ifKKrnYJpSXq59YWeWPzWSXMxmGNRsJYvKy",
  "key7": "7FW1WENeb96RwahvJCV5aTnPC65d9Fm3tr9iLamsdowoxrf8HjWhzQRWHWVkXE7c4rc2naYutxJjKFN8HbRkdFn",
  "key8": "62sqfVsh2yoh8Eow5qg9wg8VsWH9RDS7fanRmiQhcmFafCxRupQWmiM1HtZYNEmLyXPqbp9mHCmLz3PBgvb6C225",
  "key9": "4f4FCtAGGxL31LLxwUZi8x7nyMpjk6bmY93vTGXPZkhj2SGuYGJmnmL55HoQ4uGBP8dgsfExgrCoKLoF8y7Du71D",
  "key10": "U59CnDVzak2tT5KDxQmsnfr1863Xw2BVoD3bnhMv67w8GmGXHLfY32brVSEntn837oBma6CfZA1k6insKDi6NtD",
  "key11": "5MCVRkKcdTcD2mSc2nqcGWmvDJp9STyY1vGUH39K6tet3LtXdnaePbwzBfPsAFAFytebiHnWV4GrnHA2UDsR9R5Q",
  "key12": "2kSecb6gMvXGT92VZ2Fk4n61TYEfWARd76q4aBgCwLYP3SWLaTpWJZnYCnbhfdSH6xKzvezoHnHFk2DsdQyQvwKQ",
  "key13": "3YAZFvhtX49s6bBBmCrCXfDmoHzzMZ2GfFxGe3DxjJhtbf9TZHSWSiHnbtwNzAofFcWqMFQP1ihyX93Y6GZ3Y3Jg",
  "key14": "pLkgkKRsaWxHx9aun6sejLGHKi8TG56jqcsLuvrGEX5GRBDtDEmASxFmoFbKQxcKeDeQgd13z9ECDgkhHAcjemA",
  "key15": "2Y9p4WEcPXAcHaSGrUZxbt5kReUukEsj3mXd5jBkgBameKUnUSPcqjvEAaZmqmWufvPPXEVgRnfmy5S9U6mtsgEV",
  "key16": "4exqLBjHaoKBCrPrWcYrMmboSHC3CckQQgQWmJHLhJBH5DcTXotkU5UMR4o4pUgRLgRapbhQeCTkCNjiE1Q8LZXM",
  "key17": "oqJmEgzZNu6vXUJtLWxM6zc74YDwuXBkE5shPy33eTMroTx9SYJbXvrfuyFgZa2G2wsPhfzxQdrdhDYrx6kQciP",
  "key18": "2Nr8yj35DEPBmJpFC4SRCxPBett2vGusDBzJNvw8vFZuHEZ8VFbnY4Gbr2DURyCLcbTMQnkkkKs5aDaQMQ3WPgmN",
  "key19": "5N9nrcTozR37FQqBpEVRKFbHiKCbPWuvQcs3mBi1LL4L1KdB1hzDeg5suyC23aouZCn4tgVLsgRmENbqipGhLPaw",
  "key20": "3kvjzsSjJFeZE4hkHesC1JfgDJNCyyVdR9A6HX3pNhAoVXsRQZdnA1uzDaGAwFj9hYHpMRzTB7tqBEz7tPCfTRdh",
  "key21": "ZzHpr3raFEKEBXrVhvPtNhsA1KSwWr3bdBNAkGyDSrLmccyoTqrDmtDLR51dT5wud5UNcecSBYRsTkgDF9CnGVS",
  "key22": "3FTN6L6GuEScZ3PYBzY2WEmXiNvFPcodrU5xQ4doiJcvkDCLqa1j1pQQjmAYFvuwszywijRCeB82F5QfUPZz3RDs",
  "key23": "4NeWRkkmbwz44Qe5H3moviuQztk4kwMFYVYHjTbPRupEcjUtwseWmQMVBJmCFx5Ws3zXb7bsjaftH3f6cYqGKmr2",
  "key24": "2ka8n6JgcfJ2g5vHNVNhhyWdNNjSeV36uiUFscwAXeB29DZ63WZ8rRwUD6U1yUUC4czu44YLoQNDMfMV5Wrc9zc9",
  "key25": "4inzb3oBdfMQdffi6XjgApfKA9oqPyNs4u22Jm8SyGWbmigQp6VMJC2wvFmDuboebEBAcWYW5oi3bDAapoEdY5Cx",
  "key26": "62TDpdruZmhoA1Rt11wXKSApv1BsyXwarxENxVDewGJeHTiF4ejhiPioQZAjQn83r6m95sTHRvKzgLBVqxcKu1fV",
  "key27": "kUdFgzn2ECXs8LdpwfF87kGEZjUoBn8HPeiuqnYrQX6YVmZ9aQqb9MBUfMRmkWBFDcrnVmBPiydTDdjQaAHCt9W",
  "key28": "4fX5oYEbHoXV1taxNN58N4hEwRVahn3tH9qzrreRKZiS3uGzAB3nvpUFGZ8w8oWFUQyjk7YUWLtSiqUQ7DcMtfpR",
  "key29": "5JZs9jwTwpr926Qtd3Lhjbdhd5Xfi2pmaQfRhh5zzEmyRFrdskxySyHyq1ThxtHCEnJMz2bLEnBJ2ahETWZs96hi",
  "key30": "2xArownt3RppqcVi9kRz32NVTY13CfwsmM1parfkFuYLsQiRJZtBMqLuUP8d5rDfdLn6WrdcNSB3Pyp1f2zBYQVg",
  "key31": "3tKpDfnucNF695yYz2gAW5hSHHCcTccQ47AKWh3poTDdLsp2YFx1G7iChJbs8rycwWhneEpBVhATXZzfEb67sbrN",
  "key32": "56s6EgecYvWNfR7jUiZvQSWjmxC6tFsiKGwMNVjk4aT8TiMBvw325ZNwgxDQ14fGpiD27Nx2nojYufV3sNdbq7DZ",
  "key33": "2HsttNsMANaxGi6x9JUQx4YZJdtbdCVHhBaxc3GweP2YQuh2WNTS5yVVaznEqSThdavuSZ1DFX9rpXAQcTPEAYtv",
  "key34": "5Z2pZHaz8Y1MPYrGbr2iWW5T4K74F5dkKSRKzy57KkxdnsushyLXPxA63LawW2heeYA86Egfo6qHGWNjdrjNV1nb",
  "key35": "2UjPcEQKooweDheNCH7SjWGVuSuPmF93X3tUg2j98hHxZHRsgCTtwuZjqQAf2nRux6NFSMfjCxmsmFm28EWHaUQj",
  "key36": "459EMfKn2imnt3VDTRRjgKjVXCoiQwHJh7xcYSD2b5dvGwPEaRM7uZsJ7mwZimT17w8aKiiqXKfPxfa9TmrGm5Pr",
  "key37": "3usoGt6LA6tSzBGnbUkH2cHYdDYAcAJp1pwCEHw2DPYHt4mk7pKJ3gG1jVXspqf1Cm3P66m2TCDHAtu7RevvcCNH"
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
