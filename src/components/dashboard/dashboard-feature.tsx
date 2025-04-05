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
    "2ugLXq1xvvyZzVDAkUiN5HDse2paEXQxdhcmN2UoTSoiEB2qy41FrX1d3ZmeZDKsHMjahhkNm3Uds7aiVx2zC93S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igLUyEfMLvvSTTz1KD9LoEEmPHCzDZHKfDKW6P6FtWZ8tAKx5E74ny3NCFrViNSW26tB9rwCut5BdUGanUJFMYB",
  "key1": "4SAM5Ysp6ciDHgUZBB2bFKCT2ZqDGQKXVFKTC6cPn2nujcFUHo4jaCGHjfCddwJtaaLL4VcLayyPqb81Qge6JEQZ",
  "key2": "65Ssc6cgcBt7nHTiYAqKqaLMjpDgTKgGeKEk2LWNiRceBhfHD6MADqUiPdq4gK1QTVQqemPFaTef9dLUNAGC9LWN",
  "key3": "dXk5nZQQXAbkhEPjX1DWsic4mN1tzxm8dbGAAhnA77fMHH3iLc7GQCCcrQpT9ywpepwHcH8pWgxXqkveQLjcqDk",
  "key4": "Ki9SPqZsHHczafn3ngezEx49YABMieAKkYXV21Rv6ADa8VxBjygbQsXr7famuNtmbPtUwJcESB1cqso4rwSaepM",
  "key5": "5aC8xAtMgGYRfDsBLkRq7gCy8xaLcnfssgSC5XyRQcjf4UAjEZwewDTq9YSvTvbhtL6bRkfKo7ZSUSUSNMgWrdQD",
  "key6": "4F5mDJUmFnWKmzwWVrnevd6LHsSVKJE9Ypwsbo69cD3dTziAk4VFcGyKuW6EFVd9G5DiLnoqqF68FgKQS6BTkgSM",
  "key7": "3mKTk5gencZQ384nM8Jj8moUqcjUNgYkRz2eowBJhWNA8e5t3SrsvAEv5y89kP7RNULJB8x8Ww8FPSND5KuvGVVd",
  "key8": "V4jF7bMMBpLN7LYsBCQcKoQfAoj8iWXrq1hs8ff2LHkk28XTy8x38aVH9irGvD4P9jUVCM43JGpgUcpDD3iTVdo",
  "key9": "3gLYzrdueRYbheqANJNVZeBTcAxzQkoBNyX8Xk22EcVG4xRKy4ScvNh9XcyVAexSdjcWzt3mvmrZ9r4AkA8UpYxK",
  "key10": "5vXc7PjmmxqiFeJBx959bHYiGwpkYNNirGoqo6ADhUSnjq2MYofwY1PPTmHx9bcdxhqqgZV2k831umuA3i4v1UJb",
  "key11": "3zZbSwLV3NK9RMVbapay5oKJQEM1ohNBNu1k1YbyNQVR2HS4hHam2TiMAmV1LqzvTg8tNMAyaQSfwjCTbU657Ni3",
  "key12": "632UJst3gxDRnPkAnCAE4wUsoSQUs45PYD3u2bYNtffYMkFATMH5PKQBaDb4trxo8LjRDuhmLoe5j5EtLdzxygjy",
  "key13": "3huNYWJjiuUDyRyEJGRR27cB4XF5QvuLqqqTAjWrvZpZxrryTxXWhC21wi6RuLMGwfe75JsQH5mKdL4k1QT91HQB",
  "key14": "2171TVLgAThQsFoR3pp1Usj86GfqAHYr6noQ4CvCTxvkAHw5jaXMnDFRrMmbR5hTdfsHbBK7cqDw6VQzrRj7dCt4",
  "key15": "3mcXZNinTFKZAz2QNJ5RVm4nDKoch4hEnEsoSCJkamnZVaNWaySBfTDAAwiVPmYUTdHvCvsNyZgn1Vnevpo4DUxa",
  "key16": "2LEWB7mLcoaf39WSa5qYXKwaEJhAdXPsNv2Y2ZRnoDKTuXjUGSQaMf96Foc5U27nPQcFRQ7ni5f6QaPGavXbToLN",
  "key17": "4jzY3RoJDd5qTxzEyRSRBvTh7ZWfqtnWMLB63y1qc2uC9eXLwbHubR2JVSaSicRnPGMRUtCpzhbbBEhmdhBpMsn2",
  "key18": "3yJ5AFMWZVhGfeXHKvZUVaimLjSjQjr3u8V6NaekAbbGp1xFmunsYpbpWZFM3iYyXcLmDfopNZaJvvjtyrJohxv4",
  "key19": "3GsWzc8DfqASEztPToBU6RYrsjaWaeeam4jc3T3dQ7grTd9Lasroupfy5GTe7qeMN5VcGGYt3yNxVJZwkwxr1gtM",
  "key20": "CamKrybxnZjho18iF4J1FQjLL4YozGk98nStBCLqV1wS5H6Cw1o552PtqxvKXnv5t9iZAspSH8vxa2N5FDdTghR",
  "key21": "27SyviW63SxY19w7yRtsv3tGfWJY3mWRiAkU9J6R1PgozimNW7Z4hugjNvg2vVxtgEwbX1BjCRiE6MAv5Bi6cWEr",
  "key22": "3NFJ5geC376Hv5CEVU6AhbwUJrugwekdKWcPvWMy9tc2j1oZdzR6i9s6bcym7xGiXfcEHmA8yTuyYLBi2x7SqC8s",
  "key23": "4hJzRvNsMU3WKDjrGUdHzi4Ank37kTkHauGNryFRLH6msV6UnS3N3G4JCpABRduqskM5FrrjzoHpH22252LzHR2U",
  "key24": "3vzYSuFzGecoArkRD9HdwRN26Vvx9hy2LMLL6Ko6krqCzFofJzTVSTg9B3yrrzRqjbRB6y5bj4WEuSmacyWzq2ai",
  "key25": "2gc3EXWcVTEVbAQMsmBobiCRtAw7RzAATHdCZaEC7VkouvtKBG8Y34rUGRspBv79Jn7karmjvYdKKxcvQseEnJQ5",
  "key26": "45fwbN5qGeZLtQb8qFfbpNctupYQuyM8JhZnKskX9AxiiASzjMKXkuwaxZPm5r4vc4LMECoLBVA2UMgCxZETU4Kj",
  "key27": "2S6UK1mBc8m4gzwbRYWmA4JLFVEE3EoPZPFGPNWHxDAaf3WcGxCxr4PHSFLvVwWbwxSUnrkWpW8t6MzpHZHeayM4",
  "key28": "4fvvYsQrEo66YjScVkaMUXsHj187bDNR1F8PsKBQj7eKFWMY2stULAieMS8dLHKJmfJ4o4Miijkom8nwiAdcfPWs",
  "key29": "eMW41J4LT6CcpsWbGJeFHAs7K3usVC848f9FGP7mEbpbGfFtehEQHRwFvunK95WN5FkqDCGHQJ9ryxfeJK31cyu"
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
