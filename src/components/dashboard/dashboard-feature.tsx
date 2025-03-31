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
    "4Rppma6x4eg7MA6Uz4jGwJPwTSUy6oq4T3FEBprSFm8vkJWSi9fKVZ83pSwVn6ycNNuymHp7qiAqntLTLmMueiHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5efdkXbzgX9EsVPsQqDYi4VpEGuemSSv2S1kJK7Hh6cXc63Rsgc4gUXkBxwyiiwcCLBD3o9inpHVoTxxM3ZQFViV",
  "key1": "5jfLotP9BVoFfEQn2QTv3iyiAgASwaTk6b1EhBBT7nkimw34kGY4UxqJkeTy1rvB4Q3UMjjUPvJ1b5tUKY5Q82Aa",
  "key2": "5UyRXabxtKQp1s9DaXzEjkTUZf6H8yb8DF8ZAJJjyrQgdiYNYE8q554oYA59rMFsTTHyewywJw2aDuArqnv9dX3q",
  "key3": "3sLcWoLbhGNnUiRvfkcWX76KWkbu59WdkbiZNn7YBLpEXG5SF7AP4HWAnPawAV617U14LCtNaYVejF8Em225vEdo",
  "key4": "4VQKtxYe26utedZgiDmCuH2ydHij2MCP3f6hQys7Ubvjita4nsPaBafibNKrmMqpcpgVGnZyDcBpuBKFHiyN2Ytz",
  "key5": "4rHnk1DNSMS72PfMYSJefARBQNfD5iCPNq5Kz1xSkxfXcvbRfLkH6KzNKnjymvC5dkun3w4nCXNDoi3BiTZ1Xu1i",
  "key6": "3mgSD4hbrHmgnMjwrcbjU9r5NMtRPb826vsBs3DMQw31r68fed9Dpvjk6f1jbGBFxuh2g2x1v2gkYqYbhUHGjTe2",
  "key7": "3MzgmiePrLNxTxn5bgWUEpTGKjJ7r3VajhMGWkDih1CVuediqoPb3dhc2dzox64TaB1R84vJAV8Q21k1d1YDb9EA",
  "key8": "3L7g4Lcv6DkdhopxVUjssMqeZcHjxhHyM1iEZYJLhP1nTJ3z3rzk2KczeMnnASdSsmaFoKTDsizzYQ7USTMujwhd",
  "key9": "3xhMmCGRcgbp82UJyv1w1HQfAbWTEo4UgLPFmRTB7TDGtdxKkepAzBkZG1SDN1hmCzVDosEkoCQqW9M2sQeLGork",
  "key10": "3k6F1hNq2M39THCwEkmM44Yw8knQTV2nKqFzaNPVtrXduNrcnqY2UEFYpiyPq76mcvWGhB8hqew5LJnnQcXrsWug",
  "key11": "cfsK8H4CUAfL7TCHTH8HHHfd9zjCLE83E2gRbSWUc78Dhg5r6owhy6PSuowyFAPvsWRMipYaHWxJPchPW4a5DXX",
  "key12": "55JoACGAFCN2eLUPqRuVA9tXGey7YX9g8c6QPBLGa6ushaS9xSMEo9yzhhpuG7YKHQArUF5T9Nw6DMRE8zAEDKet",
  "key13": "3S6uKYPuHnxQd8WiYqrTBEBRdYeinX4GUAC3MvXpRvQkfaE2NogrXhLArYmADcV9e5hNma7gApSDg7ioQifbCTAQ",
  "key14": "5K8SqaPXBAquanrmBBQcaiPEQFCrYvp64gXzZGw63YTz1xMKMqCHG1BvAZDgDmzLtPt9g73WKSGsooe7Rsuujg12",
  "key15": "5pZaRMazRTUUdMqRYR7zd7kYD2can8XopM6dNqC2dNtG1x8E5M7sDgYfP62w2NwjgCxeTXA1cmVRKY7pGNcSgxwv",
  "key16": "4jxemPcoiXC8LwDmUZuc4eAmwHvhXh8qe73qE8gsBgtNvMeSbgcTmtbe7idaNSfALV7fUG6JXAjvfRNzV9uvE7Ec",
  "key17": "25XpqyqnfX6exa9xu9rHqV5ji84zVPjJcDDwCL2bz6orzx8mA2BgCmfzyEWEqCMoxEEfhoKkjAt1h7gVy2wKKkuP",
  "key18": "63ndhXkEgu1rAdxsS5uL5t2osL8SXkts2GKwHDCMytjz5pHaZu2mgYww5LkvkSM2EWqRFetxniEqr6HQPTZcaQ6o",
  "key19": "2gyzQMy3LNVoifF5sPq5WE8MP42gxuhXsJMPQvSzuvZUKnBDrA6BEtMQtijqjV8c2YJcccDwS1Kgs1be2HueSRaq",
  "key20": "4tjs5THSsdNNHiYJGWfjv2V5VD2SQJaEkPZpPJLw7uaGurx4sVi7mBRioyJ3AAy58uq6QdHz795zv65RfmtmYjvk",
  "key21": "3sDa7vF62XC6Kt3WN3VgvRbRmTZVzQEsQroAyY1hBuXSRVzWzBKVmDVZxaKF3mHpPKJG2YAohSXKnk7tkHXxC6WY",
  "key22": "3XCmniL49ATnRa9qEp4R2nXYw5v5UVhdGhaTeiMaMD4wUzfGywJdTVMGeWLZJmejo3EQLo65eqng7LBAA8ZZ3Huh",
  "key23": "2uiv4m8c12Mq1VsfPdzUZNTVK1sf8TojRUD4e4KifR5kPw2bDrnbKGDspcC2YhbdvZSZappYzXnHxW2HMSuvGwgm",
  "key24": "d6BEo5pwoXKDrAmPyQUJdcR5qat7mDGs2gTBMydRHZkw3RwQ6PLEXdAxULTYipW8h8BqBqgUK8r9cd5thPftqsu",
  "key25": "3G2wEH3EehLGRS1GXqgvrvxikgYcwYoWH4whzTwGCmaZ2PENNXwFog1GbYGJggQY3toaqmpyV5BLGpQ6p1YjrG6r",
  "key26": "45J1vzPJDHU4Z76CmmckxbWQkeV4cENb4CiJERg6NSAuXSPR27bWFa1opRfo1can21ohC4QwUUMdeWxmY5w8JA9J",
  "key27": "3QYvsxzXt8xtoWLKmocAgGHQo3nbaxFXxgHaXj72RoxX6YsQBAw7FzAJbJM9YVH6E5vVwpmRe2mvpSVCcn5ZSduT",
  "key28": "364GXwDtpLFxWixSEsQH4es1jun1ztro9LgjdRc1sheg1DNqBTr7FDgpAUScfjdB9S6u4j6xbFayeLfC4g5dteJm",
  "key29": "4yTTe2M8NqS4yqmyTCTr86C4vnBgMfjnk4b5dyWdi3xJJsRMmST82LqEtbF5g4UmQPbMzf6opLdb48qX6FW81eCT"
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
