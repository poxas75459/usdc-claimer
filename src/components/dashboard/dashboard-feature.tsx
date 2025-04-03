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
    "gj4EqLJMboh5KP6aKSKmC8Xt8ysagyFeNX9agZZoD5tVdZSm7XQFuYXf8FjXwxgoJtQwMEjgoJT3USqXvsYsQxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEqHfWWQXu53MSQBtRN2yEdDDV876Gao6sktPFxkTtoWPMcoJKdEXT4yeMYMzLYaT3zgpnkhKaEq1QsLqYnVM6s",
  "key1": "2vgJzypnMFGR47aap2XMR3csb1ZgwMC1P8CP2jbGbpdq1mGM6hR3ysebUEaKTZPo5W3H23oVAvqm5aqspYGaqVnU",
  "key2": "3HZKXYkgNpR4Z3z1ay2ozhS1x5cAcXRn1KR9eBdNMoKovuaGSGs4Qtqh1FDEW3WbiKuuibL2pJ3XsqSR9EKyUzYP",
  "key3": "JFdg4wqrqEoLAS7M1Jff65pAQBWuWJV2BLq7hV7Sws4N6pYfS5gZnT6e2SJsP3kSrrv8KfR6Zr61qgKzvMwhNxt",
  "key4": "3e7Hr1YtvraH4fC1sRt1wshJZatxTCmAVzQ8zoPqEUi15SfbFYqquVFUzLicUEFqDBUmk8sZAdsCQ6xM7wVo4rAe",
  "key5": "534ASDqhq8unuc8mKj7AAM2WGEeJJizjvDmpmreyFLQVEqvh6yPgRqRGTszFhbnwbRDb3i6KsVmjsKf57F8qNLnq",
  "key6": "288mnVhyHTWCqF2YKhQMdBrkwbA8SmPZQ4nhbqfDiqcoiX1pZf125RiJneXFzs7g9fypJEtuxEDqE65NjkoyffHh",
  "key7": "5ynWGZhz5nWgG9awCwc6ihiza6ET9gXsj612zE7X3shuhDTweUDARUzRRdvTqDmD1exp2DpEiQuvPcsb39cSi9Xq",
  "key8": "hRURv3bBpgtqLUtvC34ZrNECRga88dsQQZm8Apfc5YWZDSo4XV7y5GQ6sRteYYzw1h58PL95dd8co8DSoA3mqrv",
  "key9": "5ACkWbpQcsnfqkitAWCjdr9GBjqqUc6fGUViGxZGbSyUDQoUiD9jbwUFXM6oNfzJaf5giBg7iZvMDSXLmvm4sy2r",
  "key10": "38WVqpPnhGHeAG6w8w6bKKcJn6xtj1mjCeJ5pBgcXp2xzza7cisM43qreVoaHRMawBhx9BkmNNGY74eTWRsi4adQ",
  "key11": "4X2w4NAFN66apxvq9GA2AcqgCWpti5JmLV2yAAD1MR37x3HeMMPiedbAHS8A6KRvfs2VmK49Nah1WHHS8pFsR7QP",
  "key12": "5JQSSJc51Dwj6fczZuaA2gxWsPWEKGqhxLgfxReQVm9rwUDT3Dq9ntjg8SdhtpuE33PrXLQSgyB97yWt4vXxSKTf",
  "key13": "21QwrYhYBTg97pRgcrLi1TY8sAX3kr32a69dZiPbuvfGcyMYtYAso2PmZuUDRscCWpDuUsxfcybxeUqfQRsm4KYj",
  "key14": "55CzeCpSnKvbDoUfHYHxX989tmYZomsRXosjGD6VSgwBxzbEyYM9ECCHLXvoGd3DSVX7hvNE7ZHnKmBP8zWQGPcD",
  "key15": "63fP5hEjJdofZcd2ZsvXbSQXWaPR6ctLJu5jNfceyrgYJeMpLiW4Xwnq5PohoBXktwdWAm3mPSpTsqVHo1rrRFMx",
  "key16": "G8xyXPZeNZ7AQRMYZx876Ng6j9VBuHxN7gPHFK9XArXG2yv8hzqTVyQchMhJJyAdAFaZKNrxTuXUkFtLuUSBr7S",
  "key17": "xLxUgKB8VGem97vWH124uK3A7JBQ4EW8eBrhbbNLGmTzRBZtuXzh54vG3QfbXfyamPDG8fqTxs1S8R4zke8dSyd",
  "key18": "2k38DtbASGL74EbRPVdemQ1vYjhYpUVbSF14cF9m8PXTfqDuoSLqds38JQc2Pq9Gz5QRJFF2aSuu9buYgyJzjg1S",
  "key19": "3k7yaFTxVRgBsV6mvFuDo31UhC38Ap25b9YtBLyR9PoGzQktCAHhUzhUm7sSmWiR2Dj1M1VV46iuNS1MGEVr9WvW",
  "key20": "5PNTqVZHbao8stmjEvmt2pP3ExQVxKjypaaXb9eTk9yka6mXFeSVjtw5ayDBgbDCgmBoXN8GA76CzNboq1kAG5Xm",
  "key21": "3R2GN561uivhmwqkBtrnUFocZeQvJJiwRpYjtduWPrFix5jk2QUjo32ddRie9iXmUrd4aAriVVmP1jPPWr35sVbt",
  "key22": "2FiswUdLZDK2WzfDLGMNqhPsaUvgKzWxZmrEFuteYpY1QgcjYwvGVPq3mAbhokX1eQZcEHkMhHeQVPUkhYUhFa2K",
  "key23": "3tVZVzxPcdZhi3rXQKGyvYjt2jeJCLrbAMSAxJFJFdBtwdXrkXS2Aus4gaoXgvrCN4Fhv3b1F31pPSaa1pgRtQtz",
  "key24": "Zc1xMQccbVQtRk8cn44xikmaAtZUBi7wH4sBmLAqncSEv7LFV8ieHw1xzhoqeghq3A2FdVNQfma6qim3vnAop69",
  "key25": "5wZ3JU5BZ8MhTTocJZm7gvBfh7ZP9Wc6kh6nmVbPnE2VQVMb19PLnnWUDD9eW2TK3rp63yuXi4MNgQJC1cWaGvzv",
  "key26": "4iQHWb2REUxhn2XNzEB2s9QkeovQFHtLtVdCpPVwLcH1Li8Htk4T5Dk7kJLu5XVVuo8Sv6XspdPkjDFucAi7KJvq",
  "key27": "8kLQrNcAMxAEtChkJh22X9PsyGtw25BGGULWeuznyLMCyugitjdXPskw1qDFQDv7HrQGQiCzk88XRXR8z5TbYt8"
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
