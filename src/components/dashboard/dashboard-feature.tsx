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
    "2nPiEjJh8Trqy2ABb7SwVDzHXiYkRG4vzkQpa16xrnu2CHm1YbCVR9nhpehUwL5HDPb7j7qneSnrVnsVvEjaUxW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22iXJZcbA5nouzPgMG2S5i1zpTjyc86YN7nvW8XCA79DFYNUKRJu26Lx8Tw9rzNgeVJJdwHTxjF3oDvFNZbdgmZn",
  "key1": "67kamQW9eNmbxvYiXqaw724k1eNWguT31ie5VfTSZm6bRykWdiXTAcP8mRzM9WvrYHSb68RY6G6EET7hY6nKv6qF",
  "key2": "5CKmitd38QmUw2xCb8r36mDngtxqWGHSEhWPCfiaXjokm2q4Y8BfAKXdpXWNHzfu8bGegQFhn9SVusccUAvPRian",
  "key3": "4aAtVzdiYCNoi9D5WBaYnrG192wLcDcbR7BjcuY1fZpQjWW4jTVQuzXDqK7eX84tuxYY8F7tGYPYXqGt6qXAovck",
  "key4": "4xVrHa4fBuzdwgnhi9rdkcs8vpHtM8Y2PD9mWMBxtp1FMCv3358w8qquAJPXiAWi7oU8ZmDcfAUdG5DfuGC7ycdJ",
  "key5": "5pJDwccqnYZqxr9LqaacRq2K21CnPSbKszTddiNQpVZcxkaR7cAUpDGtQdxCdtY2rqL2UTMg13jwec79CSTigZi7",
  "key6": "dSExA1QfzKi2ckRmwQtGwd4gwCAEQGfUYVTMRjgMoVSQLsggMsWaG28NTNwJCQ5Ti8XJdjom2Bh1taM2jvJyrKW",
  "key7": "3nXJj6r5hhgvPoPxRuP6JAmUjbPqKN3fMWPGzbLck6E72cBWyKC7VWUHisCoau2bC8zk2oPagKNGhvZ5Rmogx1F",
  "key8": "43eyssKSAUKoUqsWcHHoM4dFRT2zU7TBMcoScR3apy7EGJP7K8JoqEwsnDiYqNTrnETC7tVMMxtZFAjMGY2pYbQJ",
  "key9": "4ixgDB3KiLj6GTUqxt2XAEjPwbC9HZ6cUFae3emyeUvh8Cc41ofViLcLyRhGhduokPNhwGyRK74nkbkFUV7FVXaG",
  "key10": "hjG9zDpRKkoC14nDLBdrTXDxErCALcNop3SnGACEn5gxjTWiSdieg2JV62obTxKhmMWyc6uhf94ReecCK5KMaTk",
  "key11": "23BFLn8fvmSHDvgas84QCa7iDfzUhMuPUuLTD3hFdU7KcbkMPqzcD9UuSWinXSLXh7VC2DHmjmiByrF7QuL9armx",
  "key12": "YREbhJ9614qzGF7qyKSRyCK4BMGHE2S3XXYHs1iJUtJ3oRfL5btsT1DDqVHFomYVmmGjAV8gFYNzkCMya1vRVtx",
  "key13": "4h8S2j1RaQCepXayCYUaRsVdDWxaXPjuHN8t9NRRQEtWGnk7ACodoNQxaah3T1bH4SPZGd5t5sKwUbvLyGPt1X93",
  "key14": "hoX3CfFdsB7bioSa8KgQGtY2sf3nN6evRaqbAvdTytgUHu3fToTuabdhZvxPo2L332iPdHiNboqBTLKdvt134M1",
  "key15": "Dq6CqrmZLFEeWWFee9FyoyXdfp2MUX9am6w8uDqaA27C5X5TnvhUxarrUqzsixjM5TuKiPtPL3nnrrPMYLs1VrF",
  "key16": "5BDP4bqcbESPFj8GyiivfHit886x5xTE9N3o8rhKAu4RH5RV4YyqTCoXhfRptDWhxUgxP6JG3qQ3Rv3xzcXbCDXQ",
  "key17": "51Agi8943jL7b5v7EtcVQwhTaeQ5SNfMoGDspjvV567iw83wKsRgSz3WJZpg2Hb9HK43UVAodHQWwEqvvLxpDNm9",
  "key18": "23pbCZCHEihZeR4SpiLCMA7oo9QBtErJsQ6KVLDgiJLefdRQX9GpSb4XXmdRB49n5r7BMajG916cWaCVmp5dJY1R",
  "key19": "5moYswqhNkDSrqSiXhP3t7SzAijMpgq8xh73s3jJVTKV2E4mcfys5XVwUfD3NukppPT7BKXjkaR9vM7r64SuyAYJ",
  "key20": "2qygfa1V9USQM6C1UkBWVK7VdVbs8mTAcganaXsQzeetfCGFos41Vr1oCWeKErBN7HpUwgtop17QCdJuEzKhf8yU",
  "key21": "3gS18kTdYLsiTx1azM3WQEkvm2UkAPNLbq9Rn9BmECgVNWDBsqueoSMPjS1vF3poMC2FzT3hCHZoRXTRAktVYH9i",
  "key22": "8n79SJ5Lx89VqxKT7x6qMv8CWfcY1fBfnHbmzjb9uGS6vqb78nQfAGi1eBWSdwzKGRU9ZNeMKYWLdq6n2HKGEz9",
  "key23": "31LX5aPMMUc94ZGGX9enfXeue2uZeQr1amwcsYeWpiDpkcvWctj5dgmEDDXpyVFrdbe9ovLLirBsnAiWJJhmKsSL",
  "key24": "3jdCCHAN6MtyaQ8USxfhXk4T1hKhgrx38hvxahuQjbU7NgQTRbG93yt4hAcom3kMiQ19ccSwRQyGdCB9gKrxUZUi",
  "key25": "4dcnu2gVHiYE8bBe3ckxxbr2ZgmC2kNXTUWAU1h6cTaV7gZapZEsUTiRmsQeqKuTsFKao5AA6T6AKcFeUUCF2Z88",
  "key26": "DJXc3sYan41LugfNoHb9oFcLP7Excwtfv7fv2LXovcqrgPyAQym1FcNBDhSyXzWVr3oFmLdCJ6dZwukqtuQ1zew",
  "key27": "4WpZw5kgqUyTvnPtnvAUcTD9LcNjD6vCU1zCQtWy2zeAJ4AwiMi1hzXSvasB9iNviTVcy8JYCVKvUrb7sumMy3fP",
  "key28": "5qXvuqQRbAcDpVyXZz84F9AMPgLEthBWfvP6cSWkPEDroYJXBsPyHT4SGFN9RivXXv44fh3iouNppDEMHZxghCyx",
  "key29": "XZd3q3AF4rjLtSMEuj4Jo5cakT91KUn4uHCa9GKR8WKQR9zpx7d1nj2Xi9t2nTnvBaxYcwq8j5WBM4PMAgsG37F",
  "key30": "5LY9VKNbCdZZu82PxvcV72PrB1YR6qxFqMwcWN5GKo2FhbkP5vtshk1643XZmt1udjnsvS564oXwynxRrXAsrr4n",
  "key31": "5AJfSSMbmWqZZVRDDhENjxSuhR65hZTWt7zFfkNuMQG8T8MaQPEm6zKiZE5K4JTuwcn3cyzrwiWkwn5SFB5u14sj",
  "key32": "2pbrbYTaGMikgeWW3AgHdMVwpurLwfa6P2QGm6hHN52RqenA9mcM4Uonv91cg51B3DcSEMk3qKTzjChLP4YUALti"
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
