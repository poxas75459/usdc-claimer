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
    "4JvCwjWHa7U1psMq2f8YiDFKA4GZn5inxxeLV3MXytdbNLDjbvvgA9EA6eigqE8ca1Un9EqE2L5GSZtxQtjAB8Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ycj2EMNeTmwER6k5wKCUG4pWnwYcpoTxMWeg3f7PeB6UL3c47wuc9EYbjboj9znhB1twXrfkPqX2Bfxfuqdybr1",
  "key1": "4F8edVyHyraGQGMT7TsWN5dSiKfcBu5apWkiXdW2iPAU9M4GepFNFLkAwrGm1XLw3aTUdcG6CkpawZa265pQbnBx",
  "key2": "5QgBVJ2feTaC5jsJCZoBAe6GXMWmbgyQxkz6mkXnfT5u7uTrQhCzGEhUvaAA8FQ1cnaASsnWsCDnHM31oi7dTDd3",
  "key3": "2iimhXVVer45S3qYAXx376T18mYs6LUQiCFKwQytH1p5nsv7q7s8gHNgsadh9dNsA8GucFdewz6udh7aHug1dXCW",
  "key4": "5Sezu4TjuNajYbiQEU8LWUb7sHTxrPtBVYwFiHHxcUSS8pBf1o4UamVqsMXCEuKsQrziymTTssqAto49RKy9rRvd",
  "key5": "5vzSCuDu1pXicuaBD9VTDLHVC8BEV2mVdm3btA3G7FP4EhFfFa61kBEWihXUi1S2DjG7CHEeJkXhKRiyxW6CfmkW",
  "key6": "L51njUqXyg38RRm4YEQDtMgo4f6Kg5ccpVA2WREJTL37PnGkxYtY3gJadB8MABJ46NgPZs3XRwvRTW1y2c9vHh4",
  "key7": "2eXfMnqkni7MvRwPubwyRVQct1bktWLjD9W6hHn7Zzfaaq5JJ5Xqd4xZzoFZ7dTGaL7SiJ75DtecLejjZapTcqr5",
  "key8": "5t2tD7DLS7iLY1XdiinKb1rAuzKrDdP7jEZrXoCdwayfWk19RRHd2QbnpUfM9LGvc1oYqoErUmUfv49XgC9Cx2a5",
  "key9": "4is5hqsGuPR1np5vhzGbyaNfDuffY8Y4ipwobhaVehhcVHs1C93R3m9ToTVTeUub8hX5KBBku7bpEMVfjJ8SkN1",
  "key10": "5kYkoYgG4RmNe6heVyU5Q14BmwwNFvQMEsiocKhh5ivNrffmeCf2zcuvWJqKYYDCTGdqRAvER8eA5VMC5xXh5y8",
  "key11": "sk5cnfYZEtupS61NcFNxpWtjov4LEXmaUAMgL3RGURAt5vVLRS4TjRtQyddgPTKmmLWWU6xVQHVvCzEWZr3hRPM",
  "key12": "4FgLgvDqep5QWSu6dHnhTWbvKMyRfmiiBrDLoVBVLEfiDPCB7T3Nt6Eigm5uvvikfE4V8Jo8vAR9A4aKAYkYjxr3",
  "key13": "5UZsymEXi7vK3G5E82X9r6roVnzyByhV4vFyjYcx2NfNawkatjtk1jeq423fbpZH8Ry39xy3DA4rePkzxRNCngoF",
  "key14": "2DSdTgVj7ye3mjhvKfvaWbjv29CoLdJooPhs7pgPbLximryACVU69qpH5RDwBfYqmEjEnu4Fbe9ThNYTcMEmZEsh",
  "key15": "3hUoJkz1ssyFR7GRQsjdLG7KBC1hPpT6iSHKMKhCoWofeM6ESBaQUHNT6k1W8AkXW2XB98b2RU11qBKGLrqrNuzY",
  "key16": "8FnBz2aw66Toa2K8tDbt4LQSNgtzmV9chRc3ffmqDNxKW1A3eNzdzJMsdwNMNevWc9r2XdyashXnN4Hmcy3eeBe",
  "key17": "4zw7nfEYDEGot2G2iBAs23vnyxGFnbDGJJdThVpdpnEKsgkJ5uyHWMjGmsEzhEoXhUD92CT4rKu6GS8ndoYiiuSq",
  "key18": "2yeYQ6aw1HXythxVcxkVnaHwkp1j5P47LwoYWUi9Rwpt2iDijz29VcRR3iHrkfxedoL5qD2yrtrBFQCRKXpRFuJs",
  "key19": "3DcSTCgRyfG9VUteXf1NwTfpGRrX1f2WzxriSijfRueTgmBTjfbgudu7X818aF1jYDSo2V1Hhp3zaKBZ54XLWPvY",
  "key20": "xdGAFzSTVvhnebHBoSfkgWDAiuzSX5GiuoJ8y1hW9CBtu4sBwqPsZd7gRm5uX8U6BfABzLnV8N5onh51osefVYB",
  "key21": "5iHrdbPbw9qDGAR5u8VK545QzHViyUAUr9yD2DiHQH8hZYBmmKwx7ZLHHXhVHDfXRE47e7cS3WdgpsvBesk2PbEk",
  "key22": "4uhSKhm4Xd2BGGvJhuydtep68g8pPHiEFRPeByFBmiViqW17PLCekEqFDaK4va2KtCP2aHjhUvACRKkJFfMFCfcG",
  "key23": "bEPmWBcF3h4wg7LoV1Yvhsrv3ymgzHRv8kYuP5HyE41WoN6n3N6gtfrMZM7RSnpS8kQYro2iMiqgXqYeRkPVqwC",
  "key24": "4EzrNbxnwbLbC7Ze97T7Ch1deziKkRHYbTKgQSVdSQ3z8tmkMs6HQdhpyM9RVPzxmRtvsRijH1Z1ESUSEio3hAHT",
  "key25": "3ZgKnZniKayf28otxn59CFSp1PJLsxrc1QyRVX3CbMoaCb98FGPt21C6Ubk6a6t8tXsgMwwpwUqcjwbYbtZNFTDZ",
  "key26": "VfMBTuRor3MY4beMtsFRXaXNhdjVzdbnjS6tDQNSLH9Gx4JuMg4FU6waMXLx9yCHj4d2iLcDSbz9BiYYK5ntKif",
  "key27": "P8AGMRk3PNcPc4G39c56qmWEJtSKgrM3jgvP7xyQgmf8sTBP3P6XHCmTdG7NKVFZWfPv5KN6tmY5bbdEL4U6SDb",
  "key28": "2ZH4bfGSJ9H6yp6VHxN3omsyvFALhrFmZf2jMfRmxfadrXorGaZzni3uB5ME3uRtXdeH8GzDe4TYZff5wS48pFMD",
  "key29": "4DUXQPNCgu8Q8LDVUhRzSExY4KGtZ69byLkTgjttsoMTcRN1GeskRuxCh5j6fqujGqSSFXqW7dZTfUMLp5AWGBm3",
  "key30": "5VuU1ZjkAENouLMbD3onMHvWyN82Z6j2B2gbkpoRfqUteuhZHBKB7kJ4cLJzRp8Dfryde84kuDCbSXfWaizKAUV7",
  "key31": "5JPRtbww4hGCUhJafnFycHFvZHAiyYrjRfLfKv3x7C2J8VMsYYgLbdJeHTUDdHUYcNdWizDnD8ttSpxtdE5C3d7Y"
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
