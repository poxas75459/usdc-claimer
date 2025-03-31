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
    "3VGwp3Uc6yPv5EA4DMqUpN2JVexm9sF4QSg2MwX4kzcoRueFohDpPQkWVefQ7mMXf9bTgGRkUtpB6xoMtNrCK4Pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAZ71dgikuQDvdXCfjiQfPiUVRzsVhvp9phhPEUUDvTq9JQi7ncYEHuBXNTu5xK6GSAzxyMpNS63q5aipAxPtbm",
  "key1": "4jXKdNx6V3HYfPtCKcnD4zhDS5KSYVvrpqyu6rjJGjePAo4qviH9cmbtvfLLy7EHcUuJqtE4X9kLydLj2cKAe5KJ",
  "key2": "2VnfnQXxALRn2hSGkw3iu8F5gxjwKptGpMiMbxRp7dtWji54xS2HgF4bkfoEEWVh8o2P6ubDGKdD4dfZTUayLEFy",
  "key3": "5KHKqiPNmNFyBUaUo4W8KqGWiGwyf1FZmLZuHQTiShuiqTNzC7f6cRF4oW5egR6pJoYVT6sEmebs9JJa5tKJ2MZa",
  "key4": "4NZ73bSkr6BgvJt88VvodzhjtNPgQTdRrrWydAVFhzRCQGTFeht8Vvr88qCFDRV6ADq6c8FEDLDZCXTGwVQmYtbZ",
  "key5": "3DayxtVP8giCEpypfSLP3WsDkH6MsuAuYgpR5UUKPg4XikRzvRt4ztqwpKs1Wdpnz9uHBURpoMHUMMKz4yDuaxV6",
  "key6": "38A4iDiLLZXAXauKTQTG2XkP6a1eqx5yZPr1vYj8qxGWoi9gMexz7W7WsczFPHYtGeJVuUM6rWv8k7kzKGYFHoTW",
  "key7": "3PihTPqwFNfL2Tted2mkgEHniKrGEB48bWnQcsvZcik2f8AJRZGrhmytDjiUdkx6Jbgtyb2SvFcFyS5y8aJKJRbg",
  "key8": "2fqWzTyTHXdacvMURurKPMWVMyWHMr4X2nCVX8gyDuwgGr1mLXSdPydr6a92MKHHyiLQ8sCsFUrriUsG9fWJ1LU",
  "key9": "3BkUgfuUcs9maoCCt8QC9EJgdQcvgUSEq1XFDnm6XZn3V89NzNjwqs69rwzu6RMB4xu3E1DDzpm35jJQrHncwzEL",
  "key10": "47bDaT97eftatVEVH8C47JmhUPofW5EPRcEpLTrE9gDMfAGGiGkfYaHebiQqHQGiy5HSRQsmrjY2ZFyZQBQ5iCEB",
  "key11": "3W6umo2xWYaRsFeidYVhrQT4hjxFGggh1rRmo9h2wkH1bEuuLoJELp2v75Q7qAKFNeFEHctJbn7XYGQJwSVVsESW",
  "key12": "FHGoy45S9hDcqDHhoQh864Y4XQFfDKD2giTFFGsWpc3BzV22hPQCqJgZ2W6jxb1J4ZUxeeWStseGkhv89tuBUmP",
  "key13": "31rK4A9cRNLx9bihMMX6TdKd6SiKhP7s3AZNNLsWem5Tvmq6i58SiUe6dnjPqaM8KyH8eQSpbHucgMx1Vfo8NduG",
  "key14": "6BUHvVyco6zwXzMPCymFfdhXLpA4vhvewT7hicy6BuBAvpvnoounGZ5RrPoDDtTabmFQd1iV2XmSB6nKQcQuknX",
  "key15": "3LfyVfsLBiBY6motUYywoxwa8KYitkcTdEXmPsWZTc5Q9YKhes3CkZ6Y1ZWYqUNFhHApCs3AVxPRimVCgprcvtf1",
  "key16": "25KPosYNdQS9V13aXNpXiYFtUmuCssmupntEsrCU6fec2ad82LnprX3KvD3vvhzFsZtyomBdSA3cD4MCcLpQvY1A",
  "key17": "4hQSP6roNf6HGYrVu5TcGtH2gnVz18UspqPTm4n7eAD86tVPzrGPbV6jUpBbaMaw9SDGZvrav4GnyAnypA1aAxRW",
  "key18": "4UvD2zSfZ9Rrk8hN6b69jSrrkdXbpQt2vxEgLXAu1gSpZXCRFooY77ztrpAg7u47EcbNHrQYEu8gLtKfduneAfj2",
  "key19": "PsvLZovgbsEjXt1ANnc5tMxgxf4QnNZntMSAUdMEU6p6oSrdc31QdfoNb99CsyLAZG6W5mk9xD29eQePhm6GhSp",
  "key20": "ezPXKv8nX8eL5gVtQgncTaMr8pf1DET86civpDZa9jTi7vZ4kDjANs5GhjGqcuxPo1kxRtv2qtpfou3VbNoq1Jm",
  "key21": "4UwaxU7EXThf7eyEBRcQQNU52DYdrL1zMzUd93iSbTeCCEHidhoMfe2hdMTVuw5pT1xDWyKJcefrZqiFj5BEbGY",
  "key22": "5iRZwFyvUyQJBKgg61xesiqcEtZW5R2ToLQwSBxYneTv2zYurCpSJ5wbt43XbPnnwXfgLWfqrfbbQJo2Tmwyvs27",
  "key23": "utGR97UuVpf78tj7U2pJ9iHqchKJL1mWTDyv8txDTmxNKTsgoSAVjMcAReVdMpDBtZhVRxefgqBd6sneXsxXLFY",
  "key24": "2HQ2m9xi2MpprPYEYtYF1JW8p1pTnuyBzY48BbzA3YQQSo8d99Ris6eefoMeBro8ZknXdphRsSkhsFgfZdchHf83",
  "key25": "3E7WjxepH3ijiisTz1xxM8ghTNhAhTfDsttYMgwf7j4eAvgq6Easjk1DhJkG7unrM13yNaNoRDs28StGZYLTCzcU"
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
