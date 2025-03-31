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
    "3ULY3w9pv8ERxKBM7K7xuuZxvDCZs682DnXhQ41nJG1gr9tKKsPGxSSyYTC3NgnrDxntwxbEUTjM5jwgycakpwVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgnm1THe7jyytm6hmn7cFjz3pBe1Bmbt97oVccS96yLoM12YkgbUvzdppXxKWQrs5Pa54j2917DbWg5ipkSVWEP",
  "key1": "U5Tvhvfva8WymJwsY9k6MYnstEKGYDJBqJrFnMa7oseBn9u8LudGuUV1HTM6mZAtSTXRxXG4cEjXpRdxK2NKJvk",
  "key2": "4dQrVny7zQk7ehJpTid6aYyZ95XGNeWVMTrnjSr5HBD5xW8gHvqR1NH4S6YTFjh4JnNyHED6eJS7D57jNBBzjrUC",
  "key3": "3JL3kNC6LFFdVVT9MzUL2wwr9En4MJJ9spYuBu9T1oUvVjitTr5iptNHWJZCsrpUqXNsBJMJ6WFEA3DZ6BAiF1YB",
  "key4": "53LhGtir8guhfb2J9a2y9o2Dgx1u3q3U2yY5NjWniMrKt7Q2R2QXauk7dt7yHE9euJyUVviWNUii8dpF2u8EMhx1",
  "key5": "2vz5xgSUwJc5rYHyJr5MPT5mABfkXGQ4MMa1GuQy4itucAMMRVSGunEsAk2NtXpuCL2HKrcPyryfRfWcpapP51F6",
  "key6": "2ApVjawhrT5Cw1jWkpxjxjdkvipG85AjuGz9Nv47oqHDj1Pg7J7H4gSUyrsGnAyf3Ga3PHoDHsqusw6PEAmToC4J",
  "key7": "2ViLY7EqQtJWGiai8x37u8rQ5ZNE3PynjgdfnLfpyu2CZVz27ZTNrLrKTkmqoCPp33cafG7ydq7drtG5NuUnKFeP",
  "key8": "aiBwTKRb7gCgEBTPKfwPk4ykfuUnHRpUyabvyoncNs45nhtNymX8fqTsg22rwiehxnncQiGiTNzmSB7xM81h2Bx",
  "key9": "uVehdLq5xQKVjDMroerrNXeZQ8HBT5E1HxAfErHMQMpuKwFyRtrHJkSWMwBxTMKdM7iZiAsSCsGH9Q3dYnRrQzd",
  "key10": "3ev4DJ8ZdextHik79h4hmLYZvcSTgE9hfySxYPKRadzKB95wEWcTyueBWTD2d5Fz9iaXCCguh4hbT7bzzhJzxvYM",
  "key11": "667ohvVmKRKwot3CFpR1KnWsiJrUU1EVqd4EKyg4fSDYvmp3th6NxGXBfkmMULeXUkrr7SVLH4pxtLXPKcXq1hhy",
  "key12": "2eW7SPn9Zk7bP8BKPEuqvFLdK3SeN7mvkVkKFfqzQs98bef3sCDkfBEzHrhgaumnaLtY1kqQp5xuWJ88Lvmx5UBv",
  "key13": "d76HRz6Mui99LmxhZE2t7V1c29iEKaQjZZ95Hh53EeZitKhqJDxe7XUP2yWXEKF7EBHEtUiKneb4rvyuq4a74Jo",
  "key14": "37qah3EyLeNuhfeCLbdzBfJnXmEf2G4YKKnaeK16oCCHx4nHQPJRxkxX9oy34JV9qdCtpU42SQbGtexD6oghSUjh",
  "key15": "49qiTGdYs7cR6yo9uKMDuCGwFknkP5aFBoHbyVURvL2JMmApMvnWg4kUaQFbduQ34pVLAGby3ZZJHtHPXxsmXuyz",
  "key16": "2PQR182nAqjD4hx5DjB6SqGco3zaFB5sH2bt6RdLBe97hUxkpqcH9iv5q4xK6drWaHayMf8BtH8LP423mXogTSk2",
  "key17": "51yrDzsLN2JjcP5RpjtZJmQibmtVQkjCbpFSM1vAq9pZkSa9N2XfZdRHJ3zWwZpcg5cAZjxFcUx9NWjZ6QaYe1t8",
  "key18": "5WjfAn7bg53FLoFPfvMtdsuWh9usArMRBUuwQTvERfqBtUKoBZSkZabqcW6jQNByeDBXpjuTK81gp1RSn4Ly6Gt8",
  "key19": "wBWXoyMvwKvCeEhySkhTsTCzp9NrhH2dq8kGwd4DGmpPQxmhffEdT1wq7mtE22fVraCKxT6p8toFUNfofLYzSKW",
  "key20": "32cLGD5pnv4BxSdsQNfWHjALUEvgrXitDrfxZbagjMBq9ERmWqTGLuaEwSWmzXkuUMyhxEnUSWkZabkN7uep8oPs",
  "key21": "2PgYeG5rahg5JRWJCM2BGkgPcSjeQa4o9Tu8bB7aWvmY1Gt467gMrGFLA25XNifwDApWRnhSFrBVBjQnGVFPXq3b",
  "key22": "5Wyowbm1aF5u8WRyaU4UdcmnDStjKZwX9AKcT2dnBcfLvFW3kt4i4eu5N12Es6Dzu891wXi4V5Eft77ZPSs5cYb8",
  "key23": "2iFdPzQGSX3zdafx5J47JZgA1D4eN6weQJTo2QVv2nYAZFHAM6Yegeyu6xXqhRocpTBXGpphnywcaKXNAApgLwKH",
  "key24": "4sWXJaCYThgrjttVRgB3UmCZh4HFTzk5re6k6zqBTcfcivncMnvJUUUPLSYjESDLnfMEG4ttRhnR6HkiM9qvZVDR",
  "key25": "5j5eFaWFUr2xsbzuVzcVfb9v8ZzwsZ3eRhm1VEhtfwoNErT3P5sp5qtuigXacNYowK3Q8yQcSDWBKjpEbJM2QiUi",
  "key26": "qFCHq8eW3PY1eWPNfvzYtDtP9q7xrod4TTs3N73VUFwrv9TRE3BFGBNgqMTvMSVLYCenCRmbfuJWycuEEzz6R3L",
  "key27": "ZFeH2otXU8dMwwRuujQEstJdzC63ZMMAvquUG8hW3AmmvYsvKybsXwPTKVTQjP4er8DQAsgUVm17LCzWcGxUXAk",
  "key28": "4MaPiLaq8xFW9wxyP4DHN2ZLwuq4q9nW2ZzAW9igNaWksmxhLHxsiwPBxCuxpvctFt7MqEoYHbo5HDteAMtFv3zV",
  "key29": "23q12LU8TT3abdeKd2XugsaULYtYCGy3aW1hckGifTMWTwB5oWFxA9u2EtuWgTysEQDsx8sJxoicfxqEgLewWbso",
  "key30": "4UNYyhyHtzpc5to5pKbvZWZGMQPxYUvbR317s2yNETPtarojZGEdtP9AubRPp56cMa6gADBoaboawk2WRvgDoooH",
  "key31": "4b9oPbXigWCGkC8YqVspe93T43mZZhy1DwamnGtkz2GYq6aUvbhsLkH7b9z2iVDqzkqBp77jGT7HnfnekAAMeXBu",
  "key32": "31F4tGFqPACr15nn2PP3SpLgsYWjZaTfXrtgqy8Kpcw5mgsrgCmXeigffWTLv9RKH3UC23iNraPjwN6S3qnv2AmD",
  "key33": "2xLsWFmedjQ3dR6H9CDH1fYErzXwVERCt48UsXnUiFMUmDa3iQAYX79K86Pt3ECQutZ7rm1bQNMFi1RRQX9rLeC9"
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
