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
    "3Laqp4NZKEiE5zZLUjvzf7bEELjMV1u9rAvJWxQj4p2PLsotqfgmBSBTLeYsoMU8kyAP9MXVf33A34Jj8k8VzppN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBViiLdiav9qrn2TYdDCAh4SCGCRG5w36PFtBomovrvDUFQPikai8JVYHta8UkgeN1nyKaDN87YajMVwRBxKrpz",
  "key1": "4fzu9g7hbDPxU7aLkA7amnz9L6ffR6jsxD7qVcmS3oUbLSoS8paQpWrQshUXcmGNE7u81J76H87qnbPjjLsQXG45",
  "key2": "3GkdXjX5WTfw3f5xMNP9UUraBmDiV7RkqeDnpdzN8nzb3vFnHytSdNhuVqfS3cHwBXMJjw42C4PijZdNDbLxdW5M",
  "key3": "3zMvbQQDVdQLRaSKRB2893xNTNYeDECwVb1N8V1BAEYBdQS1BbqNzViKRRuzW4ZUkaNpJRb7BD1ArWJHqKK8aPAH",
  "key4": "31HFYvLuZvveQR8AcHPwLXhg6U7W3JhSKYPXbBNuTpHz52tkVWsKbsdZUHePSJkKkaeozAbJygTUPX7K7pcCmnkK",
  "key5": "2jNwGVsSCb86bAoKprTUSET1due1nrtPMH3mUBr7Ur643GDNyuvE4trnPTP2w8eWvH3XVUaNWPLc82g2gdQCx7Lw",
  "key6": "4JSBUQ6kxrJVSMYrm9gKUHp21aBVVrj4Np2GbaL15qVBMbm1cKdpvg6vGAZZA4WNbNxWyUdjLTvJks8ePJkwMeXN",
  "key7": "5FfpVJswYL8yC5fDxPkEUEfhzxKTemgPLWFLLszuqZnpEFTmF3J6AX1rmi12QNcqHW795fVss1X9xuoWUwoH9TJE",
  "key8": "5Vkiiadg2GwRtEMTC9VHyezbkVFU7QDKgEk6UrCDkoxYz8nXnR8ZFyW5cv6BDpQajFjLuNdzrptmuoPazmATiJ5X",
  "key9": "4S1iuoVxLNuCA1dnV8BEZbbuppe5on4Qh6Y7s6ZnxJAdMzxSeRZ1e8CvwEVPDoCxKfbKTn1WhirMW2eks5xGBo1V",
  "key10": "5df5Q7Zv4qgP4kpsNDqmwHKvBcvjrW596vPFLYwYVEu7oa6iJje5ceGsAEtvSNGfHVokpGP3u82UbPe2MkjXwxLV",
  "key11": "27VbtjtP6MS4VQm5eV64MxVMizFgDWQbGT8wZeaBfutL9xNv7mPnW79Cq1w5SUAkPDXsap4MeUki1h4iEDgf4PcV",
  "key12": "aVTMopDpSQRguSL8TK9Vc5UxiBCpBD4Afqp9GXNKRhf894PvfbY4RaeDbLkeyJFmSsMttedcHdkCjGUu4MFnezH",
  "key13": "3Skdqogha3nuhjybzdj9rveFQMrLhXHaa277ZZHXhKphbaaiGhmWpAjrZYsKyeaceiKRar8gS2eVTwk4b69sLv4X",
  "key14": "4QuMY9j4yQREMfWvbGmnuEqe67frLcgamSeXqMq8KLTmdKBKxB51NtwrZAPvxoDgiRGyiWUrL9HC7fBHvZgsoRdc",
  "key15": "5rtzLDtuPsdtBSxhfeQieSgKsQ7FNRTythuhJ6WFJqKy99mHmbeq91owgNe2Mx9vmfxgVzDtvzsYPQexuSezDeaj",
  "key16": "4MHFcE3msjrWesDsbD98ebZiT21yDWwmMuZXp3BWudsoABcHHECTCeABsudukVXFK17T25xqDg699zJuAdR16Zkc",
  "key17": "5dW6QUjLLUBeHnfAPDbFEjUTa7HeCGR4zT6codLH6KPcZJEwGprGkTxv4Hht8YmBbeZYdhqa8mbJ7Nt8CzaMuXYp",
  "key18": "5yPC2ZrGRS2ui6iXwv1FFjCYFLJ8DfbWsxthAB1G2Pw8AwHJvjvFZczDptBjqRxGCJjyXKTpaSMscc6x2tTdDHE6",
  "key19": "4igGVASF3TUsas1vjz6WoPwfbRFHPMdU591HTogR9AcsWPz74uctbx5wnM5CWDiFpw4keVkGzbhNKHHZyoHeuktQ",
  "key20": "4iJaEUnRSYvnGHVWB4fU4togyGycj8kHxmhcn8D6ji7AZj4k2GeaiaTnnGTUtRsYQoDms1br8oKs4ikq3opquJHR",
  "key21": "44iHUhgKJiy3XqrbqHa81FwTdLeoN8haKz3DTef2DNsWUCvWGE2QfXqG51QPEBSniPujq8zgdKgh4X5vD8yRYZHz",
  "key22": "2Gv13tmFZBzjG9DcgH2uw88Lp9C1eGSiirsEzkZMFWeURwt9urr79qLwzcwo3qf6UgTceXMjYkt24srNnNtV4Bz1",
  "key23": "7cP2UcdTDvgV9zRwpXgvndwuzpozCcV4WmQV2MGbhhA6EX2tuTdaFjpfemmvuUbRaiUnoRX8pKwG5CAAXgDL1mw",
  "key24": "4RFieEP2bUWXUmgVyopAGAZiDD17wMkqpCdmSAzAwXhb4zRpCni7iGuQU4F292kh36fPKTDEivTTKKWDzQ3zW9dW",
  "key25": "3mFpnGvh1nB4Nu6hfzcTZboTA7oGUiheYasp54bhRm7CTcvYii84XGdJoWpJa41GqBeNYgF5vuFLFp6htkbwfdP7",
  "key26": "hnu5X3MguX1JZzJmDRNjQSFZDB3mX5H7Cq67JufnPRjhHAdUxGGfNdd7BKkYNaowSf2tuc2jsKHup2Bj1fXoZRn",
  "key27": "37mXMFJG7kyWAzq3xAxN36wzEExZiJqyf85TGv43G6tYM2bdHQdUNyPtuzx8HbfeSX6xJbPRqjKQmFnm3fixeSCE",
  "key28": "4b6g94bGGMcy8ajVmzpFF2sNBSvGt4sVAs1hFpnrPTP2M7eUmEga58c3DtskM31kUZEWKuHFrTxhrAKwKfT6Teda",
  "key29": "4S1CjLQV8BmDbzxN8SgLSX9iEGKEpXYbuu7tHyesHZxBAMmDXJBB2zWaPRd41SoxnjDwcqTLECVdsDtBuMhUWAz5"
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
