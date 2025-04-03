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
    "4mHdDb1rUFzCZohTVAztac1cW8ceoB3j4sxnYwji4NytswyRBgLRumRi4dEsaWimtgVZAyd3D3bVopoaUgcjejri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZM7pVnvvS7A9ArdgMCuBPzUvji6d1XFTArGQcdqMf7zceRXEUe2VsyZfPH3fdT1z9QaEWzFqPHJSv2p7QabjhMu",
  "key1": "3Zw6gMrND7bpkCRTpqNfnubb6imA7dwDceqpVLkEnidmXGe9C9iYoSgqRL5qjLoXX4bhGe7nydbZZ9BsWngRkuFG",
  "key2": "2FAMLGR1GtfRygcqngo6J9sFCaV153wuPaQRUd9PvWC35pAaP8Aka9ArNQ84xN3yPVLum2R2Tj1wyfTedsiTuWV3",
  "key3": "5zkaj3JV1Bc9ZUwTS3hpRJDqKYa9WdnV5JEgwPXEW3uejrnRBsD7ptP1NQePJUqEMcTCHDwiti3uBegQArNDtQnj",
  "key4": "2HWjFWr6v5isbgwfLWvczYQBugoVRErRw2Tt2oAqytBNqi7s6FwVn523mKdyiQQiAbnxNgdVZ35J361yrVQzBL2Z",
  "key5": "4YJs2XcCaPevD5L6zfZXoFWPMsZW2K8aWHaVd3DZzPsJxPHKcenK81M7ur4LuMheH9ZQmuqCvJD83yxYnqwswcxp",
  "key6": "ukye8gFZgVM8UpPpwxgi61Ff6YQi3StUqXnYoCM1oYD8nsQW8WLKeJsN6BXVTgii4pyA7PeLsGphmvdQKK3T9Vg",
  "key7": "V2qvojmKLuyegGuwQw498cCYe6rsk3SbLeaBJ6HV8eXbyn3VqMxKJKQxeEd5gRaynVqKXqRAC24Z8npTQoZiSLQ",
  "key8": "5w5aZn8dH9aPkQj32MtjQhKGz3hX9NRYguBheVQHvHLsh8Ltypa6pmeeBfUrddMDC1dSDyuV7QT1vw5BmxkVVm2S",
  "key9": "4wTN7cP5JFirJqHNbwtZoT8mFHcX1L9qnjB8KPYg3vS38Sgaexp3TG2BEiqMga92cw8t5Sd3kiZJfyU478mvm8i4",
  "key10": "438K3JzFDCQqWD8wGfnTxzSx484pQH1suNULMjmVbU4zB6r91JXTayP1r133S1PNZ33aKPqveKSVRy6sET91nuvG",
  "key11": "3qmeTCYzXdHbBykrbRPPrVyNh8Gd7p8GmQ1SERo5CWu5rjQcvii4b77bwHbru2Nh7XeBD3C1madug9TxM5XuRpSo",
  "key12": "4XkPLYCeNqqskEGAjtGsjbuqYYX9JGD8q7EaGBEDiqdsyEr71vLP5t7vTMHtLjrx8UjUQtxVZrqNrNXp1Ht4t9TF",
  "key13": "2ndK65Mgnu1oyWtTxuRDuKohYsSUG7dJfxNES3hRdWr7oq42MAJAYG7ruszTNp7hvSVV4gi1WpYJ6Ei8zxVGBHX1",
  "key14": "42vdcFPvvEXHMRko7s1zmboYLwDutfXHAEKUyJyLnCwpbEngytASJFtsgVaNzgow8FhkNczk3uQovXnWeKAhtnAE",
  "key15": "4X1XQm33tsbrnzsEBhRbbBb5YwNyky8MFoZ4LFYmB55XdStHnhFJj4MykbYEZ1vhWQYAAJwcg4gGtVmXjdcfVSdf",
  "key16": "5fdi9vk9Lq85PRRcy2XKWXc42DEWCssVbwN3Bw6E4jSd9McrrKcMBoephVz7rUU8ZAhZ1FxgpjfHZx4avSaK8oAS",
  "key17": "5QNkevnHVxoWten4GKzbK67XNdszZnUtXFU74qrESKYTqytB16fofVRVpaeb4Dt7A4kAXyvJ7UQ4fMGVXAiJisAH",
  "key18": "39jf6WwtsYPHc5SvNm7ZDTgZtaBg17ew3vQm4BzcghSqnnibhL3s7nvDKsgxkbmfdvR3BWbTt6kpRatuEVqZvvvr",
  "key19": "5inW3YXh5nZerLaVjTYwHe4dRvFt8dreHKVu1zjgykGNDrZ4Lu6kDfdPZEmjkF7kf6CfDoHHsYfpuk1xrf2Tdszs",
  "key20": "28QkCbT8cxkf3xihLJ62jvzB3ud6KBgcn6gZCsWQU7ySkxKTxJ4hsr22ptAGHQZQ1ecTBdfjjSCxQ9kDxZDkgQdL",
  "key21": "AM35Z7G3Ckg8jR2y6p6f59j4PEjzL9sCa67aPkPfQ4VpGbbgTQ5cYV9eXxDCLoAkSmNjLzwtbja34a376RtWcnG",
  "key22": "3fi2VPWm221n9hEHHxnoGVUq1AacfSaVGVFwibW1GpzkJ7qHDNDdST7KaVKB131b4moBX1yzobS2onnsZseq9abU",
  "key23": "5nLYqDCNuWzzaEsBfhxpoFQsGWVpSi9ZUBRhbZdzsxRjFgvHepkHAp8E1oFfmjggwSYpCKAdqnn27PuQbjN8Bmiw",
  "key24": "4AgjV2b3jAgzEFSAAH3jXUKW8svjXsLDxDoamYFbv1j5eTcSxNiFCKBzDLG64br1Tj9PmsFaJf888vPFUhQAQCnU",
  "key25": "3DgF9S1y1nqvsBf3e32YakCeoQTrxxiCofpX4trJKG8KW96TRvwZRH99Lwp7rhRPGfxhTQC1J1S96DwZWf3WzFCD",
  "key26": "2o5hKcGNAEqKnHjTKY9uDZsqsm5d3uuxgZkBmLaFdXBhQihnTJZPp2hTQ8fcR7tY3bqhnC7Eae7XzLoVrtDnxPrg",
  "key27": "3TwrpjErGuZF1c4WfHYdN3TvfodRPPuji3pM1sm3V236XvA5zMnL9vfKRu9bdm3N3FJT1KkmB85oGXkm2GJVTfci",
  "key28": "4avi8mTCzpwzEoS92WBvbrJ7poQ9Xwtr6E4aJzSK69a4v1vB2uRTxnJkKdt8fK5hoSHF1zYAwsGts7QFCh2iSQJ8",
  "key29": "4WAVGpdRy55cpjVTevdd6fCC77wVfFodAgS2sKSjGj7LWFZiSpi1DmUihYKeHxzF6naGw4BJipQYoESYqLSj192Z",
  "key30": "2w81yYtEoeSVjowL5VbjFSt1r99TTQjYYcF7qiu87YGkV18zA2JCPvbLBwNpby26amAA6HNVPi8veSqrjde2WLeP",
  "key31": "uY5zGEUTr3KmsD6tHpxeVMigQUgVQ5yBy8HhL4axuvh1nwcRjShFmzuZyLvjVLwfajxxjr3h7qdJFTwJvMpf5SG"
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
